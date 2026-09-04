import type { OxlintConfig } from 'oxlint'

import { defineConfig } from 'oxlint'

export default function kvoon(): OxlintConfig {
  return defineConfig({
    plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'vue'],
    categories: {
      correctness: 'error',
      suspicious: 'warn',
      style: 'off',
    },
    options: {
      typeAware: true,
      typeCheck: true,
    },
    ignorePatterns: [
      'dist/**',
      'build/**',
      'coverage/**',
      'node_modules/**',
      '.output/**',
      '.nuxt/**',
      '.vitepress/cache/**',
      'playground/*/dist/**',
    ],
    jsPlugins: [
      { name: 'antfu', specifier: 'eslint-plugin-antfu' },
      { name: 'stylistic', specifier: '@stylistic/eslint-plugin' },
      { name: 'perfectionist', specifier: 'eslint-plugin-perfectionist' },
      { name: 'command', specifier: 'eslint-plugin-command' },
    ],
    rules: {
      'no-unused-vars': 'warn',

      'antfu/consistent-chaining': 'warn',
      'antfu/consistent-list-newline': 'warn',
      'antfu/curly': 'warn',
      'antfu/if-newline': 'warn',
      'antfu/import-dedupe': 'warn',
      'antfu/no-import-dist': 'warn',
      'antfu/no-import-node-modules-by-path': 'warn',
      'antfu/no-top-level-await': 'warn',
      'antfu/no-ts-export-equal': 'warn',
      'antfu/top-level-function': 'warn',

      'import/no-named-export': 'off',
      'import/prefer-default-export': 'off',
      'import/group-exports': 'off',
      'import/no-unassigned-import': 'off',
      'sort-imports': 'off',

      'typescript/consistent-type-imports': ['warn', {
        prefer: 'type-imports',
        fixStyle: 'separate-type-imports',
      }],
      'import/consistent-type-specifier-style': ['warn', 'prefer-top-level'],

      'stylistic/indent': ['error', 2],
      'stylistic/spaced-comment': 'warn',
      'stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      'stylistic/jsx-quotes': ['error', 'prefer-single'],
      'stylistic/comma-dangle': ['warn', 'always-multiline'],
      'stylistic/semi': ['error', 'never'],
      'stylistic/object-curly-spacing': ['warn', 'always'],
      'stylistic/arrow-parens': ['warn', 'as-needed'],
      'stylistic/brace-style': ['warn', 'stroustrup', { allowSingleLine: true }],
      'stylistic/keyword-spacing': 'warn',
      'stylistic/space-before-blocks': 'warn',
      'stylistic/comma-spacing': 'warn',
      'stylistic/no-trailing-spaces': 'warn',
      'stylistic/no-multi-spaces': 'warn',
      'stylistic/block-spacing': 'warn',
      'stylistic/key-spacing': 'warn',

      'perfectionist/sort-imports': ['warn', {
        groups: [
          'type-import',
          ['type-parent', 'type-sibling', 'type-index', 'type-internal'],
          'value-builtin',
          'value-external',
          'value-internal',
          ['value-parent', 'value-sibling', 'value-index'],
          'side-effect',
          'ts-equals-import',
          'unknown',
        ],
        newlinesBetween: 'ignore',
        newlinesInside: 'ignore',
      }],
      'perfectionist/sort-named-imports': 'warn',
      'perfectionist/sort-exports': 'warn',
      'perfectionist/sort-named-exports': 'warn',

      'command/command': 'error',
    },
    overrides: [
      {
        files: ['**/*.vue'],
        rules: {
          'vue/component-definition-name-casing': 'warn',
          'vue/define-emits-declaration': 'warn',
          'vue/define-props-declaration': 'warn',
          'vue/define-props-destructuring': 'warn',
          'vue/no-export-in-script-setup': 'warn',
          'vue/no-import-compiler-macros': 'warn',
          'vue/no-lifecycle-after-await': 'warn',
          'vue/no-watch-after-await': 'warn',
          'vue/no-expose-after-await': 'warn',
          'vue/no-deprecated-destroyed-lifecycle': 'warn',
          'vue/no-deprecated-events-api': 'warn',
          'vue/no-side-effects-in-computed-properties': 'warn',
          'vue/no-async-in-computed-properties': 'warn',
          'vue/prefer-import-from-vue': 'warn',
          'vue/prop-name-casing': 'warn',
          'vue/require-default-export': 'warn',
          'vue/return-in-computed-property': 'warn',
          'vue/return-in-emits-validator': 'warn',
          'vue/valid-define-emits': 'warn',
          'vue/valid-define-props': 'warn',
          'vue/valid-define-options': 'warn',
          'vue/valid-next-tick': 'warn',
        },
      },
    ],
  })
}