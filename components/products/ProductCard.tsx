'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    brandId: string;
    brandName?: string;
    categoryName?: string;
    description: string;
    priceRange: string;
    images: string[];
  };
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const brand = product.brandName || product.brandId.toUpperCase();
  const img = product.images?.[0]?.startsWith('/') ? product.images[0] : '/images/hero/hero-1.png';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={`/products/${product.brandId}/${product.id}`}
        className="group block bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] hover:shadow-lg hover:shadow-red-900/5 transition-all duration-400">
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center overflow-hidden relative">
          <img src={img} alt={product.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-100" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[var(--color-primary)] font-semibold uppercase tracking-wider">{brand}</span>
            {product.categoryName && <span className="text-xs text-gray-500">{product.categoryName}</span>}
          </div>
          <h3 className="text-sm font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 leading-snug">
            {product.name}
          </h3>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-300">{product.priceRange}</span>
            <span className="text-xs text-gray-500 group-hover:text-[var(--color-primary)] transition-colors">
              查看详情 →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
