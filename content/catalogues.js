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
    <a href="#tracked" data-b="then"><span>With tracked links and ordering</span><i><em></em></i><b></b></a>
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
  ['A catalogue that expired on time', [['Diwali offer catalogue sent with an end date', 'h', 'calendar'], ['Customers view and order through the week', 'c', 'eye'], ['Orders paid online', 'c', 'coins'], ['On the end date the link closes', 'a', 'shield'], ['Analytics show which pieces sold', 'a', 'pie']]],
];
const paths = () => `<div class="ibx-jr" data-jr>
  <div class="ibx-jr-tabs" role="tablist">${PATHS.map(([t], i) => `<button type="button" role="tab" data-jr-tab="${i}" aria-selected="${i === 0}">${t}</button>`).join('')}</div>
  ${PATHS.map(([t, steps], i) => `<div class="ibx-jr-panel${i === 0 ? ' is-on' : ''}" role="tabpanel" data-jr-panel="${i}"><h3>${t}</h3><ol class="ibx-jr-path">${steps.map(([x, k, ic], j) => `<li class="${WHO[k][1]}" style="--j:${j}"><span class="ibx-jr-node">${icon(ic)}</span><em>${WHO[k][0]}</em><span>${x}</span></li>`).join('')}</ol></div>`).join('')}
  <p class="ibx-legend"><span class="is-c">Customer</span> <span class="is-ai">Jwero</span> on its own · <span class="is-human">Your team</span></p>
</div>`;

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
  { q: 'What is the best digital catalogue software for jewellers?', a: 'The best digital catalogue for jewellers prices pieces from your own pricing, hides prices when you want, keeps catalogues private, shows who viewed what, and lets customers enquire or order on the link. Jwero Digital Catalogues does all of this on the same record as your stock and customers.' },
  { q: 'How do I share a jewellery catalogue on WhatsApp?', a: 'In Jwero you pick the pieces and send the catalogue link to chosen customers on WhatsApp through an approved template, or share it as a QR or on your own domain.' },
  { q: 'Is a digital catalogue better than a PDF for jewellery?', a: 'A PDF carries yesterday’s prices, can be forwarded anywhere and tells you nothing. A Jwero catalogue prices each piece when it opens, can be private with an end date, shows stock status, and records who viewed what.' },
  { q: 'Can I see who viewed my jewellery catalogue?', a: 'Jwero tracks views, piece clicks, wishlists, carts and checkouts, and shows a timeline for each visitor; verified visitors are matched to the customer record.' },
  { q: 'Can I hide prices in a jewellery catalogue?', a: 'Jwero catalogues can show prices, hide them, or show “price on request”, with optional weights and a metal, stone and making breakup.' },
  { q: 'Can a jewellery catalogue be private?', a: 'Jwero catalogues can be private for chosen customers, who open them by verifying their phone with a one-time code, and can carry an expiry date.' },
  { q: 'Can customers order from a catalogue link?', a: 'Customers can order and pay online on a Jwero catalogue link, or send an enquiry that your team turns into a quotation.' },
  { q: 'Does a sold piece disappear from the catalogue?', a: 'Each piece in a Jwero catalogue shows whether it is in stock, made to order or out of stock when the catalogue opens.' },
  { q: 'Can AI make a jewellery catalogue?', a: 'Jwero’s AI suggests pieces from a plain request, such as “22K bridal necklaces under 4 lakh”, and writes the catalogue’s title and description.' },
  { q: 'Is there a QuickSell alternative for jewellers?', a: 'Jwero Digital Catalogues is an alternative built for jewellery: prices from your pricing engine, stock from your counter, and visitors and orders on the same customer record. The Jwero vs QuickSell page sets out the comparison.' },
  { q: 'How much does digital catalogue software for jewellers cost?', a: 'Jwero starts with a free trial that includes every module; your price is shown inside your account after the trial.' },
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

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">What are Jwero Digital Catalogues?</h2><p>Jwero Digital Catalogues are shareable links of chosen pieces from your stock. Prices come from your pricing engine and can be shown, hidden or on request; catalogues can be private for chosen customers, opened by a one-time code, with an end date. Every view, wishlist and cart is tracked per visitor, enquiries become quotations, and customers can order and pay on the link.</p></div></section>

${L.section(`${L.sectionHead('ONE CATALOGUE', 'How does a catalogue turn into an order?', 'Six steps, from picking pieces to payment.')}${run()}`, { id: 'one-catalogue' })}

${L.section(`${L.sectionHead('WHAT YOU SEE', 'Who looked at what, and for how long?', 'Each visitor’s timeline, as your team sees it.')}${timeline()}`, { tone: 'tint', id: 'tracked-view' })}

${L.section(`${L.sectionHead('LEAKS CLOSED', 'What does a PDF catalogue cost you?', 'Nine places, closed.')}${leakCards()}`, { id: 'leaks' })}

${L.section(`${L.sectionHead('EVERYTHING IN IT', 'What can a jewellery catalogue do in Jwero?', 'Create, share, control, track and close.')}${modules()}`, { tone: 'tint', id: 'modules' })}

${L.section(`${L.sectionHead('JOURNEYS', 'Three real catalogues.', '')}${paths()}`, { id: 'journeys' })}

${L.section(`${L.sectionHead('COMPARE', 'PDFs and photos, a generic catalogue app, or Jwero.', '')}${cmpTable()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to send a digital jewellery catalogue.', 'Five steps.')}${L.steps(HOW.map(([title, text]) => ({ title, text })))}`)}

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
