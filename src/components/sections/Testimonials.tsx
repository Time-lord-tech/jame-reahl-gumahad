

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container">
        <div className="reveal">
          <div className="section-eyebrow">What Clients Say</div>
          <h2 className="section-title">
            Trusted by Real<br />Businesses
          </h2>
        </div>
        <div className="testimonials-grid">
          {[
            {
              avatar: 'R',
              name: 'Resort Manager',
              role: 'Golden 8 Resort · Isabela',
              text: 'Jame delivered a resort website that genuinely wowed our guests. The booking system is smooth and our online enquiries increased significantly after launch.',
            },
            {
              avatar: 'D',
              name: 'Dental Clinic Owner',
              role: 'Dental Redesign Project',
              text: 'The website refresh gave our clinic a completely new, professional look. Patients frequently compliment the site, and our Google ranking improved noticeably.',
            },
            {
              avatar: 'H',
              name: 'Hotel Operations Director',
              role: 'Hotel Redesign Project',
              text: 'Professional, reliable, and incredibly talented. Jame understood exactly what we needed and delivered beyond expectations. I\'ll be working with him again.',
            },
          ].map((t, i) => (
            <div key={i} className="testimonial-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <span className="testimonial-quote-mark">&ldquo;</span>
              <span className="testimonial-stars">★★★★★</span>
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-divider"></div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.avatar}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
