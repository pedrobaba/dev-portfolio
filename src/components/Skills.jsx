import { Atom, Server, Database, Wrench, LayoutGrid as Layout, Zap, GitBranch, Shield } from 'lucide-react';

const skills = [
  { name: 'React', level: 95, category: 'Frontend' },
  { name: 'Next.js', level: 92, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 96, category: 'Frontend' },
  { name: 'CSS / Sass', level: 90, category: 'Frontend' },
  { name: 'TypeScript', level: 88, category: 'Frontend' },
  { name: 'Node.js', level: 90, category: 'Backend' },
  { name: 'Express', level: 85, category: 'Backend' },
  { name: 'REST & GraphQL', level: 84, category: 'Backend' },
  { name: 'Supabase', level: 88, category: 'Database' },
  { name: 'Firebase', level: 86, category: 'Database' },
  { name: 'MongoDB', level: 87, category: 'Database' },
  { name: 'PostgreSQL', level: 82, category: 'Database' },
  { name: 'Git & GitHub', level: 92, category: 'Tools' },
  { name: 'Docker', level: 75, category: 'Tools' },
  { name: 'CI/CD', level: 78, category: 'Tools' },
  { name: 'Vercel / Netlify', level: 90, category: 'Tools' },
];

const categories = [
  { key: 'Frontend', Icon: Layout, cls: 'frontend' },
  { key: 'Backend', Icon: Server, cls: 'backend' },
  { key: 'Database', Icon: Database, cls: 'database' },
  { key: 'Tools', Icon: Wrench, cls: 'tools' },
];

const highlights = [
  { Icon: Atom, title: 'Component Architecture', desc: 'Reusable, composable, and typed React components built to scale.' },
  { Icon: Zap, title: 'API Design', desc: 'Clean REST & GraphQL endpoints with validation and clear contracts.' },
  { Icon: GitBranch, title: 'Workflow', desc: 'Trunk-based development, PR reviews, and automated deployments.' },
  { Icon: Shield, title: 'Security', desc: 'RLS, auth flows, and input validation baked in from day one.' },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="section-pad container">
        <div className="section-header reveal">
          <p className="section-label" style={{ marginBottom: '0.75rem' }}>Skills &amp; Stack</p>
          <h2 className="section-title">Tools I use to ship great products</h2>
          <p>A modern, battle-tested stack covering the entire product lifecycle.</p>
        </div>

        <div className="skills-highlights">
          {highlights.map(({ Icon, title, desc }) => (
            <div key={title} className="highlight-card reveal">
              <span className="highlight-icon">
                <Icon size={24} />
              </span>
              <h3 className="highlight-title">{title}</h3>
              <p className="highlight-desc">{desc}</p>
            </div>
          ))}
        </div>

        <div className="skills-grid">
          {categories.map(({ key, Icon, cls }) => (
            <div key={key} className="skill-category reveal">
              <div className="skill-cat-head">
                <span className={`skill-cat-icon ${cls}`}>
                  <Icon size={20} />
                </span>
                <h3 className="skill-cat-title">{key}</h3>
              </div>
              <div className="skill-list">
                {skills
                  .filter((s) => s.category === key)
                  .map((s) => (
                    <div key={s.name}>
                      <div className="skill-row-head">
                        <span className="skill-name">{s.name}</span>
                        <span className="skill-level">{s.level}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-bar-fill" style={{ width: `${s.level}%` }} />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
