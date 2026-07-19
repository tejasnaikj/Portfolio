"use client";

import { motion } from "framer-motion";
import { Home } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong flex max-w-md flex-col items-center rounded-[32px] p-10 text-center"
      >
        <motion.div
          className="relative mb-6"
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div
            aria-hidden
            className="absolute -inset-10 -z-10 rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.4), transparent 70%)",
            }}
          />
          <span className="font-display text-[86px] font-bold leading-none text-gradient">
            404
          </span>
        </motion.div>

        <h1 className="mb-3 font-display text-xl font-semibold">
          This page drifted off the grid.
        </h1>
        <p className="mb-8 text-sm text-[var(--color-text-muted)]">
          The page you&apos;re looking for doesn&apos;t exist or has moved
          somewhere else in the aurora.
        </p>

        <MagneticButton href="/" variant="primary">
          <Home size={15} />
          Go Home
        </MagneticButton>
      </motion.div>
    </div>
  );
}
