export default function GridBackground() {
  return (
    <div
      className="
        fixed
        inset-0
        z-0
        pointer-events-none
      "
    >

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.05]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Fade */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-[#050816]/30
          to-[#050816]
        "
      />

    </div>
  );
}