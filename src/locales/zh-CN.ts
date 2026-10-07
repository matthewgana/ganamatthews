import { en } from "./en";

export const zhCN: typeof en = {
  common: {
    dir: "ltr" as const,
    language: "语言",
    selectLanguage: "选择语言",
    close: "关闭",
    open: "打开",
    theme: "主题",
    dark: "深色",
    light: "浅色",
    skipToMain: "跳转到主要内容"
  },
  nav: {
    home: "首页",
    work: "精选项目",
    engineering: "工程架构",
    aiml: "AI / 机器学习",
    credentials: "专业证书",
    evidence: "技术实证",
    about: "关于我",
    writing: "技术专栏",
    contact: "联系我",
    viewProjects: "查看精选作品",
    contactMe: "与我联系",
    resume: "个人简历",
    downloadCv: "下载简历",
    github: "GitHub",
    linkedin: "领英",
    openMenu: "打开导航菜单",
    closeMenu: "关闭导航菜单",
    closeMenuShort: "关闭菜单"
  },
  hero: {
    badge: "构建数字化解决方案，创造更美好的明天",
    eyebrow: "全栈软件工程师",
    titlePrefix: "构建安全、高扩展且智能的",
    titleHighlight: "软件系统基石。",
    titleFullStack: "全栈",
    titleSoftware: "软件",
    titleEngineer: "工程师",
    subtitle: "深耕后端的全栈软件工程师，专注于高复杂度SaaS业务系统、企业级API架构、数据密集型应用、跨平台Web/移动端开发及AI/机器学习落地集成。",
    specialties: "后端开发 • SaaS架构 • 系统设计 • 人工智能 • 安全防护",
    specialtiesList: ["后端开发", "SaaS架构", "系统设计", "人工智能", "安全防护"],
    handwritten: "卓越架构，深远影响",
    ctaPrimary: "浏览代表项目",
    ctaSecondary: "即刻联系",
    verifiedSystems: "11项工程系统通过实机代码审计与验证",
    scrollToExplore: "向下滚动探索",
    exploreTechStack: "探索技术栈与架构设计",
    scrollDown: "滚动至项目列表"
  },
  credibility: {
    badge: "实机验证工程实绩",
    title: "生产级系统，经得起检验的技术实证",
    subtitle: "11套完整的软件系统，具备严格的领域边界、企业级数据持久化与可审计的真实代码库。",
    systemsCount: "11",
    systemsLabel: "经审计系统",
    systemsDetail: "拥有完整且可追溯真实代码仓库的端到端应用软件",
    industriesCount: "8+",
    industriesLabel: "行业垂直领域",
    industriesDetail: "涵盖农业科技、金融科技、医疗健康、酒店文旅、教育科技及政务系统等",
    evidenceCount: "100%",
    evidenceLabel: "代码级工程实证",
    evidenceDetail: "领域驱动模型、Schema物理隔离与久经实战考验的设计模式",
    stackCount: "生产级",
    stackLabel: "核心技术底座",
    stackDetail: "TypeScript · NestJS · PostgreSQL · Next.js · Redis · Python",
    exploreFlagships: "查验旗舰代表作品",
    scrollHint: "向下滚动深入探索系统"
  },
  tech: {
    badge: "技术全景",
    title: "核心技术栈与工程工具",
    subtitle: "依托现代且经过实战检验的成熟技术体系，构建高并发、高可用且易于维护的企业级应用。",
    codeComment: "// 构建・交付・持续演进",
    viewAll: "探索交互式拓扑图谱",
    terminalView: "源码架构视图",
    statusReady: "系统架构拓扑在线",
    statusDesc: "悬停或点击任意架构节点，即可实时审查其所属领域、依赖拓扑与具体职责。",
    topologyBadge: "系统拓扑网络",
    topologyTitle: "系统架构依赖网格",
    topologyDesc: "选中或聚焦任意架构节点，深入审查运行时规格、系统采用率及核心工程职责。",
    telemetryActive: "实时遥测：节点审查运行中",
    telemetryReady: "拓扑遥测系统就绪",
    missionControlTitle: "控制中心准备就绪",
    missionControlDesc: "在左右两侧列中悬停或选中任意节点，即可查验运行时指标、项目渗透率及架构角色。",
    portfolioUsage: "系统采用率",
    runtimeEngine: "运行引擎",
    engineeringCore: "核心工程技术",
    categories: {
      backend: "后端开发",
      frontend: "前端工程",
      database: "数据库架构",
      ai: "AI / 机器学习",
      infra: "DevOps & 运维",
      security: "安全防御"
    }
  },
  capabilities: {
    badge: "核心能力",
    title: "提供工程解决方案，而非仅交付代码",
    subtitle: "将高度复杂的业务挑战转化为健壮、高可观测且易于长期维护的优质软件系统。",
    liveStatus: "运行中",
    architecturePipeline: "架构流水线",
    stages: "阶段",
    viewProductionEvidence: "查看生产实证",
    backToOverview: "返回概览",
    verifiedProductionEvidence: "已验证生产实证",
    productionProven: "生产环境验证",
    productionProvenDesc: "采用模块化、易测试模式设计构建",
    clickToFlip: "点击查看已验证技术实证",
    clickToFlipBack: "查看概览与工作流",
    items: {
      backend: {
        title: "后端工程架构",
        desc: "设计模块化API接口、业务领域逻辑、企业级认证授权、细粒度数据校验管道与第三方系统无缝对接。"
      },
      frontend: {
        title: "前端工程与交互体验",
        desc: "运用React、Next.js与现代CSS打造像素级精准、高无障碍性与极致性能的Web界面，涵盖设计系统与数据看板。"
      },
      database: {
        title: "数据库与数据工程",
        desc: "构建关系型数据库范式、领域驱动模型、高并发索引调优、复式记账财务账本及非结构化持久化。"
      },
      saas: {
        title: "多租户SaaS架构",
        desc: "搭建具备租户数据绝对隔离、基于属性的权限控制（ABAC）、分布式异步任务队列及全链路审计追踪的系统。"
      },
      security: {
        title: "安全第一的工程实践",
        desc: "实施强认证机制、加密密码散列、接口幂等性保障、安全响应头配置、动态限流与全方位防御体系。"
      },
      aiml: {
        title: "AI 与机器学习落地集成",
        desc: "将预测模型、贝叶斯知识追踪算法（BKT）以及对话式大语言模型（LLM）有机嵌入实际生产工作流中。"
      },
      fullstack: {
        title: "全栈产品工程闭环",
        desc: "将高健壮性的后端架构与极具响应力、流畅美观的Web及移动端用户界面无缝融合。"
      }
    }
  },
  projects: {
    badge: "精选旗舰项目",
    title: "核心代表产品",
    subtitle: "四项体现我最高工程水准、业务深度理解与宏观系统设计能力的标志性代表作品。",
    viewAll: "查看全部项目",
    otherBadge: "更多项目",
    otherTitle: "其他系统与原型",
    otherSubtitle: "跨越多元产业垂直领域的可用软件系统及领域实战原型。",
    viewDetails: "查验技术细节",
    technologiesUsed: "采用技术",
    verifiedCapabilities: "已验证工程能力",
    architectureSummary: "架构设计概要",
    keyEvidence: "关键技术实证",
    statusLabel: "成熟度阶段",
    verifiedBadge: "已审计且验证",
    caveatLabel: "技术审计说明",
    modalClose: "关闭详情",
    operationalProblem: "业务核心痛点",
    engineeringSolution: "技术解决方案",
    auditSource: "审计来源：本地开发空间真实可追溯代码",
    inspectGithub: "在GitHub上查阅代码",
    scrollLeft: "向左滚动项目",
    scrollRight: "向右滚动项目",
    viewAuditFor: "查看项目技术审计：",
    maturities: {
      mvp: "功能性MVP",
      working: "可运行原型",
      early: "初期原型"
    }
  },
  evidence: {
    badge: "工程实证指标",
    title: "已构建・经审计・可查验",
    subtitle: "所有项目均为真实可信的软件系统，在代码仓库中均拥有经得起推敲的代码实现、架构图与部署记录。",
    cta: "查阅技术细节",
    disclaimer: "以上展示均为处于不同研发成熟度阶段的真实软件系统设计与实现，非大规模商业生产环境部署之声明。",
    technicalEvidenceLabel: "技术实证",
    metrics: {
      products: {
        label: "独立产品",
        detail: "在多个核心行业垂直领域完成设计、建模与完整落地的独立软件系统。"
      },
      industries: {
        label: "覆盖领域",
        detail: "涵盖农业科技、金融科技、医疗健康、酒旅管理、智慧教育、政务科技、餐饮零售与不动产科技。"
      },
      nestjs: {
        label: "NestJS",
        detail: "具备IoC控制反转和严密领域模块边界的企业级TypeScript后端主流框架。"
      },
      postgresql: {
        label: "PostgreSQL",
        detail: "关系型数据持久化、ACID强事务保障及Schema级物理租户数据隔离。"
      },
      nextjs: {
        label: "Next.js / React",
        detail: "融合服务端流式渲染与客户端混合水合的高性能企业管理看板体系。"
      },
      reactnative: {
        label: "React Native",
        detail: "支持离线任务堆叠队列及断网双向同步机制的高性能跨平台移动应用。"
      },
      redis: {
        label: "Redis",
        detail: "高吞吐量分布式缓存集群、API自适应限流与BullMQ异步延迟作业调度。"
      },
      fastapi: {
        label: "FastAPI (AI)",
        detail: "专用于预测统计模型、BKT算法运算及大模型工作流编排的高性能Python微服务。"
      }
    }
  },
  approach: {
    badge: "工程方法论",
    title: "工程实践与系统架构演进方法",
    subtitle: "从业务本质问题剖析到高韧性系统持续迭代与测试验证的全链路体系化流程。",
    pipelineLabel: "工程方法论流水线",
    phaseSpecification: "阶段 {step} / 11 • 架构工程规范",
    activitiesHeading: "关键工程活动与实现机制",
    deliverableHeading: "具体架构设计交付物",
    guaranteeHeading: "系统级稳定性与健壮性保障"
  },
  about: {
    badge: "关于我",
    title: "全栈软件工程师",
    p1: "我致力于运用现代前沿技术构建安全、可扩展且具前瞻性的智能软件系统。我专注于攻克复杂工程难题，设计高内聚低耦合的清晰架构，将前沿业务构想转化为功能完备、高可维护的数字化产品。",
    p2: "在工程哲学上，我始终秉持严谨的领域驱动建模、苛刻的数据完整性校验与主动防御的安全理念。我所打造的系统均具有清晰的职责边界、全方位的日志追踪与经得起检验的自动化测试覆盖率。",
    remoteFriendly: "远程协作",
    remoteDesc: "具备丰富的国际化远程协作经验",
    basedIn: "常驻地区",
    basedDesc: "尼日利亚 (灵活时区 / UTC+1)",
    mobilityTitle: "国际流动性",
    mobilityDesc: "持有有效国际护照 · 开放接受全球跨国远程工作机遇与技术合作。",
    stemTitle: "软件之外的世界",
    stemDesc: "我兼任数学、物理、化学与计算机编程教学，倾力创作高质量技术教育内容，将深奥抽象的理工科学科知识解构为直观清晰的学习路径。",
    learnMore: "进一步了解",
    youtubeChannel: "YouTube 频道: Learn With Matthew Gana",
    instagramProfile: "Instagram: Learn With Matthew Gana"
  },
  writing: {
    badge: "技术写作与沟通",
    title: "架构手记与工程洞见",
    subtitle: "关于领域驱动设计（DDD）、API安全防御体系与现代系统工程的深度思考。",
    upcomingNote: "即将发布",
    articles: [
      {
        category: "架构设计 & DDD",
        title: "模块化单体架构中的领域驱动边界切分实践",
        excerpt: "为何在业务高并发早期阶段，Schema层面的物理隔离与严密的依赖倒置原则远优于盲目的微服务拆分。"
      },
      {
        category: "金融安全 & 系统设计",
        title: "复式记账法不变量守恒与支付结算接口的幂等性设计",
        excerpt: "构建防篡改的记账引擎：事务级实时平衡断言、分布式幂等键缓存池与断网冲突自动解决机制。"
      },
      {
        category: "人工智能 & 算法学习",
        title: "解析教育科技系统中的贝叶斯知识追踪算法（BKT）",
        excerpt: "在TypeScript生产环境中使用概率隐状态马尔可夫转移模型精准量化评估学生知识点掌握度的实战指南。"
      }
    ]
  },
  contact: {
    badge: "保持联络",
    title: "携手打造具有深远影响力的优秀系统",
    subtitle: "我乐于探讨全球远程软件工程师岗位、具有技术挑战的项目攻关以及数字化产品合伙研发。欢迎随时与我直接联络。",
    nameLabel: "您的姓名",
    namePlaceholder: "例如：Ada Lovelace",
    emailLabel: "电子邮箱",
    emailPlaceholder: "ada@domain.com",
    subjectLabel: "沟通主题 / 意向",
    messageLabel: "详细留言",
    messagePlaceholder: "请简要描述您的工程需求、技术合作意向或工作机会...",
    sendButton: "发送邮件",
    directEmail: "直接邮箱",
    location: "工作地点",
    locationValue: "尼日利亚 (支持跨时区全球远程)",
    connectFollow: "关注与联络",
    successTitle: "留言已成功送达！",
    successDesc: "感谢您的联系，{name}！您的问询已直接发送至我的收件箱。我将认真查阅并尽快回复至 {email}。",
    sendAnother: "发送另一条留言",
    sending: "正在发送留言...",
    formNotice: "留言将直接送达至 matthewgana95@gmail.com，并在页面上实时确认。",
    errorFallback: "改为直接发送邮件",
    errorNetwork: "网络连接异常。您也可以直接通过电子邮件与我取得联系。",
    errorGeneric: "当前无法送达留言，请稍后重试。",
    youtubeAriaLabel: "YouTube: @LearnWithMatthewGana",
    instagramAriaLabel: "Instagram: @learnwithmatthewgana",
    facebookAriaLabel: "Facebook: Matthew Gana",
    subjectOptions: {
      role: "全职工作机会 / 招聘咨询",
      project: "定制软件研发 / 技术顾问合同",
      collaboration: "技术产品深度合作",
      other: "常规技术咨询"
    },
    mailtoNotice: "点击发送后，系统将自动唤起您本地默认的邮件客户端并将收件人定向至 Matthew Gana。"
  },
  aiml: {
    badge: "AI 与机器学习工程",
    title: "实战型 AI / 机器学习工程",
    subtitle: "涵盖预测性机器学习建模、计算机视觉、自然语言处理、地理空间AI、异常行为检测及智能辅助决策的完整应用级AI系统。",
    nav: "AI / 机器学习",
    disciplinesLabel: "核心专业领域",
    projectsLabel: "落地实战项目",
    statusLabel: "项目阶段",
    domainLabel: "所属业务领域",
    capabilitiesLabel: "技术能力矩阵",
    evidenceLabel: "核心工程证明",
    workflowBadge: "AI 工程研发流水线",
    workflowTitle: "实战 AI 工程化全生命周期流程",
    workflowSubtitle: "跨越AI/ML全项目的通用工程实施路径。具体项目阶段视实际开发范围有所侧重。",
    workflowDisclaimer: "此流程为系统化的宏观工程方法体系，并不代表所有列出项目均已遍历完各生命周期阶段。",
    capstoneBadge: "AI / 机器学习毕业设计",
    capstoneLabel: "毕业设计",
    capstoneNote: "AI 与机器学习进阶课程综合 Capstone 实战毕业设计 — 近期高质量完成。",
    disciplines: {
      predictive: "预测性机器学习",
      vision: "计算机视觉",
      nlp: "自然语言处理 (NLP)",
      geospatial: "地理空间 AI",
      anomaly: "异常行为智能检测",
      decision: "智能决策支持"
    },
    phases: {
      input: "数据输入",
      preparation: "清洗与工程化",
      modelling: "算法建模",
      deployment: "服务化部署",
      iteration: "监控与持续优化"
    }
  },
  credentials: {
    badge: "专业认证",
    title: "专业资质与认证",
    subtitle: "经过行业认可的正规系统性培训，为扎实的工程实践提供背书。",
    nav: "证书资质",
    categoryLabel: "专业分类",
    viewCertificate: "查看证书原件",
    noImageNote: "证书已在系统归档存查",
    inspectCredential: "审计证书记录",
    statusOngoing: "进行中",
    statusSprint: "20天冲刺",
    statusAccredited: "已获认证",
    statusVerified: "已验证",
    capstoneInProgress: "毕业设计项目攻关中",
    cohort: "2026年届期",
    timeUnitDays: "天",
    timeUnitHrs: "小时",
    timeUnitMin: "分钟",
    timeUnitSec: "秒",
    curriculumDefense: "课程结业答辩",
    percentComplete: "已完成 88%",
    inspectFullCertificate: "查验完整高分辨率证书",
    verifiedRecord: "官方认证验证档案",
    viewCapstoneRoadmap: "查看毕业设计规划路线图",
    aimlSpecializationTitle: "AI 与机器学习专业进阶课程",
    aimlSpecializationDesc: "全面涵盖深度学习、Transformer架构与检索增强生成（RAG）的高阶课程体系。",
    liveCountdownTitle: "毕业设计项目答辩倒计时",
    assessedCompetencies: "评估核心能力与实证审计范围",
    officialRegistryHash: "官方档案验证哈希：",
    issuanceYear: "证书颁发 / 结业年份：",
    verificationAuthority: "发证与认证机构：",
    institutionalRecord: "官方机构认可认证档案",
    openFullResolution: "在新窗口打开高清证书原件",
    closeAudit: "关闭审计弹窗",
    inProgress20Day: "冲刺进行中 · 目标 20 天",
    accreditedProgram: "官方认可认证项目",
    verifiedIssued: "已验证核发",
    categories: {
      cybersecurity: "网络安全防护",
      backend: "后端架构开发",
      data: "商业数据分析",
      aiml: "人工智能与机器学习"
    }
  },
  footer: {
    brandTitle: "全栈软件工程师",
    tagline: "设计并构建安全、高扩展且智能的现代化软件系统。",
    rights: "版权所有，保留一切权利。",
    backToTop: "返回顶部"
  }
};
