const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Roles', '/roles'], [label]];

// ---------------------------------------------------------------------------
// 1. Accountant / bookkeeper
// ---------------------------------------------------------------------------

const accountantFaqs = [
  { q: 'Does Jwero replace Tally or Zoho Books?', a: 'No — Jwero bridges to Tally and Zoho Books, it doesn’t replace them. Your books stay exactly where they already are; Jwero-generated GST invoices sync across so you’re reconciling against a live feed instead of re-keying every bill by hand.' },
  { q: 'Does Jwero handle the physical billing counter and cash day-close?', a: 'Yes — registers and shifts per counter, scan-to-sale at the live rate, returns under branch policy, old-gold exchange vouchers, and a day-close that reconciles the declared cash count against expected takings. <a href="/products/pos">See the Counter POS</a>.' },
  { q: 'Is GST computation on Jwero invoices actually compliant, or an approximation?', a: 'It’s data-driven — CGST/SGST/IGST computed as part of live-rate invoicing, not hardcoded. Confirm current statutory-filing scope for your state on a demo before relying on it for a specific compliance need.' },
  { q: 'Will this change what accounting software or process I use?', a: 'Most businesses change nothing on the accounting side on day one. Jwero adds GST invoicing at the live rate and receivables tracking that flows into your existing books via the Tally/Zoho bridge — it doesn’t ask you to move your ledger.' },
];

const accountantRole = {
  slug: 'roles/accountant',
  title: 'For Jewellery Accountants: Books That Reconcile | Jwero',
  description: 'How Jwero changes the accountant’s day: GST invoices at live gold rate, a Tally/Zoho bridge keeping books in place, and receivables chased on schedule.',
  breadcrumbs: BC('Accountant / bookkeeper'),
  faqs: accountantFaqs,
  body: `
${L.hero({
  eyebrow: 'FINANCE & OPERATIONS · ACCOUNTANT',
  h1: 'Reconcile with the books, not against a pile of paper bills.',
  sub: 'Every rate change means recalculated invoices, and every recalculation by hand is a place for a mismatch to creep into the ledger. Jwero prices and generates GST invoices at the live gold rate and bridges them into Tally or Zoho Books — so reconciliation starts from a feed, not a stack of receipts.',
  primary: { href: '#', label: 'Show me my morning in Jwero', wa: 'roles' },
  secondary: { href: '#', label: 'Send this page to your owner', share: 'A page about how Jwero would change my day at the counter — worth two minutes:' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What actually changes when the books are the job.', '')}
  ${L.impactGrid([
    {
      lever: 'Matching invoices to the rate they were billed at',
      before: 'The gold rate moved twice that day, and matching a handwritten or manually repriced bill back to the correct rate slice takes real digging.',
      after: 'GST invoices are generated at the live rate at the moment of billing, so each invoice already carries the rate it was priced against — nothing to reconstruct.',
      link: { href: '/products/billing-finance', label: 'See Billing & Finance' },
    },
    {
      lever: 'Getting sales data into the ledger',
      before: 'Invoices from the counter get re-keyed into Tally or Zoho Books by hand, one at a time, with the usual chance of a typo or a skipped entry.',
      after: 'The Tally/Zoho bridge syncs Jwero-generated invoices into your existing books, so entry becomes a review step instead of a re-typing task.',
    },
    {
      lever: 'Chasing outstanding customer payments',
      before: 'Who owes what, since when, lives across a register and a few people’s memory — collection depends on someone remembering to call.',
      after: 'A receivables ledger shows who owes what and since when, with automated reminders running on schedule so collection doesn’t sit on one person’s to-do list.',
    },
    {
      lever: 'Reconciling gold scheme float',
      before: 'Instalments collected against gold schemes and savings plans get tracked separately from day-to-day billing, making the float easy to lose track of.',
      after: 'Scheme and savings plan balances are tracked digitally on the customer record, giving a clearer running number to reconcile against rather than a separate paper register.',
      link: { href: '/products/gold-schemes', label: 'See Gold Schemes' },
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills that move the job from paper-chasing to judgment.', '')}
  ${L.cards([
    { title: 'Digital reconciliation fluency', text: 'Working from a live invoice feed synced to Tally/Zoho instead of a stack of counterfoils builds the habit of reconciling continuously, not just at month-end.' },
    { title: 'Less time on data entry, more on judgment calls', text: 'Re-keying invoice line items stops being the job; spotting the mismatch, the odd discount, the account that needs a second look becomes more of it.' },
    { title: 'Receivables discipline, not receivables guesswork', text: 'A live ledger of who owes what — with reminders already running — means chasing payment becomes about deciding tone and timing, not first finding out who to call.' },
    { title: 'Cleaner audit trail habits', text: 'Invoices that carry their rate and GST computation at source, plus an approval trail on price overrides, make preparing for an audit less of a reconstruction exercise.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'AI prepares and tracks. You still judge and sign off.', '')}
  <p class="lead">Jwero feeds Tally or Zoho Books rather than replacing them, so the books stay exactly where you already work. What stays entirely yours: classifying an unusual transaction, the auditor relationship, and final sign-off on every number. <a href="/roles#pattern">See why this is true for every role at Jwero →</a></p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete moves, not vague advice.', '')}
  ${L.steps([
    { title: 'Reconcile from the invoice feed, not the counterfoil', text: 'Use the Tally/Zoho bridge sync as your starting reconciliation list each day, and spend the saved time on the entries that actually need judgment.' },
    { title: 'Review the receivables ledger weekly', text: 'Check who’s overdue past the automated reminder schedule and decide which accounts need a personal call, instead of rebuilding the list from scratch.' },
    { title: 'Track scheme and savings plan float against the ledger', text: 'Use the digitally tracked scheme balances as a running cross-check against the float you’re carrying in the books.' },
    { title: 'Flag GST edge cases early', text: 'Since GST computation is data-driven off live pricing, review unusual invoices (large discounts, price overrides) for correct treatment before they’re filed, not after.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('ACCOUNTANT QUESTIONS', 'Tally/Zoho, the billing counter, and GST accuracy.', '')}${L.faqBlock(accountantFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="roles">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('See a GST invoice reprice at the live rate.', 'Tell us how your books are set up today — we’ll show you exactly how the Tally/Zoho bridge keeps them in step.', 'roles')}
`,
};

// ---------------------------------------------------------------------------
// 2. Inventory / stock manager
// ---------------------------------------------------------------------------

const inventoryManagerFaqs = [
  { q: 'Can Jwero tell me my dead stock?', a: 'Yes — ageing bands (0–30, 31–90, 91–180, 180+ days) and fast/slow-mover views show exactly which pieces are sitting, for how long, and what they’re worth at today’s rate.' },
  { q: 'Does this replace our physical stocktake?', a: 'No, but it makes it faster and less of a surprise-finding exercise — ageing and valuation are visible continuously, so a stocktake confirms what you already suspected rather than revealing it cold.' },
  { q: 'Does inventory stay in sync if we also sell on Shopify or Unicommerce?', a: 'Yes — Shopify, WooCommerce and Unicommerce connectors sync stock and orders both ways, so a piece sold online doesn’t sit as available in your in-store count.' },
];

const inventoryManagerRole = {
  slug: 'roles/inventory-manager',
  title: 'Inventory / Stock Manager — See What’s Dying on the Shelf | Jwero',
  description: 'How Jwero changes the stock manager’s day: ageing and dead-stock visibility across branches, stock synced online, and a note on visibility versus prediction.',
  breadcrumbs: BC('Inventory / stock manager'),
  faqs: inventoryManagerFaqs,
  body: `
${L.hero({
  eyebrow: 'FINANCE & OPERATIONS · INVENTORY MANAGER',
  h1: 'See what’s dying on the shelf before it’s a write-off.',
  sub: 'Capital sits frozen in pieces nobody’s buying, and by the time a yearly stocktake finds them, months of financing cost are already gone. Jwero shows ageing and dead-stock value continuously, across every branch, so slow-moving pieces get a decision made while there’s still time to act.',
  primary: { href: '#', label: 'Show me my morning in Jwero', wa: 'roles' },
  secondary: { href: '#', label: 'Send this page to your owner', share: 'A page about how Jwero would change my day at the counter — worth two minutes:' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What actually changes when stock is the job.', '')}
  ${L.impactGrid([
    {
      lever: 'Knowing what’s not moving',
      before: 'A piece can sit in the case for months before anyone notices — it takes a yearly stocktake or a sharp memory to catch it.',
      after: 'Ageing bands (0–30, 31–90, 91–180, 180+ days) and fast/slow-mover views surface exactly what’s sitting and for how long, checkable any day, not once a year.',
      link: { href: '/products/inventory', label: 'See Inventory' },
    },
    {
      lever: 'Valuing dead stock at today’s rate',
      before: 'Knowing what frozen capital is actually costing means pulling weight and purity records and repricing them by hand against today’s rate.',
      after: 'Ageing pieces are valued continuously at the live gold rate, so the frozen-capital number is always current, not a stale estimate.',
    },
    {
      lever: 'Keeping branch stock counts honest',
      before: 'Each branch keeps its own count; reconciling what a branch says it has against what’s actually there means phone calls and spreadsheet cross-checks.',
      after: 'Stock, transfers and valuation are visible per branch and roll up centrally on the same record, so a discrepancy shows up without a round of calls.',
    },
    {
      lever: 'Staying in sync with online sales',
      before: 'A piece sells on the Shopify website but still shows available in the in-store count until someone manually updates it.',
      after: 'Shopify/WooCommerce/Unicommerce connectors sync stock and orders both ways, so an online sale reflects in-store immediately.',
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills that move the job from counting to deciding.', '')}
  ${L.cards([
    { title: 'Reading ageing data to make real reorder decisions', text: 'Working from ageing bands and mover data instead of a gut sense of “this looks old” builds the habit of deciding with a number, not a hunch.' },
    { title: 'Dead-stock triage instead of a once-a-year surprise', text: 'Catching slow movers at 90 days instead of at the annual stocktake means markdowns, melting or transfers happen while there’s still value to protect.' },
    { title: 'Cross-branch stock fluency', text: 'A centrally visible, branch-aware stock record builds comfort managing inventory across locations, not just the one you can physically walk.' },
    { title: 'Omnichannel stock discipline', text: 'Managing a count that syncs with Shopify, WooCommerce or Unicommerce builds the habit of treating online and in-store as one number, not two.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'The system surfaces it. You decide what to do.', '')}
  <p class="lead">Jwero puts ageing, valuation and mover data in front of you. The decision — markdown, melt, transfer, hold, reorder — stays a judgment call for a person who knows the season. <a href="/roles#pattern">See why this is true for every role at Jwero →</a></p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete moves, not vague advice.', '')}
  ${L.steps([
    { title: 'Check ageing bands weekly, not just at stocktake', text: 'Review the 91–180 and 180+ day bands on a set schedule so a slow mover gets a decision before it’s a write-off conversation.' },
    { title: 'Cross-check branch stock centrally before a physical count', text: 'Use the rolled-up branch view to flag discrepancies ahead of a stocktake, so the physical count confirms rather than discovers.' },
    { title: 'Treat online and in-store as one number', text: 'Use the Shopify/WooCommerce/Unicommerce sync as the source of truth for availability, instead of maintaining a separate mental count for online orders.' },
    { title: 'Pair ageing data with your own seasonal knowledge', text: 'Use the ageing and mover visibility as an input to your own judgment on what to reorder or discount.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('INVENTORY QUESTIONS', 'Dead stock, forecasting, and staying in sync online.', '')}${L.faqBlock(inventoryManagerFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="roles">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('See your dead-stock number.', 'Tell us how stock is tracked today across your branches — we’ll show you what the ageing view looks like on your own data.', 'roles')}
`,
};

// ---------------------------------------------------------------------------
// 3. Purchase / procurement manager
// ---------------------------------------------------------------------------

const purchaseManagerFaqs = [
  { q: 'How does this connect to what’s actually selling?', a: 'Mover data and ageing bands are read off the same inventory truth as billing and catalogue, so what you’re seeing reflects real sales and stock movement, not a separate estimate.' },
  { q: 'Does purchasing stay reconciled with what vendors deliver?', a: 'Purchase-to-pay tracking with GRN weigh-and-assay records what was ordered, received and owed, so a delivery reconciles against the order rather than against memory.' },
  { q: 'Do price changes on new stock route through anyone else?', a: 'Yes — pricing and any exceptions route through approval rules, so what a purchase manager books in doesn’t bypass the store’s pricing policy.' },
];

const purchaseManagerRole = {
  slug: 'roles/purchase-manager',
  title: 'For Purchase Managers: Reorder on Data, Not Gut Feel | Jwero',
  description: 'How Jwero changes the purchase manager’s day: ageing/velocity visibility for reorder decisions, GRN-tracked purchase-to-pay, a note on visibility vs prediction.',
  breadcrumbs: BC('Purchase / procurement manager'),
  faqs: purchaseManagerFaqs,
  body: `
${L.hero({
  eyebrow: 'TRADE & PARTNERSHIPS · PURCHASE MANAGER',
  h1: 'Know what to reorder before the shelf decides for you.',
  sub: 'Buying by gut feel means either a shelf that runs empty on a fast mover or capital tied up in pieces that were never going to sell. Jwero shows which pieces are ageing and which are moving, at today’s rate, so the reorder call is a decision you make on data, not a hunch.',
  primary: { href: '#', label: 'Show me my morning in Jwero', wa: 'roles' },
  secondary: { href: '#', label: 'Send this page to your owner', share: 'A page about how Jwero would change my day at the counter — worth two minutes:' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What actually changes when reordering is the job.', '')}
  ${L.impactGrid([
    {
      lever: 'Deciding what to reorder',
      before: 'Reorder decisions come from memory of what “feels” like it’s selling, or a walk around the floor to eyeball what’s thin.',
      after: 'Fast/slow-mover views and ageing bands show which designs are actually moving and which are stalling, so a reorder call starts from a number, not a hunch.',
      link: { href: '/products/inventory', label: 'See Inventory' },
    },
    {
      lever: 'Avoiding a shelf that’s already dead on arrival',
      before: 'New stock gets ordered on gut feel and joins a shelf where similar pieces are already ageing 90+ days, unnoticed until the next stocktake.',
      after: 'Ageing visibility on existing stock is right there before a reorder is placed, so buying more of a slow-moving line is a visible choice, not a blind repeat.',
    },
    {
      lever: 'Reconciling what a vendor actually delivered',
      before: 'What was ordered, what arrived and what’s still owed lives across purchase orders and delivery notes that need manual matching.',
      after: 'Purchase-to-pay tracking with GRN weigh-and-assay records order, receipt and payable together, so a delivery reconciles against the order automatically.',
    },
    {
      lever: 'Pricing new stock in correctly',
      before: 'Pricing a freshly received piece by hand risks it going onto the floor at a stale rate or with an unreviewed exception.',
      after: 'New stock pricing resolves against the live rate, and any override routes through an approval, so nothing reaches the shelf outside the store’s pricing policy.',
      link: { href: '/products/billing-finance', label: 'See Billing & Finance' },
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills that move the job from restocking to buying.', '')}
  ${L.cards([
    { title: 'Demand-aware ordering instead of gut-feel restocking', text: 'Reading velocity and ageing data before placing an order builds a habit of buying to what’s actually selling, not what feels like it should.' },
    { title: 'Vendor reconciliation discipline', text: 'Matching GRN receipts against purchase orders as routine, rather than at month-end, builds the muscle of catching a shortfall or overcharge early.' },
    { title: 'Reading dead stock as a purchasing signal', text: 'Treating an ageing report as an input to the next order — not just an inventory-team concern — turns purchasing into a lever against frozen capital, not a cause of it.' },
    { title: 'Working inside a pricing policy, not around it', text: 'Booking in new stock at live-rate pricing with approval-gated overrides builds comfort operating inside a governed system rather than a personal spreadsheet.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'The system shows the data. You still make the buying call.', '')}
  <p class="lead">Jwero shows ageing, valuation and fast and slow movers at today’s rate. The actual buying decision — which vendor, which design, how much, when — stays a judgment call that draws on vendor relationships and a read of the season. <a href="/roles#pattern">See why this is true for every role at Jwero →</a></p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete moves, not vague advice.', '')}
  ${L.steps([
    { title: 'Check mover and ageing views before every reorder', text: 'Make it the first step before placing an order, not a report you glance at afterward — it’s the same inventory truth billing and catalogue read from.' },
    { title: 'Reconcile every GRN against its purchase order', text: 'Use weigh-and-assay GRN tracking to confirm delivery matches order as stock arrives, not weeks later when a discrepancy is harder to trace.' },
    { title: 'Flag pricing overrides for approval, not around it', text: 'Route any exception on new-stock pricing through the approval queue so it’s reviewed, rather than adjusting it directly on the floor.' },
    { title: 'Treat ageing bands as a vendor-conversation input', text: 'Bring the 91–180 and 180+ day view into vendor negotiations — it’s a concrete number to push for better terms on slow-moving lines.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('PURCHASE MANAGER QUESTIONS', 'Forecasting, vendor reconciliation, and pricing approvals.', '')}${L.faqBlock(purchaseManagerFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="roles">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('See ageing data before your next order.', 'Tell us how purchasing works today — we’ll show you exactly what the reorder view looks like.', 'roles')}
`,
};

module.exports = [accountantRole, inventoryManagerRole, purchaseManagerRole];
