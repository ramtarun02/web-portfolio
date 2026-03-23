export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  thumbnailType: 'streamline' | 'pressure' | 'mesh' | 'solver';
  tags: string[];
  stack: string[];
  metrics: { label: string; value: string }[];
  details: {
    goals: string;
    methods: string;
    computation: string;
    mlComponents: string;
    results: string;
  };
}

export const projects: Project[] = [
  {
    id: 'transonic-vfp',
    title: 'Transonic VFP Solver Development',
    tagline: 'High-fidelity compressible flow solver for transonic regime analysis',
    description:
      'Developed a vertex-centered finite-volume solver targeting transonic external aerodynamics with shock-capturing schemes and adaptive mesh refinement.',
    thumbnailType: 'solver',
    tags: ['CFD', 'Solver Dev', 'Transonic'],
    stack: ['Fortran', 'C++', 'MPI', 'HPC'],
    metrics: [
      { label: 'Mach Range', value: '0.6–1.4' },
      { label: 'Grid Cells', value: '12M+' },
      { label: 'Speedup', value: '3.2×' },
    ],
    details: {
      goals: 'Build a robust, parallelized transonic solver with second-order accuracy and TVD flux limiting for external aerodynamics applications.',
      methods: 'Roe approximate Riemann solver with Venkatakrishnan limiter; structured/unstructured hybrid meshing; k-ω SST turbulence model.',
      computation: 'MPI-parallelized across 256 cores on university HPC cluster; domain decomposition via METIS.',
      mlComponents: 'None — pure numerical methods focus.',
      results: 'Achieved 3.2× wall-clock speedup over baseline; validated against AGARD CT-5 experimental data with <2% Cp error.',
    },
  },
  {
    id: 'ml-surrogate-wing',
    title: 'ML-Accelerated Surrogate for Wing Loads',
    tagline: 'Physics-informed neural network surrogate replacing expensive CFD evaluations',
    description:
      'Trained a physics-informed neural network to predict spanwise lift and moment distributions on transport-aircraft wings, enabling rapid loads estimation during preliminary design.',
    thumbnailType: 'pressure',
    tags: ['AI/ML', 'CFD', 'Surrogate'],
    stack: ['Python', 'PyTorch', 'NumPy', 'SU2'],
    metrics: [
      { label: 'Prediction Error', value: '<3%' },
      { label: 'Speedup vs CFD', value: '500×' },
      { label: 'Training Samples', value: '2,400' },
    ],
    details: {
      goals: 'Replace full RANS evaluations with a lightweight surrogate that preserves physical consistency for wing load prediction loops.',
      methods: 'Physics-informed loss function encoding lift conservation and moment equilibrium; encoder-decoder architecture with skip connections.',
      computation: 'Training on single NVIDIA A100 GPU; inference in <50ms per wing configuration.',
      mlComponents: 'Custom PINN loss with boundary-condition embedding; Monte-Carlo dropout for uncertainty quantification.',
      results: 'Mean absolute error <3% on hold-out set; 500× faster than equivalent RANS solve; integrated into MDO loop for Cranfield project.',
    },
  },
  {
    id: 'uav-concept-aero',
    title: 'UAV Concept Aerodynamics',
    tagline: 'Low-speed aerodynamic analysis and optimization for fixed-wing UAV platforms',
    description:
      'Performed conceptual aerodynamic design and CFD validation for a medium-altitude long-endurance UAV, including airfoil selection, wing planform optimization, and stability derivatives estimation.',
    thumbnailType: 'streamline',
    tags: ['Aerodynamics', 'CFD', 'Design'],
    stack: ['OpenFOAM', 'Python', 'XFOIL', 'ParaView'],
    metrics: [
      { label: 'L/D Improvement', value: '+14%' },
      { label: 'Configurations', value: '120+' },
      { label: 'Endurance Gain', value: '+22 min' },
    ],
    details: {
      goals: 'Maximize endurance through aerodynamic shape optimization while meeting structural and payload constraints.',
      methods: 'Panel methods (XFLR5) for rapid screening; OpenFOAM RANS for final validation; Spalart-Allmaras turbulence model.',
      computation: 'Parametric sweep on university cluster; automated with Python scripting and batch job submission.',
      mlComponents: 'Gaussian process regression for design space exploration and infill sampling strategy.',
      results: 'Achieved 14% lift-to-drag improvement and 22 min additional endurance over baseline configuration.',
    },
  },
  {
    id: 'hpc-parametric',
    title: 'HPC Workflow for Parametric Studies',
    tagline: 'Automated high-throughput CFD pipeline for design space exploration',
    description:
      'Built an end-to-end automated pipeline for running hundreds of CFD simulations across parameter sweeps on HPC infrastructure, with automated meshing, job scheduling, post-processing, and database ingestion.',
    thumbnailType: 'mesh',
    tags: ['HPC', 'Automation', 'CFD'],
    stack: ['Python', 'Bash', 'Docker', 'SLURM', 'SU2'],
    metrics: [
      { label: 'Simulations/Day', value: '80+' },
      { label: 'Parameters', value: '6-dim' },
      { label: 'Turnaround', value: '-65%' },
    ],
    details: {
      goals: 'Eliminate manual intervention in parametric CFD studies and enable design-of-experiments workflows at scale.',
      methods: 'Template-based mesh generation (Gmsh); parameterized SU2 config generation; SLURM job arrays; automated convergence monitoring.',
      computation: 'SLURM-managed cluster with up to 512 cores; Docker containers for reproducible environments.',
      mlComponents: 'Latin Hypercube Sampling for parameter space coverage; simple regression surrogate for adaptive refinement.',
      results: '65% reduction in human turnaround time; database of 2,400+ validated CFD results for downstream ML training.',
    },
  },
  {
    id: 'pinn-shock',
    title: 'PINN for Shock Location Prediction',
    tagline: 'Physics-informed deep learning for transonic shock positioning',
    description:
      'Developed a physics-informed neural network to predict shock wave location and strength on supercritical airfoils across a range of Mach numbers and angles of attack.',
    thumbnailType: 'pressure',
    tags: ['AI/ML', 'CFD', 'PINN'],
    stack: ['Python', 'JAX', 'NumPy', 'SciPy'],
    metrics: [
      { label: 'Shock Loc Error', value: '<1.5% c' },
      { label: 'Mach Range', value: '0.7–0.85' },
      { label: 'Inference', value: '12ms' },
    ],
    details: {
      goals: 'Rapidly predict transonic shock characteristics without full CFD solves for use in real-time design feedback tools.',
      methods: 'Residual-based PINN with Euler equation constraints; Sobol sequence for collocation point sampling.',
      computation: 'JAX-based training with JIT compilation; single GPU training in under 4 hours.',
      mlComponents: 'Physics residual loss (Euler equations); adaptive weighting of boundary/PDE/data losses; Fourier feature embedding for high-frequency shock representation.',
      results: 'Shock location predicted within 1.5% chord accuracy; real-time inference at 12ms enables interactive design exploration.',
    },
  },
];

export interface Skill {
  category: string;
  items: { name: string; level: number }[];
}

export const skills: Skill[] = [
  {
    category: 'Aerodynamics',
    items: [
      { name: 'External Aerodynamics', level: 95 },
      { name: 'Transonic / Compressible Flow', level: 90 },
      { name: 'Flight Physics & Stability', level: 85 },
      { name: 'Airfoil & Wing Design', level: 88 },
    ],
  },
  {
    category: 'CFD Methods & Solvers',
    items: [
      { name: 'Finite Volume Methods', level: 92 },
      { name: 'OpenFOAM', level: 88 },
      { name: 'SU2', level: 85 },
      { name: 'Mesh Generation (Gmsh, ICEM)', level: 82 },
      { name: 'Turbulence Modelling', level: 87 },
    ],
  },
  {
    category: 'Scientific Computing',
    items: [
      { name: 'Python (NumPy, SciPy)', level: 93 },
      { name: 'Fortran', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'MATLAB', level: 78 },
    ],
  },
  {
    category: 'AI/ML for CFD',
    items: [
      { name: 'PyTorch', level: 82 },
      { name: 'JAX', level: 75 },
      { name: 'Physics-Informed NNs', level: 85 },
      { name: 'Surrogate Modelling', level: 83 },
    ],
  },
  {
    category: 'HPC & Workflows',
    items: [
      { name: 'MPI / Parallel Computing', level: 80 },
      { name: 'SLURM / PBS', level: 78 },
      { name: 'Docker', level: 72 },
      { name: 'Git / CI-CD', level: 85 },
    ],
  },
];

export interface Experience {
  id: string;
  type: 'research' | 'industry' | 'internship';
  role: string;
  organization: string;
  period: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: 'cranfield-msc',
    type: 'research',
    role: 'MSc Researcher — Computational Aerodynamics',
    organization: 'Cranfield University',
    period: '2023 – 2025',
    achievements: [
      'Developed transonic VFP solver with shock-capturing for MSc thesis',
      'Implemented physics-informed ML surrogate for wing load prediction',
      'Published internal technical report on PINN-based shock modelling',
      'Collaborated with Airbus on solver validation against experimental data',
    ],
  },
  {
    id: 'cfd-intern',
    type: 'internship',
    role: 'CFD Engineering Intern',
    organization: 'Aerospace Research Lab',
    period: '2022 – 2023',
    achievements: [
      'Automated parametric CFD workflow reducing turnaround by 65%',
      'Ran 2,400+ validated simulations for design database',
      'Developed Python-based post-processing and visualization pipeline',
    ],
  },
  {
    id: 'undergrad-research',
    type: 'research',
    role: 'Undergraduate Research Assistant',
    organization: 'University Aero Department',
    period: '2021 – 2022',
    achievements: [
      'Conducted UAV conceptual aerodynamic design and wind-tunnel correlation',
      'Achieved 14% L/D improvement through systematic airfoil optimization',
      'Presented findings at departmental research symposium',
    ],
  },
];

export interface Certification {
  title: string;
  issuer: string;
  date: string;
}

export const certifications: Certification[] = [
  { title: 'Machine Learning Specialization', issuer: 'Stanford / Coursera', date: '2024' },
  { title: 'High-Performance Scientific Computing', issuer: 'University of Washington', date: '2023' },
  { title: 'Parallel Programming with MPI', issuer: 'PRACE', date: '2023' },
  { title: 'Deep Learning for Physical Sciences', issuer: 'MIT OpenCourseWare', date: '2024' },
];

export const stats = [
  { label: 'Years Experience', value: 2, suffix: '+' },
  { label: 'Projects Completed', value: 12, suffix: '' },
  { label: 'Solver Contributions', value: 5, suffix: '' },
  { label: 'Papers & Reports', value: 4, suffix: '' },
];

export const highlightChips = [
  'Transonic Aerodynamics',
  'CFD Methods',
  'Scientific Python',
  'Physics‑Informed ML',
  'Flight Physics',
  'HPC Workflows',
  'Research Engineering',
];

export const techStack = [
  'Python', 'Fortran', 'C++', 'OpenFOAM', 'SU2',
  'NumPy', 'SciPy', 'JAX', 'PyTorch', 'MPI', 'Docker', 'Git',
];
