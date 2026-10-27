import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://debbsouz.github.io',
  base: '/portfmks',
  integrations: [react()],
  output: 'static',
});
