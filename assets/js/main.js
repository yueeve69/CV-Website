/* ============================================================
   Eve Yang · Portfolio — content model + rendering (bilingual)
   Edit the DATA object below to update the site. No build step.
   ============================================================ */

const DOCS = "assets/docs/";

const DATA = {
  /* ---- Strength chips (hero) ---- */
  chips: {
    zh: ["海外达人营销", "跨境电商运营", "内容运营 & 增长", "用户研究 & Persona", "活动统筹", "AI 工具流", "中英双语"],
    en: ["Overseas Influencer Marketing", "Cross-border E-commerce", "Content & Growth", "User Research & Personas", "Event Management", "AI Workflows", "Bilingual EN/中文"]
  },

  /* ---- Hero stat badge ---- */
  heroBadge: { value: "2.8M+", zh: "达人营销曝光", en: "Campaign impressions" },

  /* ---- About facts ---- */
  facts: [
    { b: "2.8M+", zh: "海外达人营销曝光", en: "Overseas campaign reach" },
    { b: "0→8,000", zh: "小红书两月涨粉", en: "Followers grown in 2 months" },
    { b: "500+", zh: "亚马逊订单", en: "Amazon orders fulfilled" },
    { b: "300+", zh: "大型活动统筹人数", en: "People coordinated at events" }
  ],

  /* ---- Capabilities ---- */
  capabilities: [
    {
      zh: { t: "用户研究 & 洞察", d: "从 PESTLE / SWOT 到深度访谈与 persona，我习惯先把用户和市场看清楚，再谈方案。也能把算法、平台机制转化为可用的洞察。",
            tags: ["受众分析", "Persona", "PESTLE / SWOT", "算法洞察"] },
      en: { t: "User Research & Insight", d: "From PESTLE / SWOT to interviews and personas — I understand the user and market first, then build the strategy. I also turn platform algorithms into usable insight.",
            tags: ["Audience analysis", "Personas", "PESTLE / SWOT", "Algorithmic insight"] }
    },
    {
      zh: { t: "营销策划", d: "把调研结论落成可执行的营销策略：社媒、达人与邮件营销、campaign 设计与商业建议，兼顾品牌调性与转化。",
            tags: ["社媒营销", "达人营销", "Campaign 设计", "商业建议"] },
      en: { t: "Marketing Strategy", d: "Turning research into executable strategy: social, influencer and email marketing, campaign design and commercial recommendations — balancing brand tone with conversion.",
            tags: ["Social marketing", "Influencer marketing", "Campaign design", "Commercial advice"] }
    },
    {
      zh: { t: "运营 & 增长", d: "账号从 0 到 1、电商全链路、社区冷启动。我做过、也拿到过正向结果——涨粉、订单、净利率与社区活跃。",
            tags: ["内容运营", "电商运营", "社区冷启动", "数据驱动"] },
      en: { t: "Operations & Growth", d: "Zero-to-one accounts, full-cycle e-commerce, community cold-starts. I've done it and delivered results — followers, orders, margin and active communities.",
            tags: ["Content ops", "E-commerce", "Community launch", "Data-driven"] }
    },
    {
      zh: { t: "活动 & 创意", d: "大型赛事活动的全流程统筹，加上内容创意与交互叙事。既能在现场应对突发，也能把想法做成有温度的作品。",
            tags: ["活动统筹", "内容创意", "交互叙事", "现场执行"] },
      en: { t: "Events & Creative", d: "End-to-end management of large-scale events, plus content creativity and interactive storytelling — calm under pressure on-site, and able to turn ideas into work with warmth.",
            tags: ["Event management", "Content creative", "Interactive story", "Live execution"] }
    }
  ],

  /* ---- Filter categories ---- */
  filters: [
    { key: "all", zh: "全部", en: "All" },
    { key: "research", zh: "用户研究", en: "User Research" },
    { key: "marketing", zh: "营销策划", en: "Marketing" },
    { key: "ops", zh: "运营增长", en: "Operations & Growth" },
    { key: "creative", zh: "活动创意", en: "Events & Creative" }
  ],

  /* ---- Work / project cards ---- */
  work: [
    {
      cats: ["marketing", "ops"], featured: true,
      zh: { kicker: "Vertex Marketing · AI 海外达人运营（实习）", period: "2026.04 – 06",
            title: "VOOPOO 英国市场达人营销",
            desc: "负责 VOOPOO 英国市场 TikTok / Instagram / Reddit 达人营销。用 Perplexity、Claude、Google Trends 做市场与竞品调研，AI 辅助筛选 600+ KOL/KOC，独立与 120+ 创作者建联并推进产品测评、UGC 与短视频合作，再依数据持续优化投放。",
            tags: ["出海营销", "KOL 策略", "数据投放"] },
      en: { kicker: "Vertex Marketing · AI Influencer Ops (Intern)", period: "Apr – Jun 2026",
            title: "VOOPOO UK Influencer Campaign",
            desc: "Led VOOPOO's UK influencer marketing across TikTok, Instagram and Reddit. Ran market and competitor research with Perplexity, Claude and Google Trends, AI-screened 600+ KOLs/KOCs, built relationships with 120+ creators for product testing, UGC and short-video work, then optimised spend on performance data.",
            tags: ["Going global", "KOL strategy", "Paid media"] },
      metrics: [
        { b: "2.8M+", zh: "曝光", en: "Impressions" },
        { b: "7.2%", zh: "平均互动率", en: "Avg. engagement" },
        { b: "600+", zh: "达人筛选", en: "Creators screened" }
      ]
    },
    {
      cats: ["ops"], featured: true,
      zh: { kicker: "Amazon UK · 跨境电商运营", period: "2025.04 – 2026.04",
            title: "宠物舔舐碗 · Amazon FBA 独立操盘",
            desc: "独立运营英国站宠物舔舐碗店铺，全链路负责：用 Helium 10 / Keepa 做选品与定价，优化 Listing（标题 / 关键词 / 主图 / A+ 页面）与 PPC 广告，并管理库存与物流。以数据持续优化广告投产与转化。",
            tags: ["跨境电商", "选品定价", "PPC 广告"] },
      en: { kicker: "Amazon UK · Cross-border E-commerce", period: "Apr 2025 – Apr 2026",
            title: "Pet Lick Mat · Solo Amazon FBA Store",
            desc: "Ran a UK pet-products FBA store end to end: product selection and pricing with Helium 10 / Keepa, listing optimisation (title / keywords / main image / A+), PPC advertising, plus inventory and fulfilment — continuously optimising ad ROI and conversion on data.",
            tags: ["Cross-border", "Sourcing & pricing", "PPC ads"] },
      metrics: [
        { b: "500+", zh: "订单", en: "Orders" },
        { b: "≈£3,500", zh: "销售额", en: "Revenue" },
        { b: "≈20%", zh: "净利率", en: "Net margin" }
      ]
    },
    {
      cats: ["ops"], featured: true,
      zh: { kicker: "小红书 · 账号运营", period: "2023.12 – 2024.12",
            title: "生活方式账号 0 → 8,000+ 粉",
            desc: "新账号从 0 起步，通过内容选题、标签优化与热点定位，两个月涨粉至 8,000+，并通过与 Adidas 等品牌合作变现。持续以数据复盘优化内容策略，打造多条爆款。",
            tags: ["内容运营", "涨粉增长", "品牌变现"] },
      en: { kicker: "Xiaohongshu (RED) · Account Ops", period: "Dec 2023 – Dec 2024",
            title: "Lifestyle Account 0 → 8,000+ Followers",
            desc: "Grew a brand-new account from zero to 8,000+ in two months through content selection, tag optimisation and trend positioning, then monetised via brand collaborations (incl. Adidas). Refined strategy through data reviews and produced several viral posts.",
            tags: ["Content ops", "Audience growth", "Monetisation"] },
      metrics: [
        { b: "8,000+", zh: "粉丝（2 个月）", en: "Followers (2 mo)" },
        { b: "870k+", zh: "单条爆款观看", en: "Top post views" },
        { b: "40k+", zh: "单条点赞", en: "Top post likes" }
      ]
    },
    {
      cats: ["ops"], featured: true, type: "proposal",
      zh: { kicker: "rednote（小红书海外）· 求职方案", period: "2026",
            title: "伦敦社区冷启动：一个月引入 100 位创作者",
            desc: "为 rednote 伦敦社区运营岗撰写的落地方案。以周为单位拆解：从创作者触达、新手引导手册、线下 workshop，到批量帮助创作者发布首条内容——目标一个月引入 100 位伦敦创作者，并沉淀一个能自运转的小社区。",
            tags: ["社区冷启动", "用户运营", "落地方案"] },
      en: { kicker: "rednote · Community Activation Proposal", period: "2026",
            title: "Bringing 100 London Creators onto rednote in One Month",
            desc: "A hands-on plan written for rednote's London community role. Broken down week by week: creator outreach, a starter guide, an in-person workshop, and helping a batch publish their first notes — targeting 100 London creators in a month and a small self-sustaining community.",
            tags: ["Community launch", "User ops", "Actionable plan"] },
      links: [{ zh: "查看方案 PDF", en: "View proposal (PDF)", href: DOCS + "rednote-community-activation-plan.pdf" }]
    },
    {
      cats: ["research", "marketing"], featured: true,
      zh: { kicker: "MarkSmarter · Team Leader", period: "2024.10 – 2025.01",
            title: "AI 时代的学术写作与评估平台",
            desc: "作为 team leader 带队设计面向「学生」与「教授」双端的 AI 辅助写作 / 评估平台。负责任务分配、双端功能设计与用户 persona（学生 & 教授），从二次调研、ideation 评估矩阵到 Figma 原型与用户测试迭代，完整走通一次以用户为中心的产品设计。",
            tags: ["用户 Persona", "产品设计", "带队"] },
      en: { kicker: "MarkSmarter · Team Leader", period: "Oct 2024 – Jan 2025",
            title: "An AI-era Academic Writing & Assessment Platform",
            desc: "As team leader, designed a dual-sided (student & professor) AI-assisted writing/assessment platform. Owned task allocation, feature design for both sides and user personas, running the full user-centred process from secondary research and an ideation matrix to a Figma prototype and user-testing iterations.",
            tags: ["User personas", "Product design", "Team lead"] },
      links: [
        { zh: "项目文档 PDF", en: "Project write-up (PDF)", href: null, drive: true },
        { zh: "成品演示视频", en: "Prototype demo video", href: "https://drive.google.com/file/d/1YzPSOphTaAB-kbDiY272xLaE77fquLtd/view?usp=drive_link" }
      ]
    },
    {
      cats: ["research"], featured: false,
      zh: { kicker: "KCL · 数字营销", period: "2026",
            title: "Aesop 英国市场受众与情境分析",
            desc: "用 PESTLE 与 SWOT 框架系统分析 Aesop 在英国市场的处境，锁定 25–34 岁、年收入约 £30–40k 的都市年轻女性目标客群，从经济、社会、技术等维度输出受众洞察，为后续营销策略打底。",
            tags: ["受众分析", "PESTLE / SWOT", "市场调研"] },
      en: { kicker: "KCL · Digital Marketing", period: "2026",
            title: "Aesop UK — Situational & Audience Analysis",
            desc: "A systematic PESTLE and SWOT analysis of Aesop in the UK market, defining a target audience of urban women aged 25–34 earning ~£30–40k, with economic, social and technological insight to ground the marketing strategy that follows.",
            tags: ["Audience analysis", "PESTLE / SWOT", "Market research"] },
      links: [{ zh: "阅读报告 PDF", en: "Read report (PDF)", href: DOCS + "aesop-audience-analysis.pdf" }]
    },
    {
      cats: ["marketing"], featured: true,
      zh: { kicker: "KCL · 数字营销", period: "2026",
            title: "Aesop 数字营销 Campaign",
            desc: "承接前期调研，为 Aesop 设计社媒、达人与邮件三大数字营销策略，明确各渠道的落地打法、优劣势与伦理考量。重点把「调研结论」转化为可执行的商业建议——非硬广、以价值驱动，契合品牌调性与目标客群。",
            tags: ["Campaign 设计", "多渠道策略", "商业建议"] },
      en: { kicker: "KCL · Digital Marketing", period: "2026",
            title: "Aesop's Digital Marketing Campaign",
            desc: "Building on the earlier research, a digital marketing strategy for Aesop across social, influencer and email — with concrete tactics, trade-offs and ethical considerations per channel. Focused on translating research findings into executable, value-driven (not hard-sell) commercial recommendations that fit the brand and audience.",
            tags: ["Campaign design", "Multi-channel", "Commercial advice"] },
      highlight: { zh: "亮点：调研结论 → 商业落地建议", en: "Focus: research findings → commercial recommendations" },
      links: [{ zh: "阅读方案 PDF", en: "Read campaign (PDF)", href: DOCS + "aesop-marketing-campaign.pdf" }]
    },
    {
      cats: ["creative"], featured: false,
      zh: { kicker: "SZMG · 活动营销 & 赛事执行（实习）", period: "2025.07 – 09",
            title: "第十五届全运会开幕式 · 活动统筹",
            desc: "协助全运会开幕式方案策划与流程脚本，组织协调 300+ 人完成 3 次全流程彩排，并在现场应对颁奖嘉宾临时缺席等突发状况，保障流程 0 失误。同步负责官媒公众号内容编辑，以二维码引流 500+ 观众进社群。",
            tags: ["活动统筹", "现场执行", "内容运营"] },
      en: { kicker: "SZMG · Event & Sports Ops (Intern)", period: "Jul – Sep 2025",
            title: "15th National Games Opening Ceremony",
            desc: "Supported ceremony planning and scripting, coordinated 300+ people through three full rehearsals, and handled live contingencies (incl. a guest's last-minute absence) for a flawless run. Also ran official WeChat content, converting 500+ attendees into the community via QR journeys.",
            tags: ["Event management", "Live execution", "Content ops"] },
      metrics: [
        { b: "300+", zh: "统筹人数", en: "People coordinated" },
        { b: "500+", zh: "社群转化", en: "Community converts" },
        { b: "0", zh: "执行失误", en: "Execution errors" }
      ]
    },
    {
      cats: ["research"], featured: false,
      zh: { kicker: "LSE · 硕士级研究", period: "2026",
            title: "小红书算法推荐与「母职身份」建构",
            desc: "一份体量扎实的研究：探讨小红书算法推荐如何参与建构用户的「母职身份」，涵盖文献综述、研究方法设计与用户体验分析。体现深度用户研究能力，对母婴 / 内容平台方向尤具价值。",
            tags: ["深度研究", "算法与身份", "用户体验"] },
      en: { kicker: "LSE · Master's-level Research", period: "2026",
            title: "Algorithms & the Construction of Maternal Identity on RED",
            desc: "A substantial study on how Xiaohongshu's algorithmic recommendation participates in constructing users' maternal identity — with literature review, methodology and experience analysis. Demonstrates depth in user research, especially relevant to mother-and-baby and content-platform roles.",
            tags: ["Deep research", "Algorithms & identity", "User experience"] },
      links: [{ zh: "阅读研究 PDF", en: "Read research (PDF)", href: DOCS + "xiaohongshu-maternal-identity-research.pdf" }]
    },
    {
      cats: ["creative"], featured: false, secondary: true,
      zh: { kicker: "创意作品 · Twine", period: "2026.03 – 05",
            title: "In Pieces · 交互式叙事",
            desc: "用 Twine 制作的交互式叙事作品，含多分支剧情、图像与音频——一个关于寻找与记忆的故事。体现内容创意与动手实现能力。",
            tags: ["交互叙事", "内容创意", "多媒体"] },
      en: { kicker: "Creative · Twine", period: "Mar – May 2026",
            title: "In Pieces · Interactive Storytelling",
            desc: "An interactive narrative built in Twine, with branching story, images and audio — a story about searching and memory. Shows content creativity and hands-on making.",
            tags: ["Interactive story", "Creative", "Multimedia"] },
      links: [
        { zh: "在线体验", en: "Play online", href: DOCS + "interactive-story-in-pieces.html" },
        { zh: "画面稿", en: "Storyboard", href: "https://docs.google.com/presentation/d/1CMCHa4MxRr-RqbAYHhoJHGwbgYHKzNJLebsxZCORTkw/edit?usp=sharing" }
      ]
    },
    {
      cats: ["creative"], featured: false, secondary: true,
      zh: { kicker: "创意写作 · 哲学向科幻", period: "2026",
            title: "短篇小说 · 关于妈妈的记忆",
            desc: "一篇基于哲学视角的科幻短篇，围绕「用 AI 复现逝去的亲人」这一设定，探讨记忆、真实与情感的边界。展现叙事与思辨能力。",
            tags: ["创意写作", "科幻", "思辨"] },
      en: { kicker: "Creative Writing · Speculative Fiction", period: "2026",
            title: "Short Story · A Memory of Mum",
            desc: "A philosophically-grounded speculative short story around recreating a lost parent with AI — exploring memory, authenticity and the limits of feeling. Shows narrative and critical thinking.",
            tags: ["Creative writing", "Sci-fi", "Critical thinking"] },
      links: [{ zh: "阅读全文 PDF", en: "Read story (PDF)", href: DOCS + "fiction-a-memory-of-mum.pdf" }]
    }
  ],

  /* ---- Research archive ---- */
  research: [
    {
      zh: { t: "小红书算法推荐与「母职身份」建构", meta: "LSE · 硕士级研究 · 2026",
            d: "算法如何参与用户身份的建构——含文献综述、方法论与用户体验分析。" },
      en: { t: "Algorithms & the Construction of Maternal Identity on RED", meta: "LSE · Master's-level · 2026",
            d: "How algorithmic recommendation shapes user identity — with literature, methodology and experience analysis." },
      href: DOCS + "xiaohongshu-maternal-identity-research.pdf"
    },
    {
      zh: { t: "性别与数字亲密：婚内 Sexting 研究", meta: "KCL · 数字亲密关系 · 2026",
            d: "从性别视角研究婚姻中的数字亲密行为、亲密感与同意——对两性健康 / femtech 品牌具参考价值。" },
      en: { t: "Gender & Digital Intimacy: Marital Sexting", meta: "KCL · Digital Intimacy · 2026",
            d: "A gendered study of digital intimacy, closeness and consent in marriage — relevant to sexual-wellness / femtech brands." },
      href: DOCS + "marital-sexting-research.pdf"
    },
    {
      zh: { t: "AI 伴侣与亚文化中的亲密关系", meta: "KCL · 数字亲密关系 · 2026",
            d: "研究 AI 情感 / 陪伴产品如何重塑特定人群的亲密关系与需求——对情感陪伴 / 两性产品方向有洞察。" },
      en: { t: "AI Companions & Intimacy in Online Subcultures", meta: "KCL · Digital Intimacy · 2026",
            d: "How AI companion products reshape intimacy and needs for specific communities — insight for companionship / intimate-product categories." },
      href: DOCS + "ai-sexbot-intimacy-research.pdf"
    },
    {
      zh: { t: "移动设备对儿童数字出版的影响", meta: "KCL · 数字出版 · 2026",
            d: "以儿童出版为例，分析移动与平板设备如何重塑内容形态、阅读体验与竞争格局。" },
      en: { t: "Mobile Devices & the Reshaping of Children's Publishing", meta: "KCL · Digital Publishing · 2026",
            d: "Using children's publishing to analyse how mobile and tablet devices reshape content form, reading experience and competition." },
      href: DOCS + "childrens-digital-publishing.pdf"
    }
  ],

  /* ---- Timeline (education + experience) ---- */
  timeline: [
    { date: "2026.09 – 2027.09", zh: { t: "伦敦政治经济学院 LSE", org: "性别、媒体与文化 · 文学硕士 (MA)", d: "" },
      en: { t: "London School of Economics (LSE)", org: "MA Gender, Media & Culture", d: "" } },
    { date: "2026.04 – 2026.06", zh: { t: "AI 海外达人运营（实习）", org: "深圳 Vertex Marketing", d: "英国市场达人营销，2.8M+ 曝光。" },
      en: { t: "AI Influencer Ops (Intern)", org: "Vertex Marketing, Shenzhen", d: "UK influencer campaigns, 2.8M+ impressions." } },
    { date: "2025.07 – 2025.09", zh: { t: "活动营销 & 赛事执行（实习）", org: "深圳广播电影电视集团 SZMG", d: "全运会开幕式，统筹 300+ 人。" },
      en: { t: "Event & Sports Ops (Intern)", org: "Shenzhen Media Group (SZMG)", d: "National Games ceremony, 300+ people." } },
    { date: "2025.04 – 2026.04", zh: { t: "跨境电商运营", org: "Amazon UK · 独立店铺", d: "宠物用品 FBA，500+ 订单。" },
      en: { t: "Cross-border E-commerce", org: "Amazon UK · Solo store", d: "Pet-products FBA, 500+ orders." } },
    { date: "2023.09 – 2026.06", zh: { t: "伦敦国王学院 KCL", org: "数字媒体与文化 · 一等荣誉学士", d: "First-Class Honours。" },
      en: { t: "King's College London (KCL)", org: "BA Digital Media & Culture", d: "First-Class Honours." } },
    { date: "2023.12 – 2024.12", zh: { t: "小红书账号运营", org: "个人项目", d: "0→8,000+ 粉，品牌合作变现。" },
      en: { t: "Xiaohongshu Account Ops", org: "Personal project", d: "0→8,000+ followers, brand deals." } }
  ]
};

/* ---- UI copy (static labels) ---- */
const UI = {
  zh: {
    navAbout: "关于", navCap: "能力", navWork: "案例", navResearch: "研究", navContact: "联系",
    heroRole: "数字营销 · 用户研究 · 出海运营",
    heroLede: "应届硕士生（LSE，2027 毕业）。我把用户洞察变成能落地的营销与运营方案——从调研、persona 到 campaign 与增长。",
    ctaWork: "查看案例", ctaCV: "下载简历",
    aboutEyebrow: "关于我", aboutTitle: "先看懂用户，再谈方案",
    aboutP1: "我是一个自律又有创造力的人，在团队里通常担任 leader。拥有海外达人营销、跨境电商与社媒运营的实战经验，也擅长用户研究与数据驱动的策略。",
    aboutP2: "英语是我的优势，我对「出海」相关岗位尤其感兴趣——营销策划、用户运营、商家运营、海外社区运营都在我的射程内。我更看重把事情真正做成，而不只是纸面漂亮。",
    capEyebrow: "我能做什么", capTitle: "四种可迁移的核心能力",
    capLead: "网站按能力组织：每一项能力，下面都有真实项目在证明「我会做」。",
    workEyebrow: "精选案例", workTitle: "作品与实战",
    workLead: "实习、电商、内容与策划——每个案例都突出方法与成果。点击标签可筛选。",
    researchEyebrow: "研究档案", researchTitle: "深度研究",
    researchLead: "这些研究体现我的用户研究深度，以及对特定行业（母婴、两性健康、出版）的洞察。",
    timelineEyebrow: "经历", timelineTitle: "教育与实习",
    contactTitle: "一起做点能落地的事",
    contactLead: "如果你在找一个能把调研做成方案、把方案做成结果的人，欢迎联系我。",
    lblEmail: "邮箱", lblPhoneCN: "电话（中国）", lblPhoneUK: "电话（英国）",
    dlEN: "下载简历（英文）", dlCN: "下载简历（中文）",
    viewDrive: "项目文档"
  },
  en: {
    navAbout: "About", navCap: "Skills", navWork: "Work", navResearch: "Research", navContact: "Contact",
    heroRole: "Digital Marketing · User Research · Global Ops",
    heroLede: "Incoming master's graduate (LSE, 2027). I turn user insight into strategies that ship — from research and personas to campaigns and growth.",
    ctaWork: "See my work", ctaCV: "Download CV",
    aboutEyebrow: "About", aboutTitle: "Understand the user first, then the strategy",
    aboutP1: "Self-disciplined and creative, I usually take the lead in teams. I bring hands-on experience across overseas influencer marketing, cross-border e-commerce and social media operations, with a strong foundation in user research and data-driven strategy.",
    aboutP2: "English is my strength, and I'm especially drawn to global / going-overseas roles — marketing, user operations, merchant operations and overseas community ops are all in range. I care about actually getting things done, not just polished on paper.",
    capEyebrow: "What I can do", capTitle: "Four transferable core skills",
    capLead: "The site is organised by skill — each one backed by real projects that prove I can do it.",
    workEyebrow: "Selected Work", workTitle: "Projects & real-world impact",
    workLead: "Internships, e-commerce, content and strategy — each case highlights method and outcome. Filter by tag.",
    researchEyebrow: "Research Archive", researchTitle: "Deep research",
    researchLead: "This research shows my depth in user research, plus insight into specific industries (mother & baby, sexual wellness, publishing).",
    timelineEyebrow: "Journey", timelineTitle: "Education & experience",
    contactTitle: "Let's make something that ships",
    contactLead: "If you're looking for someone who turns research into plans and plans into results, get in touch.",
    lblEmail: "Email", lblPhoneCN: "Phone (China)", lblPhoneUK: "Phone (UK)",
    dlEN: "Download CV (EN)", dlCN: "Download CV (中文)",
    viewDrive: "Project doc"
  }
};

const CONTACT = {
  email: "yueeve69@163.com",
  phoneCN: "+86 156 6344 8888",
  phoneUK: "+44 7436 445151",
  cvEN: DOCS + "Eve_Yang_CV_EN.pdf",
  cvCN: DOCS + "Eve_Yang_CV_CN.pdf"
};

/* ============================================================
   Rendering
   ============================================================ */
let currentLang = localStorage.getItem("eve-lang") || "zh";
let currentFilter = "all";

function L() { return currentLang; }
function u(key) { return UI[L()][key]; }

function render() {
  document.documentElement.setAttribute("data-lang", L());
  document.documentElement.setAttribute("lang", L() === "zh" ? "zh-CN" : "en");
  const t = UI[L()];

  // nav + static labels
  setText("nav-about", t.navAbout); setText("nav-cap", t.navCap);
  setText("nav-work", t.navWork); setText("nav-research", t.navResearch);
  setText("nav-contact", t.navContact);
  setText("hero-role", t.heroRole); setText("hero-lede", t.heroLede);
  setText("cta-work", t.ctaWork); setText("cta-cv", t.ctaCV);
  document.getElementById("cta-cv").href = L() === "zh" ? CONTACT.cvCN : CONTACT.cvEN;

  setText("about-eyebrow", t.aboutEyebrow); setText("about-title", t.aboutTitle);
  setText("about-p1", t.aboutP1); setText("about-p2", t.aboutP2);
  setText("cap-eyebrow", t.capEyebrow); setText("cap-title", t.capTitle); setText("cap-lead", t.capLead);
  setText("work-eyebrow", t.workEyebrow); setText("work-title", t.workTitle); setText("work-lead", t.workLead);
  setText("research-eyebrow", t.researchEyebrow); setText("research-title", t.researchTitle); setText("research-lead", t.researchLead);
  setText("timeline-eyebrow", t.timelineEyebrow); setText("timeline-title", t.timelineTitle);
  setText("contact-title", t.contactTitle); setText("contact-lead", t.contactLead);

  // hero badge
  setText("hero-badge-val", DATA.heroBadge.value);
  setText("hero-badge-lbl", DATA.heroBadge[L()]);

  renderChips(); renderFacts(); renderCapabilities();
  renderFilters(); renderWork(); renderResearch(); renderTimeline(); renderContact();

  // lang toggle active state
  document.querySelectorAll(".lang-toggle button").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === L()));

  observeReveals();
}

function setText(id, txt) { const el = document.getElementById(id); if (el) el.textContent = txt; }

function renderChips() {
  document.getElementById("chips").innerHTML =
    DATA.chips[L()].map((c, i) => `<span class="chip ${i < 3 ? "solid" : ""}">${c}</span>`).join("");
}

function renderFacts() {
  document.getElementById("about-facts").innerHTML =
    DATA.facts.map(f => `<div class="fact"><b>${f.b}</b><span>${f[L()]}</span></div>`).join("");
}

function renderCapabilities() {
  document.getElementById("cap-grid").innerHTML = DATA.capabilities.map((c, i) => {
    const d = c[L()];
    return `<div class="cap reveal">
      <div class="num">0${i + 1}</div>
      <h3>${d.t}</h3><p>${d.d}</p>
      <div class="tags">${d.tags.map(x => `<span>${x}</span>`).join("")}</div>
    </div>`;
  }).join("");
}

function renderFilters() {
  document.getElementById("filters").innerHTML = DATA.filters.map(f =>
    `<button class="filter ${f.key === currentFilter ? "active" : ""}" data-filter="${f.key}">${f[L()]}</button>`
  ).join("");
  document.querySelectorAll(".filter").forEach(b => b.addEventListener("click", () => {
    currentFilter = b.dataset.filter; renderFilters(); renderWork();
  }));
}

function renderWork() {
  document.getElementById("cards").innerHTML = DATA.work.map(w => {
    const d = w[L()];
    const show = currentFilter === "all" || w.cats.includes(currentFilter);
    const metrics = w.metrics ? `<div class="metrics">${w.metrics.map(m =>
      `<div class="metric"><b>${m.b}</b><span>${m[L()]}</span></div>`).join("")}</div>` : "";
    const highlight = w.highlight ? `<div class="highlight-note">✦ ${w.highlight[L()]}</div>` : "";
    const links = w.links ? `<div class="card-links">${w.links.map(lk => {
      if (lk.drive) return `<a title="${u("viewDrive")}" href="https://drive.google.com/file/d/1YzPSOphTaAB-kbDiY272xLaE77fquLtd/view?usp=drive_link" target="_blank" rel="noopener">${lk[L()]}</a>`;
      const target = lk.href && lk.href.startsWith("http") ? ` target="_blank" rel="noopener"` : "";
      return `<a href="${lk.href}"${target}>${lk[L()]}</a>`;
    }).join("")}</div>` : "";
    const feat = w.featured ? `<span class="badge-featured">${L() === "zh" ? "精选" : "Featured"}</span>` : "";
    return `<article class="card reveal ${show ? "" : "hidden"}">
      <div class="card-top"><span class="kicker">${d.kicker}</span><span class="period">${d.period}</span></div>
      <h3>${d.title} ${feat}</h3>
      <div class="tag-row">${d.tags.map(x => `<span>${x}</span>`).join("")}</div>
      <p class="desc">${d.desc}</p>
      ${metrics}${highlight}${links}
    </article>`;
  }).join("");
  observeReveals();
}

function renderResearch() {
  document.getElementById("research-list").innerHTML = DATA.research.map(r => {
    const d = r[L()];
    return `<div class="research-item reveal">
      <div><h3>${d.t}</h3><div class="meta">${d.meta}</div><div class="desc">${d.d}</div></div>
      <a href="${r.href}" target="_blank" rel="noopener">${L() === "zh" ? "阅读 PDF →" : "Read PDF →"}</a>
    </div>`;
  }).join("");
}

function renderTimeline() {
  document.getElementById("timeline-list").innerHTML = DATA.timeline.map(t => {
    const d = t[L()];
    return `<div class="tl-item reveal">
      <div class="tl-date">${t.date}</div>
      <h3>${d.t}</h3><div class="tl-org">${d.org}</div>
      ${d.d ? `<div class="tl-desc">${d.d}</div>` : ""}
    </div>`;
  }).join("");
}

function renderContact() {
  const t = UI[L()];
  document.getElementById("contact-methods").innerHTML = `
    <a href="mailto:${CONTACT.email}"><span class="label">${t.lblEmail}</span><span class="val">${CONTACT.email}</span></a>
    <a href="tel:${CONTACT.phoneCN.replace(/\s/g, "")}"><span class="label">${t.lblPhoneCN}</span><span class="val">${CONTACT.phoneCN}</span></a>
    <a href="tel:${CONTACT.phoneUK.replace(/\s/g, "")}"><span class="label">${t.lblPhoneUK}</span><span class="val">${CONTACT.phoneUK}</span></a>`;
  document.getElementById("dl-row").innerHTML = `
    <a class="btn" href="${CONTACT.cvEN}" download>${t.dlEN}</a>
    <a class="btn ghost" href="${CONTACT.cvCN}" download>${t.dlCN}</a>`;
}

/* ---- Reveal on scroll ---- */
let io;
function observeReveals() {
  const supported = "IntersectionObserver" in window;
  if (!supported) { document.querySelectorAll(".reveal").forEach(el => el.classList.add("in")); return; }
  if (!io) io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
  // Safety net: never leave content invisible
  clearTimeout(observeReveals._t);
  observeReveals._t = setTimeout(() =>
    document.querySelectorAll(".reveal:not(.in)").forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight) el.classList.add("in");
    }), 1200);
}

/* ---- Init ---- */
document.addEventListener("DOMContentLoaded", () => {
  render();
  document.querySelectorAll(".lang-toggle button").forEach(b => b.addEventListener("click", () => {
    currentLang = b.dataset.lang; localStorage.setItem("eve-lang", currentLang); render();
  }));
  const nav = document.querySelector(".nav");
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 10));
  const menuBtn = document.getElementById("menu-btn");
  const links = document.getElementById("nav-links");
  menuBtn.addEventListener("click", () => links.classList.toggle("open"));
  links.querySelectorAll("a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
});
