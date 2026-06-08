import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

// Elegant serif for headings, clean sans for body — wired to Tailwind via CSS vars.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pulgarcito Family Restaurant | Authentic Salvadoran Food in Los Angeles",
  description:
    "Authentic Salvadoran flavor in the heart of Los Angeles. Handmade pupusas, traditional breakfasts, fresh drinks, soups, seafood, and family-style plates at 2500 W Pico Blvd. Order on Uber Eats.",
  keywords: [
    "Salvadoran restaurant Los Angeles",
    "pupusas LA",
    "Pulgarcito Family Restaurant",
    "comida salvadoreña Los Angeles",
    "horchata",
    "sopa de gallina india",
    "mariscos",
    "Pico Blvd restaurant",
  ],
  authors: [{ name: "Pulgarcito Family Restaurant" }],
  openGraph: {
    title: "Pulgarcito Family Restaurant | Authentic Salvadoran Food in LA",
    description:
      "Handmade pupusas, traditional plates, and fresh drinks made with the warmth of El Salvador. Visit us at 2500 W Pico Blvd, Los Angeles.",
    type: "website",
    locale: "en_US",
    siteName: "Pulgarcito Family Restaurant",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pulgarcito Family Restaurant",
    description: "Authentic Salvadoran flavor in the heart of Los Angeles.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${fraunces.variable} ${manrope.variable} font-sans`}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
