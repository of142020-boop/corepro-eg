import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  site: 'https://corepro-eg.com',
  integrations: [react(), sitemap({
    filter: (page) =>
      !page.includes('/privacy-policy') &&
      !page.includes('/terms'),
  }), compress()],
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
