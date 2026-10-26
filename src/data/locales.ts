export type Language = "bm" | "en" | "zh";

export const locale = {
  bm: {
    nav: ["Utama", "Kisah", "Perjalanan", "Karya", "Catatan"],
    welcome: { eyebrow: "SELAMAT DATANG KE", question: "Nak dengar kisah saya?", enter: "Masuk ke cerita", skip: "Langkau intro", seconds: "Sebuah kisah sedang bermula" },
    actions: { story: "Kenali Kisah Aku", journey: "Lihat Perjalanan", exploreJourney: "Terokai Perjalanan", timeline: "Lihat Timeline", work: "Terokai Karya", notes: "Terokai Catatan", scroll: "SCROLL UNTUK TEROKA", read: "Baca Selanjutnya", close: "Tutup Dialog", quote: "Setiap proses, walaupun tampak perlahan, tetap membawa kita ke tempat yang lebih baik.", footer: "Aku membina dengan tujuan, dan terus melangkah dengan rasa ingin tahu.", who: "SIAPA SAYA?", contact: "HUBUNGI SAYA", top: "Kembali ke atas", projects: "Koleksi karya pilihan", projectInfo: "Perincian projek", allProjects: "Semua karya", features: "Ciri utama & seni bina", stack: "Teknologi digunakan", copyright: "Hak cipta terpelihara" },
    pages: {
      utama: { eyebrow: ["KISAH SAYA", "PERJALANAN SAYA"], title: ["INI BARU", "PERMULAAN."], intro: "Aku tak bermula dengan segala-galanya. Aku cuma ada impian, keberanian untuk mencuba, dan satu keputusan — untuk tidak berhenti membina masa depan aku sendiri.", subtitle: "", cta: ["Kenali Kisah Aku", "Terokai Perjalanan"], teaser: "Setiap permulaan ada cerita — tentang asal-usul, perjuangan dan bagaimana aku mula membina diri." },
      kisah: { eyebrow: ["BAB 01", "KISAH SAYA"], title: ["SEMUANYA", "ADA CERITA."], intro: "Aku bukan bermula dengan segalanya. Aku bermula dengan persoalan, dengan jatuh dan bangun, dengan mimpi yang tak pernah padam. Setiap langkah, setiap luka, setiap pertemuan — semuanya membawa aku ke sini.", subtitle: "", cta: ["Kenali Kisah Aku", "Lihat Perjalanan"] },
      perjalanan: { eyebrow: ["BAB 02", "PERJALANAN SAYA"], title: ["AKU MASIH", "MELANGKAH."], intro: "Setiap langkah membawa aku lebih dekat kepada versi diri yang aku impikan. Aku terus belajar, membina, dan meneroka peluang baharu — dengan disiplin, rasa ingin tahu, dan keyakinan untuk masa depan.", subtitle: "", cta: ["Lihat Timeline", "Terokai Perjalanan"] },
      karya: { eyebrow: ["03", "HASIL KARYA"], title: ["KARYA"], intro: "Idea yang bermula di dalam fikiran, kini menjadi laman web, sistem, automasi dan lebih banyak lagi.", subtitle: "DARI FIKIRAN KE REALITI.", cta: ["Terokai Karya"] },
      catatan: { eyebrow: ["05", "RENUNGAN"], title: ["CATATAN"], intro: "Sebuah ruang untuk berfikir, mencatat dan mengingati — tentang hidup, ilmu, perjuangan dan masa depan.", subtitle: "AKU PERCAYA PADA PROSES.", cta: ["Terokai Catatan"] },
    },
    stories: [
      { title: "ASAL-USUL", excerpt: "Di sinilah semuanya bermula. Tentang mana aku datang, siapa aku sebelum segala ini, dan nilai yang membentuk diriku hari ini.", body: ["Langkah pertama sentiasa yang paling sunyi. Aku bermula dari ruang yang serba sederhana, bersenjatakan rasa ingin tahu yang tidak pernah padam.", "Tiada jalan pintas. Setiap percubaan, setiap baris kod dan setiap latihan mengajar aku tentang disiplin dan kesabaran."], action: "Baca Selanjutnya" },
      { title: "PERJUANGAN", excerpt: "Bukan semuanya mudah. Ada fasa jatuh, kecewa dan ragu, tetapi di situlah aku belajar erti ketahanan dan sebab aku tidak berhenti.", body: ["Ada hari-hari apabila setiap percubaan terasa seperti jalan buntu. Ralat dan rancangan yang tersasar menguji keyakinan aku.", "Di situlah aku belajar untuk bangun semula, memperhalusi langkah dan terus mencuba."], action: "Baca Selanjutnya" },
      { title: "TITIK PERUBAHAN", excerpt: "Setiap perjalanan ada detik yang mengubah segalanya. Di sini aku berkongsi momen penting yang membentuk diriku hari ini.", body: ["Titik perubahan berlaku apabila aku sedar teknologi bukan sekadar alat, tetapi ruang untuk menyampaikan idea dan menyelesaikan masalah.", "Kini setiap sistem yang aku bina berpunca daripada satu niat: membina masa depan dengan integriti."], action: "Baca Selanjutnya" },
    ],
    journey: [
      { title: "ASAS DISIPLIN", excerpt: "Bermula dengan persoalan, mencari arah dan membina asas disiplin dalam kehidupan seharian.", body: ["Latihan dan rutin mengajar aku fokus serta ketahanan.", "Nilai yang dibina pada peringkat awal ini menjadi asas kepada setiap langkah seterusnya."] },
      { title: "BAB BAHARU", excerpt: "Melangkah ke fasa baharu dengan lebih jelas. Meneroka teknologi, memperluas kemahiran dan membuka lebih banyak peluang.", body: ["Aku mula mendalami pengkomputeran awan, sistem dan pembangunan perisian.", "Setiap projek membuka ruang untuk belajar sesuatu yang baharu."] },
      { title: "TERUS MEMBINA", excerpt: "Terus berkembang, membina projek yang memberi nilai dan melangkah ke arah impak yang lebih besar.", body: ["Aku menggabungkan reka bentuk, teknologi moden dan sistem pintar.", "Perjalanan ini masih berlangsung; setiap hari ialah peluang untuk menjadi lebih baik."] },
    ],
    notes: [
      { title: "PEMIKIRAN", excerpt: "Luahan fikiran tentang hidup, ilmu, teknologi dan dunia sekeliling.", body: ["Ketenangan membantu kita melihat sesuatu dengan lebih jelas.", "Disiplin kecil yang diulang setiap hari akhirnya membentuk perubahan besar."] },
      { title: "PENGAJARAN", excerpt: "Nilai, prinsip dan pengajaran yang aku pelajari sepanjang perjalanan.", body: ["Kesilapan bukan penghujung; ia menunjukkan bahagian yang perlu kita fahami dengan lebih baik.", "Aku belajar menerima maklum balas dan menggunakannya untuk berkembang."] },
      { title: "MOTIVASI", excerpt: "Untuk siapa yang sedang berjuang, terus melangkah. Kita mampu.", body: ["Apabila jalan terasa jauh, fokus pada satu langkah kecil yang boleh dibuat hari ini.", "Konsistensi membawa kita lebih jauh daripada menunggu motivasi yang sempurna."] },
      { title: "IMPIAN", excerpt: "Cita-cita, perancangan dan visi masa depan yang masih dalam perjalanan.", body: ["Aku mahu membina teknologi yang memberi manfaat dan membuka peluang.", "Legasi yang bermakna lahir daripada usaha yang memberi kesan kepada orang lain."] },
    ],
    milestones: ["ASAS DISIPLIN", "BAB BAHARU", "TERUS MEMBINA"],
    projectUi: { kicker: "PORTFOLIO KEJURUTERAAN", title: "Koleksi Karya Pilihan", intro: "Gabungan seni visual, kecekapan kod, seni bina awan dan teknologi ejen pintar.", categories: ["Semua", "Web & Editorial", "Cloud & Infra", "AI & Automation", "Systems & Tools"], detail: "Perincian Projek", close: "Tutup dialog" },
  },
  en: {
    nav: ["Home", "Story", "Journey", "Creations", "Reflections"],
    welcome: { eyebrow: "WELCOME TO", question: "Would you like to hear my story?", enter: "Enter the story", skip: "Skip intro", seconds: "A story is about to begin" },
    actions: { story: "Get to Know My Story", journey: "View My Journey", exploreJourney: "Explore My Journey", timeline: "View Timeline", work: "Explore My Work", notes: "Explore Reflections", scroll: "SCROLL TO EXPLORE", read: "Read More", close: "Close dialog", quote: "Every process, however slow it may seem, still carries us somewhere better.", footer: "I build with purpose, and keep moving with curiosity.", who: "WHO AM I?", contact: "GET IN TOUCH", top: "Back to top", projects: "Selected work", projectInfo: "Project details", allProjects: "All projects", features: "Key features & architecture", stack: "Technology used", copyright: "All rights reserved" },
    pages: {
      utama: { eyebrow: ["MY STORY", "MY JOURNEY"], title: ["A NEW", "BEGINNING."], intro: "I did not begin with everything. I had a dream, the courage to try, and one decision: to keep building my own future.", subtitle: "", cta: ["Hear My Story", "View My Journey"], teaser: "Every beginning has a story — where I came from, what I faced and how I began to build." },
      kisah: { eyebrow: ["CHAPTER 01", "MY STORY"], title: ["EVERYTHING", "HAS A STORY."], intro: "I did not start with everything. I began with questions, setbacks and a dream that never faded. Every step, every struggle and every encounter brought me here.", subtitle: "", cta: ["Hear My Story", "View My Journey"] },
      perjalanan: { eyebrow: ["CHAPTER 02", "MY JOURNEY"], title: ["I'M STILL", "MOVING."], intro: "Every step brings me closer to the person I hope to become. I keep learning, building and exploring new opportunities with discipline and curiosity.", subtitle: "", cta: ["View Timeline", "Explore My Journey"] },
      karya: { eyebrow: ["03", "THE CREATIONS"], title: ["CREATIONS"], intro: "Ideas that began in my mind are now websites, systems, automations and more.", subtitle: "FROM THOUGHT TO REALITY.", cta: ["Explore My Work"] },
      catatan: { eyebrow: ["05", "THE REFLECTIONS"], title: ["REFLECTIONS"], intro: "A space to think, write and remember — life, learning, struggles and the future.", subtitle: "I BELIEVE IN THE PROCESS.", cta: ["Explore Reflections"] },
    },
    stories: [
      { title: "ORIGINS", excerpt: "This is where it began: where I came from, who I was, and the values that shaped me.", body: ["The first step is often the quietest. I started with little more than curiosity and a desire to make something meaningful.", "There were no shortcuts. Every attempt and every lesson taught me patience and discipline."], action: "Read More" },
      { title: "THE STRUGGLE", excerpt: "It was not always easy. Setbacks and doubt taught me resilience and why I kept going.", body: ["Some days every attempt felt like a dead end. Errors and plans that fell through tested my confidence.", "That was where I learned to get back up, refine my approach and keep trying."], action: "Read More" },
      { title: "TURNING POINT", excerpt: "Every journey has moments that change everything. These are the moments that shaped me.", body: ["My turning point came when I saw technology as more than a tool: a way to share ideas and solve real problems.", "Now each system I build starts with one intention: to create a future with integrity."], action: "Read More" },
    ],
    journey: [
      { title: "DISCIPLINE", excerpt: "I began by finding direction and building a foundation of everyday discipline.", body: ["Training and routine taught me focus and resilience.", "Those early values became the foundation for every step that followed."] },
      { title: "A NEW CHAPTER", excerpt: "I stepped into a new phase, exploring technology, building skills and opening new possibilities.", body: ["I began studying cloud computing, systems and software development.", "Every project opened up something new to learn."] },
      { title: "STILL BUILDING", excerpt: "I keep growing and making projects that create value and greater impact.", body: ["I bring together design, modern technology and intelligent systems.", "This journey is still in motion; each day is a chance to improve."] },
    ],
    notes: [
      { title: "THOUGHTS", excerpt: "Reflections on life, learning, technology and the world around us.", body: ["Stillness helps us see things more clearly.", "Small disciplines, repeated each day, can lead to lasting change."] },
      { title: "LESSONS", excerpt: "Values, principles and lessons I have learned along the way.", body: ["A mistake is not the end; it shows us what we still need to understand.", "I am learning to accept feedback and use it to grow."] },
      { title: "MOTIVATION", excerpt: "If you are struggling, keep going. We can do this.", body: ["When the road feels long, focus on one small step you can take today.", "Consistency carries us further than waiting for perfect motivation."] },
      { title: "DREAMS", excerpt: "A vision for the future that is still taking shape.", body: ["I want to build technology that helps people and opens doors.", "A meaningful legacy grows from work that makes a difference to others."] },
    ],
    journeyTitles: ["DISCIPLINE", "A NEW CHAPTER", "STILL BUILDING"],
    projectUi: { kicker: "ENGINEERING PORTFOLIO", title: "Selected Work", intro: "Visual craft, thoughtful code, cloud architecture and intelligent agents.", categories: ["All", "Web & Editorial", "Cloud & Infra", "AI & Automation", "Systems & Tools"], detail: "Project details", close: "Close dialog" },
  },
  zh: {
    nav: ["首页", "故事", "旅程", "作品", "随笔"],
    welcome: { eyebrow: "欢迎来到", question: "想听听我的故事吗？", enter: "进入故事", skip: "跳过片头", seconds: "一个故事即将开始" },
    actions: { story: "认识我的故事", journey: "查看我的旅程", exploreJourney: "探索我的旅程", timeline: "查看时间线", work: "探索我的作品", notes: "阅读随笔", scroll: "向下探索", read: "继续阅读", close: "关闭对话框", quote: "每一段过程，无论看起来多么缓慢，都会带我们走向更好的地方。", footer: "带着目标创造，保持好奇，继续前行。", who: "关于我", contact: "联系我", top: "回到顶部", projects: "精选作品", projectInfo: "项目详情", allProjects: "全部作品", features: "主要特点与架构", stack: "使用技术", copyright: "版权所有" },
    pages: {
      utama: { eyebrow: ["我的故事", "我的旅程"], title: ["故事", "才刚开始。"], intro: "我并非一开始就拥有一切。我只有梦想、尝试的勇气，以及不断建设自己未来的决心。", subtitle: "", cta: ["认识我的故事", "查看我的旅程"], teaser: "每个开始都有一个故事——关于起点、挑战，以及我如何开始成长。" },
      kisah: { eyebrow: ["第一章", "我的故事"], title: ["每个人", "都有故事。"], intro: "我并非一开始就拥有一切。我从问题、挫折与不曾熄灭的梦想开始。每一步、每次挑战、每次相遇，都带我走到这里。", subtitle: "", cta: ["认识我的故事", "查看我的旅程"] },
      perjalanan: { eyebrow: ["第二章", "我的旅程"], title: ["我仍在", "继续前行。"], intro: "每一步都让我更接近理想中的自己。我持续学习、创造并探索新的机会，以自律和好奇走向未来。", subtitle: "", cta: ["查看时间线", "探索我的旅程"] },
      karya: { eyebrow: ["03", "创作作品"], title: ["作品"], intro: "脑海中的想法，如今成为网站、系统、自动化工具，以及更多创作。", subtitle: "从想法到现实。", cta: ["探索作品"] },
      catatan: { eyebrow: ["05", "心情随笔"], title: ["随笔"], intro: "在这里思考、记录与回望生活、学习、挑战和未来。", subtitle: "我相信过程。", cta: ["阅读随笔"] },
    },
    stories: [
      { title: "起点", excerpt: "一切从这里开始：我的来处、曾经的自己，以及塑造我的价值观。", body: ["第一步往往最安静。我从简单的起点出发，带着好奇心，希望创造有意义的事物。", "没有捷径。每次尝试与每次学习，都教会我耐心和自律。"], action: "继续阅读" },
      { title: "奋斗", excerpt: "道路并不总是容易。挫折与怀疑让我学会坚韧，也让我明白为何继续前行。", body: ["有些日子，每次尝试都像走进死胡同。错误和计划受阻考验着我的信心。", "正是在那里，我学会重新站起、调整方向并继续尝试。"], action: "继续阅读" },
      { title: "转折点", excerpt: "每段旅程都有改变一切的时刻。这些时刻塑造了今天的我。", body: ["当我意识到科技不仅是工具，也能传递想法和解决真实问题时，转变就发生了。", "如今我创造的每个系统，都始于一个愿望：以诚信建设未来。"], action: "继续阅读" },
    ],
    journey: [
      { title: "自律基础", excerpt: "从寻找方向开始，逐步建立日常生活中的自律基础。", body: ["训练与规律教会我专注和坚韧。", "早期建立的价值观成为我以后每一步的根基。"] },
      { title: "崭新篇章", excerpt: "我踏入新的阶段，探索科技、提升技能并开启更多可能。", body: ["我开始深入学习云计算、系统与软件开发。", "每个项目都带来新的学习机会。"] },
      { title: "持续创造", excerpt: "持续成长，创造有价值的项目，并迈向更大的影响力。", body: ["我将设计、现代科技与智能系统结合起来。", "旅程仍在继续；每一天都是进步的机会。"] },
    ],
    notes: [
      { title: "思考", excerpt: "关于生活、学习、科技与周遭世界的想法。", body: ["保持平静，能让我们看得更清楚。", "每天重复的小小自律，最终会带来持久的改变。"] },
      { title: "学习心得", excerpt: "一路走来学到的价值观、原则与经验。", body: ["错误不是终点，它提醒我们还有什么需要理解。", "我正在学习接纳反馈，并用它来成长。"] },
      { title: "动力", excerpt: "如果你正在努力，请继续前进。我们做得到。", body: ["前方看起来很远时，专注于今天能迈出的一小步。", "持续行动比等待完美的动力更能带我们走远。"] },
      { title: "梦想", excerpt: "仍在逐渐成形的未来愿景。", body: ["我想创造能帮助人们、带来机会的科技。", "有意义的传承，来自于能为他人带来改变的努力。"] },
    ],
    journeyTitles: ["自律基础", "崭新篇章", "持续创造"],
    projectUi: { kicker: "工程作品集", title: "精选作品", intro: "视觉创作、精巧代码、云端架构与智能代理。", categories: ["全部", "网页与编辑设计", "云端与基础设施", "AI 与自动化", "系统与工具"], detail: "项目详情", close: "关闭对话框" },
  },
} as const;
