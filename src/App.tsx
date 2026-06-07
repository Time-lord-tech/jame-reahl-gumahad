import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Analytics } from '@vercel/analytics/react';

// Components
import Layout from './components/Layout';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Case Studies
import Golden8 from './pages/projects/Golden8';
import DentalClinic from './pages/projects/DentalClinic';
import LuxeHotel from './pages/projects/LuxeHotel';
import BlanketHotel from './pages/projects/BlanketHotel';

// Scroll to Top on page change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  
  // Reveal animations via IntersectionObserver (re-run on path change)
  useEffect(() => {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));
    return () => revealObserver.disconnect();
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="projects/golden8" element={<Golden8 />} />
          <Route path="projects/dental-clinic" element={<DentalClinic />} />
          <Route path="projects/luxe-hotel" element={<LuxeHotel />} />
          <Route path="projects/blanket-hotel" element={<BlanketHotel />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AnimatedRoutes />
      <Analytics />
    </Router>
  );
}
