"use client";

import Aos from "aos"; //Library for Animations
import "aos/dist/aos.css";

import { useEffect } from "react";

import Header from "@/components/Header/Header";
import SplashSection from "@/components/SplashSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SocialsWidget from "@/components/SocialsWidget";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-5 pt-[88px] md:pt-0 overflow-hidden">
        <SplashSection />
        <SocialsWidget />

        <AboutMeSection />

        <ExperienceSection />

        <ContactSection />
      </main>

      <div className="overflow-hidden">
        <Footer />
      </div>
    </>
  );
}
