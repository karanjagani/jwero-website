const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Roles', '/roles'], [label]];

// ---------------------------------------------------------------------------
// 1. Owner / Proprietor
// ---------------------------------------------------------------------------

const ownerFaqs = [
  { q: 'I already carry the whole business in my head. Why do I need this?', a: 'Because your head is a single point of failure — a sick day, a family emergency or a second store means the memory doesn’t scale. Jwero puts the customer relationships, the stock truth and the pending decisions on a record the business owns, so the shop still runs the way you’d run it even when you’re not the one answering.' },
  { q: 'Will I lose control of pricing and messaging if AI is drafting things?', a: 'No — every AI-drafted message, offer or price exception sits in an approval queue until you or someone you’ve authorised taps approve. Daily caps, quiet hours and a 5-scope kill switch mean you decide how much rope the AI staff get, and you can pull it back instantly.' },
  { q: 'Does Jwero replace my billing counter?', a: 'Mostly, for the sale itself: scan or search a piece, cart it, price it at the live gold rate, apply a discount and generate the GST invoice, all in Jwero. What it doesn’t do yet is sales returns and cash-drawer day-close — that reconciliation still runs on your existing counter until it ships.' },
  { q: 'What actually changes for me day to day?', a: 'Enquiries get answered on WhatsApp even after closing, follow-ups draft themselves instead of being forgotten, and you get a weekly plain-language report instead of reconstructing the picture from memory and a notebook.' },
];

const ownerRole = {
  slug: 'roles/owner',
  title: 'Owner / Proprietor — Run the Shop From a Record You Own | Jwero',
  description: 'How Jwero changes the owner’s day: enquiries answered while you sleep, follow-ups independent of memory, and a record owned by the shop, not one person’s head.',
  breadcrumbs: BC('Owner / Proprietor'),
  faqs: ownerFaqs,
  body: `
${L.hero({
  eyebrow: 'LEADERSHIP · OWNER',
  h1: 'You built this business on memory. Now the memory has a backup.',
  sub: 'Right now, if you’re not in the shop, half the context leaves with you — who’s due a call, what’s ageing on the shelf, what a regular customer actually likes. Jwero puts that memory on a record the business owns, with a governed AI workforce handling the repetitive parts while you keep every real decision.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What actually changes between opening and closing.', '')}
  ${L.impactGrid([
    {
      lever: 'An enquiry at 9pm',
      before: 'A WhatsApp message sits unanswered overnight — the customer has already messaged two other jewellers by morning.',
      after: 'The AI workforce drafts a priced reply from the live catalogue within minutes; if it’s within your rules it can send under your daily caps, or wait for your morning approval.',
    },
    {
      lever: 'Knowing who to follow up with',
      before: 'You remember the regulars, but the customer whose scheme matured last month, or who mentioned a wedding six months out, is easy to lose track of.',
      after: 'The customer record surfaces who’s due — scheme maturities, occasions, RFM signals — as a drafted follow-up waiting in your approval queue, not a fact you had to recall.',
    },
    {
      lever: 'Checking on the business from outside the shop',
      before: 'You call the manager, or wait until you’re physically back at the counter, to know what happened today.',
      after: 'A weekly plain-language report and a live view of the customer, stock and billing picture — reachable without a phone call to the store.',
      link: { href: '/products/whatsapp', label: 'See WhatsApp Commerce' },
    },
    {
      lever: 'Pricing at the live gold rate',
      before: 'Someone recalculates prices by hand when the rate moves, and mistakes creep into invoices.',
      after: 'Catalogue and billing prices resolve from the live rate automatically; any manual override routes through an approval so nothing slips past you.',
      link: { href: '/products/billing-finance', label: 'See Billing & Finance' },
    },
    {
      lever: 'Knowing who walked out without buying',
      before: 'A customer tries on three pieces, leaves without a word, and by the time you hear about it from staff, if you ever do, the moment to follow up has passed.',
      after: 'The live floor view logs the visit and the pieces she was shown; Walkout Rescue drafts a WhatsApp follow-up naming them for a person to check and send, and it shows up in the daily brief when you look.',
      link: { href: '/products/showroom', label: 'See Showroom Intelligence' },
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills that compound instead of living only in your head.', '')}
  ${L.cards([
    { title: 'Structured relationship management', text: 'Instead of remembering which customers matter, you work from a record of 90+ fields per customer — occasions, scheme balances, taste, RFM — that shows you why, not just who.' },
    { title: 'Data-backed decision making', text: 'Dead-stock ageing, fast/slow movers and a weekly report replace gut calls with a number you can actually check.' },
    { title: 'Delegated oversight, not delegated control', text: 'Approval queues, daily caps and a 5-scope kill switch let you extend how the business responds to customers without handing away the final word.' },
    { title: 'Cross-channel fluency', text: 'One inbox for WhatsApp, Instagram and Facebook means you stop needing to check four apps to know what customers are asking.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'AI drafts. You approve. That doesn’t change.', '')}
  <p class="lead">What stays entirely yours: which customer relationship to protect, which price exception makes sense, which risk is worth taking. <a href="/roles#pattern">See why this is true for every role at Jwero →</a></p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete moves, not vague advice.', '')}
  ${L.steps([
    { title: 'Set your approval rhythm', text: 'Decide how often you review the AI workforce’s approval queue — daily is enough for most stores — so drafted replies and follow-ups don’t stall waiting on you.' },
    { title: 'Read the weekly report before the walk-through', text: 'Use the plain-language weekly report to know what to ask your team, instead of discovering issues on the floor.' },
    { title: 'Check dead-stock ageing monthly', text: 'The ageing bands (0–30, 31–90, 91–180, 180+ days) tell you what capital is sitting idle before it becomes a write-off conversation.' },
    { title: 'Tune the kill switch scopes to your comfort level', text: 'Start conservative — one agent or one channel at a time — and widen what the AI workforce can do as you build trust in what it drafts.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('OWNER QUESTIONS', 'Control, the billing counter, and what actually changes.', '')}${L.faqBlock(ownerFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every WhatsApp button on this site is the actual product, not a mockup — <a href="#" data-wa="roles">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('See what a day looks like on Jwero.', 'Tell us how your shop runs today — we’ll show you exactly where the AI workforce and the approval queue fit in.', 'roles')}
`,
};

// ---------------------------------------------------------------------------
// 2. Multi-store & chain owner
// ---------------------------------------------------------------------------

const chainOwnerFaqs = [
  { q: 'Can I set one pricing policy and still let branches have exceptions?', a: 'Yes — central price rules apply across branches, and any branch-level exception routes through an approval, so you keep the final say without having to personally recalculate every branch’s pricing.' },
  { q: 'How do I see what’s happening across stores without calling each manager?', a: 'The multi-store structure rolls up customer, inventory and billing data centrally, and a weekly plain-language report summarises it — without a round of phone calls.' },
  { q: 'Does each branch need its own separate system?', a: 'No — it’s one system with a branch-aware structure. Stock, transfers, pricing and customer records are visible per branch and rolled up centrally, so nothing needs re-entering branch by branch.' },
  { q: 'What about our accountant — do the books stay where they are?', a: 'Yes — the Tally/Zoho Books bridge keeps accounting where your accountant already works. Jwero doesn’t force a switch of accounting systems.' },
];

const chainOwnerRole = {
  slug: 'roles/chain-owner',
  title: 'Multi-Store & Chain Owner — One System, Every Branch | Jwero',
  description: 'How Jwero changes the multi-store owner’s day: central price rules, branch exceptions, a rolled-up view of every store, no more calling managers for updates.',
  breadcrumbs: BC('Multi-store & chain owner'),
  faqs: chainOwnerFaqs,
  body: `
${L.hero({
  eyebrow: 'LEADERSHIP · MULTI-STORE & CHAIN OWNER',
  h1: 'Stop calling every branch to know what happened today.',
  sub: 'Every branch you add multiplies the phone calls, the pricing drift and the version of the truth you’re working from. Jwero gives every store the same system with a branch-aware structure — central control where you want it, local exceptions that still route through your approval.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What actually changes across a chain of stores.', '')}
  ${L.impactGrid([
    {
      lever: 'Knowing what each branch did today',
      before: 'You call each store manager, or wait for an end-of-day WhatsApp summary that may or may not be accurate.',
      after: 'Billing, inventory and customer activity roll up centrally, branch by branch, without a call — with a weekly plain-language report summarising the pattern.',
    },
    {
      lever: 'A price exception at one branch',
      before: 'A manager quietly discounts to close a sale, and you find out weeks later, if at all.',
      after: 'Central price rules apply by default; any branch-level exception routes through an approval queue you or a designated approver reviews — the margin leak stops being invisible.',
      link: { href: '/products/multi-store', label: 'See Multi-store & Franchise' },
    },
    {
      lever: 'Moving stock between branches',
      before: 'Inter-branch transfers happen on a phone call and a paper slip, with no clean trail if something goes missing.',
      after: 'Transfers are tracked with a documented trail per branch, visible centrally, for every high-value transit.',
      link: { href: '/products/inventory', label: 'See Inventory' },
    },
    {
      lever: 'A regular customer visiting a different branch',
      before: 'A customer known well at one store is a stranger at another — their history doesn’t travel.',
      after: 'One customer record travels with them across every branch, so any store sees the same scheme balance, taste and history.',
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills for running a chain, not just a shop.', '')}
  ${L.cards([
    { title: 'Central-vs-local governance fluency', text: 'You learn to set what stays centrally controlled (pricing policy) versus what individual branches can flex within approved bounds — a distinct skill from running one store.' },
    { title: 'Cross-branch pattern reading', text: 'Ageing, fast/slow-movers and customer data compared across branches teaches you which store dynamics are local quirks versus chain-wide problems.' },
    { title: 'Structured delegation at scale', text: 'Approval queues, daily caps and per-branch kill-switch scopes let you extend trust to individual managers without losing an audit trail of every decision.' },
    { title: 'Financial reconciliation across a chain', text: 'The Tally/Zoho bridge and receivables tracking, applied per branch, build fluency in comparing store performance on numbers your accountant recognises too.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'More branches, not less oversight.', '')}
  <p class="lead">What stays entirely yours: which branch needs your attention, which manager to trust with more autonomy, and which customer relationship matters most. <a href="/roles#pattern">See why this is true for every role at Jwero →</a></p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete moves for running the chain, not just one store.', '')}
  ${L.steps([
    { title: 'Set central price rules first, exceptions second', text: 'Define the pricing policy that applies chain-wide, then decide which branches get exception rights — every exception still routes through approval.' },
    { title: 'Compare branches on ageing bands, not gut feel', text: 'Use the 0–30, 31–90, 91–180, 180+ day ageing views per branch to spot which store is genuinely underperforming versus just carrying different stock.' },
    { title: 'Give each branch manager a defined kill-switch scope', text: 'Assign approval and kill-switch authority per branch so managers can act locally without every decision routing all the way up to you.' },
    { title: 'Reconcile centrally through the Tally/Zoho bridge', text: 'Keep each branch’s books flowing into the same accounting system so your accountant compares stores on one consistent ledger, not six.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('CHAIN OWNER QUESTIONS', 'Pricing control, visibility, and what stays where it is.', '')}${L.faqBlock(chainOwnerFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="roles">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('See your chain on one system.', 'Tell us how many branches and how they’re structured today — we’ll show you the rollup and the approval flow.', 'roles')}
`,
};

// ---------------------------------------------------------------------------
// 3. Next-gen successor
// ---------------------------------------------------------------------------

const nextGenFaqs = [
  { q: 'How do I take over relationships my parents built over decades, without a formal handover?', a: 'The customer record captures occasions, taste, scheme history and conversation context as structured data — so you inherit the substance of the relationship, not just a name and a phone number, even if the handover conversation was short.' },
  { q: 'My parents are wary of “too much technology.” How do I modernise without a fight?', a: 'Everything AI drafts sits in an approval queue — nothing sends without a yes. That’s usually the reassurance that lets an older generation accept the change: it’s not a system replacing their judgment, it’s a system remembering more than any one person can, still deferring to a human tap.' },
  { q: 'Can I run a more data-driven operation without abandoning the trust-based way the business was run?', a: 'Yes — the data (ageing stock, customer scores, weekly reports) informs the decisions; it doesn’t replace the relationship-first way jewellery has always been sold. Jwero adds visibility on top of the trust your family already built.' },
  { q: 'What if the business’s records are messy or entirely on paper right now?', a: 'That’s a normal starting point, not a blocker — Excel sheets, notebooks and phone contacts get imported and reconciled during onboarding.' },
];

const nextGenRole = {
  slug: 'roles/next-gen-successor',
  title: 'Next-Gen Successor — Inherit the Relationships, Not Just the Shop | Jwero',
  description: 'How Jwero helps the next generation modernise a family jewellery business: turning decades of memory into a record, without a fight over “too much technology.”',
  breadcrumbs: BC('Next-gen successor'),
  faqs: nextGenFaqs,
  body: `
${L.hero({
  eyebrow: 'LEADERSHIP · NEXT-GEN SUCCESSOR',
  h1: 'You’re inheriting relationships built over decades. Don’t let them stay in one person’s head.',
  sub: 'The hardest part of taking over isn’t the stock or the counter — it’s that your parents’ generation knows every customer by instinct, and that knowledge rarely transfers cleanly. Jwero turns that memory into a record you can actually inherit, while keeping the trust-based way the business has always run.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What actually changes while modernising a family business.', '')}
  ${L.impactGrid([
    {
      lever: 'A longtime customer walks in and you don’t recognise them',
      before: 'You smile and guess, hoping the sales staff who does remember them is on the floor — or you quietly ask your father afterward.',
      after: 'The customer record shows their history, taste and occasions before you even greet them, so the relationship your family built doesn’t depend on your parents being in the room.',
    },
    {
      lever: 'Proposing a new process to the older generation',
      before: 'Any suggestion of “new software” gets read as a challenge to how things have always been done, and stalls.',
      after: 'Showing that AI drafts sit in an approval queue — nothing sends without someone tapping yes — reframes it as memory support, not a replacement for their judgment.',
    },
    {
      lever: 'Deciding what to reorder or discount',
      before: 'Buying and pricing decisions follow instinct and habit, which worked for decades but is hard for you to learn quickly.',
      after: 'Ageing bands and fast/slow-mover views give you an evidence layer to build your own judgment on, faster than watching the floor for years.',
      link: { href: '/products/inventory', label: 'See Inventory' },
    },
    {
      lever: 'Bringing the business online',
      before: 'The shop’s presence is a phone number and word of mouth — customers reaching out on WhatsApp or Instagram get slow or missed replies.',
      after: 'WhatsApp Business API and Instagram/Facebook route into one inbox, with AI staff drafting priced replies under approval — modernising reach without losing the family-shop feel.',
      link: { href: '/products/whatsapp', label: 'See WhatsApp Commerce' },
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills to bridge a generation, not just run a shop.', '')}
  ${L.cards([
    { title: 'Structured relationship inheritance', text: 'Instead of years of floor-time to absorb who’s who, you read the same 90+-field customer record your predecessor would have carried in memory.' },
    { title: 'Digital reconciliation fluency', text: 'GST invoicing at the live gold rate and the Tally/Zoho bridge teach you the financial side of the business in a format an accountant — and a bank — recognises.' },
    { title: 'Data-backed pitching to the older generation', text: 'You learn to bring evidence (ageing stock, weekly reports) into family decisions, rather than relying on seniority alone to win an argument.' },
    { title: 'Change management inside a trust-based culture', text: 'Rolling out approval queues and AI staff without alarming staff or customers is a skill in itself — one this role builds by necessity.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'Modernising doesn’t mean replacing what worked.', '')}
  <p class="lead">What stays yours — and what your parents’ generation will recognise as unchanged — is the judgment call on every relationship that matters. <a href="/roles#pattern">See why this is true for every role at Jwero →</a></p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete moves for taking over, not just taking notes.', '')}
  ${L.steps([
    { title: 'Import what already exists before asking for anything new', text: 'Bring in the family’s existing customer lists — Excel, notebooks, phone contacts — during onboarding rather than starting the record from zero.' },
    { title: 'Start the AI workforce on a narrow, visible scope', text: 'Turn on drafted replies for one channel first, with a low daily cap, so the older generation sees the approval queue working before trusting it more broadly.' },
    { title: 'Bring a number to the next family decision', text: 'Use the dead-stock ageing view or the weekly report to support a buying or pricing argument with evidence, not just a hunch.' },
    { title: 'Learn the books through the Tally/Zoho bridge', text: 'Sit with the accountant while receivables and GST invoicing flow through the bridge — it’s the fastest way to understand the business’s real financial shape.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('NEXT-GEN SUCCESSOR QUESTIONS', 'Handover, trust, and starting from messy records.', '')}${L.faqBlock(nextGenFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site’s own WhatsApp button runs on Jwero — <a href="#" data-wa="roles">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Start inheriting the relationships, not just the shop.', 'Tell us what records you’re starting from — we’ll show you how the customer memory gets built from what already exists.', 'roles')}
`,
};

module.exports = [ownerRole, chainOwnerRole, nextGenRole];
