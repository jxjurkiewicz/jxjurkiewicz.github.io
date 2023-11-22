import AscendingSquares from "./AscendingSquares/AscendingSquares";
import Logo from "./Logo";

export default function Header() {
  return (
    <>
      <AscendingSquares />
      <header className="mx-auto w-full pb-4 pt-8 px-4 header">
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
            <li className="px-2">
              <a href="">Resume</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
