'use client';
import Link from 'next/link';
const socials = [
  { name: '微博', href: 'https://weibo.com/u/1884127993' },
  { name: '抖音', href: 'https://www.douyin.com/user/MS4wLjABAAAArW8C-uF89AkuTUjp1H9ipWztbjDWvoF8mK1a3Rv3_oA' },
  { name: 'B站', href: 'https://space.bilibili.com/519797158' },
  { name: 'Facebook', href: 'https://www.facebook.com/gusto.motorsport' },
  { name: 'Instagram', href: 'https://www.instagram.com/gustoengineering/' },
  { name: 'YouTube', href: 'https://www.youtube.com/@gustoengineering4927' },
];
const locations = [
  { city: '香港', address: '九龙长沙湾永康街55号金百盛中心11楼1102室', tel: '+852 23318221' },
  { city: '深圳', address: '深圳市龙岗区布沙路57号荔景商务区C座102-103', tel: '+86 755 86915859' },
  { city: '北京', address: '北京市东城区广渠门内大街安化北里1号长宝大厦1403/1415室', tel: '+86 10 84334531' },
  { city: '肇庆', address: '广东省肇庆市高新区龙湖大道11号', tel: '+86 758 3999132' },
];
export default function Footer() {
  return (
    <footer className="bg-[#030308] border-t border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src="/images/logo.png" alt="Gusto" className="h-6 opacity-70 mb-4" />
            <p className="text-sm text-gray-500 leading-relaxed mb-4">中国领先的赛车配件供应商。代理ALCON、Ohlins、Millers Oils、Stand21等世界顶级品牌。</p>
            <div className="flex flex-wrap gap-2">{socials.map((s) => (<a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className="text-[10px] text-gray-600 hover:text-gray-400 transition-colors px-2 py-1 rounded border border-white/[0.04] hover:border-white/[0.08]">{s.name}</a>))}</div>
          </div>
          <div>
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-5">快速链接</h4>
            <div className="space-y-2.5">
              {[{ label: '首页', href: '/' },{ label: '产品中心', href: '/products' },{ label: '赛事运动', href: '/racing' },{ label: '研发能力', href: '/engineering' },{ label: '服务中心', href: '/services' },{ label: '技术支持', href: '/technical' },{ label: '新闻动态', href: '/news' },{ label: '关于我们', href: '/about' }].map((l) => (<Link key={l.href} href={l.href} className="block text-sm text-gray-500 hover:text-gray-300 transition-colors">{l.label}</Link>))}
            </div>
          </div>
          <div className="sm:col-span-2">
            <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-5">联系我们</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">{locations.map((loc) => (<div key={loc.city}><p className="text-red-500 font-bold text-xs mb-1">{loc.city}</p><p className="text-xs text-gray-500 leading-relaxed mb-1">{loc.address}</p><p className="text-[11px] text-gray-600">{loc.tel}</p></div>))}</div>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/[0.03] flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-[10px] text-gray-600">(c) 2005-2025 Gusto Components Limited. All rights reserved.</p>
          <div className="flex gap-4 text-[10px] text-gray-600">
            <a href="mailto:info@gusto.com.cn" className="hover:text-gray-400 transition-colors">info@gusto.com.cn</a>
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">隐私政策</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
