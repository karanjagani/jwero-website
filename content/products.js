const L = require('../lib');

// Products hub, redesigned 2026-10-07 like the blog, guides and solutions hubs.
// Card copy matches the rebuilt product pages. Reuses [data-blog-hub].
const P_TOPICS = [['sell', 'Sell'], ['market', 'Marketing'], ['cust', 'Customers'], ['shop', 'Shop and stock'], ['money', 'Money and schemes'], ['team', 'Team and back office'], ['ai', 'AI']];
const P_ITEMS = [
  ['sell', '/products/whatsapp', 'WhatsApp', 'Official WhatsApp API: catalogue at today’s rate, payments in the chat, a shared team inbox.'],
  ['sell', '/products/instagram-facebook', 'Instagram and Facebook', 'Comments turned into DMs, story replies and Messenger in one inbox, payment links in the DM.'],
  ['sell', '/products/ecommerce', 'Ecommerce website', 'Your own store on your domain, priced at today’s gold rate, with photo search and try-at-home.'],
  ['sell', '/products/digital-catalogues', 'Digital catalogues', 'Private catalogue links with live or hidden prices, buyer pricing and alerts when she opens it.'],
  ['sell', '/products/quotations', 'Quotations and estimates', 'Numbered estimates at today’s rate, accepted from her phone, followed up and turned into orders.'],
  ['sell', '/products/meetings', 'Video shopping and appointments', 'Video calls from any chat, self-booking and reminders, for customers near and abroad.'],
  ['sell', '/products/marketplaces', 'Google Shopping and Meta', 'Your catalogue on Google Shopping and the Meta catalogue, plus Unicommerce, at today’s rate.'],
  ['market', '/products/campaigns', 'Campaigns', 'WhatsApp, SMS, RCS and email campaigns to segments, A/B tested, with festival planning.'],
  ['market', '/products/journeys', 'Customer journeys', 'Ready-made journeys and new ones built in plain English, across every channel.'],
  ['market', '/products/ads-manager', 'Ads Manager', 'Google, Meta and Pinterest ads with AI creatives, audiences from segments and sales reported back.'],
  ['market', '/products/social-media', 'Social media', 'AI video and captions, publishing to eight platforms, comments to DMs.'],
  ['market', '/products/email', 'Email', 'Email marketing and mailboxes on your domain, AI-written, A/B tested and tracked.'],
  ['market', '/products/optimize', 'Website analytics (Optimize)', 'Heatmaps, recordings, A/B tests, popups and AI webchat from one pixel on any site.'],
  ['cust', '/products/crm', 'Jewellery CRM', 'Every customer’s purchases, occasions, schemes and chats on one record, with an AI lead finder.'],
  ['cust', '/products/segmentation', 'Segmentation', '41 ready segments, or describe one in plain words; ads generated from them.'],
  ['cust', '/products/loyalty', 'Loyalty and referrals', 'Points for purchases and social engagement, tiers, referrals, vouchers and coupons.'],
  ['cust', '/products/showroom', 'Showroom', 'Footfall from your CCTV, walk-in check-in, wait alerts and walkout follow-ups.'],
  ['cust', '/platform/customer-memory', 'Customer intelligence', 'Every signal a customer gives, read into live scores with a visible reason, so the team calls the right customer first.'],
  ['shop', '/products/pos', 'Counter POS', 'Billing at today’s rate, old gold exchange, returns and day close.'],
  ['shop', '/products/inventory', 'Inventory', 'Every piece by weight, purity, HUID and branch, with ageing and dead stock.'],
  ['shop', '/products/catalog', 'Catalogue and PIM', 'Each piece described once, AI listings from photos, synced to every channel.'],
  ['shop', '/products/multi-store', 'Multi-store and franchise', 'Every branch on one record: stock, schemes, transfers and chats routed to the right branch.'],
  ['shop', '/products/manufacturing', 'Manufacturing', 'Orders, karigars, wastage by stage, metal accounts and QC.'],
  ['shop', '/products/purchase-vendors', 'Purchase and vendors', 'AI-drafted purchase orders, unfixed-rate purchases and a supplier portal.'],
  ['shop', '/products/repairs-service', 'Repairs and after-sales', 'Job cards, custody chain, weight in and out, and warranty on the original invoice.'],
  ['shop', '/products/erp', 'ERP', 'The whole business on one system, with tax invoices, material planning and the Tally bridge in India.'],
  ['money', '/products/billing-finance', 'Billing and accounting', 'GST, VAT or sales-tax invoices, tax returns reports, receivables chased, Stripe and PayPal.'],
  ['money', '/products/gold-schemes', 'Gold schemes and savings plans', 'Enrolment anywhere, instalments collected automatically, maturity visits.'],
  ['money', '/products/girvi', 'Girvi and gold loans', 'Pledges with photos and LTV limits, interest collected, renewals, release and auctions.'],
  ['team', '/products/hr-payroll', 'HR and payroll', 'Biometric attendance, payroll with PF and ESI, incentives and payslips on WhatsApp.'],
  ['team', '/products/training-lms', 'Training and LMS', 'Product and sales training with quizzes, certificates and paths per role.'],
  ['team', '/products/reports', 'Reports and dashboards', 'Ask a question and get the report; owner’s dashboard on your phone.'],
  ['ai', '/products/ai-sales-agents', 'AI agents and voice', 'AI that replies, follows up and calls in your customers’ languages, including Arabic, Hindi and English, with caps and optional approvals.'],
  ['ai', '/ai-calling-for-jewellers', 'AI calling', 'Voice AI for reminders and enquiries, ₹7 a call, up to 8 at once.'],
  ['ai', '/ai-cctv-footfall-analytics-jewellery-showrooms', 'AI CCTV footfall', 'Count visitors with the cameras you have and match footfall to bills.'],
];
const P_PICK = [
  ['Sell more on WhatsApp and Instagram', '/products/whatsapp'], ['Bill fast at today’s rate', '/products/pos'], ['Know my stock and dead stock', '/products/inventory'],
  ['Bring customers back', '/products/crm'], ['Run gold schemes and girvi', '/products/gold-schemes'], ['Control my workshop', '/products/manufacturing'],
];
const pImg = (href) => { const fs = require('fs'), p = require('path'); const key = href.replace(/^\//, '').replace(/\//g, '--');
  return fs.existsSync(p.join(__dirname, '..', 'assets', 'og', key + '.jpg')) ? `/assets/og/${key}.jpg` : ''; };
const pEsc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
function productsHubBody() {
  const TL = Object.fromEntries(P_TOPICS); const count = (t) => P_ITEMS.filter((i) => i[0] === t).length;
  const card = ([t, h, title, d]) => { const img = pImg(h); return `<a class="bl-card" href="${h}" data-t="${t}" data-q="${pEsc((title + ' ' + d + ' ' + TL[t]).toLowerCase())}">${img ? `<img src="${img}" alt="" loading="lazy" width="1200" height="630">` : ''}<span class="bl-tag">${TL[t]}</span><b>${pEsc(title)}</b><span class="bl-desc">${pEsc(d)}</span></a>`; };
  return `
<section class="hero bl-hero"><div class="container hero-inner">
  <p class="eyebrow">PRODUCTS</p>
  <h1>Every Jwero product, on one customer record.</h1>
  <p class="sub">${P_ITEMS.length} products for selling, marketing, the counter, stock, money and your team, all sharing the same customers, catalogue, stock and books. One price includes every module. Works in India, the Gulf, the UK and Europe, North America and Southeast Asia, with local tax, currency and gold rates.</p>
  <form class="bl-search" role="search" onsubmit="return false"><label for="bl-q" class="sr-only">Search products</label><input id="bl-q" type="search" placeholder="Search: billing, girvi, WhatsApp, payroll…" autocomplete="off" data-bl-q></form>
</div></section>
<section class="section bl-wrap" data-blog-hub data-unit="product|products">
<div class="container">
  <nav class="bl-chips" aria-label="Filter products"><button type="button" class="is-on" data-bl-t="">All <i>${P_ITEMS.length}</i></button>${P_TOPICS.map(([k, l]) => `<button type="button" data-bl-t="${k}">${l} <i>${count(k)}</i></button>`).join('')}</nav>
  <div class="bl-start" data-bl-start>
    <div class="section-head"><p class="eyebrow">START HERE</p><h2>What do you want to fix first?</h2></div>
    <div class="bl-goals bl-goals-3">${P_PICK.map(([l, h], k) => `<a href="${h}"><span class="home-who-ico">${L.icon(['chat', 'till', 'box', 'heart', 'coins', 'tools'][k])}</span><b>${l}</b><i>See the product →</i></a>`).join('')}</div>
  </div>
  <div class="section-head" style="margin-top:44px"><p class="eyebrow">EVERY PRODUCT</p><h2 data-bl-title>Every product.</h2><p class="bl-count" aria-live="polite" data-bl-count>${P_ITEMS.length} products</p></div>
  <div class="bl-grid" data-bl-grid>${P_ITEMS.map(card).join('')}</div>
  <p class="bl-empty" data-bl-empty hidden>Nothing matches that yet. <a href="#" data-wa="products">Ask us on WhatsApp</a> and we will tell you which product does it.</p>
  <p class="bl-more"><button type="button" class="btn btn-ghost" data-bl-more hidden>Show more products</button></p>
</div>
</section>
${L.ctaBand('Not sure where to start?', 'Tell us the three things that cost you most; we will name the products that fix them.', 'products')}
`;
}
const productsIndex = {
  slug: 'products',
  title: 'Jewellery Software Products: CRM, ERP, POS, Billing and More | Jwero',
  description: 'Every Jwero product for jewellers: WhatsApp, ecommerce, POS, inventory, CRM, schemes, girvi, manufacturing, HR, marketing and AI, on one customer record. Search or filter.',
  breadcrumbs: [['Home', '/'], ['Products']],
  body: '',
};
productsIndex.body = productsHubBody();

module.exports = [productsIndex];
