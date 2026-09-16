"""Trim client logos to their ink and report the optical-weight scale.

Every source logo is a 360x120 canvas with the mark somewhere inside it, so
sizing them to a common width in CSS sizes the canvas rather than the mark.
This writes trimmed copies to public/images/clients/trimmed and prints the
scale for each, which goes into CLIENTS in src/pages/EastAfricaPage.jsx.

    python3 tools/trim-logos.py
"""
from PIL import Image
import numpy as np, os, math

LOGOS = ['cpecc', 'ccjv', 'praj', 'illovo', 'ntake', 'total', 'mcdermott', 'cpp']
SRC = 'public/images/clients'
OUT = f'{SRC}/trimmed'

os.makedirs(OUT, exist_ok=True)
weights = {}

for name in LOGOS:
    im = Image.open(f'{SRC}/{name}.png').convert('RGBA')
    # Composite on white first: some of these have an opaque background, so
    # the alpha channel says nothing about where the mark is.
    flat = Image.alpha_composite(Image.new('RGBA', im.size, (255,) * 4), im).convert('L')
    mask = np.array(flat) < 235
    ys, xs = np.where(mask)
    box = (int(xs.min()), int(ys.min()), int(xs.max()) + 1, int(ys.max()) + 1)
    im.crop(box).save(f'{OUT}/{name}.png', optimize=True)

    sub = mask[box[1]:box[3], box[0]:box[2]]
    h, w = sub.shape
    # Damped: a mark drawn as a filled panel is not perceptually "all ink",
    # and the undamped figure shrinks it to a dot.
    weights[name] = math.sqrt((sub.mean() ** 0.45) * w * h)

target = float(np.median(list(weights.values())))
print('scale for CLIENTS in EastAfricaPage.jsx:')
for name, weight in weights.items():
    print(f"  {name:<10}{max(0.8, min(1.4, target / weight)):.2f}")
