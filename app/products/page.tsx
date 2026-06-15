import Link from 'next/link';
import { brands, categories } from '@/lib/data/brands';
import { products } from '@/lib/data/products';

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
        产品<span className="text-[var(--color-primary)]">中心</span>
      </h1>
      <p className="text-gray-400 mb-12 max-w-2xl">格时图代理全球顶级赛车品牌，为中国赛车运动提供专业配件与技术支持。</p>

      {/* Categories */}
      <section id="categories" className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-6">按品类浏览</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <Link key={cat.id} href={`#${cat.id}`}
              className="flex flex-col items-center gap-3 p-5 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all">
              <span className="text-2xl">{cat.icon}</span>
              <span className="text-sm font-semibold text-gray-300">{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-6">代理品牌</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand) => {
            const count = products.filter(p => p.brandId === brand.id).length;
            return (
              <Link key={brand.id} href={`/products/${brand.id}`}
                className="group flex items-start gap-4 p-6 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300">
                <div className="w-14 h-14 rounded-lg bg-gray-800 flex items-center justify-center text-xl font-bold text-gray-500 group-hover:text-white shrink-0">
                  {brand.name.charAt(0)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-[var(--color-primary)] transition-colors">{brand.name}</h3>
                  <p className="mt-1 text-sm text-gray-400 line-clamp-2">{brand.description}</p>
                  <span className="mt-2 inline-block text-xs text-gray-500">{count} 款产品</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* All Products */}
      <section id="all">
        <h2 className="text-2xl font-bold text-white mb-6">全部产品</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((p) => {
            const brand = brands.find(b => b.id === p.brandId);
            return (
              <Link key={p.id} href={`/products/${p.brandId}/${p.id}`}
                className="group bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-all duration-300">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-5xl">🏎️</div>
                <div className="p-4">
                  <span className="text-xs text-[var(--color-primary)] font-semibold">{brand?.name}</span>
                  <h3 className="mt-1 text-sm font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">{p.name}</h3>
                  <p className="mt-1 text-xs text-gray-500">{p.priceRange}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Inquiry CTA */}
      <section className="mt-20 p-8 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-light)] rounded-2xl text-center">
        <h2 className="text-2xl font-bold text-white mb-3">需要咨询？</h2>
        <p className="text-white/80 mb-6">不确定哪个产品适合您的赛车？我们的技术团队随时为您提供专业建议。</p>
        <a href="mailto:matt@gusto.com.cn" className="inline-block px-8 py-3 bg-white text-[var(--color-primary)] font-semibold rounded-lg hover:bg-gray-100 transition-colors">
          联系我们
        </a>
      </section>
    </div>
  );
}
