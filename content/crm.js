// The CRM page, rebuilt 2026-10-10 in the One Inbox design from a pim-app survey.
// Sources: 15 lead-capture sources in crm/capture_lead.ts (WhatsApp, web forms,
// Instagram DMs, social comments, Meta lead ads, Google lead forms, Justdial,
// online store sign-in, lead finder, Messenger, webchat, X DMs, showroom visits,
// product questions, journey webhooks) plus phone calls, AI calls, email, WhatsApp
// groups, video meetings, catalogue viewers and counter bills: about 22 automatic,
// so the page says "20+". "100+ sources" is NOT supportable and is not claimed.
// Built: identity merge, shared numbers and households, timeline, occasions,
// scores (RFM, churn risk, intent, engagement, conversion, health, opportunity,
// revenue potential, value tier, next occasion, best send window, trust risk), next
// best action, deal win scoring and coaching, conversation and call analysis,
// pipelines and deals, follow-up drafts, lead SLA with breach alerts and optional
// reassignment, owner morning digest, whom-to-call list, unowned-lead routing,
// quotations, appointments, video meetings, loyalty and referrals, lead.captured
// journeys, Meta custom audiences, AI calls, plain-words questions, consent log,
// export and erasure requests, PII masking, AI data policy, custom-field
// permissions, audit logs, retention policies, branch ownership.
// NOT claimed: 100+ sources, Google Ads/TikTok/IndiaMART/Shopify lead connectors,
// gift registry, offline or mobile CRM app, girvi or repairs on the 360 view, a
// "lead score" field, lifetime-value modelling, KYC documents, field-level
// encryption, round-robin as a CRM feature.
const L = require('../lib');
const { icon } = L;
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

const SOURCES = [
  ['Conversations', [['whatsapp', 'WhatsApp'], ['camera', 'Instagram DMs'], ['users', 'Messenger'], ['share', 'X DMs'], ['chat', 'Social comments'], ['globe', 'Website chat'], ['whatsapp', 'WhatsApp groups'], ['mail', 'Email']]],
  ['Ads and forms', [['megaphone', 'Meta lead ads'], ['google', 'Google lead forms'], ['receipt', 'Website forms'], ['search', 'Justdial'], ['flow', 'Zapier, Make and booking tools']]],
  ['Store and catalogue', [['store', 'Online store sign-in'], ['chat', 'Product questions'], ['book', 'Catalogue views'], ['target', 'AI lead finder']]],
  ['Showroom and counter', [['store', 'Showroom visits'], ['receipt', 'Counter bills']]],
  ['Calls and meetings', [['phone', 'Phone calls'], ['bot', 'AI calls'], ['video', 'Video meetings']]],
];
const SRC_FLAT = SOURCES.flatMap(([, s]) => s);

// Hero: sources stream into one record, then out to four actions.
const orbit = () => `<div class="crm-orb" data-crmorb aria-hidden="true">
  <div class="crm-orb-in">${SRC_FLAT.map(([ic, t], i) => `<span style="--i:${i}">${icon(ic)}<b>${t}</b></span>`).join('')}</div>
  <div class="crm-orb-core"><span class="crm-orb-av">M</span><b>Meera Shah</b><small data-orb-src>From Meta lead ads</small><i class="crm-orb-ring"></i></div>
  <div class="crm-orb-out">${[['activity', 'Engaged', 'Journey started in seconds'], ['sparkle', 'Personalised', 'Her pieces, her moment'], ['target', 'Retargeted', 'Meta audience updated'], ['check', 'Converted', 'Quote accepted, bill linked']].map(([ic, t, d], i) => `<p style="--o:${i}">${icon(ic)}<b>${t}</b><small>${d}</small></p>`).join('')}</div>
  <p class="crm-orb-foot"><b data-orb-n>0</b> sources feeding one record · illustrative</p>
</div>`;

// "I run a…"
const ICP = [
  ['single', 'store', 'A single store', 'Start with the morning list: who to call today and why, every enquiry captured and owned, occasions remembered.', 0, 'today', 'trial', 'Start free for your store'],
  ['chain', 'branches', 'A chain or franchise', 'Start with ownership: every lead routed to a branch and salesperson, a reply-time clock with breach alerts, and one record across branches.', 1, 'leaks', 'demo', 'Book a 30-minute demo for a chain'],
  ['brand', 'megaphone', 'An online brand', 'Start with sources and retargeting: ad leads, DMs and store sign-ins captured, scored and synced to Meta audiences.', 2, 'sources', 'trial', 'Start free for your brand'],
];
const door = ([k, , , , , , d, label], cls) => d === 'demo'
  ? `<a class="${cls}" href="/book-demo" data-crm-cta="door-${k}">${label}</a>`
  : `<a class="${cls}" href="https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=crm-${k}" rel="noopener" data-trial data-crm-cta="door-${k}">${label}</a>`;
const icpBox = () => `<div class="erp-icp soc-icp" data-crm-icp data-cfg='${JSON.stringify(Object.fromEntries(ICP.map(([k, , , , j, lead]) => [k, [j, lead]])))}'>
  <div class="erp-icp-opts" role="tablist" aria-label="I run a…">${ICP.map(([k, ic, t], i) => `<button type="button" role="tab" data-k="${k}" aria-selected="${i === 0}">${icon(ic)}<span>${t}</span></button>`).join('')}</div>
  ${ICP.map((e, i) => `<div class="erp-icp-panel${i === 0 ? ' is-on' : ''}" data-panel="${e[0]}"><p>${e[3]}</p><div class="erp-icp-go"><a href="#sources">Sources ↓</a><a href="#one-lead">One lead ↓</a><a href="#journeys">Your journey ↓</a><a href="#${e[5]}">${e[5] === 'today' ? 'Who to call today' : e[5] === 'leaks' ? 'Leaks closed' : 'Every source'} ↓</a></div><p class="erp-icp-door">${door(e, 'btn btn-primary')}</p></div>`).join('')}
</div>`;
const prog = () => `<nav class="erp-prog" data-erp-prog aria-label="On this page"><div class="erp-prog-in">
  <ol>${[['sources', 'Captured'], ['one-lead', 'One lead'], ['record', 'One record'], ['scores', 'Insight'], ['today', 'Action'], ['privacy', 'Privacy']].map(([id, t], i) => `<li><a href="#${id}" data-p="${id}"><b>${i + 1}</b>${t}</a></li>`).join('')}</ol>
  <span class="erp-prog-doors">${ICP.map((e) => door(e, 'btn btn-primary erp-prog-cta crm-door')).join('')}</span>
</div><i class="erp-prog-fill" aria-hidden="true"></i></nav>`;

// Every source, grouped, with a live capture ticker.
const sources = () => `<div class="crm-src" data-gfx>${SOURCES.map(([g, list], gi) => `<div class="crm-src-g" style="--g:${gi}"><p class="pc-tag">${g.toUpperCase()}</p><div>${list.map(([ic, t], i) => `<span style="--i:${i}">${icon(ic)}${t}<i></i></span>`).join('')}</div></div>`).join('')}
  <p class="crm-src-total"><b>${SRC_FLAT.length}</b> sources, captured automatically: matched to an existing customer or created new, given an owner, and started on a journey.</p></div>`;

// Leaks meter.
const meter = () => `<div class="erp-meter crm-meter" data-crmm>
  <p class="erp-meter-t">${icon('activity')}<b>How many leads slip through today?</b></p>
  <label><span>New enquiries a month <b data-o="n"></b></span><input type="range" data-i="n" min="20" max="5000" step="10" value="600"></label>
  <label><span>Followed up within a day, today <b data-o="f"></b></span><input type="range" data-i="f" min="0" max="100" step="5" value="45"></label>
  <div class="erp-meter-bars"><a href="#leaks" data-b="lost"><span>Never followed up properly</span><i><em></em></i><b></b></a></div>
  <p class="erp-meter-total"><span>Sales those could have been</span><b data-o="total"></b></p>
  <a class="btn btn-primary erp-meter-cta" href="#" data-wa="crm" data-wa-extra="" data-crm-cta="meter">Show me every enquiry captured and followed up</a>
  <details class="erp-meter-as"><summary>The assumptions, change them</summary>
    <label>Followed-up enquiries that buy, %<input type="number" data-a="buy" value="10" step="1" min="0"></label>
    <label>Average bill, ₹<input type="number" data-a="bill" value="55000" step="5000" min="0"></label>
  </details>
  <p class="erp-meter-note">A planning estimate from your inputs and these assumptions, not a measurement.</p>
</div>`;

// One lead in seven steps.
const RUN = [
  ['Captured', 'A Meta lead ad, a DM or a showroom visit creates the lead in seconds.', 'megaphone'],
  ['Matched', 'Found on an existing record or household, never duplicated.', 'record'],
  ['Owned', 'Given to a branch and salesperson; the reply clock starts.', 'users'],
  ['Engaged', 'A journey starts: WhatsApp now, an AI call if she does not reply.', 'whatsapp'],
  ['Personalised', 'Scores and next best action pick the pieces and the moment.', 'sparkle'],
  ['Retargeted', 'Her segment updates the Meta audience for the next ad.', 'target'],
  ['Converted', 'A quote she accepts online; the bill lands on her record.', 'check'],
];
const RUN_TAGS = [['megaphone', 'Meta lead ad, 8:14 pm'], ['record', 'Shah household'], ['users', 'Ravi · Andheri'], ['whatsapp', 'Replied in 40 s'], ['sparkle', 'Intent high · bridal'], ['target', 'Audience synced'], ['check', 'Quote accepted']];
const run = () => `<div class="ibx-msg" data-msg style="--n:${RUN.length}">
  <div class="ibx-msg-stage" aria-hidden="true"><div class="ibx-msg-bubble"><p>New lead · “Bridal sets under 5 lakh?”</p><ul>${RUN_TAGS.map(([ic, t], i) => `<li data-k="${i}">${icon(ic)}${t}</li>`).join('')}</ul></div></div>
  <ol class="ibx-msg-steps">${RUN.map(([t, d, ic], i) => `<li data-k="${i}"><span class="ibx-msg-n">${icon(ic)}<b>${i + 1}</b></span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
</div>`;

// The record: everything about her, filling in.
const TL = [['whatsapp', 'Asked for 22K necklaces on WhatsApp'], ['store', 'Visited Andheri, tried 4 pieces'], ['coins', 'Gold plan: 9 of 11 paid'], ['receipt', 'Bought earrings; points added'], ['heart', 'Saved a bridal choker online'], ['receipt', 'Quote sent; accepted online'], ['phone', 'AI call: booked a Saturday visit'], ['gift', 'Anniversary in 24 days']];
const record = () => `<div class="crm-360" data-gfx>
  <div class="crm-360-card"><div class="crm-360-h"><span class="crm-orb-av">M</span><div><b>Meera Shah</b><small>Shah household · 3 people · 1 shared number · Andheri</small></div></div>
    <div class="crm-360-tags">${['22K', 'Bridal', 'Gold plan', 'Gold tier', 'Hindi', 'WhatsApp consent'].map((t, i) => `<span style="--i:${i}">${t}</span>`).join('')}</div>
    <div class="crm-360-nba">${icon('sparkle')}<span><small>Next best action</small><b>Call before her anniversary with the choker she saved</b></span></div></div>
  <ol class="crm-360-tl">${TL.map(([ic, t], i) => `<li style="--i:${i}">${icon(ic)}<span>${t}</span></li>`).join('')}</ol>
</div><p class="ibx-legend">Illustrative. Chats, visits, calls, bills, quotes, carts, wishlists, plans, loyalty and campaigns on one timeline.</p>`;

// Scores.
const SCORES = [['Intent', 82], ['Conversion', 64], ['Engagement', 71], ['Relationship health', 77], ['Churn risk', 12], ['Opportunity', 74], ['Revenue potential', 68], ['Trust risk', 6]];
const scores = () => `<div class="crm-sc" data-gfx>
  <div class="crm-sc-bars">${SCORES.map(([n, v], i) => `<p style="--i:${i};--v:${v}%" class="${/Churn|Trust/.test(n) ? 'is-low' : ''}"><span>${n}</span><i></i><b>${v}</b></p>`).join('')}</div>
  <div class="crm-sc-side">${[['RFM segment', 'Champion'], ['Value tier', 'VIP'], ['Next occasion', 'Anniversary, 24 days'], ['Best time to message', 'Evenings, 7 to 9']].map(([k, v]) => `<p><small>${k}</small><b>${v}</b></p>`).join('')}</div>
</div><p class="ibx-legend">Illustrative values. Scores update as she buys, replies and visits, and are used as filters, triggers and the order of the day’s list.</p>`;

// Who to call today.
const TODAY = [
  ['Meera Shah', 'Anniversary in 24 days · saved a choker', 'Call', 'is-hot'],
  ['Arjun Mehta', 'New lead from a Meta ad · not replied 2 h', 'Reply now', 'is-sla'],
  ['Priya Nair', 'Quote opened 3 times · not accepted', 'Follow up', ''],
  ['Kapoor family', 'Plan matures next week', 'Invite to choose', ''],
  ['Ravi Shah', 'Quiet 11 months · VIP', 'Personal note', ''],
];
const today = () => `<div class="crm-today" data-crmtoday><div class="crm-today-h">${icon('calendar')}<b>Today, for Ravi at Andheri</b><small>Owner digest at 9 am</small></div>
  <ol>${TODAY.map(([n, w, a, c], i) => `<li class="${c}" style="--i:${i}"><span class="crm-today-av">${n[0]}</span><span><b>${n}</b><small>${w}</small></span><em>${a}</em></li>`).join('')}</ol></div>
<p class="ibx-legend">Illustrative. Built from scores, occasions, open quotes and reply-time clocks; follow-up messages are drafted by AI for one tap.</p>`;

// Leaks closed.
const LEAKS = [
  ['Leak', 'users', 'A lead nobody owned', 'Routed to a branch and salesperson the moment it arrives'],
  ['Leak', 'activity', 'An enquiry answered next day', 'Reply clock with breach alerts, and optional reassignment'],
  ['Leak', 'record', 'The same customer three times', 'Matched across channels; duplicates merged'],
  ['Hidden loss', 'gift', 'Anniversaries remembered by nobody', 'Occasions found and journeys triggered'],
  ['Hidden loss', 'receipt', 'Quotes that went quiet', 'Opened, followed up, accepted online'],
  ['Hidden loss', 'coins', 'Plans maturing without a visit', 'On the list before they mature'],
  ['Bottleneck', 'book', 'Typing leads from five apps', '20+ sources captured on their own'],
  ['Bottleneck', 'pie', 'Monthly reports nobody reads', 'Ask in plain words; the answer comes back'],
  ['Bottleneck', 'chat', 'Writing every follow-up', 'Follow-ups drafted by AI for one tap'],
];
const leakCards = () => `<div class="ibx-flips erp-leaks" data-flips>${LEAKS.map(([k, ic, before, after], i) => `<button type="button" class="ibx-flip" style="--i:${i}" aria-pressed="false"><span class="ibx-flip-in"><span class="ibx-flip-f"><span class="ibx-flip-ico">${icon(ic)}</span><small class="erp-leak-k">${k} today</small><b>${before}</b></span><span class="ibx-flip-b"><span class="ibx-flip-ico">${icon('check')}</span><small>In Jwero CRM</small><b>${after}</b></span></span></button>`).join('')}</div><p class="ibx-legend">Each card turns as you scroll. Tap one to turn it back.</p>`;

// Privacy.
const PRIV = [['shield', 'Consent log', 'Who agreed to what, on which channel, kept as history.'], ['download', 'Export and erasure', 'Customer data requests handled; erasure anonymises, financial records kept.'], ['eye', 'Masking', 'Personal details masked where they should not show.'], ['bot', 'AI data policy', 'Rules for what customer data AI may use.'], ['key', 'Field permissions', 'Sensitive fields visible only to chosen roles.'], ['book', 'Audit logs', 'Security and role changes recorded.'], ['refresh', 'Retention', 'Data kept only as long as your policy says.'], ['store', 'Branch ownership', 'Each customer belongs to a branch.']];
const privacy = () => L.cards(PRIV.map(([ic, title, text]) => ({ icon: ic, title, text })), 4);

const WHO = { c: ['Customer', 'is-c'], a: ['Jwero', 'is-a'], h: ['Your team', 'is-h'] };
const PATHS = [
  ['An anniversary nobody forgot', [['Her anniversary found from her first purchase', 'a', 'gift'], ['On Ravi’s list 24 days ahead', 'a', 'calendar'], ['Ravi calls with the choker she saved', 'h', 'phone'], ['She visits on Saturday', 'c', 'store'], ['Bill and points on her record', 'a', 'check']]],
  ['A lead that would have gone cold', [['Meta lead ad at 8:14 pm', 'c', 'megaphone'], ['Captured, matched and owned in seconds', 'a', 'record'], ['WhatsApp reply in 40 seconds', 'a', 'whatsapp'], ['No reply; AI call the next morning', 'a', 'bot'], ['Visit booked; reply clock stopped', 'h', 'check']]],
  ['From a store sign-in to a bridal sale', [['Signs in on your store with a one-time code', 'c', 'store'], ['Views six bridal sets', 'c', 'heart'], ['Intent rises; segment updates the Meta audience', 'a', 'target'], ['Sees your ad, asks a product question', 'c', 'chat'], ['Quote accepted online', 'c', 'check']]],
  ['A VIP drifting away', [['Churn risk rises after 11 months quiet', 'a', 'activity'], ['On the owner’s morning digest', 'a', 'pie'], ['A personal note drafted by AI', 'a', 'sparkle'], ['Owner sends it with a loyalty bonus', 'h', 'users'], ['He returns for his daughter’s wedding', 'c', 'check']]],
  ['A data request handled', [['A customer asks to see her data', 'c', 'chat'], ['Export request logged', 'a', 'download'], ['Sent from the record', 'h', 'send'], ['Later she asks to be forgotten', 'c', 'shield'], ['Anonymised; financial records kept', 'a', 'check']]],
];
const paths = () => `<div class="ibx-jr" data-jr>
  <div class="ibx-jr-tabs" role="tablist">${PATHS.map(([t], i) => `<button type="button" role="tab" data-jr-tab="${i}" aria-selected="${i === 0}">${t}</button>`).join('')}</div>
  ${PATHS.map(([t, steps], i) => `<div class="ibx-jr-panel${i === 0 ? ' is-on' : ''}" role="tabpanel" data-jr-panel="${i}"><h3>${t}</h3><ol class="ibx-jr-path">${steps.map(([x, k, ic], j) => `<li class="${WHO[k][1]}" style="--j:${j}"><span class="ibx-jr-node">${icon(ic)}</span><em>${WHO[k][0]}</em><span>${x}</span></li>`).join('')}</ol></div>`).join('')}
  <p class="ibx-legend"><span class="is-c">Customer</span> <span class="is-ai">Jwero</span> on its own · <span class="is-human">Your team</span></p>
</div>`;

const SALES = [['receipt', 'Quotations', 'Revisions, negotiation, discount approval and online acceptance.', '/products/quotations'], ['calendar', 'Appointments', 'Bookings from every channel, on her record.', '/products/meetings'], ['video', 'Video meetings', 'Show pieces live; the call lands on her record.', '/products/meetings'], ['store', 'Showroom visits', 'Walk-ins captured and matched.', '/products/showroom'], ['gift', 'Loyalty and referrals', 'Tiers, points and referral rewards.', '/products/loyalty'], ['flow', 'Pipelines and deals', 'Stages, win scoring and coaching for each deal.', '']];
const sales = () => `<div class="ibx-ch">${SALES.map(([ic, t, d, href]) => `<article><div class="cap-ico">${icon(ic)}</div><h3>${t}</h3><p>${d}</p>${href ? `<a class="erp-more" href="${href}">More →</a>` : ''}</article>`).join('')}</div>`;

const CMP = [
  ['Leads captured', 'Typed in, if at all', 'Forms and email', '20+ sources, automatically'],
  ['Duplicates and families', 'By hand', 'Some merging', 'Matched across channels; households and shared numbers'],
  ['Purchases, plans, occasions', 'Separate sheets', 'Custom fields', 'On the record, from billing and plans'],
  ['Who to call today', 'Memory', 'A task list', 'Morning list from scores, occasions and open quotes'],
  ['Reply time', 'Unknown', 'Some', 'Clock per lead, breach alerts'],
  ['Engagement', 'Manual', 'Email tools', 'Journeys, WhatsApp, AI calls and Meta audiences'],
  ['Insight', 'Monthly report', 'Dashboards', 'Ask in plain words; next best action'],
  ['Privacy', 'None', 'Some', 'Consent log, data requests, masking, permissions, audit'],
];
const cmpTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Excel or a register</th><th>Generic CRM</th><th>Jwero CRM</th></tr></thead><tbody>${CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>
<p class="cta-note" style="margin-top:12px">See <a href="/compare/jwero-vs-zoho-crm">Jwero vs Zoho CRM</a> and <a href="/compare/jwero-vs-zithara">Jwero vs Zithara</a>.</p>`;

const HOW = [
  ['Send us your list', 'Excel, CSV, phone contacts or an export from your current software.'],
  ['We clean and match it', 'Duplicates merged; households and shared numbers linked.'],
  ['Connect your sources', 'WhatsApp, Instagram, ads, forms, the store, calls and the counter.'],
  ['Set owners and clocks', 'Branches, salespeople and the reply-time target.'],
  ['Start with today’s list', 'Each salesperson sees who to contact and why from the first morning.'],
];

const READS = [['/jewellery-lead-management-software', 'Lead management for jewellers'], ['/jewellery-customer-retention-software', 'Customer retention for jewellers'], ['/jewellery-sales-pipeline-software', 'Sales pipeline for jewellers'], ['/jewellery-customer-data-privacy', 'Customer data privacy for jewellers'], ['/best-crm-software-for-jewellery-stores', 'Best CRM for jewellery stores'], ['/products/promotions', 'Personalised Promotions']];

const faqs = [
  { q: 'What is the best CRM for jewellers in 2026?', a: 'The best jewellery CRM captures leads from every channel on its own, knows families, gold plans, purchases and occasions, tells each salesperson who to call today, and keeps consent and data requests in order. Jwero CRM does all of this on one record shared with billing, chat and calls.' },
  { q: 'What is a jewellery CRM?', a: 'A jewellery CRM is customer software built for how jewellery is bought: it keeps households, gold plan balances, purchases, occasions and every chat and call on one record, and tells the team who to contact and why.' },
  { q: 'Which lead sources can a jewellery CRM capture automatically?', a: 'Jwero CRM captures 20+ sources on its own, including WhatsApp, Instagram and Messenger DMs, social comments, website chat and forms, Meta and Google lead forms, Justdial, online store sign-ins, product questions, showroom visits, phone and AI calls, email, video meetings, catalogue views and counter bills.' },
  { q: 'How do jewellers stop losing leads?', a: 'Capture every enquiry automatically, give it an owner at once, and time the first reply. Jwero CRM routes each lead to a branch and salesperson, starts a reply clock with breach alerts, and starts a journey so nobody waits.' },
  { q: 'How do I avoid duplicate customers across WhatsApp, Instagram and the counter?', a: 'Jwero CRM matches a customer across channels and merges duplicates, and lets one phone number belong to several family members, so the record stays single and correct.' },
  { q: 'How do jewellers increase repeat customers?', a: 'Remember occasions, keep gold plan members engaged to maturity, reward loyalty, and reach customers drifting away before they buy elsewhere. Jwero CRM finds occasions, scores churn risk and puts the right customers on each morning’s list.' },
  { q: 'What scores does a jewellery CRM give each customer?', a: 'Jwero CRM keeps intent, conversion, engagement, relationship health, churn risk, opportunity, revenue potential, trust risk, RFM segment, value tier, next occasion and best time to message, plus a next best action.' },
  { q: 'Who should my salespeople call today?', a: 'Jwero CRM builds a daily list from scores, occasions, open quotes, maturing plans and reply clocks, with a morning digest for the owner and AI-drafted follow-ups ready to send.' },
  { q: 'Can a CRM send leads to Meta ads for retargeting?', a: 'Yes. Jwero CRM segments can sync to Meta as custom audiences, so ads reach the customers and enquiries your team is already working.' },
  { q: 'Can I ask my CRM questions in plain words?', a: 'Yes. In Jwero you can ask questions such as “bridal enquiries from Surat this month that did not visit” and get the answer from your own data.' },
  { q: 'Is customer data safe in a jewellery CRM?', a: 'Jwero CRM keeps a consent log per channel, handles customer requests to export or erase data, masks personal details, sets rules for what AI may use, limits sensitive fields by role, and records security and role changes in audit logs.' },
  { q: 'Do I need customer consent before marketing in India?', a: 'You should record consent before marketing and honour requests to see or delete data. Jwero keeps consent per channel and handles these requests; confirm your obligations with your advisor.' },
  { q: 'Can several family members share one phone number?', a: 'Yes. Jwero CRM links a household and lets one number belong to several people, so the bride, her mother and the father who pays are each recognised.' },
  { q: 'Is Jwero better than Zoho CRM or Salesforce for jewellers?', a: 'Generic CRMs know names, notes and deals. Jwero CRM already knows gold plans, purchases, households, occasions, loyalty and every WhatsApp message and call, because billing, chat and calling share one system.' },
  { q: 'Can I import my existing customer list?', a: 'Yes, from Excel, CSV, phone contacts or other software. Jwero’s team cleans it, merges duplicates and links households during onboarding.' },
  { q: 'How much does a jewellery CRM cost?', a: 'Jwero CRM starts with a free trial that includes every module; your price is shown inside your account after the trial.' },
];

const crm = {
  slug: 'products/crm',
  title: 'Jewellery CRM: 20+ Sources Captured, Scored and Engaged Automatically | Jwero',
  description: 'Jewellery CRM: leads from 20+ sources captured automatically, matched to households, owned with a reply clock, scored, engaged by journeys and AI calls, retargeted on Meta, with consent and data requests built in.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero CRM for Jewellers', alternateName: ['Jewellery CRM', 'CRM for jewellers', 'Jewellery lead management software', 'Jewellery customer retention software'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A CRM for jewellers that captures leads from 20+ sources automatically, matches them across channels and households, gives each an owner and reply clock, keeps purchases, gold plans, occasions and every chat and call on one record, scores intent, churn risk and more, builds a daily call list with AI-drafted follow-ups, engages through journeys and AI calls, syncs Meta audiences, and keeps consent, data requests, masking and audit logs.',
    audience: { '@type': 'BusinessAudience', audienceType: 'Jewellery retailers, chains, wholesalers and online jewellery brands' },
    featureList: '20+ automatic lead sources, cross-channel matching, households and shared numbers, customer timeline, occasions, scores, RFM, next best action, pipelines and deals, quotations, appointments, video meetings, reply-time clock and alerts, owner morning digest, whom-to-call list, AI follow-up drafts, journeys on new leads, AI calls, Meta custom audiences, plain-words questions, consent log, data export and erasure, masking, field permissions, audit logs, retention policies',
    dateModified: '2026-10-10',
    url: 'https://jwero.ai/products/crm', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to move a jewellery business to a CRM', step: HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('Jewellery CRM'),
  faqs,
  body: `
${L.hero({
  eyebrow: 'Every source, one customer, the next step',
  h1: 'Every enquiry captured. <span class="h1-turn">Every customer remembered.</span>',
  sub: 'Leads from 20+ sources land on one record in seconds: matched, owned, scored and engaged. Your team sees who to call today and why, AI drafts the follow-up, and Meta ads reach the same people.',
  primary: { href: '#', label: 'Show me every enquiry captured', wa: 'crm' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">What is Jwero CRM?</h2><p>Jwero CRM is a customer system built for jewellers. It captures leads from 20+ sources automatically, matches them to existing customers and households, gives each an owner and a reply clock, and keeps purchases, gold plans, occasions and every chat and call on one record. Scores and a daily list tell the team who to call; journeys, AI calls and Meta audiences engage and retarget; consent and data requests are handled on the record.</p></div></section>

${prog()}

${L.section(`${L.sectionHead('BUILT AROUND HOW YOU RUN', 'I run a…', 'Pick your business. The page puts your journey and your next step first.')}${icpBox()}`, { tone: 'tint', id: 'for-you' })}

${L.section(`${L.sectionHead('CAPTURED AUTOMATICALLY', 'Where do jewellery leads come from?', 'From 20+ places, and every one lands on the same record without anyone typing it.')}${sources()}`, { id: 'sources' })}

${L.section(`${L.sectionHead('ONE LEAD', 'What happens in the first minute of a new lead?', 'Seven steps, from the ad to the bill.')}${run()}`, { tone: 'tint', id: 'one-lead' })}

${L.section(`${L.sectionHead('ONE RECORD', 'What does the CRM know about each customer?', 'Everything she has done with you, on one timeline.')}${record()}`, { id: 'record' })}

${L.section(`${L.sectionHead('INSTANT INSIGHT', 'How does the CRM know who is ready to buy?', 'Scores that update as she buys, replies and visits.')}${scores()}`, { tone: 'tint', id: 'scores' })}

${L.section(`${L.sectionHead('INSTANT ACTION', 'Who should my team call today?', 'A list built every morning, with the reason and the message ready.')}${today()}`, { id: 'today' })}

${L.section(`${L.sectionHead('LEAKS CLOSED', 'Where does a jeweller lose customers today?', 'Nine places, closed on one platform.')}${meter()}${leakCards()}`, { tone: 'tint', id: 'leaks' })}

${L.section(`${L.sectionHead('SELLING', 'What else sits on the record?', 'Quotes, appointments, meetings, visits, loyalty and deals.')}${sales()}`, { id: 'selling' })}

${L.section(`${L.sectionHead('DATA PRIVACY', 'Is customer data safe?', 'Consent, requests, masking, permissions and audit, built in.')}${privacy()}`, { tone: 'tint', id: 'privacy' })}

${L.section(`${L.sectionHead('JOURNEYS', 'Journeys only one platform can run.', 'Five real paths across capture, insight, action and privacy.')}${paths()}`, { id: 'journeys' })}

${L.section(`${L.sectionHead('COMPARE', 'Excel, a generic CRM, or Jwero.', '')}${cmpTable()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to move to a jewellery CRM.', 'Five steps.')}${L.steps(HOW.map(([title, text]) => ({ title, text })))}`)}

${L.section(`${L.sectionHead('READ MORE', 'Guides for your customers.', '')}<div class="erp-map">${READS.map(([h, t]) => `<a href="${h}"><b>${t}</b><span>${h.replace(/^\//, 'jwero.ai/')}</span></a>`).join('')}</div>`, { tone: 'tint' })}

${L.oneSystemBlock([
  'A lead from an ad, a DM and a counter bill from the same person are one record.',
  'Scores use real bills, plans and visits, not just clicks.',
  'The segment your team calls is the audience your ads reach.',
])}

${L.section(`<p class="cta-note" style="text-align:center">Last updated 10 October 2026.</p>`)}

${L.ctaBand('Capture every enquiry. Remember every customer.', 'Connect your WhatsApp and one ad account. We will show tomorrow morning’s list.', 'crm')}
`,
};

module.exports = [crm];
module.exports.heroPiece = () => orbit();
module.exports.parts = { sources, today, scores, privacy, record, meter };
