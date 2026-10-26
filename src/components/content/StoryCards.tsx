"use client";

import React, { useState } from "react";
import { StoryChapter, storyData } from "@/data/story";
import { ArrowUpRight, X } from "lucide-react";

export default function StoryCards() {
  const [activeChapter, setActiveChapter] = useState<StoryChapter | null>(null);

  return (
    <section className="py-20 max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16">
      <div className="flex items-center justify-between mb-12 border-b border-[#E5DDD0] pb-6">
        <div>
          <span className="text-xs uppercase tracking-ultra-wide text-ink-muted font-semibold block mb-1">
            BAB EKSPLORASI
          </span>
          <h2 className="font-editorial-display text-3xl md:text-4xl uppercase font-bold text-ink">
            Tiga Titik Pembentukan
          </h2>
        </div>
        <span className="text-sm font-editorial-sans tracking-wide text-ink-faint hidden md:inline-block">
          Klik untuk membaca bab penuh
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {storyData.chapters.map((chapter) => (
          <div
            key={chapter.id}
            onClick={() => setActiveChapter(chapter)}
            className="group relative bg-[#FAF6EE] border border-[#E5DDD0] p-8 md:p-10 transition-all duration-300 hover:border-burgundy/50 hover:shadow-xl hover:shadow-burgundy/5 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-editorial-display text-2xl font-bold text-burgundy">
                  {chapter.tag}
                </span>
                <span className="text-xs tracking-micro uppercase text-ink-faint">
                  {chapter.year}
                </span>
              </div>
              <h3 className="font-editorial-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-ink mb-2 group-hover:text-burgundy transition-colors">
                {chapter.title}
              </h3>
              <p className="text-xs uppercase tracking-micro text-burgundy font-semibold mb-4">
                {chapter.subtitle}
              </p>
              <p className="text-sm text-ink-body leading-relaxed line-clamp-3">
                {chapter.excerpt}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#E5DDD0]/60 flex items-center justify-between">
              <span className="text-xs uppercase tracking-micro font-semibold text-ink-muted group-hover:text-burgundy transition-colors">
                Baca Naratif
              </span>
              <div className="w-8 h-8 rounded-full border border-stone flex items-center justify-center group-hover:border-burgundy group-hover:bg-burgundy group-hover:text-white transition-all">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

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
    </section>
  );
}
