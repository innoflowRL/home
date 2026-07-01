import React from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
export default function GlassStickyFooter() {
  return (
    <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 max-w-2xl w-full">
      <div className="bg-white/80 backdrop-blur-xl shadow-xl border rounded-2xl flex items-center justify-between px-6 py-3 mx-4">
        <span className="font-bold tracking-wide text-blue-800 text-lg">Ready to build your future?</span>
        <div className="flex items-center gap-3">
          <a href="#contact" className="px-6 py-2 rounded-xl font-bold bg-blue-700 text-white hover:bg-dark-blue shadow">Contact Us</a>
          <a href="#" className="text-blue-700 hover:text-dark-blue text-xl"><FaTwitter /></a>
          <a href="#" className="text-blue-700 hover:text-dark-blue text-xl"><FaLinkedin /></a>
        </div>
      </div>
    </div>
  );
}
