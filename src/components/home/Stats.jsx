import React from "react";
export default function Stats() {
  return (
    <div className="py-10 bg-white border-b">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-around gap-6 px-6">
        <div className="text-center">
          <div className="text-4xl font-extrabold text-blue-700">12+</div>
          <div className="text-gray-700">Years in R&D</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-extrabold text-blue-700">150+</div>
          <div className="text-gray-700">Projects</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-extrabold text-blue-700">25+</div>
          <div className="text-gray-700">Partners</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-extrabold text-blue-700">8</div>
          <div className="text-gray-700">Patents & Papers</div>
        </div>
      </div>
    </div>
  );
}
