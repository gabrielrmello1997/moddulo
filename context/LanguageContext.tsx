"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import type { Lang } from "@/lib/i18n";

type LanguageContextType = {
  lang: Lang;
  toggle: () => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "en",
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  const toggle = () => setLang((l) => (l === "en" ? "pt" : "en"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
