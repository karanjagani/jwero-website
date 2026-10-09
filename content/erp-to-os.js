// The ERP → OS cluster. Three landing pages for the three sentences that stall
// a sale: "we have an ERP", "switching is risky", "we can make do".
// No market statistics are invented anywhere here — the argument runs on what
// the reader already knows about their own day, plus product-verified facts.
const L = require('../lib');
const BC = (label, parent) => parent ? [['Home', '/'], ['From ERP to OS', '/erp-to-os'], [label]] : [['Home', '/'], [label]];

// ---------------------------------------------------------------- shared visuals
const ERAS = [
  { key: 'register', era: 'The register', when: 'Until 2000', centre: 'The owner’s memory', icon: 'book',
    so: 'Works well while the owner is in the shop, and only then.',
    served: 'The owner', customer: 'Known by face, and served well while the owner is in.', doors: ['Counter'],
    label: 'What it misses', couldnt: 'It cannot grow past one person’s memory, it loses customers when a salesperson leaves, and it cannot answer anyone who is not standing in the shop.' },
  { key: 'erp', era: 'The ERP', when: '2000 to today', centre: 'The bill and the books', icon: 'receipt',
    so: 'Tells you exactly what was sold. Tells you nothing about what was lost.',
    served: 'The accountant and the back office', customer: 'A name on a bill. Nothing about her taste, her occasions, or what she asked about last week.', doors: ['Counter', 'Back office'],
    label: 'What it misses', couldnt: 'The enquiry on WhatsApp, the customer who tried a piece and walked out, the regular who stopped coming, and the price that went stale when the rate moved.' },
  { key: 'os', era: 'The operating system', when: 'Now', centre: 'The customer, with AI working for her', icon: 'record',
    so: 'Shows you the sale, and everything that happened before and after it.',
    served: 'The customer, and everyone in your business who serves her', customer: 'Remembered everywhere: the reply she gets at 11pm, the price she sees, the reminder she receives and the greeting at the counter.', doors: ['Counter', 'WhatsApp', 'Instagram', 'Website', 'Catalogue links', 'Video counter', 'Schemes', 'Workshop', 'Books'],
    label: 'What stays in your hands', couldnt: 'You set the limits the AI works inside, and what needs your approval. Your accountant keeps working in Tally. Your data is yours to export at any time.' },
];
function eraSlider() {
  const stops = ERAS.map((e, i) => `<button type="button" class="era-stop${i === 1 ? ' is-on' : ''}" role="tab" id="era-t-${i}" aria-controls="era-p-${i}" aria-selected="${i === 1}" tabindex="${i === 1 ? 0 : -1}" data-era-stop="${i}"><b>${e.era}</b><span>${e.when}</span></button>`).join('');
  const panels = ERAS.map((e, i) => `
    <div class="era-panel${i === 1 ? ' is-on' : ''}" role="tabpanel" id="era-p-${i}" aria-labelledby="era-t-${i}" data-era-panel="${i}">
      <div class="era-centre">${L.icon(e.icon)}<div><small>Built around</small><strong>${e.centre}</strong></div></div>
      <p class="era-so">${e.so}</p>
      <dl class="era-facts">
        <div><dt>Who it works for</dt><dd>${e.served}</dd></div>
        <div><dt>How it sees your customer</dt><dd>${e.customer}</dd></div>
        <div><dt>Where it works</dt><dd class="era-doors">${e.doors.map((d) => `<span>${d}</span>`).join('')}</dd></div>
        <div><dt>${e.label}</dt><dd>${e.couldnt}</dd></div>
      </dl>
    </div>`).join('');
  return `
<div class="era" data-era>
  <div class="era-track" role="tablist" aria-label="Three eras of jewellery software"><i class="era-fill"></i>${stops}</div>
  <div class="era-panels">${panels}</div>
  <div class="era-nav"><button type="button" class="btn btn-ghost era-prev" data-era-prev>← <span data-era-prev-label>The register</span></button><span class="era-count" data-era-count aria-live="polite">2 of 3</span><button type="button" class="btn btn-primary era-next" data-era-next><span data-era-next-label>The operating system</span> →</button></div>
  <p class="era-note">Each era kept what the last one did well. The ERP kept the books straight; the operating system keeps the books straight <em>and</em> the customer remembered.</p>
</div>`;
}

// One customer at the centre, six departments around her. In the ERP view only the
// billed departments are connected; in the operating-system view all six are, and
// tapping a department shows what it adds to her record and what it learns from it.
const CS_NODES = [
  { k: 'sales', icon: 'till', t: 'Sales counter', erp: 'writes the bill', os: 'bills on her record', on: 1, x: 50, y: 9,
    adds: 'Every purchase, exchange and return.', learns: 'What she asked about online, her scheme balance and what she likes.', rel: ['stock', 'chat'] },
  { k: 'chat', icon: 'chat', t: 'WhatsApp and Instagram', erp: 'on someone’s phone', os: 'replies from her record', on: 0, x: 86, y: 30,
    adds: 'Every enquiry, the pieces she liked and what she said.', learns: 'What she has bought, and today’s price for pieces that are in stock.', rel: ['stock', 'sales'] },
  { k: 'mkt', icon: 'megaphone', t: 'Marketing', erp: 'a separate tool and a list', os: 'reaches the right customers', on: 0, x: 86, y: 70,
    adds: 'Which message she opened and what she tapped.', learns: 'Her occasions, purchases and taste, so the right customers get the right message.', rel: ['chat', 'sales'] },
  { k: 'stock', icon: 'box', t: 'Inventory', erp: 'moves when billed', os: 'knows who wants what', on: 1, x: 50, y: 91,
    adds: 'What is in stock, reserved for her or sold.', learns: 'What customers are asking for, so buying follows demand.', rel: ['sales', 'work'] },
  { k: 'work', icon: 'tools', t: 'Workshop', erp: 'its own register', os: 'her order, stage by stage', on: 0, x: 14, y: 70,
    adds: 'The stage of her custom order and when it will be ready.', learns: 'Her design, her size and the delivery date she was promised.', rel: ['stock', 'sales'] },
  { k: 'books', icon: 'book', t: 'Accounts and schemes', erp: 'the ledger', os: 'her dues and scheme balance', on: 1, x: 14, y: 30,
    adds: 'Her payments, dues and scheme instalments.', learns: 'Every bill and return, as it happens.', rel: ['sales', 'mkt'] },
];
function centreSwap() {
  return `
<div class="cswap" data-cswap data-cs-nodes='${JSON.stringify(CS_NODES.map((n) => ({ k: n.k, t: n.t, erp: n.erp, os: n.os, on: n.on, adds: n.adds, learns: n.learns, rel: n.rel }))).replace(/'/g, '&#39;')}'>
  <div class="cs-switch" role="group" aria-label="Which software">
    <button type="button" data-cs="erp" class="is-on" aria-pressed="true">ERP: built around the bill</button>
    <button type="button" data-cs="os" aria-pressed="false">OS: built around the customer</button>
  </div>
  <div class="cs-stage">
    <svg class="cs-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${CS_NODES.map((n) => `<line class="cs-line${n.on ? ' is-erp' : ''}" data-cs-line="${n.k}" x1="50" y1="50" x2="${n.x}" y2="${n.y}" pathLength="1"/>`).join('')}</svg>
    ${CS_NODES.map((n) => `<button type="button" class="cs-node${n.on ? ' is-erp' : ''}" data-cs-node="${n.k}" style="left:${n.x}%;top:${n.y}%" aria-pressed="false"><span class="cs-ico">${L.icon(n.icon)}</span><b>${n.t}</b><small>${n.erp}</small></button>`).join('')}
    <button type="button" class="cs-centre" data-cs-centre aria-label="Put the customer at the centre">
      <span class="cs-centre-erp">${L.icon('receipt')}<b>The bill</b><small>Tap to put the customer here</small></span>
      <span class="cs-centre-os">${L.icon('record')}<b>Meera, your customer</b><small>One record, shared by all six</small></span>
    </button>
  </div>
  <div class="cs-read" data-cs-read aria-live="polite"><b>Built around the bill, three departments are connected.</b> They meet your customer when she pays. Her conversations, your marketing and the workshop sit outside, on phones, lists and registers. Tap the centre to put the customer there.</div>
</div>`;
}

const SWITCH_RISKS = [
  ['My data is stuck in the ERP.', 'We import from Excel, CSV or the ERP’s export — customers, catalogue, stock, however messy — and reconcile it with you in days 2–5. Your data also leaves the same way, any time.'],
  ['My staff will not learn a new system.', 'If they can use WhatsApp they can use Jwero. Roles are trained in their language, and the AI works inside caps and quiet hours you set, with approval on for anything you choose.'],
  ['My accountant’s world will break.', 'It does not change. Bills, returns and payments post to Jwero’s ledger and reach Tally automatically; Zoho Books is bridged too. Your CA keeps the tools she has.'],
  ['We will lose days in the season.', 'A written change-freeze around your peak weeks is part of the plan. Go-lives happen before or after, never during.'],
  ['We will be locked into a new vendor.', 'You own your data; exports are yours whenever you want them, billing is month to month, and the roadmap is public before you buy.'],
  ['We do not have time for a big project.', 'One pilot on your own data, one branch, exit test at the end. If it fails the test, we stop there. Most single stores run the whole thing on WhatsApp with us.'],
];
const STAY_COSTS = [
  ['Enquiries after hours go unanswered.', 'Every night, the ones who asked at 9pm buy from whoever replied first. This does not show up in any ERP report — it never became a bill.'],
  ['The rate moves; some prices don’t.', 'A wrong price on a catalogue share or a website is either a margin lost or a customer lost. Twice a day, forever.'],
  ['Customers are remembered by people, not the business.', 'Every salesperson who leaves takes the relationships. The ERP holds the bills; it never held the person.'],
  ['Scheme collections run on a register.', 'Missed instalments are chased late or not at all; maturity conversations happen when the customer remembers, not when you do.'],
  ['Stock ages in silence.', 'Dead pieces sit on financed capital because ageing is a report nobody runs, not a screen everybody sees.'],
  ['Marketing is a blast, not a segment.', 'The same message to everyone, with opt-outs handled by hand. The good customers learn to ignore you.'],
];
function riskLedger() {
  const col = (title, tag, items, kind) => `
    <div class="rl-col rl-${kind}">
      <div class="rl-head"><p class="eyebrow">${tag}</p><h3>${title}</h3><p class="rl-tally"><b data-rl-n="${kind}">${items.length}</b> <span data-rl-l="${kind}">${kind === 'switch' ? 'worries still open' : 'costs that carry on'}</span></p></div>
      ${items.map(([r, m], i) => `<button type="button" class="rl-item" data-rl="${kind}" aria-expanded="false"><span class="rl-q">${r}</span><span class="rl-a">${m}</span><span class="rl-hint">${kind === 'switch' ? 'Tap to see what removes it' : 'Tap to see what it costs'}</span></button>`).join('')}
    </div>`;
  return `
<div class="rl" data-rl>
  ${col('If you switch', 'WORRIES, EACH WITH AN ANSWER', SWITCH_RISKS, 'switch')}
  ${col('If you stay', 'COSTS YOU ARE ALREADY PAYING', STAY_COSTS, 'stay')}
</div>
<p class="rl-verdict" data-rl-verdict>Tap each worry under “If you switch”. Every one has a specific answer. The costs under “If you stay” have none; they carry on.</p>`;
}

const TOOLS = [
  ['erp', 'ERP / billing software', 'receipt'], ['wa', 'WhatsApp Business app', 'chat'], ['excel', 'Excel sheets', 'grid'], ['tally', 'Tally', 'swap'],
  ['ig', 'Instagram', 'camera'], ['pdf', 'Catalogue PDFs', 'book'], ['sms', 'SMS / bulk vendor', 'send'], ['heads', 'People’s memory', 'users'], ['paper', 'Paper registers', 'layers'],
];
const GAPS = {
  'erp+wa': 'Nobody knows what she asked on WhatsApp when she walks up to the counter — the ERP only meets her at the bill.',
  'erp+excel': 'The sheet is the real system; the ERP is where the sheet is re-typed. Two truths, one of them stale.',
  'erp+ig': 'A DM that says “price?” never reaches the catalogue’s live rate; someone answers from memory.',
  'erp+pdf': 'The PDF has last week’s prices the moment the rate moves. The ERP knows the rate; the PDF does not.',
  'wa+heads': 'The relationship lives on one phone. When the phone leaves, so does the customer.',
  'erp+heads': 'The ERP remembers the bill; the person remembers the customer. Only one of them is still there next year.',
  'erp+sms': 'A blast to every number the ERP ever billed — no segment, no opt-out logic, no reply path.',
  'excel+paper': 'Two registers that have never agreed; the reconciliation is someone’s Sunday.',
  'erp+tally': 'Posted by hand at month end; the CA gets it late and asks about the differences.',
  'wa+pdf': 'A forwardable PDF and no idea who opened it, what she lingered on, or what to say next.',
  'erp+paper': 'Scheme instalments, girvi, karigar khata — the things the ERP never modelled — live on paper beside it.',
  'ig+wa': 'Two inboxes, two people, one customer who thinks she is talking to one shop.',
};
function makeDoStack() {
  return `
<div class="mds" data-mds>
  <script type="application/json" data-mds-json>${JSON.stringify(GAPS).replace(/</g, "\\u003c")}</script>
  <div class="mds-tools">${TOOLS.map(([k, l, i]) => `<button type="button" class="mds-tool" data-tool="${k}" aria-pressed="false">${L.icon(i)}<span>${l}</span></button>`).join('')}</div>
  <div class="mds-out">
    <div class="mds-tally"><div><b data-mds-n="tools">0</b><span>tools</span></div><div><b data-mds-n="handoffs">0</b><span>hand-offs between them</span></div><div><b data-mds-n="memory">0</b><span>places a customer is remembered</span></div></div>
    <ul class="mds-gaps" data-mds-gaps><li class="mds-empty">Tap what you use today. The gaps appear between them.</li></ul>
    <p class="mds-read" data-mds-read></p>
  </div>
</div>`;
}

const JOBS = [
  ['Reply to a price question at 11pm', 'No', 'Someone types it from memory, next morning', 'A priced reply from the catalogue at the live rate, sent automatically'],
  ['Reprice everything when the rate moves', 'The bill, at the counter', 'By hand, wherever someone remembers', 'One rule; every channel, every share, every quote'],
  ['Remember what Meera tried on and walked away from', 'No', 'If the salesperson remembers', 'On her record; a follow-up drafts from it'],
  ['Chase this month’s scheme instalments', 'A report, maybe', 'A register and a phone', 'Due list with balances; reminders draft themselves'],
  ['Show which designs have sat 180+ days', 'A report, if someone runs it', 'A sheet, if someone maintains it', 'On the screen everyone sees, by branch'],
  ['Send a festival message to the right 400 people', 'No', 'A blast to everyone, opt-outs by hand', 'A segment by taste and value; personalised; sent on schedule; opt-outs enforced'],
  ['Post the day to the books', 'Yes', 'Yes, plus re-typing the rest', 'Yes — and the WhatsApp sale, the scheme payment and the exchange post too'],
  ['Know which enquiry became which sale', 'No', 'No', 'Attribution from message to order, on the record'],
  ['Keep the customer when the salesperson leaves', 'The bills stay', 'The phone leaves', 'Every conversation, preference and promise stays with the business'],
];
function jobsTable() {
  return `<div class="tbl-wrap"><table class="tbl jobs-tbl">
    <thead><tr><th>The job</th><th>ERP alone</th><th>ERP + WhatsApp app + Excel</th><th>Jwero OS</th></tr></thead>
    <tbody>${JOBS.map(([j, a, b, c]) => `<tr><td><strong>${j}</strong></td><td>${a}</td><td>${b}</td><td class="jobs-os">${c}</td></tr>`).join('')}</tbody>
  </table></div>`;
}

function leakCalc() {
  return `
<div class="calc" id="calc-leak">
  <div class="calc-panel">
    <label for="lk-enq">Enquiries a day, all doors (WhatsApp, Instagram, calls, walk-ins) <span class="calc-val" id="lk-enq-out"></span></label>
    <input type="range" id="lk-enq" min="2" max="80" step="1" value="12">
    <label for="lk-fast">Share answered with a price within an hour today <span class="calc-val" id="lk-fast-out"></span></label>
    <input type="range" id="lk-fast" min="10" max="100" step="5" value="40">
    <label for="lk-ticket">Average ticket (₹) <span class="calc-val" id="lk-ticket-out"></span></label>
    <input type="range" id="lk-ticket" min="5000" max="500000" step="5000" value="45000">
    <label for="lk-close">Close rate on a fast, priced reply <span class="calc-val" id="lk-close-out"></span></label>
    <input type="range" id="lk-close" min="5" max="40" step="1" value="15">
    <details class="assumptions" style="margin-top:22px"><summary>Assumptions (editable thinking)</summary><p style="margin-top:10px">A slow reply is assumed to close at one third of the fast rate — a conservative reading of what jewellers tell us, not a measured constant. Value at risk = enquiries × (1 − fast share) × ticket × (fast close − slow close) × 26 trading days. Illustrative; your own numbers are the only ones that matter.</p></details>
  </div>
  <div class="calc-out">
    <div class="stat"><div class="stat-n" id="lk-slow">—</div><div class="stat-l">enquiries a month that wait for a price</div></div>
    <div class="stat"><div class="stat-n" id="lk-month">—</div><div class="stat-l">value at risk every month, at your close rates</div></div>
    <div class="stat"><div class="stat-n" id="lk-year">—</div><div class="stat-l">a year, on your figures</div></div>
    <a class="btn btn-wa" id="lk-wa" href="#" target="_blank" rel="noopener" style="width:100%;text-align:center">Send my numbers to Jwero</a>
    <p class="cta-note">We reply with what the priced-reply flow would do on your enquiries — priced, sent, followed up.</p>
  </div>
</div>`;
}

// ---------------------------------------------------------------- page 1: imminence
const erpToOs = {
  slug: 'erp-to-os',
  title: 'From ERP to OS: Your ERP Counts Sales, Not What You Lost | Jwero',
  description: 'A jewellery ERP records every sale and nothing you lost: the unanswered enquiry, the walkout, the customer who went quiet. Why jewellers are moving from ERP to an operating system that keeps billing, stock and accounts and adds the customer side.',
  breadcrumbs: BC('From ERP to OS'),
  faqs: [
    { q: 'Is Jwero an ERP?', a: 'It contains one. Orders, purchase, vendors, job work, stock, GST invoicing and a ledger with Tally and Zoho Books bridges are all inside Jwero. The difference is what sits at the centre: in an ERP it is the invoice; in Jwero it is the customer record, which the counter, WhatsApp, Instagram, the catalogue, schemes and the workshop all read and write. You do not lose the ERP; you lose the gap around it.' },
    { q: 'Why is this happening now and not five years ago?', a: 'Three things arrived together: customers moved their questions to WhatsApp and Instagram and expect an answer in minutes; the gold rate moves through every price several times a day; and AI can now draft a priced, personal reply — but only from a record that knows the customer. An ERP has none of the three. That is the whole argument.' },
    { q: 'My ERP vendor says they have WhatsApp and a CRM module now.', a: 'Ask three questions: does a WhatsApp reply draft from the catalogue at the live rate? When the rate changes, does the catalogue share she opened yesterday show today’s price? When she walks in, does the counter know what she asked on Instagram last week? Bolted-on modules share a login, not a record.' },
    { q: 'Does an OS mean I have to change everything at once?', a: 'No. Most businesses coexist first — the ERP keeps the books for a quarter while Jwero takes the customer-facing doors — and migrate when the pilot has earned it. The switching page walks through it.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FROM ERP TO OS',
  h1: 'Your ERP knows every sale you made. It has no idea what you lost.',
  sub: 'An ERP starts counting at the invoice. The WhatsApp enquiry nobody answered, the customer who walked out, the regular who stopped coming, the scheme that lapsed: none of it ever reaches the ERP, so none of it reaches you. An operating system keeps everything your ERP does, billing, stock, purchase, workshop and accounts, and adds the half of the business it never saw.',
  primary: { href: '#', label: 'Show me the difference on my business', wa: 'erp' },
  secondary: { href: '/erp-to-os/switching', label: 'Is switching risky? Read this first' },
})}

${L.section(
  `${L.sectionHead('WHY THE ERP IS NO LONGER ENOUGH', 'Four things changed in your shop. Your ERP did not.', 'None of these is a forecast. Each one is already true in a jewellery business this week.')}
  ${L.cards([
    { icon: 'chat', title: 'The question moved', text: 'She asks the price on WhatsApp at 9pm and compares on Instagram. Whoever replies first, with a price, gets the visit. The ERP meets her only when she pays.' },
    { icon: 'trend', title: 'The price moved', text: 'The rate changes through the day. Every catalogue share, quote and website price that does not follow it is a stale number that costs a margin or a customer.' },
    { icon: 'bot', title: 'Drafting became possible', text: 'AI can write a priced, personal reply as well as your best salesperson, but only from a record that knows her scheme balance, her taste and today’s rate.' },
    { icon: 'users', title: 'Memory kept walking out', text: 'Salespeople change. The ERP keeps their bills; it never kept their customers. The business that owns the memory keeps the relationship.' },
  ], 4)}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('THE CORE DIFFERENCE', 'An ERP is built around the bill. An operating system is built around the customer.', 'That is why the ERP missed all four. Software sees first, and serves best, whatever it is built around. Built around the bill, it meets your customer only when she pays. Built around the customer, it follows her from the first enquiry to the next visit, and the bill becomes one step on the way.')}
  ${eraSlider()}`
)}

${L.section(
  `${L.sectionHead('SEE IT WORK', 'Take one customer. See which departments know her.', 'The departments are the same in both. What changes is whether they are connected through her.')}
  ${centreSwap()}
  <div class="section-head" style="margin-top:48px"><h3 class="cs-sub">The same four moments, in an ERP and in the operating system.</h3></div>
  ${L.impactGrid([
    { lever: 'A customer buys at the counter', before: 'The ERP writes the bill. Her WhatsApp chat, her scheme and her next follow-up know nothing about it.', after: 'Everything updates at once: her record, her scheme balance, her next follow-up, the stock and the books.', link: { href: '/products/pos', label: 'See the counter' } },
    { lever: 'The rate moves', before: 'The ERP reprices the bill. The catalogue, the website and yesterday’s quote wait for a person.', after: 'One rule reprices every channel, and any exception goes through your approval.', link: { href: '/platform/pricing-engine', label: 'See the pricing engine' } },
    { lever: 'An enquiry lands at 11pm', before: 'It waits. The ERP has no place for an enquiry.', after: 'A priced reply is drafted from her record and today’s rate, then sent automatically.', link: { href: '/products/whatsapp', label: 'See WhatsApp Commerce' } },
    { lever: 'A salesperson leaves', before: 'The bills stay in the ERP. The customers leave with the phone.', after: 'Every conversation, preference and promise stays with the business.', link: { href: '/platform/customer-memory', label: 'See Customer Memory' } },
  ])}
  <div class="cta-row center" style="margin-top:28px"><a class="btn btn-primary" href="#" data-wa="erp">Show me this on one of my customers</a><a class="btn btn-ghost" href="/book-demo">Book a demo</a></div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('WHAT JWERO GIVES YOU', 'Everything your ERP does today, connected to everything it never saw.', 'Moving to an operating system does not mean giving up billing, stock or accounts. It means they stop working alone.')}
  ${L.cards([
    { icon: 'receipt', title: 'Your ERP work, all here', text: 'Orders, purchase, vendors, job work, stock, tax invoicing and a ledger are inside Jwero, on the same record as your customers and your conversations.', link: { href: '/products/erp', label: 'See the ERP in Jwero' } },
    { icon: 'flow', title: 'Connected workflows', text: 'An enquiry becomes a quotation, a bill, a stock movement and a follow-up without anyone retyping it. A custom order moves from the counter to the workshop and back with its metal accounted for.', link: { href: '/products', label: 'See every product' } },
    { icon: 'swap', title: 'Works with the tools you have', text: 'Bills, returns and payments post to Tally automatically, and e-invoices are generated there. Zoho Books, Shopify, WooCommerce, Meta, Stripe, PayPal, Razorpay and Cashfree connect to the same record.', link: { href: '/platform/integrations', label: 'See integrations' } },
  ])}
  <p class="cta-note" style="margin-top:16px">What ships next is public: <a href="/roadmap">see the roadmap</a> for what is live, rolling out and planned.</p>`
)}

${L.section(
  `${L.sectionHead('BEFORE YOU DECIDE', 'Two questions jewellers ask next.', '')}
  ${L.cards([
    { icon: 'shield', title: '“Switching is risky.”', text: 'The six risks people imagine, each with the specific thing that removes it, and the six costs of staying.', link: { href: '/erp-to-os/switching', label: 'Read: is switching risky?' } },
    { icon: 'grid', title: '“My ERP is good. It has everything.”', text: 'Eight questions to put to your ERP, the tools you use around it, and what the gaps cost in a year.', link: { href: '/erp-to-os/make-do', label: 'Read: does my ERP have everything?' } },
    { icon: 'record', title: '“What is an operating system, exactly?”', text: 'The idea explained once, with a tour of what is inside Jwero.', link: { href: '/platform#why-an-os', label: 'Read: why an OS' } },
  ])}`
, { tone: 'tint' })}

${L.ctaBand('See your ERP’s blind spots on your own data.', 'Bring one customer’s name and one real enquiry. We show what the ERP knows about her, what Jwero would, and what the reply would say.', 'erp')}
`,
};

// ---------------------------------------------------------------- page 2: switching
const switching = {
  slug: 'erp-to-os/switching',
  title: 'Is Switching Jewellery ERP Risky? Risks vs Costs of Staying | Jwero',
  description: 'The six risks jewellers name when they think about leaving an ERP — data, staff, the accountant, the season, lock-in, time — each with the specific thing that removes it; the six costs of staying, which compound daily; and the 30-day switch plan with coexistence, a change-freeze and an exit test.',
  breadcrumbs: BC('Is switching risky?', true),
  faqs: [
    { q: 'Can I keep my ERP for accounts and use Jwero for everything customer-facing?', a: 'Yes — that is how most businesses start. Jwero takes WhatsApp, Instagram, the catalogue, the counter and schemes; books bridge to Tally or Zoho Books, or to your ERP’s ledger via export, for as long as you want to run both.' },
    { q: 'What if the pilot fails?', a: 'Then we stop, at the exit test, and your data leaves with you as CSV. A pilot on your own data is the point: you decide on your evidence, not our claims.' },
    { q: 'How long does a single store take?', a: 'A fifteen-minute call on day one, a pilot on your own data in days 2–5, a written plan on day 5, go-live by day 14, your first growth report at day 30. The full sequence is on the “How it goes” page.' },
    { q: 'Will we lose the history in the old system?', a: 'No. Purchase history, customers, catalogue and stock import from Excel, CSV or the ERP’s export, deduplicated and reconciled with you. The old system can stay readable for as long as you keep it.' },
    { q: 'What changes for my CA?', a: 'Less typing, and nothing else. Bills, returns and payments post to Jwero’s ledger and reach Tally automatically; Zoho Books is bridged too. Tax invoices, credit and debit notes and the audit trail are all there, and e-invoices are generated in Tally from the entries Jwero sends.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FROM ERP TO OS · SWITCHING',
  h1: 'Switching feels risky. Staying is the risk you are already paying.',
  sub: 'Every worry about switching has a specific answer: the import, the limits on AI, the Tally bridge, the change-freeze and the exit test. The costs of staying have none. They carry on every day, outside any report your ERP can run.',
  primary: { href: '#', label: 'Walk me through the switch for my business', wa: 'erpswitch' },
  secondary: { href: '/how-it-goes', label: 'See the 30-day sequence' },
})}

${L.section(
  `${L.sectionHead('WEIGH IT UP', 'Six worries about switching, each with an answer. Six costs of staying, with none.', 'Tap a worry to see what removes it. Then read what staying costs you while you decide.')}
  ${riskLedger()}
  <div class="cta-row center" style="margin-top:28px"><a class="btn btn-primary" href="#" data-wa="erpswitch">Tell us the worry that matters most</a><a class="btn btn-ghost" href="/book-demo">Book a demo</a></div>`
)}

${L.section(
  `${L.sectionHead('WHAT STAYS THE SAME', 'Most of your business does not move at all.', 'The switch changes where the work is recorded. It does not change who does it or how your customers reach you.')}
  ${L.impactGrid([
    { lever: 'Your accountant', before: 'Tally or Zoho Books, month-end, GST returns.', after: 'The same tools, with less typing. Bills, returns and payments reach Tally automatically.' },
    { lever: 'Your counter staff', before: 'Bill, exchange, return, day-close.', after: 'The same jobs on one screen, in their language, with a scan and a live rate. If they can use WhatsApp, they can use this.' },
    { lever: 'Your WhatsApp number', before: 'On a phone.', after: 'The same number, on the official API, in a shared inbox — nothing to announce to customers.' },
    { lever: 'Your data', before: 'In the ERP, exportable if the vendor allows.', after: 'Imported into a record you own, and yours to export any time.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('HOW THE SWITCH RUNS', 'Thirty days, with a way out at every step.', 'Your ERP keeps running alongside Jwero to begin with. You move the rest only when the first month has proved itself.')}
  ${L.steps([
    { title: 'Days 1–5 — import and coexist', text: 'Customers, catalogue, stock imported and reconciled with you. The ERP keeps the books. Jwero takes the customer-facing doors: WhatsApp, Instagram, catalogue links, the counter if you choose.' },
    { title: 'Day 5 — the written plan', text: 'What changes, the migration path, a straight price, and the change-freeze dates around your season. Then it is your call.' },
    { title: 'Days 7–14 — go live', text: 'The AI starts working inside caps and quiet hours you set, with approval on for whatever you choose. Staff trained by role, in their language.' },
    { title: 'Day 30 — the exit test', text: 'Enquiries answered, prices consistent, day-close variance, your first growth report on your own data. If it fails, we stop and your data leaves with you.' },
    { title: 'After: move the rest when you are ready', text: 'Move the books across when it suits you, or keep the Tally bridge for good. Both are normal.' },
  ])}`
)}

${L.section(L.safeToTryStrip())}

${L.section(
  `${L.sectionHead('BEFORE YOU DECIDE', 'Three more things worth reading.', '')}
  ${L.cards([
    { icon: 'grid', title: '“My ERP is good. It has everything.”', text: 'Eight questions to put to your ERP, the tools you use around it, and what the gaps cost in a year on your own figures.', link: { href: '/erp-to-os/make-do', label: 'Read: does my ERP have everything?' } },
    { icon: 'swap', title: 'Coming from a specific ERP?', text: 'Feature-by-feature comparisons with the systems jewellers run today: what each does well, and what Jwero adds.', link: { href: '/compare', label: 'See the comparisons' } },
    { icon: 'route', title: 'The Migration Centre', text: 'Import formats, what maps to what, and the change-freeze policy, written down.', link: { href: '/migration', label: 'See the Migration Centre' } },
  ])}`
, { tone: 'tint' })}

${L.ctaBand('Start with the worry that matters most.', 'Tell us which one you tapped last. We answer that one first, on WhatsApp.', 'erpswitch')}
`,
};

// ---------------------------------------------------------------- page 3: "my ERP has everything"
// Eight questions a jeweller can put to their ERP or its vendor. Each names something the
// operating system does; none asserts what a particular ERP cannot do.
const ERP_QUESTIONS = [
  ['A customer asks a price on WhatsApp at 9pm. Who replies, and at which gold rate?', 'If the answer is “whoever sees it in the morning”, the sale has usually gone to whoever replied first.'],
  ['The gold rate moved this morning. Did the catalogue link, the website and yesterday’s quotation change by themselves?', 'If someone has to update them by hand, some prices are wrong right now.'],
  ['Show me everyone who enquired last month and did not buy.', 'An ERP starts at the bill, so an enquiry that never became a bill is usually not in it.'],
  ['A customer walks in. Can the counter see what she asked about on Instagram last week?', 'If not, your staff start from zero with someone who has already told you what she wants.'],
  ['Which regular customers have not come back in six months?', 'These are the easiest sales to win back, if anyone can see the list.'],
  ['My best salesperson leaves tomorrow. Where are their customers’ conversations?', 'If they are on a personal phone, the relationships leave with it.'],
  ['Which scheme instalments are overdue today, and has each customer been reminded?', 'A missed instalment that nobody chases often becomes a closed scheme.'],
  ['Which pieces have not moved in six months, and which customers were they shown to?', 'Ageing stock is money standing still. Knowing who saw it tells you who to call.'],
];
const makeDo = {
  slug: 'erp-to-os/make-do',
  title: 'Does Your Jewellery ERP Have Everything? 8 Questions to Ask | Jwero',
  description: '“My ERP is good, it has everything.” Eight questions to ask your jewellery ERP or its vendor, the tools most jewellers run around it, a job-by-job comparison, and a calculator for what the gaps cost in a year.',
  breadcrumbs: BC('Does my ERP have everything?', true),
  faqs: [
    { q: 'When is my ERP enough by itself?', a: 'When you get a handful of enquiries a week, run no schemes, have one salesperson who is not going anywhere, and sell only at the counter. Honestly: then wait. The moment two of those stop being true, the gaps start costing more than the software.' },
    { q: 'Can I keep the ERP and add Jwero for the customer side?', a: 'Yes. That is the most common start: the ERP keeps the books for a quarter, Jwero takes WhatsApp, Instagram, the catalogue and the counter, and the two are bridged. Migrate the rest when the pilot has earned it, or never.' },
    { q: 'Is the leakage calculator real?', a: 'The arithmetic is real; the inputs are yours; the one assumption — that a slow reply closes at a third of a fast one — is a conservative reading of what jewellers tell us, not a measured constant. Change it in the assumptions and the number moves with it.' },
    { q: 'My ERP vendor is adding a WhatsApp module. Should I wait?', a: 'Ask whether the module drafts a priced reply from the catalogue at the live rate, whether it knows her scheme balance, and whether a reply she sends on Instagram lands in the same thread. A module that shares a login but not a record will feel like a fourth tool.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FROM ERP TO OS · IS MY ERP ENOUGH?',
  h1: '“My ERP is good. It has everything.” Here is how to check.',
  sub: 'It may well be good at what it was built for: billing, stock and accounts. This page gives you eight plain questions to put to your ERP, or to the people who sold it to you. If it answers all eight, keep it. If it cannot, bring the list to a demo and ask us the same eight.',
  primary: { href: '#ask-your-erp', label: 'See the eight questions' },
  secondary: { href: '/book-demo', label: 'Ask Jwero the same eight' },
})}

${L.section(
  `<span id="ask-your-erp"></span>${L.sectionHead('STEP 1 · ASK YOUR ERP', 'Eight questions. A good ERP should answer every one.', 'Open your ERP, or call your vendor, and ask these exactly as written. Each is something that happens in a jewellery business every week.')}
  <ol class="askq">${ERP_QUESTIONS.map(([q, why]) => `<li><b>${q}</b><span>${why}</span></li>`).join('')}</ol>
  <div class="askq-verdict"><p><b>All eight answered?</b> Your ERP really does have everything. Keep it.</p><p><b>Some it could not answer?</b> Those are the parts of your business nobody is watching. Bring the list to a demo and put the same eight questions to Jwero.</p></div>
  <div class="cta-row center" style="margin-top:22px"><a class="btn btn-primary" href="/book-demo">Ask Jwero these eight in a demo</a><a class="btn btn-ghost" href="#" data-share="Eight questions to ask our ERP. If it cannot answer them, we are missing sales:">Send the questions to my team</a></div>`
)}

${L.section(
  `${L.sectionHead('STEP 2 · WHAT YOU USE AROUND IT', 'If the ERP has everything, why these other tools?', 'Tap everything your business uses besides the ERP. Each one is doing a job the ERP does not, and every hand-off between them is where a customer, a price or a payment gets lost.')}
  ${makeDoStack()}`
)}

${L.section(
  `${L.sectionHead('STEP 3 · THE WEEKLY JOBS', 'Nine things that happen every week, and what each setup does with them.', 'Compare by the work that has to get done, not by a list of features.')}
  ${jobsTable()}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('STEP 4 · YOUR NUMBER', 'What the unanswered questions cost in a year, on your own figures.', 'Enter your enquiries, your average sale and your close rate. There is one cautious assumption, and you can change it.')}
  ${leakCalc()}
  <div class="cta-row center" style="margin-top:28px"><a class="btn btn-primary" href="#" data-wa="erpmakedo">Go through my numbers with me</a><a class="btn btn-ghost" href="/book-demo">Book a demo</a></div>`
)}

${L.section(
  `${L.sectionHead('YOUR NEXT STEP', 'You do not have to choose on day one.', 'Three ways to begin, and none of them means switching off your ERP tomorrow.')}
  ${L.cards([
    { title: 'Run both, side by side', text: 'Your ERP keeps the books while Jwero takes WhatsApp, Instagram, the catalogue and the counter. The two stay connected for as long as you want.', link: { href: '/erp-to-os/switching', label: 'See how switching works' } },
    { title: 'Run it yourself', text: 'Start a free trial today. Bring your catalogue and ten customers, and see a priced reply on a real enquiry.', link: { href: 'https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=erp', label: 'Try Free Now' } },
    { title: 'Let Jwero run it', text: 'Jwero’s specialists and AI take the customer side off your hands, with no subscription and every tool included. Your ERP carries on as it is.', link: { href: '/jewellery-business-as-a-service', label: 'See how it works' } },
  ])}
  <p class="cta-note" style="margin-top:16px">If your ERP answered all eight and your number came out small, carry on as you are and check again in six months. Better to find that out here than on a call.</p>`
, { tone: 'tint' })}

${L.ctaBand('One enquiry. Two replies.', 'Send us a real price question a customer asked last week. We show you the reply your ERP setup gives, and the one Jwero would have drafted — with the price.', 'erpmakedo')}
`,
};

module.exports = [erpToOs, switching, makeDo];
