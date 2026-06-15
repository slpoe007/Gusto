import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  dark?: boolean;
}

export default function Section({ children, className = '', id, dark = false }: SectionProps) {
  return (
    <section id={id} className={`py-20 px-4 ${dark ? 'bg-[#050508]' : ''} ${className}`}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}

export function SectionHeader({ title, subtitle, accent }: { title: string; subtitle?: string; accent?: string }) {
  return (
    <div className="text-center mb-12">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
        {title}
        {accent && <span className="text-[var(--color-primary)]">{accent}</span>}
      </h2>
      {subtitle && <p className="text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  );
}
