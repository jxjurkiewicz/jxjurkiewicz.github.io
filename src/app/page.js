import Header from "@/components/Header";
import SplashSection from "@/components/SplashSection";

import IconSection from "@/components/IconSection";
import AboutMeSection from "@/components/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-5">
        <SplashSection />

        <AboutMeSection />

        <IconSection />

        <ContactSection />

        {/* <section>
          <h2>Resume</h2>
        </section> */}
      </main>

      <Footer />
    </>
  );
}
