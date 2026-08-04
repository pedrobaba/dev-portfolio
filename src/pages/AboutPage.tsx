import { Mail, MapPin, Briefcase } from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import { profile } from '@/data/content';
import profileImage from '@/Images/Profile_image_MrPedro.png';

export default function AboutPage() {
  return (
    <div className="px-6 pt-28 pb-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader title="About Me" subtitle="A little background on who I am and what I do." />

        <div className="grid gap-12 md:grid-cols-[280px_1fr]">
          <div className="flex flex-col items-center">
            <div className="flex h-48 w-48 items-center justify-center overflow-hidden rounded-3xl bg-gradient-to-br from-blush/20 via-rose/20 to-teal/20 ring-1 ring-plum/10 dark:ring-cream/10">
              <img
                src={profileImage}
                alt="Portrait of Sogo Omolanbe"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-6 w-full space-y-3">
              <div className="flex items-center gap-3 text-sm text-plum/60 dark:text-cream/60">
                <Mail className="h-4 w-4 text-teal" />
                {profile.email}
              </div>
              <div className="flex items-center gap-3 text-sm text-plum/60 dark:text-cream/60">
                <MapPin className="h-4 w-4 text-teal" />
                {profile.location}
              </div>
              <div className="flex items-center gap-3 text-sm text-plum/60 dark:text-cream/60">
                <Briefcase className="h-4 w-4 text-teal" />
                Open to Frontend roles
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-base leading-relaxed text-plum/70 dark:text-cream/70">
                {profile.bio}
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-blush/5 p-5 ring-1 ring-blush/10 dark:bg-blush/10">
                <h3 className="font-heading text-sm font-bold text-blush">Design</h3>
                <p className="mt-1 text-sm text-plum/60 dark:text-cream/60">
                  Clean, modern UI with attention to detail
                </p>
              </div>
              <div className="rounded-xl bg-rose/5 p-5 ring-1 ring-rose/10 dark:bg-rose/10">
                <h3 className="font-heading text-sm font-bold text-rose">Build</h3>
                <p className="mt-1 text-sm text-plum/60 dark:text-cream/60">
                  Responsive, accessible web applications
                </p>
              </div>
              <div className="rounded-xl bg-teal/5 p-5 ring-1 ring-teal/10 dark:bg-teal/10">
                <h3 className="font-heading text-sm font-bold text-teal">Deploy</h3>
                <p className="mt-1 text-sm text-plum/60 dark:text-cream/60">
                  Learning deployment and iteration workflows
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
