"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import ReferencePage, { type ReferenceRoute } from "@/components/editorial/ReferencePage";
import Navbar from "@/components/layout/Navbar";
import SiteFooter from "@/components/layout/SiteFooter";
import WelcomeIntro from "@/components/layout/WelcomeIntro";
import ParticleField from "@/components/visual/ParticleField";

const sections: ReferenceRoute[] = ["utama", "kisah", "perjalanan", "karya", "catatan"];
const pathMap: Record<string, ReferenceRoute> = { "/": "utama", "/kisah": "kisah", "/perjalanan": "perjalanan", "/karya": "karya", "/catatan": "catatan" };

export default function PortfolioPage() {
  const path = usePathname();
  const initial = pathMap[path] ?? "utama";
  const [active, setActive] = useState<ReferenceRoute>(initial);
  const [intro, setIntro] = useState(path === "/");
  const [ready, setReady] = useState(false);
  const dark = active === "karya" || active === "catatan";
  const finishIntro = useCallback(() => {
    try { window.sessionStorage.setItem("syahmiaof-welcome-v3-seen", "1"); } catch {}
    setIntro(false);
  }, []);

  useEffect(() => {
    let seen = false;
    try { seen = window.sessionStorage.getItem("syahmiaof-welcome-v3-seen") === "1"; } catch {}
    setIntro(path === "/" && !seen);
    setReady(true);
  }, [path]);

  useEffect(() => {
    if (!ready || intro) return;
    const target = document.getElementById(initial);
    if (target && initial !== "utama") {
      const alignSection = () => {
        const top = target.getBoundingClientRect().top + window.scrollY - 76;
        window.scrollTo({ top, behavior: "instant" });
      };
      const timer = window.setTimeout(() => requestAnimationFrame(() => requestAnimationFrame(alignSection)), 120);
      return () => window.clearTimeout(timer);
    }
  }, [initial, intro, ready]);

  useEffect(() => {
    const nodes = sections.map(id => document.getElementById(id)).filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(entry => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id as ReferenceRoute);
    }, { rootMargin: "-24% 0px -55% 0px", threshold: [0, .15, .35, .6] });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const sectionList = useMemo(() => sections, []);
  return <div className="portfolio-shell">
    <ParticleField />
    <Navbar theme={dark ? "dark" : "light"} onePage activeSection={active} />
    {sectionList.map(route => <section className={`portfolio-section section-${route}`} id={route} key={route}><ReferencePage route={route} onePage /></section>)}
    <SiteFooter />
    {intro && <WelcomeIntro onDone={finishIntro} />}
  </div>;
}
