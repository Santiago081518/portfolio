import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactSection() {
  return (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
      id="contact"
      className="relative z-10 max-w-5xl mx-auto px-6 py-32"
    >
      <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-10 md:p-16 overflow-hidden relative">

        {/* Glow */}
        <div className="absolute inset-0 bg-cyan-500/5 blur-3xl" />

        <div className="relative z-10 text-center space-y-8">

          <div className="space-y-4">
            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              Contacto
            </span>

            <h2 className="text-5xl font-bold">
              Trabajemos Juntos
            </h2>

            <p className="text-zinc-300 max-w-2xl mx-auto text-lg leading-relaxed">
              Estoy interesado en oportunidades como desarrollador FullStack,
              backend o frontend. También disponible para proyectos freelance
              y aplicaciones web modernas.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4">

            {/* Email */}
            <a
              href="mailto:sboterovalencia@gmail.com"
              className="
                flex items-center gap-3
                px-8 py-4
                bg-cyan-400
                text-black
                font-semibold
                rounded-2xl
                hover:scale-105
                transition-all
                duration-300
                shadow-lg
                shadow-cyan-500/20
                hover:shadow-cyan-500/40
              "
            >
              <Mail size={20} />
              Email
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/TU_GITHUB"
              target="_blank"
              className="
                flex items-center gap-3
                px-8 py-4
                border border-zinc-700
                rounded-2xl
                hover:bg-zinc-900
                hover:border-cyan-400/40
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <FaGithub size={20} />
              GitHub
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/57TU_NUMERO"
              target="_blank"
              className="
                flex items-center gap-3
                px-8 py-4
                border border-zinc-700
                rounded-2xl
                hover:bg-zinc-900
                hover:border-cyan-400/40
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              <FaWhatsapp size={20} />
              WhatsApp
            </a>

          </div>

        </div>
      </div>
    </motion.section>
  );
}