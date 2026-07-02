import GridBackground from "./GridBackground";
import Reveal from "./Reveal";

const services = [
  {
    index: "01",
    name: "Websites",
    desc: "Fast, clear, and built to convert, without unnecessary complexity.",
  },
  {
    index: "02",
    name: "Apps",
    desc: "Products and toolspeople use daily, engineered for reliability and growth.",
  },
  {
    index: "03",
    name: "Dashboards",
    desc: "Get the most out of your data, and make smarter and faster decisions.",
  },
  {
    index: "04",
    name: "Process Optimization",
    desc: "We study how your business runs and remove what slows it down.",
  },
];

export default function Services() {
  return (
    <section id="services">
      <GridBackground />
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <div>
            <div className="eyebrow">
              <span className="bracket">|</span>What we do
              <span className="bracket">|</span>
            </div>
            <h2>Different services.<br />
            One integrated process.</h2>
          </div>
          <p>
          From strategy and design to development and automation,
          every decision is driven by clarity, usability and business goals.
          </p>
        </Reveal>

        <div className="services-list">
          {services.map((s) => (
            <Reveal className="service-row" as="div" key={s.index}>
              <div className="service-index mono">{s.index}</div>
              <div className="service-name">{s.name}</div>
              <div className="service-desc">{s.desc}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
