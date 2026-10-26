"use client";

import React, { useEffect, useRef, useState } from "react";
import { projectsData, Project } from "@/data/projects";
import { ArrowUpRight, Check, X } from "lucide-react";
import { locale } from "@/data/locales";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { projectLocales } from "@/data/project-locales";

export default function ProjectGallery() {
  const { language } = useLanguage();
  const ui = locale[language].projectUi;
  const action = locale[language].actions;
  const [selectedCategory, setSelectedCategory] = useState<string>("Semua");
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const activeCopy = activeProject ? projectLocales[language][activeProject.id] : null;

  useEffect(() => {
    if (!activeProject) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => { if (event.key === "Escape") setActiveProject(null); };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    closeButton.current?.focus();
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener("keydown", closeOnEscape); };
  }, [activeProject]);

  const filteredProjects =
    selectedCategory === "Semua"
      ? projectsData.projects
      : projectsData.projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 scroll-mt-20">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#281D1A] pb-8">
        <div>
          <span className="text-xs uppercase tracking-ultra-wide text-stone-400 font-semibold block mb-2">
            {ui.kicker}
          </span>
          <h2 className="font-editorial-display text-3xl md:text-5xl uppercase font-bold text-stone-100 leading-snug py-1">
            {ui.title}
          </h2>
        </div>
        <p className="text-sm font-editorial-sans tracking-wide text-stone-400 max-w-md mt-4 md:mt-0">
          {ui.intro}
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-3 mb-12">
        {projectsData.categories.map((cat, index) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 text-xs uppercase tracking-micro font-medium transition-all rounded-sm border ${
              selectedCategory === cat
                ? "bg-[#650A14] border-[#94101E] text-white shadow-lg shadow-burgundy/20"
                : "bg-[#0E0908] border-[#281D1A] text-stone-400 hover:border-stone-600 hover:text-stone-200"
            }`}
          >
            {ui.categories[index]}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => {
          const copy = projectLocales[language][project.id];
          const categoryIndex = projectsData.categories.slice(1).indexOf(project.category) + 1;
          return (
          <div
            key={project.id}
            onClick={() => setActiveProject(project)}
            onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setActiveProject(project); } }}
            role="button"
            tabIndex={0}
            aria-label={`${ui.detail}: ${project.title}`}
            className="group relative bg-[#140E0C] border border-[#281D1A] p-8 md:p-10 transition-all duration-300 hover:border-[#650A14]/80 hover:shadow-2xl hover:shadow-burgundy/10 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-editorial-display text-2xl font-bold text-[#A81320]">
                  {project.tag}
                </span>
                <span className="text-xs tracking-micro uppercase px-2.5 py-1 bg-[#221614] border border-[#3A2420] text-stone-300 rounded-sm">
                  {ui.categories[categoryIndex] ?? copy.category}
                </span>
              </div>

              <h3 className="font-editorial-display text-2xl md:text-3xl font-bold uppercase tracking-tight text-stone-100 mb-2 group-hover:text-[#C41C2C] transition-colors">
                {project.title}
              </h3>
              <p className="text-xs uppercase tracking-micro text-[#A81320] font-semibold mb-4">
                {copy.subtitle}
              </p>
              <p className="text-sm text-stone-300 leading-relaxed mb-6">
                {copy.description}
              </p>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] uppercase tracking-wide px-2.5 py-1 bg-[#1A1210] border border-[#281D1A] text-stone-400 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#281D1A] flex items-center justify-between">
              <span className="text-xs uppercase tracking-micro font-semibold text-stone-400 group-hover:text-stone-200 transition-colors">
                {ui.detail}
              </span>
              <div className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center group-hover:border-[#650A14] group-hover:bg-[#650A14] group-hover:text-white transition-all">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
          );
        })}
      </div>

      {/* Project Detail Modal */}
      {activeProject && (
          <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveProject(null)}
            role="presentation"
        >
          <div
            className="relative w-full max-w-2xl bg-[#0E0908] border border-[#3A2420] p-8 md:p-12 shadow-2xl text-stone-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-dialog-title"
              tabIndex={-1}
          >
            <button
              ref={closeButton}
              onClick={() => setActiveProject(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-800 transition-colors text-stone-400 hover:text-white"
              aria-label={ui.close}
            >
              <X size={22} />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <span className="font-editorial-display text-xl font-bold text-[#A81320]">
                {activeProject.tag}
              </span>
              <span className="w-6 h-[1px] bg-stone-700" />
              <span className="text-xs uppercase tracking-ultra-wide text-stone-400">
                {activeCopy?.category}
              </span>
            </div>

            <h3 id="project-dialog-title" className="font-editorial-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-2">
              {activeProject.title}
            </h3>
            <p className="text-sm uppercase tracking-micro text-[#A81320] font-semibold mb-6">
              {activeCopy?.subtitle}
            </p>

            <p className="text-stone-300 text-base leading-relaxed mb-8">
              {activeCopy?.description}
            </p>

            <div className="space-y-4 mb-8">
              <h4 className="text-xs uppercase tracking-ultra-wide text-stone-400 font-bold">
                {action.features}:
              </h4>
              <ul className="space-y-2.5">
                {activeCopy?.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-stone-300">
                    <Check size={16} className="text-[#A81320] mt-0.5 flex-shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-ultra-wide text-stone-400 font-bold mb-3">
                {action.stack}:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeProject.stack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-[#1A1210] border border-[#3A2420] text-xs text-stone-200 rounded-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
