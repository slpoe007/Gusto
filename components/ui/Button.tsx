'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit';
}

const variants = {
  primary: 'bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white shadow-lg shadow-red-900/20',
  outline: 'border border-gray-600 hover:border-[var(--color-primary)] text-gray-300 hover:text-white bg-transparent',
  ghost: 'text-gray-400 hover:text-white hover:bg-white/5 bg-transparent',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
};

export default function Button({ children, variant = 'primary', size = 'md', href, onClick, className = '', type = 'button' }: ButtonProps) {
  const classes = `${variants[variant]} ${sizes[size]} font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2 ${className}`;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>{children}</Link>
      </motion.div>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={classes} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.button>
  );
}
