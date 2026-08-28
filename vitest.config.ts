import {defineConfig} from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    mockReset: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov'],
      // Gates `pnpm coverage` (and CI) at 70% on all four metrics. Delete
      // this `thresholds` key -- or the whole `coverage` block, and switch
      // ci.yml back to `pnpm test` -- if you don't want coverage enforced.
      thresholds: {
        lines: 70,
        branches: 70,
        functions: 70,
        statements: 70
      }
    }
  }
})
