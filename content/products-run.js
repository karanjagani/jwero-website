const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

const crm = {
  slug: 'products/crm',
  title: 'Jewellery CRM & Customer 360 — Built for the Trade | Jwero',
  description: 'A CRM that speaks jewellery: gold-plan balances, occasions, taste and churn risk as structured fields, explainable scores, and journeys that bring customers back.',
  breadcrumbs: BC('Jewellery CRM'),
  faqs: [
    { q: 'How is Jwero different from Zoho or Salesforce for a jewellery business?', a: 'Generic CRMs know names, notes and deals. Jwero’s record is jewellery-native: scheme balances, wedding months, metal preferences and live-rate context are structured fields the whole system acts on. You would spend years customising a generic CRM to get half of it.' },
    { q: 'Can I import my existing customer list?', a: 'Yes — from Excel, CSV, phone contacts or exports from practically any jewellery software. Deduplication and cleanup happen during import, and we do it for you during onboarding.' },
    { q: 'What are journeys?', a: 'Automated relationship sequences — welcome series, occasion greetings, win-back campaigns, scheme-maturity conversations — that run on the customer record with your approval settings.' },
    { q: 'I already use a CRM (or Excel). Why switch?', a: 'A generic CRM or spreadsheet has no idea what a scheme balance or a purity preference is — you’d spend years bolting on custom fields to get half of what’s native here. And it still wouldn’t sell on WhatsApp for you.' },
    { q: 'Will I lose my existing customer history when I switch?', a: 'No — we import it. Purchase history, notes and contact details from Excel, CSV or your current software come across, deduplicated, during onboarding.' },
  ],
  body: `
${L.hero({
  eyebrow: 'JEWELLERY CRM & CUSTOMER 360',
  h1: 'A CRM that knows what a gram of trust is worth.',
  sub: 'Most CRMs were built for software salespeople. This one was built for a trade where the customer returns every few years, spends a fortune, and expects to be remembered. Every field, score and journey exists because jewellery works this way.',
  primary: { href: '#', label: 'See a customer record', wa: 'crm' },
  secondary: { href: '/platform/customer-memory', label: 'Explore Customer Memory' },
  mock: L.mockMemory,
})}

${L.section(
  `${L.sectionHead('WHAT MAKES IT JEWELLERY-NATIVE', 'Fields a generic CRM has never heard of.', '')}
  ${L.cards([
    { title: 'Plans & balances', text: 'Gold scheme status, instalments, missed payments and maturity dates on the record — because the plan IS the relationship.' },
    { title: 'Occasions', text: 'Weddings, birthdays, anniversaries and festivals drive jewellery purchases. Here they are data, not diary entries.' },
    { title: 'Explainable scores', text: 'Churn risk, buying intent, value tier — each with a visible "why", so your team trusts what the system says.' },
    { title: 'Journeys & campaigns', text: 'Win-back, welcome, occasion and scheme journeys that draft themselves and wait for approval.' },
    { title: 'One inbox attached', text: 'Every WhatsApp, Instagram and web conversation lives on the record — context nobody has to ask for.' },
    { title: 'Action console', text: 'Each morning, every salesperson sees exactly who to contact and why. Memory turned into a to-do list.' },
  ])}`
)}

${L.oneSystemBlock([
  'A pipeline card and a WhatsApp thread for the same buyer are the same record — no re-typing between "sales" and "chat".',
  'The customer intelligence score visible here is the same score AI staff read before deciding who gets a win-back message.',
])}

${L.section(`${L.sectionHead('CRM QUESTIONS', 'Why switch, and what happens to your history.', '')}${L.faqBlock([
  { q: 'I already use a CRM or Excel. Why switch?', a: 'A generic CRM has no idea what a scheme balance or purity preference is — you’d spend years bolting on custom fields to get half of what’s native here.' },
  { q: 'Will I lose my existing customer history?', a: 'No — we import it. Purchase history and contact details come across, deduplicated, during onboarding.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="crm">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Own your customer list. Finally.', 'We import your customers for you — from any software, any spreadsheet, any phone.', 'crm')}
`,
};

const catalog = {
  slug: 'products/catalog',
  title: 'Jewellery Catalogue (PIM) — Purity, Certificates, Live Prices | Jwero',
  description: 'A product catalogue built for jewellery: metal, purity, stones, certifications and HUID-aware records, live metal-rate pricing, and shareable catalogues with control.',
  breadcrumbs: BC('Catalogue (PIM)'),
  faqs: [
    { q: 'Can the catalogue handle certificates and hallmarking details?', a: 'Yes. Purity, gemstone details, certification numbers and hallmark-related fields are structured attributes, not free text — searchable, filterable and printable.' },
    { q: 'How does live pricing work?', a: 'Prices are formulas — metal rate × weight × purity plus making charges and stone values — resolved at today’s rate wherever the product appears: catalogue shares, website, WhatsApp and invoices. Overrides require approval.' },
    { q: 'Can I share a catalogue without exposing my full stock?', a: 'Yes — share curated selections as live links with price visibility you control, and see who viewed what.' },
    { q: 'I have thousands of SKUs. Will setup take forever?', a: 'No. We do the import for you from your existing product sheets or software export — bulk tools handle high piece counts rather than one-by-one manual entry.' },
    { q: 'Can it handle unusual or one-of-a-kind pieces, not just standard stock?', a: 'Yes — custom fields let you record provenance, unique certification and story details per piece where a standard template doesn’t fit.' },
  ],
  body: `
${L.hero({
  eyebrow: 'CATALOGUE — JEWELLERY PIM',
  h1: 'Your entire stock, priced at this minute’s rate.',
  sub: 'Jewellery is the only retail where the price changes twice a day and the product has a certificate. Jwero’s catalogue treats purity, stones, certification and rate-linked pricing as first-class — so every channel always shows the truth.',
  primary: { href: '#', label: 'See the catalogue', wa: 'catalog' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.cards([
    { title: 'Jewellery DNA', text: 'Metal, purity, gross and net weight, stone details, design attributes, certifications — structured, searchable, consistent.' },
    { title: 'Formula pricing', text: 'Live metal-rate pricing with making charges and price rules. Change the rate once; everything follows.' },
    { title: 'Approval-gated overrides', text: 'Discounts and price exceptions route through approvals — the end of quiet margin leaks.' },
    { title: 'Shareable catalogues', text: 'Curated live links for WhatsApp — with stock and price sync, view tracking and follow-up built in.' },
    { title: 'RFID-ready', text: 'Tagging and fast stock-take support for high-piece-count inventories.' },
    { title: 'Feeds every channel', text: 'One catalogue powers the website, WhatsApp, Instagram replies and invoices. Enter once, sell everywhere.' },
  ])}`
)}

${L.oneSystemBlock([
  'A price update to today’s gold rate reprices the WhatsApp catalogue, the website and every open invoice draft — because they read the same catalogue, not a copy of it.',
  'A curated share link is built from the same customer-taste fields the CRM already holds.',
])}

${L.section(`${L.sectionHead('CATALOGUE QUESTIONS', 'Setup time, and pieces that do not fit a template.', '')}${L.faqBlock([
  { q: 'I have thousands of SKUs. Will setup take forever?', a: 'We import from your existing product sheets or software export — bulk tools handle high piece counts, not one-by-one entry.' },
  { q: 'Can it handle unique, one-of-a-kind pieces?', a: 'Yes — custom fields record provenance and story details per piece where a standard template doesn’t fit.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="catalog">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Retire the PDF catalogue.', 'See a live catalogue share — with prices that update while you watch.', 'catalog')}
`,
};

const inventory = {
  slug: 'products/inventory',
  title: 'Jewellery Inventory — Valuation, Ageing & Dead Stock Visibility | Jwero',
  description: 'Know what your stock is worth at today’s rate, what is ageing, and what is quietly eating your capital — across every branch.',
  breadcrumbs: BC('Inventory'),
  faqs: [
    { q: 'Can Jwero tell me my dead stock?', a: 'Yes. Ageing bands (0–30, 31–90, 91–180, 180+ days) and fast/slow-mover views show exactly which pieces are sitting, for how long, and what they are worth at today’s rate.' },
    { q: 'Does it work across branches?', a: 'Yes — stock, transfers and valuation are branch-aware, with the full picture rolled up for the owner.' },
    { q: 'Can it forecast demand?', a: 'Not yet — predictive demand forecasting is on the roadmap, and we will say so until it ships. Today Jwero gives you valuation, ageing and mover analysis: the visibility layer that shows what to buy next.' },
    { q: 'Will this replace our physical stocktake?', a: 'It makes stocktakes faster (RFID-ready counting) and less necessary as a surprise-finding exercise — ageing and valuation are visible continuously, not just once a year.' },
    { q: 'Our stock records are inconsistent across branches. Can you still start?', a: 'Yes — we import what exists per branch and reconcile during onboarding. Inconsistent starting data is normal, not disqualifying.' },
  ],
  body: `
${L.hero({
  eyebrow: 'INVENTORY',
  h1: 'Every gram accounted for. Every idle piece exposed.',
  sub: 'In jewellery, inventory is not stock — it is capital, revalued twice a day. Jwero shows what everything is worth at today’s rate, what is moving, and what has quietly stopped — before the interest bill tells you.',
  primary: { href: '#', label: 'See your stock differently', wa: 'inventory' },
  secondary: { href: '/tools/dead-stock-calculator', label: 'Try the Dead Stock Calculator' },
})}

${L.section(
  `${L.cards([
    { title: 'Live valuation', text: 'Metal- and purity-aware stock value at current rates, per piece, per category, per branch.' },
    { title: 'Ageing bands', text: '0–30, 31–90, 91–180 and 180+ days — the honest x-ray of what is sitting.' },
    { title: 'Fast & slow movers', text: 'What flies and what sleeps, by category and design — so buying follows evidence, not habit.' },
    { title: 'Branch transfers', text: 'Tracked inter-branch movement with a documented trail for every high-value transit.' },
    { title: 'Dead-stock summary', text: 'The number most owners have never seen: how much capital is locked in pieces that stopped moving.' },
    { title: 'RFID stock-take', text: 'Count a showcase in minutes, not weekends.' },
  ])}`
)}

${L.oneSystemBlock([
  'A piece flagged as slow-moving here can be matched to a customer whose taste fits it, straight from the CRM — no export to a spreadsheet.',
  'The valuation shown is the same live-rate pricing formula the catalogue and billing use.',
])}

${L.section(
  `<div class="stack-verdict"><strong>Run your own number first.</strong> The <a href="/tools/dead-stock-calculator">Dead Stock Calculator</a> estimates what idle inventory costs you per month at your financing rate. Most owners are off by 3×. It takes 60 seconds and the result goes to your WhatsApp.</div>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('INVENTORY QUESTIONS', 'Stocktakes, and starting from messy records.', '')}${L.faqBlock([
  { q: 'Will this replace our physical stocktake?', a: 'It makes stocktakes faster and less of a surprise-finding exercise — ageing and valuation are visible continuously.' },
  { q: 'Our stock records are inconsistent across branches. Can you still start?', a: 'Yes — we import what exists per branch and reconcile during onboarding. Normal starting point, not disqualifying.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="inventory">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Find the sleeping capital.', 'Bring last year’s stock summary to a demo — we will show you what a memory-driven system sees in it.', 'inventory')}
`,
};

const billingFinance = {
  slug: 'products/billing-finance',
  title: 'Billing & Finance — GST Invoicing at Live Gold Rates | Jwero',
  description: 'GST invoices priced at the live gold rate, receivables tracking and automated payment reminders — with an honest note on what counter billing does today and what’s on the roadmap.',
  breadcrumbs: BC('Billing & Finance'),
  faqs: [
    { q: 'Does Jwero do POS counter billing?', a: 'A dedicated POS counter with cash day-close is on our public roadmap, not shipped today. Billing & Finance in Jwero handles GST invoicing at live rates and receivables — and works alongside whatever counter billing you use now.' },
    { q: 'Can it price invoices at today’s gold rate automatically?', a: 'Yes — invoicing uses the same live-rate pricing formulas as the catalogue, so a rate change is reflected instantly.' },
    { q: 'Does it chase payments for me?', a: 'Yes — automated reminders run on receivables so collection doesn’t depend on someone remembering to call.' },
    { q: 'Why not just keep using our current billing software until POS ships?', a: 'That’s exactly the recommendation — keep your current counter billing running. Jwero’s Billing & Finance adds GST invoicing at the live rate and receivables tracking alongside it, not instead of it, until the full counter ships.' },
    { q: 'Is GST computation actually compliant, or an approximation?', a: 'GST (CGST/SGST/IGST) is computed as part of live-rate invoicing, data-driven rather than hardcoded. Confirm current statutory-filing scope for your state on a demo before relying on it for a specific compliance need.' },
  ],
  body: `
${L.hero({
  eyebrow: 'BILLING & FINANCE',
  h1: 'GST invoices at the live gold rate, in seconds.',
  sub: 'Rate changes twice a day; your invoices should follow instantly, not by hand. Jwero prices, invoices and tracks receivables at the rate that’s true right now — and reminds customers to pay without anyone chasing.',
  primary: { href: '#', label: 'Ask about billing', wa: 'billing' },
  secondary: { href: '/roadmap', label: 'See the counter-billing roadmap' },
})}

${L.section(
  `${L.cards([
    { title: 'Live-rate GST invoicing', text: 'Metal rate, purity, making charges and GST computed together — no manual repricing when the rate moves.' },
    { title: 'Receivables ledger', text: 'Who owes what, since when — one view instead of a register.' },
    { title: 'Payment reminders', text: 'Automated reminders on outstanding receivables, sent on schedule.' },
    { title: 'Approval-gated overrides', text: 'Discounts and price exceptions on invoices route through approvals.' },
  ], 4)}`
)}

${L.honestGapsBlock([
  'POS counter with cash-drawer day-close — nav copy says "Billing & Finance" until this ships; today Jwero handles invoicing and works alongside your billing counter.',
  'E-invoice / IRN and GSTR filing automation.',
])}

${L.section(`${L.sectionHead('BILLING QUESTIONS', 'Your current software, and GST accuracy.', '')}${L.faqBlock([
  { q: 'Why not just keep using our current billing software?', a: 'You can — keep it running for the counter, and Billing & Finance adds GST invoicing and receivables tracking alongside it until the full POS counter ships.' },
  { q: 'Is GST computation compliant, or an approximation?', a: 'It’s data-driven, not hardcoded. Confirm current statutory-filing scope for your state on a demo before relying on it for a specific compliance need.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="billing">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See invoicing at today’s rate.', 'Change the rate live in a demo and watch a draft invoice reprice.', 'billing')}
`,
};

const erp = {
  slug: 'products/erp',
  title: 'Jewellery ERP, Reconsidered — Orders, Purchases, Repairs, Manufacturing | Jwero',
  description: 'The operations backbone inside Jwero: orders, purchases and vendors, repairs, and manufacturing job-work — jewellery-native, sharing one customer and catalogue truth.',
  breadcrumbs: BC('ERP, reconsidered'),
  faqs: [
    { q: 'Is Jwero a full ERP replacement?', a: 'For operations, yes; for statutory accounting, no. Jwero runs the operational backbone — orders, purchases, repairs, manufacturing job-work — and shares that data with the customer and catalogue layer, which a standalone ERP never does. Statutory accounting stays in Tally or Zoho Books via built-in bridges.' },
    { q: 'What’s different about a jewellery-native ERP?', a: 'Purity, HUID, live gold-rate pricing, karigar job-work and gold-loss tracking are built in as first-class concepts, not bolted-on custom fields.' },
    { q: 'Will switching disrupt operations mid-order?', a: 'Open orders, repairs and purchase records import alongside customers and catalogue during onboarding — nothing in progress gets orphaned by a switch.' },
    { q: 'Our process is unusual — can it be configured to match?', a: 'Custom fields and price/approval rules exist for exactly this. We’ll also tell you plainly what isn’t configurable on a demo, before you commit.' },
  ],
  body: `
${L.hero({
  eyebrow: 'ERP, RECONSIDERED',
  h1: 'Every operation, one truth — not a separate island.',
  sub: 'A jewellery ERP usually means another silo: orders here, customers there, catalogue somewhere else. Jwero runs orders, purchases, repairs and manufacturing on the same record as the customer and the catalogue — because an operating system doesn’t get to have blind spots.',
  primary: { href: '#', label: 'Ask about operations', wa: 'erp' },
  secondary: { href: '/platform', label: 'See the full platform' },
})}

${L.section(
  `${L.cards([
    { title: 'Orders', text: 'Retail, B2B or custom — tracked from advance to delivery.', link: { href: '/products/inventory', label: 'See inventory' } },
    { title: 'Purchases & vendors', text: 'Purchase-to-pay with GRN weigh-and-assay — what you ordered, received and owe, reconciled.' },
    { title: 'Repairs', text: 'Every repair tracked from intake to re-hallmark to return, with the hallmark gate enforced.' },
    { title: 'Manufacturing', text: 'Work-in-progress, stage tracking and a gold-loss ledger — see where every gram goes.', link: { href: '/solutions/manufacturers', label: 'For manufacturers' } },
  ], 4)}`
)}

${L.oneSystemBlock([
  'A repair job and the customer’s purchase history live on one record — your team knows what she owns before she says a word.',
  'Purchases and manufacturing WIP feed the same inventory truth that pricing and dead-stock visibility read from.',
])}

${L.honestGapsBlock(['Karigar wage/payroll settlement is on the roadmap; job-work tracking itself is shipped today.'])}

${L.section(`${L.sectionHead('OPERATIONS QUESTIONS', 'Mid-order switching, and processes that do not fit the mould.', '')}${L.faqBlock([
  { q: 'Will switching disrupt operations mid-order?', a: 'Open orders, repairs and purchase records import alongside customers and catalogue — nothing in progress gets orphaned.' },
  { q: 'Our process is unusual — can it be configured to match?', a: 'Custom fields and approval rules exist for this. We’ll also tell you plainly what isn’t configurable, before you commit.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="erp">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See operations on one record.', 'Bring one real order and follow it end to end — advance to delivery, on one screen.', 'erp')}
`,
};

module.exports = [crm, catalog, inventory, billingFinance, erp];
