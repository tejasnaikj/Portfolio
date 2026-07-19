"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import Reveal from "./Reveal";
import { papers } from "@/lib/data";

export default function Research() {
  return (
    <section id="research" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <div className="mb-16 max-w-xl">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-cyan)]">
              Research
            </div>
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Two papers, one obsession: grounding
            </h2>
            <p className="text-[15px] text-[var(--color-text-muted)]">
              Both ask a version of the same question — when a model is
              confident, is it actually right, or just fluent?
            </p>
          </div>
        </Reveal>

        <div className="relative pl-10 sm:pl-16">
          {/* vertical line */}
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px sm:left-[15px]"
            style={{
              background:
                "linear-gradient(180deg, var(--color-purple), var(--color-blue), var(--color-cyan))",
              boxShadow: "0 0 12px rgba(139,92,246,0.5)",
            }}
          />

          <div className="flex flex-col gap-14">
            {papers.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.12}>
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.12 + 0.2 }}
                    className="glass absolute -left-10 top-1 flex h-[18px] w-[18px] items-center justify-center rounded-full sm:-left-16"
                    style={{
                      boxShadow: "0 0 0 4px #050816, 0 0 20px rgba(139,92,246,0.6)",
                    }}
                  >
                    <span className="h-2 w-2 rounded-full bg-gradient-to-br from-[var(--color-purple)] to-[var(--color-cyan)]" />
                  </motion.div>

                  <div className="glass card-shine rounded-3xl p-7 sm:p-8">
                    <div className="mb-4 flex flex-wrap items-center gap-3">
                      <span className="rounded-full border border-[var(--color-border)] bg-white/5 px-3 py-1 font-mono text-[11px] font-semibold text-[var(--color-purple)]">
                        {p.venue}
                      </span>
                      <span className="font-mono text-[11.5px] text-[var(--color-text-muted)]">
                        {p.location} · {p.date}
                      </span>
                      <span className="ml-auto rounded-full bg-emerald-400/10 px-3 py-1 font-mono text-[10.5px] font-medium text-emerald-400">
                        {p.status}
                      </span>
                    </div>

                    <h3 className="mb-3 font-display text-xl font-semibold sm:text-2xl">
                      {p.title}
                    </h3>
                    <p className="mb-5 max-w-[68ch] text-[14.5px] leading-relaxed text-[var(--color-text-muted)]">
                      {p.description}
                    </p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-[var(--color-border)] px-3 py-1 font-mono text-[11px] text-[var(--color-cyan)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="mb-5 flex flex-wrap gap-3">
                      {p.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="rounded-lg border border-[var(--color-border)] bg-white/[0.03] px-3 py-2 font-mono text-[12px] text-[var(--color-text)]"
                        >
                          <span className="text-[var(--color-text-muted)]">
                            {m.label} —{" "}
                          </span>
                          {m.value}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <span className="text-[13px] italic text-[var(--color-text-muted)]">
                        {p.authors}
                      </span>
                      <a
                        href={p.paperUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 font-mono text-[12px] font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-purple)]/60 hover:text-[var(--color-purple)]"
                      >
                        <FileText size={13} />
                        Read Paper
                      </a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
