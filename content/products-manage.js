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
    { q: 'Can I do old-gold exchange or buyback through Jwero?', a: 'Yes, as a staff-operated, in-store flow: test, value, approve, settle and post, with purity-testing method, live rate and PAN/KYC captured where required. There is no customer-facing online self-service valuation form on the storefront yet.' },
    { q: 'How do customers know their repair is ready?', a: 'Automated notifications go out on WhatsApp, SMS and email for job-ready, overdue and unclaimed-item states — nobody has to remember to call.' },
  ],
  body: `
${L.hero({
  eyebrow: 'REPAIRS & AFTER-SALES SERVICE',
  h1: 'Every repair leaves a paper trail your customer can trust.',
  sub: 'A repair ticket that just says "in progress" is a liability the moment a customer asks where their gold went. Jwero tracks every handoff, reconciles weight in against weight out, and won\'t let a re-hallmark-eligible job reach delivery unaddressed.',
  primary: { href: '#', label: 'See repair tracking', wa: 'repairsservice' },
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
  <p><strong>Honest limitation:</strong> this is a staff-operated, in-store flow today. There is no customer-facing online or self-service old-gold valuation form on the storefront — a customer still has to bring the piece in.</p>`
)}

${L.honestGapsBlock([
  'Old-gold exchange/buyback is in-store only — no online self-service valuation form on the storefront yet.',
])}

${L.oneSystemBlock([
  'A repair job and the customer\'s purchase history live on the same record — your team knows what she owns and what she has already paid for before she says a word.',
  'Warranty entitlements read the same invoice and HUID data the billing and catalogue layers already keep — not a separate warranty card that can go missing.',
])}

${L.section(`${L.sectionHead('REPAIRS QUESTIONS', 'The custody chain, the re-hallmark flag, and old-gold buyback.', '')}${L.faqBlock([
  { q: 'What gets recorded on a repair job?', a: 'A claim-check tag, condition photos, weight-in, and an append-only custody chain logging every handoff — nothing in it can be edited or deleted. Weight-out is reconciled before close.' },
  { q: 'Does it catch repairs that need re-hallmarking?', a: 'Yes — jobs crossing the BIS 2-gram or 50%-of-melt threshold are flagged automatically, and cannot reach "ready for delivery" until addressed.' },
  { q: 'Can old-gold buyback be done online?', a: 'Not yet — it is a staff-operated, in-store flow only. There is no customer-facing self-service valuation form on the storefront.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>
<p class="cta-note" style="margin-top:14px">Still running repairs on registers? <a href="/blog/jewellery-repair-management-custody-chain">Read the guide to repair management and the custody chain →</a> Repairs is one part of the wider operations layer — <a href="/products/erp">see the full ERP →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn't a demo video — <a href="#" data-wa="repairsservice">message us here</a> and Jwero's own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('See a repair, tracked properly.', 'Bring one real repair job — we will show you the custody chain it would have generated here.', 'repairsservice')}
`,
};

const purchaseVendors = {
  slug: 'products/purchase-vendors',
  title: 'Purchase Orders & Vendor Management for Jewellers | Jwero',
  description: 'Purchase orders, GRN, bills and vendor credit notes, plus a self-serve vendor portal — suppliers check their own PO and payment status.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Purchase Orders & Vendor Management', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Purchase-to-pay cycle covering purchase orders, goods-received notes, purchase bills, returns and vendor credit notes, a vendor master with per-vendor pricing rules, and a self-serve vendor portal for PO status, invoice submission and a shared design bank.',
    url: 'https://jwero.ai/products/purchase-vendors', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Purchase Orders & Vendors'),
  faqs: [
    { q: 'Do vendors need to install anything to use the portal?', a: 'No — it\'s a web login. A vendor signs in to see their own purchase orders, submit invoices against those POs, check payment status, and access a shared design bank, without calling or emailing your team.' },
    { q: 'Can I set different prices per vendor?', a: 'Yes — the vendor master record holds configurable per-vendor pricing rules, so the same item can carry different agreed terms by supplier.' },
    { q: 'Is this the same as manufacturing job-work with karigars?', a: 'No — this module is for buying from external suppliers (raw material, finished goods). Internal production and karigar job-work run as a separate system, covered on the ERP and HR & Payroll pages.' },
    { q: 'What does the purchase-to-pay cycle actually cover?', a: 'Purchase orders, goods-received notes (GRN), purchase bills, purchase returns and vendor credit notes — a full cycle from ordering through to reconciling what was received against what was billed.' },
    { q: 'Can a vendor see their payment status themselves?', a: 'Yes — that\'s part of the portal. A vendor can check whether a submitted invoice has been paid without needing to call your accounts team.' },
    { q: 'Does the portal replace phone or email with vendors entirely?', a: 'It removes the routine "where\'s my PO / where\'s my payment" calls, since vendors can check status themselves. It doesn\'t block you from still calling or emailing when something needs a conversation.' },
  ],
  body: `
${L.hero({
  eyebrow: 'PURCHASE ORDERS & VENDOR MANAGEMENT',
  h1: 'Your suppliers stop calling to ask "where\'s my payment."',
  sub: 'Most jewellery ERPs stop at raising a purchase order. Jwero gives vendors their own login — to see their POs, submit invoices against them, and check payment status themselves — so the routine calls disappear.',
  primary: { href: '#', label: 'See the vendor portal', wa: 'purchasevendors' },
  secondary: { href: '/products/erp', label: 'See the full ERP' },
})}

${L.section(
  `${L.sectionHead('THE PURCHASE-TO-PAY CYCLE', 'Ordered, received, billed, reconciled.', '')}
  ${L.cards([
    { title: 'Purchase orders', text: 'Raise a PO against a vendor, with items, quantities and agreed terms.' },
    { title: 'Goods-received notes', text: 'Record what actually arrived against the PO — the check before a bill gets approved.' },
    { title: 'Purchase bills', text: 'Bill the PO and GRN together, so what you\'re paying for matches what was ordered and received.' },
    { title: 'Returns & credit notes', text: 'Purchase returns and vendor credit notes close the loop when something doesn\'t match or needs to go back.' },
    { title: 'Vendor master', text: 'One record per supplier, with configurable per-vendor pricing rules.' },
  ], 3)}`
)}

${L.section(
  `${L.sectionHead('THE VENDOR PORTAL', 'A separate login, so vendors stop calling you.', 'Most competitor jewellery ERPs don\'t have this — vendors are left emailing and calling to check basic status.')}
  <div class="stack-verdict"><strong>Vendors get their own login</strong> where they can view their own purchase orders, submit their own invoices against those POs, see payment status, and access a shared design bank — real self-service, not a promise to "get back to them."</div>`,
  { tone: 'tint' }
)}

${L.oneSystemBlock([
  'A GRN posted here updates the same inventory the catalogue and dead-stock views read from — no separate spreadsheet to reconcile later.',
  'A purchase bill feeds the same finance layer billing and receivables already use, so what you owe a vendor and what a customer owes you sit in one place.',
])}

${L.section(
  `<p class="cta-note">This is a separate system from manufacturing job-work — purchases and vendors cover buying from external suppliers (raw material, finished goods), while internal production and karigar wage settlement are covered on <a href="/products/erp">the ERP page</a> and <a href="/products/hr-payroll">HR & Payroll</a>.</p>`
)}

${L.section(`${L.sectionHead('PURCHASE & VENDOR QUESTIONS', 'Portal access, per-vendor pricing, and job-work.', '')}${L.faqBlock([
  { q: 'Do vendors need to install anything?', a: 'No — the portal is a web login. Vendors check their own POs, submit invoices, and see payment status without calling or emailing.' },
  { q: 'Can I set different prices per vendor?', a: 'Yes — the vendor master holds configurable per-vendor pricing rules.' },
  { q: 'Is this the same as manufacturing job-work?', a: 'No — this covers buying from external suppliers. Internal production and karigar job-work run as a separate system.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>
<p class="cta-note" style="margin-top:14px">Purchases and vendors are one part of the wider operations layer — <a href="/products/erp">see the full ERP →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don't have to take our word for it — <a href="#" data-wa="purchasevendors">try the WhatsApp button on this page</a>; it's Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Let your vendors check their own status.', 'Bring one supplier relationship you manage over calls and email — we will show you the portal that replaces it.', 'purchasevendors')}
`,
};

module.exports = [repairsService, purchaseVendors];
