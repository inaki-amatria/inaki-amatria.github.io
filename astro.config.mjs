import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'astro/config';

export default defineConfig({
  site: 'https://inaki-amatria.github.io',
  vite: {plugins: [tailwindcss()]},
  integrations: [preact()],
  trailingSlash: 'never',
  compressHTML: true,
  output: 'static',
});
