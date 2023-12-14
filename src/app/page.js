import Header from "@/components/Header/Header";
import SplashSection from "@/components/SplashSection";

import ExperienceSection from "@/components/ExperienceSection";
import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SocialsWidget from "@/components/SocialsWidget";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-5 pt-[88px] md:pt-0">
        <SplashSection />
        <SocialsWidget />

        <AboutMeSection />

        <ExperienceSection />

        <ContactSection />
      </main>

      <Footer />
    </>
  );
}
