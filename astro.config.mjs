import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { site } from './src/config/brand.mjs';

export default defineConfig({
  site: site.url,
  output: 'static',
  trailingSlash: 'always',
  integrations: [
    mdx(),
    react(),
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en', 'zh-CN': 'zh-CN' } },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-CN'],
    routing: { prefixDefaultLocale: false },
  },
  vite: { plugins: [tailwindcss()] },
  devToolbar: { enabled: false },
});
