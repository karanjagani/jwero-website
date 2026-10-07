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
  'A counter sale, a WhatsApp order and a website checkout post through the same invoice and the same ledger.',
  'The piece scanned at the till is the record the catalogue publishes and the inventory values; sell it here and it disappears from the website at once.',
  'The bill writes to the customer’s record: what she bought, what she exchanged, her points, and what to remember next time.',
])}

${L.honestGapsBlock([
  'Card machines are not driven by Jwero: the cashier records the amount taken on the machine.',
])}

${L.ctaBand('See a sale rung up, returned and closed.', 'Bring one real bill from last week. We will run it through the counter, exchange, GST and till close, live.', 'pos')}
`,
};

// Manufacturing, rebuilt 2026-10-07. Material planning confirmed by Jwero.
const STAGES = [['Issued', 100.0, null], ['Casting', 98.9, 1.5], ['Filing', 98.1, 1.0], ['Setting', 97.9, 0.4], ['Polishing', 96.9, 0.6]];
const metalFlow = () => `<div class="mf" data-mf>
  <div class="mf-row">${STAGES.map(([n, g, norm], k) => `<div class="mf-st" data-k="${k}"><b>${n}</b><i>${g.toFixed(1)} g fine</i><span>${norm === null ? 'start' : `norm ${norm}%`}</span></div>`).join('')}</div>
  <p class="mf-note" data-mf-note>Order 2231 · 22K bangles · issued to karigar Ramesh</p>
  <p class="cta-note">Illustrative: at polishing the loss of 1.0 g is over the 0.6% norm, so the order will not close until the difference is settled.</p>
</div>`;
const MFG_CMP = [
  ['Gold tracked', 'In and out, in a khata', 'By stage, sometimes', 'Every stage, in fine grams'],
  ['Wastage norms per stage', 'In the owner’s head', 'Yes', 'Yes, with capped recovery'],
  ['Order closes only when metal closes', 'No', 'Rarely', 'Yes'],
  ['Material planning from orders and BOM', 'Guesswork', 'Yes', 'Yes'],
  ['Karigars and outside units on challans', 'Notebook', 'Yes', 'Yes, with due dates and scorecards'],
  ['Metal loans with suppliers', 'Separate book', 'Some', 'Yes, on the metal ledger'],
  ['Same system as sales, stock and customers', 'No', 'Separate modules', 'Yes, one record'],
  ['Works on the workshop floor', 'Paper', 'Desktop', 'Any device, Hindi on karigar screens'],
];
const mfgTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Khata and Excel</th><th>Desktop manufacturing ERP</th><th>Jwero</th></tr></thead><tbody>${MFG_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>
<p class="cta-note" style="margin-top:12px">See <a href="/compare/jwero-vs-synergics">Jwero vs Synergics</a> and <a href="/compare/jwero-vs-jewelacc">Jwero vs JewelAcc</a>.</p>`;
const MFG_MOVE = [
  ['Bring your khatas', 'Each karigar’s current balance in fine grams, open jobs and metal loans, from paper or Excel.'],
  ['Set your norms', 'Wastage norm per stage and per kind of design, and the cap on recovery.'],
  ['Map your routings', 'The stages your jobs go through; designs without a routing can still run on a simple job card.'],
  ['Issue the next job in Jwero', 'Metal issued by weight and purity, with a due date, on a job card or challan.'],
  ['Settle and reconcile monthly', 'Each job settles against its norm; the metal ledger reconciles every month.'],
];
const mfgFaqs = [
  { q: 'What is jewellery manufacturing software?', a: 'Software that runs a jewellery workshop or factory: orders, bills of materials and routings, material planning, issuing metal to karigars and outside units, work in progress stage by stage, wastage against norms, quality checks, finished goods, and a metal ledger in fine grams.' },
  { q: 'How do jewellers control gold loss in manufacturing?', a: 'Weigh at every hand-off, convert to fine grams, set a wastage norm per stage, settle every job against its norm when it comes back, and do not let an order close until its metal does. Look at loss by karigar over time, not one job.' },
  { q: 'What is a normal wastage percentage?', a: 'It depends on the process and design. Set norms per stage from your own history; Jwero then flags every job above its norm and caps what is recovered from the karigar.' },
  { q: 'What is material planning in jewellery manufacturing?', a: 'Working out the gold, stones and findings your open orders need from their bills of materials, so you buy or issue the right amounts at the right time. Jwero does this from your orders and BOMs.' },
  { q: 'How is karigar job work recorded for GST?', a: 'Metal sent for job work moves on a delivery challan without GST and must come back, as jewellery or scrap, within the time the rules allow. A registered karigar bills you for making as a job-work service.' },
  { q: 'Can a job go through an outside workshop?', a: 'Yes. Issue it on a challan to an outside unit, track the due date, and receive and settle it by weight like an in-house job.' },
  { q: 'Does it work for diamond and gemstone manufacturing?', a: 'Yes. Stone lots, setting stages and sorting loss are tracked, and the gold and stone flows reconcile on the same order.' },
  { q: 'We have years of khatas on paper. Can we start?', a: 'Yes. Bring each karigar’s current balance, open jobs and metal loans. You start from today’s balances; old history can follow.' },
  { q: 'Can I run designs without a routing?', a: 'Yes. Simple designs can run on a job card; routings are for the products where stage-by-stage control matters.' },
  { q: 'Does it forecast what to make?', a: 'It plans the material your open orders need and sweeps job due dates for lateness. It does not forecast demand to suggest new designs to make.' },
];

const manufacturing = {
  slug: 'products/manufacturing',
  title: 'Jewellery Manufacturing Software: Karigar, Wastage, Planning | Jwero',
  description: 'Jewellery manufacturing software: orders, BOM and routings, material planning, karigar and outside job work, work in progress, wastage norms, metal ledger in fine grams and metal loans.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery Manufacturing Software', alternateName: ['Jewellery manufacturing ERP', 'Karigar management software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Jewellery manufacturing: custom, B2B and export orders, bills of materials and routings, material planning, karigar and outside-unit job work on challans, work in progress by stage, wastage norms with capped recovery, quality checks, finished goods with HUID, a fine-weight metal ledger and metal loans.',
    url: 'https://jwero.ai/products/manufacturing', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
    offers: { '@type': 'Offer', price: '18000', priceCurrency: 'INR', description: 'Jwero One per month, every module included.' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to move karigar khatas into manufacturing software', step: MFG_MOVE.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Jewellery manufacturing'),
  faqs: mfgFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY MANUFACTURING SOFTWARE',
  h1: 'Jewellery manufacturing software: every milligram from bench to finished piece, and a karigar khata that closes.',
  sub: 'Orders in, material planned, metal issued to karigars and outside units, every stage weighed in fine grams against its wastage norm, and an order that will not close until its metal does. On the same system as your stock, sales and customers.',
  primary: { href: '#', label: 'Show me one job, gram by gram', wa: 'manufacturing' },
})}

${L.section(`${L.sectionHead('ONE JOB, GRAM BY GRAM', 'Watch the metal move through the workshop.', '')}${metalFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE WORKSHOP', 'What jewellery manufacturing software has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Orders in</h3><p>Custom, trade and export orders with design, purity, weight, stones and due date, from the counter, WhatsApp or a buyer’s quote.</p><a href="/blog/custom-jewellery-order-process">Custom orders →</a></article>
  <article><h3>2. Material planning</h3><p>Gold, stones and findings worked out from open orders and their bills of materials, then purchased or issued in the right amounts.</p><a href="/products/purchase-vendors">Purchase →</a></article>
  <article><h3>3. Production, stage by stage</h3><p>Routings and job cards, work in progress at each stage, quality checks, and finished goods tagged with their HUID.</p><a href="/products/inventory">Finished stock →</a></article>
  <article><h3>4. Karigars and outside units</h3><p>Metal issued and received by weight and purity, outside job work on challans, due dates swept for lateness, and a scorecard per karigar.</p><a href="/blog/job-work-jewellery-gst-challan">Job work and challans →</a></article>
  <article><h3>5. Loss under control</h3><p>Wastage norms per stage, settlement of every job against its norm, capped recovery, and an order that cannot close while its metal is short.</p><a href="/blog/karigar-wastage-norms-settlement">Karigar wastage →</a></article>
  <article><h3>6. Metal in fine grams</h3><p>A metal ledger in fine grams beside the books: karigar balances, metal loans with suppliers, and a monthly reconciliation.</p><a href="/blog/fine-weight-metal-ledger-jewellers">The metal ledger →</a></article>
</div>
<p class="cta-note" style="margin-top:14px">By kind of manufacturer: <a href="/solutions/manufacturers">manufacturers</a> · <a href="/solutions/casting-units">casting units</a> · <a href="/solutions/cad-services">CAD studios</a> · <a href="/solutions/oem-manufacturers">OEM manufacturers</a> · <a href="/solutions/export-houses">export houses</a></p>`)}

${L.section(`${L.sectionHead('RUN YOUR NUMBERS', 'What loss above your norm is worth.', 'Move the sliders to your workshop.')}${require('./tools').goldLossCalcHtml}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'Khata and Excel, a desktop manufacturing ERP, or Jwero.', '')}${mfgTable()}`)}

${L.section(`${L.sectionHead('STARTING FROM PAPER KHATAS', 'How to move karigar khatas into manufacturing software.', 'Five steps, starting from today’s balances.')}${L.steps(MFG_MOVE.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.oneSystemBlock([
  'The finished piece’s cost, its wastage and the karigar’s balance are the same numbers, not three reports to reconcile.',
  'A custom order taken at the counter becomes a job card, a material plan and, when it is done, a piece on the shelf and a bill.',
  'Metal loans with suppliers sit on the same fine-weight ledger as karigar balances.',
])}

${L.ctaBand('Bring one job that lost gold.', 'We will run it through Jwero, stage by stage, and show where the grams went.', 'manufacturing')}
`,
};

// Girvi, rebuilt 2026-10-07. Confirmed by Jwero: auctions, automatic interest
// collection, LTV limits, photos at intake, part payments. Not claimed: partial
// release of items, state money-lending licence forms.
const GV_FLOW = [
  ['Pledge', '22K chain, 18g · photographed and valued at today’s rate'],
  ['Limit', 'Loan checked against your LTV limit · within it'],
  ['Disbursed', '₹60,000 · printed pledge receipt · journal posted'],
  ['Interest', 'Accrues monthly · collected automatically'],
  ['Part payment', '₹20,000 of principal paid · interest recalculated'],
  ['Renewed', 'Renewed at term on the same pledge'],
  ['Released', 'Balance settled · release document printed · loan closed in the books'],
];
const gvFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">GIRVI · PLEDGE TO RELEASE</p>${GV_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${GV_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const GV_CMP = [
  ['Valuation', 'By eye and calculator', 'Entered by hand', 'Today’s rate, purity and weight, with photos'],
  ['Loan limit', 'Judgement', 'Sometimes', 'LTV limit you set, checked on every loan'],
  ['Interest due today', 'Worked out at the counter', 'Report', 'On screen, by scheme, any day'],
  ['Collecting interest', 'Customer walks in', 'Recorded when paid', 'Collected automatically, with reminders'],
  ['Part payments and renewals', 'Notes in the margin', 'Basic', 'Recorded, with interest recalculated'],
  ['Default and auction', 'Notices on paper', 'Often missing', 'Default steps, notices and auction recorded'],
  ['Books', 'A separate register', 'Export', 'Every entry posted to the ledger'],
  ['The customer', 'A slip in a drawer', 'A loan number', 'On her record beside purchases and schemes'],
];
const gvTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>A paper register</th><th>Basic girvi software</th><th>Jwero</th></tr></thead><tbody>${GV_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;
const GV_HOW = [
  ['Set your schemes and limits', 'Interest rates, compounding, grace and your LTV limit.'],
  ['Bring in open pledges', 'Each loan from the register with its item, weight, amount and date.'],
  ['Take new pledges in Jwero', 'Photos, valuation at today’s rate, KYC and a printed receipt.'],
  ['Switch on collection and reminders', 'Interest collected automatically; reminders before each due date.'],
  ['Renew, release or auction', 'Each step recorded, printed and posted to the books.'],
];
const gvFaqs = [
  { q: 'What is girvi?', a: 'Girvi is a loan against pledged gold or silver jewellery, given by a jeweller or pawnbroker. The customer gets the jewellery back when the loan and interest are paid.' },
  { q: 'Which software is used for girvi?', a: 'Girvi or gold loan software records each pledge, works out interest, and tracks renewals, release and auctions. Jwero does this on the same customer record and books as the rest of the jewellery business.' },
  { q: 'How is girvi interest calculated?', a: 'By the scheme on each loan: the rate, simple or compound, and any grace period. Jwero accrues it on schedule, so the amount due on any day is on screen. Try the calculator on this page.' },
  { q: 'Can interest be collected automatically?', a: 'Yes. Interest is collected automatically, with reminders before each due date.' },
  { q: 'Can I set a maximum loan against the gold’s value?', a: 'Yes. Set an LTV limit, and each loan is checked against today’s value of the pledge.' },
  { q: 'Can customers pay part of the loan?', a: 'Yes. Part payments of principal are recorded, and interest is recalculated on the balance.' },
  { q: 'What happens if a loan is not repaid?', a: 'The loan moves through default steps with notices, and the auction and how the proceeds were applied are recorded. Follow your state’s notice rules.' },
  { q: 'Does it post to the books?', a: 'Yes. Every disbursal, interest entry, collection, release and auction posts to the ledger.' },
];
const girvi = {
  slug: 'products/girvi',
  title: 'Girvi, Gold Loan & Pawn Broking Software for Jewellers | Jwero',
  description: 'Girvi and gold loan software for jewellers: photos and valuation at today’s rate, LTV limits, printed receipts, interest collected automatically, part payments, renewals, release and auctions, all posted to the books.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Girvi', alternateName: ['Girvi software', 'Gold loan software for jewellers', 'Pawn broking software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Girvi and gold loan management for jewellers: pledge intake with photos, valuation at the live rate and KYC, LTV limits, printed receipts, interest schemes with automatic collection, part payments, renewals, release, default steps and auctions, posted to the ledger.',
    url: 'https://jwero.ai/products/girvi', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
    offers: { '@type': 'Offer', price: '18000', priceCurrency: 'INR', description: 'Jwero One per month, every module included.' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to move a girvi register into software', step: GV_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Girvi / Gold Loans'),
  faqs: gvFaqs,
  body: `
${L.hero({
  eyebrow: 'GIRVI · GOLD LOANS · PAWN BROKING',
  h1: 'Girvi and gold loan software for jewellers: pledge to release, interest collected, on the books.',
  sub: 'Photograph and value the pledge at today’s rate, check it against your LTV limit, print the receipt. Interest accrues and is collected automatically; part payments, renewals, release and auctions are recorded and posted to the books.',
  primary: { href: '#', label: 'Show me a pledge from intake to release', wa: 'girvi' },
  secondary: { href: '/blog/girvi-gold-loan-business-guide', label: 'Girvi rules explained' },
})}

${L.section(`${L.sectionHead('ONE LOAN, START TO FINISH', 'From a pledged chain to a closed loan.', '')}${gvFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE REGISTER', 'What girvi software has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Pledge intake</h3><p>Photos, weight, purity and valuation at today’s rate, customer KYC, and a printed receipt.</p><a href="/platform/pricing-engine">Live rate →</a></article>
  <article><h3>2. Safe lending</h3><p>An LTV limit you set, checked against the pledge’s value on every loan.</p><a href="/products/reports">Reports →</a></article>
  <article><h3>3. Interest worked out</h3><p>Schemes with rate, simple or compound, and grace; the amount due on any day on screen.</p><a href="#girvi-calc">Interest calculator →</a></article>
  <article><h3>4. Collected automatically</h3><p>Interest collected on schedule, reminders before each due date, part payments recorded.</p><a href="/products/whatsapp">WhatsApp →</a></article>
  <article><h3>5. Renew, release, or auction</h3><p>Renewals at term, release with a printed document, and default steps through to auction.</p><a href="/blog/girvi-gold-loan-business-guide">Girvi rules →</a></article>
  <article><h3>6. On the books and her record</h3><p>Every entry posted to the ledger; the loan beside her purchases and gold scheme.</p><a href="/products/billing-finance">Billing and accounts →</a></article>
</div>`)}

${L.section(`${L.sectionHead('GIRVI INTEREST CALCULATOR', 'Work out interest on a gold loan.', 'Monthly rate, as most girvi is quoted.')}<div class="callc" id="girvi-calc" data-gvc>
  <div class="callc-in">
    <label>Loan amount, ₹<input type="number" inputmode="numeric" data-gv="p" value="60000" min="0" step="1000"></label>
    <label>Interest rate a month, %<input type="number" inputmode="decimal" data-gv="r" value="1.5" min="0" step="0.25"></label>
    <label>Months<input type="number" inputmode="numeric" data-gv="m" value="12" min="0"></label>
    <label>Method<select data-gv="c"><option value="0">Simple</option><option value="1">Compound monthly</option></select></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Interest</span><b data-gv-o="int">₹0</b></p>
    <p class="callc-save"><span>Amount payable</span><b data-gv-o="tot">₹0</b></p>
    <p class="cta-note">Check your state’s interest cap. Jwero accrues interest on each loan’s own scheme.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'A paper register, basic girvi software, or Jwero.', '')}${gvTable()}`)}

${L.impactGrid([
  { lever: 'Disputes', before: 'A customer disputes the interest on a two-year-old pledge; the register and the calculator disagree.', after: 'The scheme, the accrual and every payment are on the loan: printable, dated, settled.' },
  { lever: 'Due dates', before: 'Interest is collected when the customer remembers to come in.', after: 'Collected automatically, with reminders on her channel.' },
  { lever: 'The books', before: 'Girvi lives in a separate register the accountant reconciles at year end.', after: 'Disbursal, interest, collection, release and auction post as they happen.' },
  { lever: 'The customer', before: 'The pledge is a slip in a drawer; nobody at the sales counter knows.', after: 'The loan is on her record beside her purchases and her scheme.' },
])}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to move your girvi register into software.', 'Five steps.')}${L.steps(GV_HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.oneSystemBlock([
  'A girvi customer is the same record the counter, WhatsApp and the gold scheme use: one KYC, one history.',
  'Valuation uses the same live metal rate as the catalogue and the counter.',
  'Every rupee lent, collected or recovered is in the same books as the shop.',
])}

${L.ctaBand('Bring your pledge register.', 'We will show you one loan from intake to release on your own numbers.', 'girvi')}
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
