import React from "react";
export default function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const info = {
    savvybuoy: { title: "SavvyBuoy — Wave Energy", body: "Full case study: modular design, CFD optimisation, field tests." },
    hypersonic: { title: "Hypersonic Simulation — ISRO", body: "High-enthalpy flow simulation methods and results." },
    cryogenic: { title: "Cryogenic Storage", body: "Thermal analysis and insulation design." },
    bloodflow: { title: "Patient-specific Blood Flow", body: "Patient-specific CFD for medical devices." }
  }[project];
  return (
    <div className="modal" style={{ display: "flex" }}>
      <div className="modal-inner">
        <button className="modal-close" aria-label="Close" onClick={onClose}>×</button>
        <h3>{info.title}</h3>
        <p>{info.body}</p>
        <p style={{ marginTop: 12, color: "#666" }}>Replace with images and detailed write-up.</p>
      </div>
    </div>
  );
}
