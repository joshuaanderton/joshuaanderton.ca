import laravel from 'laravel-vite-plugin'
import {defineConfig} from 'vite'

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/site.js'],
      refresh: true
    }),
  ],
  server: {
    https: false,
    hmr: { protocol: 'ws' }
  }
});
