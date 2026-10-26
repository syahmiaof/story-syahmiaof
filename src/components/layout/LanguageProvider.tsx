"use client";

import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Language } from "@/data/locales";

const LanguageContext = createContext<{ language: Language; setLanguage: (value: Language) => void }>({ language: "bm", setLanguage: () => undefined });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("bm");
  useEffect(() => {
    const stored = window.localStorage.getItem("syahmiaof-language");
    if (stored === "bm" || stored === "en" || stored === "zh") {
      setLanguage(stored);
      document.documentElement.lang = stored === "zh" ? "zh-Hans" : stored;
    }
  }, []);
  const updateLanguage = (value: Language) => {
    setLanguage(value);
    window.localStorage.setItem("syahmiaof-language", value);
    document.documentElement.lang = value === "zh" ? "zh-Hans" : value;
  };
  return <LanguageContext.Provider value={{ language, setLanguage: updateLanguage }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() { return useContext(LanguageContext); }
