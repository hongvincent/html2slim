export const stats = [
  { id: "tti", value: 1.2, type: "seconds" },
  { id: "bundle", value: 78, type: "kilobytes" },
  { id: "locales", value: 2, type: "count" },
  { id: "satisfaction", value: 98, type: "percentage" },
];

export function formatStatValue(stat, locale) {
  const numberFormat = new Intl.NumberFormat(locale, {
    maximumFractionDigits: stat.type === "seconds" ? 1 : 0,
  });

  switch (stat.type) {
    case "seconds":
      return `${numberFormat.format(stat.value)}s`;
    case "kilobytes":
      return `${numberFormat.format(stat.value)} KB`;
    case "count":
      return numberFormat.format(stat.value);
    case "percentage":
    default:
      return `${numberFormat.format(stat.value)}%`;
  }
}

export const featureCards = [
  {
    id: "compression",
    icon: "🌀",
    titleKey: "features.compression.title",
    bodyKey: "features.compression.body",
    pointKeys: [
      "features.compression.points.0",
      "features.compression.points.1",
      "features.compression.points.2",
    ],
  },
  {
    id: "experience",
    icon: "🌈",
    titleKey: "features.experience.title",
    bodyKey: "features.experience.body",
    pointKeys: [
      "features.experience.points.0",
      "features.experience.points.1",
      "features.experience.points.2",
    ],
  },
  {
    id: "localization",
    icon: "🌏",
    titleKey: "features.localization.title",
    bodyKey: "features.localization.body",
    pointKeys: [
      "features.localization.points.0",
      "features.localization.points.1",
      "features.localization.points.2",
    ],
  },
];

export const journeySteps = [
  {
    id: "discover",
    eyebrowKey: "journey.discover.eyebrow",
    titleKey: "journey.discover.title",
    descriptionKey: "journey.discover.body",
  },
  {
    id: "compose",
    eyebrowKey: "journey.compose.eyebrow",
    titleKey: "journey.compose.title",
    descriptionKey: "journey.compose.body",
  },
  {
    id: "preview",
    eyebrowKey: "journey.preview.eyebrow",
    titleKey: "journey.preview.title",
    descriptionKey: "journey.preview.body",
  },
  {
    id: "shine",
    eyebrowKey: "journey.shine.eyebrow",
    titleKey: "journey.shine.title",
    descriptionKey: "journey.shine.body",
  },
];

export const spotlights = [
  {
    id: "canvas",
    tone: "violet",
    eyebrowKey: "spotlights.canvas.eyebrow",
    titleKey: "spotlights.canvas.title",
    descriptionKey: "spotlights.canvas.body",
    highlightKeys: [
      "spotlights.canvas.highlights.0",
      "spotlights.canvas.highlights.1",
      "spotlights.canvas.highlights.2",
    ],
  },
  {
    id: "flow",
    tone: "emerald",
    eyebrowKey: "spotlights.flow.eyebrow",
    titleKey: "spotlights.flow.title",
    descriptionKey: "spotlights.flow.body",
    highlightKeys: [
      "spotlights.flow.highlights.0",
      "spotlights.flow.highlights.1",
      "spotlights.flow.highlights.2",
    ],
  },
  {
    id: "ops",
    tone: "amber",
    eyebrowKey: "spotlights.ops.eyebrow",
    titleKey: "spotlights.ops.title",
    descriptionKey: "spotlights.ops.body",
    highlightKeys: [
      "spotlights.ops.highlights.0",
      "spotlights.ops.highlights.1",
      "spotlights.ops.highlights.2",
    ],
  },
];

export const testimonials = [
  {
    id: "hana",
    quoteKey: "testimonials.hana.quote",
    roleKey: "testimonials.hana.role",
    nameKey: "testimonials.hana.name",
  },
  {
    id: "marco",
    quoteKey: "testimonials.marco.quote",
    roleKey: "testimonials.marco.role",
    nameKey: "testimonials.marco.name",
  },
];
