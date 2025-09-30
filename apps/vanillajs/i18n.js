export const locales = ["en", "ko"];

export function isLocale(value) {
  return locales.includes(value);
}

export const translations = {
  en: {
    a11y: {
      skip: "Skip to main content",
    },
    brand: {
      name: "HtmlSlim",
    },
    nav: {
      features: "Feature Suite",
      journey: "Experience Journey",
      showcase: "Spotlights",
      testimonials: "Voices",
    },
    hero: {
      tagline: "Vanilla-first, future-bright",
      title: "Dream up delightful docs, then slim them in style.",
      subtitle:
        "HtmlSlim is a concept cockpit for Codex teams—where performance, storytelling, and bilingual finesse merge into one dazzling interface.",
      primaryCta: "Explore capabilities",
      secondaryCta: "See the journey",
    },
    stats: {
      tti: {
        label: "Median TTI",
        caption: "4G handset benchmark",
      },
      bundle: {
        label: "Initial JS",
        caption: "Gzipped delivery",
      },
      locales: {
        label: "Live locales",
        caption: "English & Korean",
      },
      satisfaction: {
        label: "Design delight",
        caption: "Beta survey happiness",
      },
    },
    features: {
      heading: "Signature capabilities",
      description:
        "Everything on this canvas celebrates the HtmlSlim migration goals—sleeker prompts, expressive storytelling, and effortless localisation.",
      compression: {
        title: "Prompt-slimming artistry",
        body:
          "Balance ruthless efficiency with semantic grace. HtmlSlim keeps code pristine while trimming every unnecessary glyph.",
        points: {
          0: "Whitespace-aware pruning guarded by design tokens.",
          1: "Smart element focus so intent stays intact for LLMs.",
          2: "Live reduction telemetry for instant bragging rights.",
        },
      },
      experience: {
        title: "Immersive reading journey",
        body:
          "Navigate documentation like a cinematic universe—glassmorphism panels, aurora lighting, and adaptive typographic rhythm included.",
        points: {
          0: "Reactive layouts that honor reduced-motion preferences.",
          1: "Keyboard choreography with global shortcuts and skip links.",
          2: "Deep-linked chapters paired with contextual callouts.",
        },
      },
      localization: {
        title: "Bilingual harmony",
        body:
          "English and Korean live side-by-side with precision—glossary-aware phrasing, IME-respectful search, and confident fallbacks.",
        points: {
          0: "Locale state persists across sessions and devices.",
          1: "Pseudo-localisation staging catches spacing surprises early.",
          2: "Analytics reveal adoption, translation queues, and impact.",
        },
      },
    },
    journey: {
      heading: "From spark to spotlight",
      description:
        "Four tactile beats carry contributors from idea to polished publication—each crafted to celebrate focus, flow, and feedback.",
      discover: {
        eyebrow: "01. Discover",
        title: "Survey the cosmos",
        body: "Surface the docs that matter via predictive, locale-aware search and atmospheric navigation cues.",
      },
      compose: {
        eyebrow: "02. Compose",
        title: "Author with confidence",
        body: "Markdown, WYSIWYG, and glossary hints unite to keep every edit accurate, inclusive, and on brand.",
      },
      preview: {
        eyebrow: "03. Preview",
        title: "Rehearse the reveal",
        body: "Diffs, translation states, and device staging rooms ensure nothing ships without applause.",
      },
      shine: {
        eyebrow: "04. Shine",
        title: "Deliver the wow",
        body: "Launch pages that render instantly, read beautifully, and log insights for product, localisation, and support teams.",
      },
    },
    spotlights: {
      heading: "Immersive spotlights",
      description:
        "Glide through three experiential zones highlighting how HtmlSlim delights every stakeholder.",
      canvas: {
        eyebrow: "Creative canvas",
        title: "Aurora layout lab",
        body:
          "Mood-driven theming pairs neon gradients with neutral foundations so teams can ideate freely without sacrificing readability.",
        highlights: {
          0: "Configurable constellations—toggle backgrounds, accents, and typography on the fly.",
          1: "Responsive glass panels with depth layers for code, media, and translation callouts.",
          2: "Contrast-safe palettes automatically adapt for dark or light settings.",
        },
      },
      flow: {
        eyebrow: "Flow state",
        title: "Velocity control room",
        body:
          "Experience the telemetry that keeps Codex humming: real-time Web Vitals, session heatmaps, and celebratory success toasts.",
        highlights: {
          0: "Performance budgets visualised with pulse animations when targets are met.",
          1: "Hotkeys for search, locale swaps, and editor previews maintain rhythm.",
          2: "Live-region announcements make async updates inclusive for screen readers.",
        },
      },
      ops: {
        eyebrow: "Operational zen",
        title: "Governance atrium",
        body:
          "Admins and localisation leads orchestrate rollouts, monitor translation queues, and audit content without friction.",
        highlights: {
          0: "Role-driven dashboards summarise locale health and glossary compliance.",
          1: "Bulk workflows accelerate translation approvals and notifications.",
          2: "Secure defaults—signed asset links and CSRF-safe edits—come standard.",
        },
      },
    },
    testimonials: {
      heading: "What our teams feel",
      description: "A bilingual chorus celebrating momentum and craft.",
      hana: {
        name: "Hana Kim",
        role: "Localization Lead, Seoul",
        quote:
          "The pseudo-localised staging flow exposed spacing bugs days earlier than before—and our translators adore the glossary guardrails.",
      },
      marco: {
        name: "Marco Diaz",
        role: "Staff Engineer, Austin",
        quote:
          "Performance budgets are no longer aspirational. HtmlSlim's telemetry made sub-second TTI the default expectation.",
      },
    },
    closing: {
      title: "Ready to co-create the next chapter?",
      subtitle:
        "This concept site is a beacon for Codex's VanillaJS renaissance. Let it inspire roadmaps, prototypes, and partnerships.",
      button: "Download the vision brief",
      footerNote: "Crafted with imagination for the Codex migration initiative.",
    },
  },
  ko: {
    a11y: {
      skip: "본문으로 바로가기",
    },
    brand: {
      name: "HtmlSlim",
    },
    nav: {
      features: "주요 기능",
      journey: "경험 여정",
      showcase: "스포트라이트",
      testimonials: "팀의 목소리",
    },
    hero: {
      tagline: "바닐라 기반, 미래 지향",
      title: "상상한 문서 경험을 슬림하고 화려하게 완성하세요.",
      subtitle:
        "HtmlSlim은 Codex 팀을 위한 콘셉트 조종석입니다. 성능, 스토리텔링, 이중 언어 감성이 한 화면에서 조화를 이룹니다.",
      primaryCta: "핵심 기능 살펴보기",
      secondaryCta: "여정 보기",
    },
    stats: {
      tti: {
        label: "중앙 TTI",
        caption: "4G 단말 기준",
      },
      bundle: {
        label: "초기 JS",
        caption: "Gzip 전송 크기",
      },
      locales: {
        label: "지원 언어",
        caption: "영어 · 한국어",
      },
      satisfaction: {
        label: "디자인 만족도",
        caption: "베타 설문 결과",
      },
    },
    features: {
      heading: "시그니처 역량",
      description:
        "HtmlSlim 전환 목표를 한눈에 담았습니다. 더 날씬한 프롬프트, 감각적인 스토리텔링, 자연스러운 현지화를 경험하세요.",
      compression: {
        title: "프롬프트 슬리밍 아트",
        body:
          "필요 없는 글자는 과감히 줄이고 의미는 온전히 지킵니다. HtmlSlim은 코드 품질을 보존하면서도 우아하게 다듬습니다.",
        points: {
          0: "디자인 토큰을 지키는 공백 최적화.",
          1: "LLM 맥락을 살리는 스마트 요소 포커스.",
          2: "즉시 확인 가능한 절감률 텔레메트리.",
        },
      },
      experience: {
        title: "몰입형 문서 여정",
        body:
          "글래스모피즘 패널과 오로라 조명, 반응형 타이포그래피가 어우러져 영화처럼 문서를 탐색할 수 있습니다.",
        points: {
          0: "사용자 선호(모션 최소화)를 존중하는 반응형 레이아웃.",
          1: "글로벌 단축키와 스킵 링크가 돕는 키보드 중심 경험.",
          2: "컨텍스트 안내와 함께 제공되는 딥 링크 섹션.",
        },
      },
      localization: {
        title: "이중 언어 하모니",
        body:
          "영어와 한국어가 완벽하게 조화를 이룹니다. 용어집을 인지하고, IME 검색을 배려하며, 자신 있는 폴백을 제공합니다.",
        points: {
          0: "세션과 기기 전반에 저장되는 언어 상태.",
          1: "사전 의사 현지화로 간격 문제를 조기에 발견.",
          2: "채택률, 번역 대기열, 성과를 보여주는 분석.",
        },
      },
    },
    journey: {
      heading: "영감에서 런칭까지",
      description:
        "집중, 몰입, 피드백을 중심에 둔 네 단계 리듬으로 아이디어에서 완성까지 함께합니다.",
      discover: {
        eyebrow: "01. 발견",
        title: "우주를 탐색",
        body: "언어에 맞춘 예측 검색과 분위기 있는 내비게이션으로 필요한 문서를 바로 찾습니다.",
      },
      compose: {
        eyebrow: "02. 작성",
        title: "확신을 갖고 집필",
        body: "마크다운과 WYSIWYG, 용어집 힌트가 하나로 어우러져 정확하고 포용적인 편집을 돕습니다.",
      },
      preview: {
        eyebrow: "03. 미리보기",
        title: "공개를 리허설",
        body: "차이 비교, 번역 상태, 기기별 스테이징으로 완벽한 출시를 준비합니다.",
      },
      shine: {
        eyebrow: "04. 런칭",
        title: "감탄을 선사",
        body: "즉시 렌더링되고 아름답게 읽히며 팀별 인사이트를 남기는 페이지를 배포합니다.",
      },
    },
    spotlights: {
      heading: "몰입형 스포트라이트",
      description:
        "HtmlSlim이 각 이해관계자를 어떻게 즐겁게 하는지 세 가지 공간에서 확인하세요.",
      canvas: {
        eyebrow: "크리에이티브 캔버스",
        title: "오로라 레이아웃 연구소",
        body:
          "네온 그라데이션과 중립적인 기본값을 조합해 가독성을 해치지 않고 자유롭게 아이디어를 전개합니다.",
        highlights: {
          0: "배경, 포인트, 타이포그래피를 즉시 조정하는 구성 가능한 별자리.",
          1: "코드, 미디어, 번역 안내를 담는 입체적인 글래스 패널.",
          2: "명암 대비를 자동으로 맞추는 다크/라이트 대응 팔레트.",
        },
      },
      flow: {
        eyebrow: "플로우 상태",
        title: "속도 제어실",
        body:
          "실시간 웹 바이탈, 세션 히트맵, 성공 토스트 알림으로 Codex의 리듬을 유지합니다.",
        highlights: {
          0: "목표를 달성하면 점등되는 성능 예산 파형.",
          1: "검색, 언어 전환, 미리보기 단축키로 흐름 유지.",
          2: "화면 읽기 지원을 위한 실시간 라이브 리전 안내.",
        },
      },
      ops: {
        eyebrow: "운영의 정원",
        title: "거버넌스 아트리움",
        body:
          "관리자와 현지화 리더가 출시를 조율하고 번역 대기열을 모니터링하며 감사 작업을 간편하게 수행합니다.",
        highlights: {
          0: "언어 상태와 용어집 준수를 요약하는 역할 기반 대시보드.",
          1: "번역 승인과 알림을 가속하는 일괄 워크플로.",
          2: "서명된 자산 링크와 CSRF 대응 수정 등 안전한 기본값.",
        },
      },
    },
    testimonials: {
      heading: "팀이 전하는 느낌",
      description: "이중 언어로 전하는 속도와 장인의식.",
      hana: {
        name: "김하나",
        role: "현지화 리드, 서울",
        quote:
          "사전 의사 현지화 스테이징 덕분에 간격 이슈를 며칠이나 빨리 찾았고, 용어집 가이드라인은 번역가 모두가 사랑합니다.",
      },
      marco: {
        name: "Marco Diaz",
        role: "수석 엔지니어, 오스틴",
        quote:
          "성능 예산은 이제 목표가 아니라 기본값입니다. HtmlSlim 텔레메트리가 1초 미만 TTI를 새로운 기준으로 만들었습니다.",
      },
    },
    closing: {
      title: "다음 장을 함께 써 내려갈 준비가 되셨나요?",
      subtitle:
        "이 콘셉트 사이트는 Codex의 VanillaJS 르네상스를 위한 신호탄입니다. 로드맵, 프로토타입, 파트너십에 영감을 주세요.",
      button: "비전 브리프 다운로드",
      footerNote: "Codex 마이그레이션을 위해 상상력으로 빚어낸 작품.",
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
