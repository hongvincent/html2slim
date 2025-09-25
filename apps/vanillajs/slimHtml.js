function createCounter() {
  const removedElements = {};
  return {
    track(tag) {
      removedElements[tag] = (removedElements[tag] || 0) + 1;
    },
    result() {
      return removedElements;
    },
  };
}

export function slimHtml(input, options) {
  const counter = createCounter();
  let html = input;

  if (!options.collapseWhitespaceOnly) {
    html = html.replace(/<head\b[^>]*>[\s\S]*?<\/head>/gi, () => {
      counter.track("head");
      return "";
    });

    html = html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, () => {
      counter.track("script");
      return "";
    });

    html = html.replace(/<noscript\b[^>]*>[\s\S]*?<\/noscript>/gi, () => {
      counter.track("noscript");
      return "";
    });

    html = html.replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, () => {
      counter.track("style");
      return "";
    });

    html = html.replace(/<!--[\s\S]*?-->/g, () => {
      counter.track("comment");
      return "";
    });

    html = html.replace(/<meta\b[^>]*>/gi, () => {
      counter.track("meta");
      return "";
    });

    html = html.replace(/<link\b[^>]*>/gi, () => {
      counter.track("link");
      return "";
    });

    html = html.replace(/<svg\b[^>]*>[\s\S]*?<\/svg>/gi, () => {
      counter.track("svg");
      return "";
    });

    if (!options.keepDataAttrs) {
      html = html.replace(/\s+data-[a-zA-Z0-9-]+="[^"]*"/g, () => {
        counter.track("data-attr");
        return "";
      });
    }

    if (!options.keepIds) {
      html = html.replace(/\s+id="[^"]*"/g, () => {
        counter.track("id-attr");
        return "";
      });
    }

    if (!options.keepClasses) {
      html = html.replace(/\s+class="[^"]*"/g, () => {
        counter.track("class-attr");
        return "";
      });
    }

    html = html.replace(/\s+style="[^"]*"/g, () => {
      counter.track("style-attr");
      return "";
    });

    html = html.replace(/\s+on[a-z]+="[^"]*"/gi, () => {
      counter.track("event-handler");
      return "";
    });
  }

  html = html
    .replace(/^[\t ]+/gm, "")
    .replace(/[\r\n]+/g, "\n")
    .replace(/\n{2,}/g, "\n")
    .replace(/\s{2,}/g, " ")
    .trim();

  const originalLength = input.length;
  const slimmedLength = html.length;
  const difference = Math.max(0, originalLength - slimmedLength);
  const reductionPercent = originalLength === 0 ? 0 : (difference / originalLength) * 100;

  return {
    html,
    removedElements: counter.result(),
    originalLength,
    slimmedLength,
    reductionPercent: Number(reductionPercent.toFixed(2)),
    unchanged: difference === 0,
  };
}
