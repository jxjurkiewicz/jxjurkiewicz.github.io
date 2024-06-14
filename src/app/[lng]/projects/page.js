"use client";

import { OpenLinkIcon } from "@/components/Icons";
import Link from "next/link";
import Image from "next/image";
import PreviousPageButton from "@/components/PreviousPageButton";
import { useTranslation } from "@/app/i18n/client";

const ProjectsPage = ({ params: { lng } }) => {
  const { t } = useTranslation(lng, "projects");
  const projects = t("projects", { returnObjects: true });

  return (
    <>
      <ul
        data-aos="fade-in"
        className="hidden md:flex flex-wrap -mx-3 mb-20 md:justify-start justify-center mt-20"
      >
        {projects.map((project, index) => (
          <li
            className="px-3 xl:w-1/3 md:w-1/2 s:w-2/3 mb-6 hover:bg-opacity-40"
            key={index}
          >
            <Link
              href={project.link}
              target="_blank"
              className="bg-white w-full rounded-md flex flex-col h-full relative card-container"
            >
              <div className="link-layer flex items-center justify-center">
                <OpenLinkIcon />
              </div>

              <div className="relative w-full h-[200px]">
                <Image
                  sizes="fill"
                  src={project.image}
                  className="rounded-t-md"
                  fill
                  alt="image"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="font-audiowide text-xl text-backgroundBright mb-5">
                    {project.name}
                  </div>
                  <div className="text-dark mb-5">{project.description}</div>
                </div>
                <ul className="flex flex-wrap gap-3">
                  {project.technologies.map((item, index) => (
                    <li
                      className="text-[13px] font-medium glassy-screen-dark py-1 px-2 rounded-md"
                      key={index}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          </li>
        ))}
      </ul>

      <PreviousPageButton />
    </>
  );
};

export default ProjectsPage;
