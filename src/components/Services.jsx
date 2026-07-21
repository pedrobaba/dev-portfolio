import { Code2, Server, PenTool, Rocket, Search, Layers } from 'lucide-react';

const services = [
  {
    icon: 'code',
    title: 'Frontend Development',
    description: 'Pixel-perfect, responsive interfaces built with React, Next.js, and Tailwind CSS — accessible and lightning fast.',
    features: ['React & Next.js apps', 'Design system setup', 'Performance audits'],
  },
  {
    icon: 'server',
    title: 'Backend & APIs',
    description: 'Robust Node.js services with REST or GraphQL APIs, authentication, validation, and clean architecture.',
    features: ['REST & GraphQL APIs', 'Auth & permissions', 'Third-party integrations'],
  },
  {
    icon: 'database',
    title: 'Database & Backend-as-a-Service',
    description: 'Schema design and realtime features with Supabase and Firebase, or document stores with MongoDB.',
    features: ['Supabase & Firebase', 'MongoDB modeling', 'Realtime subscriptions'],
  },
  {
    icon: 'pen',
    title: 'UI/UX Implementation',
    description: 'Turning Figma designs into polished, animated, production-ready interfaces that match the vision.',
    features: ['Figma to code', 'Micro-interactions', 'Responsive layouts'],
  },
  {
    icon: 'rocket',
    title: 'Deployment & DevOps',
    description: 'CI/CD pipelines, preview deploys, and zero-downtime releases on Vercel, Netlify, or your cloud.',
    features: ['CI/CD pipelines', 'Vercel & Netlify', 'Docker basics'],
  },
  {
    icon: 'search',
    title: 'Consulting & Code Review',
    description: 'Architecture reviews, performance audits, and mentoring for teams leveling up their React practice.',
    features: ['Architecture review', 'Performance tuning', 'Team mentoring'],
  },
];

const iconMap = {
  code: Code2,
  server: Server,
  database: Layers,
  pen: PenTool,
  rocket: Rocket,
  search: Search,
};

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="section-pad container">
        <div className="section-header reveal">
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Services</p>
          <h2 className="section-title">How I can help your project</h2>
          <p>From a single feature to a full product launch — flexible engagement models that fit your needs.</p>
        </div>

        <div className="services-grid">
          {services.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.title} className="service-card reveal">
                <div className="service-card-glow" />
                <span className="service-icon">
                  <Icon size={28} />
                </span>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.description}</p>
                <ul className="service-features">
                  {s.features.map((f) => (
                    <li key={f} className="service-feature">
                      <span className="service-feature-dot" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
