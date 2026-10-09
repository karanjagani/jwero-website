// Two pages that carry the awareness and assurance jobs:
// /why-an-os — the category explained once, so every ad and post can link to it.
// /how-it-goes: what happens after the first message, in outline.
const L = require('../lib');

const whyAnOs = {
  slug: 'why-an-os',
  title: 'Why Jewellers Need an Operating System, Not Another Tool | Jwero',
  description: 'What an operating system for a jewellery business is, why a CRM + ERP + WhatsApp tool never becomes one, and what "run by AI" means in practice: one record, every department on it, AI that acts on its own, and asks first only where you choose.',
  breadcrumbs: [['Home', '/'], ['Why an OS']],
  faqs: [
    { q: 'Isn’t an “operating system” just marketing for an all-in-one?', a: 'An all-in-one bundles modules under one login. An operating system makes every module read and write the same record. The test: when a customer buys at the counter, does her WhatsApp thread, her scheme balance and her next follow-up change without anyone syncing anything? In a bundle, no. In an OS, yes — it is one row.' },
    { q: 'I already have a CRM and an ERP. Why is that not an OS?', a: 'Because they hold two copies of the same customer and the same piece, and someone reconciles them. The reconciliation is where memory is lost and where the follow-up dies. An OS removes the second copy, not the first tool.' },
    { q: 'What does “run by AI” actually mean here?', a: 'An AI workforce drafts the work — replies, follow-ups, reminders, invitations, reorder suggestions — from the one record. It runs on its own inside daily caps and quiet hours, and you choose, action type by action type, what should wait for your approval. A kill switch stops any of it, at five scopes, instantly.' },
    { q: 'Does this only make sense for chains?', a: 'No. A single counter has the same problem at a smaller scale: the owner is the operating system, and the business stops remembering when the owner is not there. Chains simply feel it at every branch.' },
  ],
  body: `
${L.hero({
  eyebrow: 'WHY AN OS',
  h1: 'Your tools keep records. None of them sees the whole business.',
  sub: 'A billing tool knows the invoice. A WhatsApp tool knows the chat. The stock sheet knows the piece, and the karigar book knows the gold. Nobody sees all of it at once: what Meera asked, what is on the shelf, what the vendor is owed, what the day closed at. An operating system fixes that with one move: one record that every module reads and writes.',
  primary: { href: '#', label: 'Show me one record doing all of it', wa: 'platform' },
  secondary: { href: '/platform', label: 'Take the platform tour' },
})}

${L.section(
  `${L.sectionHead('THE DIFFERENCE', 'One thing happens in your shop. Does the rest of your business know?', 'With separate software, each tool updates its own copy and someone has to carry the news to the others. With an operating system, one event updates everything at once. Pick a moment and compare.')}
  ${L.impactGrid([
    { lever: 'A customer buys at the counter', before: 'The bill is in billing. Her WhatsApp thread, her scheme and her follow-up know nothing.', after: 'One row updates: her record, her scheme balance, her next follow-up, the stock, the books.', link: { href: '/products/pos', label: 'See the counter' } },
    { lever: 'The gold rate moves', before: 'Someone reprices the catalogue, the website and the quotes — or doesn’t.', after: 'One rule reprices every channel at once, with overrides routed through approval.', link: { href: '/platform/pricing-engine', label: 'See the pricing engine' } },
    { lever: 'A salesperson leaves', before: 'Twenty years of relationships leave with the phone.', after: 'Every signal she ever gave you — scored, explained — stays with the business; the next person walks up already knowing her.', link: { href: '/platform/customer-memory', label: 'See customer memory' } },
    { lever: 'An enquiry lands at 11pm', before: 'It waits for morning. She has bought elsewhere by then.', after: 'The AI sends a priced reply from her record, at any hour.', link: { href: '/platform/ai-workforce', label: 'See the AI workforce' } },
  ])}`
)}

${L.section(
  `${L.sectionHead('THREE WORDS, DEFINED', 'Autonomous. Jewellery. OS.', '')}
  ${L.cards([
    { icon: '⏻', title: 'Autonomous', text: 'The AI workforce drafts and, where you allow it, acts — inside daily caps, quiet hours and a kill switch at five scopes. Autonomy is earned one action type at a time, never assumed.' },
    { icon: '◆', title: 'Jewellery', text: 'Weight, purity, live rate, making charge, hallmark, memo, karigar, scheme, girvi — first-class in the data model, not fields bolted onto retail software.' },
    { icon: '▣', title: 'OS', text: 'One customer record, one catalogue, one inventory truth, one ledger. Every module — WhatsApp, counter, website, workshop, schemes — reads and writes the same row.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('YOU STAY IN CHARGE', 'An operating system that works with what you already trust.', 'Moving to one system does not mean giving up your accountant, your judgment or your say in what comes next.')}
  ${L.cards([
    { title: 'Your accountant keeps working their way', text: 'Bills, returns and payments post to Jwero’s ledger and reach Tally or Zoho Books automatically. Your CA carries on in the software they know, with less to type.', link: { href: '/platform/integrations', label: 'How the bridge works' } },
    { title: 'AI that works on its own, inside your limits', text: 'Replies, follow-ups and reminders go out automatically, inside daily caps and quiet hours. You choose which kinds of action need your approval, and one switch stops it all.', link: { href: '/platform/ai-workforce', label: 'How the AI is governed' } },
    { title: 'A platform that keeps growing with you', text: 'New capabilities ship regularly, and you are told about each one as it lands.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('COMING FROM AN ERP?', 'The three pages for the three sentences.', '')}
  ${L.cards([
    { title: '“We already have an ERP.”', text: 'Why the ERP era is ending the way the register era did.', link: { href: '/erp-to-os', label: 'From ERP to OS' } },
    { title: '“Switching is risky.”', text: 'The risk ledger: six imagined, six paid.', link: { href: '/erp-to-os/switching', label: 'Is switching risky?' } },
    { title: '“My ERP has everything.”', text: 'Eight questions to ask it, and what the gaps cost.', link: { href: '/erp-to-os/make-do', label: 'Does my ERP have everything?' } },
  ])}`
, { tone: 'tint' })}

${L.ctaBand('See one record run the whole business.', 'Bring one customer’s name. We will show every module touching the same row — live, on chat or a video call.', 'platform')}
`,
};

const howItGoes = {
  slug: 'how-it-goes',
  title: 'What Happens After You Message — The First 30 Days with Jwero | Jwero',
  description: 'What happens after your first message: a short call, a pilot on your own data, a written plan with a change-freeze around your season, go-live, and your first growth report.',
  breadcrumbs: [['Home', '/'], ['How it goes']],
  faqs: [
    { q: 'Who do I actually talk to?', a: 'A real person on the founders’ WhatsApp desk, with our AI drafting alongside. Not a call centre.' },
    { q: 'What do I need to prepare?', a: 'One real situation from your business and whatever customer or stock export you already have — however messy. We import what exists and reconcile during onboarding.' },
    { q: 'What if it isn’t right for us?', a: 'We say so on the first call, in the first five minutes if we can. A pilot on your own data is the test; you can stop at any point, and your data leaves with you.' },
    { q: 'When do I pay?', a: 'When you create your workspace. The first month is ₹3,600 instead of ₹18,000; after that Jwero One is ₹18,000 a month. Billing is set up inside Jwero, not on this site.' },
  ],
  body: `
${L.hero({
  eyebrow: 'HOW IT GOES',
  h1: 'You send one message. Here is everything that happens next.',
  sub: 'No mystery, no “our team will get back to you”. This is the sequence, who does each step, and how long it takes — from the first message to your first growth report.',
  primary: { href: '#', label: 'Send the first message', wa: 'bookdemo' },
  secondary: { href: '/start', label: 'Or create your workspace' },
})}

${L.section(
  `${L.sectionHead('THE SEQUENCE', 'From first message to first report.', '')}
  ${L.steps([
    { title: 'First, a reply', text: 'A real person and our AI reply in the chat. You get a straight answer to whatever you asked, and a slot for a call if you want one.' },
    { title: 'Import', text: 'You bring one real situation and we run it through Jwero live. Then we import what exists, customers, catalogue, stock, however messy, and reconcile it with you. You evaluate on your customers, not a demo dataset, and get a written plan with a straight price and a change-freeze around your season. Then it is your call.' },
    { title: 'Go live', text: 'Your WhatsApp number connected, catalogue published, roles trained in your language. The AI starts working inside the limits you set, with approval on for whatever you choose.' },
    { title: 'First report', text: 'Past customers who returned, appointments booked, enquiries answered in minutes, revenue attributed, generated from your own data, so you judge on your evidence.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHO DOES WHAT', 'Your side is small on purpose.', '')}
  ${L.impactGrid([
    { lever: 'Data', before: 'You export whatever you have. Excel is fine. Inconsistent branches are normal.', after: 'We map, import and reconcile — you confirm the mapping, nothing else.' },
    { lever: 'WhatsApp', before: 'You keep your number.', after: 'We connect it to the official API with templates, consent and opt-out handling in place.' },
    { lever: 'Your team', before: 'If they can use WhatsApp, they can run Jwero.', after: 'Role-based training in your language; caps and your chosen approvals keep day one safe.' },
    { lever: 'Your season', before: 'You tell us the dates.', after: 'A written change-freeze: nothing disruptive happens during your peak weeks.' },
  ])}`
, { tone: 'tint' })}

${L.section(L.safeToTryStrip())}

${L.ctaBand('Start the sequence.', 'One message. Everything above follows, in that order.', 'bookdemo')}
`,
};

// /why-an-os was merged into /platform on 2026-10-09 (one page for "why an OS" and the tour).
// The page object above is no longer published; its three sections and questions feed /platform.
const whySections = `
<span id="why-an-os"></span>
${L.section(
  `${L.sectionHead('THE DIFFERENCE', 'One thing happens in your shop. Does the rest of your business know?', 'With separate software, each tool updates its own copy and someone has to carry the news to the others. With an operating system, one event updates everything at once. Pick a moment and compare.')}
  ${L.impactGrid([
    { lever: 'A customer buys at the counter', before: 'The bill is in billing. Her WhatsApp thread, her scheme and her follow-up know nothing.', after: 'One row updates: her record, her scheme balance, her next follow-up, the stock, the books.', link: { href: '/products/pos', label: 'See the counter' } },
    { lever: 'The gold rate moves', before: 'Someone reprices the catalogue, the website and the quotes — or doesn’t.', after: 'One rule reprices every channel at once, with overrides routed through approval.', link: { href: '/platform/pricing-engine', label: 'See the pricing engine' } },
    { lever: 'A salesperson leaves', before: 'Twenty years of relationships leave with the phone.', after: 'Every signal she ever gave you — scored, explained — stays with the business; the next person walks up already knowing her.', link: { href: '/platform/customer-memory', label: 'See customer memory' } },
    { lever: 'An enquiry lands at 11pm', before: 'It waits for morning. She has bought elsewhere by then.', after: 'The AI sends a priced reply from her record, at any hour.', link: { href: '/platform/ai-workforce', label: 'See the AI workforce' } },
  ])}`
)}

${L.section(
  `${L.sectionHead('THREE WORDS, DEFINED', 'Autonomous. Jewellery. OS.', '')}
  ${L.cards([
    { icon: '⏻', title: 'Autonomous', text: 'The AI workforce drafts and, where you allow it, acts — inside daily caps, quiet hours and a kill switch at five scopes. Autonomy is earned one action type at a time, never assumed.' },
    { icon: '◆', title: 'Jewellery', text: 'Weight, purity, live rate, making charge, hallmark, memo, karigar, scheme, girvi — first-class in the data model, not fields bolted onto retail software.' },
    { icon: '▣', title: 'OS', text: 'One customer record, one catalogue, one inventory truth, one ledger. Every module — WhatsApp, counter, website, workshop, schemes — reads and writes the same row.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('YOU STAY IN CHARGE', 'An operating system that works with what you already trust.', 'Moving to one system does not mean giving up your accountant, your judgment or your say in what comes next.')}
  ${L.cards([
    { title: 'Your accountant keeps working their way', text: 'Bills, returns and payments post to Jwero’s ledger and reach Tally or Zoho Books automatically. Your CA carries on in the software they know, with less to type.', link: { href: '/platform/integrations', label: 'How the bridge works' } },
    { title: 'AI that works on its own, inside your limits', text: 'Replies, follow-ups and reminders go out automatically, inside daily caps and quiet hours. You choose which kinds of action need your approval, and one switch stops it all.', link: { href: '/platform/ai-workforce', label: 'How the AI is governed' } },
    { title: 'A platform that keeps growing with you', text: 'New capabilities ship regularly, and you are told about each one as it lands.' },
  ])}`
)}
`;
module.exports = [howItGoes];
module.exports.why = { sections: whySections, faqs: whyAnOs.faqs };
