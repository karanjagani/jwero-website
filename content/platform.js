const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Platform', '/platform'], [label]];

const platform = {
  slug: 'platform',
  title: 'Why Jewellers Need an Operating System, Not More Tools | Jwero',
  description: 'Separate tools report problems at month end. A jewellery operating system puts every process, customer journey and touchpoint in one command centre, so you see trouble the day it happens and act on it. Why an OS, and a tour of Jwero.',
  breadcrumbs: [['Home', '/'], ['Platform']],
  faqs: [
    ...require('./journey').why.faqs,
    { q: 'Is Jwero an ERP?', a: 'Both — but as one system, not two. It remembers your customers like a CRM and runs your operations like an ERP (orders, inventory, purchases, repairs, billing), from the same record, so a sale, a scheme payment and a repair all update the one place your team already looks at. Your statutory books stay in Tally or Zoho Books.' },
    { q: 'Can I use only one module, like just WhatsApp?', a: 'Yes. Most businesses start with the Assist scope (customers imported, WhatsApp connected, catalogue published) and expand module by module as each one proves itself.' },
    { q: 'What makes this different from buying a CRM plus a WhatsApp tool plus a catalogue app?', a: 'Separate tools mean separate memories. A WhatsApp tool doesn’t know her gold-plan balance; a CRM doesn’t sell on Instagram. In Jwero, the customer, the catalogue and the channels live on one record, so AI can actually sell instead of just logging.' },
    { q: 'Is there a public API or SSO for enterprise IT?', a: 'Yes to both. Single sign-on with your identity provider and automatic user provisioning are shipped, and webhooks and APIs are available for your own integrations.' },
    { q: 'Isn’t this too complex for a small business?', a: 'The complexity is optional. You can run the whole business on Assist (customers, WhatsApp, catalogue) and never touch the rest. Complexity is available when you want it, never mandatory.' },
    { q: 'My business is unusual — will this fit, or will I be forcing a generic tool?', a: 'Custom fields, price rules and per-branch configuration exist because jewellery businesses aren’t generic. We walk through your setup on a demo before you commit.' },
  ],
  body: `
${L.hero({
  eyebrow: 'WHY AN OS, AND THE TOUR',
  h1: 'Multiple softwares record your business. An operating system lets you run it, live.',
  sub: 'A billing tool knows the bill. A WhatsApp tool knows the chat. A stock sheet knows the piece. None of them sees the whole business, so trouble only shows up in the month-end or quarter-end report. An operating system puts every process, customer journey and touchpoint, across your team, customers, vendors and karigars, in one command centre, so you decide the day something goes off.',
  mock: require('./graphics').orbit(),
})}

${L.section(`${L.sectionHead('THE PRODUCT', 'This is Jwero, running.', 'Operations, Sales, Marketing, Finance and Teams across the top; stock, purchase and the workshop on one screen. A real recording, not a mock-up.')}
<figure class="pvid"><div class="pvid-frame"><video data-pvid muted loop playsinline preload="none" poster="/assets/product/os-overview.webp" width="1280" height="720" aria-label="Screen recording of Jwero: the Stock and Workshop overview with open purchase orders, inventory value, metal value and a stock pulse, then the tabs for Sales, Marketing, Finance and Teams"><source src="/assets/product/os-overview.mp4" type="video/mp4"></video><button type="button" class="pvid-toggle" data-pvid-toggle aria-label="Pause the recording">Pause</button></div>
<figcaption>The Stock and Workshop overview in Jwero: open purchase orders, pieces awaiting receipt, inventory, metal and making value, dead stock and the stock on hand. <a href="/book-demo">Book a demo</a> to see it on your own stock.</figcaption></figure>`, { tone: 'tint' })}

${require('./journey').why.sections}

${(() => {
  const fs = require('fs'), path = require('path');
  const img = (h) => { const k = h.replace(/^\//, '').replace(/\//g, '--'); return fs.existsSync(path.join(__dirname, '..', 'assets', 'og', k + '.jpg')) ? `<img src="/assets/og/${k}.jpg" alt="" loading="lazy" width="1200" height="630">` : ''; };
  const Q = [['Gold moved, and one channel still shows yesterday’s price.', '/platform/pricing-engine'], ['Your best customer went quiet and nobody noticed.', '/platform/customer-memory'], ['Enquiries wait because every reply needs a free hand.', '/platform/ai-workforce'], ['Your accountant types every bill a second time.', '/platform/integrations'], ['A change of software stalls the shop in season.', '/platform/onboarding'], ['A salesperson leaves, and the customer list leaves too.', '/trust/security']];
  const C = [
    ['/platform/pricing-engine', 'Pricing engine', 'One rule reprices every channel the moment the rate moves.', 'Quotes go out at yesterday’s rate and margin is given away on each sale.'],
    ['/platform/customer-memory', 'Customer memory', 'Every purchase, visit and chat on one record, so you know who to call today.', 'Customers drift away quietly, and follow-up depends on someone remembering.'],
    ['/platform/ai-workforce', 'AI workforce and governance', 'Replies, reminders and follow-ups sent on their own, at any hour, inside limits you set.', 'Enquiries wait for a free hand, and you keep hiring for work a system can do.'],
    ['/platform/integrations', 'Integrations', 'Tally, Zoho Books, your website and Meta all read the same record.', 'The same data is typed into every tool, and errors surface at month end.'],
    ['/platform/integrations/tally', 'Tally bridge', 'Bills, returns and payments reach Tally by themselves.', 'Your accountant re-enters every bill, and the books trail the counter.'],
    ['/platform/onboarding', 'Onboarding and support', 'Your data imported for you and your team trained in their language, live in a day.', 'A switch that drags on through your busiest weeks.'],
    ['/trust/security', 'Security and your data', 'Your own database, access set per person, export any time.', 'Your customer list lives on staff phones and leaves when they do.'],
    ['/products', 'Every product', '35 products that read and write this one record.', 'Ten to fifteen subscriptions that never agree with each other.'],
  ];
  return L.section(`${L.sectionHead('WHY THE SHIFT CANNOT WAIT', 'What each part of the operating system saves you, and what going without it costs.', 'Each of these is happening in a jewellery business on separate software today. Start with the one that is costing you most.')}
  <div class="bl-goals bl-goals-3">${Q.map(([q, h]) => `<a href="${h}"><b>${q}</b><i>See how the OS closes it →</i></a>`).join('')}</div>
  <div class="bl-grid" style="margin-top:28px">${C.map(([h, t, d, w]) => `<a class="bl-card" href="${h}">${img(h)}<span class="bl-tag">Platform</span><b>${t}</b><span class="bl-desc">${d}</span><span class="bl-without"><i>Without it</i>${w}</span></a>`).join('')}</div>`, { tone: 'tint' });
})()}

${L.section(
  `${L.sectionHead('THE SYNC TAX', 'What five disconnected tools cost you, in minutes.', 'Nine ordinary questions, answered two ways.')}
  <div class="tbl-wrap"><table class="tbl">
    <thead><tr><th>Question</th><th>Five tools + CSV exports</th><th>One system</th></tr></thead>
    <tbody>
      <tr><td><strong>Who bought last Diwali and hasn’t returned?</strong></td><td>Cross-reference three spreadsheets, if anyone kept them</td><td>One filter, instantly</td></tr>
      <tr><td><strong>What’s her scheme balance right now?</strong></td><td>Call the branch, hope the register is updated</td><td>On her record, live</td></tr>
      <tr><td><strong>Which pieces have sat in the tray two years?</strong></td><td>A physical stocktake</td><td>Ageing view, any time</td></tr>
      <tr><td><strong>Did the WhatsApp enquiry become a sale?</strong></td><td>Unknowable — different systems</td><td>One thread, start to close</td></tr>
      <tr><td><strong>What did this campaign actually sell?</strong></td><td>A guess</td><td>Attributed on the record</td></tr>
      <tr><td><strong>What does the owner see across branches?</strong></td><td>A phone call to each one</td><td>One rollup</td></tr>
      <tr><td><strong>What do we owe this vendor, and what is still to arrive?</strong></td><td>The notebook, then a call to the accountant</td><td>On the vendor’s account, live</td></tr>
      <tr><td><strong>How much gold is with each karigar tonight?</strong></td><td>The khata book, if it is up to date</td><td>The balance, in fine grams</td></tr>
      <tr><td><strong>Did today’s cash match the bills?</strong></td><td>Counted and argued at closing</td><td>Tallied at day-close, by register</td></tr>
    </tbody>
  </table></div>`
)}

${L.section(
  `${L.sectionHead('EVERY DEPARTMENT', 'What changes across the whole jewellery business.', 'The counter, the stock room, the vendor, the workshop, the books and the team run on the same record as the customer.')}
  ${L.compareRows(L.DEPARTMENTS)}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('THE THREE PILLARS', 'Feature depth, organised by promise.', '')}
  ${L.pillarConstellation()}`
)}

${L.governanceStrip()}

${L.section(
  `${L.sectionHead('YOUR TEAM RUNS ON ONE LOGIN TOO', 'Staff chat and calling, built in — not bolted on from Slack.', 'The same platform gives your own team channels, DMs and video calls, so internal coordination doesn’t need a second subscription and a second login.')}
  ${L.cards([
    { title: 'Channels & DMs', text: 'Team channels and direct messages, with unread counts surfaced right in the nav — no separate app to check.' },
    { title: 'Video calls with screen share', text: 'Team calls with screen sharing, a pinnable focus layout for whoever is presenting, and a minimizable window so a call doesn’t block the rest of your work.' },
    { title: 'Ringtones & notifications', text: 'Incoming calls ring, messages toast with sound — the ordinary signals a chat tool needs, present from day one.' },
    { title: 'One login, one record', text: 'Staff chat sits inside the same platform as HR, CRM and the customer inbox — not a Slack or Teams workspace your ops team has to provision and pay for separately.' },
  ], 4)}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('INTEGRATIONS & COEXISTENCE', 'Keep your Tally. Books stay where your CA likes them.', '')}
  ${require('./graphics').tallyFlow()}
  ${L.cards([
    { title: 'Tally', text: 'Bills, returns and payments post to Tally through the bridge. Your accountant’s world doesn’t change.', link: { href: '/platform/integrations/tally', label: 'The accountant page' } },
    { title: 'Zoho Books', text: 'Full accounting bridge for Zoho-first businesses.' },
    { title: 'Shopify / WooCommerce / Unicommerce', text: 'Your online store works from the same product data as the shop, and products can be published to Unicommerce.' },
    { title: 'Stripe, PayPal, Razorpay & Cashfree', text: 'Payment collection worldwide and in India, verified end to end.' },
    { title: 'Meta', text: 'Official WhatsApp Business API, Instagram and Facebook — the channels jewellery sells on.' },
  ], 4)}
  <p style="margin-top:20px"><a class="card-link" href="/platform/integrations">See all integrations →</a></p>`
)}


${L.section(`${L.sectionHead('QUESTIONS EVALUATORS ASK', 'Straight answers for the people who have to sign off.', '')}${L.faqBlock([
  ...require('./journey').why.faqs,
  { q: 'Is Jwero an ERP?', a: 'Both, running as a single system that does the job of a CRM and an ERP at once. It remembers customers like a CRM and runs operations like an ERP, from the same record. Your statutory books stay in Tally or Zoho Books.' },
  { q: 'Can I use only one module, like just WhatsApp?', a: 'Yes. Most businesses start with customers imported, WhatsApp connected and catalogue published, then expand module by module.' },
  { q: 'What makes this different from a CRM plus a WhatsApp tool?', a: 'Separate tools mean separate memories. In Jwero the customer, catalogue and channels live on one record, so AI can sell instead of just logging.' },
  { q: 'Is there a public API or single sign-on (SSO)?', a: 'Yes to both. Single sign-on with your identity provider is shipped, and webhooks and APIs are available for your own integrations.' },
  { q: 'Isn’t this too complex for a small business?', a: 'The complexity is optional — run everything on Assist and never touch the rest.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>
<p class="cta-note" style="margin-top:14px">Evaluating vendors side by side? <a href="/blog/jewellery-software-buyer-checklist">Work through the jewellery software buyer’s checklist →</a></p>`)}

${L.ctaBand('See the operating system on your own data.', 'Bring one real customer scenario to a 15-minute demo — we’ll run it end to end, one record at a time.', 'platform')}
`,
};

const customerMemory = {
  slug: 'platform/customer-memory',
  title: 'Customer Memory: Every Customer on One Record | Jwero',
  description: 'Jwero reads every signal a customer gives, from the counter to WhatsApp to her gold plan, scores her with reasons you can read, and decides who to reach, with what and when, inside limits you set.',
  breadcrumbs: BC('Customer Memory'),
  faqs: [
    { q: 'What does Jwero remember about each customer?', a: 'Everything she does, as a signal: the counter, WhatsApp, the website, gold schemes, girvi, calls, Instagram, occasions. Underneath, structured fields hold the facts: purchases, scheme balance and instalments, birthdays, anniversaries and wedding months, metal and design preferences, consent and best hour per channel.' },
    { q: 'How does it decide who to reach, and when?', a: 'From what she actually does. Jwero reads every purchase, payment, message and visit, and shows your team who is ready to buy, who is drifting and whose occasion is coming, with the reason beside each name. The message then goes out on the channel and at the hour she usually replies.' },
    { q: 'Is this machine learning?', a: 'Every suggestion comes with its reason, so nobody has to trust a black box. You can always ask why a customer is on the list, and you choose what needs your approval.' },
    { q: 'How is this different from a normal CRM?', a: 'Generic CRMs know names and notes. Jwero’s record is jewellery-native: it knows her scheme balance, her daughter’s wedding month and what today’s gold rate means for her budget — as structured fields, every module can act on, not free-text notes.' },
    { q: 'What happens when a salesperson leaves?', a: 'Nothing. The memory belongs to the business, not to a personal phone. Every conversation, preference and promise stays on the record.' },
  ],
  body: `
${L.hero({
  eyebrow: 'CUSTOMER MEMORY',
  h1: 'The memory your best salesperson has. <span class="h1-turn">At business scale.</span>',
  sub: 'Great jewellers always remembered the daughter’s wedding, the taste for temple work, the plan maturing in March. Jwero keeps that memory for every customer, on one record your whole team can read, and it stays with the business.',
  mock: L.mockMemory,
})}

${L.section(
  `${L.sectionHead('ONE CUSTOMER, ONE YEAR', 'How Meera K.’s record builds itself.', 'Nobody fills in a form. Each time she buys, pays, messages or browses, the record learns one more thing, and your team sees all of it together.')}
  ${require('./graphics').memoryJourney()}`
, { id: 'meera' })}

${L.section(
  `${L.sectionHead('WHAT THE RECORD KNOWS', 'Not notes. Fields.', 'Her gold balance, her daughter’s wedding month, her missed instalment — each one a structured column, on every record.')}
  ${L.cards([
    { title: 'Money & plans', text: 'Gold savings balance, instalments paid and missed, maturity dates, lifetime value.' },
    { title: 'Occasions', text: 'Birthdays, anniversaries, wedding months and upcoming family occasions — the reasons jewellery gets bought.' },
    { title: 'Taste', text: 'Metals, purity, styles, price bands, brands browsed and bought — learned from real behaviour.' },
    { title: 'Reachability', text: 'Preferred channel, consent per channel and the hour she usually replies, so people are reached the way they want.' },
    { title: 'Everything she does', text: 'Every view, message, visit, instalment and call, from every channel and the counter, on one record.' },
    { title: 'The "why"', text: 'Every name on the list comes with its reason. Ask why a customer is "at risk" and the record tells you.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('HOW JWERO DECIDES', 'Who to reach, with what, and when — decided from what she actually did.', 'Not a list of fields. What she does becomes who to reach, why, and the message that goes out.')}
  ${L.intelligence()}`
)}

${L.oneSystemBlock([
  'The AI reply on WhatsApp drafts from this record — it knows her scheme balance because schemes and chat share one row, not a sync job.',
  'The catalogue share that goes out matches her recorded taste and budget, not a generic PDF.',
  'The occasion journey that invites her before her daughter’s wedding month reads the same field a salesperson would check at the counter.',
])}

${L.section(
  `${L.sectionHead('', 'Memory is not a report. It is revenue.', '')}
  ${L.steps([
    { title: 'Win-back', text: 'Customers who quietly stopped coming are surfaced with a reason and a suggested invitation — before they buy elsewhere.' },
    { title: 'Occasion selling', text: 'The right customers hear from you before the festival, before the anniversary, before the wedding season — not after.' },
    { title: 'Counter intelligence', text: 'When she walks in, your team greets a known customer: her plan, her taste, her last visit — on one screen.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('MEMORY QUESTIONS', 'What owners and evaluators ask first.', '')}${L.faqBlock([
  { q: 'What does Jwero remember about each customer?', a: 'Everything she does with you, on one record the business owns, with a visible reason for every suggestion. Purchases, scheme balance, occasions, taste, consent and best hour per channel sit underneath as structured fields.' },
  { q: 'How is this different from a normal CRM?', a: 'Generic CRMs know names and notes. Jwero’s record is jewellery-native: it knows her scheme balance, her daughter’s wedding month and what today’s gold rate means for her budget — as structured fields every module can act on, not free-text notes.' },
  { q: 'What happens when a salesperson leaves?', a: 'Nothing. The memory belongs to the business, not to a personal phone. Every conversation, preference and promise stays on the record.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.ctaBand('Give your business a memory.', 'We import your customers from Excel or your current software, and the record starts filling in from the first bill and the first message.', 'memory')}
`,
};

const pricingEngine = {
  slug: 'platform/pricing-engine',
  title: 'Live Gold Rate Pricing: Rate, Making Charge & Stone Rules | Jwero',
  description: 'Every price in Jwero comes from the live rate and your rules, the same on every channel, with overrides approved and logged.',
  breadcrumbs: BC('The Pricing Engine'),
  faqs: [
    { q: 'How does Jwero calculate a price?', a: 'From the live rate for the purity and your rules for making, stones and anything else you charge. The same price shows on every channel, and overrides are approved and logged.' },
    { q: 'Which purities does the rate card support?', a: 'Whatever your business sells — 24K, 22K, 916, 18K, 14K and more, each with its own rate. Rates can be entered manually each session (a common am/pm pattern) or pulled from a live feed; you choose per metal.' },
    { q: 'Can making charges differ by category, or does everyone pay one formula?', a: 'Making charges work the way you charge them, set per category or product, not one formula forced onto everything you sell.' },
    { q: 'How are diamonds and gemstones priced, bundled into the metal rate?', a: 'No. Stones are priced separately from the metal and can be tied to the certificate on file so the price and the paperwork agree.' },
    { q: 'Can the same piece show a different price on WhatsApp than on the website or in-store?', a: 'It can, if you set it up that way, by channel, branch or customer tier. Most businesses keep one price everywhere; the option to vary exists when you need it.' },
    { q: 'What stops a salesperson from just typing in a lower number?', a: 'An override request, not a free-text field. It needs a reason and an approval, and every override is on the record: who asked, who approved, what changed.' },
    { q: 'If a customer disputes a price a week later, can we show how we got there?', a: 'Yes. The rate the piece was priced at and any override are on the record. That is the answer to a dispute, not a reconstruction from memory.' },
  ],
  body: `
${L.hero({
  eyebrow: 'THE PRICING ENGINE',
  h1: 'Every price, explainable. <span class="h1-turn">Every override, on the record.</span>',
  sub: 'A jewellery price is never just a number. It is today’s rate, the purity and the way you charge. Jwero prices every piece from the live rate and your rules, the same on every channel, every time.',
})}

${L.section(
  `${L.sectionHead('WHERE A PRICE COMES FROM', 'The live rate and your rules.', 'Say it out loud to a jeweller and it sounds obvious, because it is how the trade has always priced. The difference is that Jwero does it for every piece, at the speed of a WhatsApp reply.')}
  ${L.cards([
    { title: 'The live rate, by purity', text: 'A rate for every metal and purity you sell, entered by you or fed from a live source, your choice.' },
    { title: 'Your rules', text: 'Making charges the way you charge them, stones priced separately, and wastage where you apply it, set per category so nothing is forced onto everything you sell.' },
    { title: 'Overrides, approved and logged', text: 'Anything outside your rules needs a reason and an approval, and every override is on the record.' },
  ])}`
)}

${L.oneSystemBlock([
  'Update the day’s gold rate once, and the WhatsApp catalogue, the website and the counter reprice together — not three separate updates that drift out of sync.',
  'The making-charge and stone rules that price a catalogue reply on WhatsApp are the same rules the invoice uses — no separate "online price" spreadsheet to keep in step.',
  'An override approved at one branch shows up in the same audit log the owner checks from anywhere — not a paper chit in a drawer.',
])}

${L.section(
  `${L.sectionHead('WHERE PRICE CAN VARY, ON PURPOSE', 'Consistency where you want it. Flexibility where you grant it.', '')}
  ${L.cards([
    { title: 'By channel', text: 'Store, website, WhatsApp, marketplace and POS can each carry their own price where you want them to. Most businesses keep one price everywhere; the option exists for the ones who need it.' },
    { title: 'By branch or region', text: 'One price under owner control, with branch or region exceptions that go through approval, not five branches quietly drifting apart.', link: { href: '/products/multi-store', label: 'See Multi-store & Franchise' } },
    { title: 'By customer tier', text: 'Standard, and loyalty tiers above it, can carry their own pricing where a business chooses to reward them that way.', link: { href: '/products/loyalty', label: 'See Loyalty & Referrals' } },
    { title: 'By promotion', text: 'Promo codes and quantity price-breaks live in the same place, not in a separate system a salesperson has to remember.' },
  ], 4)}`
)}

${L.section(
  `${L.sectionHead('', 'Every override, checked and logged.', 'Every jewellery counter has had the moment: a good customer, a bit more discount than the price allows. The question is whether that moment leaves a record or a mystery.')}
  ${L.steps([
    { title: 'Requested', text: 'A salesperson submits an override with the price they want to offer and a reason, not a blank field to type any number into.' },
    { title: 'Approved', text: 'Someone you choose approves or declines it, so an exception is a decision, not a habit.' },
    { title: 'Logged', text: 'Approved or declined, it is on the record: who asked, who decided, and exactly what changed, the same record a dispute or an audit would need.' },
  ])}`
, { tone: 'tint' })}


${L.section(`${L.sectionHead('PRICING ENGINE QUESTIONS', 'What owners and evaluators ask first.', '')}${L.faqBlock([
  { q: 'How does Jwero calculate a price?', a: 'From the live rate for the purity and your rules for making, stones and anything else you charge. The same price on every channel, and overrides approved and logged.' },
  { q: 'Can making charges differ by category?', a: 'Yes. Making charges work the way you charge them, set per category or product. Not one formula forced onto everything.' },
  { q: 'How are diamonds and gemstones priced?', a: 'Separately from the metal, and they can be tied to the certificate on file so the price and the paperwork agree.' },
  { q: 'What stops a salesperson from just typing a lower number?', a: 'An override request with a reason and an approval, not a free-text field.' },
  { q: 'Can we show how a price was reached if a customer disputes it later?', a: 'Yes. The rate the piece was priced at and any override are on the record.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.ctaBand('See your own catalogue priced this way.', 'Bring one real product and we’ll show it priced at the live rate, with your rules, in front of you.', 'pricingengine')}
`,
};

const aiWorkforce = {
  slug: 'platform/ai-workforce',
  title: 'AI Workforce for Jewellers: AI Agents That Get Business Done | Jwero',
  description: 'Jwero’s AI workforce answers customers, follows up, runs campaigns, flags stock and reports, on its own, across your business. You choose what runs autonomously, what needs approval and where you want more control.',
  breadcrumbs: BC('AI Workforce'),
  faqs: [
    { q: 'What can the AI workforce do?', a: 'Reply to customers on WhatsApp, Instagram and web chat with pieces at today’s rate, by text or voice; follow up enquiries, quotes and instalments; invite customers before occasions and win back the ones who drifted; run campaigns and journeys; write posts and ad copy; flag stock that stops moving and orders running late; prepare purchase orders; produce the morning brief and the weekly growth report; and keep team tasks and HR workflows moving.' },
    { q: 'Does it work on its own, or wait for me?', a: 'It works on its own. Replies, follow-ups, reminders, flags and reports run inside the daily caps and quiet hours you set, and every action is logged. You choose which kinds of action need approval first, such as offers, ad spend or purchase orders, per kind of action, per agent and per branch.' },
    { q: 'Will AI replace my sales team?', a: 'No. The AI workforce does the remembering, the follow-up and the routine work your team never has time for; your people do the selling, and they sell more when every customer walks in already known.' },
    { q: 'What if the AI gets something wrong?', a: 'It works from your catalogue, your prices and the customer’s record, so it does not make up facts. Every action is on the record, caps and quiet hours are hard limits, and you can put any kind of action on approval or stop it in one tap.' },
    { q: 'Can the AI give a discount on its own?', a: 'No. Prices and discounts follow your price rules and staff permissions. The AI sells at your prices; a discount beyond the limit you set waits for the person you name.' },
    { q: 'Can I stop it?', a: 'Yes, instantly: one kind of action, one agent, one branch, one channel, or everything.' },
    { q: 'How does it sound like my shop?', a: 'It works from your catalogue, your prices, your policies and your past conversations, the same context a new employee would need, and it never forgets any of it.' },
    { q: 'Does the AI voice agent speak my customers’ languages?', a: 'Yes. Chat, voice and phone calls all run in the same languages, including Hindi, Arabic and English.' },
  ],
  body: `
${L.hero({
  eyebrow: 'AI WORKFORCE',
  h1: 'An AI workforce that <span class="h1-turn">gets business done.</span>',
  sub: 'From customer follow-ups and campaigns to stock, reports and team workflows, Jwero’s AI agents work across your business. Choose what runs on its own, what needs approval, and where you want more control.',
  mock: L.mockApproval,
})}

${L.section(
  `${L.sectionHead('ONE AI WORKFORCE', 'Work across your business.', 'Real work the agents do today, grouped by the part of the business it belongs to, with the control setting most jewellers use for each.')}
  ${require('./graphics').aiCapabilities()}
  <div class="cta-row center" style="margin-top:28px"><a class="btn btn-primary" href="#" data-wa="ai">See the AI workforce in action</a><a class="btn btn-ghost" href="#ai-control">How you set the level of control</a></div>`
, { id: 'ai-capabilities' })}

${L.section(
  `${L.sectionHead('START TO FINISH', 'One job, done end to end.', 'An agent notices a trigger, uses what the business already knows, acts, records the outcome and reports it. It asks a person only where your policy says so.')}
  ${require('./graphics').aiRun()}`
, { tone: 'tint', id: 'ai-flow' })}

${L.section(
  `${L.sectionHead('AUTONOMY AND CONTROL', 'Let AI run. Set the level of control.', 'Two settings for every kind of work. Switch between them and watch the same task behave differently.')}
  ${require('./graphics').aiModes()}`
, { id: 'ai-control' })}

${L.governanceStrip()}

${L.section(
  `${L.sectionHead('WHAT MAKES AUTONOMY SAFE', 'The layer that lets it run.', 'Governance is not the reason to use the AI workforce. It is what makes running it on its own practical in a jewellery business.')}
  ${L.cards([
    { icon: 'key', title: 'Permissions and approval rules', text: 'Each agent has the actions it may take. Any kind of action can be put on approval, for the person you name.' },
    { icon: 'tools', title: 'Control per agent and per action', text: 'Reminders on their own, offers on approval, a new agent on assist until you have seen its work. Changed in a tap, any time.' },
    { icon: 'book', title: 'A record of every action', text: 'What was sent, flagged or prepared, to whom, when, and who approved it where approval was asked for. On the customer record and in one log.' },
    { icon: 'moon', title: 'Quiet hours and daily caps', text: 'Nobody hears from you at 11 pm, and no agent sends more than the cap you set, however busy the day.' },
    { icon: 'power', title: 'One switch to stop', text: 'Stop one kind of action, one agent, one branch, one channel or everything, instantly, and start it again when you are ready.' },
    { icon: 'branches', title: 'Branch and team settings', text: 'Head office sets the rules; a branch or a team can be given more room or less, within them.' },
  ], 3)}
  <p class="cta-note" style="text-align:center;margin-top:22px"><a class="btn btn-ghost" href="#" data-wa="ai">Explore permissions and control settings with us</a></p>`
, { tone: 'tint', id: 'ai-governance' })}

${L.section(`${L.sectionHead('QUESTIONS OWNERS ASK', 'Straight answers.', '')}${L.faqBlock([
  { q: 'Does it work on its own, or wait for me?', a: 'It works on its own, inside the daily caps and quiet hours you set, with every action logged. You choose which kinds of action need approval first, per kind of action, per agent and per branch.' },
  { q: 'Will AI replace my sales team?', a: 'No. The AI workforce does the remembering, the follow-up and the routine work; your people do the selling, and they sell more when every customer walks in already known.' },
  { q: 'What if the AI gets something wrong?', a: 'It works from your catalogue, prices and the customer’s record, every action is on the record, and you can put any kind of action on approval or stop it in one tap.' },
  { q: 'Can the AI give a discount on its own?', a: 'No. Prices and discounts follow your price rules and staff permissions; a discount beyond your limit waits for the person you name.' },
  { q: 'What about my oldest customers?', a: 'Put your biggest families on “ask me first”. Their messages wait for you; everything else carries on by itself.' },
  { q: 'Does the AI voice agent speak my customers’ languages?', a: 'Yes. Chat, voice and phone calls all run in the same languages, including Hindi, Arabic and English.' },
])}
<p class="cta-note" style="margin-top:14px">More on AI trust and control? <a href="/faq#ai-trust">See every AI question we’ve been asked →</a></p>`)}

${L.ctaBand('See the AI workforce in action.', 'Bring one real situation, a quiet customer list or a flooded inbox, and watch the agents work on it live.', 'ai')}
`,
};

const integrations = {
  slug: 'platform/integrations',
  title: 'Jwero Integrations: Tally, Shopify, Meta, Stripe, PayPal | Jwero',
  description: 'Jwero bridges to Tally and Zoho Books, connects Shopify, WooCommerce and Unicommerce, collects via Stripe, PayPal, Razorpay and Cashfree, sells on official Meta channels, connects to your telephony provider for AI voice calls and IVR, and lets your own AI agents reach your data with scoped access.',
  breadcrumbs: BC('Integrations'),
  faqs: [
    { q: 'Does Jwero replace Tally?', a: 'No. Tally stays your ledger. Bills, returns and payments post to Tally through the bridge, so your accountant reviews instead of retyping.' },
    { q: 'Can I keep my Shopify store?', a: 'Yes. Connect Shopify and your store works from the same product data as the shop, so Jwero adds WhatsApp, Instagram and memory on top of the store you already run.' },
    { q: 'Is the WhatsApp integration official?', a: 'Yes — Jwero uses the official WhatsApp Business API, with template approvals, consent management and opt-out handling built in.' },
    { q: 'Which telephony providers work for AI voice calls and IVR?', a: 'Jwero connects to your telephony provider; most telephony/CPaaS providers can be connected on request. This only applies to actual phone calls and IVR — voice on WhatsApp and web chat is native to Jwero and needs no telephony provider at all. For the phone channel, Jwero drives the AI conversation and IVR logic — the call itself runs over the line you connect, the same division of labour as WhatsApp (Meta’s API) or payments (Razorpay/Cashfree).' },
  ],
  body: `
${L.hero({
  eyebrow: 'INTEGRATIONS',
  h1: 'Keep what works. Jwero joins in.',
  sub: 'The fastest way to fail a jewellery business is to demand a rip-out. Jwero lands alongside your existing tools, bridges to them, and earns its place — starting with the revenue side.',
  primary: { href: '#', label: 'Ask about your stack', wa: 'integrations' },
  secondary: { href: '/migration', label: 'Visit the Migration Centre' },
  mock: require('./graphics').integrationMap(),
})}

${L.section(
  `${L.cards([
    { title: 'Tally', text: 'The bridge your accountant will approve of: bills, returns and payments arrive in Tally by themselves, and the books stay exactly where they are.', link: { href: '/platform/integrations/tally', label: 'The accountant page' } },
    { title: 'Zoho Books', text: 'Full accounting bridge for Zoho-first businesses.' },
    { title: 'Shopify', text: 'Your store works from the same product data. Keep the store, add the channels and the memory.' },
    { title: 'WooCommerce', text: 'Connector for WordPress-based stores.' },
    { title: 'Unicommerce', text: 'Publish products to Unicommerce for marketplace-heavy operations.' },
    { title: 'Razorpay & Cashfree', text: 'Payment collection for website checkout, verified end to end.' },
    { title: 'Meta (WhatsApp, Instagram, Facebook)', text: 'Official APIs for the channels where jewellery actually sells today.' },
    { title: 'Your telephony provider', text: 'Telephony connectors that carry Jwero’s AI voice agent — outbound/inbound calls and IVR menus — over a line you already run.', link: { href: '/products/ai-sales-agents', label: 'See voice & IVR' } },
    { title: 'Your ERP export', text: 'Customers and catalogue import from Excel/CSV exports of practically any jewellery ERP.' },
  ], 4)}`
)}

${L.section(
  `${L.sectionHead('BRING YOUR OWN AI AGENT', 'Your own AI agent can work from Jwero too.', 'Alongside the AI workforce built into Jwero, you can connect an AI agent of your own, such as Claude or your own tooling, to your live data through the open MCP standard.')}
  ${L.cards([
    { title: 'Reads broad, writes conservative', text: 'Your agent can read widely; what it may change is deliberately narrow, and money, stock movements and payments stay with people.' },
    { title: 'Your own connect flow', text: 'A guided connect flow and an in-product API-keys page let your team or a technical partner set this up without engineering help from us.' },
    { title: 'Permission-scoped per key', text: 'Access is scoped per key and membership, under the same permission model that governs every other user in Jwero.' },
  ], 3)}
  <p style="margin-top:16px; font-size:.9rem; color:var(--ink-2);">This is distinct from the built-in AI workforce described on <a href="/platform/ai-workforce">the AI Workforce & Governance page</a>: that is Jwero’s own AI working inside your business, inside your limits; this is the door for an agent of your choosing to reach the same data from outside.</p>`
, { tone: 'tint' })}



${L.section(`${L.sectionHead('INTEGRATION QUESTIONS', 'What changes in your stack.', '')}${L.faqBlock([
  { q: 'Does Jwero replace Tally?', a: 'No. Tally stays your ledger. Bills, returns and payments post to Tally through the bridge, so your accountant reviews instead of retyping.' },
  { q: 'Can I keep my Shopify store?', a: 'Yes. Connect Shopify and your store works from the same product data as the shop, so Jwero adds WhatsApp, Instagram and memory on top of the store you already run.' },
  { q: 'Is the WhatsApp integration official, or a ban risk?', a: 'Official WhatsApp Business API — template approvals, consent management and opt-out handling are built in, which is what keeps it out of ban-risk territory.' },
  { q: 'Can I connect my own AI agent to Jwero data?', a: 'Yes — an AI agent of your choosing can be given scoped access to your Jwero data, with a guided connect flow and an API-keys page in-product.' },
  { q: 'Does Jwero support IVR and AI voice calls?', a: 'Yes — connect your telephony provider, and Jwero’s AI voice agent runs outbound/inbound phone calls and IVR menus over that line. Voice on WhatsApp and web chat is separate and fully native to Jwero, with no telephony connection needed. See <a href="/products/ai-sales-agents">AI Sales Agents & Voice</a> for what the agent actually does on each channel.' },
])}`)}

${L.ctaBand('Tell us your stack.', 'Send the list of tools you run today — we will map exactly what stays, what bridges, and what Jwero takes over.', 'integrations')}
`,
};

const tally = {
  slug: 'platform/integrations/tally',
  title: 'Tally Integration for Jewellers: Keep Your Books | Jwero',
  description: 'Jwero bridges to Tally so your books stay exactly where your CA likes them. Jwero runs sales, stock, purchase and the workshop; Tally keeps the ledger.',
  breadcrumbs: [['Home', '/'], ['Platform', '/platform'], ['Integrations', '/platform/integrations'], ['Tally']],
  faqs: [
    { q: 'Will switching to Jwero disrupt my accountant’s workflow?', a: 'No. That is the point of the bridge. Bills, returns and payments post to Tally through the bridge, in the shape your accountant already expects, so your accountant reviews entries instead of typing them.' },
    { q: 'What exactly syncs to Tally?', a: 'Bills, returns and payments post to Tally through the bridge, and your customers and items stay consistent between the two. Nothing is typed twice.' },
    { q: 'Do I have to stop using Tally to start using Jwero?', a: 'No — this is the entire design. Keep Tally as your ledger of record; Jwero takes over customers, channels, schemes and follow-up alongside it.' },
    { q: 'My accountant is sceptical of new software near the books. What do I tell them?', a: 'That nothing about their world changes. They keep filing GST exactly as they do today, in Tally, with bills, returns and payments arriving by themselves instead of re-typed. Invite them to the demo. Most objections dissolve once they see the bridge, not the sales pitch.' },
    { q: 'Does this replace GST filing or e-invoicing?', a: 'No — GST invoicing at the live gold rate happens in Jwero, but statutory filing and e-invoice/IRN stay Tally’s job. Two systems, one clean line.' },
    { q: 'What if our CA wants to keep using their own workflow entirely?', a: 'They can. The bridge changes what arrives in Tally, not how your CA works once it’s there.' },
  ],
  body: `
${L.hero({
  eyebrow: 'KEEP YOUR TALLY',
  h1: 'Apna hisaab rakho. Kamai badlo.',
  sub: 'Keep your books. Change your earnings. Jwero does not ask you to abandon Tally. It runs customers, the counter, stock, purchase and the workshop, and connects to the ledger your CA already trusts.',
  primary: { href: '#', label: 'Ask your accountant question', wa: 'tally' },
  secondary: { href: '/migration', label: 'See the migration plan' },
})}

${L.section(
  `${L.sectionHead('THE DIVISION OF LABOUR', 'Two systems, one clean line.', '')}
  <div class="grid grid-2">
    <div class="card"><h3>Tally keeps</h3><p>Statutory books, GST filings, the ledger of record — everything your accountant already trusts, unchanged.</p></div>
    <div class="card"><h3>Jwero runs</h3><p>Customer memory, WhatsApp and Instagram selling, gold schemes, catalogue, follow-up and the AI workforce — the revenue side.</p></div>
  </div>
  <p style="margin-top:20px; font-size:.95rem; color:var(--ink-2);">Bills, returns and payments post to Tally through the bridge, so your accountant’s month-end starts from entries that are already in the books.</p>`
)}

${L.section(`${L.sectionHead('QUESTIONS ACCOUNTANTS ASK', 'What to tell your CA.', '')}${L.faqBlock([
  { q: 'My accountant is sceptical of new software near the books. What do I tell them?', a: 'That nothing about their world changes. Bills, returns and payments arrive in Tally by themselves, and they review them in Tally exactly as before.' },
  { q: 'Does this replace GST filing or e-invoicing?', a: 'No — GST invoicing at the live rate happens in Jwero; statutory filing and e-invoice/IRN stay Tally’s job. Two systems, one clean line.' },
  { q: 'Can our CA keep their own workflow?', a: 'Yes — the bridge changes what arrives in Tally, not how your CA works once it’s there.' },
])}
<p class="cta-note" style="margin-top:14px">Want the full division of labour explained? <a href="/blog/jewellery-software-and-tally">Read the guide to running jewellery software and Tally together →</a></p>`)}

${L.ctaBand('Bring your accountant into the conversation.', 'We are happy to walk your CA through exactly what moves to Jwero and what stays in Tally.', 'tally')}
`,
};

const onboarding = {
  slug: 'platform/onboarding',
  title: 'Onboarding & Support — Live in a Day, Trained in Your Language | Jwero',
  description: 'How Jwero implementation works: what we import for you, how training runs, and the season change-freeze that protects your busiest months.',
  breadcrumbs: BC('Onboarding & Support'),
  faqs: [
    { q: 'How long does implementation take?', a: 'Days, not months, for the first stage: customers imported, your WhatsApp number connected, catalogue published, greetings going out.' },
    { q: 'Will my team need training?', a: 'If your team can use WhatsApp, they can use Jwero. Training runs by role, live, with a named onboarding contact — not a video library you’re left to figure out alone.' },
    { q: 'Can you implement without disrupting our wedding season?', a: 'Yes — a season change-freeze policy means no disruptive changes during your peak weeks. Go-lives are scheduled around your calendar.' },
    { q: 'What if my older or more senior staff resist the change?', a: 'Start them on one thing: the shared inbox with AI-drafted replies. It makes their day easier immediately — usually the fastest way to convert a sceptic is to make their job less tedious, not to explain the technology.' },
    { q: 'What if my whole team pushes back on new software?', a: 'If they can use WhatsApp, they can use Jwero — that’s deliberate, not a slogan. Training is role-based and live, and the AI workforce takes over the tedious parts (drafting, reminders) so staff feel helped, not surveilled.' },
    { q: 'We tried new software before and it just sat unused. Why would this be different?', a: 'Because Assist gives your team something useful on day one (a shared inbox that answers faster than before) instead of a training manual to read first. Adoption follows usefulness, not a mandate.' },
  ],
  body: `
${L.hero({
  eyebrow: 'ONBOARDING & SUPPORT',
  h1: 'If your team can use WhatsApp, they can run Jwero.',
  sub: 'Set up in a day, settled in a month: customers imported, your WhatsApp number connected, catalogue published and the AI working inside your limits from day one — with a written change-freeze around your season.',
  primary: { href: '#', label: 'Plan your onboarding', wa: 'onboarding' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('THE FIRST MONTH', 'Set up in a day, settled in a month.', '')}
  ${L.steps([
    { title: 'Import', text: 'Set up in a day: customers imported for you, WhatsApp number connected, catalogue published. Nothing ripped out — your billing software stays.' },
    { title: 'Go live', text: 'Enquiries answered in minutes, occasion greetings flowing, first catalogue shares sent.' },
    { title: 'First report', text: 'Your first growth report: who came back, what they bought, what the system did. Judge us on that.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE PROMISES', 'Written here so you can hold us to them.', '')}
  ${L.cards([
    { title: 'We import for you', text: 'Customers, catalogue, scheme members — from any spreadsheet or software export, deduplicated and verified with you.' },
    { title: 'Your number stays', text: 'Your WhatsApp number is part of your reputation. It moves onto the official API; customers notice only faster answers.' },
    { title: 'Season change-freeze', text: 'No disruptive changes during your peak season. The calendar is yours.' },
    { title: 'Role-based training', text: 'Owner, manager and counter staff are trained on what THEY use — live, in your language for support conversations.' },
    { title: 'A named human', text: 'Your onboarding contact has a name and a WhatsApp number from day one.' },
    { title: 'Export anytime', text: 'Your data leaves with you in standard formats whenever you ask.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('TRAINING & ADOPTION QUESTIONS', 'Getting a hesitant team to use it.', '')}${L.faqBlock([
  { q: 'What if my staff resist the change?', a: 'Start them on the shared inbox with AI-drafted replies — it makes their day easier immediately, which converts sceptics faster than any explanation.' },
  { q: 'We tried new software before and it sat unused. Why would this be different?', a: 'Assist gives your team something useful on day one instead of a manual to read first. Adoption follows usefulness, not a mandate.' },
  { q: 'Can you work around our festival-season staffing crunch?', a: 'Yes — the season change-freeze exists precisely so training and go-live never compete with your busiest weeks.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq#support">See every implementation question →</a></p>
<p class="cta-note" style="margin-top:14px">Timing a go-live around the busy months? <a href="/blog/jewellery-software-wedding-season">Read the wedding-season readiness guide →</a></p>`)}

${L.ctaBand('See the onboarding plan for your business.', 'Tell us your team size and busiest season — we’ll map the exact 30-day plan.', 'onboarding')}
`,
};

module.exports = [platform, customerMemory, pricingEngine, aiWorkforce, integrations, tally, onboarding];
