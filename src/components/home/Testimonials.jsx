import React from "react";
export default function Testimonials() {
  return (
    <section className="testimonials">
      <h3>What partners say</h3>
      <div className="testgrid">
        <blockquote className="test">"InnoFlow delivered rapid, validated CFD results that helped our team shorten the design cycle."<cite>— Dr. A. Rao, ISRO</cite></blockquote>
        <blockquote className="test">"Their test rig design and data acquisition were spot on for our prototype trials."<cite>— S. Mathew, Maker Village</cite></blockquote>
      </div>
    </section>
  );
}
