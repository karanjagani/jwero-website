// Extension pages for Personalised Promotions (2026-10-10). Not in the menu. Each
// targets one search phrase and hands the reader to its section of
// /products/promotions. Same facts and limits as content/promotions.js.
const L = require('../lib');
const UPDATED = '10 October 2026';
const P = require('./promotions').parts;
const MINI = { broadcasts: [() => P.personal(), 'single'], segments: [() => P.segments(), 'single'], campaigns: [() => P.results(), 'chain'], ads: [() => P.adLoop(), 'brand'] };
const mini = (p) => { const m = MINI[p.anchor]; if (!m) return ''; return `${m[0]()}<p class="soc-mini-go"><a class="btn btn-ghost" href="/products/promotions?pr=${m[1]}#for-you" data-pr-cta="mini-${p.slug}">See Personalised Promotions for my business →</a></p>`; };

function landing(p) {
  return {
    slug: p.slug,
    title: p.title,
    description: p.description,
    breadcrumbs: [['Home', '/'], ['Personalised Promotions', '/products/promotions'], [p.crumb]],
    schema: {
      '@context': 'https://schema.org', '@type': 'SoftwareApplication',
      name: p.schemaName, applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
      description: p.description, url: `https://jwero.ai/${p.slug}`,
      audience: { '@type': 'BusinessAudience', audienceType: 'Jewellery retailers, chains and online jewellery brands' },
      featureList: p.points.map(([t]) => t).join(', '),
      dateModified: '2026-10-10',
      isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero Personalised Promotions', url: 'https://jwero.ai/products/promotions' },
    },
    extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: p.howName, step: p.steps.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
    faqs: p.faqs,
    body: `
${L.hero({
  eyebrow: p.eyebrow,
  h1: p.h1,
  sub: p.sub,
  primary: { href: '#', label: p.cta, wa: 'promotions' },
})}

${L.section(`<div class="ec-ad-meter">${P.meter(p.preset)}</div>`, { tone: 'tint' })}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">${p.shortQ}</h2><p>${p.shortA}</p></div></section>

${L.section(`${L.sectionHead('BEFORE AND AFTER', p.leakHead, '')}<div class="erp-leak-list">${p.leaks.map(([a, b]) => `<p><span>${a}</span><b>${b}</b></p>`).join('')}</div>`, { tone: 'tint' })}

${p.miniHead ? L.section(`${L.sectionHead('SEE IT', p.miniHead, '')}${mini(p)}`) : ''}

${L.section(`${L.sectionHead('WHAT YOU GET', p.pointsHead, '')}${L.cards(p.points.map(([title, text, icon]) => ({ icon, title, text })), 3)}`)}

${L.section(`${L.sectionHead('GETTING STARTED', p.howName + '.', 'Five steps.')}${L.steps(p.steps.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.section(`<div class="gem-head"><h2>Part of Personalised Promotions.</h2><p>${p.partOf} <a href="/products/promotions#${p.anchor}">See it in Personalised Promotions →</a></p></div>`)}

${L.section(`<p class="cta-note" style="text-align:center">Last updated ${UPDATED}.</p>`)}

${L.ctaBand(p.bandTitle, p.bandText, 'promotions')}
`,
  };
}



const L2 = (o) => landing(o);
const wa = L2({
  slug: 'whatsapp-broadcast-software-for-jewellers', crumb: 'WhatsApp broadcasts', anchor: 'broadcasts', preset: ['wa'], miniHead: 'One broadcast, three customers.',
  title: 'WhatsApp Broadcast Software for Jewellers: Segments, Best Time, Consent | Jwero',
  description: 'WhatsApp broadcast software for jewellers: send to live segments, personalised with her name, occasion and today’s gold rate, at each customer’s best time, with consent, frequency caps and follow-ups to non-responders.',
  schemaName: 'Jwero WhatsApp broadcasts for jewellers',
  eyebrow: 'WHATSAPP BROADCASTS FOR JEWELLERS',
  h1: 'A WhatsApp broadcast that reads like a personal note.',
  sub: 'To the right segment, with her name, her occasion and today’s gold rate, at the time she usually reads, inside consent and frequency limits.',
  cta: 'Show me a broadcast to my customers',
  shortQ: 'What is WhatsApp broadcast software for jewellers?',
  shortA: 'Software that sends approved WhatsApp templates to chosen customers at once. Jwero picks them from live segments, personalises each message with her name, occasion and today’s gold rate, sends at each customer’s best time, applies consent and frequency caps, and follows up those who did not respond.',
  leakHead: 'From blasting the whole list to the right people.',
  leaks: [['The whole contact list', 'A live segment'], ['“Dear customer”', 'Her name, her occasion, today’s gold rate'], ['Sent at 11 pm', 'At the time she usually reads'], ['Blocked for spamming', 'Consent and frequency caps'], ['No idea who read it', 'Delivered and read, with follow-ups']],
  pointsHead: 'Broadcasts, done properly.',
  points: [
    ['Live segments', 'From purchases, plans, occasions and engagement.', 'target'],
    ['Personal tokens', 'Name, store, loyalty points and today’s gold rate.', 'sparkle'],
    ['Carousels', 'Approved templates with your pieces.', 'gem'],
    ['Best time', 'Learnt for each customer.', 'activity'],
    ['Consent and caps', 'Opt-outs, quiet hours and frequency limits.', 'shield'],
    ['Follow-up', 'Delivered and read tracked; non-responders retargeted.', 'refresh'],
  ],
  howName: 'How to send a WhatsApp broadcast for a jewellery shop',
  steps: [['Pick the segment', 'Ready, filtered or typed in plain words.'], ['Choose the template', 'Approved by WhatsApp, with your pieces.'], ['Personalise', 'Name, occasion and today’s gold rate.'], ['Approve and schedule', 'Sent at each customer’s best time.'], ['Follow up', 'Retarget those who did not read or reply.']],
  partOf: 'Broadcasts are one channel of Personalised Promotions.',
  faqs: [
    { q: 'Can I send WhatsApp broadcasts to all customers?', a: 'To customers who agreed to WhatsApp, using approved templates. Jwero checks consent and frequency caps for you.' },
    { q: 'Can the message show today’s gold rate?', a: 'Yes, as a token that fills in the rate for 24K, 22K or 18K.' },
    { q: 'What happens to people who did not respond?', a: 'You can send them a follow-up, or reach them by SMS, email or an AI call.' },
  ],
  bandTitle: 'See a broadcast to your customers.', bandText: 'Tell us the moment; we will show the segment and each message.',
});
const seg = L2({
  slug: 'jewellery-customer-segmentation-software', crumb: 'Customer segmentation', anchor: 'segments', preset: ['quiet'], miniHead: 'From every customer to the right few.',
  title: 'Jewellery Customer Segmentation Software: Live Segments, RFM, Plain Words | Jwero',
  description: 'Customer segmentation software for jewellers: live segments from purchases, metal, spend, recency, gold plans, occasions, location and engagement, RFM, 41 ready segments and segments typed in plain words.',
  schemaName: 'Jwero customer segmentation for jewellers',
  eyebrow: 'CUSTOMER SEGMENTATION FOR JEWELLERS',
  h1: 'Every customer you should talk to this week, found for you.',
  sub: 'Live segments from what they bought, what they are saving for, when their occasions fall and how engaged they are. Or just type who you want.',
  cta: 'Show me my best segments',
  shortQ: 'What is customer segmentation software for jewellers?',
  shortA: 'Software that groups customers by purchases, metal, spend, recency, gold plans, occasions, location and engagement, so each promotion reaches the people it is for. Jwero keeps segments live, offers 41 ready ones, includes RFM, and turns plain words into a segment.',
  leakHead: 'From one list to the right lists.',
  leaks: [['One spreadsheet of everyone', 'Live segments'], ['Lists out of date', 'Customers move in and out as they buy'], ['Building filters by hand', 'Type it in plain words'], ['Guessing who is valuable', 'RFM and score bands'], ['Sending to people who opted out', 'Reachable counts, by channel']],
  pointsHead: 'Segments from your own records.',
  points: [
    ['Purchases and metal', 'What, when, how much, and which metal.', 'receipt'],
    ['Gold plans and balances', 'Plans, girvi, khata, store credit, loyalty.', 'coins'],
    ['Occasions', 'Birthdays, anniversaries and stated interests.', 'gift'],
    ['Location', 'Country, state, city and pincode.', 'globe'],
    ['Engagement', 'Broadcasts, push and delivery outcomes.', 'activity'],
    ['Plain words', 'Type who you want; AI builds the rule.', 'sparkle'],
  ],
  howName: 'How to segment jewellery customers',
  steps: [['Start from a ready segment', 'Or a blank one.'], ['Add filters', 'Purchases, plans, occasions, location, engagement.'], ['Check the size and value', 'Reachable count by channel.'], ['Save it live', 'It updates itself.'], ['Use it', 'Broadcast, campaign, journey, AI calls or a Meta audience.']],
  partOf: 'Segments feed every channel of Personalised Promotions.',
  faqs: [
    { q: 'What is RFM for jewellers?', a: 'Grouping customers by how recently, how often and how much they buy. Jwero has RFM as a segment filter.' },
    { q: 'Do segments update themselves?', a: 'Yes. A live segment is a rule, so customers move in and out as they buy and engage.' },
    { q: 'Can I see the size before sending?', a: 'Yes, with the reachable count by channel and the value of the customers in it.' },
  ],
  bandTitle: 'Find your best segments.', bandText: 'We will show the five segments worth acting on this week.',
});
const fest = L2({
  slug: 'festival-marketing-campaigns-for-jewellers', crumb: 'Festival campaigns', anchor: 'campaigns', preset: ['scheme', 'wa'], miniHead: 'What a festival campaign brings back.',
  title: 'Festival Marketing Campaigns for Jewellers: Diwali, Dhanteras, Akshaya Tritiya | Jwero',
  description: 'Festival campaigns for jewellers: suggestions ahead of Diwali, Dhanteras and Akshaya Tritiya, an AI strategist from a brief, A/B tests, coupons and loyalty, every channel at each customer’s best time, and revenue by channel.',
  schemaName: 'Jwero festival campaigns for jewellers',
  eyebrow: 'FESTIVAL CAMPAIGNS FOR JEWELLERS',
  h1: 'Every festival planned before it arrives, and measured in bills after.',
  sub: 'Festival suggestions ahead of time, a campaign drafted from your brief, two versions tested, offers attached, and revenue by channel.',
  cta: 'Show me my next festival campaign',
  shortQ: 'How should jewellers run festival campaigns?',
  shortA: 'Plan ahead of Akshaya Tritiya, Dhanteras, Diwali and the wedding season, pick the right segment, test two versions, attach an offer, send on the channels each customer uses, and measure bills. Jwero suggests festival promotions, drafts the campaign from a brief and traces revenue by channel.',
  leakHead: 'From last-minute blasts to planned campaigns.',
  leaks: [['Planned the night before', 'Suggested ahead of the festival'], ['One message for all', 'Two versions tested'], ['Offer typed in by hand', 'Coupons and loyalty attached'], ['Sent at the wrong hour', 'Each customer’s best time'], ['“It went well, I think”', 'Revenue by campaign and channel']],
  pointsHead: 'A festival campaign in Jwero.',
  points: [
    ['Festival suggestions', 'From the festival calendar, ahead of time.', 'calendar'],
    ['Brief to campaign', 'AI turns your brief into a draft.', 'sparkle'],
    ['A/B tests', 'The better version goes to the rest.', 'branches'],
    ['Offers', 'Coupons and loyalty points.', 'gift'],
    ['Every channel', 'WhatsApp, SMS, email, push and AI calls.', 'send'],
    ['Revenue', 'Visits and bills by channel.', 'pie'],
  ],
  howName: 'How to plan a jewellery festival campaign',
  steps: [['Pick the festival', 'From the suggestions.'], ['Write the brief', 'AI drafts the campaign.'], ['Choose the segment', 'With reachable counts.'], ['Test two versions', 'The winner goes to everyone.'], ['Measure bills', 'By campaign and channel.']],
  partOf: 'Festival campaigns are part of Personalised Promotions.',
  faqs: [
    { q: 'When should a jeweller start Diwali marketing?', a: 'Three weeks ahead is comfortable: segment, test, then send in the week before Dhanteras.' },
    { q: 'Which channels work for festival campaigns?', a: 'WhatsApp first, with SMS, email, push and AI calls for those who prefer them.' },
    { q: 'How do I know it worked?', a: 'Jwero traces visits and bills to the campaign and channel.' },
  ],
  bandTitle: 'Plan your next festival.', bandText: 'Tell us the festival; we will show the campaign and the segment.',
});
const ctwa = L2({
  slug: 'click-to-whatsapp-ads-for-jewellers', crumb: 'Click-to-WhatsApp ads', anchor: 'ads', preset: ['bridal'], miniHead: 'From an audience to a bill, and back.',
  title: 'Click-to-WhatsApp Ads for Jewellers: Meta, Google, Pinterest, Sales Sent Back | Jwero',
  description: 'Click-to-WhatsApp ads for jewellers: Meta audiences from your segments, ads drafted from your catalogue, chats into One Inbox, Meta lead forms, Google and Pinterest too, budget alerts, and sales sent back to Meta and Google.',
  schemaName: 'Jwero click-to-WhatsApp ads for jewellers',
  eyebrow: 'CLICK-TO-WHATSAPP ADS FOR JEWELLERS',
  h1: 'Ads that start a conversation, and learn from the bills they bring.',
  sub: 'Your segments as Meta audiences, ads drafted from your catalogue, every click a chat in One Inbox, and real sales sent back to Meta and Google.',
  cta: 'Show me an ad for my customers',
  shortQ: 'Do click-to-WhatsApp ads work for jewellers?',
  shortA: 'They suit jewellery well, because customers want to ask about a piece before visiting. In Jwero, your segment becomes a Meta audience, the ad is drafted from your catalogue, each click opens a chat in One Inbox, and bills are sent back to Meta and Google so they find more real buyers.',
  leakHead: 'From clicks to bills.',
  leaks: [['Agency logins', 'Your own accounts, connected'], ['Strangers targeted', 'Your segments as Meta audiences'], ['Chats on one phone', 'Every click in One Inbox'], ['Judged by clicks', 'Return on spend from bills'], ['Platforms guessing', 'Sales sent back to Meta and Google']],
  pointsHead: 'Ads in Jwero.',
  points: [
    ['Click-to-WhatsApp', 'Each click a chat in One Inbox.', 'whatsapp'],
    ['Meta audiences', 'Your segments, synced.', 'target'],
    ['Drafted for you', 'Ads from your catalogue photos, with AI copy.', 'sparkle'],
    ['Lead forms and catalogue ads', 'Meta lead forms and product sets.', 'gem'],
    ['Google and Pinterest', 'Search, Performance Max and promoted pins.', 'globe'],
    ['Sales sent back', 'To Meta and Google, from real bills.', 'refresh'],
  ],
  howName: 'How to run click-to-WhatsApp ads for a jewellery shop',
  steps: [['Connect your accounts', 'Meta, Google and Pinterest stay yours.'], ['Pick the audience', 'A segment, synced to Meta.'], ['Approve the draft', 'From your catalogue, with AI copy.'], ['Set the budget', 'With alerts as spend grows.'], ['Watch the bills', 'Return on spend from real sales.']],
  partOf: 'Ads are one channel of Personalised Promotions.',
  faqs: [
    { q: 'Which ad platforms does Jwero publish to?', a: 'Meta, Google (Search and Performance Max) and Pinterest promoted pins.' },
    { q: 'Where do the chats go?', a: 'Into One Inbox, on the customer’s record.' },
    { q: 'Are sales reported back?', a: 'Yes, to Meta and Google, so they learn from real buyers.' },
  ],
  bandTitle: 'See an ad for your customers.', bandText: 'We will show the audience, the draft and the budget.',
});
module.exports = [wa, seg, fest, ctwa];
