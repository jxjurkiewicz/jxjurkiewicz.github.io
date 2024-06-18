"use client";

import { useEffect, useState } from "react";
import AscendingSquares from "../AscendingSquares/AscendingSquares";
import Logo from "../Logo";
import { socials } from "@/constants/data";
import "./Header.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Footer } from "@/app/[lng]/components/Footer/client";
import { useTranslation } from "@/app/i18n/client";

const Header = ({ lng }) => {
  const [burgerClass, setBurgerClass] = useState("");
  const [menuClass, setMenuClass] = useState("");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const router = useRouter();
  const isHomePage = "/";
  const pathname = usePathname();
  const { t } = useTranslation(lng, "header");

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("open");
      setMenuClass("open");
      document.body.classList.add("overflow-hidden");
    } else {
      setBurgerClass("");
      setMenuClass("");
      document.body.classList.remove("overflow-hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  const handleNavigation = (sectionId) => {
    if (pathname !== `${isHomePage}${lng}`) {
      router.push(`/${lng}`);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500);
    } else {
      scrollToSection(sectionId);
    }
  };

  const handleMobileNavigation = (sectionId) => {
    if (isMenuClicked) {
      setBurgerClass("");
      setMenuClass("");
      document.body.classList.remove("overflow-hidden");
      setIsMenuClicked(!isMenuClicked);
    }

    if (pathname !== `${isHomePage}${lng}`) {
      router.push(`/${lng}`);
      setTimeout(() => {
        scrollToSection(sectionId);
      }, 500);
    } else {
      scrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AscendingSquares />
      <div className="h-[99px] hidden lg:block"></div>
      {/* Placeholder div to match fixed header height */}
      <header
        className={`!font-exo mx-auto w-full py-7 px-4 header-desktop hidden md:block fixed top-0 z-40 ${
          isScrolled ? "bg-backgroundBright border-b border-green-100" : ""
        }`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href={`/${lng}`}>
            <div className="w-12 h-auto logo-container">
              <Logo />
            </div>
          </Link>

          <div className="flex items-center">
            <ul id="menuDesktop" className="flex text-xl font-bold">
              <li className="px-2">
                <Link href={`/${lng}`}> {t("home")} </Link>
              </li>
              <li onClick={() => handleNavigation("section-aboutMe")} className="px-2">
                <a> {t("aboutme")} </a>
              </li>
              <li onClick={() => handleNavigation("section-experience")} className="px-2">
                <a> {t("experience")} </a>
              </li>
              <li className="px-2">
                <Link href={`/${lng}/contact`}> {t("contact")} </Link>
              </li>
            </ul>
            <div className="text-[22px] ml-10 flex items-center">
              <div className="w-5 h-[1px] bg-green-100"></div>
              <div className="px-2">
                <Footer lng={lng} />
              </div>
              <div className="w-5 h-[1px] bg-green-100"></div>
            </div>
          </div>
        </nav>
      </header>
      <header
        className={`header-mobile mx-auto w-full px-4 block md:hidden py-6 border-b-2 border-green-100 fixed top-0 z-40 ${
          isScrolled ? "bg-backgroundBright" : "bg-background"
        }`}
      >
        <nav className="flex items-center justify-between">
          <Link href={`/${lng}`}>
            <Logo />
          </Link>
          <div id="hamburger" className={burgerClass} onClick={updateMenu}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </nav>
      </header>
      <div id="menuMobile" className={menuClass} onClick={updateMenu}>
        <div
          id="menuMobileContainer"
          className="bg-light shadow-lg w-4/5 sm:w-3/5 flex flex-col justify-between"
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="text-background">
            <Link href={`/${lng}`} onClick={updateMenu}>
              <li> {t("home")} </li>
            </Link>
            <a onClick={() => handleMobileNavigation("section-aboutMe")}>
              <li> {t("aboutme")} </li>
            </a>
            <a onClick={() => handleMobileNavigation("section-experience")}>
              <li> {t("experience")} </li>
            </a>
            <Link href="/contact" onClick={updateMenu}>
              <li> {t("contact")} </li>
            </Link>
          </ul>

          <ul id="socials" className="text-center mb-5 flex justify-center gap-5">
            {socials.map((social, id) => (
              <a
                className="flex justify-center items-center w-14 h-14 bg-background hover:bg-backgroundBright rounded-full"
                key={id}
                href={social.link}
                target="_blank"
              >
                <li>
                  <social.IconBig />
                </li>
              </a>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
