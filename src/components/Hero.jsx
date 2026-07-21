import { ArrowDown, Github, Linkedin, Twitter, Sparkles } from 'lucide-react';

const stack = ['React', 'Next.js', 'Tailwind CSS', 'Supabase', 'Firebase', 'Node.js', 'MongoDB'];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg">
        <div className="hero-bg-gradient" />
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge glass">
            <Sparkles size={16} />
            Available for freelance &amp; full-time
          </span>
          <h1 className="hero-title">
            Building <span className="text-gradient">digital products</span> that people love to use.
          </h1>
          <p className="hero-desc">
            Hi, I'm <strong>MrPedro</strong> — a fullstack web developer crafting fast, accessible, and beautiful experiences from database to pixel.
          </p>

          <div className="hero-buttons">
            <a
              href="#portfolio"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-primary"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Let's Talk
            </a>
          </div>

          <div className="hero-socials">
            {[
              { Icon: Github, href: 'https://github.com/pedrobaba' },
              { Icon: Twitter, href: 'https://twitter.com/devfemii' },
              { Icon: Linkedin, href: 'https://linkedin.com/in/sogo-omolanbe' },
            ].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" className="social-icon">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="hero-code">
          <div className="code-card-wrap">
            <div className="code-card-glow" />
            <div className="code-card">
              <div className="code-bar">
                <span className="code-dot code-dot-red" />
                <span className="code-dot code-dot-yellow" />
                <span className="code-dot code-dot-green" />
                <span className="code-filename">developer.ts</span>
              </div>
              <pre className="code-block">
<code><span className="code-kw">const</span> <span className="code-var">pedro</span> = {'{'}
  <span className="code-prop">role</span>: <span className="code-str">'Fullstack Developer'</span>,
  <span className="code-prop">stack</span>: [
    <span className="code-str">'React'</span>, <span className="code-str">'Next.js'</span>,
    <span className="code-str">'Node.js'</span>, <span className="code-str">'Tailwind'</span>
  ],
  <span className="code-prop">database</span>: [<span className="code-str">'Supabase'</span>, <span className="code-str">'MongoDB'</span>],
  <span className="code-prop">focus</span>: <span className="code-str">'performance & UX'</span>,
  <span className="code-prop">available</span>: <span className="code-kw">true</span>,
{'}'};</code>
              </pre>
              <div className="code-footer">
                <p className="code-footer-label">Tech I work with</p>
                <div className="code-tags">
                  {stack.map((s) => (
                    <span key={s} className="code-tag">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <span className="hero-scroll-label">Scroll</span>
        <span className="hero-scroll-line" />
      </div>
    </section>
  );
}
