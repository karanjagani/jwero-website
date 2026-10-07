// The ERP → OS cluster. Three landing pages for the three sentences that stall
// a sale: "we have an ERP", "switching is risky", "we can make do".
// No market statistics are invented anywhere here — the argument runs on what
// the reader already knows about their own day, plus product-verified facts.
const L = require('../lib');
const BC = (label, parent) => parent ? [['Home', '/'], ['From ERP to OS', '/erp-to-os'], [label]] : [['Home', '/'], [label]];

// ---------------------------------------------------------------- shared visuals
const ERAS = [
  { key: 'register', era: 'The register', when: 'Until the 2000s', centre: 'The owner’s memory', icon: 'book',
    served: 'The owner', customer: 'Known by face. Served well while the owner was in.', doors: ['Counter'],
    couldnt: 'Scale past one head. Survive a salesperson leaving. Answer anyone who wasn’t standing in the shop.' },
  { key: 'erp', era: 'The ERP', when: '2000s → today', centre: 'The invoice and the ledger', icon: 'receipt',
    served: 'The accountant and the back office', customer: 'A name on a bill. Nothing about her taste, her occasions, or what she asked last week.', doors: ['Counter', 'Back office'],
    couldnt: 'Reply on WhatsApp. Remember a customer. Reprice a catalogue when the rate moved. Draft anything. Know what she tried on and walked away from.' },
  { key: 'os', era: 'The operating system', when: 'Now', centre: 'One customer record — and AI working it', icon: 'record',
    served: 'The customer, and everyone who serves her', customer: 'Remembered on every door: the reply she gets at 11pm, the price she sees, the reminder she receives, the greeting at the counter.', doors: ['Counter', 'WhatsApp', 'Instagram', 'Website', 'Catalogue links', 'Video counter', 'Schemes', 'Workshop', 'Books'],
    couldnt: 'Nothing sends without your yes. It does not replace your CA. It is India-first today.' },
];
function eraSlider() {
  const stops = ERAS.map((e, i) => `<button type="button" class="era-stop${i === 1 ? ' is-on' : ''}" data-era="${i}" aria-pressed="${i === 1}"><b>${e.era}</b><span>${e.when}</span></button>`).join('');
  const panels = ERAS.map((e, i) => `
    <div class="era-panel${i === 1 ? ' is-on' : ''}" data-era-panel="${i}">
      <div class="era-centre">${L.icon(e.icon)}<div><small>At the centre</small><strong>${e.centre}</strong></div></div>
      <dl class="era-facts">
        <div><dt>Built to serve</dt><dd>${e.served}</dd></div>
        <div><dt>What the customer is</dt><dd>${e.customer}</dd></div>
        <div><dt>Doors it can serve</dt><dd class="era-doors">${e.doors.map((d) => `<span>${d}</span>`).join('')}</dd></div>
        <div><dt>${i === 2 ? 'What it still won’t do' : 'What it could not do'}</dt><dd>${e.couldnt}</dd></div>
      </dl>
    </div>`).join('');
  return `
<div class="era" data-era>
  <div class="era-track"><i class="era-fill"></i>${stops}</div>
  <div class="era-panels">${panels}</div>
  <p class="era-note">Each era kept what the last one did well. The ERP kept the books straight; the OS keeps the books straight <em>and</em> the customer remembered.</p>
</div>`;
}

function centreSwap() {
  const node = (icon, label, note) => `<div class="cs-node"><span class="cs-ico">${L.icon(icon)}</span><b>${label}</b><small>${note}</small></div>`;
  return `
<div class="cswap" data-cswap>
  <div class="cs-switch" role="group" aria-label="What sits at the centre">
    <button type="button" data-cs="erp" class="is-on" aria-pressed="true">ERP-centred</button>
    <button type="button" data-cs="os" aria-pressed="false">Customer-centred (OS)</button>
  </div>
  <div class="cs-stage">
    <div class="cs-ring">
      ${node('receipt', 'Billing', 'writes the invoice')}${node('box', 'Stock', 'moves on sale')}${node('coins', 'Schemes', 'a separate register')}${node('chat', 'WhatsApp', 'on someone’s phone')}${node('store', 'Counter', 'greets a stranger')}${node('scale', 'Workshop', 'its own khata')}
    </div>
    <div class="cs-centre"><span class="cs-centre-erp">${L.icon('receipt')}<b>The invoice</b><small>Everything else is bolted on around it</small></span><span class="cs-centre-os">${L.icon('record')}<b>Meera’s record</b><small>Every door reads and writes the same row</small></span></div>
  </div>
  <p class="cs-read" data-cs-read>In an ERP, the invoice is the truth. WhatsApp, Instagram and the customer’s history live outside it — on phones, in sheets, in heads. The ERP only learns about Meera when she pays.</p>
</div>`;
}

const SWITCH_RISKS = [
  ['My data is stuck in the ERP.', 'We import from Excel, CSV or the ERP’s export — customers, catalogue, stock, however messy — and reconcile it with you in days 2–5. Your data also leaves the same way, any time.'],
  ['My staff will not learn a new system.', 'If they can use WhatsApp they can use Jwero. Roles are trained in their language, and every AI action waits in an approval queue, so nobody can send anything wrong on day one.'],
  ['My accountant’s world will break.', 'It does not change. Books post to Jwero’s ledger and bridge to Tally or Zoho Books. Your CA keeps the tools she has.'],
  ['We will lose days in the season.', 'A written change-freeze around your peak weeks is part of the plan. Go-lives happen before or after, never during.'],
  ['We will be locked into a new vendor.', 'You own your data; exports are yours whenever you want them. A public roadmap says what is shipped and what is not — before you buy.'],
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
      <div class="rl-head"><p class="eyebrow">${tag}</p><h3>${title}</h3><p class="rl-tally"><b data-rl-n="${kind}">${items.length}</b> <span data-rl-l="${kind}">${kind === 'switch' ? 'risks standing' : 'costs compounding'}</span></p></div>
      ${items.map(([r, m], i) => `<button type="button" class="rl-item" data-rl="${kind}" aria-expanded="false"><span class="rl-q">${r}</span><span class="rl-a">${m}</span><span class="rl-hint">${kind === 'switch' ? 'Tap to see what removes it' : 'Tap to see what it costs'}</span></button>`).join('')}
    </div>`;
  return `
<div class="rl" data-rl>
  ${col('If you switch', 'THE RISK YOU IMAGINE', SWITCH_RISKS, 'switch')}
  ${col('If you stay', 'THE RISK YOU ARE PAYING', STAY_COSTS, 'stay')}
</div>
<p class="rl-verdict" data-rl-verdict>Tap every line on the left. Each one has a specific answer. The lines on the right have none — they just continue.</p>`;
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
  ['Reply to a price question at 11pm', 'No', 'Someone types it from memory, next morning', 'A priced draft from the catalogue at the live rate, waiting for your tap'],
  ['Reprice everything when the rate moves', 'The bill, at the counter', 'By hand, wherever someone remembers', 'One rule; every channel, every share, every quote'],
  ['Remember what Meera tried on and walked away from', 'No', 'If the salesperson remembers', 'On her record; a follow-up drafts from it'],
  ['Chase this month’s scheme instalments', 'A report, maybe', 'A register and a phone', 'Due list with balances; reminders draft themselves'],
  ['Show which designs have sat 180+ days', 'A report, if someone runs it', 'A sheet, if someone maintains it', 'On the screen everyone sees, by branch'],
  ['Send a festival message to the right 400 people', 'No', 'A blast to everyone, opt-outs by hand', 'A segment by taste and value; personalised; approved; opt-outs enforced'],
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
    <div class="stat"><div class="stat-n" id="lk-year">—</div><div class="stat-l">a year of “making do”</div></div>
    <a class="btn btn-wa" id="lk-wa" href="#" target="_blank" rel="noopener" style="width:100%;text-align:center">Send my numbers to Jwero</a>
    <p class="cta-note">We reply with what the priced-reply flow would do on your enquiries — drafted, approved, sent.</p>
  </div>
</div>`;
}

// ---------------------------------------------------------------- page 1: imminence
const erpToOs = {
  slug: 'erp-to-os',
  title: 'From ERP to OS: Why Jewellery Software Is Changing | Jwero',
  description: 'The ERP was built around the invoice. Your customers now live on WhatsApp and Instagram, the rate moves twice a day, and AI can draft at the quality of your best salesperson — if it has the record. Why the shift from ERP to an operating system is already underway, and what it means for a jewellery business.',
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
  h1: 'Your ERP was built around the invoice. Your customers moved to WhatsApp.',
  sub: 'Every era of jewellery software had a centre. The register had the owner’s memory. The ERP has the ledger. The operating system keeps everything the ERP did, billing, stock, purchase, workshop and accounts, and adds what it never saw: the customer, the enquiry, the showroom floor and the team, on one record with AI working it. This is why the shift is happening now, in plain words, and what it changes.',
  primary: { href: '#', label: 'Show me the difference on my business', wa: 'erp' },
  secondary: { href: '/erp-to-os/switching', label: 'Is switching risky? Read this first' },
})}

${L.section(
  `${L.sectionHead('THREE ERAS, ONE QUESTION', 'What sits at the centre decides what the software can do.', 'Slide through the eras. The question to ask of any system is the same: what is at its centre, and whom was it built to serve?')}
  ${eraSlider()}`
)}

${L.section(
  `${L.sectionHead('WHAT CHANGED', 'Four things that did not wait for the ERP to catch up.', 'None of these is a forecast. Each one is already true in your shop this week.')}
  ${L.cards([
    { icon: 'chat', title: 'The question moved', text: 'She asks the price on WhatsApp at 9pm and compares on Instagram. Whoever replies first, with a price, gets the visit. The ERP meets her only when she pays.' },
    { icon: 'trend', title: 'The price moved', text: 'The rate changes through the day. Every catalogue share, quote and website price that is not a rule is a stale number waiting to cost a margin or a customer.' },
    { icon: 'bot', title: 'Drafting became possible', text: 'AI can write a priced, personal reply at the quality of your best salesperson — but only from a record that knows her scheme balance, her taste and today’s rate. Without the record, it writes fiction.' },
    { icon: 'users', title: 'Memory kept walking out', text: 'Salespeople change. The ERP keeps their bills; it never kept their customers. The business that owns the memory keeps the relationship.' },
  ], 4)}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('MOVE THE CENTRE', 'Same modules. Different centre. Everything changes.', 'Tap the switch. Watch what each module can know when the centre changes.')}
  ${centreSwap()}`
)}

${L.impactGrid([
  { lever: 'A customer buys at the counter', before: 'The ERP writes the bill. Her WhatsApp thread, her scheme and her next follow-up know nothing.', after: 'One row updates: her record, her scheme balance, her next follow-up, the stock, the books.', link: { href: '/products/pos', label: 'See the counter' } },
  { lever: 'The rate moves', before: 'The ERP reprices the bill. The catalogue, the website and yesterday’s quote wait for a person.', after: 'One rule reprices every channel; an override routes through approval.', link: { href: '/platform/pricing-engine', label: 'See the pricing engine' } },
  { lever: 'An enquiry lands at 11pm', before: 'Nothing. The ERP has no door for it.', after: 'A priced reply drafts from her record and today’s rate — sent, or held for your tap.', link: { href: '/products/whatsapp', label: 'See WhatsApp Commerce' } },
  { lever: 'A salesperson leaves', before: 'The bills stay in the ERP. The customers leave with the phone.', after: 'Every conversation, preference and promise stays with the business.', link: { href: '/platform/customer-memory', label: 'See Customer Memory' } },
])}

${L.section(
  `${L.sectionHead('THE HONEST PART', 'Jwero contains an ERP. It is not centred on one.', '')}
  ${L.cards([
    { title: 'What you keep', text: 'Orders, purchase, vendors, job work, stock, GST invoicing, a ledger, Tally and Zoho Books bridges — the ERP jobs are inside Jwero, on the same record as everything else.', link: { href: '/products/erp', label: 'See ERP, reconsidered' } },
    { title: 'What you lose', text: 'The gap. The re-typing between the sheet and the ERP, the WhatsApp thread nobody can see at the counter, the PDF with last week’s price.' },
    { title: 'What we don’t do yet', text: 'E-invoice IRN and e-way bills (e-invoices run through Tally), CAD-to-BOM, courier integration. The public roadmap says what is shipped, rolling out and not yet.', link: { href: '/roadmap', label: 'See the roadmap' } },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('WHERE NEXT', 'Two more pages for two more sentences.', '')}
  ${L.cards([
    { icon: 'shield', title: '“Switching is risky.”', text: 'The six risks people imagine, each with the specific thing that removes it — and the six costs of staying, which have no answer.', link: { href: '/erp-to-os/switching', label: 'Read: is switching risky?' } },
    { icon: 'grid', title: '“I can make do with my ERP.”', text: 'Take the objection seriously: tap the tools you use today, see the gaps between them, and put a number on a year of making do.', link: { href: '/erp-to-os/make-do', label: 'Read: can I make do?' } },
    { icon: 'record', title: 'What an OS is, once', text: 'The category, defined — and the one test that separates a bundle from an operating system.', link: { href: '/why-an-os', label: 'Read: why an OS' } },
  ])}`
)}

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
    { q: 'How long does a single store take?', a: 'A fifteen-minute call on day one, a pilot on your own data in days 2–5, a written plan on day 5, go-live with approvals on by day 14, your first growth report at day 30. The full sequence is on the “How it goes” page.' },
    { q: 'Will we lose the history in the old system?', a: 'No. Purchase history, customers, catalogue and stock import from Excel, CSV or the ERP’s export, deduplicated and reconciled with you. The old system can stay readable for as long as you keep it.' },
    { q: 'What changes for my CA?', a: 'Nothing she will notice. Books post to Jwero’s ledger and bridge to Tally or Zoho Books. GST-ready invoices, credit and debit notes and the audit trail are there; e-invoice IRN generation is not yet, and we say so.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FROM ERP TO OS · SWITCHING',
  h1: 'Switching feels risky. Staying is the risk you are already paying.',
  sub: 'Every risk of switching has a specific answer — the import, the approval queue, the Tally bridge, the change-freeze, the exit test. The costs of staying have none; they just continue, every day, outside any report your ERP can run.',
  primary: { href: '#', label: 'Walk me through the switch for my business', wa: 'erpswitch' },
  secondary: { href: '/how-it-goes', label: 'See the 30-day sequence' },
})}

${L.section(
  `${L.sectionHead('THE RISK LEDGER', 'Six risks you imagine. Six costs you pay.', 'Tap each line. The left column empties. The right one does not.')}
  ${riskLedger()}`
)}

${L.section(
  `${L.sectionHead('WHAT STAYS, WHAT CHANGES', 'Most of your business does not move at all.', '')}
  ${L.impactGrid([
    { lever: 'Your accountant', before: 'Tally or Zoho Books, month-end, GST returns.', after: 'Exactly the same. Books bridge to the tools she already uses.' },
    { lever: 'Your counter staff', before: 'Bill, exchange, return, day-close.', after: 'The same jobs on one screen, in their language, with a scan and a live rate. If they can use WhatsApp, they can use this.' },
    { lever: 'Your WhatsApp number', before: 'On a phone.', after: 'The same number, on the official API, in a shared inbox — nothing to announce to customers.' },
    { lever: 'Your data', before: 'In the ERP, exportable if the vendor allows.', after: 'Imported into a record you own, exportable any time as CSV. Ownership is the point.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('THE SWITCH PLAN', 'Thirty days, with an exit at every step.', 'The literal sequence we run. Coexistence first; migration when the pilot has earned it.')}
  ${L.steps([
    { title: 'Days 1–5 — import and coexist', text: 'Customers, catalogue, stock imported and reconciled with you. The ERP keeps the books. Jwero takes the customer-facing doors: WhatsApp, Instagram, catalogue links, the counter if you choose.' },
    { title: 'Day 5 — the written plan', text: 'What changes, the migration path, a straight price, and the change-freeze dates around your season. Then it is your call.' },
    { title: 'Days 7–14 — go live, approvals on', text: 'Every AI action waits in the approval queue from day one. Staff trained by role, in their language. Nothing sends without a tap.' },
    { title: 'Day 30 — the exit test', text: 'Enquiries answered, prices consistent, day-close variance, your first growth report on your own data. If it fails, we stop and your data leaves with you.' },
    { title: 'After — migrate the rest, or don’t', text: 'Move the books when you are ready, or keep the bridge to Tally forever. Both are normal.' },
  ])}`
)}

${L.section(L.safeToTryStrip())}

${L.section(
  `${L.sectionHead('THE OTHER SENTENCE', '“We can make do with what we have.”', '')}
  ${L.cards([
    { icon: 'grid', title: 'Take it seriously', text: 'Tap the tools you use today, see the gaps between them, and put a number on a year of making do — with your own enquiries and your own ticket size.', link: { href: '/erp-to-os/make-do', label: 'Read: can I make do?' } },
    { icon: 'swap', title: 'Coming from a specific ERP?', text: 'Honest, feature-by-feature comparisons with the systems jewellers run today — what they do well, and where the gap is.', link: { href: '/compare', label: 'See the comparisons' } },
    { icon: 'route', title: 'The Migration Centre', text: 'Import formats, what maps to what, and the change-freeze policy, written down.', link: { href: '/migration', label: 'See the Migration Centre' } },
  ])}`
, { tone: 'tint' })}

${L.ctaBand('Start with the risk that worries you most.', 'Tell us which line on the left you tapped last. We answer that one first, on WhatsApp.', 'erpswitch')}
`,
};

// ---------------------------------------------------------------- page 3: make do
const makeDo = {
  slug: 'erp-to-os/make-do',
  title: 'Can a Jeweller Make Do With an ERP? What It Costs | Jwero',
  description: 'Take the objection seriously: tap the tools a jewellery business runs on today — ERP, WhatsApp app, Excel, Tally, Instagram, PDFs, people’s memory — see the gaps between them, compare the jobs each can do, and put a number on a year of making do with your own enquiries and ticket size.',
  breadcrumbs: BC('Can I make do?', true),
  faqs: [
    { q: 'When is making do the right call?', a: 'When you get a handful of enquiries a week, run no schemes, have one salesperson who is not going anywhere, and sell only at the counter. Honestly: then wait. The moment two of those stop being true, the gaps start costing more than the software.' },
    { q: 'Can I keep the ERP and add Jwero for the customer side?', a: 'Yes. That is the most common start: the ERP keeps the books for a quarter, Jwero takes WhatsApp, Instagram, the catalogue and the counter, and the two are bridged. Migrate the rest when the pilot has earned it, or never.' },
    { q: 'Is the leakage calculator real?', a: 'The arithmetic is real; the inputs are yours; the one assumption — that a slow reply closes at a third of a fast one — is a conservative reading of what jewellers tell us, not a measured constant. Change it in the assumptions and the number moves with it.' },
    { q: 'My ERP vendor is adding a WhatsApp module. Should I wait?', a: 'Ask whether the module drafts a priced reply from the catalogue at the live rate, whether it knows her scheme balance, and whether a reply she sends on Instagram lands in the same thread. A module that shares a login but not a record will feel like a fourth tool.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FROM ERP TO OS · MAKING DO',
  h1: '“I can make do with my ERP.” Let’s take that seriously.',
  sub: 'You can. Many do — with an ERP, a WhatsApp app, Excel, Tally, Instagram and three people’s memory holding it together. The question is not whether it works. It is what the gaps between those tools cost, and who is quietly paying for them.',
  primary: { href: '#', label: 'Show me what the gaps cost on my numbers', wa: 'erpmakedo' },
  secondary: { href: '/erp-to-os', label: 'Why the ERP era is ending' },
})}

${L.section(
  `${L.sectionHead('YOUR STACK TODAY', 'Tap what you use. The gaps appear between them.', 'Making do is never one tool. It is the hand-offs between several — and every hand-off is a place a customer, a price or a payment gets lost.')}
  ${makeDoStack()}`
)}

${L.section(
  `${L.sectionHead('JOBS, NOT FEATURES', 'What each setup can actually do on a Tuesday.', 'Not a feature matrix. Nine things that happen in a jewellery business every week, and what each setup does with them.')}
  ${jobsTable()}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('PUT A NUMBER ON IT', 'What a year of making do is worth, at your close rates.', 'Your enquiries, your ticket size, your close rate. One conservative assumption, editable.')}
  ${leakCalc()}`
)}

${L.section(
  `${L.sectionHead('KEEP THE ERP', 'You do not have to choose on day one.', '')}
  ${L.cards([
    { title: 'Coexist', text: 'The ERP keeps the books; Jwero takes the customer-facing doors. Bridged, for as long as you want.', link: { href: '/erp-to-os/switching', label: 'See how switching works' } },
    { title: 'Start alone, for ₹3,600', text: 'The first month is ₹3,600 at os.jwero.ai, in three steps. Bring your catalogue and ten customers; see the priced reply on a real enquiry.', link: { href: '/start', label: 'Start for ₹3,600' } },
    { title: 'Or make do, honestly', text: 'If the calculator says the gap is small, keep going and come back when it is not. We would rather you find that out here than on a call.' },
  ])}`
, { tone: 'tint' })}

${L.ctaBand('One enquiry. Two replies.', 'Send us a real price question a customer asked last week. We show you the reply your ERP setup gives, and the one Jwero would have drafted — with the price.', 'erpmakedo')}
`,
};

module.exports = [erpToOs, switching, makeDo];
