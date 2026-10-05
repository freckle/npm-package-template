# Releases

## First release

`release.yml` publishes with npm trusted publishing (OIDC), not an `NPM_TOKEN`
secret. npm only accepts a trusted publisher for a package that already exists,
so the first version is published by hand:

1. Log in as an `@freckle` publisher and publish the first version:

   ```sh
   npm login
   pnpm build && npm publish --access public
   ```

2. Add `release.yml` as the package's trusted publisher:

   ```sh
   npx npm@latest trust github @freckle/<name> \
     --repo freckle/<repo> --file release.yml --allow-publish --yes
   ```

3. Remove `if: false` from the `release` job in `.github/workflows/release.yml`.

## Subsequent releases

To trigger a release, merge a commit to `main` that follows [Conventional
Commits][]. In short,

- `fix:` to trigger a patch release
- `feat:` to trigger a minor release
- `<type>!:` or use a `BREAKING CHANGE:` footer to trigger a major release

We don't enforce conventional commits generally (though you are free do so),
it's only required if you want to trigger release.

[conventional commits]: https://www.conventionalcommits.org/en/v1.0.0/#summary
