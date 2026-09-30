// /start — the self-serve funnel: pick your business, pick a tier, create the
// workspace in the product. Registration, payment and onboarding happen inside
// os.jwero.ai; this page gets the reader there with the right context.
const L = require('../lib');
const APP = 'https://os.jwero.ai';

const TIERS = [
  ['assist', 'Assist', 'Start here', 'AI drafts, your team sends. Customer memory, WhatsApp on your number, live-price catalogues, occasion greetings with approval, Tally / Zoho bridge.'],
  ['approve', 'Approve', 'Most chosen', 'Everything in Assist, plus the AI workforce with one-tap approval, gold schemes, digital gold, the weekly growth report, inventory ageing, loyalty and campaigns.'],
  ['autopilot', 'Autopilot', 'Earned', 'Everything in Approve, plus earned per-action autonomy with auto-demotion, the AI voice agent, video counter and priority support.'],
];

const start = {
  slug: 'start',
  title: 'Get Started — Create Your Jwero Workspace | Jwero',
  description: 'Three steps to a live Jwero workspace: tell us the kind of jewellery business you run, pick a tier, create your workspace. Pay and onboard inside the product; a real person is one WhatsApp message away.',
  breadcrumbs: [['Home', '/'], ['Get started']],
  faqs: [
    { q: 'Do I pay on this page?', a: 'No. The account is free to create — Google, LinkedIn or email, no card. Billing for a tier is set up inside Jwero once you have seen it on your own data; entry tiers bill monthly and you can export everything, any time.' },
    { q: 'How long until I am live?', a: 'Days, not months, for the first stage: customers imported, your WhatsApp number connected, catalogue published, approvals on from day one.' },
    { q: 'Can I get help instead of doing it myself?', a: 'Yes — every step below has a WhatsApp button; a real person and our AI reply within minutes, and we can run onboarding with you.' },
  ],
  body: `
${L.hero({
  eyebrow: 'GET STARTED',
  h1: 'Three steps to a workspace that remembers every customer.',
  sub: 'Tell us the kind of jewellery business you run, pick how much the AI may do, and create your workspace. Onboarding and billing happen inside Jwero — a real person is one message away at every step.',
  primary: { href: '#', label: 'Rather talk first? WhatsApp us', wa: 'bookdemo' },
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
      <div class="start-grid">${L.PERSONAS.map((p) => `<button type="button" class="start-opt" data-persona="${p.key}">${L.icon(L.LINK_ICONS[p.products[0]] || 'gem')}<b>${p.label}</b></button>`).join('')}</div>
    </div>

    <div class="start-panel" data-panel="2">
      <h2>How much should the AI do on its own?</h2>
      <div class="start-grid start-grid-3">${TIERS.map(([k, n, f, d]) => `<button type="button" class="start-opt start-tier" data-tier="${k}"><em>${f}</em><b>${n}</b><span>${d}</span></button>`).join('')}</div>
      <p class="sim-small">Every business starts at Assist in practice; you promote the AI one action type at a time. Pick the tier you expect to run — nothing is billed here.</p>
    </div>

    <div class="start-panel" data-panel="3">
      <h2>Create your workspace</h2>
      <div class="start-summary"><p><span>Business</span><b data-sum="persona">—</b></p><p><span>Tier</span><b data-sum="tier">—</b></p></div>
      <div class="cta-row"><a class="btn btn-primary btn-mark" data-start-go href="${APP}/signup?utm_source=jwero.ai&utm_medium=start">${L.mark('mark-xs')}Create my free account at os.jwero.ai</a><a class="btn btn-ghost" href="#" data-wa="bookdemo" data-start-wa>Set it up with a person on WhatsApp</a></div>
      <ol class="start-next"><li><b>Create a free account</b> — Google, LinkedIn or email, no card.</li><li><b>Onboarding inside Jwero</b> seeds your masters, templates, price lists and the live gold rate for your kind of business.</li><li><b>Import customers and connect WhatsApp</b> — we can do this with you; approvals are on from day one.</li><li><b>Billing</b> is set up in the product once you have seen it on your own data.</li></ol>
    </div>

    <div class="start-nav"><button type="button" class="btn btn-ghost" data-start-back hidden>Back</button></div>
  </div>`
)}

${L.section(L.safeToTryStrip(), { tone: 'tint' })}
${L.section(`${L.sectionHead('BEFORE YOU START', 'Three questions people ask on this page.', '')}${L.faqBlock([
  { q: 'Do I pay on this page?', a: 'No. The account is free to create — Google, LinkedIn or email, no card. Billing for a tier is set up inside Jwero once you have seen it on your own data; entry tiers bill monthly and you can export everything, any time.' },
  { q: 'How long until I am live?', a: 'Days, not months, for the first stage: customers imported, your WhatsApp number connected, catalogue published, approvals on from day one.' },
  { q: 'Can I get help instead of doing it myself?', a: 'Yes — every step has a WhatsApp button; a real person and our AI reply within minutes, and we can run onboarding with you.' },
])}`)}
`,
};

module.exports = [start];
