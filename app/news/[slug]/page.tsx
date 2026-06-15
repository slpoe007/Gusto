'use client';

import { use } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { news } from '@/lib/data/news';
import { notFound } from 'next/navigation';
import Badge from '@/components/ui/Badge';

const catLabels: Record<string, string> = { racing: '赛事新闻', product: '产品新闻', company: '公司新闻' };
const catColors: Record<string, 'primary' | 'neutral' | 'success'> = { racing: 'primary', product: 'neutral', company: 'success' };

export default function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const article = news.find(n => n.id === slug);
  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
        <Link href="/news" className="text-sm text-[var(--color-primary)] hover:text-white transition-colors mb-8 inline-block font-semibold">← 返回新闻列表</Link>
        <div className="flex items-center gap-3 mb-4">
          <Badge variant={catColors[article.category]}>{catLabels[article.category]}</Badge>
          <span className="text-xs text-gray-500">{article.date}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">{article.title}</h1>
        <p className="text-lg text-gray-400 mb-8 leading-relaxed">{article.excerpt}</p>
        <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden mb-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,0,0,0.08),transparent_70%)]" />
          <span className="text-7xl">🏁</span>
        </div>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-line text-sm">
          {article.content.split('\n').map((line, i) => {
            const trimmed = line.trim();
            if (trimmed.startsWith('# ') && !trimmed.startsWith('## ')) return <h1 key={i} className="text-2xl font-bold text-white mt-8 mb-4">{trimmed.slice(2)}</h1>;
            if (trimmed.startsWith('## ')) return <h2 key={i} className="text-xl font-bold text-white mt-6 mb-3">{trimmed.slice(3)}</h2>;
            if (trimmed === '') return <br key={i} />;
            if (trimmed.startsWith('- ')) return <li key={i} className="text-gray-400 ml-4">{trimmed.slice(2)}</li>;
            return <p key={i} className="mb-3">{line}</p>;
          })}
        </div>
        <div className="mt-12 pt-6 border-t border-[var(--color-border)]">
          <Link href="/news" className="text-sm text-[var(--color-primary)] hover:text-white transition-colors font-semibold">← 返回新闻列表</Link>
        </div>
      </motion.div>
    </div>
  );
}
