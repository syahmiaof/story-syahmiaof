"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/editorial/Eyebrow";
import DisplayHeading from "@/components/editorial/DisplayHeading";
import EditorialButton from "@/components/editorial/EditorialButton";
import ParallaxHero from "@/components/motion/ParallaxHero";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);

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
          ".hero-ctas",
          {
            opacity: 0,
            y: 16,
            duration: 0.65,
          },
          "-=0.4"
        )
        .from(
          ".hero-art-container",
          {
            opacity: 0,
            scale: 0.98,
            duration: 1.1,
            ease: "power2.out",
          },
          "-=0.8"
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative min-h-screen bg-[#F7F3EB] text-[#100C0B] editorial-grain overflow-x-hidden">
      <Navbar theme="light" />

      {/* Hero Section (Matching 1672x941 reference frame) */}
      <section className="relative w-full h-[941px] min-h-[941px] flex flex-col justify-between overflow-hidden">
        {/* Main Content Area */}
        <div className="relative w-full flex-1 max-w-[1672px] mx-auto px-8 md:px-16 flex items-center z-10">
          <div className="max-w-[580px] pt-14 lg:pt-8">
            <div className="hero-eyebrow mb-2">
              <Eyebrow theme="light">MY STORY / MY JOURNEY</Eyebrow>
            </div>

            <DisplayHeading
              line1="INI BARU"
              line2="PERMULAAN."
              theme="light"
              className="mb-8"
            />

            <p className="hero-desc text-base md:text-lg text-ink-body font-normal leading-relaxed mb-10 max-w-xl">
              Aku tak bermula dengan segala-galanya. Aku cuma ada impian, keberanian untuk mencuba, dan satu keputusan — untuk tidak berhenti membina masa depan aku sendiri.
            </p>

            <div className="hero-ctas flex flex-wrap gap-4 items-center">
              <EditorialButton href="/kisah" variant="primary">
                Kenali Kisah Aku
              </EditorialButton>
              <EditorialButton href="/perjalanan" variant="secondary">
                Terokai Perjalanan
              </EditorialButton>
            </div>
          </div>
        </div>

        {/* Right Hero Artwork - Flush to right edge, matching exact (1052, 810) bounds */}
        <div className="hero-art-container absolute right-0 top-0 w-[1052px] h-[810px] max-w-[58vw] pointer-events-none select-none flex items-center justify-end z-0">
          <ParallaxHero className="w-full h-full relative">
            <div
              data-depth="0.5"
              className="relative w-full h-full flex items-center justify-end"
            >
              <Image
                src="/assets/generated/utama-hero-artwork-v2.png"
                alt="SYAHMIAOF — Ini Baru Permulaan Hero Artwork"
                width={1052}
                height={810}
                priority
                className="object-cover object-left h-full w-full drop-shadow-2xl"
              />
            </div>
          </ParallaxHero>
        </div>

        {/* Bottom Teaser Section: 01 CERITA (y=810 to y=941) */}
        <div className="relative z-10 w-full h-[131px] border-t border-[#E5DDD0] bg-[#F7F3EB]/95 backdrop-blur-xs flex items-center">
          <div className="w-full max-w-[1672px] mx-auto px-8 md:px-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center space-x-6">
              <span className="font-editorial-display text-3xl md:text-4xl font-black text-burgundy">
                01
              </span>
              <div>
                <span className="text-xs uppercase tracking-ultra-wide text-ink-muted font-bold block">
                  CERITA
                </span>
                <p className="text-sm md:text-base text-ink-body max-w-lg mt-0.5">
                  Setiap langkah adalah permulaan baharu. Terokai naratif dan titik perubahan hidup aku.
                </p>
              </div>
            </div>

            <Link
              href="/kisah"
              className="group flex items-center space-x-3 text-xs md:text-sm uppercase tracking-ultra-wide font-bold text-ink hover:text-burgundy transition-colors"
            >
              <span>Selami Kisah Lengkap</span>
              <div className="w-8 h-8 rounded-full border border-stone-400 flex items-center justify-center group-hover:border-burgundy group-hover:bg-burgundy group-hover:text-white transition-all">
                <ArrowUpRight size={16} />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer theme="light" />
    </div>
  );
}
