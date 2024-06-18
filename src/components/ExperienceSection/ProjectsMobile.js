import Image from "next/image";
import Link from "next/link";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./ExperienceSection.css";
import { useTranslation } from "@/app/i18n/client";

const ProjectsMobile = ({ lng }) => {
  const { t } = useTranslation(lng, "projects");
  const projects = t("projects", { returnObjects: true });

  return (
    <ul className="md:hidden mb-12">
      <Carousel showArrows={false} showThumbs={false} showStatus={false}>
        {projects.map((project, index) => (
          <div className="xs:w-3/4 mb-6 hover:bg-opacity-40 mx-auto h-4/5" key={index}>
            <Link
              href={project.link}
              target="_blank"
              className="bg-white w-full rounded-md flex flex-col h-full relative card-container"
            >
              <div className="relative w-full h-[200px]">
                <Image src={project.image} className="rounded-t-md" fill alt="image" />
              </div>
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <div className="font-audiowide text-xl text-backgroundBright mb-5 text-left">
                    {project.name}
                  </div>
                  <div className="text-dark mb-5 text-left">{project.description}</div>
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
          </div>
        ))}
      </Carousel>
    </ul>
  );
};

export default ProjectsMobile;
