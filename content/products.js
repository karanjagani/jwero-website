const L = require('../lib');

const productsIndex = {
  slug: 'products',
  title: 'Jewellery Software Products: CRM, ERP, POS, Billing and More | Jwero',
  description: 'Every Jwero product, grouped by promise: Sell, Market, Know, Run and Grow — all sharing one record: customers, catalogue, stock, orders and books.',
  breadcrumbs: [['Home', '/'], ['Products']],
  body: `
${L.hero({
  eyebrow: 'PRODUCTS',
  h1: 'Every product Jwero makes — and the one record they all share.',
  sub: 'Every product below reads and writes the same record: customers, catalogue, stock, orders and books. Grouped by what it promises, not what department bought it.',
  primary: { href: '#', label: 'Tell me which three products matter first', wa: 'products' },
  secondary: { href: '/platform', label: 'See the platform tour' },
})}

${L.section(
  `${L.sectionHead('SELL', 'The counter that never closes.', '')}
  ${L.cards([
    { title: 'WhatsApp Commerce', text: 'Your full catalogue, checkout and payment reminders — inside the app your customers already open 50 times a day.', link: { href: '/products/whatsapp', label: 'Explore' } },
    { title: 'Instagram & Facebook', text: 'Turn DMs and story replies into orders without leaving Instagram.', link: { href: '/products/instagram-facebook', label: 'Explore' } },
    { title: 'AI Sales Agents & Voice', text: 'An AI workforce that drafts follow-ups, birthday invites and win-backs — every action waits in your approval queue.', link: { href: '/products/ai-sales-agents', label: 'Explore' } },
    { title: 'Video Counter & Appointments', text: 'Turn a WhatsApp or web chat into a video call in one tap, or let her self-book against real availability — waiting room, recording with consent, reminders.', link: { href: '/products/meetings', label: 'Explore' } },
    { title: 'Ecommerce Website', text: 'A native jewellery ecommerce website: live-rate pricing, cart, wishlist, checkout, blog and reviews — for businesses that don’t have one yet, or want the jewellery-native alternative.', link: { href: '/products/ecommerce', label: 'Explore' } },
    { title: 'Quotations', text: 'Numbered quotations at the live rate, sent as a link and a PDF, accepted or declined online — created from an enquiry, a catalogue request or by voice at the counter.', link: { href: '/products/quotations', label: 'Explore' } },
    { title: 'Digital Catalogues', text: 'Curated, shareable catalogue links priced live — every open, view and request tracked on the record; requests become quotations; checkout on the link.', link: { href: '/products/digital-catalogues', label: 'Explore' } },
    { title: 'Marketplaces', text: 'Amazon and Flipkart orders poll into the same ledger as the counter; available stock pushes back so no door oversells.', link: { href: '/products/marketplaces', label: 'Explore' } },
  ], 4)}`
)}

${L.section(
  `${L.sectionHead('MARKET', 'Bring people in. Know what worked.', '')}
  ${L.cards([
    { title: 'Ads Manager', text: 'Meta, Google and Pinterest campaigns in one place — budget alerts, an approval step, and an AI strategist that drafts, never spends.', link: { href: '/products/ads-manager', label: 'Explore' } },
    { title: 'Social Media Management', text: 'Schedule posts and manage one inbox for every comment and DM, with AI-drafted replies your team approves.', link: { href: '/products/social-media', label: 'Explore' } },
    { title: 'Optimize', text: 'See why website visitors leave, and catch them before they do — heatmaps, A/B experiments, personalization, popups, push and an AI webchat, on the same customer record.', link: { href: '/products/optimize', label: 'Explore' } },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('KNOW', 'Every customer, remembered.', '')}
  ${L.cards([
    { title: 'Jewellery CRM', text: 'Every customer: occasions, taste, scheme balance, every conversation — in one record — 198 kinds of signal scored into 11 explainable scores, so the AI knows who to reach and when. Fields.', link: { href: '/products/crm', label: 'Explore' } },
    { title: 'Customer Memory', text: 'The architecture behind the CRM: 198 signals, 11 explainable scores, 6,600 customer states — owned by your business.', link: { href: '/platform/customer-memory', label: 'Explore' } },
    { title: 'Showroom Intelligence', text: 'Who walked in, what they tried, who walked out without buying — and the follow-up drafted the moment they leave.', link: { href: '/products/showroom', label: 'Explore' } },
    { title: 'Reports & Dashboards', text: 'A builder over every module, an AI prompt that turns a question into a report, dashboards per role, exports for the CA.', link: { href: '/products/reports', label: 'Explore' } },
    { title: 'Business Email', text: 'Mailboxes on your own domain, provisioned and signed by Jwero, in the same inbox as WhatsApp and Instagram — with email in campaigns and journeys.', link: { href: '/products/email', label: 'Explore' } },
  ], 4)}`
)}

${L.section(
  `${L.sectionHead('RUN', 'The whole operation, one truth.', '')}
  ${L.cards([
    { title: 'Catalogue (PIM)', text: 'One catalogue: purity, stones, certificates, HUID — published everywhere from one place.', link: { href: '/products/catalog', label: 'Explore' } },
    { title: 'Inventory', text: 'Every piece: weight, purity, certificate, location, age — one inventory truth across branches.', link: { href: '/products/inventory', label: 'Explore' } },
    { title: 'Counter POS', text: 'Scan-to-sale at the live rate, weight-based sales, old-gold exchange vouchers, returns, register shifts and cash day-close — and it keeps ringing sales through a dropout.', link: { href: '/products/pos', label: 'Explore' } },
    { title: 'Billing & Finance', text: 'GST invoices at the live gold rate, receivables and payment reminders — every sale, return and expense posted to a double-entry ledger that still bridges to Tally.', link: { href: '/products/billing-finance', label: 'Explore' } },
    { title: 'ERP, reconsidered', text: 'Orders, purchases, repairs and job-work — jewellery-native, sharing one truth.', link: { href: '/products/erp', label: 'Explore' } },
    { title: 'Manufacturing & Workshop', text: 'BOM, routings, issue desk, stage-wise wastage norms with a metal-closure check, QC, and a karigar khata that settles wages against gold.', link: { href: '/products/manufacturing', label: 'Explore' } },
    { title: 'Multi-store & Franchise', text: 'One catalogue, one customer base, per-branch stock and performance — however many stores you run.', link: { href: '/products/multi-store', label: 'Explore' } },
  ], 4)}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('MANAGE', 'The back office, on the same record.', '')}
  ${L.cards([
    { title: 'HR & Payroll', text: 'Attendance, leave, recruitment, performance and a full statutory payroll run — plus a separate karigar wage-settlement ledger, on the same record as the job.', link: { href: '/products/hr-payroll', label: 'Explore' } },
    { title: 'Repairs & After-Sales', text: 'Every repair tracked from intake to delivery with a photographic custody chain, warranty/AMC entitlements, and in-store old-gold exchange.', link: { href: '/products/repairs-service', label: 'Explore' } },
    { title: 'Purchase & Vendors', text: 'Purchase orders, goods-received notes, vendor bills and credit notes, with a self-serve portal so suppliers track their own POs.', link: { href: '/products/purchase-vendors', label: 'Explore' } },
  ])}`
)}

${L.section(
  `${L.sectionHead('GROW', 'The money products, run digitally.', '')}
  ${L.cards([
    { title: 'Gold Savings Schemes', text: 'Enrol, collect, remind and mature gold schemes digitally — balances your customers can see.', link: { href: '/products/gold-schemes', label: 'Explore' } },
    { title: 'Girvi / Gold Loans', text: 'Pledge intake with a printed receipt, interest schemes that accrue on schedule, collection, renewal and release — posted to the books, on the customer record.', link: { href: '/products/girvi', label: 'Explore' } },
    { title: 'Loyalty & Referrals', text: 'Tiers, earning rules and referral tracking — reward the customers who keep coming back and bringing others.', link: { href: '/products/loyalty', label: 'Explore' } },
    { title: 'Customer Segmentation', text: 'Live, rule-based audiences from RFM tier, tags and custom fields — reachable count and revenue shown before you save.', link: { href: '/products/segmentation', label: 'Explore' } },
    { title: 'Customer Journeys', text: 'Visual, multi-step automation: triggers, branches, wait steps — with a human-approval gate before anything reaches a customer.', link: { href: '/products/journeys', label: 'Explore' } },
    { title: 'Campaigns & Broadcasts', text: 'Consent-aware sends across WhatsApp, email, SMS and push, attributed to exactly what each campaign sold.', link: { href: '/products/campaigns', label: 'Explore' } },
    { title: 'Training & LMS', text: 'Courses, assessments scored honestly, certificates on the profile, learning paths per role — and the next course suggested by the scorecard.', link: { href: '/products/training-lms', label: 'Explore' } },
  ], 4)}`
, { tone: 'tint' })}

${L.section(`<p style="text-align:center; font-size:.9rem; color:var(--ink-2);">Every module reads the same customer record. That’s the operating system. <a href="/platform">See how it fits together →</a></p>`)}

${L.ctaBand('Not sure where to start?', 'Tell us what you sell and how — we’ll tell you which three products matter first.', 'products')}
`,
};

module.exports = [productsIndex];
