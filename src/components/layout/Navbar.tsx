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

  useEffect(() => {
    const target = links.current[activeIndex];
    const nav = target?.parentElement;
    if (!target || !nav || !indicator.current) return;
    gsap.to(indicator.current, { x: target.offsetLeft, width: target.offsetWidth, duration: .48, ease: "power3.out" });
  }, [activeIndex, language, open]);

  return <header className={`reference-nav portfolio-nav ${theme === "dark" ? "dark-nav" : ""}`}>
    <Link className="reference-brand" href="/#utama" onClick={() => setOpen(false)}>SYAHMIAOF</Link>
    <nav aria-label="Navigasi utama" className={open ? "nav-links nav-open" : "nav-links"}>
      <span ref={indicator} className="nav-indicator" aria-hidden="true" />
      {ids.map((id, i) => <Link ref={node => { if (node) links.current[i] = node; }} href={`/#${id}`} key={id} onClick={() => setOpen(false)} aria-current={activeSection === id ? "location" : undefined}>{locale[language].nav[i]}</Link>)}
    </nav>
    <div className="nav-tools">
      <div className="language-control" role="group" aria-label="Pilih bahasa" data-language={language}>
        {(["bm", "en", "zh"] as Language[]).map((lang, i) => <button key={lang} type="button" onClick={() => setLanguage(lang)} aria-pressed={language === lang} aria-label={["Bahasa Melayu", "English", "中文"][i]}>{["BM", "EN", "中文"][i]}</button>)}
      </div>
      <button className={`menu-toggle ${open ? "is-open" : ""}`} onClick={() => setOpen(!open)} aria-label={open ? "Tutup menu" : "Buka menu"} aria-expanded={open}><span/><span/><span/></button>
    </div>
  </header>;
}
