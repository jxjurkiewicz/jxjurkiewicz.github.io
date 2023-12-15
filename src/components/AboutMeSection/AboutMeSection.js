import Image from "next/image";
import myPicture from "../../../public/img/myPicture.jpg";

import "./AboutMeSection.css";

const AboutMeSection = () => {
  return (
    <section id="section-aboutMe" className="max-w-5xl mx-auto mb-48">
      <h2 data-aos="flip-left" className="section-header">
        About me
      </h2>
      <div className="flex flex-wrap md:flex-nowrap gap-5 justify-between items-center">
        <div
          data-aos="fade-right"
          className="w-full lg:w-3/5 md:text-lg text-justify md:text-left"
        >
          I&apos;m Jakub, <a href="">test</a> a passionate frontend developer hailing from
          the picturesque city of Olsztyn, located on the north side of Poland.
          <br /> <br />
          With over two years of hands-on experience in the ever-evolving world of web
          development, I&apos;ve had the opportunity to work on diverse projects that have
          fueled my love for creating seamless and user-friendly interfaces.
          <br /> <br /> Since beginning my journey as a frontend developer, I&apos;ve done
          remote work for agencies and collaborated with talented people to create digital
          products for both business and consumer use. I&apos;m quietly confident,
          naturally curious, and perpetually working on improving my chops one design
          problem at a time.
        </div>
        <div className="w-full lg:w-2/5 flex justify-center">
          <div data-aos="fade-left" className="myPicture">
            <Image
              src={myPicture}
              alt="me"
              className="max-w-[200px] xsm:max-w-[250px] md:max-w-xs h-auto relative rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
