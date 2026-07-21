import { Coffee, Globe, Zap, Heart } from 'lucide-react';
import profileImg from '../Images/Profile_image_MrPedro.png';

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '40+', label: 'Projects Shipped' },
  { value: '25+', label: 'Happy Clients' },
  { value: '99%', label: 'Uptime Record' },
];

const traits = [
  { Icon: Zap, title: 'Performance-first', desc: 'Sub-second loads, optimized assets, and Core Web Vitals in the green.' },
  { Icon: Globe, title: 'Fullstack Coverage', desc: 'From schema design to deployment — front, back, and everything between.' },
  { Icon: Coffee, title: 'Clean & Maintainable', desc: 'Typed, tested, and documented code your future team will thank you for.' },
  { Icon: Heart, title: 'User Obsessed', desc: 'Accessible, responsive interfaces designed around real human behavior.' },
];

export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-grid">
        <div className="about-profile reveal">
          <div className="about-profile-wrap">
            <div className="about-profile-glow" />
            <div className="about-profile-card">
              <img
                src={profileImg}
                alt="MrPedro, fullstack web developer"
                className="about-profile-img"
                loading="lazy"
              />
              <div className="about-status">
                <span className="status-dot-wrap">
                  <span className="status-ping" />
                  <span className="status-dot" />
                </span>
                <div>
                  <p className="status-text-title">Available for new projects</p>
                  <p className="status-text-sub">Remote · Worldwide</p>
                </div>
              </div>
            </div>
            <div className="about-badge glass">
              <p className="about-badge-value">5+</p>
              <p className="about-badge-label">Years coding</p>
            </div>
          </div>
        </div>

        <div className="about-bio reveal">
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            I turn ideas into reliable, scalable web applications.
          </h2>
          <div className="about-bio-text">
            <p>
              I'm MrPedro, a fullstack web developer with a passion for building products that feel effortless to use. I specialize in the React and Next.js ecosystem on the frontend, and Node.js with Supabase, Firebase, and MongoDB on the backend.
            </p>
            <p>
              Over the past 5+ years I've shipped 40+ projects — from SaaS dashboards and e-commerce platforms to real-time apps and content sites. I care deeply about performance, accessibility, and writing code that's a pleasure to maintain.
            </p>
            <p>
              When I'm not coding, you'll find me exploring new tools, contributing to open source, or mentoring junior developers. I believe great software is built with empathy — for the user and the next developer.
            </p>
          </div>

          <div className="about-traits">
            {traits.map(({ Icon, title, desc }) => (
              <div key={title} className="trait-card">
                <div className="trait-head">
                  <span className="trait-icon">
                    <Icon size={20} />
                  </span>
                  <h3 className="trait-title">{title}</h3>
                </div>
                <p className="trait-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="about-stats reveal" style={{ maxWidth: '80rem', margin: '5rem auto 0', paddingInline: '1.25rem' }}>
        {stats.map((s) => (
          <div key={s.label} className="stat-card">
            <p className="stat-value">{s.value}</p>
            <p className="stat-label">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
