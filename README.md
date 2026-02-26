# 🅿 Parkoló Detektálás - Projekt Weboldal

## Gyors áttekintés

```
parking-detection/
├── index.html          ← főoldal
├── milestones.html     ← mérföldkövek, csapat
├── data.json           ← pontok & csapat adatok (ezt szerkesztitek)
├── css/
│   ├── style.scss      ← stílusok forrása (ezt szerkesztitek)
│   └── style.css       ← lefordított CSS (ezt NE szerkeszd kézzel)
└── js/
    └── shared.js       ← közös JS logika
```

---

## 1. Lokális futtatás
```bash
cd parking-detection
python -m http.server 8080
```

Majd böngészőben: **http://localhost:8080**

Leállítás: `Ctrl + C`

---

## 2. SCSS fordítás → CSS

Az `style.css` fájlt **ne szerkeszd kézzel** - mindig az `style.scss`-t módosítsd, majd fordítsd le.

### Telepítés (csak egyszer kell)
```bash
npm install -g sass
```

### Fordítás (minden módosítás után)
```bash
sass css/style.scss css/style.css
```

Módosítás után futtasd a fordítást, majd töltsd fel a `style.css`-t GitHubra.

---

## 3. Pontok & csapat adatok frissítése

Az összes adat a `data.json` fájlban van. Szerkeszd meg, majd töltsd fel GitHubra.

### Példa - pont rögzítése
```json
{
  "milestones": {
    "m1": { "points": 0 },
    "m2": { "points": 0 },
    "m3": { "points": 0 }
  },
  "team": {
    "Hrotkó Máté": {
      "m1": "Szakirodalom feldolgozása, PDF dokumentum összeállítása, költségbecslés, weboldal elkészítése",
      "m2": "",
      "m3": ""
    },
    "Litavecz Máté": {
      "m1": "Szakirodalom feldolgozása, PDF dokumentum összeállítása, költségbecslésm, algoritmus terv vázlat",
      "m2": "",
      "m3": ""
    }
  }
}
```

> **Max pontok:** m1 = 5 pt · m2 = 10 pt · m3 = 15 pt

---

## 4. Változtatás kirakása GitHub Pages-re

### Egyszeri módosítás feltöltése
```bash
git add .
git commit -m "commit üzenet"
git push
```

### Tipikus munkafolyamat

```
1. python -m http.server 8080     ← szerver indítása
2. módosítod a fájlokat
4. localhost:8080-on ellenőrzöd
5. git add . && git commit && git push
6. ~30 másodperc múlva élő a GitHub Pages-en
```

### Hasznos git parancsok
```bash
git status          # mi változott
git diff            # pontosan mi változott
git log --oneline   # korábbi commitok
```

---

## 5. Mérföldkő tartalom frissítése

Az 1. mérföldkő WIP szekciói (Algoritmus Terv, Dataset források) a `milestones.html`-ben vannak.
Keresd meg a `wip: true` részt és írd felül a `html:` mezőt a végleges tartalommal.

---

## Csapat

| Név | GitHub |
|-----|--------|
| Hrotkó Máté | [@Etam2003](https://github.com/Etam2003) |
| Litavecz Máté | - |