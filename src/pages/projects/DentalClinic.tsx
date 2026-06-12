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
        <h1 className="section-title">Dentist WaaS Engine</h1>
        <p className="project-desc" style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '2rem' }}>
          A scalable Website-as-a-Service architecture built for rapid cloning. Features instant lead capture, automated 5-star review generation, and local SEO.
        </p>
        
        <div className="project-chips" style={{ marginBottom: '4rem' }}>
          {['WaaS Architecture', 'React', 'Automated Outreach', 'Local SEO', 'Cloning Engine'].map((chip, i) => (
            <span key={i} className="project-chip">{chip}</span>
          ))}
        </div>

        <div className="case-study-content">
          <h2>Overview</h2>
          <p>The <strong>Dentist WaaS Engine</strong> was engineered to solve a recurring problem for local dental clinics: the lack of a system that actively generates leads and patient reviews. Rather than building one-off websites, this project acts as a "Master Template" and <strong>Cloning Engine</strong> designed for rapid deployment.</p>
          
          <h2 style={{ marginTop: '2rem' }}>Key Capabilities</h2>
          <ul>
            <li><strong>Centralized Configuration:</strong> A single source-of-truth configuration file allowing complete reskinning (brand, data, links) in under a minute.</li>
            <li><strong>Automated Outreach Integration:</strong> Hooked into a custom Node.js GWS CLI script to automatically pitch prospective clinics with live demo links.</li>
            <li><strong>Patient Experience:</strong> Features interactive patient timelines, dynamic SEO, and sticky service navigation.</li>
          </ul>

          <h2 style={{ marginTop: '2rem' }}>Impact</h2>
          <p>By transitioning to a WaaS model, this architecture allows for the rapid scaling of a high-ticket subscription service, providing immense value to dental clinics through the 3-Pillar Growth System.</p>

          <div style={{ marginTop: '4rem' }}>
            <a href="https://tandent-alibagu.vercel.app" target="_blank" rel="noopener noreferrer" className="btn btn-white" style={{ display: 'inline-flex', textDecoration: 'none', marginTop: '2rem' }}>
              Visit Live Site (Clone Example)
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
