// Extension pages for Jwero Ecommerce (2026-10-10). Not in the menu. Each targets
// one search phrase and hands the reader to its section of /products/ecommerce.
// Same facts and limits as content/ecommerce.js.
const L = require('../lib');
const UPDATED = '10 October 2026';
const P = require('./ecommerce').parts;
const MINI = { personalise: [() => P.personalise(), 'brand'], optimize: [() => P.funnel(), 'brand'], showroom: [() => '', 'chain'], recover: [() => P.fork(), 'brand'] };
const mini = (p) => { const m = MINI[p.anchor]; if (!m) return ''; return `${m[0]()}<p class="soc-mini-go"><a class="btn btn-ghost" href="/products/ecommerce?ec=${m[1]}#for-you" data-ec-cta="mini-${p.slug}">See Jwero Ecommerce for my business →</a></p>`; };

function landing(p) {
  return {
    slug: p.slug,
    title: p.title,
    description: p.description,
    breadcrumbs: [['Home', '/'], ['Ecommerce', '/products/ecommerce'], [p.crumb]],
    schema: {
      '@context': 'https://schema.org', '@type': 'SoftwareApplication',
      name: p.schemaName, applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
      description: p.description, url: `https://jwero.ai/${p.slug}`,
      audience: { '@type': 'BusinessAudience', audienceType: 'Jewellery retailers, chains and online jewellery brands' },
      featureList: p.points.map(([t]) => t).join(', '),
      dateModified: '2026-10-10',
      isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero Ecommerce', url: 'https://jwero.ai/products/ecommerce' },
    },
    extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: p.howName, step: p.steps.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
    faqs: p.faqs,
    body: `
${L.hero({
  eyebrow: p.eyebrow,
  h1: p.h1,
  sub: p.sub,
  primary: { href: '#', label: p.cta, wa: 'ecommerce' },
  secondary: { href: `/products/ecommerce#${p.anchor}`, label: 'See it in Jwero Ecommerce' },
})}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">${p.shortQ}</h2><p>${p.shortA}</p></div></section>

${L.section(`${L.sectionHead('BEFORE AND AFTER', p.leakHead, '')}<div class="erp-leak-list">${p.leaks.map(([a, b]) => `<p><span>${a}</span><b>${b}</b></p>`).join('')}</div>`, { tone: 'tint' })}

${p.miniHead ? L.section(`${L.sectionHead('SEE IT', p.miniHead, '')}${mini(p)}`) : ''}

${L.section(`${L.sectionHead('WHAT YOU GET', p.pointsHead, '')}${L.cards(p.points.map(([title, text, icon]) => ({ icon, title, text })), 3)}`)}

${L.section(`${L.sectionHead('GETTING STARTED', p.howName + '.', 'Five steps.')}${L.steps(p.steps.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.section(`<div class="gem-head"><h2>Part of Jwero Ecommerce.</h2><p>${p.partOf} <a href="/products/ecommerce#${p.anchor}">See it in Jwero Ecommerce →</a></p></div>`)}

${L.section(`<p class="cta-note" style="text-align:center">Last updated ${UPDATED}.</p>`)}

${L.ctaBand(p.bandTitle, p.bandText, 'ecommerce')}
`,
  };
}


const L2 = (o) => landing(o);
const pz = L2({
  slug: 'jewellery-website-personalisation', crumb: 'Website personalisation', anchor: 'personalise', miniHead: 'Pick a visitor, watch the page change.',
  title: 'Jewellery Website Personalisation: By Audience, From Her Record | Jwero',
  description: 'Personalise a jewellery website: banners and product-page blocks by audience, recommendations and recently viewed from each visitor’s record, gold plan members and bridal browsers shown what fits them.',
  schemaName: 'Jwero jewellery website personalisation',
  eyebrow: 'JEWELLERY WEBSITE PERSONALISATION',
  h1: 'The same store, shown differently to a first visit, a plan member and a bride.',
  sub: 'Banners and product blocks by audience, picks from what she viewed and bought, and the right next step for each visitor.',
  cta: 'Show me my site personalised',
  shortQ: 'What is website personalisation for jewellers?',
  shortA: 'Showing each visitor the content most likely to help her buy: a welcome for a first visit, her plan status for a gold plan member, matching pieces for a bride. Jwero does this with audience-based content and product-page blocks, plus recommendations and recently viewed pieces from her record.',
  leakHead: 'From one page for everyone to the right page for each.',
  leaks: [['The same banner for everyone', 'Content by audience'], ['Random “you may also like”', 'Picks from what she viewed and bought'], ['Plan members treated as strangers', 'Her plan status and pieces to match'], ['Bridal browsers lost in bestsellers', 'Pieces that go with what she viewed'], ['Visits forgotten', 'Every visit on her record']],
  pointsHead: 'What personalisation covers.',
  points: [
    ['Audiences', 'Built from segments, campaigns and behaviour.', 'users'],
    ['Content by audience', 'Banners and sections shown to chosen audiences.', 'sparkle'],
    ['Product-page blocks', 'Blocks on product pages targeted by audience.', 'gem'],
    ['Recommendations', 'AI picks and pieces that go with it.', 'heart'],
    ['Recently viewed', 'Her trail, ready when she returns.', 'eye'],
    ['On her record', 'Visits and views beside her purchases.', 'record'],
  ],
  howName: 'How to personalise a jewellery website',
  steps: [['Turn on visitor tracking', 'With consent.'], ['Build audiences', 'First visits, plan members, bridal browsers.'], ['Target content', 'Banners and product blocks by audience.'], ['Let picks run', 'Recommendations and recently viewed.'], ['Test it', 'A/B test the personalised version.']],
  partOf: 'Personalisation is part of Optimize, inside Jwero Ecommerce.',
  faqs: [
    { q: 'Can I show different banners to different visitors?', a: 'Yes. Content and product-page blocks can be shown to chosen audiences.' },
    { q: 'Where do recommendations come from?', a: 'From each visitor’s browsing and purchases, and pieces that go with what she is viewing.' },
    { q: 'Do I need a separate tool?', a: 'No. Personalisation is built into Jwero Ecommerce.' },
  ],
  bandTitle: 'See your site personalised.', bandText: 'Share your site; we will show what three kinds of visitor would see.',
});
const ab = L2({
  slug: 'jewellery-website-ab-testing', crumb: 'Heatmaps and A/B tests', anchor: 'optimize', miniHead: 'Where visitors drop, and the fix for each step.',
  title: 'Heatmaps and A/B Testing for Jewellery Websites: Funnels, Push, Popups | Jwero',
  description: 'Heatmaps, funnels and A/B tests for jewellery websites: see where visitors drop, test the fix, declare a winner, and bring visitors back with popups and web push.',
  schemaName: 'Jwero heatmaps and A/B testing for jewellers',
  eyebrow: 'HEATMAPS AND A/B TESTS FOR JEWELLERS',
  h1: 'Find where your website loses orders. Test the fix. Keep the winner.',
  sub: 'Funnels show the drop, heatmaps show why, A/B tests prove the fix, and popups and web push catch the visitors who leave.',
  cta: 'Show me my site’s funnel',
  shortQ: 'How do jewellers improve their website conversion?',
  shortA: 'By measuring where visitors drop, seeing what they miss and testing changes one at a time. Jwero Optimize gives funnels and goals, heatmaps, A/B tests with a declared winner, popups, polls, lead forms and web push, all on the same visitor record.',
  leakHead: 'From guessing to knowing.',
  leaks: [['“The site is fine”', 'Funnels show where visitors drop'], ['Redesigns on opinion', 'A/B tests with a declared winner'], ['Nobody sees the price breakup', 'Heatmaps show what is missed'], ['Visitors leave silently', 'Popups, polls and lead forms'], ['Festival news by chance', 'Web push to subscribers']],
  pointsHead: 'Optimize, in one place.',
  points: [
    ['Funnels and goals', 'Product view to order, step by step.', 'activity'],
    ['Heatmaps', 'Clicks, scrolls and where attention stops.', 'eye'],
    ['A/B tests', 'Two versions, a winner declared.', 'branches'],
    ['Popups and forms', 'Offers and lead capture, built visually.', 'megaphone'],
    ['Web push', 'Campaigns to subscribers.', 'send'],
    ['Attribution', 'Orders by source, campaign and UTM.', 'trend'],
  ],
  howName: 'How to A/B test a jewellery website',
  steps: [['Define the funnel', 'Product view, cart, checkout, order.'], ['Find the drop', 'The step losing most visitors.'], ['Look at the heatmap', 'What visitors miss there.'], ['Test a fix', 'Two versions, split traffic.'], ['Keep the winner', 'Declare it and move on.']],
  partOf: 'Optimize is built into Jwero Ecommerce.',
  faqs: [
    { q: 'How long should an A/B test run?', a: 'Until each version has enough visitors to show a clear difference, often a week or two for a jewellery site.' },
    { q: 'Do I need Google Analytics?', a: 'Funnels and attribution are built in; Google Analytics can be added with consent too.' },
    { q: 'Can I send web push?', a: 'Yes, campaigns to subscribers, with token health tracked.' },
  ],
  bandTitle: 'See your website’s funnel.', bandText: 'Share last month’s visitors; we will show where they drop.',
});
const reserve = L2({
  slug: 'reserve-online-collect-in-store-jewellery', crumb: 'Reserve and collect', anchor: 'showroom',
  title: 'Reserve Online, Collect in Store for Jewellers: Pickup Codes, Visits | Jwero',
  description: 'Reserve online and collect in store for jewellers: customers reserve a piece at the branch that holds it, collect with a pickup code, or book a showroom visit in a time slot, on the same stock as your counter.',
  schemaName: 'Jwero reserve and collect for jewellers',
  eyebrow: 'RESERVE ONLINE, COLLECT IN STORE',
  h1: 'She finds it online. She tries it in your showroom.',
  sub: 'Reserve at the branch that holds the piece, collect with a pickup code, or book a showroom visit, on the same stock as your counter.',
  cta: 'Show me reserve and collect',
  shortQ: 'What is reserve online, collect in store for jewellery?',
  shortA: 'A customer reserves a piece on your website at the branch that holds it and collects it there, often after trying it on. Jwero sends a pickup code, holds the piece in the same stock as your counter, and puts the reservation on her record.',
  leakHead: 'From “is it available?” to “it is waiting for you”.',
  leaks: [['Calls to ask if a piece is in', 'Reserved at the branch that holds it'], ['Piece sold at the counter meanwhile', 'Same stock, held for her'], ['No idea who is coming', 'Visits booked in time slots'], ['Staff unprepared', 'Her reservation on her record'], ['Online and showroom apart', 'One customer, one record']],
  pointsHead: 'The showroom, online.',
  points: [
    ['Reserve at a branch', 'At the branch that holds the piece.', 'store'],
    ['Pickup code', 'Sent to her for collection.', 'receipt'],
    ['Visit booking', 'Showroom visits in time slots.', 'calendar'],
    ['Same stock', 'As your counter, never sold twice.', 'box'],
    ['On her record', 'Your team sees what she reserved.', 'record'],
    ['Every branch', 'Each with its own stock and slots.', 'branches'],
  ],
  howName: 'How to set up reserve and collect for a jewellery store',
  steps: [['Set pickup branches', 'Each with its stock.'], ['Turn on reservations', 'On product pages.'], ['Open visit slots', 'Times your team can serve.'], ['Brief the counter', 'Reservations on the day’s list.'], ['Collect and bill', 'With the pickup code.']],
  partOf: 'Reserve and collect is part of Jwero Ecommerce.',
  faqs: [
    { q: 'Can a customer reserve at a specific branch?', a: 'Yes, at the branch that holds the piece, and collect it with a pickup code.' },
    { q: 'Can she book a showroom visit instead?', a: 'Yes, in a time slot your team opens.' },
    { q: 'Can the piece be sold at the counter meanwhile?', a: 'The website and counter share one stock, so a reserved piece is held for her.' },
  ],
  bandTitle: 'See reserve and collect.', bandText: 'Tell us your branches; we will show a reservation end to end.',
});
const cart = L2({
  slug: 'abandoned-cart-recovery-for-jewellers', crumb: 'Abandoned carts', anchor: 'recover', miniHead: 'What happens after she leaves.',
  title: 'Abandoned Cart Recovery for Jewellers: WhatsApp and Email Journeys | Jwero',
  description: 'Abandoned cart recovery for jewellery websites: carts left behind trigger the WhatsApp or email journey you set, back-in-stock emails, and the visit on her record for your team.',
  schemaName: 'Jwero abandoned cart recovery for jewellers',
  eyebrow: 'ABANDONED CART RECOVERY FOR JEWELLERS',
  h1: 'She left a necklace in her cart. Your journey brings her back.',
  sub: 'A cart left behind triggers the WhatsApp or email journey you set, a returning piece triggers a back-in-stock email, and your team sees what she wanted.',
  cta: 'Show me a cart journey',
  shortQ: 'How do jewellers recover abandoned carts?',
  shortA: 'By following up while the customer still cares, with the piece she left and a reason to come back, often an offer or a showroom visit. In Jwero, an abandoned cart triggers a journey you set up on WhatsApp or email, and her cart and viewed pieces stay on her record.',
  leakHead: 'From lost carts to second chances.',
  leaks: [['Cart forgotten', 'Triggers your WhatsApp or email journey'], ['Size out of stock', 'Back-in-stock email when it returns'], ['Nobody knows she visited', 'Visit and pieces on her record'], ['Same message for all', 'Journeys by audience'], ['No idea what worked', 'Orders traced to the journey']],
  pointsHead: 'Bringing her back.',
  points: [
    ['Cart trigger', 'Abandoned carts start a journey.', 'activity'],
    ['WhatsApp or email', 'The channel and wording you choose.', 'whatsapp'],
    ['Back in stock', 'An email when a piece returns.', 'mail'],
    ['On her record', 'Visits, views and cart.', 'record'],
    ['Showroom invite', 'Book a visit from the message.', 'calendar'],
    ['Traced', 'Orders linked to the journey.', 'pie'],
  ],
  howName: 'How to set up abandoned cart recovery for a jewellery website',
  steps: [['Turn on tracking', 'With consent.'], ['Open the journey builder', 'Choose the abandoned cart trigger.'], ['Write the messages', 'WhatsApp or email, with timing.'], ['Add an offer or a visit', 'A reason to return.'], ['Watch the results', 'Orders traced to the journey.']],
  partOf: 'Cart journeys are part of Jwero Ecommerce and Customer Journeys.',
  faqs: [
    { q: 'Is the cart message sent automatically?', a: 'Once you set up the journey, yes: an abandoned cart triggers it on WhatsApp or email.' },
    { q: 'What about pieces that were out of stock?', a: 'A back-in-stock email goes out when the piece returns.' },
    { q: 'Can the message invite her to the showroom?', a: 'Yes, with a link to book a visit.' },
  ],
  bandTitle: 'See a cart journey.', bandText: 'We will show the journey Jwero would run for your carts.',
});
module.exports = [pz, ab, reserve, cart];
