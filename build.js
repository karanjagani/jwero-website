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
const TAGLINE = 'The Autonomous Jewellery OS, run by AI';
const SIGNATURE = 'Jwero runs your whole jewellery business from one customer record — and the AI does the remembering.';
const ORG_DESCRIPTION =
  'Jwero is the Autonomous Jewellery OS, run by AI: one customer record, one catalogue, one inventory truth and one inbox — with WhatsApp and Instagram commerce, gold savings schemes, digital gold, and governed AI staff, in one place.';

// ---------------------------------------------------------------- company facts (single source of truth)
const LEGAL_ENTITY = 'Tanika Tech Jewels Private Limited';
const LEGAL_CIN = 'U74900MH2016PTC273631';
const LEGAL_ADDRESS = 'Shop No. 14–15, Sagar Darshan Building 2, Geetanjali Nagar, Station Road, Bhayandar (West), Thane, Maharashtra 401101';
const SOCIALS = [
  ['https://www.instagram.com/jwero.ai/', 'Instagram'],
  ['https://www.linkedin.com/company/jwero', 'LinkedIn'],
];

// ---------------------------------------------------------------- pages
// Each page is stamped with the mtime of the content file that defined it, so the
// sitemap can emit an honest <lastmod> without hand-maintaining dates.
const CONTENT_FILES = [
  'home', 'platform', 'products', 'products-sell', 'products-run', 'products-grow', 'products-manage', 'products-hr', 'products-ops', 'products-more', 'brief', 'erp-to-os',
  'industries', 'solutions', 'solutions-retail-segments', 'solutions-wholesale',
  'solutions-manufacturing-segments', 'solutions-other-segments', 'pain', 'trust',
  'compare', 'tools', 'faq', 'company', 'partners', 'blog', 'roles',
  'roles-leadership', 'roles-frontline', 'roles-growth', 'roles-manufacturing',
  'roles-operations', 'roles-trade', 'glossary', 'start', 'journey',
];
const pages = [];
for (const f of CONTENT_FILES) {
  const lastmod = fs.statSync(path.join(ROOT, 'content', `${f}.js`)).mtime.toISOString().slice(0, 10);
  for (const p of require(`./content/${f}`)) {
    p.lastmod = p.lastmod || lastmod;
    pages.push(p);
  }
}

// ---------------------------------------------------------------- nav
// Matches Blueprint v2 §3.2.1 — 6 top-level items, Products as the 4-pillar "app grid" mega-menu.
const NAV = [
  {
    label: 'Platform',
    match: ['platform', 'trust', 'roadmap', 'erp-to-os', 'why-an-os'],
    items: [
      ['/why-an-os', 'Why an OS, not another tool', 'The category, explained in one page'],
      ['/erp-to-os', 'From ERP to OS', 'Running an ERP? Why the shift is now, why switching is safer than staying, and what making do costs'],
      ['/platform', 'The OS tour', 'One record, one catalogue, one truth'],
      ['/platform/customer-memory', 'Customer Memory', '198 signals, 11 scores, one record'],
      ['/platform/pricing-engine', 'The Pricing Engine', 'Rate, making charge, stone & override rules'],
      ['/platform/ai-workforce', 'AI Workforce & Governance', '240+ governed actions, approvals, kill switches'],
      ['/platform/integrations', 'Integrations', 'Tally, Zoho Books, Shopify, Meta and more'],
      ['/trust/security', 'Security & Data Ownership', 'Your data, exportable anytime'],
      ['/platform/onboarding', 'Onboarding & Support', 'Live in days, trained in your language'],
      ['/roadmap', 'Roadmap & Changelog', "What's shipped, what's next — in public"],
    ],
  },
  {
    label: 'Products',
    match: ['products'],
    groups: [
      { title: 'Sell', items: [
        ['/products/whatsapp', 'WhatsApp Commerce', 'Sell on your official number'],
        ['/products/instagram-facebook', 'Instagram & Facebook', 'DMs into sales, one inbox'],
        ['/products/ai-sales-agents', 'AI Sales Agents & Voice', 'Replies and follow-up, governed'],
        ['/products/storefront', 'Ecommerce Website', 'Live-rate jewellery storefront'],
        ['/products/meetings', 'Video Counter & Appointments', 'Meet from the inbox, self-booking'],
        ['/products/quotations', 'Quotations', 'Numbered, live-rate, accepted online'],
        ['/products/digital-catalogues', 'Digital Catalogues', 'Shareable links, every view tracked'],
      ]},
      { title: 'Market', items: [
        ['/products/marketplaces', 'Marketplaces', 'Amazon & Flipkart on one ledger'],
        ['/products/ads-manager', 'Ads Manager', 'Meta, Google & Pinterest'],
        ['/products/social-media', 'Social Media Management', 'Schedule, inbox, reply'],
        ['/products/optimize', 'Optimize (Website Visitors)', 'Heatmaps, A/B tests, webchat'],
      ]},
      { title: 'Know', items: [
        ['/products/crm', 'Jewellery CRM', 'Customer 360 for the trade'],
        ['/products/showroom', 'Showroom Intelligence', 'Who is on your floor, right now'],
        ['/products/reports', 'Reports & Dashboards', 'Ask a question, pin the answer'],
        ['/products/email', 'Business Email', 'Own-domain mail in the same inbox'],
      ]},
      { title: 'Run', items: [
        ['/products/catalog', 'Catalogue (PIM)', 'Purity, certificates, live prices'],
        ['/products/inventory', 'Inventory', 'Ageing and dead stock'],
        ['/products/pos', 'Counter POS', 'Scan, exchange, return, day-close'],
        ['/products/billing-finance', 'Billing & Finance', 'GST invoices at live rates'],
        ['/products/manufacturing', 'Manufacturing & Workshop', 'BOM, wastage norms, karigar khata'],
        ['/products/erp', 'ERP, reconsidered', 'Orders, vendors, job-work'],
        ['/products/multi-store', 'Multi-store & Franchise', 'Every branch, one platform'],
      ]},
      { title: 'Manage', items: [
        ['/products/hr-payroll', 'HR & Payroll', 'Attendance, leave, onboarding'],
        ['/products/repairs-service', 'Repairs & After-Sales', 'Custody chain for every repair'],
        ['/products/purchase-vendors', 'Purchase & Vendors', 'POs, GRN, vendor portal'],
        ['/products/training-lms', 'Training & LMS', 'Courses, tests, certificates'],
      ]},
      { title: 'Grow', items: [
        ['/products/gold-schemes', 'Gold Savings Schemes', 'Enrolment to maturity'],
        ['/products/digital-gold', 'Digital Gold', 'Buy gold in grams'],
        ['/products/girvi', 'Girvi / Gold Loans', 'Pledge, interest, release'],
        ['/products/loyalty', 'Loyalty & Referrals', 'Tiers, rules, redemptions'],
        ['/products/segmentation', 'Customer Segmentation', 'Rule-based audiences'],
        ['/products/journeys', 'Customer Journeys', 'Approval-gated automation'],
        ['/products/campaigns', 'Campaigns & Broadcasts', 'WhatsApp, email, SMS, push'],
      ]},
    ],
    footer: ['See all products', '/products'],
    links: [['/platform', 'The OS tour'], ['/platform/integrations', 'Integrations'], ['/enterprise', 'Enterprise'], ['/roadmap', 'Roadmap']],
  },
  {
    label: 'Solutions',
    match: ['solutions', 'industries', 'roles'],
    groups: [
      { title: 'By what you sell', items: [
        ['/solutions/gold-retail', 'Gold jewellery'],
        ['/solutions/silver-retail', 'Silver & articles'],
        ['/solutions/diamond-retail', 'Diamond jewellery'],
        ['/solutions/gemstone-retail', 'Gemstones'],
        ['/solutions/lab-grown-diamond', 'Lab-grown diamonds'],
        ['/solutions/bullion-gold-traders', 'Bullion & gold trading'],
        ['/solutions/jewellery-brands', 'Jewellery brands'],
        ['/industries/retail', 'All retail'],
      ]},
      { title: 'By how you operate', items: [
        ['/solutions/single-store', 'Single store'],
        ['/solutions/multi-store-chains', 'Multi-store & chains'],
        ['/solutions/luxury-boutique', 'Luxury & boutique'],
        ['/solutions/bridal', 'Bridal & wedding'],
        ['/solutions/d2c-brands', 'D2C & ecommerce-first'],
        ['/solutions/franchise-networks', 'Franchise networks'],
        ['/solutions/startups', 'New jewellery businesses'],
      ]},
      { title: 'Making & trade', items: [
        ['/solutions/manufacturers', 'Manufacturers'],
        ['/solutions/oem-manufacturers', 'OEM & contract makers'],
        ['/solutions/casting-units', 'Casting units'],
        ['/solutions/cad-services', 'CAD & design services'],
        ['/solutions/b2b-jewellery', 'Wholesale & B2B'],
        ['/solutions/gold-wholesale', 'Gold wholesalers'],
        ['/solutions/diamond-wholesale', 'Diamond wholesalers & traders'],
        ['/solutions/export-houses', 'Export houses'],
      ]},
      { title: 'By role · owners & counter', items: [
        ['/roles/owner', 'Owner / Proprietor'],
        ['/roles/chain-owner', 'Multi-store & chain owner'],
        ['/roles/next-gen-successor', 'Next-gen successor'],
        ['/roles/store-manager', 'Store manager'],
        ['/roles/sales-associate', 'Sales associate'],
        ['/roles/cashier', 'Billing cashier'],
      ]},
      { title: 'By role · growth & finance', items: [
        ['/roles/crm-executive', 'CRM / telecalling executive'],
        ['/roles/marketing-manager', 'Marketing manager'],
        ['/roles/ecommerce-manager', 'E-commerce / D2C manager'],
        ['/roles/accountant', 'Accountant / bookkeeper'],
        ['/roles/inventory-manager', 'Inventory / stock manager'],
      ]},
      { title: 'By role · making & trade', items: [
        ['/roles/karigar', 'Karigar / goldsmith'],
        ['/roles/cad-designer', 'CAD / CAM designer'],
        ['/roles/production-manager', 'Production manager'],
        ['/roles/quality-hallmarking', 'Quality & hallmarking officer'],
        ['/roles/purchase-manager', 'Purchase / procurement manager'],
        ['/roles/b2b-manager', 'Wholesale / B2B manager'],
        ['/roles/franchise-partner', 'Franchise partner'],
      ]},
    ],
    footer: ['See all 22 segments', '/solutions'],
    links: [['/solutions/pain/dead-stock', 'Dead stock'], ['/solutions/pain/lead-leakage', 'Lead leakage'], ['/roles', 'Every role'], ['/enterprise', 'Enterprise']],
  },
  {
    label: 'Resources',
    match: ['faq', 'blog', 'tools', 'compare', 'migration', 'partners', 'customers', 'company', 'contact'],
    items: [
      ['/customers', 'Customers', 'Named jewellers running on Jwero'],
      ['/faq', 'FAQ', 'Every objection, answered honestly'],
      ['/blog', 'Blog', 'Practical guides, not filler'],
      ['/tools', 'Tools & Calculators', 'Dead stock, gold scheme, WhatsApp revenue, gold loss'],
      ['/compare', 'Compare Alternatives', 'ERPs, WhatsApp tools, ecommerce & more'],
      ['/migration', 'Migration Centre', 'Switch without fear'],
      ['/partners', 'Partners', 'ERP dealers, accountants, consultants'],
      ['/glossary', 'Glossary', 'HUID, girvi, karigar, memo — defined'],
      ['/how-it-goes', 'What happens after you message', 'The first 30 days, step by step'],
      ['/start', 'Get started', 'Create your workspace in three steps'],
      ['/brief', 'The one-page brief', 'For the owner who won’t read the site'],
      ['/company', 'About Jwero', 'The founders, by name'],
    ],
    links: [['/book-demo', 'Book a demo'], ['/contact', 'Contact']],
  },
  { label: 'Pricing', href: '/pricing', match: ['pricing'] },
];

const { icon, LINK_ICONS, heroSchematic, PERSONAS, personaSwitch, mark } = require('./lib');

function navHTML(page) {
  const top = (page && page.slug ? page.slug : '').split('/')[0];
  const link = ([h, l, d]) => `<a href="${h}"><strong>${l}</strong>${d ? `<span>${d}</span>` : ''}</a>`;
  const dd = (m) => {
    const here = m.match && m.match.includes(top) ? ' is-here' : '';
    if (m.href) return `<a class="nav-link${here}" href="${m.href}"${here ? ' aria-current="page"' : ''}>${m.label}</a>`;
    const body = m.groups
      ? m.groups.map((g) => `<div class="dd-group"><p class="dd-title">${g.title}</p>${g.items.map(link).join('')}</div>`).join('')
      : m.items.map(link).join('');
    // Panel width follows the content: multi-column menus span the header,
    // shorter ones stay compact under the nav.
    const size = m.groups ? (m.groups.length > 3 ? ' dd-wide' : ' dd-mid') : ' dd-list';
    const cols = m.groups ? ` style="--cols:${m.groups.length}"` : '';
    const foot = m.footer || m.links
      ? `<div class="dd-foot">${m.footer ? `<a class="dd-footer" href="${m.footer[1]}">${m.footer[0]}${icon('arrow')}</a>` : '<span></span>'}${
          m.links ? `<div class="dd-links">${m.links.map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}</div>` : ''}</div>`
      : '';
    return `<details class="nav-dd"><summary class="nav-link${here}">${m.label}${icon('updown')}</summary><div class="dd-panel${size}"><div class="dd-box"><div class="dd-cols"${cols}>${body}</div>${foot}</div></div></details>`;
  };
  return `
<header class="site-header">
  <div class="header-row">
    <a class="logo" href="/" aria-label="Jwero home">${mark()}<span class="logo-word">Jwero</span></a>
    <nav class="main-nav" aria-label="Main">
      ${NAV.map(dd).join('')}
      <div class="nav-cta">
        <a class="btn btn-ghost" href="tel:+919169959959">Call us</a>
        <a class="btn btn-ghost" href="/book-demo">Book a demo</a>
        <a class="btn btn-primary" href="#" data-wa="header">Chat on WhatsApp</a>
        <a class="btn btn-ghost" href="/start" data-start-cta>Get started</a>
        <a class="nav-login" href="https://os.jwero.ai/login?utm_source=jwero.ai&utm_medium=header" rel="noopener" data-login>Log in</a>
      </div>
    </nav>
    <div class="header-cta">
      <a class="btn btn-ghost btn-sm" href="#" data-wa="header">WhatsApp</a>
      <a class="btn btn-ghost btn-sm" href="/book-demo">Book a demo</a>
      <a class="btn btn-ghost btn-sm header-start" href="/start" data-start-cta>Get started</a>
      <a class="nav-login nav-login-sm" href="https://os.jwero.ai/login?utm_source=jwero.ai&utm_medium=header" rel="noopener" data-login>Log in</a>
      <button class="search-open icon-btn" type="button" aria-label="Search the site" aria-keyshortcuts="Meta+K Control+K">${icon('search')}</button>
      <button class="theme-toggle icon-btn" type="button" aria-label="Toggle dark mode">${icon('moon')}</button>
      <a class="btn btn-primary btn-sm header-float" href="#" data-wa="header">Chat on WhatsApp</a>
      <button class="nav-burger icon-btn" type="button" aria-label="Open menu" aria-expanded="false"><span></span><span></span></button>
    </div>
  </div>
</header>`;
}

function footerHTML() {
  const col = (t, links) =>
    `<div class="f-col"><p class="f-title">${t}</p>${links.map(([h, l]) => `<a href="${h}">${l}</a>`).join('')}</div>`;
  return `
<footer class="site-footer">
  <div class="f-wrap">
    <div class="f-top">
      <div class="f-brand">
        <p class="logo">${mark()}<span class="logo-word">Jwero</span></p>
        <p class="f-tag">${SIGNATURE}<br>${TAGLINE}.</p>
        <p class="f-enemy">“Your software keeps accounts.<br>It doesn’t remember customers.”</p>
        <p class="f-made">Made with <span aria-hidden="true">❤</span><span class="sr-only">love</span> for Jewellers</p>
      </div>
      <div class="f-grid">
      ${col('Products', [['/products', 'App grid'], ...NAV.find((m) => m.label === 'Products').groups.flatMap((g) => g.items)])}
      ${col('Solutions', [['/roles','Roles — who uses Jwero'],['/solutions','All 22 solutions'],['/industries/retail','Retail'],['/solutions/single-store','Single store'],['/solutions/multi-store-chains','Multi-store & chains'],['/solutions/luxury-boutique','Luxury & boutique'],['/solutions/bridal','Bridal & wedding'],['/solutions/manufacturers','Manufacturers'],['/solutions/b2b-jewellery','Wholesale & B2B'],['/solutions/d2c-brands','D2C brands'],['/solutions/franchise-networks','Franchise networks'],['/solutions/pain/dead-stock','Dead stock'],['/solutions/pain/lead-leakage','Lead leakage']])}
      ${col('Resources', [['/faq','FAQ — every objection'],['/blog','Blog'],['/tools','Tools & Calculators'],['/tools/dead-stock-calculator','Dead Stock Calculator'],['/tools/gold-scheme-calculator','Gold Scheme Calculator'],['/tools/whatsapp-revenue-estimator','WhatsApp Revenue Estimator'],['/tools/gold-loss-calculator','Gold-Loss Calculator'],['/compare','Compare alternatives'],['/compare/jwero-vs-shopify','Jwero vs Shopify'],['/compare/jwero-vs-wati','Jwero vs WATI'],['/migration','Migration Centre'],['/partners','Partners'],['/customers','Customer proof']])}
      <div class="f-stack">
      ${col('Company', [['/company','About'],['/pricing','Pricing'],['/book-demo','Book a demo'],['/enterprise','Enterprise'],['/contact','Contact']])}
      ${col('Trust', [['/trust/security','Security'],['/roadmap','Roadmap'],['/legal/privacy','Privacy'],['/legal/terms','Terms'],['/legal/dpdp','DPDP statement']])}
      </div>
      </div>
    </div>
    <div class="f-proof">198 customer signals · 11 explainable scores · 240+ governed AI actions · AI voice in 14 languages · 5 kill-switch scopes · Tally, Zoho Books, Shopify, WooCommerce, Unicommerce &amp; Meta connectors built in.</div>
    <div class="f-bottom">
      <p>© <span data-year></span> Jwero. All rights reserved.</p>
      <p class="f-social">${SOCIALS.map(([h, l]) => `<a href="${h}" rel="noopener" target="_blank">${l}</a>`).join('')}<a href="mailto:care@jwero.ai">care@jwero.ai</a><a href="https://os.jwero.ai/login?utm_source=jwero.ai&utm_medium=footer" rel="noopener">Log in to Jwero</a></p>
      <p>This site runs on Jwero — the chat button is the product.</p>
    </div>
    <p class="f-legal">Jwero is a product of ${LEGAL_ENTITY} · CIN ${LEGAL_CIN} · Registered office: ${LEGAL_ADDRESS}</p>
  </div>
</footer>
<div class="sticky-bar" role="navigation" aria-label="Quick actions">
  <a href="tel:+919169959959">Call</a>
  <a class="sb-wa" href="#" data-wa="sticky">WhatsApp</a>
  <a class="sb-demo" href="/book-demo">Book demo</a>
</div>
<button class="to-top" type="button" aria-label="Back to top">${mark()}</button>`;
}

// ---------------------------------------------------------------- layout
const FAVICON = '/assets/favicon.png';

function orgSchema() {
  return {
    '@context': 'https://schema.org', '@type': 'Organization',
    name: BRAND, legalName: LEGAL_ENTITY, url: SITE, slogan: TAGLINE, description: ORG_DESCRIPTION,
    alternateName: ['Jwero — the Autonomous Jewellery OS', 'Jwero — the Autonomous Jewelry OS'],
    areaServed: ['IN', 'AE', 'GB', 'SG', 'US', 'AU', 'CA'],
    logo: SITE + '/assets/jwero-mark.png',
    sameAs: SOCIALS.map(([h]) => h),
    address: { '@type': 'PostalAddress', streetAddress: 'Shop No. 14–15, Sagar Darshan Building 2, Geetanjali Nagar, Station Road', addressLocality: 'Bhayandar (West), Thane', addressRegion: 'Maharashtra', postalCode: '401101', addressCountry: 'IN' },
    contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: 'care@jwero.ai', telephone: '+91-91699-59959', url: SITE + '/book-demo' },
  };
}

// Product and platform pages whose hero has no product mock open with a small
// system diagram instead: this module, the shared record, the rest of Jwero.
function withSchematic(page) {
  const ic = LINK_ICONS['/' + page.slug];
  if (!ic || !page.breadcrumbs || /class="stage hero-mock"/.test(page.body)) return fillPersona(page.body);
  const label = page.breadcrumbs[page.breadcrumbs.length - 1][0];
  return page.body.replace('<section class="hero">', `<section class="hero has-schematic">${heroSchematic(ic, label)}`);
}

// The home persona switch quotes each solution page's own headline and intro.
function fillPersona(body) {
  if (body.indexOf('<!--persona-switch-->') === -1) return body;
  const productName = (href) => {
    for (const g of NAV.find((m) => m.label === 'Products').groups) for (const it of g.items) if (it[0] === href) return it[1];
    return href;
  };
  const entries = PERSONAS.map((p) => {
    const pg = pages.find((x) => x.slug === p.slug);
    const h1 = (pg.body.match(/<h1>([\s\S]*?)<\/h1>/) || [])[1];
    const sub = (pg.body.match(/<p class="sub">([\s\S]*?)<\/p>/) || [])[1];
    const wa = (pg.body.match(/data-wa="([^"]+)"/) || [])[1] || 'default';
    return Object.assign({}, p, { h1, sub, wa });
  });
  return body.replace('<!--persona-switch-->', personaSwitch(entries, productName));
}

// Related pages: every product links to the solutions that lead with it and
// its siblings; every solution/role page links to its persona's products.
// Internal links are how a 130-page site tells search engines what matters.
function productMeta(href) {
  for (const g of NAV.find((m) => m.label === 'Products').groups) for (const it of g.items) if (it[0] === href) return { label: it[1], desc: it[2], group: g.title, items: g.items };
  return null;
}
// Under the hero: the three questions this reader is most likely carrying,
// as tappable chips that open the matching answer further down the page.
function withAsking(body, page) {
  if (page.slug === 'index' || page.slug === 'faq') return body;
  // Only questions answered on this page, so a tap never leaves it.
  const qs = [...body.matchAll(/<summary>([\s\S]*?)<\/summary>/g)].map((m) => m[1].replace(/<[^>]+>/g, '').trim()).filter((q) => q.length > 12 && q.length < 110).slice(0, 4);
  if (qs.length < 3) return body;
  const strip = `
<div class="asking" data-asking>
  <div class="container">
    <p class="asking-label">You’re probably asking</p>
    <div class="asking-chips">${qs.map((q) => `<button type="button" class="asking-chip">${q}</button>`).join('')}</div>
  </div>
</div>`;
  const i = body.indexOf('</section>', body.indexOf('<section class="hero'));
  return i === -1 ? body : body.slice(0, i + 10) + strip + body.slice(i + 10);
}
// The shift: today → gone → at the speed of thought. Page-specific copy from
// content/shift.js, group fallbacks for solutions, industries and roles.
const SHIFTS = require('./content/shift');
function withShift(body, page) {
  const s = SHIFTS[page.slug] || SHIFTS[Object.keys(SHIFTS).find((k) => k.endsWith('/') && page.slug.startsWith(k)) || ''];
  if (!s) return body;
  const block = `
<section class="shift" data-shift aria-labelledby="shift-title">
  <div class="container">
    <div class="shift-head"><p class="eyebrow">THE SHIFT</p><h2 id="shift-title">${s.title}</h2></div>
    <div class="shift-lanes">
      <div class="lane lane-today"><p class="lane-tag">Today</p><p class="lane-text">${s.today}</p></div>
      <div class="lane lane-gone"><p class="lane-tag">Gone with Jwero</p><p class="lane-text"><span>${s.gone}</span></p></div>
      <div class="lane lane-now"><p class="lane-tag">At the speed of thought</p><p class="lane-text">${s.now}</p></div>
    </div>
    <div class="shift-tempo" aria-label="From ${s.tempo[0]} to ${s.tempo[1]}">
      <span class="tempo-from">${s.tempo[0]}</span><span class="tempo-track"><i></i></span><span class="tempo-to">${s.tempo[1]}</span>
    </div>
  </div>
</section>`;
  const heroAt = body.indexOf('<section class="hero');
  if (heroAt === -1) return body;
  const at = body.indexOf('<section class="section', heroAt);
  return at === -1 ? body + block : body.slice(0, at) + block + body.slice(at);
}
// Simulations sit right after the shift on the pages where that mindset lives.
const SIM_PAGES = {
  // every solution page carries the simulation its mindset lives in
  ...Object.fromEntries(Object.entries(require('./content/solution-playbooks').PLAYBOOKS).map(([slug, pb]) => [slug, pb.sim])),
  'products/catalog': 'rate', 'platform/pricing-engine': 'rate', 'solutions/gold-retail': 'rate', 'products/digital-catalogues': 'rate', 'products/quotations': 'rate',
  'products/email': 'approve', 'products/marketplaces': 'shelf', 'products/reports': 'shelf', 'products/training-lms': 'approve',
  'platform/ai-workforce': 'approve', 'products/ai-sales-agents': 'approve', 'products/journeys': 'approve', 'roles/owner': 'approve',
  'products/crm': 'memory', 'platform/customer-memory': 'memory', 'roles/sales-associate': 'memory', 'products/whatsapp': 'memory', 'index': 'memory',
  'products/inventory': 'shelf', 'solutions/pain/dead-stock': 'shelf', 'roles/inventory-manager': 'shelf',
  'products/pos': 'till', 'roles/cashier': 'till', 'products/billing-finance': 'till',
  'products/manufacturing': 'grams', 'solutions/manufacturers': 'grams', 'roles/production-manager': 'grams', 'roles/karigar': 'grams',
};
// Solution playbooks: the day loop + module map after the simulation, the fit
// check + first steps before the closing band.
const { PLAYBOOKS, NAMES: PB_NAMES } = require('./content/solution-playbooks');
// A page with FAQ schema must show the answers: append a FAQ section wherever
// the body has none (FAQPage rich results require visible content).
function withFaqs(body, page) {
  if (!page.faqs || !page.faqs.length || body.includes('<details')) return body;
  const L2 = require('./lib');
  const block = L2.section(`${L2.sectionHead('QUESTIONS', 'What people ask before they message.', '')}${L2.faqBlock(page.faqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`);
  const relAt = body.lastIndexOf('<section class="related"'), bandAt = body.lastIndexOf('<section class="cta-band">');
  const at = relAt !== -1 ? relAt : bandAt;
  return at === -1 ? body + block : body.slice(0, at) + block + body.slice(at);
}
function withPlaybook(body, page) {
  const pb = PLAYBOOKS[page.slug];
  if (!pb) return body;
  const L2 = require('./lib');
  const top = L2.playbookTop(pb, PB_NAMES), bottom = L2.playbookBottom(pb, PB_NAMES);
  const simAt = body.indexOf('<section class="section sim-section"'), shiftAt = body.indexOf('<section class="shift"');
  const anchor = simAt !== -1 ? simAt : shiftAt;
  if (anchor !== -1) {
    const after = body.indexOf('</section>', anchor) + 10;
    body = body.slice(0, after) + top + body.slice(after);
  }
  const relAt = body.lastIndexOf('<section class="related"'), bandAt = body.lastIndexOf('<section class="cta-band">');
  const at = relAt !== -1 ? relAt : bandAt;
  return at === -1 ? body + bottom : body.slice(0, at) + bottom + body.slice(at);
}
function withSim(body, page) {
  const kind = SIM_PAGES[page.slug];
  if (!kind) return body;
  const block = require('./lib').sim(kind);
  const shiftAt = body.indexOf('<section class="shift"');
  const after = shiftAt !== -1 ? body.indexOf('</section>', shiftAt) + 10 : -1;
  if (after > 9) return body.slice(0, after) + block + body.slice(after);
  const heroAt = body.indexOf('<section class="hero'); const at = body.indexOf('<section class="section', heroAt);
  return at === -1 ? body + block : body.slice(0, at) + block + body.slice(at);
}
function withRelated(body, page) {
  const href = '/' + page.slug;
  const links = [];
  if (page.slug.startsWith('products/') && productMeta(href)) {
    const meta = productMeta(href);
    for (const p of PERSONAS) if (p.products.includes(href)) links.push([`/${p.slug}`, `For ${p.label.toLowerCase()}s`, 'How this fits your kind of business']);
    for (const it of meta.items) if (it[0] !== href && links.length < 6) links.push([it[0], it[1], it[2]]);
  } else if (/^(solutions|roles|industries)\//.test(page.slug)) {
    const persona = PERSONAS.find((p) => page.slug === p.slug) || PERSONAS[0];
    for (const h of persona.products) { const m = productMeta(h); if (m) links.push([h, m.label, m.desc]); }
    links.push(['/pricing', 'Pricing', 'Three tiers, named after how the AI earns trust']);
    if (page.slug.startsWith('roles/')) links.unshift(['/brief', 'The one-page brief', 'Print it or send it to the owner']);
  } else return body;
  if (!links.length) return body;
  const block = `
<section class="section related" aria-labelledby="related-title">
  <div class="container">
    <div class="section-head"><p class="eyebrow">KEEP READING</p><h2 id="related-title">Related on Jwero.</h2></div>
    <div class="grid grid-3 cells">${links.slice(0, 6).map(([h, l, d]) => `<a class="card" href="${h}"><h3>${l}</h3><p>${d || ''}</p></a>`).join('')}</div>
  </div>
</section>`;
  const i = body.lastIndexOf('<section class="cta-band">');
  return i === -1 ? body + block : body.slice(0, i) + block + body.slice(i);
}

// Site search: a small index of every page, searched in the browser.
function searchDialog() {
  return `
<dialog class="search" aria-label="Search Jwero">
  <form class="search-box" method="get" action="/search" role="search">
    ${icon('search')}
    <input type="search" name="q" placeholder="Search products, solutions, questions…" autocomplete="off" aria-label="Search">
    <button type="button" class="search-close icon-btn" aria-label="Close search">${icon('close')}</button>
  </form>
  <div class="search-results" role="listbox" aria-label="Results"></div>
  <p class="search-hint">${mark('mark-xs')}<kbd>↑</kbd><kbd>↓</kbd> to move · <kbd>Enter</kbd> to open · <kbd>Esc</kbd> to close</p>
</dialog>`;
}
function searchIndex() {
  const section = (slug) => slug === 'index' ? 'Home' : ({ products: 'Product', platform: 'Platform', solutions: 'Solution', industries: 'Solution', roles: 'Role', blog: 'Guide', tools: 'Tool', compare: 'Compare', faq: 'FAQ', glossary: 'Glossary' }[slug.split('/')[0]] || 'Page');
  return pages.filter((p) => !p.noindex).map((p) => ({
    u: '/' + (p.slug === 'index' ? '' : p.slug),
    t: p.title.replace(/ \| Jwero$/, ''),
    d: p.description,
    s: section(p.slug),
    k: (p.faqs || []).map((f) => f.q.replace(/<[^>]+>/g, '')).join(' ').slice(0, 600),
  }));
}

// Per-page share images live in assets/og/<slug>.png (rendered by scripts/og.js); default otherwise.
function ogImage(page) {
  const f = (page.slug === 'index' ? 'index' : page.slug.replace(/\//g, '--')) + '.jpg';
  return fs.existsSync(path.join(ROOT, 'assets', 'og', f)) ? '/assets/og/' + f : '/assets/og-default.jpg';
}

// The launch: the mark ignites, lifts off and the panel rises to reveal the
// page. Rendered on every page, shown only on the first page of a session
// (html.first-visit), skipped under reduced motion. Pure CSS after that.
const LAUNCH_LINE = 'Strapping a rocket to your jewellery business.';
function launchHTML() {
  return `<div class="launch" aria-hidden="true">
  <div class="launch-stage">
    <div class="launch-glow"></div>
    <div class="launch-rocket">${mark('mark-launch')}<div class="launch-trail"><i></i><i></i><i></i><i></i><i></i><i></i></div></div>
    <p class="launch-word">Jwero</p>
    <p class="launch-line">${LAUNCH_LINE}</p>
  </div>
</div>`;
}

function layout(page) {
  const urlPath = page.slug === 'index' ? '' : `/${page.slug}`;
  const canonical = SITE + (urlPath || '/');
  const schemas = [orgSchema(), {
    '@context': 'https://schema.org', '@type': 'WebSite', name: BRAND, url: SITE,
    potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: SITE + '/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
  }, {
    '@context': 'https://schema.org', '@type': 'WebPage', url: canonical, name: page.title, description: page.description,
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.hero .sub'] },
    isPartOf: { '@type': 'WebSite', url: SITE },
  }];
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
<meta property="og:image" content="${SITE}${ogImage(page)}">
<meta property="og:image:alt" content="${page.title}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:image" content="${SITE}${ogImage(page)}">
<link rel="icon" type="image/png" href="${FAVICON}">
<meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#0b0c12" media="(prefers-color-scheme: dark)">
<link rel="preload" href="/assets/fonts/inter-var.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/site.css">
<script>(function(){var d=document.documentElement;try{var t=localStorage.getItem('jwero-theme');if(t)d.setAttribute('data-theme',t);}catch(e){}d.classList.add('js');try{var c=navigator.connection||{},q=location.search,slow=c.saveData||/2g|3g/.test(c.effectiveType||''),camp=/[?&](utm_|ref=|gclid|fbclid|p=)/.test(q);if(!sessionStorage.getItem('jwero-launched')&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&!slow&&!camp){d.classList.add('first-visit');}sessionStorage.setItem('jwero-launched','1');}catch(e){}setTimeout(function(){d.classList.add('motion-failsafe');},4000);})();</script>
<script type="speculationrules">{"prefetch":[{"where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":"/assets/*"}}]},"eagerness":"moderate"}]}</script>
${schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
</head>
<body>
${launchHTML()}
<a class="skip-link" href="#main">Skip to content</a>
${navHTML(page)}
<main id="main" tabindex="-1"${page.slug.startsWith('blog') ? ' class="is-article"' : ''}>
${page.breadcrumbs ? require('./lib').breadcrumbs(page.breadcrumbs) : ''}
${withPlaybook(withSim(withShift(withAsking(withFaqs(withRelated(withSchematic(page), page), page), page), page), page), page).replace(/<div class="r-icon">([^<]*)<\/div>/g, (m, g) => `<div class="r-icon">${icon(g)}</div>`)}
</main>
${searchDialog()}
${footerHTML()}
<script src="/assets/site.js" defer></script>
${page.body.indexOf('data-sim=') !== -1 || SIM_PAGES[page.slug] ? '<script src="/assets/sims.js" defer></script>' : ''}
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
  <p><a id="wa-fallback" href="https://wa.me/919169959959">Tap here if it doesn't open automatically</a></p>
</div>
<script>
(function(){
  var params = new URLSearchParams(location.search);
  var ref = params.get('ref') || 'whatsapp-redirect/qr';
  var msg = params.get('msg') || 'Hi Jwero — I scanned your code and would like to see a quick demo.';
  var url = 'https://wa.me/919169959959?text=' + encodeURIComponent(msg + ' [ref:' + ref + ']');
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

  // 404 — branded recovery page at the root path most static hosts pick up automatically.
  fs.writeFileSync(path.join(DIST, '404.html'), layout({
    slug: '404', noindex: true,
    title: 'Page Not Found | Jwero',
    description: 'That page doesn’t exist — here’s the way back to what you were looking for.',
    body: `
${require('./lib').section(`
  <div class="section-head" style="margin-top:24px">
    ${mark('mark-lost')}
    <p class="eyebrow">404</p>
    <h1>That page isn’t here.</h1>
    <p class="lead">The link may be old, or the address mistyped. Everything worth finding is one click below.</p>
  </div>
  <div class="cta-row" style="margin-top:8px">
    <a class="btn btn-primary" href="/">Go to the home page</a>
    <a class="btn btn-ghost" href="#" data-wa="default">Ask us on WhatsApp</a>
  </div>
  <p style="margin-top:30px; font-size:.95rem;">Popular destinations: <a href="/platform">The platform tour</a> · <a href="/products">All products</a> · <a href="/solutions">Solutions by business type</a> · <a href="/pricing">Pricing</a> · <a href="/faq">FAQ</a></p>`)}
`,
  }));

  // search index + a no-JS-fallback results page
  fs.writeFileSync(path.join(DIST, 'search-index.json'), JSON.stringify(searchIndex()));
  fs.mkdirSync(path.join(DIST, 'search'), { recursive: true });
  fs.writeFileSync(path.join(DIST, 'search', 'index.html'), layout({
    slug: 'search', noindex: true, title: 'Search | Jwero', description: 'Search every product, solution, guide and answer on jwero.ai.',
    body: `${require('./lib').section(`<div class="section-head"><h1>Search Jwero</h1></div>
  <form class="search-box search-box-page" method="get" action="/search" role="search">${icon('search')}<input type="search" name="q" placeholder="Search products, solutions, questions…" aria-label="Search" autocomplete="off"></form>
  <div class="search-results search-results-page" data-search-page role="list"></div>
  <p class="cta-note" style="margin-top:18px">Can’t find it? <a href="#" data-wa="faq">Ask on WhatsApp</a> — a real person and our AI reply within minutes.</p>`)}`,
  }));

  // llms-full.txt — every page's text, for answer engines that read whole sites.
  const strip = (h) => h.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<style[\s\S]*?<\/style>/g, ' ').replace(/<svg[\s\S]*?<\/svg>/g, ' ').replace(/<(h[1-3])[^>]*>/g, '\n\n## ').replace(/<\/(p|li|h[1-6]|div|tr)>/g, '\n').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&nbsp;/g, ' ').replace(/[ \t]+/g, ' ').replace(/\n\s*\n\s*\n+/g, '\n\n').trim();
  fs.writeFileSync(path.join(DIST, 'llms-full.txt'),
    `# Jwero — ${TAGLINE}\n\n${ORG_DESCRIPTION}\n\n` +
    pages.filter((p) => !p.noindex).map((p) => `---\n\n# ${p.title.replace(/ \| Jwero$/, '')}\nURL: ${SITE}/${p.slug === 'index' ? '' : p.slug}\n\n${p.description}\n\n${strip(p.body)}\n${(p.faqs || []).map((f) => `\nQ: ${f.q.replace(/<[^>]+>/g, '')}\nA: ${f.a.replace(/<[^>]+>/g, '')}`).join('\n')}`).join('\n\n') + '\n');

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

> Jwero is the Autonomous Jewellery OS, run by AI. One customer record (198 kinds of signal scored into 11 explainable scores; 90+ structured fields,
> including gold-plan balances and family occasions), one catalogue, one inventory truth and one
> inbox — with WhatsApp and Instagram commerce, gold savings schemes, digital gold, and an AI
> workforce that acts only inside approval queues, daily caps, quiet hours and a five-scope kill
> switch enforced in the product ("AI that waits for your yes").

## Category
Jwero calls this category the Autonomous Jewellery OS — an operating system for a jewellery business, run by AI agents that act on their own or ask first.
Spelling: this site uses "jewellery" (India, UK, Gulf, Commonwealth). "Jewelry" (US) refers to the same product and the same category — Jwero is the Autonomous Jewelry OS for US readers.
It serves single stores, multi-store chains, luxury/boutique/bridal retailers, diamond/gold/silver/
platinum/lab-grown/gemstone retailers, wholesalers, manufacturers (gold, diamond, casting, CAD, OEM,
export), and jewellery brands, D2C startups and franchise networks alike.

## What Jwero is not (honesty)
- Not a replacement for statutory accounting: Jwero bridges to Tally and Zoho Books; books stay there.
- Counter POS (registers, shifts, cash day-close, returns, old-gold exchange), statutory payroll, karigar
  settlement, girvi/gold loans, manufacturing (BOM, routing, wastage norms) and a video counter shipped in 2026.
- E-invoice IRN, auto-debit mandates, a full vernacular product interface (an early Hindi pilot is live on
  karigar screens), public API/SSO and predictive ML forecasting are on the public roadmap, not shipped today:
  ${SITE}/roadmap

## Company
Jwero is a product of ${LEGAL_ENTITY} (CIN ${LEGAL_CIN}), ${LEGAL_ADDRESS}.
Contact: care@jwero.ai · WhatsApp +91 91699 59959.

## Full text
Every page's text in one file: ${SITE}/llms-full.txt

## All pages
${pages.filter((p) => !p.noindex).map((p) => `- ${p.title.replace(/ \| Jwero$/, '')}: ${SITE}/${p.slug === 'index' ? '' : p.slug}`).join('\n')}
`);
  // sitemap
  const urls = pages
    .filter((p) => !p.noindex)
    .map((p) => `<url><loc>${SITE}/${p.slug === 'index' ? '' : p.slug}</loc><lastmod>${p.lastmod}</lastmod></url>`)
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
      if (err) {
        return fs.readFile(path.join(DIST, '404.html'), (err2, page404) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(err2 ? '404 — ' + p : page404);
        });
      }
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
