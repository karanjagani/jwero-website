// The new positioning: "You focus on jewellery. We handle the chaos."
// Jwero as the partner that takes the complexity and the constant learning off
// a jeweller, in three ways: you run it, we run it with you, we run it for you.
// The product, solution, pricing and trust pages built earlier are unchanged
// and sit underneath this as the capabilities. The previous home page lives at
// /jwero-os. Styles are the `pz-` rules in site.css; behaviour is the
// "positioning" block in site.js.
//
// Not invented here: customer numbers, team sizes, or results. The stories in
// the success section are patterns, labelled as such, until real ones are
// supplied.
const L = require('../lib');

const HANDLE = (label = 'Let Jwero handle it', ctx = 'handle', cls = 'btn btn-primary') => `<a class="${cls}" href="#" data-wa="${ctx}">${label}</a>`;
const eyebrow = (t) => `<p class="pz-eyebrow">${t}</p>`;
const gem = '<i class="pz-gem" aria-hidden="true"></i>';

// ---------------------------------------------------------------- hero
const CHAOS = ['Markets', 'Customers', 'Technology', 'AI', 'Marketing', 'Social media', 'Ads', 'CRM', 'Ecommerce', 'Data', 'Automation', 'Competition'];
const FOCUS = ['Jewellery', 'Design', 'Sourcing', 'Craftsmanship', 'Customers', 'Business'];
const hero = () => `
<section class="hero pz-hero">
  <div class="pz-hero-in">
    <div class="pz-hero-copy">
      ${eyebrow('For jewellers who would rather be jewellers')}
      <h1>You focus on jewellery.<br><em>We handle the chaos.</em></h1>
      <p class="pz-hero-sub">The jewellery business is changing faster than ever. Customers, markets and technology keep evolving. Jwero brings the technology, AI and experts you need to keep up, so you can focus on jewellery.</p>
      <div class="pz-cta">
        ${HANDLE('Let Jwero handle it', 'handle', 'btn pz-btn-gold')}
        <a class="btn pz-btn-line" href="#who-runs-it">See how it works</a>
      </div>
      <p class="pz-hero-note">Do it yourself. Do it with us. Or let us handle it completely.</p>
    </div>
    <div class="pz-split" aria-label="The chaos on one side, your focus on the other, Jwero between them">
      <div class="pz-chaos">
        <p class="pz-split-k">The chaos</p>
        <div class="pz-chaos-cloud">${CHAOS.map((w, i) => `<span style="--i:${i}">${w}</span>`).join('')}</div>
      </div>
      <div class="pz-between"><i><u></u><u></u><u></u></i><span>${L.mark('pz-mark')}<b>Jwero</b></span><i><u></u><u></u><u></u></i></div>
      <div class="pz-focus">
        <p class="pz-split-k">Your focus</p>
        <ul>${FOCUS.map((w) => `<li>${gem}${w}</li>`).join('')}</ul>
      </div>
    </div>
  </div>
</section>`;

// ---------------------------------------------------------------- who runs it
// The one choice a visitor must leave understanding: run the software
// yourself, let the AI run it, or let Jwero's team run it. Eight functions
// slide between three lanes; "jewellery" never leaves yours.
const RUN_FUNCS = ['Customer acquisition', 'Customer engagement', 'Sales', 'Digital commerce', 'Customer retention', 'Operations', 'Intelligence', 'Technology'];
const RUN_MODES = [
  { key: 'you', tab: 'I’ll run it', title: 'You run it, on one system.', line: 'Your team does the work, on Jwero’s software. One system in place of many tools, so there is far less to learn and nothing to stitch together.', lanes: [0, 0, 0, 0, 0, 0, 1, 1],
    you: 'Run every function with your own team', ai: 'Keeps the record, the numbers and the technology in order', jw: 'Sets you up, trains your team, stays on call', meters: [85, 60, 1], cost: '₹18,000 a month. First month ₹3,600.', cta: ['Explore Jwero', '/self-managed'] },
  { key: 'ai', tab: 'Let AI run it', title: 'AI runs the routine. You say yes.', line: 'AI agents answer, follow up, remind, reprice and report around the clock. Nothing reaches a customer without your approval unless you allow it.', lanes: [0, 1, 0, 1, 1, 1, 1, 1],
    you: 'Approve, sell, and decide', ai: 'Does the replies, follow-ups, reminders, updates and reports', jw: 'Tunes the agents and steps in when you ask', meters: [40, 30, 1], cost: 'The same plan. AI and messages are charged only as used.', cta: ['See the AI team', '/ai-and-experts'] },
  { key: 'jwero', tab: 'Let Jwero’s team run it', title: 'Jwero’s people and AI run it for you.', line: 'Specialists and AI agents run the functions you hand over. No hiring, no agencies, no new tools to learn. You set the goal and see one account of what was done.', lanes: [2, 2, 2, 2, 2, 2, 2, 2],
    you: 'Set the goals. Stay with the jewellery and your customers', ai: 'Works at scale under the specialists', jw: 'Plans, executes and reports on every function you hand over', meters: [10, 5, 1], cost: 'Scoped and quoted for your business. No new hires.', cta: ['Let Jwero handle it', '#handle'] },
];
const whoRuns = (start = 0) => L.section(`
${eyebrow('The only choice you have to make')}
<h2 class="pz-h pz-center">Who should run it?</h2>
<p class="pz-lead pz-center">Tap one. Watch where the work goes. You can also hand over one function at a time.</p>
<div class="pz-run" data-pz-run data-run-start="${start}">
  <script type="application/json">${JSON.stringify(RUN_MODES).replace(/</g, '\\u003c')}</script>
  <div class="pz-run-tabs" role="tablist" aria-label="Who runs it">${RUN_MODES.map((m, i) => `<button type="button" role="tab" aria-selected="${i === start}" data-i="${i}"><span>${String(i + 1).padStart(2, '0')}</span>${m.tab}</button>`).join('')}</div>
  <div class="pz-run-body">
    <div class="pz-run-board" aria-hidden="true">
      <div class="pz-run-head"><span></span><b data-lane="0">You and your team</b><b data-lane="1">AI agents</b><b data-lane="2">Jwero’s specialists</b></div>
      <div class="pz-run-row pz-run-keep"><span>Jewellery, design, sourcing, your customers</span><div class="pz-run-track"><i style="--lane:0">${gem}Always yours</i></div></div>
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
</div>`, { id: 'who-runs-it' });

// ---------------------------------------------------------------- 2. the world has changed
const EXPECTED = ['Digital marketing', 'Google', 'Instagram', 'WhatsApp', 'Meta Ads', 'Ecommerce', 'SEO', 'AI', 'CRM', 'Customer data', 'Automation', 'Content', 'Analytics', 'Cybersecurity', 'Technology', 'New marketplaces', 'New customer behaviour'];
const worldChanged = () => L.section(`
<div class="pz-two">
  <div>
    ${eyebrow('The world has changed')}
    <h2 class="pz-h">It used to be enough to be good at jewellery.</h2>
    <p class="pz-lead">Today, being great at jewellery is only part of the challenge. A modern jeweller is expected to understand all of this. And tomorrow, there will be something else.</p>
  </div>
  <div class="pz-pile" data-pz-pile>${EXPECTED.map((w, i) => `<span style="--i:${i}">${w}</span>`).join('')}<span class="pz-pile-next" style="--i:${EXPECTED.length}">and next year, something new</span></div>
</div>
<div class="pz-qa">
  <p class="pz-q">How much time should a jeweller spend learning all of this?</p>
  <p class="pz-a">You shouldn’t have to.</p>
</div>`);

// ---------------------------------------------------------------- 3. the learning loop
const LOOP = [
  ['Learn', 'New technology appears.'], ['Implement', 'You invest time and money.'], ['Train', 'Your team learns it.'], ['Change', 'The market changes again.'],
  ['Unlearn', 'Yesterday’s approach becomes outdated.'], ['Start again', 'Another platform. Another agency. Another process. Another training.'], ['Chaos', 'The business gets more complicated.'],
];
const learningLoop = () => L.section(`
${eyebrow('The continuous learning problem')}
<h2 class="pz-h pz-center">The world keeps changing.<br>Your focus shouldn’t.</h2>
<ol class="pz-loop" data-pz-loop>${LOOP.map(([t, d], i) => `<li style="--i:${i}"${i === LOOP.length - 1 ? ' class="is-end"' : ''}><b>${t}</b><span>${d}</span></li>`).join('')}</ol>
<p class="pz-loop-note">And then it begins again.</p>`, { tone: 'tint' });

// ---------------------------------------------------------------- 4. that's where Jwero comes in
const enter = () => `
<section class="pz-band">
  <div class="pz-band-in">
    ${eyebrow('That’s where Jwero comes in')}
    <h2 class="pz-h">That’s where Jwero comes in.</h2>
    <p class="pz-lead">Jwero continuously watches what is changing around your business and brings together the people, technology and intelligence required to respond.</p>
    <ul class="pz-nots">
      <li>You don’t need to know what tool to buy.</li>
      <li>You don’t need to know which technology to adopt.</li>
      <li>You don’t need to build every capability internally.</li>
    </ul>
    <p class="pz-turn">You tell us where you want your business to go.<br>We figure out what needs to happen.<br><b>And we help make it happen.</b></p>
  </div>
</section>`;

// ---------------------------------------------------------------- 5. the model
const LEVELS = [
  ['01', 'You run it', 'For jewellers who want complete control.', ['AI-native software', 'AI agents', 'Automation', 'Data', 'Workflows', 'Business intelligence', 'Jewellery technology'], 'You operate. Jwero gives you the capability.', '/self-managed', 'Explore Jwero'],
  ['02', 'We run it with you', 'For jewellers who have teams but need expertise.', ['Technology', 'AI agents', 'Automation', 'Strategy', 'Specialists', 'Execution', 'Continuous optimisation'], 'Your team works with Jwero experts.', '/managed-services#with-you', 'Build your team'],
  ['03', 'We run it for you', 'For jewellers who want to focus almost entirely on their core business.', ['AI agents', 'Jewellery specialists', 'Marketing and growth experts', 'Ecommerce specialists', 'CRM and engagement specialists', 'Technology specialists', 'Analytics specialists'], 'You define the goal. Jwero handles the execution.', '/managed-services#for-you', 'Let Jwero handle it'],
];
const model = (head = true) => L.section(`
${head ? `${eyebrow('The Jwero model')}<h2 class="pz-h pz-center">Do it yourself. Do it with us.<br>Or let us do it for you.</h2>` : ''}
<div class="pz-levels">${LEVELS.map(([n, t, who, gives, line, href, cta]) => `
  <article class="pz-level">
    <p class="pz-level-n">${n}</p>
    <h3>${t}</h3>
    <p class="pz-level-who">${who}</p>
    <ul>${gives.map((g) => `<li>${g}</li>`).join('')}</ul>
    <p class="pz-level-line">${line}</p>
    <a class="pz-link" href="${href}">${cta} →</a>
  </article>`).join('')}
</div>`);

// ---------------------------------------------------------------- 6. jewellery business as a service
const TEAM = ['Marketing', 'Sales', 'Customer engagement', 'CRM', 'Ecommerce', 'Content', 'Performance marketing', 'SEO', 'AI', 'Automation', 'Analytics', 'Technology'];
const baas = () => L.section(`
<div class="pz-two">
  <div>
    ${eyebrow('A new kind of partner')}
    <h2 class="pz-h">Jewellery Business as a Service.</h2>
    <p class="pz-lead">Your business shouldn’t need a separate expert for every new challenge. Instead of building an enormous internal team, Jwero becomes an extension of the jewellery business.</p>
    <p class="pz-strong">One partner. One operating layer. Continuously adapting.</p>
  </div>
  <div class="pz-team">
    <p class="pz-team-hub">${L.mark('pz-mark')}<b>Jwero business team</b><span>AI + experts</span></p>
    <ul>${TEAM.map((t) => `<li>${t}</li>`).join('')}</ul>
  </div>
</div>`, { tone: 'tint' });

// ---------------------------------------------------------------- 7. you don't have to know what you need
const TOOLS_ASKED = ['“I need an AI agent.”', '“I need a CRM.”', '“I need Meta Ads.”', '“I need automation.”', '“I need a chatbot.”', '“I need SEO.”'];
const GOALS_SAID = ['“I want more customers.”', '“I want my old customers to come back.”', '“I want to increase online sales.”', '“I want to reduce manual work.”', '“I want my team to sell more.”', '“I want to grow without increasing my team.”'];
const DETERMINES = ['What needs to change.', 'Which technology is required.', 'Which AI agents should be deployed.', 'Which experts should be involved.', 'Which processes should be automated.', 'And what should be measured.'];
const dontKnow = () => L.section(`
${eyebrow('The difference')}
<h2 class="pz-h pz-center">You don’t even have to know what you need.</h2>
<p class="pz-lead pz-center">That’s our job.</p>
<div class="pz-swap">
  <div class="pz-swap-no"><p class="pz-swap-k">You don’t need to come to Jwero saying</p><ul>${TOOLS_ASKED.map((t) => `<li>${t}</li>`).join('')}</ul></div>
  <div class="pz-swap-yes"><p class="pz-swap-k">Instead, tell us</p><ul>${GOALS_SAID.map((t) => `<li>${t}</li>`).join('')}</ul></div>
  <div class="pz-swap-then"><p class="pz-swap-k">Jwero determines</p><ul>${DETERMINES.map((t) => `<li>${t}</li>`).join('')}</ul></div>
</div>
<p class="pz-shift">From buying tools<br><b>to getting things done.</b></p>`);

// ---------------------------------------------------------------- 8. expert network
const EXPERTS = ['Jewellery growth strategists', 'Digital marketing specialists', 'Performance marketing experts', 'SEO, AEO and GEO experts', 'Ecommerce specialists', 'CRM specialists', 'Customer engagement specialists', 'Content and creative specialists', 'AI specialists', 'Automation specialists', 'Data and analytics experts', 'Technology specialists'];
const experts = () => L.section(`
<div class="pz-two">
  <div>
    ${eyebrow('The Jwero expert network')}
    <h2 class="pz-h">When the world changes, you don’t have to chase experts.</h2>
    <p class="pz-lead">Jwero brings together specialists who understand both technology and the jewellery business.</p>
    <p class="pz-strong">As technology changes, our capabilities change with it. You don’t have to rebuild your team every time the world changes.</p>
  </div>
  <ul class="pz-experts">${EXPERTS.map((e) => `<li>${gem}${e}</li>`).join('')}</ul>
</div>`, { tone: 'tint' });

// ---------------------------------------------------------------- 9. AI without the hype
const VERBS = ['Understand', 'Analyse', 'Recommend', 'Create', 'Automate', 'Execute', 'Monitor', 'Optimise'];
const aiTeam = () => L.section(`
${eyebrow('AI, without the hype')}
<h2 class="pz-h pz-center">AI is not your productivity tool.<br>It’s part of your team.</h2>
<p class="pz-lead pz-center">Jwero uses AI continuously, underneath everything, to:</p>
<ol class="pz-verbs">${VERBS.map((v, i) => `<li style="--i:${i}">${v}</li>`).join('')}</ol>
<div class="pz-pair">
  <div><p class="pz-pair-k">AI agents</p><p>Work alongside specialists, at a scale and speed no team can match, inside limits you set. Nothing reaches a customer without a yes, unless you decide otherwise.</p></div>
  <div class="pz-pair-plus" aria-hidden="true">+</div>
  <div><p class="pz-pair-k">Human experts</p><p>Handle judgement, strategy and the parts of the jewellery business that need someone who has done it before.</p></div>
</div>
<p class="pz-shift"><b>AI scale + human expertise.</b><br>This is how Jwero continuously adapts to change.</p>`);

// ---------------------------------------------------------------- 10. what Jwero can take off your plate
const PLATE = [
  ['Customer acquisition', ['Ads', 'SEO', 'Content', 'Social media', 'Lead generation'], '/ads-for-jewellers'],
  ['Customer engagement', ['WhatsApp', 'Instagram', 'CRM', 'Personalisation', 'Follow-ups'], '/products/whatsapp'],
  ['Sales', ['Lead management', 'Recommendations', 'Conversational selling', 'Follow-ups', 'Sales intelligence'], '/products/crm'],
  ['Digital commerce', ['Website', 'Ecommerce', 'Catalogue', 'Google Shopping', 'Marketplaces'], '/products/storefront'],
  ['Customer retention', ['Loyalty', 'Reactivation', 'Customer journeys', 'Campaigns', 'Personalisation'], '/products/journeys'],
  ['Operations', ['Automation', 'ERP', 'CRM', 'Workflows', 'Data'], '/products/erp'],
  ['Intelligence', ['Analytics', 'Insights', 'Forecasting', 'Customer intelligence', 'Business recommendations'], '/products/reports'],
  ['Technology', ['Integrations', 'AI', 'Automation', 'Security', 'Infrastructure'], '/platform/integrations'],
];
const plate = () => L.section(`
${eyebrow('What we handle')}
<h2 class="pz-h pz-center">What Jwero can take off your plate.</h2>
<p class="pz-lead pz-center">Tap what you would rather not manage yourself.</p>
<div class="pz-plate" data-pz-plate>
  ${PLATE.map(([t, items, href], i) => `<button type="button" class="pz-plate-cell" aria-pressed="false" data-area="${t}">
    <span class="pz-plate-n">${String(i + 1).padStart(2, '0')}</span><b>${t}</b><span class="pz-plate-items">${items.join(' · ')}</span><i class="pz-plate-tick" aria-hidden="true">Jwero handles this</i>
  </button>`).join('')}
</div>
<div class="pz-plate-foot">
  <p data-pz-plate-out><b>You choose how much you want us to handle.</b></p>
  <a class="btn btn-primary" href="#" data-wa="handle" data-pz-plate-cta>Let Jwero handle it</a>
</div>`, { tone: 'tint' });

// ---------------------------------------------------------------- 11. get back to what you love
const LOVE = ['Customers', 'Jewellery', 'Designs', 'Collections', 'Craftsmanship', 'Stores', 'Suppliers', 'Business decisions'];
const IMAGINE = ['Imagine not having to constantly ask what changed in digital marketing.', 'Not having to chase your technology team.', 'Not having to figure out the latest AI tool.', 'Not having to hire another specialist.', 'Not having to wonder whether your website, ads, CRM or customer engagement are keeping up.'];
const love = () => `
<section class="pz-band pz-band-warm">
  <div class="pz-band-in">
    ${eyebrow('The jeweller’s role')}
    <h2 class="pz-h">Get back to what you love.</h2>
    <ul class="pz-love">${LOVE.map((w) => `<li>${gem}${w}</li>`).join('')}</ul>
    <div class="pz-imagine">${IMAGINE.map((l) => `<p>${l}</p>`).join('')}<p class="pz-imagine-end">Imagine simply knowing that someone is continuously taking care of it.</p></div>
    <p class="pz-turn"><b>You focus on jewellery.<br>Jwero handles the rest.</b></p>
  </div>
</section>`;

// ---------------------------------------------------------------- 12. continuous adaptation
const LEARNS = ['Customer behaviour', 'Market changes', 'Campaign performance', 'Sales data', 'Product trends', 'Technology changes', 'Industry developments', 'Business performance'];
const ADAPTS = [['New technology?', 'Evaluate it.'], ['New customer behaviour?', 'Adapt the strategy.'], ['New advertising algorithm?', 'Optimise campaigns.'], ['New AI capability?', 'Add it where useful.'], ['New business opportunity?', 'Identify it.'], ['New problem?', 'Find a solution.']];
const adapt = () => L.section(`
<div class="pz-two">
  <div>
    ${eyebrow('Continuous adaptation')}
    <h2 class="pz-h">Jwero never stops learning.</h2>
    <p class="pz-lead">Jwero continuously learns from what is happening in and around your business:</p>
    <ul class="pz-chips">${LEARNS.map((t) => `<li>${t}</li>`).join('')}</ul>
    <p class="pz-strong">When something changes, Jwero adapts.</p>
  </div>
  <ul class="pz-adapts">${ADAPTS.map(([q, a], i) => `<li style="--i:${i}"><span>${q}</span><b>${a}</b></li>`).join('')}</ul>
</div>
<p class="pz-shift">Your business doesn’t have to keep up with everything.<br><b>Jwero does.</b></p>`);

// ---------------------------------------------------------------- 13. the choice
const choice = () => L.section(`
<div class="pz-choice">
  <article><p class="pz-choice-k">Want control?</p><h3>Run it yourself.</h3><p>Jwero gives your team the tools, AI and automation.</p><a class="btn btn-ghost" href="/self-managed">Explore Jwero</a></article>
  <article><p class="pz-choice-k">Want leverage?</p><h3>Run it with Jwero.</h3><p>Your team + Jwero specialists + AI.</p><a class="btn btn-ghost" href="/managed-services#with-you">Build your team</a></article>
  <article class="is-gold"><p class="pz-choice-k">Want freedom?</p><h3>Let Jwero run it.</h3><p>Outsource the functions you don’t want to manage.</p>${HANDLE('Let Jwero handle it', 'handle', 'btn pz-btn-gold')}</article>
</div>`, { tone: 'tint' });

// ---------------------------------------------------------------- 14. outcome-first
// [button, what happens, [what Jwero does], [[capability, href]], [specialists], level]
const OUTCOMES = [
  ['Get more customers', 'More of the right people find you, ask, and get an answer.', ['Run and tune ads on Google and Instagram', 'Make you findable in search and in AI answers', 'Answer every enquiry within minutes'], [['Ads', '/ads-for-jewellers'], ['Instagram', '/instagram-for-jewellers'], ['WhatsApp', '/products/whatsapp']], ['Performance marketing', 'SEO, AEO and GEO', 'Customer engagement'], 2],
  ['Increase sales', 'More of the enquiries and walk-ins you already get become bills.', ['Follow up every open enquiry and quotation', 'Show each salesperson who to call and why', 'Match idle stock to the customers who would buy it'], [['CRM', '/products/crm'], ['Showroom', '/products/showroom'], ['Quotations', '/products/quotations']], ['Jewellery growth strategist', 'CRM specialist'], 2],
  ['Bring back existing customers', 'The customers you already earned come back, and bring others.', ['Remember every occasion, taste and scheme', 'Reach each customer with a reason, not a blast', 'Run loyalty and savings schemes without a register'], [['Customer memory', '/platform/customer-memory'], ['Journeys', '/products/journeys'], ['Loyalty', '/products/loyalty']], ['CRM specialist', 'Customer engagement'], 2],
  ['Grow online', 'A store, a catalogue and channels that sell while the shop is shut.', ['Build and run your online store at the live rate', 'List on Google Shopping and marketplaces', 'Sell on WhatsApp, Instagram and video'], [['Online store', '/products/storefront'], ['Marketplaces', '/products/marketplaces'], ['Catalogues', '/products/digital-catalogues']], ['Ecommerce specialist', 'Content and creative'], 2],
  ['Reduce manual work', 'The typing, matching and chasing stop being anyone’s job.', ['One record, so nothing is entered twice', 'Bills, stock and books that update together', 'Reminders and follow-ups drafted for you'], [['Count your tools', '/jwero-os#count-yours'], ['ERP', '/products/erp'], ['Accounting', '/jewellery-accounting-software']], ['Automation specialist', 'Technology specialist'], 1],
  ['Improve customer experience', 'Every customer is known, answered and remembered, on every channel.', ['One inbox for WhatsApp, Instagram, web and calls', 'A reply that knows her history', 'Appointments, video visits and follow-ups that arrive prepared'], [['WhatsApp', '/products/whatsapp'], ['Appointments', '/jewellery-appointment-booking-software'], ['Showroom', '/products/showroom']], ['Customer engagement', 'CRM specialist'], 2],
  ['Build my digital presence', 'You look, online, like the jeweller you are in the showroom.', ['Website, catalogue and Google profile', 'A steady flow of posts, Reels and stories', 'Reviews asked for and answered'], [['Social media', '/products/social-media'], ['Online store', '/products/storefront'], ['Instagram', '/instagram-for-jewellers']], ['Content and creative', 'Digital marketing'], 3],
  ['Automate my business', 'The routine runs itself, inside limits you set.', ['AI agents for enquiries, follow-ups and reminders', 'Journeys that act on what customers do', 'Approvals, caps and one switch to stop it'], [['AI agents', '/products/ai-sales-agents'], ['Journeys', '/products/journeys'], ['AI governance', '/platform/ai-workforce']], ['AI specialist', 'Automation specialist'], 1],
  ['Understand my customers', 'You know who is likely to buy, who is drifting, and why.', ['Every signal a customer gives, read and scored', 'Segments that update themselves', 'A plain weekly account of what changed'], [['Customer memory', '/platform/customer-memory'], ['Segmentation', '/products/segmentation'], ['Reports', '/products/reports']], ['Data and analytics', 'CRM specialist'], 1],
  ['Scale without hiring', 'New branches and channels without a new team for each.', ['AI agents take the routine load', 'Jwero specialists fill the roles you would have hired', 'One system for every branch'], [['Multi-store', '/products/multi-store'], ['AI agents', '/products/ai-sales-agents'], ['Managed services', '/managed-services']], ['Jewellery growth strategist', 'AI specialist'], 3],
  ['I want Jwero to handle everything', 'You set the goals. Jwero runs the functions around the jewellery.', ['A plan built from where your business is today', 'AI agents and specialists across every function you hand over', 'One account of what was done and what it produced'], [['Managed services', '/managed-services'], ['What we handle', '/what-we-handle'], ['How it works', '/how-it-works']], ['A Jwero business specialist leads; the rest are brought in as needed'], 3],
];
const LEVEL_NAME = { 1: 'You run it', 2: 'We run it with you', 3: 'We run it for you' };
const outcomes = () => L.section(`
${eyebrow('Start from the outcome')}
<h2 class="pz-h pz-center">What do you want to improve?</h2>
<div class="pz-out" data-pz-out>
  <script type="application/json">${JSON.stringify(OUTCOMES.map(([t, line, does, caps, who, lv]) => ({ t, line, does, caps, who, lv: LEVEL_NAME[lv] }))).replace(/</g, '\\u003c')}</script>
  <div class="pz-out-btns" role="group" aria-label="Outcomes">${OUTCOMES.map(([t], i) => `<button type="button" aria-pressed="${i === 0}" data-i="${i}"${i === OUTCOMES.length - 1 ? ' class="is-all"' : ''}>${t}</button>`).join('')}</div>
  <div class="pz-out-card" aria-live="polite">
    <p class="pz-out-k">What Jwero would do</p>
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
</div>`);

// ---------------------------------------------------------------- 15. the assessment
const FUNCS = ['Marketing and ads', 'Social media and content', 'Customer follow-up', 'Online store', 'CRM and customer data', 'Reports and analysis', 'Technology and integrations', 'Staff tasks and training'];
const CHALLENGES = ['Not enough new customers', 'Enquiries not answered in time', 'Old customers not coming back', 'Online sales are small', 'Too much manual work', 'Too many tools and vendors', 'Team is stretched', 'No clear numbers to decide from'];
const sel = (name, label, opts) => `<label>${label}<select data-pz-f="${name}">${opts.map((o) => `<option>${o}</option>`).join('')}</select></label>`;
const checks = (name, list) => `<div class="pz-checks">${list.map((o) => `<label><input type="checkbox" data-pz-c="${name}" value="${o}"><span>${o}</span></label>`).join('')}</div>`;
const assessment = () => L.section(`
${eyebrow('The business assessment')}
<h2 class="pz-h pz-center">Tell us where you are.<br>We’ll tell you what should happen next.</h2>
<div class="pz-assess" data-pz-assess id="assessment">
  <ol class="pz-steps"><li class="is-on">Your business</li><li>Today</li><li>Where you want to go</li><li>Your plan</li></ol>
  <div class="pz-step is-on" data-step="0">
    <div class="pz-fields">
      ${sel('type', 'What kind of jewellery business?', ['Retail showroom', 'Multi-store chain', 'Manufacturer or workshop', 'Wholesale or trade', 'Online brand', 'A mix of these'])}
      ${sel('stores', 'Stores or locations', ['1', '2 to 5', '6 to 20', 'More than 20'])}
      ${sel('team', 'Team size', ['1 to 5', '6 to 20', '21 to 100', 'More than 100'])}
      ${sel('revenue', 'Yearly revenue', ['Prefer not to say', 'Up to ₹5 crore', '₹5 to 25 crore', '₹25 to 100 crore', 'More than ₹100 crore'])}
      ${sel('customers', 'Customers on record', ['Not sure', 'Under 2,000', '2,000 to 10,000', '10,000 to 50,000', 'More than 50,000'])}
      ${sel('target', 'Growth you want this year', ['Hold steady, with less effort', 'Grow about 25%', 'Grow 50% or more', 'Open new stores or channels'])}
    </div>
  </div>
  <div class="pz-step" data-step="1">
    <p class="pz-step-q">Where do customers reach you today?</p>${checks('channels', ['Showroom', 'WhatsApp', 'Instagram or Facebook', 'Website or online store', 'Ads', 'Marketplaces'])}
    <p class="pz-step-q">What do you run the business on?</p>${checks('stack', ['Billing or ERP software', 'A CRM', 'Excel and registers', 'An agency for marketing', 'Several separate tools'])}
    <div class="pz-fields">${sel('marketing', 'Who does your marketing today?', ['Nobody in particular', 'I do it myself', 'A staff member', 'An agency', 'An in-house team'])}${sel('engagement', 'How are enquiries answered?', ['Whoever is free, on a phone', 'A dedicated person', 'A team with a shared inbox', 'Partly automated'])}</div>
  </div>
  <div class="pz-step" data-step="2">
    <p class="pz-step-q">Your biggest challenges</p>${checks('challenges', CHALLENGES)}
    <p class="pz-step-q">What you want to keep managing yourself</p>${checks('keep', FUNCS)}
    <p class="pz-step-q">What you want Jwero to handle</p>${checks('hand', FUNCS.concat(['Everything Jwero can']))}
  </div>
  <div class="pz-step pz-plan" data-step="3">
    <p class="pz-plan-k">Your Jwero business plan</p>
    <h3 data-pz-plan-title></h3>
    <div class="pz-plan-grid" data-pz-plan></div>
    <p class="pz-plan-note">This is a first reading from your answers, not advice. A Jwero business specialist goes through it with you and corrects it.</p>
    <a class="btn btn-primary" href="#" data-wa="assessment" data-pz-plan-cta>Talk to a Jwero business specialist</a>
  </div>
  <div class="pz-assess-nav"><button type="button" class="btn btn-ghost" data-pz-back hidden>Back</button><button type="button" class="btn btn-primary" data-pz-next>Next</button></div>
</div>`, { tone: 'tint' });

// ---------------------------------------------------------------- 16. stories: chaos → Jwero → outcome
// Patterns, not customer results. Replace with named stories and real numbers.
const STORIES = [
  ['Customer acquisition', '“We were spending on ads and could not say what they brought.”', 'Ads on Google and Instagram, tied to the enquiry and the bill, with a specialist tuning them.', ['Cost of each new customer', 'Enquiries per rupee spent', 'Sales traced to each ad']],
  ['Customer engagement', '“We couldn’t keep up with customer enquiries.”', 'AI replies on WhatsApp and Instagram, one shared inbox, the CRM behind it, and specialists watching quality.', ['Time to first reply', 'Enquiries answered', 'Enquiries that became bills']],
  ['Retention', '“Old customers stopped coming and we did not notice.”', 'Every customer’s occasions and taste on record, and outreach with a reason.', ['Customers who came back', 'Scheme renewals', 'Repeat purchase value']],
  ['Ecommerce', '“Our website was a brochure nobody bought from.”', 'A store priced at the live rate, a catalogue on every channel, and an ecommerce specialist running it.', ['Online orders', 'Enquiries from the site', 'Visitors who came back']],
  ['Marketing', '“Three agencies, four tools, and no one account of what worked.”', 'One team for content, social, campaigns and search, on one record.', ['Vendors replaced', 'Campaigns with a sales figure', 'Hours given back']],
  ['Operations', '“The same thing was typed into five places.”', 'One system for counter, stock, purchase, workshop and books, with the routine automated.', ['Tools replaced', 'Hours saved a week', 'Errors found the same day']],
];
const stories = (note = true) => L.section(`
${eyebrow('Success stories')}
<h2 class="pz-h pz-center">Chaos. Jwero. Outcome.</h2>
<div class="pz-stories">${STORIES.map(([area, problem, did, measures]) => `
  <article class="pz-story">
    <p class="pz-story-area">${area}</p>
    <p class="pz-story-k">The problem</p><p class="pz-story-q">${problem}</p>
    <p class="pz-story-k">What Jwero does</p><p>${did}</p>
    <p class="pz-story-k">The outcome, measured as</p><ul>${measures.map((m) => `<li>${m}</li>`).join('')}</ul>
  </article>`).join('')}
</div>
${note ? `<p class="pz-stories-note">These are the patterns we work to, shown without figures. Named customer stories with their numbers will replace them as each customer agrees to publish. <a href="/customers">See the jewellers who run on Jwero</a>.</p>` : ''}`);

// ---------------------------------------------------------------- 17. philosophy
const BELIEFS = [['The world will keep changing.', 'You don’t have to chase every change.'], ['Technology will keep evolving.', 'You don’t have to master every technology.'], ['Customers will keep changing.', 'You don’t have to predict everything yourself.'], ['The jewellery business will keep getting more complex.', 'You don’t have to handle that complexity alone.']];
const philosophy = () => `
<section class="pz-band pz-band-deep">
  <div class="pz-band-in">
    ${eyebrow('Why Jwero exists')}
    <div class="pz-beliefs">${BELIEFS.map(([a, b], i) => `<p style="--i:${i}"><b>${a}</b><span>${b}</span></p>`).join('')}</div>
    <p class="pz-turn"><b>That’s why Jwero exists.</b></p>
  </div>
</section>`;

// ---------------------------------------------------------------- 18. final
const finale = () => `
<section class="pz-band pz-final">
  <div class="pz-band-in">
    <h2 class="pz-h">The world is changing.<br>Your focus doesn’t have to.</h2>
    <p class="pz-lead">Focus on jewellery. Focus on your customers. Focus on your craft. Let Jwero and our network of AI and specialist experts handle the complexity of running and growing your business.</p>
    <div class="pz-cta">${HANDLE('Let Jwero handle it', 'handle', 'btn pz-btn-gold')}<a class="btn pz-btn-line" href="/self-managed">Explore Jwero</a></div>
    <p class="pz-sign">You focus on jewellery.<br>We handle the chaos.</p>
  </div>
</section>`;

// A short closing band for the inner pages.
const close = () => `
<section class="pz-band pz-final pz-final-sm">
  <div class="pz-band-in">
    <p class="pz-sign">The world keeps changing. You don’t have to chase it.</p>
    <p class="pz-lead">You focus on jewellery. Jwero handles the chaos. Do it yourself, do it with us, or let us do it for you.</p>
    <div class="pz-cta">${HANDLE('Let Jwero handle it', 'handle', 'btn pz-btn-gold')}<a class="btn pz-btn-line" href="/how-it-works">See how it works</a></div>
  </div>
</section>`;

const innerHero = (kicker, h1, sub, cta2) => `
<section class="hero pz-hero pz-hero-inner">
  <div class="pz-hero-in">
    <div class="pz-hero-copy">
      ${eyebrow(kicker)}
      <h1>${h1}</h1>
      <p class="pz-hero-sub">${sub}</p>
      <div class="pz-cta">${HANDLE('Let Jwero handle it', 'handle', 'btn pz-btn-gold')}${cta2 ? `<a class="btn pz-btn-line" href="${cta2[0]}">${cta2[1]}</a>` : ''}</div>
    </div>
  </div>
</section>`;

// ---------------------------------------------------------------- pages
const home = {
  slug: 'index',
  title: 'Jwero: You Focus on Jewellery. We Handle the Chaos.',
  description: 'Markets, customers and technology keep changing. Jwero brings the AI, technology and jewellery-business specialists to keep up, so you can focus on jewellery. Do it yourself, do it with us, or let us handle it.',
  schema: {
    '@context': 'https://schema.org', '@type': 'Organization', name: 'Jwero', url: 'https://jwero.ai',
    description: 'Jwero is the partner that takes the complexity and constant learning out of running and growing a jewellery business, combining AI, technology, automation and jewellery-business specialists. Jewellers can run it themselves, run it with Jwero, or have Jwero run it for them.',
  },
  body: `
${hero()}
${whoRuns(0)}
${worldChanged()}
${learningLoop()}
${enter()}
${model()}
${baas()}
${dontKnow()}
${experts()}
${aiTeam()}
${plate()}
${love()}
${adapt()}
${choice()}
${outcomes()}
${assessment()}
${stories()}
${philosophy()}
${finale()}
`,
};

const why = {
  slug: 'why-jwero',
  title: 'Why Jwero: You Shouldn’t Have to Be an Expert in Everything | Jwero',
  description: 'Being great at jewellery used to be enough. Now a jeweller is expected to master marketing, AI, ecommerce and more, and to relearn it every year. Why Jwero exists, and what it takes off your plate.',
  breadcrumbs: [['Home', '/'], ['Why Jwero']],
  body: `
${innerHero('Why Jwero', 'You shouldn’t have to become an expert in everything to remain an expert in jewellery.', 'Markets change. Customers change. Technology changes. Your business shouldn’t have to chase every change.', ['/how-it-works', 'See how it works'])}
${worldChanged()}
${learningLoop()}
${love()}
${philosophy()}
${close()}
`,
};

const STEPS = [
  ['Tell us where you want to go', 'Not which tool you need. The outcome: more customers, customers coming back, online sales, less manual work.'],
  ['We read where you are', 'A short assessment of your business, your team, your channels and your tools.'],
  ['We decide what needs to happen', 'Which technology, which AI agents, which specialists, which processes to automate, and what to measure.'],
  ['You choose how much we handle', 'Run it yourself, run it with us, or have us run it for you. Function by function.'],
  ['We make it happen, and keep adapting', 'One account of what was done and what it produced. When something changes, the plan changes.'],
];
const how = {
  slug: 'how-it-works',
  title: 'How Jwero Works: From Your Goal to Getting It Done | Jwero',
  description: 'How working with Jwero goes: you say where you want the business to go, Jwero works out what needs to happen, and you choose whether to run it yourself, with us, or hand it over.',
  breadcrumbs: [['Home', '/'], ['How it works']],
  body: `
${innerHero('How it works', 'You tell us where you want to go. We figure out what needs to happen.', 'And we help make it happen. You never have to arrive knowing which tool, which technology or which expert you need.', ['#assessment', 'Take the assessment'])}
${whoRuns(0)}
${L.section(`${eyebrow('Five steps')}<h2 class="pz-h pz-center">From a goal to a result.</h2><ol class="pz-how">${STEPS.map(([t, d], i) => `<li><span>${String(i + 1).padStart(2, '0')}</span><b>${t}</b><p>${d}</p></li>`).join('')}</ol>`)}
${enter()}
${model()}
${dontKnow()}
${adapt()}
${assessment()}
${close()}
`,
};

const aiExperts = {
  slug: 'ai-and-experts',
  title: 'AI + Experts: AI Scale With Human Expertise for Jewellers | Jwero',
  description: 'How Jwero combines AI agents with jewellery-business specialists in marketing, ecommerce, CRM, content, data and technology, so a jeweller does not have to rebuild a team every time the world changes.',
  breadcrumbs: [['Home', '/'], ['AI + experts']],
  body: `
${innerHero('AI + experts', 'AI scale. Human expertise. One team around your business.', 'AI is the engine underneath. Specialists bring the judgement. Together they keep your business adapting, without you having to learn any of it.', ['/what-we-handle', 'See what we handle'])}
${whoRuns(1)}
${aiTeam()}
${experts()}
${baas()}
${L.section(`${eyebrow('In your control')}<h2 class="pz-h pz-center">AI that waits for your yes.</h2><p class="pz-lead pz-center">Every AI action sits inside limits you set: approvals, daily caps, quiet hours, and one switch that stops it. <a href="/platform/ai-workforce">How the AI is governed</a> · <a href="/trust">Trust Centre</a></p>`)}
${adapt()}
${close()}
`,
};

const handle = {
  slug: 'what-we-handle',
  title: 'What Jwero Handles: Acquisition, Sales, Commerce, Operations | Jwero',
  description: 'What Jwero can take off a jeweller’s plate: customer acquisition, engagement, sales, digital commerce, retention, operations, intelligence and technology. Choose how much you want handled.',
  breadcrumbs: [['Home', '/'], ['What we handle']],
  body: `
${innerHero('What we handle', 'Choose how much you want us to handle.', 'Eight areas around the jewellery itself. Hand over one, several, or all of them.', ['#assessment', 'Take the assessment'])}
${plate()}
${outcomes()}
${L.section(`${eyebrow('Underneath')}<h2 class="pz-h pz-center">The capabilities are all still here.</h2><p class="pz-lead pz-center">Every product, solution and tool sits under this promise. If you like to look under the bonnet: <a href="/products">products</a> · <a href="/solutions">solutions by business type</a> · <a href="/platform">the platform</a> · <a href="/pricing">pricing</a>.</p>`)}
${assessment()}
${close()}
`,
};

const self = {
  slug: 'self-managed',
  title: 'Self Managed: Run It Yourself With Jwero’s Tools, AI and Automation | Jwero',
  description: 'For jewellers who want control: Jwero gives your team the AI-native software, AI agents, automation and data to run the business yourselves. ₹18,000 a month, first month ₹3,600.',
  breadcrumbs: [['Home', '/'], ['Self managed']],
  body: `
${innerHero('01 · You run it', 'Want control? Run it yourself.', 'Jwero gives your team the tools, AI and automation. You operate. Jwero gives you the capability.', ['/jwero-os', 'See the operating system'])}
${whoRuns(0)}
${L.section(`${eyebrow('What your team gets')}<h2 class="pz-h pz-center">One system, so your team is not learning ten.</h2>
<div class="pz-levels pz-levels-4">
  <article class="pz-level"><h3>The operating system</h3><p class="pz-level-who">Customers, counter, stock, purchase, workshop, books and team on one record.</p><a class="pz-link" href="/jwero-os">See it →</a></article>
  <article class="pz-level"><h3>AI agents</h3><p class="pz-level-who">Enquiries answered, follow-ups drafted, reminders sent, with your approval.</p><a class="pz-link" href="/products/ai-sales-agents">See them →</a></article>
  <article class="pz-level"><h3>Every capability</h3><p class="pz-level-who">CRM, WhatsApp, ecommerce, billing, inventory, manufacturing and more.</p><a class="pz-link" href="/products">All products →</a></article>
  <article class="pz-level"><h3>For your kind of business</h3><p class="pz-level-who">Retail, chains, manufacturers, wholesale, diamond traders, online brands.</p><a class="pz-link" href="/solutions">Find yours →</a></article>
</div>`)}
${L.section(`<div class="home-price"><div><p class="eyebrow">PRICE</p><h2>Every module. ₹18,000 a month. First month ₹3,600.</h2><p>One plan, billed monthly. No per-module price and no per-seat price. Messages, AI and calls run on a prepaid wallet at published rates.</p></div><div class="cta-row"><a class="btn btn-primary" href="${L.TRIAL_URL}self-managed" rel="noopener" data-trial>Start for ₹3,600</a><a class="btn btn-ghost" href="/pricing">See the full pricing</a></div></div>`, { tone: 'tint' })}
${L.section(`${eyebrow('And when you want help')}<h2 class="pz-h pz-center">You can hand a function over at any time.</h2><p class="pz-lead pz-center">Start by running it yourself. Bring in Jwero specialists for one function, or all of them, when you would rather not manage it. <a href="/managed-services">See managed services</a>.</p>`)}
${choice()}
${close()}
`,
};

const managed = {
  slug: 'managed-services',
  title: 'Managed Services: Jwero Runs It With You, or for You | Jwero',
  description: 'For jewellers who want leverage or freedom: Jwero specialists and AI agents work alongside your team, or run whole functions for you, from marketing and ecommerce to CRM, content and analytics.',
  breadcrumbs: [['Home', '/'], ['Managed services']],
  body: `
${innerHero('02 and 03 · Managed', 'Run it with Jwero. Or let Jwero run it.', 'Your team with our specialists and AI, or whole functions handed over. You define the goal. Jwero handles the execution.', ['#assessment', 'Take the assessment'])}
${whoRuns(2)}
${L.section(`
<div class="pz-levels pz-levels-2">
  <article class="pz-level" id="with-you"><p class="pz-level-n">02</p><h3>We run it with you</h3><p class="pz-level-who">For jewellers who have teams but need expertise.</p><ul><li>Technology and AI agents</li><li>Automation</li><li>Strategy</li><li>Specialists working beside your people</li><li>Execution</li><li>Continuous optimisation</li></ul><p class="pz-level-line">Your team works with Jwero experts.</p>${HANDLE('Build your team', 'with-you', 'btn btn-ghost')}</article>
  <article class="pz-level" id="for-you"><p class="pz-level-n">03</p><h3>We run it for you</h3><p class="pz-level-who">For jewellers who want to focus almost entirely on their core business.</p><ul><li>AI agents</li><li>Jewellery and growth specialists</li><li>Marketing and ecommerce specialists</li><li>CRM and customer engagement specialists</li><li>Technology and analytics specialists</li><li>One account of what was done</li></ul><p class="pz-level-line">You define the goal. Jwero handles the execution.</p>${HANDLE('Let Jwero handle it', 'handle', 'btn pz-btn-gold')}</article>
</div>`)}
${plate()}
${experts()}
${L.section(`${eyebrow('How an engagement goes')}<h2 class="pz-h pz-center">Scoped to your business, function by function.</h2>
<ol class="pz-how">
  <li><span>01</span><b>Assessment</b><p>Where you are, what you want, what you would rather not manage.</p></li>
  <li><span>02</span><b>A plan and a scope</b><p>Which functions Jwero takes on, who is involved, what is measured. Managed work is scoped and quoted for your business.</p></li>
  <li><span>03</span><b>The first ninety days</b><p>Priorities in order, with a named Jwero business specialist.</p></li>
  <li><span>04</span><b>A regular account</b><p>What was done, what it produced, what changes next.</p></li>
  <li><span>05</span><b>Your control</b><p>Take a function back, or hand another over, whenever you like. Your data is always yours.</p></li>
</ol>`, { tone: 'tint' })}
${assessment()}
${close()}
`,
};

const success = {
  slug: 'success-stories',
  title: 'Success Stories: Chaos, Jwero, Outcome | Jwero',
  description: 'How jewellery businesses move from chaos to an outcome with Jwero, across customer acquisition, engagement, retention, ecommerce, marketing and operations.',
  breadcrumbs: [['Home', '/'], ['Success stories']],
  body: `
${innerHero('Success stories', 'Chaos. Jwero. Outcome.', 'Not feature lists. What was wrong, what Jwero did, and what changed.', ['/customers', 'The jewellers on Jwero'])}
${stories()}
${L.section(L.customerLogos())}
${outcomes()}
${close()}
`,
};

module.exports = [home, why, how, aiExperts, handle, self, managed, success];
