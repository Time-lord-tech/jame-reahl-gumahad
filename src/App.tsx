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
import NorthGreen from './pages/projects/NorthGreen';
import BlanketHotel from './pages/projects/BlanketHotel';
import LuxeHotel from './pages/projects/LuxeHotel';

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
  
  // Reveal animations via IntersectionObserver (handles dynamic routing)
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

    const observeElements = () => {
      document.querySelectorAll('.reveal:not(.observed)').forEach((el) => {
        el.classList.add('observed');
        revealObserver.observe(el);
      });
    };

    observeElements();

    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      revealObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="projects/golden8" element={<Golden8 />} />
          <Route path="projects/dental-clinic" element={<DentalClinic />} />
          <Route path="projects/north-green" element={<NorthGreen />} />
          <Route path="projects/blanket-hotel" element={<BlanketHotel />} />
          <Route path="projects/luxe-hotel" element={<LuxeHotel />} />
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
