const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Solutions', '/solutions'], [label]];

const solutionsHub = {
  slug: 'solutions',
  title: 'Solutions — Jwero for Every Kind of Jewellery Business | Jwero',
  description: 'One operating system, routed to your business: 22 segments across retail, wholesale, manufacturing and beyond — plus every pain we solve.',
  breadcrumbs: [['Home', '/'], ['Solutions']],
  body: `
${L.hero({
  eyebrow: 'SOLUTIONS',
  h1: 'This platform understands your business. Show us which one it is.',
  sub: 'The same operating system runs a single counter, a hundred-branch chain, and a manufacturing bench. Find the page written in your language — 22 segments, all equal-status.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'solutions' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('RETAIL', '', '')}
  <div class="filter-chips">
    <a href="#retail" class="active">Retail</a><a href="#wholesale">Wholesale</a><a href="#manufacturing">Manufacturing</a><a href="#other">Brands, D2C & networks</a><a href="#pain">By pain</a>
  </div>
  <div class="router-grid" id="retail">
    <a class="router-card" href="/solutions/single-store"><div class="r-icon">◆</div><h3>Single store</h3><p>Everything lives in the owner’s head and staff phones — until now.</p></a>
    <a class="router-card" href="/solutions/multi-store-chains"><div class="r-icon">◇</div><h3>Multi-store & chains</h3><p>Can’t see stores without calling them? One spine fixes that.</p></a>
    <a class="router-card" href="/industries/retail"><div class="r-icon">✦</div><h3>Retail (hub)</h3><p>Orientation page routing every retail material and format.</p></a>
    <a class="router-card" href="/solutions/luxury-boutique"><div class="r-icon">✦</div><h3>Luxury & boutique</h3><p>Clienteling worthy of what you sell.</p></a>
    <a class="router-card" href="/solutions/bridal"><div class="r-icon">♥</div><h3>Bridal & wedding</h3><p>Win the wedding, keep the family.</p></a>
    <a class="router-card" href="/solutions/diamond-retail"><div class="r-icon">◈</div><h3>Diamond retail</h3><p>Certified stock, certified follow-up.</p></a>
    <a class="router-card" href="/solutions/gold-retail"><div class="r-icon">●</div><h3>Gold retail</h3><p>Gold moves fast. Your system should too.</p></a>
    <a class="router-card" href="/solutions/silver-retail"><div class="r-icon">○</div><h3>Silver retail</h3><p>High volume, low margin — automated.</p></a>
    <a class="router-card" href="/solutions/lab-grown-diamond"><div class="r-icon">◉</div><h3>Lab-grown diamond</h3><p>Built for the fastest-moving segment in jewellery.</p></a>
    <a class="router-card" href="/solutions/gemstone-retail"><div class="r-icon">◆</div><h3>Gemstone retail</h3><p>Every stone has a story. Keep both.</p></a>
  </div>`
)}

${L.section(
  `${L.sectionHead('WHOLESALE', '', '')}
  <div class="router-grid" id="wholesale">
    <a class="router-card" href="/solutions/diamond-wholesale"><h3>Diamond wholesale</h3><p>Your inventory, in every buyer’s pocket.</p></a>
    <a class="router-card" href="/solutions/gold-wholesale"><h3>Gold wholesale</h3><p>Wholesale gold, retail-grade systems.</p></a>
    <a class="router-card" href="/solutions/b2b-jewellery"><h3>B2B jewellery (silver, gemstone, pearl)</h3><p>Sell to the trade without living on the phone.</p></a>
  </div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('MANUFACTURING', '', '')}
  <div class="router-grid" id="manufacturing">
    <a class="router-card" href="/solutions/manufacturers"><h3>Manufacturers (hub)</h3><p>From jangad to despatch, one ledger.</p></a>
    <a class="router-card" href="/solutions/casting-units"><h3>Casting units</h3><p>Every tree, every flask, accounted.</p></a>
    <a class="router-card" href="/solutions/cad-services"><h3>CAD services</h3><p>Design files to job files, connected.</p></a>
    <a class="router-card" href="/solutions/oem-manufacturers"><h3>OEM manufacturers</h3><p>Your buyers’ brands. Your system.</p></a>
    <a class="router-card" href="/solutions/export-houses"><h3>Export houses</h3><p>Export-grade process discipline.</p></a>
  </div>`
)}

${L.section(
  `${L.sectionHead('BRANDS, D2C & NETWORKS', '', '')}
  <div class="router-grid" id="other">
    <a class="router-card" href="/solutions/bullion-gold-traders"><h3>Bullion dealers & gold traders</h3><p>Volume trades, zero ambiguity.</p></a>
    <a class="router-card" href="/solutions/jewellery-brands"><h3>Jewellery brands</h3><p>One brand voice across every counter and channel.</p></a>
    <a class="router-card" href="/solutions/d2c-brands"><h3>D2C & ecommerce-first</h3><p>Keep Shopify. Add the channels it can’t do.</p></a>
    <a class="router-card" href="/solutions/startups"><h3>Startups & first-time founders</h3><p>Start with the system chains took decades to build.</p></a>
    <a class="router-card" href="/solutions/franchise-networks"><h3>Franchise networks</h3><p>Franchisor control. Franchisee freedom.</p></a>
  </div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('BY PAIN', "What's eating your business?", '')}
  <div class="router-grid" id="pain">
    <a class="router-card" href="/solutions/pain/dead-stock"><div class="r-icon">▣</div><h3>Dead stock</h3><p>Lakhs frozen in designs nobody wants.</p></a>
    <a class="router-card" href="/solutions/pain/lead-leakage"><div class="r-icon">✉</div><h3>Lead leakage</h3><p>Enquiries dying in salesmen's chats.</p></a>
    <a class="router-card" href="/solutions/pain"><div class="r-icon">…</div><h3>All pains</h3><p>Follow-up, scheme leakage, festival chaos and more.</p></a>
  </div>`
)}

${L.ctaBand('Not sure which page is yours?', 'Tell us what you sell and how — we’ll route you in one message.', 'solutions')}
`,
};

const singleStore = {
  slug: 'solutions/single-store',
  title: 'For Single-Store Jewellery Businesses — One Operating System, Live in Days | Jwero',
  description: 'Keep the relationships that built your store — in a system that belongs to the store. Customer memory, WhatsApp selling and schemes, live in days.',
  breadcrumbs: BC('Single store'),
  faqs: [
    { q: 'Is Jwero too much system for one store?', a: 'No — you start with three things: your customer list imported, your WhatsApp connected, your catalogue published. Everything else switches on only when you want it. One store with memory beats three without.' },
    { q: 'I am not technical. Can my team run this?', a: 'If they can use WhatsApp, they can run Jwero. Onboarding is done with you by a human, your data is imported for you, and AI drafts wait for a simple approve/edit tap.' },
    { q: 'What does it cost for a single store?', a: 'Entry plans are priced for single stores with monthly billing — see the pricing page. Measure it against one recovered customer, not against your billing software’s AMC.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FOR SINGLE-STORE JEWELLERY BUSINESSES',
  h1: 'Everything lives in your head and your staff’s phones. Now it can live in one system.',
  sub: 'Run the whole shop from one screen — every customer remembered, every enquiry answered in seconds, without hiring anyone. The same operating system a chain runs, sized for one counter.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'single-store' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
  mock: L.mockMemory,
})}

${L.section(
  `${L.sectionHead('SOUND FAMILIAR?', 'Three quiet leaks in every single-store business.', '')}
  ${L.painRows([
    { quote: 'My best salesman left and took twenty years of customers in his pocket.', title: 'The memory belongs to the shop now', text: 'Every conversation, preference and promise lives on the store’s own record. Staff change; the relationship stays.' },
    { quote: 'Customers message at night. By morning they have bought elsewhere.', title: 'The counter that never closes', text: 'The AI workforce answers in minutes with real prices at today’s rate — and every draft waits for approval until you say otherwise.' },
    { quote: 'We spend on festival marketing and cannot tell if a single sale came from it.', title: 'Invitations, not blasts', text: 'The right customers hear from you before the festival — personally, with consent — and the growth report tells you what came back.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('A DAY IN YOUR SHOP ON JWERO', 'Morning to night.', '')}
  ${L.steps([
    { title: 'Morning', text: 'The AI workforce has already answered three overnight WhatsApp enquiries with today’s gold rate. Your team reviews and approves the ones waiting.' },
    { title: 'Afternoon', text: 'A walk-in mentions her daughter’s wedding — your staff notes it once. From now on, every occasion journey knows it too.' },
    { title: 'Evening', text: 'A scheme instalment reminder goes out to five members. One replies asking for a plan comparison — the AI drafts it, your team sends it.' },
    { title: 'Night', text: 'An 11pm enquiry gets a priced reply while you sleep. It’s waiting for your approval tap in the morning, not gone to a competitor.' },
  ], 4)}`
, { tone: 'tint' })}

${L.jtbdBlock([
  { when: 'a customer messages after closing time', want: 'answer with real prices instantly', so: 'the enquiry doesn’t go to whoever replies first' },
  { when: 'a salesperson resigns', want: 'keep every customer relationship they built', so: 'the business doesn’t lose years of trust overnight' },
  { when: 'a festival is coming', want: 'invite the right customers personally, not blast everyone', so: 'the marketing spend actually returns' },
])}

${L.section(
  `${L.sectionHead('THE FIRST 30 DAYS', 'Small start. Visible proof.', '')}
  ${L.steps([
    { title: 'Days 1–7: Land', text: 'Customers imported, WhatsApp connected, catalogue live. Nothing ripped out — your billing software stays.' },
    { title: 'Weeks 2–3: First wins', text: 'Enquiries answered in minutes, birthday and anniversary greetings flowing with approvals, first catalogue shares.' },
    { title: 'Day 30: The report', text: 'Your first growth report: who came back, what they bought, what the system did. Judge us on that.' },
  ])}`
)}

${L.ctaBand('One store. One system. One month to proof.', 'Show us the store and we will show you the plan — on WhatsApp, tonight if you like.', 'single-store')}
`,
};

const chains = {
  slug: 'solutions/multi-store-chains',
  title: 'For Multi-Store Jewellery Businesses & Chains | Jwero',
  description: 'Branch consistency, network-wide customer memory, central campaigns and owner-grade reporting — deployed branch by branch, without disrupting the season.',
  breadcrumbs: BC('Multi-store & chains'),
  faqs: [
    { q: 'How does rollout work for a multi-store business?', a: 'One pilot branch first, with success criteria you set. Then a staged rollout with per-branch configuration, training and a change-freeze around your peak season. No big-bang migrations.' },
    { q: 'Can head office control what branches do?', a: 'Yes — central price rules, campaign templates and role-based permissions per branch, with local flexibility only where you grant it.' },
    { q: 'We have an evaluation committee. What do you provide?', a: 'A security overview for IT, a migration plan for operations, an accounting-coexistence note for finance, and a pilot proposal with measurable exit criteria for the board.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FOR MULTI-STORE BUSINESSES & CHAINS',
  h1: 'Every branch consistent. Every customer, one record.',
  sub: 'You know exactly why the biggest players win: every branch consistent, every customer known, every campaign measured. Jwero gives your network that same spine — without a head-office IT department, and without betting the season on a rip-out.',
  primary: { href: '#', label: 'Talk to a specialist', wa: 'chains' },
  secondary: { href: '/book-demo', label: 'Book an evaluation demo' },
})}

${L.section(
  `${L.sectionHead('THREE PROBLEMS EVERY MULTI-STORE OWNER KNOWS', '', '')}
  ${L.painRows([
    { quote: 'Every branch runs its own way. I find out about problems a month later.', title: 'One spine, every branch', text: 'Consistent pricing rules, catalogues and processes from the centre; controlled exceptions with approvals; an owner rollup that surfaces drift now, not at month-end.' },
    { quote: 'A customer of our city store walks into our new mall store and nobody knows her.', title: 'Network-wide memory', text: 'One customer record across branches: her purchases, plan balance and preferences greet her at every counter you own.' },
    { quote: 'Marketing spend per branch is a black box.', title: 'Central campaigns, measured locally', text: 'Festival journeys run from head office, execute per branch, and report what came back — by branch, by campaign, by customer.' },
  ])}`
)}

${L.jtbdBlock([
  { when: 'a customer visits a branch she has never been to', want: 'have her full history and preferences on screen', so: 'every branch feels like the one she trusts' },
  { when: 'a new branch opens', want: 'launch it on the same system, not a fresh implementation', so: 'growth doesn’t mean starting from zero every time' },
  { when: 'the owner is travelling', want: 'see every branch’s numbers from one phone', so: 'distance doesn’t mean losing control' },
])}

${L.section(
  `${L.sectionHead('BUILT FOR THE EVALUATION', 'What your committee will ask. What we hand them.', '')}
  ${L.cards([
    { title: 'For IT', text: 'Isolated database per business, encryption, MFA/passkeys, role-based access — and an honest roadmap for SSO.', link: { href: '/trust/security', label: 'Security overview' } },
    { title: 'For finance', text: 'Your ledger stays in Tally or Zoho Books; the bridge is built. Jwero takes the revenue side.', link: { href: '/platform/integrations/tally', label: 'Coexistence note' } },
    { title: 'For operations', text: 'Pilot-branch rollout, training per role, season change-freeze, exit criteria you define.', link: { href: '/migration', label: 'Migration Centre' } },
  ])}`
, { tone: 'tint' })}

${L.ctaBand('Start with one branch.', 'Pick your toughest store. If the pilot doesn’t earn the rollout, it doesn’t deserve one.', 'chains', { enterprise: true })}
`,
};

const manufacturers = {
  slug: 'solutions/manufacturers',
  title: 'For Manufacturers & Wholesalers — Job-Work, Gold-Loss, B2B Orders | Jwero',
  description: 'Work-in-progress tracking with per-stage gold-loss norms, artisan job-work control, assay-verified intake, and B2B catalogue distribution to retail buyers.',
  breadcrumbs: BC('Manufacturers'),
  faqs: [
    { q: 'Can Jwero track gold loss per production stage?', a: 'Yes — an append-only work-in-progress ledger tracks fine weight through every stage with per-stage loss norms; abnormal loss is flagged the day it happens, not at year-end stocktake.' },
    { q: 'Does it handle artisan job-work?', a: 'Yes — job-work issue and receipt with weight reconciliation, gated by the rules you set per artisan and order.' },
    { q: 'Can wholesalers take orders on WhatsApp?', a: 'Yes — share live B2B catalogues with retailer-specific visibility, take orders in chat, and track the whole purchase-to-pay chain.' },
    { q: 'Is karigar wage settlement included?', a: 'Job-work tracking — issue, receipt, weight reconciliation — is shipped today. Wage and payroll settlement for karigars is on the public roadmap, and we say so rather than imply otherwise.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FOR MANUFACTURERS & WHOLESALERS',
  h1: 'You measure in milligrams. Your systems should too.',
  sub: 'Retail software dressed up for the workshop does not survive the workshop. Jwero’s manufacturing spine speaks your language: fine weight through every stage, loss norms per process, job-work under rules, intake verified by assay — and B2B selling on the channel your buyers already use.',
  primary: { href: '#', label: 'Talk shop on WhatsApp', wa: 'manufacturers' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('WHERE THE MARGIN GOES', '', '')}
  ${L.painRows([
    { quote: 'Between issue and receipt, gold evaporates — and I find out at stocktake.', title: 'A ledger that never forgets a milligram', text: 'Append-only WIP tracking with per-stage gold-loss norms. Abnormal loss flags the day it happens, with the stage and the hands it happened in.' },
    { quote: 'Job-work runs on trust and a notebook.', title: 'Job-work under rules', text: 'Issue and receipt with weight reconciliation, artisan-level norms and a documented trail — trust, plus verification.' },
    { quote: 'My buyers order over calls and screenshots; mistakes are constant.', title: 'B2B ordering that remembers', text: 'Live catalogues per buyer, orders captured in chat, purchase-to-pay tracked — every retailer relationship on a record.' },
  ])}`
)}

${L.jtbdBlock([
  { when: 'gold moves between stages of production', want: 'see exactly where every gram is and what was lost', so: 'abnormal loss gets caught the day it happens, not at audit' },
  { when: 'a karigar takes a job-work order', want: 'issue and receive weight against a documented rule', so: 'disputes don’t become relationship damage' },
])}

${L.section(
  `${L.stats([
    { n: 'Per-stage', l: 'gold-loss norms with abnormal-loss flags' },
    { n: 'Assay-gated', l: 'raw material intake: weigh → assay → accept' },
    { n: 'Append-only', l: 'WIP ledger — history cannot be rewritten' },
    { n: 'B2B', l: 'catalogues with buyer-specific visibility' },
  ])}`
, { tone: 'ink' })}

${L.honestGapsBlock(['Karigar wage and payroll settlement is on the roadmap — job-work issue/receipt tracking itself is shipped today.'])}

${L.ctaBand('Bring one order, follow the grams.', 'In a demo, we track one production order end to end — issue, stages, loss, receipt. Your numbers, your call.', 'manufacturers', { enterprise: true })}
`,
};

module.exports = [solutionsHub, singleStore, chains, manufacturers];
