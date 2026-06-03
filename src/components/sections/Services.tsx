import { useState, useEffect, useRef } from 'react';

type ServiceItem = {
  num: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  lead: string;
  includes: string[];
  tools: string[];
  tags: string[];
};

const servicesData: ServiceItem[] = [
  {
    num: 'Service 01',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-[1.5]">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Web Design',
    desc: 'Stunning, responsive websites designed to make your brand unforgettable and your visitors convert into customers.',
    lead: 'A great website is your <strong>best-performing salesperson</strong> — working 24/7. I design visually striking, strategically structured websites that don\'t just impress visitors, they convert them into paying customers. Every pixel, every layout decision, and every call-to-action is intentional and data-informed.',
    includes: [
      'Custom design tailored to your brand',
      'Mobile-first, fully responsive layouts',
      'High-fidelity Figma mockups & prototypes',
      'Conversion-optimised page structure (CRO)',
      'Clear visual hierarchy & typography',
      'Interactive hover effects & micro-animations',
      'Multi-page or single-page architecture',
      'Final handoff with design files'
    ],
    tools: ['Figma', 'Adobe XD', 'Canva', 'Photoshop', 'Coolors', 'Google Fonts'],
    tags: ['Figma', 'Responsive', 'Conversion CRO']
  },
  {
    num: 'Service 02',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-[1.5]">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: 'Web Development',
    desc: 'Clean, performant code that loads fast, scales effortlessly, and delivers a flawless experience on every device.',
    lead: 'Beautiful designs need <strong>rock-solid code</strong> to back them up. I write clean, semantic, and maintainable code that performs fast, scales effortlessly, and works flawlessly across every browser and device. No bloated templates — every line of code is purposefully written.',
    includes: [
      'Semantic HTML5 & modern CSS3',
      'Vanilla JS or React-based interactivity',
      'WordPress custom themes & plugins',
      'Performance optimisation (Core Web Vitals)',
      'Cross-browser & cross-device testing',
      'Git version control & clean codebase',
      'Deployment on Vercel, Netlify or cPanel',
      'Post-launch support & bug fixing'
    ],
    tools: ['HTML / CSS / JS', 'React', 'Vite', 'WordPress', 'Git', 'VS Code', 'Vercel', 'Netlify'],
    tags: ['HTML/CSS/JS', 'React', 'WordPress']
  },
  {
    num: 'Service 03',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-[1.5]">
        <circle cx="12" cy="12" r="2" />
        <circle cx="12" cy="12" r="7" />
        <path d="M12 1v4M12 19v4M1 12h4M19 12h4" />
      </svg>
    ),
    title: 'UI/UX Design',
    desc: 'User-centred interfaces backed by research and design thinking. Intuitive flows that feel effortless and look premium.',
    lead: 'The best products feel <strong>effortless to use</strong>. I combine user research, design psychology, and visual craft to create interfaces that guide users naturally toward their goals — and yours. From wireframes to final prototypes, every decision is grounded in how real people think and behave.',
    includes: [
      'User persona development & research',
      'User journey mapping & flow diagrams',
      'Low-fidelity wireframes',
      'High-fidelity interactive prototypes',
      'Usability testing & iteration rounds',
      'Component design system creation',
      'Accessibility considerations (WCAG)',
      'Design handoff documentation'
    ],
    tools: ['Figma', 'FigJam', 'Maze', 'Hotjar', 'Notion', 'Whimsical'],
    tags: ['User Research', 'Wireframing', 'Prototyping']
  },
  {
    num: 'Service 04',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-[1.5]">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: 'Branding',
    desc: 'Strategic brand identities that communicate your values, differentiate from the competition, and earn trust at first glance.',
    lead: 'Your brand is more than a logo — it\'s the <strong>total impression</strong> you leave in every interaction. I develop complete brand identities that feel authentic, memorable, and consistent. From naming strategy to a full visual system, I help you show up in the world with confidence and clarity.',
    includes: [
      'Brand strategy & positioning workshop',
      'Logo design (primary, secondary, icon)',
      'Color palette & typography system',
      'Brand voice & messaging guidelines',
      'Business card & stationery design',
      'Social media branding kit',
      'Brand style guide (PDF)',
      'Brand asset files (SVG, PNG, PDF)'
    ],
    tools: ['Adobe Illustrator', 'Figma', 'Canva Pro', 'Coolors', 'Fontjoy', 'Adobe Fonts'],
    tags: ['Logo Design', 'Brand Guidelines', 'Visual Identity']
  },
  {
    num: 'Service 05',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-[1.5]">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
    ),
    title: 'Search Engine Optimization',
    desc: 'Get found on Google. Technical SEO, keyword strategy, and on-page optimization that drives organic traffic that converts.',
    lead: 'Ranking on Google isn\'t luck — it\'s <strong>strategy + execution</strong>. I implement a comprehensive SEO approach that covers your technical foundation, on-page content, and local visibility. The result: more organic traffic, more qualified leads, and less dependence on paid ads.',
    includes: [
      'Full technical SEO audit',
      'Keyword research & strategy',
      'On-page optimisation (titles, meta, headers)',
      'Google Business Profile setup & optimisation',
      'Local SEO & map pack visibility',
      'Internal linking structure',
      'Site speed & Core Web Vitals improvements',
      'Monthly performance reporting'
    ],
    tools: ['Google Search Console', 'Ahrefs', 'Semrush', 'Screaming Frog', 'PageSpeed Insights', 'Ubersuggest'],
    tags: ['On-Page SEO', 'Local SEO', 'Technical Audit']
  },
  {
    num: 'Service 06',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-[1.5]">
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22 11 13 2 9l20-7z" />
      </svg>
    ),
    title: 'Sales Funnel & Automation',
    desc: 'End-to-end automated funnels that capture leads, nurture prospects, and close sales — even while you sleep.',
    lead: 'A sales funnel is a <strong>system that sells for you</strong> — automatically. I design and build end-to-end funnels that attract strangers, capture their interest, nurture them with value, and convert them into customers without you needing to manually follow up with every single lead.',
    includes: [
      'Funnel strategy & mapping session',
      'High-converting landing page design',
      'Lead magnet creation (PDF, checklist, etc.)',
      'Email sequence setup & copywriting',
      'CRM integration & pipeline setup',
      'Instant lead notification system (SMS/email)',
      'A/B testing & conversion tracking',
      'Analytics dashboard & reporting'
    ],
    tools: ['MailerLite', 'Mailchimp', 'ConvertKit', 'Zapier', 'Make (Integromat)', 'Notion', 'Typeform'],
    tags: ['Landing Pages', 'Lead Capture', 'Email Automation']
  },
  {
    num: 'Service 07',
    icon: (
      <svg viewBox="0 0 24 24" className="w-full h-full stroke-current fill-none stroke-[1.5]">
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.59 13.51 6.83 3.98M15.41 6.51l-6.82 3.98" />
      </svg>
    ),
    title: 'Social Media Management',
    desc: 'Strategic content creation and community management that grows your audience, builds brand authority, and drives engagement.',
    lead: 'Consistent, strategic social media presence is how brands build <strong>trust, authority, and loyal communities</strong>. I manage your social channels end-to-end — from content planning and design to scheduling, posting, and monitoring engagement — so you can focus on running your business.',
    includes: [
      'Social media strategy & content calendar',
      'Platform setup & profile optimisation',
      'Custom branded graphic creation',
      'Caption writing & hashtag research',
      'Scheduled posting (Facebook, Instagram, X)',
      'Community management & DM responses',
      'Monthly analytics report & insights',
      'Story and Reel content creation'
    ],
    tools: ['Meta Business Suite', 'Buffer', 'Canva Pro', 'Later', 'Hootsuite', 'Metricool', 'ChatGPT'],
    tags: ['Content Strategy', 'Scheduling', 'Analytics', 'Engagement']
  }
];

export default function Services() {
  const [activeModalIndex, setActiveModalIndex] = useState<number | null>(null);
  const modalCloseRef = useRef<HTMLButtonElement>(null);

  const openServiceModal = (index: number) => {
    setActiveModalIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    setActiveModalIndex(null);
    document.body.style.overflow = '';
  };

  // Accessibility for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeServiceModal();
      }
    };
    if (activeModalIndex !== null) {
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => modalCloseRef.current?.focus(), 50);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeModalIndex]);

  const activeService = activeModalIndex !== null ? servicesData[activeModalIndex] : null;

  return (
    <section id="services">
      <div className="container">
        <div className="services-header reveal">
          <div className="section-eyebrow">What I Do</div>
          <h2 className="section-title">
            Full-Spectrum<br />Digital Services
          </h2>
          <p className="section-sub">
            From concept to launch — every digital touchpoint your brand needs to attract, engage, and convert customers.
          </p>
        </div>
        <div className="services-grid">
          {servicesData.map((s, idx) => (
            <button
              key={idx}
              className="service-card reveal"
              id={`svc-btn-${idx + 1}`}
              onClick={() => openServiceModal(idx)}
              style={idx === 6 ? { gridColumn: '1 / -1' } : {}}
              aria-label={`Learn more about ${s.title}`}
            >
              <div className="service-card-arrow">
                <svg viewBox="0 0 24 24" className="w-[13px] h-[13px]">
                  <path d="M7 17L17 7M7 7h10v10" />
                </svg>
              </div>
              <span className="service-num">{s.num}</span>
              <div className="service-icon-wrap">{s.icon}</div>
              <h3 className="service-name">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-tags">
                {s.tags.map((t, i) => (
                  <span key={i} className="service-tag">
                    {t}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Service Modal */}
      {activeService && (
        <div className="svc-modal-overlay open" onClick={closeServiceModal} role="dialog" aria-modal="true" aria-labelledby="modalTitle">
          <div className="svc-modal" onClick={(e) => e.stopPropagation()}>
            <div className="svc-modal-header">
              <div className="svc-modal-header-left">
                <div className="svc-modal-icon">{activeService.icon}</div>
                <div>
                  <div className="svc-modal-num">{activeService.num}</div>
                  <div className="svc-modal-title" id="modalTitle">
                    {activeService.title}
                  </div>
                </div>
              </div>
              <button
                className="svc-modal-close"
                id="modalClose"
                ref={modalCloseRef}
                onClick={closeServiceModal}
                aria-label="Close"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="svc-modal-body">
              <p className="svc-modal-lead" dangerouslySetInnerHTML={{ __html: activeService.lead }}></p>

              <div className="svc-section-label">What's Included</div>
              <div className="svc-includes-grid">
                {activeService.includes.map((item, idx) => (
                  <div key={idx} className="svc-include-item">
                    {item}
                  </div>
                ))}
              </div>

              <div className="svc-section-label">Tools &amp; Technologies</div>
              <div className="svc-tools-row">
                {activeService.tools.map((t, idx) => (
                  <span key={idx} className="svc-tool-badge">
                    {t}
                  </span>
                ))}
              </div>

              <div className="svc-modal-cta">
                <a href="#contact" className="svc-cta-btn" onClick={closeServiceModal}>
                  <svg viewBox="0 0 24 24">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                  Get a Quote for This Service
                </a>
                <button className="svc-cta-ghost" onClick={closeServiceModal}>
                  ← Back to Services
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
