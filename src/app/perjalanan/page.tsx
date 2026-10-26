"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/editorial/Eyebrow";
import DisplayHeading from "@/components/editorial/DisplayHeading";
import ParallaxHero from "@/components/motion/ParallaxHero";
import { timelineData, TimelineMilestone } from "@/data/timeline";
import { ArrowUpRight, Shield, Cloud, Sparkles, CheckCircle2, X } from "lucide-react";
import gsap from "gsap";

export default function PerjalananPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeMilestone, setActiveMilestone] = useState<TimelineMilestone | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="w-4 h-4 text-burgundy" />;
      case "Cloud":
        return <Cloud className="w-4 h-4 text-burgundy" />;
      case "Sparkles":
        return <Sparkles className="w-4 h-4 text-burgundy" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-burgundy" />;
    }
  };

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", {
        opacity: 0,
        y: 16,
        duration: 0.7,
        delay: 0.15,
      })
        .from(
          ".text-reveal-line",
          {
            opacity: 0,
            y: 35,
            stagger: 0.12,
            duration: 0.85,
          },
          "-=0.4"
        )
        .from(
          ".hero-desc",
          {
            opacity: 0,
            y: 18,
            duration: 0.7,
          },
          "-=0.45"
        )
        .from(
          ".hero-art-container",
          {
            opacity: 0,
            y: 25,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.8"
        )
        .from(
          ".timeline-card",
          {
            opacity: 0,
            y: 25,
            stagger: 0.1,
            duration: 0.8,
          },
          "-=0.6"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#F7F3EB] text-[#100C0B] editorial-grain overflow-x-hidden">
      <Navbar theme="light" />

      {/* Main Reference Viewport Fold (1672x941) */}
      <section className="relative w-full h-[941px] min-h-[941px] flex flex-col justify-between pt-20 pb-6 overflow-hidden">
        {/* Upper Hero Grid (y: 80 to 650) */}
        <div className="relative w-full flex-1 max-w-[1672px] mx-auto px-8 md:px-16 flex items-center z-10">
          <div className="max-w-[580px] pt-4 lg:pt-0">
            <div className="hero-eyebrow mb-2">
              <Eyebrow theme="light">MY JOURNEY / PERJALANAN AKU</Eyebrow>
            </div>

            <DisplayHeading
              line1={timelineData.titleLine1}
              line2={timelineData.titleLine2}
              theme="light"
              className="mb-6"
            />

            <p className="hero-desc text-base md:text-lg text-ink-body font-normal leading-relaxed max-w-xl">
              {timelineData.intro}
            </p>
          </div>
        </div>

        {/* Right Hero Artwork: Back-facing figure walking up stairs, exact (1052, 650) bounds */}
        <div className="hero-art-container absolute right-0 top-0 w-[1052px] h-[650px] max-w-[58vw] pointer-events-none select-none flex items-center justify-end z-0">
          <ParallaxHero className="w-full h-full relative">
            <div
              data-depth="0.6"
              className="relative w-full h-full flex items-center justify-end"
            >
              <Image
                src="/assets/generated/perjalanan-hero-artwork-v2.png"
                alt="SYAHMIAOF — Aku Masih Melangkah (Back-Facing Figure Walking Up Stairs)"
                width={1052}
                height={650}
                priority
                className="object-cover object-left h-full w-full drop-shadow-2xl"
              />
            </div>
          </ParallaxHero>
        </div>

        {/* Bottom Three Timeline Cards (y=660 to y=920 in reference) */}
        <div className="relative z-10 w-full max-w-[1672px] mx-auto px-8 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timelineData.milestones.map((milestone) => (
              <div
                key={milestone.year}
                onClick={() => setActiveMilestone(milestone)}
                className="timeline-card group relative bg-[#FAF6EE] border border-[#E5DDD0] p-6 lg:p-7 transition-all duration-300 hover:border-burgundy/60 hover:shadow-xl hover:shadow-burgundy/5 cursor-pointer flex flex-col justify-between rounded-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-editorial-display text-3xl font-black text-ink">
                      {milestone.year}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-burgundy/10 flex items-center justify-center">
                      {getIcon(milestone.icon)}
                    </div>
                  </div>
                  <h3 className="font-editorial-display text-xl lg:text-2xl font-bold uppercase tracking-tight text-ink mb-1 group-hover:text-burgundy transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-micro text-burgundy font-semibold mb-2">
                    {milestone.category}
                  </p>
                  <p className="text-xs text-ink-body leading-relaxed line-clamp-2">
                    {milestone.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5DDD0]/60 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-micro font-semibold text-ink-muted group-hover:text-burgundy transition-colors">
                    Sorotan Tahun
                  </span>
                  <div className="w-6 h-6 rounded-full border border-stone flex items-center justify-center group-hover:border-burgundy group-hover:bg-burgundy group-hover:text-white transition-all">
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Modal / Dialog */}
      {activeMilestone && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveMilestone(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#F7F3EB] border border-[#E5DDD0] p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveMilestone(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-200 transition-colors text-ink"
              aria-label="Tutup Dialog"
            >
              <X size={22} />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <span className="font-editorial-display text-3xl font-black text-burgundy">
                {activeMilestone.year}
              </span>
              <span className="w-8 h-[1px] bg-stone" />
              <span className="text-xs uppercase tracking-ultra-wide text-ink-muted font-semibold">
                {activeMilestone.category}
              </span>
            </div>

            <h3 className="font-editorial-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-ink mb-4">
              {activeMilestone.title}
            </h3>

            <p className="text-base text-ink-body leading-relaxed mb-6">
              {activeMilestone.description}
            </p>

            <div className="space-y-3 mb-8">
              <h4 className="text-xs uppercase tracking-ultra-wide text-ink-muted font-bold">
                Pencapaian & Falsafah:
              </h4>
              <ul className="space-y-2">
                {activeMilestone.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-ink-body">
                    <span className="w-1.5 h-1.5 rounded-full bg-burgundy mt-1.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-ultra-wide text-ink-muted font-bold mb-3">
                Kemahiran & Penguasaan:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeMilestone.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#EFE8DC] border border-[#E5DDD0] text-xs font-editorial-sans tracking-wide text-ink uppercase font-medium rounded-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer theme="light" />
    </div>
  );
}
