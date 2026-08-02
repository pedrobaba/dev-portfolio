import { type ButtonHTMLAttributes, type ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
}

const variantStyles: Record<Variant, string> = {
  primary: 'bg-teal text-cream hover:bg-teal/90',
  secondary: 'bg-plum text-cream hover:bg-plum/90 dark:bg-rose dark:hover:bg-rose/90',
  outline: 'border-2 border-teal text-teal hover:bg-teal hover:text-cream',
};

export default function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 hover:shadow-lg active:scale-95 ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
