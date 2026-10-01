const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

const schemes = {
  slug: 'products/gold-schemes',
  title: 'Gold Savings Scheme Software for Jewellers | Jwero',
  description: 'Gold savings scheme software: KYC enrolment, instalment reminders, transparent balances, disciplined maturity and closure — no more paper disputes.',
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
  h1: 'Run your gold scheme with no paper register, no missed instalment, no maturity dispute.',
  sub: 'A savings plan is a promise held for eleven months. Paper registers break that promise: missed entries, disputed balances, silent dropouts. Jwero runs enrolment, reminders, balances and maturity with bank-grade discipline — and turns every maturity into your next sale.',
  primary: { href: '#', label: 'Show me a scheme from enrolment to maturity', wa: 'schemes' },
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
  `${L.sectionHead('', 'Enrolment to maturity, with discipline.', '')}
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
  `<div class="stack-verdict"><strong>The lock-in nobody resents:</strong> a healthy scheme book is next year’s revenue, banked this year. Run the <a href="/tools/gold-scheme-calculator">Gold Scheme Calculator</a> to see what your enrolment rate is worth in locked-in future sales. Want the full picture first? <a href="/blog/gold-savings-scheme-guide">Read the practical guide to running a scheme digitally →</a></div>`
)}

${L.section(`${L.sectionHead('SCHEME QUESTIONS', 'Trust in digital, and who still sets the rules.', '')}${L.faqBlock([
  { q: 'Will long-time members trust digital over the paper register?', a: 'Transparent balances they can check themselves tend to build trust faster than paper, not slower.' },
  { q: 'What if scheme rules differ by our own policy?', a: 'Duration, grace days and maturity benefits are configurable per plan — you set the policy, Jwero gives you the controls and the audit trail.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.honestGapsBlock([
  'Applying a scheme balance at the ecommerce website checkout — balances live on the customer record and are visible to your team and the member today; online redemption is on the roadmap, not wired yet.',
])}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="schemes">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Digitise the promise.', 'Bring your current scheme rules to a demo — we will show them running digitally, mid-cycle members included.', 'schemes')}
`,
};

const digitalGold = {
  slug: 'products/digital-gold',
  title: 'Digital Gold Platform for Jewellers | Jwero',
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
  h1: 'Let customers buy gold in grams from their phone — and redeem it at your counter.',
  sub: 'The fintech apps discovered what jewellery businesses always knew: people love saving in gold. Jwero gives you your own digital gold offering: live rates, gram balances, clean records — so the savings habit that starts on a phone ends at your counter, not a stranger’s app.',
  primary: { href: '#', label: 'Show me gold bought from a phone', wa: 'digitalgold' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.cards([
    { title: 'Live-rate purchases', text: 'Customers buy in currency amounts or grams at current market rates, from their phone, any time — priced in the org’s own currency, not hardcoded to one market.' },
    { title: 'Transparent balances', text: 'Gram holdings visible to the customer at all times — trust through transparency.' },
    { title: 'KYC & records', text: 'Identity capture with real scanned documents attached to the record, transaction ledgers and OTP-verified redemptions keep everything auditable.' },
    { title: 'Redemption at your counter', text: 'Balances convert into jewellery purchases — the digital habit becomes a physical visit.' },
    { title: 'On the customer record', text: 'Digital gold balances live on the same Customer 360 — so the AI workforce knows who is quietly saving toward something big.' },
    { title: 'Runs with your schemes', text: 'Offer classic monthly plans and modern gram savings side by side; different customers, same discipline.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('COMPLIANCE & CONTROLS', 'Built for the audit, not just the sale.', 'The parts of digital gold that finance and compliance actually ask about.')}
  ${L.cards([
    { title: 'Statutory cash & PAN controls', text: 'Section 269ST cash-receipt limits are enforced at the point of collection, and Form 60/61 is accepted for customers without a PAN — built in, not left to a staff member to police by memory.' },
    { title: 'Maker-checker on closures', text: 'Plan closures require dual control, and collections can be configured for maker-checker approval too — segregation of duties on money movement, not just OTP confirmation from the customer.' },
    { title: 'GL posting & GST invoicing', text: 'Scheme money posts to the general ledger, and closure invoices are cut on the correct per-GSTIN series with tax calculated by place of supply.' },
    { title: 'Dormancy tracking & GST reporting', text: 'Inactive plans are tracked as a distinct lifecycle state, and a GSTR-shaped tax report plus an outstanding-liability report (customer liability, gold owed, GST) are both one view.' },
  ], 4)}`
, { tone: 'tint' })}

${L.oneSystemBlock([
  'A digital gold balance nearing a milestone is visible to the same AI workforce that drafts occasion invitations — the redemption conversation starts itself.',
  'A digital gold or scheme balance nearing maturity surfaces automatically on the showroom’s Expected Visits list, landed at the customer’s nearest branch with the balance and date noted for the redemption conversation.',
])}

${L.section(`${L.sectionHead('DIGITAL GOLD QUESTIONS', 'Regulation, exposure, and disputed balances.', '')}${L.faqBlock([
  { q: 'Is this regulated, and are we exposed if something goes wrong?', a: 'Section 269ST cash-limit enforcement, Form 60/61 for PAN-less customers, dual control on closures, full KYC with document scans, and GL posting are all built in. Confirm current regulatory scope for your specific state and setup on a demo before launching — this is a compliance-sensitive product and deserves that conversation.' },
  { q: 'What if a customer disputes their gram balance?', a: 'Balances are transparent and checkable by the customer at any time, which prevents most disputes before they start.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.honestGapsBlock([
  'Buying or redeeming digital gold directly at the ecommerce website checkout — digital gold runs through your team and the customer’s record today; online checkout integration is on the roadmap.',
])}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="digitalgold">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('Compete with the apps — as yourself.', 'Your name, your gold, your customers. See a digital gold journey from first gram to showcase visit.', 'digitalgold')}
`,
};

const multiStore = {
  slug: 'products/multi-store',
  title: 'Multi-store & Franchise Jewellery Software | Jwero',
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
  sub: 'Chains win because every branch runs the same system and every customer is known everywhere. Jwero gives your network the same spine: holdings, brands and branches, consistent pricing, central campaigns — and one report the owner reads.',
  primary: { href: '#', label: 'Show me the owner’s view of every branch', wa: 'multistore' },
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

${L.section(`${L.sectionHead('WHO SETS WHAT', 'Head office decides. The branch runs. Flip a line and see the network re-balance.', 'Central control and local flexibility are not opposites — they are a switch per line.')}${L.controlSplit()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('MULTI-STORE QUESTIONS', 'Autonomy, exceptions, and who stays in control.', '')}${L.faqBlock([
  { q: 'Will branch managers resist losing autonomy?', a: 'Central control applies to pricing consistency and brand standards; day-to-day counter operation stays with the branch.' },
  { q: 'What if one branch genuinely needs different rules?', a: 'Controlled local exceptions route through approvals rather than silently drifting into inconsistency.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq#segments">See every multi-store question →</a></p>`)}

${L.honestGapsBlock([
  'A single unified, immutable audit trail across every module — per-module activity logging exists today; consolidation is in progress.',
])}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="multistore">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

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
    { q: 'What kind of loyalty program can we run — just points?', a: 'No — points-based, tiered-membership, visit-based and spend-based programs are all supported. Pick the structure that fits your store, or combine them.' },
    { q: 'How does a customer actually move up a tier?', a: 'Automatically. A tier can be qualified by points balance, total spend, or redeemed points — whichever thresholds you set — and it is recalculated after every point-earning event. There is no manual badge-assignment step.' },
    { q: 'How does referral tracking work?', a: 'A referral is tracked as a pair — who referred whom — with self-referral blocked outright. It starts pending and only flips to qualified once the referred customer actually completes a purchase that matches your earning rules; the reward is then credited to the referrer through an idempotent ledger entry, so the same order can never double-reward them.' },
    { q: 'Can we tell if our loyalty program is actually paying for itself?', a: 'Yes — a loyalty ROI report shows points liability (what you currently owe members), the redemption/breakage rate (points earned vs. actually redeemed), and member-vs-non-member average spend, in one view.' },
    { q: 'Where do loyalty tier and referral status show up for staff?', a: 'On the same customer record as scheme balances, purchase history and occasions — one card, not a separate loyalty app to check.' },
    { q: 'Can we run a loyalty program and a gold scheme for the same customer?', a: 'Yes — they’re independent layers on one record. A customer can hold a scheme balance and a loyalty tier at the same time, and staff see both in one place.' },
  ],
  body: `
${L.hero({
  eyebrow: 'LOYALTY & REFERRALS',
  h1: 'Reward every visit, not just every gold instalment.',
  sub: 'Gold schemes reward saving. Loyalty rewards everything else: repeat purchases, referrals, being a regular. Jwero lets you define tiers, earning rules and redemptions, and track who referred whom — all landing on the same customer record your team already reads.',
  primary: { href: '#', label: 'Show me rewards on the record', wa: 'loyalty' },
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
  `${L.sectionHead('WHAT’S CONFIGURABLE', 'Program type, tiers, earning and redemption — set by you.', '')}
  ${L.cards([
    { title: 'Program type', text: 'Points-based, tiered-membership, visit-based or spend-based — pick the structure that fits your store, not one fixed points model.' },
    { title: 'Loyalty tiers', text: 'Define the tiers that make sense for your business — how many, what they’re called, what each one unlocks.' },
    { title: 'Earning rules', text: 'Set how customers move up: by purchase, by visit, by referral — configured to your policy, not a fixed formula.' },
    { title: 'Redemptions', text: 'Customers redeem what they’ve earned; what’s redeemable is yours to define.' },
    { title: 'Automatic tier recalculation', text: 'A member’s tier is qualified by points balance, total spend or redeemed points — whichever you set — and recalculated after every point-earning event. Moving up a tier fires an event that can trigger a journey, like a “you’ve been upgraded” message. No one assigns the badge by hand.' },
    { title: 'Referral tracking', text: 'A referral is tracked as a referrer→referee pair, with self-referral blocked. It starts pending and only qualifies once the referred customer completes a matching purchase — the reward is then credited via an idempotent ledger entry, so one order can never double-reward the referrer.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('DOES YOUR PROGRAM PAY FOR ITSELF', 'Loyalty ROI reporting, not just a points ledger.', 'Most loyalty tools show you a balance. This shows you the business case.')}
  ${L.cards([
    { title: 'Points liability', text: 'What you currently owe members in outstanding, unredeemed points — the number a finance conversation actually needs.' },
    { title: 'Redemption / breakage rate', text: 'Points earned versus points actually redeemed, so you know how much of the liability is real versus points that quietly expire unused.' },
    { title: 'Member vs. non-member spend', text: 'Average spend for loyalty members compared with non-members — the closest thing to a direct answer on whether the program is worth running.' },
    { title: 'AI program-design copilot', text: 'A merchant-facing AI feature reviews how your program is structured and suggests specific reward ideas — a tool for whoever is designing the program, not something customers ever see.' },
  ])}`
, { tone: 'tint' })}

${L.oneSystemBlock([
  'A customer’s loyalty tier sits on the same record as their scheme balance, purchase history and occasions — staff check one card, not a separate loyalty app.',
  'A referral is recorded against the referring customer’s record, so a regular who sends you business is visible as one, not just remembered by whoever was at the counter.',
  'A tier upgrade is an event the same journey engine can act on — the “you’ve been upgraded” message is a journey trigger, not a separate notification system.',
])}

${L.section(`${L.sectionHead('LOYALTY QUESTIONS', 'How it differs from schemes, and what you control.', '')}${L.faqBlock([
  { q: 'Is this the same as gold savings schemes?', a: 'No — schemes are gold savings; loyalty is a separate points/tier layer for any purchase. They run side by side on one record.' },
  { q: 'Do we set our own tiers and rules?', a: 'Yes — tiers, earning rules and redemptions are configurable to your business; nothing is fixed by Jwero.' },
  { q: 'Can we see if the loyalty program is worth what it costs?', a: 'Yes — the ROI report shows points liability, redemption/breakage rate, and member-vs-non-member spend in one view.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.honestGapsBlock([
  'Predictive analytics on loyalty behaviour — loyalty reporting today is rule-based and factual, not a machine-learning prediction of who will churn or redeem.',
])}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="loyalty">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('Reward regulars, not just savers.', 'Bring your idea of tiers and rewards to a demo — we will show how they’re configured and where they show up on the customer record.', 'loyalty')}
`,
};

const journeys = {
  slug: 'products/journeys',
  title: 'Customer Journeys — Visual, Approval-Gated Automation | Jwero',
  description: 'Build multi-step customer journeys: triggers, branches, wait steps, messages — with a human-approval gate before anything reaches a customer.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Customer Journeys', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A visual, drag-and-drop journey builder for multi-step customer automation, with an approval node that routes any step through the same human-approval governance used across Jwero.',
    url: 'https://jwero.ai/products/journeys', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Customer Journeys'),
  faqs: [
    { q: 'What is a customer journey in Jwero?', a: 'A visual, drag-and-drop flow you build on a canvas: an entry point, then steps like event triggers, filter and score gates, conditions, branches, wait delays, messages, manual tasks, webhooks, CRM updates, calls, approvals and exits.' },
    { q: 'Can a journey send a message without anyone checking it first?', a: 'Only if you let it. Add an approval node anywhere in the flow and the journey pauses until a person approves — the same approval-queue governance and kill switch described on the AI workforce page, not a separate system.' },
    { q: 'Which channels can a journey message step use?', a: 'Message steps route through the shared channel router into WhatsApp, email, SMS and push — the same channels Broadcasts uses.' },
    { q: 'How does an occasion like a birthday actually get triggered?', a: 'A recurring sweep derives each customer’s next occasion from three sources: a recorded birthday or anniversary date, an inferred purchase-anniversary (a past significant purchase above a value threshold, treated as a recurring date even if the customer never told you), and a built-in Indian jewellery-festival calendar. A date a salesperson has entered by hand always wins — the automation never overwrites it.' },
    { q: 'What does the occasion journey actually send?', a: 'It’s enriched first: the customer’s top AI-recommended products and their lifetime spend are attached before anything goes out. The pre-built template sends curated WhatsApp product picks; if there’s no response in 2 days, it escalates to an AI voice call; either way it ends in a store-visit-booking task for staff — the automation itself never messages the customer directly, it feeds the journey.' },
    { q: 'Are the recommended products actually personalized, or generic bestsellers?', a: 'A co-purchase pattern engine looks at what products actually sell together across 24 months of real order history to build per-customer recommendations. Where there isn’t enough behavioral signal for a customer, the system falls back to category-level suggestions — and marks internally which is which, rather than presenting a fallback as if it were personalized.' },
    { q: 'Can I see what a journey is actually doing right now?', a: 'Yes. Journeys have live run monitoring, replay of past runs, staged rollout, and an incidents view — so a journey running in production is never a black box.' },
    { q: 'How is this different from a simple autoresponder?', a: 'Branching conditions, score and filter gates, wait steps and CRM updates let a journey react to who a customer is and what they do — not just fire on a timer.' },
    { q: 'What do the filter and score gates actually check?', a: 'A deterministic, rule-based scoring system computes intent, confidence, conversion likelihood, ROI probability, message-fatigue and trust-risk per customer from real behavioural signals. Those scores can gate entry to a journey — a customer already scoring high on message-fatigue, for instance, won’t be dropped into another one.' },
    { q: 'Can a journey require someone to approve before it continues?', a: 'Yes — that is what the approval node is for. It is not a workaround; it is a first-class step type in the builder.' },
  ],
  body: `
${L.hero({
  eyebrow: 'CUSTOMER JOURNEYS',
  h1: 'Automation your team can see, and can stop.',
  sub: 'Most journey builders are a black box once you publish them. Jwero’s is a visual canvas you build, watch and can pause at any step — including an approval node that puts a person between a draft and a customer, wired into the same governance spine as the rest of your AI workforce.',
  primary: { href: '#', label: 'Show me a journey waiting for approval', wa: 'journeys' },
  secondary: { href: '/platform/ai-workforce', label: 'How Jwero governs AI actions' },
})}

${L.section(
  `${L.sectionHead('THE BUILDER', 'A real canvas, not a config form.', '')}
  ${L.cards([
    { title: 'Entry & triggers', text: 'Start a journey from an event: a purchase, a scheme instalment due, an occasion, a form submit — or drop a customer in manually.' },
    { title: 'Filter & score gates', text: 'A deterministic, rule-based score — intent, confidence, conversion likelihood, ROI probability, message-fatigue, trust-risk — gates entry, so a customer already fatigued on messages won’t be added to another journey.' },
    { title: 'Branches & conditions', text: 'Split the flow on any condition, so different customers take different paths through the same journey.' },
    { title: 'Wait & message steps', text: 'Add time delays between steps, and send messages through the shared channel router into WhatsApp, email, SMS or push.' },
    { title: 'Approval node', text: 'Insert a human-approval step anywhere — the flow pauses until someone in your team approves, the same queue used across the AI workforce.', link: { href: '/platform/ai-workforce', label: 'See the approval queue' } },
    { title: 'Manual task, webhook, CRM update, call', text: 'Hand a step to a person, call out to another system, update a customer record, or trigger an AI voice call — all as steps in the same flow.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE OCCASION ENGINE', 'Not a festival blast. A real per-customer derivation.', 'A recurring sweep finds each customer’s next occasion from three sources, then hands it to a journey — the automation itself never messages anyone directly.')}
  ${L.cards([
    { title: 'Three sources, one date', text: 'A recorded birthday or anniversary on the customer record; an inferred purchase-anniversary — a past significant purchase above a value threshold, treated as a recurring occasion even if the customer never told anyone; and a built-in Indian jewellery-festival calendar.' },
    { title: 'Manual entries always win', text: 'If a salesperson has entered a date on the customer record by hand, the automatic sweep never overwrites it. A person’s knowledge of their own customer outranks the inference.' },
    { title: 'Enriched before it sends', text: 'Each triggered occasion is attached to the customer’s top AI-recommended products and their lifetime spend before a journey template does anything with it.' },
    { title: 'Curated picks, then escalation', text: 'The pre-built journey sends curated WhatsApp product picks first. No response in 2 days escalates to an AI voice call. Either path ends in a store-visit-booking task for staff — a human closes it, the automation only opens the door.' },
  ], 4)}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('RUNNING IN PRODUCTION', 'Not a black box once it’s live.', '')}
  ${L.cards([
    { title: 'Live run monitoring', text: 'Watch customers move through a journey in real time — where they are, what fired, what’s waiting.' },
    { title: 'Replay', text: 'Step back through a past run to see exactly what happened and why, node by node.' },
    { title: 'Staged rollout', text: 'Publish a journey to a small slice of customers before it runs on everyone.' },
    { title: 'Incidents view', text: 'A journey that errors or stalls shows up as an incident, not a silent failure.' },
  ], 4)}`
, { tone: 'tint' })}

${L.oneSystemBlock([
  'A journey’s approval node opens the same approval queue an AI-drafted WhatsApp reply uses: one governance system shared everywhere, rather than a separate one per feature.',
  'Message steps share the channel router with Broadcasts, so a journey and a broadcast never fight over template rules or send limits.',
  'A journey can update the same customer record the rest of Jwero reads from — a CRM-update step is not a copy, it is the record.',
  'The occasion engine’s product picks come from the same co-purchase recommendation engine used elsewhere in Jwero — built on 24 months of real order history, and marked internally when it has to fall back to a category-level suggestion instead of a personalized one.',
])}

${L.section(`${L.sectionHead('JOURNEY QUESTIONS', 'Approval gates, channels and visibility.', '')}${L.faqBlock([
  { q: 'Can a journey send something without a human checking it?', a: 'Only if you design it that way. Drop in an approval node and the flow waits for a person — the same governance and kill switch used across the AI workforce.' },
  { q: 'Can I watch a journey while it runs, or only see it after?', a: 'Live run monitoring shows customers moving through the flow in real time, plus replay of past runs and an incidents view.' },
  { q: 'How does the occasion engine find a customer’s birthday or anniversary?', a: 'From three sources — a recorded date, an inferred purchase-anniversary from a past significant purchase, or the built-in festival calendar — and a manual date a salesperson entered always takes priority over any of them.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.honestGapsBlock([
  'Triggering a journey from a third-party system through a public inbound API — journeys can call outward via webhook steps today; the public developer API is on the roadmap.',
])}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="journeys">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Build a journey your team can watch.', 'Bring one real flow: a scheme reminder sequence, a festival invite, a win-back — and we’ll build it live with an approval gate in place.', 'journeys')}
`,
};

const campaigns = {
  slug: 'products/campaigns',
  title: 'Campaigns & Broadcasts — WhatsApp, Email, SMS, Push | Jwero',
  description: 'Send consent-aware broadcasts across WhatsApp, email, SMS and push to any segment, then see exactly what each campaign sold, attributed to the send.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Campaigns & Broadcasts', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Consent-aware broadcasts across WhatsApp, email, SMS and push to any segment, group or tag, wrapped in campaigns with UTM-based attribution and an AI campaign-strategist for drafting plans.',
    url: 'https://jwero.ai/products/campaigns', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Campaigns & Broadcasts'),
  faqs: [
    { q: 'What is a Broadcast?', a: 'A single send — WhatsApp, email, SMS or push — to an audience built from a segment, a group or a tag. WhatsApp sends are template-linked, following the same approved-template discipline as the rest of Jwero’s WhatsApp story.' },
    { q: 'What does "consent-aware" actually mean?', a: 'A delivery automatically skips a recipient who has opted out, is on DND, or is missing a required template — a structured skip-reason system, not a manual checklist someone has to remember to run.' },
    { q: 'What is a Campaign, and how is it different from a Broadcast?', a: 'A campaign wraps one or more broadcasts and journeys with UTM-based attribution and a reporting layer, so you see what a campaign actually sold — not just how many messages went out.' },
    { q: 'Where does the audience for a broadcast or campaign come from?', a: 'From segments — built in Jwero’s segmentation tool — or from groups and tags. The same segments feed both journeys and campaigns.' },
    { q: 'Does the AI write and send campaigns on its own?', a: 'No. The AI campaign-strategist turns a brief into a draft plan — audience, message angles, timing — but a person still reviews, builds and sends it. Nothing goes out without your team’s action, the same "AI drafts, human approves" rule used across Jwero.' },
    { q: 'Can a campaign target a loyalty tier?', a: 'Yes — loyalty tiers are one of the ways to build an audience, so a campaign can target your top tier specifically rather than everyone at once.' },
  ],
  body: `
${L.hero({
  eyebrow: 'CAMPAIGNS & BROADCASTS',
  h1: 'One send, every channel, one number for what it sold.',
  sub: 'A broadcast that ignores opt-outs is a ban risk. A campaign with no attribution is a guess about what worked. Jwero sends consent-aware broadcasts across WhatsApp, email, SMS and push, then wraps them in campaigns that report what each one actually sold.',
  primary: { href: '#', label: 'Show me what one campaign sold', wa: 'campaigns' },
  secondary: { href: '/products/loyalty', label: 'Target a loyalty tier' },
})}

${L.section(
  `${L.sectionHead('BROADCASTS', 'One send, four channels, consent built in.', '')}
  ${L.cards([
    { title: 'Any audience', text: 'Build the send list from a segment, a group, or a tag — the same audience tools that feed journeys.', link: { href: '/products/segmentation', label: 'See segmentation' } },
    { title: 'Four channels', text: 'WhatsApp, email, SMS and push from one broadcast — no separate tool per channel.' },
    { title: 'Template-linked WhatsApp', text: 'WhatsApp sends link to approved templates, the same discipline that keeps the rest of Jwero’s WhatsApp use out of ban-risk territory.' },
    { title: 'Consent-aware delivery', text: 'A send automatically skips anyone opted out, on DND, or missing a required template — with a structured, visible skip reason, not a silent drop.' },
  ], 4)}`
)}

${L.section(
  `${L.sectionHead('CAMPAIGNS', 'What it sold, not just what it sent.', '')}
  ${L.cards([
    { title: 'Wraps broadcasts and journeys', text: 'A campaign is a container: one or more broadcasts and journeys, organised around one goal.' },
    { title: 'UTM-based attribution', text: 'Every campaign carries UTM tracking through to the sale, so revenue rolls up to the send that drove it.' },
    { title: 'Real reporting', text: 'See what a campaign actually sold, attributed to the campaign, rather than an open-rate proxy for revenue.' },
    { title: 'AI campaign-strategist', text: 'Give it a brief and it drafts a campaign plan — audience, angles, timing. A person still builds and sends it; nothing ships on its own.' },
  ], 4)}`
, { tone: 'tint' })}

${L.oneSystemBlock([
  'Broadcasts and journeys share the same channel router and the same consent state — an opt-out recorded anywhere is honoured everywhere.',
  'Campaign audiences are built from the same segments, groups and tags Jwero uses for journeys — no separate list to export and re-upload.',
  'A campaign can target a loyalty tier directly, because loyalty tier already lives on the same customer record campaigns read from.',
])}

${L.section(`${L.sectionHead('CAMPAIGN QUESTIONS', 'Consent, attribution, and what the AI can touch.', '')}${L.faqBlock([
  { q: 'Does a broadcast risk sending to someone who opted out?', a: 'No — delivery automatically skips anyone opted out, on DND, or missing a required template, with a structured skip reason recorded.' },
  { q: 'Does the AI campaign-strategist send campaigns by itself?', a: 'No. It drafts a plan from a brief; a person still reviews, builds and sends it — the same "AI drafts, human approves" rule used across Jwero.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.honestGapsBlock([
  'The owner’s weekly growth-report dashboard — campaign-level UTM attribution is live today; the productised owner dashboard built on top of it is rolling out. See <a href="/roadmap">the roadmap</a>.',
])}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="campaigns">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('Send it, then know what it sold.', 'Bring one segment and one offer — we’ll build the broadcast, wire the attribution, and show you the report it produces.', 'campaigns')}
`,
};

module.exports = [schemes, digitalGold, multiStore, loyalty, journeys, campaigns];
