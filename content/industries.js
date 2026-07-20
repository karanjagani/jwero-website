const L = require('../lib');

const retail = {
  slug: 'industries/retail',
  title: 'Jewellery Retail Software — Single Store to Chain | Jwero',
  description: 'How the Jwero operating system fits jewellery retail: single stores, multi-store chains, luxury and boutique, bridal, and every material specialism — one system, routed to your segment.',
  breadcrumbs: [['Home', '/'], ['Solutions', '/solutions'], ['Retail']],
  faqs: [
    { q: 'Is Jwero built for small retailers or large chains?', a: 'Both, on the same system. A single-store jeweller gets the whole operating system from day one; a chain gets the same one, with governance and branch structure that scale.' },
    { q: 'Does it matter if I sell mostly gold, mostly diamond, or a mix?', a: 'No — the catalogue, pricing engine and CRM handle purity, certification and material-specific fields for all of them. Your segment changes the emphasis, not the underlying system.' },
  ],
  body: `
${L.hero({
  eyebrow: 'INDUSTRY · RETAIL',
  h1: 'Jewellery retail, however you sell it.',
  sub: 'From a single counter to a hundred-branch chain, from bridal specialists to lab-grown D2C brands — retail jewellery businesses run on the same three pillars: remember every customer, sell on every channel, run the whole operation on one truth.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'industries-retail' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('THE SHIFT', 'Why retail jewellery needs an operating system now.', '')}
  ${L.steps([
    { title: 'Discovery moved to the phone', text: 'Customers see jewellery on Instagram and WhatsApp before they see a counter — every enquiry, every occasion, every gram of trust now lives across ten apps.' },
    { title: 'Systems, not size, decide the winner', text: 'Larger players don’t out-sell smaller ones on relationships — they out-remember them, at scale, with software.' },
    { title: 'AI made memory affordable', text: 'What used to need a CRM team and a call centre now runs on one operating system, governed and approval-first.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('FIND YOUR SEGMENT', '', '')}
  <div class="router-grid">
    <a class="router-card" id="single" href="/solutions/single-store"><div class="r-icon">◆</div><h3>Single store</h3><p>Run the whole shop from one screen — never lose a customer when staff leave.</p></a>
    <a class="router-card" id="chains" href="/solutions/multi-store-chains"><div class="r-icon">◇</div><h3>Multi-store & chains</h3><p>Every branch consistent, every customer one record.</p></a>
    <a class="router-card" id="luxury" href="/solutions/luxury-boutique"><div class="r-icon">✦</div><h3>Luxury & boutique</h3><p>Clienteling worthy of what you sell — memory, not a mailing list.</p></a>
    <a class="router-card" id="bridal" href="/solutions/bridal"><div class="r-icon">♥</div><h3>Bridal & wedding</h3><p>Track the whole family journey — trials, quotes, dates — in one thread.</p></a>
    <a class="router-card" href="/solutions/diamond-retail"><div class="r-icon">◈</div><h3>Diamond retail</h3><p>Certificate-aware catalogue and instant answers on solitaire queries.</p></a>
    <a class="router-card" href="/solutions/gold-retail"><div class="r-icon">●</div><h3>Gold retail</h3><p>Live-rate pricing, scheme enrolment and exchange in one flow.</p></a>
    <a class="router-card" href="/solutions/silver-retail"><div class="r-icon">○</div><h3>Silver retail</h3><p>High volume, low margin — automated.</p></a>
    <a class="router-card" href="/solutions/lab-grown-diamond"><div class="r-icon">◉</div><h3>Lab-grown diamond</h3><p>Educate, convert and retain the fastest-growing segment in jewellery.</p></a>
    <a class="router-card" href="/solutions/gemstone-retail"><div class="r-icon">◆</div><h3>Gemstone retail</h3><p>Every stone has a story. Keep both.</p></a>
    <a class="router-card" id="d2c" href="/solutions/d2c-brands"><div class="r-icon">▲</div><h3>D2C & ecommerce-first</h3><p>Keep Shopify. Add the channels and live-rate pricing it can’t do.</p></a>
    <a class="router-card" id="wholesale" href="/solutions/b2b-jewellery"><div class="r-icon">⇄</div><h3>Wholesale</h3><p>Every buyer, every memo, every order — in one B2B thread.</p></a>
  </div>
  <p style="margin-top:16px; font-size:.85rem; color:var(--ink-2);">Don’t see your exact material or format above? <a href="/solutions">See all 22 solutions →</a> or <a href="#" data-wa="industries-retail">ask us on WhatsApp</a>.</p>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('THE SAME OPERATING SYSTEM, FILTERED', 'What matters for retail.', '')}
  ${L.pillarConstellation()}`
)}

${L.section(`${L.sectionHead('RESOURCES', '', '')}${L.cards([
  { title: 'Dead Stock Calculator', text: 'What idle inventory is really costing your business, in 60 seconds.', link: { href: '/tools/dead-stock-calculator', label: 'Run the calculator' } },
  { title: 'Gold Scheme Calculator', text: 'What your enrolment rate is worth in locked-in future revenue.', link: { href: '/tools/gold-scheme-calculator', label: 'Run the calculator' } },
  { title: 'Migration Centre', text: 'Switch without a rip-out — keep your books, change your growth.', link: { href: '/migration', label: 'See the plan' } },
])}`)}

${L.section(`${L.sectionHead('QUESTIONS RETAIL BUSINESSES ASK', '', '')}${L.faqBlock([
  { q: 'Is Jwero built for small retailers or large chains?', a: 'Both, on the same system. A single-store business gets the whole operating system from day one; a chain gets the same one, with governance and branch structure that scale.' },
  { q: 'Does it matter if I sell mostly gold, mostly diamond, or a mix?', a: 'No — the catalogue, pricing engine and CRM handle purity, certification and material-specific fields for all of them.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.ctaBand('Find where you fit.', 'Tell us your segment and size — we’ll route you to the exact page and the exact plan.', 'industries-retail')}
`,
};

module.exports = [retail];
