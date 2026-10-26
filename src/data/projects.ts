export interface Project {
  id: string;
  tag: string;
  title: string;
  category: "Web & Editorial" | "Cloud & Infra" | "AI & Automation" | "Systems & Tools";
  subtitle: string;
  description: string;
  features: string[];
  stack: string[];
  status: "Completed" | "Active" | "Research";
  featured?: boolean;
}

export const projectsData: {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  intro: string;
  categories: readonly ["Semua", "Web & Editorial", "Cloud & Infra", "AI & Automation", "Systems & Tools"];
  projects: Project[];
} = {
  eyebrow: "03 — THE CREATIONS",
  titleLine1: "KARYA.",
  titleLine2: "DARI FIKIRAN KE REALITI.",
  intro:
    "Idea yang bermula di dalam fikiran, kini menjadi website, sistem, automasi dan lebih banyak lagi. Setiap karya dibangunkan dengan dedikasi tinggi terhadap seni visual, ketepatan kejuruteraan, dan impak penggunaan.",
  categories: ["Semua", "Web & Editorial", "Cloud & Infra", "AI & Automation", "Systems & Tools"] as const,
  projects: [
    {
      id: "syahmiaof-editorial",
      tag: "01",
      title: "SYAHMIAOF — The Story of Becoming",
      category: "Web & Editorial",
      subtitle: "Cinematic Personal Brand Experience",
      description:
        "Sebuah laman web editorial mewah dengan reka bentuk sinematik bernilai tinggi, animasi berasaskan GSAP ScrollTrigger, susun atur lapisan kedalaman 3D, dan navigasi berbilang bahasa dwiarah.",
      features: [
        "Animasi koreografi GSAP & paralaks lapisan optik",
        "Tipografi Didone editorial berdefinisi tinggi",
        "Seni bina Next.js App Router & Tailwind CSS terkini",
        "Reka bentuk responsif adaptif untuk semua resolusi peranti",
      ],
      stack: ["Next.js 15", "TypeScript", "GSAP 3", "Tailwind CSS", "ScrollTrigger"],
      status: "Completed",
      featured: true,
    },
    {
      id: "cloud-nexus-engine",
      tag: "02",
      title: "Aura Cloud Orchestrator",
      category: "Cloud & Infra",
      subtitle: "Infrastruktur Teragih & Automasi Kluster",
      description:
        "Platform automasi orkestrasi awan yang membolehkan penggunaan kluster kontena berskala anjal, pemantauan masa nyata, dan saluran keselamatan data bersepadu.",
      features: [
        "Skalabiliti automatik berasaskan beban kerja masa nyata",
        "Saluran CI/CD tanpa gangguan masa henti (zero-downtime deployment)",
        "Telemetri pemantauan metriks dan analisis amaran pintar",
        "Pengasingan kontena berasaskan standard keselamatan awan antarabangsa",
      ],
      stack: ["Google Cloud", "Docker", "Kubernetes", "Terraform", "Go"],
      status: "Active",
      featured: true,
    },
    {
      id: "agentic-ai-flow",
      tag: "03",
      title: "Astra Intelligent Agent Engine",
      category: "AI & Automation",
      subtitle: "Sistem Ejen Autonomi & Saluran Pemprosesan LLM",
      description:
        "Enjin ejen AI autonomi yang mengintegrasikan pemprosesan multimodal, penalaran mendalam pelbagai langkah, dan automasi aliran kerja korporat tanpa geseran.",
      features: [
        "Penalaran autonomi berbilang langkah dan alat interaktif",
        "Integrasi model bahasa multimodal generasi terkini",
        "Sistem memori berstruktur dan pangkalan pengetahuan vektor",
        "Antaramuka pemantauan proses pelaksanaan ejen secara langsung",
      ],
      stack: ["Python", "FastAPI", "Gemini API", "Vector Embeddings", "LangGraph"],
      status: "Active",
      featured: true,
    },
    {
      id: "silat-score-analytics",
      tag: "04",
      title: "Silat Arena Digital Scorer",
      category: "Systems & Tools",
      subtitle: "Sistem Pemarkahan & Analisis Prestasi Gelanggang",
      description:
        "Aplikasi pengiraan markah dan analisis prestasi atlet seni bela diri silat secara masa nyata dengan kependaman sifar, sokongan mod luar talian, dan penjanaan laporan statistik automatik.",
      features: [
        "Pengiraan markah masa nyata dengan sambungan WebSockets",
        "Penyegerakan luar talian untuk persekitaran kejohanan tanpa internet",
        "Visualisasi metrik ketepatan teknik dan masa tindak balas atlet",
        "Eksport papan markah rasmi dan laporan PDF interaktif",
      ],
      stack: ["React", "TypeScript", "WebSockets", "IndexedDB", "Tailwind CSS"],
      status: "Completed",
      featured: false,
    },
  ],
};
