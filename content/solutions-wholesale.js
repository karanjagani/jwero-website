const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Solutions', '/solutions'], [label]];

const diamondWholesaleFaqs = [
  { q: 'Can I share different prices with different buyers?', a: 'Yes — buyer-tiered pricing and catalogue visibility are configurable, so each buyer sees their own terms.' },
  { q: 'Can memo and approval status be tracked per stone?', a: 'Order and pipeline tracking hold memo and approval status per item, replacing the register-hunting that comes with paper memos.' },
  { q: 'Our buyer relationships run on trust built over years. Won’t a system feel transactional?', a: 'The system holds the record; your team still holds the relationship. It replaces the register-hunting, not the trust — the buyer still deals with a person, just one who has the memo history in front of them.' },
];

const diamondWholesale = {
  slug: 'solutions/diamond-wholesale',
  title: 'For Diamond Wholesalers | Jwero',
  description: 'Private B2B catalogues on WhatsApp, memo and approval tracking, and buyer-tiered pricing — every buyer, every memo, every order in one thread.',
  breadcrumbs: BC('Diamond wholesale'),
  faqs: diamondWholesaleFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR DIAMOND WHOLESALE',
  h1: 'Your inventory, in every buyer’s pocket.',
  sub: 'Private B2B catalogues on WhatsApp, memo and approval tracking, and buyer-tiered pricing — every buyer, every memo, every order in one thread, not a register.',
  primary: { href: '#', label: 'Talk shop on WhatsApp', wa: 'diamondwholesale' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}
${L.section(
  `${L.painRows([
    { quote: 'Memo chaos across dozens of buyers is a full-time job to track.', title: 'One thread per buyer', text: 'Memo, approval and order status tracked per relationship — not scattered across calls and notebooks.' },
    { quote: 'Price lists in the market go stale the moment the rate moves.', title: 'Live-rate B2B catalogues', text: 'Buyer-tiered catalogues that stay current, shared privately on WhatsApp.' },
    { quote: 'Following up on every buyer, every week, doesn’t scale.', title: 'Follow-up that doesn’t depend on memory', text: 'The AI workforce drafts scheduled follow-ups on stale memos and quiet buyers — approved before they send.' },
  ])}`
)}
${L.section(`${L.sectionHead('QUESTIONS DIAMOND WHOLESALERS ASK', '', '')}${L.faqBlock(diamondWholesaleFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="diamondwholesale">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Bring one buyer relationship.', 'We’ll show a private catalogue, a memo, and the follow-up that keeps it moving.', 'diamondwholesale', { enterprise: true })}
`,
};

const goldWholesaleFaqs = [
  { q: 'Can quotes reflect the live rate automatically?', a: 'Yes — quoting uses the same live-rate pricing engine as retail catalogues, so a rate move is reflected instantly.' },
  { q: 'Can I see what each buyer owes, at a glance?', a: 'Yes — per-buyer ledger clarity replaces reconciling calls and paper against a register.' },
  { q: 'What if a buyer disputes the rate we quoted them?', a: 'Every quote is recorded with the rate and terms at the moment it was made — the dispute becomes a lookup, not a memory contest.' },
];

const goldWholesale = {
  slug: 'solutions/gold-wholesale',
  title: 'For Gold Wholesalers | Jwero',
  description: 'Rate-linked B2B ordering and ledger clarity per buyer — quote at the live rate in seconds and track every order to delivery.',
  breadcrumbs: BC('Gold wholesale'),
  faqs: goldWholesaleFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR GOLD WHOLESALE',
  h1: 'Wholesale gold, retail-grade systems.',
  sub: 'Rate-linked B2B ordering and ledger clarity per buyer — quote at the live rate in seconds and track every order to delivery, without disputes over what was agreed.',
  primary: { href: '#', label: 'Talk shop on WhatsApp', wa: 'goldwholesale' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}
${L.section(
  `${L.cards([
    { title: 'Live-rate quoting', text: 'Quote at the current rate in seconds — no manual recalculation as the market moves.' },
    { title: 'Order tracking', text: 'Every wholesale order tracked from quote to delivery, on one record per buyer.' },
    { title: 'Vendor & buyer ledgers', text: 'Clarity on what’s owed, by whom, without a register-reconciliation exercise.' },
  ])}`
)}
${L.section(`${L.sectionHead('QUESTIONS GOLD WHOLESALERS ASK', '', '')}${L.faqBlock(goldWholesaleFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="goldwholesale">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Quote at today’s rate, live.', 'Change the rate in a demo and watch a wholesale quote reprice instantly.', 'goldwholesale', { enterprise: true })}
`,
};

const b2bJewelleryFaqs = [
  { q: 'Does this cover silver, gemstone and pearl wholesale specifically?', a: 'Yes — the same B2B catalogue and ordering structure applies across material types; the catalogue’s custom fields adapt to grading, strand or lot-level detail as needed.' },
  { q: 'Can retailer relationships that have gone stale be caught automatically?', a: 'Yes — customer intelligence flags buyers who haven’t reordered in a while, so follow-up doesn’t depend on someone remembering.' },
  { q: 'We deal with dozens of small retailers on thin margins. Is this worth it for us?', a: 'The math usually favours it — the AI workforce absorbs the follow-up load across many small accounts that no single staff member has time to chase individually.' },
];

const b2bJewellery = {
  slug: 'solutions/b2b-jewellery',
  title: 'For B2B Jewellery Trade — Silver, Gemstone & Pearl Wholesale | Jwero',
  description: 'One catalogue, many buyers, tiered prices — orders captured while you sleep. Covers silver, gemstone and pearl wholesale trade.',
  breadcrumbs: BC('B2B jewellery'),
  faqs: b2bJewelleryFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR B2B JEWELLERY TRADE',
  h1: 'Sell to the trade without living on the phone.',
  sub: 'One catalogue, many buyers, tiered prices — orders captured while you sleep. Built for silver, gemstone and pearl wholesale relationships that currently run on calls and screenshots.',
  primary: { href: '#', label: 'Talk shop on WhatsApp', wa: 'b2b' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}
${L.section(
  `${L.sectionHead('WHAT B2B TRADE NEEDS', '', '')}
  ${L.cards([
    { title: 'Catalogue distribution', text: 'One catalogue, shared with buyer-specific visibility and pricing tiers.' },
    { title: 'Grading & lot-level detail', text: 'Custom fields hold grades, strands, lots and certificates — whatever your material needs.' },
    { title: 'Credit & ledger tracking', text: 'Know what each retailer owes and when, without chasing a register.' },
    { title: 'Reorder intelligence', text: 'See which retailers have gone quiet and haven’t reordered — before the relationship goes cold.' },
  ])}`
)}
${L.section(`${L.sectionHead('QUESTIONS B2B TRADERS ASK', '', '')}${L.faqBlock(b2bJewelleryFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="b2b">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Put your catalogue in every buyer’s pocket.', 'Bring your buyer list — we’ll show tiered pricing and order capture on WhatsApp.', 'b2b', { enterprise: true })}
`,
};

module.exports = [diamondWholesale, goldWholesale, b2bJewellery];
