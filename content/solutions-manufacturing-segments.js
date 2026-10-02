const L = require('../lib');
const BC = (label) => [['Home', '/'], ['Solutions', '/solutions'], [label]];

const castingUnitsFaqs = [
  { q: 'Can it track loss per casting batch?', a: 'Yes — the append-only WIP ledger tracks fine weight through production stages with per-stage loss norms, flagging abnormal loss the day it happens.' },
  { q: 'Can it keep client jobs separated within one batch?', a: 'Job-level tracking keeps client work distinguishable even when multiple jobs run through shared batch processes.' },
  { q: 'Our floor staff won’t want to log data mid-process. Is this extra work for them?', a: 'Issue and receipt records are the minimum a disciplined casting floor already needs to track — the ledger organises what’s being noted anyway, rather than adding a new task on top.' },
];

const castingUnits = {
  slug: 'solutions/casting-units',
  title: 'Jewellery Casting Software: Flasks, Metal Loss, Job Work | Jwero',
  description: 'Batch and work-in-progress tracking tuned to casting workflows — every tree, every flask, accounted, with loss norms per stage.',
  breadcrumbs: BC('Casting units'),
  faqs: castingUnitsFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR CASTING UNITS',
  h1: 'Metal in, castings out, loss per flask — closed every day.',
  sub: 'Batch and work-in-progress tracking tuned to casting workflows — with per-stage loss norms and abnormal-loss flags, and client jobs kept distinguishable even when they share a process.',
  primary: { href: '#', label: 'Talk shop with us', wa: 'casting' },
  secondary: { href: '/solutions/manufacturers', label: 'See the manufacturer overview' },
})}
${L.section(
  `${L.painRows([
    { quote: 'Loss norms vary by stage and nobody tracks them precisely enough.', title: 'Per-stage loss norms', text: 'An append-only WIP ledger flags abnormal loss the day it happens, by stage.' },
    { quote: 'Client jobs get mixed up when they share a casting batch.', title: 'Job-level traceability', text: 'Client work stays distinguishable through shared batch processes, from issue to receipt.' },
  ])}`
)}
${L.section(`${L.sectionHead('QUESTIONS CASTING UNITS ASK', 'Loss tracking and job separation — answered.', '')}${L.faqBlock(castingUnitsFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/solutions/manufacturers">See the manufacturer overview</a> or <a href="/faq">the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This isn’t a demo video — <a href="#" data-wa="casting">message us here</a> and Jwero’s own inbox answers, live.</p>`, { tone: 'tint' })}

${L.ctaBand('Follow one batch, start to finish.', 'Bring one casting order to a demo — we’ll track it stage by stage.', 'casting', { enterprise: true })}
`,
};

const cadServicesFaqs = [
  { q: 'Can client design revisions be tracked in order?', a: 'Yes — each design’s conversation thread holds the revision and approval history, so nothing gets lost in scattered chat.' },
  { q: 'Does approval flow into production automatically?', a: 'Approved designs hand off into order/job tracking, closing the gap between a signed-off file and a production job.' },
  { q: 'We already manage files and approvals over WhatsApp informally. What changes?', a: 'The same WhatsApp conversation now attaches to a structured job record instead of disappearing into chat history — nothing about how you talk to clients changes, what happens to that conversation afterward does.' },
];

const cadServices = {
  slug: 'solutions/cad-services',
  title: 'Software for Jewellery CAD Studios: Briefs, Approvals, Handoff | Jwero',
  description: 'CAD job intake, approval and production handoff with client communication on WhatsApp — nothing lost between design revision and job file.',
  breadcrumbs: BC('CAD services'),
  faqs: cadServicesFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR CAD SERVICES',
  h1: 'Design files to job files, connected.',
  sub: 'CAD job intake, approval and production handoff with client communication on WhatsApp — nothing lost between a design revision and a job file, because they live on the same thread.',
  primary: { href: '#', label: 'Talk shop with us', wa: 'cad' },
  secondary: { href: '/solutions/manufacturers', label: 'See the manufacturer overview' },
})}
${L.section(
  `${L.painRows([
    { quote: 'Design revisions get lost in scattered WhatsApp threads.', title: 'One thread per design', text: 'Briefs, revisions and approvals stay on one record — nothing chased down after the fact.' },
    { quote: 'There’s a gap between "client approved" and "job started".', title: 'Approval-to-production handoff', text: 'Approved designs flow into order tracking, closing the file-to-job disconnect.' },
  ])}`
)}
${L.section(`${L.sectionHead('QUESTIONS CAD STUDIOS ASK', 'Revisions, approvals and handoff — answered.', '')}${L.faqBlock(cadServicesFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/solutions/manufacturers">See the manufacturer overview</a> or <a href="/faq">the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">This site’s own chat button runs on Jwero — <a href="#" data-wa="cad">test our inbox</a> before you take our word for anything else.</p>`, { tone: 'tint' })}

${L.ctaBand('Track one design, end to end.', 'Bring one CAD job — we’ll show the thread from brief to production handoff.', 'cad', { enterprise: true })}
`,
};

const oemManufacturersFaqs = [
  { q: 'Can work for different client brands stay separated?', a: 'Yes — client-wise structure keeps specs, WIP and settlement segregated per buyer brand, even when they share your production floor.' },
  { q: 'Can gold-loss be tracked per client job?', a: 'Yes — the WIP ledger tracks fine weight and loss per job, so settlement reflects what happened, not an estimate.' },
  { q: 'What if two client brands’ jobs get physically mixed on the floor?', a: 'The record stays separated even if the physical workflow shares equipment — job-level tracking is what prevents a mix-up from becoming a settlement dispute.' },
];

const oemManufacturers = {
  slug: 'solutions/oem-manufacturers',
  title: 'OEM Jewellery Manufacturing Software: Client-Wise Job Work | Jwero',
  description: 'Multi-client job-work: client-wise WIP, specs and settlement — your buyers’ brands, run cleanly on your system.',
  breadcrumbs: BC('OEM manufacturers'),
  faqs: oemManufacturersFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR OEM MANUFACTURERS',
  h1: 'Make for many brands from one workshop, with each buyer’s job-work on its own ledger.',
  sub: 'Multi-client job-work: client-wise WIP, specs and settlement — segregated cleanly, run centrally, so each buyer brand gets an accurate settlement without cross-contamination.',
  primary: { href: '#', label: 'Talk shop with us', wa: 'oem' },
  secondary: { href: '/solutions/manufacturers', label: 'See the manufacturer overview' },
})}
${L.section(
  `${L.painRows([
    { quote: 'Specs and disputes multiply when you run several client brands.', title: 'Client-wise segregation', text: 'Specs, WIP and settlement kept separate per buyer, even on a shared production floor.' },
    { quote: 'Settlement reconciliation at month-end takes days.', title: 'Settlement from real data', text: 'Settlement reports come from the same per-job WIP and loss ledger, not a manual reconstruction.' },
  ])}`
)}
${L.section(`${L.sectionHead('QUESTIONS OEM MANUFACTURERS ASK', 'Client segregation and settlement — answered.', '')}${L.faqBlock(oemManufacturersFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/solutions/manufacturers">See the manufacturer overview</a> or <a href="/faq">the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">You don’t have to take our word for it — <a href="#" data-wa="oem">try the chat button on this page</a>; it’s Jwero, live, answering.</p>`, { tone: 'tint' })}

${L.ctaBand('See one client’s jobs, isolated.', 'Bring one OEM buyer’s order book — we’ll show WIP and settlement for that client alone.', 'oem', { enterprise: true })}
`,
};

const exportHousesFaqs = [
  { q: 'Can it handle multi-currency orders?', a: 'Multi-currency support is not yet shipped and needs verification before it’s promised to an export buyer — ask us for the current status for your specific requirement.' },
  { q: 'Can overseas buyers get replies outside business hours?', a: 'Yes — the AI workforce answers enquiries around the clock, with drafts approved by your team, which matters when buyers are several timezones away.' },
  { q: 'Export compliance is strict — what happens if the system can’t handle a requirement?', a: 'We’ll tell you plainly on a demo rather than let you discover a gap mid-shipment. Order tracking and documentation trails are live; anything statutory-specific gets verified against your exact requirement first.' },
];

const exportHouses = {
  slug: 'solutions/export-houses',
  title: 'Jewellery Export Software: Orders, Production, Buyer Currency | Jwero',
  description: 'Order-to-shipment tracking with documentation trails, and 24/7 buyer replies across timezones — export-grade process discipline.',
  breadcrumbs: BC('Export houses'),
  faqs: exportHousesFaqs,
  body: `
${L.hero({
  eyebrow: 'FOR EXPORT HOUSES',
  h1: 'Order to shipment, tracked to the gram, in the currency your buyer pays.',
  sub: 'Order-to-shipment tracking with documentation trails, and replies to overseas buyers around the clock — because a timezone gap shouldn’t mean a slow reply. Jwero is India-first by design — GST and HUID are built in; invoicing in your buyer’s currency is; local tax rails abroad are not yet.',
  primary: { href: '#', label: 'Talk shop with us', wa: 'export' },
  secondary: { href: '/solutions/manufacturers', label: 'See the manufacturer overview' },
})}
${L.section(
  `${L.painRows([
    { quote: 'Manual paperwork per shipment eats days we don’t have.', title: 'Order & documentation trail', text: 'Orders tracked with documentation status attached — what exists today, honestly, not oversold.' },
    { quote: 'Our buyers are in different timezones and expect fast replies.', title: 'Replies around the clock', text: 'The AI workforce answers enquiries at any hour, approved by your team before they send.' },
  ])}`
)}
${L.honestGapsBlock(['Multi-currency order support — not yet shipped; ask us for its current status against your specific export requirement.'])}
${L.section(`${L.sectionHead('QUESTIONS EXPORT HOUSES ASK', 'Documentation, timezones and honest gaps — answered.', '')}${L.faqBlock(exportHousesFaqs)}<p class="cta-note" style="margin-top:14px">More questions? <a href="/solutions/manufacturers">See the manufacturer overview</a> or <a href="/faq">the full FAQ →</a></p>`)}
${L.section(`${L.proofStrip()}<p class="live-demo-note">Every chat button on this site is the actual product, not a mockup — <a href="#" data-wa="export">send one message</a> and see for yourself.</p>`, { tone: 'tint' })}

${L.ctaBand('Bring one export order.', 'We’ll walk one shipment through the system, from order to documentation.', 'export', { enterprise: true })}
`,
};

module.exports = [castingUnits, cadServices, oemManufacturers, exportHouses];
