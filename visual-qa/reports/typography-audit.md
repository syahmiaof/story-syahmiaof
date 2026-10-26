# Typography comparison and measurements

Agent C inspected all five approved original reference PNGs and the previous UTAMA render. The original display font file was not supplied. This is a measured reconstruction using an open-licensed face, not an assertion that the original font has been identified.

## Observed errors in the previous render

1. UTAMA's first line was approximately 92px in cap height instead of the reference's 158px; its width was much greater despite the smaller cap height.
2. Default optical size 96 on Bodoni Moda produced nearly invisible thin strokes after horizontal compression.
3. Display size alone could not reproduce the unusually condensed letter proportions.
4. Prose, navigation, and CTA labels were sans serif although the references use a traditional serif.
5. A remote Google Fonts CSS import made capture dependent on external font availability.

## Candidate comparison

The browser rendered Bodoni Moda at weights 700, 800, 850 and 900, each with optical sizes 6, 9, 12, 16, 20, 24, 36, 48 and 96; Libre Bodoni 700 was also rendered. All candidate font binaries came from the Google Fonts repository and carry their original OFL licenses.

For the controlled comparison, the black reference `INI BARU` silhouette was extracted from the original PNG at x68, y170, width472, height158. Candidate ink boxes were normalized to exactly that width and height, then visually compared and measured by binary-mask intersection over union. This evaluates this one word silhouette, **not page similarity**. The highest tested mask overlap was Bodoni Moda 900 / optical size20 (IoU 0.679); optical sizes16 and12 at weight900 were close (0.675 and0.674). Bodoni Moda900/96 scored0.666 and had visibly weaker thin strokes. The reference still differs in individual letter shapes and stroke weight, so no exact font match is claimed.

The selected face is **Bodoni Moda 900, opsz20**, with each line independently fitted in the layout. **Tinos** supplies the serif text. Google's own Tinos description states it is metrically compatible with Times New Roman; this is useful for the reference's prose widths. It is not used as the display substitute.

Sources: [Bodoni Moda and OFL](https://github.com/google/fonts/tree/main/ofl/bodonimoda), [Libre Bodoni](https://github.com/impallari/Libre-Bodoni), [Tinos family](https://github.com/google/fonts/tree/main/ofl/tinos), [Tinos license](https://github.com/googlefonts/tinos/blob/main/OFL.txt).

## Browser ink metrics for layout integration

Measured in Chromium, device scale1, actual loaded local Bodoni Moda variable font, weight900, opsz20, font-size200px, line-height1, letter-spacing0. Offset is relative to the top left of the HTML line box. Ink bounds include antialiased pixels.

| Text | Ink width | Ink height | X offset | Y offset |
| --- | ---: | ---: | ---: | ---: |
| INI BARU | 1005 | 156 | 2 | 19 |
| PERMULAAN. | 1453 | 156 | 2 | 19 |
| SEMUANYA | 1192 | 156 | 7 | 19 |
| ADA CERITA. | 1418 | 155 | 2 | 19 |
| AKU MASIH | 1278 | 156 | 2 | 19 |
| MELANGKAH. | 1499 | 155 | 2 | 19 |
| KARYA. | 823 | 155 | 2 | 19 |
| CATATAN. | 1077 | 155 | 7 | 19 |

For target cap height H and width W: `font-size = 200 × H / measuredHeight`; `scaleX = W / (measuredWidth × font-size / 200)`. Place the line box above the desired ink top by `19 × font-size / 200`; compensate the small horizontal ink offset after scaleX. A headline's condensation transform belongs on an inner span, separately from any GSAP entrance transform on its parent.

Reference cap-height targets: UTAMA158px; KISAH about154px; PERJALANAN about145px; KARYA about211px at its **native2069×760** reference; CATATAN about126px. Exact per-line boxes and responsive rules are integrated by the parent agent's reference layout.

## Files changed

- `src/styles/typography.css`: replaces remote CSS import with local font faces; display face at900/20; adds reference font CSS variables; uses Tinos for the editorial secondary face.
- `public/fonts/`: original Bodoni Moda variable font; Tinos regular/italic/bold; original OFL files; source provenance. Libre Bodoni is retained for the comparison record but is not loaded by CSS.

## Limitations and validation

The mockups appear to contain a highly compressed editorial Didone face with custom-looking letter proportions; the original editable font metrics are unavailable. Bodoni Moda preserves the Didone structure but does not exactly match every serif and stroke. Horizontal fitting and line spacing must be checked at each reference's original dimensions. Body text must remain real selectable HTML. The parent agent performs integrated final screenshots after layout changes; these measurements alone do not certify the final page.
