"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  theme?: "light" | "dark";
}

export default function Navbar({ theme = "light" }: NavbarProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"BM" | "EN">("BM");

  // Dark mode is active on /karya and /catatan
  const isDark = theme === "dark" || pathname === "/karya" || pathname === "/catatan";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? isDark
              ? "bg-[#060302]/90 backdrop-blur-md border-b border-[#281D1A]/60 py-3 shadow-lg"
              : "bg-[#F7F3EB]/90 backdrop-blur-md border-b border-[#E5DDD0]/70 py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className={`font-editorial-display text-xl md:text-2xl font-bold tracking-ultra-wide uppercase transition-colors duration-200 ${
              isDark ? "text-stone-100 hover:text-burgundy-glow" : "text-ink hover:text-burgundy"
            }`}
          >
            SYAHMIAOF
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative py-1 text-sm tracking-wide font-editorial-sans transition-colors duration-200 ${
                    isActive
                      ? isDark
                        ? "text-stone-100 font-semibold"
                        : "text-ink font-semibold"
                      : isDark
                      ? "text-stone-400 hover:text-stone-200"
                      : "text-ink-muted hover:text-ink"
                  }`}
                >
                  <span>{lang === "BM" ? item.label : item.enLabel}</span>
                  {isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 ${
                        isDark ? "bg-[#94101E]" : "bg-burgundy"
                      }`}
                    />
                  )}
                  {!isActive && (
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[1.5px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                        isDark ? "bg-stone-500" : "bg-stone"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => setLang(lang === "BM" ? "EN" : "BM")}
              className={`text-xs uppercase tracking-micro font-medium transition-colors px-2.5 py-1 border rounded-sm ${
                isDark
                  ? "border-[#281D1A] text-stone-300 hover:border-stone-500 hover:text-white"
                  : "border-[#E5DDD0] text-ink-body hover:border-burgundy hover:text-burgundy"
              }`}
              title="Tukar Bahasa (BM / EN)"
              aria-label="Toggle Language"
            >
              <span className={lang === "BM" ? (isDark ? "text-white font-bold" : "text-burgundy font-bold") : "opacity-60"}>
                BM
              </span>
              <span className="opacity-40 mx-1">/</span>
              <span className={lang === "EN" ? (isDark ? "text-white font-bold" : "text-burgundy font-bold") : "opacity-60"}>
                EN
              </span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`md:hidden p-2 rounded-md transition-colors ${
                isDark ? "text-stone-200 hover:bg-stone-800" : "text-ink hover:bg-stone-200"
              }`}
              aria-label="Buka Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className={`fixed inset-0 z-40 md:hidden flex flex-col justify-center items-center px-8 transition-all duration-300 ${
            isDark ? "bg-[#060302]/98 text-stone-100" : "bg-[#F7F3EB]/98 text-ink"
          }`}
        >
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2"
            aria-label="Tutup Menu"
          >
            <X size={28} />
          </button>
          <div className="flex flex-col space-y-6 text-center">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-editorial-display text-2xl tracking-wide uppercase transition-colors ${
                    isActive
                      ? isDark
                        ? "text-[#A81320] font-bold"
                        : "text-burgundy font-bold"
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  <span className="text-xs opacity-50 mr-2 tracking-widest">{item.tag}</span>
                  {lang === "BM" ? item.label : item.enLabel}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
