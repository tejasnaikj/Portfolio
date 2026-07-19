"use client";

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setShowTop(v > 600);
  });

  return (
    <footer className="relative border-t border-[var(--color-border)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <a href="#top" className="font-display text-base font-bold tracking-tight">
          TEJAS<span className="text-gradient">.</span>
        </a>

        <p className="font-mono text-[12px] text-[var(--color-text-muted)]">
          © {year} {profile.name}. Built with Next.js &amp; Framer Motion.
        </p>

        <div className="flex items-center gap-3">
          {[
            { icon: Github, href: profile.github },
            { icon: Linkedin, href: profile.linkedin },
            { icon: Mail, href: `mailto:${profile.email}` },
          ].map(({ icon: Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="glass flex h-9 w-9 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-cyan)]"
            >
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {showTop && (
          <motion.a
            href="#top"
            initial={{ opacity: 0, scale: 0.7, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 10 }}
            whileHover={{ y: -3 }}
            className="glass-strong fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-text)] shadow-[0_10px_30px_-10px_rgba(139,92,246,0.6)]"
            aria-label="Back to top"
          >
            <ArrowUp size={17} />
          </motion.a>
        )}
      </AnimatePresence>
    </footer>
  );
}
