import { useState } from 'react';
import { Menu, X, Code2, Send, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const navItems = [
  { href: '#portfolio', label: 'Projects' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#resume', label: 'Résumé' },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-plum/5 bg-cream/90 backdrop-blur-md dark:border-cream/5 dark:bg-[#1a1520]/90">
      <nav aria-label="Primary navigation" className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#home" className="flex items-center gap-2 font-heading text-lg font-bold text-plum dark:text-cream sm:text-xl">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal text-cream"><Code2 className="h-5 w-5" /></span>
          MrPedro
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-plum/70 hover:text-teal dark:text-cream/70 dark:hover:text-teal">{item.label}</a>)}
          <button onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} className="flex h-9 w-9 items-center justify-center rounded-lg text-plum hover:bg-plum/10 dark:text-cream dark:hover:bg-cream/10">{theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}</button>
          <a href="#contact" className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-cream hover:bg-teal/90"><Send className="h-4 w-4" /> Let&apos;s connect</a>
        </div>
        <div className="flex items-center gap-2 md:hidden">
          <button onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`} className="flex h-9 w-9 items-center justify-center rounded-lg text-plum dark:text-cream">{theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}</button>
          <button onClick={() => setMobileOpen((open) => !open)} aria-label="Toggle menu" aria-expanded={mobileOpen} aria-controls="mobile-navigation" className="text-plum dark:text-cream">{mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
        </div>
      </nav>
      {mobileOpen && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-plum/10 bg-cream px-6 py-4 dark:border-cream/10 dark:bg-[#1a1520] md:hidden">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-plum/70 hover:bg-plum/5 hover:text-teal dark:text-cream/70">{item.label}</a>)}
            <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 rounded-lg bg-teal px-4 py-3 text-center text-sm font-semibold text-cream">Let&apos;s connect</a>
          </div>
        </nav>
      )}
    </header>
  );
}