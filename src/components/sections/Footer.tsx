

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-inner">
          <div className="footer-logo">
            JRG<span>.</span>
          </div>
          <p className="footer-copy">© 2025 Jame Reahl Gumahad. All rights reserved.</p>
          <button
            className="footer-back"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            id="back-to-top"
          >
            Back to top
            <svg viewBox="0 0 24 24">
              <path d="M12 19V5M5 12l7-7 7 7" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
