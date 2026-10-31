import sharp from 'sharp';
import { Buffer } from 'node:buffer';
import { mkdir, copyFile } from 'node:fs/promises';
import { site } from '../src/config/brand.mjs';

await mkdir('public/brand', { recursive: true });
for (const [file, size] of [
  ['favicon.png', 32],
  ['apple-touch-icon.png', 180],
])
  await sharp('public/brand/app-icon.png')
    .resize(size)
    .png()
    .toFile(`public/brand/${file}`);
await sharp('public/brand/app-icon.png')
  .resize(96)
  .webp({ quality: 90 })
  .toFile('public/brand/icon.webp');
for (const locale of ['en', 'zh']) {
  const chinese = locale === 'zh';
  const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#f8f7f4"/><path d="M48 110H1152M48 555H1152M48 48V582M1152 48V582" stroke="#dcddd7"/><text x="120" y="83" font-family="Helvetica,sans-serif" font-size="23" fill="#282d2e" font-weight="600">NextMail.</text><text x="64" y="224" font-family="${chinese ? 'Songti SC' : 'Georgia'},serif" font-size="${chinese ? 58 : 68}" fill="#282d2e">${chinese ? '让邮件，' : 'Email, back'}</text><text x="64" y="310" font-family="${chinese ? 'Songti SC' : 'Georgia'},serif" font-style="${chinese ? 'normal' : 'italic'}" font-size="${chinese ? 58 : 68}" fill="#204b85">${chinese ? '回到自己手中。' : 'in your hands.'}</text><text x="64" y="382" font-family="${chinese ? 'PingFang SC' : 'Helvetica'},sans-serif" font-size="19" fill="#6b7171">${chinese ? '安静、本地优先的桌面邮件客户端。' : 'A calm, local-first desktop email client.'}</text><text x="64" y="511" font-family="monospace" font-size="13" fill="#204b85">${new URL(site.url).hostname}</text></svg>`;
  const { data: screen, info: screenSize } = await sharp(
    `src/assets/screenshots/${locale}-light.png`,
  )
    .resize({ width: 540, height: 390, fit: 'inside' })
    .toBuffer({ resolveWithObject: true });
  const icon = await sharp('public/brand/app-icon.png').resize(45).toBuffer();
  await sharp(Buffer.from(svg))
    .composite([
      {
        input: screen,
        left: 610,
        top: 150 + Math.round((390 - screenSize.height) / 2),
      },
      { input: icon, left: 64, top: 48 },
    ])
    .png()
    .toFile(`public/brand/og-${locale}.png`);
}
await mkdir('public/licenses', { recursive: true });
for (const [name, path] of [
  ['instrument-serif', '@fontsource/instrument-serif'],
  ['dm-sans', '@fontsource-variable/dm-sans'],
  ['ibm-plex-mono', '@fontsource/ibm-plex-mono'],
])
  await copyFile(`node_modules/${path}/LICENSE`, `public/licenses/${name}.txt`);
console.log('Brand assets and font licenses generated.');
