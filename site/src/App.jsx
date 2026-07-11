import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import {
  codeResources,
  honors,
  outreachLinks,
  patents,
  profileLinks,
  publications,
  recommendedResourceGroups,
  researchProjects,
  socialLinks,
  tutorials,
} from "./data.js";

const movieGroups = [
  {
    key: "glycine",
    sourceHref: "https://pubs.acs.org/doi/10.1021/acs.jcim.4c00273",
    title: {
      en: "Glycine proton-transfer movies",
      zh: "甘氨酸质子转移过程",
    },
    source: {
      en: "From Supporting Information videos for Intramolecular and Water Mediated Tautomerism of Solvated Glycine.",
      zh: "来自甘氨酸互变异构论文的支持信息视频。",
    },
    videos: [
      {
        src: "/assets/videos/glycine-intramolecular.mp4",
        title: {
          en: "Intramolecular proton transfer",
          zh: "分子内质子转移",
        },
      },
      {
        src: "/assets/videos/glycine-hydronium.mp4",
        title: {
          en: "Hydronium-mediated transfer",
          zh: "水合氢离子介导转移",
        },
      },
      {
        src: "/assets/videos/glycine-hydroxide.mp4",
        title: {
          en: "Hydroxide-mediated transfer",
          zh: "氢氧根离子介导转移",
        },
      },
    ],
  },
  {
    key: "nanobubble",
    sourceHref: "https://pubs.acs.org/doi/10.1021/jacs.4c06641",
    title: {
      en: "Nitrogen nanobubble movies",
      zh: "氮气纳米气泡演化过程",
    },
    source: {
      en: "From Supporting Information videos for Hydroxide and Hydronium Ions Modulate the Dynamic Evolution of Nitrogen Nanobubbles in Water.",
      zh: "来自氢氧根和水合氢离子调控氮气纳米气泡演化论文的支持信息视频。",
    },
    videos: [
      {
        src: "/assets/videos/bubble-pure-water-a.mp4",
        title: {
          en: "Pure water system A",
          zh: "纯水体系中的气泡演化过程",
        },
      },
      {
        src: "/assets/videos/bubble-acidic-b.mp4",
        title: {
          en: "Acidic system B",
          zh: "酸性体系中的气泡演化过程",
        },
      },
      {
        src: "/assets/videos/bubble-more-alkaline-d.mp4",
        title: {
          en: "More alkaline system D",
          zh: "碱性体系中的气泡演化过程",
        },
      },
    ],
  },
];

const COPY = {
  en: {
    htmlLang: "en",
    pageTitles: {
      "/": "Pengchao Zhang",
      "/research": "Research | Pengchao Zhang",
      "/publications": "Publications | Pengchao Zhang",
      "/cv": "CV | Pengchao Zhang",
      "/resources": "Resources | Pengchao Zhang",
      "/contact": "Contact | Pengchao Zhang",
    },
    nav: [
      ["/", "Home"],
      ["/research", "Research"],
      ["/publications", "Publications"],
      ["/cv", "CV"],
      ["/resources", "Resources"],
      ["/contact", "Contact"],
    ],
    header: {
      menuOpen: "Close",
      menuClosed: "Menu",
      navLabel: "Primary navigation",
      switchLabel: "Switch language to Chinese",
      switchText: "中文",
    },
    publicationLinks: {
      sharedCopy: "Shared copy",
      codeData: "Code & data",
      graphicalAbstract: "Graphical abstract for",
    },
    home: {
      name: "Pengchao Zhang",
      position: [
        "Postdoctoral Fellow",
        "Center for Combustion Energy, Tsinghua University",
      ],
      bio: "I am working on computational chemistry and molecular simulation. My research focuses on aqueous interfaces, water self-ions, nanobubble dynamics, and reaction mechanisms using machine-learned potentials and enhanced sampling. I received my Ph.D. from Tsinghua University and my Bachelor of Engineering from Huazhong University of Science and Technology. I was also a visiting Ph.D. researcher at the Italian Institute of Technology.",
      academicProfiles: "Academic profiles",
      researchInterests: "Research Interests",
      selectedPublications: "Selected Publications",
      fullList: "Full list",
      movies: "Research Movies",
      movieIntro:
        "Looped, muted previews of proton-transfer and nanobubble dynamics from published Supporting Information videos.",
      outreach: "Outreach and Notes",
      more: "More",
    },
    researchAreas: [
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
    ],
    research: {
      title: "Research",
      repositories: "Research Repositories",
      completeArchive: "Complete archive",
      outreach: "Outreach and Notes",
    },
    publications: {
      title: "Publications",
      papers: "Papers",
      patents: "Patents",
      paperPages: "Paper pages",
      granted: "granted",
    },
    cv: {
      title: "Curriculum Vitae",
      appointments: "Appointments",
      education: "Education",
      visiting: "Visiting Research",
      exchange: "Academic Exchange",
      honors: "Honors and Awards",
      postdocTitle: "Postdoctoral Fellow",
      postdocAdvisor: "Postdoctoral advisor",
      postdocFocus:
        "Focus: molecular-level understanding of micro- and nanobubbles in aqueous environments.",
      phdTitle: "Ph.D. in Power Engineering and Engineering Thermophysics",
      advisor: "Advisor",
      phdFocus:
        "Focus: water self-ion distributions at aqueous interfaces and their effects on physicochemical processes.",
      bachelorTitle: "B.Eng. in New Energy Science and Engineering",
      mentor: "Research mentor",
      bachelorFocus:
        "Focus: high-value utilization of solid waste and biomass energy conversion.",
      visitingTitle: "Visiting Ph.D. Researcher",
      host: "Host",
      visitingFocus:
        "Focus: enhanced sampling and deep-potential molecular simulation of water-self-ion-mediated glycine tautomerism.",
      talk1Title: "Oral presentation, 5th ABACUS Developer Conference",
      talk1Place: "Jul 2025, Beijing, China",
      talk1Text:
        "Electric Field and Interface Modulation of Glycine Tautomerism in Solution: A Study Using ABACUS, DeePKS, DeePMD, and OPES with Voronoi CVs.",
      talk2Title: "Oral presentation, 14th National Conference on Fluid Mechanics",
      talk2Place: "Aug 2026, Qingdao, China",
      talk2Text:
        "Molecular Mechanisms of Ion-Microenvironment-Regulated Micro/Nanobubble Evolution.",
    },
    resources: {
      title: "Resources",
      codes: "Codes",
      tutorials: "Tutorials",
      recommended: "Recommended Learning Resources",
      notes: "Notes",
      notesText:
        "Technical notes and longer-form tutorials will be published here as the collection develops.",
    },
    contact: {
      title: "Contact",
      email: "Email",
      affiliation: "Affiliation",
      profiles: "Academic Profiles",
      social: "Social",
    },
    notFound: {
      title: "Page Not Found",
      returnHome: "Return to the home page.",
    },
  },
  zh: {
    htmlLang: "zh-CN",
    pageTitles: {
      "/": "章鹏超",
      "/research": "研究 | 章鹏超",
      "/publications": "论文 | 章鹏超",
      "/cv": "简历 | 章鹏超",
      "/resources": "资源 | 章鹏超",
      "/contact": "联系 | 章鹏超",
    },
    nav: [
      ["/", "首页"],
      ["/research", "研究"],
      ["/publications", "论文"],
      ["/cv", "简历"],
      ["/resources", "资源"],
      ["/contact", "联系"],
    ],
    header: {
      menuOpen: "关闭",
      menuClosed: "菜单",
      navLabel: "主导航",
      switchLabel: "Switch language to English",
      switchText: "English",
    },
    publicationLinks: {
      sharedCopy: "共享全文",
      codeData: "代码与数据",
      graphicalAbstract: "图文摘要：",
    },
    home: {
      name: "章鹏超",
      position: ["博士后", "清华大学燃烧能源中心"],
      bio: "我从事计算化学与分子模拟研究，关注水相界面、水自解离离子、纳米气泡动力学以及反应机理，主要使用深度势能模型与增强采样方法。我在清华大学获得博士学位，在华中科技大学获得能源与动力工程学士学位，并曾在意大利理工学院进行博士访问研究。",
      academicProfiles: "学术主页",
      researchInterests: "研究方向",
      selectedPublications: "代表论文",
      fullList: "完整列表",
      movies: "研究视频",
      movieIntro:
        "这里展示两项已发表工作的支持信息视频，循环静音播放，便于快速了解质子转移和纳米气泡演化过程。",
      outreach: "推送与宣传",
      more: "更多",
    },
    researchAreas: [
      {
        number: "01",
        title: "深度势能分子动力学与增强采样",
        description:
          "发展并整合深度势能模型、自由能计算与稀有事件采样方法，构建面向复杂反应体系的模拟工作流。",
      },
      {
        number: "02",
        title: "气-液-固界面的离子分布与反应",
        description:
          "研究水自解离离子、电荷组织、溶剂化结构与界面反应性在非均相水环境中的分子机制。",
      },
      {
        number: "03",
        title: "微纳米气泡动力学",
        description:
          "研究纳米气泡的成核、溶解、界面电荷与稳定性调控，关注化学与热环境变化下的演化机制。",
      },
      {
        number: "04",
        title: "电场与界面耦合效应下的竞争反应",
        description:
          "研究外加电场、局域溶剂化与离子对分离如何改变反应热力学、动力学与优势路径。",
      },
    ],
    research: {
      title: "研究",
      repositories: "研究仓库",
      completeArchive: "完整归档",
      outreach: "推送与宣传",
    },
    publications: {
      title: "论文",
      papers: "论文",
      patents: "专利",
      paperPages: "论文分页",
      granted: "授权",
    },
    cv: {
      title: "简历",
      appointments: "工作经历",
      education: "教育背景",
      visiting: "访问研究",
      exchange: "学术交流",
      honors: "荣誉奖励",
      postdocTitle: "博士后",
      postdocAdvisor: "博士后合作导师",
      postdocFocus: "研究方向：水环境中微纳米气泡的分子层次机制。",
      phdTitle: "动力工程及工程热物理博士",
      advisor: "导师",
      phdFocus: "研究方向：水相界面水自解离离子分布及其对物理化学过程的影响。",
      bachelorTitle: "新能源科学与工程学士",
      mentor: "科研导师",
      bachelorFocus: "研究方向：固体废弃物高值化利用与生物质能转化。",
      visitingTitle: "博士访问研究生",
      host: "访问导师",
      visitingFocus:
        "研究方向：水自解离离子介导的甘氨酸互变异构反应的增强采样与深度势能分子模拟。",
      talk1Title: "口头报告，第五届 ABACUS 开发者大会",
      talk1Place: "2025年7月，北京",
      talk1Text:
        "溶液中甘氨酸互变异构的电场与界面调控：基于 ABACUS、DeePKS、DeePMD、OPES 与 Voronoi CV 的研究。",
      talk2Title: "口头报告，第十四届全国流体力学学术会议",
      talk2Place: "2026年8月，青岛",
      talk2Text: "离子微环境调控微纳米气泡演化的分子机制。",
    },
    resources: {
      title: "资源",
      codes: "代码",
      tutorials: "教程",
      recommended: "推荐学习资源",
      notes: "笔记",
      notesText: "技术笔记和更系统的教程会随内容积累逐步整理到这里。",
    },
    contact: {
      title: "联系",
      email: "邮箱",
      affiliation: "单位",
      profiles: "学术主页",
      social: "社交账号",
    },
    notFound: {
      title: "页面不存在",
      returnHome: "返回首页。",
    },
  },
};

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function DocumentTitle({ copy }) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = copy.pageTitles[pathname] || copy.pageTitles["/"];
  }, [copy, pathname]);

  return null;
}

function ExternalLink({ href, children, className = "" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function localized(item, field, language) {
  return language === "zh" ? item[`zh${field}`] || item[field.toLowerCase()] : item[field.toLowerCase()];
}

function Header({ copy, language, onLanguageChange }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="site-identity" to="/">
          Pengchao Zhang
        </Link>
        <div className="header-actions">
          <nav
            id="primary-navigation"
            className={`primary-navigation ${menuOpen ? "is-open" : ""}`}
            aria-label={copy.header.navLabel}
          >
            {copy.nav.map(([path, label]) => (
              <NavLink
                key={path}
                to={path}
                end={path === "/"}
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <button
            className="language-toggle"
            type="button"
            aria-label={copy.header.switchLabel}
            onClick={() => onLanguageChange(language === "en" ? "zh" : "en")}
          >
            {copy.header.switchText}
          </button>
          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((current) => !current)}
          >
            {menuOpen ? copy.header.menuOpen : copy.header.menuClosed}
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-inner">
        <span>© {new Date().getFullYear()} Pengchao Zhang</span>
      </div>
    </footer>
  );
}

function PageTitle({ children }) {
  return (
    <div className="section-shell page-title">
      <h1>{children}</h1>
    </div>
  );
}

function LinkGroup({ publication, copy }) {
  return (
    <div className="publication-links">
      <ExternalLink href={publication.doi}>DOI</ExternalLink>
      {publication.pdf && (
        <a href={publication.pdf} download>
          PDF
        </a>
      )}
      {publication.preprint && (
        <ExternalLink href={publication.preprint.href}>
          {publication.preprint.label}
        </ExternalLink>
      )}
      {publication.freeAccess && (
        <ExternalLink href={publication.freeAccess}>
          {copy.publicationLinks.sharedCopy}
        </ExternalLink>
      )}
      {publication.code && (
        <ExternalLink href={publication.code}>
          {copy.publicationLinks.codeData}
        </ExternalLink>
      )}
    </div>
  );
}

function PublicationEntry({ publication, copy, compact = false }) {
  return (
    <article
      className={[
        "publication-entry",
        compact ? "compact" : "",
        !compact && publication.toc ? "has-toc" : "",
      ].filter(Boolean).join(" ")}
    >
      <div className="publication-year">{publication.year}</div>
      <div className="publication-copy">
        <h2>{publication.title}</h2>
        {!compact && <p>{publication.authors}</p>}
        <p className="publication-details">
          {compact ? publication.journal : publication.details}
        </p>
        <LinkGroup publication={publication} copy={copy} />
      </div>
      {!compact && publication.toc && (
        <img
          className="publication-toc"
          src={publication.toc}
          alt={`${copy.publicationLinks.graphicalAbstract} ${publication.title}`}
          loading="lazy"
        />
      )}
    </article>
  );
}

function MovieShowcase({ copy, language }) {
  return (
    <section className="content-section movie-section">
      <h2>{copy.home.movies}</h2>
      <p className="section-note">{copy.home.movieIntro}</p>
      <div className="movie-groups">
        {movieGroups.map((group) => (
          <article key={group.key} className="movie-group">
            <div className="section-heading">
              <h3>{group.title[language]}</h3>
              <ExternalLink href={group.sourceHref}>DOI</ExternalLink>
            </div>
            <p>{group.source[language]}</p>
            <div className="movie-grid">
              {group.videos.map((movie) => (
                <figure key={movie.src} className="movie-card">
                  <video
                    src={movie.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    preload="metadata"
                    aria-label={movie.title[language]}
                  />
                  <figcaption>{movie.title[language]}</figcaption>
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function HomePage({ copy, language }) {
  const featured = publications.filter((publication) => publication.featured);
  const featuredOutreach = outreachLinks.slice(0, 4);

  return (
    <main className="section-shell">
      <section className="home-intro">
        <div className="home-text">
          <h1>{copy.home.name}</h1>
          <p className="position">
            {copy.home.position[0]}<br />
            {copy.home.position[1]}
          </p>
          <p>{copy.home.bio}</p>
          <div className="inline-links" aria-label={copy.home.academicProfiles}>
            {profileLinks.map((link) => (
              <ExternalLink key={link.label} href={link.href}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </div>
        <img
          className="profile-photo"
          src="/assets/pengchao-zhang.jpg"
          alt="Pengchao Zhang"
          width="1000"
          height="1400"
        />
      </section>

      <MovieShowcase copy={copy} language={language} />

      <section className="content-section">
        <h2>{copy.home.researchInterests}</h2>
        <ul className="plain-list">
          {copy.researchAreas.map((area) => (
            <li key={area.number}>{area.title}</li>
          ))}
        </ul>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>{copy.home.selectedPublications}</h2>
          <Link to="/publications">{copy.home.fullList}</Link>
        </div>
        <div className="publication-stack">
          {featured.map((publication) => (
            <PublicationEntry
              key={publication.doi}
              publication={publication}
              copy={copy}
              compact
            />
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>{copy.home.outreach}</h2>
          <Link to="/research">{copy.home.more}</Link>
        </div>
        <div className="resource-list">
          {featuredOutreach.map((item) => (
            <article key={item.href}>
              <h3>
                <ExternalLink href={item.href}>
                  {localized(item, "Title", language)}
                </ExternalLink>
              </h3>
              <p>{localized(item, "Description", language)}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

function ResearchPage({ copy, language }) {
  return (
    <main>
      <PageTitle>{copy.research.title}</PageTitle>
      <div className="section-shell page-content">
        <section className="research-list">
          {copy.researchAreas.map((area) => (
            <article key={area.number}>
              <h2>{area.title}</h2>
              <p>{area.description}</p>
            </article>
          ))}
        </section>

        <section className="content-section">
          <div className="section-heading">
            <h2>{copy.research.repositories}</h2>
            <ExternalLink href="https://github.com/Zhang-pchao/research">
              {copy.research.completeArchive}
            </ExternalLink>
          </div>
          <div className="resource-list">
            {researchProjects.map((project) => (
              <article key={project.title}>
                <h3>
                  <ExternalLink href={project.href}>{project.title}</ExternalLink>
                </h3>
                <p>{project.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2>{copy.research.outreach}</h2>
          <div className="resource-list">
            {outreachLinks.map((item) => (
              <article key={item.href}>
                <h3>
                  <ExternalLink href={item.href}>
                    {localized(item, "Title", language)}
                  </ExternalLink>
                </h3>
                <p>{localized(item, "Description", language)}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function PublicationsPage({ copy }) {
  const papersPerPage = 10;
  const [paperPage, setPaperPage] = useState(1);
  const pageCount = Math.ceil(publications.length / papersPerPage);
  const visiblePapers = publications.slice(
    (paperPage - 1) * papersPerPage,
    paperPage * papersPerPage,
  );

  return (
    <main>
      <PageTitle>{copy.publications.title}</PageTitle>
      <div className="section-shell page-content">
        <section className="publication-section" id="papers">
          <h2>{copy.publications.papers}</h2>
          <div className="publication-stack full">
            {visiblePapers.map((publication) => (
              <PublicationEntry
                key={publication.doi}
                publication={publication}
                copy={copy}
              />
            ))}
          </div>
          {pageCount > 1 && (
            <nav className="pagination" aria-label={copy.publications.paperPages}>
              {Array.from({ length: pageCount }, (_, index) => index + 1).map(
                (page) => (
                  <button
                    key={page}
                    type="button"
                    className={page === paperPage ? "active" : undefined}
                    aria-current={page === paperPage ? "page" : undefined}
                    onClick={() => {
                      setPaperPage(page);
                      document.querySelector("#papers")?.scrollIntoView();
                    }}
                  >
                    {page}
                  </button>
                ),
              )}
            </nav>
          )}
        </section>

        <section className="publication-section" id="patents">
          <h2>{copy.publications.patents}</h2>
          <div className="patent-list">
            {patents.map((patent) => (
              <article key={patent.number}>
                <div className="patent-year">{patent.date.slice(0, 4)}</div>
                <div>
                  <h3>{patent.title}</h3>
                  <p>{patent.authors}</p>
                  <p>
                    {patent.number}; {copy.publications.granted} {patent.date}.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function TimelineEntry({ period, title, institution, children }) {
  return (
    <article className="timeline-entry">
      <div className="timeline-period">{period}</div>
      <div>
        <h3>{title}</h3>
        <p className="institution">{institution}</p>
        {children}
      </div>
    </article>
  );
}

function CvSection({ id, title, children }) {
  return (
    <section id={id} className="cv-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function CvPage({ copy }) {
  return (
    <main>
      <PageTitle>{copy.cv.title}</PageTitle>
      <div className="section-shell page-content cv-content">
        <CvSection id="appointments" title={copy.cv.appointments}>
          <TimelineEntry
            period="Jul 2025–present"
            title={copy.cv.postdocTitle}
            institution="Center for Combustion Energy, Department of Energy and Power Engineering, Tsinghua University"
          >
            <p>
              {copy.cv.postdocAdvisor}:{" "}
              <ExternalLink href="https://sungroup-thu.com/">
                Prof. Chao Sun
              </ExternalLink>
              .
            </p>
            <p>{copy.cv.postdocFocus}</p>
          </TimelineEntry>
        </CvSection>

        <CvSection id="education" title={copy.cv.education}>
          <TimelineEntry
            period="Sep 2020–Jun 2025"
            title={copy.cv.phdTitle}
            institution="Center for Combustion Energy, Department of Energy and Power Engineering, Tsinghua University"
          >
            <p>
              {copy.cv.advisor}:{" "}
              <ExternalLink href="https://xux-group.github.io/">
                Prof. Xuefei Xu
              </ExternalLink>
              .
            </p>
            <p>{copy.cv.phdFocus}</p>
          </TimelineEntry>
          <TimelineEntry
            period="Sep 2016–Jun 2020"
            title={copy.cv.bachelorTitle}
            institution="School of Energy and Power Engineering, Huazhong University of Science and Technology"
          >
            <p>
              {copy.cv.mentor}:{" "}
              <ExternalLink href="http://sklccyao.energy.hust.edu.cn/info/1079/1297.htm">
                Prof. Hongyun Hu
              </ExternalLink>
              .
            </p>
            <p>{copy.cv.bachelorFocus}</p>
          </TimelineEntry>
        </CvSection>

        <CvSection id="visiting" title={copy.cv.visiting}>
          <TimelineEntry
            period="Nov 2022–Nov 2023"
            title={copy.cv.visitingTitle}
            institution="Atomistic Simulations, Italian Institute of Technology"
          >
            <p>
              {copy.cv.host}:{" "}
              <ExternalLink href="https://www.iit.it/people-details/-/people/michele-parrinello">
                Prof. Michele Parrinello
              </ExternalLink>
              .
            </p>
            <p>{copy.cv.visitingFocus}</p>
          </TimelineEntry>
        </CvSection>

        <CvSection id="talks" title={copy.cv.exchange}>
          <div className="record-list">
            <article>
              <h3>{copy.cv.talk1Title}</h3>
              <p>{copy.cv.talk1Place}</p>
              <p>{copy.cv.talk1Text}</p>
            </article>
            <article>
              <h3>{copy.cv.talk2Title}</h3>
              <p>{copy.cv.talk2Place}</p>
              <p>{copy.cv.talk2Text}</p>
            </article>
          </div>
        </CvSection>

        <CvSection id="honors" title={copy.cv.honors}>
          <div className="honor-list">
            {honors.map((honor) => (
              <div key={`${honor.year}-${honor.title}`}>
                <span>{honor.year}</span>
                <p>{honor.title}</p>
              </div>
            ))}
          </div>
        </CvSection>
      </div>
    </main>
  );
}

function ResourcesPage({ copy }) {
  return (
    <main>
      <PageTitle>{copy.resources.title}</PageTitle>
      <div className="section-shell page-content">
        <section className="content-section first">
          <h2>{copy.resources.codes}</h2>
          <div className="resource-list">
            {codeResources.map((resource) => (
              <article key={resource.href}>
                <h3>
                  <ExternalLink href={resource.href}>{resource.title}</ExternalLink>
                </h3>
                <p>{resource.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2>{copy.resources.tutorials}</h2>
          <div className="resource-list">
            {tutorials.map((tutorial) => (
              <article key={tutorial.href}>
                <h3>
                  <ExternalLink href={tutorial.href}>{tutorial.title}</ExternalLink>
                </h3>
                <p>{tutorial.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section">
          <h2>{copy.resources.recommended}</h2>
          <div className="resource-groups">
            {recommendedResourceGroups.map((group) => (
              <section key={group.title} className="resource-group">
                <h3>{group.title}</h3>
                <div className="resource-list">
                  {group.resources.map((resource) => (
                    <article key={resource.href}>
                      <h4>
                        <ExternalLink href={resource.href}>
                          {resource.title}
                        </ExternalLink>
                      </h4>
                      <p>{resource.description}</p>
                    </article>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>

        <section className="content-section notes-section">
          <h2>{copy.resources.notes}</h2>
          <p>{copy.resources.notesText}</p>
        </section>
      </div>
    </main>
  );
}

function ContactPage({ copy }) {
  return (
    <main>
      <PageTitle>{copy.contact.title}</PageTitle>
      <div className="section-shell page-content contact-content">
        <section>
          <h2>{copy.contact.email}</h2>
          <p>
            <a href="mailto:zhangpengchao@mail.tsinghua.edu.cn">
              zhangpengchao@mail.tsinghua.edu.cn
            </a>
          </p>
          <p>
            <a href="mailto:pczhang1997@gmail.com">pczhang1997@gmail.com</a>
          </p>
        </section>

        <section>
          <h2>{copy.contact.affiliation}</h2>
          <p>Center for Combustion Energy</p>
          <p>Department of Energy and Power Engineering</p>
          <p>Tsinghua University, Beijing 100084, China</p>
        </section>

        <section>
          <h2>{copy.contact.profiles}</h2>
          <div className="link-list">
            {profileLinks.map((link) => (
              <ExternalLink key={link.label} href={link.href}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </section>

        <section>
          <h2>{copy.contact.social}</h2>
          <div className="link-list">
            {socialLinks.map((link) => (
              <ExternalLink key={link.label} href={link.href}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function NotFoundPage({ copy }) {
  return (
    <main>
      <PageTitle>{copy.notFound.title}</PageTitle>
      <div className="section-shell page-content">
        <p>
          <Link to="/">{copy.notFound.returnHome}</Link>
        </p>
      </div>
    </main>
  );
}

function AppLayout() {
  const [language, setLanguage] = useState(() => {
    if (typeof window === "undefined") return "en";
    return window.localStorage.getItem("site-language") === "zh" ? "zh" : "en";
  });
  const copy = COPY[language];

  useEffect(() => {
    window.localStorage.setItem("site-language", language);
    document.documentElement.lang = copy.htmlLang;
  }, [copy.htmlLang, language]);

  return (
    <>
      <ScrollToTop />
      <DocumentTitle copy={copy} />
      <Header
        copy={copy}
        language={language}
        onLanguageChange={setLanguage}
      />
      <Routes>
        <Route path="/" element={<HomePage copy={copy} language={language} />} />
        <Route
          path="/research"
          element={<ResearchPage copy={copy} language={language} />}
        />
        <Route path="/publications" element={<PublicationsPage copy={copy} />} />
        <Route path="/cv" element={<CvPage copy={copy} />} />
        <Route path="/resources" element={<ResourcesPage copy={copy} />} />
        <Route path="/contact" element={<ContactPage copy={copy} />} />
        <Route path="*" element={<NotFoundPage copy={copy} />} />
      </Routes>
      <Footer />
    </>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
