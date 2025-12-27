import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  external?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  external = false,
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg px-6 py-3 text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
    secondary: 'bg-neutral-900 text-white hover:bg-neutral-800 focus:ring-neutral-500',
    outline: 'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white focus:ring-neutral-500',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClassName}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
