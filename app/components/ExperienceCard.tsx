"use client";

import { useState } from "react";

import { motion } from "framer-motion";

type ExperienceCardProps = {
  company: string;
  role: string;
  date: string;
  shortDescription: string;
  fullDescription: string;
};

export default function ExperienceCard({
  company,
  role,
  date,
  shortDescription,
  fullDescription,
}: ExperienceCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
      className="
      relative
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/40
      p-8
      overflow-hidden
      transition-all
      duration-500
      hover:border-cyan-400/30
    "
    >
      {/* Glow */}
      <div
        className="
        absolute
        inset-0
        bg-cyan-500/5
        opacity-0
        hover:opacity-100
        transition
        duration-500
      "
      />

      <div className="relative z-10 space-y-5">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              {role}
            </h3>

            <p className="text-cyan-400">
              {company}
            </p>
          </div>

          <span className="text-zinc-400 text-sm">
            {date}
          </span>
        </div>

        {/* Short Description */}
        <p className="text-zinc-300 leading-relaxed">
          {shortDescription}
        </p>

        {/* Expandable Content */}
        {expanded && (
          <div
            className="
            text-zinc-400
            leading-relaxed
            border-t
            border-zinc-800
            pt-5
            whitespace-pre-line
          "
          >
            {fullDescription}
          </div>
        )}

        {/* Button */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="
          text-cyan-400
          hover:text-cyan-300
          transition
          font-medium
        "
        >
          {expanded ? "Ver menos ↑" : "Ver más ↓"}
        </button>
      </div>
    </motion.div>
  );
}