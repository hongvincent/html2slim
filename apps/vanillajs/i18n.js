export const locales = ["en", "ko"];

export function isLocale(value) {
  return locales.includes(value);
}

export const translations = {
  en: {
    meta: {
      title: "HtmlSlim – VanillaJS HTML slimming studio",
      description:
        "Trim HTML markup with a progressive, bilingual VanillaJS workflow. HtmlSlim keeps experiences fast for Codex teams across English and Korean audiences.",
    },
    a11y: {
      skip: "Skip to main content",
    },
    brand: {
      name: "HtmlSlim",
    },
    localeNames: {
      en: "English",
      ko: "한국어",
    },
    nav: {
      convert: "Slimmer",
      features: "Highlights",
      workflow: "Migration tasks",
      faq: "FAQ",
    },
    hero: {
      kicker: "Performance-first VanillaJS",
      title: "Slim your HTML without losing intent.",
      subtitle:
        "The HtmlSlim workspace trims bulky markup locally, keeps translations aligned, and gives Codex teams progressive enhancement from the start.",
      primaryCta: "Try the slimmer",
      secondaryCta: "View migration roadmap",
    },
    metrics: {
      heading: "Migration guardrails",
      subheading: "Monitor the goals that define success for Codex's VanillaJS shift.",
      items: {
        tti: {
          title: "Median TTI target",
          caption: "4G reference device measurements",
        },
        bundle: {
          title: "Initial JS budget",
          caption: "≤120 KB gzipped first payload",
        },
        errors: {
          title: "Client error rate",
          caption: "<0.2% at P95 with Sentry instrumentation",
        },
      },
    },
    converter: {
      heading: "HtmlSlim Studio",
      description:
        "Paste HTML, slim it instantly, and inspect what changed. Everything runs locally in VanillaJS so you can trust the output even offline.",
      inputLabel: "Source HTML",
      inputPlaceholder: "Paste your full HTML document or component snippet…",
      outputLabel: "Slimmed HTML",
      emptyOutput: "Run the slimmer to preview cleaned markup.",
      actions: {
        slim: "Slim HTML",
        copy: "Copy slimmed HTML",
      },
      stats: {
        heading: "Slimming summary",
        original: "Original",
        slimmed: "Slimmed",
        saved: "Saved",
        reduction: "Reduction",
      },
      removals: {
        heading: "Elements removed",
        empty: "Your markup was already lean—no elements removed.",
        labels: {
          head: "<head> section",
          script: "<script> tags",
          noscript: "<noscript> fallbacks",
          style: "<style> blocks",
          comment: "Comments",
          meta: "<meta> tags",
          link: "<link> tags",
          svg: "Inline SVG",
          "data-attribute": "data-* attributes",
          "event-handler": "Inline event handlers",
          id: "id attributes",
          class: "class attributes",
          "style-attr": "style attributes",
        },
      },
      toast: {
        success: "Slimming complete – removed {count} characters.",
        empty: "Add HTML to slim first.",
        copied: "Slimmed HTML copied to clipboard.",
        copyFailed: "Copy failed. Select the output and copy manually.",
      },
    },
    features: {
      heading: "Why teams choose HtmlSlim",
      description: "Deliver fast, bilingual documentation with accessible VanillaJS primitives.",
      cards: {
        performance: {
          title: "Performance-first architecture",
          body: "Differential builds and lazy hydration keep the first interaction lightning fast.",
          points: {
            0: "VanillaJS modules stay under 150 KB for the initial payload.",
            1: "Intersection-aware hydration waits until content is visible.",
            2: "Web Vitals dashboards track TTI, LCP, and CLS in real time.",
          },
        },
        localization: {
          title: "Locale-native experiences",
          body: "Deterministic detection, IME-aware search, and glossary enforcement make bilingual UX effortless.",
          points: {
            0: "URL, preference, and Accept-Language precedence is explicit.",
            1: "IME composition events keep Korean search buttery smooth.",
            2: "Translation dashboards surface queue health and coverage gaps.",
          },
        },
        workflow: {
          title: "Confident contributor workflow",
          body: "Inline validation, autosave, and diff previews help authors ship safely.",
          points: {
            0: "Markdown and WYSIWYG editors share a11y-first components.",
            1: "Glossary checks flag risky terminology before publish.",
            2: "Role-aware review states keep admins, PMs, and translators aligned.",
          },
        },
      },
    },
    workflow: {
      heading: "Migration tasks that stay top of mind",
      description: "Use this roadmap to guide the VanillaJS rollout for Codex.",
      steps: {
        detect: {
          badge: "Step 01",
          title: "Detect the locale",
          body: "Respect Accept-Language, user preferences, and URL prefixes with deterministic precedence.",
        },
        instrument: {
          badge: "Step 02",
          title: "Instrument the basics",
          body: "Log search adoption, locale toggles, and Core Web Vitals with privacy-safe analytics.",
        },
        localize: {
          badge: "Step 03",
          title: "Localize content pipelines",
          body: "Expose translation queues, statuses, and pseudo-localization in staging.",
        },
        harden: {
          badge: "Step 04",
          title: "Harden the platform",
          body: "Enforce OAuth/OIDC, RBAC, signed assets, and resilient caching strategies.",
        },
      },
      checklist: {
        heading: "Launch checklist",
        note: "Track completion in your project board—these are the minimum P0 outcomes.",
        items: {
          appShell: "Ship a progressive VanillaJS app shell with skip links and offline-ready caching.",
          search: "Deliver IME-aware search with keyboard shortcuts and live-region updates.",
          editor: "Provide Markdown/WYSIWYG editors with inline validation and translation status.",
          analytics: "Capture locale, search, and translation metrics for PM dashboards.",
          fallbacks: "Design graceful language fallbacks with badges and retry paths.",
        },
      },
    },
    faq: {
      heading: "Common questions",
      description: "Answers to the questions Codex teams ask most often.",
      items: [
        {
          question: "How does the slimmer decide what to remove?",
          answer:
            "HtmlSlim strips scripts, styles, metadata, ids, classes, inline styles, event handlers, and data attributes while leaving semantic markup intact.",
        },
        {
          question: "What changed versus the old framework build?",
          answer:
            "The new studio runs entirely in VanillaJS with zero framework runtime, keeping the initial JS bundle under 150 KB and simplifying hosting.",
        },
        {
          question: "Can teams trust the output for localized docs?",
          answer:
            "Yes. The slimmer preserves readable structure, surfaces removed element counts, and works offline so translators can inspect every change.",
        },
      ],
    },
    footer: {
      rights: "Crafted for the Codex migration initiative.",
    },
  },
  ko: {
    meta: {
      title: "HtmlSlim – VanillaJS HTML 슬리밍 스튜디오",
      description:
        "HtmlSlim은 진행 중인 Codex 전환을 위해 HTML 마크업을 현지화 친화적으로 가볍게 다듬는 바닐라 JS 워크플로를 제공합니다.",
    },
    a11y: {
      skip: "본문으로 바로가기",
    },
    brand: {
      name: "HtmlSlim",
    },
    localeNames: {
      en: "English",
      ko: "한국어",
    },
    nav: {
      convert: "슬리머",
      features: "핵심 하이라이트",
      workflow: "마이그레이션 작업",
      faq: "자주 묻는 질문",
    },
    hero: {
      kicker: "성능 중심 VanillaJS",
      title: "의도를 지키면서 HTML을 날씬하게.",
      subtitle:
        "HtmlSlim 워크스페이스는 부피가 큰 마크업을 로컬에서 즉시 다듬고, 번역 정합성을 유지하며, Codex 팀에 프로그레시브 인핸스먼트를 제공합니다.",
      primaryCta: "슬리머 사용하기",
      secondaryCta: "마이그레이션 로드맵 보기",
    },
    metrics: {
      heading: "마이그레이션 가드레일",
      subheading: "Codex의 VanillaJS 전환 성공을 정의하는 목표를 추적하세요.",
      items: {
        tti: {
          title: "중앙 TTI 목표",
          caption: "4G 기준 기기에서 측정",
        },
        bundle: {
          title: "초기 JS 예산",
          caption: "첫 페이로드 Gzip 기준 120 KB 이하",
        },
        errors: {
          title: "클라이언트 오류율",
          caption: "Sentry 계측으로 P95 기준 0.2% 미만",
        },
      },
    },
    converter: {
      heading: "HtmlSlim 스튜디오",
      description:
        "HTML을 붙여 넣고 즉시 슬림화 결과를 확인하세요. 모든 과정이 VanillaJS로 로컬에서 진행되어 오프라인에서도 믿고 사용할 수 있습니다.",
      inputLabel: "원본 HTML",
      inputPlaceholder: "전체 HTML 문서 또는 컴포넌트 코드를 붙여 넣어 주세요…",
      outputLabel: "슬림화된 HTML",
      emptyOutput: "슬리머를 실행하면 정리된 마크업을 볼 수 있습니다.",
      actions: {
        slim: "HTML 슬림화",
        copy: "슬림화 코드 복사",
      },
      stats: {
        heading: "슬림화 요약",
        original: "원본",
        slimmed: "슬림화",
        saved: "절감량",
        reduction: "감소율",
      },
      removals: {
        heading: "제거된 요소",
        empty: "이미 충분히 가벼운 마크업이네요 – 제거된 요소가 없습니다.",
        labels: {
          head: "<head> 섹션",
          script: "<script> 태그",
          noscript: "<noscript> 폴백",
          style: "<style> 블록",
          comment: "주석",
          meta: "<meta> 태그",
          link: "<link> 태그",
          svg: "인라인 SVG",
          "data-attribute": "data-* 속성",
          "event-handler": "인라인 이벤트 핸들러",
          id: "id 속성",
          class: "class 속성",
          "style-attr": "style 속성",
        },
      },
      toast: {
        success: "슬림화 완료 – {count}자 줄였습니다.",
        empty: "먼저 HTML을 입력해 주세요.",
        copied: "슬림화된 HTML을 복사했습니다.",
        copyFailed: "복사에 실패했습니다. 출력 내용을 직접 선택해 복사해 주세요.",
      },
    },
    features: {
      heading: "HtmlSlim을 선택하는 이유",
      description: "접근성을 갖춘 VanillaJS 기반으로 빠르고 이중 언어 친화적인 문서를 제공합니다.",
      cards: {
        performance: {
          title: "성능 중심 아키텍처",
          body: "차등 빌드와 지연 하이드레이션으로 첫 상호작용을 번개처럼 유지합니다.",
          points: {
            0: "초기 페이로드는 150 KB 이하의 VanillaJS 모듈로 구성됩니다.",
            1: "Intersection 기반 하이드레이션으로 필요한 순간에만 활성화합니다.",
            2: "Web Vitals 대시보드로 TTI, LCP, CLS를 실시간 추적합니다.",
          },
        },
        localization: {
          title: "언어 본연의 경험",
          body: "결정적인 언어 감지, IME 대응 검색, 용어집 검증으로 이중 언어 UX를 자연스럽게 만듭니다.",
          points: {
            0: "URL, 사용자 설정, 브라우저 언어 우선순위를 명확하게 적용합니다.",
            1: "IME 조합 이벤트를 존중해 한국어 검색이 부드럽습니다.",
            2: "번역 대시보드가 대기열 상태와 커버리지를 시각화합니다.",
          },
        },
        workflow: {
          title: "안심하고 작업하는 워크플로",
          body: "인라인 검증, 자동 저장, 차이 미리보기가 안전한 배포를 돕습니다.",
          points: {
            0: "마크다운과 WYSIWYG 에디터가 접근성 중심 컴포넌트를 공유합니다.",
            1: "용어집 검사를 통해 위험한 용어를 미리 잡아냅니다.",
            2: "역할 기반 검토 상태로 관리자, PM, 번역가가 정렬됩니다.",
          },
        },
      },
    },
    workflow: {
      heading: "항상 염두에 둘 마이그레이션 작업",
      description: "다음 로드맵으로 Codex의 VanillaJS 전환을 이끌어 보세요.",
      steps: {
        detect: {
          badge: "Step 01",
          title: "언어 감지 정립",
          body: "Accept-Language, 사용자 설정, URL 프리픽스 순서를 명확히 적용합니다.",
        },
        instrument: {
          badge: "Step 02",
          title: "핵심 계측",
          body: "검색 이용률, 언어 전환, Web Vitals를 개인정보 친화적인 분석으로 기록합니다.",
        },
        localize: {
          badge: "Step 03",
          title: "콘텐츠 현지화",
          body: "번역 대기열과 상태를 노출하고 스테이징에서 의사 현지화를 제공합니다.",
        },
        harden: {
          badge: "Step 04",
          title: "플랫폼 강화",
          body: "OAuth/OIDC, RBAC, 서명된 자산, 탄력적 캐싱 전략을 적용합니다.",
        },
      },
      checklist: {
        heading: "런칭 체크리스트",
        note: "프로젝트 보드에서 진행 상황을 추적하세요. 이 목록은 최소 P0 결과입니다.",
        items: {
          appShell: "스킵 링크와 오프라인 준비 캐시를 갖춘 프로그레시브 VanillaJS 앱 셸을 제공하세요.",
          search: "단축키와 라이브 리전을 갖춘 IME 대응 검색을 제공하세요.",
          editor: "인라인 검증과 번역 상태를 보여주는 Markdown/WYSIWYG 에디터를 구축하세요.",
          analytics: "언어, 검색, 번역 지표를 수집해 PM 대시보드에 제공합니다.",
          fallbacks: "배지와 재시도 경로가 포함된 우아한 언어 폴백을 설계하세요.",
        },
      },
    },
    faq: {
      heading: "자주 묻는 질문",
      description: "Codex 팀이 가장 자주 묻는 질문에 대한 답변입니다.",
      items: [
        {
          question: "어떤 기준으로 요소를 제거하나요?",
          answer:
            "HtmlSlim은 스크립트, 스타일, 메타데이터, id/class, 인라인 스타일, 이벤트 핸들러, data-* 속성을 제거하면서도 의미 있는 마크업은 유지합니다.",
        },
        {
          question: "이전 프레임워크 기반과 무엇이 달라졌나요?",
          answer:
            "새 스튜디오는 순수 VanillaJS로 동작해 초기 JS 번들을 150 KB 이하로 유지하고, 배포와 호스팅을 단순화합니다.",
        },
        {
          question: "현지화 문서에 사용해도 안전한가요?",
          answer:
            "네. 슬리머는 가독성 있는 구조를 보존하고 제거된 요소 수를 보여 주며, 오프라인에서도 작동해 번역가가 변화를 직접 확인할 수 있습니다.",
        },
      ],
    },
    footer: {
      rights: "Codex 마이그레이션 이니셔티브를 위해 제작되었습니다.",
    },
  },
};

export function getTranslation(locale, key) {
  const segments = key.split(".");
  let current = translations[locale];

  for (const segment of segments) {
    if (current && typeof current === "object" && segment in current) {
      current = current[segment];
    } else {
      return key;
    }
  }

  return current;
}
