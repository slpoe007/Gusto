'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { news } from '@/lib/data/news';
import Badge from '@/components/ui/Badge';

const cats = [
  { id: 'all', label: '全部新闻' },
  { id: 'racing', label: '赛事新闻' },
  { id: 'product', label: '产品新闻' },
  { id: 'company', label: '公司新闻' },
];

const catIcons: Record<string, string> = { racing: '🏁', product: '📦', company: '🏢' };
const catColors: Record<string, 'primary' | 'neutral' | 'success'> = { racing: 'primary', product: 'neutral', company: 'success' };
const catLabels: Record<string, string> = { racing: '赛事', product: '产品', company: '公司' };

export default function NewsPage() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? news : news.filter(n => n.category === active);

  return (
    <div>
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,0,0,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            新闻<span className="text-[var(--color-primary)]">动态</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-gray-400 max-w-2xl mb-8">
            格时图集团最新动态 — 赛事新闻、产品发布与公司资讯。
          </motion.p>
          <div className="flex gap-2 flex-wrap">
            {cats.map((cat) => (
              <button key={cat.id} onClick={() => setActive(cat.id)}
                className={'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ' + (active === cat.id ? 'bg-[var(--color-primary)] text-white shadow-lg shadow-red-900/20' : 'bg-[var(--color-card)] text-gray-400 hover:text-white border border-[var(--color-border)]')}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item, i) => (
              <motion.div key={item.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }}>
                <Link href={'/news/' + item.id} className="group block h-full bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-all duration-400">
                  <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-5xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,0,0,0.06),transparent_70%)]" />
                    {catIcons[item.category]}
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant={catColors[item.category]}>{catLabels[item.category]}</Badge>
                      <span className="text-xs text-gray-500">{item.date}</span>
                    </div>
                    <h3 className="text-base font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors line-clamp-2 leading-snug mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-400 line-clamp-3 leading-relaxed">{item.summary}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
