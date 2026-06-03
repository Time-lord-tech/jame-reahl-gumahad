import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Monitor scroll for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
        <a href="#hero" className="nav-logo">
          JRG<span>.</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Work</a>
          </li>
          <li>
            <a href="#process">Process</a>
          </li>
          <li>
            <a href="#contact" className="nav-cta">
              Let's Talk
            </a>
          </li>
        </ul>
        <button
          className={`nav-toggle ${isMobileMenuOpen ? 'open' : ''}`}
          id="navToggle"
          aria-label="Toggle menu"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : '';
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`nav-mobile-menu ${isMobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <a
          href="#services"
          className="mobile-link"
          onClick={() => {
            setIsMobileMenuOpen(false);
            document.body.style.overflow = '';
          }}
        >
          Services
        </a>
        <a
          href="#about"
          className="mobile-link"
          onClick={() => {
            setIsMobileMenuOpen(false);
            document.body.style.overflow = '';
          }}
        >
          About
        </a>
        <a
          href="#projects"
          className="mobile-link"
          onClick={() => {
            setIsMobileMenuOpen(false);
            document.body.style.overflow = '';
          }}
        >
          Work
        </a>
        <a
          href="#process"
          className="mobile-link"
          onClick={() => {
            setIsMobileMenuOpen(false);
            document.body.style.overflow = '';
          }}
        >
          Process
        </a>
        <a
          href="#contact"
          className="mobile-link"
          onClick={() => {
            setIsMobileMenuOpen(false);
            document.body.style.overflow = '';
          }}
        >
          Contact
        </a>
      </div>
    </>
  );
}
