import { socials } from "@/constants/data";

export default function ContactSection() {
  return (
    <section id="section-contact" className="mx-auto mb-28 md:mb-48 max-w-screen-lg">
      <h2 data-aos="flip-left" className="section-header">
        Contact
      </h2>
      <div className="md:text-lg text-center lg:w-3/4 mx-auto mb-10">
        <p data-aos="fade-down-right" className="mb-5">
          I'm actively seeking new opportunities to contribute my expertise to innovative
          projects. With a strong foundation in web development and a keen eye for design,
          I am excited about the prospect of bringing creativity and technical proficiency
          to your team.
        </p>
        <ul className="text-center mb-5 flex justify-center gap-5">
          {socials.map((social, id) => (
            <a
              data-aos="zoom-in"
              className="flex justify-center items-center w-14 h-14 bg-background hover:bg-backgroundBright border hover:shadow-socials rounded-sm"
              key={id}
              href={social.link}
              target="_blank"
            >
              <li>
                <social.IconBig />
              </li>
            </a>
          ))}
        </ul>
        <p data-aos="fade-up-left">
          If you are interested in discussing potential opportunities, collaborating on
          exciting projects, or just want to say hello, I would love to hear from you!
        </p>
      </div>
      <div data-aos="fade-up" className="flex justify-center">
        <a href="mailto:jakubxjurkiewicz@gmail.com">
          <button className="button-hover button font-orbitron">Say Hello</button>
        </a>
      </div>
    </section>
  );
}
