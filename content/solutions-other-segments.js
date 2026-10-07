const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Solutions', '/solutions'], [label]];

const bullionFaqs = [
  { q: 'Can deals be captured at a locked rate?', a: 'Yes — deal capture records the rate at the moment of agreement, with a clean ledger of every settlement against it.' },
  { q: 'Do you offer girvi / gold-loan functionality?', a: 'Yes — pledge intake with a printed receipt, interest schemes that accrue on schedule, collection, renewal and release, posted to the books and on the customer’s record. Auto-debit mandates for interest are not there yet. <a href="/products/girvi">See Girvi / Gold Loans</a>.' },
  { q: 'Our trades depend on speed. Won’t logging deals slow us down?', a: 'Deal capture is built to be fast at the point of agreement, not a paperwork step afterward — it replaces reconstructing terms from memory later, which costs more time than it saves.' },
];

const bullionTraders = {
  slug: 'solutions/bullion-gold-traders',
  title: 'Bullion Trading Software for Dealers & Gold Traders | Jwero',
  description: 'Rate-locked deal capture and clean counterparty ledgers — your trading relationships as a business asset, not a personal phone’s contact list.',
  breadcrumbs: BC('Bullion & gold traders'),
  faqs: bullionFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR BULLION DEALERS & GOLD TRADERS',
  h1: 'Volume trades, zero ambiguity.',
  sub: 'Rate-locked deal capture and a clean ledger of every settlement — your trading relationships as a business asset the business owns, kept off any single person’s phone.',
  primary: { href: '#', label: 'Talk shop with us', wa: 'bullion' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}
${L.section(
  `${L.painRows([
    { quote: 'Our counterparty relationships live in one trader’s personal phone.', title: 'Relationships as a business asset', text: 'Every counterparty, deal and settlement remembered on the business’s own record.' },
    { quote: 'Rate-lock disputes are constant and hard to prove.', title: 'Rate-locked, auditable deal capture', text: 'The agreed rate and terms are recorded at the moment of the deal, not reconstructed afterward.' },
  ])}`
)}
${L.honestGapsBlock(['Girvi auto-debit (e-mandate) for interest collections and auction/forfeiture workflows for defaulted pledges are not built yet — pledge, accrual, collection, renewal and release are.'])}
${L.section(`${L.sectionHead('QUESTIONS TRADERS ASK', 'Rate locks, girvi and deal speed — answered.', '')}${L.faqBlock(bullionFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="bullion">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

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
  title: 'Software for Jewellery Brands: Every Channel | Jwero',
  description: 'Software for jewellery brands: one central catalogue, brand-controlled campaigns and visibility of every counter, channel and distributor.',
  breadcrumbs: BC('Jewellery brands'),
  faqs: brandsFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR JEWELLERY BRANDS',
  h1: 'One brand voice across every counter and channel.',
  sub: 'Central catalogue, brand-controlled campaigns and distributor visibility — so the brand stays consistent whether a customer meets it on Instagram, at a partner counter, or on your own website. Stock, orders, purchase and books sit behind it on one record.',
  primary: { href: '#', label: 'Talk shop with us', wa: 'brands' },
  secondary: { href: '/enterprise', label: 'Talk to a specialist' },
})}
${L.section(
  `${L.painRows([
    { quote: 'Every partner presents the brand a little differently.', title: 'Central catalogue, brand-controlled', text: 'One catalogue, one set of campaign rules, enforced everywhere the brand sells.' },
    { quote: 'We can’t see how partners are selling us.', title: 'Distributor visibility', text: 'Structure your network in Jwero to get channel and partner performance in one view.' },
  ])}`
)}
${L.section(`${L.sectionHead('QUESTIONS BRAND TEAMS ASK', 'Consistency and partner visibility — answered.', '')}${L.faqBlock(brandsFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="brands">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('Bring your channel map.', 'Show us how your brand sells today — we’ll map it to one central system.', 'brands', { enterprise: true })}
`,
};

const d2cFaqs = [
  { q: 'Do I have to leave Shopify?', a: 'No — the Shopify connector keeps your store on the same product data, so Jwero adds WhatsApp, Instagram and memory on top of the store you already run.' },
  { q: 'Is there a free trial for D2C brands?', a: 'No free trial, but the first month is ₹3,600 instead of ₹18,000. Create a workspace in three steps at <a href="/start">/start</a>, connect Shopify or WooCommerce, and evaluate on your own orders. No demo required.' },
  { q: 'What happens to my Shopify data if I leave Jwero?', a: 'Nothing happens to Shopify — it stays the store of record for your website and is never modified by a disconnect. Jwero holds synced copies of orders and customers plus everything it added (WhatsApp threads, scores, occasions). All of it exports as CSV before or after you leave, and the connector is removed from Shopify in one click.' },
  { q: 'We already use a lot of ecommerce tools. Won’t this just be one more?', a: 'It replaces the gap between them, not the tools themselves — the WhatsApp/Instagram-native selling and live-rate pricing a generic ecommerce stack doesn’t do, added on top of what you keep.' },
];

const d2cBrands = {
  slug: 'solutions/d2c-brands',
  title: 'Software for D2C & Online Jewellery Brands | Jwero',
  description: 'Keep Shopify. Add the channels it can’t do — WhatsApp/Instagram-native selling, live-rate pricing and a video counter, on top of your stack.',
  breadcrumbs: BC('D2C & ecommerce-first'),
  faqs: d2cFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR D2C & ECOMMERCE-FIRST BRANDS',
  h1: 'Keep Shopify. Add the channels it can’t do.',
  sub: 'Ad clicks bring traffic; chat closes it, badly, without memory. Jwero adds WhatsApp and Instagram-native selling, live-rate pricing and a video counter on top of the website you already run, with orders, stock, purchase and books on one record behind it.',
  primary: { href: '#', label: 'Tell us about your business', wa: 'd2c' },
  secondary: { href: '/platform/integrations', label: 'See the Shopify connector' },
})}
${L.section(
  `${L.painRows([
    { quote: 'DMs turn into orders badly — or not at all.', title: 'Turn ad clicks into managed conversations', text: 'The AI workforce advances WhatsApp and Instagram conversations toward a sale, with your approval on every message.' },
    { quote: 'Shopify doesn’t understand gold-rate pricing.', title: 'Live-rate pricing on top of your store', text: 'Catalogue prices follow the live metal rate — something a generic ecommerce platform doesn’t do natively.' },
    { quote: 'Retention beyond the first order is basically zero.', title: 'A customer record, not just an order history', text: 'One record turns a first-time buyer into a remembered relationship, with occasion and win-back journeys.' },
  ])}`
)}
${L.jtbdBlock([
  { when: 'an ad-driven DM comes in after hours', want: 'get an accurate, on-brand reply immediately', so: 'the click doesn’t go cold before your team wakes up' },
  { when: 'a customer buys on Shopify after chatting on WhatsApp', want: 'have both touchpoints on one record', so: 'the relationship isn’t split across two disconnected tools' },
])}
${L.section(
  `${L.sectionHead('ILLUSTRATIVE IMPACT MODEL', 'What this could be worth on top of your website.', 'Illustrative model on a D2C/lab-grown brand doing ₹4cr/year online revenue — not a measured result. Run your own numbers, or ask for a 30-day growth report once you’re live.')}
  ${L.stats([
    { n: '~₹16L/yr', l: 'modelled from a +0.4pt conversion lift on a ₹4cr traffic-driven revenue base' },
    { n: '~₹6.4L/yr', l: 'modelled recovered-cart revenue — 8% of an estimated 20% cart-abandonment pool' },
    { n: '~₹6L/yr', l: 'modelled platform-fee avoidance — ~1.5% of ₹4cr GMV' },
    { n: '~₹4L/yr', l: 'modelled ad-spend saved by shifting 10% of retargeting spend to owned channels' },
  ])}`
, { tone: 'tint' })}
${L.section(`${L.sectionHead('QUESTIONS D2C BRANDS ASK', 'Shopify, trials and the stack you keep — answered.', '')}${L.faqBlock(d2cFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/compare/jwero-vs-shopify">See Jwero vs Shopify</a> or <a href="/faq">the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="d2c">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('Add what Shopify can’t do.', 'Tell us your current stack — we’ll show exactly what Jwero adds on top.', 'd2c')}
`,
};

const startupsFaqs = [
  { q: 'Is this too much system for a brand-new business?', a: 'No — you start with the same three things every business does: customers imported, WhatsApp connected, catalogue published. Everything else switches on when you’re ready.' },
  { q: 'What if I don’t know what I need yet?', a: 'That’s normal for a first store — talk to us on WhatsApp and we’ll help you figure out what matters first, honestly, not sell you everything at once.' },
  { q: 'I don’t have a big budget as a new business. Is this realistic for me?', a: 'Entry pricing is structured for exactly this stage, with monthly billing and no long-term commitment required to start. See <a href="/pricing">pricing</a> for the honest frame.' },
];

const startups = {
  slug: 'solutions/startups',
  title: 'Jewellery Software for Startups & New Jewellers | Jwero',
  description: 'Jewellery software for startups and new jewellers: the full system chains took years to build, from day one, priced for a first store.',
  breadcrumbs: BC('Startups'),
  faqs: startupsFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR STARTUPS & FIRST-TIME FOUNDERS',
  h1: 'Start on the system chains took decades to build — from day one, at single-store cost.',
  sub: 'Full operating system from day one: catalogue, billing, stock, purchase and books, with CRM and WhatsApp on the same record, priced for a first store. No systems knowledge required, no tiny team wearing all hats without help.',
  primary: { href: '#', label: 'Tell us about your business', wa: 'startups' },
  secondary: { href: '/pricing', label: 'See pricing' },
})}
${L.section(
  `${L.painRows([
    { quote: 'I don’t know what jewellery software is even supposed to do.', title: 'One system, explained plainly', text: 'You start with three things: customers, WhatsApp, catalogue. We explain the rest as you need it.' },
    { quote: 'My whole team is three people wearing every hat.', title: 'An AI workforce that covers the gaps', text: 'The AI workforce handles first-response and follow-up, so a tiny team serves like a bigger one.' },
    { quote: 'I’m worried about the cost before I even have revenue.', title: 'Transparent pricing, no surprises', text: 'See the pricing structure upfront — no hidden costs, monthly billing at entry.' },
    { quote: 'I don’t even have a website yet, and building one feels like a separate project.', title: 'Your ecommerce website, not a bolt-on', text: 'Jwero can be your website: native cart, wishlist, checkout, blog and reviews — a jewellery-native alternative to a generic ecommerce platform. See <a href="/products/ecommerce">Ecommerce Website</a>.' },
  ])}`
)}
${L.section(`${L.sectionHead('QUESTIONS FIRST-TIME FOUNDERS ASK', 'Complexity, budget and where to start — answered.', '')}${L.faqBlock(startupsFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="startups">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Start where you are.', 'Tell us about your first store — we’ll tell you honestly what matters first.', 'startups')}
`,
};

const franchiseFaqs = [
  { q: 'Can franchisees operate independently while the brand stays controlled?', a: 'Partly. Role-based access lets head office set the catalogue and pricing while each outlet runs its own counter, stock and customers on the same system. Royalty tracking and oversight of independently-owned franchisees are not built yet.' },
  { q: 'Can the franchisor see performance across the whole network?', a: 'Yes — an owner rollup shows stock, sales and customer movement across every franchise location in one view.' },
  { q: 'Won’t franchisees resist head office controlling more of their operation?', a: 'Central control applies to brand standards and pricing consistency, not day-to-day running — most franchisees experience it as less admin overhead, since onboarding and systems are handled centrally.' },
];

const franchiseNetworks = {
  slug: 'solutions/franchise-networks',
  title: 'Jewellery Franchise Software: Brand and Store | Jwero',
  description: 'Jewellery franchise software: the brand controls catalogue and pricing, each franchise store keeps its own counter, stock and customers.',
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
    { title: 'Evening', text: 'The owner rollup surfaces one location’s sales pattern drifting from the network average today — no waiting for the quarter-end review.' },
    { title: 'Night', text: 'A new franchisee’s onboarding checklist runs identically to the last one — same system, same structure, no reinventing the rollout.' },
  ], 4)}`
, { tone: 'tint' })}
${L.jtbdBlock([
  { when: 'a customer visits a franchise location she hasn’t been to before', want: 'her history to be visible there too', so: 'the brand feels consistent, not like separate shops wearing the same sign' },
  { when: 'a location’s performance starts drifting', want: 'see it in the owner rollup immediately', so: 'brand-standard drift gets caught early rather than surfacing at the annual review' },
])}
${L.section(`${L.sectionHead('QUESTIONS FRANCHISORS ASK', 'Independence, visibility and control — answered.', '')}${L.faqBlock(franchiseFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="franchise">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('THE ROLLOUT', 'From one location to the network, without a fight.', 'The plan we run; each wave has an exit test before the next begins.')}
  ${L.steps([
    { title: 'Week 1–2 — one pilot location', text: 'Your toughest or newest store. Catalogue, pricing rules and templates set by the brand; the store runs the counter and WhatsApp with approvals on.' },
    { title: 'Week 3 — the exit test', text: 'Enquiries answered, prices consistent, day-close variance, franchisee’s own verdict. If it fails, we stop here.' },
    { title: 'Week 4–6 — wave one', text: 'Three to five locations. Brand controls proven at the pilot are switched on network-wide; local overrides route through approval.' },
    { title: 'After — the rest, in waves', text: 'Each wave inherits the last one’s templates and training. Nothing goes live in a store’s peak weeks — the change-freeze is written down.' },
  ])}`
, { tone: 'tint' })}

${L.ctaBand('Start with one franchise location.', 'Pick your newest or your toughest location as the pilot.', 'franchise', { enterprise: true })}
`,
};

module.exports = [bullionTraders, jewelleryBrands, d2cBrands, startups, franchiseNetworks];
