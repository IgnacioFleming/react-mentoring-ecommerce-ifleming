import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      generateScopedName: (name, filename) => {
        const componentName = (filename.split('/').pop() || '').replace(/\.(module|scss)/g, '');
        return `${componentName}_${name}`;
      },
    },
  },
});
