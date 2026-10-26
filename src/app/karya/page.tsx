"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Eyebrow from "@/components/editorial/Eyebrow";
import DisplayHeading from "@/components/editorial/DisplayHeading";
import EditorialButton from "@/components/editorial/EditorialButton";
import ParallaxHero from "@/components/motion/ParallaxHero";
import ProjectGallery from "@/components/content/ProjectGallery";
import { projectsData } from "@/data/projects";
import gsap from "gsap";

export default function KaryaPage() {
  const containerRef = useRef<HTMLDivElement>(null);

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
          ".hero-ctas",
          {
            opacity: 0,
            y: 18,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-art-container",
          {
            opacity: 0,
            scale: 0.96,
            duration: 1.3,
            ease: "power2.out",
          },
          "-=0.8"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen bg-[#060302] text-stone-100 editorial-grain-dark overflow-x-hidden">
      <Navbar theme="dark" />

      {/* Hero Section (Matching 2048x752 reference crop frame) */}
      <section className="relative w-full min-h-[752px] lg:h-[752px] flex flex-col justify-center pt-24 overflow-hidden">
        {/* Main Content Area */}
        <div className="relative w-full max-w-[2048px] mx-auto px-8 md:px-16 flex items-center z-10">
          <div className="max-w-[580px] py-12 lg:py-0">
            <div className="hero-eyebrow mb-3">
              <Eyebrow theme="dark">{projectsData.eyebrow}</Eyebrow>
            </div>

            <DisplayHeading
              line1={projectsData.titleLine1}
              line2={projectsData.titleLine2}
              theme="dark"
              line2Color="text-[#B81828]"
              className="mb-8"
            />

            <p className="hero-desc text-base md:text-lg text-stone-300 font-normal leading-relaxed mb-10 max-w-lg">
              {projectsData.intro}
            </p>

            <div className="hero-ctas flex flex-wrap gap-4 items-center">
              <EditorialButton
                onClick={() => {
                  const el = document.getElementById("projects");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                variant="primary"
              >
                Terokai Karya
              </EditorialButton>
              <EditorialButton href="/catatan" variant="outline-dark">
                Refleksi & Catatan
              </EditorialButton>
            </div>
          </div>
        </div>

        {/* Right Floating Screens Artwork - Flush to right edge, high fidelity */}
        <div className="hero-art-container absolute right-0 top-0 bottom-0 w-full lg:w-[62%] max-w-[1300px] pointer-events-none select-none flex items-center justify-end z-0">
          <ParallaxHero className="w-full h-full relative flex items-center justify-end">
            <div
              data-depth="0.8"
              className="relative w-full h-full flex items-center justify-end"
            >
              <Image
                src="/assets/generated/karya-hero-screens.png"
                alt="SYAHMIAOF — Karya: Dari Fikiran Ke Realiti Floating Screens"
                width={1219}
                height={760}
                priority
                className="object-contain object-right h-full w-auto max-w-none drop-shadow-2xl"
              />
            </div>
          </ParallaxHero>
        </div>
      </section>

      {/* Project Showcase Gallery */}
      <ProjectGallery />

      <Footer theme="dark" />
    </div>
  );
}
