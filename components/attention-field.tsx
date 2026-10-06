"use client";

import { useEffect, useRef } from "react";

// Plasma colormap, starting close to the page ink so cold cells disappear.
const STOPS: Array<[number, [number, number, number]]> = [
  [0, [20, 16, 58]],
  [0.3, [59, 28, 140]],
  [0.55, [146, 38, 150]],
  [0.72, [199, 48, 124]],
  [0.88, [246, 163, 59]],
  [1, [255, 221, 150]],
];

function buildLut(): string[] {
  const lut: string[] = [];
  for (let n = 0; n < 256; n++) {
    const v = n / 255;
    let k = 0;
    while (k < STOPS.length - 2 && v > STOPS[k + 1][0]) k++;
    const [p0, c0] = STOPS[k];
    const [p1, c1] = STOPS[k + 1];
    const f = (v - p0) / (p1 - p0);
    const channel = (c: number) => Math.round(c0[c] + (c1[c] - c0[c]) * f);
    lut.push(`rgb(${channel(0)},${channel(1)},${channel(2)})`);
  }
  return lut;
}

// Stable per-cell jitter so the field reads as data, not a smooth gradient.
function hash(i: number, j: number): number {
  const s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
  return s - Math.floor(s);
}

const FRAME_MS = 33;
const POINTER_RADIUS = 110;

export default function AttentionField({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const lut = buildLut();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pointer = { x: 0, y: 0, tx: 0, ty: 0, heat: 0, target: 0 };

    let width = 0;
    let height = 0;
    let step = 30;
    let cols = 0;
    let rows = 0;
    let raf = 0;
    let last = 0;
    let visible = true;

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const size = step - 4;
      const radius = step < 30 ? 3 : 5;
      const falloff = 2 * POINTER_RADIUS * POINTER_RADIUS;

      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const wave =
            Math.sin(i * 0.31 + t * 0.5) +
            Math.sin(j * 0.27 - t * 0.38) +
            Math.sin((i + j) * 0.19 + t * 0.27) +
            Math.sin(Math.hypot(i - cols * 0.6, j - rows * 0.45) * 0.42 - t * 0.6);
          let v = Math.pow((wave / 4 + 1) / 2, 2);

          // The diagonal every attention matrix has: tokens attending to themselves.
          const d = i / cols - j / rows;
          v += Math.exp(-(d * d) / 0.004) * 0.36 * (0.6 + 0.4 * Math.sin(t * 0.8 + i * 0.5));
          v *= 0.7 + 0.6 * hash(i, j);

          if (pointer.heat > 0.01) {
            const dx = i * step + step / 2 - pointer.x;
            const dy = j * step + step / 2 - pointer.y;
            v += Math.exp(-(dx * dx + dy * dy) / falloff) * pointer.heat * 0.5;
          }

          v = Math.min(1, Math.max(0, v));
          ctx.globalAlpha = 0.04 + 0.96 * v;
          ctx.fillStyle = lut[(v * 255) | 0];
          ctx.beginPath();
          if (ctx.roundRect) {
            ctx.roundRect(i * step, j * step, size, size, radius);
          } else {
            ctx.rect(i * step, j * step, size, size);
          }
          ctx.fill();
        }
      }
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      step = width < 640 ? 22 : 30;
      cols = Math.ceil(width / step);
      rows = Math.ceil(height / step);
      if (reduceMotion) draw(6);
    };

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    if (reduceMotion) {
      return () => resizeObserver.disconnect();
    }

    const frame = (now: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible || now - last < FRAME_MS) return;
      last = now;
      pointer.x += (pointer.tx - pointer.x) * 0.18;
      pointer.y += (pointer.ty - pointer.y) * 0.18;
      pointer.heat += (pointer.target - pointer.heat) * 0.08;
      draw(now / 1000);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.tx = event.clientX - rect.left;
      pointer.ty = event.clientY - rect.top;
      const inside =
        pointer.tx > -POINTER_RADIUS &&
        pointer.ty > -POINTER_RADIUS &&
        pointer.tx < rect.width + POINTER_RADIUS &&
        pointer.ty < rect.height + POINTER_RADIUS;
      if (inside && pointer.heat < 0.01) {
        pointer.x = pointer.tx;
        pointer.y = pointer.ty;
      }
      pointer.target = inside ? 1 : 0;
    };

    const coolDown = () => {
      pointer.target = 0;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") coolDown();
    };

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    intersectionObserver.observe(canvas);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    document.documentElement.addEventListener("pointerleave", coolDown);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerup", onPointerUp);
      document.documentElement.removeEventListener("pointerleave", coolDown);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden="true" className={`block h-full w-full ${className}`} />;
}
