const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Products', '/products'], [label]];

const hrPayroll = {
  slug: 'products/hr-payroll',
  title: 'HR & Payroll Software for Jewellery Businesses | Jwero',
  description: 'Payroll, karigar wage settlement, attendance, leave, onboarding, recruitment and performance — on the same record as your customers and sales.',
  schema: {
    '@context': 'https://schema.org', '@type': 'SoftwareApplication',
    name: 'Jwero HR & Payroll', applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
    description: 'Attendance-aware payroll with statutory deductions, karigar rate-card wage settlement, attendance and leave, onboarding through offboarding, recruitment, performance, learning, incentives, loans and reimbursements — on the same platform record as sales and customers.',
    url: 'https://jwero.ai/products/hr-payroll', isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero', url: 'https://jwero.ai' },
  },
  breadcrumbs: BC('HR & Payroll'),
  faqs: [
    { q: 'Does this replace my accountant?', a: 'No. Payroll computes PF, ESI, PT and TDS and generates the statutory export files — PF ECR, ESI CSV, PT CSV, Form 16 / Form 24Q — but your accountant still files them with the government. Nothing here has a government-portal integration.' },
    { q: 'Does the bank file actually pay people?', a: 'No. Payroll produces a ready-to-upload NEFT-style bank file, but it does not move money or connect to any bank API. A person uploads it in your own banking portal.' },
    { q: 'Is this a full biometric attendance system?', a: 'No. Attendance is phone- and kiosk-based, with optional geo-fencing and selfie-on-punch verification. There is no fingerprint or face-scanner hardware, and no biometric-device SDK involved.' },
    { q: 'Can I run payroll for karigars the same way as staff?', a: 'Not the same system, but a matching one. Karigars settle through a separate piece-rate, weight-rate, hourly or daily rate-card engine, with its own compute-approve-pay lifecycle, advance recovery and contractor TDS. The difference: settlement is a ledger (khata) entry, not a bank file — there is no bank-file generation for karigar payouts.' },
    { q: 'Can a karigar dispute a work log?', a: 'They can flag an entry as disputed, which notifies their reporting manager. That is a flag for review, not a resolution workflow — there is no approve/reject step or ledger mutation tied to a dispute today.' },
    { q: 'Who can see salary data?', a: 'Payroll visibility, editing and approval are three separate, independently assignable permissions. A manager can see team attendance and decide approvals without ever getting access to compensation or salary figures.' },
  ],
  body: `
${L.hero({
  eyebrow: 'HR & PAYROLL',
  h1: 'Attendance, statutory payroll and karigar settlement — on the same record as the sale.',
  sub: 'Most jewellers run payroll in one tool, attendance in another, and karigar wages on paper — none of it talking to sales or the customer record. Jwero runs HR and payroll on the same platform as everything else: one login, one record, one place approvals happen.',
  primary: { href: '#', label: 'Show me a payroll run', wa: 'hrpayroll' },
  secondary: { href: '/platform', label: 'See the full platform' },
})}

${L.section(
  `${L.sectionHead('THE TWO HEADLINE CAPABILITIES', 'Staff payroll, and a karigar wage system no generic HRMS has.', '')}
  ${L.cards([
    { title: 'Payroll', text: 'Attendance-aware, with PF, ESI, PT and TDS computed through an admin-configurable statutory pack. Multiple salary structures, overtime, incentives, loan EMIs and reimbursements fold in automatically each run, through compute → submit → approve → pay with maker-checker approval.' },
    { title: 'Bank file & statutory exports', text: 'Payroll produces payslips, a ready-to-upload NEFT-style bank file, and statutory export files — PF ECR, ESI CSV, PT CSV, muster roll, Form 16 / Form 24Q — for your accountant to file.' },
    { title: 'Karigar wage settlement', text: 'A rate-card system for artisans — piece-rate, weight-rate, hourly or daily — with logged work, supervisor approval, advance recovery and contractor TDS (194C/194J), through the same compute-approve-pay lifecycle.', link: { href: '/roles/karigar', label: 'See the karigar role page' } },
    { title: 'Attendance & leave', text: 'Self-punch, kiosk punch and bulk import, with optional geo-fencing and selfie verification, regularization requests and an automated day-close. Leave covers apply/decide/cancel, monthly accrual, carry-forward, encashment and comp-off.' },
  ])}`
)}

${L.oneSystemBlock([
  'A karigar’s settlement approval and a staff payroll run sit in the same approval queue, on the same platform record — not a separate wage register nobody else can see.',
  'The manager who decides a leave request is governed by the same role-based access that keeps salary data out of reach unless payroll access is explicitly assigned.',
])}

${L.section(
  `${L.sectionHead('THE FULL EMPLOYEE LIFECYCLE', 'From application to final settlement, on one record.', '')}
  ${L.cards([
    { title: 'Recruitment', text: 'A real pipeline — applied, screening, interview, offer, hired — with reject/withdraw states, feeding automatically into onboarding the moment someone is hired.' },
    { title: 'Onboarding', text: 'Template-driven checklists with due-date offsets from the joining date and role-based task assignment. A hired candidate starts onboarding automatically from the org’s default template — no manual re-entry. Switching from another HR system? A bulk employee CSV import brings your existing roster in at once, not one profile at a time.' },
    { title: 'Documents', text: 'Typed employee documents — PAN, Aadhaar, passport, offer letter, contract, certificates and more — uploaded, listed and deleted per employee.' },
    { title: 'Offboarding', text: 'A genuine full-and-final settlement engine — prorated final salary, leave encashment, statutory gratuity, advance recovery — through the same compute-approve-pay lifecycle, deactivating the employee record once paid.' },
    { title: 'Shift scheduling & directory', text: 'Roster and shift assignment with a dedicated UI, alongside a full employee directory and profile system.' },
    { title: 'Employee self-service', text: 'My Day, attendance, leave, payslips, loans, tax declarations, Form 16 and learning — 22 screens on the employee’s own phone, with an early Hindi pilot on karigar screens.' },
    { title: 'Asset management', text: 'Company-asset issue, return and report-lost-or-damaged tracking, per employee.' },
  ])}`
)}

${L.section(
  `${L.sectionHead('PERFORMANCE, LEARNING & INCENTIVES', 'Where HR meets the sales floor.', '')}
  ${L.cards([
    { title: 'Performance reviews', text: 'Review cycles group goals with self, manager and peer reviews and a competency roll-up; individual goals auto-complete at 100% progress.' },
    { title: 'Learning & certifications', text: 'Courses built from ordered lessons and assessments, scored securely, with certificates auto-issued on completion.' },
    { title: 'Sales & production incentives', text: 'Commission computed from real sales-order data, true margin (excluding rather than guessing when cost data is missing), or settled karigar work value, on tiered rate ladders — with a genuine clawback engine if a paid-commission sale is later returned.', link: { href: '/products/crm', label: 'See the CRM this reads from' } },
    { title: 'Loans & reimbursements', text: 'Flat-interest EMI loans recovered automatically as a payroll deduction, and expense reimbursement claims paid as a non-taxable line — both maker-checker approved.' },
  ])}`
)}

${L.oneSystemBlock([
  'Incentive commission is computed from the same sales-order data the CRM and billing already hold — not a separate spreadsheet reconciled at month-end.',
  'Every HR mutation — payroll runs, leave, karigar settlements, incentives, onboarding, shifts, salary structures — lands in the platform’s one shared activity log, with an HR filter to see it all in one click.',
])}

${L.honestGapsBlock([
  'The payroll bank file is not bank-integrated — it does not move money; a person uploads it in their own banking portal.',
  'Statutory exports (PF ECR, ESI, PT, Form 16 / 24Q) are not filed with the government automatically — they are generated for your accountant to file.',
  'Compliance-profile registration numbers (PF establishment code, ESI employer code, PT registration, TAN) are reference identifiers for your accountant — they do not drive calculations or auto-file anything themselves.',
  'Approval routing is a single org-wide fallback approver for unassigned cases, not a multi-step or threshold-based approval chain.',
  'A karigar can flag a work log as disputed, which notifies their manager — there is no approve/reject resolution workflow or ledger mutation from a dispute yet.',
  'Karigar settlement payout is a ledger (khata) balance only — there is no bank-file generation for karigar settlements, unlike staff payroll.',
])}

${L.section(`${L.sectionHead('HR & PAYROLL QUESTIONS', 'What runs automatically, and what still needs a person.', '')}${L.faqBlock([
  { q: 'Does the bank file actually pay people?', a: 'No — it’s a ready-to-upload NEFT-style file. A person executes it in their own banking portal; nothing here moves money automatically.' },
  { q: 'Is this a full biometric attendance system?', a: 'No — attendance is phone- and kiosk-based with optional geo-fencing and selfie verification, not fingerprint or face-scanner hardware.' },
  { q: 'Can I run payroll for karigars the same way as staff?', a: 'A matching lifecycle, not the same system — karigar settlement is a rate-card engine ending in a ledger balance, with no bank-file generation like staff payroll has.' },
])}
<p class="cta-note" style="margin-top:14px">More questions? <a href="/faq">See the full FAQ →</a></p>`)}

${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="hrpayroll">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('Run payroll and karigar wages on one system.', 'Bring last month’s payroll and one karigar settlement — we will show you both on the same platform.', 'hrpayroll')}
`,
};

module.exports = [hrPayroll];
