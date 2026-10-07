// Referral page and ad landing pages (2026-10-07). The referral page carries a
// ?ref= name into the WhatsApp message (site.js reads it); the landing pages
// have one action each and stay out of the sitemap.
const L = require('../lib');

const refer = {
  slug: 'refer',
  title: 'Refer a Jeweller to Jwero: Save 10% for Each One Who Joins | Jwero',
  description: 'Know a jeweller who should be on Jwero? Send them this page, tell us you sent them, and take 10% off what you pay for every jeweller who joins through you.',
  breadcrumbs: [['Home', '/'], ['Refer a jeweller']],
  faqs: [
    { q: 'How does the referral work?', a: 'Send a jeweller this page or any Jwero page with your name on the link. When they message us, your name arrives with the message. When they become a customer, you save 10% on your own subscription for each one.' },
    { q: 'Is there a limit?', a: 'Ten percent for each jeweller who joins through you, applied to your subscription. Ask us about how it stacks.' },
    { q: 'Do I need to be a Jwero customer to refer?', a: 'The saving is on your Jwero subscription, so yes. If you are not a customer yet, join the waitlist first.' },
  ],
  body: `
${L.hero({
  eyebrow: 'PASS IT ON',
  h1: 'Refer a jeweller. Save 10% for each one who joins.',
  sub: 'Jewellers trust other jewellers. Send this page to one who is drowning in tools, tell us you sent them, and every one who joins takes 10% off what you pay.',
  primary: { href: '#', label: 'Tell us who you referred', wa: 'refer' },
  secondary: { href: '/jewellery-business-as-a-service', label: 'What Jwero does' },
})}
${L.section(`${L.sectionHead('THREE STEPS', 'How it works.', '')}${L.steps([
  { title: 'Send a page', text: 'Use the share button below. The link carries your name, so we know who sent them.' },
  { title: 'They message us', text: 'When they chat with us, your name arrives with their first message.' },
  { title: 'You save 10%', text: 'When they become a customer, 10% comes off your subscription for each one.' },
])}
<div class="cta-row" style="margin-top:22px"><a class="btn btn-primary" href="#" data-share="A jeweller I know built their whole business on this. Worth a look:" data-refer-share>Send this page to a jeweller</a><a class="btn btn-ghost" href="#" data-wa="refer">Tell us who you referred</a></div>
<p class="cta-note" style="margin-top:12px">Add your name to the link yourself: <code>jwero.ai/?ref=your-name</code>. It stays on the link when they message us.</p>`)}
${L.section(`${L.sectionHead('WHAT THEY GET', 'What you are sending them to.', '')}${L.cards([
  { title: 'One record for the whole shop', text: 'Customers, counter, stock, schemes, books and team on one system, with AI that drafts and asks before it acts.', link: { href: '/products', label: 'Every product' } },
  { title: 'Run it, or have it run', text: '₹18,000 a month with every module, or Jwero’s specialists and AI run the work with no subscription.', link: { href: '/pricing', label: 'Pricing' } },
  { title: 'Live in a day', text: 'Customers, catalogue and stock imported, WhatsApp connected, approvals on from day one.', link: { href: '/platform/onboarding', label: 'Onboarding' } },
])}`, { tone: 'tint' })}
${L.ctaBand('Know a jeweller who needs this?', 'Send them the page. Then tell us their name, so the saving lands with you.', 'refer')}
`,
};

const lp = ({ slug, title, description, h1, sub, wa, points, cmp, close }) => ({
  slug: `lp/${slug}`, title, description, noindex: true, breadcrumbs: [['Home', '/'], [h1.split(':')[0]]],
  body: `
${L.hero({ eyebrow: 'JWERO', h1, sub, primary: { href: '#', label: 'Show me on WhatsApp', wa } })}
${L.section(`<div class="wa-jobs">${points.map(([t, d]) => `<article><h3>${t}</h3><p>${d}</p></article>`).join('')}</div>`)}
${L.section(`<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Today</th><th>With Jwero</th></tr></thead><tbody>${cmp.map(([r, a, b]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td class="wa-cmp-us">${b}</td></tr>`).join('')}</tbody></table></div>`, { tone: 'tint' })}
${require('./positioning').quotes(2)}
${L.ctaBand(close[0], close[1], wa)}
`,
});

const lpWhatsApp = lp({
  slug: 'whatsapp',
  title: 'WhatsApp for Jewellers: Every Enquiry Answered at Today’s Rate | Jwero',
  description: 'Your business number on the official WhatsApp API, the catalogue priced at today’s gold rate, AI replies your team approves, and payments in the chat.',
  h1: 'Every WhatsApp enquiry answered, with a real price, at any hour.',
  sub: 'Your existing number on the official WhatsApp Business Platform, your catalogue at today’s rate, AI that drafts the reply and waits for your yes, and payment inside the chat.',
  wa: 'lp-whatsapp',
  points: [['Your number, official', 'The number customers already have, moved to the official platform; the whole team answers from one inbox.'], ['Today’s rate, every reply', 'Pieces and prices come from your catalogue and the live rate, not from memory.'], ['AI drafts, you approve', 'Replies, follow-ups and reminders drafted by AI, sent after your tap until you let them run.'], ['Paid in the chat', 'Payment links inside WhatsApp; the order and invoice land on her record.']],
  cmp: [['An enquiry at 11pm', 'Waits for morning', 'Answered with pieces at today’s rate'], ['Who replies', 'Whoever holds the phone', 'A shared inbox, every reply on her record'], ['The price', 'Typed, often stale', 'From the catalogue at the live rate'], ['Payment', 'Bank details typed out', 'A link in the chat'], ['The customer when a salesperson leaves', 'Leaves with him', 'Stays on the shop’s record']],
  close: ['Send us one message.', 'The best demo of WhatsApp selling is a WhatsApp conversation.'],
});

const lpBilling = lp({
  slug: 'billing',
  title: 'Jewellery Billing at the Live Gold Rate: GST, Old Gold, Day Close | Jwero',
  description: 'Scan to bill at today’s rate with the full breakup, old gold exchange on the same bill, GST done, cash day close, and the books kept in step with Tally.',
  h1: 'Bill at today’s rate, with old gold and GST on one screen.',
  sub: 'Scan the tag, the price breaks up into metal, making, stones and GST at today’s rate. Old gold tested and taken on the same bill. The day closes itself, and the entries reach Tally without retyping.',
  wa: 'lp-billing',
  points: [['Scan to bill', 'The tag’s weight, purity and making rule price the piece at the rate you set this morning.'], ['Old gold on the same bill', 'Tested, weighed, valued and applied as a credit, with the voucher printed.'], ['GST without the scramble', 'CGST, SGST and IGST on every bill; GSTR-1, GSTR-3B and HSN reports at month end.'], ['Tally stays', 'Sales, returns, payments and expenses sync through the bridge; your CA keeps working in Tally.']],
  cmp: [['The rate', 'On a board, typed into a calculator', 'Set once, applied to every piece'], ['Old gold', 'A separate slip and a register', 'On the same bill, with the voucher'], ['Month end', 'The accountant re-enters every bill', 'Entries already in Tally'], ['Day close', 'From memory', 'Cash, card and UPI reconciled on one screen'], ['PAN above ₹2 lakh', 'Remembered, or not', 'Asked for on the bill']],
  close: ['See your counter at today’s rate.', 'Change the rate on a call and watch a bill reprice, then see it land in Tally.'],
});

module.exports = [refer, lpWhatsApp, lpBilling];
