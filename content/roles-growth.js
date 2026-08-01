const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Roles', '/roles'], [label]];

// ---------------------------------------------------------------------------
// CRM / telecalling executive
// ---------------------------------------------------------------------------

const crmFaqs = [
  { q: 'Does AI decide who to call, or do I still choose?', a: 'AI drafts a prioritised call and follow-up list from real data — RFM, scheme due dates, occasions — but you see the reasoning and choose who to actually call. Nothing is dialled or messaged without a person’s yes.' },
  { q: 'Will AI take over the follow-up messages I send?', a: 'AI drafts WhatsApp follow-ups — win-backs, scheme reminders, occasion greetings — and puts them in an approval queue. You approve, edit or reject each one before it sends.' },
  { q: 'What happens to my job if most of the drafting is automated?', a: 'The drafting and remembering move to AI staff under your approval. What stays yours is judgment: which relationship needs a phone call instead of a message, what tone fits which customer, and catching the accounts that need a human read the data can’t give.' },
  { q: 'Can I still message someone who isn’t on today’s AI-suggested list?', a: 'Yes — the prioritised list is a starting point, not a restriction. Every customer’s record and history is visible, and you can reach out to anyone, anytime, inside the same WhatsApp inbox.' },
];

const crmExecutiveRole = {
  slug: 'roles/crm-executive',
  title: 'For CRM & Telecalling Executives — Follow-ups That Draft Themselves | Jwero',
  description: 'How a CRM/telecalling executive works inside Jwero: prioritised outreach, drafted follow-ups, and one customer record instead of a notebook and gut feeling.',
  breadcrumbs: BC('CRM / telecalling executive'),
  faqs: crmFaqs,
  body: `
${L.hero({
  eyebrow: 'CUSTOMER & GROWTH · CRM EXECUTIVE',
  h1: 'Stop guessing who to call. Start knowing.',
  sub: 'Today, most follow-up lists are built from memory, a spreadsheet, or whoever comes to mind — and half the base goes untouched between festivals. Jwero drafts who to reach and what to say from real customer data, and waits for you to say yes.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('CUSTOMER & GROWTH', 'A day in this role.', '')}
  ${L.impactGrid([
    {
      lever: 'Building today’s call list',
      before: 'You scroll a register or a spreadsheet, trying to remember who bought what and when, and who’s overdue for a scheme instalment.',
      after: 'A prioritised list is waiting — customers ranked by RFM, scheme due dates and upcoming occasions, with the reason for each one shown.',
    },
    {
      lever: 'Win-back outreach',
      before: 'Lapsed customers get remembered in bursts, usually around a festival, and the message is the same generic line for everyone.',
      after: 'A drafted, personalised win-back message sits in your approval queue for each lapsed customer, referencing what they actually bought and when.',
    },
    {
      lever: 'Scheme reminders',
      before: 'Instalment reminders depend on someone checking a paper register or an Excel sheet and calling manually, one by one.',
      after: 'Reminders draft themselves from live scheme balances and wait for your approval before going out on WhatsApp.',
      link: { href: '/products/gold-schemes', label: 'See gold scheme reminders' },
    },
    {
      lever: 'Occasion outreach',
      before: 'Birthdays and anniversaries are tracked, if at all, in a diary that nobody checks daily.',
      after: 'Occasion dates on the customer record trigger a drafted greeting or offer for your review — nothing is forgotten because a page wasn’t turned.',
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills this role builds.', '')}
  ${L.cards([
    { title: 'Prioritising with real data, not a gut list', text: 'Reading RFM scores, scheme balances and occasion timing to decide who genuinely needs a call today — instead of starting from a blank page each morning.' },
    { title: 'Editing AI drafts into your own voice', text: 'Every follow-up arrives as a draft, not a final message — the skill is judging what to keep, what to change, and what tone a specific customer needs.' },
    { title: 'Reading one record instead of six', text: 'Purchase history, scheme status and past conversations sit on one customer card, so a call starts with context instead of an awkward "remind me what you bought."' },
    { title: 'Knowing when a call beats a message', text: 'Some accounts need a human voice, not a WhatsApp text — building the judgment for which relationships those are is what actually moves retention.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'AI drafts. You decide. That doesn’t change.', '')}
  <p class="lead">The parts of this job that were always tedious — remembering who’s due for a call, typing the same reminder forty times, checking a register for scheme balances — are what Jwero’s AI workforce now drafts, inside an approval queue you control, with daily caps and quiet hours set by the business. Nothing reaches a customer without your yes. What stays entirely yours: deciding who actually gets called today, judging the tone a message needs, catching the customer whose situation the data can’t explain, and building the kind of relationship that a drafted message alone never will. The executives who lean into that judgment — not the typing — are the ones this role gets more valuable for, not less.</p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete ways to add value with Jwero.', '')}
  ${L.steps([
    { title: 'Work the prioritised list first, every day', text: 'Start from the RFM- and occasion-ranked list instead of memory — it surfaces the accounts most likely to respond today.' },
    { title: 'Edit drafts instead of rewriting from scratch', text: 'Use the approval queue to shape AI-drafted follow-ups into your voice — faster than writing each one cold, and every edit sharpens future drafts.' },
    { title: 'Flag which win-backs actually convert', text: 'Feed back which win-back messages land and which don’t — that judgment is what the business can’t get from data alone.' },
    { title: 'Use scheme balances to spot at-risk enrolments', text: 'Check the live gold scheme balances for instalments falling behind, and call those accounts personally before a reminder message is enough.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('CRM EXECUTIVE QUESTIONS', 'Straight answers about this role.', '')}${L.faqBlock(crmFaqs)}`)}

${L.ctaBand('See the approval queue for yourself.', 'We’ll walk through a real follow-up list — what’s drafted, what you’d approve.', 'roles')}
`,
};

// ---------------------------------------------------------------------------
// Marketing manager
// ---------------------------------------------------------------------------

const marketingFaqs = [
  { q: 'Can I actually tell which channel drove a sale?', a: 'Yes, within what Jwero tracks — WhatsApp, Instagram/Facebook conversations and catalogue shares all sit on the same customer record as the eventual purchase, so you can trace a sale back to the conversation that led to it, instead of guessing.' },
  { q: 'Does Jwero replace my social media scheduling or ad tools?', a: 'No — Jwero isn’t an ad platform or a content calendar. It’s where WhatsApp and Instagram/Facebook conversations turn into managed, trackable relationships once someone messages in, with AI drafting replies and follow-ups for your approval.' },
  { q: 'Will AI write my campaigns and captions for me?', a: 'AI drafts customer-facing messages — replies, follow-ups, offers — for your approval; it doesn’t independently plan or launch a campaign. Creative direction and campaign strategy stay yours.' },
  { q: 'Does Jwero predict which campaigns will perform best?', a: 'No — Jwero doesn’t do predictive forecasting today. What it gives you is a clean, shared record of what actually happened, so you can judge performance yourself instead of relying on siloed platform numbers.' },
];

const marketingManagerRole = {
  slug: 'roles/marketing-manager',
  title: 'For Marketing Managers — One Campaign, One Customer Record | Jwero',
  description: 'One campaign, every channel, one record. How a marketing manager works inside Jwero — provable attribution, governed AI drafting, no more guessing what worked.',
  breadcrumbs: BC('Marketing manager'),
  faqs: marketingFaqs,
  body: `
${L.hero({
  eyebrow: 'CUSTOMER & GROWTH · MARKETING MANAGER',
  h1: 'One campaign, every channel, one customer record.',
  sub: 'Today, a WhatsApp broadcast, an Instagram DM and a store visit from the same customer look like three different people across three different tools. Jwero puts every channel on one record, so you can see what actually worked instead of guessing.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('CUSTOMER & GROWTH', 'A day in this role.', '')}
  ${L.impactGrid([
    {
      lever: 'Instagram & WhatsApp enquiries',
      before: 'DMs and WhatsApp messages from a campaign sit unread in separate inboxes, answered late or generically because nobody remembers what the ad promised.',
      after: 'Instagram, Facebook and WhatsApp land in one inbox, with AI-drafted, context-aware replies waiting for approval — nothing goes cold overnight.',
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
    { title: 'Directing AI drafts, not writing every reply', text: 'The AI workforce drafts first responses and follow-ups for approval — your skill shifts from typing every message to setting the tone, catching what’s off, and approving fast.' },
    { title: 'Segmenting on real customer fields', text: 'Building campaigns off occasion dates, RFM tiers and scheme status instead of one-size-fits-all blasts — a sharper skill than list-building from memory.' },
    { title: 'Managing a live-price catalogue', text: 'Running promotions and shares off a catalogue that updates with the gold rate automatically, instead of manually reissuing price sheets every time the rate moves.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'AI drafts the replies. You own the strategy.', '')}
  <p class="lead">The repetitive part of this job — answering the tenth "is this available in this size" DM, drafting a follow-up to a cart-abandoner, typing the same offer for different segments — is what Jwero’s AI workforce now drafts, inside an approval queue with daily caps and quiet hours the business sets. Every message waits for a person’s yes before it reaches a customer. What stays yours: campaign strategy, creative direction, brand voice, and the judgment call on which segment gets which offer. Jwero doesn’t predict what will perform — it gives you a clean, honest record of what did, so your judgment about what to run next gets sharper, not replaced.</p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete ways to add value with Jwero.', '')}
  ${L.steps([
    { title: 'Check attribution before planning next month’s spend', text: 'Trace last month’s sales back through the customer record to see which channel and campaign actually led there, before deciding where to push next.' },
    { title: 'Build segments off real fields, not guesses', text: 'Use occasion, RFM and scheme-status fields on the customer record to target campaigns — sharper than a single blast to the whole list.' },
    { title: 'Review the approval queue like a brand editor', text: 'Treat AI-drafted replies and follow-ups as first drafts to sharpen for tone and accuracy, not messages to rubber-stamp.' },
    { title: 'Keep the catalogue current as the face of every campaign', text: 'Point every campaign at the live-price catalogue link instead of a static price list, so nothing you send goes stale.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('MARKETING MANAGER QUESTIONS', 'Straight answers about this role.', '')}${L.faqBlock(marketingFaqs)}`)}

${L.ctaBand('See attribution on one record.', 'Bring a recent campaign — we’ll show how it would trace through Jwero.', 'roles')}
`,
};

// ---------------------------------------------------------------------------
// E-commerce / D2C manager
// ---------------------------------------------------------------------------

const ecommerceFaqs = [
  { q: 'Do I have to leave Shopify or WooCommerce?', a: 'No — Jwero connects to Shopify, WooCommerce and Unicommerce and syncs stock and orders both ways. It adds channels and live-rate pricing on top of the storefront you already run; it doesn’t replace it.' },
  { q: 'Does stock sync automatically between my store and Jwero?', a: 'Yes — the Shopify/WooCommerce/Unicommerce connectors sync inventory and orders both ways, so a sale on either side reflects everywhere without manual reconciliation.' },
  { q: 'Can my storefront show live gold-rate pricing?', a: 'Jwero’s catalogue and pricing follow the live metal rate — something a generic ecommerce platform doesn’t do natively. That pricing logic sits on top of your connected storefront.' },
  { q: 'Will this replace my role managing the storefront?', a: 'No — Jwero handles the connections, memory and messaging layer around your storefront. Merchandising decisions, storefront design and channel strategy stay with you; AI only drafts customer-facing messages for your approval.' },
];

const ecommerceManagerRole = {
  slug: 'roles/ecommerce-manager',
  title: 'For E-commerce & D2C Managers — Shopify Plus Everything It Can’t Do | Jwero',
  description: 'Shopify for the storefront, Jwero for what Shopify can’t do: synced inventory, live-rate pricing, one customer record across channels.',
  breadcrumbs: BC('E-commerce / D2C manager'),
  faqs: ecommerceFaqs,
  body: `
${L.hero({
  eyebrow: 'CUSTOMER & GROWTH · E-COMMERCE / D2C MANAGER',
  h1: 'Shopify for the storefront. Jwero for what it can’t do.',
  sub: 'A gold-rate-priced storefront, WhatsApp orders and Instagram DMs usually run as three disconnected systems today, each with its own idea of what’s in stock. Jwero syncs them into one inventory and one customer record — without asking you to leave Shopify.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('CUSTOMER & GROWTH', 'A day in this role.', '')}
  ${L.impactGrid([
    {
      lever: 'Inventory across channels',
      before: 'Stock counts drift between the Shopify store, WhatsApp orders and the physical counter, because nothing updates the others automatically.',
      after: 'The Shopify/WooCommerce/Unicommerce connector syncs stock and orders both ways, so a sale anywhere reflects everywhere.',
      link: { href: '/platform/integrations', label: 'See the Shopify connector' },
    },
    {
      lever: 'Gold-rate pricing on the storefront',
      before: 'Repricing the store for a gold-rate move means manually editing every product listing, and it usually happens late.',
      after: 'Catalogue prices follow the live gold rate automatically — something the storefront platform alone doesn’t handle.',
    },
    {
      lever: 'DMs and WhatsApp enquiries',
      before: 'Instagram DMs and WhatsApp messages from ad traffic sit in separate inboxes, often answered too late to close the sale.',
      after: 'Both channels land in one inbox with AI-drafted, gold-rate-accurate replies waiting for your approval.',
    },
    {
      lever: 'Cart abandonment and win-back',
      before: 'Abandoned carts get, at best, a generic automated discount email — with no memory of who the customer is.',
      after: 'A drafted, personal WhatsApp follow-up references the actual cart and the customer’s history, waiting in the approval queue.',
    },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills this role builds.', '')}
  ${L.cards([
    { title: 'Omnichannel inventory discipline', text: 'Trusting one synced stock number across storefront, WhatsApp and counter, instead of reconciling three separate counts by hand at the end of the day.' },
    { title: 'Managing rate-linked pricing at scale', text: 'Understanding how live gold-rate pricing flows into a synced storefront — a skill a generic ecommerce manager never needs, but a jewellery one does.' },
    { title: 'Turning DMs into a managed, memoried channel', text: 'Directing AI-drafted replies to Instagram and WhatsApp enquiries under approval, so conversational commerce runs as a real channel, not an inbox nobody owns.' },
    { title: 'Reading one customer across every touchpoint', text: 'Seeing a buyer’s Shopify order, WhatsApp chat and Instagram DM as one history — sharper judgment on what actually drives repeat purchase.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'AI drafts the replies. You own the channel strategy.', '')}
  <p class="lead">The repetitive load in this role — answering the same "is this in stock" DM, manually repricing listings after a gold-rate move, sending a generic abandoned-cart email — is what Jwero’s AI workforce and connectors now handle, with every customer-facing message waiting in an approval queue for your yes, governed by daily caps and quiet hours. What stays yours: merchandising decisions, storefront design, channel strategy, and deciding which conversations need a human touch rather than a drafted reply. Jwero doesn’t replace Shopify or predict demand for you — it removes the manual reconciliation between your storefront and your messaging channels, so your judgment goes toward growth decisions instead of stock-count firefighting.</p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Concrete ways to add value with Jwero.', '')}
  ${L.steps([
    { title: 'Connect Shopify/WooCommerce fully, not partially', text: 'Get the connector syncing both stock and orders — partial syncs are where the reconciliation gaps that eat your day come from.' },
    { title: 'Let catalogue pricing follow the live rate', text: 'Stop manually repricing after every gold-rate move — let the catalogue’s live pricing carry through to the connected storefront.' },
    { title: 'Treat the approval queue as your DM front line', text: 'Review AI-drafted Instagram and WhatsApp replies quickly during the day — the faster the approval, the less an ad-driven enquiry goes cold.' },
    { title: 'Use the one-record view to judge channel ROI', text: 'Trace which channel a repeat customer actually came from using the shared record, before deciding where to put the next ad rupee.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('E-COMMERCE MANAGER QUESTIONS', 'Straight answers about this role.', '')}${L.faqBlock(ecommerceFaqs)}`)}

${L.ctaBand('Bring your current stack.', 'Tell us what you run today — we’ll show exactly what Jwero adds on top.', 'roles')}
`,
};

module.exports = [crmExecutiveRole, marketingManagerRole, ecommerceManagerRole];
