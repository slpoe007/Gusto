'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { brands, categories } from '@/lib/data/brands';
import { news } from '@/lib/data/news';
import Badge from '@/components/ui/Badge';

const brandLogos: Record<string, string> = {
  alcon: '/images/brands/logo1.png', ohlins: '/images/brands/logo2.png', millers: '/images/brands/logo3.png',
  revo: '/images/brands/logo4.png', stand21: '/images/brands/logo5.png', getuned: '/images/brands/logo7.png',
  racetech: '/images/brands/logo8.png', '3mo': '/images/brands/logo9.png', idi: '/images/brands/logo10.png',
};

const heroSlides = [
  { bg: '/images/hero/hero-2.png', line: 'SPEED · PRECISION · PERFORMANCE' },
  { bg: '/images/hero/hero-3.png', line: 'CHAMPIONS · ENGINEERED' },
  { bg: '/images/hero/hero-1.png', line: 'RACING DNA · SINCE 2005' },
];

export default function HomePage() {
  const [slide, setSlide] = useState(0);
  const nextSlide = useCallback(() => setSlide((s) => (s + 1) % heroSlides.length), []);
  useEffect(() => { const t = setInterval(nextSlide, 6000); return () => clearInterval(t); }, [nextSlide]);

  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div>
      {/* ============ HERO: McLaren-style — image-first, minimal text, speed as UX ============ */}
      <section className="relative h-screen min-h-[700px] overflow-hidden">
        {/* Background image with zoom-out animation */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide}
            initial={{ scale: 1.25, opacity: 0.3 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 1.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${heroSlides[slide].bg}')`, transform: `translateY(${scrollY * 0.3}px)` }}
          />
        </AnimatePresence>

        {/* Dark gradient — keeps bottom half dark for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[var(--color-background)] z-10" />

        {/* Subtle center radial — draws eye to the center car */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,5,16,0.7)_100%)] z-10" />

        {/* Speed lines — thin horizontal streaks that animate */}
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-[0.06]">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px w-full"
              style={{ top: `${15 + i * 18}%`, background: `linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.8) 50%, transparent 100%)` }}
              animate={{ x: ['-100%', '200%'] }}
              transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: 'linear', delay: i * 1.2 }}
            />
          ))}
        </div>

        {/* Bottom text area — minimal and refined */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto px-6 sm:px-10">
            <motion.div
              key={`content-${slide}`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              {/* Superscript line — like McLaren's approach */}
              <div className="flex items-center gap-4 mb-6">
                <motion.span
                  animate={{ width: ['40px', '80px', '40px'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-px bg-red-500/60 inline-block"
                />
                <span className="text-[10px] sm:text-xs tracking-[0.5em] text-red-400/80 uppercase font-bold">
                  {heroSlides[slide].line}
                </span>
              </div>

              {/* Main title — big impact, few words */}
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight mb-5 leading-none">
                格时图<span className="text-gradient-fire">赛车配件</span>
              </h1>

              {/* Single line of supporting text */}
              <p className="text-sm sm:text-base text-gray-400/80 max-w-md mb-8 font-light tracking-wide leading-relaxed">
                代理ALCON、Öhlins、Millers Oils等全球顶级赛车品牌，为中国赛车运动提供专业配件与技术服务。
              </p>

              {/* Single primary CTA + secondary ghost */}
              <div className="flex items-center gap-5">
                <Link href="/products" className="group relative px-8 py-3.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-lg text-sm tracking-[0.1em] overflow-hidden transition-all duration-500">
                  <span className="relative z-10 flex items-center gap-2">探索产品 <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" /></span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Link>
                <Link href="/racing" className="text-sm text-gray-500 hover:text-gray-300 font-medium tracking-[0.1em] transition-colors duration-300">
                  赛事动态 →
                </Link>
              </div>
            </motion.div>

            {/* Slide dots — minimal, bottom right */}
            <div className="absolute bottom-0 right-0 flex items-center gap-2.5">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSlide(i)}
                  className={`rounded-full transition-all duration-700 ${
                    i === slide ? 'w-2 h-2 bg-red-500' : 'w-1.5 h-1.5 bg-white/15 hover:bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator — subtle, bottom center */}
        <motion.div
          animate={{ y: [0, 8, 0], opacity: [0, 0.5, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20"
        >
          <span className="text-[9px] tracking-[0.5em] text-gray-600 uppercase">Scroll</span>
        </motion.div>
      </section>

      {/* ============ STATS BAR — quiet data strip ============ */}
      <section className="py-12 px-4 border-b border-white/[0.03]">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {[
              { value: '20+', label: '年行业经验' },
              { value: '10+', label: '全球代理品牌' },
              { value: '4', label: '运营中心' },
              { value: '6', label: '旗下公司' },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <span className="text-2xl sm:text-3xl font-display font-black text-white">{s.value}</span>
                <p className="mt-1.5 text-[11px] text-gray-500 tracking-[0.15em] uppercase">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BRANDS — refined grid ============ */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase font-bold">Official Partners</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-3 mb-3">代理<span className="text-gradient-fire">品牌</span></h2>
            <p className="text-sm text-gray-500 tracking-wide">全球顶级赛车品牌，为中国赛车运动服务</p>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-px bg-white/[0.02] rounded-xl overflow-hidden">
            {brands.map((brand, i) => (
              <motion.div key={brand.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <Link href={`/products#${brand.id}`} className="group flex flex-col items-center justify-center p-6 sm:p-8 bg-[#0a0a18] hover:bg-[#0d0d22] transition-colors duration-500 h-full">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 flex items-center justify-center invert opacity-50 group-hover:opacity-90 transition-all duration-500 group-hover:scale-105">
                    {brandLogos[brand.id] ? (
                      <img src={brandLogos[brand.id]} alt={brand.name} className="max-w-full max-h-full object-contain" />
                    ) : (
                      <span className="text-xl font-display font-black text-gray-500 group-hover:text-red-400">{brand.name.charAt(0)}</span>
                    )}
                  </div>
                  <span className="text-[11px] font-bold text-gray-500 group-hover:text-white text-center tracking-[0.12em] uppercase">{brand.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRODUCT CAROUSEL — horizontal scroll, image-driven ============ */}
      <section className="py-24 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase font-bold">Featured Products</span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-3">推荐<span className="text-gradient-fire">产品</span></h2>
            </div>
            <Link href="/products" className="hidden sm:flex items-center gap-2 text-sm text-gray-500 hover:text-white font-medium tracking-[0.1em] transition-colors">
              查看全部 <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Horizontal scroll container */}
          <div className="flex gap-5 overflow-x-auto pb-4 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none' }}>
            {[
              { name: 'ALCON ADVANTAGE EXTREME 前刹车套件', brand: 'ALCON', img: '/images/products/alcon-extreme.jpg', href: '/products/alcon/alcon-advantage-extreme', price: '¥28,000 - 38,000' },
              { name: 'Öhlins Road & Track DFV 避震器', brand: 'Öhlins', img: '/images/products/ohlins-dfv.jpg', href: '/products/ohlins/ohlins-dfv', price: '¥22,000 - 28,000' },
              { name: 'Millers CFS NT+ 竞技机油', brand: 'Millers Oils', img: '/images/products/millers-cfs.jpg', href: '/products/millers/millers-cfs-nt', price: '¥800 - 1,200' },
              { name: 'GETuned 高性能排气系统', brand: 'GETuned', img: '/images/products/getuned-exhaust.jpg', href: '/products/getuned/getuned-exhaust', price: '¥8,000 - 15,000' },
              { name: 'Stand21 FIA 认证赛车服', brand: 'Stand21', img: '/images/products/stand21-suit.jpg', href: '/products/stand21/stand21-suit', price: '¥8,000 - 25,000' },
              { name: 'REVO Stage 1 ECU 程序', brand: 'REVO', img: '/images/products/revo-ecu.jpg', href: '/products/revo/revo-stage1', price: '¥5,000 - 8,000' },
            ].map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex-none w-[280px] sm:w-[340px] snap-start group cursor-pointer"
              >
                <Link href={product.href} className="block">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-900 mb-4 relative">
                    <img src={product.img} alt={product.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[10px] tracking-[0.2em] text-white/70 uppercase font-bold bg-black/40 px-2 py-0.5 rounded">{product.brand}</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors leading-snug line-clamp-2">{product.name}</h3>
                  <p className="mt-2 text-xs text-gray-500">{product.price}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ BUSINESS SECTORS ============ */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[10px] tracking-[0.5em] text-red-400 uppercase font-bold">Racing & Services</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-3 mb-3">赛事<span className="text-gradient-fire">与</span>服务</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: '研发能力', sub: 'GETUNED R&D', desc: '自主品牌研发，将赛道技术转化为民用产品。', href: '/engineering', img: '/images/business/rd.jpg' },
              { title: '赛车车型', sub: 'TCR FLEET', desc: 'TCR赛车中国总代理。Audi RS3 LMS、VW Golf GTI TCR等。', href: '/products#race-cars', img: '/images/business/race-cars.jpg' },
              { title: '车辆租赁', sub: 'RENTAL', desc: '提供TCR规格赛车的短期和赛季租赁服务。', href: '/services', img: '/images/business/rental.jpg' },
              { title: '赛事支持', sub: 'TRACKSIDE', desc: '工程师团队现场支持，备件、维护、数据分析。', href: '/services', img: '/images/business/race-support.jpg' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link href={item.href} className="group block h-full bg-[var(--color-card)] rounded-xl border border-white/[0.04] overflow-hidden hover:border-red-500/30 transition-all duration-400">
                  <div className="aspect-[3/2] bg-gray-900 relative overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-700" />
                    <div className="absolute top-4 left-4">
                      <span className="text-[9px] tracking-[0.2em] font-black uppercase px-2 py-0.5 rounded bg-black/50 text-red-400 border border-red-500/20">{item.sub}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-white">{item.title}</h3>
                    <p className="mt-1.5 text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ NEWS ============ */}
      <section className="py-24 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase font-bold">Latest Updates</span>
              <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-3">最新<span className="text-gradient-fire">动态</span></h2>
            </div>
            <Link href="/news" className="hidden sm:flex items-center gap-2 text-sm text-gray-500 hover:text-white font-medium tracking-[0.1em] transition-colors">查看全部 <ArrowRightIcon className="w-4 h-4" /></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {news.slice(0, 3).map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={`/news/${item.id}`} className="group block h-full bg-[var(--color-card)] rounded-xl border border-white/[0.04] overflow-hidden hover:border-red-500/20 transition-all duration-400">
                  <div className="aspect-[16/9] bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center text-4xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,17,0,0.05),transparent_60%)]" />
                    {item.category === 'racing' ? '🏁' : item.category === 'product' ? '📦' : '🏢'}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant={item.category === 'racing' ? 'primary' : item.category === 'company' ? 'success' : 'neutral'}>
                        {item.category === 'racing' ? '赛事' : item.category === 'product' ? '产品' : '公司'}
                      </Badge>
                      <span className="text-[10px] text-gray-600 tracking-wider">{item.date}</span>
                    </div>
                    <h3 className="text-sm font-bold text-white group-hover:text-red-400 transition-colors line-clamp-2 leading-snug">{item.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative p-12 sm:p-16 rounded-3xl border border-white/[0.04] overflow-hidden" style={{ background: 'linear-gradient(160deg, #0d0d1f 0%, #08081a 50%, #0d0d1f 100%)' }}>
            <motion.div animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }} transition={{ duration: 6, repeat: Infinity }} className="absolute -top-20 -right-20 w-60 h-60 bg-red-500/[0.04] rounded-full blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-display text-2xl sm:text-4xl font-black text-white mb-4">需要专业<span className="text-gradient-fire">技术支持</span>？</h2>
              <p className="text-gray-500 max-w-md mx-auto mb-8 text-sm leading-relaxed">无论您是车队经理、改装店主还是个人车手，我们的工程师团队随时为您提供专业建议。</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link href="mailto:matt@gusto.com.cn" className="px-8 py-3.5 bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white font-bold rounded-lg text-sm tracking-[0.1em] transition-all duration-500">联系我们</Link>
                <Link href="/products" className="px-8 py-3.5 border border-white/10 hover:border-white/20 text-gray-400 hover:text-white rounded-lg text-sm tracking-[0.1em] transition-all duration-300">浏览产品</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
