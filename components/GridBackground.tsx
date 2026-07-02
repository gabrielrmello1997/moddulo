"use client";

import { useEffect, useRef } from "react";

const CELL = 60;
const RADIUS = 180;
const MAX_EXPAND = 8;

export default function GridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let targetX = -9999;
    let targetY = -9999;
    let smoothX = -9999;
    let smoothY = -9999;
    let rafId = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      draw();
    };

    const startRAF = () => {
      if (rafId === 0) rafId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      startRAF();
    };

    const handleMouseLeave = () => {
      targetX = -9999;
      targetY = -9999;
      startRAF();
    };

    const draw = () => {
      const prevX = smoothX;
      const prevY = smoothY;
      smoothX += (targetX - smoothX) * 0.1;
      smoothY += (targetY - smoothY) * 0.1;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / CELL) + 2;
      const rows = Math.ceil(canvas.height / CELL) + 2;
      const offsetX = (canvas.width % CELL) / 2;
      const offsetY = (canvas.height % CELL) / 2;

      for (let r = -1; r < rows; r++) {
        for (let c = -1; c < cols; c++) {
          const baseCX = offsetX + c * CELL;
          const baseCY = offsetY + r * CELL;
          const centerX = baseCX + CELL / 2;
          const centerY = baseCY + CELL / 2;

          const dist = Math.hypot(centerX - smoothX, centerY - smoothY);
          const t = Math.max(0, 1 - dist / RADIUS);
          const eased = t * t * (3 - 2 * t);

          const expand = eased * MAX_EXPAND;
          const alpha = 0.06 + eased * 0.32;
          const lineWidth = 0.6 + eased * 0.5;

          ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
          ctx.lineWidth = lineWidth;
          ctx.strokeRect(
            baseCX - expand / 2,
            baseCY - expand / 2,
            CELL + expand,
            CELL + expand
          );
        }
      }

      const settled =
        Math.abs(smoothX - prevX) < 0.05 && Math.abs(smoothY - prevY) < 0.05;
      if (settled) {
        rafId = 0;
      } else {
        rafId = requestAnimationFrame(draw);
      }
    };

    resize();
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="grid-bg">
      <canvas ref={canvasRef} className="grid-bg-canvas" />
    </div>
  );
}
