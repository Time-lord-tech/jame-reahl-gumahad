

export default function Process() {
  return (
    <section id="process">
      <div className="container">
        <div className="reveal">
          <div className="section-eyebrow">How I Work</div>
          <h2 className="section-title">My Process</h2>
          <p className="section-sub">
            A clear, collaborative process that keeps you informed at every stage — no surprises, just results.
          </p>
        </div>
        <div className="process-grid">
          {[
            {
              step: '01',
              title: 'Discovery',
              desc: 'I learn your business, goals, audience, and competitors. We align on vision, scope, and success metrics before touching any design.',
            },
            {
              step: '02',
              title: 'Strategy & Design',
              desc: 'Wireframes, moodboards, and high-fidelity mockups. You get clarity on the entire experience before development begins.',
            },
            {
              step: '03',
              title: 'Build & Refine',
              desc: 'Pixel-perfect development with ongoing feedback rounds. Fast, clean code — optimized for performance and search engines.',
            },
            {
              step: '04',
              title: 'Launch & Grow',
              desc: 'Deployment, training, and post-launch support. Your digital system is built to grow with you — not lock you in.',
            },
          ].map((st, i) => (
            <div key={i} className="process-step reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="process-step-num">{st.step}</div>
              <h3 className="process-step-title">{st.title}</h3>
              <p className="process-step-desc">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
