"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { locale, type Language } from "@/data/locales";
import { useLanguage } from "@/components/layout/LanguageProvider";

const ids = ["utama", "kisah", "perjalanan", "karya", "catatan"] as const;
export default function Navbar({ theme = "light", onePage = false, activeSection = "utama" }: { theme?: "light" | "dark"; onePage?: boolean; activeSection?: string }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();
  const links = useRef<HTMLAnchorElement[]>([]);
  const indicator = useRef<HTMLSpanElement>(null);
  const activeIndex = Math.max(0, ids.indexOf((onePage ? activeSection : path.split("/").filter(Boolean)[0] || "utama") as typeof ids[number]));

  // Lock body scroll when mobile menu is open to prevent any background bleed/jump
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const target = links.current[activeIndex];
    const nav = target?.parentElement;
    if (!target || !nav || !indicator.current) return;
    gsap.to(indicator.current, { x: target.offsetLeft, width: target.offsetWidth, duration: .48, ease: "power3.out" });
  }, [activeIndex, language, open]);

  return <header className={`reference-nav portfolio-nav ${theme === "dark" ? "dark-nav" : ""} ${open ? "menu-is-open" : ""}`}>
    <Link className="reference-brand" href="/#utama" onClick={() => setOpen(false)}>SYAHMIAOF</Link>
    <nav aria-label="Navigasi utama" className={open ? "nav-links nav-open" : "nav-links"}>
      <span ref={indicator} className="nav-indicator" aria-hidden="true" />
      {ids.map((id, i) => (
        <Link
          ref={node => { if (node) links.current[i] = node; }}
          href={`/#${id}`}
          key={id}
          onClick={() => setOpen(false)}
          aria-current={activeSection === id ? "location" : undefined}
        >
          <span className="nav-item-num" aria-hidden="true">0{i + 1}</span>
          <span className="nav-item-label">{locale[language].nav[i]}</span>
          <span className="nav-item-arrow" aria-hidden="true">⟶</span>
        </Link>
      ))}
      <div className="mobile-nav-footer">
        <span className="mobile-nav-tagline">SYAHMIAOF — THE STORY OF BECOMING</span>
        <div className="mobile-nav-contact">
          <a href="https://wa.me/60107965236" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>WhatsApp ↗</a>
          <a href="mailto:hello@syahmiaof.my" onClick={() => setOpen(false)}>hello@syahmiaof.my</a>
        </div>
      </div>
    </nav>
    <div className="nav-tools">
      <div className="language-control" role="group" aria-label="Pilih bahasa" data-language={language}>
        {(["bm", "en", "zh"] as Language[]).map((lang, i) => <button key={lang} type="button" onClick={() => setLanguage(lang)} aria-pressed={language === lang} aria-label={["Bahasa Melayu", "English", "中文"][i]}>{["BM", "EN", "中文"][i]}</button>)}
      </div>
      <button className={`menu-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open}><span/><span/><span/></button>
    </div>
  </header>;
}
