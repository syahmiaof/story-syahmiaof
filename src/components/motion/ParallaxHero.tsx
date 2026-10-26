"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface ParallaxHeroProps {
  children: React.ReactNode;
  className?: string;
}

export default function ParallaxHero({ children, className = "" }: ParallaxHeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    // Grab parallax layers inside
    const layers = container.querySelectorAll<HTMLElement>("[data-depth]");
    if (layers.length === 0) return;

    // Create quickTo setters for smooth performance
    const setters = Array.from(layers).map((layer) => {
      const depth = parseFloat(layer.getAttribute("data-depth") || "1");
      return {
        x: gsap.quickTo(layer, "x", { duration: 0.8, ease: "power2.out" }),
        y: gsap.quickTo(layer, "y", { duration: 0.8, ease: "power2.out" }),
        rot: gsap.quickTo(layer, "rotation", { duration: 1.2, ease: "power2.out" }),
        depth,
      };
    });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates (-1 to 1)
      const normX = (e.clientX - centerX) / (rect.width / 2 || 1);
      const normY = (e.clientY - centerY) / (rect.height / 2 || 1);

      setters.forEach(({ x, y, rot, depth }) => {
        // Subtle shift (4 - 16px based on depth)
        const moveX = normX * depth * 14;
        const moveY = normY * depth * 14;
        const moveRot = normX * depth * 0.8;

        x(moveX);
        y(moveY);
        rot(moveRot);
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={containerRef} className={`relative overflow-visible ${className}`}>
      {children}
    </div>
  );
}
