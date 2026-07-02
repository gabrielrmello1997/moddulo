"use client";

import { useEffect, useRef } from "react";

export default function AboutWireframe() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("wf-entered");
          const cards = el.querySelectorAll<HTMLElement>(".wf-card");
          cards.forEach((card, i) => {
            setTimeout(() => card.classList.remove("wf-hidden"), 150 + i * 100);
          });
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const bars = [45, 72, 55, 88, 62, 78, 50, 92];
  const metrics = ["82%", "58%", "71%"];
  const tableRows = ["35%", "65%", "48%", "78%"];

  return (
    <div className="wf-frame" ref={ref}>

      {/* Row 1: Chart + Metrics */}
      <div className="wf-row">
        <div className="wf-card wf-hidden wf-chart">
          <div className="wf-lbl" />
          <div className="wf-lbl wf-lbl-sm" />
          <div className="wf-bars">
            {bars.map((h, i) => (
              <div
                key={i}
                className="wf-bar"
                style={{ height: `${h}%`, animationDelay: `${-i * 1.1}s` }}
              />
            ))}
          </div>
        </div>

        <div className="wf-card wf-hidden wf-metrics">
          <div className="wf-lbl" />
          {metrics.map((w, i) => (
            <div key={i} className="wf-metric">
              <div className="wf-metric-lbl" />
              <div className="wf-metric-track">
                <div
                  className="wf-metric-fill"
                  style={{ width: w, animationDelay: `${-i * 2.5}s` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System diagram */}
      <div className="wf-card wf-hidden wf-diagram">
        <svg
          viewBox="0 0 380 70"
          preserveAspectRatio="xMidYMid meet"
          style={{ width: "100%", height: "auto", overflow: "visible" }}
          aria-hidden="true"
        >
          {/* Connection lines */}
          <line x1="64" y1="35" x2="136" y2="35" className="wf-seg wf-seg-0" />
          <line x1="164" y1="35" x2="236" y2="35" className="wf-seg wf-seg-1" />
          <line x1="264" y1="35" x2="336" y2="35" className="wf-seg wf-seg-2" />

          {/* Nodes */}
          {([50, 150, 250, 350] as const).map((cx, i) => (
            <g key={cx}>
              <circle cx={cx} cy={35} r={14} className={`wf-node wf-node-${i}`} />
              <circle cx={cx} cy={35} r={5} className="wf-node-inner" />
            </g>
          ))}
        </svg>
      </div>

      {/* Row 2: Workflow + Table */}
      <div className="wf-row">
        <div className="wf-card wf-hidden wf-workflow">
          <div className="wf-lbl" />
          <div className="wf-steps">
            {[0, 1, 2].map((i) => (
              <div key={i} className="wf-step">
                <div className="wf-step-dot" />
                <div className="wf-step-body">
                  <div className="wf-ph" style={{ width: "65%" }} />
                  <div className="wf-ph wf-ph-sm" style={{ width: "42%" }} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wf-card wf-hidden wf-tbl">
          <div className="wf-lbl" />
          {tableRows.map((w, i) => (
            <div key={i} className="wf-trow">
              <div className="wf-ph" style={{ width: "28%" }} />
              <div className="wf-ph" style={{ width: w }} />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
