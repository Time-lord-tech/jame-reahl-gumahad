import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function BlanketHotel() {
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
        <h1 className="section-title">Blanket Hotel</h1>
        <p className="project-desc" style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '2rem' }}>
          Modern, responsive hotel website with a warm, sophisticated aesthetic. Focused on storytelling, direct booking, and showcasing amenities.
        </p>
        
        <div className="project-chips" style={{ marginBottom: '4rem' }}>
          {['Web Design', 'HTML/CSS/JS', 'Responsive'].map((chip, i) => (
            <span key={i} className="project-chip">{chip}</span>
          ))}
        </div>

        <div className="case-study-content">
          <h2>Overview</h2>
          <p>Blanket Hotel required a digital storefront that reflected the warmth and comfort of their physical locations. We delivered a responsive, engaging website built from the ground up.</p>
          
          <h2 style={{ marginTop: '2rem' }}>Key Features</h2>
          <ul>
            <li>Immersive, full-screen video hero sections to immediately capture attention.</li>
            <li>Interactive amenity maps and local guide integration.</li>
            <li>Lightning-fast load times optimized across all devices.</li>
          </ul>

          <h2 style={{ marginTop: '2rem' }}>Impact</h2>
          <p>The streamlined user journey led to a noticeable drop in bounce rates and an increase in users exploring multiple property pages.</p>
        </div>
      </div>
    </motion.div>
  );
}
