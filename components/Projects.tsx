"use client";

import { useMemo, useState, type MouseEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import Reveal from "./Reveal";
import { projects, projectFilters } from "@/lib/data";

function TiltCard({
  children,
  className,
  large,
}: {
  children: React.ReactNode;
  className?: string;
  large?: boolean;
}) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  function handleMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -6, ry: px * 8 });
  }

  function handleLeave() {
    setTilt({ rx: 0, ry: 0 });
  }

  return (
    <motion.div
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      style={{ transformStyle: "preserve-3d", transformPerspective: 800 }}
      whileHover={{ scale: 1.015 }}
      className={`glass card-shine group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.6)] transition-shadow duration-300 hover:shadow-[0_25px_60px_-20px_rgba(139,92,246,0.35)] ${
        large ? "sm:p-8" : ""
      } ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(
    () =>
      filter === "All" ? projects : projects.filter((p) => p.category === filter),
    [filter]
  );

  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="mb-10 max-w-xl">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-cyan)]">
              Featured Projects
            </div>
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Things I&apos;ve shipped, not just studied
            </h2>
            <p className="text-[15px] text-[var(--color-text-muted)]">
              Research finds the failure modes. These are the systems built to
              work anyway.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-10 flex flex-wrap gap-2">
            {projectFilters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`relative rounded-full px-4 py-2 font-mono text-[12.5px] font-medium transition-all ${
                  filter === f
                    ? "text-white"
                    : "glass text-[var(--color-text-muted)] hover:text-[var(--color-text)]"
                }`}
                style={
                  filter === f
                    ? {
                        backgroundImage:
                          "linear-gradient(135deg, var(--color-purple), var(--color-blue), var(--color-cyan))",
                      }
                    : undefined
                }
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.4, delay: i * 0.04, ease: "easeOut" }}
                className={p.featured ? "lg:col-span-2" : ""}
              >
                <TiltCard large={p.featured}>
                  <div className="mb-4 flex items-start justify-between gap-3">
                    <span className="rounded-full border border-[var(--color-border)] bg-white/5 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.08em] text-[var(--color-cyan)]">
                      {p.tag}
                    </span>
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold">
                    {p.title}
                  </h3>
                  <p className="mb-5 flex-1 text-[13.5px] leading-relaxed text-[var(--color-text-muted)]">
                    {p.description}
                  </p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-[var(--color-border)] px-2.5 py-1 font-mono text-[11px] text-[var(--color-text-muted)]"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-3">
                    <a
                      href={p.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={`glass flex items-center justify-center gap-2 rounded-full py-2.5 font-body text-[12.5px] font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-purple)]/60 ${
                        p.demoUrl ? "flex-1" : "w-full"
                      }`}
                    >
                      <Github size={14} />
                      Code
                    </a>
                    {p.demoUrl && (
                      <a
                        href={p.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 font-body text-[12.5px] font-semibold text-white transition-transform hover:scale-[1.02]"
                        style={{
                          backgroundImage:
                            "linear-gradient(135deg, var(--color-purple), var(--color-cyan))",
                        }}
                      >
                        <ExternalLink size={14} />
                        Demo
                      </a>
                    )}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
