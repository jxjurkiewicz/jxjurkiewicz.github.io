"use client";

import "./page.css";
import { useTranslation } from "@/app/i18n/client";
import {
  ArrowDown,
  CMSIcon,
  CollaborationIcon,
  MailIcon,
  PageIcon,
  RepairIcon,
  SEOIcon,
  SSLIcon,
  ShopIcon,
  WebsiteHostingIcon,
} from "@/components/Icons";
import Link from "next/link";
import { useState } from "react";

const ServicesPage = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, "services");
  const services = t("services", { returnObjects: true });
  const faq = t("faq", { returnObjects: true });
  const included = t("included", { returnObjects: true });

  const iconMap = {
    PageIcon: <PageIcon />,
    CMSIcon: <CMSIcon />,
    ShopIcon: <ShopIcon />,
    RepairIcon: <RepairIcon />,
    CollaborationIcon: <CollaborationIcon />,
    WebsiteHostingIcon: <WebsiteHostingIcon />,
    SEOIcon: <SEOIcon />,
    MailIcon: <MailIcon />,
    SSLIcon: <SSLIcon />,
  };

  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
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
        className="md:grid gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3 mb-24 lg:mb-32"
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

      {/* <h2 className="font-exo font-extrabold text-3xl md:text-4xl lg:text-6xl text-center mb-20">
        Co zyskujesz zamawiając u nas stronę internetową?
      </h2>
      <ul className="included-container mb-32 max-w-screen-lg mx-auto">
        {included.map((item, index) => (
          <li className="flex justify-center gap-16 items-center w-max" key={index}>
            <div className="included-icon flex justify-center">{iconMap[item.icon]}</div>
            <div>
              <div className="text-3xl font-bold font-exo tracking-wider mb-2 text-backgroundBright">
                {item.header}
              </div>
              <div className="max-w-lg leading-tight">{item.text}</div>
            </div>
          </li>
        ))}
      </ul> */}

      <div className="flex justify-center mb-32">
        <Link href="mailto:biuro@jakubjurkiewicz.pl">
          <button className="button-hover button font-audiowide">{t("btn")}</button>
        </Link>
      </div>
      <h2 className="font-exo font-extrabold text-3xl md:text-4xl lg:text-5xl text-center mb-14">
        FAQ
      </h2>
      <ul>
        {faq.map((item, index) => (
          <li
            onClick={() => {
              toggleExpand(index);
            }}
            className={`border md:border-2 border-green-100 mb-5 rounded-md faq-element ${
              expandedIndex === index ? "expanded" : ""
            }`}
            key={index}
          >
            <div className="flex justify-between items-center px-4 py-3 cursor-pointer">
              <div className="md:text-xl font-bold">{item.header}</div>
              <div className="icon">
                <ArrowDown />
              </div>
            </div>
            <div
              onClick={(e) => e.stopPropagation()}
              className={`text-container px-4 text-sm md:text-lg ${
                expandedIndex === index ? "expanded" : ""
              }`}
            >
              {item.text}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ServicesPage;
