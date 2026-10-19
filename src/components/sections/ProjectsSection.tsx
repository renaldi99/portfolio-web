"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectsData } from "@/data/portfolioData";

export function ProjectsSection() {
  const [activeId, setActiveId] = useState<string>(projectsData[0].id);

  const activeProject =
    projectsData.find((p) => p.id === activeId) || projectsData[0];

  return (
    <section
      id="projects"
      className="relative py-24 lg:py-32 border-b border-[var(--border-line)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Editorial Section Heading */}
        <div className="mb-16">
          <span className="font-mono-code text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            02 / SELECTED WORKS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
            The work I do,{" "}
            <span className="font-editorial italic font-normal text-[var(--accent-indigo)]">
              and business I help.
            </span>
          </h2>
        </div>

        {/* Interactive Split Exhibition Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Interactive Index List (5 cols) */}
          <div className="lg:col-span-5 divide-y divide-[var(--border-line)] border-t border-b border-[var(--border-line)]">
            {projectsData.map((project, index) => {
              const isSelected = activeProject?.id === project.id;
              return (
                <button
                  key={project.id}
                  type="button"
                  onClick={() => setActiveId(project.id)}
                  onMouseEnter={() => setActiveId(project.id)}
                  className={`w-full text-left py-7 px-3 transition-all cursor-pointer flex items-baseline justify-between gap-4 ${
                    isSelected
                      ? "opacity-100"
                      : "opacity-45 hover:opacity-80"
                  }`}
                >
                  <div className="space-y-1.5">
                    <span className="font-mono-code text-[11px] text-[var(--text-muted)] block">
                      0{index + 1} / {project.category.toUpperCase()}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
                      {project.title}
                    </h3>
                  </div>

                  <ArrowUpRight
                    className={`h-5 w-5 shrink-0 transition-transform duration-200 ${
                      isSelected
                        ? "translate-x-0.5 -translate-y-0.5 text-[var(--text-primary)]"
                        : "text-[var(--text-muted)]"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Clean Case Study View (7 cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {activeProject && (
                <motion.div
                  key={activeProject.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.28 }}
                  className="space-y-6"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl border border-[var(--border-line)] bg-[var(--bg-subtle)]">
                    <Image
                      src={activeProject.image}
                      alt={activeProject.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 55vw"
                      className="object-cover object-top transition-transform duration-700 hover:scale-103"
                    />
                  </div>

                  <div className="space-y-4 pt-1">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                          {activeProject.title}
                        </h3>
                        <p className="text-xs font-mono-code text-[var(--text-muted)] mt-0.5">
                          {activeProject.tags.slice(0, 4).join(" • ")}
                        </p>
                      </div>

                      {activeProject.liveUrl &&
                        activeProject.liveUrl.startsWith("http") && (
                          <a
                            href={activeProject.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex items-center gap-1.5 rounded-full border border-[var(--border-line)] bg-[var(--bg-surface)] px-5 py-2.5 text-xs font-medium text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors"
                          >
                            <span>See Project</span>
                            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </a>
                        )}
                    </div>

                    <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed">
                      {activeProject.description}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
