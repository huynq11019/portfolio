import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://huynq.is-a.dev',
  integrations: [tailwind()],
});
