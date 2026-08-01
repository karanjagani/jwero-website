const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

const crm = {
  slug: 'products/crm',
  title: 'Jewellery CRM Software & Customer 360 — Built for the Trade | Jwero',
  description: 'Jewellery CRM software: gold-plan balances, occasions, taste and churn risk as structured fields, with explainable scores and win-back journeys.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery CRM', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A jewellery-specific CRM with 90+ customer-record fields — gold-plan balances, occasions, taste and explainable scores — driving journeys under approval.',
    url: 'https://jwero.ai/products/crm', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Jewellery CRM'),
  faqs: [
    { q: 'How is Jwero different from Zoho or Salesforce for a jewellery business?', a: 'Generic CRMs know names, notes and deals. Jwero’s record is jewellery-native: scheme balances, wedding months, metal preferences and live-rate context are structured fields the whole system acts on. You would spend years customising a generic CRM to get half of it.' },
    { q: 'Can I import my existing customer list?', a: 'Yes — from Excel, CSV, phone contacts or exports from practically any jewellery software. Deduplication and cleanup happen during import, and we do it for you during onboarding.' },
    { q: 'What are journeys?', a: 'Automated relationship sequences — welcome series, occasion greetings, win-back campaigns, scheme-maturity conversations — that run on the customer record with your approval settings.' },
    { q: 'I already use a CRM (or Excel). Why switch?', a: 'A generic CRM or spreadsheet has no idea what a scheme balance or a purity preference is — you’d spend years bolting on custom fields to get half of what’s native here. And it still wouldn’t sell on WhatsApp for you.' },
    { q: 'Will I lose my existing customer history when I switch?', a: 'No — we import it. Purchase history, notes and contact details from Excel, CSV or your current software come across, deduplicated, during onboarding.' },
    { q: 'Can I send a formal quote a customer can accept online?', a: 'Yes — a quotation moves from draft to sent to accepted or declined, with a number, line items and a PDF. Share the link and the customer can review and accept or decline it themselves, without needing to be on a call.' },
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

${L.section(
  `${L.sectionHead('MORE FROM THE SAME RECORD', 'Built on the same customer record.', 'Everything below reads and writes the one 90+ field record above — nothing here is a bolted-on module with its own copy of your customers.')}
  ${L.cards([
    { title: 'Quotations', text: 'A formal quote moves from draft to sent to accepted or declined, with a number, line items and a PDF. Share the link and the customer can accept or decline it themselves — no call required.' },
    { title: 'Smart lead routing', text: 'New enquiries route automatically to the right salesperson — round-robin, whoever has the lightest workload, or by territory rules your business sets.' },
    { title: 'Next-best-action', text: 'A small set of suggested next actions per customer: "due for a follow-up," "scheme is maturing" — one tap to act, with the reasoning behind each score visible, not just the number.' },
    { title: 'Search across everything', text: 'One search box finds a customer, a deal, a product or an order — instead of hunting through separate screens.' },
    { title: 'Duplicate detection', text: 'Likely-duplicate customer records get flagged for a person to review and merge, keeping the record clean as data arrives from every channel.' },
  ])}`
)}

${L.section(`${L.sectionHead('CRM QUESTIONS', 'Why switch, and what happens to your history.', '')}${L.faqBlock([
  { q: 'I already use a CRM or Excel. Why switch?', a: 'A generic CRM has no idea what a scheme balance or purity preference is — you’d spend years bolting on custom fields to get half of what’s native here.' },
  { q: 'Will I lose my existing customer history?', a: 'No — we import it. Purchase history and contact details come across, deduplicated, during onboarding.' },
  { q: 'Can I send a formal quote a customer can accept online?', a: 'Yes — a quotation moves from draft to sent to accepted or declined, with a number, line items and a PDF, shared as a link the customer can act on without a call.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>
<p class="cta-note" style="margin-top:14px">Still deciding whether you need a CRM, an ERP, or both? <a href="/blog/jewellery-crm-vs-erp-difference">Read the plain-language guide to the CRM vs ERP difference →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="crm">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Own your customer list. Finally.', 'We import your customers for you — from any software, any spreadsheet, any phone.', 'crm')}
`,
};

const catalog = {
  slug: 'products/catalog',
  title: 'Jewellery Catalogue (PIM) — Purity, Certificates, Live Prices | Jwero',
  description: 'A product catalogue built for jewellery: metal, purity, stones, certifications and HUID-aware records, live metal-rate pricing, and controlled sharing.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Catalogue (PIM)', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A jewellery product-information catalogue with metal, purity, stones and certification data, live metal-rate pricing, and controlled shareable links.',
    url: 'https://jwero.ai/products/catalog', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
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
    { title: 'Formula pricing', text: 'Live metal-rate pricing with making charges and price rules. Change the rate once; everything follows.', link: { href: '/platform/pricing-engine', label: 'See the pricing engine' } },
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
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>
<p class="cta-note" style="margin-top:14px">Getting your records audit-ready? <a href="/blog/huid-hallmarking-records-audit-checklist">Use the HUID & hallmarking records audit checklist →</a> And before you send another PDF, <a href="/blog/digital-catalog-vs-pdf-jewellery">read why live digital catalogues outsell PDFs →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="catalog">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Retire the PDF catalogue.', 'See a live catalogue share — with prices that update while you watch.', 'catalog')}
`,
};

const inventory = {
  slug: 'products/inventory',
  title: 'Jewellery Inventory Software — Ageing & Dead Stock | Jwero',
  description: 'Know what your stock is worth at today’s rate, what is ageing, and what is quietly eating your capital — across every branch.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Inventory', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Jewellery inventory valuation, ageing and dead-stock visibility at today’s metal rate, across every branch.',
    url: 'https://jwero.ai/products/inventory', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
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
  sub: 'In jewellery, inventory is not stock: it is capital, revalued twice a day. Jwero shows what everything is worth at today’s rate, what is moving, and what has quietly stopped — before the interest bill tells you.',
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
  `<div class="stack-verdict"><strong>Run your own number first.</strong> The <a href="/tools/dead-stock-calculator">Dead Stock Calculator</a> estimates what idle inventory costs you per month at your financing rate. Most owners are off by 3×. It takes 60 seconds and the result goes to your WhatsApp. Then, for the full playbook on finding and moving it, <a href="/blog/dead-stock-jewellery-business-guide">read the dead-stock guide for jewellery businesses →</a></div>`
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
  title: 'Jewellery Billing Software — GST Invoicing at Live Gold Rates | Jwero',
  description: 'Jewellery billing software: GST invoices at the live gold rate, receivables tracking and payment reminders — with an honest note on what’s roadmap.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Billing & Finance', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'GST invoicing priced at the live gold rate, with receivables tracking and automated payment reminders; POS cash-drawer day-close is on the public roadmap.',
    url: 'https://jwero.ai/products/billing-finance', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Billing & Finance'),
  faqs: [
    { q: 'Does Jwero do POS counter billing? Is there a POS alternative?', a: 'A dedicated POS counter with cash day-close is on our public roadmap, not shipped today. Until it ships, Billing & Finance is the closest thing to a POS alternative Jwero offers: GST invoicing at live rates and receivables tracking, working alongside whatever counter billing you use now rather than replacing it.' },
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
    { title: 'Live-rate GST invoicing', text: 'Metal rate, purity, making charges and GST computed together — no manual repricing when the rate moves.', link: { href: '/platform/pricing-engine', label: 'See the pricing engine' } },
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
  { q: 'Is there a POS alternative in Jwero, or should I keep my current billing counter?', a: 'Keep your current counter for now — a full POS with cash day-close is on our roadmap, not shipped. Billing & Finance adds GST invoicing at the live rate and receivables tracking alongside it until that ships.' },
  { q: 'Is GST computation compliant, or an approximation?', a: 'It’s data-driven, not hardcoded. Confirm current statutory-filing scope for your state on a demo before relying on it for a specific compliance need.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>
<p class="cta-note" style="margin-top:14px">Wondering how jewellery software and Tally divide the work? <a href="/blog/jewellery-software-and-tally">Read the guide to running both without double entry →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="billing">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See invoicing at today’s rate.', 'Change the rate live in a demo and watch a draft invoice reprice.', 'billing')}
`,
};

const erp = {
  slug: 'products/erp',
  title: 'Jewellery ERP Software, Reconsidered | Jwero',
  description: 'Jewellery ERP software: orders, purchases and vendors, repairs and manufacturing job-work — jewellery-native, sharing one customer record.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero ERP', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Jewellery-native operations: orders, purchases and vendors, repairs and manufacturing job-work, sharing one customer and catalogue record with the rest of Jwero.',
    url: 'https://jwero.ai/products/erp', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
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
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>
<p class="cta-note" style="margin-top:14px">Running repairs on registers today? <a href="/blog/jewellery-repair-management-custody-chain">Read the guide to repair management and the custody chain →</a> Still comparing system types? <a href="/blog/jewellery-crm-vs-erp-difference">See what separates a CRM from an ERP →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="erp">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See operations on one record.', 'Bring one real order and follow it end to end — advance to delivery, on one screen.', 'erp')}
`,
};

const showroom = {
  slug: 'products/showroom',
  title: 'Showroom Intelligence — Who Is on Your Floor, Right Now | Jwero',
  description: 'Walk-in check-in, a live floor view, Walkout Rescue drafts and rule-based store alerts — showroom visibility built from real visit data.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Showroom Intelligence', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Walk-in check-in, a live floor view, expected-visit tracking, Walkout Rescue drafts and rule-based store alerts, sharing the same customer record as the rest of Jwero.',
    url: 'https://jwero.ai/products/showroom', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Showroom Intelligence'),
  faqs: [
    { q: 'Does the tablet check-in use facial recognition or special hardware?', a: 'No. Walk-in Register runs off a tablet at the entrance where a walk-in is checked in and out — there is no CCTV or facial-recognition automatic detection today, and no footfall door-counter hardware integration.' },
    { q: 'Is Walkout Rescue automatic — does it message customers without anyone checking?', a: 'No. It drafts a WhatsApp follow-up naming the exact pieces a customer tried, but a person on staff reviews and sends it — nothing goes out unapproved. A rescue only counts as successful once it is linked to a completed sales order afterward; it is never estimated or guessed.' },
    { q: 'Does the Daily Brief get pushed to WhatsApp automatically?', a: 'Not yet. Today the owner or manager opens the Daily Brief to see the morning and evening summary — automatic push delivery to WhatsApp is not built yet.' },
    { q: 'Are the store insights predictive AI, or something else?', a: 'They are rule-based alerts — a conversion-rate drop, dead stock needing attention, a staffing gap, a spike in a walkout reason, a repeat visitor who still has not purchased, an unclosed-visit backlog. Deterministic rules, not predictive machine learning.' },
    { q: 'How does Jwero know a customer is coming before they walk in?', a: 'Expected Visits is created automatically whenever someone books via webchat, an appointment, a CRM follow-up, a campaign, a phone call, WhatsApp, a catalogue order or the lead-finder tool. It auto-closes when they check in, and flags a no-show after a grace period — and tracks show-up rate by booking channel.' },
  ],
  body: `
${L.hero({
  eyebrow: 'SHOWROOM INTELLIGENCE',
  h1: 'Know who is on your floor — and who walked out without buying.',
  sub: 'A showroom visit is the highest-intent moment in the whole business, and most stores remember none of it. Jwero checks walk-ins in, shows who is on the floor live, records what was shown and tried, and drafts a follow-up the moment someone leaves without buying.',
  primary: { href: '#', label: 'See the live floor', wa: 'showroom' },
  secondary: { href: '/products/crm', label: 'See the Jewellery CRM' },
})}

${L.section(
  `${L.sectionHead('WHAT A SHOWROOM LOSES TODAY', 'The visit that nobody wrote down.', '')}
  ${L.impactGrid([
    {
      lever: 'Knowing who is in the store',
      before: 'Staff eyeball the floor; there is no real headcount and no record of what a visit involved.',
      after: 'Walk-in Register checks customers in and out at the entrance tablet; Live Floor shows who is on the floor right now.',
    },
    {
      lever: 'Customers who leave without buying',
      before: 'A visit ends, the lead goes cold, and nobody follows up on what was actually shown.',
      after: 'Walkout Rescue queues them for follow-up and drafts a WhatsApp message naming the exact pieces tried — a staff member reviews and sends it.',
    },
    {
      lever: 'Knowing who is coming',
      before: 'Bookings from webchat, appointments, CRM follow-ups and calls sit in separate places; staff are caught off guard.',
      after: 'Expected Visits pulls every booking channel into one list, auto-closes it on check-in, and flags a no-show after a grace period.',
    },
    {
      lever: 'End-of-day visibility',
      before: 'An owner pieces together how the day went from memory and a register, hours after it mattered.',
      after: 'Daily Brief summarises footfall, conversions, walkouts and the best-performing salesperson — open it each morning and evening.',
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT IT TRACKS', 'Every visit, from walk-in to walkout.', '')}
  ${L.cards([
    { title: 'Walk-in Register', text: 'Tablet check-in and check-out at the store entrance the moment a customer walks in.' },
    { title: 'Live Floor', text: 'A real-time view for staff and owner of who is currently in the store, updating live.' },
    { title: 'Visit journey capture', text: 'Log which pieces were shown and tried, note a quote given, add notes, log a handover, and check the customer out — a per-visit record.' },
    { title: 'Shown, tried, bought', text: 'The products view shows which pieces get shown often, tried often, and actually bought — surfacing a "tried often, rarely bought" merchandising signal.' },
    { title: 'Store insights', text: 'A small set of rule-based alerts — conversion drop, dead stock, staffing gap, walkout-reason spike, repeat non-buyer, unclosed-visit backlog. Deterministic rules, not predictive AI.' },
    { title: 'Multi-branch comparison', text: 'For chains: revenue-per-square-foot by store, a salesperson leaderboard, walkout-reason ranking, busiest hours and conversion-by-visit-purpose, rolled up centrally.' },
  ])}`
)}

${L.oneSystemBlock([
  'A walk-in checked in on the tablet is matched to their existing customer record — occasions, scheme balance and past visits are already there, not a blank slate.',
  'A Walkout Rescue draft is written from the same customer record and catalogue pricing the CRM and catalogue already share — not a separate database that goes stale.',
])}

${L.section(`${L.sectionHead('SHOWROOM QUESTIONS', 'What sends automatically, and what still needs a person.', '')}${L.faqBlock([
  { q: 'Is Walkout Rescue automatic, or does it message customers without anyone checking?', a: 'No. It drafts the WhatsApp follow-up naming the pieces tried, but a staff member reviews and sends it. A rescue only counts as successful once linked to a completed sales order — never estimated.' },
  { q: 'Does the Daily Brief get pushed to WhatsApp automatically?', a: 'Not yet — today someone has to open the Daily Brief to see it. Automatic push delivery is not built yet.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="showroom">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See who is on your floor, right now.', 'Bring one real walkout from last week — we will show you what Walkout Rescue would have drafted.', 'showroom')}
`,
};

const segmentation = {
  slug: 'products/segmentation',
  title: 'Customer Segmentation — Dynamic, Rule-Based Audiences | Jwero',
  description: 'Build live customer segments from RFM tier, tags, CRM stage and custom fields — reachable counts and revenue shown before you save, AI-suggested to start.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Customer Segmentation', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A visual rule builder for live, dynamically-recalculated customer segments from RFM tier, tags, CRM stage and custom fields, with reachable-count and revenue estimates before you save.',
    url: 'https://jwero.ai/products/segmentation', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Customer Segmentation'),
  faqs: [
    { q: 'Is a segment a one-time export, or does it stay current?', a: 'Segments are dynamic by default — they recalculate live against your customer records, not a stale list exported once and forgotten. Add a customer who now matches the rules, and they show up automatically.' },
    { q: 'What can I build a segment out of?', a: 'RFM tier from the recency/frequency/monetary grid, tags, CRM stage or pipeline membership, and custom fields — combined with typed operators (equals, not-equals, in-list, contains, has-all, between) and AND/OR matching in a visual rule builder.' },
    { q: 'What do the "AI-suggested" segments actually do?', a: 'The system proposes candidate segments from patterns already in your data — it is not a prediction or forecasting engine. A person reviews a suggestion before it becomes a segment anyone uses.' },
    { q: 'Do I know how big or valuable an audience is before I save it?', a: 'Yes — before you save, the builder shows an estimated reachable count and an estimated revenue/ROI figure for that audience, so you are not saving blind.' },
    { q: 'Can I see how my segments overlap with each other?', a: 'Yes — a segment relationship graph shows overlap between segments, and geo segmentation is available with a vector-map view for location-based audiences.' },
    { q: 'Where do segments get used?', a: 'They are the audience source for journeys and campaigns, and they read the exact same customer record the CRM keeps — no separate, out-of-sync copy of your customers.' },
  ],
  body: `
${L.hero({
  eyebrow: 'CUSTOMER SEGMENTATION',
  h1: 'Every audience, defined once. Live, not a stale export.',
  sub: 'Most "segments" are a spreadsheet exported once and never updated. Here, a segment is a rule: RFM tier, tags, CRM stage, custom fields — that recalculates live against your actual customer records, so the audience is always current when a journey or campaign reads it.',
  primary: { href: '#', label: 'Build a live segment', wa: 'segmentation' },
  secondary: { href: '/products/crm', label: 'See the Jewellery CRM' },
})}

${L.section(
  `${L.sectionHead('WHAT A STALE LIST COSTS TODAY', 'The export that was already wrong by the time you used it.', '')}
  ${L.impactGrid([
    {
      lever: 'Who is actually in an audience',
      before: 'A segment is a one-time export — customers who joined, upgraded a tier or changed stage since are simply missing.',
      after: 'Segments are dynamic by default, recalculated live from RFM tier, tags, CRM stage and custom fields — no re-export, ever.',
    },
    {
      lever: 'Building the rule itself',
      before: 'Someone hand-filters a spreadsheet, or a developer writes a one-off query nobody else can adjust.',
      after: 'A visual rule builder with typed operators (equals, in-list, contains, between) and AND/OR logic — no code required.',
    },
    {
      lever: 'Knowing if a segment is worth sending to',
      before: 'You save first and find out the audience was too small, or too low-value, after a campaign already went out.',
      after: 'Estimated reachable count and estimated revenue/ROI are shown before you save — so you decide with numbers, not a guess.',
    },
    {
      lever: 'Finding a starting point',
      before: 'Every segment starts from a blank rule builder, even when the useful groupings are already visible in your data.',
      after: 'AI-suggested segments propose candidates from existing data for a person to review: a starting point rather than an auto-send.',
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('HOW A SEGMENT GETS BUILT', 'One rule builder, several ways to slice the same record.', '')}
  ${L.cards([
    { title: 'RFM tier rules', text: 'Filter on the classic recency/frequency/monetary tier already computed on the customer record: a 5x5 grid instead of a hand-rolled score.' },
    { title: 'Tags, CRM stage & custom fields', text: 'Combine tags, pipeline stage and any custom field with typed operators and AND/OR matching in one visual builder.' },
    { title: 'AI-suggested segments', text: 'The system proposes candidate segments from patterns already in your data — a person reviews before it is used anywhere.' },
    { title: 'Reachable count & revenue before you save', text: 'See an estimated audience size and estimated revenue/ROI for the segment as you build it, before it goes live.' },
    { title: 'Geo segmentation', text: 'Build location-based audiences with a vector-map view alongside the rule-based filters.' },
    { title: 'Segment relationship graph', text: 'A graph view shows how your segments overlap, so you can see what a rule change would actually affect.' },
  ])}`
)}

${L.oneSystemBlock([
  'A segment built here reads RFM tier, tags and stage straight off the same customer record CRM keeps, rather than a separate, exportable copy that drifts out of date.',
  'The audience a journey triggers on, or a campaign sends to, is this exact live segment — recalculated at send time, no matter what it looked like when someone last exported a list.',
])}

${L.section(`${L.sectionHead('SEGMENTATION QUESTIONS', 'Live rules, reviewed suggestions, no guessing on size.', '')}${L.faqBlock([
  { q: 'Is a segment a one-time export, or does it stay current?', a: 'Segments are dynamic by default: they recalculate live against your customer records instead of sitting as a stale list exported once and forgotten.' },
  { q: 'What do the "AI-suggested" segments do?', a: 'The system proposes candidate segments from patterns already in your data. It is not a prediction or forecasting engine, and a person reviews before use.' },
  { q: 'Do I know how big or valuable an audience is before I save it?', a: 'Yes — an estimated reachable count and estimated revenue/ROI are shown before you save.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="segmentation">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Stop exporting lists that are already wrong.', 'Bring one audience you send to often — we will show you the live rule that replaces the spreadsheet.', 'segmentation')}
`,
};

module.exports = [crm, catalog, inventory, billingFinance, erp, showroom, segmentation];
