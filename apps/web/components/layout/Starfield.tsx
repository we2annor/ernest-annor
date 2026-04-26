"use client";

import { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  twinkleOffset: number;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);
  const starsRef = useRef<Star[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    function resize() {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = document.documentElement.scrollHeight;
    }

    function generateStars() {
      if (!canvas) return;
      const count = Math.floor((canvas.width * canvas.height) / 8000);
      starsRef.current = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.02 + 0.005,
        twinkleSpeed: Math.random() * 0.008 + 0.002,
        twinkleOffset: Math.random() * Math.PI * 2,
      }));
    }

    function draw(time: number) {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach((star) => {
        const twinkle =
          Math.sin(time * star.twinkleSpeed + star.twinkleOffset) * 0.2;
        const opacity = Math.max(0, Math.min(1, star.opacity + twinkle));

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(draw);
    }

    resize();
    generateStars();
    animationRef.current = requestAnimationFrame(draw);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      generateStars();
    });
    resizeObserver.observe(document.documentElement);

    return () => {
      cancelAnimationFrame(animationRef.current);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className='fixed inset-0 pointer-events-none'
      style={{ zIndex: 0 }}
      aria-hidden='true'
    />
  );
}
