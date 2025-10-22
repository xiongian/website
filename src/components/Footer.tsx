/*
  src/components/Footer.tsx

  Purpose:
  - Footer component with copyright and call-to-action
*/

import type { JSX } from "react";

export function Footer(): JSX.Element {
  return (
    <footer>
      <div className="container">
        <div>
          <p><small>© 2025 Ian Xiong</small></p>
        </div>
        <div>
          <h3>curious to see more?</h3>
        </div>
      </div>
    </footer>
  );
}