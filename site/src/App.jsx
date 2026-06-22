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
  recommendedResources,
  researchAreas,
  researchProjects,
  socialLinks,
  tutorials,
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
    "/": "Pengchao Zhang",
    "/research": "Research | Pengchao Zhang",
    "/publications": "Publications | Pengchao Zhang",
    "/cv": "CV | Pengchao Zhang",
    "/resources": "Resources | Pengchao Zhang",
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
    ["/resources", "Resources"],
    ["/contact", "Contact"],
  ];

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="site-identity" to="/">
          Pengchao Zhang
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
      <div className="section-shell footer-inner">
        <span>© {new Date().getFullYear()} Pengchao Zhang</span>
        <span>Center for Combustion Energy, Tsinghua University</span>
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

function LinkGroup({ publication }) {
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
        <ExternalLink href={publication.freeAccess}>Shared copy</ExternalLink>
      )}
      {publication.code && (
        <ExternalLink href={publication.code}>Code &amp; data</ExternalLink>
      )}
    </div>
  );
}

function PublicationEntry({ publication, compact = false }) {
  return (
    <article className={compact ? "publication-entry compact" : "publication-entry"}>
      <div className="publication-year">{publication.year}</div>
      <div>
        <h2>{publication.title}</h2>
        {!compact && <p>{publication.authors}</p>}
        <p className="publication-details">
          {compact ? publication.journal : publication.details}
        </p>
        <LinkGroup publication={publication} />
      </div>
    </article>
  );
}

function HomePage() {
  const featured = publications.filter((publication) => publication.featured);

  return (
    <main className="section-shell">
      <section className="home-intro">
        <div className="home-text">
          <h1>Pengchao Zhang</h1>
          <p className="position">
            Postdoctoral Fellow and Assistant Researcher<br />
            Center for Combustion Energy, Tsinghua University
          </p>
          <p>
            I am a Shuimu Tsinghua Scholar working on computational chemistry and
            molecular simulation. My research focuses on aqueous interfaces,
            water self-ions, nanobubble dynamics, and reaction mechanisms using
            machine-learned potentials and enhanced sampling.
          </p>
          <div className="inline-links" aria-label="Academic profiles">
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

      <section className="content-section">
        <h2>Research Interests</h2>
        <ul className="plain-list">
          {researchAreas.map((area) => (
            <li key={area.number}>{area.title}</li>
          ))}
        </ul>
      </section>

      <section className="content-section">
        <div className="section-heading">
          <h2>Selected Publications</h2>
          <Link to="/publications">Full list</Link>
        </div>
        <div className="publication-stack">
          {featured.map((publication) => (
            <PublicationEntry
              key={publication.doi}
              publication={publication}
              compact
            />
          ))}
        </div>
      </section>
    </main>
  );
}

function ResearchPage() {
  return (
    <main>
      <PageTitle>Research</PageTitle>
      <div className="section-shell page-content">
        <section className="research-list">
          {researchAreas.map((area) => (
            <article key={area.number}>
              <h2>{area.title}</h2>
              <p>{area.description}</p>
            </article>
          ))}
        </section>

        <section className="content-section">
          <div className="section-heading">
            <h2>Research Repositories</h2>
            <ExternalLink href="https://github.com/Zhang-pchao/research">
              Complete archive
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
      </div>
    </main>
  );
}

function PublicationsPage() {
  return (
    <main>
      <PageTitle>Publications</PageTitle>
      <div className="section-shell page-content">
        <div className="publication-stack full">
          {publications.map((publication) => (
            <PublicationEntry key={publication.doi} publication={publication} />
          ))}
        </div>
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

function CvPage() {
  return (
    <main>
      <PageTitle>Curriculum Vitae</PageTitle>
      <div className="section-shell page-content cv-content">
        <CvSection id="appointments" title="Appointments">
          <TimelineEntry
            period="Jul 2025–present"
            title="Postdoctoral Fellow and Assistant Researcher"
            institution="Center for Combustion Energy, Tsinghua University"
          >
            <p>Shuimu Tsinghua Scholar. Postdoctoral advisor: Prof. Chao Sun.</p>
          </TimelineEntry>
        </CvSection>

        <CvSection id="education" title="Education">
          <TimelineEntry
            period="Sep 2020–Jun 2025"
            title="Ph.D. in Power Engineering and Engineering Thermophysics"
            institution="Tsinghua University"
          >
            <p>
              Focus: theoretical and computational chemistry. Advisor: Prof.
              Xuefei Xu.
            </p>
            <p>
              Dissertation: Theoretical Computational Study of Water Self-Ion
              Distributions at Aqueous Interfaces and Their Effects on
              Physicochemical Processes.
            </p>
          </TimelineEntry>
          <TimelineEntry
            period="Sep 2016–Jun 2020"
            title="B.Eng. in New Energy Science and Engineering"
            institution="Huazhong University of Science and Technology"
          >
            <p>Research mentor: Prof. Hongyun Hu.</p>
          </TimelineEntry>
        </CvSection>

        <CvSection id="visiting" title="Visiting Research">
          <TimelineEntry
            period="Nov 2022–Nov 2023"
            title="Visiting Ph.D. Researcher"
            institution="Italian Institute of Technology"
          >
            <p>Host: Prof. Michele Parrinello, Atomistic Simulations.</p>
            <p>
              Enhanced sampling and deep-potential molecular simulation of
              water-self-ion-mediated glycine tautomerism.
            </p>
          </TimelineEntry>
        </CvSection>

        <CvSection id="patents" title="Granted Patents">
          <div className="record-list">
            {patents.map((patent) => (
              <article key={patent.number}>
                <h3>{patent.title}</h3>
                <p>{patent.authors}</p>
                <p>{patent.number}; granted {patent.date}.</p>
              </article>
            ))}
          </div>
        </CvSection>

        <CvSection id="talks" title="Academic Exchange">
          <div className="record-list">
            <article>
              <h3>Invited oral presentation, 5th ABACUS Developer Conference</h3>
              <p>2025</p>
              <p>
                Electric Field and Interface Modulation of Glycine Tautomerism in
                Solution: A Study Using ABACUS, DeePKS, DeePMD, and OPES with
                Voronoi CVs.
              </p>
            </article>
          </div>
        </CvSection>

        <CvSection id="honors" title="Honors and Awards">
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

function ResourcesPage() {
  return (
    <main>
      <PageTitle>Resources</PageTitle>
      <div className="section-shell page-content">
        <section className="content-section first">
          <h2>Tutorials</h2>
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
          <h2>Recommended Learning Resources</h2>
          <div className="resource-list">
            {recommendedResources.map((resource) => (
              <article key={resource.href}>
                <h3>
                  <ExternalLink href={resource.href}>{resource.title}</ExternalLink>
                </h3>
                <p>{resource.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section notes-section">
          <h2>Notes</h2>
          <p>
            Technical notes and longer-form tutorials will be published here as
            the collection develops.
          </p>
        </section>
      </div>
    </main>
  );
}

function ContactPage() {
  return (
    <main>
      <PageTitle>Contact</PageTitle>
      <div className="section-shell page-content contact-content">
        <section>
          <h2>Email</h2>
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
          <h2>Affiliation</h2>
          <p>Center for Combustion Energy</p>
          <p>Department of Energy and Power Engineering</p>
          <p>Tsinghua University, Beijing 100084, China</p>
        </section>

        <section>
          <h2>Academic Profiles</h2>
          <div className="link-list">
            {profileLinks.map((link) => (
              <ExternalLink key={link.label} href={link.href}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </section>

        <section>
          <h2>Social</h2>
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

function NotFoundPage() {
  return (
    <main>
      <PageTitle>Page Not Found</PageTitle>
      <div className="section-shell page-content">
        <p>
          <Link to="/">Return to the home page.</Link>
        </p>
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
        <Route path="/resources" element={<ResourcesPage />} />
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
