'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { brands, categories } from '@/lib/data/brands';
import { products } from '@/lib/data/products';
import Button from '@/components/ui/Button';
import ProductCard from '@/components/products/ProductCard';
import InquiryForm from '@/components/products/InquiryForm';

const brandLogos: Record<string, string> = {
  alcon: '/images/brand-alcon.png', ohlins: '/images/brand-ohlins.png', millers: '/images/brand-millers.png',
  revo: '/images/brand-revo.png', stand21: '/images/brand-stand21.png', getuned: '/images/brand-getuned.png',
  racetech: '/images/brand-racetech.png', '3mo': '/images/brand-3mo.png', idi: '/images/brand-idi.png',
};

const raceCars = [
  { name: 'Audi RS3 LMS TCR', desc: '奥迪运动部门打造的 TCR 规格赛车。格时图为中韩泰独家代理。', spec: '350HP / 序列式 / FIA TCR认证' },
  { name: 'Volkswagen Golf GTI TCR', desc: '大众官方 TCR 赛车，在全球 TCR 赛事中取得无数胜利。', spec: '350HP / 序列式 / 前驱' },
  { name: 'SEAT Leon TCR', desc: '西雅特官方 TCR 赛车，在 TCR Asia 中表现强劲。', spec: '350HP / 序列式 / 前驱' },
  { name: 'Cupra TCR', desc: '西雅特高性能子品牌 Cupra 的 TCR 赛车。', spec: '350HP / 序列式 / 前驱' },
];

export default function ProductsPage() {
  return (
    <div>
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,0,0,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            产品<span className="text-[var(--color-primary)]">中心</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-gray-400 max-w-2xl mb-8">
            格时图代理全球顶级赛车品牌，提供刹车系统、悬挂系统、油品油液、赛车装备及排气系统等专业产品。
          </motion.p>
          <div className="flex gap-3">
            <Button href="#categories" variant="ghost" size="sm">按品类</Button>
            <Button href="#brands" variant="ghost" size="sm">按品牌</Button>
            <Button href="#race-cars" variant="ghost" size="sm">赛车</Button>
          </div>
        </div>
      </section>

      <section id="categories" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold text-white mb-8">
            按<span className="text-[var(--color-primary)]">品类</span>浏览
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat, i) => (
              <motion.div key={cat.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
                <Link href={`#${cat.id}`} className="flex flex-col items-center gap-3 p-5 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all group">
                  <span className="text-2xl">{cat.icon}</span>
                  <span className="text-sm font-semibold text-gray-300 group-hover:text-white">{cat.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="brands" className="py-16 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold text-white mb-8">
            代理<span className="text-[var(--color-primary)]">品牌</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {brands.map((brand, i) => {
              const count = products.filter(p => p.brandId === brand.id).length;
              return (
                <motion.div key={brand.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                  <Link href={`/products#${brand.id}`} className="group flex items-start gap-4 p-6 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-400">
                    <div className="w-14 h-14 rounded-lg bg-gray-800/50 flex items-center justify-center shrink-0 invert opacity-80 group-hover:opacity-100">
                      {brandLogos[brand.id] ? <img src={brandLogos[brand.id]} alt={brand.name} className="max-w-full max-h-full object-contain p-1" /> : <span className="text-xl font-bold text-gray-500 group-hover:text-white">{brand.name.charAt(0)}</span>}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white group-hover:text-[var(--color-primary)] transition-colors">{brand.name}</h3>
                      <p className="mt-1 text-sm text-gray-400 line-clamp-2 leading-relaxed">{brand.description}</p>
                      <span className="mt-2 inline-block text-xs text-gray-500">{count} 款产品</span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="race-cars" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-2xl font-bold text-white mb-4">
            赛车<span className="text-[var(--color-primary)]">车型</span>
          </motion.h2>
          <p className="text-sm text-gray-400 mb-8">格时图是 Audi RS3 LMS TCR、Volkswagen Golf GTI TCR、SEAT Leon TCR、Cupra TCR 在中国大陆、香港、韩国及泰国地区的唯一经销商。</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {raceCars.map((car, i) => (
              <motion.div key={car.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-400 p-6">
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-4xl shrink-0">🏎️</div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{car.name}</h3>
                    <p className="text-sm text-gray-400 mb-2 leading-relaxed">{car.desc}</p>
                    <span className="text-xs text-[var(--color-primary)] font-semibold">{car.spec}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="all" className="py-16 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8">全部<span className="text-[var(--color-primary)]">产品</span></h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((p, i) => {
              const brand = brands.find(b => b.id === p.brandId);
              return <ProductCard key={p.id} product={{ ...p, brandName: brand?.name }} index={i} />;
            })}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">产品<span className="text-[var(--color-primary)]">咨询</span></h2>
              <p className="text-gray-400 text-sm">不确定哪个产品适合您？我们的技术团队随时为您提供专业建议。</p>
            </div>
            <InquiryForm />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
