import React, { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+";

// Letters shuffle and settle left-to-right when hovered.
export const ScrambleText = ({ text }) => {
  const [display, setDisplay] = useState(text);
  const timer = useRef(null);
  const ref = useRef(null);

  useEffect(() => () => clearInterval(timer.current), []);

  const start = () => {
    clearInterval(timer.current);
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (ref.current) ref.current.style.width = `${ref.current.offsetWidth}px`;
    let frame = 0;
    timer.current = setInterval(() => {
      frame += 1;
      const settled = Math.floor(frame / 2);
      setDisplay(
        text
          .split("")
          .map((ch, i) => (i < settled || ch === " " ? ch : CHARS[Math.floor(Math.random() * CHARS.length)]))
          .join("")
      );
      if (settled >= text.length) {
        clearInterval(timer.current);
        setDisplay(text);
        if (ref.current) ref.current.style.width = "";
      }
    }, 35);
  };

  return (
    <span ref={ref} onMouseEnter={start} className="inline-block whitespace-nowrap text-center">
      <span aria-hidden="true">{display}</span>
      <span className="sr-only">{text}</span>
    </span>
  );
};
