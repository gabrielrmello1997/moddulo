"use client";

import { useState } from "react";
import GridBackground from "./GridBackground";
import Reveal from "./Reveal";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const { lang } = useLang();
  const c = t[lang].contact;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="contact-bg">
      <GridBackground />
      <div className="wrap">
        <div className="contact-inner">
          <Reveal as="div">
            <div className="eyebrow">
              <span className="bracket">|</span>{c.eyebrow}
              <span className="bracket">|</span>
            </div>
            <h2>{c.heading}</h2>
            <p className="hero-sub">{c.sub}</p>
          </Reveal>

          <Reveal as="div">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">{c.labelName}</label>
                <input id="name" type="text" placeholder={c.placeholderName} required />
              </div>
              <div className="field">
                <label htmlFor="email">{c.labelEmail}</label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="project">{c.labelProject}</label>
                <textarea
                  id="project"
                  rows={2}
                  placeholder={c.placeholderProject}
                />
              </div>
              <button className="btn btn-primary" type="submit">
                {sent ? c.sent : c.submit}
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M7 17L17 7M17 7H8M17 7V16" />
                </svg>
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
