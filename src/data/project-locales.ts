import type { Language } from "@/data/locales";

type LocalizedProject = { category: string; subtitle: string; description: string; features: string[] };
type ProjectCopy = Record<string, LocalizedProject>;

export const projectLocales: Record<Language, ProjectCopy> = {
  bm: {
    "syahmiaof-editorial": { category: "Web & Editorial", subtitle: "Pengalaman Jenama Peribadi Sinematik", description: "Laman editorial dengan animasi GSAP, susun atur berlapis dan navigasi dalam tiga bahasa.", features: ["Animasi GSAP dan paralaks berlapis", "Tipografi Didone editorial", "Next.js App Router dan Tailwind CSS", "Reka bentuk responsif untuk pelbagai saiz skrin"] },
    "cloud-nexus-engine": { category: "Cloud & Infra", subtitle: "Infrastruktur Teragih dan Automasi Kluster", description: "Platform orkestrasi awan untuk penggunaan kluster kontena, pemantauan masa nyata dan keselamatan data bersepadu.", features: ["Skala automatik mengikut beban kerja", "Saluran CI/CD tanpa henti", "Telemetri dan analisis amaran", "Pengasingan kontena berasaskan amalan keselamatan awan"] },
    "agentic-ai-flow": { category: "AI & Automation", subtitle: "Ejen Autonomi dan Aliran Kerja LLM", description: "Enjin ejen AI yang menggabungkan pemprosesan multimodal, penaakulan berbilang langkah dan automasi aliran kerja.", features: ["Penaakulan berbilang langkah dengan alat interaktif", "Integrasi model bahasa multimodal", "Memori berstruktur dan pangkalan pengetahuan vektor", "Pemantauan pelaksanaan ejen secara langsung"] },
    "silat-score-analytics": { category: "Systems & Tools", subtitle: "Pemarkahan dan Analisis Prestasi Gelanggang", description: "Aplikasi pemarkahan silat masa nyata dengan mod luar talian dan laporan statistik automatik.", features: ["Pengiraan markah masa nyata melalui WebSocket", "Penyegerakan luar talian untuk kejohanan", "Visualisasi ketepatan teknik dan masa tindak balas", "Eksport papan markah dan laporan PDF"] },
  },
  en: {
    "syahmiaof-editorial": { category: "Web & Editorial", subtitle: "Cinematic Personal Brand Experience", description: "An editorial site with GSAP motion, layered depth and navigation in three languages.", features: ["GSAP choreography and layered parallax", "Editorial Didone typography", "Next.js App Router and Tailwind CSS", "Responsive layouts across screen sizes"] },
    "cloud-nexus-engine": { category: "Cloud & Infra", subtitle: "Distributed Infrastructure and Cluster Automation", description: "A cloud orchestration platform for container clusters, real-time monitoring and integrated data security.", features: ["Workload-aware autoscaling", "Zero-downtime CI/CD pipelines", "Telemetry and alert analysis", "Container isolation based on cloud security practices"] },
    "agentic-ai-flow": { category: "AI & Automation", subtitle: "Autonomous Agents and LLM Workflows", description: "An AI agent engine combining multimodal processing, multi-step reasoning and workflow automation.", features: ["Multi-step reasoning with interactive tools", "Multimodal language-model integration", "Structured memory and vector knowledge base", "Live agent execution monitoring"] },
    "silat-score-analytics": { category: "Systems & Tools", subtitle: "Arena Scoring and Performance Analytics", description: "A real-time silat scoring app with offline support and automated statistical reports.", features: ["Real-time scoring over WebSockets", "Offline sync for tournaments", "Technique accuracy and reaction-time visualizations", "Scoreboard and PDF report exports"] },
  },
  zh: {
    "syahmiaof-editorial": { category: "网页与编辑设计", subtitle: "电影感个人品牌体验", description: "融合 GSAP 动效、分层空间与三语导航的编辑式个人网站。", features: ["GSAP 编排动画与分层视差", "Didone 编辑字体", "Next.js App Router 与 Tailwind CSS", "适配不同屏幕尺寸的响应式设计"] },
    "cloud-nexus-engine": { category: "云端与基础设施", subtitle: "分布式基础设施与集群自动化", description: "用于容器集群部署、实时监控与数据安全整合的云端编排平台。", features: ["根据工作负载自动扩缩", "零停机 CI/CD 流程", "遥测监控与告警分析", "遵循云安全实践的容器隔离"] },
    "agentic-ai-flow": { category: "AI 与自动化", subtitle: "自主智能体与 LLM 工作流", description: "结合多模态处理、多步推理与工作流自动化的 AI 智能体引擎。", features: ["结合交互工具的多步推理", "多模态语言模型整合", "结构化记忆与向量知识库", "实时监控智能体执行过程"] },
    "silat-score-analytics": { category: "系统与工具", subtitle: "赛场计分与表现分析", description: "支持离线模式并自动生成统计报告的实时 Silat 计分应用。", features: ["通过 WebSocket 实时计分", "适用于赛事环境的离线同步", "动作准确度与反应时间可视化", "导出计分板与 PDF 报告"] },
  },
};
