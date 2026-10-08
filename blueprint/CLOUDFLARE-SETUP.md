# Cloudflare in front of www.jwero.ai

Decided 2026-10-08: block AI training crawlers, keep search and answer engines, stop bulk scrapers at the edge, no browser-side copy blockers. The site files (robots.txt, meta tags, Terms, honeypot) are in the build; this runbook covers the part only the Cloudflare account owner can do. Allow about 30 minutes. Nothing changes for visitors while the nameservers propagate; the old DigitalOcean DNS keeps answering until the registrar switch completes.

## 1. Records that must survive the move

Captured with `dig` on 2026-10-08. Cloudflare imports most of these when the zone is added; check every one before changing nameservers.

| Type | Name | Value | Proxy |
|---|---|---|---|
| A | jwero.ai | 65.20.91.131 | Proxied (orange) |
| A | www | 65.20.91.131 | Proxied (orange) |
| CNAME | app | jwero-65juw.ondigitalocean.app | DNS only (grey) |
| CNAME | os | pim-azbuhqfbfedzfscc.z02.azurefd.net | DNS only (grey) |
| CNAME | mail | ghs.googlehosted.com | DNS only (grey) |
| MX | jwero.ai | 1 aspmx.l.google.com | |
| MX | jwero.ai | 5 alt1.aspmx.l.google.com | |
| MX | jwero.ai | 5 alt2.aspmx.l.google.com | |
| MX | jwero.ai | 10 alt3.aspmx.l.google.com | |
| MX | jwero.ai | 10 alt4.aspmx.l.google.com | |
| TXT | jwero.ai | v=spf1 include:zoho.in include:zeptomail.net.in include:sender.zohosubscriptions.in ~all include:_spf.google.com ~all include:zcsend.in include:one.zoho.in ~all | |
| TXT | jwero.ai | google-site-verification=-Nyi_KnjmT3WNRc6Ij2SbXwImFk76W1djQWmhOgX3-k | |
| TXT | jwero.ai | google-site-verification=ODl5pugwROCPr-AyAIpFMMMOI-7dz5Rcg3woKff4FM0 | |
| TXT | jwero.ai | zoho-verification=zb30571156.zmverify.zoho.in | |
| TXT | jwero.ai | openai-domain-verification=dv-HhEd0R2qCEVvHH7tU8NwLGY1 | |
| TXT | jwero.ai | cloudflare_oauth_client_publisher=6f8ad92942ad06065fa17308a519f191 | |
| TXT | _dmarc | v=DMARC1; p=none; | |
| TXT | google._domainkey | v=DKIM1; k=rsa; p=MIIBIjAN… (copy the full value from DigitalOcean DNS) | |

Only `jwero.ai` and `www` go through Cloudflare. `app`, `os` and `mail` stay DNS only, or their own TLS and hosts break. Check DigitalOcean DNS for any record not listed here (other DKIM selectors, Zoho CNAMEs) and carry it across.

## 2. Add the zone

1. dash.cloudflare.com → Add a site → `jwero.ai` → Free plan.
2. Review the imported records against the table above; add anything missing; set the proxy status per the table.
3. Cloudflare shows two nameservers. At the registrar for jwero.ai, replace the three `ns*.digitalocean.com` entries with them. Propagation takes minutes to a few hours.
4. SSL/TLS → Overview → **Full**. (Switch to Full (strict) after installing a Cloudflare origin certificate on the nginx server; the DigitalOcean host must keep serving HTTPS on 65.20.91.131.)
5. SSL/TLS → Edge Certificates → Always Use HTTPS: on. Automatic HTTPS Rewrites: on.

## 3. Bots and scrapers

Security → Bots:
- **Block AI Bots**: on. This blocks the AI crawlers Cloudflare identifies, including those that ignore robots.txt. Search engines and verified answer-engine fetchers are not affected.
- **Bot Fight Mode**: on. Challenges traffic that behaves like an automated client.
- **Managed robots.txt** (if offered): leave off. The site serves its own robots.txt with the same Content-Signal lines.

Security → WAF → Custom rules (the free plan allows five):

1. *Honeypot*. Expression: `(http.request.uri.path contains "/.well-known/bait")`. Action: Block. The site hides a link to that path that only robots-ignoring crawlers follow.
2. *Scripted clients*. Expression: `(http.user_agent contains "python-requests") or (http.user_agent contains "Scrapy") or (http.user_agent contains "Go-http-client") or (http.user_agent contains "curl/") or (http.user_agent contains "wget") or (http.user_agent contains "HeadlessChrome") or (http.user_agent eq "")` and `not cf.client.bot`. Action: Managed Challenge.
3. *Training crawlers that lie about their name* are covered by Block AI Bots; nothing to add.

Security → WAF → Rate limiting rules (the free plan allows one):
- Expression: `(http.request.uri.path ne "/assets")` with characteristics IP; rate 100 requests per 10 seconds; action Block for 10 seconds. A person reading the site never gets near this; a bulk scraper does on the first page of the solutions hub.

Scrape Shield:
- Hotlink Protection: on (stops other sites embedding the share images and brand files).
- Email Address Obfuscation: on.

## 4. After the switch

- `curl -I https://www.jwero.ai/` should show `server: cloudflare` and a `cf-ray` header.
- `curl -A "GPTBot" https://www.jwero.ai/` should be blocked once Block AI Bots is on; `curl -A "Googlebot" …` is not blocked (Cloudflare verifies Googlebot by IP, so a spoofed one may be challenged, which is correct).
- Watch Security → Events for a week; add any persistent scraper's ASN to a custom block rule.
- Analytics → Traffic shows requests by bot category; the AI crawler report confirms what was blocked.

## 5. The hole no edge rule closes

The source repository `karanjagani/jwero-website` is public on GitHub, with every page's text, the calculators and the build. Anyone, and every AI crawler, can clone it without touching www.jwero.ai at all. Make the repository private, and move the staging preview off GitHub Pages (a private repo cannot use Pages on the free plan; Cloudflare Pages with Access, or a password on a preview subdomain, replaces it). Check first how the server at 65.20.91.131 receives its files: if it pulls from GitHub, it needs a deploy key before the repo goes private.
