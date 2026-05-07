"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type LogLine = {
  t: string;
  text: string;
  /** What follows the timestamp+text — usually a check */
  status?: "ok" | "info" | "warn";
};

const SCRIPT: LogLine[] = [
  { t: "09:42:11", text: "agent.maysoon.whatsapp", status: "info" },
  { t: "09:42:11", text: "Lead capturado → Airtable", status: "ok" },
  { t: "09:42:13", text: "Cita agendada → 14 oct 17:00", status: "ok" },
  { t: "09:43:07", text: "Confirmación enviada vía WhatsApp", status: "ok" },
  { t: "09:44:22", text: "Recordatorio programado: −24h", status: "info" },
  { t: "09:45:18", text: "Lead score actualizado: 8.4 / 10", status: "ok" },
  { t: "09:46:02", text: "Sync n8n → Supabase", status: "ok" },
  { t: "09:47:31", text: "Voice agent responde llamada #243", status: "info" },
  { t: "09:48:09", text: "Pregunta resuelta · sin escalación", status: "ok" },
];

const STATUS_COLOR: Record<NonNullable<LogLine["status"]>, string> = {
  ok: "text-accent",
  info: "text-ink-2",
  warn: "text-warning",
};

const STATUS_GLYPH: Record<NonNullable<LogLine["status"]>, string> = {
  ok: "✓",
  info: "›",
  warn: "!",
};

export function TerminalLog({ className }: { className?: string }) {
  const [visible, setVisible] = useState<LogLine[]>([]);
  const indexRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setVisible(SCRIPT);
      return;
    }

    const intervals: ReturnType<typeof setTimeout>[] = [];
    function pushNext() {
      const i = indexRef.current % SCRIPT.length;
      setVisible((prev) => {
        const next = [...prev, SCRIPT[i]];
        return next.length > 7 ? next.slice(next.length - 7) : next;
      });
      indexRef.current = i + 1;
      intervals.push(setTimeout(pushNext, 1300 + Math.random() * 700));
    }
    intervals.push(setTimeout(pushNext, 600));
    return () => intervals.forEach(clearTimeout);
  }, []);

  return (
    <div
      className={cn(
        "glass-card hud-corners relative overflow-hidden rounded-2xl",
        "shadow-[0_30px_80px_-30px_rgba(0,229,195,0.25)]",
        className,
      )}
    >
      {/* Scanline accent at top */}
      <div className="flex items-center justify-between border-b border-line bg-base/60 px-4 py-2.5 backdrop-blur">
        <div className="flex items-center gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
        </div>
        <div className="flex items-center gap-2 font-mono text-[0.65rem] uppercase tracking-widest text-ink-3">
          <span className="status-dot" />
          agent.maysoon.whatsapp
          <span className="text-accent-dim">●</span>
          <span className="text-accent">ONLINE</span>
        </div>
        <span className="font-mono text-[0.65rem] uppercase tracking-widest text-ink-4">
          tail -f
        </span>
      </div>

      {/* Body */}
      <div className="relative h-[260px] overflow-hidden bg-gradient-to-b from-base/70 to-surface/80 px-5 py-4 font-mono text-[0.78rem] leading-relaxed sm:h-[300px] md:h-[340px]">
        {/* Subtle scanline */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(255,255,255,0.015)_50%)] bg-[length:100%_3px]"
        />
        <div className="flex h-full flex-col justify-end gap-1">
          {visible.map((line, idx) => (
            <div
              key={`${line.t}-${idx}-${indexRef.current}`}
              className={cn(
                "group flex items-start gap-3 motion-safe:animate-[fade-up_0.5s_var(--ease-out-expo)_forwards]",
                idx === visible.length - 1 ? "opacity-100" : "opacity-90",
              )}
              style={{ animationDelay: "0ms" } as React.CSSProperties}
            >
              <span className="shrink-0 text-ink-4">[{line.t}]</span>
              <span className="shrink-0 text-ink-3">›</span>
              <span className="grow text-ink-2">{line.text}</span>
              {line.status && (
                <span
                  className={cn(
                    "shrink-0 font-bold",
                    STATUS_COLOR[line.status],
                  )}
                >
                  {STATUS_GLYPH[line.status]}
                </span>
              )}
            </div>
          ))}
          {/* Cursor */}
          <div className="flex items-center gap-2 pt-1 text-ink-2">
            <span className="text-accent">›</span>
            <span className="inline-block h-3.5 w-2 animate-blink bg-accent" />
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
