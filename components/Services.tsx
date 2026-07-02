"use client";

import GridBackground from "./GridBackground";
import Reveal from "./Reveal";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";

export default function Services() {
  const { lang } = useLang();
  const s = t[lang].services;
  const [line1, line2] = s.heading.split("\n");

  return (
    <section id="services">
      <GridBackground />
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <div>
            <div className="eyebrow">
              <span className="bracket">|</span>{s.eyebrow}
              <span className="bracket">|</span>
            </div>
            <h2>
              {line1}
              <br />
              {line2}
            </h2>
          </div>
          <p>{s.sub}</p>
        </Reveal>

        <div className="services-list">
          {s.items.map((item) => (
            <Reveal className="service-row" as="div" key={item.index}>
              <div className="service-index mono">{item.index}</div>
              <div className="service-name">{item.name}</div>
              <div className="service-desc">{item.desc}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
