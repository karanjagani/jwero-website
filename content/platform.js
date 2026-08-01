const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Platform', '/platform'], [label]];

const platform = {
  slug: 'platform',
  title: 'The Jewellery Business Operating System — How Jwero Works | Jwero',
  description: 'One customer record, catalogue, inventory truth, one inbox — how Jwero runs a jewellery business, with an AI workforce that waits for your approval.',
  breadcrumbs: [['Home', '/'], ['Platform']],
  faqs: [
    { q: 'Is Jwero an ERP?', a: 'It includes an operations backbone — orders, inventory, purchases, repairs and billing — but Jwero is bigger than an ERP: it is the one system where the customer, the catalogue and the operation share state, so AI can act on all three at once. Your statutory books stay in Tally or Zoho Books via built-in bridges.' },
    { q: 'Can I use only one module, like just WhatsApp?', a: 'Yes. Most businesses start with the Assist scope — customers imported, WhatsApp connected, catalogue published — and expand module by module as each one proves itself.' },
    { q: 'What makes this different from buying a CRM plus a WhatsApp tool plus a catalogue app?', a: 'Separate tools mean separate memories. A WhatsApp tool doesn’t know her gold-plan balance; a CRM doesn’t sell on Instagram. In Jwero, the customer, the catalogue and the channels live on one record — so AI can actually sell, not just log.' },
    { q: 'Is there a public API or SSO for enterprise IT?', a: 'A public developer API and enterprise SSO/SCIM are on the public roadmap, not shipped today. We say so here rather than let your evaluation discover it later.' },
    { q: 'Isn’t this too complex for a small business?', a: 'The complexity is optional. You can run the whole business on Assist — customers, WhatsApp, catalogue — and never touch the rest. Complexity is available when you want it, never mandatory.' },
    { q: 'My business is unusual — will this fit, or will I be forcing a generic tool?', a: 'Custom fields, price rules and per-branch configuration exist because jewellery businesses aren’t generic. We’ll also tell you plainly what we don’t customise, on a demo, before you commit.' },
  ],
  body: `
${L.hero({
  eyebrow: 'PLATFORM',
  h1: 'One record. Every channel. Your approval.',
  sub: 'One customer record. One catalogue. One inventory truth. One inbox. Every module in Jwero reads and writes the same data — that is what makes it an operating system, not a bundle of features.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'platform' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
  mock: L.mockOneRecord,
})}

${L.section(
  `${L.sectionHead('THE SYNC TAX', 'What five disconnected tools cost you, in minutes.', 'Concrete, not conceptual — six ordinary questions, answered two ways.')}
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>Question</th><th>Five tools + CSV exports</th><th>One system</th></tr></thead>
    <tbody>
      <tr><td><strong>Who bought last Diwali and hasn’t returned?</strong></td><td>Cross-reference three spreadsheets, if anyone kept them</td><td>One filter, instantly</td></tr>
      <tr><td><strong>What’s her scheme balance right now?</strong></td><td>Call the branch, hope the register is updated</td><td>On her record, live</td></tr>
      <tr><td><strong>Which pieces have sat in the tray two years?</strong></td><td>A physical stocktake</td><td>Ageing view, any time</td></tr>
      <tr><td><strong>Did the WhatsApp enquiry become a sale?</strong></td><td>Unknowable — different systems</td><td>One thread, start to close</td></tr>
      <tr><td><strong>What did this campaign actually sell?</strong></td><td>A guess</td><td>Attributed on the record</td></tr>
      <tr><td><strong>What does the owner see across branches?</strong></td><td>A phone call to each one</td><td>One rollup</td></tr>
    </tbody>
  </table></div>`
)}

${L.section(
  `${L.sectionHead('THE THREE PILLARS', 'Feature depth, organised by promise.', '')}
  ${L.pillarConstellation()}`
, { tone: 'tint' })}

${L.governanceStrip()}

${L.section(
  `${L.sectionHead('INTEGRATIONS & COEXISTENCE', 'Keep your Tally. Books stay where your CA likes them.', '')}
  ${L.cards([
    { title: 'Tally', text: 'Customer and item masters sync both ways automatically. Your accountant’s world doesn’t change.', link: { href: '/platform/integrations/tally', label: 'The accountant page' } },
    { title: 'Zoho Books', text: 'Full accounting bridge for Zoho-first businesses.' },
    { title: 'Shopify / WooCommerce / Unicommerce', text: 'Two-way product and order sync — keep your storefront, add the channels around it.' },
    { title: 'Razorpay & Cashfree', text: 'Payment collection, verified end to end.' },
    { title: 'Meta', text: 'Official WhatsApp Business API, Instagram and Facebook — the channels jewellery actually sells on.' },
  ], 4)}
  <p style="margin-top:20px"><a class="card-link" href="/platform/integrations">See all integrations →</a></p>`
)}

${L.honestGapsBlock([
  'POS counter billing with cash day-close — until it ships, Billing & Finance handles GST invoicing and works alongside your existing counter.',
  'Payroll and karigar wage settlement.',
  'A public developer API and enterprise SSO/SCIM.',
  'A vernacular product interface — the AI voice speaks 14 languages today; the screens are English.',
  'Offline mode — Jwero is a connected product today.',
])}

${L.section(`${L.sectionHead('QUESTIONS EVALUATORS ASK', 'Straight answers for the people who have to sign off.', '')}${L.faqBlock([
  { q: 'Is Jwero an ERP?', a: 'It includes an operations backbone — orders, inventory, purchases, repairs and billing — but Jwero is bigger than an ERP: it is the one system where the customer, the catalogue and the operation share state. Your statutory books stay in Tally or Zoho Books.' },
  { q: 'Can I use only one module, like just WhatsApp?', a: 'Yes. Most businesses start with customers imported, WhatsApp connected and catalogue published, then expand module by module.' },
  { q: 'What makes this different from a CRM plus a WhatsApp tool?', a: 'Separate tools mean separate memories. In Jwero the customer, catalogue and channels live on one record — so AI can actually sell, not just log.' },
  { q: 'Is there a public API or SSO?', a: 'On the public roadmap, not shipped today. <a href="/roadmap">See the roadmap</a>.' },
  { q: 'Isn’t this too complex for a small business?', a: 'The complexity is optional — run everything on Assist and never touch the rest.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>
<p class="cta-note" style="margin-top:14px">Evaluating vendors side by side? <a href="/blog/jewellery-software-buyer-checklist">Work through the jewellery software buyer’s checklist →</a></p>`)}

${L.ctaBand('See the operating system on your own data.', 'Bring one real customer scenario to a 15-minute demo — we’ll run it end to end, one record at a time.', 'platform')}
`,
};

const customerMemory = {
  slug: 'platform/customer-memory',
  title: 'Customer Memory — The 90-Field Jewellery Customer Record | Jwero',
  description: 'Jwero’s customer record remembers purchases, gold-plan balances, family occasions, taste and best time to reach each customer — with an explainable "why" score.',
  breadcrumbs: BC('Customer Memory'),
  faqs: [
    { q: 'What does Jwero remember about each customer?', a: '90+ fields per record: purchase history, gold savings balance and instalment status, birthdays, anniversaries and wedding months, metal and design preferences, preferred channel and best time to reach, engagement and churn signals — each with a visible explanation.' },
    { q: 'How is this different from a normal CRM?', a: 'Generic CRMs know names and notes. Jwero’s record is jewellery-native: it knows her scheme balance, her daughter’s wedding month and what today’s gold rate means for her budget — as structured fields, every module can act on, not free-text notes.' },
    { q: 'What happens when a salesperson leaves?', a: 'Nothing. The memory belongs to the business, not to a personal phone. Every conversation, preference and promise stays on the record.' },
  ],
  body: `
${L.hero({
  eyebrow: 'CUSTOMER MEMORY',
  h1: 'The memory your best salesperson has. At business scale.',
  sub: 'The great jewellers always remembered — the daughter’s wedding, the taste for temple work, the plan maturing in March. Jwero makes that memory a system: 90+ fields on every customer, owned by the business, explained on demand.',
  primary: { href: '#', label: 'See a live record', wa: 'memory' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
  mock: L.mockMemory,
})}

${L.section(
  `${L.sectionHead('WHAT THE RECORD KNOWS', 'Not notes. Fields.', 'The line "your customer record knows her gold balance and her daughter’s wedding month" is literally true — these are structured columns, not a diary.')}
  ${L.cards([
    { title: 'Money & plans', text: 'Gold savings balance, instalments paid and missed, maturity dates, digital gold holdings, lifetime value.' },
    { title: 'Occasions', text: 'Birthdays, anniversaries, wedding months and upcoming family occasions — the reasons jewellery gets bought.' },
    { title: 'Taste', text: 'Metals, purity, styles, price bands, brands browsed and bought — learned from real behaviour.' },
    { title: 'Reachability', text: 'Preferred channel, consent per channel, best send window, message fatigue — reach people the way they want.' },
    { title: 'Signals', text: 'Recency, frequency, value, engagement, churn risk and buying intent — computed continuously.' },
    { title: 'The "why"', text: 'Every score comes with its reasons. Ask why a customer is "at risk" and the record shows its work.' },
  ])}`
)}

${L.oneSystemBlock([
  'The AI reply on WhatsApp drafts from this record — it knows her scheme balance because schemes and chat share one row, not a sync job.',
  'The catalogue share that goes out matches her recorded taste and budget, not a generic PDF.',
  'The occasion journey that invites her before her daughter’s wedding month reads the same field a salesperson would check at the counter.',
])}

${L.section(
  `${L.sectionHead('WHAT MEMORY MAKES POSSIBLE', 'Memory is not a report. It is revenue.', '')}
  ${L.steps([
    { title: 'Win-back', text: 'Customers who quietly stopped coming are surfaced with a reason and a suggested invitation — before they buy elsewhere.' },
    { title: 'Occasion selling', text: 'The right customers hear from you before the festival, before the anniversary, before the wedding season — not after.' },
    { title: 'Counter intelligence', text: 'When she walks in, your team greets a known customer: her plan, her taste, her last visit — on one screen.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('MEMORY QUESTIONS', 'What owners and evaluators ask first.', '')}${L.faqBlock([
  { q: 'What does Jwero remember about each customer?', a: '90+ fields per record: purchase history, gold savings balance and instalment status, birthdays, anniversaries and wedding months, metal and design preferences, preferred channel and best time to reach, engagement and churn signals — each with a visible explanation.' },
  { q: 'How is this different from a normal CRM?', a: 'Generic CRMs know names and notes. Jwero’s record is jewellery-native: it knows her scheme balance, her daughter’s wedding month and what today’s gold rate means for her budget — as structured fields every module can act on, not free-text notes.' },
  { q: 'What happens when a salesperson leaves?', a: 'Nothing. The memory belongs to the business, not to a personal phone. Every conversation, preference and promise stays on the record.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.ctaBand('Give your business a memory.', 'We import your customers from Excel or your current software — the memory starts working in days.', 'memory')}
`,
};

const pricingEngine = {
  slug: 'platform/pricing-engine',
  title: 'The Pricing Engine — Rate, Making Charge & Stone Rules | Jwero',
  description: 'How Jwero prices a piece: purity rate cards, 3 making-charge models, wastage, per-carat stone pricing, channel/branch rules, and an audit log for every price.',
  breadcrumbs: BC('The Pricing Engine'),
  faqs: [
    { q: 'How does Jwero actually calculate a price?', a: 'Metal rate (by purity, updated manually or from a live feed) × weight, plus a making charge (percentage, per-gram, or flat — your choice per category), plus stone or gemstone value priced separately, resolved against any price rules that apply to that channel, branch or customer. Every resolution is logged.' },
    { q: 'Which purities does the rate card support?', a: 'Whatever your business sells — 24K, 22K, 916, 18K, 14K and more, each with its own rate. Rates can be entered manually each session (a common am/pm pattern) or pulled from a live feed; you choose per metal.' },
    { q: 'Can making charges differ by category, or does everyone pay one formula?', a: 'Both exist. A making-charge type (percentage of metal value, per-gram, or flat amount) attaches per category or product, plus a separate service charge as a percentage of the subtotal if you charge one — not one formula forced onto everything you sell.' },
    { q: 'How are diamonds and gemstones priced — bundled into the metal rate?', a: 'No — priced separately, per carat for gemstones or per piece for pearls, and can be tied to the certificate on file (GIA, IGI, SGL, HRD, BIS) so the price and the paperwork agree.' },
    { q: 'Can the same piece show a different price on WhatsApp than on the website or in-store?', a: 'It can, if you set it up that way — price rules resolve by channel (store, website, WhatsApp, marketplace, POS) as well as by branch and customer tier. Most businesses keep one price everywhere; the option to vary exists when you need it.' },
    { q: 'What stops a salesperson from just typing in a lower number?', a: 'An override request, not a free-text field — it needs a reason, and it is checked against a floor and ceiling you set before anyone approves it. Every override is on the record: who asked, who approved, what changed.' },
    { q: 'If a customer disputes a price a week later, can we show how we got there?', a: 'Yes — every resolved price keeps a log of exactly which rate, rule and charge produced it. That is the answer to a dispute, not a reconstruction from memory.' },
  ],
  body: `
${L.hero({
  eyebrow: 'THE PRICING ENGINE',
  h1: 'Every price, explainable. Every override, on the record.',
  sub: 'A jewellery price is never just a number — it is a rate, a purity, a making charge, a stone value and sometimes a rule. Jwero prices it as a formula, not a field, and can show its work for every piece, every channel, every time.',
  primary: { href: '#', label: 'See a price resolve live', wa: 'pricingengine' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('WHAT GOES INTO A PRICE', 'Five inputs, one resolved number.', 'Say it out loud to a jeweller and it sounds obvious — because it is how the trade has always priced. The difference is that Jwero does it as data, at the speed of a WhatsApp reply.')}
  ${L.cards([
    { title: 'Metal rate, by purity', text: 'A rate card per metal and purity — 24K, 22K, 916, 18K, 14K and more — entered manually (a common am/pm pattern) or fed from a live source, your choice.' },
    { title: 'Making charge', text: 'Percentage of metal value, per-gram, or a flat amount — set per category, not forced into one formula for everything you sell. A separate service charge can apply as a percentage of the subtotal.' },
    { title: 'Wastage', text: 'Tracked as its own percentage where you apply it, distinct from the making charge — so the two never get silently confused with each other.' },
    { title: 'Stone & gemstone value', text: 'Priced separately from the metal — per carat for gemstones, per piece for pearls — and can be tied to the certificate on file (GIA, IGI, SGL, HRD, BIS).' },
    { title: 'Rules & overrides', text: 'Channel, branch, region and customer-tier rules apply on top; anything outside them needs an override request with a reason, checked against a floor and ceiling.' },
  ])}`
)}

${L.oneSystemBlock([
  'Update the day’s gold rate once, and the WhatsApp catalogue, the website and the counter reprice together — not three separate updates that drift out of sync.',
  'The making-charge and stone rules that price a catalogue reply on WhatsApp are the same rules the invoice uses — no separate "online price" spreadsheet to keep in step.',
  'An override approved at one branch shows up in the same audit log the owner checks from anywhere — not a paper chit in a drawer.',
])}

${L.section(
  `${L.sectionHead('THREE WAYS TO CHARGE FOR MAKING', 'One formula never fits every category.', 'Bridal sets, daily-wear chains and coin sales don’t price the same way in real jewellery businesses — so the engine doesn’t force them to.')}
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>Model</th><th>How it charges</th><th>Where it tends to fit</th></tr></thead>
    <tbody>
      <tr><td><strong>Percentage</strong></td><td>A % of the metal value</td><td>Standard retail pieces</td></tr>
      <tr><td><strong>Per-gram</strong></td><td>A fixed amount per gram of weight</td><td>Chains, coins, high-volume plain gold</td></tr>
      <tr><td><strong>Flat</strong></td><td>A fixed amount per piece, regardless of weight</td><td>Small items, findings, standardised designs</td></tr>
    </tbody>
  </table></div>
  <p style="margin-top:16px; font-size:.95rem; color:var(--ink-2);">A separate service charge — a percentage of the subtotal — can apply on top where a business charges one, kept distinct from the making charge itself.</p>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('WHERE PRICE CAN VARY, ON PURPOSE', 'Consistency where you want it. Flexibility where you grant it.', '')}
  ${L.cards([
    { title: 'By channel', text: 'Store, website, WhatsApp, marketplace and POS can each carry their own price rules — most businesses keep one price everywhere; the option exists for the ones who need it.' },
    { title: 'By branch or region', text: 'Central price rules under owner control, with branch- or region-scoped exceptions that route through approval — not five branches quietly drifting apart.', link: { href: '/products/multi-store', label: 'See Multi-store & Franchise' } },
    { title: 'By customer tier', text: 'Standard, and loyalty tiers above it, can carry their own pricing where a business chooses to reward them that way.', link: { href: '/products/loyalty', label: 'See Loyalty & Referrals' } },
    { title: 'By promotion', text: 'Promo codes and quantity price-breaks apply on top of the base rules, not as a separate system a salesperson has to remember.' },
  ], 4)}`
)}

${L.section(
  `${L.sectionHead('THE OVERRIDE, DONE PROPERLY', 'A guardrail, not a free-text box.', 'Every jewellery counter has had the moment: a good customer, a bit more discount than the price allows. The question is whether that moment leaves a record or a mystery.')}
  ${L.steps([
    { title: 'Requested', text: 'A salesperson submits an override with the price they want to offer and a reason — not a blank field to type any number into.' },
    { title: 'Checked', text: 'The request is checked against a floor and ceiling price set in advance, so an approver is reviewing a bounded exception, not an open-ended ask.' },
    { title: 'Logged', text: 'Approved or declined, it is on the record — who asked, who decided, and exactly what changed — the same log a dispute or an audit would need.' },
  ])}`
, { tone: 'tint' })}

${L.honestGapsBlock([
  'A public developer API for pulling pricing rules into a third-party system — the rules run inside Jwero today, not exposed externally yet.',
])}

${L.section(`${L.sectionHead('PRICING ENGINE QUESTIONS', 'What owners and evaluators ask first.', '')}${L.faqBlock([
  { q: 'How does Jwero actually calculate a price?', a: 'Metal rate (by purity) × weight, plus a making charge (percentage, per-gram or flat), plus stone value priced separately, resolved against any rules for that channel, branch or customer. Every resolution is logged.' },
  { q: 'Can making charges differ by category?', a: 'Yes — percentage, per-gram or flat, set per category or product, plus an optional service charge on the subtotal. Not one formula forced onto everything.' },
  { q: 'How are diamonds and gemstones priced?', a: 'Separately from the metal — per carat for gemstones, per piece for pearls — and can be tied to the certificate on file so the price and the paperwork agree.' },
  { q: 'What stops a salesperson from just typing a lower number?', a: 'An override request with a reason, checked against a floor and ceiling before approval — not a free-text field.' },
  { q: 'Can we show how a price was reached if a customer disputes it later?', a: 'Yes — every resolved price keeps a log of exactly which rate, rule and charge produced it.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.ctaBand('See your own catalogue priced this way.', 'Bring one real product — we’ll show the rate, the making charge and the resolved price, live.', 'pricingengine')}
`,
};

const aiWorkforce = {
  slug: 'platform/ai-workforce',
  title: 'AI Workforce & Governance — AI That Waits for Your Yes | Jwero',
  description: '240+ governed AI actions, approval queues, daily caps, quiet hours, a five-scope kill switch — the AI workforce inside Jwero, kept under your control.',
  breadcrumbs: BC('AI Workforce & Governance'),
  faqs: [
    { q: 'Will AI replace my sales team?', a: 'No. The AI workforce does the remembering and the follow-up your team never has time for; your people do the selling. Salespeople close more when every customer walks in already known.' },
    { q: 'What if the AI drafts something wrong?', a: 'Nothing goes out without approval until you decide otherwise. You can edit any draft, reject it, or switch a whole action type off. Daily caps and quiet hours are hard limits, not suggestions.' },
    { q: 'Can I turn AI off completely?', a: 'Yes — instantly, at five levels: one action, one agent, one branch, one channel, or everything. The kill switch is a product feature, not a support ticket.' },
    { q: 'What can the AI workforce actually do?', a: 'Over 240 defined business actions: draft replies, price a catalogue enquiry at today’s rate, schedule follow-ups, send instalment reminders, invite customers before festivals, book appointments and more — each action individually permissioned.' },
    { q: 'Can the AI give a discount without me knowing?', a: 'No. Pricing and discount actions follow your price rules and staff permissions — the AI drafts messages, it does not set prices or approve exceptions.' },
    { q: 'What if it says something embarrassing to a customer I’ve known for twenty years?', a: 'That fear is exactly what the approval queue exists for. Nothing reaches her until your team has seen it. Quiet hours mean nobody — old customer or new — gets a message at 11pm either.' },
    { q: 'How does it know how to sound like MY shop, not a generic chatbot?', a: 'It drafts from your catalogue, your prices, your policies and your past conversations — the same context a new employee would need, except it never forgets any of it.' },
    { q: 'Is this the same risk as an AI chatbot going rogue online?', a: 'No. Nothing sends without approval by default, ever. The entire governance layer — approvals, caps, kill switch — exists because a jewellery relationship can’t survive an ungoverned bot near it.' },
  ],
  body: `
${L.hero({
  eyebrow: 'AI WORKFORCE & GOVERNANCE',
  h1: 'AI that waits for your yes.',
  sub: 'Hiring is hard. Training is harder. Jwero gives you an AI workforce that never forgets, never sleeps, and never acts without approval. Autonomy is earned action by action — and you can take it back with one switch.',
  primary: { href: '#', label: 'See the approval queue live', wa: 'ai' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
  mock: L.mockApproval,
})}

${L.section(
  `${L.sectionHead('WHAT THEY DO', 'The work your team never gets time for.', '')}
  ${L.cards([
    { icon: '✉', title: 'Answer in minutes', text: 'Every WhatsApp, Instagram and website enquiry gets a knowledgeable draft reply — with her history and live prices — in minutes, at midnight, during festivals.' },
    { icon: '↺', title: 'Follow up on everything', text: 'Every enquiry that didn’t buy, every quote that went quiet, every instalment coming due — followed up on schedule, never forgotten.' },
    { icon: '🗓', title: 'Work the calendar', text: 'Birthdays, anniversaries, festivals — the AI workforce proposes the right invitation to the right customers, weeks ahead.' },
    { icon: '☏', title: 'Speak, not just type', text: 'The AI voice assistant holds conversations in 14 languages, with transcripts on the customer record.' },
  ], 4)}`
)}

${L.governanceStrip()}

${L.section(
  `${L.sectionHead('240+ ACTIONS. EVERY ONE WAITS FOR YOUR YES.', 'The trust ladder — autonomy is earned, never assumed.', 'Every business starts at Assist. You promote the AI one action type at a time — based on measured accuracy, not promises.')}
  ${L.steps([
    { title: 'Assist', text: 'AI drafts, humans send. Every action waits in the approval queue. This is day one, and some businesses happily stay here.' },
    { title: 'Approve', text: 'Routine, low-risk actions run with one-tap approval; anything sensitive still waits. You see a log of everything.' },
    { title: 'Autopilot', text: 'Action types with proven accuracy run within hard caps — and demote themselves automatically if anything drifts.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('QUESTIONS OWNERS ASK', 'The doubts every owner raises first.', '')}${L.faqBlock([
  { q: 'Will AI replace my sales team?', a: 'No. The AI workforce does the remembering and the follow-up your team never has time for; your people do the selling.' },
  { q: 'What if the AI drafts something wrong?', a: 'Nothing goes out without approval until you decide otherwise. You can edit any draft, reject it, or switch a whole action type off.' },
  { q: 'Can I turn it all off?', a: 'Yes — instantly, at five levels: one action, one agent, one branch, one channel, or everything.' },
  { q: 'Can the AI give a discount without my knowledge?', a: 'No — pricing and discounts follow your price rules and staff permissions; the AI drafts messages, it does not set prices.' },
  { q: 'What if it embarrasses me with a longtime customer?', a: 'The approval queue exists for exactly this. Nothing reaches her until your team has seen and approved it.' },
])}
<p class="cta-note" style="margin-top:14px">More on AI trust and control? <a href="/faq#ai-trust">See every AI question we’ve been asked →</a></p>`)}

${L.ctaBand('Meet your first AI workforce member.', 'Watch it draft, watch it wait for your approval, watch it learn. On your own WhatsApp.', 'ai')}
`,
};

const integrations = {
  slug: 'platform/integrations',
  title: 'Integrations — Tally, Shopify, Meta, Razorpay & More | Jwero',
  description: 'Jwero bridges to Tally and Zoho Books, syncs with Shopify, WooCommerce and Unicommerce, collects via Razorpay and Cashfree, and sells on official Meta channels.',
  breadcrumbs: BC('Integrations'),
  faqs: [
    { q: 'Does Jwero replace Tally?', a: 'No. Tally stays your ledger; the built-in bridge carries sales data across so your accountant’s world doesn’t change.' },
    { q: 'Can I keep my Shopify store?', a: 'Yes. The Shopify connector syncs products and orders, so Jwero adds WhatsApp, Instagram and memory on top of the store you already run.' },
    { q: 'Is the WhatsApp integration official?', a: 'Yes — Jwero uses the official WhatsApp Business API, with template approvals, consent management and opt-out handling built in.' },
  ],
  body: `
${L.hero({
  eyebrow: 'INTEGRATIONS',
  h1: 'Keep what works. Jwero joins in.',
  sub: 'The fastest way to fail a jewellery business is to demand a rip-out. Jwero lands alongside your existing tools, bridges to them, and earns its place — starting with the revenue side.',
  primary: { href: '#', label: 'Ask about your stack', wa: 'integrations' },
  secondary: { href: '/migration', label: 'Visit the Migration Centre' },
})}

${L.section(
  `${L.cards([
    { title: 'Tally', text: 'The bridge your accountant will approve of: sales flow to the ledger; the books stay exactly where they are.', link: { href: '/platform/integrations/tally', label: 'The accountant page' } },
    { title: 'Zoho Books', text: 'Full accounting bridge for Zoho-first businesses.' },
    { title: 'Shopify', text: 'Two-way product and order sync. Keep the store, add the channels and the memory.' },
    { title: 'WooCommerce', text: 'Connector for WordPress-based stores.' },
    { title: 'Unicommerce', text: 'Order-management sync for marketplace-heavy operations.' },
    { title: 'Razorpay & Cashfree', text: 'Payment collection for storefront checkout, verified end to end.' },
    { title: 'Meta (WhatsApp, Instagram, Facebook)', text: 'Official APIs for the channels where jewellery actually sells today.' },
    { title: 'Your ERP export', text: 'Customers and catalogue import from Excel/CSV exports of practically any jewellery ERP.' },
  ], 4)}`
)}

${L.honestGapsBlock(['A self-serve public developer API is on the roadmap — until it ships, integrations run through the bridges above.'])}

${L.section(`${L.sectionHead('INTEGRATION QUESTIONS', 'What actually changes in your stack.', '')}${L.faqBlock([
  { q: 'Does Jwero replace Tally?', a: 'No. Tally stays your ledger; the built-in bridge carries sales data across so your accountant’s world doesn’t change.' },
  { q: 'Can I keep my Shopify store?', a: 'Yes. The connector syncs products and orders, so Jwero adds WhatsApp, Instagram and memory on top of the store you already run.' },
  { q: 'Is the WhatsApp integration official, or a ban risk?', a: 'Official WhatsApp Business API — template approvals, consent management and opt-out handling are built in, which is what keeps it out of ban-risk territory.' },
])}`)}

${L.ctaBand('Tell us your stack.', 'Send the list of tools you run today — we will map exactly what stays, what bridges, and what Jwero takes over.', 'integrations')}
`,
};

const tally = {
  slug: 'platform/integrations/tally',
  title: 'Keep Your Tally — The Accountant Page | Jwero',
  description: 'Jwero bridges to Tally so your books stay exactly where your CA likes them. Jwero runs the revenue side; Tally keeps the ledger.',
  breadcrumbs: [['Home', '/'], ['Platform', '/platform'], ['Integrations', '/platform/integrations'], ['Tally']],
  faqs: [
    { q: 'Will switching to Jwero disrupt my accountant’s workflow?', a: 'No. That is the point of the bridge — customer and item masters sync both ways automatically, in the shape your accountant already expects. Invoice and payment entries are a manual voucher today; automatic transaction posting is on the roadmap, and we say so plainly.' },
    { q: 'What exactly syncs to Tally?', a: 'Customer and item masters sync both ways automatically, keeping your ledger’s reference data current without manual re-entry. Sales and payment transactions still need a manual voucher in Tally today — automatic transaction posting is on the roadmap, not shipped.' },
    { q: 'Do I have to stop using Tally to start using Jwero?', a: 'No — this is the entire design. Keep Tally as your ledger of record; Jwero takes over customers, channels, schemes and follow-up alongside it.' },
    { q: 'My accountant is sceptical of new software near the books. What do I tell them?', a: 'That nothing about their world changes. They keep filing GST exactly as they do today, in Tally — with customer and item masters arriving already synced instead of re-typed. Invite them to the demo — most objections dissolve once they see the bridge, not the sales pitch.' },
    { q: 'Does this replace GST filing or e-invoicing?', a: 'No — GST invoicing at the live gold rate happens in Jwero, but statutory filing and e-invoice/IRN stay Tally’s job (e-invoice automation is on our roadmap, not shipped). Two systems, one clean line.' },
    { q: 'What if our CA wants to keep using their own workflow entirely?', a: 'They can. The bridge changes what arrives in Tally, not how your CA works once it’s there.' },
  ],
  body: `
${L.hero({
  eyebrow: 'KEEP YOUR TALLY',
  h1: 'Apna hisaab rakho. Kamai badlo.',
  sub: 'Keep your books. Change your earnings. Jwero does not ask you to abandon Tally — it asks Tally to keep doing exactly what it already does well. Jwero takes over the side of the business that brings customers back.',
  primary: { href: '#', label: 'Ask your accountant question', wa: 'tally' },
  secondary: { href: '/migration', label: 'See the migration plan' },
})}

${L.section(
  `${L.sectionHead('THE DIVISION OF LABOUR', 'Two systems, one clean line.', '')}
  <div class="grid grid-2">
    <div class="card"><h3>Tally keeps</h3><p>Statutory books, GST filings, the ledger of record — everything your accountant already trusts, unchanged.</p></div>
    <div class="card"><h3>Jwero runs</h3><p>Customer memory, WhatsApp and Instagram selling, gold schemes, catalogue, follow-up and the AI workforce — the revenue side.</p></div>
  </div>
  <p style="margin-top:20px; font-size:.95rem; color:var(--ink-2);">Customer and item masters sync both ways through the built-in bridge, automatically. Transaction posting is a manual voucher in Tally today — auto-posting is on the roadmap, not shipped yet — so nothing about your accountant’s month-end changes without their knowledge.</p>`
)}

${L.section(`${L.sectionHead('QUESTIONS ACCOUNTANTS ASK', 'What to tell your CA.', '')}${L.faqBlock([
  { q: 'My accountant is sceptical of new software near the books. What do I tell them?', a: 'That nothing about their world changes — masters arrive already synced instead of re-typed, and they still enter sales and payment vouchers in Tally exactly as before.' },
  { q: 'Does this replace GST filing or e-invoicing?', a: 'No — GST invoicing at the live rate happens in Jwero; statutory filing and e-invoice/IRN stay Tally’s job. Two systems, one clean line.' },
  { q: 'Can our CA keep their own workflow?', a: 'Yes — the bridge changes what arrives in Tally, not how your CA works once it’s there.' },
])}
<p class="cta-note" style="margin-top:14px">Want the full division of labour explained? <a href="/blog/jewellery-software-and-tally">Read the guide to running jewellery software and Tally together →</a></p>`)}

${L.ctaBand('Bring your accountant into the conversation.', 'We are happy to walk your CA through exactly what moves and what doesn’t.', 'tally')}
`,
};

const onboarding = {
  slug: 'platform/onboarding',
  title: 'Onboarding & Support — Live in Days, Trained in Your Language | Jwero',
  description: 'How Jwero implementation actually works: what we import for you, how training runs, and the season change-freeze that protects your busiest months.',
  breadcrumbs: BC('Onboarding & Support'),
  faqs: [
    { q: 'How long does implementation take?', a: 'Days, not months, for the first stage: customers imported, your WhatsApp number connected, catalogue published, greetings live with approvals on.' },
    { q: 'Will my team need training?', a: 'If your team can use WhatsApp, they can use Jwero. Training runs by role, live, with a named onboarding contact — not a video library you’re left to figure out alone.' },
    { q: 'Can you implement without disrupting our wedding season?', a: 'Yes — a season change-freeze policy means no disruptive changes during your peak weeks. Go-lives are scheduled around your calendar.' },
    { q: 'What if my older or more senior staff resist the change?', a: 'Start them on one thing: the shared inbox with AI-drafted replies. It makes their day easier immediately — usually the fastest way to convert a sceptic is to make their job less tedious, not to explain the technology.' },
    { q: 'What if my whole team pushes back on new software?', a: 'If they can use WhatsApp, they can use Jwero — that’s deliberate, not a slogan. Training is role-based and live, and the AI workforce takes over the tedious parts (drafting, reminders) so staff feel helped, not surveilled.' },
    { q: 'We tried new software before and it just sat unused. Why would this be different?', a: 'Because Assist gives your team something useful on day one — a shared inbox that answers faster than before — instead of a training manual to read first. Adoption follows usefulness, not a mandate.' },
  ],
  body: `
${L.hero({
  eyebrow: 'ONBOARDING & SUPPORT',
  h1: 'If your team can use WhatsApp, they can run Jwero.',
  sub: 'Implementation is a promise we write down, not a vague timeline. Here is exactly what happens, in what order, and who is with you at each step.',
  primary: { href: '#', label: 'Plan your onboarding', wa: 'onboarding' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('THE FIRST 30 DAYS', 'What happens, week by week.', '')}
  ${L.steps([
    { title: 'Days 1–7: Land', text: 'Customers imported for you, WhatsApp number connected, catalogue published. Nothing ripped out — your billing software stays.' },
    { title: 'Weeks 2–3: First wins', text: 'Enquiries answered in minutes, occasion greetings flowing with approvals, first catalogue shares sent.' },
    { title: 'Day 30: The report', text: 'Your first weekly growth report: who came back, what they bought, what the system did. Judge us on that.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE PROMISES', 'Written here so you can hold us to them.', '')}
  ${L.cards([
    { title: 'We import for you', text: 'Customers, catalogue, scheme members — from any spreadsheet or software export, deduplicated and verified with you.' },
    { title: 'Your number stays', text: 'Your WhatsApp number is part of your reputation. It moves onto the official API; customers notice only faster answers.' },
    { title: 'Season change-freeze', text: 'No disruptive changes during your peak season. The calendar is yours.' },
    { title: 'Role-based training', text: 'Owner, manager and counter staff are trained on what THEY use — live, in your language for support conversations.' },
    { title: 'A named human', text: 'Your onboarding contact has a name and a WhatsApp number from day one.' },
    { title: 'Export anytime', text: 'Your data leaves with you in standard formats whenever you ask.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('TRAINING & ADOPTION QUESTIONS', 'Getting a hesitant team to actually use it.', '')}${L.faqBlock([
  { q: 'What if my staff resist the change?', a: 'Start them on the shared inbox with AI-drafted replies — it makes their day easier immediately, which converts sceptics faster than any explanation.' },
  { q: 'We tried new software before and it sat unused. Why would this be different?', a: 'Assist gives your team something useful on day one instead of a manual to read first. Adoption follows usefulness, not a mandate.' },
  { q: 'Can you work around our festival-season staffing crunch?', a: 'Yes — the season change-freeze exists precisely so training and go-live never compete with your busiest weeks.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq#support">See every implementation question →</a></p>
<p class="cta-note" style="margin-top:14px">Timing a go-live around the busy months? <a href="/blog/jewellery-software-wedding-season">Read the wedding-season readiness guide →</a></p>`)}

${L.ctaBand('See the onboarding plan for your business.', 'Tell us your team size and busiest season — we’ll map the exact 30-day plan.', 'onboarding')}
`,
};

const roadmap = {
  slug: 'roadmap',
  title: 'Public Roadmap — Shipped, Building, Not Yet | Jwero',
  description: 'Jwero publishes what is live, what is being built, and what we do not do yet. Honesty is the trust strategy — here is what we don’t do yet.',
  breadcrumbs: [['Home', '/'], ['Roadmap']],
  body: `
${L.hero({
  eyebrow: 'PUBLIC ROADMAP',
  h1: 'Here’s what we don’t do yet.',
  sub: 'Software vendors lose jewellery businesses by overpromising. We publish the edges: if a capability is not shipped, you will read it here first — not discover it after signing.',
  primary: { href: '#', label: 'Ask about a feature', wa: 'roadmap' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `<div class="grid grid-3">
    <div class="road-col now">
      <h3>Shipped</h3>
      <div class="road-item"><strong>Customer Memory (90+ fields)</strong>with explainable scores</div>
      <div class="road-item"><strong>WhatsApp, Instagram & Facebook commerce</strong>official APIs, one inbox</div>
      <div class="road-item"><strong>AI workforce with governance</strong>approvals, caps, kill switch</div>
      <div class="road-item"><strong>AI voice assistant</strong>14 languages, transcripts</div>
      <div class="road-item"><strong>Gold schemes & digital gold</strong>enrolment → instalments → maturity</div>
      <div class="road-item"><strong>Jewellery catalogue (PIM)</strong>purity, certificates, HUID-aware, RFID</div>
      <div class="road-item"><strong>Inventory intelligence</strong>valuation, ageing, dead-stock visibility</div>
      <div class="road-item"><strong>GST invoicing at live metal rates</strong>AR ledger, payment reminders</div>
      <div class="road-item"><strong>Journeys, campaigns & loyalty</strong>festival calendar triggers, consent-aware broadcasts</div>
      <div class="road-item"><strong>Campaign attribution (UTM)</strong>what each send actually sold, on the record</div>
      <div class="road-item"><strong>Quotations</strong>draft → sent → accepted, with a PDF and a shareable link</div>
      <div class="road-item"><strong>Customer segmentation</strong>live rule-based audiences, RFM tiers</div>
      <div class="road-item"><strong>Showroom intelligence</strong>walk-in register, live floor, walkout rescue</div>
      <div class="road-item"><strong>Repairs, purchases, manufacturing job-work</strong>with gold-loss tracking</div>
      <div class="road-item"><strong>Multi-store structure</strong>brands, branches, role-based access</div>
      <div class="road-item"><strong>Bridges</strong>Tally, Zoho Books, Shopify, Woo, Unicommerce</div>
    </div>
    <div class="road-col">
      <h3>Rolling out</h3>
      <div class="road-item"><strong>POS counter & cash day-close</strong>the billing counter, composed on the pricing spine</div>
      <div class="road-item"><strong>Attribution dashboard</strong>the owner’s weekly growth report, productised</div>
      <div class="road-item"><strong>Enterprise SSO/SCIM</strong>for chain deployments</div>
      <div class="road-item"><strong>Direct ad-platform publishing</strong>one-click publish from Ads Manager, not uniform across every flow yet</div>
      <div class="road-item"><strong>Additional social publishing channels</strong>Instagram & Facebook are live; LinkedIn, X, Pinterest, YouTube and Google Business are being wired</div>
      <div class="road-item"><strong>Occasion & win-back recipes</strong>packaged one-click playbooks</div>
    </div>
    <div class="road-col">
      <h3>On the roadmap</h3>
      <div class="road-item"><strong>Offline mode</strong>the counter needs the internet today</div>
      <div class="road-item"><strong>Payroll & karigar wage settlement</strong>planned; not shipped</div>
      <div class="road-item"><strong>E-invoice / IRN & GSTR filing automation</strong>statutory filing stays with Tally and your CA today</div>
      <div class="road-item"><strong>Scheme & digital-gold redemption at online checkout</strong>balances live on the record; applying them on the ecommerce website isn’t wired yet</div>
      <div class="road-item"><strong>HUID / certificate verification on the ecommerce website</strong>the catalogue carries the data; a customer-facing widget isn’t built</div>
      <div class="road-item"><strong>Old-gold exchange / buyback calculator online</strong></div>
      <div class="road-item"><strong>Girvi / gold-loan module</strong>on the long-term map</div>
      <div class="road-item"><strong>Vernacular product interface</strong>the voice assistant speaks 14 languages; the screens are English today</div>
      <div class="road-item"><strong>Public developer API</strong>bridges only, for now</div>
      <div class="road-item"><strong>Predictive ML forecasting</strong>today’s inventory intelligence is ageing/valuation-based, not predictive</div>
    </div>
  </div>`
)}

${L.ctaBand('Need something on this list?', 'Tell us which item decides your purchase — roadmap order is negotiable for lighthouse partners.', 'roadmap')}
`,
};

module.exports = [platform, customerMemory, pricingEngine, aiWorkforce, integrations, tally, onboarding, roadmap];
