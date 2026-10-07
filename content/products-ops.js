// Product pages added in the 2026-09 coverage audit (blueprint/PRODUCT-COVERAGE-AUDIT-2026-09.md):
// modules that exist in the product but had no page — or were still called "roadmap" here.
// Every capability line below traces to a service or screen in ~/pim; see the audit for paths.
const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

// The POS page, rebuilt 2026-10-07 around "jewellery billing software", the search
// jewellers actually use. Hardware, built-in UPI terminals and a PAN prompt are not
// claimed until confirmed; offline billing and recorded card tenders are shipped.
const BILL_LINES = [
  ['scan', 'Tag scanned', 'Necklace · 22K (916) · net 18.40 g · HUID verified'],
  ['metal', 'Metal at today’s rate', '18.40 g × ₹6,875 = ₹1,26,500'],
  ['make', 'Making, 12%', '₹15,180'],
  ['gst', 'GST, 3%', '₹4,250'],
  ['old', 'Old gold exchange', '− ₹42,000 (voucher, 6.1 g after stone deduction)'],
  ['pay', 'Paid', 'UPI ₹80,000 · Cash ₹23,930'],
  ['rec', 'Receipt', 'Sent to Meera on WhatsApp · points added'],
];
const billDemo = () => `<div class="bill-demo" data-bill-demo>
  <div class="bill-paper" aria-hidden="true"><div class="bill-head"><b>Shree Jewellers</b><i>Counter 2 · Shift open</i></div>
    ${BILL_LINES.map(([k, l, v], i) => `<p class="bill-line bl-${k}" data-i="${i}"><span>${l}</span><b>${v}</b></p>`).join('')}
    <p class="bill-total"><span>Total</span><b>₹1,03,930</b></p></div>
  <ol class="wa-steps">${['Scan or search the piece', 'Price at today’s rate', 'Making and stones', 'GST added', 'Old gold deducted', 'Split payment', 'Receipt on WhatsApp'].map((t) => `<li><b>${t}</b></li>`).join('')}</ol>
</div>`;

const POS_CMP = [
  ['Price at today’s rate', 'Calculator', 'Typed in', 'Automatic, every bill'],
  ['Scan a tag to bill', 'No', 'Often', 'Yes, or search by local name'],
  ['Old gold exchange on the bill', 'Slip and calculator', 'Separate entry', 'Voucher, applied as credit'],
  ['HUID check before sale', 'No', 'Rarely', 'Warns or blocks, your choice'],
  ['Estimates that become bills', 'Rewrite', 'Sometimes', 'Yes, one tap'],
  ['Customer remembered', 'Name on a copy', 'A ledger', 'Full record: purchases, scheme, occasions'],
  ['Receipt on WhatsApp', 'No', 'Rarely', 'Yes'],
  ['Cash day-close', 'Count and hope', 'Report', 'Declared count, variance on screen'],
  ['Works if the internet drops', 'Yes', 'Yes', 'Yes, sales sync when it returns'],
];
const posTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Bill book and calculator</th><th>Desktop billing software</th><th>Jwero</th></tr></thead><tbody>${POS_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>`;

const POS_MOVE = [
  ['Bring your stock and customers', 'We import pieces with weights and tags, and your customers, from your current software or Excel.'],
  ['Set your rates and making rules', 'Today’s rate source, purities, making and wastage rules, by category.'],
  ['Set up counters and people', 'Registers, cashiers, salespeople, and who can approve discounts and returns.'],
  ['Run both for a week', 'Bill in Jwero while your old software runs alongside, until the totals match.'],
  ['Keep your books where your CA likes them', 'Jwero’s own ledger, or a bridge to Tally or Zoho Books.'],
];

const posFaqs = [
  { q: 'What is jewellery billing software?', a: 'Jewellery billing software prices and bills pieces the way a jewellery counter works: by net weight and purity at today’s gold rate, plus making, stones and 3% GST, with old gold exchange, estimates, HUID checks, returns and the cash day-close.' },
  { q: 'Which is the best billing software for a jewellery shop?', a: 'Look for automatic pricing at today’s rate, tag scanning, old gold exchange on the same bill, a HUID check, estimates, returns, cash day-close, billing that keeps working offline, and the customer record behind every bill. Jwero does all of these on one system.' },
  { q: 'How is the gold price calculated on a bill?', a: 'Metal value is today’s 24K rate × karat ÷ 24 × net weight. Add making, stones and other charges, then 3% GST. Jwero does this on every bill automatically; try the calculator on this page.' },
  { q: 'Does it handle HUID and old gold?', a: 'Yes. The counter checks each piece’s HUID and can warn or block an unhallmarked sale. Old gold is taken in on an exchange voucher with weight, purity and stone deduction, and applied as credit on the new bill.' },
  { q: 'What is the difference between jewellery POS and billing software?', a: 'They are the same job at the counter. Jewellery POS usually means the whole till: scanning, pricing, payments, returns and the cash day-close. Jewellery billing software is how many jewellers search for it. Jwero does both on one screen.' },
  { q: 'Can I use it without internet?', a: 'Yes. The counter installs on the till device and keeps billing through a dropout; each sale syncs once the connection returns, without duplicates.' },
  { q: 'Can a customer pay with UPI, card and cash on one bill?', a: 'Yes. The cashier records cash, card, UPI and credit, split across one bill. Card machines are not driven by Jwero; the cashier records the amount taken on the machine.' },
  { q: 'Can I give an estimate and turn it into a bill later?', a: 'Yes. Estimates are saved on the customer’s record and become a bill in one step, repriced at that day’s rate.' },
  { q: 'Do I still need my old billing software?', a: 'Not for the sale, the return or the till. Your books can stay in Tally or Zoho Books through the bridge, or run on Jwero’s own ledger.' },
  { q: 'Can two cashiers share a register?', a: 'A register has one open shift at a time, so takings are always attributable to the person who opened it.' },
  { q: 'Can a salesperson be credited for the sale?', a: 'Yes. The salesperson on the bill feeds incentives and the sales reports.' },
];

const pos = {
  slug: 'products/pos',
  title: 'Jewellery Billing Software & POS for Jewellery Shops | Jwero',
  description: 'Jewellery billing software and POS: price at today’s gold rate, scan tags, old gold exchange, HUID check, estimates, split payments, WhatsApp receipts and cash day-close.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery Billing Software & POS', alternateName: ['Jewellery POS software', 'Jewellery billing software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Jewellery billing and point of sale: live-rate pricing by weight and purity, tag scanning and local-name search, old gold exchange vouchers, HUID check, estimates, split payments, returns, registers and cash day-close, offline-capable.',
    url: 'https://jwero.ai/products/pos', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
    offers: { '@type': 'Offer', price: '18000', priceCurrency: 'INR', description: 'Jwero One per month, every module included.' },
  },
  extraSchema: [{
    '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to switch your jewellery shop billing to Jwero',
    step: POS_MOVE.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })),
  }],
  breadcrumbs: BC('Jewellery billing & POS'),
  faqs: posFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY BILLING SOFTWARE · JEWELLERY POS',
  h1: 'Jewellery billing software and POS: scan, sell, exchange, return, close the till.',
  sub: 'One screen at the counter: scan or search a piece, price it at today’s gold rate, take old gold in exchange, check the HUID, bill with GST, take payment and send the receipt on WhatsApp. Then close the shift with a cash count that reconciles itself.',
  primary: { href: '#', label: 'Show me a till close', wa: 'pos' },
})}

${L.section(`${L.sectionHead('ONE BILL, START TO FINISH', 'A real counter sale, line by line.', 'Scan, price, exchange, pay, receipt.')}${billDemo()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS AT THE COUNTER', 'What jewellery billing software has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Find the piece in a second</h3><p>Scan the tag, or search by name, even by local names like “jhumka” or “kada”. The customer is recognised from their number, with their history on screen.</p><a href="/products/inventory">Inventory and tags →</a></article>
  <article><h3>2. Price at today’s rate</h3><p>Net weight, purity, making, stones and GST, priced from today’s rate automatically. Estimates are saved and become a bill in one step.</p><a href="/blog/how-to-calculate-gold-jewellery-price">How the price is worked out →</a></article>
  <article><h3>3. Old gold and schemes on the same bill</h3><p>Old gold on an exchange voucher with weight, purity and stone deduction, applied as credit. Scheme balances redeemed against the purchase.</p><a href="/blog/old-gold-exchange-jewellers">Old gold exchange →</a></article>
  <article><h3>4. Take payment your customer’s way</h3><p>Cash, card, UPI and credit, split across one bill, with coupons where you allow them. The receipt goes to the customer on WhatsApp.</p><a href="/products/whatsapp">WhatsApp API for jewellers →</a></article>
  <article><h3>5. Rules at the till</h3><p>A HUID check that warns or blocks an unhallmarked sale, discounts above a limit sent to a manager, and returns under each branch’s own policy.</p><a href="/blog/huid-hallmarking-rules-jewellers">HUID rules →</a></article>
  <article><h3>6. Close the day in minutes</h3><p>Registers and shifts per counter, a declared cash count, the variance on screen before the cashier goes home, per currency if you take foreign notes.</p><a href="/products/billing-finance">Billing and finance →</a></article>
</div>`)}

${L.section(`${L.sectionHead('TRY THE ARITHMETIC', 'This is the bill your counter will print.', 'Change the rate, purity, weight and making.')}${require('./blog-rules').priceCalc}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('TIME AT THE COUNTER', 'What faster bills give back.', 'Your numbers, not ours.')}<div class="callc" data-tillc>
  <div class="callc-in">
    <label>Bills a day<input type="number" inputmode="numeric" data-tc="bills" value="25" min="0"></label>
    <label>Minutes saved per bill<input type="number" inputmode="decimal" data-tc="mins" value="4" min="0" step="0.5"></label>
    <label>Counter staff salary a month, ₹<input type="number" inputmode="numeric" data-tc="salary" value="22000" min="0" step="1000"></label>
    <label>Days open a month<input type="number" inputmode="numeric" data-tc="days" value="26" min="0" max="31"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Hours back every month</span><b data-tc-o="hours">0</b></p>
    <p class="callc-save"><span>Staff time saved a month</span><b data-tc-o="money">₹0</b></p>
    <p><span>Customers waiting less, every day</span><b data-tc-o="bills">0</b></p>
    <p class="cta-note">Minutes saved come from no repricing by hand, no hunting for tags and no exchange sums on a calculator. Staff cost is worked out on 9-hour days.</p>
  </div>
</div>`)}

${L.section(`${L.sectionHead('COMPARE', 'Bill book, desktop billing software, or Jwero.', '')}${posTable()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('MOVING FROM DESKTOP BILLING OR TALLY', 'How to switch your jewellery shop billing to Jwero.', 'Five steps, done with you. Nothing about your books has to change on day one.')}${L.steps(POS_MOVE.map(([title, text]) => ({ title, text })))}`)}

${L.oneSystemBlock([
  'A counter sale, a WhatsApp order and a storefront checkout post through the same invoice and the same ledger.',
  'The piece scanned at the till is the record the catalogue publishes and the inventory values; sell it here and it disappears from the storefront at once.',
  'The bill writes to the customer’s record: what she bought, what she exchanged, her points, and what to remember next time.',
])}

${L.honestGapsBlock([
  'Card machines are not driven by Jwero: the cashier records the amount taken on the machine.',
])}

${L.ctaBand('See a sale rung up, returned and closed.', 'Bring one real bill from last week. We will run it through the counter, exchange, GST and till close, live.', 'pos')}
`,
};

const manufacturing = {
  slug: 'products/manufacturing',
  title: 'Jewellery Manufacturing Software: Karigar, BOM, Wastage | Jwero',
  description: 'Manufacturing for jewellery: bill of materials, routings, production orders, stage-wise wastage norms with a metal-closure check, job cards, QC, raw-material lots and a karigar khata that settles wages against gold.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Manufacturing & Workshop', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Jewellery manufacturing: BOM, routings, production orders, wastage norms, metal closure, job cards, QC, raw materials and karigar settlement.',
    url: 'https://jwero.ai/products/manufacturing', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Manufacturing & Workshop'),
  faqs: [
    { q: 'Does it track gold through every stage, or just in and out?', a: 'Every stage. A production order carries a routing; each stage has a wastage norm; issue and receipt are weighed at each hand-off. The order cannot close until the metal balances — issued equals received plus recorded loss within norm.' },
    { q: 'How does it work with my karigars?', a: 'Each karigar has a directory entry, open jobs, a khata of metal issued and returned, and a settlement that converts work to wages under your wastage policy — posted to the books in the same step.' },
    { q: 'Can I run it without a routing for every design?', a: 'Yes. Routing templates resolve automatically from the product’s category and metal, in a fixed, auditable order, so a new design gets a sensible routing without a planner.' },
    { q: 'What about stones and raw metal?', a: 'Metal and stone masters, raw-material purchase orders, receiving QC and lots feed the same BOM — so a finished piece knows which lot its metal and stones came from.' },
    { q: 'Does it plan capacity or forecast what to make?', a: 'Capacity per stage is modelled and job due-dates are swept for lateness. It does not yet net demand against stock and work-in-progress into a make list — that decision is still yours, and we say so plainly.' },
  ],
  body: `
${L.hero({
  eyebrow: 'MANUFACTURING & WORKSHOP',
  h1: 'Every milligram from bench to finished piece — and a karigar khata that closes.',
  sub: 'A workshop spine that speaks the bench’s language: bill of materials, routing, issue desk, stage-wise wastage norms, job cards, QC — and a karigar khata that settles wages against the metal that came back. The order does not close until the metal balances.',
  primary: { href: '#', label: 'Show me one job, gram by gram', wa: 'manufacturers' },
  secondary: { href: '/solutions/manufacturers', label: 'For manufacturers' },
})}

${L.section(
  `${L.sectionHead('FROM DESIGN TO FINISHED PIECE', 'One production order, weighed at every hand-off.', '')}
  ${L.steps([
    { title: 'Bill of materials', text: 'Metal, stones, findings and their expected weights per design — the composition every later step is checked against.' },
    { title: 'Routing & release', text: 'Casting, filing, setting, polishing, hallmarking: the routing resolves from the design’s category and metal, and release explodes BOM and routing in one step.' },
    { title: 'Issue desk', text: 'Metal and stones issued to a karigar or a stage, pre-filled from the BOM and the sales order, weighed on the way out.' },
    { title: 'Wastage norms', text: 'Each stage has a norm. Loss beyond it is flagged; loss within it is booked. Nothing disappears into “process loss”.' },
    { title: 'QC & hallmarking', text: 'Inspection with dispositions — pass, rework, scrap — and HUID/hallmark recorded on the piece before it can be sold.' },
    { title: 'Finished-goods receipt', text: 'The finished piece is minted into inventory with its identity, its lots and its cost — ready for the catalogue and the counter.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE KARIGAR SIDE', 'A khata that closes, not a notebook that argues.', 'Karigar wages in jewellery are settled against metal, not hours. Jwero keeps that ledger the way the trade keeps it — and posts it to the books.')}
  ${L.cards([
    { title: 'Karigar directory & open jobs', text: 'Who is holding what, since when, and when it is due — swept daily for jobs running late.' },
    { title: 'Metal reconciliation', text: 'Issued, returned, wastage within norm, wastage beyond norm — per karigar, per job, per period.' },
    { title: 'Settlement under your policy', text: 'Making charges and wastage allowances by policy; settlement converts finished work to a payable and posts it to the ledger in the same step.' },
    { title: 'Karigar self-service', text: 'My Work, Khata, Loans and Assets on the karigar’s own phone — with an early Hindi pilot on these screens.' },
    { title: 'Scorecards', text: 'Turnaround, rework rate and loss per karigar, so the next job goes to the right bench.' },
    { title: 'Job cards & documents', text: 'Printable job cards, BOM sheets and finished-goods receipts, generated from the order — not retyped.' },
  ])}`
, { tone: 'tint' })}

${L.oneSystemBlock([
  'A custom order taken on WhatsApp becomes the production order — the customer’s size, stone and deadline carry through without re-entry.',
  'The finished piece is the same record the catalogue publishes, the storefront sells and the counter scans.',
  'Karigar settlement, stone loss and work-in-progress post to the same ledger as sales — the workshop is inside the books, not beside them.',
])}

${L.honestGapsBlock([
  'CAD files do not yet become bills of materials automatically — the BOM is entered or copied from a similar design.',
  'There is no demand-netting MRP yet: Jwero models capacity and flags late jobs, but does not decide what to make next.',
])}

${L.section(`${L.sectionHead('WORKSHOP QUESTIONS', 'Loss, karigars and starting from a paper register.', '')}${L.faqBlock([
  { q: 'We have years of karigar khatas on paper. Can we start?', a: 'Yes — opening balances per karigar are entered at onboarding; the ledger runs forward from there.' },
  { q: 'Can a job go through an outside workshop?', a: 'Yes — job-work issues and receipts are tracked the same way as internal stages, with the party’s ledger alongside.' },
  { q: 'Does it work for diamond and gemstone manufacturing too?', a: 'Stone lots, setting stages and sorting loss are modelled; the gold flow and the stone flow reconcile on the same order.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Try the chat button on this page — it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Bring one job that lost gold.', 'We will run it through the routing, the norms and the karigar settlement — and show you where the milligrams went.', 'manufacturers')}
`,
};

const girvi = {
  slug: 'products/girvi',
  title: 'Girvi, Gold Loan & Pawn Broking Software for Jewellers | Jwero',
  description: 'Girvi for jewellers: pledge intake with a printed receipt, interest schemes that accrue on schedule, collections, renewals and release — with every entry posted to the books and the loan on the customer’s record.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Girvi', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Girvi / gold-loan management for jewellers: pledge, receipt, interest accrual, collection, renewal and release, posted to the ledger.',
    url: 'https://jwero.ai/products/girvi', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Girvi / Gold Loans'),
  faqs: [
    { q: 'Is girvi actually in the product now?', a: 'Yes. Earlier versions of this site said it was on the long-term roadmap; the module shipped in 2026. Pledge, receipt, interest schemes, accrual, collection, renewal and release are live.' },
    { q: 'How is interest calculated?', a: 'By the scheme you define per loan — rate, compounding and grace — and accrued on schedule, so the payable amount on any day is on screen without a calculator. Unaccrued interest to date is shown separately.' },
    { q: 'What happens at release?', a: 'Settle the balance, release the pledge, print the release document; the item leaves the pledge vault and the ledger closes the loan in the same step.' },
    { q: 'Does it post to the books?', a: 'Every disbursement, interest accrual, collection and release posts a journal to the ledger — and the loan sits on the customer’s record next to her purchases and her scheme.' },
    { q: 'Can customers pay interest automatically?', a: 'Not yet — there is no auto-debit mandate; collections are recorded when paid, and reminders go out on schedule. We say so plainly rather than imply otherwise.' },
  ],
  body: `
${L.hero({
  eyebrow: 'GIRVI / GOLD LOANS',
  h1: 'Pledge, interest, renewal, release — on the books and on her record.',
  sub: 'Take a pledge, print the receipt, let interest accrue on its scheme, collect, renew, release — with every rupee posted to the books and the loan on the same customer record as her purchases and her gold scheme.',
  primary: { href: '#', label: 'Show me a pledge from intake to release', wa: 'girvi' },
  secondary: { href: '/products/gold-schemes', label: 'See Gold Savings Schemes' },
})}

${L.section(
  `${L.sectionHead('THE LOAN LIFECYCLE', 'Pledge to release, without a paper register.', '')}
  ${L.steps([
    { title: 'Pledge intake', text: 'Item, weight, purity, valuation, customer KYC — and a printed pledge receipt the customer keeps.' },
    { title: 'Scheme & disbursal', text: 'Choose the interest scheme, set the term and grace, disburse — the journal posts itself.' },
    { title: 'Interest on schedule', text: 'Accrual runs on schedule; the amount due on any day, and interest not yet accrued, are always on screen.' },
    { title: 'Collect, renew, release', text: 'Record collections, renew at term, release the pledge with a document — and the ledger closes the loan.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT CHANGES', 'For the counter and for the owner.', '')}
  ${L.impactGrid([
    { lever: 'Disputes', before: 'A customer disputes the interest on a two-year-old pledge; the register and the calculator disagree.', after: 'The scheme, the accrual and every collection are on the loan — printable, dated, undisputed.' },
    { lever: 'Due dates', before: 'Renewals are remembered, or not.', after: 'Due and renewal sweeps run daily; reminders go out on the customer’s channel.' },
    { lever: 'The books', before: 'Girvi lives in a separate register that the accountant reconciles at year-end.', after: 'Disbursal, interest, collection and release post journals as they happen.' },
    { lever: 'The customer', before: 'The pledge is a slip in a drawer; nobody at the sales counter knows.', after: 'The loan is on her record beside her purchases and her scheme — the follow-up knows both.' },
  ])}`
, { tone: 'tint' })}

${L.oneSystemBlock([
  'A girvi customer is the same record the counter, WhatsApp and the scheme use — one KYC, one history.',
  'Valuation at pledge uses the same live metal rate as the catalogue and the counter.',
])}

${L.honestGapsBlock([
  'No auto-debit / e-mandate for interest yet — collections are recorded when paid.',
  'Auction and forfeiture workflows for defaulted pledges are not built; release and renewal are.',
])}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Try the chat button on this page — it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Bring your pledge register.', 'We will show you one loan from intake to release — receipt, accrual, collection, journal — on your own numbers.', 'girvi')}
`,
};

const meetings = {
  slug: 'products/meetings',
  title: 'Jewellery Appointment & Video Call Software | Jwero',
  description: 'Start a video or voice call from any WhatsApp or web-chat conversation, let customers self-book against real availability, run a waiting room with admit control, and record with consent — all on the customer record.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Meetings', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Video counter and appointment scheduling for jewellers: meet now from the inbox, self-booking, unified calendar, waiting room, recording and reminders.',
    url: 'https://jwero.ai/products/meetings', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Video Counter & Appointments'),
  faqs: [
    { q: 'How does a customer join a video call?', a: 'From a link sent on her own channel — WhatsApp or web chat. She fills a short form your team configured, knocks, and joins when a host admits her. No app to install.' },
    { q: 'Can customers book themselves?', a: 'Yes. Each host sets working hours, buffers, minimum notice and a daily cap; busy time comes from the unified calendar, so a Google Meet already booked blocks the slot.' },
    { q: 'Are calls recorded?', a: 'Optionally, with an indicator for everyone in the room and a notice to the customer before she joins.' },
    { q: 'Is the link secure?', a: 'Each link is signed, valid only around the meeting window, revocable, and bound to the first device that opens it — a later open from elsewhere still reaches the waiting room but is flagged to the host.' },
    { q: 'What if she does not turn up?', a: 'Reminders and no-show follow-ups go out on her channel, each with a fresh link, and the outcome is on her record.' },
  ],
  body: `
${L.hero({
  eyebrow: 'VIDEO COUNTER & APPOINTMENTS',
  h1: 'The showroom, at her convenience.',
  sub: 'Turn any WhatsApp or web-chat conversation into a video call in one tap, or let her book a slot against real availability. Waiting room, admit control, recording with consent, reminders — and the meeting on her record, next to what she asked about.',
  primary: { href: '#', label: 'Send me a video counter link', wa: 'meetings' },
  secondary: { href: '/products/whatsapp', label: 'See WhatsApp Commerce' },
})}

${L.section(
  `${L.cards([
    { title: 'Meet now, from the inbox', text: 'Video or voice from the conversation header; the customer gets the link on the channel she is already on.' },
    { title: 'Self-booking', text: 'Per-host working hours, buffers, minimum notice and daily caps — and a public booking page that only offers real slots.' },
    { title: 'One calendar', text: 'Jwero meetings, offline and phone appointments, Google Meet and Zoho Bookings on one calendar — no second diary.' },
    { title: 'Waiting room & admit', text: 'She fills a short form, knocks, and joins only when a host admits her — the host sees her answers before opening the door.' },
    { title: 'Recording, with consent', text: 'Optional recording with an indicator in the room and a notice before joining; recordings stay with the meeting.' },
    { title: 'Reminders & no-shows', text: 'Reminders and no-show follow-ups on her channel, each with a fresh link; the outcome writes to her record.' },
  ])}`
)}

${L.oneSystemBlock([
  'Form answers map to fields on the customer record — a conflicting answer becomes a suggestion your agent accepts, never a silent overwrite.',
  'The pieces she asked about in chat are the ones the host has on screen when she joins.',
])}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Try the chat button on this page — it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('See the video counter from the customer’s side.', 'Message us; we will send you a meeting link the way your customers would get one.', 'meetings')}
`,
};

module.exports = [pos, manufacturing, girvi, meetings];
