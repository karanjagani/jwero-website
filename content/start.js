// /start — the self-serve funnel: pick your business, pick how the AI starts, create the
// workspace in the product. Registration, payment and onboarding happen inside
// os.jwero.ai; this page gets the reader there with the right context.
const L = require('../lib');
const APP = 'https://os.jwero.ai';

const TIERS = [
  ['assist', 'Assist', 'Start here', 'AI drafts, your team sends. Every reply, reminder and follow-up waits for a person. Where every business starts.'],
  ['approve', 'Approve', 'Most chosen', 'The AI prepares the work — follow-ups, win-backs, scheme reminders — and you approve with one tap.'],
  ['autopilot', 'Autopilot', 'Earned', 'Action types that have proved accurate run on their own inside daily caps, and demote themselves if anything drifts.'],
];

const start = {
  slug: 'start',
  title: 'Get Started — Create Your Jwero Workspace | Jwero',
  description: 'Three steps to a live Jwero workspace: tell us the kind of jewellery business you run, pick how much the AI does on its own, create your workspace, with the first month at ₹3,600. Pay and onboard inside the product; a real person is one WhatsApp message away.',
  breadcrumbs: [['Home', '/'], ['Get started']],
  faqs: [
    { q: 'Do I pay on this page?', a: 'No. You create the account with Google, LinkedIn or email, and billing is set up inside Jwero. The first month of Jwero One is ₹3,600 instead of ₹18,000; after that it bills monthly, and you can export everything, any time.' },
    { q: 'How long until I am live?', a: 'Set-up takes a day for most shops: customers imported, your WhatsApp number connected, catalogue published, approvals on from day one. Everything else follows in stages.' },
    { q: 'Can I get help instead of doing it myself?', a: 'Yes — every step below has a chat-or-call button; we can run onboarding with you.' },
  ],
  body: `
${L.hero({
  eyebrow: 'GET STARTED',
  h1: 'Three steps to a workspace that runs your whole jewellery business.',
  sub: 'Tell us the kind of jewellery business you run, pick how much the AI may do, and create your workspace. Onboarding and billing happen inside Jwero — a real person is one message away at every step.',
  primary: { href: '#', label: 'Rather talk first? Chat or call', wa: 'bookdemo' },
  secondary: { href: '/pricing', label: 'See pricing' },
})}

${L.section(
  `<div class="start" data-start>
    <ol class="start-steps" aria-label="Progress">
      <li class="is-on" data-step="1"><b>1</b><span>Your business</span></li>
      <li data-step="2"><b>2</b><span>How much the AI may do</span></li>
      <li data-step="3"><b>3</b><span>Create your workspace</span></li>
    </ol>

    <div class="start-panel is-on" data-panel="1">
      <h2>I run a…</h2>
      <div class="start-grid">${L.PERSONAS.concat([{ key: 'trader', label: 'Diamond trader', products: ['/products/inventory'] }]).map((p) => `<button type="button" class="start-opt" data-persona="${p.key}">${L.icon(L.LINK_ICONS[p.products[0]] || 'gem')}<b>${p.label}</b></button>`).join('')}</div>
    </div>

    <div class="start-panel" data-panel="2">
      <h2>How much should the AI do on its own?</h2>
      <div class="start-grid start-grid-3">${TIERS.map(([k, n, f, d]) => `<button type="button" class="start-opt start-tier" data-tier="${k}"><em>${f}</em><b>${n}</b><span>${d}</span></button>`).join('')}</div>
      <p class="sim-small">This is a setting, not a price: every module is in Jwero One whichever you pick. Every business starts at Assist in practice and promotes the AI one action type at a time.</p>
    </div>

    <div class="start-panel" data-panel="3">
      <h2>Create your workspace</h2>
      <div class="start-summary"><p><span>Business</span><b data-sum="persona">—</b></p><p><span>AI starts at</span><b data-sum="tier">—</b></p></div>
      <div class="cta-row"><a class="btn btn-primary btn-mark" data-start-go href="${APP}/signup?utm_source=jwero.ai&utm_medium=start">${L.mark('mark-xs')}Start for ₹3,600 at os.jwero.ai</a><a class="btn btn-ghost" href="#" data-wa="bookdemo" data-start-wa>Set it up with a person</a></div>
      <ol class="start-next"><li><b>Create your account</b> with Google, LinkedIn or email. Your first month of Jwero One is ₹3,600.</li><li><b>Onboarding inside Jwero</b> seeds your masters, templates, price lists and the live gold rate for your kind of business.</li><li><b>Import customers and connect WhatsApp</b> — we can do this with you; approvals are on from day one.</li><li><b>Billing</b> is set up in the product: ₹3,600 for the first month, then ₹18,000 a month.</li></ol>
    </div>

    <div class="start-nav"><button type="button" class="btn btn-ghost" data-start-back hidden>Back</button></div>
  </div>`
)}

${L.section(`${require('./positioning').quoteOne(0)}<p class="cta-note" style="text-align:center;margin-top:16px">Rather have Jwero run it for you? <a href="/jewellery-business-as-a-service">Let Jwero handle it →</a> No subscription, every tool included.</p>`)}
${L.section(L.safeToTryStrip(), { tone: 'tint' })}
${L.section(`${L.sectionHead('BEFORE YOU START', 'Three questions people ask on this page.', '')}${L.faqBlock([
  { q: 'Do I pay on this page?', a: 'No. You create the account with Google, LinkedIn or email, and billing is set up inside Jwero. The first month of Jwero One is ₹3,600 instead of ₹18,000; after that it bills monthly, and you can export everything, any time.' },
  { q: 'How long until I am live?', a: 'Set-up takes a day for most shops: customers imported, your WhatsApp number connected, catalogue published, approvals on from day one. Everything else follows in stages.' },
  { q: 'Can I get help instead of doing it myself?', a: 'Yes — every step has a chat-or-call button; we can run onboarding with you.' },
])}`)}
`,
};

module.exports = [start];
