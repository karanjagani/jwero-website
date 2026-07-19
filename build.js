#!/usr/bin/env node
// Jwero marketing site — static build + dev server.
// Usage: node website/build.js [--serve] [--port 4173]

const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const DIST = path.join(ROOT, 'dist');
const SITE = 'https://jwero.ai';
const BRAND = 'Jwero';
const TAGLINE = 'The AI Growth Engine for Jewellery Business';

// ---------------------------------------------------------------- pages
const pages = [
  ...require('./content/home'),
  ...require('./content/platform'),
  ...require('./content/products-sell'),
  ...require('./content/products-run'),
  ...require('./content/products-grow'),
  ...require('./content/solutions'),
  ...require('./content/tools'),
  ...require('./content/company'),
];

// ---------------------------------------------------------------- nav
const NAV = [
  {
    label: 'Platform',
    items: [
      ['/platform.html', 'The Growth Engine', 'How it all runs on one customer record'],
      ['/ai-staff.html', 'AI Staff & Governance', 'Approval queues, caps, kill switch'],
      ['/customer-memory.html', 'Customer Memory', 'The 90-field customer record'],
      ['/integrations.html', 'Integrations', 'Tally, Shopify, Meta and more'],
      ['/security.html', 'Security & Trust', 'Your data, your rules'],
      ['/roadmap.html', 'Roadmap', 'Shipped, building, not yet'],
    ],
  },
  {
    label: 'Products',
    groups: [
      { title: 'Sell', items: [
        ['/products/whatsapp.html', 'WhatsApp Commerce'],
        ['/products/instagram-facebook.html', 'Instagram & Facebook'],
        ['/products/ai-sales-agents.html', 'AI Sales Agents & Voice'],
      ]},
      { title: 'Know', items: [
        ['/products/crm.html', 'Jewellery CRM & Customer 360'],
      ]},
      { title: 'Run', items: [
        ['/products/catalog.html', 'Catalogue (Jewellery PIM)'],
        ['/products/inventory.html', 'Inventory & Dead Stock'],
      ]},
      { title: 'Grow', items: [
        ['/products/gold-schemes.html', 'Gold Savings Schemes'],
        ['/products/digital-gold.html', 'Digital Gold'],
        ['/products/multi-store.html', 'Multi-store & Franchise'],
      ]},
    ],
  },
  {
    label: 'Solutions',
    groups: [
      { title: 'By business', items: [
        ['/solutions/single-store.html', 'Single-store jewellers'],
        ['/solutions/multi-store-chains.html', 'Multi-store & chains'],
        ['/solutions/manufacturers.html', 'Manufacturers & wholesalers'],
      ]},
      { title: 'By pain', items: [
        ['/solutions/dead-stock.html', 'Dead stock'],
        ['/solutions/lead-leakage.html', 'Lead leakage'],
      ]},
    ],
  },
  { label: 'Pricing', href: '/pricing.html' },
  { label: 'Proof', href: '/customers.html' },
  {
    label: 'Tools',
    items: [
      ['/tools/dead-stock-calculator.html', 'Dead Stock Calculator', 'What idle inventory really costs'],
      ['/tools/gold-scheme-calculator.html', 'Gold Scheme Calculator', 'The revenue a digital scheme locks in'],
      ['/migration.html', 'Migration Centre', 'Switch without fear'],
    ],
  },
];

function navHTML() {
  const dd = (m) => {
    if (m.href) return `<a class="nav-link" href="${m.href}">${m.label}</a>`;
    const inner = m.groups
      ? m.groups.map((g) => `<div class="dd-group"><p class="dd-title">${g.title}</p>${g.items
          .map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}</div>`).join('')
      : m.items.map(([h, l, d]) => `<a href="${h}"><strong>${l}</strong>${d ? `<span>${d}</span>` : ''}</a>`).join('');
    return `<details class="nav-dd"><summary class="nav-link">${m.label}</summary><div class="dd-panel${m.groups ? ' dd-cols' : ''}">${inner}</div></details>`;
  };
  return `
<div class="ann-bar"><div class="container">${TAGLINE} — <a href="#" data-wa="announce">see it live on WhatsApp →</a></div></div>
<header class="site-header">
  <div class="container header-row">
    <a class="logo" href="/" aria-label="Jwero home"><img src="/assets/jwero-mark.png" alt="" width="282" height="423"><span class="logo-word">Jwero</span></a>
    <nav class="main-nav" aria-label="Main">${NAV.map(dd).join('')}</nav>
    <div class="header-cta">
      <button class="theme-toggle" type="button" aria-label="Toggle dark mode">◐</button>
      <a class="btn btn-wa" href="#" data-wa="header">WhatsApp</a>
      <a class="btn btn-primary" href="/book-demo.html">Book demo</a>
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
        <p class="logo"><img src="/assets/jwero-mark.png" alt="" width="282" height="423"><span class="logo-word">Jwero</span></p>
        <p class="f-tag">${TAGLINE}.</p>
        <p class="f-enemy">“Your software keeps records.<br>It doesn’t bring customers back.”</p>
      </div>
      ${col('Platform', [['/platform.html','The Growth Engine'],['/ai-staff.html','AI Staff & Governance'],['/customer-memory.html','Customer Memory'],['/integrations.html','Integrations'],['/security.html','Security & Trust'],['/roadmap.html','Roadmap']])}
      ${col('Products', [['/products/whatsapp.html','WhatsApp Commerce'],['/products/instagram-facebook.html','Instagram & Facebook'],['/products/ai-sales-agents.html','AI Sales Agents'],['/products/crm.html','Jewellery CRM'],['/products/catalog.html','Catalogue (PIM)'],['/products/inventory.html','Inventory'],['/products/gold-schemes.html','Gold Schemes'],['/products/digital-gold.html','Digital Gold'],['/products/multi-store.html','Multi-store']])}
      ${col('Solutions', [['/solutions/single-store.html','Single store'],['/solutions/multi-store-chains.html','Multi-store & chains'],['/solutions/manufacturers.html','Manufacturers'],['/solutions/dead-stock.html','Dead stock'],['/solutions/lead-leakage.html','Lead leakage'],['/migration.html','Migration Centre']])}
      ${col('Company', [['/customers.html','Proof'],['/pricing.html','Pricing'],['/company.html','About'],['/book-demo.html','Book a demo'],['/tools/dead-stock-calculator.html','Dead Stock Calculator'],['/tools/gold-scheme-calculator.html','Gold Scheme Calculator']])}
    </div>
    <div class="f-bottom">
      <p>© <span data-year></span> Jwero. All rights reserved.</p>
      <p>Made for jewellers, everywhere.</p>
    </div>
  </div>
</footer>
<div class="sticky-bar" role="navigation" aria-label="Quick actions">
  <a href="tel:+910000000000">Call</a>
  <a class="sb-wa" href="#" data-wa="sticky">WhatsApp</a>
  <a class="sb-demo" href="/book-demo.html">Book demo</a>
</div>`;
}

// ---------------------------------------------------------------- layout
const FAVICON = '/assets/favicon.png';

function orgSchema() {
  return {
    '@context': 'https://schema.org', '@type': 'Organization',
    name: BRAND, url: SITE, slogan: TAGLINE,
    description: 'Jwero is the AI growth engine for jewellery business: customer memory, WhatsApp and Instagram commerce, gold savings schemes, digital gold and governed AI staff on one platform.',
    contactPoint: { '@type': 'ContactPoint', contactType: 'sales', url: SITE + '/book-demo.html' },
  };
}

function layout(page) {
  const canonical = SITE + (page.slug === 'index' ? '/' : `/${page.out}`);
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
  if (page.schema) schemas.push(page.schema);
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title}</title>
<meta name="description" content="${page.description}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${BRAND}">
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.description}">
<meta property="og:url" content="${canonical}">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" href="${FAVICON}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;550;600;650;700;750&display=swap">
<link rel="stylesheet" href="/assets/site.css">
<script>(function(){try{var t=localStorage.getItem('jwero-theme');if(t)document.documentElement.setAttribute('data-theme',t);}catch(e){}})();</script>
${schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
</head>
<body>
${navHTML()}
<main id="main">
${page.body}
</main>
${footerHTML()}
<script src="/assets/site.js" defer></script>
</body>
</html>`;
}

// ---------------------------------------------------------------- build
function build() {
  fs.rmSync(DIST, { recursive: true, force: true });
  fs.mkdirSync(DIST, { recursive: true });
  // assets
  fs.cpSync(path.join(ROOT, 'assets'), path.join(DIST, 'assets'), { recursive: true });
  // pages
  for (const p of pages) {
    p.out = p.slug === 'index' ? 'index.html' : `${p.slug}.html`;
    const file = path.join(DIST, p.out);
    fs.mkdirSync(path.dirname(file), { recursive: true });
    fs.writeFileSync(file, layout(p));
  }
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
  // llms.txt — curated machine-readable truth.
  fs.writeFileSync(path.join(DIST, 'llms.txt'),
`# Jwero — ${TAGLINE}

> Jwero is the AI growth engine for jewellery business. It gives jewellers one system that
> remembers every customer (90+ fields per customer record, including gold-plan balances and
> family occasions), sells on the channels customers use (WhatsApp, Instagram, Facebook, web,
> video), runs gold savings schemes and digital gold, and puts AI staff to work under human
> approval — approval queues, daily caps and kill switches are enforced in the product.

## What Jwero is not (honesty)
- Not a replacement for your accounting ledger: Jwero bridges to Tally and Zoho Books.
- POS counter billing, payroll and offline mode are on the public roadmap, not shipped: ${SITE}/roadmap.html

## Key pages
- Platform: ${SITE}/platform.html
- AI staff & governance: ${SITE}/ai-staff.html
- Customer memory: ${SITE}/customer-memory.html
- WhatsApp commerce: ${SITE}/products/whatsapp.html
- Gold schemes: ${SITE}/products/gold-schemes.html
- Pricing: ${SITE}/pricing.html
- Migration: ${SITE}/migration.html
- Proof: ${SITE}/customers.html
`);
  // sitemap
  const urls = pages.map((p) => `<url><loc>${SITE}/${p.out === 'index.html' ? '' : p.out}</loc></url>`).join('\n');
  fs.writeFileSync(path.join(DIST, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`);
  console.log(`Built ${pages.length} pages → ${DIST}`);
}

// ---------------------------------------------------------------- serve
function serve(port) {
  const http = require('http');
  const MIME = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.txt': 'text/plain', '.xml': 'application/xml' };
  http.createServer((req, res) => {
    let p = decodeURIComponent(req.url.split('?')[0]);
    if (p.endsWith('/')) p += 'index.html';
    const file = path.join(DIST, path.normalize(p).replace(/^([.][.][/\\])+/, ''));
    if (!file.startsWith(DIST)) { res.writeHead(403); return res.end(); }
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404, { 'Content-Type': 'text/plain' }); return res.end('404'); }
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
