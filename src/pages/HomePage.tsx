import { ArrowRight, Github, Linkedin, Sparkles } from 'lucide-react';
import { profile } from '@/data/content';

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 pt-20">
      <div className="mx-auto max-w-4xl text-center">
        <div className="animate-fade-in-up inline-flex items-center gap-2 rounded-full bg-teal/10 px-4 py-1.5 text-sm font-medium text-teal">
          <Sparkles className="h-4 w-4" />
          Open to frontend opportunities
        </div>

        <h1 className="animate-fade-in-up mt-8 font-heading text-5xl font-extrabold text-plum dark:text-cream sm:text-7xl">
          {profile.name}
        </h1>

        <p className="animate-fade-in-up mt-3 font-heading text-2xl font-semibold text-teal sm:text-3xl">
          {profile.title}
        </p>

        <p className="animate-fade-in-up mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-plum/60 dark:text-cream/60 text-balance">
          {profile.tagline}
        </p>

        <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#portfolio" className="inline-flex items-center justify-center gap-2 rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-cream transition-all hover:bg-teal/90 hover:shadow-lg">
            View my work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-teal px-6 py-3 text-sm font-semibold text-teal transition-all hover:bg-teal hover:text-cream">
            Let&apos;s connect
          </a>
        </div>

        <div className="animate-fade-in mt-16 flex justify-center gap-4">
          <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-plum/70 transition-colors hover:bg-plum/5 hover:text-teal dark:text-cream/70 dark:hover:bg-cream/5">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold text-plum/70 transition-colors hover:bg-plum/5 hover:text-teal dark:text-cream/70 dark:hover:bg-cream/5">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
