"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function SplashScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 1100;
    let raf = 0;

    function tick() {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 250);
      }
    }
    raf = requestAnimationFrame(tick);

    document.body.style.overflow = "hidden";
    const release = setTimeout(() => {
      document.body.style.overflow = "";
    }, duration + 500);

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(release);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#050816]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(10px)" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="glass mb-8 flex h-20 w-20 items-center justify-center rounded-3xl"
          >
            <span
              className="font-display text-2xl font-bold text-gradient"
              style={{ backgroundSize: "200% auto" }}
            >
              TN
            </span>
          </motion.div>

          <div className="h-[3px] w-52 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full"
              style={{
                width: `${progress}%`,
                backgroundImage:
                  "linear-gradient(90deg, var(--color-purple), var(--color-blue), var(--color-cyan))",
              }}
            />
          </div>
          <p className="mt-4 font-mono text-xs tracking-[0.2em] text-[var(--color-text-muted)]">
            {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
