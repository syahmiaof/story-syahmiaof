"use client";

import React, { useState } from "react";
import { notesData, ReflectionNote } from "@/data/notes";
import { ArrowUpRight, BookOpen, X } from "lucide-react";

export default function NotesGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("SEMUA");
  const [activeNote, setActiveNote] = useState<ReflectionNote | null>(null);

  const filteredNotes =
    selectedCategory === "SEMUA"
      ? notesData.notes
      : notesData.notes.filter((n) => n.category === selectedCategory);

  return (
    <section className="py-24 max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16">
      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-3 mb-12 border-b border-[#281D1A] pb-6">
        {notesData.categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 text-xs uppercase tracking-micro font-medium transition-all rounded-sm border ${
              selectedCategory === cat
                ? "bg-[#650A14] border-[#94101E] text-white shadow-lg shadow-burgundy/20"
                : "bg-[#0E0908] border-[#281D1A] text-stone-400 hover:border-stone-600 hover:text-stone-200"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredNotes.map((note) => (
          <div
            key={note.id}
            onClick={() => setActiveNote(note)}
            className="group relative bg-[#140E0C] border border-[#281D1A] p-8 transition-all duration-300 hover:border-[#650A14]/80 hover:shadow-2xl hover:shadow-burgundy/10 cursor-pointer flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-editorial-display text-2xl font-bold text-[#A81320]">
                  {note.tag}
                </span>
                <span className="text-[11px] tracking-micro uppercase px-2 py-0.5 bg-[#221614] border border-[#3A2420] text-stone-300 rounded-sm">
                  {note.category}
                </span>
              </div>

              <h3 className="font-editorial-display text-xl md:text-2xl font-bold uppercase tracking-tight text-stone-100 mb-3 group-hover:text-[#C41C2C] transition-colors">
                {note.title}
              </h3>
              <p className="text-xs text-stone-400 mb-4 flex items-center gap-2">
                <span>{note.date}</span>
                <span>&bull;</span>
                <span>{note.readTime} bacaan</span>
              </p>
              <p className="text-sm text-stone-300 leading-relaxed line-clamp-3">
                {note.excerpt}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#281D1A] flex items-center justify-between">
              <span className="text-xs uppercase tracking-micro font-semibold text-stone-400 group-hover:text-stone-200 transition-colors">
                Baca Catatan
              </span>
              <div className="w-8 h-8 rounded-full border border-stone-700 flex items-center justify-center group-hover:border-[#650A14] group-hover:bg-[#650A14] group-hover:text-white transition-all">
                <ArrowUpRight size={16} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Note Detail Modal */}
      {activeNote && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveNote(null)}
        >
          <div
            className="relative w-full max-w-2xl bg-[#0E0908] border border-[#3A2420] p-8 md:p-12 shadow-2xl text-stone-100 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveNote(null)}
              className="absolute top-6 right-6 p-2 rounded-full hover:bg-stone-800 transition-colors text-stone-400 hover:text-white"
              aria-label="Tutup Dialog"
            >
              <X size={22} />
            </button>

            <div className="flex items-center space-x-3 mb-4">
              <span className="font-editorial-display text-xl font-bold text-[#A81320]">
                {activeNote.tag}
              </span>
              <span className="w-6 h-[1px] bg-stone-700" />
              <span className="text-xs uppercase tracking-ultra-wide text-stone-400">
                {activeNote.category}
              </span>
            </div>

            <h3 className="font-editorial-display text-3xl md:text-4xl font-bold uppercase tracking-tight text-white mb-2">
              {activeNote.title}
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              {activeNote.date} &bull; {activeNote.readTime} masa bacaan
            </p>

            <div className="space-y-4 text-stone-300 text-base leading-relaxed mb-8">
              {activeNote.body.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>

            <div className="border-l-2 border-[#A81320] pl-4 py-3 bg-[#1A1210]/60">
              <p className="text-xs uppercase tracking-ultra-wide text-stone-400 font-bold mb-1">
                Intipati Refleksi:
              </p>
              <p className="italic font-editorial-sub text-lg text-stone-200">
                &ldquo;{activeNote.keyTakeaway}&rdquo;
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
