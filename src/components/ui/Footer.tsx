"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-[var(--border-line)] bg-[var(--bg-primary)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[var(--text-muted)]">
        <p className="font-mono-code">
          © 2026 RENALDI. ALL RIGHTS RESERVED.
        </p>
        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 font-mono-code text-[11px] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="h-3 w-3" />
        </button>
      </div>
    </footer>
  );
}
