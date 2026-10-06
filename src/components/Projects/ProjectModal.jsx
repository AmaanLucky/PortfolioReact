import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

// Case-study pop-up for one project. Esc, the backdrop or the close button dismiss it.
export const ProjectModal = ({ project, index, total, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [project, onClose]);

  const pad = (n) => String(n).padStart(2, "0");

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${project.title} case study`}
            initial={{ scale: 0.8, rotate: -3, y: 40 }}
            animate={{ scale: 1, rotate: 0, y: 0 }}
            exit={{ scale: 0.8, y: 40 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="flex max-h-[90vh] w-full max-w-[720px] flex-col overflow-hidden rounded-[26px] border-[3px] border-white bg-navy text-white shadow-[8px_8px_0_#F96031]"
          >
            <div className="flex items-start justify-between gap-4 border-b-[3px] border-white bg-gold p-6 text-navy">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-navy px-3 py-1 font-display text-[10px] font-extrabold uppercase tracking-wider text-white">
                    {pad(index + 1)} / {pad(total)}
                  </span>
                  {project.status && (
                    <span className="-rotate-2 rounded-full border-2 border-navy bg-white px-3 py-1 font-display text-[10px] font-extrabold uppercase tracking-wider">
                      {project.status}
                    </span>
                  )}
                </div>
                <h3 className="font-display text-[clamp(18px,3.2vw,28px)] font-extrabold uppercase leading-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-navy/80">
                  {project.kind}
                </p>
              </div>
              <button
                type="button"
                autoFocus
                onClick={onClose}
                aria-label="Close case study"
                data-cursor="close"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-[3px] border-navy bg-white font-display text-sm font-extrabold hover:bg-navy hover:text-white"
              >
                &#10005;
              </button>
            </div>

            <div className="overflow-y-auto p-6 sm:p-8">
              <p className="font-display text-base font-extrabold leading-snug text-gold sm:text-lg">
                {project.tagline}
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/85">{project.overview}</p>

              <h4 className="mb-3 mt-8 font-display text-xs font-extrabold uppercase tracking-[3px] text-gold">
                What I did
              </h4>
              <ul className="space-y-3">
                {project.did.map((line, i) => (
                  <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-white/90">
                    <span aria-hidden="true" className="mt-0.5 text-gold">
                      &#10022;
                    </span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 -rotate-1 rounded-[20px] border-[3px] border-white bg-navy-light p-5 shadow-[5px_5px_0_#F96031]">
                <span className="font-display text-[10px] font-extrabold uppercase tracking-[2px] text-gold">
                  Takeaway
                </span>
                <p className="mt-2 text-base font-medium leading-relaxed">{project.takeaway}</p>
              </div>

              <ul className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full bg-white px-3 py-1 text-xs font-bold text-navy"
                  >
                    {s}
                  </li>
                ))}
              </ul>

              {project.demo && (
                <div className="mt-6">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block rounded-full border-[3px] border-white bg-gold px-6 py-2.5 font-display text-[11px] font-extrabold uppercase tracking-wide text-navy no-underline shadow-[4px_4px_0_#fff] transition-colors hover:bg-white"
                  >
                    Live demo &rarr;
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
