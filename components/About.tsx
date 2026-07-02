import GridBackground from "./GridBackground";
import Reveal from "./Reveal";
import AboutWireframe from "./AboutWireframe";

export default function About() {
  return (
    <section id="about">
      <GridBackground />
      <div className="wrap">
        <div className="about-inner">

          <div className="about-left">
            <Reveal as="div">
              <div className="eyebrow">
                <span className="bracket">|</span>About us
                <span className="bracket">|</span>
              </div>
              <h2>Moddulo develops software with purpose.</h2>
            </Reveal>

            <Reveal className="about-copy" as="div">
              <p>
              <strong>Moddulo</strong> is an independent software studio founded by designers and engineers with +20 years of combined experience building digital products. Our work spans websites, web applications, internal platforms, automation and tailor-made solutions for diverse businesses.
              </p>
              <p>
              Rather than separating strategy, design and development into different teams, we approach every project as one integrated process. That means closer collaboration, clearer communication and solutions that stay aligned with your goals.
              </p>
            </Reveal>
          </div>

          <div className="about-right">
            <AboutWireframe />
          </div>

        </div>
      </div>
    </section>
  );
}
