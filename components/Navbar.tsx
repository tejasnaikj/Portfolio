"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [scrolled]);

  return (
    <AnimatePresence mode="wait">
      {!scrolled ? (
        <motion.header
          key="topbar"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-4xl -translate-x-1/2"
        >
          <nav className="glass-strong flex w-full items-center justify-between rounded-full px-6 py-3">
            <a
              href="#top"
              className="font-display text-lg font-bold tracking-tight text-[var(--color-text)]"
            >
              TEJAS<span className="text-gradient">.</span>
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="group relative rounded-full px-3.5 py-2 font-body text-[13.5px] font-medium text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  {l.label}
                  <span className="absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-gradient-to-r from-[var(--color-purple)] via-[var(--color-blue)] to-[var(--color-cyan)] transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              ))}
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="glass flex h-9 w-9 shrink-0 items-center justify-center rounded-full lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </nav>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -12, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -12, scale: 0.97 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="glass-strong absolute left-0 right-0 top-[calc(100%+8px)] rounded-3xl p-4 lg:hidden"
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 font-body text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:bg-white/5 hover:text-[var(--color-text)]"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      ) : (
        <motion.header
          key="sidebar"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="fixed left-4 top-1/2 z-50 -translate-y-1/2"
        >
          <nav className="glass-strong flex flex-col items-center gap-1 rounded-full px-3 py-5">
            <a
              href="#top"
              aria-label="Home"
              className="mb-3 font-display text-sm font-bold tracking-tight text-[var(--color-text)]"
            >
              T<span className="text-gradient">.</span>
            </a>

            <div className="hidden flex-col items-center gap-1 lg:flex">
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  title={l.label}
                  className="group relative rounded-full px-3 py-2 font-body text-[11.5px] font-medium leading-tight text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text)]"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => setOpen((v) => !v)}
              className="glass mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full lg:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X size={16} /> : <Menu size={16} />}
            </button>
          </nav>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, x: -12, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -12, scale: 0.97 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="glass-strong absolute left-[calc(100%+8px)] top-0 w-48 rounded-3xl p-4 lg:hidden"
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-4 py-3 font-body text-sm font-medium text-[var(--color-text-muted)] transition-colors hover:bg-white/5 hover:text-[var(--color-text)]"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
