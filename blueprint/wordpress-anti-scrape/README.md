# Anti-scrape kit for the WordPress site at www.jwero.ai

Decided 2026-10-08: search engines and AI answer engines may read and cite the site; AI training crawlers may not; bulk scrapers are stopped; nothing changes for people reading the site. The new static site carries the same policy in its build; this kit applies it to the WordPress site that is live today.

## What the plugin does

| Door | Before | After |
|---|---|---|
| robots.txt | WordPress default, everything allowed | Search and answer engines allowed, 35 training crawlers disallowed, Content-Signal `ai-train=no`, honeypot and admin paths disallowed |
| Every page | no opt-out signals | `noai, noimageai` and `tdm-reservation` meta tags plus an `X-Robots-Tag` header |
| Named training crawlers | served normally | 403 at the first request, before WordPress renders anything |
| Robots-ignoring bots | nothing | A hidden link to `/.well-known/bait/`; any client that follows it is blocked for 24 hours from that IP |
| REST API `/wp-json/wp/v2/posts` and friends | every post, page, image and user as JSON to anyone | 401 for anonymous clients; logged-in users and other plugins' endpoints unaffected |
| XML-RPC | enabled | disabled |
| RSS feeds | full article text | excerpt plus a copyright line |
| `?author=1` | reveals usernames | redirects home |
| Version and discovery tags in `<head>` | present | removed |

Logged-in users, WP-CLI and cron are never blocked.

Checked on 2026-10-08 before installing: the REST user list, XML-RPC and `?author=` were already closed on www.jwero.ai (a security plugin is doing that); the REST post listing was open (every article as JSON), feeds carried full text, GPTBot was served normally, and no opt-out signals were present. Rank Math is the SEO plugin, so the sitemap is `sitemap_index.xml`.

One limit: if a page-cache plugin serves a page from cache, PHP does not run for that request, so the crawler block and the honeypot apply only to uncached requests. The meta tags are inside the cached HTML, so they always ship. Cloudflare's AI-bot block in `CLOUDFLARE-SETUP.md` closes that gap at the edge.

## Install (10 minutes)

1. Copy `jwero-anti-scrape.php` to `wp-content/mu-plugins/` on the server (create the folder if it is missing). Must-use plugins need no activation and cannot be switched off by accident from the admin. SFTP, the host's file manager, or WP-CLI all work.
   If file access is not possible: zip the file and upload it under Plugins → Add New → Upload, then activate. Same code, just deactivatable.
2. Check for a physical robots.txt: if `curl https://www.jwero.ai/robots.txt | head -2` does not start with `# Jwero.` after step 1, a file named `robots.txt` exists in the web root and wins over WordPress. Replace it with the `robots.txt` in this folder, or delete it.
3. Purge every cache: the caching plugin (WP Rocket, LiteSpeed, W3TC, whichever is installed), the host cache, and Cloudflare once it is in front.
4. Settings → Reading: nothing to change; the plugin forces feeds to excerpts.

## Verify

Run these from a phone on mobile data, not from the office connection, because the honeypot test blocks the IP it is run from for a day.

```bash
curl -s https://www.jwero.ai/robots.txt | head -3
```
Expect the `# Jwero.` comment and the Content-Signal line.

```bash
curl -s -o /dev/null -w "%{http_code}\n" -A "Mozilla/5.0 (compatible; GPTBot/1.1)" https://www.jwero.ai/
```
Expect `403`.

```bash
curl -s -o /dev/null -w "%{http_code}\n" "https://www.jwero.ai/wp-json/wp/v2/posts"
```
Expect `401`.

```bash
curl -s -o /dev/null -w "%{http_code}\n" -X POST https://www.jwero.ai/xmlrpc.php
```
Expect `403` or a body saying XML-RPC services are disabled.

```bash
curl -s https://www.jwero.ai/feed/ | grep -c "<content:encoded>"
```
Expect `0`.

```bash
curl -s -o /dev/null -w "%{http_code}\n" https://www.jwero.ai/.well-known/bait/
curl -s -o /dev/null -w "%{http_code}\n" https://www.jwero.ai/
```
Expect `403` twice: the second request is blocked because the first one touched the honeypot. The block clears by itself after 24 hours.

Then open the site normally in a browser: pages, images, forms and the admin should all behave as before.

## If something breaks

- A front-end feature stops working and the browser console shows a 401 from `/wp-json/wp/v2/...`: some theme or plugin loads content through the REST API for visitors. Allow that route by adding to a theme's functions.php:
  `add_filter('jwero_rest_closed_routes', function ($r) { return array_diff($r, ['posts']); });`
- The office is blocked: someone opened the hidden honeypot link from the page source. Wait 24 hours, or clear it with WP-CLI: `wp transient delete --all` (or delete the `jw_bait_*` transient for that IP).
- Rollback: delete `wp-content/mu-plugins/jwero-anti-scrape.php` (or deactivate the plugin). Everything returns to how it was.

## Then

Cloudflare in front of the domain, per `blueprint/CLOUDFLARE-SETUP.md`: it adds rate limits and blocks crawlers that lie about their name, which no plugin can do. The kit and Cloudflare work together; the plugin's honeypot and crawler block keep working behind Cloudflare because it reads the visitor IP from the `CF-Connecting-IP` header.
