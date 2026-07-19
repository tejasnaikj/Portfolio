"use client";

import { FolderKanban, FileText, Cpu, Calendar, type LucideIcon } from "lucide-react";
import Reveal from "./Reveal";
import CountUp from "./CountUp";
import { stats } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  "folder-kanban": FolderKanban,
  "file-text": FileText,
  cpu: Cpu,
  calendar: Calendar,
};

export default function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {stats.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="glass card-shine rounded-3xl p-6 text-center transition-transform duration-300 hover:-translate-y-1">
                  <div
                    className="mx-auto mb-4 flex h-11 w-11 items-center justify-center rounded-2xl text-white"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, var(--color-purple), var(--color-cyan))",
                    }}
                  >
                    {Icon && <Icon size={19} />}
                  </div>
                  <div className="mb-1 font-display text-3xl font-bold tabular-nums sm:text-4xl">
                    <CountUp to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-[var(--color-text-muted)]">
                    {s.label}
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
