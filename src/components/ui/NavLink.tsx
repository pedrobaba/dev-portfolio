import { type ComponentType } from 'react';

interface NavLinkProps {
  label: string;
  active: boolean;
  onClick: () => void;
  icon?: ComponentType<{ className?: string }>;
}

export default function NavLink({ label, active, onClick, icon: Icon }: NavLinkProps) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 ${
        active
          ? 'text-teal'
          : 'text-plum/70 hover:text-teal dark:text-cream/70 dark:hover:text-teal'
      }`}
    >
      {Icon && <Icon className="h-4 w-4" />}
      {label}
      <span
        className={`block h-0.5 rounded-full bg-teal transition-all duration-300 ${
          active ? 'w-full' : 'w-0'
        }`}
      />
    </button>
  );
}
