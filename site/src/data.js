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
  { label: "Zhihu", href: "https://www.zhihu.com/people/zhang-pc-60" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pengchao-zhang-9a6262261/",
  },
];

export const tutorials = [
  {
    title: "From DFT to DeePKS to DeePMD | DeePKS Basics",
    zhTitle: "DFT → DeePKS → DeePMD：DeePKS 基础",
    href: "https://nb.bohrium.dp.tech/detail/8742877753",
    description: "An introductory notebook on the DeePKS workflow.",
    zhDescription: "介绍 DeePKS 工作流基础概念的入门 notebook。",
  },
  {
    title: "From DFT to DeePKS to DeePMD | DeePKS Tutorials",
    zhTitle: "DFT → DeePKS → DeePMD：DeePKS 实践教程",
    href: "https://nb.bohrium.dp.tech/detail/7144731675",
    description: "Practical notebooks connecting DFT, DeePKS, and DeePMD.",
    zhDescription: "串联 DFT、DeePKS 与 DeePMD 的实践 notebook。",
  },
  {
    title: "OPES (On-the-Fly Probability Enhanced Sampling)",
    zhTitle: "OPES 增强采样",
    href: "https://bohrium.dp.tech/notebooks/9874998164",
    description: "A notebook introduction to OPES enhanced sampling.",
    zhDescription: "介绍 OPES 增强采样方法的 notebook。",
  },
  {
    title: "Voronoi CVs for Enhanced Sampling Autoionization and Tautomerism",
    zhTitle: "用于自解离与互变异构增强采样的 Voronoi CVs",
    href: "https://bohrium.dp.tech/notebooks/83327491785",
    description: "Collective-variable construction for reactive aqueous systems.",
    zhDescription: "面向水相反应体系的集体变量构建示例。",
  },
];

export const codeResources = [
  {
    title: "Paper-specific Voronoi CVs for glycine tautomerism",
    zhTitle: "论文专用实现：甘氨酸互变异构 Voronoi CVs",
    href: "https://github.com/Zhang-pchao/GlycineTautomerism/tree/main/Voronoi_collective_variables",
    paperHref: "https://doi.org/10.1021/acs.jcim.4c00273",
    description:
      "Archived PLUMED source files used for the published solvation and proton-transfer coordinates. Keep these files for reproducing the paper; use the generic implementation for new systems.",
    zhDescription:
      "论文中溶剂化与质子转移坐标所用的 PLUMED 源文件归档。复现原论文时保留这些文件；新体系优先使用通用实现。",
  },
  {
    title: "Paper-specific Voronoi CVs for water self-ions at interfaces",
    zhTitle: "论文专用实现：界面水自解离离子 Voronoi CVs",
    href: "https://github.com/Zhang-pchao/OilWaterInterface/tree/main/Voronoi_CVs",
    paperHref: "https://doi.org/10.1021/acs.langmuir.4c05004",
    description:
      "Archived PLUMED CVs for ion activity, OH⁻/H₃O⁺ separation, identity diagnostics, and slab-location observables used in the interface study.",
    zhDescription:
      "界面研究中用于离子活性、OH⁻/H₃O⁺ 分离、身份诊断和 slab 位置观测量的 PLUMED CV 归档。",
  },
  {
    title: "Paper-specific Voronoi CV for OPES-DPMD nitrogen reduction",
    zhTitle: "论文专用实现：OPES-DPMD 氮还原 Voronoi CV",
    href: "https://github.com/Zhang-pchao/research/tree/main/OPES-DPMD-NRR/Voronoi_collective_variables",
    paperHref: "https://doi.org/10.1039/D5TA09029F",
    description:
      "Archived VoronoiD3 source used with OPES-DPMD for proton-transfer environments around a Ru single-atom nitrogen-reduction catalyst.",
    zhDescription:
      "用于 Ru 单原子催化氮还原 OPES-DPMD 模拟的 VoronoiD3 源码归档，描述质子转移局域环境。",
  },
];

export const reactiveVoronoiGuide = {
  title: "Reactive Soft-Voronoi Collective Variables",
  zhTitle: "Reactive Soft-Voronoi 集体变量",
  summary:
    "A general PLUMED implementation for reactive systems whose proton donor, acceptor, or ionic identity changes during a trajectory. One smooth assignment is reduced into coordination activity, defect separation, and physical position.",
  zhSummary:
    "面向质子供体、受体或离子身份会随轨迹改变的反应体系。该通用 PLUMED 实现以同一套平滑归属为基础，分别描述配位缺陷活性、缺陷分离程度和物理空间位置。",
  status: "Upstream proposal: PLUMED PR #1442",
  zhStatus: "上游提案：PLUMED PR #1442",
  reviewedCommit: "f13bead9f6df0d152906f66102139fabe7edafd1",
  links: [
    {
      label: "Project branch",
      zhLabel: "项目分支",
      href: "https://github.com/Zhang-pchao/plumed2/tree/performance/reactive-voronoi-scaling",
    },
    {
      label: "Source",
      zhLabel: "源码",
      href: "https://github.com/Zhang-pchao/plumed2/blob/performance/reactive-voronoi-scaling/src/colvar/ReactiveVoronoi.cpp",
    },
    {
      label: "Manual overview",
      zhLabel: "手册概览",
      href: "https://github.com/Zhang-pchao/plumed2/blob/performance/reactive-voronoi-scaling/src/colvar/module.md#reactive-soft-voronoi-collective-variables",
    },
    {
      label: "Official regtest",
      zhLabel: "官方回归测试",
      href: "https://github.com/Zhang-pchao/plumed2/tree/performance/reactive-voronoi-scaling/regtest/basic/rt-reactive-voronoi",
    },
    {
      label: "Upstream PR #1442",
      zhLabel: "上游 PR #1442",
      href: "https://github.com/plumed/plumed2/pull/1442",
    },
  ],
  principleSteps: [
    {
      label: "Candidate centers",
      zhLabel: "候选中心",
      detail: "Atoms that can receive a transferable atom, commonly O or N.",
      zhDetail: "可能接收可转移原子的中心，质子转移中通常为 O 或 N。",
    },
    {
      label: "Soft assignment",
      zhLabel: "平滑归属",
      detail: "Each ASSIGNED atom is distributed continuously across all CENTERS.",
      zhDetail: "每个 ASSIGNED 原子在全部 CENTERS 之间连续分配。",
    },
    {
      label: "Occupancy defect",
      zhLabel: "占据数缺陷",
      detail: "The smooth occupancy is compared with a declared reference value.",
      zhDetail: "将平滑占据数与明确给定的参考占据数比较。",
    },
    {
      label: "Physical reduction",
      zhLabel: "物理约化",
      detail: "Reduce the same defects into activity, separation, or position.",
      zhDetail: "将同一组缺陷约化为活性、分离程度或空间位置。",
    },
  ],
  principleText:
    "For center i and assigned atom j, the normalized weight wᵢⱼ uses a distance-based softmax. The occupancy nᵢ = Σⱼwᵢⱼ and defect qᵢ = nᵢ − νᵢ are smooth functions of atomic coordinates. These geometric defects are useful reaction descriptors, but they are not formal electronic charges.",
  zhPrincipleText:
    "对中心 i 和待归属原子 j，归一化权重 wᵢⱼ 由距离 softmax 给出；占据数 nᵢ = Σⱼwᵢⱼ，缺陷 qᵢ = nᵢ − νᵢ，均为原子坐标的平滑函数。这类几何缺陷适合作为反应描述符，但不等同于严格的电子电荷。",
  formula: "wᵢⱼ = exp(−κdᵢⱼ) / Σₖ exp(−κdₖⱼ)    ·    nᵢ = Σⱼwᵢⱼ    ·    qᵢ = nᵢ − νᵢ",
  installText:
    "The Actions belong to PLUMED's default colvar module and have no external library dependency. Until the upstream proposal is merged and released, use the reviewed source snapshot either as a runtime plugin or in an isolated PLUMED source build.",
  zhInstallText:
    "三个 Action 属于 PLUMED 默认的 colvar 模块，不依赖外部程序库。在上游提案合并并随正式版本发布之前，可将已审阅源码编译为运行时插件，或放入独立的 PLUMED 源码构建中。",
  runtimeInstall: `curl -L -o ReactiveVoronoi.cpp \\
  https://raw.githubusercontent.com/Zhang-pchao/plumed2/f13bead9f6df0d152906f66102139fabe7edafd1/src/colvar/ReactiveVoronoi.cpp
plumed mklib ReactiveVoronoi.cpp`,
  inTreeInstall: `cp ReactiveVoronoi.cpp /path/to/plumed/src/colvar/
cd /path/to/plumed
./configure --prefix=/path/to/plumed-install
make -j4
make install
source /path/to/plumed-install/lib/plumed/sourceme.sh`,
  installCaution:
    "Compile the plugin with the same PLUMED executable, compiler, and ABI used by the target simulation. Rebuild after changing any of them. Test with plumed driver before a short molecular-dynamics smoke test.",
  zhInstallCaution:
    "插件必须使用目标模拟所调用的同一 PLUMED 可执行文件、编译器和 ABI 编译；其中任一项变化后都应重新构建。先用 plumed driver 检查，再进行短程分子动力学冒烟测试。",
  actions: [
    {
      name: "VORONOI_COORDINATION",
      purpose: "How much reactive coordination-defect activity is present?",
      zhPurpose: "体系中存在多少反应性配位缺陷？",
      description:
        "Reduces selected defects with POWER=1 or 2, optional sign filtering, and optional coefficients. POWER=2 is often the smoother activity measure near qᵢ = 0.",
      zhDescription:
        "通过 POWER=1 或 2、可选的正负号筛选和权重系数约化指定缺陷。qᵢ = 0 附近，POWER=2 通常是更平滑的活性度量。",
    },
    {
      name: "VORONOI_DISTANCE",
      purpose: "How far apart are correlated coordination defects?",
      zhPurpose: "相关配位缺陷彼此分离多远？",
      description:
        "Combines defect products with explicit within-group or cross-group center distances. GROUP1 and GROUP2 are chemical selections, not positions in an atom list.",
      zhDescription:
        "将缺陷乘积与组内或跨组中心距离结合。GROUP1 与 GROUP2 表示明确的化学选择，而不是原子列表中的位置。",
    },
    {
      name: "VORONOI_POSITION",
      purpose: "Where is a selected defect in a declared Cartesian frame?",
      zhPurpose: "指定缺陷在明确的笛卡尔参考系中位于何处？",
      description:
        "Reports a defect-weighted X, Y, or Z displacement from a fixed ORIGIN. SELECT limits possible hosts; NORMALIZE is valid only while a selected defect remains present.",
      zhDescription:
        "给出缺陷加权的 X、Y 或 Z 方向相对固定 ORIGIN 的位移。SELECT 限定可能载体；仅在指定缺陷始终存在时才可使用 NORMALIZE。",
    },
  ],
  keywords: [
    {
      keyword: "CENTERS",
      actions: "All",
      zhActions: "全部",
      description: "Atoms that can receive the smooth assignment.",
      zhDescription: "可接收平滑归属的候选中心原子。",
    },
    {
      keyword: "ASSIGNED",
      actions: "All",
      zhActions: "全部",
      description: "Transferable atoms distributed across CENTERS.",
      zhDescription: "在 CENTERS 之间进行分配的可转移原子。",
    },
    {
      keyword: "KAPPA",
      actions: "All",
      zhActions: "全部",
      description: "Positive assignment sharpness in inverse PLUMED length units.",
      zhDescription: "正的归属陡峭度，单位为 PLUMED 长度单位的倒数。",
    },
    {
      keyword: "REFERENCE",
      actions: "All",
      zhActions: "全部",
      description: "One occupancy reference for broadcast, or one per CENTER in the same order.",
      zhDescription: "可给出一个统一参考占据数，或按 CENTERS 顺序逐一给出。",
    },
    {
      keyword: "NLIST · NL_CUTOFF · NL_STRIDE",
      actions: "All",
      zhActions: "全部",
      description: "Optional approximate truncation; converge values and forces against exact mode.",
      zhDescription: "可选的近似截断；必须以精确模式为基准收敛 CV 数值和力。",
    },
    {
      keyword: "SELECT · COEFFICIENTS · POWER · SIGN",
      actions: "COORDINATION",
      zhActions: "COORDINATION",
      description: "Choose defects and their scalar reduction.",
      zhDescription: "选择参与约化的缺陷并定义标量约化方式。",
    },
    {
      keyword: "GROUP1 · GROUP2",
      actions: "DISTANCE",
      zhActions: "DISTANCE",
      description: "Explicit, nonempty center subsets for within-group or cross-group pairs.",
      zhDescription: "明确且非空的中心子集，用于构建组内或跨组配对。",
    },
    {
      keyword: "SELECT · AXIS · ORIGIN",
      actions: "POSITION",
      zhActions: "POSITION",
      description: "Choose defect hosts and the fixed Cartesian reference.",
      zhDescription: "选择缺陷载体和固定的笛卡尔参考。",
    },
    {
      keyword: "SIGN · ABSOLUTE · NORMALIZE · TOLERANCE",
      actions: "POSITION",
      zhActions: "POSITION",
      description: "Control defect sign, spatial magnitude, normalization, and fail-closed threshold.",
      zhDescription: "控制缺陷正负、空间位移形式、归一化及失效关闭阈值。",
    },
    {
      keyword: "NOPBC · SERIAL",
      actions: "All",
      zhActions: "全部",
      description: "Disable minimum-image distances or repeat work per MPI rank for debugging only.",
      zhDescription: "关闭最小镜像距离；或仅为调试在各 MPI rank 重复计算。",
    },
  ],
  minimalExample: `LOAD FILE=./ReactiveVoronoi.so

UNITS LENGTH=A
WaterO: GROUP ATOMS=1-4
WaterH: GROUP ATOMS=5-12

ionization: VORONOI_COORDINATION ...
  CENTERS=WaterO ASSIGNED=WaterH KAPPA=5 REFERENCE=2 POWER=2
  ...
ion_distance: VORONOI_DISTANCE ...
  CENTERS=WaterO ASSIGNED=WaterH KAPPA=5 REFERENCE=2 GROUP1=WaterO
  ...
h3o_z: VORONOI_POSITION ...
  CENTERS=WaterO ASSIGNED=WaterH KAPPA=5 REFERENCE=2
  AXIS=Z ORIGIN=5 SIGN=POSITIVE ABSOLUTE
  ...

PRINT ARG=ionization,ion_distance,h3o_z FILE=COLVAR STRIDE=1
DUMPDERIVATIVES ARG=ionization FILE=DERIVATIVES STRIDE=1`,
  exampleText:
    "This compact input monitors water autoionization, ion-pair separation, and positive-defect location. Atom numbers, KAPPA, ORIGIN, and every production setting are system-specific; begin from labeled structures and exact full-pair mode.",
  zhExampleText:
    "该最小输入同时监测水自解离活性、离子对分离和正缺陷位置。原子编号、KAPPA、ORIGIN 以及所有生产参数都依赖具体体系；应从带标注的结构和精确全配对模式开始。",
  outputRows: [
    {
      state: "Neutral water",
      zhState: "中性水",
      expectation: "ionization approaches 0; position terms vanish as the selected defect disappears.",
      zhExpectation: "ionization 接近 0；指定缺陷消失时，未归一化位置项趋近 0。",
    },
    {
      state: "One H₃O⁺/OH⁻ pair",
      zhState: "一对 H₃O⁺/OH⁻",
      expectation: "For well-localized defects, total POWER=2 activity approaches 2; positive and negative branches each approach 1.",
      zhExpectation: "缺陷充分局域时，POWER=2 总活性接近 2，正、负分支分别接近 1。",
    },
    {
      state: "Proton transfer",
      zhState: "质子转移过程",
      expectation: "Intermediate soft values are expected; inspect continuity and derivatives, not only endpoints.",
      zhExpectation: "中间态出现连续的软数值是正常现象；除端点外还需检查连续性与导数。",
    },
  ],
  validation: [
    {
      text: "Check CENTERS, ASSIGNED, REFERENCE, selections, and vector order against a labeled structure.",
      zhText: "依据带标注结构检查 CENTERS、ASSIGNED、REFERENCE、选择范围和向量顺序。",
    },
    {
      text: "Verify Σᵢnᵢ = Nassigned and Σᵢqᵢ = Nassigned − Σᵢνᵢ on neutral and reactive frames.",
      zhText: "在中性与反应帧验证 Σᵢnᵢ = Nassigned 和 Σᵢqᵢ = Nassigned − Σᵢνᵢ。",
    },
    {
      text: "Compare analytical and numerical coordinate and box derivatives away from cusps and periodic branch cuts.",
      zhText: "避开尖点和周期分支切面，对比解析与数值的坐标及盒子导数。",
    },
    {
      text: "Test lattice translation and consistent atom-list reordering invariance.",
      zhText: "检查晶格平移不变性，以及原子列表与配套向量同步重排后的不变性。",
    },
    {
      text: "If NLIST is used, converge values and forces against exact mode before increasing NL_STRIDE.",
      zhText: "若使用 NLIST，先以精确模式收敛数值和力，再增大 NL_STRIDE。",
    },
    {
      text: "Compare serial and intended MPI/OpenMP execution, then run a short fixed-seed MD smoke test before biasing.",
      zhText: "对比串行与预期 MPI/OpenMP 结果；施加偏置前进行短程固定随机种子 MD 冒烟测试。",
    },
  ],
  performance: [
    {
      text: "Exact mode evaluates Ncenters × Nassigned pairs per step; for water this is 2Nwater².",
      zhText: "精确模式每步计算 Ncenters × Nassigned 个配对；对水体系即 2Nwater²。",
    },
    {
      text: "OpenMP and MPI reduce elapsed CPU time but do not change the quadratic exact-mode scaling.",
      zhText: "OpenMP 与 MPI 可缩短 CPU 用时，但不会改变精确模式的二次复杂度。",
    },
    {
      text: "The Actions run on CPUs even when the molecular-dynamics force model runs on a GPU; allocate and benchmark host CPU cores without oversubscription.",
      zhText: "即使分子动力学力模型运行在 GPU 上，这些 Action 仍由 CPU 执行；应合理分配并实测主机 CPU 核数，避免过度订阅。",
    },
    {
      text: "A converged NLIST reduces retained pairs for large systems, but it is an approximation and can introduce membership discontinuities.",
      zhText: "对大体系，经过收敛验证的 NLIST 可减少保留配对，但它属于近似，并可能引入成员变化不连续。",
    },
  ],
  limitations: [
    {
      text: "The implementation does not infer elements, molecules, water, or reactive sites; chemical selections are the user's model definition.",
      zhText: "实现不会自动推断元素、分子、水或反应位点；化学选择本身就是用户的模型定义。",
    },
    {
      text: "POWER=1 sign filters, ABSOLUTE positions, periodic branch cuts, and NLIST membership changes are not globally smooth bias coordinates.",
      zhText: "POWER=1 符号筛选、ABSOLUTE 位置、周期分支切面及 NLIST 成员变化都不是全局平滑的偏置坐标。",
    },
    {
      text: "ORIGIN is fixed: VORONOI_POSITION does not unwrap trajectories or locate a drifting interface, droplet, or pore.",
      zhText: "ORIGIN 是固定坐标；VORONOI_POSITION 不负责轨迹展开，也不会自动定位漂移的界面、液滴或孔道。",
    },
    {
      text: "NORMALIZE intentionally stops when its selected defect weight is below TOLERANCE instead of returning an unstable value.",
      zhText: "当指定缺陷权重低于 TOLERANCE 时，NORMALIZE 会主动停止，而不是返回不稳定数值。",
    },
  ],
  applications: [
    {
      title: "Intramolecular and Water Mediated Tautomerism of Solvated Glycine",
      zhTitle: "Intramolecular and Water Mediated Tautomerism of Solvated Glycine",
      year: "2024",
      doi: "https://doi.org/10.1021/acs.jcim.4c00273",
      code: "https://github.com/Zhang-pchao/GlycineTautomerism/tree/main/Voronoi_collective_variables",
      description:
        "Water–glycine and intramolecular defect-distance terms can now be written with explicit center groups instead of hard-coded atom-list positions.",
      zhDescription:
        "水-甘氨酸及分子内缺陷距离项现在可用明确的中心分组表达，无需硬编码原子列表位置。",
    },
    {
      title: "Propensity of Water Self-Ions at Air(Oil)–Water Interfaces Revealed by Deep Potential Molecular Dynamics with Enhanced Sampling",
      zhTitle: "Propensity of Water Self-Ions at Air(Oil)–Water Interfaces Revealed by Deep Potential Molecular Dynamics with Enhanced Sampling",
      year: "2025",
      doi: "https://doi.org/10.1021/acs.langmuir.4c05004",
      code: "https://github.com/Zhang-pchao/OilWaterInterface/tree/main/Voronoi_CVs",
      description:
        "Positive and negative defects can be selected explicitly and resolved along a physical slab axis; legacy index observables remain only as paper-reproduction archives.",
      zhDescription:
        "可分别选择正、负缺陷并沿真实 slab 轴解析其位置；旧的原子序号观测量仅作为论文复现归档保留。",
    },
    {
      title: "Solvent Effect on the Electrocatalytic Nitrogen Reduction Reaction: A Deep Potential Molecular Dynamics Simulation with Enhanced Sampling for the Case of the Ruthenium Single Atom Catalyst",
      zhTitle: "Solvent Effect on the Electrocatalytic Nitrogen Reduction Reaction: A Deep Potential Molecular Dynamics Simulation with Enhanced Sampling for the Case of the Ruthenium Single Atom Catalyst",
      year: "2026",
      doi: "https://doi.org/10.1039/D5TA09029F",
      code: "https://github.com/Zhang-pchao/research/tree/main/OPES-DPMD-NRR/Voronoi_collective_variables",
      description:
        "Water oxygen atoms and a reactive N site become explicit centers, so the chemistry can be changed through selections and references rather than a new C++ Action.",
      zhDescription:
        "将水氧和反应 N 位点明确设为中心后，可通过选择范围和参考占据数改变化学定义，无需另写 C++ Action。",
    },
  ],
  references: [
    {
      authors: "Emanuele Grifoni, GiovanniMaria Piccini, and Michele Parrinello",
      title: "Microscopic Description of Acid-Base Equilibrium",
      details: "Proc. Natl. Acad. Sci. U. S. A. 2019, 116, 4054–4057",
      doi: "https://doi.org/10.1073/pnas.1819771116",
    },
    {
      authors: "Emanuele Grifoni, GiovanniMaria Piccini, and Michele Parrinello",
      title: "Tautomeric Equilibrium in Condensed Phases",
      details: "J. Chem. Theory Comput. 2020, 16, 6027–6031",
      doi: "https://doi.org/10.1021/acs.jctc.0c00519",
    },
    {
      authors: "Pengchao Zhang, Axel Tosello Gardini, Xuefei Xu, and Michele Parrinello",
      title: "Intramolecular and Water Mediated Tautomerism of Solvated Glycine",
      details: "J. Chem. Inf. Model. 2024, 64, 3599–3604",
      doi: "https://doi.org/10.1021/acs.jcim.4c00273",
    },
    {
      authors: "Pengchao Zhang and Xuefei Xu",
      title: "Propensity of Water Self-Ions at Air(Oil)–Water Interfaces Revealed by Deep Potential Molecular Dynamics with Enhanced Sampling",
      details: "Langmuir 2025, 41, 3675–3683",
      doi: "https://doi.org/10.1021/acs.langmuir.4c05004",
    },
    {
      authors: "Pengchao Zhang and Xuefei Xu",
      title: "Modulation of Electric Field and Interface on Competitive Reaction Mechanisms",
      details: "J. Chem. Theory Comput. 2025, 21, 6584–6593",
      doi: "https://doi.org/10.1021/acs.jctc.5c00705",
    },
    {
      authors: "Bowen Zhang, Pengchao Zhang, and Xuefei Xu",
      title: "Solvent Effect on the Electrocatalytic Nitrogen Reduction Reaction: A Deep Potential Molecular Dynamics Simulation with Enhanced Sampling for the Case of the Ruthenium Single Atom Catalyst",
      details: "J. Mater. Chem. A 2026, 14, 7109–7120",
      doi: "https://doi.org/10.1039/D5TA09029F",
    },
  ],
};

export const technicalNotes = [
  {
    title: "Water self-ions at interfaces: from double layers to Voronoi CVs",
    zhTitle: "界面水自解离离子：从双分子层分布到 Voronoi CV",
    category: "Interfacial ions",
    zhCategory: "界面离子",
    system:
      "Air-water and air(oil)-water slab systems; H₃O⁺/OH⁻ identity, charge, distance, diffusion, and interfacial location.",
    zhSystem:
      "空气-水与空气（油）-水 slab 体系；H₃O⁺/OH⁻ 的身份、电荷、距离、扩散和界面位置。",
    tags: ["H₃O⁺", "OH⁻", "Voronoi CV", "OPES-DPMD", "slab"],
    description:
      "A case note on turning an interfacial acidity question into reusable CVs, analysis scripts, diffusion checks, and figure workflows.",
    zhDescription:
      "记录如何把界面酸碱性问题转化为可复用的 CV、分析脚本、扩散检查和作图流程。",
    value:
      "The reusable part is the decision record: how to define where an ion is, which ion it is, and whether an apparent interfacial preference is robust to the coordinate choice.",
    zhValue:
      "真正值得备份的是方法判断：怎样定义离子在哪里、它是哪一种离子，以及表观界面偏好是否依赖坐标选择。",
    status: "Field note",
    zhStatus: "研究札记",
    links: [
      {
        label: "Paper: air-water double layer",
        zhLabel: "论文：空气-水界面双分子层分布",
        href: "https://doi.org/10.1021/acsphyschemau.3c00076",
      },
      {
        label: "Paper: air(oil)-water interfaces",
        zhLabel: "论文：空气（油）-水界面",
        href: "https://doi.org/10.1021/acs.langmuir.4c05004",
      },
      {
        label: "Code: DoubleLayerAirWater",
        zhLabel: "代码：DoubleLayerAirWater",
        href: "https://github.com/Zhang-pchao/DoubleLayerAirWater",
      },
      {
        label: "Code: OilWaterInterface Voronoi CVs",
        zhLabel: "代码：OilWaterInterface Voronoi CVs",
        href: "https://github.com/Zhang-pchao/OilWaterInterface/tree/main/Voronoi_CVs",
      },
    ],
  },
  {
    title: "Glycine tautomerism: proton transfer as a model-CV-sampling problem",
    zhTitle: "甘氨酸互变异构：把质子转移作为模型-CV-采样耦合问题",
    category: "Reactive sampling",
    zhCategory: "反应采样",
    system:
      "Solvated glycine; intramolecular, H₃O⁺-mediated, and OH⁻-mediated proton-transfer pathways.",
    zhSystem:
      "水溶液中的甘氨酸；分子内、H₃O⁺ 介导和 OH⁻ 介导的质子转移路径。",
    tags: ["glycine", "DeePKS", "DeePMD", "OPES", "proton transfer"],
    description:
      "Connects ab initio and DeePKS/DeePMD model building, OPES enhanced sampling, Voronoi CVs, kinetics, and movie post-processing.",
    zhDescription:
      "串联从 ab initio 与 DeePKS/DeePMD 建模，到 OPES 增强采样、Voronoi CV、动力学分析和视频后处理的流程。",
    value:
      "Use this as a casebook for why low training loss is not enough: the reaction coordinate, water-ion identity, model coverage, and trajectory evidence have to agree.",
    zhValue:
      "这类笔记的价值在于说明为什么训练 loss 低还不够：反应坐标、水自离子身份、模型覆盖范围和轨迹证据必须相互一致。",
    status: "Field note",
    zhStatus: "研究札记",
    links: [
      {
        label: "Paper: solvated glycine tautomerism",
        zhLabel: "论文：溶液中甘氨酸互变异构",
        href: "https://doi.org/10.1021/acs.jcim.4c00273",
      },
      {
        label: "Code: GlycineTautomerism",
        zhLabel: "代码：GlycineTautomerism",
        href: "https://github.com/Zhang-pchao/GlycineTautomerism",
      },
      {
        label: "Code: Voronoi collective variables",
        zhLabel: "代码：Voronoi 集体变量",
        href: "https://github.com/Zhang-pchao/GlycineTautomerism/tree/main/Voronoi_collective_variables",
      },
      {
        label: "Workflow: enhanced sampling inputs",
        zhLabel: "工作流：增强采样输入",
        href: "https://github.com/Zhang-pchao/GlycineTautomerism/tree/main/Enhanced_Sampling",
      },
    ],
  },
  {
    title: "Ion-regulated nanobubbles: from bulk N₂ bubbles to TiO₂-water interfaces",
    zhTitle: "离子调控纳米气泡：从体相 N₂ 气泡到 TiO₂-水界面",
    category: "Nanobubbles",
    zhCategory: "纳米气泡",
    system:
      "Nitrogen nanobubbles in water and near TiO₂-water interfaces; H₃O⁺/OH⁻ environments, N₂ clusters, surface species, and bubble stability.",
    zhSystem:
      "水中及 TiO₂-水界面附近的氮气纳米气泡；H₃O⁺/OH⁻ 环境、N₂ 团簇、表面物种和气泡稳定性。",
    tags: ["nanobubble", "N₂", "TiO₂-water", "Deep Potential", "cluster analysis"],
    description:
      "Bridges ion-modulated bubble dissolution and stability with surface-assisted bubble nucleation, using DP training, OPES-DPMD, cluster tracking, and movie/figure workflows.",
    zhDescription:
      "把离子调控气泡溶解/稳定性与表面辅助气泡成核联系起来，覆盖 DP 训练、OPES-DPMD、团簇追踪和图/视频后处理。",
    value:
      "This backs up choices that generic AI cannot infer from package docs: what counts as the bubble, how to track it through PBC, and how ions, N₂, and surface species are separated in analysis.",
    zhValue:
      "这类备份记录的是通用 AI 难以从软件文档中推断的选择：怎样定义气泡、如何跨 PBC 追踪，以及分析中如何区分离子、N₂ 和表面物种。",
    status: "Field note",
    zhStatus: "研究札记",
    links: [
      {
        label: "Paper: ion-regulated N₂ nanobubbles",
        zhLabel: "论文：离子调控 N₂ 纳米气泡",
        href: "https://doi.org/10.1021/jacs.4c06641",
      },
      {
        label: "Paper: ion-modulated Ostwald ripening",
        zhLabel: "论文：离子调控 Ostwald 熟化动力学",
        href: "https://doi.org/10.1021/jacs.6c08865",
      },
      {
        label: "Code: N2BubbleIon",
        zhLabel: "代码：N2BubbleIon",
        href: "https://github.com/Zhang-pchao/N2BubbleIon",
      },
      {
        label: "Paper: TiO₂-water nanobubble nucleation",
        zhLabel: "论文：TiO₂-水界面纳米气泡成核",
        href: "https://doi.org/10.1021/jacs.6c05480",
      },
      {
        label: "Code: OPES-DPMD-Bubble-TiO2",
        zhLabel: "代码：OPES-DPMD-Bubble-TiO2",
        href: "https://github.com/Zhang-pchao/research/tree/main/OPES-DPMD-Bubble-TiO2",
      },
    ],
  },
];

export const recommendedResourceGroups = [
  {
    title: "Foundations, Computing, and Academic Workflow",
    zhTitle: "基础、计算与学术工作流",
    resources: [
      {
        title: "Theory and Computing Physics Guide",
        href: "https://chriswenchen.github.io/theory-computing-physics-guide/",
        description:
          "Computing environments and software for theoretical and computational physics.",
        zhDescription: "理论与计算物理中的计算环境和常用软件整理。",
      },
      {
        title: "CS Self-Learning Guide",
        href: "https://csdiy.wiki/",
        description: "Computer-science courses and structured self-study pathways.",
        zhDescription: "计算机科学课程和系统自学路线整理。",
      },
      {
        title: "Liu Group Tutorials",
        href: "http://jianliugroup.pku.edu.cn/tutorials.html",
        description: "Tutorials on computational chemistry and molecular simulation.",
        zhDescription: "计算化学与分子模拟相关教程。",
      },
      {
        title: "Cheng Group Wiki",
        href: "https://wiki.cheng-group.net/",
        description: "Group notes on computational chemistry and atomistic simulation.",
        zhDescription: "计算化学和原子尺度模拟相关组内笔记。",
      },
      {
        title: "Overleaf",
        href: "https://www.overleaf.com/",
        description: "Online LaTeX writing and collaboration.",
        zhDescription: "在线 LaTeX 写作与协作平台。",
      },
      {
        title: "GitHub",
        href: "https://github.com/",
        description: "Code hosting, version control, and collaboration.",
        zhDescription: "代码托管、版本控制与协作平台。",
      },
      {
        title: "Google Scholar",
        href: "https://scholar.google.com/",
        description: "Academic literature search and citation tracking.",
        zhDescription: "学术文献检索和引用追踪工具。",
      },
      {
        title: "Academic Tree",
        href: "https://academictree.org/chemistry/index.php",
        description: "Academic genealogy for chemistry researchers.",
        zhDescription: "化学研究者学术谱系查询。",
      },
    ],
  },
  {
    title: "Molecular Simulation Engines and Atomistic Workflows",
    zhTitle: "分子模拟引擎与原子尺度工作流",
    resources: [
      {
        title: "LAMMPS",
        href: "https://www.lammps.org/",
        description: "A general-purpose molecular dynamics simulation package.",
        zhDescription: "通用分子动力学模拟软件。",
      },
      {
        title: "GROMACS",
        href: "https://manual.gromacs.org/documentation/current/index.html",
        description:
          "Current documentation for molecular dynamics simulations with GROMACS.",
        zhDescription: "GROMACS 分子动力学模拟的官方文档。",
      },
      {
        title: "i-PI",
        href: "https://docs.ipi-code.org/",
        description: "A Python interface for path-integral and atomistic simulations.",
        zhDescription: "用于路径积分和原子尺度模拟的 Python 接口。",
      },
      {
        title: "ASE",
        href: "https://docs.ase-lib.org/",
        description: "Python tools for setting up, running, and analyzing atomistic simulations.",
        zhDescription: "用于构建、运行和分析原子尺度模拟的 Python 工具。",
      },
      {
        title: "Atomistic Cookbook",
        href: "https://atomistic-cookbook.org/index.html",
        description: "Worked examples for atomistic simulation workflows.",
        zhDescription: "原子尺度模拟工作流的案例教程。",
      },
    ],
  },
  {
    title: "Enhanced Sampling and Free-Energy Methods",
    zhTitle: "增强采样与自由能方法",
    resources: [
      {
        title: "PLUMED",
        href: "https://www.plumed.org/download",
        description:
          "Software and documentation for free-energy calculations and enhanced sampling.",
        zhDescription: "自由能计算与增强采样软件及文档。",
      },
      {
        title: "MLcolvar",
        href: "https://mlcolvar.readthedocs.io/en/latest/index.html",
        description: "Machine-learning collective variables for enhanced sampling.",
        zhDescription: "用于增强采样的机器学习集体变量工具。",
      },
    ],
  },
  {
    title: "Electronic Structure and Quantum Chemistry",
    zhTitle: "电子结构与量子化学",
    resources: [
      {
        title: "CP2K",
        href: "https://www.cp2k.org/about",
        description:
          "An electronic-structure and atomistic simulation software package.",
        zhDescription: "电子结构和原子尺度模拟软件。",
      },
      {
        title: "ABACUS",
        href: "https://abacus.deepmodeling.com/en/latest/",
        description: "Open-source electronic-structure package for first-principles calculations.",
        zhDescription: "用于第一性原理计算的开源电子结构软件。",
      },
      {
        title: "ORCA",
        href: "https://www.faccts.de/docs#orca",
        description: "Quantum chemistry software and documentation.",
        zhDescription: "量子化学软件及文档。",
      },
      {
        title: "Truhlar Software",
        href: "https://truhlar.chem.umn.edu/computational-tools/software",
        description: "Computational chemistry software from the Truhlar group.",
        zhDescription: "Truhlar 课题组整理的计算化学软件。",
      },
      {
        title: "Atomistic Software",
        href: "https://atomistic.software/#/table",
        description: "Searchable table of atomistic modeling software.",
        zhDescription: "可检索的原子尺度建模软件列表。",
      },
    ],
  },
  {
    title: "Materials Databases and Benchmarking",
    zhTitle: "材料数据库与基准测试",
    resources: [
      {
        title: "Materials Project",
        href: "https://next-gen.materialsproject.org/",
        description: "Materials data, structures, and computational property records.",
        zhDescription: "材料数据、结构和计算性质数据库。",
      },
      {
        title: "Matbench Discovery",
        href: "https://matbench-discovery.materialsproject.org/",
        description:
          "A benchmark for machine-learning models in materials discovery.",
        zhDescription: "面向材料发现机器学习模型的基准测试。",
      },
    ],
  },
  {
    title: "Machine-Learned Atomistic Modeling and AI for Science",
    zhTitle: "机器学习原子尺度建模与 AI for Science",
    resources: [
      {
        title: "DeepModeling",
        href: "https://deepmodeling.com/",
        description:
          "Open-source tools for machine-learning-assisted molecular modeling.",
        zhDescription: "面向机器学习分子建模的开源工具生态。",
      },
      {
        title: "DeePMD-kit",
        href: "https://docs.deepmodeling.com/projects/deepmd/en/master/index.html",
        description: "Deep-potential model training and molecular dynamics.",
        zhDescription: "深度势能模型训练和分子动力学模拟工具。",
      },
      {
        title: "AI for Science Square",
        href: "https://www.aissquare.com/",
        description: "AI-for-science platform and workflow resources.",
        zhDescription: "AI for Science 平台与工作流资源。",
      },
    ],
  },
  {
    title: "Visualization and Trajectory Analysis",
    zhTitle: "可视化与轨迹分析",
    resources: [
      {
        title: "OVITO",
        href: "https://docs.ovito.org/python/index.html",
        description: "Python interface for atomistic visualization and analysis.",
        zhDescription: "原子尺度结构可视化与分析的 Python 接口。",
      },
      {
        title: "VMD",
        href: "https://www.ks.uiuc.edu/Research/vmd/",
        description: "Molecular visualization and trajectory analysis.",
        zhDescription: "分子可视化与轨迹分析软件。",
      },
    ],
  },
  {
    title: "Continuum and Multiscale Simulation",
    zhTitle: "连续介质与多尺度模拟",
    resources: [
      {
        title: "Basilisk",
        href: "https://basilisk.fr/",
        description: "Tools for computational fluid dynamics and interfacial flows.",
        zhDescription: "用于计算流体力学和界面流动的工具。",
      },
    ],
  },
  {
    title: "Coding and Local Development Assistance",
    zhTitle: "代码与本地开发辅助",
    resources: [
      {
        title: "OpenAI Codex",
        href: "https://openai.com/codex/",
        description: "Coding assistant for local development workflows.",
        zhDescription: "面向本地开发工作流的代码辅助工具。",
      },
    ],
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
    zhTitle: "空气-水与油-水界面的水自解离离子",
    description: "Deep-potential models, enhanced sampling, trajectories, and analysis tools.",
    zhDescription: "深度势能模型、增强采样、轨迹数据和分析工具。",
    href: "https://github.com/Zhang-pchao/OilWaterInterface",
  },
  {
    topic: "Nanobubbles",
    title: "Ion-regulated nitrogen nanobubble dynamics",
    zhTitle: "离子调控氮气纳米气泡动力学",
    description:
      "Simulation inputs and analysis for acidic, neutral, alkaline, and saline environments, including bulk nanobubble coarsening and Ostwald ripening.",
    zhDescription:
      "覆盖酸性、中性、碱性和盐溶液环境，以及体相纳米气泡粗化与 Ostwald 熟化的模拟输入和分析。",
    href: "https://github.com/Zhang-pchao/N2BubbleIon",
  },
  {
    topic: "Reactive chemistry",
    title: "Glycine tautomerism in water and electric fields",
    zhTitle: "水和电场中的甘氨酸互变异构",
    description: "Voronoi collective variables, trained models, and free-energy workflows.",
    zhDescription: "Voronoi 集体变量、训练模型和自由能计算工作流。",
    href: "https://github.com/Zhang-pchao/research/tree/main/GlycineEfield",
  },
  {
    topic: "Solid–water interfaces",
    title: "Nanobubble evolution near anatase (101)",
    zhTitle: "锐钛矿 (101)-水界面附近的纳米气泡演化",
    description: "OPES-DPMD inputs and analysis across interfacial ionic microenvironments.",
    zhDescription: "不同界面离子微环境下的 OPES-DPMD 输入与分析。",
    href: "https://github.com/Zhang-pchao/research/tree/main/OPES-DPMD-Bubble-TiO2",
  },
];

export const outreachLinks = [
  {
    title: "Ion-modulated Ostwald ripening of nitrogen nanobubble pairs",
    zhTitle: "离子调控氮气纳米气泡对的 Ostwald 熟化",
    href: "https://zhuanlan.zhihu.com/p/2063315948661108791",
    description:
      "Zhihu note introducing the JACS study of ion-modulated Ostwald ripening in nitrogen nanobubble pairs, including the rate order acidic > alkaline ≈ pure water > saline and the interfacial role of ion hydration and hydrogen-bond restructuring.",
    zhDescription:
      "知乎文章：介绍离子如何通过重排界面水、改变氢键网络和形成特定离子水合结构，调控氮气纳米气泡对的 Ostwald 熟化；熟化速率为酸性溶液 > 碱性溶液 ≈ 纯水 > 盐溶液，并指出 NaCl 界面离子水合结构形成阻碍气体迁移的微观屏障。",
  },
  {
    title: "DeePMD study of nitrogen nanobubble dynamics",
    zhTitle: "DeePMD 探究体相氮气纳米气泡演化",
    href: "https://mp.weixin.qq.com/s/ZiB_C1laE76r4SwGh6_hHQ",
    description: "WeChat feature on the JACS work using DeePMD to study ion-regulated nitrogen nanobubble dynamics.",
    zhDescription: "微信推送：介绍 JACS 工作中如何用 DeePMD 研究离子调控的体相氮气纳米气泡动态演化。",
  },
  {
    title: "DeePKS and ABACUS study of proton transfer in solution",
    zhTitle: "DeePKS+ABACUS 研究溶液中的质子转移",
    href: "https://mp.weixin.qq.com/s/qIgB2yBWz_ABVNwwTsz4SQ",
    description: "WeChat feature on combining deep-potential models, DeePKS, and ABACUS for proton-transfer simulations in solution.",
    zhDescription: "微信推送：介绍深度势能模型、DeePKS 和 ABACUS 结合研究溶液中质子转移过程。",
  },
  {
    title: "Electric-field and interface effects on competitive reactions",
    zhTitle: "电场与界面对竞争反应机制的调控",
    href: "https://www.cce.tsinghua.edu.cn/info/1012/4070.htm",
    description: "Tsinghua CCE research news on deep-potential simulations of solvated glycine under electric-field and interface effects.",
    zhDescription: "清华大学燃烧能源中心报道：通过深度势能分子动力学研究电场和界面对溶液中甘氨酸竞争反应机制的影响。",
  },
  {
    title: "Video report: glycine tautomerism in solution",
    zhTitle: "报告视频：溶液中甘氨酸互变异构",
    href: "https://www.bilibili.com/video/BV1D2b5zEEYx/",
    description: "Bilibili video report on electric-field and interface modulation of glycine tautomerism in solution.",
    zhDescription: "Bilibili 报告视频：电场与界面调控溶液中甘氨酸互变异构反应。",
  },
  {
    title: "Interface and ion environments control TiO₂-water nanobubbles",
    zhTitle: "界面与离子环境共同控制 TiO₂–水体系中的纳米气泡",
    href: "https://zhuanlan.zhihu.com/p/2032423240954541351",
    description: "Zhihu note on how surface chemistry, ion distributions, and interfacial charge jointly control nanobubble stability in TiO₂-water systems.",
    zhDescription: "知乎笔记：说明 TiO₂–水体系中表面化学改变离子环境，离子分布决定界面电荷，界面电荷进一步控制纳米气泡稳定性。",
  },
  {
    title: "Acidity and basicity of the air-water interface",
    zhTitle: "空气-水界面是中性、酸性，还是碱性？",
    href: "https://zhuanlan.zhihu.com/p/695737327",
    description: "Zhihu note explaining the long-standing debate on water self-ion preferences at the air-water interface.",
    zhDescription: "知乎笔记：解释水自离子界面偏好的长期争议，提出 H₃O⁺ 与 OH⁻ 在不同深度和浓度形成双分子层分布。",
  },
  {
    title: "Water self-ion preferences at air-water and oil-water interfaces",
    zhTitle: "增强采样 DPMD 揭示空气（油）-水界面水自离子的倾向",
    href: "https://zhuanlan.zhihu.com/p/20844844357",
    description: "Zhihu note comparing self-ion distributions at air-water and oil-water interfaces from enhanced-sampling DPMD.",
    zhDescription: "知乎笔记：比较空气-水和油-水界面的水自离子分布，说明油-水界面电荷分布与 OH⁻ 富集、H₃O⁺ 排斥之间的联系。",
  },
  {
    title: "H⁺ and OH⁻ regulate nitrogen nanobubble dynamics",
    zhTitle: "H⁺ 和 OH⁻ 调控体相纳米气泡的动态演化",
    href: "https://zhuanlan.zhihu.com/p/705998273",
    description: "Zhihu note on DPMD simulations and theoretical analysis of nitrogen nanobubbles under acidic and alkaline conditions.",
    zhDescription: "知乎笔记：用 DPMD 模拟和理论分析说明酸性条件促进 N₂ 纳米气泡溶解，而碱性条件下 OH⁻ 富集可能减缓气泡溶解。",
  },
  {
    title: "DPMD and enhanced sampling for glycine proton transfer",
    zhTitle: "DPMD+增强采样：溶液中甘氨酸异构化与质子转移",
    href: "https://zhuanlan.zhihu.com/p/695839138",
    description: "Zhihu note on glycine isomerization and proton-transfer simulations with DPMD and enhanced sampling.",
    zhDescription: "知乎笔记：介绍甘氨酸从中性形式转变为两性离子形式的三条路径，包括分子内质子转移以及 H₃O⁺/OH⁻ 参与的分子间质子转移。",
  },
];

export const publications = [
  {
    year: "2026",
    journal: "J. Am. Chem. Soc.",
    title: "Ion-Modulated Ostwald Ripening Dynamics of Nitrogen Nanobubble Pairs",
    authors: "Xiangdang Guo, Pengchao Zhang*, Chao Sun*, and Xuefei Xu*",
    details:
      "Journal of the American Chemical Society 148(30), 32412–32425 (2026).",
    zhDetails:
      "Journal of the American Chemical Society 148(30), 32412–32425（2026）。",
    doi: "https://doi.org/10.1021/jacs.6c08865",
    pdf: "/papers/jacs-2026-ion-modulated-ostwald-ripening.pdf",
    freeAccess: "https://pubs.acs.org/articlesonrequest/AOR-UGINE9JW5B5CQ4Z9HAXS",
    toc: "/assets/toc/jacs-2026-ion-modulated-ostwald-ripening.webp",
    featured: true,
  },
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
    toc: "/assets/toc/jmca-2026-solvent-effect-nrr.webp",
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
    toc: "/assets/toc/renewable-energy-2019-shrimp-shell-pyrolysis.webp",
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
    title: "Shuimu Tsinghua Scholar, Tsinghua University",
  },
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
