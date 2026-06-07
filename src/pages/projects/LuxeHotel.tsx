import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function LuxeHotel() {
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
        <h1 className="section-title">Luxe Hotel Redesign</h1>
        <p className="project-desc" style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '2rem' }}>
          Full brand refresh and website redesign for a boutique hotel — luxury aesthetic, fast performance, and a seamless reservation experience.
        </p>
        
        <div className="project-chips" style={{ marginBottom: '4rem' }}>
          {['Branding', 'Web Design', 'UI/UX'].map((chip, i) => (
            <span key={i} className="project-chip">{chip}</span>
          ))}
        </div>

        <div className="case-study-content">
          <h2>Overview</h2>
          <p>We partnered with Luxe Hotel to completely reimagine their digital identity, elevating it to match their premium in-person guest experience.</p>
          
          <h2 style={{ marginTop: '2rem' }}>Design Philosophy</h2>
          <p>Embracing a minimalist and sophisticated design language, we used high-quality typography, subtle micro-animations, and expansive imagery to convey luxury.</p>

          <h2 style={{ marginTop: '2rem' }}>The Outcome</h2>
          <p>The new platform not only captivates visitors but streamlines the booking process, resulting in higher conversion rates and enhanced brand perception.</p>
        </div>
      </div>
    </motion.div>
  );
}
