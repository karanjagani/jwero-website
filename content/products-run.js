const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

// The CRM page, rebuilt 2026-10-07: six jobs, kinds of score (never how they are
// worked out), families and shared numbers, loyalty, consent, a repeat-customer
// calculator and an animated customer record. Only pim-app features are named.
const CRM_SCORES = [
  ['Intent', 'How ready they are to buy now.'], ['Conversion', 'How likely an enquiry is to become a sale.'], ['Engagement', 'How actively they respond to you.'],
  ['Relationship health', 'How the relationship is doing overall.'], ['Churn risk', 'Whether they are drifting away.'], ['Opportunity', 'What is possible with them next.'],
  ['Trust risk', 'Records that need care before you act.'], ['Message fatigue', 'Whether they are hearing from you too often.'], ['Confidence', 'How complete and reliable the record is.'],
  ['Next action', 'Who needs a step from your team today.'],
];
const CRM_STORY = [
  ['Walk-in', 'Meera visits for a bridal set. Phone captured at the counter.'],
  ['WhatsApp', 'Asks for 22K necklace options. Catalogue sent at today’s rate.'],
  ['Scheme', 'Joins the 11-month gold scheme. Balance on her record.'],
  ['Purchase', 'Buys earrings. Points added to her loyalty tier.'],
  ['Family', 'Her daughter’s wedding in February added to the household.'],
  ['Alert', 'Three weeks before her anniversary, a reminder drafted for approval.'],
];
const crmStory = () => `<div class="crm-story" data-crm-story>
  <div class="crm-rec" aria-hidden="true">
    <div class="crm-rec-head"><span class="crm-av">M</span><div><b>Meera Shah</b><i>Household: Shah family · 3 members · 1 shared number</i></div></div>
    <div class="crm-rec-tags">${['22K preferred', 'Bridal', 'Gold scheme', 'Gold tier', 'Hindi'].map((t, k) => `<span data-k="${k}">${t}</span>`).join('')}</div>
    <div class="crm-rec-scores">${[['Intent', 82], ['Churn risk', 12], ['Opportunity', 74]].map(([n, v]) => `<p><span>${n}</span><i style="--v:${v}%"></i></p>`).join('')}</div>
  </div>
  <ol class="crm-tl">${CRM_STORY.map(([t, d], k) => `<li data-k="${k}"><b>${t}</b><span>${d}</span></li>`).join('')}</ol>
</div>`;

const CRM_CMP = [
  ['Families and shared phone numbers', 'No', 'Custom work', 'Yes, households and shared numbers'],
  ['Gold scheme balances and maturity', 'Separate sheet', 'Custom fields', 'Yes, on the record'],
  ['Purchases at the rate they paid', 'Sometimes', 'If integrated', 'Yes, from billing'],
  ['Birthdays, anniversaries, weddings', 'A column', 'A field', 'Yes, with reminders that send themselves'],
  ['WhatsApp, Instagram and AI calls on the record', 'No', 'Add-ons', 'Yes, one record'],
  ['Loyalty points and tiers', 'No', 'Add-on', 'Yes, built in'],
  ['Duplicates found and merged', 'By hand', 'Some', 'Yes, flagged for review'],
  ['Consent per channel, data requests', 'No', 'Some', 'Yes'],
];
const crmTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Excel or a register</th><th>Generic CRM (Zoho, Salesforce)</th><th>Jwero</th></tr></thead><tbody>${CRM_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>
<p class="cta-note" style="margin-top:12px">See <a href="/compare/jwero-vs-zoho-crm">Jwero vs Zoho CRM</a> and <a href="/compare/jwero-vs-zithara">Jwero vs Zithara</a>.</p>`;

const CRM_MOVE = [
  ['Send us your list', 'Excel, CSV, phone contacts or an export from your current software.'],
  ['We clean and match it', 'Duplicates are found and merged, families and shared numbers are linked.'],
  ['History comes across', 'Purchases, notes, scheme balances and occasions land on each customer’s record.'],
  ['Consent is recorded', 'Who agreed to hear from you, on which channel, is kept with the record.'],
  ['Your team starts with today’s list', 'Each salesperson sees who to contact and why from the first morning.'],
];

const crmFaqs = [
  { q: 'What is a jewellery CRM?', a: 'A jewellery CRM is customer software built for how jewellery is bought: it keeps families, scheme balances, purchases, occasions like weddings and anniversaries, and every WhatsApp message and call on one customer record, and tells your team who to contact and why.' },
  { q: 'What is the best CRM for jewellers?', a: 'Look for a CRM that knows families and shared phone numbers, gold scheme balances, purchases from billing, occasions, loyalty, and WhatsApp and calls on the same record, with consent kept per channel. Generic CRMs need years of custom work to get close.' },
  { q: 'How do jewellers increase repeat customers?', a: 'Remember every customer and family, reach them before their occasions, keep scheme members engaged to maturity, reward them through a loyalty tier, and call or message the ones drifting away before they buy elsewhere.' },
  { q: 'How does a jewellery loyalty programme work in Jwero?', a: 'Customers earn points on purchases, move up tiers, redeem points on later purchases, get anniversary rewards and referral benefits. Points can expire after the period you set, and everything sits on the same customer record.' },
  { q: 'Can several family members share one phone number?', a: 'Yes. Jwero links a household and lets one phone number belong to several family members, so the mother, the bride and the father who pays are each recognised correctly.' },
  { q: 'Do I need customer consent under India’s data protection law?', a: 'You should record consent before marketing to customers, and honour requests to see or delete their data. Jwero keeps consent per channel and handles these requests. Confirm your obligations with your advisor.' },
  { q: 'What kinds of scores does Jwero give each customer?', a: 'Each customer carries scores for intent, conversion, engagement, relationship health, churn risk, opportunity, trust risk, message fatigue, record confidence and the next action due, so your team knows who to contact and why.' },
  { q: 'Can I import my existing customer list?', a: 'Yes, from Excel, CSV, phone contacts or another software. We clean it, merge duplicates and link families during onboarding, and your history comes across.' },
  { q: 'How is Jwero different from Zoho or Salesforce?', a: 'Generic CRMs know names, notes and deals. Jwero’s customer record already knows schemes, purchases at the rate paid, families, occasions, loyalty, and every WhatsApp message and call, because billing, chat and calling share one system.' },
  { q: 'Can I send a quote a customer accepts online?', a: 'Yes. A quote is sent as a link with line items and a PDF, and the customer accepts or declines it themselves.' },
];

const crm = {
  slug: 'products/crm',
  title: 'Jewellery CRM Software: CRM for Jewellers | Jwero',
  description: 'Jewellery CRM software for jewellers: families, scheme balances, occasions, loyalty, WhatsApp and AI calls on one customer record, with scores that tell your team who to contact.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery CRM', alternateName: ['CRM for jewellers', 'Jewellery customer management software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A jewellery CRM with households and shared numbers, gold scheme balances, purchases, occasions, loyalty tiers, segments and journeys, and WhatsApp and AI calls on one customer record, with consent per channel.',
    url: 'https://jwero.ai/products/crm', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
    offers: { '@type': 'Offer', price: '18000', priceCurrency: 'INR', description: 'Jwero One per month, every module included.' },
  },
  extraSchema: [{
    '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to move your customer list into a jewellery CRM',
    step: CRM_MOVE.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })),
  }],
  breadcrumbs: BC('Jewellery CRM'),
  faqs: crmFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY CRM · CRM FOR JEWELLERS',
  h1: 'Jewellery CRM that remembers what she bought, what she’s saving for, and when her daughter’s wedding is.',
  sub: 'One record per customer and family, kept by your business, not a salesperson’s phone: purchases, scheme balances, occasions, loyalty, and every WhatsApp message and AI call, with scores that tell your team who to contact today.',
  primary: { href: '#', label: 'Send me a sample customer record', wa: 'crm' },
  mock: L.mockMemory,
})}

${L.section(`${L.sectionHead('ONE CUSTOMER, A YEAR ON ONE RECORD', 'Watch a customer record fill itself in.', '')}${crmStory()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE RECORD', 'What a jewellery CRM has to do.', '')}<div class="wa-jobs">
  <article><h3>1. One record per customer and family</h3><p>Households link the bride, her mother and the father who pays. One phone number can belong to several family members. Duplicates entered by different salespeople are found and merged.</p><a href="/platform/customer-memory">Customer memory →</a></article>
  <article><h3>2. Occasions that remind you</h3><p>Birthdays, anniversaries and family weddings, with a message or call drafted before each date for your team to approve.</p><a href="/products/journeys">Journeys →</a></article>
  <article><h3>3. Schemes and purchases remembered</h3><p>Scheme balances and maturity dates, what they bought and at what rate, what they asked about on WhatsApp.</p><a href="/products/gold-schemes">Gold schemes →</a></article>
  <article><h3>4. Segments and who to call this week</h3><p>Group customers by purchases, occasions, schemes or city, and see who is about to stop coming. Each morning, every salesperson gets their list.</p><a href="/products/segmentation">Segments →</a></article>
  <article><h3>5. Loyalty that brings them back</h3><p>Points on every purchase, tiers, redemption, anniversary rewards and referral benefits, with points expiring after the period you set.</p><a href="/products/loyalty">Loyalty →</a></article>
  <article><h3>6. Leads, quotes, WhatsApp and calls</h3><p>Walk-ins, WhatsApp and Instagram enquiries routed to the right salesperson, quotes accepted online, and every chat and AI call written to the record.</p><a href="/products/whatsapp">WhatsApp API for jewellers →</a> · <a href="/ai-calling-for-jewellers">AI calling →</a></article>
</div>`)}

${L.section(`${L.sectionHead('KINDS OF SCORE', 'Eleven scores on every customer, in plain words.', 'What each one tells your team about a customer.')}<div class="crm-scores">${CRM_SCORES.map(([n, d]) => `<p><b>${n}</b><span>${d}</span></p>`).join('')}<p class="crm-scores-more"><b>And more</b><span>Each score updates as customers buy, message and visit.</span></p></div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What keeping more customers is worth.', 'Your numbers, not ours.')}<div class="callc" data-repeatc>
  <div class="callc-in">
    <label>Customers who bought in the last two years<input type="number" inputmode="numeric" data-rc="cust" value="3000" min="0"></label>
    <label>Average bill, ₹<input type="number" inputmode="numeric" data-rc="bill" value="45000" min="0" step="1000"></label>
    <label>Purchases a year per returning customer<input type="number" inputmode="decimal" data-rc="freq" value="1" min="0" step="0.1"></label>
    <label>Customers who come back today, %<input type="number" inputmode="decimal" data-rc="back" value="30" min="0" max="100"></label>
    <label>Extra customers kept, % points<input type="number" inputmode="decimal" data-rc="lift" value="5" min="0" max="50"></label>
    <label>Your margin on a sale, %<input type="number" inputmode="decimal" data-rc="margin" value="12" min="0" max="100"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Returning customers today</span><b data-rc-o="now">0</b></p>
    <p><span>Returning with a 5-point lift</span><b data-rc-o="then">0</b></p>
    <p><span>Extra sales a year</span><b data-rc-o="sales">₹0</b></p>
    <p class="callc-save"><span>Extra margin a year</span><b data-rc-o="margin">₹0</b></p>
    <p class="cta-note">A planning estimate from your own inputs, not a promise of results.</p>
  </div>
</div>`)}

${L.section(`${L.sectionHead('COMPARE', 'Excel, a generic CRM, or a jewellery CRM.', '')}${crmTable()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('MOVING FROM EXCEL OR ANOTHER CRM', 'How to move your customer list into a jewellery CRM.', 'Five steps. We do them with you during onboarding.')}${L.steps(CRM_MOVE.map(([title, text]) => ({ title, text })))}`)}

${L.section(`${L.sectionHead('PRIVACY AND CONSENT', 'Your customers’ trust, kept.', '')}<div class="jb-blogline"><p><b>Consent per channel:</b> who agreed to hear from you on WhatsApp, SMS, email or calls, kept with the record. Messages and calls respect it automatically.</p><p><b>Customer requests:</b> when a customer asks to see or delete their data, the request is handled and recorded.</p><p><b>Your data:</b> your own database, never shared with another jeweller, exportable any time. <a href="/trust/security">Security →</a></p></div>`, { tone: 'tint' })}

${L.oneSystemBlock([
  'The WhatsApp reply knows her scheme balance because the chat and the scheme share one record.',
  'When she buys at the counter, her purchase, points and tier update on the same record her next AI call will read.',
  'Her daughter’s wedding, added once, drives the reminder, the invitation and the bridal catalogue next year.',
])}

${L.ctaBand('Own your customer list. Finally.', 'We import your customers for you, from any software, any spreadsheet, any phone.', 'crm')}
`,
};

const catalog = {
  slug: 'products/catalog',
  title: 'Jewellery Catalogue Software: Purity and Live Prices | Jwero',
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
  h1: 'One catalogue, every piece priced at this minute’s gold rate — on WhatsApp, the counter and your website.',
  sub: 'Jewellery is the only retail where the price changes twice a day and the product has a certificate. Jwero’s catalogue treats purity, stones, certification and rate-linked pricing as first-class — so every channel always shows the truth.',
  primary: { href: '#', label: 'Send me a live-priced catalogue', wa: 'catalog' },
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

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site’s own chat button runs on Jwero — <a href="#" data-wa="catalog">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Retire the PDF catalogue.', 'See a live catalogue share — with prices that update while you watch.', 'catalog')}
`,
};

const inventory = {
  slug: 'products/inventory',
  title: 'Jewellery Inventory & Stock Management Software | Jwero',
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
  h1: 'Know what your stock is worth today, and which pieces stopped moving 180 days ago.',
  sub: 'Live valuation at today’s rate, ageing bands from 0–30 to 180+ days, and the number most owners have never seen: how much capital is sitting in pieces that stopped moving. Then the customers whose taste fits them.',
  primary: { href: '#', label: 'Show me my dead stock number', wa: 'inventory' },
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

${L.section(
  `${L.sectionHead('EVERY DOOR', 'Every way a piece leaves the vault — and comes back.', 'Jewellery stock rarely just sits or sells. It goes out on memo, to an exhibition, on approval to a good customer, to a karigar, to another branch. Each door is a ledger entry, not a sticky note.')}
  ${L.cards([
    { title: 'Memo & approval', text: 'Pieces out on approval memo to a customer or the trade, with due dates and a return-or-bill close.' },
    { title: 'Consignment', text: 'Stock placed with a partner store or taken from a supplier, valued and reconciled as its own ledger.' },
    { title: 'Exhibitions', text: 'A show’s stock goes out as a set, sells or returns piece by piece, and reconciles when the stand closes.' },
    { title: 'Trials & reservations', text: 'Held for a customer with an expiry — released automatically if she does not come back.' },
    { title: 'Vaults & transfers', text: 'Vault to showcase, branch to branch, with a documented trail for every high-value transit.' },
    { title: 'Counts & discrepancies', text: 'Scheduled or spot counts; every mismatch becomes a discrepancy to resolve, not a shrug.' },
    { title: 'Hallmarking', text: 'HUID and hallmark status carried on the piece; unhallmarked stock is flagged before it reaches the counter.' },
    { title: 'Labels & item ledger', text: 'Print tags from the record; every movement of a piece, from receipt to sale, on one ledger line.' },
  ], 4)}`
, { tone: 'tint' })}

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

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="inventory">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Find the sleeping capital.', 'Bring last year’s stock summary to a demo — we will show you what a memory-driven system sees in it.', 'inventory')}
`,
};

const billingFinance = {
  slug: 'products/billing-finance',
  title: 'Jewellery Billing Software: GST at the Live Gold Rate | Jwero',
  description: 'Jewellery billing software: GST invoices at the live gold rate, receivables tracking and payment reminders — with an honest note on what’s roadmap.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Billing & Finance', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'GST invoicing priced at the live gold rate, with receivables tracking, automated payment reminders and a full counter POS — returns, old-gold exchange and cash day-close included.',
    url: 'https://jwero.ai/products/billing-finance', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Billing & Finance'),
  faqs: [
    { q: 'Does Jwero do POS counter billing? Is there a POS alternative?', a: 'Yes — a full counter: scan or search a product, build a cart at the live gold rate, apply a discount, take old gold on an exchange voucher, take payment and generate the GST invoice; returns follow your branch’s policy and each register closes its shift with a reconciled cash count. <a href="/products/pos">See the Counter POS</a>.' },
    { q: 'Can it price invoices at today’s gold rate automatically?', a: 'Yes — invoicing uses the same live-rate pricing formulas as the catalogue, so a rate change is reflected instantly.' },
    { q: 'Does it chase payments for me?', a: 'Yes — automated reminders run on receivables so collection doesn’t depend on someone remembering to call.' },
    { q: 'Do our books move to Jwero, or stay in Tally?', a: 'Your choice. Every sale, return, payment and expense posts to Jwero’s own double-entry ledger with GST handled; the Tally / Zoho Books bridge carries it across if your accountant’s world should not change.' },
    { q: 'Is GST computation actually compliant, or an approximation?', a: 'GST (CGST/SGST/IGST) is computed as part of live-rate invoicing, data-driven rather than hardcoded. Confirm current statutory-filing scope for your state on a demo before relying on it for a specific compliance need.' },
  ],
  body: `
${L.hero({
  eyebrow: 'BILLING & FINANCE',
  h1: 'GST invoices at the live gold rate, in seconds.',
  sub: 'Rate changes twice a day; your invoices should follow instantly, not by hand. Jwero prices, invoices and tracks receivables at the rate that’s true right now — and reminds customers to pay without anyone chasing.',
  primary: { href: '#', label: 'Send me a live-rate GST invoice', wa: 'billing' },
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
  'E-invoice IRN and e-way bill generation — GST invoices are generated; IRP registration still runs in your CA’s tool.',
  'E-invoice / IRN and GSTR filing automation.',
])}

${L.section(`${L.sectionHead('BILLING QUESTIONS', 'Your current software, and GST accuracy.', '')}${L.faqBlock([
  { q: 'Is there a POS alternative in Jwero, or should I keep my current billing counter?', a: 'Jwero’s <a href="/products/pos">Counter POS</a> covers the sale, the exchange, the return and the till close — you do not need a second counter.' },
  { q: 'Is GST computation compliant, or an approximation?', a: 'It’s data-driven, not hardcoded. Confirm current statutory-filing scope for your state on a demo before relying on it for a specific compliance need.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>
<p class="cta-note" style="margin-top:14px">Wondering how jewellery software and Tally divide the work? <a href="/blog/jewellery-software-and-tally">Read the guide to running both without double entry →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="billing">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('See invoicing at today’s rate.', 'Change the rate live in a demo and watch a draft invoice reprice.', 'billing')}
`,
};

const erp = {
  slug: 'products/erp',
  title: 'Jewellery ERP Software: Orders, Purchase, Repairs, Job Work | Jwero',
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
  h1: 'Orders, purchases, repairs and job-work on the same record as the customer.',
  sub: 'A jewellery ERP usually means another silo: orders here, customers there, catalogue somewhere else. Jwero runs orders, purchases, repairs and manufacturing on the same record as the customer and the catalogue — because an operating system doesn’t get to have blind spots.',
  primary: { href: '#', label: 'Show me an order becoming a job', wa: 'erp' },
  secondary: { href: '/platform', label: 'See the full platform' },
})}

${L.section(
  `${L.cards([
    { title: 'Orders', text: 'Retail, B2B or custom — tracked from advance to delivery.', link: { href: '/products/inventory', label: 'See inventory' } },
    { title: 'Purchases & vendors', text: 'Purchase-to-pay with GRN weigh-and-assay — what you ordered, received and owe, reconciled.', link: { href: '/products/purchase-vendors', label: 'See purchase & vendors' } },
    { title: 'Repairs', text: 'Every repair tracked from intake to re-hallmark to return, with the hallmark gate enforced.', link: { href: '/products/repairs-service', label: 'See repairs & after-sales' } },
    { title: 'Manufacturing', text: 'Work-in-progress, stage tracking and a gold-loss ledger — see where every gram goes.', link: { href: '/solutions/manufacturers', label: 'For manufacturers' } },
  ], 4)}`
)}

${L.oneSystemBlock([
  'A repair job and the customer’s purchase history live on one record — your team knows what she owns before she says a word.',
  'Purchases and manufacturing WIP feed the same inventory truth that pricing and dead-stock visibility read from.',
])}

${L.section(`${L.sectionHead('OPERATIONS QUESTIONS', 'Mid-order switching, and processes that do not fit the mould.', '')}${L.faqBlock([
  { q: 'Will switching disrupt operations mid-order?', a: 'Open orders, repairs and purchase records import alongside customers and catalogue — nothing in progress gets orphaned.' },
  { q: 'Our process is unusual — can it be configured to match?', a: 'Custom fields and approval rules exist for this. We’ll also tell you plainly what isn’t configurable, before you commit.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>
<p class="cta-note" style="margin-top:14px">Running repairs on registers today? <a href="/blog/jewellery-repair-management-custody-chain">Read the guide to repair management and the custody chain →</a> Still comparing system types? <a href="/blog/jewellery-crm-vs-erp-difference">See what separates a CRM from an ERP →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="erp">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('WHAT THE ERP COVERS', 'Every back-office job, on the same record as the customer.', 'One system in place of separate billing, stock, purchase, workshop and accounts software. Open any part to see it in detail.')}
<div class="erp-map">${[
  ['/products/billing-finance', 'Billing and accounts', 'GST bills at the live rate, old-gold exchange, ledgers, and a Tally bridge.'],
  ['/products/inventory', 'Inventory', 'Every piece by weight, purity and tag, valued at today’s rate, with ageing.'],
  ['/products/purchase-vendors', 'Purchase and vendors', 'Orders, goods received, bills and vendor balances in one chain.'],
  ['/products/manufacturing', 'Workshop and karigars', 'Metal issued and returned in grams, job-work and wastage by stage.'],
  ['/products/repairs-service', 'Repairs and service', 'Every article taken in, tracked to the karigar and back to the customer.'],
  ['/products/girvi', 'Girvi', 'Pledges, interest and redemption on the customer’s own record.'],
  ['/products/gold-schemes', 'Gold schemes', 'Plans, instalments, bonuses and scheme liability in one place.'],
  ['/products/multi-store', 'Branches', 'Stock, transfers and day-close for every location on one system.'],
  ['/products/hr-payroll', 'Team and payroll', 'Attendance, incentives and payroll tied to the sales they earned.'],
  ['/products/reports', 'Reports', 'Sales, stock, cash and pending work, today, without building a sheet.'],
].map(([h, t, d]) => `<a href="${h}"><b>${t}</b><span>${d}</span></a>`).join('')}</div>`, { tone: 'tint' })}
${L.ctaBand('See operations on one record.', 'Bring one real order and follow it end to end — advance to delivery, on one screen.', 'erp')}
`,
};

const showroom = {
  slug: 'products/showroom',
  title: 'Jewellery Showroom Software: Walk-in Tracking and Floor View | Jwero',
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
  h1: 'Know who’s on your floor — and who left without buying.',
  sub: 'A showroom visit is the highest-intent moment in the whole business, and most stores remember none of it. Jwero checks walk-ins in, shows who is on the floor live, records what was shown and tried, and drafts a follow-up the moment someone leaves without buying.',
  primary: { href: '#', label: 'Show me the live floor view', wa: 'showroom' },
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
  `${L.sectionHead('', 'Every visit, from walk-in to walkout.', '')}
  ${L.cards([
    { title: 'Walk-in Register', text: 'Tablet check-in and check-out at the store entrance the moment a customer walks in, with a consent-labelled photo captured on the tablet’s camera and shown on the Live Floor card — never stored as a permanently public file.' },
    { title: 'Check-in intelligence', text: 'Type a phone number at the register — before check-in even completes — and see visit count, why they left last time, pieces tried-not-bought, category preferences, a maturing gold scheme, and a salesperson suggestion ranked by 90-day conversion.' },
    { title: 'Live Floor', text: 'A real-time view for staff and owner of who is currently in the store, updating live.' },
    { title: 'Scan-to-log', text: 'Log a tried piece by RFID, SKU or barcode scan in one motion — search is the fallback for a miss, not the default way of logging a visit.' },
    { title: 'Visit journey capture', text: 'Log which pieces were shown and tried, note a quote given, add notes, log a handover, and check the customer out — a per-visit record.' },
    { title: 'Per-person recommendations', text: 'Product suggestions with a stated reason — "new in necklaces," "tried 14 times this month" — derived from that customer’s actual visit and purchase behaviour, not a generic bestseller list.' },
    { title: 'Shown, tried, bought', text: 'The products view shows which pieces get shown often, tried often, and actually bought — surfacing a "tried often, rarely bought" merchandising signal.' },
    { title: 'Store insights', text: 'A small set of rule-based alerts — conversion drop, dead stock, staffing gap, walkout-reason spike, repeat non-buyer, unclosed-visit backlog. Deterministic rules, not predictive AI.' },
    { title: 'Multi-branch comparison', text: 'For chains: revenue-per-square-foot by store, a salesperson leaderboard, walkout-reason ranking, busiest hours and conversion-by-visit-purpose, rolled up centrally.' },
  ])}`
)}

${L.oneSystemBlock([
  'A walk-in checked in on the tablet is matched to their existing customer record — occasions, scheme balance and past visits are already there, not a blank slate.',
  'A Walkout Rescue draft is written from the same customer record and catalogue pricing the CRM and catalogue already share — not a separate database that goes stale.',
  'A digital gold or scheme balance nearing maturity auto-populates the Expected Visits list, landed at the customer’s nearest branch with the balance and date noted — see <a href="/products/digital-gold">Digital Gold</a> and <a href="/products/gold-schemes">Gold Savings Schemes</a>.',
])}

${L.section(`${L.sectionHead('SHOWROOM QUESTIONS', 'What sends automatically, and what still needs a person.', '')}${L.faqBlock([
  { q: 'Is Walkout Rescue automatic, or does it message customers without anyone checking?', a: 'No. It drafts the WhatsApp follow-up naming the pieces tried, but a staff member reviews and sends it. A rescue only counts as successful once linked to a completed sales order — never estimated.' },
  { q: 'Does the Daily Brief get pushed to WhatsApp automatically?', a: 'Not yet — today someone has to open the Daily Brief to see it. Automatic push delivery is not built yet.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="showroom">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('See who is on your floor, right now.', 'Bring one real walkout from last week — we will show you what Walkout Rescue would have drafted.', 'showroom')}
`,
};

const segmentation = {
  slug: 'products/segmentation',
  title: 'Jewellery Customer Segmentation Software: RFM and Live Rules | Jwero',
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
  sub: 'A segment here is a rule — RFM tier, tags, CRM stage, custom fields — that recalculates live against your actual customer records, so the audience is always current when a journey or campaign reads it.',
  primary: { href: '#', label: 'Show me a live audience', wa: 'segmentation' },
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

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="segmentation">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Stop exporting lists that are already wrong.', 'Bring one audience you send to often — we will show you the live rule that replaces the spreadsheet.', 'segmentation')}
`,
};

module.exports = [crm, catalog, inventory, billingFinance, erp, showroom, segmentation];
