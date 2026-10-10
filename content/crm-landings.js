// Extension pages for Jwero CRM (2026-10-10). Not in the menu. Each targets one
// search phrase and hands the reader to its section of /products/crm. Same facts
// and limits as content/crm.js (20+ sources, never 100+).
const L = require('../lib');
const UPDATED = '10 October 2026';
const P = require('./crm').parts;
const MINI = { sources: [() => P.sources(), 'brand'], scores: [() => P.scores(), 'single'], today: [() => P.today(), 'chain'], privacy: [() => P.privacy(), 'chain'] };
const mini = (p) => { const m = MINI[p.anchor]; if (!m) return ''; return `${m[0]()}<p class="soc-mini-go"><a class="btn btn-ghost" href="/products/crm?crm=${m[1]}#for-you" data-crm-cta="mini-${p.slug}">See Jwero CRM for my business →</a></p>`; };

function landing(p) {
  return {
    slug: p.slug,
    title: p.title,
    description: p.description,
    breadcrumbs: [['Home', '/'], ['Jewellery CRM', '/products/crm'], [p.crumb]],
    schema: {
      '@context': 'https://schema.org', '@type': 'SoftwareApplication',
      name: p.schemaName, applicationCategory: 'BusinessApplication', operatingSystem: 'Web',
      description: p.description, url: `https://jwero.ai/${p.slug}`,
      audience: { '@type': 'BusinessAudience', audienceType: 'Jewellery retailers, chains and online jewellery brands' },
      featureList: p.points.map(([t]) => t).join(', '),
      dateModified: '2026-10-10',
      isPartOf: { '@type': 'SoftwareApplication', name: 'Jwero CRM', url: 'https://jwero.ai/products/crm' },
    },
    extraSchema: [{ '@context': 'https://schema.org', '@type': 'HowTo', name: p.howName, step: p.steps.map(([n, t], k) => ({ '@type': 'HowToStep', position: k + 1, name: n, text: t })) }],
    faqs: p.faqs,
    body: `
${L.hero({
  eyebrow: p.eyebrow,
  h1: p.h1,
  sub: p.sub,
  primary: { href: '#', label: p.cta, wa: 'crm' },
})}

${L.section(`<div class="ec-ad-meter">${P.meter()}</div>`, { tone: 'tint' })}

<section class="in-short" aria-labelledby="in-short-q"><div class="container"><p class="in-short-tag">In short</p><h2 id="in-short-q">${p.shortQ}</h2><p>${p.shortA}</p></div></section>

${L.section(`${L.sectionHead('BEFORE AND AFTER', p.leakHead, '')}<div class="erp-leak-list">${p.leaks.map(([a, b]) => `<p><span>${a}</span><b>${b}</b></p>`).join('')}</div>`, { tone: 'tint' })}

${p.miniHead ? L.section(`${L.sectionHead('SEE IT', p.miniHead, '')}${mini(p)}`) : ''}

${L.section(`${L.sectionHead('WHAT YOU GET', p.pointsHead, '')}${L.cards(p.points.map(([title, text, icon]) => ({ icon, title, text })), 3)}`)}

${L.section(`${L.sectionHead('GETTING STARTED', p.howName + '.', 'Five steps.')}${L.steps(p.steps.map(([title, text]) => ({ title, text })))}`, { tone: 'tint' })}

${L.section(`<div class="gem-head"><h2>Part of Jwero CRM.</h2><p>${p.partOf} <a href="/products/crm#${p.anchor}">See it in Jwero CRM →</a></p></div>`)}

${L.section(`<p class="cta-note" style="text-align:center">Last updated ${UPDATED}.</p>`)}

${L.ctaBand(p.bandTitle, p.bandText, 'crm')}
`,
  };
}




const L2 = (o) => landing(o);
const leads = L2({
  slug: 'jewellery-lead-management-software', crumb: 'Lead management', anchor: 'sources', miniHead: '20+ sources, captured on their own.',
  title: 'Jewellery Lead Management Software: 20+ Sources, Owners, Reply Clock | Jwero',
  description: 'Lead management for jewellers: leads from WhatsApp, Instagram, Meta and Google lead forms, Justdial, your website, store, showroom and calls captured automatically, matched, owned and answered against a reply-time clock.',
  schemaName: 'Jwero lead management for jewellers',
  eyebrow: 'LEAD MANAGEMENT FOR JEWELLERS',
  h1: 'Every enquiry captured, owned and answered, whichever app it came from.',
  sub: '20+ sources land on one record automatically, each lead gets an owner and a reply clock, and a journey starts before anyone has to remember.',
  cta: 'Show me my leads in one place',
  shortQ: 'What is lead management software for jewellers?',
  shortA: 'Software that captures enquiries from every channel, matches them to existing customers, assigns an owner, times the first reply and follows up. Jwero CRM does this for 20+ sources, including WhatsApp, Instagram, Meta and Google lead forms, Justdial, the website, the store, showroom visits and calls.',
  leakHead: 'From leads in five apps to one list.',
  leaks: [['Leads typed in by hand', 'Captured from 20+ sources'], ['Nobody owns the lead', 'Branch and salesperson at once'], ['Answered next day', 'Reply clock with alerts'], ['Duplicates everywhere', 'Matched and merged'], ['Forgotten after one reply', 'Journeys and AI calls follow up']],
  pointsHead: 'Leads, handled.',
  points: [['20+ sources', 'Chats, ads, forms, store, showroom, calls.', 'flow'], ['Matching', 'Across channels and households.', 'record'], ['Owners', 'Routed to branch and salesperson.', 'users'], ['Reply clock', 'Breach alerts, optional reassignment.', 'activity'], ['Journeys', 'Started on every new lead.', 'send'], ['Meta audiences', 'Leads synced for retargeting.', 'target']],
  howName: 'How to manage jewellery leads',
  steps: [['Connect your sources', 'WhatsApp, Instagram, ads, forms and the store.'], ['Set owners', 'By branch and salesperson.'], ['Set the reply clock', 'And who gets alerted.'], ['Turn on journeys', 'For every new lead.'], ['Work the daily list', 'Who to call and why.']],
  partOf: 'Lead management is part of Jwero CRM.',
  faqs: [{ q: 'Which lead sources does Jwero capture?', a: 'Jwero CRM captures 20+ sources automatically, including WhatsApp, Instagram and Messenger, Meta and Google lead forms, Justdial, website forms and chat, store sign-ins, showroom visits, calls and counter bills.' }, { q: 'How fast should a jewellery lead be answered?', a: 'Within minutes. Jwero CRM times every lead and alerts when the first reply is late.' }, { q: 'Can leads be assigned automatically?', a: 'Yes. Unowned leads are routed to a branch and salesperson as they arrive.' }],
  bandTitle: 'See your leads in one place.', bandText: 'Connect WhatsApp and one ad account; we will show the list.',
});
const retention = L2({
  slug: 'jewellery-customer-retention-software', crumb: 'Customer retention', anchor: 'scores', miniHead: 'Scores that tell you who to reach.',
  title: 'Jewellery Customer Retention Software: Churn Risk, Occasions, Loyalty | Jwero',
  description: 'Customer retention for jewellers: churn risk, RFM and value tiers, occasions found automatically, gold plans tracked to maturity, loyalty and referrals, and a daily list of who to reach before they drift away.',
  schemaName: 'Jwero customer retention for jewellers',
  eyebrow: 'CUSTOMER RETENTION FOR JEWELLERS',
  h1: 'Reach every customer before she drifts to another jeweller.',
  sub: 'Churn risk, occasions and maturing plans on one record, a daily list of who to reach, and a message drafted for each.',
  cta: 'Show me who is drifting away',
  shortQ: 'How do jewellers retain customers?',
  shortA: 'By remembering occasions, keeping gold plan members engaged, rewarding loyalty and reaching customers whose activity drops. Jwero CRM scores churn risk and value, finds occasions, and puts the right customers on each morning’s list with a drafted message.',
  leakHead: 'From forgotten customers to remembered ones.',
  leaks: [['Anniversaries missed', 'Found and remembered'], ['VIPs quiet for a year', 'Churn risk flagged'], ['Plans mature, no visit', 'On the list beforehand'], ['Loyalty on paper', 'Tiers, points and referrals'], ['Same message for all', 'Drafted for each customer']],
  pointsHead: 'Retention, built in.',
  points: [['Churn risk', 'Who is drifting away.', 'activity'], ['RFM and value tiers', 'Who matters most.', 'pie'], ['Occasions', 'Birthdays and anniversaries found.', 'gift'], ['Gold plans', 'Tracked to maturity.', 'coins'], ['Loyalty', 'Tiers, points and referrals.', 'heart'], ['Daily list', 'Who to reach, with a drafted note.', 'calendar']],
  howName: 'How to improve jewellery customer retention',
  steps: [['Bring your customers', 'With purchases and plans.'], ['Let scores build', 'Churn, RFM and value.'], ['Find occasions', 'From purchases and records.'], ['Work the list', 'Who to reach today.'], ['Reward', 'Loyalty and referrals.']],
  partOf: 'Retention is part of Jwero CRM.',
  faqs: [{ q: 'How do I find customers who are drifting away?', a: 'Jwero CRM scores churn risk from buying and engagement, so they appear on the list before they are lost.' }, { q: 'What is RFM for jewellers?', a: 'Grouping customers by how recently, how often and how much they buy; Jwero keeps it as a score and filter.' }, { q: 'Can occasions be found automatically?', a: 'Yes. Jwero CRM finds birthdays and anniversaries and can trigger journeys for them.' }],
  bandTitle: 'See who is drifting away.', bandText: 'We will show the customers worth reaching this week.',
});
const pipeline = L2({
  slug: 'jewellery-sales-pipeline-software', crumb: 'Sales pipeline', anchor: 'today', miniHead: 'The day’s list, ready at 9 am.',
  title: 'Jewellery Sales Pipeline Software: Deals, Quotes, Follow-ups, Daily List | Jwero',
  description: 'Sales pipeline for jewellers: deals and stages with win scoring, quotations accepted online, AI-drafted follow-ups, a reply clock and a daily list of who to call, with an owner digest every morning.',
  schemaName: 'Jwero sales pipeline for jewellers',
  eyebrow: 'SALES PIPELINE FOR JEWELLERS',
  h1: 'Every bridal enquiry and big order, tracked to the bill.',
  sub: 'Deals by stage with win scoring, quotes accepted online, follow-ups drafted by AI, and a list each morning of who to call and why.',
  cta: 'Show me my pipeline',
  shortQ: 'What is a sales pipeline for jewellers?',
  shortA: 'A view of every open opportunity, such as a bridal enquiry or a corporate order, by stage, with the next step for each. Jwero CRM tracks deals with win scoring and coaching, sends quotes customers accept online, drafts follow-ups, and builds a daily call list.',
  leakHead: 'From open deals to closed ones.',
  leaks: [['Big enquiries in a diary', 'Deals by stage'], ['Quotes that go quiet', 'Opened, followed up, accepted online'], ['Follow-ups forgotten', 'Drafted by AI for one tap'], ['Owner finds out late', 'Morning digest'], ['No idea what will close', 'Win scoring and coaching']],
  pointsHead: 'The pipeline, in Jwero.',
  points: [['Deals and stages', 'With stage history.', 'flow'], ['Win scoring', 'And coaching per deal.', 'pie'], ['Quotations', 'Revisions, approvals, online acceptance.', 'receipt'], ['Follow-ups', 'Drafted by AI.', 'sparkle'], ['Daily list', 'Who to call and why.', 'calendar'], ['Owner digest', 'Every morning.', 'mail']],
  howName: 'How to run a jewellery sales pipeline',
  steps: [['Set your stages', 'Enquiry to bill.'], ['Log big enquiries', 'As deals.'], ['Send quotes online', 'Accepted by the customer.'], ['Follow up', 'From AI drafts.'], ['Review each morning', 'With the owner digest.']],
  partOf: 'The pipeline is part of Jwero CRM.',
  faqs: [{ q: 'Can customers accept quotes online?', a: 'Yes. Jwero quotations are sent as links the customer accepts or declines.' }, { q: 'Does the CRM tell me which deals will close?', a: 'Jwero scores each deal’s chance of winning and suggests the next step.' }, { q: 'What is the owner digest?', a: 'A morning summary of leads, deals and who to call.' }],
  bandTitle: 'See your pipeline.', bandText: 'We will show your open enquiries by stage.',
});
const privacy = L2({
  slug: 'jewellery-customer-data-privacy', crumb: 'Customer data privacy', anchor: 'privacy', miniHead: 'Privacy, built into the record.',
  title: 'Customer Data Privacy for Jewellers: Consent, Data Requests, Masking | Jwero',
  description: 'Customer data privacy for jewellers: consent recorded per channel, customer requests to export or erase data, masking, AI data rules, field permissions by role, audit logs and retention policies.',
  schemaName: 'Jwero customer data privacy for jewellers',
  eyebrow: 'CUSTOMER DATA PRIVACY FOR JEWELLERS',
  h1: 'Customer trust, kept on the record.',
  sub: 'Consent per channel, data requests handled, personal details masked, AI rules set, sensitive fields limited by role, and every change logged.',
  cta: 'Show me privacy in Jwero',
  shortQ: 'How should jewellers protect customer data?',
  shortA: 'Record consent before marketing, honour requests to see or erase data, limit who sees sensitive details, and keep logs. Jwero CRM keeps a consent history per channel, handles export and erasure requests, masks personal details, sets AI data rules, limits fields by role and records audit logs. Confirm your obligations with your advisor.',
  leakHead: 'From phones and spreadsheets to controlled records.',
  leaks: [['Customer lists on staff phones', 'One controlled record'], ['Consent unknown', 'Logged per channel'], ['Data requests ignored', 'Export and erasure handled'], ['Everyone sees everything', 'Fields limited by role'], ['No record of changes', 'Audit logs']],
  pointsHead: 'Privacy features.',
  points: [['Consent log', 'Per channel, as history.', 'shield'], ['Export and erasure', 'Requests handled and logged.', 'download'], ['Masking', 'Personal details hidden where needed.', 'eye'], ['AI data rules', 'What AI may use.', 'bot'], ['Field permissions', 'By role.', 'key'], ['Audit and retention', 'Changes logged; data kept per policy.', 'book']],
  howName: 'How to set up customer data privacy in a jewellery business',
  steps: [['Record consent', 'On every channel.'], ['Set roles', 'Who sees what.'], ['Set AI rules', 'What AI may use.'], ['Set retention', 'How long data is kept.'], ['Handle requests', 'Export or erase on request.']],
  partOf: 'Privacy is part of Jwero CRM.',
  faqs: [{ q: 'Can a customer ask to delete her data?', a: 'Yes. Jwero handles erasure by anonymising her record while keeping financial records.' }, { q: 'Is consent recorded?', a: 'Yes, per channel, as a history.' }, { q: 'Can I stop staff exporting customer lists?', a: 'Sensitive fields can be limited by role, and changes are logged.' }],
  bandTitle: 'See privacy on the record.', bandText: 'We will show consent, requests and permissions in Jwero.',
});
module.exports = [leads, retention, pipeline, privacy];
