const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Roles', '/roles'], [label]];

// ---------------------------------------------------------------------------
// 1. Karigar / goldsmith
// ---------------------------------------------------------------------------

const karigarFaqs = [
  { q: 'Does Jwero track my wages or payments?', a: 'No. Jwero tracks the job — gold weight issued to you, weight returned, loss per stage, timelines. It does not touch wage or payroll settlement; that stays wherever it is handled today.' },
  { q: 'Will this be used to blame me for loss instead of protecting me?', a: 'The ledger records loss at every stage, not just the last one — so if loss happened before a job reached your bench, that shows too. A record that catches everyone’s stage is fairer than one person’s memory of who touched what last.' },
  { q: 'Do I have to learn a computer system to use this?', a: 'The record is built and read by your supervisor or production manager, not typed up by you at the bench. What changes for you is that a job’s weight and history are written down accurately, instead of remembered and re-argued later.' },
  { q: 'Does the AI do any of the actual craft or casting work?', a: 'No. Jwero tracks jobs and gold — it does not cast, set, polish or touch metal. The bench work stays entirely yours; the system only remembers what happened around it.' },
];

const karigarRole = {
  slug: 'roles/karigar',
  title: 'Jwero for Karigars & Goldsmiths — Traceable Jobs, Accounted Loss | Jwero',
  description: 'How Jwero changes a karigar’s day: every job traceable from jangad to despatch, loss accounted at each stage, not memory. Jwero tracks jobs and gold, not wages.',
  breadcrumbs: BC('Karigar / goldsmith'),
  faqs: karigarFaqs,
  body: `
${L.hero({
  eyebrow: 'MANUFACTURING & OPS · KARIGAR',
  h1: 'Your loss, your credit — written down, not remembered.',
  sub: 'Right now, what happened to a job between jangad and despatch lives in whoever’s memory is loudest at settlement time. Jwero puts gold-in, gold-out and loss at every stage on one ledger — so your work speaks for itself.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What changes between the jangad slip and the finished piece.', '')}
  ${L.impactGrid([
    { lever: 'Receiving a job', before: 'You take gold on a hand-written jangad slip — weight noted in pen, easy to lose, hard to dispute later.', after: 'The weight issued to you is on the job record from the start, tied to that specific job — not a slip that can go missing.' },
    { lever: 'Loss at your stage', before: 'If a piece comes back light, it’s your word against whoever handled it before or after you.', after: 'Loss is tracked stage by stage, so what happened before your bench and what happened at it are two separate, visible entries.' },
    { lever: 'Rework and repeat jobs', before: 'A repeat job on the same design starts from scratch — nobody remembers what went wrong last time.', after: 'The job’s history sits on one record your supervisor can pull up, so a repeat job isn’t a blind repeat of old mistakes.' },
    { lever: 'Settlement time', before: 'Month-end reconciliation turns into an argument about who lost how much gold and when.', after: 'Settlement is read off the same per-stage ledger everyone already saw — fewer surprises, fewer arguments.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills that follow you, not just your supervisor’s memory of you.', '')}
  ${L.cards([
    { title: 'A verifiable track record', text: 'Your loss discipline and on-time delivery build up as a real record over time — proof of your standard of work that isn’t only in one supervisor’s head.' },
    { title: 'Fewer disputes to defend yourself in', text: 'When loss and timing are logged at every stage, you spend less time re-explaining what happened weeks ago and more time on the bench.' },
    { title: 'Visibility into your own pattern', text: 'Seeing your own jobs laid out — what ran clean, what didn’t — is the kind of feedback that’s usually invisible until someone is unhappy about it.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'The craft stays yours. The system only remembers the paperwork.', '')}
  <p class="lead">What stays yours: the bench, the skill in your hands, and the final say on what leaves it — Jwero just replaces the slips and arguments over gold loss with a record. <a href="/roles#pattern">See why this is true for every role at Jwero →</a></p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Practical ways to make the record work for you.', '')}
  ${L.steps([
    { title: 'Confirm weight at handoff', text: 'When a job is issued or returned, confirm the weight logged matches what you received or are handing back — the record is only as good as that moment.' },
    { title: 'Flag abnormal loss immediately', text: 'If a piece runs heavier loss than usual, say so at the time rather than at settlement — the per-stage ledger makes it easy to show exactly where.' },
    { title: 'Ask your supervisor to show you your own record', text: 'Your job history is a track record worth seeing — ask to review it periodically instead of only hearing about it when something goes wrong.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('KARIGAR QUESTIONS', 'Straight answers about tracking, loss and wages.', '')}${L.faqBlock(karigarFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site’s own WhatsApp button runs on Jwero — <a href="#" data-wa="roles">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See how one job gets tracked, start to finish.', 'Bring one job’s history — we’ll show what changes between jangad and despatch.', 'roles')}
`,
};

// ---------------------------------------------------------------------------
// 2. CAD / CAM designer
// ---------------------------------------------------------------------------

const cadDesignerFaqs = [
  { q: 'Does this replace CAD software or my design tools?', a: 'No. Jwero doesn’t design anything — you still work in your CAD/CAM tools. What Jwero tracks is what happens to the file after: the brief, the revisions, the approval, and the handoff into production.' },
  { q: 'Will my design revisions still get lost in chat?', a: 'A design’s conversation and revision history attach to its job record instead of scattering across chat threads — so a client’s "make it 2mm shorter" from three messages ago is still findable.' },
  { q: 'Does it track my personal design credit or portfolio?', a: 'Not as a dedicated portfolio feature today — but because each design’s approval and handoff is logged against the job, there’s a factual record of what you designed and when, if you need to point to it.' },
];

const cadDesignerRole = {
  slug: 'roles/cad-designer',
  title: 'Jwero for CAD/CAM Designers — Files That Don’t Die in Chat | Jwero',
  description: 'How Jwero changes a CAD/CAM designer’s day: revisions and approvals tracked on one thread, and an approved design that actually hands off into production.',
  breadcrumbs: BC('CAD / CAM designer'),
  faqs: cadDesignerFaqs,
  body: `
${L.hero({
  eyebrow: 'MANUFACTURING & OPS · CAD / CAM DESIGNER',
  h1: 'A design that doesn’t die in a WhatsApp thread.',
  sub: 'Right now, a revision from three days ago is a scroll-back exercise, and an approved file can sit for days before anyone starts the job. Jwero tracks the revision history and the handoff — so your file’s status is visible, not guessed at.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What changes between a client brief and a job on the floor.', '')}
  ${L.impactGrid([
    { lever: 'Tracking revisions', before: 'A client’s change request lives somewhere in a WhatsApp thread with forty other messages — you re-read the whole thing to find it.', after: 'Each design’s brief, revisions and approvals sit on one thread attached to that job — findable without a scroll-back hunt.' },
    { lever: 'Client approval', before: 'A client says "yes, go ahead" in chat, and that approval is easy to lose or dispute later.', after: 'Approval is recorded against the design, so there’s a clear, findable point where a client signed off.' },
    { lever: 'Handoff to production', before: 'An approved file can sit idle for days because nobody on the floor knows it’s ready.', after: 'An approved design hands off into order/job tracking — closing the gap between "client approved" and "job started".' },
    { lever: 'Multiple jobs in flight', before: 'Juggling five clients’ revision rounds means checking five different chat threads to know where each stands.', after: 'Every design’s status — brief, revision, approval, handoff — is visible on its own job record, not five separate memories.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills that make you more valuable on the floor, not just at the screen.', '')}
  ${L.cards([
    { title: 'Design-to-production handoff literacy', text: 'Understanding how an approved file actually becomes a job — stages, weight, timeline — makes you someone production trusts to hand off to, not just a file-sender.' },
    { title: 'A defensible approval trail', text: 'When a client disputes what was agreed, you can point to the recorded revision and approval instead of relitigating a chat history from memory.' },
    { title: 'Fewer files that go nowhere', text: 'Seeing which of your designs stalled after approval — and why — is the kind of visibility that helps you flag a bottleneck before it costs a delivery date.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'The design work stays yours. The system only tracks the paper trail.', '')}
  <p class="lead">What stays yours: the design itself and every technical call on it — Jwero just tracks which revision is current and whether the sign-off actually reached the floor. <a href="/roles#pattern">See why this is true for every role at Jwero →</a></p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Practical ways to keep the handoff clean.', '')}
  ${L.steps([
    { title: 'Log revisions on the job thread, not a side chat', text: 'Keeping brief and revision conversation on the design’s own record means the next person — including you, later — doesn’t have to reconstruct it.' },
    { title: 'Get approval confirmed on the record', text: 'A client’s verbal or scattered "okay, go ahead" is worth pinning to the design record the moment it happens, before it’s forgotten.' },
    { title: 'Flag a stalled handoff early', text: 'If an approved design hasn’t moved to production in a day or two, raise it — the record shows exactly where it’s sitting.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('CAD DESIGNER QUESTIONS', 'Straight answers about revisions, approvals and handoff.', '')}${L.faqBlock(cadDesignerFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site’s own WhatsApp button runs on Jwero — <a href="#" data-wa="roles">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Track one design, end to end.', 'Bring one CAD job — we’ll show the thread from brief to production handoff.', 'roles')}
`,
};

// ---------------------------------------------------------------------------
// 3. Production manager
// ---------------------------------------------------------------------------

const productionManagerFaqs = [
  { q: 'Does Jwero replace my job-work register or production sheet?', a: 'It becomes the single record instead of a paper or spreadsheet register — job-work tracking from jangad to despatch, with gold-in/gold-out and loss at each stage, on one ledger.' },
  { q: 'Can I keep client jobs separated if I run job-work for multiple OEM clients?', a: 'Yes — OEM/client segregation keeps specs, WIP and settlement separate per buyer, even when jobs share your production floor.' },
  { q: 'Does it handle karigar wages or payroll?', a: 'No. Jwero tracks the job — weight, stage, loss, timeline — not the person’s pay. Wage and payroll settlement stays wherever it’s handled today; it’s not part of what this system does.' },
  { q: 'Do I still need to walk the floor to know where things stand?', a: 'You’ll still walk the floor for the reasons a manager always does — but you won’t need to just to find out which stage a job is at. That’s visible from the record.' },
];

const productionManagerRole = {
  slug: 'roles/production-manager',
  title: 'Jwero for Production Managers — See Every Job’s Stage | Jwero',
  description: 'How Jwero changes a production manager’s day: job-work tracked jangad to despatch, gold-in/out and loss at each stage, client jobs segregated on one ledger.',
  breadcrumbs: BC('Production manager'),
  faqs: productionManagerFaqs,
  body: `
${L.hero({
  eyebrow: 'MANUFACTURING & OPS · PRODUCTION MANAGER',
  h1: 'Every job’s stage, without walking the floor to find it.',
  sub: 'Right now, knowing where twenty jobs stand means twenty conversations or a walk down the line. Jwero tracks job-work from jangad to despatch — gold-in, gold-out and loss at every stage — on one ledger you can read from your desk.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What changes when jobs are on a ledger instead of a walk-through.', '')}
  ${L.impactGrid([
    { lever: 'Checking job status', before: 'Knowing where a job stands means walking the floor or calling around — and even then it’s a snapshot, not a trail.', after: 'Every job’s stage, from jangad to despatch, is visible on one record — no floor walk required to answer "where is it".' },
    { lever: 'Loss across the pipeline', before: 'Loss gets noticed at settlement, long after the stage that caused it, making the cause hard to pin down.', after: 'Gold-in, gold-out and loss are tracked at each production stage, so an abnormal loss is visible near the stage it happened at, not weeks later.' },
    { lever: 'Running multiple OEM clients', before: 'Keeping several clients’ jobs straight on a shared floor risks specs, WIP or settlement getting mixed up.', after: 'Client/OEM segregation keeps specs, WIP and settlement separate per buyer, even when the physical work shares your floor.' },
    { lever: 'Handoff from CAD to floor', before: 'An approved design can sit for days before production even knows it exists.', after: 'CAD-file-to-job-file tracking means an approved design doesn’t die in a chat thread before reaching the floor.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills that make you the person leadership trusts with the whole pipeline.', '')}
  ${L.cards([
    { title: 'Pipeline-wide loss fluency', text: 'Reading loss patterns across stages and clients — not just at settlement — builds the kind of judgment that catches a problem before it’s a write-off.' },
    { title: 'A defensible client-facing record', text: 'When an OEM client questions a settlement, you can show job-level WIP and loss data instead of reconstructing it from memory or paper.' },
    { title: 'Fewer floor walks, more floor time that matters', text: 'Once status-checking stops eating your day, the time on the floor is for solving problems, not gathering information you could’ve read at your desk.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'The floor is still yours to run. The system only remembers the paperwork.', '')}
  <p class="lead">What stays yours: labour scheduling, production calls and floor authority — Jwero just tracks gold-in/gold-out and stage loss, and never touches karigar wages or payroll. <a href="/roles#pattern">See why this is true for every role at Jwero →</a></p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Practical ways to get more out of the pipeline view.', '')}
  ${L.steps([
    { title: 'Review stage-by-stage loss weekly, not just at settlement', text: 'Catching an abnormal-loss flag near the stage it happened at is far cheaper than discovering it at month-end.' },
    { title: 'Keep OEM client jobs on their own segregated view', text: 'Use client-wise segregation deliberately, especially when jobs physically share a process — it’s what prevents a settlement dispute later.' },
    { title: 'Close the CAD-to-floor gap actively', text: 'Check for approved designs sitting without a job file started — the handoff tracking makes that gap visible; acting on it is still on you.' },
    { title: 'Use the record when a client or karigar disputes a number', text: 'Point to the per-stage ledger instead of relitigating from memory — it settles most disputes faster and more fairly.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('PRODUCTION MANAGER QUESTIONS', 'Straight answers about tracking, clients and wages.', '')}${L.faqBlock(productionManagerFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site’s own WhatsApp button runs on Jwero — <a href="#" data-wa="roles">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See your production pipeline as one ledger.', 'Bring one week of jobs — we’ll show gold-in, gold-out and loss, stage by stage.', 'roles')}
`,
};

// ---------------------------------------------------------------------------
// 4. Quality & hallmarking officer
// ---------------------------------------------------------------------------

const qualityHallmarkingFaqs = [
  { q: 'Does Jwero perform hallmarking or assaying itself?', a: 'No. Jwero tracks documentation and status — it does not perform the physical hallmarking or certification testing process. The actual assaying and certification still happens wherever it does today.' },
  { q: 'Can it track which pieces are pending certification versus cleared?', a: 'Yes — a piece’s documentation status is tracked as part of its job record, so you can see what’s pending versus cleared without chasing paper across departments.' },
  { q: 'Does it handle statutory compliance filing for me?', a: 'Not as a filing system — it tracks the documentation trail tied to a job so you have the record on hand; the statutory process and filing itself remain your responsibility.' },
];

const qualityHallmarkingRole = {
  slug: 'roles/quality-hallmarking',
  title: 'Jwero for Quality & Hallmarking Officers — Status, Not Paper Chase | Jwero',
  description: 'How Jwero changes a quality and hallmarking officer’s day: certification status tracked against the job — not chased across paper and departments.',
  breadcrumbs: BC('Quality & hallmarking officer'),
  faqs: qualityHallmarkingFaqs,
  body: `
${L.hero({
  eyebrow: 'MANUFACTURING & OPS · QUALITY & HALLMARKING',
  h1: 'Certification status, tracked — not chased on paper.',
  sub: 'Right now, knowing whether a batch is hallmark-cleared means flipping through paper or asking around. Jwero tracks documentation status against the job record — so pending and cleared are visible at a glance, not reconstructed from files.',
  primary: { href: '#', label: 'Chat with us on WhatsApp', wa: 'roles' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${L.section(
  `${L.sectionHead('A DAY IN THIS ROLE', 'What changes between a finished piece and a cleared, certified one.', '')}
  ${L.impactGrid([
    { lever: 'Tracking what’s pending', before: 'Knowing which pieces are still waiting on certification means checking paper files or asking each department.', after: 'Documentation status sits on the job record, so pending versus cleared is visible without a paper chase.' },
    { lever: 'Export documentation', before: 'Export paperwork gets assembled late, under time pressure, by pulling records from several places.', after: 'Export documentation tracking keeps the trail attached to the job as it moves — not reconstructed at the last minute.' },
    { lever: 'Answering an audit or client query', before: 'A client or auditor asking "where’s the certification for this batch" means digging through files to answer.', after: 'The documentation trail tied to the job is there to show, instead of being rebuilt from scratch under pressure.' },
    { lever: 'Coordinating across departments', before: 'Certification status gets miscommunicated between production, dispatch and quality because each keeps its own notes.', after: 'One job record means production, dispatch and quality are reading the same documentation status, not three different versions.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('WHAT THIS ROLE GAINS', 'Skills that make your sign-off worth more, not just faster.', '')}
  ${L.cards([
    { title: 'Documentation and compliance-status fluency', text: 'Working from one tracked record instead of scattered paper builds a sharper, more defensible handle on what’s cleared, pending, or missing — and why.' },
    { title: 'A trail you can hand over, not explain', text: 'When an audit or a client asks for proof, you point to the record instead of spending a day assembling one from memory and files.' },
    { title: 'Cross-department visibility', text: 'Seeing where a job sits before it reaches your desk means fewer surprises and fewer pieces arriving for sign-off with gaps you have to chase down.' },
  ])}`
, { tone: 'tint' })}

${L.section(
  `${L.sectionHead('SURVIVING & GROWING IN THE AI AGE', 'The certification call stays yours. The system only tracks the paperwork.', '')}
  <p class="lead">What stays yours: the sign-off judgment on whether a piece is actually compliant — Jwero just tracks which piece is pending, cleared, or missing paperwork. <a href="/roles#pattern">See why this is true for every role at Jwero →</a></p>`
)}

${L.section(
  `${L.sectionHead('HOW TO CONTRIBUTE MORE', 'Practical ways to keep the compliance trail airtight.', '')}
  ${L.steps([
    { title: 'Update documentation status as it happens', text: 'Marking a piece pending or cleared at the moment it changes keeps the record trustworthy for whoever checks it next — including you, later.' },
    { title: 'Use the job record to prep for audits ahead of time', text: 'Reviewing documentation status on a schedule, not just when an audit is announced, catches gaps while there’s still time to fix them.' },
    { title: 'Flag documentation gaps to production early', text: 'If a job’s trail is missing something before it reaches your desk, raising it early is cheaper than catching it at final sign-off.' },
  ])}`
, { tone: 'tint' })}

${L.section(`${L.sectionHead('QUALITY & HALLMARKING QUESTIONS', 'Straight answers about certification, tracking and compliance.', '')}${L.faqBlock(qualityHallmarkingFaqs)}`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This site’s own WhatsApp button runs on Jwero — <a href="#" data-wa="roles">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('See documentation status on one job.', 'Bring one batch’s paperwork — we’ll show what pending versus cleared looks like on the record.', 'roles')}
`,
};

module.exports = [karigarRole, cadDesignerRole, productionManagerRole, qualityHallmarkingRole];
