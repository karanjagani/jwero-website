// Extension pages for the Social page (2026-10-10). Not in the menu. Each targets
// one search phrase and hands the reader to its section of /products/social-media.
// Same facts and limits as content/social.js.
const L = require('../lib');
const UPDATED = '10 October 2026';
const P = require('./social').parts;
// Each extension page carries a working piece of its section and a way into the
// Social page with the matching business type already chosen (?soc=).
const MINI = {
  'one-post': [() => P.preview(true), 'single'],
  calendar: [() => P.calendar(), 'brand'],
  reviews: [() => P.socFeed(), 'chain'],
  comments: [() => P.socFeed(), 'single'],
};
const mini = (p) => { const m = MINI[p.mini || p.anchor]; if (!m) return ''; return `${m[0]()}<p class="soc-mini-go"><a class="btn btn-ghost" href="/products/social-media?soc=${m[1]}#for-you" data-soc-cta="mini-${p.slug}">See Jwero Social for my business →</a></p>`; };

function landing(p) {
  return {
    slug: p.slug,
    title: p.title,
    description: p.description,
    breadcrumbs: [['Home', '/'], ['Social media', '/products/social-media'], [p.crumb]],
    schema: {
      '@context': 'https://schema.org', '@type': 'SoftwareApplication',
      name: p.schemaName, applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
      description: p.description, url: `https://jwero.ai/${p.slug}`,
      audience: { '@type': 'BusinessAudience', audienceType: 'Jewellery retailers, chains and brands' },
      featureList: p.points.map(([t]) => t).join(', '),
      dateModified: '2026-10-10',
      isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero Social', url: 'https://jwero.ai/products/social-media' },
    },
    extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: p.howName, step: p.steps.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
    faqs: p.faqs,
    body: `
${L.hero({
  eyebrow: p.eyebrow,
  h1: p.h1,
  sub: p.sub,
  primary: { href: '#', label: p.cta, wa: 'social' },
  secondary: { href: `/products/social-media#${p.anchor}`, label: 'See it in Jwero Social' },
})}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">${p.shortQ}</h2><p>${p.shortA}</p></div></section>

${L.section(`${L.sectionHead('BEFORE AND AFTER', p.leakHead, '')}<div class="erp-leak-list">${p.leaks.map(([a, b]) => `<p><span>${a}</span><b>${b}</b></p>`).join('')}</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SEE IT', p.miniHead || 'How it looks in Jwero.', '')}${mini(p)}`)}

${L.section(`${L.sectionHead('WHAT YOU GET', p.pointsHead, '')}${L.cards(p.points.map(([title, text, icon]) => ({ icon, title, text })), 3)}`)}

${L.section(`${L.sectionHead('GETTING STARTED', p.howName + '.', 'Five steps.')}${L.steps(p.steps.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.section(`<div class="gem-head"><h2>Part of Jwero Social.</h2><p>${p.partOf} <a href="/products/social-media#${p.anchor}">See it in Jwero Social →</a></p></div>`)}

${L.section(`<p class="cta-note" style="text-align:center">Last updated ${UPDATED}.</p>`)}

${L.ctaBand(p.bandTitle, p.bandText, 'social')}
`,
  };
}

const aiPosts = landing({
  slug: 'ai-posts-and-reels-for-jewellers', crumb: 'AI posts and reels', anchor: 'one-post', miniHead: 'Pick a signal, see the post.',
  title: 'AI Posts and Reels for Jewellers: On-Model Photos, Video, One Click | Jwero',
  description: 'AI posts and reels for jewellers: post ideas from your own stock and sales, AI captions and hashtags, pieces on a model, short video from a photo, and one-click posting to every channel.',
  schemaName: 'Jwero AI posts and reels for jewellers',
  eyebrow: 'AI POSTS AND REELS FOR JEWELLERS',
  h1: 'A post a day, made by AI from your own stock.',
  sub: 'Jwero picks the piece worth posting, writes the caption, puts it on a model, turns it into a short video and posts it in one click.',
  cta: 'Show me a post made from my stock',
  shortQ: 'Can AI make posts and reels for a jewellery shop?',
  shortA: 'Yes. Jwero reads your stock and sales for what is worth posting, writes captions and hashtags, puts the piece on a model, styles the photo and turns it into a short video. You post it in one click, or let Autopilot publish it at the best time.',
  leakHead: 'From a day’s work to a minute.',
  leaks: [['Waiting for a designer', 'Caption, image and video made by AI'], ['Plain product photos', 'Pieces shown on a model'], ['No time for video', 'A short video from one photo'], ['Posting app by app', 'Every channel in one click'], ['Guessing what to post', 'Ideas from your own stock and sales']],
  pointsHead: 'What AI makes for you.',
  points: [
    ['Post ideas', 'From last pieces, new arrivals, slow stock, festivals and gold rate moves.', 'eye'],
    ['Captions and hashtags', 'In your languages, in your shop’s voice.', 'sparkle'],
    ['On-model photos', 'Your piece worn by a model, from a product photo.', 'camera'],
    ['Short video', 'An image turned into a short video for reels and Shorts.', 'video'],
    ['One-click posting', 'To Instagram, Facebook, YouTube and the rest.', 'send'],
    ['Autopilot', 'Made and published at the best time, on its own.', 'activity'],
  ],
  howName: 'How to make AI posts for a jewellery shop',
  steps: [['Connect your channels', 'Once, for every platform.'], ['Bring your catalogue', 'Photos and stock are already in Jwero.'], ['Open the opportunities', 'Ideas appear every night.'], ['Make the post', 'Caption, model photo and video in a tap.'], ['Post or automate', 'One click, or Autopilot.']],
  partOf: 'The same opportunities feed the calendar, and every comment comes back to one screen.',
  faqs: [
    { q: 'Where do the post ideas come from?', a: 'From your own data: sales, stock, wishlists, schemes, engagement and the festival calendar.' },
    { q: 'Can AI put my jewellery on a model?', a: 'Yes. A product photo becomes an on-model image, and an image can become a short video.' },
    { q: 'Where do reels go?', a: 'Reels go to Facebook and YouTube Shorts; video posts go to Instagram and the other video channels.' },
  ],
  bandTitle: 'See a post made from your stock.', bandText: 'Connect one channel; we will make this week’s posts from your catalogue.',
});

const calendar = landing({
  slug: 'jewellery-social-media-calendar', crumb: 'Social media calendar', anchor: 'calendar', miniHead: 'A month that fills itself.',
  title: 'Social Media Calendar for Jewellers: Festivals, Best Times, Autopilot | Jwero',
  description: 'A social media calendar for jewellers that fills itself: festival-aware post ideas from your own data, best times from your followers’ engagement, payday and quiet-period timing, and publishing to eight channels.',
  schemaName: 'Jwero social media calendar for jewellers',
  eyebrow: 'SOCIAL MEDIA CALENDAR FOR JEWELLERS',
  h1: 'A calendar that fills itself, three weeks ahead of every festival.',
  sub: 'Festival posts, new arrivals and offers, timed to when your followers engage, with paydays and quiet periods accounted for.',
  cta: 'Show me next month’s calendar',
  shortQ: 'What is a social media calendar for jewellers?',
  shortA: 'A plan of what to post and when, across every channel, built around festivals, launches and the wedding season. Jwero fills it with post ideas from your own data and sets each post at the time your followers engage most.',
  leakHead: 'From last-minute posts to a planned month.',
  leaks: [['Festival post made the night before', 'Planned weeks ahead from the opportunity board'], ['Posting whenever there is time', 'At your followers’ best hours'], ['Same push in a quiet period', 'Fewer posts in quiet periods, more on paydays'], ['One calendar per platform', 'One calendar for eight channels'], ['A blank week', 'Ideas from your own stock and sales']],
  pointsHead: 'A month that plans itself.',
  points: [
    ['Festival aware', 'Navratri, Dhanteras, Diwali, Akshaya Tritiya and the wedding season.', 'calendar'],
    ['Best times', 'From your own last 30 days of engagement.', 'activity'],
    ['Timing nudges', 'Paydays, the lull after a festival, quieter periods.', 'trend'],
    ['Every channel', 'Instagram to Google Business on one calendar.', 'globe'],
    ['Approvals', 'A queue for the people who sign off.', 'shield'],
    ['Autopilot', 'Posts published on their own when you want.', 'send'],
  ],
  howName: 'How to plan a jeweller’s social media calendar',
  steps: [['Connect channels', 'All eight, once.'], ['Open the opportunities', 'Festivals and stock signals arrive nightly.'], ['Drop them on the calendar', 'Times are suggested for you.'], ['Approve the set', 'Or let Autopilot run it.'], ['Watch what works', 'Reach, engagement and sales by post.']],
  partOf: 'Calendar posts are made with the same AI and answered on the same comments screen.',
  faqs: [
    { q: 'When should a jeweller post?', a: 'When your own followers engage most; Jwero works it out from your last 30 days.' },
    { q: 'How far ahead should festival posts be planned?', a: 'Three weeks is comfortable; the opportunity board shows festivals ahead of time.' },
    { q: 'Can the calendar run on its own?', a: 'Yes, in Autopilot. Or keep an approval queue in front.' },
  ],
  bandTitle: 'See next month planned.', bandText: 'Connect one channel; we will show next month’s calendar for your shop.',
});

const reviews = landing({
  slug: 'google-review-management-for-jewellers', crumb: 'Google reviews', anchor: 'comments', mini: 'reviews', miniHead: 'Reviews and comments arriving on one screen.',
  title: 'Google Review Management for Jewellers: Every Branch, One Screen | Jwero',
  description: 'Google review management for jewellers: reviews from every branch in one list, replied from one screen, matched to customers, plus Google Business posts, offers and events.',
  schemaName: 'Jwero Google review management for jewellers',
  eyebrow: 'GOOGLE REVIEWS FOR JEWELLERS',
  h1: 'Every Google review, at every branch, answered from one screen.',
  sub: 'Reviews from all your locations in one list, replied the same day, and the reviewer found on your customer record. Offers and updates posted to Google Business too.',
  cta: 'Show me my Google reviews in one place',
  shortQ: 'How do jewellers manage Google reviews?',
  shortA: 'By reading and answering every review quickly, at every branch, and following up unhappy customers. Jwero brings reviews from all your Google Business locations into one list, lets your team reply from one screen, and posts updates, offers and events to Google Business.',
  leakHead: 'From unanswered reviews to every one replied.',
  leaks: [['Logging into each branch profile', 'Every location in one list'], ['Reviews unanswered for weeks', 'Replied from one screen, the same day'], ['Who is this reviewer?', 'Matched to the customer record'], ['Offers only in the shop', 'Offers and events on Google Business'], ['Branches in the dark', 'One view for the owner']],
  pointsHead: 'Google Business, handled.',
  points: [
    ['Every location', 'Reviews from all branches in one list.', 'google'],
    ['Reply in one place', 'Answer, edit or remove replies from one screen.', 'chat'],
    ['Customer record', 'Reviewers matched to customers where they can be.', 'record'],
    ['Posts and offers', 'Updates, offers and events published to Google Business.', 'megaphone'],
    ['Scheduled', 'Google posts on the same calendar as social.', 'calendar'],
    ['Team access', 'Branch managers answer their own branch.', 'users'],
  ],
  howName: 'How to manage Google reviews for a jewellery chain',
  steps: [['Connect Google Business', 'Every location at once.'], ['Open the reviews list', 'All branches together.'], ['Reply the same day', 'Thanks and fixes from one screen.'], ['Follow up', 'Unhappy customers found on their record.'], ['Post offers', 'Updates and events to Google Business.']],
  partOf: 'Google reviews sit beside comments from six channels on the same screen.',
  faqs: [
    { q: 'Can I see reviews for all my branches?', a: 'Yes. Every connected Google Business location comes into one list.' },
    { q: 'Can I post offers on Google Business?', a: 'Yes. Updates, offers and events, on the same calendar as your other channels.' },
    { q: 'Should jewellers reply to every review?', a: 'Yes. A quick, specific reply to praise and a fix for complaints both show future customers you care.' },
  ],
  bandTitle: 'See every branch’s reviews together.', bandText: 'Connect Google Business; we will show every review in one list.',
});

const comments = landing({
  slug: 'social-media-comment-management-for-jewellers', crumb: 'Comment management', anchor: 'comments', miniHead: 'Every channel’s comments on one screen.',
  title: 'Social Media Comment Management for Jewellers: Six Channels, One Screen | Jwero',
  description: 'Comment management for jewellers: comments from Instagram, Facebook, LinkedIn, YouTube, Threads and X answered from one screen, commenters matched to customers, price questions moved to a chat.',
  schemaName: 'Jwero comment management for jewellers',
  eyebrow: 'COMMENT MANAGEMENT FOR JEWELLERS',
  h1: 'Every “price?” answered, on every channel, from one screen.',
  sub: 'Comments from six channels in one place, each commenter matched to your customer record, and price questions moved to a chat that can close the sale.',
  cta: 'Show me my comments in one place',
  shortQ: 'How do jewellers manage comments across social media?',
  shortA: 'By answering every comment quickly, especially price and availability questions, and moving buyers to a private chat. Jwero brings comments from Instagram, Facebook, LinkedIn, YouTube, Threads and X to one screen, matches commenters to customers, and sends DMs to One Inbox.',
  leakHead: 'From missed comments to answered buyers.',
  leaks: [['Six apps to check', 'One screen for six channels'], ['“Price?” left unanswered', 'Answered and moved to a chat'], ['Who is this commenter?', 'Matched to the customer record'], ['DMs scattered', 'All in One Inbox'], ['No idea what sold', 'Chats and sales traced to the post']],
  pointsHead: 'Comments that turn into customers.',
  points: [
    ['Six channels', 'Instagram, Facebook, LinkedIn, YouTube, Threads and X.', 'chat'],
    ['Reply, like, hide', 'From one screen, by the right person.', 'users'],
    ['Private replies', 'A comment can start a private chat.', 'send'],
    ['Customer record', 'Commenters matched to customers.', 'record'],
    ['DMs in One Inbox', 'With WhatsApp, calls and email.', 'whatsapp'],
    ['Results', 'Chats and sales traced to the post.', 'pie'],
  ],
  howName: 'How to manage social media comments for a jewellery shop',
  steps: [['Connect channels', 'Six comment channels, once.'], ['Open the comments screen', 'Everything in one list.'], ['Answer price questions first', 'And move buyers to a chat.'], ['Assign the rest', 'To the right person.'], ['Close in One Inbox', 'The chat, the payment and the sale.']],
  partOf: 'Comments sit beside Google reviews; DMs land in One Inbox.',
  faqs: [
    { q: 'Which channels’ comments come in?', a: 'Instagram, Facebook, LinkedIn, YouTube, Threads and X.' },
    { q: 'Where do DMs go?', a: 'Instagram, Facebook and X DMs land in One Inbox, with WhatsApp and calls.' },
    { q: 'Can a comment become a sale?', a: 'Yes. Answer it, start a private chat, and close the sale in One Inbox.' },
  ],
  bandTitle: 'See every comment in one place.', bandText: 'Connect Instagram; we will show your comments and who is asking.',
});

module.exports = [aiPosts, calendar, reviews, comments];
