#!/usr/bin/env node
// Jwero marketing site — static build + dev server.
// Usage: node build.js [--serve] [--port 4173]
// URL convention: extensionless canonical paths. Every page renders to <slug>/index.html
// and is linked internally as "/<slug>" (no trailing slash, no .html) — standard "clean URLs"
// behaviour on Netlify/Vercel/Cloudflare Pages/Azure SWA; the dev server below replicates it.

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const SITE = 'https://jwero.ai';
const BRAND = 'Jwero';
const TAGLINE = 'The AI Operating System for Jewellery Business';
const SIGNATURE = 'One system that remembers every customer.';
const ORG_DESCRIPTION =
  'Jwero is the AI operating system for jewellery business: one customer record, one catalogue, one inventory truth and one inbox — with WhatsApp and Instagram commerce, gold savings schemes, digital gold, and governed AI staff, in one place.';

// ---------------------------------------------------------------- pages
const pages = [
  ...require('./content/home'),
  ...require('./content/platform'),
  ...require('./content/products'),
  ...require('./content/products-sell'),
  ...require('./content/products-run'),
  ...require('./content/products-grow'),
  ...require('./content/industries'),
  ...require('./content/solutions'),
  ...require('./content/solutions-retail-segments'),
  ...require('./content/solutions-wholesale'),
  ...require('./content/solutions-manufacturing-segments'),
  ...require('./content/solutions-other-segments'),
  ...require('./content/pain'),
  ...require('./content/trust'),
  ...require('./content/compare'),
  ...require('./content/tools'),
  ...require('./content/faq'),
  ...require('./content/company'),
  ...require('./content/partners'),
  ...require('./content/blog'),
];

// ---------------------------------------------------------------- nav
// Matches Blueprint v2 §3.2.1 — 6 top-level items, Products as the 4-pillar "app grid" mega-menu.
const NAV = [
  {
    label: 'Platform',
    items: [
      ['/platform', 'The OS tour', 'One record, one catalogue, one truth'],
      ['/platform/customer-memory', 'Customer Memory', '90+ fields on every customer'],
      ['/platform/ai-workforce', 'AI Workforce & Governance', '240+ governed actions, approvals, kill switches'],
      ['/platform/integrations', 'Integrations', 'Tally, Zoho Books, Shopify, Meta and more'],
      ['/trust/security', 'Security & Data Ownership', 'Your data, exportable anytime'],
      ['/platform/onboarding', 'Onboarding & Support', 'Live in days, trained in your language'],
      ['/roadmap', 'Roadmap & Changelog', "What's shipped, what's next — in public"],
    ],
  },
  {
    label: 'Products',
    groups: [
      { title: 'Sell', items: [
        ['/products/whatsapp', 'WhatsApp Commerce'],
        ['/products/instagram-facebook', 'Instagram & Facebook'],
        ['/products/ai-sales-agents', 'AI Sales Agents & Voice'],
        ['/products/optimize', 'Optimize (Website CRO)'],
      ]},
      { title: 'Know', items: [
        ['/products/crm', 'Jewellery CRM'],
      ]},
      { title: 'Run', items: [
        ['/products/catalog', 'Catalogue (PIM)'],
        ['/products/inventory', 'Inventory'],
        ['/products/billing-finance', 'Billing & Finance'],
        ['/products/erp', 'ERP, reconsidered'],
      ]},
      { title: 'Grow', items: [
        ['/products/gold-schemes', 'Gold Savings Schemes'],
        ['/products/digital-gold', 'Digital Gold'],
        ['/products/multi-store', 'Multi-store & Franchise'],
      ]},
    ],
    footer: ['Every module reads the same customer record. That’s the OS.', '/platform'],
  },
  {
    label: 'Solutions',
    groups: [
      { title: 'By business', items: [
        ['/solutions', 'All solutions'],
        ['/industries/retail', 'Retail (hub)'],
        ['/solutions/single-store', 'Single store'],
        ['/solutions/multi-store-chains', 'Multi-store & chains'],
        ['/solutions/luxury-boutique', 'Luxury & boutique'],
        ['/solutions/bridal', 'Bridal & wedding'],
        ['/solutions/d2c-brands', 'D2C & ecommerce-first'],
        ['/solutions/manufacturers', 'Manufacturers (hub)'],
        ['/solutions/b2b-jewellery', 'Wholesale & B2B'],
        ['/solutions/franchise-networks', 'Franchise networks'],
      ]},
      { title: 'By pain', items: [
        ['/solutions/pain', 'All pains'],
        ['/solutions/pain/dead-stock', 'Dead stock'],
        ['/solutions/pain/lead-leakage', 'Lead leakage'],
      ]},
    ],
    footer: ['See all 22 segments →', '/solutions'],
  },
  { label: 'Pricing', href: '/pricing' },
  { label: 'Customers', href: '/customers' },
  {
    label: 'Resources',
    items: [
      ['/faq', 'FAQ', 'Every objection, answered honestly'],
      ['/blog', 'Blog', 'Practical guides, not filler'],
      ['/tools', 'Tools & Calculators', 'Dead stock, gold scheme, WhatsApp revenue, gold loss'],
      ['/compare', 'Compare Alternatives', 'ERPs, WhatsApp tools, ecommerce & more'],
      ['/migration', 'Migration Centre', 'Switch without fear'],
      ['/partners', 'Partners', 'ERP dealers, accountants, consultants'],
      ['/roadmap', 'Roadmap', 'Shipped, building, not yet'],
    ],
  },
];

function navHTML() {
  const dd = (m) => {
    if (m.href) return `<a class="nav-link" href="${m.href}">${m.label}</a>`;
    const inner = m.groups
      ? m.groups.map((g) => `<div class="dd-group"><p class="dd-title">${g.title}</p>${g.items
          .map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}</div>`).join('') +
          (m.footer ? `<a class="dd-footer" href="${m.footer[1]}">${m.footer[0]} →</a>` : '')
      : m.items.map(([h, l, d]) => `<a href="${h}"><strong>${l}</strong>${d ? `<span>${d}</span>` : ''}</a>`).join('');
    return `<details class="nav-dd"><summary class="nav-link">${m.label}</summary><div class="dd-panel${m.groups ? ' dd-cols' : ''}">${inner}</div></details>`;
  };
  return `
<div class="ann-bar"><div class="container">${TAGLINE} — <a href="#" data-wa="announce">chat with us on WhatsApp →</a></div></div>
<header class="site-header">
  <div class="container header-row">
    <a class="logo" href="/" aria-label="Jwero home"><img src="/assets/jwero-mark.png" alt="" width="80" height="120"><span class="logo-word">Jwero</span></a>
    <nav class="main-nav" aria-label="Main">${NAV.map(dd).join('')}</nav>
    <div class="header-cta">
      <button class="theme-toggle" type="button" aria-label="Toggle dark mode">◐</button>
      <a class="btn btn-wa" href="#" data-wa="header">WhatsApp</a>
      <a class="btn btn-primary" href="/book-demo">Book a demo</a>
      <button class="nav-burger" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>
    </div>
  </div>
</header>`;
}

function footerHTML() {
  const col = (t, links) =>
    `<div class="f-col"><p class="f-title">${t}</p>${links.map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}</div>`;
  return `
<footer class="site-footer">
  <div class="container">
    <div class="f-grid">
      <div class="f-brand">
        <p class="logo"><img src="/assets/jwero-mark.png" alt="" width="80" height="120"><span class="logo-word">Jwero</span></p>
        <p class="f-tag">${SIGNATURE}<br>${TAGLINE}.</p>
        <p class="f-enemy">“Your software keeps accounts.<br>It doesn’t remember customers.”</p>
      </div>
      ${col('Products', [['/products','App grid'],['/products/whatsapp','WhatsApp Commerce'],['/products/instagram-facebook','Instagram & Facebook'],['/products/ai-sales-agents','AI Sales Agents'],['/products/crm','Jewellery CRM'],['/products/catalog','Catalogue (PIM)'],['/products/inventory','Inventory'],['/products/billing-finance','Billing & Finance (roadmap)'],['/products/gold-schemes','Gold Schemes'],['/products/digital-gold','Digital Gold'],['/products/multi-store','Multi-store']])}
      ${col('Solutions', [['/solutions','All 22 solutions'],['/industries/retail','Retail'],['/solutions/single-store','Single store'],['/solutions/multi-store-chains','Multi-store & chains'],['/solutions/luxury-boutique','Luxury & boutique'],['/solutions/bridal','Bridal & wedding'],['/solutions/manufacturers','Manufacturers'],['/solutions/b2b-jewellery','Wholesale & B2B'],['/solutions/d2c-brands','D2C brands'],['/solutions/franchise-networks','Franchise networks'],['/solutions/pain/dead-stock','Dead stock'],['/solutions/pain/lead-leakage','Lead leakage']])}
      ${col('Resources', [['/faq','FAQ — every objection'],['/blog','Blog'],['/tools','Tools & Calculators'],['/tools/dead-stock-calculator','Dead Stock Calculator'],['/tools/gold-scheme-calculator','Gold Scheme Calculator'],['/tools/whatsapp-revenue-estimator','WhatsApp Revenue Estimator'],['/tools/gold-loss-calculator','Gold-Loss Calculator'],['/compare','Compare alternatives'],['/compare/jwero-vs-shopify','Jwero vs Shopify'],['/compare/jwero-vs-wati','Jwero vs WATI'],['/migration','Migration Centre'],['/partners','Partners'],['/customers','Customer proof']])}
      ${col('Company', [['/company','About'],['/pricing','Pricing'],['/book-demo','Book a demo'],['/enterprise','Enterprise'],['/contact','Contact']])}
      ${col('Trust', [['/trust/security','Security'],['/roadmap','Roadmap'],['/legal/privacy','Privacy'],['/legal/terms','Terms'],['/legal/dpdp','DPDP statement']])}
    </div>
    <div class="f-proof">90+ customer-record fields · 240+ governed AI actions · AI voice in 14 languages · 5 kill-switch scopes · Tally, Zoho Books, Shopify, WooCommerce, Unicommerce &amp; Meta connectors built in.</div>
    <div class="f-bottom">
      <p>© <span data-year></span> Jwero. All rights reserved.</p>
      <p>This site runs on Jwero — the chat button is the product.</p>
    </div>
  </div>
</footer>
<div class="sticky-bar" role="navigation" aria-label="Quick actions">
  <a href="tel:+919967160916">Call</a>
  <a class="sb-wa" href="#" data-wa="sticky">WhatsApp</a>
  <a class="sb-demo" href="/book-demo">Book demo</a>
</div>`;
}

// ---------------------------------------------------------------- layout
const FAVICON = '/assets/favicon.png';

function orgSchema() {
  return {
    '@context': 'https://schema.org', '@type': 'Organization',
    name: BRAND, url: SITE, slogan: TAGLINE, description: ORG_DESCRIPTION,
    contactPoint: { '@type': 'ContactPoint', contactType: 'sales', url: SITE + '/book-demo' },
  };
}

function layout(page) {
  const urlPath = page.slug === 'index' ? '' : `/${page.slug}`;
  const canonical = SITE + (urlPath || '/');
  const schemas = [orgSchema(), { '@context': 'https://schema.org', '@type': 'WebSite', name: BRAND, url: SITE }];
  if (page.faqs) {
    schemas.push({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: page.faqs.map((f) => ({
        '@type': 'Question', name: f.q.replace(/<[^>]+>/g, ''),
        acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
      })),
    });
  }
  if (page.breadcrumbs) schemas.push(require('./lib').breadcrumbSchema(page.breadcrumbs, SITE));
  if (page.schema) schemas.push(page.schema);
  const robotsMeta = page.noindex ? `<meta name="robots" content="noindex,follow">` : '';
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title}</title>
<meta name="description" content="${page.description}">
${robotsMeta}
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${BRAND}">
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.description}">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" href="${FAVICON}">
<meta name="theme-color" content="#0013b7" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0a0b12" media="(prefers-color-scheme: dark)">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap">
<link rel="stylesheet" href="/assets/site.css">
<script>(function(){try{var t=localStorage.getItem('jwero-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();</script>
${schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
</head>
<body>
<a class="skip-link" href="#main">Skip to content</a>
${navHTML()}
${page.breadcrumbs ? require('./lib').breadcrumbs(page.breadcrumbs) : ''}
<main id="main" tabindex="-1">
${page.body}
</main>
${footerHTML()}
<script src="/assets/site.js" defer></script>
</body>
</html>`;
}

// ---------------------------------------------------------------- whatsapp redirect (special, no chrome)
function whatsappRedirectPage() {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Opening WhatsApp… | Jwero</title>
<meta name="robots" content="noindex,nofollow">
<style>body{font-family:-apple-system,Inter,sans-serif;background:#0013b7;color:#fff;display:flex;align-items:center;justify-content:center;min-height:100vh;text-align:center;padding:24px}a{color:#fff}</style>
</head>
<body>
<div>
  <p>Opening WhatsApp…</p>
  <p><a id="wa-fallback" href="https://wa.me/910000000000">Tap here if it doesn't open automatically</a></p>
</div>
<script>
(function(){
  var params = new URLSearchParams(location.search);
  var ref = params.get('ref') || 'whatsapp-redirect/qr';
  var msg = params.get('msg') || 'Hi Jwero — I scanned your code and would like to see a quick demo.';
  var url = 'https://wa.me/910000000000?text=' + encodeURIComponent(msg + ' [ref:' + ref + ']');
  document.getElementById('wa-fallback').href = url;
  location.replace(url);
})();
</script>
</body>
</html>`;
}

// ---------------------------------------------------------------- build
function build() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });
  // assets
  fs.cpSync(path.join(ROOT, 'assets'), path.join(DIST, 'assets'), { recursive: true });
  // pages — extensionless clean-URL output: <slug>/index.html (home -> index.html)
  for (const p of pages) {
    const dir = p.slug === 'index' ? DIST : path.join(DIST, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), layout(p));
  }
  // /whatsapp special redirect (offline QR / print codes)
  fs.mkdirSync(path.join(DIST, 'whatsapp'), { recursive: true });
  fs.writeFileSync(path.join(DIST, 'whatsapp', 'index.html'), whatsappRedirectPage());

  // robots — AI crawlers explicitly welcome (GEO policy).
  fs.writeFileSync(path.join(DIST, 'robots.txt'),
`User-agent: *
Allow: /
User-agent: GPTBot
Allow: /
User-agent: ClaudeBot
Allow: /
User-agent: PerplexityBot
Allow: /
User-agent: Google-Extended
Allow: /
Sitemap: ${SITE}/sitemap.xml
`);
  // llms.txt — curated machine-readable truth (GEO/AIO).
  fs.writeFileSync(path.join(DIST, 'llms.txt'),
`# Jwero — ${TAGLINE}

> Jwero is the AI operating system for jewellery business. One customer record (90+ fields,
> including gold-plan balances and family occasions), one catalogue, one inventory truth and one
> inbox — with WhatsApp and Instagram commerce, gold savings schemes, digital gold, and an AI
> workforce that acts only inside approval queues, daily caps, quiet hours and a five-scope kill
> switch enforced in the product ("AI that waits for your yes").

## Category
Jwero calls this category the Jewellery Business OS / AI Operating System for Jewellery Business.
It serves single stores, multi-store chains, luxury/boutique/bridal retailers, diamond/gold/silver/
platinum/lab-grown/gemstone retailers, wholesalers, manufacturers (gold, diamond, casting, CAD, OEM,
export), and jewellery brands, D2C startups and franchise networks alike.

## What Jwero is not (honesty)
- Not a replacement for statutory accounting: Jwero bridges to Tally and Zoho Books; books stay there.
- POS counter cash/day-close billing, payroll & karigar wage settlement, offline mode, a vernacular
  product interface, public API/SSO and predictive ML forecasting are on the public roadmap, not
  shipped today: ${SITE}/roadmap

## Key pages
- Platform (the OS tour): ${SITE}/platform
- Customer memory: ${SITE}/platform/customer-memory
- AI workforce & governance: ${SITE}/platform/ai-workforce
- WhatsApp commerce: ${SITE}/products/whatsapp
- Gold schemes: ${SITE}/products/gold-schemes
- Pricing: ${SITE}/pricing
- Migration Centre: ${SITE}/migration
- Customer proof: ${SITE}/customers
- Public roadmap: ${SITE}/roadmap
`);
  // sitemap
  const urls = pages
    .filter((p) => !p.noindex)
    .map((p) => `<url><loc>${SITE}/${p.slug === 'index' ? '' : p.slug}</loc></url>`)
    .join('\n');
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`);
  console.log(`Built ${pages.length} pages (+ /whatsapp redirect) → ${DIST}`);
}

// ---------------------------------------------------------------- serve
function serve(port) {
  const http = require('http');
  const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.png': 'image/png', '.txt': 'text/plain', '.xml': 'application/xml' };
  http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    let file;
    if (p === '/' || p === '') {
      file = path.join(DIST, 'index.html');
    } else if (path.extname(p)) {
      file = path.join(DIST, path.normalize(p));
    } else {
      // clean-URL resolution: /foo -> dist/foo/index.html
      file = path.join(DIST, path.normalize(p), 'index.html');
    }
    file = file.replace(/^([.][.][/\\])+/, '');
    if (!file.startsWith(DIST)) { res.writeHead(403); return res.end(); }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404, { 'Content-Type': 'text/plain' }); return res.end('404 — ' + p); }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' });
      res.end(data);
    });
  }).listen(port, () => console.log(`Serving ${DIST} on http://localhost:${port}`));
}

build();
if (process.argv.includes('--serve')) {
  const pi = process.argv.indexOf('--port');
  serve(pi > -1 ? Number(process.argv[pi + 1]) : 4173);
}
