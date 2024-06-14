import { techSkills } from "@/constants/data";
import { CVIcon } from "@/components/Icons.js";
import CVButton from "../CVButton";
import Projects from "./Projects";
import "./ExperienceSection.css";
import ProjectsMobile from "./ProjectsMobile";
import { useTranslation } from "@/app/i18n/client";

export default function ExperienceSection({ lng }) {
  const { t } = useTranslation(lng, "experience-section");

  return (
    <section id="section-experience" className="mx-auto mb-16 md:mb-48">
      <h2 data-aos="flip-left" className="section-header">
        {t("section-header-technologies")}
      </h2>

      <ul
        data-aos="fade-down"
        className="max-w-screen-lg mx-auto mb-20 md:mb-32 grid justify-items-center justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]"
      >
        {techSkills.map((skill, id) => (
          <li
            key={id}
            className="rounded-lg flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6"
          >
            <skill.Icon />
            <span className="text-center font-medium md:text-lg sm:text-base text-sm">
              {skill.title}
            </span>
          </li>
        ))}
      </ul>

      <h2 data-aos="flip-left" className="section-header">
        {t("section-header-projects")}
      </h2>

      <Projects lng={lng} />

      <ProjectsMobile lng={lng} />

      <div className="pt-20 md:pt-24 md:pb-24">
        <div
          data-aos="fade-up"
          className="flex flex-col justify-center items-center resume"
        >
          <div className="line left-0"></div>
          <div className="line right-0"></div>

          <div className="mb-4">
            <CVIcon />
          </div>
          <p className="mb-10 w-3/4 md:w-[45%] mx-auto text-center text-dark leading-tight md:text-lg">
            {t("cv-description")}
          </p>
          <CVButton />
        </div>
      </div>
    </section>
  );
}
