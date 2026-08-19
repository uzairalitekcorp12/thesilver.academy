"use client";

import { useEffect } from "react";

export default function SiteEffects() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer: fine)").matches;

    const revealItems = Array.from(document.querySelectorAll("[data-reveal]"));

    if (reduceMotion) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.11,
        rootMargin: "0px 0px -42px 0px",
      },
    );

    revealItems.forEach((item) => revealObserver.observe(item));

    const cleanupFns = [];

    if (finePointer) {
      const tiltItems = Array.from(document.querySelectorAll("[data-tilt]"));

      tiltItems.forEach((item) => {
        const onMove = (event) => {
          const bounds = item.getBoundingClientRect();
          const px = (event.clientX - bounds.left) / bounds.width;
          const py = (event.clientY - bounds.top) / bounds.height;
          const rotateY = (px - 0.5) * 7;
          const rotateX = (0.5 - py) * 7;

          item.style.setProperty("--tilt-x", `${rotateX.toFixed(2)}deg`);
          item.style.setProperty("--tilt-y", `${rotateY.toFixed(2)}deg`);
          item.style.setProperty("--pointer-x", `${(px * 100).toFixed(1)}%`);
          item.style.setProperty("--pointer-y", `${(py * 100).toFixed(1)}%`);
        };

        const onLeave = () => {
          item.style.setProperty("--tilt-x", "0deg");
          item.style.setProperty("--tilt-y", "0deg");
          item.style.setProperty("--pointer-x", "50%");
          item.style.setProperty("--pointer-y", "50%");
        };

        item.addEventListener("pointermove", onMove);
        item.addEventListener("pointerleave", onLeave);

        cleanupFns.push(() => {
          item.removeEventListener("pointermove", onMove);
          item.removeEventListener("pointerleave", onLeave);
        });
      });
    }

    const parallaxItems = Array.from(document.querySelectorAll("[data-parallax]"));
    let ticking = false;

    const updateParallax = () => {
      const viewportHeight = window.innerHeight;

      parallaxItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const progress = (rect.top + rect.height / 2 - viewportHeight / 2) / viewportHeight;
        const amount = Number(item.dataset.parallax || 12);
        item.style.setProperty("--parallax-y", `${(-progress * amount).toFixed(2)}px`);
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      revealObserver.disconnect();
      cleanupFns.forEach((cleanup) => cleanup());
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}
