"use client";

import GridBackground from "./GridBackground";
import Reveal from "./Reveal";
import AboutWireframe from "./AboutWireframe";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";

export default function About() {
  const { lang } = useLang();
  const a = t[lang].about;

  return (
    <section id="about">
      <GridBackground />
      <div className="wrap">
        <div className="about-inner">

          <div className="about-left">
            <Reveal as="div">
              <div className="eyebrow">
                <span className="bracket">|</span>{a.eyebrow}
                <span className="bracket">|</span>
              </div>
              <h2>{a.heading}</h2>
            </Reveal>

            <Reveal className="about-copy" as="div">
              <p>
                <strong>{a.p1bold}</strong>{a.p1rest}
              </p>
              <p>{a.p2}</p>
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
