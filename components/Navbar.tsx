"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, UtensilsCrossed } from "lucide-react";
import UberEatsLabel from "./UberEatsLabel";
import { useLanguage } from "@/context/LanguageContext";
import { translations as tr } from "@/data/translations";
import { restaurant } from "@/data/restaurant";
import LanguageToggle from "./LanguageToggle";

const links = [
  { id: "home", href: "#home" },
  { id: "menu", href: "#menu" },
  { id: "favorites", href: "#favorites" },
  { id: "about", href: "#about" },
  { id: "reviews", href: "#reviews" },
  { id: "location", href: "#location" },
] as const;

export default function Navbar() {
  const { lang } = useLanguage();
  const [open, setOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-cream/95 shadow-warm-sm backdrop-blur-md">
      {/* Single row: logo left — nav right */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        {/* Logo — left */}
        <a href="#home" className="shrink-0" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"
            alt="Pulgarcito Family Restaurant"
            width={160}
            height={160}
            className="h-[104px] w-auto object-contain"
            priority
          />
        </a>

        {/* Nav links + actions — right, visually separated */}
        <div className="hidden items-center gap-1 lg:flex">
          <ul className="flex items-center gap-1 border-r border-burgundy/15 pr-4 mr-4">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="group relative px-3 py-2 text-sm font-semibold text-charcoal transition-colors hover:text-ember"
                >
                  {tr.nav[link.id][lang]}
                  <span className="absolute inset-x-3 bottom-0 h-0.5 origin-left scale-x-0 rounded-full bg-ember transition-transform duration-300 group-hover:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          <LanguageToggle />
          <a
            href={restaurant.uberEats}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary ml-2 !px-5 !py-2.5 text-sm"
          >
            <UtensilsCrossed className="h-4 w-4" />
            <UberEatsLabel prefix={lang === "es" ? "Ordenar en" : "Order on"} />
          </a>
        </div>

        {/* Mobile: hamburger only — language toggle lives inside the menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            ref={hamburgerRef}
            className="rounded-full p-2 text-burgundy"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-burgundy/10 bg-cream/98 backdrop-blur-md lg:hidden"
            id="mobile-menu"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {links.map((link, i) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-xl px-4 py-3 font-semibold text-charcoal transition-colors hover:bg-burgundy/5 hover:text-ember"
                  >
                    {tr.nav[link.id][lang]}
                  </a>
                </motion.li>
              ))}
              <li className="mt-2 flex items-center justify-between gap-3 px-4">
                <LanguageToggle />
                <a
                  href={restaurant.uberEats}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary !px-5 !py-2.5 text-sm"
                >
                  <UberEatsLabel prefix={lang === "es" ? "Ordenar en" : "Order on"} />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
