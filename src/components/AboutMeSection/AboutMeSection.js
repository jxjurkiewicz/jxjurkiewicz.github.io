import Image from "next/image";
import myPicture from "../../../public/img/myPicture.jpg";
import myAvatar from "../../../public/img/myAvatar.jpg";

import "./AboutMeSection.css";

export default function AboutMeSection() {
  return (
    <section className="max-w-5xl mx-auto mb-48">
      <h2 className="section-header">About me</h2>
      <div className="flex flex-wrap md:flex-nowrap gap-5 justify-between items-center">
        <div className="w-full lg:w-3/5 text-lg text-justify md:text-left">
          I'm Jakub, a passionate frontend developer hailing from the picturesque city of
          Olsztyn, located on the north side of Poland.
          <br /> <br />
          With over two years of hands-on experience in the ever-evolving world of web
          development, I've had the opportunity to work on diverse projects that have
          fueled my love for creating seamless and user-friendly interfaces.
          <br /> <br /> Since beginning my journey as a frontend developer, I&apos;ve done
          remote work for agencies and collaborated with talented people to create digital
          products for both business and consumer use. I&apos;m quietly confident,
          naturally curious, and perpetually working on improving my chops one design
          problem at a time.
        </div>
        <div className="w-full lg:w-2/5 flex justify-center md:justify-end">
          <div className="myPicture">
            <Image
              src={myPicture}
              alt="me"
              className="max-w-[250px] md:max-w-xs h-auto relative rounded-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
