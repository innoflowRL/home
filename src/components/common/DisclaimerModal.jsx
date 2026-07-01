import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DisclaimerModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open &&
      <motion.div
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        onClick={onClose}>
        <motion.div
          className="bg-white/90 rounded-2xl p-8 max-w-lg w-full shadow-2xl border-t-4 border-blue-600 text-center"
          initial={{ y: 60, scale: 0.85 }} animate={{ y: 0, scale: 1 }} exit={{ y: 60, scale: 0.85 }}
          onClick={e => e.stopPropagation()}
        >
          <h3 className="text-xl font-bold text-dark-blue mb-3">External Link Disclaimer</h3>
          <p className="text-gray-700 mb-5">
            You are about to leave IFRL’s website.<br />
            IFRL is not responsible for the content or security of external sites.
          </p>
          <button className="mr-3 px-6 py-2 font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-700" onClick={onClose}>
            Stay Here
          </button>
          <a href="https://google.com" className="px-6 py-2 font-bold rounded-lg bg-gray-100 hover:bg-gray-300 text-blue-700 ml-2">
            Continue
          </a>
        </motion.div>
      </motion.div>
      }
    </AnimatePresence>
  );
}
