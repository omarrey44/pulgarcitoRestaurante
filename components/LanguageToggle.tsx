"use client";

import { useLanguage } from "@/context/LanguageContext";

// EN / ES pill toggle. `light` variant is used over the dark hero before scroll.
export default function LanguageToggle({ light = false }: { light?: boolean }) {
  const { lang, setLang } = useLanguage();

  const base =
    "relative flex items-center rounded-full p-0.5 text-xs font-bold transition-colors";
  const wrapper = light
    ? "bg-white/20 backdrop-blur"
    : "bg-burgundy/10";

  const optionActive = "bg-warm-gradient text-cream shadow-sm";
  const optionIdle = light ? "text-white/80" : "text-burgundy/70";

  return (
    <div className={`${base} ${wrapper}`} role="group" aria-label="Language toggle">
      {(["en", "es"] as const).map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          className={`rounded-full px-3 py-1 uppercase transition-all duration-200 ${
            lang === code ? optionActive : optionIdle
          }`}
        >
          {code}
        </button>
      ))}
    </div>
  );
}
