"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/editorial/Eyebrow";
import DisplayHeading from "@/components/editorial/DisplayHeading";
import ParallaxHero from "@/components/motion/ParallaxHero";
import { storyData, StoryChapter } from "@/data/story";
import { ArrowUpRight, X } from "lucide-react";
import gsap from "gsap";

export default function KisahPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeChapter, setActiveChapter] = useState<StoryChapter | null>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", {
        opacity: 0,
        y: 18,
        duration: 0.8,
        delay: 0.15,
      })
        .from(
          ".text-reveal-line",
          {
            opacity: 0,
            y: 35,
            stagger: 0.12,
            duration: 0.9,
          },
          "-=0.5"
        )
        .from(
          ".hero-desc",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          ".hero-art-container",
          {
            opacity: 0,
            x: 40,
            duration: 1.2,
            ease: "power2.out",
          },
          "-=0.8"
        )
        .from(
          ".story-card",
          {
            opacity: 0,
            y: 30,
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
      <section className="relative w-full min-h-[941px] flex flex-col justify-between pt-24 pb-8 overflow-hidden">
        {/* Upper Hero Grid */}
        <div className="relative w-full max-w-[1672px] mx-auto px-8 md:px-16 flex items-center z-10 min-h-[520px]">
          <div className="max-w-[620px]">
            <div className="hero-eyebrow mb-2">
              <Eyebrow theme="light">MY STORY / KISAH AKU</Eyebrow>
            </div>

            <DisplayHeading
              line1={storyData.titleLine1}
              line2={storyData.titleLine2}
              theme="light"
              className="mb-6"
            />

            <p className="hero-desc text-base md:text-lg text-ink-body font-normal leading-relaxed max-w-xl">
              {storyData.intro}
            </p>
          </div>
        </div>

        {/* Right Hero Artwork - Upper half */}
        <div className="hero-art-container absolute right-0 top-16 h-[540px] w-full lg:w-[58%] max-w-[1020px] pointer-events-none select-none flex items-center justify-end z-0">
          <ParallaxHero className="w-full h-full relative flex items-center justify-end">
            <div
              data-depth="0.6"
              className="relative w-full h-full flex items-center justify-end"
            >
              <Image
                src="/assets/generated/kisah-hero-artwork.png"
                alt="SYAHMIAOF — Semuanya Ada Cerita Artwork"
                width={1022}
                height={625}
                priority
                className="object-contain object-right h-full w-auto max-w-none drop-shadow-2xl"
              />
            </div>
          </ParallaxHero>
        </div>

        {/* Bottom Three Story Cards (y=660 to y=920 in reference) */}
        <div className="relative z-10 w-full max-w-[1672px] mx-auto px-8 md:px-16 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {storyData.chapters.map((chapter) => (
              <div
                key={chapter.id}
                onClick={() => setActiveChapter(chapter)}
                className="story-card group relative bg-[#FAF6EE] border border-[#E5DDD0] p-6 lg:p-7 transition-all duration-300 hover:border-burgundy/60 hover:shadow-xl hover:shadow-burgundy/5 cursor-pointer flex flex-col justify-between rounded-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-editorial-display text-2xl font-bold text-burgundy">
                      {chapter.tag}
                    </span>
                    <span className="text-[11px] tracking-micro uppercase text-ink-faint">
                      {chapter.year}
                    </span>
                  </div>
                  <h3 className="font-editorial-display text-xl lg:text-2xl font-bold uppercase tracking-tight text-ink mb-1 group-hover:text-burgundy transition-colors">
                    {chapter.title}
                  </h3>
                  <p className="text-[11px] uppercase tracking-micro text-burgundy font-semibold mb-2">
                    {chapter.subtitle}
                  </p>
                  <p className="text-xs text-ink-body leading-relaxed line-clamp-2">
                    {chapter.excerpt}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#E5DDD0]/60 flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-micro font-semibold text-ink-muted group-hover:text-burgundy transition-colors">
                    Selami Bab
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

      {/* Narrative Modal / Dialog */}
      {activeChapter && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveChapter(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#F7F3EB] border border-[#E5DDD0] p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveChapter(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-200 transition-colors text-ink"
              aria-label="Tutup Dialog"
            >
              <X size={22} />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <span className="font-editorial-display text-xl font-bold text-burgundy">
                {activeChapter.tag}
              </span>
              <span className="w-6 h-[1px] bg-stone" />
              <span className="text-xs uppercase tracking-ultra-wide text-ink-faint">
                {activeChapter.year}
              </span>
            </div>

            <h3 className="font-editorial-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-ink mb-2">
              {activeChapter.title}
            </h3>
            <p className="text-sm uppercase tracking-micro text-burgundy font-semibold mb-6">
              {activeChapter.subtitle}
            </p>

            <div className="space-y-4 text-ink-body text-base leading-relaxed mb-8">
              {activeChapter.fullText.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <blockquote className="border-l-2 border-burgundy pl-4 py-2 italic font-editorial-sub text-lg text-ink-rich bg-[#EFE8DC]/50">
              &ldquo;{activeChapter.quote}&rdquo;
            </blockquote>
          </div>
        </div>
      )}

      <Footer theme="light" />
    </div>
  );
}
