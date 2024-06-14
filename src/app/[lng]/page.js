"use client";

import Aos from "aos"; //Library for Animations
import "aos/dist/aos.css";
import { useEffect } from "react";
import SplashSection from "@/components/SplashSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import AboutMeSection from "@/components/AboutMeSection/AboutMeSection";
import SocialsWidget from "@/components/SocialsWidget";

export default function Home({ params: { lng } }) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <>
      <SplashSection lng={lng} />
      <SocialsWidget lng={lng} />

      <AboutMeSection lng={lng} />

      <ExperienceSection lng={lng} />
    </>
  );
}
