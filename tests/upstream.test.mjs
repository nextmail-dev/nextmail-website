import { test } from 'node:test';
import assert from 'node:assert/strict';
import {
  mkdtemp,
  mkdir,
  readFile,
  writeFile,
  copyFile,
  rm,
} from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { spawnSync } from 'node:child_process';

async function offlineBuildData(cache) {
  const directory = await mkdtemp(join(tmpdir(), 'nextmail-release-test-'));
  try {
    await mkdir(join(directory, 'scripts'), { recursive: true });
    await mkdir(join(directory, 'src/config'), { recursive: true });
    await mkdir(join(directory, 'src/data/upstream'), { recursive: true });
    await copyFile(
      'scripts/sync-upstream.mjs',
      join(directory, 'scripts/sync-upstream.mjs'),
    );
    await copyFile(
      'src/config/brand.mjs',
      join(directory, 'src/config/brand.mjs'),
    );
    const dataFile = join(directory, 'src/data/upstream/releases.json');
    if (cache) await writeFile(dataFile, cache);
    const run = spawnSync(
      process.execPath,
      [
        '--input-type=module',
        '-e',
        'globalThis.fetch = async () => { throw new Error("offline test fixture"); }; await import(process.argv[1]);',
        pathToFileURL(join(directory, 'scripts/sync-upstream.mjs')).href,
      ],
      { cwd: directory, encoding: 'utf8' },
    );
    assert.equal(run.status, 0, run.stderr);
    return { data: await readFile(dataFile, 'utf8'), message: run.stderr };
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
}

test('a network failure preserves the existing verified snapshot and its date', async () => {
  const cache = await readFile('src/data/upstream/releases.json', 'utf8');
  const result = await offlineBuildData(cache);
  assert.equal(result.data, cache);
  assert.match(result.message, /using the dated, committed snapshot/);
});

test('a first offline build can render the GitHub fallback without inventing downloads', async () => {
  const result = await offlineBuildData();
  assert.deepEqual(JSON.parse(result.data), { checkedAt: '', releases: [] });
  assert.match(result.message, /rendering the GitHub Releases fallback/);
});
