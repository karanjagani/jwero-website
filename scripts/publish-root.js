#!/usr/bin/env node
// Publishes the built site to the repository root so GitHub Pages can serve it
// from "branch / (root)". Run after `node build.js`:  node scripts/publish-root.js
//
// - Copies everything in dist/ except assets/ (the root assets/ folder is the
//   one the pages use) to the repository root.
// - On a project site the pages live under /<repo>/, so resource and link
//   paths in the HTML are prefixed with that base and <html> gets data-base.
//   With a custom domain (a CNAME file at the root) the base is empty.
//   Override with PAGES_BASE, e.g. PAGES_BASE="" node scripts/publish-root.js
// - Remembers what it wrote in .pages-manifest.json and removes those entries
//   on the next run, so a deleted page does not linger. Source files are never
//   touched.
const fs = require('fs'); const path = require('path');
const ROOT = path.join(__dirname, '..'), DIST = path.join(ROOT, 'dist'), MANIFEST = path.join(ROOT, '.pages-manifest.json');
const KEEP = new Set(['assets', 'blueprint', 'content', 'scripts', 'dist', 'node_modules', 'build.js', 'lib.js', 'package.json', 'package-lock.json', '.git', '.gitignore', '.claude', 'CNAME', 'README.md', '.pages-manifest.json', '.nojekyll']);
const hasCname = fs.existsSync(path.join(ROOT, 'CNAME'));
const BASE = process.env.PAGES_BASE !== undefined ? process.env.PAGES_BASE.replace(/\/$/, '') : hasCname ? '' : '/' + path.basename(ROOT).replace(/\s+/g, '-');

if (!fs.existsSync(path.join(DIST, 'index.html'))) { console.error('dist/ is empty: run node build.js first'); process.exit(1); }
// remove what the last run wrote
if (fs.existsSync(MANIFEST)) for (const e of JSON.parse(fs.readFileSync(MANIFEST, 'utf8'))) if (!KEEP.has(e)) fs.rmSync(path.join(ROOT, e), { recursive: true, force: true });

const withBase = (html) => !BASE ? html : html
  .replace(/<html /, `<html data-base="${BASE}" `)
  .replace(/<\/head>/, BASE ? '<meta name="robots" content="noindex, nofollow"></head>' : '</head>')
  .replace(/\b(href|src|action|poster)="\/(?!\/)/g, `$1="${BASE}/`)
  .replace(/url\((['"]?)\/assets\//g, `url($1${BASE}/assets/`)
  .replace(/content="0;\s*url=\/(?!\/)/g, `content="0; url=${BASE}/`);

const written = [];
function copy(from, to) {
  const st = fs.statSync(from);
  if (st.isDirectory()) { fs.mkdirSync(to, { recursive: true }); for (const e of fs.readdirSync(from)) copy(path.join(from, e), path.join(to, e)); return; }
  if (from.endsWith('.html')) fs.writeFileSync(to, withBase(fs.readFileSync(from, 'utf8')));
  else fs.copyFileSync(from, to);
}
for (const e of fs.readdirSync(DIST)) {
  if (e === 'assets' || e === '.DS_Store') continue;
  if (KEEP.has(e)) { console.error(`skipped ${e}: it would overwrite a source file`); continue; }
  copy(path.join(DIST, e), path.join(ROOT, e)); written.push(e);
}
fs.writeFileSync(path.join(ROOT, '.nojekyll'), '');
fs.writeFileSync(MANIFEST, JSON.stringify(written.sort(), null, 1) + '\n');
console.log(`Published ${written.length} entries to the repository root, base "${BASE || '/'}"`);
