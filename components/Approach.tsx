import GridBackground from "./GridBackground";
import Reveal from "./Reveal";

const steps = [
  {
    num: "|01|",
    title: "Understand",
    desc: "We learn how your business operates, uncover the real challenges and define what success should actually look like.",
  },
  {
    num: "|02|",
    title: "Map",
    desc: "We map workflows, identify bottlenecks and uncover opportunities to simplify operations before building anything.",
  },
  {
    num: "|03|",
    title: "Design",
    desc: "We create user experiences, interfaces and system architecture that work together as one cohesive product.",
  },
  {
    num: "|04|",
    title: "Build",
    desc: "We develop, test and refine every solution with performance, scalability and long-term maintenance in mind.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="approach-bg">
      <GridBackground />
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <div>
            <div className="eyebrow">
              <span className="bracket">|</span>How we work
              <span className="bracket">|</span>
            </div>
            <h2>Systems before screens.</h2>
          </div>
          <p>
          Every project follows the same process: understand the business,
          design the solution, then build with purpose.
          </p>
        </Reveal>

        <Reveal className="approach-grid" as="div">
          {steps.map((s) => (
            <div className="approach-card" key={s.num}>
              <span className="approach-num mono">{s.num}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
