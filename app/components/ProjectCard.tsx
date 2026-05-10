import Image from "next/image";

import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  demoUrl: string;
  githubFrontend?: string;
  githubBackend?: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  image,
  demoUrl,
  githubFrontend,
  githubBackend,
}: ProjectCardProps) {
  return (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
      className="
      group
      relative
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-900/40
      overflow-hidden
      transition-all
      duration-500
      hover:-translate-y-2
      hover:border-cyan-400/40
      hover:shadow-2xl
      hover:shadow-cyan-500/10
    "
    >
      {/* IMAGE */}
      <div className="relative h-60 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-black/50" />

        <div
          className="
          absolute
          inset-0
          bg-cyan-500/10
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
        "
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 p-8 space-y-5">
        <h3
          className="
          text-3xl
          font-bold
          text-white
          transition
          duration-300
          group-hover:text-cyan-300
        "
        >
          {title}
        </h3>

        <p className="text-zinc-300 leading-relaxed">
          {description}
        </p>

        {/* TECH */}
        <div className="flex flex-wrap gap-2">
          {tech.map((item) => (
            <span
              key={item}
              className="
                px-3
                py-1
                text-sm
                rounded-full
                border
                border-white/10
                bg-black/30
                text-zinc-200
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 pt-2">
          <a
            href={demoUrl}
            target="_blank"
            className="
            px-5
            py-2
            rounded-xl
            bg-cyan-400
            text-black
            font-semibold
            transition-all
            duration-300
            hover:scale-105
            hover:shadow-lg
            hover:shadow-cyan-500/30
          "
          >
            Demo
          </a>

          <div className="flex gap-3 flex-wrap">
            {githubFrontend && (
              <a
                href={githubFrontend}
                target="_blank"
                className="
                px-5
                py-2
                rounded-xl
                border
                border-white/10
                hover:bg-white/5
                transition-all
                duration-300
                hover:border-cyan-400/40
              "
              >
                Frontend
              </a>
            )}

            {githubBackend && (
              <a
                href={githubBackend}
                target="_blank"
                className="
                px-5
                py-2
                rounded-xl
                border
                border-white/10
                hover:bg-white/5
                transition-all
                duration-300
                hover:border-cyan-400/40
              "
              >
                Backend
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}