const L = require('../lib');
const BC = (label) => [['Home', '/'], [label]];

const partnersFaqs = [
  { q: 'Will Jwero replace the ERP/billing software I sell or support?', a: 'No — that’s the point. Jwero explicitly bridges to Tally, Zoho Books and existing billing systems rather than replacing them. You keep the ledger relationship; Jwero adds the customer-and-channel layer your clients don’t have today.' },
  { q: 'How new is this partner program?', a: 'Honestly new — we’re building it with the first handful of partners now, not running a mature channel with hundreds of dealers. If you want in early, terms and support are worked out directly with you, rather than read off a rigid tier sheet.' },
  { q: 'What do partners actually get?', a: 'Referral terms discussed directly per relationship — we won’t publish a number here we might have to walk back. What we can promise: your clients stay yours, we don’t go around you, and you’re looped in on the account.' },
  { q: 'I’m an accountant, not a software dealer — does this fit me?', a: 'Yes — accountants and consultants who already advise jewellery businesses are one of the two groups this program is built for. You see the operational gaps client by client; a referral is often just naming what you’ve already noticed.' },
  { q: 'Is there a formal contract or certification process?', a: 'Not a heavy one at this stage — a conversation, a shared understanding of how referrals are tracked and credited, and we go from there. We’d rather start simple and add structure only once it’s needed.' },
  { q: 'What happens after I refer a business?', a: 'We run the same honest evaluation we’d run with any prospect: pilot first, real data, no pressure — and keep you informed of where it stands. If it doesn’t fit, we’ll say so rather than push a bad deployment that reflects badly on your referral.' },
];

const partners = {
  slug: 'partners',
  title: 'Partners — ERP Dealers, Accountants & Consultants | Jwero',
  description: 'Jwero for jewellery businesses you serve: ERP/billing software dealers, accountants, consultants — a new, honest program, not a mature channel with fine print.',
  breadcrumbs: BC('Partners'),
  schema: { '@context': 'https://schema.org', '@type': 'Article', headline: 'Jwero Partners' },
  faqs: partnersFaqs,
  body: `
${L.hero({
  eyebrow: 'PARTNERS',
  h1: 'Bring Jwero to the jewellers you already serve.',
  sub: 'You already have the relationship — as their billing/ERP dealer, their accountant, or their trusted consultant. Jwero gives them one system for customers, WhatsApp, the counter, stock, purchase, the workshop and schemes, and bridges to the books you already keep for them. The ledger relationship stays yours.',
  primary: { href: '#', label: 'Talk to us', wa: 'partners' },
  secondary: { href: '/migration', label: 'See how coexistence works' },
})}

${L.section(require('./positioning').quoteOne(1))}
${L.section(`<p class="cta-note" style="text-align:center">Already a Jwero customer? Each jeweller you refer saves you 10%. <a href="/pricing">See how referral works</a>.</p>`)}
${L.section(
  `${L.sectionHead('WHO THIS IS FOR', 'Two groups, one shared position.', '')}
  ${L.cards([
    { title: 'ERP & billing software dealers', text: 'You sell and support the ledger — Tally, Marg, a jewellery ERP. Your clients still ask you why customers slip through the cracks. That’s not your product’s job; it’s Jwero’s.' },
    { title: 'Accountants & consultants', text: 'You already see the operational gaps: no customer memory, no WhatsApp discipline, a scheme book on paper. A referral is often just naming what you’ve already noticed.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHY THIS DOESN’T THREATEN YOUR BUSINESS', 'Your two biggest worries, addressed directly.', '')}
  ${L.painRows([
    { quote: 'If I bring in new software, do I lose the client to it?', title: 'The ledger stays yours', text: 'Jwero bridges to Tally and Zoho Books rather than replacing them — the accounting relationship you have with the client doesn’t change.' },
    { quote: 'Will Jwero go around me and sell direct after the intro?', title: 'Looped in, always', text: 'You made the introduction; we keep you informed of where the relationship stands rather than disappearing into a direct sale.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `<div class="gaps-block">
    <p class="gaps-tag">WHAT’S NOT BUILT OUT YET</p>
    <p class="gaps-lead">Said plainly, before you find out the hard way.</p>
    <ul class="gaps-list"><li>No published commission schedule or partner tier structure yet. Terms are worked out directly per relationship while we learn what works — not read off a rigid sheet.</li></ul>
  </div>`
)}

${L.section(
  `${L.sectionHead('HOW IT WORKS', 'No certification exam. A conversation.', '')}
  ${L.steps([
    { title: 'You introduce us', text: 'Tell us about the business and what you’ve already noticed — a scheme book on paper, WhatsApp enquiries slipping, whatever prompted the thought.' },
    { title: 'We run an honest pilot', text: 'The same evaluation we’d run with any prospect — real data, no pressure, no promise we can’t back. If it isn’t a fit, we say so.' },
    { title: 'You stay informed', text: 'We keep you in the loop on where the referral stands, and work out referral terms directly with you as the relationship develops.' },
  ])}`
)}

${L.section(`${L.sectionHead('QUESTIONS PARTNERS ASK', 'Answers before you refer your first client.', '')}${L.faqBlock(partnersFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="partners">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Tell us who you’d bring first.', 'One conversation, one business in mind — we’ll take it from there honestly.', 'partners')}
`,
};

module.exports = [partners];
