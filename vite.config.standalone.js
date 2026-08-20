import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';

/**
 * Build config for the single-file review copy.
 *
 * inlineDynamicImports forces Rollup to emit ONE javascript file instead of
 * splitting into shared chunks. Without it the entry chunk still `import`s its
 * dependencies by URL, which a file:// page cannot resolve — the page would
 * load blank, which is exactly the failure this build exists to avoid.
 */
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist-standalone',
    emptyOutDir: true,
    assetsInlineLimit: 0,
    cssCodeSplit: false,
    rollupOptions: {
      input: resolve(__dirname, 'standalone.html'),
      output: {
        inlineDynamicImports: true,
        entryFileNames: 'assets/standalone.js',
        assetFileNames: 'assets/[name][extname]'
      }
    }
  }
});
