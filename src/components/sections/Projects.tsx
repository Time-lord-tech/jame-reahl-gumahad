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
            <div className="project-thumb thumb-pattern-1">
              <div className="thumb-label">Golden 8</div>
              <div className="project-type-badge">Resort · Booking System</div>
            </div>
            <div className="project-body">
              <div className="project-meta">2025 · Web Design + Development</div>
              <h3 className="project-title">Golden 8 Resort</h3>
              <p className="project-desc">
                Premium resort website with integrated booking system, dynamic room showcases, and SEO optimization for local search dominance in Isabela.
              </p>
              <div className="project-chips">
                {['Web Design', 'React', 'Booking System', 'SEO'].map((chip, i) => (
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

          {/* Hotel Redesign */}
          <Link to="/projects/luxe-hotel" className="project-card reveal reveal-delay-1" id="project-hotel">
            <div className="project-thumb thumb-pattern-2">
              <div className="thumb-label">Luxe Hotel</div>
              <div className="project-type-badge">Hotel · Brand Identity</div>
            </div>
            <div className="project-body">
              <div className="project-meta">2025 · Branding + Web Design</div>
              <h3 className="project-title">Hotel Redesign Project</h3>
              <p className="project-desc">
                Full brand refresh and website redesign for a boutique hotel — luxury aesthetic, fast performance, and a seamless reservation experience.
              </p>
              <div className="project-chips">
                {['Branding', 'Web Design', 'UI/UX'].map((chip, i) => (
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
            <div className="project-thumb thumb-pattern-3">
              <div className="thumb-label">Dental</div>
              <div className="project-type-badge">Clinic · Local SEO</div>
            </div>
            <div className="project-body">
              <div className="project-meta">2025 · Web Design + Local SEO</div>
              <h3 className="project-title">Dental Clinic Website</h3>
              <p className="project-desc">
                Clean, trust-building website for a dental practice with appointment booking integration, Google Maps SEO, and patient-focused UX.
              </p>
              <div className="project-chips">
                {['Web Design', 'Local SEO', 'Booking'].map((chip, i) => (
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
            <div className="project-thumb thumb-pattern-4">
              <div className="thumb-label">Blanket</div>
              <div className="project-type-badge">Hotel · Full Redesign</div>
            </div>
            <div className="project-body">
              <div className="project-meta">2025 · Web Design + Development</div>
              <h3 className="project-title">Blanket Hotel</h3>
              <p className="project-desc">
                Modern, responsive hotel website with a warm, sophisticated aesthetic. Focused on storytelling, direct booking, and showcasing amenities.
              </p>
              <div className="project-chips">
                {['Web Design', 'HTML/CSS/JS', 'Responsive'].map((chip, i) => (
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
