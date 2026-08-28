import { describe, expect, it } from 'vitest'

import kvoon from '../src/index.ts'

describe('kvoon()', () => {
  it('returns a config with plugins and jsPlugins', () => {
    const config = kvoon()
    expect(config.plugins).toContain('vue')
    expect(config.plugins).toContain('import')
    expect(config.jsPlugins).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ name: 'stylistic' }),
        expect.objectContaining({ name: 'perfectionist' }),
        expect.objectContaining({ name: 'command', specifier: 'eslint-plugin-command' }),
      ]),
    )
    expect(config.rules?.['command/command']).toBe('error')
    expect(config.options?.typeAware).toBe(true)
    expect(config.options?.typeCheck).toBe(true)
    expect(config.categories?.correctness).toBe('error')
    expect(config.categories?.suspicious).toBe('warn')
  })
})
