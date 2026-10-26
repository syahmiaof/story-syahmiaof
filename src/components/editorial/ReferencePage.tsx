"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProjectGallery from "@/components/content/ProjectGallery";
import { storyData } from "@/data/story";
import { timelineData } from "@/data/timeline";
import { notesData } from "@/data/notes";
import { useReferenceMotion } from "@/components/motion/useReferenceMotion";
import { useLanguage } from "@/components/layout/LanguageProvider";
import { locale } from "@/data/locales";

export type ReferenceRoute = "utama" | "kisah" | "perjalanan" | "karya" | "catatan";
const copy = {
  utama: { eyebrow: ["MY STORY", "MY JOURNEY"], title: ["INI BARU", "PERMULAAN."], intro: "Aku tak bermula dengan segala-galanya. Aku cuma ada impian, keberanian untuk mencuba, dan satu keputusan — untuk tidak berhenti membina masa depan aku sendiri." },
  kisah: { eyebrow: ["CHAPTER 01", "MY STORY"], title: ["SEMUANYA", "ADA CERITA."], intro: "Aku bukan bermula dengan segalanya. Aku bermula dengan persoalan, dengan jatuh dan bangun, dengan mimpi yang tak pernah padam. Setiap langkah, setiap luka, setiap pertemuan — semuanya membawa aku ke sini." },
  perjalanan: { eyebrow: ["CHAPTER 02", "MY JOURNEY"], title: ["AKU MASIH", "MELANGKAH."], intro: "Setiap langkah membawa aku lebih dekat kepada versi diri yang aku impikan. Aku terus belajar, membina, dan meneroka peluang baharu — dengan disiplin, rasa ingin tahu, dan keyakinan untuk masa depan." },
  karya: { eyebrow: ["03", "THE CREATIONS"], title: ["KARYA"], intro: "Idea yang bermula di dalam fikiran, kini menjadi website, sistem, automasi dan lebih banyak lagi." },
  catatan: { eyebrow: ["05", "THE REFLECTIONS"], title: ["CATATAN"], intro: "Sebuah ruang untuk fikir, catat, dan kembali mengingat — tentang hidup, ilmu, perjuangan, dan masa depan." },
};
const storyExcerpts = [
  "Di sinilah semuanya bermula. Tentang mana aku datang, siapa aku sebelum segala ini, dan nilai yang membentuk diriku hari ini.",
  "Bukan semuanya mudah. Ada fasa jatuh, kecewa dan ragu, tetapi di situlah aku belajar erti ketahanan, dan sebab kenapa aku tak berhenti.",
  "Setiap perjalanan ada detik yang mengubah segalanya. Di sini aku berkongsi momen-momen penting yang membentuk siapa aku sekarang.",
];
const timelineExcerpts = [
  "Bermula dengan persoalan, mencari arah, dan membina asas disiplin dalam kehidupan seharian.",
  "Melangkah ke fasa baharu dengan lebih jelas. Meneroka teknologi, memperluas kemahiran, dan membuka lebih banyak peluang.",
  "Terus berkembang, membina projek yang memberi nilai, dan melangkah ke arah impak yang lebih besar.",
];
const noteExcerpts = [
  "Luahan fikiran tentang hidup, ilmu, teknologi dan dunia sekeliling.",
  "Nilai, prinsip dan pengajaran yang aku pelajari sepanjang perjalanan.",
  "Untuk siapa yang sedang berjuang, terus melangkah. Kita mampu.",
  "Cita-cita, perancangan dan visi masa depan yang masih dalam perjalanan.",
];
type Reading = { title: string; paragraphs: readonly string[]; quote?: string };

export default function ReferencePage({ route, onePage = false }: { route: ReferenceRoute; onePage?: boolean }) {
  const { language } = useLanguage();
  const words = locale[language];
  const content = words.pages[route];
  const dark = route === "karya" || route === "catatan";
  const [reading, setReading] = useState<Reading | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const root = useRef<HTMLDivElement>(null);
  useReferenceMotion(root, route);
  useEffect(() => {
    if (reading) dialog.current?.showModal();
    else dialog.current?.close();
  }, [reading]);
  const readStory = (i: number) => setReading({title:words.stories[i].title, paragraphs:words.stories[i].body, quote:storyData.chapters[i].quote});
  const readMilestone = (i: number) => {const item=timelineData.milestones[i]; setReading({title:`${item.year} — ${words.journey[i].title}`, paragraphs:words.journey[i].body});};
  const readNote = (i: number) => {setReading({title:words.notes[i].title,paragraphs:words.notes[i].body});};
  return (
    <div ref={root} className={`reference-page reference-${route} ${dark ? "reference-dark" : "reference-light"}`}>
      {!onePage && <Navbar theme={dark ? "dark" : "light"} />}
      <main>
        <div className="reference-composition">
          <section className="reference-hero" aria-label={content.title.join(" ")}>
            <div className="scene-layer" aria-hidden="true">
              <Image src={`/assets/generated/${route}-scene.png`} alt="" fill sizes="100vw" priority />
            </div>
            <div className="reference-copy">
              <div className="reference-eyebrow"><span>{content.eyebrow[0]}</span><i aria-hidden="true" /><span>{content.eyebrow[1]}</span></div>
              <h1 className="reference-title font-editorial-display">{content.title.map((line,i)=><span className="headline-line" key={line}><span>{line}{dark && <b className="sr-only">.</b>}</span>{i===0 && content.title.length>1 && <span className="sr-only"> </span>}</span>)}</h1>
              {dark && <p className="reference-subtitle">{content.subtitle}</p>}
              <p className="reference-intro">{content.intro}</p>
              <div className="reference-actions">
                {route === "utama" && <><a className="reference-button primary" href="#kisah">{content.cta[0]} <span>⟶</span></a><a className="reference-button" href="#perjalanan">{content.cta[1]}</a></>}
                {route === "kisah" && <><a className="reference-button primary" href="#kisah-stories">{content.cta[0]} <span>⟶</span></a><a className="reference-button" href="#perjalanan">{content.cta[1]}</a></>}
                {route === "perjalanan" && <><a className="reference-button primary" href="#timeline">{content.cta[0]} <span>⟶</span></a><a className="reference-button" href="#timeline">{content.cta[1]}</a></>}
                {route === "karya" && <a className="reference-button" href="#projects">{content.cta[0]} <span>⟶</span></a>}
                {route === "catatan" && <a className="reference-button" href="#catatan-cards">{content.cta[0]} <span>⟶</span></a>}
              </div>
            </div>
            {!dark && <a className="reference-scroll" href={route==="utama"?"#kisah":route==="kisah"?"#kisah-stories":"#timeline"}><span>↓</span> SCROLL UNTUK TEROKA</a>}
            {dark && <div className="reference-progress"><span>{route === "karya" ? "03" : "05"} / 05</span><i /></div>}
            {route === "catatan" && <blockquote className="reference-quote"><span aria-hidden="true">“</span><p>{words.actions.quote}</p><cite>SYAHMIAOF</cite></blockquote>}
          </section>
          {route === "utama" && <section id="kisah-teaser" className="reference-teaser"><Image src="/assets/generated/utama-teaser-art.png" alt="" fill sizes="100vw"/><span className="teaser-number">01<i/></span><a href="#kisah" className="teaser-title font-editorial-display">{words.nav[1].toUpperCase()}</a><p>{words.pages.utama.teaser}</p></section>}
          {(route === "kisah" || route === "perjalanan") && <section id={route==="kisah"?"kisah-stories":"timeline"} className={`reference-modules ${route==="perjalanan"?"milestone-modules":"story-modules"}`}>
            {[0,1,2].map(i=><article className="reference-module" key={i}>
              <div className="module-copy">
                <div className="module-marker">{route==="kisah" && <span>0{i+2}</span>}<i/></div>
                {route==="perjalanan" && <strong className="module-year font-editorial-display">{timelineData.milestones[i].year}</strong>}
                <h2 className={route==="kisah"?"font-editorial-display":""}>{route==="kisah"?words.stories[i].title:words.journey[i].title}</h2>
                <p>{route==="kisah"?words.stories[i].excerpt:words.journey[i].excerpt}</p>
                <button onClick={()=>route==="kisah"?readStory(i):readMilestone(i)}><span>→</span> {words.actions.read}</button>
              </div>
              <div className="module-art"><Image src={`/assets/generated/${route}-module-${i+1}.png`} alt={route==="kisah"?words.stories[i].title:words.journey[i].title} fill sizes="30vw" /></div>
            </article>)}
          </section>}
          {route === "catatan" && <><section id="catatan-cards" className="reference-notes">{notesData.notes.map((note,i)=><article key={note.id} className="reference-note"><Image src={`/assets/generated/catatan-module-${i+1}.png`} alt="" fill sizes="25vw"/><div><span className="note-number">0{i+1}<i/></span><h2 className="font-editorial-display">{words.notes[i].title}</h2><p>{words.notes[i].excerpt}</p><button onClick={()=>readNote(i)} aria-label={`${words.actions.read}: ${words.notes[i].title}`}>⟶</button></div></article>)}</section><div className="reference-signoff"><span>SYAHMIAOF <i/> THE STORY OF BECOMING</span><a href="#perjalanan">{words.nav[2].toUpperCase()} ⟶</a></div></>}
        </div>
      {route === "karya" && <ProjectGallery />}
      </main>
      {!onePage && route !== "catatan" && <Footer theme={dark ? "dark" : "light"} />}
      <dialog ref={dialog} className="reference-dialog" onClose={()=>setReading(null)} onClick={e=>{if(e.target===e.currentTarget)setReading(null);}} aria-labelledby="reading-title"><button className="dialog-close" onClick={()=>setReading(null)} aria-label="Tutup Dialog">×</button><h2 id="reading-title">{reading?.title}</h2>{reading?.paragraphs.map((p,i)=><p key={i}>{p}</p>)}{reading?.quote && <blockquote>{reading.quote}</blockquote>}</dialog>
    </div>
  );
}
