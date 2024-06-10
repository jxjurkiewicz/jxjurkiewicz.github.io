export default function SplashSection() {
  return (
    <section
      id="section-splash"
      className="mb-10 max-h-screen h-[95vh] flex flex-col items-start justify-center"
    >
      <div className="relative -top-14">
        <div
          data-aos="fade-in"
          data-aos-duration="2000"
          className="text-green-100 mb-2 md:text-base text-sm text-center sm:text-left"
        >
          Howdy, my name is
        </div>
        <h1
          data-aos="fade-in"
          data-aos-duration="2000"
          className="font-orbitron text-xl xs:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-1 md:mb-5 font-extrabold tracking-wide text-light text-center sm:text-left"
        >
          Jakub Jurkiewicz.
        </h1>
        <h2 className="font-orbitron text-xl xs:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mb-3 md:mb-5 font-extrabold tracking-wide text-dark typewriter sm:max-w-max md:!leading-tight text-center sm:text-left">
          I build things for the web.
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          className="font-rubik xs:w-4/5 lg:w-2/5 text-dark text-xs xs:text-sm md:text-base text-center sm:text-left mx-auto sm:mx-0"
        >
          I’m a passionate software engineer for 3 years. I design and code beautifully
          simple things, and I love what I do. Currently, I’m focused on mastering my
          React skills.
        </p>
      </div>
    </section>
  );
}
