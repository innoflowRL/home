import imgBogerVent from '../assets/boger_vent.jpeg';
import imgCel from '../assets/CEL_web2.png';
import imgCyclone from '../assets/cyclone1.png';
import imgExperiment from '../assets/exp3.png';
import imgProduct from '../assets/fir155a.png';
import imgTool from '../assets/ttcp2b.png';

export const services = [
  {
    id: 1,
    title: 'Engineering Consulting & Innovation',
    shortTitle: 'Engineering Consulting & Innovation',
    imageUrl: imgBogerVent,
    imageZoom: 1,
    imagePosition: '10% 30%',
    hoverDescription:
      'Expert technical guidance, feasibility studies, and R&D support to accelerate technology development.',
    keyFeatures: [
      'Technical feasibility studies and concept evaluation',
      'Research and development support for new technologies',
      'Engineering strategy and technology roadmap development',
      'Independent technical reviews and expert consultation',
      'Innovation-driven problem solving and decision support'
    ]
  },
  {
    id: 2,
    title: 'CFD, Structural & Multiphysics Simulation',
    shortTitle: 'CFD, Structural & Multiphysics Simulation',
    imageUrl: imgCel,
    imageZoom: 1,
    imagePosition: '30% 50%',
    hoverDescription:
      'Predict performance, optimize designs, and reduce development risks using advanced multiphysics numerical simulations.',
    keyFeatures: [
      'Fluid flow and aerodynamic performance analysis',
      'Structural strength, stress and deformation assessment',
      'Thermal management and heat transfer studies',
      'Coupled multiphysics simulation of complex systems',
      'Virtual validation prior to physical prototyping'
    ]
  },
  {
    id: 3,
    title: 'Product Development & Realization',
    shortTitle: 'Product Development & Realization',
    imageUrl: imgProduct,
    imageFit: 'contain',
    imageZoom: 1,
    imagePosition: '0% 100%',
    hoverDescription:
      'Transform concepts into validated products through structured engineering and development workflows.',
    keyFeatures: [
      'Transforming concepts into manufacturable products',
      'Detailed mechanical design and CAD engineering',
      'Engineering reviews and design refinement',
      'Prototype development and qualification support',
      'Technical documentation and lifecycle support'
    ]
  },
  {
    id: 4,
    title: 'Simulation-Driven Design Optimization',
    shortTitle: 'Simulation-Driven Design Optimization',
    imageUrl: imgCyclone,
    imageZoom: 1,
    imagePosition: '0% 100%',
    hoverDescription:
      'Improve efficiency, reliability, manufacturability, and overall system performance.',
    keyFeatures: [
      'Performance-driven design improvement studies',
      'Weight, cost and efficiency optimization',
      'Parametric and sensitivity analysis workflows',
      'Reliability and robustness enhancement',
      'Design space exploration and trade-off analysis'
    ]
  },
  {
    id: 5,
    title: 'Testing, Diagnostics & Failure Investigation',
    shortTitle: 'Testing, Diagnostics & Failure Investigation',
    imageUrl: imgExperiment,
    imageZoom: 1,
    imagePosition: '20% 10%',
    hoverDescription:
      'Identify root causes, validate designs, and solve complex engineering challenges with confidence.',
    keyFeatures: [
      'Root-cause analysis backed by simulation evidence',
      'Experimental validation and performance testing',
      'Thermal, structural and flow anomaly identification',
      'Wear, fatigue and failure risk assessment',
      'Corrective design recommendations with engineering evidence'
    ]
  },
  {
    id: 6,
    title: 'Custom Engineering Tools & Utilities',
    shortTitle: 'Custom Engineering Tools & Simulation Utilities',
    imageUrl: imgTool,
    imageZoom: 1,
    imagePosition: '50% 100%',
    hoverDescription: 'Bespoke tools built around your engineering workflow.',
    keyFeatures: [
      'Custom post-processing and data extraction scripts',
      'Automated mesh, solve and reporting pipelines',
      'Domain-specific CFD and FEA utilities',
      'Development and customization of open-source simulation solutions',
      'Simulation workflow integration for existing platforms'
    ]
  }
];
