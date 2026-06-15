import Link from 'next/link';
import { brands, categories } from '@/lib/data/brands';
import { news } from '@/lib/data/news';

const featuredProducts = [
  { id: 'alcon-advantage-extreme', name: 'ALCON ADVANTAGE EXTREME', cat: '刹车系统', img: '/images/products/alcon-extreme.jpg' },
  { id: 'ohlins-dfv', name: 'Öhlins DFV 避震器', cat: '悬挂系统', img: '/images/products/ohlins-dfv.jpg' },
  { id: 'millers-cfs-nt', name: 'Millers CFS NT+ 机油', cat: '油品油液', img: '/images/products/millers-cfs.jpg' },
  { id: 'stand21-suit', name: 'Stand21 赛车服', cat: '赛车装备', img: '/images/products/stand21-suit.jpg' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--color-background)] z-10" />
        <div className="absolute inset-0 bg-[url('/images/hero/racing-bg.jpg')] bg-cover bg-center" style={{ filter: 'brightness(0.6)' }} />
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold tracking-widest text-white mb-6">
            GUSTO<span className="text-[var(--color-primary)]">TECHNIK</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
            赛车配件与技术服务专家 — 代理 ALCON、Öhlins、Millers Oils 等世界顶级品牌
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/products" className="px-8 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-semibold rounded-lg transition-colors">
              查看产品
            </Link>
            <Link href="/racing" className="px-8 py-3 border border-gray-600 hover:border-white text-gray-300 hover:text-white rounded-lg transition-colors">
              赛事动态
            </Link>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-white mb-4">
          代理<span className="text-[var(--color-primary)]">品牌</span>
        </h2>
        <p className="text-center text-gray-400 mb-12">全球顶级赛车品牌，为中国赛车运动服务</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {brands.map((brand) => (
            <Link key={brand.id} href={`/products?brand=${brand.id}`}
              className="group flex flex-col items-center p-6 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:bg-[var(--color-card-hover)] transition-all duration-300">
              <div className="w-16 h-16 mb-3 flex items-center justify-center text-2xl font-bold text-gray-500 group-hover:text-white transition-colors">
                {brand.name.charAt(0)}
              </div>
              <span className="text-sm font-semibold text-gray-300 group-hover:text-white text-center">{brand.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-white mb-12">
            按<span className="text-[var(--color-primary)]">品类</span>浏览
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((cat) => (
              <Link key={cat.id} href={`/products#${cat.id}`}
                className="flex flex-col items-center gap-3 p-6 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 group">
                <span className="text-3xl">{cat.icon}</span>
                <span className="text-sm font-semibold text-gray-300 group-hover:text-white">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-white mb-12">
          推荐<span className="text-[var(--color-primary)]">产品</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`}
              className="group bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-all duration-300">
              <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-6xl">
                🏎️
              </div>
              <div className="p-4">
                <span className="text-xs text-[var(--color-primary)] font-semibold uppercase">{p.cat}</span>
                <h3 className="mt-1 text-sm font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors">{p.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Racing / Business Sections */}
      <section className="py-20 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-white mb-12">
            赛事<span className="text-[var(--color-primary)]">与</span>服务
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: '研发', desc: 'GETuned 自主品牌研发，从赛道到街道', href: '/engineering', icon: '🔬' },
              { title: '赛车', desc: 'TCR China 车队运营与赛事支持', href: '/racing', icon: '🏁' },
              { title: '租赁', desc: 'TCR 赛车租赁服务', href: '/services', icon: '🔑' },
              { title: '赛事支持', desc: '专业赛事工程与后勤服务', href: '/services', icon: '🛠️' },
            ].map((item) => (
              <Link key={item.title} href={item.href}
                className="group p-6 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300">
                <span className="text-3xl">{item.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-white group-hover:text-[var(--color-primary)] transition-colors">{item.title}</h3>
                <p className="mt-2 text-sm text-gray-400">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
            最新<span className="text-[var(--color-primary)]">动态</span>
          </h2>
          <Link href="/news" className="text-sm text-[var(--color-primary)] hover:underline">查看全部 →</Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {news.slice(0, 3).map((item) => (
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
                <h3 className="text-sm font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs text-gray-400 line-clamp-2">{item.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
