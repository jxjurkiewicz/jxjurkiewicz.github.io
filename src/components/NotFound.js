"use client";

import { useTranslation } from "@/app/i18n/client";
import Link from "next/link";

const NotFound = ({ lng }) => {
  const { t } = useTranslation(lng, "not-found");

  return (
    <>
      <main className="page404">
        <div className="h-[60vh] flex flex-col items-start justify-center">
          <h1 className="font-audiowide text-5xl font-extrabold text-center mx-auto text-green-100 mb-5">
            {t("header")}
          </h1>
          <div className="mx-auto text-dark text-center text-xl">
            <p>{t("description1")}</p>
            <p>
              {t("description2")} <Link href={`/${lng}`}>{t("link")}</Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

export default NotFound;
