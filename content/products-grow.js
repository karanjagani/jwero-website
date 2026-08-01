const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

const schemes = {
  slug: 'products/gold-schemes',
  title: 'Gold Savings Schemes — Digital Enrolment to Maturity | Jwero',
  description: 'Run gold savings plans digitally: KYC enrolment, instalment reminders, transparent balances, disciplined maturity and closure — no more paper disputes.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Gold Savings Schemes', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Digital gold savings scheme management: KYC enrolment, instalment reminders, transparent balances, and disciplined maturity and closure.',
    url: 'https://jwero.ai/products/gold-schemes', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Gold Savings Schemes'),
  faqs: [
    { q: 'Can I run my traditional 11+1 monthly scheme on Jwero?', a: 'Yes — fixed monthly-amount plans with a bonus month are the default plan shape, alongside gram-accumulation plans. Duration, grace days and maturity benefits are configurable per plan.' },
    { q: 'How do customers pay instalments?', a: 'Customers get reminders on WhatsApp with payment links, can check their balance anytime, and your staff can record counter payments — every entry on an auditable trail.' },
    { q: 'What about compliance?', a: 'Plans carry KYC capture, configurable terms, OTP-verified closures and a full audit trail. Scheme rules vary by market — Jwero gives you the controls and the records; your CA sets the policy.' },
    { q: 'Can I migrate paper schemes mid-cycle?', a: 'Yes. Existing members import with their paid-instalment history, so nobody restarts a plan and nobody’s record is lost.' },
    { q: 'Will my long-time scheme members trust a digital system over the paper register they know?', a: 'Most already trust WhatsApp reminders more than a register they can’t check themselves — transparent balances they can see anytime tend to build trust faster than paper, not slower.' },
    { q: 'What if scheme rules differ by state or by our own policy?', a: 'Duration, grace days and maturity benefits are configurable per plan — Jwero gives you the controls and the audit trail; your CA still sets the policy.' },
  ],
  body: `
${L.hero({
  eyebrow: 'GOLD SAVINGS SCHEMES',
  h1: 'The oldest loyalty program in jewellery. Finally digital.',
  sub: 'A savings plan is a promise held for eleven months. Paper registers break that promise: missed entries, disputed balances, silent dropouts. Jwero runs enrolment, reminders, balances and maturity with bank-grade discipline — and turns every maturity into your next sale.',
  primary: { href: '#', label: 'See a scheme run live', wa: 'schemes' },
  secondary: { href: '/tools/gold-scheme-calculator', label: 'Try the Scheme Calculator' },
})}

${L.section(
  `${L.sectionHead('WHY SCHEMES LEAK', 'The paper register is the problem.', '')}
  ${L.cards([
    { title: 'Silent dropouts', text: 'A member misses month four. Nobody notices until month eight. The plan dies quietly, and so does the future sale it carried.' },
    { title: 'Disputed balances', text: '"I paid that month." Without a shared, verifiable record, every dispute costs you either money or a relationship.' },
    { title: 'Invisible economics', text: 'How many active members? How much corpus? How many maturities next quarter? On paper, nobody truly knows.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('HOW JWERO RUNS IT', 'Enrolment to maturity, with discipline.', '')}
  ${L.steps([
    { title: 'Enrol digitally', text: 'Plan selection, KYC capture and first payment in minutes — at the counter or over WhatsApp.' },
    { title: 'Collect reliably', text: 'Automatic reminders before every due date, payment links in chat, missed-instalment follow-ups by message and AI voice call.' },
    { title: 'Mature gracefully', text: 'Balance transparency all year, OTP-verified closures, and a maturity conversation that walks the member to the showcase.' },
  ])}
  ${L.stats([
    { n: '11+1', l: 'classic plan shape, supported natively' },
    { n: '2', l: 'plan types: fixed amount and gram accumulation' },
    { n: 'OTP', l: 'verified closures — no disputed endings' },
    { n: '100%', l: 'of entries on an auditable trail' },
  ])}`
, { tone: 'tint' })}

${L.oneSystemBlock([
  'A scheme balance shown to the customer on WhatsApp is the same field the AI workforce checks before sending a reminder — never a stale copy.',
  'A matured scheme automatically becomes a lead in the CRM, with the redemption conversation ready to go.',
])}

${L.section(
  `<div class="stack-verdict"><strong>The lock-in nobody resents:</strong> a healthy scheme book is next year’s revenue, banked this year. Run the <a href="/tools/gold-scheme-calculator">Gold Scheme Calculator</a> to see what your enrolment rate is worth in locked-in future sales.</div>`
)}

${L.section(`${L.sectionHead('SCHEME QUESTIONS', 'Trust in digital, and who still sets the rules.', '')}${L.faqBlock([
  { q: 'Will long-time members trust digital over the paper register?', a: 'Transparent balances they can check themselves tend to build trust faster than paper, not slower.' },
  { q: 'What if scheme rules differ by our own policy?', a: 'Duration, grace days and maturity benefits are configurable per plan — you set the policy, Jwero gives you the controls and the audit trail.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="schemes">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Digitise the promise.', 'Bring your current scheme rules to a demo — we will show them running digitally, mid-cycle members included.', 'schemes')}
`,
};

const digitalGold = {
  slug: 'products/digital-gold',
  title: 'Digital Gold — Customers Save in Grams, You Bank the Relationship | Jwero',
  description: 'Let customers buy gold in grams from their phone with live rates, watch savings grow, and convert to jewellery at your counter.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Digital Gold', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Customers buy gold in grams at live rates from their phone, track savings growth, and convert holdings to jewellery in-store.',
    url: 'https://jwero.ai/products/digital-gold', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Digital Gold'),
  faqs: [
    { q: 'How does digital gold work for my customers?', a: 'They buy gold in small amounts from their phone at live rates. Their gram balance grows over time, and when they are ready, it converts to jewellery at your counter — a savings habit that ends in your showcase.' },
    { q: 'How do rates stay current?', a: 'Live rate feeds keep buy prices honest and current, and every transaction is recorded on the customer’s ledger with a full history.' },
    { q: 'Why offer digital gold at all?', a: 'Because someone will hold your customer’s monthly savings habit — a bank, an app, or you. Whoever holds the savings gets the wedding order.' },
    { q: 'Is digital gold regulated, and are we exposed if something goes wrong?', a: 'KYC capture, transaction ledgers and OTP-verified redemptions keep every step auditable. Confirm current regulatory scope for your specific state and setup on a demo before launching — this is a compliance-sensitive product and deserves that conversation.' },
    { q: 'What if a customer disputes their gram balance?', a: 'Every transaction is recorded on the customer’s ledger with a full history — balances are transparent and checkable by the customer at any time, which is what prevents most disputes before they start.' },
  ],
  body: `
${L.hero({
  eyebrow: 'DIGITAL GOLD',
  h1: 'Their savings habit. Your future showcase visit.',
  sub: 'The fintech apps discovered what jewellery businesses always knew: people love saving in gold. Jwero gives you your own digital gold offering — live rates, gram balances, clean records — so the savings habit that starts on a phone ends at your counter, not a stranger’s app.',
  primary: { href: '#', label: 'See digital gold live', wa: 'digitalgold' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.cards([
    { title: 'Live-rate purchases', text: 'Customers buy in currency amounts or grams at current market rates, from their phone, any time.' },
    { title: 'Transparent balances', text: 'Gram holdings visible to the customer at all times — trust through transparency.' },
    { title: 'KYC & records', text: 'Identity capture, transaction ledgers and OTP-verified redemptions keep everything auditable.' },
    { title: 'Redemption at your counter', text: 'Balances convert into jewellery purchases — the digital habit becomes a physical visit.' },
    { title: 'On the customer record', text: 'Digital gold balances live on the same Customer 360 — so the AI workforce knows who is quietly saving toward something big.' },
    { title: 'Runs with your schemes', text: 'Offer classic monthly plans and modern gram savings side by side; different customers, same discipline.' },
  ])}`
)}

${L.oneSystemBlock([
  'A digital gold balance nearing a milestone is visible to the same AI workforce that drafts occasion invitations — the redemption conversation starts itself.',
])}

${L.section(`${L.sectionHead('DIGITAL GOLD QUESTIONS', 'Regulation, exposure, and disputed balances.', '')}${L.faqBlock([
  { q: 'Is this regulated, and are we exposed if something goes wrong?', a: 'KYC, transaction ledgers and OTP-verified redemptions keep every step auditable. Confirm current regulatory scope for your setup on a demo — this deserves that conversation before launch.' },
  { q: 'What if a customer disputes their gram balance?', a: 'Balances are transparent and checkable by the customer at any time, which prevents most disputes before they start.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="digitalgold">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Compete with the apps — as yourself.', 'Your name, your gold, your customers. See a digital gold journey from first gram to showcase visit.', 'digitalgold')}
`,
};

const multiStore = {
  slug: 'products/multi-store',
  title: 'Multi-store & Franchise — Every Branch Consistent, Every Customer Known | Jwero',
  description: 'Holdings, brands and branches on one platform: branch-consistent pricing, role-based access, central campaigns, and customers recognised at every counter.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Multi-store & Franchise', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Multi-store and franchise structure on one platform: central price rules with branch exceptions, role-based access, and customers recognised at every branch.',
    url: 'https://jwero.ai/products/multi-store', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Multi-store & Franchise'),
  faqs: [
    { q: 'Can each branch have different prices and stock?', a: 'Yes. Branch-level stock, transfer tracking and price rules with central control — consistency where you want it, local flexibility where you allow it.' },
    { q: 'Can franchise partners use it without seeing everything?', a: 'Yes. Role-based access with ~150 fine-grained permissions controls exactly what each role, branch and partner can see and do.' },
    { q: 'Does a customer’s history follow them between branches?', a: 'Yes — one customer record across the network. She is known at every counter, and the whole relationship rolls up to one view for the owner.' },
    { q: 'Will branch managers resist losing autonomy?', a: 'Central control applies to pricing consistency and brand standards; day-to-day counter operation stays with the branch. Most managers experience it as less admin work, not less authority.' },
    { q: 'What if one branch genuinely needs different rules than the rest?', a: 'Controlled local exceptions exist for exactly this — they route through approvals rather than silently drifting, so flexibility doesn’t become inconsistency nobody can see.' },
  ],
  body: `
${L.hero({
  eyebrow: 'MULTI-STORE & FRANCHISE',
  h1: 'Grow to ten stores without losing the one-store touch.',
  sub: 'Chains win because every branch runs the same system and every customer is known everywhere. Jwero gives your network the same spine: holdings, brands and branches, consistent pricing, central campaigns — and one report the owner actually reads.',
  primary: { href: '#', label: 'Talk to a specialist', wa: 'multistore' },
  secondary: { href: '/solutions/multi-store-chains', label: 'The multi-store playbook' },
})}

${L.section(
  `${L.cards([
    { title: 'Network structure', text: 'Holdings → brands → branches modelled properly, with settings inherited and overridden deliberately.' },
    { title: 'One customer, every counter', text: 'Purchase history, plans and preferences follow the customer across branches.' },
    { title: 'Branch-consistent pricing', text: 'Central price rules with controlled local exceptions — approvals required, drift impossible.', link: { href: '/platform/pricing-engine', label: 'See the pricing engine' } },
    { title: 'Role-based control', text: '~150 permissions decide who sees customers, costs, schemes and reports — per role, per branch.' },
    { title: 'Central marketing', text: 'Campaigns and festival journeys run centrally, execute locally, and report by branch.' },
    { title: 'Owner’s rollup', text: 'Stock, sales, schemes and customer movement across the network, in one view.' },
  ])}`
)}

${L.oneSystemBlock([
  'A customer who buys at branch A is recognised at branch B on the same record — there’s only one Meera in the system, not one per branch.',
  'Branch-level performance data feeds the same reports the owner’s rollup reads from — no separate export per store.',
])}

${L.section(`${L.sectionHead('MULTI-STORE QUESTIONS', 'Autonomy, exceptions, and who stays in control.', '')}${L.faqBlock([
  { q: 'Will branch managers resist losing autonomy?', a: 'Central control applies to pricing consistency and brand standards; day-to-day counter operation stays with the branch.' },
  { q: 'What if one branch genuinely needs different rules?', a: 'Controlled local exceptions route through approvals rather than silently drifting into inconsistency.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq#segments">See every multi-store question →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="multistore">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Bring network discipline to your business.', 'Multi-store deployments get staged rollouts: one pilot branch, then the network. Ask how.', 'multistore', { enterprise: true })}
`,
};

const loyalty = {
  slug: 'products/loyalty',
  title: 'Loyalty & Referrals — Tiers, Earning Rules, Redemptions | Jwero',
  description: 'Configure loyalty tiers, earning rules and redemptions, and track customer referrals — all on the same customer record your team already uses.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Loyalty & Referrals', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Configurable loyalty tiers, earning rules and redemptions, plus referral tracking, on the shared Jwero customer record.',
    url: 'https://jwero.ai/products/loyalty', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Loyalty & Referrals'),
  faqs: [
    { q: 'Is this the same thing as your gold savings schemes?', a: 'No. Gold schemes and digital gold are savings products tied to grams of gold. Loyalty is a separate points/tier layer that can apply to any purchase — the two are designed to run side by side, both visible on the same customer record.' },
    { q: 'Can we set our own tiers and earning rules?', a: 'Yes — tiers, how customers earn toward them, and what they can redeem are all configurable to your business. We don’t ship a fixed set of tier names or point values; you define what fits your store.' },
    { q: 'How does referral tracking work?', a: 'When an existing customer refers a new one, that link is tracked in the system, so staff can see it on the customer record rather than relying on memory or a manual note.' },
    { q: 'Where do loyalty tier and referral status show up for staff?', a: 'On the same customer record as scheme balances, purchase history and occasions — one card, not a separate loyalty app to check.' },
    { q: 'Can we run a loyalty program and a gold scheme for the same customer?', a: 'Yes — they’re independent layers on one record. A customer can hold a scheme balance and a loyalty tier at the same time, and staff see both in one place.' },
  ],
  body: `
${L.hero({
  eyebrow: 'LOYALTY & REFERRALS',
  h1: 'Reward every visit, not just every gold instalment.',
  sub: 'Gold schemes reward saving. Loyalty rewards everything else — repeat purchases, referrals, being a regular. Jwero lets you define tiers, earning rules and redemptions, and track who referred whom — all landing on the same customer record your team already reads.',
  primary: { href: '#', label: 'See loyalty on a demo', wa: 'loyalty' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('WHY A SEPARATE LAYER', 'Not every reward is about gold.', '')}
  ${L.cards([
    { title: 'Loyalty isn’t savings', text: 'A scheme rewards a savings habit toward gold. Loyalty can reward any purchase, any visit, any referral — it doesn’t require the customer to be saving toward anything.' },
    { title: 'Referrals go untracked', text: 'A customer sends a friend your way and nobody records it. The referral happens, the credit doesn’t — and the habit of referring quietly stops.' },
    { title: 'Status lives in someone’s head', text: 'Who’s a regular, who’s owed something, who referred whom — without a record, it’s whatever the counter staff on duty happens to remember.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT’S CONFIGURABLE', 'Tiers, earning and redemption — set by you.', '')}
  ${L.cards([
    { title: 'Loyalty tiers', text: 'Define the tiers that make sense for your business — how many, what they’re called, what each one unlocks.' },
    { title: 'Earning rules', text: 'Set how customers move up — by purchase, by visit, by referral — configured to your policy, not a fixed formula.' },
    { title: 'Redemptions', text: 'Customers redeem what they’ve earned; what’s redeemable is yours to define.' },
    { title: 'Referral tracking', text: 'When an existing customer refers a new one, the system tracks the link so it’s visible on both records, not just remembered at the counter.' },
  ])}`
)}

${L.oneSystemBlock([
  'A customer’s loyalty tier sits on the same record as their scheme balance, purchase history and occasions — staff check one card, not a separate loyalty app.',
  'A referral is recorded against the referring customer’s record, so a regular who sends you business is visible as one, not just remembered by whoever was at the counter.',
])}

${L.section(`${L.sectionHead('LOYALTY QUESTIONS', 'How it differs from schemes, and what you control.', '')}${L.faqBlock([
  { q: 'Is this the same as gold savings schemes?', a: 'No — schemes are gold savings; loyalty is a separate points/tier layer for any purchase. They run side by side on one record.' },
  { q: 'Do we set our own tiers and rules?', a: 'Yes — tiers, earning rules and redemptions are configurable to your business; nothing is fixed by Jwero.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="loyalty">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Reward regulars, not just savers.', 'Bring your idea of tiers and rewards to a demo — we will show how they’re configured and where they show up on the customer record.', 'loyalty')}
`,
};

module.exports = [schemes, digitalGold, multiStore, loyalty];
