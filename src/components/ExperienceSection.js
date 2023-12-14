import { techSkills } from "@/constants/data";
import { PortfolioIcon } from "@/components/Icons.js";
import CVButton from "./CVButton";

export default function ExperienceSection() {
  return (
    <section id="section-experience" className="mx-auto mb-28 md:mb-48 max-w-screen-lg">
      <h2 className="section-header">Experience {/* Technologies */} </h2>

      <ul className="mb-20 md:mb-32 grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
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
      <div className="flex flex-col justify-center items-center">
        <div className="mb-4">
          <PortfolioIcon />
        </div>
        <p className="mb-10 w-3/4 md:w-1/2 mx-auto text-center text-dark leading-tight md:text-lg">
          Thank you for considering my profile! If you're looking for more information
          about my skills, feel free to check my CV below:
        </p>
        {/* <div className="flex justify-center">
          <a href="/src/constants/CV_Jakub_Jurkiewicz_ENG.pdf" target="_blank">
            <button className="button-hover button font-orbitron">
              Curriculum Vitae
            </button>
          </a>
        </div> */}
        <CVButton />
      </div>
    </section>
  );
}
