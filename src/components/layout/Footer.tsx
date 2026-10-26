"use client";

import React from "react";
import Link from "next/link";
import { navItems } from "@/data/navigation";
import { ArrowUp } from "lucide-react";

interface FooterProps {
  theme?: "light" | "dark";
}

export default function Footer({ theme = "light" }: FooterProps) {
  const isDark = theme === "dark";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className={`border-t transition-colors duration-300 py-16 px-6 md:px-12 lg:px-16 ${
        isDark
          ? "bg-[#060302] border-[#281D1A] text-stone-300"
          : "bg-[#F7F3EB] border-[#E5DDD0] text-ink-body"
      }`}
    >
      <div className="max-w-[1720px] mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
        <div className="space-y-4 max-w-xl">
          <Link
            href="/"
            className={`font-editorial-display text-2xl font-bold tracking-ultra-wide uppercase block ${
              isDark ? "text-stone-100" : "text-ink"
            }`}
          >
            SYAHMIAOF
          </Link>
          <p className="font-editorial-sub italic text-base opacity-80">
            &ldquo;Aku tak bermula dengan segala-galanya. Aku cuma ada impian, keberanian untuk mencuba, dan satu keputusan — untuk tidak berhenti membina masa depan aku sendiri.&rdquo;
          </p>
          <p className="text-xs uppercase tracking-micro opacity-60">
            The Story of Becoming &bull; Editorial Portfolio &copy; {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-12">
          <nav className="flex flex-wrap gap-6 text-sm tracking-wide">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors ${
                  isDark ? "hover:text-white" : "hover:text-burgundy"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={scrollToTop}
            className={`flex items-center gap-2 text-xs uppercase tracking-micro font-medium py-2 px-4 rounded-sm border transition-all ${
              isDark
                ? "border-[#281D1A] hover:border-stone-500 hover:text-white"
                : "border-[#E5DDD0] hover:border-burgundy hover:text-burgundy"
            }`}
            aria-label="Kembali ke atas"
          >
            <span>Atas</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
