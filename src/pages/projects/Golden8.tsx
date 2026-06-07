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
          Premium resort website with integrated booking system, dynamic room showcases, and SEO optimization for local search dominance in Isabela.
        </p>
        
        <div className="project-chips" style={{ marginBottom: '4rem' }}>
          {['Web Design', 'React', 'Booking System', 'SEO'].map((chip, i) => (
            <span key={i} className="project-chip">{chip}</span>
          ))}
        </div>

        <div className="case-study-content">
          <h2>Overview</h2>
          <p>We designed and developed a high-converting reservation platform for Golden 8 Resort, allowing guests to effortlessly explore amenities and book rooms directly.</p>
          
          <h2 style={{ marginTop: '2rem' }}>The Challenge</h2>
          <p>The resort previously relied on third-party OTAs, reducing their profit margins. The goal was to build a modern, fast, and trustworthy direct-booking engine.</p>

          <h2 style={{ marginTop: '2rem' }}>The Solution</h2>
          <p>Using React and a headless CMS, we crafted a visually stunning experience. We integrated a custom booking flow and implemented rigorous local SEO strategies to rank #1 in their region.</p>

          <div style={{ marginTop: '4rem' }}>
            <a href="https://golden-8-resort-redesign.vercel.app" target="_blank" rel="noopener noreferrer" className="submit-btn" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Visit Live Site
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
