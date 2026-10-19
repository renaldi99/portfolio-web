"use client";

import React from "react";
import { motion } from "framer-motion";
import { Download, ArrowUpRight } from "lucide-react";
import { personalInfo, servicesData } from "@/data/portfolioData";

export function AboutBento() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 border-b border-[var(--border-line)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
          <div className="lg:col-span-4">
            <span className="font-mono-code text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              01 / ABOUT
            </span>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.14] text-[var(--text-primary)]">
              I’m a{" "}
              <span className="font-editorial italic font-normal text-[var(--accent-indigo)]">
                developer
              </span>{" "}
              who bridges thoughtful UI design with scalable engineering.
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
              <p>{personalInfo.aboutParagraph1}</p>
              <p>{personalInfo.aboutParagraph2}</p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-6">
              <a
                href={`mailto:${personalInfo.email}?subject=Request%20Curriculum%20Vitae%20-%20Renaldi`}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--text-primary)] px-6 py-3 text-xs sm:text-sm font-medium text-[var(--bg-primary)] hover:opacity-90 transition-opacity"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </a>

              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-[var(--text-primary)] underline decoration-[var(--border-line)] underline-offset-8 hover:decoration-[var(--text-primary)] transition-colors"
              >
                <span>Hire Me for a Project</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Minimal 3-Column Capabilities Strip */}
        <div
          id="services"
          className="pt-14 border-t border-[var(--border-line)] grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="space-y-3"
            >
              <span className="font-mono-code text-xs text-[var(--text-muted)]">
                0{idx + 1}
              </span>
              <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                {service.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
