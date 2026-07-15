# @kvoon/oxlint-config

Opinionated shareable [oxlint](https://oxc.rs/docs/guide/usage/linter) preset:

- style via `@stylistic/eslint-plugin` (curated; **single quotes**, **no semis** as errors)
- vue rules (plugin on, rules scoped to `*.vue`)
- sort via `eslint-plugin-perfectionist`
- `typeAware` + `typeCheck` on
- correctness `error`; suspicious/sort mostly `warn`

## Install

```bash
pnpm add -D @kvoon/oxlint-config oxlint oxlint-tsgolint
```

Peers: `oxlint` `^1.74.0`, `oxlint-tsgolint` `^0.24.0`. Stylistic + perfectionist ship as dependencies of this package.

## Usage

```ts
// oxlint.config.ts
import kvoon from '@kvoon/oxlint-config'

export default kvoon()
```

Local overrides:

```ts
import kvoon from '@kvoon/oxlint-config'
import { defineConfig } from 'oxlint'

export default defineConfig({
  extends: [kvoon()],
  rules: {
    'no-console': 'off',
  },
})
```

This repo dogfoods the preset (`oxlint.config.ts`). `playground/vue3` is a Vite Vue3+TS app for manual lint checks.
