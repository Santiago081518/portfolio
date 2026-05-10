'use client'

import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import FadeIn from "./components/FadeIn";
import ExperienceCard from "./components/ExperienceCard";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import CursorGlow from "./components/CursorGlow";
import GridBackground from "./components/GridBackground";
import AnimatedBlobs from "./components/AnimatedBlobs";
import MouseParallax from "./components/MouseParallax";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

export default function Home() {
  return (

    <>
      <Navbar />

      <CursorGlow />
      <GridBackground />
      <AnimatedBlobs />
      <MouseParallax />

      <main className="relative min-h-screen overflow-hidden">
        {/* Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[140px] rounded-full" />

        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 min-h-screen pt-20 flex items-center max-w-5xl mx-auto px-6"
        >
          <FadeIn>
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="text-cyan-400 font-medium tracking-[0.3em] uppercase text-sm h-6">
                  <TypeAnimation
                    sequence={[
                      "FullStack Developer",
                      2000,
                      "Backend Developer",
                      2000,
                      "Frontend Developer",
                      2000,
                      "Next.js Developer",
                      2000,
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </div>

                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight">
                  Santiago Botero
                </h1>

                <p className="text-zinc-300 text-base sm:text-lg md:text-2xl max-w-3xl leading-relaxed">
                  Desarrollo aplicaciones web modernas en tiempo real utilizando
                  Next.js, Node.js, WebRTC y arquitecturas backend escalables.
                </p>
              </div>

              {/* Tech Badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                {[
                  "Next.js",
                  "React",
                  "Node.js",
                  "Nest.js",
                  "WebRTC",
                  "PostgreSQL",
                ].map((tech) => (
                  <motion.span
                  key={tech}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                    className="px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900/60 text-sm text-zinc-200 backdrop-blur-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-2">

                <a
                  href="#projects"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-8
                    py-4
                    bg-cyan-400
                    text-black
                    font-semibold
                    rounded-2xl
                    hover:scale-105
                    transition
                    duration-300
                    shadow-lg
                    shadow-cyan-500/20
                  "
                >
                  Ver Proyectos
                </a>

                <a
                  href="https://github.com/Santiago081518"
                  target="_blank"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-8
                    py-4
                    border
                    border-zinc-700
                    rounded-2xl
                    hover:bg-zinc-900
                    transition
                    duration-300
                  "
                >
                  GitHub
                </a>

                <a
                  href="https://wa.me/573118436733"
                  target="_blank"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    px-8
                    py-4
                    border
                    border-zinc-700
                    rounded-2xl
                    hover:bg-zinc-900
                    transition
                    duration-300
                  "
                >
                  WhatsApp
                </a>

              </div>
            </div>
          </FadeIn>
        </motion.section>

        <section
          id="projects"
          className="relative z-10 max-w-7xl mx-auto px-6 pb-32"
        >
          <div className="space-y-4 mb-16">
            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              Proyectos
            </span>

            <h2 className="text-4xl md:text-5xl font-bold">
              Proyectos Destacados
            </h2>
          </div>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-2 gap-8">
              <ProjectCard
                title="WhatsApp Mass Messaging"
                description="Participé en el desarrollo de una aplicación de mensajería masiva integrada con WhatsApp utilizando autenticación QR, dashboard administrativo, gestión de contactos y reportes."
                image="/images/whatsapp-app.png"
                demoUrl="https://marcatex.netlify.app"
                githubFrontend="https://github.com/NelsonBotero08/dashboard-mass-send"
                githubBackend="https://github.com/NelsonBotero08/mass-sender-bot"
                tech={[
                  "Next.js",
                  "Nest.js",
                  "PostgreSQL",
                  "Tailwind",
                  "Render",
                ]}
              />

              <ProjectCard
                title="Softphone WebRTC"
                description="Softphone web en tiempo real con WebRTC y SIP.js. Soporta 2 líneas simultáneas, transferencia de llamadas, modo espera, teclado DTMF, ACW con tipificación y llamadas entrantes/salientes desde el navegador."
                image="/images/SoftphoneDemo.png"
                demoUrl="https://demo-softphone.vercel.app/"
                githubFrontend="https://github.com/Santiago081518/demo-softphone"
                tech={[
                  "React",
                  "WebRTC",
                  "SIP.js",
                  "Redux",
                  "Asterisk",
                ]}
              />

              <ProjectCard
                title="Mensajería en Moto"
                description="Landing page moderna para servicios de mensajería con integración directa a WhatsApp."
                image="/images/mensajeria.png"
                demoUrl="https://mensajeros-freelance.netlify.app/"
                githubFrontend="https://github.com/Santiago081518/mensajeros-freelanceme"
                tech={[
                  "Next.js",
                  "Tailwind",
                  "Node.js",
                ]}
              />
            </div>
          </FadeIn>
        </section>

        <section
          id="experience"
          className="relative z-10 max-w-7xl mx-auto px-6 pb-32"
        >
          <div className="space-y-4 mb-16">
            <span className="text-cyan-400 uppercase tracking-[0.3em] text-sm">
              Experiencia
            </span>

            <h2 className="text-4xl md:text-5xl font-bold">
              Experiencia Profesional
            </h2>
          </div>

          <div className="space-y-8">
            <ExperienceCard
              role="FullStack Developer"
              company="Intercom Soluciones"
              date="2024 - 2025"
              shortDescription="Desarrollo de aplicaciones web en tiempo real, microservicios y soluciones VoIP utilizando React, Node.js, Nest.js, WebRTC y SIP.js."
              fullDescription={`
            - Desarrollo de softphone web utilizando React, WebRTC y SIP.js.
            - Integración de llamadas en tiempo real con servidores Asterisk.
            - Construcción de microservicios escalables con Nest.js y PostgreSQL.
            - Gestión de estados de llamadas utilizando Redux.
            - Centralización de operaciones del call center en una sola plataforma.
            - Optimización de tiempos operativos aproximadamente un 20%.
              `}
            />

            <ExperienceCard
              role="Freelance Developer"
              company="Freelance"
              date="2026 - Actualidad"
              shortDescription="Desarrollo de aplicaciones web modernas y soluciones fullstack utilizando Next.js, Tailwind, Nest.js y PostgreSQL."
              fullDescription={`
            - Participé en el desarrollo de una aplicación de mensajería masiva integrada con WhatsApp.
            - Implementación de autenticación mediante código QR.
            - Desarrollo de dashboard administrativo y gestión de contactos.
            - Deploy utilizando Render, Netlify y Neon.
            - Desarrollo de landing page para servicios de mensajería en moto.
            - Integración de formulario conectado directamente con WhatsApp.
              `}
            />

            <ExperienceCard
              role="Desarrollador FullStack"
              company="Centic"
              date="Junio 2022 - Julio 2023"
              shortDescription="Desarrollo de microservicios y aplicaciones fullstack utilizando Node.js, React, Vue.js, PostgreSQL y MongoDB."
              fullDescription={`
            - Desarrollo de microservicios utilizando Node.js aplicando principios SOLID.
            - Implementación de APIs REST para comunicación entre servicios.
            - Trabajo con bases de datos PostgreSQL y MongoDB.
            - Desarrollo de interfaces frontend utilizando React y Vue.js.
            - Participación en desarrollo fullstack desde backend hasta frontend.
              `}
            />
          </div>
        </section>

        <ContactSection />

        <Footer />
      </main>
    </>
  );
}