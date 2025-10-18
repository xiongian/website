package.json — documentation

Purpose:
- `package.json` is the manifest for the project. It lists scripts, dependencies, devDependencies, and metadata used by npm/yarn/pnpm.

Key fields in this project:
- `name`, `private`, `version`: basic package metadata. `private: true` prevents accidental publishing to the npm registry.
- `type: "module"`: enables ECMAScript module (ESM) resolution for Node when running scripts.
- `scripts`: convenient commands. Typical ones here:
  - `dev`: starts Vite dev server with hot module replacement (HMR). Run `npm run dev`.
  - `build`: runs `tsc -b` (build TypeScript) then `vite build` to produce a production bundle.
  - `lint`: runs ESLint across the project. Customize eslint config in `eslint.config.js`.
  - `preview`: serve the production build locally using Vite preview.
- `dependencies`: runtime packages required by the app (React, react-dom).
- `devDependencies`: developer tools such as TypeScript, ESLint, and Vite.

How to change safely:
- To add a library: run `npm install <pkg>` (or `npm i -D` for dev dependencies). This updates package.json and package-lock.json.
- When bumping TypeScript versions, check compatibility with `@types/*` packages.
- If you add Node scripts that use top-level ESM (import), keep `type: "module"` or use `.mjs` files.

Exercises:
1) Add `test` script and set up a small Jest or Vitest test runner.
2) Add `format` script for Prettier and run it to consistently style files.

Notes about lockfiles:
- `package-lock.json` is used to lock exact dependency versions. Commit it to ensure reproducible installs.
