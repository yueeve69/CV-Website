/* ============================================================
   Eve Yang · Portfolio — content model + rendering (bilingual)
   Edit the DATA / UI objects below to update the site. No build step.
   ============================================================ */

const DOCS = "assets/docs/";
const MARK_VIDEO = "https://drive.google.com/file/d/1YzPSOphTaAB-kbDiY272xLaE77fquLtd/view?usp=drive_link";

const DATA = {
  /* ---- Hero strength chips ---- */
  chips: {
    zh: ["ENTJ · 领导型", "海外达人营销", "跨境电商运营", "内容增长", "用户 & 市场调研", "活动执行", "AI 工具流", "中英双语"],
    en: ["ENTJ · Commander", "Overseas influencer marketing", "Cross-border e-commerce", "Content growth", "User & market research", "Event execution", "AI workflows", "Bilingual EN/中文"]
  },

  heroBadge: { value: "2.8M+", zh: "达人营销曝光", en: "Campaign impressions" },

  facts: [
    { b: "2.8M+", zh: "海外达人营销曝光", en: "Overseas campaign reach" },
    { b: "0→8,000", zh: "小红书两月涨粉", en: "Followers grown in 2 months" },
    { b: "500+", zh: "亚马逊订单", en: "Amazon orders" },
    { b: "300+", zh: "全运会统筹人数", en: "People coordinated" }
  ],

  /* ---- Experience categories (left nav) ---- */
  categories: [
    { key: "marketing", zh: "营销 & 达人营销", en: "Marketing & Influencer" },
    { key: "ecommerce", zh: "跨境电商 & 商家运营", en: "Cross-border E-commerce" },
    { key: "content", zh: "内容 & 用户运营", en: "Content & User Ops" },
    { key: "events", zh: "活动策划 & 执行", en: "Events" },
    { key: "product", zh: "产品 & 网站/游戏制作", en: "Product & Web / Game" },
    { key: "research", zh: "研究 & 洞察", en: "Research & Insight" }
  ],

  /* ---- Experience items ----
     Each: cat, [featured], zh/en {kicker, period, title, desc, highlights[]},
     optional metrics[], image{}, context{}, links[]  */
  work: [
    /* -------- Marketing & Influencer -------- */
    {
      cat: "marketing", featured: true,
      zh: { kicker: "Vertex Marketing · AI 海外达人运营（实习）", period: "2026.04 – 06",
            title: "VOOPOO 英国市场达人营销",
            desc: "负责 VOOPOO 在英国市场 TikTok、Instagram、Reddit 上的达人营销。我用 Perplexity、Claude、Google Trends 做市场和竞品调研，AI 辅助从 600+ 海外 KOL/KOC 里筛出中腰部达人，独立跟 120+ 位创作者建联、谈合作，推进产品测评、UGC 和短视频，再看投放数据不断调策略。",
            highlights: ["市场 & 竞品调研", "KOL/KOC 筛选策略", "达人建联 & 商务沟通", "数据化投放优化"] },
      en: { kicker: "Vertex Marketing · AI Influencer Ops (Intern)", period: "Apr – Jun 2026",
            title: "VOOPOO UK Influencer Campaign",
            desc: "Ran VOOPOO's UK influencer marketing on TikTok, Instagram and Reddit. I did market and competitor research with Perplexity, Claude and Google Trends, AI-screened mid-tier creators out of 600+ KOLs/KOCs, and personally reached out to and negotiated with 120+ creators for reviews, UGC and short-video work — then adjusted the strategy on performance data.",
            highlights: ["Market & competitor research", "KOL/KOC screening", "Creator outreach & deals", "Data-driven optimisation"] },
      context: { zh: "VOOPOO 是主打海外市场的电子雾化品牌，主要客群在欧美，营销高度依赖海外社媒与达人内容。", en: "VOOPOO is an overseas-focused vaping/atomiser brand; its growth relies heavily on Western social media and creator content." },
      metrics: [
        { b: "2.8M+", zh: "曝光", en: "Impressions" },
        { b: "7.2%", zh: "平均互动率", en: "Avg. engagement" },
        { b: "600+", zh: "达人筛选", en: "Creators screened" }
      ]
    },
    {
      cat: "marketing", featured: true,
      zh: { kicker: "KCL · 数字营销", period: "2026",
            title: "Aesop 数字营销 Campaign",
            desc: "为 Aesop 英国市场设计了一套数字营销方案，用社媒、达人和邮件三条线，明确每条线怎么做、优劣势和伦理边界。我把重点放在——怎么把前期调研的结论，变成品牌真正能落地、又不破坏调性的商业动作（非硬广、以价值内容切入）。",
            highlights: ["多渠道营销策略", "调研结论 → 商业建议", "品牌调性把控"] },
      en: { kicker: "KCL · Digital Marketing", period: "2026",
            title: "Aesop's Digital Marketing Campaign",
            desc: "A digital marketing plan for Aesop UK across three lines — social, influencer and email — with the how, the trade-offs and the ethical limits of each. My focus was turning the earlier research into commercial actions the brand could actually run without breaking its tone (value-led, not hard-sell).",
            highlights: ["Multi-channel strategy", "Research → commercial actions", "Brand-tone consistency"] },
      highlight: { zh: "老师建议突出的点：把调研结论落到商业应用建议", en: "Tutor's note built in: land the research as commercial recommendations" },
      links: [{ zh: "阅读方案 PDF", en: "Read campaign (PDF)", href: DOCS + "aesop-marketing-campaign.pdf" }]
    },
    {
      cat: "marketing",
      zh: { kicker: "KCL · 数字营销", period: "2026",
            title: "Aesop 英国市场受众 & 情境分析",
            desc: "Campaign 前的调研底稿。我用 PESTLE 和 SWOT 拆解 Aesop 在英国的处境，锁定 25–34 岁、年收入约 £30–40k 的都市年轻女性，从经济、社会、技术几个维度说清楚她们是谁、在意什么。",
            highlights: ["PESTLE / SWOT 框架", "目标受众定位", "用户画像 persona"] },
      en: { kicker: "KCL · Digital Marketing", period: "2026",
            title: "Aesop UK — Audience & Situational Analysis",
            desc: "The research groundwork behind the campaign. I used PESTLE and SWOT to break down Aesop's position in the UK and defined a target of urban women aged 25–34 earning ~£30–40k — who they are and what they care about, across economic, social and tech angles.",
            highlights: ["PESTLE / SWOT", "Audience targeting", "User personas"] },
      links: [{ zh: "阅读报告 PDF", en: "Read report (PDF)", href: DOCS + "aesop-audience-analysis.pdf" }]
    },

    /* -------- Cross-border E-commerce -------- */
    {
      cat: "ecommerce", featured: true,
      zh: { kicker: "Amazon UK · 跨境电商运营", period: "2025.04 – 2026.04",
            title: "宠物舔舐碗 · Amazon FBA 独立操盘",
            desc: "我独立开了一家英国站宠物用品店，从头到尾自己扛：用 Helium 10、Keepa 选品定价，搭 Listing、优化标题关键词主图和 A+ 页面，跑 PPC 广告，管库存和物流。一年下来做到 500+ 单、约 £3,500 销售额，项目整体净利率约 20%。",
            highlights: ["选品 & 定价", "Listing & 关键词优化", "PPC 广告投放", "库存 & 数据分析"] },
      en: { kicker: "Amazon UK · Cross-border E-commerce", period: "Apr 2025 – Apr 2026",
            title: "Pet Lick Mat · Solo Amazon FBA Store",
            desc: "I opened and ran a UK pet-products store entirely on my own: sourcing and pricing with Helium 10 and Keepa, building and optimising the listing (title, keywords, main image, A+), running PPC, and managing inventory and fulfilment. Over the year: 500+ orders, ~£3,500 revenue, ~20% net margin.",
            highlights: ["Sourcing & pricing", "Listing & keyword SEO", "PPC advertising", "Inventory & analytics"] },
      metrics: [
        { b: "500+", zh: "订单", en: "Orders" },
        { b: "≈£3,500", zh: "销售额", en: "Revenue" },
        { b: "≈20%", zh: "净利率", en: "Net margin" }
      ],
      image: { src: "assets/img/amazon-product.jpg", zh: "我运营的产品：马卡龙色系宠物慢食垫（真实产品图）", en: "The product I ran: macaron-tone pet slow-feeder mats (real product)" }
    },

    /* -------- Content & User Ops -------- */
    {
      cat: "content", featured: true,
      zh: { kicker: "小红书 · 账号运营", period: "2023.12 – 2024.12",
            title: "生活方式账号 0 → 8,000+ 粉",
            desc: "从 0 起一个生活方式账号，靠内容选题、标签优化和踩热点，两个月做到 8,000+ 粉，再通过 Adidas 等品牌合作变现。我习惯每条内容都复盘数据，跑出过几条爆款，最高一条 87 万观看。",
            highlights: ["内容选题 & 定位", "涨粉增长", "数据复盘", "品牌合作变现"] },
      en: { kicker: "Xiaohongshu (RED) · Account Ops", period: "Dec 2023 – Dec 2024",
            title: "Lifestyle Account 0 → 8,000+ Followers",
            desc: "Grew a lifestyle account from zero to 8,000+ in two months through content selection, tag optimisation and riding trends, then monetised via brand deals (incl. Adidas). I review the data on every post — a few went viral, the top one hitting 870k views.",
            highlights: ["Content strategy", "Audience growth", "Data reviews", "Brand monetisation"] },
      metrics: [
        { b: "8,000+", zh: "粉丝（2 个月）", en: "Followers (2 mo)" },
        { b: "870k+", zh: "单条爆款观看", en: "Top post views" },
        { b: "40k+", zh: "单条点赞", en: "Top post likes" }
      ]
      /* 好笔记外链后续补充 —— add note links here later */
    },
    {
      cat: "content", featured: true, type: "proposal",
      zh: { kicker: "rednote（小红书海外）· 求职方案", period: "2026",
            title: "伦敦社区冷启动：一个月引入 100 位创作者",
            desc: "为 rednote 伦敦社区运营岗写的一份落地方案。我按周排了节奏：先拿下头几个创作者的 yes、做好新手引导手册、订好线下 workshop 的场地，再靠转介绍和创作者圈层扩散，最后帮一批人发出第一条笔记。目标是一个月引入 100 位创作者，并留下一个能自己转起来的小社区。",
            highlights: ["社区冷启动", "用户增长路径", "落地方案撰写"] },
      en: { kicker: "rednote · Community Activation Proposal", period: "2026",
            title: "Activating 100 London Creators in One Month",
            desc: "A concrete plan I wrote for rednote's London community role. I paced it week by week: land the first few yeses, finish a starter guide, book the workshop space, spread through referrals and creator circles, then help a batch publish their first notes — aiming for 100 London creators in a month and a small community that keeps itself going.",
            highlights: ["Community cold-start", "Growth roadmap", "Actionable planning"] },
      links: [{ zh: "查看方案 PDF", en: "View proposal (PDF)", href: DOCS + "rednote-community-activation-plan.pdf" }]
    },

    /* -------- Events -------- */
    {
      cat: "events", featured: true,
      zh: { kicker: "深圳广电集团 SZMG · 活动营销 & 赛事执行（实习）", period: "2025.07 – 09",
            title: "第十五届全运会开幕式 · 活动统筹",
            desc: "参与全运会开幕式的方案策划和流程脚本，组织协调 300+ 人跑完 3 次全流程彩排，现场还遇上颁奖嘉宾临时缺席，我顶上处理，最后流程 0 失误。同时也做官媒公众号的内容排版，靠二维码把 500+ 现场观众引进社群。",
            highlights: ["活动统筹", "现场突发处理", "跨部门协调", "公众号内容运营"] },
      en: { kicker: "SZMG · Event & Sports Ops (Intern)", period: "Jul – Sep 2025",
            title: "15th National Games Opening Ceremony",
            desc: "Worked on the ceremony's planning and run-of-show, coordinated 300+ people through three full rehearsals, and handled a guest's last-minute no-show live — the run went off with zero errors. I also ran the official WeChat content, converting 500+ attendees into the community via QR journeys.",
            highlights: ["Event coordination", "Live problem-solving", "Cross-team work", "WeChat content"] },
      metrics: [
        { b: "300+", zh: "统筹人数", en: "People coordinated" },
        { b: "500+", zh: "社群转化", en: "Community converts" },
        { b: "0", zh: "执行失误", en: "Execution errors" }
      ]
    },

    /* -------- Product & Web / Game -------- */
    {
      cat: "product", featured: true,
      zh: { kicker: "MarkSmarter · Team Leader", period: "2024.10 – 2025.01",
            title: "AI 时代的学术写作 & 评估平台",
            desc: "带队做的一个产品：一个面向学生和教授两端的 AI 辅助写作/评估平台。我是 leader，负责分工、设计两端的功能，还有做用户 persona（学生端、教授端各一套）。整个流程走了一遍——二次调研、想法评估、Figma 原型、再到用户测试迭代。",
            highlights: ["用户调研 & Persona", "双端产品功能设计", "Figma 原型", "团队管理"] },
      en: { kicker: "MarkSmarter · Team Leader", period: "Oct 2024 – Jan 2025",
            title: "An AI-era Academic Writing & Assessment Platform",
            desc: "A product I led: an AI-assisted writing/assessment platform for both students and professors. As team leader I owned task allocation, feature design for both sides, and the user personas (one each for students and professors) — running the whole loop from secondary research and idea evaluation to a Figma prototype and user-testing iterations.",
            highlights: ["User research & personas", "Dual-sided product design", "Figma prototyping", "Team leadership"] },
      links: [
        { zh: "项目文档 PDF", en: "Project write-up (PDF)", href: MARK_VIDEO },
        { zh: "成品演示视频", en: "Prototype demo", href: MARK_VIDEO }
      ]
    },
    {
      cat: "product", secondary: true,
      zh: { kicker: "创意作品 · Twine 交互叙事", period: "2026.03 – 05",
            title: "In Pieces · 交互式故事",
            desc: "用 Twine 做的一个交互式叙事作品，有多分支剧情、图像和音频——一个关于寻找和记忆的故事。从写剧本、设计分支到配图配音，自己搭出来的。",
            highlights: ["交互叙事设计", "多媒体制作（图/音）", "用户体验"] },
      en: { kicker: "Creative · Twine Interactive Fiction", period: "Mar – May 2026",
            title: "In Pieces · An Interactive Story",
            desc: "An interactive narrative I built in Twine, with branching story, images and audio — a story about searching and memory. Wrote the script, designed the branches and put together the visuals and sound myself.",
            highlights: ["Interactive design", "Multimedia (image/audio)", "User experience"] },
      links: [
        { zh: "在线体验", en: "Play online", href: DOCS + "interactive-story-in-pieces.html" },
        { zh: "画面稿", en: "Storyboard", href: "https://docs.google.com/presentation/d/1CMCHa4MxRr-RqbAYHhoJHGwbgYHKzNJLebsxZCORTkw/edit?usp=sharing" }
      ]
    },

    /* -------- Research & Insight -------- */
    {
      cat: "research", featured: true,
      zh: { kicker: "KCL · 本科毕业论文", period: "2026",
            title: "小红书算法推荐与「母职身份」的建构",
            desc: "我的 KCL 本科毕业论文。研究小红书的算法推荐是怎么参与建构用户的「母职身份」的，包含文献综述、研究方法设计和质性分析。对母婴、内容平台方向的用户研究很有参考价值。",
            highlights: ["深度用户研究", "算法 & 身份分析", "质性研究方法"] },
      en: { kicker: "KCL · BA Dissertation", period: "2026",
            title: "Algorithms & the Construction of Maternal Identity on RED",
            desc: "My KCL undergraduate dissertation, on how Xiaohongshu's algorithmic recommendation participates in constructing users' maternal identity — with literature review, methodology and qualitative analysis. Directly relevant to user research for mother-and-baby and content-platform roles.",
            highlights: ["Deep user research", "Algorithms & identity", "Qualitative methods"] },
      links: [{ zh: "阅读论文 PDF", en: "Read dissertation (PDF)", href: DOCS + "xiaohongshu-maternal-identity-research.pdf" }]
    },
    {
      cat: "research",
      zh: { kicker: "KCL · 数字亲密关系", period: "2026",
            title: "性别视角下的婚内数字亲密行为",
            desc: "从性别视角研究婚姻关系中的数字亲密行为、亲密感与同意。对两性健康、femtech 品牌（如杜蕾斯、冈本这类）的用户与内容洞察有参考价值。",
            highlights: ["性别视角研究", "亲密关系 & 同意"] },
      en: { kicker: "KCL · Digital Intimacy", period: "2026",
            title: "Gender & Digital Intimacy in Marriage",
            desc: "A gendered study of digital intimacy, closeness and consent within marriage — relevant to user and content insight for sexual-wellness / femtech brands.",
            highlights: ["Gendered research", "Intimacy & consent"] },
      links: [{ zh: "阅读研究 PDF", en: "Read research (PDF)", href: DOCS + "marital-sexting-research.pdf" }]
    },
    {
      cat: "research",
      zh: { kicker: "KCL · 数字亲密关系", period: "2026",
            title: "AI 伴侣与亚文化中的亲密关系",
            desc: "研究 AI 情感/陪伴类产品如何重塑特定人群的亲密关系与需求。对情感陪伴、两性产品这类方向有洞察。",
            highlights: ["亚文化研究", "AI 情感产品洞察"] },
      en: { kicker: "KCL · Digital Intimacy", period: "2026",
            title: "AI Companions & Intimacy in Online Subcultures",
            desc: "How AI companion products reshape intimacy and needs for specific communities — insight for companionship and intimate-product categories.",
            highlights: ["Subculture research", "AI companion insight"] },
      links: [{ zh: "阅读研究 PDF", en: "Read research (PDF)", href: DOCS + "ai-sexbot-intimacy-research.pdf" }]
    },
    {
      cat: "research",
      zh: { kicker: "KCL · 数字出版", period: "2026",
            title: "移动设备对儿童数字出版的影响",
            desc: "以儿童出版为例，分析移动和平板设备怎么重塑了内容形态、阅读体验和竞争格局。",
            highlights: ["行业分析", "数字化趋势"] },
      en: { kicker: "KCL · Digital Publishing", period: "2026",
            title: "Mobile Devices & Children's Digital Publishing",
            desc: "Using children's publishing as a case, how mobile and tablet devices reshape content form, reading experience and competition.",
            highlights: ["Industry analysis", "Digital trends"] },
      links: [{ zh: "阅读论文 PDF", en: "Read essay (PDF)", href: DOCS + "childrens-digital-publishing.pdf" }]
    },
    {
      cat: "research", secondary: true,
      zh: { kicker: "创意写作 · 哲学向科幻", period: "2026",
            title: "短篇小说 · 关于妈妈的记忆",
            desc: "一篇哲学视角的科幻短篇，写「用 AI 复现逝去的亲人」——记忆、真实和情感的边界在哪。",
            highlights: ["创意写作", "思辨 & 伦理"] },
      en: { kicker: "Creative Writing · Speculative Fiction", period: "2026",
            title: "Short Story · A Memory of Mum",
            desc: "A philosophically-grounded speculative short story about recreating a lost parent with AI — where memory, authenticity and feeling end.",
            highlights: ["Creative writing", "Critical thinking"] },
      links: [{ zh: "阅读全文 PDF", en: "Read story (PDF)", href: DOCS + "fiction-a-memory-of-mum.pdf" }]
    }
  ],

  /* ---- Timeline, grouped: education / internship / project ---- */
  timelineGroups: [
    {
      zh: "教育经历", en: "Education",
      items: [
        { date: "2026.09 – 2027.09", zh: { t: "伦敦政治经济学院 LSE", org: "性别、媒体与文化 · 文学硕士 (MA)", d: "" },
          en: { t: "London School of Economics (LSE)", org: "MA Gender, Media & Culture", d: "" } },
        { date: "2023.09 – 2026.06", zh: { t: "伦敦国王学院 KCL", org: "数字媒体与文化 · 一等荣誉学士 (First-Class)", d: "" },
          en: { t: "King's College London (KCL)", org: "BA Digital Media & Culture · First-Class Honours", d: "" } }
      ]
    },
    {
      zh: "实习经历", en: "Internships",
      items: [
        { date: "2026.04 – 2026.06", zh: { t: "AI 海外达人运营（实习）", org: "深圳 Vertex Marketing", d: "VOOPOO 英国市场达人营销，2.8M+ 曝光。" },
          en: { t: "AI Influencer Ops (Intern)", org: "Vertex Marketing, Shenzhen", d: "VOOPOO UK influencer campaigns, 2.8M+ impressions." } },
        { date: "2025.07 – 2025.09", zh: { t: "活动营销 & 赛事执行（实习）", org: "深圳广播电影电视集团 SZMG", d: "全运会开幕式，统筹 300+ 人。" },
          en: { t: "Event & Sports Ops (Intern)", org: "Shenzhen Media Group (SZMG)", d: "National Games ceremony, 300+ people." } }
      ]
    },
    {
      zh: "项目 & 创业经历", en: "Projects & Ventures",
      items: [
        { date: "2025.04 – 2026.04", zh: { t: "跨境电商 · Amazon 英国站", org: "个人创业项目", d: "宠物用品 FBA 独立操盘，500+ 订单、约 20% 净利率。" },
          en: { t: "Cross-border E-commerce · Amazon UK", org: "Solo venture", d: "Ran a pet-products FBA store solo, 500+ orders, ~20% margin." } },
        { date: "2023.12 – 2024.12", zh: { t: "小红书账号运营", org: "个人项目", d: "0→8,000+ 粉，品牌合作变现。" },
          en: { t: "Xiaohongshu Account Ops", org: "Personal project", d: "0→8,000+ followers, brand deals." } }
      ]
    }
  ]
};

/* ---- Experience "kind" tag (internship / project / academic) ---- */
const KIND = {
  internship: { zh: "实习", en: "Internship" },
  project: { zh: "项目 · 创业", en: "Project" },
  academic: { zh: "学术", en: "Academic" }
};
function kindOf(w) {
  const k = w.zh.kicker;
  if (k.includes("实习")) return "internship";
  if (w.cat === "research") return "academic";
  if (k.includes("数字营销")) return "academic"; // Aesop coursework
  return "project";
}

/* ---- Static UI copy ---- */
const UI = {
  zh: {
    navAbout: "关于", navExp: "经历", navContact: "联系",
    heroRole: "帮品牌把生意做到海外",
    heroSub: "达人营销 · 跨境电商 · 内容增长",
    heroLede: "达人营销、跨境电商、内容运营——这三件事我都亲手做过，也都做出了结果：280 万+ 曝光、500+ 订单、两个月把一个账号从 0 带到 8,000+ 粉。KCL 数字媒体一等毕业，下一站 LSE。",
    ctaWork: "看我做过什么", ctaCV: "下载简历",
    aboutEyebrow: "关于我", aboutTitle: "把海外项目独立做出结果的人",
    aboutP1: "我是杨怿涵。这两年我没只待在课堂里：在 Vertex，我操盘 VOOPOO 的英国达人营销；我自己开了一家 Amazon 英国店，从选品、定价到广告全都一手做；还把一个小红书账号从 0 带到 8,000+ 粉，跑出过 87 万观看的爆款。",
    aboutP2: "我做事的路子很清楚——先用数据和 AI 工具把市场和用户摸透，再动手，一个人也能从头扛到尾。在团队里，我通常是那个定方向、拉着大家往前跑的人（是的，标准 ENTJ）。英语几乎是我的第二母语，所以「出海」是我最想去的方向。",
    expEyebrow: "经历 & 作品", expTitle: "我做过什么 · 能为你做什么",
    expLead: "下面每一段，都是我真刀真枪做出来、也拿到过结果的。挑一类，点开看我具体怎么做的。",
    timelineEyebrow: "时间线", timelineTitle: "教育 · 实习 · 项目",
    contactTitle: "聊聊？我随时都在",
    contactLead: "如果你需要一个能独立把海外项目做起来、还能带着团队往前跑的人——给我发条消息就好。",
    lblEmail: "邮箱", lblPhoneCN: "电话（中国）", lblPhoneUK: "电话（英国）",
    dlEN: "下载简历（英文）", dlCN: "下载简历（中文）"
  },
  en: {
    navAbout: "About", navExp: "Experience", navContact: "Contact",
    heroRole: "I help brands take their business overseas",
    heroSub: "Influencer marketing · Cross-border e-commerce · Content growth",
    heroLede: "Influencer marketing, cross-border e-commerce, content operations — I've done all three myself, and each one delivered: 2.8M+ impressions, 500+ orders, one account grown from 0 to 8,000+ in two months. First-Class in Digital Media from KCL; LSE next.",
    ctaWork: "See what I've done", ctaCV: "Download CV",
    aboutEyebrow: "About", aboutTitle: "Someone who runs an overseas project and brings back results",
    aboutP1: "I'm Eve Yang. These two years I didn't just sit in lectures: at Vertex I ran VOOPOO's UK influencer marketing; I opened my own Amazon UK store and did everything from sourcing and pricing to ads; and I grew a Xiaohongshu account from 0 to 8,000+, with a top post at 870k views.",
    aboutP2: "The way I work is clear — understand the market and users first with data and AI tools, then act, and I can carry it end to end on my own. On a team I'm usually the one setting the direction and pulling everyone forward (yes, a textbook ENTJ). My English is near-native, so going global is exactly where I want to be.",
    expEyebrow: "Experience & Work", expTitle: "What I've done · what I can do for you",
    expLead: "Every one below is real, hands-on work that got results. Pick a category and open it to see exactly how I did it.",
    timelineEyebrow: "Timeline", timelineTitle: "Education · Internships · Projects",
    contactTitle: "Let's talk — I'm around",
    contactLead: "If you need someone who can run an overseas project solo and pull a team along, just send me a message.",
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

/* ============================================================
   Rendering
   ============================================================ */
let currentLang = localStorage.getItem("eve-lang") || "zh";
let currentCat = DATA.categories[0].key;

function L() { return currentLang; }

function render() {
  document.documentElement.setAttribute("data-lang", L());
  document.documentElement.setAttribute("lang", L() === "zh" ? "zh-CN" : "en");
  const t = UI[L()];

  setText("nav-about", t.navAbout); setText("nav-exp", t.navExp); setText("nav-contact", t.navContact);
  setText("hero-role", t.heroRole); setText("hero-sub", t.heroSub); setText("hero-lede", t.heroLede);
  setText("cta-work", t.ctaWork); setText("cta-cv", t.ctaCV);
  document.getElementById("cta-cv").href = L() === "zh" ? CONTACT.cvCN : CONTACT.cvEN;

  setText("about-eyebrow", t.aboutEyebrow); setText("about-title", t.aboutTitle);
  setText("about-p1", t.aboutP1); setText("about-p2", t.aboutP2);
  setText("exp-eyebrow", t.expEyebrow); setText("exp-title", t.expTitle); setText("exp-lead", t.expLead);
  setText("timeline-eyebrow", t.timelineEyebrow); setText("timeline-title", t.timelineTitle);
  setText("contact-title", t.contactTitle); setText("contact-lead", t.contactLead);
  setText("hero-badge-val", DATA.heroBadge.value); setText("hero-badge-lbl", DATA.heroBadge[L()]);

  renderChips(); renderFacts(); renderCatNav(); renderCatDetail();
  renderTimeline(); renderContact();

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
  const items = DATA.work.filter(w => w.cat === currentCat);
  document.getElementById("cat-detail").innerHTML = items.map(w => {
    const d = w[L()];
    const metrics = w.metrics ? `<div class="metrics">${w.metrics.map(m =>
      `<div class="metric"><b>${m.b}</b><span>${m[L()]}</span></div>`).join("")}</div>` : "";
    const highlights = d.highlights ? `<ul class="highlights">${d.highlights.map(h =>
      `<li>${h}</li>`).join("")}</ul>` : "";
    const context = w.context ? `<div class="context-note">ℹ︎ ${w.context[L()]}</div>` : "";
    const image = w.image ? `<figure class="card-image"><img src="${w.image.src}" alt="${w.image[L()]}" loading="lazy" /><figcaption>${w.image[L()]}</figcaption></figure>` : "";
    const highlightNote = w.highlight ? `<div class="highlight-note">✦ ${w.highlight[L()]}</div>` : "";
    const links = w.links ? `<div class="card-links">${w.links.map(lk => {
      const ext = lk.href && lk.href.startsWith("http") ? ` target="_blank" rel="noopener"` : "";
      return `<a href="${lk.href}"${ext}>${lk[L()]}</a>`;
    }).join("")}</div>` : "";
    const feat = w.featured ? `<span class="badge-featured">${L() === "zh" ? "精选" : "Featured"}</span>` : "";
    const kind = KIND[kindOf(w)];
    const kindBadge = `<span class="kind kind-${kindOf(w)}">${kind[L()]}</span>`;
    return `<article class="card reveal">
      <div class="card-top"><span class="kicker">${kindBadge}${d.kicker}</span><span class="period">${d.period}</span></div>
      <h3>${d.title} ${feat}</h3>
      ${highlights}
      <p class="desc">${d.desc}</p>
      ${context}${metrics}${image}${highlightNote}${links}
    </article>`;
  }).join("");
  observeReveals();
}

function renderTimeline() {
  document.getElementById("timeline-list").innerHTML = DATA.timelineGroups.map(g => {
    const items = g.items.map(t => {
      const d = t[L()];
      return `<div class="tl-item reveal">
        <div class="tl-date">${t.date}</div>
        <h3>${d.t}</h3><div class="tl-org">${d.org}</div>
        ${d.d ? `<div class="tl-desc">${d.d}</div>` : ""}
      </div>`;
    }).join("");
    return `<div class="tl-group">
      <h3 class="tl-group-title">${g[L()]}</h3>
      <div class="timeline">${items}</div>
    </div>`;
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

/* ---- Reveal on scroll ---- */
let io;
function observeReveals() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal").forEach(el => el.classList.add("in")); return;
  }
  if (!io) io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal:not(.in)").forEach(el => io.observe(el));
  clearTimeout(observeReveals._t);
  observeReveals._t = setTimeout(() =>
    document.querySelectorAll(".reveal:not(.in)").forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("in");
    }), 1200);
}

/* ---- Lights-off flashlight mode ---- */
function initLights() {
  const btn = document.getElementById("lights-btn");
  const hint = document.getElementById("lights-hint");
  if (!btn) return;
  const setHint = () => { hint.textContent = L() === "zh" ? "移动鼠标照亮 · 再点灯泡开灯" : "Move your cursor to light the way · click the bulb again"; };
  const move = (e) => {
    const x = e.touches ? e.touches[0].clientX : e.clientX;
    const y = e.touches ? e.touches[0].clientY : e.clientY;
    document.documentElement.style.setProperty("--mx", x + "px");
    document.documentElement.style.setProperty("--my", y + "px");
  };
  btn.addEventListener("click", () => {
    const on = document.body.classList.toggle("lights-off");
    btn.textContent = on ? "🔦" : "💡";
    if (on) { setHint(); window.addEventListener("mousemove", move); window.addEventListener("touchmove", move, { passive: true }); }
    else { window.removeEventListener("mousemove", move); window.removeEventListener("touchmove", move); }
  });
}

/* ---- Interactive balloons (contact section) ---- */
function initBalloons() {
  const canvas = document.getElementById("balloon-canvas");
  const section = document.getElementById("contact");
  if (!canvas || !section) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const ctx = canvas.getContext("2d");
  const COLORS = ["#c9b6f5", "#f5b6d0", "#f5d99b", "#a9e5c8", "#b6d4f5"];
  let W = 0, H = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
  let balloons = [], pointer = { x: -999, y: -999, on: false }, raf = null, t = 0;

  function resize() {
    W = section.clientWidth; H = section.clientHeight;
    canvas.width = W * dpr; canvas.height = H * dpr;
    canvas.style.width = W + "px"; canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.max(6, Math.min(12, Math.round(W / 130)));
    balloons = Array.from({ length: n }, (_, i) => spawn(i, true));
  }
  function spawn(i, initial) {
    const r = 16 + (i * 37 % 16);
    return { baseX: 24 + ((i * 97) % Math.max(1, W - 48)), amp: 8 + (i * 13 % 16),
      phase: (i * 1.7) % 6.28, r, x: 0,
      y: initial ? (H * (i / 10) + (i * 53 % 80)) : H + r + 30,
      vy: 0.25 + (i % 5) * 0.09, color: COLORS[i % COLORS.length] };
  }
  function draw(b) {
    ctx.save(); ctx.globalAlpha = 0.9;
    ctx.strokeStyle = "rgba(120,110,140,0.3)"; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(b.x, b.y + b.r);
    ctx.quadraticCurveTo(b.x + Math.sin(b.phase) * 6, b.y + b.r + 16, b.x, b.y + b.r + 28); ctx.stroke();
    ctx.fillStyle = b.color;
    ctx.beginPath(); ctx.ellipse(b.x, b.y, b.r * 0.82, b.r, 0, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = 0.4; ctx.fillStyle = "#fff";
    ctx.beginPath(); ctx.ellipse(b.x - b.r * 0.28, b.y - b.r * 0.34, b.r * 0.15, b.r * 0.25, -0.4, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = 0.9; ctx.fillStyle = b.color;
    ctx.beginPath(); ctx.moveTo(b.x - 3, b.y + b.r); ctx.lineTo(b.x + 3, b.y + b.r); ctx.lineTo(b.x, b.y + b.r + 5); ctx.closePath(); ctx.fill();
    ctx.restore();
  }
  function tick() {
    ctx.clearRect(0, 0, W, H); t += 1;
    for (const b of balloons) {
      b.y -= b.vy; b.phase += 0.012;
      b.x = b.baseX + Math.sin(b.phase) * b.amp;
      if (pointer.on) {
        const dx = b.x - pointer.x, dy = b.y - pointer.y, d = Math.hypot(dx, dy);
        if (d < 130 && d > 0.1) { const f = (130 - d) / 130; const a = Math.atan2(dy, dx);
          b.baseX += Math.cos(a) * f * 3.4; b.y += Math.sin(a) * f * 3.4; }
      }
      b.baseX = Math.max(20, Math.min(W - 20, b.baseX));
      if (b.y < -b.r - 34) Object.assign(b, spawn((Math.random() * 1000) | 0, false));
    }
    balloons.forEach(draw);
    raf = requestAnimationFrame(tick);
  }
  section.addEventListener("mousemove", (e) => {
    const rect = section.getBoundingClientRect();
    pointer.x = e.clientX - rect.left; pointer.y = e.clientY - rect.top; pointer.on = true;
  });
  section.addEventListener("mouseleave", () => { pointer.on = false; });
  window.addEventListener("resize", () => { dpr = Math.min(window.devicePixelRatio || 1, 2); resize(); });
  // start only when section near viewport (perf)
  const io2 = new IntersectionObserver((es) => es.forEach(e => {
    if (e.isIntersecting) { if (!raf) { resize(); tick(); } }
    else if (raf) { cancelAnimationFrame(raf); raf = null; }
  }), { threshold: 0.02 });
  io2.observe(section);
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

  initLights();
  initBalloons();

  // Playful click ripple on interactive elements
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) {
    document.addEventListener("click", (e) => {
      const host = e.target.closest(".btn, .cat-btn, .card-links a, .lang-toggle button");
      if (!host) return;
      host.classList.add("ripple-host");
      const r = host.getBoundingClientRect();
      const span = document.createElement("span");
      const size = Math.max(r.width, r.height);
      span.className = "ripple";
      span.style.width = span.style.height = size + "px";
      span.style.left = (e.clientX - r.left - size / 2) + "px";
      span.style.top = (e.clientY - r.top - size / 2) + "px";
      host.appendChild(span);
      setTimeout(() => span.remove(), 600);
    });
  }
});
