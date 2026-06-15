'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { use } from 'react';
import { products } from '@/lib/data/products';
import { brands } from '@/lib/data/brands';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export default function ProductDetailPage({ params }: { params: Promise<{ brand: string; slug: string }> }) {
  const { slug } = use(params);
  const product = products.find(p => p.id === slug);
  if (!product) return <div className="max-w-7xl mx-auto px-4 py-16 text-white text-center">产品不存在</div>;
  const brand = brands.find(b => b.id === product.brandId);
  const img = product.images.length > 0 ? product.images[0] : '/images/hero/hero-1.png';

  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 pt-8">
        <Link href="/products" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors mb-4"><ChevronLeftIcon className="w-4 h-4" />返回产品中心</Link>
        <div className="flex items-center gap-2 text-xs text-gray-600 mb-6">
          <Link href="/products" className="hover:text-gray-400">产品中心</Link><span>/</span>
          <span className="text-gray-400">{brand?.name}</span><span>/</span>
          <span className="text-gray-300">{product.name}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
            <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-950 rounded-xl overflow-hidden flex items-center justify-center">
              <img src={img} alt={product.name} className="w-full h-full object-cover opacity-70" />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
            <Badge className="mb-3">{brand?.name}</Badge>
            <h1 className="text-3xl font-black text-white leading-tight mb-4">{product.name}</h1>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{product.description}</p>

            <div className="flex items-center gap-4 p-4 bg-[var(--color-card)] rounded-xl border border-white/[0.04] mb-8">
              <span className="text-2xl font-display font-black text-red-500">{product.priceRange}</span>
              <span className="text-[10px] text-gray-500">参考价格区间</span>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-bold text-white uppercase tracking-[0.15em] mb-4">技术规格</h3>
              <div className="bg-gradient-to-br from-[var(--color-card)] to-[#0a0a0f] rounded-xl border border-white/[0.04] overflow-hidden">
                {Object.entries(product.specs).map(([k, v], i) => (
                  <div key={k} className={'flex px-5 py-3.5' + (i > 0 ? ' border-t border-white/[0.03]' : '')}>
                    <span className="text-sm text-gray-500 w-28 shrink-0">{k}</span>
                    <span className="text-sm text-white font-medium">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-bold text-white uppercase tracking-[0.15em] mb-3">适用车型</h3>
              <div className="flex flex-wrap gap-2">
                {product.vehicleFitment.map((v) => (<span key={v} className="px-3 py-1.5 text-xs rounded-full bg-white/[0.03] text-gray-400 border border-white/[0.05]">{v}</span>))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button href={'mailto:matt@gusto.com.cn?subject=咨询：' + product.name} variant="primary" size="lg">咨询价格</Button>
              <Button href="mailto:info@gusto.com.cn" variant="outline" size="lg">索取资料</Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
