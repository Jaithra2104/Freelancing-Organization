import { useEffect, useState } from 'react';

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    let frameId;
    const updatePosition = (e) => {
      frameId = requestAnimationFrame(() => {
        setPosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', updatePosition);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div 
      className="cursor-spotlight"
      style={{
        left: position.x,
        top: position.y
      }}
    />
  );
}
