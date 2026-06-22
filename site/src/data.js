export const profileLinks = [
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=ixSzxT8AAAAJ&hl=en",
  },
  { label: "ORCID", href: "https://orcid.org/0000-0002-6556-6588" },
  { label: "GitHub", href: "https://github.com/Zhang-pchao" },
  {
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Pengchao-Zhang-3/research",
  },
  { label: "Research archive", href: "https://github.com/Zhang-pchao/research" },
];

export const socialLinks = [
  { label: "X", href: "https://x.com/Pengchao1997" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pengchao-zhang-9a6262261/",
  },
];

export const tutorials = [
  {
    title: "From DFT to DeePKS to DeePMD | DeePKS Basics",
    href: "https://nb.bohrium.dp.tech/detail/8742877753",
    description: "An introductory notebook on the DeePKS workflow.",
  },
  {
    title: "From DFT to DeePKS to DeePMD | DeePKS Tutorials",
    href: "https://nb.bohrium.dp.tech/detail/7144731675",
    description: "Practical notebooks connecting DFT, DeePKS, and DeePMD.",
  },
  {
    title: "OPES (On-the-Fly Probability Enhanced Sampling)",
    href: "https://bohrium.dp.tech/notebooks/9874998164",
    description: "A notebook introduction to OPES enhanced sampling.",
  },
  {
    title: "Voronoi CVs for Enhanced Sampling Autoionization and Tautomerism",
    href: "https://bohrium.dp.tech/notebooks/83327491785",
    description: "Collective-variable construction for reactive aqueous systems.",
  },
];

export const recommendedResources = [
  {
    title: "Theory and Computing Physics Guide",
    href: "https://chriswenchen.github.io/theory-computing-physics-guide/",
    description:
      "A practical guide to computing environments and software for theoretical and computational physics.",
  },
  {
    title: "CS Self-Learning Guide",
    href: "https://csdiy.wiki/",
    description:
      "A structured collection of computer-science courses and self-study pathways.",
  },
];

export const researchAreas = [
  {
    number: "01",
    title: "Deep-potential molecular dynamics and enhanced sampling",
    description:
      "Method development and integrated workflows that combine machine-learned potential-energy surfaces with free-energy and rare-event sampling.",
  },
  {
    number: "02",
    title: "Ion distributions and reactions at gas–liquid–solid interfaces",
    description:
      "Molecular mechanisms governing water self-ions, charge organization, solvation, and reactivity across heterogeneous aqueous interfaces.",
  },
  {
    number: "03",
    title: "Micro- and nanobubble dynamics",
    description:
      "Nucleation, dissolution, interfacial charge, and stability control of nanobubbles under changing chemical and thermal environments.",
  },
  {
    number: "04",
    title: "Competing reactions under coupled electric-field and interface effects",
    description:
      "How external fields, partial solvation, and ion-pair separation reshape reaction thermodynamics, kinetics, and preferred pathways.",
  },
];

export const researchProjects = [
  {
    topic: "Aqueous interfaces",
    title: "Water self-ions at air–water and oil–water interfaces",
    description: "Deep-potential models, enhanced sampling, trajectories, and analysis tools.",
    href: "https://github.com/Zhang-pchao/OilWaterInterface",
  },
  {
    topic: "Nanobubbles",
    title: "Ion-regulated nitrogen nanobubble dynamics",
    description: "Simulation inputs and analysis for acidic, neutral, and alkaline environments.",
    href: "https://github.com/Zhang-pchao/N2BubbleIon",
  },
  {
    topic: "Reactive chemistry",
    title: "Glycine tautomerism in water and electric fields",
    description: "Voronoi collective variables, trained models, and free-energy workflows.",
    href: "https://github.com/Zhang-pchao/research/tree/main/GlycineEfield",
  },
  {
    topic: "Solid–water interfaces",
    title: "Nanobubble evolution near anatase (101)",
    description: "OPES-DPMD inputs and analysis across interfacial ionic microenvironments.",
    href: "https://github.com/Zhang-pchao/research/tree/main/OPES-DPMD-Bubble-TiO2",
  },
];

export const publications = [
  {
    year: "2026",
    journal: "J. Am. Chem. Soc.",
    title: "Nanobubble Nucleation and Dissolution Near the Anatase (101)–Water Interface",
    authors: "Pengchao Zhang, Yawen Gao, Changsheng Chen, Xiangdang Guo, Chao Sun*, and Xuefei Xu*",
    details: "Journal of the American Chemical Society 148, 18507–18517.",
    doi: "https://doi.org/10.1021/jacs.6c05480",
    pdf: "/papers/jacs-2026-anatase-nanobubble.pdf",
    code: "https://github.com/Zhang-pchao/research/tree/main/OPES-DPMD-Bubble-TiO2",
    freeAccess: "https://pubs.acs.org/articlesonrequest/AOR-BDZI3EDX8DYQMRPCX5I8",
    toc: "/assets/toc/jacs-2026-anatase-nanobubble.webp",
    featured: true,
  },
  {
    year: "2026",
    journal: "J. Mater. Chem. A",
    title:
      "Solvent Effect on the Electrocatalytic Nitrogen Reduction Reaction: A Deep Potential Molecular Dynamics Simulation with Enhanced Sampling for the Case of the Ruthenium Single Atom Catalyst",
    authors: "Bowen Zhang, Pengchao Zhang, and Xuefei Xu*",
    details: "Journal of Materials Chemistry A 14, 7109–7120.",
    doi: "https://doi.org/10.1039/D5TA09029F",
    pdf: "/papers/jmca-2026-solvent-effect-nrr.pdf",
    code: "https://github.com/Zhang-pchao/research/tree/main/OPES-DPMD-NRR",
  },
  {
    year: "2025",
    journal: "ACS Appl. Mater. Interfaces",
    title:
      "Thermal Response of Nanobubble Suspensions under Freeze–Thaw Cycles through Experiment and Molecular Dynamics Simulations",
    authors:
      "Yawen Gao, Pengchao Zhang, Hangyu Luo, Changsheng Chen, Jun Niu, Yongqiang Tang, Rongrong Wang, Mingbo Li, Xuefei Xu*, and Chao Sun*",
    details: "ACS Applied Materials & Interfaces 17(49), 67284–67294.",
    doi: "https://doi.org/10.1021/acsami.5c17584",
    pdf: "/papers/acs-ami-2025-freeze-thaw-nanobubbles.pdf",
    code: "https://github.com/Zhang-pchao/research/tree/main/GMX_Ethanol_N2_H2O_Slab",
    toc: "/assets/toc/acs-ami-2025-freeze-thaw-nanobubbles.webp",
  },
  {
    year: "2025",
    journal: "J. Chem. Theory Comput.",
    title: "Modulation of Electric Field and Interface on Competitive Reaction Mechanisms",
    authors: "Pengchao Zhang and Xuefei Xu*",
    details: "Journal of Chemical Theory and Computation 21(13), 6584–6593.",
    doi: "https://doi.org/10.1021/acs.jctc.5c00705",
    pdf: "/papers/jctc-2025-electric-field-interface.pdf",
    code: "https://github.com/Zhang-pchao/research/tree/main/GlycineEfield",
    freeAccess: "https://pubs.acs.org/articlesonrequest/AOR-NMVU6VAHH7GKQHZNMPMC",
    toc: "/assets/toc/jctc-2025-electric-field-interface.webp",
    featured: true,
  },
  {
    year: "2025",
    journal: "Langmuir",
    title:
      "Propensity of Water Self-Ions at Air(Oil)–Water Interfaces Revealed by Deep Potential Molecular Dynamics with Enhanced Sampling",
    authors: "Pengchao Zhang and Xuefei Xu*",
    details: "Langmuir 41(5), 3675–3683.",
    doi: "https://doi.org/10.1021/acs.langmuir.4c05004",
    pdf: "/papers/langmuir-2025-water-self-ions.pdf",
    code: "https://github.com/Zhang-pchao/OilWaterInterface",
    preprint: { label: "arXiv", href: "https://arxiv.org/abs/2404.07027" },
    toc: "/assets/toc/langmuir-2025-water-self-ions.webp",
  },
  {
    year: "2024",
    journal: "J. Am. Chem. Soc.",
    title: "Hydroxide and Hydronium Ions Modulate the Dynamic Evolution of Nitrogen Nanobubbles in Water",
    authors: "Pengchao Zhang, Changsheng Chen, Muye Feng, Chao Sun*, and Xuefei Xu*",
    details: "Journal of the American Chemical Society 146(28), 19537–19546.",
    doi: "https://doi.org/10.1021/jacs.4c06641",
    pdf: "/papers/jacs-2024-nanobubble-ions.pdf",
    code: "https://github.com/Zhang-pchao/N2BubbleIon",
    toc: "/assets/toc/jacs-2024-nanobubble-ions.webp",
    featured: true,
  },
  {
    year: "2024",
    journal: "J. Chem. Inf. Model.",
    title: "Intramolecular and Water Mediated Tautomerism of Solvated Glycine",
    authors: "Pengchao Zhang, Axel Tosello Gardini, Xuefei Xu*, and Michele Parrinello*",
    details: "Journal of Chemical Information and Modeling 64(9), 3599–3604.",
    doi: "https://doi.org/10.1021/acs.jcim.4c00273",
    pdf: "/papers/jcim-2024-glycine-tautomerism.pdf",
    code: "https://github.com/Zhang-pchao/GlycineTautomerism",
    preprint: { label: "arXiv", href: "https://arxiv.org/abs/2311.05917" },
    toc: "/assets/toc/jcim-2024-glycine-tautomerism.webp",
  },
  {
    year: "2024",
    journal: "ACS Phys. Chem. Au",
    title: "Double-Layer Distribution of Hydronium and Hydroxide Ions in the Air–Water Interface",
    authors: "Pengchao Zhang, Muye Feng, and Xuefei Xu*",
    details: "ACS Physical Chemistry Au 4(4), 336–346.",
    doi: "https://doi.org/10.1021/acsphyschemau.3c00076",
    pdf: "/papers/acs-phys-chem-au-2024-air-water-ions.pdf",
    code: "https://github.com/Zhang-pchao/DoubleLayerAirWater",
    preprint: {
      label: "ChemRxiv",
      href: "https://chemrxiv.org/doi/full/10.26434/chemrxiv-2023-5l2wf-v2",
    },
    toc: "/assets/toc/acs-phys-chem-au-2024-air-water-ions.webp",
  },
  {
    year: "2022",
    journal: "J. Chem. Theory Comput.",
    title:
      "Identification of Torsional Modes in Complex Molecules Using Redundant Internal Coordinates: The Multistructural Method with Torsional Anharmonicity with a Coupled Torsional Potential and Delocalized Torsions",
    authors: "Wenbo Chen, Pengchao Zhang, Donald G. Truhlar, Jingjing Zheng*, and Xuefei Xu*",
    details: "Journal of Chemical Theory and Computation 18(12), 7671–7682.",
    doi: "https://doi.org/10.1021/acs.jctc.2c00952",
    pdf: "/papers/jctc-2022-torsional-modes.pdf",
    toc: "/assets/toc/jctc-2022-torsional-modes.webp",
  },
  {
    year: "2019",
    journal: "Renew. Energy",
    title:
      "In-Depth Experimental Study of Pyrolysis Characteristics of Raw and Cooking Treated Shrimp Shell Samples",
    authors:
      "Pengchao Zhang, Hongyun Hu*, Hong Tang, Yanjun Yang, Hong Liu, Qiang Lu, Xiaoqian Li, Nakorn Worasuwannarak, and Hong Yao*",
    details: "Renewable Energy 139, 730–738.",
    doi: "https://doi.org/10.1016/j.renene.2019.02.119",
    pdf: "/papers/renewable-energy-2019-shrimp-shell-pyrolysis.pdf",
  },
];

export const patents = [
  {
    title: "Device and Method for Preparing Activated Coke by Pyrolysis of Municipal Solid Waste",
    authors: "Hongyun Hu, Pengchao Zhang, Hong Yao, et al.",
    number: "Chinese invention patent CN107934961B",
    date: "2019-07-19",
  },
  {
    title: "Method and Product for Preparing Rubber Filler by Pyrolysis of Shrimp and Crab Shells",
    authors: "Hongyun Hu, Pengchao Zhang, Kang Xie, et al.",
    number: "Chinese invention patent CN110054912B",
    date: "2020-08-18",
  },
];

export const honors = [
  {
    year: "2025",
    title: "Outstanding Doctoral Dissertation, Tsinghua University",
  },
  {
    year: "2025",
    title: "Outstanding Ph.D. Graduate, Tsinghua University",
  },
  {
    year: "2024",
    title: "National Scholarship for Doctoral Students, Tsinghua University",
  },
  {
    year: "2020",
    title: "Outstanding Undergraduate Graduate, Huazhong University of Science and Technology",
  },
  {
    year: "2019",
    title: "National Grand Prize, 12th National College Student Energy Conservation and Emission Reduction Competition",
  },
  {
    year: "2019",
    title: "Humanism Award, TECO Green Tech International Contest",
  },
];
