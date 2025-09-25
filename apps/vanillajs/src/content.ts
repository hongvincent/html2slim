import type { Locale } from "./i18n";

export type MetricId = "tti" | "bundle" | "locale" | "uptime";

export type Metric = {
  id: MetricId;
  value: number;
  unit: "seconds" | "kilobytes" | "percentage";
};

export const metrics: Metric[] = [
  { id: "tti", value: 1.3, unit: "seconds" },
  { id: "bundle", value: 92, unit: "kilobytes" },
  { id: "locale", value: 96, unit: "percentage" },
  { id: "uptime", value: 0.17, unit: "percentage" },
];

export type TaskItemId =
  | "appShell"
  | "vite"
  | "progressiveEnhancement"
  | "localeToggle"
  | "pseudoLocalization"
  | "glossary"
  | "keyboard"
  | "analytics"
  | "translationStatus";

export type TaskSection = {
  id: "platform" | "i18n" | "ux";
  titleKey: string;
  descriptionKey: string;
  items: { id: TaskItemId; labelKey: string; done: boolean }[];
};

export const taskSections: TaskSection[] = [
  {
    id: "platform",
    titleKey: "tasks.sections.platform.title",
    descriptionKey: "tasks.sections.platform.description",
    items: [
      { id: "appShell", labelKey: "tasks.items.appShell", done: true },
      { id: "vite", labelKey: "tasks.items.vite", done: true },
      { id: "progressiveEnhancement", labelKey: "tasks.items.progressiveEnhancement", done: true },
    ],
  },
  {
    id: "i18n",
    titleKey: "tasks.sections.i18n.title",
    descriptionKey: "tasks.sections.i18n.description",
    items: [
      { id: "localeToggle", labelKey: "tasks.items.localeToggle", done: true },
      { id: "pseudoLocalization", labelKey: "tasks.items.pseudoLocalization", done: false },
      { id: "glossary", labelKey: "tasks.items.glossary", done: false },
    ],
  },
  {
    id: "ux",
    titleKey: "tasks.sections.ux.title",
    descriptionKey: "tasks.sections.ux.description",
    items: [
      { id: "keyboard", labelKey: "tasks.items.keyboard", done: true },
      { id: "analytics", labelKey: "tasks.items.analytics", done: true },
      { id: "translationStatus", labelKey: "tasks.items.translationStatus", done: false },
    ],
  },
];

export type FeatureCard = {
  id: "modular" | "localization" | "accessibility";
  titleKey: string;
  bodyKey: string;
};

export const featureCards: FeatureCard[] = [
  {
    id: "modular",
    titleKey: "features.cards.modular.title",
    bodyKey: "features.cards.modular.body",
  },
  {
    id: "localization",
    titleKey: "features.cards.localization.title",
    bodyKey: "features.cards.localization.body",
  },
  {
    id: "accessibility",
    titleKey: "features.cards.accessibility.title",
    bodyKey: "features.cards.accessibility.body",
  },
];

export function formatMetricValue(metric: Metric, locale: Locale): string {
  const numberFormat =
    metric.unit === "percentage"
      ? new Intl.NumberFormat(locale, { maximumFractionDigits: 2 })
      : new Intl.NumberFormat(locale, { maximumFractionDigits: metric.unit === "seconds" ? 1 : 0 });

  if (metric.unit === "seconds") {
    return `${numberFormat.format(metric.value)}s`;
  }

  if (metric.unit === "kilobytes") {
    return `${numberFormat.format(metric.value)} KB`;
  }

  return `${numberFormat.format(metric.value)}%`;
}
