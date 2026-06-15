'use client';

import { useState } from 'react';
import Link from 'next/link';
import { news } from '@/lib/data/news';

const categories = [
  { id: 'all', label: '全部' },
  { id: 'racing', label: '赛事新闻' },
  { id: 'product', label: '产品新闻' },
  { id: 'company', label: '公司新闻' },
];

export default function NewsPage() {
  const [active, setActive] = useState('all');
  const filtered = active === 'all' ? news : news.filter(n => n.category === active);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
        新闻<span className="text-[var(--color-primary)]">动态</span>
      </h1>
      <p className="text-gray-400 mb-12 max-w-2xl">格时图集团最新动态 — 赛事新闻、产品发布与公司资讯。</p>

      {/* Filter */}
      <div className="flex gap-2 mb-12 flex-wrap">
        {categories.map((cat) => (
          <button key={cat.id} onClick={() => setActive(cat.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              active === cat.id
                ? 'bg-[var(--color-primary)] text-white'
                : 'bg-[var(--color-card)] text-gray-400 hover:text-white border border-[var(--color-border)]'
            }`}>
            {cat.label}
          </button>
        ))}
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((item) => (
          <Link key={item.id} href={`/news/${item.id}`}
            className="group bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-all duration-300">
            <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-5xl">
              {item.category === 'racing' ? '🏁' : item.category === 'product' ? '📦' : '🏢'}
            </div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs text-[var(--color-primary)] font-semibold uppercase">
                  {item.category === 'racing' ? '赛事' : item.category === 'product' ? '产品' : '公司'}
                </span>
                <span className="text-xs text-gray-500">{item.date}</span>
              </div>
              <h3 className="text-base font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-gray-400 line-clamp-3">{item.excerpt}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
