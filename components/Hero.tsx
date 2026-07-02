"use client";

import Reveal from "./Reveal";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";

export default function Hero() {
  const { lang } = useLang();
  const h = t[lang].hero;

  return (
    <section className="hero">
      <video
        className="hero-video"
        src="/159052-818026310.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="hero-video-overlay" />
      <div className="wrap">
        <Reveal as="h1">
          {h.heading1} <em>{h.headingEm}</em> {h.heading2}
          {h.headingBreak && <br />}
          {h.headingBreak ? h.heading3 : ` ${h.heading3}`}
        </Reveal>

        <Reveal className="hero-sub" as="p">
          {h.sub}
        </Reveal>

        <Reveal className="hero-actions" as="div">
          <a className="btn btn-primary" href="#contact">
            {h.cta}
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


      <a className="hero-scroll" href="#services">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
