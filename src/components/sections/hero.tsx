"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { contact } from "@/lib/contact";
import { DecodeText } from "@/components/decode-text";
import { TerminalLog } from "@/components/terminal-log";
import { Magnetic } from "@/components/magnetic";

const STATS = [
  { value: "15+", label: "Sistemas en vivo" },
  { value: "24/7", label: "Uptime agentes" },
  { value: "4", label: "Países activos" },
  { value: "<2h", label: "Respuesta promedio" },
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 md:pt-36"
    >
      {/* Decorative side index lines */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-4 hidden w-px bg-gradient-to-b from-transparent via-line to-transparent md:block"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-4 hidden w-px bg-gradient-to-b from-transparent via-line to-transparent md:block"
      />

      <div className="relative mx-auto grid max-w-7xl items-start gap-14 px-6 pb-24 md:grid-cols-12 md:gap-10 md:px-10 md:pb-32 lg:gap-14">
        {/* LEFT — copy */}
        <div className="md:col-span-7">
          {/* Eyebrow */}
          <div className="enter-up enter-up-d1 flex items-center gap-3">
            <span className="h-px w-10 bg-accent-dim" />
            <span className="section-label !text-accent-dim">
              <span className="text-accent">[</span>
              <span className="font-mono">00</span>
              <span className="text-accent">]</span>
              <span>// AI Engineer · Monterrey, MX</span>
            </span>
          </div>

          {/* Headline with decode */}
          <h1 className="mt-7 font-display text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            <span className="block">
              <DecodeText text="Mientras lees esto," delayMs={150} />
            </span>
            <span className="block">
              mis{" "}
              <span className="relative inline-block">
                <span className="text-accent-glow">
                  <DecodeText
                    text="agentes"
                    delayMs={500}
                    durationMs={1100}
                    retriggerOnChange={false}
                  />
                </span>
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"
                />
              </span>{" "}
              están
            </span>
            <span className="block">
              <DecodeText text="cerrando citas." delayMs={750} />
            </span>
          </h1>

          {/* Subhead */}
          <p className="enter-up enter-up-d4 mt-7 max-w-xl text-base leading-relaxed text-ink-2 md:text-lg">
            Ingeniero en Automática construyendo agentes de IA, sistemas
            conversacionales y automatizaciones que trabajan 24/7 para clínicas
            y empresas. Cero humo, cero templates — código que produce
            resultados medibles desde el día uno.
          </p>

          {/* CTAs */}
          <div className="enter-up enter-up-d5 mt-9 flex flex-wrap items-center gap-3">
            <Magnetic strength={0.25}>
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-mono text-sm uppercase tracking-wider text-base shadow-[0_18px_50px_-15px_rgba(0,229,195,0.6)] transition-transform hover:scale-[1.02]"
              >
                Iniciar proyecto
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 rounded-full bg-accent/40 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                />
              </a>
            </Magnetic>
            <a
              href="#proyectos"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-6 py-3 font-mono text-sm uppercase tracking-wider text-ink-2 backdrop-blur transition-all hover:border-accent/50 hover:bg-surface hover:text-accent"
            >
              Ver sistemas en producción
              <ArrowUpRight className="h-4 w-4 text-accent-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </a>
          </div>

          {/* Stats bar */}
          <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-4">
            {STATS.map((s, i) => (
              <div
                key={s.label}
                className={`enter-up enter-up-d${4 + i} flex flex-col gap-1 bg-base/80 p-5 backdrop-blur transition-colors hover:bg-surface`}
              >
                <dt className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-ink-3">
                  // {s.label}
                </dt>
                <dd className="font-display text-3xl font-semibold tracking-tight text-ink md:text-4xl">
                  <span className="text-accent">[</span>
                  <span className="px-1">{s.value}</span>
                  <span className="text-accent">]</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* RIGHT — terminal */}
        <div className="enter-up enter-up-d3 md:col-span-5">
          <div className="relative">
            {/* HUD label */}
            <div className="mb-3 flex items-center justify-between font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink-3">
              <span className="flex items-center gap-2">
                <span className="status-dot" />
                live · prod · valencia
              </span>
              <span className="text-accent-dim">~/agents/maysoon</span>
            </div>
            <TerminalLog />
            {/* Floating accent corners */}
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-3xl border border-accent/10"
            />
            <div
              aria-hidden
              className="absolute -inset-6 -z-20 rounded-[2rem] border border-line/60"
            />
          </div>

          {/* Sub caption */}
          <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-widest text-ink-3">
            <span className="text-accent">▸</span> Agente real · datos
            simplificados para demo
          </p>
        </div>
      </div>

      {/* Bottom HUD ticker */}
      <div className="relative border-y border-line/60 bg-base/40 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-3 font-mono text-[0.7rem] uppercase tracking-widest text-ink-3 md:px-10">
          <span className="flex items-center gap-2">
            <span className="status-dot" />
            All systems operational
          </span>
          <span className="hidden text-ink-4 sm:inline">
            // Disponible Q1 2026 · 2 cupos
          </span>
          <span className="text-accent-dim">scroll ↓</span>
        </div>
      </div>
    </section>
  );
}
