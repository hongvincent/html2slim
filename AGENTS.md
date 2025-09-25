# AGENTS

## Scope
These instructions apply to the entire repository unless a more specific `AGENTS.md` is added in a subdirectory.

## Product Context
Codex is migrating from a framework-heavy front end to a performance-first VanillaJS stack with full English/Korean (en/ko) support. Key personas include developers, product managers, localization managers, admins, and support engineers who rely on fast, accessible documentation and collaboration experiences.

## Core Priorities
1. **Platform Migration (P0)**
   - VanillaJS app shell with ESM modules and progressive enhancement.
   - Build via Vite/ESBuild with differential serving and aggressive tree-shaking.
   - Maintain route parity while shrinking initial JS (≤150 KB gzipped) and TTI (≤1.5 s on 4G).
2. **Navigation & Discovery (P0)**
   - Accessible global header/footer with locale switcher.
   - Collapsible left navigation with persistent state, breadcrumbs, and keyboard support.
   - Debounced, language-aware search bar with `/` shortcut and live-region updates.
3. **Content Consumption (P0)**
   - Fast reader view with TOC anchors, related content per locale, and print-friendly layout.
4. **Localization & i18n (P0)**
   - Deterministic locale detection (Accept-Language, user preference, URL prefix).
   - Namespaced JSON resources, localized formatting, graceful fallbacks with badges, and pseudo-localization in staging.
5. **Accessibility & Compliance (P0)**
   - WCAG 2.1 AA: focus states, aria labels, skip links, keyboard shortcuts, screen-reader announcements.
6. **Authoring & Management (P1)**
   - Markdown/WYSIWYG editor with inline validation, autosave, diffing, and translation status.
7. **Performance, Observability & Security (P0)**
   - Web Vitals monitoring, Sentry, analytics for locale usage, OAuth/OIDC or JWT with CSRF protection, RBAC, signed asset URLs.
8. **Offline & Resilience (P2)**
   - Service worker caching, resilient fetch utilities with retry and backoff.

## Implementation Guidelines
- Favor Tailwind CSS (Bootstrap acceptable) with semantic HTML and CSS variables for tokens.
- Ensure progressive enhancement: core flows should work without JavaScript; enhance when JS loads.
- Prioritize keyboard accessibility, reduced motion preferences, and high-contrast support.
- For Korean IME inputs, avoid premature debouncing and respect composition events.
- Provide inline badges or notices for partial/missing translations and prevent accidental overwrites in fallback mode.
- Capture essential analytics: searches, locale selection, translation coverage, and engagement per locale.
- Maintain 99.9% uptime target with <0.2% client-side error rate (P95).

## Testing Expectations
- Include automated checks for performance budgets, accessibility (WCAG AA), localization coverage, and analytics instrumentation where applicable.
- When adding authoring tools, ensure validation, sanitization, and optimistic UI have rollback paths.

