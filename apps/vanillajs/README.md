# HtmlSlim VanillaJS Studio

This package delivers the HtmlSlim experience as a framework-free, bilingual (English/Korean) web workspace. It demonstrates the migration goals documented in the PRD:

- **Performance-first VanillaJS shell** with no runtime framework dependencies. All features are implemented using modern DOM APIs.
- **Bilingual UX** using locale dictionaries and persistent preferences so teams can switch between English and Korean instantly.
- **Core HtmlSlim functionality** – paste HTML, slim it with the production rules from the MCP service, inspect removed elements, and copy the results.
- **Migration guardrails and workflow guidance** that surface the key KPIs, feature highlights, and checklists called out in the PRD.

## Getting started

No build tooling is required. Serve the directory with any static file server or open `index.html` directly in your browser.

```bash
# from the repository root
cd apps/vanillajs
python -m http.server 4173
# visit http://localhost:4173
```

The app stores locale preferences in `localStorage` and gracefully falls back to English when a translation is missing.

## Key files

| File | Purpose |
| ---- | ------- |
| `index.html` | Static entry point with a11y skip link and progressive enhancement fallback. |
| `styles.css` | Aurora-inspired design system implemented with CSS variables and responsive layouts. |
| `i18n.js` | Locale dictionaries, locale helpers, and metadata translations. |
| `content.js` | Structured data for metrics, features, workflow steps, and FAQ items. |
| `slim-html.js` | Framework-free implementation of the HtmlSlim slimming algorithm used by the MCP server. |
| `main.js` | Application shell that renders sections, wires events, and powers the HTML slimmer. |

## HtmlSlim rules

The in-browser slimmer removes the same content as the MCP service:

- `<head>`, `<script>`, `<noscript>`, `<style>`, `<svg>`, `<meta>`, and `<link>` blocks.
- HTML comments and extraneous whitespace.
- `data-*`, `on*`, `id`, `class`, and `style` attributes.

A summary card displays the original size, slimmed size, saved characters, and reduction percentage. The removal list surfaces how many of each element or attribute type was stripped.

## Accessibility & UX

- Every interactive control has a visible focus state and supports keyboard navigation.
- Navigation links are tracked with an IntersectionObserver to highlight the active section.
- Live-region friendly stats update as the slimming results change.
- Locale buttons expose both language codes and readable language names (English/한국어).

## Extending the demo

- Update `i18n.js` to add new locales or surface additional PRD copy.
- Adjust `slim-html.js` to tweak removal rules or add transformation steps (e.g., attribute allow-lists).
- Use the workflow checklist as a foundation for deeper integration with project management tooling.

