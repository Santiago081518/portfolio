"use client";

import { motion } from "framer-motion";

export default function AnimatedBlobs() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">

      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -50, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[-150px]
          left-[-100px]
          w-[500px]
          h-[500px]
          bg-cyan-500/5
          rounded-full
          blur-[140px]
        "
      />

      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -120, 60, 0],
          y: [0, 80, -60, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          bottom-[-200px]
          right-[-100px]
          w-[600px]
          h-[600px]
          bg-blue-500/5
          rounded-full
          blur-[160px]
        "
      />

      {/* Blob 3 */}
      <motion.div
        animate={{
          x: [0, 60, -80, 0],
          y: [0, -40, 80, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-[40%]
          left-[35%]
          w-[400px]
          h-[400px]
          bg-purple-500/5
          rounded-full
          blur-[140px]
        "
      />

    </div>
  );
}