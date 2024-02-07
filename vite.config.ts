import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import {resolve} from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": resolve(__dirname, "./src/assets/"),
      "@components": resolve(__dirname, "./src/components/"),
      "@pages": resolve(__dirname, "./src/pages/"),
      "@services": resolve(__dirname, "./src/services/"),
      "@theme": resolve(__dirname, "./src/theme/"),
      "@types": resolve(__dirname, "./src/types/"),
    }
  }
})
