"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = [
  "projects",
  "experience",
  "contact",
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const [activeSection, setActiveSection] =
    useState("");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      const yOffset = -80;

      const targetY =
        section.getBoundingClientRect().top +
        window.pageYOffset +
        yOffset;

      const startY = window.scrollY;

      const difference =
        targetY - startY;

      const duration = 700;

      let startTime: number | null = null;

      function step(timestamp: number) {
        if (!startTime)
          startTime = timestamp;

        const progress =
          timestamp - startTime;

        const percent = Math.min(
          progress / duration,
          1
        );

        const easeInOut =
          percent < 0.5
            ? 2 * percent * percent
            : 1 -
              Math.pow(
                -2 * percent + 2,
                2
              ) / 2;

        window.scrollTo(
          0,
          startY +
            difference * easeInOut
        );

        if (progress < duration) {
          requestAnimationFrame(step);
        }
      }

      requestAnimationFrame(step);
    }

    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY + 120;

      for (const section of sections) {
        const element =
          document.getElementById(section);

        if (element) {
          const offsetTop =
            element.offsetTop;

          const offsetHeight =
            element.offsetHeight;

          if (
            scrollPosition >=
              offsetTop &&
            scrollPosition <
              offsetTop +
                offsetHeight
          ) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    handleScroll();

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      border-b
      border-white/10
      backdrop-blur-xl
      bg-black/30
    "
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="text-xl font-bold tracking-wide"
        >
          Santiago Botero
        </button>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm">

          {sections.map((section) => (
            <button
              key={section}
              onClick={() =>
                scrollToSection(section)
              }
              className={`
                transition
                capitalize
                ${
                  activeSection ===
                  section
                    ? "text-cyan-400"
                    : "text-zinc-300 hover:text-cyan-400"
                }
              `}
            >
              {section}
            </button>
          ))}

        </div>

        {/* Mobile Button */}
        <button
          onClick={() =>
            setOpen(!open)
          }
          className="md:hidden"
        >
          {open ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div
          className="
          md:hidden
          border-t
          border-white/10
          bg-black/90
          backdrop-blur-xl
        "
        >
          <div className="flex flex-col px-6 py-6 gap-6">

            {sections.map((section) => (
              <button
                key={section}
                onClick={() =>
                  scrollToSection(section)
                }
                className={`
                  text-left
                  transition
                  capitalize
                  ${
                    activeSection ===
                    section
                      ? "text-cyan-400"
                      : "text-zinc-300 hover:text-cyan-400"
                  }
                `}
              >
                {section}
              </button>
            ))}

          </div>
        </div>
      )}
    </header>
  );
}