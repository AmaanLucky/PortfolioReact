import React, { useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const RESUME_URL =
  "https://drive.google.com/file/d/1u702nk2QiV_U7FUuktzau9sFqX8I4kX0/view?usp=sharing";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed left-0 top-0 z-30 w-full border-b border-white/5 bg-navy/70 px-[10%] py-5 backdrop-blur-md"
      >
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold tracking-tight text-white">
          AMAAN<span className="text-gold">.</span>
        </span>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-semibold uppercase tracking-wider text-offwhite/80 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
          <li>
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gold px-5 py-2 text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:bg-gold hover:text-navy"
            >
              Resume
            </a>
          </li>
        </ul>

        <button
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="z-40 flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={`h-[2px] w-6 bg-white transition-transform duration-300 ${
              menuOpen ? "translate-y-[8px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-opacity duration-300 ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-6 bg-white transition-transform duration-300 ${
              menuOpen ? "-translate-y-[8px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>
      </motion.nav>

      <div
        className={`fixed inset-0 top-[72px] z-20 flex flex-col items-center gap-8 bg-navy/95 pt-16 backdrop-blur-md transition-transform duration-300 md:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-2xl font-semibold uppercase tracking-wider text-white"
          >
            {link.label}
          </a>
        ))}
        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
          className="rounded-full border border-gold px-6 py-3 text-lg font-semibold uppercase tracking-wider text-gold"
        >
          Resume
        </a>
      </div>
    </>
  );
};
