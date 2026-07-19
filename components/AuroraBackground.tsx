"use client";

import { useEffect, useRef } from "react";

export default function AuroraBackground() {
  const glowRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleMove(e: PointerEvent) {
      const el = glowRef.current;
      if (!el) return;
      el.style.setProperty("--gx", `${e.clientX}px`);
      el.style.setProperty("--gy", `${e.clientY}px`);
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div className="aurora-wrap" aria-hidden>
      {/* mesh gradient blobs */}
      <div
        className="aurora-blob aurora-1"
        style={{
          top: "-10%",
          left: "-5%",
          width: "55vw",
          height: "55vw",
          background:
            "radial-gradient(circle, rgba(139,92,246,0.55) 0%, rgba(139,92,246,0) 70%)",
        }}
      />
      <div
        className="aurora-blob aurora-2"
        style={{
          top: "10%",
          right: "-10%",
          width: "50vw",
          height: "50vw",
          background:
            "radial-gradient(circle, rgba(59,130,246,0.5) 0%, rgba(59,130,246,0) 70%)",
        }}
      />
      <div
        className="aurora-blob aurora-3"
        style={{
          bottom: "-15%",
          left: "15%",
          width: "48vw",
          height: "48vw",
          background:
            "radial-gradient(circle, rgba(6,182,212,0.45) 0%, rgba(6,182,212,0) 70%)",
        }}
      />
      <div
        className="aurora-blob aurora-4"
        style={{
          bottom: "-5%",
          right: "5%",
          width: "42vw",
          height: "42vw",
          background:
            "radial-gradient(circle, rgba(236,72,153,0.4) 0%, rgba(236,72,153,0) 70%)",
        }}
      />

      {/* tiny particles / stars */}
      <div className="mesh-overlay" />

      {/* film grain for texture */}
      <div className="grain-noise" />

      {/* mouse responsive radial glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={
          {
            "--gx": "50%",
            "--gy": "50%",
            background:
              "radial-gradient(600px circle at var(--gx) var(--gy), rgba(139,92,246,0.10), transparent 70%)",
          } as React.CSSProperties
        }
      />

      {/* vignette to keep content readable */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 100% at 50% 0%, transparent 40%, #050816 100%)",
        }}
      />
    </div>
  );
}
