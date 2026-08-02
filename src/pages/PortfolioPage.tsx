import { BookOpen, Github, Linkedin } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { profile } from '@/data/content';

export default function PortfolioPage() {
  return (
    <div className="px-6 pt-28 pb-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          title="Projects"
          subtitle="Personal projects are being documented with honest case studies as I continue building."
        />
        <div className="mx-auto max-w-2xl rounded-2xl bg-cream p-8 text-center shadow-sm ring-1 ring-plum/10 dark:bg-[#241d2c] dark:ring-cream/10 sm:p-12">
          <BookOpen className="mx-auto h-10 w-10 text-teal" />
          <h3 className="mt-5 font-heading text-xl font-bold text-plum dark:text-cream">Real work is on the way</h3>
          <p className="mt-3 text-sm leading-relaxed text-plum/60 dark:text-cream/60">
            I&apos;m replacing placeholder projects with personal projects that I can explain, demonstrate, and maintain. Until then, you can follow my progress on my public profiles.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a href={profile.social.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-teal px-4 py-2.5 text-sm font-semibold text-cream hover:bg-teal/90"><Github className="h-4 w-4" /> GitHub</a>
            <a href={profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg border border-teal px-4 py-2.5 text-sm font-semibold text-teal hover:bg-teal hover:text-cream"><Linkedin className="h-4 w-4" /> LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  );
}
