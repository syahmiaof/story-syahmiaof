"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface ParallaxHeroProps {
  children: React.ReactNode;
  className?: string;
}

/** For independent transparent layers only, never an entire reference scene. */
export default function ParallaxHero({ children, className = "" }: ParallaxHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || new URLSearchParams(window.location.search).get("visualqa") === "1") return;
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference) and (pointer: fine)", () => {
      const setters = Array.from(container.querySelectorAll<HTMLElement>("[data-depth]")).map(layer => {
        const depth = Number.parseFloat(layer.dataset.depth || "1");
        return {
          depth: Number.isFinite(depth) ? depth : 1,
          originX: Number(gsap.getProperty(layer, "x")) || 0,
          originY: Number(gsap.getProperty(layer, "y")) || 0,
          originRotation: Number(gsap.getProperty(layer, "rotation")) || 0,
          x: gsap.quickTo(layer, "x", { duration: 0.8, ease: "power2.out" }),
          y: gsap.quickTo(layer, "y", { duration: 0.8, ease: "power2.out" }),
          rotation: gsap.quickTo(layer, "rotation", { duration: 1, ease: "power2.out" }),
        };
      });
      const move = (event: MouseEvent) => {
        const rect = container.getBoundingClientRect();
        const x = gsap.utils.clamp(-1, 1, (event.clientX - rect.left - rect.width / 2) / (rect.width / 2 || 1));
        const y = gsap.utils.clamp(-1, 1, (event.clientY - rect.top - rect.height / 2) / (rect.height / 2 || 1));
        setters.forEach(layer => {
          layer.x(layer.originX + x * layer.depth * 8);
          layer.y(layer.originY + y * layer.depth * 8);
          layer.rotation(layer.originRotation + x * layer.depth * 0.35);
        });
      };
      const reset = () => setters.forEach(layer => {
        layer.x(layer.originX);
        layer.y(layer.originY);
        layer.rotation(layer.originRotation);
      });
      container.addEventListener("mousemove", move, { passive: true });
      container.addEventListener("mouseleave", reset);
      return () => {
        container.removeEventListener("mousemove", move);
        container.removeEventListener("mouseleave", reset);
        // matchMedia's GSAP context kills quickTo tweens and restores initial styles.
      };
    }, container);
    return () => media.revert();
  }, []);

  return <div ref={containerRef} className={`relative overflow-visible ${className}`}>{children}</div>;
}
