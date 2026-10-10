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
const parity = () => `<div class="erp-par">${PARITY.map(([id, ic, t, has, adds], k) => `<details class="erp-par-row" name="erp-par" data-m="${id}"${k === 0 ? ' open' : ''}><summary><span class="erp-par-ico">${icon(ic)}</span><b>${t}</b><span class="erp-par-meter" aria-hidden="true"><i class="is-has" style="--w:${has.length}"></i><i class="is-add" style="--w:${adds.length}"></i></span><small>${has.length} you have · <em>+${adds.length} you don’t</em></small></summary><div class="erp-par-cols"><div><p class="erp-par-k">Your ERP has</p><ul class="is-has">${has.map((x) => `<li>${icon('check')}${x}</li>`).join('')}</ul></div><div><p class="erp-par-k is-add">Jwero adds</p><ul class="is-add">${adds.map((x) => `<li>${icon('sparkle')}${x}</li>`).join('')}</ul></div></div></details>`).join('')}</div>`;

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
const LEAK_FOR = ['maker', 'single chain repair', 'single chain', 'chain b2b single', 'b2b maker', 'b2b', 'repair single', 'chain b2b', 'single repair', 'b2b chain maker', 'maker repair', 'b2b chain'];
const leakCards = () => `<div class="ibx-flips erp-leaks" data-flips>${LEAKS.map(([k, ic, before, after], i) => `<button type="button" class="ibx-flip" data-for="${LEAK_FOR[i]}" style="--i:${i}" aria-pressed="false"><span class="ibx-flip-in"><span class="ibx-flip-f"><span class="ibx-flip-ico">${icon(ic)}</span><small class="erp-leak-k">${k} in your ERP</small><b>${before}</b></span><span class="ibx-flip-b"><span class="ibx-flip-ico">${icon('check')}</span><small>Closed in Jwero</small><b>${after}</b></span></span></button>`).join('')}</div><p class="ibx-legend">Each card turns as you scroll. Tap one to turn it back.</p>`;

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

// 1. "I run a…" on this page: reorders departments, leaks and journeys for the reader.
const ICP = [
  ['single', 'store', 'A single store', 'Start at the counter. Your leaks are discounts, cash at close and rates typed by hand.', 'till', 'Try the till', '#day'],
  ['chain', 'branches', 'A chain or franchise', 'Start with stock across branches. Your leaks are transfers, branch cash and books drifting from stock.', 'shelf', 'Try the shelf', '#branches'],
  ['maker', 'scale', 'A workshop or factory', 'Start in the workshop. Your leaks are grams lost above norm, late jobs and unrecorded scrap.', 'grams', 'Try metal closure', '#metal'],
  ['b2b', 'truck', 'Wholesale or bullion', 'Start with buying. Your leaks are short deliveries, missed input credit and rates fixed in a notebook.', 'shelf', 'Try the shelf', '#ledger'],
  ['repair', 'tools', 'A repair-heavy store', 'Start with repairs. Your leaks are weight disputes, forgotten re-hallmarking and late jobs.', 'till', 'Try the till', '#modules'],
];
const ICP_ORDER = { single: 'pos finance inventory repairs purchase manufacturing', chain: 'inventory pos finance purchase repairs manufacturing', maker: 'manufacturing purchase inventory finance pos repairs', b2b: 'purchase inventory finance manufacturing pos repairs', repair: 'repairs pos inventory finance purchase manufacturing' };
const ICP_JOURNEY = { single: 0, chain: 4, maker: 2, b2b: 1, repair: 3 };
const ICP_DEEP = { single: 'A day at your counter', chain: 'Every branch on one map', maker: 'Your gold, stage by stage', b2b: 'Rupees and grams, side by side', repair: 'Repairs, module by module' };

// 8. Proof per business type. Real testimonials from content/positioning.js, word
// for word, paired the same way the solution pages pair them (SOL_QUOTE in build.js):
// single store and manufacturers 0, chains and franchises 4, wholesale and bullion 1.
// No published quote fits repairs yet, so that card stays hidden. Add a real result
// as [metric, before, after] when a customer confirms one; until then none is shown.
const Q = require('./positioning').QUOTES;
const PROOF = { single: { q: 0 }, chain: { q: 4 }, maker: { q: 0 }, b2b: { q: 1 }, repair: null };
const proofCard = (k) => {
  const e = PROOF[k]; if (!e || !Q[e.q]) return '';
  const [quote, who, where] = Q[e.q];
  const m = e.metric ? `<p class="erp-proof-m"><span>${e.metric[0]}</span><s>${e.metric[1]}</s>${icon('arrow')}<b>${e.metric[2]}</b></p>` : '';
  return `<figure class="erp-proof"><blockquote>“${quote}”</blockquote><figcaption>${who}, ${where}</figcaption>${m}</figure>`;
};
const DOOR = {
  single: ['trial', 'Start free for your store'],
  chain: ['demo', 'Book a 30-minute demo for a chain'],
  maker: ['demo', 'Book a 30-minute demo for a workshop'],
  b2b: ['trial', 'Start free for your trade business'],
  repair: ['trial', 'Start free for your store'],
};
const doorLink = (k, cls) => DOOR[k][0] === 'demo'
  ? `<a class="${cls}" href="/book-demo" data-erp-cta="door-${k}">${DOOR[k][1]}</a>`
  : `<a class="${cls}" href="https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=erp-${k}" rel="noopener" data-trial data-erp-cta="door-${k}">${DOOR[k][1]}</a>`;
const progBar = () => `<nav class="erp-prog" data-erp-prog aria-label="On this page"><div class="erp-prog-in">
  <ol>${[['leaks', 'Your leaks'], ['day', 'Your day'], ['journeys', 'Your journey'], ['try', 'Try it'], ['switch', 'Switch']].map(([id, t], i) => `<li><a href="#${id}" data-p="${id}"><b>${i + 1}</b>${t}</a></li>`).join('')}</ol>
  <span class="erp-prog-doors">${Object.keys(DOOR).map((k) => doorLink(k, 'btn btn-primary erp-prog-cta')).join('')}</span>
</div><i class="erp-prog-fill" aria-hidden="true"></i></nav>`;
const icpSwitch = () => `<div class="erp-icp" data-erp-icp data-order='${JSON.stringify(ICP_ORDER)}' data-journey='${JSON.stringify(ICP_JOURNEY)}'>
  <div class="erp-icp-opts" role="tablist" aria-label="I run a…">${ICP.map(([k, ic, t], i) => `<button type="button" role="tab" data-k="${k}" aria-selected="${i === 0}">${icon(ic === 'branches' ? 'branches' : ic)}<span>${t}</span></button>`).join('')}</div>
  ${ICP.map(([k, , t, line, sim, simLabel, deep], i) => `<div class="erp-icp-panel${i === 0 ? ' is-on' : ''}" data-panel="${k}"><p>${line}</p>${proofCard(k)}<div class="erp-icp-go"><a href="#parity">Your departments first ↓</a><a href="#leaks">Your leaks first ↓</a><a href="#journeys">Your journey ↓</a><a href="${deep}">${ICP_DEEP[k]} ↓</a><a class="is-sim" href="#try-${sim}">${simLabel} →</a></div><p class="erp-icp-door">${doorLink(k, 'btn btn-primary')}</p></div>`).join('')}
  <p class="ibx-legend">The page reorders itself for you. Nothing is hidden; every section stays below.</p>
</div>`;

// 2. The hero leak meter: the reader's own inputs, the assumptions in the open.
const leakMeter = () => `<div class="erp-meter" data-leakm>
  <p class="erp-meter-t">${icon('activity')}<b>What could your ERP be missing?</b></p>
  <label><span>Sales a month <b data-o="sales"></b></span><input type="range" data-i="sales" min="5" max="1000" step="5" value="60"></label>
  <label><span>Gold issued to karigars a month <b data-o="gold"></b></span><input type="range" data-i="gold" min="0" max="20000" step="100" value="1500"></label>
  <label><span>Pieces in stock <b data-o="pieces"></b></span><input type="range" data-i="pieces" min="100" max="20000" step="100" value="3000"></label>
  <div class="erp-meter-bars">
    <a href="#leaks" data-b="disc"><span>Discounts nobody approved</span><i><em></em></i><b></b></a>
    <a href="#leaks" data-b="karigar"><span>Gold lost above norm</span><i><em></em></i><b></b></a>
    <a href="#leaks" data-b="slow"><span>Cost of slow stock</span><i><em></em></i><b></b></a>
  </div>
  <p class="erp-meter-total"><span>A month, roughly</span><b data-o="total"></b></p>
  <a class="btn btn-primary erp-meter-cta" href="#" data-wa="erp" data-wa-extra="" data-erp-cta="meter">Show me how Jwero closes these</a>
  <details class="erp-meter-as"><summary>The assumptions, change them</summary>
    <label>Unapproved discount, % of sales<input type="number" data-a="disc" value="0.5" step="0.1" min="0"></label>
    <label>Loss above norm, % of gold issued<input type="number" data-a="loss" value="0.3" step="0.1" min="0"></label>
    <label>24K rate, ₹ a gram<input type="number" data-a="rate" value="7200" step="100" min="0"></label>
    <label>Pieces past 180 days, %<input type="number" data-a="slowp" value="15" step="1" min="0"></label>
    <label>Average piece value, ₹<input type="number" data-a="avg" value="50000" step="1000" min="0"></label>
    <label>Cost of money, % a month<input type="number" data-a="carry" value="1" step="0.1" min="0"></label>
  </details>
  <p class="erp-meter-note">A planning estimate from your inputs and these assumptions, not a measurement.</p>
</div>`;

// 3. A day in the business: what ran on its own, what waited for a person.
const DAY = {
  store: [
    [10, 'a', 'Today’s rate set; every tag repriced'],
    [11.5, 'a', 'Necklace billed: rate, making, GST, HUID'],
    [13, 'h', 'Discount above limit: approve?'],
    [14.5, 'a', 'Old gold voucher applied'],
    [16, 'a', 'Dues reminders sent'],
    [17.5, 'a', 'Repair 118 ready notice sent'],
    [19, 'h', 'PO drafted by AI: review'],
    [20.5, 'a', 'Day close: cash matches'],
  ],
  chain: [
    ['HO', 10, 'a', 'Rate set for every branch'],
    ['Andheri', 11, 'a', 'Transfer received: 62.40 g balances'],
    ['Pune', 12.5, 'h', 'Discount above limit: approve?'],
    ['HO', 14, 'a', 'Stock and ledger: no drift'],
    ['Surat', 15.5, 'a', '38 pieces past 180 days flagged'],
    ['Andheri', 17, 'h', 'Return outside policy: approve?'],
    ['Pune', 19, 'a', 'Dues reminders sent'],
    ['Surat', 20.5, 'h', 'Day close ₹500 short: review'],
  ],
};
const dayX = (h) => ((h - 10) / 11 * 100).toFixed(2);
const dayLine = () => `<div class="erp-day" data-day>
  <div class="erp-day-tabs" role="tablist"><button type="button" role="tab" data-v="store" aria-selected="true">One store</button><button type="button" role="tab" data-v="chain" aria-selected="false">Every branch</button></div>
  <div class="erp-day-view is-on" data-view="store"><div class="erp-day-lane"><span class="erp-day-name">Your store</span><div class="erp-day-track">${DAY.store.map(([h, w, t], i) => `<span class="erp-day-ev is-${w}" style="--x:${dayX(h)}%;--t:${(dayX(h) / 100 * 6).toFixed(2)}s;--i:${i}" title="${t}"><i></i><b>${t}</b></span>`).join('')}</div></div></div>
  <div class="erp-day-view" data-view="chain">${['HO', 'Andheri', 'Pune', 'Surat'].map((br) => `<div class="erp-day-lane"><span class="erp-day-name">${br === 'HO' ? 'Head office' : br}</span><div class="erp-day-track">${DAY.chain.filter((e) => e[0] === br).map(([, h, w, t], i) => `<span class="erp-day-ev is-${w}" style="--x:${dayX(h)}%;--t:${(dayX(h) / 100 * 6).toFixed(2)}s;--i:${i}" title="${t}"><i></i><b>${t}</b></span>`).join('')}</div></div>`).join('')}</div>
  <div class="erp-day-axis" aria-hidden="true">${['10 am', '12', '2 pm', '4', '6', '8', '9 pm'].map((t, i, a) => `<span style="--x:${(i / (a.length - 1) * 100).toFixed(1)}%">${t}</span>`).join('')}</div>
  <i class="erp-day-now" aria-hidden="true"></i>
  <p class="ibx-legend"><span class="is-ai">Ran on its own</span> <span class="is-human">Waited for you</span> Illustrative day.</p>
</div>`;

// 4. Gold through the workshop: grams at each stage, the one over norm in amber.
const METAL = [['Issued', 62.40, null], ['Casting', 61.92, 0.8], ['Filing', 61.55, 0.6], ['Setting', 61.02, 0.5], ['Polishing', 60.78, 0.4], ['Finished', 60.78, null]];
const metalFlow = () => {
  const cells = METAL.map(([n, g, norm], i) => {
    const prev = i ? METAL[i - 1][1] : g, lost = +(prev - g).toFixed(2), pct = prev ? lost / prev * 100 : 0;
    const over = norm != null && pct > norm;
    return `<li class="${over ? 'is-over' : ''}" style="--i:${i};--f:${(g / METAL[0][1] * 100).toFixed(1)}%"><b>${n}</b><span class="erp-metal-g">${g.toFixed(2)} g</span><span class="erp-metal-bar"><i></i></span><small>${i === 0 ? 'issued in fine weight' : norm == null ? 'tagged, into stock' : `−${lost.toFixed(2)} g · ${pct.toFixed(2)}% · norm ${norm}%`}</small>${over ? `<em>${icon('eye')}Over norm · posted to karigar Ramesh’s khata</em>` : ''}</li>`;
  }).join('');
  return `<div class="erp-metal" data-gfx><ol>${cells}</ol><p class="ibx-legend">Illustrative job 2231, 22K bangles. Each stage weighed in fine grams; the stage above its norm turns amber.</p></div>`;
};

// 5. Every branch on one map: value, ageing, cash; a transfer that must balance.
const BRANCHES = [['Head office', 'Mumbai', '₹4.8 cr', '9%', 'Matches', 50, 18], ['Andheri', 'Mumbai', '₹1.9 cr', '14%', 'Matches', 18, 62], ['Pune', 'Pune', '₹1.2 cr', '21%', '₹200 short', 50, 86], ['Surat', 'Surat', '₹2.3 cr', '26%', 'Matches', 82, 62]];
const branchMap = () => `<div class="erp-br" data-brmap>
  <svg class="erp-br-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">${BRANCHES.slice(1).map(([, , , , , x, y]) => `<line x1="50" y1="18" x2="${x}" y2="${y}"/>`).join('')}<line x1="18" y1="62" x2="82" y2="62" class="is-tr"/></svg>
  <span class="erp-br-dot" aria-hidden="true"></span>
  ${BRANCHES.map(([n, c, v, age, cash, x, y]) => `<div class="erp-br-node${parseInt(age, 10) > 20 ? ' is-age' : ''}${/short/.test(cash) ? ' is-cash' : ''}" style="--x:${x}%;--y:${y}%"><b>${n}</b><span>Stock ${v}</span><span>Past 180 days ${age}</span><span>Cash at close: ${cash}</span></div>`).join('')}
  <p class="erp-br-tr" aria-live="polite">${icon('truck')}<span>Andheri to Surat · 62.40 g out · <b>62.40 g in</b> · transfer closes</span></p>
</div><p class="ibx-legend">Illustrative. A transfer closes only when the weight out equals the weight in. Amber shows ageing above 20% or cash short at close.</p>`;

// 6. Rupees and fine grams, side by side, for a purchase before the rate is fixed.
const LEDGER = [
  ['Order', 'Unfixed-rate purchase from Shree Bullion', 'Rate not fixed yet', '+ 500.000 g owed'],
  ['Received', '498.600 g received, purity 995 tested', 'Nothing to pay yet', '− 1.400 g short, flagged'],
  ['Debit note', 'Shortfall credited by the vendor', 'Nothing to pay yet', 'Balance 498.600 g'],
  ['Rate fixed', 'Rate fixed with the dealer on the day', '₹35,89,920 payable', '498.600 g settled'],
  ['Bill matched', 'Order, receipt and bill agree; GSTR-2B checked', 'Input credit confirmed', 'Metal ledger closes at 0'],
];
const buyLedger = () => `<div class="erp-led" data-led>
  <div class="erp-led-head"><span>Step</span><span>What happened</span><span>${icon('coins')}Rupees</span><span>${icon('scale')}Fine grams</span></div>
  <ol>${LEDGER.map(([s, d, r, g], i) => `<li data-k="${i}"><b>${s}</b><span>${d}</span><span class="erp-led-r">${r}</span><span class="erp-led-g">${g}</span></li>`).join('')}</ol>
  <p class="ibx-legend">Illustrative. Rupees for the books, fine grams for the metal ledger, updated by the same entries.</p>
</div>`;

// 7. Switching from the ERP you run today.
const FROM = [
  ['tally', 'Tally', '/blog/jewellery-software-and-tally', 'Keep Tally for your CA if you like: Jwero keeps it in step, so the books never have to move.'],
  ['ornate', 'Ornate NX', '/compare/jwero-vs-ornate-nx', ''],
  ['jewelacc', 'JewelAcc', '/compare/jwero-vs-jewelacc', ''],
  ['marg', 'Marg', '/compare/jwero-vs-marg', ''],
  ['sioniq', 'SIONIQ', '/compare/jwero-vs-sioniq', ''],
  ['synergics', 'Synergics', '/compare/jwero-vs-synergics', ''],
];
const fromSteps = (n) => [
  ['Bring your masters', `Stock, customers, vendors, karigars and opening balances, exported from ${n} with us.`],
  ['Map your way of working', `Rates, making and wastage rules, branches and approval limits, set the way you run them in ${n} today.`],
  ['Run both in parallel', `Bill in Jwero while ${n} keeps running, until the daily totals match.`],
  ['Reconcile the cut-over', 'Stock, metal and money balances matched on the switch date; differences listed and cleared.'],
  [n === 'Tally' ? 'Keep Tally, or not' : `Switch off ${n}`, n === 'Tally' ? 'Your CA keeps working in Tally, kept in step, or the books move to Jwero’s ledger.' : 'Your books carry on in Jwero’s ledger, or in Tally kept in step.'],
];
const switchFrom = () => `<div class="ibx-jr erp-from" data-jr data-jr-still>
  <div class="ibx-jr-tabs" role="tablist">${FROM.map(([, n], i) => `<button type="button" role="tab" data-jr-tab="${i}" aria-selected="${i === 0}">From ${n}</button>`).join('')}</div>
  ${FROM.map(([, n, href, note], i) => `<div class="ibx-jr-panel${i === 0 ? ' is-on' : ''}" role="tabpanel" data-jr-panel="${i}"><h3>Moving from ${n} to Jwero</h3><ol class="ibx-jr-path">${fromSteps(n).map(([t, d], j) => `<li class="${j === 2 ? 'is-h' : 'is-a'}" style="--j:${j}"><span class="ibx-jr-node"><b>${j + 1}</b></span><em>${t}</em><span>${d}</span></li>`).join('')}</ol>${note ? `<p class="erp-from-note">${note}</p>` : ''}<p class="erp-from-more"><a href="${href}">${n === 'Tally' ? 'Jwero and Tally, explained' : `Jwero vs ${n}`} →</a></p></div>`).join('')}
</div>`;

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

${progBar()}

${L.section(`${L.sectionHead('BUILT AROUND HOW YOU RUN', 'I run a…', 'Pick your business. The page puts your departments, your leaks and your journey first.')}${icpSwitch()}`, { tone: 'tint', id: 'for-you' })}

${L.section(`${L.sectionHead('NOTHING YOU LOSE', 'Does Jwero do everything my current ERP does?', 'Yes. Open each department: what your ERP already has on the left, what Jwero adds on the right.')}${parity()}`, { id: 'parity' })}

${L.section(`${L.sectionHead('LEAKS, HIDDEN LOSS, BOTTLENECKS', 'Where does a jewellery ERP lose you money?', 'Twelve places most ERPs record after the fact. Jwero closes them as they happen.')}${leakCards()}`, { tone: 'tint', id: 'leaks' })}

${L.section(`${L.sectionHead('A DAY IN THE BUSINESS', 'What did Jwero do today, and what waited for you?', 'Green ran on its own. Amber waited for a person you chose. Switch to every branch to see a chain’s day.')}${dayLine()}`, { id: 'day' })}

${L.section(`${L.sectionHead('ONE ORDER, EVERY DEPARTMENT', 'A bridal order from booking to the books, on one record.', '')}${erpRun()}`, { id: 'one-order' })}

${L.section(`${L.sectionHead('DECIDE BEFORE IT COSTS YOU', 'What does the ERP put in front of you today?', 'Problems arrive as they happen, not at audit. Each department watches its own leaks and AI suggests the next step.')}${erpAlerts()}`, { tone: 'tint', id: 'proactive' })}

${L.section(`${L.sectionHead('FOR WORKSHOPS AND FACTORIES', 'Where does the gold go in the workshop?', 'Weighed at every stage in fine grams. The stage over its norm shows itself, and lands on the karigar’s khata.')}${metalFlow()}`, { id: 'metal' })}

${L.section(`${L.sectionHead('FOR CHAINS AND FRANCHISES', 'How do you see every branch at once?', 'Stock value, ageing and cash at close for each branch, and transfers that cannot lose a gram.')}${branchMap()}`, { tone: 'tint', id: 'branches' })}

${L.section(`${L.sectionHead('FOR WHOLESALE AND BULLION', 'Do the rupees and the grams agree?', 'Every purchase updates both ledgers from the same entries, so the metal account closes at zero.')}${buyLedger()}`, { id: 'ledger' })}

${L.section(`${L.sectionHead('INSTANT, END TO END', 'Serve customers instantly. Execute operations instantly.', 'Six real paths across departments, showing what Jwero does on its own and where your team decides.')}${erpPaths()}`, { id: 'journeys' })}

${L.section(`${L.sectionHead('AUTOMATIC, OR APPROVED', 'What runs on its own, and what waits for you?', 'Routine work runs by itself. The decisions you want to keep wait for the person you choose.')}${erpFork()}`, { tone: 'tint', id: 'control' })}

${L.sim('till')}

${L.section(`${L.sectionHead('MODULE BY MODULE', 'Everything inside the ERP.', 'Six departments, one record. Each used to be its own page, and its own login.')}${erpModules()}`, { id: 'modules' })}

${L.sim('shelf')}

${L.section(`${L.sectionHead('COMPARE', 'Tally plus add-ons, a desktop jewellery ERP, or Jwero.', '')}${cmpTable()}`, { tone: 'tint', id: 'compare' })}

${L.section(`${L.sectionHead('SWITCHING ERP MID-YEAR', 'How do I switch my jewellery ERP mid-year?', 'Pick the system you run today. Five steps, done with you, with no big-bang cut-over.')}${switchFrom()}`, { id: 'switch' })}

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
module.exports.heroPiece = () => leakMeter();
