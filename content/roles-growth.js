const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Roles', '/roles'], [label]];

// ---------------------------------------------------------------------------
// CRM / telecalling executive
// ---------------------------------------------------------------------------

const crmFaqs = [
  { q: 'Does AI decide who to call, or do I still choose?', a: 'AI builds a prioritised call and follow-up list from real data — RFM, scheme due dates, occasions — but you see the reasoning and choose who to actually call. Routine messages and reminder calls go out automatically inside the limits you set, and you choose which kinds need approval.' },
  { q: 'Will AI take over the follow-up messages I send?', a: 'AI sends routine WhatsApp follow-ups automatically: win-backs, scheme reminders, occasion greetings. You choose which kinds are held for you to approve, edit or reject first.' },
  { q: 'What happens to my job if most of the follow-up is automated?', a: 'The messaging and remembering move to AI staff working inside your limits. What stays yours is judgment: which relationship needs a phone call instead of a message, what tone fits which customer, and catching the accounts that need a human read the data can’t give.' },
  { q: 'Can I still message someone who isn’t on today’s AI-suggested list?', a: 'Yes — the prioritised list is a starting point, not a restriction. Every customer’s record and history is visible, and you can reach out to anyone, anytime, inside the same WhatsApp inbox.' },
];

const crmExecutiveRole = {
  slug: 'roles/crm-executive',
  title: 'For CRM & Telecalling Staff: Follow-ups, Automated | Jwero',
  description: 'How a CRM/telecalling executive works inside Jwero: prioritised outreach, automatic follow-ups, and one customer record instead of a notebook and gut feeling.',
  breadcrumbs: BC('CRM / telecalling executive'),
  faqs: crmFaqs,
  body: `
${L.hero({
  eyebrow: 'CUSTOMER & GROWTH · CRM EXECUTIVE',
  h1: 'Stop guessing who to call. Start knowing.',
  sub: 'Today, most follow-up lists are built from memory, a spreadsheet, or whoever comes to mind — and half the base goes untouched between festivals. Jwero works out who to reach and what to say from real customer data, and sends the routine follow-ups automatically, with approval where you want it.',
  primary: { href: '#', label: 'Show me my morning in Jwero', wa: 'roles' },
  secondary: { href: '#', label: 'Send this page to your owner', share: 'A page about how Jwero would change my day at the counter — worth two minutes:' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What changes between a blank call list and a prioritised one.', '')}
  ${L.impactGrid([
    {
      lever: 'Building today’s call list',
      before: 'You scroll a register or a spreadsheet, trying to remember who bought what and when, and who’s overdue for a scheme instalment.',
      after: 'A prioritised list is waiting — customers ranked by RFM, scheme due dates and upcoming occasions, with the reason for each one shown.',
    },
    {
      lever: 'Win-back outreach',
      before: 'Lapsed customers get remembered in bursts, usually around a festival, and the message is the same generic line for everyone.',
      after: 'A personalised win-back message goes out automatically to each lapsed customer, referencing what they actually bought and when.',
    },
    {
      lever: 'Scheme reminders',
      before: 'Instalment reminders depend on someone checking a paper register or an Excel sheet and calling manually, one by one.',
      after: 'Reminders are written from live scheme balances and go out on WhatsApp automatically.',
      link: { href: '/products/gold-schemes', label: 'See gold scheme reminders' },
    },
    {
      lever: 'Occasion outreach',
      before: 'Birthdays and anniversaries are tracked, if at all, in a diary that nobody checks daily.',
      after: 'Occasion dates on the customer record trigger a greeting or offer automatically, inside the limits you set — nothing is forgotten because a page wasn’t turned.',
    },
    {
      lever: 'Sharing a price',
      before: 'A customer asks for a price and it turns into a back-and-forth over chat — numbers typed out, revised, and re-typed until something sticks.',
      after: 'A formal quotation goes out instead — numbered, itemised, with a PDF and a shareable link the customer can open and accept or decline on their own, no call needed.',
      link: { href: '/products/crm', label: 'See the CRM' },
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills this role builds.', '')}
  ${L.cards([
    { title: 'Prioritising with real data, not a gut list', text: 'Reading RFM scores, scheme balances and occasion timing to decide who genuinely needs a call today — instead of starting from a blank page each morning.' },
    { title: 'Setting the voice AI follows', text: 'Routine follow-ups go out automatically, so the skill is setting the tone and rules they follow, and judging which customers need a message written by you.' },
    { title: 'Reading one record instead of six', text: 'Purchase history, scheme status and past conversations sit on one customer card, so a call starts with context instead of an awkward "remind me what you bought."' },
    { title: 'Knowing when a call beats a message', text: 'Some accounts need a human voice, not a WhatsApp text — building the judgment for which relationships those are is what actually moves retention.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'AI does the routine. You decide the rest. That doesn’t change.', '')}
  <p class="lead">What stays yours: deciding who gets called today, judging tone, and catching the customer whose situation the data can’t explain. <a href="/roles#pattern">See why this is true for every role at Jwero →</a></p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete ways to add value with Jwero.', '')}
  ${L.steps([
    { title: 'Work the prioritised list first, every day', text: 'Start from the RFM- and occasion-ranked list instead of memory — it surfaces the accounts most likely to respond today.' },
    { title: 'Read the log instead of writing every message', text: 'Read what the AI sent, and hold for approval the kinds of message you want to shape yourself. It is faster than writing each one cold.' },
    { title: 'Flag which win-backs actually convert', text: 'Feed back which win-back messages land and which don’t — that judgment is what the business can’t get from data alone.' },
    { title: 'Use scheme balances to spot at-risk enrolments', text: 'Check the live gold scheme balances for instalments falling behind, and call those accounts personally before a reminder message is enough.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('CRM EXECUTIVE QUESTIONS', 'Straight answers about this role.', '')}${L.faqBlock(crmFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="roles">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('See the follow-up list for yourself.', 'We’ll walk through a real follow-up list: what goes out on its own, and what you’d keep for approval.', 'roles')}
`,
};

// ---------------------------------------------------------------------------
// Marketing manager
// ---------------------------------------------------------------------------

const marketingFaqs = [
  { q: 'Can I actually tell which channel drove a sale?', a: 'Yes, within what Jwero tracks — WhatsApp, Instagram/Facebook conversations and catalogue shares all sit on the same customer record as the eventual purchase, so you can trace a sale back to the conversation that led to it, instead of guessing.' },
  { q: 'Does Jwero replace my social media scheduling or ad tools?', a: 'No — Jwero isn’t an ad platform or a content calendar. It’s where WhatsApp and Instagram/Facebook conversations turn into managed, trackable relationships once someone messages in, with AI handling replies and follow-ups automatically.' },
  { q: 'Will AI write my campaigns and captions for me?', a: 'AI sends customer-facing messages automatically: replies, follow-ups, reminders. It doesn’t independently plan or launch a campaign. Creative direction and campaign strategy stay yours.' },
  { q: 'Does Jwero predict which campaigns will perform best?', a: 'No — Jwero doesn’t do predictive forecasting today. What it gives you is a clean, shared record of what actually happened, so you can judge performance yourself instead of relying on siloed platform numbers.' },
];

const marketingManagerRole = {
  slug: 'roles/marketing-manager',
  title: 'For Marketing Managers — One Campaign, One Customer Record | Jwero',
  description: 'One campaign, every channel, one record. How a marketing manager works inside Jwero — provable attribution, governed AI replies, no more guessing what worked.',
  breadcrumbs: BC('Marketing manager'),
  faqs: marketingFaqs,
  body: `
${L.hero({
  eyebrow: 'CUSTOMER & GROWTH · MARKETING MANAGER',
  h1: 'One campaign, every channel, one customer record.',
  sub: 'Today, a WhatsApp broadcast, an Instagram DM and a store visit from the same customer look like three different people across three different tools. Jwero puts every channel on one record, so you can see what actually worked instead of guessing.',
  primary: { href: '#', label: 'Show me my morning in Jwero', wa: 'roles' },
  secondary: { href: '#', label: 'Send this page to your owner', share: 'A page about how Jwero would change my day at the counter — worth two minutes:' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What changes when every channel shares one record.', '')}
  ${L.impactGrid([
    {
      lever: 'Instagram & WhatsApp enquiries',
      before: 'DMs and WhatsApp messages from a campaign sit unread in separate inboxes, answered late or generically because nobody remembers what the ad promised.',
      after: 'Instagram, Facebook and WhatsApp land in one inbox, with context-aware AI replies sent automatically — nothing goes cold overnight.',
      link: { href: '/products/instagram-facebook', label: 'See Instagram & Facebook' },
    },
    {
      lever: 'Attribution',
      before: 'A sale happens and nobody can say for sure whether it came from the WhatsApp broadcast, the Instagram post, or a walk-in — every channel keeps its own separate numbers.',
      after: 'Conversations and the eventual purchase sit on the same customer record, so you can trace which channel actually led to the sale.',
    },
    {
      lever: 'Catalogue and offers',
      before: 'Sharing a price list means sending a static PDF that’s outdated the moment gold rates move.',
      after: 'A live-price shareable catalogue keeps every shared link accurate to the current gold rate, without you reissuing anything.',
      link: { href: '/products/catalog', label: 'See the catalogue' },
    },
    {
      lever: 'Repeat-customer campaigns',
      before: 'Occasion and win-back campaigns get sent as one generic blast to the whole list, because segmenting by hand takes too long.',
      after: 'Segments build themselves from real fields on the customer record — occasion, RFM, scheme status — so a campaign reaches the right people with the right message.',
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills this role builds.', '')}
  ${L.cards([
    { title: 'Provable attribution instead of guessing', text: 'Reading one record where the Instagram DM, the WhatsApp follow-up and the final sale sit together — building the discipline to trust data over instinct when it comes to what worked.' },
    { title: 'Directing AI replies, not writing every one', text: 'The AI workforce sends first responses and follow-ups automatically. Your skill shifts from typing every message to setting the tone and the limits, and catching what’s off.' },
    { title: 'Segmenting on real customer fields', text: 'Building campaigns off occasion dates, RFM tiers and scheme status instead of one-size-fits-all blasts — a sharper skill than list-building from memory.' },
    { title: 'Managing a live-price catalogue', text: 'Running promotions and shares off a catalogue that updates with the gold rate automatically, instead of manually reissuing price sheets every time the rate moves.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'AI sends the replies. You own the strategy.', '')}
  <p class="lead">What stays yours: campaign strategy, creative direction, and which segment gets which offer — Jwero gives you a clean record of what performed, not a prediction. <a href="/roles#pattern">See why this is true for every role at Jwero →</a></p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete ways to add value with Jwero.', '')}
  ${L.steps([
    { title: 'Check attribution before planning next month’s spend', text: 'Trace last month’s sales back through the customer record to see which channel and campaign actually led there, before deciding where to push next.' },
    { title: 'Build segments off real fields, not guesses', text: 'Use occasion, RFM and scheme-status fields on the customer record to target campaigns — sharper than a single blast to the whole list.' },
    { title: 'Read the action log like a brand editor', text: 'Read what the AI sent for tone and accuracy, adjust its instructions when something is off, and hold any kind of message for approval if you want to.' },
    { title: 'Keep the catalogue current as the face of every campaign', text: 'Point every campaign at the live-price catalogue link instead of a static price list, so nothing you send goes stale.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('MARKETING MANAGER QUESTIONS', 'Straight answers about this role.', '')}${L.faqBlock(marketingFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="roles">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('See attribution on one record.', 'Bring a recent campaign — we’ll show how it would trace through Jwero.', 'roles')}
`,
};

// ---------------------------------------------------------------------------
// E-commerce / D2C manager
// ---------------------------------------------------------------------------

const ecommerceFaqs = [
  { q: 'Do I have to leave Shopify or WooCommerce?', a: 'No — Jwero connects to Shopify, WooCommerce and Unicommerce and syncs stock and orders both ways. It adds channels and live-rate pricing on top of the website you already run; it doesn’t replace it.' },
  { q: 'Does stock sync automatically between my store and Jwero?', a: 'Yes — the Shopify/WooCommerce/Unicommerce connectors sync inventory and orders both ways, so a sale on either side reflects everywhere without manual reconciliation.' },
  { q: 'Can my website show live gold-rate pricing?', a: 'Jwero’s catalogue and pricing follow the live metal rate — something a generic ecommerce platform doesn’t do natively. That pricing logic sits on top of your connected website.' },
  { q: 'Will this replace my role managing the website?', a: 'No — Jwero handles the connections, memory and messaging layer around your website. Merchandising decisions, website design and channel strategy stay with you; AI only handles customer-facing messages, inside the limits you set.' },
];

const ecommerceManagerRole = {
  slug: 'roles/ecommerce-manager',
  title: 'For E-commerce Managers: Shopify Plus What It Lacks | Jwero',
  description: 'Shopify for the website, Jwero for what Shopify can’t do: synced inventory, live-rate pricing, one customer record across channels.',
  breadcrumbs: BC('E-commerce / D2C manager'),
  faqs: ecommerceFaqs,
  body: `
${L.hero({
  eyebrow: 'CUSTOMER & GROWTH · E-COMMERCE / D2C MANAGER',
  h1: 'Shopify for the website. Jwero for what it can’t do.',
  sub: 'A gold-rate-priced ecommerce website, WhatsApp orders and Instagram DMs usually run as three disconnected systems today, each with its own idea of what’s in stock. Jwero syncs them into one inventory and one customer record — without asking you to leave Shopify.',
  primary: { href: '#', label: 'Show me my morning in Jwero', wa: 'roles' },
  secondary: { href: '#', label: 'Send this page to your owner', share: 'A page about how Jwero would change my day at the counter — worth two minutes:' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What changes when the website and the chat share one truth.', '')}
  ${L.impactGrid([
    {
      lever: 'Inventory across channels',
      before: 'Stock counts drift between the Shopify store, WhatsApp orders and the physical counter, because nothing updates the others automatically.',
      after: 'The Shopify/WooCommerce/Unicommerce connector syncs stock and orders both ways, so a sale anywhere reflects everywhere.',
      link: { href: '/platform/integrations', label: 'See the Shopify connector' },
    },
    {
      lever: 'Gold-rate pricing on the website',
      before: 'Repricing the store for a gold-rate move means manually editing every product listing, and it usually happens late.',
      after: 'Catalogue prices follow the live gold rate automatically — something the ecommerce platform alone doesn’t handle.',
    },
    {
      lever: 'DMs and WhatsApp enquiries',
      before: 'Instagram DMs and WhatsApp messages from ad traffic sit in separate inboxes, often answered too late to close the sale.',
      after: 'Both channels land in one inbox with gold-rate-accurate AI replies sent automatically.',
    },
    {
      lever: 'Cart abandonment and win-back',
      before: 'Abandoned carts get, at best, a generic automated discount email — with no memory of who the customer is.',
      after: 'A personal WhatsApp follow-up references the actual cart and the customer’s history, and goes out automatically.',
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills this role builds.', '')}
  ${L.cards([
    { title: 'Omnichannel inventory discipline', text: 'Trusting one synced stock number across website, WhatsApp and counter, instead of reconciling three separate counts by hand at the end of the day.' },
    { title: 'Managing rate-linked pricing at scale', text: 'Understanding how live gold-rate pricing flows into a synced website — a skill a generic ecommerce manager never needs, but a jewellery one does.' },
    { title: 'Turning DMs into a managed, memoried channel', text: 'Directing automatic AI replies to Instagram and WhatsApp enquiries, so conversational commerce runs as a real channel, not an inbox nobody owns.' },
    { title: 'Reading one customer across every touchpoint', text: 'Seeing a buyer’s Shopify order, WhatsApp chat and Instagram DM as one history — sharper judgment on what actually drives repeat purchase.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'AI sends the replies. You own the channel strategy.', '')}
  <p class="lead">What stays yours: merchandising, website design, and channel strategy — Jwero just removes the manual reconciliation between your website and your messaging channels. <a href="/roles#pattern">See why this is true for every role at Jwero →</a></p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete ways to add value with Jwero.', '')}
  ${L.steps([
    { title: 'Connect Shopify/WooCommerce fully, not partially', text: 'Get the connector syncing both stock and orders — partial syncs are where the reconciliation gaps that eat your day come from.' },
    { title: 'Let catalogue pricing follow the live rate', text: 'Stop manually repricing after every gold-rate move — let the catalogue’s live pricing carry through to the connected website.' },
    { title: 'Treat the inbox as your DM front line', text: 'Check the AI’s Instagram and WhatsApp replies during the day, and clear anything you hold for approval quickly, so an ad-driven enquiry never goes cold.' },
    { title: 'Use the one-record view to judge channel ROI', text: 'Trace which channel a repeat customer actually came from using the shared record, before deciding where to put the next ad rupee.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('E-COMMERCE MANAGER QUESTIONS', 'Straight answers about this role.', '')}${L.faqBlock(ecommerceFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site’s own chat button runs on Jwero — <a href="#" data-wa="roles">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Bring your current stack.', 'Tell us what you run today — we’ll show exactly what Jwero adds on top.', 'roles')}
`,
};

module.exports = [crmExecutiveRole, marketingManagerRole, ecommerceManagerRole];
