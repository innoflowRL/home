import erfbImage from '../assets/erfb.png';
import k307bb from '../assets/k307bb.png';
import mtcm2 from '../assets/mtcm2.png';
import hydra from '../assets/hydra.png';
import autovent from '../assets/autovent.jpeg';


export const completedCategories = [
  {
    id: 'ISRO',
    title: 'ISRO Research',
    projects: [
      {
        id: 'isro-1',
        title: 'Hypersonic Flow tool',
        subtitle: 'Respond Project',
        short: 'Development of advanced DSMC solvers for hypersonic flow simulation',
        description: 'Custom DSMC Tool Using Direct Simulation Monte Carlo Method',
        duration: '2011-2015',
        details: 'High-fidelity hypersonic flow modeling. DSMC algorithm development and validation. Aerospace simulation supporting ISRO initiatives',
        technologies: ['DSMC Method', 'Hypersonic Flow', 'OpenFOAM', 'Rarefied Gas Dynamics', 'Solver Development', 'Scientific Computing']
      },
      {
        id: 'isro-2',
        title: 'LOX Booster Turbopump',
        subtitle: 'Consultancy Project',
        short: 'Comprehensive fluid dynamics analysis of LOX booster turbopump systems for CUS engine',
        description: 'Fluid Flow Analysis of LOX Booster Turbopump of CUS Engine',
        duration: '2011-2012',
        details: 'LOX turbopump flow analysis. Performance optimization and flow characterization. Structural integrity and reliability assessment',
        technologies: ['Turbomachinery', 'LOX Booster', 'Optimization', 'Structural Analysis', 'CFD Analysis', 'Cryogenic Propulsion']
      },
      {
        id: 'isro-3',
        title: 'LH2 Turbine Stage',
        subtitle: 'Consultancy Project',
        short: 'Conjugate heat transfer analysis of cryogenic turbine stage for CE-20 engine',
        description: 'Conjugate heat transfer analysis of LH2 turbine stage of CE-20 Engine',
        duration: '2009-2010',
        details: 'Conjugate heat transfer analysis of LH2 turbine stages. Thermal management under cryogenic conditions. Structural integrity assessment for CE-20 engine components',
        technologies: ['Conjugate Heat Transfer', 'Cryogenic Analysis', 'Thermal Management', 'Turbine Design', 'CE-20 Engine', 'Liquid Hydrogen (LH2)']
      }
    ]
  },
  {
    id: 'Instrumentation',
    title: 'Instrumentation & Analytical Methods',
    projects: [
      {
        id: 'inst-1',
        title: 'Low-Cost PIV System',
        subtitle: 'Experimental Instrumentation',
        short: 'Development of economical Particle Image Velocimetry system for flow measurement',
        description: 'Development of low-cost PIV system',
        duration: 'Dec 2012 - May 2013',
        details: 'Low-cost Particle Image Velocimetry (PIV) system development. Flow visualization and velocity field measurement. High-accuracy instrumentation for aerodynamic experiments.',
        technologies: ['Particle Image Velocimetry', 'Flow Visualization', 'Experimental Fluid Mechanics', 'Instrumentation', 'Aerodynamic Testing']
      },
      {
        id: 'inst-2',
        title: 'Blasius Equation Solution',
        subtitle: 'Analytical Methods',
        short: 'Accurate numerical solution of boundary layer theory fundamental problem',
        description: 'An accurate solution of Blasius equation',
        duration: 'June 2012 - Dec 2012',
        details: 'Accurate numerical solution of the Blasius boundary layer equation. Enhanced computational efficiency and solution accuracy. Applications in aerodynamic analysis and design optimization.',
        technologies: ['Numerical Methods', 'Boundary Layer Theory', 'Computational Analysis', 'Aerodynamics', 'Blasius Equation', 'Boundary Layer Flow']
      }
    ]
  },
  {
    id: 'Aerodynamics',
    title: 'Aerodynamics & Flow',
    projects: [
      {
        id: 'aero-1',
        title: 'Unsteady Wake Characteristics',
        subtitle: 'Aerodynamics Research',
        short: 'Study of transitional flow characteristics in unsteady wakes behind axisymmetric bodies',
        description: 'On transitional characteristics of unsteady wakes in flow past axi-symmetric bodies',
        duration: '2014-2019',
        details: 'Transitional flow analysis of unsteady axisymmetric wakes. Investigation of flow separation and vortex dynamics. Aerodynamic instability assessment for aerospace and marine applications.',
        technologies: ['Wake Analysis', 'Vortex Dynamics', 'Flow Separation', 'Aerodynamic Instability', 'Transitional Flow', 'Axisymmetric Bodies']
      },
      {
        id: 'aero-2',
        title: 'Supersonic Condensation Modeling',
        subtitle: 'Compressible Flow Research',
        short: 'Advanced modeling of non-equilibrium condensation phenomena in supersonic flows',
        description: 'Non-equilibrium condensation modelling in supersonic flows',
        duration: '2018-2019',
        details: 'Non-equilibrium condensation modeling in supersonic flows. Development of computational methods for high-speed flow analysis. Applications in supersonic ejectors and nozzles.',
        technologies: ['Supersonic Flow', 'Condensation Modeling', 'Compressible Flow', 'High-Speed Applications', 'Steam ejectors']
      }
    ]
  },
  {
    id: 'Thermal',
    title: 'Thermal & Cryogenic',
    projects: [
      {
        id: 'therm-1',
        title: 'Cryogenic Tank Heat Transfer',
        subtitle: 'Thermal Systems Analysis',
        short: 'Investigation of thermal and mass transfer in pressurized cryogenic storage systems',
        description: 'Heat and mass transfer across liquid-vapour interface in a cryogenic tank with sloshing',
        duration: '2019',
        details: 'Thermal and mass transfer analysis at liquid-vapor interfaces in cryogenic storage systems. Investigation of fluid sloshing effects on heat transfer. Improved modeling for cryogenic system design and operation.',
        technologies: ['Cryogenic Systems', 'Heat Transfer', 'Mass Transfer', 'Sloshing Analysis', 'Cryogenic Storage', 'Liquid-Vapor Interface']
      }
    ]
  },
  {
    id: 'Biomedical',
    title: 'Biomedical Engineering',
    projects: [
      {
        id: 'bio-1',
        title: 'Patient-Specific Blood Flow Modeling',
        subtitle: 'Cardiovascular Engineering',
        short: 'Development of personalized computational models for arterial blood flow analysis',
        description: 'Patient-specific modelling of blood flow in arteries',
        duration: '2014',
        details: 'Patient-specific blood flow simulation in arterial systems. Integration of medical imaging with CFD analysis. Support for personalized cardiovascular treatment planning and medical device design.',
        technologies: ['Biomedical Engineering', 'LES', 'Medical Imaging', 'Cardiovascular Analysis', 'Hemodynamics', 'Patient-Specific Modeling']
      },
      {
        id: 'bio-2',
        title: 'Membrane Oxygenator Design',
        subtitle: 'Medical Device Engineering',
        short: 'Advanced design and optimization of fiber membrane oxygenators for cardiac support',
        description: 'Functional design of fibre membrane oxygenators',
        duration: '2015',
        details: 'Design and optimization of fiber membrane oxygenators for cardiac support systems. Gas-liquid interface and membrane performance analysis. Design refinement for improved clinical outcomes.',
        technologies: ['O2 transport models', 'Membrane oxygenator', 'Gas-Liquid Interaction', 'Cardiac Systems', 'Biomedical CFD', 'Oxygenator Design']
      }
    ]
  },
  {
    id: 'Industrial',
    title: 'Industrial Systems',
    projects: [
      {
        id: 'ind-1',
        title: 'Air Heater Device Failure Investigation',
        subtitle: 'Failure Analysis & Diagnostics',
        short: 'Comprehensive investigation of thermal failure mechanisms in air heater devices',
        description: 'Failure investigation of air heater device',
        duration: '2019-2020',
        details: 'Root-cause investigation of air heater device failures. Thermal analysis, material assessment and computational modeling. Engineering solutions to improve reliability and service life.',
        technologies: ['Failure Analysis', 'Thermal Analysis', 'Material Assessment', 'Diagnostics', 'Root Cause Analysis', 'Reliability Engineering']
      },
      {
        id: 'ind-2',
        title: 'Air Separator Design & Development',
        subtitle: 'Industrial Equipment Design',
        short: 'Complete design and optimization of air separation system with performance testing',
        description: 'Design and development of air separator',
        duration: '2019-2020',
        details: 'Complete design and development of an industrial air separator system. Fluid dynamics analysis and component optimization. Performance evaluation for cost-effective industrial applications.',
        technologies: ['Equipment Design', 'Fluid Dynamics', 'Component Optimization', 'Performance Testing', 'CFD Analysis']
      },
      {
        id: 'ind-3',
        title: 'Supercritical CO2 Flow Analysis',
        subtitle: 'Advanced Process Engineering',
        short: 'Advanced study of supercritical CO2 flow through porous media in textile dyeing',
        description: 'Investigation on supercritical carbon dioxide flow through the porous beam of a beam dyeing machine',
        duration: '2019-2021',
        details: 'Advanced study of supercritical carbon dioxide flow behavior through porous media in textile dyeing applications. The research optimized flow distribution, pressure management, and process efficiency for industrial textile manufacturing.',
        technologies: ['Supercritical Fluids', 'Porous Media', 'Process Optimization', 'Textile Engineering']
      }
    ]
  }
];

export const galleryPlaceholders = [
  {
    title: 'External Flow Analysis of a 155 mm ERFB-BB Projectile',
    image: erfbImage
  },
  {
    title: 'Reactive Flow Analysis of a K307BB Base Bleed Projectile',
    image: k307bb
  },
  {
    title: 'MTCM Rocket in Supersonic Flight',
    image: mtcm2
  },
  {
    title: 'External Aerodynamics of a 70 mm Hydra Rocket',
    image: hydra
  },
  {
    title: 'Flow Streamlines in an Automotive HVAC Vent',
    image: autovent
  },
];
