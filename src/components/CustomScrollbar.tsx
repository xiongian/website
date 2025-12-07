import { useEffect, useState } from "react";
import type { ReactElement } from "react";

export function CustomScrollbar(): ReactElement {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const scrollableHeight = docHeight - winHeight;

      // Calculate scroll progress (0 to 1)
      const progress = scrollableHeight > 0 ? scrollTop / scrollableHeight : 0;
      setScrollProgress(progress);
      setViewportHeight(winHeight);
    };

    // Initial calculation
    updateScrollProgress();

    // Update on scroll and resize
    window.addEventListener("scroll", updateScrollProgress);
    window.addEventListener("resize", updateScrollProgress);

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  // Calculate thumb height (grows from top, stuck to top)
  const thumbHeight = scrollProgress * viewportHeight;

  return (
    <>
      {/* Invisible track */}
      <div
        className="custom-scrollbar"
        style={{
          position: "fixed",
          right: 0,
          top: 0,
          width: "24px",
          height: "100vh",
          backgroundColor: "transparent",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      >
        {/* Growing thumb - stuck to top */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "0.75rem",
            height: `${thumbHeight}px`,
            backgroundColor: "#D19F58",
            transition: "none", // Smooth scrolling without CSS transition
          }}
        />
      </div>
    </>
  );
}
