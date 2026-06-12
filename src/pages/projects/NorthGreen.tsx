import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function NorthGreen() {
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
        <h1 className="section-title">North Green Environmental Consultancy</h1>
        <p className="project-desc" style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '2rem' }}>
          State-of-the-art web portal for a DENR-EMB accredited environmental compliance firm featuring interactive services, sleek bento grid layouts, and advanced animations.
        </p>
        
        <div className="project-chips" style={{ marginBottom: '4rem' }}>
          {['Aceternity UI', 'React', 'Bento Grid', 'TailwindCSS', 'Local SEO'].map((chip, i) => (
            <span key={i} className="project-chip">{chip}</span>
          ))}
        </div>

        <div className="case-study-content">
          <h2>Overview</h2>
          <p>North Green Environmental Consultancy is a premier environmental compliance and auditing firm. They needed a high-performance web platform that matches their corporate credibility and offers a seamless way for clients to request environmental impact assessments and compliance tracking.</p>
          
          <h2 style={{ marginTop: '2rem' }}>The Challenge</h2>
          <p>The environmental consulting sector is heavily document-driven and complex. The client required a site that could explain highly technical services (like EIS, IEE, and CNC applications) without overwhelming the user, while establishing visual authority and trustworthiness.</p>

          <h2 style={{ marginTop: '2rem' }}>The Solution</h2>
          <p>We built a sleek, dark-themed React application styled with premium custom CSS and modern bento grid components. Key compliance workflows are categorized into interactive cards, supported by neon accent borders and smooth hover effects. Strategic search engine optimization ensures high local visibility for commercial audits in Isabela.</p>

          <div style={{ marginTop: '4rem' }}>
            <a href="https://north-green-environmental.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-white" style={{ display: 'inline-flex', textDecoration: 'none', marginTop: '2rem' }}>
              Visit Live Site
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
