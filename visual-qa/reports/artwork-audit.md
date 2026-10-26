# Artwork reconstruction audit

Agent B inspected the five original references and all existing generated hero composites at their native resolutions. The approved references are the five files in `design-reference/desktop/`. Perjalanan is the back-facing walking figure; Karya is the dark floating-screen composition; Catatan is the dark seated figure.

## Existing assets and defects

- Nine character assets and seven hero-layer assets have genuine RGBA alpha channels with both fully transparent and opaque pixels. They are useful isolated assets, but do not reproduce the exact rendered lighting, stone surroundings, perspective or reference poses when composited independently.
- All previously generated hero assets are opaque RGB crops. Their `v2` versions visibly contain baked navigation, language pills, and truncated live headline/body text. The Catatan crop also cuts off the seated body; the light crops have incorrect lower boundaries.
- The existing lower composites contain baked titles, paragraphs and controls. They must not be used as substitutes for functional DOM modules.

## Delivered scene assets

| Asset in `public/assets/generated/` | Native size | Usage |
|---|---:|---|
| `utama-scene.png` | 1672 × 744 | Full-coordinate decorative hero behind real DOM content |
| `kisah-scene.png` | 1672 × 734 | Full seated scene, including foreground ribbon and lower stone |
| `perjalanan-scene.png` | 1672 × 708 | Full back-facing ascending figure with stairs |
| `karya-scene.png` | 2069 × 760 | Dark architecture and floating screens; original scene has no header |
| `catatan-scene.png` | 1774 × 887 | Dark scene, seated figure, clean quote region and text-free lower card backdrops |

These images have navigation, headings, body copy, buttons, scroll labels and progress labels removed. They are decorative backgrounds; the implementation must render all website content and controls in DOM. Typography depicted within the floating project screens and handwritten book is retained as part of the photographed artwork. Original assets remain intact.

## Extracted module artwork

All boxes use `(left, top, right, bottom)` reference coordinates and exclusive right/bottom edges.

| Asset | Source box |
|---|---|
| `utama-teaser-art.png` | Utama `(1036,744,1672,941)` |
| `kisah-module-1.png` | Kisah `(344,745,548,927)` |
| `kisah-module-2.png` | Kisah `(893,745,1093,927)` |
| `kisah-module-3.png` | Kisah `(1448,745,1621,927)` |
| `perjalanan-module-1.png` | Perjalanan `(346,719,556,927)` |
| `perjalanan-module-2.png` | Perjalanan `(890,719,1095,927)` |
| `perjalanan-module-3.png` | Perjalanan `(1428,719,1637,927)` |
| `catatan-module-1.png` | Clean Catatan `(55,603,465,807)` |
| `catatan-module-2.png` | Clean Catatan `(491,603,884,807)` |
| `catatan-module-3.png` | Clean Catatan `(912,603,1304,807)` |
| `catatan-module-4.png` | Clean Catatan `(1330,603,1726,807)` |

The Catatan crops include the complete decorative card scene with its original text/control regions cleaned. Other module crops contain only artwork.

## Method, validation and limitations

`qa/artwork-reconstruct.py` reproduces all assets using Pillow, NumPy and OpenCV. The user explicitly authorized extraction, masking and reconstruction. UI rectangles are inpainted from adjacent reference texture with a two-pixel mask expansion; broad masks avoid leaving anti-aliased letter outlines. Two glyph-only mask trials were visually rejected for text-shaped halos. The final full-region masks were inspected visually on every output.

The original layered image files do not exist in the project. Hidden stone/ivory texture beneath old text cannot be recovered exactly; inpainted regions are locally softened and can differ from the unknowable clean original. This is a documented reconstruction limitation, not a pixel-perfect restoration claim. No character, screen, ribbon or major architectural object was generated or replaced.

Exact pixel comparison confirmed 100% unchanged pixels in these artwork regions (this is an asset integrity check, **not** a website similarity score):

- Utama `(900,100,1450,744)`.
- Kisah `(730,100,1430,700)`.
- Perjalanan `(910,100,1310,708)`.
- Karya `(740,0,2069,760)`.
- Catatan `(568,100,1325,602)`.

All 16 new PNG assets were opened/read successfully. Full-browser composition and responsive validation remain the responsibility of the primary implementation and independent QA agents.
