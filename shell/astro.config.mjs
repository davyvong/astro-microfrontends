import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import solidJs from "@astrojs/solid-js";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  build: {
    assets: 'assets',
  },
  integrations: [
    react(),
    solidJs(),
    {
      name: 'importmap-externals',
      hooks: {
        'astro:build:setup': ({ vite, target }) => {
          if(target === 'client') {
            vite.build.rollupOptions["external"] = ["react", "react-dom", "solid-js"];
          }
        }
       }
    },
  ],
  output: 'server',
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[hash:20].[ext]',
          chunkFileNames: 'chunks/[hash:20].js',
          entryFileNames: 'entry/[hash:20].js',
        },
      },
    },
  },
});
