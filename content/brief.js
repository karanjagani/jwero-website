// /brief — the one-page brief a successor, a manager or a CRM executive hands
// to the owner. Printable (print CSS in site.css), shareable on WhatsApp, and
// written for the person who has not read the site.
const L = require('../lib');

const brief = {
  slug: 'brief',
  title: 'Jwero in One Page — A Brief for the Owner | Jwero',
  description: 'One page for the owner: what Jwero is, what changes on day one, what it does not do yet, what it costs to find out, and the three questions to ask on the first call. Print it or send it on WhatsApp.',
  breadcrumbs: [['Home', '/'], ['The one-page brief']],
  body: `
${L.hero({
  eyebrow: 'THE ONE-PAGE BRIEF',
  h1: 'Jwero, on one page, for the person who decides.',
  sub: 'Written for an owner who has not read the website and does not intend to. Print it, or send it on WhatsApp with one tap.',
  primary: { href: '#', label: 'Send this brief to the owner', share: 'The one-page brief on Jwero — five minutes, no jargon:' },
  secondary: { href: '#', label: 'Print or save as PDF', print: true },
})}

${L.section(`
<article class="brief" id="brief">
  <header class="brief-head">
    <div>${L.mark('brief-mark')}<strong>Jwero</strong> · You focus on jewellery. We handle the chaos.</div>
    <span>jwero.ai · care@jwero.ai · +91 91699 59959</span>
  </header>

  <section class="brief-block">
    <h2>What it is, in one sentence</h2>
    <p>Jwero runs the whole jewellery business — customers, catalogue, WhatsApp, counter, schemes, workshop, books — from one record, and the AI does the remembering, the drafting and the flagging of what is slipping. Nothing the AI writes is sent until a person taps yes, until you decide otherwise, one action type at a time.</p>
  </section>

  <section class="brief-block brief-cols">
    <div>
      <h2>What changes on day one</h2>
      <ul>
        <li>Every WhatsApp enquiry gets a priced reply drafted from the catalogue at today’s rate — waiting for your tap.</li>
        <li>Every customer is one record: purchases, scheme balance, occasions, taste, every conversation — owned by the business, not a salesperson’s phone.</li>
        <li>The rate changes once; every price on every channel follows.</li>
        <li>Scheme collections, old-gold exchange, returns and day-close run at the counter, GST-ready, posted to the books; Tally and Zoho Books bridges included.</li>
        <li>Each morning, a list of who to call and why — scored from what customers actually did.</li>
      </ul>
    </div>
    <div>
      <h2>What it does not do yet</h2>
      <ul>
        <li>No e-invoice IRN or e-way bill generation.</li>
        <li>Scheme instalments are collected automatically; girvi interest is recorded when paid.</li>
        <li>No CAD-file-to-BOM conversion; BOMs are entered by production.</li>
        <li>No courier integration.</li>
        <li>Rails for every market: live rate feed, GST, VAT or sales-tax shapes, local phone defaults.</li>
      </ul>
      <p class="brief-note">The public roadmap at jwero.ai/roadmap says what is shipped, rolling out and not yet — before you buy.</p>
    </div>
  </section>

  <section class="brief-block brief-cols">
    <div>
      <h2>What it costs to find out</h2>
      <ul>
        <li>The first month is ₹3,600 instead of ₹18,000, every module included. After that, ₹18,000 a month with no lock-in.</li>
        <li>A fifteen-minute call on one real situation from your shop. If it does not fit, they say so on the call.</li>
        <li>A pilot on your own data in days 2–5, inside that first month.</li>
        <li>A written change-freeze around your season: nothing goes live in peak weeks.</li>
      </ul>
    </div>
    <div>
      <h2>Three questions to ask on the first call</h2>
      <ol>
        <li>“Show me one of my customers, with everything you would know about her, on one screen.”</li>
        <li>“Change the gold rate now and show me every price that moved.”</li>
        <li>“Switch the AI off. How long does it take, and what stops?”</li>
      </ol>
    </div>
  </section>

  <section class="brief-block">
    <h2>Who built it</h2>
    <p>Jwero is built by Mahendra, Karan and Manav Jagani — a jewellery family — and used by named jewellers listed at jwero.ai/customers. The company, its CIN and registered office are in the footer of every page of the site.</p>
  </section>

  <footer class="brief-foot">
    <span>Sent from jwero.ai/brief</span>
    <span>Chat, call or video with the founders’ desk at jwero.ai · +91 91699 59959</span>
  </footer>
</article>
<div class="cta-row center brief-cta">
  <a class="btn btn-primary" href="#" data-wa="brief">Show me this on my own business</a>
  <a class="btn btn-ghost" href="/how-it-goes">What happens after you message</a>
</div>`)}
`,
};

module.exports = [brief];
