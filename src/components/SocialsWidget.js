import { socials } from "@/constants/data";
import Link from "next/link";

export default function SocialsWidget() {
  return (
    <div className="fixed bottom-0 left-12 2xl:block hidden z-50">
      <ul className="mb-3">
        {socials.map((social, id) => (
          <Link
            className="flex justify-center items-center rounded-full bg-light hover:bg-dark w-8 h-8 mb-2"
            key={id}
            href={social.link}
            target="_blank"
            data-aos="fade-down"
          >
            <li>
              <social.Icon />
            </li>
          </Link>
        ))}
      </ul>
      <div className="w-[1px] h-28 bg-dark mx-auto opacity-50"></div>
    </div>
  );
}
