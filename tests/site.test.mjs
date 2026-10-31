import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import { join, resolve } from 'node:path';

const root = resolve('dist');
async function walk(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await walk(path)));
    else files.push(path);
  }
  return files;
}
const htmlFiles = (await walk(root)).filter((p) => p.endsWith('.html'));
const content = new Map(
  await Promise.all(
    htmlFiles.map(async (path) => [path, await readFile(path, 'utf8')]),
  ),
);

test('all eighteen bilingual routes are generated with SEO and a single h1', () => {
  for (const prefix of ['', '/zh-CN'])
    for (const page of [
      '',
      '/features',
      '/download',
      '/changelog',
      '/docs',
      '/docs/accounts',
      '/docs/sync',
      '/docs/security',
      '/docs/faq',
    ]) {
      const html = content.get(join(root, prefix, page, 'index.html'));
      assert.ok(html, `Missing ${prefix}${page}/`);
      assert.equal((html.match(/<h1[ >]/g) || []).length, 1);
      assert.ok(html.includes(`lang="${prefix ? 'zh-CN' : 'en'}"`));
      assert.ok(html.includes('rel="canonical"'));
      assert.ok(html.includes('property="og:image"'));
      assert.ok(html.includes('hreflang="zh-CN"'));
      assert.ok(
        !html.includes('<astro-island'),
        'Marketing pages should not hydrate React',
      );
    }
});

test('internal links, page anchors, images, and built scripts resolve', async () => {
  for (const [path, html] of content) {
    for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
      const value = match[1].replaceAll('&amp;', '&');
      if (!value.startsWith('/') && !value.startsWith('#')) continue;
      const base =
        'https://next-mail.app/' +
        path.slice(root.length + 1).replace(/index\.html$/, '');
      const url = new URL(value, base);
      let target = join(root, decodeURIComponent(url.pathname));
      if (url.pathname.endsWith('/')) target = join(target, 'index.html');
      await assert.doesNotReject(stat(target), `${path}: missing ${value}`);
      if (url.hash) {
        const targetHtml = content.get(target) || '';
        assert.ok(
          targetHtml.includes(`id="${decodeURIComponent(url.hash.slice(1))}"`),
          `${path}: missing anchor ${value}`,
        );
      }
    }
    for (const image of html.matchAll(/<img\b[^>]*>/g)) {
      assert.match(image[0], /\balt="[^"]*"/);
      assert.match(image[0], /\bwidth="\d+"/);
      assert.match(image[0], /\bheight="\d+"/);
    }
  }
});

test('download page only links to installable assets in the fetched snapshot', async () => {
  const snapshot = JSON.parse(
    await readFile('src/data/upstream/releases.json', 'utf8'),
  );
  const allowed = new Set(
    snapshot.releases.flatMap((r) => r.assets.map((a) => a.url)),
  );
  for (const prefix of ['', 'zh-CN/']) {
    const html = content.get(join(root, prefix, 'download/index.html'));
    const assets = [
      ...html.matchAll(
        /href="(https:\/\/github.com\/nextmail-dev\/nextmail\/releases\/download\/[^"]+)"/g,
      ),
    ];
    assert.ok(assets.length > 0);
    for (const match of assets) {
      assert.ok(allowed.has(match[1]));
      assert.ok(!/\.(sig|json|gz)$/.test(match[1]));
    }
    assert.ok(html.includes('ad-hoc'));
  }
});

test('both search indexes contain all five localized articles', async () => {
  for (const locale of ['en', 'zh-CN']) {
    const index = JSON.parse(
      await readFile(`dist/search/${locale}.json`, 'utf8'),
    );
    assert.equal(index.length, 5);
    assert.equal(new Set(index.map((d) => d.url)).size, 5);
    assert.ok(index.every((d) => d.text.length > 100));
    for (const entry of index)
      assert.ok(content.has(join(root, entry.url, 'index.html')));
  }
});
