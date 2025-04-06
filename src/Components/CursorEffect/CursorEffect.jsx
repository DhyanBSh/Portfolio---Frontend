import React, { useRef, useEffect } from 'react';
import './CursorEffect.css';

const CursorEffect = () => {
  const canvasRef = useRef(null);
  const mousePos = useRef({ x: -1000, y: -1000 });
  const smoothedMouse = useRef({ x: -1000, y: -1000 });
  const pixels = [];
  const ripples = [];
  const particles = [];
  const pixelSize = 6;
  const gap = 2;

  // Audio analyzer refs
  const analyserRef = useRef(null);
  const dataArrayRef = useRef(null);
  const audioEnabled = useRef(false);

  const lastMoveTime = useRef(performance.now());
  const lastMovePos = useRef({ x: -1000, y: -1000 });

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
            baseX: x,
            baseY: y,
            glow: 0,
            random: false,
            timestamp: 0,
            duration: Math.random() * 2000 + 1000,
          });
        }
      }
    };

    const lerp = (a, b, t) => a + (b - a) * t;

    const update = (time) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      smoothedMouse.current.x = lerp(smoothedMouse.current.x, mousePos.current.x, 0.1);
      smoothedMouse.current.y = lerp(smoothedMouse.current.y, mousePos.current.y, 0.1);

      // === GET AUDIO ENERGY ===
      let audioGlowBoost = 0;
      let waveAudioBoost = 0;
      if (audioEnabled.current && analyserRef.current && dataArrayRef.current) {
        analyserRef.current.getByteFrequencyData(dataArrayRef.current);
        const data = dataArrayRef.current;

        // Average frequency in low/mid range
        const bass = data.slice(0, 30).reduce((a, b) => a + b, 0) / 30;
        const mid = data.slice(30, 90).reduce((a, b) => a + b, 0) / 60;

        audioGlowBoost = bass / 255; // 0 to 1
        waveAudioBoost = mid / 255;
      }

      // Animate particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 1;
        if (p.life <= 0) particles.splice(i, 1);
        ctx.fillStyle = `rgba(0,255,247,${p.life / 60})`;
        ctx.fillRect(p.x, p.y, 2, 2);
      }

      // Animate ripples
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

      // Draw pixels with wave and glow
      const waveStrength = 3 + waveAudioBoost * 6;
      const waveSpeed = 0.002;

      pixels.forEach((pixel) => {
        const waveOffsetX = Math.sin(pixel.baseY * 0.05 + time * waveSpeed) * waveStrength;
        const waveOffsetY = Math.cos(pixel.baseX * 0.05 + time * waveSpeed) * waveStrength;

        const x = pixel.baseX + waveOffsetX;
        const y = pixel.baseY + waveOffsetY;

        const dx = smoothedMouse.current.x - x;
        const dy = smoothedMouse.current.y - y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        let targetGlow = 0;
        if (distance < 60) {
          targetGlow = 1 - distance / 60;
        }

        if (pixel.random) {
          if (time - pixel.timestamp > pixel.duration) {
            pixel.random = false;
          } else {
            targetGlow = Math.max(targetGlow, 0.5);
          }
        }

        targetGlow += audioGlowBoost * 0.4;

        pixel.glow = lerp(pixel.glow, targetGlow, 0.08);

        const color = pixel.glow > 0
          ? `rgba(0,255,247,${pixel.glow})`
          : 'rgba(100, 100, 100, 0)';

        ctx.fillStyle = color;
        ctx.fillRect(x, y, pixelSize, pixelSize);
      });

      requestAnimationFrame(update);
    };

    const handleMove = (e) => {
      const touch = e.touches ? e.touches[0] : e;
      const newMousePos = { x: touch.clientX, y: touch.clientY };
      mousePos.current = newMousePos;

      // Calculate the speed of the mouse movement
      const timeSinceLastMove = performance.now() - lastMoveTime.current;
      const distance = Math.sqrt(
        Math.pow(newMousePos.x - lastMovePos.current.x, 2) +
        Math.pow(newMousePos.y - lastMovePos.current.y, 2)
      );

      if (timeSinceLastMove < 110 && distance > 100) {
        // If the mouse moves fast enough, create a shockwave
        ripples.push({
          x: newMousePos.x,
          y: newMousePos.y,
          radius: 0,
          opacity: 0.5,
        });
      }

      lastMoveTime.current = performance.now();
      lastMovePos.current = newMousePos;
    };

    const handleClick = (e) => {
      const { clientX, clientY } = e;

      ripples.push({
        x: clientX,
        y: clientY,
        radius: 0,
        opacity: 0.5,
      });

      for (let i = 0; i < 20; i++) {
        particles.push({
          x: clientX,
          y: clientY,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
          life: 60,
        });
      }
    };

    const randomizeGlow = () => {
      const pixel = pixels[Math.floor(Math.random() * pixels.length)];
      pixel.random = true;
      pixel.timestamp = performance.now();
      pixel.duration = Math.random() * 2000 + 1000;
    };

    // === SETUP AUDIO ANALYZER ===
    const setupAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const source = audioCtx.createMediaStreamSource(stream);
        const analyser = audioCtx.createAnalyser();

        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);

        source.connect(analyser);
        analyserRef.current = analyser;
        dataArrayRef.current = dataArray;
        audioEnabled.current = true;
      } catch (err) {
        console.warn('Microphone access denied or not available:', err);
      }
    };

    setupAudio();

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMove);
    window.addEventListener('click', handleClick);
    window.addEventListener('touchmove', handleMove, { passive: true });

    const glowInterval = setInterval(randomizeGlow, 100);
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
