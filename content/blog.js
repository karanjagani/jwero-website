const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Blog', '/blog'], [label]];
const PUBLISHED = '2026-07-20';
const REVIEWED = '2026-10-06'; // every post was reviewed against the product on this date

function postSchema(headline, description) {
  return {
    '@context': 'https://schema.org', '@type': 'BlogPosting',
    headline, description,
    datePublished: PUBLISHED, dateModified: REVIEWED,
    author: { '@type': 'Organization', name: 'Jwero editorial team', url: 'https://jwero.ai/company' },
    publisher: { '@type': 'Organization', name: 'Jwero' },
  };
}

function postMeta(readMins, cluster) {
  return `<p class="post-meta"><span>${cluster}</span> · <span>${readMins} min read</span> · <span>By the Jwero editorial team</span> · <span>Published July 2026</span> · <span>Reviewed October 2026</span></p>`;
}

// Blog hub, redesigned 2026-10-07 for finding a guide fast: search, topic
// filters, goal shortcuts and one grid of every article with its cover.
// Without JS every card is visible; site.js adds search, filters and "show more".
const blogHub = {
  slug: 'blog',
  title: 'Jwero Blog: Guides for Jewellery Business Owners | Jwero',
  description: 'Practical guides for jewellery business owners: WhatsApp selling, gold pricing and GST, schemes, girvi, stock, CRM, marketing and choosing software. Search or filter by topic.',
  breadcrumbs: [['Home', '/'], ['Blog']],
  body: '',
};
const HUB_TOPICS = [
  ['sell', 'Selling and leads'], ['wa', 'WhatsApp'], ['mkt', 'Marketing'], ['crm', 'Customers and CRM'],
  ['online', 'Online and catalogues'], ['stock', 'Stock, POS and ERP'], ['rules', 'Pricing, GST and rules'],
  ['ops', 'Schemes, girvi and workshop'], ['buy', 'Choosing software and AI'],
];
const LEGACY_TOPIC = { 'Leads and conversion': 'sell', 'Retail operations and sales': 'sell', WhatsApp: 'wa', 'Marketing and campaigns': 'mkt', 'CRM and customers': 'crm', 'Ecommerce and websites': 'online', 'Product data and catalogues': 'online', 'Inventory, POS and ERP': 'stock', 'Order management': 'stock', 'Technology and strategy': 'buy', AI: 'buy' };
const guessTopic = (s) => (/gst|price|making-charge|huid|hallmark|cash-limit|e-way|e-invoic|legal|old-gold/.test(s) ? 'rules'
  : /scheme|girvi|karigar|wastage|gold-loss|job-work|memo|diamond|gemstone|repair|fine-weight|exhibition|custom/.test(s) ? 'ops'
  : /whatsapp/.test(s) ? 'wa' : /instagram|marketing|birthday|wedding|ads|social|festival|diwali/.test(s) ? 'mkt'
  : /crm|customer|loyalty/.test(s) ? 'crm' : /catalog|online|ecommerce|website|shopify/.test(s) ? 'online'
  : /stock|inventory|tally|pos|erp|barcode|branch|gold-rate|transfer/.test(s) ? 'stock'
  : /cost|best|compare|checklist|software|ai|start/.test(s) ? 'buy' : 'sell');
const HUB_FEATURED = ['blog/whatsapp-for-jewellers-guide', 'blog/how-to-calculate-gold-jewellery-price', 'blog/gold-savings-scheme-guide'];
const HUB_GOALS = [
  ['sell', 'Get more customers', 'WhatsApp, leads, walk-ins and follow-ups.'],
  ['rules', 'Price and stay compliant', 'Gold price, making charges, GST, HUID and cash rules.'],
  ['ops', 'Run the shop and workshop', 'Schemes, girvi, karigars, memo, stones and repairs.'],
  ['buy', 'Choose the right software', 'Costs, comparisons, checklists and AI.'],
];
const hubCovers = (() => { try { return new Set(require('../assets/covers/index.json')); } catch (e) { return new Set(); } })();
const hubEsc = (s) => String(s || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
const hubCard = (a) => `<a class="bl-card" href="${a.href}" data-t="${a.t}" data-q="${hubEsc((a.title + ' ' + a.desc).toLowerCase())}">${a.cover ? `<img src="${a.cover}" alt="" loading="lazy" width="1200" height="630">` : ''}<span class="bl-tag">${a.tl}</span><b>${hubEsc(a.title)}</b><span class="bl-desc">${hubEsc(a.desc)}</span></a>`;
function hubBody(posts) {
  const TL = Object.fromEntries(HUB_TOPICS);
  const seen = new Set();
  const all = [];
  const add = (slug, title, desc, t) => {
    if (seen.has(slug)) return; seen.add(slug);
    const key = slug.replace(/\//g, '--');
    all.push({ slug, href: '/' + slug, title: String(title).split(' | ')[0], desc: String(desc || '').replace(/\s+/g, ' ').slice(0, 220), t, tl: TL[t], cover: hubCovers.has(key) ? `/assets/covers/${key}.svg` : '' });
  };
  posts.forEach((p) => add(p.slug, p.title, p.description, guessTopic(p.slug)));
  require('./guides').filter((p) => /^guides\/./.test(p.slug)).forEach((p) => add(p.slug, p.title, p.description, 'buy'));
  require('./legacy-blog').POSTS.forEach((p) => add(p.slug, p.title, p.description, LEGACY_TOPIC[p.topic] || guessTopic(p.slug)));
  const count = (t) => all.filter((a) => a.t === t).length;
  const featured = HUB_FEATURED.map((s) => all.find((a) => a.slug === s)).filter(Boolean);
  return `
<section class="hero bl-hero"><div class="container hero-inner">
  <p class="eyebrow">THE JWERO BLOG</p>
  <h1>Guides for jewellery business owners.</h1>
  <p class="sub">${all.length} practical guides on selling, pricing, GST, schemes, stock and software. Search, or pick a topic.</p>
  <form class="bl-search" role="search" onsubmit="return false"><label for="bl-q" class="sr-only">Search guides</label><input id="bl-q" type="search" placeholder="Search: GST on making charges, girvi interest, WhatsApp…" autocomplete="off" data-bl-q></form>
</div></section>
<section class="section bl-wrap" data-blog-hub>
<div class="container">
  <nav class="bl-chips" aria-label="Filter by topic"><button type="button" class="is-on" data-bl-t="">All <i>${all.length}</i></button>${HUB_TOPICS.map(([k, l]) => `<button type="button" data-bl-t="${k}">${l} <i>${count(k)}</i></button>`).join('')}</nav>
  <div class="bl-start" data-bl-start>
    <div class="section-head"><p class="eyebrow">START HERE</p><h2>Most read.</h2></div>
    <div class="bl-grid bl-grid-3">${featured.map(hubCard).join('')}</div>
    <div class="section-head" style="margin-top:44px"><p class="eyebrow">BY GOAL</p><h2>What do you want to get done?</h2></div>
    <div class="bl-goals">${HUB_GOALS.map(([k, t, d]) => `<button type="button" data-bl-t="${k}"><b>${t}</b><span>${d}</span><i>${count(k)} guides →</i></button>`).join('')}</div>
  </div>
  <div class="section-head" style="margin-top:44px"><p class="eyebrow">ALL GUIDES</p><h2 data-bl-title>Every guide.</h2><p class="bl-count" aria-live="polite" data-bl-count>${all.length} guides</p></div>
  <div class="bl-grid" data-bl-grid>${all.map(hubCard).join('')}</div>
  <p class="bl-empty" data-bl-empty hidden>No guide matches that yet. <a href="#" data-wa="blog-hub">Ask us on WhatsApp</a> and we will answer, and may write it.</p>
  <p class="bl-more"><button type="button" class="btn btn-ghost" data-bl-more hidden>Show more guides</button></p>
</div>
</section>
${L.section(`${L.sectionHead('WORK IT OUT', 'Calculators jewellers use.', '')}<div class="erp-map">${[['/tools/dead-stock-calculator', 'Dead stock cost'], ['/tools/gold-scheme-calculator', 'Gold scheme maturity'], ['/tools/gold-loss-calculator', 'Gold loss in manufacturing'], ['/tools/whatsapp-revenue-estimator', 'WhatsApp revenue'], ['/count-your-team', 'Count your team and price'], ['/tools', 'Every tool']].map(([h, t]) => `<a href="${h}"><b>${t}</b><span>Calculator</span></a>`).join('')}</div>`, { tone: 'tint' })}
${L.ctaBand('Did not find your question?', 'Ask us on WhatsApp. We answer, and the best questions become the next guide.', 'blog-hub')}
`;
}

// ---------------------------------------------------------------- Article 1: WhatsApp
const whatsappGuideFaqs = [
  { q: 'Is the official WhatsApp Business API different from the WhatsApp Business app?', a: 'Yes. The free Business app is for solo or small-team use on one phone. The official Business API is what platforms like Jwero build on — it supports approved message templates, multiple team members in one inbox, and the compliance discipline that keeps an account from getting flagged.' },
  { q: 'What actually gets a business WhatsApp number banned or restricted?', a: 'Almost always: unofficial bulk-messaging tools that spoof the app, sending outside Meta’s approved-template rules, ignoring opt-outs, or blasting contacts who never consented. The official API with approved templates and consent tracking is built specifically to avoid this.' },
  { q: 'Do I need a developer to set up the official API?', a: 'Not if you use a platform built on top of it — the technical registration, template approval and number migration are handled for you, and you keep the number you already use.' },
];

const whatsappGuide = {
  slug: 'blog/whatsapp-for-jewellers-guide',
  title: 'WhatsApp for Jewellers: The Complete Selling Guide | Jwero',
  description: 'A guide to selling jewellery on WhatsApp: official API vs personal number, catalogue pricing, reply speed, appointments, payments, and costly mistakes to avoid.',
  breadcrumbs: BC('WhatsApp for Jewellers Guide'),
  schema: postSchema('WhatsApp for Jewellers: The Complete Guide', 'A practical guide to selling jewellery on WhatsApp — official API vs personal number, catalogue pricing, reply speed, and common mistakes.'),
  faqs: whatsappGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · WHATSAPP FOR JEWELLERS',
  h1: 'WhatsApp for Jewellers: The Complete Guide',
  sub: 'Jewellery is sold on trust and conversation — which is exactly what WhatsApp is built for. Here’s how to actually run a jewellery business on it, not just have a number customers can message.',
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
  <p><strong>No plan for after-hours enquiries.</strong> A jewellery store is open maybe 10–12 hours; WhatsApp enquiries don’t stop at closing time. Every enquiry that waits until morning for a reply is a chance for it to have already been answered, accurately, by someone else.</p>
  <p><strong>Selling without the record behind it.</strong> Catalogue shares, quotes and appointments that live only in the chat thread, disconnected from inventory, scheme balances or purchase history.</p>

  <h2>What a proper setup looks like</h2>
  <p>Official API, on the number customers already have. A live-priced catalogue that’s always correct when opened. A shared team inbox so coverage doesn’t depend on one phone. A first response, drafted quickly, approved by a person before it sends, so an 11pm enquiry doesn’t sit unanswered until morning. And underneath all of it, one customer record that the chat, the catalogue and the sale all write to, so the relationship compounds instead of resetting every time.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('SEE IT WORKING', 'This guide is written by the team behind the button below.', 'Jwero’s own WhatsApp line runs on the official API, catalogue-linked pricing and the approval-gated AI reply described above — not a hypothetical.')}
  <p><a class="btn btn-ghost" href="/products/whatsapp">See WhatsApp Commerce in Jwero</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about setup and bans.', '')}${L.faqBlock(whatsappGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="blog-whatsapp">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

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
  title: 'Dead Stock in Jewellery: How to Calculate and Clear It | Jwero',
  description: 'A practical guide to dead stock in jewellery retail: what counts as dead stock, its real carrying cost, and how to clear it without a fire sale.',
  breadcrumbs: BC('Dead Stock Guide'),
  schema: postSchema('Dead Stock in Jewellery Business: How to Calculate It and Clear It', 'What counts as dead stock in jewellery, how to calculate its carrying cost, and how to clear it without a fire sale.'),
  faqs: deadStockGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · DEAD STOCK',
  h1: 'Dead Stock in Jewellery Business: Calculate It, Then Clear It',
  sub: 'Idle inventory is the quietest expense in a jewellery business — no invoice arrives for it, so it rarely gets budgeted against. Here’s how to see the real number, and what to do once you see it.',
  secondary: { href: '/tools/dead-stock-calculator', label: 'Run the calculator' },
})}
${L.section(postMeta(8, 'Dead Stock'))}

${L.section(
  `<div class="post-body">
  <h2>What actually counts as dead stock</h2>
  <p>A common working definition used across the trade: pieces unsold after 180 days. It’s a starting point, not a universal rule — bridal and high-value solitaire categories naturally move slower than everyday gold pieces, so the useful version of this definition is set per category, not applied as one blanket number across an entire showcase.</p>
  <p>What matters more than the exact cutoff is having one at all, tracked consistently, so "slow" and "dead" are measured the same way every month rather than judged by feel.</p>

  <h2>Why it’s worse in jewellery than in almost any other retail category</h2>
  <p>Jewellery inventory ties up an unusually large amount of capital per square foot of shelf space, and most of that capital is financed: through working-capital loans, gold loan schemes, or the owner’s own money that could be earning a return elsewhere. Every month a piece sits unsold, it’s quietly costing the business the financing rate on that capital, plus insurance, storage and handling — and none of that shows up as a line item anywhere.</p>
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

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="blog-deadstock">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

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
  title: 'Gold Savings Schemes for Jewellers: How to Run One | Jwero',
  description: 'A guide to jewellery gold savings schemes: why they lock in future revenue, why registers leak members through drift, and what digital collection changes.',
  breadcrumbs: BC('Gold Savings Scheme Guide'),
  schema: postSchema('Gold Savings Schemes for Jewellers: A Practical Guide to Running One Digitally', 'Why gold savings schemes lock in future revenue, why paper registers leak members, and what digital collection changes.'),
  faqs: schemeGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · GOLD SAVINGS SCHEMES',
  h1: 'Gold Savings Schemes: A Practical Guide to Running One Digitally',
  sub: 'A scheme book is a revenue engine wearing a savings costume — but only if the collection discipline behind it actually holds. Here’s how the mechanics work, and where paper registers quietly leak.',
  secondary: { href: '/tools/gold-scheme-calculator', label: 'Run the calculator' },
})}
${L.section(postMeta(8, 'Gold Savings Schemes'))}

${L.section(
  `<div class="post-body">
  <h2>Why a scheme is a revenue engine, not just a savings product</h2>
  <p>A gold savings scheme looks, from the customer's side, like a disciplined way to save toward a future purchase. From the business's side, it's something more specific: a corpus collected this year that becomes a near-guaranteed showcase visit next year.</p>
  <p>Members overwhelmingly redeem their corpus in person, at the counter — and typically add money at maturity to reach the piece they actually want, rather than spending exactly the corpus amount and no more. The scheme book you build this year is next year's booked traffic, collected in advance.</p>

  <h2>The classic structure, and why it's shaped that way</h2>
  <p>The most common scheme structure is an 11-instalment plan: the member pays a fixed amount each month for eleven months, and redeems the full twelve-month value (or an equivalent) in jewellery. The structure rewards completion without asking the business to carry an open-ended liability, and it gives members a clear, short horizon rather than an indefinite savings commitment. Specific terms, instalment counts, bonus structures, lock-in periods, vary business to business, and should be set with your own compliance advisor rather than copied from a competitor's scheme.</p>

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

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="blog-scheme">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('Digitise your existing scheme book.', 'Bring your current paper register — we’ll show what it looks like moved onto reminders and transparent balances.', 'blog-scheme')}
`,
};

// ---------------------------------------------------------------- Article 4: Tally coexistence
const tallyGuideFaqs = [
  { q: 'Does Jwero auto-post my invoices to Tally?', a: 'No — not yet. Jwero connects to Tally, imports customer and item masters and checks records against Tally. Transactions — invoices, sales, payments — still need a manual voucher entry in Tally today. Auto-posting transactions is on our roadmap, not something we claim is shipped.' },
  { q: 'Do I need to migrate my Tally data into Jwero?', a: 'No. Tally stays exactly as it is — same file, same login, same place your CA already works. Jwero connects alongside it through a local connector agent and keeps masters in sync; nothing gets moved out of Tally.' },
  { q: 'What if my CA or muneem refuses to use anything new?', a: 'They don’t have to. Nothing changes about how they work inside Tally — the same voucher entry, the same GST filing, the same reports. The only difference is that customer and item records arrive already matched instead of being typed in from a register.' },
];

const tallyGuide = {
  slug: 'blog/jewellery-software-and-tally',
  title: 'Jewellery Software and Tally: What Should and Shouldn’t Move | Jwero',
  description: 'A plain guide to what syncs between jewellery software and Tally Prime, what needs a manual voucher, and how to raise this with your accountant.',
  breadcrumbs: BC('Jewellery Software and Tally'),
  schema: postSchema('Jewellery Software and Tally: What Should and Shouldn’t Move', 'What syncs automatically between jewellery software and Tally, what still needs a manual voucher, and how to talk to your CA about it.'),
  faqs: tallyGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · JEWELLERY SOFTWARE AND TALLY',
  h1: 'Jewellery Software and Tally: What Should and Shouldn’t Move',
  sub: 'Every conversation about new software in a jewellery business eventually reaches the same wall: "what does the accountant say?" Here’s exactly what syncs, what doesn’t, and how to have that conversation without guessing.',
  secondary: { href: '/platform/integrations/tally', label: 'See the Tally integration' },
})}
${L.section(postMeta(7, 'Jewellery Software and Tally'))}

${L.section(
  `<div class="post-body">
  <h2>Why the accountant is the real gatekeeper</h2>
  <p>The owner usually decides they want better software faster than anyone else in the business. What actually determines whether that decision survives is a much quieter conversation with the muneem or the CA — the person who has spent years keeping the books consistent and has no reason to trust a new system near them. That hesitation is rarely about the technology itself. It’s about job security, and about whether the numbers they’re accountable for stay reliable.</p>
  <p>Treating that concern as an obstacle to route around is a mistake. It’s the actual decision point, and it deserves a straight answer rather than a sales pitch.</p>

  <h2>What actually syncs automatically</h2>
  <p>Jwero connects to Tally Prime through a local connector agent — a small piece of software that runs alongside Tally, pairs with a one-time code, and authenticates with a hashed token after that. It checks in on a regular heartbeat so the connection can be trusted to actually be live, not just configured once and forgotten.</p>
  <p>What moves through that connection is customer and item master data, imported into Jwero and checked against Tally, with mapping rules that match records that matches records even when names or codes don’t line up exactly between the two systems. If a customer exists in Tally under a slightly different spelling than in Jwero, the mapping engine is built to catch that rather than create a duplicate.</p>
  <p>For businesses that run on Zoho Books instead of, or alongside, Tally, the same idea applies through a Zoho connection made over OAuth.</p>

  <h2>What still needs a manual voucher, and why that’s fine for now</h2>
  <p>Here’s the part worth stating plainly rather than glossing over: transactions do not auto-post to Tally today. An invoice raised in Jwero does not turn into a Tally voucher by itself. The masters sync automatically — the transaction itself still needs to be entered as a voucher in Tally, by hand, the same way it always has been.</p>
  <p>That’s a real limitation, not a small print footnote, and it’s on our roadmap to close. Until it is, the honest description of where things stand is: masters are imported and checked, transactions are manual. Anyone who tells a jeweller otherwise is describing a future version, not the current one.</p>

  <h2>GST invoicing: who does what</h2>
  <p>Jwero generates GST-compliant invoices at the live gold rate, with the CGST/SGST/IGST breakup calculated at the point of sale. That part happens inside Jwero, at the counter, at the moment the rate matters.</p>
  <p>Statutory GST filing, and e-invoice or IRN generation, stay exactly where they are today — inside Tally, or with your CA. E-invoice automation is a roadmap item, not something shipped, and this guide isn’t going to pretend otherwise. The line is simple: Jwero handles the invoice at the point of sale; Tally and your CA handle the statutory filing that follows.</p>

  <h2>How to have this conversation with your CA</h2>
  <p>The version of this conversation that actually works is narrow and specific, not a broad pitch about "modernising the business." Show them three things: the books don’t move. Tally stays exactly where it is, same file, same login. Master data arrives pre-matched instead of retyped from a paper register or a WhatsApp message, which is fewer manual entry errors, not more risk. And transactions are still their entry, in their voucher format, until auto-posting ships — nothing is being taken out of their hands today.</p>
  <p>That’s a conversation about reducing their typing, not replacing their judgment. It tends to land very differently than "we’re bringing in new software."</p>

  <h2>What changes for the accountant, in one sentence</h2>
  <p>Nothing changes about their statutory workflow — the only thing that changes is where the reference data comes from.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('KEEP YOUR BOOKS, CHANGE YOUR EARNINGS', 'Jwero isn’t an accounting replacement — it’s the revenue layer Tally never had.', 'The full technical detail on the connector, pairing, and mapping rules lives on the integration page built for this exact conversation with your accountant.')}
  <p><a class="btn btn-ghost" href="/platform/integrations/tally">See the Tally integration in detail</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about the Tally connection.', '')}${L.faqBlock(tallyGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="blog-tally">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Bring your CA into the conversation directly.', 'We’ll walk through the connector, the mapping rules, and exactly what stays manual — with them in the room.', 'blog-tally')}
`,
};

// ---------------------------------------------------------------- Article 5: Gold-loss control
const goldLossGuideFaqs = [
  { q: 'What’s a normal wastage percentage?', a: 'There isn’t one number that applies across the trade — it varies enormously by product type, casting method and finishing process. A commonly cited illustrative range is 0.5–2% of metal processed, but that’s a rough guide, not a benchmark to chase. The point of a working ledger isn’t to hit an industry average — it’s to know your own number, per stage and per karigar, and manage against that.' },
  { q: 'Does this stop karigars from taking gold?', a: 'No system replaces trust entirely, and no ledger claims to. What a per-movement weight chain plus per-karigar variance tracking does is make discrepancies visible immediately — at the next weighing, not at year-end — rather than eliminate the possibility of loss outright.' },
  { q: 'Do you predict wastage with AI?', a: 'No. What’s described here is measurement and ledger-based — recording every movement, attributing it, and surfacing variance — not a predictive or forecasting model. If a tool claims to predict wastage before it happens, ask exactly what it’s measured against, because today’s tooling in this space is about visibility, not prediction.' },
];

const goldLossGuide = {
  slug: 'blog/gold-loss-wastage-control-jewellery-manufacturing',
  title: 'Gold Loss and Wastage Control in Jewellery Manufacturing | Jwero',
  description: 'A guide to gold loss in jewellery manufacturing: per-movement weight tracking, per-karigar attribution, the old-gold chain, and what a ledger doesn’t fix.',
  breadcrumbs: BC('Gold Loss Control Guide'),
  schema: postSchema('Gold Loss (Wastage) Control in Jewellery Manufacturing: A Working Ledger', 'How to measure and control gold loss in jewellery manufacturing with per-movement, per-karigar weight tracking — and what it does and doesn’t fix.'),
  faqs: goldLossGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · MANUFACTURING',
  h1: 'Gold Loss (Wastage) Control in Jewellery Manufacturing: A Working Ledger',
  sub: 'Wastage has always happened at every stage of manufacturing. The question that actually matters isn’t whether it happens — it’s whether anyone can see where, and with whom.',
  secondary: { href: '/solutions/manufacturers', label: 'See it for manufacturers' },
})}
${L.section(postMeta(8, 'Manufacturing'))}

${L.section(
  `<div class="post-body">
  <h2>The oldest trust problem in the trade</h2>
  <p>Gold loss, or wastage, happens at every stage a piece passes through on its way from raw metal to finished jewellery: issue to a karigar, casting, filing and polishing, setting. Some of it is physical and unavoidable — metal genuinely lost as dust, scrap and process loss. Some of it is simply never accounted for, because the traditional way of tracking it is memory, or a paper register kept per karigar, updated when someone remembers to.</p>
  <p>An illustrative range often cited in the trade is 0.5–2% of metal processed — worth treating as a rough guide, not a guarantee, since it varies by product type and process. The real problem isn’t the existence of that range. It’s that most businesses have no way of knowing where inside that range they actually sit, or whether one workshop, one karigar, or one process is running consistently higher than the rest.</p>

  <h2>Why wastage hides in an annual number</h2>
  <p>Most manufacturing operations only see wastage as a single figure at the end of a job, or worse, at an annual stocktake — the difference between metal issued and metal returned across an entire year of production. That single number is almost useless for control, because it collapses dozens of stages, dozens of karigars and hundreds of individual jobs into one figure with no way to trace back where the loss actually occurred.</p>
  <p>A pattern — one karigar consistently running high wastage on filigree work, or one casting batch losing more than the others — is real information. Buried inside an annual average, it’s invisible. By the time it surfaces, months of the same pattern have already repeated.</p>

  <h2>What "per movement, per karigar" actually means</h2>
  <p>A working system computes wastage at every point metal moves, not just at the end of a job: issued to a karigar, returned from a karigar, moved between production stages. Each movement is weighed and logged, and the difference between what went out and what came back is attributed — to a karigar, to a stage, to a job.</p>
  <p>That attribution is what turns wastage from a single opaque number into a set of comparable figures: this karigar on this type of work, this stage across all jobs, this month against last month. None of that changes what happened physically — it changes whether anyone can see it happened, and act on it while the job is still fresh rather than after twelve months have passed.</p>

  <h2>The old-gold and exchange chain</h2>
  <p>Old-gold and exchange transactions carry their own version of the same risk, because metal changes form multiple times before it re-enters usable stock: buyback intake, a melt lot, refining, and recovered metal valued back into raw-material inventory. Each of those steps is a point where weight can be under-recorded or simply not tracked at all.</p>
  <p>A working chain records weight at every one of those steps: what came in at intake, what went into the melt lot, what came back from refining, what was valued into stock. That makes the whole path from a customer’s old piece to usable raw material traceable, not a black box between "customer handed it over" and "stock went up."</p>

  <h2>The recovery desk, and the outside-karigar problem</h2>
  <p>Scrap and filings generated during production are real recoverable metal, not a rounding error — and if there’s no dedicated place to book that recovery, it tends to just disappear into "shrinkage," indistinguishable from genuine loss. A recovery desk that books scrap and recovered metal as its own step closes that gap.</p>
  <p>The same discipline matters most with outside karigars — job-work sent beyond the workshop’s own walls, where oversight is naturally lighter. Production orders moving through a multi-stage routing, tracked on a WIP board so every piece’s location is known, combined with karigar allocation scored to match the right artisan to the job, and job-work issue and receive reconciled by weight on both ends — that’s what keeps outside work held to the same standard as work done in-house.</p>

  <h2>What a working ledger changes, and what it doesn’t</h2>
  <p>Said plainly: a ledger like this doesn’t reduce physical wastage on its own. Weighing metal more carefully at more points doesn’t make less of it disappear in the process — the filing, the casting sprues, the polishing loss all still happen exactly as before. What changes is visibility: wastage attributed per stage and per karigar, instead of buried in a number nobody can trace.</p>
  <p>That visibility is what actually drives wastage down over time — not because the ledger fixes anything by itself, but because a karigar who knows their numbers are watched works differently than one who knows the register only gets checked once a year, and a manager who can see a stage running high can actually investigate it instead of guessing.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('FOR MANUFACTURERS', 'Built for the shop floor, not just the ledger.', 'Production routing, WIP tracking, karigar allocation and job-work reconciliation, alongside the weight chain described above.')}
  <p><a class="btn btn-ghost" href="/solutions/manufacturers">See the manufacturing workflow in Jwero</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about wastage and control.', '')}${L.faqBlock(goldLossGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="blog-goldloss">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('See your own wastage, per stage and per karigar.', 'Bring your current issue-and-return register — we’ll show what it looks like tracked per movement instead of per year.', 'blog-goldloss')}
`,
};

// ---------------------------------------------------------------- Article 6: Repair custody chain
const repairGuideFaqs = [
  { q: 'What’s the single most important thing to record at intake?', a: 'Weight and a stone description, together. Neither alone is airtight — weight can shift slightly with cleaning, and a stone description alone doesn’t catch a swap — but recorded together at the moment the piece is handed over, they make a later dispute nearly impossible to argue either way.' },
  { q: 'Do I need software to do this?', a: 'No. The discipline works on paper — an intake slip with a weight, a stone chart and a condition note, filed against a job number. Software doesn’t create the discipline, it just makes it faster to apply consistently and much harder to lose a slip in a drawer.' },
  { q: 'Does Jwero have a repairs module today?', a: 'This discipline — intake, custody logging, QC reconciliation, re-hallmark gates and warranty tracking — is built and tested in the product. It isn’t yet a self-serve toggle every customer can switch on; ask us directly about availability for your business rather than assuming it’s live for everyone today.' },
];

const repairGuide = {
  slug: 'blog/jewellery-repair-management-custody-chain',
  title: 'Jewellery Repair Management: The Custody-Chain Method | Jwero',
  description: 'Why jewellery repair intake needs a documented custody chain — condition notes, a stone chart and weight record — to prevent disputes, with or without software.',
  breadcrumbs: BC('Repair Management Guide'),
  schema: postSchema('Jewellery Repair Management: The Custody-Chain Method', 'Why repair intake needs a documented custody chain to prevent disputes, and what it should capture at every stage.'),
  faqs: repairGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · REPAIR MANAGEMENT',
  h1: 'Jewellery Repair Management: The Custody-Chain Method',
  sub: 'A repair job is the one moment a customer hands you their gold and walks away with nothing but trust. Here’s the discipline that makes that trust provable, not just assumed.',
  secondary: { href: '/products/crm', label: 'See the customer record in Jwero' },
})}
${L.section(postMeta(7, 'Repair Management'))}

${L.section(
  `<div class="post-body">
  <h2>Why "where is my ring?" is the most dangerous question in the business</h2>
  <p>Most disputes in a jewellery business don't happen at the point of sale — they happen at the point of return. A customer drops off a ring for resizing, and three weeks later asks a version of "where is my ring?" that really means: prove to me this is the same ring, with the same stone, the same weight, that I handed you. If the honest answer is "we're fairly sure," the business has already lost the argument, even when nothing actually went wrong.</p>
  <p>The problem isn't usually dishonesty on either side. It's that most repair workflows don't produce a record precise enough to settle the question either way — so it comes down to whoever argues more confidently.</p>

  <h2>What custody chain actually means</h2>
  <p>A custody chain is a documented answer, at every point in time, to "who is holding this specific piece, and what condition was it in when they took it." It starts the moment the piece is handed over at the counter and doesn't end until it's handed back — every stage in between logged, not remembered.</p>
  <p>The point isn't paperwork for its own sake. It's that a dispute becomes a five-minute lookup instead of a he-said-she-said conversation that damages a relationship no matter how it ends.</p>

  <h2>Intake: the three things that prevent a dispute</h2>
  <p>Everything downstream depends on what gets captured at the moment the customer hands the piece over. Three things matter, and skipping any one of them leaves a gap a dispute can live in.</p>
  <p><strong>Condition notes and photos.</strong> Existing scratches, a slightly bent prong, a scuffed band — recorded before any work starts, so nobody has to guess later whether damage was pre-existing or happened in-house.</p>
  <p><strong>A stone chart.</strong> What stones are present, and a plain description of each — approximate size, colour, cut. Not a full gemological certificate, just enough that a stone can be recognised as the same stone on return.</p>
  <p><strong>A weight chain.</strong> The piece's weight, recorded at intake, before it goes anywhere near a workbench. Weight is the hardest thing to argue with — it's a number, not an impression.</p>

  <h2>Every handoff, logged</h2>
  <p>A repair isn't one step, it's a lifecycle: create the job, intake the piece, work in progress, mark it ready, deliver it back — with an estimate and the customer's approval sitting before any work begins, not after. Along the way, the piece itself moves: counter to factory, factory to counter, sometimes counter to counter between branches.</p>
  <p>Each of those movements is a moment where custody changes hands, and each one should be logged against the job — not assumed. A piece that spent two days at a factory with no logged handoff is a piece nobody can vouch for during those two days, even if nothing went wrong.</p>

  <h2>QC before it goes back</h2>
  <p>Before a repaired piece reaches the counter for delivery, it should go through a reconciliation step: the same stones, described the same way, and the same weight recorded at intake, checked against what's now in hand. This is the step that actually prevents "you swapped my stone" — not because it stops a genuine mistake from happening, but because it catches the mistake before the customer does, and gives the business a record either way.</p>
  <p>If the piece's hallmarking status needs to change, after resizing or repair work that alters the metal, that's a separate gate before delivery too, not something folded quietly into "the job's done."</p>

  <h2>Warranty as a reason to see them again</h2>
  <p>A repair job doesn't have to end at delivery. A warranty or annual maintenance plan attached to the piece, with a defined entitlement and an inspection schedule, gives the business a structured, non-awkward reason to bring the customer back in six or twelve months, rather than hoping they remember to come in on their own.</p>
  <p>It also means the next time that piece needs work, there's already a record of its condition, its stones and its weight from the last visit — the custody chain compounds instead of starting from zero each time.</p>

  <h2>Starting simple, before software</h2>
  <p>None of this requires a system to begin. An intake slip with a weight, a short stone description and a couple of photos, filed against a job number, is the custody chain in its simplest form — and it's enough to settle most disputes before they escalate. Software doesn't create this discipline; it just makes it faster to apply on every job and much harder for a slip to go missing in a drawer.</p>
  <p>That discipline — intake through custody logging through QC reconciliation — is what we're building into Jwero. It's real and it's been tested, but it isn't a self-serve screen every customer can switch on today. If repair volume is a real part of your business, it's worth asking us directly where that stands rather than assuming either way.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('ONE CUSTOMER RECORD', 'A repair job should live on the same record as everything else.', 'Intake notes, stone charts and weight history mean more when they sit next to the same customer’s purchase history and scheme balances — not in a separate paper file.')}
  <p><a class="btn btn-ghost" href="/products/crm">See the customer record in Jwero</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about running this properly.', '')}${L.faqBlock(repairGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="blog-repair">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('Ask us about repair tracking.', 'Tell us how repair volume moves through your shop today — we’ll tell you honestly where the custody-chain discipline stands in the product.', 'blog-repair')}
`,
};

// ---------------------------------------------------------------- Article 7: HUID & hallmarking
const huidGuideFaqs = [
  { q: 'Does this replace BIS registration or hallmarking itself?', a: 'No. This is about record-keeping discipline for pieces that already go through hallmarking, not the hallmarking process or BIS registration itself — confirm specific regulatory requirements directly with BIS rather than from this guide.' },
  { q: 'What happens if a piece’s HUID isn’t recorded?', a: 'It becomes a piece with no traceable link back to its hallmarking, which turns a routine audit question into a search — through paper registers, memory, or the hallmarking centre’s own records, none of which are fast when someone is standing at the counter asking.' },
  { q: 'How does this help if we get an actual audit visit?', a: 'The hallmark/HUID register per piece, the custody chain for anything on the premises, and activity logs for sensitive changes are pulled directly — they’re retrieved, not reconstructed from scattered paper or whoever happens to remember.' },
];

const huidGuide = {
  slug: 'blog/huid-hallmarking-records-audit-checklist',
  title: 'HUID and Hallmarking Records: The Audit-Day Checklist | Jwero',
  description: 'A guide to keeping hallmarking and HUID records organized — so a BIS audit or compliance check is a quick retrieval, not a scramble through paper registers.',
  breadcrumbs: BC('HUID & Hallmarking Records'),
  schema: postSchema('HUID and Hallmarking Records: The Audit-Day Checklist', 'How to keep hallmarking and HUID records organized so a compliance check is a retrieval, not a scramble.'),
  faqs: huidGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · HUID & HALLMARKING',
  h1: 'HUID and Hallmarking Records: The Audit-Day Checklist',
  sub: 'A hallmarking audit shouldn’t be a scramble through drawers and old registers. Here’s what actually needs to be retrievable, and how to keep it that way every day, not just before an inspection.',
  secondary: { href: '/products/inventory', label: 'See inventory tracking in Jwero' },
})}
${L.section(postMeta(7, 'Compliance & Records'))}

${L.section(
  `<div class="post-body">
  <h2>Why audit day is stressful for most jewellery businesses</h2>
  <p>The stress of a compliance check rarely comes from having done anything wrong. It comes from not being able to prove, quickly, that things were done right. A hallmarking record that exists but is scattered across a physical register, a courier receipt, and someone's memory of which lot went to the hallmarking centre in March is functionally the same as no record at all when someone is standing at the counter asking for it now.</p>
  <p>This guide isn't about hallmarking law — the specifics of what BIS requires should be confirmed directly with BIS guidance, not taken from a marketing page. It's about the much narrower, much more fixable problem: keeping the records you already generate organized enough that an audit is a retrieval exercise, not a research project.</p>

  <h2>What actually gets asked for</h2>
  <p>In practice, a compliance check tends to circle around the same few things: which pieces carry a HUID and what it is, where a piece was between leaving the showcase and returning hallmarked, who touched a record and what they changed, and, occasionally, a specific customer's data if a data-subject request applies. None of these are exotic asks. They're the kind of thing that should already exist somewhere in the business. The question is whether "somewhere" means a searchable field or a stack of paper.</p>

  <h2>The hallmark batch workflow, in order</h2>
  <p>Unhallmarked stock is easiest to lose track of at exactly the point it leaves the shop. A workable version of the workflow looks like this: an unhallmarked lot gets flagged in inventory, it's batched together for the trip to the hallmarking centre, custody is recorded on the way out and again on the way back in, each piece's HUID is captured individually once the lot returns, and labels are reprinted before that stock is activated for sale. Every step in that chain is a place where a record either gets created or doesn't — and the ones that don't get created are the ones that turn into gaps later.</p>
  <p>The value of doing this consistently isn't just tidiness. It's that a lot sent out and a lot returned can be reconciled piece by piece, rather than trusted on the basis that it "should all be there."</p>

  <h2>Labels that carry the HUID, not just a price</h2>
  <p>A HUID that lives only on a screen is one query away from being findable — but a HUID printed on the piece's own label, alongside the usual price and weight information, means the identifying detail is sitting at the counter with the piece itself, not somewhere back-office staff have to look it up. Barcode and label printing built from configurable templates makes this a formatting choice rather than a separate process: the same print run that puts a price tag on a piece can put its HUID on there too.</p>
  <p>This matters most in the moment a customer or an inspector picks up a specific piece and asks about it directly — the answer shouldn't require walking to a terminal.</p>

  <h2>Activity logs: proving who changed what, when</h2>
  <p>Records only hold up under scrutiny if they can't be quietly edited after the fact without a trace. An activity log that captures sensitive changes as value diffs — what a field was, what it was changed to, and by whom — turns "I'm fairly sure that's right" into something that can actually be shown. This applies as much to a corrected HUID entry as to a custody update or a stock status change; the point isn't to prevent corrections, it's to make sure every correction is itself part of the record.</p>

  <h2>The five-minute retrieval test</h2>
  <p>A simple way to check where a business actually stands, before an inspector or auditor asks: pick one piece at random and see how long it takes to produce its hallmark and HUID record, its custody chain if it went out for hallmarking, and the activity log showing any changes made to it since. If a specific customer's data needs to be pulled, a DSR export, that should be retrievable too, not reconstructed from memory across systems.</p>
  <p>If that takes five minutes because it's a search across a register, a courier slip and someone's recollection, the records exist but aren't organized. If it takes five minutes because it's a lookup, the discipline is already in place — audit day just becomes a slightly more formal version of a normal Tuesday.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('SEE THE TRACKING', 'This isn’t a separate compliance module — it’s inventory tracking, applied consistently.', 'Hallmark batch workflows, per-piece HUID fields, custody logs and activity diffs are part of how inventory is tracked in Jwero day to day, not a bolt-on for audit season.')}
  <p><a class="btn btn-ghost" href="/products/inventory">See inventory tracking in Jwero</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about records and audits.', '')}${L.faqBlock(huidGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site’s own chat button runs on Jwero — <a href="#" data-wa="blog-huid">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Turn audit day into a quick lookup.', 'Bring your current hallmarking register — we’ll show what it looks like as a searchable record instead.', 'blog-huid')}
`,
};

// ---------------------------------------------------------------- Article 8: Digital catalogue vs PDF
const catalogGuideFaqs = [
  { q: 'Can a customer actually pay through a shared catalogue?', a: 'Yes. Catalogue pages support real checkout — Razorpay and Cashfree integration take the payment directly on the page, and the resulting order syncs into the order-management system rather than landing as a message someone has to key in by hand.' },
  { q: 'Does the price update automatically when gold rates change?', a: 'Yes. With formula pricing — rate × weight + making + stones + wastage — the catalogue resolves the price live, at the moment it’s opened, against the current rate. A link sent this morning shows the correct price this evening too.' },
  { q: 'Is this the same as a full online store?', a: 'Not quite. A catalogue is a curated link sent to one customer — closer to a tray shown to them than a public website. Jwero also has a fuller D2C ecommerce website with cart, wishlist, coupons and express checkout for businesses that want a generic online store on top of this.' },
];

const catalogGuide = {
  slug: 'blog/digital-catalog-vs-pdf-jewellery',
  title: 'Digital Catalogue vs PDF: Why Live Links Sell More | Jwero',
  description: 'Why a live digital catalogue outsells a static PDF or screenshot catalogue for jewellery — live pricing, tracking, and checkout links that sell.',
  breadcrumbs: BC('Digital Catalog vs PDF'),
  schema: postSchema('Digital Catalog vs PDF: Why Shareable Checkout Links Sell More', 'Why a live digital catalogue outsells a static PDF or screenshot catalogue for jewellery — live pricing, tracking, and checkout links.'),
  faqs: catalogGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · DIGITAL CATALOGUE',
  h1: 'Digital Catalog vs PDF: Why Shareable Checkout Links Sell More',
  sub: 'A PDF catalogue is a snapshot that starts going wrong the moment it’s saved. A digital catalogue is a live page — priced correctly whenever it’s opened, and able to take the payment right there. Here’s the actual difference.',
  secondary: { href: '/products/whatsapp', label: 'See WhatsApp Commerce in Jwero' },
})}
${L.section(postMeta(7, 'Digital Catalogue'))}

${L.section(
  `<div class="post-body">
  <h2>The PDF that's already wrong</h2>
  <p>A PDF or screenshot catalogue is accurate exactly once — at the moment it's made. Gold and silver rates move, often twice a day, and every price printed into that file is a snapshot of a rate that no longer applies by the time the customer reopens it, whether that's an hour later or a week later.</p>
  <p>The awkward part isn't the price change itself — rates move, customers understand that. It's finding out mid-conversation that the number they were quoting back has been wrong for days, because nothing about a PDF tells them so.</p>

  <h2>What "live" actually means for a jewellery catalogue</h2>
  <p>A digital catalogue doesn't store a price — it stores a formula: rate × weight + making + stones + wastage. The price shown is resolved at the moment the page is viewed, against the rate live at that moment, whether that's five minutes after the link was sent or three days later. There's no version of a live catalogue that goes stale, because it was never storing a static number to begin with.</p>
  <p>It's shared the way jewellery already gets discussed — a link, a WhatsApp message, or a QR code at the counter — and can sit on a custom domain, built from templates, so it looks like the business's own catalogue rather than a generic page.</p>

  <h2>Sent, not searched for</h2>
  <p>A PDF catalogue and a public online store both share a limitation: the customer has to look through everything to find what they actually want. A catalogue link works differently — it's curated by a staff member for one customer, built around what that specific person asked about, and sent directly to them. It's closer to a tray of pieces pulled for a customer than a shelf they're left to browse alone.</p>
  <p>That distinction matters because it changes what the customer does next. A generic browse-everything page invites scrolling; a personal link invites a decision.</p>

  <h2>Tracking that tells you what a customer actually wants</h2>
  <p>A PDF, once sent, is a black box. There's no way to know if it was opened, skimmed, or ignored. A digital catalogue link can be tracked: who viewed it, and which pieces they actually looked at. That's information a follow-up message can use directly — "I noticed you looked at the second necklace twice" is a far better opener than a generic check-in, and it only exists because the catalogue was live and trackable instead of a file sitting in a chat thread.</p>

  <h2>When a catalogue becomes a sale, not just a look</h2>
  <p>The bigger shift is that a shared catalogue doesn't have to end in a message back to the shop asking "how do I pay." Catalogue pages can take the actual payment: Razorpay and Cashfree integration lets a customer check out on the same link they were browsing, and that order syncs straight into the order-management system, the same way any other order would. The catalogue isn't a brochure that leads to a sale elsewhere; it can be the point of sale itself.</p>
  <p>This is narrower than a full website on purpose. A catalogue is one curated link for one customer's conversation. For businesses that want a broader, generic online store — cart, wishlist, coupons, express checkout — that's a separate, fuller capability sitting alongside this, not a replacement for it.</p>

  <h2>Who this replaces</h2>
  <p>In practice, a live catalogue link replaces three habits: the screenshot of a price list forwarded from an old chat, the printed lookbook that's out of date the season it's handed out, and the static PDF that has to be remade every time rates move or stock changes. None of those were ever wrong on purpose — they were just built for a world where the price didn't need to change between the moment something was sent and the moment it was opened.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('SEE IT WORKING', 'A link, sent on WhatsApp, that can take the payment.', 'This is the same mechanism behind the button on this page — a live-priced catalogue link, shared directly, that a customer can check out on without a website in between.')}
  <p><a class="btn btn-ghost" href="/products/whatsapp">See WhatsApp Commerce in Jwero</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about catalogues and checkout.', '')}${L.faqBlock(catalogGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="blog-catalog">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Send a catalogue that can close the sale itself.', 'Bring a design you’d normally screenshot — we’ll show it as a live, trackable link with checkout built in.', 'blog-catalog')}
`,
};

// ---------------------------------------------------------------- Article 9: CRM vs ERP
const crmErpGuideFaqs = [
  { q: 'Is Jwero a CRM or an ERP?', a: 'Both — but as one system, not two. It remembers your customers like a CRM and runs your operations like an ERP, from the same record, so a sale, a scheme payment and a repair all update the one place your team already looks at.' },
  { q: 'Can I buy just the CRM part and skip the operations side?', a: 'Yes — most businesses start on customer memory, WhatsApp and catalogue (the CRM-adjacent scope) and adopt inventory, purchases and manufacturing job-work later, once the first layer has proven itself.' },
  { q: 'What actually breaks when CRM and ERP are two separate systems?', a: 'The join between them. A quote sent from the CRM references stock the ERP hasn’t confirmed; an ERP delivery note doesn’t update the CRM’s purchase history; a scheme payment in one system doesn’t reflect in the other until someone exports and re-imports. Every one of those gaps is a place a customer detail gets stale or a sale gets delayed.' },
];

const crmErpGuide = {
  slug: 'blog/jewellery-crm-vs-erp-difference',
  title: 'Jewellery CRM vs ERP: The Real Difference | Jwero',
  description: 'What a jewellery CRM actually does versus an ERP, where the line blurs in practice, and why most jewellery businesses end up needing both, not one or the other.',
  breadcrumbs: BC('CRM vs ERP for Jewellery'),
  schema: postSchema('Jewellery CRM vs ERP: The Real Difference', 'What a jewellery CRM does versus an ERP, where the two overlap in a jewellery business, and why most businesses need both working from one record.'),
  faqs: crmErpGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · CRM VS ERP',
  h1: 'Jewellery CRM vs ERP: The Real Difference',
  sub: 'Two acronyms, two software categories, and a lot of vendors happy to let the line blur in whichever direction sells more. Here’s what each one actually does in a jewellery business — and why the two are usually needed together, not instead of each other.',
  secondary: { href: '/platform', label: 'See how Jwero unifies both' },
})}
${L.section(postMeta(7, 'CRM vs ERP for Jewellery'))}

${L.section(
  `<div class="post-body">
  <h2>What a CRM is actually for</h2>
  <p>A Customer Relationship Management system exists to answer one question well: who is this customer, and what do we know about them? In a jewellery business, that means purchase history, gold-scheme balances and instalment status, occasions like birthdays and wedding months, preferred metals and styles, and the thread of past conversations. A CRM is customer-facing by design — it's the system a salesperson, or an AI drafting a follow-up, reaches for before talking to someone.</p>

  <h2>What an ERP is actually for</h2>
  <p>An Enterprise Resource Planning system exists to answer a different question: what is actually happening inside the business? Inventory levels and ageing, purchase orders to karigars and suppliers, manufacturing job-work stages, repair custody, GST invoicing at the live gold rate. An ERP is operations-facing — it's the system that knows whether a piece exists, where it is, and what it cost to make.</p>

  <h2>Where the line blurs, in practice</h2>
  <p>The two categories sound cleanly separated until a real jewellery transaction happens. A customer messages asking about a design (CRM: who is she, what's her taste, what has she bought before) — and the answer to "can we sell her this exact piece" depends on stock the ERP tracks. A scheme instalment (arguably a CRM concern, since it's about the customer relationship) changes a balance that finance and ERP reporting also need to reflect accurately. A repair intake needs both a custody chain (ERP) and a note on the customer's record about why she's back in the shop (CRM).</p>
  <p>In a jewellery business specifically, almost no meaningful action is purely one or the other — which is exactly why running two disconnected systems creates so much quiet friction: someone re-typing between them, or worse, nobody doing that reconciliation at all and the two records slowly drifting apart.</p>

  <h2>Why most jewellery businesses end up needing both</h2>
  <p>A pure CRM with no operational depth eventually can't answer "is this piece actually available" without a phone call to the counter. A pure ERP with no customer memory eventually can't tell a salesperson anything about the person standing in front of them beyond a transaction history table. Jewellery is a relationship trade built on physical, certificated, purity-specific inventory — it genuinely needs both halves, which is why so many businesses end up running a CRM and an ERP side by side, syncing awkwardly through spreadsheets or manual re-entry.</p>

  <h2>The alternative: one record, not two systems</h2>
  <p>Jwero doesn't pick a side of this line, because the line itself is the problem. Customer memory, catalogue, inventory, purchases, repairs and manufacturing job-work all read and write the same record — so a quote references real stock, a scheme instalment updates everywhere at once, and a repair custody entry shows up on the same customer timeline as everything else. It's not a CRM with an ERP bolted on, or the reverse; see <a href="/platform">how the platform is actually structured</a> if the architecture itself is the question.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('SEE BOTH HALVES, ONE RECORD', 'Not a CRM. Not an ERP. The operating system above both.', '')}
  <div class="grid grid-2">
    <div class="card"><h3>The CRM side</h3><p>Customer memory, WhatsApp and Instagram commerce, occasion journeys, scheme balances.</p><a class="card-link" href="/products/crm">See the CRM →</a></div>
    <div class="card"><h3>The ERP side</h3><p>Inventory, purchases, repairs and manufacturing job-work, GST invoicing at live rates.</p><a class="card-link" href="/products/erp">See the ERP →</a></div>
  </div>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about the CRM/ERP split.', '')}${L.faqBlock(crmErpGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="blog-crmerp">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('Stop reconciling two systems.', 'Tell us what your CRM and ERP each hold today — we’ll show you what one record looks like instead.', 'blog-crmerp')}
`,
};

// ---------------------------------------------------------------- Article 10: Buyer's checklist
const checklistGuideFaqs = [
  { q: 'Should I choose jewellery software based on price or fit?', a: 'Fit, then price. The cheapest system that doesn’t handle purity-based pricing or certificate-linked stone value ends up costing more in manual workarounds than the difference in subscription fees ever saved.' },
  { q: 'What if a vendor can’t answer one of these questions?', a: 'That’s useful information, not a dealbreaker by itself — ask them to say so plainly rather than talk around it. A vendor who says "not yet, here’s our roadmap" is more trustworthy than one who claims everything is already built.' },
  { q: 'How long should a proper implementation take?', a: 'For the first working stage — customers imported, WhatsApp connected, catalogue live — days, not months, is a reasonable bar to hold any vendor to.' },
];

const checklistGuide = {
  slug: 'blog/jewellery-software-buyer-checklist',
  title: 'Jewellery Software Buyer’s Checklist: 15 Questions | Jwero',
  description: 'A vendor-agnostic checklist for buying jewellery software: pricing engine depth, data ownership, WhatsApp compliance, AI governance and honest roadmaps.',
  breadcrumbs: BC('Jewellery Software Buyer’s Checklist'),
  schema: postSchema('Jewellery Software Buyer’s Checklist: 15 Questions to Ask First', 'A vendor-agnostic checklist of the questions worth asking before buying jewellery software, covering pricing depth, data ownership, compliance and AI governance.'),
  faqs: checklistGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · BUYER’S CHECKLIST',
  h1: 'Jewellery Software Buyer’s Checklist: 15 Questions to Ask First',
  sub: 'Every vendor demo looks polished. These are the questions that separate a system built for jewellery from a generic retail tool with jewellery fields bolted on — ask them of anyone you’re evaluating, including us.',
  primary: { href: '#', label: 'Ask us these, live', wa: 'blog-checklist' },
  secondary: { href: '/roadmap', label: 'See our own honest answers' },
})}
${L.section(postMeta(8, 'Jewellery Software Buying Guide'))}

${L.section(
  `<div class="post-body">
  <h2>On pricing and the metal you actually sell</h2>
  <ol>
    <li><strong>Does it price by purity, not just by category?</strong> 24K, 22K, 916, 18K and 14K each need their own rate — ask whether the rate card is purity-specific or a single blended number.</li>
    <li><strong>What making-charge models does it actually support?</strong> Percentage, per-gram and flat are all used in real jewellery businesses, often by different product categories in the same shop. One formula forced onto everything is a red flag.</li>
    <li><strong>Are stones and gemstones priced separately from the metal?</strong> Per-carat, certificate-linked pricing (GIA, IGI, SGL, HRD, BIS) is table stakes for anyone selling certified stones, not an add-on.</li>
    <li><strong>Is there an override workflow, or just a discount field?</strong> A floor/ceiling-checked approval with a logged reason is very different from a salesperson typing any number they like.</li>
  </ol>

  <h2>On WhatsApp and how it actually gets sent</h2>
  <ol start="5">
    <li><strong>Is it the official WhatsApp Business API, or an unofficial bulk tool?</strong> This single answer is the difference between a number that stays safe and one at real risk of restriction.</li>
    <li><strong>Does the catalogue price live, or does it go stale the moment the gold rate moves?</strong> A screenshot sent yesterday is wrong today — ask what "live" actually means in their product.</li>
  </ol>

  <h2>On data ownership and what happens if you leave</h2>
  <ol start="7">
    <li><strong>Can you export your data, in standard formats, any time?</strong> Ask this before signing, not after — "export anytime" as a written commitment is different from a verbal promise.</li>
    <li><strong>Is your data isolated, or does it sit in a shared table with everyone else's?</strong> A database-per-business architecture is a materially different security posture than row-level flags in a shared database.</li>
  </ol>

  <h2>On AI, if the product uses it</h2>
  <ol start="9">
    <li><strong>Does AI send messages automatically, or does a human approve first?</strong> In a relationship trade, this is not a minor detail — ask to see the approval queue, not just hear that one exists.</li>
    <li><strong>Is there a kill switch, and at what scopes?</strong> One action, one agent, one branch, one channel, or everything — the more granular, the more it's a real control and not a marketing line.</li>
  </ol>

  <h2>On accounting and what actually stays put</h2>
  <ol start="11">
    <li><strong>Does it replace Tally, or bridge to it?</strong> Most jewellery businesses don't want to rip out their accountant's workflow — ask exactly what syncs automatically and what still needs a manual voucher.</li>
  </ol>

  <h2>On honesty, which is the hardest thing to fake</h2>
  <ol start="12">
    <li><strong>Will they tell you what isn't built yet?</strong> Ask directly: "what's on your roadmap, not shipped." A vendor with a public, specific answer is more trustworthy than one who implies everything is done.</li>
    <li><strong>Can they name a real named customer, not a stock testimonial?</strong> Ask to see who actually runs on the product today.</li>
    <li><strong>How long does implementation actually take, in their own words?</strong> "Days" and "it depends" are both answers — vagueness on this specific question is itself informative.</li>
    <li><strong>Is there a lock-in contract, or can you leave on notice?</strong> Ask before you need the answer, not after.</li>
  </ol>

  <h2>How to use this list</h2>
  <p>Bring it to every demo, ours included, and expect direct answers rather than reframed ones. A vendor that welcomes the list is telling you something; one that steers around it is telling you something else.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('OUR OWN ANSWERS, IN PUBLIC', 'We hold ourselves to this list first.', 'Every honest gap in Jwero today is published, not hidden behind a demo script.')}
  <p><a class="btn btn-ghost" href="/roadmap">See what’s shipped, building, and not yet</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about evaluating vendors.', '')}${L.faqBlock(checklistGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="blog-checklist">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('Ask us every question on this list.', 'We’ll answer each one directly, including the ones our answer is “not yet.”', 'blog-checklist')}
`,
};

// ---------------------------------------------------------------- Article 11: Wedding season
const weddingGuideFaqs = [
  { q: 'When should I set up new software before wedding season?', a: 'Well before the peak weeks begin — implementation, data import and staff training all take real time, and none of it should be happening during your busiest fortnight. A season change-freeze policy exists for exactly this reason: go-lives are scheduled around your calendar, not squeezed into it.' },
  { q: 'What if we’re already in the middle of wedding season right now?', a: 'Say so plainly when you talk to any vendor — a responsible one will offer to plan the transition for after the season rather than push a disruptive change into your busiest weeks.' },
  { q: 'Is bridal jewellery CRM different from general jewellery CRM?', a: 'The customer record is the same underlying system, but bridal buying involves longer consideration windows, family decision-makers, and higher-value custom pieces — which is why it benefits from CRM fields and follow-up cadences built for that specific journey.' },
];

const weddingGuide = {
  slug: 'blog/jewellery-software-wedding-season',
  title: 'Jewellery Software for Wedding Season | Jwero',
  description: 'What to prepare before wedding season hits: enquiry response speed, appointment load, scheme maturities, dead-stock timing, and when not to switch software.',
  breadcrumbs: BC('Jewellery Software for Wedding Season'),
  schema: postSchema('Jewellery Software for Wedding Season', 'What a jewellery business should get right before wedding season starts, and why implementation timing matters more than the software itself.'),
  faqs: weddingGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · WEDDING SEASON',
  h1: 'Jewellery Software for Wedding Season: What to Get Right First',
  sub: 'Wedding season is when a jewellery business makes its year — and when the cost of a slow reply, a missed follow-up or a dead-stock tray is highest. Here’s what to get in order before it starts, not during it.',
  primary: { href: '#', label: 'Plan the timing', wa: 'blog-wedding' },
  secondary: { href: '/solutions/bridal', label: 'See the bridal playbook' },
})}
${L.section(postMeta(6, 'Wedding Season Readiness'))}

${L.section(
  `<div class="post-body">
  <h2>Why wedding season punishes slow systems more than any other stretch</h2>
  <p>Every weakness in a jewellery business's process shows up hardest during wedding season, because volume magnifies it. A reply that's a few hours slow in a quiet month is a lost customer in wedding season, when she's messaging three jewellers at once. A follow-up that gets forgotten in a quiet month is a lost sale worth many times more in wedding season, when the piece in question is a bridal set, not a daily-wear chain.</p>

  <h2>Enquiry response speed becomes the whole game</h2>
  <p>Wedding-season shoppers compare aggressively — multiple jewellers, multiple designs, often across family members weighing in. Whoever answers first, accurately, with a real price at today's rate, tends to stay in the conversation. Whoever answers next morning has often already lost it. This is true year-round, but the volume and stakes of wedding season make it the single highest-leverage thing to get right before the season starts, while there's still time to fix it.</p>

  <h2>Appointment load needs a system, not a notebook</h2>
  <p>Bridal buying involves showroom visits, often with multiple family members, often more than once before a decision. A booking system that shows real availability, and a record of what was shown and discussed at each visit, prevents the double-booked slot and the "what did we already show her" conversation that a busy season makes inevitable otherwise.</p>

  <h2>Scheme maturities are often timed to this exact season</h2>
  <p>Gold savings schemes frequently mature around wedding timelines by design — customers save specifically for this purchase. A scheme book that isn't tracked digitally makes it easy to miss a maturity date, or to have a customer arrive ready to redeem while staff scramble to confirm her balance manually. Getting scheme tracking right before the season means maturities become a proactive outreach opportunity instead of a reactive scramble.</p>

  <h2>Clear dead stock before the season, when there's still time for it</h2>
  <p>The tray of pieces that have sat unsold for a year are exactly the inventory a business wants moving before wedding-season footfall arrives — both for cash flow and to make room and attention for what actually sells this season. Reviewing ageing inventory in the quiet weeks before the season starts is a far better time than trying to clear it while every hour is needed for active customers.</p>

  <h2>Why implementation should never happen mid-season</h2>
  <p>This is the part vendors sometimes gloss over: switching systems, importing data or training staff during your busiest weeks is a genuinely bad idea, regardless of how good the software is. A season change-freeze, no disruptive changes during peak weeks, go-lives scheduled around the business's calendar, isn't a nice-to-have. It's a basic responsibility any vendor should hold themselves to. See <a href="/platform/onboarding">how onboarding is actually staged</a> around this.</p>

  <h2>What to have ready before the season starts</h2>
  <p>In order of leverage: fast, accurate WhatsApp response with live pricing; an appointment system that shows real availability; visible scheme balances and maturity dates; a dead-stock review, cleared before footfall picks up; and staff trained well before the first peak weekend, not during it.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('READY BEFORE THE RUSH, NOT DURING IT', 'The pieces this guide covers, in one place.', '')}
  ${L.cards([
    { title: 'Bridal-specific CRM', text: 'Longer consideration windows, family decision-makers, custom-piece tracking.', link: { href: '/solutions/bridal', label: 'See the playbook' } },
    { title: 'Season change-freeze', text: 'Implementation staged around your calendar, never during your peak weeks.', link: { href: '/platform/onboarding', label: 'See onboarding' } },
    { title: 'Scheme maturity tracking', text: 'Balances and maturity dates visible before the customer walks in ready to redeem.', link: { href: '/products/gold-schemes', label: 'See gold schemes' } },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about timing.', '')}${L.faqBlock(weddingGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="blog-wedding">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Plan your season before it starts.', 'Tell us your busiest weeks — we’ll map a go-live plan that stays clear of every one of them.', 'blog-wedding')}
`,
};

// ---------------------------------------------------------------- Article 12: Software cost
const costGuideFaqs = [
  { q: 'What does jewellery software cost in India?', a: 'It depends on scope — a single WhatsApp tool can start under ₹3,000/month, a full unified platform costs more but replaces several of those tools at once. Jwero’s own price is published: every module for ₹18,000 a month — see <a href="/pricing">the pricing page</a>., or ask us directly on WhatsApp.' },
  { q: 'Is it cheaper to keep using separate tools?', a: 'On the sticker price of any one tool, often yes. Add up what a WhatsApp tool, a catalogue app, a website subscription and an SMS vendor cost together, plus the staff hours spent reconciling them, and the comparison usually looks different — see the Frankenstack breakdown on <a href="/pricing">the pricing page</a>.' },
  { q: 'Why won’t this article just quote a price?', a: 'It does, for Jwero: one plan with every module at ₹18,000 a month, plus a published rate card for per-use services — all on <a href="/pricing">the pricing page</a>. For other vendors, a single number without your scope and current stack attached would be more marketing than answer.' },
];

const costGuide = {
  slug: 'blog/jewellery-software-cost-india',
  title: 'How Much Does Jewellery Software Cost in India? | Jwero',
  description: 'What jewellery businesses in India actually pay across WhatsApp tools, catalogue apps, websites and SMS vendors — and what a unified platform changes.',
  breadcrumbs: BC('Jewellery Software Cost in India'),
  schema: postSchema('How Much Does Jewellery Software Cost in India?', 'What a jewellery business typically pays across separate tools today, and what a unified platform changes about that cost picture.'),
  faqs: costGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · SOFTWARE COST',
  h1: 'How Much Does Jewellery Software Cost in India?',
  sub: 'The honest answer starts with a question most price pages skip: cost compared to what? Here’s the real anatomy of what a jewellery business pays today, and what changes when it moves to one system instead of five.',
  primary: { href: '#', label: 'Ask us for a straight number', wa: 'blog-cost' },
  secondary: { href: '/pricing', label: 'See our pricing page' },
})}
${L.section(postMeta(7, 'Software Cost'))}

${L.section(
  `<div class="post-body">
  <h2>Why this question rarely gets a straight answer</h2>
  <p>Search for jewellery software cost in India and most results either quote one vendor’s sticker price with no context, or dodge the question entirely with "contact us for pricing." Neither is very useful, because the real cost of running a jewellery business’s software isn’t one number. It’s the sum of whatever tools are already stitched together, plus the staff time spent keeping them in sync, plus whatever gets missed because nothing connects.</p>
  <p>This isn’t going to invent a specific Jwero price here either — Jwero One is ₹18,000 a month, with every module included — the full breakdown, including the per-use rate card, is on <a href="/pricing">the pricing page</a>, not a blog post. What this article can do is lay out the cost anatomy clearly enough that a straight number, wherever you get it, means something.</p>

  <h2>The tools a typical business is already paying for</h2>
  <p>Most jewellery businesses aren’t paying for one piece of software. They’re paying for several, bought at different times, for different reasons, that were never designed to talk to each other. A WhatsApp bulk-messaging tool for festival blasts. A catalogue app to share designs. A website subscription that’s really a brochure. Sometimes an SMS vendor left over from before WhatsApp took over. And a scheme register, usually still on paper or in a spreadsheet, with staff hours spent reconciling it every month.</p>
  <p>Each of those has its own subscription, its own login, and its own blind spot — none of them know what the others know about a given customer.</p>

  <h2>What a category tool actually costs, roughly</h2>
  <p>Named WhatsApp API platforms publish real numbers worth knowing before comparing anything against them. WATI’s published pricing runs roughly $39–229/month across tiers, plus a markup over Meta’s own per-message fees. Interakt publishes ₹3,499/quarter at entry up to ₹10,499/quarter at its higher tier. On the ecommerce side, Shopify’s published pricing runs from $39/month at the Basic tier up to $399/month at Advanced, with Shopify Plus priced separately from $2,300/month for larger operations. These are the vendors’ own published figures as of when our <a href="/compare">comparison pages</a> were last checked — confirm current numbers directly with each vendor, since pricing changes.</p>
  <p>Stack even two or three of those alongside a catalogue app and an SMS vendor, and the combined monthly cost adds up before a single WhatsApp reply or gold-rate recalculation happens automatically between them.</p>

  <h2>The cost that doesn’t show up on any invoice</h2>
  <p>The sticker price of each separate tool is only part of the real cost. The rest is invisible: a staff member manually copying a customer’s number between the WhatsApp tool and the register, a catalogue that goes stale the moment the gold rate moves because nobody’s had time to update the PDF, a scheme instalment logged on paper that never makes it into anything the owner can see at a glance. None of that appears as a line item. It shows up as a smaller number in the bank account than the sales activity would suggest, and as customers who feel like strangers every time they come back.</p>

  <h2>What changes when it’s one system instead of five</h2>
  <p>A unified platform doesn’t make jewellery software free — but it changes what’s being paid for. Instead of five subscriptions each doing one job in isolation, one system holds the customer record, the catalogue, the WhatsApp inbox, the scheme balances and the invoicing together, so nothing needs reconciling between them by hand. Whether that nets out cheaper than the sum of separate tools depends on how many of those tools a specific business already runs, and what the staff time spent stitching them together is actually worth — which is exactly the math worth doing before comparing sticker prices alone.</p>

  <h2>What this site can honestly tell you</h2>
  <p>Jwero’s own price is published: one plan, every module, ₹18,000 a month. The detail is on <a href="/pricing">the pricing page</a>, which lays out the tier structure and the Frankenstack comparison honestly, and a direct conversation on WhatsApp, where a real number gets discussed against your actual current stack rather than a generic estimate.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('SEE IT WORKING', 'The Frankenstack math, laid out plainly.', 'The pricing page walks through exactly what a typical business pays across separate tools today, row by row — not a single sticker price with no context.')}
  <p><a class="btn btn-ghost" href="/pricing">See the pricing page</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about cost.', '')}${L.faqBlock(costGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="blog-cost">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('Get a straight number for your own stack.', 'Tell us what you currently pay for, tool by tool — we’ll show you honestly what changes and what it costs.', 'blog-cost')}
`,
};

// ---------------------------------------------------------------- Article 13: Best jewellery software
const bestSoftwareGuideFaqs = [
  { q: 'What’s the single most important thing to check first?', a: 'Whether it prices by purity, not just by category. 24K, 22K, 916, 18K and 14K each need their own rate — a system that blends them into one number is a generic retail tool with jewellery labels on it, not built for the trade.' },
  { q: 'Should I trust a “best jewellery software” ranking online?', a: 'Treat any ranked listicle with real skepticism, including ones that look independent — many are paid placements or affiliate content with no disclosed methodology. A vendor-agnostic checklist of criteria, applied to your own shortlist, tells you more than someone else’s ranking.' },
  { q: 'How many vendors should I actually compare?', a: 'Two or three, evaluated properly against the same checklist, beats ten evaluated superficially. Depth of comparison matters more than breadth — see named, sourced comparisons on the <a href="/compare">compare hub</a> if you want specifics.' },
];

const bestSoftwareGuide = {
  slug: 'blog/best-jewellery-software-india',
  title: 'Best Jewellery Software in India: How to Actually Compare | Jwero',
  description: 'A practical guide to comparing jewellery software: purity-based pricing, WhatsApp API vs unofficial tools, data ownership and AI governance — no rankings.',
  breadcrumbs: BC('Best Jewellery Software: How to Compare'),
  schema: postSchema('Best Jewellery Software in India: How to Actually Compare', 'The criteria that actually matter when evaluating jewellery software in India — purity pricing, WhatsApp compliance, data ownership and AI governance.'),
  faqs: bestSoftwareGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · COMPARING JEWELLERY SOFTWARE',
  h1: 'Best Jewellery Software in India: How to Actually Compare',
  sub: 'This isn’t a ranked list naming a winner — that’s not something a vendor writing about itself can do honestly. It’s the criteria that actually separate a system built for jewellery from a generic retail tool wearing jewellery fields, so you can judge any vendor, including us, properly.',
  primary: { href: '#', label: 'Ask us these questions directly', wa: 'blog-bestsoftware' },
  secondary: { href: '/blog/jewellery-software-buyer-checklist', label: 'Read the full buyer’s checklist' },
})}
${L.section(postMeta(8, 'Comparing Jewellery Software'))}

${L.section(
  `<div class="post-body">
  <h2>Why this isn’t a ranked list</h2>
  <p>A "best jewellery software" listicle that names a winner is, almost always, either paid placement dressed up as editorial content, or a company ranking itself first. We’re not going to pretend to be a neutral third party ranking ourselves and competitors — that would contradict the same honesty standard this whole site tries to hold. What’s actually useful, and what a vendor can write honestly, is the set of criteria that separates jewellery-specific software from generic retail software, so you can apply it yourself to whatever shortlist you’re evaluating, Jwero included.</p>

  <h2>Purity-based pricing, not category pricing</h2>
  <p>This is the first real test. Jewellery isn’t priced like most retail categories — 24K, 22K, 916, 18K and 14K each carry their own rate, updated as the metal rate moves, sometimes twice a day. A system that treats "gold jewellery" as one priced category, rather than resolving a rate per purity, per weight, is a generic retail platform with a jewellery skin over it. Ask any vendor to show you the rate card, not describe it.</p>

  <h2>Official WhatsApp API, or an unofficial bulk tool</h2>
  <p>This distinction matters more than it looks. The official WhatsApp Business API supports approved templates, consent tracking and multiple team members on one number safely. Unofficial "bulk sender" tools that spoof the app are the most common way jewellery businesses lose a WhatsApp number entirely — Meta actively detects and restricts numbers that behave like spam senders. Ask directly which one a vendor runs on; the answer is usually in the fine print, if it’s disclosed at all.</p>

  <h2>Data ownership: can you actually leave?</h2>
  <p>Ask whether you can export your data, in standard formats, at any time — and get that in writing, not a verbal assurance during a sales call. Also worth asking: is your business’s data isolated from every other customer’s, or does it sit in a shared table distinguished only by a row-level flag? A database-per-business architecture is a materially different security posture, and it’s a fair question to ask any vendor plainly.</p>

  <h2>AI governance, if the product uses AI at all</h2>
  <p>A growing number of jewellery platforms now offer some form of AI reply or automation. The question that actually matters isn’t whether AI exists — it’s whether a human approves before anything reaches a customer, whether there’s a daily cap on automated actions, and whether there’s a kill switch, and at what scope. "We use AI" is a marketing line. "Here’s the approval queue, live" is a product you can actually evaluate.</p>

  <h2>Honest roadmaps over polished demos</h2>
  <p>Every vendor demo looks finished. The tell is what happens when you ask what isn’t built yet. A vendor with a specific, public answer — "this syncs automatically, this still needs a manual voucher, here’s what’s on the roadmap" — is more trustworthy than one that implies everything is done. This one criterion alone filters out more bad fits than any feature comparison.</p>

  <h2>Where to go from here</h2>
  <p>This guide is deliberately about how to evaluate, not who wins — for the full 15-question version of this checklist, read <a href="/blog/jewellery-software-buyer-checklist">the buyer’s checklist</a>. If you want named, sourced comparisons against specific tools jewellery businesses already use — WATI, Shopify, Zoho CRM, Marg ERP and others — those live on the <a href="/compare">compare hub</a>, with published pricing and dated research notes rather than a vague "we’re better" claim.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('SEE IT WORKING', 'Apply the checklist to us directly.', 'Bring this list to a conversation with us the same way you’d bring it to any vendor — we’ll answer plainly, including the questions our honest answer is “not yet.”')}
  <p><a class="btn btn-ghost" href="/blog/jewellery-software-buyer-checklist">Read the full 15-question checklist</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about comparing software.', '')}${L.faqBlock(bestSoftwareGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="blog-bestsoftware">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('Ask us this checklist directly.', 'We’ll answer every criterion honestly, including where the answer is “not yet.”', 'blog-bestsoftware')}
`,
};

// ---------------------------------------------------------------- Article 14: Live gold rate
const goldRateGuideFaqs = [
  { q: 'Does live gold-rate pricing mean an automatic feed is required?', a: 'No. Rates can be entered manually each session — a common am/pm pattern in the trade — or pulled from a live feed; a jewellery business chooses per metal. “Live” describes how the price resolves at the moment it’s viewed, not necessarily where the rate itself comes from.' },
  { q: 'Why do purity-specific rates matter so much?', a: 'Because 24K, 22K, 916, 18K and 14K are genuinely different products with different metal content, not variations of the same rate. A system that blends them into one number is either approximating or wrong for anything that isn’t the purity it was calibrated for.' },
  { q: 'How does a rate change reach every price at once?', a: 'By storing a formula instead of a number — rate × weight, plus making charge, plus stone value — resolved fresh at the moment a price is viewed. Update the rate once, and the catalogue, the website and the counter all resolve against the new rate together, rather than needing three separate manual updates.' },
];

const goldRateGuide = {
  slug: 'blog/gold-rate-api-live-pricing',
  title: 'Where Does the Live Gold Rate Come From? A Jeweller’s Guide | Jwero',
  description: 'How live metal-rate pricing actually works for a jewellery business: manual entry vs live feeds, morning/evening sessions, and purity-specific rates.',
  breadcrumbs: BC('Live Gold Rate Guide'),
  schema: postSchema('Where Does the Live Gold Rate Come From? A Jeweller’s Guide', 'How live gold-rate pricing works in a jewellery business — manual entry vs a live feed, rate sessions, and why purity-specific rates matter.'),
  faqs: goldRateGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · LIVE GOLD RATE PRICING',
  h1: 'Where Does the Live Gold Rate Come From? A Jeweller’s Guide',
  sub: '“Live pricing” gets thrown around a lot in jewellery software marketing. Here’s what it plainly means, in practice — where the rate actually comes from, why purity matters, and how one rate change should reach every price at once.',
  primary: { href: '#', label: 'See a price resolve live', wa: 'blog-goldrate' },
  secondary: { href: '/platform/pricing-engine', label: 'See the pricing engine' },
})}
${L.section(postMeta(6, 'Pricing & Rates'))}

${L.section(
  `<div class="post-body">
  <h2>Manual entry vs a live feed</h2>
  <p>There are two honest ways a jewellery business gets its metal rate into a pricing system, and neither one is wrong. The first is manual entry: a staff member checks the day’s rate — often from a trusted local source or a bullion association update — and enters it into the system, once or twice a day. The second is a live feed, where the rate updates automatically from a connected source as it moves. A real pricing engine should let a business choose per metal, rather than forcing one approach on everything it sells.</p>
  <p>"Live pricing" doesn’t strictly require an automatic feed. What it actually describes is what happens after the rate is in the system — whether a price is stored as a fixed number that goes stale, or resolved fresh, from a formula, every time it’s viewed.</p>

  <h2>The morning and evening rate session, and why it exists</h2>
  <p>A genuine trade practice in many jewellery markets is the twice-daily rate session — a morning rate and an evening rate, reflecting how gold and silver actually move within a single trading day. A system built for the trade should support this rhythm directly, rather than assuming a rate only ever changes once a day or once a week. This isn’t a technical nicety; it’s matching the software to how the business actually operates, not the other way around.</p>

  <h2>Why purity-specific rates aren’t optional</h2>
  <p>24K, 22K, 916, 18K and 14K aren’t variations on a theme — they’re different metal content, and a rate that’s correct for one is wrong for the others. A rate card built for the trade carries its own rate per metal and purity, not one blended number stretched across everything a business sells. This matters most at the exact moment a customer compares two pieces of different purity and expects the price difference to make sense, not just look approximately right.</p>

  <h2>What actually gets priced, beyond the rate</h2>
  <p>The metal rate is one input among several. A resolved price is the rate multiplied by weight, plus a making charge — which can be a percentage of metal value, a per-gram amount, or a flat fee depending on the category — plus stone or gemstone value priced separately, often tied to a certificate on file. Wastage, where a business applies it, is tracked as its own distinct percentage rather than quietly folded into the making charge. None of these inputs are stored as a fixed final number; the price is a formula, resolved at the moment it’s needed.</p>

  <h2>Propagating a rate change everywhere at once</h2>
  <p>The practical benefit of pricing this way shows up the moment a rate moves. Because the price was never stored as a static number, updating the rate once means every catalogue link, every website page and every counter terminal resolves against the new rate the next time it’s viewed — not three or four separate manual updates that inevitably drift out of sync with each other. A screenshot sent an hour ago and a page opened just now show the same, correct price, because both are resolving the same live formula rather than displaying a snapshot.</p>

  <h2>What this doesn’t claim</h2>
  <p>This guide is deliberately staying close to how a pricing engine mechanically works, not making claims about specific rate sources, accuracy guarantees, or real-time market-data licensing — those specifics vary by provider and region, and are worth confirming directly rather than assumed from a blog post. For the fuller technical picture of how Jwero’s own pricing engine handles rate cards, making-charge models, stone pricing and override rules, see <a href="/platform/pricing-engine">the pricing engine page</a>.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('SEE IT WORKING', 'A price, resolved live, with the formula shown.', 'The pricing engine page walks through exactly what goes into a resolved price — rate, purity, making charge, wastage and stone value — and how an override gets logged.')}
  <p><a class="btn btn-ghost" href="/platform/pricing-engine">See the pricing engine in detail</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about rates and pricing.', '')}${L.faqBlock(goldRateGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site’s own chat button runs on Jwero — <a href="#" data-wa="blog-goldrate">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See your own rate card resolve live.', 'Bring one real product and your current rate — we’ll show the formula resolving, purity by purity.', 'blog-goldrate')}
`,
};

// ---------------------------------------------------------------- Article 15: Start jewellery business online
const startOnlineGuideFaqs = [
  { q: 'Do I need GST registration before selling jewellery online?', a: 'This depends on your turnover, structure and state — it’s a real compliance question, not something to take from a blog post. Confirm registration and disclosure requirements with your own CA before you start invoicing.' },
  { q: 'Should I start with WhatsApp or a full website?', a: 'Most first-time founders start where the conversation already happens — WhatsApp — because it needs no separate audience to build. A website matters more once there’s a catalogue and a reason for people to browse rather than ask directly; many businesses run both together once they’re past the very first stage.' },
  { q: 'Can I run a jewellery business without holding much stock upfront?', a: 'Many new businesses start lean — a smaller curated catalogue, made-to-order or limited stock, sourced against confirmed demand rather than large upfront inventory. This keeps working capital lower at the stage it matters most, though it trades off some instant-fulfilment convenience.' },
];

const startOnlineGuide = {
  slug: 'blog/start-jewellery-business-online',
  title: 'How to Start a Jewellery Business Online | Jwero',
  description: 'A practical starter guide to launching a jewellery business online: registration basics, sourcing, photography, WhatsApp vs a website, starting lean.',
  breadcrumbs: BC('Starting a Jewellery Business Online'),
  schema: postSchema('How to Start a Jewellery Business Online', 'A practical guide for first-time founders starting a jewellery business online — registration, sourcing, photography, and the WhatsApp-vs-website tradeoff.'),
  faqs: startOnlineGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · STARTING ONLINE',
  h1: 'How to Start a Jewellery Business Online',
  sub: 'Starting a jewellery business online doesn’t require a warehouse, a big team or a finished website on day one. Here’s a practical, honest starting sequence — not legal or tax advice, but the shape of what actually comes first.',
  primary: { href: '#', label: 'Talk through your first steps', wa: 'blog-startonline' },
  secondary: { href: '/solutions/startups', label: 'See the startups playbook' },
})}
${L.section(postMeta(8, 'Starting Online'))}

${L.section(
  `<div class="post-body">
  <h2>Registration and GST, in general terms</h2>
  <p>Every jewellery business, online or not, eventually needs to deal with business registration and, depending on turnover and structure, GST. This is a genuine legal and tax question that depends on your specific situation — state, structure, turnover thresholds — and it deserves an actual CA’s answer, not a generic checklist from a blog post. What’s worth knowing upfront is simply that this step exists and shouldn’t be an afterthought once sales have already started; get the registration conversation going early, in parallel with everything else on this list, not after.</p>

  <h2>Sourcing: the decision that shapes everything else</h2>
  <p>How you source pieces determines almost everything downstream — pricing, lead time, how much capital sits idle as inventory. Broadly, new online jewellery businesses source one of a few ways: buying finished pieces from wholesalers or manufacturers, working with a karigar on made-to-order pieces, or some mix depending on category. Starting lean often means leaning toward made-to-order or a smaller curated catalogue rather than a large upfront stock purchase — it trades some instant-fulfilment convenience for meaningfully lower working capital at the exact stage that capital is hardest to come by.</p>

  <h2>Photography that actually sells jewellery</h2>
  <p>Jewellery photography has its own quiet rules: consistent, even lighting that doesn’t wash out stone colour, a plain or consistent background so a small catalogue doesn’t look mismatched, and multiple angles so a customer can judge proportion, not just sparkle. A phone with a steady tripod and good natural light gets a new business further than expensive equipment used badly. What matters most at this stage is consistency across the catalogue — a customer scrolling through five pieces shot five different ways reads as unprofessional even if each individual photo is fine.</p>

  <h2>WhatsApp first, or a full website first?</h2>
  <p>This is the real early decision, and there’s an honest tradeoff either way. WhatsApp needs no audience-building of its own — it works with whatever contacts and referrals a founder already has, and conversations there convert well because jewellery is sold on trust and back-and-forth, not a single browse-and-buy click. A full ecommerce website matters more once there’s a catalogue worth browsing and a reason for strangers to land on it — search, ads, social traffic that isn’t already a warm contact.</p>
  <p>Most founders are better served starting with WhatsApp, because it’s where the first real sales conversations happen with the least setup — and adding a website once there’s traffic worth sending somewhere, rather than building a website nobody visits yet. See <a href="/products/ecommerce">the Ecommerce Website</a> for what that looks like when the business is ready for it, alongside WhatsApp and Instagram commerce.</p>

  <h2>The honest tradeoff of starting lean</h2>
  <p>Starting lean — smaller catalogue, made-to-order sourcing, WhatsApp before a full website — genuinely trades some things away: slower fulfilment on pieces not already in hand, a narrower range for a customer to browse, less polish than an established competitor’s website. What it buys in return is lower upfront capital, a faster real start, and room to learn what actually sells before committing to a large inventory position. Neither path is universally right; the honest version of this advice is that starting lean is usually the lower-risk choice for a genuinely new business, not the only correct one.</p>

  <h2>What to have in place before the first real sale</h2>
  <p>In rough order: the registration conversation started with a CA, a small but consistently photographed catalogue, a WhatsApp number set up properly (official API, not a personal number doing double duty), and a clear sense of sourcing lead times so a customer’s expectations match reality. Everything else — a full website, a scheme program, multiple channels — can be added once the first version is actually working.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('SEE IT WORKING', 'Built for exactly this stage.', 'Full operating system from day one, priced for a first store — customers, WhatsApp and catalogue first, everything else added as the business grows into it.')}
  <p><a class="btn btn-ghost" href="/solutions/startups">See the startups playbook</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions first-time founders ask.', '')}${L.faqBlock(startOnlineGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="blog-startonline">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Start where you actually are.', 'Tell us about your first store — we’ll tell you honestly what matters first and what can wait.', 'blog-startonline')}
`,
};

// ---------------------------------------------------------------- Article 16: WhatsApp API pricing
const waPricingGuideFaqs = [
  { q: 'How does Meta charge for the WhatsApp Business API now?', a: 'Since 1 July 2025 Meta charges per template message delivered, not per conversation. Each template is a marketing, utility or authentication message, and each category has its own rate by country.' },
  { q: 'Are replies to customers charged?', a: 'Free-form replies inside the 24-hour customer service window, which opens when a customer messages you, are not charged by Meta. Utility templates sent inside that window are also free.' },
  { q: 'What does Jwero charge per WhatsApp message?', a: 'Jwero’s published wallet rates are ₹1.05 per marketing message and ₹0.16 per utility, authentication or service message. The rate card on the pricing page is the one your billing screen uses.' },
  { q: 'Which jewellery messages are marketing and which are utility?', a: 'Offers, festival campaigns, new collections and win-back messages are marketing. Order updates, scheme instalment receipts, repair status and appointment confirmations are usually utility, if the template is approved in that category.' },
  { q: 'How can a jeweller keep WhatsApp costs down?', a: 'Answer enquiries quickly so replies fall inside the free service window, send campaigns to a chosen segment instead of the whole list, and keep transactional updates as utility templates.' },
];


const waPricingGuide = {
  slug: 'blog/whatsapp-business-api-pricing',
  title: 'WhatsApp Business API Pricing for Jewellers (2026) | Jwero',
  description: 'How WhatsApp Business API pricing works for jewellers since Meta moved to per-message pricing: marketing, utility and authentication templates, free replies, and Jwero’s rates.',
  breadcrumbs: BC('WhatsApp Business API Pricing'),
  schema: postSchema('WhatsApp Business API Pricing for Jewellers: How Per-Message Pricing Works', 'How Meta’s per-message WhatsApp Business API pricing works for jewellers: template categories, the free customer service window, and Jwero’s published rates.'),
  faqs: waPricingGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · WHATSAPP API PRICING',
  h1: 'WhatsApp Business API Pricing for Jewellers: How Per-Message Pricing Works',
  sub: 'Since July 2025 Meta charges for each template message delivered, not for each conversation. Here is what that means for scheme reminders, campaigns and everyday replies.',
  primary: { href: '#', label: 'Ask us about your setup', wa: 'blog-wapricing' },
  secondary: { href: '/pricing', label: 'See Jwero’s rate card' },
})}
${L.section(postMeta(6, 'WhatsApp Pricing'))}

${L.section(
  `<div class="post-body">
  <h2>What changed in July 2025</h2>
  <p>Meta used to charge for 24-hour conversation windows. From 1 July 2025 it charges for each template message that is delivered. A template is a pre-approved message a business uses to start contact with a customer, or to reach her outside the customer service window. Each template belongs to one of three categories, and each category has its own rate by country.</p>

  <h2>The three kinds of template</h2>
  <p><b>Marketing</b> templates promote something: an offer, a festival campaign, a new collection, a win-back message. They are the most expensive category. <b>Utility</b> templates confirm or update something the customer already started: an order update, a scheme instalment receipt, a repair status, an appointment confirmation. <b>Authentication</b> templates send one-time codes. Meta decides the final category when it approves the template, so a promotional line inside a "utility" message can get it reclassified as marketing.</p>

  <h2>What is free</h2>
  <p>When a customer messages you, a 24-hour customer service window opens. Free-form replies inside that window are not charged by Meta, and utility templates sent inside it are free too. For a jeweller who answers enquiries quickly, most everyday conversation costs nothing from Meta. The cost sits in outreach you start yourself: campaigns, reminders and follow-ups sent after the window has closed.</p>

  <h2>What it means for a jewellery business</h2>
  <p>A shop that mostly replies to enquiries spends little. A shop that runs gold scheme reminders, birthday and anniversary wishes and festival campaigns sends many templates, and the marketing ones add up. Two habits keep the bill sensible: reply fast, so conversations stay inside the free window, and send campaigns to a chosen segment instead of the whole contact list.</p>

  <h2>Jwero’s rates</h2>
  <p>In Jwero, messages are charged from a prepaid wallet at published rates: ₹1.05 per marketing message and ₹0.16 per utility, authentication or service message. The same rate card is on the <a href="/pricing">pricing page</a> and inside your billing screen, and you see the balance and the spend as you go. Meta revises its own rates from time to time; when it does, the rate card is updated.</p>

  <h2>Official API, not a bulk sender</h2>
  <p>Unofficial bulk-sender tools are the most common way a jewellery business loses its WhatsApp number. The official API with approved templates, consent and a shared team inbox costs a little per message and keeps the number safe. That is what Jwero runs on.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('SEE IT WORKING', 'The official API, set up properly.', 'Jwero’s own WhatsApp line runs on the official API described above, with approved templates, consent tracking and a shared team inbox.')}
  <p><a class="btn btn-ghost" href="/products/whatsapp">See WhatsApp Commerce in Jwero</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about API pricing.', '')}${L.faqBlock(waPricingGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.ctaBand('Work out your own message mix.', 'Tell us how you use WhatsApp today, enquiries, reminders and campaigns, and we will help you estimate the cost honestly.', 'blog-wapricing')}
`,
};

// ---------------------------------------------------------------- Article 17: Gold savings schemes legal
const schemesLegalGuideFaqs = [
  { q: 'Are gold savings schemes legal in India?', a: 'This is a genuine legal question that depends on the specific structure of a scheme, and it isn’t something a marketing page can answer responsibly for your business — confirm with your own CA or lawyer how your specific scheme design is treated. What this guide can do is point at the practices that reduce risk regardless of the answer: KYC, written terms, an audit trail and verified closures.' },
  { q: 'Does running a scheme through software make it legal?', a: 'No — software doesn’t change the legal status of a scheme structure; that’s determined by the scheme’s design and applicable regulation, which is a question for your compliance advisor. What software can do is make whatever structure you and your advisor land on easier to run with discipline — proper KYC capture, documented terms, and a full audit trail.' },
  { q: 'What should I ask my CA before launching or scaling a scheme?', a: 'Whether your specific scheme structure needs registration or disclosure under applicable rules for your state and business type, what KYC and documentation the scheme should capture, and whether your current terms are actually written down and given to members — not just explained verbally at enrolment.' },
];

const schemesLegalGuide = {
  slug: 'blog/are-gold-savings-schemes-legal',
  title: 'Are Gold Savings Schemes Legal in India? | Jwero',
  description: 'Gold savings schemes are a common jewellery trade practice — their specific legal treatment is a CA/lawyer question. Here’s what reduces risk either way.',
  breadcrumbs: BC('Gold Savings Schemes: Legal Questions'),
  schema: postSchema('Are Gold Savings Schemes Legal in India?', 'Gold-savings scheme legality depends on scheme structure and is a question for a compliance advisor — this guide covers the practices that reduce risk.'),
  faqs: schemesLegalGuideFaqs,
  body: `
${L.hero({
  eyebrow: 'GUIDE · GOLD SCHEMES & COMPLIANCE',
  h1: 'Are Gold Savings Schemes Legal in India?',
  sub: 'This is a genuine legal question, and this page won’t pretend to answer it for you — that call depends on your specific scheme structure and belongs with your own CA or lawyer. What it can do is lay out what’s actually well-established, and the practices that reduce risk whatever the answer turns out to be.',
  primary: { href: '#', label: 'Ask us about our compliance controls', wa: 'blog-schemeslegal' },
  secondary: { href: '/products/gold-schemes', label: 'See gold schemes in Jwero' },
})}
${L.section(postMeta(7, 'Compliance & Gold Schemes'))}

${L.section(
  `<div class="post-body">
  <h2>Why this guide won’t give you a yes or no</h2>
  <p>A page that flatly states "gold savings schemes are legal" or "gold savings schemes are illegal" would be handing out a legal conclusion to a general audience, on a topic where the actual answer depends on the specific structure of a scheme, the applicable regulatory framework, and questions that sit close to areas like the Prize Chits and Money Circulation Schemes Banning Act and other adjacent regulatory considerations that vary by structure. That’s unlicensed legal advice dressed up as a blog post, and it’s exactly the kind of overreach this site tries not to make anywhere else — this topic is no exception.</p>
  <p>What’s genuinely true, and safe to say plainly: gold savings schemes are a long-standing, widespread trade practice across Indian jewellery retail, run by businesses of every size for decades. That establishes the practice is common, not that any specific scheme structure is automatically compliant — those are different questions, and only the second one needs a lawyer.</p>

  <h2>The question that actually needs a professional</h2>
  <p>Whether a particular scheme structure requires registration, specific disclosures, or falls under particular regulatory scrutiny depends on details a general article can’t responsibly generalise across — how the scheme is structured, what jurisdiction it operates in, how funds are held, what’s promised to members. This genuinely varies, and the honest answer is the same one this site gives on other compliance-adjacent topics: confirm the current regulatory scope for your specific state and scheme structure with your own CA or lawyer, and treat that as a real step, not a formality to skip.</p>

  <h2>What’s actually useful to focus on instead</h2>
  <p>Regardless of where the legal-structure conversation with your advisor lands, there’s a set of practices that reduce risk and protect both the business and its members in any well-run scheme. These aren’t a substitute for legal advice — they’re the operational discipline that a responsible scheme should have in place either way.</p>

  <h2>KYC capture at enrolment</h2>
  <p>Knowing who a member actually is, captured properly at the point of enrolment rather than assumed from familiarity, is basic due diligence for any scheme handling recurring customer payments over months. It protects the business in a dispute and is generally table stakes for any structured financial-adjacent product.</p>

  <h2>Written terms, not verbal understanding</h2>
  <p>A scheme explained verbally at the counter and never written down leaves both sides relying on memory months later. Documented terms — duration, instalment amount, what happens on a missed payment, maturity benefits — given to the member at enrolment, not reconstructed from memory at redemption, is one of the simplest risk-reducing steps a business can take.</p>

  <h2>A full audit trail</h2>
  <p>Every instalment, every reminder sent, every balance check — recorded, not just remembered. This matters for two reasons: it protects the business if a member disputes a payment, and it protects the member if the business’s own records are ever questioned. An audit trail that exists only in a paper register that can be edited after the fact isn’t really an audit trail at all.</p>

  <h2>OTP-verified closures</h2>
  <p>The maturity moment — when a scheme closes and a member redeems — is exactly where disputes are most likely if it isn’t unambiguous for both sides. An OTP-verified closure means the member themselves confirms the redemption at the moment it happens, rather than a closure that either side can later claim didn’t happen the way it’s recorded.</p>

  <h2>What this looks like in practice</h2>
  <p>These four practices — KYC, written terms, an audit trail and OTP-verified closures — are exactly the discipline built into how Jwero runs gold savings schemes today, not a hypothetical best practice described from the outside. See <a href="/products/gold-schemes">gold schemes in Jwero</a> for how enrolment, reminders, balances and closure actually work, and confirm current scope for your state and structure on a demo before relying on any of it for a specific compliance question.</p>
  </div>`
)}

${L.section(
  `${L.sectionHead('SEE IT WORKING', 'Discipline first, whatever the legal structure.', 'KYC enrolment, documented plan terms, a full audit trail and OTP-verified closures — the practices that reduce risk in a scheme, built into the product, not described as a hypothetical.')}
  <p><a class="btn btn-ghost" href="/products/gold-schemes">See gold schemes in Jwero</a></p>`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('GUIDE QUESTIONS', 'Questions readers ask about scheme compliance.', '')}${L.faqBlock(schemesLegalGuideFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="blog-schemeslegal">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('See the compliance controls in a demo.', 'Bring your current scheme structure — we’ll show KYC, documented terms, the audit trail and OTP closures running on it.', 'blog-schemeslegal')}
`,
};

const BLOG_ARTICLES = [whatsappGuide, deadStockGuide, schemeGuide, tallyGuide, goldLossGuide, repairGuide, huidGuide, catalogGuide, crmErpGuide, checklistGuide, weddingGuide, costGuide, bestSoftwareGuide, goldRateGuide, startOnlineGuide, waPricingGuide, schemesLegalGuide].concat(require('./blog-rules'), require('./blog-ops'), require('./blog-growth'), require('./blog-ai'));
blogHub.body = hubBody(BLOG_ARTICLES);

module.exports = [blogHub, whatsappGuide, deadStockGuide, schemeGuide, tallyGuide, goldLossGuide, repairGuide, huidGuide, catalogGuide, crmErpGuide, checklistGuide, weddingGuide, costGuide, bestSoftwareGuide, goldRateGuide, startOnlineGuide, waPricingGuide, schemesLegalGuide].concat(require('./blog-rules'), require('./blog-ops'), require('./blog-growth'), require('./blog-ai'));
