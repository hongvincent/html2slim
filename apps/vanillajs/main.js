import { getTranslation, isLocale, locales } from "./i18n.js";
import {
  stats,
  formatStatValue,
  featureCards,
  journeySteps,
  spotlights,
  testimonials,
} from "./content.js";

const state = {
  locale: detectLocale(),
};

function detectLocale() {
  const stored = typeof window !== "undefined" ? window.localStorage.getItem("htmlslim-locale") : null;
  if (stored && isLocale(stored)) {
    return stored;
  }

  if (typeof navigator !== "undefined") {
    const language = navigator.language?.slice(0, 2).toLowerCase();
    if (language && isLocale(language)) {
      return language;
    }
  }

  return "en";
}

function persistLocale(locale) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem("htmlslim-locale", locale);
  }
}

function t(key, locale = state.locale) {
  const value = getTranslation(locale, key);
  return typeof value === "string" ? value : "";
}

function render() {
  const root = document.querySelector("#app");
  if (!root) {
    throw new Error("Missing #app container");
  }

  document.documentElement.lang = state.locale;

  root.innerHTML = `
    <div class="page-shell">
      ${renderHeader()}
      <main id="main" tabindex="-1">
        ${renderHero()}
        ${renderFeatures()}
        ${renderJourney()}
        ${renderSpotlights()}
        ${renderTestimonials()}
        ${renderClosing()}
      </main>
      ${renderFooter()}
    </div>
  `;

  setupLocaleControls();
  setupSmoothScroll();
  setupSectionObserver();

  const skipLink = document.querySelector(".skip-link");
  if (skipLink) {
    skipLink.textContent = t("a11y.skip");
  }
}

function renderHeader() {
  return `
    <header class="site-header" data-section="header">
      <div class="header-inner">
        <a class="brand" href="#hero">
          <span class="brand-mark" aria-hidden="true">HS</span>
          <span class="brand-text">${t("brand.name")}</span>
        </a>
        <nav class="site-nav" aria-label="${t("brand.name")} navigation">
          <a class="nav-link" href="#features" data-nav-target="features">${t("nav.features")}</a>
          <a class="nav-link" href="#journey" data-nav-target="journey">${t("nav.journey")}</a>
          <a class="nav-link" href="#spotlights" data-nav-target="spotlights">${t("nav.showcase")}</a>
          <a class="nav-link" href="#testimonials" data-nav-target="testimonials">${t("nav.testimonials")}</a>
        </nav>
        <div class="locale-switcher" role="group" aria-label="Language">
          ${locales
            .map(
              (locale) => `
                <button
                  type="button"
                  class="locale-button ${state.locale === locale ? "is-active" : ""}"
                  data-locale="${locale}"
                  aria-pressed="${state.locale === locale}"
                >
                  ${locale.toUpperCase()}
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
    </header>
  `;
}

function renderHero() {
  return `
    <section class="hero" id="hero" data-section="hero">
      <div class="hero-glow" aria-hidden="true"></div>
      <div class="hero-content">
        <p class="hero-eyebrow">${t("hero.tagline")}</p>
        <h1 class="hero-title">${t("hero.title")}</h1>
        <p class="hero-subtitle">${t("hero.subtitle")}</p>
        <div class="hero-actions">
          <a class="button primary" href="#features">${t("hero.primaryCta")}</a>
          <a class="button ghost" href="#journey">${t("hero.secondaryCta")}</a>
        </div>
        <div class="stats-grid">
          ${stats
            .map(
              (stat) => `
                <article class="stat-card" data-stat-id="${stat.id}">
                  <p class="stat-value">${formatStatValue(stat, state.locale)}</p>
                  <p class="stat-label">${t(`stats.${stat.id}.label`)}</p>
                  <p class="stat-caption">${t(`stats.${stat.id}.caption`)}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
      <div class="hero-orbs" aria-hidden="true">
        <span class="orb orb-one"></span>
        <span class="orb orb-two"></span>
        <span class="orb orb-three"></span>
      </div>
    </section>
  `;
}

function renderFeatures() {
  return `
    <section class="section" id="features" data-section="features">
      <div class="section-header">
        <p class="section-eyebrow">${t("features.heading")}</p>
        <h2 class="section-title">${t("features.description")}</h2>
      </div>
      <div class="feature-grid">
        ${featureCards
          .map(
            (feature) => `
              <article class="feature-card" data-feature-id="${feature.id}">
                <div class="feature-icon" aria-hidden="true">${feature.icon}</div>
                <h3 class="feature-title">${t(feature.titleKey)}</h3>
                <p class="feature-body">${t(feature.bodyKey)}</p>
                <ul class="feature-points">
                  ${feature.pointKeys
                    .map((pointKey) => `<li>${t(pointKey)}</li>`)
                    .join("")}
                </ul>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderJourney() {
  return `
    <section class="section gradient" id="journey" data-section="journey">
      <div class="section-header">
        <p class="section-eyebrow">${t("journey.heading")}</p>
        <h2 class="section-title">${t("journey.description")}</h2>
      </div>
      <ol class="journey-steps">
        ${journeySteps
          .map(
            (step) => `
              <li class="journey-step" data-step-id="${step.id}">
                <p class="journey-eyebrow">${t(step.eyebrowKey)}</p>
                <h3 class="journey-title">${t(step.titleKey)}</h3>
                <p class="journey-body">${t(step.descriptionKey)}</p>
              </li>
            `,
          )
          .join("")}
      </ol>
    </section>
  `;
}

function renderSpotlights() {
  return `
    <section class="section" id="spotlights" data-section="spotlights">
      <div class="section-header">
        <p class="section-eyebrow">${t("spotlights.heading")}</p>
        <h2 class="section-title">${t("spotlights.description")}</h2>
      </div>
      <div class="spotlight-grid">
        ${spotlights
          .map(
            (spotlight) => `
              <article class="spotlight-card tone-${spotlight.tone}" data-spotlight-id="${spotlight.id}">
                <div class="spotlight-visual" aria-hidden="true"></div>
                <div class="spotlight-content">
                  <p class="spotlight-eyebrow">${t(spotlight.eyebrowKey)}</p>
                  <h3 class="spotlight-title">${t(spotlight.titleKey)}</h3>
                  <p class="spotlight-body">${t(spotlight.descriptionKey)}</p>
                  <ul class="spotlight-highlights">
                    ${spotlight.highlightKeys
                      .map((highlightKey) => `<li>${t(highlightKey)}</li>`)
                      .join("")}
                  </ul>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderTestimonials() {
  return `
    <section class="section soft" id="testimonials" data-section="testimonials">
      <div class="section-header">
        <p class="section-eyebrow">${t("testimonials.heading")}</p>
        <h2 class="section-title">${t("testimonials.description")}</h2>
      </div>
      <div class="testimonial-grid">
        ${testimonials
          .map(
            (testimonial) => `
              <figure class="testimonial-card" data-testimonial-id="${testimonial.id}">
                <blockquote>“${t(testimonial.quoteKey)}”</blockquote>
                <figcaption>
                  <span class="testimonial-name">${t(testimonial.nameKey)}</span>
                  <span class="testimonial-role">${t(testimonial.roleKey)}</span>
                </figcaption>
              </figure>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderClosing() {
  return `
    <section class="closing" id="closing" data-section="closing">
      <div class="closing-inner">
        <h2 class="closing-title">${t("closing.title")}</h2>
        <p class="closing-subtitle">${t("closing.subtitle")}</p>
        <a class="button primary" href="#features" role="button">${t("closing.button")}</a>
      </div>
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer">
      <p>${t("closing.footerNote")}</p>
    </footer>
  `;
}

function setupLocaleControls() {
  const buttons = document.querySelectorAll(".locale-button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const { locale } = button.dataset;
      if (locale && isLocale(locale) && locale !== state.locale) {
        state.locale = locale;
        persistLocale(locale);
        render();
      }
    });
  });
}

function setupSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href").slice(1);
      if (!targetId) {
        return;
      }
      const target = document.getElementById(targetId);
      if (target) {
        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function setupSectionObserver() {
  const sections = document.querySelectorAll("[data-section]");
  const navLinks = document.querySelectorAll("[data-nav-target]");
  const navMap = new Map();
  navLinks.forEach((link) => {
    const target = link.getAttribute("data-nav-target");
    if (target) {
      navMap.set(target, link);
    }
  });

  if (!("IntersectionObserver" in window)) {
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (!id) {
          return;
        }

        const link = navMap.get(id);
        if (link) {
          if (entry.isIntersecting) {
            navLinks.forEach((navLink) => navLink.classList.remove("is-active"));
            link.classList.add("is-active");
          }
        }
      });
    },
    { threshold: 0.4 },
  );

  sections.forEach((section) => observer.observe(section));
}

render();
