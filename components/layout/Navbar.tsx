'use client';

import { useState } from 'react';
import Link from 'next/link';
import { navigation } from '@/lib/data/navigation';
import { Bars3Icon, XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#0a0a0f]/95 backdrop-blur-md border-b border-[var(--color-border)]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <span className="text-xl sm:text-2xl font-bold font-display text-white tracking-wider">
              GUSTO<span className="text-[var(--color-primary)]">TECHNIK</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right: Search + Lang */}
          <div className="flex items-center gap-3">
            <button className="p-2 text-gray-400 hover:text-white transition-colors">
              <MagnifyingGlassIcon className="w-5 h-5" />
            </button>
            <button className="text-sm text-gray-300 hover:text-white px-2 py-1 rounded border border-gray-700 hover:border-gray-500 transition-colors">
              EN / 中文
            </button>
            {/* Mobile toggle */}
            <button className="lg:hidden p-2 text-gray-300" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-[var(--color-border)] py-4 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-base"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
