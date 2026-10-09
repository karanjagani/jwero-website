// The positioning: "You focus on jewellery. We handle the chaos."
// Jwero as the operating partner that takes the complexity and the constant
// learning off a jeweller. The business model is Jewellery Business as a
// Service; the three ways to work are: you run it, we run it together, Jwero
// runs it. The product, solution, pricing and trust pages built earlier are
// unchanged and sit underneath as the capabilities. The previous home page
// lives at /. Styles are the `pz-` rules in site.css; behaviour is the
// "positioning" block in site.js.
//
// The home page is ordered for conversion: promise, who trusts us, the cost of
// keeping up, the insight, the solution, then three things to do early (say your
// goal, choose how much we handle, count your team), then how it works, what
// we handle, proof, and the assessment as the ask.
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
      <p class="pz-hero-ease">Onboarding takes a day.</p>
      <p class="pz-hero-note">You run it. We run it together. Or we run it for you.</p>
    </div>
  </div>
</section>`;

// The JBaaS page hero, in the home page's look: the blue panel, copy on the
// left with two doors, and the chaos-to-focus flow as the moving graphic.
const heroHome = () => `
<section class="hero hero-panel hero-home jbs-hero">
  <div class="panel">
    <div class="panel-glow" aria-hidden="true"></div>
    <div class="hero-home-grid">
      <div class="hero-home-copy">
        <p class="hero-kicker">${L.mark('mark-xs')}Jewellery Business as a Service</p>
        <h1>You focus on jewellery. <em>We handle the chaos.</em></h1>
        <p class="sub">Markets, customers and technology keep changing. Jwero’s specialists and AI run the work around your jewellery: marketing, follow-up, online sales and the back office, as your companion to get the work done.</p>
        <div class="hero-doors">
          <a class="hero-door is-managed" href="#" data-wa="handle"><span>Let Jwero run it</span><b>Let Jwero handle it</b><em>Priced on the work. Every tool included.</em></a>
          <a class="hero-door" href="#count-your-team"><span>See your number</span><b>Count your team</b><em>What the work costs today, and with Jwero.</em></a>
        </div>
        <p class="cta-note">Onboarding in a day · <a href="/self-managed">Run it yourself instead</a></p>
      </div>
      <div class="jbs-flow">
        <div class="pz-split" aria-label="Everything that keeps changing flows through Jwero into what you focus on">
          <div class="pz-chaos"><p class="pz-split-k">Everything that keeps changing</p><div class="pz-chaos-cloud">${['Markets', 'Customers', 'AI', 'Google', 'Instagram', 'WhatsApp', 'Ads', 'Ecommerce', 'Content', 'CRM', 'Data', 'Competition'].map((w, i) => `<span style="--i:${i}">${w}</span>`).join('')}</div></div>
          <div class="pz-between"><i><u></u><u></u><u></u></i><span>${L.mark('pz-mark')}<b>Jwero</b><small>AI + experts</small></span><i><u></u><u></u><u></u></i></div>
          <div class="pz-focus"><p class="pz-split-k">What you focus on</p><ul>${['Jewellery', 'Customers', 'Craftsmanship', 'Collections', 'Growth'].map((w) => `<li>${gem}${w}</li>`).join('')}</ul></div>
        </div>
      </div>
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
  ['Grow online', 'A store, a catalogue and channels that sell while the shop is shut.', ['Build and run your online store at the live rate', 'List on Google Shopping and marketplaces', 'Sell on WhatsApp, Instagram and video'], [['Online store', '/products/ecommerce'], ['Marketplaces', '/products/marketplaces'], ['Catalogues', '/products/digital-catalogues']], ['Ecommerce specialist', 'Content and creative'], 2],
  ['Reduce manual work', 'The typing, matching and chasing stop being anyone’s job.', ['One record, so nothing is entered twice', 'Bills, stock and books that update together', 'Reminders and follow-ups drafted for you'], [['Count your tools', '/#count-yours'], ['ERP', '/products/erp'], ['Accounting', '/jewellery-accounting-software']], ['Automation specialist', 'Technology specialist'], 1],
  ['Improve customer experience', 'Every customer is known, answered and remembered, on every channel.', ['One inbox for WhatsApp, Instagram, web and calls', 'A reply that knows her history', 'Appointments, video visits and follow-ups that arrive prepared'], [['WhatsApp', '/products/whatsapp'], ['Appointments', '/jewellery-appointment-booking-software'], ['Showroom', '/products/showroom']], ['Customer engagement', 'CRM specialist'], 2],
  ['Build my digital presence', 'You look, online, like the jeweller you are in the showroom.', ['Website, catalogue and Google profile', 'A steady flow of posts, Reels and stories', 'Reviews asked for and answered'], [['Social media', '/products/social-media'], ['Online store', '/products/ecommerce'], ['Instagram', '/instagram-for-jewellers']], ['Content and creative', 'Digital marketing'], 3],
  ['Let the routine run itself', 'The routine runs itself, inside limits you set.', ['AI agents for enquiries, follow-ups and reminders', 'Journeys that act on what customers do', 'Caps, approval where you want it, and one switch to stop it'], [['AI agents', '/products/ai-sales-agents'], ['Journeys', '/products/journeys'], ['AI governance', '/platform/ai-workforce']], ['AI specialist', 'Automation specialist'], 1],
  ['Understand my customers', 'You know who is likely to buy, who is drifting, and why.', ['Every signal a customer gives, read and scored', 'Segments that update themselves', 'A plain weekly account of what changed'], [['Customer memory', '/platform/customer-memory'], ['Segmentation', '/products/segmentation'], ['Reports', '/products/reports']], ['Data and analytics', 'CRM specialist'], 1],
  ['Scale without hiring', 'New branches and channels without a new team for each.', ['AI agents take the routine load', 'Jwero specialists fill the roles you would have hired', 'One system for every branch'], [['Multi-store', '/products/multi-store'], ['AI agents', '/products/ai-sales-agents'], ['Managed services', '/jewellery-business-as-a-service']], ['Jewellery growth strategist', 'AI specialist'], 3],
  ['I want Jwero to handle everything', 'You set the goals. Jwero runs the functions around the jewellery.', ['A plan built from where your business is today', 'AI agents and specialists across every function you hand over', 'One account of what was done and what it produced'], [['Managed services', '/jewellery-business-as-a-service'], ['What we handle', '/what-we-handle'], ['How it works', '/how-it-works']], ['A Jwero business specialist leads; the rest are brought in as needed'], 3],
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
    <a class="btn btn-primary" href="#" data-wa="outcome" data-pz-out-cta>Let Jwero handle it</a>
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
    <span class="pz-agent-ico">${L.icon(['trend', 'megaphone', 'chat', 'target', 'heart', 'store', 'sparkle', 'pie', 'flow'][i])}</span>
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
    <p class="pz-cta-inline">${HANDLE('Let Jwero handle it', 'with-you', 'btn btn-ghost')}</p>
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
    <a class="btn pz-btn-gold" href="#" data-wa="handle" data-pz-cmd-cta hidden>Let Jwero handle it</a>
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
  ['Grow online', ['Website', 'Ecommerce', 'Catalogue', 'Google Shopping', 'Marketplace'], 'Online store, live-rate catalogue, listings', 'Running the store and the listings', 'Ecommerce strategy', '/products/ecommerce'],
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
    you: 'Run every function with your own team', ai: 'Keeps the record, the numbers and the technology in order', jw: 'Sets you up, trains your team, stays on call', meters: [85, 60, 1], cost: 'A technology subscription, starting with a free trial.', cta: ['Run it yourself', '/self-managed'] },
  { key: 'together', tab: 'We run it together', title: 'Your team, Jwero specialists and AI.', line: 'You retain control. Jwero provides the expertise and the execution where you want it, and AI does the routine. AI works on its own inside your limits, and you choose what needs your approval.', lanes: [2, 0, 1, 0, 0, 2, 1, 0, 1, 1, 2],
    you: 'Keep control, the showroom, the selling and the sourcing', ai: 'Does the replies, follow-ups, reminders and reports', jw: 'Specialists run the functions you choose, beside your people', meters: [45, 30, 1], cost: 'Priced on the work. Every Jwero tool is included, with no subscription.', cta: ['Let Jwero handle it', '#with-you'] },
  { key: 'jwero', tab: 'Jwero runs it', title: 'You define the outcome. Jwero handles the function.', line: 'Jwero specialists, AI and technology run the functions you hand over, from marketing and ecommerce to the showroom journey, sourcing and vendors. No hiring, no agencies, nothing new to learn.', lanes: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    you: 'Set the goals. Stay with the jewellery and your customers', ai: 'Works at scale under the specialists', jw: 'Plans, executes and reports on every function you hand over', meters: [10, 5, 1], cost: 'Priced on the work and the outcome, with specialists and every tool included.', cta: ['Let Jwero handle it', '#handle'] },
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
  ['01', 'You run it', 'Your team + Jwero', 'You operate the business. Jwero provides technology, AI and work that happens automatically.', 'Self managed', 'A technology subscription.', '/self-managed', 'Run it yourself', null],
  ['02', 'We run it together', 'Your team + Jwero specialists + AI', 'You retain control. Jwero provides expertise and execution.', 'Co-managed', 'Specialists and AI, priced on the work. Every tool included.', null, 'Let Jwero handle it', 'with-you'],
  ['03', 'Jwero runs it', 'Jwero specialists + AI + technology', 'You define the outcome. Jwero handles the function.', 'Fully managed', 'Priced on the work and the outcome. Every tool included, no subscription.', null, 'Let Jwero handle it', 'handle'],
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
    ${i === 0 ? `<a class="pz-level-alt" href="${L.TRIAL_URL}ways" rel="noopener" data-trial>₹18,000 a month. Start today for ₹3,600 →</a>` : HANDLE('Or start with just one function →', 'one', 'pz-level-alt')}
  </article>`).join('')}
</div>`;
const howMuch = () => L.section(`
${eyebrow('Your business. Your choice. Our responsibility.')}
<h2 class="pz-h pz-center">How much do you want Jwero to handle?</h2>
<p class="pz-lead pz-center">Software when you want control. Experts when you want execution.</p>
${levels()}
<p class="pz-shift pz-shift-sm">Start small.<br><b>Give us more when you’re ready.</b></p>
<ul class="pz-none"><li><b>A specialist for every job</b><span>Jwero’s specialists and AI do the work alongside you.</span></li><li><b>Every tool included</b><span>When Jwero manages it, every Jwero tool comes with it.</span></li><li><b>One partner</b><span>One team to talk to, and one account of what was done.</span></li></ul>
<p class="pz-sub-h">See where the work goes</p>
${board(1)}
<p class="pz-ways">Ways to work with Jwero are priced by how much we handle, not module by module. <a class="pz-link" href="/count-your-team">Count your team and see →</a></p>`, { id: 'who-runs-it' });

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
// The software a role needs when the jeweller employs someone to do it, at the
// lowest paid plan: [label, ₹/month]. Drafted estimates. An agency
// is assumed to bring its own. With Jwero managing the work, every tool is
// included at no charge and there is no platform subscription.
const ROLE_TOOLS = {'Data analyst': ['Reporting tool', 1500], 'AI and automation specialist': ['Automation tool', 2500], 'Performance marketing': ['Ad tracking and landing pages', 1500], 'SEO, AEO and GEO': ['SEO tool', 2000], 'Social media manager': ['Scheduling tool', 1500], 'Content writer': ['AI writing tool', 1500], 'Graphic designer': ['Design tool', 500], 'Video editor': ['Editing tool', 1000], 'Email and SMS marketer': ['Email and SMS tool', 1500], 'Telecaller and follow-up': ['Cloud telephony', 2000], 'CRM executive': ['CRM', 2500], 'Showroom journey coordinator': ['Appointment tool', 1000], 'Loyalty and scheme coordinator': ['Loyalty and scheme app', 2000], 'WhatsApp executive': ['WhatsApp API tool', 2500], 'Customer care': ['Helpdesk', 1500], 'Reviews and reputation': ['Review tool', 1500], 'Ecommerce manager': ['Online store platform', 2500], 'Website developer': ['Hosting and plugins', 1000], 'Catalogue and listing executive': ['Catalogue app', 1000], 'Product photographer': ['Photo editing tool', 500], 'Marketplace executive': ['Listing tool', 1500], 'Staff trainer': ['Training app', 1500]};
// The roles a jeweller hires, or pays a freelancer or agency for, to keep up.
// Each can be marked as an employee, an agency, or a gap nobody covers.
//
// [role, employee ₹/month, agency ₹/month,
//  share of the work AI does, what is counted, how much one person handles a
//  month, where the starting count comes from, stepper step]
//
// The starting count is either a plain number ("n:30"), a number per showroom
// ("s:600"), the ticked channels ("c"), or a prediction from the customer base
// ("p:conv" and so on; the formulas are in site.js). The count divided by what
// one person handles is the number of people the work takes.
//
// Rates and capacities are drafted estimates. The Jwero figure the widget
// shows is indicative only; the plan carries the quote.
const TEAM_ROLES = [
  ['Strategy and direction', [
    ['Growth strategist', 30000, 15000, .3, 'plans and reviews a month', 4, 'n:2', 1],
    ['Marketing manager', 25000, 15000, .35, 'campaigns a month', 6, 'n:3', 1],
    ['Data analyst', 22000, 12000, .6, 'questions answered a month', 30, 'n:12', 2],
    ['AI and automation specialist', 30000, 15000, .5, 'journeys and agents kept running', 15, 'n:6', 1],
  ]],
  ['Get more customers', [
    ['Performance marketing', 20000, 12000, .35, 'ad channels', 4, 'c', 0],
    ['SEO, AEO and GEO', 18000, 10000, .5, 'pages improved a month', 12, 'n:8', 2],
    ['Social media manager', 15000, 8000, .5, 'posts, stories and Reels a month', 45, 'n:30', 5, 'comments'],
    ['Content writer', 12000, 6000, .7, 'pieces written a month', 40, 'n:20', 5],
    ['Graphic designer', 15000, 8000, .6, 'creatives a month', 60, 'n:30', 5],
    ['Video editor', 15000, 10000, .4, 'videos a month', 20, 'n:8', 2],
    ['Influencer and collaborations', 15000, 10000, .3, 'collaborations a month', 8, 'n:2', 1],
    ['Email and SMS marketer', 14000, 8000, .6, 'campaigns sent a month', 16, 'n:6', 1],
  ]],
  ['Sell more', [
    ['Telecaller and follow-up', 10000, 12000, .7, 'outbound calls a month', 1800, 'p:out', 100],
    ['CRM executive', 15000, 12000, .5, 'customers kept on record', 15000, 'p:base', 1000],
    ['Sales coordinator', 14000, 12000, .4, 'quotations and orders a month', 300, 'p:quote', 20],
    ['Showroom journey coordinator', 14000, 12000, .35, 'appointments and walk-ins followed up', 400, 'p:visits', 25],
  ]],
  ['Keep customers', [
    ['Loyalty and scheme coordinator', 12000, 10000, .5, 'members reached a month', 4000, 'p:loyal', 250],
    ['WhatsApp executive', 10000, 8000, .75, 'conversations a month', 1500, 'p:conv', 100],
    ['Customer care', 10000, 10000, .65, 'inbound calls a month', 1200, 'p:in', 100],
    ['Reviews and reputation', 12000, 8000, .7, 'reviews asked for and answered', 300, 'p:reviews', 10],
  ]],
  ['Grow online', [
    ['Ecommerce manager', 25000, 15000, .35, 'online orders a month', 300, 'p:orders', 10],
    ['Website developer', 22000, 10000, .4, 'changes and fixes a month', 20, 'n:6', 1],
    ['Catalogue and listing executive', 12000, 8000, .6, 'products listed or updated a month', 600, 's:200', 50],
    ['Product photographer', 15000, 10000, .5, 'products shot a month', 300, 's:100', 25],
    ['Marketplace executive', 14000, 10000, .5, 'marketplace orders a month', 300, 'n:60', 10],
  ]],
  ['Reduce work', [
    ['Data entry operator', 9000, 7000, .7, 'entries a month', 2500, 's:600', 100],
    ['MIS and reports executive', 15000, 10000, .6, 'reports a month', 60, 's:30', 5],
    ['IT and software coordinator', 18000, 10000, .3, 'systems and vendors looked after', 12, 's:5', 1],
    ['Staff trainer', 18000, 12000, .3, 'staff trained a month', 40, 's:8', 2],
  ]],
  ['Shop floor and supply', [
    ['Purchase and sourcing executive', 18000, 15000, .2, 'purchase orders a month', 60, 's:20', 5],
    ['Vendor coordinator', 14000, 12000, .3, 'vendors and karigars followed up', 40, 's:15', 5],
    ['Inventory planner', 20000, 15000, .5, 'stock reviews a month', 8, 's:4', 1],
    ['Events and offline promotion', 15000, 15000, .15, 'events and campaigns a month', 4, 'n:2', 1],
  ]],
];
// What each role covers: channels and kinds of work, as [label, [items]].
const SCOPE = {
  'Growth strategist': [['Work', ['Yearly and festive plan', 'Monthly review', 'Budget split across channels', 'New store and category plans']]],
  'Marketing manager': [['Work', ['Campaign calendar', 'Briefs to the team', 'Offer and scheme design', 'Results review']]],
  'Data analyst': [['Work', ['Who is likely to buy', 'Who is drifting away', 'What stock is not moving', 'Which spend paid back']]],
  'AI and automation specialist': [['Work', ['Customer journeys', 'AI agents and their limits', 'Templates and approvals', 'Testing what works']]],
  'Performance marketing': [['Channels', ['Google Search ads', 'Google Shopping ads', 'Instagram and Facebook ads', 'YouTube ads', 'Click-to-WhatsApp ads', 'Marketplace ads', 'Retargeting']]],
  'SEO, AEO and GEO': [['Where you are found', ['Website search ranking', 'Google Business Profile', 'Local search for each showroom', 'AI answers (ChatGPT, Gemini and others)', 'Blogs written to rank']]],
  'Social media manager': [['Channels', ['Instagram', 'Facebook', 'YouTube', 'Pinterest', 'LinkedIn', 'X', 'Threads', 'Google Business posts']], ['Work', ['Posts', 'Stories', 'Reels', 'Comment replies', 'DM replies', 'Content calendar']]],
  'Content writer': [['Kinds of content', ['Product descriptions', 'Collection stories', 'Blogs', 'Captions', 'Ad copy', 'WhatsApp and SMS messages', 'Emailers', 'Website pages']]],
  'Graphic designer': [['Kinds of design', ['Social posts', 'Ad creatives', 'Festive and offer creatives', 'Catalogue pages', 'Banners and hoardings', 'Print: brochures and invites', 'Product image retouching']]],
  'Video editor': [['Kinds of video', ['Reels and shorts', 'Product videos', 'Ad films', 'Customer testimonial videos', 'Store and event videos']]],
  'Influencer and collaborations': [['Work', ['Finding the right people', 'Outreach and terms', 'Shoot coordination', 'Tracking what it brought']]],
  'Email and SMS marketer': [['Channels', ['Email', 'SMS', 'RCS', 'Push notifications']], ['Work', ['Festive and offer campaigns', 'Rate alerts', 'Scheme reminders']]],
  'Telecaller and follow-up': [['Calls', ['Enquiry follow-up', 'Scheme due reminders', 'Appointment calls', 'Feedback calls', 'Win-back calls']]],
  'CRM executive': [['Work', ['Customer data clean-up', 'Segments', 'Lead assignment', 'Follow-up tracking', 'Occasion reminders']]],
  'Sales coordinator': [['Work', ['Quotations', 'Order tracking', 'Video call selling', 'Custom order follow-up']]],
  'Showroom journey coordinator': [['Work', ['Appointment booking', 'Walk-in capture', 'Visit follow-up', 'Try-at-home and approvals', 'After-sale thank you']]],
  'Loyalty and scheme coordinator': [['Programmes', ['Savings schemes', 'Loyalty points', 'Referral programme', 'Birthday and anniversary outreach', 'Reactivation']]],
  'WhatsApp executive': [['Work', ['Enquiry replies', 'Catalogue sharing', 'Broadcasts', 'Order and rate updates', 'Template upkeep']]],
  'Customer care': [['Work', ['Inbound calls', 'Complaints and service', 'Repairs follow-up', 'After-sale care']]],
  'Reviews and reputation': [['Work', ['Asking for Google reviews', 'Answering reviews', 'Handling a bad review', 'Ratings on marketplaces']]],
  'Ecommerce manager': [['Where you sell', ['Website store', 'Google Shopping', 'Marketplaces', 'Instagram and WhatsApp shop']], ['Work', ['Pricing at the live rate', 'Offers and coupons', 'Cart recovery', 'Order follow-up']]],
  'Website developer': [['Work', ['New pages and collections', 'Speed and fixes', 'Tracking and pixels', 'Payment and delivery set-up']]],
  'Catalogue and listing executive': [['Work', ['Product listing', 'Descriptions and tags', 'Price and stock updates', 'Shareable catalogues', 'Collection pages']]],
  'Product photographer': [['Kinds of image', ['Product on white', 'Model shots', 'Lifestyle shots', 'Product video and 360', 'Retouching']]],
  'Marketplace executive': [['Marketplaces', ['Amazon', 'Flipkart', 'Myntra', 'Other marketplaces']], ['Work', ['Listings', 'Order processing', 'Returns']]],
  'Data entry operator': [['Work', ['Stock entry', 'Purchase entry', 'Customer entry', 'Billing support', 'Tagging and barcodes']]],
  'MIS and reports executive': [['Reports', ['Daily sales', 'Stock and ageing', 'Staff performance', 'Marketing results', 'Owner’s summary']]],
  'IT and software coordinator': [['Work', ['Software vendors', 'Integrations', 'Devices and logins', 'Backups and security']]],
  'Staff trainer': [['Work', ['Product knowledge', 'Selling skills', 'Using the software', 'New joiner induction']]],
  'Purchase and sourcing executive': [['Work', ['Requirement planning', 'Supplier search', 'Rate comparison', 'Purchase orders', 'Quality checks']]],
  'Vendor coordinator': [['Work', ['Karigar job work', 'Supplier follow-up', 'Payments', 'Delivery tracking', 'Returns and repairs']]],
  'Inventory planner': [['Work', ['Stock ageing', 'What to reorder', 'Transfers between showrooms', 'What to melt or discount']]],
  'Events and offline promotion': [['Work', ['Exhibitions', 'In-store events', 'Festive campaigns', 'Hoardings and print', 'Local tie-ups']]],
};
const PREDICT = [['conv', 'Customer conversations'], ['comments', 'Comments and DMs'], ['reviews', 'Reviews'], ['in', 'Inbound calls'], ['out', 'Follow-up calls due']];
const countTeam = (inner) => L.section(`
${eyebrow('Count your team')}
<h2 class="pz-h pz-center">${inner ? 'Set your customer base, then tap a role.' : 'What does keeping up take, and cost, today?'}</h2>
<p class="pz-lead pz-center">Set your customer base. Tap a role, then say who does it today: an employee, a freelancer or agency, or nobody. Each role shows how much work it is and how many people that takes.</p>
<div class="pz-team2" data-pz-team>
  <div class="pz-team2-pick">
    <p class="pz-team2-legend"><span class="is-e">Employee</span><span class="is-a">Freelancer or agency</span><span class="is-g">Nobody does it</span></p>
    ${TEAM_ROLES.map(([g, roles]) => `<div class="pz-team2-group"><p>${g}</p><div class="pz-team2-roles">${roles.map(([r, e, a, ai, unit, cap, def, step, extra]) => `<button type="button" data-role="${r}" data-s="0" data-e="${e}" data-a="${a}" data-ai="${ai}" data-cap="${cap}" data-def="${def}" data-step="${step}" data-tool="${(ROLE_TOOLS[r] || ['', 0])[1]}" data-tool-n="${(ROLE_TOOLS[r] || [''])[0]}"${extra ? ` data-extra="${extra}"` : ''} aria-label="${r}: not counted"><b>${r}</b><i></i></button>`).join('')}</div>
      ${roles.map(([r, , , , unit, , def]) => `<div class="pz-team2-scope" data-scope="${r}" hidden>
        <p><b>${r}</b><span data-scope-takes></span></p>
        <p class="pz-team2-who" role="group" aria-label="Who does this today"><em>Who does it today?</em><button type="button" data-who="1" aria-pressed="true">An employee</button><button type="button" data-who="2" aria-pressed="false">Freelancer or agency</button><button type="button" data-who="3" aria-pressed="false">Nobody. It is a gap</button></p>
        <p class="pz-team2-count">${def === 'c' ? '' : `<span class="pz-team2-step"><button type="button" data-c="-1" aria-label="Less">−</button><output data-scope-count>0</output><button type="button" data-c="1" aria-label="More">+</button></span>`}<span data-scope-unit>${def === 'c' ? '' : unit}</span></p>
        ${SCOPE[r].map(([label, items]) => `<div><em>${label}</em>${items.map((x) => `<button type="button" class="pz-team2-item" aria-pressed="true">${x}</button>`).join('')}</div>`).join('')}
      </div>`).join('')}
    </div>`).join('')}
  </div>
  <div class="pz-team2-panel" aria-live="polite">
    <div class="pz-team2-scale">
      <label>Showrooms<span class="pz-team2-step"><button type="button" data-d="-1" aria-label="Fewer showrooms">−</button><output data-pz-team-stores>1</output><button type="button" data-d="1" aria-label="More showrooms">+</button></span></label>
      <label>Customers on record: <output data-pz-team-base>5,000</output><input type="range" min="0" max="100" value="38" step="1" data-pz-team-vol aria-label="Customers on record"></label>
    </div>
    <div class="pz-team2-predict">
      <p>What that customer base brings each month, predicted</p>
      <ul>${PREDICT.map(([k, t]) => `<li><b data-predict="${k}">0</b><span>${t}</span></li>`).join('')}</ul>
    </div>
    <div class="pz-team2-mode" role="group" aria-label="How involved you want to be">
      <button type="button" aria-pressed="true" data-m="0"><b>Jwero runs it</b><span>Jwero plans and executes. You see results.</span></button>
      <button type="button" aria-pressed="false" data-m="1"><b>Work alongside me</b><span>You stay close to the work. More coordination, more time.</span></button>
    </div>
    <p class="pz-team2-big">This work takes <span data-pz-team-n>0</span> <i data-pz-team-pw>people</i> and <span data-pz-team-t>0</span> <i data-pz-team-tw>tools</i> <em>→ one partner, every tool included</em></p>
    <dl>
      <div><dt>What it costs today</dt><dd data-pz-team-now>₹0</dd></div>
      <div class="is-sub"><dt>People and agencies</dt><dd data-pz-team-ppl>₹0</dd></div>
      <div class="is-sub"><dt>Software they need</dt><dd data-pz-team-tools>₹0</dd></div>
      <div><dt>The same work with Jwero</dt><dd data-pz-team-jw>₹0</dd></div>
      <div class="is-sub"><dt>Specialists’ time</dt><dd data-pz-team-human>₹0</dd></div>
      <div class="is-sub"><dt>AI usage, as used</dt><dd data-pz-team-ai>₹0</dd></div>
      <div class="is-sub"><dt>Every Jwero tool, and the platform</dt><dd>Included, ₹0</dd></div>
      <div class="is-save"><dt>Difference each month</dt><dd data-pz-team-save>₹0</dd></div>
      <div><dt>Your hours on it, each week</dt><dd data-pz-team-hrs>0</dd></div>
      <div><dt>Gaps Jwero would fill</dt><dd data-pz-team-gaps>None yet</dd></div>
    </dl>
    <div class="pz-team2-bars" aria-hidden="true"><p><span>Today</span><i><u data-pz-team-b1></u></i></p><p><span>With Jwero</span><i><u class="is-soft" data-pz-team-b3></u><u class="is-gold" data-pz-team-b2></u></i></p></div>
    <a class="btn pz-btn-gold" href="#" data-wa="plan" data-pz-team-cta>Let Jwero handle it</a>
    <a class="pz-team2-share" href="#" target="_blank" rel="noopener" data-pz-team-share>Send this to my partner or manager →</a>
    <p class="pz-team2-note">Indicative. Volumes are predicted from your customer base and showrooms; change any count to your own. Today’s figures are drafted estimates of what the people and software cost, not a survey. When Jwero manages the work there is no platform subscription and no tool to buy. The Jwero figure is indicative: your price is worked out for your business, on the work, and stated in writing in your plan. Filling a gap adds cost, so it is shown apart.</p>
  </div>
</div>`, { tone: 'tint', id: 'count-your-team' });

// The short version for the home page: set the customer base, see what it
// brings each month and how many people only answering it takes, then go to
// the full calculator with those two numbers carried over.
const countTeaser = () => L.section(`
<div class="pz-teaser" data-pz-teaser>
  <div class="pz-teaser-copy">
    ${eyebrow('Count your team')}
    <h2 class="pz-h">What does keeping up take today?</h2>
    <p class="pz-lead">Set your customer base. This is what it brings in every month, and what it takes to keep up with it.</p>
    <div class="pz-teaser-in">
      <label>Showrooms<span class="pz-team2-step"><button type="button" data-d="-1" aria-label="Fewer showrooms">−</button><output data-pz-teaser-stores>1</output><button type="button" data-d="1" aria-label="More showrooms">+</button></span></label>
      <label>Customers on record: <output data-pz-teaser-base>5,000</output><input type="range" min="0" max="100" value="38" step="1" data-pz-teaser-vol aria-label="Customers on record"></label>
    </div>
  </div>
  <div class="pz-teaser-out" aria-live="polite">
    <p class="pz-teaser-k">Every month, predicted</p>
    <ul>${PREDICT.map(([k, t]) => `<li><b data-predict="${k}">0</b><span>${t}</span></li>`).join('')}</ul>
    <p class="pz-teaser-big">Only answering them takes about <span data-pz-teaser-n>0</span> people.</p>
    <p class="pz-teaser-sub">Before marketing, content, ecommerce or reports, and before the software they each need. With Jwero it is one partner, with every tool included.</p>
    <a class="btn pz-btn-gold" href="/count-your-team" data-pz-teaser-go>See what it costs you</a>
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
    <a class="btn btn-primary" href="#" data-wa="assessment" data-pz-plan-cta>Let Jwero handle it</a>
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
  ['How we start', 'Assessment, plan, the first ninety days.', '/jewellery-business-as-a-service#next'],
  ['Jwero Business Team', 'A named specialist, and one account of the work.', '/ai-and-experts'],
  ['Works with your existing business', 'Tally, WhatsApp, Shopify and more.', '/platform/integrations'],
  ['Trust Centre', 'Every standard, with its honest status.', '/trust'],
];
const proof = (cta = true, n = STORIES.length, logos = true) => L.section(`
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
${logos ? L.customerLogos() : ''}
<div class="pz-trust">${TRUST_LINKS.map(([t, d, href]) => `<a href="${href}"><b>${t}</b><span>${d}</span></a>`).join('')}</div>
${cta ? `<p class="pz-cta-center"><a class="btn btn-primary" href="/what-we-handle">See what Jwero runs</a><a class="btn btn-ghost" href="/customers">The jewellers on Jwero</a></p>` : ''}`, { id: 'proof' });

// ---------------------------------------------------------------- what customers say
// Taken word for word from the testimonials published on jwero.ai (read
// 2026-10-05). Do not edit the wording. "Tanika" is the company behind Jwero,
// which is why two of them use that name.
const QUOTES = [
  ['A capable, motivated and eager team has definitely delivered on their promise of speedy deployment. The team’s availability & response is commendable. This platform has immense potential to our trade.', 'Manjunatha', 'Gujjadi Swarna Jewellers'],
  ['I must say the dedication of the team is impeccable. They have a very good understanding of the jewellery trade in our country and also know how to bridge the gap between orthodox and modern business pratices.', 'Sanjay', 'J Mittlal ThangaMaligai'],
  ['I recently had the pleasure of interacting with Jwero Care online support team, and I must say, it was an exceptional experience! Their live chat service was prompt, efficient, and incredibly helpful. Keep it up', 'Aradhana Jewellery', 'Kerala'],
  ['Jwero ai has made building and maintaining my website an enjoyable experience. The platform is user-friendly, flexible, and has everything I need to run a successful online business', 'Konika Jewellery', 'Tamil Nadu'],
  ['Karan, I want to express my gratitude for your incredible support & collaboration. Your dedication, professionalism, & insights have significantly impacted our projects. Thankyou for being a reliable partner & a supportive colleague, I look forward to achieving even more together.', 'Suraj', 'Mangatrai Neeraj'],
  ['Promises kept on time : whether design, development, maintenance, they are always upto the mark. Complete support available round the clock to hear & help you. Our decision to tie up was a right click at the right time. Thanks team Tanika! keep it up.', 'Anish', 'Akshaya Gold'],
  ['The entire Tanika team is fantastic & professional. They will make your ideas into reality with in-depth knowledge of the jewellery industry. Their operations are streamlined for our growth are always supportive with consistent technology upgradation for better user experience.', 'Saket', 'Ratnalaya Jewellers'],
  ['Tanika Tech encompasses all the functionalities needed for a jewellery business. The best part is its blend of online & offline format to suit different needs, their swift response to any problems is really praise-worthy.', 'Goutham', 'Mohan Jewellery'],
];
const quoteCards = (n) => `<div class="pz-quotes">${QUOTES.slice(0, n).map(([q, who, where]) => `<figure class="pz-quote"><blockquote>“${q}”</blockquote><figcaption><b>${who}</b><span>${where}</span></figcaption></figure>`).join('')}</div>`;
const quotes = (n = QUOTES.length) => L.section(`
${eyebrow('In their words')}
<h2 class="pz-h pz-h-plain pz-center">Jewellers on working with Jwero.</h2>
${quoteCards(n)}
${n < QUOTES.length ? `<p class="pz-cta-center"><a class="pz-link" href="/success-stories">Read what more jewellers say →</a></p>` : `<p class="pz-stories-note">In their own words, as published on jwero.ai. Two mention Tanika, the company behind Jwero.</p>`}`, { id: 'in-their-words' });

// One customer's words and the three ways to work: the end of every managed
// page, so none of them is a dead end.
const quoteOne = (i) => { const [q, who, where] = QUOTES[i % QUOTES.length]; return `<figure class="pz-quote jb-solo"><blockquote>“${q}”</blockquote><figcaption><b>${who}</b><span>${where}</span></figcaption></figure>`; };
const endStrip = (i) => L.section(quoteOne(i)) + L.section(`<p class="pz-eyebrow">Three ways to work with Jwero</p><h2 class="pz-h pz-center">Run it yourself, or let Jwero run it.</h2>${require('./jbaas').TIERS()}`, { tone: 'tint' });

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

// ---------------------------------------------------------------- what happens next, and pass it on
// Removes the two quiet blockers before a first message: "what am I signing up
// for?" and "who else should see this?". No times are promised beyond the
// reply, which the site already states.
const NEXT = [
  ['You message us', 'Say what you want to achieve, in your own words.'],
  ['A short call', 'We ask about your business, your team and what you would rather not manage. No preparation needed.'],
  ['Your plan, in writing', 'What Jwero would take on, who does it, what is measured, and what it costs. Nothing starts before you agree.'],
  ['Onboarded in a day', 'We set you up and bring your data in, in a day. Start with one function and give us more when you are ready.'],
];
const nextSteps = () => L.section(`
${eyebrow('What happens next')}
<h2 class="pz-h pz-center">From a first message to work getting done.</h2>
<ol class="pz-how pz-how-4">${NEXT.map(([t, d], i) => `<li><span>${String(i + 1).padStart(2, '0')}</span><b>${t}</b><p>${d}</p></li>`).join('')}</ol>
<ul class="pz-ease"><li>Onboarding in a day</li><li>Your data stays yours</li><li>Take a function back whenever you like</li></ul>
<p class="pz-cta-center">Rather speak first? <a href="#" data-wa="call" data-connect="voice">Call us instead</a>.</p>`, { id: 'next' });

const refer = () => `
<section class="pass pz-refer" id="pass"><div class="container"><div class="pass-box">
  <div><p class="eyebrow">PASS IT ON</p><h2>Refer a jeweller. Save 10% for each one who joins.</h2><p>Know a jeweller who is trying to keep up with all of this? Send them this page on WhatsApp, and tell us you sent them. Every jeweller who becomes a Jwero customer through you takes 10% off what you pay.</p></div>
  <span class="pz-refer-cta"><a class="btn btn-primary" href="#" data-share="Thought of you. Jwero takes the marketing, technology and follow-up chaos off a jeweller, so we can focus on jewellery:">Send this to a jeweller</a>${HANDLE('Tell us who you referred', 'referral', 'pz-link')}</span>
</div></div></section>`;

// ---------------------------------------------------------------- act 8: the ask
const ask = () => L.section(`
<div class="pz-askband">
  <h2 class="pz-h">Tell us what you want to achieve.</h2>
  <p class="pz-lead">We’ll figure out what needs to happen.</p>
  <div class="pz-cta">${HANDLE('Let Jwero handle it', 'start')}<a class="btn btn-ghost" href="#assessment">Take the 2-minute assessment</a></div>
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
    <div class="pz-cta">${HANDLE('Let Jwero handle it', 'start', 'btn pz-btn-gold')}<a class="btn pz-btn-line" href="/how-it-works">See how Jwero works</a></div>
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
  slug: 'jewellery-business-as-a-service',
  title: 'Jewellery Business as a Service: You Focus on Jewellery, We Handle the Chaos | Jwero',
  breadcrumbs: [['Home', '/'], ['Jewellery Business as a Service']],
  description: 'Markets, customers and technology keep changing. Jwero brings together AI, technology and jewellery specialists to adapt, execute and grow your business, so you can focus on jewellery. You run it, we run it together, or we run it for you.',
  schema: {
    '@context': 'https://schema.org', '@type': 'Organization', name: 'Jwero', url: 'https://jwero.ai',
    description: 'Jwero is the operating partner for the modern jewellery business. Its model, Jewellery Business as a Service, combines AI, technology and specialist execution to help run and grow a jewellery business. Jewellers can run it themselves, run it together with Jwero, or have Jwero run it.',
  },
  body: `
<div class="jbs">
${heroHome()}
<section class="pz-logos">${L.customerLogos()}</section>
${insight()}
${dontKnow()}
${howMuch()}
${countTeam()}
${L.section(`<span id="pricing"></span><p class="pz-eyebrow">Pricing</p><h2 class="pz-h pz-center">No subscription. Every tool included.</h2><p class="pz-lead pz-center">Managed work is priced on the work, for your business, and stated in writing in your plan. Or run the platform yourself.</p>${require('./jbaas').TIERS()}`, { tone: 'tint' })}
${aiWorks()}
${quotes(3)}
${nextSteps()}
${finale()}
</div>
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
${endStrip(1)}
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
${innerHero('How it works', 'AI does the work. Experts make it better.', 'You tell us what you want to achieve. Software, AI, expertise and execution do the rest, and keep improving.', ['#assessment', 'Take the 2-minute assessment'])}
${L.section(`${eyebrow('Five steps')}<h2 class="pz-h pz-center">From a goal to a result.</h2><ol class="pz-how">${STEPS.map(([t, d], i) => `<li><span>${String(i + 1).padStart(2, '0')}</span><b>${t}</b><p>${d}</p></li>`).join('')}</ol>`)}
${notAgency()}
${dayAndCommand()}
${whoRuns(1)}
${dontKnow()}
${assessment()}
${endStrip(0)}
${close()}
`,
};

const aiExperts = {
  slug: 'ai-and-experts',
  title: 'AI + Experts: AI Does the Work, Experts Make It Better | Jwero',
  description: 'How Jwero combines AI agents that understand, decide, execute, measure and improve with jewellery-business specialists in marketing, ecommerce, CRM, content, data and technology.',
  breadcrumbs: [['Home', '/'], ['AI + experts']],
  body: `
${innerHero('AI + experts', 'AI does the work. Experts make it better.', 'AI handles scale. Specialists handle judgement and complexity. Together they keep your business adapting, without you having to learn any of it.', ['/what-we-handle', 'See what Jwero runs'], HANDLE('Let Jwero handle it', 'with-you', 'btn pz-btn-gold'))}
${aiWorks()}
${experts()}
${notAgency()}
${L.section(`${eyebrow('In your control')}<h2 class="pz-h pz-center">AI that works inside your limits.</h2><p class="pz-lead pz-center">AI does the work on its own, inside limits you set: daily caps, quiet hours, approval where you want it, and one switch that stops it. <a href="/platform/ai-workforce">How the AI is governed</a> · <a href="/trust">Trust Centre</a></p>`, { tone: 'tint' })}
${adapt()}
${whoRuns(1)}
${endStrip(3)}
${close()}
`,
};

const handle = {
  slug: 'what-we-handle',
  title: 'What Jwero Handles: Customers, Sales, Online Growth, Operations | Jwero',
  description: 'What Jwero can power, manage for you, or help with: getting customers, selling more, keeping customers, growing online, reducing work, understanding the business and keeping up with technology.',
  breadcrumbs: [['Home', '/'], ['What we handle']],
  body: `
${innerHero('What we handle', 'Start with one function. Give us more when you’re ready.', 'Eight outcomes around the jewellery itself. For each: what Jwero can power, what Jwero can manage for you, and where specialists can help.', ['#assessment', 'Take the 2-minute assessment'])}
${handles()}
${monthly()}
${plate()}
${L.section(`${eyebrow('Underneath')}<h2 class="pz-h pz-center">The capabilities are all still here.</h2><p class="pz-lead pz-center">Every capability sits under this promise. If you like to look under the bonnet: <a href="/products">capabilities</a> · <a href="/solutions">by business type</a> · <a href="/platform">the platform</a> · <a href="/platform/integrations">works with your existing business</a> · <a href="/pricing">ways to work with Jwero</a>.</p>`, { tone: 'tint' })}
${assessment()}
${endStrip(2)}
${close()}
`,
};

const self = {
  slug: 'self-managed',
  title: 'Self Managed: Your Team Runs It, Jwero Powers It | Jwero',
  description: 'For jewellers who want control: Jwero gives your team the technology, AI agents and data to run the business yourselves. A technology subscription at ₹18,000 a month, first month ₹3,600.',
  breadcrumbs: [['Home', '/'], ['Self managed']],
  body: `
${innerHero('01 · You run it', 'Software when you want control.', 'You operate the business. Jwero provides the technology, the AI and the work that happens automatically. Onboarding takes a day.', ['/', 'See the operating system'], `<a class="btn pz-btn-gold" href="${L.TRIAL_URL}self-managed" rel="noopener" data-trial>Start for ₹3,600</a>`)}
${whoRuns(0)}
${L.section(`${eyebrow('What your team gets')}<h2 class="pz-h pz-center">One system, so your team is not learning ten.</h2>
<div class="pz-levels pz-levels-4">
  <article class="pz-level"><h3>The operating system</h3><p class="pz-level-who">Customers, counter, stock, purchase, workshop, books and team on one record.</p><a class="pz-link" href="/">See it →</a></article>
  <article class="pz-level"><h3>AI agents</h3><p class="pz-level-who">Enquiries answered, follow-ups and reminders sent, on their own.</p><a class="pz-link" href="/products/ai-sales-agents">See them →</a></article>
  <article class="pz-level"><h3>Every capability</h3><p class="pz-level-who">CRM, WhatsApp, ecommerce, billing, inventory, manufacturing and more.</p><a class="pz-link" href="/products">All capabilities →</a></article>
  <article class="pz-level"><h3>For your kind of business</h3><p class="pz-level-who">Retail, chains, manufacturers, wholesale, diamond traders, online brands.</p><a class="pz-link" href="/solutions">Find yours →</a></article>
</div>`)}
${L.section(`<div class="home-price"><div><p class="eyebrow">THE TECHNOLOGY SUBSCRIPTION</p><h2>Every capability, on one plan. Free trial first.</h2><p>One subscription, billed monthly. No price per capability and no price per seat. Your price is shown in your account when the trial ends. Messages, AI and calls run on a prepaid balance.</p></div><div class="cta-row"><a class="btn btn-primary" href="${L.TRIAL_URL}self-managed" rel="noopener" data-trial>Start for ₹3,600</a><a class="btn btn-ghost" href="/pricing">Ways to work with Jwero</a></div></div>`, { tone: 'tint' })}
${L.section(`${eyebrow('And when you want help')}<h2 class="pz-h pz-center">Experts when you want execution.</h2><p class="pz-lead pz-center">Start by running it yourself. Bring in Jwero specialists for one function, or all of them, when you would rather not manage it. <a href="/jewellery-business-as-a-service">See managed services</a>.</p>${levels()}`)}
${L.section(quoteOne(3))}
${L.section(`<div class="gem-head"><h2>Proof you can check.</h2><p>Who uses it, what the product counts, what is published, and how to try it yourself.</p></div>${L.proofGrid()}`)}
${close()}
`,
};

const managed = {
  slug: 'managed-services',
  title: 'Managed Services: We Run It Together, or Jwero Runs It | Jwero',
  description: 'For jewellers who want expertise or freedom: Jwero specialists and AI work beside your team, or run whole functions for you, from marketing and ecommerce to CRM, content and analytics. Start with one function.',
  breadcrumbs: [['Home', '/'], ['Managed services']],
  body: `
${innerHero('02 and 03 · Managed', 'We run it together. Or Jwero runs it.', 'Your team with our specialists and AI, or whole functions handed over. You define the outcome. Jwero takes responsibility for the function.', ['#assessment', 'Take the 2-minute assessment'], HANDLE('Let Jwero handle it', 'with-you', 'btn pz-btn-gold'))}
${whoRuns(2)}
${L.section(`<span id="pricing"></span><p class="pz-eyebrow" style="text-align:center">Pricing</p><h2 class="pz-h pz-center">Subscription, managed, or enterprise.</h2>${require('./jbaas').TIERS()}`)}
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
${quotes(3)}
${assessment()}
${nextSteps()}
${close()}
`,
};

const count = {
  slug: 'count-your-team',
  title: 'Count Your Team: What a Jewellery Business Spends to Keep Up | Jwero',
  description: 'A calculator for jewellers: set your customer base, mark the marketing, sales, ecommerce and operations roles you pay for, and see the people it takes, what it costs today, and the same work with Jwero.',
  breadcrumbs: [['Home', '/'], ['Jewellery Business as a Service', '/jewellery-business-as-a-service'], ['Count your team']],
  body: `
${innerHero('Count your team', 'What does keeping up take, and cost, today?', 'The people, freelancers and agencies it takes to keep a jewellery business current, counted from your own customer base. Then the same work with one partner.', ['/jewellery-business-as-a-service', 'See managed services'], HANDLE('Let Jwero handle it', 'plan', 'btn pz-btn-gold'))}
${countTeam(true)}
${L.section(`${eyebrow('How it is worked out')}<h2 class="pz-h pz-center">Three things, in the open.</h2>
<ol class="pz-how">
  <li><span>01</span><b>Your volume</b><p>Conversations, comments, reviews and calls are predicted from your customers on record and showrooms. Change any count to your own.</p></li>
  <li><span>02</span><b>The people it takes</b><p>Each role shows how many people the work takes today, and what they cost. Drafted estimates, not a survey.</p></li>
  <li><span>03</span><b>Your quote in writing</b><p>Your price is worked out for your business, on the work, and stated in writing in your plan. Running it yourself? <a href="/#count-yours">See the tools Jwero replaces</a>.</p></li>
</ol>`)}
${L.section(`${eyebrow('Ways to work with Jwero')}<h2 class="pz-h pz-center">Start with one function.</h2>${levels()}`, { tone: 'tint' })}
${nextSteps()}
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
${quotes()}
${L.section(`<div class="gem-head"><h2>Proof you can check.</h2><p>Who uses it, what the product counts, what is published, and how to try it yourself.</p></div>${L.proofGrid()}`)}
${proof(false)}
${dontKnow()}
${nextSteps()}
${close()}
`,
};

module.exports = [home, why, how, aiExperts, handle, self, count, success];
module.exports.levels = levels;
module.exports.quotes = quotes;
module.exports.quoteCards = quoteCards;
module.exports.quotesOf = (ix) => L.section(`${eyebrow('In their words')}<h2 class="pz-h pz-h-plain pz-center">Jewellers on working with Jwero.</h2><div class="pz-quotes">${ix.map((i) => { const [q, who, where] = QUOTES[i % QUOTES.length]; return `<figure class="pz-quote"><blockquote>“${q}”</blockquote><figcaption><b>${who}</b><span>${where}</span></figcaption></figure>`; }).join('')}</div><p class="pz-cta-center"><a class="pz-link" href="/success-stories">Read what more jewellers say →</a></p>`);
module.exports.quoteOne = quoteOne;
module.exports.refer = refer;
module.exports.QUOTES = QUOTES;
// Quotes that name Jwero, not Tanika: the ones used outside Success stories and Customers.
module.exports.ROTATE = [0, 1, 2, 3, 4];
