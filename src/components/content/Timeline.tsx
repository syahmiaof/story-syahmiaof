"use client";

import React, { useState } from "react";
import { timelineData, TimelineMilestone } from "@/data/timeline";
import { Shield, Cloud, Sparkles, CheckCircle2 } from "lucide-react";

export default function Timeline() {
  const [selectedMilestone, setSelectedMilestone] = useState<TimelineMilestone>(
    timelineData.milestones[0]
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Shield":
        return <Shield className="w-5 h-5 text-burgundy" />;
      case "Cloud":
        return <Cloud className="w-5 h-5 text-burgundy" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-burgundy" />;
      default:
        return <CheckCircle2 className="w-5 h-5 text-burgundy" />;
    }
  };

  return (
    <section id="timeline" className="py-24 max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#E5DDD0] pb-8">
        <div>
          <span className="text-xs uppercase tracking-ultra-wide text-ink-muted font-semibold block mb-2">
            KRONOLOGI LANGKAH
          </span>
          <h2 className="font-editorial-display text-3xl md:text-5xl uppercase font-bold text-ink">
            Garis Masa Evolusi
          </h2>
        </div>
        <p className="text-sm font-editorial-sans tracking-wide text-ink-muted max-w-md mt-4 md:mt-0">
          Dari gelanggang silat tradisi hingga ke seni bina pengkomputeran awan dan sistem perisian masa depan.
        </p>
      </div>

      {/* Year Selector Tabs / Nav */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {timelineData.milestones.map((m) => {
          const isSelected = selectedMilestone.year === m.year;
          return (
            <button
              key={m.year}
              onClick={() => setSelectedMilestone(m)}
              className={`text-left p-8 border transition-all duration-300 relative ${
                isSelected
                  ? "bg-[#FAF6EE] border-burgundy shadow-lg shadow-burgundy/5"
                  : "bg-white/60 border-[#E5DDD0] hover:border-stone-400 opacity-80 hover:opacity-100"
              }`}
            >
              {isSelected && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-burgundy" />
              )}
              <div className="flex items-center justify-between mb-4">
                <span className="font-editorial-display text-4xl md:text-5xl font-black text-ink">
                  {m.year}
                </span>
                <div className="w-10 h-10 rounded-full bg-burgundy/10 flex items-center justify-center">
                  {getIcon(m.icon)}
                </div>
              </div>
              <h3 className="font-editorial-display text-xl font-bold uppercase tracking-tight text-ink mb-1">
                {m.title}
              </h3>
              <p className="text-xs uppercase tracking-micro text-burgundy font-semibold">
                {m.category}
              </p>
            </button>
          );
        })}
      </div>

      {/* Detailed Milestone Panel */}
      <div className="bg-[#FAF6EE] border border-[#E5DDD0] p-8 md:p-14 shadow-sm">
        <div className="max-w-4xl">
          <div className="flex items-center space-x-3 mb-4">
            <span className="font-editorial-display text-2xl font-bold text-burgundy">
              {selectedMilestone.year}
            </span>
            <span className="w-8 h-[1px] bg-stone" />
            <span className="text-xs uppercase tracking-ultra-wide text-ink-muted font-semibold">
              {selectedMilestone.category}
            </span>
          </div>

          <h3 className="font-editorial-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-ink mb-6">
            {selectedMilestone.title}
          </h3>

          <p className="text-base md:text-lg text-ink-body leading-relaxed mb-8">
            {selectedMilestone.description}
          </p>

          <div className="space-y-3 mb-10">
            <h4 className="text-xs uppercase tracking-ultra-wide text-ink-muted font-bold">
              Sorotan Pencapaian & Falsafah:
            </h4>
            <ul className="space-y-2">
              {selectedMilestone.details.map((detail, idx) => (
                <li key={idx} className="flex items-start space-x-3 text-sm text-ink-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-burgundy mt-2 flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-ultra-wide text-ink-muted font-bold mb-3">
              Bidang Penguasaan:
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {selectedMilestone.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 bg-[#EFE8DC] border border-[#E5DDD0] text-xs font-editorial-sans tracking-wide text-ink uppercase font-medium rounded-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
