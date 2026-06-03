import { useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Marquee from './components/sections/Marquee';
import Services from './components/sections/Services';
import About from './components/sections/About';
import Projects from './components/sections/Projects';
import Process from './components/sections/Process';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  // Reveal animations via IntersectionObserver
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
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <About />
      <Projects />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <Analytics />
    </>
  );
}
