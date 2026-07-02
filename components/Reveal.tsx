"use client";

import React, { useEffect, useRef, ReactNode, ElementType } from "react";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  className?: string;
}

export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const El = Tag as React.ElementType;

  return (
    <El ref={ref as React.Ref<Element>} className={`reveal ${className}`}>
      {children}
    </El>
  );
}
