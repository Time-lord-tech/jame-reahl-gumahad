import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Golden8() {
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
        <h1 className="section-title">Golden 8 Resort</h1>
        <p className="project-desc" style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '2rem' }}>
          Premium beachfront resort booking platform featuring teepee cottages, family villas, an interactive booking system, and local SEO optimizations.
        </p>
        
        <div className="project-chips" style={{ marginBottom: '4rem' }}>
          {['Web Design', 'React', 'Supabase Database', 'Booking Flow', 'Local SEO'].map((chip, i) => (
            <span key={i} className="project-chip">{chip}</span>
          ))}
        </div>

        <div className="case-study-content">
          <h2>Overview</h2>
          <p>We designed and developed a fully custom reservation platform for Golden 8 Resort in Casiguran, Aurora. The system allows guests to explore accommodation types (teepee cottages, family villas, floating cottages) and book rooms directly.</p>
          
          <h2 style={{ marginTop: '2rem' }}>The Challenge</h2>
          <p>The resort lacked a modern digital booking process and relied heavily on third-party platforms with high commissions. They needed a high-end showcase website and a secure, proprietary direct-booking system to control guest relations and maximize profit margins.</p>

          <h2 style={{ marginTop: '2rem' }}>The Solution</h2>
          <p>We engineered a highly performant React-based frontend integrated with a Supabase database to handle room availability, pricing tiers, and direct guest inquiries. We also implemented localized search optimization, ranking them top of local search categories in Aurora.</p>

          <div style={{ marginTop: '4rem' }}>
            <a href="https://golden-8-resort-redesign.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-white" style={{ display: 'inline-flex', textDecoration: 'none', marginTop: '2rem' }}>
              Visit Live Site
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
