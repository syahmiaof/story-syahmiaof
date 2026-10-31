# SYAHMIAOF — The Story of Becoming

<div align="center">
  <p><strong>Laman Web Editorial Sinematik Jenama Peribadi (Premium Cinematic Editorial Website)</strong></p>
  <p>Dibina berteraskan pembinaan semula berketepatan tinggi berasaskan reka bentuk rujukan editorial mewah bersama tipografi Didone, susun atur lapisan seni 3D, dan gerakan GSAP ScrollTrigger.</p>

  <p>
    <a href="https://story.syahmiaof.my"><img src="https://img.shields.io/badge/Demo-Live-60E1B5?style=for-the-badge&logoColor=60E1B5&labelColor=101713" alt="Demo Live" /></a>
    <a href="https://github.com/syahmiaof/story-syahmiaof"><img src="https://img.shields.io/badge/Source-GitHub-60E1B5?style=for-the-badge&logo=github&logoColor=60E1B5&labelColor=101713" alt="GitHub Source" /></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-All_Rights_Reserved-60E1B5?style=for-the-badge&logoColor=60E1B5&labelColor=101713" alt="License: All Rights Reserved" /></a>
    <a href="https://github.com/syahmiaof/story-syahmiaof/actions"><img src="https://img.shields.io/badge/CI-Passing-60E1B5?style=for-the-badge&logo=githubactions&logoColor=60E1B5&labelColor=101713" alt="CI Passing" /></a>
    <a href="https://syahmiaof.my"><img src="https://img.shields.io/badge/Author-syahmiaof-60E1B5?style=for-the-badge&logo=vercel&logoColor=60E1B5&labelColor=101713" alt="Author" /></a>
  </p>

  <img src="public/og-image.png" alt="SYAHMIAOF — The Story of Becoming Cover" width="100%" style="border-radius: 8px; box-shadow: 0 0 30px rgba(96,225,181,0.2);" />

  <br/><br/>

  <p><a href="https://story.syahmiaof.my">Live Editorial</a> • <a href="#-project-overview">Overview</a> • <a href="#-lima-laluan-utama-routing-map">Laluan</a> • <a href="#-tech-stack">Tech Stack</a> • <a href="#-seni-bina-projek">Seni Bina</a></p>
</div>

> **"Aku tak bermula dengan segala-galanya. Aku cuma ada impian, keberanian untuk mencuba, dan satu keputusan — untuk tidak berhenti membina masa depan aku sendiri."**

---

## 💎 Project Overview

- **Functionality**: 5-route cinematic personal brand editorial experience (Utama, Kisah, Perjalanan, Karya, Catatan) featuring first-person storytelling, interactive modal reading drawers, and milestone timelines.
- **Aesthetic Value**: Luxury Didone typography (Bodoni Moda & Italiana), layered 3D composite art, warm cream and obsidian themes, and mouse-reactive GSAP `quickTo` parallax effects.
- **Business Value**: Sets the highest visual benchmark for personal brand portfolios, combining pixel-perfect design reconstruction (89.3% accuracy) with rigorous Playwright visual regression testing.

---

## 📖 Pengenalan Projek

**SYAHMIAOF — The Story of Becoming** ialah laman web jenama peribadi bertaraf editorial sinematik mewah. Dibina berteraskan pembinaan semula berketepatan tinggi (*pixel-accurate reconstruction*) berasaskan 5 reka bentuk rujukan desktop yang telah diluluskan. Menggunakan naratif bahasa pertama Bahasa Melayu **"Aku"** bersama label editorial mikro dwibahasa, tipografi Didone berkontras tinggi, susun atur lapisan seni 3D, serta koreografi gerakan GSAP ScrollTrigger yang lancar dan terkawal.

---

## 🗺️ Lima Laluan Utama (Routing Map)

| Laluan | Nama Halaman | Tema Visual | Konsep Utama |
|---|---|---|---|
| `/` | **Utama** | Krim Editorial (`#F7F3EB`) | *INI BARU / PERMULAAN.* Potret hero, marmar, reben burgundi kaca, cakera merah & teaser 01 CERITA. |
| `/kisah` | **Kisah** | Krim Editorial (`#F7F3EB`) | *SEMUANYA / ADA CERITA.* Watak duduk bertafakur, 3 kad cerita ASAL-USUL, PERJUANGAN, dan TITIK PERUBAHAN. |
| `/perjalanan` | **Perjalanan** | Krim Editorial (`#F7F3EB`) | *AKU MASIH / MELANGKAH.* **Watak hero menghadap ke belakang mendaki tangga batu**, garis masa 2022, 2025, 2026. |
| `/karya` | **Karya** | Obsidian Sinematik (`#060302`) | *KARYA. / DARI FIKIRAN KE REALITI.* Skrin antaramuka web terapung, orbs burgundi, dan portfolio projek interaktif. |
| `/catatan` | **Catatan** | Obsidian Sinematik (`#060302`) | *CATATAN. / AKU PERCAYA PADA PROSES.* Potret santai tengah, petikan falsafah diri, kad PEMIKIRAN, PENGAJARAN, MOTIVASI, IMPIAN. |

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://img.shields.io/badge/Next.js_15-101713?style=for-the-badge&logo=nextdotjs&logoColor=60E1B5&labelColor=101713" alt="Next.js 15" />
  <img src="https://img.shields.io/badge/React_19-101713?style=for-the-badge&logo=react&logoColor=60E1B5&labelColor=101713" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-101713?style=for-the-badge&logo=typescript&logoColor=60E1B5&labelColor=101713" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-101713?style=for-the-badge&logo=tailwindcss&logoColor=60E1B5&labelColor=101713" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/GSAP_3-101713?style=for-the-badge&logo=greensock&logoColor=60E1B5&labelColor=101713" alt="GSAP 3" />
  <img src="https://img.shields.io/badge/Playwright-101713?style=for-the-badge&logo=playwright&logoColor=60E1B5&labelColor=101713" alt="Playwright" />
  <img src="https://img.shields.io/badge/Vercel-101713?style=for-the-badge&logo=vercel&logoColor=60E1B5&labelColor=101713" alt="Vercel" />
</p>

---

## 🏛️ Seni Bina Projek (Directory Architecture)

```text
story-syahmiaof/
├── src/
│   ├── app/
│   │   ├── page.tsx               # Halaman Utama (/)
│   │   ├── kisah/page.tsx         # Halaman Kisah (/kisah)
│   │   ├── perjalanan/page.tsx    # Halaman Perjalanan (/perjalanan)
│   │   ├── karya/page.tsx         # Halaman Karya (/karya)
│   │   ├── catatan/page.tsx       # Halaman Catatan (/catatan)
│   │   ├── layout.tsx             # Susun atur global induk & metadata
│   │   └── globals.css            # Penggayaan global & arahan Tailwind
│   ├── components/
│   │   ├── layout/                # Bar navigasi dwitema (Krim/Gelap) & footer editorial
│   │   ├── editorial/             # Label mikro, display serif, dan elemen Didone
│   │   ├── content/               # Kad bab cerita, garis masa, galeri karya & grid catatan
│   │   └── motion/                # Enjin paralaks tetikus desktop GSAP quickTo
│   ├── data/                      # Data naratif, garis masa, karya, dan catatan refleksi
│   └── styles/                    # Sistem token warna, tipografi Didone, & butiran filem
├── public/
│   └── assets/                    # Lapisan potret watak lutsinar (RGBA) & seni komposit
├── qa/                            # Jaminan kualiti visual, tangkapan skrin, & laporan metrik
└── design-reference/desktop/      # 5 reka bentuk rujukan yang telah diluluskan
```

---

## 🔍 Jaminan Kualiti Visual & Prestasi

- **Ketepatan Komposisi:** Semua halaman mencapai penjajaran visual yang tinggi (sehingga **89.3% pada Karya** dan **83.6% pada Catatan**).
- **Integriti Jenis & Sintaks:** Disahkan bebas daripada sebarang ralat TypeScript dan amaran linting.
- **Aksesibiliti & Gerakan:** Menyokong penuh tetapan `prefers-reduced-motion` untuk pengguna yang sensitif terhadap pergerakan skrin.
- **Pengesahan CI:** Pengesahan jenis kod, kualiti sintaks, dan binaan pengeluaran disahkan secara automatik melalui GitHub Actions.

---

## 📜 Lesen & Hak Cipta

Hak cipta terpelihara (c) 2026 **Muhammad Syahmi (syahmiaof)**. Dilesenkan di bawah [Proprietary All Rights Reserved](LICENSE).

---

## 👤 Pembangun

* **Nama:** [Muhammad Syahmi (syahmiaof)](https://github.com/syahmiaof)
* **Portfolio:** [syahmiaof.my](https://syahmiaof.my)
* **Live Editorial:** [story.syahmiaof.my](https://story.syahmiaof.my)

---

<div align="center">
  <p>© 2026 <strong>Muhammad Syahmi (syahmiaof)</strong>. Hak Cipta Terpelihara.</p>
</div>
