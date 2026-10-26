export interface ReflectionNote {
  id: string;
  tag: string;
  category: "PEMIKIRAN" | "PENGAJARAN" | "MOTIVASI" | "IMPIAN";
  title: string;
  date: string;
  readTime: string;
  excerpt: string;
  body: string[];
  keyTakeaway: string;
}

export const notesData: {
  eyebrow: string;
  titleLine1: string;
  titleLine2: string;
  quote: string;
  intro: string;
  categories: readonly ["SEMUA", "PEMIKIRAN", "PENGAJARAN", "MOTIVASI", "IMPIAN"];
  notes: ReflectionNote[];
} = {
  eyebrow: "05 — THE REFLECTIONS",
  titleLine1: "CATATAN.",
  titleLine2: "AKU PERCAYA PADA PROSES.",
  quote: "Setiap proses, walaupun tampak perlahan, tetap membawa kita ke tempat yang lebih baik.",
  intro:
    "Ruang kontemplasi peribadi mengenai kehidupan, perjuangan membina kemahiran, falsafah kejuruteraan, dan impian masa hadapan. Tulisan jujur dari jiwa yang sentiasa belajar.",
  categories: ["SEMUA", "PEMIKIRAN", "PENGAJARAN", "MOTIVASI", "IMPIAN"] as const,
  notes: [
    {
      id: "pemikiran-disiplin-senyap",
      tag: "01",
      category: "PEMIKIRAN",
      title: "Kuasa Disiplin Dalam Kesunyian",
      date: "Oktober 2026",
      readTime: "3 minit",
      excerpt:
        "Kejayaan sebenar tidak diumumkan di pentas yang bising. Ia dibina di dalam bilik yang sunyi, pada jam tiga pagi, di hadapan skrin yang hanya disinari oleh kod dan impian.",
      body: [
        "Kita sering tergoda oleh hasil akhir yang megah — tepukan, pujian, dan sorakan orang ramai. Tetapi hakikatnya, nilai sebenar seseorang manusia ditentukan oleh apa yang dilakukannya ketika tiada sesiapa yang sedang memerhatikan.",
        "Disiplin bukanlah paksaan yang membebankan; ia adalah janji setia kepada diri sendiri bahawa masa depan kita terlalu berharga untuk disia-siakan demi keselesaan sementara.",
        "Apabila kita belajar menikmati kesunyian dalam proses belajar, kita tidak lagi bergantung kepada motivasi luaran yang mudah pudar.",
      ],
      keyTakeaway: "Disiplin senyap adalah jambatan paling kukuh antara niat dan kenyataan.",
    },
    {
      id: "pengajaran-kegagalan-pertama",
      tag: "02",
      category: "PENGAJARAN",
      title: "Kegagalan Bukan Pengakhiran, Ia Penunjuk Arah",
      date: "September 2026",
      readTime: "4 minit",
      excerpt:
        "Setiap ralat sistem dan kegagalan projek mengandungi pengajaran berharga yang tidak dapat dibeli di mana-mana dewan kuliah.",
      body: [
        "Pada awal pembabitan aku dalam dunia teknologi, ralat pertama terasa seperti satu tamparan hebat kepada keyakinan diri. Aku menyangka kegagalan adalah bukti bahawa aku tidak cukup berbakat.",
        "Namun seiring masa dan kematangan, aku menyedari bahawa kod yang tidak berfungsi bukan penghinaan; ia adalah maklum balas logik paling jujur. Setiap baris 'stack trace' memberitahu kita secara tepat di mana jurang pemahaman kita berada.",
        "Mereka yang takut gagal tidak akan pernah membina sesuatu yang benar-benar bernilai tinggi.",
      ],
      keyTakeaway: "Jangan sesekali memusuhi kesilapan; jadikan ia guru yang paling teliti.",
    },
    {
      id: "motivasi-langkah-seterusnya",
      tag: "03",
      category: "MOTIVASI",
      title: "Terus Melangkah Walau Selangkah",
      date: "Ogos 2026",
      readTime: "3 minit",
      excerpt:
        "Bila jalan di hadapan kelihatan berkabus dan terlalu jauh, jangan fikirkan seribu batu di hadapan. Cukup dengan mengambil satu langkah seterusnya dengan sepenuh hati.",
      body: [
        "Ada hari-hari di mana beban kerja dan ketidaktentuan masa hadapan terasa terlalu berat untuk dipikul. Ketika itu, fikiran kita mula memperdayakan kita dengan rasa putus asa.",
        "Resipi aku mudah: kecilkan medan fokus. Jangan pandang puncak gunung jika ia menakutkan; pandang tanah di hadapan tapak kaki dan ambil satu langkah kecil.",
        "Konsistensi mengatasi kehebatan yang hanya sementara. Langkah kecil yang diambil setiap hari tanpa henti akan menggerakkan gunung yang paling tinggi.",
      ],
      keyTakeaway: "Kemenangan besar terhasil daripada ribuan keputusan kecil untuk tidak berhenti.",
    },
    {
      id: "impian-membina-legasi",
      tag: "04",
      category: "IMPIAN",
      title: "Membina Sesuatu Yang Melangkaui Masa",
      date: "Julai 2026",
      readTime: "5 minit",
      excerpt:
        "Impian aku bukan sekadar menulis perisian atau mencipta laman web yang cantik. Impian aku adalah menyumbang kepada kemajuan masyarakat dan memberi inspirasi kepada mereka yang bermula dari tiada apa-apa.",
      body: [
        "Teknologi yang terbaik adalah teknologi yang mengangkat martabat manusia. Ia memudahkan urusan, merapatkan jurang, dan membuka peluang kepada mereka yang selama ini terpinggir.",
        "Aku bercita-cita membina ekosistem penyelesaian teknologi — dari infrastruktur awan yang kukuh hingga aplikasi pintar yang memanusiakan interaksi digital.",
        "Dan yang paling utama, aku ingin membuktikan kepada anak-anak muda yang melihat kisah ini bahawa dengan maruah, usaha tanpa henti, dan tawakal, tiada impian yang mustahil untuk dicapai.",
      ],
      keyTakeaway: "Legasi sebenar tidak diukur dengan kekayaan yang dikumpul, tetapi dengan manfaat yang ditinggalkan.",
    },
  ],
};
