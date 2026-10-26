import os
from PIL import Image, ImageDraw, ImageFont, ImageFilter

W, H = 1200, 630

# 1. Base Canvas
canvas = Image.new("RGBA", (W, H), (247, 243, 235, 255)) # #F7F3EB

# 2. Right Hero Artwork from 01-utama-homepage
ref = Image.open("design-reference/desktop/01-utama-homepage.png").convert("RGBA")
# Crop artwork from x=620 to 1672, y=60 to 810
crop_hero = ref.crop((600, 50, 1672, 810))
scale = H / crop_hero.height
scaled_w = int(crop_hero.width * scale)
scaled_hero = crop_hero.resize((scaled_w, H), Image.Resampling.LANCZOS)

# Create an alpha gradient on the left edge of scaled_hero so it blends seamlessly into #F7F3EB
fade_w = 260
hero_rgba = scaled_hero.copy()
for x in range(fade_w):
    alpha_factor = (x / fade_w) ** 1.6
    for y in range(H):
        r, g, b, a = hero_rgba.getpixel((x, y))
        hero_rgba.putpixel((x, y), (r, g, b, int(a * alpha_factor)))

canvas.alpha_composite(hero_rgba, (W - scaled_w, 0))

# 3. Add soft editorial vignette / shadow on bottom-left for perfect contrast
draw = ImageDraw.Draw(canvas)

# Fonts
font_title = ImageFont.truetype("public/fonts/BodoniModa-Variable.ttf", 64)
font_sub = ImageFont.truetype("public/fonts/BodoniModa-Variable.ttf", 36)
font_eyebrow = ImageFont.truetype("public/fonts/Tinos-Bold.ttf", 15)
font_body = ImageFont.truetype("public/fonts/Tinos-Regular.ttf", 20)
font_badge = ImageFont.truetype("public/fonts/Tinos-Bold.ttf", 14)

# 4. Draw Editorial Eyebrow
# Red accent dot
dot_x, dot_y = 70, 95
draw.ellipse([dot_x, dot_y, dot_x + 8, dot_y + 8], fill=(105, 0, 7))
draw.line([(dot_x + 16, dot_y + 4), (dot_x + 50, dot_y + 4)], fill=(40, 37, 34), width=1)
draw.text((dot_x + 60, dot_y - 4), "MY STORY  /  MY JOURNEY", fill=(40, 37, 34), font=font_eyebrow)

# 5. Draw Title: SYAHMIAOF
title_y = 135
draw.text((70, title_y), "SYAHMIAOF", fill=(16, 12, 11), font=font_title)

# Subtitle: THE STORY OF BECOMING
draw.text((72, title_y + 75), "THE STORY OF BECOMING.", fill=(105, 0, 7), font=font_sub)

# Horizontal thin separator line
line_y = title_y + 145
draw.line([(70, line_y), (480, line_y)], fill=(200, 188, 175), width=1)

# Quote / Tagline
draw.text((70, line_y + 25), "“Ini baru permulaan.”", fill=(30, 25, 22), font=font_body)
draw.text(
    (70, line_y + 60),
    "Kisah perjalanan, falsafah disiplin,\ndan inovasi kejuruteraan perisian.",
    fill=(90, 80, 72),
    font=font_body,
    spacing=8
)

# 6. Bottom Brand Badge / URL Pill
pill_x, pill_y = 70, 520
pill_w, pill_h = 175, 42
draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=21, fill=(105, 0, 7, 255))
draw.text((pill_x + 28, pill_y + 11), "SYAHMIAOF.MY", fill=(255, 248, 239), font=font_badge)

# Small arrow in pill
draw.text((pill_x + 140, pill_y + 11), "⟶", fill=(255, 248, 239), font=font_badge)

# 7. Convert to RGB and save high quality versions
rgb_canvas = canvas.convert("RGB")
rgb_canvas.save("public/og-image.jpg", "JPEG", quality=92, optimize=True)
rgb_canvas.save("public/og-image.png", "PNG", optimize=True)

# Also create app router convention file: src/app/opengraph-image.png
rgb_canvas.save("src/app/opengraph-image.png", "PNG", optimize=True)

print("OG Images created successfully:")
print(" - public/og-image.jpg (size:", os.path.getsize("public/og-image.jpg"), "bytes)")
print(" - public/og-image.png (size:", os.path.getsize("public/og-image.png"), "bytes)")
print(" - src/app/opengraph-image.png (size:", os.path.getsize("src/app/opengraph-image.png"), "bytes)")
