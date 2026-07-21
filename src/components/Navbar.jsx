import { useEffect, useState } from 'react';
import { Menu, X, Moon, Sun, Code2 } from 'lucide-react';

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'services', label: 'Services' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar({ theme, toggleTheme, activeSection }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <nav className="nav-inner">
        <button onClick={() => go('home')} className="nav-logo">
          <span className="nav-logo-icon">
            <Code2 size={20} />
          </span>
          <span className="nav-logo-text">
            Mr<span className="nav-logo-accent">Pedro</span>
          </span>
        </button>

        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.id}>
              <button
                onClick={() => go(l.id)}
                className={`nav-link${activeSection === l.id ? ' active' : ''}`}
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <button onClick={toggleTheme} aria-label="Toggle theme" className="theme-toggle">
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => go('contact')} className="nav-cta">
            Hire Me
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
            className="menu-btn"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu${open ? ' open' : ''}`}>
        <div className="mobile-menu-inner">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={`mobile-link${activeSection === l.id ? ' active' : ''}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
}
