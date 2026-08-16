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
    customPages: [
      'https://corepro-eg.com/',
      'https://corepro-eg.com/core',
      'https://corepro-eg.com/saw',
      'https://corepro-eg.com/blog',
      'https://corepro-eg.com/hoods',
      'https://corepro-eg.com/wire',
      'https://corepro-eg.com/prices',
      'https://corepro-eg.com/about',
      'https://corepro-eg.com/projects',
      'https://corepro-eg.com/concrete-cutting-alexandria',
      'https://corepro-eg.com/concrete-cutting-tagamoa',
      'https://corepro-eg.com/concrete-cutting-october',
      'https://corepro-eg.com/concrete-cutting-new-capital',
      'https://corepro-eg.com/concrete-cutting-giza',
      'https://corepro-eg.com/concrete-cutting-assiut',
      'https://corepro-eg.com/concrete-cutting-minya',
      'https://corepro-eg.com/concrete-cutting-mansoura',
      'https://corepro-eg.com/concrete-cutting-hurghada',
      'https://corepro-eg.com/concrete-cutting-safaga',
      'https://corepro-eg.com/concrete-cutting-sokhna',
      'https://corepro-eg.com/concrete-cutting-marsa-alam',
      'https://corepro-eg.com/gas-holes',
      'https://corepro-eg.com/wall-cutting',
      'https://corepro-eg.com/ceiling-holes',
      'https://corepro-eg.com/gypsum-holes',
      'https://corepro-eg.com/sewer-holes',
      'https://corepro-eg.com/electrical-holes',
      'https://corepro-eg.com/contractor',
      'https://corepro-eg.com/track-saw',
      'https://corepro-eg.com/concrete-cutting-tagamoa',
      'https://corepro-eg.com/concrete-cutting-october',
    ],
    serialize(item) {
      if (item.url === 'https://corepro-eg.com/') {
        item.changefreq = 'weekly';
        item.priority = 1.0;
      } else if (item.url === 'https://corepro-eg.com/core' || item.url === 'https://corepro-eg.com/saw') {
        item.changefreq = 'weekly';
        item.priority = 0.9;
      } else if (item.url === 'https://corepro-eg.com/blog') {
        item.changefreq = 'daily';
        item.priority = 0.9;
      } else if (item.url === 'https://corepro-eg.com/hoods' || item.url === 'https://corepro-eg.com/wire') {
        item.changefreq = 'monthly';
        item.priority = 0.8;
      } else if (item.url === 'https://corepro-eg.com/prices') {
        item.changefreq = 'weekly';
        item.priority = 0.8;
      } else if (item.url === 'https://corepro-eg.com/about') {
        item.changefreq = 'monthly';
        item.priority = 0.6;
      } else if (item.url === 'https://corepro-eg.com/projects') {
        item.changefreq = 'monthly';
        item.priority = 0.7;
      } else if (
        item.url === 'https://corepro-eg.com/concrete-cutting-alexandria' ||
        item.url === 'https://corepro-eg.com/concrete-cutting-tagamoa' ||
        item.url === 'https://corepro-eg.com/concrete-cutting-october' ||
        item.url === 'https://corepro-eg.com/concrete-cutting-new-capital' ||
        item.url === 'https://corepro-eg.com/concrete-cutting-giza' ||
        item.url === 'https://corepro-eg.com/concrete-cutting-assiut' ||
        item.url === 'https://corepro-eg.com/concrete-cutting-minya' ||
        item.url === 'https://corepro-eg.com/concrete-cutting-mansoura' ||
        item.url === 'https://corepro-eg.com/concrete-cutting-hurghada' ||
        item.url === 'https://corepro-eg.com/concrete-cutting-safaga' ||
        item.url === 'https://corepro-eg.com/concrete-cutting-sokhna' ||
        item.url === 'https://corepro-eg.com/concrete-cutting-marsa-alam'
      ) {
        item.changefreq = 'monthly';
        item.priority = 0.85;
      } else if (
        item.url === 'https://corepro-eg.com/gas-holes' ||
        item.url === 'https://corepro-eg.com/wall-cutting' ||
        item.url === 'https://corepro-eg.com/ceiling-holes' ||
        item.url === 'https://corepro-eg.com/gypsum-holes' ||
        item.url === 'https://corepro-eg.com/sewer-holes' ||
        item.url === 'https://corepro-eg.com/electrical-holes' ||
        item.url === 'https://corepro-eg.com/contractor' ||
        item.url === 'https://corepro-eg.com/track-saw'
      ) {
        item.changefreq = 'monthly';
        item.priority = 0.85;
      }
      return item;
    }
  }), compress()],
  build: {
    inlineStylesheets: 'always'
  },
  vite: {
    plugins: [tailwindcss()]
  }
});
