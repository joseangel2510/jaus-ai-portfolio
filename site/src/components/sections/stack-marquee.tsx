"use client";

const STACK = [
  "n8n",
  "WhatsApp Business API",
  "Retell AI",
  "Claude",
  "ManyChat",
  "Airtable",
  "Next.js",
  "Supabase",
  "ElevenLabs",
  "Make",
  "Vercel",
  "React",
  "GPT",
  "Gemini",
  "Resend",
];

function Strip() {
  return (
    <div className="flex shrink-0 items-center gap-10 px-5">
      {STACK.map((s, i) => (
        <span
          key={`${s}-${i}`}
          className="group inline-flex items-center gap-10 font-mono text-sm uppercase tracking-[0.18em] text-ink-3 transition-colors hover:text-accent"
        >
          <span>{s}</span>
          <span className="text-accent-dim">·</span>
        </span>
      ))}
    </div>
  );
}

export function StackMarquee() {
  return (
    <section
      id="stack"
      aria-label="Stack tecnológico"
      className="relative overflow-hidden border-y border-line/60 bg-base/40 py-7"
    >
      {/* edge fade masks */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-base to-transparent"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-base to-transparent"
      />

      <div
        className="flex w-max animate-[drift_60s_linear_infinite] items-center hover:[animation-play-state:paused]"
        style={{ willChange: "transform" }}
      >
        <Strip />
        <Strip />
      </div>
    </section>
  );
}
