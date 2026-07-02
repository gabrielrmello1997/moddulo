"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggle } = useLang();
  const n = t[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <div className="wrap">
        <Logo />
        <nav>
          <a className="navlink" href="#services">
            {n.services}
          </a>
          <a className="navlink" href="#approach">
            {n.approach}
          </a>
          <a className="navlink" href="#about">
            {n.about}
          </a>
          <a className="nav-cta" href="#contact">
            {n.cta}
          </a>
          <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
            {lang === "en" ? "PT" : "EN"}
          </button>
        </nav>
      </div>
    </header>
  );
}
