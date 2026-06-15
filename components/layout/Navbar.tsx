'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const navItems = [
  { label: '首页', href: '/' },
  {
    label: '关于我们', href: '/about',
    children: [
      { label: '集团简介', href: '/about' },
      { label: '联系我们', href: '/about#contact' },
    ],
  },
  {
    label: '产品中心', href: '/products',
    children: [
      { label: '代理品牌', href: '/products#brands' },
      { label: '赛车车型', href: '/products#race-cars' },
      { label: '全部产品', href: '/products#all' },
    ],
  },
  { label: '研发能力', href: '/engineering' },
  {
    label: '服务中心', href: '/services',
    children: [
      { label: '赛事工程支持', href: '/services' },
      { label: '赛车租赁', href: '/services' },
      { label: '车手培训', href: '/services' },
      { label: '门店安装', href: '/services' },
    ],
  },
  { label: '技术支持', href: '/technical' },
  {
    label: '新闻动态', href: '/news',
    children: [
      { label: '全部新闻', href: '/news' },
      { label: '赛事新闻', href: '/news?cat=racing' },
      { label: '公司新闻', href: '/news?cat=company' },
    ],
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDesktop, setOpenDesktop] = useState<string | null>(null);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDesktop(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-[#050510]/95 backdrop-blur-xl border-b border-white/[0.04]">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative">
              <img src="/images/logo.png" alt="Gusto" className="h-7 sm:h-8 invert opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
            </div>
            <span className="hidden sm:inline text-lg font-bold font-display text-white tracking-[0.15em]">GUSTO<span className="text-red-500">TECHNIK</span></span>
          </Link>

          <div className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <div key={item.href} className="relative"
                  onMouseEnter={() => item.children && setOpenDesktop(item.href)}
                  onMouseLeave={() => setOpenDesktop(null)}
                >
                  <Link
                    href={item.href}
                    onClick={() => setOpenDesktop(null)}
                    className={'relative px-3 py-2 text-xs tracking-[0.1em] font-medium transition-colors duration-300 rounded flex items-center gap-1 ' + (isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300')}
                  >
                    {item.label}
                    {item.children && <ChevronDownIcon className={`w-3 h-3 transition-transform duration-200 ${openDesktop === item.href ? 'rotate-180' : ''}`} />}
                  </Link>

                  {item.children &&
 openDesktop === item.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-1 w-44 bg-[#0d0d1f] border border-white/[0.06] rounded-xl shadow-2xl shadow-black/80 overflow-hidden py-2 backdrop-blur-xl"
                    >
                      {item.children.map((child) => (
                        <Link key={child.href} href={child.href} onClick={() => setOpenDesktop(null)}
                          className="block px-4 py-2.5 text-xs text-gray-400 hover:text-white hover:bg-white/[0.03] transition-colors tracking-[0.05em]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 text-[10px] tracking-[0.2em] text-gray-600">
              ZH <span className="text-gray-700">/</span> EN
            </div>
            <button className="lg:hidden p-2 text-gray-400 hover:text-white transition-colors" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <XMarkIcon className="w-5 h-5" /> : <Bars3Icon className="w-5 h-5" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-white/[0.04] overflow-hidden">
              <div className="py-3 space-y-0.5 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
                  return (
                    <div key={item.href}>
                      <button
                        onClick={() => {
                          if (item.children) {
                            setOpenMobile(openMobile === item.href ? null : item.href);
                          } else {
                            setMobileOpen(false);
                            window.location.href = item.href;
                          }
                        }}
                        className={"w-full text-left px-4 py-3 text-sm tracking-[0.1em] transition-colors rounded-lg flex items-center justify-between " + (isActive ? "text-white bg-white/[0.03]" : "text-gray-400 hover:text-gray-200")}
                      >
                        {item.label}
                        {item.children && <ChevronDownIcon className={"w-4 h-4 transition-transform duration-200 " + (openMobile === item.href ? "rotate-180" : "")} />}
                      </button>
                      {item.children && openMobile === item.href && (
                        <div className="ml-4 border-l border-white/[0.04] pl-4 py-1 space-y-0.5">
                          {item.children.map((child) => (
                            <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-sm text-gray-500 hover:text-gray-200 transition-colors rounded-lg"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
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
