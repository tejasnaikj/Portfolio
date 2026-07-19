"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Microscope,
  FileText,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { experience } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  "graduation-cap": GraduationCap,
  microscope: Microscope,
  "file-text": FileText,
  rocket: Rocket,
};

const typeColor: Record<string, string> = {
  current: "var(--color-cyan)",
  research: "var(--color-purple)",
  publication: "var(--color-pink)",
  project: "var(--color-blue)",
};

export default function Experience() {
  return (
    <section id="experience" className="relative py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-10">
        <Reveal>
          <div className="mb-16 max-w-xl">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-cyan)]">
              Experience
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Where the fundamentals came from
            </h2>
          </div>
        </Reveal>

        <div className="relative pl-10 sm:pl-16">
          <div
            aria-hidden
            className="absolute left-[7px] top-2 bottom-2 w-px sm:left-[15px]"
            style={{
              background:
                "linear-gradient(180deg, var(--color-cyan), var(--color-purple), var(--color-pink))",
              boxShadow: "0 0 12px rgba(6,182,212,0.4)",
            }}
          />

          <div className="flex flex-col gap-8">
            {experience.map((e, i) => {
              const Icon = iconMap[e.icon];
              const color = typeColor[e.type] ?? "var(--color-purple)";
              return (
                <Reveal key={e.title} delay={i * 0.08}>
                  <div className="relative">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 + 0.15 }}
                      className="glass absolute -left-10 top-1 flex h-[30px] w-[30px] items-center justify-center rounded-full sm:-left-16"
                      style={{ boxShadow: `0 0 0 4px #050816, 0 0 16px ${color}80` }}
                    >
                      {Icon && <Icon size={14} color={color} />}
                    </motion.div>

                    <div className="glass card-shine flex flex-col gap-2 rounded-2xl p-6 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
                      <div>
                        <h3 className="mb-1 font-display text-[17px] font-semibold">
                          {e.title}
                        </h3>
                        <div className="text-sm text-[var(--color-text-muted)]">
                          {e.org}
                        </div>
                        <p className="mt-2 max-w-[60ch] text-[13.5px] leading-relaxed text-[var(--color-text-muted)]">
                          {e.description}
                        </p>
                      </div>
                      <span
                        className="whitespace-nowrap self-start rounded-full border px-3 py-1 font-mono text-[11px]"
                        style={{ borderColor: `${color}40`, color }}
                      >
                        {e.period}
                      </span>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
