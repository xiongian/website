/*
  src/components/Footer.tsx

  Purpose:
  - Footer component with copyright and call-to-action
*/

import type { JSX } from "react";

export function Footer(): JSX.Element {
  return (
    <footer>
      <div className="footer-content">
        <a href="mailto:contact@ianxiong.com" className="footer-link">
          curious to <span className="footer-highlight">see more</span>?
        </a>
      </div>
      <div className="footer-copyright">
        <p>© 2025 Ian Xiong. All rights reserved.</p>
      </div>
    </footer>
  );
}
