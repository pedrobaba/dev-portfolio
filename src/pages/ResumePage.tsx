import { Briefcase, Clock, Info } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { learningExperience, profile } from '@/data/content';

export default function ResumePage() {
  return (
    <div className="px-6 pt-28 pb-20">
      <div className="mx-auto max-w-4xl">
        <SectionHeader
          title="Resume"
          subtitle="A concise overview of how I am building practical frontend experience."
        />

        <div className="mb-8 flex flex-col items-start gap-4 rounded-xl bg-teal/5 p-6 ring-1 ring-teal/10 dark:bg-teal/10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Info className="h-5 w-5 text-teal" />
            <p className="text-sm text-plum/70 dark:text-cream/70">
              My résumé is being updated with verified project work and learning milestones.
            </p>
          </div>
          <a href={`mailto:${profile.email}?subject=Resume request`} className="inline-flex items-center justify-center rounded-lg bg-teal px-5 py-2.5 text-sm font-semibold text-cream hover:bg-teal/90">Request résumé</a>
        </div>

        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-teal" />
            <h3 className="font-heading text-xl font-bold text-plum dark:text-cream">Practical learning</h3>
          </div>

          <div className="space-y-6">
            {learningExperience.map((exp, idx) => (
              <div
                key={idx}
                className="relative rounded-xl bg-cream p-6 shadow-sm ring-1 ring-plum/5 dark:bg-[#241d2c] dark:ring-cream/5"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="font-heading text-base font-bold text-plum dark:text-cream">
                    {exp.role}
                  </h4>
                  <span className="flex items-center gap-1.5 text-xs font-medium text-teal">
                    <Clock className="h-3.5 w-3.5" />
                    {exp.period}
                  </span>
                </div>
                <p className="mt-1 text-sm font-semibold text-blush">{exp.company}</p>
                <p className="mt-3 text-sm leading-relaxed text-plum/60 dark:text-cream/60">
                  {exp.description}
                </p>
                {idx < learningExperience.length - 1 && (
                  <div className="absolute -bottom-3 left-6 h-3 w-px bg-plum/10 dark:bg-cream/10" />
                )}
              </div>
            ))}
          </div>
        </section>

        <div className="mt-12 rounded-xl bg-plum p-8 text-center text-cream">
          <h3 className="font-heading text-xl font-bold">Let's work together</h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-cream/60">
            I'm always open to discussing new projects and opportunities.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-5 inline-flex items-center justify-center rounded-lg bg-teal px-6 py-3 text-sm font-semibold text-cream transition-all duration-200 hover:bg-teal/90 hover:shadow-lg active:scale-95"
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
