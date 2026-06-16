# Måleri1 — Custom Website

A modern, website for **Måleri1 i Vätterbygden AB**, a painting company based in Vätterbygden, Sweden.

Built from scratch with vanilla JavaScript and Vite. Total production bundle weighs under 100 KB (excluding images).

> **Live site:** [maleri1.netlify.app](https://maleri1.netlify.app) · Custom domain coming soon

---

## Highlights

- **Performance-first** — Static site, no runtime framework, minimal dependencies
- **Modular architecture** — Each section has its own CSS file and JS module
- **Fluid responsive design** — Adapts from 320 px to 4K without breakpoint juggling, using `clamp()` and auto-fit grids
- **Self-contained icons** — All icons are inline SVG, no external CDN dependency
- **Accessible by default** — Semantic HTML, ARIA labels, keyboard navigation, respects `prefers-reduced-motion`
- **Built-in lightbox** — Category-based image gallery powered by GLightbox

## Tech stack

| Layer         | Choice                            | Why                                                |
| ------------- | --------------------------------- | -------------------------------------------------- |
| Build tool    | Vite 5                            | Fast dev server, optimized production builds       |
| Language      | Vanilla JS (ES2022)               | No framework lock-in, near-zero bundle overhead    |
| Styles        | Plain CSS with custom properties  | Modular files, no preprocessor needed              |
| Typography    | Fraunces (display) + Inter (text) | Distinct serif/sans pairing, both via Google Fonts |
| Image gallery | GLightbox                         | Lightweight (~10 KB), touch-friendly, accessible   |
| Hosting       | Netlify                           | Free tier, automatic HTTPS, drag-and-drop deploys  |

## Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # produce optimized build in dist/
npm run preview  # serve the built version locally
```

## Project structure

```
maleri1-vite/
├── index.html                  # single page entry
├── public/
│   └── favicon.svg
└── src/
    ├── styles/
    │   ├── main.css            # imports all stylesheets
    │   ├── base/               # reset, variables, typography
    │   └── components/         # one file per section
    ├── scripts/
    │   ├── main.js             # entry, initializes all modules
    │   └── modules/
    │       ├── icons.js        # inline SVG icon renderer
    │       ├── header.js       # sticky header + parallax
    │       ├── nav.js          # mobile hamburger menu
    │       ├── reveal.js       # scroll-triggered fade-ins + counters
    │       ├── services.js    # service-card accordion
    │       ├── lightbox.js     # portfolio image gallery
    │       └── contact.js      # contact form (mailto fallback)
    └── assets/
        └── images/             # logo, team photo, project shots
```

## Design decisions

**Dark theme with gold accent.** The black background with `#E5B83A` gold is lifted directly from the client's logo. Gold signals craftsmanship and quality — which is exactly what a painting business sells.

**Fraunces + Inter.** The serif/sans pairing avoids the generic "sans-serif everywhere" look common to template sites, without sacrificing readability for body copy.

**Full-viewport sections.** Each section is `min-height: 100vh`, creating a slide-like scrolling experience that puts each topic centre stage. Works because there are only five sections — would not scale to a long marketing page.

**Inline SVG icons.** A common bug with icon webfonts is silent failure when the CDN is slow or blocked. By inlining all 13 icons as SVG paths in a small JS module, the site renders correctly under any network conditions.

**Image galleries instead of project cards.** The client mostly takes one-shot photos per job (not multi-image case studies), so the portfolio shows three category tiles. Each opens a lightbox of every image in that category — better suited to their actual content than per-project pages would be.

## What's next

- [ ] Replace remaining placeholder thumbnails with real project photos
- [ ] Wire contact form to a backend service (Netlify Forms or Web3Forms)
- [ ] Add security headers via `_headers` file
- [ ] Generate sitemap.xml and robots.txt
- [ ] Custom 404 page
- [ ] Point `maleri1.nu` domain to Netlify

## License

Private project. Code is shared for portfolio purposes only — please contact the author before reusing any of it.
