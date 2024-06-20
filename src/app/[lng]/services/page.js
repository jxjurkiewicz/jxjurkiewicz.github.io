"use client";

import "./page.css";
import { useTranslation } from "@/app/i18n/client";
import {
  CMSIcon,
  CollaborationIcon,
  PageIcon,
  RepairIcon,
  ShopIcon,
} from "@/components/Icons";
import Link from "next/link";

const ServicesPage = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, "services");
  const services = t("services", { returnObjects: true });

  const iconMap = {
    PageIcon: <PageIcon />,
    CMSIcon: <CMSIcon />,
    ShopIcon: <ShopIcon />,
    RepairIcon: <RepairIcon />,
    CollaborationIcon: <CollaborationIcon />,
  };

  return (
    <section id="section-services" className="mx-auto mb-28 md:mb-48 lg:pt-28 pt-16">
      <h2 data-aos="flip-left" className="section-header">
        {t("header")}
      </h2>
      <p
        data-aos="fade-in"
        className="lg:font-medium text-lg md:text-2xl text-center mb-20 lg:mb-32 max-w-screen-lg mx-auto"
      >
        {t("description")}
      </p>

      <ul
        data-aos="fade-in"
        className="md:grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3 mb-20 lg:mb-24"
      >
        {services.map((item, index) => (
          <li
            className="flex flex-col justify-center items-center mb-16 md:mb-0"
            key={index}
          >
            <div className="mb-2"> {iconMap[item.icon]} </div>
            <div className="text-xl font-medium mb-3 text-green-100">{item.header}</div>
            <div className="font-exo font-medium lg:text-lg leading-snug text-center">
              {item.text}
            </div>
          </li>
        ))}
      </ul>

      <div className="flex justify-center">
        <Link href="mailto:jakubxjurkiewicz@gmail.com">
          <button className="button-hover button font-audiowide">{t("btn")}</button>
        </Link>
      </div>

      {/* 
      -strony internetowe
      -sklepy internetowe
      -optymalizacja strony internetowej
      -dedykowane systemy cms
      -współpraca długoterminowa (szukasz programisty do zespołu?)
      */}

      <div
        className="md:text-lg text-center lg:w-3/4 mx-auto mb-10"
        data-aos="fade-in"
      ></div>
    </section>
  );
};

export default ServicesPage;
