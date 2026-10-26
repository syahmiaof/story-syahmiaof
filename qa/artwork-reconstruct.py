"""Extract approved scene artwork, removing web UI rather than baking it into the site.

Run: python qa/artwork-reconstruct.py
Requires Pillow, numpy and opencv-python-headless. All coordinates are reference pixels.
Text on the depicted floating project screens/book remains part of the artwork.
"""
from pathlib import Path
import cv2
import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'public/assets/generated'
REF = ROOT / 'design-reference/desktop'

def image(name):
    return np.array(Image.open(REF / name).convert('RGB'))

def erase(a, boxes, radius=6):
    """Inpaint only declared UI regions; never reshape or regenerate the artwork."""
    mask = np.zeros(a.shape[:2], np.uint8)
    for box in boxes:
        x1,y1,x2,y2,*_ink_annotation = box
        # Full UI bounds prevent anti-aliased glyph outlines remaining in the image.
        mask[y1:y2,x1:x2] = 255
    mask = cv2.dilate(mask, np.ones((5,5),np.uint8))
    return cv2.inpaint(a,mask,radius,cv2.INPAINT_TELEA)

def save(a,name):
    Image.fromarray(a).save(OUT/name,optimize=True)
    print(name, a.shape[1], a.shape[0])

nav_light = [(65,19,278,50,'dark'),(307,23,314,50),(575,25,1050,58,'dark'),(1502,17,1610,58),(0,69,1672,73)]
specs = [
    ('01-utama-homepage.png','utama-scene.png',744,
     [(62,127,456,146,'dark'),(61,164,547,332,'dark'),(61,336,680,501,'red'),(680,459,721,501),(66,515,670,600,'dark'),(67,615,579,678),(31,660,43,742),(67,694,269,720,'dark')]),
    ('02-kisah-my-story.png','kisah-scene.png',734,
     [(63,127,440,146,'dark'),(58,163,618,325,'dark'),(57,329,709,483,'red'),(66,497,610,599,'dark'),(65,612,521,673),(32,665,43,732),(66,687,271,713,'dark')]),
    ('03-perjalanan-my-journey.png','perjalanan-scene.png',708,
     [(63,127,456,145,'dark'),(59,165,638,317,'dark'),(59,320,717,471,'red'),(66,484,667,594,'dark'),(65,603,578,661),(32,639,43,708),(66,669,269,694,'dark')]),
]
for ref,name,height,boxes in specs:
    a=image(ref)[:height]
    save(erase(a,nav_light+boxes),name)

# The Karya reference has no header. Keep every architectural/screen pixel outside UI masks.
a=image('04-karya-creations.png')
s=a.shape[1]/2048
boxes=[(70,77,567,115),(87,163,646,385,'light'),(97,401,590,428,'light'),(98,456,513,539,'light'),(94,571,410,640),(56,443,66,704),(95,686,337,704)]
boxes=[tuple(round(n*s) for n in box[:4])+tuple(box[4:]) for box in boxes]
# Punctuation is ruby and would survive the light-pixel mask.
boxes.append(tuple(round(n*s) for n in (607,346,646,385)))
save(erase(a,boxes,8),'karya-scene.png')

a=image('05-catatan-reflections.png')
boxes=[(85,18,274,49,'light'),(306,21,313,47),
       (622,22,671,48,'light'),(719,22,768,48,'light'),(807,22,884,48,'light'),
       (936,22,982,48,'light'),(1030,22,1088,48,'light'),
       (1452,18,1460,47),(1500,16,1605,55),(1640,20,1674,47),(0,63,1774,68),
       (88,119,473,155),(87,177,537,316,'light'),(536,282,566,314),
       (89,328,483,354,'light'),(92,373,416,442,'light'),(88,459,341,520),
       (51,389,63,588),(89,544,289,562),
       (1337,154,1430,228),(1390,234,1688,369,'light'),(1390,376,1595,417),
       (85,847,392,864,'light'),(1410,847,1688,865,'light')]
# Remove lower card text, counting label, rule and arrow button, preserving their scene art.
for x in [55,491,912,1330]:
    boxes += [(x+28,625,x+107,646),(x+28,653,x+172,683,'light'),(x+28,690,x+206,741,'light'),(x+27,751,x+88,790)]
save(erase(a,boxes,6),'catatan-scene.png')

# Pure artwork crops: no website navigation, headings, body copy or buttons.
crops = {
 'utama-teaser-art.png':('01-utama-homepage.png',(1036,744,1672,941)),
 'kisah-module-1.png':('02-kisah-my-story.png',(344,745,548,927)),
 'kisah-module-2.png':('02-kisah-my-story.png',(893,745,1093,927)),
 'kisah-module-3.png':('02-kisah-my-story.png',(1448,745,1621,927)),
 'perjalanan-module-1.png':('03-perjalanan-my-journey.png',(346,719,556,927)),
 'perjalanan-module-2.png':('03-perjalanan-my-journey.png',(890,719,1095,927)),
 'perjalanan-module-3.png':('03-perjalanan-my-journey.png',(1428,719,1637,927)),
}
for name,(ref,box) in crops.items():
    Image.open(REF/ref).crop(box).save(OUT/name,optimize=True)
for i,(x1,x2) in enumerate([(55,465),(491,884),(912,1304),(1330,1726)],1):
    Image.open(OUT/'catatan-scene.png').crop((x1,603,x2,807)).save(OUT/f'catatan-module-{i}.png',optimize=True)



