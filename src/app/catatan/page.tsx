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
        y: 20,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          ".text-reveal-line",
          {
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 1,
          },
          "-=0.5"
        )
        .from(
          ".hero-desc",
          {
            opacity: 0,
            y: 25,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".center-portrait",
          {
            opacity: 0,
            scale: 0.96,
            duration: 1.2,
          },
          "-=0.8"
        )
        .from(
          ".pull-quote",
          {
            opacity: 0,
            x: 20,
            duration: 1,
          },
          "-=0.8"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#060302] text-stone-100 editorial-grain-dark overflow-x-hidden">
      <Navbar theme="dark" />

      {/* Hero Section */}
      <section className="relative min-h-[887px] flex items-center pt-28 pb-16 px-6 md:px-12 lg:px-16 max-w-[1774px] mx-auto">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center z-10">
          {/* Left Editorial Title & Intro (lg:col-span-5) */}
          <div className="lg:col-span-5 max-w-xl">
            <div className="hero-eyebrow">
              <Eyebrow theme="dark">{notesData.eyebrow}</Eyebrow>
            </div>

            <DisplayHeading
              line1={notesData.titleLine1}
              line2={notesData.titleLine2}
              theme="dark"
              line2Color="text-[#B81828]"
              className="mb-8"
            />

            <p className="hero-desc text-base md:text-lg text-stone-300 font-normal leading-relaxed mb-8 max-w-md">
              {notesData.intro}
            </p>

            <div className="hero-ctas flex flex-wrap gap-4 items-center">
              <EditorialButton
                onClick={() => {
                  window.scrollTo({ top: 780, behavior: "smooth" });
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

          {/* Center Seated Portrait (lg:col-span-4) */}
          <div className="lg:col-span-4 relative h-[420px] md:h-[500px] lg:h-[620px] flex items-center justify-center">
            <ParallaxHero className="w-full h-full relative flex items-center justify-center">
              <div
                data-depth="0.6"
                className="center-portrait relative w-full max-w-[480px] h-full flex items-center justify-center select-none pointer-events-none"
              >
                <Image
                  src="/assets/generated/catatan-hero-figure.png"
                  alt="SYAHMIAOF — Seated Reflective Portrait"
                  width={650}
                  height={525}
                  priority
                  className="object-contain max-h-full drop-shadow-2xl"
                />
              </div>
            </ParallaxHero>
          </div>

          {/* Right Emotional Pull Quote (lg:col-span-3) */}
          <div className="lg:col-span-3 flex flex-col justify-center">
            <div className="pull-quote bg-[#0E0908] border-l-2 border-[#A81320] p-6 md:p-8 border border-[#281D1A]/50 shadow-xl">
              <span className="text-xs uppercase tracking-ultra-wide text-[#A81320] font-bold block mb-3">
                FALSAFAH DIRI
              </span>
              <p className="font-editorial-sub italic text-xl md:text-2xl text-stone-100 leading-snug mb-4">
                &ldquo;{notesData.quote}&rdquo;
              </p>
              <p className="text-xs uppercase tracking-micro text-stone-400 font-medium">
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
