<?php
/**
 * Plugin Name: Jwero anti-scrape
 * Description: For the WordPress site at www.jwero.ai. Serves the robots.txt policy (search and AI answer engines may read, AI training crawlers may not), adds the AI opt-out signals to every page, blocks named training crawlers, catches robots-ignoring bots with a honeypot, and closes the doors scrapers use on WordPress: anonymous REST content listing, XML-RPC, full-text feeds and author enumeration. Logged-in users are never affected. Must-use plugin: copy to wp-content/mu-plugins/.
 * Version: 1.0.0
 * Author: Jwero
 */

if (!defined('ABSPATH')) { exit; }

final class Jwero_Anti_Scrape {
    const BAIT = '/.well-known/bait/';

    /** Crawlers that collect text to train models. Search engines and answer engines are not listed here. */
    const TRAIN = ['GPTBot', 'ClaudeBot', 'anthropic-ai', 'Claude-Web', 'CCBot', 'Google-Extended', 'Bytespider', 'Applebot-Extended', 'meta-externalagent', 'Meta-ExternalAgent', 'Meta-ExternalFetcher', 'FacebookBot', 'Amazonbot', 'cohere-ai', 'cohere-training-data-crawler', 'AI2Bot', 'Ai2Bot-Dolma', 'Diffbot', 'ImagesiftBot', 'img2dataset', 'omgili', 'omgilibot', 'webzio-extended', 'PanguBot', 'PetalBot', 'Timpibot', 'VelenPublicWebCrawler', 'Kangaroo Bot', 'Scrapy', 'Crawlspace', 'Brightbot', 'SemrushBot-OCOB', 'Sidetrade indexer bot', 'iaskspider', 'MistralAI-User'];

    /** Answer engines: may read and cite, like a search engine. */
    const ANSWER = ['OAI-SearchBot', 'ChatGPT-User', 'PerplexityBot', 'Perplexity-User', 'Claude-SearchBot', 'Claude-User', 'DuckAssistBot', 'YouBot'];

    public static function boot() {
        add_action('init', [__CLASS__, 'gate'], 0);
        add_filter('robots_txt', [__CLASS__, 'robots'], 99, 2);
        add_action('wp_head', [__CLASS__, 'head'], 1);
        add_action('wp_footer', [__CLASS__, 'footer'], 99);
        add_action('send_headers', [__CLASS__, 'headers']);
        add_filter('xmlrpc_enabled', '__return_false');
        add_filter('wp_headers', [__CLASS__, 'strip_pingback']);
        add_filter('rest_authentication_errors', [__CLASS__, 'rest_gate']);
        add_action('template_redirect', [__CLASS__, 'author_enumeration'], 0);
        add_filter('pre_option_rss_use_excerpt', function () { return '1'; });
        add_filter('the_excerpt_rss', [__CLASS__, 'feed_note']);
        remove_action('wp_head', 'wp_generator');
        remove_action('wp_head', 'wlwmanifest_link');
        remove_action('wp_head', 'rsd_link');
    }

    private static function ip() {
        $ip = $_SERVER['HTTP_CF_CONNECTING_IP'] ?? ($_SERVER['REMOTE_ADDR'] ?? '');
        return preg_replace('/[^0-9a-fA-F:.]/', '', (string) $ip);
    }

    private static function deny() {
        status_header(403);
        nocache_headers();
        header('Content-Type: text/plain; charset=utf-8');
        echo "Automated access to this site is not permitted. See /robots.txt. Questions: care@jwero.ai\n";
        exit;
    }

    /** Runs before anything renders: the honeypot, remembered honeypot visitors, and named training crawlers. */
    public static function gate() {
        if (is_user_logged_in() || (defined('WP_CLI') && WP_CLI) || (defined('DOING_CRON') && DOING_CRON)) { return; }
        $path = (string) (parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/');
        $ip = self::ip();
        $key = 'jw_bait_' . md5($ip);
        if (strpos($path, self::BAIT) === 0) {
            if ($ip !== '') { set_transient($key, 1, DAY_IN_SECONDS); }
            self::deny();
        }
        if ($ip !== '' && get_transient($key)) { self::deny(); }
        $ua = (string) ($_SERVER['HTTP_USER_AGENT'] ?? '');
        if ($ua !== '') {
            foreach (self::TRAIN as $bot) {
                if (stripos($ua, $bot) !== false) { self::deny(); }
            }
        }
    }

    /** The virtual robots.txt. A physical robots.txt in the web root overrides this; delete it or replace it with the file in this kit. */
    public static function robots($output, $public) {
        if (!$public) { return $output; }
        $sitemap = defined('WPSEO_VERSION') || defined('RANK_MATH_VERSION') ? 'sitemap_index.xml' : 'wp-sitemap.xml';
        $lines = [
            '# Jwero. Search engines and AI answer engines may read and cite this site.',
            '# Crawlers that collect text to train AI models may not. See the Terms of Use.',
            'Content-Signal: search=yes, ai-input=yes, ai-train=no',
            '',
            'User-agent: *',
            'Disallow: ' . self::BAIT,
            'Disallow: /wp-admin/',
            'Disallow: /wp-login.php',
            'Disallow: /xmlrpc.php',
            'Disallow: /wp-json/',
            'Disallow: /?s=',
            'Disallow: /*?replytocom=',
            'Disallow: /trackback/',
            'Allow: /wp-admin/admin-ajax.php',
            'Allow: /',
            '',
        ];
        foreach (self::ANSWER as $bot) {
            array_push($lines, 'User-agent: ' . $bot, 'Disallow: ' . self::BAIT, 'Disallow: /wp-json/', 'Allow: /', '');
        }
        foreach (self::TRAIN as $bot) {
            array_push($lines, 'User-agent: ' . $bot, 'Disallow: /', '');
        }
        $lines[] = 'Sitemap: ' . home_url('/' . $sitemap);
        return implode("\n", $lines) . "\n";
    }

    public static function head() {
        echo "<meta name=\"robots\" content=\"noai, noimageai\">\n<meta name=\"tdm-reservation\" content=\"1\">\n";
    }

    /** Hidden link that only robots-ignoring clients follow. People never see it; it is out of the tab order and disallowed in robots.txt. */
    public static function footer() {
        echo '<a href="' . esc_attr(self::BAIT) . '" rel="nofollow" tabindex="-1" aria-hidden="true" style="display:none">Index</a>' . "\n";
    }

    public static function headers() {
        if (!is_admin()) { header('X-Robots-Tag: noai, noimageai', false); }
    }

    public static function strip_pingback($headers) {
        unset($headers['X-Pingback']);
        return $headers;
    }

    /** Anonymous clients may not list content through the REST API. Logged-in users, the editor and other plugins' namespaces are untouched. */
    public static function rest_gate($result) {
        if (!empty($result) || is_user_logged_in()) { return $result; }
        $route = '';
        if (isset($GLOBALS['wp']) && !empty($GLOBALS['wp']->query_vars['rest_route'])) {
            $route = (string) $GLOBALS['wp']->query_vars['rest_route'];
        } else {
            $route = (string) (parse_url($_SERVER['REQUEST_URI'] ?? '', PHP_URL_PATH) ?: '');
        }
        $closed = apply_filters('jwero_rest_closed_routes', ['posts', 'pages', 'media', 'users', 'search', 'comments', 'categories', 'tags', 'block-renderer']);
        if (preg_match('#/wp/v2/(' . implode('|', array_map('preg_quote', $closed)) . ')(/|$|\?)#', $route)) {
            return new WP_Error('jwero_rest_closed', 'Content endpoints are not available to unauthenticated clients.', ['status' => 401]);
        }
        return $result;
    }

    /** ?author=N must not reveal usernames. */
    public static function author_enumeration() {
        if (!is_admin() && isset($_GET['author'])) {
            wp_safe_redirect(home_url('/'), 301);
            exit;
        }
    }

    public static function feed_note($excerpt) {
        return $excerpt . ' Read the full article on jwero.ai. Copyright Jwero; no bulk copying or AI training without written permission.';
    }
}

Jwero_Anti_Scrape::boot();
