"use client";

import { useEffect, useRef, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*<>/{}[]|";

type Props = {
  text: string;
  /** Total milliseconds for the animation to complete. */
  durationMs?: number;
  /** Delay before starting (ms). */
  delayMs?: number;
  className?: string;
  /** Re-trigger on text change (default true) */
  retriggerOnChange?: boolean;
};

/**
 * Decodes random characters into the target text, character by character.
 * Honors prefers-reduced-motion (renders final text immediately).
 */
export function DecodeText({
  text,
  durationMs = 1100,
  delayMs = 0,
  className,
  retriggerOnChange = true,
}: Props) {
  const [display, setDisplay] = useState(() => text);
  const animatedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDisplay(text);
      return;
    }
    if (animatedRef.current && !retriggerOnChange) return;
    animatedRef.current = true;

    let raf = 0;
    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    const start = performance.now() + delayMs;
    const total = Math.max(300, durationMs);
    const chars = Array.from(text);
    // Each character "locks" at a staggered moment between 30% and 100% of the duration.
    const lockTimes = chars.map((_, i) => {
      const order = (i + 1) / chars.length;
      return total * (0.3 + order * 0.7);
    });

    function tick(now: number) {
      const elapsed = now - start;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      let allLocked = true;
      const out = chars.map((ch, i) => {
        if (ch === " " || ch === "\n") return ch;
        if (elapsed >= lockTimes[i]) return ch;
        allLocked = false;
        return CHARS[Math.floor(Math.random() * CHARS.length)];
      });
      setDisplay(out.join(""));
      if (!allLocked) raf = requestAnimationFrame(tick);
      else setDisplay(text);
    }

    timeoutId = setTimeout(() => {
      raf = requestAnimationFrame(tick);
    }, 0);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      cancelAnimationFrame(raf);
    };
  }, [text, durationMs, delayMs, retriggerOnChange]);

  return <span className={className}>{display}</span>;
}
