import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-orb"></div>
      <div className="container">
        <div className="hero-inner">
          <div className="hero-left">
            <div className="hero-status">
              <span className="status-dot"></span>
              Available for new projects
            </div>
            <h1 className="hero-name">
              Jame<br />
              <em>Reahl.</em>
            </h1>
            <p className="hero-role">
              Freelance Designer<br />&amp; Digital Strategist
            </p>
            <p className="hero-desc">
              I craft <strong>premium digital experiences</strong> — from conversion-focused websites and e-commerce platforms to complete brand identities and automated sales systems. Based in the Philippines. Working worldwide.
            </p>
            <div className="hero-actions">
              <Link to="/contact" className="btn btn-white" id="hero-cta-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Start a Project
              </Link>
              <a href="#projects" className="btn btn-outline" id="hero-cta-secondary">
                View My Work
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="stat-num">5+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">7</div>
                <div className="stat-label">Services Offered</div>
              </div>
              <div className="stat-item">
                <div className="stat-num">24</div>
                <div className="stat-label">Years Old</div>
              </div>
            </div>
          </div>

          <div className="hero-photo-side">
            <div className="hero-photo-frame">
              <div className="photo-deco-corner tl"></div>
              <div className="photo-deco-corner tr"></div>
              <div className="photo-deco-corner bl"></div>
              <div className="photo-deco-corner br"></div>
              <img src="assets/profile.jpg" alt="Jame Reahl Gumahad — Freelance Web Designer" />

              <div className="hero-float fl-top" id="float-status">
                <div className="float-title">Status</div>
                <div className="float-value">Open</div>
                <div className="float-sub">For Projects</div>
              </div>
              <div className="hero-float fl-bot" id="float-projects">
                <div className="float-title">Projects</div>
                <div className="float-value">5+</div>
                <div className="float-sub">Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
