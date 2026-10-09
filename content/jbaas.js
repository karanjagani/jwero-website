// Jewellery Business as a Service: the managed offer on the platform site.
// The platform pages stay as they are; this page and the home and pricing
// sections let a visitor see the software and, if they want, hand the work
// over. Founder decisions (2026-10-05): managed customers pay no subscription
// and every tool is included; managed work is priced on the work (50% of the
// cheapest way to staff it in India, 60% when the jeweller approves every
// step); reply within minutes; onboarding in a day. The full calculator lives
// on the positioning site at /focus/count-your-team.
const L = require('../lib');

const TIERS = () => `${require('./graphics').tierGlance()}
<div class="jb-tiers">
  <article class="jb-tier" id="tier-1">
    <p class="jb-k">01 · Run it yourself</p>
    <h3>Your team, Jwero’s platform</h3>
    <p class="jb-who">For a showroom or small chain with its own team.</p>
    <p class="jb-price jb-price-sm">Free trial first</p>
    <p class="jb-note"><b>Your price is shown in your account when the trial ends.</b> Billed monthly, no lock-in.</p>
    <ul><li><b>Every product, one price.</b> WhatsApp, counter, stock, POS, schemes, girvi, workshop, books, team, marketing and communication. Nothing per module, nothing per seat.</li><li><b>Replaces the separate tools</b> most shops pay for today, so there is no other software to buy.</li><li><b>Adds the hands you have been trying to hire:</b> AI and automation that take on the work of several people, with your team approving what matters. <a href="/count-your-team">See how many for your shop →</a></li><li><b>The systems national jewellery brands run on,</b> from your first counter. The platform is ready; your vision and execution set how far it goes.</li><li><b>Live in a day.</b> Customers, catalogue and stock imported for you.</li></ul>
    <div class="jb-cta"><a class="btn btn-ghost jb-btn2" href="${L.TRIAL_URL}pricing-tiers" rel="noopener" data-trial><span>Start for ₹3,600</span><small>Join the waitlist</small></a><a class="jb-demo" href="/book-demo">Book a demo</a></div>
    <p class="jb-fine">Messages, AI calls and listings run on a prepaid balance.</p>
  </article>
  <article class="jb-tier is-main" id="tier-2">
    <p class="jb-k">02 · Let Jwero run it</p>
    <h3>You get the results, not the software</h3>
    <p class="jb-who">For the owner who wants the outcome, not another system to manage.</p>
    <p class="jb-price jb-price-sm">Priced on the work</p>
    <p class="jb-note"><b>No subscription. Every tool included.</b> About half of what hiring for the same work costs you.</p>
    <ul><li><b>Specialists for a function, or the whole business.</b> Enquiries, scheme collections, posting, listing, walkout follow-ups, books: Jwero’s specialists and AI handle it.</li><li><b>Start with the one job that costs you most,</b> usually enquiries or collections. Add more when you see it working.</li><li><b>An expert for every job you need.</b> Trained, managed and followed up by Jwero, with every tool they need included.</li><li><b>Expertise at the cost of a fresher.</b> Seasoned specialists for what a beginner would cost you.</li><li><b>Your focus stays on outcomes.</b> Your time and energy are not lost to coordinating people, making every small decision or keeping up with what changes.</li><li><b>You approve what matters.</b> Every action is on one account you can read.</li></ul>
    <div class="jb-cta"><a class="btn btn-primary" href="/jewellery-business-as-a-service">Let Jwero run it</a><a class="jb-demo" href="/book-demo">Book a demo</a></div>
    <p class="jb-fine">Tell us what you run and we will say which job to hand over first.</p>
  </article>
  <article class="jb-tier" id="tier-3">
    <p class="jb-k">03 · Chains, brands and groups</p>
    <h3>Your own Jwero, on your own servers</h3>
    <p class="jb-who">For many showrooms, brands or companies.</p>
    <p class="jb-price jb-price-sm">One-time licence</p>
    <p class="jb-note"><b>No recurring fee to Jwero.</b> Support is optional. Rolled out branch by branch, with a pilot first and the season left alone.</p>
    <ul><li><b>The platform you would have built in-house,</b> ready, with every module, your rules, your prices and your branches on one record.</li><li><b>Hosted where you decide:</b> on your premises or in your own cloud. Jwero has no access to your data.</li><li><b>Security and privacy entirely under your policies:</b> your access rules, backups and audits, with roles per branch and team and every action logged.</li><li><b>AI on your terms:</b> run models locally, or connect the models you choose.</li><li><b>Customised to your requirements:</b> your workflows, fields, rules, screens and integrations, with no platform limits on what you can do.</li><li><b>No platform risk.</b> A hosted platform’s downtime, price rises, policy changes and shutdowns stop being your risk.</li><li><b>No vendors to coordinate.</b> One system and one owner of the fix, not ten vendors pointing at each other when something breaks.</li></ul>
    <a class="btn btn-ghost" href="#" data-wa="enterprise">Talk to us</a>
    <p class="jb-fine">You pay only for your own hosting and the services you connect, such as WhatsApp messaging and telephony.</p>
  </article>
</div>
<p class="jb-promise">Onboarding in a day</p>`;

const section = () => L.section(`<span id="jbaas"></span>${L.sectionHead('JEWELLERY BUSINESS AS A SERVICE', 'Use the platform.<br>Or let Jwero run it for you.', 'One platform, three ways to have it. Run it with your team, hand the work to Jwero’s specialists and AI, or roll it out across a chain with your own terms.')}${TIERS()}<p class="jb-more"><a href="/jewellery-business-as-a-service">See how Jewellery Business as a Service works →</a></p>`, { tone: 'tint' });

const WHAT = [
  ['Get more customers', 'Ads, search, social media, content and creatives.'],
  ['Sell more', 'Enquiry replies, follow-up calls, quotations and showroom appointments.'],
  ['Keep customers', 'WhatsApp, loyalty and schemes, reviews and customer care.'],
  ['Grow online', 'Your store, catalogue, photos and marketplaces.'],
  ['Run the back office', 'Data entry, reports, purchase, vendors and stock planning.'],
  ['Strategy', 'A growth plan, monthly reviews and the numbers explained.'],
];
const page = {
  slug: 'jbaas',
  title: 'Jewellery Business as a Service: Managed by Jwero | Jwero',
  description: 'Jwero runs the marketing, sales follow-up, customer engagement, ecommerce and back office of a jewellery business with specialists and AI. No subscription, every tool included, priced on the work. Or run the platform yourself for ₹18,000 a month.',
  breadcrumbs: [['Home', '/'], ['Jewellery Business as a Service']],
  body: `
${L.hero({ eyebrow: 'Jewellery Business as a Service', panel: true, h1: 'You focus on jewellery. We handle the rest.', sub: 'Jwero’s specialists and AI run the work around your jewellery, on the same platform you see on this site. Specialists for every job, every tool included, no subscription.', primary: { href: '#', wa: 'handle', label: 'Let Jwero handle it' }, secondary: { href: '#pricing', label: 'See pricing' }, note: ' Onboarding in a day.' })}
${L.section(`${L.sectionHead('WHAT JWERO RUNS', 'Hand over one function, or all of them.', '')}<div class="jb-what">${WHAT.map(([t, d]) => `<div><b>${t}</b><p>${d}</p></div>`).join('')}</div>`)}
${L.section(`${L.sectionHead('HOW IT STARTS', 'From a first message to work getting done.', '')}<ol class="jb-steps"><li><b>You message us</b>Say what you want, in your own words.</li><li><b>A short call</b>Your business, your team, what you would rather not manage.</li><li><b>Your plan in writing</b>What Jwero takes on, who does it, what it costs.</li><li><b>Onboarded in a day</b>Start with one function. Add more when ready.</li></ol>`, { tone: 'tint' })}
${L.section(`<span id="pricing"></span>${L.sectionHead('PRICING', 'Subscription, managed, or enterprise.', '')}${TIERS()}`)}
${L.section(L.customerLogos())}
${L.section(`<div class="home-price"><div><p class="eyebrow">THE FULL STORY</p><h2>Why Jwero runs it, not just sells it.</h2><p>See the whole idea, the AI team and the calculator on the Jwero Focus site.</p></div><div class="cta-row"><a class="btn btn-primary" href="/focus/">Open Jwero Focus</a><a class="btn btn-ghost" href="/count-your-team">Count your team</a></div></div>`, { tone: 'tint' })}
`,
};
module.exports = [];
module.exports.section = section;
module.exports.TIERS = TIERS;
