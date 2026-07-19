"use client";

import { motion } from "framer-motion";
import {
  BrainCircuit,
  Glasses,
  Layers,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { whatIDo } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  "brain-circuit": BrainCircuit,
  glasses: Glasses,
  layers: Layers,
  "flask-conical": FlaskConical,
};

export default function WhatIDo() {
  return (
    <section id="about" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="mx-auto mb-16 max-w-xl text-center">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-cyan)]">
              What I Do
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Four disciplines, one habit of building things end-to-end.
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whatIDo.map((d, i) => {
            const Icon = iconMap[d.icon];
            return (
              <Reveal key={d.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="glass card-shine group relative h-full overflow-hidden rounded-3xl p-7"
                >
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-60"
                    style={{
                      background: `linear-gradient(135deg, ${d.gradient[0]}, ${d.gradient[1]})`,
                    }}
                  />
                  <div
                    className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${d.gradient[0]}, ${d.gradient[1]})`,
                    }}
                  >
                    {Icon && <Icon size={22} />}
                  </div>
                  <h3 className="mb-2 font-display text-lg font-semibold">
                    {d.title}
                  </h3>
                  <p className="text-[13.5px] leading-relaxed text-[var(--color-text-muted)]">
                    {d.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
