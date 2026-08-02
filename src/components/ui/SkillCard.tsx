import { type ComponentType } from 'react';

interface SkillCardProps {
  name: string;
  icon: ComponentType<{ className?: string }>;
  accent: 'blush' | 'rose' | 'teal';
}

const accentStyles = {
  blush: 'bg-blush/10 text-blush dark:bg-blush/15',
  rose: 'bg-rose/10 text-rose dark:bg-rose/15',
  teal: 'bg-teal/10 text-teal dark:bg-teal/15',
};

export default function SkillCard({ name, icon: Icon, accent }: SkillCardProps) {
  return (
    <div className="group flex flex-col items-center gap-3 rounded-xl bg-cream p-5 shadow-sm ring-1 ring-plum/5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 dark:bg-[#241d2c] dark:ring-cream/5">
      <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${accentStyles[accent]} transition-transform duration-300 group-hover:scale-110`}>
        <Icon className="h-6 w-6" />
      </div>
      <span className="text-sm font-semibold text-plum dark:text-cream">{name}</span>
    </div>
  );
}
