import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  base: './', // Or '/' if deploying at the root
  plugins: [vue()],
  css: {
    postcss: './postcss.config.js'
  }
});