const L = require('../lib');

const platform = {
  slug: 'platform',
  title: 'The Growth Engine — How Jwero Works | Jwero',
  description: 'One customer record, one catalogue, one inbox, one brain. How Jwero runs the revenue side of a jewellery business end to end — with your approval on every action.',
  faqs: [
    { q: 'What makes Jwero different from buying a CRM plus a WhatsApp tool?', a: 'Separate tools mean separate memories. A WhatsApp tool doesn’t know her gold-plan balance; a CRM doesn’t sell on Instagram. In Jwero, the customer, the catalogue and the channels live on one record — so AI can actually sell, not just log.' },
    { q: 'Does Jwero replace my existing systems?', a: 'Not on day one, and never by force. Jwero bridges to Tally, Zoho Books, Shopify, WooCommerce and Unicommerce. Most jewellers keep their ledger and let Jwero run the revenue side.' },
    { q: 'Can I run multiple brands and branches?', a: 'Yes — holdings, brands and branches are first-class in Jwero, with role-based access for every team member and branch-consistent pricing rules.' },
  ],
  body: `
${L.hero({
  eyebrow: 'PLATFORM',
  h1: 'One customer record.<br>Everything else follows.',
  sub: 'ERPs record. Messaging tools message. Jwero is the only system where the customer, the catalogue and the channels live in one place — so AI can actually sell, not just log. That is the whole trick, and nobody else has it.',
  primary: { href: '#', label: 'See it on WhatsApp', wa: 'default' },
  secondary: { href: '/book-demo.html', label: 'Book a demo' },
  mock: L.mockMemory,
})}

${L.section(
  `${L.sectionHead('THE FLOW', 'From enquiry to loyal customer — one thread.', 'Follow one customer through the engine. Every step reads and writes the same record.')}
  ${L.steps([
    { title: 'An enquiry arrives', text: 'WhatsApp, Instagram, Facebook, your website or a walk-in — every channel lands in one inbox, attached to one customer record.' },
    { title: 'Memory answers', text: 'AI staff draft a reply that knows her history, her taste, her plan balance and today’s gold rate. The draft waits for approval.' },
    { title: 'The sale happens', text: 'Catalogue shared with live prices, an appointment booked, a video call from the counter — whatever the customer needs.' },
    { title: 'The relationship compounds', text: 'The purchase updates her record. Occasions, loyalty and scheme balances schedule the next conversation automatically — with your approval.' },
  ].slice(0,4))}`
)}

${L.section(
  `${L.sectionHead('THE FOUR LAYERS', 'What runs on the engine.', '')}
  ${L.cards([
    { icon: '◆', title: 'Know — customer memory', text: 'Customer 360 with 90+ intelligence fields, explainable scores, occasions, loyalty and savings balances.', link: { href: '/customer-memory.html', label: 'Customer Memory' } },
    { icon: '◇', title: 'Sell — the digital counter', text: 'WhatsApp, Instagram and Facebook commerce, your own online store, shareable catalogues, live video selling and appointments.', link: { href: '/products/whatsapp.html', label: 'WhatsApp Commerce' } },
    { icon: '❖', title: 'Run — operations', text: 'Jewellery-grade catalogue, inventory with ageing, orders, GST invoicing at live metal rates, repairs, purchases and manufacturing job-work.', link: { href: '/products/inventory.html', label: 'Inventory' } },
    { icon: '✦', title: 'Grow — money products & AI', text: 'Gold savings schemes, digital gold, journeys, campaigns, loyalty — with AI staff proposing and you disposing.', link: { href: '/products/gold-schemes.html', label: 'Gold Schemes' } },
  ], 4)}`
, { tone: 'tint' })}

${L.governanceStrip()}

${L.section(
  `${L.sectionHead('HONESTY, IN WRITING', 'What Jwero is not.', 'Trust is easier to keep than to win back, so we publish the edges plainly.')}
  ${L.cards([
    { title: 'Not your accounting ledger', text: 'Your statutory books stay in Tally or Zoho Books — Jwero bridges to both and takes the revenue side.' },
    { title: 'Not a POS terminal — yet', text: 'Counter billing with cash-day close is on the public roadmap. Until it ships, we will not sell it to you.', link: { href: '/roadmap.html', label: 'See the roadmap' } },
    { title: 'Not black-box AI', text: 'Every score has a visible “why”. Every action has an approval trail. If we cannot explain it, we do not ship it.' },
  ])}`
)}

${L.ctaBand('See the engine on your own numbers.', 'Bring one real customer scenario to a 15-minute demo — we will run it end to end.', 'default')}
`,
};

const aiStaff = {
  slug: 'ai-staff',
  title: 'AI Staff & Governance — AI That Waits for Your Approval | Jwero',
  description: 'Jwero AI staff answer enquiries, follow up, remember occasions and call customers back — under approval queues, daily caps and a five-level kill switch.',
  faqs: [
    { q: 'Will AI replace my sales team?', a: 'No. AI staff do the remembering and the follow-up your team never has time for; your people do the selling. Salespeople close more when every customer walks in already known.' },
    { q: 'What if the AI drafts something wrong?', a: 'Nothing goes out without approval until you decide otherwise. You can edit any draft, reject it, teach it, or switch a whole action type off. Daily caps and quiet hours are hard limits, not suggestions.' },
    { q: 'Can I turn AI off completely?', a: 'Yes — instantly, at five levels: one action, one agent, one branch, one channel, or everything. The kill switch is a product feature, not a support ticket.' },
    { q: 'What can AI staff actually do?', a: 'Over 240 defined business actions: draft replies, price a catalogue enquiry at today’s rate, schedule follow-ups, send instalment reminders, invite customers before festivals, book appointments and more — each action individually permissioned.' },
  ],
  body: `
${L.hero({
  eyebrow: 'AI STAFF & GOVERNANCE',
  h1: 'AI proposes.<br>You dispose.',
  sub: 'Hiring is hard. Training is harder. Jwero gives you staff that never forget, never sleep, and never act without your approval. Autonomy is earned action by action — and you can take it back with one switch.',
  primary: { href: '#', label: 'See the approval queue live', wa: 'default' },
  secondary: { href: '/book-demo.html', label: 'Book a demo' },
  mock: L.mockApproval,
})}

${L.section(
  `${L.sectionHead('WHAT THEY DO', 'The work your team never gets time for.', '')}
  ${L.cards([
    { icon: '✉', title: 'Answer in minutes', text: 'Every WhatsApp, Instagram and website enquiry gets a knowledgeable draft reply — with her history and live prices — in minutes, at midnight, during festivals.' },
    { icon: '↺', title: 'Follow up on everything', text: 'Every enquiry that didn’t buy, every quote that went quiet, every instalment coming due — followed up on schedule, never forgotten.' },
    { icon: '🗓', title: 'Work the calendar', text: 'Birthdays, anniversaries, festivals in your market’s calendar — AI staff propose the right invitation to the right customers, weeks ahead.' },
    { icon: '☏', title: 'Speak, not just type', text: 'The AI voice assistant holds conversations in 14 languages, with transcripts on the customer record.' },
  ], 4)}`
)}

${L.governanceStrip()}

${L.section(
  `${L.sectionHead('THE TRUST LADDER', 'Autonomy is earned, never assumed.', 'Every business starts at Assist. You promote the AI one action type at a time — based on measured accuracy, not promises.')}
  ${L.steps([
    { title: 'Assist', text: 'AI drafts, humans send. Every action waits in the approval queue. This is day one, and some owners happily stay here.' },
    { title: 'Approve', text: 'Routine, low-risk actions run with one-tap approval; anything sensitive still waits. You see a log of everything.' },
    { title: 'Autopilot', text: 'Action types with proven accuracy run within hard caps — and demote themselves automatically if anything drifts.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('QUESTIONS OWNERS ASK', '', '')}${L.faqBlock([
    { q: 'Will AI replace my sales team?', a: 'No. AI staff do the remembering and the follow-up your team never has time for; your people do the selling. Salespeople close more when every customer walks in already known.' },
    { q: 'What if the AI drafts something wrong?', a: 'Nothing goes out without approval until you decide otherwise. You can edit any draft, reject it, or switch a whole action type off. Daily caps and quiet hours are hard limits, not suggestions.' },
    { q: 'Can I turn it all off?', a: 'Yes — instantly, at five levels: one action, one agent, one branch, one channel, or everything.' },
  ])}`
)}

${L.ctaBand('Meet your first AI staff member.', 'Watch it draft, watch it wait for your approval, watch it learn. On your own WhatsApp.', 'default')}
`,
};

const memory = {
  slug: 'customer-memory',
  title: 'Customer Memory — The 90-Field Jewellery Customer Record | Jwero',
  description: 'Jwero’s Customer 360 remembers purchases, gold-plan balances, family occasions, taste and the best time to reach every customer — with an explainable “why” behind every score.',
  faqs: [
    { q: 'What does Jwero remember about each customer?', a: 'Over 90 fields per record: purchase history, gold savings balance and instalment status, birthdays, anniversaries and wedding months, metal and design preferences, preferred channel and best time to reach, engagement and churn signals — each with a visible explanation.' },
    { q: 'How is this different from a normal CRM?', a: 'Generic CRMs know names and notes. Jwero’s record is jewellery-native: it knows her scheme balance, her daughter’s wedding month and what today’s gold rate means for her budget — as structured fields, not free-text notes.' },
    { q: 'What happens when a salesperson leaves?', a: 'Nothing. The memory belongs to the business, not to a personal phone. Every conversation, preference and promise stays on the record.' },
  ],
  body: `
${L.hero({
  eyebrow: 'CUSTOMER MEMORY',
  h1: 'Your best salesperson’s memory.<br>At company scale.',
  sub: 'The great jewellers always remembered — the daughter’s wedding, the taste for temple work, the plan maturing in March. Jwero makes that memory a system: 90+ fields on every customer, owned by the business, explained on demand.',
  primary: { href: '#', label: 'See a live record', wa: 'default' },
  secondary: { href: '/book-demo.html', label: 'Book a demo' },
  mock: L.mockMemory,
})}

${L.section(
  `${L.sectionHead('WHAT THE RECORD KNOWS', 'Not notes. Fields.', 'The line “your customer record knows her gold balance and her daughter’s wedding month” is literally true — these are structured columns, not a diary.')}
  ${L.cards([
    { title: 'Money & plans', text: 'Gold savings balance, instalments paid and missed, maturity dates, digital gold holdings, lifetime value.' },
    { title: 'Occasions', text: 'Birthdays, anniversaries, wedding months and upcoming family occasions — the reasons jewellery gets bought.' },
    { title: 'Taste', text: 'Metals, purity, styles, price bands, brands browsed and bought — learned from real behaviour.' },
    { title: 'Reachability', text: 'Preferred channel, consent per channel, best send window, message fatigue — so you reach people the way they want.' },
    { title: 'Signals', text: 'Recency, frequency, value, engagement, churn risk and buying intent — computed continuously.' },
    { title: 'The “why”', text: 'Every score comes with its reasons. Ask why a customer is “at risk” and the record shows its work.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT MEMORY MAKES POSSIBLE', 'Memory is not a report. It is revenue.', '')}
  ${L.steps([
    { title: 'Win-back', text: 'Customers who quietly stopped coming are surfaced with a reason and a suggested invitation — before they buy elsewhere.' },
    { title: 'Occasion selling', text: 'The right customers hear from you before the festival, before the anniversary, before the wedding season — not after.' },
    { title: 'Counter intelligence', text: 'When she walks in, your team greets a known customer: her plan, her taste, her last visit — on one screen.' },
  ])}`
, { tone: 'tint' })}

${L.ctaBand('Give your shop a memory.', 'We import your customers from Excel or your current software — the memory starts working in days.', 'default')}
`,
};

const integrations = {
  slug: 'integrations',
  title: 'Integrations — Tally, Shopify, Meta, Razorpay & More | Jwero',
  description: 'Jwero bridges to Tally and Zoho Books, syncs with Shopify, WooCommerce and Unicommerce, collects via Razorpay and Cashfree, and sells on official Meta channels.',
  faqs: [
    { q: 'Does Jwero replace Tally?', a: 'No. Tally stays your ledger; the built-in bridge carries sales data across so your accountant’s world doesn’t change. Jwero runs the revenue side — customers, channels, schemes, follow-up.' },
    { q: 'Can I keep my Shopify store?', a: 'Yes. The Shopify connector syncs products and orders, so Jwero adds WhatsApp, Instagram and memory on top of the store you already run.' },
    { q: 'Is the WhatsApp integration official?', a: 'Yes — Jwero uses the official WhatsApp Business API, with template approvals, consent management and opt-out handling built in.' },
  ],
  body: `
${L.hero({
  eyebrow: 'INTEGRATIONS',
  h1: 'Keep what works.<br>Jwero joins in.',
  sub: 'The fastest way to fail a jeweller is to demand a rip-out. Jwero lands alongside your existing tools, bridges to them, and earns its place — starting with the revenue side.',
  primary: { href: '#', label: 'Ask about your stack', wa: 'default' },
  secondary: { href: '/migration.html', label: 'Visit the Migration Centre' },
})}

${L.section(
  `${L.cards([
    { title: 'Tally', text: 'The bridge your accountant will approve of: sales flow to the ledger; the books stay exactly where they are.' },
    { title: 'Zoho Books', text: 'Full accounting bridge for Zoho-first businesses.' },
    { title: 'Shopify', text: 'Two-way product and order sync. Keep the store, add the channels and the memory.' },
    { title: 'WooCommerce', text: 'Connector for WordPress-based stores.' },
    { title: 'Unicommerce', text: 'Order-management sync for marketplace-heavy operations.' },
    { title: 'Razorpay & Cashfree', text: 'Payment collection for storefront checkout, verified end to end.' },
    { title: 'Meta (WhatsApp, Instagram, Facebook)', text: 'Official APIs for the channels where jewellery actually sells today.' },
    { title: 'Your ERP export', text: 'Customers and catalogue import from Excel/CSV exports of practically any jewellery ERP.' },
  ], 4)}
  <div class="stack-verdict" style="margin-top:28px"><strong>A note on public APIs:</strong> a self-serve developer API is on the <a href="/roadmap.html">public roadmap</a>. Until it ships, integrations run through the bridges above — and we would rather tell you that here than in month three.</div>`
)}

${L.ctaBand('Tell us your stack.', 'Send the list of tools you run today — we will map exactly what stays, what bridges, and what Jwero takes over.', 'default')}
`,
};

const security = {
  slug: 'security',
  title: 'Security & Trust — Your Data, Your Rules | Jwero',
  description: 'Isolated database per business, encryption, role-based access with ~150 permissions, MFA and passkeys, AI kill switches, and export-anytime data ownership.',
  faqs: [
    { q: 'Where does my data live?', a: 'Each business runs in its own isolated database — your data is never mixed with another jeweller’s. Credentials are encrypted, and access is controlled by roles you define.' },
    { q: 'Can my staff see everything?', a: 'Only what you allow. Around 150 fine-grained permissions control who sees customers, prices, schemes and reports — per role, per branch.' },
    { q: 'Can I take my data out?', a: 'Yes, at any time, in standard formats. Your customer list is your asset. That promise is a design decision, not a support favour.' },
  ],
  body: `
${L.hero({
  eyebrow: 'SECURITY & TRUST',
  h1: 'A family business’s data<br>deserves family-vault rules.',
  sub: 'Your customer list is the most valuable asset your business owns. Here is exactly how Jwero treats it — and what we are still building, stated plainly.',
  primary: { href: '#', label: 'Ask a security question', wa: 'default' },
  secondary: { href: '/book-demo.html', label: 'Book a demo' },
})}

${L.section(
  `${L.cards([
    { icon: '▣', title: 'Isolated by design', text: 'One database per business. Your data lives alone, encrypted, with per-tenant credentials.' },
    { icon: '⚿', title: 'Access control', text: 'Role-based access with ~150 fine-grained permissions, per role and per branch. Owner, manager and counter staff see different worlds.' },
    { icon: '✓', title: 'Strong sign-in', text: 'Multi-factor authentication and passkeys; sessions can be revoked everywhere in one action.' },
    { icon: '⏻', title: 'AI under control', text: 'Approval queues, daily caps, action logs and kill switches at five scopes govern everything AI does.' },
    { icon: '⇩', title: 'Export anytime', text: 'Your data leaves with you in standard formats whenever you ask. No hostage clauses.' },
    { icon: '¶', title: 'Approvals in finance', text: 'Maker-checker approvals and tamper-evident document trails on financial records.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE HONEST LIST', 'What we are still building.', 'Enterprise buyers punish discovered gaps far harder than admitted ones. So here is the list, in public.')}
  ${L.cards([
    { title: 'Single sign-on (SSO/SCIM)', text: 'Enterprise SSO and directory provisioning are in active development for chain deployments.', link: { href: '/roadmap.html', label: 'Roadmap' } },
    { title: 'Formal certifications', text: 'Security audits and certifications are planned as we scale; we will publish them when they are earned, not before.' },
    { title: 'Unified audit trail', text: 'Activity logging exists across modules; a single immutable audit spine is being consolidated.' },
  ])}`
, { tone: 'tint' })}

${L.ctaBand('Put your IT questions to us.', 'Chains: ask for the security overview document for your evaluation committee.', 'default')}
`,
};

const roadmap = {
  slug: 'roadmap',
  title: 'Public Roadmap — Shipped, Building, Not Yet | Jwero',
  description: 'Jwero publishes what is live, what is being built, and what we do not do yet. Honesty is the trust strategy.',
  body: `
${L.hero({
  eyebrow: 'PUBLIC ROADMAP',
  h1: 'What’s live. What’s next.<br>What we won’t pretend.',
  sub: 'Software vendors lose jewellers by overpromising. We publish the edges: if a capability is not shipped, you will read it here first — not discover it after signing.',
  primary: { href: '#', label: 'Ask about a feature', wa: 'default' },
  secondary: { href: '/book-demo.html', label: 'Book a demo' },
})}

${L.section(
  `<div class="grid grid-3">
    <div class="road-col now">
      <h3>Live today</h3>
      <div class="road-item"><strong>Customer Memory (90+ fields)</strong>with explainable scores</div>
      <div class="road-item"><strong>WhatsApp, Instagram & Facebook commerce</strong>official APIs, one inbox</div>
      <div class="road-item"><strong>AI staff with governance</strong>approvals, caps, kill switch</div>
      <div class="road-item"><strong>AI voice assistant</strong>14 languages, transcripts</div>
      <div class="road-item"><strong>Gold schemes & digital gold</strong>enrolment → instalments → maturity</div>
      <div class="road-item"><strong>Jewellery catalogue (PIM)</strong>purity, certificates, HUID-aware, RFID</div>
      <div class="road-item"><strong>Inventory intelligence</strong>valuation, ageing, dead-stock visibility</div>
      <div class="road-item"><strong>GST invoicing at live metal rates</strong>AR ledger, payment reminders</div>
      <div class="road-item"><strong>Journeys, campaigns & loyalty</strong>festival calendar triggers</div>
      <div class="road-item"><strong>Repairs, purchases, manufacturing job-work</strong>with gold-loss tracking</div>
      <div class="road-item"><strong>Multi-store structure</strong>brands, branches, role-based access</div>
      <div class="road-item"><strong>Bridges</strong>Tally, Zoho Books, Shopify, Woo, Unicommerce</div>
    </div>
    <div class="road-col">
      <h3>Building now</h3>
      <div class="road-item"><strong>POS counter & cash day-close</strong>the billing counter, composed on the pricing spine</div>
      <div class="road-item"><strong>Attribution dashboard</strong>the weekly Growth Report, productised</div>
      <div class="road-item"><strong>Enterprise SSO/SCIM</strong>for chain deployments</div>
      <div class="road-item"><strong>Quotation-to-order flow</strong>quotes that convert in one tap</div>
      <div class="road-item"><strong>Occasion & win-back recipes</strong>packaged one-click playbooks</div>
    </div>
    <div class="road-col">
      <h3>Not yet — honestly</h3>
      <div class="road-item"><strong>Offline mode</strong>the counter needs the internet today</div>
      <div class="road-item"><strong>Payroll & artisan wage settlement</strong>planned; not shipped</div>
      <div class="road-item"><strong>Gold-loan / pledge module</strong>on the long-term map</div>
      <div class="road-item"><strong>Local-language product interface</strong>the voice assistant speaks 14 languages; the screens are English today</div>
      <div class="road-item"><strong>Public developer API</strong>bridges only, for now</div>
    </div>
  </div>`
)}

${L.ctaBand('Need something on this list?', 'Tell us which item decides your purchase — roadmap order is negotiable for lighthouse partners.', 'default')}
`,
};

module.exports = [platform, aiStaff, memory, integrations, security, roadmap];
