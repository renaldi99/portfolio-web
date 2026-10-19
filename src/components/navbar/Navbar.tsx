"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ArrowUpRight } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";
import { personalInfo } from "@/data/portfolioData";

const navItems = [
  { label: "Index", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#projects" },
  { label: "Stack", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "projects", "skills", "contact"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 260) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6">
      <div className="mx-auto max-w-6xl">
        <nav
          className={`flex items-center justify-between rounded-full border border-[var(--border-line)] bg-[var(--bg-surface)]/90 backdrop-blur-md transition-all duration-300 ${
            scrolled ? "px-5 py-2.5 shadow-sm" : "px-6 py-3.5"
          }`}
        >
          {/* Minimal Editorial Brand */}
          <a
            href="#home"
            className="group flex items-center text-lg font-bold tracking-tight"
          >
            <span className="tracking-tight text-[var(--text-primary)]">
              Renaldi<span className="text-[var(--accent-indigo)]">.</span>
            </span>
          </a>

          {/* Center Navigation Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace("#", "");
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`relative inline-flex items-center px-3.5 py-1.5 text-xs font-medium tracking-wide transition-colors duration-200 rounded-full ${
                      isActive
                        ? "text-[var(--bg-primary)] font-semibold"
                        : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="minimalNavPill"
                        className="absolute inset-0 rounded-full bg-[var(--text-primary)]"
                        transition={{ type: "spring", bounce: 0.15, duration: 0.45 }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-line)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:border-[var(--text-primary)] transition-colors cursor-pointer"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>

            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 rounded-full bg-[var(--text-primary)] px-4 py-2 text-xs font-semibold text-[var(--bg-primary)] transition-transform duration-200 hover:scale-[1.02]"
            >
              <span>Let’s Talk</span>
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-line)] bg-[var(--bg-subtle)] text-[var(--text-primary)]"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-line)] bg-[var(--bg-subtle)] text-[var(--text-primary)]"
            >
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="md:hidden mt-2 rounded-3xl border border-[var(--border-line)] bg-[var(--bg-surface)] p-5 shadow-xl"
            >
              <div className="flex flex-col gap-1">
                {navItems.map((item, idx) => {
                  const isActive = activeSection === item.href.replace("#", "");
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold"
                          : "text-[var(--text-primary)] hover:bg-[var(--bg-subtle)]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <span
                        className={`font-mono-code text-[11px] ${
                          isActive ? "text-[var(--bg-primary)]/80" : "text-[var(--text-muted)]"
                        }`}
                      >
                        0{idx + 1}
                      </span>
                    </a>
                  );
                })}
                <div className="mt-3 pt-3 border-t border-[var(--border-line)]">
                  <a
                    href={personalInfo.whatsappUrl}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 rounded-full bg-[var(--text-primary)] py-3 text-xs font-semibold text-[var(--bg-primary)]"
                  >
                    <span>Start a Project</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
