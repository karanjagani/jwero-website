const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Compare', '/compare'], [label]];

// Shared factory for T6 named-competitor comparison pages. As of 2026-07-20 this content
// reflects a completed research pass (public marketing sites, review/pricing aggregators
// — Capterra, G2, SoftwareSuggest, Techjockey — and, where available, the vendor's own
// pricing page) rather than the earlier placeholder-only drafts. Every fact about a named
// competitor is either sourced from its own public materials (cited inline where a specific
// number is used) or marked [VERIFY] where public information was genuinely unavailable or
// unclear — never asserted with more confidence than the source supports. Jwero-side claims
// remain product-verified throughout.
function comparePage({ slug, name, shortName, category, title, description, concedeThem, concedeJwero, rows, faqs, waCtx, migrationNote, researchNote }) {
  return {
    slug: `compare/jwero-vs-${slug}`,
    title: title || `Jwero vs ${name} — An Honest Comparison | Jwero`,
    description: description || `How Jwero compares to ${name}: what ${shortName || name} does well, what Jwero does differently, and an honest feature matrix sourced from public research.`,
    breadcrumbs: BC(`Jwero vs ${shortName || name}`),
    schema: { '@context': 'https://schema.org', '@type': 'Article', headline: `Jwero vs ${name}` },
    faqs: faqs || [],
    body: `
${L.hero({
  eyebrow: `COMPARE · JWERO VS ${(shortName || name).toUpperCase()}`,
  h1: `Jwero vs ${name}`,
  sub: `${name} is ${category}. Here is where it genuinely wins, where Jwero is built differently, and what we haven’t independently verified — marked plainly rather than asserted.`,
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: waCtx },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}
${L.section(L.verdictBox(shortName || name, concedeThem, concedeJwero))}
${L.section(
  `${L.sectionHead('THE HONEST MATRIX', '', researchNote || `Jwero claims below are product-verified. ${name} claims are sourced from its own public marketing and independent review/pricing sites, checked July 2026 — anything more specific than that is marked [VERIFY].`)}
  ${L.compareTable(name, rows)}`
, { tone: 'tint' })}
${L.section(`${L.sectionHead('WHAT SWITCHERS SWITCH FOR', '', '')}${L.switchForBlock()}`)}
${L.section(`<div class="stack-verdict">${migrationNote || `Switching is a data question, not a leap of faith. See the <a href="/migration">Migration Centre</a> for exactly what moves and how.`}</div>`)}
${faqs && faqs.length ? L.section(`${L.sectionHead('QUESTIONS SWITCHERS ASK', '', '')}${L.faqBlock(faqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`) : ''}
${L.ctaBand(`Plan the switch from ${shortName || name}.`, 'Tell us what you use today — we’ll map exactly what carries over and what changes.', waCtx)}
`,
  };
}

const compareHub = {
  slug: 'compare',
  title: 'Compare Jwero to Alternatives | Jwero',
  description: 'Honest, concession-first, publicly-researched comparisons: jewellery ERPs, WhatsApp tools, catalogue-sharing apps, generic CRMs and ecommerce platforms — against the Jwero operating system.',
  breadcrumbs: [['Home', '/'], ['Compare']],
  body: `
${L.hero({
  eyebrow: 'COMPARE',
  h1: 'Choose with the full picture, not a pitch.',
  sub: 'Every comparison below concedes what the alternative genuinely does well, states what Jwero does differently, and sources every specific claim — publicly researched July 2026, cited where a number is used.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'compare-hub' },
  secondary: { href: '/migration', label: 'See the Migration Centre' },
})}
${L.section(
  `${L.sectionHead('CATEGORY LEVEL', '', '')}
  ${L.cards([
    { title: 'WhatsApp tools vs a jewellery operating system', text: 'The honest difference between a messaging layer and the system underneath it.', link: { href: '/compare/whatsapp-tools-vs-jewellery-os', label: 'Compare' } },
  ])}`
)}
${L.section(
  `${L.sectionHead('JEWELLERY ERP & ACCOUNTING-FIRST', '', '')}
  ${L.cards([
    { title: 'Jwero vs Ornate NX', text: 'Touchscreen POS, karigar contacts and real-time accounting for Indian jewellery retail.', link: { href: '/compare/jwero-vs-ornate-nx', label: 'Compare' } },
    { title: 'Jwero vs Synergics', text: 'Concept-to-customer manufacturing ERP used by 150+ jewellery businesses (per Synergics).', link: { href: '/compare/jwero-vs-synergics', label: 'Compare' } },
    { title: 'Jwero vs JewelAcc', text: 'Production, sales, purchase, billing and hardware-integrated jewellery ERP.', link: { href: '/compare/jwero-vs-jewelacc', label: 'Compare' } },
    { title: 'Jwero vs Marg ERP', text: 'A general retail billing ERP with GST/e-invoicing depth, widely used across trades.', link: { href: '/compare/jwero-vs-marg', label: 'Compare' } },
  ], 4)}`
, { tone: 'tint' })}
${L.section(
  `${L.sectionHead('OPERATING SYSTEM & ENGAGEMENT PLATFORMS', '', '')}
  ${L.cards([
    { title: 'Jwero vs SIONIQ', text: 'A broad jewellery ERP spanning manufacturing to bullion, that also uses a "Jewelry Operating System" label.', link: { href: '/compare/jwero-vs-sioniq', label: 'Compare' } },
    { title: 'Jwero vs Zithara', text: 'An AI-first retail CRM with named jewellery-brand customers (Palmonas, Ernesto Buono).', link: { href: '/compare/jwero-vs-zithara', label: 'Compare' } },
  ])}`
)}
${L.section(
  `${L.sectionHead('WHATSAPP & MESSAGING TOOLS', '', '')}
  ${L.cards([
    { title: 'Jwero vs WATI', text: 'A WhatsApp Business API tool with published pricing from roughly $39–229/month.', link: { href: '/compare/jwero-vs-wati', label: 'Compare' } },
    { title: 'Jwero vs Interakt', text: 'A WhatsApp commerce tool priced from ₹3,499/quarter, backed by Haptik AI agents.', link: { href: '/compare/jwero-vs-interakt', label: 'Compare' } },
    { title: 'Jwero vs DoubleTick', text: 'A WhatsApp sales CRM with image-recognition cart-building, from ~$142/month annual.', link: { href: '/compare/jwero-vs-doubletick', label: 'Compare' } },
    { title: 'Jwero vs QuickSell', text: 'India’s widely-used catalogue-sharing app, with bullion-rate pricing already built in.', link: { href: '/compare/jwero-vs-quicksell', label: 'Compare' } },
  ], 4)}`
, { tone: 'tint' })}
${L.section(
  `${L.sectionHead('ECOMMERCE & GENERIC CRM', '', '')}
  ${L.cards([
    { title: 'Jwero vs Shopify', text: 'The category-leading ecommerce platform, from $39/month for a solo storefront.', link: { href: '/compare/jwero-vs-shopify', label: 'Compare' } },
    { title: 'Jwero vs Zoho CRM', text: 'A mature horizontal CRM, free for 3 users up to $52/user/month.', link: { href: '/compare/jwero-vs-zoho-crm', label: 'Compare' } },
  ])}`
)}
${L.section(`<p style="font-size:.85rem; color:var(--ink-2);">Using something not listed here? <a href="#" data-wa="compare-hub">Tell us on WhatsApp</a> and we’ll build an honest, researched comparison.</p>`)}
`,
};

const ornateNx = comparePage({
  slug: 'ornate-nx', name: 'Ornate NX', shortName: 'Ornate NX',
  category: 'a jewellery ERP by Ornate Software with a touchscreen POS, karigar/artisan contact management, real-time financial accounting and a CRM/loyalty module, built for Indian diamond jewellery traders',
  concedeThem: 'you need touchscreen counter billing, karigar and artisan contact management, and real-time financial reporting (balance sheets, MIS) refined specifically for Indian jewellery retail over years — Ornate NX is built around exactly this.',
  concedeJwero: 'you want the customer, the catalogue and every selling channel — WhatsApp, Instagram, storefront — to share one record, with a governed AI workforce handling follow-up. Most businesses run both: Ornate NX for the counter and ledger, Jwero for the revenue side.',
  waCtx: 'ornate',
  researchNote: 'Ornate NX facts are sourced from ornatesoftware.com and independent listings (SoftwareSuggest, Capterra India, Techjockey) checked July 2026. Ornate NX does not publish pricing — it is quote-on-request.',
  rows: [
    { label: 'Touchscreen counter POS billing', jwero: 'Roadmap', jweroRoadmap: true, other: 'Yes — a named feature (touchscreen, product-selection, sales returns)' },
    { label: 'Karigar/artisan contact management', jwero: 'Yes — via job-work module', other: 'Yes — built into the platform' },
    { label: 'One customer record across WhatsApp, Instagram, storefront', jwero: 'Yes — 90+ fields, one record', other: '[VERIFY — CRM module exists; omnichannel scope not public]' },
    { label: 'Governed AI workforce (approvals, caps, kill switch)', jwero: 'Yes — 240+ actions, 5 kill-switch scopes', other: '[VERIFY — not found in public materials]' },
    { label: 'Live gold-rate catalogue pricing', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Gold savings schemes & digital gold', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Published pricing', jwero: '[Being finalised — see /pricing]', other: 'Quote-on-request; not published' },
  ],
  faqs: [
    { q: 'Does Jwero replace Ornate NX?', a: 'Not necessarily on day one — most businesses keep their billing ERP and add Jwero for the revenue side: customers, channels, schemes, follow-up. See the <a href="/migration">Migration Centre</a>.' },
    { q: 'Which one handles counter billing better?', a: 'Ornate NX has a named touchscreen POS with sales returns and loyalty built in — genuinely ahead here today. Jwero’s POS counter is on our roadmap; Billing & Finance covers GST invoicing at the live rate in the meantime.' },
    { q: 'Does Ornate NX have an omnichannel WhatsApp/Instagram inbox?', a: 'Its CRM module manages customer interactions and loyalty programs, but we could not verify a WhatsApp Business API or Instagram DM integration in public materials — ask Ornate directly for current scope, or ask us for a side-by-side demo.' },
  ],
});

const synergics = comparePage({
  slug: 'synergics', name: 'Synergics', shortName: 'Synergics',
  category: 'a "concept-to-customer" jewellery ERP unifying manufacturing, inventory, retail POS, CRM, finance and GST/hallmarking compliance, used by 150+ jewellery businesses per Synergics’ own materials',
  concedeThem: 'you need mature manufacturing-to-retail ERP depth — dual-unit (metal + diamond) inventory, RFID/barcode, OTP and whitelisted-IP security, and automated GST/HSN/hallmarking compliance reporting — refined for an installed base Synergics states at 150+ businesses.',
  concedeJwero: 'you want customer memory, WhatsApp/Instagram selling and a governed AI workforce on the same record as your operations. Most businesses run both side by side: Synergics for the ledger and shop floor, Jwero for the revenue side.',
  waCtx: 'synergics',
  researchNote: 'Synergics facts are sourced from synergicssolutions.com (checked July 2026), including its own "150+ businesses" and "AI-powered analytics" claims, quoted here as Synergics’ own positioning, not independently verified by us.',
  rows: [
    { label: 'Manufacturing-to-retail ERP depth', jwero: '[VERIFY per module — see /products/erp]', other: '"Concept-to-customer" — a named strength, per Synergics' },
    { label: 'Compliance automation (GST/HSN/hallmarking)', jwero: 'GST invoicing at live rate; e-invoice on roadmap', jweroRoadmap: false, other: 'Automated GST/HSN/hallmarking reports claimed' },
    { label: 'One customer record across every channel', jwero: 'Yes — 90+ fields, one record', other: '[VERIFY — CRM module exists; omnichannel/WhatsApp scope not public]' },
    { label: 'Governed AI workforce (approvals, caps, kill switch)', jwero: 'Yes — 240+ actions, approval queues', other: '"AI-powered analytics" claimed; governance model [VERIFY]' },
    { label: 'WhatsApp/Instagram commerce, official API', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Gold-loss WIP ledger', jwero: 'Yes — per-stage norms, abnormal-loss flags', other: '[VERIFY — manufacturing module exists, loss-tracking granularity not public]' },
  ],
  faqs: [
    { q: 'Can I keep Synergics and add Jwero?', a: 'Yes — most businesses keep their ERP for the ledger and manufacturing backbone, and add Jwero for customers, channels and AI-driven follow-up.' },
    { q: 'Does Synergics really have 150+ customers?', a: 'That figure is stated on Synergics’ own site; we have not independently verified it, and we say so rather than repeat it as fact.' },
  ],
});

const jewelacc = comparePage({
  slug: 'jewelacc', name: 'JewelAcc', shortName: 'JewelAcc',
  category: 'an ERP for jewellery manufacturers and distributors covering inventory, production, sales/purchase, billing and accounting, with pre-built hardware integrations (scales, barcode scanners, RFID)',
  concedeThem: 'you want a manufacturer/distributor-focused ERP with hardware pre-integration already solved — jewellery scales, barcode printers and scanners, RFID — plus a genuine free trial to test before buying.',
  concedeJwero: 'accounting and production tracking are only part of the job — you also want customer memory, WhatsApp/Instagram selling and a governed AI workforce sharing one record with the books.',
  waCtx: 'jewelacc',
  researchNote: 'JewelAcc facts are sourced from jewelacc.com and independent listings (TechnologyEvaluation, SoftwareSuggest, TechnologyCounter), checked July 2026. JewelAcc uses tiered, quote-based pricing by business size and complexity; a free trial is offered.',
  rows: [
    { label: 'Hardware pre-integration (scales, barcode, RFID)', jwero: '[VERIFY current hardware partner list]', other: 'Yes — a named strength' },
    { label: 'Deployment flexibility (cloud / on-premise / hybrid)', jwero: 'Cloud only', other: 'Cloud, on-premise and hybrid offered' },
    { label: 'Customer memory across channels', jwero: 'Yes — 90+ fields, one record', other: '[VERIFY — CRM described as a module; field depth not public]' },
    { label: 'WhatsApp/Instagram commerce', jwero: 'Yes — official APIs', other: '[VERIFY]' },
    { label: 'Governed AI workforce', jwero: 'Yes — 240+ actions, approval queues', other: '[VERIFY]' },
    { label: 'Free trial available', jwero: '[VERIFY — pilot with your own data is our current offer]', other: 'Yes — publicly stated' },
  ],
  faqs: [
    { q: 'Does Jwero do jewellery-specific accounting like JewelAcc?', a: 'Jwero bridges to Tally and Zoho Books for statutory accounting rather than replacing an accounting-first tool. If hardware-integrated production and accounting depth is your primary need, JewelAcc may be the right fit for that layer — Jwero adds the customer and channel side around it.' },
    { q: 'Can I trial JewelAcc before switching?', a: 'JewelAcc states a trial option is available — ask them directly for current terms. Jwero’s equivalent is a supervised pilot using your own real customer data.' },
  ],
});

const marg = comparePage({
  slug: 'marg', name: 'Marg ERP', shortName: 'Marg',
  category: 'a widely-used general retail billing ERP (₹18,500/piece as listed on IndiaMART) with touchscreen POS, barcode scanning, e-invoicing and GST e-way bill filing, used across many trades including jewellery',
  concedeThem: 'you want e-invoicing and GST e-way bill generation built in today, a large support organisation (Marg states 250+ support staff and 500+ tutorial videos), and a specific, publicly listed price point rather than a quote-on-request process.',
  concedeJwero: 'you want a system built jewellery-first — live gold-rate pricing, purity/HUID catalogue fields, gold schemes and digital gold — with customers and every selling channel on the same record, not adapted from a general retail template.',
  waCtx: 'marg',
  researchNote: 'Marg facts are sourced from margcompusoft.com and an IndiaMART listing (₹18,500/piece, checked July 2026) — a distributor-listed price point, not necessarily Marg’s only or current pricing tier. Verify directly with Marg for your exact requirement.',
  rows: [
    { label: 'Published price point', jwero: 'Being finalised — see /pricing', other: '₹18,500/piece, per an IndiaMART listing [VERIFY current/other tiers]' },
    { label: 'E-invoicing & GST e-way bill generation', jwero: 'Roadmap', jweroRoadmap: true, other: 'Yes — a named, shipped feature' },
    { label: 'Touchscreen counter POS with old-gold/exchange handling', jwero: 'Roadmap for POS; exchange tracked on customer record today', jweroRoadmap: true, other: 'Yes — named features' },
    { label: 'Live gold-rate catalogue pricing', jwero: 'Yes', other: '[VERIFY — not jewellery-specific by design; rate-linking not confirmed]' },
    { label: 'Purity, HUID-aware catalogue fields', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Gold schemes & digital gold', jwero: 'Yes', other: '[VERIFY — loyalty/promotions exist; scheme-specific engine not confirmed]' },
    { label: 'Governed AI workforce + WhatsApp/Instagram commerce', jwero: 'Yes', other: '[VERIFY]' },
  ],
  faqs: [
    { q: 'Is Marg jewellery-specific?', a: 'Marg is a general retail billing ERP used across many trades, including jewellery, with a jewellery-adapted package. Jwero is built jewellery-first — live gold-rate pricing, purity and HUID-aware catalogue fields, and gold schemes are native, not adapted.' },
    { q: 'Does Marg really cost ₹18,500?', a: 'That is one distributor’s IndiaMART listing for the jewellery package we found in research — pricing likely varies by edition, users and region. Confirm directly with Marg for your case.' },
    { q: 'Marg already does e-invoicing — why would I switch?', a: 'If e-invoicing and GST e-way billing are your primary need today, Marg has that shipped and we don’t. We’d rather say so than pretend otherwise — <a href="/roadmap">it’s on our public roadmap</a>.' },
  ],
});

const sioniq = comparePage({
  slug: 'sioniq', name: 'SIONIQ', shortName: 'SIONIQ',
  category: 'a jewellery ERP integrating inventory, POS, CRM, manufacturing, accounting, ecommerce, digital gold, HR and repair/scheme modules, serving manufacturers, wholesalers, retailers, bullion traders and multi-chain businesses via SaaS, cloud or on-premise deployment — and one that also uses a "Jewelry Operating System" label',
  concedeThem: 'SIONIQ genuinely spans the widest module list we found in this research — including HR and digital gold alongside the usual ERP core — and serves the full value chain from manufacturer to bullion trader, with an earlier head start using an operating-system framing.',
  concedeJwero: 'you want the OS claim demonstrated, not just listed: one customer record, one catalogue, one inventory truth, one inbox — with a governed AI workforce (approval queues, daily caps, a five-scope kill switch) that we can show working, not just name as a module.',
  waCtx: 'sioniq',
  researchNote: 'SIONIQ facts are sourced from sioniqerp.com and Capterra (checked July 2026), including its own "AI and machine learning" claim, quoted as SIONIQ’s own positioning. SIONIQ does not publish pricing publicly.',
  rows: [
    { label: 'Module breadth (incl. HR, digital gold, repair, scheme)', jwero: 'Core modules yes; payroll/HR is roadmap', jweroRoadmap: false, other: 'Broadest module list found in this research — a named strength' },
    { label: 'Serves manufacturers through bullion traders in one platform', jwero: 'Yes — same platform across segments', other: 'Yes — stated as a core positioning point' },
    { label: 'One-record architecture demonstrated, not just listed', jwero: 'Yes — see /platform for the live demo', other: '[VERIFY — modules are listed; a unified-record demo was not found publicly]' },
    { label: 'Governed AI workforce (approvals, caps, kill switch)', jwero: 'Yes — 240+ actions, 5 kill-switch scopes, all product-verified', other: '"AI and machine learning" claimed for analytics; approval/governance model [VERIFY]' },
    { label: 'Category label used', jwero: '"The AI Operating System for Jewellery Business"', other: 'Uses "Jewelry Operating System" framing per its own materials' },
    { label: 'Published pricing', jwero: 'Being finalised — see /pricing', other: 'Not publicly listed' },
  ],
  faqs: [
    { q: 'Why compare against a direct label rival honestly rather than avoid it?', a: 'Because our own honesty policy applies here too — SIONIQ genuinely has the broadest module list of anything we researched, including HR and digital gold. We’d rather concede that plainly and differentiate on what we can actually demonstrate: the governed AI workforce and the one-record architecture, live.' },
    { q: 'Does SIONIQ have the same AI governance model as Jwero?', a: 'SIONIQ states it uses AI and machine learning for analytics and sales trends. We could not find public detail on approval queues, daily caps or a kill switch specifically — ask SIONIQ directly, or see our approval queue working live at <a href="/platform/ai-workforce">/platform/ai-workforce</a>.' },
  ],
});

const zithara = comparePage({
  slug: 'zithara', name: 'Zithara', shortName: 'Zithara',
  category: 'an AI-first retail CRM (founded 2021) with a customer data platform, omnichannel campaigner and RFM segmentation, serving jewellery, luxury, electronics and wellness retailers — stated at 300+ brands, with named jewellery customers including Palmonas and Ernesto Buono Fine Jewellery',
  concedeThem: 'Zithara has real, named jewellery-brand customers and public case studies we could verify — a Palmonas partnership, an Australian expansion via Ernesto Buono Fine Jewellery, and a stated 20% ROI result for retailer Q-Mart’s loyalty program. That is proof Jwero does not yet have, and we say so plainly rather than compete on claims we can’t back.',
  concedeJwero: 'you want jewellery-native fields — scheme balances, purity, live gold-rate pricing — and full operations (inventory, orders, manufacturing) on the same record as engagement, not a CRM layer sitting on top of a separate operational system.',
  waCtx: 'zithara',
  researchNote: 'Zithara facts are sourced from zithara.ai, Indian Television, Telangana Today and PR coverage of its customer partnerships (checked July 2026) — Zithara’s named case studies are independently reported, not just self-claimed.',
  rows: [
    { label: 'Named jewellery-brand customers with public case studies', jwero: '[VERIFY — Lighthouse Partner program in progress, no public case studies yet]', other: 'Yes — Palmonas, Ernesto Buono Fine Jewellery (Australia), Q-Mart (20% ROI on loyalty)' },
    { label: 'Customer data platform / omnichannel campaigner', jwero: 'Yes — one customer record across channels', other: 'Yes — a named, central product feature' },
    { label: 'Bridal-specific CRM segmentation', jwero: 'Via journeys/occasions on the customer record', other: 'Yes — a named product feature' },
    { label: 'Jewellery-native fields (scheme balance, purity, live gold rate)', jwero: 'Yes — 90+ fields, native', other: '[VERIFY — Zithara also serves electronics/wellness/luxury, not jewellery-exclusive]' },
    { label: 'Full operations (inventory, orders, manufacturing) on the same record', jwero: 'Yes — one system', other: '[VERIFY — positioned as a CRM/engagement layer, not an operations ERP]' },
    { label: 'Governed AI workforce (approvals, caps, kill switch)', jwero: 'Yes — 240+ actions, 5 kill-switch scopes', other: 'AI-powered bots and segmentation described; specific governance model [VERIFY]' },
  ],
  faqs: [
    { q: 'Is Zithara jewellery-specific?', a: 'No — Zithara serves jewellery, luxury, electronics and wellness retailers with the same platform. It does have named jewellery customers (Palmonas, Ernesto Buono Fine Jewellery) and a bridal-CRM feature built for jewellery specifically.' },
    { q: 'Zithara has real case studies and Jwero doesn’t yet — why should I consider Jwero?', a: 'That’s a fair question and we won’t dodge it: Zithara’s proof is real and ahead of ours today. What we can offer instead is a live, testable product (this site’s own WhatsApp button runs on Jwero) and a weekly growth report generated from your own data from week one — proof you build yourself rather than borrow from someone else’s case study.' },
  ],
});

const wati = comparePage({
  slug: 'wati', name: 'WATI', shortName: 'WATI',
  category: 'an official WhatsApp Business API platform with an omnichannel inbox (WhatsApp, Instagram, Facebook, web), a no-code AI chatbot builder and CRM integrations, publicly priced from roughly $39–229/month across three tiers',
  concedeThem: 'you only need official WhatsApp/Instagram/Facebook messaging with a no-code chatbot builder and CRM integrations (Shopify, HubSpot, Salesforce) — WATI’s published pricing (roughly $39–229/month depending on tier, plus a ~20% markup over Meta’s per-message fees) is transparent and lower-entry than most jewellery-specific platforms.',
  concedeJwero: 'you want every WhatsApp reply to come from a system that also holds the catalogue, the CRM and the operation — so a conversation can become a priced sale, not just a sent message.',
  waCtx: 'wati',
  researchNote: 'WATI facts and pricing are sourced from wati.io/pricing and independent pricing breakdowns (checked July 2026); published tiers and exact prices may vary by region and change over time — confirm current numbers directly with WATI.',
  rows: [
    { label: 'Official WhatsApp Business API', jwero: 'Yes', other: 'Yes' },
    { label: 'Published pricing', jwero: 'Being finalised — see /pricing', other: '~$39–229/month across 3 tiers, + ~20% markup on Meta message fees' },
    { label: 'Omnichannel inbox (WhatsApp + Instagram + Facebook + web)', jwero: 'Yes — one inbox, one customer record', other: 'Yes — a named platform feature' },
    { label: 'Knows customer purchase/scheme history in a reply', jwero: 'Yes — one shared record', other: '[VERIFY — CRM integrations exist (HubSpot/Salesforce); native jewellery fields not applicable]' },
    { label: 'Live gold-rate priced replies', jwero: 'Yes', other: 'No — not a jewellery-specific product' },
    { label: 'Governed AI drafting (approvals, caps, kill switch)', jwero: 'Yes — 240+ actions, 5 kill-switch scopes', other: 'No-code AI chatbot builder exists; specific governance model [VERIFY]' },
    { label: 'Catalogue, CRM and inventory in the same system', jwero: 'Yes', other: 'No — messaging platform; catalogue/CRM depth via integrations only' },
  ],
  faqs: [
    { q: 'Isn’t WATI cheaper?', a: 'For pure messaging, likely yes — its published plans run roughly $39–229/month. The comparison is about what a reply can know: WATI sends messages well; Jwero’s replies come from the same record as your CRM, catalogue and schemes.' },
    { q: 'Does WATI have AI like Jwero’s AI workforce?', a: 'WATI offers a no-code AI chatbot builder. We could not verify an approval-queue/daily-cap/kill-switch governance model in public materials — that specific architecture is what Jwero’s AI workforce is built around.' },
  ],
});

const interakt = comparePage({
  slug: 'interakt', name: 'Interakt', shortName: 'Interakt',
  category: 'a WhatsApp Business API commerce and marketing tool with shop-and-pay-via-chat, Shopify/WooCommerce integration and Haptik-powered AI agents, publicly priced from ₹3,499/quarter',
  concedeThem: 'you want transparent, India-priced WhatsApp commerce tooling (₹3,499/quarter Starter up to ₹10,499/quarter Advanced, per Interakt’s published pricing) with Shopify/WooCommerce integration and AI agents for FAQ automation and order management already built by Haptik’s enterprise AI platform.',
  concedeJwero: 'you sell jewellery specifically — live gold-rate pricing, purity fields, gold schemes and digital gold need to be native fields the whole system acts on, not generic ecommerce catalogue fields repurposed.',
  waCtx: 'interakt',
  researchNote: 'Interakt facts and pricing are sourced from interakt.shop/pricing-us and independent pricing breakdowns (checked July 2026); confirm current tiers directly as WhatsApp commerce pricing changes frequently.',
  rows: [
    { label: 'Published pricing', jwero: 'Being finalised — see /pricing', other: '₹3,499–10,499/quarter across 3 tiers; custom Enterprise (+ Meta conversation fees)' },
    { label: 'Shop-and-pay-via-chat, Shopify/WooCommerce integration', jwero: 'Yes — plus Tally/Zoho Books bridge for accounting', other: 'Yes — a named strength' },
    { label: 'AI agents for FAQ, booking, order management', jwero: 'Yes — 240+ jewellery-specific actions', other: 'Yes — via Haptik’s enterprise AI platform' },
    { label: 'Live gold-rate pricing', jwero: 'Yes', other: 'No — general ecommerce catalogue, not jewellery-specific' },
    { label: 'Gold schemes & digital gold', jwero: 'Yes', other: 'No' },
    { label: 'Governed AI drafting with approval queues', jwero: 'Yes — 240+ actions, 5 kill-switch scopes', other: '[VERIFY — Haptik AI agents exist; approval-queue governance model not confirmed]' },
    { label: 'One record across CRM, catalogue, operations', jwero: 'Yes', other: 'No — commerce/messaging layer; operations (inventory, manufacturing) not in scope' },
  ],
  faqs: [
    { q: 'Can Interakt handle gold-rate pricing?', a: 'It’s built as a general ecommerce WhatsApp commerce tool with Shopify/WooCommerce integration, not jewellery-specific — we found no evidence of live gold-rate pricing. Jwero’s catalogue prices follow the live gold rate natively.' },
    { q: 'Interakt’s AI agents are powered by Haptik — is that better than Jwero’s AI workforce?', a: 'Haptik is a real, established enterprise AI platform, and Interakt’s agents handle FAQ and order-management tasks well for general ecommerce. Jwero’s AI workforce is built specifically around jewellery actions (scheme reminders, occasion invites, live-rate quoting) inside an approval-queue governance model.' },
  ],
});

const doubletick = comparePage({
  slug: 'doubletick', name: 'DoubleTick', shortName: 'DoubleTick',
  category: 'a phone-based WhatsApp Business API sales CRM with a unified team inbox, AI-based image recognition (product photo → cart) and enterprise CRM integrations, priced from roughly $142/month on an annual-only commitment',
  concedeThem: 'you want a WhatsApp-first sales team inbox with a genuinely novel feature — AI image recognition that adds a product to cart from a customer’s photo — and you’re comfortable with DoubleTick’s annual-only commitment (no monthly option, starting around $142/month billed yearly, per its published pricing).',
  concedeJwero: 'you want the WhatsApp inbox to be one part of a system that also remembers the customer, prices at the live rate and runs schemes — not a standalone messaging layer, and you want monthly billing available at entry.',
  waCtx: 'doubletick',
  researchNote: 'DoubleTick facts and pricing are sourced from doubletick.io and independent pricing/review breakdowns (checked July 2026); confirm current terms directly as pricing and commitment structure may change.',
  rows: [
    { label: 'Published pricing', jwero: 'Being finalised — monthly billing planned at entry, see /pricing', other: '~$142/month, billed annually only (no monthly option)' },
    { label: 'Team WhatsApp inbox', jwero: 'Yes — one inbox across WhatsApp, Instagram, Facebook', other: 'Yes — a named platform feature' },
    { label: 'AI image-recognition cart-building (photo → order)', jwero: '[VERIFY — not a current Jwero feature]', other: 'Yes — a genuinely novel, named feature' },
    { label: 'Live gold-rate catalogue pricing', jwero: 'Yes', other: 'No — not a jewellery-specific product' },
    { label: 'Customer record shared with catalogue & schemes', jwero: 'Yes', other: 'No — messaging/sales-CRM layer, no jewellery catalogue or scheme engine' },
    { label: 'Governed AI drafting (approvals, caps, kill switch)', jwero: 'Yes — 240+ actions, 5 kill-switch scopes', other: 'AI agents and enterprise governance features exist; specific model [VERIFY]' },
  ],
  faqs: [
    { q: 'What does DoubleTick not do that Jwero does?', a: 'As a WhatsApp-focused sales CRM, it does not appear to hold jewellery-specific catalogue pricing, scheme balances or manufacturing/inventory records — those live natively on Jwero’s shared customer record.' },
    { q: 'Is DoubleTick’s image-recognition feature better than anything Jwero has?', a: 'It’s a genuinely distinctive feature we don’t have a direct equivalent to — a customer photo automatically becomes a cart item. Worth conceding plainly rather than ignoring.' },
  ],
});

const quicksell = comparePage({
  slug: 'quicksell', name: 'QuickSell', shortName: 'QuickSell',
  category: 'a mobile-first catalogue-commerce app used widely by Indian jewellery and apparel sellers, with jewellery-specific features already built in — gram-based selling, diamond rate fields and automatic daily price updates based on bullion rates — stated at 2 lakh+ businesses',
  concedeThem: 'QuickSell already has jewellery-native pricing we initially underestimated in this comparison: gram-based selling, diamond-rate catalogue fields, and automatic daily repricing against bullion rates, plus B2B/B2C differentiated pricing and password/OTP-protected, screenshot-blocked catalogue sharing. If fast, lightweight catalogue sharing with live bullion pricing is genuinely all you need, QuickSell does that well.',
  concedeJwero: 'catalogue sharing with live pricing is the beginning, not the whole job — you also want customer memory (scheme balances, occasions, taste), a governed AI workforce that drafts replies and follow-ups, and inventory/operations sharing the same record as the catalogue.',
  waCtx: 'quicksell',
  researchNote: 'QuickSell facts are sourced from quicksell.co and app-store listings (checked July 2026), including its own "India’s No.1" and "2 lakh+ businesses" claims, quoted as QuickSell’s own positioning, not independently verified by us. This entry was corrected during research: QuickSell does have live bullion-rate pricing, contrary to an earlier draft of this page.',
  rows: [
    { label: 'Catalogue sharing on WhatsApp/Instagram', jwero: 'Yes, on the same record as CRM and schemes', other: 'Yes — a core, named strength' },
    { label: 'Live bullion/gold-rate catalogue pricing', jwero: 'Yes', other: 'Yes — automatic daily repricing against bullion rates (a named feature)' },
    { label: 'Diamond-rate and gram-based selling fields', jwero: 'Yes — purity/certification catalogue fields', other: 'Yes — named jewellery-specific features' },
    { label: 'B2B/B2C differentiated pricing on the same catalogue', jwero: 'Yes — via price rules and role-based visibility', other: 'Yes — a named feature' },
    { label: 'Customer memory (90+ fields, scheme balances, occasions)', jwero: 'Yes', other: '[VERIFY — positioned as catalogue-commerce, not a CRM]' },
    { label: 'Gold schemes & digital gold', jwero: 'Yes', other: '[VERIFY — no evidence found of a scheme/digital-gold engine]' },
    { label: 'Governed AI workforce (approvals, caps, kill switch)', jwero: 'Yes — 240+ actions, 5 kill-switch scopes', other: '[VERIFY — not found in public materials]' },
    { label: 'Inventory & operations (repairs, manufacturing, orders)', jwero: 'Yes — one system', other: '[VERIFY — inventory tracking exists for catalogue purposes; full ops not evidenced]' },
  ],
  faqs: [
    { q: 'Does QuickSell already do live gold-rate pricing?', a: 'Yes — QuickSell states automatic daily price changes based on bullion rates. We got this wrong in an earlier draft of this page and corrected it once we actually checked; the real differentiation is customer memory, schemes and operations sharing one record, not catalogue pricing.' },
    { q: 'Is QuickSell enough for a small jewellery business?', a: 'If fast, lightweight catalogue sharing with live bullion pricing is genuinely all you need, QuickSell does that well and is widely used. The gap shows up the moment you want the catalogue, the customer relationship and the operation to share one record.' },
  ],
});

const shopify = comparePage({
  slug: 'shopify', name: 'Shopify', shortName: 'Shopify',
  category: 'the category-leading general-purpose ecommerce platform, publicly priced from $39/month (Basic) up to $399/month (Advanced) and custom Shopify Plus pricing from $2,300/month',
  concedeThem: 'you want the deepest ecommerce app ecosystem and storefront flexibility available anywhere, at a transparent, published price ($39–399/month for most jewellery-sized businesses) — Shopify genuinely leads here, and we’re not pretending otherwise.',
  concedeJwero: 'you want live gold-rate pricing, jewellery-native catalogue fields, and WhatsApp/Instagram-native selling with a shared customer record — on top of the storefront you already have.',
  waCtx: 'shopify',
  researchNote: 'Shopify pricing is sourced from Shopify’s own pricing page and independent breakdowns (checked July 2026): Basic $39/mo ($29/mo billed annually), Grow $105/mo, Advanced $399/mo, Plus from $2,300/mo. Confirm current tiers directly as ecommerce platform pricing changes often.',
  rows: [
    { label: 'Storefront & app ecosystem', jwero: 'Bridges to Shopify rather than replacing the storefront', other: 'Deepest in the industry — genuinely ahead' },
    { label: 'Published pricing (entry tier)', jwero: 'Being finalised — see /pricing', other: '$39/month (Basic), or $29/month billed annually' },
    { label: 'Live gold-rate pricing', jwero: 'Yes', other: 'No — not jewellery-specific by design' },
    { label: 'WhatsApp/Instagram-native commerce', jwero: 'Yes — official APIs, one shared inbox', other: '[VERIFY — via third-party apps, not native]' },
    { label: 'Gold schemes & digital gold', jwero: 'Yes', other: 'No' },
    { label: 'Governed AI workforce', jwero: 'Yes — 240+ actions, 5 kill-switch scopes', other: '[VERIFY — a 2026 "Agentic" plan targets AI-assistant selling; jewellery-specific governance not applicable]' },
    { label: 'Coexistence: keep your existing store', jwero: 'Yes — Shopify connector syncs products & orders', other: '—' },
  ],
  migrationNote: 'This isn’t a rip-and-replace pitch — most Shopify-based jewellery brands keep their store and add Jwero for the channels and pricing Shopify doesn’t do natively. See <a href="/solutions/d2c-brands">the D2C solution page</a>.',
  faqs: [
    { q: 'Do I need to leave Shopify?', a: 'No — the Shopify connector keeps your store running. Jwero adds WhatsApp/Instagram-native selling, live-rate pricing and customer memory on top.' },
    { q: 'How much does Shopify actually cost for a jewellery store?', a: 'Basic is $39/month ($29/month if billed annually) for a solo storefront; most growing stores move to Grow at $105/month. Transaction fees, payment processing and apps add to that — see Shopify’s own pricing page for your case.' },
  ],
});

const zohoCrm = comparePage({
  slug: 'zoho-crm', name: 'Zoho CRM', shortName: 'Zoho CRM',
  category: 'a mature, general-purpose horizontal CRM publicly priced from free (3 users) up to $52/user/month (Ultimate), with an AI assistant (Zia) included from the Enterprise tier',
  concedeThem: 'you want broad, mature, transparently-priced CRM functionality — free for 3 users, then $14–52/user/month across four tiers, with Zia (Zoho’s own AI assistant) included from Enterprise — and you don’t need jewellery-specific fields.',
  concedeJwero: 'you’re selling jewellery specifically — scheme balances, occasions, purity preferences and live-rate context need to be structured fields the system acts on, not custom fields bolted onto a generic CRM.',
  waCtx: 'zohocrm',
  researchNote: 'Zoho CRM pricing is sourced from zoho.com/crm/zohocrm-pricing.html and independent breakdowns (checked July 2026): Free (3 users), Standard $14/user/mo, Professional $23/user/mo, Enterprise $40/user/mo (incl. Zia AI), Ultimate $52/user/mo, billed annually.',
  rows: [
    { label: 'Published pricing (entry to top tier)', jwero: 'Being finalised — see /pricing', other: 'Free (3 users) to $52/user/month (Ultimate)' },
    { label: 'General CRM maturity (pipelines, deals, reports)', jwero: '[VERIFY breadth vs a dedicated horizontal CRM]', other: 'Broad and mature — genuinely ahead here' },
    { label: 'Built-in AI assistant', jwero: 'Yes — AI workforce, 240+ jewellery-specific actions', other: 'Yes — Zia, from Enterprise tier ($40/user/mo)' },
    { label: 'Jewellery-native fields (scheme balance, purity, occasions)', jwero: 'Yes — 90+ fields, native', other: 'No — would require custom-field workarounds' },
    { label: 'Live gold-rate catalogue pricing', jwero: 'Yes', other: 'No' },
    { label: 'WhatsApp/Instagram commerce, official APIs', jwero: 'Yes — native, one shared inbox', other: '[VERIFY — via integrations/marketplace apps]' },
    { label: 'Inventory, orders & manufacturing on the same record', jwero: 'Yes', other: 'No — CRM layer only' },
  ],
  faqs: [
    { q: 'Why not just customise Zoho CRM for jewellery?', a: 'You can, with enough custom fields and integrations — but you’d be rebuilding, by hand, what Jwero ships natively: scheme balances, purity, live-rate pricing and channel commerce sharing one record.' },
    { q: 'Zoho has Zia, an AI assistant — how is that different from Jwero’s AI workforce?', a: 'Zia is a general business AI assistant available from Zoho’s Enterprise tier ($40/user/month) — useful for pipeline prediction and general automation. Jwero’s AI workforce is built around 240+ jewellery-specific actions (scheme reminders, occasion invites, live-rate quoting) inside an approval-queue governance model.' },
  ],
});

module.exports = [
  compareHub, ornateNx, synergics, jewelacc, marg, sioniq, zithara,
  wati, interakt, doubletick, quicksell, shopify, zohoCrm,
];
