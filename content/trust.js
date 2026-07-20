const L = require('../lib');

const security = {
  slug: 'trust/security',
  title: 'Security & Data Ownership — Your Data, Your Rules | Jwero',
  description: 'Isolated database per business, encryption, role-based access with ~150 permissions, MFA and passkeys, AI kill switches, and export-anytime data ownership.',
  breadcrumbs: [['Home', '/'], ['Trust', '/trust/security'], ['Security']],
  faqs: [
    { q: 'Where does my data live?', a: 'Each business runs in its own isolated database — your data is never mixed with another business’s. Credentials are encrypted, and access is controlled by roles you define.' },
    { q: 'Can my staff see everything?', a: 'Only what you allow. Around 150 fine-grained permissions control who sees customers, prices, schemes and reports — per role, per branch.' },
    { q: 'Can I take my data out?', a: 'Yes, at any time, in standard formats. Your customer list is your asset. That promise is a design decision, not a support favour.' },
    { q: 'What can AI do and not do with my data?', a: 'AI drafts actions inside your approval queues, daily caps and quiet hours. It cannot bypass those limits, and a kill switch can stop it at five scopes instantly.' },
    { q: 'Is Jwero SOC 2 or ISO certified?', a: 'Not yet — formal certifications are planned as we scale, and we will publish them when earned, not before. We would rather tell you that plainly than let an audit discover it.' },
    { q: 'This is family business data — how do I know it won’t leave the family?', a: 'It runs in a database isolated to your business alone, with encrypted credentials and access controlled entirely by roles you set. Nobody outside your business — not another customer of ours, not a generic support queue — can see it. That isolation is the design, not a policy promise.' },
    { q: 'What happens to customer data if a salesperson who handled it leaves?', a: 'Deactivate their login in seconds. Every conversation and record they touched stays with the business — that is the entire point of the record belonging to the business, not the person.' },
    { q: 'What if the internet goes down at my shop?', a: 'Honestly: Jwero is cloud software and needs a connection today. Offline mode is on the public roadmap, not shipped — mobile data works as a practical backup in the meantime.' },
    { q: 'Can a competitor of mine, also on Jwero, ever see my data?', a: 'No. Physical database-per-tenant isolation means your data structurally cannot be queried alongside another business’s, regardless of who else uses the platform.' },
  ],
  body: `
${L.hero({
  eyebrow: 'SECURITY & DATA OWNERSHIP',
  h1: 'Your data is yours. Here’s exactly how we keep it that way.',
  sub: 'A family business’s customer list is its most valuable asset. Here is what protects it in plain words first, then the technical depth — and what we are still building, stated plainly.',
  primary: { href: '#', label: 'Ask a security question', wa: 'security' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('IN PLAIN WORDS', 'For everyone, not just IT.', '')}
  ${L.cards([
    { icon: '▣', title: 'Where your data lives', text: 'One isolated database per business. Your data lives alone, encrypted, never mixed with anyone else’s.' },
    { icon: '⚿', title: 'Who can see what', text: 'Role-based access, per role and per branch. Owner, manager and counter staff see different worlds.' },
    { icon: '⇩', title: 'Export anytime', text: 'Your data leaves with you in standard formats whenever you ask. No hostage clauses.' },
    { icon: '✓', title: 'What AI can and can’t do', text: 'Every AI action waits in an approval queue inside caps and quiet hours you set — never a surprise message.' },
    { icon: '☑', title: 'Approvals on money', text: 'Maker-checker approvals and tamper-evident document trails on financial records.' },
    { icon: '⏻', title: 'Kill switches', text: 'Pause any AI activity instantly, at five scopes — one action, one agent, one branch, one channel, or everything.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE TECHNICAL LAYER', 'For your IT evaluator.', '')}
  <div class="tbl-wrap"><table class="tbl">
    <tbody>
      <tr><td><strong>Tenant isolation</strong></td><td>One database per business — physical isolation, not row-level flags.</td></tr>
      <tr><td><strong>Encryption</strong></td><td>Encrypted credentials; data encrypted in transit and at rest.</td></tr>
      <tr><td><strong>Authentication</strong></td><td>Multi-factor authentication and passkeys; sessions revocable globally in one action.</td></tr>
      <tr><td><strong>Access control</strong></td><td>Role-based access control, ~150 fine-grained permission slugs, fail-closed checker.</td></tr>
      <tr><td><strong>AI authorisation</strong></td><td>A second permission axis for AI: per-user/org action allowlists, independent of human RBAC.</td></tr>
      <tr><td><strong>Financial integrity</strong></td><td>Maker-checker approvals and tamper-evident document transitions on financial records.</td></tr>
    </tbody>
  </table></div>`
, { tone: 'tint' })}

${L.honestGapsBlock([
  'Enterprise SSO/SCIM for chain deployments — in active development, not shipped.',
  'Formal certifications (SOC 2 / ISO) — planned; published only when earned.',
  'A single unified, immutable audit trail across every module — activity logging exists per module today; consolidation is in progress.',
])}

${L.section(
  `${L.sectionHead('COMPLIANCE', 'Where our compliance documentation lives.', '')}
  <p style="font-size:.95rem;">Jwero maintains a data-processing summary and privacy statement aligned to applicable data-protection law. See our <a href="/legal/privacy">Privacy Policy</a> and <a href="/legal/dpdp">DPDP statement</a>. [VERIFY: full sub-processor list and legal review before this page is used in a regulated procurement process.]</p>
  <p style="margin-top:14px;"><a class="btn btn-primary" href="/assets/downloads/jwero-security-overview.pdf" download>Download the security overview (PDF)</a> <a class="btn btn-ghost" href="#" data-wa="security-pdf" style="margin-left:10px">Ask a follow-up on WhatsApp</a></p>`
)}

${L.section(`${L.sectionHead('THE FEARS OWNERS DON’T ALWAYS SAY OUT LOUD', 'Questions owners ask us privately.', '')}${L.faqBlock([
  { q: 'This is family business data — how do I know it won’t leave the family?', a: 'It runs in a database isolated to your business alone. Nobody outside your business can see it — that is the design, not a policy promise.' },
  { q: 'What happens to customer data if a salesperson leaves?', a: 'Deactivate their login in seconds. Every record stays with the business — that is the entire point of the record belonging to the business, not the person.' },
  { q: 'What if the internet goes down at my shop?', a: 'Honestly: Jwero needs a connection today. Offline mode is on the roadmap, not shipped.' },
  { q: 'Can a competitor of mine, also on Jwero, see my data?', a: 'No. Database-per-tenant isolation means it structurally cannot happen, regardless of who else uses the platform.' },
])}
<p class="cta-note" style="margin-top:14px">More on security and data? <a href="/faq#security">See every question we’ve been asked →</a></p>`)}

${L.ctaBand('Put your IT questions to us.', 'Enterprise evaluators: ask for the security overview document for your committee.', 'security', { enterprise: true })}
`,
};

const customers = {
  slug: 'customers',
  title: 'Proof — Verified in the Product, Not Written by Marketing | Jwero',
  description: 'Jwero’s proof policy: product-verified capabilities, sample reports labelled as samples, and founding-partner stories published only with verified numbers.',
  breadcrumbs: [['Home', '/'], ['Customers']],
  faqs: [
    { q: 'Where are the customer logos and testimonials?', a: 'Coming — with names, numbers and dates, or not at all. We publish stories only after the owner verifies the figures on record. What you will never see here: stock-photo testimonials or unverifiable claims.' },
    { q: 'What is the Lighthouse Partner program?', a: 'A founding cohort of jewellery businesses who get concierge onboarding, direct influence on the roadmap, and preferred terms — in exchange for measured, publishable results. Limited seats per region and segment.' },
    { q: 'Without case studies yet, why should I trust the ROI claims?', a: 'You shouldn’t take our word for it — that is exactly why the weekly growth report exists. It is generated from your own data once you are live, so you judge on your own evidence, not a testimonial.' },
    { q: 'How do I know the product actually works, not just the pitch?', a: 'Test the WhatsApp button on this site. It is not a form — it is Jwero’s own inbox, answered by Jwero’s own AI workforce with approvals on. That is a live demo you can run before talking to anyone.' },
  ],
  body: `
${L.hero({
  eyebrow: 'PROOF',
  h1: 'We would rather show you than tell you.',
  sub: 'Jewellery is a trade that trusts hallmarks, not adjectives. This page holds itself to the same rule: every claim below is verified in the product, every sample is labelled a sample. Customer stories ship with names, numbers and dates — or they don’t ship.',
  primary: { href: '#', label: 'Get a live demo instead', wa: 'customers' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('VERIFIED IN THE PRODUCT', 'Claims an engineer can check.', '')}
  ${L.proofStrip()}
  ${L.cards([
    { title: 'Explainable scores', text: 'Ask why any customer is scored "at risk" or "high intent" and the record shows its factors. No black boxes.' },
    { title: 'Governance that is real', text: 'Approval queues, daily caps and kill switches are enforced in code — bring a technical evaluator and inspect them.' },
    { title: 'Jewellery-native depth', text: 'Purity, certificates, live-rate pricing, scheme lifecycles, gold-loss ledgers — the details only a jewellery-first system bothers to build.' },
  ])}`
)}

${L.section(
  `<div class="grid grid-2" style="align-items:center; gap:48px;">
    <div>
      ${L.sectionHead('THE WEEKLY ANSWER', 'The growth report.', 'This is the artifact our customers judge us by: a weekly, plain-language accounting of who came back, what was booked, and what revenue the system brought home. The sample here is illustrative; yours would be real.')}
    </div>
    <div class="report" data-report>
      <div class="report-head"><strong>Your Growth Report</strong><span class="badge-sample">Sample</span></div>
      <div class="report-tabs" role="tablist">
        <button type="button" data-tab="week" aria-selected="true">This week</button>
        <button type="button" data-tab="month" aria-selected="false">This month</button>
      </div>
      <div class="report-body">
        <div class="report-line"><span>Past customers who returned</span><strong data-r="back">14</strong></div>
        <div class="report-line"><span>Appointments booked</span><strong data-r="appt">9</strong></div>
        <div class="report-line"><span>Revenue attributed to Jwero</span><strong data-r="rev">38,400</strong></div>
        <div class="report-line"><span>Enquiries answered in under 5 min</span><strong data-r="msg">212</strong></div>
      </div>
    </div>
  </div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('FOUNDING COHORT', 'Become a Lighthouse Partner.', 'The first businesses in each region get concierge onboarding, a direct line to the product team, preferred terms — and their verified numbers on this page, if they choose. Limited seats per region and segment, because concierge does not scale.')}
  <div class="cta-row"><a class="btn btn-primary" href="#" data-wa="lighthouse">Apply on WhatsApp</a><a class="btn btn-ghost" href="/book-demo">Book a conversation</a></div>`
)}

${L.section(`${L.sectionHead('THE HONEST QUESTION', 'Trusting ROI claims before case studies exist.', '')}${L.faqBlock([
  { q: 'Without case studies yet, why should I trust the ROI claims?', a: 'You shouldn’t take our word for it — that’s exactly why the weekly growth report exists, generated from your own data once you’re live.' },
  { q: 'How do I know the product actually works, not just the pitch?', a: 'Test the WhatsApp button on this site — it’s Jwero’s own inbox, answered by Jwero’s own AI workforce, with approvals on.' },
])}`)}

${L.ctaBand('Judge us on your own numbers.', 'The honest pitch: run a pilot, read your growth report in 30 days, then decide.', 'customers')}
`,
};

const compare = {
  slug: 'compare/whatsapp-tools-vs-jewellery-os',
  title: 'WhatsApp Tools vs a Jewellery Operating System | Jwero',
  description: 'A WhatsApp messaging tool sends texts. A jewellery operating system remembers the customer, prices at the live rate, and turns the conversation into a sale. Here is the honest difference.',
  breadcrumbs: [['Home', '/'], ['Compare', '/compare/whatsapp-tools-vs-jewellery-os'], ['WhatsApp tools vs Jewellery OS']],
  faqs: [
    { q: 'Isn’t a WhatsApp tool enough for messaging?', a: 'For pure messaging, yes. The gap appears the moment a reply needs to know her purchase history, her scheme balance, or today’s gold rate — a messaging tool has no memory to draw from.' },
    { q: 'Can I use a WhatsApp tool and Jwero together?', a: 'Most businesses replace the WhatsApp tool once they see that Jwero’s replies come from the same record as the rest of the business — running both means paying twice for one job, done better by one.' },
    { q: 'Does switching mean losing my WhatsApp number or chat history?', a: 'No — your number moves onto the official API. Chat history import depends on the tool you’re switching from; ask us and we’ll tell you honestly what carries over.' },
  ],
  schema: { '@context': 'https://schema.org', '@type': 'Article', headline: 'WhatsApp Tools vs a Jewellery Operating System' },
  body: `
${L.hero({
  eyebrow: 'COMPARE · CATEGORY LEVEL',
  h1: 'A WhatsApp tool sends messages. An operating system remembers the customer.',
  sub: 'This isn’t a fight with one competitor — it’s the honest difference between a messaging layer and the system underneath it. Choose the tool if messaging is genuinely all you need.',
  primary: { href: '#', label: 'See the difference on WhatsApp', wa: 'compare' },
  secondary: { href: '/products/whatsapp', label: 'See WhatsApp Commerce' },
})}

${L.section(
  `<div class="verdict-box">
    <div class="v-cell"><p class="v-tag">CHOOSE A WHATSAPP TOOL IF</p><p>You only need to send and receive messages, with no need for the reply to know the customer’s purchase history, scheme balance, or the live gold rate.</p></div>
    <div class="v-cell v-jwero"><p class="v-tag">CHOOSE JWERO IF</p><p>You want every reply, price and follow-up to come from the same record as the rest of your business — so a conversation can actually become a sale, a scheme instalment, or a repair update.</p></div>
  </div>`
)}

${L.section(
  `${L.sectionHead('THE HONEST MATRIX', 'The feature-by-feature comparison.', 'Every row below is a factual capability comparison. We withhold market/pricing figures for named competitors until verified — dated, sourced claims only.')}
  ${L.compareTable('A WhatsApp messaging tool', [
    { label: 'Send & receive WhatsApp messages', jwero: 'Yes — official Business API', other: 'Yes' },
    { label: 'Knows customer purchase history in a reply', jwero: 'Yes — one shared record', other: 'No — messaging only' },
    { label: 'Knows gold-plan / scheme balance in a reply', jwero: 'Yes', other: 'No' },
    { label: 'Prices a reply at today’s live gold rate', jwero: 'Yes', other: 'No' },
    { label: 'Catalogue, CRM and inventory in the same system', jwero: 'Yes', other: 'No — separate tools needed' },
    { label: 'Governed AI drafting with approval queues', jwero: 'Yes', other: '[VERIFY per tool]' },
    { label: 'Counter billing with cash day-close', jwero: 'Roadmap', jweroRoadmap: true, other: '[VERIFY per tool]' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('WHAT SWITCHERS SWITCH FOR', 'What switching actually buys you.', '')}
  ${L.cards([
    { title: 'Memory', text: 'A reply that already knows what she owns and what she’s saving toward — not a blank message thread.' },
    { title: 'Governed AI', text: 'Approval queues, daily caps and a kill switch — not a bot that fires without oversight.' },
    { title: 'One system', text: 'The catalogue, the CRM and the inbox share state — no exporting between tools to answer a simple question.' },
  ])}`
)}

${L.honestGapsBlock(['POS counter billing is on our roadmap. If a pure-messaging tool is genuinely all you need today, we’ll tell you that honestly rather than oversell.'])}

${L.section(`${L.sectionHead('QUESTIONS SWITCHERS ASK', 'Common questions before switching.', '')}${L.faqBlock([
  { q: 'Isn’t a WhatsApp tool enough for messaging?', a: 'For pure messaging, yes. The gap appears the moment a reply needs to know her purchase history, scheme balance, or today’s gold rate.' },
  { q: 'Can I use a WhatsApp tool and Jwero together?', a: 'Most businesses replace the WhatsApp tool once they see Jwero’s replies come from the same record as the rest of the business.' },
  { q: 'Does switching mean losing my number or chat history?', a: 'No — your number moves onto the official API. Chat history import depends on the tool you’re switching from; ask us honestly what carries over.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(
  `<div class="stack-verdict">Switching is a data question, not a leap of faith. See the <a href="/migration">Migration Centre</a> for exactly what moves and how.</div>`
)}

${L.ctaBand('Plan the switch.', 'Tell us which WhatsApp tool you use today — we’ll map exactly what carries over.', 'compare')}
`,
};

const migration = {
  slug: 'migration',
  title: 'Migration Centre — Switch Without Fear | Jwero',
  description: 'Keep your books, keep your WhatsApp number, keep your season. We import your data for you, freeze changes during peak season, and guarantee export-anytime.',
  breadcrumbs: [['Home', '/'], ['Migration Centre']],
  faqs: [
    { q: 'Do I have to stop using my current software?', a: 'No. Day one touches nothing: your billing software stays, your ledger stays, your WhatsApp number stays. Jwero lands alongside and takes the revenue side — customers, channels, schemes, follow-up.' },
    { q: 'Who does the data import?', a: 'We do. Customers, catalogue and scheme members are imported from Excel, CSV or an export of practically any jewellery software — deduplicated and verified with you before go-live.' },
    { q: 'What if we are in wedding season?', a: 'We operate a season change-freeze: no disruptive changes during your peak weeks. Go-lives are scheduled around your calendar, not our quarter.' },
    { q: 'What if I want to leave Jwero later?', a: 'Your data exports in standard formats, any time, no questions. A platform that holds customers hostage does not deserve them.' },
    { q: 'How does Tally fit into this?', a: 'It doesn’t move. See the <a href="/platform/integrations/tally">Tally coexistence page</a> — Jwero bridges to it, your books stay put.' },
    { q: 'My customer data is a mess — half on staff phones, half in a diary. Can you still start?', a: 'Yes. Every business starts messy; it is the normal starting point, not a disqualifying one. We import what exists and the record gets more complete as the system is used.' },
    { q: 'Will my shop have any downtime during setup?', a: 'No — Jwero is added alongside what you already run. Nothing is switched off to switch this on.' },
    { q: 'Can I see my own data inside Jwero before I commit to anything?', a: 'Ask for a supervised sample import — we load a slice of your real customer list so you evaluate on your own data, not a demo dataset.' },
  ],
  body: `
${L.hero({
  eyebrow: 'MIGRATION CENTRE',
  h1: 'Keep your books. Change your growth.',
  sub: 'The riskiest software decision is a rip-out — so we designed the opposite. Jwero lands in days without touching your ledger, proves itself with a weekly report, and expands only as fast as the results earn it.',
  primary: { href: '#', label: 'Plan my migration on WhatsApp', wa: 'migration' },
  secondary: { href: '/book-demo', label: 'Book a migration call' },
})}

${L.section(
  `${L.sectionHead('THE LAND–PROVE–EXPAND PLAN', 'Nothing breaks. Everything is measured.', '')}
  ${L.steps([
    { title: 'Land (week 1)', text: 'Customers imported for you. Your existing WhatsApp number connected. Catalogue published. Greetings on, approvals on. Your current software untouched.' },
    { title: 'Prove (days 30–90)', text: 'The weekly growth report tells you what came back: returning customers, appointments, attributed revenue. Judge the system on evidence.' },
    { title: 'Expand (when ready)', text: 'Schemes go digital, journeys switch on, more branches join — each step because the last one paid for itself.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE DE-RISKING PROMISES', 'Written here so you can hold us to them.', '')}
  ${L.cards([
    { title: 'We import for you', text: 'Customers, catalogue, scheme members — from any spreadsheet or software export, deduplicated, verified with you.' },
    { title: 'Your number stays', text: 'Your WhatsApp number is part of your reputation. It moves onto the official API; customers notice only faster answers.' },
    { title: 'Season change-freeze', text: 'No disruptive changes during your peak season. The calendar is yours.' },
    { title: 'Keep your ledger', text: 'Tally and Zoho Books bridges are built. Your accountant’s world does not change.', link: { href: '/platform/integrations/tally', label: 'The accountant page' } },
    { title: 'Pilot first', text: 'Multi-store businesses start with one branch and written exit criteria. Rollout is earned.' },
    { title: 'Export anytime', text: 'Your data leaves with you in standard formats whenever you ask. This is a design decision, not a favour.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('MIGRATION QUESTIONS', 'What businesses ask before they move.', '')}${L.faqBlock([
  { q: 'My customer data is a mess — half on staff phones, half in a diary. Can you still start?', a: 'Yes. Every business starts messy. We import what exists and the record gets more complete as the system is used.' },
  { q: 'Will my shop have any downtime during setup?', a: 'No — Jwero is added alongside what you already run. Nothing is switched off to switch this on.' },
  { q: 'Can I see my own data inside Jwero before I commit?', a: 'Ask for a supervised sample import — we load a slice of your real customer list so you evaluate on your own data.' },
])}
<p class="cta-note" style="margin-top:14px">More on migration? <a href="/faq#migration">See every question we’ve been asked →</a></p>`)}

${L.ctaBand('Tell us what you run today.', 'Name your current software and we will send the exact migration plan — what stays, what bridges, what improves.', 'migration')}
`,
};

module.exports = [security, customers, compare, migration];
