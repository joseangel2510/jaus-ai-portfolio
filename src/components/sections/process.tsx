import { SectionEyebrow } from "@/components/section-eyebrow";

const STEPS = [
  {
    num: "01",
    title: "Diagnóstico",
    body: "Llamada de 30 min. Mapeamos tu operación, identificamos puntos de fuga y validamos si la IA realmente te conviene (a veces no, y te lo digo).",
    tag: "30 min · sin costo",
  },
  {
    num: "02",
    title: "Arquitectura",
    body: "Diseño el sistema completo: flujos, integraciones, lógica de fallback, manejo de errores. Te entrego un blueprint técnico antes de tocar una sola línea.",
    tag: "Blueprint técnico",
  },
  {
    num: "03",
    title: "Build",
    body: "Construyo, conecto y pruebo cada componente. Tú ves el avance en tiempo real. Iteramos hasta que el sistema responde como debe.",
    tag: "Iteración semanal",
  },
  {
    num: "04",
    title: "Deploy + Monitoreo",
    body: "Lanzamiento controlado, dashboards de métricas y soporte continuo. Si algo se rompe, lo arreglo antes de que lo notes.",
    tag: "Soporte continuo",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative border-t border-line/40 py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionEyebrow index="04" label="Cómo trabajo" />

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="reveal max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink md:text-5xl lg:text-6xl">
            De idea a sistema en producción.
            <br />
            <span className="text-accent">4 fases.</span>{" "}
            <span className="text-ink-3">Sin sorpresas.</span>
          </h2>
          <p className="reveal max-w-md text-base leading-relaxed text-ink-2">
            Cada fase tiene entregables claros y un punto de aprobación. Si en
            algún momento ya no tiene sentido seguir, paramos.
          </p>
        </div>

        {/* Timeline */}
        <div className="reveal-stagger relative mt-16 grid gap-6 md:grid-cols-4">
          {/* Connecting line on desktop */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-0 right-0 top-[3.25rem] hidden h-px bg-gradient-to-r from-line via-accent/40 to-line md:block"
          />

          {STEPS.map((step, i) => (
            <div key={step.num} className="relative flex flex-col">
              {/* Number marker */}
              <div className="relative z-10 mb-6 flex items-center justify-between">
                <div className="relative flex h-[5.5rem] w-[5.5rem] items-center justify-center rounded-full border border-accent/30 bg-base/80 backdrop-blur">
                  {/* Inner ring */}
                  <span
                    aria-hidden
                    className="absolute inset-2 rounded-full border border-line"
                  />
                  <span className="font-display text-2xl font-semibold tracking-tight text-accent">
                    {step.num}
                  </span>
                  {/* Pulse */}
                  {i === 0 && (
                    <span
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full"
                      style={{
                        boxShadow: "0 0 60px 0 rgba(0, 229, 195, 0.3)",
                      }}
                    />
                  )}
                </div>
                <span className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-3">
                  PHASE {step.num}
                </span>
              </div>

              {/* Card */}
              <div className="flex grow flex-col gap-3 rounded-2xl border border-line bg-surface/40 p-6 backdrop-blur transition-colors hover:border-accent/30">
                <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-2">
                  {step.body}
                </p>
                <div className="mt-auto pt-4">
                  <span className="inline-flex items-center gap-2 rounded-md border border-line bg-base/60 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-accent-dim">
                    <span className="h-1 w-1 rounded-full bg-accent" />
                    {step.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
