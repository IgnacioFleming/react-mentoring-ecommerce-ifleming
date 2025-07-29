import { defineConfig, UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';

export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: '**/*.svg?react',
    }),
  ],
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
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
} as UserConfig);
