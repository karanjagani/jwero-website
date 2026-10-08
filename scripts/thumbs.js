// Card thumbnails: 480px WebP copies of the share images (assets/og/*.jpg), made
// only when missing or older than the source. Hub cards use these instead of
// the 1200px originals; the originals stay for social previews.
const fs = require('fs'), path = require('path'), { execFileSync } = require('child_process');
const SRC = path.join(__dirname, '..', 'assets', 'og'), OUT = path.join(SRC, 'thumb');
fs.mkdirSync(OUT, { recursive: true });
// On a build host without cwebp (Cloudflare Pages, CI) the committed thumbnails are used as they are.
try { execFileSync('cwebp', ['-version'], { stdio: 'ignore' }); } catch (e) { return; }
let made = 0;
for (const f of fs.readdirSync(SRC).filter((x) => x.endsWith('.jpg'))) {
  const src = path.join(SRC, f), dst = path.join(OUT, f.replace(/\.jpg$/, '.webp'));
  if (fs.existsSync(dst) && fs.statSync(dst).mtimeMs >= fs.statSync(src).mtimeMs) continue;
  try { execFileSync('cwebp', ['-quiet', '-q', '72', '-resize', '480', '0', src, '-o', dst]); made++; } catch (e) { console.warn('thumb failed', f, e.message); break; }
}
if (made) console.log(`thumbs: ${made} made`);
