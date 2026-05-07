import { ArrowUpRight, Clock, Globe2 } from "lucide-react";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { LinkedInIcon, WhatsAppIcon } from "@/components/brand-icons";
import { contact } from "@/lib/contact";

export function Contact() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden border-t border-line/40 py-24 md:py-36"
    >
      {/* Big radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0, 229, 195, 0.18), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        <SectionEyebrow index="05" label="Siguiente paso" />

        <h2 className="reveal mt-10 max-w-4xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] text-ink md:text-6xl lg:text-[5.5rem]">
          ¿Listo para que tu negocio
          <br />
          <span className="text-accent-glow">trabaje mientras duermes?</span>
        </h2>

        <p className="reveal mt-8 max-w-2xl text-base leading-relaxed text-ink-2 md:text-lg">
          Cuéntame qué quieres automatizar. Te respondo en menos de 2 horas con
          una propuesta concreta — sin formularios kilométricos, sin
          "agendemos un discovery call de 45 min para hablar del clima".
        </p>

        {/* CTA cards */}
        <div className="reveal-stagger mt-14 grid gap-5 lg:grid-cols-3">
          {/* Primary — WhatsApp (spans 2) */}
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between gap-8 overflow-hidden rounded-3xl border border-accent/40 bg-gradient-to-br from-accent/[0.12] via-surface/50 to-base/40 p-8 backdrop-blur transition-all hover:border-accent/70 lg:col-span-2 lg:p-10"
            data-cursor="hover"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl transition-opacity duration-500 group-hover:opacity-150"
            />

            <div className="relative flex items-start justify-between gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-accent">
                <span className="status-dot" />
                Lo más rápido · respuesta &lt; 2h
              </span>
              <span className="rounded-full border border-line bg-base/60 p-3 transition-all group-hover:border-accent/60 group-hover:bg-accent group-hover:text-base">
                <WhatsAppIcon className="h-5 w-5 text-accent transition-colors group-hover:text-base" />
              </span>
            </div>

            <div className="relative">
              <p className="font-mono text-[0.7rem] uppercase tracking-widest text-accent-dim">
                // Canal primario
              </p>
              <p className="mt-3 font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-ink md:text-5xl">
                Escríbeme por <br />
                <span className="text-accent">WhatsApp</span>
              </p>
              <p className="mt-4 font-mono text-sm uppercase tracking-wider text-ink-2">
                {contact.whatsappDisplay}
              </p>
            </div>

            <div className="relative flex items-center justify-between border-t border-line/60 pt-5 font-mono text-[0.7rem] uppercase tracking-wider text-ink-3">
              <span className="flex items-center gap-2">
                <Globe2 className="h-3.5 w-3.5 text-accent-dim" />
                Monterrey, MX · GMT−6
              </span>
              <span className="flex items-center gap-1.5 text-accent transition-transform group-hover:translate-x-1">
                Iniciar conversación
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </a>

          {/* Secondary — LinkedIn */}
          <a
            href={contact.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-3xl border border-line bg-surface/40 p-8 backdrop-blur transition-all hover:border-accent/40 hover:bg-surface/60"
            data-cursor="hover"
          >
            <div className="flex items-start justify-between gap-4">
              <span className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-3">
                // Para conectar
              </span>
              <span className="rounded-full border border-line bg-base/60 p-3 transition-colors group-hover:border-accent/40 group-hover:text-accent">
                <LinkedInIcon className="h-5 w-5 text-ink-2 transition-colors group-hover:text-accent" />
              </span>
            </div>

            <div>
              <p className="font-display text-3xl font-semibold leading-tight tracking-[-0.03em] text-ink">
                LinkedIn
              </p>
              <p className="mt-3 max-w-xs text-sm text-ink-2">
                Para propuestas formales, networking o referirme a alguien.
              </p>
            </div>

            <div className="flex items-center justify-between border-t border-line/60 pt-5 font-mono text-[0.7rem] uppercase tracking-wider text-ink-3">
              <span>/in/joseangelus</span>
              <ArrowUpRight className="h-4 w-4 text-accent-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </div>
          </a>
        </div>

        {/* Status footer */}
        <div className="reveal mt-12 flex flex-col items-start justify-between gap-4 rounded-2xl border border-line bg-surface/40 px-6 py-5 backdrop-blur md:flex-row md:items-center">
          <div className="flex items-center gap-3 font-mono text-[0.75rem] uppercase tracking-widest text-ink-2">
            <span className="status-dot" />
            Tomando proyectos para Q1 2026 · 2 cupos disponibles
          </div>
          <div className="flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-widest text-ink-3">
            <Clock className="h-3.5 w-3.5 text-accent-dim" />
            Respuesta promedio &lt; 2h en horario laboral
          </div>
        </div>
      </div>
    </section>
  );
}
