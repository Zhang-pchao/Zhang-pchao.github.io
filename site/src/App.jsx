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
  outreachLinks,
  patents,
  profileLinks,
  publications,
  recommendedResourceGroups,
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
        <LinkGroup publication={publication} />
      </div>
      {!compact && publication.toc && (
        <img
          className="publication-toc"
          src={publication.toc}
          alt={`Graphical abstract for ${publication.title}`}
          loading="lazy"
        />
      )}
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
            Postdoctoral Fellow<br />
            Center for Combustion Energy, Tsinghua University
          </p>
          <p>
            I am working on computational chemistry and molecular simulation. My
            research focuses on aqueous interfaces, water self-ions, nanobubble
            dynamics, and reaction mechanisms using machine-learned potentials
            and enhanced sampling. I received my Ph.D. from Tsinghua University
            and was a visiting Ph.D. researcher at the Italian Institute of
            Technology.
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

        <section className="content-section">
          <h2>Outreach and Notes</h2>
          <div className="resource-list">
            {outreachLinks.map((item) => (
              <article key={item.href}>
                <h3>
                  <ExternalLink href={item.href}>{item.title}</ExternalLink>
                </h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function PublicationsPage() {
  const papersPerPage = 10;
  const [paperPage, setPaperPage] = useState(1);
  const pageCount = Math.ceil(publications.length / papersPerPage);
  const visiblePapers = publications.slice(
    (paperPage - 1) * papersPerPage,
    paperPage * papersPerPage,
  );

  return (
    <main>
      <PageTitle>Publications</PageTitle>
      <div className="section-shell page-content">
        <section className="publication-section" id="papers">
          <h2>Papers</h2>
          <div className="publication-stack full">
            {visiblePapers.map((publication) => (
              <PublicationEntry key={publication.doi} publication={publication} />
            ))}
          </div>
          {pageCount > 1 && (
            <nav className="pagination" aria-label="Paper pages">
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
          <h2>Patents</h2>
          <div className="patent-list">
            {patents.map((patent) => (
              <article key={patent.number}>
                <div className="patent-year">{patent.date.slice(0, 4)}</div>
                <div>
                  <h3>{patent.title}</h3>
                  <p>{patent.authors}</p>
                  <p>{patent.number}; granted {patent.date}.</p>
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

function CvPage() {
  return (
    <main>
      <PageTitle>Curriculum Vitae</PageTitle>
      <div className="section-shell page-content cv-content">
        <CvSection id="appointments" title="Appointments">
          <TimelineEntry
            period="Jul 2025–present"
            title="Postdoctoral Fellow"
            institution="Center for Combustion Energy, Department of Energy and Power Engineering, Tsinghua University"
          >
            <p>
              Postdoctoral advisor:{" "}
              <ExternalLink href="https://sungroup-thu.com/">
                Prof. Chao Sun
              </ExternalLink>
              .
            </p>
            <p>
              Focus: molecular-level understanding of micro- and nanobubbles in
              aqueous environments.
            </p>
          </TimelineEntry>
        </CvSection>

        <CvSection id="education" title="Education">
          <TimelineEntry
            period="Sep 2020–Jun 2025"
            title="Ph.D. in Power Engineering and Engineering Thermophysics"
            institution="Center for Combustion Energy, Department of Energy and Power Engineering, Tsinghua University"
          >
            <p>
              Advisor:{" "}
              <ExternalLink href="https://xux-group.github.io/">
                Prof. Xuefei Xu
              </ExternalLink>
              .
            </p>
            <p>
              Focus: water self-ion distributions at aqueous interfaces and
              their effects on physicochemical processes.
            </p>
          </TimelineEntry>
          <TimelineEntry
            period="Sep 2016–Jun 2020"
            title="B.Eng. in New Energy Science and Engineering"
            institution="School of Energy and Power Engineering, Huazhong University of Science and Technology"
          >
            <p>
              Research mentor:{" "}
              <ExternalLink href="http://sklccyao.energy.hust.edu.cn/info/1079/1297.htm">
                Prof. Hongyun Hu
              </ExternalLink>
              .
            </p>
            <p>
              Focus: high-value utilization of solid waste and biomass energy
              conversion.
            </p>
          </TimelineEntry>
        </CvSection>

        <CvSection id="visiting" title="Visiting Research">
          <TimelineEntry
            period="Nov 2022–Nov 2023"
            title="Visiting Ph.D. Researcher"
            institution="Atomistic Simulations, Italian Institute of Technology"
          >
            <p>
              Host:{" "}
              <ExternalLink href="https://www.iit.it/people-details/-/people/michele-parrinello">
                Prof. Michele Parrinello
              </ExternalLink>
              .
            </p>
            <p>
              Focus: enhanced sampling and deep-potential molecular simulation
              of water-self-ion-mediated glycine tautomerism.
            </p>
          </TimelineEntry>
        </CvSection>

        <CvSection id="talks" title="Academic Exchange">
          <div className="record-list">
            <article>
              <h3>Oral presentation, 5th ABACUS Developer Conference</h3>
              <p>Jul 2025, Beijing, China</p>
              <p>
                Electric Field and Interface Modulation of Glycine Tautomerism in
                Solution: A Study Using ABACUS, DeePKS, DeePMD, and OPES with
                Voronoi CVs.
              </p>
            </article>
            <article>
              <h3>
                Oral presentation, 14th National Conference on Fluid Mechanics
              </h3>
              <p>Aug 2026, Qingdao, China</p>
              <p>
                Molecular Mechanisms of Ion-Microenvironment-Regulated
                Micro/Nanobubble Evolution.
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
