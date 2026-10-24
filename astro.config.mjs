import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

function relativeAssets() {
  return {
    name: 'relative-assets',
    hooks: {
      'astro:build:done': async ({ dir }) => {
        const distPath = fileURLToPath(dir);
        const htmlFiles = ['index.html'];
        for (const file of htmlFiles) {
          const filePath = path.join(distPath, file);
          if (fs.existsSync(filePath)) {
            let html = fs.readFileSync(filePath, 'utf8');
            html = html.replace(/href="\/_astro\//g, 'href="./_astro/');
            html = html.replace(/src="\/_astro\//g, 'src="./_astro/');
            html = html.replace(/href="\/favicon\.svg"/g, 'href="./favicon.svg"');
            html = html.replace(/href="\/cv\//g, 'href="./cv/');
            html = html.replace(/src="\/cv\//g, 'src="./cv/');
            fs.writeFileSync(filePath, html, 'utf8');
          }
        }
      },
    },
  };
}

export default defineConfig({
  site: 'https://huynq.is-a.dev',
  integrations: [tailwind(), relativeAssets()],
});
