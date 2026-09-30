const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Solutions', '/solutions'], [label]];

const diamondWholesaleFaqs = [
  { q: 'Can I share different prices with different buyers?', a: 'Yes — buyer-tiered pricing and catalogue visibility are configurable, so each buyer sees their own terms.' },
  { q: 'Can memo and approval status be tracked per stone?', a: 'Order and pipeline tracking hold memo and approval status per item, replacing the register-hunting that comes with paper memos.' },
  { q: 'I trade loose diamonds and parcels, not jewellery. Is this for me?', a: 'Partly, and we would rather say where the line is. Today Jwero holds each stone with its certificate number, shape, carat, colour, clarity and cut on the catalogue; tracks it out on memo and consignment to several buyers with return dates; prices per buyer with tiered lists; and invoices in more than one currency. What it does not do yet is treat a parcel as a lot in carats with a price per carat, or price as a discount off a list — those are on the roadmap, and until they ship a trader who works parcel-by-parcel will still keep that sheet outside Jwero.' },
  { q: 'Our buyer relationships run on trust built over years. Won’t a system feel transactional?', a: 'The system holds the record; your team still holds the relationship. It replaces the register-hunting, not the trust — the buyer still deals with a person, just one who has the memo history in front of them.' },
];

const diamondWholesale = {
  slug: 'solutions/diamond-wholesale',
  title: 'For Diamond Wholesalers & Traders | Jwero',
  description: 'Private B2B catalogues on WhatsApp, certificate-first stone records, memo and approval tracking, and buyer-tiered pricing — every buyer, every memo, every order in one thread. Honest about what parcel traders still need.',
  breadcrumbs: BC('Diamond wholesale & trading'),
  faqs: diamondWholesaleFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR DIAMOND WHOLESALERS & TRADERS',
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
${L.section(
  `${L.sectionHead('IF YOU TRADE STONES, NOT JEWELLERY', 'What a diamond trader gets today — and what is still on the roadmap.', 'Traders work certificate-first, memo-heavy and across borders. Here is the honest split.')}
  ${L.cards([
    { icon: '✓', title: 'Certificate-first records', text: 'Each stone carries its GIA/IGI number, shape, carat, colour, clarity and cut on the catalogue — the certificate is the identity, not an afterthought.' },
    { icon: '⇩', title: 'Memo to many buyers', text: 'Stones out on memo or consignment to several buyers at once, each with a return date, so exposure per counterparty is visible.' },
    { icon: '⚿', title: 'Buyer-tiered prices, multi-currency', text: 'Private price lists per buyer, invoices in the currency the buyer pays in.' },
    { icon: '☏', title: 'Deals on the channel buyers use', text: 'WhatsApp catalogues, quotes and follow-ups on the thread where the deal is actually done.' },
  ], 4)}
  ${L.honestGapsBlock(['Parcel-as-lot accounting in carats with a price per carat — today a parcel is entered as its stones, not as one lot.', 'Discount-off-list (Rapaport-style) pricing — pricing is per stone or per buyer list, not a percentage off a published sheet.', 'Export documentation for cross-border shipments is not generated in Jwero.'])}`
, { tone: 'tint' })}
${L.section(`<div class="grid grid-2" style="align-items:center; gap:44px;"><div>${L.sectionHead('WHO HOLDS WHAT', 'Every memo, every buyer, every due date — on one screen.', 'Exposure per counterparty is the number a wholesaler carries in their head. Here it is written down, with the overdue one already chased.')}</div>${L.mockMemo}</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('QUESTIONS DIAMOND WHOLESALERS ASK', 'Memo tracking, pricing and trust — answered.', '')}${L.faqBlock(diamondWholesaleFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="diamondwholesale">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

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
${L.section(`${L.sectionHead('QUESTIONS GOLD WHOLESALERS ASK', 'Rate quotes, ledgers and disputes — answered.', '')}${L.faqBlock(goldWholesaleFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">Every WhatsApp button on this site is the actual product, not a mockup — <a href="#" data-wa="goldwholesale">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

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
  sub: 'One catalogue, many buyers, tiered price lists, memo and approval tracked per relationship — orders captured on WhatsApp while you sleep. Built for silver, gemstone and pearl B2B.',
  primary: { href: '#', label: 'Talk shop on WhatsApp', wa: 'b2b' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}
${L.section(
  `${L.sectionHead('WHAT B2B TRADE NEEDS', 'Catalogue, ledgers and reorder tracking, in one place.', '')}
  ${L.cards([
    { title: 'Catalogue distribution', text: 'One catalogue, shared with buyer-specific visibility and pricing tiers.' },
    { title: 'Grading & lot-level detail', text: 'Custom fields hold grades, strands, lots and certificates — whatever your material needs.' },
    { title: 'Credit & ledger tracking', text: 'Know what each retailer owes and when, without chasing a register.' },
    { title: 'Reorder intelligence', text: 'See which retailers have gone quiet and haven’t reordered — before the relationship goes cold.' },
  ])}`
)}
${L.section(
  `${L.sectionHead('A DAY IN YOUR TRADE DESK ON JWERO', 'Morning to night.', '')}
  ${L.steps([
    { title: 'Morning', text: 'Overnight orders from three retailers are already captured against the right pricing tier — no screenshots to reconcile by hand.' },
    { title: 'Afternoon', text: 'A buyer asks for a lot-level grading detail on a gemstone parcel — it’s a catalogue field, not a call to the back office.' },
    { title: 'Evening', text: 'The reorder view flags a retailer who’s gone quiet for six weeks: a nudge goes out before the relationship goes cold instead of after it’s lost.' },
    { title: 'Night', text: 'A new buyer’s catalogue request gets buyer-specific pricing visibility set up once — every order after follows the same rule automatically.' },
  ], 4)}`
, { tone: 'tint' })}
${L.jtbdBlock([
  { when: 'a retailer orders after hours', want: 'capture it against the right pricing tier automatically', so: 'nothing gets renegotiated or miskeyed the next morning' },
  { when: 'a regular buyer stops reordering', want: 'see it flagged before month-end', so: 'a trade relationship doesn’t quietly die unnoticed' },
])}
${L.section(`<div class="grid grid-2" style="align-items:center; gap:44px;"><div>${L.sectionHead('WHO HOLDS WHAT', 'Every memo, every buyer, every due date — on one screen.', 'Exposure per counterparty is the number a wholesaler carries in their head. Here it is written down, with the overdue one already chased.')}</div>${L.mockMemo}</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('QUESTIONS B2B TRADERS ASK', 'Materials, reorders and margins — answered.', '')}${L.faqBlock(b2bJewelleryFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="b2b">try the WhatsApp button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Put your catalogue in every buyer’s pocket.', 'Bring your buyer list — we’ll show tiered pricing and order capture on WhatsApp.', 'b2b', { enterprise: true })}
`,
};

module.exports = [diamondWholesale, goldWholesale, b2bJewellery];
