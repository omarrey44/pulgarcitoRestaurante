import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";
import FeaturedDishes from "@/components/FeaturedDishes";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

// Wave fill colors match the NEXT section's background:
// FeaturedDishes  → masa-grain cream  #FBF4E9
// MenuSection     → cream-dark        #F3E7D3
// About           → masa-grain cream  #FBF4E9
// Reviews         → burgundy          #7B1E22
// Gallery         → cream-dark        #F3E7D3
// Location        → masa-grain cream  #FBF4E9

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />

      {/* Hero (dark) → FeaturedDishes (cream) — high contrast */}
      <WaveDivider fill="#FBF4E9" className="-mt-1 bg-[#160d08]" />

      <FeaturedDishes />

      {/* FeaturedDishes → MenuSection: same cream tone, no divider */}

      <MenuSection />

      {/* MenuSection → About: same cream tone, no divider */}

      <About />

      {/* About (cream) → Reviews (burgundy) — flip: fill=above, bg=below */}
      <WaveDivider fill="#FBF4E9" flip className="-mt-1 bg-[#7B1E22]" />

      <Reviews />

      {/* Reviews (burgundy) → Gallery (cream-dark) — high contrast */}
      <WaveDivider fill="#F3E7D3" className="-mt-1 bg-burgundy" />

      <Gallery />

      {/* Gallery → Location: same cream tone, no divider */}

      <Location />
      <Footer />
    </main>
  );
}
