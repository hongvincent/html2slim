export const SUPPORTED_LOCALES = ["en", "ko"];

export const translations = {
  en: {
    a11y: {
      skip: "Skip to main content",
      localeEn: "Switch to English",
      localeKo: "Switch to Korean",
      toastClose: "Close notification",
      slimSuccess: "HTML slimming complete.",
      slimError: "Provide HTML before running the slimmer.",
      localeChanged: "Language updated.",
    },
    nav: {
      product: "Product",
      docs: "Docs",
      roadmap: "Roadmap",
      updates: "Updates",
    },
    hero: {
      tagline: "Token-smart HTML optimizer",
      title: "Performance-first VanillaJS experience for HtmlSlim",
      subtitle:
        "Cut prompt bloat with a progressive, bilingual interface that keeps your docs fast, accessible, and translation-ready.",
      ctaPrimary: "Try the HtmlSlim tool",
      ctaSecondary: "View migration checklist",
      quickStats: "Core KPIs after the migration",
    },
    metrics: {
      tti: {
        label: "Median Time to Interactive",
        caption: "P95 goal: ≤ 1.5s on 4G networks",
      },
      bundle: {
        label: "Initial JS bundle size",
        caption: "Target: ≤ 150 KB gzipped",
      },
      locale: {
        label: "Locale coverage",
        caption: "Korean content completeness across surfaces",
      },
      uptime: {
        label: "Client-side error rate",
        caption: "Maintain <0.2% (P95) with real-time alerts",
      },
    },
    slimmer: {
      title: "Slim HTML instantly",
      description:
        "Paste HTML, choose what to preserve, and generate a lighter snippet ready for LLM prompts or rapid sharing.",
      inputLabel: "Input HTML",
      outputLabel: "Slimmed HTML",
      placeholder: "Paste HTML or snippets from your CMS…",
      helper: "Tokens saved are calculated from raw character counts. Preserve structural attributes when needed for selectors.",
      runButton: "Slim HTML",
      copyButton: "Copy result",
      downloadButton: "Download .html",
      optionsTitle: "Slimming preferences",
      preserveIds: "Keep id attributes",
      preserveClasses: "Keep class attributes",
      preserveDataAttrs: "Keep data-* attributes",
      preserveWhitespace: "Collapse whitespace only",
      emptyError: "Add HTML before slimming",
      resultTitle: "Summary",
      removedLabel: "Elements removed",
      reductionLabel: "Size reduction",
      noChanges: "HTML is already optimized—no elements removed.",
      copiedToast: "Slimmed markup copied to clipboard",
      downloadToast: "Download ready—check your files",
      charCountSuffix: "chars",
    },
    tasks: {
      title: "Migration task tracker",
      description:
        "Track the highest-impact milestones for the VanillaJS rollout. Completed items are marked below so nothing is missed.",
      sections: {
        platform: {
          title: "Platform & Performance",
          description: "Core infrastructure work to unlock faster rendering.",
        },
        i18n: {
          title: "Localization",
          description: "Ensure English and Korean experiences stay in sync.",
        },
        ux: {
          title: "UX & Observability",
          description: "Delight contributors while maintaining visibility.",
        },
      },
      items: {
        appShell: "VanillaJS app shell with semantic HTML",
        vite: "Vite build with differential serving",
        progressiveEnhancement: "Progressive enhancement without JS blocking",
        localeToggle: "In-app locale switcher with persistence",
        pseudoLocalization: "Pseudo-localization support in staging",
        glossary: "Glossary enforcement for translated strings",
        keyboard: "Keyboard shortcuts & focus management",
        analytics: "Web Vitals, language analytics, and Sentry hooks",
        translationStatus: "Inline translation status indicators",
      },
    },
    features: {
      title: "What’s new in the VanillaJS experience",
      description: "Designed for speed, clarity, and bilingual collaboration from day one.",
      cards: {
        modular: {
          title: "Modular app shell",
          body: "ES modules, granular hydration, and offline-aware caching keep the experience resilient on flaky networks.",
        },
        localization: {
          title: "Bilingual ready",
          body: "Deterministic locale detection with instant content swaps and graceful fallbacks for untranslated blocks.",
        },
        accessibility: {
          title: "Accessibility-first",
          body: "WCAG 2.1 AA patterns, reduced-motion respect, and audible updates for async results keep everyone productive.",
        },
      },
    },
    observability: {
      title: "Reliability & Observability",
      description: "Instrumentation keeps migrations measurable and debuggable.",
      bullets: [
        "Real User Monitoring with Web Vitals streaming to dashboards.",
        "Locale-segmented analytics for adoption and coverage tracking.",
        "Automatic alerts for client regressions with Sentry tagging.",
      ],
      cta: "Download instrumentation checklist",
    },
    footer: {
      social: "Join the conversation →",
      rights: "© 2024 HtmlSlim. All rights reserved.",
    },
  },
  ko: {
    a11y: {
      skip: "본문으로 바로가기",
      localeEn: "영어로 전환",
      localeKo: "한국어로 전환",
      toastClose: "알림 닫기",
      slimSuccess: "HTML 최적화가 완료되었습니다.",
      slimError: "실행하기 전에 HTML을 입력하세요.",
      localeChanged: "언어가 변경되었습니다.",
    },
    nav: {
      product: "제품",
      docs: "문서",
      roadmap: "로드맵",
      updates: "업데이트",
    },
    hero: {
      tagline: "토큰을 아끼는 HTML 최적화",
      title: "HtmlSlim을 위한 퍼포먼스 중심 VanillaJS 경험",
      subtitle:
        "프로그레시브하고 이중 언어를 지원하는 인터페이스로 문서를 빠르고 접근 가능하게 유지하세요.",
      ctaPrimary: "HtmlSlim 도구 사용하기",
      ctaSecondary: "마이그레이션 체크리스트 보기",
      quickStats: "마이그레이션 이후 핵심 지표",
    },
    metrics: {
      tti: {
        label: "중간 TTI",
        caption: "P95 목표: 4G 네트워크에서 1.5초 이하",
      },
      bundle: {
        label: "초기 JS 번들 크기",
        caption: "목표: 압축 기준 150 KB 이하",
      },
      locale: {
        label: "로케일 커버리지",
        caption: "전 구역의 한국어 콘텐츠 완성도",
      },
      uptime: {
        label: "클라이언트 오류율",
        caption: "실시간 경보로 0.2% (P95) 미만 유지",
      },
    },
    slimmer: {
      title: "HTML을 즉시 가볍게",
      description: "HTML을 붙여 넣고 보존할 항목을 선택하면 LLM 프롬프트나 빠른 공유에 맞는 경량 마크업이 생성됩니다.",
      inputLabel: "입력 HTML",
      outputLabel: "최적화된 HTML",
      placeholder: "CMS에서 복사한 HTML 또는 스니펫을 붙여 넣으세요…",
      helper: "토큰 절감량은 원시 문자 수로 계산됩니다. 선택자에 필요한 속성은 보존하세요.",
      runButton: "HTML 최적화",
      copyButton: "결과 복사",
      downloadButton: "HTML 다운로드",
      optionsTitle: "최적화 옵션",
      preserveIds: "id 속성 유지",
      preserveClasses: "class 속성 유지",
      preserveDataAttrs: "data-* 속성 유지",
      preserveWhitespace: "공백만 압축",
      emptyError: "최적화할 HTML을 입력하세요",
      resultTitle: "요약",
      removedLabel: "제거된 요소",
      reductionLabel: "크기 감소율",
      noChanges: "이미 최적화된 HTML입니다—제거된 항목이 없습니다.",
      copiedToast: "최적화된 마크업이 복사되었습니다",
      downloadToast: "다운로드가 시작되었습니다",
      charCountSuffix: "자",
    },
    tasks: {
      title: "마이그레이션 작업 추적기",
      description: "VanillaJS 전환에 필요한 핵심 마일스톤을 추적합니다. 완료된 항목은 아래에 표시됩니다.",
      sections: {
        platform: {
          title: "플랫폼 & 성능",
          description: "더 빠른 렌더링을 위한 핵심 인프라 작업입니다.",
        },
        i18n: {
          title: "현지화",
          description: "영어와 한국어 경험을 동일하게 유지합니다.",
        },
        ux: {
          title: "UX & 가시성",
          description: "기여자를 만족시키면서 관측 가능성을 확보합니다.",
        },
      },
      items: {
        appShell: "시맨틱 HTML 기반 VanillaJS 앱 셸",
        vite: "Vite 빌드와 차등 서빙",
        progressiveEnhancement: "자바스크립트 차단 없이 프로그레시브 인핸스먼트",
        localeToggle: "저장되는 인앱 언어 전환",
        pseudoLocalization: "스테이징에서 가상 현지화 지원",
        glossary: "번역 용어집 준수",
        keyboard: "키보드 단축키와 포커스 관리",
        analytics: "웹 바이탈, 언어 분석, Sentry 연동",
        translationStatus: "인라인 번역 상태 표시",
      },
    },
    features: {
      title: "VanillaJS 경험의 새로운 점",
      description: "처음부터 속도, 명확성, 이중 언어 협업을 고려했습니다.",
      cards: {
        modular: {
          title: "모듈형 앱 셸",
          body: "ES 모듈과 세분화된 하이드레이션, 오프라인 캐싱으로 불안정한 네트워크에서도 안정적입니다.",
        },
        localization: {
          title: "이중 언어 지원",
          body: "결정적인 로케일 감지와 즉각적인 콘텐츠 전환, 미번역 블록에 대한 우아한 폴백을 제공합니다.",
        },
        accessibility: {
          title: "접근성 우선",
          body: "WCAG 2.1 AA 패턴, 모션 감소 존중, 비동기 결과에 대한 음성 안내로 모두의 생산성을 높입니다.",
        },
      },
    },
    observability: {
      title: "신뢰성과 관측성",
      description: "계측을 통해 마이그레이션을 측정하고 디버깅합니다.",
      bullets: [
        "실사용자 모니터링으로 웹 바이탈을 대시보드에 스트리밍합니다.",
        "로케일별 분석으로 도입과 커버리지를 추적합니다.",
        "Sentry 태깅을 통한 클라이언트 회귀 자동 경보.",
      ],
      cta: "계측 체크리스트 다운로드",
    },
    footer: {
      social: "커뮤니티에 참여하기 →",
      rights: "© 2024 HtmlSlim. All rights reserved.",
    },
  },
};

export function getTranslation(locale, key) {
  const segments = key.split(".");
  let current = translations[locale];

  for (const segment of segments) {
    if (typeof current === "string") {
      throw new Error(`Translation key "${key}" resolved early at segment "${segment}".`);
    }

    if (!Object.prototype.hasOwnProperty.call(current, segment)) {
      throw new Error(`Missing translation for key "${key}" in locale ${locale}`);
    }

    current = current[segment];
  }

  if (typeof current !== "string") {
    throw new Error(`Translation key "${key}" did not resolve to a string.`);
  }

  return current;
}

export function isLocale(value) {
  return SUPPORTED_LOCALES.includes(value);
}
