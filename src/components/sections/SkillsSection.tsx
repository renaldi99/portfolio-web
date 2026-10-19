"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Smartphone, Wrench } from "lucide-react";
import { skillsData } from "@/data/portfolioData";

export function SkillsSection() {
  const cleanSkills = skillsData.filter((s) => s.name !== "Three.js / WebGL");

  return (
    <section
      id="skills"
      className="relative py-24 lg:py-32 border-b border-[var(--border-line)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-14">
          <div className="lg:col-span-4">
            <span className="font-mono-code text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
              03 / TECH STACK
            </span>
          </div>

          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
              Tools that I use for work,{" "}
              <span className="font-editorial italic font-normal text-[var(--accent-indigo)]">
                and skills I have.
              </span>
            </h2>
          </div>
        </div>

        {/* Ultra-Clean Minimalist Pill Grid */}
        <div className="flex flex-wrap gap-3">
          {cleanSkills.map((skill, idx) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.015 }}
              className="minimal-card rounded-full px-5 py-3 flex items-center gap-3"
            >
              <div className="flex h-6 w-6 items-center justify-center shrink-0">
                {skill.logo ? (
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={22}
                    height={22}
                    className="object-contain max-h-5 w-auto"
                  />
                ) : skill.category === "Frontend & 3D" ? (
                  <Cpu className="h-4 w-4 text-[var(--accent-indigo)]" />
                ) : skill.category === "Backend & Mobile" ? (
                  <Smartphone className="h-4 w-4 text-[var(--accent-emerald)]" />
                ) : (
                  <Wrench className="h-4 w-4 text-[var(--accent-amber)]" />
                )}
              </div>

              <span className="text-sm font-medium text-[var(--text-primary)]">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
