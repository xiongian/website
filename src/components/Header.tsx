/*
  src/components/Header.tsx

  Purpose:
  - Header composed from Button components with smooth scroll functionality
*/

import type { JSX } from "react";
import { Button } from "./Button";

export function Header(): JSX.Element {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Button button_name="home" onClick={() => scrollToSection('home')} />
      <Button button_name="projects" onClick={() => scrollToSection('projects-section')} /> 
    </div>
  );
}