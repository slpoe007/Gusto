'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { brands, categories } from '@/lib/data/brands';
import { news } from '@/lib/data/news';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

const brandLogos: Record<string, string> = {
  alcon: '/images/brand-alcon.png', ohlins: '/images/brand-ohlins.png', millers: '/images/brand-millers.png',
  revo: '/images/brand-revo.png', stand21: '/images/brand-stand21.png', getuned: '/images/brand-getuned.png',
  racetech: '/images/brand-racetech.png', '3mo': '/images/brand-3mo.png', idi: '/images/brand-idi.png',
};
const heroImages = ['/images/hero/hero-2.png', '/images/hero/hero-1.png', '/images/hero/hero-3.png'];

export default function HomePage() {
  const [heroIdx, setHeroIdx] = useState(0);
  const nextHero = useCallback(() => setHeroIdx((i) => (i + 1) % heroImages.length), []);
  useEffect(() => { const t = setInterval(nextHero, 5000); return () => clearInterval(t); }, [nextHero]);

  return (
    <>
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        {heroImages.map((img, i) => <div key={img} className={'absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ' + (i === heroIdx ? 'opacity-100' : 'opacity-0')} style={{ backgroundImage: 'url(\''+img+'\')' }} />)}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[var(--color-background)] z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(204,0,0,0.12),transparent_60%)] z-10" />
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-sm sm:text-base text-gray-400 tracking-[0.3em] uppercase mb-4">中国领先的赛车配件供应商</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[0.15em] text-white mb-8">GUSTO<span className="text-[var(--color-primary)]">TECHNIK</span></motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="text-base sm:text-lg text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">代理 ALCON、Ohlins、Millers Oils、REVO、Stand21 等世界顶级品牌，<br className="hidden sm:block" />为中国赛车运动提供专业配件与技术服务。</motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.45 }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/products" variant="primary" size="lg">查看产品</Button>
            <Button href="/racing" variant="outline" size="lg">赛事动态</Button>
          </motion.div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
            {heroImages.map((_, i) => <button key={i} onClick={() => setHeroIdx(i)} className={'w-12 h-1 rounded-full transition-all duration-400 ' + (i === heroIdx ? 'bg-[var(--color-primary)]' : 'bg-white/20 hover:bg-white/40')} />)}
          </div>
        </div>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20"><ChevronDownIcon className="w-6 h-6 text-gray-500" /></motion.div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">代理<span className="text-[var(--color-primary)]">品牌</span></h2>
            <p className="text-gray-400">全球顶级赛车品牌，为中国赛车运动服务</p>
          </motion.div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {brands.map((brand, i) => (
              <motion.div key={brand.id} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link href={'/products#' + brand.id} className="group flex flex-col items-center p-5 sm:p-6 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:bg-[var(--color-card-hover)] transition-all duration-400">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mb-3 flex items-center justify-center invert opacity-80 group-hover:opacity-100 transition-opacity">
                    {brandLogos[brand.id] ? <img src={brandLogos[brand.id]} alt={brand.name} className="max-w-full max-h-full object-contain" /> : <span className="text-2xl font-bold text-gray-500 group-hover:text-white transition-colors">{brand.name.charAt(0)}</span>}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-300 group-hover:text-white text-center">{brand.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mt-14 text-center">
            <p className="text-xl text-gray-400 mb-4 font-light">十多年来，只为最纯粹的驾驶体验</p>
            <p className="text-sm text-gray-500 max-w-2xl mx-auto leading-relaxed">我们相信，只有诞生于赛道的产品才能提供最极致的性能和感受。格时图将继续为中国汽车爱好者提供专业的推荐和解决方案。</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">按<span className="text-[var(--color-primary)]">品类</span>浏览</h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <motion.div key={cat.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link href={'/products#' + cat.id} className="flex flex-col items-center gap-3 p-6 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-400 group">
                  <span className="text-3xl">{cat.icon}</span>
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white">{cat.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">赛事<span className="text-[var(--color-primary)]">与</span>服务</h2>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { title: '研发能力', desc: 'GETuned 自主品牌研发，将赛道技术转化为民用产品。精准而精细的设计是一切机械加工制造的基础。', href: '/engineering', img: '/images/img1.png' },
              { title: '赛车车型', desc: 'TCR 赛车中国总代理，拥有完善的进口、销售和维护体系。代理 Audi RS3 LMS、VW Golf GTI TCR 等车型。', href: '/products', emoji: '🏎️' },
              { title: '车辆租赁', desc: '提供 Audi RS3 LMS、VW Golf GTI TCR 等 TCR 赛车的短期和赛季租赁服务。', href: '/services', emoji: '🔑' },
              { title: '赛事支持', desc: '经验丰富的工程师团队提供现场赛事支持，包括备件供应、现场维护、数据分析和故障诊断。', href: '/services', emoji: '🛠️' },
            ].map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link href={item.href} className="group block h-full p-6 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-lg hover:shadow-red-900/5 transition-all duration-400">
                  {item.img ? <div className="w-full aspect-video rounded-lg overflow-hidden mb-4 bg-gray-800"><img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-105 transition-all duration-500" /></div> : <span className="text-4xl mb-4 block">{item.emoji}</span>}
                  <h3 className="text-lg font-bold text-white group-hover:text-[var(--color-primary)] transition-colors mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">{item.desc}</p>
                  <span className="mt-4 inline-block text-xs text-[var(--color-primary)] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">了解更多 →</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <motion.h2 initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="font-display text-3xl sm:text-4xl font-bold text-white">最新<span className="text-[var(--color-primary)]">动态</span></motion.h2>
            <Link href="/news" className="text-sm text-[var(--color-primary)] hover:text-white transition-colors font-semibold">查看全部新闻 →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.slice(0, 3).map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={'/news/' + item.id} className="group block h-full bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-all duration-400">
                  <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-5xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,0,0,0.06),transparent_70%)]" />
                    {item.category === 'racing' ? '🏁' : item.category === 'product' ? '📦' : '🏢'}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant={item.category === 'racing' ? 'primary' : item.category === 'company' ? 'success' : 'neutral'}>{item.category === 'racing' ? '赛事' : item.category === 'product' ? '产品' : '公司'}</Badge>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 leading-snug">{item.title}</h3>
                    <p className="mt-2 text-xs text-gray-400 line-clamp-2 leading-relaxed">{item.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[{ value: '20+', label: '年行业经验' },{ value: '10+', label: '代理品牌' },{ value: '4', label: '运营地点' },{ value: '6', label: '旗下公司' }].map((stat, i) => (
              <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="text-center p-6 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)]">
                <span className="text-3xl sm:text-4xl font-display font-bold text-[var(--color-primary)]">{stat.value}</span>
                <p className="mt-2 text-xs text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#050508]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-8 sm:p-12 bg-gradient-to-br from-[var(--color-card)] to-[#0a0a0f] rounded-2xl border border-[var(--color-border)]">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">需要专业技术<span className="text-[var(--color-primary)]">支持</span>？</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">无论您是车队经理、改装店主还是个人车手，我们的技术团队随时为您提供专业的产品选型和解决方案建议。</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button href="mailto:matt@gusto.com.cn" variant="primary" size="lg">联系我们</Button>
              <Button href="/products" variant="outline" size="lg">浏览产品</Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
