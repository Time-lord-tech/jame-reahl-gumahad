import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="projects-header reveal">
          <div>
            <div className="section-eyebrow">Selected Work</div>
            <h2 className="section-title">Recent Projects</h2>
          </div>
          <Link to="/contact" className="view-all-link">
            Start Your Project
            <svg viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="projects-grid">
          {/* Golden 8 Resort */}
          <Link
            to="/projects/golden8"
            className="project-card reveal"
            id="project-golden8"
          >
            <div className="project-thumb">
              <img src="/assets/project-golden8.png" className="project-thumb-img" alt="Golden 8 Resort" />
              <div className="project-type-badge">Resort · Booking System</div>
            </div>
            <div className="project-body">
              <div className="project-meta">2026 · Web Design + Development</div>
              <h3 className="project-title">Golden 8 Resort</h3>
              <p className="project-desc">
                Premium beachfront resort booking platform in Casiguran, Aurora. Features family villas, teepee cottages, Supabase booking, and local SEO.
              </p>
              <div className="project-chips">
                {['React', 'Supabase', 'Booking Flow', 'Local SEO'].map((chip, i) => (
                  <span key={i} className="project-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-arrow">
              <svg viewBox="0 0 24 24">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </div>
          </Link>

          {/* North Green Environmental */}
          <Link to="/projects/north-green" className="project-card reveal reveal-delay-1" id="project-northgreen">
            <div className="project-thumb">
              <img src="/assets/project-northgreen.png" className="project-thumb-img" alt="North Green Environmental Consultancy" />
              <div className="project-type-badge">Consultancy · Bento Grid</div>
            </div>
            <div className="project-body">
              <div className="project-meta">2026 · UI/UX + Web Design</div>
              <h3 className="project-title">North Green Environmental</h3>
              <p className="project-desc">
                Accredited environmental consultancy portal featuring interactive service grids, compliance calculators, and modern neon aesthetic.
              </p>
              <div className="project-chips">
                {['Aceternity UI', 'React', 'Bento Layout', 'TailwindCSS'].map((chip, i) => (
                  <span key={i} className="project-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-arrow">
              <svg viewBox="0 0 24 24">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </div>
          </Link>

          {/* Dental Clinic */}
          <Link
            to="/projects/dental-clinic"
            className="project-card reveal"
            id="project-dental"
          >
            <div className="project-thumb">
              <img src="/assets/project-dental.png" className="project-thumb-img" alt="TanDent Dental Clinic" />
              <div className="project-type-badge">Clinic · Patient Timeline</div>
            </div>
            <div className="project-body">
              <div className="project-meta">2026 · Web Design + Local SEO</div>
              <h3 className="project-title">TanDent Dental Clinic</h3>
              <p className="project-desc">
                Calming medical portal with sticky service navigation, interactive client timelines, and direct booking for Ilagan City branches.
              </p>
              <div className="project-chips">
                {['Healthcare UX', 'React', 'Timeline UI', 'Local SEO'].map((chip, i) => (
                  <span key={i} className="project-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-arrow">
              <svg viewBox="0 0 24 24">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </div>
          </Link>

          {/* Blanket Hotel */}
          <Link to="/projects/blanket-hotel" className="project-card reveal reveal-delay-1" id="project-blanket">
            <div className="project-thumb">
              <img src="/assets/project-blanket.png" className="project-thumb-img" alt="Blanket Hotel & Coffee Lab" />
              <div className="project-type-badge">Hotel · Branding & Cafe</div>
            </div>
            <div className="project-body">
              <div className="project-meta">2026 · Web Design + Branding</div>
              <h3 className="project-title">Blanket Hotel & Coffee Lab</h3>
              <p className="project-desc">
                Cozy, high-performance website for Blanket Hotel in Isabela, featuring room catalogs, Specialty Coffee menu pages, and tourism hubs.
              </p>
              <div className="project-chips">
                {['Hotel Brand', 'React', 'Specialty Cafe', 'SEO'].map((chip, i) => (
                  <span key={i} className="project-chip">
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="project-arrow">
              <svg viewBox="0 0 24 24">
                <path d="M7 17L17 7M7 7h10v10" />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
