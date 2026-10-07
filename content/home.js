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
    offers: { '@type': 'Offer', price: '18000', priceCurrency: 'INR', description: 'Per month, billed monthly, excluding GST. Every module. First month ₹3,600.' },
  },
  faqs: [
    { q: 'What is Jwero?', a: 'Jwero is the Autonomous Jewellery OS, run by AI — one system where customers, catalogue, stock, counter billing, purchase, workshop, accounts and team share one record with every selling channel, and an AI workforce drafts the work under your approval.' },
    { q: 'Do I have to replace my current billing or accounting software?', a: 'No. Keep your books exactly where your accountant likes them — Jwero bridges to Tally and Zoho Books. Most businesses change nothing on the accounting side on day one.' },
    { q: 'Will AI message my customers without asking?', a: 'No. Every AI-drafted action waits in an approval queue until your team clears it, inside daily caps and quiet hours you set — with a kill switch at five scopes. Autonomy is earned action by action, never assumed.' },
    { q: 'How long does it take to go live?', a: 'Set-up takes a day for most shops: we import your customers, connect your existing WhatsApp number, and publish your catalogue, with approvals switched on from day one.' },
    { q: 'Who owns my data?', a: 'You do. Every business runs in its own isolated database, and you can export everything, any time.' },
  ],
  body: `
${L.homeHero({
  kicker: 'The Autonomous Jewellery OS, run by AI',
  h1: 'Jewellery software that runs the whole business: customers, counter, stock, team and books.',
  sub: 'Customers, counter, stock, workshop, books and team on one record. AI drafts the routine work and flags what is slipping, and nothing goes out without your yes.',
})}

<section class="pz-logos">${L.customerLogos()}</section>

${require('./positioning').quotes(3)}

${L.section(`${L.sectionHead('WHO IT IS FOR', 'Built for your kind of jewellery business.', 'The same Jwero, set up the way your business works.')}
  <div class="bl-goals bl-goals-3 home-who">${[
    ['store', 'One showroom', 'Counter, stock, schemes and every customer, without the owner remembering everything.', '/solutions/single-store'],
    ['branches', 'A chain of stores', 'Every branch on one record: prices, stock, transfers and reports.', '/solutions/multi-store-chains'],
    ['layers', 'A manufacturer', 'Orders, karigars, wastage by stage and metal accounts.', '/solutions/manufacturers'],
    ['truck', 'A wholesaler', 'Buyer catalogues, memo, buyer pricing and follow-ups.', '/solutions/b2b-jewellery'],
    ['send', 'An online brand', 'Your own store at today’s rate, plus WhatsApp and Instagram.', '/solutions/d2c-brands'],
    ['sparkle', 'Just starting', 'Start with the system chains took decades to build.', '/solutions/startups'],
  ].map(([i, t, d, h]) => `<a href="${h}"><span class="home-who-ico">${L.icon(i)}</span><b>${t}</b><span>${d}</span><i>See how it works →</i></a>`).join('')}</div>
  <p class="cta-note" style="margin-top:14px;text-align:center"><a href="/solutions">All 45 businesses, problems and roles →</a></p>`)}

${L.section(
  `${L.sectionHead('FROM FIFTY LOGINS TO ONE RECORD', 'What changes across the whole jewellery business.', 'Not only how you sell. The counter, the stock room, the vendor, the workshop, the books and the team run on the same record, so each one knows what the others did.')}
  <div data-cmp-tabs>${L.compareRows(L.DEPARTMENTS)}</div>`
)}

${L.section(
  `<span id="one-record"></span><div class="gem-head"><h2>One record. Every department. Your approval.</h2><p>Play a week, run a full day, or break it into the tools it lives in today. <a href="/platform">See the full platform →</a></p></div>
  ${L.gemStage2()}`
, { tone: 'tint' })}

${require('./jbaas').section()}

${L.section(
  `<span id="count-yours"></span>${L.sectionHead('COUNT YOUR TOOLS', `${L.STACK_N} separate tools become one.`, 'Pick your kind of business, or answer yes for each area you pay software for. See what it costs and what Jwero saves.')}
  ${L.stackMerge()}<p class="jb-more">Tools are half of it. <a href="/count-your-team">Count your team too: the people it takes, and what Jwero would cost →</a></p>`
, { tone: 'tint' })}






${L.section(
  `<div class="gem-head"><h2>Security and privacy delivered, just as you want.</h2></div>
  ${L.trustStrip()}`
, { tone: 'tint' })}

${require('./positioning').refer()}

${L.section(`${L.sectionHead('QUESTIONS JEWELLERS ASK', 'Jewellery software questions, answered straight.', '')}${L.faqBlock([
  { q: 'What is Jwero?', a: 'Jwero is the Autonomous Jewellery OS, run by AI — one system where customers, catalogue, stock, counter billing, purchase, workshop, accounts and team share one record with every selling channel, and an AI workforce drafts the work under your approval.' },
  { q: 'Do I have to replace my billing or accounting software?', a: 'No. Keep your books exactly where your accountant likes them — Jwero bridges to Tally and Zoho Books. <a href="/migration">See the Migration Centre</a>.' },
  { q: 'Will AI message my customers without asking?', a: 'No. Every AI-drafted action waits in an approval queue, inside daily caps and quiet hours, with a kill switch at five scopes. <a href="/platform/ai-workforce">See how governance works</a>.' },
  { q: 'How long does it take to go live?', a: 'Set-up takes a day for most shops: customers imported, your WhatsApp number connected, catalogue published, approvals on from day one.' },
  { q: 'Who owns my data?', a: 'You do. Every business runs in its own isolated database, and you can export everything, any time. <a href="/trust/security">Read about security</a>.' },
])}
<p class="cta-note" style="margin-top:18px">More questions? <a href="/faq">Every question, answered</a> · <a href="#" data-wa="faq">ask us now</a>.</p>`)}

${L.section(
  `<div class="close-plan">
    <h2>Every customer remembered. Every gram and rupee accounted for.</h2>
    <ol class="plan-steps">
      <li><strong>1.</strong> Chat or call with us</li>
      <li><strong>2.</strong> See it running on your own data</li>
      <li><strong>3.</strong> Go live before the season</li>
    </ol>
    <p class="close-plan-note">The sooner you start, the sooner it shows up in your own growth report.</p>
    <div class="cta-row center">
      <a class="btn btn-primary" href="#" data-wa="close">Chat or call with us</a>
      <a class="btn btn-ghost-light" href="/book-demo">Book a demo</a>
      <a class="btn-text-light" href="#" data-wa="pilot">or start a pilot with your own data</a>
    </div>
  </div>`
, { tone: 'ink' })}
`,
};

module.exports = [home];
