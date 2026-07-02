"use client";

import GridBackground from "./GridBackground";
import Reveal from "./Reveal";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";

export default function Approach() {
  const { lang } = useLang();
  const a = t[lang].approach;

  return (
    <section id="approach" className="approach-bg">
      <GridBackground />
      <div className="wrap">
        <Reveal className="section-head" as="div">
          <div>
            <div className="eyebrow">
              <span className="bracket">|</span>{a.eyebrow}
              <span className="bracket">|</span>
            </div>
            <h2>{a.heading}</h2>
          </div>
          <p>{a.sub}</p>
        </Reveal>

        <Reveal className="approach-grid" as="div">
          {a.steps.map((s) => (
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
