'use client'

import { motion } from "framer-motion";

export default function Footer() {
  return (
  <motion.footer
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1 }}
    className="relative z-10 border-t border-zinc-800 mt-20"
    >

      <div className="max-w-7xl mx-auto px-6 py-10">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">

          {/* Left */}
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold">
              Santiago Botero
            </h3>

            <p className="text-zinc-400">
              FullStack Developer
            </p>
          </div>

          {/* Center */}
          <div className="flex items-center gap-6 text-zinc-400">

            <a
              href="#projects"
              className="hover:text-cyan-400 transition"
            >
              Proyectos
            </a>

            <a
              href="#experience"
              className="hover:text-cyan-400 transition"
            >
              Experiencia
            </a>

            <a
              href="#contact"
              className="hover:text-cyan-400 transition"
            >
              Contacto
            </a>

          </div>

          {/* Right */}
          <div className="text-zinc-500 text-sm text-center md:text-right">
            © 2026 Santiago Botero.
            <br />
            Built with Next.js & Tailwind.
          </div>

        </div>
      </div>
    </motion.footer>
  );
}