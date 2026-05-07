"use client";

import { useEffect, useRef } from "react";

/**
 * Cyan cursor follower with a soft trailing ring.
 * - Disabled on touch devices and prefers-reduced-motion.
 * - Adds class 'has-cursor' to <html> to hide native cursor when active.
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (reduce || isCoarse) return;

    document.documentElement.classList.add("has-cursor");

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let scale = 1;
    let targetScale = 1;
    let raf = 0;

    function move(e: MouseEvent) {
      mx = e.clientX;
      my = e.clientY;
    }

    const interactiveSelector =
      "a, button, [role='button'], input, textarea, select, [data-cursor='hover']";

    function over(e: Event) {
      const t = e.target as HTMLElement;
      if (t && typeof t.closest === "function" && t.closest(interactiveSelector)) {
        targetScale = 2.4;
      }
    }
    function out(e: Event) {
      const t = e.target as HTMLElement;
      if (t && typeof t.closest === "function" && t.closest(interactiveSelector)) {
        targetScale = 1;
      }
    }

    function tick() {
      // Dot follows precisely
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`;
      }
      // Ring trails with easing
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      scale += (targetScale - scale) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 16}px, ${ry - 16}px, 0) scale(${scale})`;
      }
      raf = requestAnimationFrame(tick);
    }

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseover", over, true);
    document.addEventListener("mouseout", out, true);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseover", over, true);
      document.removeEventListener("mouseout", out, true);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[100] h-8 w-8 rounded-full border border-accent/60 mix-blend-screen will-change-transform"
        style={{ transition: "border-color 0.2s ease" }}
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[101] h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(0,229,195,0.9)] will-change-transform"
      />
    </>
  );
}
