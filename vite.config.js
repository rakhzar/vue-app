import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  base: '/vue-app/',
  plugins: [vue()],
  server: {
    proxy: {
      '/weather-api': {
        target: 'https://api.weatherapi.com',
        changeOrigin: true,
        rewrite: (path) =>
          path.replace(/^\/weather-api/, ''),
      },
    },
  },
});
