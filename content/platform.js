const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Platform', '/platform'], [label]];

const platform = {
  slug: 'platform',
  title: 'The Jewellery Business Operating System: How Jwero Works | Jwero',
  description: 'How Jwero runs a jewellery business on one record: customers, catalogue, stock, counter billing, purchase, workshop, accounts and team, with an AI workforce that waits for your approval.',
  breadcrumbs: [['Home', '/'], ['Platform']],
  faqs: [
    ...require('./journey').why.faqs,
    { q: 'Is Jwero an ERP?', a: 'Both — but as one system, not two. It remembers your customers like a CRM and runs your operations like an ERP (orders, inventory, purchases, repairs, billing), from the same record, so a sale, a scheme payment and a repair all update the one place your team already looks at. Your statutory books stay in Tally or Zoho Books.' },
    { q: 'Can I use only one module, like just WhatsApp?', a: 'Yes. Most businesses start with the Assist scope (customers imported, WhatsApp connected, catalogue published) and expand module by module as each one proves itself.' },
    { q: 'What makes this different from buying a CRM plus a WhatsApp tool plus a catalogue app?', a: 'Separate tools mean separate memories. A WhatsApp tool doesn’t know her gold-plan balance; a CRM doesn’t sell on Instagram. In Jwero, the customer, the catalogue and the channels live on one record, so AI can actually sell instead of just logging.' },
    { q: 'Is there a public API or SSO for enterprise IT?', a: 'Yes to both. Enterprise SSO/SCIM (SAML, OIDC, SCIM 2.0 provisioning) is shipped, and webhooks and APIs are available for your own integrations.' },
    { q: 'Isn’t this too complex for a small business?', a: 'The complexity is optional. You can run the whole business on Assist (customers, WhatsApp, catalogue) and never touch the rest. Complexity is available when you want it, never mandatory.' },
    { q: 'My business is unusual — will this fit, or will I be forcing a generic tool?', a: 'Custom fields, price rules and per-branch configuration exist because jewellery businesses aren’t generic. We’ll also tell you plainly what we don’t customise, on a demo, before you commit.' },
  ],
  body: `
${L.hero({
  eyebrow: 'WHY AN OS, AND THE TOUR',
  h1: 'One record for the whole business, every department on it, nothing sent without your approval.',
  sub: 'Customers, catalogue, stock, the counter, purchase, the workshop, the books and the team. Every module in Jwero reads and writes the same data — that is what makes it an operating system, not a bundle of features.',
  primary: { href: '#', label: 'Chat or call with us', wa: 'platform' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
  mock: require('./graphics').orbit(),
})}

${L.section(`${L.sectionHead('THE PRODUCT', 'This is Jwero, running.', 'Operations, Sales, Marketing, Finance and Teams across the top; stock, purchase and the workshop on one screen. A real recording, not a mock-up.')}
<figure class="pvid"><div class="pvid-frame"><video data-pvid muted loop playsinline preload="none" poster="/assets/product/os-overview.webp" width="1280" height="720" aria-label="Screen recording of Jwero: the Stock and Workshop overview with open purchase orders, inventory value, metal value and a stock pulse, then the tabs for Sales, Marketing, Finance and Teams"><source src="/assets/product/os-overview.mp4" type="video/mp4"></video><button type="button" class="pvid-toggle" data-pvid-toggle aria-label="Pause the recording">Pause</button></div>
<figcaption>The Stock and Workshop overview in Jwero: open purchase orders, pieces awaiting receipt, inventory, metal and making value, dead stock and the stock on hand. <a href="/book-demo">Book a demo</a> to see it on your own stock.</figcaption></figure>`, { tone: 'tint' })}

${require('./journey').why.sections}

${(() => {
  const fs = require('fs'), path = require('path');
  const img = (h) => { const k = h.replace(/^\//, '').replace(/\//g, '--'); return fs.existsSync(path.join(__dirname, '..', 'assets', 'og', k + '.jpg')) ? `<img src="/assets/og/${k}.jpg" alt="" loading="lazy" width="1200" height="630">` : ''; };
  const Q = [['How does a price follow the gold rate?', '/platform/pricing-engine'], ['How does Jwero know who to call first?', '/platform/customer-memory'], ['How do I stop AI doing something I did not approve?', '/platform/ai-workforce'], ['Will it work with Tally and my website?', '/platform/integrations'], ['How long does it take to get started?', '/platform/onboarding'], ['Is my data safe?', '/trust/security']];
  const C = [
    ['/platform/pricing-engine', 'Pricing engine', 'Purity rate cards, making-charge models, wastage and stone rules: every price follows today’s rate.'],
    ['/platform/customer-memory', 'Customer memory', '198 signals and 11 scores, each with its reason, on one record your business owns.'],
    ['/platform/ai-workforce', 'AI workforce and governance', 'AI agents that ask first: approvals, daily and money caps, kill switches and a full log.'],
    ['/platform/integrations', 'Integrations', 'Tally and Zoho Books, Shopify, WooCommerce, Unicommerce, Meta, payments and an MCP connection for AI assistants.'],
    ['/platform/integrations/tally', 'Tally bridge', 'Keep your books in Tally; sales, returns, payments and expenses sync without retyping.'],
    ['/platform/onboarding', 'Onboarding and support', 'What we import for you, how training runs, and how fast you go live.'],
    ['/trust/security', 'Security and your data', 'Who can see what, where data lives, and how to export it any time.'],
    ['/products', 'Every product', '35 products that read and write this one record.'],
  ];
  return L.section(`${L.sectionHead('INSIDE THE PLATFORM', 'Pick the question you came with.', '')}
  <div class="bl-goals bl-goals-3">${Q.map(([q, h]) => `<a href="${h}"><b>${q}</b><i>Read the answer →</i></a>`).join('')}</div>
  <div class="bl-grid" style="margin-top:28px">${C.map(([h, t, d]) => `<a class="bl-card" href="${h}">${img(h)}<span class="bl-tag">Platform</span><b>${t}</b><span class="bl-desc">${d}</span></a>`).join('')}</div>`, { tone: 'tint' });
})()}

${L.section(
  `${L.sectionHead('THE SYNC TAX', 'What five disconnected tools cost you, in minutes.', 'Nine ordinary questions, answered two ways.')}
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>Question</th><th>Five tools + CSV exports</th><th>One system</th></tr></thead>
    <tbody>
      <tr><td><strong>Who bought last Diwali and hasn’t returned?</strong></td><td>Cross-reference three spreadsheets, if anyone kept them</td><td>One filter, instantly</td></tr>
      <tr><td><strong>What’s her scheme balance right now?</strong></td><td>Call the branch, hope the register is updated</td><td>On her record, live</td></tr>
      <tr><td><strong>Which pieces have sat in the tray two years?</strong></td><td>A physical stocktake</td><td>Ageing view, any time</td></tr>
      <tr><td><strong>Did the WhatsApp enquiry become a sale?</strong></td><td>Unknowable — different systems</td><td>One thread, start to close</td></tr>
      <tr><td><strong>What did this campaign actually sell?</strong></td><td>A guess</td><td>Attributed on the record</td></tr>
      <tr><td><strong>What does the owner see across branches?</strong></td><td>A phone call to each one</td><td>One rollup</td></tr>
      <tr><td><strong>What do we owe this vendor, and what is still to arrive?</strong></td><td>The notebook, then a call to the accountant</td><td>On the vendor’s account, live</td></tr>
      <tr><td><strong>How much gold is with each karigar tonight?</strong></td><td>The khata book, if it is up to date</td><td>The balance, in fine grams</td></tr>
      <tr><td><strong>Did today’s cash match the bills?</strong></td><td>Counted and argued at closing</td><td>Tallied at day-close, by register</td></tr>
    </tbody>
  </table></div>`
)}

${L.section(
  `${L.sectionHead('EVERY DEPARTMENT', 'What changes across the whole jewellery business.', 'The counter, the stock room, the vendor, the workshop, the books and the team run on the same record as the customer.')}
  ${L.compareRows(L.DEPARTMENTS)}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('THE THREE PILLARS', 'Feature depth, organised by promise.', '')}
  ${L.pillarConstellation()}`
)}

${L.governanceStrip()}

${L.section(
  `${L.sectionHead('YOUR TEAM RUNS ON ONE LOGIN TOO', 'Staff chat and calling, built in — not bolted on from Slack.', 'The same platform gives your own team channels, DMs and video calls, so internal coordination doesn’t need a second subscription and a second login.')}
  ${L.cards([
    { title: 'Channels & DMs', text: 'Team channels and direct messages, with unread counts surfaced right in the nav — no separate app to check.' },
    { title: 'Video calls with screen share', text: 'Team calls with screen sharing, a pinnable focus layout for whoever is presenting, and a minimizable window so a call doesn’t block the rest of your work.' },
    { title: 'Ringtones & notifications', text: 'Incoming calls ring, messages toast with sound — the ordinary signals a chat tool needs, present from day one.' },
    { title: 'One login, one record', text: 'Staff chat sits inside the same platform as HR, CRM and the customer inbox — not a Slack or Teams workspace your ops team has to provision and pay for separately.' },
  ], 4)}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('INTEGRATIONS & COEXISTENCE', 'Keep your Tally. Books stay where your CA likes them.', '')}
  ${require('./graphics').tallyFlow()}
  ${L.cards([
    { title: 'Tally', text: 'Connect Tally, map your ledgers, import masters and check records against Tally. Your accountant’s world doesn’t change.', link: { href: '/platform/integrations/tally', label: 'The accountant page' } },
    { title: 'Zoho Books', text: 'Full accounting bridge for Zoho-first businesses.' },
    { title: 'Shopify / WooCommerce / Unicommerce', text: 'Your online store works from the same product data as the shop, and products can be published to Unicommerce.' },
    { title: 'Stripe, PayPal, Razorpay & Cashfree', text: 'Payment collection worldwide and in India, verified end to end.' },
    { title: 'Meta', text: 'Official WhatsApp Business API, Instagram and Facebook — the channels jewellery sells on.' },
  ], 4)}
  <p style="margin-top:20px"><a class="card-link" href="/platform/integrations">See all integrations →</a></p>`
)}

${L.honestGapsBlock([
  'E-way bill generation — e-invoices are generated in Tally through the bridge.',
  'Offline mode — Jwero is a connected product today.',
])}

${L.section(`${L.sectionHead('QUESTIONS EVALUATORS ASK', 'Straight answers for the people who have to sign off.', '')}${L.faqBlock([
  ...require('./journey').why.faqs,
  { q: 'Is Jwero an ERP?', a: 'Both, running as a single system that does the job of a CRM and an ERP at once. It remembers customers like a CRM and runs operations like an ERP, from the same record. Your statutory books stay in Tally or Zoho Books.' },
  { q: 'Can I use only one module, like just WhatsApp?', a: 'Yes. Most businesses start with customers imported, WhatsApp connected and catalogue published, then expand module by module.' },
  { q: 'What makes this different from a CRM plus a WhatsApp tool?', a: 'Separate tools mean separate memories. In Jwero the customer, catalogue and channels live on one record, so AI can sell instead of just logging.' },
  { q: 'Is there a public API or single sign-on (SSO)?', a: 'Yes to both. SSO is shipped (SAML, OIDC, SCIM 2.0 provisioning), and webhooks and APIs are available for your own integrations.' },
  { q: 'Isn’t this too complex for a small business?', a: 'The complexity is optional — run everything on Assist and never touch the rest.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>
<p class="cta-note" style="margin-top:14px">Evaluating vendors side by side? <a href="/blog/jewellery-software-buyer-checklist">Work through the jewellery software buyer’s checklist →</a></p>`)}

${L.ctaBand('See the operating system on your own data.', 'Bring one real customer scenario to a 15-minute demo — we’ll run it end to end, one record at a time.', 'platform')}
`,
};

const customerMemory = {
  slug: 'platform/customer-memory',
  title: 'Customer Memory: 198 Signals, 11 Scores, One Record | Jwero',
  description: 'Jwero reads 198 kinds of customer signal from 36 sources, scores each customer on 11 live, explainable scores, places her in one of 6,600 states, and decides who to reach, with what and when — every send waiting for approval.',
  breadcrumbs: BC('Customer Memory'),
  faqs: [
    { q: 'What does Jwero remember about each customer?', a: 'Everything she does, as a signal: 198 kinds, from 36 sources — the counter, WhatsApp, the website, gold schemes, girvi, calls, Instagram, occasions. Sixty-eight of them move her scores the moment they land. Underneath, 90+ structured fields hold the facts: purchases, scheme balance and instalments, birthdays, anniversaries and wedding months, metal and design preferences, consent and best hour per channel.' },
    { q: 'How does it decide who to reach, and when?', a: 'Each customer carries 11 live scores — intent, conversion, churn risk, trust and others — computed by rules you can read, each with its reasons shown. Where she sits — new or lapsed, champion or about-to-sleep, WhatsApp or call, birthday or wedding — is one of 6,600 states. From that, Jwero picks the play, the channel and her best hour, and drafts the message. Scores fade when she goes quiet, so the list stays honest.' },
    { q: 'Is this machine learning?', a: 'No, and we say so. The scores are explainable rules you can inspect — not a model nobody can question. The AI drafts the words; the rules decide the who and the when; you decide what runs alone.' },
    { q: 'How is this different from a normal CRM?', a: 'Generic CRMs know names and notes. Jwero’s record is jewellery-native: it knows her scheme balance, her daughter’s wedding month and what today’s gold rate means for her budget — as structured fields, every module can act on, not free-text notes.' },
    { q: 'What happens when a salesperson leaves?', a: 'Nothing. The memory belongs to the business, not to a personal phone. Every conversation, preference and promise stays on the record.' },
  ],
  body: `
${L.hero({
  eyebrow: 'CUSTOMER MEMORY',
  h1: 'The memory your best salesperson has. At business scale.',
  sub: 'The great jewellers always remembered — the daughter’s wedding, the taste for temple work, the plan maturing in March. Jwero makes that memory a system: 198 kinds of signal read into 11 live scores, every one explained on demand, owned by the business.',
  primary: { href: '#', label: 'See a live record', wa: 'memory' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
  mock: L.mockMemory,
})}

${L.section(
  `${L.sectionHead('WHAT THE RECORD KNOWS', 'Not notes. Fields.', 'Her gold balance, her daughter’s wedding month, her missed instalment — each one a structured column, on every record.')}
  ${L.cards([
    { title: 'Money & plans', text: 'Gold savings balance, instalments paid and missed, maturity dates, lifetime value.' },
    { title: 'Occasions', text: 'Birthdays, anniversaries, wedding months and upcoming family occasions — the reasons jewellery gets bought.' },
    { title: 'Taste', text: 'Metals, purity, styles, price bands, brands browsed and bought — learned from real behaviour.' },
    { title: 'Reachability', text: 'Preferred channel, consent per channel, best send window, message fatigue — reach people the way they want.' },
    { title: 'Signals', text: '198 kinds, from 36 sources — every view, message, visit, instalment and call — many of which move a score the moment they land.' },
    { title: 'The "why"', text: 'Every score comes with its reasons. Ask why a customer is "at risk" and the record shows its work.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('HOW JWERO DECIDES', 'Who to reach, with what, and when — decided from what she actually did.', 'Not a list of fields. A reading of every signal she gives you, scored in rules you can inspect, turned into a draft that waits for your tap.')}
  ${L.intelligence()}`
)}

${L.oneSystemBlock([
  'The AI reply on WhatsApp drafts from this record — it knows her scheme balance because schemes and chat share one row, not a sync job.',
  'The catalogue share that goes out matches her recorded taste and budget, not a generic PDF.',
  'The occasion journey that invites her before her daughter’s wedding month reads the same field a salesperson would check at the counter.',
])}

${L.section(
  `${L.sectionHead('', 'Memory is not a report. It is revenue.', '')}
  ${L.steps([
    { title: 'Win-back', text: 'Customers who quietly stopped coming are surfaced with a reason and a suggested invitation — before they buy elsewhere.' },
    { title: 'Occasion selling', text: 'The right customers hear from you before the festival, before the anniversary, before the wedding season — not after.' },
    { title: 'Counter intelligence', text: 'When she walks in, your team greets a known customer: her plan, her taste, her last visit — on one screen.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('MEMORY QUESTIONS', 'What owners and evaluators ask first.', '')}${L.faqBlock([
  { q: 'What does Jwero remember about each customer?', a: 'Every signal she gives you — 198 kinds from 36 sources — read into 11 live scores with a visible why, on one record the business owns. Purchases, scheme balance, occasions, taste, consent and best hour per channel sit underneath as structured fields.' },
  { q: 'How is this different from a normal CRM?', a: 'Generic CRMs know names and notes. Jwero’s record is jewellery-native: it knows her scheme balance, her daughter’s wedding month and what today’s gold rate means for her budget — as structured fields every module can act on, not free-text notes.' },
  { q: 'What happens when a salesperson leaves?', a: 'Nothing. The memory belongs to the business, not to a personal phone. Every conversation, preference and promise stays on the record.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.ctaBand('Give your business a memory.', 'We import your customers from Excel or your current software — the memory starts working in days.', 'memory')}
`,
};

const pricingEngine = {
  slug: 'platform/pricing-engine',
  title: 'Live Gold Rate Pricing: Rate, Making Charge & Stone Rules | Jwero',
  description: 'How Jwero prices a piece: purity rate cards, 3 making-charge models, wastage, per-carat stone pricing, channel/branch rules, and an audit log for every price.',
  breadcrumbs: BC('The Pricing Engine'),
  faqs: [
    { q: 'How does Jwero calculate a price?', a: 'Metal rate (by purity, updated manually or from a live feed) × weight, plus a making charge (percentage, per-gram, or flat — your choice per category), plus stone or gemstone value priced separately, resolved against any price rules that apply to that channel, branch or customer. Every resolution is logged.' },
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
    { title: 'Metal rate, by purity', text: 'A rate card per metal and purity: 24K, 22K, 916, 18K, 14K and more — entered manually (a common am/pm pattern) or fed from a live source, your choice.' },
    { title: 'Making charge', text: 'Percentage of metal value, per-gram, or a flat amount — set per category, so no single formula gets forced onto everything you sell. A separate service charge can apply as a percentage of the subtotal.' },
    { title: 'Wastage', text: 'Tracked as its own percentage where you apply it, distinct from the making charge — so the two never get silently confused with each other.' },
    { title: 'Stone & gemstone value', text: 'Priced separately from the metal: per carat for gemstones, per piece for pearls — and can be tied to the certificate on file (GIA, IGI, SGL, HRD, BIS).' },
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
  <p style="margin-top:16px; font-size:.95rem; color:var(--ink-2);">A separate service charge (a percentage of the subtotal) can apply on top where a business charges one, kept distinct from the making charge itself.</p>`
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
  `${L.sectionHead('', 'Every override, checked and logged.', 'Every jewellery counter has had the moment: a good customer, a bit more discount than the price allows. The question is whether that moment leaves a record or a mystery.')}
  ${L.steps([
    { title: 'Requested', text: 'A salesperson submits an override with the price they want to offer and a reason — not a blank field to type any number into.' },
    { title: 'Checked', text: 'The request is checked against a floor and ceiling price set in advance, so an approver is reviewing a bounded exception, not an open-ended ask.' },
    { title: 'Logged', text: 'Approved or declined, it is on the record: who asked, who decided, and exactly what changed — the same log a dispute or an audit would need.' },
  ])}`
, { tone: 'tint' })}


${L.section(`${L.sectionHead('PRICING ENGINE QUESTIONS', 'What owners and evaluators ask first.', '')}${L.faqBlock([
  { q: 'How does Jwero calculate a price?', a: 'Metal rate (by purity) × weight, plus a making charge (percentage, per-gram or flat), plus stone value priced separately, resolved against any rules for that channel, branch or customer. Every resolution is logged.' },
  { q: 'Can making charges differ by category?', a: 'Yes — percentage, per-gram or flat, set per category or product, plus an optional service charge on the subtotal. Not one formula forced onto everything.' },
  { q: 'How are diamonds and gemstones priced?', a: 'Separately from the metal: per carat for gemstones, per piece for pearls — and can be tied to the certificate on file so the price and the paperwork agree.' },
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
    { q: 'What can the AI workforce do?', a: '251 individually permissioned actions across 7 categories: CRM and replies, inbox drafting, inventory, campaigns, reporting and finance — draft replies, price a catalogue enquiry at today’s rate, schedule follow-ups, send instalment reminders, invite customers before festivals, book appointments and more.' },
    { q: 'Can the AI give a discount without me knowing?', a: 'No. Pricing and discount actions follow your price rules and staff permissions — the AI drafts messages, it does not set prices or approve exceptions.' },
    { q: 'What if it says something embarrassing to a customer I’ve known for twenty years?', a: 'That fear is exactly what the approval queue exists for. Nothing reaches her until your team has seen it. Quiet hours mean nobody, old customer or new, gets a message at 11pm either.' },
    { q: 'How does it know how to sound like MY shop, not a generic chatbot?', a: 'It drafts from your catalogue, your prices, your policies and your past conversations — the same context a new employee would need, except it never forgets any of it.' },
    { q: 'Is this the same risk as an AI chatbot going rogue online?', a: 'No. Nothing sends without approval by default, ever. The entire governance layer (approvals, caps, kill switch) exists because a jewellery relationship can’t survive an ungoverned bot near it.' },
    { q: 'Does the AI voice agent that calls customers speak all 14 languages too?', a: 'Yes. Chat, voice and phone calls all run in the same 14 languages.' },
  ],
  body: `
${L.hero({
  eyebrow: 'AI WORKFORCE & GOVERNANCE',
  h1: 'AI that waits for your yes.',
  sub: 'Hiring is hard. Training is harder. Jwero gives you an AI workforce that never forgets, never sleeps, and never acts without your approval. One switch takes it all back.',
  primary: { href: '#', label: 'See the approval queue live', wa: 'ai' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
  mock: L.mockApproval,
})}

${L.section(
  `${L.sectionHead('', 'The work your team never gets time for.', '')}
  ${L.cards([
    { icon: '✉', title: 'Answer in minutes', text: 'Every WhatsApp, Instagram and website enquiry gets a knowledgeable draft reply (with her history and live prices) in minutes, at midnight, during festivals.' },
    { icon: '↺', title: 'Follow up on everything', text: 'Every enquiry that didn’t buy, every quote that went quiet, every instalment coming due — followed up on schedule, never forgotten.' },
    { icon: '🗓', title: 'Work the calendar', text: 'Birthdays, anniversaries, festivals — the AI workforce proposes the right invitation to the right customers, weeks ahead.' },
    { icon: '☏', title: 'Speak, not just type', text: 'The AI voice assistant holds conversations in 14 languages on WhatsApp and web chat — native to Jwero, no third party — with transcripts on the customer record.' },
  ], 4)}`
)}

${L.governanceStrip()}

${L.section(
  `${L.sectionHead('', 'The trust ladder — autonomy is earned, never assumed.', 'Every business starts at Assist. You promote the AI one action type at a time — based on measured accuracy, not promises.')}
  ${L.steps([
    { title: 'Assist', text: 'AI drafts, humans send. Every action waits in the approval queue. This is day one, and some businesses happily stay here.' },
    { title: 'Approve', text: 'Routine, low-risk actions run with one-tap approval; anything sensitive still waits. You see a log of everything.' },
    { title: 'Autopilot', text: 'Action types with proven accuracy run within hard caps — and demote themselves automatically if anything drifts.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('WHAT "240+ ACTIONS" ACTUALLY MEANS', 'A real registry, category by category.', 'Every governed action is a defined, individually permissioned entry in Jwero’s action registry — the same registry the approval queue and kill switch enforce against. Here’s what the 251 active entries cover.')}
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>Category</th><th>What lives there</th><th>Actions</th></tr></thead>
    <tbody>
      <tr><td><strong>CRM</strong></td><td>Customer replies, follow-ups, occasion outreach, quotations, lead routing</td><td>56</td></tr>
      <tr><td><strong>Internal</strong></td><td>Task assignment, staff/HR workflows, AI-administration and calling logs</td><td>55</td></tr>
      <tr><td><strong>Inbox</strong></td><td>WhatsApp/Instagram/email reply drafting, follow-up scheduling</td><td>52</td></tr>
      <tr><td><strong>Inventory &amp; Products</strong></td><td>Catalogue updates, stock actions, ageing flags</td><td>41</td></tr>
      <tr><td><strong>Campaigns &amp; Marketing</strong></td><td>Broadcasts, segment suggestions, journey steps</td><td>31</td></tr>
      <tr><td><strong>Reporting</strong></td><td>Dashboard summaries, the owner’s growth report</td><td>10</td></tr>
      <tr><td><strong>Finance</strong></td><td>Invoice and receivables-adjacent drafting</td><td>6</td></tr>
    </tbody>
  </table></div>
  <p style="margin-top:16px; font-size:.9rem; color:var(--ink-2);">251 active entries today (259 defined, 8 excluded as internal audit/governance tools that don’t touch a customer) — “240+” on the rest of this site is the conservative, round-down version of that same number. Want your own AI agent to reach this data directly instead? See the <a href="/platform/integrations">MCP server on the Integrations page</a>.</p>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('THE 14 LANGUAGES, NAMED', 'Not a marketing round number — the actual list.', 'The AI assistant’s chat and voice conversations — native on WhatsApp and web chat, no telephony provider involved — run in these 14 languages. Phone calls and IVR, over your connected telephony provider, use the same 14 languages.')}
  <div class="chip-row" style="display:flex; flex-wrap:wrap; gap:8px; margin-top:6px;">
    ${['English','Hindi','Marathi','Gujarati','Tamil','Telugu','Kannada','Bengali','Malayalam','Punjabi','Odia','Arabic','Spanish','French'].map((l) => `<span class="chip">${l}</span>`).join('')}
  </div>`
)}

${L.section(`${L.sectionHead('QUESTIONS OWNERS ASK', 'Answers, not reassurance.', '')}${L.faqBlock([
  { q: 'Will AI replace my sales team?', a: 'No. The AI workforce does the remembering and the follow-up your team never has time for; your people do the selling.' },
  { q: 'What if the AI drafts something wrong?', a: 'Nothing goes out without approval until you decide otherwise. You can edit any draft, reject it, or switch a whole action type off.' },
  { q: 'Can I turn it all off?', a: 'Yes — instantly, at five levels: one action, one agent, one branch, one channel, or everything.' },
  { q: 'Can the AI give a discount without my knowledge?', a: 'No — pricing and discounts follow your price rules and staff permissions; the AI drafts messages, it does not set prices.' },
  { q: 'What if it embarrasses me with a longtime customer?', a: 'The approval queue exists for exactly this. Nothing reaches her until your team has seen and approved it.' },
  { q: 'Does the AI voice agent that calls customers speak all 14 languages too?', a: 'Yes. Chat, voice and phone calls all run in the same 14 languages.' },
])}
<p class="cta-note" style="margin-top:14px">More on AI trust and control? <a href="/faq#ai-trust">See every AI question we’ve been asked →</a></p>`)}

${L.ctaBand('Meet your first AI workforce member.', 'Watch it draft, watch it wait for your approval, watch it learn. On your own WhatsApp.', 'ai')}
`,
};

const integrations = {
  slug: 'platform/integrations',
  title: 'Jwero Integrations: Tally, Shopify, Meta, Stripe, PayPal, MCP | Jwero',
  description: 'Jwero bridges to Tally and Zoho Books, connects Shopify, WooCommerce and Unicommerce, collects via Stripe, PayPal, Razorpay and Cashfree, sells on official Meta channels, connects to your telephony provider for AI voice calls and IVR, and exposes a first-party MCP server for your own AI agents.',
  breadcrumbs: BC('Integrations'),
  faqs: [
    { q: 'Does Jwero replace Tally?', a: 'No. Tally stays your ledger. Jwero connects to it, imports masters, checks records against it and posts bills, returns and payments to it automatically, so your accountant reviews instead of retyping.' },
    { q: 'Can I keep my Shopify store?', a: 'Yes. Connect Shopify and your store works from the same product data as the shop, so Jwero adds WhatsApp, Instagram and memory on top of the store you already run.' },
    { q: 'Is the WhatsApp integration official?', a: 'Yes — Jwero uses the official WhatsApp Business API, with template approvals, consent management and opt-out handling built in.' },
    { q: 'Which telephony providers work for AI voice calls and IVR?', a: 'Jwero connects to your telephony provider; most telephony/CPaaS providers can be connected on request. This only applies to actual phone calls and IVR — voice on WhatsApp and web chat is native to Jwero and needs no telephony provider at all. For the phone channel, Jwero drives the AI conversation and IVR logic — the call itself runs over the line you connect, the same division of labour as WhatsApp (Meta’s API) or payments (Razorpay/Cashfree).' },
  ],
  body: `
${L.hero({
  eyebrow: 'INTEGRATIONS',
  h1: 'Keep what works. Jwero joins in.',
  sub: 'The fastest way to fail a jewellery business is to demand a rip-out. Jwero lands alongside your existing tools, bridges to them, and earns its place — starting with the revenue side.',
  primary: { href: '#', label: 'Ask about your stack', wa: 'integrations' },
  secondary: { href: '/migration', label: 'Visit the Migration Centre' },
  mock: require('./graphics').integrationMap(),
})}

${L.section(
  `${L.cards([
    { title: 'Tally', text: 'The bridge your accountant will approve of: ledgers mapped, masters imported and records checked against Tally; the books stay exactly where they are.', link: { href: '/platform/integrations/tally', label: 'The accountant page' } },
    { title: 'Zoho Books', text: 'Full accounting bridge for Zoho-first businesses.' },
    { title: 'Shopify', text: 'Your store works from the same product data. Keep the store, add the channels and the memory.' },
    { title: 'WooCommerce', text: 'Connector for WordPress-based stores.' },
    { title: 'Unicommerce', text: 'Publish products to Unicommerce for marketplace-heavy operations.' },
    { title: 'Razorpay & Cashfree', text: 'Payment collection for website checkout, verified end to end.' },
    { title: 'Meta (WhatsApp, Instagram, Facebook)', text: 'Official APIs for the channels where jewellery actually sells today.' },
    { title: 'Your telephony provider', text: 'Telephony connectors that carry Jwero’s AI voice agent — outbound/inbound calls and IVR menus — over a line you already run.', link: { href: '/products/ai-sales-agents', label: 'See voice & IVR' } },
    { title: 'Your ERP export', text: 'Customers and catalogue import from Excel/CSV exports of practically any jewellery ERP.' },
  ], 4)}`
)}

${L.section(
  `${L.sectionHead('BRING YOUR OWN AI AGENT', 'Jwero also speaks MCP.', 'Alongside the AI workforce built into Jwero, a first-party MCP (Model Context Protocol) server lets you connect any MCP-compatible AI agent — Claude, or your own tooling — directly to your live data.')}
  ${L.cards([
    { title: 'A real tool registry, not a demo endpoint', text: 'Hundreds of scoped tools across CRM, inbox, HR, inventory, finance, marketing, org and reporting — the same data your team already works from, exposed for an agent to read and act on.' },
    { title: 'Reads broad, writes conservative', text: 'Read access is available widely; write access is deliberately narrow — physical acts, cash payouts, OTP-gated closures and gateway payments are excluded on purpose, not by oversight.' },
    { title: 'Your own connect flow', text: 'A guided connect flow and an in-product API-keys page let your team (or a technical partner) set this up without engineering help from us.' },
    { title: 'Permission-scoped per key', text: 'Access is scoped per API key and membership, the same permission model that governs every other user in Jwero.' },
  ], 4)}
  <p style="margin-top:16px; font-size:.9rem; color:var(--ink-2);">This is distinct from the built-in AI workforce described on <a href="/platform/ai-workforce">the AI Workforce & Governance page</a> — that’s Jwero’s own AI acting inside your business under approval; MCP is the door for an AI agent of your choosing to reach the same data from outside.</p>`
, { tone: 'tint' })}

${L.honestGapsBlock(['A general-purpose, self-serve public developer REST API is on the roadmap — the MCP server above already gives AI agents scoped access today; a broader API for custom, non-agent integrations doesn’t exist yet.'])}

${L.section(`${L.sectionHead('INTEGRATION QUESTIONS', 'What changes in your stack.', '')}${L.faqBlock([
  { q: 'Does Jwero replace Tally?', a: 'No. Tally stays your ledger. Jwero connects to it, imports masters, checks records against it and posts bills, returns and payments to it automatically, so your accountant reviews instead of retyping.' },
  { q: 'Can I keep my Shopify store?', a: 'Yes. Connect Shopify and your store works from the same product data as the shop, so Jwero adds WhatsApp, Instagram and memory on top of the store you already run.' },
  { q: 'Is the WhatsApp integration official, or a ban risk?', a: 'Official WhatsApp Business API — template approvals, consent management and opt-out handling are built in, which is what keeps it out of ban-risk territory.' },
  { q: 'Can I connect my own AI agent to Jwero data?', a: 'Yes — a first-party MCP server exposes scoped CRM, inbox, HR, inventory, finance, marketing, org and reporting tools to any MCP-compatible agent, with a guided connect flow and an API-keys page in-product.' },
  { q: 'Does Jwero support IVR and AI voice calls?', a: 'Yes — connect your telephony provider, and Jwero’s AI voice agent runs outbound/inbound phone calls and IVR menus over that line. Voice on WhatsApp and web chat is separate and fully native to Jwero, with no telephony connection needed. See <a href="/products/ai-sales-agents">AI Sales Agents & Voice</a> for what the agent actually does on each channel.' },
])}`)}

${L.ctaBand('Tell us your stack.', 'Send the list of tools you run today — we will map exactly what stays, what bridges, and what Jwero takes over.', 'integrations')}
`,
};

const tally = {
  slug: 'platform/integrations/tally',
  title: 'Tally Integration for Jewellers: Keep Your Books | Jwero',
  description: 'Jwero bridges to Tally so your books stay exactly where your CA likes them. Jwero runs sales, stock, purchase and the workshop; Tally keeps the ledger.',
  breadcrumbs: [['Home', '/'], ['Platform', '/platform'], ['Integrations', '/platform/integrations'], ['Tally']],
  faqs: [
    { q: 'Will switching to Jwero disrupt my accountant’s workflow?', a: 'No. That is the point of the bridge — Jwero connects to Tally, imports customer and item masters and checks records against Tally, in the shape your accountant already expects. Bills, returns and payments post to Tally automatically as vouchers, so your accountant reviews entries instead of typing them.' },
    { q: 'What exactly syncs to Tally?', a: 'Jwero connects to Tally, maps your ledgers once, imports customer and item masters, checks records against Tally, and posts bills, returns and payments to Tally automatically as vouchers. Nothing is typed twice.' },
    { q: 'Do I have to stop using Tally to start using Jwero?', a: 'No — this is the entire design. Keep Tally as your ledger of record; Jwero takes over customers, channels, schemes and follow-up alongside it.' },
    { q: 'My accountant is sceptical of new software near the books. What do I tell them?', a: 'That nothing about their world changes. They keep filing GST exactly as they do today, in Tally — with customer and item masters imported instead of re-typed. Invite them to the demo — most objections dissolve once they see the bridge, not the sales pitch.' },
    { q: 'Does this replace GST filing or e-invoicing?', a: 'No — GST invoicing at the live gold rate happens in Jwero, but statutory filing and e-invoice/IRN stay Tally’s job (e-invoice automation is on our roadmap, not shipped). Two systems, one clean line.' },
    { q: 'What if our CA wants to keep using their own workflow entirely?', a: 'They can. The bridge changes what arrives in Tally, not how your CA works once it’s there.' },
  ],
  body: `
${L.hero({
  eyebrow: 'KEEP YOUR TALLY',
  h1: 'Apna hisaab rakho. Kamai badlo.',
  sub: 'Keep your books. Change your earnings. Jwero does not ask you to abandon Tally. It runs customers, the counter, stock, purchase and the workshop, and connects to the ledger your CA already trusts.',
  primary: { href: '#', label: 'Ask your accountant question', wa: 'tally' },
  secondary: { href: '/migration', label: 'See the migration plan' },
})}

${L.section(
  `${L.sectionHead('THE DIVISION OF LABOUR', 'Two systems, one clean line.', '')}
  <div class="grid grid-2">
    <div class="card"><h3>Tally keeps</h3><p>Statutory books, GST filings, the ledger of record — everything your accountant already trusts, unchanged.</p></div>
    <div class="card"><h3>Jwero runs</h3><p>Customer memory, WhatsApp and Instagram selling, gold schemes, catalogue, follow-up and the AI workforce — the revenue side.</p></div>
  </div>
  <p style="margin-top:20px; font-size:.95rem; color:var(--ink-2);">Jwero connects to Tally, maps your ledgers, imports customer and item masters and checks records against Tally. Bills, returns and payments post to Tally automatically as vouchers, so your accountant’s month-end starts from entries that are already in the books.</p>`
)}

${L.section(`${L.sectionHead('QUESTIONS ACCOUNTANTS ASK', 'What to tell your CA.', '')}${L.faqBlock([
  { q: 'My accountant is sceptical of new software near the books. What do I tell them?', a: 'That nothing about their world changes — masters are imported instead of re-typed, and they still enter sales and payment vouchers in Tally exactly as before.' },
  { q: 'Does this replace GST filing or e-invoicing?', a: 'No — GST invoicing at the live rate happens in Jwero; statutory filing and e-invoice/IRN stay Tally’s job. Two systems, one clean line.' },
  { q: 'Can our CA keep their own workflow?', a: 'Yes — the bridge changes what arrives in Tally, not how your CA works once it’s there.' },
])}
<p class="cta-note" style="margin-top:14px">Want the full division of labour explained? <a href="/blog/jewellery-software-and-tally">Read the guide to running jewellery software and Tally together →</a></p>`)}

${L.ctaBand('Bring your accountant into the conversation.', 'We are happy to walk your CA through exactly what moves and what doesn’t.', 'tally')}
`,
};

const onboarding = {
  slug: 'platform/onboarding',
  title: 'Onboarding & Support — Live in a Day, Trained in Your Language | Jwero',
  description: 'How Jwero implementation works: what we import for you, how training runs, and the season change-freeze that protects your busiest months.',
  breadcrumbs: BC('Onboarding & Support'),
  faqs: [
    { q: 'How long does implementation take?', a: 'Days, not months, for the first stage: customers imported, your WhatsApp number connected, catalogue published, greetings live with approvals on.' },
    { q: 'Will my team need training?', a: 'If your team can use WhatsApp, they can use Jwero. Training runs by role, live, with a named onboarding contact — not a video library you’re left to figure out alone.' },
    { q: 'Can you implement without disrupting our wedding season?', a: 'Yes — a season change-freeze policy means no disruptive changes during your peak weeks. Go-lives are scheduled around your calendar.' },
    { q: 'What if my older or more senior staff resist the change?', a: 'Start them on one thing: the shared inbox with AI-drafted replies. It makes their day easier immediately — usually the fastest way to convert a sceptic is to make their job less tedious, not to explain the technology.' },
    { q: 'What if my whole team pushes back on new software?', a: 'If they can use WhatsApp, they can use Jwero — that’s deliberate, not a slogan. Training is role-based and live, and the AI workforce takes over the tedious parts (drafting, reminders) so staff feel helped, not surveilled.' },
    { q: 'We tried new software before and it just sat unused. Why would this be different?', a: 'Because Assist gives your team something useful on day one (a shared inbox that answers faster than before) instead of a training manual to read first. Adoption follows usefulness, not a mandate.' },
  ],
  body: `
${L.hero({
  eyebrow: 'ONBOARDING & SUPPORT',
  h1: 'If your team can use WhatsApp, they can run Jwero.',
  sub: 'Set up in a day, settled in thirty: customers imported, your WhatsApp number connected, catalogue published and approvals switched on from day one — with a written change-freeze around your season.',
  primary: { href: '#', label: 'Plan your onboarding', wa: 'onboarding' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('THE FIRST 30 DAYS', 'What happens, week by week.', '')}
  ${L.steps([
    { title: 'Day 1: Set up, then days 2–7: Land', text: 'Set up in a day: customers imported for you, WhatsApp number connected, catalogue published. Nothing ripped out — your billing software stays.' },
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

${L.section(`${L.sectionHead('TRAINING & ADOPTION QUESTIONS', 'Getting a hesitant team to use it.', '')}${L.faqBlock([
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
  `${L.stats([
    { n: '25', l: 'shipped, live today' },
    { n: '5', l: 'rolling out now' },
    { n: '9', l: 'named on the roadmap, not shipped' },
  ])}`
)}

${L.section(
  `<div class="grid grid-3 road-grid">
    <div class="road-col now">
      <h3><span class="road-dot"></span>Shipped</h3>
      <div class="road-group">
        <p class="road-group-label">Selling & customer memory</p>
        <div class="road-item"><strong>Customer Memory</strong>198 signals, 11 explainable scores</div>
        <div class="road-item"><strong>WhatsApp, Instagram & Facebook commerce</strong>official APIs, one inbox</div>
        <div class="road-item"><strong>AI voice assistant</strong>14 languages, transcripts</div>
        <div class="road-item"><strong>Quotations</strong>draft → sent → accepted, PDF + shareable link</div>
      </div>
      <div class="road-group">
        <p class="road-group-label">Marketing & growth</p>
        <div class="road-item"><strong>Journeys, campaigns & loyalty</strong>festival triggers, consent-aware broadcasts</div>
        <div class="road-item"><strong>Campaign attribution (UTM)</strong>what each send actually sold, on the record</div>
        <div class="road-item"><strong>Customer segmentation</strong>live rule-based audiences, RFM tiers</div>
        <div class="road-item"><strong>Gold savings schemes</strong>enrolment → instalments → maturity, now on the website too. Gram-based plans are being corrected and are not promoted until they are</div>
      </div>
      <div class="road-group">
        <p class="road-group-label">Operations</p>
        <div class="road-item"><strong>Jewellery catalogue (PIM)</strong>purity, certificates, HUID-aware</div>
        <div class="road-item"><strong>Inventory intelligence</strong>valuation, ageing, dead-stock visibility</div>
        <div class="road-item"><strong>GST invoicing at live metal rates</strong>AR ledger, payment reminders</div>
        <div class="road-item"><strong>GSTR-1/3B report export</strong>GSTN-offline-tool format, for manual upload</div>
        <div class="road-item"><strong>Showroom intelligence</strong>walk-in register, live floor, walkout rescue</div>
        <div class="road-item"><strong>Repairs & after-sales service</strong>custody chain, warranty/AMC, in-store old-gold exchange</div>
        <div class="road-item"><strong>Purchase & vendor management</strong>POs, GRN, vendor bills, self-serve vendor portal</div>
        <div class="road-item"><strong>Manufacturing job-work</strong>with gold-loss tracking</div>
        <div class="road-item"><strong>Hallmarking dispatch tracking</strong>batch to AHC, with auto re-hallmark flags on repairs</div>
        <div class="road-item"><strong>Multi-store structure</strong>brands, branches, role-based access</div>
      </div>
      <div class="road-group">
        <p class="road-group-label">Workforce</p>
        <div class="road-item"><strong>Payroll</strong>attendance-aware, maker-checker approval, payslips + bank file</div>
        <div class="road-item"><strong>Karigar wage settlement</strong>rate cards, work logs, khata ledger, settlement runs</div>
        <div class="road-item"><strong>Attendance, leave & recruitment</strong>geo attendance, accrual-based leave, hire-to-onboarding pipeline</div>
        <div class="road-item"><strong>Performance, LMS & incentives</strong>review cycles, courses with certificates, sales commission with clawbacks</div>
      </div>
      <div class="road-group">
        <p class="road-group-label">Governance & integrations</p>
        <div class="road-item"><strong>AI workforce with governance</strong>approvals, daily caps, kill switch</div>
        <div class="road-item"><strong>Enterprise SSO/SCIM</strong>SAML, OIDC and SCIM 2.0 user provisioning</div>
        <div class="road-item"><strong>Bridges</strong>Tally and Zoho Books (connect, map, import masters, check records; posting stays manual), Shopify and WooCommerce on the same product data, publishing to Unicommerce</div>
      </div>
    </div>
    <div class="road-col soon">
      <h3><span class="road-dot"></span>Rolling out</h3>
      <div class="road-group">
        <p class="road-group-label">In active rollout</p>
        <div class="road-item"><strong>Offline counter billing</strong>switched on per business: sales are kept on the device and sync when the connection returns</div>
        <div class="road-item"><strong>Counter POS: returns, old-gold exchange & cash day-close</strong>registers, shifts and a reconciled till close — <a href="/products/pos">shipped</a></div>
        <div class="road-item"><strong>Attribution dashboard</strong>the owner’s weekly growth report, productised</div>
        <div class="road-item"><strong>Direct ad-platform publishing</strong>one-click publish from Ads Manager, not uniform across every flow yet</div>
        <div class="road-item"><strong>Occasion & win-back recipes</strong>packaged one-click playbooks</div>
      </div>
    </div>
    <div class="road-col next">
      <h3><span class="road-dot"></span>On the roadmap</h3>
      <div class="road-group">
        <p class="road-group-label">Statutory & finance</p>
        <div class="road-item"><strong>Direct e-invoice filing, e-way bills & GSTR auto-filing</strong>the e-invoice file is prepared for the portal and the IRN recorded on the bill; filing stays with your CA today</div>
        <div class="road-item"><strong>Metal reconciliation & physical metal count</strong>metal balances by party are live; a full reconciliation is not</div>
        <div class="road-item"><strong>Girvi / gold-loan module</strong>pledge, interest schemes, automatic interest collection, renewal, release and auctions, <a href="/products/girvi">shipped</a></div>
      </div>
      <div class="road-group">
        <p class="road-group-label">Ecommerce website</p>
        <div class="road-item"><strong>Scheme redemption at website checkout</strong>website enrolment and instalment payments are live; applying a balance at checkout isn’t wired yet</div>
        <div class="road-item"><strong>Google Shopping sync</strong>not built</div>
        <div class="road-item"><strong>HUID / certificate verification widget</strong>the catalogue carries the data; the widget isn’t built</div>
        <div class="road-item"><strong>Old-gold exchange / buyback calculator online</strong></div>
      </div>
      <div class="road-group">
        <p class="road-group-label">Operations & platform</p>
        <div class="road-item"><strong>CAD file storage & design approval stage</strong>not built</div>
        <div class="road-item"><strong>Predictive ML forecasting</strong>today’s inventory intelligence is ageing/valuation-based, not predictive</div>
      </div>
    </div>
  </div>`
)}

${L.ctaBand('Need something on this list?', 'Tell us which item decides your purchase — roadmap order is negotiable for lighthouse partners.', 'roadmap')}
`,
};

module.exports = [platform, customerMemory, pricingEngine, aiWorkforce, integrations, tally, onboarding, roadmap];
