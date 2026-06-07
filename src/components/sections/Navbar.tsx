import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <Link to="/" className="nav-logo">
          JRG<span>.</span>
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact" className="nav-cta">
              Let's Talk
            </Link>
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
        <Link
          to="/"
          className="mobile-link"
          onClick={() => {
            setIsMobileMenuOpen(false);
            document.body.style.overflow = '';
          }}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="mobile-link"
          onClick={() => {
            setIsMobileMenuOpen(false);
            document.body.style.overflow = '';
          }}
        >
          About
        </Link>
        <Link
          to="/contact"
          className="mobile-link"
          onClick={() => {
            setIsMobileMenuOpen(false);
            document.body.style.overflow = '';
          }}
        >
          Contact
        </Link>
      </div>
    </>
  );
}
