const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Solutions', '/solutions'], [label]];

const luxuryBoutiqueFaqs = [
  { q: 'Does this work for platinum and other niche materials?', a: 'Yes — purity, certification and material fields in the catalogue are generic to precious metals and stones, not gold-specific. Platinum, mixed-metal and niche assortments are handled the same way.' },
  { q: 'Can I keep client previews private?', a: 'Yes — curated catalogue shares with controlled visibility mean a preview goes only to the client it’s meant for, never a public link.' },
  { q: 'Will AI messages feel impersonal for high-value clients?', a: 'Every draft waits for your approval before it sends — you keep the final word on tone for your most important relationships, always.' },
  { q: 'My clients expect a personal relationship, not software. Won’t this feel corporate?', a: 'The system is invisible to the client — she experiences a private preview from someone who remembers her taste, not a chatbot. The software is what makes that memory possible at scale, not what she sees.' },
];

const luxuryBoutique = {
  slug: 'solutions/luxury-boutique',
  title: 'For Luxury & Boutique Jewellery Businesses | Jwero',
  description: 'Clienteling worthy of what you sell: white-glove memory for high-value clients, private previews on WhatsApp, and a small team serving like a large one.',
  breadcrumbs: BC('Luxury & boutique'),
  faqs: luxuryBoutiqueFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR LUXURY & BOUTIQUE',
  h1: 'Clienteling worthy of what you sell.',
  sub: 'White-glove memory for high-value clients — preferences, sizes, anniversaries — at every touchpoint, with private previews on WhatsApp instead of mass marketing.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'luxury' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
  mock: L.mockMemory,
})}
${L.section(
  `${L.sectionHead('THE BOUTIQUE OWNER’S DILEMMA', '', '')}
  ${L.painRows([
    { quote: 'Generic mass marketing feels cheap for what we sell.', title: 'Private, not broadcast', text: 'Curated catalogue previews go to named clients, with your approval on every message — never a blast.' },
    { quote: 'My clients expect privacy, not a mailing list.', title: 'Memory the client never sees, but always feels', text: 'Sizes, taste, past pieces and important dates — one record, visible only to your team.' },
    { quote: 'We see clients rarely, and every visit has to count.', title: 'Low-frequency, high-stakes follow-up', text: 'Appointments and video-counter previews replace guesswork with a scheduled, prepared visit.' },
  ])}`
)}
${L.jtbdBlock([
  { when: 'a client is due for an anniversary or a private preview', want: 'reach out personally, not as part of a blast', so: 'the relationship feels as considered as the pieces themselves' },
  { when: 'a client visits after months away', want: 'have her full taste and history on screen', so: 'the visit feels remembered, not restarted' },
])}
${L.section(`${L.sectionHead('QUESTIONS BOUTIQUE OWNERS ASK', '', '')}${L.faqBlock(luxuryBoutiqueFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="luxury">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See white-glove memory in action.', 'Bring one client relationship to a demo — we’ll show the record, the preview, and the approval queue.', 'luxury', { enterprise: true })}
`,
};

const bridalFaqs = [
  { q: 'Can multiple family members be tracked on one order?', a: 'Yes — the journey and conversation thread hold context for the whole family buying committee, not just one contact.' },
  { q: 'Can Jwero handle multi-visit trial and fitting cycles?', a: 'Yes — appointments, quotes and catalogue shares stay attached to one ongoing thread, so nothing gets lost between the first enquiry and the final fitting.' },
  { q: 'Does the relationship continue after the wedding?', a: 'Yes — anniversaries and future occasions are captured on the same record, so the bridal customer becomes a returning one.' },
  { q: 'Wedding season is our busiest and most fragile time. What if setup goes wrong then?', a: 'It won’t happen then — a season change-freeze policy means we never touch a live system during your peak weeks. Go-lives are scheduled before or after, never during.' },
];

const bridal = {
  slug: 'solutions/bridal',
  title: 'For Bridal & Wedding Jewellery Businesses | Jwero',
  description: 'Track the whole family wedding journey — trials, quotes, dates, multiple decision-makers — in one thread, from first enquiry to the anniversaries after.',
  breadcrumbs: BC('Bridal & wedding'),
  faqs: bridalFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR BRIDAL & WEDDING',
  h1: 'Win the wedding, keep the family.',
  sub: 'Track every trousseau enquiry from first DM to final fitting — and the anniversaries after. The bridal journey is long and multi-visit; your system should remember it as one story, not scattered messages.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'bridal' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}
${L.section(
  `${L.sectionHead('WHY BRIDAL BUSINESS LEAKS', '', '')}
  ${L.painRows([
    { quote: 'Between the first enquiry and the wedding date, we lose the thread — literally.', title: 'One thread, months long', text: 'Every quote, trial and fitting stays on the same conversation and customer record, from enquiry to delivery.' },
    { quote: 'It’s never one decision-maker — it’s the whole family.', title: 'Built for the buying committee', text: 'The journey captures context for everyone involved, not just the name on the invoice.' },
    { quote: 'Wedding season is chaos — we can’t give every enquiry the attention it deserves.', title: 'The AI workforce holds the line', text: 'Draft replies, appointment scheduling and follow-up run even at peak season — with your approval on every message.' },
  ])}`
)}
${L.section(
  `${L.sectionHead('AFTER THE WEDDING', 'The relationship doesn’t end at the altar.', 'Anniversaries, first-child occasions and family referrals are the second half of a bridal relationship — captured on the same record as the trousseau order, and surfaced automatically when the date arrives.')}`
, { tone: 'tint' })}
${L.section(`${L.sectionHead('QUESTIONS BRIDAL BUSINESSES ASK', '', '')}${L.faqBlock(bridalFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="bridal">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Bring one wedding order.', 'Show us a real trousseau journey — we’ll show you how it stays as one thread from enquiry to delivery.', 'bridal')}
`,
};

const diamondRetailFaqs = [
  { q: 'Can the catalogue hold certification details?', a: 'Yes — certification numbers, cut, clarity, colour and carat are structured catalogue fields, searchable and printable, not free text.' },
  { q: 'Can AI answer technical questions about a stone accurately?', a: 'The AI drafts from the catalogue’s recorded certification data, and every draft waits for your team’s approval before it reaches a customer — accuracy plus a human check.' },
  { q: 'High-ticket sales need trust built over time. Doesn’t automation undermine that?', a: 'The AI handles the first response and routine follow-up; your team still closes the relationship. Nothing about a six-figure sale happens without a human — approval queues guarantee that.' },
];

const diamondRetail = {
  slug: 'solutions/diamond-retail',
  title: 'For Diamond Jewellery Retailers | Jwero',
  description: 'Certificate-aware catalogue and AI that answers 4C questions instantly — for a trust-first, high-ticket, slow-moving category.',
  breadcrumbs: BC('Diamond retail'),
  faqs: diamondRetailFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR DIAMOND RETAIL',
  h1: 'Certified stock, certified follow-up.',
  sub: 'Certificate-level catalogue fields and an AI workforce that answers 4C questions instantly — built for a trade where trust is the whole sale, and solitaire stock can sit for a long time if nobody follows up.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'diamond' },
  secondary: { href: '/tools/dead-stock-calculator', label: 'Try the Dead Stock Calculator' },
})}
${L.section(
  `${L.sectionHead('WHAT DIAMOND RETAIL NEEDS', '', '')}
  ${L.cards([
    { title: 'Certificate-aware catalogue', text: 'Certification numbers, cut, clarity, colour and carat as structured fields — not a PDF nobody can search.' },
    { title: 'Instant, accurate answers', text: 'The AI workforce drafts 4C and solitaire-question replies from the catalogue record, approved before it sends.' },
    { title: 'High-ticket trust, built in', text: 'Approval-gated pricing and a customer record that remembers exactly what was discussed and quoted.' },
    { title: 'Slow-mover visibility', text: 'Solitaire and high-value pieces get the same ageing visibility as everything else — nothing sits unnoticed.' },
  ])}`
)}
${L.section(
  `${L.sectionHead('A DAY IN YOUR DIAMOND COUNTER ON JWERO', 'Morning to night.', '')}
  ${L.steps([
    { title: 'Morning', text: 'A solitaire enquiry from last night already has a certificate-backed 4C reply drafted and waiting for your approval tap.' },
    { title: 'Afternoon', text: 'A walk-in asks to compare two certified stones — your counter pulls both catalogue records side by side, with the numbers, not guesswork.' },
    { title: 'Evening', text: 'A quoted solitaire hasn’t moved in three weeks — it surfaces in your ageing view before it becomes dead stock nobody remembers to follow up on.' },
    { title: 'Night', text: 'A late enquiry about a certified piece gets an accurate, approved-tone reply — while your team sleeps, not while a competitor answers first.' },
  ], 4)}`
, { tone: 'tint' })}
${L.jtbdBlock([
  { when: 'a customer asks a technical 4C question', want: 'answer instantly with certificate-accurate detail', so: 'trust isn’t lost to a slow or vague reply' },
  { when: 'a certified stone sits unsold for weeks', want: 'see it ageing before it becomes forgotten stock', so: 'capital tied up in solitaires gets followed up on, not written off' },
])}
${L.section(`${L.sectionHead('QUESTIONS DIAMOND RETAILERS ASK', '', '')}${L.faqBlock(diamondRetailFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="diamond">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See a certified stone, sold end to end.', 'Bring one solitaire enquiry to a demo — catalogue, reply, approval, quote.', 'diamond')}
`,
};

const goldRetailFaqs = [
  { q: 'How does pricing stay accurate as the rate moves?', a: 'Catalogue prices are formulas — rate × weight × purity plus making charges — resolved live wherever the product appears. Change the rate once; everything follows.' },
  { q: 'Can I run my gold savings scheme alongside daily selling?', a: 'Yes — schemes, digital gold and everyday catalogue selling share the same customer record and pricing engine.' },
  { q: 'What if we mis-price something because the rate updated mid-conversation?', a: 'Prices resolve live at the moment they’re shown or invoiced, not cached from earlier in the day — that specific risk is what rate-linked pricing is built to remove.' },
];

const goldRetail = {
  slug: 'solutions/gold-retail',
  title: 'For Gold Jewellery Retailers | Jwero',
  description: 'Live-rate pricing, scheme enrolment and old-gold exchange in one flow — for a business where the rate changes twice a day.',
  breadcrumbs: BC('Gold retail'),
  faqs: goldRetailFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR GOLD RETAIL',
  h1: 'Gold moves fast. Your system should too.',
  sub: 'Live-rate pricing, scheme enrolment and old-gold exchange in one flow — because in gold retail, the rate changes twice a day and every quote has to keep up.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'gold' },
  secondary: { href: '/tools/gold-scheme-calculator', label: 'Try the Scheme Calculator' },
})}
${L.section(
  `${L.sectionHead('THE GOLD RETAIL STACK', '', '')}
  ${L.cards([
    { title: 'Rate-linked pricing', text: 'Every catalogue price, quote and invoice follows the live gold rate automatically — no manual repricing.' },
    { title: 'Gold savings schemes', text: 'Enrolment, reminders and maturity run digitally, with balances customers can check themselves.', link: { href: '/products/gold-schemes', label: 'See schemes' } },
    { title: 'Digital gold', text: 'Offer gram-based savings alongside classic schemes — the same discipline, a modern format.', link: { href: '/products/digital-gold', label: 'See digital gold' } },
    { title: 'Exchange & repair tracking', text: 'Old-gold exchange and repairs stay on the customer record, not a separate register.' },
  ])}`
)}
${L.section(
  `${L.sectionHead('A DAY IN YOUR GOLD COUNTER ON JWERO', 'Morning to night.', '')}
  ${L.steps([
    { title: 'Morning', text: 'The rate updates for the day — every catalogue price, open quote and pending invoice follows it automatically, nobody repricing by hand.' },
    { title: 'Afternoon', text: 'A scheme member walks in for her sixth instalment — her balance, past payments and maturity date are on screen before she finishes saying her name.' },
    { title: 'Evening', text: 'An old-gold exchange gets logged straight onto the customer’s record, not a separate paper register that never makes it back to the shop file.' },
    { title: 'Night', text: 'An enquiry about tomorrow’s rate gets an honest “checking and confirming by morning” reply — never a stale price quoted after the market moved.' },
  ], 4)}`
, { tone: 'tint' })}
${L.jtbdBlock([
  { when: 'the gold rate changes mid-conversation', want: 'every open quote and catalogue price to follow automatically', so: 'nobody sells at yesterday’s price by mistake' },
  { when: 'a scheme member walks in', want: 'see her balance and history instantly', so: 'the counter conversation starts from trust, not a lookup' },
])}
${L.section(`${L.sectionHead('QUESTIONS GOLD RETAILERS ASK', '', '')}${L.faqBlock(goldRetailFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="gold">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Change the rate. Watch it update.', 'In a demo, we change today’s rate live and watch a catalogue and invoice reprice instantly.', 'gold')}
`,
};

const silverRetailFaqs = [
  { q: 'Can it handle a very large SKU count?', a: 'Yes — the catalogue is built for high piece counts, with bulk tools and RFID-ready stock-take for exactly this kind of volume.' },
  { q: 'Does Jwero do counter billing for high-volume silver sales?', a: 'A dedicated POS counter is on our public roadmap, not shipped today — Billing & Finance handles GST invoicing and works alongside your current counter billing.' },
  { q: 'Our margins are thin — can we really afford new software?', a: 'Measure it against the manual hours currently spent reconciling volume sales, not against a line-item cost. The <a href="/tools/dead-stock-calculator">Dead Stock Calculator</a> alone often surfaces more than the subscription costs.' },
];

const silverRetail = {
  slug: 'solutions/silver-retail',
  title: 'For Silver Jewellery Retailers | Jwero',
  description: 'Fast catalogue, fast reorder, high volume — automated for silver’s velocity and thin margins.',
  breadcrumbs: BC('Silver retail'),
  faqs: silverRetailFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR SILVER RETAIL',
  h1: 'High volume, low margin — automated.',
  sub: 'Silver moves in volume with thin margins and huge SKU counts. Fast catalogue tools, automated reorder signals and inventory ageing keep manual work from eating what little margin there is.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'silver' },
  secondary: { href: '/products/inventory', label: 'See inventory tools' },
})}
${L.section(
  `${L.sectionHead('WHERE SILVER RETAIL BLEEDS', '', '')}
  ${L.painRows([
    { quote: 'Thin margins mean we can’t afford manual work at this volume.', title: 'Bulk catalogue tools', text: 'Manage huge SKU counts efficiently — the catalogue is built for volume, not boutique piece counts.' },
    { quote: 'Trends change fast and we’re always guessing what to reorder.', title: 'Ageing and mover visibility', text: 'Fast/slow-mover views by category show what to reorder — evidence, not habit.' },
  ])}`
)}
${L.honestGapsBlock(['POS counter billing with cash day-close — on the roadmap; today Billing & Finance handles GST invoicing at the live rate and works alongside your existing counter.'])}
${L.section(`${L.sectionHead('QUESTIONS SILVER RETAILERS ASK', '', '')}${L.faqBlock(silverRetailFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="silver">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See volume selling, simplified.', 'Bring your SKU count to a demo — we’ll show the bulk catalogue and ageing tools in action.', 'silver')}
`,
};

const labGrownFaqs = [
  { q: 'Is this built for online-first, D2C-style selling?', a: 'Yes — WhatsApp, Instagram and storefront selling with live-rate pricing are native, and connectors keep an existing Shopify or WooCommerce store in sync.' },
  { q: 'Can AI help educate customers who are new to lab-grown?', a: 'The AI workforce drafts educational, catalogue-backed replies to common questions, approved before they send — consistent answers, every time.' },
  { q: 'We already run Shopify ads and a store. Why add this?', a: 'Keep Shopify — the connector syncs products and orders. Jwero adds the WhatsApp/Instagram-native selling and live-rate pricing a generic ecommerce platform doesn’t do, on top of what you already have.' },
];

const labGrown = {
  slug: 'solutions/lab-grown-diamond',
  title: 'For Lab-Grown Diamond Jewellery Businesses | Jwero',
  description: 'Educate, convert and retain the lab-grown customer online-first — the fastest-growing, most digitally-native segment in jewellery.',
  breadcrumbs: BC('Lab-grown diamond'),
  faqs: labGrownFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR LAB-GROWN DIAMOND',
  h1: 'Built for the fastest-moving segment in jewellery.',
  sub: 'Lab-grown buyers research online, compare on price and clarity, and expect a digital-native experience. Educate, convert and retain them where they already are — WhatsApp, Instagram and your storefront.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'labgrown' },
  secondary: { href: '/products/whatsapp', label: 'See WhatsApp Commerce' },
})}
${L.section(
  `${L.cards([
    { title: 'Education at scale', text: 'Consistent, catalogue-backed answers to lab-grown questions, drafted by the AI workforce and approved by your team.' },
    { title: 'Online-first selling', text: 'WhatsApp and Instagram commerce, plus a storefront connector — meet buyers where they already are.' },
    { title: 'Live-rate pricing', text: 'Lab-grown pricing that reflects current rates, not a stale price list.' },
    { title: 'Retention beyond the first order', text: 'One customer record turns a single online sale into a remembered relationship.' },
  ])}`
)}
${L.section(
  `${L.sectionHead('A DAY IN YOUR LAB-GROWN BUSINESS ON JWERO', 'Morning to night.', '')}
  ${L.steps([
    { title: 'Morning', text: 'An Instagram comment asking “is this real or lab-grown?” already has a catalogue-backed, educational draft reply waiting for your approval.' },
    { title: 'Afternoon', text: 'A price-comparison DM gets an accurate, live-rate quote — not a stale number copied from last week’s post.' },
    { title: 'Evening', text: 'Your Shopify store takes an order; it syncs to the same customer record your WhatsApp team is already using — one buyer, one history.' },
    { title: 'Night', text: 'A first-time buyer’s enquiry becomes a saved record, not a one-off DM — so the second purchase starts from a relationship, not a cold message.' },
  ], 4)}`
, { tone: 'tint' })}
${L.jtbdBlock([
  { when: 'a buyer asks a natural-vs-lab-grown question', want: 'give a consistent, accurate answer every time', so: 'education doesn’t depend on which staff member replies' },
  { when: 'a customer buys once online', want: 'keep her on one record across every channel', so: 'the second sale isn’t a cold outreach' },
])}
${L.section(`${L.sectionHead('QUESTIONS LAB-GROWN BRANDS ASK', '', '')}${L.faqBlock(labGrownFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/compare/jwero-vs-shopify">See Jwero vs Shopify</a> or <a href="/faq">the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="labgrown">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Sell to the online-first buyer.', 'See a lab-grown enquiry go from Instagram comment to educated, priced reply.', 'labgrown')}
`,
};

const gemstoneRetailFaqs = [
  { q: 'Can the catalogue record provenance and certification per stone?', a: 'Yes — custom fields let you record provenance, certification and story details per piece, since gemstone inventory is often one-of-one.' },
  { q: 'Does Jwero support occasion-based gemstone selling?', a: 'Yes — journeys can be built around occasions and preferences relevant to gemstone buying, with your approval on every message.' },
  { q: 'My inventory is mostly one-of-a-kind pieces — does a "catalogue" even make sense here?', a: 'Yes — each piece gets its own record with its own story and certification, shareable individually. It isn’t a mass-catalogue system forced onto unique stock.' },
];

const gemstoneRetail = {
  slug: 'solutions/gemstone-retail',
  title: 'For Gemstone Jewellery Retailers | Jwero',
  description: 'Provenance-rich catalogue and occasion-aware CRM journeys — every stone has a story, and Jwero keeps both.',
  breadcrumbs: BC('Gemstone retail'),
  faqs: gemstoneRetailFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR GEMSTONE RETAIL',
  h1: 'Every stone has a story. Keep both.',
  sub: 'Gemstone inventory is often one-of-one, with provenance and certification that matter as much as the stone itself. Jwero’s catalogue and CRM keep the story and the customer together.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'gemstone' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}
${L.section(
  `${L.cards([
    { title: 'Provenance-rich catalogue', text: 'Custom fields capture certification, origin and story per piece — not generic descriptions.' },
    { title: 'One-of-one inventory', text: 'Track unique pieces individually, shareable in one tap with the story intact.' },
    { title: 'Occasion-aware journeys', text: 'Build follow-up and marketing journeys around the occasions your customers actually buy for.' },
  ])}`
)}
${L.section(`${L.sectionHead('QUESTIONS GEMSTONE RETAILERS ASK', '', '')}${L.faqBlock(gemstoneRetailFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="gemstone">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Show us one stone.', 'Bring one piece with real provenance — we’ll show you the catalogue entry and the customer match.', 'gemstone')}
`,
};

module.exports = [luxuryBoutique, bridal, diamondRetail, goldRetail, silverRetail, labGrown, gemstoneRetail];
