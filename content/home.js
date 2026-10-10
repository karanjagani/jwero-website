const L = require('../lib');

const FAQ = [
  { q: "What is the best jewellery software in India in 2026?", a: "The best jewellery software runs the whole business on one record: customers, WhatsApp and every channel, the counter at today’s gold rate, stock by weight and HUID, karigar job work, purchase, books, promotions and the online store. Jwero does all of this, with AI that does the follow-up on its own inside limits you set." },
  { q: "Is there all-in-one software for jewellers?", a: "Jwero is all-in-one jewellery software: One Inbox for WhatsApp, Instagram, email and calls; a jewellery ERP for the counter, stock, workshop, purchase and books; a CRM that captures 20+ lead sources; promotions, social media and an online store, all on one record." },
  { q: "What is the best jewellery billing software?", a: "Good jewellery billing software prices each piece at today’s gold rate with metal, making, stones and GST, checks HUID, takes old gold on a voucher, splits payments and closes the day against expected cash. Jwero’s counter does this, keeps billing through an internet drop, and posts every bill to stock, books and the customer’s record." },
  { q: "Which jewellery software works with WhatsApp?", a: "Jwero runs WhatsApp on the official WhatsApp Business API inside One Inbox, with AI replies from your stock and today’s rate, payments in the chat, broadcasts to live segments, and every chat on the customer’s record next to her purchases and gold plan." },
  { q: "What is the best jewellery software for a small shop?", a: "A small jewellery shop needs WhatsApp answered, billing at today’s rate and stock it can see, without a big project. Jwero starts with those three and a free trial with every module, and the rest can be switched on when the shop needs it." },
  { q: "Is there jewellery software with gold savings schemes?", a: "Jwero runs gold savings schemes from enrolment to maturity: instalments collected and reminded automatically, online and at the counter, a passbook for the customer, and the balance on her record when she comes to redeem." },
  { q: "Can jewellers sell online with Jwero?", a: "Jwero includes an online store that prices at today’s gold rate with the breakup, shows HUID and certificates, sells from the same stock as the counter, and lets customers reserve at a branch, book a visit or pay a gold plan online." },
  { q: "Is there a Tally alternative for jewellers?", a: "Jwero keeps its own double-entry ledger with GST, P&L and balance sheet, so many jewellers run their books in Jwero. Others keep Tally or Zoho Books for their CA, and Jwero keeps it in step so nothing is typed twice." },
  { q: "Is there an alternative to Ornate NX, JewelAcc or Marg?", a: "Jwero is an alternative that puts the counter, stock and books on the same record as customers, WhatsApp, promotions and the online store, and runs online across branches. The Jwero comparison pages for Ornate NX, JewelAcc, Marg, SIONIQ and Synergics set out what to check on your own data." },
  { q: "What is the difference between jewellery ERP and CRM?", a: "A jewellery ERP runs the back office: counter, stock, workshop, purchase and books. A jewellery CRM runs customers: leads, records, follow-ups and loyalty. In Jwero both share one record, so a bill, a chat and a gold plan belong to the same customer." },
  { q: "Do I need to integrate anything?", a: "Jwero needs nothing connected between your own tools, because there is only one. It connects outward only to what has to stay outside, such as Tally or Zoho Books for your CA, payment gateways, and Meta and Google for ads." },
  { q: "Does the AI work on its own, or wait for my approval?", a: "Jwero’s AI works on its own: replies, follow-ups and reminders go out inside daily caps and quiet hours you set, and every action is logged. You choose which kinds of action need approval first, and one switch stops it at once." },
  { q: "How long does it take to switch to new jewellery software?", a: "Jwero’s team imports your customers, catalogue and stock and connects your WhatsApp number with you, and you can bill in Jwero alongside your old system until your team is settled, so nothing stops while you switch." },
  { q: "Will my shop stop billing while we switch?", a: "Jewellers keep billing throughout. Jwero runs alongside the old system while your team settles in, and the switch happens on a date you choose, outside your busy season." },
  { q: "Does Jwero work for jewellers outside India?", a: "Jwero works in other markets with the local currency, VAT or sales tax, the gold rate by gram, ounce or tola, customers’ languages including Arabic, and hosting in your region. The Jwero worldwide pages cover the Gulf, the UK and Europe, and the US." },
  { q: "Is jewellery software like Jwero secure?", a: "Jwero is ISO/IEC 27001 certified and independently penetration tested, runs each business in its own isolated database, encrypts data, and lets you export everything at any time. The Trust Centre sets out the details." },
  { q: "Who owns the data in Jwero?", a: "Each jeweller owns their data in Jwero. Every business runs in its own isolated database, and everything can be exported at any time." },
  { q: "How much does jewellery software cost?", a: "Jwero starts with a free trial that includes every module; your price is shown inside your account when the trial ends. Or let Jwero’s specialists and AI run the work for you instead." },
  { q: "Where is Jwero based, and who do I talk to?", a: "Jwero is made by Tech Jewels Private Limited, a registered Indian company with its office in Thane, next to Mumbai. You talk to a Jwero specialist on WhatsApp, by phone or by email." },
];

// 1. "I run a…" right under the hero; 2. six jobs; 3. one meter; 4. try a message; 6. progress bar.
const HICP = [
  ['single', 'store', 'A single store', 'Start with WhatsApp answered by AI, the counter at today’s rate, and a list of who to call each morning.', 'trial', 'Start free for your store'],
  ['chain', 'branches', 'A chain', 'Start with every branch on one record: routing, reply clocks, stock that balances by weight, and books in step.', 'demo', 'Book a 30-minute demo for a chain'],
  ['maker', 'layers', 'A workshop', 'Start with gold in fine grams through every stage, wastage against norms, and karigar khatas that settle themselves.', 'demo', 'Book a 30-minute demo for a workshop'],
  ['b2b', 'truck', 'A wholesaler', 'Start with buying: AI-drafted orders, unfixed-rate gold, GSTR-2B matching and buyer follow-ups.', 'trial', 'Start free for your trade business'],
  ['brand', 'send', 'An online brand', 'Start with the store, personalised promotions and social posts made by AI, all on one customer record.', 'trial', 'Start free for your brand'],
];
const ORDER = { single: 'inbox erp crm promotions social ecommerce', chain: 'erp crm inbox promotions ecommerce social', maker: 'erp crm inbox promotions ecommerce social', b2b: 'erp crm promotions inbox ecommerce social', brand: 'ecommerce social promotions crm inbox erp' };
const PARAM = { single: 'single', chain: 'chain', maker: 'maker', b2b: 'b2b', brand: 'brand' };
const hdoor = ([k, , , , d, label], cls) => d === 'demo'
  ? `<a class="${cls}" href="/book-demo" data-home-cta="door-${k}">${label}</a>`
  : `<a class="${cls}" href="https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=home-${k}" rel="noopener" data-trial data-home-cta="door-${k}">${label}</a>`;
const SOL = { single: ['/solutions/single-store', 'a showroom like yours'], chain: ['/solutions/multi-store-chains', 'a chain like yours'], maker: ['/solutions/manufacturers', 'a workshop like yours'], b2b: ['/solutions/b2b-jewellery', 'a wholesaler like yours'], brand: ['/solutions/d2c-brands', 'a brand like yours'] };
const STARTERS = {
  single: [['chat', 'WhatsApp, answered', '/products/inbox#whatsapp'], ['till', 'Billing at today’s rate', '/products/erp#pos'], ['box', 'Stock you can see', '/products/erp#inventory']],
  chain: [['branches', 'Every branch on one record', '/products/multi-store'], ['users', 'Leads routed, replies timed', '/products/crm'], ['box', 'Stock that balances by weight', '/products/erp#inventory']],
  maker: [['scale', 'Karigar job work in fine grams', '/products/erp#manufacturing'], ['activity', 'Wastage against your norms', '/products/erp#leaks'], ['truck', 'Purchase with unfixed rates', '/products/erp#purchase']],
  b2b: [['truck', 'Buying and GSTR-2B', '/products/erp#purchase'], ['book', 'Buyer catalogues', '/products/digital-catalogues'], ['users', 'Buyer follow-ups', '/products/crm']],
  brand: [['store', 'An online store at today’s rate', '/products/ecommerce'], ['target', 'Personalised promotions', '/products/promotions'], ['camera', 'Social posts made by AI', '/products/social-media']],
};
const homeIcp = () => `<section class="home-icp" id="for-you" data-home-icp data-order='${JSON.stringify(ORDER)}'><div class="container">
  <p class="home-icp-q">I run a…</p>
  <div class="home-icp-opts" role="tablist">${HICP.map(([k, ic, t], i) => `<button type="button" role="tab" data-k="${k}" aria-selected="${i === 0}">${L.icon(ic)}<span>${t}</span></button>`).join('')}</div>
  ${HICP.map((e, i) => `<div class="home-icp-panel${i === 0 ? ' is-on' : ''}" data-panel="${e[0]}"><p>${e[3]}</p><div class="home-icp-start"><small>Start with three</small>${STARTERS[e[0]].map(([ic, t, h]) => `<a href="${h}" data-home-cta="start-${e[0]}">${L.icon(ic)}${t}</a>`).join('')}</div>${hdoor(e, 'btn btn-primary')}<a class="btn-text" href="${SOL[e[0]][0]}" data-home-cta="sol-${e[0]}">How it works for ${SOL[e[0]][1]} →</a><a class="btn-text" href="#six">See your six jobs ↓</a></div>`).join('')}
  <p class="home-icp-more">Just starting? <a href="/solutions/startups">Start with what chains took decades to build →</a> · <a href="/solutions">All 45 businesses, problems and roles →</a></p>
</div></section>`;
const SIX = [
  ['inbox', '/products/inbox', 'ib', 'chat', 'One Inbox', 'Every enquiry answered in seconds, on every channel.', '<span class="hv hv-race"><i></i><i></i></span>'],
  ['erp', '/products/erp', 'erp', 'scale', 'Jewellery ERP', 'Counter, stock, workshop and books, without the leaks.', '<span class="hv hv-bars"><i></i><i></i><i></i></span>'],
  ['crm', '/products/crm', 'crm', 'users', 'Jewellery CRM', '20+ sources on one record, and who to call today.', '<span class="hv hv-dots"><i></i><i></i><i></i><i></i><i></i><b></b></span>'],
  ['promotions', '/products/promotions', 'pr', 'target', 'Personalised Promotions', 'The right piece, to the right customer, at her moment.', '<span class="hv hv-chips"><i></i><i></i><i></i></span>'],
  ['social', '/products/social-media', 'soc', 'camera', 'Social Media', 'Posts made by AI from your own stock, on 8 channels.', '<span class="hv hv-cal"><i></i><i></i><i></i><i></i><i></i><i></i><i></i></span>'],
  ['ecommerce', '/products/ecommerce', 'ec', 'store', 'Ecommerce', 'A store that prices like your counter, and learns.', '<span class="hv hv-bk"><i></i><i></i><i></i><b></b></span>'],
];
const six = () => `<div class="home-six" data-home-six>${SIX.map(([k, href, prm, ic, t, d, vis]) => `<a href="${href}" data-six="${k}" data-param="${prm}" data-home-cta="six-${k}">${vis}<span class="home-six-t">${L.icon(ic)}<b>${t}</b></span><span>${d}</span><i>Open ${t} →</i></a>`).join('')}</div>`;
const meter = () => `<div class="erp-meter home-meter" data-homem>
  <p class="erp-meter-t">${L.icon('activity')}<b>What could your business be missing each month?</b></p>
  <label><span>Enquiries a month <b data-o="enq"></b></span><input type="range" data-i="enq" min="20" max="5000" step="10" value="600"></label>
  <label><span>Sales a month <b data-o="sales"></b></span><input type="range" data-i="sales" min="5" max="1000" step="5" value="60"></label>
  <label><span>Pieces in stock <b data-o="pcs"></b></span><input type="range" data-i="pcs" min="100" max="20000" step="100" value="3000"></label>
  <div class="erp-meter-bars">
    <a href="/products/inbox" data-b="cold"><span>Enquiries going cold</span><i><em></em></i><b></b></a>
    <a href="/products/crm" data-b="follow"><span>Leads never followed up</span><i><em></em></i><b></b></a>
    <a href="/products/erp#leaks" data-b="disc"><span>Discounts nobody approved</span><i><em></em></i><b></b></a>
    <a href="/products/erp#inventory" data-b="slow"><span>Cost of slow stock</span><i><em></em></i><b></b></a>
  </div>
  <p class="erp-meter-total"><span>A month, roughly</span><b data-o="total"></b></p>
  <a class="btn btn-primary erp-meter-cta" href="#" data-wa="home" data-wa-extra="" data-home-cta="meter">Show me what Jwero would catch for my business</a>
  <details class="erp-meter-as"><summary>The assumptions, change them</summary>
    <label>Enquiries that go cold from slow replies, %<input type="number" data-a="cold" value="12" step="1" min="0"></label>
    <label>Enquiries never followed up, %<input type="number" data-a="follow" value="20" step="1" min="0"></label>
    <label>Of those, would have bought, %<input type="number" data-a="buy" value="8" step="1" min="0"></label>
    <label>Average bill, ₹<input type="number" data-a="bill" value="55000" step="5000" min="0"></label>
    <label>Unapproved discount, % of sales<input type="number" data-a="disc" value="0.5" step="0.1" min="0"></label>
    <label>Slow stock carrying cost a month, ₹ per piece past 180 days<input type="number" data-a="slow" value="500" step="50" min="0"></label>
  </details>
  <p class="erp-meter-note">A planning estimate from your inputs and these assumptions, not a measurement. Each line opens the page that closes it.</p>
</div>`;
const prog = () => `<nav class="erp-prog" data-erp-prog aria-label="On this page"><div class="erp-prog-in">
  <ol>${[['for-you', 'Your business'], ['six', 'Six jobs'], ['missing', 'What you miss'], ['try', 'Try it'], ['run', 'Run it']].map(([id, t], i) => `<li><a href="#${id}" data-p="${id}"><b>${i + 1}</b>${t}</a></li>`).join('')}</ol>
  <span class="erp-prog-doors">${HICP.map((e) => hdoor(e, 'btn btn-primary erp-prog-cta home-door')).join('')}</span>
</div><i class="erp-prog-fill" aria-hidden="true"></i></nav>`;

const home = {
  slug: 'index',
  title: 'Jewellery Software: CRM, ERP, POS and WhatsApp in One | Jwero',
  description:
    'Jwero is jewellery software for the whole business: CRM, ERP, inventory, POS, billing, WhatsApp and gold schemes on one record, with AI that asks you first.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'The Autonomous Jewellery OS, run by AI: CRM, showroom, POS and billing, inventory, purchase, manufacturing, accounts, HR and reports on one record, with WhatsApp and Instagram commerce, gold savings schemes and a governed AI workforce.',
    url: 'https://jwero.ai',
  },
  faqs: FAQ,

  body: `
${L.homeHero({
  kicker: 'You focus on jewellery. We handle the chaos.',
  h1: 'Every customer remembered. <span class="h1-turn">Every gram accounted for.</span>',
  sub: 'Jewellery software that runs the whole business on one record: customers, counter, stock, team and books, with AI that does the follow-up on its own.',
  rail: false,
  gem: { set: 'd2c' },
})}

${homeIcp()}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">What is Jwero?</h2><p>Jwero is jewellery software for the whole business. Customers, WhatsApp and every channel, the counter at today’s gold rate, stock by weight and HUID, karigar job work, purchase, books, gold savings schemes, promotions, social media and the online store share one customer record, and AI does the routine follow-up on its own inside limits you set.</p></div></section>

${prog()}

<section class="pz-logos">${L.customerLogos()}</section>

${L.section(`${L.sectionHead('ONE RECORD, SIX JOBS', 'What does Jwero run for a jeweller?', 'Six products, one customer record. Open the one that hurts most today.')}${six()}`, { id: 'six' })}

${L.section(
  `<span id="one-record"></span>${L.sectionHead('THE PRODUCT', 'One dashboard. Every department on it.', 'A sale at the counter updates the stock, the books, her loyalty points and the next follow-up at the same moment, because they are all the same record. This is a real recording, not a mock-up.')}
<figure class="pvid"><div class="pvid-frame"><video data-pvid muted loop playsinline preload="none" poster="/assets/product/os-overview.webp" width="1280" height="720" aria-label="Screen recording of Jwero: the Stock and Workshop overview with open purchase orders, inventory value, metal value and a stock pulse, then the tabs for Sales, Marketing, Finance and Teams"><source src="/assets/product/os-overview.mp4" type="video/mp4"></video><button type="button" class="pvid-toggle" data-pvid-toggle aria-label="Pause the recording">Pause</button></div>
<figcaption>Operations, Sales, Marketing, Finance and Teams across the top of one screen. <a href="/platform">Take the full tour →</a></figcaption></figure>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('WHAT YOU MISS TODAY', 'What could your business be missing each month?', 'Three numbers. Each line opens the page that closes it.')}${meter()}`, { tone: 'tint', id: 'missing' })}

${L.section(`${L.sectionHead('TRY IT', 'What does the AI say to your customer?', 'Pick a message. See the reply, and what it used.')}${require('./inbox').parts.tryIt()}`, { id: 'try' })}
${L.section(`<div class="home-ig"><a class="home-ig-card" href="https://www.instagram.com/jwero.ai/" rel="noopener" target="_blank" data-home-ig><span class="home-ig-av" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg></span><span class="home-ig-t"><small>JWERO ON INSTAGRAM</small><b>@jwero.ai</b><span>Follow Jwero for product updates and short videos of the platform at work.</span></span><span class="btn btn-primary home-ig-btn">Follow on Instagram</span></a></div>`, { id: 'instagram' })}

${L.section(`<span id="run"></span><div class="price-line">
  <div><p class="eyebrow">ONE PLAN, EVERY MODULE</p><h2>Run it yourself, or let Jwero run it.</h2><p>One plan with every module replaces the tools you pay for today. You start with a free trial, and your price is shown in your account when it ends. Or let Jwero’s specialists and AI run the work for you: no subscription, every tool included.</p></div>
  <div class="price-line-cta"><a class="btn btn-primary" href="/start?from=home-price">Try Free Now</a><a class="btn btn-ghost" href="/jewellery-business-as-a-service">Let Jwero handle it</a><a class="btn-text" href="/pricing">Compare all three ways →</a></div>
</div>`, { tone: 'tint' })}

${L.section(
  `<span id="count-yours"></span>${L.sectionHead('ONE PLACE FOR ALL OF IT', `${L.STACK_N} separate tools become one.`, 'Every tool a jewellery business pays for, logs into and keeps in step is already inside Jwero, working from the same record.')}
  <details class="home-fold" data-lazy-src="/fragments/home-tools.html"><summary>See all ${L.STACK_N} tools Jwero replaces</summary><p class="home-fold-list">${[...new Set(L.STACK.flatMap(([, , items]) => items).filter((t) => !/integration/i.test(t)))].join(' · ')}</p><div data-lazy-slot></div></details><p class="jb-more"><a href="/products">See every product in Jwero →</a></p>`
, { tone: 'tint' })}






${L.section(
  `${L.sectionHead('TRUST', 'Certified, tested, and yours to check.', 'ISO/IEC 27001 certified and independently penetration tested, with your own encrypted database that you can export at any time.')}
  ${L.trustStrip({ featured: true })}<p class="jb-more"><a href="/trust">See the Trust Centre →</a></p>`
, { tone: 'tint' })}


${L.section(`${L.sectionHead('QUESTIONS JEWELLERS ASK', 'Jewellery software questions, answered straight.', '')}${L.faqBlock(FAQ)}
<p class="cta-note" style="margin-top:18px">More questions? <a href="/faq">Every question, answered</a> · <a href="#" data-wa="faq">ask us now</a>.</p>`)}

${L.section(
  `<div class="close-plan">
    <h2>See your own business on one record.</h2>
    <ol class="plan-steps">
      <li><strong>1.</strong> Talk to us</li>
      <li><strong>2.</strong> See it running on your own data</li>
      <li><strong>3.</strong> Go live before the season</li>
    </ol>
    <p class="close-plan-note">The sooner you start, the sooner it shows up in your own growth report.</p>
    <div class="cta-row center">
      <a class="btn btn-primary" href="#" data-wa="close">Talk to us</a>
      <a class="btn btn-ghost-light" href="https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=close" rel="noopener" data-trial>Try Free Now</a>
    </div>
  </div>`
, { tone: 'ink' })}
`,
};

module.exports = [home];
