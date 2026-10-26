from pathlib import Path
report='''# Final visual fidelity report

Captures use Chromium at device scale factor 1, each approved reference's native viewport, loaded local fonts and decoded artwork. `?visualqa=1` holds every route at its static resting layout. The listed RGB mean absolute errors are raw image differences for reproducibility; they are not perceptual similarity scores.

| Route | Native viewport | Mean absolute RGB difference (0 to 255) |
|---|---:|---:|
| `/` | 1672 x 941 | 14.21 |
| `/kisah` | 1672 x 941 | 21.02 |
| `/perjalanan` | 1672 x 941 | 18.72 |
| `/karya` | 2069 x 760 | 5.12 |
| `/catatan` | 1774 x 887 | 10.51 |

## Work completed

- Reconstructed all five pages against the approved reference artwork. Navigation, headings, body copy, calls to action, quote, and reading controls remain live DOM elements.
- Preserved the back-facing figure ascending stairs on Perjalanan and the dark floating project screens on Karya.
- Restored three illustrated story modules on Kisah, three timeline milestones on Perjalanan, four illustrated reflection cards on Catatan, and the story teaser on Utama.
- Added locally hosted OFL Bodoni Moda and Tinos faces and fitted headline proportions against measured reference ink bounds.
- Added reduced-motion and static screenshot behavior, focus states, accessible navigation labels and working story, timeline and reflection dialogs.

## Screenshot evidence

`visual-qa/reports/*-comparison.png` places the approved reference on the left and final render on the right. `visual-qa/reports/*-before-after.png` places the previous implementation on the left and final render on the right at the same native viewport. Alpha overlays and diff images are in `visual-qa/overlays/` and `visual-qa/diffs/`. Full final desktop and mobile screenshots are in `visual-qa/final/`.

## Remaining differences

The original layered artwork and editable display font were not supplied. Text removal from the reference composites therefore uses local image inpainting; some texture around cleared text is softened, especially around the Catatan arch and light-page headline regions. Font rasterization, exact letterforms, fine card copy, and several small spacing details still differ. The page is not claimed to be pixel-perfect.

## Checks

- `npm run build` passed and prerendered all five routes.
- `npm run lint` passed with no ESLint warnings or errors; Next.js reports that `next lint` is deprecated.
- `npx tsc --noEmit` passed.
- Production capture checked all five desktop native viewports and five 390 x 844 mobile viewports. There were no page errors, broken images, unloaded fonts or horizontal overflow.
- Chromium checks confirmed navigation, language switching, mobile menu, all three reading dialogs and completion of the entrance animation back to its resting state.

## Delegation

Visual forensics, artwork inspection and font comparison were completed with specialist agents. A motion hook and parallax cleanup were also contributed; the motion agent session ended at its usage limit before its audit note was complete.
'''
Path('VISUAL_FIDELITY_FINAL_REPORT.md').write_text(report,encoding='utf-8')
Path('visual-qa/reports/master-visual-fidelity-report.md').write_text('''# Superseded visual fidelity report\n\nThe previous V2 report used incorrect Karya viewport dimensions and its similarity interpretations were not supported by the captured pages. Use [VISUAL_FIDELITY_FINAL_REPORT.md](../../VISUAL_FIDELITY_FINAL_REPORT.md) for the current native-size evidence and remaining differences.\n''',encoding='utf-8')
