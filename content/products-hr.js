const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

// HR & payroll, rebuilt 2026-10-07. Confirmed by Jwero: payslips on WhatsApp,
// staff screens in multiple languages, biometric and face-scanner devices.
// HR has nothing for karigars; karigar wages live in manufacturing.
const HR_FLOW = [
  ['Attendance', 'Month closes · face scanner and phone punches · 2 late punches regularised'],
  ['Leave', 'Leave and comp-off counted from approved requests'],
  ['Incentive', 'Priya sold ₹18 lakh · incentive worked out from her real sales'],
  ['Payroll', 'PF, ESI, PT and TDS worked out · run approved'],
  ['Payslips', 'Sent to every staff member on WhatsApp'],
  ['Files', 'Bank file and PF, ESI and PT files ready for your accountant'],
];
const hrFlow = () => `<div class="wa-story" data-wa-story>
  <div class="mkt-card" aria-hidden="true"><p class="pc-tag">PAYROLL · MONTH END</p>${HR_FLOW.map(([t, d], k) => `<p class="wa-msg mkt-row" data-i="${k}"><small>${t}</small>${d}</p>`).join('')}<p class="cta-note" style="margin:8px 0 0">Illustrative.</p></div>
  <ol class="wa-steps">${HR_FLOW.map(([t, d]) => `<li><b>${t}</b><span>${d.split(' · ')[0]}</span></li>`).join('')}</ol>
</div>`;
const HR_CMP = [
  ['Attendance', 'A register', 'App or device', 'Biometric, face scanner, phone or kiosk, with geo-fence and selfie'],
  ['Salary', 'Excel formulas', 'Payroll', 'Payroll with PF, ESI, PT and TDS'],
  ['Sales incentives', 'Worked out by hand', 'Imported', 'From real sales or margin, with clawback'],
  ['Payslips', 'Printed', 'Email or portal', 'On WhatsApp'],
  ['Staff app', 'None', 'English', 'Self-service in multiple languages'],
  ['Hiring to exit', 'Files and folders', 'Separate modules', 'Recruitment to full and final, one record'],
  ['Who sees salaries', 'Whoever opens the file', 'Admin', 'Separate view, edit and approve permissions'],
];
const hrTable = () => `<div class="tbl-wrap"><table class="tbl wa-cmp"><thead><tr><th></th><th>Excel and a register</th><th>A generic HR app</th><th>Jwero</th></tr></thead><tbody>${HR_CMP.map(([r, a, b, c]) => `<tr><td><strong>${r}</strong></td><td>${a}</td><td>${b}</td><td class="wa-cmp-us">${c}</td></tr>`).join('')}</tbody></table></div>`;
const HR_HOW = [
  ['Add your staff', 'Import employees, salary structures and documents.'],
  ['Set up attendance', 'Connect biometric or face-scanner devices, or use phone and kiosk punches.'],
  ['Set your rules', 'Leave policy, shifts, statutory deductions and incentive slabs.'],
  ['Run the first payroll', 'Check, approve, and send payslips on WhatsApp.'],
  ['Hand over the files', 'Bank file and PF, ESI, PT and Form 16 files go to your accountant.'],
];
const hrFaqs = [
  { q: 'What is HR and payroll software for a jewellery shop?', a: 'Software that records attendance, works out salaries with PF, ESI, PT and TDS, pays sales incentives, and keeps staff records from hiring to exit. Jwero does this on the same record as your sales.' },
  { q: 'How do I track staff attendance in a jewellery shop?', a: 'With biometric or face-scanner devices, or punches from a phone or kiosk with geo-fencing and a selfie. Late punches can be regularised and leave is counted automatically.' },
  { q: 'How are sales incentives calculated?', a: 'From each person’s real sales or margin, on the slabs you set, with clawback if a sale is returned. Try the calculator on this page.' },
  { q: 'Do staff get payslips on WhatsApp?', a: 'Yes. Payslips go to each staff member on WhatsApp, and are also in the staff app.' },
  { q: 'Can staff use the app in their language?', a: 'Yes. Staff self-service screens are available in multiple languages.' },
  { q: 'Does the bank file pay people?', a: 'It prepares a ready-to-upload bank file; a person uploads it in your banking portal.' },
  { q: 'Does this replace my accountant?', a: 'No. PF, ESI, PT and TDS are worked out and the files prepared, and your accountant files them.' },
  { q: 'Who can see salary data?', a: 'Seeing, editing and approving payroll are separate permissions, so a manager can approve leave without seeing salaries.' },
  { q: 'Does it pay karigars?', a: 'Karigar wages are settled in the manufacturing module, by piece, weight or day.' },
];
const hrPayroll = {
  slug: 'products/hr-payroll',
  title: 'Jewellery HR & Payroll Software: Attendance, Payroll, Incentives | Jwero',
  description: 'HR and payroll software for jewellery shops: biometric and face-scanner attendance, payroll with PF, ESI, PT and TDS, sales incentives from real sales, payslips on WhatsApp, and a staff app in multiple languages.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero HR & Payroll', alternateName: ['Payroll software for jewellery shops', 'Staff attendance app for jewellers', 'Sales incentive software for jewellers'], applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'HR and payroll for jewellery businesses: biometric, face-scanner, phone and kiosk attendance with geo-fencing and selfie; leave and shifts; payroll with PF, ESI, PT and TDS; payslips on WhatsApp; bank and statutory files; sales incentives with clawback; loans and reimbursements; recruitment to full and final; a staff app in multiple languages.',
    url: 'https://jwero.ai/products/hr-payroll', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: 'How to move jewellery shop payroll and attendance off Excel', step: HR_HOW.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
  breadcrumbs: BC('HR & Payroll'),
  faqs: hrFaqs,
  body: `
${L.hero({
  eyebrow: 'HR · PAYROLL · ATTENDANCE',
  h1: 'Jewellery HR and payroll software: attendance, salaries and sales incentives, in one place.',
  sub: 'Biometric or phone attendance, payroll with PF, ESI, PT and TDS, incentives from each person’s real sales, and payslips on WhatsApp. On the same record as the sales your team makes.',
  primary: { href: '#', label: 'Show me a payroll run', wa: 'hrpayroll' },
  secondary: { href: '/platform', label: 'See the full platform' },
})}

${L.section(`${L.sectionHead('ONE MONTH END, START TO FINISH', 'From punches to payslips, without Excel.', '')}${hrFlow()}`, { tone: 'tint' })}

${L.section(`${L.sectionHead('SIX JOBS, ONE TEAM RECORD', 'What HR and payroll software has to do in a jewellery shop.', '')}<div class="wa-jobs">
  <article><h3>1. Attendance you can trust</h3><p>Biometric and face-scanner devices, or phone and kiosk punches with geo-fence and selfie; leave, shifts and comp-off.</p><a href="/products/multi-store">Branches →</a></article>
  <article><h3>2. Payroll done right</h3><p>Salary structures, overtime, PF, ESI, PT and TDS; a bank file and statutory files for your accountant.</p><a href="/products/billing-finance">Accounts →</a></article>
  <article><h3>3. Incentives from real sales</h3><p>Worked out from each person’s sales or margin on your slabs, with clawback on returns.</p><a href="/blog/jewellery-staff-incentives-targets">Incentives and targets →</a></article>
  <article><h3>4. Payslips on WhatsApp</h3><p>Every payslip sent on WhatsApp, and in the staff app.</p><a href="/products/whatsapp">WhatsApp →</a></article>
  <article><h3>5. Hiring to exit</h3><p>Recruitment, onboarding checklists, documents, reviews, loans and reimbursements, and full and final settlement.</p><a href="/products/training-lms">Training →</a></article>
  <article><h3>6. A staff app in their language</h3><p>Attendance, leave, payslips, loans and tax declarations on their phone, in multiple languages; salaries visible only to those you allow.</p><a href="/platform/ai-workforce">Permissions →</a></article>
</div>`)}

${L.section(`${L.sectionHead('SALES INCENTIVE CALCULATOR', 'Work out a salesperson’s incentive.', 'Your slabs, your numbers.')}<div class="callc" data-hrc>
  <div class="callc-in">
    <label>Sales this month, ₹<input type="number" inputmode="numeric" data-hr="s" value="1800000" min="0" step="10000"></label>
    <label>Monthly target, ₹<input type="number" inputmode="numeric" data-hr="t" value="1500000" min="0" step="10000"></label>
    <label>Incentive up to target, %<input type="number" inputmode="decimal" data-hr="a" value="0.5" min="0" step="0.1"></label>
    <label>Incentive above target, %<input type="number" inputmode="decimal" data-hr="b" value="1" min="0" step="0.1"></label>
  </div>
  <div class="callc-out" aria-live="polite">
    <p><span>On sales up to target</span><b data-hr-o="a">₹0</b></p>
    <p><span>On sales above target</span><b data-hr-o="b">₹0</b></p>
    <p class="callc-save"><span>Incentive this month</span><b data-hr-o="t">₹0</b></p>
    <p class="cta-note">Jwero works this out from real sales each month, and claws back on returns.</p>
  </div>
</div>`, { tone: 'tint' })}

${L.section(`${L.sectionHead('COMPARE', 'Excel and a register, a generic HR app, or Jwero.', '')}${hrTable()}`)}

${L.section(`${L.sectionHead('GETTING STARTED', 'How to move payroll and attendance off Excel.', 'Five steps.')}${L.steps(HR_HOW.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.honestGapsBlock([
  'The bank file is uploaded by a person in your banking portal; Jwero does not move money.',
  'PF, ESI, PT and Form 16 files are prepared for your accountant to file.',
])}

${L.oneSystemBlock([
  'Incentives come from the same sales the counter and CRM record, not a spreadsheet at month end.',
  'Payroll, leave and approvals sit in the same activity log as the rest of the business.',
  'Karigar wages are settled in <a href="/products/manufacturing">manufacturing</a>, against the work and the gold.',
])}

${L.ctaBand('Run payroll without Excel.', 'Bring last month’s attendance and salaries; we will run them in Jwero with you.', 'hrpayroll')}
`,
};

module.exports = [hrPayroll];
