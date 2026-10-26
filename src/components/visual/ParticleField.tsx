"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  phase: number;
  speed: number;
};

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Completely disable particle rendering on mobile screens (< 768px)
    // for maximum cleanliness, zero visual clutter, and optimal battery/performance
    if (window.innerWidth < 768) {
      canvas.style.display = "none";
      return;
    }

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      canvas.style.display = "none";
      return;
    }

    const pointer = { x: -1000, y: -1000, active: false };
    let width = 0;
    let height = 0;
    let frame = 0;
    let particles: Particle[] = [];

    const resize = () => {
      if (window.innerWidth < 768) {
        canvas.style.display = "none";
        return;
      }
      canvas.style.display = "block";

      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Kept very subtle and calm: only 32 gentle dust particles across the entire desktop viewport
      const count = 32;
      particles = Array.from({ length: count }, () => {
        const x = Math.random() * width;
        const y = Math.random() * height;
        return {
          x,
          y,
          vx: 0,
          vy: 0,
          r: 1.0 + Math.random() * 1.5,
          phase: Math.random() * Math.PI * 2,
          speed: 0.08 + Math.random() * 0.18,
        };
      });
    };

    const move = (event: PointerEvent) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };

    const leave = () => {
      pointer.active = false;
      pointer.x = -1000;
      pointer.y = -1000;
    };

    const paint = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Subtle, calm motion
      for (const particle of particles) {
        particle.vy -= particle.speed * 0.012;
        particle.vx += Math.sin(time * 0.00015 + particle.phase) * 0.003;

        const dx = pointer.x - particle.x;
        const dy = pointer.y - particle.y;
        const distance = Math.hypot(dx, dy);

        if (pointer.active && distance < 160 && distance > 1) {
          const pull = (1 - distance / 160) * 0.06;
          particle.vx += (dx / distance) * pull;
          particle.vy += (dy / distance) * pull;
        }

        particle.vx *= 0.985;
        particle.vy *= 0.985;
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.y < -10) {
          particle.y = height + 10;
          particle.x = Math.random() * width;
        }
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
      }

      // Soft ambient glow (no harsh neon, no chaotic web lines)
      ctx.save();
      ctx.shadowColor = "rgba(180, 20, 35, 0.45)";
      ctx.shadowBlur = 4;

      for (const particle of particles) {
        // Very soft, relaxing pulse (opacity between 0.15 and 0.35)
        const alpha = 0.15 + (Math.sin(time * 0.0008 + particle.phase) + 1) * 0.1;
        ctx.fillStyle = `rgba(195, 25, 40, ${alpha})`;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      if (!reduceMotion && !document.hidden && window.innerWidth >= 768) {
        frame = requestAnimationFrame(paint);
      }
    };

    const onVisibility = () => {
      if (!document.hidden && !reduceMotion && window.innerWidth >= 768) {
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(paint);
      }
    };

    resize();
    frame = requestAnimationFrame(paint);

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerleave", leave);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
