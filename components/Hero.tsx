"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users, MapPin, Wheat, Music } from "lucide-react";
import UberEatsLabel from "./UberEatsLabel";
import { useLanguage } from "@/context/LanguageContext";
import { translations as tr } from "@/data/translations";
import { restaurant } from "@/data/restaurant";

import type { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 * i, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const { lang } = useLanguage();
  const other = lang === "en" ? "es" : "en";

  // Bottom trust bar — primary label in current language, secondary in the other.
  const trust = [
    { icon: Users, item: tr.hero.trust1 },
    { icon: MapPin, item: tr.hero.trust2 },
    { icon: Wheat, item: tr.hero.trust3 },
    { icon: Music, item: tr.hero.trust4 },
  ];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* Full-bleed background photo (public/images/hero.png) */}
      <Image
        src="/images/hero.png"
        alt="Salvadoran pupusas, soup, and horchata"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark warm-brown overlay (reference look): heavy + low saturation, food stays visible on the right */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#160d08]/95 via-[#241710]/80 to-[#241710]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#160d08]/95 via-transparent to-[#160d08]/55" />
      <div className="absolute inset-0 bg-[#1a100a]/25" />


      {/* 100% Salvadoreño gold seal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
        className="absolute right-6 top-52 z-10 hidden lg:flex xl:right-[44%]"
      >
        <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full border-2 border-amber-300/80 text-center text-amber-200 shadow-warm backdrop-blur-sm">
          <span className="text-[9px] font-semibold uppercase tracking-[0.2em]">
            {tr.hero.sealTop[lang]}
          </span>
          <span className="font-serif text-3xl font-bold leading-none text-amber-100">100%</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em]">
            {tr.hero.sealBottom[lang]}
          </span>
          <Wheat className="mt-1 h-3 w-3 opacity-70" />
        </div>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-40 pt-36 sm:px-8 lg:px-10">
        <div className="max-w-2xl">
          {/* Gold script eyebrow */}
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-serif text-2xl italic sm:text-3xl"
          >
            {/* EN: "Salvadoran" blue · "Flavor" white — ES: "Sabor" white · "Salvadoreño" blue */}
            {lang === "en" ? (
              <>
                <span style={{ color: "#3B82C4" }} className="drop-shadow">Salvadoran</span>
                {" "}
                <span className="text-white drop-shadow">Flavor</span>
              </>
            ) : (
              <>
                <span className="text-white drop-shadow">Sabor</span>
                {" "}
                <span style={{ color: "#3B82C4" }} className="drop-shadow">Salvadoreño</span>
              </>
            )}
          </motion.p>

          {/* Stacked headline */}
          <h1 className="mt-2 font-serif font-bold leading-[0.95] text-cream">
            <motion.span
              custom={1}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="block text-5xl sm:text-6xl lg:text-7xl"
            >
              {tr.hero.word1[lang]}
            </motion.span>
            <motion.span
              custom={2}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="block text-5xl sm:text-6xl lg:text-7xl"
            >
              {tr.hero.word2[lang]}
            </motion.span>
            <motion.span
              custom={3}
              initial="hidden"
              animate="show"
              variants={fadeUp}
              className="inline-flex items-end gap-3 text-5xl text-ember-light sm:text-6xl lg:text-7xl"
            >
              {tr.hero.word3[lang]}
              <Wheat className="mb-2 h-9 w-9 rotate-12 text-amber-300/80" />
            </motion.span>
          </h1>

          {/* small ember underline accent */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-4 flex items-center gap-2"
          >
            <span className="h-0.5 w-16 rounded-full bg-ember" />
            <span className="h-2 w-2 rounded-full bg-ember" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            custom={5}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-5 max-w-xl text-base leading-relaxed text-cream/85 sm:text-lg"
          >
            {tr.hero.subtitle[lang]}
          </motion.p>

          {/* CTAs */}
          <motion.div
            custom={6}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <a href="#menu" className="btn-primary text-base">
              {tr.hero.viewMenu[lang]}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href={restaurant.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-cream/40 bg-burgundy-dark/40 px-7 py-3.5 font-semibold text-cream backdrop-blur transition-all duration-300 hover:bg-cream hover:text-burgundy"
            >
              <UberEatsLabel />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom trust bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute inset-x-0 bottom-0 z-10"
      >
        <div className="mx-auto max-w-7xl px-5 pb-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-amber-300/20 bg-burgundy-dark/70 backdrop-blur-md md:grid-cols-4">
            {trust.map(({ icon: Icon, item }) => (
              <div key={item.en} className="flex items-center gap-3 px-4 py-4">
                <Icon className="h-7 w-7 shrink-0 text-amber-300" strokeWidth={1.5} />
                <div className="leading-tight">
                  <p className="text-sm font-bold uppercase tracking-wide text-amber-100">
                    {item[lang]}
                  </p>
                  <p className="text-xs text-cream/60">{item[other]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
