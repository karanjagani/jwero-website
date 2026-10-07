const L = require('../lib');

const rolesHubFaqs = [
  { q: 'Is Jwero only for the owner, or does the whole team use it?', a: 'The whole team. The owner sees the business-wide picture, but sales staff, the counter cashier, the karigar’s supervisor, the accountant and the marketing person each work inside the parts of Jwero built for their job — on one shared record, not six separate logins to six separate tools.' },
  { q: 'Will AI replace these roles?', a: 'No — Jwero’s AI drafts and suggests; a person on your team approves. Every role on this page keeps its judgment calls. What changes is what fills the hours: less retyping and remembering, more relationship-building, craftsmanship and decision-making.' },
  { q: 'My team isn’t very "tech-savvy" — will they actually use this?', a: 'The interface is built around WhatsApp, familiar approval taps and plain-language reports — not a dense ERP screen. Role-by-role training is part of onboarding, and each role only sees the part of the system relevant to their job.' },
];

const rolesHub = {
  slug: 'roles',
  title: 'Roles — Everyone Jwero Touches in a Jewellery Business | Jwero',
  description: 'From the owner to the karigar to the cashier — how Jwero changes each role’s day, what skills it grows, and how to stay valuable as AI takes over routine work.',
  breadcrumbs: [['Home', '/'], ['Roles']],
  faqs: rolesHubFaqs,
  body: `
${L.hero({
  eyebrow: 'ROLES',
  h1: 'Every role in your jewellery business, on one system.',
  sub: 'Not a tool the owner uses alone — each role sees exactly the part built for their job. Find yours below: what changes, what skills it grows, and how to stay valuable as AI takes the repetitive work off your plate.',
  primary: { href: '#', label: 'Chat or call with us', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('LEADERSHIP', 'The people who own the outcome.', '')}
  <div class="filter-chips">
    <a href="#leadership" class="active">Leadership</a><a href="#frontline">Frontline &amp; sales</a><a href="#growth">Customer &amp; growth</a><a href="#manufacturing">Manufacturing &amp; ops</a><a href="#trade">Trade &amp; partnerships</a>
  </div>
  <div class="router-grid" id="leadership">
    <a class="router-card" href="/roles/owner"><div class="r-icon">◆</div><h3>Owner / Proprietor</h3><p>Runs the whole shop from your own memory. Now it runs from a record the business owns.</p></a>
    <a class="router-card" href="/roles/chain-owner"><div class="r-icon">◇</div><h3>Multi-store &amp; chain owner</h3><p>Stop calling every branch to know what happened today.</p></a>
    <a class="router-card" href="/roles/next-gen-successor"><div class="r-icon">✦</div><h3>Next-gen successor</h3><p>Inherit the relationships, not just the shop.</p></a>
  </div>`
)}

${L.section(
  `${L.sectionHead('FRONTLINE & SALES', 'The people customers actually meet.', '')}
  <div class="router-grid" id="frontline">
    <a class="router-card" href="/roles/store-manager"><h3>Store manager</h3><p>Run the floor on today’s numbers, not yesterday’s guesswork.</p></a>
    <a class="router-card" href="/roles/sales-associate"><h3>Sales associate</h3><p>Walk up to every customer already knowing them.</p></a>
    <a class="router-card" href="/roles/cashier"><h3>Billing cashier</h3><p>Bill at the live gold rate without a calculator fight.</p></a>
  </div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('CUSTOMER & GROWTH', 'The people who keep customers coming back.', '')}
  <div class="router-grid" id="growth">
    <a class="router-card" href="/roles/crm-executive"><h3>CRM / telecalling executive</h3><p>Follow-ups that draft themselves, waiting on your yes.</p></a>
    <a class="router-card" href="/roles/marketing-manager"><h3>Marketing manager</h3><p>One campaign, every channel, one customer record.</p></a>
    <a class="router-card" href="/roles/ecommerce-manager"><h3>E-commerce / D2C manager</h3><p>Shopify for the website, Jwero for everything Shopify can’t do.</p></a>
  </div>`
)}

${L.section(
  `${L.sectionHead('MANUFACTURING & OPERATIONS', 'The people who make and move the gold.', '')}
  <div class="router-grid" id="manufacturing">
    <a class="router-card" href="/roles/karigar"><h3>Karigar / goldsmith</h3><p>Every job traceable, every loss accounted — not blamed on memory.</p></a>
    <a class="router-card" href="/roles/cad-designer"><h3>CAD / CAM designer</h3><p>A design file that doesn’t die in a WhatsApp thread.</p></a>
    <a class="router-card" href="/roles/production-manager"><h3>Production manager</h3><p>See every job’s stage without walking the floor.</p></a>
    <a class="router-card" href="/roles/quality-hallmarking"><h3>Quality &amp; hallmarking officer</h3><p>Certification and compliance, tracked, not chased on paper.</p></a>
    <a class="router-card" href="/roles/accountant"><h3>Accountant / bookkeeper</h3><p>GST invoices at the live rate, reconciled with your books, not against them.</p></a>
    <a class="router-card" href="/roles/inventory-manager"><h3>Inventory / stock manager</h3><p>See what’s dying on the shelf before it’s a write-off.</p></a>
  </div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('TRADE & PARTNERSHIPS', 'The people who keep the network running.', '')}
  <div class="router-grid" id="trade">
    <a class="router-card" href="/roles/purchase-manager"><h3>Purchase / procurement manager</h3><p>Know what to reorder before the shelf goes empty.</p></a>
    <a class="router-card" href="/roles/b2b-manager"><h3>Wholesale / B2B manager</h3><p>Every buyer, every memo, every order — in one thread.</p></a>
    <a class="router-card" href="/roles/franchise-partner"><h3>Franchise partner</h3><p>Franchisor control, franchisee freedom, one system.</p></a>
  </div>`
)}

${L.section(
  `<div id="pattern" style="scroll-margin-top:96px;">${L.sectionHead('THE PATTERN ACROSS EVERY ROLE', 'AI drafts. A person approves.', 'Nobody’s judgment gets automated away. Every role on this page keeps the same shape of change: the repetitive, forgettable, error-prone parts of the job move to a governed AI workforce that waits for a human yes. What’s left is the part that actually needed a person — relationships, craftsmanship, judgment calls — with a record behind it that never forgets. This is true whether you own the business, run the counter, or work the bench: the job doesn’t shrink, the forgettable parts of it do.')}</div>
  ${L.cards([
    { title: 'Less retyping, more relationship', text: 'Data entry, follow-up drafting and repetitive replies move to AI staff under approval — freeing the hours for the parts of the job that actually need a person.' },
    { title: 'A record that outlives any one person', text: 'Customer history, job status and stock truth live on the business’s own system — not in a notebook, a phone, or one person’s memory that walks out the door when they do.' },
    { title: 'Skills that compound instead of resetting', text: 'Every role builds a track record inside the system — what worked, what didn’t — instead of starting from scratch with each new hire or each new season.' },
  ])}`
)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="roles">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('ROLE QUESTIONS', 'Straight answers about who uses this and how.', '')}${L.faqBlock(rolesHubFaqs)}`)}

${L.ctaBand('Not sure which role fits?', 'Tell us how your team is structured — we’ll show you where each person fits in one message.', 'roles')}
`,
};

module.exports = [rolesHub];
