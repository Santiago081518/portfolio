"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (
      e: MouseEvent
    ) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        z-0
      "
    >
      <div
        className="
          absolute
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-500/10
          blur-[120px]
          transition-transform
          duration-150
        "
        style={{
          transform: `translate(${position.x - 250}px, ${position.y - 250}px)`,
        }}
      />
    </div>
  );
}