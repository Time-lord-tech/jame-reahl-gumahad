import { useState } from 'react';
import AnimatedSocialLinks, { type Social } from '@/components/ui/social-links';

export default function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setTimeout(() => {
          setFormSubmitted(false);
          form.reset();
        }, 3500);
      } else {
        alert(data.message || "Failed to send message.");
        setFormSubmitted(false);
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
      setFormSubmitted(false);
    }
  };

  const socials: Social[] = [
    {
      name: 'LinkedIn',
      image: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png',
      url: 'https://linkedin.com',
    },
    {
      name: 'GitHub',
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
      url: 'https://github.com',
    },
    {
      name: 'Twitter',
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6f/Logo_of_Twitter.svg',
      url: 'https://twitter.com',
    },
    {
      name: 'Facebook',
      image: 'https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg',
      url: 'https://facebook.com',
    },
    {
      name: 'Email',
      image: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Gmail_icon_%282020%29.svg',
      url: 'mailto:jeremiah.gumahad321@gmail.com',
    },
  ];

  return (
    <section id="contact">
      <div className="container">
        <div className="reveal">
          <div className="section-eyebrow">Get In Touch</div>
          <h2 className="section-title">
            Let's Build<br />Something Great
          </h2>
          <p className="section-sub">
            Have a project in mind? I'd love to hear about it. Send a message and let's make it happen.
          </p>
        </div>
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="reveal">
            <h3 className="contact-info" style={{ fontFamily: 'var(--font-display)', fontSize: '22px', fontWeight: 800, marginBottom: '14px' }}>
              Contact Information
            </h3>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '32px' }}>
              Whether you have a full brief ready or just an idea — let's start the conversation. I respond within 24 hours.
            </p>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-current fill-none stroke-[1.5]">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-val">
                  <a href="mailto:jeremiah.gumahad321@gmail.com">jeremiah.gumahad321@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-current fill-none stroke-[1.5]">
                  <circle cx="12" cy="10" r="3" />
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7 13 8 13s8-7.6 8-13a8 8 0 0 0-8-8z" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Location</div>
                <div className="contact-item-val">Philippines · Remote Worldwide</div>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" className="w-[18px] h-[18px] stroke-current fill-none stroke-[1.5]">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="contact-item-label">Response Time</div>
                <div className="contact-item-val">Within 24 hours</div>
              </div>
            </div>

            {/* INTEGRATED ANIMATED SOCIAL LINKS */}
            <div className="social-row-container mt-8" style={{ borderTop: '1px solid var(--border)', paddingTop: '24px' }}>
              <div className="contact-item-label mb-4">Connect With Me</div>
              <AnimatedSocialLinks socials={socials} />
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal reveal-delay-1">
            <form className="contact-form" id="contactForm" onSubmit={handleFormSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="fname">
                    First Name
                  </label>
                  <input className="form-input" id="fname" name="fname" type="text" placeholder="John" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="lname">
                    Last Name
                  </label>
                  <input className="form-input" id="lname" name="lname" type="text" placeholder="Smith" required />
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="email">
                  Email Address
                </label>
                <input className="form-input" id="email" name="email" type="email" placeholder="john@company.com" required />
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="service">
                  Service Interested In
                </label>
                <select className="form-select" id="service" name="service">
                  <option value="">Select a service...</option>
                  <option>Web Design</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Branding</option>
                  <option>SEO</option>
                  <option>Sales Funnel &amp; Automation</option>
                  <option>Social Media Management</option>
                  <option>Full Package</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">
                  Tell Me About Your Project
                </label>
                <textarea
                  className="form-textarea"
                  id="message"
                  name="message"
                  placeholder="Describe your project, goals, timeline, and budget if possible..."
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn-form" id="form-submit-btn" disabled={formSubmitted}>
                {formSubmitted ? (
                  <>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>{' '}
                    Message Sent!
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24">
                      <path d="M22 2 11 13" />
                      <path d="M22 2 15 22 11 13 2 9l20-7z" />
                    </svg>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
