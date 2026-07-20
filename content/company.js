const L = require('../lib');

const pricing = {
  slug: 'pricing',
  title: 'Pricing — Assist, Approve, Autopilot | Jwero',
  description: 'Transparent tiers named after how trust is earned: Assist (AI drafts, you send), Approve (one-tap approvals), Autopilot (earned autonomy) — plus plans for multi-store networks.',
  breadcrumbs: [['Home', '/'], ['Pricing']],
  faqs: [
    { q: 'Why don’t I see numbers on this page?', a: 'Because pricing is still being finalised per region, ahead of general availability. It will be published here once set — until then, ask on WhatsApp and you will get a straight answer with no "discovery call" required.' },
    { q: 'Is there a lock-in contract?', a: 'No — entry tiers offer monthly billing, and annual plans are simply a discount, not handcuffs. Your data exports any time you ask.' },
    { q: 'What does implementation include?', a: 'Human-led onboarding: your customer list imported for you, WhatsApp number connected, catalogue set up, and your team trained by role. The scope is written down before you pay.' },
    { q: 'How should I think about the cost?', a: 'Against one recovered customer, not against your billing software’s maintenance fee. One returning bridal customer typically pays for years of Jwero. Run the calculators and use your own numbers.' },
    { q: 'Is there a free trial?', a: 'Not yet as a self-serve trial — those mechanics are being finalised. Talk to us about starting a pilot with your own data instead, which is how most businesses actually begin.' },
    { q: 'Are there hidden costs I’ll discover later?', a: 'No — implementation scope, what’s included and what’s extra are stated before you commit. Any pass-through WhatsApp messaging costs from Meta are explained upfront, not buried in month two.' },
    { q: 'Is this cheaper than the tools I already pay for combined?', a: 'A biller stops at the invoice — it can’t touch repeat-purchase lift, scheme float, WhatsApp-attributed revenue or gold-loss control, which is where the real ROI lives. Count what the "Frankenstack" it replaces actually costs — WhatsApp tool, catalogue app, website, SMS vendor, staff hours reconciling Excel. See the Frankenstack math below.' },
    { q: 'Can I upgrade or downgrade tiers later?', a: 'Yes — Assist, Approve and Autopilot are a deliberate ladder. Most businesses start on Assist and move up once their own weekly growth report justifies it, not because a salesperson pushed them.' },
    { q: 'What if I only need one or two things, not the whole platform?', a: 'That’s exactly what Assist is — customers imported, WhatsApp connected, catalogue live. You are never sold modules you didn’t ask for.' },
    { q: 'Why should I believe your ROI claims?', a: 'You shouldn’t take our word for it — that’s why the growth report exists. It’s a weekly account of what actually happened with your own customers, not a projection in a sales deck.' },
  ],
  body: `
${L.hero({
  eyebrow: 'PRICING',
  h1: 'Priced like growth. Not like software maintenance.',
  sub: 'Three tiers, named after how the AI earns your trust. Start where you are comfortable; move up when the results say so. No hidden costs, no hostage clauses, export-anytime.',
  primary: { href: '#', label: 'Get a straight price on WhatsApp', wa: 'pricing' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `<div class="tiers">
    <div class="card tier">
      <p class="tier-flag">Start here</p>
      <h3>Assist</h3>
      <p>The memory and the counter. AI drafts, your team sends.</p>
      <ul>
        <li>Customer memory — full import done for you</li>
        <li>WhatsApp on your existing number (official API)</li>
        <li>Instagram & Facebook in one inbox</li>
        <li>Live-price shareable catalogues</li>
        <li>Occasion greetings with approval queue</li>
        <li>Tally / Zoho Books bridge</li>
      </ul>
      <a class="btn btn-ghost" href="#" data-wa="tier-assist">Ask the Assist price</a>
    </div>
    <div class="card tier tier-hot">
      <p class="tier-flag">Most chosen</p>
      <h3>Approve</h3>
      <p>The whole operating system. AI proposes everything; you approve with one tap.</p>
      <ul>
        <li>Everything in Assist</li>
        <li>AI workforce: follow-ups, win-back, festival journeys</li>
        <li>Gold schemes: enrolment → reminders → maturity</li>
        <li>Digital gold</li>
        <li>Weekly growth report to the owner</li>
        <li>Inventory ageing & dead-stock visibility</li>
        <li>Loyalty & campaigns</li>
      </ul>
      <a class="btn btn-primary" href="#" data-wa="tier-approve">Ask the Approve price</a>
    </div>
    <div class="card tier">
      <p class="tier-flag">Earned</p>
      <h3>Autopilot</h3>
      <p>Proven action types run within hard caps. You supervise by exception.</p>
      <ul>
        <li>Everything in Approve</li>
        <li>Earned per-action autonomy with auto-demotion</li>
        <li>AI voice agent (14 languages)</li>
        <li>Video counter & appointments</li>
        <li>Advanced analytics & ask-in-plain-language reports</li>
        <li>Priority support</li>
      </ul>
      <a class="btn btn-ghost" href="#" data-wa="tier-autopilot">Ask the Autopilot price</a>
    </div>
  </div>
  <div class="stack-verdict" style="margin-top:26px"><strong>Multi-store & franchise networks:</strong> branch structure, role-based control, staged rollout and an evaluation kit for your committee. <a href="/enterprise">Talk to a specialist</a>.</div>`
)}

${L.section(
  `${L.sectionHead('THE HONEST FRAME', 'What this replaces.', 'Most jewellery businesses pay for five or six disconnected tools — a messaging tool, a catalogue app, a website, scheme spreadsheets, an agency retainer — plus the invisible cost: customers lost to silence. One system, one bill, one owner of the customer record.')}
  ${L.stats([
    { n: '5–6', l: 'tools a typical business pays for today' },
    { n: '1', l: 'system that holds the whole customer' },
    { n: '0', l: 'hostage clauses — export anytime' },
    { n: '30 days', l: 'to your first growth report' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('THE OBJECTIONS, ANSWERED DIRECTLY', 'Before you ask, in case you were about to.', '')}
  ${L.cards([
    { title: '"Another software cost"', text: 'Measure it against one recovered customer, not against your billing software’s AMC. One returning bridal customer typically pays for years of Jwero — run the calculators on your own numbers.' },
    { title: '"I already have five tools"', text: 'A biller stops at the invoice. Count what the pile actually costs — a WhatsApp tool, a catalogue app, a website, an agency retainer, plus the invisible cost of customers lost to silence — against the revenue levers a biller can’t touch.' },
    { title: '"Hidden costs will show up later"', text: 'Implementation scope and what’s extra are written down before you pay. Any Meta messaging pass-through cost is explained upfront, not discovered on an invoice.' },
    { title: '"I’ll be locked into a contract"', text: 'Monthly billing is available at entry tiers. Annual is a discount, not handcuffs — and export-anytime applies regardless of the term you choose.' },
    { title: '"ROI is a promise I’ve heard before"', text: 'Fair — that’s why the weekly growth report exists. It shows what actually happened with your own customers, not a number in a sales deck.' },
    { title: '"I don’t need the whole platform"', text: 'Then don’t buy it. Assist is exactly the minimum: customers imported, WhatsApp connected, catalogue live. Expand only when it’s earned its place.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('PRICING QUESTIONS', 'Straight answers on cost and terms.', '')}${L.faqBlock([
  { q: 'Why don’t I see numbers on this page?', a: 'Because pricing is being finalised per region ahead of general availability. Ask on WhatsApp and you will get a straight answer with no "discovery call" required.' },
  { q: 'Is there a lock-in contract?', a: 'No — entry tiers offer monthly billing. Annual plans are discounted, not handcuffs.' },
  { q: 'Is there a free trial?', a: 'Not yet as self-serve — those mechanics are being finalised. Talk to us about starting a pilot with your own data instead.' },
  { q: 'Are there hidden costs?', a: 'No — implementation scope and what’s extra are stated before you commit. Meta messaging pass-through costs, if any, are explained upfront.' },
  { q: 'Can I change tiers later?', a: 'Yes — most businesses start on Assist and move up once their own growth report justifies it.' },
])}
<p class="cta-note" style="margin-top:14px">More objections? <a href="/faq#pricing">See every pricing question we’ve been asked →</a></p>`)}
`,
};

const company = {
  slug: 'company',
  title: 'About Jwero — Why We Build for Jewellery Business | Jwero',
  description: 'Jwero exists because the world’s most relationship-driven retail trade was left with software that only keeps records. We build the operating system it deserves.',
  breadcrumbs: [['Home', '/'], ['Company']],
  body: `
${L.hero({
  eyebrow: 'ABOUT',
  h1: 'The most personal trade on earth deserved better software.',
  sub: 'Jewellery is bought for weddings, births and promises — and sold, everywhere on earth, through relationships. Yet the industry’s software only ever learned to keep records. We started Jwero to build the operating system that remembers people, not just transactions.',
})}

${L.section(
  `${L.sectionHead('WHAT WE BELIEVE', 'Three convictions behind every feature.', '')}
  ${L.cards([
    { title: 'Memory is the moat', text: 'Jewellery is a relationship trade, and relationships run on memory. We industrialise that superpower so it works at any scale — one counter or a hundred branches.' },
    { title: 'AI must ask first', text: 'In a trust-first trade, ungoverned automation is a liability. Approval queues, caps and kill switches are not features — they are the product philosophy.' },
    { title: 'Honesty compounds', text: 'We publish what is not built yet on a public roadmap. A customer won by overpromise is a churn statistic waiting to happen.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE COMPANY', 'Who builds it, and what we measure.', 'Jwero is built by a team across product, jewellery retail and AI engineering — working daily with jewellery businesses from single family stores to multi-branch chains. We measure ourselves on one number: the revenue our customers’ growth reports attribute to the system.')}
  <div class="cta-row">
    <a class="btn btn-primary" href="/book-demo">Talk to us</a>
    <a class="btn btn-ghost" href="#" data-wa="company">WhatsApp the founders’ desk</a>
  </div>`
, { tone: 'tint' })}
`,
};

const contact = {
  slug: 'contact',
  title: 'Contact Jwero | Jwero',
  description: 'WhatsApp, phone, email or a booked demo — every way to reach Jwero, on one page.',
  breadcrumbs: [['Home', '/'], ['Contact']],
  body: `
${L.hero({
  eyebrow: 'CONTACT',
  h1: 'Talk to us however suits you.',
  sub: 'For most questions, WhatsApp is genuinely the fastest route — it lands in the same inbox our product runs on.',
})}
${L.section(
  `${L.cards([
    { title: 'WhatsApp', text: 'The fastest way to reach us — usually a reply within minutes during business hours.', link: { href: '#', label: 'Chat now' } },
    { title: 'Phone', text: '+91 00000 00000 — for a call instead of a chat.' },
    { title: 'Email', text: 'hello@jwero.ai — for anything that needs an attachment.' },
    { title: 'Book a demo', text: 'A 15-minute slot with someone who knows the trade.', link: { href: '/book-demo', label: 'Book now' } },
  ], 4)}
  <div class="cta-row" style="margin-top:10px"><a class="btn btn-primary" href="#" data-wa="contact">Chat with us on WhatsApp</a></div>`
)}
`,
};

const enterprise = {
  slug: 'enterprise',
  title: 'Enterprise — Multi-store, Wholesale & Manufacturing | Jwero',
  description: 'For chains, franchise networks, wholesalers and manufacturers: a specialist evaluation track, a buying-committee kit, and a staged rollout plan.',
  breadcrumbs: [['Home', '/'], ['Enterprise']],
  faqs: [
    { q: 'What’s different about the enterprise track?', a: 'A named specialist instead of a self-serve funnel, a buying-committee kit addressed to each stakeholder, and a staged pilot-branch rollout with exit criteria you set.' },
    { q: 'What do you need from us to start?', a: 'Roughly: number of branches, current systems (billing/ERP/WhatsApp tools), and your evaluation timeline. We’ll come back with a specific plan, not a generic deck.' },
    { q: 'Our evaluation committee will ask about SSO and audit trails. What do we tell them?', a: 'Tell them the truth: enterprise SSO/SCIM is in active development, not shipped; per-module activity logging exists today with a unified immutable audit trail being consolidated. See <a href="/trust/security">the security page</a> for the full honest list — we’d rather you find gaps here than in an audit.' },
    { q: 'How do we roll out across many branches without a chaotic big-bang migration?', a: 'You don’t — one pilot branch first, with exit criteria you define, then a staged rollout with per-branch configuration and training. No branch goes live without the previous one proving itself.' },
    { q: 'Can we get a security overview document for our IT committee?', a: 'Yes — both the security overview and the full buying-committee kit are downloadable directly on this page, no request needed.' },
    { q: 'What if different branches want different price rules or catalogues?', a: 'Central price rules under owner control, with per-branch exceptions that route through approvals — consistency where you want it, flexibility where you grant it.' },
  ],
  body: `
${L.hero({
  eyebrow: 'ENTERPRISE',
  h1: 'For networks, not just counters.',
  sub: 'Multi-store chains, franchise networks, wholesalers and manufacturers get a specialist evaluation track: a named contact, a buying-committee kit, and a staged rollout that starts with one pilot branch.',
  primary: { href: '/book-demo', label: 'Talk to a specialist' },
  secondary: { href: '#', label: 'Or start on WhatsApp', wa: 'enterprise' },
})}

${L.section(
  `${L.sectionHead('THE BUYING-COMMITTEE KIT', 'One artifact per stakeholder.', '')}
  ${L.cards([
    { title: 'For the MD / owner', text: 'ROI framing against your own numbers, and the case for one system over five.' },
    { title: 'For IT / operations', text: 'Security overview, migration plan, pilot-branch rollout with exit criteria.', link: { href: '/trust/security', label: 'Security overview' } },
    { title: 'For finance', text: 'The Tally/Zoho coexistence note — nothing about the ledger changes.', link: { href: '/platform/integrations/tally', label: 'Coexistence note' } },
    { title: 'For branch managers', text: 'A day-in-the-life walkthrough of what actually changes at the counter.' },
  ], 4)}
  <div class="cta-row" style="margin-top:22px">
    <a class="btn btn-primary" href="/assets/downloads/jwero-buying-committee-kit.pdf" download>Download the buying-committee kit (PDF)</a>
    <a class="btn btn-ghost" href="/assets/downloads/jwero-security-overview.pdf" download>Download the security overview (PDF)</a>
  </div>`
)}

${L.section(`${L.sectionHead('QUESTIONS EVALUATION COMMITTEES ASK', 'Answers for your evaluation committee.', '')}${L.faqBlock([
  { q: 'Our evaluation committee will ask about SSO and audit trails. What do we tell them?', a: 'Tell them the truth: enterprise SSO/SCIM is in active development, not shipped; per-module activity logging exists today with a unified audit trail being consolidated. <a href="/trust/security">See the full honest list</a>.' },
  { q: 'How do we roll out across many branches without chaos?', a: 'One pilot branch first, with exit criteria you define, then a staged rollout. No branch goes live without the previous one proving itself.' },
  { q: 'Can we get a security overview document?', a: 'Yes — download it directly above, alongside the buying-committee kit.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.ctaBand('Start with one branch.', 'Tell us your network size and current systems — we’ll come back with a specific plan.', 'enterprise')}
`,
};

const bookDemo = {
  slug: 'book-demo',
  title: 'Book a Demo — 15 Minutes, Your Numbers | Jwero',
  description: 'Book a 15-minute demo with someone who knows the jewellery trade — or get the two-minute version on your own WhatsApp right now.',
  breadcrumbs: [['Home', '/'], ['Book a Demo']],
  body: `
${L.hero({
  eyebrow: 'BOOK A DEMO',
  h1: 'Fifteen minutes. Your scenario, not our script.',
  sub: 'Bring one real situation — a quiet customer list, a leaking scheme book, a flooded Instagram inbox — and we will run it through Jwero live. If we cannot help, we will say so in the first five minutes.',
  primary: { href: '#', label: 'Skip the form — WhatsApp us', wa: 'bookdemo' },
})}

${L.section(
  `<div class="grid grid-2" style="gap:48px; align-items:start;">
    <form class="form" id="demo-form">
      <label for="f-name">Your name</label>
      <input id="f-name" name="name" type="text" required autocomplete="name">
      <label for="f-phone">WhatsApp number</label>
      <input id="f-phone" name="phone" type="tel" required autocomplete="tel" placeholder="+91…">
      <label for="f-biz">Business type</label>
      <select id="f-biz" name="business">
        <option>Single-store retailer</option>
        <option>Multi-store / chain</option>
        <option>Manufacturer</option>
        <option>Wholesaler</option>
        <option>Online-first / D2C brand</option>
        <option>Other</option>
      </select>
      <label for="f-city">City & country</label>
      <input id="f-city" name="city" type="text" autocomplete="address-level2">
      <button class="btn btn-primary" type="submit">Request my demo slot</button>
      <p class="form-ok">Thank you — we will confirm your slot on WhatsApp within business hours. Faster route: message us directly from the button above.</p>
      <p class="cta-note">No spam, no drip campaigns. One confirmation, one demo, your decision.</p>
    </form>
    <div>
      ${L.sectionHead('WHAT HAPPENS NEXT', 'Three steps from here to your demo.', '')}
      ${L.steps([
        { title: 'We confirm on WhatsApp', text: 'A human (yes, really) confirms a 15-minute slot that suits you.' },
        { title: 'You bring a scenario', text: 'A real customer situation from your business. We run it live in Jwero.' },
        { title: 'You get the plan', text: 'A written note: what Jwero would change, the migration path, and a straight price. Then it is your call.' },
      ]).replace('class="steps"', 'class="steps" style="grid-template-columns:1fr"')}
    </div>
  </div>`
)}
`,
};

const legalPrivacy = {
  slug: 'legal/privacy',
  title: 'Privacy Policy | Jwero',
  description: 'How Jwero collects, uses, stores and protects your data.',
  breadcrumbs: [['Home', '/'], ['Legal', '/legal/privacy'], ['Privacy Policy']],
  body: `
${L.section(
  `<h1>Privacy Policy</h1>
  <p style="max-width:64em; margin-top:18px;">Jwero (“we”, “us”) provides jewellery business software. This policy explains what data we collect through this website and our product, why, and the choices you have.</p>
  <div style="max-width:64em; margin-top:26px; font-size:.95rem; color:var(--ink-2); line-height:1.8;">
    <h3 style="margin-top:24px; color:var(--ink);">What we collect</h3>
    <p>Contact details you provide via forms or WhatsApp (name, phone, business details), and standard website analytics (pages viewed, approximate location, device type).</p>
    <h3 style="margin-top:24px; color:var(--ink);">How we use it</h3>
    <p>To respond to enquiries, run demos, provide the product to customers, and improve this website. We do not sell personal data.</p>
    <h3 style="margin-top:24px; color:var(--ink);">Customer data inside the product</h3>
    <p>For businesses using Jwero, each business’s data is isolated in its own database and remains that business’s property. See <a href="/trust/security">Security & Data Ownership</a> for detail.</p>
    <h3 style="margin-top:24px; color:var(--ink);">Your choices</h3>
    <p>You may ask us to access, correct, or delete your personal data by writing to us via <a href="/contact">Contact</a>. See also our <a href="/legal/dpdp">DPDP statement</a>.</p>
  </div>
  <p style="margin-top:24px; font-size:.85rem; color:var(--ink-2);">[VERIFY: full legal review required before this policy is relied upon for compliance purposes.]</p>`
)}
`,
};

const legalTerms = {
  slug: 'legal/terms',
  title: 'Terms of Service | Jwero',
  description: 'The terms governing use of the Jwero website and product.',
  breadcrumbs: [['Home', '/'], ['Legal', '/legal/privacy'], ['Terms of Service']],
  body: `
${L.section(
  `<h1>Terms of Service</h1>
  <div style="max-width:64em; margin-top:22px; font-size:.95rem; color:var(--ink-2); line-height:1.8;">
    <p>These terms govern your use of this website and, for customers, the Jwero product under a separate order/subscription agreement.</p>
    <h3 style="margin-top:24px; color:var(--ink);">Use of this website</h3>
    <p>Content here is for informational purposes. Pricing shown, where present, is indicative pending your specific quote.</p>
    <h3 style="margin-top:24px; color:var(--ink);">Product terms</h3>
    <p>Customer subscriptions are governed by a separate agreement signed at onboarding, covering scope, data ownership and export rights described on <a href="/trust/security">our security page</a>.</p>
  </div>
  <p style="margin-top:24px; font-size:.85rem; color:var(--ink-2);">[VERIFY: full legal review required before publishing as binding terms.]</p>`
)}
`,
};

const legalDpdp = {
  slug: 'legal/dpdp',
  title: 'DPDP Statement | Jwero',
  description: 'Jwero’s statement on data protection practices relevant to jewellery business customers and their customers’ data.',
  breadcrumbs: [['Home', '/'], ['Legal', '/legal/privacy'], ['DPDP Statement']],
  body: `
${L.section(
  `<h1>DPDP Statement</h1>
  <div style="max-width:64em; margin-top:22px; font-size:.95rem; color:var(--ink-2); line-height:1.8;">
    <p>This statement describes how Jwero approaches data protection for personal data processed on behalf of our customers, including their end customers’ data (e.g. names, contact details, purchase and scheme records).</p>
    <h3 style="margin-top:24px; color:var(--ink);">Data isolation</h3>
    <p>Each customer business’s data is held in an isolated database. See <a href="/trust/security">Security & Data Ownership</a>.</p>
    <h3 style="margin-top:24px; color:var(--ink);">Data principal rights</h3>
    <p>Requests relating to an individual’s personal data held within a customer’s Jwero account should be directed to that business in the first instance; Jwero supports businesses in fulfilling such requests.</p>
    <h3 style="margin-top:24px; color:var(--ink);">Export & deletion</h3>
    <p>Customers can export their data at any time. Deletion requests are honoured per the terms of the customer agreement.</p>
  </div>
  <p style="margin-top:24px; font-size:.85rem; color:var(--ink-2);">[VERIFY: this statement requires legal review against applicable data-protection law (e.g. India’s DPDP Act) before external reliance.]</p>`
)}
`,
};

module.exports = [pricing, company, contact, enterprise, bookDemo, legalPrivacy, legalTerms, legalDpdp];
