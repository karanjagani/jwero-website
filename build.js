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
const TAGLINE = 'You focus on jewellery. We handle the chaos';
// Jwero's own website chat widget (the product's webchat, dogfooded here).
// It loads from the product origin with this site's key and gives the page
// window.jwero.chat.open(). Until a key is set the connect panel falls back to
// WhatsApp / phone / the demo form, so no button is ever a dead end.
// Set JWERO_SITE_KEY in the build environment, or paste the key below.
const WEBCHAT = { origin: process.env.JWERO_WEBCHAT_ORIGIN || 'https://os.jwero.ai', siteKey: process.env.JWERO_SITE_KEY || '' };
const SIGNATURE = 'Markets change. Customers change. Technology changes. Your business shouldn’t have to chase every change.';
const ORG_DESCRIPTION =
  'Jwero is the Autonomous Jewellery OS, run by AI: customers, catalogue, stock, counter billing, purchase, manufacturing, accounts and team on one record, with WhatsApp and Instagram commerce, gold savings schemes, digital gold, and governed AI staff, in one place.';

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
  'home', 'platform', 'products', 'products-sell', 'products-run', 'products-grow', 'products-manage', 'products-hr', 'products-ops', 'products-more', 'brief', 'erp-to-os', 'pricing', 'diamond-traders',
  'industries', 'solutions', 'solutions-retail-segments', 'solutions-wholesale',
  'solutions-manufacturing-segments', 'solutions-other-segments', 'pain', 'trust',
  'compare', 'tools', 'faq', 'company', 'partners', 'blog', 'roles',
  'roles-leadership', 'roles-frontline', 'roles-growth', 'roles-manufacturing',
  'roles-operations', 'roles-trade', 'glossary', 'start', 'journey', 'seo', 'guides', 'legal', 'jbaas', 'legacy-blog', 'positioning',
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
      ['/trust', 'Trust Centre', 'Security, privacy and compliance status'],
      ['/platform/onboarding', 'Onboarding & Support', 'Set up in a day, trained in your language'],
      ['/roadmap', 'Roadmap & Changelog', "What's shipped, what's next — in public"],
    ],
  },
  {
    label: 'Products',
    match: ['products'],
    groups: [
      { title: 'Sell', items: [
        ['/products/whatsapp', 'WhatsApp Commerce & API', 'Sell and get paid in the chat'],
        ['/whatsapp-broadcast-for-jewellers', 'WhatsApp Marketing', 'Broadcasts, campaigns, triggers'],
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
        ['/products/training-lms', 'Training & LMS', 'Courses and certificates'],
      ]},
      { title: 'Grow', items: [
        ['/products/gold-schemes', 'Gold Savings Schemes', 'Enrolment to maturity'],
        ['/products/girvi', 'Girvi / Gold Loans', 'Pledge, interest, release'],
        ['/products/loyalty', 'Loyalty & Referrals', 'Tiers, rules, redemptions'],
        ['/products/segmentation', 'Customer Segmentation', 'Rule-based audiences'],
        ['/products/journeys', 'Customer Journeys', 'Approval-gated automation'],
        ['/products/campaigns', 'Campaigns', 'WhatsApp, email, SMS, push'],
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
        ['/solutions/diamond-traders', 'Diamond traders'],
        ['/solutions/diamond-wholesale', 'Diamond wholesalers'],
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
    footer: ['See all 23 segments', '/solutions'],
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
      ['/start', 'Start in three steps', 'Create your workspace, first month ₹3,600'],
      ['/brief', 'The one-page brief', 'For the owner who won’t read the site'],
      ['/company', 'About Jwero', 'The founders, by name'],
    ],
    links: [['/book-demo', 'Book a demo'], ['/contact', 'Contact']],
  },
  {
    label: 'Managed',
    match: ['jewellery-business-as-a-service', 'managed-services', 'what-we-handle', 'ai-and-experts', 'how-it-works', 'count-your-team', 'success-stories', 'why-jwero', 'self-managed'],
    items: [
      ['/jewellery-business-as-a-service', 'Jewellery Business as a Service', 'Jwero runs it for you. Pricing and how it works.'],
      ['/what-we-handle', 'What we handle', 'Customers, sales, online, back office.'],
      ['/ai-and-experts', 'AI + experts', 'AI does the work. Experts make it better.'],
      ['/count-your-team', 'Count your team', 'What the work costs today, and with Jwero.'],
      ['/how-it-works', 'How it works', 'From your goal to work getting done.'],
      ['/success-stories', 'Success stories', 'Jewellers in their own words.'],
    ],
    links: [['/why-jwero', 'Why Jwero'], ['/self-managed', 'Run it yourself']],
  },
  { label: 'Pricing', href: '/pricing', match: ['pricing'] },
];

const { icon, LINK_ICONS, heroSchematic, PERSONAS, personaSwitch, mark } = require('./lib');
const TRIAL_URL_B = require('./lib').TRIAL_URL;
// Asset versions: a short hash of each file, so browsers fetch the new CSS and
// JS the moment they change instead of mixing a new page with an old script.
const ASSET_V = (() => { const h = (f) => require('crypto').createHash('md5').update(require('fs').readFileSync(require('path').join(__dirname, 'assets', f))).digest('hex').slice(0, 8); return { css: h('site.css'), js: h('site.js'), sims: h('sims.js') }; })();
// Use cases per product page (content/usecases.json), from the product's own documentation.
const ROLES = (() => { try { return require('./content/roles.json'); } catch (e) { return {}; } })();
const ROLE_FAQ = Object.fromEntries(Object.entries(ROLES).map(([k, v]) => ['roles/' + k, (v.faqs || []).map(({ q, a }) => ({ q, a }))]));
const BLOG_FAQ = (() => { try { return require('./content/blog-extra.json'); } catch (e) { return {}; } })();
const PLATFORM_UC = (() => { try { return require('./content/platform-usecases.json'); } catch (e) { return {}; } })();
const SEGMENTS = (() => { try { return require('./content/segments.json'); } catch (e) { return {}; } })();
const SEGMENT_FAQ = Object.fromEntries(Object.entries(SEGMENTS).map(([k, v]) => ['solutions/' + k, (v.faqs || []).map(({ q, a }) => ({ q, a }))]));
const USECASES = (() => { try { return require('./content/usecases.json'); } catch (e) { return {}; } })();

// Primary navigation for the positioning "You focus on jewellery. We handle the
// chaos." Products, solutions and the rest are capabilities underneath: they
// stay in the footer, in search and on their own pages, not in the top bar.
const TOP_NAV = [
  { label: 'Why Jwero', href: '/why-jwero', match: ['why-jwero'] },
  { label: 'How it works', href: '/how-it-works', match: ['how-it-works'] },
  { label: 'What we handle', href: '/what-we-handle', match: ['what-we-handle'] },
  { label: 'AI + experts', href: '/ai-and-experts', match: ['ai-and-experts'] },
  { label: 'Self managed', href: '/self-managed', match: ['self-managed', 'jwero-os', 'products', 'platform', 'solutions', 'pricing'] },
  { label: 'Managed services', href: '/jewellery-business-as-a-service', match: ['managed-services'] },
  { label: 'Success stories', href: '/success-stories', match: ['success-stories', 'customers'] },
];

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
    <button type="button" class="icp-chip" data-icp-open aria-haspopup="dialog"><span data-icp-label>I run a…</span>${icon('updown')}</button>
    <nav class="main-nav" aria-label="Main">
      ${NAV.map(dd).join('')}
      <div class="nav-cta">
        <a class="btn btn-primary" href="#" data-wa="handle">Talk to us</a>
        <a class="nav-login" href="https://os.jwero.ai/login?utm_source=jwero.ai&utm_medium=header" rel="noopener" data-login>Log in</a>
        <div class="nav-tools">
          <button class="search-open nav-tool" type="button">${icon('search')}<span>Search</span></button>
          <button class="theme-toggle nav-tool" type="button">${icon('moon')}<span>Light or dark</span></button>
        </div>
      </div>
    </nav>
    <div class="header-cta">
      <a class="btn btn-primary btn-sm header-start" href="#" data-wa="handle">Talk to us</a>
      <a class="nav-login nav-login-sm" href="https://os.jwero.ai/login?utm_source=jwero.ai&utm_medium=header" rel="noopener" data-login>Log in</a>
      <button class="search-open icon-btn" type="button" aria-label="Search the site" aria-keyshortcuts="Meta+K Control+K">${icon('search')}</button>
      <button class="theme-toggle icon-btn" type="button" aria-label="Toggle dark mode">${icon('moon')}</button>
      <a class="btn btn-primary btn-sm header-float" href="#" data-wa="handle">Talk to us</a>
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
        ${require('./lib').partnerBadge('is-footer')}
        <p class="f-enemy">“You shouldn’t have to become an expert in everything to remain an expert in jewellery.”</p>
        <p class="f-made">Made with <span aria-hidden="true">❤</span><span class="sr-only">love</span> for Jewellers</p>
      </div>
      <div class="f-grid">
      ${col('Products', [['/products', 'App grid'], ...NAV.find((m) => m.label === 'Products').groups.flatMap((g) => g.items)])}
      ${col('Solutions', [['/roles','Roles — who uses Jwero'],['/solutions','All 23 solutions'],['/industries/retail','Retail'],['/solutions/single-store','Single store'],['/solutions/multi-store-chains','Multi-store & chains'],['/solutions/luxury-boutique','Luxury & boutique'],['/solutions/bridal','Bridal & wedding'],['/solutions/manufacturers','Manufacturers'],['/solutions/b2b-jewellery','Wholesale & B2B'],['/solutions/d2c-brands','D2C brands'],['/solutions/franchise-networks','Franchise networks'],['/solutions/pain/dead-stock','Dead stock'],['/solutions/pain/lead-leakage','Lead leakage']])}
      ${col('Resources', [['/faq','FAQ — every objection'],['/guides','Buyer’s guides'],['/blog','Blog'],['/tools','Tools & Calculators'],['/tools/dead-stock-calculator','Dead Stock Calculator'],['/tools/gold-scheme-calculator','Gold Scheme Calculator'],['/tools/whatsapp-revenue-estimator','WhatsApp Revenue Estimator'],['/tools/gold-loss-calculator','Gold-Loss Calculator'],['/compare','Compare alternatives'],['/compare/jwero-vs-shopify','Jwero vs Shopify'],['/compare/jwero-vs-wati','Jwero vs WATI'],['/migration','Migration Centre'],['/partners','Partners'],['/customers','Customer proof']])}
      <div class="f-stack">
      ${col('Jwero', [['/why-jwero','Why Jwero'],['/how-it-works','How it works'],['/ai-and-experts','AI + experts'],['/what-we-handle','What we handle'],['/self-managed','Self managed'],['/jewellery-business-as-a-service','Managed services'],['/success-stories','Success stories'],['/jwero-os','The operating system']])}
      ${col('Company', [['/company','About'],['/jewellery-software-india','Jewellery software by city'],['/hi','हिंदी'],['/pricing','Pricing'],['/book-demo','Book a demo'],['/enterprise','Enterprise'],['/contact','Contact']])}
      ${col('Trust', [['/trust','Trust Centre'],['/trust/security','Security'],['/legal/privacy','Privacy Policy'],['/legal/terms','Terms of Use'],['/legal/data-policy','Data Policy'],['/legal/sub-processors','Sub-processors'],['/legal/dpdp','DPDP statement'],['/roadmap','Roadmap']])}
      </div>
      </div>
    </div>
    <div class="f-proof">198 customer signals · 11 explainable scores · 240+ governed AI actions · AI chat in 14 languages · AI calls in 11 · 5 kill-switch scopes · Tally, Zoho Books, Shopify, WooCommerce, Unicommerce &amp; Meta connectors built in.</div>
    <div class="f-bottom">
      <p>© <span data-year></span> Jwero. All rights reserved.</p>
      <p class="f-social">${SOCIALS.map(([h, l]) => `<a href="${h}" rel="noopener" target="_blank">${l}</a>`).join('')}<a href="#" data-share="Thought of you. Jwero takes the marketing, technology and follow-up chaos off a jeweller:">Refer a jeweller, save 10%</a><a href="mailto:care@jwero.ai">care@jwero.ai</a><a href="https://os.jwero.ai/login?utm_source=jwero.ai&utm_medium=footer" rel="noopener">Log in to Jwero</a></p>
      <p>This site runs on Jwero — the chat button is the product.</p>
    </div>
    <p class="f-legal">Jwero is a product of ${LEGAL_ENTITY} · CIN ${LEGAL_CIN} · Registered office: ${LEGAL_ADDRESS}</p>
  </div>
</footer>
<div class="sticky-bar" role="navigation" aria-label="Quick actions">
  <a class="sb-wa" href="#" data-wa="sticky" data-connect="chat">Chat</a>
  <a class="sb-start" href="${TRIAL_URL_B}sticky" rel="noopener" data-trial>Start ₹3,600</a>
  <a class="sb-demo" href="#" data-wa="handle">Handle it for me</a>
</div>
<button class="to-top" type="button" aria-label="Back to top">${mark()}</button>`;
}

// House style: no long dashes anywhere a visitor can read. Content is written
// freely; this pass turns every " — " into the punctuation a person would use:
// a colon after a short label or heading stem, a comma inside a sentence.
// Number ranges (2–5, 10am–8pm) are left alone.
// Journey-wide fixes applied to the finished page.
const HINDI_CITIES = /^jewellery-software-india\/(delhi|jaipur|lucknow|kanpur|indore|bhopal|patna|varanasi|agra|meerut|ludhiana|chandigarh|dehradun|amritsar|jodhpur|udaipur|bikaner|gwalior|raipur|ranchi)$/;
// Role, product and platform pages: drop the blocks every such page repeats,
// and fold the article links into the related links.
function trimLong(html, slug) {
  if (!/^(roles|products|platform)\//.test(slug)) return html;
  const ms = html.indexOf('<main'), me = html.indexOf('</main>'); if (ms < 0 || me < 0) return html;
  let m = html.slice(ms, me);
  const secs = () => { const out = []; const re = /<section[\s>]/g; let x; while ((x = re.exec(m))) { const e = m.indexOf('</section>', x.index) + 10; out.push([x.index, e, m.slice(x.index, e)]); } return out; };
  const roles = /^roles\//.test(slug);
  const cut = (t) => /kinds of customer signal/.test(t) || /WHY TRYING THIS IS SAFE/.test(t)
    || (roles && (/class="shift"/.test(t) || /<h2[^>]*>Skills /.test(t) || /<h2[^>]*>Concrete /.test(t)));
  let blogLinks = '';
  for (const [a, b, t] of secs().reverse()) {
    if (/Read more on this\./.test(t) && /class="section related"/.test(m)) { blogLinks = [...t.matchAll(/<a href="(\/[^"]+)"><b>([^<]+)<\/b>/g)].slice(0, 3).map((x) => `<a href="${x[1]}">${x[2]}</a>`).join(' · '); m = m.slice(0, a) + m.slice(b); }
    else if (cut(t)) m = m.slice(0, a) + m.slice(b);
  }
  if (blogLinks) m = m.replace(/(<section class="section related"[\s\S]*?)(<\/div>\s*<\/section>)/, `$1<p class="cta-note" style="margin-top:14px">From the blog: ${blogLinks}</p>$2`);
  return html.slice(0, ms) + m + html.slice(me);
}
function journeyFix(html, p) {
  const slug = p.slug || '';
  html = trimLong(html, slug);
  // 1. every self-serve start goes through /start, which explains the first month
  if (slug !== 'start') html = html.replace(/href="https:\/\/os\.jwero\.ai\/signup\?utm_source=jwero\.ai&(?:amp;)?utm_medium=([^"]*)"(?: rel="noopener")?(?: data-trial(?:="[^"]*")?)?/g, (m0, from) => `href="/start?from=${from.replace(/[^a-z0-9-]/gi, '')}"`);
  // The opening answer becomes the first question in the page's questions, shown open.
  // Same question and answer for search and AI tools, without a repeat under the top section.
  {
    let q = null, ans = null;
    html = html.replace(/<section class="in-short"[^>]*>\s*<div class="container">\s*<p class="in-short-tag">In short<\/p>\s*<h2 id="in-short-q">([\s\S]*?)<\/h2>\s*<p>([\s\S]*?)<\/p>\s*<\/div>\s*<\/section>\s*/, (m0, a1, a2) => { q = a1; ans = a2; return ''; });
    if (q === null) html = html.replace(/<div class="in-short-line"><div class="container"><p><b id="in-short-q">([\s\S]*?)<\/b> ([\s\S]*?)<\/p><\/div><\/div>\s*/, (m0, a1, a2) => { q = a1; ans = a2; return ''; });
    if (q !== null) {
      const plain = (t) => t.replace(/<[^>]+>/g, '').replace(/&amp;/g, '&').trim().toLowerCase();
      const lead = `<details class="faq-item is-lead" open><summary>${q}</summary><div class="faq-a"><p>${ans}</p></div></details>`;
      const ms = html.indexOf('<main'), fi = html.indexOf('<div class="faq">', ms);
      if (fi > 0) {
        // drop the same question if it is already further down the list
        const fe = html.indexOf('</section>', fi);
        let block = html.slice(fi, fe).replace(/\s*<details class="faq-item">\s*<summary>([\s\S]*?)<\/summary>[\s\S]*?<\/details>/g, (m0, sq) => plain(sq) === plain(q) ? '' : m0);
        block = block.replace('<div class="faq">', '<div class="faq">' + lead);
        html = html.slice(0, fi) + block + html.slice(fe);
      } else {
        const band = html.lastIndexOf('<section class="cta-band"'), me = html.indexOf('</main>');
        const at = band > ms ? band : me;
        html = html.slice(0, at) + `<section class="section"><div class="container"><div class="faq">${lead}</div></div></section>\n` + html.slice(at);
      }
    }
  }
  // product pages: one main button and the two doors at the top, nothing else
  if (/^products\//.test(slug)) html = html.replace(/(<section class="hero[^"]*">[\s\S]*?)(<div class="doors-strip)/, (m0, top, rest) => top.replace(/\s*<a class="btn btn-ghost[^"]*"[^>]*>[^<]*<\/a>/g, '').replace(/\s*<p class="cta-note">[\s\S]*?<\/p>/, '') + rest);
  // the same question never appears twice on a page
  {
    const seenQ = new Set(), norm = (q) => q.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9ऀ-ॿ]+/g, ' ').trim();
    html = html.replace(/\s*<details class="faq-item[^"]*"[^>]*>\s*<summary>([\s\S]*?)<\/summary>[\s\S]*?<\/details>/g, (m0, q) => { const k = norm(q); if (!k) return m0; if (seenQ.has(k)) return ''; seenQ.add(k); return m0; });
  }
  // WhatsApp articles point to the main page for their topic
  {
    const MKT = ['/whatsapp-broadcast-for-jewellers', 'WhatsApp marketing for jewellers', 'broadcasts, festival campaigns and reminders'];
    const COM = ['/products/whatsapp', 'WhatsApp API for jewellers', 'selling in the chat with catalogue, payments and calls'];
    const CRM = ['/products/crm', 'Jewellery CRM', 'every WhatsApp chat on the customer record'];
    const PILLAR = { 'whatsapp-marketing-for-jewellers': MKT, 'akshaya-tritiya-whatsapp-campaigns-for-jewellers': MKT, 'diwali-whatsapp-campaigns-for-jewellers': MKT, 'wedding-season-whatsapp-campaigns-for-jewellers': MKT, 'whatsapp-broadcast-ideas-for-jewellery-stores': MKT, 'whatsapp-templates-for-jewellery-customers': MKT,
      'whatsapp-business-api-for-jewellers': COM, 'whatsapp-order-management-jewellery': COM, 'jewellery-catalogue-sharing-on-whatsapp': COM, 'blog/whatsapp-for-jewellers-guide': COM,
      'whatsapp-crm-for-jewellery-stores': CRM, 'whatsapp-crm-for-jewellers-how-to-capture-track-convert-every-chat': CRM };
    const pl = PILLAR[slug];
    if (pl) html = html.replace('<div class="post-body">', `<div class="post-body"><p class="post-note"><b>Looking for software for this?</b> See <a href="${pl[0]}">${pl[1]}</a>: ${pl[2]}, from an official Meta Business Partner.</p>`);
  }
  // pages never offer a button back to themselves
  if (slug === 'how-it-works') html = html.replace(/<a class="btn[^"]*" href="\/how-it-works">See how Jwero works<\/a>/g, '');
  if (slug === 'self-managed') html = html.replace(/<a class="btn[^"]*" href="\/self-managed">Run it yourself<\/a>/g, '').replace(/<a class="btn[^"]*" href="\/pricing">Ways to work with Jwero<\/a>/g, '');
  // 2. the managed page never links to itself
  if (slug === 'jewellery-business-as-a-service') html = html.replace(/<a class="btn btn-primary" href="\/jewellery-business-as-a-service">/g, '<a class="btn btn-primary" href="#" data-wa="handle">');
  // 4. Hindi: the closing band in Hindi, and a way in from Hindi-belt city pages
  if (slug === 'hi') html = html.replace(/>Chat or call with us</g, '>हमसे चैट या कॉल करें<').replace(/>Book a demo</g, '>डेमो बुक करें<');
  if (HINDI_CITIES.test(slug)) html = html.replace('</main>', '<section class="section"><div class="container"><p class="cta-note" style="text-align:center"><a href="/hi" lang="hi">यह पेज हिंदी में पढ़ें →</a></p></div></section></main>');
  // 5. legal pages are not dead ends
  if (/^legal\//.test(slug)) html = html.replace('</main>', '<section class="section"><div class="container"><p class="cta-note" style="text-align:center">Questions about this? <a href="#" data-wa="legal">Ask us on WhatsApp</a>. A real person replies within minutes. See also <a href="/trust">Trust</a> and <a href="/trust/security">Security</a>.</p></div></section></main>');
  // 6. titles that fit in search results
  html = html.replace(/<title>([^<]*)<\/title>/, (m0, t) => {
    if (t.length <= 65) return m0;
    let s = t.replace(/ \| Jwero$/, '');
    if (s.length > 65) { s = s.slice(0, 62); s = s.slice(0, s.lastIndexOf(' ')).replace(/[\s,:;&-]+$/, ''); }
    return `<title>${s}</title>`;
  });
  return html;
}

function noDash(text) {
  return String(text)
    .replace(/>\s*[—–]\s*</g, '>…<')
    .replace(/\s+–\s+/g, ', ')
    .replace(/\s*—\s*/g, (m, at, str) => {
      const before = str.slice(Math.max(0, at - 160), at), rest = str.slice(at + m.length, at + m.length + 160);
      const prev = before.replace(/\s+$/, '').slice(-1);
      if (!prev || prev === '>' && !/<\/[a-z0-9]+>\s*$/.test(before) || prev === '"' && /=\s*"$/.test(before)) return ''; // text that opens with a dash
      if (',:;'.includes(prev)) return ' ';
      if (/<\/(b|strong|dt|em)>\s*$/.test(before)) return ': ';       // "<b>Label</b> — detail"
      if (/^[^"<]{0,150}\| Jwero/.test(rest)) return ': ';               // page titles: "Topic — angle | Jwero"
      const gt = before.lastIndexOf('>');
      if (gt !== -1) {
        const seg = before.slice(gt + 1), tag = (/<([a-z0-9]+)[^<>]*>$/.exec(before.slice(0, gt + 1)) || [])[1];
        if (tag && /^(h[1-4]|b|strong|dt|title|summary)$/.test(tag) && !/[.?!]/.test(seg) && seg.trim().split(/\s+/).length <= 5) return ': ';
      }
      return ', ';
    });
}

// Every text file the build writes goes through noDash, so nothing slips past.
const writeRaw = fs.writeFileSync.bind(fs);
fs.writeFileSync = (file, data, ...rest) => writeRaw(file, typeof data === 'string' && /\.(html|txt|json)$/.test(String(file)) ? noDash(data) : data, ...rest);

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
// The day-on-one-screen illustration under each solution page's hero.
const { SHOP_DAY } = require('./content/shop-day');
function withShopDay(page) {
  const d = SHOP_DAY[page.slug];
  if (!d || /hero-mock/.test(page.body)) return page;
  const at = page.body.indexOf('<section class="hero">');
  const end = at === -1 ? -1 : page.body.indexOf('</section>', at);
  if (end === -1) return page;
  return Object.assign({}, page, { body: page.body.slice(0, end) + `<div class="container"><div class="stage hero-mock">${L3.mockShop(d)}</div></div>\n` + page.body.slice(end) });
}

// "In short": a question a searcher would type, answered in the page's own
// words, written into the HTML so answer engines can quote it without running
// any script. Product, solution and platform pages; also added to the page's
// question-and-answer data.
const KEEP_CASE = /^(Jwero|Optimize|WhatsApp|Instagram|Facebook|Meta|Google|Pinterest|Tally|Shopify|Amazon|Flipkart|Zoho|India|Girvi|Karigar)$/;
const IN_SHORT_Q = {
  'platform/integrations': 'What does Jwero integrate with?',
  'platform/ai-workforce': 'What is Jwero’s AI workforce?',
  'platform/onboarding': 'How does onboarding with Jwero work?',
  'products/email': 'What does Jwero’s business email do?',
  'products/marketplaces': 'How does Jwero handle Amazon and Flipkart orders?',
  'products/quotations': 'What does Jwero’s jewellery quotation and estimate software do?',
};
function inShortQuestion(page) {
  if (IN_SHORT_Q[page.slug]) return IN_SHORT_Q[page.slug];
  const kw = page.title.split(' | ')[0].split(/[:(—]/)[0].trim().replace(/^Jwero /, '')
    .split(' ').map((w) => (KEEP_CASE.test(w) || (!w.includes('-') && /[A-Z].*[A-Z]|\d/.test(w)) || w === w.toUpperCase() ? w : w.toLowerCase())).join(' ');
  if (/^(software )?for /i.test(kw)) return `What does Jwero do ${kw.replace(/^software /i, '')}?`;
  return `What does Jwero’s ${kw} do?`;
}
// Hub and pain pages answer their own question in one paragraph.
const HUB_SHORT = {
  tools: { q: 'Which free calculators does Jwero offer jewellers?', a: 'Four, free and without sign-up: a dead stock calculator for what idle inventory costs each month, a gold scheme calculator for what scheme enrolment is worth, a WhatsApp revenue estimator for what slow replies cost, and a gold-loss calculator for what unexplained production loss is worth. Each shows its assumptions.' },
  'tools/dead-stock-calculator': { q: 'How do I calculate the cost of dead stock in a jewellery shop?', a: 'Take the value of stock that has not sold in your chosen period, at today’s metal rate, and add what it costs you to hold it: the interest on the money tied up, plus any loss when it is finally discounted or melted. The calculator works this out from your own figures.' },
  'tools/gold-loss-calculator': { q: 'How do I calculate gold loss in jewellery manufacturing?', a: 'Compare the metal issued to each stage with the metal returned, subtract the loss your norm allows, and value what is left at today’s rate. The calculator shows what unexplained loss is worth over a month and a year from your own figures.' },
  'tools/gold-scheme-calculator': { q: 'How do I work out what a gold savings scheme is worth to my shop?', a: 'Multiply the customers who join by their monthly instalment and the scheme length, then account for the bonus month you give and how many complete. The calculator turns your enrolment numbers into the future sales a scheme locks in.' },
  'tools/whatsapp-revenue-estimator': { q: 'How much revenue do jewellers lose to slow WhatsApp replies?', a: 'It depends on how many enquiries you get, how many go unanswered or are answered late, and how many of those would have bought. The estimator works it out from your own numbers and shows each assumption.' },
  'compare/whatsapp-tools-vs-jewellery-os': { q: 'Do jewellers need a WhatsApp tool or a full jewellery system?', a: 'A WhatsApp tool sends and answers messages. A jewellery system also knows the stock, the live rate, schemes and each customer’s purchases, so a reply can quote the right piece at today’s price. If messaging is your only gap, a tool can be enough; if replies need the business behind them, a system fits better.' },
  index: { q: 'What is Jwero?', a: 'Jwero is the autonomous jewellery operating system that runs the whole business on one record: customers, counter billing at the live gold rate, stock, purchase, the workshop, schemes, books, team, marketing, sales, conversions, promotions and much more, with AI that drafts routine work for a person to approve. Run it yourself for ₹18,000 a month, first month ₹3,600, or let Jwero’s specialists run it for you, so you can focus on what matters most.' },
  'jewellery-business-as-a-service': { q: 'What is Jewellery Business as a Service?', a: 'It is Jwero running the work around your jewellery for you: marketing, enquiry follow-up, online sales, customer retention and the back office, done by Jwero’s specialists and AI on Jwero’s own platform. There is no team to hire, no tools to buy and no subscription; the price follows the work, about half of what it costs you today.' },
  'why-jwero': { q: 'Why do jewellers choose Jwero?', a: 'Because a jeweller should not have to become an expert in marketing, technology and AI to stay an expert in jewellery. Jwero is built for jewellery, keeps up with the changes for you, and lets you choose how much it handles: run it yourself, run it together, or let Jwero run it.' },
  'how-it-works': { q: 'How does working with Jwero work?', a: 'You tell Jwero what you want to achieve, not which tool you need. Jwero reads where your business is, decides what needs to happen, and agrees with you how much it handles. AI does the routine work and specialists check what matters; you get one account of what was done. Set-up takes a day.' },
  'what-we-handle': { q: 'What can Jwero handle for a jeweller?', a: 'Getting more customers, selling more, keeping customers, growing online, reducing routine work, understanding the numbers, keeping up with technology, and running the shop floor and supply. For each, Jwero can power it with software, manage it for you, or bring specialists to help. You can start with one function.' },
  'ai-and-experts': { q: 'How do AI and specialists work together at Jwero?', a: 'AI agents do the routine work at scale: replies, follow-ups, reminders, content and reports, inside limits you set and with your approval where you want it. Jwero’s specialists plan, review and handle the judgement calls in marketing, ecommerce, CRM and technology. You get both without hiring for either.' },
  'self-managed': { q: 'Can I run Jwero myself?', a: 'Yes. Your team runs the business on Jwero’s software: every module, AI agents that wait for approval, and the work that happens automatically. It costs ₹18,000 a month, with the first month at ₹3,600, and set-up takes a day. You can hand any function to Jwero later.' },
  'count-your-team': { q: 'How much does a jewellery business spend to keep up?', a: 'It depends on your customer base, showrooms and which roles you pay for. This calculator predicts your monthly conversations, calls and other work, shows the people and tools it takes at the lowest going rates in India, and compares that with Jwero doing the same work, with every tool included.' },
  'success-stories': { q: 'What do jewellers say about working with Jwero?', a: 'Jewellers from Bangalore, Chennai, Hyderabad, Patna and Kerala speak about fast set-up, a responsive team and understanding of the jewellery trade. This page shows their words as published, the proof you can check yourself, and how each kind of work is measured.' },
  products: { q: 'What products does Jwero include?', a: 'Every product runs on one record: selling (WhatsApp, Instagram, AI agents, online store, catalogues, quotations), marketing (campaigns, journeys, ads, social), customers (CRM, segments, loyalty, schemes), operations (POS, billing, inventory, purchase, manufacturing, repairs, girvi) and the team (HR, payroll, training). All are included in one subscription.' },
  customers: { q: 'Which jewellers use Jwero?', a: 'Jewellery businesses across India run on Jwero, from single showrooms to chains and manufacturers. This page shows the named jewellers who agreed to be listed, what they say in their own words, and the proof you can check yourself.' },
  faq: { q: 'What do jewellers ask before choosing Jwero?', a: 'Mostly cost, set-up, data and WhatsApp. Jwero is ₹18,000 a month to run yourself, first month ₹3,600, or priced on the work when Jwero runs it. Set-up takes a day, your data stays yours and can be exported, and messaging runs on the official WhatsApp Business API.' },
  'erp-to-os': { q: 'Should a jeweller replace their ERP?', a: 'Not always. An ERP records stock and books; Jwero also runs customers, every selling channel and follow-up on the same record. Some jewellers move fully, some keep their ERP and Tally for the books and add Jwero alongside. These pages help you decide which fits.' },
  'erp-to-os/make-do': { q: 'Can I keep my current jewellery ERP and still grow?', a: 'You can, if it covers your counter and books well. The gaps usually show in customers, WhatsApp, follow-up and online sales. Jwero can sit alongside your ERP for those, with Tally kept for the books.' },
  'erp-to-os/switching': { q: 'How do I switch from my jewellery ERP to Jwero?', a: 'Customers, products and stock are imported for you, set-up takes a day, and you can run both systems side by side while your team settles in. Switch outside your busiest season.' },
  'why-an-os': { q: 'Why does a jewellery business need one operating system?', a: 'Because separate tools for billing, stock, WhatsApp, marketing and reports do not know about each other. One system on one record means a sale updates stock, the customer’s history and the books together, and nobody types the same thing twice.' },
  'how-it-goes': { q: 'What happens after I contact Jwero?', a: 'A real person replies on WhatsApp within minutes. A short call follows about your business and what you would rather not manage, then a written plan with what Jwero takes on and what it costs. Set-up takes a day, starting with one function if you like.' },
  'industries/retail': { q: 'What jewellery retail software does Jwero offer?', a: 'Counter billing at the live gold rate with old-gold exchange, stock by piece and weight, schemes, customer follow-up on WhatsApp and Instagram, and reports, for single stores and chains. Run it yourself for ₹18,000 a month, or let Jwero run it.' },
  brief: { q: 'What is the Jwero brief?', a: 'A short summary of what Jwero is, what it costs and how it works, written to share with a partner, family member or manager who will help decide.' },
  pricing: { q: 'How much does Jwero cost?', a: 'There are three ways to buy. Run it yourself: ₹18,000 a month with every module, first month ₹3,600, extra locations ₹2,999 each. Let Jwero run it: no subscription, every tool included, priced on the work, about half of what that work costs you today. Enterprise for groups and chains: custom. Messages, AI and calls are charged from a prepaid wallet at published rates.' },
  enterprise: { q: 'Does Jwero work for jewellery chains and groups?', a: 'Yes. Branches, brands and roles run on one system with single sign-on and user provisioning, a staged rollout plan and a security overview for your IT team. Enterprise is custom priced, and functions can be run by your team, by Jwero, or a mix.' },
  trust: { q: 'Is Jwero secure, and what is certified?', a: 'Each business has its own isolated database, hosted in India, with role-based access, approvals and limits on AI actions. Jwero follows India’s DPDP Act. ISO 27001 and SOC 2 are in progress and not certified; this page shows the real status of every standard.' },
  'trust/security': { q: 'How does Jwero protect a jeweller’s data?', a: 'Every business runs in its own isolated database, with encryption, role-based access, approval queues and limits on what AI can do. You set backup frequency and retention, can export your data at any time, and can ask for the latest restore check for your workspace.' },
  roadmap: { q: 'What does Jwero not do yet?', a: 'This page lists it in public: shipped, rolling out and not yet. Not yet includes direct e-invoice filing and e-way bills, Tally auto-posting, metal reconciliation, Google Shopping sync, CAD file storage and a regional-language interface.' },
  migration: { q: 'How do I move to Jwero from my current software?', a: 'Customers, products and stock are imported for you from exports or spreadsheets. Set-up takes a day, most businesses settle in within thirty days, and you can run your old system alongside while your team gets used to Jwero.' },
  guides: { q: 'How should a jeweller choose software?', a: 'Start from the work: billing at the live rate, stock by piece and weight, customers and follow-up, purchase and the workshop. Check each vendor on purity-based pricing, old-gold exchange, scheme handling, data export and what is not built yet, and test it on your own data. These guides take each area in turn.' },
  compare: { q: 'How does Jwero compare with other jewellery software?', a: 'Jwero is built jewellery-first and runs customers, every selling channel and operations on one record, with AI that waits for approval. Jewellery ERPs such as Marg, Ornate NX or SIONIQ can be stronger on accounting depth or module breadth; WhatsApp tools such as WATI or Interakt focus on messaging. Each comparison here says where the other product wins.' },
  blog: { q: 'What does the Jwero blog cover?', a: 'Practical guides for jewellery business owners: selling on WhatsApp and Instagram, gold savings schemes and their rules, dead stock, gold loss in manufacturing, HUID records, Tally, software costs and how to compare vendors. Each guide is reviewed against what the product does and says plainly what it does not do yet.' },
  'jewellery-software-india': { q: 'Which jewellery software do Indian jewellers use?', a: 'Jewellers across India, from Surat diamond offices to Thrissur gold showrooms, run Jwero for billing at the live rate, stock, customers, karigar accounts, schemes and WhatsApp on one record. It is set up in a day over chat and video in any city, at the same price everywhere: ₹18,000 a month, first month ₹3,600.' },
  platform: { q: 'What is the Jwero platform?', a: 'Jwero is one system for a jewellery business: customers, counter, stock, purchase, workshop, books and team on one record, with AI agents that draft the routine work for a person to approve. It connects to Tally, Shopify, marketplaces and Meta, prices every piece from the live gold rate, and is set up in a day.' },
  roles: { q: 'How does Jwero help each person in a jewellery business?', a: 'Every role works on the same customer and stock record: the owner sees the whole business, the counter bills at the live rate, sales staff know each customer before they speak, and the workshop, purchase and accounts teams stop re-entering the same data. AI drafts routine work and a person approves it.' },
  solutions: { q: 'Which Jwero setup fits my kind of jewellery business?', a: 'Jwero is one system for every kind of jewellery business: single stores, chains, franchises, gold, diamond and silver retail, wholesale, traders and manufacturers. Each business type switches on the parts it needs first. Run it yourself for ₹18,000 a month, first month ₹3,600, or let Jwero’s specialists and AI run it for you.' },
  'solutions/pain': { q: 'What are the most common leaks in a jewellery business?', a: 'Enquiries that never get a reply or a follow-up, and stock that sits unsold for months, are the two leaks most jewellers never measure. Jwero shows both on one record: every enquiry from every channel with its follow-up, and every piece with its age and value at today’s rate.' },
  'solutions/pain/lead-leakage': { q: 'How do jewellers stop losing enquiries?', a: 'Put every enquiry from WhatsApp, Instagram, the website and calls into one inbox on the customer’s record, answer it within minutes, and keep a follow-up open until it becomes a bill or is closed with a reason. Jwero does this, with AI drafting replies and follow-ups that wait for your approval.' },
  'solutions/pain/dead-stock': { q: 'How do jewellers reduce dead stock?', a: 'Know the age and today’s value of every piece, see what has not moved in months, and match slow pieces to the customers most likely to buy them before discounting or melting. Jwero shows stock ageing at the live rate and suggests who to offer each idle piece to.' },
};
const HUB_FAQ = {
  tools: [
    { q: 'Are the calculators free?', a: 'Yes. No sign-up and no email. Move the sliders to your own figures and the result updates.' },
    { q: 'How accurate are the results?', a: 'They are estimates from your inputs and the assumptions shown under each calculator. Change any assumption to match your business.' },
    { q: 'What should I do with the result?', a: 'Send it to Jwero on WhatsApp and we will reply with the plan for your bracket, or open the page under the result to see how Jwero fixes it.' },
  ],
  roadmap: [
    { q: 'How often is the roadmap updated?', a: 'Whenever something ships or changes status. Items move from not yet to rolling out to shipped, and the product pages are updated with them.' },
    { q: 'Can I ask for a feature?', a: 'Yes. Tell us which item decides your purchase; order on the roadmap is open to discussion, especially for early partners.' },
    { q: 'Will a feature on this list cost extra when it ships?', a: 'Features of the platform are part of the subscription. Usage such as messages, AI and calls is charged from the wallet at published rates.' },
  ],
  guides: [
    { q: 'Which guide should I read first?', a: 'Start from the problem you feel most: slow bills, unknown stock, customers who do not come back, gold lost in production, or wanting one system for everything. The list at the top of this page points you to the right guide.' },
    { q: 'Which guide should I read first?', a: 'Start with billing if the counter is your pain, inventory if stock is, CRM if customers are slipping away, and ERP or manufacturing if you make or supply jewellery.' },
    { q: 'Are these guides neutral?', a: 'The checklists apply to any vendor. Each guide ends with what Jwero does and what it does not do yet, so you can judge it like the rest.' },
  ],
  'compare/whatsapp-tools-vs-jewellery-os': [
    { q: 'Can I keep my WhatsApp number if I move to Jwero?', a: 'Yes. Your business number can be moved to the official WhatsApp Business API that Jwero runs on, and the team replies from one shared inbox.' },
    { q: 'Is a WhatsApp tool cheaper than a jewellery system?', a: 'Usually, for messaging alone. Compare it against everything it does not cover, such as stock, rate-linked pricing, schemes and customer history, and the tools you would add for those.' },
  ],
  compare: [
    { q: 'Which comparison should I read first?', a: 'Start from what you use today: a jewellery ERP, an accounting tool, a WhatsApp tool, an online store or a CRM. The list at the top of this page points you to the right one.' },
    { q: 'Are these comparisons fair to other vendors?', a: 'Each one states where the other product is stronger, sources its facts from that vendor’s public material with a date, and says not confirmed where information was not public.' },
    { q: 'Can I move from my current software to Jwero?', a: 'Yes. Customers, products and stock are imported for you, set-up takes a day, and you can run both systems side by side while your team settles in.' },
  ],
  'jewellery-software-india': [
    { q: 'Does Jwero have offices in every city?', a: 'No. Setup, training and support are done over chat, call and video, so the service is the same in every city. Your data is imported for you.' },
    { q: 'Does it work in regional languages?', a: 'Support is given in your language over chat and call. Customer messages and AI replies can be written in the customer’s language.' },
    { q: 'Is the price different by city?', a: 'No. It is ₹18,000 a month in every city, with the first month at ₹3,600. The managed service is priced on the work.' },
  ],
  solutions: [
    { q: 'Can one system handle retail, wholesale and manufacturing together?', a: 'Yes. Jwero runs the counter, B2B orders, the workshop and the books on one record, so a business that does more than one of these does not need separate software for each.' },
    { q: 'Do I pay more for a bigger or more complex business?', a: 'The subscription is ₹18,000 a month with every module. Extra locations are ₹2,999 each. Groups and chains can take Enterprise, which is custom priced.' },
    { q: 'Can Jwero run the work for me instead of my team?', a: 'Yes. With the managed service, Jwero’s specialists and AI run the functions you hand over, such as marketing, follow-ups and online sales. There is no subscription, and every tool is included.' },
  ],
  'solutions/pain': [
    { q: 'How do I know how much my business is leaking?', a: 'Start with two numbers: enquiries in the last month that never got a follow-up, and stock older than six months at today’s value. Jwero shows both once your data is in.' },
    { q: 'Do I need new staff to fix these leaks?', a: 'No. AI drafts the replies and follow-ups and your team approves them, or Jwero’s managed service runs the follow-up for you.' },
  ],
  'solutions/pain/lead-leakage': [
    { q: 'Where do jewellery enquiries usually get lost?', a: 'In personal phones, late-night WhatsApp messages, Instagram DMs nobody owns, and quotations that are never followed up. When a salesperson leaves, their customers often leave with them.' },
    { q: 'Will AI reply to my customers on its own?', a: 'Only if you allow it. By default AI drafts the reply and a person approves it. You can set limits, quiet hours and switch it off at any time.' },
    { q: 'Does it work with my existing WhatsApp number?', a: 'Jwero uses the WhatsApp Business API. Your business number can be moved to it, and the team then replies from one shared inbox instead of separate phones.' },
  ],
  'solutions/pain/dead-stock': [
    { q: 'What counts as dead stock in jewellery?', a: 'Pieces that have not sold for a long time, often six months or more, tying up gold and cash. The right threshold depends on the category; Jwero lets you see ageing by any period.' },
    { q: 'Should I melt, discount or push dead stock?', a: 'First try to sell it to customers whose taste matches it, then discount, and melt last. Jwero shows each idle piece’s value at today’s rate and who it might suit.' },
  ],
};
function inShortQA(page) {
  if (HUB_SHORT[page.slug]) return HUB_SHORT[page.slug];
  const rk = /^roles\/([^/]+)$/.exec(page.slug || '');
  if (rk && ROLES[rk[1]] && ROLES[rk[1]].short) return ROLES[rk[1]].short;
  if (!/^(products|platform)\/|^solutions\/(?!pain)/.test(page.slug)) return null;
  return { q: inShortQuestion(page), a: `${page.description.replace(/\s*—\s*/g, ', ')} It is part of Jwero One: ₹18,000 a month, every module included, with the first month at ₹3,600.` };
}
function withInShort(page) {
  const qa = inShortQA(page);
  if (!qa || /class="in-short"/.test(page.body)) return page;
  const at = page.body.indexOf('<section class="hero');
  const end = at === -1 ? -1 : page.body.indexOf('</section>', at);
  if (end === -1) return page;
  const { q, a } = qa;
  const block = `\n<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">${q}</h2><p>${a}</p></div></section>`;
  return Object.assign({}, page, { body: page.body.slice(0, end + 10) + block + page.body.slice(end + 10), faqs: (page.faqs || []).concat([{ q, a }]) });
}

// "More questions jewellers ask": one direct answer per tool, on the page that
// should win that search. Sits before the closing band.
const { TOOL_QA } = require('./content/tool-answers');
function withToolQA(page) {
  const qa = (TOOL_QA[page.slug] || []).concat(HUB_FAQ[page.slug] || [], (SEGMENT_FAQ[page.slug] || []), (ROLE_FAQ[page.slug] || []), (BLOG_FAQ[page.slug] || []), page.legacy ? TOPIC_FAQ(postTopic(page)) : []);
  const norm = (q) => q.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
  const have = new Set((page.faqs || []).map((f) => norm(f.q)));
  for (const m of page.body.matchAll(/<summary>([\s\S]*?)<\/summary>/g)) have.add(norm(m[1]));
  qa.splice(0, qa.length, ...qa.filter((f) => { const k = norm(f.q); if (have.has(k)) return false; have.add(k); return true; }));
  if (!qa.length || /class="tool-qa"/.test(page.body)) return page;
  const block = `\n<section class="section tool-qa"><div class="container">${L3.sectionHead('', 'More questions jewellers ask.', '')}${L3.faqBlock(qa)}</div></section>\n`;
  const at = page.body.lastIndexOf('<section class="cta-band"');
  return Object.assign({}, page, { body: at === -1 ? page.body + block : page.body.slice(0, at) + block + page.body.slice(at) });
}

function withSchematic(page) {
  page = withToolQA(withInShort(withShopDay(page)));
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
  // Removed 2026-10-06: the question strip under the top section pulled visitors away from the
  // page's own order. The questions stay in each page's questions section.
  return body;
  if (page.slug === 'index' || page.slug === 'jwero-os' || page.slug === 'faq') return body;
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
  if (page.slug === 'index' || page.slug === 'jwero-os') return body; // that page folds this into its comparison section
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
  'products/crm': 'memory', 'platform/customer-memory': 'memory', 'roles/sales-associate': 'memory', 'products/whatsapp': 'memory',
  'products/inventory': 'shelf', 'solutions/pain/dead-stock': 'shelf', 'roles/inventory-manager': 'shelf',
  'products/pos': 'till', 'roles/cashier': 'till', 'products/billing-finance': 'till',
  'solutions/diamond-traders': 'shelf', 'roles/accountant': 'till', 'roles/store-manager': 'shelf', 'roles/chain-owner': 'approve', 'roles/purchase-manager': 'shelf', 'roles/crm-executive': 'memory', 'roles/marketing-manager': 'approve', 'roles/b2b-manager': 'rate', 'roles/ecommerce-manager': 'rate', 'roles/quality-hallmarking': 'grams', 'roles/franchise-partner': 'approve', 'roles/next-gen-successor': 'memory', 'roles/cad-designer': 'approve', 'solutions/pain/lead-leakage': 'memory',
  'products/erp': 'grams', 'products/manufacturing': 'grams', 'products/multi-store': 'shelf', 'products/gold-schemes': 'memory', 'products/repairs-service': 'memory',
  'products/manufacturing': 'grams', 'solutions/manufacturers': 'grams', 'roles/production-manager': 'grams', 'roles/karigar': 'grams',
};
// Solution playbooks: the day loop + module map after the simulation, the fit
// check + first steps before the closing band.
const { PLAYBOOKS, NAMES: PB_NAMES } = require('./content/solution-playbooks');
const L3 = require('./lib');
// A page with FAQ schema must show the answers: append a FAQ section wherever
// the body has none (FAQPage rich results require visible content).
function withFaqs(body, page) {
  if (!page.faqs || !page.faqs.length) return body;
  const firstQ = page.faqs[0].q.replace(/&/g, '&amp;');
  if (body.includes(firstQ) || body.includes(page.faqs[0].q)) return body;
  const L2 = require('./lib');
  const lastFaq = body.lastIndexOf('<div class="faq">');
  if (lastFaq !== -1) {
    const missing = page.faqs.filter((f) => !body.includes(f.q) && !body.includes(f.q.replace(/&/g, '&amp;')));
    if (!missing.length) return body;
    const inner = L2.faqBlock(missing).replace(/^<div class="faq">/, '').replace(/<\/div>\s*$/, '');
    const close = body.indexOf('</details>', lastFaq); let end = body.lastIndexOf('</details>', body.indexOf('</section>', lastFaq)) + 10;
    if (close === -1 || end < 10) return body;
    return body.slice(0, end) + inner + body.slice(end);
  }
  const block = L2.section(`${L2.sectionHead('QUESTIONS', 'What people ask before they message.', '')}${L2.faqBlock(page.faqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`);
  const relAt = body.lastIndexOf('<section class="related"'), bandAt = body.lastIndexOf('<section class="cta-band">');
  const at = relAt !== -1 ? relAt : bandAt;
  return at === -1 ? body + block : body.slice(0, at) + block + body.slice(at);
}
// A quiet trial line under the hero buttons of every pipeline page.
function withHeroTrial(body, slug) {
  return body.replace(/(<section class="hero[\s\S]*?<div class="cta-row center">[\s\S]*?<\/div>)/, (m) => `${m}\n      <p class="hero-try">or <a href="${L3.TRIAL_URL}hero-${slug.replace(/\W+/g, '-')}" rel="noopener" data-trial>start at ₹3,600</a> for the first month · <a href="#price">see what it costs</a></p>`);
}
// The four role pages a buyer reads get what a buyer needs: the fit check, the
// price for a business like theirs, a trial or demo door, and a way to pass it on.
const BUYER_ROLES = {
  'roles/owner': { sol: 'solutions/single-store', fit: ['The business stops remembering when I am not in the shop', 'I answer the same price question on WhatsApp ten times a day', 'A good salesperson leaving would take customers with them', 'I find out about dead stock at the year-end count', 'Scheme collections depend on one person and a register'] },
  'roles/next-gen-successor': { sol: 'solutions/single-store', fit: ['My parents know every customer; nothing is written down', 'I am the one answering Instagram and WhatsApp at night', 'I want to modernise without a fight at home', 'Our billing software cannot tell me who to call this week', 'I need to show the family a result before spending more'] },
  'roles/chain-owner': { sol: 'solutions/multi-store-chains', fit: ['I call branches to learn what happened today', 'A rate change reaches some branches late', 'A customer is a stranger at our next branch', 'Stock questions go to a WhatsApp group', 'Each branch markets its own way'] },
  'roles/franchise-partner': { sol: 'solutions/franchise-networks', fit: ['Brand price updates arrive as PDFs', 'Local offers get settled over the phone', 'I cannot see my own store’s numbers the way the brand does', 'Replenishment runs on email and calls', 'Brand campaigns reach my customers late or twice'] },
};
function withBuyerRole(body, page) {
  const cfg = BUYER_ROLES[page.slug];
  if (!cfg) return body;
  const pb = PLAYBOOKS[cfg.sol], i = L3.icpOf(page.slug);
  const block = `
${L3.section(`${L3.sectionHead('DOES THIS SOUND LIKE YOU?', 'Five things owners tell us.', '')}
  ${L3.fitCheck(cfg.fit, pb.wa, pb.modules, PB_NAMES)}`)}
${L3.priceBlock(i, 'role-price')}
${L3.passItOn(i)}`;
  body = withHeroTrial(body, page.slug);
  const relAt = body.lastIndexOf('<section class="related"'), bandAt = body.lastIndexOf('<section class="cta-band">');
  const at = relAt !== -1 ? relAt : bandAt;
  return at === -1 ? body + block : body.slice(0, at) + block + body.slice(at);
}
function withPlaybook(body, page) {
  const pb = PLAYBOOKS[page.slug];
  if (!pb) return body;
  const L2 = require('./lib');
  const top = L2.playbookTop(pb, PB_NAMES, page.slug), bottom = L2.playbookBottom(pb, PB_NAMES, page.slug);
  body = withHeroTrial(body, page.slug);
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
// Solution and product pages sell the software; each also offers the managed
// service and carries one customer's words, so no path is a dead end.
function withManaged(body, page) {
  const slug = page.slug || '';
  const top = slug.split('/')[0];
  // pages that are not part of a buying journey, or already carry the tiers
  if (['index', '404', 'search', 'contact', 'book-demo', 'glossary', 'start', 'legal', 'hi', 'partners', 'company'].includes(top)) return body;
  if (/jb-tier/.test(body)) return body;
  const P = require('./content/positioning');
  const Q = P.QUOTES;
  const SOL_QUOTE = { 'gold-retail': 1, 'silver-retail': 1, 'bridal': 1, 'd2c-brands': 3, 'jewellery-brands': 3, 'lab-grown-diamond': 3, 'single-store': 0, 'startups': 0, 'multi-store-chains': 4, 'luxury-boutique': 4, 'diamond-retail': 4, 'gemstone-retail': 2, manufacturers: 0, 'casting-units': 0, 'oem-manufacturers': 0, 'cad-services': 0, 'export-houses': 1, 'b2b-jewellery': 1, 'gold-wholesale': 1, 'diamond-wholesale': 1, 'diamond-traders': 1, 'bullion-gold-traders': 1, 'franchise-networks': 4 };
  const ROLE_QUOTE = { owner: 1, 'chain-owner': 4, 'franchise-partner': 4, 'next-gen-successor': 1, 'store-manager': 0, 'sales-associate': 2, 'crm-executive': 2, 'marketing-manager': 3, 'ecommerce-manager': 3, cashier: 0, accountant: 0, 'inventory-manager': 0, 'purchase-manager': 0, 'b2b-manager': 1, 'production-manager': 0, karigar: 1, 'cad-designer': 0, 'quality-hallmarking': 1 };
  const PLAT_QUOTE = { platform: 3, 'platform/onboarding': 0, 'platform/integrations': 0, 'platform/integrations/tally': 0, 'platform/customer-memory': 1, 'platform/pricing-engine': 1, 'platform/ai-workforce': 2 };
  const TOOL_QUOTE = { 'ads-for-jewellers': 3, 'jewellery-website-analytics': 3, 'instagram-for-jewellers': 3, 'jewellery-appointment-booking-software': 2, 'whatsapp-broadcast-for-jewellers': 2, 'ai-calling-for-jewellers': 2, 'sms-marketing-for-jewellers': 2, 'jewellery-accounting-software': 0, 'jewellery-barcode-tagging-software': 0, 'cloud-jewellery-software': 0, 'jewellery-staff-management-software': 0, 'jewellery-showroom-footfall-counting': 1, 'tools/dead-stock-calculator': 1, 'tools/gold-scheme-calculator': 1, 'tools/gold-loss-calculator': 0, 'tools/whatsapp-revenue-estimator': 2 };
  const CMP_QUOTE = { 'compare/jwero-vs-ornate-nx': 1, 'compare/jwero-vs-synergics': 0, 'compare/jwero-vs-jewelacc': 0, 'compare/jwero-vs-marg': 0, 'compare/jwero-vs-sioniq': 1, 'compare/jwero-vs-wati': 2, 'compare/jwero-vs-interakt': 2, 'compare/jwero-vs-doubletick': 2, 'compare/whatsapp-tools-vs-jewellery-os': 2, 'compare/jwero-vs-shopify': 3, 'compare/jwero-vs-quicksell': 3, 'compare/jwero-vs-zoho-crm': 4, 'compare/jwero-vs-zithara': 4, compare: 1 };
  const GUIDE_QUOTE = { guides: 1, 'guides/jewellery-billing-software': 0, 'guides/jewellery-erp-software': 0, 'guides/jewellery-inventory-software': 0, 'guides/jewellery-manufacturing-software': 1, 'guides/jewellery-crm-software': 4 };
  const PROD_QUOTE = { whatsapp: 2, 'instagram-facebook': 2, 'ai-sales-agents': 2, storefront: 3, catalog: 3, 'digital-catalogues': 3, marketplaces: 3, erp: 0, inventory: 0, pos: 0, 'billing-finance': 0, 'purchase-vendors': 0, manufacturing: 1, 'multi-store': 0, crm: 4, journeys: 1, loyalty: 1, segmentation: 1, 'gold-schemes': 4 };
  const k2 = slug.split('/')[1];
  const R = P.ROTATE, qi = slug.startsWith('solutions/') && SOL_QUOTE[k2] !== undefined ? SOL_QUOTE[k2] : slug.startsWith('products/') && PROD_QUOTE[k2] !== undefined ? PROD_QUOTE[k2] : slug.startsWith('roles/') && ROLE_QUOTE[k2] !== undefined ? ROLE_QUOTE[k2] : PLAT_QUOTE[slug] !== undefined ? PLAT_QUOTE[slug] : TOOL_QUOTE[slug] !== undefined ? TOOL_QUOTE[slug] : CMP_QUOTE[slug] !== undefined ? CMP_QUOTE[slug] : GUIDE_QUOTE[slug] !== undefined ? GUIDE_QUOTE[slug] : R[[...slug].reduce((n, c) => n + c.charCodeAt(0), 0) % R.length];
  let block;
  if (top === 'blog' || page.legacy) {
    // articles stay articles: one quiet line with both doors
    const [bq, tool, who] = POST_NEXT[postTopic(page)] || POST_NEXT['Technology and strategy'];
    const [q, by, where] = Q[bq];
    block = L3.section(`<figure class="pz-quote jb-solo"><blockquote>“${q}”</blockquote><figcaption><b>${by}</b><span>${where}</span></figcaption></figure>`) +
      L3.section(`<div class="jb-blogline"><p><b>Written for</b> ${who.map(([h, t]) => `<a href="${h}">${t}</a>`).join(' and ')}. <b>Check your own numbers:</b> <a href="${tool[0]}">see ${tool[1]}</a>, free and without sign-up.</p><p><b>Price:</b> the platform from ₹3,600 for the first month, or Jwero runs it for you with every tool included. <a href="/pricing">See the three ways →</a></p></div>`, { tone: 'tint' });
  } else if (top === 'roles' && slug !== 'roles' && !['roles/owner', 'roles/chain-owner', 'roles/franchise-partner', 'roles/next-gen-successor'].includes(slug)) {
    const [q, who, where] = Q[ROLE_QUOTE[slug.split('/')[1]] !== undefined ? ROLE_QUOTE[slug.split('/')[1]] : qi];
    block = L3.section(`<figure class="pz-quote jb-solo"><blockquote>“${q}”</blockquote><figcaption><b>${who}</b><span>${where}</span></figcaption></figure>`) +
      L3.section(`<div class="jb-blogline"><p><b>For your owner:</b> run it yourselves from ₹3,600 for the first month, or let Jwero’s team run it. <a href="/pricing">See the three ways</a></p><div class="cta-row"><a class="btn btn-primary" href="#" data-share="I think this would help us at the shop. Have a look:">Send this to your owner</a></div></div>`, { tone: 'tint', id: 'tiers' });
  } else if (slug === 'customers') {
    block = P.quotes() + L3.section(`<div class="gem-head"><h2>Proof you can check.</h2><p>Who uses it, what the product counts, what is published, and how to try it yourself.</p></div>${L3.proofGrid()}`) +
      L3.section(`${L3.sectionHead('THREE WAYS TO WORK WITH JWERO', 'Run it yourself, or let Jwero run it.', '')}${require('./content/jbaas').TIERS()}`, { tone: 'tint' });
  } else {
    const [q, who, where] = Q[qi];
    const head = slug === 'enterprise' ? ['WHERE ENTERPRISE SITS', 'Subscription, managed, or enterprise.', 'Chains and groups can run it themselves, hand functions to Jwero, or mix the two by function.']
      : top === 'compare' ? ['YOUR NEXT STEP', 'Try Jwero, or let Jwero run it.', 'Start on your own data for ₹3,600, or hand the work to Jwero’s specialists and AI with every tool included.']
      : ['PREFER JWERO TO RUN THIS FOR YOU?', 'Use it yourself, or let Jwero run it.', 'Everything on this page, run by Jwero’s specialists and AI. No team to hire, no tools to buy.'];
    block = (/city-quote/.test(body) ? '' : L3.section(`<figure class="pz-quote jb-solo"><blockquote>“${q}”</blockquote><figcaption><b>${who}</b><span>${where}</span></figcaption></figure>`)) +
      L3.section(`${L3.sectionHead(...head)}${require('./content/jbaas').TIERS()}`, { tone: 'tint', id: 'tiers' });
  }
  const at = body.lastIndexOf('<section');
  return at > 0 ? body.slice(0, at) + block + body.slice(at) : body + block;
}

// Solution pages: drop the sections that repeat what other parts of the page
// or site already say, move the managed offer to the middle, and use one set
// of button labels: start, let Jwero handle it, talk to us.
const SOLUTION_DROP = /<h2[^>]*>\s*(Small start|One plan\. Every module|Five things we hear|Related on Jwero)/;
const SOLUTION_WHO = { 'single-store': 'a single store', 'multi-store-chains': 'a chain of stores', 'franchise-networks': 'a franchise network', 'gold-retail': 'a gold jewellery shop', 'diamond-retail': 'a diamond showroom', 'silver-retail': 'a silver jewellery shop', 'gemstone-retail': 'a gemstone store', bridal: 'a bridal jewellery store', 'luxury-boutique': 'a luxury boutique', 'lab-grown-diamond': 'a lab-grown diamond business', 'jewellery-brands': 'a jewellery brand', 'd2c-brands': 'an online jewellery brand', startups: 'a new jewellery business', 'gold-wholesale': 'a gold wholesale business', 'diamond-wholesale': 'a diamond wholesale business', 'diamond-traders': 'a diamond trading business', 'bullion-gold-traders': 'a bullion business', 'b2b-jewellery': 'a B2B jewellery business', 'export-houses': 'an export house', manufacturers: 'a jewellery manufacturing unit', 'oem-manufacturers': 'an OEM manufacturing unit', 'casting-units': 'a casting unit', 'cad-services': 'a CAD studio' };
const OWNER_ROLES = new Set(['roles/owner', 'roles/chain-owner', 'roles/franchise-partner', 'roles/next-gen-successor']);
function trimSolution(html, slug) {
  if (slug === 'platform' || slug.startsWith('platform/') || slug === 'tools' || slug.startsWith('tools/') || ['jewellery-accounting-software','jewellery-barcode-tagging-software','cloud-jewellery-software','whatsapp-broadcast-for-jewellers','instagram-for-jewellers','ads-for-jewellers','sms-marketing-for-jewellers','jewellery-showroom-footfall-counting','ai-calling-for-jewellers','jewellery-appointment-booking-software','jewellery-staff-management-software','jewellery-website-analytics'].includes(slug)) {
    let kept = html.split(/(?=<section[\s>])/).filter((c) => !(slug === 'platform' && /<h2[^>]*>\s*(What five disconnected tools cost|What changes across the whole jewellery business)/.test(c.slice(0, 2500))));
    const more = kept.findIndex((c) => /^<section class="section tool-qa/.test(c));
    const own = kept.findIndex((c, k) => k !== more && k > 0 && /<details/.test(c) && !/class="(pass|cta-band)/.test(c.slice(0, 80)));
    if (more >= 0 && own >= 0) { const items = (kept[more].match(/<details[\s\S]*<\/details>/) || [''])[0]; kept[own] = kept[own].replace(/(<\/details>)(?![\s\S]*<\/details>)/, '$1' + items); kept.splice(more, 1); }
    let seen = 0;
    return kept.join('').replace(/(<a class="btn[^"]*"(?![^>]*data-share)(?![^>]*data-trial)(?![^>]*data-wa="handle")[^>]*(?:data-wa="[^"]*"|href="\/book-demo")[^>]*>)\s*(Talk to us|Chat or call with us|Book a demo)\s*(<\/a>)/g, (m0, a1, t, z) => /cta-band/.test(a1) ? m0 : (++seen === 1 && !/hero/.test(a1)) ? a1 + 'Talk to us' + z : '');
  }
  if (slug.startsWith('roles/')) {
    let kept = html.split(/(?=<section[\s>])/).filter((c) => !/<h2[^>]*>\s*(One plan\. Every module|Five things)/.test(c.slice(0, 1500)));
    // one question block
    const more = kept.findIndex((c) => /^<section class="section tool-qa/.test(c));
    const own = kept.findIndex((c, k) => k !== more && k > 0 && /<details/.test(c) && !/class="(pass|cta-band)/.test(c.slice(0, 80)));
    if (more >= 0 && own >= 0) { const items = (kept[more].match(/<details[\s\S]*<\/details>/) || [''])[0]; kept[own] = kept[own].replace(/(<\/details>)(?![\s\S]*<\/details>)/, '$1' + items); kept.splice(more, 1); }
    // staff read these pages; the action that helps is getting it to the owner
    if (!OWNER_ROLES.has(slug)) {
      const ask = `<section class="section"><div class="container"><aside class="post-mid"><p>Think this would make your work easier? Send this page to your owner. For the owner: from ₹3,600 for the first month, or Jwero’s team runs it.</p><div class="cta-row"><a class="btn btn-primary btn-sm" href="#" data-share="I think this would help us at the shop. Have a look:">Send this to your owner</a></div></aside></div></section>`;
      const day = kept.findIndex((c) => /Four moments from your working day/.test(c.slice(0, 2500)));
      if (day >= 0) kept.splice(day + 1, 0, ask);
    }
    let seen = 0;
    return kept.join('')
      .replace(/(<a class="btn[^"]*"(?![^>]*data-share)(?![^>]*data-trial)(?![^>]*data-wa="handle")[^>]*(?:data-wa="[^"]*"|href="\/book-demo")[^>]*>)\s*(Talk to us|Chat or call with us|Book a demo)\s*(<\/a>)/g, (m0, a1, t, z) => (++seen === 1 || /cta-band/.test(a1)) ? a1 + 'Talk to us' + z : '')
      .replace(/Know another jeweller who runs a [^?<]*\?/, 'Know a jeweller who should see this?').replace(/(software page for )a [^:"]* like ours/, '$1a jewellery business like ours');
  }
  if (!slug.startsWith('solutions/')) return html;
  const who = SOLUTION_WHO[slug.split('/')[1]];
  if (who) html = html.replace(/(Know another jeweller who runs )a [^?<]*\?/, `$1${who}?`).replace(/(software page for )a [^:"]* like ours/, `$1${who} like ours`);
  const parts = html.split(/(?=<section[\s>])/);
  // drop repeats, and the before-and-after story (the opening answer covers it)
  let kept = parts.filter((c) => !SOLUTION_DROP.test(c.slice(0, 1500)) && !/^<section class="shift/.test(c));
  const take = (test) => { const k = kept.findIndex(test); return k < 0 ? [] : kept.splice(k, 1); };
  // value first: use cases straight after the opening answer
  const uc = take((c) => /Where this pays off/.test(c.slice(0, 2500)));
  const short = kept.findIndex((c) => /^<section class="in-short/.test(c));
  if (uc.length) kept.splice(short >= 0 ? short + 1 : 1, 0, ...uc);
  // price later: the quote and the tiers just before the questions
  const tiers = take((c) => /PREFER JWERO TO RUN THIS FOR YOU\?/.test(c.slice(0, 2500)));
  const quote = take((c) => /jb-solo/.test(c.slice(0, 400)));
  const qa = kept.findIndex((c) => /class="faq|<h2[^>]*>\s*(What [^<]* ask|More questions)/.test(c.slice(0, 3000)));
  const at = qa > 0 ? qa : Math.max(1, kept.length - 3);
  kept.splice(at, 0, ...quote, ...tiers);
  // one question block: fold "More questions jewellers ask" into the page's own
  const more = kept.findIndex((c) => /^<section class="section tool-qa/.test(c));
  const own = kept.findIndex((c, k) => k !== more && /<h2[^>]*>\s*What [^<]* ask/.test(c.slice(0, 3000)));
  if (more >= 0 && own >= 0) {
    const items = (kept[more].match(/<details[\s\S]*<\/details>/) || [''])[0];
    kept[own] = kept[own].replace(/(<\/details>)(?![\s\S]*<\/details>)/, '$1' + items);
    kept.splice(more, 1);
  }
  // fewer generic buttons: keep the hero's "Talk to us", turn the rest into a start
  let seen = 0;
  kept = kept.map((c, k) => k === 0 ? c : c.replace(/<a class="btn btn-ghost" href="\/start">Create your workspace<\/a>/g, `<a class="btn btn-ghost" href="${require('./lib').TRIAL_URL}solution-sim" rel="noopener" data-trial>Start for ₹3,600</a>`));
  html = kept.join('').replace(/(<a class="btn[^"]*"(?![^>]*data-share)(?![^>]*data-trial)(?![^>]*data-wa="handle")[^>]*(?:data-wa="[^"]*"|href="\/book-demo")[^>]*>)[\s\S]*?(<\/a>)/g, (m0, a, z) => (++seen === 1 || /cta-band/.test(a)) ? a + 'Talk to us' + z : '');
  kept = [html];
  return kept.join('')
    .replace(/(<a class="btn[^"]*"[^>]*data-trial[^>]*>)[\s\S]*?(<\/a>)/g, '$1Start for ₹3,600$2')
    .replace(/(<a class="btn[^"]*"[^>]*data-wa="handle"[^>]*>)[\s\S]*?(<\/a>)/g, '$1Let Jwero handle it$2')
    .replace(/(<a class="btn[^"]*"(?![^>]*data-share)(?![^>]*data-trial)(?![^>]*data-wa="handle")[^>]*(?:data-wa="[^"]*"|href="\/book-demo")[^>]*>)[\s\S]*?(<\/a>)/g, '$1Talk to us$2');
}

// Both doors on the first screen of every buying page: a slim strip right
// under the page's top section.
const LEGACY_SLUGS = new Set(require('./content/legacy-posts.json').posts.map((p) => p.slug));
const DOORS_SKIP = ['index', '404', 'search', 'contact', 'book-demo', 'glossary', 'roadmap', 'start', 'legal', 'hi', 'partners', 'company', 'blog', 'jewellery-business-as-a-service'];
// The business-type pages the header picker opens: built like the home page,
// in that business's words, with the home page's hooks kept in.
const ICP_HOME = {
  'solutions/single-store': ['single', 'Jwero for single-store jewellers', 'How many tools does one showroom run today?'],
  'solutions/multi-store-chains': ['chain', 'Jwero for multi-store chains', 'How many tools do your branches run today?'],
  'solutions/franchise-networks': ['franchise', 'Jwero for franchise networks', 'How many tools does your network run today?'],
  'solutions/manufacturers': ['maker', 'Jwero for manufacturers', 'How many tools does your workshop run today?'],
  'solutions/b2b-jewellery': ['b2b', 'Jwero for wholesalers', 'How many tools does your trade desk run today?'],
  'solutions/diamond-traders': ['trader', 'Jwero for diamond traders', 'How many tools does your trading desk run today?'],
  'solutions/d2c-brands': ['d2c', 'Jwero for online jewellery brands', 'How many tools does your brand run today?'],
};
const ICP_PRESET = {
  single: [['WhatsApp API', 'Billing software', 'POS counter', 'Barcode & tagging', 'Gold rate updates', 'Inventory software', 'CRM', 'Gold scheme register', 'Tally integration', 'Social media scheduler', 'Google Business reviews', 'Attendance register'], ['CUSTOMERS', 'SHOWROOM', 'BILLING', 'STOCK', 'ACCOUNTS', 'TEAM', 'PURCHASE', 'DECISIONS', 'WORKSHOP'], 'a single showroom'],
  chain: [['ERP', 'Inventory software', 'Vendor portal', 'Branch report calls', 'MIS reports', 'Google Sheets', 'HR', 'Payroll software', 'Incentive sheet', 'Task management', 'CRM', 'WhatsApp API', 'Tally integration', 'Gold rate updates', 'Barcode & tagging'], ['DECISIONS', 'STOCK', 'TEAM', 'CUSTOMERS', 'BILLING', 'SHOWROOM', 'PURCHASE', 'ACCOUNTS', 'WORKSHOP'], 'a multi-store chain'],
  franchise: [['Franchise management', 'ERP', 'Branch report calls', 'MIS reports', 'Inventory software', 'CRM', 'WhatsApp API', 'Pricing engine', 'Gold rate updates', 'Tally integration', 'LMS', 'Task management'], ['DECISIONS', 'STOCK', 'TEAM', 'CUSTOMERS', 'BILLING', 'SHOWROOM', 'PURCHASE', 'ACCOUNTS', 'WORKSHOP'], 'a franchise network'],
  maker: [['ERP', 'Karigar portal', 'Hallmark tracker', 'Inventory software', 'Vendor portal', 'Gold rate updates', 'Estimate pad', 'Quotation maker', 'Tally integration', 'Google Sheets', 'Attendance register', 'Payroll software', 'WhatsApp API'], ['WORKSHOP', 'STOCK', 'PURCHASE', 'ACCOUNTS', 'TEAM', 'DECISIONS', 'BILLING', 'CUSTOMERS', 'SHOWROOM'], 'a manufacturer'],
  b2b: [['Shareable live catalogues', 'Quotation maker', 'WhatsApp API', 'ERP', 'Inventory software', 'Vendor portal', 'Gold rate updates', 'Pricing engine', 'Payment reminders', 'Tally integration', 'Google Sheets', 'CRM'], ['STOCK', 'PURCHASE', 'CUSTOMERS', 'BILLING', 'ACCOUNTS', 'DECISIONS', 'WORKSHOP', 'TEAM', 'SHOWROOM'], 'a wholesaler'],
  trader: [['Shareable live catalogues', 'Quotation maker', 'WhatsApp API', 'Inventory software', 'Pricing engine', 'Payment reminders', 'Tally integration', 'Google Sheets', 'CRM', 'Video call app'], ['STOCK', 'CUSTOMERS', 'PURCHASE', 'ACCOUNTS', 'BILLING', 'DECISIONS', 'TEAM', 'WORKSHOP', 'SHOWROOM'], 'a diamond trader'],
  d2c: [['Ecommerce website', 'Shopify integration', 'Marketplace seller panels', 'Google Shopping', 'Meta Ads', 'Google Ads', 'Social media scheduler', 'Email marketing tool', 'WhatsApp API', 'DMs', 'CRM', 'Inventory software', 'Website heatmaps', 'Coupons management'], ['CUSTOMERS', 'STOCK', 'BILLING', 'DECISIONS', 'PURCHASE', 'TEAM', 'ACCOUNTS', 'SHOWROOM', 'WORKSHOP'], 'an online brand'],
};
// The tools each kind of business actually runs, so Count your tools lists theirs, not all of them.
const ICP_TOOLS = (() => {
  const core = ['WhatsApp API', 'Business email', 'Calendar', 'Google Sheets', 'Tally integration', 'Zoho integration', 'Payment reminders', 'Task management', 'Team chat app', 'Attendance register', 'Payroll software', 'MIS reports', 'Automation rules', 'AI agents'];
  const shop = ['ERP', 'Billing software', 'POS counter', 'Barcode & tagging', 'Gold rate updates', 'Old gold management', 'Pricing engine', 'Estimate pad', 'Inventory software', 'Inventory intelligence', 'Hallmark tracker', 'Repairs management'];
  const crm = ['CRM', 'Loyalty cards', 'Gold scheme register', 'Girvi register', 'Digital gold app', 'Occasion diary', 'Appointment diary', 'Walk-in register', 'Customer segmentation', 'Customer journeys', 'Autonomous customer follow-ups', 'AI inbound calling', 'AI outbound calling campaigns'];
  const social = ['DMs', 'Facebook page inbox', 'Social media scheduler', 'Google Business reviews', 'Broadcasts', 'Campaigns', 'SMS', 'Meta Ads', 'Google Ads', 'Reels', 'Stories', 'Social media post creator', 'AI content creation', 'Coupons management', 'Shareable live catalogues', 'Video call app'];
  const team = ['HR', 'Incentive sheet', 'LMS', 'Recruitment management'];
  const multi = ['Branch report calls', 'Vendor portal', 'CCTV tracking', 'Call tracking tool', 'Website live chat', 'Ecommerce website', 'Marketing automation', 'RFM', 'Customer personalisation engine'];
  return {
    single: [...core, ...shop, ...crm, ...social, 'Website live chat', 'Ecommerce website'],
    chain: [...core, ...shop, ...crm, ...social, ...team, ...multi],
    franchise: [...core, ...shop, ...crm, ...social, ...team, ...multi, 'Franchise management'],
    maker: [...core, 'ERP', 'Billing software', 'Barcode & tagging', 'Gold rate updates', 'Pricing engine', 'Estimate pad', 'Inventory software', 'Inventory intelligence', 'Vendor portal', 'Hallmark tracker', 'Karigar portal', 'Repairs management', 'Quotation maker', 'Shareable live catalogues', 'Document viewer', 'Forms', 'Video call app', 'Meetings', 'CRM', ...team, 'Branch report calls', 'Call tracking tool', 'Webhooks & APIs'],
    b2b: [...core, 'ERP', 'Billing software', 'Barcode & tagging', 'Gold rate updates', 'Pricing engine', 'Estimate pad', 'Inventory software', 'Inventory intelligence', 'Vendor portal', 'Hallmark tracker', 'Quotation maker', 'Shareable live catalogues', 'Document viewer', 'Video call app', 'Meetings', 'Broadcasts', 'CRM', 'Lead finder', 'Customer segmentation', 'Autonomous customer follow-ups', 'Marketplace seller panels', 'Ecommerce website', 'Call tracking tool', 'Incentive sheet', 'Webhooks & APIs'],
    trader: [...core, 'Billing software', 'Inventory software', 'Inventory intelligence', 'Pricing engine', 'Estimate pad', 'Vendor portal', 'Quotation maker', 'Shareable live catalogues', 'Document viewer', 'Video call app', 'Meetings', 'Broadcasts', 'CRM', 'Lead finder', 'Customer segmentation', 'Autonomous customer follow-ups', 'Marketplace seller panels', 'Call tracking tool', 'Webhooks & APIs'],
    d2c: [...core, 'Ecommerce website', 'Shopify integration', 'WooCommerce integration', 'Marketplace seller panels', 'Google Shopping', 'Website live chat', 'Forms', 'Inventory software', 'Pricing engine', 'Gold rate updates', 'Billing software', ...crm.filter((t) => !/Girvi|Walk-in/.test(t)), ...social, 'Email marketing tool', 'Push notifications', 'RCS', 'Pinterest', 'YouTube', 'Website heatmaps', 'Visitor tracking', 'Google Tag Manager', 'Pixels', 'A/B testing', 'Comments management', 'ChatGPT Ads', 'Ads creator', 'AI image generation', 'Asset library', 'Marketing automation', 'RFM', 'Customer personalisation engine', 'Lead finder', 'MCP tools', 'Webhooks & APIs'],
  };
})();
const ICP_MORE = {
  'gold-retail': ['single', 'gold retailers', 'a gold showroom'], 'silver-retail': ['single', 'silver retailers', 'a silver showroom'], 'diamond-retail': ['single', 'diamond retailers', 'a diamond showroom'],
  'gemstone-retail': ['single', 'gemstone retailers', 'a gemstone showroom'], 'lab-grown-diamond': ['single', 'lab-grown diamond jewellers', 'a lab-grown showroom'], bridal: ['single', 'bridal jewellers', 'a bridal showroom'],
  'luxury-boutique': ['single', 'luxury boutiques', 'a luxury boutique'], startups: ['single', 'new jewellery businesses', 'a new jewellery business'],
  'cad-services': ['maker', 'CAD studios', 'a CAD studio'], 'casting-units': ['maker', 'casting units', 'a casting unit'], 'oem-manufacturers': ['maker', 'OEM manufacturers', 'an OEM manufacturer'], 'export-houses': ['maker', 'export houses', 'an export house'],
  'bullion-gold-traders': ['b2b', 'bullion traders', 'a bullion desk'], 'gold-wholesale': ['b2b', 'gold wholesalers', 'a gold wholesaler'], 'diamond-wholesale': ['b2b', 'diamond wholesalers', 'a diamond wholesaler'],
  'jewellery-brands': ['d2c', 'jewellery brands', 'a jewellery brand'],
};
for (const [k, [base, who, one]] of Object.entries(ICP_MORE)) ICP_HOME['solutions/' + k] = [base, 'Jwero for ' + who, `How many tools does ${one} run today?`, one];
function withIcpHome(html, slug) {
  const cfg = ICP_HOME[slug]; if (!cfg) return html;
  const L4 = require('./lib');
  const hs = html.indexOf('<section class="hero"'); if (hs < 0) return html;
  const he = html.indexOf('</section>', hs) + 10;
  const old = html.slice(hs, he);
  const h1 = ((old.match(/<h1[^>]*>([\s\S]*?)<\/h1>/) || [])[1] || '').trim();
  const sub = ((old.match(/<p class="sub">([\s\S]*?)<\/p>/) || [])[1] || '').trim();
  const hero = L4.homeHero({ kicker: cfg[1], h1, sub }).replace(/home-hero/g, 'icp-' + cfg[0]).replace('data-wa="handle"', `data-wa="handle-${cfg[0]}"`).replace('href="#jbaas"', 'href="#tiers"')
    + `<section class="pz-logos">${L4.customerLogos()}</section>`;
  html = html.slice(0, hs) + hero + html.slice(he);
  // the bangle link in the hero lands on this page's own bangle section
  html = html.replace(/(<section class="section[^"]*"[^>]*>)(\s*<div class="container">[\s\S]{0,400}?on one bangle)/, '<span id="one-record"></span>$1$2');
  // Count your tools and the department comparison, before the price
  const pre = ICP_PRESET[cfg[0]];
  const rows = pre ? pre[1].map((k) => L4.DEPARTMENTS.find((d) => d.lever === k)).filter(Boolean) : L4.DEPARTMENTS;
  const hooks = L4.section(`<span id="count-yours"></span>${L4.sectionHead('COUNT YOUR TOOLS', cfg[2], pre ? `We have ticked what ${cfg[3] || pre[2]} usually runs. Tap to change it to match yours, or <a href="#" data-stackm-clear-link>clear and pick your own</a>.` : 'Tap the ones you run today and watch what they cost you.')}${L4.stackMerge(ICP_TOOLS[cfg[0]] && [...new Set([...ICP_TOOLS[cfg[0]], ...(pre ? pre[0] : [])])]).replace('<div class="stackm" data-stackm', `<div class="stackm" data-stackm-preset="${pre ? pre[0].join('|').replace(/&/g, '&amp;') : ''}" data-stackm`)}<p class="jb-more">Tools are half of it. <a href="/count-your-team">Count your team too →</a></p>`, { tone: 'tint' })
    + L4.section(`${L4.sectionHead('FROM FIFTY LOGINS TO ONE RECORD', 'What changes across the whole business.', 'The counter, the stock room, the vendor, the workshop, the books and the team run on the same record, so each one knows what the others did.')}${L4.compareRows(rows)}`);
  const security = L4.section(`<div class="gem-head"><h2>Security and privacy delivered, just as you want.</h2></div>${L4.trustStrip()}`, { tone: 'tint' });
  const ti = html.indexOf('id="tiers"');
  if (ti > 0) { const ts = html.lastIndexOf('<section', ti); const te = html.indexOf('</section>', ti) + 10; html = html.slice(0, ts) + hooks + html.slice(ts, te) + security + html.slice(te); }
  // trim to about a dozen sections, in the home page's order
  const secs = () => { const out = []; const re = /<section[\s>]/g; let m; while ((m = re.exec(html))) { const e = html.indexOf('</section>', m.index) + 10; out.push([m.index, e, html.slice(m.index, e)]); } return out; };
  const drop = (test) => { for (const [a, b, t] of secs().reverse()) if (test(t)) html = html.slice(0, a) + html.slice(b); };
  drop((t) => /on one bangle\.<\/h2>|you’d switch on first\.|What this could be worth|kinds of customer signal|Fifteen named jewellers|Three steps\. No mystery\./.test(t));
  html = html.replace(/<span id="one-record"><\/span>/, '').replace(/<a class="hero-piece-link"[^>]*>[\s\S]*?<\/a>/, '');
  // security as one line
  html = html.replace(/<section class="section section-tint">\s*<div class="container">\s*<div class="gem-head"><h2>Security and privacy delivered, just as you want\.<\/h2><\/div>[\s\S]*?<\/section>/, L4.section(`<p class="cta-note" style="text-align:center">Security and privacy delivered, just as you want. <a href="/trust/security">See how your data is protected →</a></p>`));
  // one question block
  const fs2 = secs().filter(([, , t]) => /class="faq"/.test(t));
  if (fs2.length > 1 && fs2.slice(1).every(([, , t]) => /class="section tool-qa"/.test(t))) {
    const extra = fs2.slice(1).map(([, , t]) => (t.match(/<details[\s\S]*?<\/details>/g) || []).join('')).join('');
    for (const [a, b] of fs2.slice(1).reverse()) html = html.slice(0, a) + html.slice(b);
    const f = html.indexOf('<div class="faq">'); const fe = html.lastIndexOf('</details>', html.indexOf('</section>', f)) + 10;
    html = html.slice(0, fe) + extra + html.slice(fe);
  }
  // three matched quotes in place of the single one
  const QI = { single: [0, 1, 2], chain: [4, 1, 0], franchise: [4, 0, 1], maker: [1, 0, 6], b2b: [1, 5, 0], trader: [1, 5, 2], d2c: [3, 2, 7] }[cfg[0]] || [0, 1, 2];
  const qs = secs().find(([, , t]) => /<figure class="pz-quote jb-solo">/.test(t) && !/<h2/.test(t));
  if (qs) html = html.slice(0, qs[0]) + require('./content/positioning').quotesOf(QI) + html.slice(qs[1]);
  // twelve sections: top, logos, answer, where it pays, try it, one page of their own, quotes,
  // count your tools, today vs with Jwero, price, questions, close
  const all = secs();
  const at = (re) => all.findIndex(([, , t]) => re.test(t));
  const iSim = at(/sim-section/), iQuotes = at(/Jewellers on working with Jwero\./), iTiers = at(/id="tiers"/), iBand = at(/class="cta-band"/);
  const iFaq = all.findIndex(([, , t], k) => k > iTiers && /class="faq"/.test(t));
  if (iSim < 0 || iQuotes < 0 || iTiers < 0 || iBand < 0) return html;
  const keep = new Set();
  all.forEach(([, , t], k) => { if (k <= iSim || (k >= iQuotes && k <= iTiers) || k === iFaq || k === iBand) keep.add(k); });
  const own = all.findIndex(([, , t], k) => k > iSim && k < iQuotes && !/A week in your business/.test(t));
  if (own > 0) keep.add(own);
  const moreQ = all.filter(([, , t], k) => k > iTiers && k !== iFaq && /<details/.test(t)).map(([, , t]) => (t.match(/<details[\s\S]*?<\/details>/g) || []).join('')).join('');
  // the blog links and the security line ride along under the questions
  const blog = all.find(([, , t]) => /Read more on this\./.test(t));
  const extra = `<p class="cta-note" style="margin-top:14px">Security and privacy delivered, just as you want: <a href="/trust/security">see how your data is protected</a>.${blog ? ' Read more: ' + [...blog[2].matchAll(/<a href="(\/[^"]+)"><b>([^<]+)<\/b>/g)].slice(0, 3).map((x) => `<a href="${x[1]}">${x[2]}</a>`).join(' · ') : ''}</p>`;
  for (let k = all.length - 1; k >= 0; k--) {
    const [a, b, t] = all[k];
    if (!keep.has(k)) html = html.slice(0, a) + html.slice(b);
    else if (k === iFaq) { const end = t.lastIndexOf('</div>', t.lastIndexOf('</section>')); const dl = t.lastIndexOf('</details>') + 10; const t2 = t.slice(0, dl) + moreQ + t.slice(dl); const end2 = t2.lastIndexOf('</div>', t2.lastIndexOf('</section>')); html = html.slice(0, a) + t2.slice(0, end2) + extra + t2.slice(end2) + html.slice(b); }
  }
  // the opening answer as one compact line: the top panel already says it at length
  html = html.replace(/<section class="in-short"[^>]*>\s*<div class="container">\s*<p class="in-short-tag">In short<\/p>\s*<h2 id="in-short-q">([\s\S]*?)<\/h2>\s*<p>([\s\S]*?)<\/p>\s*<\/div>\s*<\/section>/, (m0, q, ans) => `<div class="in-short-line"><div class="container"><p><b id="in-short-q">${q}</b> ${ans}</p></div></div>`);
  return html;
}

function withDoors(html, slug) {
  if (DOORS_SKIP.includes((slug || '').split('/')[0]) || LEGACY_SLUGS.has(slug)) return html;
  const end = html.indexOf('</section>');
  if (end < 0) return html;
  const strip = `<div class="doors-strip"><div class="container"><p>Two ways to work with Jwero</p><a class="ds-door" href="${require('./lib').TRIAL_URL}doors-strip" rel="noopener" data-trial><span>Run it yourself</span><b>Start for ₹3,600</b></a><a class="ds-door is-managed" href="#" data-wa="handle"><span>Let Jwero run it</span><b>Let Jwero handle it</b></a><a class="ds-more" href="/pricing">Compare →</a></div></div>`;
  // product and solution pages: inside the top section, under the buttons and above the illustration
  if (/^(products|solutions)(\/|$)/.test(slug || '')) {
    const mock = html.lastIndexOf('<div class="container"><div class="stage hero-mock">', end);
    const inHero = strip.replace('class="doors-strip"', 'class="doors-strip is-in-hero"');
    if (mock > 0) return html.slice(0, mock) + inHero + html.slice(mock);
    return html.slice(0, end) + inHero + html.slice(end);
  }
  return html.slice(0, end + 10) + strip + html.slice(end + 10);
}

// Product pages: four real situations where the product pays off, taken from
// the product's own documentation (content/usecases.json), right after the
// opening answer.
function withUseCases(body, page) {
  const m = page.slug === 'platform' ? [null, 'platform', 'platform'] : /^(products|solutions|roles|platform)\/([^/]+)$/.exec(page.slug || '');
  const uc = m && (m[1] === 'platform' ? PLATFORM_UC[m[2]] : m[1] === 'products' ? USECASES[m[2]] : m[1] === 'roles' ? (ROLES[m[2]] || {}).usecases : (SEGMENTS[m[2]] || {}).usecases);
  if (!uc || !uc.length) return body;
  const name = (page.title || '').split(/[:|]/)[0].replace(/^Jwero\s+/, '').trim() || 'This';
  const block = L3.section(`${m[1] === 'roles' ? L3.sectionHead('YOUR DAY', 'Four moments from your working day.', 'What Jwero does in each, and what is different for you.') : L3.sectionHead('USE CASES', 'Where this pays off in a jewellery business.', 'Four everyday situations, and what changes when Jwero handles them.')}
<div class="uc-grid">${uc.slice(0, 4).map((u, i) => `<article class="uc-card"><span class="uc-n">${String(i + 1).padStart(2, '0')}</span><h3>${u.hook}</h3><p>${u.does}</p><p class="uc-change"><b>What changes</b>${u.changes}</p></article>`).join('')}</div>`, { tone: 'tint' });
  const shortAt = body.indexOf('class="in-short');
  const after = shortAt !== -1 ? body.indexOf('</section>', shortAt) + 10 : body.indexOf('</section>') + 10;
  return body.slice(0, after) + block + body.slice(after);
}

const PLATFORM_LINKS = {
  'platform/ai-workforce': [['/products/ai-sales-agents', 'AI sales agents'], ['/products/whatsapp', 'WhatsApp'], ['/products/journeys', 'Customer journeys'], ['/products/campaigns', 'Campaigns']],
  'platform/customer-memory': [['/products/crm', 'CRM'], ['/products/segmentation', 'Segmentation'], ['/products/loyalty', 'Loyalty'], ['/products/journeys', 'Customer journeys']],
  'platform/pricing-engine': [['/products/catalog', 'Catalogue'], ['/products/pos', 'Counter POS'], ['/products/quotations', 'Quotations'], ['/products/digital-catalogues', 'Digital catalogues']],
  'platform/integrations': [['/products/billing-finance', 'Billing and accounts'], ['/products/marketplaces', 'Marketplaces'], ['/products/storefront', 'Online store'], ['/products/whatsapp', 'WhatsApp']],
  'platform/integrations/tally': [['/products/billing-finance', 'Billing and accounts'], ['/products/erp', 'ERP'], ['/jewellery-accounting-software', 'Accounting'], ['/products/reports', 'Reports']],
  'platform/onboarding': [['/count-your-team', 'Count your team'], ['/pricing', 'Pricing'], ['/products', 'All products'], ['/jewellery-business-as-a-service', 'Let Jwero run it']],
};
function withPlatformLinks(body, page) {
  const L4 = PLATFORM_LINKS[page.slug];
  if (!L4) return body;
  const block = L3.section(`${L3.sectionHead('WHAT THIS POWERS', 'Where you will see it in Jwero.', '')}<div class="erp-map">${L4.map(([h, t]) => `<a href="${h}"><b>${t}</b><span>${h.replace(/^\//, 'jwero.ai/')}</span></a>`).join('')}</div>`);
  const at = body.lastIndexOf('<section');
  return at > 0 ? body.slice(0, at) + block + body.slice(at) : body + block;
}

// Blog posts: a short answer and a contents list at the top, so readers and
// answer engines get the point before the detail.
const LEGACY = require('./content/legacy-posts.json').posts;
function postTopic(page) {
  const lp = page.legacy ? LEGACY.find((x) => x.slug === page.slug) : null;
  if (/loss|karigar|manufactur/.test(page.slug || '') && !lp) return 'Order management';
  return /scheme/.test(page.slug || '') ? 'Gold schemes' : lp ? lp.topic : (/scheme|gold-rate|huid|tally|loss|repair|cost|software|checklist|erp|crm/.test(page.slug) ? (/crm/.test(page.slug) ? 'CRM and customers' : /whatsapp/.test(page.slug) ? 'WhatsApp' : 'Inventory, POS and ERP') : /whatsapp/.test(page.slug) ? 'WhatsApp' : /catalog|online|wedding|dead-stock/.test(page.slug) ? 'Retail operations and sales' : 'Technology and strategy');
}
// What each article topic leads to: a matched quote, a calculator, who it is for, and two questions.
const POST_NEXT = {
  'Leads and conversion': [2, ['/tools/whatsapp-revenue-estimator', 'what missed enquiries cost you'], [['/solutions/pain/lead-leakage', 'shops losing enquiries'], ['/roles/sales-associate', 'sales staff']]],
  WhatsApp: [2, ['/tools/whatsapp-revenue-estimator', 'what slow WhatsApp replies cost you'], [['/solutions/single-store', 'single showrooms'], ['/roles/crm-executive', 'CRM executives']]],
  AI: [2, ['/tools/whatsapp-revenue-estimator', 'what unanswered enquiries cost you'], [['/solutions/multi-store-chains', 'chains'], ['/roles/owner', 'owners']]],
  'Marketing and campaigns': [3, ['/tools/whatsapp-revenue-estimator', 'what your enquiries are worth'], [['/solutions/jewellery-brands', 'jewellery brands'], ['/roles/marketing-manager', 'marketing managers']]],
  'Ecommerce and websites': [3, ['/tools/whatsapp-revenue-estimator', 'what your online enquiries are worth'], [['/solutions/d2c-brands', 'online brands'], ['/roles/ecommerce-manager', 'ecommerce managers']]],
  'Product data and catalogues': [3, ['/tools/dead-stock-calculator', 'what unlisted stock costs you'], [['/solutions/b2b-jewellery', 'wholesalers'], ['/roles/ecommerce-manager', 'ecommerce managers']]],
  'CRM and customers': [1, ['/tools/gold-scheme-calculator', 'what a savings scheme is worth to you'], [['/solutions/gold-retail', 'gold retailers'], ['/roles/crm-executive', 'CRM executives']]],
  'Gold schemes': [1, ['/tools/gold-scheme-calculator', 'what your scheme enrolment is worth'], [['/solutions/gold-retail', 'gold retailers'], ['/roles/owner', 'owners']]],
  'Inventory, POS and ERP': [0, ['/tools/dead-stock-calculator', 'what idle stock costs you'], [['/solutions/gold-retail', 'gold retailers'], ['/roles/inventory-manager', 'inventory managers']]],
  'Retail operations and sales': [0, ['/tools/dead-stock-calculator', 'what idle stock costs you'], [['/solutions/single-store', 'single showrooms'], ['/roles/store-manager', 'store managers']]],
  'Order management': [0, ['/tools/gold-loss-calculator', 'what production loss costs you'], [['/solutions/manufacturers', 'manufacturers'], ['/roles/production-manager', 'production managers']]],
  'Technology and strategy': [1, ['/tools', 'where your shop is losing money'], [['/solutions', 'every kind of jeweller'], ['/roles/owner', 'owners']]],
};
const TOPIC_FAQ = (t) => [
  { q: `Does Jwero handle ${t === 'Technology and strategy' ? 'this' : t.toLowerCase().replace('ai', 'AI').replace('pos', 'POS').replace('erp', 'ERP').replace('crm', 'CRM').replace('whatsapp', 'WhatsApp')} for jewellers?`, a: 'Yes. You can run it yourself on the platform from ₹3,600 for the first month, or let Jwero’s specialists and AI run it for you, with every tool included.' },
  { q: 'How fast can a jeweller start?', a: 'Onboarding takes a day for most shops. Jwero sets up your stock, rates and customers with you, and a real person replies on WhatsApp within minutes.' },
];

function withBlogTop(body, page) {
  if (!/^(blog|guides)\/./.test(page.slug || '') && !page.legacy) return body;
  const pb = body.indexOf('<div class="post-body">'); if (pb < 0) return body;
  let n = 0; const heads = [];
  const pe = body.indexOf('</section>', pb);
  const withIds = body.slice(pb, pe).replace(/<h2>([\s\S]*?)<\/h2>/g, (m0, t) => { const id = 'p' + (++n); heads.push([id, t.replace(/<[^>]+>/g, '')]); return `<h2 id="${id}">${t}</h2>`; });
  const q = ((page.schema && page.schema.headline) || page.title || '').split('|')[0].trim();
  const box = `<div class="post-top"><div class="post-short"><p class="in-short-tag">In short</p><p>${page.description}</p></div>${heads.length > 2 ? `<nav class="post-toc" aria-label="Contents"><p class="in-short-tag">In this guide</p><ol>${heads.map(([id, t]) => `<li><a href="#${id}">${t}</a></li>`).join('')}</ol></nav>` : ''}</div>`;
  // One line after the second section, matched to the article's topic, with both paths.
  const MID = {
    'Leads and conversion': 'Want every enquiry captured and followed up without your team chasing it? Jwero does it for you.',
    'Product data and catalogues': 'Want your catalogue kept complete and priced at the live rate on every channel? Jwero runs it for you.',
    'CRM and customers': 'Want every customer remembered and reached at the right moment? Jwero runs it for you.',
    WhatsApp: 'Want every WhatsApp enquiry answered and followed up, day and night? Jwero does it for you.',
    AI: 'Want AI doing the routine work, with a person approving what matters? Jwero runs it for you.',
    'Order management': 'Want every order tracked from enquiry to delivery? Jwero runs it for you.',
    'Marketing and campaigns': 'Want campaigns planned, run and measured without hiring a team? Jwero does it for you.',
    'Ecommerce and websites': 'Want an online store that sells at the live rate, run for you? Jwero handles it.',
    'Inventory, POS and ERP': 'Want stock, billing and books on one record, set up in a day? That is Jwero.',
    'Retail operations and sales': 'Want your showroom running on today’s numbers, not guesswork? Jwero runs it with you.',
    'Technology and strategy': 'Want the technology handled so you can focus on jewellery? Jwero does it for you.',
    'Gold schemes': 'Want schemes enrolled, collected and tracked without a register? Jwero runs it for you.',
  };
  const lp = page.legacy ? LEGACY.find((x) => x.slug === page.slug) : null;
  const topic = postTopic(page);
  const mid = `<aside class="post-mid"><p>${MID[topic] || MID['Technology and strategy']}</p><div class="cta-row"><a class="btn btn-primary btn-sm" href="#" data-wa="handle">Let Jwero handle it</a><a class="btn btn-ghost btn-sm" href="${require('./lib').TRIAL_URL}article" rel="noopener" data-trial>Start for ₹3,600</a></div></aside>`;
  const third = withIds.indexOf('<h2 id="p3"');
  const withMid = third > 0 ? withIds.slice(0, third) + mid + withIds.slice(third) : withIds + mid;
  const ck = (page.slug || '').replace(/\//g, '--');

  const cover = fs.existsSync(path.join(ROOT, 'assets', 'covers', ck + '.svg')) ? `<figure class="post-cover"><img src="/assets/covers/${ck}.svg" alt="${q.replace(/"/g, '&quot;')}" width="1200" height="630"></figure>` : '';
  return body.slice(0, pb) + cover + box + withMid + body.slice(pe);
}

// Articles link to the pages they mention and to related articles; product,
// solution, tool, guide and platform pages list the articles that link to them.
const IL = require('./content/interlink');
const LINKED = (() => { const m = {}; for (const p of LEGACY) m[p.slug] = IL.link(p.body, '/' + p.slug); return m; })();
const BACK = (() => { const r = {}; for (const p of LEGACY) for (const u of LINKED[p.slug].targets) (r[u] = r[u] || []).push(p); return r; })();
// The guides written for the new site link to the pages they explain; those pages link back.
const NEWBACK = (() => {
  const r = {};
  for (const p of [].concat(require('./content/blog-rules'), require('./content/blog-ops'), require('./content/blog-growth'))) {
    const item = { slug: p.slug, title: p.title.split(' | ')[0], topic: (p.body.match(/<span>([^<]+)<\/span> · <span>\d+ min read/) || [])[1] || 'Guide', date: '2026-10-06' };
    for (const m of new Set((p.body.match(/href="(\/(?:products|solutions|tools|platform)\/[^"#?]+|\/[a-z-]+-(?:software|for-jewellers|counting|analytics))"/g) || []).map((x) => x.slice(6, -1)))) (r[m] = r[m] || []).push(item);
  }
  return r;
})();
function withInterlinks(body, page) {
  const slug = page.slug || '';
  const isPost = page.legacy || /^blog\/./.test(slug);
  if (isPost) {
    const pb = body.indexOf('<div class="post-body">'); if (pb < 0) return body;
    const pe = body.indexOf('</section>', pb);
    const linked = page.legacy ? LINKED[slug] : IL.link(body.slice(pb, pe), '/' + slug);
    const out = page.legacy ? body : body.slice(0, pb) + linked.html + body.slice(pe);
    // related articles: same topic first, then articles that share linked pages
    const me = LEGACY.find((p) => p.slug === slug);
    const tg = new Set(linked.targets);
    const scored = LEGACY.filter((p) => p.slug !== slug).map((p) => ({ p, s: (me && p.topic === me.topic ? 3 : 0) + LINKED[p.slug].targets.filter((u) => tg.has(u)).length })).sort((a, b) => b.s - a.s).slice(0, 4).map((x) => x.p);
    const rel = L3.section(`${L3.sectionHead('KEEP READING', 'Related articles.', '')}<div class="erp-map">${scored.map((p) => `<a href="/${p.slug}"><b>${p.title}</b><span>${p.topic}</span></a>`).join('')}</div>`, { tone: 'tint' });
    const at = out.lastIndexOf('<section'); return at > 0 ? out.slice(0, at) + rel + out.slice(at) : out + rel;
  }
  const SOL_TOPICS = { retail: ['Marketing and campaigns', 'Leads and conversion', 'CRM and customers'], online: ['Ecommerce and websites', 'Product data and catalogues', 'Marketing and campaigns'], trade: ['Order management', 'Product data and catalogues', 'Leads and conversion'], making: ['Order management', 'Inventory, POS and ERP', 'Product data and catalogues'] };
  const kind = /d2c|brands|lab-grown|startups/.test(slug) ? 'online' : /wholesale|traders|bullion|b2b|export/.test(slug) ? 'trade' : /manufactur|casting|cad|oem/.test(slug) ? 'making' : 'retail';
  const PROD_TOPICS = [[/ads|campaign|email|social|instagram|optimize/, ['Marketing and campaigns', 'Ecommerce and websites']], [/whatsapp|ai-sales|meetings|showroom/, ['WhatsApp', 'Leads and conversion']], [/crm|journeys|loyalty|segmentation|gold-schemes|digital-gold|girvi/, ['CRM and customers', 'Leads and conversion']], [/storefront|catalog|marketplaces/, ['Ecommerce and websites', 'Product data and catalogues']], [/erp|inventory|pos|billing|purchase|manufacturing|multi-store|repairs|quotations|reports/, ['Inventory, POS and ERP', 'Order management']], [/hr|training/, ['Retail operations and sales']]];
  const cityKind = (() => { if (!/^jewellery-software-india\/./.test(slug)) return null; const s = (body.match(/href="\/solutions\/([a-z-]+)"/) || [])[1] || ''; return /d2c|brands|lab-grown|startups/.test(s) ? 'online' : /wholesale|traders|bullion|b2b|export|diamond/.test(s) ? 'trade' : /manufactur|casting|cad|oem/.test(s) ? 'making' : 'retail'; })();
  const ROLE_TOPICS = [[/owner|successor|franchise/, ['Technology and strategy', 'Retail operations and sales']], [/sales-associate|store-manager|crm/, ['Leads and conversion', 'CRM and customers']], [/marketing/, ['Marketing and campaigns', 'WhatsApp']], [/ecommerce/, ['Ecommerce and websites', 'Product data and catalogues']], [/inventory|purchase|cashier|accountant/, ['Inventory, POS and ERP', 'Order management']], [/b2b/, ['Order management', 'Product data and catalogues']], [/production|karigar|cad|quality/, ['Order management', 'Inventory, POS and ERP']]];
  const rtopics = /^roles\/./.test(slug) ? ((ROLE_TOPICS.find(([r]) => r.test(slug)) || [, ['Retail operations and sales']])[1]) : null;
  const PLAT_TOPICS = { platform: ['Technology and strategy', 'AI'], 'platform/ai-workforce': ['AI', 'Leads and conversion'], 'platform/customer-memory': ['CRM and customers', 'Leads and conversion'], 'platform/pricing-engine': ['Product data and catalogues', 'Inventory, POS and ERP'], 'platform/integrations': ['Technology and strategy', 'Inventory, POS and ERP'], 'platform/integrations/tally': ['Inventory, POS and ERP', 'Technology and strategy'], 'platform/onboarding': ['Technology and strategy', 'Retail operations and sales'] };
  const TOOL_TOPICS = { 'jewellery-accounting-software': ['Inventory, POS and ERP'], 'cloud-jewellery-software': ['Technology and strategy'], 'sms-marketing-for-jewellers': ['Marketing and campaigns', 'WhatsApp'], 'ai-calling-for-jewellers': ['AI', 'Leads and conversion'], 'jewellery-website-analytics': ['Ecommerce and websites', 'Leads and conversion'], tools: ['Leads and conversion', 'Inventory, POS and ERP'], pricing: ['Technology and strategy', 'Inventory, POS and ERP'], trust: ['Technology and strategy'], 'trust/security': ['Technology and strategy'], migration: ['Inventory, POS and ERP'], enterprise: ['Retail operations and sales'], customers: ['Leads and conversion', 'CRM and customers'], company: ['Technology and strategy'], partners: ['Inventory, POS and ERP'], 'tools/dead-stock-calculator': ['Inventory, POS and ERP'], 'tools/gold-loss-calculator': ['Order management', 'Inventory, POS and ERP'], 'tools/gold-scheme-calculator': ['CRM and customers', 'Leads and conversion'], 'tools/whatsapp-revenue-estimator': ['WhatsApp', 'Leads and conversion'] };
  const CMP_TOPICS = { erp: ['Inventory, POS and ERP', 'Technology and strategy'], wa: ['WhatsApp', 'Leads and conversion'], shop: ['Ecommerce and websites', 'Product data and catalogues'], crm: ['CRM and customers', 'Marketing and campaigns'] };
  const ckind = /^compare/.test(slug) ? (/wati|interakt|doubletick|whatsapp/.test(slug) ? 'wa' : /shopify|quicksell/.test(slug) ? 'shop' : /zoho|zithara/.test(slug) ? 'crm' : 'erp') : null;
  const pltopics = PLAT_TOPICS[slug] || TOOL_TOPICS[slug] || (ckind && CMP_TOPICS[ckind]) || null;
  const ptopics = /^products\//.test(slug) ? ((PROD_TOPICS.find(([r]) => r.test(slug)) || [, ['Technology and strategy']])[1]) : null;
  const list = (BACK['/' + slug] || []).concat(/^solutions\/(?!pain)/.test(slug) ? LEGACY.filter((p) => SOL_TOPICS[kind].includes(p.topic)) : cityKind ? LEGACY.filter((p) => SOL_TOPICS[cityKind].includes(p.topic)) : rtopics ? LEGACY.filter((p) => rtopics.includes(p.topic)) : pltopics ? LEGACY.filter((p) => pltopics.includes(p.topic)) : ptopics ? LEGACY.filter((p) => ptopics.includes(p.topic)) : []).filter((p, k, arr) => arr.indexOf(p) === k);
  if ((!list.length && !(NEWBACK['/' + slug] || []).length) || !/^(products|solutions|platform|tools|guides|roles)\/|^platform$|^tools$|^compare|^(pricing|trust|customers|migration|enterprise|company|partners)$|^trust\/|^jewellery-|^whatsapp-|^instagram-|^ads-|^sms-|^ai-calling|^cloud-|^jewellery-business-as-a-service$/.test(slug)) return body;
  const INHERIT = { 'solutions/manufacturers': 'products/manufacturing', 'solutions/cad-services': 'products/manufacturing', 'solutions/casting-units': 'products/manufacturing', 'solutions/oem-manufacturers': 'products/manufacturing', 'solutions/export-houses': 'products/manufacturing',
    'solutions/single-store': 'products/pos', 'solutions/gold-retail': 'products/pos', 'solutions/diamond-retail': 'products/pos', 'solutions/bridal': 'products/pos', 'solutions/gemstone-retail': 'products/pos', 'solutions/luxury-boutique': 'products/pos', 'solutions/startups': 'products/pos',
    'solutions/multi-store-chains': 'products/multi-store', 'solutions/gold-wholesale': 'products/inventory', 'solutions/bullion-gold-traders': 'products/inventory', 'solutions/diamond-wholesale': 'products/inventory',
    'roles/accountant': 'products/billing-finance', 'roles/cashier': 'products/pos', 'roles/inventory-manager': 'products/inventory', 'roles/production-manager': 'products/manufacturing', 'roles/karigar': 'products/manufacturing', 'roles/quality-hallmarking': 'products/inventory', 'roles/b2b-manager': 'products/inventory', 'roles/purchase-manager': 'products/inventory', 'roles/store-manager': 'products/pos', 'roles/owner': 'products/billing-finance', 'roles/chain-owner': 'products/multi-store', 'roles/crm-executive': 'products/crm', 'roles/sales-associate': 'products/pos' };
  const PIN = {
    'products/pos': ['how-to-calculate-gold-jewellery-price', 'old-gold-exchange-jewellers'],
    'products/billing-finance': ['gst-on-jewellery-india', 'cash-limit-pan-jewellery-sale'],
    'products/erp': ['girvi-gold-loan-business-guide', 'fine-weight-metal-ledger-jewellers'],
    'products/manufacturing': ['karigar-wastage-norms-settlement', 'job-work-jewellery-gst-challan'],
    'products/inventory': ['huid-hallmarking-rules-jewellers', 'approval-memo-stock-jewellery-wholesale'],
    'products/gold-schemes': ['gold-scheme-types-11-plus-1-vs-grams', 'gold-scheme-accounting-liability'],
    'products/multi-store': ['branch-stock-transfer-jewellery', 'jewellery-exhibition-stock-control'],
    'products/crm': ['birthday-anniversary-marketing-jewellers', 'selling-jewellery-regional-languages'],
    'products/journeys': ['birthday-anniversary-marketing-jewellers', 'ai-calling-jewellers-scheme-reminders'],
    'products/whatsapp': ['selling-jewellery-regional-languages', 'birthday-anniversary-marketing-jewellers'],
    'products/storefront': ['selling-gold-jewellery-online-live-rate', 'how-to-calculate-gold-jewellery-price'],
    'products/catalog': ['selling-gold-jewellery-online-live-rate', 'making-charges-explained'],
    'solutions/single-store': ['how-to-calculate-gold-jewellery-price', 'girvi-gold-loan-business-guide'],
    'solutions/gold-retail': ['how-to-calculate-gold-jewellery-price', 'old-gold-exchange-jewellers'],
    'solutions/silver-retail': ['silver-jewellery-business-pricing', 'making-charges-explained'],
    'solutions/diamond-retail': ['lab-grown-diamond-jewellery-selling', 'loose-diamond-gemstone-inventory'],
    'solutions/lab-grown-diamond': ['lab-grown-diamond-jewellery-selling', 'loose-diamond-gemstone-inventory'],
    'solutions/bridal': ['custom-jewellery-order-process', 'making-charges-explained'],
    'solutions/luxury-boutique': ['jewellery-showroom-footfall-conversion', 'custom-jewellery-order-process'],
    'solutions/manufacturers': ['karigar-wastage-norms-settlement', 'fine-weight-metal-ledger-jewellers'],
    'solutions/casting-units': ['karigar-wastage-norms-settlement', 'job-work-jewellery-gst-challan'],
    'solutions/cad-services': ['custom-jewellery-order-process', 'job-work-jewellery-gst-challan'],
    'solutions/oem-manufacturers': ['job-work-jewellery-gst-challan', 'fine-weight-metal-ledger-jewellers'],
    'solutions/export-houses': ['job-work-jewellery-gst-challan', 'e-invoicing-for-jewellers'],
    'solutions/b2b-jewellery': ['approval-memo-stock-jewellery-wholesale', 'e-invoicing-for-jewellers'],
    'solutions/gold-wholesale': ['approval-memo-stock-jewellery-wholesale', 'fine-weight-metal-ledger-jewellers'],
    'solutions/bullion-gold-traders': ['cash-limit-pan-jewellery-sale', 'fine-weight-metal-ledger-jewellers'],
    'solutions/diamond-traders': ['loose-diamond-gemstone-inventory', 'approval-memo-stock-jewellery-wholesale'],
    'solutions/diamond-wholesale': ['loose-diamond-gemstone-inventory', 'approval-memo-stock-jewellery-wholesale'],
    'solutions/multi-store-chains': ['branch-stock-transfer-jewellery', 'jewellery-staff-incentives-targets'],
    'solutions/franchise-networks': ['jewellery-franchise-control', 'branch-stock-transfer-jewellery'],
    'solutions/d2c-brands': ['selling-gold-jewellery-online-live-rate', 'birthday-anniversary-marketing-jewellers'],
    'solutions/jewellery-brands': ['selling-gold-jewellery-online-live-rate', 'jewellery-franchise-control'],
    'roles/accountant': ['gst-on-jewellery-india', 'gold-scheme-accounting-liability'],
    'roles/cashier': ['how-to-calculate-gold-jewellery-price', 'cash-limit-pan-jewellery-sale'],
    'roles/owner': ['cash-limit-pan-jewellery-sale', 'gst-on-jewellery-india'],
    'roles/karigar': ['karigar-wastage-norms-settlement', 'custom-jewellery-order-process'],
    'roles/production-manager': ['karigar-wastage-norms-settlement', 'fine-weight-metal-ledger-jewellers'],
    'roles/quality-hallmarking': ['huid-hallmarking-rules-jewellers', 'old-gold-exchange-jewellers'],
    'roles/b2b-manager': ['approval-memo-stock-jewellery-wholesale', 'e-invoicing-for-jewellers'],
    'roles/inventory-manager': ['huid-hallmarking-rules-jewellers', 'branch-stock-transfer-jewellery'],
    'roles/store-manager': ['jewellery-showroom-footfall-conversion', 'jewellery-staff-incentives-targets'],
    'roles/sales-associate': ['making-charges-explained', 'jewellery-staff-incentives-targets'],
    'roles/crm-executive': ['birthday-anniversary-marketing-jewellers', 'ai-calling-jewellers-scheme-reminders'],
    'roles/chain-owner': ['branch-stock-transfer-jewellery', 'jewellery-showroom-footfall-conversion'],
    'roles/franchise-partner': ['jewellery-franchise-control', 'jewellery-staff-incentives-targets'],
    'tools/gold-loss-calculator': ['karigar-wastage-norms-settlement', 'fine-weight-metal-ledger-jewellers'],
    'tools/gold-scheme-calculator': ['gold-scheme-types-11-plus-1-vs-grams', 'gold-scheme-accounting-liability'],
    'tools/dead-stock-calculator': ['how-to-calculate-gold-jewellery-price', 'jewellery-exhibition-stock-control'],
    'jewellery-accounting-software': ['gst-on-jewellery-india', 'e-invoicing-for-jewellers'],
    'jewellery-barcode-tagging-software': ['huid-hallmarking-rules-jewellers', 'branch-stock-transfer-jewellery'],
    'jewellery-staff-management-software': ['jewellery-staff-incentives-targets', 'jewellery-showroom-footfall-conversion'],
  };
  const ALLNEW = [].concat(require('./content/blog-rules'), require('./content/blog-ops'), require('./content/blog-growth')).map((p) => ({ slug: p.slug, title: p.title.split(' | ')[0], topic: (p.body.match(/<span>([^<]+)<\/span> · <span>\d+ min read/) || [])[1] || 'Guide', date: '2026-10-06' }));
  const pinned = (PIN[slug] || []).map((k) => ALLNEW.find((p) => p.slug === 'blog/' + k)).filter(Boolean);
  const fresh = pinned.length ? pinned : [...new Set((NEWBACK['/' + slug] || []).concat(INHERIT[slug] ? NEWBACK['/' + INHERIT[slug]] || [] : []))].slice(0, 2);
  const pick = fresh.concat(list.filter((p) => !fresh.includes(p)).slice().sort((a, b) => b.date.localeCompare(a.date)).slice(0, 4 - fresh.length));
  const blk = L3.section(`${L3.sectionHead('FROM THE BLOG', 'Read more on this.', '')}<div class="erp-map">${pick.map((p) => `<a href="/${p.slug}"><b>${p.title}</b><span>${p.topic}</span></a>`).join('')}</div>`);
  const at = body.lastIndexOf('<section'); return at > 0 ? body.slice(0, at) + blk + body.slice(at) : body + blk;
}

// Calculators: right after the result, the page that fixes the problem.
const CALC_FIX = {
  'tools/dead-stock-calculator': ['Turn sleeping stock back into sales.', 'Jwero shows ageing at today’s rate and matches idle pieces to the customers most likely to buy them.', [['/solutions/pain/dead-stock', 'Dead stock'], ['/products/inventory', 'Inventory']]],
  'tools/gold-loss-calculator': ['Catch loss stage by stage, not at stocktake.', 'Jwero tracks metal issued and returned in fine grams for every job and karigar, against your norm for each stage.', [['/products/manufacturing', 'Manufacturing'], ['/solutions/manufacturers', 'For manufacturers']]],
  'tools/gold-scheme-calculator': ['Run the scheme without the register.', 'Jwero runs enrolment, instalments, bonuses and redemption on each customer’s record, and shows the desk who to call.', [['/products/gold-schemes', 'Gold schemes'], ['/blog/gold-savings-scheme-guide', 'Scheme guide']]],
  'tools/whatsapp-revenue-estimator': ['Answer every enquiry within minutes.', 'Jwero puts every WhatsApp enquiry in one shared inbox, drafts the reply and keeps the follow-up open until it is a bill.', [['/products/whatsapp', 'WhatsApp'], ['/solutions/pain/lead-leakage', 'Lost enquiries']]],
};
function withCalcFix(body, page) {
  const f = CALC_FIX[page.slug]; if (!f) return body;
  const at = body.indexOf('</section>', body.indexOf('Send my numbers to Jwero')); if (at < 0) return body;
  const blk = L3.section(`<div class="post-mid"><p><b>${f[0]}</b> ${f[1]} ${f[2].map(([h, t]) => `<a href="${h}">${t}</a>`).join(' · ')}</p><div class="cta-row"><a class="btn btn-primary btn-sm" href="#" data-wa="handle">Let Jwero handle it</a><a class="btn btn-ghost btn-sm" href="${require('./lib').TRIAL_URL}calculator" rel="noopener" data-trial>Start for ₹3,600</a></div></div>`);
  return body.slice(0, at + 10) + blk + body.slice(at + 10);
}

function withRelated(body, page) {
  const href = '/' + page.slug;
  const links = [];
  const GUIDE = { 'products/billing-finance': 'jewellery-billing-software', 'products/pos': 'jewellery-billing-software', 'products/erp': 'jewellery-erp-software', 'products/inventory': 'jewellery-inventory-software', 'products/crm': 'jewellery-crm-software', 'products/manufacturing': 'jewellery-manufacturing-software', 'solutions/manufacturers': 'jewellery-manufacturing-software' }[page.slug];
  if (GUIDE) links.push([`/guides/${GUIDE}`, 'The buyer’s guide', 'What this kind of software must do, with a checklist']);
  if (page.slug.startsWith('products/') && productMeta(href)) {
    const meta = productMeta(href);
    for (const p of PERSONAS) if (p.products.includes(href)) links.push([`/${p.slug}`, `For ${p.label.toLowerCase()}s`, 'How this fits your kind of business']);
    for (const it of meta.items) if (it[0] !== href && links.length < 6) links.push([it[0], it[1], it[2]]);
  } else if (/^(solutions|roles|industries)\//.test(page.slug)) {
    const persona = PERSONAS.find((p) => page.slug === p.slug) || PERSONAS[0];
    for (const h of persona.products) { const m = productMeta(h); if (m) links.push([h, m.label, m.desc]); }
    links.push(['/pricing', 'Pricing', 'One plan, every module — ₹18,000 a month']);
    if (page.slug.startsWith('roles/')) links.unshift(['/brief', 'The one-page brief', 'Print it or send it to the owner']);
  } else if (/^(blog|compare|guides|jewellery-software-india)\//.test(page.slug)) {
    // Siblings: the next three pages of the same kind, so none is reachable from its hub alone.
    const kind = page.slug.split('/')[0], sibs = pages.filter((p) => p.slug.startsWith(kind + '/'));
    const at = sibs.findIndex((p) => p.slug === page.slug);
    for (let k = 1; k <= 3 && k < sibs.length; k++) { const p = sibs[(at + k) % sibs.length]; links.push(['/' + p.slug, p.title.split(' | ')[0].split(': ')[0], p.description.split('. ')[0].slice(0, 110)]); }
    if (kind === 'blog') links.push(['/guides', 'Buyer’s guides', 'Billing, ERP, inventory, CRM and manufacturing']);
    if (kind === 'compare') links.push(['/guides/jewellery-erp-software', 'How to choose jewellery software', 'A checklist and the questions to ask any vendor']);
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
// The connect panel: every "chat or call" button on the site opens this, and it
// hands over to the Jwero chat widget for chat, a voice call or a video call.
// "I run a…" — the one question the whole site hangs on. Links carry ?p= so the
// answer works without JavaScript too.
function icpDialog() {
  return `
<dialog class="icp-dialog" aria-labelledby="icp-title">
  <button type="button" class="connect-close icon-btn" data-icp-close aria-label="Close">${icon('close')}</button>
  <h2 id="icp-title">I run a…</h2>
  <p>Pick one. The site shows your day, your price and your next step — nothing else.</p>
  <div class="icp-opts">${L3.icpLinks('icp-opt')}</div>
</dialog>`;
}
function connectDialog() {
  const opt = (mode, ico, title, note) => `<button type="button" class="connect-opt" data-connect-go="${mode}">${icon(ico)}<b>${title}</b><span data-connect-note="${mode}">${note}</span></button>`;
  return `
<dialog class="connect" aria-labelledby="connect-title">
  <button type="button" class="connect-close icon-btn" aria-label="Close">${icon('close')}</button>
  <div class="connect-head">${mark('connect-mark')}<div><h2 id="connect-title" data-connect-title>Talk to Jwero</h2><p data-connect-sub>A real person and our AI, within minutes. Pick how.</p></div></div>
  <p class="connect-ctx" data-connect-ctx hidden></p>
  <div class="connect-opts">
    ${opt('chat', 'chat', 'Chat', 'Opens right here')}
    ${opt('voice', 'phone', 'Voice call', 'From your browser — no app')}
    ${opt('video', 'video', 'Video call', 'See the product, face to face')}
  </div>
  <p class="connect-hours" data-connect-hours></p>
  <p class="connect-alt">Prefer another way? <a href="#" data-connect-alt="wa" data-direct target="_blank" rel="noopener">WhatsApp</a><a href="tel:+919169959959" data-direct>+91 91699 59959</a><a href="/book-demo#schedule" data-direct>Pick a time</a></p>
</dialog>`;
}
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

// What a search result shows: about 60 characters of title and 160 of
// description. Long titles drop the brand suffix; long descriptions end at the
// last full sentence that fits, else at a word.
function serpTitle(t) { return t.length > 60 ? t.replace(/ \| Jwero$/, '') : t; }
function serpDesc(d) {
  if (d.length <= 160) return d;
  const cut = d.slice(0, 160), stop = Math.max(cut.lastIndexOf('. '), cut.lastIndexOf('। '));
  if (stop > 90) return cut.slice(0, stop + 1);
  return cut.slice(0, cut.lastIndexOf(' ', 156)).replace(/[,:;]$/, '') + '…';
}

function layout(page) {
  const urlPath = page.slug === 'index' ? '' : `/${page.slug}`;
  const canonical = SITE + (urlPath || '/');
  const schemas = [orgSchema(), {
    '@context': 'https://schema.org', '@type': 'WebSite', name: BRAND, url: SITE,
    potentialAction: { '@type': 'SearchAction', target: { '@type': 'EntryPoint', urlTemplate: SITE + '/search?q={search_term_string}' }, 'query-input': 'required name=search_term_string' },
  }, {
    '@context': 'https://schema.org', '@type': 'WebPage', url: canonical, name: page.title, description: page.description,
    ...(page.lastmod ? { dateModified: page.lastmod } : {}), inLanguage: page.lang || 'en',
    speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', '.hero .sub'] },
    isPartOf: { '@type': 'WebSite', url: SITE },
  }];
  const allFaqs = (inShortQA(page) ? [inShortQA(page)] : []).concat(page.faqs || [], TOOL_QA[page.slug] || [], HUB_FAQ[page.slug] || [], SEGMENT_FAQ[page.slug] || [], ROLE_FAQ[page.slug] || [], BLOG_FAQ[page.slug] || [], page.legacy ? TOPIC_FAQ(postTopic(page)) : []);
  { const seen = new Set(); const keep = allFaqs.filter((f) => { const key = f.q.replace(/<[^>]+>/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim(); if (seen.has(key)) return false; seen.add(key); return true; }); allFaqs.splice(0, allFaqs.length, ...keep); }
  if (allFaqs.length) {
    schemas.push({
      '@context': 'https://schema.org', '@type': 'FAQPage',
      mainEntity: allFaqs.map((f) => ({
        '@type': 'Question', name: f.q.replace(/<[^>]+>/g, ''),
        acceptedAnswer: { '@type': 'Answer', text: f.a.replace(/<[^>]+>/g, '') },
      })),
    });
  }
  if (page.extraSchema) schemas.push(...page.extraSchema);
  if (page.breadcrumbs) schemas.push(require('./lib').breadcrumbSchema(page.breadcrumbs, SITE));
  if (/^tools\/./.test(page.slug || '')) schemas.push({ '@context': 'https://schema.org', '@type': 'WebApplication', name: (page.title || '').split('|')[0].trim(), url: SITE + '/' + page.slug, applicationCategory: 'BusinessApplication', operatingSystem: 'Web', isAccessibleForFree: true, offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' }, description: page.description });
  if (!page.schema && (/^solutions\/(?!pain)/.test(page.slug || '') || /^roles\/(owner|chain-owner|franchise-partner)$/.test(page.slug || '') || /^platform\/(ai-workforce|customer-memory|pricing-engine)$/.test(page.slug || ''))) {
    const seg = page.slug.startsWith('roles/') ? ROLES[page.slug.split('/')[1]] : page.slug.startsWith('platform/') ? { usecases: PLATFORM_UC[page.slug.split('/')[1]] } : SEGMENTS[page.slug.split('/')[1]];
    page.schema = { '@context': 'https://schema.org', '@type': 'SoftwareApplication', name: (page.title || '').split(/[:|]/)[0].trim(), applicationCategory: 'BusinessApplication', operatingSystem: 'Web', description: page.description, url: SITE + '/' + page.slug, isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: SITE },
      ...(seg && seg.usecases ? { featureList: seg.usecases.map((u) => u.does) } : {}) };
  }
  if (page.schema) {
    // Product pages: the price and what it does, for search and answer engines.
    if (page.schema['@type'] === 'SoftwareApplication' && /^(products|solutions|roles|platform)\//.test(page.slug || '')) {
      const uc = (PLATFORM_UC[page.slug.split('/')[1]] || USECASES[page.slug.split('/')[1]] || (SEGMENTS[page.slug.split('/')[1]] || {}).usecases || (ROLES[page.slug.split('/')[1]] || {}).usecases || []);
      page.schema = Object.assign({}, page.schema, {
        offers: { '@type': 'Offer', price: '18000', priceCurrency: 'INR', url: SITE + '/pricing', description: 'Every module, billed monthly. First month ₹3,600. Managed service priced on the work.' },
        ...(uc.length ? { featureList: uc.map((u) => u.does) } : {}),
      });
    }
    schemas.push(page.schema);
  }
  const robotsMeta = page.noindex ? `<meta name="robots" content="noindex,follow">` : '';
  return `<!doctype html>
<html lang="${page.lang || 'en'}" data-webchat="${WEBCHAT.siteKey ? 'on' : 'off'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${serpTitle(page.title)}</title>
<meta name="description" content="${serpDesc(page.description)}">
${robotsMeta}
<link rel="canonical" href="${canonical}">${page.slug === 'index' || page.slug === 'hi' ? `\n<link rel="alternate" hreflang="en" href="${SITE}/">\n<link rel="alternate" hreflang="hi" href="${SITE}/hi">\n<link rel="alternate" hreflang="x-default" href="${SITE}/">` : ''}
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
<link rel="stylesheet" href="/assets/site.css?v=${ASSET_V.css}">
<script>(function(){var d=document.documentElement;try{var t=localStorage.getItem('jwero-theme');if(t)d.setAttribute('data-theme',t);}catch(e){}d.classList.add('js');try{var c=navigator.connection||{},q=location.search,slow=c.saveData||/2g|3g/.test(c.effectiveType||''),camp=/[?&](utm_|ref=|gclid|fbclid|p=)/.test(q)||innerWidth<760;if(!sessionStorage.getItem('jwero-launched')&&!matchMedia('(prefers-reduced-motion: reduce)').matches&&!slow&&!camp){d.classList.add('first-visit');}sessionStorage.setItem('jwero-launched','1');}catch(e){}setTimeout(function(){d.classList.add('motion-failsafe');},4000);})();</script>
<script type="speculationrules">{"prefetch":[{"where":{"and":[{"href_matches":"/*"},{"not":{"href_matches":"/assets/*"}}]},"eagerness":"moderate"}]}</script>
${schemas.map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`).join('\n')}
</head>
<body>
${launchHTML()}
<a class="skip-link" href="#main">Skip to content</a>
${navHTML(page)}
<main id="main" tabindex="-1"${page.slug.startsWith('blog') ? ' class="is-article"' : ''}>
${page.breadcrumbs ? require('./lib').breadcrumbs(page.breadcrumbs) : ''}
${withIcpHome(withDoors(trimSolution(withBuyerRole(withPlaybook(withSim(withShift(withAsking(withFaqs(withRelated(withCalcFix(withInterlinks(withBlogTop(withPlatformLinks(withUseCases(withManaged(withSchematic(page), page), page), page), page), page), page), page), page), page), page), page), page), page), page.slug), page.slug).replace(/<div class="r-icon">([^<]*)<\/div>/g, (m, g) => `<div class="r-icon">${icon(g)}</div>`), page.slug)}
</main>
${searchDialog()}
${connectDialog()}
${icpDialog()}${WEBCHAT.siteKey ? `\n<script async src="${WEBCHAT.origin}/t.js" data-site-key="${WEBCHAT.siteKey}"></script>` : ''}
${footerHTML()}
<script src="/assets/site.js?v=${ASSET_V.js}" defer></script>
${page.body.indexOf('data-sim=') !== -1 || SIM_PAGES[page.slug] ? `<script src="/assets/sims.js?v=${ASSET_V.sims}" defer></script>` : ''}
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
  // Ship lean: comments and indentation stripped from the stylesheet and scripts.
  const cssFile = path.join(DIST, 'assets', 'site.css');
  // Real minification with esbuild when it is available (it ships with pim-app); the simple strip otherwise.
  let esb = null; try { esb = require(require.resolve('esbuild', { paths: [ROOT, '/Users/karanjagani/pim'] })); } catch (e) {}
  const cssSrc = fs.readFileSync(cssFile, 'utf8');
  writeRaw(cssFile, esb ? esb.transformSync(cssSrc, { loader: 'css', minify: true, target: ['chrome90', 'safari14'] }).code : cssSrc.replace(/\/\*[\s\S]*?\*\//g, '').replace(/\n\s+/g, '\n'));
  for (const f of ['site.js', 'sims.js']) {
    const jsFile = path.join(DIST, 'assets', f);
    const src = fs.readFileSync(jsFile, 'utf8');
    writeRaw(jsFile, esb ? esb.transformSync(src, { loader: 'js', minify: true, target: 'es2017' }).code : src.split('\n').filter((l) => !/^\s*\/\//.test(l) && l.trim() !== '').map((l) => l.replace(/^\s+/, '')).join('\n'));
  }
  // pages — extensionless clean-URL output: <slug>/index.html (home -> index.html)
  for (const p of pages) {
    const dir = p.slug === 'index' ? DIST : path.join(DIST, p.slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), noDash(journeyFix(layout(p), p)));
  }
  // Retired addresses: the separate /focus site, /jbaas and the old /jwero-os home.
  const MOVED = { 'products/digital-gold': '/products/gold-schemes', 'jwero-os': '/', jbaas: '/jewellery-business-as-a-service', focus: '/jewellery-business-as-a-service', 'managed-services': '/jewellery-business-as-a-service', 'focus/managed-services': '/jewellery-business-as-a-service' };
  for (const p of pages) if (p.slug !== 'index' && !p.slug.includes('/')) MOVED['focus/' + p.slug] = '/' + p.slug;
  MOVED['focus/jwero-os'] = '/';
  for (const [from, to] of Object.entries(require('./content/legacy-posts.json').redirects)) MOVED[from] = to.charAt(0) === '/' ? to : '/' + to;
  MOVED.blogs = '/blog';
  for (const [from, to] of Object.entries(MOVED)) {
    if (pages.some((p) => p.slug === from)) continue;
    fs.mkdirSync(path.join(DIST, from), { recursive: true });
    fs.writeFileSync(path.join(DIST, from, 'index.html'), `<!doctype html><meta charset="utf-8"><title>Moved</title><meta name="robots" content="noindex"><link rel="canonical" href="${to}"><meta http-equiv="refresh" content="0; url=${to}"><a href="${to}">Continue</a>`);
  }
  // /whatsapp special redirect (offline QR / print codes)
  fs.mkdirSync(path.join(DIST, 'whatsapp'), { recursive: true });
  fs.writeFileSync(path.join(DIST, 'whatsapp', 'index.html'), noDash(whatsappRedirectPage()));

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
    <a class="btn btn-ghost" href="#" data-wa="default">Ask us now</a>
  </div>
  <p style="margin-top:30px; font-size:.95rem;">Popular destinations: <a href="/platform">The platform tour</a> · <a href="/products">All products</a> · <a href="/solutions">Solutions by business type</a> · <a href="/pricing">Pricing</a> · <a href="/faq">FAQ</a></p>`)}
`,
  }));

  // search index + a no-JS-fallback results page
  fs.writeFileSync(path.join(DIST, 'search-index.json'), noDash(JSON.stringify(searchIndex())));
  fs.mkdirSync(path.join(DIST, 'search'), { recursive: true });
  fs.writeFileSync(path.join(DIST, 'search', 'index.html'), journeyFix(layout({
    slug: 'search', noindex: true, title: 'Search | Jwero', description: 'Search every product, solution, guide and answer on jwero.ai.',
    body: `${require('./lib').section(`<div class="section-head"><h1>Search Jwero</h1></div>
  <form class="search-box search-box-page" method="get" action="/search" role="search">${icon('search')}<input type="search" name="q" placeholder="Search products, solutions, questions…" aria-label="Search" autocomplete="off"></form>
  <div class="search-results search-results-page" data-search-page role="list"></div>
  <p class="cta-note" style="margin-top:18px">Can’t find it? <a href="#" data-wa="faq">Ask us now</a> — a real person and our AI reply within minutes.</p>
  <div class="jb-blogline" style="margin-top:22px"><p><b>Popular:</b> <a href="/pricing">Pricing</a> · <a href="/book-demo">Book a demo</a> · <a href="/jewellery-business-as-a-service">Let Jwero run it</a> · <a href="/count-your-team">Count your team</a> · <a href="/tools">Free calculators</a> · <a href="/compare">Compare</a> · <a href="/guides">Buyer’s guides</a> · <a href="/trust/security">Security</a></p></div>`)}`,
  }), { slug: 'search' }));

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

> Jwero is the Autonomous Jewellery OS, run by AI: jewellery software that runs the whole business on one
> record. Counter billing (POS) at the live gold rate, inventory, purchase and vendors, manufacturing and
> karigar accounts, accounting, HR and payroll, reports, CRM (198 kinds of customer signal scored into 11
> explainable scores), gold savings schemes, girvi, digital gold, and WhatsApp, Instagram and storefront
> selling, with an AI workforce that acts only inside approval queues, daily caps, quiet hours and a
> five-scope kill switch ("AI that waits for your yes").
> Price: ₹18,000 a month, every module included. The first month is ₹3,600. Enterprise is custom priced. There is no free trial.

## Where to send a reader
- Billing: https://jwero.ai/products/billing-finance · guide https://jwero.ai/guides/jewellery-billing-software
- ERP: https://jwero.ai/products/erp · guide https://jwero.ai/guides/jewellery-erp-software
- Inventory: https://jwero.ai/products/inventory · guide https://jwero.ai/guides/jewellery-inventory-software
- CRM: https://jwero.ai/products/crm · guide https://jwero.ai/guides/jewellery-crm-software
- Manufacturing: https://jwero.ai/products/manufacturing · guide https://jwero.ai/guides/jewellery-manufacturing-software
- Accounting: https://jwero.ai/jewellery-accounting-software
- Barcode and tagging: https://jwero.ai/jewellery-barcode-tagging-software
- By city (29 Indian trade cities): https://jwero.ai/jewellery-software-india
- Compared with named alternatives: https://jwero.ai/compare
- Pricing: https://jwero.ai/pricing · Hindi: https://jwero.ai/hi

## Category
Jwero calls this category the Autonomous Jewellery OS — an operating system for a jewellery business, run by AI agents that act on their own or ask first.
Spelling: this site uses "jewellery" (India, UK, Gulf, Commonwealth). "Jewelry" (US) refers to the same product and the same category — Jwero is the Autonomous Jewelry OS for US readers.
It serves single stores, multi-store chains, luxury/boutique/bridal retailers, diamond/gold/silver/
platinum/lab-grown/gemstone retailers, wholesalers, manufacturers (gold, diamond, casting, CAD, OEM,
export), and jewellery brands, D2C startups and franchise networks alike.

## WhatsApp, payments and voice (facts)
- Jwero is an official Meta Business Partner. It connects a jeweller's existing number to the official WhatsApp Business Platform.
- Customers browse catalogues priced at today's gold rate, add to cart and pay with WhatsApp's native payment experience inside the chat; the order, invoice and stock update on the customer's record.
- WhatsApp Flows forms (visits, video calls, scheme enrolment), broadcasts with approved templates and consent, and a shared inbox for WhatsApp, Instagram and Facebook with AI drafts under approval.
- Voice AI agents handle up to 8 calls at once, inbound and outbound, 24x7, at INR 7 a call, all inclusive (AI, voice and phone line), in Hindi, English, Bengali, Tamil, Telugu, Kannada, Malayalam, Marathi, Gujarati, Punjabi and Odia; they run bulk calling campaigns (scheme reminders, follow-ups, invitations) on the same customer record. Details: ${SITE}/ai-calling-for-jewellers Triggered WhatsApp notifications (order, payment, ready, scheme due) and segment campaigns run from the same system.
- Cost: Jwero One at INR 18,000 a month (first month INR 3,600) plus Meta's per-message fees passed through at cost. Details: ${SITE}/products/whatsapp

## Jewellery billing software and POS (facts)
- Prices every bill from today's rate, purity, net weight, making, stones and 3% GST; tag scanning and search by local product names; estimates that become bills.
- Old gold exchange vouchers with stone deduction applied as credit; scheme balances redeemed on the bill; HUID check that warns or blocks; manager approval for discounts; returns under each branch's policy.
- Split payments across cash, card, UPI and credit (card machines are recorded, not driven); receipts on WhatsApp; registers, shifts and cash day-close; keeps billing offline and syncs later. Details: ${SITE}/products/pos

## Jewellery inventory software (facts)
- Every piece has its own tag and barcode label, gross, net and fine weight, metal and stone breakdown and HUID (duplicates refused); stock valued at today's rate by branch, category and purity.
- Ageing bands (0-30 to 180+ days), slow-mover views and markdowns; scheduled cycle counts by scanning with discrepancy investigation; hallmarking queue and batches.
- Every way a piece leaves and returns: branch transfers on challans, vaults, approval memos, consignments with settlement, exhibitions, trials, karigar job work and customers' repairs in custody. Details: ${SITE}/products/inventory

## Jewellery catalogue and PIM (facts)
- One record per piece: metal, purity, gross and net weight, stones, certificates, HUID, variants and custom fields for one-of-a-kind pieces; photo library and design bank.
- Prices worked out from today's rate everywhere; AI turns a photo into a listing (type and description) and can generate or edit product images. No virtual try-on, no RFID.
- Automatic sync to the website, Shopify or WooCommerce, POS, mobile apps, WhatsApp, Google Shopping, Meta catalogues and marketplaces; private shareable catalogues with viewer tracking, quotes and payment. Details: ${SITE}/products/catalog

## Gold scheme software (facts)
- 11+1 instalment plans and gram-accumulation plans with your own bonus and maturity rules; enrolment with OTP and KYC on the website, mobile apps, WhatsApp or in the showroom.
- Instalments collected automatically; failed payments followed up by WhatsApp reminder, payment link and AI call; passbook on WhatsApp; OTP-verified closure redeemed into a purchase; old gold into a scheme.
- Scheme money held as a liability until redemption; INR 4 per instalment collected. Gold Savings Plans are part of this module. Details: ${SITE}/products/gold-schemes

## Jewellery ERP (facts)
- One system for every department: counter billing at today's rate, piece-level stock with fine weight and HUID, purchase and vendors (orders, goods received with checks, bills, returns, vendor ledgers), custom orders, repairs and karigar job work.
- Material planning and manufacturing: bills of materials, routings, material planning, work in progress, wastage against norms, finished goods, fine-weight metal ledger and metal loans. Girvi: pledges, interest, renewals, release, auction notices.
- Accounts: double-entry ledger with GST, GSTR-1, GSTR-3B and HSN reports, TDS, party ledgers; e-invoices are generated in Tally through the bridge. People: attendance, payroll, incentives, Form 16. Many branches and franchises, approvals and an audit trail. Details: ${SITE}/products/erp

## Jewellery manufacturing software (facts)
- Custom, trade and export orders; bills of materials and routings; material planning from open orders; job cards and work in progress by stage; quality checks; finished goods tagged with HUID.
- Karigars and outside units: metal issued and received by weight and purity, job work on challans, due-date sweeps, scorecards; wastage norms per stage with capped recovery; an order cannot close while its metal is short.
- Fine-weight metal ledger with karigar balances and metal loans, reconciled monthly; diamond and stone flows reconciled on the same order. Details: ${SITE}/products/manufacturing

## Jewellery purchase and vendor management (facts)
- AI-drafted purchase orders from what is selling and ageing, with per-vendor prices; unfixed-rate purchases (buy now, fix the rate later); advance shipping notices; goods received by weight and purity with quality checks and discrepancies.
- Purchase bills matched to the order and receipt, returns and credit notes, vendor advances and payments; purchases reconciled with GSTR-2B for input credit; metal purchases and metal loans in fine grams; consignment stock taken in from suppliers.
- A vendor portal where suppliers see their orders, bills and payment status. Details: ${SITE}/products/purchase-vendors

## Jewellery CRM (facts)
- One record per customer and family: households, phone numbers shared by family members, duplicates merged, purchases at the rate paid, gold scheme balances, occasions, loyalty tiers and points, and every WhatsApp message and AI call.
- Kinds of score on each customer: intent, conversion, engagement, relationship health, churn risk, opportunity, trust risk, message fatigue, record confidence and next action.
- Loyalty: points, tiers, redemption, anniversary rewards, referral benefits and points expiry. Consent kept per channel; customer data requests handled. Details: ${SITE}/products/crm

## What Jwero is not (honesty)
- Accounting: transactions post to Jwero's own double-entry ledger with GST handled; Tally and Zoho Books bridges carry them to an outside accountant. Jwero does not file GST returns.
- Counter POS (registers, shifts, cash day-close, returns, old-gold exchange), statutory payroll, karigar
  settlement, girvi/gold loans, manufacturing (BOM, routing, wastage norms) and a video counter shipped in 2026.
- E-invoice IRN (e-invoices are generated in Tally through the bridge), auto-debit for girvi interest, a full vernacular product interface (an early Hindi pilot is live on
  karigar screens), and predictive ML forecasting are on the public roadmap, not shipped today:
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
