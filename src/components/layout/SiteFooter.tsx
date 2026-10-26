"use client";

import { ArrowUpRight, Mail, MessageCircle } from "lucide-react";
import { locale } from "@/data/locales";
import { useLanguage } from "@/components/layout/LanguageProvider";

export default function SiteFooter() {
  const { language } = useLanguage();
  const copy = locale[language].actions;
  return <footer className="site-footer" id="hubungi">
    <div className="footer-topline"><span>SYAHMIAOF</span><span>THE STORY OF BECOMING</span></div>
    <div className="footer-main">
      <div className="footer-about"><span className="footer-kicker">{copy.who}</span><h2>Who am I<span>?</span></h2><p>{copy.footer}</p><a href="#utama" className="footer-link">{copy.top}<ArrowUpRight size={15}/></a></div>
      <div className="footer-contact"><span className="footer-kicker">{copy.contact}</span>
        <a href="https://wa.me/60107965236" target="_blank" rel="noreferrer"><MessageCircle size={17}/><span>010 796 5236</span><ArrowUpRight size={14}/></a>
        <a href="mailto:hello@syahmiaof.my"><Mail size={17}/><span>hello@syahmiaof.my</span><ArrowUpRight size={14}/></a>
        <a href="https://syahmiaof.my" target="_blank" rel="noreferrer"><span className="footer-webmark">↗</span><span>syahmiaof.my</span><ArrowUpRight size={14}/></a>
      </div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} SYAHMIAOF · {copy.copyright}</span><span>BUILT WITH PURPOSE <i /></span></div>
  </footer>;
}
