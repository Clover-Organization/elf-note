// webpack.config.ts
import path from 'path';
import { Configuration } from 'webpack';
import MonacoEditorWebpackPlugin from 'monaco-editor-webpack-plugin';

const config: Configuration = {
  entry: './src/index.tsx', // Altere conforme necessário
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@renderer': path.resolve(__dirname, 'src/renderer'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MonacoEditorWebpackPlugin({
      languages: [
        'abap', 'apex', 'azcli', 'bat', 'cameligo', 'clojure', 'coffee', 'cpp',
        'csharp', 'csp', 'css', 'dart', 'dockerfile', 'fsharp', 'go', 'graphql',
        'handlebars', 'html', 'ini', 'java', 'javascript', 'julia', 'kotlin',
        'less', 'lua', 'markdown', 'mips', 'msdax', 'mysql', 'objective-c',
        'pascal', 'pascaligo', 'perl', 'pgsql', 'php', 'postiats', 'powerquery',
        'powershell', 'pug', 'python', 'r', 'razor', 'redis', 'redshift',
        'restructuredtext', 'ruby', 'rust', 'sb', 'scheme', 'scss', 'shell',
        'solidity', 'sophia', 'sparql', 'sql', 'st', 'swift', 'systemverilog',
        'tcl', 'twig', 'typescript', 'vb', 'xml', 'yaml'
      ],
    }),
  ],
};

export default config;
