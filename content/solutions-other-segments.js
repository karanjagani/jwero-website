const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Solutions', '/solutions'], [label]];

const bullionFaqs = [
  { q: 'Can deals be captured at a locked rate?', a: 'Yes — deal capture records the rate at the moment of agreement, with a clean ledger of every settlement against it.' },
  { q: 'Do you offer girvi / gold-loan functionality?', a: 'No — a girvi/gold-loan module is on the long-term roadmap, not shipped today. We say so plainly rather than imply otherwise.' },
  { q: 'Our trades depend on speed. Won’t logging deals slow us down?', a: 'Deal capture is built to be fast at the point of agreement, not a paperwork step afterward — it replaces reconstructing terms from memory later, which costs more time than it saves.' },
];

const bullionTraders = {
  slug: 'solutions/bullion-gold-traders',
  title: 'For Bullion Dealers & Gold Traders | Jwero',
  description: 'Rate-locked deal capture and clean counterparty ledgers — your trading relationships as a business asset, not a personal phone’s contact list.',
  breadcrumbs: BC('Bullion & gold traders'),
  faqs: bullionFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR BULLION DEALERS & GOLD TRADERS',
  h1: 'Volume trades, zero ambiguity.',
  sub: 'Rate-locked deal capture and a clean ledger of every settlement — your trading relationships as a business asset the business owns, not a book that lives in one person’s phone.',
  primary: { href: '#', label: 'Talk shop on WhatsApp', wa: 'bullion' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}
${L.section(
  `${L.painRows([
    { quote: 'Our counterparty relationships live in one trader’s personal phone.', title: 'Relationships as a business asset', text: 'Every counterparty, deal and settlement remembered on the business’s own record.' },
    { quote: 'Rate-lock disputes are constant and hard to prove.', title: 'Rate-locked, auditable deal capture', text: 'The agreed rate and terms are recorded at the moment of the deal, not reconstructed afterward.' },
  ])}`
)}
${L.honestGapsBlock(['Girvi / gold-loan functionality is on the long-term roadmap, not shipped today.'])}
${L.section(`${L.sectionHead('QUESTIONS TRADERS ASK', 'Rate locks, girvi and deal speed — answered.', '')}${L.faqBlock(bullionFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="bullion">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See a deal, captured properly.', 'Bring one recent trade — we’ll show how it would sit on the record.', 'bullion', { enterprise: true })}
`,
};

const brandsFaqs = [
  { q: 'Can we keep brand consistency across partners and channels?', a: 'Yes — a central catalogue and campaign governance keep pricing, imagery and messaging consistent everywhere the brand sells.' },
  { q: 'Can we see distributor-level sell-through?', a: 'Distributor and channel visibility depends on how your network is structured in Jwero — ask us for the specific setup for your brand.' },
  { q: 'Our partners have their own systems already. How does this fit in without a fight?', a: 'Central catalogue and pricing rules govern what partners sell, not how they run their own operations — it’s brand governance, not a system replacement for every partner.' },
];

const jewelleryBrands = {
  slug: 'solutions/jewellery-brands',
  title: 'For Jewellery Brands — Multi-Channel & Multi-Partner | Jwero',
  description: 'One brand voice across every counter and channel: central catalogue, brand-controlled campaigns and distributor visibility.',
  breadcrumbs: BC('Jewellery brands'),
  faqs: brandsFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR JEWELLERY BRANDS',
  h1: 'One brand voice across every counter and channel.',
  sub: 'Central catalogue, brand-controlled campaigns and distributor visibility — so the brand stays consistent whether a customer meets it on Instagram, at a partner counter, or on your own storefront.',
  primary: { href: '#', label: 'Talk shop on WhatsApp', wa: 'brands' },
  secondary: { href: '/enterprise', label: 'Talk to a specialist' },
})}
${L.section(
  `${L.painRows([
    { quote: 'Every partner presents the brand a little differently.', title: 'Central catalogue, brand-controlled', text: 'One catalogue, one set of campaign rules, enforced everywhere the brand sells.' },
    { quote: 'We can’t see how partners are actually selling us.', title: 'Distributor visibility', text: 'Structure your network in Jwero to get channel and partner performance in one view.' },
  ])}`
)}
${L.section(`${L.sectionHead('QUESTIONS BRAND TEAMS ASK', 'Consistency and partner visibility — answered.', '')}${L.faqBlock(brandsFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="brands">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Bring your channel map.', 'Show us how your brand sells today — we’ll map it to one central system.', 'brands', { enterprise: true })}
`,
};

const d2cFaqs = [
  { q: 'Do I have to leave Shopify?', a: 'No — the Shopify connector syncs products and orders, so Jwero adds WhatsApp, Instagram and memory on top of the store you already run.' },
  { q: 'Is there a free trial for D2C brands?', a: 'Self-serve trial mechanics are being finalised — most D2C brands start with a pilot using their own data instead. Ask us on WhatsApp.' },
  { q: 'We already use a lot of ecommerce tools. Won’t this just be one more?', a: 'It replaces the gap between them, not the tools themselves — the WhatsApp/Instagram-native selling and live-rate pricing a generic ecommerce stack doesn’t do, added on top of what you keep.' },
];

const d2cBrands = {
  slug: 'solutions/d2c-brands',
  title: 'For D2C & Ecommerce-First Jewellery Brands | Jwero',
  description: 'Keep Shopify. Add the channels it can’t do — WhatsApp/Instagram-native selling, live-rate pricing and a video counter, on top of your stack.',
  breadcrumbs: BC('D2C & ecommerce-first'),
  faqs: d2cFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR D2C & ECOMMERCE-FIRST BRANDS',
  h1: 'Keep Shopify. Add the channels it can’t do.',
  sub: 'Ad clicks bring traffic; chat closes it, badly, without memory. Jwero adds WhatsApp and Instagram-native selling, live-rate pricing and a video counter on top of the storefront you already run.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'd2c' },
  secondary: { href: '/platform/integrations', label: 'See the Shopify connector' },
})}
${L.section(
  `${L.painRows([
    { quote: 'DMs turn into orders badly — or not at all.', title: 'Turn ad clicks into managed conversations', text: 'The AI workforce advances WhatsApp and Instagram conversations toward a sale, with your approval on every message.' },
    { quote: 'Shopify doesn’t understand gold-rate pricing.', title: 'Live-rate pricing on top of your store', text: 'Catalogue prices follow the live metal rate — something a generic ecommerce platform doesn’t do natively.' },
    { quote: 'Retention beyond the first order is basically zero.', title: 'A customer record, not just an order history', text: 'One record turns a first-time buyer into a remembered relationship, with occasion and win-back journeys.' },
  ])}`
)}
${L.section(
  `${L.sectionHead('A DAY IN YOUR D2C BUSINESS ON JWERO', 'Morning to night.', '')}
  ${L.steps([
    { title: 'Morning', text: 'Overnight Instagram DMs from an ad campaign already have drafted, gold-rate-accurate replies waiting for approval — not sitting unread since midnight.' },
    { title: 'Afternoon', text: 'A Shopify order comes in; it lands on the same customer record as her WhatsApp conversation from last week — one buyer, one history, not two disconnected systems.' },
    { title: 'Evening', text: 'A cart-abandoner gets a personal, approved follow-up on WhatsApp — not a generic discount-code email blast.' },
    { title: 'Night', text: 'The next morning’s ad spend gets pointed at what actually converted, because the record shows which DM turned into a real order.' },
  ], 4)}`
, { tone: 'tint' })}
${L.jtbdBlock([
  { when: 'an ad-driven DM comes in after hours', want: 'get an accurate, on-brand reply immediately', so: 'the click doesn’t go cold before your team wakes up' },
  { when: 'a customer buys on Shopify after chatting on WhatsApp', want: 'have both touchpoints on one record', so: 'the relationship isn’t split across two disconnected tools' },
])}
${L.section(`${L.sectionHead('QUESTIONS D2C BRANDS ASK', 'Shopify, trials and the stack you keep — answered.', '')}${L.faqBlock(d2cFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/compare/jwero-vs-shopify">See Jwero vs Shopify</a> or <a href="/faq">the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="d2c">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Add what Shopify can’t do.', 'Tell us your current stack — we’ll show exactly what Jwero adds on top.', 'd2c')}
`,
};

const startupsFaqs = [
  { q: 'Is this too much system for a brand-new business?', a: 'No — you start with the same three things every business does: customers imported, WhatsApp connected, catalogue published. Everything else switches on when you’re ready.' },
  { q: 'What if I don’t know what I need yet?', a: 'That’s normal for a first store — talk to us on WhatsApp and we’ll help you figure out what actually matters first, honestly, not sell you everything at once.' },
  { q: 'I don’t have a big budget as a new business. Is this realistic for me?', a: 'Entry pricing is structured for exactly this stage, with monthly billing and no long-term commitment required to start. See <a href="/pricing">pricing</a> for the honest frame.' },
];

const startups = {
  slug: 'solutions/startups',
  title: 'For Jewellery Startups & First-Time Founders | Jwero',
  description: 'Start with the system chains took decades to build — the full operating system from day one, priced for a first store.',
  breadcrumbs: BC('Startups'),
  faqs: startupsFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR STARTUPS & FIRST-TIME FOUNDERS',
  h1: 'Start with the system chains took decades to build.',
  sub: 'Full operating system from day one — catalogue to CRM to WhatsApp — priced for a first store. No systems knowledge required, no tiny team wearing all hats without help.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'startups' },
  secondary: { href: '/pricing', label: 'See pricing' },
})}
${L.section(
  `${L.painRows([
    { quote: 'I don’t know what jewellery software is even supposed to do.', title: 'One system, explained plainly', text: 'You start with three things: customers, WhatsApp, catalogue. We explain the rest as you need it.' },
    { quote: 'My whole team is three people wearing every hat.', title: 'An AI workforce that covers the gaps', text: 'The AI workforce handles first-response and follow-up, so a tiny team serves like a bigger one.' },
    { quote: 'I’m worried about the cost before I even have revenue.', title: 'Transparent pricing, no surprises', text: 'See the pricing structure upfront — no hidden costs, monthly billing at entry.' },
  ])}`
)}
${L.section(`${L.sectionHead('QUESTIONS FIRST-TIME FOUNDERS ASK', 'Complexity, budget and where to start — answered.', '')}${L.faqBlock(startupsFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="startups">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Start where you are.', 'Tell us about your first store — we’ll tell you honestly what matters first.', 'startups')}
`,
};

const franchiseFaqs = [
  { q: 'Can franchisees operate independently while the brand stays controlled?', a: 'Yes — role-based access and franchise structure let the franchisor govern brand, catalogue and pricing centrally while franchisees run their store day-to-day.' },
  { q: 'Can the franchisor see performance across the whole network?', a: 'Yes — an owner rollup shows stock, sales and customer movement across every franchise location in one view.' },
  { q: 'Won’t franchisees resist head office controlling more of their operation?', a: 'Central control applies to brand standards and pricing consistency, not day-to-day running — most franchisees experience it as less admin overhead, since onboarding and systems are handled centrally.' },
];

const franchiseNetworks = {
  slug: 'solutions/franchise-networks',
  title: 'For Jewellery Franchise Networks | Jwero',
  description: 'Franchisor control, franchisee freedom: brand-level catalogue and pricing governance with store-level flexibility.',
  breadcrumbs: BC('Franchise networks'),
  faqs: franchiseFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR FRANCHISE NETWORKS',
  h1: 'Franchisor control. Franchisee freedom.',
  sub: 'Brand-level catalogue and pricing governance with store-level flexibility — franchise structure that solves brand-standard drift, royalty opacity and franchisee onboarding, all at once.',
  primary: { href: '#', label: 'Talk to a specialist', wa: 'franchise' },
  secondary: { href: '/enterprise', label: 'See the enterprise track' },
})}
${L.section(
  `${L.painRows([
    { quote: 'Every franchisee interprets the brand a little differently.', title: 'Brand-level governance', text: 'Central catalogue and pricing rules, with controlled local flexibility where you grant it.' },
    { quote: 'Royalty and performance reporting is opaque.', title: 'One owner rollup', text: 'Stock, sales and customer movement across the network, in one view.' },
    { quote: 'Onboarding a new franchisee takes forever.', title: 'A repeatable rollout', text: 'The same system, the same structure, every time a new location joins.' },
  ])}`
)}
${L.section(
  `${L.sectionHead('A DAY ACROSS YOUR FRANCHISE NETWORK ON JWERO', 'Morning to night.', '')}
  ${L.steps([
    { title: 'Morning', text: 'Head office pushes a festival campaign template once — every franchisee location gets it in brand-consistent form, no location freelancing its own version.' },
    { title: 'Afternoon', text: 'A customer who bought at one franchise location visits another — the counter there sees her full purchase history, not a blank slate.' },
    { title: 'Evening', text: 'The owner rollup flags one location’s sales pattern drifting from the network average — visible today, not discovered at quarter-end.' },
    { title: 'Night', text: 'A new franchisee’s onboarding checklist runs identically to the last one — same system, same structure, no reinventing the rollout.' },
  ], 4)}`
, { tone: 'tint' })}
${L.jtbdBlock([
  { when: 'a customer visits a franchise location she hasn’t been to before', want: 'her history to be visible there too', so: 'the brand feels consistent, not like separate shops wearing the same sign' },
  { when: 'a location’s performance starts drifting', want: 'see it in the owner rollup immediately', so: 'brand-standard drift gets caught early, not at the annual review' },
])}
${L.section(`${L.sectionHead('QUESTIONS FRANCHISORS ASK', 'Independence, visibility and control — answered.', '')}${L.faqBlock(franchiseFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="franchise">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Start with one franchise location.', 'Pick your newest or your toughest location as the pilot.', 'franchise', { enterprise: true })}
`,
};

module.exports = [bullionTraders, jewelleryBrands, d2cBrands, startups, franchiseNetworks];
