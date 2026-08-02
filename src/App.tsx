import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import SkillsPage from '@/pages/SkillsPage';
import PortfolioPage from '@/pages/PortfolioPage';
import ResumePage from '@/pages/ResumePage';
import ContactPage from '@/pages/ContactPage';
import { useTheme } from '@/hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-cream transition-colors duration-300 dark:bg-[#1a1520]">
      <button
        onClick={() => document.querySelector('main')?.focus()}
        className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-md bg-teal px-4 py-2 text-sm font-semibold text-cream transition-transform focus:translate-y-0"
      >
        Skip to content
      </button>
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
      />
      <main id="main-content" tabIndex={-1} className="min-h-screen focus:outline-none">
        <section id="home"><HomePage /></section>
        <section id="portfolio"><PortfolioPage /></section>
        <section id="about"><AboutPage /></section>
        <section id="skills"><SkillsPage /></section>
        <section id="resume"><ResumePage /></section>
        <section id="contact"><ContactPage /></section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
