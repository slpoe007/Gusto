'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

const productIcons: Record<string, string> = {
  brakes: '🛑', suspension: '🔧', oils: '🛢️', 'racing-gear': '🏎️', exhaust: '💨', electronics: '⚡',
};

interface ProductCardProps {
  product: {
    id: string; name: string; brandId: string; brandName?: string;
    categoryName?: string; description: string; priceRange: string; images: string[];
  };
  index?: number;
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const brand = product.brandName || product.brandId.toUpperCase();
  const imgSrc = product.images?.[0];
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={'/products/' + product.brandId + '/' + product.id}
        className="group block bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-red-500 transition-all duration-400 card-hover-lift"
      >
        <div className="aspect-[4/3] bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center overflow-hidden relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,17,0,0.06),transparent_60%)]" />
          {imgSrc && !imgError ? (
            <img src={imgSrc} alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-80"
              onError={() => setImgError(true)}
            />
          ) : (
            <span className="text-5xl relative z-10 group-hover:scale-125 transition-transform duration-300">
              {productIcons[product.brandId] || '🏎️'}
            </span>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d1f]/90 to-transparent" />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-red-400 font-semibold uppercase tracking-wider">{brand}</span>
            <span className="text-xs text-gray-600">{product.priceRange}</span>
          </div>
          <h3 className="text-sm font-semibold text-white group-hover:text-white transition-colors line-clamp-2 leading-snug">{product.name}</h3>
        </div>
      </Link>
    </motion.div>
  );
}
