import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'astro/config';

export default defineConfig({
  site: 'https://inaki-amatria.github.io',
  vite: {plugins: [tailwindcss()]},
  integrations: [preact(), sitemap()],
  trailingSlash: 'never',
  compressHTML: true,
  output: 'static',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
