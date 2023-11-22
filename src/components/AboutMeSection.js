import Image from "next/image";
import myPicture from "../../public/img/myPicture.jpg";

export default function AboutMeSection() {
  return (
    <section className="max-w-5xl mx-auto mb-48">
      <h2 className="section-header">About me</h2>
      <div className="flex flex-wrap md:flex-nowrap gap-5 justify-between items-center">
        <div className="w-full lg:w-3/5 text-lg text-justify md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, culpa. <br /> <br />
          Since beginning my journey as a freelance designer over 11 years ago, I&apos;ve done remote work for agencies,
          consulted for startups, and collaborated with talented people to create digital products for both business and
          consumer use. I&apos;m quietly confident, naturally curious, and perpetually working on improving my chops one
          design problem at a time.
          <br /> <br />
          Lorem ipsum dolor sit, amet consectetur <a href="">adipisicing elit</a>. Rem itaque sequi adipisci obcaecati
          incidunt officia neque. Hic modi sequi sapiente ullam nostrum cum quaerat ipsum.
        </div>
        <div className="w-full lg:w-2/5 flex justify-center md:justify-end">
          <Image src={myPicture} alt="me" className="max-w-[250px] md:max-w-xs h-auto" />
        </div>
      </div>
    </section>
  );
}
