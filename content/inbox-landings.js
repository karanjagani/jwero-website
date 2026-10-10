// Keyword landing pages that lead into One Inbox (2026-10-10). The five channel
// product pages were merged into /products/inbox; these short pages each target
// one search phrase and hand the reader to the matching section of One Inbox.
// WhatsApp marketing, Instagram and the AI chatbot already have their own guides
// (/whatsapp-marketing-for-jewellers, /instagram-for-jewellers,
// /ai-chatbot-for-jewellery-stores).
const L = require('../lib');
const UPDATED = '10 October 2026';

function landing(p) {
  const steps = p.steps.map(([title, text]) => ({ title, text }));
  return {
    slug: p.slug,
    title: p.title,
    description: p.description,
    breadcrumbs: [['Home', '/'], ['One Inbox', '/products/inbox'], [p.crumb]],
    schema: {
      '@context': 'https://schema.org', '@type': 'SoftwareApplication',
      name: p.schemaName, applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
      description: p.description, url: `https://jwero.ai/${p.slug}`,
      audience: { '@type': 'BusinessAudience', audienceType: 'Jewellery retailers, wholesalers and manufacturers' },
      featureList: p.points.map(([t]) => t).join(', '),
      dateModified: '2026-10-10',
      isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero One Inbox', url: 'https://jwero.ai/products/inbox' },
    },
    extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: p.howName, step: p.steps.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
    faqs: p.faqs,
    body: `
${L.hero({
  eyebrow: p.eyebrow,
  h1: p.h1,
  sub: p.sub,
  primary: { href: '#', label: p.cta, wa: 'inbox' },
  secondary: { href: `/products/inbox#${p.anchor}`, label: 'See it in One Inbox' },
})}

${L.section(`<div class="ec-ad-meter">${require('./inbox').parts.meter()}</div><p class="soc-mini-go"><a class="btn btn-ghost" href="/products/inbox?ib=${p.anchor === 'email' ? 'chain' : 'single'}#for-you" data-ib-cta="mini-${p.slug}">See One Inbox for my business →</a></p>`, { tone: 'tint' })}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">${p.shortQ}</h2><p>${p.shortA}</p></div></section>

${L.section(`${L.sectionHead('WHAT YOU GET', p.pointsHead, '')}${L.cards(p.points.map(([title, text, icon]) => ({ icon, title, text })), 3)}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('GETTING STARTED', p.howName + '.', 'Five steps.')}${L.steps(steps)}`)}

${L.section(`<div class="gem-head"><h2>Part of One Inbox.</h2><p>${p.partOf} <a href="/products/inbox#${p.anchor}">See ${p.crumb} in One Inbox →</a></p></div>`, { tone: 'tint' })}

${L.section(`<p class="cta-note" style="text-align:center">Last updated ${UPDATED}.</p>`)}

${L.ctaBand(p.bandTitle, p.bandText, 'inbox')}
`,
  };
}

const whatsappApi = landing({
  slug: 'whatsapp-api-for-jewellers',
  crumb: 'WhatsApp API',
  anchor: 'whatsapp',
  title: 'WhatsApp API for Jewellers: Official, with Catalogue & Payments | Jwero',
  description: 'The official WhatsApp Business API for jewellers: your own number, a team inbox, catalogue at today’s gold rate, payment in the chat and AI replies, on one customer record.',
  schemaName: 'Jwero WhatsApp API for jewellers',
  eyebrow: 'WHATSAPP API FOR JEWELLERS',
  h1: 'The official WhatsApp API, built for how jewellers sell.',
  sub: 'Your own number on the WhatsApp Business Platform, the whole team on it, every piece priced at today’s rate, payment inside the chat, and AI replies from her purchases and gold plan.',
  cta: 'Connect my WhatsApp number',
  shortQ: 'What is the WhatsApp API for jewellers?',
  shortA: 'The WhatsApp API, officially the WhatsApp Business Platform, is Meta’s version of WhatsApp for businesses that need more than one phone. For a jeweller on Jwero it means one official number for the whole team, catalogue messages priced at today’s gold rate, carts and payment in the chat, approved templates for reminders and offers, WhatsApp calls, and every conversation on the customer’s record in One Inbox.',
  pointsHead: 'Everything the WhatsApp Business app cannot do.',
  points: [
    ['Your own number, the whole team', 'Customers keep messaging the same number; every salesperson replies from the same shared inbox.', 'users'],
    ['Catalogue at today’s rate', 'Share pieces from your stock with prices that follow the gold rate, the same as the counter.', 'gem'],
    ['Cart and payment in the chat', 'She adds pieces and pays without leaving WhatsApp, or pays through a link your team sends.', 'wallet'],
    ['AI replies from her record', 'Answers at any hour from her purchases, gold plan and your live stock, inside the limits you set.', 'bot'],
    ['Calls on the same number', 'WhatsApp calls in and out, answered by your team or the AI voice agent, recorded on her record.', 'phone'],
    ['Templates, consent and number health', 'Reminders and offers on approved templates, opt-outs honoured and your number’s health shown.', 'shield'],
  ],
  howName: 'How to set up the WhatsApp API for a jewellery business',
  steps: [
    ['Check your number', 'We check whether your current number can move to the official platform.'],
    ['Verify your business with Meta', 'Your business details are verified in Meta Business Manager, with Jwero guiding the step.'],
    ['Connect the number to Jwero', 'The number moves onto the WhatsApp Business Platform; customers keep the same number.'],
    ['Load catalogue and templates', 'Your pieces at today’s rate, and approved templates for reminders and offers.'],
    ['Switch on payments, AI and the team', 'Payments in the chat, AI replies, and conversations shared across your team.'],
  ],
  faqs: [
    { q: 'What is the WhatsApp API?', a: 'The WhatsApp Business Platform: Meta’s official WhatsApp for businesses, with a shared team inbox, approved templates, catalogues, payments and calls on one number.' },
    { q: 'Can I keep my existing WhatsApp number?', a: 'Yes. Your number moves onto the official platform and customers keep messaging the same number. We check first whether it can also keep the WhatsApp Business app alongside.' },
    { q: 'Will my number get banned?', a: 'Numbers get restricted for spam-like behaviour. Jwero uses the official platform, approved templates, recorded consent, limits on how often each customer hears from you and instant opt-out, and shows your number’s health.' },
    { q: 'Can customers pay inside WhatsApp?', a: 'Yes. They add pieces to a cart and pay in the chat, or pay through a link your salesperson sends; the order and invoice land on their record.' },
    { q: 'Does it work with Instagram, email and calls too?', a: 'Yes. WhatsApp is one channel in One Inbox, with WhatsApp calls, Instagram, Facebook, email and webchat on the same customer record.' },
  ],
  partOf: 'WhatsApp is one channel in One Inbox, beside WhatsApp calls, Instagram, Facebook, email and webchat, all on the same customer record.',
  bandTitle: 'Put your WhatsApp number to work.',
  bandText: 'Connect your number and see your own enquiries answered at today’s rate.',
});

const businessEmail = landing({
  slug: 'business-email-for-jewellers',
  crumb: 'Email',
  anchor: 'email',
  title: 'Business Email for Jewellers: Your Domain, One Inbox | Jwero',
  description: 'Business email for jewellers on your own domain: care@ and orders@ mailboxes, threads on the customer record beside WhatsApp, shared by your team in One Inbox.',
  schemaName: 'Jwero business email for jewellers',
  eyebrow: 'BUSINESS EMAIL FOR JEWELLERS',
  h1: 'Email on your own domain, in the same inbox as WhatsApp.',
  sub: 'care@ and orders@ on your address, every thread on the customer’s record beside her WhatsApp and calls, answered by your team or by AI, and nothing lost in one person’s mailbox.',
  cta: 'Set up my business email',
  shortQ: 'What is business email for jewellers on Jwero?',
  shortA: 'Mailboxes on your own domain, such as care@ and orders@, that land in One Inbox. Each email thread sits on the customer’s record beside her WhatsApp conversation and calls, with labels, drafts, shared access for the team, and order, receipt and review emails sent from the same place.',
  pointsHead: 'Email that knows the customer.',
  points: [
    ['Your own domain', 'Professional addresses on your shop’s name, not a personal mailbox.', 'mail'],
    ['Threads on her record', 'Every email beside her WhatsApp, calls, purchases and gold plan.', 'record'],
    ['Shared by the team', 'Mailboxes your team works from together, with labels and drafts.', 'users'],
    ['Complaints reach the right person', 'A loose stone or a late order goes straight to the manager with her bill.', 'route'],
    ['Order and review emails', 'Confirmations, shipping updates and review requests sent automatically.', 'send'],
    ['Nothing leaves with a person', 'When someone leaves, the mailbox and its history stay with the business.', 'shield'],
  ],
  howName: 'How to set up business email for a jewellery shop',
  steps: [
    ['Choose your addresses', 'care@, orders@ or a mailbox for each salesperson.'],
    ['Point your domain', 'We add the records to your domain with you.'],
    ['Bring in your customers', 'So every email opens on the right customer record.'],
    ['Share the mailboxes', 'Decide who sees which mailbox and how emails are routed.'],
    ['Switch on order emails', 'Order, shipping and review emails go out automatically.'],
  ],
  faqs: [
    { q: 'Can I use my own domain?', a: 'Yes. Mailboxes such as care@ and orders@ run on your own domain.' },
    { q: 'Where do emails appear?', a: 'In One Inbox, on the customer’s record beside her WhatsApp conversation and calls.' },
    { q: 'Can my team share a mailbox?', a: 'Yes. Mailboxes are shared, with labels and drafts, and conversations are routed by your rules.' },
    { q: 'Does it send order emails?', a: 'Yes. Order confirmations, shipping updates and review requests go out automatically from your store.' },
  ],
  partOf: 'Email is one channel in One Inbox, beside WhatsApp, calls, Instagram, Facebook and webchat, all on the same customer record.',
  bandTitle: 'Give every email a home.',
  bandText: 'Your domain, your mailboxes, on the same record as every other conversation.',
});

module.exports = [whatsappApi, businessEmail];
