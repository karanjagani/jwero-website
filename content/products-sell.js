const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

// The WhatsApp page: what a jeweller searches for, in the order they decide.
// Facts confirmed by Jwero (2026-10-07): official WhatsApp Business Platform; native
// WhatsApp payments; voice AI agents for inbound and outbound calls.
const WA_STEPS = [
  ['ig', 'Instagram ad', 'She taps “Chat on WhatsApp” under your reel.'],
  ['in', 'Customer', 'Do you have this necklace in 22K? What is the price?'],
  ['cat', 'Jwero · catalogue', 'Three pieces from your stock, priced at today’s rate.'],
  ['rate', 'Rate update', 'Gold moved this morning. Prices in the chat updated with it.'],
  ['cart', 'Customer', 'Added the necklace to the cart.'],
  ['pay', 'WhatsApp payment', 'Paid inside WhatsApp. Order and invoice on her record.'],
  ['later', 'Next year', 'Anniversary reminder, drafted for your team to approve.'],
];
const waStory = () => `<div class="wa-story" data-wa-story>
  <div class="wa-phone" aria-hidden="true"><div class="wa-phone-bar"><span></span><b>Your jewellery shop</b><i>Official business account</i></div>
    <div class="wa-phone-body">${WA_STEPS.map(([k, who, txt], i) => `<div class="wa-msg wa-${k}" data-i="${i}"><small>${who}</small><p>${txt}</p>${k === 'cat' ? '<div class="wa-cards"><span>Necklace · 22K · 18.4 g</span><span>Jhumka · 22K · 9.2 g</span><span>Bangle · 22K · 21.0 g</span></div>' : ''}${k === 'pay' ? '<div class="wa-paid">Paid ✓</div>' : ''}</div>`).join('')}</div></div>
  <ol class="wa-steps">${WA_STEPS.map(([, who, txt], i) => `<li data-i="${i}"><b>${who}</b><span>${txt}</span></li>`).join('')}</ol>
</div>`;

const WA_COMPARE = [
  ['Official WhatsApp Business Platform (API)', 'No', 'Yes', 'Yes, on your own number'],
  ['Shared inbox for the whole team', 'One phone', 'Yes', 'Yes, with WhatsApp, Instagram and Facebook together'],
  ['Catalogue priced at today’s gold rate', 'No', 'No', 'Yes, prices follow the rate'],
  ['Cart and payment inside WhatsApp', 'No', 'Partly', 'Yes, native WhatsApp payments'],
  ['Knows the customer’s purchases and scheme balance', 'No', 'No', 'Yes, one record with billing and schemes'],
  ['Stock updates when a piece sells', 'No', 'No', 'Yes, same stock as the counter'],
  ['AI replies with your approval', 'No', 'Some', 'Yes, drafts wait for your team'],
  ['Triggered notifications (order, payment, ready, scheme due)', 'No', 'Some', 'Yes, from billing, repairs and schemes'],
  ['Campaigns to customer segments', 'Broadcast lists', 'Yes', 'Yes, by purchase, occasion and scheme'],
  ['Bulk AI calling, inbound and outbound', 'No', 'No', 'Yes, voice AI agents on the same record'],
  ['Forms for appointments and scheme enrolment', 'No', 'Some', 'Yes, WhatsApp Flows'],
];
const waTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>WhatsApp Business app</th><th>Generic API tools</th><th>Jwero</th></tr></thead><tbody>${WA_COMPARE.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>
<p class="cta-note" style="margin-top:12px">Generic API tools vary; see <a href="/compare/jwero-vs-wati">Jwero vs WATI</a>, <a href="/compare/jwero-vs-interakt">Interakt</a>, <a href="/compare/jwero-vs-doubletick">DoubleTick</a> and <a href="/compare/whatsapp-tools-vs-jewellery-os">WhatsApp tools vs a jewellery OS</a>.</p>`;

const WA_SETUP = [
  ['Check your number', 'We check whether your current WhatsApp number can move to the official platform, and whether it can keep the WhatsApp Business app alongside.'],
  ['Verify your business with Meta', 'Your business details are verified in Meta Business Manager. Jwero guides this step with you.'],
  ['Connect the number to Jwero', 'The number moves onto the WhatsApp Business Platform. Customers keep messaging the same number.'],
  ['Load your catalogue and templates', 'Your products, priced at today’s rate, and your approved message templates for reminders and offers.'],
  ['Switch on payments and the inbox', 'WhatsApp payments, the shared inbox for your team, and AI drafts that wait for approval.'],
];

const whatsappFaqs = [
  { q: 'What is the WhatsApp API?', a: 'The WhatsApp API, officially the WhatsApp Business Platform, is Meta’s version of WhatsApp for businesses that need more than one phone: a shared team inbox, approved templates for reminders and offers, broadcasts, catalogues, payments and integration with business software. It is used through a provider such as Jwero.' },
  { q: 'What is WhatsApp commerce for jewellers?', a: 'WhatsApp commerce means selling inside WhatsApp: the customer asks, sees pieces priced at today’s gold rate, adds them to a cart and pays without leaving the chat. For jewellers it also includes booking visits or video calls, scheme reminders and follow-ups on the same number.' },
  { q: 'Which is the best WhatsApp API for jewellers?', a: 'Look for the official WhatsApp Business Platform, a catalogue that follows the gold rate, payments inside WhatsApp, a team inbox, and a link to your billing, stock and customer records. Generic API tools cover messaging; Jwero covers the jewellery business behind it.' },
  { q: 'Can customers buy and pay inside WhatsApp?', a: 'Yes. Customers browse a catalogue priced at today’s rate, add pieces to a cart and pay with WhatsApp’s native payment experience, without leaving the chat. The order and invoice land on their customer record. For high-value pieces, the chat can book a visit or a video call instead.' },
  { q: 'Does Jwero use the official WhatsApp API?', a: 'Yes. Jwero connects your number to the official WhatsApp Business Platform. That is what makes templates, broadcasts, catalogues and payments work within Meta’s rules.' },
  { q: 'Will my number get banned?', a: 'Numbers get restricted for spam-like behaviour. Jwero uses the official platform, approved templates, recorded consent, limits on how often each customer is messaged, and instant opt-out, which is how numbers stay healthy.' },
  { q: 'Can I keep my existing WhatsApp number?', a: 'Yes. Your number moves onto the official platform and customers keep messaging the same number. We check first whether it can also keep the WhatsApp Business app alongside.' },
  { q: 'How much does WhatsApp API cost for a jewellery shop?', a: 'Two parts: Jwero One at ₹18,000 a month (first month ₹3,600) with every module, and Meta’s per-message fees for template messages, passed through at cost from a prepaid wallet. Replies inside a customer’s 24-hour window are not charged by Meta. See the WhatsApp pricing guide.' },
  { q: 'How is Jwero different from WATI, Interakt or DoubleTick?', a: 'Those tools send and receive messages. Jwero’s WhatsApp is part of the jewellery system: the catalogue follows the gold rate, payments and orders update stock and the customer record, and replies know purchases and scheme balances.' },
  { q: 'Does Jwero also handle phone calls?', a: 'Yes. Jwero’s voice AI agents answer inbound calls in bulk and run outbound AI calling campaigns in bulk, such as scheme reminders, follow-ups and event invitations, in the customer’s language, writing every call to the same customer record as WhatsApp.' },
  { q: 'Can WhatsApp messages send automatically when something happens?', a: 'Yes. Triggers send notifications when an order is confirmed, a payment arrives, a piece or repair is ready, or a scheme instalment is due. Campaigns go to segments you choose, by purchase, occasion or scheme.' },
  { q: 'What if Meta changes WhatsApp’s rules?', a: 'Your customers, catalogue and history live in Jwero, not inside the channel. Jwero follows rule changes and updates the platform; your data stays yours.' },
  { q: 'Will older customers really buy this way?', a: 'They already ask “rate kya hai?” on WhatsApp. Jwero makes sure those chats are answered fast, in their language, recorded, and closed.' },
  { q: 'Do I have to approve every AI reply?', a: 'At first, yes, in batches when it suits you. Once you trust a type of reply, you can let it send on its own. You set the pace.' },
];

const whatsapp = {
  slug: 'products/whatsapp',
  title: 'WhatsApp API for Jewellers: Catalogue, Payments and CRM | Jwero',
  description: 'WhatsApp API for jewellers on the official WhatsApp Business Platform: WhatsApp commerce with live-rate catalogues, native payments, a shared inbox, triggers, campaigns and bulk AI calling.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero WhatsApp API for Jewellers', alternateName: ['Jwero WhatsApp Commerce', 'WhatsApp API for jewellery business'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'WhatsApp commerce for jewellers on the official WhatsApp Business Platform: live-rate catalogues, native WhatsApp payments, a shared inbox with AI drafts under approval, triggered notifications, campaigns, broadcasts, WhatsApp Flows and bulk inbound and outbound voice AI calling on one customer record.',
    url: 'https://jwero.ai/products/whatsapp', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{
    '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to set up WhatsApp API for a jewellery shop',
    description: 'Move a jewellery shop’s WhatsApp number onto the official WhatsApp Business Platform with catalogue, payments and a shared inbox.',
    step: WA_SETUP.map(([n, t], i) => ({ '@type': 'HowToStep', position: i + 1, name: n, text: t })),
  }],
  breadcrumbs: BC('WhatsApp Commerce'),
  faqs: whatsappFaqs,
  body: `
${L.hero({
  eyebrow: 'WHATSAPP COMMERCE · OFFICIAL WHATSAPP BUSINESS PLATFORM',
  h1: 'WhatsApp API for jewellers: your counter, open 24 hours.',
  sub: 'Jewellery is bought on trust and conversation, which is why it is bought on WhatsApp. Jwero’s WhatsApp commerce turns your number, on the official WhatsApp API, into a full counter: a catalogue priced at today’s rate, native WhatsApp payments, replies within minutes from a team inbox, and voice AI for the calls.',
  primary: { href: '#', label: 'Send me a live catalogue', wa: 'whatsapp' },
  mock: L.mockChatCatalog,
})}

${L.section(`<div class="which-page"><p><b>Selling to one customer in a chat?</b> You are on the right page: WhatsApp commerce and API.</p><p><b>Reaching many customers</b> with broadcasts, festival campaigns and reminders? <a href="/whatsapp-broadcast-for-jewellers">See WhatsApp marketing →</a></p></div>`)}

${L.section(
  `${L.sectionHead('THE LEAK YOU CANNOT SEE', 'Every unanswered enquiry buys from someone else.', '')}
  ${L.cards([
    { title: 'The 11pm enquiry', text: 'She messages three jewellers at night. The one who answers first with a real price usually wins.' },
    { title: 'The personal-phone trap', text: 'Enquiries live on salespeople’s own phones. No history, no handover, and when they leave, the customers leave too.' },
    { title: 'The broadcast graveyard', text: 'Festival blasts from unofficial tools get numbers restricted and customers annoyed.' },
  ])}`
)}

${L.section(`${L.sectionHead('ONE CHAT, START TO FINISH', 'From an Instagram tap to a paid order.', 'What your customer sees, and what Jwero does at each step.')}${waStory()}`, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SIX JOBS, ONE NUMBER', 'WhatsApp commerce: everything a jewellery counter does, inside WhatsApp.', '')}
  <div class="wa-jobs">
    <article id="wa-catalogue"><h3>1. A catalogue at today’s rate</h3><p>Send several pieces in one message, straight from your stock, priced from today’s rate, purity and weight. When the rate moves, the prices move with it. No stale PDFs, no “price on request”.</p><a href="/products/catalog">Catalogues →</a></article>
    <article id="wa-payments"><h3>2. Order and pay without leaving the chat</h3><p>Customers add pieces to a cart and pay with WhatsApp’s native payment experience. The order, the invoice and the stock update land on the same record as a counter sale.</p><a href="/products/pos">Billing →</a></article>
    <article id="wa-forms"><h3>3. Forms inside WhatsApp</h3><p>WhatsApp Flows for booking a showroom visit or a video call, enrolling in a gold scheme, or asking for a custom design, filled in without leaving the chat.</p><a href="/products/gold-schemes">Schemes →</a></article>
    <article id="wa-broadcasts"><h3>4. Broadcasts that keep your number healthy</h3><p>Approved templates, recorded consent, limits on how often each customer hears from you, quiet hours and instant opt-out. Reach thousands for Akshaya Tritiya or Diwali without burning your number.</p><a href="/whatsapp-broadcast-for-jewellers">Broadcasts →</a></article>
    <article id="wa-auto"><h3>5. Triggers, notifications and campaigns</h3><p>Messages that send themselves when something happens: order confirmed, payment received, piece ready for collection, repair done, scheme instalment due, rate drop on a saved piece. Plus planned campaigns for festivals, launches and occasions, to segments you choose.</p><a href="/products/campaigns">Campaigns →</a></article>
    <article id="wa-inbox"><h3>6. One inbox, and AI calling in bulk</h3><p>WhatsApp, Instagram and Facebook in one team inbox, with AI drafts that wait for approval. Voice AI agents handle up to 8 calls at once, inbound and outbound, 24×7, at ₹7 a call, all inclusive: reminders, follow-ups and invitations, all on the same customer record.</p><a href="/ai-calling-for-jewellers">AI calling →</a></article>
  </div>`
)}

${L.section(`${L.sectionHead('COMPARE', 'WhatsApp Business app, generic API tools, or Jwero.', 'What a jeweller gets with each.')}${waTable()}`, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('WHAT YOU PAY', 'Two parts, both written down.', '')}
  <div class="jb-blogline"><p><b>Jwero One:</b> ₹18,000 a month with every module, first month ₹3,600. WhatsApp, payments, the inbox, AI drafts and voice AI are included in the platform.</p><p><b>Meta’s message fees:</b> Meta charges per template message (marketing, utility, authentication). Jwero passes these through at cost from a prepaid wallet you can see. Replies inside a customer’s 24-hour window are not charged by Meta. <a href="/blog/whatsapp-business-api-pricing">How WhatsApp pricing works →</a></p><p><b>Rather not run it yourself?</b> <a href="/jewellery-business-as-a-service">Let Jwero run WhatsApp for you</a>, with every tool included.</p></div>`
)}

${L.section(
  `${L.sectionHead('MOVING FROM THE WHATSAPP BUSINESS APP', 'How to set up WhatsApp API for a jewellery shop.', 'Five steps. Jwero does them with you, usually within a day of your Meta verification.')}
  ${L.steps(WA_SETUP.map(([title, text]) => ({ title, text })))}
  <p class="cta-note" style="margin-top:14px">Your chat history on the old app stays on that phone; your customers and their details come across into Jwero.</p>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('CUSTOMERS ABROAD', 'Selling to overseas and NRI customers on WhatsApp.', '')}
  <div class="jb-blogline"><p>Families in the Gulf, the UK, the US and Singapore buy from their hometown jeweller on WhatsApp, often for weddings back home. A video call from the chat, a catalogue priced at today’s rate, and payment in the chat make that sale as easy as one across the counter.</p></div>`
)}

${L.oneSystemBlock([
  'The AI reply knows her scheme balance because schemes and chat share one record.',
  'When she pays in the chat, the order, the invoice, the stock and her loyalty points update together.',
  'The anniversary reminder next year, and the voice call that follows it, read the same record this chat is writing now.',
])}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This is not a demo video. <a href="#" data-wa="whatsapp">Message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('Message us. Seriously.', 'The best demo of WhatsApp selling is a WhatsApp conversation. Send one message and watch it work.', 'whatsapp', { label: 'Send that first message' })}
`,
};

// Instagram & Facebook commerce, rebuilt 2026-10-07. Confirmed by Jwero: story
// replies, mentions and Messenger in the inbox; payment links inside a DM.
// Meta lead forms into the inbox not claimed (unconfirmed).
const IG_FLOW = [
  ['Reel', 'Your bridal reel gets 60 “price?” comments'],
  ['Comment to DM', 'Each one gets a DM automatically'],
  ['AI draft', 'Three pieces from her taste, priced at today’s rate'],
  ['Approved', 'Your team approves in one tap'],
  ['Video call', 'She asks to see it on video · booked from the DM'],
  ['Payment', 'Payment link sent inside the DM · paid'],
  ['Traced', 'The sale is traced to the reel · loyalty points added'],
];
const igFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">INSTAGRAM · DM TO SALE</p>${IG_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${IG_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const IG_CMP = [
  ['DMs, comments, story replies, mentions, Messenger', 'Across apps and phones', 'Most', 'All in one team inbox'],
  ['“Price?” comments', 'Missed in the flood', 'Manual', 'Turned into DMs automatically'],
  ['Replies with prices', 'Typed in, often stale', 'Templates', 'Pieces at today’s rate from your catalogue'],
  ['Knows the customer', 'No', 'Contact notes', 'Purchases, scheme, taste on one record'],
  ['Payment', 'Ask for bank transfer', 'Link out', 'Payment link inside the DM'],
  ['Instagram and Facebook shop', 'Uploaded by hand', 'Separate', 'Catalogue synced automatically'],
  ['What it sold', 'Guess', 'Response times', 'Sales traced to the post or ad'],
];
const igTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Replying from the Instagram app</th><th>A generic social inbox</th><th>Jwero</th></tr></thead><tbody>${IG_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>`;
const IG_HOW = [
  ['Connect your accounts', 'Your existing Instagram professional account and Facebook page, through Meta’s official connection.'],
  ['Bring everything into one inbox', 'DMs, comments, story replies, mentions and Messenger, shared by your team.'],
  ['Switch on comment-to-DM', '“Price?” and similar comments get a DM automatically.'],
  ['Let AI draft, your team approve', 'Replies from the customer record and today’s prices, approved in one tap.'],
  ['Close in the chat', 'Payment links inside the DM, video calls and visits booked, sales traced to the post.'],
];
const igFaqs = [
  { q: 'How do jewellers turn Instagram DMs into sales?', a: 'Answer every DM and comment fast with real prices, move interested customers to a video call, a visit or a payment link, and follow up the ones who go quiet. Jwero does this from one inbox, with replies drafted from the customer record and today’s rate.' },
  { q: 'Can Instagram DMs be automated without sounding robotic?', a: 'Yes, when the reply knows the customer. Jwero’s AI drafts from her purchases, scheme and taste, and your team approves each reply until you trust it to send on its own.' },
  { q: 'Are story replies, mentions and Messenger included?', a: 'Yes. Instagram DMs, comments, story replies and mentions, and Facebook Messenger all land in the same team inbox.' },
  { q: 'Can a customer pay from an Instagram DM?', a: 'Yes. Send a payment link inside the DM; the payment, the order and the invoice land on the customer’s record.' },
  { q: 'Can I sell through an Instagram and Facebook shop?', a: 'Yes. Your catalogue syncs to Meta automatically, with prices that follow today’s gold rate.' },
  { q: 'Do I need a new Instagram account?', a: 'No. Jwero connects to your existing professional account and Facebook page through Meta’s official connection.' },
  { q: 'Do I need someone dedicated to run this?', a: 'No. AI drafts the first reply and the follow-ups; your team approves in batches. Or let Jwero’s team run it for you.' },
];

const instagram = {
  slug: 'products/instagram-facebook',
  title: 'Instagram DM & Facebook Messenger Automation for Jewellers | Jwero',
  description: 'Instagram and Facebook commerce for jewellers: DMs, comments, story replies, mentions and Messenger in one inbox, price comments turned into DMs, AI replies at today’s rate, and payment links inside the DM.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Instagram & Facebook Commerce', alternateName: ['Instagram DM automation for jewellers', 'Facebook Messenger for jewellery shops'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Instagram and Facebook commerce for jewellers: DMs, comments, story replies, mentions and Messenger in one team inbox; comments turned into DMs automatically; AI replies from the customer record with prices at today’s rate, approved by your team; payment links inside the DM; catalogue synced to Instagram and Facebook shops; sales traced to posts and ads.',
    url: 'https://jwero.ai/products/instagram-facebook', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to turn Instagram DMs into sales for a jewellery shop', step: IG_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Instagram & Facebook'),
  faqs: igFaqs,
  body: `
${L.hero({
  eyebrow: 'INSTAGRAM & FACEBOOK COMMERCE',
  h1: 'Instagram and Facebook DMs into sales: every comment answered, every lead on record.',
  sub: 'DMs, comments, story replies, mentions and Messenger in one team inbox. “Price?” comments become DMs automatically, replies come with pieces at today’s rate, and customers pay from a link inside the DM.',
  primary: { href: '#', label: 'Show me my DMs turning into sales', wa: 'instagram' },
})}

${L.section(`${L.sectionHead('ONE REEL, START TO FINISH', 'From “price?” to paid, inside Instagram.', '')}${igFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE INBOX', 'What Instagram and Facebook commerce has to do for a jeweller.', '')}<div class="wa-jobs">
  <article><h3>1. Every message caught</h3><p>Instagram DMs, comments, story replies and mentions, and Facebook Messenger, in one inbox your whole team shares.</p><a href="/products/social-media">Social media →</a></article>
  <article><h3>2. “Price?” answered in seconds</h3><p>Price comments turned into DMs automatically, answered with pieces priced at today’s rate.</p><a href="/products/catalog">Live-rate catalogue →</a></article>
  <article><h3>3. Replies that know the customer</h3><p>AI drafts from her purchases, scheme and taste; your team approves, any hour, in one tap.</p><a href="/products/crm">Customer record →</a></article>
  <article><h3>4. Your shop on Instagram and Facebook</h3><p>Your catalogue synced to Meta automatically, with prices that follow the gold rate.</p><a href="/blog/selling-gold-jewellery-online-live-rate">Selling online at the live rate →</a></article>
  <article><h3>5. From DM to sale</h3><p>A payment link inside the DM, a video call or a visit booked, or a move to WhatsApp. Chats from click-to-WhatsApp ads land in the same inbox.</p><a href="/products/ads-manager">Ads →</a></article>
  <article><h3>6. Followers become customers</h3><p>Loyalty points for engagement, chats routed to the right branch, an AI call to follow up, and sales traced to the post or ad.</p><a href="/products/loyalty">Loyalty →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What slow replies cost you.', 'Your numbers, not ours.')}<div class="callc" data-igc>
  <div class="callc-in">
    <label>DMs and price comments a day<input type="number" inputmode="numeric" data-ig="dm" value="30" min="0"></label>
    <label>Answered after an hour or more, %<input type="number" inputmode="decimal" data-ig="slow" value="50" min="0" max="100"></label>
    <label>Of those, who would buy with a fast reply, %<input type="number" inputmode="decimal" data-ig="buy" value="3" min="0" max="100" step="0.5"></label>
    <label>Average bill, ₹<input type="number" inputmode="numeric" data-ig="bill" value="30000" min="0" step="1000"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Slow replies a month</span><b data-ig-o="slow">0</b></p>
    <p><span>Sales lost a month</span><b data-ig-o="lost">0</b></p>
    <p class="callc-save"><span>Revenue lost a month</span><b data-ig-o="rev">₹0</b></p>
    <p class="cta-note">A planning estimate from your own inputs.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'The Instagram app, a generic social inbox, or Jwero.', '')}${igTable()}`)}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to turn Instagram DMs into sales for a jewellery shop.', 'Five steps.')}${L.steps(IG_HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.oneSystemBlock([
  'A DM, a WhatsApp chat and a counter visit from the same person are one customer record.',
  'Prices in a DM come from the same catalogue and rate as the counter.',
  'The sale is traced back to the reel, post or ad that started the conversation.',
])}

${L.ctaBand('Stop losing the DMs you paid for.', 'Show us last week’s DMs. We will show how many would have become sales.', 'instagram')}
`,
};

// AI sales agents, rebuilt 2026-10-07. Confirmed by Jwero: 14 languages across
// chat, voice and calls; telephony provider kept generic. "240+ actions" not
// repeated here (unconfirmed as current). Video selling lives on /products/meetings.
const AI_FLOW = [
  ['11:04 pm', 'A WhatsApp message: “Light bridal necklace, under 3 lakh?”'],
  ['AI reply', 'Three pieces at today’s rate, from her taste and past purchases'],
  ['Quiet', 'No reply by morning · a follow-up is drafted'],
  ['Approved', 'Your manager approves in one tap'],
  ['AI call', 'Next day, an AI call in Hindi · a visit booked for Saturday'],
  ['Walk-in', 'She arrives; your salesperson already knows what she liked'],
];
const aiFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">AI SALES AGENT · 11PM TO WALK-IN</p>${AI_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${AI_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const AI_CMP = [
  ['After hours', 'Waits for morning', 'Canned menu', 'Answers with real pieces and prices'],
  ['Prices', 'Typed by hand', 'None or fixed', 'Today’s rate, from your catalogue'],
  ['Knows the customer', 'Your memory', 'No', 'Purchases, scheme and taste on her record'],
  ['Follow-ups', 'When someone remembers', 'No', 'Drafted on schedule'],
  ['Voice and calls', 'No', 'No', 'AI voice on WhatsApp, web chat and phone, in 14 languages'],
  ['Control', 'n/a', 'Runs as built', 'Approvals, daily caps, kill switch, full log'],
  ['Channels', 'WhatsApp only', 'One channel', 'WhatsApp, Instagram, web chat and phone'],
];
const aiTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>WhatsApp Business app</th><th>A generic chatbot</th><th>Jwero</th></tr></thead><tbody>${AI_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;
const AI_HOW = [
  ['Pick a duty', 'Start with one: the night shift, follow-ups or scheme reminders.'],
  ['Give it your knowledge', 'Your catalogue, prices, policies and the answers you give every day.'],
  ['Start in Assist mode', 'It drafts; your team approves every message.'],
  ['Set the limits', 'Daily caps, what it may never do, and a kill switch.'],
  ['Promote it', 'When it earns your trust, let chosen actions run on their own, with every action logged.'],
];
const aiFaqs = [
  { q: 'What is an AI chatbot for jewellers?', a: 'An assistant that answers customers on WhatsApp, Instagram and your website with real pieces at today’s rate, follows up, and books visits. Jwero’s also speaks and calls, in 14 languages, under your approval.' },
  { q: 'What is an AI sales agent in Jwero?', a: 'A member of the AI workforce with a set of allowed actions, a knowledge base, limits, an approval workflow and an activity log. It drafts replies, follow-ups, reminders and invitations within the limits you set.' },
  { q: 'Does it speak Hindi and other languages?', a: 'Yes. Chat, voice and phone calls run in 14 languages, including Hindi, Gujarati, Marathi, Tamil, Telugu, Bengali and English.' },
  { q: 'Can the AI make phone calls?', a: 'Yes. AI voice is built into WhatsApp and web chat, and phone calls and IVR run over your telephony provider, with transcripts on the customer record.' },
  { q: 'Does it share products and prices?', a: 'Yes. Replies include pieces from your catalogue at today’s rate, chosen from her taste and past purchases.' },
  { q: 'Will this replace my sales staff?', a: 'No. The AI does the remembering and the follow-up; your people do the selling, and every customer walks in already known.' },
  { q: 'Can it give a discount without me knowing?', a: 'No. Prices and discounts follow your price rules and staff permissions. The AI drafts messages; it does not set prices.' },
  { q: 'How do I know what the AI did?', a: 'Every action is logged: what, when, why, and who approved it.' },
  { q: 'Which AI agents come ready?', a: 'Twelve agent teams: Revenue, Sales, Seller, Marketing, Growth, CX, Operations, Inventory, Finance, Reporting, HR, and Payroll and Settlement. Most ask for approval by default.' },
  { q: 'Can staff talk to Jwero instead of clicking?', a: 'Yes. An in-app assistant takes spoken or typed instructions, including Hindi and Hinglish phrases, and a staff voice assistant wakes on a wake word.' },
  { q: 'Does AI read call transcripts?', a: 'Yes. After a call, AI reads the transcript, notes how interested the customer was, and updates her scores.' },
];
const aiAgents = {
  slug: 'products/ai-sales-agents',
  title: 'AI for Jewellers: AI Chatbot, Sales Agents & Voice AI | Jwero',
  description: 'AI chatbot and voice AI for jewellers: answers on WhatsApp, Instagram and web chat with pieces at today’s rate, follows up and calls back in 14 languages, 24/7, under your approvals, daily caps and kill switch.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero AI Sales Agents & Voice', alternateName: ['AI chatbot for jewellers', 'WhatsApp chatbot for jewellery shops', 'Voice AI for jewellers'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'AI sales agents for jewellers that answer on WhatsApp, Instagram and web chat with pieces at today’s rate, follow up, remind and call back in 14 languages, with AI voice on WhatsApp and web chat and phone calls over the jeweller’s telephony provider, inside approval queues, daily caps and a kill switch.',
    url: 'https://jwero.ai/products/ai-sales-agents', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to start with an AI sales agent in a jewellery shop', step: AI_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('AI Sales Agents & Voice'),
  faqs: aiFaqs,
  body: `
${L.hero({
  eyebrow: 'AI CHATBOT · AI SALES AGENTS · VOICE AI',
  h1: 'AI chatbot and voice AI for jewellers: answers, follows up and calls back, 24/7, with your approval.',
  sub: 'AI staff that reply on WhatsApp, Instagram and your website with real pieces at today’s rate, chase every quiet enquiry, and call customers in 14 languages. Every action waits for your approval until you decide it may run alone.',
  primary: { href: '#', label: 'Show me an AI draft waiting for approval', wa: 'aiagents' },
  secondary: { href: '/platform/ai-workforce', label: 'How governance works' },
  mock: L.mockApproval,
})}

${L.section(`${L.sectionHead('ONE ENQUIRY, START TO FINISH', 'From an 11pm message to a known customer at the counter.', '')}${aiFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE AI WORKFORCE', 'What you can hire AI for in a jewellery shop.', '')}<div class="wa-jobs">
  <article><h3>1. The night shift</h3><p>Enquiries on WhatsApp, Instagram and web chat answered at any hour, with pieces at today’s rate.</p><a href="/products/whatsapp">WhatsApp →</a></article>
  <article><h3>2. Follow-ups</h3><p>Every quiet chat, open quotation and abandoned enquiry chased on schedule.</p><a href="/products/quotations">Quotations →</a></article>
  <article><h3>3. Scheme collections</h3><p>Instalment reminders by message and AI call, politely and on time.</p><a href="/products/gold-schemes">Gold schemes →</a></article>
  <article><h3>4. Occasions</h3><p>Birthdays, anniversaries and festival invitations, proposed weeks ahead for your approval.</p><a href="/products/journeys">Journeys →</a></article>
  <article><h3>5. Voice in 14 languages</h3><p>AI voice on WhatsApp and web chat, and phone calls and IVR over your telephony provider, transcribed onto her record.</p><a href="/ai-calling-for-jewellers">AI calling →</a></article>
  <article><h3>6. You stay in charge</h3><p>Approvals, daily caps, a kill switch, and a log of every action and who approved it.</p><a href="/platform/ai-workforce">AI governance →</a></article>
</div>`)}

${L.governanceStrip()}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What answering late costs you.', 'Your numbers, not ours.')}<div class="callc" data-aic>
  <div class="callc-in">
    <label>Enquiries a month after hours or unanswered for an hour<input type="number" inputmode="numeric" data-ai="n" value="300" min="0"></label>
    <label>Who would buy with a fast, priced reply, %<input type="number" inputmode="decimal" data-ai="buy" value="3" min="0" max="100" step="0.5"></label>
    <label>Average bill, ₹<input type="number" inputmode="numeric" data-ai="bill" value="40000" min="0" step="1000"></label>
    <label>Monthly salary of a night or follow-up hire, ₹<input type="number" inputmode="numeric" data-ai="sal" value="18000" min="0" step="1000"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Sales lost a month</span><b data-ai-o="lost">0</b></p>
    <p class="callc-save"><span>Revenue lost a month</span><b data-ai-o="rev">₹0</b></p>
    <p><span>A hire to cover it, a year</span><b data-ai-o="hire">₹0</b></p>
    <p class="cta-note">A planning estimate from your own inputs. AI use is charged from the wallet; see <a href="/pricing" style="color:#fff">pricing</a>.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'The WhatsApp Business app, a generic chatbot, or Jwero.', '')}${aiTable()}`)}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to start with an AI sales agent.', 'Five steps, at your pace.')}${L.steps(AI_HOW.map(([title, text]) => ({ title, text })))}<p class="cta-note" style="margin-top:14px">Want customers to see a piece on video? See <a href="/products/meetings">video calls and appointments</a>.</p>`, { tone: 'tint' })}

${L.oneSystemBlock([
  'The AI reads the same customer record your team does: purchases, scheme, taste and every past chat.',
  'Prices in its replies come from the same catalogue and rate as the counter.',
  'Every action it takes is logged, with who approved it.',
])}

${L.ctaBand('Hire staff that scale like software.', 'Start with one agent in Assist mode: drafts only, approvals on. Promote it when it earns your trust.', 'aiagents')}
`,
};

// Optimize, rebuilt 2026-10-07. Confirmed by Jwero: the pixel works on any
// website; session recordings mask sensitive fields; events go to the Meta pixel
// and Google Analytics. Not claimed: iPhone web push, SEO audits or speed checks.
const OP_FLOW = [
  ['Traffic', '1,200 visitors from a Diwali ad'],
  ['Heatmap', '70% never scroll past the banner'],
  ['A/B test', 'Price breakup moved up · the new version wins'],
  ['Exit popup', 'A leaving visitor sees the festive offer'],
  ['AI webchat', '“Is this hallmarked?” answered from your catalogue'],
  ['Lead', 'She leaves her number · on her customer record'],
  ['Follow-up', 'A WhatsApp follow-up drafted for approval'],
];
const opFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">WEBSITE · VISIT TO LEAD</p>${OP_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${OP_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const OP_CMP = [
  ['Tools to install', 'Four or five scripts', 'One pixel'],
  ['Analytics and funnels', 'Google Analytics', 'Built in, and sent to Google Analytics'],
  ['Heatmaps and recordings', 'Hotjar or Clarity', 'Built in, with sensitive fields masked'],
  ['A/B tests and personalisation', 'VWO or similar', 'Built in, by segment, scheme or loyalty'],
  ['Popups and lead forms', 'A popup plugin', 'Visual editor'],
  ['Chat', 'A chat widget', 'AI webchat in the same inbox as WhatsApp'],
  ['Who the visitor is', 'Anonymous in each tool', 'One customer record'],
  ['Ads', 'Pixel set up separately', 'Events sent to the Meta pixel'],
];
const opTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Separate tools</th><th>Jwero Optimize</th></tr></thead><tbody>${OP_CMP.map(([r, a, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;
const OP_HOW = [
  ['Add one pixel', 'On any website: Jwero, Shopify, WooCommerce, WordPress or custom.'],
  ['Define your funnel', 'Product view, enquiry, cart, order; see where people drop out.'],
  ['Watch the heatmaps', 'Find what visitors miss, with recordings to see why.'],
  ['Test the fix', 'A/B test the page or offer, and keep the winner.'],
  ['Catch who is leaving', 'Exit popups, lead forms and AI webchat turn visits into leads.'],
];
const opFaqs = [
  { q: 'What is website analytics for jewellers?', a: 'Seeing who visits your website, what they look at, and where they leave, so you can fix it. Jwero Optimize adds heatmaps, recordings, A/B tests, popups and AI webchat, with every lead on the customer record.' },
  { q: 'Does it work on my existing website?', a: 'Yes. One pixel works on any website, including Shopify, WooCommerce, WordPress, custom sites and the Jwero ecommerce website.' },
  { q: 'Do I still need Hotjar, VWO or a chat widget?', a: 'No. Heatmaps, recordings, A/B tests, popups, web push and AI webchat come with the one pixel, and a visitor who becomes a lead is the same record as on WhatsApp.' },
  { q: 'Does it work with Google Analytics and the Meta pixel?', a: 'Yes. Optimize sends visitor details and events to Google Analytics and the Meta pixel, so ads can optimise for people who enquire or buy.' },
  { q: 'Are session recordings private?', a: 'Sensitive fields are masked in recordings, consent settings are built in, and tracking only runs on domains you approve.' },
  { q: 'How do I A/B test my jewellery website?', a: 'Create two versions of a page or popup, split visitors between them, and keep the one that brings more enquiries or orders.' },
  { q: 'Can the AI answer webchat questions?', a: 'Yes. AIVA answers from your catalogue and knowledge base, and hands the chat to a person when needed.' },
  { q: 'Can I run ads from here?', a: 'Ads run from <a href="/products/ads-manager">Ads Manager</a>; Optimize shows what visitors from those ads did.' },
];
const optimize = {
  slug: 'products/optimize',
  title: 'Website Analytics, Heatmaps & Live Chat for Jewellery Websites | Jwero',
  description: 'Website analytics and conversion tools for jewellers: heatmaps, masked session recordings, A/B tests, popups, AI webchat and web push from one pixel on any website, with events sent to Google Analytics and the Meta pixel.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Optimize', alternateName: ['Website analytics for jewellers', 'Heatmaps for jewellery websites', 'Live chat for jewellery websites'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Website conversion tools for jewellers from one pixel on any website: visitor analytics and funnels, heatmaps, session recordings with sensitive fields masked, A/B tests, personalisation, popups and lead forms, web push and an AI webchat, with events sent to Google Analytics and the Meta pixel and every lead on the customer record.',
    url: 'https://jwero.ai/products/optimize', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to increase conversions on a jewellery website', step: OP_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Optimize'),
  faqs: opFaqs,
  body: `
${L.hero({
  eyebrow: 'OPTIMIZE · WEBSITE ANALYTICS',
  h1: 'Website analytics for jewellers: see why visitors leave, and turn them into leads.',
  sub: 'One pixel on any website gives you heatmaps, recordings, A/B tests, popups and an AI webchat. Every visitor who leaves a number becomes a customer record, in the same inbox as WhatsApp.',
  primary: { href: '#', label: 'Show me why visitors leave', wa: 'optimize' },
  secondary: { href: '/jewellery-website-analytics', label: 'Website analytics guide' },
})}

${L.section(`${L.sectionHead('ONE CAMPAIGN, START TO FINISH', 'From an ad click to a lead on WhatsApp.', '')}${opFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE PIXEL', 'What a jewellery website needs to convert.', '')}<div class="wa-jobs">
  <article><h3>1. Know your visitors</h3><p>Traffic, returning visitors, location, goals and funnels from product view to order.</p><a href="/products/reports">Reports →</a></article>
  <article><h3>2. See what they do</h3><p>Heatmaps and session recordings, with sensitive fields masked.</p><a href="/trust/security">Privacy →</a></article>
  <article><h3>3. Test what works</h3><p>A/B tests and personalisation by behaviour, segment, scheme or loyalty membership.</p><a href="/products/segmentation">Segments →</a></article>
  <article><h3>4. Catch them leaving</h3><p>Exit popups, lead forms and polls built in a visual editor, plus web push.</p><a href="/products/journeys">Journeys →</a></article>
  <article><h3>5. Answer them live</h3><p>AI webchat from your catalogue, handed to your team when needed, in the same inbox as WhatsApp.</p><a href="/products/ai-sales-agents">AI agents →</a></article>
  <article><h3>6. Feed your ads</h3><p>Events sent to Google Analytics and the Meta pixel, so ads find people who enquire and buy.</p><a href="/products/ads-manager">Ads →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What a better conversion rate is worth.', 'Your numbers, not ours.')}<div class="callc" data-opc>
  <div class="callc-in">
    <label>Website visitors a month<input type="number" inputmode="numeric" data-op="v" value="10000" min="0" step="500"></label>
    <label>Who enquire or buy today, %<input type="number" inputmode="decimal" data-op="now" value="0.5" min="0" max="100" step="0.1"></label>
    <label>Who could, after fixes, %<input type="number" inputmode="decimal" data-op="next" value="1" min="0" max="100" step="0.1"></label>
    <label>Of those enquiries, who buy, %<input type="number" inputmode="decimal" data-op="buy" value="20" min="0" max="100"></label>
    <label>Average order, ₹<input type="number" inputmode="numeric" data-op="bill" value="40000" min="0" step="1000"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Extra leads a month</span><b data-op-o="leads">0</b></p>
    <p><span>Extra sales a month</span><b data-op-o="sales">0</b></p>
    <p class="callc-save"><span>Extra revenue a month</span><b data-op-o="rev">₹0</b></p>
    <p class="cta-note">A planning estimate from your own inputs.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'Separate tools, or one pixel.', '')}${opTable()}`)}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to increase conversions on a jewellery website.', 'Five steps.')}${L.steps(OP_HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.oneSystemBlock([
  'A lead from a popup or webchat is a customer record at once, with no export.',
  'Personalisation can use scheme and loyalty membership from the same record as WhatsApp and billing.',
  'The visitor in an A/B test and the customer who buys are the same record, start to finish.',
])}

${L.ctaBand('See where your own visitors drop off.', 'One pixel on your existing website turns on analytics, heatmaps, tests, popups and webchat together.', 'optimize')}
`,
};

// Ecommerce website (was "storefront"), rebuilt 2026-10-07. Confirmed by Jwero:
// OTP sign-in over WhatsApp, SMS or email; custom domain included; try-at-home
// and appointment booking; price breakup of metal, making, stones and GST.
// Mobile apps and named marketplaces not claimed here (unconfirmed for this page).
const EC_FLOW = [
  ['Gold rate', 'Today’s 22K rate moves up ₹60 a gram'],
  ['Repriced', 'Every product on the website updates · no one edits a price'],
  ['Found', 'She finds a necklace on Google · price matches the site'],
  ['Breakup', 'Metal, making charges, stones and GST shown line by line'],
  ['Sign-in', 'WhatsApp OTP · no password'],
  ['Order', 'Paid online, or try-at-home booked'],
  ['Stock', 'Showroom stock drops · the order lands on her record'],
];
const ecFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">ECOMMERCE WEBSITE · RATE TO ORDER</p>${EC_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${EC_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const EC_CMP = [
  ['Prices when gold moves', 'Edited by hand', 'Edited by hand or a paid plugin', 'Every product repriced automatically'],
  ['Price breakup', 'None', 'Custom work', 'Metal, making charges, stones and GST'],
  ['Stock', 'Not shown', 'Separate from the showroom', 'Same stock as your POS'],
  ['Sign-in', 'None', 'Password', 'OTP over WhatsApp, SMS or email'],
  ['Try-at-home and appointments', 'Contact form', 'Apps to add', 'Built in, on her record'],
  ['Google Shopping and Meta', 'No', 'Feeds to set up', 'Synced automatically'],
  ['Customer and orders', 'Email inbox', 'A separate system', 'One record with WhatsApp, CRM and billing'],
  ['Upkeep', 'Your developer', 'Plugins, updates, hosting', 'Run and updated by Jwero'],
];
const ecTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>A brochure website</th><th>Shopify or WooCommerce</th><th>Jwero</th></tr></thead><tbody>${EC_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;
const EC_HOW = [
  ['Bring in your catalogue', 'Your products, weights, purity, stones and making charges, the same catalogue your counter sells from.'],
  ['Pick a theme and connect your domain', 'A jewellery-styled theme, your colours and logo, on your own domain.'],
  ['Set your pricing rules', 'Today’s rate, making charges and GST; every price follows the rate from then on.'],
  ['Switch on what you sell', 'Online payment, try-at-home, appointments and gold scheme enrolment.'],
  ['Go live everywhere', 'Products sync to Google Shopping and Meta; orders land on the customer record.'],
];
const ecFaqs = [
  { q: 'What is a jewellery ecommerce website?', a: 'A website where customers browse, price and buy jewellery online. For a jeweller it has to do more than a normal store: follow the gold rate, show the price breakup, and match the showroom stock. Jwero’s ecommerce website does all three.' },
  { q: 'Do I need Shopify or WooCommerce to sell jewellery online?', a: 'No. Jwero includes a complete ecommerce website with catalogue, cart, wishlist, checkout and payments. If you already run Shopify or WooCommerce, you can keep it and connect it instead.' },
  { q: 'Do prices update when the gold rate changes?', a: 'Yes. Every product reprices automatically from today’s rate, with metal, making charges, stones and GST shown line by line.' },
  { q: 'Can I use my own domain?', a: 'Yes. A custom domain is included, with your brand, colours and logo on jewellery-styled themes.' },
  { q: 'Can customers book try-at-home or a showroom appointment?', a: 'Yes. Both are booked from the website and land on the customer’s record for your team.' },
  { q: 'Do customers need a password?', a: 'No. They sign in with an OTP over WhatsApp, SMS or email.' },
  { q: 'Can customers search by photo?', a: 'Yes. A shopper uploads a photo of a piece she likes and sees matching products from your catalogue.' },
  { q: 'Does the website recommend pieces?', a: 'Yes. Signed-in shoppers see pieces picked for them from what they browsed and bought.' },
  { q: 'Will the website help me rank on Google?', a: 'It gives you what ranking needs: product pages, a blog, landing pages and customer reviews, and products synced to Google Shopping automatically.' },
  { q: 'Who looks after hosting, updates and security?', a: 'Jwero. There are no plugins to update or servers to manage, and customers sign in without passwords.' },
];
const storefront = {
  slug: 'products/ecommerce',
  title: 'Jewellery Ecommerce Website Builder with Live Gold Rate | Jwero',
  description: 'A jewellery ecommerce website that reprices at today’s gold rate, shows metal, making, stones and GST, matches showroom stock, takes payments, try-at-home and appointments, on your own domain.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Ecommerce Website', alternateName: ['Jewellery ecommerce website builder', 'Jewellery website builder', 'Online jewellery store software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A jewellery ecommerce website: prices that follow today’s gold rate with a metal, making charges, stones and GST breakup; stock shared with the POS; OTP sign-in over WhatsApp, SMS or email; payments, try-at-home and appointment booking; custom domain; Google Shopping and Meta sync; on the same customer record as every Jwero module.',
    url: 'https://jwero.ai/products/ecommerce', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to build a jewellery ecommerce website', step: EC_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Ecommerce Website'),
  faqs: ecFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY ECOMMERCE WEBSITE',
  h1: 'A jewellery ecommerce website that prices itself at today’s gold rate.',
  sub: 'Your own online jewellery store on your own domain. Every price follows the rate with metal, making charges, stones and GST shown, stock matches the showroom, and customers pay, book try-at-home or an appointment.',
  primary: { href: '#', label: 'Send me a live-priced website link', wa: 'storefront' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(`${L.sectionHead('ONE RATE CHANGE, START TO FINISH', 'From the gold rate to an order, with no one editing a price.', '')}${ecFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE WEBSITE', 'What a jewellery ecommerce website has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Prices at today’s rate</h3><p>Every product repriced from the gold rate, with metal, making charges, stones and GST shown line by line.</p><a href="/platform/pricing-engine">Pricing engine →</a></article>
  <article><h3>2. Stock that matches the showroom</h3><p>The same catalogue and stock as your POS, so the website never sells a piece already sold at the counter.</p><a href="/products/inventory">Inventory →</a></article>
  <article><h3>3. Easy to buy</h3><p>Search by photo, cart, wishlist, compare and checkout with online payment; sign-in by OTP over WhatsApp, SMS or email.</p><a href="/products/whatsapp">WhatsApp →</a></article>
  <article><h3>4. Try-at-home and appointments</h3><p>Booked from the website, on her record, on the list your team already works from.</p><a href="/products/crm">Customer record →</a></article>
  <article><h3>5. Found on Google and Instagram</h3><p>Product pages, blog, reviews and landing pages; products synced to Google Shopping and Meta automatically.</p><a href="/products/catalog">Catalogue sync →</a></article>
  <article><h3>6. Your brand, your domain</h3><p>Jewellery-styled themes and page templates, your colours and logo, on your own domain. Gold scheme enrolment online too.</p><a href="/products/gold-schemes">Gold schemes →</a></article>
</div>`)}

${L.section(`${L.sectionHead('BUILT TO PERFORM', 'Fast, secure, and ready to grow.', 'What you get without a developer, plugins or a hosting bill.')}${L.cards([
  { title: 'Speed', text: 'Pages built for phones, where most jewellery shoppers browse, so a slow site does not lose the sale.' },
  { title: 'Security', text: 'OTP sign-in with no passwords to leak, and hosting and updates handled by Jwero, with no third-party plugins to patch.' },
  { title: 'Scalability', text: 'From one showroom to many branches, a few products to thousands, on the same catalogue and stock.' },
  { title: 'Customisability', text: 'Themes, page templates, festive and gift-guide layouts, your colours, logo and domain.' },
  { title: 'SEO', text: 'Product pages, a blog, landing pages and reviews to rank on, with products synced to Google Shopping.' },
  { title: 'One system', text: 'Orders, customers, stock and payments on the same record as your counter, WhatsApp and CRM.' },
])}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'What re-pricing by hand costs you.', 'Your numbers, not ours.')}<div class="callc" data-ecc>
  <div class="callc-in">
    <label>Products on your website<input type="number" inputmode="numeric" data-ec="n" value="500" min="0"></label>
    <label>Rate changes you update for, a month<input type="number" inputmode="numeric" data-ec="ch" value="20" min="0"></label>
    <label>Minutes to re-price one product<input type="number" inputmode="decimal" data-ec="min" value="1" min="0" step="0.5"></label>
    <label>Staff cost an hour, ₹<input type="number" inputmode="numeric" data-ec="cost" value="200" min="0" step="50"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Hours re-pricing a month</span><b data-ec-o="hrs">0</b></p>
    <p class="callc-save"><span>Cost a month</span><b data-ec-o="cost">₹0</b></p>
    <p class="cta-note">On Jwero, prices follow the rate on their own. A planning estimate from your own inputs.</p>
  </div>
</div>`)}

${L.section(`${L.sectionHead('COMPARE', 'A brochure website, Shopify or WooCommerce, or Jwero.', '')}${ecTable()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to build a jewellery ecommerce website.', 'Five steps.')}${L.steps(EC_HOW.map(([title, text]) => ({ title, text })))}`)}

${L.oneSystemBlock([
  'An order on the website writes to the same customer record your WhatsApp replies and billing already update.',
  'The website sells from the same catalogue, stock and rate as the counter.',
  'A wishlist saved on the website is there when she messages you on WhatsApp.',
])}

${L.ctaBand('Take your showroom online.', 'Your catalogue, priced at today’s rate, on your own domain.', 'storefront')}
`,
};

// Ads manager, rebuilt 2026-10-07. Confirmed by Jwero: click-to-WhatsApp ads, sales
// reported back to the platforms, AI video creatives. Pinterest still rolling out.
const AD_FLOW = [
  ['Audience', 'From the segment “bridal buyers, last 2 years” and people like them'],
  ['Creatives', 'AI makes three images and a short video from your catalogue photos'],
  ['Approved', 'You approve the plan and the budget cap'],
  ['Published', 'Live on Meta: Instagram and Facebook'],
  ['Click to WhatsApp', 'Each click opens a chat in your team inbox'],
  ['Priced reply', 'The chat gets pieces at today’s rate · visit booked'],
  ['Bill', 'She buys at the counter · ₹1,40,000'],
  ['Reported back', 'The sale is sent to Meta, so it finds more buyers like her'],
];
const adFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">AD · BRIDAL SEASON</p>${AD_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${AD_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const ADS_CMP = [
  ['Meta and Google from one place', 'The agency’s logins', 'Two ad managers', 'Yes, plus Pinterest rolling out'],
  ['Click-to-WhatsApp ads into a team inbox', 'Chats on someone’s phone', 'Chats on one phone', 'Yes, answered with prices at today’s rate'],
  ['Audiences from your own customers', 'Rarely', 'Uploaded lists', 'Segments, with ads generated for them'],
  ['Creatives', 'Agency fee', 'You make them', 'AI images, copy and short video'],
  ['Budget control', 'Monthly report', 'You watch it', 'Approval, caps, alerts and one switch to stop'],
  ['Sales from the counter sent back to the platforms', 'No', 'Manual uploads', 'Yes, automatically'],
  ['Return on spend', 'Clicks and leads', 'Clicks', 'Rupees of bills per rupee spent'],
];
const adsTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>An agency</th><th>Doing it in Meta and Google</th><th>Jwero ads manager</th></tr></thead><tbody>${ADS_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>`;
const ADS_HOW = [
  ['Connect your ad accounts', 'Your own Meta and Google accounts stay yours; Jwero connects to them.'],
  ['Pick the audience', 'A segment from your customers, or people like them.'],
  ['Let AI make the creatives', 'Images, copy and short video from your catalogue photos; edit what you like.'],
  ['Set the budget and approve', 'A cap per campaign and per day; nothing publishes until you approve.'],
  ['Watch what it sold', 'Chats, visits and bills, with sales sent back to Meta and Google automatically.'],
];
const adsFaqs = [
  { q: 'What is the best way to advertise a jewellery shop?', a: 'Ads that start a conversation usually work best for jewellery: click-to-WhatsApp ads on Instagram and Facebook, Google Search for people looking for a jeweller nearby, and Google Shopping with prices that follow the gold rate. Target your own customers and people like them, and judge ads by the bills they produce.' },
  { q: 'Do click-to-WhatsApp ads work for jewellers?', a: 'They suit jewellery well, because customers want to ask about a piece and a price before visiting. Jwero runs them so each click becomes a chat in your team inbox, answered with pieces priced at today’s rate.' },
  { q: 'How do jewellers measure return on ad spend?', a: 'By tracing ads to chats, visits and bills, not clicks. Jwero reports the rupees of sales per rupee spent and sends counter and online sales back to Meta and Google, so the platforms find more real buyers.' },
  { q: 'Should I use an agency or run ads myself?', a: 'Run them yourself in Jwero, with AI making the creatives and your budget capped, or let Jwero’s team run them for you. Either way the ads, chats and sales stay on your own records.' },
  { q: 'How much should a jeweller spend on ads?', a: 'Start small, with a daily cap, on one audience and one ad type, measure the bills it brings, and increase only what pays. There is no right number without your own results.' },
  { q: 'Which ad platforms does Jwero cover?', a: 'Meta (Instagram and Facebook, including Advantage+ and lead forms) and Google (Search, Performance Max and Shopping), published directly once you approve. Pinterest publishing is rolling out.' },
  { q: 'Can AI make jewellery ad creatives?', a: 'Yes. AI makes images, ad copy and short video clips from your catalogue photos; you edit and approve them before they run.' },
  { q: 'Can the AI spend my budget without me knowing?', a: 'No. Nothing publishes without your approval, every campaign has a cap, you get alerts as spend grows, and one switch stops it all.' },
  { q: 'Does this replace my existing ad accounts?', a: 'No. Your Meta and Google accounts stay yours; Jwero connects to them.' },
];

const adsManager = {
  slug: 'products/ads-manager',
  title: 'Jewellery Ads Manager: Meta, Google, Click-to-WhatsApp | Jwero',
  description: 'Jewellery ads manager: Meta and Google ads from one place, click-to-WhatsApp ads into your team inbox, audiences from your customers, AI image and video creatives, budget caps, and sales reported back.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Jewellery Ads Manager', alternateName: ['Jewellery ads software', 'Meta and Google ads for jewellers'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Ads for jewellers: Meta and Google campaigns published from one place with Pinterest rolling out; click-to-WhatsApp ads into a team inbox; audiences and ads generated from customer segments; AI image, copy and video creatives; approvals, caps, alerts and autopilot within limits; counter and online sales reported back to the platforms; return on spend in rupees of bills.',
    url: 'https://jwero.ai/products/ads-manager', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to run ads for a jewellery shop', step: ADS_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Ads manager'),
  faqs: adsFaqs,
  body: `
${L.hero({
  eyebrow: 'JEWELLERY ADS MANAGER · META · GOOGLE',
  h1: 'Jewellery ads manager: ads that start WhatsApp chats, and show what they sold.',
  sub: 'Meta and Google ads from one place. Click-to-WhatsApp ads land in your team inbox and are answered at today’s rate, audiences come from your own customers, AI makes the images and video, your budget is capped, and every sale is reported back so the platforms find more buyers.',
  primary: { href: '#', label: 'Plan my first ad with us', wa: 'ads' },
})}

${L.section(`${L.sectionHead('ONE AD, START TO FINISH', 'From an audience to a bill, and back to Meta.', '')}${adFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE ADS MANAGER', 'What jewellery ads software has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Meta and Google, one place</h3><p>Plan, approve and publish to Instagram, Facebook, Google Search, Performance Max and Shopping. Pinterest is rolling out.</p><a href="/products/catalog">Google Shopping feed →</a></article>
  <article><h3>2. Ads that start a WhatsApp chat</h3><p>Click-to-WhatsApp ads open a chat in your team inbox, answered with pieces priced at today’s rate, and followed up until a visit or a bill.</p><a href="/products/whatsapp">WhatsApp API for jewellers →</a></article>
  <article><h3>3. Audiences from your customers</h3><p>Segments such as bridal buyers or quiet customers become audiences, with people like them, and ads are generated for each.</p><a href="/products/segmentation">Segments →</a></article>
  <article><h3>4. Creatives made for you</h3><p>AI makes images, copy and short video clips from your catalogue photos. You edit and approve.</p><a href="/products/social-media">Social media →</a></article>
  <article><h3>5. Your budget, protected</h3><p>Approval before anything publishes, caps per campaign and day, alerts as spend grows, autopilot only within your limits, and one switch to stop.</p><a href="/platform/ai-workforce">AI governance →</a></article>
  <article><h3>6. What the ads actually sold</h3><p>Chats, visits and bills traced to each ad, return on spend in rupees, and sales reported back to Meta and Google automatically.</p><a href="/products/reports">Reports →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'The real return on your ad spend.', 'Your numbers, not ours.')}<div class="callc" data-adc>
  <div class="callc-in">
    <label>Ad spend a month, ₹<input type="number" inputmode="numeric" data-ad="spend" value="50000" min="0" step="5000"></label>
    <label>WhatsApp chats per ₹1,000<input type="number" inputmode="decimal" data-ad="chats" value="3" min="0" step="0.5"></label>
    <label>Chats that visit, %<input type="number" inputmode="decimal" data-ad="visit" value="15" min="0" max="100"></label>
    <label>Visitors who buy, %<input type="number" inputmode="decimal" data-ad="buy" value="35" min="0" max="100"></label>
    <label>Average bill, ₹<input type="number" inputmode="numeric" data-ad="bill" value="45000" min="0" step="1000"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>WhatsApp chats</span><b data-ad-o="chats">0</b></p>
    <p><span>Customers who buy</span><b data-ad-o="buyers">0</b></p>
    <p><span>Sales from the ads</span><b data-ad-o="sales">₹0</b></p>
    <p class="callc-save"><span>Sales per ₹1 spent</span><b data-ad-o="roas">0</b></p>
    <p class="cta-note">A planning estimate from your own inputs. Results depend on your market, offer and creatives.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'An agency, doing it yourself, or Jwero.', '')}${adsTable()}`)}

${L.section(`${L.sectionHead('YOUR FIRST AD', 'How to run ads for a jewellery shop.', 'Five steps.')}${L.steps(ADS_HOW.map(([title, text]) => ({ title, text })))}<p class="cta-note" style="margin-top:14px">More: <a href="/ads-for-jewellers">Google and Instagram ads for jewellers</a> · <a href="/google-ads-for-jewellery-stores">Google Ads for jewellery stores</a> · <a href="/facebook-ads-for-jewellery-stores">Facebook ads for jewellery stores</a></p>`, { tone: 'tint' })}

${L.oneSystemBlock([
  'The audience an ad reaches is the same segment your WhatsApp campaign and journeys use.',
  'A chat from an ad lands on the customer’s record, so the sale at the counter is traced back to the ad.',
  'Sales reported back to Meta and Google teach the platforms who your real buyers are.',
])}

${L.ctaBand('Run ads without losing sight of the budget.', 'Tell us your budget and who you want to reach. We will show the plan and the creatives.', 'ads')}
`,
};

// Social media management, rebuilt 2026-10-07. Confirmed by Jwero: AI video for
// posts; direct publishing to Instagram, Facebook, YouTube, Pinterest, LinkedIn,
// X, Threads and Google Business; comments turned into DMs automatically.
const SOC_FLOW = [
  ['Planned', 'Diwali reel on the festival calendar, three weeks ahead'],
  ['Made by AI', 'A short video from your catalogue photos, caption and hashtags in English and Hindi'],
  ['Scheduled', 'Instagram, Facebook and YouTube Shorts, Friday 7 pm'],
  ['Comments', '84 comments in one inbox · AI drafts replies for approval'],
  ['Price?', '“Price?” comments turned into DMs automatically'],
  ['Reply', 'Pieces priced at today’s rate · moved to WhatsApp'],
  ['Loyalty', 'Followers who commented earn loyalty points'],
  ['Visit', 'Visits booked from the reel · traced to the post'],
];
const socFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">POST · DIWALI REEL</p>${SOC_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${SOC_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const SOC_CMP = [
  ['Content', 'Designer or agency', 'You make it', 'AI captions, hashtags, images and video'],
  ['Publishing', 'One app per platform', 'Scheduler', 'Instagram, Facebook, YouTube, Pinterest, LinkedIn, X, Threads, Google Business'],
  ['Comments and DMs', 'One phone', 'Shared inbox', 'One inbox, AI drafts for approval'],
  ['“Price?” comments', 'Missed', 'Manual', 'Turned into DMs automatically'],
  ['Prices in replies', 'Typed in', 'Typed in', 'Today’s rate, from the catalogue'],
  ['Followers into customers', 'No', 'No', 'Loyalty points for engagement, WhatsApp, visits'],
  ['What a post sold', 'Likes', 'Reach', 'Chats, visits and sales traced to the post'],
];
const socTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Posting by hand</th><th>A generic scheduler</th><th>Jwero</th></tr></thead><tbody>${SOC_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-go">${c}</td></tr>`).join('')}</tbody></table></div>`;
const SOC_HOW = [
  ['Connect your accounts', 'Instagram, Facebook, YouTube, Pinterest, LinkedIn, X, Threads and Google Business.'],
  ['Fill the calendar', 'Festivals, launches and weekly posts, drafted ahead.'],
  ['Let AI make the content', 'Captions, hashtags, images and short video from your catalogue; edit what you like.'],
  ['Approve and schedule', 'One composer publishes to every platform at the time you choose.'],
  ['Answer and convert', 'Comments and DMs in one inbox; price questions become DMs and then WhatsApp chats.'],
];
const socFaqs = [
  { q: 'What is social media management for jewellers?', a: 'Planning, creating, scheduling and publishing posts across Instagram, Facebook, YouTube and other platforms, and answering every comment and DM, so followers become customers. Jwero does all of it in one place, with AI making the content and drafting replies for approval.' },
  { q: 'Which platforms can Jwero publish to?', a: 'Instagram, Facebook, YouTube, Pinterest, LinkedIn, X, Threads and Google Business, from one composer and one calendar.' },
  { q: 'Can AI make jewellery posts and reels?', a: 'Yes. AI makes captions, hashtags, images and short videos from your catalogue photos, in English and 13 other languages. Your team edits and approves before anything is published.' },
  { q: 'How often should a jeweller post?', a: 'Consistency matters more than volume: a few good posts a week, more around festivals and launches. A calendar planned ahead keeps it steady.' },
  { q: 'What happens when someone comments “price?”', a: 'The comment is turned into a DM automatically, answered with pieces priced at today’s rate, and moved to WhatsApp if the customer wants.' },
  { q: 'Does the AI reply to comments and DMs on its own?', a: 'It drafts replies that wait for your team’s approval. Once you trust a type of reply, you can let it send on its own.' },
  { q: 'Can followers earn loyalty points?', a: 'Yes. Comments, follows, likes and shares can earn loyalty points, matched to the customer’s record.' },
  { q: 'How is this different from Instagram & Facebook commerce?', a: 'This page is about planning, making and publishing posts and keeping one inbox. Instagram & Facebook commerce is about turning DMs and comments into sales.' },
  { q: 'Can I see what my posts achieve?', a: 'Yes. Reach and engagement per post and platform, plus the chats, visits and sales each post started.' },
];

const socialMedia = {
  slug: 'products/social-media',
  title: 'Social Media Management for Jewellers: Schedule, AI, Inbox | Jwero',
  description: 'Social media management for jewellers: AI captions, images and video, one calendar publishing to Instagram, Facebook, YouTube, Pinterest, LinkedIn, X, Threads and Google Business, and one inbox for comments and DMs.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Social Media Management for Jewellers', alternateName: ['Social media scheduler for jewellers', 'Jewellery social media software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Social media for jewellers: festival content calendar; AI captions, hashtags, images and short video; one composer publishing to Instagram, Facebook, YouTube, Pinterest, LinkedIn, X, Threads and Google Business; one inbox for comments and DMs with AI drafts for approval; comments turned into DMs automatically; loyalty points for engagement; results traced to chats and sales.',
    url: 'https://jwero.ai/products/social-media', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to run social media for a jewellery shop', step: SOC_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Social media'),
  faqs: socFaqs,
  body: `
${L.hero({
  eyebrow: 'SOCIAL MEDIA MANAGEMENT FOR JEWELLERS',
  h1: 'Social media management for jewellers: every platform, one calendar, one inbox.',
  sub: 'AI makes the captions, images and reels from your catalogue. One composer publishes to Instagram, Facebook, YouTube, Pinterest, LinkedIn, X, Threads and Google Business. Every comment and DM lands in one inbox, “price?” comments become DMs, and followers earn loyalty points.',
  primary: { href: '#', label: 'Show me a month of posts for my shop', wa: 'social' },
})}

${L.section(`<div class="which-page"><p><b>Planning, making and publishing posts,</b> and one inbox for comments? You are on the right page.</p><p><b>Turning DMs and comments into sales?</b> <a href="/products/instagram-facebook">Instagram & Facebook commerce →</a> · Reading up first? <a href="/instagram-for-jewellers">Instagram for jewellers →</a></p></div>`)}

${L.section(`${L.sectionHead('ONE REEL, START TO FINISH', 'From the calendar to a visit.', '')}${socFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE CALENDAR', 'What social media management for a jeweller has to do.', '')}<div class="wa-jobs">
  <article><h3>1. Plan the festival calendar</h3><p>Akshaya Tritiya, Diwali, wedding season, launches and weekly posts, drafted weeks ahead.</p><a href="/products/campaigns">Campaigns →</a></article>
  <article><h3>2. Content made for you</h3><p>AI captions and hashtags in English and 13 other languages, images and short videos from your catalogue photos, for posts and reels.</p><a href="/products/catalog">Catalogue →</a></article>
  <article><h3>3. One composer, every platform</h3><p>Schedule and publish to Instagram, Facebook, YouTube, Pinterest, LinkedIn, X, Threads and Google Business.</p><a href="/instagram-for-jewellers">Instagram for jewellers →</a></article>
  <article><h3>4. One inbox for every comment and DM</h3><p>AI drafts replies for your team’s approval; “price?” comments are turned into DMs automatically.</p><a href="/products/instagram-facebook">Instagram & Facebook commerce →</a></article>
  <article><h3>5. Followers into customers</h3><p>Loyalty points for comments, follows, likes and shares, price replies at today’s rate, and a move to WhatsApp.</p><a href="/products/loyalty">Loyalty →</a></article>
  <article><h3>6. See what works</h3><p>Reach and engagement by post and platform, plus the chats, visits and sales each post started.</p><a href="/products/reports">Reports →</a></article>
</div>`)}

${L.section(`${L.sectionHead('THE ARITHMETIC', 'The hours social media takes today.', 'Your numbers, not ours.')}<div class="callc" data-socc>
  <div class="callc-in">
    <label>Posts and reels a week<input type="number" inputmode="numeric" data-sc="posts" value="5" min="0"></label>
    <label>Minutes to make and post each, by hand<input type="number" inputmode="numeric" data-sc="pm" value="60" min="0"></label>
    <label>Comments and DMs a day<input type="number" inputmode="numeric" data-sc="cm" value="40" min="0"></label>
    <label>Minutes per reply, by hand<input type="number" inputmode="decimal" data-sc="rm" value="2" min="0" step="0.5"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>Hours a month on posts</span><b data-sc-o="ph">0</b></p>
    <p><span>Hours a month on replies</span><b data-sc-o="rh">0</b></p>
    <p class="callc-save"><span>Hours a month, by hand</span><b data-sc-o="tot">0</b></p>
    <p class="cta-note">With AI making content and drafting replies, your team reviews instead of creating from scratch. An estimate from your inputs.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'Posting by hand, a generic scheduler, or Jwero.', '')}${socTable()}`)}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to run social media for a jewellery shop.', 'Five steps.')}${L.steps(SOC_HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.oneSystemBlock([
  'A comment, a DM and a WhatsApp chat from the same person land on one customer record.',
  'Posts use the same catalogue and prices as the website and the counter.',
  'Engagement earns loyalty points the customer can use at the counter.',
])}

${L.ctaBand('One inbox for every comment and DM.', 'Tell us your platforms. We will show a month of posts and replies in Jwero.', 'social')}
`,
};

module.exports = [whatsapp, instagram, aiAgents, optimize, storefront, adsManager, socialMedia];
