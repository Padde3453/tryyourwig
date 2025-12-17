import { useEffect, useRef } from 'react';

interface Wave {
  y: number;
  amplitude: number;
  frequency: number;
  speed: number;
  phase: number;
  color: string;
  dotCount: number;
}

export const BackgroundWaves = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Wave configurations - multiple flowing waves
    const waves: Wave[] = [
      { y: 0.15, amplitude: 60, frequency: 0.003, speed: 0.0003, phase: 0, color: '#E6E6FA', dotCount: 120 },
      { y: 0.25, amplitude: 80, frequency: 0.0025, speed: 0.0004, phase: Math.PI * 0.3, color: '#D8BFD8', dotCount: 140 },
      { y: 0.35, amplitude: 50, frequency: 0.004, speed: 0.0005, phase: Math.PI * 0.6, color: '#DDA0DD', dotCount: 100 },
      { y: 0.5, amplitude: 100, frequency: 0.002, speed: 0.0003, phase: Math.PI * 0.9, color: '#BA55D3', dotCount: 160 },
      { y: 0.6, amplitude: 70, frequency: 0.0035, speed: 0.0004, phase: Math.PI * 1.2, color: '#9370DB', dotCount: 130 },
      { y: 0.75, amplitude: 90, frequency: 0.0028, speed: 0.0005, phase: Math.PI * 1.5, color: '#B19CD9', dotCount: 150 },
      { y: 0.85, amplitude: 55, frequency: 0.0032, speed: 0.0003, phase: Math.PI * 1.8, color: '#E6E6FA', dotCount: 110 },
    ];

    let time = 0;

    const drawWave = (wave: Wave, time: number) => {
      const { y: baseY, amplitude, frequency, speed, phase, color, dotCount } = wave;
      const centerY = canvas.height * baseY;

      for (let i = 0; i < dotCount; i++) {
        const x = (i / dotCount) * (canvas.width + 200) - 100;
        
        // Smooth sine wave calculation with multiple harmonics for organic feel
        const wave1 = Math.sin(x * frequency + time * speed * 1000 + phase) * amplitude;
        const wave2 = Math.sin(x * frequency * 1.5 + time * speed * 800 + phase * 1.3) * amplitude * 0.3;
        const wave3 = Math.sin(x * frequency * 0.5 + time * speed * 600 + phase * 0.7) * amplitude * 0.5;
        
        let y = centerY + wave1 + wave2 + wave3;

        // Mouse repulsion effect
        const dx = x - mouseRef.current.x;
        const dy = y - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 150;
        
        if (distance < maxDistance) {
          const force = (1 - distance / maxDistance) * 30;
          const angle = Math.atan2(dy, dx);
          y += Math.sin(angle) * force;
        }

        // Draw dot with slight size variation
        const dotSize = 1.5 + Math.sin(x * 0.01 + time * 0.001) * 0.5;
        
        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.6 + Math.sin(x * 0.005 + time * 0.0005) * 0.2;
        ctx.fill();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw all waves
      waves.forEach((wave) => {
        drawWave(wave, time);
      });

      time += 16; // ~60fps timing
      ctx.globalAlpha = 1;
      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen pointer-events-none"
      style={{
        zIndex: -1,
        background: 'linear-gradient(180deg, #FAFAFA 0%, #F5F0F8 100%)',
      }}
    />
  );
};
