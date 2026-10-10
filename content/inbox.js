// One Inbox (2026-10-10): one page in place of WhatsApp Commerce & API, WhatsApp
// Marketing, Instagram & Facebook, Business Email and AI Sales Agents & Voice,
// plus the channels that had no page of their own (webchat, Threads, WhatsApp
// calls). Every capability here was read from the product. The old
// addresses redirect to the matching section of this page (build.js MOVED).
const L = require('../lib');
const { icon } = L;
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

// ---- every channel, and what lands from it
const CHANNELS = [
  ['whatsapp', 'chat', 'WhatsApp API', 'Your own number on the official WhatsApp Business Platform. Messages, catalogue, carts, payments and forms, with the whole team on one number.', ['Messages and voice notes', 'Catalogue at today’s rate', 'Cart and payment in the chat', 'Forms for visits and gold plans']],
  ['whatsapp-marketing', 'megaphone', 'WhatsApp Marketing', 'Broadcasts and festival campaigns to the right customers, on approved templates, with every reply landing back in the inbox.', ['Campaigns to live segments', 'Templates tracked through Meta approval', 'Click-to-WhatsApp ads, traced to the sale', 'Consent, frequency limits and number health']],
  ['calls', 'phone', 'WhatsApp Calls', 'Voice calls on the same WhatsApp number, in and out, answered by your team or by the AI voice agent, with the recording and transcript on her record.', ['Inbound and outbound calls', 'AI voice agent in her language', 'Transfer to a person mid-call', 'Missed calls followed up']],
  ['instagram-facebook', 'camera', 'Instagram & Facebook', 'DMs, Messenger, comments, story replies and mentions. A “price?” under a reel becomes a private conversation with a priced answer.', ['Instagram DMs and Messenger', 'Comments answered, publicly or in private', 'Story replies and mentions', 'Lead forms from Meta ads']],
  ['email', 'mail', 'Email', 'care@ and orders@ on your own domain, threaded on the customer record beside her WhatsApp, with labels, drafts and shared mailboxes.', ['Your own domain', 'Threads on the customer record', 'Replies from the same inbox', 'Order and review emails']],
  ['webchat', 'chat', 'Webchat', 'A chat on every page of your website. Visitors ask, AI answers from your catalogue, and a named customer continues on WhatsApp.', ['On your website and store', 'AI answers at any hour', 'Voice and call from the browser', 'Product questions from the store']],
  ['threads', 'share', 'Threads, X, YouTube and LinkedIn', 'Replies and comments on your posts, and X messages, answered from one place instead of four apps.', ['Threads replies', 'X messages and replies', 'YouTube and LinkedIn comments', 'Google reviews answered']],
  ['ai-agent', 'bot', 'AI Agent, chat and voice', 'An agent that answers in chat and on calls from your catalogue, today’s rate and her record, follows up on its own, and hands over to a person with the full story.', ['Replies in chat, on its own', 'Answers and makes calls', 'Knows your stock, prices and policies', 'Hands over when a person is needed']],
];
const inboxChannels = () => `<div class="ibx-ch">${CHANNELS.map(([id, ic, t, d, pts]) => `<article id="${id}"><div class="cap-ico">${icon(ic)}</div><h3>${t}</h3><p>${d}</p><ul>${pts.map((p) => `<li>${p}</li>`).join('')}</ul></article>`).join('')}</div>`;

// ---- the hub picture: channels in, one inbox, two ways out
const HUB_IN = [['chat', 'WhatsApp'], ['phone', 'WhatsApp calls'], ['camera', 'Instagram'], ['users', 'Facebook'], ['mail', 'Email'], ['chat', 'Webchat'], ['share', 'Threads and X'], ['megaphone', 'Ads and lead forms'], ['store', 'Your online store']];
const inboxHub = () => `
<figure class="ibx-hub" data-gfx aria-label="Every channel lands in one inbox; each conversation is answered by AI or routed to a person">
  <ul class="ibx-in">${HUB_IN.map(([ic, t], i) => `<li style="--i:${i}">${icon(ic)}<span>${t}</span></li>`).join('')}</ul>
  <div class="ibx-mid"><div class="ibx-core">${L.mark('mark-band')}<b>One Inbox</b><em>One customer record</em></div></div>
  <div class="ibx-out">
    <div class="is-ai"><p class="ibx-k">${icon('bot')}Answered automatically</p><p>Price questions, catalogue shares, reminders, follow-ups, order updates and calls, at any hour, inside the limits you set.</p></div>
    <div class="is-human"><p class="ibx-k">${icon('users')}Routed to a person</p><p>A bridal enquiry, a complaint, a discount request or anything you choose reaches the right salesperson with the whole story.</p></div>
  </div>
</figure>`;

// ---- what happens to one message
const RUN = [
  ['It arrives', 'A message, a comment, a call or a form, on any channel, at any hour.', 'chat'],
  ['She is recognised', 'Matched to her record: purchases, gold plan, what she browsed, what she asked last time.', 'record'],
  ['AI answers, or routes', 'A priced reply from your stock, or a hand-over to the right person by the rules you set.', 'bot'],
  ['A person steps in', 'Your salesperson opens the thread with the summary, her history and a suggested reply.', 'users'],
  ['It is on the record', 'The conversation, the outcome and the next follow-up, for the counter and the next campaign.', 'book'],
];
const inboxRun = () => `<ol class="airun" data-gfx>${RUN.map(([t, d, ic], i) => `<li style="--i:${i}"><span class="airun-n">${icon(ic)}<b>${i + 1}</b></span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>`;

// ---- every use case. a = AI on its own, h = a person, b = AI first, then a person
const USES = [
  ['target', 'Enquiries and leads', [
    ['“Price?” on WhatsApp at midnight, answered at today’s rate', 'a'],
    ['A photo of a design, matched to pieces in your stock', 'a'],
    ['Click-to-WhatsApp ad replies, with the ad on her record', 'a'],
    ['Lead forms from Meta ads and listings, contacted the same hour', 'a'],
    ['A website visitor’s chat turned into a named lead', 'a'],
    ['A bridal or high-value enquiry sent to your senior salesperson', 'b'],
    ['An unanswered enquiry flagged before it goes cold', 'a'],
  ]],
  ['wallet', 'Selling in the chat', [
    ['Catalogue shared with pieces picked for her taste and budget', 'a'],
    ['Cart built and paid inside WhatsApp', 'a'],
    ['Payment link sent in the conversation', 'b'],
    ['A piece held for her visit, and the visit booked', 'a'],
    ['Quotation follow-up when she goes quiet', 'a'],
    ['Negotiation and discounts beyond your limit', 'h'],
    ['Video call from the chat to show the piece', 'h'],
  ]],
  ['megaphone', 'Marketing that starts conversations', [
    ['Festival and wedding-season broadcasts to the right segment', 'a'],
    ['New collection launch, with replies handled as they come', 'a'],
    ['Comment “price” on a reel, answered in a private message', 'a'],
    ['Story replies and mentions picked up as leads', 'a'],
    ['Birthday, anniversary and occasion wishes', 'a'],
    ['Win-back for customers who have gone quiet', 'a'],
    ['Abandoned cart on your store, followed up on WhatsApp', 'a'],
  ]],
  ['coins', 'Gold plans, payments and reminders', [
    ['Instalment due reminders, with a payment link', 'a'],
    ['A missed instalment followed up by an AI call', 'a'],
    ['Plan maturity: invitation to choose her piece', 'a'],
    ['Payment received, receipt sent', 'a'],
    ['Old gold and exchange questions', 'b'],
    ['Girvi interest due and renewal reminders', 'a'],
  ]],
  ['tools', 'Orders, repairs and after-sales', [
    ['Order confirmed, shipped, out for delivery, delivered', 'a'],
    ['“Is my piece ready?” answered from the order record', 'a'],
    ['Repair ready for collection', 'a'],
    ['Certificate, invoice or bill sent again on request', 'a'],
    ['Return and exchange requests', 'b'],
    ['A complaint, sent straight to the owner or manager', 'h'],
    ['Review request after delivery, and reviews answered', 'a'],
  ]],
  ['phone', 'Calls', [
    ['Inbound calls answered by the AI voice agent', 'a'],
    ['A missed call followed up on WhatsApp', 'a'],
    ['Outbound reminder and invitation calls, in her language', 'a'],
    ['A call handed to a person, mid-conversation', 'b'],
    ['Every call recorded, transcribed and summarised', 'a'],
  ]],
  ['users', 'Trade and wholesale', [
    ['A retailer’s catalogue request, with his own prices', 'a'],
    ['Memo and dues reminders to buyers', 'a'],
    ['Reorder prompts when a buyer’s stock should be running low', 'a'],
    ['Vendor and karigar messages kept on their accounts', 'h'],
    ['WhatsApp group messages brought into the same inbox', 'h'],
  ]],
  ['shield', 'Team and control', [
    ['Conversations shared out evenly, by workload or by your rules', 'a'],
    ['A reply-time target on every thread, with an alert before it slips', 'a'],
    ['Notes and mentions between staff, unseen by the customer', 'h'],
    ['A summary of a long thread before anyone replies', 'a'],
    ['Opt-outs honoured on every channel at once', 'a'],
    ['One switch that pauses the AI, for a customer or for everyone', 'h'],
  ]],
];
const TAG = { a: ['AI', 'is-a'], h: ['Person', 'is-h'], b: ['AI, then a person', 'is-b'] };
const inboxUses = () => `<div class="ibx-uses">${USES.map(([ic, t, items]) => `<article><h3>${icon(ic)}${t}</h3><ul>${items.map(([x, k]) => `<li><span>${x}</span><em class="${TAG[k][1]}">${TAG[k][0]}</em></li>`).join('')}</ul></article>`).join('')}</div>
<p class="ibx-legend"><em class="is-a">AI</em> handled on its own <em class="is-b">AI, then a person</em> AI starts, a person finishes <em class="is-h">Person</em> routed to your team. You choose which is which.</p>`;
const USE_COUNT = USES.reduce((n, g) => n + g[2].length, 0);

// ---- journeys that cross channels. [step, who]
const PATHS = [
  ['From an ad to an anniversary', [['Taps “Chat on WhatsApp” under your reel', 'c'], ['AI shares three pieces at today’s rate', 'a'], ['Adds one to the cart and pays in the chat', 'c'], ['Order, invoice and stock updated', 'a'], ['A year on: an anniversary message', 'a']]],
  ['From a comment to the counter', [['Comments “price?” on Instagram', 'c'], ['Answered in a private message', 'a'], ['Asks to see it; a showroom visit is booked', 'a'], ['Routed to the branch salesperson', 'h'], ['She walks in; the counter knows the piece', 'h']]],
  ['A missed call at 9 pm', [['Calls after closing', 'c'], ['A WhatsApp follow-up within the minute', 'a'], ['Asks for a call back', 'c'], ['AI voice agent calls in her language', 'a'], ['Wants to negotiate: handed to the owner', 'h']]],
  ['A website visitor becomes a customer', [['Asks about a ring in the website chat', 'c'], ['AI answers and takes her number', 'a'], ['The lead goes to a salesperson with what she viewed', 'h'], ['Quotation sent on WhatsApp', 'h'], ['She goes quiet: a follow-up, then the order', 'a']]],
  ['A gold plan instalment, missed', [['Instalment due: a reminder with a payment link', 'a'], ['No reply in three days: an AI call', 'a'], ['She asks to change her date', 'c'], ['Routed to the scheme desk', 'h'], ['Paid; receipt and passbook updated', 'a']]],
  ['A complaint, caught early', [['Emails that a stone is loose', 'c'], ['Recognised as a complaint; the AI stays out', 'a'], ['Goes straight to the manager with her purchase history', 'h'], ['Repair booked and tracked', 'h'], ['Collected; a review request a week later', 'a']]],
];
const WHO = { c: ['Customer', 'is-c'], a: ['AI', 'is-a'], h: ['Person', 'is-h'] };
const inboxPaths = () => `<div class="ibx-paths">${PATHS.map(([t, steps]) => `<article><h3>${t}</h3><ol>${steps.map(([s, k]) => `<li class="${WHO[k][1]}"><em>${WHO[k][0]}</em><span>${s}</span></li>`).join('')}</ol></article>`).join('')}</div>`;

const CMP = [
  ['Where conversations live', 'Five apps and a shop phone', 'One inbox, one thread history per customer'],
  ['Who answers at 11 pm', 'Nobody until morning', 'AI, with a priced reply from your stock'],
  ['What the person replying knows', 'Only this chat', 'Her purchases, gold plan, visits and what she browsed'],
  ['Prices quoted in chat', 'Typed from memory', 'At today’s rate, the same as the counter'],
  ['When a salesperson leaves', 'The chats leave with the phone', 'Every conversation stays with the business'],
  ['Follow-up', 'If someone remembers', 'On schedule, on the channel she uses'],
  ['Campaigns', 'A broadcast list', 'Segments from real purchases, with consent and limits'],
  ['Calls', 'A separate phone, no record', 'On the same thread, recorded and summarised'],
];
const cmpTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Separate apps</th><th>One Inbox</th></tr></thead><tbody>${CMP.map(([r, a, b]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td class="wa-cmp-us">${b}</td></tr>`).join('')}</tbody></table></div>`;

const HOW = [
  ['Connect your channels', 'Your WhatsApp number, Instagram and Facebook pages, your email domain and your website chat. Customers keep using the same number and handles.'],
  ['Bring your customers and catalogue', 'So every conversation opens with her record, and every price comes from today’s rate.'],
  ['Set who gets what', 'Which conversations AI answers on its own, which go to a person, and how they are shared across your team and branches.'],
  ['Load templates and campaigns', 'Reminders, order updates and festival messages, on templates approved by Meta.'],
  ['Go live, and watch the first week', 'Reply times, what AI handled, what reached your team, and which conversations became sales.'],
];

const faqs = [
  { q: 'What is One Inbox?', a: 'One place for every conversation a jewellery business has: WhatsApp messages and calls, Instagram and Facebook, email, website chat, and replies on Threads, X, YouTube and LinkedIn. Each lands on the customer’s record, and is answered by AI or routed to the right person.' },
  { q: 'Which channels does it cover?', a: 'WhatsApp on the official Business Platform, WhatsApp calls, Instagram DMs, comments, story replies and mentions, Facebook Messenger and comments, email on your own domain, webchat on your website and store, replies on Threads, X, YouTube and LinkedIn, Google reviews, and lead forms from Meta ads and listings.' },
  { q: 'What is the WhatsApp API?', a: 'The WhatsApp API, officially the WhatsApp Business Platform, is Meta’s version of WhatsApp for businesses that need more than one phone: a shared team inbox, approved templates for reminders and offers, catalogues, payments and calls. Jwero connects your own number to it.' },
  { q: 'Can I keep my existing WhatsApp number?', a: 'Yes. Your number moves onto the official platform and customers keep messaging the same number. We check first whether it can also keep the WhatsApp Business app alongside.' },
  { q: 'Will my number get banned for sending campaigns?', a: 'Numbers get restricted for spam-like behaviour. Jwero uses the official platform, approved templates, recorded consent, limits on how often each customer is messaged, and instant opt-out, and shows your number’s health as you go.' },
  { q: 'Does AI reply on its own, or does my team approve each message?', a: 'It replies on its own, from your catalogue, today’s rate and the customer’s record, inside the hours and limits you set. You choose which kinds of conversation go to a person, and you can pause the AI for one customer or for everyone.' },
  { q: 'When does a conversation go to a person?', a: 'When the customer asks for one, when the subject is one you have marked for your team such as complaints, discounts or bridal enquiries, or when the answer is not in your catalogue or policies. The salesperson gets the thread with a summary and her history, and the AI steps back.' },
  { q: 'How are conversations shared across my team and branches?', a: 'Evenly, by current workload, or by rules you set, for example by channel, by what the customer is asking about, or to the salesperson who already knows her. Each thread carries a reply-time target and alerts before it slips.' },
  { q: 'Can customers buy and pay inside WhatsApp?', a: 'Yes. They browse a catalogue priced at today’s rate, add pieces to a cart and pay in the chat, or pay through a link your salesperson sends. The order and invoice land on their record.' },
  { q: 'Does it answer Instagram comments?', a: 'Yes. A comment such as “price?” can be answered in a private message automatically, and comments on Instagram and Facebook can be replied to from the same place. Story replies and mentions arrive as conversations.' },
  { q: 'Does the AI agent handle phone calls too?', a: 'Yes. The AI voice agent answers and makes calls on your WhatsApp number in the customer’s language, for reminders, follow-ups and invitations, and can hand the call to a person. Each call is recorded, transcribed and summarised on her record.' },
  { q: 'Can I use my own email address?', a: 'Yes. Mailboxes such as care@ and orders@ run on your own domain, and each email thread sits on the customer’s record beside her WhatsApp conversation.' },
  { q: 'What does my salesperson see while replying?', a: 'The customer’s purchases, gold plan, visits, open quotation and what she browsed, a summary of the thread, a suggested reply, saved replies, and buttons to share products or a payment link. Notes and mentions stay between staff.' },
  { q: 'How do I know it is working?', a: 'You see reply times, what AI handled and what reached your team, which campaigns were delivered and read, and which conversations turned into bills, traced back to the ad, post or message that started them.' },
];

const inbox = {
  slug: 'products/inbox',
  title: 'One Inbox for Jewellers: WhatsApp, Instagram, Email, Calls and AI | Jwero',
  description: 'One inbox for a jewellery business: WhatsApp API and marketing, WhatsApp calls, Instagram and Facebook, email, webchat and social replies on one customer record, answered by an AI agent in chat and voice or routed to the right person.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero One Inbox', alternateName: ['WhatsApp API for jewellers', 'WhatsApp marketing for jewellers', 'Instagram and Facebook inbox for jewellers', 'AI sales agent for jewellers', 'Jewellery business email'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A unified inbox for jewellers: WhatsApp Business Platform messages, catalogue, payments and calls, WhatsApp marketing, Instagram and Facebook messages and comments, email on your own domain, webchat and social replies, with an AI agent for chat and voice and routing to the right person, on the same customer record as billing, stock and gold plans.',
    url: 'https://jwero.ai/products/inbox', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to set up one inbox for a jewellery business', step: HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('One Inbox'),
  faqs,
  body: `
${L.hero({
  eyebrow: 'ONE INBOX · EVERY CHANNEL, EVERY CONVERSATION',
  h1: 'Never lose an enquiry again. <span class="h1-turn">Every channel. One inbox.</span>',
  sub: 'WhatsApp, calls, Instagram, Facebook, email, website chat and social replies arrive in one place. AI answers in seconds, day or night, at today’s rate. What needs a person reaches the right salesperson with the full story.',
  primary: { href: '#', label: 'Show me my channels in one inbox', wa: 'inbox' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(`${L.sectionHead('EVERY CHANNEL LANDS HERE', 'Nine ways customers reach you. One place they arrive.', 'Each conversation is matched to her record, then answered automatically or routed to a person.')}${inboxHub()}`, { id: 'channels-in' })}

${L.section(`${L.sectionHead('WHAT HAPPENS TO ONE MESSAGE', 'From “hello” to the record, in five steps.', '')}${inboxRun()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('EVERYTHING IT CAN HANDLE', `${USE_COUNT} things jewellers use One Inbox for.`, 'Grouped by the work, and marked by who does it: AI on its own, AI first and then a person, or your team.')}${inboxUses()}`, { id: 'use-cases' })}

${L.section(`${L.sectionHead('JOURNEYS THAT CROSS CHANNELS', 'Customers do not stay on one channel. The conversation does not break.', 'Six real paths, step by step, showing where AI carries it and where a person takes over.')}${inboxPaths()}`, { tone: 'tint', id: 'journeys' })}

${L.section(`${L.sectionHead('AUTOMATIC, OR A PERSON', 'You decide what AI answers and what reaches your team.', '')}${L.cards([
  { icon: 'bot', title: 'AI answers on its own', text: 'From your catalogue, today’s rate, your policies and her record, in chat and on calls, inside the hours and limits you set.' },
  { icon: 'route', title: 'It knows when to hand over', text: 'When she asks for a person, when the subject is one you reserved for your team, or when the answer is not in your records. The AI steps back while your salesperson is on the thread.' },
  { icon: 'branches', title: 'It reaches the right person', text: 'Shared evenly, by workload, or by rules you set: by channel, by what she is asking about, or to the salesperson who already knows her.' },
  { icon: 'activity', title: 'Nothing waits unseen', text: 'A reply-time target on every thread, working hours and holidays respected, and an alert to the manager before a conversation slips.' },
  { icon: 'shield', title: 'Inside your limits', text: 'Quiet hours, limits on how often a customer hears from you, consent on every channel, and one switch that pauses the AI.' },
  { icon: 'book', title: 'All of it on the record', text: 'Who said what, on which channel, what was sent automatically and who stepped in, kept with the customer and not on a phone.' },
], 3)}`, { id: 'routing' })}

${L.section(`${L.sectionHead('CHANNEL BY CHANNEL', 'What each channel does inside One Inbox.', 'Everything that used to be a separate tool, and a separate login.')}${inboxChannels()}`, { tone: 'tint', id: 'channels' })}

${L.section(`${L.sectionHead('THE TEAM’S SIDE', 'What your salesperson has in front of them.', '')}${L.cards([
  { icon: 'record', title: 'The customer beside the chat', text: 'Purchases, gold plan, visits, open quotation and what she browsed, on the same screen as the conversation.' },
  { icon: 'sparkle', title: 'A summary and a suggested reply', text: 'What she wants and how she feels, in two lines, with a reply ready to send or change.' },
  { icon: 'gem', title: 'Products and payment in a tap', text: 'Share pieces from your stock at today’s rate, or send a payment link, without leaving the thread.' },
  { icon: 'chat', title: 'Saved replies and voice notes', text: 'Your standard answers one keystroke away; voice notes recorded in the inbox and transcribed when they come in.' },
  { icon: 'users', title: 'Notes, mentions and labels', text: 'Ask a colleague inside the thread, tag it, pin it, and see when someone else is already replying.' },
  { icon: 'search', title: 'Find anything', text: 'Search and filter by channel, salesperson, label, what the customer is asking about, or what is running late.' },
], 3)}`)}

${L.section(`${L.sectionHead('COMPARE', 'Separate apps, or One Inbox.', '')}${cmpTable()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to bring every channel into one inbox.', 'Five steps.')}${L.steps(HOW.map(([title, text]) => ({ title, text })))}`)}

${L.oneSystemBlock([
  'A reply on WhatsApp knows her gold plan balance, because schemes and chat share one record.',
  'A cart paid in the chat takes the piece out of the same stock your counter sells from.',
  'A campaign goes to customers chosen from real purchases, and every reply comes back to the inbox.',
])}

${L.ctaBand('Put every conversation in one place.', 'Bring your WhatsApp number and your Instagram page; see your own enquiries answered in One Inbox.', 'inbox')}
`,
};

// The hero picture: every channel as a chip, and one conversation from each
// arriving and being answered by AI or routed to a person.
const HERO_CHIPS = [['chat', 'WhatsApp'], ['phone', 'WhatsApp calls'], ['camera', 'Instagram'], ['users', 'Facebook'], ['mail', 'Email'], ['chat', 'Webchat'], ['share', 'Threads and X'], ['megaphone', 'Ads and lead forms']];
const HERO_ROWS = [
  ['WhatsApp', 'Meera: “Price of the 22k bangle?”', 0, 'AI replied at today’s rate', 'a'],
  ['Instagram', 'A comment on your reel: “price?”', 2, 'AI answered in a private message', 'a'],
  ['Call', 'A missed call at 9:10 pm', 1, 'AI called back and booked a visit', 'a'],
  ['Facebook', 'Messenger: “Do you take old gold?”', 3, 'AI answered from your policy', 'a'],
  ['Email', '“The stone on my ring is loose”', 4, 'Sent to the manager, with her bill', 'h'],
  ['Webchat', 'A website visitor asks about a solitaire', 5, 'AI answered and saved the lead', 'a'],
  ['Threads', 'A reply under your new collection post', 6, 'AI replied with the catalogue link', 'a'],
  ['Lead form', 'A bridal set enquiry from your ad', 7, 'Sent to Riya, your senior salesperson', 'h'],
];
module.exports = [inbox];
module.exports.heroPiece = () => L.recordFeed({ title: 'One Inbox', chips: HERO_CHIPS, rows: HERO_ROWS, foot: 'Answered by AI or routed to a person. All on the customer’s record.' });
