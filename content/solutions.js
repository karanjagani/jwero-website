const L = require('../lib');

const singleStore = {
  slug: 'solutions/single-store',
  title: 'For Single-Store Jewellers — Chain-Grade Systems, Family-Store Soul | Jwero',
  description: 'Keep the relationships that built your store — in a system that belongs to the store. Customer memory, WhatsApp selling and schemes, live in days.',
  faqs: [
    { q: 'Is Jwero too much system for one store?', a: 'No — you start with three things: your customer list imported, your WhatsApp connected, your catalogue published. Everything else switches on only when you want it. One store with memory beats three without.' },
    { q: 'I am not technical. Can my team run this?', a: 'If they can use WhatsApp, they can run Jwero. Onboarding is done with you by a human, your data is imported for you, and AI drafts wait for a simple approve/edit tap.' },
    { q: 'What does it cost for a single store?', a: 'Entry plans are priced for single stores with monthly billing — see the pricing page. Measure it against one recovered customer, not against your billing software’s AMC.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FOR SINGLE-STORE JEWELLERS',
  h1: 'Your grandfather remembered<br>every customer. Now the store can.',
  sub: 'The chains opened nearby with systems, apps and call centres. Your moat is the relationships — but they live in salespeople’s phones and fading memory. Jwero puts your store’s memory where it belongs: in the store. Then it puts that memory to work.',
  primary: { href: '#', label: 'See it on WhatsApp', wa: 'home' },
  secondary: { href: '/book-demo.html', label: 'Book a demo' },
  mock: L.mockMemory,
})}

${L.section(
  `${L.sectionHead('SOUND FAMILIAR?', 'Three quiet leaks in every family store.', '')}
  ${L.painRows([
    { quote: 'My best salesman left and took twenty years of customers in his pocket.', title: 'The memory belongs to the shop now', text: 'Every conversation, preference and promise lives on the store’s own record. Staff change; the relationship stays.' },
    { quote: 'Customers message at night. By morning they have bought elsewhere.', title: 'The counter that never closes', text: 'AI staff answer in minutes with real prices at today’s rate — and every draft waits for approval until you say otherwise.' },
    { quote: 'We spend on festival marketing and cannot tell if a single sale came from it.', title: 'Invitations, not blasts', text: 'The right customers hear from you before the festival — personally, with consent — and the Growth Report tells you what came back.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE FIRST 30 DAYS', 'Small start. Visible proof.', '')}
  ${L.steps([
    { title: 'Days 1–7: Land', text: 'Customers imported, WhatsApp connected, catalogue live. Nothing ripped out — your billing software stays.' },
    { title: 'Weeks 2–3: First wins', text: 'Enquiries answered in minutes, birthday and anniversary greetings flowing with approvals, first catalogue shares.' },
    { title: 'Day 30: The report', text: 'Your first Growth Report: who came back, what they bought, what the system did. Judge us on that.' },
  ])}`
, { tone: 'tint' })}

${L.ctaBand('One store. One system. One month to proof.', 'Show us the store and we will show you the plan — on WhatsApp, tonight if you like.', 'home')}
`,
};

const chains = {
  slug: 'solutions/multi-store-chains',
  title: 'For Multi-Store Jewellers & Regional Chains | Jwero',
  description: 'Branch consistency, network-wide customer memory, central campaigns and owner-grade reporting — deployed branch by branch, without disrupting the season.',
  faqs: [
    { q: 'How does rollout work for a chain?', a: 'One pilot branch first, with success criteria you set. Then a staged rollout with per-branch configuration, training and a change-freeze around your peak season. No big-bang migrations.' },
    { q: 'Can head office control what branches do?', a: 'Yes — central price rules, campaign templates and role-based permissions per branch, with local flexibility only where you grant it.' },
    { q: 'We have an evaluation committee. What do you provide?', a: 'A security overview for IT, a migration plan for operations, an accounting-coexistence note for finance, and a pilot proposal with measurable exit criteria for the board.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FOR MULTI-STORE & REGIONAL CHAINS',
  h1: 'The national chains have systems.<br>Yours should be better.',
  sub: 'You know exactly why the big chains win: every branch consistent, every customer known, every campaign measured. Jwero gives a regional chain that spine — without a head-office IT department, and without betting the season on a rip-out.',
  primary: { href: '#', label: 'Talk to a specialist', wa: 'default' },
  secondary: { href: '/book-demo.html', label: 'Book an evaluation demo' },
})}

${L.section(
  `${L.sectionHead('THE CHAIN OWNER’S THREE PROBLEMS', '', '')}
  ${L.painRows([
    { quote: 'Every branch runs its own way. I find out about problems a month later.', title: 'One spine, every branch', text: 'Consistent pricing rules, catalogues and processes from the centre; controlled exceptions with approvals; an owner rollup that surfaces drift now, not at month-end.' },
    { quote: 'A customer of our city store walks into our new mall store and nobody knows her.', title: 'Network-wide memory', text: 'One customer record across branches: her purchases, plan balance and preferences greet her at every counter you own.' },
    { quote: 'Marketing spend per branch is a black box.', title: 'Central campaigns, measured locally', text: 'Festival journeys run from head office, execute per branch, and report what came back — by branch, by campaign, by customer.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('BUILT FOR THE EVALUATION', 'What your committee will ask. What we hand them.', '')}
  ${L.cards([
    { title: 'For IT', text: 'Isolated database per business, encryption, MFA/passkeys, role-based access — and an honest roadmap for SSO.', link: { href: '/security.html', label: 'Security overview' } },
    { title: 'For finance', text: 'Your ledger stays in Tally or Zoho Books; the bridge is built. Jwero takes the revenue side.', link: { href: '/integrations.html', label: 'Coexistence note' } },
    { title: 'For operations', text: 'Pilot-branch rollout, training per role, season change-freeze, exit criteria you define.', link: { href: '/migration.html', label: 'Migration Centre' } },
  ])}`
, { tone: 'tint' })}

${L.ctaBand('Start with one branch.', 'Pick your toughest store. If the pilot doesn’t earn the rollout, it doesn’t deserve one.', 'default')}
`,
};

const manufacturers = {
  slug: 'solutions/manufacturers',
  title: 'For Manufacturers & Wholesalers — Job-Work, Gold-Loss, B2B Orders | Jwero',
  description: 'Work-in-progress tracking with per-stage gold-loss norms, artisan job-work control, assay-verified intake, and B2B catalogue distribution to retail buyers.',
  faqs: [
    { q: 'Can Jwero track gold loss per production stage?', a: 'Yes — an append-only work-in-progress ledger tracks fine weight through every stage with per-stage loss norms; abnormal loss is flagged the day it happens, not at year-end stocktake.' },
    { q: 'Does it handle artisan job-work?', a: 'Yes — job-work issue and receipt with weight reconciliation, gated by the rules you set per artisan and order.' },
    { q: 'Can wholesalers take orders on WhatsApp?', a: 'Yes — share live B2B catalogues with retailer-specific visibility, take orders in chat, and track the whole purchase-to-pay chain.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FOR MANUFACTURERS & WHOLESALERS',
  h1: 'You measure in milligrams.<br>Your systems should too.',
  sub: 'Retail software dressed up for the workshop does not survive the workshop. Jwero’s manufacturing spine speaks your language: fine weight through every stage, loss norms per process, job-work under rules, intake verified by assay — and B2B selling on the channel your buyers already use.',
  primary: { href: '#', label: 'Talk shop on WhatsApp', wa: 'default' },
  secondary: { href: '/book-demo.html', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('WHERE THE MARGIN GOES', '', '')}
  ${L.painRows([
    { quote: 'Between issue and receipt, gold evaporates — and I find out at stocktake.', title: 'A ledger that never forgets a milligram', text: 'Append-only WIP tracking with per-stage gold-loss norms. Abnormal loss flags the day it happens, with the stage and the hands it happened in.' },
    { quote: 'Job-work runs on trust and a notebook.', title: 'Job-work under rules', text: 'Issue and receipt with weight reconciliation, artisan-level norms and a documented trail — trust, plus verification.' },
    { quote: 'My buyers order over calls and screenshots; mistakes are constant.', title: 'B2B ordering that remembers', text: 'Live catalogues per buyer, orders captured in chat, purchase-to-pay tracked — every retailer relationship on a record.' },
  ])}`
)}

${L.section(
  `${L.stats([
    { n: 'Per-stage', l: 'gold-loss norms with abnormal-loss flags' },
    { n: 'Assay-gated', l: 'raw material intake: weigh → assay → accept' },
    { n: 'Append-only', l: 'WIP ledger — history cannot be rewritten' },
    { n: 'B2B', l: 'catalogues with buyer-specific visibility' },
  ])}`
, { tone: 'ink' })}

${L.ctaBand('Bring one order, follow the grams.', 'In a demo, we track one production order end to end — issue, stages, loss, receipt. Your numbers, your call.', 'default')}
`,
};

const deadStock = {
  slug: 'solutions/dead-stock',
  title: 'Dead Stock — The Silent Tax on Every Jewellery Business | Jwero',
  description: 'Idle inventory eats financing, insurance and opportunity every month. See it, price it, and move it — with ageing analysis and memory-driven selling.',
  faqs: [
    { q: 'How much does dead stock actually cost?', a: 'A piece that sits for a year costs roughly its financing rate plus insurance and handling — typically 12–18% of its value annually — plus the sales the locked capital never funded. The calculator on this page computes your number in 60 seconds.' },
    { q: 'How does Jwero help move dead stock?', a: 'First, visibility: ageing bands and slow-mover views expose what is sitting. Then, memory: match idle designs to customers whose taste fits, and put them in front of the right people on WhatsApp — instead of melting margin with blanket discounts.' },
  ],
  body: `
${L.hero({
  eyebrow: 'THE PAIN · DEAD STOCK',
  h1: 'Your showcase is full.<br>Some of it is asleep.',
  sub: 'Every jeweller has pieces that stopped moving — bought with conviction, financed at interest, polished weekly, sold never. Dead stock is the silent tax: you pay it monthly and no invoice ever arrives.',
  primary: { href: '/tools/dead-stock-calculator.html', label: 'Calculate your dead-stock tax' },
  secondary: { href: '/products/inventory.html', label: 'How inventory visibility works' },
})}

${L.section(
  `${L.sectionHead('THE COMPOUNDING MATH', 'Why sitting stock hurts twice.', '')}
  ${L.cards([
    { title: 'The carrying cost', text: 'Financing, insurance, handling: idle pieces typically bleed 12–18% of their value every year, silently.' },
    { title: 'The opportunity cost', text: 'Capital frozen in sleeping designs is capital not buying the fast movers your customers are asking for.' },
    { title: 'The decision fog', text: 'Without ageing data, every clearance decision is a guess — usually made late, usually too deep.' },
  ])}
  <div class="stack-verdict"><strong>Run your number:</strong> the <a href="/tools/dead-stock-calculator.html">Dead Stock Calculator</a> takes your inventory value, dead percentage and financing rate, and shows the monthly bleed. Results go to your WhatsApp — forward it to whoever approves the clearance.</div>`
)}

${L.section(
  `${L.sectionHead('THE JWERO PLAYBOOK', 'See it. Price it. Move it — with memory, not markdowns.', '')}
  ${L.steps([
    { title: 'Expose', text: 'Ageing bands and slow-mover views make the sleeping stock undeniable — by piece, category and branch.' },
    { title: 'Match', text: 'Customer memory finds the people whose taste and budget fit each idle design. A 200-gram temple set has a buyer; she just hasn’t been asked.' },
    { title: 'Move', text: 'Targeted WhatsApp catalogues to matched customers — personal invitations, not desperate discounts. Margin stays home.' },
  ])}`
, { tone: 'tint' })}

${L.ctaBand('Wake up the sleeping capital.', 'Calculate your dead-stock cost, then see how memory-driven selling moves what discounting cannot.', 'deadstock')}
`,
};

const leadLeakage = {
  slug: 'solutions/lead-leakage',
  title: 'Lead Leakage — Where Jewellery Enquiries Go to Die | Jwero',
  description: 'Enquiries arrive on WhatsApp, Instagram and calls — then vanish into personal phones and forgotten follow-ups. Jwero catches every one and follows up forever.',
  faqs: [
    { q: 'How many enquiries does a typical store lose?', a: 'Most stores cannot answer that question — which is the problem. Enquiries scattered across personal phones, DMs and missed calls have no owner, no record and no follow-up. The ones answered slowly or never are your quietest revenue leak.' },
    { q: 'How does Jwero stop the leak?', a: 'Every channel lands in one inbox attached to a customer record. AI staff draft replies in minutes and follow up on schedule until there is an outcome. Nothing depends on someone remembering.' },
  ],
  body: `
${L.hero({
  eyebrow: 'THE PAIN · LEAD LEAKAGE',
  h1: 'You paid for every enquiry.<br>Then most of them vanished.',
  sub: 'The reel worked. The hoarding worked. She messaged — along with forty others that week. Between personal phones, unanswered DMs and follow-ups nobody owned, most of that hard-won interest simply evaporated. This is the cheapest revenue you are losing.',
  primary: { href: '#', label: 'See the fix on WhatsApp', wa: 'whatsapp' },
  secondary: { href: '/products/whatsapp.html', label: 'WhatsApp Commerce' },
})}

${L.section(
  `${L.sectionHead('WHERE THE LEAK HIDES', '', '')}
  ${L.painRows([
    { quote: 'Enquiries come to whoever’s number is on the visiting card.', title: 'One inbox, owned by the business', text: 'WhatsApp, Instagram, Facebook and web chat land in one place, attached to customer records, visible to the team, assignable and accountable.' },
    { quote: 'We reply when we get time. Sometimes that is tomorrow.', title: 'Minutes, not mornings', text: 'AI staff draft knowledgeable replies with live prices in minutes, around the clock. Speed is the first conversion lever in jewellery enquiries.' },
    { quote: 'If she does not reply, we move on. Nobody follows up twice.', title: 'Follow-up that never forgets', text: 'Every open conversation is chased on schedule — politely, with context — until there is an outcome. The follow-up IS the sale.' },
  ])}`
)}

${L.ctaBand('Plug the leak this week.', 'Connect your number, and every enquiry from tomorrow onward gets caught, answered and followed. See it live.', 'whatsapp')}
`,
};

module.exports = [singleStore, chains, manufacturers, deadStock, leadLeakage];
