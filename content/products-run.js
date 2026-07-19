const L = require('../lib');

const crm = {
  slug: 'products/crm',
  title: 'Jewellery CRM & Customer 360 — Built for the Trade | Jwero',
  description: 'A CRM that speaks jewellery: gold-plan balances, occasions, taste and churn risk as structured fields, explainable scores, and journeys that bring customers back.',
  faqs: [
    { q: 'How is Jwero different from Zoho or Salesforce for a jeweller?', a: 'Generic CRMs know names, notes and deals. Jwero’s record is jewellery-native: scheme balances, wedding months, metal preferences and live-rate context are structured fields the whole system acts on. You would spend years customising a generic CRM to get half of it.' },
    { q: 'Can I import my existing customer list?', a: 'Yes — from Excel, CSV, phone contacts or exports from practically any jewellery software. Deduplication and cleanup happen during import, and we do it for you during onboarding.' },
    { q: 'What are journeys?', a: 'Automated relationship sequences — welcome series, occasion greetings, win-back campaigns, scheme-maturity conversations — that run on the customer record with your approval settings.' },
  ],
  body: `
${L.hero({
  eyebrow: 'JEWELLERY CRM & CUSTOMER 360',
  h1: 'A CRM that knows what<br>a gram of trust is worth.',
  sub: 'Most CRMs were built for software salespeople. This one was built for a trade where the customer returns every few years, spends a fortune, and expects to be remembered. Every field, score and journey exists because jewellery works this way.',
  primary: { href: '#', label: 'See a customer record', wa: 'default' },
  secondary: { href: '/customer-memory.html', label: 'Explore Customer Memory' },
  mock: L.mockMemory,
})}

${L.section(
  `${L.sectionHead('WHAT MAKES IT JEWELLERY-NATIVE', 'Fields a generic CRM has never heard of.', '')}
  ${L.cards([
    { title: 'Plans & balances', text: 'Gold scheme status, instalments, missed payments and maturity dates on the record — because the plan IS the relationship.' },
    { title: 'Occasions', text: 'Weddings, birthdays, anniversaries and festivals drive jewellery purchases. Here they are data, not diary entries.' },
    { title: 'Explainable scores', text: 'Churn risk, buying intent, value tier — each with a visible “why”, so your team trusts what the system says.' },
    { title: 'Journeys & campaigns', text: 'Win-back, welcome, occasion and scheme journeys that draft themselves and wait for approval.' },
    { title: 'One inbox attached', text: 'Every WhatsApp, Instagram and web conversation lives on the record — context nobody has to ask for.' },
    { title: 'Action console', text: 'Each morning, every salesperson sees exactly who to contact and why. Memory turned into a to-do list.' },
  ])}`
)}

${L.ctaBand('Own your customer list. Finally.', 'We import your customers for you — from any software, any spreadsheet, any phone.', 'default')}
`,
};

const catalog = {
  slug: 'products/catalog',
  title: 'Jewellery Catalogue (PIM) — Purity, Certificates, Live Prices | Jwero',
  description: 'A product catalogue built for jewellery: metal, purity, stones, certifications and HUID-aware records, live metal-rate pricing, and shareable catalogues with control.',
  faqs: [
    { q: 'Can the catalogue handle certificates and hallmarking details?', a: 'Yes. Purity, gemstone details, certification numbers and hallmark-related fields are structured attributes, not free text — searchable, filterable and printable.' },
    { q: 'How does live pricing work?', a: 'Prices are formulas — metal rate × weight × purity plus making charges and stone values — resolved at today’s rate wherever the product appears: catalogue shares, website, WhatsApp and invoices. Overrides require approval.' },
    { q: 'Can I share a catalogue without exposing my full stock?', a: 'Yes — share curated selections as live links with price visibility you control, and see who viewed what.' },
  ],
  body: `
${L.hero({
  eyebrow: 'CATALOGUE — JEWELLERY PIM',
  h1: 'Your entire stock,<br>priced at this minute’s rate.',
  sub: 'Jewellery is the only retail where the price changes twice a day and the product has a certificate. Jwero’s catalogue treats purity, stones, certification and rate-linked pricing as first-class — so every channel always shows the truth.',
  primary: { href: '#', label: 'See the catalogue', wa: 'default' },
  secondary: { href: '/book-demo.html', label: 'Book a demo' },
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

${L.ctaBand('Retire the PDF catalogue.', 'See a live catalogue share — with prices that update while you watch.', 'default')}
`,
};

const inventory = {
  slug: 'products/inventory',
  title: 'Jewellery Inventory — Valuation, Ageing & Dead Stock Visibility | Jwero',
  description: 'Know what your stock is worth at today’s rate, what is ageing, and what is quietly eating your capital — across every branch.',
  faqs: [
    { q: 'Can Jwero tell me my dead stock?', a: 'Yes. Ageing bands (0–30, 31–90, 91–180, 180+ days) and fast/slow-mover views show exactly which pieces are sitting, for how long, and what they are worth at today’s rate.' },
    { q: 'Does it work across branches?', a: 'Yes — stock, transfers and valuation are branch-aware, with the full picture rolled up for the owner.' },
    { q: 'Can it forecast demand?', a: 'We keep this page honest: today Jwero gives you valuation, ageing and mover analysis — the visibility layer. Predictive demand forecasting is on the roadmap, and we will say so until it ships.' },
  ],
  body: `
${L.hero({
  eyebrow: 'INVENTORY',
  h1: 'Every gram accounted for.<br>Every idle piece exposed.',
  sub: 'In jewellery, inventory is not stock — it is capital, revalued twice a day. Jwero shows what everything is worth at today’s rate, what is moving, and what has quietly stopped — before the interest bill tells you.',
  primary: { href: '#', label: 'See your stock differently', wa: 'default' },
  secondary: { href: '/tools/dead-stock-calculator.html', label: 'Try the Dead Stock Calculator' },
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

${L.section(
  `<div class="stack-verdict"><strong>Run your own number first.</strong> The <a href="/tools/dead-stock-calculator.html">Dead Stock Calculator</a> estimates what idle inventory costs you per month at your financing rate. Most owners are off by 3×. It takes 60 seconds and the result goes to your WhatsApp.</div>`
, { tone: 'tint' })}

${L.ctaBand('Find the sleeping capital.', 'Bring last year’s stock summary to a demo — we will show you what a memory-driven system sees in it.', 'default')}
`,
};

module.exports = [crm, catalog, inventory];
