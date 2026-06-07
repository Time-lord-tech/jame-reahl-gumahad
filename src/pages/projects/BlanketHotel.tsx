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
        <h1 className="section-title">Blanket Hotel & Coffee Lab</h1>
        <p className="project-desc" style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '2rem' }}>
          Cozy boutique hotel and coffee shop portal in Ilagan City, featuring room navigation, cafe menus, and local tourism directories.
        </p>
        
        <div className="project-chips" style={{ marginBottom: '4rem' }}>
          {['Web Design', 'React', 'Branding', 'Local SEO', 'Hospitality'].map((chip, i) => (
            <span key={i} className="project-chip">{chip}</span>
          ))}
        </div>

        <div className="case-study-content">
          <h2>Overview</h2>
          <p>Blanket Hotel & Coffee Lab is a premium boutique hotel and coffee laboratory located in Ilagan City, Isabela. They wanted to upgrade their online presence to showcase rooms, amenities, and their specialty coffee selections.</p>
          
          <h2 style={{ marginTop: '2rem' }}>Key Features</h2>
          <ul>
            <li>Modern room galleries with clear accommodation specifications and amenities.</li>
            <li>Dedicated Coffee Lab page displaying specialty coffee beans, signature brews, and cafe offerings.</li>
            <li>Customized contact integration for quick reservations and event inquiries.</li>
          </ul>

          <h2 style={{ marginTop: '2rem' }}>Impact</h2>
          <p>The updated digital catalog has made it easy for local travelers and coffee enthusiasts to discover their menu and check room rates, dramatically increasing organic engagement in Isabela.</p>

          <div style={{ marginTop: '4rem' }}>
            <a href="https://blanket-hotel.vercel.app" target="_blank" rel="noopener noreferrer" className="submit-btn" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Visit Live Site
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
