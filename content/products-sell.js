const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

const whatsapp = {
  slug: 'products/whatsapp',
  title: 'WhatsApp Commerce for Jewellery Business — Sell Where They Already Are | Jwero',
  description: 'Official WhatsApp Business API built for jewellery: catalogues with live gold-rate prices, broadcasts without bans, AI replies with approval, and payments — on the number you already own.',
  breadcrumbs: BC('WhatsApp Commerce'),
  faqs: [
    { q: 'Can customers actually buy on WhatsApp?', a: 'Yes. Share catalogues with live prices, take orders and collect payments in the chat. For high-value pieces, WhatsApp books the appointment or the video call — the sale closes wherever the customer is comfortable.' },
    { q: 'Will my number get banned?', a: 'Jwero uses the official WhatsApp Business API with approved templates, consent tracking, per-customer message-fatigue limits and instant opt-out handling — the discipline that keeps accounts healthy.' },
    { q: 'Can I keep my existing WhatsApp number?', a: 'Yes, and you should — that number is part of your reputation. We migrate it onto the official API.' },
    { q: 'How is this different from WATI or other WhatsApp tools?', a: 'Those tools send messages. They don’t know her purchase history, her scheme balance, or what a gram of 22k costs today. Jwero replies come from a system that knows the customer and the jewellery — because they share one record.' },
    { q: 'What does this replace, work with, and cost?', a: 'It replaces unofficial bulk-messaging tools and personal-phone selling. It works alongside your existing WhatsApp number and your billing software. Pricing sits inside Jwero’s tiers — see /pricing for the structure.' },
  ],
  body: `
${L.hero({
  eyebrow: 'WHATSAPP COMMERCE',
  h1: 'Your counter is now open 24 hours a day.',
  sub: 'Jewellery is bought on trust and conversation — which is why it is bought on WhatsApp. Jwero turns your number into a full counter: live-price catalogues, knowledgeable replies in minutes, appointments, payments and follow-up. Officially, safely, at scale.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'whatsapp' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
  note: 'The demo IS a WhatsApp conversation.',
  mock: L.mockChat,
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
    { title: 'Scheme conversations', text: 'Instalment reminders, balance checks and maturity congratulations — the messages customers actually thank you for.' },
    { title: 'Group selling', text: 'Curated customer groups for launches and festivals, managed from the same inbox.' },
    { title: 'One inbox, whole team', text: 'Every conversation visible, assignable and owned by the business — with role-based access.' },
  ])}`
)}

${L.oneSystemBlock([
  'The AI reply knows her scheme balance because schemes and chat share one record — no integration, no sync.',
  'When she buys, the catalogue price, the invoice and the loyalty points all write back to the same customer card.',
  'Her occasion journey — the anniversary invite next year — reads the same channel-preference field this conversation is updating right now.',
])}

${L.ctaBand('Message us. Seriously.', 'The best demo of WhatsApp selling is a WhatsApp conversation. Send one message and watch the machine work.', 'whatsapp')}
`,
};

const instagram = {
  slug: 'products/instagram-facebook',
  title: 'Instagram & Facebook Commerce for Jewellery Business | Jwero',
  description: 'Turn Instagram DMs and Facebook messages into sales conversations with memory: official APIs, AI-drafted replies with approval, and one inbox for every channel.',
  breadcrumbs: BC('Instagram & Facebook'),
  faqs: [
    { q: 'Can Jwero reply to Instagram DMs automatically?', a: 'The AI workforce drafts replies to DMs and comments using the customer’s record and your catalogue; drafts wait for approval until you promote them. Every conversation lands in the same inbox as WhatsApp and web chat.' },
    { q: 'We get hundreds of "price?" comments. Can Jwero handle them?', a: 'Yes — that exact flood is the point. Price enquiries get a courteous reply that moves the conversation to DM or WhatsApp with a live-price catalogue link, automatically attached to a customer record so the follow-up actually happens.' },
    { q: 'Do I need a new Instagram account?', a: 'No. Jwero connects to your existing professional account through the official Meta APIs.' },
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

${L.ctaBand('Stop losing the DMs you paid for.', 'Your reels already create demand. See how much of it a system with memory can catch.', 'instagram')}
`,
};

const aiAgents = {
  slug: 'products/ai-sales-agents',
  title: 'AI Sales Agents & Voice — Staff That Never Sleep | Jwero',
  description: 'AI sales agents that answer, follow up, and call customers back in 14 languages — governed by approval queues, daily caps and kill switches.',
  breadcrumbs: BC('AI Sales Agents & Voice'),
  faqs: [
    { q: 'What is an AI sales agent in Jwero?', a: 'A configured member of the AI workforce: a scope of allowed actions, a knowledge base, guardrails, an approval workflow and an activity log. It drafts replies, follows up, reminds and invites — within the limits you set.' },
    { q: 'Can the AI really speak on calls?', a: 'Yes — the voice assistant converses in 14 languages, follows your knowledge base, and files transcripts on the customer record. Use it for instalment reminders, follow-up calls and enquiry triage.' },
    { q: 'How do I know what the AI did?', a: 'Every action is logged: what, when, why, and who approved it. You can review any day’s activity in minutes.' },
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

${L.ctaBand('Hire staff that scale like software.', 'Start with one agent on Assist mode — drafts only, approvals on. Promote it when it earns your trust.', 'aiagents')}
`,
};

module.exports = [whatsapp, instagram, aiAgents];
