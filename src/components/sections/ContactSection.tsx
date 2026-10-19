"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, Copy, Mail, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/BrandIcons";
import { personalInfo } from "@/data/portfolioData";

export function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="mb-10 flex items-center justify-between">
          <span className="font-mono-code text-xs uppercase tracking-[0.2em] text-[var(--text-muted)]">
            04 / CONTACT
          </span>
          <span className="font-mono-code text-xs text-[var(--text-muted)]">
            INDONESIA — WORLDWIDE
          </span>
        </div>

        {/* High-Contrast Creative Statement Card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="relative overflow-hidden rounded-[2rem] bg-[var(--text-primary)] text-[var(--bg-primary)] p-8 sm:p-12 lg:p-16"
        >
          {/* Subtle architectural grid lines inside dark canvas */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-[var(--bg-primary)]/10" />
          <div className="pointer-events-none absolute -right-8 -bottom-28 h-96 w-96 rounded-full border border-[var(--bg-primary)]/10" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8 space-y-6">
              <p className="font-mono-code text-xs uppercase tracking-[0.22em] opacity-60">
                START A CONVERSATION
              </p>

              <h2 className="text-4xl sm:text-6xl lg:text-[68px] font-semibold tracking-tight leading-[1.03]">
                Have an idea?{" "}
                <span className="font-editorial italic font-normal opacity-90 underline decoration-1 underline-offset-8">
                  Let’s build it
                </span>{" "}
                together.
              </h2>

              <p className="text-sm sm:text-base opacity-75 max-w-xl leading-relaxed">
                Let me know if you need a website, mobile application, or want to talk about business—reach out directly and let’s craft your digital story.
              </p>
            </div>

            {/* Direct CTA & Copy Email Pill */}
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-end gap-3">
              <a
                href={personalInfo.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[var(--bg-primary)] text-[var(--text-primary)] px-7 py-4 text-sm font-semibold transition-transform duration-200 hover:scale-[1.02]"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[var(--bg-primary)]/25 px-6 py-3.5 font-mono-code text-xs text-[var(--bg-primary)]/90 hover:border-[var(--bg-primary)] transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5" />
                    <span>EMAIL COPIED!</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>COPY {personalInfo.email.toUpperCase()}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </motion.div>

        {/* 3 Minimalist Tactile Channel Cards */}
        <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {/* Email Card */}
          <motion.a
            href={`mailto:${personalInfo.email}`}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="minimal-card group rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-8 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono-code text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                01 / EMAIL
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-line)] bg-[var(--bg-subtle)] text-[var(--text-primary)] group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors">
                <Mail className="h-4 w-4" />
              </span>
            </div>

            <div className="flex items-end justify-between gap-2">
              <div className="min-w-0">
                <p className="text-xs text-[var(--text-secondary)]">Drop an inquiry</p>
                <p className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] truncate mt-0.5">
                  {personalInfo.email}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>

          {/* WhatsApp Card */}
          <motion.a
            href={personalInfo.whatsappUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="minimal-card group rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-8 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono-code text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                02 / WHATSAPP
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-line)] bg-[var(--bg-subtle)] text-[var(--text-primary)] group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors">
                <MessageCircle className="h-4 w-4" />
              </span>
            </div>

            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-xs text-[var(--text-secondary)]">Fast direct response</p>
                <p className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mt-0.5">
                  +62 812-9962-7757
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>

          {/* Instagram Card */}
          <motion.a
            href={personalInfo.instagramUrl}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="minimal-card group rounded-3xl p-6 sm:p-7 flex flex-col justify-between gap-8 hover:-translate-y-1"
          >
            <div className="flex items-center justify-between">
              <span className="font-mono-code text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                03 / INSTAGRAM
              </span>
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-line)] bg-[var(--bg-subtle)] text-[var(--text-primary)] group-hover:bg-[var(--text-primary)] group-hover:text-[var(--bg-primary)] transition-colors">
                <InstagramIcon className="h-4 w-4" />
              </span>
            </div>

            <div className="flex items-end justify-between gap-2">
              <div>
                <p className="text-xs text-[var(--text-secondary)]">Connect &amp; follow</p>
                <p className="text-lg sm:text-xl font-semibold text-[var(--text-primary)] mt-0.5">
                  {personalInfo.instagramHandle}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-[var(--text-muted)] group-hover:text-[var(--text-primary)] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
