'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'racing' | 'product' | 'company';
  excerpt: string;
  image: string;
}

interface NewsCardProps {
  item: NewsItem;
  index?: number;
}

const catLabels = { racing: '赛事新闻', product: '产品新闻', company: '公司新闻' };
const catIcons = { racing: '🏁', product: '📦', company: '🏢' };
const catColors = { racing: 'primary' as const, product: 'neutral' as const, company: 'success' as const };

export default function NewsCard({ item, index = 0 }: NewsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={`/news/${item.id}`}
        className="group block bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-all duration-400">
        <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-5xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,0,0,0.05),transparent_70%)]" />
          {catIcons[item.category]}
        </div>
        <div className="p-5">
          <div className="flex items-center gap-3 mb-2">
            <Badge variant={catColors[item.category]}>{catLabels[item.category]}</Badge>
            <span className="text-xs text-gray-500">{item.date}</span>
          </div>
          <h3 className="text-sm font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 leading-snug mb-2">
            {item.title}
          </h3>
          <p className="text-xs text-gray-400 line-clamp-2 leading-relaxed">{item.excerpt}</p>
        </div>
      </Link>
    </motion.div>
  );
}
