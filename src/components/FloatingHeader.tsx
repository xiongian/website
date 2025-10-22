/*
  src/components/FloatingHeader.tsx

  Purpose:
  - Floating header with Framer Motion animations
*/

import type { JSX } from "react";
import { motion } from "framer-motion";
import { useScrollPosition } from "../hooks/useScrollPosition";
import { Header } from "./Header";
import { SocialLinks } from "./SocialLinks";

export function FloatingHeader(): JSX.Element {
  const scrollY = useScrollPosition();
  const isFloating = scrollY > 0; // Trigger after passing the initial header area

  return (
    <motion.div
      className={`header-container ${isFloating ? 'floating' : 'fixed'}`}
      animate={{
        scale: isFloating ? 0.7 : 1,
        opacity: isFloating ? 1 : 1,
      }}
      transition={{
        scale: { duration: 0.8, type: 'spring', stiffness: 120, damping: 20, mass: 1, bounce: 0},
        opacity: { duration: 0.3, type: 'spring' },
      }}
      style={{
        position: isFloating ? 'sticky' : 'static' ,
        top: isFloating ? '20px' : 'auto',
        zIndex: 1000,
      }}
    >
      <div className="header-content">
        <Header />
        <SocialLinks />
      </div>
    </motion.div>
  );
}
