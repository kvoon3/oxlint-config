import { defineConfig } from 'tsdown'

export default defineConfig({
  deps: {
    neverBundle: ['oxlint', 'eslint-plugin-antfu', '@stylistic/eslint-plugin', 'eslint-plugin-perfectionist', 'eslint-plugin-command'],
  },
  dts: true,
  entry: ['./src/index.ts'],
  platform: 'neutral',
  publint: true,
})
