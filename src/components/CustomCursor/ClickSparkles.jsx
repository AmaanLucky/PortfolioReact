import { useEffect } from "react";

import { confettiBurst } from "../../lib/confetti";

// Tiny confetti pop wherever you click or tap.
export const ClickSparkles = () => {
  useEffect(() => {
    const onDown = (e) => confettiBurst(e.clientX, e.clientY, 10);
    window.addEventListener("pointerdown", onDown);
    return () => window.removeEventListener("pointerdown", onDown);
  }, []);
  return null;
};
