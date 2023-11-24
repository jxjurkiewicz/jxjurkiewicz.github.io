export default function ContactSection() {
  return (
    <section className="mx-auto mb-48 max-w-screen-lg">
      <h2 className="section-header">Contact</h2>
      <div className="text-lg text-center lg:w-3/4 mx-auto mb-10">
        <p className="mb-5">
          I'm actively seeking new opportunities to contribute my expertise to innovative projects. With a strong
          foundation in web development and a keen eye for design, I am excited about the prospect of bringing
          creativity and technical proficiency to your team.
        </p>
        <p>
          If you are interested in discussing potential opportunities, collaborating on exciting projects, or just want
          to say hello, I would love to hear from you!
        </p>
      </div>
      <div className="flex justify-center">
        <a href="mailto:jakubxjurkiewicz@gmail.com">
          <button class="bn632-hover bn20 font-orbitron">Say Hello</button>
        </a>
      </div>
    </section>
  );
}
