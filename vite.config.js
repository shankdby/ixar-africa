import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// The site build, served from https://ixar.africa/
// The single-file review copy uses vite.config.standalone.js instead.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
});
