import { getTranslation, isLocale, locales } from "./i18n.js";
import {
  metrics,
  formatMetricValue,
  featureCards,
  workflowSteps,
  checklistTasks,
  faqItems,
} from "./content.js";
import { slimHtml } from "./slim-html.js";

const state = {
  locale: detectLocale(),
  inputHtml: "",
  outputHtml: "",
  stats: null,
  removals: {},
  toast: null,
};

let toastTimeoutId = null;
let sectionObserver = null;

function detectLocale() {
  try {
    const stored = window.localStorage.getItem("htmlslim-locale");
    if (stored && isLocale(stored)) {
      return stored;
    }
  } catch (error) {
    // Storage might be unavailable; ignore and fallback to navigator.
  }

  const language = window.navigator?.language?.slice(0, 2).toLowerCase();
  if (language && isLocale(language)) {
    return language;
  }

  return "en";
}

function persistLocale(locale) {
  try {
    window.localStorage.setItem("htmlslim-locale", locale);
  } catch (error) {
    // Ignore persistence failures (private mode, etc.).
  }
}

function t(key) {
  const value = getTranslation(state.locale, key);
  return typeof value === "string" ? value : key;
}

function getObject(key) {
  const value = getTranslation(state.locale, key);
  return value && typeof value === "object" ? value : {};
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function setToast(message, tone = "info") {
  state.toast = { message, tone };
  if (toastTimeoutId) {
    window.clearTimeout(toastTimeoutId);
  }
  render();
  toastTimeoutId = window.setTimeout(() => {
    state.toast = null;
    render();
  }, 4000);
}

function buildLocaleButtons() {
  return locales
    .map((locale) => {
      const label = getTranslation(state.locale, `localeNames.${locale}`);
      const active = state.locale === locale;
      return `
        <button
          type="button"
          class="locale-button${active ? " is-active" : ""}"
          data-locale="${locale}"
          aria-pressed="${active}"
        >
          <span aria-hidden="true">${locale.toUpperCase()}</span>
          <span class="locale-label">${typeof label === "string" ? label : locale.toUpperCase()}</span>
        </button>
      `;
    })
    .join("");
}

function renderMetrics() {
  const metricItems = metrics
    .map((metric) => {
      const label = t(metric.labelKey);
      const caption = t(metric.captionKey);
      const value = formatMetricValue(metric, state.locale);
      return `
        <article class="metric-card" data-metric="${metric.id}">
          <div class="metric-icon" aria-hidden="true">${metric.icon}</div>
          <div>
            <p class="metric-value">${value}</p>
            <p class="metric-label">${label}</p>
            <p class="metric-caption">${caption}</p>
          </div>
        </article>
      `;
    })
    .join("");

  return `
    <section class="section metrics" id="metrics" data-section="metrics">
      <div class="section-header">
        <p class="section-kicker">${t("metrics.heading")}</p>
        <h2 class="section-title">${t("metrics.subheading")}</h2>
      </div>
      <div class="metric-grid">
        ${metricItems}
      </div>
    </section>
  `;
}

function renderFeatures() {
  const cards = featureCards
    .map((feature) => {
      const title = t(feature.titleKey);
      const body = t(feature.bodyKey);
      const bullets = feature.bullets
        .map((bulletKey) => `<li>${t(bulletKey)}</li>`)
        .join("");

      return `
        <article class="feature-card" data-feature="${feature.id}">
          <div class="feature-icon" aria-hidden="true">${feature.icon}</div>
          <h3 class="feature-title">${title}</h3>
          <p class="feature-body">${body}</p>
          <ul class="feature-points">${bullets}</ul>
        </article>
      `;
    })
    .join("");

  return `
    <section class="section" id="features" data-section="features">
      <div class="section-header">
        <p class="section-kicker">${t("features.heading")}</p>
        <h2 class="section-title">${t("features.description")}</h2>
      </div>
      <div class="feature-grid">${cards}</div>
    </section>
  `;
}

function renderWorkflow() {
  const steps = workflowSteps
    .map((step) => {
      const badge = t(step.badgeKey);
      const title = t(step.titleKey);
      const body = t(step.bodyKey);
      return `
        <article class="workflow-step" data-step="${step.id}">
          <div class="workflow-icon" aria-hidden="true">${step.icon}</div>
          <div>
            <p class="workflow-badge">${badge}</p>
            <h3 class="workflow-title">${title}</h3>
            <p class="workflow-body">${body}</p>
          </div>
        </article>
      `;
    })
    .join("");

  const checklist = checklistTasks
    .map((task) => `<li>${t(task.labelKey)}</li>`)
    .join("");

  return `
    <section class="section" id="workflow" data-section="workflow">
      <div class="section-header">
        <p class="section-kicker">${t("workflow.heading")}</p>
        <h2 class="section-title">${t("workflow.description")}</h2>
      </div>
      <div class="workflow-layout">
        <div class="workflow-steps">${steps}</div>
        <aside class="workflow-checklist">
          <h3>${t("workflow.checklist.heading")}</h3>
          <ul>${checklist}</ul>
          <p class="workflow-note">${t("workflow.checklist.note")}</p>
        </aside>
      </div>
    </section>
  `;
}

function renderFaq() {
  const heading = t("faq.heading");
  const description = t("faq.description");
  const items = faqItems
    .map((item) => {
      const question = t(item.questionKey);
      const answer = t(item.answerKey);
      return `
        <details class="faq-item" data-faq="${item.id}">
          <summary>${question}</summary>
          <p>${answer}</p>
        </details>
      `;
    })
    .join("");

  return `
    <section class="section" id="faq" data-section="faq">
      <div class="section-header">
        <p class="section-kicker">${heading}</p>
        <h2 class="section-title">${description}</h2>
      </div>
      <div class="faq-grid">${items}</div>
    </section>
  `;
}

function renderConverter() {
  const stats = state.stats
    ? `
        <div class="stat-cards" aria-live="polite">
          <article class="stat-card">
            <p class="stat-label">${t("converter.stats.original")}</p>
            <p class="stat-value">${formatNumber(state.stats.original)}</p>
          </article>
          <article class="stat-card">
            <p class="stat-label">${t("converter.stats.slimmed")}</p>
            <p class="stat-value">${formatNumber(state.stats.slimmed)}</p>
          </article>
          <article class="stat-card">
            <p class="stat-label">${t("converter.stats.saved")}</p>
            <p class="stat-value">${formatNumber(state.stats.saved)}</p>
          </article>
          <article class="stat-card">
            <p class="stat-label">${t("converter.stats.reduction")}</p>
            <p class="stat-value">${formatPercent(state.stats.reduction)}</p>
          </article>
        </div>
      `
    : "";

  const removals = renderRemovalList();

  return `
    <section class="section converter" id="converter" data-section="converter">
      <div class="section-header">
        <p class="section-kicker">${t("converter.heading")}</p>
        <h2 class="section-title">${t("converter.description")}</h2>
      </div>
      <form id="slim-form" class="converter-form" novalidate>
        <div class="field-group">
          <label for="input-html">${t("converter.inputLabel")}</label>
          <textarea id="input-html" name="input-html" spellcheck="false" placeholder="${t("converter.inputPlaceholder")}">${escapeHtml(state.inputHtml)}</textarea>
        </div>
        <div class="converter-actions">
          <button type="submit" class="primary-action">${t("converter.actions.slim")}</button>
          <button type="button" class="ghost-action" id="copy-button"${
            state.outputHtml ? "" : " disabled"
          }>${t("converter.actions.copy")}</button>
        </div>
        <div class="field-group">
          <label for="output-html">${t("converter.outputLabel")}</label>
          <textarea id="output-html" name="output-html" readonly spellcheck="false">${state.outputHtml ? escapeHtml(state.outputHtml) : ""}</textarea>
          ${
            state.outputHtml
              ? ""
              : `<p class="output-placeholder">${t("converter.emptyOutput")}</p>`
          }
        </div>
      </form>
      ${stats}
      ${removals}
    </section>
  `;
}

function renderRemovalList() {
  if (!state.outputHtml) {
    return "";
  }
  const entries = Object.entries(state.removals || {}).filter(([, count]) => count > 0);
  if (!entries.length) {
    return `
      <div class="removal-list">
        <h3>${t("converter.removals.heading")}</h3>
        <p>${t("converter.removals.empty")}</p>
      </div>
    `;
  }

  const labels = getObject("converter.removals.labels");
  const listItems = entries
    .map(([id, count]) => {
      const label = typeof labels[id] === "string" ? labels[id] : id;
      return `<li><span>${label}</span><span class="removal-count">${formatNumber(count)}</span></li>`;
    })
    .join("");

  return `
    <div class="removal-list">
      <h3>${t("converter.removals.heading")}</h3>
      <ul>${listItems}</ul>
    </div>
  `;
}

function formatNumber(value) {
  return new Intl.NumberFormat(state.locale, { maximumFractionDigits: 0 }).format(value);
}

function formatPercent(value) {
  return new Intl.NumberFormat(state.locale, {
    style: "percent",
    maximumFractionDigits: 1,
  }).format(value);
}

function renderHero() {
  return `
    <section class="hero" id="hero" data-section="hero">
      <div class="hero-inner">
        <p class="hero-kicker">${t("hero.kicker")}</p>
        <h1 class="hero-title">${t("hero.title")}</h1>
        <p class="hero-body">${t("hero.subtitle")}</p>
        <div class="hero-actions">
          <a class="button primary" href="#converter">${t("hero.primaryCta")}</a>
          <a class="button ghost" href="#workflow">${t("hero.secondaryCta")}</a>
        </div>
      </div>
    </section>
  `;
}

function renderHeader() {
  return `
    <header class="site-header" data-section="header">
      <div class="header-inner">
        <a class="brand" href="#hero">
          <span class="brand-mark" aria-hidden="true">HS</span>
          <span class="brand-name">${t("brand.name")}</span>
        </a>
        <nav class="site-nav" aria-label="Primary">
          <a class="nav-link" href="#converter" data-nav="converter">${t("nav.convert")}</a>
          <a class="nav-link" href="#features" data-nav="features">${t("nav.features")}</a>
          <a class="nav-link" href="#workflow" data-nav="workflow">${t("nav.workflow")}</a>
          <a class="nav-link" href="#faq" data-nav="faq">${t("nav.faq")}</a>
        </nav>
        <div class="locale-switcher" role="group" aria-label="Languages">
          ${buildLocaleButtons()}
        </div>
      </div>
    </header>
  `;
}

function renderFooter() {
  return `
    <footer class="site-footer" data-section="footer">
      <p>${t("footer.rights")}</p>
    </footer>
  `;
}

function renderToast() {
  if (!state.toast) {
    return "";
  }
  return `
    <div class="toast ${state.toast.tone}" role="status" aria-live="assertive">
      ${state.toast.message}
    </div>
  `;
}

function render() {
  const root = document.querySelector("#app");
  if (!root) {
    throw new Error("Missing #app container");
  }

  applyDocumentMeta();

  root.innerHTML = `
    ${renderToast()}
    <div class="page-shell">
      ${renderHeader()}
      <main id="main" tabindex="-1">
        ${renderHero()}
        ${renderMetrics()}
        ${renderConverter()}
        ${renderFeatures()}
        ${renderWorkflow()}
        ${renderFaq()}
      </main>
      ${renderFooter()}
    </div>
  `;

  document.documentElement.lang = state.locale;
  const skipLink = document.querySelector(".skip-link");
  if (skipLink) {
    skipLink.textContent = t("a11y.skip");
  }

  bindEvents();
}

function applyDocumentMeta() {
  const meta = getObject("meta");
  if (meta.title) {
    document.title = meta.title;
  }
  const descriptionTag = document.querySelector('meta[name="description"]');
  if (descriptionTag && meta.description) {
    descriptionTag.setAttribute("content", meta.description);
  }
}

function bindEvents() {
  setupLocaleControls();
  setupConverter();
  setupSectionObserver();
}

function setupLocaleControls() {
  const buttons = document.querySelectorAll(".locale-switcher [data-locale]");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const nextLocale = button.getAttribute("data-locale");
      if (nextLocale && isLocale(nextLocale) && nextLocale !== state.locale) {
        state.locale = nextLocale;
        persistLocale(nextLocale);
        render();
      }
    });
  });
}

function setupConverter() {
  const form = document.querySelector("#slim-form");
  const input = document.querySelector("#input-html");
  const copyButton = document.querySelector("#copy-button");

  if (input) {
    input.addEventListener("input", (event) => {
      state.inputHtml = event.target.value;
    });
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!state.inputHtml.trim()) {
        setToast(t("converter.toast.empty"), "error");
        return;
      }

      const result = slimHtml(state.inputHtml);
      state.outputHtml = result.html;
      const original = state.inputHtml.length;
      const slimmed = result.html.length;
      const saved = Math.max(original - slimmed, 0);
      const reduction = original > 0 ? saved / original : 0;
      state.stats = { original, slimmed, saved, reduction };
      state.removals = result.removed;
      setToast(t("converter.toast.success").replace("{count}", formatNumber(saved)), "success");
    });
  }

  if (copyButton) {
    copyButton.addEventListener("click", async () => {
      if (!state.outputHtml) {
        return;
      }

      try {
        if (!navigator.clipboard || typeof navigator.clipboard.writeText !== "function") {
          throw new Error("clipboard-unavailable");
        }
        await navigator.clipboard.writeText(state.outputHtml);
        setToast(t("converter.toast.copied"), "success");
      } catch (error) {
        setToast(t("converter.toast.copyFailed"), "error");
      }
    });
  }
}

function setupSectionObserver() {
  if (sectionObserver) {
    sectionObserver.disconnect();
  }

  const navLinks = document.querySelectorAll("[data-nav]");
  const sections = document.querySelectorAll("[data-section]");
  const navMap = new Map();
  navLinks.forEach((link) => {
    const id = link.getAttribute("data-nav");
    if (id) {
      navMap.set(id, link);
    }
  });

  sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (!id || !navMap.has(id)) {
          return;
        }

        if (entry.isIntersecting) {
          navLinks.forEach((link) => link.classList.remove("is-active"));
          const navLink = navMap.get(id);
          if (navLink) {
            navLink.classList.add("is-active");
          }
        }
      });
    },
    { rootMargin: "-50% 0px -40% 0px", threshold: [0.1, 0.5] },
  );

  sections.forEach((section) => {
    const id = section.getAttribute("id");
    if (id && navMap.has(id)) {
      sectionObserver.observe(section);
    }
  });
}

render();
