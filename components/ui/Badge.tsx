interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'neutral' | 'cyan';
  className?: string;
}

export default function Badge({ children, variant = 'primary', className = '' }: BadgeProps) {
  const colors = {
    primary: 'bg-red-900/20 text-red-400 border-red-800/30',
    success: 'bg-green-900/20 text-green-400 border-green-800/30',
    neutral: 'bg-gray-800/30 text-gray-400 border-gray-700/50',
    cyan: 'bg-cyan-900/20 text-cyan-400 border-cyan-800/30',
  };

  return (
    <span className={`inline-block text-[10px] tracking-[0.15em] font-semibold px-2.5 py-1 rounded border ${colors[variant]} ${className}`}>
      {children}
    </span>
  );
}
