# maleri1.nu

Website for Måleri1 i Vätterbygden AB, a painting company in Sweden.

Live at [maleri1.nu](https://maleri1.nu)

## Stack

- Vite 5 + vanilla JS, no framework
- Plain CSS with custom properties, one file per section
- Fraunces + Inter via Google Fonts
- GLightbox for the portfolio galleries, with a custom slideshow layer on top
- Netlify Forms for the contact form
- Hosted on Netlify — domain and email stay at Loopia

## Structure

```
├── index.html
├── public/            # favicon, 404 page, _headers, robots.txt, sitemap
└── src/
    ├── styles/
    │   ├── base/          # reset, variables, typography
    │   └── components/    # one css file per section
    ├── scripts/
    │   ├── main.js
    │   └── modules/       # icons, header, nav, reveal, services, lightbox, contact
    └── assets/images/     # logo, team photo, project photos
```

## Notes

**Icons are inline SVG** in `scripts/modules/icons.js`. Started out with an icon webfont but it failed silently when the CDN was slow, so I inlined everything instead. Use `<i data-icon="name">` in the markup.

**Portfolio images** are imported with Vite's `import.meta.glob` in `lightbox.js` so they get hashed and bundled correctly.

**The galleries autoplay** (4.5s per slide, fade transition) with a pause/play button and a counter. Autoplay stops if the visitor starts navigating manually.

**Contact form** posts to Netlify Forms. Honeypot field for spam, email notification to the company inbox on every submission. The first version used a `mailto:` action, which depended on visitors having a mail client configured.

**DNS:** the domain points to Netlify (A record + www CNAME) but all mail records (MX, SPF, DKIM, autoconfig) still point to Loopia where the company email lives.

**Team avatars** are cropped from the group photo using `background-position` in `team.css`.

**Dark theme with gold** (`#E5B83A`) comes straight from their logo. Sections are full-viewport height, which works fine with five sections but wouldn't scale to a longer page.
