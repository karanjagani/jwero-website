const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Roles', '/roles'], [label]];

const b2bManagerFaqs = [
  { q: 'Can I keep different prices and catalogues for different buyers?', a: 'Yes — catalogue visibility and pricing can be tiered by buyer, so each retail account sees their own terms without you rebuilding a price list by hand for every relationship.' },
  { q: 'How do I stop losing track of memos and pending approvals across dozens of buyers?', a: 'Every buyer’s order and memo history sits on one record, and order status is tracked per item — so “where did we leave that memo” becomes a lookup, not a phone call to the back office.' },
  { q: 'Will AI start messaging my trade buyers without me knowing?', a: 'No. The AI workforce can draft follow-ups on stale memos or quiet accounts, but every message sits in an approval queue until you or your team approves it — nothing goes out to a buyer unseen.' },
  { q: 'Does this replace the trust I’ve built with buyers over years?', a: 'No — the system holds the record, not the relationship. You still make the calls, negotiate terms and read the room; Jwero just makes sure you walk into every conversation with the buyer’s full history in front of you instead of relying on memory.' },
];

const b2bManagerRole = {
  slug: 'roles/b2b-manager',
  title: 'For Wholesale / B2B Managers — Every Buyer, One Thread | Jwero',
  description: 'How Jwero changes a wholesale/B2B manager’s day: one record per buyer, memo and order tracking, and AI-drafted follow-ups that wait for your approval.',
  breadcrumbs: BC('Wholesale / B2B manager'),
  faqs: b2bManagerFaqs,
  body: `
${L.hero({
  eyebrow: 'TRADE & PARTNERSHIPS · B2B MANAGER',
  h1: 'Every buyer, every memo, every order — in one thread, not a register.',
  sub: 'Right now, a wholesale desk runs on phone calls, screenshots and whoever remembers which buyer asked for what. Jwero gives every retail buyer relationship one record — order history, memo status and pricing terms in one place, with follow-ups drafted for you and sent only after you say yes.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'Morning to night, buyer by buyer.', '')}
  ${L.impactGrid([
    {
      lever: 'Tracking who owes what memo response',
      before: 'A notebook or a memory of which buyer has which pieces on memo, chased by phone when a stone needs to move.',
      after: 'Every memo and its approval status sits on the buyer’s record — a status check is a lookup, not a round of calls.',
    },
    {
      lever: 'Sharing prices with different buyers',
      before: 'Rebuilding or re-explaining a price list by hand every time the rate moves or a new buyer comes on.',
      after: 'A live-price catalogue shared on WhatsApp, with visibility set per buyer once and applied automatically after that.',
      link: { href: '/products/catalog', label: 'See the catalogue' },
    },
    {
      lever: 'Noticing a buyer has gone quiet',
      before: 'A retailer stops reordering and nobody notices until the relationship is effectively gone.',
      after: 'The buyer’s order history makes a stalled account visible, and a follow-up gets drafted before it’s too late to matter.',
    },
    {
      lever: 'Answering "what did we agree with them?"',
      before: 'Digging through old WhatsApp threads or asking whoever took the call for that buyer.',
      after: 'Every quote and order sits on the buyer’s record with the terms and date attached — the dispute becomes a lookup.',
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills that scale past what memory ever could.', '')}
  ${L.cards([
    { title: 'Structured account management, not memory-based tracking', text: 'Every buyer’s order history, memo status and preferences live on one record — you manage the whole book the same disciplined way, whether it’s five buyers or fifty.' },
    { title: 'Reading a stalled account before it’s lost', text: 'Order history makes a quiet buyer visible early, so you learn to act on a pattern instead of reacting to a lost account after the fact.' },
    { title: 'Negotiating from a position of full context', text: 'Walking into a call already knowing a buyer’s order history and past terms changes how you negotiate — less catching up, more actually closing.' },
    { title: 'Running a catalogue like a channel, not a favour', text: 'Buyer-tiered catalogue sharing turns "send me the price list" into a structured, repeatable part of how you sell — not a one-off WhatsApp forward.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'AI drafts and tracks. You still make the call.', '')}
  <p class="lead">The AI workforce takes the repetitive load off a B2B manager’s plate — drafting follow-ups on stale memos, tracking order status, and flagging buyers who’ve gone quiet. None of it reaches a buyer without your approval: every drafted message sits in a queue until you review, edit or send it. What stays entirely yours is the part that was never going to be automated anyway — reading a buyer’s tone on a call, negotiating terms, deciding which relationship gets the extra attention this quarter. Jwero clears the memo-chasing and re-typing off your day; the trade relationships stay yours to run.</p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete ways to get more out of the system.', '')}
  ${L.steps([
    { title: 'Set up buyer-tiered catalogue sharing once', text: 'Configure pricing and visibility per buyer so every future catalogue share is automatic, not a manual re-explain.' },
    { title: 'Let the reorder view do the noticing', text: 'Check which buyers haven’t reordered recently and approve the AI-drafted nudge before a relationship goes cold on its own.' },
    { title: 'Keep memo status current on the record', text: 'Log memo and approval status as it happens so any teammate — not just you — can answer a buyer’s question at a glance.' },
    { title: 'Approve, don’t rewrite, when the draft is right', text: 'Review AI-drafted follow-ups quickly rather than starting from a blank message each time — edit only what actually needs your judgment.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('B2B MANAGER QUESTIONS', 'Memos, pricing and trust — answered.', '')}${L.faqBlock(b2bManagerFaqs)}`)}

${L.ctaBand('Bring one buyer relationship.', 'We’ll show a private catalogue, a memo, and the follow-up that keeps it moving.', 'roles')}
`,
};

const franchisePartnerFaqs = [
  { q: 'Does head office control everything, or do I still run my branch my way?', a: 'Central price rules and brand catalogue sit under the franchisor’s control, but day-to-day running of your branch stays yours — staff, floor operations and local exceptions route through an approval, they’re not taken away from you.' },
  { q: 'If a customer from another franchise branch walks into mine, will I know who they are?', a: 'Yes — the customer record is shared across branches in the network, so their purchase history and preferences show up at your counter too, not just the one they usually visit.' },
  { q: 'Can I ever price or promote something differently from the rest of the network?', a: 'Local exceptions are possible, but they route through the franchisor’s approval rather than happening silently — brand consistency stays intact while giving you a channel to flag what your branch specifically needs.' },
  { q: 'Am I just becoming an operator with no real decisions left to make?', a: 'No — the system standardises pricing, catalogue and brand consistency, which is exactly the admin overhead most franchisees want off their plate. Local judgment — staffing, customer relationships, day-to-day floor decisions — stays with you.' },
];

const franchisePartnerRole = {
  slug: 'roles/franchise-partner',
  title: 'For Franchise Partners — Franchisor Control, Franchisee Freedom | Jwero',
  description: 'How Jwero changes a franchise partner’s day: brand-consistent pricing/catalogue under franchisor control, with structured local operation, not rip-and-replace.',
  breadcrumbs: BC('Franchise partner'),
  faqs: franchisePartnerFaqs,
  body: `
${L.hero({
  eyebrow: 'TRADE & PARTNERSHIPS · FRANCHISE PARTNER',
  h1: 'Franchisor control. Franchisee freedom. One system underneath both.',
  sub: 'Running a branch under someone else’s brand means constantly balancing head office’s standards against your own local judgment. Jwero puts pricing and catalogue consistency under the franchisor’s control while your branch keeps a structured way to run day-to-day and flag the exceptions that actually matter.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'Morning to night, on one branch inside a bigger network.', '')}
  ${L.impactGrid([
    {
      lever: 'Getting a festival campaign live in your branch',
      before: 'Waiting on a PDF or a WhatsApp forward from head office, then adapting it yourself and hoping it matches what other branches are doing.',
      after: 'Head office pushes the campaign template once through the shared system — your branch gets it in brand-consistent form, no reinventing it locally.',
    },
    {
      lever: 'Serving a customer who usually visits a different branch',
      before: 'A blank slate at your counter — no idea what they bought before, what they prefer, or what’s owed on a scheme.',
      after: 'The customer record is shared across the network, so their history shows up at your counter the same as it would at their usual branch.',
    },
    {
      lever: 'Wanting a local price or promotion exception',
      before: 'Either you quietly do it your own way and risk a brand-standards conflict, or you don’t do it at all.',
      after: 'Local exceptions route through an approval under franchisor control — you get a real channel to flag it, not a silent workaround or a flat no.',
    },
    {
      lever: 'Onboarding your branch onto shared systems',
      before: 'Every new location figures out its own setup, at its own pace, with its own inconsistencies.',
      after: 'The same branch structure and role-based access rolls out identically each time — a repeatable setup, not a one-off project.',
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Operating with franchisor-grade discipline while keeping local control.', '')}
  ${L.cards([
    { title: 'Brand-consistent operation without losing local judgment', text: 'Central pricing and catalogue rules mean you’re never guessing what "on-brand" looks like — while staffing and floor decisions stay yours to make.' },
    { title: 'A network view instead of a single-branch view', text: 'Shared customer records mean you learn to think about a customer relationship across the whole network, not just the four walls of your branch.' },
    { title: 'A structured way to push for exceptions', text: 'Routing local requests through approval instead of working around head office builds a track record — you become the branch whose asks get heard because they’re documented and reasonable.' },
    { title: 'Less admin overhead, more time on the floor', text: 'Standardised setup and pricing rules cut the admin work of running "your own version" of the brand, freeing time for the customer relationships that are genuinely local.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'AI keeps the network consistent. You still run your branch.', '')}
  <p class="lead">The system handles the parts that used to require constant back-and-forth with head office — pushing campaign templates, keeping pricing consistent, tracking a customer across branches. AI-drafted follow-ups and reports still wait for a human approval before anything reaches a customer. What stays with you as the franchise partner is everything that was always local: reading your branch’s customers, managing your staff, deciding how to run the floor day-to-day, and making the case for the exception your branch genuinely needs. Nothing here replaces the franchisee — it removes the admin friction of being one.</p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete ways to get more out of the system.', '')}
  ${L.steps([
    { title: 'Keep your branch’s customer record current', text: 'Log preferences and history as customers visit so any branch in the network — including yours — can serve them well.' },
    { title: 'Use the shared record when a network customer walks in', text: 'Check the record before assuming you’re starting from scratch with a customer who’s new to your branch specifically.' },
    { title: 'Route exceptions through approval instead of around it', text: 'Flag the local pricing or promotion changes your branch needs through the system, building a documented track record with head office.' },
    { title: 'Adopt shared campaign and catalogue rollouts as they land', text: 'Apply what head office pushes centrally rather than rebuilding your own version — it’s less work and keeps the brand consistent.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('FRANCHISE PARTNER QUESTIONS', 'Control, independence and consistency — answered.', '')}${L.faqBlock(franchisePartnerFaqs)}`)}

${L.ctaBand('Start with one branch.', 'Pick your branch as the pilot — we’ll show shared customer records and brand-consistent pricing in one message.', 'roles')}
`,
};

module.exports = [b2bManagerRole, franchisePartnerRole];
