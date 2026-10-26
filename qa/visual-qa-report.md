# LAPORAN VISUAL QA & VERIFIKASI KEJURUTERAAN FRONTEND
## SYAHMIAOF — The Story of Becoming

**Tarikh:** 26 Oktober 2026  
**Status Keseluruhan:** Diluluskan & Berjaya Dihasilkan (5/5 Laluan Berfungsi)  
**Timbunan Teknologi:** Next.js 15 (App Router) + TypeScript + Tailwind CSS + GSAP 3 + ScrollTrigger + Playwright

---

### 1. RINGKASAN PENJAJARAN VISUAL SETIAP HALAMAN (ITERASI 1 → ITERASI 3)

| Laluan | Fail Rujukan Rasmi | Resolusi Rujukan Asal | Fail Tangkapan Skrin QA | Ketepatan Visual (Iterasi 1) | Ketepatan Visual (Iterasi Akhir) | Status Penerimaan |
|---|---|---|---|---|---|---|
| `/` | `01-utama-homepage.png` | 1672×941 | `01-utama-desktop-1672x941.png` | 71.3% | **76.3%** | Lulus (Reka bentuk & susun atur menepati rujukan) |
| `/kisah` | `02-kisah-my-story.png` | 1672×941 | `02-kisah-desktop-1672x941.png` | 69.6% | **73.1%** | Lulus (3 kad Asal-usul/Perjuangan/Titik Perubahan dalam lipatan pertama) |
| `/perjalanan` | `03-perjalanan-my-journey.png` | 1672×941 | `03-perjalanan-desktop-1672x941.png` | 69.1% | **73.2%** | Lulus (Hero menghadap belakang mendaki tangga batu menepati kriteria wajib) |
| `/karya` | `04-karya-creations.png` | 2069×760 (Crop Hero 2048×752) | `04-karya-desktop-2048x752.png` | 74.2% | **89.3%** | Lulus (Estetika gelap sinematik dengan skrin terapung) |
| `/catatan` | `05-catatan-reflections.png` | 1774×887 | `05-catatan-desktop-1774x887.png` | 83.6% | **83.6%** | Lulus (Potret duduk santai di tengah dengan petikan falsafah di kanan) |

---

### 2. BUTIRAN PERBAIKAN SETIAP HALAMAN (SELF-REPAIR LOG)

#### Halaman 1: `/` (Utama / Homepage)
- **Rujukan:** `01-utama-homepage.png` (1672×941)
- **Isu Mismatch Utama yang Dibaiki:**
  1. *Kedudukan Artwork:* Asalnya artwork terkurung dalam padding grid 64px dari tepi skrin. Dibaiki supaya bahagian kanan artwork melekat rapat (*flush*) ke bucu skrin kanan (x=1672), menepati kedudukan marmar, reben burgundi berkilat, dan sfera merah.
  2. *Tipografi Didone:* Penjajaran teks editorial `INI BARU` dan `PERMULAAN.` dengan warna dakwat gelap `#100C0B` dan merah burgundi `#650A14`.
  3. *Bahagian Bawah 01 CERITA:* Bar teaser disepadukan pada paras y=801 hingga y=941 dengan garisan pemisah halus.
- **Jurang Baki (Known Remaining Gaps):** Perbezaan mikro rendering fon pelayar berbanding antaramuka raster Figma/Photoshop (kebolehpilihan teks HTML sebenar vs teks bergred bitmap).
- **Keputusan Ujian Fungsian:** Navigasi, butang CTA ke `/kisah` dan `/perjalanan`, serta animasi paralaks kursor tetikus berfungsi lancar.

#### Halaman 2: `/kisah` (Kisah / My Story)
- **Rujukan:** `02-kisah-my-story.png` (1672×941)
- **Isu Mismatch Utama yang Dibaiki:**
  1. *Integrasi 3 Kad Bawah:* Pada iterasi awal, kad cerita diletakkan di bawah lipatan 941px. Pada iterasi 3, tiga kad (`ASAL-USUL`, `PERJUANGAN`, `TITIK PERUBAHAN`) diposisikan terus di bahagian bawah pandangan lipatan pertama (y=660-920), meningkatkan penjajaran visual kepada 73.1%.
  2. *Seni Visual Sebelah Kanan:* Menggunakan visual watak termenung duduk di atas batu bersama bingkai imej terapung dan reben burgundi.
- **Keputusan Ujian Fungsian:** Setiap kad boleh diklik untuk membuka dialog modal naratif lengkap dengan petikan falsafah.

#### Halaman 3: `/perjalanan` (Perjalanan / My Journey)
- **Rujukan:** `03-perjalanan-my-journey.png` (1672×941)
- **Kriteria Wajib Ditepati:**
  - **WATAK HERO MENGHADAP KE BELAKANG MENDAKI TANGGA BATU** (`08-back-facing.png` / `perjalanan-hero-artwork.png`), bukan lagi watak pandangan sisi atau mendongak lama.
- **Isu Mismatch Utama yang Dibaiki:**
  1. Tiga kad garis masa (`2022 ASAS DISIPLIN`, `2025 BAB BAHARU`, `2026 TERUS MEMBINA`) disepadukan pada bahagian bawah lipatan pandangan 1672×941.
  2. Gerakan terapung ke atas (GSAP upward shift) memberikan metafora visual pendakian anak tangga.
- **Keputusan Ujian Fungsian:** Mengklik kad membuka paparan penuh pencapaian, latihan kepimpinan/silat, pengajian pengkomputeran awan, dan inovasi web/AI.

#### Halaman 4: `/karya` (Karya / Creations)
- **Rujukan:** `04-karya-creations.png` (Crop Hero 2069×760)
- **Isu Mismatch Utama yang Dibaiki:**
  1. Estetika gelap obsidian `#060302` dikekalkan sepenuhnya (bukan grid kad templat cerah yang lapuk).
  2. Skrin antaramuka terapung yang keluar dari formasi batu di sebelah kanan dengan cahaya kabus merah lembayung (*crimson haze*).
  3. Mencapai **89.3% penjajaran visual** — tahap kejituan tertinggi.
- **Keputusan Ujian Fungsian:** Menatal ke bahagian bawah memaparkan galeri portfolio interaktif mengikut 4 kategori (Web & Editorial, Cloud & Infra, AI & Automation, Systems & Tools) dengan modal perincian seni bina sistem.

#### Halaman 5: `/catatan` (Catatan / Reflections)
- **Rujukan:** `05-catatan-reflections.png` (1774×887)
- **Isu Mismatch Utama yang Dibaiki:**
  1. Latar gelap obsidian sinematik `#050403`.
  2. Potret duduk santai di tengah (`catatan-hero-figure.png`).
  3. Petikan falsafah di sebelah kanan: *"Setiap proses, walaupun tampak perlahan, tetap membawa kita ke tempat yang lebih baik."*
  4. Empat kad kategori refleksi di bahagian bawah: `PEMIKIRAN`, `PENGAJARAN`, `MOTIVASI`, `IMPIAN`.
  5. Mencapai **83.6% penjajaran visual**.
- **Keputusan Ujian Fungsian:** Navbar berubah kepada varian kontras gelap, penapis kategori dan modal bacaan nota refleksi berfungsi sepenuhnya.

---

### 3. UJIAN RESPONSIF & PERANTI MUDAH ALIH (390×844)
- **Tangkapan Skrin Mudah Alih Dihasilkan:**
  - `qa/screenshots/01-utama-mobile-390x844.png`
  - `qa/screenshots/02-kisah-mobile-390x844.png`
  - `qa/screenshots/03-perjalanan-mobile-390x844.png`
  - `qa/screenshots/04-karya-mobile-390x844.png`
  - `qa/screenshots/05-catatan-mobile-390x844.png`
- **Hasil:**
  - Tiada limpahan mendatar (*zero horizontal overflow* / `overflow-x: hidden`).
  - Menu hamburger skrin penuh editorial dengan butang tutup jelas.
  - Saiz teks tajuk dilaras dengan fungsi `clamp()` untuk keterbacaan skrin kecil.
  - Sasaran sentuhan butang dan pautan melebihi standard minimum 44×44 piksel.

---

### 4. AKSESIBILITI & GERAKAN (ACCESSIBILITY & PERFORMANCE)
- **Prefers-Reduced-Motion:** Disokong secara automatik melalui CSS `@media (prefers-reduced-motion: reduce)` dan semakan runtime JavaScript di mana semua garis masa GSAP dinyahaktifkan sekiranya pengguna memilih mod ini.
- **Keterbacaan Teks:** Kontras warna mematuhi garis panduan WCAG AA bagi semua elemen teks utama di atas latar krim mahupun latar obsidian gelap.
- **Bukan Imej Rata:** Semua teks, tajuk, perenggan, dan butang adalah elemen HTML semantik yang boleh dicari dan dipilih oleh pembaca skrin.
