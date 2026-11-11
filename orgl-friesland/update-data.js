// Holt die OSM-Daten für die ORGL-Lagekarte und speichert sie ausgewertet als data.json.
// Läuft automatisch per GitHub Actions (.github/workflows/orgl-data.yml).
// Nutzt exakt dieselbe Auswertung wie die Karte (Skript-Block <script id="core"> in index.html).
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const dir = __dirname;
const html = fs.readFileSync(path.join(dir, "index.html"), "utf8");
const core = html.match(/<script id="core">([\s\S]*?)<\/script>/)[1];
const mod = { exports: {} };
vm.runInNewContext(core, { module: mod, Math, JSON, Date, String, Number, Set, Object, Array, parseInt, console });
const { processOSM, qMain, qExtra, BBOX } = mod.exports;

const SERVERS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
  "https://overpass.private.coffee/api/interpreter",
];

async function overpass(q, label) {
  const errs = [];
  for (let round = 0; round < 2; round++) {
    for (const url of SERVERS) {
      try {
        const r = await fetch(url, {
          method: "POST",
          body: "data=" + encodeURIComponent(q),
          headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": "ORGL-Lagekarte-Friesland (GitHub Actions)" },
          signal: AbortSignal.timeout(150000),
        });
        if (!r.ok) throw new Error("HTTP " + r.status);
        const js = await r.json();
        if (js.remark && /error|timed out|runtime/i.test(js.remark)) throw new Error(js.remark);
        console.log(`${label}: ${url} -> ${js.elements.length} Elemente`);
        return js;
      } catch (e) {
        errs.push(`${url}: ${e.message}`);
        console.log(`${label}: ${url} fehlgeschlagen (${e.message})`);
      }
    }
    await new Promise((r) => setTimeout(r, 30000));
  }
  throw new Error(label + " fehlgeschlagen: " + errs.join(" | "));
}

(async () => {
  let sel = "(area.a)";
  let main = await overpass(qMain(sel), "Teil 1");
  if (main.elements.length <= 1) {
    console.log("Kreisgebiet nicht gefunden – nutze Ersatz-Rechteck");
    sel = "(" + BBOX + ")";
    main = await overpass(qMain(sel), "Teil 1 (Rechteck)");
  }
  const extra = await overpass(qExtra(sel), "Teil 2");
  const data = processOSM({ elements: main.elements.concat(extra.elements) });
  data.mode = sel;
  if (data.lz.length < 10 || data.pts.length < 20) {
    throw new Error(`Unplausibel wenig Daten (${data.lz.length} Landeplätze, ${data.pts.length} Objekte) – data.json bleibt unverändert`);
  }
  fs.writeFileSync(path.join(dir, "data.json"), JSON.stringify(data));
  console.log(`Fertig: ${data.lz.length} Landeplatz-Kandidaten, ${data.pts.length} Objekte, ${data.pwr.length} Leitungen, ${data.wka.length} WEA`);
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
