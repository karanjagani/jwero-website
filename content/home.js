const L = require('../lib');

const home = {
  slug: 'index',
  title: 'Jwero — The Autonomous Jewellery OS, run by AI',
  description:
    'Fifty systems become one. Jwero is the autonomous jewellery OS: CRM, ERP, inventory, POS, billing, WhatsApp, gold schemes and ecommerce on one record, run by AI agents that act on their own or ask you first.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'The Autonomous Jewellery OS, run by AI: one customer record, one catalogue, one inventory truth, WhatsApp and Instagram commerce, gold savings schemes, digital gold and a governed AI workforce.',
    url: 'https://jwero.ai',
  },
  faqs: [
    { q: 'What is Jwero?', a: 'Jwero is the Autonomous Jewellery OS, run by AI — one system where your customer record, catalogue, inventory and every selling channel (WhatsApp, Instagram, storefront, video) share one truth, and an AI workforce drafts the work under your approval.' },
    { q: 'Do I have to replace my current billing or accounting software?', a: 'No. Keep your books exactly where your accountant likes them — Jwero bridges to Tally and Zoho Books. Most businesses change nothing on the accounting side on day one.' },
    { q: 'Will AI message my customers without asking?', a: 'No. Every AI-drafted action waits in an approval queue until your team clears it, inside daily caps and quiet hours you set — with a kill switch at five scopes. Autonomy is earned action by action, never assumed.' },
    { q: 'How long does it take to go live?', a: 'Days, not months, for the first stage: we import your customers, connect your existing WhatsApp number, and publish your catalogue — with approvals switched on from day one.' },
    { q: 'Who owns my data?', a: 'You do. Every business runs in its own isolated database, and you can export everything, any time.' },
  ],
  body: `
${L.hero({
  panel: true,
  eyebrow: 'THE AUTONOMOUS JEWELLERY OS, RUN BY AI',
  h1: 'Fifty systems become one. Run by AI agents.',
  sub: 'Your whole jewellery business — customers, catalogue, WhatsApp, billing, gold schemes — on one record, worked around the clock by AI that runs on its own or asks you first. You choose which, agent by agent.',
  extra: L.icpPick(),
  primary: { href: '#', label: 'Chat or call with us', wa: 'home' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
  note: 'The button above opens our own Jwero inbox — test the product before you talk to anyone. A real person + our AI reply within minutes. Prefer email? <a href="/contact">care@jwero.ai</a>.',
  mock: L.mockChat,
})}

${L.trustBar('<strong>240+</strong> AI actions your team switches on one at a time — or shuts off in a single tap.', { href: '/platform/ai-workforce', label: 'See how governance works' })}

${L.section(
  `${L.sectionHead(
    'COUNT YOURS',
    'How many of these are you running today?',
    'Every one is a login, a bill, a vendor and a place your customer exists as a fragment. She is a whole person in none of them.'
  )}
  ${L.systemSplit([
    'Billing &amp; Invoicing', 'Accounting &amp; Tally', 'Inventory &amp; Stock', 'POS Counter',
    'Barcode &amp; Tagging', 'CRM', 'Customer Database', 'WhatsApp Marketing',
    'Instagram DMs', 'Facebook Page', 'Google Ads', 'Ecommerce Website',
    'Marketplace Listings', 'Gold Scheme Register', 'Loyalty Cards', 'Repairs Register',
    'Karigar Job Work', 'Vendor Ledger', 'HR &amp; Payroll', 'Reporting &amp; MIS',
  ], '… and thirty more inside Jwero')}
  <div class="stack-verdict"><strong>Now grow without adding a single new system.</strong> New branches, new channels, new capabilities — with no new logins, no new bills, no new vendors, no new chaos. Today, every day on disconnected tools, an occasion passes silently, dead stock ages, a follow-up dies — and the business’s most valuable asset, who its customers are, walks out the door with whoever’s holding the phone.</div>`
, { tone: 'tint' })}

${L.section(
  `${L.statement('One record. Every channel. Your approval.', 'This bangle is one customer’s record — unbroken. Play a week through it, break it into the tools it lives in today, or move the rate, and watch what one record changes.')}
  ${L.gemStage2()}
  <div class="gem-copy">
    <p>When Meera messages on WhatsApp, the reply drafts from her record: her taste, her scheme balance, today’s gold rate. When she buys, the catalogue share, the invoice and the scheme instalment all write back to the same card. No integration. No sync. One system.</p>
    <a class="btn btn-ghost" href="/platform">See the full platform →</a>
  </div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('', 'What changes for your business.', 'Not features. Outcomes — the ones that show up in revenue, margin and the hours your team gets back.')}
  ${L.compareRows([
    {
      lever: 'LEAD RESPONSE',
      before: 'An enquiry at 11pm waits until morning — she has already bought from someone else by then.',
      after: 'Every enquiry gets a priced, knowledgeable reply within minutes, day or night.',
      link: { href: '/products/whatsapp', label: 'See it' },
    },
    {
      lever: 'DEAD STOCK',
      before: 'Capital sits frozen in designs nobody is buying — financed at interest, sold never.',
      after: 'Idle pieces matched to the customers whose taste fits, and sold — not marked down.',
      link: { href: '/tools/dead-stock-calculator', label: 'Run your number' },
    },
    {
      lever: 'CUSTOMER MEMORY',
      before: 'A salesperson leaves, and twenty years of customer relationships leave with them.',
      after: 'Every customer, occasion and preference lives on the business’s own record — permanently.',
      link: { href: '/platform/customer-memory', label: 'See the record' },
    },
    {
      lever: 'GOLD SCHEMES',
      before: 'Instalments missed, maturity disputes, a paper register nobody fully trusts.',
      after: 'Enrolment, reminders and maturity run digitally — this year’s book is next year’s revenue.',
      link: { href: '/products/gold-schemes', label: 'See schemes' },
    },
  ])}`
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

${L.section(L.customerLogos())}

${L.section(
  `${L.sectionHead('PROOF', 'Counted in the product, not written by marketing.', 'Every number below is measured by the system itself — plumbing you can inspect, not copy you have to believe.')}
  ${L.proofStrip()}
  <p class="proof-caption">Every week the owner gets a plain-language growth report on their own customers — who came back, what was booked, what it earned. <a href="#" data-wa="report">Get a sample report</a></p>`
)}

${L.section(
  `${L.sectionHead('SECURITY & COMPLIANCE', 'Your customer list is your business. It is guarded like one.', 'What protects your data, which rules Jwero already meets, and which certificates it does not hold yet — said plainly.')}
  ${L.securityBlock()}`
)}

${L.section(
  `<div class="home-price">
    <div>
      <p class="eyebrow">PRICE</p>
      <h2>Every module. ₹9,999 a month. 14 days free.</h2>
      <p>One plan, billed annually — or ₹18,000 month to month. No per-module price, no per-seat price, no card for the trial. WhatsApp messages, AI and calls run on a prepaid wallet at published rates.</p>
    </div>
    <div class="cta-row">
      <a class="btn btn-primary" href="${L.TRIAL_URL}home-price" rel="noopener" data-trial>Start my 14-day free trial</a>
      <a class="btn btn-ghost" href="/pricing">See the full pricing</a>
    </div>
  </div>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('QUESTIONS BUSINESSES ASK', 'Straight answers, before the sales call.', '')}${L.faqBlock([
  { q: 'What is Jwero?', a: 'Jwero is the Autonomous Jewellery OS, run by AI — one system where your customer record, catalogue, inventory and every selling channel share one truth, and an AI workforce drafts the work under your approval.' },
  { q: 'Do I have to replace my billing or accounting software?', a: 'No. Keep your books exactly where your accountant likes them — Jwero bridges to Tally and Zoho Books. <a href="/migration">See the Migration Centre</a>.' },
  { q: 'Will AI message my customers without asking?', a: 'No. Every AI-drafted action waits in an approval queue, inside daily caps and quiet hours, with a kill switch at five scopes. <a href="/platform/ai-workforce">See how governance works</a>.' },
  { q: 'How long does it take to go live?', a: 'Days, not months, for the first stage: customers imported, your WhatsApp number connected, catalogue published — approvals on from day one.' },
  { q: 'Who owns my data?', a: 'You do. Every business runs in its own isolated database, and you can export everything, any time. <a href="/trust/security">Read about security</a>.' },
])}
<p class="cta-note" style="margin-top:18px">More questions? <a href="/faq">Every question, answered</a> · <a href="#" data-wa="faq">ask us now</a>.</p>`, { tone: 'tint' })}

${L.section(
  `<div class="close-plan">
    <h2>The business that never forgets a customer.</h2>
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
