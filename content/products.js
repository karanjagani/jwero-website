const L = require('../lib');

const productsIndex = {
  slug: 'products',
  title: 'Products — The Jwero App Grid | Jwero',
  description: 'Every Jwero product, grouped by promise: Remember, Sell, Run and Grow — all sharing one customer record, one catalogue and one inventory truth.',
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
  ])}`
)}

${L.section(
  `${L.sectionHead('KNOW', 'Every customer, remembered.', '')}
  ${L.cards([
    { title: 'Jewellery CRM', text: 'Every customer — occasions, taste, scheme balance, every conversation — in one record with 90+ fields.', link: { href: '/products/crm', label: 'Explore' } },
    { title: 'Customer Memory', text: 'The architecture behind the CRM: 90+ fields, explainable scores, owned by your business.', link: { href: '/platform/customer-memory', label: 'Explore' } },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('RUN', 'The whole operation, one truth.', '')}
  ${L.cards([
    { title: 'Catalogue (PIM)', text: 'One catalogue — purity, stones, certificates, HUID — published everywhere from one place.', link: { href: '/products/catalog', label: 'Explore' } },
    { title: 'Inventory', text: 'Every piece — weight, purity, certificate, location, age — one inventory truth across branches.', link: { href: '/products/inventory', label: 'Explore' } },
    { title: 'Billing & Finance', text: 'GST invoices at the live gold rate, receivables and payment reminders. POS counter billing: on the roadmap.', link: { href: '/products/billing-finance', label: 'Explore' } },
    { title: 'ERP, reconsidered', text: 'Orders, purchases, repairs and manufacturing job-work — jewellery-native, sharing one truth.', link: { href: '/products/erp', label: 'Explore' } },
  ], 4)}`
)}

${L.section(
  `${L.sectionHead('GROW', 'The money products, run digitally.', '')}
  ${L.cards([
    { title: 'Gold Savings Schemes', text: 'Enrol, collect, remind and mature gold schemes digitally — balances your customers can see.', link: { href: '/products/gold-schemes', label: 'Explore' } },
    { title: 'Digital Gold', text: 'Sell gold savings digitally with KYC and OTP-verified closures built in.', link: { href: '/products/digital-gold', label: 'Explore' } },
    { title: 'Multi-store & Franchise', text: 'One catalogue, one customer base, per-branch stock and performance — however many stores you run.', link: { href: '/products/multi-store', label: 'Explore' } },
  ])}`
, { tone: 'tint' })}

${L.section(`<p style="text-align:center; font-size:.9rem; color:var(--ink-2);">Every module reads the same customer record. That’s the operating system. <a href="/platform">See how it fits together →</a></p>`)}

${L.ctaBand('Not sure where to start?', 'Tell us what you sell and how — we’ll tell you which three products matter first.', 'products')}
`,
};

module.exports = [productsIndex];
