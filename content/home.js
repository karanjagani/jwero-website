const L = require('../lib');

const home = {
  slug: 'index',
  title: 'Jwero — The AI Operating System for Jewellery Business',
  description:
    'Jwero is the AI operating system for jewellery: one customer record, catalogue, inventory, inbox, WhatsApp, gold schemes and an AI workforce awaiting approval.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'The AI operating system for jewellery business: one customer record, one catalogue, one inventory truth, WhatsApp and Instagram commerce, gold savings schemes, digital gold and a governed AI workforce.',
    url: 'https://jwero.ai',
  },
  faqs: [
    { q: 'What is Jwero?', a: 'Jwero is the AI operating system for jewellery business — one system where your customer record, catalogue, inventory and every selling channel (WhatsApp, Instagram, storefront, video) share one truth, and an AI workforce drafts the work under your approval.' },
    { q: 'Is Jwero a CRM, an ERP, or something else?', a: 'It is the operating system that sits above both. A CRM only remembers; an ERP only records. Jwero is the one place where the customer, the catalogue and the operation all live — so AI can actually act, not just log.' },
    { q: 'Do I have to replace my current billing or accounting software?', a: 'No. Keep your books exactly where your accountant likes them — Jwero bridges to Tally and Zoho Books. Most businesses change nothing on the accounting side on day one.' },
    { q: 'Will AI message my customers without asking?', a: 'No. Every AI-drafted action waits in an approval queue until your team clears it, inside daily caps and quiet hours you set — with a kill switch at five scopes. Autonomy is earned action by action, never assumed.' },
    { q: 'How long does it take to go live?', a: 'Days, not months, for the first stage: we import your customers, connect your existing WhatsApp number, and publish your catalogue — with approvals switched on from day one.' },
    { q: 'Is Jwero built only for large jewellery chains?', a: 'No — the same system runs a single counter and a hundred-branch chain. A single-store jeweller gets the whole operating system from day one; a chain gets the same one, with governance and structure that scale to every branch.' },
    { q: 'Can multiple stores or a franchise network use it?', a: 'Yes. Multi-store and franchise structure — shared brand, per-branch data, central control — is built in, not bolted on.' },
    { q: 'Who owns my data?', a: 'You do. Every business runs in its own isolated database, and you can export everything, any time.' },
    { q: 'What kind of impact can I expect?', a: 'It depends on your business, which is why we won’t quote a percentage nobody can verify. Faster response, structured follow-up, visible dead stock and disciplined schemes are the same levers that let bigger players out-remember their customers at scale. Run the calculators on your own numbers, or ask for a 30-day growth report so you see your own impact.' },
  ],
  body: `
${L.section(
  `<div class="ticker-row"><span class="ticker-rate">24k gold ₹1,43,460 / 10g — as of 20 Jul 2026</span><a href="/tools">calculators for your business →</a></div>`,
  { tone: 'tint', id: 'rate-strip' }
)}

${L.hero({
  eyebrow: 'THE AI OPERATING SYSTEM FOR JEWELLERY BUSINESS',
  h1: 'Run your whole jewellery business on one system — with an AI staff that waits for your yes.',
  sub: 'More repeat customers. Faster replies. Less dead stock. All from one customer record, one catalogue and one inbox — with an AI staff that drafts everything and sends nothing without your approval.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'home' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
  note: 'A real person + our AI reply within minutes — that’s the product. Prefer email? <a href="/contact">hello@jwero.ai</a>.',
  mock: L.mockChat,
})}

${L.trustBar('<strong>240+</strong> governed AI actions. Every one waits for your approval before a customer sees it.', { href: '/platform/ai-workforce', label: 'See how governance works' })}

${L.section(
  `${L.sectionHead('THE IMPACT', 'What actually changes for your business.', 'Not features. Outcomes — the ones that show up in revenue, margin and the hours your team gets back.')}
  ${L.impactGrid([
    {
      lever: 'LEAD RESPONSE',
      before: 'An enquiry at 11pm waits until morning — she has already bought from someone else by then.',
      after: 'Every enquiry gets a priced, knowledgeable reply within minutes, day or night.',
      link: { href: '/products/whatsapp', label: 'See it' },
    },
    {
      lever: 'DEAD STOCK',
      before: 'Capital sits frozen in designs nobody is buying — financed at interest, sold never.',
      after: 'Idle pieces matched to the customers whose taste actually fits, and sold — not marked down.',
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
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead(
    'THE ENEMY',
    'Your software keeps accounts. It doesn’t remember customers.',
    'The average jewellery business runs on five or six disconnected tools — and the customer exists as a whole person in none of them.'
  )}
  <div class="stack-grid">
    <div class="stack-item"><strong>Billing software</strong>Knows what she bought. Not why, or when she’ll buy again.</div>
    <div class="stack-item"><strong>Personal WhatsApp</strong>On a salesperson’s phone. When they leave, her history leaves too.</div>
    <div class="stack-item"><strong>Catalogue PDFs</strong>Shared manually, with no live prices and no follow-through.</div>
    <div class="stack-item"><strong>Scheme register</strong>A savings plan tracked on paper — leakage and disputes built in.</div>
    <div class="stack-item"><strong>Website, if any</strong>A ghost town that doesn’t understand gold-rate pricing.</div>
    <div class="stack-item"><strong>Marketing agency</strong>Festival blasts into the void — no memory, no attribution.</div>
  </div>
  <div class="stack-verdict">Every day on disconnected tools, an occasion passes silently, dead stock ages, a follow-up dies. The business’s most valuable asset — who its customers are — walks out the door with whoever’s holding the phone.</div>`
)}

${L.section(
  `${L.sectionHead('THE SOLUTION', 'One record. Every channel. Your approval.', 'That’s one row in one database, not a metaphor. Every module below reads and writes the same customer card.')}
  <div class="grid grid-2" style="align-items:center; gap:44px;">
    <div>
      <p style="font-size:1.02rem; color:var(--ink); line-height:1.7;">When Meera messages on WhatsApp, the reply drafts from her record: her taste, her scheme balance, today’s gold rate. When she buys, the catalogue share, the invoice and the scheme instalment all write back to the same card. No integration. No sync. One system.</p>
      <a class="btn btn-ghost" style="margin-top:22px" href="/platform">See the full platform →</a>
    </div>
    ${L.mockOneRecord}
  </div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('THE THREE PILLARS', 'What an operating system for jewellery actually does.', 'Tap a pillar — Remember, Sell or Run — to see what lives inside it.')}
  ${L.platformTabs()}`
)}

${L.section(
  `${L.sectionHead('FIND YOUR FIT', 'Which jeweller are you?', 'Every segment gets the same operating system — built to speak its own language.')}
  <div class="router-grid">
    <a class="router-card" href="/solutions/single-store"><div class="r-icon">◆</div><h3>Single store</h3><p>Run the whole shop from one screen, and never lose a customer when staff leave.</p></a>
    <a class="router-card" href="/solutions/multi-store-chains"><div class="r-icon">◇</div><h3>Multi-store &amp; chains</h3><p>Every branch consistent, every customer one record, one owner’s view across it all.</p></a>
    <a class="router-card" href="/solutions/luxury-boutique"><div class="r-icon">✦</div><h3>Luxury &amp; boutique</h3><p>Clienteling worthy of what you sell — memory, not a mailing list.</p></a>
    <a class="router-card" href="/solutions/bridal"><div class="r-icon">♥</div><h3>Bridal &amp; wedding</h3><p>Track the whole family journey — trials, quotes, dates — in one thread.</p></a>
    <a class="router-card" href="/solutions/manufacturers"><div class="r-icon">⚒</div><h3>Manufacturers</h3><p>Gold in, gold out, and loss at every stage — on one ledger.</p></a>
    <a class="router-card" href="/solutions/b2b-jewellery"><div class="r-icon">⇄</div><h3>Wholesale &amp; B2B</h3><p>Every buyer, every memo, every order — in one B2B thread.</p></a>
    <a class="router-card" href="/solutions/d2c-brands"><div class="r-icon">▲</div><h3>D2C &amp; ecommerce-first</h3><p>Keep Shopify. Add the channels and live-rate pricing it can’t do.</p></a>
    <a class="router-card" href="/solutions"><div class="r-icon">…</div><h3>More segments</h3><p>Diamond, gold, silver, lab-grown, franchise networks and more.</p></a>
  </div>`
, { tone: 'tint' })}

${L.governanceStrip()}

${L.section(
  `${L.sectionHead('PROOF, BUILT NOT PROMISED', 'The numbers below are counted in the product, not written by marketing.', 'This is what has to be true for the impact above to actually happen — not marketing copy, plumbing you can inspect.')}
  ${L.proofStrip()}
  <div class="card" style="margin-top:24px; text-align:center;">
    <h3>This website’s chat runs on Jwero.</h3>
    <p>The WhatsApp button above isn’t a form — it’s our own inbox, answered by our own AI staff, with approvals on. Test it before you take our word for anything else.</p>
    <a class="card-link" href="#" data-wa="proof">Test our own inbox →</a>
  </div>`
)}

${L.section(
  `<div class="grid grid-2" style="align-items:center; gap:48px;">
    <div>
      ${L.sectionHead('WHAT CAME BACK THIS WEEK?', 'The growth report: the product’s weekly voice.', 'Every week, the owner gets a plain-language report: past customers who returned, appointments booked, revenue brought back. Not a dashboard you must remember to open — an answer that arrives. This is what impact looks like when it’s measured, not promised.')}
      <a class="btn btn-primary" href="#" data-wa="report">Get a sample report on WhatsApp</a>
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
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('KEEP WHAT WORKS', 'Jwero joins your business. It doesn’t hold it hostage.', '')}
  ${L.cards([
    { title: 'Accounting', text: 'Tally and Zoho Books bridges keep your ledger exactly where your accountant wants it.' },
    { title: 'Ecommerce', text: 'Shopify, WooCommerce and Unicommerce connectors sync stock and orders both ways.' },
    { title: 'Payments & Meta', text: 'Razorpay and Cashfree for collections; the official WhatsApp Business API and Meta channels for selling.' },
  ])}
  <p style="margin-top:18px"><a class="card-link" href="/platform/integrations">See all integrations →</a></p>`
)}

${L.section(`${L.sectionHead('QUESTIONS BUSINESSES ASK', 'Straight answers, before the sales call.', '')}${L.faqBlock([
  { q: 'What is Jwero?', a: 'Jwero is the AI operating system for jewellery business — one system where your customer record, catalogue, inventory and every selling channel share one truth, and an AI workforce drafts the work under your approval.' },
  { q: 'Do I have to replace my billing or accounting software?', a: 'No. Keep your books exactly where your accountant likes them — Jwero bridges to Tally and Zoho Books. <a href="/migration">See the Migration Centre</a>.' },
  { q: 'Will AI message my customers without asking?', a: 'No. Every AI-drafted action waits in an approval queue, inside daily caps and quiet hours, with a kill switch at five scopes. <a href="/platform/ai-workforce">See how governance works</a>.' },
  { q: 'How long does it take to go live?', a: 'Days, not months, for the first stage: customers imported, your WhatsApp number connected, catalogue published — approvals on from day one.' },
  { q: 'Is this only for large chains?', a: 'No — a single counter and a hundred-branch chain run the same operating system. <a href="/solutions">Find your segment</a>.' },
  { q: 'Does it support Hindi, Gujarati or Tamil?', a: 'The AI voice assistant speaks 14 languages today. The product interface itself is English — vernacular UI is on the public roadmap, and we say so plainly rather than pretend otherwise.' },
  { q: 'Who owns my data?', a: 'You do. Every business runs in its own isolated database, and you can export everything, any time. <a href="/trust/security">Read about security</a>.' },
  { q: 'Can I integrate this with my existing ERP or website?', a: 'Yes — Tally, Zoho Books, Shopify, WooCommerce, Unicommerce and Meta connectors are built in. <a href="/platform/integrations">See integrations</a>.' },
  { q: 'What kind of impact can I expect?', a: 'It depends on your business, which is why we won’t quote a percentage nobody can verify. What we can show you: faster response, structured follow-up, visible dead stock and disciplined schemes are the same levers that let bigger players out-remember their customers at scale. Run the calculators on your own numbers, or ask for a 30-day growth report so you see your own impact — not someone else’s case study.' },
])}
<p class="cta-note" style="margin-top:18px">More questions? <a href="#" data-wa="faq">Ask on WhatsApp</a>.</p>`)}

${L.section(
  `<div class="close-plan">
    <h2>The business that never forgets a customer.</h2>
    <ol class="plan-steps">
      <li><strong>1.</strong> Chat with us on WhatsApp</li>
      <li><strong>2.</strong> See it running on your own data</li>
      <li><strong>3.</strong> Go live before the season</li>
    </ol>
    <p class="close-plan-note">The sooner you start, the sooner it shows up in your own growth report.</p>
    <div class="cta-row center">
      <a class="btn btn-primary" href="#" data-wa="close">Chat with us on WhatsApp</a>
      <a class="btn btn-ghost-light" href="/book-demo">Book a demo</a>
      <a class="btn-text-light" href="#" data-wa="pilot">or start a pilot with your own data</a>
    </div>
  </div>`
, { tone: 'ink' })}
`,
};

module.exports = [home];
