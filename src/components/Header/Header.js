"use client";

import { useState } from "react";
import AscendingSquares from "../AscendingSquares/AscendingSquares";
import Logo from "../Logo";

import "./Header.css";

export default function Header() {
  const [burgerClass, setBurgerClass] = useState("");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const updateMenu = () => {
    if (isMenuClicked) {
      setBurgerClass("open");
    } else {
      setBurgerClass("");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <>
      <AscendingSquares />
      <header className="mx-auto w-full pb-4 pt-8 px-4 header-desktop hidden md:block">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <Logo />

          <ul className="flex text-lg font-orbitron">
            <li className="px-2">
              <a href="">Home</a>
            </li>
            <li className="px-2">
              <a href="">About Me</a>
            </li>
            <li className="px-2">
              <a href="">Experience</a>
            </li>
            <li className="px-2">
              <a href="">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <header className="header-mobile mx-auto w-full px-4 block md:hidden py-6 bg-background border-b border-green-100 fixed top-0 z-40">
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
    </>
  );
}
