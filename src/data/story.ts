export interface StoryChapter {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  excerpt: string;
  fullText: string[];
  quote: string;
  image?: string;
  year?: string;
}

export const storyData = {
  eyebrow: "MY STORY / KISAH AKU",
  titleLine1: "SEMUANYA",
  titleLine2: "ADA CERITA.",
  intro:
    "Aku tak dilahirkan dengan jalan yang terbentang luas atau kemudahan yang melimpah. Setiap langkah yang aku ambil hari ini adalah hasil daripada seribu satu percubaan, kegagalan yang mengajar, dan ketabahan untuk terus berdiri walaupun ketika tiada siapa yang melihat.",
  chapters: [
    {
      id: "asal-usul",
      tag: "01",
      title: "ASAL-USUL",
      subtitle: "Bermula Dari Kosong",
      excerpt:
        "Sebuah permulaan sederhana di mana rasa ingin tahu menjadi pendorong utama. Aku belajar menghargai setiap titik peluh dan meletakkan asas kukuh dalam cara aku berfikir.",
      fullText: [
        "Langkah pertama sentiasa yang paling sunyi. Aku bermula dari ruang yang serba sederhana, bersenjatakan rasa ingin tahu yang tidak pernah padam dan keinginan membara untuk mencipta sesuatu yang bermakna.",
        "Tiada jalan pintas. Setiap malam dihabiskan meneliti kod, mencuba baris demi baris, dan memahami falsafah disiplin yang ditanam sejak zaman awal pembelajaran silat dan kepimpinan.",
      ],
      quote: "Bukan dari mana kita bermula yang menentukan destinasi, tetapi ke mana arah niat kita berpaling.",
      year: "Zaman Awal",
    },
    {
      id: "perjuangan",
      tag: "02",
      title: "PERJUANGAN",
      subtitle: "Mendepani Cabaran & Keraguan",
      excerpt:
        "Fasa getir di mana keyakinan diuji. Belajar menerima kegagalan sebagai maklum balas, bukan penamat, dan membina daya tahan mental yang tidak mudah goyah.",
      fullText: [
        "Ada hari-hari di mana setiap percubaan tampak seperti menemui jalan buntu. Ralat yang tidak henti, rancangan yang tersasar, dan suara keraguan yang kadangkala membisik.",
        "Namun, di situlah letaknya intipati sebenar pembentukan diri: ketahanan untuk bangun semula pada keesokan harinya, memperhalusi strategi, dan terus menolak batas keupayaan diri.",
      ],
      quote: "Kekuatan tidak lahir daripada kemenangan mudah, ia ditempa dalam keheningan saat kita enggan menyerah.",
      year: "Fasa Pengasahan",
    },
    {
      id: "titik-perubahan",
      tag: "03",
      title: "TITIK PERUBAHAN",
      subtitle: "Menemui Visi & Hala Tuju",
      excerpt:
        "Saat kepingan pengalaman mula bersatu menjadi visi yang jelas. Penggabungan disiplin, seni reka bentuk editorial, dan penguasaan teknologi moden.",
      fullText: [
        "Titik perubahan berlaku apabila aku menyedari bahawa teknologi bukan sekadar alat berfungsi, tetapi medium untuk menyampaikan emosi, membina legasi, dan menyelesaikan masalah sebenar manusia.",
        "Kini, setiap sistem yang aku bina, setiap baris kod yang aku susun, dan setiap visi yang aku terjemahkan berakar pada niat yang satu: membina masa depan dengan integriti dan kecemerlangan.",
      ],
      quote: "Apabila tujuan hidup menjadi lebih besar daripada ketakutan, setiap langkah berubah menjadi keberanian.",
      year: "Era Baharu",
    },
  ],
};
