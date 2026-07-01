import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="fade-in">
            <h2 className="heading-font text-3xl md:text-4xl font-bold text-dark-blue mb-8 red-accent">
              About InnoFlow Research Labs
            </h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                IFRL is an Indian company with a global outlook, missioned to cradle efficient and sustainable technology solutions, improving the lives of people around the world. We are a tech nursery that accelerates the transformation of ideas into technology solutions.
              </p>
              <p>
                Our expertise spans across engineering analysis, simulation, research & product development, and specialized industrial systems. With deep roots in IIT Madras research excellence, we bring cutting-edge innovation to solve complex engineering challenges.
              </p>
              <p>
                We partner with industries, research institutions, and government organizations to deliver world-class solutions in aerospace, automotive, energy, and manufacturing sectors.
              </p>
            </div>
            <div className="mt-8">
              <a
                href="#services"
                className="inline-flex items-center px-6 py-3 bg-cyan text-white font-semibold rounded-lg hover:bg-cyan/80 transition-colors duration-300"
              >
                Discover Our Services
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="fade-in">
            <div className="relative">
              <div className="bg-white rounded-2xl p-8 text-slate-900 border border-slate-200 shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 text-dark-blue">15+</div>
                    <div className="text-slate-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 text-dark-blue">100+</div>
                    <div className="text-slate-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 text-dark-blue">50+</div>
                    <div className="text-slate-600">Industry Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-2 text-dark-blue">24/7</div>
                    <div className="text-slate-600">Support Available</div>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-teal-600 to-blue-900 rounded-2xl blur opacity-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
