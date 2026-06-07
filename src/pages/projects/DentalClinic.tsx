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
        <h1 className="section-title">TanDent Dental Clinic</h1>
        <p className="project-desc" style={{ fontSize: '1.2rem', maxWidth: '800px', marginBottom: '2rem' }}>
          Clean, professional dental clinic portal featuring a patient timeline, interactive services showcase, and advanced booking integrations for branches in Ilagan City.
        </p>
        
        <div className="project-chips" style={{ marginBottom: '4rem' }}>
          {['Web Design', 'React', 'Healthcare UX', 'Local SEO', 'Appointment Booking'].map((chip, i) => (
            <span key={i} className="project-chip">{chip}</span>
          ))}
        </div>

        <div className="case-study-content">
          <h2>Overview</h2>
          <p>TanDent Dental Clinic (located in Alibagu and Marana, Ilagan City) needed a trusted digital platform to streamline booking, explain standard dental procedures, and showcase their modern clinic equipment and team expertise.</p>
          
          <h2 style={{ marginTop: '2rem' }}>The Approach</h2>
          <p>We designed a welcoming and calming medical layout. Visual elements focus on a sticky services scroll to keep key clinical offerings accessible, alongside an interactive patient journey/timeline designed to demystify complex treatments and reduce patient anxiety.</p>

          <h2 style={{ marginTop: '2rem' }}>Results</h2>
          <p>The system integrates seamlessly with online booking software and Facebook Messenger. Since deployment, the clinic has seen a significant boost in first-time appointment registrations and localized Google Maps inquiries.</p>

          <div style={{ marginTop: '4rem' }}>
            <a href="https://tandent-alibagu.vercel.app" target="_blank" rel="noopener noreferrer" className="submit-btn" style={{ display: 'inline-block', textDecoration: 'none' }}>
              Visit Live Site
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
