// The positioning: "You focus on jewellery. We handle the chaos."
// Jwero as the operating partner that takes the complexity and the constant
// learning off a jeweller. The business model is Jewellery Business as a
// Service; the three ways to work are: you run it, we run it together, Jwero
// runs it. The product, solution, pricing and trust pages built earlier are
// unchanged and sit underneath as the capabilities. The previous home page
// lives at /jwero-os. Styles are the `pz-` rules in site.css; behaviour is the
// "positioning" block in site.js.
//
// The home page follows eight acts: the world changed, the hidden cost, the
// insight, the solution, how it works, the customer's choice, proof, the ask.
//
// Not invented here: customer numbers, team sizes, results or testimonials.
// Proof cards are patterns, labelled as such, until real ones are supplied.
// The command centre figures are marked as an illustration.
const L = require('../lib');

const HANDLE = (label = 'Let Jwero handle it', ctx = 'handle', cls = 'btn btn-primary') => `<a class="${cls}" href="#" data-wa="${ctx}">${label}</a>`;
const eyebrow = (t) => `<p class="pz-eyebrow">${t}</p>`;
const gem = '<i class="pz-gem" aria-hidden="true"></i>';
const json = (o) => JSON.stringify(o).replace(/</g, '\\u003c');

// ---------------------------------------------------------------- hero
const ROT = ['Markets', 'Customers', 'Technology', 'AI', 'Search', 'Advertising', 'Social platforms', 'Regulations'];
const hero = () => `
<section class="hero pz-hero pz-hero-solo">
  <div class="pz-hero-in">
    <div class="pz-hero-copy">
      <p class="pz-rot" aria-hidden="true">Changing again today: <span class="pz-rot-w"><span>${ROT.concat(ROT[0]).map((w) => `<b>${w}</b>`).join('')}</span></span></p>
      <h1>You focus on jewellery.<br><em>We handle the chaos.</em></h1>
      <p class="pz-hero-sub">Markets change. Customers change. Technology changes. Jwero brings together AI, technology and jewellery specialists to continuously adapt, execute and grow your business, so you can focus on what you do best.</p>
      <div class="pz-cta">
        ${HANDLE('Let Jwero handle it', 'handle', 'btn pz-btn-gold')}
        <a class="btn pz-btn-line" href="/how-it-works">See how Jwero works</a>
      </div>
      <p class="pz-hero-third"><a href="/self-managed">I want to run it myself →</a></p>
      <p class="pz-hero-note">You run it. We run it together. Or we run it for you.</p>
    </div>
  </div>
</section>`;

// ---------------------------------------------------------------- the contrast
const CHAOS = ['Markets', 'Customers', 'AI', 'Technology', 'Google', 'Instagram', 'WhatsApp', 'Advertising', 'Ecommerce', 'Content', 'CRM', 'Data', 'Automation', 'Competition'];
const FOCUS = ['Jewellery', 'Customers', 'Craftsmanship', 'Collections', 'Stores', 'Growth'];
const contrast = () => `
<section class="pz-band pz-contrast">
  <div class="pz-band-in">
    <h2 class="pz-h pz-center">We absorb the complexity.<br>You keep the focus.</h2>
    <div class="pz-split" aria-label="Everything that keeps changing on one side, what you should focus on on the other, Jwero between them">
      <div class="pz-chaos">
        <p class="pz-split-k">Everything that keeps changing</p>
        <div class="pz-chaos-cloud">${CHAOS.map((w, i) => `<span style="--i:${i}">${w}</span>`).join('')}</div>
      </div>
      <div class="pz-between"><i><u></u><u></u><u></u></i><span>${L.mark('pz-mark')}<b>Jwero</b><small>AI + Experts + Technology</small></span><i><u></u><u></u><u></u></i></div>
      <div class="pz-focus">
        <p class="pz-split-k">What you should focus on</p>
        <ul>${FOCUS.map((w) => `<li>${gem}${w}</li>`).join('')}</ul>
      </div>
    </div>
  </div>
</section>`;

// ---------------------------------------------------------------- act 1: the world changed
const EXPECTED = ['Digital marketing', 'Google', 'Instagram', 'WhatsApp', 'Meta Ads', 'Ecommerce', 'SEO', 'AI', 'CRM', 'Customer data', 'Automation', 'Content', 'Analytics', 'Cybersecurity', 'Technology', 'New marketplaces', 'New customer behaviour'];
const worldChanged = () => L.section(`
<div class="pz-two">
  <div>
    ${eyebrow('The world changed')}
    <h2 class="pz-h">It used to be enough to be good at jewellery.</h2>
    <p class="pz-lead">Running a jewellery business is becoming more complex. A modern jeweller is expected to understand all of this. And tomorrow, there will be something else.</p>
  </div>
  <div class="pz-pile" data-pz-pile>${EXPECTED.map((w, i) => `<span style="--i:${i}">${w}</span>`).join('')}<span class="pz-pile-next" style="--i:${EXPECTED.length}">and next year, something new</span></div>
</div>`);

// ---------------------------------------------------------------- act 2: the hidden cost
const LOOP = [
  ['Learn', 'Something new appears.'], ['Implement', 'You invest time and money.'], ['Train', 'Your team learns it.'], ['Change', 'The market moves again.'],
  ['Unlearn', 'Yesterday’s approach is outdated.'], ['Adapt', 'Another platform. Another agency. Another process.'], ['Repeat', 'And it begins again.'],
];
const hiddenCost = () => L.section(`
${eyebrow('The hidden cost')}
<h2 class="pz-h pz-center">You are always learning something that is not jewellery.</h2>
<p class="pz-lead pz-center">Constantly learning, adapting, hiring and changing technology. Nobody sends a bill for it, but you pay it every month.</p>
<ol class="pz-loop" data-pz-loop>${LOOP.map(([t, d], i) => `<li style="--i:${i}"${i === LOOP.length - 1 ? ' class="is-end"' : ''}><b>${t}</b><span>${d}</span></li>`).join('')}</ol>`, { tone: 'tint' });

// ---------------------------------------------------------------- act 3: the insight
const insight = () => `
<section class="pz-band pz-band-deep pz-insight">
  <div class="pz-band-in">
    <h2 class="pz-h">You shouldn’t have to become an expert in everything to remain an expert in jewellery.</h2>
    <div class="pz-insight-lines">
      <p>Technology will keep changing.</p>
      <p>Customers will keep changing.</p>
      <p>Markets will keep changing.</p>
      <p>You don’t have to chase every change.</p>
      <p class="is-gold">Jwero does.</p>
    </div>
  </div>
</section>`;

// ---------------------------------------------------------------- act 4: the solution and the category
const NOT = ['An ERP', 'A CRM', 'A marketing agency', 'An AI tool', 'An ecommerce platform', 'A WhatsApp tool', 'An automation platform'];
const solution = () => L.section(`
<div class="pz-two">
  <div>
    ${eyebrow('The solution')}
    <h2 class="pz-h">Jwero handles the complexity.</h2>
    <p class="pz-lead">Jwero watches what is changing around your business and brings together the people, technology and intelligence required to respond. You tell us where you want the business to go. We work out what needs to happen, and we make it happen.</p>
    <p class="pz-strong">Jwero is the operating partner for the modern jewellery business.</p>
  </div>
  <div class="pz-not">
    <p class="pz-not-k">Jwero is not</p>
    <ul>${NOT.map((n, i) => `<li style="--i:${i}">${n}</li>`).join('')}</ul>
    <p class="pz-not-is">${L.mark('pz-mark')}It is the partner that takes responsibility for all of it.</p>
  </div>
</div>
<div class="pz-jbaas">
  <p class="pz-jbaas-k">The business model</p>
  <h3>Jewellery Business as a Service</h3>
  <p>A continuously evolving combination of AI, technology and specialist execution that helps run and grow your jewellery business.</p>
  <p class="pz-eq"><span>Software</span><i>+</i><span>AI</span><i>+</i><span>Expertise</span><i>+</i><span>Execution</span></p>
</div>`);

// ---------------------------------------------------------------- outcomes: what Jwero would do for a goal
// [button, what happens, [what Jwero does], [[capability, href]], [specialists], level]
const OUTCOMES = [
  ['Get more customers', 'More of the right people find you, ask, and get an answer.', ['Run and tune ads on Google and Instagram', 'Make you findable in search and in AI answers', 'Answer every enquiry within minutes'], [['Ads', '/ads-for-jewellers'], ['Instagram', '/instagram-for-jewellers'], ['WhatsApp', '/products/whatsapp']], ['Performance marketing', 'SEO, AEO and GEO', 'Customer engagement'], 2],
  ['Increase sales', 'More of the enquiries and walk-ins you already get become bills.', ['Follow up every open enquiry and quotation', 'Show each salesperson who to call and why', 'Match idle stock to the customers who would buy it'], [['CRM', '/products/crm'], ['Showroom', '/products/showroom'], ['Quotations', '/products/quotations']], ['Jewellery growth strategist', 'CRM specialist'], 2],
  ['Bring back existing customers', 'The customers you already earned come back, and bring others.', ['Remember every occasion, taste and scheme', 'Reach each customer with a reason, not a blast', 'Run loyalty and savings schemes without a register'], [['Customer memory', '/platform/customer-memory'], ['Journeys', '/products/journeys'], ['Loyalty', '/products/loyalty']], ['CRM specialist', 'Customer engagement'], 2],
  ['Grow online', 'A store, a catalogue and channels that sell while the shop is shut.', ['Build and run your online store at the live rate', 'List on Google Shopping and marketplaces', 'Sell on WhatsApp, Instagram and video'], [['Online store', '/products/storefront'], ['Marketplaces', '/products/marketplaces'], ['Catalogues', '/products/digital-catalogues']], ['Ecommerce specialist', 'Content and creative'], 2],
  ['Reduce manual work', 'The typing, matching and chasing stop being anyone’s job.', ['One record, so nothing is entered twice', 'Bills, stock and books that update together', 'Reminders and follow-ups drafted for you'], [['Count your tools', '/jwero-os#count-yours'], ['ERP', '/products/erp'], ['Accounting', '/jewellery-accounting-software']], ['Automation specialist', 'Technology specialist'], 1],
  ['Improve customer experience', 'Every customer is known, answered and remembered, on every channel.', ['One inbox for WhatsApp, Instagram, web and calls', 'A reply that knows her history', 'Appointments, video visits and follow-ups that arrive prepared'], [['WhatsApp', '/products/whatsapp'], ['Appointments', '/jewellery-appointment-booking-software'], ['Showroom', '/products/showroom']], ['Customer engagement', 'CRM specialist'], 2],
  ['Build my digital presence', 'You look, online, like the jeweller you are in the showroom.', ['Website, catalogue and Google profile', 'A steady flow of posts, Reels and stories', 'Reviews asked for and answered'], [['Social media', '/products/social-media'], ['Online store', '/products/storefront'], ['Instagram', '/instagram-for-jewellers']], ['Content and creative', 'Digital marketing'], 3],
  ['Let the routine run itself', 'The routine runs itself, inside limits you set.', ['AI agents for enquiries, follow-ups and reminders', 'Journeys that act on what customers do', 'Approvals, caps and one switch to stop it'], [['AI agents', '/products/ai-sales-agents'], ['Journeys', '/products/journeys'], ['AI governance', '/platform/ai-workforce']], ['AI specialist', 'Automation specialist'], 1],
  ['Understand my customers', 'You know who is likely to buy, who is drifting, and why.', ['Every signal a customer gives, read and scored', 'Segments that update themselves', 'A plain weekly account of what changed'], [['Customer memory', '/platform/customer-memory'], ['Segmentation', '/products/segmentation'], ['Reports', '/products/reports']], ['Data and analytics', 'CRM specialist'], 1],
  ['Scale without hiring', 'New branches and channels without a new team for each.', ['AI agents take the routine load', 'Jwero specialists fill the roles you would have hired', 'One system for every branch'], [['Multi-store', '/products/multi-store'], ['AI agents', '/products/ai-sales-agents'], ['Managed services', '/managed-services']], ['Jewellery growth strategist', 'AI specialist'], 3],
  ['I want Jwero to handle everything', 'You set the goals. Jwero runs the functions around the jewellery.', ['A plan built from where your business is today', 'AI agents and specialists across every function you hand over', 'One account of what was done and what it produced'], [['Managed services', '/managed-services'], ['What we handle', '/what-we-handle'], ['How it works', '/how-it-works']], ['A Jwero business specialist leads; the rest are brought in as needed'], 3],
];
const LEVEL_NAME = { 1: 'You run it', 2: 'We run it together', 3: 'Jwero runs it' };
// `pick` is a list of [index into OUTCOMES, label override]; without it, all.
const outWidget = (pick, k = 'What Jwero would do') => {
  const list = (pick || OUTCOMES.map((o, i) => [i, o[0]])).map(([i, label]) => { const [, line, does, caps, who, lv] = OUTCOMES[i]; return { t: label, line, does, caps, who, lv: LEVEL_NAME[lv] }; });
  return `
<div class="pz-out" data-pz-out>
  <script type="application/json">${json(list)}</script>
  <div class="pz-out-btns" role="group" aria-label="What you want to achieve">${list.map((o, i) => `<button type="button" aria-pressed="${i === 0}" data-i="${i}"${i === list.length - 1 ? ' class="is-all"' : ''}>${o.t}</button>`).join('')}</div>
  <div class="pz-out-card" aria-live="polite">
    <p class="pz-out-k">${k}</p>
    <h3 data-pz-out-t></h3>
    <p class="pz-out-line" data-pz-out-line></p>
    <ul class="pz-out-does" data-pz-out-does></ul>
    <div class="pz-out-meta">
      <p><span>Specialists involved</span><b data-pz-out-who></b></p>
      <p><span>Usually starts as</span><b data-pz-out-lv></b></p>
      <p><span>Capabilities underneath</span><b data-pz-out-caps></b></p>
    </div>
    <a class="btn btn-primary" href="#" data-wa="outcome" data-pz-out-cta>Tell Jwero this is what I want</a>
  </div>
</div>`;
};
const outcomes = () => L.section(`
${eyebrow('Start from the outcome')}
<h2 class="pz-h pz-center">What do you want to improve?</h2>
${outWidget()}`);

// ---------------------------------------------------------------- the differentiator: you don't have to know what you need
const NOT_ASKED = ['CRM', 'AI', 'SEO', 'Meta Ads', 'WhatsApp', 'Automation', 'Ecommerce', 'Analytics', 'AI agents'];
const SAID = [[0, '“I want more customers.”'], [2, '“I want more repeat purchases.”'], [4, '“I want to reduce my team’s workload.”'], [3, '“I want more online sales.”'], [9, '“I want to grow without constantly hiring.”'], [10, '“I don’t know. I just know things are getting complicated.”']];
const dontKnow = () => L.section(`
${eyebrow('The difference')}
<h2 class="pz-h pz-center">You don’t even have to know what you need.<br>That’s our job.</h2>
<p class="pz-struck pz-center" aria-label="You do not have to decide whether you need any of these">${NOT_ASKED.map((t) => `<s>${t}</s>`).join('')}</p>
<p class="pz-ask pz-center">What are you trying to achieve?</p>
${outWidget(SAID, 'Jwero determines what needs to happen')}
<p class="pz-shift">Don’t tell us what technology you need.<br><b>Tell us what you want to achieve.</b></p>`, { id: 'achieve' });

// ---------------------------------------------------------------- act 5: how it works. AI does the work, experts make it better
const CYCLE = ['Understand', 'Decide', 'Execute', 'Measure', 'Improve'];
const AGENTS = [
  ['Growth agent', 'Finds and executes opportunities for growth.'],
  ['Marketing agent', 'Plans, creates and optimises campaigns.'],
  ['Customer agent', 'Engages customers across conversations and channels.'],
  ['Sales agent', 'Qualifies, recommends and follows up.'],
  ['Retention agent', 'Identifies customers who should be re-engaged.'],
  ['Ecommerce agent', 'Optimises digital commerce.'],
  ['Content agent', 'Creates and adapts content.'],
  ['Analytics agent', 'Explains what is happening and recommends what should happen next.'],
  ['Operations agent', 'Takes over repetitive workflows.'],
];
const aiWorks = () => L.section(`
${eyebrow('How it works')}
<h2 class="pz-h pz-center">AI does the work.<br>Experts make it better.</h2>
<p class="pz-lead pz-center">AI is the engine, not the promise. Jwero combines AI agents, work that happens automatically, jewellery expertise, specialist execution and technology. The result is continuous adaptation and execution.</p>
<p class="pz-eq pz-eq-center"><span>AI agents</span><i>+</i><span>Jewellery expertise</span><i>+</i><span>Specialist execution</span><i>+</i><span>Technology</span></p>
<p class="pz-sub-h">Your Jwero team</p>
<div class="pz-agents">${AGENTS.map(([n, d], i) => `
  <article class="pz-agent" style="--a:${i}">
    <h3>${n}</h3>
    <p>${d}</p>
    <ol aria-label="How this agent works">${CYCLE.map((c, k) => `<li style="--k:${k}">${c}</li>`).join('')}</ol>
  </article>`).join('')}
</div>
<p class="pz-agents-note">Workers, not chatbots. Each one works inside limits you set, and a specialist reviews what matters. <a href="/platform/ai-workforce">How the AI is governed</a></p>`, { id: 'ai-team' });

const EXPERT_AREAS = ['Marketing', 'Growth', 'Performance marketing', 'SEO, AEO and GEO', 'Ecommerce', 'CRM', 'Customer engagement', 'Creative', 'Content', 'AI', 'Automation', 'Analytics', 'Technology'];
const experts = () => L.section(`
<div class="pz-two">
  <div>
    ${eyebrow('Human expertise')}
    <h2 class="pz-h">When you need expertise, you don’t need to hire for it.</h2>
    <p class="pz-lead">Jwero can bring in specialists who understand both the work and the jewellery business.</p>
    <p class="pz-strong">As the world changes, Jwero’s capabilities evolve with it. You don’t have to rebuild your team every time something changes.</p>
    <p class="pz-cta-inline">${HANDLE('Build my Jwero team', 'with-you', 'btn btn-ghost')}</p>
  </div>
  <ul class="pz-experts">${EXPERT_AREAS.map((e) => `<li>${gem}${e}</li>`).join('')}</ul>
</div>`, { tone: 'tint' });

// Not an agency, not just software: the loop that makes the difference.
const AGENCY = ['Client gives a brief', 'Agency executes', 'Client reviews', 'Agency reports'];
const JLOOP = ['Business objective', 'AI understands', 'Data analysed', 'Plan created', 'AI executes', 'Specialist supervises', 'Results measured', 'System learns', 'Next action improves'];
const notAgency = () => L.section(`
${eyebrow('Not an agency. Not just software.')}
<h2 class="pz-h pz-center">You give an objective, not a brief.</h2>
<div class="pz-vs">
  <div class="pz-vs-old"><p class="pz-vs-k">A traditional agency</p><ol>${AGENCY.map((s) => `<li>${s}</li>`).join('')}</ol><p class="pz-vs-end">Then you brief again.</p></div>
  <div class="pz-vs-new"><p class="pz-vs-k">Jwero</p><ol>${JLOOP.map((s, i) => `<li style="--i:${i}">${s}</li>`).join('')}</ol><p class="pz-vs-end">And the loop runs again, better.</p></div>
</div>`);

// ---------------------------------------------------------------- a day with Jwero, and the command centre
const DAY = [
  ['8:00 AM', 'Jwero checks overnight business performance.', 'AI'],
  ['9:00 AM', 'AI identifies high-intent customers.', 'AI'],
  ['10:00 AM', 'Marketing agent recommends campaign changes.', 'AI'],
  ['11:00 AM', 'A specialist reviews campaign strategy.', 'Specialist'],
  ['12:00 PM', 'Customer agent follows up with prospects.', 'AI'],
  ['2:00 PM', 'Ecommerce agent identifies underperforming products.', 'AI'],
  ['4:00 PM', 'Retention agent identifies customers to reactivate.', 'AI'],
  ['6:00 PM', 'Analytics agent summarises the day.', 'AI'],
  ['End of day', 'Jwero recommends tomorrow’s priorities.', 'AI + specialist'],
];
const CMD_TILES = ['Revenue', 'Sales', 'Customers', 'Marketing', 'Leads', 'Ecommerce', 'AI agents', 'Tasks', 'Alerts', 'Opportunities'];
const CMD_ITEMS = ['127 high-intent customers haven’t been followed up.', 'Bridal campaign is outperforming expectations.', '1,240 customers are due for reactivation.'];
const dayAndCommand = () => L.section(`
${eyebrow('A day in the life of Jwero')}
<h2 class="pz-h pz-center">While you are with a customer, this is happening.</h2>
<div class="pz-daycmd">
  <ol class="pz-day" data-pz-day>${DAY.map(([t, d, who], i) => `<li${i === 0 ? ' class="is-on"' : ''}><button type="button" data-i="${i}"><time>${t}</time><span>${d}</span><em>${who}</em></button></li>`).join('')}</ol>
  <div class="pz-cmd" data-pz-cmd>
    <p class="pz-cmd-bar"><span>${L.mark('pz-mark')}Jwero Business Command Centre</span><i>Today</i></p>
    <ul class="pz-cmd-tiles">${CMD_TILES.map((t, i) => `<li style="--i:${i}">${t}</li>`).join('')}</ul>
    <p class="pz-cmd-k">3 things need your attention today</p>
    <ol class="pz-cmd-list">${CMD_ITEMS.map((t) => `<li><span>${t}</span><b>Handled by Jwero</b></li>`).join('')}</ol>
    <button type="button" class="btn pz-btn-gold" data-pz-cmd-go>Let Jwero handle these</button>
    <a class="btn pz-btn-gold" href="#" data-wa="handle" data-pz-cmd-cta hidden>Do this for my business</a>
    <p class="pz-cmd-note">An illustration with example figures, not a customer’s data.</p>
  </div>
</div>`, { tone: 'tint', id: 'a-day' });

// ---------------------------------------------------------------- what Jwero handles, by outcome
// Three honest labels. `power` is software that exists; `manage` is work Jwero
// takes on as a service; `help` is specialist advice. What is managed for a
// given business is confirmed in its plan.
const GROUPS = [
  ['Get more customers', ['Marketing', 'Advertising', 'SEO', 'Content', 'Social', 'Lead generation'], 'Lead capture, ad and social tools, pages that rank', 'Campaign planning, content, ad running and optimisation', 'Growth and performance strategy', '/ads-for-jewellers'],
  ['Sell more', ['Sales', 'Recommendations', 'Follow-ups', 'Conversational commerce', 'Lead management'], 'Lead management, quotations, selling in chat', 'Follow-ups and enquiry handling', 'Sales process and team coaching', '/products/crm'],
  ['Keep customers', ['CRM', 'Retention', 'Loyalty', 'Reactivation', 'Personalisation'], 'Customer memory, loyalty, journeys', 'Reactivation and occasion outreach', 'Retention strategy', '/products/journeys'],
  ['Grow online', ['Website', 'Ecommerce', 'Catalogue', 'Google Shopping', 'Marketplace'], 'Online store, live-rate catalogue, listings', 'Running the store and the listings', 'Ecommerce strategy', '/products/storefront'],
  ['Reduce work', ['AI agents', 'Workflows', 'Operations', 'Work that happens automatically'], 'One record for counter, stock, books and team', 'Setting up and tuning the routine work', 'Process review', '/products/erp'],
  ['Understand your business', ['Analytics', 'Customer intelligence', 'Business intelligence', 'Recommendations'], 'Reports, segments, the Business Command Centre', 'A regular account of what changed and why', 'What to do next', '/products/reports'],
  ['Keep up with technology', ['AI', 'Integrations', 'Infrastructure', 'Security'], 'The platform, kept current and secure', 'Connecting what you already use', 'Technology choices', '/platform/integrations'],
  ['Run the shop floor and supply', ['Showroom journey', 'Offline marketing and promotion', 'Sourcing', 'Vendor management'], 'Showroom, purchase, vendor and karigar records', 'Offline promotion, sourcing and vendor follow-up', 'Showroom experience and supplier terms', '/products/showroom'],
];
const handles = () => L.section(`
${eyebrow('What we handle')}
<h2 class="pz-h pz-center">Outcomes, not a list of features.</h2>
<p class="pz-legend pz-center"><span class="is-p">Jwero can power this</span><span class="is-m">Jwero can manage this for you</span><span class="is-s">Jwero specialists can help with this</span></p>
<div class="pz-groups">${GROUPS.map(([t, items, p, m, s, href], i) => `
  <article class="pz-group" style="--i:${i}">
    <h3>${t}</h3>
    <p class="pz-group-items">${items.join(' · ')}</p>
    <dl>
      <div class="is-p"><dt>Power</dt><dd>${p}</dd></div>
      <div class="is-m"><dt>Manage</dt><dd>${m}</dd></div>
      <div class="is-s"><dt>Help</dt><dd>${s}</dd></div>
    </dl>
    <a class="pz-link" href="${href}">The capability underneath →</a>
  </article>`).join('')}
</div>
<p class="pz-groups-note">What Jwero manages for your business is agreed function by function in your plan. We do not claim to manage what we cannot deliver. <a href="/what-we-handle">See what Jwero runs</a></p>`, { id: 'what-we-handle' });

// What Jwero actually does, month by month. Execution, not software.
const MONTHLY = [
  ['Marketing', ['Plan your campaigns.', 'Create your content.', 'Launch your campaigns.', 'Monitor performance.', 'Identify opportunities.', 'Optimise budgets.', 'Segment customers.', 'Send personalised communication.', 'Follow up with leads.', 'Measure results.', 'Recommend what to do next.']],
  ['Customer retention', ['Find customers who are drifting.', 'Remember every occasion and scheme date.', 'Plan the reasons to get back in touch.', 'Write and send each message.', 'Follow up the replies.', 'Run the loyalty and savings schemes.', 'Measure who came back.', 'Recommend what to change.']],
  ['Ecommerce', ['Keep the catalogue and prices current at the live rate.', 'Add new pieces and collections.', 'Find products that are not selling.', 'Improve the listings.', 'Keep Google Shopping and marketplace listings in step.', 'Answer online enquiries.', 'Follow up carts left behind.', 'Report what sold and why.']],
  ['WhatsApp', ['Answer every enquiry, day and night.', 'Share the right pieces from your catalogue.', 'Send rate, scheme and order updates.', 'Run broadcasts to the right segment.', 'Follow up quotations.', 'Hand over to your team when a person is needed.', 'Keep templates approved and working.', 'Report replies, visits and sales.']],
  ['CRM', ['Keep every customer on one record.', 'Merge duplicates and fill the gaps.', 'Score who is likely to buy.', 'Tell each salesperson who to call and why.', 'Keep segments up to date.', 'Log every conversation and visit.', 'Flag enquiries nobody has answered.', 'Report the pipeline.']],
  ['Digital growth', ['Watch what is changing in search, social and ads.', 'Keep your Google profile and reviews in order.', 'Publish posts, Reels and stories.', 'Keep you findable in search and in AI answers.', 'Test what works and stop what does not.', 'Tie spend to enquiries and bills.', 'Report growth in plain numbers.', 'Recommend the next move.']],
];
const monthly = () => L.section(`
${eyebrow('What we actually do for you')}
<h2 class="pz-h pz-center">Every month, Jwero can:</h2>
<div class="pz-monthly" data-pz-tabs>
  <div class="pz-monthly-tabs" role="tablist">${MONTHLY.map(([t], i) => `<button type="button" role="tab" aria-selected="${i === 0}" data-i="${i}">${t}</button>`).join('')}</div>
  ${MONTHLY.map(([t, items], i) => `<ul class="pz-monthly-list${i === 0 ? ' is-on' : ''}" role="tabpanel" aria-label="${t}">${items.map((x, k) => `<li style="--k:${k}">${x}</li>`).join('')}</ul>`).join('')}
</div>
<p class="pz-groups-note">This is the work, not the software. Which of it Jwero does for you, and which your team keeps, is your choice.</p>`, { tone: 'tint' });

// The twelve tappable areas, kept for the What we handle page.
const PLATE = [
  ['Customer acquisition', ['Ads', 'SEO', 'Content', 'Social media', 'Lead generation']],
  ['Customer engagement', ['WhatsApp', 'Instagram', 'CRM', 'Personalisation', 'Follow-ups']],
  ['Sales', ['Lead management', 'Recommendations', 'Conversational selling', 'Follow-ups', 'Sales intelligence']],
  ['Digital commerce', ['Website', 'Ecommerce', 'Catalogue', 'Google Shopping', 'Marketplaces']],
  ['Customer retention', ['Loyalty', 'Reactivation', 'Customer journeys', 'Campaigns', 'Personalisation']],
  ['Operations', ['Workflows', 'ERP', 'CRM', 'Data', 'Routine work']],
  ['Intelligence', ['Analytics', 'Insights', 'Forecasting', 'Customer intelligence', 'Business recommendations']],
  ['Technology', ['AI', 'Security', 'Infrastructure', 'Works with your existing business']],
  ['Showroom journey', ['Walk-ins', 'Appointments', 'Counter selling', 'Billing', 'After-sale care']],
  ['Offline marketing and promotion', ['Events', 'Exhibitions', 'Hoardings and print', 'Festive offers', 'Local tie-ups']],
  ['Sourcing', ['Requirements', 'Supplier search', 'Rates', 'Purchase orders', 'Quality checks']],
  ['Vendor management', ['Karigars', 'Suppliers', 'Job work', 'Payments', 'Follow-ups']],
];
const plate = () => L.section(`
${eyebrow('Choose')}
<h2 class="pz-h pz-center">What would you rather not manage?</h2>
<p class="pz-lead pz-center">Tap the areas. Start with one function. Give us more when you’re ready.</p>
<div class="pz-plate" data-pz-plate>
  ${PLATE.map(([t, items], i) => `<button type="button" class="pz-plate-cell" aria-pressed="false" data-area="${t}">
    <span class="pz-plate-n">${String(i + 1).padStart(2, '0')}</span><b>${t}</b><span class="pz-plate-items">${items.join(' · ')}</span><i class="pz-plate-tick" aria-hidden="true">Jwero handles this</i>
  </button>`).join('')}
</div>
<div class="pz-plate-foot">
  <p data-pz-plate-out><b>You choose how much you want us to handle.</b></p>
  <a class="btn btn-primary" href="#" data-wa="handle" data-pz-plate-cta>Let Jwero handle it</a>
</div>`);

// ---------------------------------------------------------------- act 6: the customer's choice
const RUN_FUNCS = ['Customer acquisition', 'Offline marketing and promotion', 'Customer engagement', 'Showroom journey', 'Sales', 'Digital commerce', 'Customer retention', 'Sourcing and vendors', 'Operations', 'Intelligence', 'Technology'];
const RUN_MODES = [
  { key: 'you', tab: 'You run it', title: 'Your team runs it. Jwero powers it.', line: 'You operate the business. Jwero provides the technology, the AI and the work that happens automatically. One system in place of many tools, so there is far less to learn.', lanes: [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    you: 'Run every function with your own team', ai: 'Keeps the record, the numbers and the technology in order', jw: 'Sets you up, trains your team, stays on call', meters: [85, 60, 1], cost: 'A technology subscription. ₹18,000 a month, first month ₹3,600.', cta: ['Explore self-managed', '/self-managed'] },
  { key: 'together', tab: 'We run it together', title: 'Your team, Jwero specialists and AI.', line: 'You retain control. Jwero provides the expertise and the execution where you want it, and AI does the routine. Nothing reaches a customer without your approval unless you allow it.', lanes: [2, 0, 1, 0, 0, 2, 1, 0, 1, 1, 2],
    you: 'Keep control, the showroom, the selling and the sourcing', ai: 'Does the replies, follow-ups, reminders and reports', jw: 'Specialists run the functions you choose, beside your people', meters: [45, 30, 1], cost: 'Platform, AI and specialist services. Scoped to your business.', cta: ['Build my Jwero team', '#with-you'] },
  { key: 'jwero', tab: 'Jwero runs it', title: 'You define the outcome. Jwero handles the function.', line: 'Jwero specialists, AI and technology run the functions you hand over, from marketing and ecommerce to the showroom journey, sourcing and vendors. No hiring, no agencies, nothing new to learn.', lanes: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    you: 'Set the goals. Stay with the jewellery and your customers', ai: 'Works at scale under the specialists', jw: 'Plans, executes and reports on every function you hand over', meters: [10, 5, 1], cost: 'Priced on the service and the outcome. Scoped to your business.', cta: ['Let Jwero handle it', '#handle'] },
];
const board = (start = 0) => `
<div class="pz-run" data-pz-run data-run-start="${start}">
  <script type="application/json">${json(RUN_MODES)}</script>
  <div class="pz-run-tabs" role="tablist" aria-label="How much Jwero handles">${RUN_MODES.map((m, i) => `<button type="button" role="tab" aria-selected="${i === start}" data-i="${i}"><span>${String(i + 1).padStart(2, '0')}</span>${m.tab}</button>`).join('')}</div>
  <div class="pz-run-body">
    <div class="pz-run-board" aria-hidden="true">
      <div class="pz-run-head"><span></span><b data-lane="0">You and your team</b><b data-lane="1">AI agents</b><b data-lane="2">Jwero’s specialists</b></div>
      <div class="pz-run-row pz-run-keep"><span>Jewellery, design, craftsmanship, your customers</span><div class="pz-run-track"><i style="--lane:0">Always yours</i></div></div>
      ${RUN_FUNCS.map((f, i) => `<div class="pz-run-row"><span>${f}</span><div class="pz-run-track"><i data-f="${i}" style="--lane:${RUN_MODES[start].lanes[i]};--d:${i}"></i></div></div>`).join('')}
    </div>
    <div class="pz-run-card" aria-live="polite">
      <h3 data-pz-run-title></h3>
      <p class="pz-run-line" data-pz-run-line></p>
      <ul class="pz-run-who">
        <li><span>You</span><b data-pz-run-you></b></li>
        <li><span>AI</span><b data-pz-run-ai></b></li>
        <li><span>Jwero</span><b data-pz-run-jw></b></li>
      </ul>
      <div class="pz-run-meters">
        <p><span>Your time on it</span><i><u data-pz-run-m="0"></u></i></p>
        <p><span>What you have to learn</span><i><u data-pz-run-m="1"></u></i></p>
        <p><span>Partners to manage</span><b>One</b></p>
      </div>
      <p class="pz-run-cost" data-pz-run-cost></p>
      <a class="btn btn-primary" href="#" data-pz-run-cta></a>
      <p class="pz-run-note">The bars are an illustration of the difference, not a measurement.</p>
    </div>
  </div>
</div>`;
const whoRuns = (start = 0) => L.section(`
${eyebrow('Your business. Your choice. Our responsibility.')}
<h2 class="pz-h pz-center">How much do you want Jwero to handle?</h2>
<p class="pz-lead pz-center">Tap one and watch where the work goes. Start small. Give us more when you’re ready.</p>
${board(start)}`, { id: 'who-runs-it' });

// The three ways to work with Jwero, as cards. Swipeable on a phone.
const LEVELS = [
  ['01', 'You run it', 'Your team + Jwero', 'You operate the business. Jwero provides technology, AI and work that happens automatically.', 'Self managed', 'A technology subscription.', '/self-managed', 'Explore self-managed', null],
  ['02', 'We run it together', 'Your team + Jwero specialists + AI', 'You retain control. Jwero provides expertise and execution.', 'Co-managed', 'Platform, AI and specialist services.', null, 'Build my Jwero team', 'with-you'],
  ['03', 'Jwero runs it', 'Jwero specialists + AI + technology', 'You define the outcome. Jwero handles the function.', 'Fully managed', 'Priced on the service and the outcome.', null, 'Let Jwero handle it', 'handle'],
];
const levels = () => `
<div class="pz-levels pz-swipe">${LEVELS.map(([n, t, who, line, way, pay, href, cta, wa], i) => `
  <article class="pz-level" id="${['self', 'with-you', 'for-you'][i]}">
    <p class="pz-level-n">${n}</p>
    <h3>${t}</h3>
    <p class="pz-level-mix">${who}</p>
    <p class="pz-level-who">${line}</p>
    <p class="pz-level-line"><span>${way}</span>${pay}</p>
    ${href ? `<a class="btn btn-ghost" href="${href}">${cta}</a>` : HANDLE(cta, wa, i === 2 ? 'btn pz-btn-gold' : 'btn btn-ghost')}
  </article>`).join('')}
</div>`;
const howMuch = () => L.section(`
${eyebrow('Your business. Your choice. Our responsibility.')}
<h2 class="pz-h pz-center">How much do you want Jwero to handle?</h2>
<p class="pz-lead pz-center">Software when you want control. Experts when you want execution.</p>
${levels()}
<p class="pz-shift pz-shift-sm">Start small.<br><b>Give us more when you’re ready.</b></p>
<p class="pz-sub-h">See where the work goes</p>
${board(1)}
<p class="pz-ways">Ways to work with Jwero are priced by how much we handle, not module by module. ${HANDLE('Get your Jwero business plan', 'plan', 'pz-link')}</p>`, { id: 'who-runs-it' });

// In place of a savings figure on the home page.
const buildLess = () => `
<section class="pz-band pz-less">
  <div class="pz-band-in">
    <h2 class="pz-h pz-center">Build less. Manage less.<br><em>Get more done.</em></h2>
    <ul class="pz-less-3">
      <li><b>Build less</b><span>No new team for every new channel, and no new tool for every new problem.</span></li>
      <li><b>Manage less</b><span>One partner in place of many vendors, agencies and logins.</span></li>
      <li><b>Get more done</b><span>The work is planned, executed, measured and improved, month after month.</span></li>
    </ul>
  </div>
</section>`;

// ---------------------------------------------------------------- count your team
// The roles a jeweller hires, or pays a freelancer or agency for, to keep up.
// Each can be marked as an employee, an agency, or a gap nobody covers.
// [role, lowest employee ₹/month, lowest freelancer or agency ₹/month,
//  share of the work AI does, the kinds of AI usage it draws on]
// "Lowest" means the cheapest way the role is commonly filled in India: a
// junior hire in a smaller city, or a freelancer. These are drafted estimates.
// Jwero is priced by rule from the lower of the two: 50% when the jeweller
// focuses on the outcome, 60% when they want to be involved in every decision.
// See blueprint/TEAM-COST-ASSUMPTIONS.md.
const TEAM_ROLES = [
  ['Get more customers', [['Performance marketing', 20000, 12000, .35, 'image,content'], ['SEO, AEO and GEO', 18000, 10000, .5, 'content'], ['Social media manager', 15000, 8000, .5, 'content,image,comment'], ['Content writer', 12000, 6000, .7, 'content'], ['Graphic designer', 15000, 8000, .6, 'image'], ['Video editor', 15000, 10000, .4, 'content']]],
  ['Sell more', [['Telecaller and follow-up', 10000, 12000, .7, 'out,in'], ['CRM executive', 15000, 12000, .5, 'reply,data'], ['Sales coordinator', 14000, 12000, .4, 'reply,out']]],
  ['Keep customers', [['Loyalty and scheme coordinator', 12000, 10000, .5, 'reply,out'], ['WhatsApp executive', 10000, 8000, .75, 'reply'], ['Customer care', 10000, 10000, .65, 'reply,in']]],
  ['Grow online', [['Ecommerce manager', 25000, 15000, .35, 'content,data'], ['Catalogue and listing executive', 12000, 8000, .6, 'content,image'], ['Product photographer', 15000, 10000, .5, 'image'], ['Marketplace executive', 14000, 10000, .5, 'content']]],
  ['Reduce work', [['Data entry operator', 9000, 7000, .7, 'data'], ['MIS and reports executive', 15000, 10000, .6, 'data'], ['IT and software coordinator', 18000, 10000, .3, 'data']]],
  ['Shop floor and supply', [['Purchase and sourcing executive', 18000, 15000, .2, 'data'], ['Vendor coordinator', 14000, 12000, .3, 'out'], ['Events and offline promotion', 15000, 15000, .15, 'image,content']]],
];
const AI_KINDS = [['reply', 'Customer replies'], ['comment', 'Comment replies'], ['image', 'Image generation'], ['content', 'Content creation'], ['in', 'Inbound calls'], ['out', 'Outbound calls'], ['data', 'Reports and data']];
const VOLUMES = ['Under 2,000 customers', '2,000 to 10,000', '10,000 to 50,000', 'More than 50,000'];
const countTeam = () => L.section(`
${eyebrow('Count your team')}
<h2 class="pz-h pz-center">What does keeping up cost you today?</h2>
<p class="pz-lead pz-center">Tap each role once if an employee does it, twice if a freelancer or agency does, three times if nobody does. We count it at the lowest going rate in India, so the comparison is fair to you. Your team stays yours.</p>
<div class="pz-team2" data-pz-team>
  <div class="pz-team2-pick">
    <p class="pz-team2-legend"><span class="is-e">Employee</span><span class="is-a">Freelancer or agency</span><span class="is-g">Nobody does it</span></p>
    ${TEAM_ROLES.map(([g, roles]) => `<div class="pz-team2-group"><p>${g}</p><div>${roles.map(([r, e, a, ai, k]) => `<button type="button" data-s="0" data-e="${e}" data-a="${a}" data-ai="${ai}" data-k="${k}" aria-label="${r}: not counted"><b>${r}</b><i></i></button>`).join('')}</div></div>`).join('')}
  </div>
  <div class="pz-team2-panel" aria-live="polite">
    <div class="pz-team2-scale">
      <label>Showrooms<span class="pz-team2-step"><button type="button" data-d="-1" aria-label="Fewer showrooms">−</button><output data-pz-team-stores>1</output><button type="button" data-d="1" aria-label="More showrooms">+</button></span></label>
      <label>Customer base<select data-pz-team-vol>${VOLUMES.map((v, i) => `<option value="${i}">${v}</option>`).join('')}</select></label>
    </div>
    <div class="pz-team2-mode" role="group" aria-label="How involved you want to be">
      <button type="button" aria-pressed="true" data-m="0"><b>Focus on the outcome</b><span>Jwero plans and executes. You see results.</span></button>
      <button type="button" aria-pressed="false" data-m="1"><b>Involve me in every decision</b><span>You approve each step. More coordination, more time.</span></button>
    </div>
    <p class="pz-team2-big"><span data-pz-team-n>0</span> people and agencies to manage <em>→ one partner</em></p>
    <dl>
      <div><dt>What you spend today, at the lowest rates</dt><dd data-pz-team-now>₹0</dd></div>
      <div><dt>The same work with Jwero</dt><dd data-pz-team-jw>₹0</dd></div>
      <div class="is-sub"><dt>Specialists’ time</dt><dd data-pz-team-human>₹0</dd></div>
      <div class="is-sub"><dt>AI usage, as used</dt><dd data-pz-team-ai>₹0</dd></div>
      <div class="is-save"><dt>Difference each month</dt><dd data-pz-team-save>₹0</dd></div>
      <div><dt>Your hours on it, each week</dt><dd data-pz-team-hrs>0</dd></div>
      <div><dt>Gaps Jwero would fill</dt><dd data-pz-team-gaps>None marked</dd></div>
    </dl>
    <p class="pz-team2-kinds" aria-label="AI usage in this estimate">${AI_KINDS.map(([k, t]) => `<span data-kind="${k}">${t}</span>`).join('')}</p>
    <div class="pz-team2-bars" aria-hidden="true"><p><span>Today</span><i><u data-pz-team-b1></u></i></p><p><span>With Jwero</span><i><u class="is-soft" data-pz-team-b3></u><u class="is-gold" data-pz-team-b2></u></i></p></div>
    <a class="btn pz-btn-gold" href="#" data-wa="plan" data-pz-team-cta>Get my Jwero business plan</a>
    <p class="pz-team2-note">Indicative. Today’s figures are the lowest going rates in India, drafted by us, not a survey. Jwero is priced at half of the cheaper way to fill each role when you focus on the outcome, and at 60% when you want to approve every step. AI usage is charged as used, so it moves with your volume. Filling a gap adds cost, so it is shown apart. Your plan carries the exact quote.</p>
  </div>
</div>`, { tone: 'tint', id: 'count-your-team' });

// ---------------------------------------------------------------- the assessment
const OWNERS = ['Nobody in particular', 'I do it myself', 'A staff member', 'A dedicated team', 'An agency', 'We don’t do this yet'];
const WORRIES = ['Digital marketing', 'Social media and content', 'WhatsApp and customer conversations', 'Online store and ecommerce', 'Customer follow-up', 'CRM and customer data', 'Reports and numbers', 'Technology and integrations', 'Hiring and training specialists'];
const sel = (name, label, opts) => `<label>${label}<select data-pz-f="${name}">${opts.map((o) => `<option>${o}</option>`).join('')}</select></label>`;
const checks = (name, list) => `<div class="pz-checks">${list.map((o) => `<label><input type="checkbox" data-pz-c="${name}" value="${o}"><span>${o}</span></label>`).join('')}</div>`;
const assessment = () => L.section(`
${eyebrow('The business assessment')}
<h2 class="pz-h pz-center">How much chaos are you managing today?</h2>
<p class="pz-lead pz-center">Eleven short questions. Then a recommendation: what to keep, what to strengthen, what to hand over.</p>
<div class="pz-assess" data-pz-assess id="assessment">
  <ol class="pz-steps"><li class="is-on">Your business</li><li>Who does what</li><li>What you want</li><li>Your recommendation</li></ol>
  <div class="pz-step is-on" data-step="0">
    <div class="pz-fields">
      ${sel('stores', 'How many stores?', ['1', '2 to 5', '6 to 20', 'More than 20'])}
      ${sel('customers', 'How large is your customer base?', ['Not sure', 'Under 2,000', '2,000 to 10,000', '10,000 to 50,000', 'More than 50,000'])}
      ${sel('mkt', 'How many people manage marketing?', ['Nobody in particular', '1', '2 to 5', 'More than 5'])}
      ${sel('agencies', 'How many agencies do you use?', ['None', '1', '2 to 3', '4 or more'])}
    </div>
  </div>
  <div class="pz-step" data-step="1">
    <div class="pz-fields">
      ${sel('wa', 'Who manages WhatsApp?', OWNERS)}
      ${sel('dm', 'Who manages digital marketing?', OWNERS)}
      ${sel('ec', 'Who manages ecommerce?', OWNERS)}
      ${sel('followup', 'How much follow-up is done by hand?', ['Almost none', 'Some of it', 'Most of it', 'Nearly all of it'])}
      ${sel('techtime', 'Time management spends coordinating technology', ['Hardly any', 'A few hours a week', 'About a day a week', 'More than a day a week'])}
    </div>
  </div>
  <div class="pz-step" data-step="2">
    <div class="pz-fields">${sel('challenge', 'What is your biggest growth challenge?', ['Not enough new customers', 'Enquiries not answered in time', 'Old customers not coming back', 'Online sales are small', 'Too much manual work', 'Too many tools and vendors', 'The team is stretched', 'No clear numbers to decide from'])}</div>
    <p class="pz-step-q">What would you most like to stop worrying about?</p>${checks('worry', WORRIES)}
  </div>
  <div class="pz-step pz-plan" data-step="3">
    <p class="pz-plan-k">Your Jwero recommendation</p>
    <h3 data-pz-plan-title></h3>
    <div class="pz-plan-grid" data-pz-plan></div>
    <p class="pz-plan-note">A first reading from your answers, not advice. A Jwero business specialist goes through it with you and corrects it.</p>
    <a class="btn btn-primary" href="#" data-wa="assessment" data-pz-plan-cta>Build my Jwero plan</a>
  </div>
  <div class="pz-assess-nav"><button type="button" class="btn btn-ghost" data-pz-back hidden>Back</button><button type="button" class="btn btn-primary" data-pz-next>Next</button></div>
</div>`, { tone: 'tint' });

// ---------------------------------------------------------------- act 7: proof
// Patterns, not customer results. Replace each with a named customer, what
// Jwero took responsibility for, and verified figures, as permission arrives.
const STORIES = [
  ['Jwero takes over customer engagement', '“We couldn’t keep up with customer enquiries.”', 'Every reply on WhatsApp and Instagram, one shared inbox, follow-ups, and specialists watching quality.', ['Time to first reply', 'Enquiries answered', 'Enquiries that became bills']],
  ['Jwero automates the retention engine', '“Old customers stopped coming and we did not notice.”', 'Every customer’s occasions and taste on record, and outreach with a reason, sent and followed up.', ['Customers who came back', 'Scheme renewals', 'Repeat purchase value']],
  ['Jwero builds and operates the digital commerce channel', '“Our website was a brochure nobody bought from.”', 'A store priced at the live rate, a catalogue on every channel, and a specialist running it.', ['Online orders', 'Enquiries from the site', 'Visitors who came back']],
  ['Jwero takes responsibility for new customers', '“We were spending on ads and could not say what they brought.”', 'Ads on Google and Instagram, tied to the enquiry and the bill, tuned every week.', ['Cost of each new customer', 'Enquiries per rupee spent', 'Sales traced to each ad']],
  ['Jwero becomes the marketing team', '“Three agencies, four tools, and no one account of what worked.”', 'Content, social, campaigns and search under one team, on one record.', ['Vendors replaced', 'Campaigns with a sales figure', 'Hours given back']],
  ['Jwero takes the routine off the team', '“The same thing was typed into five places.”', 'One system for counter, stock, purchase, workshop and books, with the routine done automatically.', ['Tools replaced', 'Hours saved a week', 'Errors found the same day']],
];
const TRUST_LINKS = [
  ['Security', 'How your data is protected.', '/trust/security'],
  ['Data and privacy', 'What we hold, and what is always yours.', '/legal/data-policy'],
  ['How we start', 'Assessment, plan, the first ninety days.', '/managed-services#engagement'],
  ['Jwero Business Team', 'A named specialist, and one account of the work.', '/ai-and-experts'],
  ['Works with your existing business', 'Tally, WhatsApp, Shopify and more.', '/platform/integrations'],
  ['Trust Centre', 'Every standard, with its honest status.', '/trust'],
];
const proof = (cta = true, n = STORIES.length) => L.section(`
${eyebrow('Proof')}
<h2 class="pz-h pz-center">Don’t take our word for it.</h2>
<p class="pz-lead pz-center">Real businesses. Real work. Real outcomes. This is how each story is told.</p>
<div class="pz-stories">${STORIES.slice(0, n).map(([title, before, did, measures]) => `
  <article class="pz-story">
    <p class="pz-story-area">${title}</p>
    <p class="pz-story-k">Before</p><p class="pz-story-q">${before}</p>
    <p class="pz-story-k">Jwero takes responsibility for</p><p>${did}</p>
    <p class="pz-story-k">After, measured as</p><ul>${measures.map((m) => `<li>${m}</li>`).join('')}</ul>
  </article>`).join('')}
</div>
<p class="pz-stories-note">These are the patterns we work to, shown without figures. We do not publish a result we have not verified. Named stories with their numbers replace these as each customer agrees to publish.</p>
${L.customerLogos()}
<div class="pz-trust">${TRUST_LINKS.map(([t, d, href]) => `<a href="${href}"><b>${t}</b><span>${d}</span></a>`).join('')}</div>
${cta ? `<p class="pz-cta-center"><a class="btn btn-primary" href="/what-we-handle">See what Jwero runs</a><a class="btn btn-ghost" href="/customers">The jewellers on Jwero</a></p>` : ''}`, { id: 'proof' });

// ---------------------------------------------------------------- why Jwero: five principles
const WHY5 = [
  ['Jewellery-native', 'Built around how jewellery businesses actually operate.'],
  ['Continuously adapting', 'Jwero keeps up with changing technology, markets and customers.'],
  ['AI + human expertise', 'AI handles scale. Specialists handle judgement and complexity.'],
  ['Outcome-first', 'Start with the business goal, not the software.'],
  ['Flexible ownership', 'Run it yourself, run it with us, or let us run it.'],
];
const whyFive = () => L.section(`
${eyebrow('Why Jwero')}
<h2 class="pz-h pz-center">Five things that make Jwero different.</h2>
<ol class="pz-why5">${WHY5.map(([t, d], i) => `<li><span>${String(i + 1).padStart(2, '0')}</span><b>${t}</b><p>${d}</p></li>`).join('')}</ol>`, { tone: 'tint' });

// ---------------------------------------------------------------- supporting sections for the inner pages
const LOVE = ['Customers', 'Jewellery', 'Designs', 'Collections', 'Craftsmanship', 'Stores', 'Suppliers', 'Business decisions'];
const IMAGINE = ['Imagine not having to constantly ask what changed in digital marketing.', 'Not having to chase your technology team.', 'Not having to figure out the latest AI tool.', 'Not having to hire another specialist.', 'Not having to wonder whether your website, ads, CRM or customer engagement are keeping up.'];
const love = () => `
<section class="pz-band pz-band-warm">
  <div class="pz-band-in">
    ${eyebrow('The jeweller’s role')}
    <h2 class="pz-h">Get back to what you love.</h2>
    <ul class="pz-love">${LOVE.map((w) => `<li>${gem}${w}</li>`).join('')}</ul>
    <div class="pz-imagine">${IMAGINE.map((l) => `<p>${l}</p>`).join('')}<p class="pz-imagine-end">Imagine simply knowing that someone is continuously taking care of it.</p></div>
    <p class="pz-turn"><b>The world keeps changing.<br>Your focus doesn’t have to.</b></p>
  </div>
</section>`;

const LEARNS = ['Customer behaviour', 'Market changes', 'Campaign performance', 'Sales data', 'Product trends', 'Technology changes', 'Industry developments', 'Business performance'];
const ADAPTS = [['New technology?', 'Evaluate it.'], ['New customer behaviour?', 'Adapt the strategy.'], ['New advertising algorithm?', 'Optimise campaigns.'], ['New AI capability?', 'Add it where useful.'], ['New business opportunity?', 'Identify it.'], ['New problem?', 'Find a solution.']];
const adapt = () => L.section(`
<div class="pz-two">
  <div>
    ${eyebrow('Continuous adaptation')}
    <h2 class="pz-h">The technology keeps evolving. Your Jwero team evolves with it.</h2>
    <p class="pz-lead">Jwero continuously learns from what is happening in and around your business:</p>
    <ul class="pz-chips">${LEARNS.map((t) => `<li>${t}</li>`).join('')}</ul>
    <p class="pz-strong">When something changes, Jwero adapts.</p>
  </div>
  <ul class="pz-adapts">${ADAPTS.map(([q, a], i) => `<li style="--i:${i}"><span>${q}</span><b>${a}</b></li>`).join('')}</ul>
</div>`);

// ---------------------------------------------------------------- act 8: the ask
const ask = () => L.section(`
<div class="pz-askband">
  <h2 class="pz-h">Tell us what you want to achieve.</h2>
  <p class="pz-lead">We’ll figure out what needs to happen.</p>
  <div class="pz-cta">${HANDLE('Start with Jwero', 'start')}<a class="btn btn-ghost" href="#assessment">Build my business plan</a></div>
</div>`);

const finale = () => `
<section class="pz-band pz-final">
  <div class="pz-band-in">
    <h2 class="pz-h">The world will keep changing.</h2>
    <div class="pz-final-lines"><p>Technology will change.</p><p>Customers will change.</p><p>Markets will change.</p><p>AI will change.</p><p>Your business will evolve.</p></div>
    <p class="pz-final-turn">You don’t have to chase everything.</p>
    <p class="pz-lead">Jwero will keep learning, adapting and executing alongside you.</p>
    <p class="pz-sign">You focus on jewellery.<br>We handle the chaos.</p>
    <div class="pz-cta">${HANDLE('Let Jwero handle it', 'handle', 'btn pz-btn-gold')}<a class="btn pz-btn-line" href="/self-managed">Explore Jwero</a></div>
  </div>
</section>`;

// A short closing band for the inner pages.
const close = () => `
<section class="pz-band pz-final pz-final-sm">
  <div class="pz-band-in">
    <p class="pz-sign">Tell us what you want to achieve.<br>We’ll figure out what needs to happen.</p>
    <p class="pz-lead">You focus on jewellery. We handle the chaos. You run it, we run it together, or we run it for you.</p>
    <div class="pz-cta">${HANDLE('Start with Jwero', 'start', 'btn pz-btn-gold')}<a class="btn pz-btn-line" href="/how-it-works">See how Jwero works</a></div>
  </div>
</section>`;

const innerHero = (kicker, h1, sub, cta2, cta1) => `
<section class="hero pz-hero pz-hero-inner">
  <div class="pz-hero-in">
    <div class="pz-hero-copy">
      ${eyebrow(kicker)}
      <h1>${h1}</h1>
      <p class="pz-hero-sub">${sub}</p>
      <div class="pz-cta">${cta1 || HANDLE('Let Jwero handle it', 'handle', 'btn pz-btn-gold')}${cta2 ? `<a class="btn pz-btn-line" href="${cta2[0]}">${cta2[1]}</a>` : ''}</div>
    </div>
  </div>
</section>`;

// ---------------------------------------------------------------- pages
const home = {
  slug: 'index',
  title: 'Jwero: You Focus on Jewellery. We Handle the Chaos.',
  description: 'Markets, customers and technology keep changing. Jwero brings together AI, technology and jewellery specialists to adapt, execute and grow your business, so you can focus on jewellery. You run it, we run it together, or we run it for you.',
  schema: {
    '@context': 'https://schema.org', '@type': 'Organization', name: 'Jwero', url: 'https://jwero.ai',
    description: 'Jwero is the operating partner for the modern jewellery business. Its model, Jewellery Business as a Service, combines AI, technology and specialist execution to help run and grow a jewellery business. Jewellers can run it themselves, run it together with Jwero, or have Jwero run it.',
  },
  body: `
${hero()}
${contrast()}
${worldChanged()}
${hiddenCost()}
${insight()}
${solution()}
${dontKnow()}
${aiWorks()}
${dayAndCommand()}
${handles()}
${howMuch()}
${countTeam()}
${assessment()}
${proof(true, 3)}
${whyFive()}
${ask()}
${finale()}
`,
};

const why = {
  slug: 'why-jwero',
  title: 'Why Jwero: You Shouldn’t Have to Be an Expert in Everything | Jwero',
  description: 'Being great at jewellery used to be enough. Now a jeweller is expected to master marketing, AI, ecommerce and more, and to relearn it every year. Why Jwero exists, and what it takes off your plate.',
  breadcrumbs: [['Home', '/'], ['Why Jwero']],
  body: `
${innerHero('Why Jwero', 'You shouldn’t have to become an expert in everything to remain an expert in jewellery.', 'The world keeps changing. Your focus doesn’t have to.', ['/how-it-works', 'See how Jwero works'])}
${worldChanged()}
${hiddenCost()}
${solution()}
${whyFive()}
${love()}
${notAgency()}
${proof(false)}
${close()}
`,
};

const STEPS = [
  ['Tell us what you want to achieve', 'Not which tool you need. The outcome: more customers, customers coming back, online sales, less manual work.'],
  ['We read where you are', 'A short assessment of your business, your team, your channels and your tools.'],
  ['We decide what needs to happen', 'Which technology, which AI agents, which specialists, what should happen automatically, and what to measure.'],
  ['You choose how much we handle', 'You run it, we run it together, or Jwero runs it. Function by function.'],
  ['We make it happen, and keep adapting', 'One account of what was done and what it produced. When something changes, the plan changes.'],
];
const how = {
  slug: 'how-it-works',
  title: 'How Jwero Works: From Your Goal to Getting It Done | Jwero',
  description: 'How working with Jwero goes: you say what you want to achieve, AI and specialists work out and do what needs to happen, and you choose whether to run it yourself, together with Jwero, or hand it over.',
  breadcrumbs: [['Home', '/'], ['How it works']],
  body: `
${innerHero('How it works', 'AI does the work. Experts make it better.', 'You tell us what you want to achieve. Software, AI, expertise and execution do the rest, and keep improving.', ['#assessment', 'Build my business plan'])}
${L.section(`${eyebrow('Five steps')}<h2 class="pz-h pz-center">From a goal to a result.</h2><ol class="pz-how">${STEPS.map(([t, d], i) => `<li><span>${String(i + 1).padStart(2, '0')}</span><b>${t}</b><p>${d}</p></li>`).join('')}</ol>`)}
${notAgency()}
${dayAndCommand()}
${whoRuns(1)}
${dontKnow()}
${assessment()}
${close()}
`,
};

const aiExperts = {
  slug: 'ai-and-experts',
  title: 'AI + Experts: AI Does the Work, Experts Make It Better | Jwero',
  description: 'How Jwero combines AI agents that understand, decide, execute, measure and improve with jewellery-business specialists in marketing, ecommerce, CRM, content, data and technology.',
  breadcrumbs: [['Home', '/'], ['AI + experts']],
  body: `
${innerHero('AI + experts', 'AI does the work. Experts make it better.', 'AI handles scale. Specialists handle judgement and complexity. Together they keep your business adapting, without you having to learn any of it.', ['/what-we-handle', 'See what Jwero runs'], HANDLE('Build my Jwero team', 'with-you', 'btn pz-btn-gold'))}
${aiWorks()}
${experts()}
${notAgency()}
${L.section(`${eyebrow('In your control')}<h2 class="pz-h pz-center">AI that waits for your yes.</h2><p class="pz-lead pz-center">Every AI action sits inside limits you set: approvals, daily caps, quiet hours, and one switch that stops it. <a href="/platform/ai-workforce">How the AI is governed</a> · <a href="/trust">Trust Centre</a></p>`, { tone: 'tint' })}
${adapt()}
${whoRuns(1)}
${close()}
`,
};

const handle = {
  slug: 'what-we-handle',
  title: 'What Jwero Handles: Customers, Sales, Online Growth, Operations | Jwero',
  description: 'What Jwero can power, manage for you, or help with: getting customers, selling more, keeping customers, growing online, reducing work, understanding the business and keeping up with technology.',
  breadcrumbs: [['Home', '/'], ['What we handle']],
  body: `
${innerHero('What we handle', 'Start with one function. Give us more when you’re ready.', 'Eight outcomes around the jewellery itself. For each: what Jwero can power, what Jwero can manage for you, and where specialists can help.', ['#assessment', 'Build my business plan'])}
${handles()}
${monthly()}
${plate()}
${L.section(`${eyebrow('Underneath')}<h2 class="pz-h pz-center">The capabilities are all still here.</h2><p class="pz-lead pz-center">Every capability sits under this promise. If you like to look under the bonnet: <a href="/products">capabilities</a> · <a href="/solutions">by business type</a> · <a href="/platform">the platform</a> · <a href="/platform/integrations">works with your existing business</a> · <a href="/pricing">ways to work with Jwero</a>.</p>`, { tone: 'tint' })}
${assessment()}
${close()}
`,
};

const self = {
  slug: 'self-managed',
  title: 'Self Managed: Your Team Runs It, Jwero Powers It | Jwero',
  description: 'For jewellers who want control: Jwero gives your team the technology, AI agents and data to run the business yourselves. A technology subscription at ₹18,000 a month, first month ₹3,600.',
  breadcrumbs: [['Home', '/'], ['Self managed']],
  body: `
${innerHero('01 · You run it', 'Software when you want control.', 'You operate the business. Jwero provides the technology, the AI and the work that happens automatically.', ['/jwero-os', 'See the operating system'], `<a class="btn pz-btn-gold" href="${L.TRIAL_URL}self-managed" rel="noopener" data-trial>Start for ₹3,600</a>`)}
${whoRuns(0)}
${L.section(`${eyebrow('What your team gets')}<h2 class="pz-h pz-center">One system, so your team is not learning ten.</h2>
<div class="pz-levels pz-levels-4">
  <article class="pz-level"><h3>The operating system</h3><p class="pz-level-who">Customers, counter, stock, purchase, workshop, books and team on one record.</p><a class="pz-link" href="/jwero-os">See it →</a></article>
  <article class="pz-level"><h3>AI agents</h3><p class="pz-level-who">Enquiries answered, follow-ups drafted, reminders sent, with your approval.</p><a class="pz-link" href="/products/ai-sales-agents">See them →</a></article>
  <article class="pz-level"><h3>Every capability</h3><p class="pz-level-who">CRM, WhatsApp, ecommerce, billing, inventory, manufacturing and more.</p><a class="pz-link" href="/products">All capabilities →</a></article>
  <article class="pz-level"><h3>For your kind of business</h3><p class="pz-level-who">Retail, chains, manufacturers, wholesale, diamond traders, online brands.</p><a class="pz-link" href="/solutions">Find yours →</a></article>
</div>`)}
${L.section(`<div class="home-price"><div><p class="eyebrow">THE TECHNOLOGY SUBSCRIPTION</p><h2>Every capability. ₹18,000 a month. First month ₹3,600.</h2><p>One subscription, billed monthly. No price per capability and no price per seat. Messages, AI and calls run on a prepaid wallet at published rates.</p></div><div class="cta-row"><a class="btn btn-primary" href="${L.TRIAL_URL}self-managed" rel="noopener" data-trial>Start for ₹3,600</a><a class="btn btn-ghost" href="/pricing">Ways to work with Jwero</a></div></div>`, { tone: 'tint' })}
${L.section(`${eyebrow('And when you want help')}<h2 class="pz-h pz-center">Experts when you want execution.</h2><p class="pz-lead pz-center">Start by running it yourself. Bring in Jwero specialists for one function, or all of them, when you would rather not manage it. <a href="/managed-services">See managed services</a>.</p>${levels()}`)}
${close()}
`,
};

const managed = {
  slug: 'managed-services',
  title: 'Managed Services: We Run It Together, or Jwero Runs It | Jwero',
  description: 'For jewellers who want expertise or freedom: Jwero specialists and AI work beside your team, or run whole functions for you, from marketing and ecommerce to CRM, content and analytics. Start with one function.',
  breadcrumbs: [['Home', '/'], ['Managed services']],
  body: `
${innerHero('02 and 03 · Managed', 'We run it together. Or Jwero runs it.', 'Your team with our specialists and AI, or whole functions handed over. You define the outcome. Jwero takes responsibility for the function.', ['#assessment', 'Build my business plan'], HANDLE('Build my Jwero team', 'with-you', 'btn pz-btn-gold'))}
${whoRuns(2)}
${L.section(`${levels()}<p class="pz-shift pz-shift-sm">Start small.<br><b>Give us more when you’re ready.</b></p>`, { tone: 'tint' })}
${monthly()}
${notAgency()}
${experts()}
${L.section(`${eyebrow('How an engagement goes')}<h2 class="pz-h pz-center">Scoped to your business, function by function.</h2>
<ol class="pz-how">
  <li><span>01</span><b>Assessment</b><p>Where you are, what you want, what you would rather not manage.</p></li>
  <li><span>02</span><b>A plan and a scope</b><p>Which functions Jwero takes on, who is involved, what is measured. Managed work is scoped and quoted for your business.</p></li>
  <li><span>03</span><b>The first ninety days</b><p>Priorities in order, with a named Jwero business specialist.</p></li>
  <li><span>04</span><b>A regular account</b><p>What was done, what it produced, what changes next.</p></li>
  <li><span>05</span><b>Your control</b><p>Take a function back, or hand another over, whenever you like. Your data is always yours.</p></li>
</ol>`, { id: 'engagement' })}
${countTeam()}
${assessment()}
${close()}
`,
};

const success = {
  slug: 'success-stories',
  title: 'Success Stories: What Jwero Took Responsibility For | Jwero',
  description: 'How jewellery businesses hand work to Jwero: what was happening before, what Jwero took responsibility for, and how the result is measured, across engagement, retention, ecommerce, marketing and operations.',
  breadcrumbs: [['Home', '/'], ['Success stories']],
  body: `
${innerHero('Success stories', 'Don’t take our word for it.', 'Not “the customer implemented a CRM”. What was happening, what Jwero took responsibility for, and what changed.', ['/customers', 'The jewellers on Jwero'])}
${proof(false)}
${dontKnow()}
${close()}
`,
};

module.exports = [home, why, how, aiExperts, handle, self, managed, success];
