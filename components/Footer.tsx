"use client";

import Logo from "./Logo";
import { useLang } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";

export default function Footer() {
  const { lang, toggle } = useLang();

  return (
    <footer>
      <div className="wrap">
        <Logo />
        <div className="foot-note">
          {t[lang].footer.copy}
        </div>
        <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
          {lang === "en" ? "PT" : "EN"}
        </button>
      </div>
    </footer>
  );
}
