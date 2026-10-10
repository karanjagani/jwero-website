// Personalised Promotions (2026-10-10): Customer Segmentation, Ads Manager,
// Campaigns and Broadcasts merged into one page in the One Inbox design. Old
// addresses 301 to #segments, #ads, #campaigns and #broadcasts (PROMO_MOVED).
// Facts carried from the three pages rebuilt 2026-10-07 and confirmed by Jwero:
// live segments with 41 ready ones and plain-words segments; scores as filters;
// reachable count and value with consent checked; ads generated automatically
// from segments; Meta (Advantage+, lead forms) and Google (Search, Performance
// Max, Shopping) published after approval, caps, alerts and a stop switch;
// click-to-WhatsApp ads into the inbox; AI images, copy and short video; sales
// sent back to Meta and Google; campaigns on WhatsApp, RCS, SMS, email and push;
// A/B test with the winner sent to the rest; catalogue cards at today's rate;
// coupons, vouchers and loyalty; an AI strategist that drafts festival campaigns;
// revenue by campaign and channel.
// Re-checked against pim-app the same day. Corrected: no product prices at the live
// rate inside messages (gold-rate tokens only); RCS only in journeys; no AI ad images
// or video (ads use catalogue photos with AI copy); segment audiences sync to Meta
// only; churn is a score, not a segment filter; A/B in campaigns and journeys, not
// one-off broadcasts. Added: Pinterest promoted pins, catalogue ads, Meta lead forms,
// AI calls as a channel, best send time per customer, frequency caps, quiet hours,
// DND, approvals, retargeting non-responders, festival suggestions.
// Not claimed: lookalikes, control groups, Google Customer Match, karat filters.
const L = require('../lib');
const { icon } = L;
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

// Hero: build an audience, see who you reach and what it could bring.
const meter = () => `<div class="erp-meter pr-meter" data-prm>
  <p class="erp-meter-t">${icon('target')}<b>Who should hear about your Diwali offer?</b></p>
  <div class="pr-chips" role="group" aria-label="Filters">${[['bridal', 'Bought bridal', .17], ['scheme', 'Gold plan members', .22], ['quiet', 'Quiet for 6 months', .3], ['near', 'Near a branch', .6], ['wa', 'Agreed to WhatsApp', .7]].map(([k, t, f], i) => `<button type="button" data-f="${f}" aria-pressed="${i === 1 || i === 4}">${t}</button>`).join('')}</div>
  <label><span>Customers on record <b data-o="base"></b></span><input type="range" data-i="base" min="500" max="100000" step="500" value="12000"></label>
  <div class="erp-meter-bars">
    <a href="#segments" data-b="aud"><span>Customers in this segment</span><i><em></em></i><b></b></a>
    <a href="#campaigns" data-b="buy"><span>Likely to buy, at the rate below</span><i><em></em></i><b></b></a>
  </div>
  <p class="erp-meter-total"><span>Sales this could bring</span><b data-o="total"></b></p>
  <a class="btn btn-primary erp-meter-cta" href="#" data-wa="promotions" data-wa-extra="" data-pr-cta="meter">Build this promotion for my customers</a>
  <details class="erp-meter-as"><summary>The assumptions, change them</summary>
    <label>Customers who buy after a promotion, %<input type="number" data-a="cr" value="3" step="0.5" min="0"></label>
    <label>Average bill, ₹<input type="number" data-a="bill" value="60000" step="5000" min="0"></label>
  </details>
  <p class="erp-meter-note">Filters narrow the list by an illustrative share each. Your real segment shows the exact count.</p>
</div>`;

// "I run a…"
const ICP = [
  ['single', 'store', 'A single store', 'Start with ready segments and WhatsApp broadcasts: anniversaries this month, gold plans due, customers quiet for a year.', 1, 'broadcasts', 'trial', 'Start free for your store'],
  ['chain', 'branches', 'A chain or franchise', 'Start with campaigns by branch and city, approvals, and revenue by campaign and channel for every branch.', 0, 'campaigns', 'demo', 'Book a 30-minute demo for a chain'],
  ['brand', 'megaphone', 'An online brand', 'Start with ads from your segments: Meta and Google, AI creatives, and sales sent back so the platforms find more buyers.', 2, 'ads', 'trial', 'Start free for your brand'],
];
const door = ([k, , , , , , d, label], cls) => d === 'demo'
  ? `<a class="${cls}" href="/book-demo" data-pr-cta="door-${k}">${label}</a>`
  : `<a class="${cls}" href="https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=promotions-${k}" rel="noopener" data-trial data-pr-cta="door-${k}">${label}</a>`;
const icp = () => `<div class="erp-icp soc-icp" data-pr-icp data-cfg='${JSON.stringify(Object.fromEntries(ICP.map(([k, , , , j, lead]) => [k, [j, lead]])))}'>
  <div class="erp-icp-opts" role="tablist" aria-label="I run a…">${ICP.map(([k, ic, t], i) => `<button type="button" role="tab" data-k="${k}" aria-selected="${i === 0}">${icon(ic)}<span>${t}</span></button>`).join('')}</div>
  ${ICP.map((e, i) => `<div class="erp-icp-panel${i === 0 ? ' is-on' : ''}" data-panel="${e[0]}"><p>${e[3]}</p><div class="erp-icp-go"><a href="#one-promo">One promotion ↓</a><a href="#segments">Segments ↓</a><a href="#journeys">Your journey ↓</a><a href="#${e[5]}">${e[5] === 'ads' ? 'Ads' : e[5] === 'campaigns' ? 'Campaigns' : 'Broadcasts'} ↓</a></div><p class="erp-icp-door">${door(e, 'btn btn-primary')}</p></div>`).join('')}
</div>`;

const prog = () => `<nav class="erp-prog" data-erp-prog aria-label="On this page"><div class="erp-prog-in">
  <ol>${[['one-promo', 'One promotion'], ['segments', 'Who'], ['personal', 'What each sees'], ['channels', 'Where'], ['ads', 'Ads'], ['results', 'What it sold']].map(([id, t], i) => `<li><a href="#${id}" data-p="${id}"><b>${i + 1}</b>${t}</a></li>`).join('')}</ol>
  <span class="erp-prog-doors">${ICP.map((e) => door(e, 'btn btn-primary erp-prog-cta pr-door')).join('')}</span>
</div><i class="erp-prog-fill" aria-hidden="true"></i></nav>`;

// One promotion, six steps.
const RUN = [
  ['Planned', 'The AI strategist drafts the Diwali promotion three weeks ahead.', 'calendar'],
  ['Targeted', 'A live segment: plan members and bridal buyers who agreed to WhatsApp.', 'target'],
  ['Personalised', 'Her name, her moment, pieces from her taste and today’s gold rate.', 'sparkle'],
  ['Tested', 'Two versions to a small share; the winner goes to everyone else.', 'branches'],
  ['Sent everywhere she is', 'WhatsApp, SMS, email, push and AI calls, at her best time, plus ads to the same people.', 'send'],
  ['Measured', 'Visits, bills and revenue traced to the promotion and channel.', 'pie'],
];
const RUN_TAGS = [['calendar', 'Diwali, 3 weeks out'], ['target', '2,400 customers'], ['sparkle', 'Her name · her pieces'], ['branches', 'Version B wins'], ['send', '5 channels + ads'], ['check', 'Bills traced']];
const run = () => `<div class="ibx-msg" data-msg style="--n:${RUN.length}">
  <div class="ibx-msg-stage" aria-hidden="true"><div class="ibx-msg-bubble"><p>Diwali promotion · gold plan members and bridal buyers</p><ul>${RUN_TAGS.map(([ic, t], i) => `<li data-k="${i}">${icon(ic)}${t}</li>`).join('')}</ul></div></div>
  <ol class="ibx-msg-steps">${RUN.map(([t, d, ic], i) => `<li data-k="${i}"><span class="ibx-msg-n">${icon(ic)}<b>${i + 1}</b></span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
</div>`;

// Segments: a funnel of filters, plus ready segments.
const SEG_STEPS = [['All customers', 12400], ['Bought bridal in the last 2 years', 2150], ['Lives in Mumbai', 1240], ['High value score band', 520], ['Agreed to WhatsApp', 380]];
const READY = ['Bridal buyers, last 2 years', 'Gold plans due this week', 'Plans maturing in 60 days', 'Quiet for 12 months', 'High value, quiet lately', 'Anniversary next month', 'Birthday this month', 'Diamond buyers', 'Gold coin buyers', 'Abandoned cart', 'Viewed but never bought', 'Followers who never bought', 'Repair waiting for collection', 'Gold loyalty tier'];
const segments = () => `<div class="pr-seg" data-gfx>
  <div class="pr-seg-f">${SEG_STEPS.map(([t, n], k) => `<p style="--i:${k};--w:${Math.max(4, n / 124)}%"><span>${k ? '+ ' : ''}${t}</span><i></i><b>${n.toLocaleString('en-IN')}</b></p>`).join('')}<p class="pr-seg-plain">${icon('sparkle')}Or type it in plain words: “bridal buyers in Surat who have not bought in six months”</p></div>
  <div class="pr-seg-ready"><p class="pc-tag">41 READY SEGMENTS, FOR EXAMPLE</p><div>${READY.map((t) => `<span>${t}</span>`).join('')}</div><p class="pr-seg-to">${icon('send')}Send to a broadcast, a campaign, a journey, AI calls or a Meta audience</p></div>
</div><p class="ibx-legend">Illustrative counts. Segments are live: customers move in and out as they buy, save and engage.</p>`;

// The same promotion, three customers.
const PEOPLE = [
  ['Meera', 'Gold plan, matures in 24 days', 'Meera, your gold plan matures on 12 Nov. Here are three pieces your balance could go towards.', ['Kundan choker', 'Gold bangles', 'Temple jhumka'], 'Book a visit to choose'],
  ['Arjun', 'Bought a ring in 2024, anniversary next week', 'Arjun, your anniversary is next Thursday. Pieces that go with the ring you chose last year.', ['Diamond studs', 'Rose gold band', 'Solitaire pendant'], 'Reserve one at Andheri'],
  ['Priya', 'Viewed bridal sets, never bought', 'Priya, the bridal sets you looked at are back for Diwali, with the matching maang tikka.', ['Bridal choker set', 'Maang tikka', 'Haathphool'], 'See the full set'],
];
const personal = () => `<div class="ec-pz pr-pz" data-ecp>
  <div class="ec-pz-tabs" role="tablist">${PEOPLE.map(([n, d], i) => `<button type="button" role="tab" data-v="${i}" aria-selected="${i === 0}">${icon('users')}<b>${n}</b><small>${d}</small></button>`).join('')}</div>
  <div class="ec-pz-shop pr-wa" aria-live="polite">
    <div class="ec-pz-bar">${icon('whatsapp')}<span>Shree Jewellers · WhatsApp</span></div>
    ${PEOPLE.map(([, , msg, items, cta], i) => `<div class="ec-pz-view${i === 0 ? ' is-on' : ''}" data-vv="${i}"><p class="pr-wa-msg">${msg}</p><div class="ec-pz-items">${items.map((n) => `<span><i>${icon('gem')}</i>${n}</span>`).join('')}</div><span class="pr-wa-btn">${cta}</span></div>`).join('')}
  </div>
  <p class="ibx-legend">Illustrative. One promotion, written once; each customer sees her name, her moment and the pieces that fit her.</p>
</div>`;

// Where the promotion goes.
const CH = [
  ['whatsapp', 'WhatsApp broadcasts', 'Templates and carousels with your pieces and today’s gold rate, to customers who agreed.', 'broadcasts'],
  ['bot', 'AI calls', 'Reminders and offers by AI voice call, inside DND rules.', ''],
  ['phone', 'SMS and RCS', 'SMS for everyone else; RCS rich messages inside automated journeys.', ''],
  ['mail', 'Email', 'Collections and offers for online customers.', ''],
  ['send', 'Push', 'Web push to your site’s subscribers.', ''],
  ['megaphone', 'Meta, Google and Pinterest ads', 'Your segment as a Meta audience, with ads drafted from your catalogue.', ''],
];
const channels = () => `<div class="ibx-ch pr-ch">${CH.map(([ic, t, d, id]) => `<article${id ? ` id="${id}"` : ''}><div class="cap-ico">${icon(ic)}</div><h3>${t}</h3><p>${d}</p></article>`).join('')}</div>
<p class="ibx-legend">Each customer hears on the channels she agreed to, at the time she usually reads, with frequency caps, quiet hours and DND checks applied.</p>`;

// Ads: the loop from segment to sale and back.
const AD_LOOP = [['target', 'Audience', 'Your segment, as a Meta custom audience'], ['sparkle', 'Drafted', 'Ads drafted from your catalogue photos, with AI copy'], ['shield', 'Approved', 'Budget cap, alerts, one switch to stop'], ['megaphone', 'Live', 'Meta, Google and Pinterest'], ['whatsapp', 'Chat', 'Click-to-WhatsApp, into One Inbox'], ['coins', 'Bill', 'Bought at the counter or online'], ['refresh', 'Reported back', 'The sale sent to Meta and Google']];
const adLoop = () => `<div class="pr-loop" data-gfx><ol>${AD_LOOP.map(([ic, t, d], i) => `<li style="--i:${i}"><span>${icon(ic)}</span><b>${t}</b><small>${d}</small></li>`).join('')}</ol><p class="ibx-legend">The loop closes on Meta and Google: they learn from real bills, not clicks.</p></div>`;

// What it sold.
const RES = [['WhatsApp', 62, '₹18.4 lakh'], ['Ads', 41, '₹12.1 lakh'], ['SMS and AI calls', 18, '₹5.2 lakh'], ['Email and push', 9, '₹2.6 lakh']];
const results = () => `<div class="pr-res" data-gfx><div class="pr-res-head"><p><span>Diwali promotion</span><b>₹38.3 lakh</b><small>in bills traced to it</small></p><p><span>Version B</span><b>+21%</b><small>more visits than A</small></p><p><span>Customers reached</span><b>2,400</b><small>consent checked</small></p></div>
<ol>${RES.map(([c, w, v], i) => `<li style="--i:${i};--w:${w}%"><span>${c}</span><i></i><b>${v}</b></li>`).join('')}</ol><p class="ibx-legend">Illustrative. Revenue by promotion and by channel, from bills at the counter and orders online.</p></div>`;

const WHO = { c: ['Customer', 'is-c'], a: ['Jwero', 'is-a'], h: ['Your team', 'is-h'] };
const PATHS = [
  ['A Diwali promotion across branches', [
    ['The AI strategist drafts it three weeks ahead', 'a', 'calendar'],
    ['Your marketing head approves audience and offer', 'h', 'shield'],
    ['Two versions tested; the winner goes to all', 'a', 'branches'],
    ['WhatsApp, SMS and email by consent, at each one’s best time', 'a', 'send'],
    ['Revenue by branch and channel', 'a', 'pie'],
  ]],
  ['Gold plans due this week', [
    ['The ready segment fills itself every morning', 'a', 'target'],
    ['A WhatsApp broadcast with her amount and a payment link', 'a', 'whatsapp'],
    ['She pays in the chat', 'c', 'coins'],
    ['The rest get an SMS or an AI call', 'a', 'bot'],
    ['Overdue ones go to your team’s list', 'h', 'users'],
  ]],
  ['An ad that found new bridal buyers', [
    ['Bridal buyers become an ad audience', 'a', 'target'],
    ['Ads drafted from catalogue photos; you approve the budget', 'h', 'sparkle'],
    ['Click-to-WhatsApp ads go live on Meta', 'a', 'megaphone'],
    ['Chats land in One Inbox; visits booked', 'c', 'chat'],
    ['Bills sent back so Meta finds more like them', 'a', 'refresh'],
  ]],
  ['Bringing back customers quiet for a year', [
    ['“Quiet for 12 months” segment, high value first', 'a', 'target'],
    ['A personal note with pieces from her last purchase', 'a', 'sparkle'],
    ['A loyalty bonus attached', 'a', 'gift'],
    ['She replies; your team books her visit', 'h', 'users'],
    ['The visit and bill traced to the promotion', 'a', 'pie'],
  ]],
];
const paths = () => `<div class="ibx-jr" data-jr>
  <div class="ibx-jr-tabs" role="tablist">${PATHS.map(([t], i) => `<button type="button" role="tab" data-jr-tab="${i}" aria-selected="${i === 0}">${t}</button>`).join('')}</div>
  ${PATHS.map(([t, steps], i) => `<div class="ibx-jr-panel${i === 0 ? ' is-on' : ''}" role="tabpanel" data-jr-panel="${i}"><h3>${t}</h3><ol class="ibx-jr-path">${steps.map(([x, k, ic], j) => `<li class="${WHO[k][1]}" style="--j:${j}"><span class="ibx-jr-node">${icon(ic)}</span><em>${WHO[k][0]}</em><span>${x}</span></li>`).join('')}</ol></div>`).join('')}
  <p class="ibx-legend"><span class="is-c">Customer</span> <span class="is-ai">Jwero</span> on its own · <span class="is-human">Your team</span></p>
</div>`;

const CMP = [
  ['Who gets it', 'The whole list', 'Uploaded lists', 'Live segments from purchases, plans and occasions'],
  ['What each sees', 'The same message', 'A first name', 'Her name, her moment, her pieces and today’s gold rate'],
  ['Channels', 'One at a time', 'Email and SMS', 'WhatsApp, SMS, email, push, AI calls and ads together'],
  ['Ads', 'An agency', 'A separate ad manager', 'Meta, Google and Pinterest, drafted from your catalogue'],
  ['Testing', 'No', 'Some', 'Two versions in campaigns and journeys; the winner goes to the rest'],
  ['Offers', 'Separate', 'Some', 'Coupons, vouchers and loyalty points attached'],
  ['Control', 'None', 'Some', 'Consent, frequency caps, quiet hours, DND, approvals, spend alerts'],
  ['What it sold', 'Guess', 'Opens and clicks', 'Bills by promotion and channel; sales sent back to ad platforms'],
];
const cmpTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Agency and separate tools</th><th>A generic marketing tool</th><th>Jwero</th></tr></thead><tbody>${CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;

const HOW = [
  ['Pick the moment', 'A festival, launch, season or the customer’s own occasion.'],
  ['Choose who', 'A ready segment, filters, or plain words; check the reachable count and value.'],
  ['Let AI draft it', 'Message, offer and channels; ads drafted from your catalogue; your team edits.'],
  ['Test and send', 'Two versions to a small share, then the winner to everyone, ads included.'],
  ['Measure', 'Visits and bills by promotion and channel; sales sent back to Meta and Google.'],
];

const READS = [['/whatsapp-broadcast-software-for-jewellers', 'WhatsApp broadcasts for jewellers'], ['/jewellery-customer-segmentation-software', 'Customer segmentation for jewellers'], ['/festival-marketing-campaigns-for-jewellers', 'Festival campaigns for jewellers'], ['/click-to-whatsapp-ads-for-jewellers', 'Click-to-WhatsApp ads for jewellers'], ['/ads-for-jewellers', 'Google and Instagram ads for jewellers'], ['/products/journeys', 'Customer journeys']];

const faqs = [
  { q: 'What are personalised promotions for jewellers?', a: 'Offers and messages sent to the right customers at the right moment, each one shaped by what she bought, what she is saving for and when her occasions fall. Jwero builds the audience, writes the message, sends it on WhatsApp, SMS, email, push, AI calls and ads, and shows what it sold.' },
  { q: 'Which segments should a jeweller use?', a: 'Bridal buyers, gold plans due or maturing, anniversaries and birthdays this month, high-value customers at risk, customers quiet for a year, abandoned carts, and followers who never bought. Jwero has 41 ready segments to start from.' },
  { q: 'Can I describe a segment in plain words?', a: 'Yes. Type who you want, such as “bridal buyers in Surat who have not bought in six months”, and AI turns it into a segment you can refine.' },
  { q: 'Do segments stay up to date?', a: 'Yes. A segment is a live rule, so customers move in and out as they buy, engage and age.' },
  { q: 'Can I send WhatsApp broadcasts?', a: 'Yes. Broadcasts go to the segment you choose, as templates or carousels with your pieces and today’s gold rate, to customers who agreed to WhatsApp. Customers who did not respond can be sent a follow-up.' },
  { q: 'Which channels can one promotion use?', a: 'WhatsApp, SMS, email, push and AI calls, each customer on the channels she agreed to and at her usual reading time, plus Meta, Google and Pinterest ads. RCS rich messages run inside automated journeys.' },
  { q: 'Can I A/B test a promotion?', a: 'Yes, in campaigns and journeys. Send two versions to a small share of the audience; the better one goes to everyone else.' },
  { q: 'Can ads be created from a segment?', a: 'Yes. A segment becomes a Meta custom audience, and Jwero can draft the ad for it from your catalogue. Ads publish to Meta, Google and Pinterest once you approve, with budget alerts.' },
  { q: 'Do click-to-WhatsApp ads work for jewellers?', a: 'They suit jewellery well, because customers want to ask about a piece before visiting. Each click becomes a chat in One Inbox, on the customer’s record.' },
  { q: 'Can AI plan and write promotions?', a: 'Yes. The AI strategist turns a brief into a campaign, suggests promotions around festivals, writes broadcast copy and drafts ads from your catalogue. You choose what goes out on its own and what waits for approval.' },
  { q: 'How do I see what a promotion sold?', a: 'Visits and bills are traced to the promotion and channel that reached the customer, and sales are sent back to Meta and Google.' },
  { q: 'What happened to the Segmentation, Ads Manager, Campaigns and Broadcasts pages?', a: 'They are now one page, because they are one job: deciding who hears what, where, and what it sold. Each has its own section here.' },
];

const promotions = {
  slug: 'products/promotions',
  title: 'Personalised Promotions for Jewellers: Segments, Broadcasts, Campaigns & Ads | Jwero',
  description: 'Personalised promotions for jewellers: live segments, WhatsApp broadcasts, campaigns on SMS, email, push and AI calls, Meta, Google and Pinterest ads, A/B tests and revenue by channel.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Personalised Promotions', alternateName: ['Customer segmentation for jewellers', 'WhatsApp broadcast software for jewellers', 'Jewellery marketing campaigns', 'Ads manager for jewellers'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Personalised promotions for jewellers: live customer segments from purchases, gold plans, occasions and engagement, 41 ready segments and plain-words segments; WhatsApp broadcasts with templates, carousels and gold-rate tokens; campaigns on WhatsApp, SMS, email, push and AI calls with A/B tests and best send time; Meta, Google and Pinterest ads drafted from the catalogue, with Meta audiences from segments and budget alerts; coupons and loyalty; revenue by promotion and channel, with sales sent back to ad platforms.',
    audience: { '@type': 'BusinessAudience', audienceType: 'Jewellery retailers, chains and online jewellery brands' },
    featureList: 'Live segments, ready segments, plain-words segments, RFM, WhatsApp broadcasts, SMS, email, push, AI calls, RCS in journeys, A/B tests, best send time, frequency caps, quiet hours, AI campaign strategist, festival suggestions, coupons and loyalty, Meta ads, Google ads, Pinterest ads, click-to-WhatsApp ads, Meta lead forms, catalogue ads, Meta custom audiences, budget alerts, sales sent back to Meta and Google, revenue by channel',
    dateModified: '2026-10-10',
    url: 'https://jwero.ai/products/promotions', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to run a personalised promotion for a jewellery business', step: HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Personalised Promotions'),
  faqs,
  body: `
${L.hero({
  eyebrow: 'Segments, broadcasts, campaigns and ads, as one',
  h1: 'The right piece, to the right customer, <span class="h1-turn">at her moment.</span>',
  sub: 'Live segments from what she bought, what she is saving for and when her occasions fall. One promotion, personalised for each customer, sent on WhatsApp, SMS, email, push, AI calls and ads, and measured in bills.',
  primary: { href: '#', label: 'Build a promotion for my customers', wa: 'promotions' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">What is Personalised Promotions?</h2><p>Personalised Promotions is how Jwero decides who hears what, where, and what it sold. Live segments come from purchases, gold plans, occasions and engagement. One promotion is personalised for each customer and sent as a WhatsApp broadcast or a campaign on SMS, email, push and AI calls, at each customer’s best time, with Meta, Google and Pinterest ads alongside. Campaigns can test two versions, offers attached, and every bill traced back to the promotion and channel.</p></div></section>

${prog()}

${L.section(`${L.sectionHead('BUILT AROUND HOW YOU RUN', 'I run a…', 'Pick your business. The page puts your journey and your next step first.')}${icp()}`, { tone: 'tint', id: 'for-you' })}

${L.section(`${L.sectionHead('ONE PROMOTION', 'How does one promotion reach the right people?', 'Six steps, from the plan to the bill.')}${run()}`, { id: 'one-promo' })}

${L.section(`${L.sectionHead('WHO HEARS IT', 'How do I choose the right customers?', 'With live segments, built from your own records.')}${segments()}`, { tone: 'tint', id: 'segments' })}

${L.section(`${L.sectionHead('WHAT EACH ONE SEES', 'Does everyone get the same message?', 'No. Pick a customer and see the same promotion change.')}${personal()}`, { id: 'personal' })}

${L.section(`${L.sectionHead('WHERE IT GOES', 'Which channels can one promotion use?', 'Every channel she agreed to, from one place.')}${channels()}`, { tone: 'tint', id: 'channels' })}

<section class="section" id="campaigns"><div class="container">${L.sectionHead('CAMPAIGNS', 'How do festival campaigns get planned?', 'The AI strategist drafts them three weeks ahead; two versions are tested; the winner goes to everyone.')}${L.cards([
  { icon: 'calendar', title: 'Planned ahead', text: 'Akshaya Tritiya, Dhanteras, Diwali, wedding season and launches, drafted three weeks out.' },
  { icon: 'branches', title: 'Tested', text: 'Two versions to a small share; the better one goes to the rest.' },
  { icon: 'gift', title: 'Offers attached', text: 'Coupons, gift vouchers and loyalty points, with limits you set.' },
  { icon: 'shield', title: 'Inside your rules', text: 'Consent, frequency caps, quiet hours, DND and approvals.' },
  { icon: 'activity', title: 'At her best time', text: 'Each customer’s usual reading time learnt and used.' },
  { icon: 'pie', title: 'Measured in bills', text: 'Visits, bills and revenue by campaign and channel.' },
], 3)}</div></section>

${L.section(`${L.sectionHead('ADS', 'Can ads reach the same customers?', 'Yes. Segments become Meta audiences, ads are drafted from your catalogue, and sales go back to Meta and Google.')}${adLoop()}`, { tone: 'tint', id: 'ads' })}

${L.section(`${L.sectionHead('WHAT IT SOLD', 'How do I know a promotion worked?', 'By the bills it brought, by channel.')}${results()}`, { id: 'results' })}

${L.section(`${L.sectionHead('JOURNEYS', 'From a segment to a sale.', 'Four real promotions, showing what Jwero does and where your team decides.')}${paths()}`, { tone: 'tint', id: 'journeys' })}

${L.section(`${L.sectionHead('COMPARE', 'An agency and separate tools, a generic marketing tool, or Jwero.', '')}${cmpTable()}`)}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to run a personalised promotion.', 'Five steps.')}${L.steps(HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('READ MORE', 'Guides for promotions.', '')}<div class="erp-map">${READS.map(([h, t]) => `<a href="${h}"><b>${t}</b><span>${h.replace(/^\//, 'jwero.ai/')}</span></a>`).join('')}</div>`)}

${L.oneSystemBlock([
  'Segments come from the same bills, gold plans and visits your counter records.',
  'A reply to a promotion lands in One Inbox, on the customer’s record.',
  'The ad audience and the WhatsApp audience are the same segment.',
])}

${L.section(`<p class="cta-note" style="text-align:center">Last updated 10 October 2026.</p>`)}

${L.ctaBand('Build your next promotion.', 'Tell us the moment. We will show the segment, the message each customer sees, and the channels.', 'promotions')}
`,
};

module.exports = [promotions];
module.exports.heroPiece = () => meter();
module.exports.parts = { meter, segments, personal, adLoop, results };
