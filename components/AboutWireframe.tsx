"use client";

import { useEffect, useRef } from "react";

const PROJECTS = [
  { name: "moddulo.com",   tech: "Next.js", status: "LIVE",    pct: 80, dot: "live"  },
  { name: "Portal Admin",  tech: "React",   status: "STAGING", pct: 52, dot: "stage" },
  { name: "Automations",   tech: "Python",  status: "DEV",     pct: 21, dot: "dev"   },
] as const;

const DEPLOYS = [
  { time: "14:32", name: "moddulo.com",  status: "SUCCESS", dot: "live"  },
  { time: "11:05", name: "portal-adm", status: "SUCCESS", dot: "live"  },
  { time: "09:18", name: "api-service",  status: "QUEUED",  dot: "stage" },
  { time: "08:44", name: "data-worker",  status: "FAILED",  dot: "fail"  },
] as const;

const TOKENS = [
  { name: "--bg",    val: "#50595f", color: "#50595f" },
  { name: "--ink",   val: "#f4f2ee", color: "#f4f2ee" },
  { name: "--muted", val: "#93999c", color: "#93999c" },
  { name: "--black", val: "#0c0c0c", color: "#1a1a1a" },
];

// Node positions: cx = horizontal center, w = box width
// viewBox 300×40, side margins 33px, gaps 18px
const ARCH = [
  { cx: 60,  w: 54, label: "BROWSER" },
  { cx: 132, w: 42, label: "CDN"     },
  { cx: 192, w: 42, label: "APP"     },
  { cx: 252, w: 42, label: "API"     },
];

export default function AboutWireframe() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("wf-entered");
          const cards = el.querySelectorAll<HTMLElement>(".ec-card");
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.remove("ec-hidden"), 150 + i * 120);
          });
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="ec-console" ref={ref}>

      {/* ── Top bar ── */}
      <div className="ec-topbar">
        <span className="ec-topbar-title">
          MODDULO Control Panel
        </span>
        <span className="ec-topbar-online">
          <span className="ec-dot ec-dot-live" />
          LIVE
        </span>
      </div>

      <div className="ec-grid">

        {/* ── Active Projects ── */}
        <div className="ec-card ec-hidden ec-span2">
          <div className="ec-head">
            <span className="ec-label">Active Projects</span>
            <span className="ec-badge">3 active</span>
          </div>
          <table className="ec-table">
            <tbody>
              {PROJECTS.map((p) => (
                <tr key={p.name} className="ec-tr">
                  <td className="ec-td ec-td-name">{p.name}</td>
                  <td className="ec-td ec-td-tech">{p.tech}</td>
                  <td className="ec-td ec-td-bar">
                    <div className="ec-bar-track">
                      <div className="ec-bar-fill" style={{ width: `${p.pct}%` }} />
                    </div>
                  </td>
                  <td className="ec-td ec-td-st">
                    <span className={`ec-dot ec-dot-${p.dot}`} />
                    <span>{p.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Deployments ── */}
        <div className="ec-card ec-hidden">
          <div className="ec-head">
            <span className="ec-label">Deployments</span>
          </div>
          <div className="ec-deploys">
            {DEPLOYS.map((d, i) => (
              <div key={i} className="ec-deploy-row">
                <span className={`ec-dot ec-dot-${d.dot}`} />
                <span className="ec-deploy-time">{d.time}</span>
                <span className="ec-deploy-name">{d.name}</span>
                <span className={`ec-deploy-st ec-ds-${d.dot}`}>{d.status}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Design System ── */}
        <div className="ec-card ec-hidden ec-hide-mobile">
          <div className="ec-head">
            <span className="ec-label">Design System</span>
          </div>
          <div className="ec-tokens">
            {TOKENS.map((t) => (
              <div key={t.name} className="ec-token-row">
                <span className="ec-swatch" style={{ background: t.color }} />
                <span className="ec-token-name">{t.name}</span>
                <span className="ec-token-val">{t.val}</span>
              </div>
            ))}
          </div>
          <div className="ec-type-preview">
            <span style={{ fontFamily: "var(--font-display)", fontSize: 14 }}>Ag</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>Ag</span>
            <span style={{ fontFamily: "var(--font-body)", fontSize: 13 }}>Ag</span>
          </div>
        </div>

        {/* ── Architecture ── */}
        <div className="ec-card ec-hidden ec-span2">
          <div className="ec-head">
            <span className="ec-label">Architecture</span>
          </div>
          <svg
            viewBox="0 0 300 40"
            preserveAspectRatio="xMidYMid meet"
            width="100%"
            height="auto"
            aria-hidden="true"
            className="ec-arch-svg"
          >
            {/* Flowing connector lines */}
            {ARCH.slice(0, -1).map((n, i) => {
              const next = ARCH[i + 1];
              return (
                <line
                  key={i}
                  x1={n.cx + n.w / 2}
                  y1={20}
                  x2={next.cx - next.w / 2}
                  y2={20}
                  className={`ec-seg ec-seg-${i}`}
                />
              );
            })}
            {/* Node boxes */}
            {ARCH.map((n, i) => (
              <g key={n.label}>
                <rect
                  x={n.cx - n.w / 2}
                  y={6}
                  width={n.w}
                  height={28}
                  rx={3}
                  className={`ec-node ec-node-${i}`}
                />
                <text
                  x={n.cx}
                  y={20}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  className="ec-node-lbl"
                >
                  {n.label}
                </text>
              </g>
            ))}
          </svg>
        </div>

      </div>
    </div>
  );
}
