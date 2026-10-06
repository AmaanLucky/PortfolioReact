import React, { createContext, useContext, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import { confettiBurst } from "../../lib/confetti";

const TOTAL = 3;
const HuntContext = createContext({ found: [], find: () => {} });

// Tracks the hidden-star hunt, shows the counter badge and the unlock message.
export const HuntProvider = ({ children }) => {
  const [found, setFound] = useState([]);
  const [unlocked, setUnlocked] = useState(false);

  const find = (id, x, y) => {
    if (found.includes(id)) return;
    const next = [...found, id];
    setFound(next);
    if (next.length === TOTAL) {
      confettiBurst(x, y, 160);
      setUnlocked(true);
    } else {
      confettiBurst(x, y, 50);
    }
  };

  useEffect(() => {
    if (!unlocked) return;
    const t = setTimeout(() => setUnlocked(false), 9000);
    return () => clearTimeout(t);
  }, [unlocked]);

  return (
    <HuntContext.Provider value={{ found, find }}>
      {children}

      <AnimatePresence>
        {found.length > 0 && !unlocked && (
          <motion.div
            key="badge"
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: -4 }}
            exit={{ scale: 0 }}
            role="status"
            className="fixed bottom-6 left-4 z-40 rounded-full border-[3px] border-white bg-navy px-4 py-2 font-display text-[11px] font-extrabold uppercase tracking-wide text-white shadow-[4px_4px_0_#F96031]"
          >
            &#11088; {found.length}/{TOTAL} found
          </motion.div>
        )}

        {unlocked && (
          <motion.div
            key="unlock"
            initial={{ y: 80, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 16 }}
            role="alert"
            className="fixed bottom-8 left-1/2 z-[60] w-[min(92vw,420px)] -translate-x-1/2 rounded-[24px] border-[3px] border-white bg-gold p-6 text-center text-navy shadow-[8px_8px_0_#fff]"
          >
            <p className="font-display text-lg font-extrabold uppercase">Secret unlocked! &#127881;</p>
            <p className="mt-2 text-base font-medium">
              You found all {TOTAL} hidden stars. Let&apos;s grab a coffee &#9749;
            </p>
            <div className="mt-4 flex justify-center gap-3">
              <a
                href="#contact"
                onClick={() => setUnlocked(false)}
                className="rounded-full border-[3px] border-navy bg-navy px-5 py-2 font-display text-[11px] font-extrabold uppercase tracking-wide text-white no-underline"
              >
                Say hi
              </a>
              <button
                type="button"
                onClick={() => setUnlocked(false)}
                className="rounded-full border-[3px] border-navy px-5 py-2 font-display text-[11px] font-extrabold uppercase tracking-wide"
              >
                Close
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </HuntContext.Provider>
  );
};

// A small star hidden in a section. Click it to collect it.
export const HiddenStar = ({ id, className = "" }) => {
  const { found, find } = useContext(HuntContext);
  const done = found.includes(id);
  return (
    <button
      type="button"
      data-cursor={done ? undefined : "found me?"}
      aria-label={done ? "Hidden star (found)" : "Hidden star"}
      disabled={done}
      onClick={(e) => find(id, e.clientX, e.clientY)}
      className={`absolute z-[5] flex h-9 w-9 items-center justify-center rounded-full border-2 border-white/60 bg-navy-light text-base transition-all duration-300 ${
        done ? "scale-75 opacity-30" : "opacity-30 hover:rotate-12 hover:scale-125 hover:opacity-100"
      } ${className}`}
    >
      &#11088;
    </button>
  );
};
