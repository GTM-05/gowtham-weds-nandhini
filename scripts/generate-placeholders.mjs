import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const outDir = process.env.OUT_DIR ?? path.join(process.cwd(), "public", "images");

const images = [
  { file: "hero.jpg", w: 1920, h: 1080, title: "Gowtham  &  Nandhini", subtitle: "Wedding portrait  ·  replace hero.jpg" },
  { file: "groom.jpg", w: 900, h: 1200, title: "Gowtham", subtitle: "Portrait placeholder" },
  { file: "bride.jpg", w: 900, h: 1200, title: "Nandhini", subtitle: "Portrait placeholder" },
  { file: "couple-1.jpg", w: 1400, h: 1000, title: "We met", subtitle: "Replace couple-1.jpg" },
  { file: "couple-2.jpg", w: 1000, h: 1300, title: "Our journey", subtitle: "Replace couple-2.jpg" },
  { file: "couple-3.jpg", w: 1400, h: 1000, title: "Forever begins", subtitle: "Replace couple-3.jpg" },
  { file: "gallery-1.jpg", w: 900, h: 1200, title: "Engagement", subtitle: "Replace gallery-1.jpg" },
  { file: "gallery-2.jpg", w: 1400, h: 1000, title: "Couple", subtitle: "Replace gallery-2.jpg" },
  { file: "gallery-3.jpg", w: 1000, h: 1200, title: "Family", subtitle: "Replace gallery-3.jpg" },
  { file: "gallery-4.jpg", w: 1400, h: 900, title: "Pre-wedding", subtitle: "Replace gallery-4.jpg" },
  { file: "gallery-5.jpg", w: 900, h: 1100, title: "Wedding", subtitle: "Replace gallery-5.jpg" },
  { file: "gallery-6.jpg", w: 1400, h: 1000, title: "Couple", subtitle: "Replace gallery-6.jpg" },
];

function svg({ w, h, title, subtitle, index }) {
  const glowX = 30 + (index % 4) * 15;
  const glowY = 25 + (index % 3) * 18;
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3A1520"/>
      <stop offset="46%" stop-color="#14080C"/>
      <stop offset="100%" stop-color="#5C1A28"/>
    </linearGradient>
    <radialGradient id="glow" cx="${glowX}%" cy="${glowY}%" r="55%">
      <stop offset="0%" stop-color="#7A2A3A" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#14080C" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" fill="url(#glow)"/>
  <g fill="none" stroke="#C6A56A" stroke-opacity="0.55">
    <rect x="28" y="28" width="${w - 56}" height="${h - 56}" stroke-width="1.4"/>
    <rect x="42" y="42" width="${w - 84}" height="${h - 84}" stroke-width="0.7" stroke-opacity="0.7"/>
  </g>
  <g fill="none" stroke="#E8D5A8" stroke-width="1.2" opacity="0.8">
    <path d="M${w / 2} ${h * 0.22} C ${w * 0.62} ${h * 0.3}, ${w * 0.7} ${h * 0.42}, ${w / 2} ${h * 0.5} C ${w * 0.3} ${h * 0.42}, ${w * 0.38} ${h * 0.3}, ${w / 2} ${h * 0.22} Z"/>
    <circle cx="${w / 2}" cy="${h * 0.5}" r="${Math.min(w, h) * 0.16}"/>
    <circle cx="${w / 2}" cy="${h * 0.5}" r="${Math.min(w, h) * 0.08}"/>
    <path d="M${w * 0.18} ${h * 0.2} c 18 10 18 28 0 40 c -18 -12 -18 -30 0 -40 z"/>
    <path d="M${w * 0.82} ${h * 0.78} c -18 -10 -18 -28 0 -40 c 18 12 18 30 0 40 z"/>
  </g>
  <g fill="#E8D5A8">
    <circle cx="${w * 0.22}" cy="${h * 0.3}" r="2.2"/>
    <circle cx="${w * 0.28}" cy="${h * 0.24}" r="1.6"/>
    <circle cx="${w * 0.76}" cy="${h * 0.72}" r="2.2"/>
    <circle cx="${w * 0.7}" cy="${h * 0.78}" r="1.6"/>
  </g>
  <text x="${w / 2}" y="${h * 0.5 - 8}" text-anchor="middle" fill="#F7F1E8" font-family="Liberation Serif, Times New Roman, serif" font-size="${Math.max(36, Math.min(w, h) * 0.07)}">${escapeXml(title)}</text>
  <text x="${w / 2}" y="${h * 0.5 + Math.max(36, Math.min(w, h) * 0.06)}" text-anchor="middle" fill="#E8D5A8" font-family="Liberation Sans, sans-serif" font-size="${Math.max(16, Math.min(w, h) * 0.028)}" letter-spacing="3">${escapeXml(subtitle)}</text>
</svg>`;
}

function escapeXml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

await mkdir(outDir, { recursive: true });

for (const [index, image] of images.entries()) {
  const file = path.join(outDir, image.file);
  await sharp(Buffer.from(svg({ ...image, index })))
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(file);
  console.log(file);
}
