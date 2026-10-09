const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

// Repairs, rebuilt 2026-10-07. The re-hallmark rule is described as a threshold
// flag without citing BIS figures (unconfirmed whether law or setting). Not
// claimed: customer tracking links, repair billing through POS, courier pickup.
// Old-gold exchange stays in-store only.
const RP_FLOW = [
  ['Intake', 'Ring for resizing · job card and tag printed'],
  ['Recorded', 'Condition photos · weight-in 4.82g'],
  ['Estimate', 'Sent on WhatsApp · she approves'],
  ['Assigned', 'To a karigar · handoff logged'],
  ['Returned', 'Weight-out 4.79g · 0.03g loss noted'],
  ['Ready', 'Ready alert on WhatsApp'],
  ['Delivered', 'Handed over · job closed on her record'],
];
const rpFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">REPAIR · INTAKE TO DELIVERY</p>${RP_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${RP_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const RP_CMP = [
  ['Intake', 'A paper slip', 'A job card', 'Job card, tag, photos and weight-in'],
  ['Who has it now', 'Ask around', 'Status field', 'Every handoff logged, never edited'],
  ['Weight', 'Not checked', 'Sometimes', 'Weight in vs weight out, loss noted'],
  ['Cost approval', 'A phone call', 'A note', 'Estimate she approves before work starts'],
  ['Re-hallmarking', 'Remembered, or not', 'No', 'Flagged, and blocks delivery until handled'],
  ['Ready, overdue, unclaimed', 'Someone calls', 'SMS', 'Alerts on WhatsApp, SMS and email'],
  ['Warranty', 'A card that goes missing', 'Separate', 'On the original invoice and HUID'],
];
const rpTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Paper repair slip</th><th>Generic job-card software</th><th>Jwero</th></tr></thead><tbody>${RP_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;
const RP_HOW = [
  ['Open a job card', 'Tag the piece, take condition photos, and record the weight.'],
  ['Send the estimate', 'She approves on WhatsApp before any work starts.'],
  ['Assign the work', 'To a karigar or vendor, with a promised date; every handoff is logged.'],
  ['Check it back in', 'Weigh it, compare with weight-in, and handle any re-hallmark flag.'],
  ['Tell her and hand over', 'A ready alert goes out; delivery closes the job on her record.'],
];
const rpFaqs = [
  { q: 'What is a jewellery repair job card?', a: 'The record created when a piece comes in for repair: a tag, photos, weight, the work needed and the promised date. In Jwero it then logs every handoff until delivery.' },
  { q: 'How do I track jewellery repairs?', a: 'Open a job card at intake, assign it with a promised date, and follow it on one board from intake to ready. Overdue and unclaimed jobs are flagged, and customers are alerted on WhatsApp, SMS or email.' },
  { q: 'How do I stop weight disputes on repairs?', a: 'Record the weight when the piece comes in and when it comes back. Jwero compares the two and notes any loss before the customer collects.' },
  { q: 'Does it know when a repair needs re-hallmarking?', a: 'Yes. A job that changes enough metal is flagged for re-hallmarking, and cannot be marked ready for delivery until the flag is handled.' },
  { q: 'How does a customer approve the cost?', a: 'An estimate is sent to her; she approves, declines or asks for a revision, and work starts only after approval.' },
  { q: 'Is warranty tied to what was sold?', a: 'Yes. Warranty and AMC are tied to the original invoice and HUID of the piece.' },
  { q: 'Can I do old gold exchange through Jwero?', a: 'Yes, in store: test, value, approve and settle, with purity method, today’s rate and KYC recorded.' },
];
const repairsService = {
  slug: 'products/repairs-service',
  title: 'Jewellery Repair Software: Job Cards, Tracking & After-Sales | Jwero',
  description: 'Jewellery repair software: job cards with tags, photos and weight, a custody chain that cannot be edited, weight in vs out, estimates customers approve, re-hallmark flags, WhatsApp alerts, and warranty on the original invoice.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Repairs & After-Sales Service', alternateName: ['Jewellery repair software', 'Jewellery repair job card software', 'Jewellery repair tracking'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Jewellery repair job cards with tag, condition photos and weight-in; an append-only custody chain; weight-in vs weight-out reconciliation; estimates the customer approves; a re-hallmark flag that blocks delivery; promised dates and a kanban board; alerts on WhatsApp, SMS and email; warranty and AMC on the original invoice and HUID; appraisal certificates; in-store old-gold exchange.',
    url: 'https://jwero.ai/products/repairs-service', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to manage jewellery repairs', step: RP_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Repairs & After-Sales Service'),
  faqs: rpFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY REPAIRS · AFTER-SALES',
  h1: 'Jewellery repair software: job cards, custody chain and weight checked, intake to delivery.',
  sub: 'A repair slip that says “in progress” is a problem the moment a customer asks where her gold went. Jwero tags the piece, logs every handoff, checks weight in against weight out, and tells her on WhatsApp when it is ready.',
  primary: { href: '#', label: 'Show me a repair’s custody chain', wa: 'repairsservice' },
  secondary: { href: '/blog/jewellery-repair-management-custody-chain', label: 'Repair management guide' },
})}

${L.section(`${L.sectionHead('ONE REPAIR, START TO FINISH', 'From a ring at the counter to a ring back on her finger.', '')}${rpFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE JOB CARD', 'What jewellery repair software has to do.', '')}<div class="wa-jobs">
  <article><h3>1. A job card at intake</h3><p>A claim tag, condition photos and the weight, recorded before the piece leaves the counter.</p><a href="/products/pos">POS →</a></article>
  <article><h3>2. A custody chain</h3><p>Every handoff, to a karigar, a vendor or back to the counter, logged and never edited.</p><a href="/products/manufacturing">Karigars →</a></article>
  <article><h3>3. Weight in, weight out</h3><p>What went in is checked against what came back, and any loss noted before she collects.</p><a href="/products/inventory">Inventory →</a></article>
  <article><h3>4. Approved before work starts</h3><p>An estimate she approves, declines or asks to revise; work starts only on approval.</p><a href="/products/quotations">Quotations →</a></article>
  <article><h3>5. Nothing forgotten</h3><p>Promised dates, one board for every job, a re-hallmark flag, and alerts for ready, overdue and unclaimed jobs.</p><a href="/products/whatsapp">WhatsApp →</a></article>
  <article><h3>6. After the sale</h3><p>Warranty and AMC on the original invoice and HUID, appraisal certificates, and old gold exchange in store.</p><a href="/products/crm">Customer record →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What untracked repairs cost you.', 'Your numbers, not ours.')}<div class="callc" data-rpc>
  <div class="callc-in">
    <label>Repairs a month<input type="number" inputmode="numeric" data-rp="n" value="120" min="0"></label>
    <label>Where she has to call to ask about status, %<input type="number" inputmode="decimal" data-rp="call" value="40" min="0" max="100"></label>
    <label>Minutes to find the answer<input type="number" inputmode="numeric" data-rp="min" value="10" min="0"></label>
    <label>Weight disputes a month<input type="number" inputmode="numeric" data-rp="disp" value="3" min="0"></label>
    <label>Average cost of settling a dispute, ₹<input type="number" inputmode="numeric" data-rp="cost" value="2000" min="0" step="100"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Staff hours on status calls a month</span><b data-rp-o="hrs">0</b></p>
    <p><span>Disputes settled a year</span><b data-rp-o="yr">₹0</b></p>
    <p class="cta-note">A planning estimate from your own inputs.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'A paper slip, generic job-card software, or Jwero.', '')}${rpTable()}`)}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to manage jewellery repairs.', 'Five steps.')}${L.steps(RP_HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.oneSystemBlock([
  'A repair and her purchase history are on the same record, so your team knows what she owns before she says a word.',
  'Warranty reads the same invoice and HUID data the billing and catalogue keep.',
  'Weight going out to a karigar and coming back is in the same metal records as manufacturing.',
])}

${L.ctaBand('See a repair, tracked properly.', 'Bring one real repair job; we will show you the custody chain it would have created.', 'repairsservice')}
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
