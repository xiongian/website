/*
  src/App.tsx

  Purpose:
  - This is the main React component file for the site. It composes all the individual components.

  Teaching notes (how to read and change this file):
  - React components are functions that return JSX (looks like HTML but is JavaScript).
  - To make components interactive, add React state (useState) and event handlers (onClick, onChange).
  - Props are how components receive values from their parent. For example Button receives `button_name`.
  - You can split larger components into separate files under `src/` (e.g. src/components/Button.tsx)
    and import them here to keep the code organized.

  How to apply forward (exercises):
  1) Add a click handler to Button that prints the name to the console.
  2) Convert Header to map over an array of link objects instead of hardcoding <Button/> instances.
  3) Introduce TypeScript types for props and component return types.

  Error modes and safety:
  - If you try to use a browser-only API during server-side rendering, guard it with a check for
    `typeof window !== 'undefined'`.
  - Keep JSX well-formed (one parent element or fragment per return).
*/

import type { ReactElement } from "react";
import { FloatingHeader } from "./components/FloatingHeader";
import { HomeSection } from "./components/HomeSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { Footer } from "./components/Footer";
import { CustomScrollbar } from "./components/CustomScrollbar";

// Root App component with floating header
// - This composes Header, Footer and the main content.
// - Note: avoid using a <body> tag inside components. The real <body> is in index.html. Use divs or semantic elements instead.
function App(): ReactElement {
  return (
    <>
      <CustomScrollbar />
      <FloatingHeader />

      <main>
        <HomeSection />
        <ProjectsSection />
      </main>

      <Footer />
    </>
  );
}

export default App;