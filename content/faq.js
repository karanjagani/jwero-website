const L = require('../lib');

// The comprehensive FAQ / objection-handling hub. Every answer here is written to the same
// honesty rule as the rest of the site: Tier-A capabilities stated plainly, Tier-C gaps stated
// just as plainly, nothing promised that isn't shipped or decided (pricing numbers, trial
// mechanics). This is the single most complete objection-handling surface on the site — every
// other page's FAQ section is a relevant subset of what lives here in full.

const CATEGORIES = [
  {
    id: 'product', label: 'What Jwero is',
    items: [
      { q: 'What is Jwero?', a: 'The AI operating system for jewellery business — one place where customers, catalogue, inventory, WhatsApp/Instagram selling, gold schemes and marketing all share the same record, with an AI workforce that drafts the work under your approval.' },
      { q: 'Is Jwero a CRM or an ERP?', a: 'Both jobs, one record. The CRM side — customers, follow-ups, marketing — is the core. Accounting stays in your Tally or Zoho Books via built-in bridges rather than being replaced.' },
      { q: 'Who is Jwero actually for?', a: 'Single stores to multi-store chains, wholesalers, manufacturers, franchise networks and online-first brands. The same system; modules switch on per business type. See <a href="/solutions">all 22 solutions</a>.' },
      { q: 'Does Jwero replace my current software?', a: 'Usually it sits alongside your accounting software (via the Tally/Zoho bridge) and replaces the scattered tools — the WhatsApp app, the Excel customer list, the diary follow-ups, the PDF catalogue.' },
      { q: 'What does "AI-first" actually mean here, concretely?', a: 'An AI workforce that drafts replies, follow-ups and campaigns — 240+ governed actions, approval queues, daily caps and a five-scope kill switch. It proposes; your team disposes.' },
      { q: 'Can AI actually increase my sales?', a: 'It recovers sales you are currently losing — unanswered enquiries, forgotten follow-ups, dormant customers, occasions nobody tracked. That recovered revenue is what the weekly growth report measures.' },
      { q: 'Will AI replace my staff?', a: 'No. AI proposes, your people dispose. Salespeople close more because the AI remembers every customer for them before they even pick up the conversation.' },
      { q: 'Can AI recommend jewellery to customers?', a: 'AI-assisted catalogue shares match pieces to a customer’s recorded taste and budget today. A predictive recommendation engine is on the roadmap, not shipped — we won’t call today’s matching "AI recommendations" in the machine-learning sense.' },
      { q: 'Who owns my data?', a: 'You do. Every business runs in its own isolated database, and you can export everything, any time, in standard formats. That is a design decision, not a support favour.' },
      { q: 'Is there a mobile app?', a: 'Yes — running the business from your phone (approvals, enquiries, sales, stock) is part of the product. Confirm exact app-store availability for your case on a demo before assuming a specific platform.' },
      { q: 'What is the weekly growth report?', a: 'A plain-language WhatsApp report to the owner: how many past customers came back, how many appointments were booked, how much revenue the system brought back. Proof, delivered weekly, not a dashboard you have to remember to open.' },
      { q: 'Is a gold savings scheme even legal to run — isn’t that an NBFC or interest product?', a: 'Every plan is framed and operated as an advance against a future purchase — benefits are paid as bonus gold or a discount, never as interest. That’s a framing discipline the product enforces, not a legal opinion; confirm your specific scheme structure with your own counsel. See <a href="/products/gold-schemes">gold schemes</a>.' },
      { q: 'My competitors don’t use anything like this — why be first?', a: 'Regional chains already run on systems like this; independent jewellers have been the ones without one. Being early on the revenue side — WhatsApp commerce, digital catalogues, gold schemes — is a customer-facing advantage today, not a future one.' },
      { q: 'What does Jwero NOT do yet — honestly?', a: 'POS counter cash/day-close billing, girvi, karigar payroll, offline mode, a vernacular product interface, a public developer API, and e-invoice/GSTR automation. All on the <a href="/roadmap">public roadmap</a>, none shipped — we say so before you buy, not after.' },
    ],
  },
  {
    id: 'whatsapp', label: 'WhatsApp & Meta',
    items: [
      { q: 'Can customers actually buy on WhatsApp?', a: 'Yes — browse the catalogue at live prices, ask questions, book appointments, and order inside the chat.' },
      { q: 'Will my WhatsApp number get banned?', a: 'Jwero uses the official WhatsApp Business API: Meta’s template approval lifecycle, compliance checks before anything sends, and a test-broadcast simulator to catch problems before customers see them. Ban risk comes from unofficial bulk-messaging tools — that is specifically what this isn’t.' },
      { q: 'Can I keep my existing WhatsApp number?', a: 'Yes — your number moves onto the official Business API and keeps working. Customers notice faster answers, not a new number.' },
      { q: 'What’s the difference between normal WhatsApp and the Business API?', a: 'Normal WhatsApp lives on one phone. The official API lets your whole team — and the AI workforce — answer from one shared inbox, with records, automation, and none of the ban-risk grey zone of bulk tools.' },
      { q: 'Can AI reply to customers automatically?', a: 'Within limits you set: approval mode by default, daily caps, quiet hours, and a kill switch that stops it instantly at five scopes.' },
      { q: 'What languages can the AI speak?', a: 'The AI voice assistant speaks 14 languages today. Chat replies follow the customer’s language where the underlying models support it.' },
      { q: 'How do broadcasts work without becoming spam?', a: 'Consent-based lists, per-customer message-fatigue scoring, frequency caps and opt-out handling — enforced in the product, not a policy document nobody reads.' },
      { q: 'Can I run WhatsApp campaigns for festivals?', a: 'Yes — templated, approved campaigns with attribution, so you know what a festival broadcast actually returned instead of guessing.' },
      { q: 'Can I connect Instagram?', a: 'Yes — Instagram DMs land in the same inbox, on the same customer record, with the same AI assistance as WhatsApp.' },
      { q: 'Facebook Messenger too?', a: 'Yes, same shared inbox.' },
      { q: 'What happens when the AI doesn’t know an answer?', a: 'It hands the thread to your team and says so — it does not invent answers about your stock, your prices, or your policies.' },
      { q: 'Can I see every conversation my staff has with customers?', a: 'Yes — the inbox is shared and logged. Nothing about a customer relationship lives only on a personal phone.' },
      { q: 'Can customers send photos of designs they want?', a: 'Yes — photos attach to the enquiry and the customer record, visible to whoever handles the conversation next.' },
      { q: 'What if Meta shuts down or changes the WhatsApp Business API?', a: 'WhatsApp is one of several channels in the same shared inbox — Instagram, Messenger, Email, SMS and webchat also live there. Your customer records, catalogue, schemes and journeys live in Jwero, not inside any one channel. That said, platform risk on WhatsApp itself is real and industry-wide — we’re not claiming immunity, only that a channel change wouldn’t take your data with it.' },
    ],
  },
  {
    id: 'ai-trust', label: 'AI trust & control',
    items: [
      { q: 'Will AI message my customers without asking me?', a: 'Not unless you allow it. Approval mode is the default — the AI drafts, your team taps approve.' },
      { q: 'Can I approve every single message before it sends?', a: 'Yes — that’s Assist mode, and it is where every business starts. Most owners loosen control gradually, action type by action type, as trust builds.' },
      { q: 'What exactly is the "daily cap"?', a: 'A hard limit you set on how many actions the AI can take per day, per action type. Enforced in the product, not a promise in a brochure.' },
      { q: 'Can I switch the AI off entirely?', a: 'Instantly, at five scopes — one action, one agent, one branch, one channel, or the whole account.' },
      { q: 'Can the AI give discounts on its own?', a: 'No. Pricing actions and discounts follow your price rules and staff permissions — the AI drafts messages, it does not set prices.' },
      { q: 'What can the AI never do?', a: 'A defined set of blocked actions — irreversible or financially sensitive moves stay human-only. Ask us for the current list relevant to your setup on a demo.' },
      { q: 'What if the AI embarrasses me in front of a customer I’ve known for 20 years?', a: 'That fear is exactly what approval queues exist for — nothing reaches her until your team has seen and approved it. Quiet hours mean nobody gets a message at 11pm either.' },
      { q: 'How does the AI learn my business specifically?', a: 'From your catalogue, your prices, your policies and your past conversations — it answers as your business, not as a generic chatbot with no context.' },
      { q: 'Is this the same AI risk as a bot going rogue on social media?', a: 'No — this AI never sends anything on its own by default. The entire governance layer (approvals, caps, kill switch) exists specifically because a jewellery business can’t afford an ungoverned bot near a customer relationship.' },
    ],
  },
  {
    id: 'migration', label: 'Migration & setup',
    items: [
      { q: 'How long does it take to go live?', a: 'Days, not months, for the Assist scope: customers imported, WhatsApp connected, catalogue published, approvals on. Larger scopes are phased and discussed upfront.' },
      { q: 'Can you import from Excel?', a: 'Yes — bulk import ships with sample files and column-mapping tools, and onboarding includes a dedicated migration period where contacts are deduped and merged and top SKUs are imported with their pricing formulas. We do the heavy lifting, messy files included.' },
      { q: 'Do I have to leave my current ERP or Tally?', a: 'No — Jwero isn’t an accounting replacement, it’s the revenue layer Tally never had. Customer and item masters sync both ways with Tally and Zoho Books; your statutory books stay exactly where they are. See <a href="/platform/integrations/tally">the accountant page</a>.' },
      { q: 'What happens to my data if I leave Jwero later?', a: 'You export everything in standard formats, any time, no questions asked. That is a written promise, not a footnote.' },
      { q: 'Can we start with just one branch?', a: 'Yes — prove it in one branch with written exit criteria, then roll out. Most multi-store businesses start exactly this way.' },
      { q: 'Do you migrate during wedding or festival season?', a: 'No — a season change-freeze policy means we do not touch a live system during your peak weeks. We go live before the season or after it, never during.' },
      { q: 'My customer data is a mess — half on staff phones, half in a diary. Can you still start?', a: 'Yes. Every business starts messy. We import what exists, and the record gets more complete as the system is used — normal, not disqualifying.' },
      { q: 'What do I need to prepare before onboarding?', a: 'Roughly: your customer list in any format, product photos and details, your existing WhatsApp number, and one decision-maker’s time for a short kickoff.' },
      { q: 'Can I migrate a paper gold scheme mid-cycle?', a: 'Yes — existing members import with their instalment history intact and continue without restarting the plan.' },
      { q: 'Will there be downtime for my shop during setup?', a: 'No — Jwero is added alongside what you already run. Nothing is switched off to switch this on.' },
      { q: 'Who actually does the setup work — my staff or yours?', a: 'Ours, with your inputs. The implementation scope is written down before you commit, not discovered afterward.' },
      { q: 'Can I see my own data inside Jwero before paying?', a: 'Yes — ask for a supervised sample import. We load a slice of your real customer list so you evaluate on your own data, not a demo dataset.' },
    ],
  },
  {
    id: 'security', label: 'Security & data',
    items: [
      { q: 'Where is my data stored?', a: 'In an isolated database per business — your data never shares a database with another jewellery business. See <a href="/trust/security">Security & Data Ownership</a>.' },
      { q: 'Can a competitor of mine see my data?', a: 'No. Physical tenant isolation plus role-based access controls mean nobody outside your business sees your records.' },
      { q: 'Can I control what each staff member sees?', a: 'Yes — role-based access with roughly 150 fine-grained permissions. A salesperson, a branch manager and an owner see different things by design.' },
      { q: 'What happens when a salesperson leaves?', a: 'Deactivate their login in seconds. Customers, conversations and history stay with the business — that is the entire point of the record belonging to the business, not the person.' },
      { q: 'Is there two-factor login?', a: 'Yes — multi-factor authentication and passkeys are supported.' },
      { q: 'What happens if the internet goes down at my shop?', a: 'Honestly: Jwero is cloud software and needs a connection; offline mode is on the roadmap, not shipped today. Mobile data works as a practical backup in the meantime.' },
      { q: 'Are you ISO or SOC 2 certified?', a: 'Not yet. Formal certifications are planned as the company scales, and we will publish them when they’re earned rather than claim a badge we don’t hold.' },
      { q: 'I don’t trust the cloud with my customer data — why should I?', a: 'Role-based access with role presets, activity logs (per-module today, with a unified audit trail being consolidated), and DPDP-compliant data-subject export/erase workflows are real product features, not marketing lines. We are not ISO or SOC 2 certified yet, and we don’t claim specific uptime or backup guarantees — see <a href="/trust/security">Security & Data Ownership</a> for the full honest list.' },
      { q: 'Do you sell or share my customer data?', a: 'Never. Your customers are your asset; our privacy approach is built around that. See the <a href="/legal/privacy">Privacy Policy</a> and <a href="/legal/dpdp">DPDP statement</a>.' },
      { q: 'Can the owner see everything across every branch?', a: 'Yes — owner-level visibility spans all branches by default; branch staff see only what their role and branch permit.' },
      { q: 'Do you support SSO for company logins?', a: 'Not yet — enterprise SSO/SCIM is in active development, not shipped. Today: per-user logins with MFA and role-based permissions.' },
    ],
  },
  {
    id: 'pricing', label: 'Pricing, ROI & contract',
    items: [
      { q: 'What does Jwero cost?', a: 'Pricing is being finalised per region ahead of general availability. Ask on WhatsApp and you get a straight number, no "book a discovery call" runaround. See <a href="/pricing">the pricing page</a> for the tier structure.' },
      { q: 'Is there a free trial?', a: 'Self-serve trial mechanics are being finalised. Most businesses start with a pilot using their own data instead — real customers, real catalogue, real results, in days.' },
      { q: 'How much ROI can I actually expect?', a: 'We won’t quote a percentage nobody can verify. Run the <a href="/tools/dead-stock-calculator">Dead Stock</a> and <a href="/tools/gold-scheme-calculator">Gold Scheme</a> calculators on your own numbers, then judge the weekly growth report on actuals once you’re live — not on a projection.' },
      { q: 'Are there hidden costs?', a: 'No — implementation scope, what’s included and what’s extra are stated plainly before you commit. Any pass-through WhatsApp messaging costs from Meta are explained upfront, not buried.' },
      { q: 'Is there a lock-in contract?', a: 'Monthly billing is available at entry tiers. Annual pricing is a discount, not handcuffs — and the export-anytime promise applies regardless of contract term.' },
      { q: 'What’s included in implementation?', a: 'Data import, WhatsApp connection, catalogue setup and role-based team training — the full checklist is confirmed with you before you pay.' },
      { q: 'Is it cheaper than the tools I already pay for combined?', a: 'A biller stops at the invoice — it can’t touch repeat-purchase lift, scheme float, WhatsApp-attributed revenue or gold-loss control, which is where the real ROI lives. Compare it against the "Frankenstack" it replaces — WhatsApp tool, catalogue app, website, staff hours on Excel — not against sticker price alone. See the honest frame on the <a href="/pricing">pricing page</a>.' },
      { q: 'Can I upgrade or downgrade tiers later?', a: 'Yes — Assist, Approve and Autopilot are a deliberate ladder. Most businesses start on Assist and move up once their own growth reports justify it.' },
      { q: 'Why should I trust an ROI claim from the company selling the product?', a: 'You shouldn’t take our word for it — that’s why the growth report exists. It’s a weekly, plain-language account of what actually happened, generated from your own data, not a projection from a sales deck.' },
    ],
  },
  {
    id: 'segments', label: 'Segments — retail, multi-store, wholesale, manufacturing',
    items: [
      { q: 'I run one small store. Is this too much software for me?', a: 'No — start with three things: customers imported, WhatsApp connected, catalogue live. That’s the whole Assist tier. Grow into the rest, or don’t — see <a href="/solutions/single-store">the single-store page</a>.' },
      { q: 'Can multiple stores use it?', a: 'Yes — multi-store is native: shared customers and catalogue, per-branch stock, prices and permissions. See <a href="/solutions/multi-store-chains">multi-store & chains</a>.' },
      { q: 'Can branches have different prices?', a: 'Yes — per-branch price rules under central control, with approvals gating any exception.' },
      { q: 'Can I stop one branch’s staff from seeing another branch’s data?', a: 'Yes — branch-scoped permissions are standard, not a custom request.' },
      { q: 'Can franchise owners use it?', a: 'Yes — franchise structure with central brand control and per-franchisee boundaries. See <a href="/solutions/franchise-networks">franchise networks</a>.' },
      { q: 'How do I control what franchisees can change?', a: 'Central catalogue and pricing control, with franchisees operating inside the permissions the franchisor sets.' },
      { q: 'I’m a wholesaler — what does Jwero do for B2B?', a: 'Private, buyer-tiered catalogue sharing, order capture and buyer relationship tracking. See <a href="/solutions/b2b-jewellery">B2B jewellery</a>, <a href="/solutions/diamond-wholesale">diamond wholesale</a> or <a href="/solutions/gold-wholesale">gold wholesale</a>.' },
      { q: 'I’m a manufacturer — can I track karigar jobs?', a: 'Yes — job issue and receipt with weight reconciliation, gated by the rules you set per artisan and order. See <a href="/solutions/manufacturers">manufacturers</a>.' },
      { q: 'Can it track gold loss and wastage in manufacturing?', a: 'Yes — an append-only WIP ledger tracks fine weight through every stage, with per-stage loss norms and abnormal-loss flags.' },
      { q: 'Does it handle karigar wages and payroll?', a: 'Not yet — that is on the roadmap. Job-work tracking and weight-reconciliation records are live today.' },
      { q: 'Is Jwero suitable for luxury or boutique brands?', a: 'Yes — appointment-led selling, video-assisted remote consultations, occasion tracking and private catalogue previews suit high-touch, high-ticket retail. See <a href="/solutions/luxury-boutique">luxury & boutique</a>.' },
      { q: 'I sell lab-grown diamonds online only — does this fit?', a: 'Yes — WhatsApp/Instagram commerce and a storefront connector, with education-first AI replies for a segment that researches heavily before buying. See <a href="/solutions/lab-grown-diamond">lab-grown diamond</a>.' },
      { q: 'Can bullion dealers or gold traders use it?', a: 'Rate-locked deal capture and counterparty ledgers work today. Talk to a specialist so we map the exact fit honestly rather than assume. See <a href="/solutions/bullion-gold-traders">bullion & gold traders</a>.' },
      { q: 'I’m starting my first store and don’t know what I need — can you still help?', a: 'Yes — this is the most common starting point, not an edge case. See <a href="/solutions/startups">startups & first-time founders</a>.' },
    ],
  },
  {
    id: 'operations', label: 'Inventory, catalogue & operations',
    items: [
      { q: 'Can it reduce my dead stock?', a: 'Yes — it makes ageing visible per piece and helps you match idle designs to the customers whose taste actually fits. Dead stock stops being invisible, which is the real problem it solves.' },
      { q: 'Can I see fast and slow movers?', a: 'Yes — movement analytics per category, branch and period.' },
      { q: 'How does live gold-rate pricing work?', a: 'Catalogue prices are formulas — rate × weight × purity plus making charges — resolved live wherever the product appears. Change the rate once; everything follows.' },
      { q: 'Can it handle purity, HUID and certificates?', a: 'Yes — purity, HUID-related fields and certification numbers are structured catalogue attributes, not free text.' },
      { q: 'Can I share my catalogue without losing price control?', a: 'Yes — share links with price visibility you control; wholesale and retail audiences can see different views of the same catalogue.' },
      { q: 'Does it support RFID stocktakes?', a: 'Structured stocktake workflows are live. Confirm current RFID hardware support for your specific setup on a demo before assuming compatibility.' },
      { q: 'Can it track repairs?', a: 'Yes — repair jobs with status tracking, and customers get WhatsApp updates instead of calling the counter to ask.' },
      { q: 'Custom orders — design to karigar to delivery?', a: 'Yes — order stages are tracked end to end with dates, so a wedding order doesn’t depend on someone remembering where it is.' },
      { q: 'Purchase orders and vendors?', a: 'Yes — POs, vendor records and receiving, with weigh-and-assay intake for raw materials.' },
      { q: 'Can customers book appointments?', a: 'Yes — appointment booking with WhatsApp confirmations and reminders.' },
      { q: 'Does it do GST invoices?', a: 'Yes — GST invoicing at the live metal rate is live. E-invoice/IRN integration is on the roadmap; your accountant keeps working in Tally via the bridge in the meantime.' },
      { q: 'Is there a full POS with a cash drawer and day-close?', a: 'Not yet — that is on the public roadmap. Billing and finance features (GST invoicing, receivables, reminders) are live today, and we say this plainly before you buy, not after.' },
    ],
  },
  {
    id: 'support', label: 'Implementation, training & support',
    items: [
      { q: 'Can my staff actually learn this?', a: 'Yes — staff get a daily worklist telling them what to do next, not a blank system to figure out, plus an in-app copilot with guided tours trained on your store’s own policies. Training is journey-based and included by role.' },
      { q: 'Is training included in the price?', a: 'Yes — included in implementation, delivered per role, with refreshers when you add new staff.' },
      { q: 'What if my older or more senior staff resist?', a: 'Start them on one thing: the shared inbox with AI-drafted replies. It makes their day easier immediately and usually converts sceptics faster than any pitch.' },
      { q: 'What support do I get after going live?', a: 'WhatsApp-first support with a named onboarding contact from day one — not a ticket queue you shout into.' },
      { q: 'Do you support in Hindi, Gujarati or other regional languages?', a: 'Support conversations, yes — in your language. The product screens themselves are English today; vernacular UI is on the roadmap, and we say so rather than pretend otherwise.' },
      { q: 'Who helps during the festival rush, when everything is chaos?', a: 'Support is staffed for the trade’s calendar — festivals are exactly when we don’t disappear. The season change-freeze policy exists to protect you from disruptive changes at the worst possible time.' },
      { q: 'How fast do you actually respond?', a: 'Test us before you buy: message us on WhatsApp right now and time it. That response is the SLA, demonstrated, not promised.' },
      { q: 'Can you visit my store in person?', a: 'Usually not — onboarding is remote-first and works well that way. Ask a specialist about in-person options for your specific case.' },
      { q: 'What if something breaks at 9pm during Dhanteras?', a: 'Peak-season escalation exists precisely for this scenario — ask us for the current escalation path for your tier.' },
      { q: 'Do I get a dedicated account manager?', a: 'Multi-store and enterprise plans do. Entry tiers get the shared support team plus your named onboarding contact — stated honestly per tier, not oversold.' },
    ],
  },
  {
    id: 'language', label: 'Languages & customer experience',
    items: [
      { q: 'Does the product work in Hindi, Gujarati or Tamil for my team?', a: 'Honestly: the product screens are English today; a vernacular interface is on the public roadmap. The AI voice assistant already speaks 14 languages, and support helps in yours.' },
      { q: 'Can the AI talk to my customers in their own language?', a: 'Yes — the AI voice assistant covers 14 languages, and chat replies follow the customer’s language where supported.' },
      { q: 'Will my customers need to download anything new?', a: 'No — they use WhatsApp and Instagram, which they already have. An optional customer app exists as an add-on, never a requirement.' },
      { q: 'Can NRI or overseas customers buy from abroad?', a: 'Yes — WhatsApp catalogue sharing, remote video consultation and ordering work across borders; payment specifics depend on your setup.' },
      { q: 'Will older customers cope with buying over WhatsApp?', a: 'They already send your salespeople "rate kya hai?" on WhatsApp today. Jwero just makes sure those chats get answered, recorded and actually closed.' },
      { q: 'Can I send festival greetings automatically without it feeling robotic?', a: 'Yes — personalised by name, occasion and purchase history, throttled by fatigue rules, and every message waits for your approval before it sends.' },
    ],
  },
];

const ALL_FAQS = CATEGORIES.flatMap((c) => c.items);

const faqHub = {
  slug: 'faq',
  title: 'Frequently Asked Questions — Every Objection, Answered | Jwero',
  description: `${ALL_FAQS.length}+ honest answers on what Jwero is, WhatsApp & Meta, AI trust and control, migration, security, pricing, every business segment, operations, support and language — before you talk to sales.`,
  breadcrumbs: [['Home', '/'], ['FAQ']],
  faqs: ALL_FAQS,
  body: `
${L.hero({
  eyebrow: 'FAQ',
  h1: 'Every question. Every objection. Answered honestly.',
  sub: `${ALL_FAQS.length}+ straight answers, organised by what’s actually on your mind — cost, migration, AI trust, security, your specific segment. If a capability isn’t shipped, you’ll read that here, not discover it after signing.`,
  primary: { href: '#', label: 'Still have a question? Ask on WhatsApp', wa: 'faq-hub' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `<div class="filter-chips">${CATEGORIES.map((c, i) => `<a href="#${c.id}"${i === 0 ? ' class="active"' : ''}>${c.label}</a>`).join('')}</div>
  <p style="font-size:.85rem; color:var(--ink-2); max-width:44em;">Every answer below follows one rule: shipped capabilities are claimed plainly, and anything not yet built is named just as plainly. See the full <a href="/roadmap">public roadmap</a> for what’s shipped, rolling out, and still ahead.</p>`
)}

${CATEGORIES.map(
  (c, i) => `
${L.section(
  `<div id="${c.id}" style="scroll-margin-top:96px;">
    ${L.sectionHead(String.fromCharCode(65 + i), c.label, '')}
    ${L.faqBlock(c.items)}
  </div>`
, i % 2 === 0 ? { tone: 'tint' } : {})}`
).join('\n')}

${L.ctaBand('Didn’t find your question?', 'Every objection we haven’t answered yet becomes the next FAQ on this page. Ask us directly and we’ll give you a straight answer.', 'faq-hub')}
`,
};

module.exports = [faqHub];
