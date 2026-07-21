import { useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';

const projects = [
  {
    id: 'p1',
    title: 'Nimbus Analytics',
    category: 'SaaS',
    description: 'A real-time analytics dashboard with live charts, role-based access, and CSV exports. Built for product teams who need answers fast.',
    tags: ['Next.js', 'Supabase', 'Tailwind', 'Chart.js'],
    image: 'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=900',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'p2',
    title: 'Marketplace Hub',
    category: 'E-commerce',
    description: 'A multi-vendor marketplace with cart, Stripe checkout, order tracking, and an admin dashboard for sellers.',
    tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=900',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
    featured: true,
  },
  {
    id: 'p3',
    title: 'ChatLoop',
    category: 'Realtime',
    description: 'A realtime chat app with presence, typing indicators, and end-to-end encrypted DMs powered by Firebase.',
    tags: ['React', 'Firebase', 'TypeScript'],
    image: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=900',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 'p4',
    title: 'TaskFlow',
    category: 'Productivity',
    description: 'A kanban + calendar productivity suite with drag-and-drop, reminders, and team workspaces.',
    tags: ['Next.js', 'Supabase', 'Tailwind'],
    image: 'https://images.pexels.com/photos/3781338/pexels-photo-3781338.jpeg?auto=compress&cs=tinysrgb&w=900',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 'p5',
    title: 'DevPort Docs',
    category: 'Content',
    description: 'A documentation site generator with MDX, full-text search, and instant preview deploys.',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    image: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=900',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
  {
    id: 'p6',
    title: 'Pulse Fitness',
    category: 'Mobile',
    description: 'A responsive fitness tracking PWA with workout plans, progress charts, and offline support.',
    tags: ['React', 'Firebase', 'PWA'],
    image: 'https://images.pexels.com/photos/4498294/pexels-photo-4498294.jpeg?auto=compress&cs=tinysrgb&w=900',
    liveUrl: 'https://example.com',
    repoUrl: 'https://github.com',
  },
];

const categories = ['All', 'SaaS', 'E-commerce', 'Realtime', 'Productivity', 'Content', 'Mobile'];

export default function Portfolio() {
  const [filter, setFilter] = useState('All');
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="portfolio">
      <div className="section-pad container">
        <div className="portfolio-head reveal">
          <div>
            <p className="section-label" style={{ marginBottom: '0.75rem' }}>Portfolio</p>
            <h2 className="section-title">Selected work &amp; case studies</h2>
          </div>
          <p className="portfolio-head-desc">
            A sample of products I've designed, built, and shipped end-to-end. Each one solves a real problem.
          </p>
        </div>

        <div className="portfolio-filters reveal">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`filter-btn${filter === c ? ' active' : ''}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="portfolio-grid">
          {filtered.map((p) => (
            <article key={p.id} className="project-card reveal">
              <div className="project-img-wrap">
                <img src={p.image} alt={p.title} loading="lazy" className="project-img" />
                <div className="project-img-overlay" />
                {p.featured && (
                  <span className="project-featured-badge">
                    <Star size={12} className="fill-current" /> Featured
                  </span>
                )}
                <div className="project-links">
                  {p.liveUrl && (
                    <a href={p.liveUrl} target="_blank" rel="noreferrer" aria-label={`${p.title} live site`} className="project-link">
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {p.repoUrl && (
                    <a href={p.repoUrl} target="_blank" rel="noreferrer" aria-label={`${p.title} repository`} className="project-link">
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
              <div className="project-body">
                <span className="project-category">{p.category}</span>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.description}</p>
                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span key={t} className="project-tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
