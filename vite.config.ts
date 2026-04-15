import { defineConfig } from 'vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

export default defineConfig({
  plugins: [viteSingleFile()],
  server: { host: true, port: 5188 },
  build: { outDir: 'dist', minify: true },
});
