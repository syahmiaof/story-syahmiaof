from pathlib import Path
from PIL import Image, ImageChops, ImageEnhance
import numpy as np
ROOT=Path(__file__).resolve().parents[1]
pages=[('utama','01-utama-homepage.png'),('kisah','02-kisah-my-story.png'),('perjalanan','03-perjalanan-my-journey.png'),('karya','04-karya-creations.png'),('catatan','05-catatan-reflections.png')]
for folder in ['references','before','final','overlays','diffs','reports']:
    (ROOT/'visual-qa'/folder).mkdir(parents=True,exist_ok=True)
rows=[]
for name,refname in pages:
    ref=Image.open(ROOT/'design-reference/desktop'/refname).convert('RGB')
    cur=Image.open(ROOT/'visual-qa/final'/f'{name}-desktop.png').convert('RGB')
    if ref.size!=cur.size: raise ValueError(f'{name}: native viewport mismatch: {ref.size} vs {cur.size}')
    ref.save(ROOT/'visual-qa/references'/refname)
    Image.blend(ref,cur,.5).save(ROOT/'visual-qa/overlays'/f'{name}-overlay.png')
    diff=ImageChops.difference(ref,cur)
    ImageEnhance.Brightness(diff).enhance(2.3).save(ROOT/'visual-qa/diffs'/f'{name}-diff.png')
    pair=Image.new('RGB',(ref.width*2,ref.height),(255,255,255)); pair.paste(ref,(0,0)); pair.paste(cur,(ref.width,0))
    pair.save(ROOT/'visual-qa/reports'/f'{name}-comparison.png',optimize=True)
    rows.append((name,*ref.size,float(np.asarray(diff,dtype=np.float32).mean())))
report=['# Final visual fidelity report','', 'Captures use Chromium at device scale factor 1, the native reference viewport dimensions, decoded assets, locally hosted fonts and ?visualqa=1 for a static resting composition. Pixel MAE is recorded as an image difference only; it is not a perceptual similarity score.','','| Route | Native viewport | Mean absolute RGB difference (0–255) |','|---|---:|---:|']
for name,w,h,mae in rows: report.append(f'| /{name if name != "utama" else ""} | {w} × {h} | {mae:.2f} |')
report += ['', '## Verified changes','', '- Rebuilt all five page heroes from the approved reference artwork while keeping navigation, headings, paragraphs, links, buttons and quotes as live DOM.', '- Preserved the back-facing figure ascending stairs on Perjalanan and the dark floating screens on Karya.', '- Restored three illustrated Kisah modules, three Perjalanan milestones, four Catatan reflection cards and the Utama teaser.', '- Self-hosted OFL Bodoni Moda and Tinos fonts, measured headline bounds, added reduced-motion support and static screenshot mode.', '- Added accessible navigation labels, keyboard focus and working story, timeline and reflection dialogs.', '', '## Screenshot evidence','', 'Each *-comparison.png places the reference on the left and final render on the right. Alpha overlays and difference maps are in matching folders. Full screenshots are under visual-qa/final; mobile captures use 390 × 844.', '', '## Residual differences','', '- Original editable artwork and original display font were not supplied. Masked text regions use local inpainting, so texture differs in cleared regions; Catatan arch and some light hero texture are slightly softened near cleaned overlays.', '- Font rasterization, exact original letterforms and fine card copy and spacing remain different. No pixel-perfect or fabricated similarity claim is made.', '', '## Checks','', '- npm run build: passed; all five routes prerender.', '- npm run lint: passed with no ESLint warnings or errors (Next.js reports next lint is deprecated).', '- npx tsc --noEmit: passed.', '- Production captures: five desktop native viewports and five mobile viewports; no browser errors or horizontal overflow; fonts loaded.', '- Navigation, language switch and reading dialogs were checked in Chromium.', '', '## Delegation','', '- Specialized agents completed visual forensics, artwork extraction audit and font comparison. The motion agent could not complete its deliverable before its usage limit; motion cleanup remains in ParallaxHero and useReferenceMotion.', '']
(ROOT/'VISUAL_FIDELITY_FINAL_REPORT.md').write_text('\n'.join(report),encoding='utf-8')
print('\n'.join(f'{n}: {w}x{h}, MAE={e:.2f}/255' for n,w,h,e in rows))
