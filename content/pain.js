const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Solutions', '/solutions'], ['Pains', '/solutions/pain'], [label]];

const painIndex = {
  slug: 'solutions/pain',
  title: "What's Eating Your Jewellery Business? — Every Pain, Answered | Jwero",
  description: 'Lead leakage, dead stock, follow-up and scheme leakage — every pain a jewellery business feels, with the honest fix and a calculator where one exists.',
  breadcrumbs: [['Home', '/'], ['Solutions', '/solutions'], ['Pains']],
  body: `
${L.hero({
  eyebrow: 'PAIN INDEX',
  h1: "What's eating your business?",
  sub: 'Every pain below is real, common, and answered honestly — with a calculator where the math helps, and a straight statement of what Jwero does and doesn’t fix yet.',
  primary: { href: '#', label: 'Chat or call with us', wa: 'pain-index' },
  secondary: { href: '/tools', label: 'See all calculators' },
})}

${L.section(
  `<div class="router-grid">
    <a class="router-card" href="/solutions/pain/dead-stock"><h3>Dead stock</h3><p>Lakhs frozen in designs nobody wants.</p></a>
    <a class="router-card" href="/solutions/pain/lead-leakage"><h3>Lead leakage</h3><p>Enquiries dying in salesmen's chats.</p></a>
    <a class="router-card" href="/products/journeys"><h3>No follow-up system</h3><p>Warm prospects go cold; repeat purchase missed.</p></a>
    <a class="router-card" href="/products/crm"><h3>Customer data on staff phones</h3><p>Staff leaves → customers leave with them.</p></a>
    <a class="router-card" href="/products/gold-schemes"><h3>Scheme leakage</h3><p>Instalments missed, maturity disputes.</p></a>
    <a class="router-card" href="/products/campaigns"><h3>Festival marketing, zero attribution</h3><p>Spend with no idea what returned.</p></a>
    <a class="router-card" href="/solutions/manufacturers"><h3>Manufacturing gold loss</h3><p>Direct gold loss, unmeasured.</p></a>
    <a class="router-card" href="/trust/security"><h3>Data security fear</h3><p>"Family business data leaving us."</p></a>
  </div>
  <p style="margin-top:18px; font-size:.85rem; color:var(--ink-2);">Not seeing your pain listed? <a href="#" data-wa="pain-index">Tell us now</a> — it becomes the next page we write.</p>`
)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="pain-index">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Get your own number.', 'Two calculators turn your pain into a monthly cost you can act on.', 'pain-index')}
`,
};

const deadStock = {
  slug: 'solutions/pain/dead-stock',
  title: 'Dead Stock — The Silent Tax on Every Jewellery Business | Jwero',
  description: 'Idle inventory eats financing, insurance and opportunity every month. See it, price it, and move it — with ageing analysis and memory-driven selling.',
  breadcrumbs: BC('Dead stock'),
  faqs: [
    { q: 'How much does dead stock actually cost?', a: 'A piece that sits for a year costs roughly its financing rate plus insurance and handling, typically 12–18% of its value annually — plus the sales the locked capital never funded. The calculator on this page computes your number in 60 seconds.' },
    { q: 'How does Jwero help move dead stock?', a: 'First, visibility: ageing bands and slow-mover views expose what is sitting. Then, memory: match idle designs to customers whose taste fits, and put them in front of the right people on WhatsApp — instead of melting margin with blanket discounts.' },
    { q: 'Does Jwero predict what will become dead stock?', a: 'Not yet — today’s inventory intelligence is ageing- and valuation-based visibility, not predictive forecasting. Predictive ML is on the public roadmap, and we won’t claim it before it ships.' },
    { q: 'We’ve tried clearance sales before with limited results. What’s actually different here?', a: 'Matched selling finds the specific customers whose recorded taste and budget already fit the piece — a different mechanism from blanket discounts to whoever’s browsing, rather than simply a bigger sale.' },
  ],
  body: `
${L.hero({
  eyebrow: 'THE PAIN · DEAD STOCK',
  h1: 'Your showcase is full. Some of it is asleep.',
  sub: 'Every jewellery business has pieces that stopped moving — bought with conviction, financed at interest, polished weekly, sold never. Dead stock is the silent tax: you pay it monthly and no invoice ever arrives.',
  primary: { href: '/tools/dead-stock-calculator', label: 'Calculate your dead-stock tax' },
  secondary: { href: '/products/inventory', label: 'How inventory visibility works' },
})}

${L.section(
  `${L.sectionHead('THE COMPOUNDING MATH', 'Why sitting stock hurts twice.', '')}
  ${L.cards([
    { title: 'The carrying cost', text: 'Financing, insurance, handling: idle pieces typically bleed 12–18% of their value every year, silently.' },
    { title: 'The opportunity cost', text: 'Capital frozen in sleeping designs is capital not buying the fast movers your customers are asking for.' },
    { title: 'The decision fog', text: 'Without ageing data, every clearance decision is a guess — usually made late, usually too deep.' },
  ])}
  <div class="stack-verdict"><strong>Run your number:</strong> the <a href="/tools/dead-stock-calculator">Dead Stock Calculator</a> takes your inventory value, dead percentage and financing rate, and shows the monthly bleed. Results go to your WhatsApp — forward it to whoever approves the clearance.</div>`
)}

${L.section(
  `${L.sectionHead('THE JWERO PLAYBOOK', 'See it. Price it. Move it — memory over markdowns.', '')}
  ${L.steps([
    { title: 'Expose', text: 'Ageing bands and slow-mover views make the sleeping stock undeniable — by piece, category and branch.' },
    { title: 'Match', text: 'Customer memory finds the people whose taste and budget fit each idle design. A 200-gram temple set has a buyer; she just hasn’t been asked.' },
    { title: 'Move', text: 'Targeted WhatsApp catalogues to matched customers — personal invitations rather than desperate discounts. Margin stays home.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('QUESTIONS ABOUT DEAD STOCK', 'Cost, prediction and what moves it.', '')}${L.faqBlock([
  { q: 'How much does dead stock actually cost?', a: 'Roughly 12–18% of value annually in financing, insurance and handling, plus the sales the locked capital never funded. Run the calculator for your number.' },
  { q: 'How does Jwero help move it, differently from a clearance sale?', a: 'Matched selling finds the specific customers whose recorded taste and budget already fit the piece — a different mechanism from a blanket discount, rather than simply a bigger one.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="deadstock">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('Wake up the sleeping capital.', 'Calculate your dead-stock cost, then see how memory-driven selling moves what discounting cannot.', 'deadstock')}
`,
};

const leadLeakage = {
  slug: 'solutions/pain/lead-leakage',
  title: 'Lead Leakage — Where Jewellery Enquiries Go to Die | Jwero',
  description: 'Enquiries arrive on WhatsApp, Instagram and calls — then vanish into personal phones and forgotten follow-ups. Jwero catches every one and follows up forever.',
  breadcrumbs: BC('Lead leakage'),
  faqs: [
    { q: 'How many enquiries does a typical business lose?', a: 'Most businesses cannot answer that question — which is the problem. Enquiries scattered across personal phones, DMs and missed calls have no owner, no record and no follow-up. The ones answered slowly or never are your quietest revenue leak.' },
    { q: 'How does Jwero stop the leak?', a: 'Every channel lands in one inbox attached to a customer record. The AI workforce drafts replies in minutes and follows up on schedule until there is an outcome. Nothing depends on someone remembering.' },
    { q: 'We already have a WhatsApp tool for this. Isn’t the leak already plugged?', a: 'A messaging tool answers faster, but it still doesn’t know her purchase history or follow up on a schedule after she goes quiet — that’s the harder half of the leak, and it’s where most enquiries die.' },
  ],
  body: `
${L.hero({
  eyebrow: 'THE PAIN · LEAD LEAKAGE',
  h1: 'You paid for every enquiry. Then most of them vanished.',
  sub: 'The reel worked. The ad worked. She messaged — along with forty others that week. Between personal phones, unanswered DMs and follow-ups nobody owned, most of that hard-won interest simply evaporated. This is the cheapest revenue you are losing.',
  primary: { href: '#', label: 'See the fix', wa: 'leadleak' },
  secondary: { href: '/products/whatsapp', label: 'WhatsApp Commerce' },
})}

${L.section(
  `${L.sectionHead('WHERE THE LEAK HIDES', 'Three places enquiries quietly die.', '')}
  ${L.painRows([
    { quote: 'Enquiries come to whoever’s number is on the visiting card.', title: 'One inbox, owned by the business', text: 'WhatsApp, Instagram, Facebook and web chat land in one place, attached to customer records, visible to the team, assignable and accountable.' },
    { quote: 'We reply when we get time. Sometimes that is tomorrow.', title: 'Minutes, not mornings', text: 'The AI workforce drafts knowledgeable replies with live prices in minutes, around the clock. Speed is the first conversion lever in jewellery enquiries.' },
    { quote: 'If she does not reply, we move on. Nobody follows up twice.', title: 'Follow-up that never forgets', text: 'Every open conversation is chased on schedule, politely, with context — until there is an outcome. The follow-up IS the sale.' },
  ])}`
)}

${L.section(`${L.sectionHead('QUESTIONS ABOUT LEAD LEAKAGE', 'Scale of the loss, and how it stops.', '')}${L.faqBlock([
  { q: 'How many enquiries does a typical business actually lose?', a: 'Most businesses can’t answer that — which is the problem. Enquiries with no owner and no record are the quietest revenue leak there is.' },
  { q: 'We already have a WhatsApp tool. Isn’t this already solved?', a: 'A messaging tool answers faster but doesn’t know her history or follow up on schedule after she goes quiet — that’s where most enquiries die.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="leadleak">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('Plug the leak this week.', 'Connect your number, and every enquiry from tomorrow onward gets caught, answered and followed. See it live.', 'leadleak')}
`,
};

module.exports = [painIndex, deadStock, leadLeakage];
