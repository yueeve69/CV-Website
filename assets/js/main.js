/* ============================================================
   Eve Yang · Portfolio — content + rendering (bilingual, multi-view)
   Edit the DATA / UI objects below to update the site. No build step.
   ============================================================ */

const DOCS = "assets/docs/";
const MARK_VIDEO = "https://drive.google.com/file/d/1YzPSOphTaAB-kbDiY272xLaE77fquLtd/view?usp=drive_link";

const DATA = {
  chips: {
    zh: ["ENTJ", "海外达人营销", "跨境电商运营", "内容增长", "用户 & 市场调研", "活动 & 社群运营", "AI 工具流", "中英双语"],
    en: ["ENTJ", "Overseas influencer marketing", "Cross-border e-commerce", "Content growth", "User & market research", "Events & community ops", "AI workflows", "Bilingual EN/中文"]
  },

  heroBadge: { value: "2.8M+", zh: "英国达人营销曝光", en: "UK campaign impressions" },

  facts: [
    { b: "2.8M+", zh: "英国达人营销曝光", en: "UK campaign reach" },
    { b: "0→8,000", zh: "小红书两月涨粉", en: "Followers in 2 months" },
    { b: "500+", zh: "亚马逊订单", en: "Amazon orders" },
    { b: "500+", zh: "活动社群转化", en: "Community conversions" }
  ],

  /* Education (LSE / KCL) */
  education: [
    { date: "2026.09 – 2027.09", zh: { t: "伦敦政治经济学院 LSE", org: "性别、媒体与文化 · 文学硕士 (MA)", d: "相关方向：媒体与传播、数字文化、受众与身份研究。" },
      en: { t: "London School of Economics (LSE)", org: "MA Gender, Media & Culture", d: "Focus areas: media & communication, digital culture, audience & identity." } },
    { date: "2023.09 – 2026.06", zh: { t: "伦敦国王学院 KCL", org: "数字媒体与文化 · 一等荣誉学士 (First-Class)", d: "相关课程：社交媒体、数字营销、品牌故事、人工智能、数字产品。" },
      en: { t: "King's College London (KCL)", org: "BA Digital Media & Culture · First-Class Honours", d: "Courses: social media, digital marketing, brand storytelling, AI, digital products." } }
  ],

  /* Academic research & essays (shown on the Education page) */
  research: [
    {
      zh: { t: "小红书算法推荐与「母职身份」的建构", meta: "KCL · 本科毕业论文 · 2026",
            d: "研究算法推荐如何参与建构用户的母职身份，含文献综述、研究方法与质性分析。对母婴、内容平台方向的用户研究具参考价值。" },
      en: { t: "Algorithms & the Construction of Maternal Identity on RED", meta: "KCL · BA Dissertation · 2026",
            d: "How algorithmic recommendation shapes maternal identity, with literature review, methodology and qualitative analysis." },
      href: DOCS + "xiaohongshu-maternal-identity-research.pdf"
    },
    {
      zh: { t: "性别视角下的婚内数字亲密行为", meta: "KCL · 数字亲密关系 · 2026",
            d: "从性别视角研究婚姻关系中的数字亲密、亲密感与同意。对两性健康、femtech 品牌的用户与内容洞察具参考价值。" },
      en: { t: "Gender & Digital Intimacy in Marriage", meta: "KCL · Digital Intimacy · 2026",
            d: "A gendered study of digital intimacy, closeness and consent, relevant to sexual-wellness / femtech insight." },
      href: DOCS + "marital-sexting-research.pdf"
    },
    {
      zh: { t: "AI 伴侣与亚文化中的亲密关系", meta: "KCL · 数字亲密关系 · 2026",
            d: "研究 AI 情感 / 陪伴类产品如何重塑特定人群的亲密关系与需求。" },
      en: { t: "AI Companions & Intimacy in Online Subcultures", meta: "KCL · Digital Intimacy · 2026",
            d: "How AI companion products reshape intimacy and needs for specific communities." },
      href: DOCS + "ai-sexbot-intimacy-research.pdf"
    },
    {
      zh: { t: "移动设备对儿童数字出版的影响", meta: "KCL · 数字出版 · 2026",
            d: "以儿童出版为例，分析移动与平板设备如何重塑内容形态、阅读体验与竞争格局。" },
      en: { t: "Mobile Devices & Children's Digital Publishing", meta: "KCL · Digital Publishing · 2026",
            d: "How mobile and tablet devices reshape content form, reading experience and competition in children's publishing." },
      href: DOCS + "childrens-digital-publishing.pdf"
    },
    {
      zh: { t: "短篇小说 · 关于妈妈的记忆（哲学向科幻）", meta: "KCL · 数字理论 · 2026",
            d: "一篇哲学视角的科幻短篇，围绕以 AI 复现逝去亲人，探讨记忆、真实与情感的边界。" },
      en: { t: "Short Story · A Memory of Mum (Speculative Fiction)", meta: "KCL · Digital Theory · 2026",
            d: "A philosophically-grounded short story on recreating a lost parent with AI, and the limits of memory and feeling." },
      href: DOCS + "fiction-a-memory-of-mum.pdf"
    }
  ],

  /* Experience categories (kept per your request) */
  categories: [
    { key: "marketing", zh: "营销 & 达人营销", en: "Marketing & Influencer" },
    { key: "ecommerce", zh: "跨境电商 & 商家运营", en: "Cross-border E-commerce" },
    { key: "content", zh: "内容 & 用户运营", en: "Content & User Ops" },
    { key: "events", zh: "活动 & 社群运营", en: "Events & Community" },
    { key: "product", zh: "产品 & 网站/游戏制作", en: "Product & Web / Game" }
  ],

  /* Experience items */
  work: [
    /* -------- Marketing & Influencer -------- */
    {
      cat: "marketing", kind: "internship", featured: true,
      zh: { kicker: "Vertex Marketing · AI 海外达人运营（实习）", period: "2026.04 – 06",
            title: "VOOPOO 英国市场达人营销",
            summary: "负责 VOOPOO 英国市场的海外达人营销，从市场调研、达人筛选到合作落地全流程参与。",
            highlights: ["市场 & 竞品调研", "KOL/KOC 筛选策略", "达人建联 & 商务沟通", "数据化投放"],
            duties: [
              "负责 VOOPOO 英国市场在 TikTok、Instagram、Reddit 的达人营销项目",
              "运用 Perplexity、Claude、Google Trends 开展市场调研与竞品分析",
              "AI 辅助筛选 600+ 海外 KOL/KOC，聚焦 1–10 万粉中腰部达人，建立达人资源库",
              "独立完成 120+ 位创作者的建联、沟通与合作推进（产品测评 / UGC / 短视频）"
            ],
            results: [
              "累计曝光 280 万+，平均互动率 7.2%",
              "筛选账号平均互动率达 8%+",
              "基于投放数据持续优化达人策略，提升内容表现与投放效率"
            ] },
      en: { kicker: "Vertex Marketing · AI Influencer Ops (Intern)", period: "Apr – Jun 2026",
            title: "VOOPOO UK Influencer Campaign",
            summary: "Owned VOOPOO's UK influencer marketing end to end, from research and creator selection to live collaborations.",
            highlights: ["Market & competitor research", "KOL/KOC screening", "Creator outreach & deals", "Data-driven optimisation"],
            duties: [
              "Ran VOOPOO's UK influencer marketing across TikTok, Instagram and Reddit",
              "Conducted market and competitor research with Perplexity, Claude and Google Trends",
              "AI-screened 600+ overseas KOLs/KOCs, focusing on mid-tier creators, and built a creator database",
              "Independently handled outreach and collaboration with 120+ creators (reviews / UGC / short video)"
            ],
            results: [
              "2.8M+ impressions and 7.2% average engagement",
              "Selected accounts averaged 8%+ engagement",
              "Optimised creator strategy on performance data to improve content and ad results"
            ] },
      context: { zh: "VOOPOO 是主打海外市场的电子雾化品牌，主要客群在欧美，营销高度依赖海外社媒与达人内容。", en: "VOOPOO is an overseas-focused vaping/atomiser brand whose growth relies heavily on Western social media and creators." },
      metrics: [
        { b: "2.8M+", zh: "曝光", en: "Impressions" },
        { b: "7.2%", zh: "平均互动率", en: "Avg. engagement" },
        { b: "600+", zh: "达人筛选", en: "Creators screened" }
      ]
    },
    {
      cat: "marketing", kind: "academic", featured: true,
      zh: { kicker: "KCL · 数字营销课题", period: "2026",
            title: "Aesop 英国市场数字营销 Campaign",
            summary: "为 Aesop 英国市场制定完整数字营销策略，并将调研结论转化为可落地的商业建议。",
            highlights: ["多渠道营销策略", "调研结论转化", "品牌调性把控"],
            duties: [
              "为 Aesop 英国市场制定社媒、达人与邮件三大数字营销策略",
              "明确各渠道的执行方式、优劣势与伦理边界",
              "将前期受众与市场调研结论，转化为品牌可落地、不破坏调性的商业动作"
            ],
            results: [
              "输出一套以价值内容切入、非硬广的整合营销方案",
              "在「调研结论转化为商业应用建议」上获授课老师肯定"
            ] },
      en: { kicker: "KCL · Digital Marketing", period: "2026",
            title: "Aesop UK Digital Marketing Campaign",
            summary: "Built a full digital marketing strategy for Aesop UK and turned research into actionable commercial recommendations.",
            highlights: ["Multi-channel strategy", "Research to action", "Brand-tone consistency"],
            duties: [
              "Designed social, influencer and email strategies for Aesop UK",
              "Defined the execution, trade-offs and ethical limits of each channel",
              "Translated audience and market research into on-brand, executable commercial actions"
            ],
            results: [
              "Delivered a value-led, non-intrusive integrated campaign plan",
              "Recognised by the tutor for turning research findings into commercial recommendations"
            ] },
      links: [{ zh: "阅读方案 PDF", en: "Read campaign (PDF)", href: DOCS + "aesop-marketing-campaign.pdf" }]
    },
    {
      cat: "marketing", kind: "academic",
      zh: { kicker: "KCL · 数字营销课题", period: "2026",
            title: "Aesop 英国市场受众 & 情境分析",
            summary: "Campaign 前的市场与受众调研，用 PESTLE、SWOT 拆解品牌处境并锁定目标客群。",
            highlights: ["PESTLE / SWOT 分析", "目标受众定位", "用户画像 persona"],
            duties: [
              "以 PESTLE、SWOT 框架分析 Aesop 在英国市场的处境",
              "从经济、社会、技术等维度输出受众洞察",
              "锁定 25–34 岁、年收入约 £30–40k 的都市年轻女性目标客群"
            ],
            results: [
              "形成一份可支撑后续营销策略的受众与情境分析报告"
            ] },
      en: { kicker: "KCL · Digital Marketing", period: "2026",
            title: "Aesop UK Audience & Situational Analysis",
            summary: "Pre-campaign research using PESTLE and SWOT to frame the brand's position and define its target audience.",
            highlights: ["PESTLE / SWOT", "Audience targeting", "User personas"],
            duties: [
              "Analysed Aesop's UK position with PESTLE and SWOT frameworks",
              "Produced audience insight across economic, social and technological angles",
              "Defined a target of urban women aged 25–34 earning about £30–40k"
            ],
            results: [
              "Produced an audience and situational report to underpin the marketing strategy"
            ] },
      links: [{ zh: "阅读报告 PDF", en: "Read report (PDF)", href: DOCS + "aesop-audience-analysis.pdf" }]
    },

    /* -------- Cross-border E-commerce -------- */
    {
      cat: "ecommerce", kind: "venture", featured: true,
      zh: { kicker: "Amazon UK · 跨境电商运营", period: "2025.04 – 2026.04",
            title: "宠物用品 · Amazon FBA 独立店铺",
            summary: "独立运营英国站 Amazon FBA 宠物用品店铺，负责从选品到广告的完整链路，并实现正向盈利。",
            highlights: ["选品 & 定价", "Listing & 关键词优化", "PPC 广告投放", "库存 & 数据分析"],
            duties: [
              "独立运营英国站 Amazon FBA 宠物用品店铺，负责全流程运营",
              "运用 Helium 10、Keepa 分析需求、竞品与价格带，制定选品与定价策略",
              "优化 Listing 标题、关键词、主图与 A+ 页面",
              "投放并优化 PPC 广告，管理库存周转与物流发货"
            ],
            results: [
              "累计完成 500+ 订单，销售额约 £3,500",
              "通过 AI 辅助数据分析优化广告与转化，项目整体净利率约 20%"
            ] },
      en: { kicker: "Amazon UK · Cross-border E-commerce", period: "Apr 2025 – Apr 2026",
            title: "Pet Products · Solo Amazon FBA Store",
            summary: "Ran a UK Amazon FBA pet-products store solo, owning the full chain from sourcing to ads, and turned a profit.",
            highlights: ["Sourcing & pricing", "Listing & keyword SEO", "PPC advertising", "Inventory & analytics"],
            duties: [
              "Independently ran a UK Amazon FBA pet-products store end to end",
              "Analysed demand, competitors and price bands with Helium 10 and Keepa to set sourcing and pricing",
              "Optimised listing title, keywords, main image and A+ pages",
              "Ran and optimised PPC ads, and managed inventory turnover and fulfilment"
            ],
            results: [
              "500+ orders and about £3,500 in revenue",
              "Optimised ads and conversion with AI-assisted analysis for a project net margin of about 20%"
            ] },
      metrics: [
        { b: "500+", zh: "订单", en: "Orders" },
        { b: "≈£3,500", zh: "销售额", en: "Revenue" },
        { b: "≈20%", zh: "净利率", en: "Net margin" }
      ],
      image: { src: "assets/img/amazon-product.jpg", zh: "我运营的产品：马卡龙色系宠物慢食垫（真实产品图）", en: "The product I ran: macaron-tone pet slow-feeder mats (real product)" }
    },

    /* -------- Content & User Ops -------- */
    {
      cat: "content", kind: "project", featured: true,
      zh: { kicker: "小红书 · 账号运营", period: "2023.12 – 2024.12",
            title: "生活方式账号 0 → 8,000+ 粉",
            summary: "从 0 独立运营一个生活方式账号，通过内容与数据运营快速涨粉并实现品牌变现。",
            highlights: ["内容选题 & 定位", "涨粉增长", "数据复盘", "品牌合作变现"],
            duties: [
              "从 0 运营生活方式账号，负责内容选题、标签优化与热点定位",
              "通过数据复盘持续优化内容策略",
              "对接 Adidas 等品牌完成推广合作与商业化变现"
            ],
            results: [
              "两个月涨粉至 8,000+",
              "打造多条爆款，单条最高 87 万观看、4 万+ 点赞、1 万+ 评论"
            ] },
      en: { kicker: "Xiaohongshu (RED) · Account Ops", period: "Dec 2023 – Dec 2024",
            title: "Lifestyle Account 0 → 8,000+ Followers",
            summary: "Grew a lifestyle account from zero solo through content and data-led operations, then monetised it.",
            highlights: ["Content strategy", "Audience growth", "Data reviews", "Brand monetisation"],
            duties: [
              "Ran a lifestyle account from zero: content selection, tag optimisation and trend positioning",
              "Continuously refined content strategy through data reviews",
              "Partnered with brands including Adidas for promotions and monetisation"
            ],
            results: [
              "Grew to 8,000+ followers in two months",
              "Produced several viral posts, the top one at 870k views, 40k+ likes, 10k+ comments"
            ] },
      metrics: [
        { b: "8,000+", zh: "粉丝（2 个月）", en: "Followers (2 mo)" },
        { b: "870k+", zh: "单条爆款观看", en: "Top post views" },
        { b: "40k+", zh: "单条点赞", en: "Top post likes" }
      ]
      /* 小红书好笔记外链后续补充：add note links here later */
    },

    /* -------- Events & Community -------- */
    {
      cat: "events", kind: "internship", featured: true,
      zh: { kicker: "深圳广电集团 SZMG · 活动营销 & 赛事运营（实习）", period: "2025.07 – 09",
            title: "全运会官媒公众号运营 & 社群转化",
            summary: "负责十五届全运会官媒微信公众号内容与线下活动策划，通过内容与二维码将现场观众高效沉淀进社群。",
            highlights: ["社群转化 & 用户沉淀", "微信公众号运营", "线下活动策划", "大型活动统筹"],
            duties: [
              "负责官媒微信公众号内容编辑与排版，围绕「体育 × 时尚」主题策划并推广线下活动",
              "通过内容引导与二维码转化，将现场观众引流并沉淀进社群",
              "协助开幕式方案策划与流程脚本，统筹 300+ 人完成 3 次全流程彩排",
              "对接华润集团，统筹赛事物资采购与预算执行"
            ],
            results: [
              "成功引流 500+ 现场参与者加入社群，实现高效用户沉淀与互动",
              "开幕式现场应对突发情况，流程 0 失误顺利完成"
            ] },
      en: { kicker: "SZMG · Event & Sports Ops (Intern)", period: "Jul – Sep 2025",
            title: "National Games WeChat Ops & Community Conversion",
            summary: "Ran the official WeChat account and an offline activation, converting on-site attendees into an engaged community.",
            highlights: ["Community conversion", "WeChat content ops", "Offline activation", "Large-event coordination"],
            duties: [
              "Edited and laid out official WeChat content, planning a 'Sports x Fashion' offline activation",
              "Used content guidance and QR journeys to funnel on-site attendees into the community",
              "Supported ceremony planning and run-of-show, coordinating 300+ people across 3 rehearsals",
              "Liaised with Huarun Group on event procurement and budget execution"
            ],
            results: [
              "Converted 500+ on-site attendees into the community with strong retention and engagement",
              "Handled live contingencies for a flawless, zero-error ceremony run"
            ] },
      metrics: [
        { b: "500+", zh: "社群转化", en: "Community converts" },
        { b: "300+", zh: "统筹人数", en: "People coordinated" },
        { b: "0", zh: "执行失误", en: "Execution errors" }
      ]
    },

    /* -------- Product & Web / Game -------- */
    {
      cat: "product", kind: "academic", featured: true,
      zh: { kicker: "MarkSmarter · Team Leader", period: "2024.10 – 2025.01",
            title: "AI 时代的学术写作 & 评估平台",
            summary: "作为 team leader 带队设计一款面向学生与教授双端的 AI 辅助写作/评估平台，主导用户研究与产品设计。",
            highlights: ["用户调研 & Persona", "双端产品设计", "Figma 原型", "团队管理"],
            duties: [
              "作为 team leader 负责任务分配与项目推进",
              "设计面向学生端与教授端的产品功能",
              "完成学生、教授两套用户 persona 与用户调研",
              "从二次调研、想法评估到 Figma 原型与用户测试迭代"
            ],
            results: [
              "完整走通一次以用户为中心的产品设计流程，产出可用的原型与测试结论"
            ] },
      en: { kicker: "MarkSmarter · Team Leader", period: "Oct 2024 – Jan 2025",
            title: "AI-era Academic Writing & Assessment Platform",
            summary: "As team leader, designed a dual-sided (student & professor) AI-assisted writing platform, owning research and product design.",
            highlights: ["User research & personas", "Dual-sided design", "Figma prototyping", "Team leadership"],
            duties: [
              "Led the team on task allocation and delivery as team leader",
              "Designed product features for both student and professor sides",
              "Built two user personas (student and professor) and ran user research",
              "Ran the full loop from secondary research and idea evaluation to Figma prototype and testing"
            ],
            results: [
              "Completed a full user-centred design cycle with a working prototype and test findings"
            ] },
      links: [
        { zh: "项目文档 PDF", en: "Project write-up (PDF)", href: MARK_VIDEO },
        { zh: "成品演示视频", en: "Prototype demo", href: MARK_VIDEO }
      ]
    },
    {
      cat: "product", kind: "project", secondary: true,
      zh: { kicker: "创意作品 · Twine 交互叙事", period: "2026.03 – 05",
            title: "In Pieces · 交互式故事",
            summary: "用 Twine 独立制作的一款交互式叙事作品，含多分支剧情、图像与音频。",
            highlights: ["交互叙事设计", "多媒体制作", "用户体验"],
            duties: [
              "用 Twine 独立制作交互式叙事作品，含多分支剧情、图像与音频",
              "完成剧本撰写、分支设计与图文/音频制作"
            ],
            results: [
              "产出一款可在线体验的完整交互叙事作品"
            ] },
      en: { kicker: "Creative · Twine Interactive Fiction", period: "Mar – May 2026",
            title: "In Pieces · An Interactive Story",
            summary: "An interactive narrative built solo in Twine, with branching story, images and audio.",
            highlights: ["Interactive design", "Multimedia", "User experience"],
            duties: [
              "Built an interactive narrative in Twine with branching story, images and audio",
              "Wrote the script and designed the branches and multimedia"
            ],
            results: [
              "Shipped a complete, playable interactive story"
            ] },
      links: [
        { zh: "在线体验", en: "Play online", href: DOCS + "interactive-story-in-pieces.html" },
        { zh: "画面稿", en: "Storyboard", href: "https://docs.google.com/presentation/d/1CMCHa4MxRr-RqbAYHhoJHGwbgYHKzNJLebsxZCORTkw/edit?usp=sharing" }
      ]
    }
  ]
};

/* Experience "kind" tag */
const KIND = {
  internship: { zh: "实习", en: "Internship" },
  venture: { zh: "创业", en: "Venture" },
  project: { zh: "个人项目", en: "Project" },
  academic: { zh: "课程项目", en: "Coursework" }
};

/* Static UI copy */
const UI = {
  zh: {
    navAbout: "关于我", navEdu: "教育经历", navExp: "实习 & 创业", navContact: "联系",
    heroRole: "海外市场营销与运营",
    heroLede: "我专注海外市场的营销与运营，在达人营销、跨境电商与内容运营上都有独立负责的实战经验。主导的英国达人营销累计 280 万曝光，独立运营的 Amazon 英国店铺完成 500+ 订单，运营的小红书账号两个月增长至 8,000+ 粉。KCL 数字媒体一等荣誉毕业，即将就读 LSE。",
    ctaCV: "下载简历",
    aboutEyebrow: "关于我", aboutTitle: "数字媒体背景，两年海外营销与运营实战",
    aboutP1: "我是杨怿涵，KCL 数字媒体与文化一等荣誉毕业，即将就读 LSE。过去两年，我专注于海外市场的营销与运营，并在多个真实项目中独立负责：在 Vertex 主导 VOOPOO 英国市场的达人营销；独立运营 Amazon 英国站店铺，覆盖选品、定价、Listing 优化到广告投放的完整流程；并将一个小红书账号从 0 运营至 8,000+ 粉。",
    aboutP2: "我擅长以数据和 AI 工具驱动市场调研、竞品分析与达人筛选，能够独立完成从调研、策略到执行的全过程；在团队中通常担任牵头角色（MBTI：ENTJ）。英语接近母语水平，因此我尤其希望投身出海方向的岗位。",
    eduEyebrow: "教育经历", eduTitle: "教育背景与学术研究",
    researchSubhead: "学术研究与论文", researchLead: "我的研究围绕数字媒体、算法与用户身份，对用户研究与特定行业洞察具参考价值。",
    expEyebrow: "实习 & 创业经历", expTitle: "我做过的项目与成果",
    expLead: "按类型选择，右侧查看每段经历的职责与成果。",
    dutiesLabel: "工作职责", resultsLabel: "工作成果",
    contactTitle: "欢迎与我联系", contactLead: "如果您正在寻找一位能独立负责海外营销与运营项目的候选人，欢迎随时与我联系。",
    lblEmail: "邮箱", lblPhoneCN: "电话（中国）", lblPhoneUK: "电话（英国）",
    dlEN: "下载简历（英文）", dlCN: "下载简历（中文）"
  },
  en: {
    navAbout: "About", navEdu: "Education", navExp: "Experience", navContact: "Contact",
    heroRole: "Overseas Marketing & Operations",
    heroLede: "I focus on marketing and operations for overseas markets, with hands-on ownership across influencer marketing, cross-border e-commerce and content. My UK influencer work reached 2.8M impressions, my solo Amazon UK store completed 500+ orders, and a Xiaohongshu account I ran grew to 8,000+ followers in two months. First-Class in Digital Media from KCL, and LSE next.",
    ctaCV: "Download CV",
    aboutEyebrow: "About", aboutTitle: "Digital-media background, two years of overseas marketing & ops",
    aboutP1: "I'm Eve Yang, a First-Class Digital Media & Culture graduate from KCL, starting at LSE this year. For the past two years I've focused on overseas marketing and operations, owning several real projects: leading VOOPOO's UK influencer marketing at Vertex; running a UK Amazon store solo across sourcing, pricing, listing optimisation and advertising; and growing a Xiaohongshu account from 0 to 8,000+ followers.",
    aboutP2: "I use data and AI tools to drive market research, competitor analysis and creator selection, and can carry a project from research and strategy through to execution on my own. On a team I usually take the lead (MBTI: ENTJ). My English is close to native, so overseas-facing roles are what I'm most drawn to.",
    eduEyebrow: "Education", eduTitle: "Education & academic research",
    researchSubhead: "Academic research & essays", researchLead: "My research spans digital media, algorithms and user identity, with relevance to user research and specific industries.",
    expEyebrow: "Experience", expTitle: "Projects I've worked on and their results",
    expLead: "Pick a category to see the responsibilities and results of each role.",
    dutiesLabel: "Responsibilities", resultsLabel: "Results",
    contactTitle: "Get in touch", contactLead: "If you're looking for someone who can independently own overseas marketing and operations projects, I'd be glad to connect.",
    lblEmail: "Email", lblPhoneCN: "Phone (China)", lblPhoneUK: "Phone (UK)",
    dlEN: "Download CV (EN)", dlCN: "Download CV (中文)"
  }
};

const CONTACT = {
  email: "yueeve69@163.com",
  phoneCN: "+86 156 6344 8888",
  phoneUK: "+44 7436 445151",
  linkedin: "https://www.linkedin.com/in/yihan-yang-247a3232b",
  linkedinLabel: "in/yihan-yang",
  cvEN: DOCS + "Eve_Yang_CV_EN.pdf",
  cvCN: DOCS + "Eve_Yang_CV_CN.pdf"
};

/* ============================================================ */
let currentLang = localStorage.getItem("eve-lang") || "zh";
let currentCat = DATA.categories[0].key;
let currentView = "home";

function L() { return currentLang; }

function render() {
  document.documentElement.setAttribute("data-lang", L());
  document.documentElement.setAttribute("lang", L() === "zh" ? "zh-CN" : "en");
  const t = UI[L()];

  setText("nav-about", t.navAbout); setText("nav-edu", t.navEdu);
  setText("nav-exp", t.navExp); setText("nav-contact", t.navContact);
  setText("hero-role", t.heroRole); setText("hero-lede", t.heroLede);
  setText("cta-work", L() === "zh" ? "看我做过的事" : "See my work");
  setText("cta-cv", t.ctaCV);
  document.getElementById("cta-cv").href = L() === "zh" ? CONTACT.cvCN : CONTACT.cvEN;
  setText("hero-badge-val", DATA.heroBadge.value); setText("hero-badge-lbl", DATA.heroBadge[L()]);

  setText("about-eyebrow", t.aboutEyebrow); setText("about-title", t.aboutTitle);
  setText("about-p1", t.aboutP1); setText("about-p2", t.aboutP2);
  setText("edu-eyebrow", t.eduEyebrow); setText("edu-title", t.eduTitle);
  setText("research-subhead", t.researchSubhead); setText("research-lead", t.researchLead);
  setText("exp-eyebrow", t.expEyebrow); setText("exp-title", t.expTitle); setText("exp-lead", t.expLead);
  setText("contact-title", t.contactTitle); setText("contact-lead", t.contactLead);

  renderChips("chips"); renderChips("about-chips"); renderFacts();
  renderEducation(); renderResearch(); renderCatNav(); renderCatDetail(); renderContact();

  document.querySelectorAll(".lang-toggle button").forEach(b =>
    b.classList.toggle("active", b.dataset.lang === L()));
}

function setText(id, txt) { const el = document.getElementById(id); if (el) el.textContent = txt; }

function renderChips(id) {
  const el = document.getElementById(id); if (!el) return;
  el.innerHTML = DATA.chips[L()].map((c, i) => `<span class="chip ${i < 3 ? "solid" : ""}">${c}</span>`).join("");
}
function renderFacts() {
  document.getElementById("about-facts").innerHTML =
    DATA.facts.map(f => `<div class="fact"><b>${f.b}</b><span>${f[L()]}</span></div>`).join("");
}

function renderEducation() {
  document.getElementById("edu-list").innerHTML = `<div class="timeline">` + DATA.education.map(t => {
    const d = t[L()];
    return `<div class="tl-item reveal in">
      <div class="tl-date">${t.date}</div>
      <h3>${d.t}</h3><div class="tl-org">${d.org}</div>
      ${d.d ? `<div class="tl-desc">${d.d}</div>` : ""}
    </div>`;
  }).join("") + `</div>`;
}

function renderResearch() {
  document.getElementById("research-list").innerHTML = DATA.research.map(r => {
    const d = r[L()];
    return `<div class="research-item">
      <div><h3>${d.t}</h3><div class="meta">${d.meta}</div><div class="desc">${d.d}</div></div>
      <a href="${r.href}" target="_blank" rel="noopener">${L() === "zh" ? "阅读 PDF →" : "Read PDF →"}</a>
    </div>`;
  }).join("");
}

function catCount(key) { return DATA.work.filter(w => w.cat === key).length; }

function renderCatNav() {
  document.getElementById("cat-nav").innerHTML = DATA.categories.map(c =>
    `<button class="cat-btn ${c.key === currentCat ? "active" : ""}" data-cat="${c.key}">
       <span class="cat-name">${c[L()]}</span><span class="cat-count">${catCount(c.key)}</span>
     </button>`).join("");
  document.querySelectorAll(".cat-btn").forEach(b => b.addEventListener("click", () => {
    currentCat = b.dataset.cat; renderCatNav(); renderCatDetail();
    if (window.innerWidth <= 860) document.getElementById("cat-detail").scrollIntoView({ behavior: "smooth", block: "start" });
  }));
}

function renderCatDetail() {
  const t = UI[L()];
  const items = DATA.work.filter(w => w.cat === currentCat);
  document.getElementById("cat-detail").innerHTML = items.map(w => {
    const d = w[L()];
    const kind = w.kind ? `<span class="kind kind-${w.kind}">${KIND[w.kind][L()]}</span>` : "";
    const feat = w.featured ? `<span class="badge-featured">${L() === "zh" ? "精选" : "Featured"}</span>` : "";
    const highlights = d.highlights ? `<ul class="highlights">${d.highlights.map(h => `<li>${h}</li>`).join("")}</ul>` : "";
    const summary = d.summary ? `<p class="desc">${d.summary}</p>` : "";
    const context = w.context ? `<div class="context-note">ℹ︎ ${w.context[L()]}</div>` : "";
    const duties = d.duties ? `<div class="dr"><span class="dr-label">${t.dutiesLabel}</span><ul>${d.duties.map(x => `<li>${x}</li>`).join("")}</ul></div>` : "";
    const results = d.results ? `<div class="dr dr-results"><span class="dr-label">${t.resultsLabel}</span><ul>${d.results.map(x => `<li>${x}</li>`).join("")}</ul></div>` : "";
    const metrics = w.metrics ? `<div class="metrics">${w.metrics.map(m => `<div class="metric"><b>${m.b}</b><span>${m[L()]}</span></div>`).join("")}</div>` : "";
    const image = w.image ? `<figure class="card-image"><img src="${w.image.src}" alt="${w.image[L()]}" loading="lazy" /><figcaption>${w.image[L()]}</figcaption></figure>` : "";
    const links = w.links ? `<div class="card-links">${w.links.map(lk => {
      const ext = lk.href && lk.href.startsWith("http") ? ` target="_blank" rel="noopener"` : "";
      return `<a href="${lk.href}"${ext}>${lk[L()]}</a>`;
    }).join("")}</div>` : "";
    return `<article class="card">
      <div class="card-top"><span class="kicker">${kind}${d.kicker}</span><span class="period">${d.period}</span></div>
      <h3>${d.title} ${feat}</h3>
      ${highlights}${summary}${context}
      ${duties}${results}
      ${metrics}${image}${links}
    </article>`;
  }).join("");
}

function renderContact() {
  const t = UI[L()];
  document.getElementById("contact-methods").innerHTML = `
    <a href="mailto:${CONTACT.email}"><span class="label">${t.lblEmail}</span><span class="val">${CONTACT.email}</span></a>
    <a href="${CONTACT.linkedin}" target="_blank" rel="noopener"><span class="label">LinkedIn</span><span class="val">${CONTACT.linkedinLabel}</span></a>
    <a href="tel:${CONTACT.phoneCN.replace(/\s/g, "")}"><span class="label">${t.lblPhoneCN}</span><span class="val">${CONTACT.phoneCN}</span></a>
    <a href="tel:${CONTACT.phoneUK.replace(/\s/g, "")}"><span class="label">${t.lblPhoneUK}</span><span class="val">${CONTACT.phoneUK}</span></a>`;
  document.getElementById("dl-row").innerHTML = `
    <a class="btn" href="${CONTACT.cvEN}" download>${t.dlEN}</a>
    <a class="btn ghost" href="${CONTACT.cvCN}" download>${t.dlCN}</a>`;
}

/* ---- View router ---- */
const VIEWS = ["home", "about", "education", "experience", "contact"];
let balloons = null;
function showView(name, push) {
  if (!VIEWS.includes(name)) name = "home";
  currentView = name;
  document.querySelectorAll(".view").forEach(v => v.classList.toggle("active", v.dataset.view === name));
  document.querySelectorAll("[data-view]").forEach(a =>
    a.classList.toggle("nav-current", a.dataset.view === name && a.closest(".nav-links")));
  window.scrollTo({ top: 0, behavior: "auto" });
  if (name === "contact" && balloons) balloons.start();
  else if (balloons) balloons.stop();
  if (push && location.hash !== "#" + name) history.replaceState(null, "", "#" + name);
}

/* ---- Cursor-following avatar character ---- */
const AVATAR_SVG = `<svg viewBox="0 0 84 138" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="42" cy="128" rx="20" ry="5" fill="rgba(25,23,19,.12)"/>
  <path d="M20 40 Q12 84 22 108 L62 108 Q72 84 64 40 Z" fill="#20180f"/>
  <rect x="34" y="98" width="6.5" height="26" rx="3.2" fill="#2f2b34"/>
  <rect x="43" y="98" width="6.5" height="26" rx="3.2" fill="#2f2b34"/>
  <rect x="32" y="118" width="11" height="11" rx="3.5" fill="#a7dbe8"/>
  <rect x="41" y="118" width="11" height="11" rx="3.5" fill="#a7dbe8"/>
  <path d="M25 66 Q42 60 59 66 L61 102 Q42 108 23 102 Z" fill="#cba46f"/>
  <path d="M39 65 L45 65 L44 104 L40 104 Z" fill="#b98f57"/>
  <rect x="19" y="66" width="7.5" height="28" rx="3.7" fill="#cba46f"/>
  <g transform="rotate(20 60 64)"><rect x="56.5" y="52" width="7.5" height="26" rx="3.7" fill="#cba46f"/></g>
  <rect x="37" y="55" width="8" height="12" fill="#f1c9a6"/>
  <ellipse cx="42" cy="41" rx="20.5" ry="21.5" fill="#f6d5b2"/>
  <path d="M20.5 41 Q22 19 42 17 Q62 19 63.5 41 Q57 29 42 29 Q27 29 20.5 41 Z" fill="#20180f"/>
  <circle cx="34.5" cy="43" r="2.5" fill="#2a231e"/>
  <circle cx="49.5" cy="43" r="2.5" fill="#2a231e"/>
  <path d="M37 50 Q42 54 47 50" stroke="#b5654a" stroke-width="2" fill="none" stroke-linecap="round"/>
  <circle cx="31" cy="48" r="2.6" fill="#f5b8a8" opacity=".55"/>
  <circle cx="53" cy="48" r="2.6" fill="#f5b8a8" opacity=".55"/>
</svg>`;
function initAvatar() {
  const el = document.getElementById("avatar-follow");
  if (!el) return;
  if (window.matchMedia("(hover: none)").matches || window.innerWidth <= 720) { el.style.display = "none"; return; }
  el.innerHTML = AVATAR_SVG;
  let mx = innerWidth / 2, my = innerHeight / 2, ax = mx, ay = my, shown = false, ph = 0;
  addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; if (!shown) { shown = true; el.classList.add("on"); } });
  document.addEventListener("mouseleave", () => { el.classList.remove("on"); shown = false; });
  (function loop() {
    const tx = mx + 30, ty = my + 22;
    ax += (tx - ax) * 0.12; ay += (ty - ay) * 0.12;
    ph += 0.06;
    const bob = Math.sin(ph) * 2.5, tilt = Math.sin(ph * 0.6) * 4, dir = (mx > ax ? 1 : -1);
    el.style.transform = `translate(${ax}px, ${ay + bob}px) scaleX(${dir}) rotate(${tilt}deg)`;
    requestAnimationFrame(loop);
  })();
}

/* ---- Interactive balloons (contact) ---- */
function initBalloons() {
  const canvas = document.getElementById("balloon-canvas");
  const section = document.querySelector('.view[data-view="contact"]');
  if (!canvas || !section) return null;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return null;
  const ctx = canvas.getContext("2d");
  const COLORS = ["#c9b6f5", "#f5b6d0", "#f5d99b", "#a9e5c8", "#b6d4f5", "#f5c4a1"];
  let W = 0, H = 0, dpr = Math.min(devicePixelRatio || 1, 2);
  let items = [], raf = null;
  const p = { x: -999, y: -999, px: -999, py: -999, on: false };
  const G = 0.14, BOUNCE = -0.34, AIR = 0.992;
  function resize() {
    W = section.clientWidth; H = section.clientHeight;
    if (!W || !H) return;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.max(12, Math.min(22, Math.round(W / 72)));
    items = Array.from({ length: n }, (_, i) => {
      const r = 15 + (i * 41 % 14);
      return { r, color: COLORS[i % COLORS.length], phase: (i * 1.3) % 6.28,
        x: r + Math.random() * (W - 2 * r), y: H - r - (i % 4) * 26 - Math.random() * 20, vx: 0, vy: 0 };
    });
  }
  function draw(b) {
    ctx.save(); ctx.globalAlpha = 0.92;
    ctx.strokeStyle = "rgba(120,110,140,0.28)"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(b.x, b.y + b.r);
    ctx.quadraticCurveTo(b.x + Math.sin(b.phase) * 5, b.y + b.r + 14, b.x + Math.sin(b.phase) * 2, b.y + b.r + 26); ctx.stroke();
    ctx.fillStyle = b.color;
    ctx.beginPath(); ctx.ellipse(b.x, b.y, b.r * 0.82, b.r, 0, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = 0.42; ctx.fillStyle = "#fff";
    ctx.beginPath(); ctx.ellipse(b.x - b.r * 0.28, b.y - b.r * 0.34, b.r * 0.15, b.r * 0.25, -0.4, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = 0.92; ctx.fillStyle = b.color;
    ctx.beginPath(); ctx.moveTo(b.x - 3, b.y + b.r); ctx.lineTo(b.x + 3, b.y + b.r); ctx.lineTo(b.x, b.y + b.r + 5); ctx.closePath(); ctx.fill();
    ctx.restore();
  }
  function tick() {
    ctx.clearRect(0, 0, W, H);
    const pvx = p.x - p.px, pvy = p.y - p.py; p.px = p.x; p.py = p.y;
    for (const b of items) {
      b.vy += G; b.vx *= AIR; b.vy *= AIR; b.phase += 0.03;
      if (p.on) {
        const dx = b.x - p.x, dy = b.y - p.y, d = Math.hypot(dx, dy), R = b.r + 66;
        if (d < R) { const f = (R - d) / R, a = Math.atan2(dy, dx);
          b.vx += Math.cos(a) * f * 2.6 + pvx * 0.14 * f;
          b.vy += Math.sin(a) * f * 2.6 + pvy * 0.14 * f - f * 2.2; }
      }
      b.x += b.vx; b.y += b.vy;
      if (b.x < b.r) { b.x = b.r; b.vx *= -0.5; }
      if (b.x > W - b.r) { b.x = W - b.r; b.vx *= -0.5; }
      if (b.y > H - b.r) { b.y = H - b.r; b.vy *= BOUNCE; b.vx *= 0.82; if (Math.abs(b.vy) < 0.4) b.vy = 0; }
      if (b.y < b.r) { b.y = b.r; b.vy *= -0.4; }
    }
    for (let i = 0; i < items.length; i++) for (let j = i + 1; j < items.length; j++) {
      const a = items[i], c = items[j], dx = c.x - a.x, dy = c.y - a.y, d = Math.hypot(dx, dy), mn = a.r + c.r - 2;
      if (d > 0 && d < mn) { const o = (mn - d) / d * 0.5; a.x -= dx * o; a.y -= dy * o; c.x += dx * o; c.y += dy * o; }
    }
    items.forEach(draw);
    raf = requestAnimationFrame(tick);
  }
  const setPtr = (e) => {
    const rect = section.getBoundingClientRect();
    const cx = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
    const cy = (e.touches ? e.touches[0].clientY : e.clientY) - rect.top;
    if (!p.on) { p.px = cx; p.py = cy; } p.x = cx; p.y = cy; p.on = true;
  };
  section.addEventListener("mousemove", setPtr);
  section.addEventListener("touchmove", setPtr, { passive: true });
  section.addEventListener("mouseleave", () => { p.on = false; });
  addEventListener("resize", () => { dpr = Math.min(devicePixelRatio || 1, 2); if (raf) resize(); });
  return {
    start() { if (raf) return; resize(); if (W && H) tick(); },
    stop() { if (raf) { cancelAnimationFrame(raf); raf = null; } }
  };
}

/* ---- Init ---- */
document.addEventListener("DOMContentLoaded", () => {
  render();
  initAvatar();
  balloons = initBalloons();

  document.querySelectorAll(".lang-toggle button").forEach(b => b.addEventListener("click", () => {
    currentLang = b.dataset.lang; localStorage.setItem("eve-lang", currentLang); render();
    if (currentView === "contact" && balloons) balloons.start();
  }));

  document.querySelectorAll("[data-view]").forEach(a => a.addEventListener("click", (e) => {
    e.preventDefault(); showView(a.dataset.view, true);
    document.getElementById("nav-links").classList.remove("open");
  }));

  const menuBtn = document.getElementById("menu-btn");
  const links = document.getElementById("nav-links");
  menuBtn.addEventListener("click", () => links.classList.toggle("open"));

  // click ripple
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.addEventListener("click", (e) => {
      const host = e.target.closest(".btn, .cat-btn, .card-links a, .lang-toggle button");
      if (!host) return;
      host.classList.add("ripple-host");
      const r = host.getBoundingClientRect(), size = Math.max(r.width, r.height);
      const s = document.createElement("span");
      s.className = "ripple"; s.style.width = s.style.height = size + "px";
      s.style.left = (e.clientX - r.left - size / 2) + "px"; s.style.top = (e.clientY - r.top - size / 2) + "px";
      host.appendChild(s); setTimeout(() => s.remove(), 600);
    });
  }

  showView(VIEWS.includes(location.hash.slice(1)) ? location.hash.slice(1) : "home", false);
});
