import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/components/section-eyebrow";

type Case = {
  num: string;
  industry: string;
  location?: string;
  tags: string[];
  title: string;
  description: string;
  metrics: string[];
  glyph: "M" | "C" | "A" | "V";
};

const CASES: Case[] = [
  {
    num: "01",
    industry: "Estética médica",
    location: "Valencia, España",
    tags: ["WhatsApp AI", "Instagram DMs", "Voice Agent", "Recordatorios"],
    title: "Clínica Maysoon · Suite IA Completa",
    description:
      "Agente de WhatsApp que agenda, reprograma y cancela citas, consulta disponibilidad e informa sobre tratamientos. Instagram DMs automatizados. Agente de voz para llamadas. Sistema de recordatorios integrado a Airtable.",
    metrics: ["24/7 disponible", "3 canales activos", "0 llamadas perdidas"],
    glyph: "M",
  },
  {
    num: "02",
    industry: "Odontología",
    tags: ["Email Automation", "CRM Airtable", "Lead Nurturing"],
    title: "Clínica CEID · CRM + secuencias de email",
    description:
      "Formularios web que captan leads directo a un CRM completo en Airtable. Sistema de email automation con 5 capas segmentadas según tipo de tratamiento.",
    metrics: ["5 capas de emails", "100% automatizado", "0 leads perdidos"],
    glyph: "C",
  },
  {
    num: "03",
    industry: "Centro deportivo",
    tags: ["Chatbot Web", "Telegram Bot", "Voice Agent", "Knowledge Base"],
    title: "Ayguajoc · Suite IA Interna",
    description:
      "Chatbot web público + agente de voz + bot de Telegram interno para el personal. Base de conocimiento con todos los procedimientos para onboarding y consulta diaria del equipo.",
    metrics: [
      "4 sistemas integrados",
      "Onboarding automático",
      "−60% preguntas repetidas",
    ],
    glyph: "A",
  },
  {
    num: "04",
    industry: "Asesoría migratoria · Visas inversionistas",
    tags: ["WhatsApp AI", "Instagram", "Lead Capture", "Calendar"],
    title: "American Dream Visa · Agentes de Captación",
    description:
      "Agentes de WhatsApp e Instagram que responden dudas de leads de anuncios, califican prospectos y agendan llamadas de consultoría sin intervención humana.",
    metrics: ["<2 min respuesta", "24/7 activo", "+3× conversión a llamada"],
    glyph: "V",
  },
];

const SITES = [
  { name: "Clínica Maysoon", url: "clinicamaysoon.vercel.app" },
  { name: "Creaitor", url: "creaitor-web.vercel.app" },
  { name: "IA Greg Consulting", url: "iagregconsulting.com" },
  { name: "Criminología Global", url: "criminologiaglobal.com" },
  { name: "American Dream Visas", url: "americandreamvisas.com" },
  { name: "Clínica MundoDent", url: "mundodent — dashboard WhatsApp" },
];

function CaseCard({ data }: { data: Case }) {
  return (
    <article
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface/40 backdrop-blur transition-all duration-500 hover:border-accent/30 hover:bg-surface/60"
      data-cursor="hover"
    >
      {/* Top illustration block */}
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line/60 bg-gradient-to-br from-base via-surface to-base">
        {/* Grid backdrop */}
        <div aria-hidden className="absolute inset-0 bg-grid-tight opacity-40" />
        {/* Glow */}
        <div
          aria-hidden
          className="absolute left-1/2 top-1/2 h-[140%] w-[140%] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            background:
              "radial-gradient(closest-side, rgba(0, 229, 195, 0.16), transparent 70%)",
          }}
        />
        {/* Big monogram */}
        <div className="relative flex h-full items-center justify-center">
          <div className="relative">
            <span
              aria-hidden
              className="absolute inset-0 -z-10 flex items-center justify-center font-display text-[10rem] font-bold leading-none text-accent/10 blur-md"
            >
              {data.glyph}
            </span>
            <span className="font-display text-[7rem] font-bold leading-none tracking-tight text-ink/10 transition-colors duration-700 group-hover:text-accent/30">
              {data.glyph}
            </span>
          </div>
        </div>
        {/* Corner brackets */}
        <span
          aria-hidden
          className="absolute left-3 top-3 h-4 w-4 border-l border-t border-accent/40"
        />
        <span
          aria-hidden
          className="absolute right-3 bottom-3 h-4 w-4 border-r border-b border-accent/40"
        />
        {/* Industry label top-left */}
        <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-line bg-base/70 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-widest text-ink-2 backdrop-blur">
          <span className="status-dot" />
          {data.industry}
        </div>
        {/* Case number bottom-right */}
        <div className="absolute right-4 top-4 font-mono text-[0.7rem] uppercase tracking-widest text-accent-dim">
          [ CASE {data.num} ]
        </div>
        {data.location && (
          <div className="absolute bottom-4 left-4 font-mono text-[0.65rem] uppercase tracking-widest text-ink-3">
            <span className="text-accent">▸</span> {data.location}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="flex grow flex-col gap-4 p-6">
        <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink md:text-[1.7rem]">
          {data.title}
        </h3>
        <p className="text-sm leading-relaxed text-ink-2 md:text-base">
          {data.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {data.tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-line bg-base/60 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-ink-2"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Metrics */}
        <div className="mt-2 flex flex-col divide-y divide-line/60 border-t border-line/60 pt-4 font-mono text-[0.7rem] uppercase tracking-wider sm:flex-row sm:items-center sm:divide-y-0 sm:divide-x sm:gap-0">
          {data.metrics.map((m) => (
            <span
              key={m}
              className="flex items-center gap-2 py-2 text-accent first:pt-0 sm:px-4 sm:py-0 sm:first:pl-0"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,229,195,0.8)]" />
              {m}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

export function Cases() {
  return (
    <section
      id="proyectos"
      className="relative border-t border-line/40 py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionEyebrow index="03" label="Sistemas en producción" />

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="reveal max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink md:text-5xl lg:text-6xl">
            Estos sistemas están{" "}
            <span className="text-accent-glow">corriendo ahora mismo</span>.
          </h2>
          <p className="reveal max-w-md text-base leading-relaxed text-ink-2">
            Cada uno fue diseñado, desplegado y mantenido por mí. Resultados
            reales, métricas reales.
          </p>
        </div>

        <div className="reveal-stagger mt-14 grid gap-6 lg:grid-cols-2">
          {CASES.map((c) => (
            <CaseCard key={c.num} data={c} />
          ))}
        </div>

        {/* Sites */}
        <div className="mt-20">
          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-accent-dim" />
            <span className="section-label">
              <span className="text-accent">[ ▸ ]</span>
              <span>// También hay sitios web en vivo</span>
            </span>
          </div>

          <div className="reveal-stagger mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {SITES.map((s) => (
              <a
                key={s.name}
                href={`https://${s.url.split(" — ")[0]}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 rounded-xl border border-line bg-surface/40 px-5 py-4 backdrop-blur transition-all hover:border-accent/40 hover:bg-surface/70"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-xs text-accent-dim">
                    /
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <span className="font-display text-base text-ink">
                      {s.name}
                    </span>
                    <span className="font-mono text-[0.7rem] text-ink-3">
                      {s.url}
                    </span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-accent-dim transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
