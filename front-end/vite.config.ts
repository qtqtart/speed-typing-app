import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { chunkSplitPlugin } from 'vite-plugin-chunk-split'

import { compilerOptions } from './tsconfig.paths.json'

const resolveAlias = (paths: Record<string, string[]>) =>
  Object.entries(paths).reduce(
    (acc, [alias, path]) => {
      acc[alias] = resolve(__dirname, ...path)

      return acc
    },
    {} as Record<string, string>,
  )

export default defineConfig({
  build: {
    cssMinify: true,
    minify: true,
  },
  plugins: [react(), chunkSplitPlugin()],
  resolve: {
    alias: resolveAlias(compilerOptions.paths),
  },
})
