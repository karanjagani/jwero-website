// The legal set: Privacy Policy, Terms of Use, Data Policy, Sub-processors and
// the DPDP statement. Written from what the product does (see the product's
// own record of processing and sub-processor register), in plain words first.
// These are drafts for counsel: every item in blueprint/LEGAL-REVIEW-2026-10.md
// needs a decision or a signature before the pages are relied on.
const L = require('../lib');

const UPDATED = '1 October 2026';
const ENTITY = 'Tanika Tech Jewels Private Limited';
const ADDRESS = 'Shop No. 14–15, Sagar Darshan Building 2, Geetanjali Nagar, Station Road, Bhayandar (West), Thane, Maharashtra 401101, India';
const MAIL = '<a href="mailto:care@jwero.ai">care@jwero.ai</a>';
const BC = (label) => [['Home', '/'], ['Trust Centre', '/trust'], [label]];

const NAV = [['/legal/privacy', 'Privacy Policy'], ['/legal/terms', 'Terms of Use'], ['/legal/data-policy', 'Data Policy'], ['/legal/sub-processors', 'Sub-processors'], ['/legal/dpdp', 'DPDP statement'], ['/trust', 'Trust Centre']];
const table = (head, rows) => `<div class="tbl-wrap"><table class="tbl"><thead><tr>${head.map((h) => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => `<td>${i === 0 ? `<strong>${c}</strong>` : c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;

// sections: [title, plain-words summary, body html]
function doc({ slug, title, description, h1, intro, short, sections, faqs }) {
  const id = (i) => `s${i + 1}`;
  return {
    slug, title, description, breadcrumbs: BC(h1), faqs,
    body: `
${L.section(`
<div class="legal-doc">
  <p class="eyebrow">LEGAL</p>
  <h1>${h1}</h1>
  <p class="legal-meta">Last updated ${UPDATED} · ${ENTITY} · CIN U74900MH2016PTC273631</p>
  <nav class="legal-nav" aria-label="Legal documents">${NAV.map(([h, l]) => `<a href="${h}"${h === '/' + slug ? ' aria-current="page"' : ''}>${l}</a>`).join('')}</nav>
  <p class="legal-intro">${intro}</p>
  <div class="legal-short">
    <p class="legal-short-tag">The short version</p>
    <ul>${short.map((s) => `<li>${s}</li>`).join('')}</ul>
  </div>
  <ol class="legal-toc">${sections.map(([t], i) => `<li><a href="#${id(i)}">${t}</a></li>`).join('')}</ol>
  ${sections.map(([t, plain, body], i) => `
  <section class="legal-sec" id="${id(i)}">
    <h2><span>${i + 1}.</span> ${t}</h2>
    ${plain ? `<p class="legal-plain"><b>In plain words:</b> ${plain}</p>` : ''}
    ${body}
  </section>`).join('')}
  <p class="legal-foot">Questions about this document: ${MAIL} · ${ENTITY}, ${ADDRESS}.</p>
</div>`)}
`,
  };
}

// ---------------------------------------------------------------- Privacy Policy
const privacy = doc({
  slug: 'legal/privacy',
  title: 'Privacy Policy: How Jwero Handles Personal Data | Jwero',
  description: 'What personal data Jwero collects, why, who receives it, how long it is kept and the rights you have, for website visitors, account holders and the customers and staff of jewellers who use Jwero.',
  h1: 'Privacy Policy',
  intro: `Jwero is a product of ${ENTITY} (“Jwero”, “we”, “us”). This policy explains what personal data we handle, why, who receives it and what you can do about it. It covers this website (jwero.ai), the Jwero application (os.jwero.ai) and the chat, call and video channels through which you reach us.`,
  short: [
    'A jeweller’s customer list belongs to the jeweller. We hold it to run the software for them and for no purpose of our own.',
    'We do not sell personal data, and we do not share it with anyone for their own marketing.',
    'Each business has its own separate database. Primary hosting is in India.',
    'AI features send the content needed for a draft to model providers named in our sub-processor list. Nothing the AI drafts is sent to a customer without a person’s approval, unless the jeweller has switched that on for a specific kind of action.',
    'You can ask for access, correction or deletion. If your data is in a jeweller’s account, that jeweller decides, and we help them act on it.',
  ],
  sections: [
    ['Who this policy covers', 'There are three kinds of people here, and we play a different role for each.', `
    ${table(['You are', 'Examples', 'Our role'], [
      ['A visitor or enquirer', 'You browse jwero.ai, use a calculator, chat or call us, or book a demonstration', 'We decide how your data is used (data fiduciary)'],
      ['An account holder', 'An owner or staff member with a login to a Jwero workspace', 'We decide how your account data is used (data fiduciary)'],
      ['Someone in a jeweller’s records', 'A jeweller’s customer, employee, karigar, vendor or showroom visitor', 'The jeweller decides. We process on their instructions (data processor)'],
    ])}
    <p>The jeweller using Jwero is called the “Customer” in this policy. If you are in a Customer’s records, their privacy notice applies to you, and requests about your data should go to them first. Section 9 explains how we help.</p>`],
    ['What we collect directly', 'Only what you give us or what is needed to run and secure the service.', `
    <p><strong>Enquiries.</strong> Name, phone number, email, business name, business type, city and what you tell us in chat, on a call or in a form.</p>
    <p><strong>Accounts.</strong> Name, email, phone, password hash or the identifier from Google or LinkedIn sign-in, role, multi-factor and passkey credentials, session and device details and IP address.</p>
    <p><strong>Billing.</strong> Business name, address, GSTIN, billing contact and payment references. Card and bank details are entered with the payment provider and are not stored by Jwero.</p>
    <p><strong>Support.</strong> Messages, call notes and screen recordings you choose to share. If a call or video session is recorded, you are told at the start.</p>
    <p><strong>This website.</strong> The site keeps a few preferences in your own browser, such as the kind of business you selected and the light or dark theme. These are not sent to our servers and you can clear them in your browser. The website does not run advertising trackers. If the chat widget is used, the conversation is handled in the Jwero application.</p>`],
    ['What Customers store in Jwero', 'A jeweller’s workspace can hold sensitive information about their customers and staff. It is theirs, kept in their own database.', `
    <p>Depending on which parts of Jwero a Customer uses, their workspace may contain:</p>
    ${table(['About', 'May include'], [
      ['Their customers', 'Name, phone and WhatsApp number, email, address, birthday and anniversary, family relationships, sizes and preferences, purchases, quotations, scheme and loyalty balances, repairs, conversations on WhatsApp, Instagram, email and web chat, call recordings and transcripts, appointments and showroom visits'],
      ['Identity checks', 'For girvi, old-gold purchase, digital gold and high-value sales: PAN or Form 60, identity document type and number, photograph and signature, and the results of checks the law requires'],
      ['Their employees and karigars', 'Contact details, statutory identifiers such as PAN, Aadhaar, UAN and ESI numbers, bank account or UPI, salary and payslips, attendance (which can include location and a photograph at punch-in), leave, performance and training records'],
      ['Their vendors and trade buyers', 'Contact persons, GSTIN, bank details, orders, memos and ledgers'],
      ['Showroom and website visitors', 'Walk-in records, and where the Customer enables them, camera-based footfall tracking and website visit recordings and heatmaps on the Customer’s own storefront'],
    ])}
    <p>The Customer chooses what to record and is responsible for telling the people concerned and, where the law requires it, for obtaining their consent.</p>`],
    ['How we use personal data', 'To answer you, to run the product, to bill for it and to keep it safe.', `
    <ul>
      <li>To reply to enquiries and run demonstrations and trials.</li>
      <li>To create and secure accounts, and to provide, maintain and support the product.</li>
      <li>To bill, collect payment and meet tax and accounting obligations.</li>
      <li>To detect misuse, investigate incidents and keep audit records.</li>
      <li>To send service messages about your account. Marketing messages are sent only where you have agreed, and you can stop them at any time.</li>
      <li>To improve the product using operational measures such as usage counts and error reports. We do not use the content of a Customer’s records to train our own models.</li>
    </ul>
    <p>Data in a Customer’s workspace is processed only to provide the service to that Customer, on their instructions, as set out in the <a href="/legal/data-policy">Data Policy</a>.</p>`],
    ['Automated scoring and AI', 'Jwero scores customer activity to suggest who to contact, and AI drafts messages. A person approves what is sent.', `
    <p><strong>Scoring.</strong> Within a Customer’s workspace, Jwero reads customer activity, such as purchases, catalogue views, visits and scheme payments, and produces scores (for example likelihood to buy or risk of drifting away). Each score shows the reasons behind it. The scores suggest who a salesperson should contact. They do not decide prices, credit or eligibility on their own.</p>
    <p><strong>AI drafting.</strong> AI features draft replies, summaries, content and images. To do this, the relevant conversation and record are sent to an AI model provider listed on the <a href="/legal/sub-processors">Sub-processors</a> page, some of which process data outside India. Drafts wait for a person’s approval unless the Customer has enabled a specific kind of action to run within limits they set, and the Customer can stop AI activity at any time.</p>
    <p>If you are a jeweller’s customer and object to scoring or to AI-assisted messages, tell that jeweller. They can exclude your record.</p>`],
    ['Who receives personal data', 'Service providers that help us run the product, under contract. Nobody else, except where the law requires it.', `
    <p>We share personal data with:</p>
    <ul>
      <li><strong>Sub-processors</strong> that host, message, process payments, provide AI models or monitor the service. They are named, with their purpose and location, on the <a href="/legal/sub-processors">Sub-processors</a> page.</li>
      <li><strong>Services a Customer connects</strong>, such as Tally, Zoho Books, Shopify, marketplaces or advertising accounts. These receive data because the Customer has switched the connection on.</li>
      <li><strong>Authorities</strong>, where a law, court order or lawful request requires it. We disclose only what is required and, unless prohibited, tell the Customer concerned.</li>
      <li><strong>A successor</strong>, if the business is merged or sold, under terms no less protective than these.</li>
    </ul>
    <p>We do not sell personal data, and we do not let anyone use it for their own advertising.</p>`],
    ['Where data is stored and transferred', 'Primary hosting is in India. Some providers, mainly for AI and messaging, process data abroad.', `
    <p>Workspaces are hosted on cloud infrastructure in India. Some sub-processors, in particular AI model providers, Meta and monitoring tools, process data in other countries. Transfers are made only to countries not restricted by the Government of India under the Digital Personal Data Protection Act, 2023, and under contracts that require the recipient to protect the data.</p>`],
    ['How long we keep it', 'As long as needed for the purpose, and as long as the law requires for tax and identity records.', `
    ${table(['Data', 'Kept for'], [
      ['Enquiries that do not become accounts', 'Up to 24 months after the last contact, then deleted or anonymised'],
      ['Account and billing records', 'The life of the account, then as tax and company law require (generally eight years for books of account)'],
      ['A Customer’s workspace', 'The life of the subscription, and an export period after it ends, as set out in the <a href="/legal/data-policy">Data Policy</a>'],
      ['Invoices, orders, payments, purchases and payroll inside a workspace', 'Kept as statutory records. GST law requires 72 months from the due date of the annual return'],
      ['Identity-check records', 'For the period anti-money-laundering and tax law require, after which they are deleted'],
      ['Security and activity logs', 'Up to 12 months'],
    ])}`],
    ['Your rights', 'You can ask to see, correct or delete your data, withdraw consent, complain and nominate someone to act for you.', `
    <p>Under the Digital Personal Data Protection Act, 2023 you may:</p>
    <ul>
      <li>ask for a summary of the personal data being processed and what is being done with it;</li>
      <li>ask for it to be corrected, completed or updated;</li>
      <li>ask for it to be erased when it is no longer needed and no law requires it to be kept;</li>
      <li>withdraw consent, as easily as you gave it;</li>
      <li>nominate another person to exercise these rights if you die or lose capacity;</li>
      <li>raise a grievance with us, and if it is not resolved, with the Data Protection Board of India.</li>
    </ul>
    <p><strong>If we hold your data directly</strong>, write to ${MAIL}. We may need to confirm your identity first.</p>
    <p><strong>If your data is in a jeweller’s Jwero account</strong>, ask that jeweller. The product gives them tools to export, correct and erase a person’s record and to record a withdrawal of consent. If you write to us instead, we will pass the request to the jeweller without delay and will not act on their data without their instruction.</p>
    <p>Some records cannot be erased on request because a law requires them to be kept, including tax invoices, payroll and identity-check records.</p>`],
    ['Security', 'Separate databases, encryption, tight access and tested backups. The detail is on the security page.', `
    <p>Each Customer’s data is held in its own database, encrypted in transit and at rest, with role-based access, multi-factor login and audit records. Details, including what we have not yet achieved, are on the <a href="/trust/security">Security</a> page. No system is perfectly secure. If a personal data breach occurs, we will notify the affected Customers, the people affected and the Data Protection Board of India as the law requires.</p>`],
    ['Children', 'Jwero is a business product and is not directed at children.', `
    <p>We do not knowingly collect personal data from anyone under 18 through this website or as an account holder. A Customer may record a child’s name or date of birth as part of a family’s record, for example for a gift occasion. The Customer is responsible for obtaining a parent’s verifiable consent where the law requires it, and must not use Jwero to track children or target advertising at them.</p>`],
    ['Changes to this policy', '', `
    <p>We will post changes here and change the date at the top. If a change materially affects how account holders’ data is used, we will tell account owners by email or in the product before it takes effect.</p>`],
    ['Grievance Officer and contact', 'One address for every privacy question or complaint.', `
    <p>Grievance Officer, ${ENTITY}, ${ADDRESS}. Email ${MAIL} with the subject “Privacy”. We acknowledge complaints within two working days and aim to resolve them within thirty days. If you are not satisfied, you may approach the Data Protection Board of India.</p>`],
  ],
  faqs: [
    { q: 'Does Jwero sell customer data?', a: 'No. Jwero does not sell personal data and does not share it with anyone for their own marketing. A jeweller’s customer list belongs to the jeweller.' },
    { q: 'Where is Jwero’s data stored?', a: 'Each business has its own database, hosted on cloud infrastructure in India. Some sub-processors, mainly AI model providers and Meta, process data in other countries.' },
    { q: 'Is customer data used to train AI?', a: 'Jwero does not use the content of a jeweller’s records to train its own models. AI features send the content needed for a draft to the model providers named in the sub-processor list.' },
    { q: 'How do I get my data deleted?', a: 'If Jwero holds it directly, write to care@jwero.ai. If it is in a jeweller’s account, ask that jeweller; the product gives them the tools and Jwero will pass on any request it receives.' },
  ],
});

// ---------------------------------------------------------------- Terms of Use
const terms = doc({
  slug: 'legal/terms',
  title: 'Terms of Use: Website and Jwero Subscription | Jwero',
  description: 'The terms on which Jwero is provided to jewellery businesses: accounts, the first month, fees and the prepaid wallet, your data, acceptable use, AI features, third-party services, liability and how the agreement ends.',
  h1: 'Terms of Use',
  intro: `These terms are an agreement between ${ENTITY} (“Jwero”) and the business that uses this website or creates a Jwero workspace (“you”). They apply when you browse jwero.ai, or subscribe at os.jwero.ai. If you have signed an order or agreement with us, that document prevails where it differs from these terms.`,
  short: [
    'Jwero is for businesses, not consumers. The person who accepts these terms must be authorised to do so for the business.',
    'Your data is yours. You can export it at any time, including after you leave.',
    'There is no free trial. The first month is ₹3,600 instead of ₹18,000. After that the plan fee is charged in advance from a prepaid wallet, and usage such as messages, AI and calls is charged at published rates.',
    'You are responsible for what you and your staff send to your customers, including messages you approve that the AI drafted.',
    'Jwero is software. It is not your accountant, lawyer, lender or tax adviser.',
  ],
  sections: [
    ['Who can use Jwero', '', `
    <p>Jwero is offered to businesses and professionals for use in the course of their trade. It is not offered to consumers. You confirm that you are at least 18, that the information you give us is accurate, and that you have authority to bind the business you represent.</p>`],
    ['Your account', 'Keep logins personal and secure. The owner controls who gets access.', `
    <p>The person who creates a workspace is its owner and may invite others and set their permissions. You are responsible for activity under your logins. Do not share a login between people. Turn on multi-factor login where you can, remove access promptly when someone leaves, and tell us at once if you suspect misuse.</p>`],
    ['The first month', 'There is no free trial. The first month is ₹3,600.', `
    <p>A new workspace pays ₹3,600 for its first month of Jwero One instead of ₹18,000, with every module included. The first-month price applies once per business. From the second month the plan fee is ₹18,000 a month. Usage on the wallet is charged at the published rates from the first day.</p>`],
    ['Fees, the wallet and taxes', 'One plan fee in advance, usage at published rates, from a prepaid balance.', `
    <p><strong>Plan.</strong> The current fees are on the <a href="/pricing">pricing page</a>. The plan fee is charged monthly, in advance. Extra locations, registers, capacity and connected devices are charged at the published rates.</p>
    <p><strong>Wallet.</strong> Fees and usage, including WhatsApp and SMS messages, AI, voice and video minutes and similar metered items, are debited from a prepaid wallet at the published rates. Rates set by third parties, such as Meta’s message charges, can change when they change theirs.</p>
    <p><strong>If the balance runs out.</strong> When the wallet has no balance, the workspace becomes read-only until it is topped up. Your data is not deleted because of a low balance. If a subscription fee remains unpaid for seven days, the subscription is cancelled so that further fees stop accruing.</p>
    <p><strong>Taxes.</strong> Fees exclude GST and other taxes, which are added at the applicable rate. We issue a tax invoice for each charge.</p>
    <p><strong>Refunds.</strong> You may cancel at any time and the subscription then ends at the close of the period already paid for. Plan fees for a period that has started are not refunded, and moving to a lower plan mid-period does not create a refund. Wallet top-ups are prepaid. An unused paid balance is refunded where the law requires it or where we agree in writing; promotional credit is never refundable.</p>
    <p><strong>Price changes.</strong> We will give at least 30 days’ notice of an increase in plan fees. It applies from your next renewal.</p>`],
    ['Your data', 'You own it. We process it for you. You can take it with you.', `
    <p>You keep all rights in the data you and your users put into Jwero (“Customer Data”). You give us permission to host and process it only to provide and support the service, as described in the <a href="/legal/data-policy">Data Policy</a>, which forms part of these terms. You can export Customer Data in standard formats at any time.</p>
    <p>You are responsible for having the right to hold and use the personal data you put into Jwero, including giving notice to and obtaining consent from your customers, employees and others where the law requires it.</p>`],
    ['Acceptable use', 'Use it to run your business lawfully. Do not spam, break in or resell it.', `
    <p>You must not, and must not allow anyone to:</p>
    <ul>
      <li>send messages to people who have not agreed to receive them, or in breach of the rules of WhatsApp, Meta, telecom regulations on commercial communications or any other channel;</li>
      <li>upload contact lists you have no right to use;</li>
      <li>use Jwero for anything unlawful, deceptive or infringing, or to record or track people without the notice or consent the law requires;</li>
      <li>probe, scan or test the service’s security without our written permission, or interfere with other customers’ use;</li>
      <li>copy, resell or reverse engineer the service, or use it to build a competing product;</li>
      <li>use automated means to extract data from the service other than through the export tools and connections we provide.</li>
    </ul>
    <p>We may suspend a workspace that is causing harm to others or putting the service at risk. Where we can, we will warn you first and give you the chance to put it right.</p>`],
    ['AI features', 'The AI drafts. Your people approve. What is sent is your message.', `
    <p>Jwero includes AI that drafts replies, content, images, reports and suggested actions. AI output can be wrong or incomplete and should be checked. By default every AI-drafted action waits for a person’s approval. You may allow specific kinds of action to run without approval, within limits you set, and you can stop AI activity at any time.</p>
    <p>You are responsible for messages and actions your users approve or that run under settings you have enabled. As between you and Jwero, you own the output generated for you from your data. You must not use AI features to produce unlawful, deceptive or infringing content.</p>`],
    ['What Jwero is not', 'Software, not a regulated service or a professional adviser.', `
    <ul>
      <li><strong>Not financial services.</strong> Savings schemes, digital gold, girvi and loyalty programmes run in Jwero are offered by you to your customers. Jwero does not accept deposits, lend, hold customer money or gold, or act as your agent. You are responsible for any licence, registration, limit or filing that applies to those activities.</li>
      <li><strong>Not tax, legal or accounting advice.</strong> Invoices, tax calculations, payroll and reports are produced from your settings and data. Check them with your own advisers. Jwero does not file returns for you.</li>
      <li><strong>Not a certification.</strong> Recording a HUID, a certificate or an identity check in Jwero does not verify it.</li>
      <li><strong>Not a guarantee of results.</strong> Calculators, estimates and examples on this website are illustrations based on the figures entered.</li>
    </ul>`],
    ['Third-party services', '', `
    <p>Jwero connects to services run by others, such as Meta, payment providers, Tally, Zoho, Shopify, marketplaces and advertising platforms. Your use of them is under their terms, and they may change or withdraw their service. We are not responsible for their acts or outages, though we will work to restore a connection that breaks.</p>`],
    ['Availability and support', '', `
    <p>We work to keep Jwero available at all times and to give notice of planned maintenance. Jwero needs an internet connection. Unless your order states a service level, we do not promise a specific uptime. Support is provided by chat, call and video during the hours published on the website.</p>`],
    ['Our intellectual property', '', `
    <p>Jwero, its software, designs, documentation and trademarks belong to us or our licensors. We give you a non-exclusive, non-transferable right to use the service for your own business while your subscription is active. If you send us suggestions, we may use them without obligation to you.</p>`],
    ['Ending the agreement', 'Leave whenever you like. Your data stays available to export.', `
    <p>You may cancel at any time from the workspace or by writing to us. We may end the agreement on 30 days’ notice, or at once if you seriously breach these terms and do not put it right within 14 days of being told.</p>
    <p>When a subscription ends, the workspace becomes read-only and you may export Customer Data for at least 30 days. After that we may delete it, as described in the Data Policy. We will write to the workspace owner before deleting.</p>`],
    ['Warranties and liability', 'We stand behind the service, within sensible limits.', `
    <p>We will provide the service with reasonable skill and care and in line with the published description. Except as stated in these terms, the service is provided as it is, and we give no other warranty to the extent the law allows.</p>
    <p>Neither party is liable to the other for loss of profit, revenue, goodwill or anticipated savings, or for indirect or consequential loss. Our total liability arising from these terms in any 12-month period is limited to the fees you paid us in that period. Nothing here limits liability that cannot be limited by law, or your obligation to pay fees.</p>
    <p>You will indemnify us against claims by third parties arising from messages you send, data you had no right to use, or your breach of section 6.</p>`],
    ['Confidentiality', '', `
    <p>Each party will keep the other’s non-public information confidential and use it only for the purposes of this agreement. We treat Customer Data as your confidential information.</p>`],
    ['Changes to these terms', '', `
    <p>We may update these terms. We will post the new version here and, for changes that materially affect you, give account owners at least 30 days’ notice. If you do not accept a change you may cancel before it takes effect.</p>`],
    ['Law and disputes', '', `
    <p>These terms are governed by the laws of India. The parties will first try to resolve any dispute by discussion between senior representatives for 30 days. After that, the courts at Mumbai, Maharashtra have exclusive jurisdiction.</p>`],
    ['Contact', '', `
    <p>${ENTITY}, ${ADDRESS}. Email ${MAIL}.</p>`],
  ],
  faqs: [
    { q: 'Who owns the data in a Jwero account?', a: 'The business that created the account. Jwero processes it only to provide the service and the business can export it at any time, including for at least 30 days after the subscription ends.' },
    { q: 'What happens if the wallet balance runs out?', a: 'The workspace becomes read-only until the wallet is topped up. Data is not deleted because of a low balance.' },
    { q: 'Can I cancel Jwero at any time?', a: 'Yes. The subscription ends at the close of the period already paid for, and data remains available to export afterwards.' },
    { q: 'Is Jwero responsible for messages the AI drafts?', a: 'AI drafts wait for a person’s approval by default. The business is responsible for messages its users approve or that run under settings it has enabled.' },
  ],
});

// ---------------------------------------------------------------- Data Policy
const dataPolicy = doc({
  slug: 'legal/data-policy',
  title: 'Data Policy: Ownership, Processing, Retention and Export | Jwero',
  description: 'How Jwero handles the data a jewellery business puts into it: who owns it, the instructions Jwero processes it under, security measures, sub-processors, retention, export, deletion and breach notification.',
  h1: 'Data Policy',
  intro: 'This policy sets out how Jwero handles the data a business puts into its workspace (“Customer Data”). It forms part of the Terms of Use and serves as the data processing terms between the Customer, as data fiduciary, and Jwero, as data processor, under the Digital Personal Data Protection Act, 2023.',
  short: [
    'You own your data. Jwero has no rights in it beyond running the service for you.',
    'One business, one database. Your records are never stored in the same database as another jeweller’s.',
    'We process your data only on your instructions, and our staff access it only to support you or keep the service running.',
    'You can export everything at any time, and for at least 30 days after you leave. Then it is deleted.',
    'If there is a breach affecting your data, we tell you without undue delay.',
  ],
  sections: [
    ['Ownership', 'Your customer list, your stock, your books: yours.', `
    <p>Customer Data belongs to the Customer. Jwero does not claim ownership of it, does not sell it, and does not use it for any purpose other than providing, securing and supporting the service for that Customer. Jwero does not compare, combine or share one Customer’s data with another’s.</p>`],
    ['Roles', '', `
    <p>For personal data in Customer Data, the Customer is the data fiduciary and Jwero is its data processor. The Customer decides what is collected and why. For account, billing and enquiry data, Jwero is the data fiduciary and the <a href="/legal/privacy">Privacy Policy</a> applies.</p>`],
    ['What we process and why', '', `
    ${table(['', ''], [
      ['Subject matter', 'Hosting and processing Customer Data to provide the Jwero service'],
      ['Duration', 'The subscription term and the export period after it'],
      ['Purpose', 'Running the modules the Customer uses: customer records, selling channels, counter, stock, purchase, manufacturing, schemes, HR, accounts, reports and AI assistance'],
      ['People concerned', 'The Customer’s customers and leads, employees and karigars, vendors and trade buyers, and visitors'],
      ['Kinds of data', 'As listed in section 3 of the Privacy Policy, including identity and financial identifiers where the Customer records them'],
    ])}`],
    ['Our commitments as processor', 'We act on your instructions, keep it confidential, secure it and help you meet your obligations.', `
    <p>Jwero will:</p>
    <ul>
      <li>process Customer Data only on the Customer’s documented instructions, which are these terms, the Customer’s settings and the actions its users take in the product;</li>
      <li>ensure that people authorised to access Customer Data are bound by confidentiality;</li>
      <li>apply the security measures in section 6;</li>
      <li>use sub-processors only as described in section 7;</li>
      <li>help the Customer respond to requests from individuals, through export, correction, erasure and consent tools in the product;</li>
      <li>notify the Customer of a personal data breach as described in section 10;</li>
      <li>delete or return Customer Data at the end of the service, as described in section 9;</li>
      <li>give the Customer the information reasonably needed to show that these commitments are being met.</li>
    </ul>`],
    ['The Customer’s responsibilities', '', `
    <p>The Customer will:</p>
    <ul>
      <li>have a lawful basis for the personal data it puts into Jwero and give the notices the law requires, including that messages may be drafted with AI and that customer activity is scored;</li>
      <li>obtain consent before sending marketing messages, honour opt-outs, and obtain verifiable parental consent before processing a child’s data;</li>
      <li>tell employees and visitors about attendance location or photo capture, call recording and camera-based tracking where it enables them;</li>
      <li>record identity documents only where a law requires or permits it, and not store Aadhaar numbers or copies except as the law allows;</li>
      <li>set permissions so that staff see only what they need, and remove access when someone leaves.</li>
    </ul>`],
    ['Security measures', 'The measures in place today. The security page goes further.', `
    <ul>
      <li>A separate database for each Customer.</li>
      <li>Encryption in transit and at rest; credentials and connection secrets encrypted.</li>
      <li>Role-based access with fine-grained permissions, multi-factor login and passkeys, single sign-on for larger deployments, and session revocation.</li>
      <li>Approval steps on financial records and a record of who changed what.</li>
      <li>Backups at a frequency and retention the Customer can set, with restore tests.</li>
      <li>Jwero staff access to a workspace limited to support and operations needs, and logged.</li>
      <li>A written incident response plan.</li>
    </ul>
    <p>Jwero does not hold SOC 2 or ISO 27001 certification today. See <a href="/trust/security">Security</a> for what is in place and what is planned.</p>`],
    ['Sub-processors', 'Named on a public page. We tell you before adding one.', `
    <p>The Customer authorises Jwero to use the sub-processors listed on the <a href="/legal/sub-processors">Sub-processors</a> page. Many are used only when the Customer switches on the feature that needs them. Jwero remains responsible for their work and requires them by contract to protect the data. We will update that page at least 15 days before adding a sub-processor that will handle Customer Data, and a Customer who objects may stop using the feature concerned or cancel.</p>`],
    ['Location and transfers', '', `
    <p>Customer databases are hosted in India. Where a sub-processor processes data outside India, the transfer is made only to countries not restricted under Indian law and under contract. A Customer can avoid most transfers by not enabling the features that depend on providers abroad; the Sub-processors page shows which those are.</p>`],
    ['Retention, export and deletion', 'Export whenever you want. Statutory records are kept as long as the law says.', `
    <p><strong>During the subscription.</strong> Customer Data is kept for as long as the workspace is active. Operational logs and event history are kept for set periods, generally 90 to 365 days. Invoices, orders, payments, purchases, payroll and the ledger are statutory records and are not deleted on a schedule.</p>
    <p><strong>Export.</strong> The Customer can export Customer Data in standard formats at any time, without asking us and at no charge.</p>
    <p><strong>After the subscription ends.</strong> The workspace becomes read-only and remains available for export for at least 30 days. We then delete the database and its backups within a further 90 days, after writing to the workspace owner. A Customer may ask for earlier deletion in writing.</p>
    <p><strong>What we may keep.</strong> Our own records of the account, invoices we issued and security logs, as the law requires.</p>`],
    ['Breach notification', '', `
    <p>If Jwero becomes aware of a personal data breach affecting Customer Data, it will notify the workspace owner without undue delay, with what is known about what happened, the data involved and the steps being taken, and will keep the Customer updated. Jwero will give the Customer the information it needs to notify the Data Protection Board of India and the people affected.</p>`],
    ['Requests from individuals and authorities', '', `
    <p>If an individual asks Jwero about data held in a Customer’s workspace, Jwero will refer the request to the Customer and will not respond on the Customer’s behalf without instruction. If an authority lawfully requires disclosure of Customer Data, Jwero will tell the Customer first unless the law forbids it, and will disclose only what is required.</p>`],
    ['Audit and assurance', '', `
    <p>On reasonable written request, and not more than once a year unless there has been a breach, Jwero will provide its security overview and answer a Customer’s reasonable questionnaire. Enterprise customers may agree further audit rights in their order.</p>`],
    ['Contact', '', `
    <p>Data protection questions: ${MAIL}, subject “Data”. ${ENTITY}, ${ADDRESS}.</p>`],
  ],
  faqs: [
    { q: 'Who owns the data in Jwero?', a: 'The business that put it there. Jwero processes it only to provide the service and has no other rights in it.' },
    { q: 'Can I take my data out of Jwero?', a: 'Yes. Export is available at any time in standard formats, and for at least 30 days after a subscription ends.' },
    { q: 'What happens to my data when I cancel?', a: 'The workspace becomes read-only and stays available for export for at least 30 days. After that the database and backups are deleted, after notice to the workspace owner.' },
    { q: 'Is my data mixed with other jewellers’ data?', a: 'No. Each business has its own separate database.' },
  ],
});

// ---------------------------------------------------------------- Sub-processors
const SUBS = [
  ['Hosting and storage', [
    ['Microsoft Azure', 'Application hosting, databases, file storage', 'India', 'Always'],
    ['Amazon Web Services', 'File storage and email delivery', 'India and other regions', 'Always'],
  ]],
  ['Messaging and calls', [
    ['Meta (WhatsApp Business, Instagram, Facebook)', 'Sending and receiving messages on your accounts', 'Global', 'When you connect a channel'],
    ['Gupshup', 'WhatsApp message delivery', 'India', 'When used for your number'],
    ['MSG91', 'SMS delivery', 'India', 'When you send SMS'],
    ['Exotel', 'Phone calls and call recording', 'India', 'When you use calling'],
    ['LiveKit', 'Voice and video sessions', 'Global', 'When you use voice AI or video'],
    ['OneSignal', 'Push notifications', 'United States', 'When you send push'],
  ]],
  ['AI model providers', [
    ['OpenAI and Microsoft Azure OpenAI', 'Drafting, summarising and analysis', 'United States or the configured region', 'When you use AI features'],
    ['Anthropic', 'Drafting and agent actions', 'United States', 'When you use AI features'],
    ['Google (Gemini)', 'Drafting, content and images', 'Global', 'When you use AI features'],
    ['Groq', 'Drafting', 'United States', 'When you use AI features'],
    ['Sarvam AI', 'Speech in Indian languages', 'India', 'When you use voice AI'],
    ['Deepgram', 'Speech to text', 'United States', 'When you use voice AI'],
  ]],
  ['Payments', [
    ['Razorpay', 'Collecting payments', 'India', 'When you take payments'],
    ['Cashfree', 'Collecting payments', 'India', 'When you take payments'],
    ['PhonePe', 'Collecting payments', 'India', 'When you take payments'],
  ]],
  ['Monitoring', [
    ['Sentry', 'Error reports, with personal fields removed', 'Global', 'Always'],
    ['Site24x7', 'Performance monitoring', 'Global', 'Always'],
  ]],
];
const subProcessors = doc({
  slug: 'legal/sub-processors',
  title: 'Sub-processors: Who Helps Jwero Process Your Data | Jwero',
  description: 'The companies Jwero uses to host, message, process payments, provide AI models and monitor the service, with what each does, where it processes data and when it is used.',
  h1: 'Sub-processors',
  intro: 'These are the companies that may process data from a Customer’s workspace on Jwero’s behalf. Most are used only when you switch on the feature that needs them. Services you connect yourself, such as Tally, Zoho Books, Shopify, marketplaces, Google Sheets or advertising accounts, are your own providers and are not listed here.',
  short: [
    'Hosting is in India.',
    'AI model providers and Meta process data outside India. They are used only when you use AI features or connect those channels.',
    'We update this page at least 15 days before adding a provider that will handle your data.',
  ],
  sections: SUBS.map(([group, rows]) => [group, '', table(['Provider', 'What it does', 'Where', 'Used'], rows)]).concat([
    ['Changes to this list', '', `<p>This list was last reviewed on ${UPDATED}. To be told of changes by email, write to ${MAIL} with the subject “Sub-processor updates”.</p>`],
  ]),
  faqs: [
    { q: 'Which AI providers does Jwero use?', a: 'OpenAI and Microsoft Azure OpenAI, Anthropic, Google Gemini, Groq, Sarvam AI and Deepgram. They receive content only when AI features are used.' },
    { q: 'Where is Jwero hosted?', a: 'On Microsoft Azure in India, with file storage and email delivery on Amazon Web Services.' },
  ],
});

// ---------------------------------------------------------------- DPDP statement
const dpdp = doc({
  slug: 'legal/dpdp',
  title: 'DPDP Statement: Jwero and India’s Data Protection Act | Jwero',
  description: 'How Jwero meets India’s Digital Personal Data Protection Act, 2023: who is the data fiduciary and who the processor, notice and consent, the rights of data principals, children’s data, breach notification and grievance redressal.',
  h1: 'DPDP Statement',
  intro: 'This statement explains how Jwero applies India’s Digital Personal Data Protection Act, 2023 (“the Act”) to the product and to this website. It should be read with the Privacy Policy and the Data Policy.',
  short: [
    'The jeweller is the data fiduciary for its customers’ and employees’ data. Jwero is its data processor.',
    'Jwero is the data fiduciary for its own account holders and enquirers.',
    'The product gives jewellers the tools the Act expects: consent records, opt-outs, export, correction and erasure.',
    'Grievances go to the Grievance Officer at care@jwero.ai.',
  ],
  sections: [
    ['Roles under the Act', '', `
    ${table(['Data', 'Data fiduciary', 'Data processor'], [
      ['A jeweller’s customers, employees, karigars, vendors and visitors', 'The jeweller', 'Jwero'],
      ['Jwero account holders, billing contacts and enquirers', 'Jwero', 'Jwero’s sub-processors'],
    ])}`],
    ['Notice and consent', 'The jeweller asks its own customers. The product records the answer.', `
    <p>Where Jwero collects personal data directly, it gives notice at the point of collection of what is collected and why. Where a jeweller collects personal data through Jwero, giving notice and obtaining consent is the jeweller’s duty as data fiduciary. The product supports it: consent and channel preferences are recorded on each contact, opt-outs are enforced at the moment of sending, and messaging runs on Meta’s official business interfaces.</p>
    <p>Jewellers should check that contacts imported from older systems have agreed to receive marketing before sending to them.</p>`],
    ['Purpose and minimisation', '', `
    <p>Jwero processes a jeweller’s data only to provide the service to that jeweller. Each jeweller chooses which fields to record. Identity documents and statutory identifiers should be recorded only where a law requires or permits it.</p>`],
    ['Rights of data principals', '', `
    ${table(['Right', 'How it is exercised'], [
      ['Access to a summary of data and processing', 'The jeweller exports the person’s record from the product'],
      ['Correction and updating', 'The jeweller edits the record'],
      ['Erasure', 'The jeweller erases the record. Tax, payroll and identity-check records the law requires are retained'],
      ['Withdrawal of consent', 'Recorded on the contact and enforced before any message is sent'],
      ['Nomination', 'By writing to the jeweller, or to Jwero for account data'],
      ['Grievance redressal', 'To the jeweller for its records; to Jwero’s Grievance Officer for account and enquiry data'],
    ])}`],
    ['Automated scoring', '', `
    <p>The product scores customer activity to suggest who a salesperson should contact, and shows the reasons for each score. Jewellers should mention this in their own privacy notice. The scores do not decide prices, credit or eligibility on their own.</p>`],
    ['Children', '', `
    <p>Jwero is not directed at children. Jewellers must obtain a parent’s verifiable consent before processing a child’s personal data and must not use the product to track children or direct advertising at them.</p>`],
    ['Security safeguards and breaches', '', `
    <p>The safeguards are described in the <a href="/legal/data-policy">Data Policy</a> and on the <a href="/trust/security">Security</a> page. In the event of a personal data breach, Jwero notifies affected jewellers without undue delay so that the Board and the people affected can be informed as the Act requires, and notifies the Board and affected people directly for data it holds as fiduciary.</p>`],
    ['Processing outside India', '', `
    <p>Hosting is in India. Some sub-processors process data abroad, as shown on the <a href="/legal/sub-processors">Sub-processors</a> page. Transfers are made only to countries not restricted by the Central Government under the Act.</p>`],
    ['Retention and erasure', '', `
    <p>Personal data is erased when the purpose is served and no law requires it to be kept. Retention periods are in the <a href="/legal/privacy">Privacy Policy</a> and the Data Policy.</p>`],
    ['Grievance Officer', '', `
    <p>Grievance Officer, ${ENTITY}, ${ADDRESS}. Email ${MAIL}, subject “DPDP”. Complaints are acknowledged within two working days and we aim to resolve them within thirty days. A data principal who is not satisfied may approach the Data Protection Board of India.</p>`],
  ],
  faqs: [
    { q: 'Is Jwero compliant with India’s DPDP Act?', a: 'Jwero acts as data processor for jewellers and as data fiduciary for its own account holders, and the product provides consent records, opt-outs, export, correction and erasure. Jwero publishes its sub-processors and a grievance contact.' },
    { q: 'Who is the data fiduciary for a jeweller’s customer data?', a: 'The jeweller. Jwero processes that data on the jeweller’s instructions as its data processor.' },
  ],
});

module.exports = [privacy, terms, dataPolicy, subProcessors, dpdp];
