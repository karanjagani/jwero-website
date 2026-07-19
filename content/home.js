const L = require('../lib');

const home = {
  slug: 'index',
  title: 'Jwero — The AI Growth Engine for Jewellery Business',
  description:
    'Jwero gives jewellers one system that remembers every customer, sells on WhatsApp and Instagram, runs gold schemes and digital gold, and puts AI staff to work — with your approval on everything.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'AI growth engine for jewellery business: customer memory, WhatsApp and Instagram commerce, gold savings schemes, digital gold, and governed AI staff.',
    url: 'https://jwero.ai',
  },
  faqs: [
    { q: 'What is Jwero?', a: 'Jwero is the AI growth engine for jewellery business — one system that holds your customer memory, your catalogue and your selling channels (WhatsApp, Instagram, Facebook, web, video), runs gold savings schemes and digital gold, and puts AI staff to work under your approval.' },
    { q: 'Is Jwero a CRM or an ERP?', a: 'Neither word fits. ERPs record transactions; messaging tools send messages. Jwero is the layer that brings customers back: it remembers every customer, sells on the channels they actually use, and automates follow-up with your approval. It works alongside your existing accounting software — Tally and Zoho Books bridges are built in.' },
    { q: 'Will AI message my customers without asking?', a: 'No. Every AI-drafted message waits in an approval queue until you or your team clears it. Daily caps limit volume, quiet hours are respected, and a kill switch can pause any agent — or all AI activity — instantly. Autonomy is earned step by step, and only if you choose it.' },
    { q: 'Do I have to replace my current billing or accounting software?', a: 'No. Keep your books where they are — Jwero bridges to Tally and Zoho Books, and connects to Shopify, WooCommerce and Unicommerce. Jwero takes over the revenue side first: customers, channels, schemes, follow-up. Most jewellers change nothing else on day one.' },
    { q: 'How long does it take to go live?', a: 'The first stage takes days, not months: we import your customers from Excel or your current software, connect your existing WhatsApp number, and publish your catalogue. Greetings and follow-ups switch on with approvals enabled from day one.' },
    { q: 'Who owns my data?', a: 'You do. Every business runs in its own isolated database, and you can export everything, any time. Your customer list never becomes anyone else’s asset.' },
  ],
  body: `
${L.hero({
  eyebrow: 'THE AI GROWTH ENGINE FOR JEWELLERY BUSINESS',
  h1: 'Every customer remembered.<br>Every customer brought back.',
  sub: 'One growth engine for any jewellery business — single store, chain or manufacturer. Jwero answers every enquiry in minutes, sells on WhatsApp, Instagram and the web, runs gold schemes and digital gold, and brings customers back for every occasion. Nothing goes out without your approval.',
  primary: { href: '#', label: 'See Jwero on WhatsApp', wa: 'home' },
  secondary: { href: '/book-demo.html', label: 'Book a demo' },
  note: 'A two-minute demo on your own phone. No form, no download.',
  mock: L.mockChat,
})}

${L.section(
  `${L.sectionHead(
    'THE PROBLEM',
    'Your software keeps records. It doesn’t bring customers back.',
    'The average jewellery business runs on five or six disconnected tools — and the customer exists as a whole person in none of them.'
  )}
  <div class="stack-grid">
    <div class="stack-item"><strong>Billing software</strong>Knows what she bought. Not why, or when she will buy again.</div>
    <div class="stack-item"><strong>Messaging apps</strong>On a salesperson’s personal phone. When they leave, your customers leave with them.</div>
    <div class="stack-item"><strong>Catalogue PDFs</strong>Shared manually. No live prices, no stock, no follow-through.</div>
    <div class="stack-item"><strong>Website</strong>A ghost town that doesn’t understand gold-rate pricing.</div>
    <div class="stack-item"><strong>Scheme spreadsheets</strong>Savings plans tracked on paper and Excel — leakage and disputes built in.</div>
    <div class="stack-item"><strong>Marketing agency</strong>Festival blasts into the void. No memory, no attribution.</div>
  </div>
  <div class="stack-verdict"><strong>The sale you lose is rarely lost to a rival. It is lost to forgetting.</strong> Jwero replaces the pile of tools with one system that knows every customer, every occasion, every balance — at one counter or a hundred.</div>`
)}

${L.section(
  `${L.sectionHead('ONE SYSTEM, THREE JOBS', 'Everything a growth engine needs. Nothing a ledger does better.', '')}
  ${L.cards([
    { icon: '◆', title: 'Customer Memory', text: 'A living record of every customer: purchases, gold-plan balance, family occasions, taste, best time to reach — 90+ fields, each with a “why” you can inspect.', link: { href: '/customer-memory.html', label: 'See the memory' } },
    { icon: '◇', title: 'The Digital Counter', text: 'Sell where your customers already are: WhatsApp, Instagram, Facebook, your own online store and live video — with real prices at today’s gold rate.', link: { href: '/products/whatsapp.html', label: 'See the counter' } },
    { icon: '❖', title: 'AI Staff', text: 'Tireless staff that answer in minutes, follow up on every enquiry, remember every birthday and invite customers before every festival — and wait for your approval.', link: { href: '/ai-staff.html', label: 'Meet the AI staff' } },
  ])}`
, { tone: 'tint' })}

${L.governanceStrip()}

${L.section(
  `<div class="grid grid-2" style="align-items:center; gap:48px;">
    <div>
      ${L.sectionHead('PROOF, WEEKLY', 'The Growth Report: what came back this week.', 'Every week, Jwero sends the owner a plain-language report: how many past customers returned, how many appointments were booked, how much revenue the system brought back. Not a dashboard you must remember to open — an answer that arrives.')}
      <a class="btn btn-primary" href="/book-demo.html">Get your first report in 30 days</a>
    </div>
    <div class="report" data-report>
      <div class="report-head"><strong>Your Growth Report</strong><span class="badge-sample">Sample</span></div>
      <div class="report-tabs" role="tablist">
        <button type="button" data-tab="week" aria-selected="true">This week</button>
        <button type="button" data-tab="month" aria-selected="false">This month</button>
      </div>
      <div class="report-body">
        <div class="report-line"><span>Past customers who returned</span><strong data-r="back">14</strong></div>
        <div class="report-line"><span>Appointments booked</span><strong data-r="appt">9</strong></div>
        <div class="report-line"><span>Revenue attributed to Jwero</span><strong data-r="rev">38,400</strong></div>
        <div class="report-line"><span>Enquiries answered in under 5 min</span><strong data-r="msg">212</strong></div>
      </div>
    </div>
  </div>`
)}

${L.section(
  `${L.sectionHead('BUILT, NOT PROMISED', 'The numbers below are counted in the product, not written by marketing.', '')}
  ${L.stats([
    { n: '90+', l: 'fields remembered on every customer record' },
    { n: '240+', l: 'business actions AI staff can perform — with approval' },
    { n: '14', l: 'languages the AI voice assistant speaks' },
    { n: '5', l: 'levels of kill switch over all AI activity' },
  ])}`
, { tone: 'ink' })}

${L.section(
  `${L.sectionHead('FIND YOUR FIT', 'Which jeweller are you?', '')}
  ${L.cards([
    { title: 'Single-store jeweller', text: 'Your reputation is your moat. Give it a memory that never leaves with a salesperson.', link: { href: '/solutions/single-store.html', label: 'For single stores' } },
    { title: 'Multi-store & chains', text: 'Every branch consistent. Every customer known everywhere. One report for the owner.', link: { href: '/solutions/multi-store-chains.html', label: 'For chains' } },
    { title: 'Manufacturers & wholesalers', text: 'Job-work, gold-loss control and B2B ordering — in the language of the workshop.', link: { href: '/solutions/manufacturers.html', label: 'For manufacturers' } },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE MONEY PRODUCTS', 'Savings schemes and digital gold — run digitally, finally.', 'The two products that lock in tomorrow’s revenue are the two products still run on paper. Jwero runs enrolment, instalments, reminders and maturity — with compliance controls and a full audit trail.')}
  <div class="grid grid-2">
    <div class="card"><h3>Gold savings schemes</h3><p>Digital enrolment and KYC, automated instalment reminders, transparent balances customers can check themselves, and disciplined maturity — no more disputes over a paper register.</p><a class="card-link" href="/products/gold-schemes.html">Explore schemes →</a></div>
    <div class="card"><h3>Digital gold</h3><p>Let customers buy gold in grams from their phone, watch it grow, and convert it into jewellery at your counter. Their savings, your future sale.</p><a class="card-link" href="/products/digital-gold.html">Explore digital gold →</a></div>
  </div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('PLAYS WELL WITH OTHERS', 'Keep what works. Jwero joins your business — it doesn’t hold it hostage.', 'Built-in bridges keep your existing stack running while Jwero takes the growth side.')}
  ${L.cards([
    { title: 'Accounting', text: 'Tally and Zoho Books bridges keep your ledger exactly where your accountant wants it.' },
    { title: 'Ecommerce', text: 'Shopify, WooCommerce and Unicommerce connectors sync stock and orders both ways.' },
    { title: 'Payments & Meta', text: 'Razorpay and Cashfree for collections; the official WhatsApp Business API and Meta channels for selling.' },
  ])}
  <p style="margin-top:18px"><a class="card-link" href="/integrations.html">See all integrations →</a></p>`
)}

${L.section(`${L.sectionHead('QUESTIONS JEWELLERS ASK', 'Straight answers, before the sales call.', '')}${L.faqBlock([
  { q: 'What is Jwero?', a: 'Jwero is the AI growth engine for jewellery business — one system that holds your customer memory, your catalogue and your selling channels (WhatsApp, Instagram, Facebook, web, video), runs gold savings schemes and digital gold, and puts AI staff to work under your approval.' },
  { q: 'Is Jwero a CRM or an ERP?', a: 'Neither word fits. ERPs record transactions; messaging tools send messages. Jwero is the layer that brings customers back. It works alongside your existing accounting software — Tally and Zoho Books bridges are built in.' },
  { q: 'Will AI message my customers without asking?', a: 'No. Every AI-drafted message waits in an approval queue until your team clears it. Daily caps limit volume, and a kill switch can pause any agent — or everything — instantly. Autonomy is earned step by step, and only if you choose it.' },
  { q: 'Do I have to replace my billing or accounting software?', a: 'No. Keep your books where they are. Jwero takes over the revenue side first: customers, channels, schemes, follow-up. Most jewellers change nothing else on day one. <a href="/migration.html">See the Migration Centre</a>.' },
  { q: 'How long does it take to go live?', a: 'Days, not months. We import your customers, connect your existing WhatsApp number, and publish your catalogue — with approvals on from day one.' },
  { q: 'Who owns my data?', a: 'You do. Every business runs in its own isolated database, and you can export everything, any time. <a href="/security.html">Read about security</a>.' },
])}`)}

${L.ctaBand(
  'See your business with a memory.',
  'A two-minute demo on your own WhatsApp — or a 15-minute call with someone who knows the trade.',
  'home'
)}
`,
};

module.exports = [home];
