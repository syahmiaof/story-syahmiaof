"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number; y: number; px: number; py: number; vx: number; vy: number;
  r: number; phase: number; speed: number; star: boolean;
};

export default function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d", { alpha: true });
    if (!canvas || !ctx) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: -1000, y: -1000, active: false };
    let width = 0, height = 0, frame = 0, particles: Particle[] = [];
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.25);
      width = window.innerWidth; height = window.innerHeight;
      canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`; canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const mobile = width < 700;
      const count = Math.min(mobile ? 116 : 250, Math.max(mobile ? 88 : 150, Math.round(width * height / (mobile ? 2700 : 7000))));
      particles = Array.from({ length: count }, () => {
        const x = Math.random() * width, y = Math.random() * height;
        return { x, y, px: x, py: y, vx: 0, vy: 0, r: 1.2 + Math.random() * 2, phase: Math.random() * Math.PI * 2, speed: .12 + Math.random() * .36, star: Math.random() > .71 };
      });
    };
    const move = (event: PointerEvent) => { pointer.x = event.clientX; pointer.y = event.clientY; pointer.active = true; };
    const leave = () => { pointer.active = false; pointer.x = -1000; pointer.y = -1000; };
    const pointerOut = (event: PointerEvent) => { if (!event.relatedTarget) leave(); };
    const paint = (time: number) => {
      ctx.clearRect(0, 0, width, height);
      for (const particle of particles) {
        particle.px = particle.x; particle.py = particle.y;
        if (!reduceMotion) {
          particle.vy -= particle.speed * .025;
          particle.vx += Math.sin(time * .00023 + particle.phase) * .006;
          const dx = pointer.x - particle.x, dy = pointer.y - particle.y, distance = Math.hypot(dx, dy);
          if (pointer.active && distance < 220 && distance > 1) {
            const pull = (1 - distance / 220) * .12;
            particle.vx += dx / distance * pull;
            particle.vy += dy / distance * pull;
          }
          particle.vx *= .986; particle.vy *= .986;
          particle.x += particle.vx; particle.y += particle.vy;
          if (particle.y < -12) { particle.y = height + 10; particle.x = Math.random() * width; }
          if (particle.x < -12) particle.x = width + 10;
          if (particle.x > width + 12) particle.x = -10;
        }
      }

      // Fine red filaments make the field read as a constellation rather than random noise.
      if (particles.length <= 250) {
        for (let i = 0; i < particles.length; i++) for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j], distance = Math.hypot(a.x - b.x, a.y - b.y);
          if (distance < 88) {
            ctx.strokeStyle = `rgba(183, 23, 37, ${(1 - distance / 88) * .16})`;
            ctx.lineWidth = .7; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
      }

      ctx.save(); ctx.shadowColor = "rgba(242, 24, 47, .95)"; ctx.shadowBlur = 11;
      for (const particle of particles) {
        const alpha = .5 + (Math.sin(time * .0012 + particle.phase) + 1) * .2;
        ctx.fillStyle = `rgba(231, 25, 47, ${alpha})`;
        if (particle.star) {
          ctx.save(); ctx.translate(particle.x, particle.y); ctx.rotate(particle.phase + time * .00011);
          ctx.beginPath();
          for (let i = 0; i < 12; i++) {
            const radius = i % 2 ? particle.r * .34 : particle.r * (i % 3 === 0 ? 2.7 : 1.7);
            const angle = i * Math.PI / 6;
            if (i === 0) ctx.moveTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
            else ctx.lineTo(Math.cos(angle) * radius, Math.sin(angle) * radius);
          }
          ctx.closePath(); ctx.fill(); ctx.restore();
        } else {
          ctx.beginPath(); ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2); ctx.fill();
        }
      }
      ctx.restore();
      if (pointer.active) {
        const halo = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 120);
        halo.addColorStop(0, "rgba(222, 25, 44, .18)"); halo.addColorStop(1, "rgba(222, 25, 44, 0)");
        ctx.fillStyle = halo; ctx.beginPath(); ctx.arc(pointer.x, pointer.y, 120, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = "rgba(187, 23, 39, .55)"; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(pointer.x, pointer.y, 5 + Math.sin(time * .008) * 1.5, 0, Math.PI * 2); ctx.stroke();
      }
      if (!reduceMotion && !document.hidden) frame = requestAnimationFrame(paint);
    };
    const onVisibility = () => { if (!document.hidden && !reduceMotion) { cancelAnimationFrame(frame); frame = requestAnimationFrame(paint); } };
    resize(); frame = requestAnimationFrame(paint);
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerout", pointerOut);
    window.addEventListener("blur", leave);
    document.addEventListener("visibilitychange", onVisibility);
    return () => {
      cancelAnimationFrame(frame); window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", move); window.removeEventListener("blur", leave);
      window.removeEventListener("pointerout", pointerOut);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);
  return <canvas ref={canvasRef} className="particle-field" aria-hidden="true" />;
}
