import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { site } from '../src/config/brand.mjs';

const directory = new URL('../src/data/upstream/', import.meta.url);
const headers = {
  Accept: 'application/vnd.github+json',
  'User-Agent': 'NextMail-Website',
};
if (process.env.GITHUB_TOKEN)
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function get(url) {
  const response = await fetch(url, {
    headers,
    signal: AbortSignal.timeout(12000),
  });
  if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
  return response;
}

try {
  const response = await get(`${site.releasesApi}?per_page=100`);
  const raw = await response.json();
  if (!Array.isArray(raw) || !raw.some((r) => !r.draft))
    throw new Error('No published releases');
  const releases = raw
    .filter((r) => !r.draft)
    .map((r) => ({
      tag: r.tag_name,
      name: r.name,
      publishedAt: r.published_at,
      prerelease: r.prerelease,
      url: r.html_url,
      assets: r.assets
        .filter((a) => a.state === 'uploaded')
        .map((a) => ({
          name: a.name,
          url: a.browser_download_url,
          size: a.size,
        })),
    }));
  await mkdir(directory, { recursive: true });
  await writeFile(
    new URL('releases.json', directory),
    JSON.stringify({ checkedAt: new Date().toISOString(), releases }, null, 2) +
      '\n',
  );
  console.log(
    `GitHub Releases: ${releases[0].tag} (${releases.length} releases).`,
  );
} catch (error) {
  let cached = false;
  try {
    const cache = JSON.parse(
      await readFile(new URL('releases.json', directory), 'utf8'),
    );
    cached = Array.isArray(cache.releases) && cache.releases.length > 0;
  } catch {
    // A first build without a cache can still render the GitHub fallback.
  }
  if (!cached) {
    await mkdir(directory, { recursive: true });
    await writeFile(
      new URL('releases.json', directory),
      JSON.stringify({ checkedAt: '', releases: [] }, null, 2) + '\n',
    );
  }
  console.warn(
    `Release refresh unavailable (${error.message}); ${cached ? 'using the dated, committed snapshot' : 'rendering the GitHub Releases fallback'}.`,
  );
}
