import type { OxlintConfig } from 'oxlint'

import { defineConfig } from 'oxlint'

/** Opinionated oxlint preset. Zero-arg; local overrides via `extends: [kvoon()]`. */
export default function kvoon(): OxlintConfig {
  return defineConfig({
    // Setting `plugins` replaces defaults — keep the built-in set + vue + import.
    // perfectionist: leave rule-map keys unsorted (config readability > alpha keys)
    /* oxlint-disable perfectionist/sort-objects -- rule tables are hand-grouped */
    plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'import', 'vue'],
    categories: {
      correctness: 'error',
      suspicious: 'warn',
      // style via stylistic jsPlugin subset below — native style category is too noisy
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
      { name: 'stylistic', specifier: '@stylistic/eslint-plugin' },
      { name: 'perfectionist', specifier: 'eslint-plugin-perfectionist' },
    ],
    rules: {
      'import/no-named-export': 'off',
      'import/prefer-default-export': 'off',
      'import/group-exports': 'off',
      'import/no-unassigned-import': 'off', // side-effect CSS / polyfills
      'sort-imports': 'off', // perfectionist/sort-imports owns this

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
      'stylistic/brace-style': ['warn', '1tbs', { allowSingleLine: true }],
      'stylistic/keyword-spacing': 'warn',
      'stylistic/space-before-blocks': 'warn',
      'stylistic/comma-spacing': 'warn',
      'stylistic/no-trailing-spaces': 'warn',
      'stylistic/no-multi-spaces': 'warn',
      'stylistic/block-spacing': 'warn',
      'stylistic/key-spacing': 'warn',

      'perfectionist/sort-imports': 'warn',
      'perfectionist/sort-named-imports': 'warn',
      'perfectionist/sort-exports': 'warn',
      'perfectionist/sort-named-exports': 'warn',
      'perfectionist/sort-objects': 'warn',
      'perfectionist/sort-object-types': 'warn',
      'perfectionist/sort-interfaces': 'warn',
      'perfectionist/sort-enums': 'warn',
      'perfectionist/sort-union-types': 'warn',
      'perfectionist/sort-intersection-types': 'warn',
      'perfectionist/sort-array-includes': 'warn',
      'perfectionist/sort-classes': 'warn',
      'perfectionist/sort-maps': 'warn',
      'perfectionist/sort-sets': 'warn',
      'perfectionist/sort-switch-case': 'warn',
      'perfectionist/sort-jsx-props': 'warn',
      'perfectionist/sort-heritage-clauses': 'warn',
      'perfectionist/sort-decorators': 'warn',
      'perfectionist/sort-modules': 'warn',
      'perfectionist/sort-variable-declarations': 'warn',
      'perfectionist/sort-import-attributes': 'warn',
      'perfectionist/sort-export-attributes': 'warn',
      'perfectionist/sort-arrays': 'warn',
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
