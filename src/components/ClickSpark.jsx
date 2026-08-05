import { useRef, useEffect, useCallback } from 'react';

/**
 * GlobalClickSpark — true full-page spark overlay.
 * - Canvas is position:fixed covering 100vw × 100vh
 * - Click listener is on `document` so it fires everywhere
 * - clientX/Y used directly (no rect offset needed)
 * - Renders as a sibling to App, not a wrapper
 */
const ClickSpark = ({
  sparkColor = '#fff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = 'ease-out',
  extraScale = 1.0,
}) => {
  const canvasRef = useRef(null);
  const sparksRef = useRef([]);

  /* ── resize: keep canvas pixel-perfect with viewport ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const setSize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setSize();
    window.addEventListener('resize', setSize);
    return () => window.removeEventListener('resize', setSize);
  }, []);

  /* ── easing helper ── */
  const easeFunc = useCallback(t => {
    switch (easing) {
      case 'linear':      return t;
      case 'ease-in':     return t * t;
      case 'ease-in-out': return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      default:            return t * (2 - t); // ease-out
    }
  }, [easing]);

  /* ── animation loop ── */
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;

    const draw = (timestamp) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      sparksRef.current = sparksRef.current.filter(spark => {
        const elapsed = timestamp - spark.startTime;
        if (elapsed >= duration) return false;

        const progress = elapsed / duration;
        const eased    = easeFunc(progress);
        const distance = eased * sparkRadius * extraScale;
        const lineLen  = sparkSize * (1 - eased);

        const x1 = spark.x + distance * Math.cos(spark.angle);
        const y1 = spark.y + distance * Math.sin(spark.angle);
        const x2 = spark.x + (distance + lineLen) * Math.cos(spark.angle);
        const y2 = spark.y + (distance + lineLen) * Math.sin(spark.angle);

        ctx.strokeStyle = sparkColor;
        ctx.lineWidth   = 2;
        ctx.globalAlpha = 1 - eased * 0.5; // gentle fade
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.globalAlpha = 1;

        return true;
      });

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(animId);
  }, [sparkColor, sparkSize, sparkRadius, duration, easeFunc, extraScale]);

  /* ── global click → spawn sparks at cursor ── */
  useEffect(() => {
    const handleClick = (e) => {
      // clientX/Y maps 1:1 to our fixed canvas (no offset needed)
      const x = e.clientX;
      const y = e.clientY;
      const now = performance.now();

      const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
        x,
        y,
        angle: (2 * Math.PI * i) / sparkCount,
        startTime: now,
      }));

      sparksRef.current.push(...newSparks);
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [sparkCount]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',   // never blocks clicks
        zIndex: 99999,
        display: 'block',
      }}
    />
  );
};

export default ClickSpark;

