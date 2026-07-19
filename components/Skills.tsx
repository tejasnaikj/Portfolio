"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  BrainCircuit,
  Glasses,
  Database,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { skillCategories } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  "code-2": Code2,
  globe: Globe,
  "brain-circuit": BrainCircuit,
  glasses: Glasses,
  database: Database,
  wrench: Wrench,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="mb-16 max-w-xl">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-cyan)]">
              Skills
            </div>
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              The stack, honestly
            </h2>
            <p className="text-[15px] text-[var(--color-text-muted)]">
              No padding — this is what I&apos;ve actually built with.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, ci) => {
            const Icon = iconMap[cat.icon];
            return (
              <Reveal key={cat.key} delay={ci * 0.06}>
                <div className="glass card-shine group h-full rounded-3xl p-6 transition-colors duration-300 hover:border-[var(--color-purple)]/40">
                  <div className="mb-5 flex items-center gap-3">
                    <div
                      className="flex h-10 w-10 items-center justify-center rounded-xl text-white"
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, var(--color-purple), var(--color-cyan))",
                      }}
                    >
                      {Icon && <Icon size={18} />}
                    </div>
                    <h3 className="font-display text-[15px] font-semibold">
                      {cat.label}
                    </h3>
                  </div>

                  <div className="flex flex-col gap-4">
                    {cat.skills.map((s, si) => (
                      <div key={s.name}>
                        <div className="mb-1.5 flex items-center justify-between font-mono text-[12px]">
                          <span className="text-[var(--color-text)]">{s.name}</span>
                          <span className="text-[var(--color-text-muted)]">
                            {s.level}%
                          </span>
                        </div>
                        <div className="h-[6px] w-full overflow-hidden rounded-full bg-white/[0.06]">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${s.level}%` }}
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{
                              duration: 1,
                              delay: si * 0.08,
                              ease: "easeOut",
                            }}
                            className="h-full rounded-full"
                            style={{
                              backgroundImage:
                                "linear-gradient(90deg, var(--color-purple), var(--color-blue), var(--color-cyan))",
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
