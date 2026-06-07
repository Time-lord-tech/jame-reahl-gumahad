import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function DentalClinic() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      style={{ paddingTop: '100px', minHeight: '100vh' }}
    >
      <div className="container">
        <Link to="/" className="view-all-link" style={{ marginBottom: '2rem', display: 'inline-flex' }}>
          <svg viewBox="0 0 24 24" style={{ transform: 'rotate(180deg)', marginRight: '0.5rem' }}>
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
          Back to Home
        </Link>
        <div className="section-eyebrow">Case Study</div>
        <h1 className="section-title">Dental Clinic Website</h1>
        <p className="project-desc" style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '2rem' }}>
          Clean, trust-building website for a dental practice with appointment booking integration, Google Maps SEO, and patient-focused UX.
        </p>
        
        <div className="project-chips" style={{ marginBottom: '4rem' }}>
          {['Web Design', 'Local SEO', 'Booking'].map((chip, i) => (
            <span key={i} className="project-chip">{chip}</span>
          ))}
        </div>

        <div className="case-study-content">
          <h2>Overview</h2>
          <p>A professional and welcoming digital presence for a local dental clinic, designed to instill trust and make appointment scheduling frictionless for patients.</p>
          
          <h2 style={{ marginTop: '2rem' }}>The Approach</h2>
          <p>We focused on a clean, modern aesthetic utilizing calming colors. Clear calls-to-action were strategically placed to guide users toward booking their first consultation.</p>

          <h2 style={{ marginTop: '2rem' }}>Results</h2>
          <p>The new site resulted in a 40% increase in online inquiries and significantly improved their local search visibility on Google.</p>

          <div style={{ marginTop: '4rem' }}>
            <a href="https://dental-v2-olive.vercel.app" target="_blank" rel="noopener noreferrer" className="submit-btn" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Visit Live Site
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
