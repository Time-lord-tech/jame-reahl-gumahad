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
          {/* Luxe Hotel */}
          <Link
            to="/projects/luxe-hotel"
            className="project-card reveal"
            id="project-luxe"
          >
            <div className="project-thumb">
              <img src="/assets/project-luxe.png" className="project-thumb-img" alt="Luxe Hotel Web App" />
              <div className="project-type-badge">Hospitality · Next-Gen UX</div>
            </div>
            <div className="project-body">
              <div className="project-meta">2026 · Full-Stack Development</div>
              <h3 className="project-title">Luxe Hotel Web App</h3>
              <p className="project-desc">
                High-end hospitality platform engineered to capture luxury bookings with dynamic room availability, dark-mode elegance, and immersive workflows.
              </p>
              <div className="project-impact">
                <strong>Impact</strong>
                Increased direct booking conversions through a frictionless, high-value guest experience.
              </div>
              <div className="project-chips">
                {['React', 'Next-Gen UX', 'Booking Engine', 'Framer Motion'].map((chip, i) => (
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
                Built a custom Supabase booking architecture for a premium beachfront resort to bypass third-party OTA commission fees.
              </p>
              <div className="project-impact">
                <strong>Impact</strong>
                100% ownership of guest data and zero commission fees on direct villa reservations.
              </div>
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
                Designed a high-converting lead generation portal for an accredited environmental consultancy, replacing an outdated static site.
              </p>
              <div className="project-impact">
                <strong>Impact</strong>
                Streamlined compliance inquiries and centralized lead capture via interactive service grids.
              </div>
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

          {/* Dental Clinic (WaaS) */}
          <Link
            to="/projects/dental-clinic"
            className="project-card reveal reveal-delay-1"
            id="project-dental"
          >
            <div className="project-thumb">
              <img src="/assets/project-dental.png" className="project-thumb-img" alt="TanDent Dental Clinic" />
              <div className="project-type-badge">WaaS · Master Template</div>
            </div>
            <div className="project-body">
              <div className="project-meta">2026 · Systems Architecture</div>
              <h3 className="project-title">Dentist WaaS Engine</h3>
              <p className="project-desc">
                Engineered a scalable Website-as-a-Service architecture designed for rapid deployment across local dental clinics.
              </p>
              <div className="project-impact">
                <strong>Impact</strong>
                Deploys a full 3-Pillar Growth System (Lead Gen, Reviews, Reactivation) in under 5 minutes.
              </div>
              <div className="project-chips">
                {['WaaS', 'React', 'Cloning Engine', 'Local SEO'].map((chip, i) => (
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
                Developed a cohesive digital catalog for a boutique hotel and specialty coffee lab to drive local foot traffic and room reservations.
              </p>
              <div className="project-impact">
                <strong>Impact</strong>
                Dramatically increased organic search visibility and direct cafe menu discovery in Isabela.
              </div>
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
