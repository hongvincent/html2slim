# HtmlSlim Concept Gallery

A fantastical VanillaJS landing experience that showcases the Codex migration vision without implementing the migration tools themselves. The page celebrates the signature capabilities, bilingual storytelling, and performance-first ethos behind HtmlSlim.

## Experience Highlights

- **Aurora hero** – Gradient atmospherics, animated light orbs, and a stat panel summarising migration goals.
- **Feature suite** – Three immersive cards detailing slimming artistry, experience design, and bilingual harmony with English/Korean copy.
- **Journey timeline** – Gradient-wrapped path that illustrates the four beats from discovery to launch.
- **Immersive spotlights** – Glassmorphism scenes for creative canvases, flow telemetry, and operational governance.
- **Team voices** – Testimonials rendered in both locales to reinforce trust and momentum.

## Getting Started

The gallery runs entirely on static assets:

```bash
cd apps/vanillajs
python3 -m http.server 4173
```

Open <http://localhost:4173> in a modern browser, or simply double-click `index.html`. No build toolchain is required.

## Interaction Notes

- Use the language pills in the sticky header to swap instantly between English and Korean.
- Navigation links animate as you scroll thanks to IntersectionObserver-enhanced section tracking.
- Reduced-motion preferences disable background animations for accessibility.

## Project Structure

```
apps/vanillajs/
├── content.js   # Structured data powering features, timelines, spotlights, and testimonials
├── i18n.js      # English/Korean translations and helpers
├── index.html   # Entry document loading the VanillaJS modules
├── main.js      # Renders the layout, handles locale switching, smooth scroll, and nav highlights
├── styles.css   # Aurora-inspired visual language with gradients, glass, and responsive layouts
└── README.md    # You are here
```

The concept intentionally omits the migration tooling to focus on visual storytelling. Treat it as an inspirational reference when planning the production-ready VanillaJS experience.
