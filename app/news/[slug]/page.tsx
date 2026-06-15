import Link from 'next/link';
import { news } from '@/lib/data/news';
import { notFound } from 'next/navigation';

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = news.find(n => n.id === slug);
  if (!article) notFound();

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <Link href="/news" className="text-sm text-[var(--color-primary)] hover:underline mb-8 inline-block">← 返回新闻列表</Link>
      
      <div className="flex items-center gap-3 mb-4">
        <span className="text-xs text-[var(--color-primary)] font-semibold uppercase">
          {article.category === 'racing' ? '赛事新闻' : article.category === 'product' ? '产品新闻' : '公司新闻'}
        </span>
        <span className="text-xs text-gray-500">{article.date}</span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{article.title}</h1>
      <p className="text-lg text-gray-400 mb-8">{article.excerpt}</p>

      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-7xl mb-10">
        🏁
      </div>

      <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed whitespace-pre-line text-sm">
        {article.content.split('\n').map((line, i) => {
          if (line.startsWith('# ')) return <h1 key={i} className="text-2xl font-bold text-white mt-8 mb-4">{line.slice(2)}</h1>;
          if (line.startsWith('## ')) return <h2 key={i} className="text-xl font-bold text-white mt-6 mb-3">{line.slice(3)}</h2>;
          if (line.startsWith('- ')) return <li key={i} className="text-gray-400 ml-4">{line.slice(2)}</li>;
          if (line.trim() === '') return <br key={i} />;
          return <p key={i} className="mb-3">{line}</p>;
        })}
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return news.map(n => ({ slug: n.id }));
}
