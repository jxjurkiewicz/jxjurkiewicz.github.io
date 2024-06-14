import Image from "next/image";
import me from "../../../public/img/me.PNG";

import "./AboutMeSection.css";
import { useTranslation } from "@/app/i18n/client";

const AboutMeSection = ({ lng }) => {
  const { t } = useTranslation(lng, "aboutme-section");

  return (
    <section id="section-aboutMe" className="max-w-5xl mx-auto mb-48">
      <h2 data-aos="flip-left" className="section-header">
        {t("section-header")}
      </h2>
      <div className="flex flex-wrap md:flex-nowrap gap-5 justify-between items-center">
        <div
          data-aos="fade-right"
          className="w-full lg:w-3/5 md:text-lg text-justify md:text-left"
        >
          {t("description1")}
          <br /> <br />
          {t("description2")}
          <br /> <br />
          {t("description3")}
        </div>
        <div className="w-full lg:w-2/5 flex justify-center">
          <div data-aos="fade-left" className="myPicture">
            <Image
              src={me}
              alt="me"
              className="max-w-[200px] xs:max-w-[250px] md:max-w-xs h-auto relative rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
