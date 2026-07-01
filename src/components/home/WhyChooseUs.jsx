import React from 'react';

const values = [
  {
    title: "Innovation",
    description: "Cutting-edge research and development backed by IIT Madras excellence",
    icon: "💡"
  },
  {
    title: "Sustainability", 
    description: "Committed to developing efficient and sustainable technology solutions",
    icon: "🌱"
  },
  {
    title: "Expertise",
    description: "Deep expertise in aerospace, automotive, and industrial engineering",
    icon: "🎓"
  },
  {
    title: "Global Outlook",
    description: "Indian company with global perspective and international standards",
    icon: "🌍"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-dark-blue">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 fade-in">
          <h2 className="heading-font text-3xl md:text-4xl font-bold text-white mb-6">
            Why Choose InnoFlow
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Transforming ideas into technology solutions with excellence and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="text-center fade-in"
            >
              <div className="w-20 h-20 bg-cyan rounded-full flex items-center justify-center mx-auto mb-6 text-3xl">
                {value.icon}
              </div>
              <h3 className="heading-font text-2xl font-semibold text-white mb-4">
                {value.title}
              </h3>
              <p className="text-blue-100 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
