import snapshot from '../data/upstream/releases.json';
import { classifyAsset, safeReleaseUrl } from './assets.mjs';

interface Release {
  tag: string;
  name: string;
  publishedAt: string;
  prerelease: boolean;
  url: string;
  assets: { name: string; url: string; size: number }[];
}
interface ReleaseSnapshot {
  checkedAt: string;
  releases: Release[];
}
export const releaseData: ReleaseSnapshot = snapshot;
export const releases = [...releaseData.releases].sort((a, b) =>
  b.publishedAt.localeCompare(a.publishedAt),
);
export const latestRelease = releases[0];
export const latestStable = releases.find((r) => !r.prerelease);
export const latestPrerelease = releases.find((r) => r.prerelease);
export function downloads(release: (typeof releases)[number]) {
  return release.assets.flatMap((asset) => {
    const info = classifyAsset(asset.name);
    return info && safeReleaseUrl(asset.url) ? [{ ...asset, ...info }] : [];
  });
}
