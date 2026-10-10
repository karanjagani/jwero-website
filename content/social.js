// Social media page, rebuilt 2026-10-10 in the One Inbox design. Facts from a
// pim-app survey (2026-10-10): eight channels connect, publish and schedule
// (Instagram, Facebook, Pinterest, LinkedIn, YouTube, Threads, X, Google Business);
// the opportunity engine turns the store's own signals into posts nightly; AI
// captions and hashtags, on-model images and image-to-video; one-click post from
// an opportunity; Manual, Smart (drafts) and Autopilot (publishes) modes; approval
// queue; best time from the store's own 30 days; timing nudges; comments read and
// replied from one screen (IG, FB, LinkedIn, YouTube, Threads, X); DMs land in One
// Inbox; Google reviews across locations replied from one screen; Google posts,
// offers and events; Instagram product tags; commenters linked to contacts.
// NOT claimed (not built or not wired): AI replies to comments, AI replies to
// Google reviews, Google review requests, Google Q&A, Instagram Reels or Stories
// publishing from the composer, Pinterest comments or video, brand kit or
// templates, competitor tracking, listening beyond Threads, UGC, link-in-bio,
// external trend data, festival or best-time panels on the calendar.
const L = require('../lib');
const { icon } = L;
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

const CH = [
  ['camera', 'Instagram'], ['users', 'Facebook'], ['pinterest', 'Pinterest'], ['linkedin', 'LinkedIn'],
  ['youtube', 'YouTube'], ['threads', 'Threads'], ['share', 'X'], ['google', 'Google Business'],
];

// One opportunity becomes a published post.
const RUN = [
  ['Spotted', 'A signal in your own data: the last piece of a bestseller, a festival ahead, the gold rate moving.', 'eye'],
  ['Written', 'AI writes the caption and hashtags in your languages.', 'sparkle'],
  ['Made', 'AI puts the piece on a model, styles the photo, and turns it into a short video.', 'video'],
  ['Timed', 'Channels picked; the slot set from when your own followers engage most.', 'calendar'],
  ['Posted', 'One click, or on its own in Autopilot. Comments come back to one screen.', 'send'],
];
const RUN_TAGS = [['eye', 'Last piece · 22K jhumka'], ['sparkle', 'Caption · English and Hindi'], ['video', 'On-model photo · 9-second video'], ['calendar', 'Friday 7:30 pm'], ['check', 'Posted to 4 channels']];
const socRun = () => `<div class="ibx-msg" data-msg style="--n:${RUN.length}">
  <div class="ibx-msg-stage" aria-hidden="true"><div class="ibx-msg-bubble"><p>Opportunity · “Only one left: the jhumka everyone saved”</p><ul>${RUN_TAGS.map(([ic, t], i) => `<li data-k="${i}">${icon(ic)}${t}</li>`).join('')}</ul></div></div>
  <ol class="ibx-msg-steps">${RUN.map(([t, d, ic], i) => `<li data-k="${i}"><span class="ibx-msg-n">${icon(ic)}<b>${i + 1}</b></span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
</div>`;

// Signals that become posts: front is what Jwero noticed, back is the post it drafts.
const SIGNALS = [
  ['Last piece', 'box', 'One left of a design that sold fast', '“Only one left” post with the piece on a model'],
  ['New arrival', 'gem', 'A new collection tagged into stock', 'Launch carousel and a short video, ready to post'],
  ['Festival ahead', 'calendar', 'Akshaya Tritiya in three weeks', 'A run of posts timed to the muhurat'],
  ['Gold rate move', 'trend', 'The rate dipped this week', 'A “good week to buy” post for coins and chains'],
  ['Saved a lot', 'heart', 'A piece many people wishlisted', 'A post that names it and invites a visit'],
  ['Slow stock', 'activity', 'Pieces sitting past 120 days', 'A styled reel that gives them a second look'],
  ['Price drop', 'receipt', 'Making charges reduced on a line', 'An offer post, also on Google Business'],
  ['Engagement spike', 'chat', 'A post drawing far more comments than usual', 'A follow-up post while attention is high'],
  ['Scheme maturity', 'coins', 'Many gold plans maturing next month', 'A “what will you choose” post with pieces'],
  ['Store anniversary', 'store', 'Your branch opened five years ago this week', 'A thank-you post with an in-store offer'],
  ['Wedding season', 'gift', 'Bridal enquiries climbing', 'A bridal set carousel with a booking link'],
  ['Best seller', 'pie', 'A design outselling the rest', 'A “most loved this month” post'],
];
const signalCards = () => `<div class="ibx-flips erp-leaks soc-signals" data-flips>${SIGNALS.map(([k, ic, before, after], i) => `<button type="button" class="ibx-flip" style="--i:${i}" aria-pressed="false"><span class="ibx-flip-in"><span class="ibx-flip-f"><span class="ibx-flip-ico">${icon(ic)}</span><small class="erp-leak-k">${k}</small><b>${before}</b></span><span class="ibx-flip-b"><span class="ibx-flip-ico">${icon('sparkle')}</span><small>The post Jwero drafts</small><b>${after}</b></span></span></button>`).join('')}</div><p class="ibx-legend">Each card turns as you scroll. Tap one to turn it back. Signals come from your own sales, stock, schemes and engagement.</p>`;

// What each channel does, as a matrix of dots (only what is built is marked).
const CAPS = ['Post', 'Carousel', 'Video', 'Reels or Shorts', 'Stories', 'Schedule', 'Comments', 'DMs', 'Insights'];
const MATRIX = {
  Instagram: [1, 1, 1, 0, 0, 1, 1, 1, 1],
  Facebook: [1, 1, 1, 1, 1, 1, 1, 1, 1],
  Pinterest: [1, 0, 0, 0, 0, 1, 0, 0, 1],
  LinkedIn: [1, 1, 1, 0, 0, 1, 1, 0, 1],
  YouTube: [0, 0, 1, 1, 0, 1, 1, 0, 1],
  Threads: [1, 1, 1, 0, 0, 1, 1, 0, 1],
  X: [1, 1, 1, 0, 0, 1, 1, 1, 1],
  'Google Business': [1, 0, 0, 0, 0, 1, 0, 0, 0],
};
const EXTRA = { 'Google Business': 'Updates, offers and events; reviews from every location', Instagram: 'Product tags on posts', Pinterest: 'Pins', YouTube: 'Shorts', Facebook: 'Reels and Stories', X: 'Threads, quotes and replies' };
const matrix = () => `<div class="soc-mx" data-gfx><div class="soc-mx-scroll"><table><thead><tr><th>Channel</th>${CAPS.map((c) => `<th><span>${c}</span></th>`).join('')}</tr></thead><tbody>${CH.map(([ic, n], r) => `<tr style="--r:${r}"><th>${icon(ic)}<span>${n}</span>${EXTRA[n] ? `<small>${EXTRA[n]}</small>` : ''}</th>${MATRIX[n].map((v, c) => `<td>${v ? `<i style="--c:${c}" aria-label="${CAPS[c]}"></i>` : ''}</td>`).join('')}</tr>`).join('')}</tbody></table></div>
<p class="ibx-legend">Comments on Instagram, Facebook, LinkedIn, YouTube, Threads and X are answered from one screen. DMs from Instagram, Facebook and X land in <a href="/products/inbox">One Inbox</a>.</p></div>`;

// A proactive month: festivals, best times and quiet periods, posts dropping in.
const CAL = {
  start: 3, days: 30,
  marks: { 2: ['fest', 'Navratri begins'], 11: ['fest', 'Dussehra'], 20: ['fest', 'Dhanteras'], 22: ['fest', 'Diwali'], 1: ['pay', 'Payday'], 26: ['quiet', 'Post-festival lull'] },
  posts: { 3: ['ig', 'New arrivals carousel'], 5: ['yt', 'Short: temple jewellery'], 8: ['fb', 'Navratri colours reel'], 10: ['gb', 'Dussehra offer on Google'], 13: ['ig', 'Last piece: jhumka'], 15: ['pi', 'Pin: bridal sets'], 17: ['ig', 'Gold rate dipped'], 18: ['li', 'Hiring karigars'], 19: ['fb', 'Dhanteras coins'], 21: ['ig', 'Diwali eve video'], 24: ['th', 'Thank you, Diwali'], 28: ['ig', 'Most loved this month'] },
};
const CH_ICON = { ig: 'camera', fb: 'users', yt: 'youtube', gb: 'google', pi: 'pinterest', li: 'linkedin', th: 'threads' };
const calendar = () => {
  const cells = [];
  for (let i = 0; i < CAL.start; i++) cells.push('<li class="is-pad"></li>');
  for (let d = 1; d <= CAL.days; d++) {
    const m = CAL.marks[d], p = CAL.posts[d];
    cells.push(`<li class="${m ? `is-${m[0]}` : ''}" style="--d:${d}"><b>${d}</b>${m ? `<em>${m[1]}</em>` : ''}${p ? `<span class="soc-cal-post">${icon(CH_ICON[p[0]])}<i>${p[1]}</i></span>` : ''}</li>`);
  }
  return `<div class="soc-cal" data-gfx><div class="soc-cal-head">${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d) => `<span>${d}</span>`).join('')}</div><ol>${cells.join('')}</ol>
  <p class="ibx-legend"><span class="soc-k is-fest">Festival</span> <span class="soc-k is-pay">Payday push</span> <span class="soc-k is-quiet">Quiet period, fewer posts</span> Illustrative October. Posts come from opportunities, at the times your followers engage most.</p></div>`;
};

// Comments and reviews arrive in one place, each lighting its channel.
const FEED = [
  ['in', 'Instagram · “Price of this set?”', 0],
  ['out', 'Replied with the piece at today’s rate; chat moved to One Inbox', 0],
  ['in', 'Google · ★★★★★ “Lovely service at Andheri”', 7],
  ['out', 'Thank-you reply posted from the same screen', 7],
  ['in', 'YouTube · “Do you ship to Pune?”', 4],
  ['in', 'Facebook · “Is this in 18K?”', 1],
  ['note', 'Commenter matched to Meera’s customer record', 1],
  ['in', 'LinkedIn · “Are you hiring designers?”', 3],
];
const chCard = ([ic, n], k) => `<div class="ibx-dnode soc-ch" data-d="${k}"><span class="ibx-dnode-ico">${icon(ic)}</span><b>${n}</b></div>`;
const socFeed = () => `<div class="ibx-biz soc-biz" data-biz>
  <div class="ibx-biz-side">${CH.slice(0, 4).map((x, k) => chCard(x, k)).join('')}</div>
  <div class="ibx-biz-thread" aria-hidden="true"><div class="ibx-biz-head">${icon('chat')}<b>Comments and reviews</b></div><ol>${FEED.map(([w, t, d]) => `<li class="is-${w}" data-d="${d}">${t}</li>`).join('')}</ol></div>
  <div class="ibx-biz-side">${CH.slice(4).map((x, k) => chCard(x, k + 4)).join('')}</div>
</div><p class="ibx-legend">Illustrative. Comments from six channels and Google reviews from every location, answered from one screen and matched to customer records.</p>`;

// How much runs on its own.
const MODES = [
  ['Manual', 'eye', 'Jwero shows you the opportunities. You make and post.', 'Opportunity cards only'],
  ['Smart', 'sparkle', 'Jwero makes the post: caption, image and video, as a draft for one click.', 'Drafts ready to post'],
  ['Autopilot', 'send', 'Jwero makes and publishes the post at the best time, on its own.', 'Published for you'],
];
const modes = () => `<div class="soc-modes" data-modes-soc>
  <div class="soc-modes-track" role="tablist">${MODES.map(([t, ic], i) => `<button type="button" role="tab" data-mode-i="${i}" aria-selected="${i === 1}">${icon(ic)}<b>${t}</b></button>`).join('')}<i class="soc-modes-thumb" aria-hidden="true"></i></div>
  ${MODES.map(([t, , d, r], i) => `<div class="soc-modes-panel${i === 1 ? ' is-on' : ''}" data-mode-p="${i}"><p>${d}</p><p class="soc-modes-r">${icon('check')}${r}</p></div>`).join('')}
  <p class="ibx-legend">Add an approval queue to any mode: chosen people approve, reject or ask for changes before a post goes out.</p>
</div>`;

// Journeys across channels.
const WHO = { c: ['Customer', 'is-c'], a: ['Jwero', 'is-a'], h: ['Your team', 'is-h'] };
const PATHS = [
  ['The last piece that sold from a post', [
    ['A jhumka design is down to its last piece', 'a', 'box'],
    ['Opportunity drafted: caption, on-model photo, short video', 'a', 'sparkle'],
    ['Posted in one click to Instagram, Facebook and Threads', 'h', 'send'],
    ['“Price?” in the comments; answered and moved to a chat', 'c', 'chat'],
    ['Paid in the chat; the piece leaves stock everywhere', 'a', 'check'],
  ]],
  ['Akshaya Tritiya, planned three weeks out', [
    ['The festival shows up on the opportunity board', 'a', 'calendar'],
    ['A run of posts made for every channel', 'a', 'sparkle'],
    ['Your team approves the set in the queue', 'h', 'shield'],
    ['Each post goes out at your followers’ best time', 'a', 'activity'],
    ['An offer posted on Google Business for every branch', 'a', 'google'],
  ]],
  ['A Google review at every branch, answered', [
    ['Reviews from all your locations in one list', 'a', 'google'],
    ['A five-star review at Andheri; a complaint at Pune', 'c', 'chat'],
    ['Thanks posted; the complaint answered and followed up', 'h', 'users'],
    ['The customer found on her record', 'a', 'record'],
    ['Replied the same day, from one screen', 'a', 'check'],
  ]],
  ['Slow stock gets a second look', [
    ['Pieces cross 120 days in stock', 'a', 'activity'],
    ['Styled on a model and turned into a reel', 'a', 'video'],
    ['Published by Autopilot to Facebook and YouTube Shorts', 'a', 'youtube'],
    ['Comments answered from one screen', 'h', 'chat'],
    ['The piece sells; the post is traced to the sale', 'a', 'pie'],
  ]],
];
const socPaths = () => `<div class="ibx-jr" data-jr>
  <div class="ibx-jr-tabs" role="tablist">${PATHS.map(([t], i) => `<button type="button" role="tab" data-jr-tab="${i}" aria-selected="${i === 0}">${t}</button>`).join('')}</div>
  ${PATHS.map(([t, steps], i) => `<div class="ibx-jr-panel${i === 0 ? ' is-on' : ''}" role="tabpanel" data-jr-panel="${i}"><h3>${t}</h3><ol class="ibx-jr-path">${steps.map(([x, k, ic], j) => `<li class="${WHO[k][1]}" style="--j:${j}"><span class="ibx-jr-node">${icon(ic)}</span><em>${WHO[k][0]}</em><span>${x}</span></li>`).join('')}</ol></div>`).join('')}
  <p class="ibx-legend"><span class="is-c">Customer</span> <span class="is-ai">Jwero</span> on its own · <span class="is-human">Your team</span></p>
</div>`;

// 1. Hero hours meter: the reader's own numbers, carried into the chat.
const hoursMeter = () => `<div class="erp-meter soc-meter" data-socm>
  <p class="erp-meter-t">${icon('activity')}<b>How many hours does social take you?</b></p>
  <label><span>Posts and reels a week <b data-o="posts"></b></span><input type="range" data-i="posts" min="1" max="30" step="1" value="5"></label>
  <label><span>Comments and reviews a day <b data-o="cm"></b></span><input type="range" data-i="cm" min="0" max="300" step="5" value="40"></label>
  <div class="erp-meter-bars">
    <a href="#one-post" data-b="ph"><span>Making and posting</span><i><em></em></i><b></b></a>
    <a href="#comments" data-b="rh"><span>Replying</span><i><em></em></i><b></b></a>
  </div>
  <p class="erp-meter-total"><span>Hours a month, by hand</span><b data-o="total"></b></p>
  <a class="btn btn-primary erp-meter-cta" href="#" data-wa="social" data-wa-extra="" data-soc-cta="meter">Show me this week’s posts for my shop</a>
  <details class="erp-meter-as"><summary>The assumptions, change them</summary>
    <label>Minutes to make and post one, by hand<input type="number" data-a="pm" value="60" step="5" min="0"></label>
    <label>Minutes per reply, by hand<input type="number" data-a="rm" value="2" step="0.5" min="0"></label>
  </details>
  <p class="erp-meter-note">An estimate from your inputs.</p>
</div>`;

// 2. Pick a signal, see the post Jwero would draft.
const PREVIEW = {
  'Last piece': ['Only one left. The temple jhumka everyone saved is down to its last pair. Come and try it before it goes.', '#templejewellery #jhumka #lastpiece', ['camera', 'users', 'threads']],
  'New arrival': ['Just in: the Navratri collection. Nine looks, nine nights, all in 22K. Swipe to see them all.', '#newarrivals #navratri #22kgold', ['camera', 'users', 'pinterest']],
  'Festival ahead': ['Akshaya Tritiya is three weeks away. Book your muhurat visit now and choose without the rush.', '#akshayatritiya #goldjewellery #muhurat', ['camera', 'users', 'google']],
  'Gold rate move': ['The gold rate dipped this week. A good week to pick up the coin or chain you have been waiting on.', '#goldrate #goldcoins #goldchain', ['camera', 'users', 'share']],
  'Saved a lot': ['You saved it, we noticed. The kundan choker is on our most-wished list this month. Ask us about it in store.', '#kundan #choker #mostloved', ['camera', 'users']],
  'Slow stock': ['A second look at a classic: this antique bangle pair, styled three ways. Which one is you?', '#antiquejewellery #bangles #styledthreeways', ['users', 'youtube']],
  'Price drop': ['Making charges reduced on our everyday diamond studs, this month only. Visit any branch.', '#diamondstuds #everydayjewellery #offer', ['users', 'google', 'camera']],
  'Engagement spike': ['You loved yesterday’s bridal set. Here is the full look, with the matching maang tikka.', '#bridaljewellery #maangtikka #bridallook', ['camera', 'threads']],
  'Scheme maturity': ['Your gold plan matures soon. Here is what our members are choosing this season.', '#goldsavings #goldscheme #redeem', ['users', 'camera']],
  'Store anniversary': ['Five years at Andheri. Thank you for every visit. Come in this week for a small thank-you from us.', '#anniversary #thankyou #andheri', ['google', 'users', 'linkedin']],
  'Wedding season': ['Wedding season is here. Our bridal sets for every ceremony, from mehendi to reception.', '#weddingseason #bridalsets #indianbride', ['camera', 'pinterest', 'youtube']],
  'Best seller': ['Most loved this month: the slim gold kada. Light enough for every day, made to last.', '#goldkada #bestseller #dailywear', ['camera', 'users', 'pinterest']],
};
const preview = (compact) => `<div class="soc-pv${compact ? ' is-compact' : ''}" data-socpv>
  <div class="soc-pv-picks" role="tablist">${Object.keys(PREVIEW).map((k, i) => `<button type="button" role="tab" data-pv="${k}" aria-selected="${i === 0}">${k}</button>`).join('')}</div>
  <div class="soc-pv-stage">
    <article class="soc-pv-post" aria-live="polite">
      <header><span class="soc-pv-av">${icon('gem')}</span><b>yourstore</b><small>Draft by Jwero</small></header>
      <div class="soc-pv-img"><span class="soc-pv-tag">${icon('camera')}On-model photo</span><span class="soc-pv-tag is-v">${icon('video')}9-second video</span>${icon('gem')}</div>
      <p class="soc-pv-cap" data-pv-cap></p>
      <p class="soc-pv-tags" data-pv-tags></p>
      <footer><span>Posting to</span><span class="soc-pv-ch" data-pv-ch></span></footer>
    </article>
    <div class="soc-pv-side"><p>Pick a signal. This is the kind of post Jwero drafts from it, with the caption, the photo on a model, a short video and the channels picked for you.</p><a class="btn btn-primary" href="#" data-wa="social" data-wa-extra="" data-soc-cta="preview">Make this from my stock</a><p class="erp-meter-note">Illustrative wording. Your posts use your own pieces, prices and voice.</p></div>
  </div>
  <script type="application/json" data-pv-data>${JSON.stringify(Object.fromEntries(Object.entries(PREVIEW).map(([k, [c, t, ch]]) => [k, [c, t, ch.map((x) => icon(x)).join('')]])))}</script>
</div>`;

// 3. "I run a…" for social.
const SOC_ICP = [
  ['single', 'store', 'A single store', 'Start with Smart mode: Jwero drafts a post from your stock every day; you post in one click.', 0, 1, 'trial', 'Start free for your store'],
  ['chain', 'branches', 'A chain or franchise', 'Start with Google reviews: every branch in one list, and an approval queue for what goes out.', 2, 1, 'demo', 'Book a 30-minute demo for a chain'],
  ['brand', 'megaphone', 'A brand', 'Start with Autopilot and the calendar: posts made and published on every channel, timed to your followers.', 3, 2, 'trial', 'Start free for your brand'],
];
const socDoor = ([k, , , , , , door, label], cls) => door === 'demo'
  ? `<a class="${cls}" href="/book-demo" data-soc-cta="door-${k}">${label}</a>`
  : `<a class="${cls}" href="https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=social-${k}" rel="noopener" data-trial data-soc-cta="door-${k}">${label}</a>`;
const socIcp = () => `<div class="erp-icp soc-icp" data-soc-icp data-cfg='${JSON.stringify(Object.fromEntries(SOC_ICP.map(([k, , , , j, m]) => [k, [j, m]])))}'>
  <div class="erp-icp-opts" role="tablist" aria-label="I run a…">${SOC_ICP.map(([k, ic, t], i) => `<button type="button" role="tab" data-k="${k}" aria-selected="${i === 0}">${icon(ic)}<span>${t}</span></button>`).join('')}</div>
  ${SOC_ICP.map((e, i) => `<div class="erp-icp-panel${i === 0 ? ' is-on' : ''}" data-panel="${e[0]}"><p>${e[3]}</p><div class="erp-icp-go"><a href="#preview">Try a post ↓</a><a href="#journeys">Your journey ↓</a><a href="#modes">Your mode ↓</a>${e[0] === 'chain' ? '<a href="#comments">Reviews at every branch ↓</a>' : '<a href="#calendar">Your calendar ↓</a>'}</div><p class="erp-icp-door">${socDoor(e, 'btn btn-primary')}</p></div>`).join('')}
</div>`;

// 5. Progress bar.
const socProg = () => `<nav class="erp-prog" data-erp-prog aria-label="On this page"><div class="erp-prog-in">
  <ol>${[['opportunities', 'What to post'], ['preview', 'Make it'], ['channels', 'Every channel'], ['calendar', 'Your calendar'], ['comments', 'Comments'], ['modes', 'Go live']].map(([id, t], i) => `<li><a href="#${id}" data-p="${id}"><b>${i + 1}</b>${t}</a></li>`).join('')}</ol>
  <span class="erp-prog-doors">${SOC_ICP.map((e) => socDoor(e, 'btn btn-primary erp-prog-cta soc-door')).join('')}</span>
</div><i class="erp-prog-fill" aria-hidden="true"></i></nav>`;

const CMP = [
  ['What to post', 'Guesswork', 'A blank calendar', 'Opportunities from your own sales, stock and festivals'],
  ['Making the post', 'Designer or agency', 'You make it', 'AI caption, on-model photo and video'],
  ['Publishing', 'One app per platform', 'Scheduler', 'Eight channels, one click or Autopilot'],
  ['When to post', 'Whenever', 'Generic best times', 'Your own followers’ engagement, festival and payday aware'],
  ['Comments and reviews', 'One phone each', 'Separate tools', 'Six channels’ comments and Google reviews on one screen'],
  ['Who commented', 'Unknown', 'A username', 'Matched to the customer record'],
  ['What a post sold', 'Likes', 'Reach', 'Chats and sales traced to the post'],
];
const cmpTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Posting by hand</th><th>A generic scheduler</th><th>Jwero</th></tr></thead><tbody>${CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;

const HOW = [
  ['Connect your channels', 'Instagram, Facebook, Pinterest, LinkedIn, YouTube, Threads, X and Google Business, once.'],
  ['Choose your mode', 'Manual, Smart drafts or Autopilot, with an approval queue if you want one.'],
  ['Let the opportunities come', 'Signals from your sales, stock, schemes and festivals become post ideas every night.'],
  ['Post in one click', 'AI caption, image and video; channels and time picked for you.'],
  ['Answer from one screen', 'Comments and Google reviews in one place; DMs in One Inbox.'],
];

const READS = [['/ai-posts-and-reels-for-jewellers', 'AI posts and reels for jewellers'], ['/jewellery-social-media-calendar', 'A social media calendar for jewellers'], ['/google-review-management-for-jewellers', 'Google reviews for jewellers'], ['/social-media-comment-management-for-jewellers', 'Comments across every channel'], ['/instagram-for-jewellers', 'Instagram for jewellers'], ['/products/inbox', 'One Inbox for DMs']];

const faqs = [
  { q: 'What is social media management for jewellers?', a: 'Deciding what to post, making it, publishing it on every channel and answering the comments and reviews that follow. Jwero does it in one place: post ideas from your own sales and stock, AI-made captions, images and video, one-click publishing to eight channels, and one screen for comments and Google reviews.' },
  { q: 'Which channels does Jwero publish to?', a: 'Instagram, Facebook, Pinterest, LinkedIn, YouTube, Threads, X and Google Business, from one composer and one calendar.' },
  { q: 'How does Jwero know what to post?', a: 'Every night it reads your own sales, stock, wishlists, schemes, engagement and the festival calendar, and turns signals such as a last piece, a new arrival, a gold rate move or slow stock into post opportunities.' },
  { q: 'Can AI make jewellery posts and reels?', a: 'Yes. AI writes captions and hashtags, puts pieces on a model, styles product photos and turns an image into a short video. Reels go to Facebook and YouTube Shorts; video posts go to Instagram and the other video channels.' },
  { q: 'Can posts go out on their own?', a: 'Yes. In Autopilot, Jwero makes and publishes posts at the best time. In Smart mode it prepares drafts for one click; in Manual it shows the ideas. An approval queue can sit in front of any of them.' },
  { q: 'When is the best time for a jeweller to post?', a: 'When your own followers engage most. Jwero reads your last 30 days, and adjusts for paydays, the lull after a festival and quieter periods such as Pitru Paksha.' },
  { q: 'Can I reply to comments from every platform in one place?', a: 'Yes. Comments on Instagram, Facebook, LinkedIn, YouTube, Threads and X are read and answered from one screen, and each commenter is matched to a customer record. DMs land in One Inbox.' },
  { q: 'Can I manage Google reviews for all my branches?', a: 'Yes. Reviews from every location come into one list and are answered from the same screen. You can also post updates, offers and events to Google Business.' },
  { q: 'Can I tag products in Instagram posts?', a: 'Yes. Pieces from your catalogue can be tagged in Instagram posts, and any post can be linked to the products it shows.' },
  { q: 'Can I see what my posts achieve?', a: 'Yes. Reach and engagement by post and channel, and the chats and sales a post started.' },
];

const HERO_ROWS = [
  ['Instagram', 'Last piece of a bestseller', 0, 'Post drafted: on-model photo and caption', 'a'],
  ['Facebook', 'Navratri in five days', 1, 'Reel made and scheduled for 7:30 pm', 'a'],
  ['YouTube', 'Pieces past 120 days', 4, 'Short published by Autopilot', 'a'],
  ['Google', '★★★★★ review at Andheri', 7, 'Thank-you reply posted', 'h'],
  ['Pinterest', 'New bridal collection tagged', 2, 'Pins scheduled for the week', 'a'],
  ['LinkedIn', 'Store anniversary this week', 3, 'Post ready for one click', 'h'],
  ['Threads', 'A post drawing extra comments', 5, 'Follow-up post drafted', 'a'],
  ['X', '“Do you ship abroad?”', 6, 'Answered from the comments screen', 'h'],
];

const socialMedia = {
  slug: 'products/social-media',
  title: 'Social Media for Jewellers: AI Posts & Reels, 8 Channels, Google Reviews | Jwero',
  description: 'Social media for jewellers: post ideas from your own sales and stock, AI captions, on-model images and video, one-click posting to eight channels, and comments and Google reviews on one screen.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Social Media for Jewellers', alternateName: ['Social media management for jewellers', 'Jewellery social media scheduler', 'AI posts and reels for jewellers', 'Google review management for jewellers'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Social media for jewellers: an opportunity engine that turns the store’s own sales, stock, schemes and festivals into post ideas; AI captions, on-model images and image-to-video; one-click or automatic publishing to Instagram, Facebook, Pinterest, LinkedIn, YouTube, Threads, X and Google Business; best times from the store’s own engagement; an approval queue; comments and Google reviews answered from one screen; DMs in One Inbox.',
    audience: { '@type': 'BusinessAudience', audienceType: 'Jewellery retailers, chains and brands' },
    featureList: 'Post opportunities from sales and stock, festival-aware calendar, AI captions and hashtags, on-model images, image to video, one-click publishing, Autopilot, approval queue, best time to post, Instagram, Facebook, Pinterest, LinkedIn, YouTube, Threads, X, Google Business posts and offers, comments on one screen, Google reviews for every location, Instagram product tags, analytics',
    dateModified: '2026-10-10',
    url: 'https://jwero.ai/products/social-media', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to run social media for a jewellery shop', step: HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Social media'),
  faqs,
  body: `
${L.hero({
  eyebrow: 'Every channel, every post, one calendar',
  h1: 'Post in minutes. <span class="h1-turn">Sell from every comment.</span>',
  sub: 'Jwero spots what to post from your own sales, stock and festivals, makes it with AI on a model and in video, and publishes to all your channels in one click. Comments and Google reviews come back to one screen.',
  primary: { href: '#', label: 'Show me this week’s posts for my shop', wa: 'social' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">What is Jwero Social?</h2><p>Jwero Social is social media management built for jewellers. It turns signals from your own sales, stock, schemes and the festival calendar into post ideas, makes each post with AI (caption, on-model photo and short video), and publishes it to Instagram, Facebook, Pinterest, LinkedIn, YouTube, Threads, X and Google Business in one click or on Autopilot. Comments from six channels and Google reviews from every branch are answered from one screen.</p></div></section>

${socProg()}

${L.section(`${L.sectionHead('BUILT AROUND HOW YOU RUN', 'I run a…', 'Pick your business. The page puts your journey, your mode and your next step first.')}${socIcp()}`, { tone: 'tint', id: 'for-you' })}

${L.section(`${L.sectionHead('FROM SIGNAL TO POST', 'How does a post get made in minutes?', 'One opportunity, five steps, no designer.')}${socRun()}`, { id: 'one-post' })}

${L.section(`${L.sectionHead('TRY IT', 'What would Jwero post for you?', 'Pick a signal and see the draft.')}${preview()}`, { id: 'preview' })}

${L.section(`${L.sectionHead('OPPORTUNITIES, EVERY NIGHT', 'What should a jeweller post today?', 'What your own business is telling you. Twelve of the signals Jwero turns into posts.')}${signalCards()}`, { tone: 'tint', id: 'opportunities' })}

${L.section(`${L.sectionHead('EVERY CHANNEL', 'Which channels does Jwero manage?', 'Eight channels from one composer and one calendar.')}${matrix()}`, { id: 'channels' })}

${L.section(`${L.sectionHead('A PROACTIVE CALENDAR', 'What does a month of posts look like?', 'Festivals ahead, paydays and quiet periods accounted for, posts at the hours your followers engage.')}${calendar()}`, { tone: 'tint', id: 'calendar' })}

${L.section(`${L.sectionHead('COMMENTS AND REVIEWS', 'Where do comments and Google reviews go?', 'To one screen. Every reply is matched to the customer, and DMs go to One Inbox.')}${socFeed()}`, { id: 'comments' })}

${L.section(`${L.sectionHead('HOW MUCH RUNS ON ITS OWN', 'Can social media run without me?', 'Choose the mode. Jwero can show ideas, prepare drafts, or publish on its own.')}${modes()}`, { tone: 'tint', id: 'modes' })}

${L.section(`${L.sectionHead('JOURNEYS', 'From a signal to a sale.', 'Four real paths, showing what Jwero does and where your team steps in.')}${socPaths()}`, { id: 'journeys' })}
${L.section(`${L.sectionHead('COMPARE', 'Posting by hand, a generic scheduler, or Jwero.', '')}${cmpTable()}`)}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to run social media for a jewellery shop.', 'Five steps.')}${L.steps(HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('READ MORE', 'Guides for social media.', '')}<div class="erp-map">${READS.map(([h, t]) => `<a href="${h}"><b>${t}</b><span>${h.replace(/^\//, 'jwero.ai/')}</span></a>`).join('')}</div>`)}

${L.oneSystemBlock([
  'Post ideas come from the same sales, stock and schemes your counter and ERP use.',
  'A commenter is matched to the customer record, next to her purchases and chats.',
  'A price question in the comments becomes a chat in One Inbox, and a sale on the same stock.',
])}

${L.section(`<p class="cta-note" style="text-align:center">Last updated 10 October 2026.</p>`)}

${L.ctaBand('See this week’s posts for your shop.', 'Connect one channel. We will show the opportunities Jwero finds in your own stock and sales.', 'social')}
`,
};

module.exports = [socialMedia];
module.exports.heroPiece = () => hoursMeter();
module.exports.parts = { preview, calendar, socFeed, matrix };
