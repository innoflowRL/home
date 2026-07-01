import React from 'react';

const services = [
  {
    title: "CFD Based Design of Flow & Thermal Systems",
    description: "We are capable of design, analyse & test a system/components based on industrial requirements. Our expertise includes computational fluid dynamics, heat transfer analysis, and thermal management solutions for aerospace and industrial applications.",
    icon: "🔬"
  },
  {
    title: "Consultancy Services for R&D Institutions",
    description: "Comprehensive consultancy services for research and development institutions, providing expert guidance in engineering analysis, simulation methodologies, and technology development strategies.",
    icon: "🎯"
  },
  {
    title: "Specialized Software Tools",
    description: "Development of customer-specific software applications and tools for engineering analysis, simulation, and industrial process optimization tailored to unique business requirements.",
    icon: "💻"
  },
  {
    title: "Test Facility & Industrial Systems",
    description: "Design and development of specialized test facilities and industrial systems for aerospace, automotive, and manufacturing sectors with focus on precision and reliability.",
    icon: "⚙️"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-font text-3xl md:text-4xl font-bold text-dark-blue mb-6 red-accent">
            Our Services
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive engineering solutions from concept to implementation, backed by IIT Madras research excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg card-hover fade-in border border-slate-100"
            >
              <div className="text-4xl mb-6">{service.icon}</div>
              <h3 className="heading-font text-xl font-semibold text-dark-blue mb-4 red-accent">
                {service.title}
              </h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-teal-600 font-semibold hover:text-teal-700 transition-colors duration-200"
              >
                Learn More
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
