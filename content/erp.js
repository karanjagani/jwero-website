// The single ERP page (2026-10-10). Inventory, Manufacturing & Workshop,
// Purchase & Vendors, Billing & Finance, Counter POS and Repairs & After-Sales
// were merged into /products/erp; ERP_MOVED in build.js sends old links to the
// module sections here. Every capability below was checked against pim-app
// (survey 2026-10-10). Not claimed: native mobile apps, RFID reader hardware
// (say RFID-ready), CAD files, IBJA or MCX rate feeds, a standalone vendor portal
// app (POs reach the vendor's own Jwero workspace), lifetime exchange, casting
// trees, WhatsApp on every sale without a journey switched on.
const L = require('../lib');
const { icon } = L;
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

const MODS = [
  ['inventory', 'box', 'Inventory'],
  ['manufacturing', 'scale', 'Workshop'],
  ['purchase', 'truck', 'Purchase'],
  ['finance', 'coins', 'Finance'],
  ['pos', 'till', 'Counter'],
  ['repairs', 'tools', 'Repairs'],
];

// The parity check: what any jewellery ERP has (left) and what Jwero adds (right).
const PARITY = [
  ['inventory', 'box', 'Inventory', ['Tags and barcodes', 'Gross, net and fine weight', 'Hallmark batches and HUID', 'Branch transfers', 'Stock counts'], ['Each piece valued at today’s rate, by branch and purity', 'Ageing bands, with slow stock marked down and offered to matching customers', 'Transfers that must balance by weight, or they do not close', 'Cycle counts by scanning, without shutting the shop', 'Memo, consignment and trial stock out and back against each document', 'RFID-ready tag movement']],
  ['manufacturing', 'scale', 'Manufacturing & Workshop', ['Bills of materials', 'Job cards', 'Karigar issue and receive', 'Metal khata'], ['Gold tracked in fine grams through every stage', 'Every job settled against your wastage norms, with the gap shown', 'Material planning from open orders and BOMs', 'Melting, refining and recovery on the same metal ledger', 'Quality checks by sampling, rework tracked', 'Karigar rate cards, scorecards and TDS']],
  ['purchase', 'truck', 'Purchase & Vendors', ['Purchase orders', 'Goods received', 'Purchase bills and returns', 'Vendor ledgers'], ['Orders drafted by AI from what is selling, low and ageing', 'Unfixed-rate gold bought by weight, rate fixed later', 'Receiving by weight and purity, with tolerance rules and shortfalls credited', 'Bill matched to the order and the receipt', 'Input credit checked against GSTR-2B', 'Orders reach the vendor in their own Jwero workspace']],
  ['finance', 'coins', 'Billing & Finance', ['GST invoices', 'Ledgers', 'GSTR-1 and GSTR-3B', 'Tally export'], ['Every invoice priced at today’s rate: metal, making, stones and GST', 'A double-entry ledger kept in step with Tally or Zoho Books, nothing typed twice', 'P&L, balance sheet, day book, cash flow and ageing', 'Metal ledger and metal loans in fine grams', 'Payment links, and reminders on dues sent on their own', 'Stock and ledger drift flagged before month end']],
  ['pos', 'till', 'Counter POS', ['Billing', 'Old gold exchange', 'Returns', 'Day close'], ['Scan a tag: priced at today’s rate in a second', 'Hallmark checked at the counter by HUID: warn or block, your choice', 'Old gold on a voucher, applied as credit on the new bill', 'Discounts above your limit wait for approval', 'Declared cash against expected, variance on screen', 'Keeps billing through an internet drop, syncs without duplicates']],
  ['repairs', 'tools', 'Repairs & After-Sales', ['Repair slips', 'Delivery dates'], ['Weight in and weight out, loss noted before she collects', 'Every handoff logged and never edited', 'Estimate approved by her before work starts', 'Re-hallmark flag that blocks delivery until handled', 'Turnaround tracked, with late jobs predicted', 'Warranty on the original invoice and HUID']],
];
const parity = () => `<div class="erp-par">${PARITY.map(([id, ic, t, has, adds], k) => `<details class="erp-par-row" name="erp-par"${k === 0 ? ' open' : ''}><summary><span class="erp-par-ico">${icon(ic)}</span><b>${t}</b><span class="erp-par-meter" aria-hidden="true"><i class="is-has" style="--w:${has.length}"></i><i class="is-add" style="--w:${adds.length}"></i></span><small>${has.length} you have · <em>+${adds.length} you don’t</em></small></summary><div class="erp-par-cols"><div><p class="erp-par-k">Your ERP has</p><ul class="is-has">${has.map((x) => `<li>${icon('check')}${x}</li>`).join('')}</ul></div><div><p class="erp-par-k is-add">Jwero adds</p><ul class="is-add">${adds.map((x) => `<li>${icon('sparkle')}${x}</li>`).join('')}</ul></div></div></details>`).join('')}</div>`;

// One bridal order through every department: the bubble collects a tag per step.
const RUN = [
  ['Ordered at the counter', 'Bridal necklace booked against her record, advance taken, rate fixed or left open.', 'till'],
  ['Material planned', 'Gold, rubies and findings worked out from the design’s BOM; the rubies ordered from the vendor.', 'truck'],
  ['Made in the workshop', 'Issued to the karigar by fine weight; every stage weighed; settled against your norm.', 'scale'],
  ['Tagged and hallmarked', 'Finished piece tagged with gross, net and fine weight; HUID recorded.', 'box'],
  ['Billed and paid', 'Priced at that day’s rate, old gold deducted, advance applied, balance paid.', 'coins'],
  ['On the books', 'Ledger, GST and the metal ledger posted; Tally in step; the salesperson credited.', 'book'],
];
const RUN_TAGS = [['till', 'Advance received'], ['truck', 'Rubies received, QC passed'], ['scale', '62.40 g fine · within norm'], ['box', 'Hallmarked · HUID recorded'], ['coins', 'Old gold deducted · paid'], ['check', 'Posted · Tally in step']];
const erpRun = () => `<div class="ibx-msg" data-msg style="--n:${RUN.length}">
  <div class="ibx-msg-stage" aria-hidden="true"><div class="ibx-msg-bubble"><p>Order 2231 · 22K bridal necklace for Meera</p><ul>${RUN_TAGS.map(([ic, t], i) => `<li data-k="${i}">${icon(ic)}${t}</li>`).join('')}</ul></div></div>
  <ol class="ibx-msg-steps">${RUN.map(([t, d, ic], i) => `<li data-k="${i}"><span class="ibx-msg-n">${icon(ic)}<b>${i + 1}</b></span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
</div>`;

// Leaks, hidden loss and bottlenecks: front is what an ERP lets happen; back is Jwero.
const LEAKS = [
  ['Leak', 'scale', 'A few milligrams lost per job at the karigar, found at year end, if ever', 'Every job settled against your wastage norm the day it returns, the gap on screen'],
  ['Leak', 'receipt', 'Discounts given at the counter that nobody approved', 'Discounts above your limit wait for an approver; every override logged'],
  ['Leak', 'wallet', 'Cash short at day close, explained by “someone”', 'Declared count against expected, per register, with the person who opened the shift'],
  ['Hidden loss', 'box', 'Pieces sitting 180 days, valued at last year’s cost', 'Ageing at today’s rate; slow pieces marked down and offered to customers who match'],
  ['Hidden loss', 'truck', 'Vendor short-delivers by a gram; the bill is paid in full', 'Received by weight and purity against the order; the shortfall credited before payment'],
  ['Hidden loss', 'coins', 'Input credit missed because a supplier did not file', 'Purchases matched to GSTR-2B each month; gaps listed to chase'],
  ['Hidden loss', 'tools', 'Repair weight disputes settled in the customer’s favour', 'Weight in and weight out recorded; any loss noted before she collects'],
  ['Hidden loss', 'flow', 'Stock in the system and in the books drift apart', 'Stock-to-ledger drift flagged by a nightly check, not found by the CA'],
  ['Bottleneck', 'till', 'A customer waits while someone calculates the rate', 'Scan the tag: metal at today’s rate, making, stones and GST in one line'],
  ['Bottleneck', 'record', 'Month end waits for entries retyped into Tally', 'Sales, returns, payments and expenses synced to Tally as they happen'],
  ['Bottleneck', 'activity', 'Nobody knows which karigar job is late until she asks', 'Due dates swept for lateness; late jobs predicted before they slip'],
  ['Bottleneck', 'book', 'Buying decided by memory and phone calls', 'Purchase orders drafted from what is selling, low and ageing, with each vendor’s prices'],
];
const leakCards = () => `<div class="ibx-flips erp-leaks" data-flips>${LEAKS.map(([k, ic, before, after], i) => `<button type="button" class="ibx-flip" style="--i:${i}" aria-pressed="false"><span class="ibx-flip-in"><span class="ibx-flip-f"><span class="ibx-flip-ico">${icon(ic)}</span><small class="erp-leak-k">${k} in your ERP</small><b>${before}</b></span><span class="ibx-flip-b"><span class="ibx-flip-ico">${icon('check')}</span><small>Closed in Jwero</small><b>${after}</b></span></span></button>`).join('')}</div><p class="ibx-legend">Each card turns as you scroll. Tap one to turn it back.</p>`;

// Proactive: what lands on your screen today, each line lighting its department.
const DEPTS = [
  ['scale', 'Workshop', 'Gold is watched, not counted later.', ['Variance against wastage norms on every job, by karigar over time', 'Metal reconciliation per karigar and per outside unit', 'Material planning from open orders', 'Production scheduling and karigar allocation suggested by AI', 'Quality checks by sampling, with rework tracked']],
  ['box', 'Inventory', 'Stock that tells you what to do with it.', ['Ageing bands at today’s rate', 'Slow stock marked down and listed on its own', 'Count discrepancies listed after every scan', 'Weight variance checks on transfers and memos', 'Repricing suggestions for slow pieces']],
  ['truck', 'Purchase', 'Buying from data, not memory.', ['Purchase orders drafted by AI; your team reviews and sends', 'Vendors scored on delivery, shortfall and quality', 'Over-receipt and tolerance rules at receiving', 'GSTR-2B gaps listed to chase', 'Landed cost on every purchase']],
  ['coins', 'Finance', 'Money that chases itself.', ['Reminders on dues sent on their own', 'Credit hold when a customer is over limit', 'Stock-to-ledger drift flagged', 'Receivable and payable ageing', 'Period close checklist, metal balances and scheme liability']],
  ['till', 'Counter', 'Control without slowing the sale.', ['Discounts above the limit sent for approval', 'Cash variance at every day close', 'Hallmark gate on HUID: warn or block', 'Returns under each branch’s policy', 'Estimates that become bills at that day’s rate']],
  ['tools', 'Repairs', 'Every piece you hold, accounted for.', ['Turnaround tracked and late jobs predicted', 'Re-hallmark flag blocks delivery', 'Ready and overdue notices to the customer', 'Custody chain from intake to handover', 'Repair QC before delivery']],
];
const ALERTS = [
  ['in', 'Job 2231 · karigar Ramesh 0.4 g over norm', 0],
  ['in', '38 pieces past 180 days · markdown suggested', 1],
  ['out', 'PO drafted: 40 pairs 22K jhumkas · Shree Chains', 2],
  ['in', '₹2.1 lakh overdue · reminders sent', 3],
  ['note', 'Counter 2 day close: ₹500 short', 4],
  ['in', 'Repair 118 late by 2 days · customer told', 5],
  ['out', 'Stock and ledger match · no drift today', 3],
];
const deptCard = ([ic, t, d, items], k) => `<details class="ibx-dnode" data-d="${k}"><summary><span class="ibx-dnode-ico">${icon(ic)}</span><b>${t}</b><small>${d}</small></summary><ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul></details>`;
const erpAlerts = () => `<div class="ibx-biz" data-biz>
  <div class="ibx-biz-side">${DEPTS.slice(0, 3).map((x, k) => deptCard(x, k)).join('')}</div>
  <div class="ibx-biz-thread" aria-hidden="true"><div class="ibx-biz-head">${icon('activity')}<b>Today, on your screen</b></div><ol>${ALERTS.map(([w, t, d]) => `<li class="is-${w}" data-d="${d}">${t}</li>`).join('')}</ol></div>
  <div class="ibx-biz-side">${DEPTS.slice(3).map((x, k) => deptCard(x, k + 3)).join('')}</div>
</div><p class="ibx-legend">Illustrative. Each line lights the department it comes from. Tap a department to see what it watches for you.</p>`;

// Journeys, one at a time, across departments.
const WHO = { c: ['Customer', 'is-c'], a: ['Jwero', 'is-a'], h: ['Your team', 'is-h'] };
const PATHS = [
  ['Old gold to a new bangle in one visit', [
    ['Brings her old chain to the counter', 'c', 'users'],
    ['Weighed, tested and valued at today’s rate on a voucher', 'h', 'scale'],
    ['New bangle scanned; HUID checked', 'a', 'till'],
    ['Voucher applied as credit; balance split across UPI and cash', 'a', 'coins'],
    ['Stock, ledger, GST and her record updated in the same moment', 'a', 'book'],
  ]],
  ['A bullion buy before the rate is fixed', [
    ['Purchase order drafted from fast movers and low stock', 'a', 'sparkle'],
    ['Reviewed and sent to the vendor’s workspace, rate unfixed', 'h', 'send'],
    ['Received by weight and purity; shortfall flagged', 'h', 'truck'],
    ['Rate fixed on the day; bill and metal ledger update', 'a', 'coins'],
    ['Bill matched to order and receipt; GSTR-2B checked', 'a', 'check'],
  ]],
  ['A karigar job that runs over', [
    ['Metal issued by fine weight on a job card, with a due date', 'h', 'scale'],
    ['Each stage weighed as it returns', 'h', 'activity'],
    ['Loss above norm shown on the job', 'a', 'eye'],
    ['Settled against the norm on his khata', 'a', 'book'],
    ['His scorecard updated for the next allocation', 'a', 'users'],
  ]],
  ['A repair she never argues about', [
    ['Ring in for resizing; photos and weight-in recorded', 'h', 'camera'],
    ['Estimate sent; she approves before work starts', 'c', 'chat'],
    ['Assigned with a promised date; every handoff logged', 'a', 'route'],
    ['Weight-out compared; re-hallmark flag checked', 'a', 'scale'],
    ['Ready notice sent; handed over and closed on her record', 'a', 'check'],
  ]],
  ['Slow stock turned back into sales', [
    ['Pieces cross 120 days and show in the ageing band', 'a', 'box'],
    ['Markdown on making suggested; you choose', 'h', 'receipt'],
    ['Offered to customers whose purchases match', 'a', 'megaphone'],
    ['She buys online; the piece leaves every channel at once', 'c', 'store'],
    ['Margin and ageing recalculated', 'a', 'pie'],
  ]],
  ['Month end without the scramble', [
    ['Entries already synced to Tally all month', 'a', 'refresh'],
    ['Stock and ledger drift checked nightly', 'a', 'eye'],
    ['GSTR-1, GSTR-3B and HSN ready for your CA', 'a', 'book'],
    ['P&L, balance sheet and metal balances by branch', 'a', 'pie'],
    ['The period closed against a checklist', 'h', 'check'],
  ]],
];
const erpPaths = () => `<div class="ibx-jr" data-jr>
  <div class="ibx-jr-tabs" role="tablist">${PATHS.map(([t], i) => `<button type="button" role="tab" data-jr-tab="${i}" aria-selected="${i === 0}">${t}</button>`).join('')}</div>
  ${PATHS.map(([t, steps], i) => `<div class="ibx-jr-panel${i === 0 ? ' is-on' : ''}" role="tabpanel" data-jr-panel="${i}"><h3>${t}</h3><ol class="ibx-jr-path">${steps.map(([x, k, ic], j) => `<li class="${WHO[k][1]}" style="--j:${j}"><span class="ibx-jr-node">${icon(ic)}</span><em>${WHO[k][0]}</em><span>${x}</span></li>`).join('')}</ol></div>`).join('')}
  <p class="ibx-legend"><span class="is-c">Customer</span> <span class="is-ai">Jwero</span> does it on its own · <span class="is-human">Your team</span> decides</p>
</div>`;

// What runs on its own, and what waits for a person you choose.
const FORK = [
  ['is-a', 'sparkle', 'Runs on its own', ['Pricing at today’s rate, GST, stock, ledger and Tally on every bill', 'Dues reminders, ageing, drift and lateness checks', 'Purchase orders drafted, karigar jobs settled against norms'], 'check', 'Done before anyone asks'],
  ['is-h', 'users', 'Waits for your approval', ['Discounts above the limit you set', 'Purchase orders before they go to the vendor', 'Selling an unhallmarked piece, if you choose to block it'], 'shield', 'The person you choose, with the full record'],
];
const erpFork = () => `<div class="ibx-fork" data-gfx>
  <div class="ibx-fork-in">${icon('flow')}<b>Something happens</b><small>A sale, a receipt, a job back, a due date</small></div>
  <svg class="ibx-fork-lines" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true"><path class="is-a" d="M200 0 C200 30 100 30 100 60"/><path class="is-h" d="M200 0 C200 30 300 30 300 60"/></svg>
  <div class="ibx-fork-legs">${FORK.map(([c, ic, t, rules, ric, r]) => `<div class="ibx-fork-leg ${c}"><h3>${icon(ic)}${t}</h3><ul>${rules.map((x) => `<li>${x}</li>`).join('')}</ul><p class="ibx-fork-out">${icon(ric)}${r}</p></div>`).join('')}</div>
</div>`;

// Module by module: each anchor is where an old product page now lands.
const MODULES = [
  ['inventory', 'box', 'Inventory', 'Every piece, every gram, at today’s rate.', ['A record per piece: tag, gross, net and fine weight, stones, HUID', 'Barcode labels printed from the record; RFID-ready', 'Valuation at today’s rate by branch, category and purity', 'Ageing bands, slow stock flagged and listed on its own', 'Memos, consignments and trials out and back against each document', 'Transfers that must balance by weight', 'Cycle counts by scanning, discrepancies listed', 'Vaults and locations, down to the showcase'], '/jewellery-stock-management-software'],
  ['manufacturing', 'scale', 'Manufacturing & Workshop', 'Gold in fine grams through every stage.', ['Bills of materials, routings, production and work orders', 'Material planning from open orders', 'Karigar and outside-unit job work on job cards and challans', 'Wastage norms, variance and yield by job and karigar', 'Karigar khata, rate cards, settlements, scorecards and TDS', 'Melting, refining and recovery', 'Quality checks by sampling, and rework', 'Stone lots, grading and certificates'], '/karigar-management-software'],
  ['purchase', 'truck', 'Purchase & Vendors', 'Buy right, receive exactly, pay what is owed.', ['Requisitions, RFQs and purchase orders with approvals and revisions', 'Orders drafted by AI from what sells, what is low and what is ageing', 'Unfixed-rate purchases, fixed later', 'Receiving by weight and purity, with tolerance rules', 'Bills matched to order and receipt; returns and debit notes', 'Vendor price lists, metal accounts and payments', 'GSTR-2B matching and landed cost', 'Orders delivered to the vendor’s own Jwero workspace'], '/jewellery-purchase-management-software'],
  ['finance', 'coins', 'Billing & Finance', 'The books keep up with the business.', ['GST invoices priced at today’s rate: metal, making, stones and GST', 'Double-entry ledger, journals and chart of accounts', 'Tally and Zoho Books kept in step, nothing typed twice', 'GSTR-1, GSTR-3B, HSN and TDS reports', 'P&L, balance sheet, trial balance, day book and cash flow', 'Receivable and payable ageing, reminders on dues', 'Customer advances, credit notes and payment links', 'Metal ledger, metal loans and multi-currency'], '/jewellery-gst-billing-software'],
  ['pos', 'till', 'Counter POS', 'A bill in seconds, with control built in.', ['Scan or search a piece; priced at today’s rate', 'Sell loose metal by weight', 'Old gold exchange on a voucher, buyback too', 'Hallmark gate on HUID that warns or blocks', 'Estimates that become bills in one step', 'Split payments: cash, card, UPI and credit', 'Returns by branch policy; discount approvals', 'Day close with cash variance; keeps billing offline'], '/jewellery-pos-software'],
  ['repairs', 'tools', 'Repairs & After-Sales', 'Every piece you hold, accounted for.', ['Job slip, tag, condition photos and weight-in', 'Estimates she approves before work starts', 'Custody chain: every handoff logged', 'Turnaround tracked; late jobs predicted', 'Weight-out compared; re-hallmark flag', 'Repair QC before delivery', 'Ready and overdue notices to the customer', 'Warranty on the original invoice; appraisals and buyback'], '/jewellery-repair-management-software'],
];
const erpModules = () => `<div class="ibx-ch">${MODULES.map(([id, ic, t, d, pts, more]) => `<article id="${id}"><div class="cap-ico">${icon(ic)}</div><h3>${t}</h3><p>${d}</p><ul>${pts.map((p) => `<li>${p}</li>`).join('')}</ul><a class="erp-more" href="${more}">More on ${t.toLowerCase()} →</a></article>`).join('')}</div>`;

const CMP = [
  ['Counter billing at today’s rate', 'Add-on', 'Yes', 'Yes, with HUID gate and discount approvals'],
  ['Stock by piece, fine weight and HUID', 'No', 'Yes', 'Yes, valued at today’s rate with ageing'],
  ['Karigar job work and wastage', 'No', 'Recorded', 'Settled against your norms, variance by karigar'],
  ['Purchase, receiving and GSTR-2B', 'Basic', 'Yes', 'AI-drafted orders, shortfalls credited, 2B matched'],
  ['Repairs and custody', 'No', 'Some', 'Weight in and out, every handoff logged'],
  ['Leaks caught as they happen', 'At audit', 'In reports you run', 'Flagged on screen: wastage, cash, drift, discounts'],
  ['Customer record, WhatsApp and AI', 'No', 'No', 'Same record as every bill'],
  ['Works on any device, every branch', 'Desktop', 'Desktop or server', 'Online, every branch, billing offline'],
  ['Books', 'Tally', 'Own or Tally', 'Own ledger, kept in step with Tally or Zoho Books'],
];
const cmpTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Tally plus add-ons</th><th>Desktop jewellery ERP</th><th>Jwero</th></tr></thead><tbody>${CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>
<p class="cta-note" style="margin-top:12px">Desktop ERPs vary. See <a href="/compare/jwero-vs-ornate-nx">Jwero vs Ornate NX</a>, <a href="/compare/jwero-vs-jewelacc">JewelAcc</a>, <a href="/compare/jwero-vs-marg">Marg</a>, <a href="/compare/jwero-vs-sioniq">SIONIQ</a> and <a href="/compare/jwero-vs-synergics">Synergics</a>.</p>`;

const MOVE = [
  ['Bring your masters', 'Stock, customers, vendors, karigars and opening balances from your current ERP or Tally.'],
  ['Map your way of working', 'Rates, making and wastage rules, branches, approval limits and who can do what.'],
  ['Run both in parallel', 'Bill and record in Jwero while the old system runs, until daily totals match.'],
  ['Reconcile the cut-over', 'Stock, metal and money balances matched on the switch date, differences listed and cleared.'],
  ['Switch off the old system', 'Your books carry on in Jwero’s ledger or through the Tally bridge.'],
];

const READS = [['/jewellery-pos-software', 'Jewellery POS software'], ['/jewellery-stock-management-software', 'Jewellery stock management'], ['/karigar-management-software', 'Karigar management'], ['/jewellery-purchase-management-software', 'Jewellery purchase management'], ['/jewellery-gst-billing-software', 'Jewellery GST billing'], ['/jewellery-repair-management-software', 'Jewellery repair management'], ['/guides/jewellery-erp-software', 'How to choose a jewellery ERP'], ['/erp-to-os', 'From ERP to OS']];

const faqs = [
  { q: 'What is jewellery ERP software?', a: 'Jewellery ERP software runs the whole jewellery business on one system: counter billing at today’s rate, stock by piece and fine weight, purchase, manufacturing and karigar job work, repairs, accounts and GST, on the same records across every branch.' },
  { q: 'Does Jwero do everything my current ERP does?', a: 'Yes for the jewellery basics: tags, weights, HUID, billing, old gold, purchase, job work, khata, GST and ledgers. Jwero then adds what most ERPs leave to people: wastage settled against norms, discount approvals, cash variance, stock-to-ledger drift checks, GSTR-2B matching, AI-drafted orders and a customer record behind every bill.' },
  { q: 'What leaks does a jewellery ERP usually miss?', a: 'Metal lost at the karigar above norm, unapproved discounts, cash short at day close, short deliveries paid in full, missed input credit, repair weight disputes and slow stock valued at old cost. Jwero flags each as it happens.' },
  { q: 'How does Jwero control gold loss in manufacturing?', a: 'Gold is tracked in fine grams through every stage, and every job settles against your wastage norms. Variance shows by job and by karigar over time, and the metal ledger reconciles per karigar.' },
  { q: 'What does AI do in the ERP?', a: 'It drafts purchase orders from what is selling, low and ageing, suggests repricing for slow stock, flags material anomalies, suggests karigar allocation and production schedules, scores vendors and predicts late jobs. Pricing, reminders and checks run on their own; you choose what waits for approval.' },
  { q: 'Can a jewellery ERP replace Tally?', a: 'Jwero keeps its own double-entry ledger with GST, P&L and balance sheet, so many shops run their books in Jwero. Others keep Tally or Zoho Books for their CA, and Jwero keeps it in step so nothing is typed twice.' },
  { q: 'Does the counter work without internet?', a: 'Yes. The till keeps billing through a dropout, and each sale syncs once the connection returns, without duplicates.' },
  { q: 'Does it check HUID before a sale?', a: 'Yes. The counter checks each piece’s HUID and can warn or block an unhallmarked sale, your choice. Duplicate HUIDs are refused at stock entry.' },
  { q: 'Can I buy gold before the rate is fixed?', a: 'Yes. Record an unfixed-rate purchase by weight and purity and fix the rate later. The bill and the metal ledger update when it is fixed.' },
  { q: 'How are repairs tracked?', a: 'A job slip with photos and weight-in, an estimate she approves, every handoff logged, weight-out compared, a re-hallmark flag where needed, and ready notices to the customer.' },
  { q: 'Does it work for many branches?', a: 'Yes. Stock, transfers, branch policies and reports by branch, with consolidation for the group and franchise screens.' },
  { q: 'Does it use RFID?', a: 'Jwero is RFID-ready: RFID scans move tags the same way barcode scans do. Barcode labels are printed from each piece’s record.' },
  { q: 'How do I switch ERP mid-year?', a: 'Import your masters and opening balances, run Jwero alongside the old system until totals match, reconcile stock, metal and money on the switch date, then switch off the old system. We do it with you.' },
  { q: 'What happened to the separate Inventory, POS, Manufacturing, Purchase, Billing and Repairs pages?', a: 'They are now one page, because they are one system. Each has its own section here and a short guide for its search.' },
];

const HERO_CHIPS = MODS.map(([, ic, t]) => [ic, t]);
const HERO_ROWS = [
  ['Counter', 'Necklace scanned · HUID checked', 4, 'Priced at today’s rate in a second', 'a'],
  ['Workshop', 'Job 2231 back from karigar Ramesh', 1, '0.4 g over norm, flagged on his khata', 'h'],
  ['Purchase', 'Jhumkas selling fast, stock low', 2, 'PO drafted by AI, waiting for review', 'h'],
  ['Inventory', '38 pieces past 180 days', 0, 'Markdown suggested, offered to matching customers', 'a'],
  ['Finance', '₹2.1 lakh overdue', 3, 'Reminders sent, ledger and Tally in step', 'a'],
  ['Repairs', 'Ring 118 weighed out', 5, 'Matches weight-in, ready notice sent', 'a'],
];

const erp = {
  slug: 'products/erp',
  title: 'Jewellery ERP Software that Stops Leaks: POS, Stock, Karigar & GST | Jwero',
  description: 'Jewellery ERP: counter, stock, karigar job work, purchase, GST books and repairs on one record. It catches wastage, cash and stock leaks as they happen, with AI.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery ERP', alternateName: ['ERP for jewellers', 'Jewellery POS software', 'Jewellery inventory software', 'Jewellery manufacturing software', 'Jewellery billing and GST software', 'Jewellery repair software', 'Jewellery purchase management software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A jewellery ERP covering counter POS with HUID checks and old gold exchange, piece-level inventory in fine weight with ageing at today’s rate, manufacturing and karigar job work settled against wastage norms, purchase with AI-drafted orders and unfixed-rate gold, GST billing with a double-entry ledger kept in step with Tally, and repairs with a custody chain, plus leakage controls and AI agents.',
    audience: { '@type': 'BusinessAudience', audienceType: 'Jewellery retailers, chains, wholesalers and manufacturers' },
    featureList: 'Counter POS, HUID gate, old gold exchange, offline billing, piece-level inventory, fine weight, ageing at today’s rate, cycle counts, memos and consignment, BOM, material planning, karigar job work, wastage norms, metal ledger, melting and refining, AI-drafted purchase orders, unfixed-rate purchases, GSTR-2B matching, GST invoices, double-entry ledger, Tally and Zoho Books sync, P&L and balance sheet, repair custody chain, discount approvals, cash variance, stock-to-ledger drift alerts',
    dateModified: '2026-10-10',
    url: 'https://jwero.ai/products/erp', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to switch your jewellery ERP mid-year', step: MOVE.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Jewellery ERP'),
  faqs,
  body: `
${L.hero({
  eyebrow: 'Everything your ERP does, without the leaks',
  h1: 'Your ERP records the business. <span class="h1-turn">Jwero runs it.</span>',
  sub: 'Counter, stock, workshop, buying, books and repairs on one record, built for weight, purity and HUID. It catches the gram lost at the karigar, the discount nobody approved and the piece sitting for 180 days, and AI acts on it the same day.',
  primary: { href: '#', label: 'Show me where my ERP leaks', wa: 'erp' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">What is Jwero’s jewellery ERP?</h2><p>Jwero’s jewellery ERP runs the counter, inventory, manufacturing and karigar job work, purchase, billing and accounts, and repairs on one record, in fine weight with HUID, across every branch. It does what a jewellery ERP is expected to do, and closes the gaps most leave open: wastage settled against your norms, discount approvals, cash variance, stock-to-ledger drift checks and AI that drafts orders and flags problems before they cost you.</p></div></section>

${L.section(`${L.sectionHead('NOTHING YOU LOSE', 'Does Jwero do everything my current ERP does?', 'Yes. Open each department: what your ERP already has on the left, what Jwero adds on the right.')}${parity()}`, { id: 'parity' })}

${L.section(`${L.sectionHead('LEAKS, HIDDEN LOSS, BOTTLENECKS', 'Where does a jewellery ERP lose you money?', 'Twelve places most ERPs record after the fact. Jwero closes them as they happen.')}${leakCards()}`, { tone: 'tint', id: 'leaks' })}

${L.section(`${L.sectionHead('ONE ORDER, EVERY DEPARTMENT', 'A bridal order from booking to the books, on one record.', '')}${erpRun()}`, { id: 'one-order' })}

${L.section(`${L.sectionHead('DECIDE BEFORE IT COSTS YOU', 'What does the ERP put in front of you today?', 'Problems arrive as they happen, not at audit. Each department watches its own leaks and AI suggests the next step.')}${erpAlerts()}`, { tone: 'tint', id: 'proactive' })}

${L.section(`${L.sectionHead('INSTANT, END TO END', 'Serve customers instantly. Execute operations instantly.', 'Six real paths across departments, showing what Jwero does on its own and where your team decides.')}${erpPaths()}`, { id: 'journeys' })}

${L.section(`${L.sectionHead('AUTOMATIC, OR APPROVED', 'What runs on its own, and what waits for you?', 'Routine work runs by itself. The decisions you want to keep wait for the person you choose.')}${erpFork()}`, { tone: 'tint', id: 'control' })}

${L.sim('till')}

${L.section(`${L.sectionHead('MODULE BY MODULE', 'Everything inside the ERP.', 'Six departments, one record. Each used to be its own page, and its own login.')}${erpModules()}`, { id: 'modules' })}

${L.sim('shelf')}

${L.section(`${L.sectionHead('COMPARE', 'Tally plus add-ons, a desktop jewellery ERP, or Jwero.', '')}${cmpTable()}`, { tone: 'tint', id: 'compare' })}

${L.section(`${L.sectionHead('SWITCHING ERP MID-YEAR', 'How to switch your jewellery ERP mid-year.', 'Five steps, done with you. No big-bang cut-over.')}${L.steps(MOVE.map(([title, text]) => ({ title, text })))}`)}

${L.section(`${L.sectionHead('READ MORE', 'Guides by department.', '')}<div class="erp-map">${READS.map(([h, t]) => `<a href="${h}"><b>${t}</b><span>${h.replace(/^\//, 'jwero.ai/')}</span></a>`).join('')}</div>`, { tone: 'tint' })}

${L.oneSystemBlock([
  'A karigar’s wastage, the metal ledger and the finished piece’s cost are the same numbers, not three reports to reconcile.',
  'A sale at any branch updates stock, the ledger, GST and the customer’s record at once.',
  'The customer who bought, the repair she left and the old gold she exchanged are one record.',
])}

${L.section(`<p class="cta-note" style="text-align:center">Last updated 10 October 2026.</p>`)}

${L.ctaBand('Find where your ERP leaks.', 'Bring one month of your numbers. We will show the wastage, cash and stock gaps Jwero would have caught.', 'erp')}
`,
};

module.exports = [erp];
module.exports.heroPiece = () => L.recordFeed({ title: 'Jewellery ERP', chips: HERO_CHIPS, rows: HERO_ROWS, iconOnly: true, foot: 'Illustrative. One record across every department.' });
