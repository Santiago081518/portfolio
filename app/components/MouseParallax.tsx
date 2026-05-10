"use client";

import {
  useEffect,
  useState,
} from "react";

export default function MouseParallax() {
  const [position, setPosition] =
    useState({
      x: 0,
      y: 0,
    });

  useEffect(() => {
    const handleMouseMove = (
      e: MouseEvent
    ) => {
      const x =
        (e.clientX /
          window.innerWidth -
          0.5) *
        20;

      const y =
        (e.clientY /
          window.innerHeight -
          0.5) *
        20;

      setPosition({ x, y });
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
        fixed
        inset-0
        pointer-events-none
        z-0
      "
    >

      {/* Circle 1 */}
      <div
        className="
          absolute
          top-[15%]
          left-[10%]
          w-40
          h-40
          rounded-full
          border
          border-cyan-500/10
        "
        style={{
          transform: `translate(${position.x}px, ${position.y}px)`,
          transition:
            "transform 0.2s ease-out",
        }}
      />

      {/* Circle 2 */}
      <div
        className="
          absolute
          bottom-[15%]
          right-[10%]
          w-64
          h-64
          rounded-full
          border
          border-white/5
        "
        style={{
          transform: `translate(${-position.x}px, ${-position.y}px)`,
          transition:
            "transform 0.2s ease-out",
        }}
      />

    </div>
  );
}