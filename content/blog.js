const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Blog', '/blog'], [label]];
const PUBLISHED = '2026-07-20';

function postSchema(headline, description) {
  return {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline, description,
    datePublished: PUBLISHED, dateModified: PUBLISHED,
    author: { '@type': 'Organization', name: 'Jwero' },
    publisher: { '@type': 'Organization', name: 'Jwero' },
  };
}

function postMeta(readMins, cluster) {
  return `<p class="post-meta"><span>${cluster}</span> · <span>${readMins} min read</span> · <span>Updated July 2026</span></p>`;
}

const blogHub = {
  slug: 'blog',
  title: 'The Jwero Blog — Practical Guides for Jewellery Business Owners | Jwero',
  description: 'Practical, honest guides on WhatsApp selling, dead stock, gold schemes and running a jewellery business — no fluff, no fabricated statistics, calculators where the topic has a number worth running.',
  breadcrumbs: [['Home', '/'], ['Blog']],
  body: `
${L.hero({
  eyebrow: 'THE JWERO BLOG',
  h1: 'Practical guides, not content marketing filler.',
  sub: 'Every article here exists to answer a real question jewellery business owners search for — written the same way the rest of this site is: honestly, with calculators where the topic has a number worth running, and no invented statistics.',
})}
${L.section(
  `${L.sectionHead('START HERE', 'Three questions we hear most.', '')}
  ${L.cards([
    { title: 'WhatsApp for Jewellers: The Complete Guide', text: 'Official API vs personal number, catalogue pricing, reply speed, and where jewellers most often get it wrong.', link: { href: '/blog/whatsapp-for-jewellers-guide', label: 'Read the guide' } },
    { title: 'Dead Stock in Jewellery: Calculate It, Then Clear It', text: 'What counts as dead stock, how the carrying cost is actually calculated, and clearance without a fire sale.', link: { href: '/blog/dead-stock-jewellery-business-guide', label: 'Read the guide' } },
    { title: 'Gold Savings Schemes: A Practical Guide to Running One Digitally', text: 'Why schemes lock in revenue, why most leak members through drift, and what digital collection actually fixes.', link: { href: '/blog/gold-savings-scheme-guide', label: 'Read the guide' } },
  ])}`
)}
${L.section(`<p style="font-size:.85rem; color:var(--ink-2);">More guides are coming — starting with the topics jewellers ask us about most on WhatsApp. <a href="#" data-wa="blog-hub">Tell us what you’d want covered</a>.</p>`)}
`,
};

// ---------------------------------------------------------------- Article 1: WhatsApp
const whatsappGuideFaqs = [
  { q: 'Is the official WhatsApp Business API different from the WhatsApp Business app?', a: 'Yes. The free Business app is for solo or small-team use on one phone. The official Business API is what platforms like Jwero build on — it supports approved message templates, multiple team members in one inbox, and the compliance discipline that keeps an account from getting flagged.' },
  { q: 'What actually gets a business WhatsApp number banned or restricted?', a: 'Almost always: unofficial bulk-messaging tools that spoof the app, sending outside Meta’s approved-template rules, ignoring opt-outs, or blasting contacts who never consented. The official API with approved templates and consent tracking is built specifically to avoid this.' },
  { q: 'Do I need a developer to set up the official API?', a: 'Not if you use a platform built on top of it — the technical registration, template approval and number migration are handled for you, and you keep the number you already use.' },
];

const whatsappGuide = {
  slug: 'blog/whatsapp-for-jewellers-guide',
  title: 'WhatsApp for Jewellers: The Complete Guide to Selling and Servicing on WhatsApp | Jwero',
  description: 'A practical guide to selling jewellery on WhatsApp: official API vs personal number, catalogue pricing, reply speed, appointments and payments, and the mistakes that cost sales.',
  breadcrumbs: BC('WhatsApp for Jewellers Guide'),
  schema: postSchema('WhatsApp for Jewellers: The Complete Guide', 'A practical guide to selling jewellery on WhatsApp — official API vs personal number, catalogue pricing, reply speed, and common mistakes.'),
  faqs: whatsappGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · WHATSAPP FOR JEWELLERS',
  h1: 'WhatsApp for Jewellers: The Complete Guide',
  sub: 'Jewellery is sold on trust and conversation — which is exactly what WhatsApp is built for. Here’s how to actually run a jewellery business on it, not just have a number customers can message.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'blog-whatsapp' },
  secondary: { href: '/tools/whatsapp-revenue-estimator', label: 'Try the Revenue Estimator' },
})}
${L.section(postMeta(9, 'WhatsApp for Jewellers'))}

${L.section(
  `<div class="post-body">
  <h2>Why WhatsApp is where jewellery gets bought, not just discussed</h2>
  <p>A jewellery purchase is rarely a single transaction — it’s a conversation. A customer asks about today’s rate, compares two designs, checks a certificate, asks a family member, comes back three days later with a question about resizing. Email is too slow for this rhythm and too formal for the relationship; a phone call demands both parties be free at the same moment. WhatsApp fits the actual shape of how jewellery gets decided: asynchronous, personal, and already the app on every customer’s phone.</p>
  <p>That’s why most jewellery businesses are already doing some version of this — a shop WhatsApp number, or worse, a salesperson’s personal number, fielding "rate kya hai?" messages all day. The guide below is about doing it properly: officially, safely, and in a way that doesn’t depend on one person remembering everything.</p>

  <h2>Official Business API vs. the free app vs. unofficial bulk tools</h2>
  <p>There are three ways businesses run WhatsApp today, and the difference matters more than it looks:</p>
  <p><strong>The free WhatsApp Business app</strong> is fine for a single owner on a single phone. It doesn’t support multiple team members working the same number at once, and it has no CRM behind it — every conversation lives on that one device, tied to whoever holds it.</p>
  <p><strong>Unofficial "bulk sender" tools</strong> that pair with a personal number to blast messages are the single most common way jewellery businesses lose a WhatsApp number entirely. They work outside Meta’s rules, and Meta actively detects and restricts numbers that behave like spam senders — the risk isn’t hypothetical, it’s the normal outcome of using them at any real volume.</p>
  <p><strong>The official WhatsApp Business API</strong> is what serious commerce runs on: approved message templates for anything outside an active conversation, consent and opt-out tracking, and support for a whole team working one number through a shared inbox — without each person needing the phone in hand. This is the number your customers already trust, migrated onto infrastructure that won’t put it at risk.</p>

  <h2>Catalogue sharing that doesn’t go stale</h2>
  <p>A screenshot of a price list sent last week is wrong by the time it’s reopened, because gold and silver rates move — often twice a day. A catalogue that resolves price live, at the moment it’s viewed or shared, removes the single most common source of an awkward "actually, the price has changed" conversation.</p>
  <p>This matters even more for certified stones, where a customer expects the certification number, cut, clarity and carat to be exact, not paraphrased from memory.</p>

  <h2>Reply speed decides more sales than the reply itself</h2>
  <p>The customer messaging three jewellers at 11pm isn’t choosing the best design — she’s choosing whoever answers first with a real, accurate price. A correct reply that arrives the next morning has usually already lost to a mediocre reply that arrived in minutes.</p>
  <p>This is the single biggest lever in WhatsApp selling, and it’s also the easiest to underestimate, because "we always reply eventually" feels like coverage until you measure how many enquiries went cold overnight. <a href="/tools/whatsapp-revenue-estimator">The WhatsApp Revenue Estimator</a> puts a number on exactly this gap for your own volume and average order value.</p>

  <h2>A conversation is not a customer record</h2>
  <p>The deepest structural problem with running sales purely through chat is that a conversation thread isn’t a customer record. Six months later, when the same customer messages about an anniversary gift, nothing about her past purchase, her sizes, or what she was shown last time carries forward unless a person remembers it.</p>
  <p>The chat and the CRM need to be the same system — otherwise every returning customer is, functionally, a stranger again.</p>

  <h2>The most common mistakes jewellers make on WhatsApp</h2>
  <p><strong>Running it on a personal number with no backup.</strong> When that staff member is on leave, sick, or leaves the business, the relationships they carried go dark or leave with them.</p>
  <p><strong>Treating it as a broadcast channel.</strong> Mass blasts to a full contact list, without consent tracking, are exactly the pattern that gets numbers restricted — and exactly the kind of messaging customers learn to ignore.</p>
  <p><strong>No plan for after-hours enquiries.</strong> A jewellery store is open maybe 10–12 hours; WhatsApp enquiries don’t stop at closing time. Every enquiry that waits until morning for a reply is a chance for it to have already been answered — accurately — by someone else.</p>
  <p><strong>Selling without the record behind it.</strong> Catalogue shares, quotes and appointments that live only in the chat thread, disconnected from inventory, scheme balances or purchase history.</p>

  <h2>What a proper setup looks like</h2>
  <p>Official API, on the number customers already have. A live-priced catalogue that’s always correct when opened. A shared team inbox so coverage doesn’t depend on one phone. A first response — drafted quickly, approved by a person before it sends — so an 11pm enquiry doesn’t sit unanswered until morning. And underneath all of it, one customer record that the chat, the catalogue and the sale all write to, so the relationship compounds instead of resetting every time.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('SEE IT WORKING', 'This guide is written by the team behind the button below.', 'This site’s own WhatsApp button runs on the official API, catalogue-linked pricing and the approval-gated AI reply described above — not a hypothetical.')}
  <p><a class="btn btn-ghost" href="/products/whatsapp">See WhatsApp Commerce in Jwero</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about setup and bans.', '')}${L.faqBlock(whatsappGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="blog-whatsapp">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Run your own WhatsApp number, properly.', 'Bring your current setup — we’ll show you the official API, live catalogue and one shared record.', 'blog-whatsapp')}
`,
};

// ---------------------------------------------------------------- Article 2: Dead stock
const deadStockGuideFaqs = [
  { q: 'What’s the simplest definition of dead stock in jewellery?', a: 'A common working definition: pieces unsold after 180 days. It’s a starting point, not a rule — some categories (bridal, high-carat solitaires) naturally move slower than everyday gold pieces, so ageing bands are worth setting per category.' },
  { q: 'Should dead stock be melted down?', a: 'Melting is the last resort, not the first move — it recovers only metal value and forfeits any making-charge margin already invested. Matched selling and rotation between branches or customer segments should be tried first; markdowns with a metal-value floor come before melting.' },
  { q: 'How often should ageing be reviewed?', a: 'Monthly, at minimum, by piece and by branch — waiting for an annual stocktake is exactly how dead stock stays invisible until it’s a much bigger number.' },
];

const deadStockGuide = {
  slug: 'blog/dead-stock-jewellery-business-guide',
  title: 'Dead Stock in Jewellery Business: How to Calculate It and Clear It | Jwero',
  description: 'A practical guide to dead stock in jewellery retail: what counts as dead stock, how to calculate its real carrying cost, and how to clear it without a fire sale.',
  breadcrumbs: BC('Dead Stock Guide'),
  schema: postSchema('Dead Stock in Jewellery Business: How to Calculate It and Clear It', 'What counts as dead stock in jewellery, how to calculate its carrying cost, and how to clear it without a fire sale.'),
  faqs: deadStockGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · DEAD STOCK',
  h1: 'Dead Stock in Jewellery Business: Calculate It, Then Clear It',
  sub: 'Idle inventory is the quietest expense in a jewellery business — no invoice arrives for it, so it rarely gets budgeted against. Here’s how to see the real number, and what to do once you see it.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'blog-deadstock' },
  secondary: { href: '/tools/dead-stock-calculator', label: 'Run the calculator' },
})}
${L.section(postMeta(8, 'Dead Stock'))}

${L.section(
  `<div class="post-body">
  <h2>What actually counts as dead stock</h2>
  <p>A common working definition used across the trade: pieces unsold after 180 days. It’s a starting point, not a universal rule — bridal and high-value solitaire categories naturally move slower than everyday gold pieces, so the useful version of this definition is set per category, not applied as one blanket number across an entire showcase.</p>
  <p>What matters more than the exact cutoff is having one at all, tracked consistently, so "slow" and "dead" are measured the same way every month rather than judged by feel.</p>

  <h2>Why it’s worse in jewellery than in almost any other retail category</h2>
  <p>Jewellery inventory ties up an unusually large amount of capital per square foot of shelf space, and most of that capital is financed — through working-capital loans, gold loan schemes, or the owner’s own money that could be earning a return elsewhere. Every month a piece sits unsold, it’s quietly costing the business the financing rate on that capital, plus insurance, storage and handling — and none of that shows up as a line item anywhere.</p>
  <p>It only shows up as a smaller number in the bank account than the sales figures would suggest.</p>

  <h2>How the real carrying cost is calculated</h2>
  <p>The calculation is straightforward once it’s made explicit: take the value of stock sitting in the dead-stock band, and multiply it by your financing rate plus a reasonable allowance for insurance, storage and handling — commonly a couple of percentage points on top of the financing rate. Divide by twelve for a monthly figure. This deliberately excludes the opportunity cost of that capital not being invested in faster-moving pieces instead, which means the true cost to the business is higher than this number, not lower.</p>
  <p>Run your own inventory value, dead-stock percentage and financing rate through the <a href="/tools/dead-stock-calculator">Dead Stock Calculator</a> to see this applied to your actual numbers rather than a hypothetical.</p>

  <h2>Clearance, without a fire sale</h2>
  <p>The instinct when a number like this becomes visible is to panic-discount everything in the ageing band — which trains regular customers to wait for sales and erodes margin on pieces that might have sold at full price with the right customer, just not yet. A better sequence:</p>
  <p><strong>Matched selling first.</strong> An idle design might be dead stock in one branch and exactly what a specific customer in another branch's book has been asking for. This only works if customer preferences and inventory ageing are visible on the same system — otherwise the match never gets made.</p>
  <p><strong>Rotation between branches or channels next.</strong> A design that hasn't moved at the counter in three months might sell in a week on WhatsApp or Instagram to a different audience.</p>
  <p><strong>Disciplined markdowns last, with a metal-value floor.</strong> When a price cut is genuinely needed, set a floor tied to the metal value so a markdown never sells below what the raw material is worth — the discount comes out of the making-charge margin, not out of melting the piece for a loss.</p>

  <h2>Prevention beats clearance</h2>
  <p>The businesses that don't accumulate large dead-stock positions aren't the ones with better clearance sales — they're the ones who catch ageing early, by piece and by branch, every month, rather than discovering it once a year at stocktake. Visibility is the actual fix; clearance tactics are what you need when visibility arrived too late.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('AFTER THE READ', 'Run your own number.', 'The calculator above takes sixty seconds and uses your actual inventory value, ageing percentage and financing rate — not an industry average that may not apply to your business.')}
  <p><a class="btn btn-ghost" href="/solutions/pain/dead-stock">Read the full dead-stock playbook</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about calculating and clearing it.', '')}${L.faqBlock(deadStockGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="blog-deadstock">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See ageing and matched selling in action.', 'Bring your real ageing report — we’ll show how matching and rotation would work on your actual stock.', 'blog-deadstock')}
`,
};

// ---------------------------------------------------------------- Article 3: Gold schemes
const schemeGuideFaqs = [
  { q: 'What’s a typical gold scheme structure?', a: 'The most common shape is a classic 11-instalment plan: the customer pays a fixed monthly amount for 11 months, and the business contributes or waives the 12th, with the full corpus redeemable against jewellery at maturity. Structures vary by business — this is a common pattern, not a mandated one.' },
  { q: 'Do gold schemes need regulatory registration?', a: 'This varies by structure and jurisdiction, and it’s genuinely a compliance question, not a marketing one — consult your own compliance advisor or chartered accountant on registration and disclosure requirements for your specific scheme design before launching or scaling one.' },
  { q: 'What’s the biggest reason scheme members drop out?', a: 'Almost never a deliberate decision — usually drift. A missed month that nobody followed up on becomes two, then the member quietly stops. Reminders that catch the first missed payment, not the fourth, are what keep completion rates high.' },
];

const schemeGuide = {
  slug: 'blog/gold-savings-scheme-guide',
  title: 'Gold Savings Schemes for Jewellers: A Practical Guide to Running One Digitally | Jwero',
  description: 'A practical guide to jewellery gold savings schemes: why they lock in future revenue, why paper registers leak members through drift, and what digital collection actually changes.',
  breadcrumbs: BC('Gold Savings Scheme Guide'),
  schema: postSchema('Gold Savings Schemes for Jewellers: A Practical Guide to Running One Digitally', 'Why gold savings schemes lock in future revenue, why paper registers leak members, and what digital collection changes.'),
  faqs: schemeGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · GOLD SAVINGS SCHEMES',
  h1: 'Gold Savings Schemes: A Practical Guide to Running One Digitally',
  sub: 'A scheme book is a revenue engine wearing a savings costume — but only if the collection discipline behind it actually holds. Here’s how the mechanics work, and where paper registers quietly leak.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'blog-scheme' },
  secondary: { href: '/tools/gold-scheme-calculator', label: 'Run the calculator' },
})}
${L.section(postMeta(8, 'Gold Savings Schemes'))}

${L.section(
  `<div class="post-body">
  <h2>Why a scheme is a revenue engine, not just a savings product</h2>
  <p>A gold savings scheme looks, from the customer's side, like a disciplined way to save toward a future purchase. From the business's side, it's something more specific: a corpus collected this year that becomes a near-guaranteed showcase visit next year.</p>
  <p>Members overwhelmingly redeem their corpus in person, at the counter — and typically add money at maturity to reach the piece they actually want, rather than spending exactly the corpus amount and no more. The scheme book you build this year is next year's booked traffic, collected in advance.</p>

  <h2>The classic structure, and why it's shaped that way</h2>
  <p>The most common scheme structure is an 11-instalment plan: the member pays a fixed amount each month for eleven months, and redeems the full twelve-month value (or an equivalent) in jewellery. The structure rewards completion without asking the business to carry an open-ended liability, and it gives members a clear, short horizon rather than an indefinite savings commitment. Specific terms — instalment counts, bonus structures, lock-in periods — vary business to business, and should be set with your own compliance advisor rather than copied from a competitor's scheme.</p>

  <h2>Where paper-register schemes actually leak</h2>
  <p>The failure mode of a manually run scheme is almost never a member deciding to quit. It's drift: a missed month that nobody notices for weeks, because the register only gets reviewed occasionally, not against a due date. By the time someone follows up, the member has already mentally written off the scheme, or worse, feels chased rather than reminded.</p>
  <p>Multiply that pattern across a few hundred members and the completion rate on paper-run schemes ends up meaningfully lower than it should be — not because the product failed, but because the collection process did.</p>

  <h2>What digital collection actually fixes</h2>
  <p>The mechanics that close this gap are simple, individually: automated reminders before a due date rather than after it's missed, a payment link inside the reminder so paying takes one tap, a balance the member can check themselves without calling the shop, and an OTP-verified maturity step so redemption is unambiguous for both sides.</p>
  <p>None of these are complicated technology — what they replace is a person remembering to chase hundreds of due dates by hand, which doesn't scale past a small member base no matter how diligent that person is.</p>
  <p>See what your own enrolment rate and instalment size are worth in locked-in future revenue with the <a href="/tools/gold-scheme-calculator">Gold Scheme Calculator</a> — and what a realistic completion-rate uplift from digital collection adds on top.</p>

  <h2>Digital gold, alongside classic schemes</h2>
  <p>Gram-based digital gold savings is a modern variant of the same discipline — smaller, more flexible contributions building toward a redeemable gram balance, rather than a fixed monthly instalment. It doesn't replace a classic scheme so much as extend the same idea to a customer who wants more flexibility, and both can run on the same underlying balance-and-redemption logic.</p>

  <h2>A compliance note, said plainly</h2>
  <p>Scheme registration and disclosure requirements are a genuine legal question that varies by structure and jurisdiction — this guide isn't a substitute for advice from your own compliance advisor or chartered accountant, and specific claims about what's required shouldn't be taken from a marketing page, including this one.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('RUN THE PROMISE PROPERLY', 'Discipline is the product, the scheme is the wrapper.', 'Enrolment with KYC, reminders before every due date, transparent balances, OTP-verified maturity — the discipline that turns a leaky register into a compounding book.')}
  <p><a class="btn btn-ghost" href="/products/gold-schemes">See schemes in Jwero</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about running one properly.', '')}${L.faqBlock(schemeGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site's own WhatsApp button runs on Jwero — <a href="#" data-wa="blog-scheme">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Digitise your existing scheme book.', 'Bring your current paper register — we’ll show what it looks like moved onto reminders and transparent balances.', 'blog-scheme')}
`,
};

module.exports = [blogHub, whatsappGuide, deadStockGuide, schemeGuide];
