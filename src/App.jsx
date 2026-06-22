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
  honors,
  patents,
  profileLinks,
  publications,
  researchAreas,
  researchProjects,
} from "./data.js";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function DocumentTitle() {
  const { pathname } = useLocation();
  const pageTitles = {
    "/": "Pengchao Zhang | Computational Chemistry",
    "/research": "Research | Pengchao Zhang",
    "/publications": "Publications | Pengchao Zhang",
    "/cv": "CV | Pengchao Zhang",
    "/contact": "Contact | Pengchao Zhang",
  };

  useEffect(() => {
    document.title = pageTitles[pathname] || "Pengchao Zhang";
  }, [pathname]);

  return null;
}

function ExternalLink({ href, children, className = "" }) {
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const navItems = [
    ["/", "Home"],
    ["/research", "Research"],
    ["/publications", "Publications"],
    ["/cv", "CV"],
    ["/contact", "Contact"],
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="site-identity" to="/" aria-label="Pengchao Zhang home">
          <strong>Pengchao Zhang</strong>
          <span>Computational Chemistry · Molecular Simulation</span>
        </Link>

        <button
          className="menu-button"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation ${menuOpen ? "is-open" : ""}`}
          aria-label="Primary navigation"
        >
          {navItems.map(([path, label]) => (
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
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell footer-main">
        <div>
          <p className="eyebrow">Pengchao Zhang</p>
          <p className="footer-statement">
            Molecular simulation, enhanced sampling, and machine-learned atomistic models.
          </p>
        </div>
        <div className="footer-contact">
          <a href="mailto:zhangpengchao@mail.tsinghua.edu.cn">
            zhangpengchao@mail.tsinghua.edu.cn
          </a>
          <p>Center for Combustion Energy, Tsinghua University</p>
          <p>Beijing 100084, China</p>
        </div>
      </div>
      <div className="section-shell footer-base">
        <p>© {new Date().getFullYear()} Pengchao Zhang</p>
        <div>
          <ExternalLink href="https://orcid.org/0000-0002-6556-6588">ORCID</ExternalLink>
          <ExternalLink href="https://github.com/Zhang-pchao">GitHub</ExternalLink>
          <ExternalLink href="https://scholar.google.com/citations?user=ixSzxT8AAAAJ&hl=en">
            Google Scholar
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}

function PageIntro({ eyebrow, title, description }) {
  return (
    <section className="page-intro section-shell">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
    </section>
  );
}

function LinkGroup({ publication }) {
  return (
    <div className="publication-links">
      <ExternalLink href={publication.doi}>DOI</ExternalLink>
      {publication.pdf && (
        <a href={publication.pdf} download>
          PDF
        </a>
      )}
      {publication.code && <ExternalLink href={publication.code}>Code & data</ExternalLink>}
      {publication.preprint && (
        <ExternalLink href={publication.preprint.href}>
          {publication.preprint.label}
        </ExternalLink>
      )}
      {publication.freeAccess && (
        <ExternalLink href={publication.freeAccess}>Author share</ExternalLink>
      )}
    </div>
  );
}

function CompactPublication({ publication }) {
  return (
    <article className="compact-publication">
      <p className="publication-kicker">
        {publication.year} · {publication.journal}
      </p>
      <h3>{publication.title}</h3>
      <LinkGroup publication={publication} />
    </article>
  );
}

function HomePage() {
  const featured = publications.filter((publication) => publication.featured);

  return (
    <main>
      <section className="home-hero section-shell">
        <div className="home-copy">
          <p className="eyebrow">Postdoctoral fellow · Assistant researcher</p>
          <h1>
            Pengchao Zhang
            <span>Computational chemistry at aqueous interfaces</span>
          </h1>
          <p className="home-summary">
            I study ion distributions, nanobubble dynamics, and interfacial reaction
            mechanisms using deep-potential molecular dynamics and enhanced sampling.
          </p>
          <div className="action-row">
            <Link className="primary-action" to="/research">Research overview</Link>
            <Link className="secondary-action" to="/publications">Publications & PDFs</Link>
          </div>
          <div className="profile-links" aria-label="Academic profiles">
            {profileLinks.map((link) => (
              <ExternalLink key={link.label} href={link.href}>{link.label}</ExternalLink>
            ))}
          </div>
        </div>

        <figure className="profile-figure">
          <img
            src="/assets/pengchao-zhang.jpg"
            alt="Portrait of Pengchao Zhang"
            width="1000"
            height="1400"
          />
          <figcaption>
            <strong>Pengchao Zhang, Ph.D.</strong>
            <span>Tsinghua University · Beijing, China</span>
          </figcaption>
        </figure>
      </section>

      <section className="home-band">
        <div className="section-shell home-band-grid">
          <div>
            <p className="eyebrow">Current appointment</p>
            <h2>Shuimu Tsinghua Scholar</h2>
          </div>
          <p>
            Postdoctoral Fellow and Assistant Researcher at the Center for Combustion
            Energy, Department of Energy and Power Engineering, Tsinghua University.
          </p>
        </div>
      </section>

      <section className="section-shell home-section">
        <div className="section-title-row">
          <div>
            <p className="eyebrow">Research focus</p>
            <h2>Interfaces, rare events, and molecular models</h2>
          </div>
          <Link to="/research">View all research themes</Link>
        </div>
        <div className="home-focus-grid">
          {researchAreas.slice(0, 3).map((area) => (
            <article key={area.number}>
              <span>{area.number}</span>
              <h3>{area.title}</h3>
              <p>{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-publications">
        <div className="section-shell">
          <div className="section-title-row">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2>Recent publications</h2>
            </div>
            <Link to="/publications">All publications</Link>
          </div>
          <div className="compact-publication-grid">
            {featured.map((publication) => (
              <CompactPublication key={publication.doi} publication={publication} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function ResearchPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Research"
        title="Molecular mechanisms across aqueous interfaces"
        description="My research combines accurate atomistic models with enhanced sampling to resolve interfacial structures, free-energy landscapes, and rare reaction pathways."
      />

      <section className="section-shell research-page-grid">
        {researchAreas.map((area) => (
          <article className="research-page-card" key={area.number}>
            <span>{area.number}</span>
            <div>
              <h2>{area.title}</h2>
              <p>{area.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="project-section">
        <div className="section-shell">
          <div className="section-title-row">
            <div>
              <p className="eyebrow">Reproducible research</p>
              <h2>Selected computational archives</h2>
            </div>
            <ExternalLink href="https://github.com/Zhang-pchao/research">
              Complete archive
            </ExternalLink>
          </div>
          <div className="project-grid">
            {researchProjects.map((project) => (
              <article key={project.title}>
                <p>{project.topic}</p>
                <h3>{project.title}</h3>
                <span>{project.description}</span>
                <ExternalLink href={project.href}>Repository</ExternalLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function PublicationsPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Publications"
        title="Articles, preprints, and reproducibility records"
        description="Selected publications are listed with DOI records, author-provided PDF copies when available, and companion code or data repositories."
      />

      <section className="section-shell publications-page">
        <div className="publication-note">
          <p>
            For the complete and current citation record, see{" "}
            <ExternalLink href="https://scholar.google.com/citations?user=ixSzxT8AAAAJ&hl=en">
              Google Scholar
            </ExternalLink>
            . PDF availability may be updated to reflect publisher sharing policies.
          </p>
        </div>

        <ol className="publication-list">
          {publications.map((publication) => (
            <li key={publication.doi}>
              <div className="publication-meta">
                <span>{publication.year}</span>
                <span>{publication.journal}</span>
              </div>
              <div className="publication-body">
                <h2>{publication.title}</h2>
                <p>{publication.authors}</p>
                <p className="publication-details">{publication.details}</p>
                <LinkGroup publication={publication} />
              </div>
            </li>
          ))}
        </ol>
      </section>
    </main>
  );
}

function TimelineEntry({ period, title, institution, children }) {
  return (
    <article className="timeline-entry">
      <p>{period}</p>
      <div>
        <h3>{title}</h3>
        <h4>{institution}</h4>
        {children}
      </div>
    </article>
  );
}

function CvPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Curriculum vitae"
        title="Education, appointments, and recognition"
        description="A concise academic record focused on computational chemistry, molecular simulation, and interfacial science."
      />

      <div className="section-shell cv-layout">
        <aside className="cv-index" aria-label="CV sections">
          <a href="#appointments">Appointments</a>
          <a href="#education">Education</a>
          <a href="#visiting">Visiting research</a>
          <a href="#patents">Patents</a>
          <a href="#talks">Academic exchange</a>
          <a href="#honors">Honors</a>
        </aside>

        <div className="cv-content">
          <section id="appointments">
            <p className="eyebrow">Appointments</p>
            <TimelineEntry
              period="Jul 2025–present"
              title="Postdoctoral Fellow and Assistant Researcher"
              institution="Center for Combustion Energy, Tsinghua University"
            >
              <p>Shuimu Tsinghua Scholar. Postdoctoral advisor: Prof. Chao Sun.</p>
            </TimelineEntry>
          </section>

          <section id="education">
            <p className="eyebrow">Education</p>
            <TimelineEntry
              period="Sep 2020–Jun 2025"
              title="Ph.D. in Power Engineering and Engineering Thermophysics"
              institution="Tsinghua University"
            >
              <p>
                Focus: theoretical and computational chemistry. Advisor: Associate
                Professor Xuefei Xu.
              </p>
              <p>
                Dissertation: Theoretical Computational Study of Water Self-Ion
                Distributions at Aqueous Interfaces and Their Effects on Physicochemical
                Processes.
              </p>
            </TimelineEntry>
            <TimelineEntry
              period="Sep 2016–Jun 2020"
              title="B.Eng. in New Energy Science and Engineering"
              institution="Huazhong University of Science and Technology"
            >
              <p>Research mentor: Associate Professor Hongyun Hu.</p>
            </TimelineEntry>
          </section>

          <section id="visiting">
            <p className="eyebrow">Visiting research</p>
            <TimelineEntry
              period="Nov 2022–Nov 2023"
              title="Visiting Ph.D. Researcher"
              institution="Italian Institute of Technology"
            >
              <p>Host: Prof. Michele Parrinello, Atomistic Simulations.</p>
              <p>
                Collaborative project: enhanced sampling and deep-potential molecular
                simulation of water-self-ion-mediated glycine tautomerism.
              </p>
            </TimelineEntry>
          </section>

          <section id="patents">
            <p className="eyebrow">Granted invention patents</p>
            <div className="record-list">
              {patents.map((patent) => (
                <article key={patent.number}>
                  <h3>{patent.title}</h3>
                  <p>{patent.authors}</p>
                  <p>{patent.number} · Granted {patent.date}</p>
                </article>
              ))}
            </div>
          </section>

          <section id="talks">
            <p className="eyebrow">Academic exchange</p>
            <div className="record-list">
              <article>
                <h3>Invited oral presentation, 5th ABACUS Developer Conference</h3>
                <p>2025</p>
                <p>
                  Electric Field and Interface Modulation of Glycine Tautomerism in
                  Solution: A Study Using ABACUS, DeePKS, DeePMD, and OPES with Voronoi
                  CVs.
                </p>
              </article>
            </div>
          </section>

          <section id="honors">
            <p className="eyebrow">Honors and awards</p>
            <div className="honor-list">
              {honors.map((honor) => (
                <div key={`${honor.year}-${honor.title}`}>
                  <span>{honor.year}</span>
                  <p>{honor.title}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <PageIntro
        eyebrow="Contact"
        title="Research conversations and collaboration"
        description="I welcome discussions related to molecular simulation, enhanced sampling, aqueous interfaces, and reproducible computational workflows."
      />

      <section className="section-shell contact-grid">
        <div className="contact-primary">
          <p className="eyebrow">Email</p>
          <a href="mailto:zhangpengchao@mail.tsinghua.edu.cn">
            zhangpengchao@mail.tsinghua.edu.cn
          </a>
        </div>

        <div className="contact-details">
          <article>
            <p className="eyebrow">Affiliation</p>
            <h2>Center for Combustion Energy</h2>
            <p>Department of Energy and Power Engineering</p>
            <p>Tsinghua University</p>
          </article>
          <article>
            <p className="eyebrow">Office</p>
            <h2>Lee Shau Kee Science and Technology Building</h2>
            <p>Room B-530</p>
            <p>Beijing 100084, China</p>
          </article>
          <article>
            <p className="eyebrow">Profiles</p>
            <div className="contact-links">
              {profileLinks.map((link) => (
                <ExternalLink key={link.label} href={link.href}>{link.label}</ExternalLink>
              ))}
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

function NotFoundPage() {
  return (
    <main>
      <PageIntro
        eyebrow="404"
        title="Page not found"
        description="The page you requested does not exist."
      />
      <div className="section-shell not-found-link">
        <Link className="primary-action" to="/">Return home</Link>
      </div>
    </main>
  );
}

function AppLayout() {
  return (
    <>
      <ScrollToTop />
      <DocumentTitle />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/publications" element={<PublicationsPage />} />
        <Route path="/cv" element={<CvPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
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
