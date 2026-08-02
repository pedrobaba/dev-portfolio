interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export default function SectionHeader({ title, subtitle, center = false }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${center ? 'text-center' : ''}`}>
      <div className={`flex items-center gap-3 ${center ? 'justify-center' : ''}`}>
        <span className="h-1 w-10 rounded-full bg-teal" />
        <h2 className="font-heading text-3xl font-bold text-plum dark:text-cream sm:text-4xl">{title}</h2>
      </div>
      {subtitle && (
        <p className={`mt-3 text-base text-plum/60 dark:text-cream/60 ${center ? 'mx-auto max-w-2xl' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
