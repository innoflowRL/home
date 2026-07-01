import React from 'react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-slate-800 to-blue-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-transparent"></div>
        <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')"}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="fade-in">
          <h1 className="heading-font text-4xl md:text-6xl font-bold text-white mb-6 leading-tight red-accent">
            Innovations in Flow
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 font-medium">
            An Enterprise by IIT Madras Research-alumni
          </p>
          <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Engineering Analysis & Simulation · Research & Product Development · Test Facility & Industrial Systems
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="px-8 py-4 bg-cyan text-white font-semibold text-lg rounded-lg hover:bg-cyan/80 transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              Explore Our Services
            </a>
            <a
              href="#about"
              className="px-8 py-4 border-2 border-white/30 text-white font-semibold text-lg rounded-lg hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
