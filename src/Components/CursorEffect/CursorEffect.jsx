import React, { useEffect, useRef } from "react";

const CursorEffect = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const width = window.innerWidth;
    const height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;

    // Adjust points count for mobile view
    const isMobile = window.innerWidth <= 768; // You can adjust this threshold if needed
    const pointsCount = isMobile ? 40 : 80; // Reduce points on mobile
    const pointSize = 2;
    const lineDistance = 150;

    // Points array
    const points = Array.from({ length: pointsCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      dx: Math.random() * 0.5 - 0.4, // Reduced speed
      dy: Math.random() * 0.5 - 0.25,
    }));

    // Cursor position
    const cursor = { x: null, y: null };

    // Mouse move event
    const handleMouseMove = (e) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw and move points
      points.forEach((point) => {
        // Draw the point
        ctx.beginPath();
        ctx.arc(point.x, point.y, pointSize, 0, Math.PI * 2);
        ctx.fillStyle = "#00FFF7";
        ctx.fill();

        // Move the point
        point.x += point.dx;
        point.y += point.dy;

        // Bounce on edges
        if (point.x < 0 || point.x > width) point.dx *= -1;
        if (point.y < 0 || point.y > height) point.dy *= -1;

        // Draw lines to nearby points and cursor
        points.forEach((otherPoint) => {
          const distance = Math.hypot(point.x - otherPoint.x, point.y - otherPoint.y);
          if (distance < lineDistance) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(otherPoint.x, otherPoint.y);
            ctx.strokeStyle = `rgba(0, 500, 255, ${1 - distance / lineDistance})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        });

        // Line to cursor
        if (cursor.x && cursor.y) {
          const distanceToCursor = Math.hypot(point.x - cursor.x, point.y - cursor.y);
          if (distanceToCursor < lineDistance) {
            ctx.beginPath();
            ctx.moveTo(point.x, point.y);
            ctx.lineTo(cursor.x, cursor.y);
            ctx.strokeStyle = `rgba(0, 500, 255, ${1 - distanceToCursor / lineDistance})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: "fixed", top: 0, left: 0, zIndex: -1 }} />;
};

export default CursorEffect;
