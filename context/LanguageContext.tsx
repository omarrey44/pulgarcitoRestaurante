"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import type { Language } from "@/data/translations";

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("en");

  // Persist language choice across visits.
  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("pulgarcito-lang") : null;
    if (stored === "en" || stored === "es") {
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("pulgarcito-lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const toggle = () => setLang((prev) => (prev === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
