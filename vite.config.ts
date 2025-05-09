import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';

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
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./tests/setup.ts'],
  },
} as UserConfig);
