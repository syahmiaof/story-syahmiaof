from pathlib import Path
from PIL import Image
root=Path(__file__).resolve().parents[1]
for name,w,h in [('utama',1672,941),('kisah',1672,941),('perjalanan',1672,941),('karya',2069,760),('catatan',1774,887)]:
    before=Image.open(root/'visual-qa/before'/f'{name}-desktop.png').convert('RGB')
    after=Image.open(root/'visual-qa/final'/f'{name}-desktop.png').convert('RGB')
    if before.size!=(w,h) or after.size!=(w,h): raise ValueError(f'{name} viewport mismatch: {before.size} {after.size}')
    pair=Image.new('RGB',(w*2,h));pair.paste(before,(0,0));pair.paste(after,(w,0))
    pair.save(root/'visual-qa/reports'/f'{name}-before-after.png',optimize=True)
print('Created five exact-viewport before/after pairs.')
