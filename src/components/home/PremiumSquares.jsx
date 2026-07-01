import React from "react";
import { motion } from "framer-motion";
import { FaRobot, FaProjectDiagram, FaBolt } from "react-icons/fa";

const features = [
  {
    title: "SavvyBuoy",
    desc: "AI-powered modular energy buoy. Taps 40,000MW Indian coastal potential. Installs on any structure.",
    icon: <FaBolt className="text-blue-600 text-4xl" />
  },
  {
    title: "Aerospace CFD",
    desc: "Missile, rocket and machinery aerodynamic optimisation using advanced simulation tools.",
    icon: <FaRobot className="text-blue-600 text-4xl" />
  },
  {
    title: "Industry Partnership",
    desc: "Knowledge-centric, accelerated R&D. Academic and industry joined for rapid prototype and product.",
    icon: <FaProjectDiagram className="text-blue-600 text-4xl" />
  },
];

export default function PremiumSquares() {
  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            className={`
              rounded-2xl border border-blue-200
              bg-white/90 backdrop-blur-2xl shadow-2xl
              p-10 flex flex-col items-center
              hover:shadow-blue-300 hover:-translate-y-2
              transition-all
              `}
            initial={{ opacity: 0, scale: 0.8, y: 60 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2, type: "spring", stiffness: 80 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">{f.icon}</div>
            <div className="text-2xl font-extrabold text-blue-800 mb-2 text-center">{f.title}</div>
            <div className="text-gray-700 text-center text-lg mb-1">{f.desc}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
