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
      { label: '赛事工程支持', href: '/services#engineering' },
      { label: '赛车租赁', href: '/services#rental' },
      { label: '车手培训', href: '/services#training' },
      { label: '门店安装', href: '/services#installation' },
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

        {/* Mega Menu Overlay — full viewport, 50/50 split */}
        <AnimatePresence>
          {megaOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: '100vh' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-[3.5rem] left-0 right-0 bg-[#050510]/98 backdrop-blur-2xl border-t border-white/[0.04] z-40 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row h-full">
                {/* Left 50% — menu items */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:w-1/2 flex items-center justify-center p-10 lg:p-20"
                >
                  <div className="flex gap-12 lg:gap-20 flex-wrap justify-center">
                    {megamenuData.leftCols.map((col, colIdx) => (
                      <motion.div
                        key={col.title}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 + colIdx * 0.1, duration: 0.4, ease: 'easeOut' }}
                        className="min-w-[140px]"
                      >
                        <h3 className="text-[10px] tracking-[0.2em] text-gray-500 uppercase font-bold mb-5">{col.title}</h3>
                        <div className="space-y-1">
                          {col.items.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              onClick={() => setMegaOpen(false)}
                              onMouseEnter={() => setHoveredMegaItem(sub.label)}
                              onMouseLeave={() => setHoveredMegaItem(null)}
                              className="group flex items-center gap-3 px-3 py-2.5 -mx-3 rounded-lg hover:bg-white/[0.03] transition-colors"
                            >
                              <PlusIcon className="w-3.5 h-3.5 text-gray-600 group-hover:text-red-500 transition-colors shrink-0" />
                              <div className="min-w-0">
                                <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium block truncate">{sub.label}</span>
                                {sub.desc && <p className="text-[10px] text-gray-600 mt-0.5">{sub.desc}</p>}
                              </div>
                              <ChevronRightIcon className="w-3.5 h-3.5 text-gray-700 group-hover:text-red-400 group-hover:translate-x-1 transition-all shrink-0 ml-auto" />
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                {/* Right 50% — product showcase */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="lg:w-1/2 relative bg-[#0a0a14] overflow-hidden"
                >
                  <img src={megamenuData.rightImg} alt={megamenuData.rightTitle} className="absolute inset-0 w-full h-full object-cover opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-16">
                    <p className="text-[9px] tracking-[0.2em] text-red-400 uppercase font-bold mb-2">FEATURED PRODUCT</p>
                    <h3 className="text-xl lg:text-2xl font-display font-black text-white mb-2">{megamenuData.rightTitle}</h3>
                    <p className="text-xs text-gray-400 mb-6">{megamenuData.rightDesc}</p>
                    <Link href={megamenuData.rightLink} onClick={() => setMegaOpen(false)}
                      className="inline-flex items-center gap-2 px-6 py-2.5 bg-red-600 hover:bg-red-500 text-white text-xs font-bold rounded-lg tracking-[0.1em] transition-colors">
                      了解详情 <ChevronRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </div>
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
