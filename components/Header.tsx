"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, toggle } = useLang();
  const n = t[lang].nav;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={scrolled ? "scrolled" : ""}>
        <div className="wrap">
          <a href="#" aria-label="Go to homepage"><Logo /></a>
          <nav>
            <a className="navlink" href="#services">{n.services}</a>
            <a className="navlink" href="#approach">{n.approach}</a>
            <a className="navlink" href="#about">{n.about}</a>
            <a className="nav-cta" href="#contact">{n.cta}</a>
            <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
              {lang === "en" ? "PT" : "EN"}
            </button>
          </nav>
          <div className="mobile-actions">
            <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
              {lang === "en" ? "PT" : "EN"}
            </button>
            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && <div className="mobile-overlay" onClick={close} />}
      <div className={`mobile-menu${menuOpen ? " open" : ""}`} aria-hidden={!menuOpen}>
        <a className="mobile-navlink" href="#services" onClick={close}>{n.services}</a>
        <a className="mobile-navlink" href="#approach" onClick={close}>{n.approach}</a>
        <a className="mobile-navlink" href="#about" onClick={close}>{n.about}</a>
        <a className="mobile-nav-cta" href="#contact" onClick={close}>{n.cta}</a>
      </div>
    </>
  );
}
