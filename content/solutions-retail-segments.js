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
  title: 'Software for Luxury & Boutique Jewellers: Clienteling | Jwero',
  description: 'Clienteling worthy of what you sell: white-glove memory for high-value clients, private previews on WhatsApp, and a small team serving like a large one.',
  breadcrumbs: BC('Luxury & boutique'),
  faqs: luxuryBoutiqueFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR LUXURY & BOUTIQUE',
  h1: 'Clienteling worthy of what you sell.',
  sub: 'White-glove memory for high-value clients: preferences, sizes, anniversaries — at every touchpoint, with private previews on WhatsApp instead of mass marketing. Behind it, every piece, certificate, repair and bill sits on the same record.',
  primary: { href: '#', label: 'Tell us about your business', wa: 'luxury' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
  mock: L.mockShop({ title: 'The boutique · today, 8:10 pm', counter: [['Last bill', 'Emerald ring · certificate attached · GST'], ['Bills today', '3']], stock: [['On hand, valued today', '212 pieces'], ['Out on approval', '4 pieces']], close: [['Cash and card against bills', 'Matched'], ['Posted to the books', '3 bills · 1 repair']] }),
})}
${L.section(
  `${L.sectionHead('THE BOUTIQUE OWNER’S DILEMMA', 'Private marketing for high-value relationships.', '')}
  ${L.painRows([
    { quote: 'Generic mass marketing feels cheap for what we sell.', title: 'Private, not broadcast', text: 'Curated catalogue previews go to named clients, with your approval on every message — never a blast.' },
    { quote: 'My clients expect privacy. They didn’t sign up for a mailing list.', title: 'Memory the client never sees, but always feels', text: 'Sizes, taste, past pieces and important dates — one record, visible only to your team.' },
    { quote: 'We see clients rarely, and every visit has to count.', title: 'Low-frequency, high-stakes follow-up', text: 'Appointments and video-counter previews replace guesswork with a scheduled, prepared visit.' },
    { quote: 'A client browses, tries three pieces, and walks out. My team has no idea whom to follow up with, or how.', title: 'Clienteling that knows what she tried', text: 'The live floor view shows who is being served and what they looked at, so a follow-up can name the exact pieces, not a generic reminder. See <a href="/products/showroom">Showroom Intelligence</a>.' },
  ])}`
)}
${L.jtbdBlock([
  { when: 'a client is due for an anniversary or a private preview', want: 'reach out personally, not as part of a blast', so: 'the relationship feels as considered as the pieces themselves' },
  { when: 'a client visits after months away', want: 'have her full taste and history on screen', so: 'the visit feels remembered, not restarted' },
])}
${L.section(`${L.sectionHead('QUESTIONS BOUTIQUE OWNERS ASK', 'What luxury clients expect from your system.', '')}${L.faqBlock(luxuryBoutiqueFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site’s own chat button runs on Jwero — <a href="#" data-wa="luxury">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See white-glove memory in action.', 'Bring one client relationship to a demo — we’ll show the record, the preview, and the approval queue.', 'luxury', { enterprise: true })}
`,
};

const bridalFaqs = [
  { q: 'Can multiple family members be tracked on one order?', a: 'Yes — the journey and conversation thread hold context for the whole family buying committee, beyond a single contact.' },
  { q: 'Can Jwero handle multi-visit trial and fitting cycles?', a: 'Yes — appointments, quotes and catalogue shares stay attached to one ongoing thread, so nothing gets lost between the first enquiry and the final fitting.' },
  { q: 'Does the relationship continue after the wedding?', a: 'Yes — anniversaries and future occasions are captured on the same record, so the bridal customer becomes a returning one.' },
  { q: 'Wedding season is our busiest and most fragile time. What if setup goes wrong then?', a: 'It won’t happen then — a season change-freeze policy means we never touch a live system during your peak weeks. Go-lives are scheduled before or after, never during.' },
];

const bridal = {
  slug: 'solutions/bridal',
  title: 'Bridal Jewellery Software: Trials, Quotes, Orders | Jwero',
  description: 'Track the whole family wedding journey: trials, quotes, dates, multiple decision-makers — in one thread, from first enquiry to the anniversaries after.',
  breadcrumbs: BC('Bridal & wedding'),
  faqs: bridalFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR BRIDAL & WEDDING',
  h1: 'Win the wedding, keep the family.',
  sub: 'Track every trousseau enquiry from first DM to final fitting — and the anniversaries after. The bridal journey is long and multi-visit. Your system should remember it as one story, not scattered messages, with the quote, the advance, the order and the delivery date on the same record.',
  primary: { href: '#', label: 'Tell us about your business', wa: 'bridal' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}
${L.section(
  `${L.sectionHead('WHY BRIDAL BUSINESS LEAKS', 'Where wedding enquiries lose the thread.', '')}
  ${L.painRows([
    { quote: 'Between the first enquiry and the wedding date, we lose the thread — literally.', title: 'One thread, months long', text: 'Every quote, trial and fitting stays on the same conversation and customer record, from enquiry to delivery.' },
    { quote: 'It’s never one decision-maker — it’s the whole family.', title: 'Built for the buying committee', text: 'The journey captures context for everyone involved — well beyond the name on the invoice.' },
    { quote: 'Wedding season is chaos — we can’t give every enquiry the attention it deserves.', title: 'The AI workforce holds the line', text: 'Draft replies, appointment scheduling and follow-up run even at peak season — with your approval on every message.' },
  ])}`
)}
${L.section(
  `${L.sectionHead('AFTER THE WEDDING', 'The relationship doesn’t end at the altar.', 'Anniversaries, first-child occasions and family referrals are the second half of a bridal relationship — captured on the same record as the trousseau order, and surfaced automatically when the date arrives.')}`
, { tone: 'tint' })}
${L.section(`${L.sectionHead('QUESTIONS BRIDAL BUSINESSES ASK', 'From first enquiry to the anniversaries after.', '')}${L.faqBlock(bridalFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="bridal">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

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
  title: 'Diamond Jewellery Retail Software: Certificates | Jwero',
  description: 'Diamond jewellery retail software: a certificate-aware catalogue and quick answers to 4C questions, for a high-ticket, trust-first category.',
  breadcrumbs: BC('Diamond retail'),
  faqs: diamondRetailFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR DIAMOND RETAIL',
  h1: 'Certified stock, certified follow-up.',
  sub: 'Certificate-level catalogue fields and an AI workforce that answers 4C questions instantly. Built for a trade where trust is the whole sale, and where solitaire stock can sit for a long time if nobody follows up. Stock, supplier memo and billing run on the same record, so what is sold, owed and still in the safe is always known.',
  primary: { href: '#', label: 'Tell us about your business', wa: 'diamond' },
  secondary: { href: '/tools/dead-stock-calculator', label: 'Try the Dead Stock Calculator' },
})}
${L.section(
  `${L.sectionHead('WHAT DIAMOND RETAIL NEEDS', 'Built for certification, trust and patience.', '')}
  ${L.cards([
    { title: 'Certificate-aware catalogue', text: 'Certification numbers, cut, clarity, colour and carat as structured fields — not a PDF nobody can search.' },
    { title: 'Instant, accurate answers', text: 'The AI workforce drafts 4C and solitaire-question replies from the catalogue record, approved before it sends.' },
    { title: 'High-ticket trust, built in', text: 'Approval-gated pricing and a customer record that remembers exactly what was discussed and quoted.' },
    { title: 'Slow-mover visibility', text: 'Solitaire and high-value pieces get the same ageing visibility as everything else — nothing sits unnoticed.' },
  ])}`
)}
${L.jtbdBlock([
  { when: 'a customer asks a technical 4C question', want: 'answer instantly with certificate-accurate detail', so: 'trust isn’t lost to a slow or vague reply' },
  { when: 'a certified stone sits unsold for weeks', want: 'see it ageing before it becomes forgotten stock', so: 'capital tied up in solitaires gets followed up on instead of quietly written off' },
])}
${L.section(`${L.sectionHead('QUESTIONS DIAMOND RETAILERS ASK', 'What diamond retailers ask about trust and AI.', '')}${L.faqBlock(diamondRetailFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="diamond">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('See a certified stone, sold end to end.', 'Bring one solitaire enquiry to a demo — catalogue, reply, approval, quote.', 'diamond')}
`,
};

const goldRetailFaqs = [
  { q: 'How does pricing stay accurate as the rate moves?', a: 'Catalogue prices are formulas: rate × weight × purity plus making charges — resolved live wherever the product appears. Change the rate once; everything follows.' },
  { q: 'Can I run my gold savings scheme alongside daily selling?', a: 'Yes — schemes, savings plans and everyday catalogue selling share the same customer record and pricing engine.' },
  { q: 'What if we mis-price something because the rate updated mid-conversation?', a: 'Prices resolve live at the moment they’re shown or invoiced, not cached from earlier in the day — that specific risk is what rate-linked pricing is built to remove.' },
];

const goldRetail = {
  slug: 'solutions/gold-retail',
  title: 'Gold Jewellery Shop Software: Live Rate, Schemes | Jwero',
  description: 'Gold jewellery shop software: live-rate pricing, gold scheme enrolment and old-gold exchange in one flow, for a business where the rate keeps moving.',
  breadcrumbs: BC('Gold retail'),
  faqs: goldRetailFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR GOLD RETAIL',
  h1: 'Gold moves fast. Your system should too.',
  sub: 'Live-rate pricing, scheme enrolment and old-gold exchange in one flow — because in gold retail, the rate changes twice a day and every quote has to keep up.',
  primary: { href: '#', label: 'Tell us about your business', wa: 'gold' },
  secondary: { href: '/tools/gold-scheme-calculator', label: 'Try the Scheme Calculator' },
})}
${L.section(
  `${L.sectionHead('THE GOLD RETAIL STACK', 'Pricing, schemes and exchange, in one flow.', '')}
  ${L.cards([
    { title: 'Rate-linked pricing', text: 'Every catalogue price, quote and invoice follows the live gold rate automatically — no manual repricing.' },
    { title: 'Gold savings schemes', text: 'Enrolment, reminders and maturity run digitally, with balances customers can check themselves.', link: { href: '/products/gold-schemes', label: 'See schemes' } },
    { title: 'Gold savings plans', text: 'Offer gram-based savings plans alongside classic schemes — the same discipline, a modern format.', link: { href: '/products/gold-schemes', label: 'See gold schemes' } },
    { title: 'Exchange & repair tracking', text: 'Old-gold exchange and repairs stay on the customer record, not a separate register.' },
  ])}`
)}
${L.jtbdBlock([
  { when: 'the gold rate changes mid-conversation', want: 'every open quote and catalogue price to follow automatically', so: 'nobody sells at yesterday’s price by mistake' },
  { when: 'a scheme member walks in', want: 'see her balance and history instantly', so: 'the counter conversation starts from trust instead of a lookup' },
])}
${L.section(`${L.sectionHead('QUESTIONS GOLD RETAILERS ASK', 'What gold retailers ask about rate-linked pricing.', '')}${L.faqBlock(goldRetailFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="gold">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('Change the rate. Watch it update.', 'In a demo, we change today’s rate live and watch a catalogue and invoice reprice instantly.', 'gold')}
`,
};

const silverRetailFaqs = [
  { q: 'Can it handle a very large SKU count?', a: 'Yes — the catalogue is built for high piece counts, with bulk tools and stock counts by scanning for exactly this kind of volume.' },
  { q: 'Does Jwero do counter billing for high-volume silver sales?', a: 'Scan-to-sale checkout is live — scan or search a piece, build the cart, price it at the live rate, apply a discount, take payment and generate the GST invoice, all in one flow. Returns and a reconciled cash day-close are in the same counter, and search works in transliterated Hindi, Gujarati or Tamil for fast tills. <a href="/products/pos">See the Counter POS</a>.' },
  { q: 'Our margins are thin — can we really afford new software?', a: 'Measure it against the manual hours currently spent reconciling volume sales, not against a line-item cost. The <a href="/tools/dead-stock-calculator">Dead Stock Calculator</a> alone often surfaces more than the subscription costs.' },
];

const silverRetail = {
  slug: 'solutions/silver-retail',
  title: 'Silver Jewellery Billing Software: Weight Sales and Lots | Jwero',
  description: 'Silver jewellery shop software for fast catalogues, quick reorders and high-volume billing by weight, built for silver’s speed and thin margins.',
  breadcrumbs: BC('Silver retail'),
  faqs: silverRetailFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR SILVER RETAIL',
  h1: 'Bill a hundred silver pieces an hour at the live rate, without a calculator.',
  sub: 'Silver moves in volume with thin margins and huge SKU counts. Fast catalogue tools, automated reorder signals and inventory ageing keep manual work from eating what little margin there is.',
  primary: { href: '#', label: 'Tell us about your business', wa: 'silver' },
  secondary: { href: '/products/inventory', label: 'See inventory tools' },
})}
${L.section(
  `${L.sectionHead('WHERE SILVER RETAIL BLEEDS', 'Volume and thin margins, automated.', '')}
  ${L.painRows([
    { quote: 'Thin margins mean we can’t afford manual work at this volume.', title: 'Bulk catalogue tools', text: 'Manage huge SKU counts efficiently — the catalogue is built for volume rather than boutique piece counts.' },
    { quote: 'Trends change fast and we’re always guessing what to reorder.', title: 'Ageing and mover visibility', text: 'Fast/slow-mover views by category show what to reorder — evidence, not habit.' },
  ])}`
)}
${L.honestGapsBlock(['E-invoice IRN generation is not built in — GST invoices are generated; IRP registration stays with your CA’s tool for now.'])}
${L.section(`${L.sectionHead('QUESTIONS SILVER RETAILERS ASK', 'What silver retailers ask about volume selling.', '')}${L.faqBlock(silverRetailFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="silver">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('See volume selling, simplified.', 'Bring your SKU count to a demo — we’ll show the bulk catalogue and ageing tools in action.', 'silver')}
`,
};

const labGrownFaqs = [
  { q: 'Is this built for online-first, D2C-style selling?', a: 'Yes — WhatsApp, Instagram and website selling with live-rate pricing are native, and connectors keep an existing Shopify or WooCommerce store in sync.' },
  { q: 'Can AI help educate customers who are new to lab-grown?', a: 'The AI workforce drafts educational, catalogue-backed replies to common questions, approved before they send — consistent answers, every time.' },
  { q: 'We already run Shopify ads and a store. Why add this?', a: 'Keep Shopify — the connector keeps your store on the same product data. Jwero adds the WhatsApp/Instagram-native selling and live-rate pricing a generic ecommerce platform doesn’t do, on top of what you already have.' },
];

const labGrown = {
  slug: 'solutions/lab-grown-diamond',
  title: 'Lab-Grown Diamond Jewellery Software | Jwero',
  description: 'Educate, convert and retain the lab-grown customer online-first — the fastest-growing, most digitally-native segment in jewellery.',
  breadcrumbs: BC('Lab-grown diamond'),
  faqs: labGrownFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR LAB-GROWN DIAMOND',
  h1: 'Lab-grown moves online-first. Sell it with live pricing on every channel.',
  sub: 'Lab-grown buyers research online, compare on price and clarity, and expect a digital-native experience. Educate, convert and retain them where they already are — WhatsApp, Instagram and your website — while stock, orders, billing and books update from the same sale.',
  primary: { href: '#', label: 'Tell us about your business', wa: 'labgrown' },
  secondary: { href: '/products/whatsapp', label: 'See WhatsApp Commerce' },
})}
${L.section(
  `${L.cards([
    { title: 'Education at scale', text: 'Consistent, catalogue-backed answers to lab-grown questions, drafted by the AI workforce and approved by your team.' },
    { title: 'Online-first selling', text: 'WhatsApp and Instagram commerce, plus a ecommerce connector — meet buyers where they already are.' },
    { title: 'Live-rate pricing', text: 'Lab-grown pricing that reflects current rates, not a stale price list.' },
    { title: 'Retention beyond the first order', text: 'One customer record turns a single online sale into a remembered relationship.' },
  ])}`
)}
${L.jtbdBlock([
  { when: 'a buyer asks a natural-vs-lab-grown question', want: 'give a consistent, accurate answer every time', so: 'education doesn’t depend on which staff member replies' },
  { when: 'a customer buys once online', want: 'keep her on one record across every channel', so: 'the second sale isn’t a cold outreach' },
])}
${L.section(`${L.sectionHead('QUESTIONS LAB-GROWN BRANDS ASK', 'What lab-grown brands ask about going online-first.', '')}${L.faqBlock(labGrownFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/compare/jwero-vs-shopify">See Jwero vs Shopify</a> or <a href="/faq">the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="labgrown">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

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
  title: 'Gemstone Inventory & Retail Software for Jewellers | Jwero',
  description: 'Gemstone retail software: a catalogue that keeps each stone’s details and certificate, with customer follow-ups timed to birthdays and occasions.',
  breadcrumbs: BC('Gemstone retail'),
  faqs: gemstoneRetailFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR GEMSTONE RETAIL',
  h1: 'Every stone’s provenance on the record, every customer’s taste beside it.',
  sub: 'Gemstone inventory is often one-of-one, with provenance and certification that matter as much as the stone itself. Jwero’s catalogue and CRM keep the story and the customer together, with stock, purchase and billing on the same record.',
  primary: { href: '#', label: 'Tell us about your business', wa: 'gemstone' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}
${L.section(
  `${L.cards([
    { title: 'Provenance-rich catalogue', text: 'Custom fields capture certification, origin and story per piece — not generic descriptions.' },
    { title: 'One-of-one inventory', text: 'Track unique pieces individually, shareable in one tap with the story intact.' },
    { title: 'Occasion-aware journeys', text: 'Build follow-up and marketing journeys around the occasions your customers buy for.' },
  ])}`
)}
${L.section(`${L.sectionHead('QUESTIONS GEMSTONE RETAILERS ASK', 'What gemstone retailers ask about one-of-one stock.', '')}${L.faqBlock(gemstoneRetailFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="gemstone">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('Show us one stone.', 'Bring one piece with real provenance — we’ll show you the catalogue entry and the customer match.', 'gemstone')}
`,
};

module.exports = [luxuryBoutique, bridal, diamondRetail, goldRetail, silverRetail, labGrown, gemstoneRetail];
