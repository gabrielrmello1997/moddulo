import GridBackground from "./GridBackground";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section className="hero">
      <GridBackground />
      <div className="wrap">
        <Reveal as="h1">
          Building software that <em>solves</em> real
          <br />
          business problems.
        </Reveal>

        <Reveal className="hero-sub" as="p">
        We design and build digital solutions that simplify operations,
        automate workflows and help businesses grow.
        </Reveal>

        <Reveal className="hero-actions" as="div">
          <a className="btn btn-primary" href="#contact">
            Talk to us
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M7 17L17 7M17 7H8M17 7V16" />
            </svg>
          </a>
        </Reveal>
      </div>

      <img
        src="/icon.svg"
        alt=""
        aria-hidden="true"
        className="hero-watermark"
      />

      <a className="hero-scroll" href="#services">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
