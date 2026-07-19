// Shared HTML helpers for the Jwero marketing site build.
// All helpers return HTML strings; content modules compose them.

function esc(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// Hero with optional right-side product mock.
function hero({ eyebrow, h1, sub, primary, secondary, note, mock }) {
  return `
<section class="hero">
  <div class="container hero-grid${mock ? '' : ' hero-solo'}">
    <div class="hero-copy">
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
      <h1>${h1}</h1>
      <p class="sub">${sub}</p>
      <div class="cta-row">
        ${primary ? `<a class="btn btn-gold" href="${primary.href}" ${primary.wa ? `data-wa="${esc(primary.wa)}"` : ''}>${primary.label}</a>` : ''}
        ${secondary ? `<a class="btn btn-ghost" href="${secondary.href}">${secondary.label}</a>` : ''}
      </div>
      ${note ? `<p class="cta-note">${note}</p>` : ''}
    </div>
    ${mock ? `<div class="hero-mock">${mock}</div>` : ''}
  </div>
</section>`;
}

function sectionHead(eyebrow, title, lead) {
  return `
    <div class="section-head">
      ${eyebrow ? `<p class="eyebrow">${eyebrow}</p>` : ''}
      <h2>${title}</h2>
      ${lead ? `<p class="lead">${lead}</p>` : ''}
    </div>`;
}

function section(inner, opts = {}) {
  const cls = ['section', opts.tone ? `section-${opts.tone}` : ''].filter(Boolean).join(' ');
  return `<section class="${cls}"${opts.id ? ` id="${opts.id}"` : ''}><div class="container">${inner}</div></section>`;
}

// Grid of simple cards: [{icon,title,text}]
function cards(items, cols = 3) {
  return `<div class="grid grid-${cols}">${items
    .map(
      (c) => `
    <div class="card">
      ${c.icon ? `<div class="card-icon">${c.icon}</div>` : ''}
      <h3>${c.title}</h3>
      <p>${c.text}</p>
      ${c.link ? `<a class="card-link" href="${c.link.href}">${c.link.label} →</a>` : ''}
    </div>`
    )
    .join('')}</div>`;
}

// Numbered steps
function steps(items) {
  return `<ol class="steps">${items
    .map(
      (s, i) => `
    <li class="step">
      <span class="step-n">${i + 1}</span>
      <div><h3>${s.title}</h3><p>${s.text}</p></div>
    </li>`
    )
    .join('')}</ol>`;
}

// Stat wall — product-truth numbers only (honesty tier A).
function stats(items) {
  return `<div class="stats">${items
    .map((s) => `<div class="stat"><div class="stat-n">${s.n}</div><div class="stat-l">${s.l}</div></div>`)
    .join('')}</div>`;
}

// FAQ block; build.js also emits FAQPage JSON-LD from the same data.
function faqBlock(faqs) {
  return `<div class="faq">${faqs
    .map(
      (f) => `
    <details class="faq-item">
      <summary>${f.q}</summary>
      <div class="faq-a"><p>${f.a}</p></div>
    </details>`
    )
    .join('')}</div>`;
}

// Governance strip — used on several pages, one source of truth.
function governanceStrip() {
  return section(
    `${sectionHead(
      'GOVERNANCE FIRST',
      'AI proposes. You dispose.',
      'Nothing reaches a customer without passing your rules. This is not a promise in a brochure — approval queues, daily caps and kill switches are enforced in the product.'
    )}
    ${cards(
      [
        { icon: '☑', title: 'Approval queues', text: 'Every AI-drafted message, offer or follow-up waits in a queue you review. Approve, edit or reject — one tap each.' },
        { icon: '◷', title: 'Daily caps', text: 'Hard limits on how many actions AI staff can take per day, per action type. Set once, enforced always.' },
        { icon: '⏻', title: 'Kill switch', text: 'Pause one agent, one action type, or all AI activity instantly — at five different scopes.' },
        { icon: '≡', title: 'Action log', text: 'Every AI action is recorded: what it did, why, and who approved it. Autonomy is earned, never assumed.' },
      ],
      4
    )}`,
    { tone: 'ink' }
  );
}

// Reusable CSS-built product mocks (no images, no fantasy dashboards).
const mockApproval = `
<div class="mock" role="img" aria-label="Illustration of the Jwero approval queue">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">Approval queue · 3 waiting</span></div>
  <div class="mock-row">
    <div class="mock-msg"><strong>Anniversary follow-up · Sofia M.</strong><br>“It has been a year since the emerald ring — we would love to see you both again…”</div>
    <div class="mock-actions"><button class="chip chip-go" type="button">Approve</button><button class="chip" type="button">Edit</button></div>
  </div>
  <div class="mock-row">
    <div class="mock-msg"><strong>Instalment reminder · R. Shah</strong><br>“A gentle reminder: month 7 of 11 on your gold plan is due Friday…”</div>
    <div class="mock-actions"><button class="chip chip-go" type="button">Approve</button><button class="chip" type="button">Edit</button></div>
  </div>
  <div class="mock-foot">Daily cap 40 · Quiet hours on · Kill switch armed</div>
</div>`;

const mockChat = `
<div class="mock" role="img" aria-label="Illustration of a WhatsApp sales conversation">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">WhatsApp · 11:42 pm</span></div>
  <div class="bubble in">Do you have this bangle in 22k, around 18 grams?</div>
  <div class="bubble out">Yes — two designs in 22k near 18 g. At today’s rate: full price with making charges below. Shall I hold one for a store visit?<span class="bubble-tag">Drafted by AI staff · sent after approval</span></div>
  <div class="bubble in">Saturday 5pm works.</div>
  <div class="mock-foot">Enquiry → priced reply → appointment. While the store slept.</div>
</div>`;

const mockMemory = `
<div class="mock" role="img" aria-label="Illustration of a Jwero customer record">
  <div class="mock-bar"><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-dot"></span><span class="mock-title">Customer · Meera K.</span></div>
  <div class="mock-kv"><span>Gold plan balance</span><strong>7 of 11 months</strong></div>
  <div class="mock-kv"><span>Daughter’s wedding</span><strong>November</strong></div>
  <div class="mock-kv"><span>Prefers</span><strong>Temple work · 22k · yellow</strong></div>
  <div class="mock-kv"><span>Best time to reach</span><strong>Weekdays, evening · WhatsApp</strong></div>
  <div class="mock-foot">90+ fields like these, on every customer — with a “why” behind every score.</div>
</div>`;

// Standard pre-footer CTA band.
function ctaBand(title, sub, waContext) {
  return `
<section class="cta-band">
  <div class="container">
    <h2>${title}</h2>
    <p>${sub}</p>
    <div class="cta-row center">
      <a class="btn btn-gold" href="#" data-wa="${esc(waContext)}">See it on WhatsApp</a>
      <a class="btn btn-ghost-light" href="/book-demo.html">Book a demo</a>
    </div>
    <p class="cta-note">We reply on WhatsApp within minutes during business hours. Test us.</p>
  </div>
</section>`;
}

// Two-column pain/agitate rows for pain pages.
function painRows(items) {
  return items
    .map(
      (p) => `
  <div class="pain-row">
    <div class="pain-q">“${p.quote}”</div>
    <div class="pain-x"><h3>${p.title}</h3><p>${p.text}</p></div>
  </div>`
    )
    .join('');
}

module.exports = {
  esc, hero, section, sectionHead, cards, steps, stats, faqBlock,
  governanceStrip, ctaBand, painRows, mockApproval, mockChat, mockMemory,
};
