"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { profile } from "@/lib/data";
import MagneticButton from "./MagneticButton";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr]"
      >
        {/* LEFT */}
        <div className="glass-strong card-shine rounded-[28px] p-8 sm:p-10">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/5 px-3.5 py-1.5 font-mono text-[11.5px] uppercase tracking-[0.14em] text-[var(--color-cyan)]"
          >
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Hello, I&apos;m
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-3 font-display text-[42px] font-bold leading-[1.03] tracking-tight sm:text-[54px] lg:text-[64px]"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={item}
            className="mb-6 flex flex-wrap items-center gap-x-2 gap-y-1 font-display text-lg font-medium text-[var(--color-text-muted)] sm:text-xl"
          >
            {profile.roles.map((r, i) => (
              <span key={r} className="flex items-center gap-2">
                <span className="text-gradient">{r}</span>
                {i < profile.roles.length - 1 && (
                  <span className="text-[var(--color-border)]">/</span>
                )}
              </span>
            ))}
          </motion.div>

          <motion.p
            variants={item}
            className="mb-8 max-w-[52ch] text-[15.5px] leading-relaxed text-[var(--color-text-muted)]"
          >
            {profile.blurb}
          </motion.p>

          <motion.div variants={item} className="mb-8 flex flex-wrap gap-3">
            <MagneticButton href="#projects" variant="primary">
              View Projects
            </MagneticButton>
            <MagneticButton href={profile.resumeUrl} variant="ghost" download="Tejas_Naik_Resume.pdf">
              Download Resume
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              Contact
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="flex items-center gap-3">
            {[
              { icon: Github, href: profile.github, label: "GitHub" },
              { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
              { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={label}
                whileHover={{ y: -3, scale: 1.06 }}
                whileTap={{ scale: 0.94 }}
                className="glass flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-cyan)]"
              >
                <Icon size={17} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT */}
        <motion.div variants={item} className="relative mx-auto w-full max-w-[380px]">
          <div
            aria-hidden
            className="absolute -inset-16 -z-10 rounded-full opacity-70 blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(139,92,246,0.35), rgba(6,182,212,0.15) 60%, transparent 75%)",
            }}
          />

          {/* floating rings */}
          <motion.div
            className="ring-spin absolute -inset-4 rounded-full border border-dashed border-[var(--color-purple)]/30"
            aria-hidden
          />
          <div
            className="absolute -inset-8 rounded-full border border-[var(--color-cyan)]/15"
            aria-hidden
          />

          <div className="relative overflow-hidden rounded-[32px] border border-[var(--color-border)] bg-white/5 p-2 backdrop-blur-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[24px]">
              <Image
                src={profile.avatar}
                alt={`Portrait of ${profile.name}`}
                fill
                priority
                sizes="(max-width: 768px) 80vw, 380px"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050816cc] via-transparent to-[#8b5cf61a]" />
            </div>
          </div>

          {/* availability card */}
          {profile.available && (
            <motion.div
              className="float-y glass-strong absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2.5 rounded-full px-5 py-3 shadow-[0_10px_40px_-10px_rgba(139,92,246,0.5)]"
            >
              <span className="pulse-dot h-2 w-2 rounded-full bg-emerald-400" />
              <span className="whitespace-nowrap font-body text-[12.5px] font-medium text-[var(--color-text)]">
                Available for Opportunities
              </span>
            </motion.div>
          )}
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[var(--color-text-muted)]"
        aria-label="Scroll down"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
