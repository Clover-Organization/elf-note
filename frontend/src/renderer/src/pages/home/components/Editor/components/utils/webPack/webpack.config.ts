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
      // Linguagens que você deseja incluir no bundle
      languages: ['javascript', 'typescript', 'python', 'json', 'html', 'css'],
    }),
  ],
};

export default config;
