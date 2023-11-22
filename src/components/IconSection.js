import { techSkills } from "@/constants/data";

export default function IconSection() {
  return (
    <section className="mx-auto mb-48 max-w-screen-lg">
      <h2 className="section-header">Experience {/* Technologies */} </h2>

      <ul className="grid justify-items-center items-stretch justify-center grid-cols-[repeat(auto-fit,minmax(90px,90px))] gap-7 sm:grid-cols-[repeat(auto-fit,minmax(110px,110px))] sm:gap-8 md:grid-cols-[repeat(auto-fit,minmax(125px,125px))] lg:grid-cols-[repeat(auto-fit,minmax(140px,140px))]">
        {techSkills.map((skill, id) => (
          <li
            key={id}
            className="rounded-lg flex flex-col flex-nowrap items-center justify-center gap-5 glassy-screen w-[90px] min-h-[90px] p-4 sm:w-[110px] sm:min-h-[110px] sm:p-4 md:w-[125px] md:min-h-[125px] md:p-5 lg:w-[140px] lg:min-h-[140px] lg:p-6"
          >
            <skill.Icon />
            <span className="text-center font-medium md:text-lg sm:text-base text-sm">{skill.title}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
