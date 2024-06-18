"use client";

import Link from "next/link";
import { socials } from "@/constants/data";
import { useTranslation } from "@/app/i18n/client";

const ContactPage = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, "contact");

  return (
    <section
      id="section-contact"
      className="mx-auto mb-28 md:mb-48 max-w-screen-lg lg:pt-28 pt-16"
    >
      <h2 data-aos="flip-left" className="section-header">
        {t("header")}
      </h2>

      <div className="md:text-lg text-center lg:w-3/4 mx-auto mb-10" data-aos="fade-in">
        <p className="mb-5">{t("description1")}</p>
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
        <p>{t("description2")}</p>
      </div>
      <div className="flex justify-center">
        <Link href="mailto:jakubxjurkiewicz@gmail.com">
          <button className="button-hover button font-audiowide">{t("btn")}</button>
        </Link>
      </div>
    </section>
  );
};

export default ContactPage;
