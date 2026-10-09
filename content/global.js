// Jwero worldwide and market pages (2026-10-08). Confirmed by Jwero: tax regimes
// (India GST, UK VAT, EU VAT, GCC VAT, US sales tax), multi-currency, Stripe and
// PayPal alongside Razorpay and Cashfree, live gold rates for any market, hosted
// region on request, self-hosted Enterprise anywhere, many languages incl. Arabic,
// Spanish and French. Not claimed: customers abroad, QuickBooks or Xero, tax
// regimes beyond those listed (Canada, Singapore and others are "ask us").
const L = require('../lib');

const FACTS = [
  ['coins', 'Your currency', 'Price, sell and invoice in your customer’s currency: dirhams, riyals, pounds, euros, dollars or rupees.'],
  ['receipt', 'Your tax system', 'Invoices under India GST, UK VAT, EU VAT, GCC VAT and US sales tax, set per business.'],
  ['trend', 'Your gold rate', 'Live metal rates for your market, by the gram, ounce or tola, repricing every channel.'],
  ['chat', 'Your customers’ language', 'AI chat, voice and calls in your customers’ languages, including English, Arabic, Hindi, Spanish and French.'],
  ['wallet', 'Your payment gateway', 'Stripe and PayPal, as well as Razorpay and Cashfree, on the counter, the website and inside WhatsApp.'],
  ['shield', 'Your region', 'Hosted in India or in your region on request, or self-hosted on your own servers with Enterprise.'],
];

const factsGrid = () => `<div class="wa-jobs">${FACTS.map(([i, t, d]) => `<article><h3>${L.icon(i)} ${t}</h3><p>${d}</p></article>`).join('')}</div>`;

const MARKETS = [
  ['/jewellery-software-uae', 'The Gulf', 'UAE, Saudi Arabia, Qatar, Bahrain, Oman, Kuwait'],
  ['/jewellery-software-uk', 'The UK and Europe', 'United Kingdom, the EU'],
  ['/jewellery-software-usa', 'The US and Canada', 'United States, Canada'],
  ['/jewellery-software-singapore', 'South and Southeast Asia', 'Singapore, Malaysia, Sri Lanka, Nepal, Bangladesh'],
  ['/jewellery-software-india', 'India', 'Every state, 29 cities'],
];

const globalHub = {
  slug: 'global',
  title: 'Jewellery Software Worldwide: Currencies, VAT, Sales Tax, Languages | Jwero',
  description: 'Jwero runs jewellery businesses in any market: your currency, GST, VAT or sales tax, live gold rates by gram, ounce or tola, your customers’ languages, Stripe and PayPal, and hosting in your region.',
  breadcrumbs: [['Home', '/'], ['Jwero worldwide']],
  faqs: [
    { q: 'Does Jwero work outside India?', a: 'Yes. Jwero supports local currencies, GST, VAT and US sales tax, live gold rates for any market, your customers’ languages, Stripe and PayPal, and hosting in your region on request.' },
    { q: 'Which tax systems are supported?', a: 'India GST, UK VAT, EU VAT, GCC VAT and US sales tax, set per business. For another country, ask us.' },
    { q: 'Where is my data hosted?', a: 'In India by default, or in your region on request. Enterprise customers self-host on their own servers or cloud.' },
    { q: 'What does it cost outside India?', a: 'Jwero One is ₹18,000 a month with every module, shown here in your currency; the first month is ₹3,600. Messages and calls are charged at your country’s rates.' },
  ],
  body: `
${L.hero({ eyebrow: 'JWERO WORLDWIDE', h1: 'One system for jewellers in every market.', sub: 'Your currency, your tax system, your gold rate and your customers’ language, on the same record that runs the counter, the stock, the workshop and every chat.', primary: { href: '#', label: 'Tell us where you sell', wa: 'global' }, secondary: { href: '/pricing', label: 'See pricing' } })}
${L.section(`${L.sectionHead('BUILT FOR YOUR MARKET', 'What changes from country to country, handled.', '')}${factsGrid()}`)}
${L.section(`${L.sectionHead('BY MARKET', 'Pick where you sell.', 'Tap a market to see what changes there, then open its page.')}${require('./graphics').marketPicker()}<div class="bl-goals bl-goals-3">${MARKETS.map(([h, t, d]) => `<a href="${h}"><b>${t}</b><span>${d}</span><i>See Jwero for ${t.replace(/^The /, 'the ')} →</i></a>`).join('')}</div>`, { tone: 'tint' })}
${L.section(`${L.sectionHead('THE SAME EVERYWHERE', 'What works the same in every country.', '')}${L.cards([
  { title: 'One record', text: 'Customers, catalogue, stock, counter, schemes, workshop, books and team on one system.', link: { href: '/platform', label: 'The platform' } },
  { title: 'Official WhatsApp', text: 'Your number on the official WhatsApp Business Platform, with payments in the chat where your gateway supports it.', link: { href: '/products/whatsapp', label: 'WhatsApp' } },
  { title: 'AI that does the work', text: 'Replies, follow-ups and calls handled by AI inside caps, quiet hours and a kill switch, with approval only where you want it.', link: { href: '/products/ai-sales-agents', label: 'AI agents' } },
])}`)}
${L.ctaBand('Selling outside India?', 'Tell us your country and what you run; we will show you Jwero set up for your market.', 'global')}
`,
};

const market = ({ slug, title, description, eyebrow, h1, sub, wa, points, cmp, faqs, close }) => ({
  slug, title, description, faqs, breadcrumbs: [['Home', '/'], ['Jwero worldwide', '/global'], [eyebrow]],
  body: `
${L.hero({ eyebrow: eyebrow.toUpperCase(), h1, sub, primary: { href: '#', label: 'Show me Jwero for my market', wa }, secondary: { href: '/pricing', label: 'See pricing' }, mock: require('./graphics').marketCard({ 'jewellery-software-uae': 'gulf', 'jewellery-software-uk': 'ukeu', 'jewellery-software-usa': 'usca', 'jewellery-software-singapore': 'sea' }[slug]) })}
${L.section(`${L.sectionHead('BUILT FOR THIS MARKET', 'What a jeweller here needs, handled.', '')}<div class="wa-jobs">${points.map(([t, d]) => `<article><h3>${t}</h3><p>${d}</p></article>`).join('')}</div>`)}
${L.section(`${L.sectionHead('COMPARE', 'Separate tools, or one system.', '')}<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Separate tools</th><th>Jwero</th></tr></thead><tbody>${cmp.map(([r, a, b]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td class="wa-cmp-us">${b}</td></tr>`).join('')}</tbody></table></div>`, { tone: 'tint' })}
${L.section(`${L.sectionHead('EVERY MODULE', 'The whole business on one record.', '')}${L.cards([
  { title: 'Counter and stock', text: 'Billing at the live rate, old gold exchange, every piece by weight and purity, ageing and dead stock.', link: { href: '/products/pos', label: 'POS' } },
  { title: 'Customers and selling', text: 'WhatsApp, Instagram, an ecommerce website, video calls and a CRM that remembers every customer.', link: { href: '/products/crm', label: 'CRM' } },
  { title: 'Schemes, loans and the workshop', text: 'Gold savings schemes, gold loans, manufacturing and karigar work, on the same books.', link: { href: '/products', label: 'Every product' } },
])}`)}
${L.ctaBand(close[0], close[1], wa)}
`,
});

const uae = market({
  slug: 'jewellery-software-uae',
  title: 'Jewellery Software in the UAE and the Gulf: VAT, AED, Arabic | Jwero',
  description: 'Jewellery software for the UAE, Saudi Arabia, Qatar and the Gulf: GCC VAT invoices, AED and riyal pricing, live gold rates by gram or tola, Arabic and English WhatsApp, and hosting in your region.',
  eyebrow: 'Jwero in the Gulf', wa: 'mkt-gulf',
  h1: 'Jewellery software for the Gulf: VAT, dirhams, Arabic and English, on one record.',
  sub: 'For souk showrooms, chains and wholesalers in the UAE, Saudi Arabia, Qatar and across the GCC. Prices follow the gold rate in your currency, invoices carry VAT, and customers are answered in Arabic or English.',
  points: [['GCC VAT invoices', 'VAT on every bill under the GCC regime set for your business.'], ['Dirhams, riyals and more', 'Price, sell and invoice in the customer’s currency.'], ['Gold rate by gram or tola', 'Live rates for your market reprice the counter, the website and WhatsApp.'], ['Arabic and English', 'AI replies, voice and calls in Arabic, English, Hindi and more, for every customer.'], ['Tourists and NRI buyers', 'Video calls from WhatsApp and payments by Stripe or PayPal for buyers who are not in the shop.'], ['Your region', 'Hosting in your region on request, or self-hosted on your own servers.']],
  cmp: [['Price when gold moves', 'Typed on the board', 'Every piece repriced in your currency'], ['VAT', 'Worked out on the bill', 'On every invoice, under GCC VAT'], ['Language', 'Whoever is at the counter', 'Arabic, English, Hindi and more'], ['Customers abroad', 'Photos on a personal phone', 'Video call, catalogue link and payment in one chat'], ['Data', 'Wherever the tool keeps it', 'Your region, or your own servers']],
  faqs: [{ q: 'Does Jwero support VAT in the UAE and Saudi Arabia?', a: 'Yes. Invoices can run under the GCC VAT regime, set per business.' }, { q: 'Can customers be answered in Arabic?', a: 'Yes. AI chat, voice and calls work in Arabic, English and 12 other languages.' }, { q: 'Can my data stay in the region?', a: 'Hosting in your region is available on request, and Enterprise customers can self-host.' }],
  close: ['Running a showroom in the Gulf?', 'Tell us your city and what you run; we will show Jwero set up for VAT, your currency and Arabic.'],
});

const uk = market({
  slug: 'jewellery-software-uk',
  title: 'Jewellery Software in the UK and Europe: VAT, Pounds, Euros | Jwero',
  description: 'Jewellery software for the UK and Europe: UK and EU VAT invoices, pound and euro pricing, live gold rates, hallmark records, ecommerce at the live rate, and hosting in your region.',
  eyebrow: 'Jwero in the UK and Europe', wa: 'mkt-uk',
  h1: 'Jewellery software for the UK and Europe: VAT, live gold prices and every channel on one record.',
  sub: 'For independent jewellers, multi-store groups and online brands. VAT on every invoice, prices that follow the metal rate in pounds or euros, and every customer on one record across the shop, the website and WhatsApp.',
  points: [['UK and EU VAT', 'Invoices under the UK or EU VAT regime set for your business.'], ['Pounds and euros', 'Price, sell and invoice in your customer’s currency.'], ['Live metal prices', 'Gold and silver rates reprice the counter, the website and every channel together.'], ['Hallmark records', 'Hallmark details stored on every piece and printed where you need them.'], ['Ecommerce and marketplaces', 'Your own store, or Shopify and WooCommerce kept in step; Google Shopping and the Meta catalogue synced.'], ['Your region', 'Hosting in your region on request, or self-hosted with Enterprise.']],
  cmp: [['Prices when the metal moves', 'Edited by hand', 'Every channel repriced'], ['VAT', 'In the accounting package later', 'On every invoice at the counter and online'], ['Stock', 'Separate for shop and website', 'One stock everywhere'], ['Customers', 'In the till, the email tool and a phone', 'One record'], ['Data location', 'Wherever the vendor hosts', 'Your region, or your own servers']],
  faqs: [{ q: 'Does Jwero handle UK VAT?', a: 'Yes. Invoices can run under the UK VAT regime, or EU VAT for European businesses, set per business.' }, { q: 'Does it work with Shopify?', a: 'Yes. Keep your Shopify or WooCommerce store; Jwero keeps stock and prices in step and reads the orders.' }, { q: 'Which accounting software does it connect to?', a: 'Jwero keeps its own ledger and bridges to Tally and Zoho Books. For other accounting software, ask us.' }],
  close: ['Running a jewellery business in the UK or Europe?', 'Tell us what you run; we will show Jwero with VAT, your currency and your channels.'],
});

const usa = market({
  slug: 'jewellery-software-usa',
  title: 'Jewellery Software in the US and Canada: Sales Tax, POS, Ecommerce | Jwero',
  description: 'Jewellery software for the US and Canada: US sales tax invoices, dollar pricing, live gold rates by the ounce or gram, POS, ecommerce, CRM and WhatsApp on one record.',
  eyebrow: 'Jwero in the US and Canada', wa: 'mkt-usa',
  h1: 'Jewellery software for the US and Canada: POS, ecommerce and every customer on one record.',
  sub: 'For independent jewellers, bridal specialists and online brands. Sales tax on every bill, prices that follow the metal rate, and the shop, the website and every message on one customer record.',
  points: [['US sales tax', 'Invoices under the US sales tax regime set for your business.'], ['Dollar pricing', 'Price, sell and invoice in US or Canadian dollars.'], ['Gold by the ounce or gram', 'Live rates reprice the counter, the website and every channel together.'], ['Bridal and custom orders', 'Quotes accepted online, deposits on the record, orders tracked to delivery.'], ['Stripe and PayPal', 'Card payments at the counter, online and inside a chat.'], ['English, Spanish and French', 'AI replies, voice and calls in the customer’s language.']],
  cmp: [['POS, website and CRM', 'Three systems', 'One record'], ['Price when gold moves', 'Edited by hand', 'Every channel repriced'], ['Custom orders', 'Paper and email', 'Quote, deposit and order on one thread'], ['Follow-ups', 'When someone remembers', 'Sent by AI, inside limits you set'], ['Language', 'English only', 'English, Spanish, French and more']],
  faqs: [{ q: 'Does Jwero handle US sales tax?', a: 'Yes. Invoices can run under the US sales tax regime, set per business.' }, { q: 'What about Canada?', a: 'Canadian dollar pricing works today. Tell us your province and we will confirm the tax set-up for you.' }, { q: 'Which payment gateways work?', a: 'Stripe and PayPal, at the counter, online and in a chat.' }],
  close: ['Running a jewellery store in the US or Canada?', 'Tell us what you run; we will show Jwero with sales tax, dollars and your channels.'],
});

const sea = market({
  slug: 'jewellery-software-singapore',
  title: 'Jewellery Software in Singapore and South and Southeast Asia | Jwero',
  description: 'Jewellery software for Singapore, Malaysia, Sri Lanka, Nepal and Bangladesh: local currency pricing, live gold rates by gram or tola, WhatsApp and AI in many languages, and hosting in your region.',
  eyebrow: 'Jwero in South and Southeast Asia', wa: 'mkt-sea',
  h1: 'Jewellery software for South and Southeast Asia: your currency, your gold rate, one record.',
  sub: 'For goldsmiths, retail chains and wholesalers in Singapore, Malaysia, Sri Lanka, Nepal and Bangladesh. Prices follow the gold rate in your currency, and every customer is answered on WhatsApp in their language.',
  points: [['Local currency', 'Price, sell and invoice in your customer’s currency.'], ['Gold by gram or tola', 'Live rates for your market reprice every channel.'], ['Gold schemes and gold loans', 'Savings plans and loans on gold, collected and tracked on the same books.'], ['WhatsApp first', 'Official WhatsApp with a shared inbox, catalogues at today’s rate and AI replies.'], ['Many languages', 'AI chat, voice and calls in your customers’ languages, including English, Hindi, Bengali and Tamil.'], ['Your region', 'Hosting in your region on request, or self-hosted with Enterprise.']],
  cmp: [['Price when gold moves', 'Typed on the board', 'Every piece repriced'], ['Schemes and loans', 'Registers', 'On the customer record and the books'], ['Enquiries', 'A personal phone', 'One inbox, answered at any hour'], ['Stock', 'A spreadsheet', 'Every piece by weight and purity'], ['Data', 'Wherever the tool keeps it', 'Your region, or your own servers']],
  faqs: [{ q: 'Which tax system will my invoices use?', a: 'Jwero supports GST, VAT and sales tax regimes per business. Tell us your country and we will confirm the set-up for you.' }, { q: 'Can I price in my own currency?', a: 'Yes. Price, sell and invoice in your customer’s currency.' }, { q: 'Does it support gold schemes?', a: 'Yes. Enrolment, instalments collected automatically, maturity and redemption, on the customer record.' }],
  close: ['Selling gold in South or Southeast Asia?', 'Tell us your country and what you run; we will show Jwero set up for your market.'],
});

module.exports = [globalHub, uae, uk, usa, sea];
