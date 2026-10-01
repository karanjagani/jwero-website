// Product pages added in the 2026-09 coverage audit (blueprint/PRODUCT-COVERAGE-AUDIT-2026-09.md):
// modules that exist in the product but had no page — or were still called "roadmap" here.
// Every capability line below traces to a service or screen in ~/pim; see the audit for paths.
const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

const pos = {
  slug: 'products/pos',
  title: 'Jewellery POS — Counter Billing, Returns, Old-Gold Exchange & Day-Close | Jwero',
  description: 'A jewellery counter POS: scan-to-sale at the live gold rate, weight-based sales, old-gold exchange vouchers, returns, register shifts with cash day-close — on the same customer record as everything else.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero POS', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Jewellery point-of-sale with live-rate pricing, weight-based sales, old-gold exchange, returns, register shifts and cash day-close.',
    url: 'https://jwero.ai/products/pos', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Counter POS'),
  faqs: [
    { q: 'Is this a full POS with a cash drawer and day-close?', a: 'Yes. Each physical counter is a register; a cashier opens a shift, rings sales, and closes it with a declared cash count. Jwero computes the variance against what it expected, per currency, and keeps every shift on file.' },
    { q: 'Can I take a return or an exchange at the counter?', a: 'Yes. Returns follow the branch’s return policy, and old gold is taken in on an exchange voucher — once approved, the voucher becomes credit on the new invoice.' },
    { q: 'What if the internet drops mid-sale?', a: 'The counter app is installable on the till device and keeps ringing sales through a dropout; each sale replays to the server once the connection returns, without duplicates. Reports and the customer record catch up the moment it syncs.' },
    { q: 'Does it price by weight at today’s rate?', a: 'Yes — weight-based sales and quotes use the same live-rate pricing engine as the catalogue and the WhatsApp replies, so the counter never quotes a stale number.' },
    { q: 'Do I still need my old billing software?', a: 'Not for the sale, the return or the till. Your statutory books can stay in Tally or Zoho Books through the bridge, or run on Jwero’s own ledger.' },
  ],
  body: `
${L.hero({
  eyebrow: 'COUNTER POS',
  h1: 'The counter, end to end. Scan, sell, exchange, return, close the till.',
  sub: 'One screen at the counter: scan or search a piece, price it at this minute’s gold rate, take old gold in exchange, bill it with GST — then close the shift with a cash count that reconciles itself. Every sale lands on the customer’s record before she reaches the door.',
  primary: { href: '#', label: 'Show me a till close', wa: 'pos' },
  secondary: { href: '/products/billing-finance', label: 'See Billing & Finance' },
  note: 'The demo IS a WhatsApp conversation — ask for the counter walkthrough.',
})}

${L.section(
  `${L.sectionHead('WHAT THE TILL DOES', 'Built for the way a jewellery counter actually works.', 'Not a retail POS with a gold field bolted on. Weight, purity, rate, exchange and hallmark are first-class at every step.')}
  ${L.cards([
    { icon: '▣', title: 'Scan-to-sale', text: 'Scan the tag or search by name — even in Hindi, Gujarati or Tamil transliteration — and the piece, its weight and its certificate are on the bill.' },
    { icon: '⇄', title: 'Old-gold exchange', text: 'Take old gold in on an exchange voucher: weight, purity, deduction. Once approved, it is credit on the new invoice, and the intake is on file for the assayer.' },
    { icon: '↺', title: 'Returns at the counter', text: 'Sales returns follow the branch’s own return policy — window, restocking, who may approve — and reverse the stock and the books in one step.' },
    { icon: '✓', title: 'Register shifts & day-close', text: 'Open a shift, ring sales, close with a declared cash count. Jwero computes the variance against expected takings, per currency, and stores every shift.' },
    { icon: '☑', title: 'Weight-based sales & quotes', text: 'Price by weight at the live rate for coins, bars and unbadged pieces — and hand over a quote that expires on schedule.' },
    { icon: '⏻', title: 'Keeps going offline', text: 'The counter installs on the till device and keeps ringing sales through a dropout; each sale replays once the connection returns, without duplicates.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT CHANGES AT THE COUNTER', 'For the cashier, the manager and the owner.', '')}
  ${L.impactGrid([
    { lever: 'Repricing', before: 'The rate moves at noon; the cashier reprices three invoices by hand and keeps a customer waiting.', after: 'Every bill prices itself at this minute’s rate — the same number the catalogue and WhatsApp quoted her.' },
    { lever: 'Day-close', before: 'The drawer is counted against a printout from the other software; mismatches surface next week.', after: 'The shift closes with a declared count; the variance is on screen before the cashier goes home.' },
    { lever: 'Exchange', before: 'Old gold is weighed, noted on a slip, and deducted from a total someone worked out on a calculator.', after: 'An exchange voucher with weight, purity and deduction — approved, then applied as credit, with the intake on file.' },
    { lever: 'The customer', before: 'The sale lives on the bill. Who bought it is a name on a copy.', after: 'The sale writes to her record: what she bought, what she exchanged, what to remember next time.' },
  ])}`
, { tone: 'tint' })}

${L.oneSystemBlock([
  'A counter sale, a WhatsApp order and a storefront checkout all post through the same invoice and the same ledger — one set of books, whichever door the sale came through.',
  'The piece scanned at the till is the same record the catalogue publishes and the inventory values — sell it here and it disappears from the storefront at once.',
  'Hallmark and HUID are checked at the till, from the catalogue record, before an unhallmarked piece can be billed.',
])}

${L.honestGapsBlock([
  'E-invoice IRN and e-way bill generation are not built in yet — GST invoices are generated; IRP registration stays with your CA’s tool for now.',
  'Card-machine (EDC) integration is manual: the cashier records the tender; the terminal is not driven by Jwero.',
])}

${L.section(`${L.sectionHead('COUNTER QUESTIONS', 'Cash, returns and the internet.', '')}${L.faqBlock([
  { q: 'Can two cashiers share a register?', a: 'A register has one open shift at a time — enforced by the database, not just the screen — so takings are always attributable to the person who opened it.' },
  { q: 'Does it handle multiple currencies?', a: 'Yes; cash figures and variance are kept per currency, for showrooms that take foreign notes.' },
  { q: 'Can a salesperson be credited for the sale?', a: 'Yes — the salesperson on the invoice feeds incentives in HR and the growth report.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Try the chat button on this page — it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('See a sale rung up, returned and closed.', 'Bring one real bill from last week. We will run it through the counter — exchange, GST, till close — live.', 'pos')}
`,
};

const manufacturing = {
  slug: 'products/manufacturing',
  title: 'Jewellery Manufacturing Software — BOM, Routing, Wastage, Karigar Khata | Jwero',
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
  title: 'Girvi / Gold Loan Software for Jewellers — Pledge, Interest, Release | Jwero',
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
  title: 'Video Counter & Appointments — Meet Customers from the Inbox | Jwero',
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
