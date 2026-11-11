// ORGL-Lagekarte: OSM-Daten für Niedersachsen, aufgeteilt pro Kreis/kreisfreier Stadt.
// Läuft per GitHub Actions (.github/workflows/orgl-data.yml) in drei Schritten:
//   node update-germany.js list <out.json>            -> Liste aller Kreise (OSM-Relationen)
//   node update-germany.js shard <list.json> <i> <n> <outDir>  -> Daten für jeden n-ten Kreis
//   node update-germany.js index <inDir> <dataDir>    -> kreise.json (Grenzen vereinfacht) + Dateien übernehmen
// Die Auswertung ist identisch mit der Karte (Skript-Block <script id="core"> in index.html).
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const html = fs.readFileSync(path.join(__dirname, "index.html"), "utf8");
const core = html.match(/<script id="core">([\s\S]*?)<\/script>/)[1];
const mod = { exports: {} };
vm.runInNewContext(core, { module: mod, Math, JSON, Date, String, Number, Set, Object, Array, Uint8Array, parseInt, console });
const { processOSM, qKreis, simplify } = mod.exports;

const SERVERS = [
  "https://overpass-api.de/api/interpreter",
  "https://overpass.private.coffee/api/interpreter",
  "https://overpass.kumi.systems/api/interpreter",
];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
// Vorrang: Friesland und Nachbarkreise (amtliche Kreisschlüssel) – werden zuerst separat verarbeitet
const PRIO = ["03455", "03405", "03462", "03452", "03451", "03461", "03457", "03402", "03403", "03458", "04011", "04012"];
// Optional nur bestimmte Kreise holen (Umgebungsvariable NUR="04011,04012")
const NUR = (process.env.NUR || "").split(",").map((x) => x.trim()).filter(Boolean);
const isPrio = (k) => (NUR.length ? NUR : PRIO).some((p) => (k.ags || "").startsWith(p));

async function overpass(q, label, start = 0) {
  const errs = [];
  for (let round = 0; round < 3; round++) {
    for (let s = 0; s < SERVERS.length; s++) {
      const url = SERVERS[(start + s) % SERVERS.length];
      try {
        const r = await fetch(url, {
          method: "POST",
          body: "data=" + encodeURIComponent(q),
          headers: { "Content-Type": "application/x-www-form-urlencoded", "User-Agent": "ORGL-Lagekarte (GitHub Actions; monatlich)" },
          signal: AbortSignal.timeout(300000),
        });
        if (!r.ok) throw new Error("HTTP " + r.status);
        const js = await r.json();
        if (js.remark && /error|timed out|runtime/i.test(js.remark)) throw new Error(js.remark.slice(0, 150));
        return js;
      } catch (e) {
        errs.push(`${new URL(url).host}: ${e.message}`);
        await sleep(5000);
      }
    }
    await sleep(60000 * (round + 1));
  }
  throw new Error(label + ": " + errs.join(" | "));
}

async function list(out) {
  const q = `[out:json][timeout:300];
area["ISO3166-1"="DE"]["admin_level"="2"]->.de;
(
 rel(area.de)["boundary"="administrative"]["admin_level"="6"]["de:amtlicher_gemeindeschluessel"];
 rel(area.de)["boundary"="administrative"]["admin_level"="4"]["ISO3166-2"~"^DE-(BE|HH|HB)$"];
);
out tags;`;
  const js = await overpass(q, "Kreisliste");
  let k = js.elements.map((e) => ({
    id: e.id,
    n: e.tags.name || "",
    ags: e.tags["de:amtlicher_gemeindeschluessel"] || e.tags["de:regionalschluessel"] || "",
    lvl: e.tags.admin_level,
    iso: e.tags["ISO3166-2"] || "",
  }));
  // Nur Niedersachsen (03) und Bremen/Bremerhaven (04)
  k = k.filter((x) => x.lvl === "6" && (x.ags.startsWith("03") || x.ags.startsWith("04")));
  // Stadtstaaten nur, wenn es dort keine Kreis-Ebene (admin_level 6) gibt
  const pre = { "DE-HH": "02", "DE-HB": "04", "DE-BE": "11" };
  k = k.filter((x) => x.lvl !== "4" || !k.some((y) => y.lvl === "6" && y.ags.startsWith(pre[x.iso])));
  k.sort((a, b) => a.ags.localeCompare(b.ags));
  fs.writeFileSync(out, JSON.stringify(k));
  console.log(`${k.length} Kreise/kreisfreie Städte gefunden`);
}

async function shard(listFile, i, n, outDir) {
  const all = JSON.parse(fs.readFileSync(listFile, "utf8"));
  // n = 0 -> nur Vorrang-Kreise; sonst Vorrang-Kreise auslassen und Rest auf n Pakete verteilen
  const mine = n === 0 ? all.filter(isPrio) : all.filter((k) => !isPrio(k)).filter((_, idx) => idx % n === i);
  fs.mkdirSync(path.join(outDir, "k"), { recursive: true });
  fs.mkdirSync(path.join(outDir, "b"), { recursive: true });
  let ok = 0;
  for (const k of mine) {
    try {
      const js = await overpass(qKreis(k.id), k.n, i);
      const d = processOSM(js);
      if (!d.bnd.length) throw new Error("Grenze fehlt");
      // Schutz: leere/abgebrochene Server-Antwort nie speichern (alte Daten bleiben)
      if (d.lz.length + d.pts.length === 0) throw new Error("keine Objekte geliefert – alte Daten bleiben erhalten");
      // Grenze vereinfacht für die Übersicht (ca. 120 m Toleranz)
      const rings = d.bnd.map((r) => simplify(r, 120).map((p) => [+p[0].toFixed(4), +p[1].toFixed(4)])).filter((r) => r.length >= 2);
      let s = 90, w = 180, nn = -90, e = -180;
      for (const r of d.bnd) for (const p of r) { s = Math.min(s, p[0]); nn = Math.max(nn, p[0]); w = Math.min(w, p[1]); e = Math.max(e, p[1]); }
      d.bnd = [];
      d.kreis = { id: k.id, n: k.n, ags: k.ags };
      fs.writeFileSync(path.join(outDir, "k", k.id + ".json"), JSON.stringify(d));
      fs.writeFileSync(path.join(outDir, "b", k.id + ".json"), JSON.stringify({ id: k.id, n: k.n, ags: k.ags, t: d.t, bb: [+s.toFixed(4), +w.toFixed(4), +nn.toFixed(4), +e.toFixed(4)], r: rings, c: [d.lz.length, d.pts.length] }));
      ok++;
      console.log(`✓ ${k.n}: ${d.lz.length} LP, ${d.pts.length} Objekte`);
    } catch (e) {
      console.log(`✗ ${k.n} (${k.id}): ${e.message}`);
    }
    await sleep(1000);
  }
  console.log(`Paket ${i}/${n}: ${ok} von ${mine.length} Kreisen erfolgreich`);
}

function index(inDir, dataDir) {
  fs.mkdirSync(path.join(dataDir, "k"), { recursive: true });
  const idxFile = path.join(dataDir, "kreise.json");
  const old = fs.existsSync(idxFile) ? JSON.parse(fs.readFileSync(idxFile, "utf8")).k : [];
  const byId = new Map(old.map((k) => [k.id, k]));
  const bDir = path.join(inDir, "b"), kDir = path.join(inDir, "k");
  let neu = 0;
  if (fs.existsSync(bDir)) {
    for (const f of fs.readdirSync(bDir)) {
      const b = JSON.parse(fs.readFileSync(path.join(bDir, f), "utf8"));
      byId.set(b.id, b);
      fs.copyFileSync(path.join(kDir, f), path.join(dataDir, "k", f));
      neu++;
    }
  }
  const k = [...byId.values()].sort((a, b) => (a.ags || "").localeCompare(b.ags || ""));
  fs.writeFileSync(idxFile, JSON.stringify({ t: Date.now(), k }));
  console.log(`Index: ${k.length} Kreise, davon ${neu} in diesem Lauf aktualisiert`);
  if (k.length < 10) console.log("WARNUNG: weniger als 10 Kreise im Index");
}

const [mode, ...a] = process.argv.slice(2);
(async () => {
  if (mode === "list") await list(a[0]);
  else if (mode === "shard") await shard(a[0], +a[1], +a[2], a[3]);
  else if (mode === "index") index(a[0], a[1]);
  else throw new Error("Unbekannter Modus");
})().catch((e) => { console.error(e.message); process.exit(1); });
