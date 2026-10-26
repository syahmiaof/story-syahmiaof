# Reference geometry and visual forensics

Measured 26 October 2026 by the Visual Forensics agent. Coordinates are CSS pixels at device scale factor 1 in the **native reference viewport**, origin top left. Bounds use `(left, top, right, bottom)`. Ink bounds were measured by RGB threshold within isolated title regions; other bounds below are manual image measurements, generally accurate to about 2–5 px. They are not inferred from the old implementation. Font point sizes cannot be recovered exactly from flattened images; cap-height and silhouette targets are the reliable measurements.

## Approved sources

| Route | File in `visual-qa/references/` | Native size | Identical root original |
|---|---|---|---|
| `/` | 01-utama-homepage.png | 1672 × 941 | Ini Baru Permulaan_ Kisah Visual Syahmiaof.png |
| `/kisah` | 02-kisah-my-story.png | 1672 × 941 | Luxury Editorial Story Collage.png |
| `/perjalanan` | 03-perjalanan-my-journey.png | 1672 × 941 | Walking Toward New Horizons.png |
| `/karya` | 04-karya-creations.png | **2069 × 760** | Karya_ Martial Arts Techscape.png |
| `/catatan` | 05-catatan-reflections.png | 1774 × 887 | Cinematic Catatan Portfolio Landing Page.png |

Pillow confirmed decoded RGB pixels are identical between every named root original and its `design-reference/desktop/` copy. The selected Perjalanan is the large back-facing walking figure; Karya is the dark floating-screen arrangement. Reference copies above are unmodified.

**Important:** Previous Karya captures were 2048 × 752 and therefore not native-size comparisons. Its 2069 × 760 image may be automatically reduced to 2048 × 752 by an image viewer. Do not confuse viewer display dimensions with file dimensions.

## Shared light-page navigation

Header spans y=0–71, bottom rule at y=71. Background belongs to the underlying continuous artwork; right-hand marble reaches the very top. Logo ink occupies approximately `(69,25,274,48)`, simple medium-weight serif capitals, not the heavy condensed display face. Separator at x=310, y=25–49. Nav labels are approximately 18 px conventional serif with normal case. Centers: Utama x=602, Kisah x=698, Perjalanan x=806, Karya x=919, Catatan x=1017. Top ink y=29–43. Active underline y=53–56, 3 px thick, follows label width (Utama x579–625, Kisah x678–718, Perjalanan x768–844). Language pill `(1505,20,1606,55)`, radius ~18, dark burgundy, white serif label `BM / EN` at y32. No duplicate navigation or dotted grid exists in these references.

## Typography character

Main headlines use extremely condensed high-contrast Didone capitals: near-vertical sides, bracketless hairline serifs, high thick/thin contrast, tall narrow counters. Existing rendered Bodoni Moda at the old settings has a much wider silhouette and much shorter caps. The aim should be a close legally usable font with deliberate horizontal metric fitting, not merely increasing font-size. Body type is a conventional editorial serif, not geometric sans. The following widths and cap heights should drive comparison. The second lines must never wrap.

## Utama, 1672 × 941

| Element | Reference geometry |
|---|---|
| Eyebrow | First dot (73,136), rule x80–106, `MY STORY` x116–199. Second rule x265–326 ending dot (326,137), `MY JOURNEY` x346–451. Text top y132; small tracked serif. |
| `INI BARU` black ink | **(68,170,540,328)**, 472 × 158 |
| `PERMULAAN.` red ink | Approximately (66,340,716,497), ~650 × 157; red sphere to its right must be excluded from text measurement. |
| Body | x71, first ink y520, last baseline ~596. 3 lines, ~25 px type / 29 px line-height, width ~594. |
| Body copy | `Aku tak bermula dengan segala-galanya. Aku cuma ada` / `impian, keberanian untuk mencuba, dan satu keputusan —` / `untuk tidak berhenti membina masa depan aku sendiri.` |
| Primary CTA | (70,618,316,675), rounded radius ~20; `Kenali Kisah Aku` plus fine arrow, normal-case serif ~20 px. |
| Secondary CTA | (334,618,576,675), ~1 px outline, same radius, `Terokai Perjalanan`. |
| Scroll cue | Dot (38,666), vertical line x38 y676–737; downward arrow (79,697–719), tracked text x103 y707. |
| Hero boundary | **y744**, exactly horizontal. |
| Next section | Number 01 x69 y808–833, red rule x122–225 y822; CERITA ink (281,802,519,901); vertical rule x589 y798–906; prose x647 y818–883; art enters right around x1050. |

Artwork: head/hair roughly `(1043,113,1355,373)`, body flows down to x795–1460 at hero bottom. Ivory slab diagonally from x1120 at top toward x940 at y590; behind head. Burgundy disc visible from `(780,91)` through x1100/y330. Glass sphere `(678,272,777,366)`. First floating landscape screen starts `(841,300)` behind slab. Right black editorial screen approximately `(1426,189,1672,636)`. Foreground ribbon crosses diagonally from `(558,744)` to `(1450,348)` and wraps behind the subject. Preserve exact composite positioning: old image was shifted about 80 px right.

Colors: sampled background `(20,100)` = RGB 244,237,227 (`#f4ede3`); `(20,400)`=244,240,231. Black title dominant ~`#080503`; burgundy main title dominant ~`#590306`. Background has gentle irregular light/texture, never regular dotted noise.

Ten largest baseline differences, ranked: 1. composition shifted right and mismatched split; 2. baked title fragments behind real title; 3. title cap height only ~92 instead of 158; 4. overly wide title; 5. hero boundary 810 instead of744; 6. teaser section entirely different; 7. duplicate nav from artwork; 8. wrong sans body and wrapping; 9. square uppercase CTAs; 10. dotted overlay and missing scroll cue.

## Kisah, 1672 × 941

| Element | Reference geometry |
|---|---|
| Eyebrow | Dot (73,137); CHAPTER 01 x116–212, second rule x259–333, MY STORY x354–435; top y132. |
| `SEMUANYA` black ink | **(69,168,616,322)**, 547 × 154 |
| `ADA CERITA.` red ink | **(61,332,705,481)**, 644 × 149 |
| Body | (70,499) to approx (611,596), 4 lines, ~23 px /27 px. |
| Body copy | `Aku bukan bermula dengan segalanya. Aku bermula` / `dengan persoalan, dengan jatuh dan bangun, dengan mimpi` / `yang tak pernah padam. Setiap langkah, setiap luka,` / `setiap pertemuan — semuanya membawa aku ke sini.` |
| Primary CTA | (69,615,301,669), radius~18, Kenali Kisah Aku + arrow. |
| Secondary CTA | (317,615,517,669), Lihat Perjalanan. |
| Scroll | Dot (38,669), vertical x38 y677–729; down arrow x78, label x102 around700. |
| Hero boundary | **y734**. |
| Module1 | x70–547; eyebrow y756, ASAL-USUL title x91 y780–806; body x91 y822–883; read action y909. Image `(345,745,547,926)`. |
| Module2 | x610–1092; PERJUANGAN title x631 y780; text x631 y822; image `(894,745,1092,926)`. |
| Module3 | x1160–1620; TITIK PERUBAHAN title x1182 y780; image `(1449,745,1620,926)`. |

Artwork: head/hair `(970,115,1229,348)`, raised hand `(876,189,1010,295)`, main seated silhouette approximately `(709,117,1392,688)`. White rock x625–988 y242–613. Red sphere `(688,165,783,255)`. Giant burgundy disc begins near `(761,72)` through `(1120,400)`. Main ribbon rises from `(530,650)` toward x1420/y260 and loops across foreground bottom. Black story card starts x1474,y159; lower portrait card `(1281,471,1646,734)`. Artwork must extend down to734; old implementation cuts it off at650.

Background sample `(20,100)`=246,241,231 (`#f6f1e7`). Black title mostly pure black; red second line dominant ~`#5d0002`.

Ten largest baseline differences: 1. missing entire three-module lower section; 2. hero art ends at650 instead734; 3. wrong three-line heading; 4. wide/short display type; 5. baked red text at image's left edge; 6. artwork shifted right; 7. missing CTAs and scroll cue; 8. wrong body copy/type; 9. duplicate nav; 10. dotted background.

## Perjalanan, 1672 × 941

| Element | Reference geometry |
|---|---|
| Eyebrow | Dot (73,136); CHAPTER02 x116, second line x266–326, MY JOURNEY x346–450. |
| `AKU MASIH` black ink | **(66,170,634,315)**, 568 ×145 |
| `MELANGKAH.` red ink | **(66,323,714,468)**, 648 ×145 |
| Body | x70,y488–586, 4 lines, ~23 px /27px. |
| Body copy | `Setiap langkah membawa aku lebih dekat kepada versi diri` / `yang aku impikan. Aku terus belajar, membina, dan meneroka` / `peluang baharu — dengan disiplin, rasa ingin tahu,` / `dan keyakinan untuk masa depan.` |
| Primary CTA | (69,606,303,658), radius~16, Lihat Timeline + arrow. |
| Secondary CTA | (317,606,575,658), Terokai Perjalanan. |
| Scroll cue | Dot(38,644), vertical x38,y654–707; arrow x80,y671; label x105,y679. |
| Hero boundary | **y708**. |
| Timeline1 | Left dot (71,730); vertical x71,y747–926; year2022 `(92,743,214,796)`; ASAS DISIPLIN x93,y806; text x94,y835; read action x94,y915. Image `(347,719,554,926)` with separator x321. |
| Timeline2 | Left dot(628,730), vertical x628; 2025 `(650,743,768,796)` burgundy; BAB BAHARU x650,y806. Image `(891,719,1093,926)`. |
| Timeline3 | Left dot(1169,730), vertical x1169; 2026 `(1191,743,1309,796)`; TERUS MEMBINA x1191,y806. Image `(1429,719,1636,926)` with separator x1407. |

Artwork: **back-facing** hair `(1104,124,1200,205)`; walking coat/body silhouette approx `(931,125,1271,708)`, no front/side main pose. Coat hem y609–621; lifted boot at x1038,y602–706. Stairs start broadly x876,y508 to1360,708. Disc `(780,65)` to1120,294. Small orb `(811,220,884,291)`. White jagged slab x651–1003,y188–578, landscape frame starting (838,322). Architectural portal spans x1450–1672,y65–551. Front black card roughly `(1406,341,1533,652)`. Foreground ribbon passes from x593,y670 towardx1017,y458 then sweeps down to1635,708.

Background `(20,100)`=249,244,235 (`#f9f4eb`). Main red title dominant~`#5a0104`.

Ten largest baseline differences: 1. missing entire timeline in first viewport; 2. art bottom at650 instead708; 3. title wraps AKU/MASIH into two separate lines; 4. second title enormous width; 5. baked title fragments; 6. character shifted right and cropped boot; 7. missing CTAs; 8. wrong prose and sans type; 9. duplicate navigation; 10. dotted background and absent scroll cue.

## Karya, 2069 × 760

This reference has **no navbar**. Adding the light-page nav into the image changes its approved composition. A functional navigation mechanism can live below the hero or appear outside this resting reference capture.

| Element | Reference geometry |
|---|---|
| Chapter eyebrow | 03 approx `(74,83,119,112)`; red rule x150–317,y99; dot(350,100); THE CREATIONS x379–574,y97–108. |
| `KARYA` ivory ink | **(99,174,613,385)**,514×211; burgundy dot approx `(618,353,650,385)`. |
| Subheading | `(100,408,592,429)`, tracked serif ~29px, **one line**, DARI FIKIRAN KE REALITI. |
| Vertical rule | x61,y463–706; red dot(62,453). |
| Body | `(104,465)` to about `(513,541)`, three lines, ~25px/29px. |
| Body copy | `Idea yang bermula di dalam fikiran,` / `kini menjadi website, sistem, automasi` / `dan lebih banyak lagi.` |
| CTA | `(99,581,410,643)`, capsule radius~32, thin ruby outline. `Terokai Karya` + long arrow, ~23px serif. |
| Counter | `03 / 05` x100,y697–707; rule x178–336,y701. |
| Left dark architecture | Full height to x725; thin upright pale stone x675–728. Bottom mist occupies x0–445,y603–760. |

Artwork native coordinates (viewer can scale these down): wide cream screen x923–1385,y111–458; main top dark martial-arts screen x1253–1696,y21–384; lower cream screen x1267–1672,y280–660; right black cloud screen x1646–1952,y219–569; dashboard bottom x899–1218,y465–680; upper small screen x1721–1996,y53–251. Left ruby sphere approx `(729,445,823,537)`, central bottom sphere `(1057,617,1184,734)`, huge partial sphere enters x1844,y520 to beyond right/bottom. These overlap with perspective baked into artwork; no generic card geometry can reproduce them.

Background sample `(20,100)`=6,3,2 (`#060302`), ivory title dominant `#faf1e5`; irregular architecture shadow rather than flat black.

Ten largest baseline differences: 1. five-line red tagline instead one tracked ivory line; 2. title cap height92 instead211; 3. title at y52 instead174; 4. left architecture and mist missing; 5. nav intruding at top; 6. wrong body below fold; 7. missing CTA; 8. art starts too far right and native viewport wrong; 9. wrong chapter treatment; 10. dotted texture.

## Catatan, 1774 × 887

Dark header border y65, height66. Logo `(90,23,270,45)` appears more open and simple than display title. Divider x309,y24–45. Nav centers x645,741,845,957,1058; top ink y26. Active line x1030–1085,y51–54. Divider x1456,y23–44; language capsule `(1504,19,1599,51)`; menu icon x1644–1670, y25–44 (three hairline strokes).

| Element | Reference geometry |
|---|---|
| Eyebrow | 05 `(92,126,128,150)`, rule x149–240,y140; dot(264,140); THE REFLECTIONS x289–465,y139–148. |
| `CATATAN` ivory ink | **(95,186,532,312)**,437×126; red dot approximately(539,286,565,312). |
| Subheading | `(93,333,482,349)`, tracked serif ~22px, one line AKU PERCAYA PADA PROSES. |
| Body | `(96,378)` to `(426,437)`, 3 lines, ~20px/23px. |
| Body copy | `Sebuah ruang untuk fikir, catat, dan` / `kembali mengingat — tentang hidup,` / `ilmu, perjuangan, dan masa depan.` |
| CTA | `(92,463,337,517)`, capsule radius~27, ruby outline, Terokai Catatan + arrow. |
| Vertical cue | dot(56,394); line x56,y402–585; counter05/05 x93,y550; rule x158–285,y553. |
| Quote mark | two burgundy quote shapes over `(1343,158,1425,224)`. |
| Quote text | `(1394,239)` to approx `(1682,360)`, italic serif28px/34px, 4 lines. |
| Quote copy | `Setiap proses, walaupun` / `tampak perlahan, tetap` / `membawa kita ke tempat` / `yang lebih baik.` |
| Signature | Fine rule x1395–1451,y409; SYAHMIAOF x1468–1581,y405–414, tracked small caps. |
| Module boundaries | **y603–806**. 1:(55,603,464,806);2:(491,603,884,806);3:(914,603,1303,806);4:(1329,603,1726,806). Thin muted borders and corner radius~5. |
| Module text | x87/522/945/1360; chapter numbers y630; headings y658, capheight~24; body y694–736; arrow pill around y756–785. |
| Footer | bottom nav baseline ~859; logo x90; STORY OF BECOMING x218; right TERUS MELANGKAH atx1537. Footer shares underlying artwork. |

Artwork: central arch opening `(754,59,951,428)` with bright sky; seated character hair `(1009,171,1205,324)`, full silhouette approx `(614,174,1306,604)`, boot/bent leg extends left to x614,y603. Ruby sphere `(634,298,715,377)`. Massive disc behind right side starts near x903,y65. Main ribbon curves from x558,y381 under the forearm then x1091,y603 to1405,y464. Right blurred sphere enters x1570,y483. Lower foreground stone and ruby spheres continue beneath modules to887.

Background sample `(20,100)`=5,4,3; title highlights ~`#fdf6eb`. Source lighting is richly textured brown/charcoal, not a solid black split. Quote has no enclosing card border or FALSAFAH DIRI label.

Ten largest baseline differences: 1. title clipped at viewport top; 2. tagline wrongly huge across four red lines; 3. central character tiny/cropped into inset rectangle; 4. artwork does not fill background; 5. four illustrated modules replaced by category filters and generic cards; 6. duplicate nav baked into central art; 7. quote incorrectly boxed and smaller; 8. missing CTA and vertical cue; 9. body clipped/incorrect; 10. dotted texture and wrong footer placement.

## Baseline interpretation and recommended ordering

Existing `visual-qa/after/` files were inspected, but they are evidence of the **previous** implementation, not final screenshots for this work. Its prior report attributes large deviations to antialiasing and calls composition 1:1; visual inspection directly contradicts that assertion. A normalized mean pixel error is not a perceptual similarity or a pass threshold, especially on largely uniform backgrounds.

Fix first: (1) clean artwork bounds with no baked page-level text/nav, (2) exact native-size composition and fold boundaries, (3) title silhouette and line breaks. Then restore serif prose, rounded CTAs, navigation and lower editorial modules. Animations must be disabled for captures, with all intended content at its resting opacity/transform, fonts/images awaited, and device scale factor 1. Compare at reference dimensions without resizing either source.

Remaining limits: original editable art/type files and exact original display font are not present. Pixel-level perfection should not be asserted from these raster references. Record measured residual differences and visual inspection honestly.
