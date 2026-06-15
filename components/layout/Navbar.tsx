'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

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
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-[#050510]/95 backdrop-blur-xl border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative">
              <img src="/images/footlogo.png" alt="Gusto" className="h-7 sm:h-8 invert opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
            <span className="hidden sm:inline text-lg font-bold font-display text-white tracking-[0.15em]">GUSTO<span className="text-red-500">TECHNIK</span></span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link key={item.href} href={item.href}
                  className={'relative px-3 py-2 text-xs tracking-[0.1em] font-medium transition-colors duration-300 rounded ' + (isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300')}>
                  {item.label}
                  {isActive && <motion.div layoutId="nav-underline" className="absolute bottom-0 left-3 right-3 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-[10px] tracking-[0.2em] text-gray-500">
              <span className="h-px w-4 bg-gray-700" /> ZH <span className="text-gray-700">/</span> EN
            </div>
            <button className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
              className="lg:hidden border-t border-white/5 overflow-hidden">
              <div className="py-3 space-y-0.5 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                  return (
                  <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                    className={'block px-4 py-3 text-sm tracking-[0.1em] transition-colors rounded-lg ' + (isActive ? 'text-white bg-white/5' : 'text-gray-500 hover:text-gray-300 hover:bg-white/[0.02]')}>
                    {item.label}
                  </Link>

                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
