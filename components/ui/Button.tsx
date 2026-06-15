'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'outline' | 'ghost' | 'cyan';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
}

const variants = {
  primary: 'bg-red-500 hover:bg-red-600 text-white',
  cyan: 'bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/20 hover:border-cyan-500/40',
  outline: 'border border-white/10 hover:border-white/20 text-gray-400 hover:text-white bg-transparent',
  ghost: 'text-gray-500 hover:text-white hover:bg-white/5 bg-transparent',
};

const sizes = {
  sm: 'px-4 py-2 text-xs tracking-wider',
  md: 'px-6 py-3 text-sm tracking-wider',
  lg: 'px-8 py-4 text-sm tracking-[0.15em]',
};

export default function Button({ children, variant = 'primary', size = 'md', href, onClick, className = '' }: ButtonProps) {
  const classes = variants[variant] + ' ' + sizes[size] + ' font-semibold rounded-lg transition-all duration-300 inline-flex items-center gap-2 ' + className;

  if (href) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
        <Link href={href} className={classes}>{children}</Link>
      </motion.div>
    );
  }

  return (
    <motion.button onClick={onClick} className={classes} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      {children}
    </motion.button>
  );
}
