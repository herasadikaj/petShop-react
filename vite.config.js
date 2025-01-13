import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://freetestapi.com',  // Ensure the target is the full base URL
        changeOrigin: true,  // Ensures CORS headers are handled correctly
        secure: false,  // Disable HTTPS verification for local development
        rewrite: (path) => path.replace(/^\/api/, ''),  // Remove the `/api` prefix
      },
    },
  },
});
