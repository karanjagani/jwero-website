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
    { q: 'How long does it take to go live?', a: 'Days, not months, for the first stage: we import your customers, connect your existing WhatsApp number, and publish your catalogue — with approvals switched on from day one.' },
    { q: 'Who owns my data?', a: 'You do. Every business runs in its own isolated database, and you can export everything, any time.' },
  ],
  body: `
${L.homeHero({
  kicker: 'The Autonomous Jewellery OS, run by AI',
  h1: 'Jewellery software that runs the whole business: customers, counter, stock, team and books.',
  sub: 'One system from the first enquiry to the closed books: CRM, showroom, POS and billing, inventory, purchase, manufacturing, accounts, HR and reports on one record. AI drafts the work and flags what is slipping, and nothing goes out without your yes.',
})}

${L.section(L.customerLogos())}

${require('./jbaas').section()}

${require('./positioning').quotes(3)}

${L.section(
  `<span id="count-yours"></span>${L.sectionHead('COUNT YOUR TOOLS', `${L.STACK_N} separate tools become one.`, 'Tap the ones you run today and watch what they cost you.')}
  ${L.stackMerge()}<p class="jb-more">Tools are half of it. <a href="/count-your-team">Count your team too: the people it takes, and what Jwero would cost →</a></p>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('FROM FIFTY LOGINS TO ONE RECORD', 'What changes across the whole jewellery business.', 'Not only how you sell. The counter, the stock room, the vendor, the workshop, the books and the team run on the same record, so each one knows what the others did.')}
  ${L.compareRows(L.DEPARTMENTS)}`
)}

${L.section(
  `<span id="one-record"></span><div class="gem-head"><h2>One record. Every department. Your approval.</h2><p>Play a week, run a full day, or break it into the tools it lives in today. <a href="/platform">See the full platform →</a></p></div>
  ${L.gemStage2()}`
, { tone: 'tint' })}

${L.section(
  `<div class="home-price">
    <div>
      <p class="eyebrow">PRICE</p>
      <h2>Every module. ₹18,000 a month. First month ₹3,600.</h2>
      <p>One plan, billed monthly. No per-module price and no per-seat price. Your first month is ₹3,600 instead of ₹18,000. WhatsApp messages, AI and calls run on a prepaid wallet at published rates.</p>
    </div>
    <div class="cta-row">
      <a class="btn btn-primary" href="${L.TRIAL_URL}home-price" rel="noopener" data-trial>Start for ₹3,600</a>
      <a class="btn btn-ghost" href="/pricing">See the full pricing</a>
    </div>
  </div>`
)}

${L.governanceStrip()}

${L.section(
  `${L.sectionHead('RUNNING AN ERP TODAY?', 'Three sentences we hear. Three pages that answer them.', '')}
  ${L.cards([
    { icon: 'receipt', title: '“We already have an ERP.”', text: 'Your ERP was built around the invoice. Your customers moved to WhatsApp. Why the shift to an operating system is happening now.', link: { href: '/erp-to-os', label: 'From ERP to OS' } },
    { icon: 'shield', title: '“Switching is risky.”', text: 'Six risks you imagine, each with the thing that removes it — and six costs of staying that have no answer.', link: { href: '/erp-to-os/switching', label: 'Is switching risky?' } },
    { icon: 'grid', title: '“We can make do.”', text: 'Tap the tools you run on, see the gaps between them, and put a number on a year of making do.', link: { href: '/erp-to-os/make-do', label: 'Can I make do?' } },
  ])}`
, { tone: 'tint' })}

${L.section(
  `<div class="gem-head"><h2>Proof you can check.</h2><p>Who uses it, what the product counts, what is published, and how to try it yourself.</p></div>
  ${L.proofGrid()}`
)}

${L.section(
  `<div class="gem-head"><h2>Security and compliance, with the real status.</h2><p>Six in place, four not yet. Hover a seal, or open any document.</p></div>
  ${L.trustStrip()}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('QUESTIONS JEWELLERS ASK', 'Jewellery software questions, answered straight.', '')}${L.faqBlock([
  { q: 'What is Jwero?', a: 'Jwero is the Autonomous Jewellery OS, run by AI — one system where customers, catalogue, stock, counter billing, purchase, workshop, accounts and team share one record with every selling channel, and an AI workforce drafts the work under your approval.' },
  { q: 'Do I have to replace my billing or accounting software?', a: 'No. Keep your books exactly where your accountant likes them — Jwero bridges to Tally and Zoho Books. <a href="/migration">See the Migration Centre</a>.' },
  { q: 'Will AI message my customers without asking?', a: 'No. Every AI-drafted action waits in an approval queue, inside daily caps and quiet hours, with a kill switch at five scopes. <a href="/platform/ai-workforce">See how governance works</a>.' },
  { q: 'How long does it take to go live?', a: 'Days, not months, for the first stage: customers imported, your WhatsApp number connected, catalogue published — approvals on from day one.' },
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
