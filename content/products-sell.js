const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

const whatsapp = {
  slug: 'products/whatsapp',
  title: 'WhatsApp Business API Software for Jewellers | Jwero',
  description: 'Official WhatsApp Business API software for jewellers: live-rate catalogues, safe broadcasts, AI replies with approval, payments on your own number.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero WhatsApp Commerce', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Official WhatsApp Business API commerce for jewellery: live-rate catalogues, AI-drafted replies under approval, appointments and payments on your existing number.',
    url: 'https://jwero.ai/products/whatsapp', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('WhatsApp Commerce'),
  faqs: [
    { q: 'Can customers actually buy on WhatsApp?', a: 'Yes. Share catalogues with live prices, take orders and collect payments in the chat. For high-value pieces, WhatsApp books the appointment or the video call — the sale closes wherever the customer is comfortable.' },
    { q: 'Will my number get banned?', a: 'No. Jwero uses the official WhatsApp Business API with approved templates, consent tracking, per-customer message-fatigue limits and instant opt-out handling — the discipline that keeps accounts healthy.' },
    { q: 'Can I keep my existing WhatsApp number?', a: 'Yes, and you should — that number is part of your reputation. We migrate it onto the official API.' },
    { q: 'How is this different from WATI or other WhatsApp tools?', a: 'Those tools send messages. They don’t know her purchase history, her scheme balance, or what a gram of 22k costs today. Jwero replies come from a system that knows the customer and the jewellery — because they share one record.' },
    { q: 'What does this replace, work with, and cost?', a: 'It replaces unofficial bulk-messaging tools and personal-phone selling. It works alongside your existing WhatsApp number and your billing software. Pricing sits inside Jwero’s tiers — see /pricing for the structure.' },
    { q: 'What if Meta changes WhatsApp’s rules tomorrow?', a: 'Your customer records, catalogue and history live in Jwero, not inside the channel. Channels can change; your data and relationships don’t move with them — that’s the point of owning the record separately from the app.' },
    { q: 'Will older customers actually buy this way?', a: 'They already send your salespeople "rate kya hai?" on WhatsApp today. This just makes sure those chats get answered fast, recorded properly, and actually closed.' },
    { q: 'Do I have to manage the AI drafts myself all day?', a: 'No — approve in batches when it suits you, or promote low-risk reply types to send automatically once you trust the pattern. You set the pace.' },
  ],
  body: `
${L.hero({
  eyebrow: 'WHATSAPP COMMERCE',
  h1: 'Your counter is now open 24 hours a day.',
  sub: 'Jewellery is bought on trust and conversation — which is why it is bought on WhatsApp. Jwero turns your number into a full counter — live-price catalogues, knowledgeable replies in minutes, appointments, payments and follow-up — officially, safely, at scale.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'whatsapp' },
  secondary: { href: '/tools/whatsapp-revenue-estimator', label: 'Try the Revenue Estimator' },
  note: 'The demo IS a WhatsApp conversation.',
  mock: L.mockChatCatalog,
})}

${L.section(
  `${L.sectionHead('THE LEAK YOU CANNOT SEE', 'Every unanswered enquiry buys from someone else.', '')}
  ${L.cards([
    { title: 'The 11pm enquiry', text: 'She messages three jewellers at night. The one who answers first with a real price usually wins. Your store is asleep; your competitor’s system is not.' },
    { title: 'The personal-phone trap', text: 'Enquiries live on salespeople’s personal numbers. No history, no handover, and when they resign — no customers.' },
    { title: 'The broadcast graveyard', text: 'Festival blasts from unofficial tools get numbers banned and customers annoyed. Volume is not marketing.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('HOW IT WORKS', 'From "do you have…?" to "see you Saturday."', '')}
  ${L.steps([
    { title: 'Connect your number', text: 'Your existing WhatsApp number moves onto the official Business API. Customers notice nothing — except faster answers.' },
    { title: 'AI drafts, you approve', text: 'Every enquiry gets a draft reply that knows the customer and today’s metal rate. Your team approves with one tap — until you decide some replies can flow on their own.' },
    { title: 'Sell in the chat', text: 'Live-price catalogues, order collection, payment links, appointment booking and automatic follow-up on every conversation that goes quiet.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('BUILT FOR JEWELLERY, NOT JUST CHAT', 'What generic WhatsApp tools cannot do.', '')}
  ${L.cards([
    { title: 'Prices that breathe', text: 'Catalogue prices update with the metal rate. No more "price on request" or stale PDFs.' },
    { title: 'Memory in every reply', text: 'Replies know her purchases, plan balance and taste — because the record and the chat are one system.' },
    { title: 'Broadcasts with manners', text: 'Consent, fatigue limits and quiet hours per customer. Reach thousands without burning your number or your name.' },
    { title: 'Scheme conversations', text: 'Instalment reminders, balance checks and maturity congratulations — the messages customers thank you for.' },
    { title: 'Group selling', text: 'Curated customer groups for launches and festivals, managed from the same inbox.' },
    { title: 'One inbox, whole team', text: 'Every conversation visible, assignable and owned by the business — with role-based access.' },
  ])}`
)}

${L.oneSystemBlock([
  'The AI reply knows her scheme balance because schemes and chat share one record — no integration, no sync.',
  'When she buys, the catalogue price, the invoice and the loyalty points all write back to the same customer card.',
  'Her occasion journey — the anniversary invite next year — reads the same channel-preference field this conversation is updating right now.',
])}

${L.section(`${L.sectionHead('WHATSAPP QUESTIONS', 'Bans, rule changes, and what sets this apart.', '')}${L.faqBlock([
  { q: 'Will my number get banned?', a: 'No. Jwero uses the official WhatsApp Business API with approved templates, consent tracking and opt-out handling — the discipline that keeps accounts healthy.' },
  { q: 'What if Meta changes the rules?', a: 'Your customer records and catalogue live in Jwero, not inside the channel. Channels can change; your data doesn’t move with them.' },
  { q: 'How is this different from WATI or similar tools?', a: 'They send messages. Jwero replies come from a system that knows the customer and the jewellery, because they share one record. See <a href="/compare/jwero-vs-wati">Jwero vs WATI</a>.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq#whatsapp">See every WhatsApp & Meta question →</a></p>
<p class="cta-note" style="margin-top:14px">Want the full picture before a demo? <a href="/blog/whatsapp-for-jewellers-guide">Read the complete WhatsApp guide for jewellers →</a> And if you still send PDF catalogues in chat, <a href="/blog/digital-catalog-vs-pdf-jewellery">here is why a live digital catalogue outsells a PDF →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="whatsapp">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.section(L.safeToTryStrip())}

${L.ctaBand('Message us. Seriously.', 'The best demo of WhatsApp selling is a WhatsApp conversation. Send one message and watch the machine work.', 'whatsapp', { label: 'Send that first message' })}
`,
};

const instagram = {
  slug: 'products/instagram-facebook',
  title: 'Instagram & Facebook Commerce for Jewellery Business | Jwero',
  description: 'Turn Instagram DMs and Facebook messages into sales conversations with memory: official APIs, AI-drafted replies with approval, and one inbox for every channel.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Instagram & Facebook Commerce', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Official Instagram and Facebook messaging turned into tracked sales conversations, with AI-drafted replies under approval, in one inbox with WhatsApp.',
    url: 'https://jwero.ai/products/instagram-facebook', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Instagram & Facebook'),
  faqs: [
    { q: 'Can Jwero reply to Instagram DMs automatically?', a: 'The AI workforce drafts replies to DMs and comments using the customer’s record and your catalogue; drafts wait for approval until you promote them. Every conversation lands in the same inbox as WhatsApp and web chat.' },
    { q: 'We get hundreds of "price?" comments. Can Jwero handle them?', a: 'Yes — that exact flood is the point. Price enquiries get a courteous reply that moves the conversation to DM or WhatsApp with a live-price catalogue link, automatically attached to a customer record so the follow-up actually happens.' },
    { q: 'Do I need a new Instagram account?', a: 'No. Jwero connects to your existing professional account through the official Meta APIs.' },
    { q: 'Will this feel impersonal compared to how we reply now?', a: 'The AI drafts from the same customer record WhatsApp uses — her taste, her history — and every reply waits for your team’s approval. It should feel more informed, not less personal.' },
    { q: 'Do I need someone dedicated to run this?', a: 'No — the AI workforce handles first response and routine follow-up. Your team reviews and approves; nobody needs to sit refreshing DMs all day.' },
  ],
  body: `
${L.hero({
  eyebrow: 'INSTAGRAM & FACEBOOK',
  h1: 'The showcase is Instagram. The sale needs a system.',
  sub: 'Your reels bring the audience; then two hundred "price?" comments die in the DMs. Jwero catches every comment and message, replies with knowledge, and walks each one toward WhatsApp, an appointment, or a sale — with your approval on every word.',
  primary: { href: '#', label: 'See it work', wa: 'instagram' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('THE PROBLEM WITH PRETTY', 'Likes are not a pipeline.', '')}
  ${L.cards([
    { title: 'DMs are a black hole', text: 'Enquiries arrive at all hours, get answered late or never, and vanish when the intern changes.' },
    { title: 'No memory', text: 'The person asking about that polki set bought bangles from you last year — but Instagram doesn’t know that. Your system should.' },
    { title: 'No follow-up', text: 'She asked, you answered, she went quiet. In jewellery, the follow-up IS the sale — and nobody follows up on DMs.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT JWERO DOES', 'From comment to customer record.', '')}
  ${L.steps([
    { title: 'Catch everything', text: 'DMs and comment enquiries from Instagram and Facebook flow into the one inbox, matched to customer records.' },
    { title: 'Reply with knowledge', text: 'AI drafts answers with real availability and live prices, and offers the next step: catalogue, WhatsApp, appointment.' },
    { title: 'Never lose the thread', text: 'Every conversation becomes a remembered relationship — followed up, invited to festivals, grown over years.' },
  ])}`
, { tone: 'tint' })}

${L.oneSystemBlock([
  'An Instagram DM and a WhatsApp message from the same person land on the same customer record — no "which channel did she message from" confusion.',
  'The catalogue an AI drafts into a DM reply is the same live-priced catalogue every other channel sells from.',
])}

${L.section(`${L.sectionHead('INSTAGRAM & FACEBOOK QUESTIONS', 'New accounts, personal touch, and who is running it.', '')}${L.faqBlock([
  { q: 'Do I need a new Instagram account?', a: 'No — Jwero connects to your existing professional account through the official Meta APIs.' },
  { q: 'Will replies feel impersonal?', a: 'Drafts come from the same customer record WhatsApp uses, and every reply waits for your approval — informed, not robotic.' },
  { q: 'Do I need someone dedicated to run this?', a: 'No — the AI workforce handles first response and routine follow-up; your team just approves.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="instagram">try the WhatsApp button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Stop losing the DMs you paid for.', 'Your reels already create demand. See how much of it a system with memory can catch.', 'instagram')}
`,
};

const aiAgents = {
  slug: 'products/ai-sales-agents',
  title: 'AI Sales Agents & Voice — Staff That Never Sleep | Jwero',
  description: 'AI sales agents that answer, follow up, and call customers back in 14 languages — governed by approval queues, daily caps and kill switches.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero AI Sales Agents & Voice', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Governed AI sales agents and a voice assistant speaking 14 languages, drafting replies and follow-ups inside approval queues, daily caps and a kill switch.',
    url: 'https://jwero.ai/products/ai-sales-agents', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('AI Sales Agents & Voice'),
  faqs: [
    { q: 'What is an AI sales agent in Jwero?', a: 'A configured member of the AI workforce: a scope of allowed actions, a knowledge base, guardrails, an approval workflow and an activity log. It drafts replies, follows up, reminds and invites — within the limits you set.' },
    { q: 'Can the AI really speak on calls?', a: 'Yes — the voice assistant converses in 14 languages, follows your knowledge base, and files transcripts on the customer record. Use it for instalment reminders, follow-up calls and enquiry triage.' },
    { q: 'How do I know what the AI did?', a: 'Every action is logged: what, when, why, and who approved it. You can review any day’s activity in minutes.' },
    { q: 'Will this replace my sales staff?', a: 'No. The AI workforce does the remembering and the follow-up your team never has time for; your people do the actual selling. Salespeople close more when every customer walks in already known, not fewer.' },
    { q: 'My salespeople are worried about being watched or replaced. What do I tell them?', a: 'That the AI does the tedious remembering — who to follow up, what she bought last time — so they spend their time selling instead of searching for notes. It works for them, not on them.' },
    { q: 'Can it give a discount without me knowing?', a: 'No — pricing and discounts follow your price rules and staff permissions. The agents draft messages; they don’t set prices.' },
    { q: 'Can customers video-call or watch a live stream to see a piece?', a: 'Yes — customers can join a live stream and buy what they see, start a video call with your team to look at a piece up close, or scan a video-QR code to open a video interaction on the spot. These are live-video connections to your people, not an AI-hosted stream; the AI’s role stays where it is elsewhere on this page — drafting the surrounding text follow-ups, under approval.' },
  ],
  body: `
${L.hero({
  eyebrow: 'AI SALES AGENTS & VOICE',
  h1: 'Staff who remember everyone, work all night, and ask first.',
  sub: 'Not a chatbot with a jewellery skin — a governed AI workforce. Each agent has defined duties, hard limits, a knowledge base and an approval trail. They speak 14 languages, work faster than any intern, and never take your customer list when they leave.',
  primary: { href: '#', label: 'Talk to one now', wa: 'aiagents' },
  secondary: { href: '/platform/ai-workforce', label: 'How governance works' },
  mock: L.mockApproval,
})}

${L.section(
  `${L.sectionHead('THE DUTIES', 'What you can hire them for.', '')}
  ${L.cards([
    { title: 'Enquiry desk', text: 'First response on WhatsApp, Instagram and web chat — knowledgeable, priced, polite, in minutes.' },
    { title: 'Follow-up clerk', text: 'Every quiet conversation, unclosed quote and abandoned enquiry chased on schedule, forever.' },
    { title: 'Scheme collections', text: 'Instalment reminders by message and voice call — the polite persistence that keeps plans healthy.' },
    { title: 'Occasion concierge', text: 'Birthday and anniversary outreach, festival invitations, wedding-season campaigns — proposed weeks ahead for your approval.' },
    { title: 'Voice caller', text: 'Outbound reminder and follow-up calls in the customer’s language, transcribed onto the record.' },
    { title: 'Night shift', text: 'The 11pm enquiry answered at 11:01pm. This one duty pays for the rest.' },
  ])}`
)}

${L.governanceStrip()}

${L.section(
  `${L.sectionHead('BEYOND TEXT', 'Staff that never sleep — now on video too.', '')}
  ${L.cards([
    { title: 'Live streaming & shoppable video', text: 'Run a live stream of new arrivals or a festival launch; customers watch and buy the pieces they see, in the moment.' },
    { title: 'Video calls with your team', text: 'A customer who wants to see a piece up close before deciding can move straight into a video call with your salesperson, no separate app to install.' },
    { title: 'Video-QR', text: 'A QR code — on a poster, an invoice, a catalogue page — that opens a video interaction instead of a webpage, so an in-store or offline moment can lead straight into a live conversation.' },
  ])}`
)}

${L.section(`${L.sectionHead('THE STAFF QUESTION', 'What your salespeople should worry about.', '')}${L.faqBlock([
  { q: 'Will this replace my sales staff?', a: 'No. The AI workforce does the remembering and follow-up; your people do the selling. Salespeople close more when every customer walks in already known.' },
  { q: 'My salespeople are worried about being watched or replaced. What do I tell them?', a: 'It works for them, not on them — it does the tedious remembering so they spend their time on the sale itself.' },
  { q: 'Can it give a discount without me knowing?', a: 'No — pricing and discounts follow your price rules and staff permissions, always.' },
  { q: 'Can customers video-call or watch a live stream to see a piece?', a: 'Yes — live streams, shoppable video and video-QR all connect customers with your team on camera. These are live-video capabilities, not an AI-hosted stream; only the surrounding text is AI-drafted, and always under approval.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq#ai-trust">See every AI trust question →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="aiagents">try the WhatsApp button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('Hire staff that scale like software.', 'Start with one agent on Assist mode — drafts only, approvals on. Promote it when it earns your trust.', 'aiagents')}
`,
};

const optimize = {
  slug: 'products/optimize',
  title: 'Optimize — See Why Website Visitors Leave, Before They Do | Jwero',
  description: 'Optimize shows why visitors leave your website and catches them first: heatmaps, A/B tests, popups, web push and an AI webchat — on your customer record.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Optimize', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Website conversion optimization built into Jwero: visitor analytics, heatmaps, session recordings, A/B experiments, personalization and an AI webchat on the customer record.',
    url: 'https://jwero.ai/products/optimize', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Optimize'),
  faqs: [
    { q: 'What is Optimize?', a: 'The toolkit that shows you why a website visitor left without buying, and helps you catch the next one before they do: visitor analytics, heatmaps, session recordings, A/B experiments, personalization rules, popups and lead forms, web push, and an AI webchat widget — in the trade, this category is called "CRO" (conversion-rate optimization). It’s the class of stack you’d otherwise stitch together from Hotjar, VWO and OneSignal.' },
    { q: 'Do I need to install anything extra?', a: 'No separate tools or contracts. One pixel on your website turns on analytics, heatmaps, recordings, experiments, popups, push and webchat together.' },
    { q: 'How is this different from just installing Hotjar or VWO?', a: 'Those tools watch an anonymous visitor. Jwero’s webchat lead, the popup that converted, and the visitor an experiment bucketed all become the same customer record your WhatsApp, scheme and billing modules already use — not a separate export you have to reconcile.' },
    { q: 'Can the AI actually answer webchat questions?', a: 'Yes — AIVA (Jwero’s AI webchat assistant) drafts and sends replies on the widget using your catalogue and knowledge base, and marks a conversation for human takeover the moment it needs a person.' },
    { q: 'What can I personalize?', a: 'Personalization rules can target by behaviour tracked on your site — pages viewed, funnel stage — and, because it shares the customer record, by data like scheme or loyalty membership, so a returning scheme member can see different content than a first-time visitor.' },
    { q: 'What does this replace, work with, and cost?', a: 'It replaces the need for separate analytics, heatmap, A/B testing and push tools. It works alongside your existing website — one pixel, no rebuild. Pricing sits inside Jwero’s tiers — see /pricing for the structure.' },
    { q: 'Is visitor data handled with consent?', a: 'Yes — consent settings, a domain guard and a CSS sanitizer are built into the suite, so tracking and on-site widgets respect visitor consent and stay scoped to domains you approve.' },
    { q: 'Can I manage my Meta/Google ad campaigns from here too?', a: 'Not inside Optimize itself — that lives in Ads Manager, a dedicated part of Jwero for Meta, Google and Pinterest campaigns, with budget alerts and an AI strategist that drafts, never spends. Optimize tells you what happens after the click; Ads Manager runs the campaign that brought the click.' },
  ],
  body: `
${L.hero({
  eyebrow: 'OPTIMIZE',
  h1: 'Your website stops being a brochure.',
  sub: 'Visitors arrive, look around, and leave, and until now you had no idea where. Optimize shows you exactly that, and helps you catch the next one before they go: heatmaps, recordings, A/B experiments, personalization, popups, push and an AI webchat — reading and writing the same customer record as everything else.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'optimize' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('SEE WHERE VISITORS DROP OFF', 'You cannot fix a leak you cannot see.', '')}
  ${L.cards([
    { title: 'Visitor analytics', text: 'Traffic, retention and geo on every visit — who’s coming back, and from where.' },
    { title: 'Events, goals & funnels', text: 'Define the path: browse, enquire, checkout — and see exactly which step loses people.' },
    { title: 'Heatmaps & session recordings', text: 'Grid-based heatmaps and full session recordings with snapshots show what visitors actually do on a product page, not what you assume they do.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('TEST WHAT ACTUALLY WORKS', 'Stop guessing which page wins.', '')}
  ${L.steps([
    { title: 'Run an experiment', text: 'A/B experiments use deterministic bucketing so every visitor sees a consistent variant, with results computed for you — no spreadsheet needed.' },
    { title: 'Personalize by who they are', text: 'Personalization rules show different content to different segments — a returning scheme member sees a different message than a first-time browser.' },
    { title: 'Read the uplift', text: 'Metrics on every rule and experiment tell you what to keep, what to kill, and what to try next.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('CATCH THE VISITOR BEFORE THEY LEAVE', 'Anonymous traffic becomes a lead instead of a lost tab.', '')}
  ${L.cards([
    { title: 'Popups & lead forms', text: 'A visual editor with design presets — exit-intent offers, lead capture and polls, built without a developer.' },
    { title: 'Web push', text: 'Visitors who decline chat can still opt into push — so a new collection or a scheme update can bring them back without ad spend.' },
    { title: 'Webchat with AIVA', text: 'AIVA answers on the webchat widget instantly and marks the conversation for human takeover the moment a person is needed — after-hours leads no longer wait until morning.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('MANAGE THE SPEND THAT BRINGS THEM HERE', 'From watching traffic to running the ads that create it.', '')}
  <p>Optimize tells you where visitors drop off — but the ads that brought them here live in their own workspace, with budget alerts and an AI strategist that drafts, never spends. Need to manage that spend? See <a href="/products/ads-manager">Ads Manager →</a>.</p>`
)}

${L.oneSystemBlock([
  'A lead captured through a webchat conversation or a popup becomes a CRM contact instantly — no export, no re-entry.',
  'Personalization rules can key off scheme or loyalty membership from the same customer record your WhatsApp and billing modules already update.',
  'The visitor an A/B experiment bucketed and the customer who eventually buys are the same record, start to finish.',
])}

${L.section(`${L.sectionHead('OPTIMIZE QUESTIONS', 'Consent, AI webchat, and what this replaces.', '')}${L.faqBlock([
  { q: 'How is this different from installing Hotjar or VWO myself?', a: 'Those tools watch an anonymous visitor. Jwero’s webchat lead, the popup that converted, and the visitor an experiment bucketed all become the same customer record your other modules use.' },
  { q: 'Can the AI answer webchat questions?', a: 'Yes — AIVA drafts and sends replies using your catalogue and knowledge base, and marks a conversation for human takeover the moment it needs a person.' },
  { q: 'Is visitor data handled with consent?', a: 'Yes — consent settings, a domain guard and a CSS sanitizer are built into the suite.' },
  { q: 'Can I manage my Meta/Google ad campaigns from here too?', a: 'Not inside Optimize — see <a href="/products/ads-manager">Ads Manager</a> for Meta, Google and Pinterest campaigns, budget alerts and an AI strategist that only drafts and never commits spend on its own.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every WhatsApp button on this site is the actual product, not a mockup — <a href="#" data-wa="optimize">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('See where your own visitors drop off.', 'One pixel turns on analytics, heatmaps, experiments, popups, push and webchat together — on your existing website.', 'optimize')}
`,
};

const storefront = {
  slug: 'products/storefront',
  title: 'Ecommerce Website for Jewellery Business | Jwero',
  description: 'A jewellery-native ecommerce website: live purity-rate pricing that recalculates automatically, one CRM-linked wishlist, cart, checkout, blog and reviews.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Ecommerce Website', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'A native, standalone jewellery ecommerce website with a live purity/metal-rate price breakup that recalculates on rate change, a CRM-linked wishlist, cart, comparison, checkout, blog, reviews and jewellery-styled themes, on the same customer record as every other Jwero module.',
    url: 'https://jwero.ai/products/storefront', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Ecommerce Website'),
  faqs: [
    { q: 'Do I need Shopify or WooCommerce to sell online?', a: 'No. Jwero includes a native ecommerce website — a live-price catalogue, cart, wishlist, comparison and checkout — that can be your website if you don’t have one yet.' },
    { q: 'I already have a Shopify or WooCommerce store. Do I have to switch?', a: 'No. The Ecommerce Website is an option, not a replacement mandate. If you already run a store, the existing platform integrations and /products/optimize add Jwero on top of it. It’s for businesses that don’t have a website yet, or want a jewellery-native alternative.' },
    { q: 'What actually makes this jewellery-native, not just a themed generic store?', a: 'The product page price is a live breakup — metal, purity, weight and rate-per-gram, plus stone and making-charge lines — that recalculates automatically when the metal rate moves, driven by the same repricing engine as the rest of Jwero. A generic platform shows a fixed price until someone manually edits it; this one doesn’t.' },
    { q: 'Is the wishlist just a cookie, or does it follow the customer?', a: 'For a signed-in shopper, it’s backed by the same CRM contact record used across your counter and CRM — not a separate guest list tied to a browser. Save it on the website, and it’s there when she messages you on WhatsApp.' },
    { q: 'Can it look like my brand, not a template?', a: 'Yes — five jewellery-styled themes and eleven page templates (including festive, gift-guide and lookbook layouts a generic store builder doesn’t ship with) so the site looks like your business, not repurposed retail software.' },
    { q: 'Is it just a catalogue, or a full website?', a: 'A full site: public catalogue pages, quote pages and payment pages, plus a blog, customer reviews and landing pages for campaigns — content tools built for jewellery retail, not just a product list.' },
    { q: 'Who is this for?', a: 'Startups, first-time founders and single stores without a website today are the clearest fit. It runs on the same customer record as your WhatsApp, CRM and billing — so an order here is never a separate system to reconcile.' },
  ],
  body: `
${L.hero({
  eyebrow: 'ECOMMERCE WEBSITE',
  h1: 'A jewellery website that already knows how to sell jewellery.',
  sub: 'If you don’t have a website yet, or you’re tired of forcing jewellery into a generic store builder, Jwero includes a native ecommerce website, a live-rate catalogue, cart, wishlist, comparison and checkout — built to sell rings and rates, not t-shirts.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'storefront' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('THE FIRST-WEBSITE PROBLEM', 'A brochure site isn’t an ecommerce website.', '')}
  ${L.cards([
    { title: 'No website yet', text: 'A first-time founder or single store often has no site at all — just Instagram and word of mouth. That’s enquiries with nowhere to close.' },
    { title: 'Generic builders don’t speak jewellery', text: 'Prices that don’t move with the metal rate, no wishlist for a big-ticket decision, no way to compare two pieces: the builder was made for t-shirts rather than temple work.' },
    { title: 'A separate system to reconcile', text: 'A store that doesn’t share the customer record means every online order is a manual re-entry into the CRM and billing you run the business on.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE ONLY ONE BUILT FOR THIS', 'Not a theme on a generic platform. A different foundation.', 'Every generic ecommerce platform can be dressed up to look like a jewellery store. None of them are built on a jewellery pricing engine, or share a customer record with your counter. That difference shows up the moment the gold rate moves.')}
  ${L.impactGrid([
    {
      lever: 'What the price actually is',
      before: 'A fixed price tag, manually edited whenever someone remembers the rate has moved — on Shopify, WooCommerce, or any generic builder.',
      after: 'A live breakup: metal, purity, weight, rate-per-gram, stone and making-charge lines — that recalculates automatically the moment the rate changes, from the same pricing engine every other Jwero channel uses.',
      link: { href: '/platform/pricing-engine', label: 'See the pricing engine' },
    },
    {
      lever: 'What a saved wishlist means',
      before: 'A cookie in a browser. Clear it, switch devices, or come back next week on a different phone, and it’s gone.',
      after: 'A CRM contact record — the same one your counter and CRM already use. Save it on the website, and it’s there when she messages you on WhatsApp.',
    },
    {
      lever: 'What "book a visit" does',
      before: 'A contact form that emails someone, who may or may not follow up before she walks in somewhere else.',
      after: 'A showroom-visit request that creates or updates her CRM contact directly, putting her on the same expected-visits list your floor staff already work from.',
      link: { href: '/products/showroom', label: 'See Showroom Intelligence' },
    },
    {
      lever: 'What the theme is dressed for',
      before: 'A generic retail theme, restyled with gold colours and a serif logo.',
      after: 'Five jewellery-styled themes and eleven page templates built for this trade specifically, including festive, gift-guide and lookbook layouts, rather than a t-shirt store wearing different fonts.',
    },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('WHAT THE WEBSITE DOES', 'Browse, decide, buy — on one site.', '')}
  ${L.cards([
    { title: 'Live-rate price breakup', text: 'Metal, purity, weight, stone and making-charge shown as a real breakup on the product page instead of a single stale number.' },
    { title: 'Cart, wishlist & compare', text: 'The three things a jewellery buyer actually needs before a big-ticket decision, beyond just an add-to-cart button.' },
    { title: 'Checkout, quotes & payments', text: 'Public catalogue pages, quote pages and payment pages carry a browsing customer all the way to paid.' },
    { title: 'Showroom-visit booking', text: 'A visit request from the website creates or updates her CRM contact and lands on the same expected-visits list your floor already uses.' },
    { title: 'Blog, reviews & landing pages', text: 'Content tools built for jewellery retail — a blog for SEO and story, reviews for trust, landing pages for campaigns.' },
    { title: 'Your brand, not a template', text: 'Five jewellery-styled themes and eleven page templates, so the site looks like your business rather than the software running it.' },
  ])}`
)}

${L.oneSystemBlock([
  'An order here writes to the same customer record your WhatsApp replies and billing already update — no export, no re-entry.',
  'The catalogue and live-rate price breakup on the website are the same catalogue every other channel sells from.',
  'A wishlist saved on the website is visible the next time she messages on WhatsApp, tied to the same CRM contact rather than a separate login.',
])}

${L.honestGapsBlock([
  'Certificate/HUID verification shown directly on a product page — today the catalogue carries certificate and HUID data; a customer-facing verification widget on the website itself is not built yet.',
  'Gold-scheme or digital-gold balance redemption at website checkout — scheme and digital-gold balances live on the customer record and are visible to your team; applying them during an online checkout isn’t wired yet.',
  'An old-gold exchange or buyback calculator on the website.',
])}

${L.section(`${L.sectionHead('ECOMMERCE WEBSITE QUESTIONS', 'Shopify, branding, and what this replaces.', '')}${L.faqBlock([
  { q: 'Do I need Shopify or WooCommerce to sell online?', a: 'No — Jwero includes a native ecommerce website that can be your website if you don’t have one yet.' },
  { q: 'I already have a store. Do I have to switch?', a: 'No, it’s an option rather than a replacement mandate. If you already run a store, /products/optimize and platform integrations add Jwero on top of it.' },
  { q: 'What makes this jewellery-native?', a: 'A live metal/purity/stone price breakup that recalculates on rate change, and a wishlist backed by the same CRM contact record as your counter, well beyond a themed generic store.' },
  { q: 'Can it look like my brand?', a: 'Yes — five jewellery-styled themes and eleven page templates brand the site to match your business.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="storefront">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('Bring your ecommerce website onto one system.', 'A live-rate price breakup, cart, wishlist and checkout — as your first website, or alongside the one you already run.', 'storefront')}
`,
};

const adsManager = {
  slug: 'products/ads-manager',
  title: 'Ads Manager — Meta, Google & Pinterest Campaigns | Jwero',
  description: 'Create ad campaigns across Meta, Google and Pinterest from one place — approve in the wizard and Jwero publishes straight to Meta and Google, with budget alerts and an approval step before spend.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Ads Manager', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Ad-campaign management across Meta, Google and Pinterest, with a create/edit wizard, automated publishing to Meta Ads and Google Ads (Search, Performance Max, Shopping) via their APIs once approved, budget-alert monitoring and AI-assisted opportunity analysis.',
    url: 'https://jwero.ai/products/ads-manager', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Ads Manager'),
  faqs: [
    { q: 'Which ad platforms does Jwero manage?', a: 'Meta Ads, Google Ads and Pinterest — each with its own integration and campaign-type catalogue. Google covers Search, Performance Max and Shopping (linked to your jewellery catalogue); Meta covers standard campaigns, Advantage+ automated campaigns and lead-gen ad forms.' },
    { q: 'Does Jwero publish my campaign straight to the ad platform?', a: 'Yes, for Meta and Google. Once you approve a campaign in the wizard, Jwero calls the Meta Graph API and Google Ads API directly to create the live budget, campaign, ad sets and creatives — it doesn\'t hand you a draft to copy-paste. Pinterest publishing is still rolling out; ask us for its current status on your account.' },
    { q: 'Can the AI spend my budget without me knowing?', a: 'No. The AI strategist analyzes performance and surfaces opportunities and learnings for you to review — it does not write your ad headlines or copy, and it never spends on its own. Approval happens in the wizard before Jwero ever calls the ad platform; nothing goes live without you saying yes first.' },
    { q: 'What happens if I go over budget?', a: 'An automated monitoring worker watches spend and alerts you as campaigns approach their limits, so overspend is something you catch early, not something you discover on the invoice.' },
    { q: 'How is this different from managing ads inside Meta or Google directly?', a: 'You get one wizard for campaign creation across all three platforms, one place for budget alerts and approvals, and — for Meta and Google — automatic publishing straight from that wizard, instead of three separate ad managers with three separate logins.' },
    { q: 'Does this replace my existing ad accounts?', a: 'No — it connects to and manages your existing Meta, Google and Pinterest ad accounts from inside Jwero, rather than replacing them.' },
  ],
  body: `
${L.hero({
  eyebrow: 'ADS MANAGER',
  h1: 'Run the ads. Keep your hand on the budget.',
  sub: 'Meta, Google and Pinterest campaigns — created, configured and analyzed from one place. Approve a campaign in the wizard and Jwero publishes it straight to Meta and Google through their own APIs, no manual copy-paste into another ad manager. A budget alert flags overspend early, and nothing goes live until you approve it.',
  primary: { href: '#', label: 'Talk to us about Ads Manager', wa: 'adsmanager' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('ONE WORKSPACE, THREE PLATFORMS', 'Stop juggling three ad managers.', '')}
  ${L.cards([
    { title: 'Meta, Google & Pinterest', text: 'Each platform has its own integration and its own catalogue of supported campaign types — built for that platform, not a lowest-common-denominator form.' },
    { title: 'Automatic publishing to Meta & Google', text: 'Approve a campaign in the wizard and Jwero calls the Meta Graph API and Google Ads API directly to create the live budget, campaign, ad sets and creatives — not a draft you copy-paste in elsewhere.' },
    { title: 'Google Search, Performance Max & Shopping', text: 'Google campaigns cover Search (with server-side checks — e.g. at least three headlines before it lets you submit), Performance Max, and Shopping campaigns linked to your jewellery catalogue.' },
    { title: 'Meta Advantage+ & lead-gen forms', text: 'Meta campaigns include Advantage+ automated campaigns and native lead-gen ad forms, alongside standard campaign types.' },
    { title: 'Create/edit wizard', text: 'One guided flow to build and adjust a campaign, instead of relearning three different ad-platform interfaces.' },
    { title: 'Budget alerts', text: 'An automated monitoring worker watches spend and flags a campaign as it approaches its limit, before the spend can surprise you.' },
    { title: 'Approval before spend', text: 'Every campaign passes an approval step in the wizard before Jwero submits it to the ad platform. Nobody spends the marketing budget by accident.' },
    { title: 'AI opportunity analysis', text: 'The AI strategist surfaces where a campaign is underperforming or where there’s budget headroom worth using, based on your performance data — a draft recommendation you review, not generative copywriting. It doesn’t write your ad headlines or body copy; those are still entered by hand in the wizard.' },
    { title: 'Learnings dashboards', text: 'Performance and learnings in one view across platforms, so you compare Meta against Google against Pinterest without exporting three reports.' },
  ])}`
)}

${L.oneSystemBlock([
  'The lead a campaign brings in lands on the same customer record your WhatsApp, Instagram and CRM already use — no separate ads dashboard to reconcile.',
  'Budget alerts and approvals sit next to the same governance pattern the AI workforce uses everywhere else on Jwero: drafts, never spends, without a human saying yes.',
  'Traffic Optimize tracks on your website often started as a click on one of these campaigns — see <a href="/products/optimize">Optimize</a> for what happens after the click.',
  'Running organic posts alongside paid campaigns? <a href="/products/social-media">Social Media Management</a> covers scheduling and the unified inbox on the same customer record.',
])}

${L.honestGapsBlock([
  'Pinterest publishing is still rolling out and not yet uniformly live — Meta and Google campaigns publish directly to the ad platform once approved; ask us for Pinterest\'s current status on your account.',
  'The AI strategist analyzes performance and drafts opportunities for you to review — it does not write your ad headlines or body copy today; those are still entered by hand in the campaign wizard.',
])}

${L.section(`${L.sectionHead('ADS MANAGER QUESTIONS', 'Budget control, publishing, and what the AI does.', '')}${L.faqBlock([
  { q: 'Does Jwero publish my campaign straight to the ad platform?', a: 'Yes, for Meta and Google — approve a campaign in the wizard and Jwero submits it directly via the Meta Graph API and Google Ads API to create the budget, campaign, ad sets and creatives. Pinterest publishing is still rolling out.' },
  { q: 'Can the AI spend my budget without me knowing?', a: 'No — it drafts opportunity analysis and learnings, not ad copy, and never spends. Every campaign needs your approval in the wizard before Jwero calls the ad platform.' },
  { q: 'Which platforms are covered?', a: 'Meta Ads, Google Ads and Pinterest. Google spans Search, Performance Max and Shopping; Meta spans standard campaigns, Advantage+ and lead-gen forms.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">Every WhatsApp button on this site is the actual product, not a mockup — <a href="#" data-wa="adsmanager">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('Run ads without losing sight of the budget.', 'Approve a campaign in the wizard and Jwero publishes it straight to Meta and Google — budget alerts and an approval step keep you in control. See it work on your own accounts.', 'adsmanager')}
`,
};

const socialMedia = {
  slug: 'products/social-media',
  title: 'Social Media Management — Schedule, Inbox, Reply | Jwero',
  description: 'Schedule posts, manage one inbox for every comment and DM, and let AI draft replies your team approves — across your social channels in one place.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero Social Media Management', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Multi-platform post scheduling with a multi-channel preview, a unified inbox for comments and DMs with AI-drafted replies under approval, and analytics.',
    url: 'https://jwero.ai/products/social-media', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('Social Media Management'),
  faqs: [
    { q: 'What can I actually schedule and manage from Jwero?', a: 'Posts across your social platforms from one composer, with a preview of how each post will look on each channel before it goes out, plus a unified inbox for the comments and DMs that come back.' },
    { q: 'Does the AI reply to comments and DMs on its own?', a: 'It drafts replies — including handling Instagram private replies — using the same "AI drafts, human approves" governance as the rest of Jwero. Your team approves before anything sends, until you choose to promote a reply type.' },
    { q: 'Which platforms are supported?', a: 'Instagram and Facebook are the flagship, proven channels — the same official integrations this site’s /products/instagram-facebook page already sells. Additional platforms including LinkedIn, X, Pinterest, YouTube and Google Business are part of the roadmap; ask us which are confirmed live for your account before you plan a launch around one.' },
    { q: 'Is this different from Instagram & Facebook Commerce?', a: 'That page is the focused Instagram/Facebook experience. Social Media Management is the broader version: scheduling, preview and analytics across channels, with the same unified inbox and AI-drafted replies underneath.' },
    { q: 'Can I see how my posts and replies are performing?', a: 'Yes — analytics sit alongside the composer and inbox, so scheduling, replying and measuring stay in the same place instead of a separate reporting tool.' },
    { q: 'Do I need someone watching every channel all day?', a: 'No — the unified inbox collects every comment and DM in one place, and AI drafts the first response; your team reviews and approves rather than monitoring each platform separately.' },
  ],
  body: `
${L.hero({
  eyebrow: 'SOCIAL MEDIA MANAGEMENT',
  h1: 'Every platform, one inbox, one calendar.',
  sub: 'Schedule posts across your channels with a preview of how each will look before it goes live, and answer every comment and DM from a single inbox — with AI drafting the reply and your team approving it.',
  primary: { href: '#', label: 'Talk to us about Social Media', wa: 'socialmedia' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('SCHEDULE, PREVIEW, PUBLISH', 'One composer for every channel.', '')}
  ${L.cards([
    { title: 'Multi-platform composer', text: 'Write once, schedule across your connected channels from a single screen.' },
    { title: 'Multi-channel preview', text: 'See how a post will actually look on each platform before it goes out — not a guess after publishing.' },
    { title: 'Unified inbox', text: 'Every comment and DM, across every connected channel, in one inbox instead of a rotation of apps.' },
    { title: 'Instagram private replies', text: 'Comment-to-DM handling on Instagram is built in, so a public "price?" comment can move to a private conversation cleanly.' },
    { title: 'AI-drafted replies, human approval', text: 'AI drafts the reply to a comment or DM using your knowledge base; a person approves before it sends — the same governance as the rest of Jwero.' },
    { title: 'Analytics', text: 'Performance across your scheduled posts and channels, next to the same inbox you reply from.' },
  ])}`
)}

${L.oneSystemBlock([
  'A DM answered in the unified inbox lands on the same customer record your WhatsApp and CRM already use — no separate export.',
  'The AI drafting a reply here follows the same "AI drafts, human approves" governance as the AI Sales Agents elsewhere on Jwero.',
  'Instagram and Facebook here are the same official integrations behind <a href="/products/instagram-facebook">Instagram & Facebook Commerce</a> — this page is the broader, multi-platform version of that experience.',
  'Paying to promote a post? <a href="/products/ads-manager">Ads Manager</a> runs the paid campaigns on the same platform, with its own budget alerts and approvals.',
])}

${L.honestGapsBlock([
  'Not every one of the additional platforms (LinkedIn, X, Pinterest, YouTube, Google Business) is confirmed live for publishing on every account yet — Instagram and Facebook are the proven, flagship channels; ask us which others are live before you plan around one.',
])}

${L.section(`${L.sectionHead('SOCIAL MEDIA QUESTIONS', 'Platform coverage and who approves what.', '')}${L.faqBlock([
  { q: 'Which platforms are supported?', a: 'Instagram and Facebook are the flagship, proven channels. Additional platforms including LinkedIn, X, Pinterest, YouTube and Google Business are on the roadmap — ask which are live for your account.' },
  { q: 'Does the AI reply on its own?', a: 'It drafts; your team approves before anything sends, until you choose to promote a reply type — same governance as the rest of Jwero.' },
  { q: 'How is this different from Instagram & Facebook Commerce?', a: 'That page is the focused Instagram/Facebook experience; this is the broader multi-platform scheduling, inbox and analytics layer built on the same foundation.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="socialmedia">try the WhatsApp button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('One inbox for every comment and DM.', 'Schedule across channels, reply from one place, and let AI draft the first response while your team approves. Ask which platforms are live for your account.', 'socialmedia')}
`,
};

module.exports = [whatsapp, instagram, aiAgents, optimize, storefront, adsManager, socialMedia];
