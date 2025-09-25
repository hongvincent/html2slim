# HtmlSlim VanillaJS Experience

This package delivers the VanillaJS migration prototype for HtmlSlim. It replaces the React/Next.js stack with an accessible, bilingual experience powered by Vite and modern browser APIs.

## Highlights

- ⚡️ **Performance-first shell** – semantic HTML, CSS variables, and zero-runtime rendering keep the bundle lean.
- 🌐 **English/Korean support** – deterministic locale detection with persistent language switching and localized metrics.
- 🧰 **Enhanced HtmlSlim tool** – configurable attribute preservation, character savings summary, copy/download helpers, and accessible toasts.
- ✅ **Migration tracker** – task lists tracking platform, localization, and UX milestones to avoid missed requirements.
- 🔭 **Observability cues** – callouts for Web Vitals, analytics, and Sentry instrumentation.

## Development

```bash
cd apps/vanillajs
pnpm install # or npm install
pnpm dev     # or npm run dev
```

The build output is emitted with `pnpm build`. Static assets live in `dist/`.

## Testing Checklist

- Run `pnpm typecheck` to validate TypeScript types.
- Execute `pnpm build` to ensure Vite bundles without errors.

The UI is optimized for keyboard navigation, high-contrast themes, and reduced motion preferences.
