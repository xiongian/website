eslint.config.js — documentation

Purpose:
- `eslint.config.js` configures ESLint for the project. It declares which files to lint, parser options, and rule sets.

Key points in this repo:
- The file composes configurations from `@eslint/js`, `typescript-eslint`, and React-related plugins.
- It uses `typescript-eslint` helper to enable type-aware rules when desired.

How to change safely:
- To enable stricter type-aware rules, follow the README comments in the file and add `parserOptions.project` pointing to tsconfig files and enable `recommendedTypeChecked` configs.
- When adding new plugins, install them (npm i -D) and import them at the top of this file.
- Run `npm run lint` after changes to ensure the rules are valid.

Exercises:
1) Add or change stylistic rules (e.g., maximum line length) to match your team's style.
2) Integrate Prettier by adding `eslint-config-prettier` to disable conflicting rules.

Notes:
- ESLint configs can be extended via shareable configs (npm packages) for consistency across projects.
