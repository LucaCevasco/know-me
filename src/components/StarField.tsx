import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  vx: number;
  vy: number;
}

const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();
  const intervalRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      for (let i = 0; i < 288; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2,
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5
        });
      }
      starsRef.current = stars;
    };

    const drawStars = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';

      starsRef.current.forEach((star) => {
        // Calculate distance from mouse
        const dx = mouseRef.current.x - star.x;
        const dy = mouseRef.current.y - star.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Apply force if within range
        if (distance < 120) {
          const force = (120 - distance) / 120;
          star.vx -= (dx / distance) * force * 0.5;
          star.vy -= (dy / distance) * force * 0.5;
        }

        // Add random movement
        if (Math.random() < 0.01) { // 1% chance each frame to change direction
          star.vx += (Math.random() - 0.5) * 0.2;
          star.vy += (Math.random() - 0.5) * 0.2;
        }

        // Limit maximum velocity
        const maxVelocity = 6;
        star.vx = Math.max(Math.min(star.vx, maxVelocity), -maxVelocity);
        star.vy = Math.max(Math.min(star.vy, maxVelocity), -maxVelocity);

        // Apply velocity with damping
        star.x += star.vx;
        star.y += star.vy;
        star.vx *= 0.98;
        star.vy *= 0.98;

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Draw star with subtle glow
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect
        const gradient = ctx.createRadialGradient(
          star.x, star.y, 0,
          star.x, star.y, star.size * 2
        );
        gradient.addColorStop(0, 'rgba(100, 180, 255, 0.3)');
        gradient.addColorStop(1, 'rgba(100, 180, 255, 0)');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2, 0, Math.PI * 2);
        ctx.fill();
        
        ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      });

      animationFrameRef.current = requestAnimationFrame(drawStars);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      };
    };

    const addRandomMovement = () => {
      starsRef.current.forEach(star => {
        star.vx += (Math.random() - 0.7) * 0.7;
        star.vy += (Math.random() - 0.7) * 0.7;
      });
    };

    // Set up interval for random movement
    intervalRef.current = setInterval(addRandomMovement, 900);

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);
    
    resizeCanvas();
    createStars();
    drawStars();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (intervalRef.current) {
        clearInterval(intervalRef.current); // Clean up interval
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ background: 'transparent' }}
    />
  );
};

export default StarField;