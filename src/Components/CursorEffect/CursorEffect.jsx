import React, { useRef, useEffect } from 'react';
import './CursorEffect.css';

const CursorEffect = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const smoothedMouse = useRef({ x: -1000, y: -1000 });
  const pixels = [];
  const ripples = [];
  const pixelSize = 6;
  const gap = 2;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initPixels();
    };

    const initPixels = () => {
      pixels.length = 0;
      for (let y = 0; y < canvas.height; y += pixelSize + gap) {
        for (let x = 0; x < canvas.width; x += pixelSize + gap) {
          pixels.push({
            x,
            y,
            glow: 0,
            random: false,
            timestamp: 0,
            duration: Math.random() * 2000 + 1000 // 1s–3s glow duration
          });
        }
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const update = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth cursor
      smoothedMouse.current.x = lerp(smoothedMouse.current.x, mousePos.current.x, 0.1);
      smoothedMouse.current.y = lerp(smoothedMouse.current.y, mousePos.current.y, 0.1);

      // Draw ripple effects
      ripples.forEach((r, i) => {
        r.radius += 1.5;
        r.opacity -= 0.01;
        if (r.opacity <= 0) ripples.splice(i, 1);

        const gradient = ctx.createRadialGradient(r.x, r.y, 0, r.x, r.y, r.radius);
        gradient.addColorStop(0, `rgba(0,255,247,${r.opacity})`);
        gradient.addColorStop(1, `rgba(0,0,0,0)`);

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      pixels.forEach((pixel) => {
        const dx = smoothedMouse.current.x - pixel.x;
        const dy = smoothedMouse.current.y - pixel.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let targetGlow = 0;
        if (distance < 80) {
          targetGlow = 1 - distance / 80;
        }

        if (pixel.random) {
          if (time - pixel.timestamp > pixel.duration) {
            pixel.random = false;
          } else {
            targetGlow = Math.max(targetGlow, 0.5);
          }
        }

        pixel.glow = lerp(pixel.glow, targetGlow, 0.08);

        // Neon shimmer effect
        const color = pixel.glow > 0
          ? `rgba(0,255,247,${pixel.glow})`
          : 'rgba(100, 100, 100, 0)';

        ctx.fillStyle = color;
        ctx.fillRect(pixel.x, pixel.y, pixelSize, pixelSize);
      });

      requestAnimationFrame(update);
    };

    const handleMove = (e) => {
      const touch = e.touches ? e.touches[0] : e;
      mousePos.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleClick = (e) => {
      const { clientX, clientY } = e;
      ripples.push({
        x: clientX,
        y: clientY,
        radius: 0,
        opacity: 0.5
      });
    };

    const randomizeGlow = () => {
      const pixel = pixels[Math.floor(Math.random() * pixels.length)];
      pixel.random = true;
      pixel.timestamp = performance.now();
      pixel.duration = Math.random() * 2000 + 1000;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('touchmove', handleMove, { passive: true });

    const glowInterval = setInterval(randomizeGlow, 100); // individual random flickers
    requestAnimationFrame(update);

    return () => {
      clearInterval(glowInterval);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-effect-canvas" />;
};

export default CursorEffect;
