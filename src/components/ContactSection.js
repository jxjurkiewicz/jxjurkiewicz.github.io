import { useTranslation } from "@/app/i18n/client";
import { socials } from "@/constants/data";
import Link from "next/link";

export default function ContactSection() {
  // const { t } = useTranslation(lng, "contact-section");

  return (
    <section
      id="section-contact"
      className="mx-auto mb-28 md:mb-48 max-w-screen-lg lg:pt-28 pt-16"
    >
      <h2 data-aos="flip-left" className="section-header">
        Contact
      </h2>
      <div className="md:text-lg text-center lg:w-3/4 mx-auto mb-10" data-aos="fade-in">
        <p className="mb-5">
          I&apos;m actively seeking new opportunities to contribute my expertise to
          innovative projects. With a strong foundation in web development and a keen eye
          for design, I am excited about the prospect of bringing creativity and technical
          proficiency to your team.
        </p>
        <ul className="text-center mb-5 flex justify-center gap-5">
          {socials.map((social, id) => (
            <Link
              className="flex justify-center items-center w-14 h-14 bg-background hover:bg-backgroundBright border hover:shadow-socials rounded-sm"
              key={id}
              href={social.link}
              target="_blank"
            >
              <li>
                <social.IconBig />
              </li>
            </Link>
          ))}
        </ul>
        <p>
          If you are interested in discussing potential opportunities, collaborating on
          exciting projects, or just want to say hello, I would love to hear from you!
        </p>
      </div>
      <div className="flex justify-center">
        <Link href="mailto:jakubxjurkiewicz@gmail.com">
          <button className="button-hover button font-audiowide">Say Hello</button>
        </Link>
      </div>
    </section>
  );
}
