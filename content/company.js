const L = require('../lib');

const pricing = {
  slug: 'pricing',
  title: 'Pricing — Assist, Approve, Autopilot | Jwero',
  description: 'Transparent tiers named after how trust is earned: Assist (AI drafts, you send), Approve (one-tap approvals), Autopilot (earned autonomy) — plus Chain plans for networks.',
  faqs: [
    { q: 'Why don’t I see numbers on this page?', a: 'Pricing is being finalised per region ahead of general availability and will be published here — a number you can see before you talk to anyone. Until then, ask on WhatsApp and you will get a straight answer with no “discovery call” required.' },
    { q: 'Is there a lock-in contract?', a: 'Entry tiers offer monthly billing. Annual plans are discounted — a choice, not handcuffs. Your data exports any time you ask.' },
    { q: 'What does implementation include?', a: 'Human-led onboarding: your customer list imported for you, WhatsApp number connected, catalogue set up, and your team trained by role. The scope is written down before you pay.' },
    { q: 'How should I think about the cost?', a: 'Against one recovered customer, not against your billing software’s maintenance fee. One returning bridal customer typically pays for years of Jwero. Run the calculators and use your own numbers.' },
  ],
  body: `
${L.hero({
  eyebrow: 'PRICING',
  h1: 'Priced like growth.<br>Not like software maintenance.',
  sub: 'Three tiers, named after how the AI earns your trust. Start where you are comfortable; move up when the results say so. No hidden costs, no hostage clauses, export-anytime.',
  primary: { href: '#', label: 'Get a straight price on WhatsApp', wa: 'default' },
  secondary: { href: '/book-demo.html', label: 'Book a demo' },
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
      <a class="btn btn-ghost" href="#" data-wa="default">Ask the Assist price</a>
    </div>
    <div class="card tier tier-hot">
      <p class="tier-flag">Most chosen</p>
      <h3>Approve</h3>
      <p>The growth engine. AI proposes everything; you approve with one tap.</p>
      <ul>
        <li>Everything in Assist</li>
        <li>AI staff: follow-ups, win-back, festival journeys</li>
        <li>Gold schemes: enrolment → reminders → maturity</li>
        <li>Digital gold</li>
        <li>Weekly Growth Report to the owner</li>
        <li>Inventory ageing & dead-stock visibility</li>
        <li>Loyalty & campaigns</li>
      </ul>
      <a class="btn btn-primary" href="#" data-wa="default">Ask the Approve price</a>
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
      <a class="btn btn-ghost" href="#" data-wa="default">Ask the Autopilot price</a>
    </div>
  </div>
  <div class="stack-verdict" style="margin-top:26px"><strong>Chains & franchise networks:</strong> multi-branch structure, role-based control, staged rollout and an evaluation kit for your committee. <a href="/book-demo.html">Talk to a specialist</a>.</div>`
)}

${L.section(
  `${L.sectionHead('THE HONEST FRAME', 'What this replaces.', 'Most jewellers pay for five or six disconnected tools — a messaging tool, a catalogue app, a website, scheme spreadsheets, an agency retainer — plus the invisible cost: customers lost to silence. One system, one bill, one owner of the customer record.')}
  ${L.stats([
    { n: '5–6', l: 'tools a typical store pays for today' },
    { n: '1', l: 'system that holds the whole customer' },
    { n: '0', l: 'hostage clauses — export anytime' },
    { n: '30 days', l: 'to your first Growth Report' },
  ])}`
, { tone: 'tint' })}
`,
};

const customers = {
  slug: 'customers',
  title: 'Proof — Verified in the Product, Not Written by Marketing | Jwero',
  description: 'Jwero’s proof policy: product-verified capabilities, sample reports labelled as samples, and founding-partner stories published only with verified numbers.',
  faqs: [
    { q: 'Where are the customer logos and testimonials?', a: 'Coming — with names, numbers and dates, or not at all. We publish stories only after the owner verifies the figures on record. What you will never see here: stock-photo testimonials or unverifiable claims.' },
    { q: 'What is the Lighthouse Partner program?', a: 'A founding cohort of jewellers who get concierge onboarding, direct influence on the roadmap, and preferred terms — in exchange for measured, publishable results. Limited seats per region and segment.' },
  ],
  body: `
${L.hero({
  eyebrow: 'PROOF',
  h1: 'We would rather show you<br>than tell you.',
  sub: 'Jewellery is a trade that trusts hallmarks, not adjectives. So this page holds itself to the same rule: every claim below is verified in the product, every sample is labelled a sample, and customer stories ship with names, numbers and dates — or they don’t ship.',
  primary: { href: '#', label: 'Get a live demo instead', wa: 'default' },
  secondary: { href: '/book-demo.html', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('VERIFIED IN THE PRODUCT', 'Claims an engineer can check.', '')}
  ${L.stats([
    { n: '90+', l: 'intelligence fields on every customer record' },
    { n: '240+', l: 'AI-executable business actions, individually permissioned' },
    { n: '14', l: 'languages the AI voice assistant speaks' },
    { n: '5', l: 'scopes of AI kill switch' },
  ])}
  ${L.cards([
    { title: 'Explainable scores', text: 'Ask why any customer is scored “at risk” or “high intent” and the record shows its factors. No black boxes.' },
    { title: 'Governance that is real', text: 'Approval queues, daily caps and kill switches are enforced in code — bring a technical evaluator and inspect them.' },
    { title: 'Jewellery-native depth', text: 'Purity, certificates, live-rate pricing, scheme lifecycles, gold-loss ledgers — the details only a jewellery-first platform bothers to build.' },
  ])}`
)}

${L.section(
  `<div class="grid grid-2" style="align-items:center; gap:48px;">
    <div>
      ${L.sectionHead('THE WEEKLY ANSWER', 'The Growth Report.', 'This is the artifact our customers judge us by: a weekly, plain-language accounting of who came back, what was booked, and what revenue the system brought home. The sample here is illustrative; yours would be real.')}
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
  `${L.sectionHead('FOUNDING COHORT', 'Become a Lighthouse Partner.', 'The first jewellers in each region get concierge onboarding, a direct line to the product team, preferred terms — and their verified numbers on this page, if they choose. Limited seats per region and segment, because concierge does not scale.')}
  <div class="cta-row"><a class="btn btn-primary" href="#" data-wa="default">Apply on WhatsApp</a><a class="btn btn-ghost" href="/book-demo.html">Book a conversation</a></div>`
)}

${L.ctaBand('Judge us on your own numbers.', 'The honest pitch: run a pilot, read your Growth Report in 30 days, then decide.', 'default')}
`,
};

const migration = {
  slug: 'migration',
  title: 'Migration Centre — Switch Without Fear | Jwero',
  description: 'Keep your books, keep your WhatsApp number, keep your season. We import your data for you, freeze changes during peak season, and guarantee export-anytime.',
  faqs: [
    { q: 'Do I have to stop using my current software?', a: 'No. Day one touches nothing: your billing software stays, your ledger stays, your WhatsApp number stays. Jwero lands alongside and takes the revenue side — customers, channels, schemes, follow-up.' },
    { q: 'Who does the data import?', a: 'We do — customers, catalogue and scheme members, from Excel, CSV or exports of practically any jewellery software, deduplicated and verified with you before go-live.' },
    { q: 'What if we are in wedding season?', a: 'We operate a season change-freeze: no disruptive changes during your peak weeks. Go-lives are scheduled around your calendar, not our quarter.' },
    { q: 'What if I want to leave Jwero later?', a: 'Your data exports in standard formats, any time, no questions. A platform that holds customers hostage does not deserve them.' },
  ],
  body: `
${L.hero({
  eyebrow: 'MIGRATION CENTRE',
  h1: 'Keep your books.<br>Change your growth.',
  sub: 'The riskiest software decision is a rip-out — so we designed the opposite. Jwero lands in days without touching your ledger, proves itself with a weekly report, and expands only as fast as the results earn it.',
  primary: { href: '#', label: 'Plan my migration on WhatsApp', wa: 'default' },
  secondary: { href: '/book-demo.html', label: 'Book a migration call' },
})}

${L.section(
  `${L.sectionHead('THE LAND–PROVE–EXPAND PLAN', 'Nothing breaks. Everything is measured.', '')}
  ${L.steps([
    { title: 'Land (week 1)', text: 'Customers imported for you. Your existing WhatsApp number connected. Catalogue published. Greetings on, approvals on. Your current software untouched.' },
    { title: 'Prove (days 30–90)', text: 'The weekly Growth Report tells you what came back: returning customers, appointments, attributed revenue. Judge the system on evidence.' },
    { title: 'Expand (when ready)', text: 'Schemes go digital, journeys switch on, more branches join — each step because the last one paid for itself.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE DE-RISKING PROMISES', 'Written here so you can hold us to them.', '')}
  ${L.cards([
    { title: 'We import for you', text: 'Customers, catalogue, scheme members — from any spreadsheet or software export, deduplicated, verified with you.' },
    { title: 'Your number stays', text: 'Your WhatsApp number is part of your reputation. It moves onto the official API; customers notice only faster answers.' },
    { title: 'Season change-freeze', text: 'No disruptive changes during your peak season. The calendar is yours.' },
    { title: 'Keep your ledger', text: 'Tally and Zoho Books bridges are built. Your accountant’s world does not change.' },
    { title: 'Pilot first', text: 'Chains start with one branch and written exit criteria. Rollout is earned.' },
    { title: 'Export anytime', text: 'Your data leaves with you in standard formats whenever you ask. This is a design decision, not a favour.' },
  ])}`
, { tone: 'tint' })}

${L.ctaBand('Tell us what you run today.', 'Name your current software and we will send the exact migration plan — what stays, what bridges, what improves.', 'default')}
`,
};

const company = {
  slug: 'company',
  title: 'About Jwero — Why We Build for Jewellers | Jwero',
  description: 'Jwero exists because the world’s most relationship-driven retail trade was left with software that only keeps records. We build the growth engine jewellers deserve.',
  body: `
${L.hero({
  eyebrow: 'ABOUT',
  h1: 'The most personal trade on earth<br>deserved better software.',
  sub: 'Jewellery is bought for weddings, births and promises — and sold, everywhere on earth, through relationships. Yet the industry’s software only ever learned to keep records. We started Jwero to build the other half: the system that remembers people, not just transactions.',
})}

${L.section(
  `${L.sectionHead('WHAT WE BELIEVE', 'Three convictions behind every feature.', '')}
  ${L.cards([
    { title: 'Memory is the moat', text: 'Chains beat family jewellers with systems that remember customers at scale. We industrialise the jeweller’s own superpower and hand it back.' },
    { title: 'AI must ask first', text: 'In a trust-first trade, ungoverned automation is a liability. Approval queues, caps and kill switches are not features — they are the product philosophy.' },
    { title: 'Honesty compounds', text: 'We publish what is not built yet on a public roadmap. A customer won by overpromise is a churn statistic waiting to happen.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE COMPANY', '', 'Jwero is built by a team across product, jewellery retail and AI engineering — working daily with jewellers from single family stores to multi-branch chains. We measure ourselves on one number: the revenue our customers’ Growth Reports attribute to the system.')}
  <div class="cta-row">
    <a class="btn btn-primary" href="/book-demo.html">Talk to us</a>
    <a class="btn btn-ghost" href="#" data-wa="default">WhatsApp the founders’ desk</a>
  </div>`
, { tone: 'tint' })}
`,
};

const bookDemo = {
  slug: 'book-demo',
  title: 'Book a Demo — 15 Minutes, Your Numbers | Jwero',
  description: 'Book a 15-minute demo with someone who knows the jewellery trade — or get the two-minute version on your own WhatsApp right now.',
  body: `
${L.hero({
  eyebrow: 'BOOK A DEMO',
  h1: 'Fifteen minutes.<br>Your scenario, not our script.',
  sub: 'Bring one real situation — a quiet customer list, a leaking scheme book, a flooded Instagram inbox — and we will run it through Jwero live. If we cannot help, we will say so in the first five minutes.',
  primary: { href: '#', label: 'Skip the form — WhatsApp us', wa: 'default' },
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
      ${L.sectionHead('WHAT HAPPENS NEXT', '', '')}
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

module.exports = [pricing, customers, migration, company, bookDemo];
