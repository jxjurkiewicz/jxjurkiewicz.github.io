"use client";

import { useEffect, useState } from "react";
import AscendingSquares from "../AscendingSquares/AscendingSquares";
import Logo from "../Logo";
import { socials } from "@/constants/data";
import "./Header.css";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Header = () => {
  const [burgerClass, setBurgerClass] = useState("");
  const [menuClass, setMenuClass] = useState("");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const router = useRouter();
  const isHomePage = "/";
  const pathname = usePathname();

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
    if (pathname !== isHomePage) {
      router.push("/");
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

    if (pathname !== isHomePage) {
      router.push("/");
      setTimeout(() => {
        mobileScrollToSection(sectionId);
      }, 500);
    } else {
      mobileScrollToSection(sectionId);
    }
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  const mobileScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 100,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <AscendingSquares />
      <header className="mx-auto w-full pb-4 pt-8 px-4 header-desktop hidden md:block">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />

          <ul id="menuDesktop" className="flex text-lg font-orbitron">
            <li className="px-2">
              <Link href="/">Home</Link>
            </li>
            <li onClick={() => handleNavigation("section-aboutMe")} className="px-2">
              <a>About Me</a>
            </li>
            <li onClick={() => handleNavigation("section-experience")} className="px-2">
              <a>Experience</a>
            </li>
            <li className="px-2">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </header>
      <header className="header-mobile mx-auto w-full px-4 block md:hidden py-6 bg-background border-b-2 border-green-100 fixed top-0 z-40">
        <nav className="flex items-center justify-between">
          <Logo />
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
            <Link href="/" onClick={updateMenu}>
              <li>Home</li>
            </Link>
            <a onClick={() => handleMobileNavigation("section-aboutMe")}>
              <li>About Me</li>
            </a>
            <a onClick={() => handleMobileNavigation("section-experience")}>
              <li>Experience</li>
            </a>
            <Link href="/contact" onClick={updateMenu}>
              <li>Contact</li>
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
