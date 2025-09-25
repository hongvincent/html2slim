import { getTranslation, isLocale, translations } from "./i18n.js";
import { featureCards, formatMetricValue, metrics, taskSections } from "./content.js";
import { slimHtml } from "./slimHtml.js";

const DEFAULT_OPTIONS = {
  keepIds: false,
  keepClasses: false,
  keepDataAttrs: false,
  collapseWhitespaceOnly: false,
};

const initialSlimState = {
  input: "",
  result: "",
  removedElements: {},
  originalLength: 0,
  slimmedLength: 0,
  reductionPercent: 0,
  unchanged: true,
};

const state = {
  locale: detectLocale(),
  slim: { ...initialSlimState },
  options: { ...DEFAULT_OPTIONS },
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

function formatCharacterCount(value, locale) {
  const formatter = new Intl.NumberFormat(locale);
  return `${formatter.format(value)} ${translations[locale].slimmer.charCountSuffix}`;
}

function formatReduction(original, slimmed, percent, locale) {
  const percentFormatter = new Intl.NumberFormat(locale, { maximumFractionDigits: 2 });
  const valueFormatter = new Intl.NumberFormat(locale);
  return `${percentFormatter.format(percent)}% (${valueFormatter.format(original)} → ${valueFormatter.format(slimmed)})`;
}

function renderLayout() {
  const root = document.querySelector("#app");
  if (!root) {
    throw new Error("Missing #app container");
  }

  root.innerHTML = `
    <div class="app-shell">
      <header class="site-header" data-section="header">
        <div class="brand">
          <span class="brand-mark" aria-hidden="true">HS</span>
          <span class="brand-text">HtmlSlim</span>
        </div>
        <nav class="site-nav" aria-label="Main">
          <a href="#slim-tool" class="nav-link" data-i18n="nav.product"></a>
          <a href="#task-tracker" class="nav-link" data-i18n="nav.docs"></a>
          <a href="#features" class="nav-link" data-i18n="nav.roadmap"></a>
          <a href="#observability" class="nav-link" data-i18n="nav.updates"></a>
        </nav>
        <div class="header-actions">
          <div class="locale-switcher" role="group" aria-label="Language">
            <button type="button" class="locale-button" data-locale="en">EN</button>
            <button type="button" class="locale-button" data-locale="ko">KO</button>
          </div>
        </div>
      </header>

      <main id="main" tabindex="-1">
        <section class="hero" id="hero">
          <p class="hero-tagline" data-i18n="hero.tagline"></p>
          <h1 class="hero-title" data-i18n="hero.title"></h1>
          <p class="hero-subtitle" data-i18n="hero.subtitle"></p>
          <div class="hero-actions">
            <a class="button primary" href="#slim-tool" data-i18n="hero.ctaPrimary"></a>
            <a class="button ghost" href="#task-tracker" data-i18n="hero.ctaSecondary"></a>
          </div>
          <h2 class="section-eyebrow" data-i18n="hero.quickStats"></h2>
          <div class="metrics-grid">
            ${metrics
              .map(
                (metric) => `
                  <article class="metric-card" data-metric="${metric.id}">
                    <p class="metric-value" data-metric-value="${metric.id}"></p>
                    <p class="metric-label" data-i18n="metrics.${metric.id}.label"></p>
                    <p class="metric-caption" data-i18n="metrics.${metric.id}.caption"></p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="section" id="slim-tool">
          <div class="section-header">
            <h2 class="section-title" data-i18n="slimmer.title"></h2>
            <p class="section-subtitle" data-i18n="slimmer.description"></p>
          </div>

          <div class="tool-grid">
            <div class="panel input-panel">
              <div class="field-label" data-i18n="slimmer.inputLabel"></div>
              <textarea id="input-html" class="text-input" data-i18n-attr="placeholder" data-i18n="slimmer.placeholder" rows="10"></textarea>
              <p class="field-helper" data-i18n="slimmer.helper"></p>
            </div>
            <div class="panel options-panel">
              <fieldset class="options-fieldset">
                <legend data-i18n="slimmer.optionsTitle"></legend>
                <label class="option-item">
                  <input type="checkbox" data-option="keepIds" />
                  <span data-i18n="slimmer.preserveIds"></span>
                </label>
                <label class="option-item">
                  <input type="checkbox" data-option="keepClasses" />
                  <span data-i18n="slimmer.preserveClasses"></span>
                </label>
                <label class="option-item">
                  <input type="checkbox" data-option="keepDataAttrs" />
                  <span data-i18n="slimmer.preserveDataAttrs"></span>
                </label>
                <label class="option-item">
                  <input type="checkbox" data-option="collapseWhitespaceOnly" />
                  <span data-i18n="slimmer.preserveWhitespace"></span>
                </label>
              </fieldset>
              <div class="action-row">
                <button class="button primary" type="button" id="run-slim" data-i18n="slimmer.runButton"></button>
                <button class="button secondary" type="button" id="copy-result" data-i18n="slimmer.copyButton"></button>
                <button class="button secondary" type="button" id="download-result" data-i18n="slimmer.downloadButton"></button>
              </div>
            </div>
          </div>

          <div class="results-grid">
            <div class="panel output-panel">
              <div class="panel-header">
                <div class="field-label" data-i18n="slimmer.outputLabel"></div>
                <span class="count-pill" id="output-count" aria-live="polite"></span>
              </div>
              <textarea id="output-html" class="text-input" readonly rows="10"></textarea>
            </div>
            <div class="panel summary-panel">
              <h3 data-i18n="slimmer.resultTitle"></h3>
              <dl class="summary-list">
                <div class="summary-item">
                  <dt data-i18n="slimmer.removedLabel"></dt>
                  <dd>
                    <ul class="removed-list" id="removed-summary"></ul>
                  </dd>
                </div>
                <div class="summary-item">
                  <dt data-i18n="slimmer.reductionLabel"></dt>
                  <dd id="reduction-value"></dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section class="section" id="task-tracker">
          <div class="section-header">
            <h2 class="section-title" data-i18n="tasks.title"></h2>
            <p class="section-subtitle" data-i18n="tasks.description"></p>
          </div>
          <div class="task-grid">
            ${taskSections
              .map(
                (section) => `
                  <article class="task-card" data-section-id="${section.id}">
                    <h3 data-i18n="${section.titleKey}"></h3>
                    <p class="task-description" data-i18n="${section.descriptionKey}"></p>
                    <ul class="task-list">
                      ${section.items
                        .map(
                          (item) => `
                            <li class="task-item" data-complete="${item.done}" data-task-id="${item.id}">
                              <span class="task-status" aria-hidden="true">${item.done ? "✔" : ""}</span>
                              <span data-i18n="${item.labelKey}"></span>
                            </li>
                          `,
                        )
                        .join("")}
                    </ul>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="section" id="features">
          <div class="section-header">
            <h2 class="section-title" data-i18n="features.title"></h2>
            <p class="section-subtitle" data-i18n="features.description"></p>
          </div>
          <div class="feature-grid">
            ${featureCards
              .map(
                (card) => `
                  <article class="feature-card" data-feature="${card.id}">
                    <h3 data-i18n="${card.titleKey}"></h3>
                    <p data-i18n="${card.bodyKey}"></p>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>

        <section class="section" id="observability">
          <div class="section-header">
            <h2 class="section-title" data-i18n="observability.title"></h2>
            <p class="section-subtitle" data-i18n="observability.description"></p>
          </div>
          <ul class="observability-list" data-observability-list></ul>
          <button class="button ghost" type="button" data-i18n="observability.cta"></button>
        </section>
      </main>

      <footer class="site-footer">
        <a class="footer-link" href="https://htmlslim.com" rel="noopener noreferrer" target="_blank" data-i18n="footer.social"></a>
        <p data-i18n="footer.rights"></p>
      </footer>
    </div>
  `;
}

function applyTranslations(locale) {
  document.documentElement.lang = locale;
  document.title = `HtmlSlim · ${translations[locale].hero.title}`;
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((element) => {
    const key = element.dataset.i18n;
    if (!key) return;
    const attribute = element.dataset.i18nAttr;
    const value = getTranslation(locale, key);
    if (attribute) {
      element.setAttribute(attribute, value);
    } else {
      element.innerHTML = value;
    }
  });

  const localeButtons = document.querySelectorAll(".locale-button");
  localeButtons.forEach((button) => {
    const targetLocale = button.dataset.locale;
    if (!targetLocale || !isLocale(targetLocale)) return;
    button.classList.toggle("active", targetLocale === locale);
    button.setAttribute(
      "aria-label",
      targetLocale === "en" ? translations[locale].a11y.localeEn : translations[locale].a11y.localeKo,
    );
    button.setAttribute("aria-pressed", targetLocale === locale ? "true" : "false");
  });

  const skipLink = document.querySelector(".skip-link");
  if (skipLink) {
    skipLink.textContent = translations[locale].a11y.skip;
  }

  updateObservabilityList(locale);
  updateMetrics(locale);
  refreshSlimOutput();
}

function updateObservabilityList(locale) {
  const list = document.querySelector("[data-observability-list]");
  if (!list) return;
  const items = translations[locale].observability.bullets;
  list.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function updateMetrics(locale) {
  metrics.forEach((metric) => {
    const valueElement = document.querySelector(`[data-metric-value="${metric.id}"]`);
    if (valueElement) {
      valueElement.textContent = formatMetricValue(metric, locale);
    }
  });
}

function attachListeners() {
  const root = document.querySelector("#app");
  if (!root) return;

  root.addEventListener("click", (event) => {
    const target = event.target;
    if (target.closest(".locale-button")) {
      const button = target.closest(".locale-button");
      if (!button) return;
      const locale = button.dataset.locale;
      if (locale && isLocale(locale) && locale !== state.locale) {
        state.locale = locale;
        persistLocale(locale);
        applyTranslations(locale);
        showToast(translations[locale].a11y.localeChanged, "success");
        announce(translations[locale].a11y.localeChanged);
      }
    }
  });

  const runButton = document.querySelector("#run-slim");
  runButton?.addEventListener("click", handleSlim);

  const copyButton = document.querySelector("#copy-result");
  copyButton?.addEventListener("click", handleCopy);

  const downloadButton = document.querySelector("#download-result");
  downloadButton?.addEventListener("click", handleDownload);

  const input = document.querySelector("#input-html");
  input?.addEventListener("input", (event) => {
    const target = event.target;
    if (target instanceof HTMLTextAreaElement) {
      state.slim.input = target.value;
    }
  });

  const optionInputs = document.querySelectorAll("[data-option]");
  optionInputs.forEach((checkbox) => {
    const optionName = checkbox.dataset.option;
    if (!optionName) return;
    checkbox.checked = Boolean(state.options[optionName]);
    checkbox.addEventListener("change", () => {
      state.options[optionName] = checkbox.checked;
    });
  });
}

function refreshSlimOutput() {
  const output = document.querySelector("#output-html");
  const count = document.querySelector("#output-count");
  const reduction = document.querySelector("#reduction-value");
  const removedList = document.querySelector("#removed-summary");

  if (!state.slim.result) {
    if (output instanceof HTMLTextAreaElement) output.value = "";
    if (count) count.textContent = "";
    if (reduction) reduction.textContent = "";
    if (removedList) removedList.innerHTML = "";
    return;
  }

  if (output instanceof HTMLTextAreaElement) {
    output.value = state.slim.result;
  }

  if (count) {
    count.textContent = formatCharacterCount(state.slim.slimmedLength, state.locale);
  }

  if (reduction) {
    reduction.textContent = formatReduction(
      state.slim.originalLength,
      state.slim.slimmedLength,
      state.slim.reductionPercent,
      state.locale,
    );
  }

  if (removedList) {
    const entries = Object.entries(state.slim.removedElements);
    if (entries.length === 0) {
      removedList.innerHTML = `<li>${translations[state.locale].slimmer.noChanges}</li>`;
    } else {
      removedList.innerHTML = entries
        .sort((a, b) => b[1] - a[1])
        .map(([key, countValue]) => {
          const formattedCount = new Intl.NumberFormat(state.locale).format(countValue);
          return `<li><span>${key}</span><span class="count">${formattedCount}</span></li>`;
        })
        .join("");
    }
  }
}

function handleSlim() {
  const input = document.querySelector("#input-html");
  if (!(input instanceof HTMLTextAreaElement)) return;
  const value = input.value.trim();

  if (!value) {
    showToast(translations[state.locale].slimmer.emptyError, "error");
    announce(translations[state.locale].a11y.slimError);
    return;
  }

  const result = slimHtml(value, state.options);
  state.slim = {
    input: value,
    result: result.html,
    removedElements: result.removedElements,
    originalLength: result.originalLength,
    slimmedLength: result.slimmedLength,
    reductionPercent: result.reductionPercent,
    unchanged: result.unchanged,
  };

  refreshSlimOutput();

  showToast(translations[state.locale].a11y.slimSuccess, "success");
  announce(translations[state.locale].a11y.slimSuccess);
}

async function handleCopy() {
  if (!state.slim.result) return;
  try {
    await navigator.clipboard.writeText(state.slim.result);
    showToast(translations[state.locale].slimmer.copiedToast, "success");
  } catch (error) {
    console.error("Clipboard copy failed", error);
    showToast("Copy failed", "error");
  }
}

function handleDownload() {
  if (!state.slim.result) return;
  const blob = new Blob([state.slim.result], { type: "text/html;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "slimmed.html";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
  showToast(translations[state.locale].slimmer.downloadToast, "success");
}

function showToast(message, variant = "success") {
  const toastRoot = document.querySelector("#toast-root");
  if (!toastRoot) return;
  const toast = document.createElement("div");
  toast.className = `toast ${variant}`;
  toast.innerHTML = `
    <span>${message}</span>
    <button type="button" class="toast-close" aria-label="${translations[state.locale].a11y.toastClose}">×</button>
  `;
  toastRoot.appendChild(toast);

  const close = () => {
    toast.classList.add("hide");
    toast.addEventListener(
      "transitionend",
      () => {
        toast.remove();
      },
      { once: true },
    );
  };

  const closeButton = toast.querySelector(".toast-close");
  closeButton?.addEventListener("click", close);

  window.setTimeout(close, 4000);
}

function announce(message) {
  const liveRegion = document.querySelector("#toast-root");
  if (!liveRegion) return;
  const region = document.createElement("div");
  region.className = "sr-only";
  region.textContent = message;
  liveRegion.appendChild(region);
  window.setTimeout(() => region.remove(), 1000);
}

renderLayout();
applyTranslations(state.locale);
attachListeners();
