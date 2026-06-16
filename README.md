# Måleri1 — Hemsida

En modern one-page-hemsida för Måleri1 i Vätterbygden AB, ett måleriföretag baserat i Habo och Jönköping.

## Översikt

Statisk webbplats byggd med vanilla JavaScript och Vite som build-verktyg. Designad med fokus på snabb laddning, tillgänglighet och tydlig konvertering — en besökare ska inom några sekunder förstå vad företaget gör och hur de når dem.

### Funktioner

- Sticky header med scroll-känslig stil
- Scroll-triggade fade-in-animationer (IntersectionObserver)
- Animerade räknare i hero-sektionen
- Portfolio-galleri med kategorifilter
- Kontaktformulär som öppnar e-postklienten med förifyllt innehåll
- Fullt responsiv från mobil (320px) till stor desktop
- Subtila mikrointeraktioner (hover, parallax)

## Teknik

- **Build-verktyg:** Vite 5
- **JavaScript:** Vanilla ES2022, uppdelat i moduler
- **CSS:** Modulär struktur med CSS custom properties för temat
- **Typografi:** Fraunces (display) + Inter (text) via Google Fonts
- **Ikoner:** Tabler Icons webfont
- **Ingen ramverks-runtime** — sidan väger under 30 kB minifierad

## Kom igång

```bash
npm install
npm run dev      # startar dev-server på http://localhost:5173
npm run build    # bygger produktion till dist/
npm run preview  # förhandsgranskar den byggda versionen
```

## Projektstruktur

```
maleri1/
├── index.html
├── package.json
├── vite.config.js
├── public/                       statiska filer som kopieras as-is
│   └── favicon.svg
└── src/
    ├── styles/
    │   ├── main.css              entry, importerar alla andra
    │   ├── base/
    │   │   ├── reset.css
    │   │   ├── variables.css
    │   │   └── typography.css
    │   └── components/
    │       ├── header.css
    │       ├── hero.css
    │       ├── services.css
    │       ├── portfolio.css
    │       ├── team.css
    │       ├── contact.css
    │       ├── footer.css
    │       └── reveal.css
    ├── scripts/
    │   ├── main.js               entry, importerar alla moduler
    │   └── modules/
    │       ├── header.js         scroll-state och parallax
    │       ├── nav.js            mobil hamburger-meny
    │       ├── reveal.js         scroll-triggad fade-in + räknare
    │       ├── portfolio.js      kategorifilter
    │       └── contact.js        formulärhantering
    └── assets/
        └── images/               bilder används av komponenter
```

## Designval

**Färg.** Svart bakgrund med guld (#E5B83A) som accent — hämtat direkt från företagets logga. Guld signalerar kvalitet och hantverk, vilket är vad ett måleriföretag säljer.

**Typografi.** Fraunces för display ger en distinkt karaktär jämfört med generiska sans-serif-rubriker. Inter för brödtext säkrar läsbarhet.

**Layout.** Alternerande mörka och ljusa sektioner skapar rytm. Numrerade sektioner (01, 02, ...) ger besökaren en känsla av flöde.

## Att göra innan lansering

- [ ] Ersätta gradient-platshållare i portfolio-gallerit med riktiga bilder
- [ ] Lägga till riktig logga som SVG
- [ ] Koppla kontaktformuläret till en backend-tjänst (Formspree, Web3Forms)
- [ ] Lägga till Open Graph och Twitter Card-meta-taggar
- [ ] Konfigurera domän och hosting (Netlify, Vercel eller Cloudflare Pages)

## Licens

Privat projekt. All form av återanvändning kräver tillstånd från Måleri1 i Vätterbygden AB.
