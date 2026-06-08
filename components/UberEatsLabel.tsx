"use client";

import { useLanguage } from "@/context/LanguageContext";

// Renders "Order on Uber Eats" with official Uber Eats brand colors.
// prefix = "Order on" / "Ordenar en" — injected by parent so this stays reusable.
export default function UberEatsLabel({ prefix }: { prefix?: string }) {
  const { lang } = useLanguage();
  const pre = prefix ?? (lang === "es" ? "Ordenar en" : "Order on");
  return (
    <span className="inline-flex items-center gap-1.5">
      <span>{pre}</span>
      <span className="inline-flex items-baseline gap-0">
        <span className="font-extrabold text-white">Uber</span>
        <span className="font-extrabold" style={{ color: "#06C167" }}>Eats</span>
      </span>
    </span>
  );
}
