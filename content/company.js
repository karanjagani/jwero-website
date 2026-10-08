const L = require('../lib');
const Q = (i) => require('./positioning').quoteOne(i);

const company = {
  slug: 'company',
  title: 'About Jwero — Why We Build for Jewellery Business | Jwero',
  description: 'Jwero exists because the world’s most relationship-driven retail trade was left with software that only keeps records. We build the OS it deserves.',
  breadcrumbs: [['Home', '/'], ['Company']],
  body: `
${L.hero({
  eyebrow: 'ABOUT',
  h1: 'The most personal trade on earth deserved better software.',
  sub: 'Jwero is built by Mahendra, Karan and Manav Jagani — three people you can look up before you trust them with your customer list — for the most relationship-driven trade there is.',
})}

${L.section(
  `${L.sectionHead('WHAT WE BELIEVE', 'Three convictions behind every feature.', '')}
  ${L.cards([
    { title: 'Memory is the moat', text: 'Jewellery is a relationship trade, and relationships run on memory. We industrialise that superpower so it works at any scale — one counter or a hundred branches.' },
    { title: 'AI must ask first', text: 'In a trust-first trade, ungoverned automation is a liability. Approval queues, caps and kill switches are not features — they are the product philosophy.' },
    { title: 'Honesty compounds', text: 'We publish what is not built yet on a public roadmap. A customer won by overpromise is a churn statistic waiting to happen.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHO YOU’RE TALKING TO', 'The founders, by name.', 'Not an anonymous "team" — three people you can look up before you trust them with your customer list.')}
  ${L.teamGrid([
    { initials: 'KJ', name: 'Karan Jagani', title: 'Co-Founder & CEO', bio: 'Runs the business side — strategy, partnerships and the buying-committee conversations chains and manufacturers have with us.', linkedin: 'https://www.linkedin.com/in/karanjagani/' },
    { initials: 'MJ', name: 'Manav Jagani', title: 'Co-Founder & CTO', bio: 'Builds the product — the same person you’ll often reach on the founders’ WhatsApp desk when something needs an engineering answer.', linkedin: 'https://www.linkedin.com/in/jaganimanav/' },
    { initials: 'MJ', name: 'Mahendra Jagani', title: 'Founder & COO', bio: 'Comes from the gems and jewellery trade itself — the operating knowledge that keeps Jwero built for how the business actually runs, not how software assumes it does.', linkedin: 'https://www.linkedin.com/in/mdjagani/' },
  ])}`
)}

${L.section(
  `${L.sectionHead('THE COMPANY', 'What we build under, and what we measure.', 'Jwero is built by a team across product, jewellery retail and AI engineering — working daily with jewellery businesses from single family stores to multi-branch chains. We measure ourselves on one number: the revenue our customers’ growth reports attribute to the system.')}
  <div class="tbl-wrap" style="margin-bottom:26px"><table class="tbl">
    <tbody>
      <tr><td><strong>Legal entity</strong></td><td>Tanika Tech Jewels Private Limited</td></tr>
      <tr><td><strong>CIN</strong></td><td>U74900MH2016PTC273631 — verifiable on the MCA registry</td></tr>
      <tr><td><strong>Incorporated</strong></td><td>December 2016, Registrar of Companies, Mumbai</td></tr>
      <tr><td><strong>Registered office</strong></td><td>Shop No. 14–15, Sagar Darshan Building 2, Geetanjali Nagar, Station Road, Bhayandar (West), Thane, Maharashtra 401101</td></tr>
      <tr><td><strong>Reach us</strong></td><td><a href="mailto:care@jwero.ai">care@jwero.ai</a> · WhatsApp from any country <a href="tel:+919169959959">+91 91699 59959</a> · <a href="https://www.linkedin.com/company/jwero" rel="noopener" target="_blank">LinkedIn</a> · <a href="https://www.instagram.com/jwero.ai/" rel="noopener" target="_blank">Instagram</a></td></tr>
    </tbody>
  </table></div>
  <div class="cta-row">
    <a class="btn btn-primary" href="/book-demo">Talk to us</a>
    <a class="btn btn-ghost" href="#" data-wa="company">Talk to the founders’ desk</a>
  </div>`
, { tone: 'tint' })}
${L.section(`${L.sectionHead('WHAT WE PROMISE', 'Two things you can hold us to.', '')}<div class="jb-blogline"><p><b>Onboarding in a day.</b> We set up your stock, rates and customers with you.</p><p><b>10% saved for each jeweller you refer.</b> <a href="/pricing">See how referral works</a>.</p><p>Proof you can check: <a href="/customers">who uses Jwero, and what they say</a>.</p></div>`, { tone: 'tint' })}
${L.section(Q(1))}
${L.section(`<div class="jb-blogline"><p><b>Run it yourself, or let Jwero run it.</b> The platform from ₹3,600 for the first month, or Jwero’s specialists and AI with every tool included.</p><div class="cta-row"><a class="btn btn-primary" href="${L.TRIAL_URL}company" rel="noopener" data-trial>Start for ₹3,600</a><a class="btn btn-ghost" href="#" data-wa="handle">Let Jwero handle it</a></div></div>`)}
`,
};

const contact = {
  slug: 'contact',
  title: 'Contact Jwero | Jwero',
  description: 'WhatsApp, phone, email or a booked demo — every way to reach Jwero, on one page.',
  breadcrumbs: [['Home', '/'], ['Contact']],
  body: `
${L.hero({
  eyebrow: 'CONTACT',
  h1: 'Talk to us however suits you.',
  sub: 'For most questions, WhatsApp is genuinely the fastest route — it lands in the same inbox our product runs on.',
})}
${L.section(
  `${L.cards([
    { title: 'WhatsApp', text: 'The fastest way to reach us. <a class="card-link" href="#" data-wa="contact">Chat now →</a>' },
    { title: 'Phone', text: '<a href="tel:+919169959959">+91 91699 59959</a> — for a call instead of a chat.' },
    { title: 'Email', text: '<a href="mailto:care@jwero.ai">care@jwero.ai</a> — for anything that needs an attachment.' },
    { title: 'Book a demo', text: 'A 15-minute slot with someone who knows the trade.', link: { href: '/book-demo', label: 'Book now' } },
  ], 4)}
  <div class="cta-row" style="margin-top:10px"><a class="btn btn-primary" href="#" data-wa="contact">Chat or call with us</a></div>
  <div class="jb-blogline" style="margin-top:26px"><p><b>What happens when you message.</b> Tell us your city, how many showrooms you run, and what you want fixed first. We reply with the next step: a demo on your own stock, a price, or a straight “we are not the right fit”.</p><p><b>Looking for something specific?</b> <a href="/pricing">Pricing</a> · <a href="/book-demo">Book a demo</a> · <a href="/trust/security">Security</a> · <a href="/migration">Moving from your current software</a> · <a href="/customers">Customers</a></p></div>
  <p style="margin-top:26px; font-size:.88rem; color:var(--ink-2);">Evaluating for a chain or committee? <a href="/enterprise">Start on the enterprise track</a> · Curious what the product does first? <a href="/platform">Take the platform tour</a> · Cost questions? <a href="/pricing">See pricing</a>.</p>`
)}
${L.section(Q(2))}
`,
};

const enterprise = {
  slug: 'enterprise',
  title: 'Enterprise — Multi-store, Wholesale & Manufacturing | Jwero',
  description: 'For chains, multi-brand groups and manufacturers: Jwero on your own servers or cloud with a one-time licence and no recurring fee, every module, local or chosen AI models, SSO/SCIM, and a staged rollout.',
  breadcrumbs: [['Home', '/'], ['Enterprise']],
  faqs: [
    { q: 'Can we host Jwero on our own servers?', a: 'Yes. Enterprise runs on your premises or in your own cloud, with a one-time licence and no recurring fee to Jwero. Jwero has no access to your data.' },
    { q: 'Do all modules work self-hosted?', a: 'Yes, every module. A few, such as WhatsApp messaging and AI calling, need an internet connection to reach their channels.' },
    { q: 'How does AI work on a self-hosted install?', a: 'Run models locally on your infrastructure, or connect the AI models and providers you choose under your own contracts.' },
    { q: 'What do we pay after the licence?', a: 'Nothing recurring to Jwero. Support is an optional contract. You pay for your own hosting and for services you connect, such as WhatsApp messaging and telephony.' },
    { q: 'What’s different about the enterprise track?', a: 'A named specialist instead of a self-serve funnel, a buying-committee kit addressed to each stakeholder, and a staged pilot-branch rollout with exit criteria you set.' },
    { q: 'What do you need from us to start?', a: 'Roughly: number of branches, current systems (billing/ERP/WhatsApp tools), and your evaluation timeline. We’ll come back with a specific plan, not a generic deck.' },
    { q: 'Our evaluation committee will ask about SSO and audit trails. What do we tell them?', a: 'Tell them the truth: enterprise SSO/SCIM (SAML 2.0 and OIDC, with JIT provisioning) is shipped and live, admin-configurable from an in-app settings page; per-module activity logging exists today with a unified immutable audit trail being consolidated. See <a href="/trust/security">the security page</a> for the full honest list — we’d rather you find gaps here than in an audit.' },
    { q: 'How do we roll out across many branches without a chaotic big-bang migration?', a: 'You don’t — one pilot branch first, with exit criteria you define, then a staged rollout with per-branch configuration and training. No branch goes live without the previous one proving itself.' },
    { q: 'Can we get a security overview document for our IT committee?', a: 'Yes — both the security overview and the full buying-committee kit are downloadable directly on this page, no request needed.' },
    { q: 'What if different branches want different price rules or catalogues?', a: 'Central price rules under owner control, with per-branch exceptions that route through approvals — consistency where you want it, flexibility where you grant it.' },
    { q: 'How does SSO/SCIM actually get set up?', a: 'An org admin creates the connection from an in-app settings page — choose OIDC or SAML 2.0, set an email-domain allowlist, turn on JIT provisioning with a default role, and issue SCIM tokens. The Login URL, ACS URL, SP metadata URL and SCIM base URL are shown inline to hand to your IdP team. We support any SAML 2.0/OIDC-compliant provider — Okta, Microsoft Entra, Google Workspace included — as a protocol, not a pre-built certified app.' },
    { q: 'Does SCIM sync our groups as well as our users?', a: 'Users only today — SCIM provisions and deactivates individual accounts automatically. Group/team sync from your IdP isn’t part of it yet; role assignment is handled inside Jwero’s own RBAC.' },
    { q: 'How are backups handled, and how do we know they actually work?', a: 'You set your own backup frequency (1–168 hours) and retention (1–365 days) from an in-app Trust settings screen, which shows the last-backup timestamp. A restore check is part of the product; ask us for the latest result for your workspace.' },
    { q: 'Can we get webhooks into our own systems?', a: 'Yes, today, via the API — signed payloads, automatic retries, and a delivery log. Honestly: the event catalogue is narrow right now (product create/update/delete and a customer-conversation-message event; no order, invoice or inventory events yet), and there’s no point-and-click admin UI for it yet, only API setup. Tell us what you need synced and we’ll tell you plainly if it’s covered today.' },
  ],
  body: `
${L.hero({
  eyebrow: 'ENTERPRISE',
  h1: 'One system for a hundred branches — with governance that scales to every counter.',
  sub: 'Multi-store chains, franchise networks, wholesalers and manufacturers get a specialist evaluation track: a named contact, a buying-committee kit, and a staged rollout that starts with one pilot branch. Built for jewellers in India and abroad: GST, VAT or sales tax, hallmark IDs, live gold rates and local currencies at every counter.',
  primary: { href: '/book-demo', label: 'Book a demo with a specialist' },
  secondary: { href: '#', label: 'Talk to us', wa: 'enterprise' },
})}

${L.section(
  `${L.sectionHead('YOUR OWN JWERO', 'On your servers, under your policies, paid for once.', 'Enterprise runs on your premises or in your own cloud. Jwero has no access to your data and charges no recurring fee.')}
  ${require('./graphics').selfHostMap()}
  ${L.cards([
    { title: 'Hosted where you decide', text: 'On your own premises or in the cloud account you choose, in the region you choose. Your data never sits with Jwero.' },
    { title: 'One-time licence', text: 'Pay once for the platform. Support and updates are an optional contract, not a condition.' },
    { title: 'Every module', text: 'Counter, stock, CRM, WhatsApp, schemes, girvi, manufacturing, AI and the rest all run self-hosted. A few, such as WhatsApp and AI calling, need an internet connection to reach their channels.' },
    { title: 'AI on your terms', text: 'Run AI models locally, or connect the models and providers you choose under your own contracts.' },
    { title: 'Your policies, end to end', text: 'Your access rules, backups, audits and retention, with roles per branch and team, SSO, and every action logged and stoppable.' },
    { title: 'Customised to your requirements', text: 'Shape the platform to how your business works: your workflows, fields, rules, screens and integrations. No platform limits deciding what you can and cannot do.' },
    { title: 'No platform risk', text: 'A hosted platform’s downtime, price rises, policy changes and shutdowns stop being your risk. The system keeps running on your infrastructure, on your schedule.' },
    { title: 'No vendors to coordinate', text: 'No ten tools from ten vendors pointing at each other when something breaks. One system, one owner of the fix, and one optional support contract.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('THE BUYING-COMMITTEE KIT', 'One artifact per stakeholder.', '')}
  ${L.cards([
    { title: 'For the MD / owner', text: 'ROI framing against your own numbers, and the case for one system over five.' },
    { title: 'For IT / operations', text: 'Security overview, migration plan, pilot-branch rollout with exit criteria.', link: { href: '/trust/security', label: 'Security overview' } },
    { title: 'For finance', text: 'The Tally/Zoho coexistence note — nothing about the ledger changes.', link: { href: '/platform/integrations/tally', label: 'Coexistence note' } },
    { title: 'For branch managers', text: 'A day-in-the-life walkthrough of what changes at the counter.' },
  ], 4)}
  <div class="cta-row" style="margin-top:22px">
    <a class="btn btn-primary" href="/assets/downloads/jwero-buying-committee-kit.pdf" download>Download the buying-committee kit (PDF)</a>
    <a class="btn btn-ghost" href="/assets/downloads/jwero-security-overview.pdf" download>Download the security overview (PDF)</a>
  </div>`
)}

${L.section(L.customerLogos())}

${L.section(
  `${L.sectionHead('FOR YOUR IT EVALUATOR', 'The technical layer, in one place.', 'Everything below is live in the product today, not a roadmap slide — verify it against your own checklist.')}
  ${require('./graphics').techStack()}
  <div class="tbl-wrap"><table class="tbl">
    <tbody>
      <tr><td><strong>SSO</strong></td><td>Enterprise SSO is shipped and admin-configurable from an in-app settings page — choose OIDC or SAML 2.0, set an email-domain allowlist, and connect any SAML 2.0/OIDC-compliant identity provider (Okta, Microsoft Entra, Google Workspace and others) as a supported protocol. Login URL, ACS URL and SP metadata URL are shown inline for your IdP team to paste in. A "Continue with SSO" button is live on the login page.</td></tr>
      <tr><td><strong>Provisioning (SCIM)</strong></td><td>SCIM 2.0 automates the joiner/leaver lifecycle — create, update and deactivate users straight from your identity provider, with just-in-time provisioning and a default role mapping. Deactivating a user in your IdP revokes their Jwero access. Users only today — group/team sync isn’t part of it yet.</td></tr>
      <tr><td><strong>Roles & permissions</strong></td><td>150+ granular permission slugs, bundled into five ready-made role templates — Owner, Admin, Manager, Staff, and a deliberately scoped read-only Accountant role built for an external CA (reads the books, can’t post entries). Clone and edit any template for a fully custom role.</td></tr>
      <tr><td><strong>Backups & restore verification</strong></td><td>Each organisation sets its own backup frequency (1–168 hours) and retention (1–365 days) from an in-app Trust settings screen, which shows the last-backup timestamp. A restore check is part of the product; ask us for the latest result for your workspace. No published RPO/RTO or uptime SLA number yet.</td></tr>
      <tr><td><strong>Webhooks</strong></td><td>A working outbound webhook system — signed payloads, automatic retries, a delivery log. Honestly narrow today: only product create/update/delete and a customer-conversation-message event, no order/invoice/inventory events yet, and setup is API-only — no admin UI yet.</td></tr>
      <tr><td><strong>Rate limiting</strong></td><td>Multiple layers of API rate limiting protect the platform from abuse.</td></tr>
      <tr><td><strong>AI governance</strong></td><td>Six autonomy levels, per-agent guardrails that block destructive actions, risk-tiered approval gating, and a five-scope kill switch (global/tenant/agent/action/module). One of the platform’s strongest security differentiators — see <a href="/platform/ai-workforce">/platform/ai-workforce</a> for the full detail.</td></tr>
    </tbody>
  </table></div>`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('MULTI-STORE, MULTI-BRAND, MULTI-BRANCH', 'Real hierarchy, not a label.', '')}
  ${require('./graphics').hierarchyTree()}
  <p style="font-size:.95rem;max-width:70ch">Organisations, brands and branches are a real administrative hierarchy in Jwero, not just a business-type field at signup — role-based access control is scoped independently at each level, so a manager can be scoped to one branch while an owner sees the whole group. What this is not, today: a franchise-specific administration layer with royalty tracking or franchisor oversight of independently-owned franchisees. "Franchise" exists as a business-type label at signup, not a dedicated module — if that's what your evaluation needs, tell us and we'll be straight about the gap.</p>`
)}

${L.honestGapsBlock([
  'On the hosted Jwero One plan, data sits in India by default, or in your region on request. Enterprise customers self-host it where they choose. Physical per-tenant database isolation is real and strong on both.',
  'No organisation-mandated MFA policy — multi-factor authentication exists and is available to every user, but it’s opt-in per user today, not something an admin can force org-wide.',
  'No franchise-specific administration layer (royalty tracking, franchisor oversight of independently-owned franchisees) — genuine multi-store/multi-brand/multi-branch administration is real; franchise-specific tooling on top of it is not.',
  'Formal certifications: ISO 27001 and SOC 2 are in progress, not certified, and are published only when earned, same as stated on the security page.',
])}

${L.section(`${L.sectionHead('QUESTIONS EVALUATION COMMITTEES ASK', 'Answers for your evaluation committee.', '')}${L.faqBlock([
  { q: 'Our evaluation committee will ask about SSO and audit trails. What do we tell them?', a: 'Tell them the truth: enterprise SSO/SCIM is shipped and live; per-module activity logging exists today with a unified audit trail being consolidated. <a href="/trust/security">See the full honest list</a>.' },
  { q: 'How do we roll out across many branches without chaos?', a: 'One pilot branch first, with exit criteria you define, then a staged rollout. No branch goes live without the previous one proving itself.' },
  { q: 'Can we get a security overview document?', a: 'Yes — download it directly above, alongside the buying-committee kit.' },
  { q: 'What about backups and webhooks?', a: 'Backups are configured by each business, and a restore check is part of the product; ask us for the latest result. Webhooks work today via the API, with a narrow event catalogue and no admin UI yet — full detail in the table above.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.ctaBand('Start with one branch.', 'Tell us your network size and current systems — we’ll come back with a specific plan.', 'enterprise')}
`,
};

const bookDemo = {
  slug: 'book-demo',
  title: 'Book a Demo — 15 Minutes, Your Numbers | Jwero',
  description: 'Book a 15-minute demo with someone who knows the jewellery trade — or get the two-minute version on your own WhatsApp right now.',
  breadcrumbs: [['Home', '/'], ['Book a Demo']],
  body: `
${L.hero({
  eyebrow: 'BOOK A DEMO',
  h1: 'Fifteen minutes. Your scenario, not our script.',
  sub: 'Bring one real situation: a quiet customer list, a leaking scheme book, a flooded Instagram inbox — and we will run it through Jwero live. If we cannot help, we will say so in the first five minutes.',
  primary: { href: '#', label: 'Skip the form — chat or call now', wa: 'bookdemo' },
})}

${L.section(
  `<div class="grid grid-2" style="gap:48px; align-items:start;">
    <form class="form" id="demo-form"><span id="callback"></span><span id="schedule"></span>
      <label for="f-name">Your name</label>
      <input id="f-name" name="name" type="text" required autocomplete="name">
      <label for="f-phone">WhatsApp number</label>
      <input id="f-phone" name="phone" type="tel" required autocomplete="tel" placeholder="+91…">
      <label for="f-biz">Business type</label>
      <select id="f-biz" name="business">
        <option>Single-store retailer</option>
        <option>Multi-store / chain</option>
        <option>Manufacturer</option>
        <option>Wholesaler</option>
        <option>Online-first / D2C brand</option>
        <option>Other</option>
      </select>
      <label for="f-city">City & country</label>
      <input id="f-city" name="city" type="text" autocomplete="address-level2">
      <label for="f-reach">How should we reach you?</label>
      <select id="f-reach" name="reach"><option>WhatsApp</option><option>Call me</option></select>
      <label for="f-time">Best time (if a call)</label>
      <input id="f-time" name="time" type="text" placeholder="e.g. weekdays after 7pm">
      <button class="btn btn-primary" type="submit">Request my demo slot</button>
      <p class="form-ok">Opening WhatsApp with your details filled in — press send, and we’ll confirm your slot within business hours.</p>
      <p class="cta-note">Your details are used only to arrange this demo. No spam, no drip campaigns. One confirmation, one demo, your decision.</p>
    </form>
    <div>
      ${L.customerLogos()}
      ${L.sectionHead('WHAT HAPPENS NEXT', 'Three steps from here to your demo.', '')}
      ${L.steps([
        { title: 'We confirm on WhatsApp', text: 'A human (yes, really) confirms a 15-minute slot that suits you.' },
        { title: 'You bring a scenario', text: 'A real customer situation from your business. We run it live in Jwero.' },
        { title: 'You get the plan', text: 'A written note: what Jwero would change, the migration path, and a straight price. Then it is your call.' },
      ]).replace('class="steps"', 'class="steps" style="grid-template-columns:1fr"')}
    </div>
  </div>`
)}
${L.section(`${L.sectionHead('WHAT YOU WILL SEE', 'Fifteen minutes, built around your shop.', '')}<div class="jb-blogline"><p><b>Your stock at today’s rate.</b> A few of your own pieces, priced live with making and wastage.</p><p><b>One real day.</b> An enquiry, a bill and a follow-up, start to finish, on one record.</p><p><b>Your choice.</b> Run it yourself from ₹3,600 for the first month, or let Jwero run it for you.</p></div>`)}
${L.section(Q(0))}
`,
};

const legalPrivacy = {
  slug: 'legal/privacy',
  title: 'Privacy Policy | Jwero',
  description: 'How Jwero collects, uses, stores, shares and protects data — for website visitors, product customers, and their end customers.',
  breadcrumbs: [['Home', '/'], ['Legal'], ['Privacy Policy']],
  body: `
${L.section(
  `<h1>Privacy Policy</h1>
  <p style="max-width:64em; margin-top:18px; color:var(--ink-2);">Last updated: 1 August 2026. Jwero is a product of <strong>Tanika Tech Jewels Private Limited</strong> (CIN U74900MH2016PTC273631), registered office: Shop No. 14–15, Sagar Darshan Building 2, Geetanjali Nagar, Station Road, Bhayandar (West), Thane, Maharashtra 401101 (“Jwero”, “we”, “us”). This policy explains what personal data we collect, why, how it is used and shared, and the choices available to you — separately for (a) visitors to this website, (b) businesses that subscribe to the Jwero product ("Customers"), and (c) the individuals whose data Customers store inside Jwero ("End Customers", e.g. a jeweller's own shoppers).</p>
  <div style="max-width:64em; margin-top:26px; font-size:.95rem; color:var(--ink-2); line-height:1.8;">

    <h3 style="margin-top:28px; color:var(--ink);">1. Scope — who this policy covers</h3>
    <p>If you are browsing this website, this policy governs our collection and use of your data directly. If you are an End Customer of a jewellery business that uses Jwero, that business is responsible for its own privacy practices toward you; Jwero processes your data only on that business's instructions, as its data processor. See §7 and our <a href="/legal/dpdp">DPDP statement</a> for the fiduciary/processor distinction.</p>

    <h3 style="margin-top:28px; color:var(--ink);">2. What we collect</h3>
    <p><strong>From website visitors:</strong> contact details submitted via forms, WhatsApp or email (name, phone number, business name, business type, city); standard website analytics (pages viewed, approximate location, device and browser type, referring source); and cookies as described in §6.</p>
    <p><strong>From Customers (product subscribers):</strong> account and business details (business name, GSTIN where provided, branch locations, staff logins), billing contact details, and support communications.</p>
    <p><strong>From End Customers, on a Customer's behalf:</strong> whatever fields that Customer chooses to record in Jwero — typically name, phone number, purchase history, gold-scheme balances, occasion dates, product preferences and consented communication history. Jwero does not decide what an End Customer's data is used for; the Customer business does.</p>

    <h3 style="margin-top:28px; color:var(--ink);">3. How we use it</h3>
    <p>To respond to enquiries, schedule and run demos, provision and operate the product for Customers, process payments, provide support, send service communications, and improve this website and the product. Where Jwero's AI features draft messages on a Customer's behalf (see <a href="/platform/ai-workforce">AI Workforce & Governance</a>), those drafts are generated from data the Customer already holds and require the Customer's human approval before anything is sent — Jwero does not use End Customer data to train models shared across other Customers. We do not sell personal data, to anyone, ever.</p>

    <h3 style="margin-top:28px; color:var(--ink);">4. Legal basis for processing</h3>
    <p>For website visitors and Customers, we process data with your consent (submitting a form, starting a WhatsApp conversation, signing a subscription agreement) or to take steps you request before entering a contract. For End Customer data processed inside the product, the lawful basis is set and obtained by the Customer business — including WhatsApp/Instagram opt-in consent, which is managed through Meta's official Business APIs with consent and opt-out handling built in, not bulk or unofficial messaging tools.</p>

    <h3 style="margin-top:28px; color:var(--ink);">5. How data is stored and protected</h3>
    <p>Each Customer's product data is held in its own isolated database — physically separated, not a shared table with row-level flags — encrypted in transit and at rest, with role-based access control and multi-factor authentication available on Customer accounts. Full technical detail is on our <a href="/trust/security">Security & Data Ownership</a> page, including what is not yet certified (we do not hold SOC 2 or ISO certification today and say so plainly there).</p>

    <h3 style="margin-top:28px; color:var(--ink);">6. Cookies & website analytics</h3>
    <p>This website uses cookies and similar technologies for essential site functioning and for analytics that help us understand which pages are useful. We do not use these to build cross-site advertising profiles. Where a consent banner is shown, your choice is respected; you may also control cookies through your browser settings.</p>

    <h3 style="margin-top:28px; color:var(--ink);">7. Who we share data with</h3>
    <p>We share data only as needed to run the service, with providers bound by contract to protect it: cloud hosting/infrastructure providers; Meta (official WhatsApp Business API, Instagram and Facebook, for messaging Customers' End Customers where consented); payment processors Razorpay and Cashfree (for ecommerce website/checkout transactions); and, where a Customer enables it, their own Tally or Zoho Books instance (for accounting sync) or Shopify/WooCommerce/Unicommerce (for ecommerce/order sync). We do not share data with third parties for their own marketing purposes. A full sub-processor list is available to Customers and evaluation committees on request via <a href="/contact">Contact</a> or WhatsApp.</p>

    <h3 style="margin-top:28px; color:var(--ink);">8. Data retention</h3>
    <p>Website enquiry data is retained for as long as reasonably needed to respond to you and for a limited period afterward for legitimate business records, then deleted or anonymised. Customer and End Customer data inside the product is retained for the life of the subscription and for a limited period after termination to allow export, after which it is deleted per the Customer's subscription agreement — see §9.</p>

    <h3 style="margin-top:28px; color:var(--ink);">9. Export & deletion</h3>
    <p>Customers can export their business's data, in standard formats, at any time — this is a product design decision, not a support favour. Requests to access, correct, or delete personal data should be sent via <a href="/contact">Contact</a>; if your data is held inside a Customer's Jwero account rather than directly by us, we will direct you to that business, which controls it, and support them in fulfilling your request.</p>

    <h3 style="margin-top:28px; color:var(--ink);">10. International data transfers</h3>
    <p>Jwero's infrastructure and sub-processors may process data in jurisdictions other than where you are located. Where this occurs, we require our providers to apply protections consistent with applicable data-protection law.</p>

    <h3 style="margin-top:28px; color:var(--ink);">11. Children's data</h3>
    <p>This website and product are intended for business use by adults. We do not knowingly collect personal data from children. Jewellery purchase records held on End Customer accounts may occasionally reference family occasions (e.g. a child's birthday) as a preference field; this is not data collected from or about a child directly.</p>

    <h3 style="margin-top:28px; color:var(--ink);">12. Changes to this policy</h3>
    <p>We may update this policy as the product and our practices evolve. Material changes will be reflected here with an updated date; continued use after a change constitutes acceptance of the revised policy.</p>

    <h3 style="margin-top:28px; color:var(--ink);">13. Contact & grievance officer</h3>
    <p>For privacy questions, access/correction/deletion requests, or grievances, write to the Grievance Officer, Tanika Tech Jewels Private Limited, at <a href="mailto:care@jwero.ai">care@jwero.ai</a> (subject line: "Privacy grievance") or via <a href="/contact">Contact</a>. Grievances are acknowledged and addressed within the timelines applicable law prescribes.</p>
  </div>`
)}
`,
};

const legalTerms = {
  slug: 'legal/terms',
  title: 'Terms of Service | Jwero',
  description: 'The terms governing use of the Jwero website, and the framework under which the Jwero product is licensed to business customers.',
  breadcrumbs: [['Home', '/'], ['Legal'], ['Terms of Service']],
  body: `
${L.section(
  `<h1>Terms of Service</h1>
  <p style="max-width:64em; margin-top:18px; color:var(--ink-2);">Last updated: 1 August 2026. This website and the Jwero product are operated by <strong>Tanika Tech Jewels Private Limited</strong> (CIN U74900MH2016PTC273631), registered office: Shop No. 14–15, Sagar Darshan Building 2, Geetanjali Nagar, Station Road, Bhayandar (West), Thane, Maharashtra 401101. These terms govern your use of this website. If you are a Jwero product subscriber, your use of the product itself is governed by a separate signed order/subscription agreement referenced in §3, which takes precedence over this page for product matters.</p>
  <div style="max-width:64em; margin-top:22px; font-size:.95rem; color:var(--ink-2); line-height:1.8;">

    <h3 style="margin-top:28px; color:var(--ink);">1. Acceptance of terms</h3>
    <p>By accessing this website you agree to these terms. If you do not agree, please do not use the site. These terms apply to business visitors and prospective customers; the website is not directed at consumers.</p>

    <h3 style="margin-top:28px; color:var(--ink);">2. Use of this website</h3>
    <p>Content on this website — including product descriptions, comparisons, ROI figures and calculators — is provided for general informational purposes to help evaluate the product. Pricing shown, where present, is indicative and subject to a specific quote; see <a href="/pricing">Pricing</a>. Downloadable materials (e.g. the security overview, buying-committee kit) may be used only for your own evaluation of Jwero, not redistributed as your own work.</p>

    <h3 style="margin-top:28px; color:var(--ink);">3. Relationship to the product agreement</h3>
    <p>This website describes the Jwero product; it does not itself grant any licence to use it. Access to the Jwero product is governed by a separate subscription/order agreement signed at onboarding, which sets out scope, term, fees, data ownership and export rights (summarised on our <a href="/trust/security">Security & Data Ownership</a> page). Where this website and the signed agreement conflict on product matters, the signed agreement governs.</p>

    <h3 style="margin-top:28px; color:var(--ink);">4. Intellectual property</h3>
    <p>The Jwero name, logo, and the content, design and code of this website are owned by Jwero or its licensors. Nothing here grants you rights to our trademarks or content beyond viewing the site and using materials as permitted in §2.</p>

    <h3 style="margin-top:28px; color:var(--ink);">5. AI-generated content — a specific disclosure</h3>
    <p>Jwero's product includes AI features that draft messages, suggestions and content on a Customer's behalf. By design, these drafts require human review and approval before being sent to an End Customer unless a Customer has explicitly promoted a specific, capped action type to run with reduced approval — see <a href="/platform/ai-workforce">AI Workforce & Governance</a>. Jwero is not responsible for the consequences of content a Customer's team chooses to approve and send; the approving human is the final publisher of that message.</p>

    <h3 style="margin-top:28px; color:var(--ink);">6. Third-party services</h3>
    <p>The product integrates with third-party services — including Meta's WhatsApp Business API, Instagram and Facebook, Razorpay, Cashfree, Tally, Zoho Books, Shopify, WooCommerce and Unicommerce. Use of those integrations is also subject to each provider's own terms; Jwero is not responsible for outages, policy changes or account actions taken by those third parties.</p>

    <h3 style="margin-top:28px; color:var(--ink);">7. Acceptable use</h3>
    <p>You agree not to use this website to submit false information, attempt to access non-public areas, interfere with its operation, or use it for any unlawful purpose. Use of the product itself for unsolicited bulk messaging outside Meta's opt-in rules is prohibited and is also a violation of the underlying WhatsApp/Meta platform terms.</p>

    <h3 style="margin-top:28px; color:var(--ink);">8. Disclaimers</h3>
    <p>This website and its content are provided "as is." While we aim for accuracy — including publishing what is not yet built on our <a href="/roadmap">public roadmap</a> rather than overstating capability — we do not warrant that all content is complete, current or error-free at every moment. Product performance, uptime and support commitments are set out in the signed subscription agreement, not this page.</p>

    <h3 style="margin-top:28px; color:var(--ink);">9. Limitation of liability</h3>
    <p>To the maximum extent permitted by law, Jwero is not liable for indirect, incidental or consequential damages arising from use of this website. Liability arising from the product itself is governed exclusively by the limitation-of-liability terms in the signed subscription agreement.</p>

    <h3 style="margin-top:28px; color:var(--ink);">10. Governing law & disputes</h3>
    <p>These terms are governed by the laws of India. Any dispute arising from use of this website will first be attempted to be resolved informally by contacting us via <a href="/contact">Contact</a>. Product-related disputes are governed by the dispute-resolution clause in the signed subscription agreement.</p>

    <h3 style="margin-top:28px; color:var(--ink);">11. Changes to these terms</h3>
    <p>We may update these terms as the website and our practices evolve. Material changes will be reflected here with an updated date.</p>

    <h3 style="margin-top:28px; color:var(--ink);">12. Contact</h3>
    <p>Questions about these terms: <a href="/contact">Contact</a> or care@jwero.ai.</p>
  </div>`
)}
`,
};

const legalDpdp = {
  slug: 'legal/dpdp',
  title: 'DPDP Statement | Jwero',
  description: 'Jwero’s statement on data protection under India’s DPDP Act — the fiduciary/processor split, data principal rights, and grievance redressal.',
  breadcrumbs: [['Home', '/'], ['Legal'], ['DPDP Statement']],
  body: `
${L.section(
  `<h1>DPDP Statement</h1>
  <p style="max-width:64em; margin-top:18px; color:var(--ink-2);">Last updated: 1 August 2026. This statement describes how <strong>Tanika Tech Jewels Private Limited</strong> (CIN U74900MH2016PTC273631, registered office: Bhayandar (West), Thane, Maharashtra 401101), operating the Jwero product, approaches personal data protection under India's Digital Personal Data Protection Act, 2023 ("DPDP Act") — for data processed through this website and the Jwero product, including personal data about our Customers' own End Customers (e.g. names, contact details, purchase and scheme records).</p>
  <div style="max-width:64em; margin-top:22px; font-size:.95rem; color:var(--ink-2); line-height:1.8;">

    <h3 style="margin-top:28px; color:var(--ink);">1. Data Fiduciary and Data Processor roles</h3>
    <p>For website visitor data and our own Customer account data, Jwero acts as the Data Fiduciary — we determine the purpose and means of processing, and this policy plus our <a href="/legal/privacy">Privacy Policy</a> apply directly. For End Customer personal data that a jewellery business stores and processes inside Jwero (their own shoppers' records), that business is the Data Fiduciary and Jwero acts as its Data Processor, processing data strictly on that business's instructions and for the purposes it configures — not for Jwero's own independent purposes.</p>

    <h3 style="margin-top:28px; color:var(--ink);">2. Notice and consent</h3>
    <p>Where Jwero collects data directly (this website, Customer accounts), we aim to give clear notice of what is collected and why at the point of collection, consistent with the DPDP Act's notice requirements. Where a Customer business collects End Customer data through Jwero — for example, WhatsApp/Instagram opt-in for messaging — obtaining valid consent from that individual is the Customer's responsibility as Data Fiduciary; Jwero provides consent- and opt-out-handling tooling (built on Meta's official Business APIs) to support it, not to replace it.</p>

    <h3 style="margin-top:28px; color:var(--ink);">3. Purpose limitation & data minimisation</h3>
    <p>Data collected through this website is used only for the purposes described in our <a href="/legal/privacy">Privacy Policy</a>. Within the product, each Customer determines which fields of an End Customer's record it collects and why (e.g. gold-scheme balances for scheme participants, occasion dates for personalised outreach); Jwero does not repurpose that data for its own use, including AI model training shared across other Customers.</p>

    <h3 style="margin-top:28px; color:var(--ink);">4. Data isolation & security safeguards</h3>
    <p>Each Customer's data is held in a physically isolated database, encrypted in transit and at rest, behind role-based access control — the reasonable security safeguards the DPDP Act requires a Data Fiduciary and its processors to implement. Full technical detail, including what is not yet certified, is on our <a href="/trust/security">Security & Data Ownership</a> page.</p>

    <h3 style="margin-top:28px; color:var(--ink);">5. Data principal rights</h3>
    <p>Individuals ("Data Principals") whose personal data is held within a Customer's Jwero account should direct access, correction, erasure, grievance or nomination requests to that business in the first instance, as the Data Fiduciary responsible for that data. Jwero supports Customers in fulfilling such requests, including data export and deletion within the product. For personal data Jwero holds directly (website visitors, Customer account holders), requests can be sent via <a href="/contact">Contact</a>.</p>

    <h3 style="margin-top:28px; color:var(--ink);">6. Breach notification</h3>
    <p>In the event of a personal data breach affecting Customer or End Customer data, Jwero will notify the affected Customer(s) without undue delay so they can meet their own notification obligations as Data Fiduciary, including to the Data Protection Board of India where required.</p>

    <h3 style="margin-top:28px; color:var(--ink);">7. Cross-border processing</h3>
    <p>Where data is processed outside India by Jwero's infrastructure or sub-processors, this is done under contractual safeguards consistent with applicable law, and a full sub-processor list is available to Customers and evaluation committees on request.</p>

    <h3 style="margin-top:28px; color:var(--ink);">8. Retention & erasure</h3>
    <p>Customers can export their data at any time. On termination of a subscription, data is retained for a limited period to permit export before deletion, per the subscription agreement — see <a href="/legal/terms">Terms of Service</a>.</p>

    <h3 style="margin-top:28px; color:var(--ink);">9. Grievance redressal</h3>
    <p>Grievances relating to Jwero's own processing (as Data Fiduciary) can be raised with the Grievance Officer, Tanika Tech Jewels Private Limited, at <a href="mailto:care@jwero.ai">care@jwero.ai</a> (subject: "DPDP grievance") or via <a href="/contact">Contact</a>. Grievances relating to how a specific jewellery business handles its End Customers' data should be raised with that business directly, as the Data Fiduciary for that data.</p>
  </div>`
)}
`,
};

// The legal pages now live in content/legal.js; the three objects above are kept only as history.
module.exports = [company, contact, enterprise, bookDemo];
