"use client";

import { useRef, useState, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

type Variant = "primary" | "ghost";

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  download,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  className?: string;
  type?: "button" | "submit";
  download?: string | boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.3;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.3;
    setPos({ x, y });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  function handleClick(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (el) {
      const rect = el.getBoundingClientRect();
      const id = Date.now();
      setRipples((r) => [...r, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
      setTimeout(() => setRipples((r) => r.filter((rp) => rp.id !== id)), 600);
    }
    onClick?.();
  }

  const base =
    "relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 font-body text-sm font-semibold transition-colors duration-300";

  const styles =
    variant === "primary"
      ? "text-white shadow-[0_0_30px_-8px_rgba(139,92,246,0.7)]"
      : "glass text-[var(--color-text)] hover:border-[var(--color-purple)]/60";

  const content = (
    <motion.span
      ref={ref}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      className={`${base} ${styles} ${className}`}
      style={
        variant === "primary"
          ? {
              backgroundImage:
                "linear-gradient(135deg, var(--color-purple), var(--color-blue), var(--color-cyan))",
            }
          : undefined
      }
    >
      {children}
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/30"
          style={{
            left: r.x,
            top: r.y,
            width: 10,
            height: 10,
            transform: "translate(-50%, -50%)",
            animation: "ripple-expand 0.6s ease-out forwards",
          }}
        />
      ))}
    </motion.span>
  );

  if (href) {
    return (
      <a href={href} download={download} className="inline-block">
        {content}
      </a>
    );
  }

  return (
    <button type={type} className="inline-block">
      {content}
    </button>
  );
}
