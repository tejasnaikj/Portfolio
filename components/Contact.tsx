"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";
import Reveal from "./Reveal";
import { profile } from "@/lib/data";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
    setTimeout(() => setStatus("idle"), 3500);
  }

  const contactItems = [
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: "LinkedIn", value: "Connect on LinkedIn", href: profile.linkedin },
    { icon: Github, label: "GitHub", value: "See my code", href: profile.github },
    { icon: MapPin, label: "Location", value: profile.location, href: undefined },
  ];

  return (
    <section id="contact" className="relative py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <Reveal>
          <div className="mx-auto mb-16 max-w-xl text-center">
            <div className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-cyan)]">
              Get In Touch
            </div>
            <h2 className="mb-4 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s talk about the role, or the RAG pipeline.
            </h2>
            <p className="text-[15px] text-[var(--color-text-muted)]">
              Open to full-time SWE and ML/AI roles — 2026 grad.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="glass-strong flex h-full flex-col gap-4 rounded-3xl p-7">
              {contactItems.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href?.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`glass card-shine flex items-center gap-4 rounded-2xl p-4 transition-colors duration-300 ${
                    c.href ? "hover:border-[var(--color-purple)]/50" : "cursor-default"
                  }`}
                >
                  <div
                    className="flex h-10 w-10 flex-none items-center justify-center rounded-xl text-white"
                    style={{
                      backgroundImage:
                        "linear-gradient(135deg, var(--color-purple), var(--color-cyan))",
                    }}
                  >
                    <c.icon size={17} />
                  </div>
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                      {c.label}
                    </div>
                    <div className="text-[14px] font-medium text-[var(--color-text)]">
                      {c.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={handleSubmit}
              className="glass-strong flex h-full flex-col gap-5 rounded-3xl p-7 sm:p-8"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                    Name
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl border border-[var(--color-border)] bg-white/[0.04] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-purple)]/60"
                  />
                </div>
                <div>
                  <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                    Email
                  </label>
                  <input
                    required
                    type="email"
                    placeholder="you@company.com"
                    className="w-full rounded-xl border border-[var(--color-border)] bg-white/[0.04] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-purple)]/60"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full rounded-xl border border-[var(--color-border)] bg-white/[0.04] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-purple)]/60"
                />
              </div>

              <div>
                <label className="mb-2 block font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me a bit about the role or project..."
                  className="w-full resize-none rounded-xl border border-[var(--color-border)] bg-white/[0.04] px-4 py-3 text-sm text-[var(--color-text)] placeholder:text-[var(--color-text-muted)] outline-none transition-colors focus:border-[var(--color-purple)]/60"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.015, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="mt-1 flex items-center justify-center gap-2 rounded-full py-3.5 font-body text-sm font-semibold text-white shadow-[0_10px_30px_-10px_rgba(139,92,246,0.7)]"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, var(--color-purple), var(--color-blue), var(--color-cyan))",
                }}
              >
                <Send size={15} />
                {status === "sent" ? "Message sent!" : "Send Message"}
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
