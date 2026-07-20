const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Compare', '/compare'], [label]];

// Shared factory for T6 named-competitor comparison pages. Every specific claim about the
// named product is either a category-level fact (what kind of product it is — safe, standard
// "compare" practice) or marked [VERIFY] rather than asserted, per Blueprint v2 CONSTRAINTS.md D3:
// named-competitor market/feature specifics are BLOCKED pending the verification workflow.
function comparePage({ slug, name, shortName, category, title, description, concedeThem, concedeJwero, rows, faqs, waCtx, migrationNote }) {
  return {
    slug: `compare/jwero-vs-${slug}`,
    title: title || `Jwero vs ${name} — An Honest Comparison | Jwero`,
    description: description || `How Jwero compares to ${name}: what ${shortName || name} does well, what Jwero does differently, and an honest feature matrix with unverified claims marked plainly.`,
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
  `${L.sectionHead('THE HONEST MATRIX', '', `Jwero claims below are product-verified. ${name} claims are based on its public category positioning — anything more specific is marked [VERIFY].`)}
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
  description: 'Honest, concession-first comparisons: jewellery ERPs, WhatsApp tools, catalogue-sharing apps, generic CRMs and ecommerce platforms — against the Jwero operating system.',
  breadcrumbs: [['Home', '/'], ['Compare']],
  body: `
${L.hero({
  eyebrow: 'COMPARE',
  h1: 'Choose with the full picture, not a pitch.',
  sub: 'Every comparison below concedes what the alternative genuinely does well, states what Jwero does differently, and marks anything we haven’t independently verified — plainly, not buried.',
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
    { title: 'Jwero vs Ornate NX', text: 'A jewellery ERP focused on billing, inventory and accounting.', link: { href: '/compare/jwero-vs-ornate-nx', label: 'Compare' } },
    { title: 'Jwero vs Synergics', text: 'A jewellery ERP focused on billing, inventory and manufacturing.', link: { href: '/compare/jwero-vs-synergics', label: 'Compare' } },
    { title: 'Jwero vs JewelAcc', text: 'An accounting-first jewellery software.', link: { href: '/compare/jwero-vs-jewelacc', label: 'Compare' } },
    { title: 'Jwero vs Marg ERP', text: 'A generic billing ERP widely used across retail.', link: { href: '/compare/jwero-vs-marg', label: 'Compare' } },
  ], 4)}`
, { tone: 'tint' })}
${L.section(
  `${L.sectionHead('OPERATING SYSTEM & ENGAGEMENT PLATFORMS', '', '')}
  ${L.cards([
    { title: 'Jwero vs SIONIQ', text: 'A jewellery platform that also uses a "Jewelry Operating System" label.', link: { href: '/compare/jwero-vs-sioniq', label: 'Compare' } },
    { title: 'Jwero vs Zithara', text: 'A retail CRM and customer-engagement platform.', link: { href: '/compare/jwero-vs-zithara', label: 'Compare' } },
  ])}`
)}
${L.section(
  `${L.sectionHead('WHATSAPP & MESSAGING TOOLS', '', '')}
  ${L.cards([
    { title: 'Jwero vs WATI', text: 'A WhatsApp Business API messaging and broadcast tool.', link: { href: '/compare/jwero-vs-wati', label: 'Compare' } },
    { title: 'Jwero vs Interakt', text: 'A WhatsApp Business API commerce and marketing tool.', link: { href: '/compare/jwero-vs-interakt', label: 'Compare' } },
    { title: 'Jwero vs DoubleTick', text: 'A WhatsApp Business API sales and broadcast tool.', link: { href: '/compare/jwero-vs-doubletick', label: 'Compare' } },
    { title: 'Jwero vs QuickSell', text: 'A catalogue-sharing and social-commerce tool for WhatsApp/Instagram sellers.', link: { href: '/compare/jwero-vs-quicksell', label: 'Compare' } },
  ], 4)}`
, { tone: 'tint' })}
${L.section(
  `${L.sectionHead('ECOMMERCE & GENERIC CRM', '', '')}
  ${L.cards([
    { title: 'Jwero vs Shopify', text: 'A general-purpose ecommerce platform.', link: { href: '/compare/jwero-vs-shopify', label: 'Compare' } },
    { title: 'Jwero vs Zoho CRM', text: 'A general-purpose, horizontal CRM.', link: { href: '/compare/jwero-vs-zoho-crm', label: 'Compare' } },
  ])}`
)}
${L.section(`<p style="font-size:.85rem; color:var(--ink-2);">Using something not listed here? <a href="#" data-wa="compare-hub">Tell us on WhatsApp</a> and we’ll build an honest comparison.</p>`)}
`,
};

const ornateNx = comparePage({
  slug: 'ornate-nx', name: 'Ornate NX', shortName: 'Ornate NX',
  category: 'a jewellery ERP (by DataCare) focused on billing, inventory and accounting for jewellery retailers',
  concedeThem: 'you need deep, established billing and offline-capable counter operations, refined over years specifically for the jewellery trade, and you’re not looking to change that today.',
  concedeJwero: 'you want the customer, the catalogue and every selling channel — WhatsApp, Instagram, storefront — to share one record, with a governed AI workforce handling follow-up. Most businesses run both: Ornate NX (or a peer) for the ledger, Jwero for the revenue side.',
  waCtx: 'ornate',
  rows: [
    { label: 'Billing / counter operations depth', jwero: '[VERIFY — Billing & Finance covers GST invoicing; POS counter is roadmap]', jweroRoadmap: true, other: 'Established, jewellery-specific [VERIFY specifics]' },
    { label: 'Offline / low-connectivity operation', jwero: 'Roadmap', jweroRoadmap: true, other: '[VERIFY]' },
    { label: 'One customer record across WhatsApp, Instagram, storefront', jwero: 'Yes — 90+ fields, one record', other: '[VERIFY]' },
    { label: 'Governed AI workforce (approvals, caps, kill switch)', jwero: 'Yes — 240+ actions, 5 kill-switch scopes', other: '[VERIFY]' },
    { label: 'Live gold-rate catalogue pricing', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Gold savings schemes & digital gold, digital', jwero: 'Yes', other: '[VERIFY]' },
  ],
  faqs: [
    { q: 'Does Jwero replace Ornate NX?', a: 'Not necessarily on day one — most businesses keep their billing ERP and add Jwero for the revenue side: customers, channels, schemes, follow-up. See the <a href="/migration">Migration Centre</a>.' },
    { q: 'Which one handles GST billing better?', a: 'Jewellery ERPs like Ornate NX are built around billing and are likely to have deeper counter-billing depth today; Jwero’s Billing & Finance module covers GST invoicing at the live rate, with a full POS counter on our roadmap.' },
  ],
});

const synergics = comparePage({
  slug: 'synergics', name: 'Synergics', shortName: 'Synergics',
  category: 'a jewellery ERP focused on billing, inventory and manufacturing operations',
  concedeThem: 'you need mature, jewellery-specific billing and manufacturing workflows that have been refined for established businesses, and that’s your primary need today.',
  concedeJwero: 'you want customer memory, WhatsApp/Instagram selling and a governed AI workforce on the same record as your operations — most businesses run both side by side.',
  waCtx: 'synergics',
  rows: [
    { label: 'Billing & manufacturing depth', jwero: '[VERIFY per module — see /products/erp]', other: 'Established [VERIFY specifics]' },
    { label: 'One customer record across every channel', jwero: 'Yes — 90+ fields, one record', other: '[VERIFY]' },
    { label: 'Governed AI workforce', jwero: 'Yes — 240+ actions, approval queues', other: '[VERIFY]' },
    { label: 'WhatsApp/Instagram commerce, official API', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Gold-loss WIP ledger', jwero: 'Yes — per-stage norms, abnormal-loss flags', other: '[VERIFY]' },
  ],
  faqs: [
    { q: 'Can I keep Synergics and add Jwero?', a: 'Yes — most businesses keep their ERP for the ledger and manufacturing backbone, and add Jwero for customers, channels and AI-driven follow-up.' },
  ],
});

const jewelacc = comparePage({
  slug: 'jewelacc', name: 'JewelAcc', shortName: 'JewelAcc',
  category: 'an accounting-first jewellery software',
  concedeThem: 'your primary need is jewellery-specific accounting depth, and that’s the whole job you’re hiring software for.',
  concedeJwero: 'accounting is only part of the job — you also want customer memory, WhatsApp/Instagram selling and a governed AI workforce sharing one record with the books.',
  waCtx: 'jewelacc',
  rows: [
    { label: 'Jewellery-specific accounting', jwero: '[VERIFY — Jwero bridges to Tally/Zoho Books rather than replacing statutory accounting]', other: '[VERIFY specifics — accounting-first by design]' },
    { label: 'Customer memory across channels', jwero: 'Yes — 90+ fields, one record', other: '[VERIFY]' },
    { label: 'WhatsApp/Instagram commerce', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Governed AI workforce', jwero: 'Yes', other: '[VERIFY]' },
  ],
  faqs: [
    { q: 'Does Jwero do jewellery-specific accounting like JewelAcc?', a: 'Jwero bridges to Tally and Zoho Books for statutory accounting rather than replacing an accounting-first tool. If deep jewellery accounting is your primary need, that may be the right tool for the ledger — Jwero adds the customer and channel side around it.' },
  ],
});

const marg = comparePage({
  slug: 'marg', name: 'Marg ERP', shortName: 'Marg',
  category: 'a generic billing ERP widely used across retail, including jewellery businesses',
  concedeThem: 'you want broad, general retail-billing maturity and a large installed base of a tool that isn’t jewellery-specific but is well known.',
  concedeJwero: 'you want a system built specifically for jewellery — live gold-rate pricing, purity/HUID catalogue fields, gold schemes — with customers and channels on the same record.',
  waCtx: 'marg',
  rows: [
    { label: 'General retail billing maturity', jwero: '[VERIFY — GST invoicing shipped; POS counter roadmap]', jweroRoadmap: true, other: 'Broad, general-retail [VERIFY jewellery-specific depth]' },
    { label: 'Live gold-rate catalogue pricing', jwero: 'Yes', other: '[VERIFY — not jewellery-specific by design]' },
    { label: 'Purity, HUID-aware catalogue fields', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Gold schemes & digital gold', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Governed AI workforce + WhatsApp/Instagram commerce', jwero: 'Yes', other: '[VERIFY]' },
  ],
  faqs: [
    { q: 'Is Marg jewellery-specific?', a: 'Marg is a general retail billing ERP used across many trades, including jewellery. Jwero is built jewellery-first — live gold-rate pricing, purity and HUID-aware catalogue fields, and gold schemes are native, not adapted.' },
  ],
});

const sioniq = comparePage({
  slug: 'sioniq', name: 'SIONIQ', shortName: 'SIONIQ',
  category: 'a jewellery software platform that also positions itself using a "Jewelry Operating System" label',
  concedeThem: 'SIONIQ has its own operational depth and an earlier head start in the category conversation around a "jewellery operating system" label.',
  concedeJwero: 'you want the OS claim demonstrated, not just asserted: one customer record, one catalogue, one inventory truth, one inbox — with a governed AI workforce that waits for your approval on every action.',
  waCtx: 'sioniq',
  migrationNote: 'A detailed feature-by-feature comparison against SIONIQ requires the verification pass we run before publishing named-competitor specifics — this page states our position honestly and will be filled in with sourced, dated data as that research completes.',
  rows: [
    { label: 'Category label used', jwero: '"The AI Operating System for Jewellery Business"', other: '"Jewelry Operating System" [VERIFY exact wording]' },
    { label: 'One-record architecture demonstrated (not asserted)', jwero: 'Yes — see /platform', other: '[VERIFY]' },
    { label: 'Governed AI workforce (approvals, caps, kill switch)', jwero: 'Yes — 240+ actions, 5 kill-switch scopes', other: '[VERIFY]' },
    { label: 'Market position / scale', jwero: '[VERIFY]', other: '[VERIFY]' },
  ],
  faqs: [
    { q: 'Why compare against a direct label rival honestly rather than avoid it?', a: 'Because our own honesty policy applies here too — we’d rather concede what we don’t know and let the product speak for the parts we can prove.' },
  ],
});

const zithara = comparePage({
  slug: 'zithara', name: 'Zithara', shortName: 'Zithara',
  category: 'a retail CRM and customer-engagement platform used by jewellery and other retail businesses',
  concedeThem: 'you want an established engagement and loyalty tool that already serves multiple retail categories, not jewellery-specific operations.',
  concedeJwero: 'you want jewellery-native fields — scheme balances, purity, live gold-rate pricing — on the same record as engagement, selling channels and operations.',
  waCtx: 'zithara',
  rows: [
    { label: 'Retail engagement/loyalty tooling', jwero: 'Yes — loyalty tied to the customer record', other: 'Established, multi-category [VERIFY jewellery-specific depth]' },
    { label: 'Jewellery-native customer fields (scheme balance, occasions)', jwero: 'Yes — 90+ fields', other: '[VERIFY]' },
    { label: 'Live gold-rate catalogue pricing', jwero: 'Yes', other: '[VERIFY — not jewellery-specific by design]' },
    { label: 'Governed AI workforce', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Operations (inventory, orders, manufacturing)', jwero: 'Yes — one system', other: '[VERIFY — likely engagement-layer only]' },
  ],
  faqs: [
    { q: 'Is Zithara jewellery-specific?', a: 'Zithara serves multiple retail categories with engagement and loyalty tooling. Jwero is built jewellery-first, with scheme balances, purity and live gold-rate pricing as native fields, and operations sharing the same record.' },
  ],
});

const wati = comparePage({
  slug: 'wati', name: 'WATI', shortName: 'WATI',
  category: 'a WhatsApp Business API messaging and broadcast tool',
  concedeThem: 'all you need is simple, well-known WhatsApp messaging and broadcasts at a lower entry price, with no need for the reply to know a customer’s purchase history or scheme balance.',
  concedeJwero: 'you want every WhatsApp reply to come from a system that also holds the catalogue, the CRM and the operation — so a conversation can become a priced sale, not just a sent message.',
  waCtx: 'wati',
  rows: [
    { label: 'Send & receive WhatsApp messages (official API)', jwero: 'Yes', other: 'Yes' },
    { label: 'Broadcasts with consent & fatigue limits', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Knows customer purchase/scheme history in a reply', jwero: 'Yes — one shared record', other: 'No — messaging tool, no CRM/catalogue layer [VERIFY]' },
    { label: 'Live gold-rate priced replies', jwero: 'Yes', other: 'No' },
    { label: 'Governed AI drafting (approvals, caps, kill switch)', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Catalogue, CRM and inventory in the same system', jwero: 'Yes', other: 'No — messaging only' },
  ],
  faqs: [
    { q: 'Isn’t WATI cheaper?', a: 'For pure messaging, likely — [VERIFY current pricing]. The comparison is about what a reply can know: a messaging tool sends; Jwero’s replies come from the same record as your CRM, catalogue and schemes.' },
  ],
});

const interakt = comparePage({
  slug: 'interakt', name: 'Interakt', shortName: 'Interakt',
  category: 'a WhatsApp Business API commerce and marketing tool',
  concedeThem: 'you want solid WhatsApp catalogue and broadcast tooling built for general ecommerce sellers, without needing jewellery-specific pricing or scheme logic.',
  concedeJwero: 'you sell jewellery specifically — live gold-rate pricing, purity fields, gold schemes and digital gold need to be native, not generic ecommerce fields repurposed.',
  waCtx: 'interakt',
  rows: [
    { label: 'WhatsApp catalogue & checkout', jwero: 'Yes — jewellery-native, live-rate priced', other: 'Yes — general ecommerce catalogue [VERIFY]' },
    { label: 'Live gold-rate pricing', jwero: 'Yes', other: 'No — not jewellery-specific by design' },
    { label: 'Gold schemes & digital gold', jwero: 'Yes', other: 'No' },
    { label: 'Governed AI drafting with approval queues', jwero: 'Yes — 240+ actions', other: '[VERIFY]' },
    { label: 'One record across CRM, catalogue, operations', jwero: 'Yes', other: 'No — messaging/commerce layer only [VERIFY]' },
  ],
  faqs: [
    { q: 'Can Interakt handle gold-rate pricing?', a: 'It’s built as a general ecommerce WhatsApp tool, not jewellery-specific — [VERIFY current feature set]. Jwero’s catalogue prices follow the live gold rate natively.' },
  ],
});

const doubletick = comparePage({
  slug: 'doubletick', name: 'DoubleTick', shortName: 'DoubleTick',
  category: 'a WhatsApp Business API sales and broadcast tool',
  concedeThem: 'you want fast broadcast tooling and a team inbox for a WhatsApp-first sales team, without needing a jewellery-native catalogue or scheme engine behind it.',
  concedeJwero: 'you want the WhatsApp inbox to be one part of a system that also remembers the customer, prices at the live rate and runs schemes — not a standalone messaging layer.',
  waCtx: 'doubletick',
  rows: [
    { label: 'Team WhatsApp inbox', jwero: 'Yes — one inbox across WhatsApp, Instagram, Facebook', other: 'Yes — WhatsApp-focused [VERIFY]' },
    { label: 'Broadcasts with consent & fatigue limits', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Live gold-rate catalogue pricing', jwero: 'Yes', other: 'No' },
    { label: 'Customer record shared with catalogue & schemes', jwero: 'Yes', other: 'No — messaging tool [VERIFY]' },
    { label: 'Governed AI drafting', jwero: 'Yes', other: '[VERIFY]' },
  ],
  faqs: [
    { q: 'What does DoubleTick not do that Jwero does?', a: 'As a WhatsApp-focused sales tool, it’s unlikely to hold jewellery-specific catalogue pricing, scheme balances or inventory — [VERIFY]. Those live natively on Jwero’s shared customer record.' },
  ],
});

const quicksell = comparePage({
  slug: 'quicksell', name: 'QuickSell', shortName: 'QuickSell',
  category: 'a catalogue-sharing and social-commerce tool built for WhatsApp/Instagram sellers, popular among small jewellery and apparel businesses',
  concedeThem: 'you want the fastest, lightest way to share a catalogue on WhatsApp and Instagram without needing a full CRM, inventory or scheme engine behind it.',
  concedeJwero: 'catalogue sharing is the beginning, not the whole job — you also want customer memory, live-rate pricing, schemes and a governed AI workforce that follows up.',
  waCtx: 'quicksell',
  rows: [
    { label: 'Lightweight catalogue sharing on WhatsApp/Instagram', jwero: 'Yes, plus live-rate pricing', other: 'Yes — this is its core strength [VERIFY]' },
    { label: 'Live gold-rate pricing', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Customer memory (90+ fields, scheme balances)', jwero: 'Yes', other: 'No — catalogue-sharing layer [VERIFY]' },
    { label: 'Gold schemes & digital gold', jwero: 'Yes', other: 'No' },
    { label: 'Governed AI workforce', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Inventory & operations', jwero: 'Yes — one system', other: 'No — catalogue-sharing layer [VERIFY]' },
  ],
  faqs: [
    { q: 'Is QuickSell enough for a small jewellery business?', a: 'If catalogue sharing is genuinely all you need, it’s a lightweight, fast option. The gap shows up the moment you want the catalogue, the customer and the operation to share one record.' },
  ],
});

const shopify = comparePage({
  slug: 'shopify', name: 'Shopify', shortName: 'Shopify',
  category: 'a general-purpose ecommerce platform',
  concedeThem: 'you want the deepest ecommerce app ecosystem and storefront flexibility available anywhere — Shopify genuinely leads there, and we’re not pretending otherwise.',
  concedeJwero: 'you want live gold-rate pricing, jewellery-native catalogue fields, and WhatsApp/Instagram-native selling with a shared customer record — on top of the storefront you already have.',
  waCtx: 'shopify',
  rows: [
    { label: 'Storefront & app ecosystem', jwero: '[VERIFY — Jwero bridges to Shopify rather than replacing the storefront]', other: 'Deepest in the industry — genuinely ahead' },
    { label: 'Live gold-rate pricing', jwero: 'Yes', other: 'No — not jewellery-specific by design' },
    { label: 'WhatsApp/Instagram-native commerce', jwero: 'Yes — official APIs', other: '[VERIFY — via third-party apps]' },
    { label: 'Gold schemes & digital gold', jwero: 'Yes', other: 'No' },
    { label: 'Governed AI workforce', jwero: 'Yes', other: '[VERIFY]' },
    { label: 'Coexistence: keep your existing store', jwero: 'Yes — Shopify connector syncs products & orders', other: '—' },
  ],
  migrationNote: 'This isn’t a rip-and-replace pitch — most Shopify-based jewellery brands keep their store and add Jwero for the channels and pricing Shopify doesn’t do natively. See <a href="/solutions/d2c-brands">the D2C solution page</a>.',
  faqs: [
    { q: 'Do I need to leave Shopify?', a: 'No — the Shopify connector keeps your store running. Jwero adds WhatsApp/Instagram-native selling, live-rate pricing and customer memory on top.' },
  ],
});

const zohoCrm = comparePage({
  slug: 'zoho-crm', name: 'Zoho CRM', shortName: 'Zoho CRM',
  category: 'a general-purpose, horizontal CRM used across many industries',
  concedeThem: 'you want broad, mature, low-cost CRM functionality built for general B2B or B2C sales teams, and you don’t need jewellery-specific fields.',
  concedeJwero: 'you’re selling jewellery specifically — scheme balances, occasions, purity preferences and live-rate context need to be structured fields the system acts on, not custom fields bolted onto a generic CRM.',
  waCtx: 'zohocrm',
  rows: [
    { label: 'General CRM maturity (pipelines, deals, reports)', jwero: '[VERIFY breadth vs a dedicated horizontal CRM]', other: 'Broad and mature — genuinely ahead here' },
    { label: 'Jewellery-native fields (scheme balance, purity, occasions)', jwero: 'Yes — 90+ fields, native', other: 'No — would require custom-field workarounds' },
    { label: 'Live gold-rate catalogue pricing', jwero: 'Yes', other: 'No' },
    { label: 'WhatsApp/Instagram commerce, official APIs', jwero: 'Yes', other: '[VERIFY — via integrations]' },
    { label: 'Governed AI workforce', jwero: 'Yes — 240+ actions', other: '[VERIFY]' },
    { label: 'Inventory, orders & manufacturing on the same record', jwero: 'Yes', other: 'No — CRM layer only' },
  ],
  faqs: [
    { q: 'Why not just customise Zoho CRM for jewellery?', a: 'You can, with enough custom fields and integrations — but you’d be rebuilding, by hand, what Jwero ships natively: scheme balances, purity, live-rate pricing and channel commerce sharing one record.' },
  ],
});

module.exports = [
  compareHub, ornateNx, synergics, jewelacc, marg, sioniq, zithara,
  wati, interakt, doubletick, quicksell, shopify, zohoCrm,
];
