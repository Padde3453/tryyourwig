import React, { useRef, useEffect } from 'react';
import { createNoise3D } from 'simplex-noise';

/**
 * --- CENTRAL CONFIGURATION ---
 * Adjust these values to change the animation behavior.
 */
const WAVE_CONFIG = {
  strandCount: 70,
  blurAmount: 2,
  opacity: 1.0,
  speedMultiplier: 1.0,
  blendMode: 'multiply',
  colors: [
    { h: 40, s: 15, l: 50 },  // Ash/Dark Blonde
    { h: 30, s: 40, l: 25 },  // Brown/Brunette
    { h: 15, s: 50, l: 35 },  // Red Hair
    { h: 0, s: 0, l: 5 },     // Deep Black
    { h: 40, s: 15, l: 50 },  // Ash/Dark Blonde
    { h: 45, s: 10, l: 65 }   // Platinum/White Blonde
  ]
};

const BackgroundWaves: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // --- Noise & Math Helpers ---
    const noise3D = createNoise3D();
    const noise = { noise3D: (x: number, y: number, z: number) => noise3D(x, y, z) };

    const { cos, PI } = Math;
    const TAU = PI * 2;

    function hsl(h: number, s: number, l: number, a: number = 1) {
      return `hsla(${h}, ${s}%, ${l}%, ${a})`;
    }

    // --- Canvas Resize Logic ---
    let width: number, height: number, width_half: number, height_half: number;

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      width_half = width / 2;
      height_half = height / 2;
      canvas.width = width;
      canvas.height = height;
    };

    // --- Animation State ---
    let accumulatedTime = 0;

    // --- Draw Function ---
    function draw(deltaTime: number) {
      // 1. Clear Canvas
      ctx!.clearRect(0, 0, width, height);
      ctx!.globalCompositeOperation = 'source-over';
      ctx!.filter = 'none';

      // 2. Update Time
      accumulatedTime += deltaTime * 0.0001 * WAVE_CONFIG.speedMultiplier;

      const xCount = 40;
      const yCount = WAVE_CONFIG.strandCount;
      const iXCount = 1 / (xCount - 1);
      const iYCount = 1 / (yCount - 1);
      let time = accumulatedTime;
      let timeStep = 0.01;

      // Draw Lines
      ctx!.save();
      ctx!.translate(width_half, height_half);
      ctx!.beginPath();
      let localTime = time;

      for (let j = 0; j < yCount; j++) {
        let tj = j * iYCount;
        let c = cos(tj * TAU + localTime) * 0.1;
        for (let i = 0; i < xCount; i++) {
          let tParam = i * iXCount;
          let n = noise.noise3D(tParam, localTime, c);
          let y = n * height_half;
          let x = tParam * (width + 20) - width_half - 10;
          if (i === 0) ctx!.moveTo(x, y);
          else ctx!.lineTo(x, y);
        }
        localTime += timeStep;
      }

      ctx!.globalCompositeOperation = 'source-over';

      // Calculate Hair Color
      const hairColors = WAVE_CONFIG.colors;
      const cycleCount = hairColors.length;
      const stepIndex = Math.floor(accumulatedTime) % cycleCount;
      const nextStepIndex = (stepIndex + 1) % cycleCount;
      const stepProgress = accumulatedTime % 1;
      const cStart = hairColors[stepIndex];
      const cEnd = hairColors[nextStepIndex];
      const currentH = cStart.h + (cEnd.h - cStart.h) * stepProgress;
      const currentS = cStart.s + (cEnd.s - cStart.s) * stepProgress;
      const currentL = cStart.l + (cEnd.l - cStart.l) * stepProgress;
      const opacity = WAVE_CONFIG.opacity;
      const hairStrokeColor = hsl(currentH, currentS, currentL, opacity);

      // Subtle glow/shine adjustments based on opacity
      const glowOpacity = Math.max(0.05, opacity * 0.33);
      const shineOpacity = Math.max(0.05, opacity * 0.33);
      const hairGlowColor = hsl(currentH, currentS, currentL, glowOpacity);

      // 1. Draw "Glow" / Shadow
      ctx!.filter = 'blur(8px)';
      ctx!.lineWidth = 8;
      ctx!.strokeStyle = hairGlowColor;
      ctx!.stroke();

      // 2. Draw "Hair Body"
      ctx!.filter = 'none';
      ctx!.lineWidth = 3;
      ctx!.strokeStyle = hairStrokeColor;
      ctx!.stroke();

      // 3. Draw "Shine"
      ctx!.lineWidth = 1;
      ctx!.strokeStyle = `rgba(255, 255, 255, ${shineOpacity})`;
      ctx!.stroke();

      ctx!.restore();
    }

    // --- Animation Loop ---
    let animationFrameId: number;
    let lastTime: number | null = null;
    resize();

    const loop = (timestamp: number) => {
      if (lastTime === null) lastTime = timestamp;
      const deltaTime = timestamp - lastTime;
      lastTime = timestamp;

      // Limit delta time to prevent massive jumps if tab was inactive
      const safeDelta = Math.min(deltaTime, 100);

      draw(safeDelta);
      animationFrameId = requestAnimationFrame(loop);
    };
    loop(0);

    // --- Event Listeners ---
    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full block transition-all duration-300 pointer-events-none"
      style={{
        mixBlendMode: WAVE_CONFIG.blendMode as React.CSSProperties['mixBlendMode'],
        filter: `blur(${WAVE_CONFIG.blurAmount}px)`
      }}
    />
  );
};

export default BackgroundWaves;
