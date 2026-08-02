import {
  Code,
  FileCode,
  Palette,
  Component,
  Wind,
  Braces,
  Database,
  Server,
  type LucideIcon,
} from 'lucide-react';
import SectionHeader from '@/components/ui/SectionHeader';
import SkillCard from '@/components/ui/SkillCard';
import { skillCategories } from '@/data/content';

const iconMap: Record<string, LucideIcon> = {
  Code,
  FileCode,
  Palette,
  Component,
  Wind,
  Braces,
  Database,
  Server,
};

const accents: ('blush' | 'rose' | 'teal')[] = ['blush', 'rose', 'teal'];

export default function SkillsPage() {
  return (
    <div className="px-6 pt-28 pb-20">
      <div className="mx-auto max-w-5xl">
        <SectionHeader
          title="Skills"
          subtitle="Technologies and tools I work with every day, and what I'm learning next."
        />

        <div className="space-y-10">
          {skillCategories.map((cat, catIdx) => (
            <div key={cat.category}>
              <h3 className="mb-5 font-heading text-lg font-bold text-plum dark:text-cream">
                {cat.category}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {cat.skills.map((skill) => {
                  const Icon = iconMap[skill.icon] ?? Code;
                  return (
                    <SkillCard
                      key={skill.name}
                      name={skill.name}
                      icon={Icon}
                      accent={accents[catIdx % accents.length]}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
