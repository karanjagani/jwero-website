// Jewellery Business as a Service: the managed offer on the platform site.
// The platform pages stay as they are; this page and the home and pricing
// sections let a visitor see the software and, if they want, hand the work
// over. Founder decisions (2026-10-05): managed customers pay no subscription
// and every tool is included; managed work is priced on the work (50% of the
// cheapest way to staff it in India, 60% when the jeweller approves every
// step); reply within minutes; onboarding in a day. The full calculator lives
// on the positioning site at /focus/count-your-team.
const L = require('../lib');

const TIERS = () => `
<div class="jb-tiers">
  <article class="jb-tier">
    <p class="jb-k">01 · Subscription</p>
    <h3>You run it</h3>
    <p class="jb-price">₹18,000<span> a month</span></p>
    <p class="jb-note">First month ₹3,600. Billed monthly.</p>
    <ul><li>Every module of the platform</li><li>WhatsApp from an official Meta Business Partner, with payments in the chat</li><li>AI calls at ₹7, 8 at a time</li><li>AI agents that wait for your approval</li><li>Messages, AI and calls on a prepaid wallet</li></ul>
    <div class="jb-cta"><a class="btn btn-ghost jb-btn2" href="${L.TRIAL_URL}pricing-tiers" rel="noopener" data-trial><span>Start for ₹3,600</span><small>Join the waitlist</small></a><a class="jb-demo" href="/book-demo">View demo</a></div>
  </article>
  <article class="jb-tier is-main">
    <p class="jb-k">02 · Managed (JBaaS)</p>
    <h3>Jwero runs it</h3>
    <p class="jb-note">No subscription. Every tool included. About half of what the same work costs you today.</p>
    <ul><li>Jwero specialists and AI do the work</li><li>Start with one function, add more any time</li><li>No team to hire, no tools to buy</li><li>One partner, one account of what was done</li></ul>
    <div class="jb-cta"><a class="btn btn-primary" href="/jewellery-business-as-a-service">Let Jwero handle it</a><a class="jb-demo" href="/book-demo">View demo</a></div>
  </article>
  <article class="jb-tier">
    <p class="jb-k">03 · Enterprise</p>
    <h3>For chains and groups</h3>
    <p class="jb-price">Custom</p>
    <p class="jb-note">Many showrooms, brands or companies, with your own terms.</p>
    <ul><li>Self-run, managed, or a mix by function</li><li>Single sign-on and custom integrations</li><li>A dedicated success manager</li><li>Contracts and security reviews your way</li></ul>
    <a class="btn btn-ghost" href="#" data-wa="enterprise">Talk to us</a>
  </article>
</div>
<p class="jb-promise">Onboarding in a day · Refer a jeweller, save 10%</p>`;

const section = () => L.section(`<span id="jbaas"></span>${L.sectionHead('JEWELLERY BUSINESS AS A SERVICE', 'Use the platform.<br>Or let Jwero run it for you.', 'The same platform, three ways to buy it. Run it with your own team, or hand the work to Jwero’s specialists and AI with every tool included.')}${TIERS()}<p class="jb-more"><a href="/jewellery-business-as-a-service">See how Jewellery Business as a Service works →</a></p>`, { tone: 'tint' });

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
${L.hero({ eyebrow: 'Jewellery Business as a Service', panel: true, h1: 'You focus on jewellery. We handle the rest.', sub: 'Jwero’s specialists and AI run the work around your jewellery, on the same platform you see on this site. No team to hire, no tools to buy, no subscription.', primary: { href: '#', wa: 'handle', label: 'Let Jwero handle it' }, secondary: { href: '#pricing', label: 'See pricing' }, note: ' Onboarding in a day.' })}
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
