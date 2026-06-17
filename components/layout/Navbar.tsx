'use client';

import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Bars3Icon, XMarkIcon, ChevronDownIcon, ChevronRightIcon, PlusIcon } from '@heroicons/react/24/outline';

const megamenuData = {
  label: '产品中心',
  href: '/products',
  leftCols: [
    {
      title: '代理品牌',
      items: [
        { label: 'ALCON 制动系统', href: '/products#alcon', desc: '世界级刹车与离合器' },
        { label: 'Öhlins 悬挂系统', href: '/products#ohlins', desc: 'MotoGP/F1/WRC 同款' },
        { label: 'Millers Oils 润滑油', href: '/products#millers', desc: 'NANODRIVE 纳米技术' },
      ],
    },
    {
      title: '自有品牌',
      items: [
        { label: 'GETuned 性能套件', href: '/products#getuned', desc: '赛道技术民用化' },
        { label: 'Racetech 赛车配件', href: '/products#racetech', desc: '专业赛车零部件' },
        { label: 'Stand21 安全装备', href: '/products#stand21', desc: 'FIA 认证赛车服' },
      ],
    },
    {
      title: '更多品牌',
      items: [
        { label: 'REVO ECU 调校', href: '/products#revo', desc: '动力系统升级' },
        { label: '3MO 传动系统', href: '/products#3mo', desc: '离合器与传动' },
        { label: 'IDI 高性能配件', href: '/products#idi', desc: '赛车专用零部件' },
        { label: '查看全部品牌 →', href: '/products', desc: '' },
      ],
    },
  ],
  rightImg: '/images/products/alcon-extreme.jpg',
  rightTitle: 'ALCON ADVANTAGE EXTREME',
  rightDesc: '前六活塞锻造卡钳 · 380mm 浮动碟 · TCR 认证',
  rightLink: '/products/alcon/alcon-advantage-extreme',
};

const navItems = [
  { label: '首页', href: '/' },
  {
    label: '关于我们', href: '/about',
    children: [
      { label: '集团简介', href: '/about' },
      { label: '联系我们', href: '/about#contact' },
    ],
  },
  { label: '产品中心', href: '/products', mega: true },
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
  const [megaOpen, setMegaOpen] = useState(false);
  const [openMobile, setOpenMobile] = useState<string | null>(null);
  const [hoveredMegaItem, setHoveredMegaItem] = useState<string | null>(null);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const headerBg = useTransform(scrollY, [0, 100], ['rgba(5,5,16,0)', 'rgba(5,5,16,0.95)']);
  const headerBorder = useTransform(scrollY, [0, 100], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.04)']);
  const headerHeight = useTransform(scrollY, [0, 100], ['4rem', '3.5rem']);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.85]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDesktop(null);
        setMegaOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggleDesktop = (href: string) => {
    setOpenDesktop(openDesktop === href ? null : href);
  };

  const toggleMega = () => {
    setMegaOpen(!megaOpen);
    setOpenDesktop(null);
  };

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl"
      style={{ background: headerBg, borderBottomWidth: '1px', borderBottomStyle: 'solid', borderBottomColor: headerBorder, height: headerHeight }}
      transition={{ type: 'tween', duration: 0.2 }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <motion.div style={{ scale: logoScale }}>
            <Link href="/" className="flex items-center gap-3 shrink-0 group">
              <div className="relative">
                <img src="/images/logo.png" alt="Gusto" className="h-6 sm:h-7 opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute -bottom-0.5 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
              <span className="hidden sm:inline text-base font-bold font-display text-white tracking-[0.15em]">GUSTO<span className="text-red-500">TECHNIK</span></span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5" ref={dropdownRef}>
            {navItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              const isOpen = item.mega ? megaOpen : openDesktop === item.href;

              return (
                <div key={item.href} className="relative">
                  <button
                    onClick={() => {
                      if (item.mega) toggleMega();
                      else if (item.children) toggleDesktop(item.href);
                      else window.location.href = item.href;
                    }}
                    className={'relative px-3 py-2 text-xs tracking-[0.1em] font-medium transition-colors duration-300 rounded flex items-center gap-1 ' + (isActive ? 'text-white' : 'text-gray-500 hover:text-gray-300')}
                  >
                    {item.label}
                    {(item.children || item.mega) && (
                      <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDownIcon className="w-3 h-3" />
                      </motion.span>
                    )}
                  </button>

                  {/* Small dropdown for non-mega items */}
                  {!item.mega && (
                    <AnimatePresence>
                      {item.children && isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -6, scaleY: 0.8 }}
                          animate={{ opacity: 1, y: 0, scaleY: 1 }}
                          exit={{ opacity: 0, y: -6, scaleY: 0.8 }}
                          transition={{ duration: 0.2, ease: 'easeOut' }}
                          style={{ transformOrigin: 'top' }}
                          className="absolute top-full left-0 mt-1 w-44 bg-[#0d0d1f] border border-white/[0.06] rounded-xl shadow-2xl shadow-black/80 overflow-hidden py-2 backdrop-blur-xl"
                        >
                          {item.children.map((child, i) => (
                            <motion.div
                              key={child.href}
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.04, duration: 0.2 }}
                            >
                              <Link href={child.href} onClick={() => setOpenDesktop(null)}
                                className="block px-4 py-2.5 text-xs text-gray-400 hover:text-white hover:bg-white/[0.03] transition-colors tracking-[0.05em]"
                              >
                                {child.label}
                              </Link>
                            </motion.div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
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

        {/* Mega Menu Overlay */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="absolute top-full left-0 right-0 bg-[#06060f]/98 backdrop-blur-2xl border-t border-white/[0.04] shadow-2xl shadow-black/90 overflow-hidden"
              style={{ minHeight: '380px' }}
            >
              <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 flex gap-12">
                {/* Left: Menu Columns — stagger in from left */}
                <div className="flex gap-16 flex-1">
                  {megamenuData.leftCols.map((col, colIdx) => (
                    <motion.div
                      key={col.title}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + colIdx * 0.08, duration: 0.4, ease: 'easeOut' }}
                      className="min-w-[160px]"
                    >
                      <h3 className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold mb-4">{col.title}</h3>
                      <div className="space-y-1">
                        {col.items.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            onClick={() => setMegaOpen(false)}
                            onMouseEnter={() => setHoveredMegaItem(sub.label)}
                            onMouseLeave={() => setHoveredMegaItem(null)}
                            className="group flex items-center justify-between px-3 py-2.5 -mx-3 rounded-lg hover:bg-white/[0.03] transition-colors"
                          >
                            <div>
                              <div className="flex items-center gap-2">
                                <PlusIcon className="w-3 h-3 text-gray-600 group-hover:text-red-500 transition-colors" />
                                <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">{sub.label}</span>
                              </div>
                              {sub.desc && <p className="text-[10px] text-gray-600 mt-0.5 ml-5">{sub.desc}</p>}
                            </div>
                            <ChevronRightIcon className="w-3.5 h-3.5 text-gray-700 group-hover:text-red-400 group-hover:translate-x-0.5 transition-all" />
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Right: Product Image — stagger in from right */}
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25, duration: 0.5, ease: 'easeOut' }}
                  className="hidden xl:block w-[340px] shrink-0"
                >
                  <Link href={megamenuData.rightLink} onClick={() => setMegaOpen(false)} className="group block relative rounded-xl overflow-hidden aspect-[4/3] bg-[#0a0a14]">
                    <img src={megamenuData.rightImg} alt={megamenuData.rightTitle} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-[9px] tracking-[0.2em] text-red-400 uppercase font-bold mb-1">FEATURED</p>
                      <h4 className="text-sm font-bold text-white">{megamenuData.rightTitle}</h4>
                      <p className="text-[10px] text-gray-400 mt-1">{megamenuData.rightDesc}</p>
                    </div>
                  </Link>
                </motion.div>
              </div>

              {/* Bottom bar */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="border-t border-white/[0.03] px-6 lg:px-8 py-3"
              >
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                  <span className="text-[10px] text-gray-600 tracking-wider">全球顶级赛车配件供应商 · 9 大品牌 · 官方授权</span>
                  <Link href="/products" onClick={() => setMegaOpen(false)} className="text-[10px] text-red-500 hover:text-red-400 font-bold tracking-[0.15em] transition-colors">
                    查看全部产品 →
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
              className="lg:hidden border-t border-white/[0.04] overflow-hidden bg-[#050510]/95 backdrop-blur-xl">
              <div className="py-3 space-y-0.5 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
                  return (
                    <div key={item.href}>
                      <button
                        onClick={() => {
                          if (item.children || item.mega) { setOpenMobile(openMobile === item.href ? null : item.href); }
                          else { setMobileOpen(false); window.location.href = item.href; }
                        }}
                        className={'w-full text-left px-4 py-3 text-sm tracking-[0.1em] transition-colors rounded-lg flex items-center justify-between ' + (isActive ? 'text-white bg-white/[0.03]' : 'text-gray-400 hover:text-gray-200')}
                      >
                        {item.label}
                        {(item.children || item.mega) && <ChevronDownIcon className={'w-4 h-4 transition-transform duration-200 ' + (openMobile === item.href ? 'rotate-180' : '')} />}
                      </button>
                      {item.children && openMobile === item.href && (
                        <div className="ml-4 border-l border-white/[0.04] pl-4 py-1 space-y-0.5">
                          {item.children.map((child) => (
                            <Link key={child.href} href={child.href} onClick={() => setMobileOpen(false)}
                              className="block px-3 py-2 text-sm text-gray-500 hover:text-gray-200 transition-colors rounded-lg"
                            >{child.label}</Link>
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
    </motion.header>
  );
}
