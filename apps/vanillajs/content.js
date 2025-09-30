export const metrics = [
  {
    id: "tti",
    icon: "⚡",
    value: 1.3,
    format: { style: "unit", unit: "second", maximumFractionDigits: 1 },
    labelKey: "metrics.items.tti.title",
    captionKey: "metrics.items.tti.caption",
  },
  {
    id: "bundle",
    icon: "🧊",
    value: 120,
    format: { style: "unit", unit: "kilobyte", maximumFractionDigits: 0 },
    labelKey: "metrics.items.bundle.title",
    captionKey: "metrics.items.bundle.caption",
  },
  {
    id: "errors",
    icon: "🛡️",
    value: 0.002,
    format: { style: "percent", maximumFractionDigits: 1 },
    labelKey: "metrics.items.errors.title",
    captionKey: "metrics.items.errors.caption",
  },
];

export function formatMetricValue(metric, locale) {
  const { style, unit, maximumFractionDigits = 0 } = metric.format;

  if (style === "percent") {
    return new Intl.NumberFormat(locale, {
      style: "percent",
      maximumFractionDigits,
    }).format(metric.value);
  }

  if (style === "unit" && unit) {
    return new Intl.NumberFormat(locale, {
      style: "unit",
      unit,
      unitDisplay: "narrow",
      maximumFractionDigits,
    }).format(metric.value);
  }

  return new Intl.NumberFormat(locale, {
    maximumFractionDigits,
  }).format(metric.value);
}

export const featureCards = [
  {
    id: "performance",
    icon: "🚀",
    titleKey: "features.cards.performance.title",
    bodyKey: "features.cards.performance.body",
    bullets: [
      "features.cards.performance.points.0",
      "features.cards.performance.points.1",
      "features.cards.performance.points.2",
    ],
  },
  {
    id: "localisation",
    icon: "🌐",
    titleKey: "features.cards.localization.title",
    bodyKey: "features.cards.localization.body",
    bullets: [
      "features.cards.localization.points.0",
      "features.cards.localization.points.1",
      "features.cards.localization.points.2",
    ],
  },
  {
    id: "workflow",
    icon: "🧭",
    titleKey: "features.cards.workflow.title",
    bodyKey: "features.cards.workflow.body",
    bullets: [
      "features.cards.workflow.points.0",
      "features.cards.workflow.points.1",
      "features.cards.workflow.points.2",
    ],
  },
];

export const workflowSteps = [
  {
    id: "detect",
    icon: "🔍",
    badgeKey: "workflow.steps.detect.badge",
    titleKey: "workflow.steps.detect.title",
    bodyKey: "workflow.steps.detect.body",
  },
  {
    id: "instrument",
    icon: "📡",
    badgeKey: "workflow.steps.instrument.badge",
    titleKey: "workflow.steps.instrument.title",
    bodyKey: "workflow.steps.instrument.body",
  },
  {
    id: "localize",
    icon: "🈺",
    badgeKey: "workflow.steps.localize.badge",
    titleKey: "workflow.steps.localize.title",
    bodyKey: "workflow.steps.localize.body",
  },
  {
    id: "harden",
    icon: "🛠️",
    badgeKey: "workflow.steps.harden.badge",
    titleKey: "workflow.steps.harden.title",
    bodyKey: "workflow.steps.harden.body",
  },
];

export const checklistTasks = [
  {
    id: "app-shell",
    labelKey: "workflow.checklist.items.appShell",
  },
  {
    id: "search",
    labelKey: "workflow.checklist.items.search",
  },
  {
    id: "editor",
    labelKey: "workflow.checklist.items.editor",
  },
  {
    id: "analytics",
    labelKey: "workflow.checklist.items.analytics",
  },
  {
    id: "fallbacks",
    labelKey: "workflow.checklist.items.fallbacks",
  },
];

export const faqItems = [
  {
    id: "works",
    questionKey: "faq.items.0.question",
    answerKey: "faq.items.0.answer",
  },
  {
    id: "difference",
    questionKey: "faq.items.1.question",
    answerKey: "faq.items.1.answer",
  },
  {
    id: "trust",
    questionKey: "faq.items.2.question",
    answerKey: "faq.items.2.answer",
  },
];
