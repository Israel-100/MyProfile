import { useEffect, useRef } from "react";

/**
 * LiquidEther — enhanced fluid gradient background
 * Smooth, glowing blobs with fluid motion.
 * Works perfectly in React (Vite / CRA)
 */
export default function LiquidEther({
  colors = ["#5227FF", "#FF9FFC", "#B19EEF"],
  speed = 1,
  blur = 60,
  glow = 0.3,
  resolution = 0.6,
  blobCount = 5,
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth * resolution);
    let height = (canvas.height = window.innerHeight * resolution);

    const resize = () => {
      width = canvas.width = window.innerWidth * resolution;
      height = canvas.height = window.innerHeight * resolution;
    };
    window.addEventListener("resize", resize);

    // Each blob has its own position and motion pattern
    const blobs = Array.from({ length: blobCount }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 200 + Math.random() * 100,
      dx: 0.5 + Math.random() * 0.5,
      dy: 0.5 + Math.random() * 0.5,
      color: colors[i % colors.length],
      angle: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Create blending look
      ctx.globalCompositeOperation = "lighter";

      blobs.forEach((b, ) => {
        b.angle += 0.005 * speed;
        const x = b.x + Math.sin(b.angle * b.dx) * 200;
        const y = b.y + Math.cos(b.angle * b.dy) * 200;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, b.radius);
        gradient.addColorStop(
          0,
          `${b.color}${Math.floor(glow * 255).toString(16)}`
        );
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, b.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";
      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, [colors, speed, blur, glow, resolution, blobCount]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        filter: `blur(${blur}px) saturate(120%)`,
      }}
    />
  );
}
