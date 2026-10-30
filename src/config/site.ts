export { site } from './brand.mjs';

export type Locale = 'en' | 'zh-CN';
export const locales: Locale[] = ['en', 'zh-CN'];
export function href(locale: Locale, path = '') {
  return `${locale === 'en' ? '' : '/zh-CN'}/${path.replace(/^\/|\/$/g, '')}${path ? '/' : ''}`;
}
export function alternate(path: string, locale: Locale) {
  const page = path.replace(/^\/zh-CN(?=\/|$)/, '').replace(/^\/|\/$/g, '');
  return href(locale === 'en' ? 'zh-CN' : 'en', page);
}
