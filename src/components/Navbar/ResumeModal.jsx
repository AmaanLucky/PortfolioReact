import React, { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Resume preview pop-up. Esc, the backdrop or the close button dismiss it.
export const ResumeModal = ({ open, onClose, viewUrl, previewUrl }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
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
            aria-label="Resume preview"
            initial={{ scale: 0.8, rotate: -3, y: 40 }}
            animate={{ scale: 1, rotate: 0, y: 0 }}
            exit={{ scale: 0.8, y: 40 }}
            transition={{ type: "spring", stiffness: 240, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="flex h-[90vh] w-full max-w-[860px] flex-col overflow-hidden rounded-[24px] border-[3px] border-white bg-navy shadow-[8px_8px_0_#F96031]"
          >
            <div className="flex items-center justify-between gap-3 border-b-[3px] border-white bg-gold px-5 py-3 text-navy">
              <span className="font-display text-xs font-extrabold uppercase tracking-wide">Resume</span>
              <div className="flex items-center gap-3">
                <a
                  href={viewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border-2 border-navy px-4 py-1.5 font-display text-[10px] font-extrabold uppercase tracking-wide no-underline hover:bg-navy hover:text-white"
                >
                  Open in new tab
                </a>
                <button
                  type="button"
                  autoFocus
                  onClick={onClose}
                  aria-label="Close resume preview"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-navy bg-white font-display text-sm font-extrabold hover:bg-navy hover:text-white"
                >
                  &#10005;
                </button>
              </div>
            </div>
            <iframe title="Resume" src={previewUrl} className="h-full w-full flex-1 bg-white" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
