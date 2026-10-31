/** Shared by Astro, page components, build scripts, and static metadata. */
const repository = 'https://github.com/nextmail-dev/nextmail';
export const site = {
  name: 'NextMail',
  url: 'https://next-mail.app',
  repository,
  releases: `${repository}/releases`,
  releasesApi: 'https://api.github.com/repos/nextmail-dev/nextmail/releases',
  issues: `${repository}/issues`,
  preview: false,
  source: {
    readme: `${repository}/blob/main/README.md`,
    project: `${repository}/blob/main/docs/project.md`,
    changelog: `${repository}/blob/main/CHANGELOG.md`,
    screenshots: `${repository}/tree/main/assets/screenshots/workspace`,
  },
};
