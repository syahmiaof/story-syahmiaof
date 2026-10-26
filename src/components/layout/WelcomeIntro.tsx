"use client";

import { useCallback, useEffect, useRef } from "react";
import gsap from "gsap";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { locale } from "@/data/locales";

export default function WelcomeIntro({ onDone }: { onDone: () => void }) {
  const { language } = useLanguage();
  const label = locale[language].welcome;
  const overlay = useRef<HTMLDivElement>(null);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const finishing = useRef(false);
  const finish = useCallback(() => {
    const node = overlay.current;
    if (!node || finishing.current) return;
    finishing.current = true;
    if (timer.current) clearTimeout(timer.current);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.to(node, {
      yPercent: -100,
      duration: reduced ? .2 : 1.05,
      ease: "power4.inOut",
      onComplete: onDone,
    });
  }, [onDone]);

  useEffect(() => {
    const node = overlay.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const scoped = gsap.utils.selector(node);
    const timeline = gsap.timeline();
    if (reduced) {
      gsap.set(scoped(".welcome-mark, .welcome-kicker, .welcome-word, .welcome-action, .welcome-orbit"), { clearProps: "all" });
    } else {
      timeline.fromTo(scoped(".welcome-mark"), { opacity: 0, y: 10, letterSpacing: ".42em" }, { opacity: 1, y: 0, letterSpacing: ".26em", duration: .75, ease: "power3.out" })
        .fromTo(scoped(".welcome-kicker"), { opacity: 0, x: -14 }, { opacity: 1, x: 0, duration: .55, ease: "power2.out" }, "-=.3")
        .fromTo(scoped(".welcome-word"), { yPercent: 115, opacity: 0, rotateX: -25 }, { yPercent: 0, opacity: 1, rotateX: 0, duration: .8, stagger: .045, ease: "power4.out" }, "-=.18")
        .fromTo(scoped(".welcome-action"), { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: .45, ease: "power2.out" }, "-=.24")
        .fromTo(scoped(".welcome-orbit"), { opacity: 0, scale: .82 }, { opacity: 1, scale: 1, duration: 1.4, ease: "power3.out" }, 0);
    }
    const orbitTween = reduced ? null : gsap.to(scoped(".welcome-orbit-spin"), { rotation: 360, duration: 46, repeat: -1, ease: "none", transformOrigin: "50% 50%" });
    timer.current = setTimeout(finish, 5000);
    return () => {
      timeline.kill(); orbitTween?.kill();
      if (timer.current) clearTimeout(timer.current);
    };
  }, [finish]);

  const words = label.question.split(" ");
  return <div ref={overlay} className="welcome-overlay" role="dialog" aria-modal="true" aria-label={label.question}>
    <span className="welcome-coordinate">SYAHMIAOF <i /> 01 — 05</span>
    <div className="welcome-orbit" aria-hidden="true"><div className="welcome-orbit-spin"><i/><i/><i/><i/></div><span className="welcome-core">✳</span></div>
    <div className="welcome-content">
      <span className="welcome-mark">{label.eyebrow}</span>
      <p className="welcome-kicker">{label.seconds}</p>
      <h1 className="welcome-title" aria-label={label.question}>{words.map((word, index) => <span className="welcome-word-wrap" key={`${word}-${index}`}><span className="welcome-word">{word}</span>{index < words.length - 1 ? " " : ""}</span>)}</h1>
      <div className="welcome-actions"><button className="welcome-action" onClick={finish}>{label.enter}<span aria-hidden="true"> ↗</span></button><button className="welcome-skip" onClick={finish}>{label.skip}</button></div>
    </div>
    <span className="welcome-footnote">A PERSONAL STORY, IN MOTION</span>
    <div className="welcome-progress" aria-hidden="true"><span /></div>
  </div>;
}
