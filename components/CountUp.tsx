"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

export default function CountUp({
  to,
  decimals = 0,
  suffix = "",
  prefix = "",
  duration = 1.6,
}: {
  to: number;
  decimals?: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const node = ref.current;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate(value) {
        node.textContent = prefix + value.toFixed(decimals) + suffix;
      },
    });
    return () => controls.stop();
  }, [isInView, to, decimals, suffix, prefix, duration]);

  return (
    <motion.span ref={ref}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}
