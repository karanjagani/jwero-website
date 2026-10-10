// Extension pages for the single ERP page (2026-10-10). Not in the menu. Each
// targets one search phrase, covers one department, and hands the reader to its
// section of /products/erp. Facts as in content/erp.js (checked against pim-app).
// Existing guides keep the broader searches: /guides/jewellery-erp-software,
// /guides/jewellery-inventory-software, /guides/jewellery-billing-software,
// /guides/jewellery-manufacturing-software, /jewellery-accounting-software.
const L = require('../lib');
const UPDATED = '10 October 2026';

function landing(p) {
  return {
    slug: p.slug,
    title: p.title,
    description: p.description,
    breadcrumbs: [['Home', '/'], ['Jewellery ERP', '/products/erp'], [p.crumb]],
    schema: {
      '@context': 'https://schema.org', '@type': 'SoftwareApplication',
      name: p.schemaName, applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
      description: p.description, url: `https://jwero.ai/${p.slug}`,
      audience: { '@type': 'BusinessAudience', audienceType: 'Jewellery retailers, chains, wholesalers and manufacturers' },
      featureList: p.points.map(([t]) => t).join(', '),
      dateModified: '2026-10-10',
      isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero Jewellery ERP', url: 'https://jwero.ai/products/erp' },
    },
    extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: p.howName, step: p.steps.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
    faqs: p.faqs,
    body: `
${L.hero({
  eyebrow: p.eyebrow,
  h1: p.h1,
  sub: p.sub,
  primary: { href: '#', label: p.cta, wa: 'erp' },
  secondary: { href: `/products/erp#${p.anchor}`, label: 'See it in the ERP' },
})}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">${p.shortQ}</h2><p>${p.shortA}</p></div></section>

${L.section(`${L.sectionHead('WHERE IT LEAKS TODAY', p.leakHead, '')}<div class="erp-leak-list">${p.leaks.map(([a, b]) => `<p><span>${a}</span><b>${b}</b></p>`).join('')}</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('WHAT YOU GET', p.pointsHead, '')}${L.cards(p.points.map(([title, text, icon]) => ({ icon, title, text })), 3)}`)}

${L.section(`${L.sectionHead('GETTING STARTED', p.howName + '.', 'Five steps.')}${L.steps(p.steps.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.section(`<div class="gem-head"><h2>Part of one jewellery ERP.</h2><p>${p.partOf} <a href="/products/erp#${p.anchor}">See ${p.crumb.toLowerCase()} in the ERP →</a></p></div>`)}

${L.section(`<p class="cta-note" style="text-align:center">Last updated ${UPDATED}.</p>`)}

${L.ctaBand(p.bandTitle, p.bandText, 'erp')}
`,
  };
}

const pos = landing({
  slug: 'jewellery-pos-software', crumb: 'Jewellery POS', anchor: 'pos',
  title: 'Jewellery POS Software: Live Rate Billing, HUID, Old Gold | Jwero',
  description: 'Jewellery POS software: scan a tag and bill at today’s gold rate with making, stones and GST, check HUID, take old gold on a voucher, split payments and close the day with cash variance.',
  schemaName: 'Jwero jewellery POS',
  eyebrow: 'JEWELLERY POS SOFTWARE',
  h1: 'A jewellery bill in seconds, with the leaks closed at the counter.',
  sub: 'Scan the tag and the bill prices itself at today’s rate. HUID is checked, old gold goes on a voucher, discounts above your limit wait for approval, and the day closes against the cash you should have.',
  cta: 'Show me the counter',
  shortQ: 'What is jewellery POS software?',
  shortA: 'Jewellery POS software runs the counter: it prices each piece by net weight and purity at today’s gold rate, adds making, stones and GST, takes old gold in exchange, checks HUID, splits payments and closes the cash at day end. Jwero’s POS does this on the same record as stock, books and the customer.',
  leakHead: 'What a counter loses without noticing.',
  leaks: [['Rate typed by hand', 'Scanned and priced at today’s rate'], ['Discounts nobody approved', 'Above your limit, sent for approval'], ['Unhallmarked piece sold', 'Hallmark gate on HUID warns or blocks'], ['Cash short at close', 'Declared against expected, per register'], ['Internet drops, sales stop', 'Keeps billing, syncs without duplicates']],
  pointsHead: 'Everything the counter needs.',
  points: [
    ['Priced at today’s rate', 'Metal by net weight and purity, making, stones and GST on every bill.', 'coins'],
    ['Scan or search', 'Tag scan, or search by name; loose metal sold by weight.', 'till'],
    ['Old gold and buyback', 'Weighed, tested and valued on a voucher, applied as credit.', 'scale'],
    ['Estimates to bills', 'Saved on her record and billed in one step at that day’s rate.', 'receipt'],
    ['Split payments', 'Cash, card, UPI and credit on one bill.', 'wallet'],
    ['Day close', 'One open shift per register; variance on screen at close.', 'shield'],
  ],
  howName: 'How to set up jewellery POS',
  steps: [['Bring stock and customers', 'Pieces with weights and tags, and customers, from your current software.'], ['Set rates and making rules', 'Purities, making and wastage rules by category.'], ['Set counters and approvals', 'Registers, cashiers and your discount and return limits.'], ['Run both for a week', 'Bill in Jwero alongside the old system until totals match.'], ['Keep your books', 'Jwero’s ledger, or Tally or Zoho Books kept in step.']],
  partOf: 'Every bill updates stock, the ledger, GST and the customer’s record at once.',
  faqs: [
    { q: 'How is the gold price calculated on a jewellery bill?', a: 'Metal value is today’s 24K rate × karat ÷ 24 × net weight. Add making, stones and other charges, then GST. Jwero does it on every bill.' },
    { q: 'Can the POS work offline?', a: 'Yes. The till keeps billing through an internet drop and syncs each sale when the connection returns, without duplicates.' },
    { q: 'Can it stop discounts nobody approved?', a: 'Yes. Discounts above the limit you set wait for an approver, and every override is logged.' },
  ],
  bandTitle: 'Bill one piece, the Jwero way.', bandText: 'Bring a tag from your showcase; we will bill it at today’s rate with old gold and split payment.',
});

const stock = landing({
  slug: 'jewellery-stock-management-software', crumb: 'Jewellery stock management', anchor: 'inventory',
  title: 'Jewellery Stock Management Software: Fine Weight, HUID, Ageing | Jwero',
  description: 'Jewellery stock management software: every piece with gross, net and fine weight and HUID, valued at today’s rate, ageing bands, memos and consignment, transfers that balance by weight, and cycle counts by scanning.',
  schemaName: 'Jwero jewellery stock management',
  eyebrow: 'JEWELLERY STOCK MANAGEMENT',
  h1: 'Know where every piece and every gram is, and what it is worth today.',
  sub: 'Every piece on its own record, valued at today’s rate, with ageing that tells you what to sell, memos that must come back and counts that never close the shop.',
  cta: 'Show me my stock at today’s rate',
  shortQ: 'What is jewellery stock management software?',
  shortA: 'Jewellery stock management software keeps a record for every piece with its tag, gross, net and fine weight, stones and HUID, values stock at today’s gold rate, shows ageing, and tracks every piece out on memo, consignment, with karigars or at another branch. Jwero does this on the same record as the counter and the books.',
  leakHead: 'Where stock quietly loses value.',
  leaks: [['Valued at last year’s cost', 'Valued at today’s rate, by branch and purity'], ['180-day pieces nobody sees', 'Ageing bands; slow stock marked down and offered'], ['Memo pieces that never return', 'Out and back against each document'], ['Transfers that lose a gram', 'Must balance by weight to close'], ['Once-a-year stocktake', 'Cycle counts by scanning, discrepancies listed']],
  pointsHead: 'Stock that tells you what to do.',
  points: [
    ['A record per piece', 'Tag, gross, net and fine weight, stones and HUID; duplicates refused.', 'box'],
    ['Today’s value', 'Valuation at today’s rate by branch, category and purity.', 'coins'],
    ['Ageing and slow stock', 'Bands from 0–30 to 180+ days; slow stock listed on its own.', 'activity'],
    ['Memo and consignment', 'Approval, trial and consignment stock out and back.', 'receipt'],
    ['Branches and vaults', 'Transfers by weight, down to the showcase.', 'store'],
    ['Labels and scanning', 'Barcode labels from the record; RFID-ready.', 'search'],
  ],
  howName: 'How to move jewellery stock into Jwero',
  steps: [['Send what you have', 'Stock lists per branch, however inconsistent.'], ['We match and reconcile', 'Differences listed so you start from a known position.'], ['Tag what has no tag', 'Labels printed from the record.'], ['First count by scanning', 'Showcase by showcase, shop open.'], ['Go live', 'Stock moves with every sale, transfer, memo and return.']],
  partOf: 'The same stock is sold at the counter, online and on WhatsApp, so a piece is never sold twice.',
  faqs: [
    { q: 'What is fine weight in jewellery stock?', a: 'The pure gold in a piece: gross weight minus stones, times purity. It lets stock of different purities be added up and compared.' },
    { q: 'How often should a jewellery shop count stock?', a: 'Count a part every week or month by scanning, so the whole shop is covered over a cycle, without closing.' },
    { q: 'Does Jwero support RFID?', a: 'Jwero is RFID-ready: RFID scans move tags the same way barcode scans do.' },
  ],
  bandTitle: 'See your stock at today’s rate.', bandText: 'Send one branch’s stock list; we will show its value today and what is ageing.',
});

const karigar = landing({
  slug: 'karigar-management-software', crumb: 'Karigar management', anchor: 'manufacturing',
  title: 'Karigar Management Software: Job Work, Wastage Norms, Khata | Jwero',
  description: 'Karigar management software for jewellers: issue metal by fine weight on job cards, weigh every stage, settle each job against your wastage norms, keep each karigar’s khata, rate card, scorecard and TDS.',
  schemaName: 'Jwero karigar management',
  eyebrow: 'KARIGAR MANAGEMENT SOFTWARE',
  h1: 'Every gram you give a karigar, accounted for on the day it comes back.',
  sub: 'Metal issued by fine weight, every stage weighed, every job settled against your norm. Loss above norm shows on the job and on his khata, not at year end.',
  cta: 'Show me a karigar job settled',
  shortQ: 'What is karigar management software?',
  shortA: 'Karigar management software records metal issued to karigars and outside units, tracks the job by stage and due date, settles each job against wastage norms, and keeps every karigar’s metal khata, rate card and payments. Jwero does this in fine grams, on the same metal ledger as stock and purchase.',
  leakHead: 'Where workshop gold disappears.',
  leaks: [['Loss found at year end', 'Settled against your norm the day it returns'], ['Khata in a notebook', 'Fine-weight khata per karigar'], ['Late jobs found when she asks', 'Due dates swept, lateness predicted'], ['Same karigar, same overrun', 'Scorecards over time inform allocation'], ['Scrap and recovery unrecorded', 'Melting, refining and recovery on the ledger']],
  pointsHead: 'The workshop, in fine grams.',
  points: [
    ['Job cards and challans', 'Metal issued by weight and purity, with a due date.', 'receipt'],
    ['Stage by stage', 'Each stage weighed; work in progress on one board.', 'activity'],
    ['Norms and variance', 'Every job settled against your wastage norms.', 'scale'],
    ['Khata and settlement', 'Fine-weight balance, rate cards, settlements and TDS.', 'book'],
    ['Planning', 'Material planning from open orders and BOMs.', 'flow'],
    ['Quality', 'Sampling-based checks, rework tracked.', 'check'],
  ],
  howName: 'How to move karigar job work into Jwero',
  steps: [['Bring your khatas', 'Each karigar’s balance in fine grams, open jobs and metal loans.'], ['Set your norms', 'Wastage norms, and what happens to loss above them.'], ['Map your stages', 'Routings where stage control matters; simple job cards elsewhere.'], ['Issue the next job', 'By weight and purity, with a due date.'], ['Settle monthly', 'The metal ledger reconciles per karigar.']],
  partOf: 'A karigar’s wastage, the metal ledger and the finished piece’s cost are the same numbers.',
  faqs: [
    { q: 'What is a normal wastage percentage?', a: 'It depends on the process and design. Set norms from your own history; Jwero then shows every job above them.' },
    { q: 'How is karigar job work recorded for GST?', a: 'Metal sent for job work moves on a delivery challan and must come back as jewellery or scrap within the time the rules allow.' },
    { q: 'Can a job go to an outside workshop?', a: 'Yes. Issue it on a challan, track the due date, and receive and settle it by weight.' },
  ],
  bandTitle: 'Settle one karigar job with us.', bandText: 'Bring one job’s issue and return weights; we will settle it against your norm.',
});

const purchase = landing({
  slug: 'jewellery-purchase-management-software', crumb: 'Jewellery purchase management', anchor: 'purchase',
  title: 'Jewellery Purchase Management Software: AI POs, Unfixed Rate, GSTR-2B | Jwero',
  description: 'Jewellery purchase management software: AI-drafted purchase orders, unfixed-rate gold, receiving by weight and purity, bills matched to order and receipt, GSTR-2B matching and vendor metal accounts.',
  schemaName: 'Jwero jewellery purchase management',
  eyebrow: 'JEWELLERY PURCHASE MANAGEMENT',
  h1: 'Buy what sells, receive every gram, pay only what is owed.',
  sub: 'Orders drafted from what is selling, low and ageing. Gold bought before the rate is fixed. Every receipt weighed against the order and every bill matched before you pay.',
  cta: 'Show me an AI-drafted order',
  shortQ: 'What is jewellery purchase management software?',
  shortA: 'Jewellery purchase management software handles buying jewellery, gold and stones: purchase orders with each vendor’s prices, receiving by weight and purity, bills matched to the order and receipt, returns, vendor payments, GST input credit checked against GSTR-2B, and metal purchases in fine grams.',
  leakHead: 'Where buying leaks money.',
  leaks: [['Buying from memory', 'Orders drafted by AI; your team reviews'], ['Short delivery paid in full', 'Received by weight; shortfall credited'], ['Rate fixed in a notebook', 'Unfixed-rate purchases, fixed later on the ledger'], ['Input credit missed', 'Matched to GSTR-2B every month'], ['Vendors calling for status', 'Orders in the vendor’s own workspace']],
  pointsHead: 'From requisition to payment.',
  points: [
    ['AI-drafted orders', 'From fast movers, low stock and ageing, with vendor prices.', 'sparkle'],
    ['Requisitions and RFQs', 'With approvals and revisions.', 'receipt'],
    ['Unfixed-rate gold', 'Bought by weight and purity; rate fixed later.', 'coins'],
    ['Receiving', 'By weight and purity with tolerance rules.', 'scale'],
    ['Three-way match', 'Bill, order and receipt; returns and debit notes.', 'check'],
    ['Vendor accounts', 'Price lists, metal accounts, payments and scores.', 'users'],
  ],
  howName: 'How to move purchasing into Jwero',
  steps: [['List your vendors', 'With GSTIN, terms and prices.'], ['Bring open orders and balances', 'Unpaid bills, advances, metal loans and unfixed balances.'], ['Set buying rules', 'Approvals, rate fixing and receiving checks.'], ['Invite vendors', 'They see orders in their own Jwero workspace.'], ['Match GSTR-2B monthly', 'So input credit is claimed in full.']],
  partOf: 'What you buy lands in the same stock, metal ledger and books as everything else.',
  faqs: [
    { q: 'Can AI draft purchase orders?', a: 'Yes. Jwero drafts them from what is selling, low and ageing, with each vendor’s prices. Your team reviews and sends.' },
    { q: 'Can I buy gold before the rate is fixed?', a: 'Yes. Record it by weight and purity and fix the rate later; the bill and metal ledger update.' },
    { q: 'How do jewellers reconcile purchases with GSTR-2B?', a: 'Match every purchase bill against GSTR-2B monthly; unfiled bills show as gaps to chase. Jwero does the matching.' },
  ],
  bandTitle: 'See one order drafted for you.', bandText: 'Share last month’s sales; we will show the order Jwero would draft.',
});

const gst = landing({
  slug: 'jewellery-gst-billing-software', crumb: 'Jewellery GST billing', anchor: 'finance',
  title: 'Jewellery GST Billing Software: Live Rate Invoices, Ledger, Tally | Jwero',
  description: 'Jewellery GST billing software: invoices at today’s gold rate with making, stones and GST, a double-entry ledger kept in step with Tally or Zoho Books, GSTR-1, GSTR-3B and HSN reports, P&L and balance sheet.',
  schemaName: 'Jwero jewellery GST billing',
  eyebrow: 'JEWELLERY GST BILLING',
  h1: 'Every bill priced right, every entry in the books, nothing typed twice.',
  sub: 'Invoices at today’s rate with GST, posted to the ledger as they happen and kept in step with Tally. Dues chase themselves and month end is already done.',
  cta: 'Show me a bill reach the books',
  shortQ: 'What is jewellery GST billing software?',
  shortA: 'Jewellery GST billing software creates invoices priced at today’s gold rate with making, stones and GST, keeps the ledger, and prepares GST reports. Jwero adds a double-entry ledger with P&L and balance sheet, keeps Tally or Zoho Books in step, and chases dues on its own.',
  leakHead: 'Where the books fall behind.',
  leaks: [['Entries retyped into Tally', 'Synced as they happen'], ['Dues chased when remembered', 'Reminders sent on their own'], ['Stock and books drift apart', 'Drift flagged nightly'], ['GST built by the CA at month end', 'GSTR-1, GSTR-3B and HSN ready'], ['Customer over limit, still billed', 'Credit hold applies']],
  pointsHead: 'Billing to books, on one record.',
  points: [
    ['Live-rate invoices', 'Metal, making, stones and GST on every invoice.', 'receipt'],
    ['Double-entry ledger', 'Journals, chart of accounts and party ledgers.', 'book'],
    ['Tally and Zoho Books', 'Kept in step; nothing typed twice.', 'refresh'],
    ['GST reports', 'GSTR-1, GSTR-3B, HSN and TDS.', 'check'],
    ['Financial reports', 'P&L, balance sheet, day book, cash flow and ageing.', 'pie'],
    ['Metal ledger', 'Metal balances and metal loans in fine grams.', 'scale'],
  ],
  howName: 'How to move billing and books into Jwero',
  steps: [['Bring opening balances', 'Customers, dues and ledgers.'], ['Connect Tally', 'Map ledgers once, with your CA.'], ['Bill at the counter or online', 'Every invoice at today’s rate with GST.'], ['Switch on reminders', 'Choose when dues are chased.'], ['Close the month', 'Entries in place; reports ready.']],
  partOf: 'Every sale, purchase and karigar settlement posts to the same ledger.',
  faqs: [
    { q: 'Do my books move to Jwero or stay in Tally?', a: 'Your choice. Jwero keeps its own ledger and keeps Tally or Zoho Books in step for your CA.' },
    { q: 'Does it prepare GST returns?', a: 'GSTR-1, GSTR-3B, HSN and TDS reports are prepared in Jwero. Filing stays with your CA.' },
    { q: 'Does it give a P&L and balance sheet?', a: 'Yes, with trial balance, day book, cash flow and receivable and payable ageing.' },
  ],
  bandTitle: 'Watch one bill reach the books.', bandText: 'Bring one invoice; we will show it priced, posted and in Tally.',
});

const repair = landing({
  slug: 'jewellery-repair-management-software', crumb: 'Jewellery repair management', anchor: 'repairs',
  title: 'Jewellery Repair Management Software: Custody, Weight In and Out | Jwero',
  description: 'Jewellery repair management software: job slips with photos and weight-in, estimates the customer approves, a custody chain for every handoff, weight-out compared, re-hallmark flags, turnaround tracking and ready notices.',
  schemaName: 'Jwero jewellery repair management',
  eyebrow: 'JEWELLERY REPAIR MANAGEMENT',
  h1: 'Every repair weighed, tracked and handed back without an argument.',
  sub: 'Photos and weight at intake, her approval before work starts, every handoff logged, weight compared on return, and a notice when it is ready.',
  cta: 'Show me a repair from intake to delivery',
  shortQ: 'What is jewellery repair management software?',
  shortA: 'Jewellery repair management software records each piece that comes in for repair with photos, weight and the work needed, gets the customer’s approval on the estimate, tracks custody and turnaround, compares weight on return, and tells the customer when it is ready.',
  leakHead: 'Where repairs cost you trust and money.',
  leaks: [['Weight disputes', 'Weight in and out recorded'], ['Who has it now?', 'Every handoff logged, never edited'], ['Work done without approval', 'Estimate approved first'], ['Re-hallmark forgotten', 'Flag blocks delivery'], ['Late, and she finds out first', 'Turnaround tracked, late jobs predicted']],
  pointsHead: 'Intake to handover.',
  points: [
    ['Job slip', 'Tag, condition photos and weight-in.', 'camera'],
    ['Estimate', 'Sent to her; work starts after approval.', 'chat'],
    ['Custody chain', 'Every handoff logged.', 'route'],
    ['Turnaround', 'Promised dates tracked; lateness predicted.', 'activity'],
    ['Return checks', 'Weight-out compared; repair QC; re-hallmark flag.', 'scale'],
    ['Warranty', 'On the original invoice and HUID.', 'shield'],
  ],
  howName: 'How to run repairs in Jwero',
  steps: [['Open a job slip', 'Tag, photos and weight.'], ['Send the estimate', 'She approves before work starts.'], ['Assign the work', 'With a promised date; handoffs logged.'], ['Check it back in', 'Weigh it and handle any re-hallmark flag.'], ['Tell her and hand over', 'Ready notice; delivery closes the job.']],
  partOf: 'Every repair sits on her customer record, next to her purchases.',
  faqs: [
    { q: 'How do I stop repair weight disputes?', a: 'Record weight at intake and on return. Jwero compares them and notes any loss before she collects.' },
    { q: 'Does it know when a repair needs re-hallmarking?', a: 'Yes. A job that changes enough metal is flagged and cannot be delivered until the flag is handled.' },
    { q: 'Is the customer told when it is ready?', a: 'Yes. Ready and overdue notices go to the customer.' },
  ],
  bandTitle: 'Run one repair through Jwero.', bandText: 'Bring one repair slip; we will show it from intake to handover.',
});

module.exports = [pos, stock, karigar, purchase, gst, repair];
