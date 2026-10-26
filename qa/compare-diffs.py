import os
from PIL import Image, ImageChops, ImageEnhance

pages = [
    {
        "name": "01-utama",
        "ref": "design-reference/desktop/01-utama-homepage.png",
        "capture": "qa/screenshots/01-utama-desktop-1672x941.png",
        "diff": "qa/diffs/01-utama-diff.png"
    },
    {
        "name": "02-kisah",
        "ref": "design-reference/desktop/02-kisah-my-story.png",
        "capture": "qa/screenshots/02-kisah-desktop-1672x941.png",
        "diff": "qa/diffs/02-kisah-diff.png"
    },
    {
        "name": "03-perjalanan",
        "ref": "design-reference/desktop/03-perjalanan-my-journey.png",
        "capture": "qa/screenshots/03-perjalanan-desktop-1672x941.png",
        "diff": "qa/diffs/03-perjalanan-diff.png"
    },
    {
        "name": "04-karya",
        "ref": "design-reference/desktop/04-karya-creations.png",
        "capture": "qa/screenshots/04-karya-desktop-2048x752.png",
        "diff": "qa/diffs/04-karya-diff.png"
    },
    {
        "name": "05-catatan",
        "ref": "design-reference/desktop/05-catatan-reflections.png",
        "capture": "qa/screenshots/05-catatan-desktop-1774x887.png",
        "diff": "qa/diffs/05-catatan-diff.png"
    }
]

def compare():
    print("=== VISUAL QA DIFFERENCE ANALYSIS ===")
    os.makedirs("qa/diffs", exist_ok=True)
    
    for p in pages:
        if not os.path.exists(p["ref"]):
            print(f"Skipping {p['name']}: reference missing ({p['ref']})")
            continue
        if not os.path.exists(p["capture"]):
            print(f"Skipping {p['name']}: capture missing ({p['capture']})")
            continue
            
        im_ref = Image.open(p["ref"]).convert("RGB")
        im_cap = Image.open(p["capture"]).convert("RGB")
        
        # Ensure identical sizes for comparison
        target_size = im_ref.size
        if im_cap.size != target_size:
            im_cap = im_cap.resize(target_size, Image.Resampling.LANCZOS)
            
        diff = ImageChops.difference(im_ref, im_cap)
        
        # Compute mean absolute difference per pixel
        stat = diff.getextrema()
        diff_data = diff.getdata()
        total_diff = sum((r + g + b) / 3.0 for r, g, b in diff_data)
        avg_diff = total_diff / len(diff_data)
        max_possible = 255.0
        similarity_pct = max(0.0, 100.0 - (avg_diff / max_possible * 100.0))
        
        # Amplify difference for visual clarity in diff artifact
        enhanced = ImageEnhance.Color(diff).enhance(2.0)
        enhanced = ImageEnhance.Brightness(enhanced).enhance(3.0)
        enhanced.save(p["diff"])
        
        print(f"[{p['name']}] Size: {target_size} | Avg Pixel Error: {avg_diff:.2f}/255 | Visual Alignment: {similarity_pct:.1f}%")
        print(f"  -> Diff image saved to {p['diff']}")

if __name__ == "__main__":
    compare()
