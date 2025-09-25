# HtmlSlim VanillaJS Experience

This prototype demonstrates the Codex migration to a performance-first VanillaJS front end without bundlers or frameworks. It keeps the bilingual UX, HtmlSlim tooling, and observability guidance entirely in standards-based HTML, CSS, and ES modules.

## Highlights

- ⚡️ **Performance-first shell** – semantic HTML, CSS variables, and lightweight modules keep the bundle lean and fast to load.
- 🌐 **English/Korean support** – deterministic locale detection with persistent language switching and localized metrics.
- 🧰 **Enhanced HtmlSlim tool** – configurable attribute preservation, character savings summary, copy/download helpers, and accessible toasts.
- ✅ **Migration tracker** – task lists covering platform, localization, and UX milestones so requirements stay visible.
- 🔭 **Observability cues** – callouts for Web Vitals, analytics, and Sentry instrumentation.

## Running the prototype

No build step is required. Serve the `apps/vanillajs` directory with any static file server or open `index.html` directly in a modern browser:

```bash
cd apps/vanillajs
python3 -m http.server 4173
```

Then visit <http://localhost:4173>. Any static server (e.g., `npx http-server`, `deno task serve`) will work.

## Testing checklist

- Verify locale switching, keyboard navigation, and skip links without relying on build tooling.
- Confirm the HtmlSlim tool copies/downloads output and reports reductions in both English and Korean.
- Inspect metrics, tasks, feature cards, and observability content for accurate translations.

The UI honors reduced motion, high contrast, and screen-reader announcements through semantic HTML and ARIA attributes.
