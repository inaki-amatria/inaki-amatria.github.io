import tailwindcss from '@tailwindcss/vite';
import {defineConfig} from 'astro/config';

export default defineConfig({
  site: 'https://inaki-amatria.github.io',
  vite: {plugins: [tailwindcss()]},
  trailingSlash: 'never',
  compressHTML: true,
  output: 'static',
});
