// The articles from the jwero.ai blog, kept at their original addresses so no
// search ranking or inbound link is lost. Source: content/legacy-posts.json,
// imported from the live site's WordPress API on 2026-10-06 and cleaned to
// plain article HTML (headings, paragraphs, lists, tables, links, images).
const L = require('../lib');
const { posts } = require('./legacy-posts.json');
const { link } = require('./interlink');
const fmt = (d) => new Date(d + 'T00:00:00Z').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
const page = (p) => ({
  slug: p.slug,
  legacy: true,
  title: `${p.title} | Jwero`,
  description: p.description,
  breadcrumbs: [['Home', '/'], ['Blog', '/blog'], [p.title]],
  schema: { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: p.title, description: p.description, datePublished: p.date, dateModified: p.modified,
    author: { '@type': 'Organization', name: 'Jwero editorial team', url: 'https://jwero.ai/company' }, publisher: { '@type': 'Organization', name: 'Jwero' }, articleSection: p.topic },
  body: `
${L.hero({ eyebrow: p.topic.toUpperCase(), h1: p.title, sub: p.description, secondary: { href: '/blog', label: 'All articles' } })}
${L.section(`<p class="post-meta"><span>${p.topic}</span> · <span>${Math.max(2, Math.round(p.words / 220))} min read</span> · <span>By the Jwero editorial team</span> · <span>Published ${fmt(p.date)}</span> · <span>Reviewed October 2026</span></p>`)}
${L.section(`<div class="post-body">${link(p.body, '/' + p.slug).html}</div>`)}
${L.ctaBand('Want this running in your business?', 'Tell us what you want to achieve.', 'blog-' + p.slug.slice(0, 40))}
`,
});
module.exports = posts.map(page);
module.exports.POSTS = posts;
