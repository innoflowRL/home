import React from 'react';

const projects = [
  {
    title: "ISRO-Respond Research Project",
    category: "Aerospace",
    description: "Advanced research project in collaboration with ISRO for space technology development"
  },
  {
    title: "LOX Booster Turbopump Analysis",
    category: "Propulsion",
    description: "Comprehensive analysis and optimization of liquid oxygen booster turbopump systems"
  },
  {
    title: "Industrial Heat Exchanger Design",
    category: "Thermal Systems",
    description: "Custom heat exchanger design and thermal analysis for industrial applications"
  },
  {
    title: "Automotive CFD Analysis",
    category: "Automotive",
    description: "Computational fluid dynamics analysis for automotive aerodynamics and cooling systems"
  },
  {
    title: "Gas Turbine Component Analysis",
    category: "Energy",
    description: "Structural and thermal analysis of gas turbine components for power generation"
  },
  {
    title: "Manufacturing Process Optimization",
    category: "Manufacturing",
    description: "Process optimization and simulation for advanced manufacturing systems"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-font text-3xl md:text-4xl font-bold text-dark-blue mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Showcasing our expertise across aerospace, automotive, energy, and manufacturing sectors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-xl overflow-hidden shadow-lg card-hover fade-in"
            >
              <div className="h-48 bg-gradient-to-br from-dark-blue to-cyan flex items-center justify-center">
                <div className="text-white text-6xl opacity-20">⚡</div>
              </div>
              <div className="p-6">
                <div className="text-sm font-semibold text-teal-600 mb-2">
                  {project.category}
                </div>
                <h3 className="heading-font text-xl font-semibold text-dark-blue mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {project.description}
                </p>
                <a
                  href="#contact"
                  className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200"
                >
                  View Details
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
