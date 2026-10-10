// Ecommerce, rebuilt 2026-10-10 in the One Inbox design, with Optimize merged in
// (/products/optimize now 301s to #optimize). Facts from two pim-app reads
// (storefront 2026-10-09, storefront and optimize 2026-10-10). Where the reads
// disagreed, the claim is left out.
// Built: live-rate price breakup, repriced at checkout; HUID and certificates;
// variants and sizes; engraving and personalisation fields; compare; wishlist;
// search by photo; reviews with photos; product Q&A; pincode check; OTP sign-in;
// Razorpay, Cashfree, PhonePe and UPI; Razorpay EMI widget; coupons; loyalty;
// reserve at a branch with a pickup code; showroom visit slots; gold plans online
// (enrol, pay, passbook, UPI autopay); returns; themes, page builder with AI,
// version history; custom domain; one language per store; SEO (sitemap, schema,
// meta, redirects), blog; AI product descriptions. Optimize: visitor tracking,
// sessions on the contact, heatmaps, A/B tests with a declared winner, funnels,
// goals, web push, popups, polls, lead forms, webchat with proactive messages,
// audience-based personalisation (also on product-page blocks), AI recommendations,
// recently viewed, abandoned carts as a journey trigger, back-in-stock email, UTM
// attribution, consent-gated GA and Meta tags, PageSpeed checks.
// NOT claimed: 360 or product video, AR or AI try-on, try-at-home, video call
// booking, Stripe, PayPal, COD, multi-currency, shipping insurance, named couriers,
// mobile app, automatic cart recovery out of the box, browse abandonment, price-drop
// alerts, session recording replay, Meta Conversions API, wholesale login, weight
// or price filters. No Shopify or WooCommerce on this page.
const L = require('../lib');
const { icon } = L;
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

// 1. Hero meter: what better conversion is worth, from the reader's own numbers.
const meter = () => `<div class="erp-meter ec-meter" data-ecm>
  <p class="erp-meter-t">${icon('activity')}<b>What is one more order in a hundred worth?</b></p>
  <label><span>Website visitors a month <b data-o="v"></b></span><input type="range" data-i="v" min="500" max="200000" step="500" value="8000"></label>
  <label><span>Average order <b data-o="aov"></b></span><input type="range" data-i="aov" min="5000" max="500000" step="5000" value="45000"></label>
  <div class="erp-meter-bars">
    <a href="#optimize" data-b="now"><span>Orders a month today</span><i><em></em></i><b></b></a>
    <a href="#optimize" data-b="then"><span>With the lift below</span><i><em></em></i><b></b></a>
  </div>
  <p class="erp-meter-total"><span>Extra sales a month</span><b data-o="total"></b></p>
  <a class="btn btn-primary erp-meter-cta" href="#" data-wa="ecommerce" data-wa-extra="" data-ec-cta="meter">Show me where my site loses orders</a>
  <details class="erp-meter-as"><summary>The assumptions, change them</summary>
    <label>Orders per 100 visitors today<input type="number" data-a="cr" value="0.6" step="0.1" min="0"></label>
    <label>Lift from fixes and follow-up, orders per 100<input type="number" data-a="lift" value="0.2" step="0.1" min="0"></label>
  </details>
  <p class="erp-meter-note">A planning estimate from your inputs and these assumptions, not a measurement.</p>
</div>`;

// 2. "I run a…" for ecommerce.
const ICP = [
  ['single', 'store', 'A single store', 'Start with trust and the showroom: live-rate prices with the breakup, then reserve online and collect in store.', 2, 'showroom', 'trial', 'Start free for your store'],
  ['chain', 'branches', 'A chain or franchise', 'Start with one store for every branch: pickup at the branch that holds the piece, and one stock behind the counter and the site.', 2, 'showroom', 'demo', 'Book a 30-minute demo for a chain'],
  ['brand', 'megaphone', 'An online brand', 'Start with Optimize: personalisation by audience, A/B tests, web push and journeys for carts left behind.', 4, 'optimize', 'trial', 'Start free for your brand'],
];
const door = ([k, , , , , , d, label], cls) => d === 'demo'
  ? `<a class="${cls}" href="/book-demo" data-ec-cta="door-${k}">${label}</a>`
  : `<a class="${cls}" href="https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=ecommerce-${k}" rel="noopener" data-trial data-ec-cta="door-${k}">${label}</a>`;
const icp = () => `<div class="erp-icp soc-icp" data-ec-icp data-cfg='${JSON.stringify(Object.fromEntries(ICP.map(([k, , , , j, lead]) => [k, [j, lead]])))}'>
  <div class="erp-icp-opts" role="tablist" aria-label="I run a…">${ICP.map(([k, ic, t], i) => `<button type="button" role="tab" data-k="${k}" aria-selected="${i === 0}">${icon(ic)}<span>${t}</span></button>`).join('')}</div>
  ${ICP.map((e, i) => `<div class="erp-icp-panel${i === 0 ? ' is-on' : ''}" data-panel="${e[0]}"><p>${e[3]}</p><div class="erp-icp-go"><a href="#one-visit">One visit ↓</a><a href="#personalise">Personalisation ↓</a><a href="#journeys">Your journey ↓</a><a href="#${e[5]}">${e[5] === 'optimize' ? 'Optimize' : 'The showroom online'} ↓</a></div><p class="erp-icp-door">${door(e, 'btn btn-primary')}</p></div>`).join('')}
</div>`;

const prog = () => `<nav class="erp-prog" data-erp-prog aria-label="On this page"><div class="erp-prog-in">
  <ol>${[['one-visit', 'One visit'], ['personalise', 'Personalised'], ['use-cases', 'Everything in it'], ['optimize', 'Optimize'], ['recover', 'Win them back'], ['journeys', 'Journeys']].map(([id, t], i) => `<li><a href="#${id}" data-p="${id}"><b>${i + 1}</b>${t}</a></li>`).join('')}</ol>
  <span class="erp-prog-doors">${ICP.map((e) => door(e, 'btn btn-primary erp-prog-cta ec-door')).join('')}</span>
</div><i class="erp-prog-fill" aria-hidden="true"></i></nav>`;

// 2. The price breakup a shopper sees, worked out live.
const breakup = () => `<div class="ec-bk" data-ecbk>
  <div class="ec-bk-in">
    <label>Purity<select data-k="karat"><option value="24">24K</option><option value="22" selected>22K</option><option value="18">18K</option><option value="14">14K</option></select></label>
    <label>Net weight, g<input type="number" data-k="w" value="18.4" step="0.1" min="0"></label>
    <label>Making, %<input type="number" data-k="mk" value="12" step="0.5" min="0"></label>
    <label>Stones, ₹<input type="number" data-k="st" value="0" step="500" min="0"></label>
    <label>24K rate, ₹ a gram<input type="number" data-k="rate" value="7200" step="50" min="0"></label>
  </div>
  <div class="ec-bk-card" aria-live="polite">
    <p class="ec-bk-h">${icon('gem')}<b>Temple necklace</b><small data-o="pur"></small></p>
    <p><span>Metal</span><b data-o="metal"></b></p>
    <p><span>Making charges</span><b data-o="make"></b></p>
    <p><span>Stones</span><b data-o="stones"></b></p>
    <p><span>GST, 3%</span><b data-o="gst"></b></p>
    <p class="ec-bk-t"><span>Price today</span><b data-o="total"></b></p>
    <p class="ec-bk-badge">${icon('shield')}Certificate and HUID shown with the piece</p>
  </div>
  <p class="ibx-legend">What a shopper sees on a Jwero product page, worked out the way the store does it. Change the rate to today’s.</p>
</div>`;

// 3. Score your current website against what jewellery shoppers expect.
const ESSENTIALS = [
  ['rate', 'Prices follow today’s gold rate'],
  ['breakup', 'The price breakup is shown on every piece'],
  ['huid', 'HUID and certificates are on the product page'],
  ['stock', 'The site sells from the same stock as the counter'],
  ['reserve', 'Shoppers can reserve a piece at a branch'],
  ['visit', 'Shoppers can book a showroom visit'],
  ['plans', 'Gold plans can be joined and paid online'],
  ['otp', 'Sign-in works without a password'],
  ['personal', 'Different visitors see different content'],
  ['tests', 'You can test changes and see where visitors drop'],
];
const score = () => `<div class="ec-sc" data-ecsc>
  <label class="ec-sc-url">Your website<input type="text" data-url placeholder="yourstore.com" autocomplete="off" inputmode="url"></label>
  <p class="ec-sc-q">Tick what your site does today.</p>
  <ul>${ESSENTIALS.map(([k, t]) => `<li><label><input type="checkbox" data-e="${k}"><span>${t}</span></label></li>`).join('')}</ul>
  <div class="ec-sc-out" aria-live="polite"><p class="ec-sc-n"><b data-o="n">0</b><span>of 10</span></p><div class="ec-sc-bar"><i></i></div><p data-o="msg"></p>
  <a class="btn btn-primary" href="#" data-wa="ecommerce" data-wa-extra="" data-ec-cta="score">Show me how Jwero fills my gaps</a></div>
  <p class="erp-meter-note">Your answers stay in this page until you press the button.</p>
</div>`;

// 5. Reserve online, try in the showroom.
const showroomFirst = () => `<div class="ec-sh" data-gfx>
  <ol>${[['search', 'She finds it online', 'Priced at today’s rate, with HUID and certificate'], ['store', 'She reserves it at your branch', 'At the branch that holds it, from the same stock'], ['receipt', 'She gets a pickup code', 'Code 4821, on her phone'], ['calendar', 'Or books a visit', 'Saturday, 11:30, with the piece ready'], ['check', 'She tries it and buys', 'The sale lands on her record']].map(([ic, t, d], i) => `<li style="--i:${i}"><span>${icon(ic)}</span><b>${t}</b><small>${d}</small></li>`).join('')}</ol>
</div>`;

// 7. A small picture of each use-case group.
const USE_VIS = {
  find: '<span class="ec-v-search">22k temple necklace<i></i></span>',
  trust: '<span class="ec-v-badge">BIS hallmarked · AB12C3</span>',
  decide: '<span class="ec-v-cmp"><i></i><em>vs</em><i></i></span>',
  buy: '<span class="ec-v-otp"><i>4</i><i>8</i><i>2</i><i>1</i></span>',
  showroom: '<span class="ec-v-ticket"><small>Pickup code</small><b>4821</b></span>',
  schemes: '<span class="ec-v-pass"><i style="--p:82%"></i><small>9 of 11 paid</small></span>',
  after: '<span class="ec-v-track"><i class="on"></i><i class="on"></i><i class="on"></i><i></i></span>',
  run: '<span class="ec-v-sw"><i style="--c:#7a1f2b"></i><i style="--c:#b9862a"></i><i style="--c:#1d3b6e"></i><i style="--c:#1fa855"></i></span>',
};

// 3. One visit, six steps.
const RUN = [
  ['Found', 'On Google, by a product page with its price and reviews, or by a photo she uploads.', 'search'],
  ['Priced', 'Today’s rate with metal, making charges and stones shown line by line.', 'coins'],
  ['Trusted', 'Purity, weights, HUID and the certificate, with photo reviews and answered questions.', 'shield'],
  ['Personalised', 'Picks that go with what she viewed, and content for the audience she belongs to.', 'sparkle'],
  ['Bought or reserved', 'Paid with OTP sign-in and EMI, or reserved at the branch with a pickup code.', 'receipt'],
  ['Remembered', 'Visit, wishlist and order on her record, for journeys and the counter.', 'record'],
];
const RUN_TAGS = [['search', 'From Google'], ['coins', 'Breakup at today’s rate'], ['shield', 'HUID · certificate'], ['sparkle', 'Picks for her'], ['receipt', 'Pickup code 4821'], ['check', 'On her record']];
const run = () => `<div class="ibx-msg" data-msg style="--n:${RUN.length}">
  <div class="ibx-msg-stage" aria-hidden="true"><div class="ibx-msg-bubble"><p>Meera · looking for a 22K temple necklace</p><ul>${RUN_TAGS.map(([ic, t], i) => `<li data-k="${i}">${icon(ic)}${t}</li>`).join('')}</ul></div></div>
  <ol class="ibx-msg-steps">${RUN.map(([t, d, ic], i) => `<li data-k="${i}"><span class="ibx-msg-n">${icon(ic)}<b>${i + 1}</b></span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
</div>`;

// 4. Same page, three visitors.
const VIS = [
  ['First visit', 'users', 'From an Instagram ad, first time here', 'Welcome to Shree Jewellers', 'Bestsellers in 22K', 'Sign up with a one-time code on WhatsApp', ['Temple jhumka', 'Slim kada', 'Coin pendant']],
  ['Gold plan member', 'coins', 'Signed in, plan matures next month', 'Your plan matures in 24 days', 'Pieces your balance can buy', 'See your passbook', ['Bridal choker', 'Kundan set', 'Gold bangles']],
  ['Bridal browser', 'heart', 'Viewed 6 bridal sets this week', 'For your wedding season', 'Goes with what you viewed', 'Book a showroom visit', ['Maang tikka', 'Matching jhumka', 'Haathphool']],
];
const personalise = () => `<div class="ec-pz" data-ecp>
  <div class="ec-pz-tabs" role="tablist">${VIS.map(([t, ic, d], i) => `<button type="button" role="tab" data-v="${i}" aria-selected="${i === 0}">${icon(ic)}<b>${t}</b><small>${d}</small></button>`).join('')}</div>
  <div class="ec-pz-shop" aria-live="polite">
    <div class="ec-pz-bar"><i></i><i></i><i></i><span>yourstore.com</span></div>
    ${VIS.map(([, , , banner, row, cta, items], i) => `<div class="ec-pz-view${i === 0 ? ' is-on' : ''}" data-vv="${i}"><div class="ec-pz-banner"><b>${banner}</b><span class="ec-pz-cta">${cta}</span></div><p class="ec-pz-row">${icon('sparkle')}${row}</p><div class="ec-pz-items">${items.map((n) => `<span><i>${icon('gem')}</i>${n}</span>`).join('')}</div></div>`).join('')}
  </div>
  <p class="ibx-legend">Illustrative. Banners and blocks shown by audience, picks from recommendations and recently viewed, built from each visitor’s record.</p>
</div>`;

// 5. Everything in the store, as module cards with anchors.
const USES = [
  ['find', 'search', 'Be found', 'On Google and on your own site.', ['Product pages with structured data Google can show', 'Sitemap, clean addresses and redirects', 'A blog and a landing page for every collection', 'Search with typo tolerance, and search by photo', 'Your store in your customers’ language']],
  ['trust', 'shield', 'Earn trust', 'Proof for a piece she cannot touch.', ['Price breakup: metal at today’s rate, making, stones', 'Purity, weights, HUID and certificates', 'Reviews with photos, voted and moderated', 'Questions answered on the product page', 'Pincode delivery check']],
  ['decide', 'heart', 'Help her decide', 'Less doubt, fewer tabs.', ['Compare pieces side by side', 'Wishlist and gift registry', 'Pieces that go with it, and recently viewed', 'Metal, karat and size pickers', 'EMI options on the product page']],
  ['buy', 'receipt', 'Make buying easy', 'No passwords, fewer steps.', ['Guest checkout or a one-time code on WhatsApp, SMS or email', 'Razorpay, Cashfree, PhonePe and UPI', 'Coupons, including jewellery-specific ones', 'Loyalty points at checkout', 'Engraving and personalisation on the piece']],
  ['showroom', 'store', 'The showroom, online', 'For the jewellery she wants to see first.', ['Reserve at the branch that holds it, collect with a pickup code', 'Book a showroom visit in a time slot', 'The same stock as your counter', 'The order on her record when she walks in']],
  ['schemes', 'coins', 'Gold plans online', 'Saving and spending, on one account.', ['See plans with a calculator', 'Enrol and pay each instalment online', 'UPI autopay', 'Follow the passbook from her account']],
  ['after', 'truck', 'After the order', 'Service that brings her back.', ['Order tracking and GST invoice PDF', 'Returns from her account', 'Reorder in a tap', 'Back-in-stock email when a piece returns']],
  ['run', 'tools', 'Run the store', 'Without a developer.', ['Jewellery themes and a page builder', 'AI that designs sections and writes product descriptions', 'Drafts, scheduled publish and version history', 'Your own domain', 'Speed checked with Google PageSpeed']],
];
const uses = () => `<div class="ibx-ch ec-uses">${USES.map(([id, ic, t, d, pts]) => `<article id="${id}"><div class="ec-vis" aria-hidden="true">${USE_VIS[id] || ''}</div><div class="cap-ico">${icon(ic)}</div><h3>${t}</h3><p>${d}</p><ul>${pts.map((p) => `<li>${p}</li>`).join('')}</ul></article>`).join('')}</div>`;

// 6. Optimize: a funnel where each drop has its fix.
const FUNNEL = [
  ['Visitors', 100, '', ''],
  ['Viewed a product', 46, 'Heatmap', 'Most never scroll past the banner: the collection moves up'],
  ['Added to cart', 9, 'A/B test', 'Price breakup moved above the fold; the new version wins'],
  ['Started checkout', 5, 'Popup and push', 'An offer for the leaving visitor; a web push for the festival'],
  ['Ordered', 3, 'Journey', 'Carts left behind trigger a WhatsApp or email journey you set'],
];
const funnel = () => `<div class="ec-fun" data-gfx><ol>${FUNNEL.map(([n, v, tool, fix], i) => `<li style="--i:${i};--w:${v}%"><span class="ec-fun-n">${n}</span><span class="ec-fun-bar"><i></i><b>${v}</b></span>${tool ? `<span class="ec-fun-fix"><em>${tool}</em>${fix}</span>` : '<span class="ec-fun-fix is-start">Every visit tracked, by source and campaign</span>'}</li>`).join('')}</ol>
<p class="ibx-legend">Illustrative funnel, per 100 visitors. Funnels, goals and campaign attribution show your real one.</p></div>`;
const OPT = [
  ['eye', 'Heatmaps', 'See where visitors click, scroll and stop.'],
  ['branches', 'A/B tests', 'Two versions of a page, a winner declared, the winner kept.'],
  ['activity', 'Funnels and goals', 'Where visitors drop between product, cart and order.'],
  ['sparkle', 'Personalisation', 'Content and product blocks shown by audience.'],
  ['megaphone', 'Popups, polls and forms', 'Offers, questions and lead capture, built visually.'],
  ['send', 'Web push', 'Campaigns to subscribers, with token health tracked.'],
  ['chat', 'Webchat', 'Proactive messages and visitor threads on your site.'],
  ['trend', 'Attribution', 'Visits and orders by source, campaign and UTM.'],
  ['shield', 'Consent and tags', 'Google Analytics and Meta tags, only with consent.'],
];
const optCards = () => L.cards(OPT.map(([ic, title, text]) => ({ icon: ic, title, text })), 3);

// 7. After she leaves: what brings her back.
const FORK = [
  ['is-a', 'sparkle', 'Runs on its own', ['Carts left behind trigger the journey you set, on WhatsApp or email', 'Back-in-stock email when a wishlisted piece returns', 'Visits and pieces viewed added to her record'], 'check', 'She hears from you while she still cares'],
  ['is-h', 'users', 'Your team picks up', ['Her viewed pieces on screen when she walks in', 'A reserved piece ready at the branch', 'A visit booked, on the day’s list'], 'record', 'The counter knows what she wants'],
];
const fork = () => `<div class="ibx-fork" data-gfx>
  <div class="ibx-fork-in">${icon('users')}<b>She leaves the site</b><small>With a cart, a wishlist or a reservation</small></div>
  <svg class="ibx-fork-lines" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true"><path class="is-a" d="M200 0 C200 30 100 30 100 60"/><path class="is-h" d="M200 0 C200 30 300 30 300 60"/></svg>
  <div class="ibx-fork-legs">${FORK.map(([c, ic, t, rules, ric, r]) => `<div class="ibx-fork-leg ${c}"><h3>${icon(ic)}${t}</h3><ul>${rules.map((x) => `<li>${x}</li>`).join('')}</ul><p class="ibx-fork-out">${icon(ric)}${r}</p></div>`).join('')}</div>
</div>`;

const WHO = { c: ['Customer', 'is-c'], a: ['Jwero', 'is-a'], h: ['Your team', 'is-h'] };
const PATHS = [
  ['A Google search to a pickup at the branch', [
    ['Searches “22k temple necklace near me”', 'c', 'search'],
    ['Lands on the product page, priced at today’s rate', 'a', 'coins'],
    ['Checks HUID, certificate and photo reviews', 'c', 'shield'],
    ['Reserves at the Andheri branch; pickup code sent', 'a', 'receipt'],
    ['Collects it; the sale lands on her record', 'h', 'check'],
  ]],
  ['A gold plan member spends her balance', [
    ['Signs in with a one-time code', 'c', 'phone'],
    ['Sees “your plan matures in 24 days” and pieces to match', 'a', 'sparkle'],
    ['Pays the last instalment by UPI autopay', 'a', 'coins'],
    ['Books a showroom visit to choose', 'c', 'calendar'],
    ['Your team has her picks ready on the day', 'h', 'users'],
  ]],
  ['A bride who almost left', [
    ['Views six bridal sets and adds one to her cart', 'c', 'heart'],
    ['Leaves without paying', 'c', 'users'],
    ['The cart triggers your WhatsApp journey', 'a', 'whatsapp'],
    ['She replies; your team books her visit', 'h', 'chat'],
    ['Buys the set with the matching tikka', 'c', 'check'],
  ]],
  ['A photo becomes an order', [
    ['Uploads a screenshot of a necklace she liked', 'c', 'camera'],
    ['Sees the closest pieces in your catalogue', 'a', 'search'],
    ['Compares two, adds one to her wishlist', 'c', 'heart'],
    ['Back-in-stock email when her size returns', 'a', 'mail'],
    ['Orders and pays with EMI', 'c', 'receipt'],
  ]],
  ['A Diwali page that sold more', [
    ['Heatmap: most visitors never reach the collection', 'a', 'eye'],
    ['Your team builds a version with the collection first', 'h', 'tools'],
    ['A/B test runs for a week; the new version wins', 'a', 'branches'],
    ['Winner kept; a web push goes to subscribers', 'h', 'send'],
    ['Orders traced to the push and the campaign', 'a', 'pie'],
  ]],
];
const paths = () => `<div class="ibx-jr" data-jr>
  <div class="ibx-jr-tabs" role="tablist">${PATHS.map(([t], i) => `<button type="button" role="tab" data-jr-tab="${i}" aria-selected="${i === 0}">${t}</button>`).join('')}</div>
  ${PATHS.map(([t, steps], i) => `<div class="ibx-jr-panel${i === 0 ? ' is-on' : ''}" role="tabpanel" data-jr-panel="${i}"><h3>${t}</h3><ol class="ibx-jr-path">${steps.map(([x, k, ic], j) => `<li class="${WHO[k][1]}" style="--j:${j}"><span class="ibx-jr-node">${icon(ic)}</span><em>${WHO[k][0]}</em><span>${x}</span></li>`).join('')}</ol></div>`).join('')}
  <p class="ibx-legend"><span class="is-c">Customer</span> <span class="is-ai">Jwero</span> on its own · <span class="is-human">Your team</span></p>
</div>`;

const CMP = [
  ['Prices when gold moves', 'Edited by hand', 'Edited by hand, or an add-on', 'Today’s rate, repriced again at checkout'],
  ['Price breakup', 'None', 'Custom work', 'Metal, making charges and stones'],
  ['Hallmark and certificate', 'A line of text', 'A custom field', 'On the piece, with the certificate'],
  ['Stock', 'Not shown', 'Separate from the showroom', 'The same stock as your counter'],
  ['Showroom', 'A contact form', 'Apps to add', 'Reserve and collect, or book a visit'],
  ['Gold plans and loyalty', 'No', 'Apps to add', 'Enrol, pay, passbook and points, built in'],
  ['Heatmaps, tests, push, popups', 'No', 'Four or five tools', 'Built in, with one visitor record'],
  ['Personalisation', 'No', 'An app, by rule', 'By audience, with picks from her record'],
  ['After she leaves', 'Nothing', 'An email, if set up', 'Journeys on carts left behind; her visit on her record'],
  ['Upkeep', 'Your developer', 'Add-ons, updates, hosting', 'Run and updated by Jwero'],
];
const cmpTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>A brochure website</th><th>A general online store</th><th>Jwero</th></tr></thead><tbody>${CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;

const HOW = [
  ['Bring in your catalogue', 'The same catalogue your counter sells from: weights, purity, stones and making charges.'],
  ['Let AI set up the store', 'Tell it your brand; it designs the sections and writes the copy for you to adjust.'],
  ['Connect your domain', 'Your own address, colours and logo on a jewellery theme.'],
  ['Switch on how you sell', 'Online payment, EMI, reserve at a branch, showroom visits, gold plans and loyalty.'],
  ['Turn on Optimize', 'Funnels, heatmaps, tests, personalisation, push and journeys for carts left behind.'],
];

const READS = [['/jewellery-website-personalisation', 'Personalising a jewellery website'], ['/jewellery-website-ab-testing', 'Heatmaps and A/B tests for jewellers'], ['/reserve-online-collect-in-store-jewellery', 'Reserve online, collect in store'], ['/abandoned-cart-recovery-for-jewellers', 'Bringing back carts left behind'], ['/jewellery-website-analytics', 'Jewellery website analytics'], ['/jewellery-ecommerce-complete-guide', 'The jewellery ecommerce guide']];

const faqs = [
  { q: 'What is a jewellery ecommerce website?', a: 'A store where customers browse, price and buy jewellery online. For a jeweller it must follow the gold rate, show the price breakup, prove purity and match the showroom stock. Jwero does all four, on the same record as your counter and WhatsApp, with Optimize built in.' },
  { q: 'Do prices follow the gold rate?', a: 'Yes. Prices use today’s rate with metal, making charges and stones shown line by line, and the price is checked again at checkout so nobody pays yesterday’s rate.' },
  { q: 'How does the site personalise for each visitor?', a: 'Banners and product-page blocks can be shown to chosen audiences, and recommendations and recently viewed pieces come from each visitor’s own browsing and purchases.' },
  { q: 'What is Jwero Optimize?', a: 'The tools that improve your website: visitor tracking, heatmaps, A/B tests with a declared winner, funnels and goals, personalisation by audience, popups, polls, lead forms, web push and webchat, with every visitor on one record.' },
  { q: 'Do I still need separate heatmap, testing or push tools?', a: 'No. Heatmaps, A/B tests, funnels, popups and web push are built in, and the visitor is the same record as on WhatsApp and at the counter.' },
  { q: 'What happens when someone leaves a cart?', a: 'The abandoned cart can trigger a journey you set up on WhatsApp or email, and her visit, viewed pieces and cart stay on her record for your team.' },
  { q: 'Can a customer reserve online and see the piece in the showroom?', a: 'Yes. She reserves it at the branch that holds it and collects it with a pickup code, or books a showroom visit in a time slot.' },
  { q: 'Can customers search by photo?', a: 'Yes. A shopper uploads a photo of a piece she likes and sees the closest matches from your catalogue.' },
  { q: 'Can customers join and pay a gold plan online?', a: 'Yes. They see your plans with a calculator, enrol, pay each instalment, set up UPI autopay and follow the passbook from their account.' },
  { q: 'How do customers pay?', a: 'Through Razorpay, Cashfree, PhonePe or UPI, with EMI options shown on the product page where you offer them. Coupons and loyalty points apply at checkout.' },
  { q: 'Do customers need a password?', a: 'No. They check out as a guest, or sign in with a one-time code on WhatsApp, SMS or email.' },
  { q: 'Will the store help me rank on Google?', a: 'It gives you what ranking needs: fast pages checked with Google PageSpeed, structured data, a sitemap, clean addresses and redirects, a blog, collection landing pages and customer reviews.' },
  { q: 'Does it work with Google Analytics and the Meta pixel?', a: 'Yes. Both are added through consent-gated tags, and visits are attributed by source, campaign and UTM in Jwero.' },
  { q: 'What happened to the Optimize page?', a: 'Optimize is now part of this page, because it improves the same store. Its old address brings you to the Optimize section here.' },
];

const ecommerce = {
  slug: 'products/ecommerce',
  title: 'Jewellery Ecommerce Website: Live Gold Rate, Personalised, Optimised | Jwero',
  description: 'Jewellery ecommerce with today’s gold rate and price breakup, HUID and certificates, reserve and collect, gold plans online, personalisation, heatmaps, A/B tests and web push.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Ecommerce for Jewellers', alternateName: ['Jewellery ecommerce website', 'Jewellery website builder', 'Jwero Optimize', 'Jewellery website personalisation', 'Jewellery website analytics'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A jewellery ecommerce website with today’s gold rate and a price breakup, purity, HUID and certificates, search by photo, compare and wishlist, OTP sign-in, EMI, reserve at a branch with a pickup code, showroom visit booking, gold plans online, and Optimize built in: heatmaps, A/B tests, funnels, personalisation by audience, popups, web push, webchat and journeys for abandoned carts.',
    audience: { '@type': 'BusinessAudience', audienceType: 'Jewellery retailers, chains and online jewellery brands' },
    featureList: 'Live gold rate pricing, price breakup, HUID and certificates, search by photo, compare, wishlist, reviews with photos, product Q&A, OTP sign-in, EMI, reserve and collect, showroom visit booking, gold plans online, coupons, loyalty, themes and page builder, AI design, SEO, blog, heatmaps, A/B tests, funnels, personalisation, popups, polls, lead forms, web push, webchat, abandoned cart journeys, back-in-stock alerts, UTM attribution',
    dateModified: '2026-10-10',
    url: 'https://jwero.ai/products/ecommerce', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to launch a jewellery ecommerce website', step: HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Ecommerce'),
  faqs,
  body: `
${L.hero({
  eyebrow: 'Your showroom, online, and getting better every week',
  h1: 'A store that prices like your counter. <span class="h1-turn">And learns what sells.</span>',
  sub: 'Today’s gold rate with the breakup, proof of purity on every piece, reserve and collect at your branch, and gold plans online. Optimize shows where visitors drop, tests the fix, personalises what each one sees and brings back the carts left behind.',
  primary: { href: '#', label: 'Show me where my site loses orders', wa: 'ecommerce' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">What is Jwero Ecommerce?</h2><p>Jwero Ecommerce is a jewellery website that sells like your showroom: prices at today’s gold rate with the breakup, purity, HUID and certificates on every piece, the same stock as your counter, reserve and collect at a branch, showroom visits and gold plans online. Optimize is built in: heatmaps, A/B tests, funnels, personalisation by audience, popups, web push, webchat and journeys for carts left behind, with every visitor on one customer record.</p></div></section>

${prog()}

${L.section(`${L.sectionHead('BUILT AROUND HOW YOU RUN', 'I run a…', 'Pick your business. The page puts your journey and your next step first.')}${icp()}`, { tone: 'tint', id: 'for-you' })}

${L.section(`${L.sectionHead('ONE VISIT', 'How does a visitor become a buyer?', 'Six steps, on one record.')}${run()}`, { id: 'one-visit' })}

${L.section(`${L.sectionHead('THE PRICE, LINE BY LINE', 'What does a shopper see before she buys?', 'The breakup on every product page. Try it.')}${breakup()}`, { id: 'breakup' })}

${L.section(`${L.sectionHead('YOUR SITE TODAY', 'How does your website score?', 'Ten things jewellery shoppers look for. Tick what your site does now.')}${score()}`, { tone: 'tint', id: 'score' })}

${L.section(`${L.sectionHead('THE SHOWROOM, ONLINE', 'Can an online visitor become a showroom visit?', 'Yes. Reserve online, try it in the showroom.')}${showroomFirst()}`, { id: 'showroom-first' })}

${L.section(`${L.sectionHead('PERSONALISED', 'Does every visitor see the same store?', 'No. Pick a visitor and watch the same page change.')}${personalise()}`, { tone: 'tint', id: 'personalise' })}

${L.section(`${L.sectionHead('EVERYTHING IN IT', 'What can a jewellery website do with Jwero?', 'Eight jobs, from being found to running the store.')}${uses()}`, { id: 'use-cases' })}

${L.section(`${L.sectionHead('OPTIMIZE, BUILT IN', 'Where does my website lose orders?', 'At every step of the funnel. Each drop has a tool that finds it and a way to fix it.')}${funnel()}${optCards()}<p class="ec-opt-go"><a class="btn btn-primary" href="#" data-wa="ecommerce" data-wa-extra=" I would like to see my site’s funnel." data-ec-cta="funnel">Show me my site’s funnel</a></p>`, { tone: 'tint', id: 'optimize' })}

${L.section(`${L.sectionHead('WIN THEM BACK', 'What happens after a visitor leaves?', 'What runs on its own, and what your team picks up.')}${fork()}`, { id: 'recover' })}

${L.section(`${L.sectionHead('JOURNEYS', 'From a search to a sale.', 'Five real paths, showing what Jwero does and where your team steps in.')}${paths()}`, { tone: 'tint', id: 'journeys' })}

${L.section(`${L.sectionHead('COMPARE', 'A brochure website, a general online store, or Jwero.', '')}${cmpTable()}`)}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to launch a jewellery ecommerce website.', 'Five steps.')}${L.steps(HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('READ MORE', 'Guides for your website.', '')}<div class="erp-map">${READS.map(([h, t]) => `<a href="${h}"><b>${t}</b><span>${h.replace(/^\//, 'jwero.ai/')}</span></a>`).join('')}</div>`)}

${L.oneSystemBlock([
  'The website sells from the same stock as your counter, so a piece is never sold twice.',
  'A visitor, a WhatsApp chat and a showroom visit are one customer record.',
  'Gold plans, loyalty and coupons work the same online and at the counter.',
])}

${L.section(`<p class="cta-note" style="text-align:center">Last updated 10 October 2026.</p>`)}

${L.ctaBand('See where your website loses orders.', 'Share your site and last month’s visitors. We will show the funnel, and what Jwero would fix first.', 'ecommerce')}
`,
};

module.exports = [ecommerce];
module.exports.heroPiece = () => meter();
module.exports.parts = { personalise, funnel, fork, meter, breakup, showroomFirst, score };
