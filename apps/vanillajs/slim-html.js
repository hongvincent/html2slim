const removalPatterns = [
  { id: "head", regex: /<head\b[^>]*>[\s\S]*?<\/head>/gi },
  { id: "script", regex: /<script\b[^>]*>[\s\S]*?<\/script>/gi },
  { id: "noscript", regex: /<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi },
  { id: "style", regex: /<style\b[^>]*>[\s\S]*?<\/style>/gi },
  { id: "comment", regex: /<!--[\s\S]*?-->/g },
  { id: "meta", regex: /<meta\b[^>]*>/gi },
  { id: "link", regex: /<link\b[^>]*>/gi },
  { id: "svg", regex: /<svg\b[^>]*>[\s\S]*?<\/svg>/gi },
];

const attributePatterns = [
  { id: "data-attribute", regex: /\s+data-[a-z0-9-]+=("[^"]*"|'[^']*')/gi },
  { id: "event-handler", regex: /\s+on[a-z]+=("[^"]*"|'[^']*')/gi },
  { id: "id", regex: /\s+id=("[^"]*"|'[^']*')/gi },
  { id: "class", regex: /\s+class=("[^"]*"|'[^']*')/gi },
  { id: "style-attr", regex: /\s+style=("[^"]*"|'[^']*')/gi },
];

function trackRemoval(map, id, count = 1) {
  map[id] = (map[id] || 0) + count;
}

export function slimHtml(html) {
  const removed = {};
  let output = html;

  removalPatterns.forEach(({ id, regex }) => {
    output = output.replace(regex, (match) => {
      trackRemoval(removed, id);
      return "";
    });
  });

  attributePatterns.forEach(({ id, regex }) => {
    output = output.replace(regex, (match) => {
      trackRemoval(removed, id);
      return "";
    });
  });

  output = output
    .replace(/\s{2,}/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/>\s+</g, ">
<")
    .trim();

  return {
    html: output,
    removed,
  };
}
