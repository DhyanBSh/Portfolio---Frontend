import React, { useRef, useEffect } from 'react';
import './CursorEffect.css';

const CursorEffect = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const smoothedMouse = useRef({ x: -1000, y: -1000 });
  const pixels = [];
  const pixelSize = 6;
  const gap = 2;
  const randomGlowDuration = 1000; // ms

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
          pixels.push({ x, y, glow: 0, random: false, timestamp: 0 });
        }
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const update = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth the mouse movement
      smoothedMouse.current.x = lerp(smoothedMouse.current.x, mousePos.current.x, 0.1);
      smoothedMouse.current.y = lerp(smoothedMouse.current.y, mousePos.current.y, 0.1);

      pixels.forEach((pixel) => {
        const dx = smoothedMouse.current.x - pixel.x;
        const dy = smoothedMouse.current.y - pixel.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let targetGlow = 0;
        if (distance < 100) {
          targetGlow = 1 - distance / 100;
        }

        if (pixel.random) {
          if (time - pixel.timestamp > randomGlowDuration) {
            pixel.random = false;
          } else {
            targetGlow = Math.max(targetGlow, 0.5);
          }
        }

        // Smooth glow transition
        pixel.glow = lerp(pixel.glow, targetGlow, 0.08);

        const color = pixel.glow > 0
          ? `rgba(0, 255, 247, ${pixel.glow})`
          : 'rgba(120, 120, 120, 0.08)';

        ctx.fillStyle = color;
        ctx.fillRect(pixel.x, pixel.y, pixelSize, pixelSize);
      });

      requestAnimationFrame(update);
    };

    const handleMove = (e) => {
      const touch = e.touches ? e.touches[0] : e;
      mousePos.current = { x: touch.clientX, y: touch.clientY };
    };

    const randomizeGlow = () => {
      const count = Math.floor(pixels.length * 0.02); // 2% randomly glow
      for (let i = 0; i < count; i++) {
        const pixel = pixels[Math.floor(Math.random() * pixels.length)];
        pixel.random = true;
        pixel.timestamp = performance.now();
      }
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('touchmove', handleMove, { passive: true });

    const glowInterval = setInterval(randomizeGlow, 1500);
    requestAnimationFrame(update);

    return () => {
      clearInterval(glowInterval);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('touchmove', handleMove);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-effect-canvas" />;
};

export default CursorEffect;
