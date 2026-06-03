

export default function Marquee() {
  const items = [
    'Web Design',
    'UI/UX Design',
    'Web Development',
    'Branding',
    'SEO',
    'Sales Funnels',
    'Social Media',
    'E-Commerce',
    'Web Design',
    'UI/UX Design',
    'Web Development',
    'Branding',
    'SEO',
    'Sales Funnels',
    'Social Media',
    'E-Commerce',
    'Web Design',
    'UI/UX Design',
    'Web Development',
    'Branding',
    'SEO',
    'Sales Funnels',
    'Social Media',
    'E-Commerce',
  ];

  return (
    <div className="marquee-section">
      <div className="marquee-track" id="marqueeTrack">
        {items.map((item, i) => (
          <div key={i} className="marquee-item">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
