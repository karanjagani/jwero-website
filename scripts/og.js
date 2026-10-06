#!/usr/bin/env node
// Renders one share image per page (1200×630) with Playwright, from the live
// dev server: the brand panel, the dot-matrix stone, the page title.
// Usage: node build.js --serve &  then  node scripts/og.js
const fs = require('fs'); const path = require('path');
const { chromium } = require(require.resolve('playwright', { paths: [process.env.PW_ROOT || process.cwd(), '/Users/karanjagani/pim'] }));
(async () => {
  const pages = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'dist', 'search-index.json'), 'utf8'));
  const out = path.join(__dirname, '..', 'assets', 'og'); fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch(process.env.PW_CHANNEL ? { channel: process.env.PW_CHANNEL } : {}); const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.goto('http://localhost:4173/assets/og-template.html', { waitUntil: 'load' });
  await page.waitForTimeout(1200);
  const list = [{ u: '/', t: 'The Autonomous Jewellery OS, run by AI', s: '' }].concat(pages.filter((p) => p.u !== '/'));
  for (const p of list) {
    if (process.env.MISSING && fs.existsSync(path.join(out, (p.u === '/' ? 'index' : p.u.replace(/^\//, '').replace(/\//g, '--')) + '.jpg'))) continue;
    await page.evaluate(({ t, s }) => { document.querySelector('#t').textContent = t; document.querySelector('#s').textContent = s || ''; }, p);
    await page.waitForTimeout(80);
    const f = (p.u === '/' ? 'index' : p.u.replace(/^\//, '').replace(/\//g, '--')) + '.jpg';
    await page.screenshot({ path: path.join(out, f), type: 'jpeg', quality: 66 });
  }
  fs.copyFileSync(path.join(out, 'index.jpg'), path.join(__dirname, '..', 'assets', 'og-default.jpg'));
  await browser.close();
  console.log('rendered', list.length, 'share images');
})();
