import React from "react";
import { motion } from "framer-motion";

export default function PremiumHero() {
  return (
    <section className="relative overflow-hidden min-h-[60vh] flex flex-col justify-center bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400">
      <video 
        autoPlay loop muted playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-30 pointer-events-none"
        src="https://www.w3schools.com/howto/rain.mp4"
      />
      <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl z-10" />
      <div className="relative z-20 max-w-5xl mx-auto px-6 py-28 flex flex-col items-center text-center">
        <motion.h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-white drop-shadow-xl"
          initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}>
          NextGen Banking Engineering &<br />
          <span className="bg-gradient-to-r from-yellow-400 via-blue-300 to-blue-600 text-transparent bg-clip-text">
            Sustainable Tech
          </span>
        </motion.h1>
        <motion.p className="text-xl text-white/80 mb-9 font-medium max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}>
          World-class R&D powered by AI, CFD, and real-world partnerships. Clean energy, high-impact innovation.
        </motion.p>
        <motion.a href="#contact"
          className="rounded-xl px-10 py-4 bg-blue-500/80 text-white font-extrabold text-lg shadow-xl hover:bg-blue-600/90 transition"
          whileHover={{ scale: 1.05 }} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}>
          Start your journey →
        </motion.a>
      </div>
    </section>
  );
}
