"use client";

import { useEffect, useRef } from "react";

/**
 * Adds 'is-visible' to elements with class 'reveal' or 'reveal-stagger'
 * when they enter the viewport. Mounts once globally.
 */
export function RevealOnScroll() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document
        .querySelectorAll<HTMLElement>(".reveal, .reveal-stagger")
        .forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    observerRef.current = observer;

    const targets = document.querySelectorAll<HTMLElement>(
      ".reveal, .reveal-stagger",
    );
    targets.forEach((el) => observer.observe(el));

    // Re-scan on DOM mutations (for dynamic content)
    const mutationObs = new MutationObserver(() => {
      document
        .querySelectorAll<HTMLElement>(
          ".reveal:not(.is-visible), .reveal-stagger:not(.is-visible)",
        )
        .forEach((el) => observer.observe(el));
    });
    mutationObs.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObs.disconnect();
    };
  }, []);

  return null;
}
