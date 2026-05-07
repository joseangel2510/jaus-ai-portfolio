import { ArrowUpRight } from "lucide-react";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { contact } from "@/lib/contact";
import { cn } from "@/lib/utils";

type Service = {
  id: string;
  tag: string;
  title: string;
  description: string;
  stack: string[];
  visual: "chat" | "voice" | "flow" | "table" | "browser" | "matrix";
  flagship?: boolean;
  metrics?: string[];
};

const SERVICES: Service[] = [
  {
    id: "01",
    tag: "SERVICE 01",
    title: "Agentes de WhatsApp",
    description:
      "Recepcionistas virtuales que califican leads, agendan citas, responden FAQs y escalan al humano solo cuando hace falta. Operan 24/7 sin perder un solo mensaje.",
    stack: ["WhatsApp API", "ManyChat", "n8n", "Claude"],
    visual: "chat",
  },
  {
    id: "02",
    tag: "SERVICE 02",
    title: "Agentes de Voz IA",
    description:
      "Contestan llamadas en español natural, agendan / cancelan citas, resuelven dudas y transfieren con contexto completo. Indistinguibles de un humano bien entrenado.",
    stack: ["Retell AI", "ElevenLabs", "n8n", "Airtable"],
    visual: "voice",
  },
  {
    id: "03",
    tag: "SERVICE 03",
    title: "Automatización Operativa",
    description:
      "Elimino el trabajo repetitivo: seguimientos, reportes, sync entre herramientas, notificaciones, scoring de leads. Lo que hoy te toma horas, pasa a ser automático.",
    stack: ["n8n", "Make", "Airtable", "Webhooks"],
    visual: "flow",
  },
  {
    id: "04",
    tag: "SERVICE 04",
    title: "CRM Inteligente",
    description:
      "Construyo CRMs en Airtable con automatizaciones de captura, segmentación y nurturing por email. Tus leads dejan de morir en una hoja de Excel.",
    stack: ["Airtable", "Resend", "n8n", "Forms API"],
    visual: "table",
  },
  {
    id: "05",
    tag: "SERVICE 05",
    title: "Web + IA Integrada",
    description:
      "Sitios rápidos, modernos y con chat IA conectado a tu CRM y WhatsApp. Cada formulario es un disparador de automatización.",
    stack: ["Next.js", "React", "Tailwind", "Vercel"],
    visual: "browser",
  },
  {
    id: "06",
    tag: "FLAGSHIP",
    title: "Suite IA para Clínicas",
    description:
      "El paquete completo: agente WhatsApp + agente de voz + Instagram DMs + CRM Airtable + recordatorios automáticos. Todo conectado, todo midiéndose, todo escalando contigo.",
    stack: ["Full Stack", "End-to-End", "24/7"],
    visual: "matrix",
    flagship: true,
    metrics: ["−80% llamadas perdidas", "+40% confirmación de citas"],
  },
];

function VisualChat() {
  return (
    <div className="flex flex-col gap-2 font-mono text-[0.7rem]">
      <div className="self-start max-w-[80%] rounded-2xl rounded-bl-sm border border-line bg-base/70 px-3 py-2 text-ink-2">
        Hola 👋 ¿hay disponibilidad para mañana?
      </div>
      <div className="self-end max-w-[80%] rounded-2xl rounded-br-sm bg-accent/15 px-3 py-2 text-accent">
        Sí, tengo 11:00 y 16:30. ¿Cuál prefieres?
      </div>
      <div className="self-start max-w-[60%] rounded-2xl rounded-bl-sm border border-line bg-base/70 px-3 py-2 text-ink-2">
        16:30 perfecto.
      </div>
    </div>
  );
}

function VisualVoice() {
  return (
    <div className="flex h-20 items-center gap-1">
      {Array.from({ length: 38 }).map((_, i) => {
        const h = 20 + Math.abs(Math.sin(i * 0.55) * 60);
        return (
          <span
            key={i}
            className="w-[3px] rounded-full bg-accent/70"
            style={{
              height: `${h}%`,
              opacity: 0.4 + (i % 5) * 0.12,
            }}
          />
        );
      })}
    </div>
  );
}

function VisualFlow() {
  return (
    <svg viewBox="0 0 200 100" className="h-24 w-full">
      <defs>
        <linearGradient id="flow-grad" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#00E5C3" stopOpacity="0.0" />
          <stop offset="50%" stopColor="#00E5C3" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#00E5C3" stopOpacity="0.0" />
        </linearGradient>
      </defs>
      <path
        d="M 10 50 C 60 10, 80 90, 130 50 S 180 10, 200 50"
        stroke="url(#flow-grad)"
        strokeWidth="1.5"
        fill="none"
      />
      {[
        [10, 50],
        [70, 30],
        [130, 70],
        [190, 35],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="4"
          fill="#0A0D12"
          stroke="#00E5C3"
          strokeWidth="1"
        />
      ))}
    </svg>
  );
}

function VisualTable() {
  return (
    <div className="grid gap-1 font-mono text-[0.65rem] text-ink-3">
      {["LEAD #2491", "LEAD #2492", "LEAD #2493"].map((row, i) => (
        <div
          key={row}
          className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded border border-line bg-base/60 px-2 py-1.5"
        >
          <span className="text-accent-dim">{row}</span>
          <span className="h-1 rounded-full bg-line">
            <span
              className="block h-1 rounded-full bg-accent"
              style={{ width: `${50 + i * 18}%` }}
            />
          </span>
          <span className="text-accent">{50 + i * 18}%</span>
        </div>
      ))}
    </div>
  );
}

function VisualBrowser() {
  return (
    <div className="overflow-hidden rounded-md border border-line bg-base/70">
      <div className="flex items-center gap-1 border-b border-line bg-base px-2 py-1.5">
        <span className="h-2 w-2 rounded-full bg-danger/70" />
        <span className="h-2 w-2 rounded-full bg-warning/70" />
        <span className="h-2 w-2 rounded-full bg-accent/70" />
        <span className="ml-2 truncate font-mono text-[0.6rem] text-ink-3">
          ulia.agency
        </span>
      </div>
      <div className="grid grid-cols-3 gap-1 p-2">
        <div className="col-span-2 h-8 rounded bg-line/50" />
        <div className="h-8 rounded bg-accent/30" />
        <div className="col-span-3 h-3 rounded bg-line/40" />
        <div className="col-span-2 h-3 rounded bg-line/40" />
      </div>
    </div>
  );
}

function VisualMatrix() {
  return (
    <div className="grid grid-cols-3 gap-1 font-mono text-[0.55rem] uppercase tracking-widest text-accent-dim">
      {["wapp", "voice", "ig", "crm", "form", "rem", "logs", "sms", "n8n"].map(
        (t, i) => (
          <div
            key={t}
            className={cn(
              "rounded border px-2 py-2 text-center",
              i % 4 === 0
                ? "border-accent/50 bg-accent/10 text-accent"
                : "border-line bg-base/60 text-ink-3",
            )}
          >
            {t}
          </div>
        ),
      )}
    </div>
  );
}

const VISUALS: Record<Service["visual"], () => React.ReactElement> = {
  chat: VisualChat,
  voice: VisualVoice,
  flow: VisualFlow,
  table: VisualTable,
  browser: VisualBrowser,
  matrix: VisualMatrix,
};

function ServiceCard({ service }: { service: Service }) {
  const Visual = VISUALS[service.visual];
  return (
    <article
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border bg-surface/40 backdrop-blur transition-all duration-500",
        service.flagship
          ? "border-accent/40 bg-gradient-to-br from-accent/[0.08] via-surface/50 to-base/40 shadow-[0_30px_80px_-30px_rgba(0,229,195,0.35)] md:col-span-2"
          : "border-line hover:border-accent/30",
      )}
      data-cursor="hover"
    >
      {/* Animated edge highlight */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          service.flagship ? "opacity-100" : "",
        )}
        style={{
          background:
            "linear-gradient(180deg, rgba(0,229,195,0.08), transparent 60%)",
        }}
      />

      {/* Flagship badge */}
      {service.flagship && (
        <div className="absolute right-5 top-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-accent backdrop-blur">
          <span className="status-dot" />
          Más solicitado
        </div>
      )}

      {/* Top row: tag + visual */}
      <div className="flex items-start justify-between gap-4 border-b border-line/60 p-6">
        <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-accent-dim">
          [ {service.tag} ]
        </span>
      </div>

      {/* Mini visual */}
      <div className="px-6 py-7">
        <div className="flex h-24 items-center">
          <Visual />
        </div>
      </div>

      {/* Title + description */}
      <div className="flex grow flex-col gap-3 px-6">
        <h3 className="font-display text-2xl font-semibold leading-tight tracking-tight text-ink md:text-3xl">
          {service.title}
        </h3>
        <p className="text-sm leading-relaxed text-ink-2 md:text-base">
          {service.description}
        </p>
      </div>

      {/* Footer: stack + metrics */}
      <div className="mt-6 flex flex-col gap-4 border-t border-line/60 p-6">
        <div className="flex flex-wrap gap-1.5">
          {service.stack.map((s) => (
            <span
              key={s}
              className="rounded-md border border-line bg-base/60 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-ink-2"
            >
              {s}
            </span>
          ))}
        </div>
        {service.metrics && (
          <div className="flex flex-wrap gap-x-5 gap-y-2 font-mono text-[0.7rem] uppercase tracking-wider">
            {service.metrics.map((m) => (
              <span key={m} className="flex items-center gap-2 text-accent">
                <span className="h-1 w-1 rounded-full bg-accent" />
                {m}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section
      id="servicios"
      className="relative border-t border-line/40 py-24 md:py-36"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <SectionEyebrow index="02" label="Qué construyo" />

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2 className="reveal max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-[-0.03em] text-ink md:text-5xl lg:text-6xl">
            Sistemas de IA hechos a la medida.{" "}
            <span className="text-ink-3">No templates.</span>{" "}
            <span className="text-accent">No "soluciones genéricas".</span>
          </h2>
          <p className="reveal max-w-md text-base leading-relaxed text-ink-2">
            Cada sistema lo arquitecto desde cero según tu operación, tu
            volumen y tus puntos de fuga.
          </p>
        </div>

        <div className="reveal-stagger mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        {/* CTA strip */}
        <div className="reveal mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-line bg-surface/40 p-8 backdrop-blur md:flex-row md:items-center">
          <div>
            <p className="font-mono text-[0.7rem] uppercase tracking-widest text-accent-dim">
              ¿No sabes cuál te conviene?
            </p>
            <p className="mt-2 font-display text-2xl text-ink md:text-3xl">
              30 min · llamada de diagnóstico · sin costo.
            </p>
          </div>
          <a
            href={contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-full border border-accent/60 bg-accent/10 px-6 py-3 font-mono text-sm uppercase tracking-wider text-accent transition-all hover:border-accent hover:bg-accent hover:text-base"
          >
            Agendar diagnóstico
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
