import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBolt, FaRobot, FaProjectDiagram } from "react-icons/fa";

const projects = [
  {
    id: "savvybuoy",
    title: "SavvyBuoy",
    desc: "AI-powered energy buoy clusters for modular, scalable wave energy.",
    icon: <FaBolt className="text-blue-600 text-3xl" />,
    details: "SavvyBuoy is designed for the Indian coast's massive wave potential. With AI predictive corrections, modular design, and integration to the grid—installations are practical on existing piers, reducing capital cost by up to 50%."
  },
  {
    id: "cfd",
    title: "Aerospace CFD",
    desc: "Advanced CFD for aerospace/missile optimization and industrial efficiency.",
    icon: <FaRobot className="text-blue-600 text-3xl" />,
    details: "We simulate high-speed aerodynamics for missiles, spacecraft, and machinery, achieving performance gains via custom R&D partnerships."
  },
  {
    id: "industry",
    title: "Industry Partnerships",
    desc: "Fast prototyping and scalable knowledge-to-market solutions.",
    icon: <FaProjectDiagram className="text-blue-600 text-3xl" />,
    details: "Our team of engineers joins with academic and industry scientists to quickly develop and test R&D concepts, from hypothesis to working product."
  },
];

export default function ProjectsGallery() {
  const [selected, setSelected] = useState(null);
  const close = () => setSelected(null);

  return (
    <section className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100" id="projects">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-blue-800 mb-12">Our Key Solutions</h2>
        <div className="grid gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {projects.map(project => (
            <motion.div
              key={project.id}
              className="relative bg-white/80 rounded-2xl border border-blue-200 shadow-xl p-10 flex flex-col items-center cursor-pointer hover:-translate-y-3 hover:shadow-blue-200 transition group"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
              viewport={{ once: true }}
              onClick={() => setSelected(project)}
            >
              <div className="mb-4 group-hover:scale-125 transition">{project.icon}</div>
              <div className="font-bold text-dark-blue text-xl mb-1 text-center">{project.title}</div>
              <div className="text-gray-600 text-center">{project.desc}</div>
              <div className="absolute top-3 right-5 opacity-0 group-hover:opacity-100 transition text-blue-500 text-sm">Learn More →</div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selected &&
            <motion.div
              className="fixed inset-0 z-50 bg-black/30 flex justify-center items-center"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={close}
            >
              <motion.div
                className="bg-white/95 rounded-2xl shadow-2xl max-w-lg w-full p-10 relative"
                initial={{ scale: 0.8, y: 60 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.8, y: 60 }}
                onClick={e => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 text-2xl text-blue-700 hover:text-dark-blue"
                  onClick={close} aria-label="Close">
                  &times;
                </button>
                <div className="mb-4">{selected.icon}</div>
                <div className="text-2xl font-bold text-dark-blue mb-3">{selected.title}</div>
                <div className="text-gray-700 mb-4">{selected.details}</div>
                <button className="mt-4 px-6 py-2 bg-blue-700 text-white font-bold rounded">Contact for Demo</button>
              </motion.div>
            </motion.div>
          }
        </AnimatePresence>
      </div>
    </section>
  );
}
