# npm Package Template

Our custom template repository for creating a package published to npm.

[Creating a repository from a template][docs].
(If you are working within Freckle, use [github-vending-machine](https://github.com/freckle/github-vending-machine) instead)

[docs]: https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template

**NOTE**: Be sure to look for strings like "TODO", "Package name", or "package-name" and update
them accordingly.

## Install

```sh
pnpm add package-name
```

## Usage

### process(input)

TODO: Document public API for package.

## Development

- **Package manager**: pnpm (Node version pinned in `.nvmrc`)
- `pnpm build` — `tsc`, emits to `dist/`
- `pnpm test` — Vitest
- `pnpm coverage` — Vitest with coverage, gated at 70% (lines/branches/functions/statements)
- `pnpm typecheck` — `tsc --noEmit`, includes test files
- `pnpm lint` — ESLint
- `pnpm format` / `pnpm format-check` — Prettier
- `pnpm knip` — unused files/dependencies/exports
- CI runs all of the above on every PR, plus a check that `dist/` is up to date

## Versioning and release process

See [RELEASE.md](./RELEASE.md).

---

[LICENSE](./LICENSE)
