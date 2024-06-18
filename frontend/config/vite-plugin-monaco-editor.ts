import { Plugin } from 'vite';
import { resolve } from 'path';

export default function monacoEditorPlugin(): Plugin {
  return {
    name: 'vite-plugin-monaco-editor',
    configureServer(server) {
      server.middlewares.use('/node_modules/monaco-editor', (req, res, next) => {
        const filePath = resolve('node_modules', 'monaco-editor', req.url!.substring(1));
        res.sendFile(filePath);
      });
    },
    configurePreviewServer(server) {
      server.middlewares.use('/node_modules/monaco-editor', (req, res, next) => {
        const filePath = resolve('node_modules', 'monaco-editor', req.url!.substring(1));
        res.sendFile(filePath);
      });
    }
  }
}
