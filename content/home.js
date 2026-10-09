const L = require('../lib');

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
    review: require('./positioning').QUOTES.slice(0, 5).map(([body, name, biz]) => ({ '@type': 'Review', reviewBody: body, author: { '@type': 'Person', name: String(name).replace(/<[^>]*>/g, '') }, publisher: { '@type': 'Organization', name: String(biz || '').replace(/<[^>]*>/g, '') } })),
  },
  faqs: [
    { q: 'What is Jwero?', a: 'Jwero is the Autonomous Jewellery OS, run by AI — one system where customers, catalogue, stock, counter billing, purchase, workshop, accounts and team share one record with every selling channel, and an AI workforce does the routine work on its own, inside limits you set.' },
    { q: 'Do I have to replace my current billing or accounting software?', a: 'No. Keep your books exactly where your accountant likes them — Jwero bridges to Tally and Zoho Books. Most businesses change nothing on the accounting side on day one.' },
    { q: 'Does the AI work on its own, or wait for my approval?', a: 'It works on its own. Replies, follow-ups and reminders go out automatically, inside daily caps and quiet hours you set, and every action is logged. You choose which kinds of action need your approval first, and one switch stops it at once, from one agent to everything.' },
    { q: 'How long does it take to go live?', a: 'Set-up takes a day for most shops: we import your customers, connect your existing WhatsApp number, and publish your catalogue, with the AI working inside your limits from day one.' },
    { q: 'Who owns my data?', a: 'You do. Every business runs in its own isolated database, and you can export everything, any time.' },
  ],
  body: `
${L.homeHero({
  kicker: 'You focus on jewellery. We handle the chaos.',
  h1: 'Jewellery software that runs the whole business: customers, counter, stock, team and books.',
  sub: 'One system, so nothing is typed twice and nothing needs connecting, with AI that does the follow-up on its own.',
  rail: false,
})}

<section class="pz-logos">${L.customerLogos()}</section>

${L.section(`${L.sectionHead('IN THEIR WORDS', 'Jewellers on working with Jwero.', '')}${require('./positioning').quoteCards(3)}<p class="jb-more"><a href="/success-stories">Read what more jewellers say →</a></p>`)}

${L.section(`${L.sectionHead('WHO IT IS FOR', 'Built for your kind of jewellery business.', 'The same Jwero, set up the way your business works.')}
  <div class="bl-goals bl-goals-3 home-who">${[
    ['store', 'One showroom', 'Counter, stock, schemes and every customer, without the owner remembering everything.', '/solutions/single-store'],
    ['branches', 'A chain of stores', 'Every branch on one record: prices, stock, transfers and reports.', '/solutions/multi-store-chains'],
    ['layers', 'A manufacturer', 'Orders, karigars (goldsmiths), wastage by stage and metal accounts.', '/solutions/manufacturers'],
    ['truck', 'A wholesaler', 'Buyer catalogues, memo, buyer pricing and follow-ups.', '/solutions/b2b-jewellery'],
    ['send', 'An online brand', 'Your own store at today’s rate, plus WhatsApp and Instagram.', '/solutions/d2c-brands'],
    ['sparkle', 'Just starting', 'Start with the system chains took decades to build.', '/solutions/startups'],
  ].map(([i, t, d, h]) => `<a href="${h}"><span class="home-who-ico">${L.icon(i)}</span><b>${t}</b><span>${d}</span><i>See how it works →</i></a>`).join('')}</div>
  <p class="cta-note" style="margin-top:14px;text-align:center"><a href="/solutions">All 45 businesses, problems and roles →</a></p>`)}

${L.section(`${L.sectionHead('WHERE MOST SHOPS START', 'Three things on day one. The rest when you need it.', 'You do not switch on 35 products. You switch on the three that cost you sales today, and each one replaces something you pay for now.')}
  <div class="bl-goals bl-goals-3 home-three">${[
    ['chat', 'WhatsApp, answered', 'Your business number on the official API, the catalogue at today’s rate, replies sent by AI from her record, payments in the chat.', 'Replaces: a personal number, a bulk-message tool, a payment link app', '/products/whatsapp'],
    ['till', 'Billing at the live rate', 'Scan to bill with the price breakup, old gold exchange, GST and day close, with the books kept in step with Tally.', 'Replaces: the calculator, the rate board, a billing package, re-entry into Tally or your accounting software', '/products/pos'],
    ['box', 'Stock you can see', 'Every piece by weight, purity and HUID, valued today, with ageing and dead stock flagged.', 'Replaces: the stock sheet, the yearly stocktake surprise', '/products/inventory'],
  ].map(([i, t, d, r, h]) => `<a href="${h}"><span class="home-who-ico">${L.icon(i)}</span><b>${t}</b><span>${d}</span><i>${r}</i></a>`).join('')}</div>
  <p class="cta-note" style="margin-top:14px;text-align:center">Customers, catalogue and stock are imported for you. Most shops go live in a day. <a href="/products">See every product →</a></p>`)}

${L.section(`<div class="global-strip"><p class="eyebrow">WORLDWIDE</p><h2>Built for jewellers in every market.</h2><p>Your currency, GST, VAT or sales tax, your gold rate by gram, ounce or tola, your customers’ languages including Arabic, and hosting in your region.</p><p class="global-links"><a href="/jewellery-software-india">India</a><a href="/jewellery-software-uae">The Gulf</a><a href="/jewellery-software-uk">UK and Europe</a><a href="/jewellery-software-usa">US and Canada</a><a href="/jewellery-software-singapore">South and Southeast Asia</a><a href="/global">Jwero worldwide →</a></p></div>`, { tone: 'tint' })}
${L.section(
  `${L.sectionHead('FROM MANY LOGINS TO ONE RECORD', 'What changes across the whole jewellery business.', 'Not only how you sell. The counter, the stock room, the vendor, the workshop, the books and the team run on the same record, so each one knows what the others did.')}
  <div data-cmp-tabs>${L.compareRows(L.DEPARTMENTS)}</div>`
)}

<section class="section rail-section" id="journey"><div class="container"><div class="panel rail-panel"><h2>From the first enquiry to the closed books.</h2><p>Seven stages, one record. Tap a stage to see what is in it and what the AI does there.</p>${L.heroRail()}</div></div></section>

${L.section(
  `<span id="one-record"></span>${L.sectionHead('THE PRODUCT', 'One dashboard. Every department on it.', 'A sale at the counter updates the stock, the books, her loyalty points and the next follow-up at the same moment, because they are all the same record. This is a real recording, not a mock-up.')}
<figure class="pvid"><div class="pvid-frame"><video data-pvid muted loop playsinline preload="none" poster="/assets/product/os-overview.webp" width="1280" height="720" aria-label="Screen recording of Jwero: the Stock and Workshop overview with open purchase orders, inventory value, metal value and a stock pulse, then the tabs for Sales, Marketing, Finance and Teams"><source src="/assets/product/os-overview.mp4" type="video/mp4"></video><button type="button" class="pvid-toggle" data-pvid-toggle aria-label="Pause the recording">Pause</button></div>
<figcaption>Operations, Sales, Marketing, Finance and Teams across the top of one screen. <a href="/platform">Take the full tour →</a></figcaption></figure>`
, { tone: 'tint' })}

${L.section(`<div class="price-line">
  <div><p class="eyebrow">ONE PLAN, EVERY MODULE</p><h2>Run it yourself, or let Jwero run it.</h2><p>One plan with every module replaces the tools you pay for today. You start with a free trial, and your price is shown in your account when it ends. Or let Jwero’s specialists and AI run the work for you: no subscription, every tool included.</p></div>
  <div class="price-line-cta"><a class="btn btn-primary" href="/start?from=home-price">Try Free Now</a><a class="btn btn-ghost" href="/jewellery-business-as-a-service">Let Jwero handle it</a><a class="btn-text" href="/pricing">Compare all three ways →</a></div>
</div>`, { tone: 'tint' })}

${L.section(
  `<span id="count-yours"></span>${L.sectionHead('ONE PLACE FOR ALL OF IT', `${L.STACK_N} separate tools become one.`, 'Every tool a jewellery business pays for, logs into and keeps in step is already inside Jwero, working from the same record.')}
  ${require('./graphics').toolsInto()}<p class="jb-more"><a href="/products">See every product in Jwero →</a></p>`
, { tone: 'tint' })}






${L.section(
  `<div class="gem-head"><h2>Certified, tested, and yours to check.</h2><p>ISO/IEC 27001 certified. Independently penetration tested. Tested against the OWASP Top 10. SOC 2 in progress. Your own database, encrypted, and exportable any time. <a href="/trust">See the Trust Centre →</a></p></div>
  ${L.trustStrip({ featured: true })}`
, { tone: 'tint' })}


${L.section(`${L.sectionHead('QUESTIONS JEWELLERS ASK', 'Jewellery software questions, answered straight.', '')}${L.faqBlock([
  { q: 'What is Jwero?', a: 'Jwero is the Autonomous Jewellery OS, run by AI — one system where customers, catalogue, stock, counter billing, purchase, workshop, accounts and team share one record with every selling channel, and an AI workforce does the routine work on its own, inside limits you set.' },
  { q: 'Do I need to integrate anything?', a: 'Not between your own tools, because there is only one. Customers, WhatsApp, catalogue, website, counter, stock, workshop, schemes, accounts, marketing and HR are all built into Jwero and share one record. Jwero connects outward only to what has to stay outside: Tally or Zoho Books for your accountant, Meta, your payment gateway, your phone line, and Shopify or WooCommerce if you keep that store. We set those up with you. <a href="/platform/integrations">See what Jwero connects to</a>.' },
  { q: 'Do I have to replace my billing or accounting software?', a: 'No. Keep your books exactly where your accountant likes them — Jwero bridges to Tally and Zoho Books. <a href="/migration">See the Migration Centre</a>.' },
  { q: 'Does the AI work on its own, or wait for my approval?', a: 'It works on its own. Replies, follow-ups and reminders go out automatically, inside daily caps and quiet hours you set, and every action is logged. You choose which kinds of action need your approval first, and a kill switch stops it at once. <a href="/platform/ai-workforce">See how governance works</a>.' },
  { q: 'How long does it take to go live?', a: 'Set-up takes a day for most shops: customers imported, your WhatsApp number connected, catalogue published, AI working inside your limits from day one.' },
  { q: 'How do I start?', a: 'Tap Try Free Now and create your account with Google, LinkedIn or email. You get a free trial with every module, and your price is shown in your account when the trial ends. We can import your customers, catalogue and stock with you, and connect your WhatsApp number. If you would rather hand the work over, Jwero can run it for you. <a href="/jewellery-business-as-a-service">See how that works</a>.' },
  { q: 'What if the internet drops at the counter?', a: 'Jwero runs in the browser, so the counter needs an internet connection; offline counter billing can be switched on for your business so sales are kept on the device and sync later. A phone hotspot is enough to keep billing when the broadband drops, and because nothing lives on one computer, a dead machine loses nothing.' },
  { q: 'Can my staff use Jwero in their own language?', a: 'The staff app for attendance, leave and payslips works in multiple languages, and WhatsApp replies go out in the customer’s language. Onboarding and support are in your language.' },
  { q: 'Will my shop stop billing while we switch?', a: 'No. Your current billing software keeps running until you choose to move. We import your customers, catalogue and stock, usually in a day, and you can bill in Jwero alongside the old system while your team settles in. A written change-freeze keeps your season untouched, and your data exports any time if you decide to stop.' },
  { q: 'Where is Jwero, and who do I talk to?', a: 'Jwero is made by Tech Jewels Private Limited, a registered Indian company with its office in Thane, next to Mumbai; the registration number is on the <a href="/company">company page</a>. You talk to a Jwero specialist on WhatsApp, by phone on +91 91699 59959 or by email at care@jwero.ai, 10am to 8pm India time. Outside those hours a chat still reaches us and a call becomes a callback.' },
  { q: 'Who owns my data?', a: 'You do. Every business runs in its own isolated database, and you can export everything, any time. <a href="/trust/security">Read about security</a>.' },
])}
<p class="cta-note" style="margin-top:18px">More questions? <a href="/faq">Every question, answered</a> · <a href="#" data-wa="faq">ask us now</a>.</p>`)}

${L.section(
  `<div class="close-plan">
    <h2>Every customer remembered. Every gram and rupee accounted for.</h2>
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
