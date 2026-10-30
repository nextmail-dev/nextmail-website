import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { classifyAsset, safeReleaseUrl } from '../src/lib/assets.mjs';

test('installer classification keeps platform and architecture distinct', () => {
  for (const [name, platform, arch, format] of [
    ['NextMail_1.1.1_x64-setup.exe', 'windows', 'x64', 'EXE'],
    ['NextMail_1.1.1_x64_en-US.msi', 'windows', 'x64', 'MSI'],
    ['NextMail_1.1.1_aarch64.dmg', 'macos', 'Apple Silicon', 'DMG'],
    ['NextMail_1.1.1_x64.dmg', 'macos', 'Intel x64', 'DMG'],
    ['NextMail_1.1.1_amd64.AppImage', 'linux', 'x64', 'AppImage'],
    ['NextMail_1.1.1_amd64.deb', 'linux', 'x64', 'DEB'],
    ['NextMail-1.1.1-1.x86_64.rpm', 'linux', 'x64', 'RPM'],
  ])
    assert.deepEqual(classifyAsset(name), { platform, arch, format });
});
test('signatures, updater payloads, manifests, and unknown architectures are never installers', () => {
  for (const name of [
    'latest.json',
    'latest-cn.json',
    'NextMail_1_x64.app.tar.gz',
    'NextMail_1_x64.dmg.sig',
    'NextMail_1_x64-setup.exe.sig',
    'NextMail_1_arm64-setup.exe',
    'unrelated.zip',
  ])
    assert.equal(classifyAsset(name), null);
});
test('download URLs stay within the official release repository', () => {
  assert.equal(
    safeReleaseUrl(
      'https://github.com/nextmail-dev/nextmail/releases/download/v1/file.dmg',
    ),
    true,
  );
  for (const url of [
    'javascript:alert(1)',
    'https://github.com.evil.test/nextmail-dev/nextmail/releases/download/v1/a.exe',
    'http://github.com/nextmail-dev/nextmail/releases/download/v1/a.exe',
    'https://github.com/other/repo/releases/download/a.exe',
  ])
    assert.equal(safeReleaseUrl(url), false);
});
test('the committed snapshot has usable real releases and installable assets', async () => {
  const data = JSON.parse(
    await readFile(
      new URL('../src/data/upstream/releases.json', import.meta.url),
      'utf8',
    ),
  );
  assert.ok(data.checkedAt);
  assert.ok(data.releases.length);
  for (const release of data.releases) {
    assert.ok(safeReleaseUrl(release.url));
    assert.match(release.publishedAt, /^\d{4}-\d{2}-\d{2}/);
    for (const asset of release.assets) {
      assert.ok(safeReleaseUrl(asset.url));
      assert.ok(asset.size > 0);
    }
  }
});
