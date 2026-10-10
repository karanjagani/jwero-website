// HR & Payroll, rebuilt 2026-10-10 in the One Inbox design from a pim-app survey.
// Built: employee records, bulk import, onboarding, documents, recruitment and
// offers, verification consent; attendance with geofence and selfie, kiosk,
// offline punch queue, shifts and rosters, regularisation; biometric punches by
// importing ESSL/ZKTeco exports; leave, comp-off, encashment, holidays; salary
// structures, pay runs with approval, PF/ESI/PT/muster exports, TDS and
// declarations, Form 16 Part B summary, payslips in the staff area, NEFT-style bank
// file, payroll entries to the ledger, arrears, bonus, gratuity, minimum-wage check;
// sales incentives on sales or margin with clawback and leaderboard; targets;
// karigar payments separate from payroll (ledger, TDS, bank file); overtime; staff
// loans and advances; expense claims; appraisals, PIP, peer feedback, probation,
// scorecards; LMS; staff self-service on the web; team chat announcements;
// approvals with reminders; exit and full-and-final; statutory registers; HR
// reports; AI help for HR questions.
// NOT claimed: live biometric sync, a native staff app, automatic salary payment,
// direct EPFO/ESIC/TRACES filing, WhatsApp notices or payslips to staff (earlier
// confirmed by Jwero, not found in code: left out), a fully Hindi app, generated
// offer letters, HR-specific permissions, full per-branch staff management.
const L = require('../lib');
const { icon } = L;
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

const meter = () => `<div class="erp-meter hr-meter" data-hrm>
  <p class="erp-meter-t">${icon('activity')}<b>How many hours does month end take you?</b></p>
  <label><span>Staff <b data-o="staff"></b></span><input type="range" data-i="staff" min="3" max="500" step="1" value="25"></label>
  <label><span>Salespeople on incentives <b data-o="sales"></b></span><input type="range" data-i="sales" min="0" max="200" step="1" value="8"></label>
  <div class="erp-meter-bars">
    <a href="#attendance" data-b="att"><span>Attendance and leave, by hand</span><i><em></em></i><b></b></a>
    <a href="#payroll" data-b="pay"><span>Salary, PF, ESI, PT and TDS</span><i><em></em></i><b></b></a>
    <a href="#incentives" data-b="inc"><span>Sales incentives</span><i><em></em></i><b></b></a>
  </div>
  <p class="erp-meter-total"><span>Hours a month, by hand</span><b data-o="total"></b></p>
  <p class="erp-meter-total hr-meter-rs"><span>What those hours cost a year</span><b data-o="cost"></b></p>
  <p class="hr-meter-leak">${icon('coins')}<span>Plus what slips: advances not recovered and incentives paid on returned sales. In Jwero both are deducted in the pay run.</span></p>
  <a class="btn btn-primary erp-meter-cta" href="#" data-wa="hr" data-wa-extra="" data-hr-cta="meter">Show me month end done for me</a>
  <details class="erp-meter-as"><summary>The assumptions, change them</summary>
    <label>Minutes a month per person on attendance and leave<input type="number" data-a="att" value="20" step="5" min="0"></label>
    <label>Minutes a month per person on salary and deductions<input type="number" data-a="pay" value="15" step="5" min="0"></label>
    <label>Cost of an hour of whoever does it, ₹<input type="number" data-a="rate" value="400" step="50" min="0"></label>
    <label>Minutes a month per salesperson on incentives<input type="number" data-a="inc" value="40" step="5" min="0"></label>
  </details>
  <p class="erp-meter-note">A planning estimate from your inputs and these assumptions, not a measurement.</p>
</div>`;

const RUN = [
  ['Punched', 'Kiosk, phone with geofence and selfie, or the biometric device’s export.', 'activity'],
  ['Counted', 'Late punches regularised, leave and comp-off counted, overtime worked out.', 'calendar'],
  ['Earned', 'Incentives from each salesperson’s real sales or margin, with clawback.', 'trend'],
  ['Computed', 'Salary, PF, ESI, PT and TDS, loans and advances, in one pay run.', 'coins'],
  ['Approved', 'The run goes through approval before anything is paid.', 'shield'],
  ['Done', 'Payslips in each person’s staff area; bank file and statutory files ready; entries in the ledger.', 'check'],
];
const RUN_TAGS = [['activity', '25 staff · 3 branches'], ['calendar', '2 late punches fixed'], ['trend', 'Priya: incentive on ₹18 lakh'], ['coins', 'PF, ESI, PT, TDS'], ['shield', 'Approved by the owner'], ['check', 'Payslips · bank file · ledger']];
const run = () => `<div class="ibx-msg" data-msg style="--n:${RUN.length}">
  <div class="ibx-msg-stage" aria-hidden="true"><div class="ibx-msg-bubble"><p>October payroll · Shree Jewellers</p><ul>${RUN_TAGS.map(([ic, t], i) => `<li data-k="${i}">${icon(ic)}${t}</li>`).join('')}</ul></div></div>
  <ol class="ibx-msg-steps">${RUN.map(([t, d, ic], i) => `<li data-k="${i}"><span class="ibx-msg-n">${icon(ic)}<b>${i + 1}</b></span><h3>${t}</h3><p>${d}</p></li>`).join('')}</ol>
</div>`;

const LEAKS = [
  ['Leak', 'trend', 'Incentives worked out in Excel, and argued about', 'Paid from real sales or margin, with clawback on returns'],
  ['Leak', 'activity', 'Buddy punching and late arrivals nobody sees', 'Geofence and selfie, or the biometric export, every day'],
  ['Leak', 'coins', 'Advances given and forgotten', 'Loans and advances deducted in payroll automatically'],
  ['Hidden cost', 'calendar', 'Leave balances in a diary', 'Balances, carry-forward and encashment counted'],
  ['Hidden cost', 'shield', 'PF, ESI and PT worked out by hand', 'Statutory exports ready for your accountant'],
  ['Hidden cost', 'scale', 'Karigar wages mixed with staff salaries', 'Karigar payments kept separate, with their own ledger and TDS'],
  ['Bottleneck', 'users', 'New joiners onboarded from a WhatsApp group', 'Onboarding tasks, documents and verification consent'],
  ['Bottleneck', 'book', 'Statutory registers kept on paper', 'Registers kept in Jwero'],
  ['Bottleneck', 'receipt', 'Exits settled on a calculator', 'Full and final worked out and posted'],
];
const leakCards = () => `<div class="ibx-flips erp-leaks" data-flips>${LEAKS.map(([k, ic, before, after], i) => `<button type="button" class="ibx-flip" style="--i:${i}" aria-pressed="false"><span class="ibx-flip-in"><span class="ibx-flip-f"><span class="ibx-flip-ico">${icon(ic)}</span><small class="erp-leak-k">${k} today</small><b>${before}</b></span><span class="ibx-flip-b"><span class="ibx-flip-ico">${icon('check')}</span><small>In Jwero HR</small><b>${after}</b></span></span></button>`).join('')}</div><p class="ibx-legend">Each card turns as you scroll. Tap one to turn it back.</p>`;

const MODULES = [
  ['attendance', 'activity', 'Attendance and shifts', 'Who is in, at every branch.', ['Kiosk punches, and phone punches with geofence and selfie', 'Biometric punches imported from ESSL and ZKTeco exports', 'Punches kept even when the connection drops', 'Shifts, rosters and regularisation', 'Overtime worked out']],
  ['leave', 'calendar', 'Leave and holidays', 'Balances nobody has to keep.', ['Leave types and approvals with reminders', 'Balances, carry-forward and encashment', 'Comp-off for festival duty', 'Holiday calendars']],
  ['payroll', 'coins', 'Payroll', 'Month end, done in one run.', ['Salary structures and components', 'PF, ESI, PT and TDS, with tax declarations', 'Pay runs with approval', 'Payslips in the staff area; Form 16 Part B summary', 'Bank file ready to upload; entries to the ledger', 'Arrears, bonus, gratuity and minimum-wage check']],
  ['incentives', 'trend', 'Incentives and targets', 'Pay for what each person really sold.', ['Incentives on sales or margin, credited to the salesperson', 'Clawback when a sale is returned', 'Targets that cascade from branch to person', 'A leaderboard for the floor']],
  ['karigars', 'scale', 'Karigar payments', 'Kept apart from staff salaries.', ['A ledger per karigar', 'TDS on karigar payments', 'A bank file for karigar payouts', 'Settlement entries to the ledger']],
  ['people', 'users', 'Hiring to exit', 'One record from offer to full and final.', ['Recruitment and offers', 'Onboarding tasks and documents', 'Verification consent', 'Loans, advances and expense claims', 'Resignation, handover and full and final']],
  ['growth', 'sparkle', 'Performance and learning', 'Better staff, measured.', ['Appraisals, peer feedback and probation', 'Scorecards and skills', 'Courses, assessments and certificates', 'Mandatory training tracked']],
  ['compliance', 'shield', 'Compliance and insight', 'Registers kept, numbers clear.', ['Statutory registers', 'PF, ESI, PT and muster exports', 'HR reports and a daily brief', 'Ask HR questions in plain words']],
];
const modules = () => `<div class="ibx-ch">${MODULES.map(([id, ic, t, d, pts]) => `<article id="${id}"><div class="cap-ico">${icon(ic)}</div><h3>${t}</h3><p>${d}</p><ul>${pts.map((p) => `<li>${p}</li>`).join('')}</ul></article>`).join('')}</div>`;

const WHO = { c: ['Staff', 'is-c'], a: ['Jwero', 'is-a'], h: ['Owner or HR', 'is-h'] };
const PATHS = [
  ['A salesperson’s month', [['Punches in at the kiosk each morning', 'c', 'activity'], ['Sells ₹18 lakh; each bill credited to her', 'a', 'receipt'], ['One sale returned; incentive clawed back', 'a', 'refresh'], ['Incentive added to the pay run', 'a', 'trend'], ['Payslip in her staff area', 'c', 'check']]],
  ['Diwali week on the floor', [['Extra shifts rostered for every branch', 'h', 'calendar'], ['Festival duty earns comp-off', 'a', 'gift'], ['Overtime worked out from punches', 'a', 'activity'], ['Leave requests held for after Bhai Dooj', 'h', 'shield'], ['Comp-off balances updated', 'a', 'check']]],
  ['A karigar paid separately', [['Job settled in the workshop', 'a', 'scale'], ['Payment on his karigar ledger', 'a', 'book'], ['TDS worked out', 'a', 'coins'], ['Karigar bank file prepared', 'a', 'download'], ['Settlement posted to the ledger', 'a', 'check']]],
  ['A new joiner to her first payslip', [['Offer accepted', 'c', 'users'], ['Onboarding tasks and documents', 'h', 'book'], ['Verification consent given', 'c', 'shield'], ['First month’s punches and leave', 'a', 'activity'], ['First payslip in her staff area', 'c', 'check']]],
];
const paths = () => `<div class="ibx-jr" data-jr>
  <div class="ibx-jr-tabs" role="tablist">${PATHS.map(([t], i) => `<button type="button" role="tab" data-jr-tab="${i}" aria-selected="${i === 0}">${t}</button>`).join('')}</div>
  ${PATHS.map(([t, steps], i) => `<div class="ibx-jr-panel${i === 0 ? ' is-on' : ''}" role="tabpanel" data-jr-panel="${i}"><h3>${t}</h3><ol class="ibx-jr-path">${steps.map(([x, k, ic], j) => `<li class="${WHO[k][1]}" style="--j:${j}"><span class="ibx-jr-node">${icon(ic)}</span><em>${WHO[k][0]}</em><span>${x}</span></li>`).join('')}</ol></div>`).join('')}
  <p class="ibx-legend"><span class="is-c">Staff</span> <span class="is-ai">Jwero</span> on its own · <span class="is-human">Owner or HR</span></p>
</div>`;


// Six parts of HR, lit by what happens in a month.
const PARTS = [
  ['activity', 'Attendance', 'Who is in, at every branch.', ['Kiosk punches', 'Phone punches with geofence and selfie', 'Biometric exports imported']],
  ['calendar', 'Leave', 'Balances nobody keeps.', ['Approvals with reminders', 'Carry-forward and encashment', 'Comp-off for festival duty']],
  ['trend', 'Incentives', 'From real sales.', ['Each bill credited to the salesperson', 'On sales or margin, on your slabs', 'Clawback on returns']],
  ['coins', 'Payroll', 'One run a month.', ['PF, ESI, PT and TDS', 'Loans and advances deducted', 'Approval before paying']],
  ['scale', 'Karigars', 'Kept apart.', ['A ledger per karigar', 'TDS on payments', 'Their own bank file']],
  ['book', 'Files', 'Ready for the accountant.', ['Bank file', 'PF, ESI, PT and muster exports', 'Entries posted to the ledger']],
];
const FEED = [
  ['in', 'Branch 2 · 14 of 15 in by 10:15', 0],
  ['note', 'Ravi late twice · regularisation request', 0],
  ['in', 'Leave approved · Anita, 2 days', 1],
  ['in', 'Priya · ₹18 lakh sold · incentive worked out', 2],
  ['out', 'Pay run ready · waiting for your approval', 3],
  ['in', 'Karigar Ramesh · job settled, TDS deducted', 4],
  ['out', 'Bank file and PF, ESI exports ready', 5],
];
const partCard = ([ic, t, d, items], k) => `<details class="ibx-dnode" data-d="${k}"><summary><span class="ibx-dnode-ico">${icon(ic)}</span><b>${t}</b><small>${d}</small></summary><ul>${items.map((x) => `<li>${x}</li>`).join('')}</ul></details>`;
const board = () => `<div class="ibx-biz" data-biz>
  <div class="ibx-biz-side">${PARTS.slice(0, 3).map((x, k) => partCard(x, k)).join('')}</div>
  <div class="ibx-biz-thread" aria-hidden="true"><div class="ibx-biz-head">${icon('activity')}<b>This month, on your screen</b></div><ol>${FEED.map(([w, t, d]) => `<li class="is-${w}" data-d="${d}">${t}</li>`).join('')}</ol></div>
  <div class="ibx-biz-side">${PARTS.slice(3).map((x, k) => partCard(x, k + 3)).join('')}</div>
</div><p class="ibx-legend">Illustrative. Each line lights the part of HR it comes from. Tap a part to see what it does.</p>`;

// What runs on its own, and what the owner decides.
const FORK = [
  ['is-a', 'sparkle', 'Runs on its own', ['Punches counted and overtime worked out', 'Leave balances and comp-off', 'Incentives from each bill, with clawback', 'PF, ESI, PT, TDS and advances in the pay run'], 'check', 'Nobody opens Excel at month end'],
  ['is-h', 'users', 'Waits for you', ['Leave and regularisation requests', 'The pay run, before anything is paid', 'Incentive slabs and salary changes'], 'shield', 'The person you choose approves'],
];
const fork = () => `<div class="ibx-fork" data-gfx>
  <div class="ibx-fork-in">${icon('activity')}<b>The month runs</b><small>Punches, leave, sales, returns, advances</small></div>
  <svg class="ibx-fork-lines" viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true"><path class="is-a" d="M200 0 C200 30 100 30 100 60"/><path class="is-h" d="M200 0 C200 30 300 30 300 60"/></svg>
  <div class="ibx-fork-legs">${FORK.map(([c, ic, t, rules, ric, r]) => `<div class="ibx-fork-leg ${c}"><h3>${icon(ic)}${t}</h3><ul>${rules.map((x) => `<li>${x}</li>`).join('')}</ul><p class="ibx-fork-out">${icon(ric)}${r}</p></div>`).join('')}</div>
</div>`;


// 1. An incentive, worked out in front of you.
const incentiveTry = () => `<div class="erp-meter hr-inc" data-hrinc>
  <p class="erp-meter-t">${icon('trend')}<b>Priya’s incentive this month</b></p>
  <label><span>Her sales this month <b data-o="sales"></b></span><input type="range" data-i="sales" min="100000" max="10000000" step="50000" value="1800000"></label>
  <label><span>A sale returned <b data-o="ret"></b></span><input type="range" data-i="ret" min="0" max="1000000" step="10000" value="120000"></label>
  <label><span>Your slab, % of sales <b data-o="rate"></b></span><input type="range" data-i="rate" min="0.25" max="3" step="0.25" value="1"></label>
  <div class="hr-inc-sum"><p><span>Incentive on sales</span><b data-o="earned"></b></p><p class="is-claw"><span>Clawed back on the return</span><b data-o="claw"></b></p><p class="is-net"><span>Paid with her salary</span><b data-o="net"></b></p></div>
  <p class="erp-meter-note">Each bill is credited to the salesperson who made it. Slabs can be on sales or on margin; this example uses one flat slab on sales.</p>
</div>`;

// 2. A payslip, and the run that waits for approval.
const SLIP = [['Basic and allowances', '₹22,000', ''], ['Incentive', '₹16,800', 'is-plus'], ['Overtime, Diwali week', '₹1,450', 'is-plus'], ['PF', '₹1,800', 'is-minus'], ['ESI', 'Not due', 'is-minus'], ['Professional tax', '₹200', 'is-minus'], ['TDS', '₹1,150', 'is-minus'], ['Advance, instalment 2 of 4', '₹2,500', 'is-minus']];
const payslip = () => `<div class="hr-slip-wrap" data-gfx>
  <div class="hr-slip"><div class="hr-slip-h"><b>Priya Shah · Sales</b><small>October · Branch 2</small></div><ul>${SLIP.map(([k, v, c]) => `<li class="${c}"><span>${k}</span><b>${v}</b></li>`).join('')}</ul><p class="hr-slip-net"><span>Net pay</span><b>₹34,600</b></p></div>
  <div class="hr-run"><p class="pc-tag">PAY RUN · OCTOBER</p><ul><li><span>Staff</span><b>25</b></li><li><span>Gross</span><b>₹7.9 lakh</b></li><li><span>Incentives</span><b>₹1.1 lakh</b></li><li><span>Advances recovered</span><b>₹18,500</b></li><li><span>PF, ESI, PT, TDS</span><b>Worked out</b></li></ul><p class="hr-run-ok">${icon('shield')}Waiting for your approval</p><span class="btn btn-primary hr-run-btn" aria-hidden="true">Approve run</span><small>After approval: payslips in each person’s staff area, the bank file, statutory exports and ledger entries.</small></div>
</div><p class="ibx-legend">Illustrative figures. Nothing is paid before the run is approved.</p>`;

// 5. Branches today, and 6. biometric devices.
const BR = [['Main road', 14, 15, 1, 0], ['Mall', 8, 9, 0, 1], ['Workshop', 22, 24, 2, 0]];
const branches = () => `<div class="hr-br" data-gfx>${BR.map(([n, inn, all, late, leave], i) => `<article style="--i:${i}"><h3>${n}</h3><p class="hr-br-n"><b>${inn}</b>/${all} in</p><i class="hr-br-bar"><em style="width:${Math.round(inn / all * 100)}%"></em></i><ul><li>${icon('activity')}${late} late</li><li>${icon('calendar')}${leave} on leave</li><li>${icon('shield')}Geofence and selfie</li></ul></article>`).join('')}</div>
<div class="hr-bio"><p class="pc-tag">ALREADY HAVE A BIOMETRIC DEVICE?</p><ol><li>${icon('activity')}<span><b>Export from the device</b>ESSL, ZKTeco and similar devices export punches</span></li><li>${icon('book')}<span><b>Import into Jwero</b>Punches matched to each person</span></li><li>${icon('check')}<span><b>Counted</b>Late marks, overtime and leave worked out</span></li></ol><p class="erp-meter-note">Punches come in from the device’s export. You can also use a kiosk, or phone punches with geofence and selfie.</p></div>
<p class="ibx-legend">Illustrative.</p>`;

// 4. Karigars, kept apart.
const KLED = [['Job 2231', 'Temple necklace settled against the norm', '₹6,400', '₹6,400'], ['Job 2240', 'Two bangles settled', '₹3,100', '₹9,500'], ['TDS', 'Worked out on the month’s payments', '−₹95', '₹9,405'], ['Bank file', 'Karigar payout file prepared', '₹9,405', '₹0'], ['Ledger', 'Settlement entries posted', '', 'Closed']];
const karigarLedger = () => `<div class="erp-led" data-led>
  <div class="erp-led-head"><span>Step</span><span>Karigar Ramesh · October</span><span>${icon('coins')}Amount</span><span>${icon('book')}Owed</span></div>
  <ol>${KLED.map(([s, d, r, g], i) => `<li data-k="${i}"><b>${s}</b><span>${d}</span><span class="erp-led-r">${r}</span><span class="erp-led-g">${g}</span></li>`).join('')}</ol>
</div><p class="ibx-legend">Illustrative. Karigar payments sit on their own ledger, apart from staff salaries.</p>`;

// 8. What staff see.
const staffView = () => `<div class="hr-phone" data-gfx><div class="hr-phone-in">
  <p class="hr-phone-h"><b>Hi Priya</b><small>Staff area · web</small></p>
  <span class="btn btn-primary hr-phone-punch" aria-hidden="true">${icon('activity')}Punch in · Branch 2</span>
  <div class="hr-phone-g"><p><small>Leave left</small><b>9 days</b></p><p><small>Incentive so far</small><b>₹11,200</b></p><p><small>Target</small><b>72%</b></p><p><small>Payslip</small><b>September ↓</b></p></div>
  <p class="hr-phone-req">${icon('calendar')}Leave request · 14 to 15 Nov · <em>approved</em></p>
</div></div>
<ul class="hr-phone-pts"><li>Punch in with geofence and selfie</li><li>Leave balance and requests</li><li>Payslips and incentives earned so far</li><li>Fewer “what is my salary” questions for you</li></ul>`;

// 7. Moving over.
const FROMS = [['Excel', 'Salary sheets and attendance registers'], ['your current payroll', 'Employees, structures and balances']];
const hrFrom = () => `<div class="ibx-jr hr-from" data-jr data-jr-still>
  <div class="ibx-jr-tabs" role="tablist">${FROMS.map(([n], i) => `<button type="button" role="tab" data-jr-tab="${i}" aria-selected="${i === 0}">From ${n}</button>`).join('')}</div>
  ${FROMS.map(([n, what], i) => `<div class="ibx-jr-panel${i === 0 ? ' is-on' : ''}" role="tabpanel" data-jr-panel="${i}"><h3>Moving from ${n} to Jwero HR</h3><ol class="ibx-jr-path">${[['Export', what + ', with us.'], ['Set your rules', 'Leave policy, shifts, statutory deductions and incentive slabs.'], ['Run one month side by side', 'Compare every payslip with ' + n + '.'], ['Approve the first run', 'Payslips, bank file and statutory exports.'], ['Switch off ' + n, 'Month end on one record.']].map(([t, d], j) => `<li class="${j === 2 ? 'is-h' : 'is-a'}" style="--j:${j}"><span class="ibx-jr-node"><b>${j + 1}</b></span><em>${t}</em><span>${d}</span></li>`).join('')}</ol></div>`).join('')}
</div>`;

// 9. Proof per business type, and a hand-off to whoever signs payroll.
const Q = require('./positioning').QUOTES;
const PROOF = { single: 0, chain: 4, maker: 0 };
const proofCard = (k) => { const q = Q[PROOF[k]]; return q ? `<figure class="erp-proof"><blockquote>“${q[0]}”</blockquote><figcaption>${q[1]}, ${q[2]}</figcaption></figure>` : ''; };
const shareBand = () => `<div class="pass-box hr-share"><div><p class="eyebrow">FOR YOUR ACCOUNTANT OR HR PERSON</p><h2>Does someone else run payroll for you?</h2><p>Send them this page on WhatsApp, with your staff numbers. Jwero hands them the bank file and the PF, ESI and PT exports each month.</p></div><a class="btn btn-primary" href="#" data-hr-share data-hr-cta="share">Send to my accountant</a></div>`;

// "I run a…"
const ICP = [
  ['single', 'store', 'A single store', 'Start with incentives and payroll: each salesperson paid on real sales, with clawback, and month end in one approved run.', 0, 'incentive-try', 'trial', 'Start free for your store'],
  ['chain', 'branches', 'A chain or franchise', 'Start with attendance across branches: kiosk or phone punches with geofence, shifts for festival weeks, one pay run for everyone.', 1, 'branches', 'demo', 'Book a 30-minute demo for a chain'],
  ['maker', 'scale', 'A workshop or manufacturer', 'Start with karigar payments: a ledger per karigar, TDS, and their own bank file, kept apart from staff salaries.', 2, 'karigar-ledger', 'trial', 'Start free for your workshop'],
];
const door = ([k, , , , , , d, label], cls) => d === 'demo'
  ? `<a class="${cls}" href="/book-demo" data-hr-cta="door-${k}">${label}</a>`
  : `<a class="${cls}" href="https://os.jwero.ai/signup?utm_source=jwero.ai&utm_medium=hr-${k}" rel="noopener" data-trial data-hr-cta="door-${k}">${label}</a>`;
const icpBox = () => `<div class="erp-icp soc-icp" data-dc-icp data-door="hr-door" data-pfx="hr" data-cfg='${JSON.stringify(Object.fromEntries(ICP.map(([k, , , , j, lead]) => [k, [j, lead]])))}'>
  <div class="erp-icp-opts" role="tablist" aria-label="I run a…">${ICP.map(([k, ic, t], i) => `<button type="button" role="tab" data-k="${k}" aria-selected="${i === 0}">${icon(ic)}<span>${t}</span></button>`).join('')}</div>
  ${ICP.map((e, i) => `<div class="erp-icp-panel${i === 0 ? ' is-on' : ''}" data-panel="${e[0]}"><p>${e[3]}</p><div class="erp-icp-go"><a href="#month-end">Month end ↓</a><a href="#board">What you see ↓</a><a href="#journeys">Your journey ↓</a><a href="#${e[5]}">${{ 'incentive-try': 'Work out an incentive', branches: 'Branches today', 'karigar-ledger': 'A karigar’s month' }[e[5]]} ↓</a></div><p class="erp-icp-door">${door(e, 'btn btn-primary')}</p>${proofCard(e[0])}</div>`).join('')}
</div>`;
const prog = () => `<nav class="erp-prog" data-erp-prog aria-label="On this page"><div class="erp-prog-in">
  <ol>${[['month-end', 'Month end'], ['board', 'Watch'], ['fork', 'On its own'], ['leaks', 'Leaks'], ['modules', 'Features'], ['journeys', 'Journeys']].map(([id, t], i) => `<li><a href="#${id}" data-p="${id}"><b>${i + 1}</b>${t}</a></li>`).join('')}</ol>
  <span class="erp-prog-doors">${ICP.map((e) => door(e, 'btn btn-primary erp-prog-cta hr-door')).join('')}</span>
</div><i class="erp-prog-fill" aria-hidden="true"></i></nav>`;

const READS = [['/products/erp', 'ERP: the ledger payroll posts to, and the karigar jobs'], ['/products/crm', 'CRM: the sales each incentive comes from'], ['/products/inbox', 'One Inbox: who answers which customer']];

const CMP = [
  ['Attendance', 'A register', 'An app or a device', 'Kiosk, phone with geofence and selfie, or biometric exports'],
  ['Salary', 'Excel formulas', 'Payroll', 'Pay runs with PF, ESI, PT and TDS, approved before paying'],
  ['Sales incentives', 'Worked out by hand', 'Imported', 'From real sales or margin, with clawback'],
  ['Karigars', 'Mixed with staff', 'Not covered', 'Their own ledger, TDS and bank file'],
  ['Hiring to exit', 'Files and folders', 'Separate modules', 'Offer to full and final, one record'],
  ['Books', 'Typed in again', 'Export', 'Payroll entries posted to the ledger'],
];
const cmpTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Excel and a register</th><th>A generic HR app</th><th>Jwero HR</th></tr></thead><tbody>${CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;

const HOW = [
  ['Add your staff', 'Import employees, salary structures and documents.'],
  ['Set up attendance', 'Kiosk, phone punches with geofence and selfie, or your biometric device’s exports.'],
  ['Set your rules', 'Leave policy, shifts, statutory deductions and incentive slabs.'],
  ['Run the first payroll', 'Check, approve, and publish payslips to the staff area.'],
  ['Hand over the files', 'Bank file and PF, ESI and PT exports for your accountant.'],
];

const faqs = [
  { q: 'What is the best HR and payroll software for a jewellery shop?', a: 'The best HR and payroll software for jewellers records attendance at every branch, runs salary with PF, ESI, PT and TDS, pays sales incentives from real sales, keeps karigar payments separate, and posts everything to the books. Jwero HR does all of this on the same platform as billing and stock.' },
  { q: 'How do jewellery shops track staff attendance?', a: 'Jewellery shops use kiosk punches, phone punches with geofence and selfie, or biometric devices. Jwero HR takes all three, importing ESSL and ZKTeco biometric exports, and counts late punches, leave and overtime.' },
  { q: 'How are sales incentives calculated for jewellery staff?', a: 'Sales incentives are usually a share of each salesperson’s sales or margin, on slabs. Jwero credits each sale to the salesperson, works out the incentive and claws it back if the sale is returned.' },
  { q: 'Can jewellery payroll software handle PF, ESI, PT and TDS?', a: 'Jwero HR works out PF, ESI, PT and TDS in each pay run, with tax declarations, and prepares the export files and a Form 16 Part B summary for your accountant to file.' },
  { q: 'Are karigars paid through payroll?', a: 'Karigar payments in Jwero are kept separate from staff salaries, with their own ledger, TDS and bank file, and settlement entries posted to the books.' },
  { q: 'Does Jwero pay salaries directly into bank accounts?', a: 'Jwero prepares a bank file after the pay run is approved, and a person uploads it in your banking portal to pay.' },
  { q: 'Where do staff see their payslips?', a: 'Each staff member sees payslips, leave, loans and expense claims in their own self-service area in Jwero.' },
  { q: 'Can staff take advances or loans?', a: 'Jwero HR records staff loans and advances and deducts the repayments in payroll automatically.' },
  { q: 'Does it handle onboarding and exit?', a: 'Jwero HR covers recruitment and offers, onboarding tasks and documents, verification consent, and resignation, handover and full and final settlement.' },
  { q: 'Does Jwero keep statutory registers?', a: 'Jwero HR keeps statutory registers and prepares PF, ESI, PT and muster exports; filing stays with your accountant.' },
  { q: 'Can I ask HR questions in plain words?', a: 'Jwero’s AI assistant answers HR questions from your own data, such as who has the most leave left this month.' },
  { q: 'How much does HR and payroll software cost for a jewellery shop?', a: 'Jwero starts with a free trial that includes every module; your price is shown inside your account after the trial.' },
];

const hr = {
  slug: 'products/hr-payroll',
  title: 'HR & Payroll Software for Jewellers: Attendance, Incentives, Karigars | Jwero',
  description: 'HR and payroll for jewellery shops: attendance at every branch, salary with PF, ESI, PT and TDS, sales incentives from real sales, karigar payments kept separate, hiring to exit, and payroll posted to the books.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero HR & Payroll', alternateName: ['Payroll software for jewellery shops', 'Jewellery staff attendance software', 'Sales incentive software for jewellers'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'HR and payroll for jewellers: kiosk and phone attendance with geofence and selfie, biometric exports, shifts, leave, pay runs with PF, ESI, PT and TDS, payslips in a staff area, bank file, sales incentives on sales or margin with clawback, targets, karigar payments separate from payroll, loans, expenses, onboarding to full and final, appraisals, training, statutory registers and HR reports.',
    audience: { '@type': 'BusinessAudience', audienceType: 'Jewellery retailers, chains and manufacturers' },
    featureList: 'Attendance, geofence, selfie, kiosk, biometric import, shifts, rosters, leave, comp-off, payroll, PF, ESI, PT, TDS, Form 16 Part B, payslips, bank file, sales incentives, clawback, targets, karigar payments, overtime, loans, expense claims, onboarding, full and final, appraisals, training, statutory registers, HR reports',
    dateModified: '2026-10-10',
    url: 'https://jwero.ai/products/hr-payroll', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to run payroll for a jewellery shop', step: HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('HR & Payroll'),
  faqs,
  body: `
${L.hero({
  eyebrow: 'Attendance, payroll and incentives, done',
  h1: 'Every punch counted. <span class="h1-turn">Every rupee earned, paid right.</span>',
  sub: 'Attendance at every branch, salary with PF, ESI, PT and TDS, incentives from what each person really sold, karigars paid separately, and everything posted to the books.',
  primary: { href: '#', label: 'Show me month end done for me', wa: 'hr' },
  secondary: { href: '/book-demo', label: 'Book a demo' },
})}

${prog()}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">What is Jwero HR & Payroll?</h2><p>Jwero HR & Payroll runs a jewellery business’s people work: attendance from kiosks, phones or biometric exports, shifts and leave, pay runs with PF, ESI, PT and TDS, sales incentives from real sales with clawback, karigar payments kept separate, loans and expenses, hiring to full and final, appraisals and training, with every entry posted to the books.</p></div></section>

${L.section(`${L.sectionHead('BUILT AROUND HOW YOU RUN', 'I run a…', 'Pick your business. The page puts your journey and your next step first.')}${icpBox()}`, { tone: 'tint', id: 'for-you' })}

${L.section(`${L.sectionHead('MONTH END', 'How does payroll run for a jewellery shop?', 'Six steps, from the punch to the payslip.')}${run()}`, { id: 'month-end' })}

${L.section(`${L.sectionHead('INCENTIVES', 'How much incentive should a salesperson get?', 'Move the sliders. Returns are clawed back.')}${incentiveTry()}`, { tone: 'tint', id: 'incentive-try' })}

${L.section(`${L.sectionHead('PAYSLIP', 'What does a jewellery salesperson’s payslip look like?', 'Every line worked out, and the run waits for you.')}${payslip()}`, { id: 'payslip' })}

${L.section(`${L.sectionHead('BRANCHES TODAY', 'Who is in at every branch?', 'Kiosk, phone or your biometric device.')}${branches()}`, { tone: 'tint', id: 'branches' })}

${L.section(`${L.sectionHead('KARIGARS', 'How are karigars paid apart from staff?', 'One karigar’s month, on his own ledger.')}${karigarLedger()}`, { id: 'karigar-ledger' })}

${L.section(`${L.sectionHead('ONE SCREEN', 'What does HR look like during the month?', 'Six parts, lit as the month runs.')}${board()}`, { tone: 'tint', id: 'board' })}

${L.section(`${L.sectionHead('ON ITS OWN', 'What runs by itself, and what waits for you?', '')}${fork()}`, { id: 'fork' })}

${L.section(`${L.sectionHead('WHAT STAFF SEE', 'What does each person see?', 'Their own staff area, on the web.')}${staffView()}`, { tone: 'tint', id: 'staff-view' })}

${L.section(`${L.sectionHead('LEAKS CLOSED', 'Where does a jewellery shop lose money on people?', 'Nine places, closed.')}${leakCards()}`, { id: 'leaks' })}

${L.section(`${L.sectionHead('EVERYTHING IN IT', 'What does Jwero HR cover?', 'Eight areas, one record per person.')}${modules()}`, { id: 'modules' })}

${L.section(`${L.sectionHead('JOURNEYS', 'How it runs on a real floor.', 'Four real paths.')}${paths()}`, { tone: 'tint', id: 'journeys' })}

${L.section(`${L.sectionHead('COMPARE', 'Excel and a register, a generic HR app, or Jwero.', '')}${hrFrom()}${cmpTable()}`, { id: 'compare' })}

${L.section(`${L.sectionHead('READ MORE', 'Where HR connects.', '')}<div class="erp-map">${READS.map(([h, t]) => `<a href="${h}"><b>${t}</b></a>`).join('')}</div>`)}

${L.section(shareBand(), { tone: 'tint', id: 'share' })}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to run payroll for a jewellery shop.', 'Five steps.')}${L.steps(HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.oneSystemBlock([
  'Incentives come from the same bills the counter writes, so nobody argues about the number.',
  'Karigar payments sit next to the jobs they settle, not in the staff payroll.',
  'Every pay run posts to the same ledger as sales and purchases.',
])}

${L.section(`<p class="cta-note" style="text-align:center">Last updated 10 October 2026.</p>`)}

${L.ctaBand('Month end, done for you.', 'Tell us your staff and branches. We will show October’s payroll run in Jwero.', 'hr')}
`,
};

module.exports = [hr];
module.exports.heroPiece = () => meter();
