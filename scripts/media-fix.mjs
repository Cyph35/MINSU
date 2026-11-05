// Repairs scripts/media.json: re-downloads broken files and replaces chosen entries.
// Usage: node scripts/media-fix.mjs [slug:index=query ...]
import { readFileSync, writeFileSync } from 'node:fs';
const UA = 'SugilanonSaKalinaw/1.0 (educational student project)';
const STORE = 'scripts/media.json';
const store = JSON.parse(readFileSync(STORE, 'utf8'));
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const strip = (h = '') => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const OK = /^(public domain|pd|cc0|cc by(-sa)? ?[\d.]*)/i;
async function api(params) {
  const u = new URL('https://commons.wikimedia.org/w/api.php');
  Object.entries({ action: 'query', format: 'json', prop: 'imageinfo', iiprop: 'url|extmetadata|mime', iiurlwidth: '1600', ...params }).forEach(([k, v]) => u.searchParams.set(k, v));
  for (let t = 0; t < 6; t++) {
    await sleep(2500);
    const txt = await fetch(u, { headers: { 'User-Agent': UA } }).then((r) => r.text());
    if (txt.startsWith('{')) return JSON.parse(txt);
    await sleep(8000 * (t + 1));
  }
  throw new Error('rate limited');
}
async function download(url, file) {
  for (let t = 0; t < 6; t++) {
    await sleep(2000);
    const r = await fetch(url, { headers: { 'User-Agent': UA } });
    if (r.ok && /image/.test(r.headers.get('content-type') ?? '')) { writeFileSync(file, Buffer.from(await r.arrayBuffer())); return; }
    await sleep(8000 * (t + 1));
  }
  throw new Error('download failed ' + url);
}
const used = new Set(Object.values(store).flat().map((m) => 'File:' + m.file));
for (const arg of process.argv.slice(2)) {
  const [, slug, idx, q] = arg.match(/^([\w-]+):(\d+)=(.+)$/);
  const res = await api({ generator: 'search', gsrsearch: `${q} filetype:bitmap`, gsrnamespace: '6', gsrlimit: '15' });
  const pick = Object.values(res.query?.pages ?? {}).sort((a, b) => a.index - b.index).find((p) => {
    const ii = p.imageinfo?.[0]; const lic = ii?.extmetadata?.LicenseShortName?.value ?? '';
    return ii && /jpeg/.test(ii.mime) && OK.test(lic) && !/NC|ND/.test(lic) && !used.has(p.title) && (ii.thumbwidth ?? 0) >= 800;
  });
  if (!pick) { console.log('NO MATCH', arg); continue; }
  used.add(pick.title);
  const ii = pick.imageinfo[0]; const m = ii.extmetadata;
  store[slug][+idx] = { kind: 'image', src: `/media/${slug}/${idx}.jpg`, width: ii.thumbwidth, height: ii.thumbheight,
    file: pick.title.replace(/^File:/, ''), title: pick.title.replace(/^File:/, '').replace(/\.\w+$/, ''),
    description: strip(m.ImageDescription?.value).slice(0, 220), credit: strip(m.Artist?.value) || 'Unknown author',
    license: strip(m.LicenseShortName?.value), sourceUrl: ii.descriptionurl, query: q, broken: true };
  console.log(arg, '→', pick.title, '|', strip(m.LicenseShortName?.value));
  writeFileSync(STORE, JSON.stringify(store, null, 2));
}
for (const list of Object.values(store)) for (const m of list) {
  let head = Buffer.alloc(4); try { head = readFileSync('public' + m.src).subarray(0, 4); } catch {}
  const isImg = (head[0] === 0xff && head[1] === 0xd8) || head[0] === 0x89;
  if (isImg && !m.broken) continue;
  const res = await api({ titles: 'File:' + m.file });
  const ii = Object.values(res.query.pages)[0].imageinfo[0];
  await download(ii.thumburl, 'public' + m.src);
  delete m.broken;
  writeFileSync(STORE, JSON.stringify(store, null, 2));
  console.log('downloaded', m.src);
}
writeFileSync(STORE, JSON.stringify(store, null, 2));
writeFileSync('src/data/media.generated.ts', `// AUTO-GENERATED from scripts/media.json — Wikimedia Commons metadata.\nexport interface CommonsImage { kind: 'image'; src: string; width: number; height: number; file: string; title: string; description: string; credit: string; license: string; sourceUrl: string; query: string }\nexport const commons: Record<string, CommonsImage[]> = ${JSON.stringify(store, null, 2)};\n`);
