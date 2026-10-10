// Digital Catalogues, rebuilt 2026-10-10 in the One Inbox design from a pim-app
// survey. Built: catalogues from chosen products with filters and templates; share
// link with preview, QR, WhatsApp to chosen contacts on an approved template;
// private catalogues for an allow-list, opened by OTP; expiry; modes (orders,
// enquiries, browse); prices from the pricing engine, hidden or on request, optional
// weights and metal/stone/making breakup; server quote at checkout with GST;
// in stock / made to order / out of stock; tracking of views, piece clicks, carts,
// wishlists and checkouts with a per-visitor timeline; analytics and leaderboards;
// orders with online payment; enquiries to tasks and quotations; alerts on orders
// and enquiries; AI title, description and product suggestions; CRM contact match by
// phone; custom domain; design and templates.
// NOT claimed (earlier page claims not found in code): password-protected links
// (OTP instead), buyer-specific B2B pricing, alerts when a catalogue is opened. Also
// not claimed: PDF export, multiple languages, approval memo orders, a buyer portal,
// video, journeys on views, a live gold-rate ticker.
const L = require('../lib');
const { icon } = L;
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

const meter = () => `<div class="erp-meter dc-meter" data-dcm>
  <p class="erp-meter-t">${icon('activity')}<b>What do your PDFs and photo dumps miss?</b></p>
  <label><span>Catalogues sent a month <b data-o="sent"></b></span><input type="range" data-i="sent" min="5" max="2000" step="5" value="120"></label>
  <label><span>Average order from a catalogue <b data-o="aov"></b></span><input type="range" data-i="aov" min="10000" max="1000000" step="5000" value="80000"></label>
  <div class="erp-meter-bars">
    <a href="#tracked" data-b="now"><span>Orders today</span><i><em></em></i><b></b></a>
    <a href="#tracked" data-b="then"><span data-o="thenl">With tracked links and ordering</span><i><em></em></i><b></b></a>
  </div>
  <p class="erp-meter-total"><span>Extra sales a month</span><b data-o="total"></b></p>
  <a class="btn btn-primary erp-meter-cta" href="#" data-wa="catalog" data-wa-extra="" data-dc-cta="meter">Show me a catalogue for my customers</a>
  <details class="erp-meter-as"><summary>The assumptions, change them</summary>
    <label>Catalogues that become an order today, %<input type="number" data-a="cr" value="3" step="0.5" min="0"></label>
    <label>Lift from tracking, follow-up and ordering on the link, points<input type="number" data-a="lift" value="2" step="0.5" min="0"></label>
  </details>
  <p class="erp-meter-note">A planning estimate from your inputs and these assumptions, not a measurement.</p>
</div>`;

const RUN = [
  ['Picked', 'Pieces chosen from your stock, or suggested by AI from a plain request.', 'sparkle'],
  ['Set', 'Orders, enquiries or browse only; prices shown, hidden or on request; private if you like.', 'shield'],
  ['Shared', 'On WhatsApp to chosen customers, as a QR, or on your own domain.', 'whatsapp'],
  ['Tracked', 'Every open, piece, wishlist and cart, on her timeline.', 'eye'],
  ['Asked', 'An enquiry becomes a task, then a quotation.', 'chat'],
  ['Ordered', 'She orders and pays on the link; it lands on her record.', 'check'],
];
const RUN_TAGS = [['sparkle', '12 bridal necklaces'], ['shield', 'Private · opens by OTP'], ['whatsapp', 'Sent to the Shah family'], ['eye', '4 views on the temple set'], ['chat', 'Quote sent'], ['check', 'Paid online']];
const run = () => `<div class="ibx-msg" data-msg style="--n:${RUN.length}">
  <div class="ibx-msg-stage" aria-hidden="true"><div class="ibx-msg-bubble"><p>“Bridal edit for the Shah family”</p><ul>${RUN_TAGS.map(([ic, t], i) => `<li data-k="${i}">${icon(ic)}${t}</li>`).join('')}</ul></div></div>
  <ol class="ibx-msg-steps">${RUN.map(([t, d, ic], i) => `<li data-k="${i}"><span class="ibx-msg-n">${icon(ic)}<b>${i + 1}</b></span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
</div>`;

// A visitor's timeline, as the team sees it.
const TL = [['eye', '10:02', 'Opened “Bridal edit”'], ['gem', '10:04', 'Temple necklace · viewed 4 times'], ['heart', '10:07', 'Added the kundan choker to her wishlist'], ['receipt', '10:11', 'Cart: temple necklace'], ['chat', '10:12', 'Enquiry: “Can I see it in 18K?”'], ['check', '10:30', 'Quotation sent from the enquiry']];
const timeline = () => `<div class="dc-tl" data-gfx><div class="dc-tl-h"><span class="crm-orb-av">M</span><div><b>Meera Shah</b><small>Verified by OTP · matched to her customer record</small></div></div><ol>${TL.map(([ic, tm, t], i) => `<li style="--i:${i}">${icon(ic)}<b>${tm}</b><span>${t}</span></li>`).join('')}</ol></div>
<p class="ibx-legend">Illustrative. Views, piece clicks, wishlists, carts, checkouts and enquiries are tracked per visitor, with alerts on orders and enquiries.</p>`;

const LEAKS = [
  ['Leak', 'receipt', 'A PDF with last month’s prices', 'Prices worked out by your pricing engine every time it opens'],
  ['Leak', 'share', 'Forwarded to anyone, forever', 'Private for chosen customers, opened by OTP, with an expiry date'],
  ['Leak', 'box', 'A sold piece still in the PDF', 'In stock, made to order or out of stock, shown on each piece'],
  ['Hidden loss', 'eye', 'No idea who looked at what', 'Every view, piece, wishlist and cart on a visitor timeline'],
  ['Hidden loss', 'chat', '“Interested” lost in WhatsApp', 'Enquiries become tasks, then quotations'],
  ['Hidden loss', 'users', 'A stranger behind every view', 'Verified visitors matched to the customer record'],
  ['Bottleneck', 'tools', 'Making a new PDF for each family', 'Pieces picked, or suggested by AI, in minutes'],
  ['Bottleneck', 'coins', 'Prices typed for every piece', 'Shown, hidden, on request, with the breakup if you want'],
  ['Bottleneck', 'send', 'Interest, then a phone call to close', 'Order and pay on the link'],
];
const leakCards = () => `<div class="ibx-flips erp-leaks" data-flips>${LEAKS.map(([k, ic, before, after], i) => `<button type="button" class="ibx-flip" style="--i:${i}" aria-pressed="false"><span class="ibx-flip-in"><span class="ibx-flip-f"><span class="ibx-flip-ico">${icon(ic)}</span><small class="erp-leak-k">${k} with PDFs</small><b>${before}</b></span><span class="ibx-flip-b"><span class="ibx-flip-ico">${icon('check')}</span><small>With Jwero catalogues</small><b>${after}</b></span></span></button>`).join('')}</div><p class="ibx-legend">Each card turns as you scroll. Tap one to turn it back.</p>`;

const MODULES = [
  ['create', 'sparkle', 'Create', ['Pick pieces from stock with filters', 'Templates and your own design', 'AI suggests pieces from a plain request', 'AI writes the catalogue title and description']],
  ['share', 'whatsapp', 'Share', ['WhatsApp to chosen customers on an approved template', 'A QR for the counter or an event', 'Your own domain', 'Link previews that show the catalogue']],
  ['control', 'shield', 'Control', ['Orders, enquiries or browse only', 'Prices shown, hidden or on request', 'Weights and metal, stone and making breakup', 'Private for chosen customers, by OTP; an expiry date']],
  ['tracked', 'eye', 'Track', ['Views, piece clicks, wishlists, carts and checkouts', 'A timeline for each visitor', 'Analytics and leaderboards', 'Alerts on orders and enquiries']],
  ['close', 'check', 'Close', ['Order and pay online on the link', 'Enquiries become tasks and quotations', 'GST and delivery worked out at checkout', 'Orders and visitors on the customer record']],
];
const modules = () => `<div class="ibx-ch">${MODULES.map(([id, ic, t, pts]) => `<article id="${id}"><div class="cap-ico">${icon(ic)}</div><h3>${t}</h3><ul>${pts.map((p) => `<li>${p}</li>`).join('')}</ul></article>`).join('')}</div>`;

const WHO = { c: ['Customer', 'is-c'], a: ['Jwero', 'is-a'], h: ['Your team', 'is-h'] };
const PATHS = [
  ['A bridal family who never visited', [['Family asks on WhatsApp for bridal options', 'c', 'chat'], ['12 pieces picked; a private catalogue sent', 'h', 'shield'], ['They open it by OTP and view the temple set 4 times', 'c', 'eye'], ['An enquiry becomes a quotation', 'a', 'receipt'], ['They pay an order on the link', 'c', 'check']]],
  ['An exhibition QR', [['A QR at your stall opens the festive edit', 'c', 'search'], ['Visitors browse; pieces show in stock or made to order', 'a', 'box'], ['Wishlists and carts tracked', 'a', 'heart'], ['Enquiries become tasks for your team', 'h', 'users'], ['Orders arrive with an alert', 'a', 'check']]],
  ['A retailer orders from a wholesaler', [['A retailer asks for new 22K chains', 'c', 'chat'], ['An enquiry catalogue sent; prices on request', 'h', 'shield'], ['He views 30 pieces, in stock or made to order', 'c', 'box'], ['His enquiry becomes a quotation', 'a', 'receipt'], ['He confirms; your team is alerted', 'h', 'check']]],
  ['A catalogue that expired on time', [['Diwali offer catalogue sent with an end date', 'h', 'calendar'], ['Customers view and order through the week', 'c', 'eye'], ['Orders paid online', 'c', 'coins'], ['On the end date the link closes', 'a', 'shield'], ['Analytics show which pieces sold', 'a', 'pie']]],
];
const paths = () => `<div class="ibx-jr" data-jr>
  <div class="ibx-jr-tabs" role="tablist">${PATHS.map(([t], i) => `<button type="button" role="tab" data-jr-tab="${i}" aria-selected="${i === 0}">${t}</button>`).join('')}</div>
  ${PATHS.map(([t, steps], i) => `<div class="ibx-jr-panel${i === 0 ? ' is-on' : ''}" role="tabpanel" data-jr-panel="${i}"><h3>${t}</h3><ol class="ibx-jr-path">${steps.map(([x, k, ic], j) => `<li class="${WHO[k][1]}" style="--j:${j}"><span class="ibx-jr-node">${icon(ic)}</span><em>${WHO[k][0]}</em><span>${x}</span></li>`).join('')}</ol></div>`).join('')}
  <p class="ibx-legend"><span class="is-c">Customer</span> <span class="is-ai">Jwero</span> on its own · <span class="is-human">Your team</span></p>
</div>`;


// Six parts of the catalogue, lit by what happens to them.
const PARTS = [
  ['sparkle', 'Pieces', 'Picked from stock, or by AI.', ['Filters on your live stock', 'AI suggests pieces from a plain request', 'Templates and your own design']],
  ['coins', 'Prices', 'From your pricing engine.', ['Worked out each time it opens', 'Shown, hidden or on request', 'Weights and metal, stone and making breakup']],
  ['shield', 'Access', 'Who can open it.', ['Private for chosen customers', 'Opened by a one-time code', 'An expiry date']],
  ['eye', 'Visitors', 'Who looked at what.', ['Views and piece clicks', 'Wishlists and carts', 'A timeline per visitor']],
  ['chat', 'Enquiries', 'Questions that become sales.', ['Each enquiry becomes a task', 'Quotations from enquiries', 'An alert to your team']],
  ['check', 'Orders', 'Paid on the link.', ['Online payment', 'GST and delivery at checkout', 'An alert, and the order on her record']],
];
const FEED = [
  ['in', 'Bridal edit · prices updated at today’s rate', 1],
  ['in', 'Shah family · opened by OTP', 2],
  ['in', 'Meera viewed the temple necklace 4 times', 3],
  ['note', 'Enquiry: “Can I see it in 18K?” · task created', 4],
  ['out', 'Quotation sent from the enquiry', 4],
  ['in', 'Order paid on the link · ₹ on her record', 5],
];
const partCard = ([ic, t, d, items], k) => `<details class="ibx-dnode" data-d="${k}"><summary><span class="ibx-dnode-ico">${icon(ic)}</span><b>${t}</b><small>${d}</small></summary><ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul></details>`;
const board = () => `<div class="ibx-biz" data-biz>
  <div class="ibx-biz-side">${PARTS.slice(0, 3).map((x, k) => partCard(x, k)).join('')}</div>
  <div class="ibx-biz-thread" aria-hidden="true"><div class="ibx-biz-head">${icon('activity')}<b>One catalogue, today</b></div><ol>${FEED.map(([w, t, d]) => `<li class="is-${w}" data-d="${d}">${t}</li>`).join('')}</ol></div>
  <div class="ibx-biz-side">${PARTS.slice(3).map((x, k) => partCard(x, k + 3)).join('')}</div>
</div><p class="ibx-legend">Illustrative. Each line lights the part of the catalogue it comes from. Tap a part to see what it does.</p>`;

// What runs on its own, and what your team decides.
const FORK = [
  ['is-a', 'sparkle', 'Runs on its own', ['Prices worked out at today’s rate when it opens', 'Stock status on every piece', 'Every view, wishlist and cart on her timeline', 'The link closes on its end date'], 'check', 'Nobody types a price or chases a PDF'],
  ['is-h', 'users', 'Your team decides', ['Which pieces, and for whom', 'Prices shown, hidden or on request', 'The quotation for each enquiry'], 'shield', 'Alerted on every enquiry and order'],
];
const fork = () => `<div class="ibx-fork" data-gfx>
  <div class="ibx-fork-in">${icon('share')}<b>She opens the catalogue</b><small>From WhatsApp, a QR or your own domain</small></div>
  <svg class="ibx-fork-lines" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true"><path class="is-a" d="M200 0 C200 30 100 30 100 60"/><path class="is-h" d="M200 0 C200 30 300 30 300 60"/></svg>
  <div class="ibx-fork-legs">${FORK.map(([c, ic, t, rules, ric, r]) => `<div class="ibx-fork-leg ${c}"><h3>${icon(ic)}${t}</h3><ul>${rules.map((x) => `<li>${x}</li>`).join('')}</ul><p class="ibx-fork-out">${icon(ric)}${r}</p></div>`).join('')}</div>
</div>`;


// 1. A sample catalogue, from the customer's side.
const PIECES = [['Temple necklace', '22K · 48.2 g', '₹3,84,000', 'In stock', ['Gold 22K, 46.1 g', '₹3,41,000'], ['Stones', '₹14,000'], ['Making', '₹29,000']], ['Kundan choker', '22K · 36.5 g', '₹2,96,000', 'Made to order'], ['Jhumkas', '22K · 18.0 g', '₹1,42,000', 'In stock'], ['Bangles, pair', '22K · 32.4 g', '₹2,52,000', 'Out of stock']];
const sample = () => `<div class="dc-try" data-dcs>
  <div class="dc-try-ctl"><p class="pc-tag">PRICES</p><div role="group" aria-label="Prices">${[['show', 'Shown'], ['hide', 'Hidden'], ['ask', 'On request']].map(([k, t], i) => `<button type="button" data-mode="${k}" aria-pressed="${i === 0}">${t}</button>`).join('')}</div><label class="dc-try-bk"><input type="checkbox" data-bk checked> Show the breakup</label><p class="dc-try-alert" data-alert hidden>${icon('activity')}<span></span></p></div>
  <div class="hr-phone dc-phone"><div class="hr-phone-in"><p class="hr-phone-h"><b>Bridal edit</b><small>For the Shah family · open until 30 Nov</small></p>
  <ul class="dc-try-list">${PIECES.map(([n, w, pr, st, ...bk], i) => `<li><span class="dc-try-img" style="--i:${i}">${icon('gem')}</span><div><b>${n}</b><small>${w} · <em class="is-${st === 'In stock' ? 'in' : st === 'Made to order' ? 'mto' : 'out'}">${st}</em></small><p class="dc-try-p" data-price="${pr}">${pr}</p>${bk.length ? `<ul class="dc-try-bd">${bk.map(([a, b]) => `<li><span>${a}</span><span>${b}</span></li>`).join('')}</ul>` : ''}<span class="dc-try-act"><button type="button" data-act="enq" data-n="${n}">Enquire</button>${st === 'Out of stock' ? '' : `<button type="button" data-act="cart" data-n="${n}">Add to cart</button>`}</span></div></li>`).join('')}</ul></div></div>
</div><p class="ibx-legend">An example catalogue. Prices are illustrative; in Jwero they come from your pricing engine when the catalogue opens.</p>`;

// 2. AI picks the pieces (a scripted example).
const aiBuild = () => `<div class="dc-ai" data-dcai>
  <form class="dc-ai-f"><label for="dc-ai-q">Ask for a catalogue</label><div><input id="dc-ai-q" type="text" value="22K bridal necklaces under 4 lakh" autocomplete="off"><button class="btn btn-primary" type="submit">${icon('sparkle')}Build it</button></div></form>
  <div class="dc-ai-out" data-out hidden><p class="pc-tag">EXAMPLE RESULT</p><h3 data-o="title"></h3><p data-o="desc"></p><ul>${['Temple necklace · 48.2 g', 'Kundan choker · 36.5 g', 'Lakshmi haar · 52.0 g', 'Polki necklace · 41.3 g', 'Antique mango mala · 44.8 g'].map((x, i) => `<li style="--i:${i}">${icon('gem')}${x}</li>`).join('')}</ul><p class="erp-meter-note">A scripted example. In Jwero, AI suggests pieces from your own stock and writes the title and description; you choose what goes in.</p></div>
</div>`;

// 3. The same piece, PDF and link.
const pdfVs = () => `<div class="dc-vs" data-gfx>
  <div class="dc-vs-c is-pdf"><p class="pc-tag">PDF ON WHATSAPP</p><b>Kundan choker</b><ul><li>${icon('receipt')}₹2,81,000 · last month’s rate</li><li>${icon('box')}Sold on Tuesday, still listed</li><li>${icon('share')}Forwarded to an unknown number</li><li>${icon('eye')}Opened? No idea</li></ul></div>
  <span class="dc-vs-arrow" aria-hidden="true">${icon('arrow')}</span>
  <div class="dc-vs-c is-link"><p class="pc-tag">JWERO LINK</p><b>Kundan choker</b><ul><li>${icon('coins')}₹2,96,000 · today’s rate</li><li>${icon('box')}Made to order</li><li>${icon('shield')}Opened by OTP · Meera Shah</li><li>${icon('eye')}Viewed 4 times</li></ul></div>
</div>`;

// 4. Which pieces pull.
const STATS = [['Temple necklace', 38, 9, 3], ['Kundan choker', 31, 7, 2], ['Polki necklace', 24, 6, 0], ['Antique mango mala', 19, 2, 0]];
const stats = () => `<div class="tbl-wrap dc-stats"><table class="tbl"><thead><tr><th>Piece</th><th>Views</th><th>Wishlists</th><th>Enquiries</th><th></th></tr></thead><tbody>${STATS.map(([n, v, w, e]) => `<tr><td><strong>${n}</strong></td><td><i class="dc-bar" style="--w:${v / 38 * 100}%"></i>${v}</td><td>${w}</td><td>${e}</td><td>${e === 0 ? `<span class="dc-hint">${icon('send')}Viewed, not asked: follow up</span>` : ''}</td></tr>`).join('')}</tbody></table></div><p class="ibx-legend">Illustrative. Per-piece views, wishlists and enquiries, with analytics and leaderboards for each catalogue.</p>`;

// 6. A private link, in three screens.
const privateLink = () => `<div class="dc-pv" data-gfx>${[['whatsapp', 'On WhatsApp', '<p class="dc-pv-msg">Namaste Meera ji, the bridal edit we chose for you is ready. <u>Open the catalogue</u></p>'], ['shield', 'Verify', '<p class="dc-pv-otp">Enter the code sent to +91 98•• ••4410</p><p class="dc-pv-code"><span>4</span><span>8</span><span>1</span><span>6</span></p>'], ['gem', 'Her catalogue', '<p class="dc-pv-cat"><b>Bridal edit · 12 pieces</b><small>Open until 30 November</small></p><p class="dc-pv-grid">' + '<span></span>'.repeat(6) + '</p>']].map(([ic, t, body], i) => `<div class="dc-pv-s" style="--i:${i}"><p class="dc-pv-t">${icon(ic)}<b>${i + 1}</b>${t}</p><div class="dc-pv-scr">${body}</div></div>`).join('')}</div>
<p class="ibx-legend">Only the customers you choose can open it, by a one-time code to their phone. After the end date the link closes.</p>`;

// 7. An exhibition QR.
const qrCells = Array.from({ length: 121 }, (_, i) => { const x = i % 11, y = (i / 11) | 0; const f = (x < 3 && y < 3) || (x > 7 && y < 3) || (x < 3 && y > 7); return f || ((x * 7 + y * 13 + x * y) % 3 === 0) ? `<i style="grid-area:${y + 1}/${x + 1}"></i>` : ''; }).join('');
const qrBlock = () => `<div class="dc-qr" data-gfx>
  <div class="dc-qr-card"><p class="pc-tag">STALL 14</p><div class="dc-qr-code" aria-hidden="true">${qrCells}</div><b>Festive edit</b><small>Scan to browse</small></div>
  <ol class="dc-qr-feed">${[['eye', '62 visitors browsed today'], ['heart', '18 added pieces to a wishlist'], ['chat', '7 enquiries became tasks for your team'], ['check', '2 orders paid on the link']].map(([ic, t], i) => `<li style="--i:${i}">${icon(ic)}${t}</li>`).join('')}</ol>
</div><p class="ibx-legend">Illustrative. Every catalogue has its own QR; enquiries and orders alert your team.</p>`;

// 8. Moving over.
const DCFROM = [['PDFs and WhatsApp photos', 1], ['QuickSell', 2]];
const dcFrom = () => `<div class="ibx-jr hr-from dc-from" data-jr data-jr-still>
  <div class="ibx-jr-tabs" role="tablist">${DCFROM.map(([n, c], i) => `<button type="button" role="tab" data-jr-tab="${i}" data-col="${c}" aria-selected="${i === 0}">From ${n}</button>`).join('')}</div>
  ${DCFROM.map(([n], i) => `<div class="ibx-jr-panel${i === 0 ? ' is-on' : ''}" role="tabpanel" data-jr-panel="${i}"><h3>Moving from ${n}</h3><ol class="ibx-jr-path">${[['Your stock is in Jwero', 'The same pieces the counter sells.'], ['Pick pieces', 'With filters, or ask AI.'], ['Send to five customers', i === 0 ? 'Keep sending PDFs alongside if you like.' : 'Keep QuickSell running alongside.'], ['Compare what you learn', 'Views, wishlists and enquiries per piece.'], ['Switch over', 'Every catalogue on one record.']].map(([t, d], j) => `<li class="${j === 3 ? 'is-h' : 'is-a'}" style="--j:${j}"><span class="ibx-jr-node"><b>${j + 1}</b></span><em>${t}</em><span>${d}</span></li>`).join('')}</ol>${i === 1 ? '<p class="erp-from-more"><a href="/compare/jwero-vs-quicksell">Jwero vs QuickSell →</a></p>' : ''}</div>`).join('')}
</div>`;

// 9. Proof per business type, and a hand-off to the sales team.
const Q = require('./positioning').QUOTES;
const PROOF = { single: 0, b2b: 1, brand: 3 };
const proofCard = (k) => { const q = Q[PROOF[k]]; return q ? `<figure class="erp-proof"><blockquote>“${q[0]}”</blockquote><figcaption>${q[1]}${q[2] ? ', ' + q[2] : ''}</figcaption></figure>` : ''; };
const shareBand = () => `<div class="pass-box hr-share"><div><p class="eyebrow">FOR YOUR SALES TEAM</p><h2>Who sends catalogues in your business?</h2><p>Send them this page on WhatsApp, with your numbers. They pick the pieces; you see every view.</p></div><a class="btn btn-primary" href="#" data-dc-share data-dc-cta="share">Send to my sales team</a></div>`;

// "I run a…"
const ICP = [
  ['single', 'store', 'A store', 'Start with private catalogues for families who have not visited yet: picked from your stock, opened by OTP, every look on her timeline.', 0, 'private-link', 'trial', 'Start free for your store'],
  ['b2b', 'truck', 'A wholesaler or trader', 'Start with enquiry catalogues for retailers: prices hidden or on request, stock status on each piece, every enquiry turned into a quotation.', 2, 'stats', 'demo', 'Book a 30-minute demo for wholesale'],
  ['brand', 'megaphone', 'An online brand', 'Start with order catalogues: QR and your own domain, prices from your engine, order and pay on the link.', 1, 'qr', 'trial', 'Start free for your brand'],
];
const door = ([k, , , , , , d, label], cls) => d === 'demo'
  ? `<a class="${cls}" href="/book-demo" data-dc-cta="door-${k}">${label}</a>`
  : `<a class="${cls}" href="https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=catalogues-${k}" rel="noopener" data-trial data-dc-cta="door-${k}">${label}</a>`;
const icpBox = () => `<div class="erp-icp soc-icp" data-dc-icp data-after="sample" data-cfg='${JSON.stringify(Object.fromEntries(ICP.map(([k, , , , j, lead]) => [k, [j, lead]])))}'>
  <div class="erp-icp-opts" role="tablist" aria-label="I run a…">${ICP.map(([k, ic, t], i) => `<button type="button" role="tab" data-k="${k}" aria-selected="${i === 0}">${icon(ic)}<span>${t}</span></button>`).join('')}</div>
  ${ICP.map((e, i) => `<div class="erp-icp-panel${i === 0 ? ' is-on' : ''}" data-panel="${e[0]}"><p>${e[3]}</p><div class="erp-icp-go"><a href="#one-catalogue">One catalogue ↓</a><a href="#board">What you see ↓</a><a href="#journeys">Your journey ↓</a></div><p class="erp-icp-door">${door(e, 'btn btn-primary')}</p>${proofCard(e[0])}</div>`).join('')}
</div>`;
const prog = () => `<nav class="erp-prog" data-erp-prog aria-label="On this page"><div class="erp-prog-in">
  <ol>${[['sample', 'Try'], ['one-catalogue', 'Send'], ['board', 'Watch'], ['stats', 'Pieces'], ['leaks', 'Leaks'], ['journeys', 'Journeys']].map(([id, t], i) => `<li><a href="#${id}" data-p="${id}"><b>${i + 1}</b>${t}</a></li>`).join('')}</ol>
  <span class="erp-prog-doors">${ICP.map((e) => door(e, 'btn btn-primary erp-prog-cta dc-door')).join('')}</span>
</div><i class="erp-prog-fill" aria-hidden="true"></i></nav>`;

const READS = [['/products/crm', 'CRM: the customer record catalogue visitors land on'], ['/products/inbox', 'One Inbox: where catalogues are sent and enquiries arrive'], ['/products/ecommerce', 'Ecommerce: the same prices and stock online'], ['/compare/jwero-vs-quicksell', 'Jwero vs QuickSell']];

const CMP = [
  ['Prices', 'Fixed the day it was made', 'Updated by hand', 'From your pricing engine each time it opens'],
  ['Hide prices', 'Make another PDF', 'Yes', 'Shown, hidden or on request, with optional breakup'],
  ['Who viewed what', 'No idea', 'Views', 'A timeline per visitor: views, pieces, carts'],
  ['Private', 'Forwarded anywhere', 'Varies', 'Chosen customers only, opened by OTP, with expiry'],
  ['Sold pieces', 'Still in the PDF', 'Updated by hand', 'In stock, made to order or out of stock on each piece'],
  ['From interest to order', 'Back to chat', 'Order form', 'Enquiry to quotation, or order and pay on the link'],
];
const cmpTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>PDF or photos on WhatsApp</th><th>A generic catalogue app</th><th>Jwero</th></tr></thead><tbody>${CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>
<p class="cta-note" style="margin-top:12px">See <a href="/compare/jwero-vs-quicksell">Jwero vs QuickSell</a>.</p>`;

const HOW = [
  ['Pick the pieces', 'From your stock with filters, or ask AI to suggest them.'],
  ['Set how it works', 'Orders, enquiries or browse; prices shown, hidden or on request; private and an end date if you like.'],
  ['Share it', 'On WhatsApp to chosen customers, as a QR, or on your own domain.'],
  ['Watch what happens', 'Every view, piece, wishlist and cart on each visitor’s timeline.'],
  ['Close it', 'Enquiries become quotations; orders are paid on the link.'],
];

const faqs = [
  { q: 'What is the best digital catalogue software for jewellers?', a: 'The best digital catalogue for jewellers prices each piece from your own pricing, hides prices when you want, keeps catalogues private, shows who viewed what, and lets customers enquire or pay on the link. Jwero Digital Catalogues does all of this on the same record as your stock and customers.' },
  { q: 'How do I make a WhatsApp catalogue for my jewellery shop?', a: 'In Jwero you pick pieces from your stock, or ask AI to suggest them, and send the catalogue link to chosen customers on WhatsApp through an approved template. The link opens with a preview of the catalogue.' },
  { q: 'Does a jewellery catalogue update with today’s gold rate?', a: 'Yes. Jwero catalogue prices come from your pricing engine and are worked out each time the catalogue opens, so customers see the price at today’s rate, not the rate on the day it was sent.' },
  { q: 'Is a digital catalogue better than a PDF for jewellery?', a: 'A PDF carries yesterday’s prices, can be forwarded anywhere and tells you nothing. A Jwero catalogue prices each piece when it opens, can be private with an end date, shows stock status, and records who viewed what.' },
  { q: 'Can I see who viewed my jewellery catalogue?', a: 'Jwero tracks views, piece clicks, wishlists, carts and checkouts, and shows a timeline for each visitor. Visitors verified by phone are matched to their customer record.' },
  { q: 'Which pieces in my catalogue are customers looking at?', a: 'Jwero shows views, wishlists and enquiries for each piece in each catalogue, with analytics and leaderboards, so you can follow up on pieces that were viewed but not asked about.' },
  { q: 'Can I hide prices in a jewellery catalogue?', a: 'Jwero catalogues can show prices, hide them, or show price on request, with optional weights and a metal, stone and making breakup.' },
  { q: 'Can a jewellery catalogue be private?', a: 'Jwero catalogues can be private for chosen customers, who open them by verifying their phone with a one-time code. You can also set an expiry date, after which the link closes.' },
  { q: 'Can a catalogue link expire?', a: 'Yes. A Jwero catalogue can carry an end date, which suits festival offers and private previews; after that date the link no longer opens.' },
  { q: 'Can customers order and pay from a jewellery catalogue?', a: 'Customers can order and pay online on a Jwero catalogue link, with GST and delivery worked out at checkout, or send an enquiry that your team turns into a quotation.' },
  { q: 'What is the best catalogue for jewellery wholesalers sending to retailers?', a: 'For wholesalers, Jwero catalogues run in enquiry mode with prices hidden or on request and stock status on each piece. Every enquiry becomes a task and then a quotation for the retailer.' },
  { q: 'Can I use a QR code catalogue at a jewellery exhibition?', a: 'Every Jwero catalogue has its own QR code. Visitors at your stall scan it to browse, and their wishlists, enquiries and orders reach your team.' },
  { q: 'Can my jewellery catalogue run on my own domain?', a: 'Jwero catalogues can be shared on your own domain, with your own design and templates.' },
  { q: 'Does a sold piece disappear from the catalogue?', a: 'Each piece in a Jwero catalogue shows whether it is in stock, made to order or out of stock when the catalogue opens, from the same stock the counter sells.' },
  { q: 'Am I alerted when a customer enquires or orders from a catalogue?', a: 'Jwero alerts your team on every enquiry and order from a catalogue, and creates a task for each enquiry.' },
  { q: 'Can AI make a jewellery catalogue?', a: 'Jwero’s AI suggests pieces from your stock from a plain request, such as 22K bridal necklaces under 4 lakh, and writes the catalogue’s title and description. You choose what goes in.' },
  { q: 'Is there a QuickSell alternative for jewellers?', a: 'Jwero Digital Catalogues is an alternative built for jewellery: prices from your pricing engine, stock from your counter, and visitors and orders on the same customer record. The Jwero vs QuickSell page sets out the comparison.' },
  { q: 'How much does digital catalogue software for jewellers cost?', a: 'Jwero starts with a free trial that includes every module, catalogues among them; your price is shown inside your account after the trial.' },
];

const catalogues = {
  slug: 'products/digital-catalogues',
  title: 'Digital Catalogues for Jewellers: Private Links, Tracked Views, Order on the Link | Jwero',
  description: 'Digital jewellery catalogues: pieces priced by your pricing engine, private links opened by OTP with expiry, prices hidden or on request, every view tracked per visitor, enquiries to quotations, and orders paid on the link.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Digital Catalogues', alternateName: ['Digital jewellery catalogue', 'Jewellery catalogue app', 'WhatsApp catalogue for jewellers'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Digital catalogues for jewellers: pick pieces or let AI suggest them, share on WhatsApp, by QR or on your own domain, keep them private by OTP with an expiry date, show prices or hide them, track every view per visitor, turn enquiries into quotations, and take orders and payments on the link.',
    audience: { '@type': 'BusinessAudience', audienceType: 'Jewellery retailers, wholesalers and brands' },
    featureList: 'Catalogue builder, templates, AI product suggestions, AI title and description, WhatsApp sharing, QR, custom domain, private by OTP, expiry, orders, enquiries or browse mode, price on request, price breakup, stock status, visitor timeline, analytics, enquiries to quotations, online payment',
    dateModified: '2026-10-10',
    url: 'https://jwero.ai/products/digital-catalogues', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to send a digital jewellery catalogue', step: HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Digital Catalogues'),
  faqs,
  body: `
${L.hero({
  eyebrow: 'Catalogues that sell, not PDFs that sit',
  h1: 'Send the catalogue. <span class="h1-turn">See every look, take the order.</span>',
  sub: 'Pieces picked from your stock, priced by your own pricing, private for the family you choose, and every view, wishlist and cart tracked until she enquires or pays on the link.',
  primary: { href: '#', label: 'Show me a catalogue for my customers', wa: 'catalog' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${prog()}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">What are Jwero Digital Catalogues?</h2><p>Jwero Digital Catalogues are shareable links of chosen pieces from your stock. Prices come from your pricing engine and can be shown, hidden or on request; catalogues can be private for chosen customers, opened by a one-time code, with an end date. Every view, wishlist and cart is tracked per visitor, enquiries become quotations, and customers can order and pay on the link.</p></div></section>

${L.section(`${L.sectionHead('', 'I run a…', '')}${icpBox()}`, { tone: 'tint', id: 'for-you' })}

${L.section(`${L.sectionHead('TRY IT', 'What does your customer see?', 'Switch the prices, open the breakup, press enquire.')}${sample()}`, { id: 'sample' })}

${L.section(`${L.sectionHead('ONE CATALOGUE', 'How does a catalogue turn into an order?', 'Six steps, from picking pieces to payment.')}${run()}`, { id: 'one-catalogue' })}

${L.section(`${L.sectionHead('AI', 'Can AI make a jewellery catalogue?', 'Type what you want. Press build.')}${aiBuild()}`, { tone: 'tint', id: 'ai' })}

${L.section(`${L.sectionHead('PDF OR LINK', 'The same piece, sent two ways.', '')}${pdfVs()}`, { id: 'vs' })}

${L.section(`${L.sectionHead('ONE SCREEN', 'What happens after you press send?', 'Six parts of one catalogue, lit as it works.')}${board()}`, { id: 'board' })}

${L.section(`${L.sectionHead('ON ITS OWN', 'What runs by itself, and what does your team decide?', '')}${fork()}`, { tone: 'tint', id: 'fork' })}

${L.section(`${L.sectionHead('WHAT YOU SEE', 'Who looked at what, and for how long?', 'Each visitor’s timeline, as your team sees it.')}${timeline()}`, { id: 'tracked-view' })}

${L.section(`${L.sectionHead('WHICH PIECES PULL', 'Which pieces are customers looking at?', 'Per piece, per catalogue.')}${stats()}`, { tone: 'tint', id: 'stats' })}

${L.section(`${L.sectionHead('PRIVATE', 'How does a private catalogue work?', 'Three screens.')}${privateLink()}`, { id: 'private-link' })}

${L.section(`${L.sectionHead('EXHIBITIONS', 'A QR at your stall.', '')}${qrBlock()}`, { tone: 'tint', id: 'qr' })}

${L.section(`${L.sectionHead('LEAKS CLOSED', 'What does a PDF catalogue cost you?', 'Nine places, closed.')}${leakCards()}`, { id: 'leaks' })}

${L.section(`${L.sectionHead('EVERYTHING IN IT', 'What can a jewellery catalogue do in Jwero?', 'Create, share, control, track and close.')}${modules()}`, { tone: 'tint', id: 'modules' })}

${L.section(`${L.sectionHead('JOURNEYS', 'Four real catalogues.', '')}${paths()}`, { id: 'journeys' })}

${L.section(`${L.sectionHead('COMPARE', 'PDFs and photos, a generic catalogue app, or Jwero.', '')}${dcFrom()}${cmpTable()}`, { tone: 'tint', id: 'compare' })}

${L.section(shareBand(), { id: 'share' })}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to send a digital jewellery catalogue.', 'Five steps.')}${L.steps(HOW.map(([title, text]) => ({ title, text })))}`)}

${L.section(`${L.sectionHead('READ MORE', 'Where catalogues connect.', '')}<div class="erp-map">${READS.map(([h, t]) => `<a href="${h}"><b>${t}</b></a>`).join('')}</div>`)}

${L.oneSystemBlock([
  'Catalogue pieces come from the same stock the counter sells, with their stock status.',
  'Prices come from the same pricing engine as the counter and the online store.',
  'A verified visitor, her wishlist and her order sit on the same customer record.',
])}

${L.section(`<p class="cta-note" style="text-align:center">Last updated 10 October 2026.</p>`)}

${L.ctaBand('Send a catalogue that sells.', 'Tell us who it is for. We will build a catalogue from your stock and show what happens after you send it.', 'catalog')}
`,
};

module.exports = [catalogues];
module.exports.heroPiece = () => meter();
