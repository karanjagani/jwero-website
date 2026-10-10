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
  ['whatsapp-marketing', 'megaphone', 'WhatsApp Marketing', 'Broadcasts and festival campaigns to the right customers, on approved templates, with every reply landing back in the inbox. Planned in <a href="/products/promotions#broadcasts">Personalised Promotions</a>.', ['Campaigns to live segments', 'Templates tracked through Meta approval', 'Click-to-WhatsApp ads, traced to the sale', 'Consent, frequency limits and number health']],
  ['calls', 'phone', 'WhatsApp Calls', 'Voice calls on the same WhatsApp number, in and out, answered by your team or by the AI voice agent, with the recording and transcript on her record.', ['Inbound and outbound calls', 'AI voice agent in her language', 'Transfer to a person mid-call', 'Missed calls followed up']],
  ['instagram-facebook', 'camera', 'Instagram & Facebook', 'DMs, Messenger, story replies and mentions. A “price” comment under a reel can start a private conversation that continues here with a priced answer.', ['Instagram DMs and Messenger', 'A “price?” comment starts a private chat', 'Story replies and mentions', 'Lead forms from Meta ads']],
  ['email', 'mail', 'Email', 'care@ and orders@ on your own domain, threaded on the customer record beside her WhatsApp, with labels, drafts and shared mailboxes.', ['Your own domain', 'Threads on the customer record', 'Replies from the same inbox', 'Order and review emails']],
  ['webchat', 'chat', 'Webchat', 'A chat on every page of your website. Visitors ask, AI answers from your catalogue, and a named customer continues on WhatsApp.', ['On your website and store', 'AI answers at any hour', 'Voice and call from the browser', 'Product questions from the store']],
  ['threads', 'share', 'X, Threads, YouTube and LinkedIn', 'X messages arrive in the inbox. Replies on Threads, YouTube and LinkedIn posts are handled in Jwero’s social workspace beside it, on the same customer record.', ['X messages and replies', 'Threads replies', 'YouTube and LinkedIn replies', 'Google reviews answered']],
  ['ai-agent', 'bot', 'AI Agent, chat and voice', 'An agent that answers in chat and on calls from your catalogue, today’s rate and her record, follows up on its own, and hands over to a person with the full story.', ['Replies in chat, on its own', 'Answers and makes calls', 'Knows your stock, prices and policies', 'Hands over when a person is needed']],
];
const inboxChannels = () => `<div class="ibx-ch">${CHANNELS.map(([id, ic, t, d, pts]) => `<article id="${id}"><div class="cap-ico">${icon(ic)}</div><h3>${t}</h3><p>${d}</p><ul>${pts.map((p) => `<li>${p}</li>`).join('')}</ul></article>`).join('')}</div>`;

// ---- the hub picture: channels in, one inbox, two ways out
const HUB_IN = [['chat', 'WhatsApp'], ['phone', 'WhatsApp calls'], ['camera', 'Instagram'], ['users', 'Facebook'], ['mail', 'Email'], ['chat', 'Webchat'], ['share', 'X and Threads'], ['megaphone', 'Ads and lead forms'], ['store', 'Your online store']];
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
  ['It arrives', 'A message, a call, an email or a form, on any channel, at any hour.', 'chat'],
  ['She is recognised', 'Matched to her record: purchases, gold plan, what she browsed, what she asked last time.', 'record'],
  ['AI answers, or routes', 'A priced reply from your stock, or a hand-over to the right person by the rules you set.', 'bot'],
  ['A person steps in', 'Your salesperson opens the thread with the summary, her history and a suggested reply.', 'users'],
  ['It is on the record', 'The conversation, the outcome and the next follow-up, for the counter and the next campaign.', 'book'],
];
// One message travels the five steps and picks up what each step adds.
const RUN_TAGS = [['whatsapp', 'WhatsApp, 9:42 pm'], ['record', 'Meera · gold plan member'], ['gem', 'Priced at today’s rate'], ['users', 'With Ravi, full story'], ['check', 'Saved to her record']];
const inboxRun = () => `<div class="ibx-msg" data-msg>
  <div class="ibx-msg-stage" aria-hidden="true"><div class="ibx-msg-bubble"><p>“Is the 22k bangle in size 2.6 in stock?”</p><ul>${RUN_TAGS.map(([ic, t], i) => `<li data-k="${i}">${icon(ic)}${t}</li>`).join('')}</ul></div></div>
  <ol class="ibx-msg-steps">${RUN.map(([t, d, ic], i) => `<li data-k="${i}"><span class="ibx-msg-n">${icon(ic)}<b>${i + 1}</b></span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
</div>`;

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
    ['A “price” comment on a reel starts a private chat, answered at once', 'a'],
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
const SHORT = { 'Enquiries and leads': 'Enquiries', 'Selling in the chat': 'Selling', 'Marketing that starts conversations': 'Marketing', 'Gold plans, payments and reminders': 'Gold plans and payments', 'Orders, repairs and after-sales': 'Orders and repairs', 'Calls': 'Calls', 'Trade and wholesale': 'Trade', 'Team and control': 'Team' };
const inboxUses = () => `<div class="ibx-tiles">${USES.map(([ic, t, items], g) => {
  const n = (k) => items.filter((x) => x[1] === k).length;
  return `<details class="ibx-tile" name="ibx-uses"${g === 0 ? ' open' : ''}><summary><span class="ibx-tile-ico">${icon(ic)}</span><b>${SHORT[t] || t}</b><span class="ibx-bar" aria-label="${n('a')} by AI, ${n('b')} AI then a person, ${n('h')} by a person">${items.map(([, k]) => `<i class="${TAG[k][1]}"></i>`).join('')}</span><em>${items.length} uses · ${n('a')} by AI</em></summary><ul>${items.map(([x, k]) => `<li><span>${x}</span><em class="${TAG[k][1]}">${TAG[k][0]}</em></li>`).join('')}</ul></details>`;
}).join('')}</div>
<p class="ibx-legend"><em class="is-a">AI</em> handled on its own <em class="is-b">AI, then a person</em> AI starts, a person finishes <em class="is-h">Person</em> routed to your team. Tap a tile to see its uses.</p>`;
const USE_COUNT = USES.reduce((n, g) => n + g[2].length, 0);

// ---- journeys that cross channels. [step, who]
const PATHS = [
  ['From an ad to an anniversary', [['Taps “Chat on WhatsApp” under your reel', 'c', 'camera'], ['AI shares three pieces at today’s rate', 'a', 'whatsapp'], ['Adds one to the cart and pays in the chat', 'c', 'wallet'], ['Order, invoice and stock updated', 'a', 'box'], ['A year on: an anniversary message', 'a', 'heart']]],
  ['From a reel to the counter', [['Comments “price?” on your reel', 'c', 'camera'], ['Answered in a private message', 'a', 'chat'], ['Asks to see it; a showroom visit is booked', 'a', 'calendar'], ['Routed to the branch salesperson', 'h', 'users'], ['She walks in; the counter knows the piece', 'h', 'store']]],
  ['A missed call at 9 pm', [['Calls after closing', 'c', 'phone'], ['A WhatsApp follow-up within the minute', 'a', 'whatsapp'], ['Asks for a call back', 'c', 'chat'], ['AI voice agent calls in her language', 'a', 'phone'], ['Wants to negotiate: handed to the owner', 'h', 'users']]],
  ['A website visitor becomes a customer', [['Asks about a ring in the website chat', 'c', 'globe'], ['AI answers and takes her number', 'a', 'bot'], ['The lead goes to a salesperson with what she viewed', 'h', 'users'], ['Quotation sent on WhatsApp', 'h', 'receipt'], ['She goes quiet: a follow-up, then the order', 'a', 'refresh']]],
  ['A gold plan instalment, missed', [['Instalment due: a reminder with a payment link', 'a', 'coins'], ['No reply in three days: an AI call', 'a', 'phone'], ['She asks to change her date', 'c', 'chat'], ['Routed to the scheme desk', 'h', 'users'], ['Paid; receipt and passbook updated', 'a', 'check']]],
  ['A complaint, caught early', [['Emails that a stone is loose', 'c', 'mail'], ['Recognised as a complaint; the AI stays out', 'a', 'shield'], ['Goes straight to the manager with her purchase history', 'h', 'users'], ['Repair booked and tracked', 'h', 'tools'], ['Collected; a review request a week later', 'a', 'send']]],
];
const WHO = { c: ['Customer', 'is-c'], a: ['AI', 'is-a'], h: ['Person', 'is-h'] };
const inboxPaths = () => `<div class="ibx-jr" data-jr>
  <div class="ibx-jr-tabs" role="tablist" aria-label="Journeys">${PATHS.map(([t], i) => `<button type="button" role="tab" aria-selected="${i === 0}" data-jr-tab="${i}">${t}</button>`).join('')}</div>
  ${PATHS.map(([t, steps], i) => `<div class="ibx-jr-panel${i === 0 ? ' is-on' : ''}" role="tabpanel" data-jr-panel="${i}"><h3>${t}</h3><ol class="ibx-jr-path">${steps.map(([x, k, ic], j) => `<li class="${WHO[k][1]}" style="--j:${j}"><span class="ibx-jr-node">${icon(ic)}</span><em>${WHO[k][0]}</em><span>${x}</span></li>`).join('')}</ol></div>`).join('')}
  <p class="ibx-legend"><em class="is-c">Customer</em> <em class="is-a">AI</em> carries it <em class="is-h">Person</em> takes over</p>
</div>`;

// ---- the whole business, from conversations. Read from the product (2026-10-10):
// only processes that are built appear; the rest are left out on purpose.
// A message comes in and splits: AI on one side, a person on the other.
const FORK = [
  ['is-a', 'bot', 'AI answers', ['Price, stock, gold plan and order questions', 'From your catalogue, today’s rate and her record', 'Inside your hours, limits and quiet times'], 'check', 'Answered in seconds'],
  ['is-h', 'users', 'A person takes over', ['She asks for a person', 'A subject you kept for your team, like bridal', 'The answer is not in your records'], 'route', 'The right salesperson, with the full story'],
];
const inboxFork = () => `<div class="ibx-fork" data-gfx>
  <div class="ibx-fork-in">${icon('chat')}<b>A message comes in</b><small>On any channel, at any hour</small></div>
  <svg class="ibx-fork-lines" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true"><path class="is-a" d="M200 0 C200 30 100 30 100 60"/><path class="is-h" d="M200 0 C200 30 300 30 300 60"/></svg>
  <div class="ibx-fork-legs">${FORK.map(([c, ic, t, rules, ric, r]) => `<div class="ibx-fork-leg ${c}"><h3>${icon(ic)}${t}</h3><ul>${rules.map((x) => `<li>${x}</li>`).join('')}</ul><p class="ibx-fork-out">${icon(ric)}${r}</p></div>`).join('')}</div>
</div>`;
const DEPTS = [
  ['coins', 'Finance and accounts', 'Money conversations start and finish in the thread.', [
    'A payment link sent in the chat, by your team or by AI, for an order or a gold plan instalment',
    'Payment received: the order or plan is settled and the entry posted to the books',
    'Reminders for overdue invoices drafted on a schedule and sent from the inbox',
    'Gold plan instalment due, overdue and maturity reminders, with her statement on request',
    'Girvi interest, renewal and auction notices sent on time',
    'Credit note and return questions answered from the record',
    'Invoice and receipt PDFs, and a party statement prepared in Finance, attached to the thread by your team in a tap',
  ]],
  ['box', 'Operations and orders', 'What customers ask about the work is answered from the work.', [
    'Live stock answers: “Is this in 22k, in size 14?”',
    'An order started from the chat, with a payment link, as a draft for your team',
    'Order status and delivery updates, as the courier moves',
    'Repair status on request, and a new repair request logged from the chat',
    'Appointments booked, moved and cancelled in the conversation',
    'Karigar job due, overdue and settlement alerts raised for your team',
    'Purchase orders delivered to your vendor’s own workspace, with their response coming back to you',
    'A piece reserved at a branch from your online store, collected with a pickup code',
    'Karigars ask for their khata on WhatsApp, where you switch it on',
  ]],
  ['users', 'Team and HR', 'Your people work from the same threads, with nothing to chase.', [
    'Tasks created from a chat, with a follow-up date and an owner',
    'Conversations shared by workload or your rules, and an alert before a reply is late',
    'Escalations to a manager, with the task and a notification',
    'Leave, payslip and approval notices reach staff in the Jwero team chat',
    'Approvals nudged, then escalated, when they wait too long',
    'Internal notes on any thread, with an @mention that notifies the colleague, never seen by the customer',
  ]],
  ['megaphone', 'Marketing', 'Campaigns start conversations; the inbox finishes them.', [
    'Festival, wedding-season and new-collection broadcasts to live segments',
    'Journeys for birthdays, anniversaries, win-back and gold plan milestones',
    'Click-to-WhatsApp ad replies, with the ad on her record',
    'Review requests after delivery, sent automatically',
    'Consent, opt-outs and frequency limits applied on every send',
    'Which campaign led to which bill, traced end to end',
  ]],
  ['target', 'Sales and CRM', 'Every enquiry becomes a record, a stage and a next step.', [
    'A contact created from any channel, and merged when she appears on another',
    'Tags, stages and scores that update as she talks to you',
    'Catalogue pieces and prices shared in a tap, at today’s rate',
    'Follow-ups scheduled by AI or by your team, and surfaced on the morning list',
    'Quote requests passed to the right salesperson as a task',
    'Bridal and high-value enquiries sent to your senior people',
  ]],
  ['pie', 'Reporting and insight', 'The numbers that run the inbox are already in it.', [
    'First-response time and resolution by channel, team and salesperson',
    'How much AI handled, and how it was rated',
    'Revenue traced from a conversation to the bill',
    'Ask a question in plain words and get the answer from your own data',
    'A weekly call summary sent to owners on WhatsApp',
    'Opt-outs, busiest hours and what customers ask about most',
  ]],
];
// One thread in the middle; each message lights the department it touches.
const THREAD = [
  ['in', 'Price of this necklace in 22k?', 4],
  ['out', 'Here it is at today’s rate, with a payment link.', 4],
  ['in', 'Paid ✓', 0],
  ['in', 'Is my ring repair ready?', 1],
  ['note', '@Ravi, she wants it by Friday', 2],
  ['out', 'Diwali preview: your list is ready', 3],
  ['in', '★★★★★ Lovely service', 5],
];
const deptCard = ([ic, t, d, items], k) => `<details class="ibx-dnode" data-d="${k}"><summary><span class="ibx-dnode-ico">${icon(ic)}</span><b>${t}</b><small>${d}</small></summary><ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul></details>`;
const inboxDepts = () => `<div class="ibx-biz" data-biz>
  <div class="ibx-biz-side">${DEPTS.slice(0, 3).map((x, k) => deptCard(x, k)).join('')}</div>
  <div class="ibx-biz-thread" aria-hidden="true"><div class="ibx-biz-head">${icon('chat')}<b>One conversation</b></div><ol>${THREAD.map(([w, t, d]) => `<li class="is-${w}" data-d="${d}">${t}</li>`).join('')}</ol></div>
  <div class="ibx-biz-side">${DEPTS.slice(3).map((x, k) => deptCard(x, k + 3)).join('')}</div>
</div><p class="ibx-legend">Each message lights up the part of the business it touches. Tap a department to see everything it runs from the inbox.</p>`;

const MANUAL = [
  ['book', 'Copying enquiries from WhatsApp and Instagram into a register', 'Every enquiry becomes a customer record by itself'],
  ['coins', 'Typing today’s price into chat from a rate card', 'The catalogue answers at the live rate'],
  ['chat', 'Answering the same question about stock, repairs and orders', 'AI answers from the stock, repair and order records'],
  ['phone', 'Ringing customers about overdue payments and instalments', 'Reminders go out on schedule, with a payment link'],
  ['truck', 'Telling customers where their order or repair is', 'Status updates follow the courier and the workshop'],
  ['calendar', 'Booking visits by phone and writing them in a diary', 'Booked, moved and cancelled in the chat'],
  ['route', 'Deciding who answers which enquiry', 'Shared by workload or your rules'],
  ['activity', 'Checking whether anyone replied', 'A reply-time target on every thread, with an alert'],
  ['refresh', 'Remembering to follow up quotes and quiet enquiries', 'Follow-ups scheduled and listed each morning'],
  ['megaphone', 'Sending festival and occasion messages one by one', 'Segments and journeys send them, inside your limits'],
  ['badge', 'Asking customers for reviews', 'A request goes out after delivery'],
  ['target', 'Working out which ad or post brought the sale', 'Traced from the first message to the bill'],
  ['pie', 'Building weekly numbers in a spreadsheet', 'Reply times, AI share and revenue by channel, ready to read'],
];
const manualTable = () => `<div class="ibx-flips" data-flips>${MANUAL.map(([ic, before, after], i) => `<button type="button" class="ibx-flip" style="--i:${i}" aria-pressed="false"><span class="ibx-flip-in"><span class="ibx-flip-f"><span class="ibx-flip-ico">${icon(ic)}</span><small>By hand today</small><b>${before}</b></span><span class="ibx-flip-b"><span class="ibx-flip-ico">${icon('check')}</span><small>In One Inbox</small><b>${after}</b></span></span></button>`).join('')}</div><p class="ibx-legend">Each card turns as you scroll. Tap one to turn it back.</p>`;

const RIVALS = ['WATI', 'Interakt', 'DoubleTick', 'A general CRM'];
const RIVAL_ROWS = [
  ['Official WhatsApp Business API', ['Yes', 'Yes', 'Yes', 'Through an add-on'], 'Yes, on your own number'],
  ['Prices at today’s gold rate', ['No, not jewellery-specific', 'No, a general store catalogue', 'No, not jewellery-specific', 'No'], 'Yes, the same as the counter'],
  ['Knows her purchases and gold plan in the reply', ['Through CRM integrations', 'No jewellery fields', 'No scheme engine', 'Notes and custom fields'], 'Yes, one record with billing and schemes'],
  ['Gold savings plans', ['Not a jewellery product', 'No', 'No', 'No'], 'Built in, with reminders and payment links'],
  ['Catalogue, stock and billing in the same system', ['Through integrations', 'Commerce layer only', 'Messaging and sales layer', 'Separate systems'], 'Yes'],
  ['AI that answers customers', ['No-code chatbot builder', 'AI agents (Haptik)', 'AI agents, photo to cart', 'Varies'], 'AI agent in chat and voice, from your stock and her record'],
];
const rivalTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th>${RIVALS.map((r) => `<th>${r}</th>`).join('')}<th>One Inbox</th></tr></thead><tbody>${RIVAL_ROWS.map(([r, them, us]) => `<tr><td><strong>${r}</strong></td>${them.map((c) => `<td>${c}</td>`).join('')}<td class="wa-cmp-us">${us}</td></tr>`).join('')}</tbody></table></div>
<p class="cta-note" style="margin-top:12px">Other tools’ details are from their own published materials, checked July 2026; confirm current features with each vendor. Full comparisons: <a href="/compare/jwero-vs-wati">Jwero vs WATI</a>, <a href="/compare/jwero-vs-interakt">Interakt</a>, <a href="/compare/jwero-vs-doubletick">DoubleTick</a>.</p>`;

const GUIDES = [['/whatsapp-api-for-jewellers', 'WhatsApp API for jewellers'], ['/whatsapp-marketing-for-jewellers', 'WhatsApp marketing for jewellers'], ['/instagram-for-jewellers', 'Instagram for jewellers'], ['/ai-chatbot-for-jewellery-stores', 'AI chatbot for jewellery stores'], ['/business-email-for-jewellers', 'Business email for jewellers'], ['/ai-calling-for-jewellers', 'AI calling for jewellers']];

// 1. Hero meter: what slow replies cost.
const meter = () => `<div class="erp-meter ib-meter" data-ibm>
  <p class="erp-meter-t">${icon('activity')}<b>How many enquiries go cold while you reply?</b></p>
  <label><span>Enquiries a day, all channels <b data-o="enq"></b></span><input type="range" data-i="enq" min="5" max="500" step="5" value="40"></label>
  <label><span>Minutes to first reply today <b data-o="min"></b></span><input type="range" data-i="min" min="1" max="240" step="1" value="45"></label>
  <label><span>Arriving after shop hours <b data-o="ah"></b></span><input type="range" data-i="ah" min="0" max="80" step="5" value="35"></label>
  <div class="erp-meter-bars">
    <a href="#try" data-b="cold"><span>Going cold a month</span><i><em></em></i><b></b></a>
  </div>
  <p class="erp-meter-total"><span>Sales those could have been</span><b data-o="total"></b></p>
  <a class="btn btn-primary erp-meter-cta" href="#" data-wa="inbox" data-wa-extra="" data-ib-cta="meter">Show me my enquiries answered in seconds</a>
  <details class="erp-meter-as"><summary>The assumptions, change them</summary>
    <label>Slow or after-hours enquiries that go cold, %<input type="number" data-a="cold" value="30" step="5" min="0"></label>
    <label>Enquiries that would have bought, %<input type="number" data-a="buy" value="8" step="1" min="0"></label>
    <label>Average bill, ₹<input type="number" data-a="bill" value="60000" step="5000" min="0"></label>
  </details>
  <p class="erp-meter-note">A planning estimate from your inputs and these assumptions, not a measurement.</p>
</div>`;

// 2. "I run a…"
const ICP = [
  ['single', 'store', 'A single store', 'Start with WhatsApp and the AI agent: every enquiry answered in seconds, day and night, and the rest handed to you with the full story.', 2, 'try', 'trial', 'Start free for your store'],
  ['chain', 'branches', 'A chain or franchise', 'Start with routing: chats shared by branch and workload, reply-time targets, and alerts to the manager before a conversation slips.', 4, 'routing', 'demo', 'Book a 30-minute demo for a chain'],
  ['brand', 'megaphone', 'An online brand', 'Start with Instagram, Facebook and webchat: DMs and site chats answered by AI, with carts and payments in the conversation.', 1, 'channels', 'trial', 'Start free for your brand'],
];
const door = ([k, , , , , , d, label], cls) => d === 'demo'
  ? `<a class="${cls}" href="/book-demo" data-ib-cta="door-${k}">${label}</a>`
  : `<a class="${cls}" href="https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=inbox-${k}" rel="noopener" data-trial data-ib-cta="door-${k}">${label}</a>`;
const icpBox = () => `<div class="erp-icp soc-icp" data-ib-icp data-cfg='${JSON.stringify(Object.fromEntries(ICP.map(([k, , , , j, lead]) => [k, [j, lead]])))}'>
  <div class="erp-icp-opts" role="tablist" aria-label="I run a…">${ICP.map(([k, ic, t], i) => `<button type="button" role="tab" data-k="${k}" aria-selected="${i === 0}">${icon(ic)}<span>${t}</span></button>`).join('')}</div>
  ${ICP.map((e, i) => `<div class="erp-icp-panel${i === 0 ? ' is-on' : ''}" data-panel="${e[0]}"><p>${e[3]}</p><div class="erp-icp-go"><a href="#try">Try a message ↓</a><a href="#race">Reply time ↓</a><a href="#journeys">Your journey ↓</a><a href="#${e[5]}">${e[5] === 'routing' ? 'Routing' : e[5] === 'channels' ? 'Your channels' : 'The AI agent'} ↓</a></div><p class="erp-icp-door">${door(e, 'btn btn-primary')}</p></div>`).join('')}
</div>`;
const prog = () => `<nav class="erp-prog" data-erp-prog aria-label="On this page"><div class="erp-prog-in">
  <ol>${[['channels-in', 'Every channel'], ['try', 'Try a message'], ['race', 'Reply time'], ['use-cases', 'What it handles'], ['routing', 'AI or a person'], ['vs', 'Compare']].map(([id, t], i) => `<li><a href="#${id}" data-p="${id}"><b>${i + 1}</b>${t}</a></li>`).join('')}</ol>
  <span class="erp-prog-doors">${ICP.map((e) => door(e, 'btn btn-primary erp-prog-cta ib-door')).join('')}</span>
</div><i class="erp-prog-fill" aria-hidden="true"></i></nav>`;

// 3. Try a message.
const TRY = [
  ['Price of the 22K temple bangle?', 'Here are two 22K temple bangles in stock at Andheri, priced at today’s rate with the breakup. Would you like to see them on video or visit on Saturday?', ['Live stock', 'Today’s rate', 'Her last purchase'], 'a'],
  ['Is this jhumka in stock?', 'Yes, one pair is at the Andheri branch. I can hold it for you to collect, or send a payment link if you would like it delivered.', ['Live stock by branch', 'Reserve and collect', 'Payment link'], 'a'],
  ['How much is left on my gold plan?', 'Meera, you have paid 9 of 11 instalments. Your plan matures on 12 November, and here are pieces your balance could go towards.', ['Her gold plan', 'Her record', 'Catalogue'], 'a'],
  ['I want to speak to someone', 'Of course. Ravi from our Andheri branch will reply in a moment. He can see your conversation so far.', ['Hand-over rule', 'Summary for Ravi', 'Suggested reply'], 'h'],
];
const tryIt = () => `<div class="ib-try" data-ibtry>
  <div class="ib-try-q" role="tablist">${TRY.map(([q], i) => `<button type="button" role="tab" data-q="${i}" aria-selected="${i === 0}">${q}</button>`).join('')}</div>
  <div class="ib-try-chat" aria-live="polite"><div class="ec-pz-bar">${icon('whatsapp')}<span>Your shop · WhatsApp</span></div>
  ${TRY.map(([q, a, used, who], i) => `<div class="ib-try-t${i === 0 ? ' is-on' : ''}" data-t="${i}"><p class="ib-b is-in">${q}</p><p class="ib-b is-out ${who === 'h' ? 'is-person' : ''}"><small>${who === 'h' ? 'AI, handing over' : 'AI · in 6 seconds'}</small>${a}</p><p class="ib-used">${icon('sparkle')}Used: ${used.map((u) => `<span>${u}</span>`).join('')}</p></div>`).join('')}</div>
  <p class="ibx-legend">Illustrative replies. Real replies come from your own catalogue, stock, rates and customer records, inside the limits you set.</p>
</div>`;

// 7. Reply time as a race.
const race = () => `<div class="ib-race" data-gfx>
  <div class="ib-race-lane is-old"><p class="ib-race-k">Today</p><ol><li style="--i:0"><b>9:42 pm</b>“Price of this bangle?”</li><li style="--i:1"><b>10:15 am</b>Seen by staff next morning</li><li style="--i:2"><b>11:30 am</b>Price sent after checking stock</li><li style="--i:3" class="is-lost"><b>No reply</b>She bought elsewhere</li></ol></div>
  <div class="ib-race-lane is-new"><p class="ib-race-k">One Inbox</p><ol><li style="--i:0"><b>9:42 pm</b>“Price of this bangle?”</li><li style="--i:1"><b>9:42 pm</b>AI replies with two pieces in stock</li><li style="--i:2"><b>9:44 pm</b>Saturday visit booked</li><li style="--i:3" class="is-won"><b>Saturday</b>Bill linked to the chat</li></ol></div>
</div><p class="ibx-legend">Illustrative. The difference is the first reply: seconds, at any hour, from your own stock and rates.</p>`;

// 5. Switching from another messaging tool.
const SWITCH = (n) => [['Export from ' + n, 'Contacts, labels and templates, with us.'], ['Connect your number', 'Your WhatsApp number on Jwero, plus Instagram, email and webchat.'], ['Run both for a week', 'Replies in One Inbox while ' + n + ' stays on.'], ['Turn on the AI agent', 'With the hours, limits and hand-over rules you set.'], ['Switch ' + n + ' off', 'Every chat, on her record.']];
const rivalTabs = () => `<div class="ibx-jr erp-from ib-from" data-jr data-jr-still>
  <div class="ibx-jr-tabs" role="tablist">${RIVALS.map((n, i) => `<button type="button" role="tab" data-jr-tab="${i}" data-rival="${i}" aria-selected="${i === 0}">From ${n}</button>`).join('')}</div>
  ${RIVALS.map((n, i) => `<div class="ibx-jr-panel${i === 0 ? ' is-on' : ''}" role="tabpanel" data-jr-panel="${i}"><h3>Moving from ${n} to One Inbox</h3><ol class="ibx-jr-path">${SWITCH(n).map(([t, d], j) => `<li class="${j === 2 ? 'is-h' : 'is-a'}" style="--j:${j}"><span class="ibx-jr-node"><b>${j + 1}</b></span><em>${t}</em><span>${d}</span></li>`).join('')}</ol></div>`).join('')}
</div>`;

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
  { q: "What is the best WhatsApp software for jewellers in 2026?", a: "The best WhatsApp software for jewellers uses the official WhatsApp Business API, shares one number across the team, answers price questions at today’s gold rate, and knows each customer’s purchases and gold plan. Jwero One Inbox does all of this, and adds Instagram, Facebook, email, webchat and calls in the same inbox." },
  { q: "How do jewellers manage WhatsApp, Instagram and Facebook messages in one place?", a: "Jewellers connect every channel to one shared inbox, so each message lands on the customer’s record whichever app she used. In Jwero One Inbox, WhatsApp, Instagram DMs, Messenger, email, webchat and WhatsApp calls arrive together, AI answers routine questions, and the rest goes to the right salesperson." },
  { q: "Is there a WATI, Interakt or DoubleTick alternative built for jewellers?", a: "Yes. WATI, Interakt and DoubleTick are general WhatsApp tools. Jwero One Inbox is built for jewellery: replies use today’s gold rate and live stock, and each chat sits on one record with billing, gold plans and repairs. The comparison on this page is sourced and dated." },
  { q: "How fast should a jewellery shop reply on WhatsApp?", a: "Within minutes, and at any hour, because a customer asking for a price is often messaging several shops at once. Jwero One Inbox’s AI agent replies in seconds from your catalogue, stock and today’s rate, day and night, and hands anything it should not answer to a person." },
  { q: "Can AI answer jewellery customers on WhatsApp automatically?", a: "Yes. Jwero’s AI agent answers on its own from your catalogue, today’s gold rate, live stock and the customer’s record, inside the hours and limits you set. You choose which conversations go to a person, and you can pause the AI for one customer or everyone." },
  { q: "Can the AI quote a wrong price?", a: "Jwero’s AI prices from your own catalogue, making charges and today’s gold rate, the same numbers your counter uses. When a question is outside your records, or is one you reserved for your team, it hands the conversation to a person with a summary instead of guessing." },
  { q: "Does the AI reply in Hindi and other Indian languages?", a: "Yes. Jwero’s AI agent works in many languages across chat, voice and calls, so a customer can write or speak in the language she is comfortable with and get an answer in the same language." },
  { q: "Can I keep my existing WhatsApp number when I switch?", a: "Yes. Your WhatsApp number moves to the official WhatsApp Business Platform on Jwero, and your customers keep messaging the same number. Instagram, Facebook, email and webchat connect the same way, so nothing changes for them." },
  { q: "How do I switch from WATI or Interakt to Jwero without losing chats?", a: "Export your contacts, labels and templates, connect your number to Jwero, and run both side by side for a week while replies move to One Inbox. Then turn on the AI agent and switch the old tool off. Jwero’s team does the move with you." },
  { q: "Will my WhatsApp number get blocked for sending offers?", a: "Numbers are restricted for spam-like sending. Jwero One Inbox uses the official platform, approved templates, recorded consent, limits on how often each customer hears from you, instant opt-out, quiet hours and DND checks, and shows your number’s health as you go." },
  { q: "How much does WhatsApp inbox software for jewellers cost?", a: "Jwero One Inbox starts with a free trial that includes every module; your price is shown inside your account after the trial. WhatsApp’s own message charges are paid to Meta as usual, separately from Jwero." },
  { q: "Can customers buy and pay inside WhatsApp?", a: "Yes. In Jwero One Inbox customers can browse your catalogue, add pieces to a cart and pay in the chat, or pay through a link your salesperson sends. The order and payment land on the same record as the counter." },
  { q: "Can one inbox handle several branches and salespeople?", a: "Yes. Jwero One Inbox shares conversations by branch, channel, workload or the salesperson who already knows the customer, sets reply-time targets, and alerts the manager before a conversation slips. Every branch works from the same customer records." },
  { q: "Can the AI handle phone calls for my jewellery shop?", a: "Yes. Jwero’s AI agent answers and returns calls, including missed calls, in the customer’s language, books visits and writes the outcome on her record. Calls it should not handle go to a person." },
  { q: "What happens when someone comments “price?” on my Instagram reel?", a: "Your team sees the comment on Jwero’s social comments screen and can reply privately, which opens a chat. That chat continues in One Inbox with the customer’s record, where AI or a salesperson answers with pieces and today’s rate." },
  { q: "Can I use my own email address in the same inbox?", a: "Yes. Email on your own domain sits in Jwero One Inbox next to WhatsApp and Instagram, on the same customer record, so an email enquiry is handled like any other conversation." },
  { q: "What does a salesperson see while replying?", a: "Jwero One Inbox shows the customer beside the chat: purchases, gold plan, visits, open quotes and what she browsed, plus a two-line summary and a suggested reply. Pieces and payment links are one tap away." },
  { q: "Is customer chat data kept safe?", a: "Jwero keeps conversations on the customer’s record with consent recorded on every channel, opt-outs honoured, and access controlled by role. The Trust Centre sets out how data is stored and protected." },
  { q: "How do I know One Inbox is working?", a: "Jwero One Inbox reports first-reply time and resolution by channel, team and salesperson, how much AI handled, and which conversations became sales, traced from the chat to the bill." },
  { q: "Can I run my whole jewellery business from the inbox?", a: "Much of it. From the same screen your team sends payment links, starts orders, updates repairs, books appointments, reminds gold plan members and logs tasks, because the inbox shares one record with billing, stock and gold plans." },
];

const inbox = {
  slug: 'products/inbox',
  title: 'One Inbox for Jewellers: WhatsApp, Instagram, Calls & AI | Jwero',
  description: 'One inbox for jewellers: WhatsApp, calls, Instagram, Facebook, email and webchat on one record. AI replies at today’s gold rate; the rest goes to your team.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero One Inbox', alternateName: ['WhatsApp API for jewellers', 'WhatsApp marketing for jewellers', 'Instagram and Facebook inbox for jewellers', 'AI sales agent for jewellers', 'Jewellery business email'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A unified inbox for jewellers: WhatsApp Business Platform messages, catalogue, payments and calls, WhatsApp marketing, Instagram and Facebook messages, email on your own domain, webchat and social replies, with an AI agent for chat and voice and routing to the right person, on the same customer record as billing, stock and gold plans.',
    audience: { '@type': 'BusinessAudience', audienceType: 'Jewellery retailers, chains, wholesalers, manufacturers and online jewellery brands' },
    featureList: 'Official WhatsApp Business API, WhatsApp marketing and broadcasts, WhatsApp calls, AI voice agent, Instagram DMs and Messenger, email on your own domain, website chat, AI replies at the live gold rate, routing to the right salesperson, reply-time targets, payment links in chat, catalogue sharing, gold plan reminders, order and repair updates, campaign attribution',
    dateModified: '2026-10-10',
    url: 'https://jwero.ai/products/inbox', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to set up one inbox for a jewellery business', step: HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('One Inbox'),
  faqs,
  body: `
${L.hero({
  eyebrow: 'Every Conversation from all channels in One Inbox',
  h1: 'From enquiry to <span class="h1-turn">sales &amp; satisfaction</span>',
  sub: 'Every enquiry, call, email and message arrives in one place. AI answers in seconds from her purchases, her gold plan and your live stock, at today’s rate. What needs a person reaches the right salesperson with the full story.',
  primary: { href: '#', label: 'Show me my channels in one inbox', wa: 'inbox' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">What is One Inbox?</h2><p>One Inbox is Jwero’s unified inbox for jewellery businesses. WhatsApp messages and calls, Instagram and Facebook messages, email on your own domain and website chat arrive in one place, on one customer record shared with billing, stock and gold plans. An AI agent answers in chat and on calls from her purchases, her gold plan and your live stock at today’s rate, and routes what needs a person to the right salesperson.</p></div></section>

${prog()}

${L.section(`${L.sectionHead('', 'I run a…', '')}${icpBox()}`, { tone: 'tint', id: 'for-you' })}

${L.section(`${L.sectionHead('EVERY CHANNEL LANDS HERE', 'How do jewellers manage WhatsApp, calls, Instagram and email together?', 'In one place. Each conversation is matched to her record, then answered automatically or routed to a person.')}${inboxHub()}`, { id: 'channels-in' })}

${L.section(`${L.sectionHead('WHAT HAPPENS TO ONE MESSAGE', 'From “hello” to the record, in five steps.', '')}${inboxRun()}`, { tone: 'tint', id: 'one-message' })}

${L.section(`${L.sectionHead('TRY IT', 'What does the AI say to your customer?', 'Pick a message. See the reply, and what it used.')}${tryIt()}`, { id: 'try' })}

${L.section(`${L.sectionHead('REPLY TIME', 'What does a reply in seconds change?', 'The same enquiry, two evenings.')}${race()}`, { tone: 'tint', id: 'race' })}

${L.section(`${L.sectionHead('EVERYTHING IT CAN HANDLE', 'What can a jeweller do with One Inbox?', `${USE_COUNT} things, grouped by the work, and marked by who does it: AI on its own, AI first and then a person, or your team.`)}${inboxUses()}`, { id: 'use-cases' })}

${L.section(`${L.sectionHead('RUN THE BUSINESS FROM IT', 'Not only chat. The work behind every conversation, too.', 'The inbox is where customers, vendors and staff meet your business. What each conversation needs next happens from the same screen: money, orders, repairs, people, campaigns and numbers.')}${inboxDepts()}`, { id: 'whole-business' })}

${L.section(`${L.sectionHead('LESS BY HAND', 'What nobody has to do manually any more.', 'Thirteen routine jobs that used to take a person, an hour or a register.')}${manualTable()}`, { tone: 'tint', id: 'less-by-hand' })}

${L.section(`${L.sectionHead('JOURNEYS THAT CROSS CHANNELS', 'Customers do not stay on one channel. The conversation does not break.', 'Six real paths, step by step, showing where AI carries it and where a person takes over.')}${inboxPaths()}`, { tone: 'tint', id: 'journeys' })}

${L.section(`${L.sectionHead('AUTOMATIC, OR A PERSON', 'Can AI answer jewellery customers on its own?', 'Yes, inside the limits you set. You decide what AI answers and what reaches your team.')}${inboxFork()}<details class="ibx-more"><summary>Read the detail</summary>${L.cards([
  { icon: 'bot', title: 'AI answers on its own', text: 'From your catalogue, today’s rate, your policies and her record, in chat and on calls, inside the hours and limits you set.' },
  { icon: 'route', title: 'It knows when to hand over', text: 'When she asks for a person, when the subject is one you reserved for your team, or when the answer is not in your records. The AI steps back while your salesperson is on the thread.' },
  { icon: 'branches', title: 'It reaches the right person', text: 'Shared evenly, by workload, or by rules you set: by channel, by what she is asking about, or to the salesperson who already knows her.' },
  { icon: 'activity', title: 'Nothing waits unseen', text: 'A reply-time target on every thread, working hours and holidays respected, and an alert to the manager before a conversation slips.' },
  { icon: 'shield', title: 'Inside your limits', text: 'Quiet hours, limits on how often a customer hears from you, consent on every channel, and one switch that pauses the AI.' },
  { icon: 'book', title: 'All of it on the record', text: 'Who said what, on which channel, what was sent automatically and who stepped in, kept with the customer and not on a phone.' },
], 3)}</details>`, { id: 'routing' })}

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

${L.section(`${L.sectionHead('AGAINST THE MESSAGING TOOLS', 'Is One Inbox better than WATI, Interakt or DoubleTick for jewellers?', 'They are good messaging tools. One Inbox answers from the jewellery business behind the message.')}${rivalTabs()}${rivalTable()}`, { id: 'vs' })}

${L.section(`${L.sectionHead('GUIDES BY CHANNEL', 'Read more about each channel.', '')}<div class="erp-map">${GUIDES.map(([h, t]) => `<a href="${h}"><b>${t}</b><span>${h.replace(/^\//, 'jwero.ai/')}</span></a>`).join('')}</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to bring every channel into one inbox.', 'Five steps.')}${L.steps(HOW.map(([title, text]) => ({ title, text })))}`)}

${L.oneSystemBlock([
  'A reply on WhatsApp knows her gold plan balance, because schemes and chat share one record.',
  'A cart paid in the chat takes the piece out of the same stock your counter sells from.',
  'A campaign goes to customers chosen from real purchases, and every reply comes back to the inbox.',
])}

${L.section(`<p class="cta-note" style="text-align:center">Last updated 10 October 2026.</p>`)}

${L.ctaBand('Put every conversation in one place.', 'Bring your WhatsApp number and your Instagram page; see your own enquiries answered in One Inbox.', 'inbox')}
`,
};

// The hero picture: every channel as a chip, and one conversation from each
// arriving and being answered by AI or routed to a person.
const HERO_CHIPS = [['whatsapp', 'WhatsApp'], ['phone', 'WhatsApp calls'], ['camera', 'Instagram'], ['users', 'Facebook'], ['mail', 'Email'], ['globe', 'Webchat'], ['share', 'X and Threads'], ['megaphone', 'Ads and lead forms']];
const HERO_ROWS = [
  ['WhatsApp', 'Meera: “Price of the 22k bangle?”', 0, 'AI replied at today’s rate', 'a'],
  ['Instagram', 'DM after your reel: “Price of this necklace?”', 2, 'AI answered with pieces at today’s rate', 'a'],
  ['Call', 'A missed call at 9:10 pm', 1, 'AI called back and booked a visit', 'a'],
  ['Facebook', 'Messenger: “Do you take old gold?”', 3, 'AI answered from your policy', 'a'],
  ['Email', '“The stone on my ring is loose”', 4, 'Sent to the manager, with her bill', 'h'],
  ['Webchat', 'A website visitor asks about a solitaire', 5, 'AI answered and saved the lead', 'a'],
  ['X', 'A message about your festive collection', 6, 'AI replied with the catalogue link', 'a'],
  ['Lead form', 'A bridal set enquiry from your ad', 7, 'Sent to Riya, your senior salesperson', 'h'],
];
module.exports = [inbox];
module.exports.parts = { meter: () => meter(), tryIt: () => tryIt() };
module.exports.heroPiece = () => meter();
module.exports.feed = () => L.recordFeed({ title: 'One Inbox', chips: HERO_CHIPS, rows: HERO_ROWS, iconOnly: true, foot: 'Answered by AI or routed to a person. All on the customer’s record.' });
