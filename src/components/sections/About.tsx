

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <div className="about-photo-frame">
              <img src="assets/profile.jpg" alt="Jame Reahl Gumahad" />
              <div className="about-photo-caption">
                <p>Jame Reahl L. Gumahad · Age 24 · Philippines</p>
              </div>
            </div>
          </div>
          <div className="about-content reveal reveal-delay-1">
            <div className="section-eyebrow">About Me</div>
            <h2 className="section-title">
              Where Aesthetics<br />Meet Strategy
            </h2>
            <p>
              I'm <strong>Jame Reahl Gumahad</strong> — a 24-year-old freelance web designer, developer, and digital strategist from the Philippines. I believe that great design isn't just about how something looks, but about how it <strong>works</strong> and what results it drives.
            </p>
            <div className="about-quote">
              "I don't just build websites — I build digital systems that grow businesses."
            </div>
            <p>
              Every project I take on starts with understanding your business goals first. Whether you need a brand identity from scratch, a high-converting landing page, or a complete digital marketing strategy — I bring the same level of craft and intentionality to every pixel and every line of code.
            </p>
            <p>
              My work spans <strong>hotels, resorts, dental clinics, restaurants,</strong> and more — businesses that needed to stand out online and turn their digital presence into a genuine revenue channel.
            </p>
            <div className="skills-grid">
              {[
                'Figma',
                'HTML / CSS',
                'JavaScript',
                'React',
                'WordPress',
                'Vite',
                'Google SEO',
                'Canva',
                'Meta Ads',
              ].map((sk, idx) => (
                <div key={idx} className="skill-item">
                  {sk}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
