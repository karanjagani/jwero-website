const L = require('../lib');

const trustCentre = {
  slug: 'trust',
  title: 'Trust Centre: Security, Privacy and Compliance Status | Jwero',
  description: 'Jwero’s Trust Centre: what protects a jeweller’s data, the status of DPDP, ISO 27001, SOC 2, GDPR, PCI DSS and OWASP testing stated plainly, every policy document, and the companies that process data.',
  breadcrumbs: [['Home', '/'], ['Trust Centre']],
  faqs: [
    { q: 'Is Jwero ISO 27001 certified?', a: 'No. Jwero is not ISO 27001 certified today. The security policy and control mapping are drafted and certification is being prepared. The badge will change only when a certificate is issued.' },
    { q: 'Does Jwero have a SOC 2 report?', a: 'No. A SOC 2 audit has not started. The system description is drafted in preparation.' },
    { q: 'Is Jwero GDPR compliant?', a: 'Jwero has not been assessed against the GDPR. It is built for Indian law first, under the Digital Personal Data Protection Act, 2023. If you serve customers in the EU, tell us before you start.' },
    { q: 'Has Jwero had a penetration test?', a: 'Not yet. No independent penetration test has been done. One is planned, and a summary will be published here when it is complete.' },
    { q: 'Does Jwero comply with India’s DPDP Act?', a: 'Jwero acts as data processor for jewellers and as data fiduciary for its own account holders. It publishes a DPDP statement, processing terms and its sub-processors, and the product has consent records, opt-outs, export and erasure.' },
    { q: 'Does Jwero store card details?', a: 'No. Card and bank details are entered with the payment provider. Payments run through PCI DSS certified providers and card data does not pass through Jwero.' },
    { q: 'Where is my data stored?', a: 'In a database that belongs to your business alone, hosted on Microsoft Azure in India.' },
  ],
  body: `
${L.hero({
  eyebrow: 'TRUST CENTRE',
  h1: 'What protects your data, and exactly where we stand.',
  sub: 'A jeweller’s customer list, stock and books are the business. This page shows the safeguards in place, the status of every standard you might ask about, and the documents behind them. A badge here says “in place” only when it is.',
  primary: { href: '#', label: 'Request the security pack', wa: 'securitypack' },
  secondary: { href: '/legal/data-policy', label: 'Read the Data Policy' },
})}


${L.section(
  `${L.sectionHead('STANDARDS AND COMPLIANCE', 'Every standard, with its real status.', 'Six are in place. Four are not yet, and are shown as such. We will not display a certification mark we have not earned.')}
  ${L.trustBadges()}`
)}

${L.section(
  `${L.sectionHead('SAFEGUARDS', 'What protects your data today.', '')}
  ${L.cards(L.SECURITY_CONTROLS.map(([i, title, text]) => ({ icon: i, title, text })), 3)}
  <div class="cta-row center" style="margin-top:24px"><a class="btn btn-ghost" href="/trust/security">The technical detail</a></div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('DOCUMENTS', 'Everything in writing.', 'Each opens with a short version in plain words.')}
  ${L.cards([
    { icon: 'shield', title: 'Security', text: 'Isolation, encryption, access, approvals, AI limits and what is not built yet.', link: { href: '/trust/security', label: 'Open' } },
    { icon: 'record', title: 'Privacy Policy', text: 'What is collected, why, who receives it, how long it is kept and your rights.', link: { href: '/legal/privacy', label: 'Open' } },
    { icon: 'receipt', title: 'Terms of Use', text: 'Accounts, the first month, fees and the wallet, your data, acceptable use, liability.', link: { href: '/legal/terms', label: 'Open' } },
    { icon: 'box', title: 'Data Policy', text: 'Ownership, processing terms, retention, export, deletion and breach notification.', link: { href: '/legal/data-policy', label: 'Open' } },
    { icon: 'flow', title: 'Sub-processors', text: 'Every company that may process your data, what it does and where.', link: { href: '/legal/sub-processors', label: 'Open' } },
    { icon: 'check', title: 'DPDP statement', text: 'Roles, consent, rights and grievance under India’s data protection law.', link: { href: '/legal/dpdp', label: 'Open' } },
  ], 3)}`
)}

${L.section(
  `${L.sectionHead('YOUR CONTROL', 'Four promises that do not depend on a certificate.', '')}
  ${L.compareRows([
    { lever: 'OWNERSHIP', before: 'Your customer list sits in a vendor’s shared system and in salespeople’s phones.', after: 'Your data is yours, in a database of its own. Jwero has no right to use it for anything but running your workspace.' },
    { lever: 'EXIT', before: 'Leaving a software vendor means begging for your own data.', after: 'Export everything yourself at any time, and for at least 30 days after you leave.' },
    { lever: 'AI', before: 'Automation that messages customers without anyone checking.', after: 'Every AI draft waits for a person. One switch stops it, at five levels.' },
    { lever: 'HONESTY', before: 'A wall of logos and a sales call to find out what is real.', after: 'What is not done is written on this page and on the public roadmap.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('REPORT A PROBLEM', 'Found a security issue, or have a privacy complaint?', '')}
  <div class="stack-verdict">Write to <a href="mailto:care@jwero.ai">care@jwero.ai</a> with the subject “Security” or “Privacy”. We acknowledge within two working days. Anyone who reports a vulnerability in good faith will not be pursued for it.</div>`
)}

${L.section(`${L.sectionHead('QUESTIONS', 'What IT teams and owners ask.', '')}${L.faqBlock([
  { q: 'Is Jwero ISO 27001 certified?', a: 'No. The security policy and control mapping are drafted and certification is being prepared. The badge changes only when a certificate is issued.' },
  { q: 'Does Jwero have a SOC 2 report?', a: 'No. An audit has not started; the system description is drafted in preparation.' },
  { q: 'Is Jwero GDPR compliant?', a: 'It has not been assessed against the GDPR. Jwero is built for Indian law first. If you serve customers in the EU, tell us before you start.' },
  { q: 'Has Jwero had a penetration test?', a: 'Not yet. One is planned, and a summary will be published here when it is complete.' },
  { q: 'Does Jwero store card details?', a: 'No. Payments run through PCI DSS certified providers and card data does not pass through Jwero.' },
  { q: 'Where is my data stored?', a: 'In a database that belongs to your business alone, hosted on Microsoft Azure in India. <a href="/legal/sub-processors">See the sub-processors</a>.' },
])}`, { tone: 'tint' })}

${L.ctaBand('Put your IT questions to us.', 'Send your questionnaire. We answer it in writing, including the parts where the answer is “not yet”.', 'security', { enterprise: true })}
`,
};

const security = {
  slug: 'trust/security',
  title: 'Security & Data Ownership — Your Data, Your Rules | Jwero',
  description: 'Isolated database per business, encryption, role-based access with ~150 permissions, MFA and passkeys, AI kill switches, and export-anytime data ownership.',
  breadcrumbs: [['Home', '/'], ['Trust Centre', '/trust'], ['Security']],
  faqs: [
    { q: 'Where does my data live?', a: 'Each business runs in its own isolated database, hosted in India. Your data is never mixed with another business’s. Credentials are encrypted, and access is controlled by roles you define. The companies that help process it are named on the <a href="/legal/sub-processors">Sub-processors</a> page.' },
    { q: 'Can my staff see everything?', a: 'Only what you allow. Around 150 fine-grained permissions control who sees customers, prices, schemes and reports — per role, per branch.' },
    { q: 'Can I take my data out?', a: 'Yes, at any time, in standard formats. Your customer list is your asset. That promise is a design decision, not a support favour.' },
    { q: 'What can AI do and not do with my data?', a: 'AI drafts actions inside your approval queues, daily caps and quiet hours. It cannot bypass those limits, and a kill switch can stop it at five scopes instantly.' },
    { q: 'Is Jwero SOC 2 or ISO certified?', a: 'Not yet — formal certifications are planned as we scale, and we will publish them when earned, not before. We would rather tell you that plainly than let an audit discover it.' },
    { q: 'This is family business data — how do I know it won’t leave the family?', a: 'It runs in a database isolated to your business alone, with encrypted credentials and access controlled entirely by roles you set. Nobody outside your business can see it: not another customer of ours, not a generic support queue. That isolation is built into the architecture, not something we ask you to take on faith.' },
    { q: 'What happens to customer data if a salesperson who handled it leaves?', a: 'Deactivate their login in seconds. Every conversation and record they touched stays with the business: it was always the business’s record, never the individual’s.' },
    { q: 'What if the internet goes down at my shop?', a: 'Honestly: Jwero is cloud software and needs a connection today. Offline mode is on the public roadmap, not shipped — mobile data works as a practical backup in the meantime.' },
    { q: 'Can a competitor of mine, also on Jwero, ever see my data?', a: 'No. Physical database-per-tenant isolation means your data structurally cannot be queried alongside another business’s, regardless of who else uses the platform.' },
  ],
  body: `
${L.hero({
  eyebrow: 'SECURITY & DATA OWNERSHIP',
  h1: 'Your data is yours. Here’s exactly how we keep it that way.',
  sub: 'A family business’s customer list is its most valuable asset. Here is what protects it in plain words first, then the technical depth — and what we are still building, stated plainly.',
  primary: { href: '#', label: 'Request the security pack for my IT team', wa: 'securitypack' },
  secondary: { href: '#', label: 'Ask a security question', wa: 'security' },
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
      <tr><td><strong>Hosting</strong></td><td>Microsoft Azure, India region. Providers that process data elsewhere are listed on the <a href="/legal/sub-processors">Sub-processors</a> page.</td></tr>
      <tr><td><strong>Tenant isolation</strong></td><td>One database per business — physical isolation, not row-level flags.</td></tr>
      <tr><td><strong>Encryption</strong></td><td>Encrypted credentials; data encrypted in transit and at rest.</td></tr>
      <tr><td><strong>Authentication</strong></td><td>Multi-factor authentication and passkeys; enterprise SSO (SAML/OIDC) with SCIM provisioning for chain deployments; sessions revocable globally in one action.</td></tr>
      <tr><td><strong>Access control</strong></td><td>Role-based access control, ~150 fine-grained permission slugs, fail-closed checker.</td></tr>
      <tr><td><strong>AI authorisation</strong></td><td>A second permission axis for AI: per-user/org action allowlists, independent of human RBAC.</td></tr>
      <tr><td><strong>Financial integrity</strong></td><td>Maker-checker approvals and tamper-evident document transitions on financial records.</td></tr>
      <tr><td><strong>Activity records</strong></td><td>Who did what is logged per module and kept for up to 12 months. Exports of customer or employee data are recorded.</td></tr>
      <tr><td><strong>Personal data requests</strong></td><td>Export and erasure of a customer’s or an employee’s record from inside the product, with statutory records retained.</td></tr>
      <tr><td><strong>AI and your data</strong></td><td>AI features send the content needed for a draft to the model providers named on the Sub-processors page. Jwero does not train its own models on your records.</td></tr>
      <tr><td><strong>Incidents</strong></td><td>A written incident response plan. If your data is affected you are told without undue delay.</td></tr>
      <tr><td><strong>Reporting a vulnerability</strong></td><td>Write to care@jwero.ai with the subject “Security”. We acknowledge within two working days and will not pursue anyone who reports in good faith.</td></tr>
    </tbody>
  </table></div>`
, { tone: 'tint' })}

${L.honestGapsBlock([
  'Formal certifications: ISO 27001 and SOC 2 are in progress, not certified; published only when earned.',
  'A single unified, immutable audit trail across every module — activity logging exists per module today; consolidation is in progress.',
])}

${L.section(
  `${L.sectionHead('COMPLIANCE', 'Where our compliance documentation lives.', '')}
  <p style="font-size:.95rem;">The full set is public: the <a href="/legal/privacy">Privacy Policy</a>, the <a href="/legal/terms">Terms of Use</a>, the <a href="/legal/data-policy">Data Policy</a> (ownership, processing terms, retention, export and breach notification), the <a href="/legal/sub-processors">Sub-processors</a> list and the <a href="/legal/dpdp">DPDP statement</a>.</p>
  <p style="margin-top:14px;"><a class="btn btn-primary" href="/assets/downloads/jwero-security-overview.pdf" download>Download the security overview (PDF)</a> <a class="btn btn-ghost" href="#" data-wa="security-pdf" style="margin-left:10px">Ask a follow-up</a></p>`
)}

${L.section(`${L.sectionHead('THE FEARS OWNERS DON’T ALWAYS SAY OUT LOUD', 'Questions owners ask us privately.', '')}${L.faqBlock([
  { q: 'This is family business data — how do I know it won’t leave the family?', a: 'It runs in a database isolated to your business alone. Nobody outside your business can see it, and that isolation is built in, not promised.' },
  { q: 'What happens to customer data if a salesperson leaves?', a: 'Deactivate their login in seconds. Every record stays with the business, because it was always the business’s record and never the individual’s.' },
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
    { q: 'Where are the customer logos and testimonials?', a: 'The logos are above — real jewellery businesses running on Jwero, named with their permission. Numbered case studies come next, and only after the owner verifies the figures on record. What you will never see here: stock-photo testimonials or unverifiable claims.' },
    { q: 'What is the Lighthouse Partner program?', a: 'A founding cohort of jewellery businesses who get concierge onboarding, direct influence on the roadmap, and preferred terms — in exchange for measured, publishable results. Limited seats per region and segment.' },
    { q: 'Without case studies yet, why should I trust the ROI claims?', a: 'You shouldn’t take our word for it — that is exactly why the weekly growth report exists. It is generated from your own data once you are live, so you judge on your own evidence, not a testimonial.' },
    { q: 'How do I know the product actually works, not just the pitch?', a: 'Test the WhatsApp button on this site. It is not a form — it is Jwero’s own inbox, answered by Jwero’s own AI workforce with approvals on. That is a live demo you can run before talking to anyone.' },
  ],
  body: `
${L.hero({
  eyebrow: 'PROOF',
  h1: 'Fifteen named jewellers run on Jwero. Ask any of them.',
  sub: 'Every logo below is a verified, permissioned Jwero customer — never a prospect. The button on this page opens the same inbox they use; test it before you trust anyone’s word, including ours.',
  primary: { href: '#', label: 'Message the inbox our customers use', wa: 'customers' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(L.customerLogos())}

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
      <a class="btn btn-primary" href="#" data-wa="report">Get a sample report</a>
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
        <div class="report-line"><span>Revenue attributed to Jwero</span><strong data-r="rev">₹38,400</strong></div>
        <div class="report-line"><span>Enquiries answered in under 5 min</span><strong data-r="msg">212</strong></div>
      </div>
    </div>
  </div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('FOUNDING COHORT', 'Become a Lighthouse Partner.', 'The first businesses in each region get concierge onboarding, a direct line to the product team, preferred terms — and their verified numbers on this page, if they choose. Limited seats per region and segment, because concierge does not scale.')}
  <div class="cta-row"><a class="btn btn-primary" href="#" data-wa="lighthouse">Apply — chat or call</a><a class="btn btn-ghost" href="/book-demo">Book a conversation</a></div>`
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
  description: 'A WhatsApp tool sends texts. A jewellery OS remembers the customer, prices at live rate, and turns the conversation into a sale. Here is the honest difference.',
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
  h1: 'A WhatsApp tool sends. An operating system remembers.',
  sub: 'This isn’t a fight with one competitor — it’s the honest difference between a messaging layer and the system underneath it. Choose the tool if messaging is genuinely all you need.',
  primary: { href: '#', label: 'See the difference', wa: 'compare' },
  secondary: { href: '/products/whatsapp', label: 'See WhatsApp Commerce' },
})}

${L.section(
  `<div class="verdict-box">
    <div class="v-cell"><p class="v-tag">CHOOSE A WHATSAPP TOOL IF</p><p>You only need to send and receive messages, with no need for the reply to know the customer’s purchase history, scheme balance, or the live gold rate.</p></div>
    <div class="v-cell v-jwero"><p class="v-tag">CHOOSE JWERO IF</p><p>You want every reply, price and follow-up to come from the same record as the rest of your business — so a conversation can become a sale, a scheme instalment, or a repair update.</p></div>
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
    { label: 'Touchscreen counter billing (scan to GST invoice)', jwero: 'Yes', other: '[VERIFY per tool]' },
    { label: 'In-POS returns and cash-drawer day-close', jwero: 'Yes — returns under branch policy; register shifts with a reconciled cash count', jweroRoadmap: false, other: '[VERIFY per tool]' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('WHAT SWITCHERS SWITCH FOR', 'What switching buys you.', '')}
  ${L.cards([
    { title: 'Memory', text: 'A reply that already knows what she owns and what she’s saving toward — not a blank message thread.' },
    { title: 'Governed AI', text: 'Approval queues, daily caps and a kill switch — not a bot that fires without oversight.' },
    { title: 'One system', text: 'The catalogue, the CRM and the inbox share state — no exporting between tools to answer a simple question.' },
  ])}`
)}

${L.honestGapsBlock(['E-invoice IRN generation is not built in yet. If a pure-messaging tool is genuinely all you need today, we’ll tell you that honestly rather than oversell.'])}

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
  h1: 'Switch one department at a time. Keep what works.',
  sub: 'The riskiest software decision is a rip-out — so we designed the opposite. Jwero lands in days alongside your billing and your books, proves itself with a weekly report, and takes over the counter, stock, purchase and accounts only as fast as the results earn it.',
  primary: { href: '#', label: 'Plan my migration', wa: 'migration' },
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

module.exports = [trustCentre, security, customers, compare, migration];
