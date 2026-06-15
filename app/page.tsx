'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDownIcon, ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { brands, categories } from '@/lib/data/brands';
import { news } from '@/lib/data/news';
import Badge from '@/components/ui/Badge';

const brandLogos: Record<string, string> = {
  alcon: '/images/brands/logo1.png', ohlins: '/images/brands/logo2.png', millers: '/images/brands/logo3.png',
  revo: '/images/brands/logo4.png', stand21: '/images/brands/logo5.png', getuned: '/images/brands/logo7.png',
  racetech: '/images/brands/logo8.png', '3mo': '/images/brands/logo9.png', idi: '/images/brands/logo10.png',
};

const heroSlides = [
  { bg: '/images/hero/hero-2.png', tag: 'SPEED · PRECISION · PERFORMANCE', title: '赛道基因', desc: '二十载赛道淬炼，只为极致性能', accent: 'RACING DNA' },
  { bg: '/images/hero/hero-3.png', tag: 'ELITE MOTORSPORT PARTNERS', title: '冠军之选', desc: 'Shell Teamwork Lynk & Co Racing 官方技术伙伴', accent: 'CHAMPIONS' },
  { bg: '/images/hero/hero-1.png', tag: 'ENGINEERED FOR THE TRACK', title: '工程实力', desc: '自主研发 GETuned 品牌，从赛场到街道', accent: 'ENGINEERING' },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const nextSlide = useCallback(() => setSlide((s) => (s + 1) % heroSlides.length), []);
  useEffect(() => { const t = setInterval(nextSlide, 6000); return () => clearInterval(t); }, [nextSlide]);

  // Parallax scroll effect for hero
  const heroRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* ============ HERO: Full-screen cinematic ============ */}
      <section ref={heroRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ scale: 1.15, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 1.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{ backgroundImage: `url('${heroSlides[slide].bg}')`, transform: `translateY(${scrollY * 0.35}px)` }}
          />
        </AnimatePresence>

        {/* Multi-layer dark overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/45 to-[var(--color-background)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,var(--color-background)_90%)] z-10" />

        {/* Animated scan lines */}
        <div className="absolute inset-0 z-10 opacity-[0.04] pointer-events-none" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.6) 2px, rgba(0,229,255,0.6) 3px)',
          backgroundSize: '100% 4px',
          animation: 'scan 4s linear infinite',
        }} />

        {/* Diagonal light beams */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <motion.div
            animate={{ opacity: [0.04, 0.12, 0.04] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-red-500 to-transparent"
            style={{ left: '12%', transform: 'skewX(-12deg)' }}
          />
          <motion.div
            animate={{ opacity: [0.02, 0.1, 0.02] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}
            className="absolute top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-500 to-transparent"
            style={{ left: '88%', transform: 'skewX(-12deg)' }}
          />
          <motion.div
            animate={{ opacity: [0.01, 0.06, 0.01] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="absolute top-0 w-[2px] h-full bg-gradient-to-b from-transparent via-white to-transparent"
            style={{ left: '50%', transform: 'skewX(-8deg)' }}
          />
        </div>

        {/* HUD particles */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-[2px] h-[2px] rounded-full bg-cyan-400/60"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: 'easeInOut',
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto w-full">
          <motion.div
            key={`tag-${slide}`}
            initial={{ opacity: 0, y: 30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-4 mb-8"
          >
            <motion.span animate={{ scaleX: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} className="h-px w-10 bg-gradient-to-r from-transparent to-red-500" />
            <span className="text-xs sm:text-sm tracking-[0.4em] text-cyan-400 font-semibold uppercase">{heroSlides[slide].tag}</span>
            <motion.span animate={{ scaleX: [1.5, 1, 1.5] }} transition={{ duration: 2, repeat: Infinity }} className="h-px w-10 bg-gradient-to-l from-transparent to-cyan-400" />
          </motion.div>

          <motion.div
            key={`main-${slide}`}
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            {/* TECH badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span className="text-[10px] tracking-[0.3em] text-red-400 uppercase font-bold">{heroSlides[slide].accent}</span>
            </div>

            <h1 className="font-display text-6xl sm:text-8xl lg:text-[10rem] font-black tracking-[0.03em] text-white mb-6 leading-none">
              GUSTO<span className="text-gradient-fire glow-red">TECHNIK</span>
            </h1>
            <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
              {heroSlides[slide].desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12"
          >
            <Link href="/products" className="group relative px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-lg text-sm tracking-[0.15em] overflow-hidden transition-all duration-500 animate-pulse-glow">
              <span className="relative z-10 flex items-center gap-2">探索产品 <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /></span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
            <Link href="/racing" className="group px-10 py-4 border border-white/15 hover:border-cyan-400/40 text-gray-300 hover:text-cyan-300 font-semibold rounded-lg text-sm tracking-[0.15em] transition-all duration-500 backdrop-blur-sm relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">赛事动态 <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /></span>
              <div className="absolute inset-0 bg-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>
          </motion.div>

          {/* Slide indicators */}
          <div className="absolute bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-2">
            {heroSlides.map((_, i) => (
              <button key={i} onClick={() => setSlide(i)}
                className={`h-0.5 rounded-full transition-all duration-700 ${i === slide ? 'w-20 bg-gradient-to-r from-red-500 to-red-400' : 'w-8 bg-white/15 hover:bg-white/30'}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator with bounce */}
        <motion.div
          animate={{ y: [0, 12, 0], opacity: [0.2, 0.7, 0.2] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.4em] text-gray-600 uppercase">Scroll Down</span>
          <ChevronDownIcon className="w-4 h-4 text-gray-600 animate-bounce" />
        </motion.div>
      </section>

      {/* ============ STATS BAR: HUD-style floating above hero ============ */}
      <section className="relative -mt-24 z-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { value: '20+', label: '年行业经验', suffix: 'YRS' },
              { value: '10+', label: '全球代理品牌', suffix: 'BRANDS' },
              { value: '4', label: '运营中心', suffix: 'HUBS' },
              { value: '6', label: '旗下公司', suffix: 'ENTITIES' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: 'spring', stiffness: 100 }}
                className="relative overflow-hidden rounded-xl border border-white/5 bg-[#0d0d1f]/95 backdrop-blur-2xl p-6 text-center group hover:border-red-500/30 transition-all duration-500 card-hover-lift"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-3xl sm:text-4xl font-display font-black text-white group-hover:text-red-400 transition-colors">{s.value}</span>
                <span className="text-[10px] tracking-[0.25em] text-gray-500 ml-1 uppercase font-bold">{s.suffix}</span>
                <p className="mt-2 text-xs text-gray-500 tracking-[0.15em] uppercase">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BRANDS: Grid with hover reveal ============ */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-red-500/50" />
              <span className="text-[11px] tracking-[0.5em] text-cyan-400 uppercase font-bold">Official Partners</span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-cyan-400/50" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white mb-4">
              代理<span className="text-gradient-fire">品牌</span>
            </h2>
            <p className="text-gray-500 text-sm tracking-[0.2em] uppercase">Global Elite Motorsport Brands</p>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-px bg-white/[0.03] rounded-2xl overflow-hidden">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <Link href={`/products#${brand.id}`}
                  className="group flex flex-col items-center justify-center p-6 sm:p-8 bg-[#0a0a18] hover:bg-[#0d0d22] transition-all duration-500 h-full relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-500/30 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                  <div className="w-16 h-16 sm:w-18 sm:h-18 mb-4 flex items-center justify-center invert opacity-60 group-hover:opacity-100 transition-all duration-500 group-hover:scale-110">
                    {brandLogos[brand.id] ? (
                      <img src={brandLogos[brand.id]} alt={brand.name} className="max-w-full max-h-full object-contain" />
                    ) : (
                      <span className="text-2xl font-display font-black text-gray-500 group-hover:text-red-400 transition-colors">{brand.name.charAt(0)}</span>
                    )}
                  </div>
                  <span className="text-xs font-bold text-gray-400 group-hover:text-white text-center tracking-[0.15em] uppercase">{brand.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES: HUD data panels ============ */}
      <section className="py-32 px-4 bg-[#050508] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="text-[11px] tracking-[0.5em] text-gray-500 uppercase font-bold">Product Categories</span>
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white mb-4">
              按<span className="text-gradient-cyan">品类</span>浏览
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link href={`/products#${cat.id}`}
                  className="card-hover-lift flex flex-col items-center gap-4 p-6 bg-[var(--color-card)] rounded-xl border border-white/[0.04] hover:border-cyan-500/30 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-cyan-500/[0.05] to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="text-3xl relative z-10 group-hover:scale-125 transition-transform duration-500">{cat.icon}</span>
                  <span className="text-sm font-bold text-gray-400 group-hover:text-white text-center tracking-[0.1em] uppercase">{cat.name}</span>
                  <span className="text-[10px] text-gray-600 tracking-[0.2em]">{cat.brands.length} BRANDS</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BUSINESS SECTORS: Split cards with image overlays ============ */}
      <section className="py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-gradient-to-r from-transparent to-red-500/50" />
              <span className="text-[11px] tracking-[0.5em] text-red-400 uppercase font-bold">Racing &amp; Services</span>
              <span className="h-px w-8 bg-gradient-to-l from-transparent to-red-500/50" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl font-black text-white mb-4">
              赛事<span className="text-gradient-fire">与</span>服务
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: '研发能力', sub: 'GETUNED R&D', desc: '自主品牌研发，将赛道技术转化为民用产品。精准的设计是一切机械加工制造的基础。', href: '/engineering', img: '/images/business/rd.jpg', accent: 'cyan' },
              { title: '赛车车型', sub: 'TCR FLEET', desc: 'TCR 赛车中国总代理。代理 Audi RS3 LMS、VW Golf GTI TCR 等车型，覆盖中韩泰地区。', href: '/products#race-cars', img: '/images/business/race-cars.jpg', accent: 'red' },
              { title: '车辆租赁', sub: 'RENTAL', desc: '提供 TCR 规格赛车的短期和赛季租赁服务，降低参赛门槛。', href: '/services', img: '/images/business/rental.jpg', accent: 'cyan' },
              { title: '赛事支持', sub: 'TRACKSIDE', desc: '工程师团队现场支持，包括备件供应、现场维护、数据分析和故障诊断。', href: '/services', img: '/images/business/race-support.jpg', accent: 'red' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={item.href}
                  className={`card-hover-lift group block h-full bg-[var(--color-card)] rounded-xl border border-white/[0.04] overflow-hidden ${item.accent === 'cyan' ? 'hover:border-cyan-500/30' : 'hover:border-red-500/30'}`}
                >
                  <div className="aspect-video bg-gray-900 relative overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1f] via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`text-[10px] tracking-[0.25em] font-black uppercase px-2 py-1 rounded ${item.accent === 'cyan' ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20' : 'text-red-400 bg-red-400/10 border border-red-400/20'}`}>
                        {item.sub}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">{item.desc}</p>
                    <span className={`mt-4 inline-flex items-center gap-1 text-xs font-bold transition-all duration-300 ${item.accent === 'cyan' ? 'text-cyan-400' : 'text-red-400'} opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1`}>
                      了解更多 <ArrowRightIcon className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWS: Timeline feed ============ */}
      <section className="py-32 px-4 bg-[#050508] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-end justify-between mb-20">
            <div>
              <h2 className="font-display text-4xl sm:text-6xl font-black text-white mb-4">
                最新<span className="text-gradient-fire">动态</span>
              </h2>
              <span className="text-[11px] tracking-[0.4em] text-gray-500 uppercase font-bold">Latest Updates</span>
            </div>
            <Link href="/news" className="hidden sm:flex items-center gap-2 text-sm text-cyan-400 hover:text-white font-bold transition-colors tracking-[0.15em] uppercase group">
              查看全部 <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.slice(0, 3).map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true  }}
                transition={{ delay: i * 0.12 }}
              >
                <Link href={'/news/' + item.id}
                  className="card-hover-lift group block h-full bg-[var(--color-card)] rounded-xl border border-white/[0.04] overflow-hidden hover:border-red-500/20"
                >
                  <div className="aspect-[16/9] bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center text-5xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,17,0,0.06),transparent_60%)]" />
                    {item.category === 'racing' ? '🏁' : item.category === 'product' ? '📦' : '🏢'}
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant={item.category === 'racing' ? 'primary' : item.category === 'company' ? 'success' : 'neutral'}>
                        {item.category === 'racing' ? '赛事' : item.category === 'product' ? '产品' : '公司'}
                      </Badge>
                      <span className="text-xs text-gray-600 tracking-[0.1em] uppercase">{item.date}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white line-clamp-2 leading-snug tracking-wide group-hover:text-red-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-gray-500 line-clamp-2 leading-relaxed">{item.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <Link href="/news" className="sm:hidden mt-8 flex items-center justify-center gap-2 text-sm text-cyan-400 hover:text-white font-bold transition-colors tracking-[0.15em] uppercase">
            查看全部 <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative p-12 sm:p-20 rounded-3xl border border-white/[0.04] overflow-hidden"
            style={{ background: 'linear-gradient(160deg, #0d0d1f 0%, #08081a 50%, #0d0d1f 100%)' }}
          >
            <motion.div
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/[0.06] rounded-full blur-3xl"
            />
            <motion.div
              animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
              transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/[0.04] rounded-full blur-3xl"
            />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-[10px] tracking-[0.3em] text-cyan-400 uppercase font-bold">Get In Touch</span>
              </div>
              <h2 className="font-display text-3xl sm:text-6xl font-black text-white mt-6 mb-6 leading-tight">
                需要专业<span className="text-gradient-fire">技术支持</span>？
              </h2>
              <p className="text-gray-500 max-w-xl mx-auto mb-12 leading-relaxed text-sm">
                无论您是车队经理、改装店主还是个人车手，我们的工程师团队随时为您提供专业的产品选型和解决方案建议。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:matt@gusto.com.cn" className="group relative px-10 py-4 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-lg text-sm tracking-[0.15em] overflow-hidden transition-all duration-500 animate-pulse-glow">
                  <span className="relative z-10 flex items-center gap-2">联系我们 <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
                <Link href="/products" className="px-10 py-4 border border-white/10 hover:border-cyan-400/30 text-gray-400 hover:text-white font-bold rounded-lg text-sm tracking-[0.15em] transition-all duration-500">
                  浏览产品
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
