const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Roles', '/roles'], [label]];

// ---------------------------------------------------------------------------
// Store manager
// ---------------------------------------------------------------------------

const storeManagerFaqs = [
  { q: 'Does this replace my job, or just my paperwork?', a: 'Just the paperwork and the guesswork. AI staff draft follow-ups, reminders and reports; you and your team approve what goes out. Deciding how to run the floor, who to coach, and which customer gets a call from you personally — that stays entirely yours.' },
  { q: 'Can I see what every branch or counter is doing without calling around?', a: 'Yes — stock, sales and staff activity across branches roll up into one view, with per-branch exceptions routed through approvals so you keep control without needing to phone each store.' },
  { q: 'How much of my day does this actually save?', a: 'It depends on your store, but the pattern is consistent: less time spent re-asking staff "what happened today" or chasing enquiries that went cold, more time spent on the floor with customers and on coaching your team.' },
  { q: 'Do I need to be technical to use this?', a: 'No — the daily view is built around a plain-language report and an approval queue, not a dense dashboard. If you can use WhatsApp, you can run the store view.' },
];

const storeManager = {
  slug: 'roles/store-manager',
  title: 'Store Manager — Run the Floor on Today’s Numbers | Jwero',
  description: 'How Jwero changes a store manager’s day: live stock and sales visibility, AI-drafted follow-ups awaiting approval, and a weekly report instead of guessing.',
  breadcrumbs: BC('Store manager'),
  faqs: storeManagerFaqs,
  body: `
${L.hero({
  eyebrow: 'FRONTLINE & SALES · STORE MANAGER',
  h1: 'Run the floor on today’s numbers, not yesterday’s guesswork.',
  sub: 'A store manager’s day is usually spent piecing together what happened — who walked in, what sold, which enquiry went cold — from memory, a register and a WhatsApp group. Jwero puts that picture in front of you each morning, and hands the follow-through to a governed AI workforce that waits for your team’s approval.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What actually changes between opening and closing.', '')}
  ${L.impactGrid([
    { lever: 'Opening the store', before: 'You start the day not knowing what closed yesterday until the accountant pulls the register, or you call each counter.', after: 'A plain-language morning report shows yesterday’s sales, enquiries and stock movement before you unlock the door.', link: { href: '/products/crm', label: 'See the CRM' } },
    { lever: 'A customer walks in mid-afternoon', before: 'Your sales staff greet her cold — no memory of her last visit, her scheme balance or what she was shown before.', after: 'Her record — past purchases, scheme status, taste — is one tap away for whoever’s on the floor, before the conversation starts.' },
    { lever: 'A WhatsApp enquiry comes in after closing', before: 'It sits unread until morning, and by then the customer has usually asked someone else.', after: 'AI staff draft a priced reply at today’s rate overnight; a person on your team approves it first thing, so nothing goes out unchecked.', link: { href: '/products/whatsapp', label: 'See WhatsApp Commerce' } },
    { lever: 'Checking on other branches', before: 'You call each store manager individually to ask what moved and what’s stuck on the shelf.', after: 'Stock, ageing and sales roll up across branches into one view, with exceptions flagged instead of buried in a phone call.', link: { href: '/products/multi-store', label: 'See multi-store' } },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills a store manager builds working inside Jwero.', '')}
  ${L.cards([
    { title: 'Reading a store like a P&L, not a gut feeling', text: 'Live valuation, ageing bands and fast/slow-mover data turn "I think we’re doing okay" into a number you can act on daily.' },
    { title: 'Coaching on evidence, not anecdotes', text: 'Which staff member’s follow-ups convert, which enquiries stall — visible on the record, so coaching conversations start from facts.' },
    { title: 'Approval judgment', text: 'Reviewing AI-drafted replies and offers before they go out builds a sharper eye for what a customer needs to hear versus what reads as generic.' },
    { title: 'Cross-branch operating sense', text: 'Seeing how your store compares to sister branches on the same live data builds the kind of judgment that usually takes years of head-office meetings to pick up.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'AI drafts. You and your team approve. That doesn’t change.', '')}
  <p class="lead">The parts of a store manager’s day that are genuinely tedious — typing out the same follow-up message, remembering to chase a scheme instalment, compiling a report from a register — are exactly what AI staff take off your plate, and only after a person approves each action. Nothing is sent, changed or decided without your team’s yes; the approval queue, daily caps and kill switch exist specifically so that stays true. What stays yours: reading the floor, deciding how to handle a difficult customer, coaching staff, and setting the judgment calls the AI drafts against. Leaning into that — the parts a system genuinely cannot do — is what makes a store manager more valuable here, not less.</p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete ways to add value using what Jwero already gives you.', '')}
  ${L.steps([
    { title: 'Start each day with the morning report', text: 'Use the plain-language report to walk the floor with a plan instead of finding out what happened as it happens.' },
    { title: 'Review the approval queue as a coaching tool', text: 'When you edit a drafted reply, that’s a moment to show a staff member what "good" looks like — not just a task to clear.' },
    { title: 'Use ageing and dead-stock visibility to steer buying conversations', text: 'Bring the fast/slow-mover data to purchase discussions instead of relying on memory of what "usually sells".' },
    { title: 'Set your branch’s approval rules deliberately', text: 'Decide what needs your personal sign-off versus what your senior staff can approve — multi-store exceptions route through this, so use it to delegate with control, not blindly.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('STORE MANAGER QUESTIONS', 'Straight answers about the role and the change.', '')}${L.faqBlock(storeManagerFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site’s own WhatsApp button runs on Jwero — <a href="#" data-wa="roles">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See a store manager’s day, end to end.', 'We’ll walk you through the morning report and the approval queue on your own numbers.', 'roles')}
`,
};

// ---------------------------------------------------------------------------
// Sales associate
// ---------------------------------------------------------------------------

const salesAssociateFaqs = [
  { q: 'Will I stop talking to customers because AI handles the chat?', a: 'No — AI staff draft replies and follow-ups; a person on your team, often you, approves before anything reaches a customer. The conversations that matter — in-store, on a call, closing a sale — stay yours.' },
  { q: 'Do I need to remember every customer myself?', a: 'No — that’s the point of the customer record. Occasions, scheme balances and taste preferences are one tap away, so you walk up already knowing her instead of relying on memory.' },
  { q: 'What happens to my personal WhatsApp customer relationships if I leave?', a: 'The conversation history and customer record live on the business’s system, not a personal phone — which protects the business, and also means a new associate can pick up context instead of starting cold.' },
  { q: 'Will AI take credit for sales I influenced?', a: 'The action log records what AI drafted and who approved it, so a sale that started as an AI-drafted reply you approved and then closed in person is visible as your work, not hidden inside a bot.' },
];

const salesAssociate = {
  slug: 'roles/sales-associate',
  title: 'Sales Associate — Walk Up Already Knowing the Customer | Jwero',
  description: 'How Jwero changes a sales associate’s day: customer memory at the counter, AI-drafted follow-ups awaiting approval, and selling backed by data, not guesswork.',
  breadcrumbs: BC('Sales associate'),
  faqs: salesAssociateFaqs,
  body: `
${L.hero({
  eyebrow: 'FRONTLINE & SALES · SALES ASSOCIATE',
  h1: 'Walk up to every customer already knowing them.',
  sub: 'Counter and floor staff usually greet a returning customer cold — no memory of her last visit, what she was shown, or what she’s saving toward. Jwero puts that on the record before you say hello, and hands the tedious follow-up work to AI staff that draft, but never send, without your yes.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What actually changes on the floor and at the counter.', '')}
  ${L.impactGrid([
    { lever: 'A regular customer walks in', before: 'You try to recall her last visit from memory — what she liked, what she asked about, whether she’s due on a scheme instalment.', after: 'Her record — purchase history, taste, scheme balance, occasions — is on screen before the conversation starts.' },
    { lever: 'Quoting a price', before: 'You estimate or walk to a calculator while she waits, and hope the making-charge math is right.', after: 'Live-rate pricing on the catalogue means the price you quote is today’s rate, calculated the same way every time.', link: { href: '/products/catalog', label: 'See the catalogue' } },
    { lever: 'She says "let me think about it" and leaves', before: 'Without a system, following up depends on you remembering to message her — and most associates don’t.', after: 'A follow-up drafts itself on a schedule; you review and approve it, so the enquiry doesn’t just die in a notebook.', link: { href: '/products/whatsapp', label: 'See WhatsApp Commerce' } },
    { lever: 'Sharing designs after hours', before: 'You send photos from your personal phone, and the conversation — and the customer relationship — lives there, not with the business.', after: 'A shareable live catalogue link sends the same designs at today’s price from the business’s system, so the relationship is on the record, not stuck in your phone.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills a sales associate builds working inside Jwero.', '')}
  ${L.cards([
    { title: 'Consultative selling backed by customer data', text: 'Knowing her taste, occasion and budget before you speak turns the pitch into a recommendation, not a guess.' },
    { title: 'Live-rate pricing fluency', text: 'Quoting confidently at today’s gold rate — with making charges shown, not estimated — builds trust faster than a hesitant calculation.' },
    { title: 'Follow-through without relying on memory', text: 'Approving drafted follow-ups instead of trying to remember every open enquiry builds a habit of closing loops, not losing them.' },
    { title: 'A track record that travels with you', text: 'Approved conversations and closed sales sit on your record inside the system — evidence of your selling skill that outlasts any one shift or store.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'AI drafts the message. You close the sale.', '')}
  <p class="lead">The part of selling that’s genuinely repetitive — typing the same greeting, remembering to follow up, recalculating a price by hand — is what AI staff now draft, and only a person on your team approves before it reaches a customer. Nothing is sent on your behalf without your review. What stays entirely human: reading a customer’s hesitation in person, building trust across a counter, closing the sale, and the craftsmanship of a genuinely good recommendation. The associates who lean into that — using the data instead of competing with the drafting — are the ones this system makes more valuable, not less relevant.</p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete ways to sell more using what Jwero already gives you.', '')}
  ${L.steps([
    { title: 'Check the customer record before every greeting', text: 'A tap at the counter shows her occasion, scheme balance and taste — use it to open the conversation with relevance, not small talk.' },
    { title: 'Edit drafted follow-ups instead of ignoring them', text: 'A drafted message waiting for your approval is a head start, not a finished product — add the detail only you know from meeting her.' },
    { title: 'Share the live catalogue instead of phone photos', text: 'A curated catalogue link keeps the price current and the interaction on the business record, protecting the relationship you built.' },
    { title: 'Close the loop on approvals promptly', text: 'A follow-up sitting unapproved is an enquiry going cold — treat the queue as part of the sales cycle, not admin to get to later.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('SALES ASSOCIATE QUESTIONS', 'Straight answers about the role and the change.', '')}${L.faqBlock(salesAssociateFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site’s own WhatsApp button runs on Jwero — <a href="#" data-wa="roles">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See what a sales associate sees.', 'We’ll show you the customer record and the follow-up queue on a real counter workflow.', 'roles')}
`,
};

// ---------------------------------------------------------------------------
// Billing cashier
// ---------------------------------------------------------------------------

const cashierFaqs = [
  { q: 'Does Jwero run my cash counter and day-close?', a: 'Not yet — a dedicated POS counter with cash-drawer day-close is on our public roadmap, not shipped today. Jwero’s Billing & Finance prices and generates the GST invoice at the live gold rate; your existing billing counter still handles the physical cash till and day-close until POS ships.' },
  { q: 'So what does Jwero actually do at billing time, right now?', a: 'It prices the invoice at today’s live gold rate (metal rate × weight × purity, plus making charges and GST) automatically, and tracks what’s outstanding with reminders — so the pricing math and the follow-up on unpaid amounts stop being manual.' },
  { q: 'Will I still use my current billing software alongside this?', a: 'Yes — that’s the current recommendation. Keep your existing counter billing running for the cash till and day-close; Jwero’s invoicing and receivables tracking work alongside it, not instead of it, until POS ships.' },
  { q: 'Does this replace my job at the counter?', a: 'No — a person still hands over the invoice, handles the payment and reassures the customer. What Jwero removes is the manual rate lookup and repricing calculation, and the follow-up call when a payment is late.' },
];

const cashier = {
  slug: 'roles/cashier',
  title: 'Billing Cashier — Price at the Live Gold Rate, No Calculator Fight | Jwero',
  description: 'How Jwero changes a billing cashier’s day: GST invoices priced at live gold rate, automated receivables reminders, and a note on what still runs at the counter.',
  breadcrumbs: BC('Billing cashier'),
  faqs: cashierFaqs,
  body: `
${L.hero({
  eyebrow: 'FRONTLINE & SALES · BILLING CASHIER',
  h1: 'Bill at the live gold rate without a calculator fight.',
  sub: 'Gold moves twice a day, and repricing every invoice by hand is where cashiers lose time and customers lose patience. Jwero prices and generates the GST invoice at this minute’s rate automatically — your existing billing counter still runs the cash till and day-close until the full POS ships.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What changes at the billing counter — and what doesn’t, yet.', '')}
  ${L.impactGrid([
    { lever: 'Pricing an invoice', before: 'You look up today’s rate, calculate metal value, purity, making charges and GST by hand or on a calculator while the customer waits.', after: 'The invoice prices itself at the live rate — metal, purity, making charges and GST computed together, instantly.', link: { href: '/products/billing-finance', label: 'See Billing & Finance' } },
    { lever: 'The rate changes mid-morning', before: 'Invoices drafted before the change are wrong, and you have to remember to reprice anything not yet billed.', after: 'Open invoices follow the live rate automatically, so nothing goes out priced at a stale number.' },
    { lever: 'A customer’s payment is overdue', before: 'Someone has to remember to call and ask — or it just doesn’t happen and the amount sits uncollected.', after: 'Automated reminders run on the receivables ledger, so collection doesn’t depend on memory.' },
    { lever: 'The physical cash till at day-close', before: 'You reconcile the cash drawer against the day’s bills on your existing counter software.', after: 'Still the same today — Jwero does not run cash-drawer day-close yet. That piece is on the roadmap, not shipped.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills a billing cashier builds working inside Jwero.', '')}
  ${L.cards([
    { title: 'Live-rate pricing fluency', text: 'Explaining a price built from today’s rate, purity and making charges — visibly, on the invoice — builds customer trust faster than a hand calculation.' },
    { title: 'Digital reconciliation accuracy', text: 'Working from a receivables ledger instead of a paper register sharpens the habit of catching a mismatch before it becomes a dispute.' },
    { title: 'GST invoicing confidence', text: 'Computing CGST/SGST/IGST correctly, every time, on data-driven formulas rather than remembering the rule by hand.' },
    { title: 'Customer-facing composure under rate volatility', text: 'Handling "but the rate was different yesterday" conversations calmly, backed by a system that shows the number rather than an argument.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'The math is automated. You’re still the one at the counter.', '')}
  <p class="lead">The part of billing that’s pure arithmetic — repricing to the live rate, computing GST, remembering to chase an overdue payment — is what Jwero now handles, so it stops being where cashiers lose time or make errors under pressure. That doesn’t touch the parts that still need a person: handing over the invoice, reassuring a customer about a price, handling the cash till and day-close on your existing counter. Nothing here runs unattended — the system prices and drafts; you and the counter process still complete the transaction. As POS ships and more of the counter workflow comes into Jwero, the same principle holds: it will still wait for a person to run it.</p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete ways to add value using what Jwero already gives you.', '')}
  ${L.steps([
    { title: 'Use live-rate invoicing to build trust, not just speed', text: 'Show the customer the rate, purity and making-charge breakdown on the invoice — it answers the "why this price" question before it’s asked.' },
    { title: 'Keep receivables current', text: 'Check the receivables ledger regularly so reminders go out on real numbers, not stale ones from a missed update.' },
    { title: 'Flag mismatches between the invoice and your cash counter early', text: 'Since Jwero and your existing billing counter run side by side today, catching a gap between them quickly prevents it from compounding at day-close.' },
    { title: 'Learn the GST breakdown, not just the total', text: 'Being able to explain CGST/SGST/IGST on a bill builds customer confidence and reduces disputes at the counter.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('CASHIER QUESTIONS', 'Straight answers about the role, and what’s roadmap versus shipped.', '')}${L.faqBlock(cashierFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site’s own WhatsApp button runs on Jwero — <a href="#" data-wa="roles">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See live-rate invoicing in action.', 'Change the rate live in a demo and watch a draft invoice reprice in front of you.', 'roles')}
`,
};

module.exports = [storeManager, salesAssociate, cashier];
