'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { brands, categories } from '@/lib/data/brands';
import { news } from '@/lib/data/news';
import Badge from '@/components/ui/Badge';

const brandLogos: Record<string, string> = {
  alcon: '/images/brand-alcon.png', ohlins: '/images/brand-ohlins.png', millers: '/images/brand-millers.png',
  revo: '/images/brand-revo.png', stand21: '/images/brand-stand21.png', getuned: '/images/brand-getuned.png',
  racetech: '/images/brand-racetech.png', '3mo': '/images/brand-3mo.png', idi: '/images/brand-idi.png',
};

const heroSlides = [
  { bg: '/images/hero/hero-2.png', tag: 'SPEED · PRECISION · PERFORMANCE', title: '赛道基因', desc: '二十载赛道淬炼，只为极致性能', accent: 'RACING DNA' },
  { bg: '/images/hero/hero-1.png', tag: 'ENGINEERED FOR THE TRACK', title: '工程实力', desc: '自主研发 GETuned 品牌，从赛场到街道', accent: 'ENGINEERING' },
  { bg: '/images/hero/hero-3.png', tag: 'ELITE MOTORSPORT PARTNERS', title: '冠军之选', desc: 'Shell Teamwork Lynk & Co Racing 官方技术伙伴', accent: 'CHAMPIONS' },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);

  const nextSlide = useCallback(() => setSlide((s) => (s + 1) % heroSlides.length), []);
  useEffect(() => {
    const t = setInterval(nextSlide, 6000);
    return () => clearInterval(t);
  }, [nextSlide]);

  return (
    <div className="bg-noise">
      {/* ============ HERO: Full-screen cinematic ============ */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroSlides[slide].bg}')` }}
          />
        </AnimatePresence>

        {/* Dark overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-[var(--color-background)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,var(--color-background)_100%)] z-10" />
        {/* Scan lines */}
        <div className="absolute inset-0 z-10 opacity-[0.03]" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,229,255,0.5) 2px, rgba(0,229,255,0.5) 3px)',
          backgroundSize: '100% 4px',
        }} />

        {/* Diagonal accent lines */}
        <div className="absolute inset-0 z-10 opacity-10">
          <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent" style={{ left: '15%', transform: 'skewX(-15deg)' }} />
          <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent" style={{ left: '85%', transform: 'skewX(-15deg)' }} />
        </div>

        {/* Content */}
        <div className="relative z-20 text-center px-4 max-w-6xl mx-auto w-full">
          <motion.div
            key={`tag-${slide}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-[var(--color-primary)]" />
            <span className="text-xs sm:text-sm tracking-[0.35em] text-[var(--color-accent)] font-semibold uppercase">{heroSlides[slide].tag}</span>
            <span className="h-px w-8 bg-[var(--color-accent)]" />
          </motion.div>

          <motion.div
            key={`main-${slide}`}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl font-black tracking-[0.05em] text-white mb-4 leading-none">
              GUSTO<span className="text-[var(--color-primary)] glow-red">TECHNIK</span>
            </h1>
            <p className="text-sm sm:text-lg text-gray-400 mb-3 tracking-[0.15em] uppercase">{heroSlides[slide].accent}</p>
            <p className="text-base sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              {heroSlides[slide].desc}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
          >
            <Link href="/products" className="group relative px-8 py-3.5 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-bold rounded text-sm tracking-wider overflow-hidden transition-all duration-300 glow-red">
              <span className="relative z-10 flex items-center gap-2">探索产品 <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
            <Link href="/racing" className="group px-8 py-3.5 border border-white/20 hover:border-[var(--color-accent)] text-gray-300 hover:text-[var(--color-accent)] font-semibold rounded text-sm tracking-wider transition-all duration-300 backdrop-blur-sm">
              <span className="flex items-center gap-2">赛事动态 <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
          </motion.div>

          {/* Slide indicators */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlide(i)}
                className={`h-0.5 rounded-full transition-all duration-500 ${i === slide ? 'w-16 bg-[var(--color-primary)]' : 'w-6 bg-white/20 hover:bg-white/40'}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] tracking-[0.3em] text-gray-600 uppercase">Scroll</span>
          <ChevronDownIcon className="w-4 h-4 text-gray-600" />
        </motion.div>
      </section>

      {/* ============ STATS BAR ============ */}
      <section className="relative -mt-20 z-20 px-4">
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
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="relative overflow-hidden rounded-xl border border-[var(--color-border)] bg-[var(--color-card)]/90 backdrop-blur-xl p-5 text-center group hover:border-[var(--color-primary)] transition-all duration-400"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="text-3xl sm:text-4xl font-display font-black text-white group-hover:text-[var(--color-primary)] transition-colors">{s.value}</span>
                <span className="text-[10px] tracking-[0.2em] text-[var(--color-muted)] ml-1 uppercase">{s.suffix}</span>
                <p className="mt-2 text-xs text-gray-500 tracking-wider">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BRANDS: Tech-grid style ============ */}
      <section className="py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[11px] tracking-[0.4em] text-[var(--color-accent)] uppercase font-semibold">Official Partners</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-3 mb-4">
              代理<span className="text-gradient-fire">品牌</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mt-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--color-primary)]/50" />
              <span className="text-xs tracking-[0.3em] text-gray-600 uppercase">Global Elite Brands</span>
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--color-primary)]/50" />
            </div>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-px bg-[var(--color-border)]/30 rounded-xl overflow-hidden">
            {brands.map((brand, i) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <Link href={`/products#${brand.id}`}
                  className="group flex flex-col items-center justify-center p-5 sm:p-7 bg-[var(--color-card)] hover:bg-[var(--color-card-hover)] transition-all duration-300 h-full relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[var(--color-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 flex items-center justify-center invert opacity-70 group-hover:opacity-100 transition-all duration-300 group-hover:scale-110">
                    {brandLogos[brand.id]
                      ? <img src={brandLogos[brand.id]} alt={brand.name} className="max-w-full max-h-full object-contain" />
                      : <span className="text-2xl font-display font-bold text-gray-500 group-hover:text-[var(--color-primary)] transition-colors">{brand.name.charAt(0)}</span>}
                  </div>
                  <span className="text-xs font-semibold text-gray-400 group-hover:text-white text-center tracking-wider">{brand.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CATEGORIES: HUD panels ============ */}
      <section className="py-28 px-4 bg-[#050508] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-[11px] tracking-[0.4em] text-[var(--color-muted)] uppercase font-semibold">Product Categories</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-3 mb-4">
              按<span className="text-gradient-cyan">品类</span>浏览
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link href={`/products#${cat.id}`}
                  className="card-hover-lift flex flex-col items-center gap-4 p-6 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 group relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[var(--color-accent)]/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-3xl relative z-10 group-hover:scale-125 transition-transform duration-300">{cat.icon}</span>
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white text-center tracking-wider">{cat.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BUSINESS: Split cards with hover effects ============ */}
      <section className="py-28 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="text-[11px] tracking-[0.4em] text-red-500 uppercase font-semibold">Racing &amp; Services</span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-3 mb-4">
              赛事<span className="text-gradient-fire">与</span>服务
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: '研发能力', sub: 'GETUNED R&amp;D', desc: '自主品牌研发，将赛道技术转化为民用产品。精准的设计是一切机械加工制造的基础。', href: '/engineering', img: '/images/img1.png', accent: 'cyan' },
              { title: '赛车车型', sub: 'TCR FLEET', desc: 'TCR 赛车中国总代理。代理 Audi RS3 LMS、VW Golf GTI TCR 等车型，覆盖中韩泰地区。', href: '/products', img: '/images/hero/hero-2.png', accent: 'red' },
              { title: '车辆租赁', sub: 'RENTAL', desc: '提供 TCR 规格赛车的短期和赛季租赁服务，降低参赛门槛。', href: '/services', emoji: '🔑', accent: 'cyan' },
              { title: '赛事支持', sub: 'TRACKSIDE', desc: '工程师团队现场支持，包括备件供应、现场维护、数据分析和故障诊断。', href: '/services', emoji: '🛠️', accent: 'red' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link href={item.href}
                  className={'card-hover-lift group block h-full bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] overflow-hidden ' + (item.accent === 'cyan' ? 'hover:border-cyan-500/50' : 'hover:border-red-500')}>
                  <div className="aspect-video bg-gray-900 relative overflow-hidden">
                    {item.img ? <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" /> : <div className="w-full h-full flex items-center justify-center text-5xl">{item.emoji}</div>}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)] to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={'text-[10px] tracking-[0.2em] font-bold uppercase px-2 py-0.5 rounded ' + (item.accent === 'cyan' ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-400/20' : 'text-red-400 bg-red-400/10 border border-red-400/20')}>{item.sub}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">{item.desc}</p>
                    <span className={'mt-4 inline-flex items-center gap-1 text-xs font-semibold transition-all ' + (item.accent === 'cyan' ? 'text-cyan-400' : 'text-red-400') + ' opacity-0 group-hover:opacity-100'}>了解更多 <ArrowRightIcon className="w-3 h-3" /></span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWS ============ */}
      <section className="py-28 px-4 bg-[#050508] relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-end justify-between mb-16">
            <div>
              <span className="text-[11px] tracking-[0.4em] text-gray-500 uppercase font-semibold">Latest Updates</span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-3">最新<span className="text-gradient-fire">动态</span></h2>
            </div>
            <Link href="/news" className="hidden sm:flex items-center gap-2 text-sm text-cyan-400 hover:text-white font-semibold transition-colors tracking-wider">查看全部 <ArrowRightIcon className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.slice(0, 3).map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={'/news/' + item.id} className="card-hover-lift group block h-full bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] overflow-hidden">
                  <div className="aspect-[16/9] bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center text-5xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,17,0,0.08),transparent_60%)]" />
                    {item.category === 'racing' ? '🏁' : item.category === 'product' ? '📦' : '🏢'}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant={item.category === 'racing' ? 'primary' : item.category === 'company' ? 'success' : 'neutral'}>{item.category === 'racing' ? '赛事' : item.category === 'product' ? '产品' : '公司'}</Badge>
                      <span className="text-xs text-gray-600 tracking-wider">{item.date}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white line-clamp-2 leading-snug tracking-wide">{item.title}</h3>
                    <p className="mt-2 text-xs text-gray-500 line-clamp-2 leading-relaxed">{item.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-28 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="relative p-10 sm:p-16 rounded-2xl border border-[var(--color-border)] overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0d0d1f 0%, #0a0a15 50%, #0d0d1f 100%)' }}>
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl" />
            <div className="relative z-10">
              <span className="text-[11px] tracking-[0.4em] text-cyan-400 uppercase font-semibold">Get In Touch</span>
              <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mt-4 mb-4">需要专业<span className="text-gradient-fire">技术支持</span>？</h2>
              <p className="text-gray-500 max-w-xl mx-auto mb-10 leading-relaxed">无论您是车队经理、改装店主还是个人车手，我们的工程师团队随时为您提供专业的产品选型和解决方案建议。</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="mailto:matt@gusto.com.cn" className="group relative px-8 py-3.5 bg-red-500 hover:bg-red-600 text-white font-bold rounded text-sm tracking-wider overflow-hidden transition-all duration-300">
                  <span className="relative z-10 flex items-center gap-2">联系我们 <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
                <Link href="/products" className="px-8 py-3.5 border border-white/10 hover:border-cyan-500/50 text-gray-400 hover:text-white font-semibold rounded text-sm tracking-wider transition-all duration-300">浏览产品</Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
