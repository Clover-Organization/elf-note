import { resolve } from 'path';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import react from '@vitejs/plugin-react';
import monacoEditorPlugin from './config/vite-plugin-monaco-editor';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()]
  },
  preload: {
    plugins: [externalizeDepsPlugin()]
  },
  renderer: {
    resolve: {
      alias: {
        '@renderer': resolve(__dirname, 'src/renderer/src'),
        '@': resolve(__dirname, 'src/renderer/src'),
      }
    },
    css: {
      postcss: './postcss.config.js',
    },
    plugins: [
      react(),
      monacoEditorPlugin()
    ]
  }
});
