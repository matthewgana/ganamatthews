import { en } from "./en";

export const ja: typeof en = {
  common: {
    dir: "ltr" as const,
    language: "言語",
    selectLanguage: "言語を選択",
    close: "閉じる",
    open: "開く",
    theme: "テーマ",
    dark: "ダーク",
    light: "ライト",
    skipToMain: "メインコンテンツへスキップ"
  },
  nav: {
    home: "ホーム",
    work: "実績・プロジェクト",
    engineering: "エンジニアリング",
    aiml: "AI / 機械学習",
    credentials: "資格・認定",
    evidence: "技術的根拠",
    about: "私について",
    writing: "技術記事",
    contact: "お問い合わせ",
    viewProjects: "選定プロジェクトを見る",
    contactMe: "お問い合わせ",
    resume: "履歴書",
    downloadCv: "履歴書をダウンロード",
    github: "GitHub",
    linkedin: "LinkedIn",
    openMenu: "ナビゲーションメニューを開く",
    closeMenu: "ナビゲーションメニューを閉じる",
    closeMenuShort: "メニューを閉じる"
  },
  hero: {
    badge: "より良き明日のためのデジタルソリューション構築",
    eyebrow: "フルスタック・ソフトウェアエンジニア",
    titlePrefix: "安全でスケーラブル、かつインテリジェントな",
    titleHighlight: "ソフトウェアシステムを構築。",
    titleFullStack: "フルスタック",
    titleSoftware: "ソフトウェア",
    titleEngineer: "エンジニア",
    subtitle: "バックエンドを主軸とするフルスタックエンジニア。高機能SaaS、エンタープライズAPI、データ駆動型基盤、Web/モバイルアプリ、AI/ML統合を設計。",
    specialties: "バックエンド • SaaS • アーキテクチャ • AI/ML • セキュリティ",
    specialtiesList: ["バックエンド", "SaaS", "アーキテクチャ", "AI/ML", "セキュリティ"],
    handwritten: "より良きシステム、より大いなるインパクト",
    ctaPrimary: "プロジェクトを見る",
    ctaSecondary: "お問い合わせ",
    verifiedSystems: "11件のシステムを検証・監査済み",
    scrollToExplore: "スクロールして探索",
    exploreTechStack: "技術スタックとアーキテクチャを探索",
    scrollDown: "プロジェクト一覧へスクロール"
  },
  credibility: {
    badge: "検証された実績",
    title: "本番稼働システムと検証可能な実証",
    subtitle: "厳格なドメイン境界、堅牢な永続化、監査可能なコードベースで構築された11件の完全なソフトウェアシステム。",
    systemsCount: "11",
    systemsLabel: "監査済みシステム",
    systemsDetail: "検証可能なリポジトリを備えたエンドツーエンドのソフトウェア群",
    industriesCount: "8+",
    industriesLabel: "対応産業分野",
    industriesDetail: "アグリテック、フィンテック、医療、宿泊、EdTech、行政など",
    evidenceCount: "100%",
    evidenceLabel: "コードベース実証",
    evidenceDetail: "ドメインモデル、スキーマ分離、実績ある設計パターン",
    stackCount: "本番環境",
    stackLabel: "中核技術基盤",
    stackDetail: "TypeScript · NestJS · PostgreSQL · Next.js · Redis · Python",
    exploreFlagships: "フラッグシップ・プロダクトを見る",
    scrollHint: "スクロールしてシステムを探索"
  },
  tech: {
    badge: "技術スタック",
    title: "活用している技術とツール",
    subtitle: "スケーラブルで保守性が高く、セキュアなアプリケーションを構築するために実績ある最新スタックを採用しています。",
    codeComment: "// 設計・実装・改善の継続。",
    viewAll: "インタラクティブ・トポロジーを探索",
    terminalView: "コードアーキテクチャ表示",
    statusReady: "システムトポロジー オンライン",
    statusDesc: "任意のノードにホバーまたは選択すると、アーキテクチャ領域、依存接続、実装上の役割を確認できます。",
    topologyBadge: "システムトポロジーネットワーク",
    topologyTitle: "アーキテクチャ依存関係メッシュ",
    topologyDesc: "ノードを選択してランタイム仕様、ポートフォリオ採用率、エンジニアリング責任範囲を詳細調査できます。",
    telemetryActive: "テレメトリ：ノード検証アクティブ",
    telemetryReady: "トポロジーテレメトリ準備完了",
    missionControlTitle: "ミッションコントロール準備完了",
    missionControlDesc: "左右のカラムにある任意のノードを選択またはホバーして、仕様や採用率、役割を確認してください。",
    portfolioUsage: "ポートフォリオ採用率",
    runtimeEngine: "実行エンジン",
    engineeringCore: "エンジニアリング・コア",
    categories: {
      backend: "バックエンド",
      frontend: "フロントエンド",
      database: "データベース",
      ai: "AI / 機械学習",
      infra: "DevOps・インフラ",
      security: "セキュリティ"
    }
  },
  capabilities: {
    badge: "提供する強み",
    title: "単なるコードにとどまらない工学的ソリューション",
    subtitle: "複雑な業務課題を、耐障害性が高く観測可能で持続的なソフトウェアシステムへと昇華させます。",
    liveStatus: "稼働中",
    architecturePipeline: "アーキテクチャ・パイプライン",
    stages: "ステージ",
    viewProductionEvidence: "本番エビデンスを確認",
    backToOverview: "概要へ戻る",
    verifiedProductionEvidence: "検証済み本番エビデンス",
    productionProven: "本番稼働実績",
    productionProvenDesc: "モジュール化されたテスト容易なパターンで設計",
    clickToFlip: "クリックして検証済みエビデンスを確認",
    clickToFlipBack: "概要とワークフローを確認",
    items: {
      backend: {
        title: "バックエンドエンジニアリング",
        desc: "モジュール型API、ドメインロジック、認証、詳細認可、検証パイプライン、外部連携の堅牢な設計。"
      },
      frontend: {
        title: "フロントエンドエンジニアリング",
        desc: "React、Next.js、モダンCSSを駆使し、デザインシステムから高機能ダッシュボードまで、高精度でアクセシブルなUIを構築。"
      },
      database: {
        title: "データベースエンジニアリング",
        desc: "リレーショナルスキーマ、ドメインモデル、インデックス戦略、複式簿記台帳、ドキュメント永続化の設計。"
      },
      saas: {
        title: "SaaSアーキテクチャ",
        desc: "テナント分離、属性ベースアクセス制御（ABAC）、非同期キュー、エンタープライズ監査ログを備えたマルチテナント構築。"
      },
      security: {
        title: "セキュリティ志向のエンジニアリング",
        desc: "暗号化パスワードハッシュ、冪等性キー、セキュアヘッダー、レート制限、防御的統制の徹底実装。"
      },
      aiml: {
        title: "AI / 機械学習インテグレーション",
        desc: "予測機械学習モデル、ベイジアン知識追跡（BKT）アルゴリズム、対話型LLMを実際の業務フローへ統合。"
      },
      fullstack: {
        title: "フルスタック・プロダクト開発",
        desc: "堅牢なバックエンドアーキテクチャと洗練されたWeb/モバイルUIを連携させ、一貫したユーザー体験を提供。"
      }
    }
  },
  projects: {
    badge: "主要プロジェクト",
    title: "フラッグシップ・プロダクト",
    subtitle: "確かな工学力、ドメイン理解の深さ、システム設計能力を体現する4つの主要プロダクト。",
    viewAll: "すべてのプロジェクトを見る",
    otherBadge: "その他のプロジェクト",
    otherTitle: "その他のシステムとプロトタイプ",
    otherSubtitle: "多岐にわたる産業分野で稼働するシステムおよびドメインプロトタイプ。",
    viewDetails: "技術詳細を見る",
    technologiesUsed: "使用技術",
    verifiedCapabilities: "検証済みケイパビリティ",
    architectureSummary: "アーキテクチャ概要",
    keyEvidence: "エンジニアリングの実証",
    statusLabel: "完成度",
    verifiedBadge: "監査・検証済み",
    caveatLabel: "技術監査に関する注記",
    modalClose: "詳細を閉じる",
    operationalProblem: "業務上の課題",
    engineeringSolution: "工学的ソリューション",
    auditSource: "監査ソース：ワークスペース検証済みエビデンス",
    inspectGithub: "GitHubでコードを確認",
    scrollLeft: "プロジェクトを左へスクロール",
    scrollRight: "プロジェクトを右へスクロール",
    viewAuditFor: "技術監査を見る：",
    maturities: {
      mvp: "機能検証MVP",
      working: "稼働プロトタイプ",
      early: "初期プロトタイプ"
    }
  },
  evidence: {
    badge: "エンジニアリングの証左",
    title: "実装済み・監査済み・検証可能。",
    subtitle: "これらのプロジェクトは、各リポジトリに実在するコード、アーキテクチャ、実装証拠を備えた本物のソフトウェアです。",
    cta: "技術詳細を確認",
    disclaimer: "これらは異なる完成度段階で設計・実装された実際のシステムであり、大規模商用環境での本番稼働を主張するものではありません。",
    technicalEvidenceLabel: "技術エビデンス",
    metrics: {
      products: {
        label: "プロダクト数",
        detail: "多様な業界ドメインで設計、モデル化、実装された独自のソフトウェアシステム群。"
      },
      industries: {
        label: "対象業界",
        detail: "農業テクノロジー、フィンテック、医療、宿泊業、教育、行政、飲食、不動産テクノロジー。"
      },
      nestjs: {
        label: "NestJS",
        detail: "IoCコンテナとドメイン境界分離を備えたエンタープライズTypeScriptフレームワーク。"
      },
      postgresql: {
        label: "PostgreSQL",
        detail: "リレーショナル永続化、ACIDトランザクション、スキーマレベルのドメイン分離。"
      },
      nextjs: {
        label: "Next.js / React",
        detail: "応答性の高いダッシュボードを実現するモダンなサーバー/クライアントレンダリング。"
      },
      reactnative: {
        label: "React Native",
        detail: "オフラインキューとバックグラウンド同期を備えたクロスプラットフォームモバイルアプリ。"
      },
      redis: {
        label: "Redis",
        detail: "高速分散キャッシング、レートリミット、非同期バックグラウンドキュー（BullMQ）。"
      },
      fastapi: {
        label: "FastAPI（AI）",
        detail: "予測モデル、BKT、LLMオーケストレーション専用のPythonマイクロサービス。"
      }
    }
  },
  approach: {
    badge: "方法論",
    title: "エンジニアリングアプローチと設計手法",
    subtitle: "課題の発見からシステムのテスト、反復改善に至る体系的なワークフロー。",
    pipelineLabel: "エンジニアリング手法パイプライン",
    phaseSpecification: "フェーズ {step} / 11 • アーキテクチャ仕様策定",
    activitiesHeading: "コア・エンジニアリング活動とメカニズム",
    deliverableHeading: "具体的なアーキテクチャ成果物",
    guaranteeHeading: "システム安定性の保証"
  },
  about: {
    badge: "私について",
    title: "フルスタック・ソフトウェアエンジニア",
    p1: "現代的なテクノロジーを活用し、安全でスケーラブル、かつインテリジェントなシステムを構築します。複雑な課題の解決、クリーンなアーキテクチャの設計、業務アイデアを実用的で保守性の高いプロダクトへ具現化することに注力しています。",
    p2: "厳格なドメインモデリング、データの完全性、防御的セキュリティを最優先としています。明確な境界、徹底したログ記録、検証可能なテストカバレッジを備えたシステムを構築します。",
    remoteFriendly: "リモート対応",
    remoteDesc: "国際的な案件・協業に柔軟に対応",
    basedIn: "拠点",
    basedDesc: "ナイジェリア（柔軟なタイムゾーン / UTC+1）",
    mobilityTitle: "国際モビリティ",
    mobilityDesc: "海外パスポート所持 · リモートでの国際的な案件・協業に柔軟に対応。",
    stemTitle: "ソフトウェアの枠を超えて",
    stemDesc: "数学、物理、化学、プログラミングの指導も行い、複雑なSTEM概念を明快で直感的な枠組みへと翻訳する技術教育コンテンツを制作しています。",
    learnMore: "詳しく見る",
    youtubeChannel: "YouTubeチャンネル: Learn With Matthew Gana",
    instagramProfile: "Instagram: Learn With Matthew Gana"
  },
  writing: {
    badge: "技術コミュニケーション",
    title: "執筆記事・アーキテクチャ考察",
    subtitle: "ドメインモデリング、APIセキュリティ、システム工学に関する洞察。",
    upcomingNote: "執筆中のノート",
    articles: [
      {
        category: "アーキテクチャ & DDD",
        title: "モジュラーモノリスにおけるドメイン駆動の境界分割設計",
        excerpt: "高い並行性を要するビジネス基盤において、早すぎるマイクロサービス分割よりもスキーマ分離と依存関係逆転が優れる理由。"
      },
      {
        category: "セキュリティ & フィンテック",
        title: "複式簿記の不変条件保護と決済の冪等性担保",
        excerpt: "残高整合性のトランザクション検証、冪等性キーキャッシュ、オフライン競合解消を備えた改ざん耐性会計エンジンの設計。"
      },
      {
        category: "AI & アルゴリズム学習",
        title: "EdTechシステムにおけるベイジアン知識追跡（BKT）の解明",
        excerpt: "TypeScriptの本番環境で確率的潜在状態遷移を用いて学習者のスキル獲得を時系列でモデル化する実践的ガイド。"
      }
    ]
  },
  contact: {
    badge: "お問い合わせ",
    title: "素晴らしいシステムを共に築きましょう",
    subtitle: "リモートでのエンジニアリング職、技術的課題、プロダクト開発の協業に前向きです。お気軽にご連絡ください。",
    nameLabel: "お名前",
    namePlaceholder: "Ada Lovelace",
    emailLabel: "メールアドレス",
    emailPlaceholder: "ada@domain.com",
    subjectLabel: "件名 / トピック",
    messageLabel: "メッセージ",
    messagePlaceholder: "技術要件や案件の概要についてご記入ください...",
    sendButton: "メッセージを送信",
    directEmail: "直接メール",
    location: "所在地",
    locationValue: "ナイジェリア（リモート / グローバル対応）",
    connectFollow: "フォロー・つながり",
    successTitle: "メッセージを送信しました！",
    successDesc: "{name}様、お問い合わせありがとうございます。メッセージは直接受信箱に送信されました。確認の上、{email}宛てに折り返しご連絡いたします。",
    sendAnother: "別のメッセージを送信",
    sending: "メッセージ送信中...",
    formNotice: "メッセージは matthewgana95@gmail.com に直接届き、ページ上で即時確認できます。",
    errorFallback: "直接メールでお問い合わせ",
    errorNetwork: "ネットワーク接続エラーが発生しました。メールで直接ご連絡いただくことも可能です。",
    errorGeneric: "現在メッセージを送信できません。もう一度お試しください。",
    youtubeAriaLabel: "YouTube: @LearnWithMatthewGana",
    instagramAriaLabel: "Instagram: @learnwithmatthewgana",
    facebookAriaLabel: "Facebook: Matthew Gana",
    subjectOptions: {
      role: "採用・エンジニア採用の相談",
      project: "ソフトウェア開発案件・契約",
      collaboration: "技術連携・共同開発",
      other: "一般的なお問い合わせ"
    },
    mailtoNotice: "送信をクリックすると、Matthew Gana宛てのメーラーが直接開きます。"
  },
  aiml: {
    badge: "AI / 機械学習エンジニアリング",
    title: "応用AI / 機械学習エンジニアリング",
    subtitle: "予測モデリング、コンピュータビジョン、自然言語処理、地理空間AI、異常検知、意思決定支援にまたがる応用AIシステム。",
    nav: "AI / 機械学習",
    disciplinesLabel: "中核領域",
    projectsLabel: "応用プロジェクト",
    statusLabel: "ステータス",
    domainLabel: "ドメイン",
    capabilitiesLabel: "ケイパビリティ",
    evidenceLabel: "エンジニアリング証拠",
    workflowBadge: "エンジニアリングパイプライン",
    workflowTitle: "応用AIエンジニアリングのワークフロー",
    workflowSubtitle: "AI/MLプロジェクト全体に適用される汎用エンジニアリング手法。個別プロジェクトの段階は実際の実装範囲に応じて異なります。",
    workflowDisclaimer: "これは一般的なエンジニアリング手法を示したものであり、全プロジェクトですべての工程が完了していることを主張するものではありません。",
    capstoneBadge: "AI / ML キャプストーン",
    capstoneLabel: "キャップストーン",
    capstoneNote: "AI・機械学習コースの修了課題プロジェクト — 最近完成。",
    disciplines: {
      predictive: "予測機械学習",
      vision: "コンピュータビジョン",
      nlp: "自然言語処理 (NLP)",
      geospatial: "地理空間AI",
      anomaly: "異常検知",
      decision: "意思決定支援"
    },
    phases: {
      input: "入力",
      preparation: "前処理",
      modelling: "モデリング",
      deployment: "デプロイ",
      iteration: "改善サイクル"
    }
  },
  credentials: {
    badge: "資格・認定",
    title: "資格・認定実績",
    subtitle: "エンジニアリング業務を裏付ける体系的な教育・修了証。",
    nav: "認定実績",
    categoryLabel: "カテゴリー",
    viewCertificate: "認定証を見る",
    noImageNote: "証明書保管済み",
    inspectCredential: "認定証を監査する",
    statusOngoing: "受講中",
    statusSprint: "20日スプリント",
    statusAccredited: "認定済み",
    statusVerified: "検証済み",
    capstoneInProgress: "修了課題プロジェクト進行中",
    cohort: "2026年コホート",
    timeUnitDays: "日",
    timeUnitHrs: "時間",
    timeUnitMin: "分",
    timeUnitSec: "秒",
    curriculumDefense: "カリキュラム発表",
    percentComplete: "88% 完了",
    inspectFullCertificate: "認定証原本を検証",
    verifiedRecord: "公式検証レコード",
    viewCapstoneRoadmap: "修了課題ロードマップを表示",
    aimlSpecializationTitle: "AI・機械学習専門課程",
    aimlSpecializationDesc: "ディープラーニング、Transformerアーキテクチャ、RAG（検索拡張生成）を網羅する先端カリキュラム。",
    liveCountdownTitle: "修了課題発表カウントダウン",
    assessedCompetencies: "評価対象コンピテンシーおよび検証スコープ",
    officialRegistryHash: "公式レジストリハッシュ:",
    issuanceYear: "発行 / 修了年:",
    verificationAuthority: "検証機関:",
    institutionalRecord: "機関認定レコード",
    openFullResolution: "高解像度認定証を開く",
    closeAudit: "監査画面を閉じる",
    inProgress20Day: "進行中 · 20日間目標",
    accreditedProgram: "認定プログラム",
    verifiedIssued: "検証および発行済み",
    categories: {
      cybersecurity: "サイバーセキュリティ",
      backend: "バックエンド開発",
      data: "データアナリティクス",
      aiml: "AI & 機械学習"
    }
  },
  footer: {
    brandTitle: "フルスタック・ソフトウェアエンジニア",
    tagline: "安全でスケーラブル、かつインテリジェントなソフトウェアシステムの構築。",
    rights: "All rights reserved.",
    backToTop: "ページ上部へ"
  }
};
