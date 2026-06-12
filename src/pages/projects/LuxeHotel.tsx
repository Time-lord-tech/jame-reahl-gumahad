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
        <h1 className="section-title">Luxe Hotel Web App</h1>
        <p className="project-desc" style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '2rem' }}>
          High-end hospitality platform featuring dynamic room availability, dark-mode elegance, and immersive booking workflows.
        </p>
        
        <div className="project-chips" style={{ marginBottom: '4rem' }}>
          {['React', 'Next-Gen UX', 'Booking Engine', 'Framer Motion'].map((chip, i) => (
            <span key={i} className="project-chip">{chip}</span>
          ))}
        </div>

        <div className="case-study-content">
          <h2>Overview</h2>
          <p>The Luxe Hotel Web App was designed to elevate the standard of digital hospitality. It provides a premium, immersive browsing experience for potential guests, blending high-quality imagery with seamless animations.</p>
          
          <h2 style={{ marginTop: '2rem' }}>Key Features</h2>
          <ul>
            <li>Immersive, dark-mode inspired UI tailored for luxury positioning.</li>
            <li>Smooth page transitions and micro-interactions powered by Framer Motion.</li>
            <li>Dynamic room inventory displays with elegant booking flows.</li>
          </ul>

          <h2 style={{ marginTop: '2rem' }}>Impact</h2>
          <p>The updated digital presence significantly boosts the brand's perceived value, leading to higher direct booking conversion rates and a more engaged customer base.</p>

          <div style={{ marginTop: '4rem' }}>
            <a href="https://hotel-website-luxe.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-white" style={{ display: 'inline-flex', textDecoration: 'none', marginTop: '2rem' }}>
              Visit Live Site
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
