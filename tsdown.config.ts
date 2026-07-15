import { defineConfig } from 'tsdown'

export default defineConfig({
  deps: {
    neverBundle: ['oxlint', '@stylistic/eslint-plugin', 'eslint-plugin-perfectionist'],
  },
  dts: true,
  entry: ['./src/index.ts'],
  platform: 'neutral',
  publint: true,
})
