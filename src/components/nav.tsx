"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { contact } from "@/lib/contact";
import { cn } from "@/lib/utils";

const links = [
  { href: "#servicios", label: "servicios" },
  { href: "#stack", label: "stack" },
  { href: "#proyectos", label: "proyectos" },
  { href: "#proceso", label: "proceso" },
  { href: "#contacto", label: "contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-line/60 bg-base/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:px-10">
        {/* Logo */}
        <a
          href="#top"
          className="group inline-flex items-center gap-2 font-mono text-sm tracking-[0.18em]"
        >
          <span className="text-accent">[</span>
          <span className="text-ink transition-colors group-hover:text-accent">
            ULÍA
          </span>
          <span className="text-accent">]</span>
        </a>

        {/* Desktop links */}
        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[0.78rem] tracking-wide text-ink-2 transition-colors hover:text-ink"
            >
              <span className="text-accent-dim">·</span> {l.label}
            </a>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="hidden items-center gap-4 md:flex">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-ink-2 backdrop-blur">
            <span className="status-dot" />
            Disponible
          </span>
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-accent/60 bg-accent/10 px-4 py-2 font-mono text-[0.78rem] uppercase tracking-wider text-accent transition-all hover:border-accent hover:bg-accent hover:text-base"
          >
            <span>Hablar conmigo</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink-2 transition-colors hover:border-accent/40 hover:text-accent md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      <div
        className={cn(
          "md:hidden",
          "fixed inset-x-0 top-16 z-40 border-b border-line bg-base/95 backdrop-blur-xl transition-all duration-500",
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0",
        )}
      >
        <nav className="flex flex-col gap-1 px-6 py-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-lg px-3 py-3 font-mono text-sm text-ink-2 transition-colors hover:bg-surface hover:text-ink"
            >
              <span className="text-accent-dim">·</span>
              {l.label}
            </a>
          ))}
          <div className="mt-4 flex flex-col gap-3 border-t border-line pt-4">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-[0.7rem] uppercase tracking-wider text-ink-2">
              <span className="status-dot" />
              Disponible · Q1 2026
            </span>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-4 py-3 font-mono text-sm uppercase tracking-wider text-base"
            >
              Hablar conmigo
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
