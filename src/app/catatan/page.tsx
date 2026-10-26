"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/editorial/Eyebrow";
import DisplayHeading from "@/components/editorial/DisplayHeading";
import EditorialButton from "@/components/editorial/EditorialButton";
import ParallaxHero from "@/components/motion/ParallaxHero";
import NotesGrid from "@/components/content/NotesGrid";
import { notesData } from "@/data/notes";
import gsap from "gsap";

export default function CatatanPage() {
  const containerRef = useRef<HTMLDivElement>(null);

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
          ".center-portrait",
          {
            opacity: 0,
            scale: 0.97,
            duration: 1.1,
            ease: "power2.out",
          },
          "-=0.7"
        )
        .from(
          ".pull-quote",
          {
            opacity: 0,
            x: 25,
            duration: 0.9,
          },
          "-=0.7"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#060302] text-stone-100 editorial-grain-dark overflow-x-hidden">
      <Navbar theme="dark" />

      {/* Hero Section (Matching 1774x887 reference frame) */}
      <section className="relative w-full min-h-[560px] lg:h-[560px] flex items-center pt-24 pb-4 px-6 md:px-12 lg:px-16 max-w-[1774px] mx-auto overflow-hidden">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6 items-center z-10">
          {/* Left Editorial Title & Intro (lg:col-span-5) */}
          <div className="lg:col-span-5 max-w-lg pt-4 lg:pt-0">
            <div className="hero-eyebrow mb-2">
              <Eyebrow theme="dark">{notesData.eyebrow}</Eyebrow>
            </div>

            <DisplayHeading
              line1={notesData.titleLine1}
              line2={notesData.titleLine2}
              theme="dark"
              line2Color="text-[#B81828]"
              className="mb-6"
            />

            <p className="hero-desc text-sm md:text-base text-stone-300 font-normal leading-relaxed mb-6 max-w-md">
              {notesData.intro}
            </p>

            <div className="hero-ctas flex flex-wrap gap-4 items-center">
              <EditorialButton
                onClick={() => {
                  window.scrollTo({ top: 580, behavior: "smooth" });
                }}
                variant="primary"
              >
                Terokai Refleksi
              </EditorialButton>
              <EditorialButton href="/" variant="outline-dark">
                Kembali Ke Utama
              </EditorialButton>
            </div>
          </div>

          {/* Center Seated Portrait (lg:col-span-4) - exact (660, 560) bounds */}
          <div className="lg:col-span-4 relative h-[380px] md:h-[460px] lg:h-[540px] flex items-center justify-center">
            <ParallaxHero className="w-full h-full relative flex items-center justify-center">
              <div
                data-depth="0.5"
                className="center-portrait relative w-full h-full flex items-center justify-center select-none pointer-events-none"
              >
                <Image
                  src="/assets/generated/catatan-hero-figure-v2.png"
                  alt="SYAHMIAOF — Seated Reflective Portrait"
                  width={660}
                  height={560}
                  priority
                  className="object-contain max-h-full drop-shadow-2xl"
                />
              </div>
            </ParallaxHero>
          </div>

          {/* Right Emotional Pull Quote (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div className="pull-quote bg-[#0E0908] border-l-2 border-[#A81320] p-6 md:p-7 border border-[#281D1A]/60 shadow-2xl rounded-sm">
              <span className="text-[11px] uppercase tracking-ultra-wide text-[#A81320] font-bold block mb-2">
                FALSAFAH DIRI
              </span>
              <p className="font-editorial-sub italic text-lg md:text-xl text-stone-100 leading-snug mb-3">
                &ldquo;{notesData.quote}&rdquo;
              </p>
              <p className="text-[11px] uppercase tracking-micro text-stone-400 font-medium">
                — Syahmi, The Story of Becoming
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Notes Grid Section */}
      <NotesGrid />

      <Footer theme="dark" />
    </div>
  );
}
