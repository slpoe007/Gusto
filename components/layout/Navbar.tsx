'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const navItems = [
  { label: '首页', href: '/' },
  { label: '关于我们', href: '/about' },
  { label: '产品中心', href: '/products' },
  { label: '研发能力', href: '/engineering' },
  { label: '服务中心', href: '/services' },
  { label: '技术支持', href: '/technical' },
  { label: '新闻动态', href: '/news' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-[var(--color-border)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src="/images/footlogo.png" alt="Gusto" className="h-7 sm:h-8 invert opacity-90" />
            <span className="hidden sm:inline text-xl font-bold font-display text-white tracking-wider">
              GUSTO<span className="text-[var(--color-primary)]">TECHNIK</span>
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button className="text-xs sm:text-sm text-gray-300 hover:text-white px-2 py-1 rounded border border-gray-700 hover:border-gray-500 transition-colors">EN/中</button>
            <button className="lg:hidden p-2 text-gray-300" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-[var(--color-border)] overflow-hidden">
              <div className="py-3 space-y-1 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                    className="block px-4 py-2.5 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium">
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
