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
    "A general PLUMED implementation for proton-transfer systems whose donor, acceptor, or ionic identity changes during a trajectory. This guide starts from the shared soft assignment, then shows how to construct and interpret glycine tautomerism, bulk-water autoionization, and interfacial ion-location coordinates with the current API.",
  zhSummary:
    "面向质子供体、受体或离子身份随轨迹改变的反应体系。本指南从共用的平滑归属出发，依次说明如何使用当前 API 构建并判读甘氨酸互变异构、体相水自解离和界面离子位置集体变量。",
  reviewedCommit: "df7b675695411a85cc0d95bc68d3b272f0f35fb4",
  links: [
    {
      label: "Source",
      zhLabel: "源码",
      href: "https://github.com/Zhang-pchao/plumed2/blob/performance/reactive-voronoi-scaling/src/colvar/ReactiveVoronoi.cpp",
    },
    {
      label: "Action documentation",
      zhLabel: "Action 文档",
      href: "https://github.com/Zhang-pchao/plumed2/blob/performance/reactive-voronoi-scaling/src/colvar/ReactiveVoronoi.cpp#L739",
    },
  ],
  regtestHref:
    "https://github.com/Zhang-pchao/plumed2/tree/performance/reactive-voronoi-scaling/regtest/basic/rt-reactive-voronoi",
  principleSteps: [
    {
      text: "Choose CENTERS from atoms that can receive a transferable atom, commonly O or N in proton-transfer systems.",
      zhText: "从可能接收可转移原子的原子中定义 CENTERS；在质子转移体系中通常是 O 或 N。",
    },
    {
      text: "Put only transferable atoms in ASSIGNED. Each one is distributed continuously across every CENTER by a distance softmax.",
      zhText: "ASSIGNED 只包含可转移原子；每个原子通过基于距离的 softmax 在全部 CENTER 之间连续分配。",
    },
    {
      text: "Declare the intended occupancy of every CENTER in REFERENCE, in exactly the same order as CENTERS.",
      zhText: "在 REFERENCE 中按 CENTERS 的同一顺序，明确写出每个 CENTER 的目标占据数。",
    },
    {
      text: "Reduce the same occupancy defects into activity, separation, or position only after checking representative neutral, transition, product, and multi-defect frames.",
      zhText: "先检查中性态、过渡态、产物态和多缺陷代表构型，再把同一组占据数缺陷约化为活性、分离程度或空间位置。",
    },
  ],
  principleText:
    "For center i and assigned atom j, a normalized distance softmax defines the assignment weight. Summing the weights gives the smooth occupancy, and subtracting the declared reference gives the coordination defect. The defects follow proton identity through Grotthuss transfer without tagging one permanent H₃O⁺ or OH⁻ molecule. They are geometric reaction descriptors, not formal electronic charges.",
  zhPrincipleText:
    "对中心 i 和待归属原子 j，归一化的距离 softmax 给出归属权重；权重求和得到平滑占据数，再减去指定参考值得到配位缺陷。该缺陷可在 Grotthuss 质子转移中追踪不断变化的离子身份，无需指定某个永久的 H₃O⁺ 或 OH⁻ 分子。它是几何反应描述符，不等同于严格的电子电荷。",
  installText:
    "The three Actions belong to PLUMED's default colvar module. Once they are included in your PLUMED installation, use them directly without a LOAD line. Until they enter a released version, a runtime plugin remains an optional pre-release testing path.",
  zhInstallText:
    "三个 Action 属于 PLUMED 默认的 colvar 模块。若当前 PLUMED 安装已经包含它们，可直接使用而无需 LOAD；在进入正式发布版前，运行时插件仅作为可选的预发布测试路径。",
  runtimeInstall: `# Installed PLUMED: use the Actions directly; no LOAD line is needed.

# Optional pre-release plugin test
curl -L -o ReactiveVoronoi.cpp \\
  https://raw.githubusercontent.com/Zhang-pchao/plumed2/performance/reactive-voronoi-scaling/src/colvar/ReactiveVoronoi.cpp
plumed mklib ReactiveVoronoi.cpp
# Add LOAD FILE=./ReactiveVoronoi.so only to plugin-test inputs.`,
  driverTest: `plumed driver \\
  --plumed plumed.dat \\
  --ixyz trajectory.xyz \\
  --box 3.0,3.0,3.0`,
  installCaution:
    "For installed use, verify that the MD engine and plumed driver load the same PLUMED kernel. For the optional plugin fallback, compile with that executable, compiler, and ABI, and rebuild after any of them changes. The CVs do not require OPES, but the later bias examples need the optional opes module. A successful driver run proves parsing and evaluation on the supplied frames; it does not yet validate forces, a bias, or a production setup.",
  zhInstallCaution:
    "正式安装使用时，应确认 MD 引擎与 plumed driver 加载同一个 PLUMED kernel。可选插件路径必须使用该可执行文件对应的编译器和 ABI 构建，任一项变化后都应重新编译。CV 本身不依赖 OPES，但后文偏置示例需要可选的 opes 模块。driver 成功只说明输入能够解析并在给定构型上求值，尚不能证明力、偏置或生产参数正确。",
  actions: [
    {
      name: "VORONOI_COORDINATION",
      equation: "coordination",
      purpose: "How much reactive coordination-defect activity is present?",
      zhPurpose: "体系中存在多少反应性配位缺陷？",
      description:
        "Use POWER=1 when the sign of a protonation coordinate must be preserved, as in glycine sₚ. Use POWER=2 for nonnegative defect activity, as in the water self-ion number sₐ. SIGN and SELECT restrict which defects contribute; COEFFICIENTS distinguishes chemically different centers.",
      zhDescription:
        "需要保留质子化坐标的正负号时使用 POWER=1，例如甘氨酸 sₚ；描述非负缺陷活性时使用 POWER=2，例如水自解离离子数 sₐ。SIGN 与 SELECT 限定参与计算的缺陷，COEFFICIENTS 用于区分不同化学中心。",
    },
    {
      name: "VORONOI_DISTANCE",
      equation: "distance",
      purpose: "How far apart are correlated coordination defects?",
      zhPurpose: "相关配位缺陷彼此分离多远？",
      description:
        "Use GROUP1 alone for unique pairs within a pool, such as H₃O⁺–OH⁻ separation among water O atoms. Add GROUP2 for cross terms, such as water–glycine distances. The result naturally goes to zero when the defects disappear and is therefore not a normalized geometric distance.",
      zhDescription:
        "只设置 GROUP1 可计算同一候选池内的唯一配对，例如水 O 中 H₃O⁺–OH⁻ 的分离；再添加 GROUP2 可构建跨组项，例如水–甘氨酸距离。缺陷消失时输出自然趋近零，因此它不是归一化的几何距离。",
    },
    {
      name: "VORONOI_POSITION",
      equation: "position",
      purpose: "Where is a selected defect in a declared Cartesian frame?",
      zhPurpose: "指定缺陷在明确的笛卡尔参考系中位于何处？",
      description:
        "Use a physical AXIS and fixed ORIGIN to replace legacy atom-index moments. SIGN separates H₃O⁺ and OH⁻, ABSOLUTE folds two equivalent slab sides, and NORMALIZE returns a conditional mean position only when the selected defect is guaranteed to remain present.",
      zhDescription:
        "以真实 AXIS 和固定 ORIGIN 取代旧代码中的原子序号矩。SIGN 区分 H₃O⁺ 与 OH⁻，ABSOLUTE 可折叠 slab 两侧的等价界面；只有在指定缺陷始终存在时，才可用 NORMALIZE 得到条件平均位置。",
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
      description:
        "Positive assignment sharpness in inverse PLUMED length units: larger values approach a hard nearest-center assignment, while smaller values distribute weight more smoothly among nearby centers.",
      zhDescription:
        "正的归属陡峭度，单位为 PLUMED 长度单位的倒数：数值越大越接近最近中心的硬归属，数值越小则越平滑地在邻近中心之间分配权重。",
    },
    {
      keyword: "REFERENCE",
      actions: "All",
      zhActions: "全部",
      description:
        "The declared baseline occupancy νᵢ: one value broadcasts to every CENTER, or a vector follows CENTERS in exactly the same order.",
      zhDescription:
        "人为定义的基准占据数 νᵢ：一个数会广播到全部 CENTER；向量则必须与 CENTERS 保持完全相同的顺序。",
    },
    {
      keyword: "NLIST · NL_CUTOFF · NL_SKIN · NL_STRIDE",
      actions: "All",
      zhActions: "全部",
      description:
        "NLIST is off by default. NL_CUTOFF and NL_STRIDE are required when it is enabled. Optional NL_SKIN buffers the candidate list when NL_STRIDE>1; converge values and forces against exact mode before using any accelerated setting.",
      zhDescription:
        "NLIST 默认关闭；启用后必须给出 NL_CUTOFF 与 NL_STRIDE。NL_STRIDE>1 时可用可选的 NL_SKIN 为候选列表增加缓冲；任何加速配置都必须先以精确模式为基准收敛 CV 数值和力。",
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
      description:
        "NOPBC uses direct coordinate differences and therefore requires a consistent unwrapped image convention. SERIAL repeats work per MPI rank for debugging only.",
      zhDescription:
        "NOPBC 使用直接坐标差，因此要求输入坐标采用一致的展开镜像约定；SERIAL 仅用于调试，会在各 MPI rank 重复计算。",
    },
  ],
  referenceTitle: "Choosing REFERENCE from the baseline chemical state",
  zhReferenceTitle: "如何从基准化学态设置 REFERENCE",
  referenceText:
    "REFERENCE supplies νᵢ in qᵢ=nᵢ−νᵢ. It is not inferred from element names or bonding: the user declares the intended occupancy of the transferable ASSIGNED atoms around every CENTER. One number is concise only when all centers share the same baseline occupancy; chemically different centers require one value per center.",
  zhReferenceText:
    "REFERENCE 给出 qᵢ=nᵢ−νᵢ 中的 νᵢ。程序不会根据元素名称或成键关系自动推断它；用户需要声明基准化学态下，每个 CENTER 周围应归属多少个可转移的 ASSIGNED 原子。只有当所有中心具有相同基准占据数时，单个数值才适合广播；化学环境不同的中心必须逐一给值。",
  referenceGuidance: [
    {
      text: "Choose a chemically explicit baseline state, then count only atoms included in ASSIGNED. Hydrogens that are present in the coordinate file but excluded from ASSIGNED, such as glycine C–H atoms here, do not contribute to nᵢ or REFERENCE.",
      zhText:
        "先明确基准化学态，再只统计纳入 ASSIGNED 的原子。坐标文件中存在但未纳入 ASSIGNED 的氢，例如本例甘氨酸的 C–H，不参与 nᵢ，也不计入 REFERENCE。",
    },
    {
      text: "REFERENCE=2 broadcasts 2 to every CENTER. Thus two water O centers use the internal vector (2,2), and 58 water O centers use 58 copies of 2; the input is short because the sites are chemically equivalent, not because only one center exists.",
      zhText:
        "REFERENCE=2 会把 2 广播到每个 CENTER。因此两个水 O 的内部向量是 (2,2)，58 个水 O 则得到 58 个 2；写法简短是因为这些位点化学等价，并不是因为体系只有一个中心。",
    },
    {
      text: "For mixed sites, provide one value per CENTER in CENTERS order and reorder the vector whenever CENTERS is reordered. Fractional values are allowed when the model deliberately shares a baseline occupancy over symmetry-equivalent sites.",
      zhText:
        "对混合位点，应按 CENTERS 的顺序为每个中心给出一个数；只要 CENTERS 重排，REFERENCE 也必须同步重排。当模型需要在对称等价位点之间共享基准占据时，可以使用分数。",
    },
    {
      text: "As a baseline sanity check, Σᵢνᵢ should equal Nassigned when the intended reference state has zero total coordination defect. If not, Σᵢqᵢ has a fixed offset; that may be intentional, but it must be stated and validated.",
      zhText:
        "基准检查中，若目标参考态的总配位缺陷应为零，则 Σᵢνᵢ 应等于 Nassigned；否则 Σᵢqᵢ 会带有固定偏移。该偏移可以是有意设计，但必须明确说明并验证。",
    },
  ],
  kappaTitle: "Choosing KAPPA for monitoring and sampling",
  zhKappaTitle: "如何为监测与采样选择 KAPPA",
  kappaText:
    "KAPPA controls the tradeoff between chemical-state resolution and CV smoothness. It is a model parameter to validate on the target system, not a universal constant to copy from an example.",
  zhKappaText:
    "KAPPA 控制化学状态分辨率与 CV 平滑性之间的取舍。它是需要针对目标体系验证的模型参数，并不是可以从示例中直接照搬的通用常数。",
  kappaGuidance: [
    {
      text: "Monitoring and structural diagnosis: a larger KAPPA makes one nearby CENTER dominate, so the output approaches a discrete proton assignment. This is useful when printing sharper state labels or locating an established defect, but host switching can become steeper and noisier.",
      zhText:
        "监测与结构诊断：较大的 KAPPA 使最近的 CENTER 占据主导，输出更接近离散的质子归属，适合打印较清晰的状态标签或定位已经形成的缺陷；代价是载体切换会更陡峭，也可能更噪。",
    },
    {
      text: "Biased sampling: a smaller KAPPA shares the assignment over nearby CENTERS and usually produces smoother CV and bias-force changes through proton transfer. If it is too small, however, neutral and ionized basins can become blurred.",
      zhText:
        "偏置采样：较小的 KAPPA 会在邻近 CENTER 之间分摊归属，通常可使质子转移过程中的 CV 与偏置力变化更平滑；但若过小，中性态与离子态盆地会被过度模糊。",
    },
    {
      text: "Practical choice: scan several values on neutral, transition, product, and host-switching frames. Confirm state separation, continuity, and analytical derivatives before biasing. The paper examples use KAPPA=5 for smoother sampling and KAPPA=100 for sharper structural diagnosis, but these values are system-specific.",
      zhText:
        "实际选择：在中性态、过渡态、产物态和载体切换构型上扫描多个数值；施加偏置前检查状态区分、连续性与解析导数。论文示例使用 KAPPA=5 进行较平滑采样、使用 KAPPA=100 做较尖锐的结构诊断，但这些数值只适用于对应体系。",
    },
  ],
  nlistTitle: "Choosing NL_CUTOFF, NL_SKIN, and NL_STRIDE",
  zhNlistTitle: "如何选择 NL_CUTOFF、NL_SKIN 与 NL_STRIDE",
  nlistText:
    "Omitting NLIST uses the exact full-pair definition; there is no hidden default cutoff. With NLIST, NL_CUTOFF is the true CENTER–ASSIGNED evaluation cutoff in the active PLUMED length units, NL_STRIDE controls scheduled list rebuilds, and optional NL_SKIN adds a Verlet buffer to the candidate list when NL_STRIDE is greater than one. NLIST changes only assignment candidates; it never removes GROUP1/GROUP2 center-center reduction pairs. None of these distances is a bond cutoff or a transferable water constant.",
  zhNlistText:
    "不写 NLIST 时使用精确的全配对定义，并不存在隐藏的默认截断距离。启用 NLIST 后，NL_CUTOFF 是当前 PLUMED 长度单位下真正参与求值的 CENTER–ASSIGNED 截断距离，NL_STRIDE 控制计划重建列表的步长；当 NL_STRIDE 大于 1 时，可选的 NL_SKIN 为候选列表增加 Verlet 缓冲。NLIST 只改变归属候选项，不会删除 GROUP1/GROUP2 的中心间约化配对。这些距离都不是成键截断，也不是可直接迁移的水体系常数。",
  nlistEstimateText:
    "For an initial screening estimate, let d_min be the nearest-center distance and R=NL_CUTOFF. Requiring the relative score at the cutoff to fall below a chosen tolerance ε gives the relation below. Smaller KAPPA spreads assignment weight farther and therefore usually requires a larger R. This estimate does not replace a convergence test because several omitted centers and force derivatives can accumulate error.",
  zhNlistEstimateText:
    "初步估算时，可令 d_min 为最近 CENTER 的距离、R=NL_CUTOFF，并要求截断边界处的相对权重低于选定容差 ε，得到下式。较小的 KAPPA 会把归属权重分布得更远，因此通常需要更大的 R。由于多个被截断 CENTER 及力导数的误差可能累积，这一估算不能代替收敛测试。",
  nlistGuidance: [
    {
      text: "Build the reference with no NLIST and collect representative reactant, transition, product, host-switching, and distorted frames. For a non-water system, these frames—not chemical labels—define which CENTER–ASSIGNED distances can matter.",
      zhText:
        "先用不含 NLIST 的输入建立精确基准，并收集反应物、过渡态、产物、载体切换及畸变构型。对非水体系，真正决定截断范围的是这些构型中可能重要的 CENTER–ASSIGNED 距离，而不是体系的化学名称。",
    },
    {
      text: "Set NL_STRIDE=1 and increase NL_CUTOFF over the labeled frames until both CV values and coordinate/box derivatives agree with exact mode within the accuracy required by the intended analysis or bias. Every ASSIGNED atom must retain at least one CENTER; otherwise the Action stops.",
      zhText:
        "先设 NL_STRIDE=1，在已标注构型上逐步增大 NL_CUTOFF，直到 CV 数值以及坐标/盒子导数都在目标分析或偏置所需精度内与精确模式一致。每个 ASSIGNED 原子必须至少保留一个 CENTER，否则 Action 会停止。",
    },
    {
      text: "After converging NL_CUTOFF with NL_STRIDE=1, test NL_STRIDE>1 together with an explicit NL_SKIN. Candidates are retained out to NL_CUTOFF+NL_SKIN but evaluated at the true NL_CUTOFF; the list rebuilds early if an included atom moves by more than half the skin or if the periodic box changes.",
      zhText:
        "用 NL_STRIDE=1 收敛 NL_CUTOFF 后，再把 NL_STRIDE>1 与显式 NL_SKIN 配合测试。候选配对保留到 NL_CUTOFF+NL_SKIN，但仍在真实 NL_CUTOFF 内求值；若参与原子移动超过半个 skin，或周期盒发生变化，列表会提前重建。",
    },
    {
      text: "Benchmark skin and stride together: a larger skin reduces rebuilds but retains more candidates. Replica-exchange runs require NL_STRIDE to divide the exchange stride. Report NL_CUTOFF, NL_SKIN, NL_STRIDE, convergence tolerances, and the exact-mode comparison.",
      zhText:
        "NL_SKIN 与 NL_STRIDE 应联合测试：更大的 skin 可减少重建次数，但会保留更多候选配对。副本交换计算要求 NL_STRIDE 能整除交换步长。最终应报告 NL_CUTOFF、NL_SKIN、NL_STRIDE、收敛容差及与精确模式的比较。",
    },
    {
      text: "Prefer exact mode for small or moderate systems and for derivative validation. NLIST truncates and renormalizes the candidate set, so it remains an approximation even when the buffered membership update is displacement-safe.",
      zhText:
        "小型或中等体系以及导数验证应优先使用精确模式。NLIST 会截断并重新归一化候选集合，因此即使缓冲后的成员更新满足位移安全条件，它仍然属于近似算法。",
    },
  ],
  nlistExampleText:
    "This input shows the validation sequence, using the atom numbers of the downloadable two-water fixture below. The 2.4 Å cutoff and 0.6 Å skin were converged only for the tested water setup and are not defaults. Compare exact and trial values and derivatives first; retain only the accelerated Action in production after cutoff, skin, and stride have all passed validation.",
  zhNlistExampleText:
    "下面的输入使用后文可下载两水构型的原子编号展示验证顺序。2.4 Å 截断与 0.6 Å skin 只在本次水体系中完成了收敛验证，并不是默认参数。应先比较 exact 与 trial 的数值和导数；只有截断、skin 与步长全部通过验证后，生产计算才只保留加速 Action。",
  nlistExample: `UNITS LENGTH=A

WaterO: GROUP ATOMS=1,4
WaterH: GROUP ATOMS=2,3,5,6

# 1. Exact reference
sa_exact: VORONOI_COORDINATION CENTERS=WaterO ASSIGNED=WaterH KAPPA=50 REFERENCE=2 POWER=2

# 2. Converge NL_CUTOFF with a rebuild every step
sa_trial: VORONOI_COORDINATION CENTERS=WaterO ASSIGNED=WaterH KAPPA=50 REFERENCE=2 POWER=2 NLIST NL_CUTOFF=2.4 NL_STRIDE=1

# 3. After validation, amortize rebuilds with a displacement-safe skin
sa_fast: VORONOI_COORDINATION CENTERS=WaterO ASSIGNED=WaterH KAPPA=50 REFERENCE=2 POWER=2 NLIST NL_CUTOFF=2.4 NL_SKIN=0.6 NL_STRIDE=10

PRINT ARG=sa_exact,sa_trial,sa_fast FILE=COLVAR STRIDE=1
DUMPDERIVATIVES ARG=sa_exact,sa_trial,sa_fast FILE=DERIVATIVES STRIDE=1`,
  minimalStructure: {
    filename: "two-water.xyz",
    href: "/assets/reactive-voronoi/examples/two-water.xyz",
    text:
      "This standard XYZ contains two complete neutral water molecules in O–H–H order. It is an atom-index and REFERENCE teaching fixture, not an autoionization transition state. XYZ atom numbers follow the six coordinate lines after the two-line header.",
    zhText:
      "这个标准 XYZ 按 O–H–H 顺序包含两个完整的中性水分子，用于说明原子编号与 REFERENCE，而不是水自解离过渡态。XYZ 原子编号对应两行文件头之后六行坐标的先后顺序。",
    xyz: `6
Two neutral water molecules; atom order O H H O H H; cubic box 12.028 A
O 10.338000 8.941000 3.203000
H 9.920000 9.817000 3.189000
H 9.608000 8.312000 3.405000
O 6.467000 1.712000 3.340000
H 5.935000 1.117000 2.786000
H 5.900000 1.948000 4.101000`,
    mappings: [
      {
        atoms: "1, 4",
        selection: "WaterO · CENTERS",
        zhSelection: "WaterO · 中心",
        reference: "2 → (2, 2)",
      },
      {
        atoms: "2, 3, 5, 6",
        selection: "WaterH · ASSIGNED",
        zhSelection: "WaterH · 待归属原子",
        reference: "—",
      },
    ],
  },
  minimalExample: `UNITS LENGTH=A
WaterO: GROUP ATOMS=1,4
WaterH: GROUP ATOMS=2,3,5,6

sa: VORONOI_COORDINATION CENTERS=WaterO ASSIGNED=WaterH KAPPA=5 REFERENCE=2 POWER=2
st: VORONOI_DISTANCE CENTERS=WaterO ASSIGNED=WaterH KAPPA=5 REFERENCE=2 GROUP1=WaterO

PRINT ARG=sa,st FILE=COLVAR STRIDE=1
DUMPDERIVATIVES ARG=sa,st FILE=DERIVATIVES STRIDE=1`,
  exampleText:
    "Start with this exact full-pair monitor on a few labeled neutral, contact-pair, separated-pair, and proton-transfer frames. Replace the atom numbers with the topology actually read by PLUMED. Add a bias or NLIST only after values and analytical derivatives have been checked.",
  zhExampleText:
    "先在少量已标注的中性态、接触离子对、分离离子对和质子转移构型上，用这一精确全配对输入进行监测。原子编号必须替换为 PLUMED 实际读取拓扑中的编号；只有在数值与解析导数核验后，才能加入偏置或 NLIST。",
  cases: [
    {
      id: "glycine",
      number: "01",
      title: "Solvated glycine: distinguish four protonation states and three pathways",
      zhTitle: "溶剂化甘氨酸：区分四种质子化状态与三条路径",
      question:
        "The scientific task is not simply to count ions. The coordinate pair must distinguish neutral [N], zwitterionic [Z], anionic glycine–H₃O⁺, and cationic glycine–OH⁻, while allowing both intramolecular and water-mediated proton transfer.",
      zhQuestion:
        "这里的科学任务不只是计数离子，而是用一对坐标区分中性型 [N]、两性离子型 [Z]、阴离子甘氨酸–H₃O⁺ 和阳离子甘氨酸–OH⁻，同时容纳分子内与水介导的质子转移。",
      setup:
        "Use every water O together with glycine N and the two carboxyl O atoms as CENTERS; use all transferable water, N–H, and carboxyl O–H atoms as ASSIGNED. The compact structure below starts from zwitterionic [Z] glycine and retains one complete water near the ammonium group and one near the carboxylate group. The C atoms and nontransferable C–H atoms remain in the file so that the molecular topology is readable.",
      zhSetup:
        "CENTERS 包含全部水 O、甘氨酸 N 和两个羧基 O；ASSIGNED 包含可转移的水 H、N–H 与羧基 O–H。下方紧凑结构从两性离子型 [Z] 甘氨酸出发，分别保留一个靠近铵基和一个靠近羧酸根的完整水分子。文件中同时保留 C 原子与不可转移的 C–H，便于读者核对分子拓扑。",
      referenceText:
        "Centers expands to atoms (1,4,7,15,16), so the five REFERENCE entries map to (water O, water O, glycine N, glycine O, glycine O). REFERENCE defines the neutral [N] chemical origin even though this coordinate fixture is zwitterionic [Z]: two water values are 2, the N value is 2, and the single neutral-state carboxyl proton is shared as 0.5+0.5 over the symmetry-related O labels. In an ideal [Z] frame the corresponding defects are therefore approximately (0,0,+1,−0.5,−0.5). The five references sum to 7, matching the four water H and three transferable glycine H atoms in AllH, so the total defect remains zero. Do not copy the fractional partition to nonequivalent sites.",
      zhReferenceText:
        "Centers 展开后依次为原子 (1,4,7,15,16)，所以五个 REFERENCE 数值依次对应（水 O、水 O、甘氨酸 N、甘氨酸 O、甘氨酸 O）。虽然这个坐标示例是两性离子型 [Z]，REFERENCE 定义的却是中性型 [N] 化学原点：两个水 O 均为 2，N 为 2，而中性型羧基的一个质子在对称相关的两个 O 标签上以 0.5+0.5 共享。因此理想 [Z] 构型中的缺陷约为 (0,0,+1,−0.5,−0.5)。五个参考值之和为 7，恰好等于 AllH 中四个水 H 与三个甘氨酸可转移 H，所以总缺陷仍为零。分数参考值不能照搬到不等价位点。",
      referenceRows: [
        {
          centers: "1, 4",
          site: "Water O",
          zhSite: "水 O",
          value: "2, 2",
          reason: "Two transferable H per neutral water O.",
          zhReason: "每个中性水 O 对应两个可转移 H。",
        },
        {
          centers: "7",
          site: "Glycine N",
          zhSite: "甘氨酸 N",
          value: "2",
          reason: "Neutral [N] reference: two N–H; the [Z] fixture has three, so the N-site defect is approximately +1.",
          zhReason: "中性型 [N] 参考态有两个 N–H；[Z] 示例中有三个，所以 N 位点缺陷约为 +1。",
        },
        {
          centers: "15, 16",
          site: "Equivalent carboxyl O pair",
          zhSite: "等价羧基 O 对",
          value: "0.5, 0.5",
          reason: "Neutral [N] reference: one O–H shared over two labels; [Z] has none, so each O-site defect is approximately −0.5.",
          zhReason: "中性型 [N] 参考态的一个 O–H 在两个标签间共享；[Z] 中无 O–H，所以每个 O 位点缺陷约为 −0.5。",
        },
      ],
      structure: {
        filename: "glycine-two-water.xyz",
        href: "/assets/reactive-voronoi/examples/glycine-two-water.xyz",
        text:
          "This translated and renumbered excerpt comes from an optimized 128-water zwitterionic geometry. It retains the closest complete water to glycine N and the closest complete water to a carboxyl O. It is provided to audit atom selections, the [Z] bonding pattern, and REFERENCE order; two waters alone cannot reproduce condensed-phase thermodynamics.",
        zhText:
          "这个平移并重新编号的片段取自优化后的 128 水两性离子构型，分别保留了距甘氨酸 N 最近的完整水分子和距某个羧基 O 最近的完整水分子。它用于核对原子选择、[Z] 成键模式与 REFERENCE 顺序；仅有两个水分子不能复现凝聚相热力学。",
        xyz: `16
Zwitterionic glycine plus two nearby waters; translated excerpt; source box 15.813 A
O 3.945000 2.472000 4.511000
H 3.345000 2.469000 3.734000
H 4.805000 2.138000 4.225000
O 7.315000 6.164000 8.804000
H 6.752000 6.903000 8.369000
H 7.769000 5.749000 8.066000
N 5.000000 5.000000 5.000000
H 4.729000 5.459000 4.128000
H 5.103000 3.991000 4.812000
H 4.277000 5.099000 5.704000
C 6.292000 5.507000 5.495000
H 6.878000 5.847000 4.638000
H 6.113000 6.345000 6.164000
C 7.053000 4.332000 6.192000
O 6.587000 3.199000 5.985000
O 8.155000 4.638000 6.756000`,
        mappings: [
          {
            atoms: "1, 4",
            selection: "WaterO · CENTERS",
            zhSelection: "WaterO · 中心",
            reference: "2, 2",
          },
          {
            atoms: "2, 3, 5, 6",
            selection: "WaterH · ASSIGNED",
            zhSelection: "WaterH · 待归属原子",
            reference: "—",
          },
          {
            atoms: "7",
            selection: "GlyN · CENTER",
            zhSelection: "GlyN · 中心",
            reference: "2",
          },
          {
            atoms: "8, 9, 10",
            selection: "GlyH · ASSIGNED",
            zhSelection: "GlyH · 待归属原子",
            reference: "—",
          },
          {
            atoms: "11–14",
            selection: "Glycine framework · not selected",
            zhSelection: "甘氨酸骨架 · 不参与选择",
            reference: "—",
          },
          {
            atoms: "15, 16",
            selection: "GlyO1, GlyO2 · CENTERS",
            zhSelection: "GlyO1、GlyO2 · 中心",
            reference: "0.5, 0.5",
          },
        ],
      },
      code: `UNITS LENGTH=A

# Atom order matches glycine-two-water.xyz
WaterO: GROUP ATOMS=1,4
WaterH: GROUP ATOMS=2,3,5,6
GlyN: GROUP ATOMS=7
GlyO1: GROUP ATOMS=15
GlyO2: GROUP ATOMS=16
GlyH: GROUP ATOMS=8,9,10
AllH: GROUP ATOMS=WaterH,GlyH
Centers: GROUP ATOMS=WaterO,GlyN,GlyO1,GlyO2

sp: VORONOI_COORDINATION ...
  CENTERS=Centers ASSIGNED=AllH KAPPA=5
  REFERENCE=2,2,2,0.5,0.5 POWER=1
  COEFFICIENTS=1,1,2,2,2
...

sd_water: VORONOI_DISTANCE ...
  CENTERS=Centers ASSIGNED=AllH KAPPA=5
  REFERENCE=2,2,2,0.5,0.5
  GROUP1=WaterO GROUP2=GlyN,GlyO1,GlyO2
...
sd_internal: VORONOI_DISTANCE ...
  CENTERS=Centers ASSIGNED=AllH KAPPA=5
  REFERENCE=2,2,2,0.5,0.5
  GROUP1=GlyN GROUP2=GlyO1,GlyO2
...
sd: COMBINE ARG=sd_water,sd_internal COEFFICIENTS=1,1 PERIODIC=NO

PRINT ARG=sp,sd_water,sd_internal,sd FILE=COLVAR STRIDE=1`,
      biasCode: `# Add only after unbiased and derivative checks
opes: OPES_METAD ARG=sp,sd TEMP=300 PACE=500 BARRIER=35`,
      biasText:
        "The published production workflow biased sₚ and s_d together. TEMP, PACE, BARRIER, kernel settings, walls, and restart controls are paper-specific simulation choices rather than defaults of the CV.",
      zhBiasText:
        "论文生产模拟同时偏置 sₚ 与 s_d。TEMP、PACE、BARRIER、核宽度、限制势和重启设置属于该论文体系的模拟选择，并不是这些 CV 的默认参数。",
      interpretation: [
        {
          text: "A full-pair PLUMED driver check of the downloadable [Z] fixture gives sp=0.0073, sd_water=0.0354 Å, sd_internal=2.9789 Å, and sd=3.0143 Å, consistent with the expected zwitterionic basin.",
          zhText: "对可下载 [Z] 构型进行全配对 PLUMED driver 检验，得到 sp=0.0073、sd_water=0.0354 Å、sd_internal=2.9789 Å 和 sd=3.0143 Å，与两性离子态相符。",
        },
        {
          text: "sₚ ≈ 0 contains [N] and [Z]; s_d separates them, with [N] near 0 Å and [Z] near 3 Å.",
          zhText: "sₚ ≈ 0 同时包含 [N] 与 [Z]；s_d 将两者分开，[N] 接近 0 Å，[Z] 接近 3 Å。",
        },
        {
          text: "sₚ ≈ −1 identifies anionic glycine with a compensating H₃O⁺; sₚ ≈ +1 identifies cationic glycine with a compensating OH⁻.",
          zhText: "sₚ ≈ −1 对应阴离子甘氨酸与补偿 H₃O⁺；sₚ ≈ +1 对应阳离子甘氨酸与补偿 OH⁻。",
        },
        {
          text: "An intramolecular [N]→[Z] path changes mainly along s_d near sₚ = 0. Water-mediated paths visit the negative or positive sₚ branches before returning to [Z].",
          zhText: "分子内 [N]→[Z] 路径主要在 sₚ = 0 附近沿 s_d 变化；水介导路径则先进入 sₚ 的负支或正支，再回到 [Z]。",
        },
      ],
      figure: "/assets/reactive-voronoi/glycine-cv-trajectory.png",
      figureAlt: "Unsmoothed glycine protonation and defect-separation collective variables over an 80 ps trajectory window.",
      zhFigureAlt: "甘氨酸质子化与缺陷分离集体变量在 80 ps 轨迹窗口内的未平滑演化。",
      figureCaption:
        "Representative 80 ps window from the paper-production enhanced-sampling trajectory, sampled every 0.1 ps without smoothing. The archived s05 and d05 columns evaluate the published sₚ and s_d definitions; the input above is their translation to the current generic Actions.",
      zhFigureCaption:
        "取自论文生产增强采样轨迹的代表性 80 ps 窗口，每 0.1 ps 抽样且不做平滑。归档输出列 s05 与 d05 计算论文中的 sₚ 和 s_d；上方输入是它们向当前通用 Action 的适配。",
      links: [
        {
          label: "Paper",
          zhLabel: "论文",
          href: "https://doi.org/10.1021/acs.jcim.4c00273",
        },
        {
          label: "Paper-specific reproduction archive",
          zhLabel: "论文专用复现归档",
          href: "https://github.com/Zhang-pchao/GlycineTautomerism/tree/main/Voronoi_collective_variables",
        },
      ],
    },
    {
      id: "water-autoionization",
      number: "02",
      title: "Bulk water: form an H₃O⁺/OH⁻ pair and resolve its separation",
      zhTitle: "体相水：形成 H₃O⁺/OH⁻ 离子对并解析其分离",
      question:
        "Water autoionization needs two complementary coordinates: defect activity detects whether self-ions exist, while defect-weighted separation distinguishes a contact pair from separated ions.",
      zhQuestion:
        "水自解离需要两个互补坐标：缺陷活性判断水自解离离子是否出现，缺陷加权距离再区分接触离子对与分离离子。",
      setup:
        "Use all water O atoms as CENTERS and all water H atoms as ASSIGNED. Because every neutral water O has the same baseline occupancy, REFERENCE=2 broadcasts one value to all 58 centers in the published topology. KAPPA=5 gives the smoother activity used for sampling; KAPPA=8 was used for the separation coordinate in the paper.",
      zhSetup:
        "将全部水 O 设为 CENTERS、全部水 H 设为 ASSIGNED。由于每个中性水 O 的基准占据数相同，REFERENCE=2 会把一个数广播到论文拓扑中的全部 58 个中心。采样中的平滑活性使用 KAPPA=5，论文中的分离坐标使用 KAPPA=8。",
      referenceText:
        "The one-number input is shorthand for a 58-entry vector (2,2,…,2), not a one-center calculation. Its sum is 116, matching the 116 ASSIGNED water H atoms in the neutral baseline. The downloadable two-water fixture in the minimal example uses the identical rule on two O centers: REFERENCE=2 becomes (2,2). A mixed solvent or reactive solute requires separate values whenever its centers do not share water's occupancy.",
      zhReferenceText:
        "单个数值只是 58 维向量 (2,2,…,2) 的简写，并不表示体系只有一个中心。其总和为 116，与中性基准态中的 116 个 ASSIGNED 水 H 相等。最小示例提供的两水坐标使用完全相同的规则：对两个 O 中心，REFERENCE=2 展开为 (2,2)。混合溶剂或反应性溶质中的中心若不具有水的占据数，就必须分别设置。",
      referenceRows: [
        {
          centers: "1–172:3 (58 O atoms)",
          site: "Water O",
          zhSite: "水 O",
          value: "2 → 58 copies",
          reason: "Two transferable H per neutral water O; Σᵢνᵢ=116=Nassigned.",
          zhReason: "每个中性水 O 对应两个可转移 H；Σᵢνᵢ=116=Nassigned。",
        },
      ],
      code: `UNITS LENGTH=A

WaterO: GROUP ATOMS=1-172:3
WaterH: GROUP ATOMS=2-173:3,3-174:3

sa: VORONOI_COORDINATION ...
  CENTERS=WaterO ASSIGNED=WaterH
  KAPPA=5 REFERENCE=2 POWER=2
...
st: VORONOI_DISTANCE ...
  CENTERS=WaterO ASSIGNED=WaterH
  KAPPA=8 REFERENCE=2 GROUP1=WaterO
...

# Resolve the narrow neutral basin while remaining continuous at st=1
st_log: CUSTOM ARG=st ...
  FUNC=log(x+0.03)*step(1-x)+(x-1+log(1.03))*step(x-1)
  PERIODIC=NO
...

PRINT ARG=sa,st,st_log FILE=COLVAR STRIDE=1`,
      biasCode: `# Add only after unbiased and derivative checks
opes: OPES_METAD ARG=st_log,sa TEMP=300 PACE=500 BARRIER=75`,
      biasText:
        "The paper used the transformed separation and self-ion activity together because raw s_t is compressed near the first proton transfer. The logarithmic regularizer and OPES settings should be revalidated if the water model, temperature, size, or target event changes.",
      zhBiasText:
        "论文同时使用变换后的分离坐标与水自解离离子活性，因为原始 s_t 在首次质子转移附近分辨率较低。若水模型、温度、体系尺寸或目标事件改变，必须重新验证对数正则项与 OPES 参数。",
      interpretation: [
        {
          text: "Neutral water gives sₐ ≈ 0 and s_t ≈ 0. One ideal, fully localized H₃O⁺/OH⁻ pair gives sₐ → 2; with the paper's smooth KAPPA=5 definition, the ionized basin is typically around sₐ ≈ 1.3.",
          zhText: "中性水对应 sₐ ≈ 0、s_t ≈ 0。理想且充分局域的一对 H₃O⁺/OH⁻ 使 sₐ → 2；采用论文中较平滑的 KAPPA=5 定义时，离子态盆地通常位于 sₐ ≈ 1.3。",
        },
        {
          text: "For a localized single pair, s_t approaches the H₃O⁺–OH⁻ separation. During defect formation it also contains the changing defect magnitude, so it is not a pure conditional distance.",
          zhText: "对于充分局域的单离子对，s_t 接近 H₃O⁺–OH⁻ 间距；在缺陷形成过程中，它还包含不断变化的缺陷强度，因此不是纯粹的条件距离。",
        },
        {
          text: "The transformed s′_t expands the narrow neutral basin: values near log(0.03) indicate neutral water, while positive values indicate established separation.",
          zhText: "变换后的 s′_t 展开狭窄的中性盆地：接近 log(0.03) 表示中性水，正值表示已经建立明显分离。",
        },
      ],
      figure: "/assets/reactive-voronoi/water-autoionization-cv-trajectory.png",
      figureAlt: "Unsmoothed water self-ion activity and ion-pair separation over a 40 ps autoionization trajectory window.",
      zhFigureAlt: "水自解离离子活性与离子对分离在 40 ps 自解离轨迹窗口内的未平滑演化。",
      figureCaption:
        "Representative 40 ps window from the published 58-water enhanced-sampling trajectory, sampled every 0.1 ps without smoothing. The coordinated rise of sₐ and s_t near 21 ps shows formation followed by separation of a self-ion pair. The archived cc and dd columns correspond to the current VORONOI_COORDINATION and VORONOI_DISTANCE definitions above.",
      zhFigureCaption:
        "取自论文 58 水分子增强采样轨迹的代表性 40 ps 窗口，每 0.1 ps 抽样且不做平滑。约 21 ps 处 sₐ 与 s_t 协同升高，显示水自解离离子对先形成、再分离。归档输出列 cc 与 dd 分别对应上方当前 VORONOI_COORDINATION 与 VORONOI_DISTANCE 定义。",
      links: [
        {
          label: "Paper",
          zhLabel: "论文",
          href: "https://doi.org/10.1021/acs.langmuir.4c05004",
        },
        {
          label: "Paper-specific reproduction input",
          zhLabel: "论文专用复现输入",
          href: "https://github.com/Zhang-pchao/OilWaterInterface/tree/main/Molecular_Dynamics/Enhanced_Sampling/DPMD/water_bulk_1",
        },
      ],
    },
    {
      id: "interface-position",
      number: "03",
      title: "Interface normal: drive and monitor self-ion locations after autoionization",
      zhTitle: "界面法向：自解离后驱动并监测离子位置",
      question:
        "After a self-ion pair forms, identity can continue hopping through the hydrogen-bond network. A useful location coordinate must therefore follow the positive or negative defect, not a permanently labeled oxygen atom.",
      zhQuestion:
        "水自解离离子对形成后，离子身份仍可沿氢键网络不断跳迁。因此，位置坐标必须跟随正、负配位缺陷，而不是永久标记某个氧原子。",
      setup:
        "For a slab normal to z, use the same water O/H assignment and define a fixed physical ORIGIN at the slab midplane. SIGN selects H₃O⁺ or OH⁻ and ABSOLUTE folds the two equivalent sides. The published air–water input used ORIGIN=53 Å for its own cell; users must determine the corresponding reference from their equilibrated geometry rather than copy this number.",
      zhSetup:
        "对于法向为 z 的 slab，沿用水 O/H 的归属定义，并在 slab 中面设置固定物理 ORIGIN。SIGN 区分 H₃O⁺ 与 OH⁻，ABSOLUTE 折叠两个等价界面。论文的气–水输入针对其特定晶胞使用 ORIGIN=53 Å；用户必须根据自己的平衡构型确定参考面，不能直接照搬该数值。",
      referenceText:
        "This position case reuses the water occupancy model: 256 water O centers all receive the broadcast value 2, while 512 water H atoms are ASSIGNED. REFERENCE therefore expands to 256 copies whose sum is 512. ORIGIN=53 Å belongs to the spatial position definition and has no role in choosing REFERENCE.",
      zhReferenceText:
        "这个位置案例沿用水的占据模型：256 个水 O 中心都接收广播值 2，ASSIGNED 中则有 512 个水 H。因此 REFERENCE 展开为 256 个 2，总和为 512。ORIGIN=53 Å 属于空间位置定义，与 REFERENCE 的取值无关。",
      referenceRows: [
        {
          centers: "1–766:3 (256 O atoms)",
          site: "Water O",
          zhSite: "水 O",
          value: "2 → 256 copies",
          reason: "Same neutral-water baseline as the bulk case; Σᵢνᵢ=512=Nassigned.",
          zhReason: "与体相水相同的中性基准；Σᵢνᵢ=512=Nassigned。",
        },
      ],
      code: `UNITS LENGTH=A

WaterO: GROUP ATOMS=1-766:3
WaterH: GROUP ATOMS=2-767:3,3-768:3

sa: VORONOI_COORDINATION ...
  CENTERS=WaterO ASSIGNED=WaterH
  KAPPA=5 REFERENCE=2 POWER=2
...
oh_z: VORONOI_POSITION ...
  CENTERS=WaterO ASSIGNED=WaterH KAPPA=5 REFERENCE=2
  AXIS=Z ORIGIN=53 SIGN=NEGATIVE ABSOLUTE
...
h3o_z: VORONOI_POSITION ...
  CENTERS=WaterO ASSIGNED=WaterH KAPPA=5 REFERENCE=2
  AXIS=Z ORIGIN=53 SIGN=POSITIVE ABSOLUTE
...

# Sharper observables for structural diagnosis, not automatic bias replacements
oh_z_sharp: VORONOI_POSITION ...
  CENTERS=WaterO ASSIGNED=WaterH KAPPA=100 REFERENCE=2
  AXIS=Z ORIGIN=53 SIGN=NEGATIVE ABSOLUTE
...
h3o_z_sharp: VORONOI_POSITION ...
  CENTERS=WaterO ASSIGNED=WaterH KAPPA=100 REFERENCE=2
  AXIS=Z ORIGIN=53 SIGN=POSITIVE ABSOLUTE
...

PRINT ARG=sa,oh_z,h3o_z,oh_z_sharp,h3o_z_sharp FILE=COLVAR STRIDE=1`,
      biasCode: `# Add only after the ionized region and derivatives are validated
opes: OPES_METAD ARG=oh_z,h3o_z TEMP=300 PACE=500 BARRIER=75`,
      biasText:
        "The paper used smoother KAPPA=5 position coordinates for sampling and sharper KAPPA=100 coordinates for structural analysis. If recombination is allowed, keep the unnormalized form shown here; NORMALIZE is fail-closed when the selected defect disappears.",
      zhBiasText:
        "论文使用较平滑的 KAPPA=5 位置坐标进行采样，并用 KAPPA=100 坐标做结构分析。若允许离子复合，应保留这里的未归一化形式；选定缺陷消失时，NORMALIZE 会按失效关闭原则停止计算。",
      interpretation: [
        {
          text: "With one localized ion of the selected sign, each output approximates its absolute distance from the fixed midplane. In a neutral frame it goes to zero because the defect weight disappears.",
          zhText: "当选定符号的离子充分局域时，输出近似为它到固定中面的绝对距离；中性态中缺陷权重消失，输出随之趋近零。",
        },
        {
          text: "A drop toward zero can mean reduced defect localization rather than instantaneous motion to the midplane. Read the position together with sₐ or the sign-resolved coordination activity.",
          zhText: "位置坐标降到零附近，可能表示缺陷局域性减弱，而不一定是离子瞬间移动到中面；必须结合 sₐ 或分正负号的配位缺陷活性判读。",
        },
        {
          text: "ABSOLUTE combines the two slab sides. Omit it only when the signed side is physically meaningful and the image convention remains continuous; VORONOI_POSITION does not locate a drifting interface automatically.",
          zhText: "ABSOLUTE 将 slab 两侧合并。只有当正负侧具有明确物理含义且周期成像连续时才应去掉它；VORONOI_POSITION 不会自动追踪漂移界面。",
        },
      ],
      figure: "/assets/reactive-voronoi/interface-position-cv-trajectory.png",
      figureAlt: "Unsmoothed negative- and positive-defect position coordinates over an 80 ps interfacial trajectory window.",
      zhFigureAlt: "界面轨迹 80 ps 窗口内负缺陷与正缺陷位置坐标的未平滑演化。",
      figureCaption:
        "Representative 80 ps window from the published 256-water slab enhanced-sampling trajectory, sampled every 0.1 ps without smoothing. The two curves follow the OH⁻ and H₃O⁺ defects along the interface normal. Short drops toward zero illustrate why these unnormalized positions must be interpreted together with defect activity. Archived zm05 and zp05 values are the paper-code counterparts of the current VORONOI_POSITION inputs above.",
      zhFigureCaption:
        "取自论文 256 水分子 slab 增强采样轨迹的代表性 80 ps 窗口，每 0.1 ps 抽样且不做平滑。两条曲线沿界面法向跟随 OH⁻ 与 H₃O⁺ 缺陷；短时降至零附近也说明未归一化位置必须与缺陷活性共同判读。归档输出 zm05 与 zp05 是上方当前 VORONOI_POSITION 输入在论文旧代码中的对应量。",
      links: [
        {
          label: "Paper",
          zhLabel: "论文",
          href: "https://doi.org/10.1021/acs.langmuir.4c05004",
        },
        {
          label: "Paper-specific reproduction input",
          zhLabel: "论文专用复现输入",
          href: "https://github.com/Zhang-pchao/OilWaterInterface/tree/main/Molecular_Dynamics/Enhanced_Sampling/DPMD/air_water_slab",
        },
      ],
    },
  ],
  legacyMappings: [
    {
      legacy: "VORONOIS1",
      current: "VORONOI_COORDINATION",
      detail: "POWER=1 with explicit COEFFICIENTS reproduces the signed glycine protonation reduction.",
      zhDetail: "使用 POWER=1 与明确 COEFFICIENTS，重写甘氨酸有符号质子化坐标。",
    },
    {
      legacy: "VORONOIC0",
      current: "VORONOI_COORDINATION",
      detail: "POWER=2 gives the water self-ion activity without a hard-coded water/glycine convention.",
      zhDetail: "使用 POWER=2 得到水自解离离子活性，不再依赖硬编码的水/甘氨酸约定。",
    },
    {
      legacy: "VORONOID1 / VORONOID2",
      current: "VORONOI_DISTANCE",
      detail: "Explicit GROUP1/GROUP2 selections replace NRX and atom-list-position rules; COMBINE joins physically distinct terms.",
      zhDetail: "由明确的 GROUP1/GROUP2 取代 NRX 与原子列表位置规则，再用 COMBINE 组合不同物理项。",
    },
    {
      legacy: "VORONOIIMZ / VORONOIIPZ",
      current: "VORONOI_POSITION",
      detail: "SIGN, AXIS, and ORIGIN replace positive/negative special classes and legacy atom-index moments.",
      zhDetail: "用 SIGN、AXIS 与 ORIGIN 取代正/负专用类及旧的原子序号矩。",
    },
  ],
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
      text: "If NLIST is used, converge values and forces against exact mode with NL_STRIDE=1 before testing NL_SKIN and a larger NL_STRIDE.",
      zhText: "若使用 NLIST，先以 NL_STRIDE=1 对照精确模式收敛数值和力，再测试 NL_SKIN 与更大的 NL_STRIDE。",
    },
    {
      text: "Compare serial and intended MPI/OpenMP execution, then run a short fixed-seed MD smoke test before biasing.",
      zhText: "对比串行与预期 MPI/OpenMP 结果；施加偏置前进行短程固定随机种子 MD 冒烟测试。",
    },
  ],
  performanceBenchmark: {
    title: "Measured DPMD + LAMMPS + PLUMED speedup",
    zhTitle: "DPMD + LAMMPS + PLUMED 实测加速",
    text:
      "Median timings from two reverse-order 1000-step runs using one RTX 3090 and eight CPU/PLUMED threads. The accelerated runs used the water-specific configuration shown below.",
    zhText:
      "以下为两次反序 1000 步计算的中位耗时，使用一张 RTX 3090 和 8 个 CPU/PLUMED 线程；加速组采用下面这套仅针对该水体系验证的配置。",
    config: "NLIST NL_CUTOFF=2.4 NL_SKIN=0.6 NL_STRIDE=10",
    columns: [
      { key: "waters", label: "Waters", zhLabel: "水分子数" },
      { key: "exact", label: "Exact MD loop (s)", zhLabel: "精确模式 MD (s)" },
      { key: "accelerated", label: "Accelerated MD loop (s)", zhLabel: "加速模式 MD (s)" },
      { key: "endToEnd", label: "End-to-end", zhLabel: "端到端加速" },
      { key: "cvOnly", label: "CV forward only", zhLabel: "仅 CV forward" },
    ],
    rows: [
      {
        waters: "256",
        exact: "13.241",
        accelerated: "9.230",
        endToEnd: "1.435×",
        cvOnly: "17.281×",
      },
      {
        waters: "512",
        exact: "32.836",
        accelerated: "16.567",
        endToEnd: "1.982×",
        cvOnly: "22.271×",
      },
      {
        waters: "1024",
        exact: "101.571",
        accelerated: "31.620",
        endToEnd: "3.212×",
        cvOnly: "37.448×",
      },
    ],
    note:
      "The highest user-facing result is 3.212× for the complete 1024-water MD loop; 37.448× measures only PLUMED CV forward. Rebuilding the 1024-water list every step gave 2.862× end-to-end, while the earlier 2.589× result describes 1-to-8-thread scaling of exact mode rather than the neighbor-list speedup.",
    zhNote:
      "面向用户应报告的最高结果是 1024 水完整 MD 循环的 3.212×；37.448× 只对应 PLUMED CV forward。1024 水每步重建列表时端到端加速为 2.862×；较早的 2.589× 表示精确模式从 1 到 8 线程的伸缩，并不是邻居表带来的总加速。",
  },
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
      text: "A converged NLIST reduces retained pairs for large systems, but it accelerates only the CV. DeePMD inference, LAMMPS integration, CPU/GPU communication, and output remain in the end-to-end critical path.",
      zhText: "对大体系，经过收敛验证的 NLIST 可减少保留配对，但它只加速 CV；DeePMD 推理、LAMMPS 积分、CPU/GPU 通信和输出仍处于端到端关键路径中。",
    },
    {
      text: "The measured gains and NLIST parameters above apply only to the validated water benchmark. New systems must keep exact mode as the reference and repeat value, force, and performance convergence before enabling NLIST in production.",
      zhText: "上述加速比与 NLIST 参数只适用于已验证的水体系。新体系必须以精确模式为基准，重新完成数值、力与性能收敛后，才能在生产计算中启用 NLIST。",
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
      title: "Modulation of Electric Field and Interface on Competitive Reaction Mechanisms",
      details: "J. Chem. Theory Comput. 2025, 21, 6584–6593",
      doi: "https://doi.org/10.1021/acs.jctc.5c00705",
    },
    {
      authors: "Pengchao Zhang and Xuefei Xu",
      title: "Propensity of Water Self-Ions at Air(Oil)–Water Interfaces Revealed by Deep Potential Molecular Dynamics with Enhanced Sampling",
      details: "Langmuir 2025, 41, 3675–3683",
      doi: "https://doi.org/10.1021/acs.langmuir.4c05004",
    },
    {
      authors: "Bowen Zhang, Pengchao Zhang, and Xuefei Xu",
      title: "Solvent Effect on the Electrocatalytic Nitrogen Reduction Reaction: A Deep Potential Molecular Dynamics Simulation with Enhanced Sampling for the Case of the Ruthenium Single Atom Catalyst",
      details: "J. Mater. Chem. A 2026, 14, 7109–7120",
      doi: "https://doi.org/10.1039/D5TA09029F",
    },
  ],
};

export const dpgen2CvFilterGuide = {
  title: "CV-Aware Candidate Selection in DPGEN2",
  zhTitle: "DPGEN2 中基于 PLUMED CV 的候选构型筛选",
  summary:
    "An active-learning workflow that keeps the original model-deviation trust window, then restricts candidates to user-defined PLUMED collective-variable regions and spreads the final labeling budget across the selected CV space. The worked example follows a 20 ps water-autoionization trajectory and links directly to the Reactive Soft-Voronoi guide used to define the reaction coordinates.",
  zhSummary:
    "该主动学习流程保留原有的模型偏差可信区间，随后用用户定义的 PLUMED 集体变量区域筛选候选构型，并在指定 CV 空间内分配最终标注预算。完整示例采用短时间水自电离轨迹，并与定义反应坐标的 Reactive Soft-Voronoi 教程直接联动。",
  reviewedCommit: "b528c1c51cbeaa8f5488f7cf6f14431c81e49351",
  installCode: `git clone --branch plumed-cv-filter https://github.com/Zhang-pchao/dpgen2.git
cd dpgen2
python -m pip install -e .

# After adapting input.json and the templates:
dpgen2 submit input.json`,
  status:
    "The implementation currently lives on the Zhang-pchao/dpgen2 branch plumed-cv-filter and is proposed upstream in deepmodeling/dpgen2 PR #372. Pin the branch or commit and check the PR before production use.",
  zhStatus:
    "当前实现位于 Zhang-pchao/dpgen2 的 plumed-cv-filter 分支，并已通过 deepmodeling/dpgen2 PR #372 向上游提交。生产使用前应固定分支或 commit，并检查 PR 的最新状态。",
  sections: [
    { id: "overview", label: "Overview", zhLabel: "概览" },
    { id: "logic", label: "Selection logic", zhLabel: "筛选逻辑" },
    { id: "configuration", label: "DPGEN2 configuration", zhLabel: "DPGEN2 配置" },
    { id: "plumed", label: "PLUMED coordinates", zhLabel: "PLUMED 反应坐标" },
    { id: "sampling", label: "Coverage policies", zhLabel: "覆盖策略" },
    { id: "water-case", label: "Water case", zhLabel: "水自电离案例" },
    { id: "audit", label: "Audit outputs", zhLabel: "审计输出" },
    { id: "reproducibility", label: "Reproducibility", zhLabel: "复现与边界" },
  ],
  links: [
    {
      label: "Feature branch",
      zhLabel: "功能分支",
      href: "https://github.com/Zhang-pchao/dpgen2/tree/plumed-cv-filter",
    },
    {
      label: "Selector source",
      zhLabel: "筛选器源码",
      href: "https://github.com/Zhang-pchao/dpgen2/blob/plumed-cv-filter/dpgen2/exploration/selector/plumed_cv_filter.py",
    },
    {
      label: "Input documentation",
      zhLabel: "输入参数文档",
      href: "https://github.com/Zhang-pchao/dpgen2/blob/plumed-cv-filter/docs/input.md#plumed-cv-candidate-filtering",
    },
    {
      label: "Focused tests",
      zhLabel: "聚焦测试",
      href: "https://github.com/Zhang-pchao/dpgen2/blob/plumed-cv-filter/tests/exploration/test_plumed_cv_filter.py",
    },
    {
      label: "Upstream PR #372",
      zhLabel: "上游 PR #372",
      href: "https://github.com/deepmodeling/dpgen2/pull/372",
    },
    {
      label: "Download example bundle",
      zhLabel: "下载示例文件",
      href: "https://github.com/Zhang-pchao/Zhang-pchao.github.io/tree/main/assets/dpgen2-cv-filter/examples",
    },
  ],
  principleText:
    "Model deviation and collective variables answer different questions. Model deviation estimates committee disagreement; a CV identifies the reaction space that matters for the scientific problem. Applying them in sequence prevents the CV window from admitting low-information frames and prevents the uncertainty gate from spending the entire labeling budget in a frequently visited, chemically uninteresting basin.",
  zhPrincipleText:
    "模型偏差与集体变量回答的是两个不同问题：模型偏差衡量委员会模型之间的分歧，CV 则定义当前科学问题所关注的反应空间。按顺序组合二者，既避免 CV 区间纳入信息量过低的构型，也避免不确定性筛选把全部标注预算消耗在高频访问但化学意义有限的势阱中。",
  stages: [
    {
      number: "01",
      title: "Model-deviation trust window",
      zhTitle: "模型偏差可信区间",
      text: "Retain frames whose maximum force model deviation lies between level_f_lo and level_f_hi.",
      zhText: "保留最大模型力偏差位于 level_f_lo 与 level_f_hi 之间的构型。",
    },
    {
      number: "02",
      title: "Named CV regions",
      zhTitle: "命名 CV 区域",
      text: "Conditions inside one region are ANDed; regions are ORed. Bounds are lower-inclusive and upper-exclusive.",
      zhText: "同一区域内的条件取交集，不同区域之间取并集；区间下界包含、上界不包含。",
    },
    {
      number: "03",
      title: "CV-space coverage",
      zhTitle: "CV 空间覆盖",
      text: "Spread a finite quota across one-dimensional bins or a two-dimensional grid instead of following trajectory density.",
      zhText: "将有限候选配额分散到一维分箱或二维网格，而不是跟随轨迹自身的高密度分布。",
    },
    {
      number: "04",
      title: "Candidate dataset and audit",
      zhTitle: "候选数据集与审计记录",
      text: "Write selected configurations together with frame, time, CV, model-deviation, region, and bin or cell provenance.",
      zhText: "输出候选构型，并同步记录帧号、时间、CV、模型偏差、所属区域及分箱或网格来源。",
    },
  ],
  configIntro:
    "The CV field names are not hard-coded chemistry labels. Every key in conditions must exactly match a field in the PLUMED #! FIELDS header. Keep one condition for a one-CV filter; add more conditions for an AND constraint; use several named regions for disjoint intervals or reaction classes.",
  zhConfigIntro:
    "CV 名称不是针对某类反应硬编码的关键词。conditions 中的每个键必须与 PLUMED #! FIELDS 表头完全一致。只保留一个 condition 即为单 CV 筛选；在同一区域增加条件表示交集；使用多个命名区域可表达不连续区间或不同反应类别。",
  configCode: `"explore": {
  "type": "lmp",
  "config": {
    "command": "lmp",
    "plm_output_file": "COLVAR"
  },
  "convergence": {
    "type": "fixed-levels",
    "level_f_lo": 0.05,
    "level_f_hi": 0.10
  },
  "cv_filter": {
    "regions": [
      {
        "name": "transition_segment",
        "conditions": {
          "separation": [1.0, 2.0],
          "reaction_progress": [0.25, 1.50]
        }
      },
      {
        "name": "separated_segment",
        "conditions": {
          "separation": [6.0, 8.0],
          "reaction_progress": [1.0, 1.75]
        }
      }
    ],
    "sampling": {
      "mode": "grid",
      "grid": {
        "reaction_progress": 10,
        "separation": 10
      },
      "within_bin": "max_deviation",
      "seed": 20260823,
      "min_frame_gap": 0
    },
    "time_alignment": {
      "start": 0.0,
      "step": 0.01,
      "atol": 1e-6
    }
  }
}`,
  configRows: [
    {
      key: "plm_output_file",
      meaning: "File written by PLUMED PRINT and collected from every LAMMPS exploration task. It defaults to COLVAR and must be a file name, not a path.",
      zhMeaning: "由 PLUMED PRINT 写出，并从每个 LAMMPS 探索任务收集的文件；默认为 COLVAR，且必须是文件名而不是路径。",
    },
    {
      key: "regions[].name",
      meaning: "Stable label recorded in CSV/JSON audits; use it to distinguish reaction classes or disjoint windows.",
      zhMeaning: "写入 CSV/JSON 审计文件的稳定标签，用于区分反应类别或不连续区间。",
    },
    {
      key: "regions[].conditions",
      meaning: "Exact COLVAR field names mapped to [lower, upper) intervals; conditions in one region are ANDed.",
      zhMeaning: "将 COLVAR 精确字段名映射到 [lower, upper) 区间；同一区域内条件取交集。",
    },
    {
      key: "sampling",
      meaning: "Optional explicit random, uniform, grid, or report policy. Omit it for inferred one- or two-CV coverage.",
      zhMeaning: "可选的 random、uniform、grid 或 report 策略；省略时自动推断一维或二维覆盖。",
    },
    {
      key: "time_alignment",
      meaning: "Required fail-closed check that COLVAR time equals start + frame × step; atol defaults to 1e-6.",
      zhMeaning: "必填的失败关闭检查，核对 COLVAR 时间是否满足 start + frame × step；atol 默认为 1e-6。",
    },
  ],
  plumedIntro:
    "The water example uses the Reactive Soft-Voronoi actions to describe ion formation and OH⁻/H₃O⁺ separation without fixing the identity of a particular oxygen. The PRINT labels reaction_progress and separation become the DPGEN2 condition keys.",
  zhPlumedIntro:
    "水体系示例使用 Reactive Soft-Voronoi Action 描述离子生成以及 OH⁻/H₃O⁺ 分离，不预先固定某个氧原子的离子身份。PRINT 中的 reaction_progress 与 separation 标签直接成为 DPGEN2 的 condition 键。",
  plumedCode: `UNITS LENGTH=A
LOAD FILE=/absolute/path/to/ReactiveVoronoi.so

WaterO: GROUP ATOMS=1-172:3
WaterH: GROUP ATOMS=2-173:3,3-174:3

reaction_progress: VORONOI_COORDINATION ...
separation: VORONOI_DISTANCE ...

PRINT ARG=reaction_progress,separation STRIDE=10 FILE=COLVAR RESTART=NO`,
  plumedNotes: [
    {
      text: "Match PRINT STRIDE to the DPGEN2 trajectory frequency, then set time_alignment.start and step so every COLVAR row is bound to the correct trajectory frame.",
      zhText: "使 PRINT STRIDE 与 DPGEN2 轨迹输出频率一致，并设置 time_alignment.start 和 step，使每行 COLVAR 与正确的轨迹帧对齐。",
    },
    {
      text: "The condition key follows the label before the colon and is independent of PRINT column order.",
      zhText: "condition 键来自冒号前的 PLUMED 标签，与 PRINT 中的列顺序无关。",
    },
    {
      text: "Region bounds use the units written to COLVAR. This example explicitly uses angstroms through UNITS LENGTH=A.",
      zhText: "区域边界采用 COLVAR 实际写出的单位；本例通过 UNITS LENGTH=A 明确使用 Å。",
    },
    {
      text: "Compile a custom Action with the same PLUMED installation used by LAMMPS, then load the resulting shared library with LOAD.",
      zhText: "自定义 Action 应使用与 LAMMPS 相同的 PLUMED 安装编译，再通过 LOAD 载入共享库。",
    },
  ],
  samplingIntro:
    "Uniform CV coverage is the default because random frame selection reproduces the trajectory density and may over-sample a single basin. If a region has fewer eligible frames than its nominal share, the remaining quota is redistributed to regions that can still supply candidates. Explicit policies remain available when density-weighted sampling or the original report behavior is desired.",
  zhSamplingIntro:
    "默认采用均匀 CV 覆盖，因为随机按帧抽取会复现轨迹密度，容易在单个势阱中重复取样。如果某个区域的合格帧少于名义配额，剩余名额会重新分配给仍有候选帧的区域。当确实需要密度加权抽样或原始 report 行为时，仍可显式选择对应策略。",
  samplingModes: [
    {
      mode: "default",
      use: "One shared CV → 10 bins; two shared CVs → 10 × 10 grid. Pick the largest force deviation in each populated bin or cell.",
      zhUse: "一个公共 CV → 10 个分箱；两个公共 CV → 10 × 10 网格；每个非空分箱或网格内优先取最大力偏差。",
    },
    {
      mode: "uniform",
      use: "Explicit one-CV field and bin count, with random or maximum-deviation selection inside each bin.",
      zhUse: "显式指定一维 CV 字段和分箱数，并在每个分箱内随机或按最大模型偏差选择。",
    },
    {
      mode: "grid",
      use: "Explicit two-CV grid, optional region weights, reproducible seed, and minimum frame gap. With a nonzero gap, inspect regional counts and underfilled_quota rather than assuming the requested quota is filled.",
      zhUse: "显式指定二维 CV 网格，并可设置区域权重、可复现随机种子及最小帧间隔。使用非零间隔时，应检查各区域数量与 underfilled_quota，不能默认总配额一定填满。",
    },
    {
      mode: "random",
      use: "Randomly sample CV-eligible candidate frames. Reproducible with a seed, but follows trajectory density.",
      zhUse: "从满足 CV 条件的候选帧中随机抽取；可用 seed 复现，但会跟随轨迹密度。",
    },
    {
      mode: "report",
      use: "Retain the original convergence report's maximum-deviation or random candidate policy after CV filtering.",
      zhUse: "在 CV 筛选后继续使用原 convergence report 的最大偏差或随机候选策略。",
    },
  ],
  waterCaseIntro:
    "A bounded one-iteration smoke test reused four committee models and one model to drive a 20 ps PLUMED/LAMMPS trajectory. Of 2001 aligned frames, 723 passed the 0.05–0.10 eV Å⁻¹ model-deviation trust gate, 192 entered the two target CV regions, and an explicit 10 × 10 grid selected 40 frames with equal 20-frame region quotas. The table below shows the three highest-deviation selections from each region.",
  zhWaterCaseIntro:
    "一次有界的一轮 smoke test 复用了四个委员会模型，并用其中一个模型驱动 20 ps 的 PLUMED/LAMMPS 轨迹。2001 个对齐帧中，723 帧通过 0.05–0.10 eV Å⁻¹ 的模型偏差可信区间，192 帧进入两个目标 CV 区域，显式 10 × 10 网格最终按两个区域各 20 帧的配额选择 40 帧。下表列出每个区域中模型偏差最高的 3 个入选帧。",
  metrics: [
    { value: "2001", label: "Aligned trajectory frames", zhLabel: "对齐轨迹帧" },
    { value: "723", label: "Trust-window candidates", zhLabel: "模型偏差可信区间候选帧" },
    { value: "192", label: "CV-eligible frames", zhLabel: "满足 CV 区域的帧" },
    { value: "40", label: "Grid-selected frames", zhLabel: "网格最终选择帧" },
  ],
  figure: "/assets/dpgen2-cv-filter/water-autoionization-selection.png",
  figureAlt:
    "Three-stage DPGEN2 candidate-selection figure showing the model-deviation trust gate, two water-autoionization CV regions, and the final grid-selected frames.",
  zhFigureAlt:
    "DPGEN2 三阶段候选筛选图，依次展示模型偏差可信区间、两个水自电离 CV 区域及最终网格选择帧。",
  figureCaption:
    "Verified integration run 153664 at reviewed commit 26f9c760. The pipeline is 2001 trajectory frames → 723 trust candidates → 192 CV-eligible frames → 40 selected frames. The two regions receive equal 20-frame quotas; within each selected 10 × 10 grid cell, the frame with the largest force model deviation is retained. Offline gap checks selected 40/40/40/34 frames at 0/5/10/20-frame gaps; reversing region order produced identical frame IDs at every tested gap. This teacher-label smoke test demonstrates workflow plumbing and provenance, not first-principles labeling or physical convergence.",
  zhFigureCaption:
    "来自已验证的集成测试 run 153664，对应核对 commit 26f9c760。筛选流程为 2001 个轨迹帧 → 723 个模型偏差候选帧 → 192 个满足 CV 区域的帧 → 40 个最终选择帧。两个区域各分配 20 帧；在 10 × 10 网格的每个入选单元中保留最大模型力偏差帧。离线间隔检查在 0/5/10/20 帧间隔下分别选择 40/40/40/34 帧；反转区域顺序后，各间隔下的入选帧 ID 均完全一致。该 teacher-label smoke test 只验证工作流联通与来源记录，不代表第一性原理标注或物理收敛。",
  selectedRows: [
    { frame: "846", time: "8.46", progress: "0.788062", separation: "1.372506", deviation: "0.09676630", region: "transition_segment" },
    { frame: "851", time: "8.51", progress: "1.083560", separation: "1.889583", deviation: "0.09152147", region: "transition_segment" },
    { frame: "993", time: "9.93", progress: "1.220774", separation: "1.787615", deviation: "0.08296670", region: "transition_segment" },
    { frame: "1399", time: "13.99", progress: "1.407387", separation: "7.588436", deviation: "0.07545070", region: "separated_segment" },
    { frame: "1820", time: "18.20", progress: "1.237747", separation: "6.834163", deviation: "0.06811833", region: "separated_segment" },
    { frame: "1468", time: "14.68", progress: "1.005526", separation: "6.772462", deviation: "0.06803741", region: "separated_segment" },
  ],
  auditIntro:
    "The selector writes machine-readable audit files beside the selected DeepMD dataset. These records are the first place to check whether a selection rule behaved as intended.",
  zhAuditIntro:
    "筛选器会在最终 DeepMD 数据集旁写出机器可读的审计文件。判断筛选规则是否符合预期时，应优先检查这些记录。",
  auditFiles: [
    {
      file: "cv_selection.csv",
      content: "One row per selected frame: trajectory and frame index, PLUMED time, CV values, maximum force deviation, matched regions, and bin or cell provenance.",
      zhContent: "每个选择帧一行：轨迹与帧号、PLUMED 时间、CV 数值、最大模型力偏差、命名区域及分箱或网格来源。",
    },
    {
      file: "cv_selection_summary.json",
      content: "Global counts, interval semantics, sampling policy, region populations, selected cells, frame-gap rejections, and underfilled quota.",
      zhContent: "全局计数、区间语义、采样策略、各区域样本量、选择网格、帧间隔拒绝数及未填满配额。",
    },
  ],
  auditCode: `traj_idx,frame_idx,time,max_devi_f,region_names,cell_or_bin,...
0,846,8.46,0.09676630,transition_segment,"transition_segment:reaction_progress=4,separation=3",...
0,851,8.51,0.09152147,transition_segment,"transition_segment:reaction_progress=6,separation=8",...
0,1399,13.99,0.07545070,separated_segment,"separated_segment:reaction_progress=5,separation=7",...`,
  reproducibilitySteps: [
    {
      text: "Clone Zhang-pchao/dpgen2 at branch plumed-cv-filter and install the checkout in editable mode with python -m pip install -e .",
      zhText: "克隆 Zhang-pchao/dpgen2 的 plumed-cv-filter 分支，并用 python -m pip install -e . 进行开发者模式安装。",
    },
    {
      text: "Prepare committee models, a structure, matching LAMMPS/PLUMED templates, a COLVAR PRINT stride identical to traj_freq, and explicit time-alignment start and step values.",
      zhText: "准备委员会模型、初始结构及相互匹配的 LAMMPS/PLUMED 模板，使 COLVAR PRINT stride 与 traj_freq 一致，并显式填写时间对齐的 start 和 step。",
    },
    {
      text: "Start with one short iteration, run dpgen2 submit input.json, and verify trajectory, model-deviation, and COLVAR frame counts before interpreting candidates.",
      zhText: "先运行一轮短测试，执行 dpgen2 submit input.json，并在解释候选结果前核对轨迹、模型偏差与 COLVAR 帧数。",
    },
    {
      text: "Inspect cv_selection.csv and cv_selection_summary.json, then visualize CV coverage before increasing MD length or labeling cost.",
      zhText: "检查 cv_selection.csv 与 cv_selection_summary.json，并先可视化 CV 覆盖，再增加 MD 长度或标注成本。",
    },
  ],
  limitations: [
    {
      text: "A CV filter focuses an existing uncertainty signal; it does not prove that the chosen CV is complete or that selected frames are chemically independent.",
      zhText: "CV 筛选只是聚焦已有的不确定性信号；它不能证明所选 CV 完备，也不能证明候选构型在化学上相互独立。",
    },
    {
      text: "The water run used a DeePMD teacher for a functional labeling smoke test. Replace it with a validated first-principles FP stage for scientific dataset generation.",
      zhText: "水体系测试使用 DeePMD teacher 验证标注链路；正式生成科学数据集时应替换为经过验证的第一性原理 FP 阶段。",
    },
    {
      text: "Time, units, field names, and frame counts fail closed. Do not bypass these checks to accept a partially aligned trajectory.",
      zhText: "时间、单位、字段名与帧数均采用失败关闭检查；不要绕过这些检查去接受部分对齐的轨迹。",
    },
    {
      text: "More than two coverage dimensions require an explicit sampling design; a dense high-dimensional grid is not inferred automatically.",
      zhText: "超过二维的覆盖空间需要显式设计采样策略；程序不会自动推断稠密的高维网格。",
    },
  ],
  exampleLinks: [
    { label: "JSON fragment", zhLabel: "JSON 配置片段", href: "/assets/dpgen2-cv-filter/examples/explore.cv-filter.fragment.json" },
    { label: "PLUMED template", zhLabel: "PLUMED 模板", href: "/assets/dpgen2-cv-filter/examples/template.plumed" },
    { label: "LAMMPS template", zhLabel: "LAMMPS 模板", href: "/assets/dpgen2-cv-filter/examples/template.lammps" },
    { label: "Audit CSV", zhLabel: "审计 CSV", href: "/assets/dpgen2-cv-filter/examples/cv_selection.example.csv" },
    { label: "Audit summary", zhLabel: "审计汇总", href: "/assets/dpgen2-cv-filter/examples/cv_selection_summary.example.json" },
    { label: "Plot script", zhLabel: "绘图脚本", href: "/assets/dpgen2-cv-filter/examples/plot_cv_selection.py" },
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
