"use client";

import { useEffect, useRef } from "react";

/**
 * Layered HUD background:
 * - Static grid (CSS)
 * - Floating particles (canvas, lightweight)
 * - Soft radial glow at top
 * Lives behind everything via fixed positioning + pointer-events: none.
 */
export function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      a: number;
    };
    let particles: Particle[] = [];

    function seed() {
      const count = Math.min(
        80,
        Math.floor((width * height) / 28000),
      );
      particles = Array.from({ length: count }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 1.4 + 0.4,
        a: Math.random() * 0.5 + 0.15,
      }));
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas!.width = width * dpr;
      canvas!.height = height * dpr;
      canvas!.style.width = `${width}px`;
      canvas!.style.height = `${height}px`;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    }

    let raf = 0;
    function tick() {
      ctx!.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(0, 229, 195, ${p.a})`;
        ctx!.fill();
      }
      raf = requestAnimationFrame(tick);
    }

    resize();
    if (!reduced) {
      tick();
    } else {
      // Render once, no animation
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 195, ${p.a})`;
        ctx.fill();
      }
    }

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Soft cyan glow centered toward the top */}
      <div
        className="absolute left-1/2 top-[-20%] h-[80vh] w-[80vw] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0, 229, 195, 0.18), rgba(0, 229, 195, 0.04) 55%, transparent 75%)",
        }}
      />
      {/* CSS grid lines */}
      <div className="absolute inset-0 bg-grid opacity-[0.55]" />
      {/* Vignette to fade grid at bottom */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, transparent 30%, var(--color-base) 95%)",
        }}
      />
      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
      />
      {/* SVG noise */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.05] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="grid-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="3"
          />
          <feColorMatrix values="0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.6 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grid-noise)" />
      </svg>
    </div>
  );
}
