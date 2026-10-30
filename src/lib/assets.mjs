/** Only classify actual installable GitHub assets; updater payloads are excluded. */
export function classifyAsset(name) {
  if (/_x64-setup\.exe$/i.test(name))
    return { platform: 'windows', arch: 'x64', format: 'EXE' };
  if (/_x64_[\w-]+\.msi$/i.test(name))
    return { platform: 'windows', arch: 'x64', format: 'MSI' };
  if (/_aarch64\.dmg$/i.test(name))
    return { platform: 'macos', arch: 'Apple Silicon', format: 'DMG' };
  if (/_x64\.dmg$/i.test(name))
    return { platform: 'macos', arch: 'Intel x64', format: 'DMG' };
  if (/_amd64\.(AppImage|deb)$/i.test(name))
    return {
      platform: 'linux',
      arch: 'x64',
      format: name.endsWith('.deb') ? 'DEB' : 'AppImage',
    };
  if (/\.x86_64\.rpm$/i.test(name))
    return { platform: 'linux', arch: 'x64', format: 'RPM' };
  return null;
}

export function safeReleaseUrl(url) {
  try {
    const u = new URL(url);
    return (
      u.origin === 'https://github.com' &&
      u.pathname.startsWith('/nextmail-dev/nextmail/releases/')
    );
  } catch {
    return false;
  }
}
