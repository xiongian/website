tsconfig documentation

This project uses multiple tsconfig files:
- `tsconfig.json` — the base project configuration used for the application source.
- `tsconfig.app.json` — options specific to the app (referenced from the base tsconfig in this template).
- `tsconfig.node.json` — Node/Vite configuration settings for tooling.

Why multiple configs?
- Splitting configs allows different compiler settings for app code vs build tools. For example, Vite plugins may need newer `target`/`lib` settings.

How to change safely:
- When changing `strict` or module options, run `npm run build` or `tsc -b` to ensure there are no new type errors.
- `noEmit: true` is used because Vite handles bundling; if you switch to tsc output, remove that flag.
- If you add paths or aliases, update `tsconfig.json` and vite config to keep import resolution consistent.

Exercises:
1) Add `paths` mapping to simplify imports (e.g. `@components/*` -> `src/components/*`). Update `vite.config.ts` to mirror the alias.
2) Temporarily toggle `noUnusedLocals` to false to see where the codebase has unused variables; then fix them.

Note: JSON files do not allow comments — use these docs to keep human-readable guidance next to the actual config files.
