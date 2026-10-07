const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

const repairsService = {
  slug: 'products/repairs-service',
  title: 'Repairs & After-Sales Service Software for Jewellers | Jwero',
  description: 'Repair and service tracking with a custody chain, weight reconciliation, an auto re-hallmark flag, warranty tied to the original invoice, and old-gold buyback.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Repairs & After-Sales Service', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Repair job intake, an append-only custody chain, weight-in/weight-out reconciliation, an automatic BIS re-hallmarking flag, versioned estimates, warranty tied to the original invoice, appraisal certificates, and in-store old-gold exchange/buyback.',
    url: 'https://jwero.ai/products/repairs-service', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Repairs & After-Sales Service'),
  faqs: [
    { q: 'What actually gets recorded when a repair job comes in?', a: 'Intake generates a claim-check tag, condition photos are attached, and weight-in is captured. Every handoff after that — to a karigar, a vendor, back to the front desk — is logged in an append-only custody chain nobody can edit or delete. Weight-out is reconciled against weight-in before the job can close.' },
    { q: 'Does it know when a repair needs re-hallmarking?', a: 'Yes. When a job crosses the BIS threshold for re-hallmarking — a 2-gram or 50%-of-melt rule — it is flagged automatically, and the job cannot reach "ready for delivery" until that flag is cleared. This is built into the workflow, not a checklist someone has to remember.' },
    { q: 'How does a customer approve what a repair will cost?', a: 'A versioned estimate is sent to the customer, who approves, declines, or asks for a revision. Work on the job\'s task list only starts once the current estimate version is approved.' },
    { q: 'Is warranty tracking connected to what was actually sold?', a: 'Yes — warranty and AMC entitlements are tied to the original invoice and HUID of the piece, so a claim or a scheduled inspection is linked back to exactly what was sold and when, not a separate promise nobody can verify.' },
    { q: 'Can I do old-gold exchange or buyback through Jwero?', a: 'Yes, as a staff-operated, in-store flow: test, value, approve, settle and post, with purity-testing method, live rate and PAN/KYC captured where required. There is no customer-facing online self-service valuation form on the website yet.' },
    { q: 'How do customers know their repair is ready?', a: 'Automated notifications go out on WhatsApp, SMS and email for job-ready, overdue and unclaimed-item states — nobody has to remember to call.' },
  ],
  body: `
${L.hero({
  eyebrow: 'REPAIRS & AFTER-SALES SERVICE',
  h1: 'Every repair leaves a paper trail your customer can trust.',
  sub: 'A repair ticket that just says "in progress" is a liability the moment a customer asks where their gold went. Jwero tracks every handoff, reconciles weight in against weight out, and won\'t let a re-hallmark-eligible job reach delivery unaddressed.',
  primary: { href: '#', label: 'Show me a repair’s custody chain', wa: 'repairsservice' },
  secondary: { href: '/products/erp', label: 'See the full ERP' },
})}

${L.section(
  `${L.sectionHead('INTAKE TO DELIVERY', 'A custody chain, not a paper ticket.', '')}
  ${L.cards([
    { title: 'Claim-check intake', text: 'Every job generates a tag at intake — like a Jangad tag — with condition photos and a captured weight-in.' },
    { title: 'Append-only custody chain', text: 'Every handoff — to a karigar, an external vendor, back to the counter — is logged permanently. Nothing in the chain can be edited or deleted.' },
    { title: 'Weight-in / weight-out reconciliation', text: 'What went in is checked against what comes out, catching shrinkage or loss during the repair before it becomes a dispute.' },
    { title: 'Karigar, vendor or outsourced', text: 'Assign a job to an in-house karigar, an external vendor, or mark it outsourced — with the assignment visible on the record.' },
    { title: 'SLA & promised-date tracking', text: 'Every job carries a promised date, so overdue work is visible before the customer has to ask.' },
    { title: 'Kanban across the operation', text: 'One board shows every job\'s status — intake, in-progress, awaiting parts, ready — across the whole shop.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE RE-HALLMARK GATE', 'A compliance rule, enforced. Not a memory test.', '')}
  <div class="stack-verdict"><strong>When a repair changes enough metal to trigger BIS re-hallmarking — a 2-gram or 50%-of-melt threshold — the job is flagged automatically, and it cannot move to "ready for delivery" until the flag is addressed.</strong> Most repair-tracking tools have no idea this rule exists. Here it is built into the status flow itself, so a busy counter can't accidentally hand back a piece that legally needed re-testing.</div>`,
  { tone: 'tint' }
)}

${L.section(
  `${L.sectionHead('ESTIMATES, WARRANTY & CERTIFICATES', 'What ties a repair back to what was actually sold.', '')}
  ${L.cards([
    { title: 'Versioned estimates', text: 'A per-job estimate is sent to the customer, who approves, declines, or asks for a revision — the job\'s task list only starts once the current version is approved.' },
    { title: 'Warranty & AMC on the original invoice', text: 'Warranty plans and entitlements are tied to the original invoice and HUID of the piece, so a claim or a scheduled inspection is linked to exactly what was sold and when.' },
    { title: 'Appraisal & valuation certificates', text: 'Issue a formal appraisal or valuation certificate for a piece as a PDF.' },
    { title: 'Automated status notifications', text: 'Job-ready, overdue and unclaimed-item states trigger automated notifications across WhatsApp, SMS and email.' },
  ], 4)}`
)}

${L.section(
  `${L.sectionHead('OLD-GOLD EXCHANGE & BUYBACK', 'A real lifecycle, done correctly — in-store, for now.', '')}
  <p>Old-gold exchange or cash buyback runs a genuine test → value → approve → settle → post lifecycle: it records whether the metal comes in as-is or melted (which determines the correct GST margin-scheme/HSN treatment — 7113 vs 7108), the purity-testing method used (touchstone, XRF or fire assay vs melt assay), and a snapshot of the live rate applied. High-value transactions capture PAN/KYC per Income Tax Rule 114B. It supports a standalone walk-in cash buyback or using old gold as exchange-credit against a new sale, and on completion it posts to a raw-material inventory lot and a finance document automatically.</p>
  <p><strong>Honest limitation:</strong> this is a staff-operated, in-store flow today. There is no customer-facing online or self-service old-gold valuation form on the website — a customer still has to bring the piece in.</p>`
)}

${L.honestGapsBlock([
  'Old-gold exchange/buyback is in-store only — no online self-service valuation form on the website yet.',
])}

${L.oneSystemBlock([
  'A repair job and the customer\'s purchase history live on the same record — your team knows what she owns and what she has already paid for before she says a word.',
  'Warranty entitlements read the same invoice and HUID data the billing and catalogue layers already keep — not a separate warranty card that can go missing.',
])}

${L.section(`${L.sectionHead('REPAIRS QUESTIONS', 'The custody chain, the re-hallmark flag, and old-gold buyback.', '')}${L.faqBlock([
  { q: 'What gets recorded on a repair job?', a: 'A claim-check tag, condition photos, weight-in, and an append-only custody chain logging every handoff — nothing in it can be edited or deleted. Weight-out is reconciled before close.' },
  { q: 'Does it catch repairs that need re-hallmarking?', a: 'Yes — jobs crossing the BIS 2-gram or 50%-of-melt threshold are flagged automatically, and cannot reach "ready for delivery" until addressed.' },
  { q: 'Can old-gold buyback be done online?', a: 'Not yet — it is a staff-operated, in-store flow only. There is no customer-facing self-service valuation form on the website.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>
<p class="cta-note" style="margin-top:14px">Still running repairs on registers? <a href="/blog/jewellery-repair-management-custody-chain">Read the guide to repair management and the custody chain →</a> Repairs is one part of the wider operations layer — <a href="/products/erp">see the full ERP →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn't a demo video — <a href="#" data-wa="repairsservice">message us here</a> and Jwero's own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('See a repair, tracked properly.', 'Bring one real repair job — we will show you the custody chain it would have generated here.', 'repairsservice')}
`,
};

// Purchase and vendors, rebuilt 2026-10-07. AI-drafted purchase orders and
// unfixed-rate purchases confirmed by Jwero.
const P2P_FLOW = [
  ['Drafted by AI', 'Reorder 40 pairs of 22K jhumkas · fast movers, low stock'],
  ['Order sent', 'PO 0412 to Shree Chains · 252 g · rate unfixed, to be fixed on delivery'],
  ['Shipping notice', 'Vendor confirms dispatch on the portal'],
  ['Received', '250.4 g received against 252 g ordered · shortfall flagged'],
  ['Quality check', 'Purity tested 916 · passed'],
  ['Rate fixed', 'Rate fixed today at ₹6,875 a gram'],
  ['Bill matched', 'Bill matched to the order and receipt · shortfall credited'],
  ['GST credit', 'Matched against GSTR-2B · input credit confirmed'],
  ['Paid', 'Payment visible to the vendor on the portal'],
];
const p2pFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">PURCHASE ORDER 0412</p>${P2P_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}</div>
  <ol class="wa-steps">${P2P_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const PUR_CMP = [
  ['What to buy', 'Gut feel', 'Reorder levels', 'AI-drafted orders from what is selling and ageing'],
  ['Gold bought before the rate is fixed', 'A note in the book', 'Rarely', 'Unfixed-rate purchases, fixed later'],
  ['Receiving', 'Weigh and write', 'Quantity', 'By weight and purity, with quality checks'],
  ['Bill matched to order and receipt', 'By hand', 'Yes', 'Yes, with shortfalls credited'],
  ['GST input credit checked against GSTR-2B', 'CA, later', 'Some', 'Yes'],
  ['Metal purchases and metal loans in fine grams', 'Separate book', 'No', 'Yes'],
  ['Consignment stock from suppliers', 'Notebook', 'No', 'Yes'],
  ['Vendors see their own payment status', 'They call', 'No', 'Vendor portal'],
];
const purTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>WhatsApp, notebook and Tally</th><th>Generic purchase software</th><th>Jwero</th></tr></thead><tbody>${PUR_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>`;
const PUR_MOVE = [
  ['List your vendors', 'Suppliers, karigars-as-suppliers and bullion dealers, with their GSTIN, terms and prices.'],
  ['Bring open orders and balances', 'Open purchase orders, unpaid bills, advances, metal loans and unfixed-rate balances.'],
  ['Set your buying rules', 'Who approves orders, rate-fixing practice, and quality checks at receiving.'],
  ['Invite vendors to the portal', 'Each supplier gets a login to see orders, bills and payments; nothing to install.'],
  ['Reconcile with GSTR-2B monthly', 'Purchases matched to the portal data, so input credit is claimed in full.'],
];
const purFaqs = [
  { q: 'What is jewellery purchase management software?', a: 'Software for buying jewellery, gold and stones: purchase orders with per-vendor prices, receiving by weight and purity with quality checks, bills matched to the order and receipt, returns, vendor advances and payments, GST input credit checked against GSTR-2B, and metal purchases in fine grams.' },
  { q: 'Can AI draft purchase orders?', a: 'Yes. Jwero drafts purchase orders from what is selling fast, what is running low and what is ageing, with each vendor’s prices. Your team reviews and sends them.' },
  { q: 'Can I buy gold before the rate is fixed?', a: 'Yes. Record an unfixed-rate purchase by weight and purity, and fix the rate later, as is common with bullion dealers and suppliers. The bill and the metal ledger update when the rate is fixed.' },
  { q: 'How do jewellers reconcile purchases with GSTR-2B?', a: 'Match every purchase bill against GSTR-2B each month. Bills a supplier has not filed show up as gaps, so you can chase them before claiming input credit. Jwero does this matching for you.' },
  { q: 'Should gold purchases be recorded in fine grams or rupees?', a: 'Both. Rupees for the accounts, and fine grams for the metal ledger, so metal bought, issued, sold and owed can be compared whatever the rate.' },
  { q: 'What is a vendor portal?', a: 'A separate login where each supplier sees their orders, delivery status, bills and payments, so they stop calling to ask. Nothing to install.' },
  { q: 'How do jewellers handle consignment stock from suppliers?', a: 'Record it as stock you hold but do not own, sell from it, and settle with the supplier for what sold. Jwero keeps consignment stock separate and produces the settlement.' },
  { q: 'Can I set different prices per vendor?', a: 'Yes. Each vendor’s prices and terms are kept on their record and used on their orders.' },
  { q: 'Is this the same as manufacturing job work?', a: 'No. Purchase is buying from suppliers. Sending metal to karigars for making is job work, handled in manufacturing on challans.' },
];

const purchaseVendors = {
  slug: 'products/purchase-vendors',
  title: 'Jewellery Purchase & Vendor Management Software | Jwero',
  description: 'Jewellery purchase and vendor management software: AI-drafted orders, unfixed-rate gold purchases, receiving with quality checks, bill matching, GSTR-2B reconciliation, metal loans and a vendor portal.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery Purchase & Vendor Management', alternateName: ['Jewellery purchase management software', 'Jewellery vendor management software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Jewellery purchasing: AI-drafted purchase orders, per-vendor prices, unfixed-rate purchases, advance shipping notices, goods received by weight and purity with quality checks, bill matching, returns, vendor advances and payments, GSTR-2B reconciliation, metal purchases and loans in fine grams, consignment stock, and a vendor portal.',
    url: 'https://jwero.ai/products/purchase-vendors', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
    offers: { '@type': 'Offer', price: '18000', priceCurrency: 'INR', description: 'Jwero One per month, every module included.' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to move your jewellery purchasing and vendors into Jwero', step: PUR_MOVE.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Purchase and vendors'),
  faqs: purFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY PURCHASE & VENDOR MANAGEMENT',
  h1: 'Jewellery purchase and vendor management: buy, receive, match, pay, and suppliers who stop calling.',
  sub: 'AI drafts the order from what is selling. Buy gold now and fix the rate later. Receive by weight and purity, check quality, match the bill, claim every rupee of GST input credit, and let suppliers see their own payment status.',
  primary: { href: '#', label: 'Show me a purchase, order to paid', wa: 'purchase' },
})}

${L.section(`${L.sectionHead('ONE ORDER, START TO FINISH', 'From an AI-drafted order to a vendor who is paid.', '')}${p2pFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE PURCHASE BOOK', 'What jewellery purchase software has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Buy what sells</h3><p>AI drafts purchase orders from fast movers, low stock and ageing, with each vendor’s prices and terms. Your team reviews and sends.</p><a href="/products/inventory">Stock and ageing →</a></article>
  <article><h3>2. Buy gold, fix the rate later</h3><p>Unfixed-rate purchases recorded by weight and purity, with the rate fixed later; the bill and metal ledger update when it is.</p><a href="/blog/fine-weight-metal-ledger-jewellers">Fine weight →</a></article>
  <article><h3>3. Receive and check</h3><p>Shipping notices from vendors, goods received by weight and purity, quality checks, and shortfalls raised with the vendor.</p><a href="/products/manufacturing">Manufacturing →</a></article>
  <article><h3>4. Bills that match</h3><p>Purchase bills matched to the order and what was received, returns and credit notes, vendor advances and payments.</p><a href="/products/billing-finance">Finance →</a></article>
  <article><h3>5. Claim every rupee of GST</h3><p>Purchases reconciled with GSTR-2B each month, so bills your suppliers have not filed are chased before you claim input credit.</p><a href="/blog/gst-on-jewellery-india">GST on jewellery →</a></article>
  <article><h3>6. Metal, consignment and the vendor portal</h3><p>Metal purchases and metal loans in fine grams, consignment stock from suppliers settled for what sold, and a portal where vendors see their own orders and payments.</p><a href="/blog/approval-memo-stock-jewellery-wholesale">Memo and consignment →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'GST input credit you might be missing.', 'Your numbers, not ours.')}<div class="callc" data-itcc>
  <div class="callc-in">
    <label>Purchases a month, ₹<input type="number" inputmode="numeric" data-ic="buy" value="5000000" min="0" step="100000"></label>
    <label>GST rate on purchases, %<input type="number" inputmode="decimal" data-ic="gst" value="3" min="0" step="0.25"></label>
    <label>Bills not matched or claimed late, %<input type="number" inputmode="decimal" data-ic="miss" value="5" min="0" max="100"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>GST paid on purchases a month</span><b data-ic-o="gst">₹0</b></p>
    <p><span>Input credit at risk a month</span><b data-ic-o="month">₹0</b></p>
    <p class="callc-save"><span>Input credit at risk a year</span><b data-ic-o="year">₹0</b></p>
    <p class="cta-note">An estimate from your own inputs. Confirm input credit rules with your CA.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'Notebook and Tally, generic purchase software, or Jwero.', '')}${purTable()}`)}

${L.section(`${L.sectionHead('MOVING YOUR VENDORS IN', 'How to move your jewellery purchasing and vendors into Jwero.', 'Five steps, done with you.')}${L.steps(PUR_MOVE.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.oneSystemBlock([
  'What you buy comes from what the counter, the website and WhatsApp are selling, on the same stock.',
  'Gold bought on an unfixed rate sits on the same fine-weight ledger as karigar balances and metal loans.',
  'A supplier’s bill, the GST credit and the payment are one trail your CA can follow.',
])}

${L.ctaBand('Let your vendors check their own status.', 'Bring one supplier’s orders and bills from last month. We will show the full trail in Jwero.', 'purchase')}
`,
};

module.exports = [repairsService, purchaseVendors];
