'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { use } from 'react';
import { products } from '@/lib/data/products';
import { brands } from '@/lib/data/brands';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';

export default function ProductDetailPage({ params }: { params: Promise<{ brand: string; slug: string }> }) {
  const { slug } = use(params);
  const product = products.find(p => p.id === slug);
  if (!product) return <div className="max-w-7xl mx-auto px-4 py-16 text-white text-center">产品不存在</div>;
  const brand = brands.find(b => b.id === product.brandId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/products" className="hover:text-white transition-colors">产品中心</Link>
        <span>/</span>
        <Link href="/products" className="hover:text-white transition-colors">{brand?.name}</Link>
        <span>/</span>
        <span className="text-gray-300">{product.name}</span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
          className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,0,0,0.1),transparent_70%)]" />
          <span className="text-8xl">🏎️</span>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <Badge>{brand?.name}</Badge>
          <h1 className="mt-3 text-3xl font-bold text-white leading-tight">{product.name}</h1>
          <p className="mt-4 text-gray-400 leading-relaxed text-sm">{product.description}</p>
          <p className="mt-6 text-2xl font-bold text-[var(--color-primary)] font-display">{product.priceRange}</p>

          <div className="mt-8">
            <h3 className="text-lg font-bold text-white mb-4">技术规格</h3>
            <div className="bg-gradient-to-br from-[var(--color-card)] to-[#0a0a0f] rounded-xl border border-[var(--color-border)] overflow-hidden">
              {Object.entries(product.specs).map(([k, v], i) => (
                <div key={k} className={'flex px-5 py-3.5' + (i > 0 ? ' border-t border-[var(--color-border)]' : '')}>
                  <span className="text-sm text-gray-400 w-28 shrink-0">{k}</span>
                  <span className="text-sm text-white font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-bold text-white mb-3">适用车型</h3>
            <div className="flex flex-wrap gap-2">
              {product.vehicleFitment.map((v) => (
                <span key={v} className="px-3 py-1 text-xs rounded-full bg-[var(--color-card)] text-gray-300 border border-[var(--color-border)]">{v}</span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <Button href={'mailto:matt@gusto.com.cn?subject=咨询：' + product.name} variant="primary">咨询价格</Button>
            <Button href="mailto:info@gusto.com.cn" variant="outline">索取资料</Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
