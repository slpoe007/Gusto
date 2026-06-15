import Link from 'next/link';
import { locations } from '@/lib/data/navigation';

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold font-display tracking-wider text-white">
              GUSTO<span className="text-[var(--color-primary)]">TECHNIK</span>
            </span>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              中国领先的赛车配件供应商。代理 ALCON、Öhlins、Millers Oils、Stand21 等世界顶级品牌。
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">快速链接</h4>
            <div className="space-y-2">
              {[
                { label: '品牌总览', href: '/products' },
                { label: '赛事中心', href: '/racing' },
                { label: '新闻动态', href: '/news' },
                { label: '关于我们', href: '/about' },
                { label: '联系我们', href: '/about#contact' },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">代理品牌</h4>
            <div className="space-y-2">
              {['ALCON', 'Öhlins', 'Millers Oils', 'REVO', 'Stand21', 'GETuned'].map((b) => (
                <Link key={b} href={`/products#${b.toLowerCase()}`} className="block text-sm text-gray-400 hover:text-white transition-colors">
                  {b}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">联系我们</h4>
            <div className="space-y-2">
              {locations.slice(0, 2).map((loc) => (
                <div key={loc.city}>
                  <p className="text-xs text-[var(--color-primary)] font-semibold">{loc.cityZH} / {loc.city}</p>
                  <p className="text-xs text-gray-500">{loc.tel}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © 2005-2025 Gusto Components Limited. All rights reserved. 格时图赛车配件中心 版权所有
          </p>
          <div className="flex gap-4 text-xs text-gray-600">
            <Link href="/privacy" className="hover:text-gray-400">隐私政策</Link>
            <Link href="/terms" className="hover:text-gray-400">使用条款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
