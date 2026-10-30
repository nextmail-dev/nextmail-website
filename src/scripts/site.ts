const root = document.documentElement;
const header = document.querySelector<HTMLElement>('[data-header]');
const updateScroll = () =>
  header?.classList.toggle('is-scrolled', window.scrollY > 12);
updateScroll();
window.addEventListener('scroll', updateScroll, { passive: true });

document
  .querySelectorAll<HTMLButtonElement>('[data-theme-option]')
  .forEach((button) => {
    button.addEventListener('click', () => {
      const theme = button.dataset.themeOption || 'system';
      root.dataset.theme = theme;
      try {
        localStorage.setItem('nextmail-theme', theme);
      } catch {
        /* Private browsing may disable storage. */
      }
      document
        .querySelector<HTMLDetailsElement>('.theme-picker')
        ?.removeAttribute('open');
      document
        .querySelectorAll('[data-theme-option]')
        .forEach((b) => b.setAttribute('aria-pressed', String(b === button)));
    });
    button.setAttribute(
      'aria-pressed',
      String((root.dataset.theme || 'system') === button.dataset.themeOption),
    );
  });
document.addEventListener('click', (event) => {
  if (
    event.target instanceof HTMLElement &&
    !event.target.closest('.theme-picker')
  )
    document.querySelector('.theme-picker')?.removeAttribute('open');
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    document.querySelector('.theme-picker')?.removeAttribute('open');
    if (menu?.getAttribute('aria-expanded') === 'true') {
      toggleMenu(false);
      menu.focus();
    }
  }
});
const menu = document.querySelector<HTMLButtonElement>('.menu-toggle');
const mobileNav = document.querySelector<HTMLElement>('#mobile-nav');
function toggleMenu(open: boolean) {
  menu?.setAttribute('aria-expanded', String(open));
  if (mobileNav) mobileNav.hidden = !open;
}
menu?.addEventListener('click', () =>
  toggleMenu(menu.getAttribute('aria-expanded') !== 'true'),
);
window.matchMedia('(min-width: 769px)').addEventListener('change', (event) => {
  if (event.matches) toggleMenu(false);
});

const ua = navigator.userAgent;
const platform = /Windows/i.test(ua)
  ? 'windows'
  : /Macintosh|MacIntel/i.test(ua) && navigator.maxTouchPoints < 2
    ? 'macos'
    : /Linux/i.test(ua) && !/Android/i.test(ua)
      ? 'linux'
      : null;
document
  .querySelectorAll<HTMLAnchorElement>('[data-platform-cta]')
  .forEach((link) => {
    if (platform === 'windows' || platform === 'macos') {
      const name = platform === 'windows' ? 'Windows' : 'macOS';
      const label = link.querySelector('span');
      if (label)
        label.textContent =
          link.dataset.en === 'true'
            ? `Download for ${name}`
            : `下载 ${name} 版`;
      link.href += `#${platform}`;
    }
  });
if (platform)
  document
    .querySelectorAll<HTMLElement>(`[data-os="${platform}"]`)
    .forEach((element) => {
      element.classList.add('recommended');
      element
        .querySelector<HTMLElement>('.recommended-label')
        ?.removeAttribute('hidden');
    });
document
  .querySelector<HTMLAnchorElement>('[data-language-switch]')
  ?.addEventListener('click', (event) => {
    if (
      event.currentTarget instanceof HTMLAnchorElement &&
      window.location.hash
    )
      event.currentTarget.hash = window.location.hash;
  });

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
if (!reduced.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.08 },
  );
  document.querySelectorAll<HTMLElement>('[data-reveal]').forEach((element) => {
    element.classList.add('will-reveal');
    observer.observe(element);
  });
}
