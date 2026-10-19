"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { personalInfo } from "@/data/portfolioData";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 border-b border-[var(--border-line)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-12 items-center">
          {/* Left Editorial Statement (7 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            <p className="font-mono-code text-xs uppercase tracking-[0.22em] text-[var(--text-secondary)]">
              {personalInfo.heroTagline} — UI/UX &amp; Full-Stack Engineer
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-[72px] font-semibold tracking-tight leading-[1.03] text-[var(--text-primary)]">
              Create creative{" "}
              <span className="font-editorial italic font-normal text-[var(--accent-indigo)]">
                design
              </span>{" "}
              &amp;{" "}
              <span className="font-editorial italic font-normal underline decoration-[var(--border-strong)] decoration-1 underline-offset-8">
                writing
              </span>{" "}
              the code.
            </h1>

            <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-lg leading-relaxed">
              I help businesses solve problems and tell their story through minimalist interface design, scalable web architecture, and mobile applications.
            </p>

            {/* Minimal Actions */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a
                href={`mailto:${personalInfo.email}`}
                className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--text-primary)] px-7 py-3.5 text-sm font-medium text-[var(--bg-primary)] transition-opacity hover:opacity-90"
              >
                <span>Email Me</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#projects"
                className="group inline-flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] underline decoration-[var(--border-line)] underline-offset-8 hover:decoration-[var(--text-primary)] transition-colors"
              >
                <span>Explore Selected Works</span>
                <ArrowUpRight className="h-4 w-4 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </motion.div>

          {/* Right Clean Editorial Portrait (5 cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="mx-auto max-w-sm lg:max-w-none">
              <div className="group relative aspect-[4/4.6] w-full overflow-hidden rounded-2xl bg-[var(--bg-subtle)] border border-[var(--border-line)]">
                <Image
                  src="/assets/its-me.jpg"
                  alt="Renaldi Portrait"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
