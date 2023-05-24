import { defineConfig } from 'tsup'

export default defineConfig({
  entry: {
    'index': 'src/index.ts',
    'index.async':'src/index.async.ts',
  },
  splitting: true,
  treeshake: true,
  sourcemap: true,
  clean: true,
  dts:true,
  minify:true,
  format: ['cjs', 'esm'],
})
