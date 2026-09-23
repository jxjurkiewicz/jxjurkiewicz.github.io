"use client";

import { useTranslation } from "@/app/i18n/client";
import Image from "next/image";
import splashBusiness from "/public/img/splash-business.png"
import splashBusinessEng from "/public/img/splash-business-eng.png"
import Link from "next/link";
import { cards, cardsExtra } from "@/constants/data";

export default function SplashSection({ lng }) {
  const { t } = useTranslation(lng, "splash-section");
  const splashImage = lng === "en" ? splashBusinessEng : splashBusiness;

  return (
    <section
      id="section-splash"
      className="min-h-[calc(100svh-88px)] pt-6 mb-20 md:pt-8 md:mb-32 max-w-screen-2xl"
    >
      <div className="grid w-full items-center gap-2 lg:grid-cols-2 lg:gap-4 mb-10">
        <div className="z-10">
          <p
            data-aos="fade-in"
            data-aos-duration="1600"
            className="mb-5 text-sm text-green-100 xs:text-base md:text-base"
          >
            {t("howdy")}
          </p>

          <h1
            data-aos="fade-in"
            data-aos-duration="1600"
            className="max-w-3xl font-audiowide text-[2rem] font-extrabold leading-[1.25] tracking-wide text-light xs:text-[2.5rem] md:text-5xl lg:text-[2.75rem] xl:text-[45px] mb-10"
          >
            {t("title")}
            <span className="text-blue-100"> {t("title_highlight")} </span>
          </h1>

          <p
            data-aos="fade-in"
            data-aos-duration="1600"
            className="max-w-2xl text-base leading-relaxed text-semidark md:text-lg lg:max-w-xl"
          >
            {t("description")}
          </p>

          <div data-aos="fade-in" data-aos-duration="1600" className="mt-7 flex flex-col gap-6 xs:flex-row xs:flex-wrap md:mt-8">
            <Link
              href={`/${lng}/contact`}
              className="flex min-h-[58px] items-center justify-center gap-4 rounded-3xl border border-green-100 bg-[linear-gradient(90deg,#07152d_0%,#0a2845_25%,#126087_50%,#0a2845_75%,#07152d_100%)] bg-[length:200%_100%] bg-left px-7 font-bold text-green-100 shadow-[0_0_25px_2px_rgba(100,255,218,0.35)] transition-[background-position,box-shadow] duration-700 ease-in-out hover:bg-right hover:text-green-100 hover:shadow-[0_0_32px_4px_rgba(100,255,218,0.5)]"
            >
              {t("consultation")}
              <span aria-hidden="true" className="text-2xl font-normal">
                →
              </span>
            </Link>

            <Link
              href={`/${lng}/services`}
              className="flex min-h-[58px] items-center justify-center rounded-2xl border border-green-100 px-10 font-bold text-light hover:bg-green-100 hover:text-background"
            >
              {t("offer")}
            </Link>
          </div>
        </div>

        <div
          data-aos="fade-in"
          data-aos-duration="1800"
          className="mx-auto w-full max-w-3xl"
        >
          <Image
            src={splashImage}
            alt={t("imageAlt")}
            className="h-auto w-full"
            priority
          />
        </div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1600" className="grid grid-cols-4 gap-5">
        
        {cards.map(({ key, Icon }) => (
          <div key={key} className="border border-suppBlue-100 rounded-xl flex [&_svg]:h-[50px] [&_svg]:w-[50px] [&_svg]:text-blue-200 p-4 items-start glassy-screen-card">
            <div className="w-1/5"> <Icon /> </div>

            <div className="w-4/5">
              <div className="mb-2 font-semibold pt-2"> {t(`cards.${key}.header`)} </div>
              <p className="text-sm leading-6 font-exo"> {t(`cards.${key}.description`)} </p>
            </div>
          </div>
        ))}
      
      </div>

      <div data-aos="fade-up" data-aos-duration="1600">
        <div className="h-[1px] opacity-50 w-11/12 mx-auto bg-blue-200 my-10"></div>
      </div>

      <div data-aos="fade-up" data-aos-duration="1600" className="flex gap-10 justify-center w-4/5 mx-auto">
        {cardsExtra.map(({key, Icon}) => (
          <div key={key} className="w-1/3 flex gap-5 [&_svg]:h-[35px] [&_svg]:w-[35px] [&_svg]:text-green-100 border-r border-blue-200/30 last:border-r-0">
            <Icon />

            <div>
              <div className="font-bold text-green-100 text-sm">{t(`cardsExtra.${key}.header`)}</div>
              <p className="font-exo text-xs">{t(`cardsExtra.${key}.description`)}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
