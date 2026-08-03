const L = require('../lib');

const home = {
  slug: 'index',
  title: 'Jwero — The Autonomous Jewellery OS | AI Operating System for Jewellery Business',
  description:
    'Fifty systems become one. Jwero is the autonomous jewellery OS: CRM, ERP, inventory, POS, billing, WhatsApp, gold schemes and ecommerce on one record, run by AI agents that act on their own or ask you first.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'The AI operating system for jewellery business: one customer record, one catalogue, one inventory truth, WhatsApp and Instagram commerce, gold savings schemes, digital gold and a governed AI workforce.',
    url: 'https://jwero.ai',
  },
  faqs: [
    { q: 'What is Jwero?', a: 'Jwero is the AI operating system for jewellery business — one system where your customer record, catalogue, inventory and every selling channel (WhatsApp, Instagram, storefront, video) share one truth, and an AI workforce drafts the work under your approval.' },
    { q: 'Is Jwero a CRM, an ERP, or something else?', a: 'Both — but as one system, not two. It remembers your customers like a CRM and runs your operations like an ERP, from the same record, so a sale, a scheme payment and a repair all update the one place your team already looks at. Your statutory books stay in Tally or Zoho Books.' },
    { q: 'Do I have to replace my current billing or accounting software?', a: 'No. Keep your books exactly where your accountant likes them — Jwero bridges to Tally and Zoho Books. Most businesses change nothing on the accounting side on day one.' },
    { q: 'Will AI message my customers without asking?', a: 'No. Every AI-drafted action waits in an approval queue until your team clears it, inside daily caps and quiet hours you set — with a kill switch at five scopes. Autonomy is earned action by action, never assumed.' },
    { q: 'How long does it take to go live?', a: 'Days, not months, for the first stage: we import your customers, connect your existing WhatsApp number, and publish your catalogue — with approvals switched on from day one.' },
    { q: 'Is Jwero built only for large jewellery chains?', a: 'No — the same system runs a single counter and a hundred-branch chain. A single-store jeweller gets the whole operating system from day one; a chain gets the same one, with governance and structure that scale to every branch.' },
    { q: 'Can multiple stores or a franchise network use it?', a: 'Yes. Multi-store and franchise structure (shared brand, per-branch data, central control) is built in, not bolted on.' },
    { q: 'Who owns my data?', a: 'You do. Every business runs in its own isolated database, and you can export everything, any time.' },
    { q: 'What kind of impact can I expect?', a: 'It depends on your business, which is why we won’t quote a percentage nobody can verify. Faster response, structured follow-up, visible dead stock and disciplined schemes are the same levers that let bigger players out-remember their customers at scale. Run the calculators on your own numbers, or ask for a 30-day growth report so you see your own impact.' },
  ],
  body: `
${L.hero({
  eyebrow: 'THE AUTONOMOUS JEWELLERY OS',
  h1: 'Fifty systems become one. Run by AI agents.',
  sub: 'Your whole jewellery business — customers, catalogue, WhatsApp, billing, gold schemes — on one record, worked around the clock by AI that runs on its own or asks you first. You choose which, agent by agent.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'home' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
  note: 'The button above opens our own Jwero inbox — test the product before you talk to anyone. A real person + our AI reply within minutes. Prefer email? <a href="/contact">care@jwero.ai</a>.',
  mock: L.mockChat,
})}

${L.trustBar('<strong>240+</strong> AI actions your team switches on one at a time — or shuts off in a single tap.', { href: '/platform/ai-workforce', label: 'See how governance works' })}

${L.section(L.customerLogos())}

${L.section(
  `${L.sectionHead(
    'COUNT YOURS',
    'How many of these are you running today?',
    'Every one is a login, a bill, a vendor and a place your customer exists as a fragment. She is a whole person in none of them.'
  )}
  <div class="syscount">
    <span>Billing &amp; Invoicing</span><span>Accounting &amp; Tally</span><span>Inventory &amp; Stock</span><span>POS Counter</span>
    <span>Barcode &amp; Tagging</span><span>CRM</span><span>Customer Database</span><span>WhatsApp Marketing</span>
    <span>Instagram DMs</span><span>Facebook Page</span><span>Google Ads</span><span>Ecommerce Website</span>
    <span>Marketplace Listings</span><span>Gold Scheme Register</span><span>Loyalty Cards</span><span>Repairs Register</span>
    <span>Karigar Job Work</span><span>Vendor Ledger</span><span>HR &amp; Payroll</span><span>Reporting &amp; MIS</span>
  </div>
  <p class="syscount-more">… and thirty more inside Jwero</p>
  <p class="syscount-arrow" aria-hidden="true">▼</p>
  <div class="syscount-one">
    <strong>One platform.</strong>
    <span>One login. One truth. One bill.</span>
  </div>
  <div class="stack-verdict"><strong>Now grow without adding a single new system.</strong> New branches, new channels, new capabilities — with no new logins, no new bills, no new vendors, no new chaos. Today, every day on disconnected tools, an occasion passes silently, dead stock ages, a follow-up dies — and the business’s most valuable asset, who its customers are, walks out the door with whoever’s holding the phone.</div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('', 'What changes for your business.', 'Not features. Outcomes — the ones that show up in revenue, margin and the hours your team gets back.')}
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

${L.section(
  `${L.statement('One record. Every channel. Your approval.', 'That’s one row in one database, not a metaphor. Every module below reads and writes the same customer card.')}
  <div class="grid grid-2" style="align-items:center; gap:44px; margin-top:64px;">
    <div>
      <p style="font-size:1.02rem; color:var(--ink); line-height:1.7;">When Meera messages on WhatsApp, the reply drafts from her record: her taste, her scheme balance, today’s gold rate. When she buys, the catalogue share, the invoice and the scheme instalment all write back to the same card. No integration. No sync. One system.</p>
      <a class="btn btn-ghost" style="margin-top:22px" href="/platform">See the full platform →</a>
    </div>
    ${L.mockOneRecord}
  </div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('EVERYONE SAYS AI. ASK THEM THIS.', 'Not software with AI added. AI that runs the software.', 'Most jewellery software bolted a chatbot onto a database. This is the loop that actually runs your counter — and step 04 is the one that matters.')}
  ${L.agentLoop()}
  <p class="proof-caption">Running on every branch, around the clock — inside the limits you set on the next screen down.</p>`
)}

${L.section(
  `${L.sectionHead('THE THREE PILLARS', 'What an operating system for jewellery does.', 'Tap a pillar (Remember, Sell or Run) to see what lives inside it.')}
  ${L.platformTabs()}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('FIND YOUR FIT', 'Which jeweller are you?', 'Every segment gets the same operating system — built to speak its own language.')}
  <div class="router-grid">
    <a class="router-card" href="/solutions/single-store"><div class="r-icon">◆</div><h3>Single store</h3><p>Run the whole shop from one screen, and never lose a customer when staff leave.</p></a>
    <a class="router-card" href="/solutions/multi-store-chains"><div class="r-icon">◇</div><h3>Multi-store &amp; chains</h3><p>Every branch consistent, every customer one record, one owner’s view across it all.</p></a>
    <a class="router-card" href="/solutions/luxury-boutique"><div class="r-icon">✦</div><h3>Luxury &amp; boutique</h3><p>Clienteling worthy of what you sell: real memory, no mailing list.</p></a>
    <a class="router-card" href="/solutions/bridal"><div class="r-icon">♥</div><h3>Bridal &amp; wedding</h3><p>Track the whole family journey — trials, quotes, dates, in one thread.</p></a>
    <a class="router-card" href="/solutions/manufacturers"><div class="r-icon">⚒</div><h3>Manufacturers</h3><p>Gold in, gold out, and loss at every stage — on one ledger.</p></a>
    <a class="router-card" href="/solutions/b2b-jewellery"><div class="r-icon">⇄</div><h3>Wholesale &amp; B2B</h3><p>Every buyer, every memo, every order — in one B2B thread.</p></a>
    <a class="router-card" href="/solutions/d2c-brands"><div class="r-icon">▲</div><h3>D2C &amp; ecommerce-first</h3><p>Keep Shopify. Add the channels and live-rate pricing it can’t do.</p></a>
    <a class="router-card" href="/solutions"><div class="r-icon">…</div><h3>More segments</h3><p>Diamond, gold, silver, lab-grown, franchise networks and more.</p></a>
  </div>`
)}

${L.governanceStrip()}

${L.section(
  `${L.sectionHead('WHERE YOU START', 'Autonomy is earned, one action at a time.', 'Every business starts at Assist. You promote the AI one action type at a time, based on measured accuracy rather than a promise — and you can stop at any rung, permanently.')}
  <div class="ladder">
    <div class="rung">
      <p class="rung-n">01</p>
      <h3>Assist</h3>
      <p>AI drafts, your team sends. Every action waits in the approval queue until a person clears it.</p>
      <div class="rung-meter"><span style="width:16%"></span></div>
      <p class="rung-meta">Day one. Most single stores start here — and some happily stay.</p>
    </div>
    <div class="rung">
      <p class="rung-n">02</p>
      <h3>Approve</h3>
      <p>Routine, low-risk actions run with one-tap approval. Anything sensitive still waits for you.</p>
      <div class="rung-meter"><span style="width:58%"></span></div>
      <p class="rung-meta">You see a log of everything that ran.</p>
    </div>
    <div class="rung">
      <p class="rung-n">03</p>
      <h3>Autopilot</h3>
      <p>Action types with proven accuracy run inside hard daily caps and quiet hours you set.</p>
      <div class="rung-meter"><span style="width:100%"></span></div>
      <p class="rung-meta">They demote themselves automatically if accuracy drifts.</p>
    </div>
  </div>
  <p class="proof-caption">The bar shows how much the AI can do before it needs a tap. You decide when it moves — and the kill switch works at every rung. <a href="/pricing">See what each tier includes →</a></p>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('PROOF', 'Counted in the product, not written by marketing.', 'Every number below is measured by the system itself — plumbing you can inspect, not copy you have to believe.')}
  ${L.proofStrip()}`
)}

${L.section(
  `<div class="grid grid-2" style="align-items:center; gap:48px;">
    <div>
      ${L.sectionHead('WHAT CAME BACK THIS WEEK?', 'An answer that arrives. Not a dashboard you must remember to open.', 'Every week the owner gets a plain-language report: past customers who returned, appointments booked, revenue brought back.')}
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
        <div class="report-line"><span>Revenue attributed to Jwero</span><strong data-r="rev">₹38,400</strong></div>
        <div class="report-line"><span>Enquiries answered in under 5 min</span><strong data-r="msg">212</strong></div>
      </div>
    </div>
  </div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('KEEP WHAT WORKS', 'Jwero joins your business. It doesn’t hold it hostage.', 'Nothing here asks you to rip out the systems your business already runs on. Here is exactly what stays where it is, and what Jwero takes over.')}
  <div class="coexist">
    <div class="coexist-col">
      <p class="coexist-title">Stays yours</p>
      <div class="coexist-chips">
        <span class="coexist-chip">Tally</span>
        <span class="coexist-chip">Zoho Books</span>
        <span class="coexist-chip">Shopify</span>
        <span class="coexist-chip">WooCommerce</span>
        <span class="coexist-chip">Unicommerce</span>
        <span class="coexist-chip">Razorpay</span>
        <span class="coexist-chip">Cashfree</span>
        <span class="coexist-chip">Your WhatsApp number</span>
      </div>
      <p class="coexist-foot">Your ledger stays exactly where your accountant wants it. Razorpay and Cashfree keep collecting.</p>
    </div>
    <div class="coexist-link"><span class="coexist-arrow">⇄</span>Two-way sync</div>
    <div class="coexist-col is-jwero">
      <p class="coexist-title">Jwero runs</p>
      <div class="coexist-chips">
        <span class="coexist-chip">Customer record</span>
        <span class="coexist-chip">Catalogue &amp; live pricing</span>
        <span class="coexist-chip">One inbox</span>
        <span class="coexist-chip">Gold schemes</span>
        <span class="coexist-chip">Follow-up &amp; journeys</span>
        <span class="coexist-chip">Reporting</span>
      </div>
      <p class="coexist-foot">Stock and orders sync both ways. Selling runs on the official WhatsApp Business API and Meta channels.</p>
    </div>
  </div>
  <p style="margin-top:22px"><a class="card-link" href="/platform/integrations">See all integrations →</a></p>`
)}

${L.section(`${L.sectionHead('QUESTIONS BUSINESSES ASK', 'Straight answers, before the sales call.', '')}${L.faqBlock([
  { q: 'What is Jwero?', a: 'Jwero is the AI operating system for jewellery business — one system where your customer record, catalogue, inventory and every selling channel share one truth, and an AI workforce drafts the work under your approval.' },
  { q: 'Do I have to replace my billing or accounting software?', a: 'No. Keep your books exactly where your accountant likes them — Jwero bridges to Tally and Zoho Books. <a href="/migration">See the Migration Centre</a>.' },
  { q: 'Will AI message my customers without asking?', a: 'No. Every AI-drafted action waits in an approval queue, inside daily caps and quiet hours, with a kill switch at five scopes. <a href="/platform/ai-workforce">See how governance works</a>.' },
  { q: 'How long does it take to go live?', a: 'Days, not months, for the first stage: customers imported, your WhatsApp number connected, catalogue published — approvals on from day one.' },
  { q: 'Is this only for large chains?', a: 'No — a single counter and a hundred-branch chain run the same operating system. <a href="/solutions">Find your segment</a>.' },
  { q: 'Does it support Hindi, Gujarati or Tamil?', a: 'The AI voice assistant speaks 14 languages today. Product screens are English, with an early Hindi pilot live on karigar self-service screens (My Work & Khata, Loans, Assets) — broader vernacular UI is on the public roadmap, and we say so plainly rather than pretend otherwise.' },
  { q: 'Who owns my data?', a: 'You do. Every business runs in its own isolated database, and you can export everything, any time. <a href="/trust/security">Read about security</a>.' },
  { q: 'Can I integrate this with my existing ERP or website?', a: 'Yes — Tally, Zoho Books, Shopify, WooCommerce, Unicommerce and Meta connectors are built in. <a href="/platform/integrations">See integrations</a>.' },
  { q: 'What kind of impact can I expect?', a: 'It depends on your business, which is why we won’t quote a percentage nobody can verify. What we can show you: faster response, structured follow-up, visible dead stock and disciplined schemes are the same levers that let bigger players out-remember their customers at scale. Run the calculators on your own numbers, or ask for a 30-day growth report so you see your own impact — not someone else’s case study.' },
])}
<p class="cta-note" style="margin-top:18px">More questions? <a href="#" data-wa="faq">Ask on WhatsApp</a>.</p>`, { tone: 'tint' })}

${L.section(L.safeToTryStrip())}

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
