import {defineConfig} from 'astro/config';

export default defineConfig({
  site: 'https://inaki-amatria.github.io',
  trailingSlash: 'never',
  compressHTML: true,
  output: 'static'
});
