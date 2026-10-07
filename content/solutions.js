const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Solutions', '/solutions'], [label]];

// Solutions hub, redesigned 2026-10-07 like the blog and guides hubs: search,
// filters by kind of business, problem and role, quick "I run…" picks, and one
// grid of every solution, problem and role page. Reuses [data-blog-hub].
const S_TOPICS = [['retail', 'Retail'], ['trade', 'Wholesale and trade'], ['mfg', 'Manufacturing'], ['brand', 'Brands and networks'], ['pain', 'By problem'], ['role', 'By role']];
const S_ITEMS = [
  ['retail', '/solutions/single-store', 'Single store', 'Counter, stock, books and customers together, without the owner remembering everything.'],
  ['retail', '/solutions/multi-store-chains', 'Multi-store and chains', 'Every branch on one system: prices, stock, schemes and reports.'],
  ['retail', '/solutions/gold-retail', 'Gold retail', 'Live-rate pricing, schemes and old gold exchange.'],
  ['retail', '/solutions/bridal', 'Bridal and wedding', 'Win the wedding, keep the family: shortlists, quotations and appointments.'],
  ['retail', '/solutions/diamond-retail', 'Diamond retail', 'Certified stones and certificate-first selling.'],
  ['retail', '/solutions/luxury-boutique', 'Luxury and boutique', 'Clienteling for high-value customers.'],
  ['retail', '/solutions/silver-retail', 'Silver retail', 'High volume, low margin, sold by weight.'],
  ['retail', '/solutions/lab-grown-diamond', 'Lab-grown diamond', 'Fast-moving stock with clear disclosure.'],
  ['retail', '/solutions/gemstone-retail', 'Gemstone retail', 'Every stone, its details and its story.'],
  ['retail', '/industries/retail', 'Jewellery retail overview', 'How Jwero fits every retail format, single store to chain.'],
  ['trade', '/solutions/diamond-traders', 'Loose diamond traders', 'Parcels by carat and count, certified stones, memo and your rate grid.'],
  ['trade', '/solutions/diamond-wholesale', 'Diamond jewellery wholesale', 'Private buyer catalogues on WhatsApp, memo and approval tracking.'],
  ['trade', '/solutions/gold-wholesale', 'Gold wholesale', 'Weight-based trade, buyer pricing and fine-metal accounts.'],
  ['trade', '/solutions/b2b-jewellery', 'B2B jewellery: silver, gemstone, pearl', 'Sell to retailers without living on the phone.'],
  ['trade', '/solutions/bullion-gold-traders', 'Bullion dealers and gold traders', 'Volume trades with nothing left ambiguous.'],
  ['mfg', '/solutions/manufacturers', 'Jewellery manufacturers', 'From jangad to despatch: orders, karigars, wastage and QC.'],
  ['mfg', '/solutions/casting-units', 'Casting units', 'Every tree and flask accounted, metal in and out.'],
  ['mfg', '/solutions/cad-services', 'CAD services', 'Design files to job files, revisions and approvals tracked.'],
  ['mfg', '/solutions/oem-manufacturers', 'OEM manufacturers', 'Making for other brands, with their orders and specs.'],
  ['mfg', '/solutions/export-houses', 'Export houses', 'Export orders, documents and process discipline.'],
  ['brand', '/solutions/jewellery-brands', 'Jewellery brands', 'One brand voice across every store and channel.'],
  ['brand', '/solutions/d2c-brands', 'D2C and online-first', 'Your own store plus the channels a website cannot do alone.'],
  ['brand', '/solutions/startups', 'Startups and first-time founders', 'Start with the system chains took decades to build.'],
  ['brand', '/solutions/franchise-networks', 'Franchise networks', 'Franchisor control, franchisee freedom.'],
  ['pain', '/solutions/pain/dead-stock', 'Dead stock', 'Lakhs frozen in designs nobody buys: see it, price it, clear it.'],
  ['pain', '/solutions/pain/lead-leakage', 'Lost enquiries', 'Enquiries dying in salespeople’s phones and chats.'],
  ['pain', '/solutions/pain', 'Every problem we solve', 'Follow-ups, scheme leakage, festival rush and more.'],
  ['role', '/roles/owner', 'Owner', 'Today’s sales, cash and stock on one screen.'],
  ['role', '/roles/next-gen-successor', 'Next-generation successor', 'Turn decades of memory into a business you can run.'],
  ['role', '/roles/chain-owner', 'Chain owner', 'Central prices, branch exceptions and one view of every store.'],
  ['role', '/roles/store-manager', 'Store manager', 'Run the floor on today’s numbers.'],
  ['role', '/roles/sales-associate', 'Sales associate', 'Walk up already knowing the customer.'],
  ['role', '/roles/cashier', 'Cashier', 'Bills at the live rate, payments and day close.'],
  ['role', '/roles/crm-executive', 'CRM and telecalling', 'Prioritised follow-ups, drafted for you.'],
  ['role', '/roles/marketing-manager', 'Marketing manager', 'One campaign, every channel, one record.'],
  ['role', '/roles/ecommerce-manager', 'Ecommerce manager', 'Synced stock and live-rate prices online.'],
  ['role', '/roles/inventory-manager', 'Inventory manager', 'See what is dying on the shelf, in every branch.'],
  ['role', '/roles/purchase-manager', 'Purchase manager', 'Reorder on data, not gut feel.'],
  ['role', '/roles/accountant', 'Accountant', 'Books that reconcile, with the Tally bridge.'],
  ['role', '/roles/b2b-manager', 'Wholesale and B2B manager', 'Every buyer on one thread, memo and orders tracked.'],
  ['role', '/roles/franchise-partner', 'Franchise partner', 'Brand pricing and catalogue, your own store.'],
  ['role', '/roles/production-manager', 'Production manager', 'Every job’s stage, gold in and out.'],
  ['role', '/roles/karigar', 'Karigar', 'Traceable jobs and accounted loss.'],
  ['role', '/roles/cad-designer', 'CAD designer', 'Files that do not die in chat.'],
  ['role', '/roles/quality-hallmarking', 'Quality and hallmarking', 'Certification and HUID status tracked.'],
];
const S_PICK = [
  ['I run one shop', '/solutions/single-store'], ['I run several branches', '/solutions/multi-store-chains'], ['I make jewellery', '/solutions/manufacturers'],
  ['I sell to retailers', '/solutions/b2b-jewellery'], ['I sell mostly online', '/solutions/d2c-brands'], ['I am just starting', '/solutions/startups'],
];
const sImg = (href) => { const fs = require('fs'), p = require('path'); const key = href.replace(/^\//, '').replace(/\//g, '--');
  return fs.existsSync(p.join(__dirname, '..', 'assets', 'og', key + '.jpg')) ? `/assets/og/${key}.jpg` : ''; };
const sEsc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
function solutionsHubBody() {
  const TL = Object.fromEntries(S_TOPICS); const count = (t) => S_ITEMS.filter((i) => i[0] === t).length;
  const card = ([t, h, title, d]) => { const img = sImg(h); return `<a class="bl-card" href="${h}" data-t="${t}" data-q="${sEsc((title + ' ' + d + ' ' + TL[t]).toLowerCase())}">${img ? `<img src="${img}" alt="" loading="lazy" width="1200" height="630">` : ''}<span class="bl-tag">${TL[t]}</span><b>${sEsc(title)}</b><span class="bl-desc">${sEsc(d)}</span></a>`; };
  return `
<section class="hero bl-hero"><div class="container hero-inner">
  <p class="eyebrow">SOLUTIONS</p>
  <h1>Find the page written for your jewellery business.</h1>
  <p class="sub">The same Jwero runs a single counter, a hundred-branch chain and a manufacturing floor. Pick your business, the problem you want solved, or your role.</p>
  <form class="bl-search" role="search" onsubmit="return false"><label for="bl-q" class="sr-only">Search solutions</label><input id="bl-q" type="search" placeholder="Search: bridal, wholesale, karigar, dead stock…" autocomplete="off" data-bl-q></form>
</div></section>
<section class="section bl-wrap" data-blog-hub data-unit="page|pages">
<div class="container">
  <nav class="bl-chips" aria-label="Filter solutions"><button type="button" class="is-on" data-bl-t="">All <i>${S_ITEMS.length}</i></button>${S_TOPICS.map(([k, l]) => `<button type="button" data-bl-t="${k}">${l} <i>${count(k)}</i></button>`).join('')}</nav>
  <div class="bl-start" data-bl-start>
    <div class="section-head"><p class="eyebrow">QUICK PICK</p><h2>Which describes you?</h2></div>
    <div class="bl-goals bl-goals-3">${S_PICK.map(([l, h]) => `<a href="${h}"><b>${l}</b><i>See your page →</i></a>`).join('')}</div>
  </div>
  <div class="section-head" style="margin-top:44px"><p class="eyebrow">EVERY PAGE</p><h2 data-bl-title>Every solution.</h2><p class="bl-count" aria-live="polite" data-bl-count>${S_ITEMS.length} pages</p></div>
  <div class="bl-grid" data-bl-grid>${S_ITEMS.map(card).join('')}</div>
  <p class="bl-empty" data-bl-empty hidden>Nothing matches that yet. <a href="#" data-wa="solutions">Tell us on WhatsApp what you run</a> and we will point you to the right page.</p>
  <p class="bl-more"><button type="button" class="btn btn-ghost" data-bl-more hidden>Show more</button></p>
</div>
</section>
${L.ctaBand('Not sure which page is yours?', 'Tell us what you sell and how; we will point you to the right page in one message.', 'solutions')}
`;
}
const solutionsHub = {
  slug: 'solutions',
  title: 'Solutions: Jwero for Every Kind of Jewellery Business | Jwero',
  description: 'Find the Jwero page for your jewellery business: retail, wholesale, manufacturing, brands and franchises, the problem you want solved, or your role. Search or filter.',
  breadcrumbs: [['Home', '/'], ['Solutions']],
  body: '',
};
solutionsHub.body = solutionsHubBody();

const singleStore = {
  slug: 'solutions/single-store',
  title: 'Jewellery Shop Software for a Single Store or Small Shop | Jwero',
  description: 'Run the whole shop on one system: billing, stock, purchase, books and staff, with customer memory, WhatsApp selling and schemes, live in days.',
  breadcrumbs: BC('Single store'),
  faqs: [
    { q: 'Is Jwero too much system for one store?', a: 'No — you start with three things: your customer list imported, your WhatsApp connected, your catalogue published. Everything else switches on only when you want it. One store with memory beats three without.' },
    { q: 'I am not technical. Can my team run this?', a: 'If they can use WhatsApp, they can run Jwero. Onboarding is done with you by a human, your data is imported for you, and AI drafts wait for a simple approve/edit tap.' },
    { q: 'What does it cost for a single store?', a: 'Entry plans are priced for single stores with monthly billing — see the pricing page. Measure it against one recovered customer, not against your billing software’s AMC.' },
    { q: 'I need my family or business partner to agree before I decide anything. What do I show them?', a: 'Bring them into the WhatsApp demo directly, or share the growth report sample — a plain-language weekly account is easier for a sceptical family member to evaluate than a sales pitch.' },
    { q: 'What if I try this and it doesn’t work for my shop?', a: 'You’ve changed nothing that can’t be undone — your billing software stays untouched, and your data exports any time you ask.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FOR SINGLE-STORE JEWELLERY BUSINESSES',
  h1: 'Run the whole shop from one screen: counter, stock, books and every customer.',
  sub: 'Billing at the live rate, stock valued today, purchases and vendor dues, staff attendance and the day-close, with every customer remembered and every enquiry answered in seconds. The same operating system a chain runs, sized for one counter.',
  primary: { href: '#', label: 'Tell us about your business', wa: 'single-store' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
  mock: L.mockShop(),
})}

${L.section(
  `${L.sectionHead('', 'Three quiet leaks in every single-store business.', '')}
  ${L.painRows([
    { quote: 'My best salesman left and took twenty years of customers in his pocket.', title: 'The memory belongs to the shop now', text: 'Every conversation, preference and promise lives on the store’s own record. Staff change; the relationship stays.' },
    { quote: 'Customers message at night. By morning they have bought elsewhere.', title: 'The counter that never closes', text: 'The AI workforce answers in minutes with real prices at today’s rate — and every draft waits for approval until you say otherwise.' },
    { quote: 'We spend on festival marketing and cannot tell if a single sale came from it.', title: 'Invitations, not blasts', text: 'The right customers hear from you before the festival, personally, with consent — and the growth report tells you what came back.' },
    { quote: 'Someone walked out today. I don’t know who, what they tried, or why they didn’t buy.', title: 'Know who is in your shop, and who just left', text: 'A live floor view shows who is browsing right now; when someone leaves without buying, Walkout Rescue drafts a WhatsApp follow-up naming the exact pieces they tried — your team sends it. See <a href="/products/showroom">Showroom Intelligence</a>.' },
  ])}`
)}

${L.jtbdBlock([
  { when: 'a customer messages after closing time', want: 'answer with real prices instantly', so: 'the enquiry doesn’t go to whoever replies first' },
  { when: 'a salesperson resigns', want: 'keep every customer relationship they built', so: 'the business doesn’t lose years of trust overnight' },
  { when: 'a festival is coming', want: 'invite the right customers personally instead of blasting the whole list', so: 'the marketing spend returns' },
])}

${L.section(
  `${L.sectionHead('THE FIRST 30 DAYS', 'Small start. Visible proof.', '')}
  ${L.steps([
    { title: 'Day 1: Set up, then days 2–7: Land', text: 'Set up in a day: customers imported, WhatsApp connected, catalogue live. Nothing ripped out — your billing software stays.' },
    { title: 'Weeks 2–3: First wins', text: 'Enquiries answered in minutes, birthday and anniversary greetings flowing with approvals, first catalogue shares.' },
    { title: 'Day 30: The report', text: 'Your first growth report: who came back, what they bought, what the system did. Judge us on that.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('ILLUSTRATIVE IMPACT MODEL', 'What this could be worth in a store like yours.', 'Illustrative model on a ₹6cr/year single store with ~1,500 active customers — not a measured result. Run your own numbers, or ask for a 30-day growth report once you’re live.')}
  ${L.stats([
    { n: '~₹30L/yr', l: 'modelled extra revenue from a repeat-rate lift of 22%→27% (+5pt)' },
    { n: '~₹1.2cr', l: 'modelled scheme float locked in, plus ~₹25L in top-up purchases — from 200 members at ₹5k/month' },
    { n: '~₹40L/yr', l: 'modelled WhatsApp-channel revenue from 2 attributed orders/week at a ₹40k average ticket' },
    { n: '~₹15L', l: 'modelled working capital freed by releasing 10% of a ₹1.5cr aged inventory' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('QUESTIONS SINGLE-STORE OWNERS ASK', 'What single-store owners ask before they switch.', '')}${L.faqBlock([
  { q: 'I need my family or partner to agree first. What do I show them?', a: 'Bring them into the WhatsApp demo directly, or share the growth report sample — easier to evaluate than a sales pitch.' },
  { q: 'What if it doesn’t work for my shop?', a: 'You’ve changed nothing that can’t be undone — your billing software stays untouched, and your data exports any time.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>
<p class="cta-note" style="margin-top:14px">Wedding season coming up? <a href="/blog/jewellery-software-wedding-season">Read how to get your shop system-ready before the rush →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="single-store">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('One store. One system. One month to proof.', 'Show us the store and we will show you the plan — on WhatsApp, tonight if you like.', 'single-store')}
`,
};

const chains = {
  slug: 'solutions/multi-store-chains',
  title: 'Multi-Store Jewellery Software for Chains | Jwero',
  description: 'Branch consistency, network-wide customer memory, central campaigns and owner-grade reporting — deployed branch by branch, without disrupting the season.',
  breadcrumbs: BC('Multi-store & chains'),
  faqs: [
    { q: 'How does rollout work for a multi-store business?', a: 'One pilot branch first, with success criteria you set. Then a staged rollout with per-branch configuration, training and a change-freeze around your peak season. No big-bang migrations.' },
    { q: 'Can head office control what branches do?', a: 'Yes — central price rules, campaign templates and role-based permissions per branch, with local flexibility only where you grant it.' },
    { q: 'We have an evaluation committee. What do you provide?', a: 'A security overview for IT, a migration plan for operations, an accounting-coexistence note for finance, and a pilot proposal with measurable exit criteria for the board.' },
    { q: 'We already invested in an ERP or CRM across branches. Why change now?', a: 'You likely don’t need to change it — most multi-store businesses keep their ERP for the ledger and add Jwero for the revenue side: customers, WhatsApp, schemes, follow-up, all synced across branches.' },
    { q: 'Won’t staff at different branches resist a new system differently?', a: 'Training is role-based and staged with the rollout — each branch gets the same onboarding as the pilot, not a rushed rollout after week one.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FOR MULTI-STORE BUSINESSES & CHAINS',
  h1: 'Every branch on one record: stock, cash, customers and staff, seen live from head office.',
  sub: 'You know exactly why the biggest players win: every branch consistent, every customer known, every gram and rupee counted, every campaign measured. Jwero gives your network that same spine — without a head-office IT department, and without betting the season on a rip-out.',
  primary: { href: '#', label: 'Talk to a specialist', wa: 'chains' },
  secondary: { href: '/book-demo', label: 'Book an evaluation demo' },
})}

${L.section(
  `${L.sectionHead('THREE PROBLEMS EVERY MULTI-STORE OWNER KNOWS', 'Consistency, memory and spend, solved centrally.', '')}
  ${L.painRows([
    { quote: 'Every branch runs its own way. I find out about problems a month later.', title: 'One spine, every branch', text: 'Consistent pricing rules, catalogues and processes from the centre; controlled exceptions with approvals; an owner rollup that surfaces drift now, not at month-end.' },
    { quote: 'A customer of our city store walks into our new mall store and nobody knows her.', title: 'Network-wide memory', text: 'One customer record across branches: her purchases, plan balance and preferences greet her at every counter you own.' },
    { quote: 'Marketing spend per branch is a black box.', title: 'Central campaigns, measured locally', text: 'Festival journeys run from head office, execute per branch, and report what came back — by branch, by campaign, by customer.' },
    { quote: 'I can’t tell which branch is earning its rent, or which salesperson is carrying the floor.', title: 'See every branch’s floor performance, beyond the ledger', text: 'Revenue-per-square-foot and a salesperson leaderboard sit side by side across every store. See <a href="/products/showroom">Showroom Intelligence</a>.' },
  ])}`
)}

${L.jtbdBlock([
  { when: 'a customer visits a branch she has never been to', want: 'have her full history and preferences on screen', so: 'every branch feels like the one she trusts' },
  { when: 'a new branch opens', want: 'launch it on the same system instead of starting a fresh implementation', so: 'growth doesn’t mean starting from zero every time' },
  { when: 'the owner is travelling', want: 'see every branch’s numbers from one phone', so: 'distance doesn’t mean losing control' },
])}

${L.section(
  `${L.sectionHead('ILLUSTRATIVE IMPACT MODEL', 'Chains have systems. Now every jeweller has one.', 'Illustrative model on a 5-store regional chain doing ₹35cr/year combined, ~7,500 active customers — not a measured result. Run your own numbers, or ask for a 30-day growth report once you’re live.')}
  ${L.stats([
    { n: '~₹1.1cr/yr', l: 'modelled revenue from a +4pt same-store repeat-rate lift across 7,500 customers' },
    { n: '~₹4.8cr', l: 'modelled scheme float locked in, plus ~₹1cr in top-up purchases — from 800 members chain-wide at ₹5k/month' },
    { n: '~₹45L/yr', l: 'modelled shrinkage saving from cutting count variance 0.4%→0.15% on ₹18cr average stock' },
    { n: '~₹18L/yr', l: 'modelled value of recovering 15 lost leads/month chain-wide at a 25% close rate' },
  ])}`
)}

${L.section(
  `${L.sectionHead('BUILT FOR THE EVALUATION', 'What your committee will ask. What we hand them.', '')}
  ${L.cards([
    { title: 'For IT', text: 'Isolated database per business, encryption, MFA/passkeys, role-based access — plus enterprise SSO (SAML/OIDC) and SCIM provisioning for chain deployments.', link: { href: '/trust/security', label: 'Security overview' } },
    { title: 'For finance', text: 'Your ledger stays in Tally or Zoho Books; the bridge is built. Jwero takes the revenue side.', link: { href: '/platform/integrations/tally', label: 'Coexistence note' } },
    { title: 'For operations', text: 'Pilot-branch rollout, training per role, season change-freeze, exit criteria you define.', link: { href: '/migration', label: 'Migration Centre' } },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('QUESTIONS EVALUATION COMMITTEES ASK', 'What IT, finance and operations will ask.', '')}${L.faqBlock([
  { q: 'We already invested in an ERP or CRM. Why change now?', a: 'You likely don’t need to — most multi-store businesses keep their ERP for the ledger and add Jwero for the revenue side, synced across branches.' },
  { q: 'Won’t staff at different branches resist differently?', a: 'Training is role-based and staged with the rollout — each branch gets the same onboarding as the pilot.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="chains">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('THE ROLLOUT', 'One branch earns the next.', 'The plan we run across a chain; each step has an exit test before the next.')}
  ${L.steps([
    { title: 'Week 1–2 — one pilot branch', text: 'Your toughest store. Customers, catalogue and stock imported; head-office rules set once; the branch runs the counter and WhatsApp with every AI action waiting for approval.' },
    { title: 'Week 3 — the exit test', text: 'Rate consistency, enquiry response time, day-close variance, the branch manager’s own verdict. If it fails, we stop.' },
    { title: 'Week 4–6 — three more branches', text: 'Head-office controls proven at the pilot go chain-wide; branch permissions per action; transfers with an approval trail.' },
    { title: 'After — the rest, around your season', text: 'Remaining branches in waves; nothing goes live in peak weeks. The written change-freeze is part of the plan.' },
  ])}`
, { tone: 'tint' })}

${L.ctaBand('Start with one branch.', 'Pick your toughest store. If the pilot doesn’t earn the rollout, it doesn’t deserve one.', 'chains', { enterprise: true })}
`,
};

const manufacturers = {
  slug: 'solutions/manufacturers',
  title: 'Jewellery Manufacturing Software: Job Work, Gold Loss | Jwero',
  description: 'Work-in-progress tracking with per-stage gold-loss norms, artisan job-work control, assay-verified intake, and B2B catalogue distribution to retail buyers.',
  breadcrumbs: BC('Manufacturers'),
  faqs: [
    { q: 'Can Jwero track gold loss per production stage?', a: 'Yes — an append-only work-in-progress ledger tracks fine weight through every stage with per-stage loss norms; abnormal loss is flagged the day it happens, not at year-end stocktake.' },
    { q: 'Does it handle artisan job-work?', a: 'Yes — job-work issue and receipt with weight reconciliation, gated by the rules you set per artisan and order.' },
    { q: 'Can wholesalers take orders on WhatsApp?', a: 'Yes — share live B2B catalogues with retailer-specific visibility, take orders in chat, and track the whole purchase-to-pay chain.' },
    { q: 'Is karigar wage settlement included?', a: 'Yes: karigar wage and payroll settlement — rate cards, work logs, khata ledger, settlement runs — is shipped, alongside job-work tracking itself (issue, receipt, weight reconciliation).' },
    { q: 'Will karigars resist being tracked more closely than the notebook they’re used to?', a: 'Frame it as job cards, not surveillance — the same records that catch abnormal loss also settle disputes in the karigar’s favour when they did nothing wrong. Job tracking protects both sides, not just the owner.' },
    { q: 'Our process is unusual — casting, CAD or export-specific. Does this fit?', a: 'Casting, CAD and export-house specific pages exist because these workflows genuinely differ — see <a href="/solutions/casting-units">casting units</a>, <a href="/solutions/cad-services">CAD services</a> or <a href="/solutions/export-houses">export houses</a> for your exact fit rather than a generic answer.' },
  ],
  body: `
${L.hero({
  eyebrow: 'FOR MANUFACTURERS & WHOLESALERS',
  h1: 'Software that weighs every stage, every karigar, every loss — the way you already do.',
  sub: 'Retail software dressed up for the workshop does not survive the workshop. Jwero’s manufacturing spine speaks your language: fine weight through every stage, loss norms per process, job-work under rules, intake verified by assay. And B2B selling happens on the channel your buyers already use.',
  primary: { href: '#', label: 'Talk shop with us', wa: 'manufacturers' },
  secondary: { href: '/tools/gold-loss-calculator', label: 'Try the Gold-Loss Calculator' },
})}

${L.section(
  `${L.sectionHead('WHERE THE MARGIN GOES', 'Three leaks in every production line.', '')}
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

${L.section(`<div class="stack-verdict"><strong>Run your own number:</strong> the <a href="/tools/gold-loss-calculator">Gold-Loss Calculator</a> takes your production volume and the gap between observed and explained stocktake loss, and shows what it’s worth at today’s rate: a self-assessment rather than an industry benchmark. For the full method, <a href="/blog/gold-loss-wastage-control-jewellery-manufacturing">read the gold-loss and wastage control guide →</a></div>`)}

${L.section(
  `${L.stats([
    { n: 'Per-stage', l: 'gold-loss norms with abnormal-loss flags' },
    { n: 'Assay-gated', l: 'raw material intake: weigh → assay → accept' },
    { n: 'Append-only', l: 'WIP ledger — history cannot be rewritten' },
    { n: 'B2B', l: 'catalogues with buyer-specific visibility' },
  ])}`
, { tone: 'ink' })}


${L.section(
  `${L.sectionHead('ILLUSTRATIVE IMPACT MODEL', 'What this could be worth on your factory floor.', 'Illustrative model on a ₹15cr/year manufacturer with a 40-karigar network — not a measured result. Run your own numbers, or ask for a 30-day growth report once you’re live.')}
  ${L.stats([
    { n: '~₹13L', l: 'modelled gold-loss saving from cutting loss by 0.4% on ₹8cr of metal through the factory' },
    { n: '~₹12L/yr', l: 'modelled from a +2pt design→order conversion on 500 B2B design views/year' },
    { n: '~₹8L/yr', l: 'modelled rush-job-work premiums avoided from a 15% faster average WIP cycle time' },
    { n: '~₹7.5L', l: 'modelled saving from cutting receiving discrepancies 2%→0.5% on ₹5cr of purchases' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('QUESTIONS MANUFACTURERS ASK', 'What manufacturers ask about job-work and loss.', '')}${L.faqBlock([
  { q: 'Will karigars resist being tracked more closely?', a: 'Think job cards, rather than surveillance: the same records that catch abnormal loss also settle disputes in the karigar’s favour. It protects both sides.' },
  { q: 'Our process is unusual — casting, CAD, export-specific. Does this fit?', a: 'See <a href="/solutions/casting-units">casting units</a>, <a href="/solutions/cad-services">CAD services</a> or <a href="/solutions/export-houses">export houses</a> for your exact fit.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="manufacturers">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('Bring one order, follow the grams.', 'In a demo, we track one production order end to end — issue, stages, loss, receipt. Your numbers, your call.', 'manufacturers', { enterprise: true })}
`,
};

module.exports = [solutionsHub, singleStore, chains, manufacturers];
