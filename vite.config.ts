/*
  vite.config.ts

  Purpose:
  - Vite configuration file. Controls dev server, build options, and plugins. This project uses the
    official React plugin to enable Fast Refresh and JSX transformation.

  How to change:
  - Add optimizeDeps.include to pre-bundle specific packages for faster startup.
  - Configure server.port or proxy when working with APIs during development.
  - Add build.rollupOptions to customize output for publishing.
*/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Minimal config: use the React plugin. Vite infers sensible defaults for dev and build.
export default defineConfig({
  plugins: [react()],
})
