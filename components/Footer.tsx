"use client";

import Image from "next/image";
import {
  MapPin,
  Phone,
  Clock,
  Home,
  BookOpen,
  Users,
  Heart,
  Star,
  Leaf,
  ArrowRight,
} from "lucide-react";
import { FacebookIcon, InstagramIcon } from "./BrandIcons";
import type { LucideIcon } from "lucide-react";
import UberEatsLabel from "./UberEatsLabel";
import { useLanguage } from "@/context/LanguageContext";
import { translations as tr } from "@/data/translations";
import { restaurant } from "@/data/restaurant";

const exploreLeft: { id: keyof typeof tr.nav; href: string; Icon: LucideIcon }[] = [
  { id: "home", href: "#home", Icon: Home },
  { id: "menu", href: "#menu", Icon: BookOpen },
  { id: "about", href: "#about", Icon: Users },
];
const exploreRight: { id: keyof typeof tr.nav; href: string; Icon: LucideIcon }[] = [
  { id: "favorites", href: "#favorites", Icon: Heart },
  { id: "reviews", href: "#reviews", Icon: Star },
  { id: "location", href: "#location", Icon: MapPin },
];

// ── Sub-components ──────────────────────────────────────────

function SectionHeading({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className={center ? "text-center" : ""}>
      <div className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}>
        <Leaf className="h-4 w-4 text-[#6B9FD4]" strokeWidth={1.5} />
        <h3 className="font-bold tracking-[0.22em] text-white">{children}</h3>
        <Leaf className="h-4 w-4 scale-x-[-1] text-[#6B9FD4]" strokeWidth={1.5} />
      </div>
      <div className={`mt-2 flex items-center gap-2 ${center ? "justify-center" : ""}`}>
        <div className="h-px w-10 bg-[#D4A853]/70" />
        <span className="text-[10px] text-[#D4A853]">◆</span>
        <div className="h-px w-10 bg-[#D4A853]/70" />
      </div>
    </div>
  );
}

function ContactRow({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-[#6B9FD4]">
        {icon}
      </div>
      <div className="pt-0.5">{children}</div>
    </li>
  );
}

function SocialBtn({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white transition hover:bg-white hover:text-[#0F47AF]"
    >
      {children}
    </a>
  );
}

function TikTokIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.98a8.18 8.18 0 004.79 1.53V7.06a4.85 4.85 0 01-1.02-.37z" />
    </svg>
  );
}

function YelpIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M20.16 12.81l-4.23-1.17a.93.93 0 00-.88.26c-.22.23-.3.55-.18.9l1.55 4.11c.14.37.45.64.84.71.39.07.78-.08 1.02-.39l2.68-3.43a.94.94 0 00-.8-1zM12.39 17.1l-.37 4.37a.94.94 0 00.47.98c.33.21.75.22 1.09.03l3.93-2.22a.94.94 0 00.43-1.08l-1.38-3.66a.93.93 0 00-.83-.61.95.95 0 00-.87.49l-2.47 1.7zM7.79 14.58l-4.37.85a.94.94 0 00-.74.65.93.93 0 00.24 1l3.34 2.97c.28.25.68.33 1.04.2.36-.13.61-.44.67-.82l.49-4.38a.93.93 0 00-.67-.47zM9.59 11.3L5.34 9.5a.93.93 0 00-1 .24.94.94 0 000 1.04l2.41 3.75c.2.32.55.5.93.5.05 0 .1 0 .15-.01.42-.06.76-.35.89-.75l1.26-4.26a.94.94 0 00-.39-.91zM12.48 4l-3.15 3.28c-.28.28-.38.69-.26 1.06.12.38.44.65.84.7l4.47.52c.41.05.81-.17 1-.54.19-.37.12-.82-.17-1.11L12.48 4z" />
    </svg>
  );
}

// ── Main Footer ──────────────────────────────────────────────

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Background images — desktop vs mobile */}
      <div className="absolute inset-0">
        <Image
          src="/images/fotter.png"
          fill
          className="hidden object-cover object-top sm:block"
          alt=""
          priority
          sizes="100vw"
        />
        <Image
          src="/images/footerMovil.png"
          fill
          className="block object-cover object-top sm:hidden"
          alt=""
          priority
          sizes="100vw"
        />
        {/* Overlay — ensures text legibility over any background */}
        <div className="absolute inset-0 bg-[#071B6E]/60" />
      </div>

      {/* ── 3-column content ── */}
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-36 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">

          {/* Left — Brand */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/images/logo.png"
              alt="Pulgarcito Family Restaurant"
              width={160}
              height={160}
              className="h-40 w-40 object-contain drop-shadow-md"
            />

            <h2 className="mt-5 font-serif text-[2rem] font-bold leading-none text-white drop-shadow">
              Pulgarcito
            </h2>

            {/* Gold rule */}
            <div className="my-2.5 flex items-center gap-2">
              <div className="h-px w-14 bg-[#D4A853]" />
              <span className="text-[10px] text-[#D4A853]">◆</span>
              <div className="h-px w-14 bg-[#D4A853]" />
            </div>

            <p className="text-[11px] font-bold tracking-[0.3em] text-[#D4A853] uppercase">
              Family Restaurant
            </p>

            <p className="mt-4 max-w-[210px] text-sm italic leading-relaxed text-white/70">
              {tr.footer.tagline[lang]}
            </p>

            {/* Social icons */}
            <div className="mt-6 flex gap-3">
              <SocialBtn href={restaurant.social.facebook} label="Facebook">
                <FacebookIcon className="h-4 w-4" />
              </SocialBtn>
              <SocialBtn href={restaurant.social.instagram} label="Instagram">
                <InstagramIcon className="h-4 w-4" />
              </SocialBtn>
            </div>
          </div>

          {/* Center — Explore (glass card) */}
          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 shadow-2xl backdrop-blur-sm">
            <SectionHeading center>{tr.footer.explore[lang].toUpperCase()}</SectionHeading>

            <nav className="mt-5" aria-label="Footer navigation">
              <div className="grid grid-cols-2 divide-x divide-white/15">
                {/* Left links */}
                <ul className="space-y-0 pr-4">
                  {exploreLeft.map(({ id, href, Icon }, idx) => (
                    <li key={id}>
                      <a
                        href={href}
                        className="group flex items-center gap-3 py-3.5 text-white/80 transition hover:text-[#D4A853]"
                      >
                        <Icon
                          className="h-5 w-5 shrink-0 text-[#6B9FD4] transition group-hover:text-[#D4A853]"
                          strokeWidth={1.5}
                        />
                        <span className="font-medium">{tr.nav[id][lang]}</span>
                      </a>
                      {idx < exploreLeft.length - 1 && (
                        <div className="h-px bg-white/10" />
                      )}
                    </li>
                  ))}
                </ul>
                {/* Right links */}
                <ul className="space-y-0 pl-4">
                  {exploreRight.map(({ id, href, Icon }, idx) => (
                    <li key={id}>
                      <a
                        href={href}
                        className="group flex items-center gap-3 py-3.5 text-white/80 transition hover:text-[#D4A853]"
                      >
                        <Icon
                          className="h-5 w-5 shrink-0 text-[#6B9FD4] transition group-hover:text-[#D4A853]"
                          strokeWidth={1.5}
                        />
                        <span className="font-medium">{tr.nav[id][lang]}</span>
                      </a>
                      {idx < exploreRight.length - 1 && (
                        <div className="h-px bg-white/10" />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>

          {/* Right — Contact */}
          <div>
            <SectionHeading>{tr.footer.contact[lang].toUpperCase()}</SectionHeading>

            <ul className="mt-5 space-y-5">
              <ContactRow icon={<MapPin className="h-5 w-5" />}>
                <p className="font-bold text-white leading-snug">
                  {restaurant.address.split(",")[0]}
                </p>
                <p className="text-sm text-white/60">
                  {restaurant.address.split(",").slice(1).join(",").trim()}
                </p>
              </ContactRow>

              <ContactRow icon={<Phone className="h-5 w-5" />}>
                <a
                  href={restaurant.phoneHref}
                  className="font-bold text-white transition hover:text-[#D4A853]"
                >
                  {restaurant.phone}
                </a>
                <p className="text-sm text-white/60">
                  {lang === "en"
                    ? "Call us — We'd love to hear from you!"
                    : "Llámanos — ¡Con gusto te atendemos!"}
                </p>
              </ContactRow>

              <ContactRow icon={<Clock className="h-5 w-5" />}>
                <p className="font-bold text-white">Mon – Sun: 8:00 AM – 9:00 PM</p>
              </ContactRow>
            </ul>

            {/* UberEats gold CTA */}
            <a
              href={restaurant.uberEats}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex w-full items-center justify-between gap-3 rounded-full bg-[#D4A853] px-5 py-3.5 font-bold text-[#1a0800] shadow-lg transition hover:bg-[#e0b96a] active:scale-95"
            >
              <UberEatsLabel />
              <ArrowRight className="h-5 w-5 shrink-0" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Bottom wave + seal ── */}
      <div className="relative mt-4">
        <svg
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          className="block h-14 w-full md:h-20"
          aria-hidden="true"
        >
          <path
            d="M0,50 C300,10 700,85 1050,50 C1230,33 1380,58 1440,50 L1440,80 L0,80 Z"
            fill="rgba(220,232,255,0.15)"
          />
          <path
            d="M0,60 C350,20 720,90 1100,60 C1280,45 1400,62 1440,60 L1440,80 L0,80 Z"
            fill="rgba(220,232,255,0.20)"
          />
        </svg>

      </div>

      {/* ── Copyright bar ── */}
      <div className="relative border-t border-white/10 bg-[#071B6E]/50 py-5 text-center text-xs text-white/60">
        <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-5">
          <span>
            © {year} Pulgarcito Family Restaurant.{" "}
            {tr.footer.rights[lang]}
          </span>
          <span className="hidden text-white/20 sm:inline">|</span>
          <span className="font-serif italic text-white/75">
            <span aria-hidden="true">♥</span> Hecho con amor
          </span>
          <span className="hidden text-white/20 sm:inline">|</span>
          <span>Los Angeles, CA</span>
        </div>
      </div>
    </footer>
  );
}
