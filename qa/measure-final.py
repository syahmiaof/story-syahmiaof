from PIL import Image
for f in ['design-reference/desktop/05-catatan-reflections.png','visual-qa/final/catatan-desktop.png','design-reference/desktop/04-karya-creations.png','visual-qa/final/karya-desktop.png']:
 im=Image.open(f).convert('RGB')
 box=(70,140,700,400) if '04-' in f or 'karya' in f else (70,150,650,340)
 cr=im.crop(box)
 # text warm ivory or near-white; exclude red dot/red title marks
 px=cr.load(); pts=[]
 for y in range(cr.height):
  for x in range(cr.width):
   r,g,b=px[x,y]
   if '05-' in f or 'catatan' in f: ok=min(r,g,b)>205 and max(r,g,b)-min(r,g,b)<40
   else: ok=r>210 and g>200 and b>180 and max(r,g,b)-min(r,g,b)<50
   if ok: pts.append((x+box[0],y+box[1]))
 print(f, (min(x for x,y in pts),min(y for x,y in pts),max(x for x,y in pts)+1,max(y for x,y in pts)+1) if pts else None)
