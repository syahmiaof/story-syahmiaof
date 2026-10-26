export interface TimelineMilestone {
  year: string;
  tag: string;
  title: string;
  category: string;
  description: string;
  details: string[];
  skills: string[];
  icon: string;
}

export const timelineData = {
  eyebrow: "MY JOURNEY / PERJALANAN AKU",
  titleLine1: "AKU MASIH",
  titleLine2: "MELANGKAH.",
  intro:
    "Setiap fasa dalam hidup aku adalah tangga pembelajaran. Dari disiplin fizikal dan kepimpinan seni bela diri, ke dunia pengkomputeran awan, hingga kini membina sistem dan produk teknologi bertaraf tinggi.",
  milestones: [
    {
      year: "2022",
      tag: "01",
      title: "ASAS DISIPLIN",
      category: "Jati Diri & Seni Silat",
      description:
        "Fasa pembentukan asas disiplin, kepimpinan, dan ketahanan mental melalui seni silat dan kepimpinan komuniti. Belajar erti fokus, ketepatan gerak, dan kawalan emosi dalam apa jua keadaan.",
      details: [
        "Latihan intensif fizikal dan mental membina asas ketabahan.",
        "Mengasah kepimpinan diri dan empati dalam membimbing rakan sepasukan.",
        "Menanam prinsip etika dan integriti yang dibawa ke dalam dunia teknologi.",
      ],
      skills: ["Disiplin Teguh", "Kepimpinan", "Ketahanan Mental", "Fokus Mendalam"],
      icon: "Shield",
    },
    {
      year: "2025",
      tag: "02",
      title: "BAB BAHARU",
      category: "Pengkomputeran Awan & Sains Komputer",
      description:
        "Melangkah ke arena teknologi mendalam. Mendalami seni bina Cloud Computing, pengurusan infrastruktur teragih, automasi kontena, dan keselamatan data peringkat enterprise.",
      details: [
        "Penguasaan teknologi awan moden (Google Cloud Platform, Docker, Kubernetes).",
        "Membangunkan integrasi backend, pangkalan data berprestasi tinggi, dan saluran CI/CD.",
        "Mempelajari seni bina perisian berdaya tahan yang mampu menangani skala tinggi.",
      ],
      skills: ["Cloud Architecture", "GCP & Docker", "DevOps & CI/CD", "Backend Systems"],
      icon: "Cloud",
    },
    {
      year: "2026",
      tag: "03",
      title: "TERUS MEMBINA",
      category: "Web Moden, AI & Inovasi Digital",
      description:
        "Menyatukan teknologi perisian termaju, pengalaman web editorial premium (GSAP, Next.js), dan integrasi ejen AI pintar untuk membina produk yang memberi impak sebenar.",
      details: [
        "Membangunkan aplikasi web interaktif sinematik dengan reka bentuk tahap editorial.",
        "Penyelidikan dan pembangunan sistem automasi berasaskan ejen AI & model multimodal.",
        "Penciptaan platform digital holistik dari rekaan antaramuka hingga seni bina awan.",
      ],
      skills: ["Next.js & React", "GSAP Cinematic Motion", "AI Agentic Systems", "Full-Stack Design"],
      icon: "Sparkles",
    },
  ],
};
