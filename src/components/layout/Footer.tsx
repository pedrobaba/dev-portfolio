import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { profile } from '@/data/content';

const socialLinks = [
  { icon: Github, href: profile.social.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' },
  { icon: Twitter, href: profile.social.twitter, label: 'Twitter' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
];

const footerNav = [
  { href: '#home', label: 'Home' },
  { href: '#portfolio', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-plum/10 bg-plum text-cream dark:border-cream/10 dark:bg-[#131018]">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl font-bold">MrPedro</h3>
            <p className="mt-1 text-sm text-cream/60">Junior Frontend Developer</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            {footerNav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-cream/70 transition-colors hover:text-teal"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-cream/10 text-cream/70 transition-all duration-200 hover:bg-teal hover:text-cream"
              >
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-cream/10 pt-6 text-center">
          <p className="text-sm text-cream/50">
            &copy; {new Date().getFullYear()} MrPedro. Built with React.
          </p>
        </div>
      </div>
    </footer>
  );
}
