#!/usr/bin/env bash
# Re-download entries flagged "broken" in scripts/media.json using curl (respects proxy).
set -e
node -e "const j=require('./scripts/media.json');for(const m of Object.values(j).flat().filter(m=>m.broken))console.log(m.src+'\t'+m.file)" | while IFS=$'\t' read -r src file; do
  url=$(curl -s -G -A "SugilanonSaKalinaw/1.0 (educational)" "https://commons.wikimedia.org/w/api.php" --data-urlencode "action=query" --data-urlencode "format=json" --data-urlencode "prop=imageinfo" --data-urlencode "iiprop=url" --data-urlencode "iiurlwidth=1600" --data-urlencode "titles=File:$file" | node -e "let s='';process.stdin.on('data',d=>s+=d).on('end',()=>{const p=Object.values(JSON.parse(s).query.pages)[0];console.log(p.imageinfo[0].thumburl)})")
  curl -s -A "SugilanonSaKalinaw/1.0 (educational)" -o "public$src" "$url"
  file "public$src" | grep -q JPEG && node -e "const f='scripts/media.json';const j=require('./'+f);for(const m of Object.values(j).flat())if(m.src==='$src')delete m.broken;require('fs').writeFileSync(f,JSON.stringify(j,null,2))" && echo "ok $src" || echo "FAIL $src"
  sleep 3
done
