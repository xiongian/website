/*
  src/components/Button.tsx

  Purpose:
  - Small presentational Button component
  - Props: { button_name, onClick }
  - How to change: accept an onClick prop or style props to make it interactive or themed.
*/

import type { JSX } from "react";

interface ButtonProps {
  button_name: string;
  onClick?: () => void;
}

export function Button({ button_name, onClick }: ButtonProps): JSX.Element {
  function handleClick() {
    if (onClick) {
      onClick();
    } else {
      alert("You clicked on a button!");
    }
  }

  return <button onClick={handleClick}>{button_name}</button>;
}