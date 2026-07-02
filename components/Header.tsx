"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

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
            Services
          </a>
          <a className="navlink" href="#approach">
            Approach
          </a>
          <a className="navlink" href="#about">
            About
          </a>
          <a className="nav-cta" href="#contact">
            Talk to us
          </a>
        </nav>
      </div>
    </header>
  );
}
