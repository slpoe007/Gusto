interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'neutral';
  className?: string;
}

export default function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const colors = {
    primary: 'bg-red-900/30 text-[var(--color-primary)] border-red-800/50',
    success: 'bg-green-900/30 text-green-400 border-green-800/50',
    neutral: 'bg-gray-800/50 text-gray-400 border-gray-700',
  };

  return (
    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full border ${colors[variant]} ${className}`}>
      {children}
    </span>
  );
}
