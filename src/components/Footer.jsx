import { Code2, Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

const socials = [
  { Icon: Github, href: 'https://github.com', label: 'GitHub' },
  { Icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { Icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
];

const nav = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'services', label: 'Services' },
  { id: 'contact', label: 'Contact' },
];

export default function Footer() {
  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <button onClick={() => go('home')} className="footer-logo">
            <span className="nav-logo-icon">
              <Code2 size={20} />
            </span>
            <span className="nav-logo-text">
              Mr<span className="nav-logo-accent">Pedro</span>
            </span>
          </button>
          <p className="footer-desc">
            Fullstack web developer building fast, accessible, and beautiful products with React, Next.js, and modern backend tools.
          </p>
          <div className="footer-socials">
            {socials.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="footer-social">
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-nav">
          <h4 className="footer-heading">Navigation</h4>
          <ul className="footer-nav-list">
            {nav.map((n) => (
              <li key={n.id}>
                <button onClick={() => go(n.id)} className="footer-nav-link">{n.label}</button>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-cta">
          <h4 className="footer-heading">Let's talk</h4>
          <p className="footer-cta-text">
            Available for freelance &amp; full-time roles. Response within 24 hours.
          </p>
          <a href="mailto:hello@mrpedro.dev" className="footer-email">
            hello@mrpedro.dev
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>

      <div className="footer-inner" style={{ paddingTop: 0, paddingBottom: '1.5rem' }}>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MrPedro. All rights reserved.</p>
          <p>Designed &amp; built with React &amp; plain CSS.</p>
        </div>
      </div>
    </footer>
  );
}
