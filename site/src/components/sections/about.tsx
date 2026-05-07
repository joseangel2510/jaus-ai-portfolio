import { SectionEyebrow } from "@/components/section-eyebrow";

const STACK_LIST = [
  "n8n (self-hosted)",
  "Retell AI / ElevenLabs",
  "WhatsApp Business API",
  "Airtable + Supabase",
  "Next.js / React",
  "Claude / GPT / Gemini",
];

const IDENTITY = [
  ["NAME", "José Á. Ulibarri"],
  ["ROLE", "AI Systems Engineer"],
  ["BASE", "Monterrey, MX"],
  ["STATUS", "● Available"],
  ["FOCUS", "Agents · Voice · Ops"],
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionEyebrow index="01" label="Quién opera esto" />

        <div className="mt-10 grid gap-12 md:grid-cols-12 md:gap-16">
          {/* LEFT — text */}
          <div className="md:col-span-7">
            <h2 className="reveal max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink md:text-5xl lg:text-6xl">
              No soy una agencia. Soy{" "}
              <span className="text-accent-glow">el ingeniero</span> que
              construye tu sistema.
            </h2>

            <div className="reveal-stagger mt-10 max-w-xl space-y-6 text-base leading-relaxed text-ink-2 md:text-lg">
              <p>
                Soy{" "}
                <span className="text-ink">José Ángel Ulibarri</span>. Ingeniero
                en Automática de formación, constructor de sistemas de IA por
                elección.
              </p>
              <p>
                Vengo del mundo del control y los procesos — donde si algo
                falla, falla en serio. Esa mentalidad la traje al diseño de
                agentes: cada flujo lo pienso como un sistema de producción, no
                como un prototipo bonito.
              </p>
              <p>
                Llevo años construyendo agentes de WhatsApp que atienden a las
                3am, sistemas de voz que suenan más naturales que un call
                center, y automatizaciones que eliminan semanas de trabajo
                manual. No hablo de IA — la pongo a trabajar.
              </p>
              <p>
                Si lo que buscas es alguien que te venda humo, no soy yo. Si
                buscas a alguien que te entregue un sistema funcionando y
                medible,{" "}
                <span className="text-accent">hablemos</span>.
              </p>
            </div>
          </div>

          {/* RIGHT — identity card */}
          <div className="reveal md:col-span-5">
            <div className="glass-card hud-corners relative overflow-hidden rounded-2xl">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-line bg-base/60 px-5 py-3 font-mono text-[0.65rem] uppercase tracking-widest text-ink-3">
                <span className="flex items-center gap-2">
                  <span className="status-dot" />
                  identity.json
                </span>
                <span className="text-accent-dim">readonly</span>
              </div>

              {/* Body */}
              <div className="p-6">
                {/* Identity grid */}
                <div className="space-y-3 font-mono text-[0.78rem]">
                  {IDENTITY.map(([key, value]) => (
                    <div
                      key={key}
                      className="flex items-baseline gap-4 border-b border-dashed border-line/60 pb-3 last:border-0"
                    >
                      <span className="w-20 text-ink-3">{key}</span>
                      <span className="text-ink">{value}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="mt-6 flex items-center gap-3">
                  <span className="h-px flex-1 bg-line" />
                  <span className="font-mono text-[0.65rem] uppercase tracking-widest text-accent-dim">
                    core stack
                  </span>
                  <span className="h-px flex-1 bg-line" />
                </div>

                {/* Stack list */}
                <ul className="mt-5 space-y-2.5 font-mono text-[0.78rem]">
                  {STACK_LIST.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-ink-2"
                    >
                      <span className="text-accent-dim">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom signature */}
                <div className="mt-7 flex items-center justify-between border-t border-line pt-4 font-mono text-[0.65rem] uppercase tracking-widest text-ink-3">
                  <span>v.2026.05</span>
                  <span className="inline-flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(0,229,195,0.8)]" />
                    SHIPPING
                  </span>
                </div>
              </div>

              {/* Decorative outer glow */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 -z-10 rounded-2xl opacity-60"
                style={{
                  background:
                    "radial-gradient(closest-side at 80% 20%, rgba(0, 229, 195, 0.18), transparent 70%)",
                }}
              />
            </div>

            {/* Small caption beneath the card */}
            <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-widest text-ink-3">
              <span className="text-accent">▸</span> Operador único · Sin
              intermediarios
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
