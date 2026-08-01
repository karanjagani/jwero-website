const L = require('../lib');

const productsIndex = {
  slug: 'products',
  title: 'Products — The Jwero App Grid | Jwero',
  description: 'Every Jwero product, grouped by promise: Sell, Market, Know, Run and Grow — all sharing one customer record, one catalogue and one inventory truth.',
  breadcrumbs: [['Home', '/'], ['Products']],
  body: `
${L.hero({
  eyebrow: 'PRODUCTS',
  h1: 'The app grid of one operating system.',
  sub: 'Every product below reads and writes the same customer record, catalogue and inventory truth. Grouped by what it promises, not what department bought it.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'products' },
  secondary: { href: '/platform', label: 'See the platform tour' },
})}

${L.section(
  `${L.sectionHead('SELL', 'The counter that never closes.', '')}
  ${L.cards([
    { title: 'WhatsApp Commerce', text: 'Your full catalogue, checkout and payment reminders — inside the app your customers already open 50 times a day.', link: { href: '/products/whatsapp', label: 'Explore' } },
    { title: 'Instagram & Facebook', text: 'Turn DMs and story replies into orders without leaving Instagram.', link: { href: '/products/instagram-facebook', label: 'Explore' } },
    { title: 'AI Sales Agents & Voice', text: 'An AI workforce that drafts follow-ups, birthday invites and win-backs — every action waits in your approval queue.', link: { href: '/products/ai-sales-agents', label: 'Explore' } },
    { title: 'Ecommerce Website', text: 'A native jewellery ecommerce website: live-rate pricing, cart, wishlist, checkout, blog and reviews — for businesses that don’t have one yet, or want the jewellery-native alternative.', link: { href: '/products/storefront', label: 'Explore' } },
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
    { title: 'Jewellery CRM', text: 'Every customer: occasions, taste, scheme balance, every conversation — in one record with 90+ fields.', link: { href: '/products/crm', label: 'Explore' } },
    { title: 'Customer Memory', text: 'The architecture behind the CRM: 90+ fields, explainable scores, owned by your business.', link: { href: '/platform/customer-memory', label: 'Explore' } },
    { title: 'Showroom Intelligence', text: 'Who walked in, what they tried, who walked out without buying — and the follow-up drafted the moment they leave.', link: { href: '/products/showroom', label: 'Explore' } },
  ], 4)}`
)}

${L.section(
  `${L.sectionHead('RUN', 'The whole operation, one truth.', '')}
  ${L.cards([
    { title: 'Catalogue (PIM)', text: 'One catalogue: purity, stones, certificates, HUID — published everywhere from one place.', link: { href: '/products/catalog', label: 'Explore' } },
    { title: 'Inventory', text: 'Every piece: weight, purity, certificate, location, age — one inventory truth across branches.', link: { href: '/products/inventory', label: 'Explore' } },
    { title: 'Billing & Finance', text: 'GST invoices at the live gold rate, receivables and payment reminders, plus scan-to-sale POS checkout. Returns and cash-drawer day-close: on the roadmap.', link: { href: '/products/billing-finance', label: 'Explore' } },
    { title: 'ERP, reconsidered', text: 'Orders, purchases, repairs and manufacturing job-work — jewellery-native, sharing one truth.', link: { href: '/products/erp', label: 'Explore' } },
    { title: 'Multi-store & Franchise', text: 'One catalogue, one customer base, per-branch stock and performance — however many stores you run.', link: { href: '/products/multi-store', label: 'Explore' } },
  ], 4)}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('GROW', 'The money products, run digitally.', '')}
  ${L.cards([
    { title: 'Gold Savings Schemes', text: 'Enrol, collect, remind and mature gold schemes digitally — balances your customers can see.', link: { href: '/products/gold-schemes', label: 'Explore' } },
    { title: 'Digital Gold', text: 'Sell gold savings digitally with KYC and OTP-verified closures built in.', link: { href: '/products/digital-gold', label: 'Explore' } },
    { title: 'Loyalty & Referrals', text: 'Tiers, earning rules and referral tracking — reward the customers who keep coming back and bringing others.', link: { href: '/products/loyalty', label: 'Explore' } },
    { title: 'Customer Segmentation', text: 'Live, rule-based audiences from RFM tier, tags and custom fields — reachable count and revenue shown before you save.', link: { href: '/products/segmentation', label: 'Explore' } },
    { title: 'Customer Journeys', text: 'Visual, multi-step automation: triggers, branches, wait steps — with a human-approval gate before anything reaches a customer.', link: { href: '/products/journeys', label: 'Explore' } },
    { title: 'Campaigns & Broadcasts', text: 'Consent-aware sends across WhatsApp, email, SMS and push, attributed to exactly what each campaign sold.', link: { href: '/products/campaigns', label: 'Explore' } },
  ], 4)}`
)}

${L.section(`<p style="text-align:center; font-size:.9rem; color:var(--ink-2);">Every module reads the same customer record. That’s the operating system. <a href="/platform">See how it fits together →</a></p>`)}

${L.ctaBand('Not sure where to start?', 'Tell us what you sell and how — we’ll tell you which three products matter first.', 'products')}
`,
};

module.exports = [productsIndex];
