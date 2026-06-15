import Link from 'next/link';
import { products } from '@/lib/data/products';
import { brands } from '@/lib/data/brands';

export default async function ProductDetailPage({ params }: { params: Promise<{ brand: string; slug: string }> }) {
  const { slug } = await params;
  const product = products.find(p => p.id === slug);
  if (!product) return <div>产品不存在</div>;

  const brand = brands.find(b => b.id === product.brandId);

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/products" className="hover:text-white">产品中心</Link>
        <span>/</span>
        <Link href={`/products?brand=${product.brandId}`} className="hover:text-white">{brand?.name}</Link>
        <span>/</span>
        <span className="text-gray-300">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-8xl">
          🏎️
        </div>

        {/* Info */}
        <div>
          <span className="text-xs text-[var(--color-primary)] font-semibold">{brand?.name}</span>
          <h1 className="mt-2 text-3xl font-bold text-white">{product.name}</h1>
          <p className="mt-4 text-gray-400 leading-relaxed">{product.description}</p>
          <p className="mt-6 text-2xl font-bold text-[var(--color-primary)]">{product.priceRange}</p>

          {/* Specs */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-white mb-4">技术规格</h3>
            <div className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] divide-y divide-[var(--color-border)]">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k} className="flex px-4 py-3">
                  <span className="text-sm text-gray-400 w-24 shrink-0">{k}</span>
                  <span className="text-sm text-white">{v}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fitment */}
          <div className="mt-6">
            <h3 className="text-lg font-bold text-white mb-3">适用车型</h3>
            <div className="flex flex-wrap gap-2">
              {product.vehicleFitment.map((v) => (
                <span key={v} className="px-3 py-1 text-xs rounded-full bg-[var(--color-card)] text-gray-300 border border-[var(--color-border)]">
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 flex gap-4">
            <a href="mailto:matt@gusto.com.cn?subject=咨询：${product.name}"
              className="px-6 py-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-light)] text-white font-semibold rounded-lg transition-colors">
              咨询价格
            </a>
            <button className="px-6 py-3 border border-[var(--color-border)] hover:border-white text-gray-300 rounded-lg transition-colors">
              索取资料
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateStaticParams() {
  return products.map(p => ({ brand: p.brandId, slug: p.id }));
}
