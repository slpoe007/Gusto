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

export default function Footer() {
  return (
    <footer className="bg-[#050508] border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <img src="/images/footlogo.png" alt="Gusto" className="h-6 invert opacity-80 mb-4" />
            <p className="text-sm text-gray-400 leading-relaxed">中国领先的赛车配件供应商。代理 ALCON、Öhlins、Millers Oils、Stand21 等世界顶级品牌。</p>
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">快速链接</h4>
            <div className="space-y-2.5">
              {[{ label: '首页', href: '/' },{ label: '产品中心', href: '/products' },{ label: '赛事运动', href: '/racing' },{ label: '研发能力', href: '/engineering' },{ label: '服务中心', href: '/services' },{ label: '新闻动态', href: '/news' },{ label: '关于我们', href: '/about' }].map((link) => (
                <Link key={link.href} href={link.href} className="block text-sm text-gray-400 hover:text-white transition-colors duration-200">{link.label}</Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">联系我们</h4>
            <div className="space-y-3 text-xs text-gray-400">
              <div>
                <p className="text-[var(--color-primary)] font-semibold mb-1">香港</p>
                <p className="leading-relaxed">香港九龙长沙湾永康街55号金百盛中心11楼1102室</p>
                <p className="mt-1 text-gray-500">+852 23318221</p>
              </div>
              <div>
                <p className="text-[var(--color-primary)] font-semibold mb-1">深圳</p>
                <p className="leading-relaxed">深圳市龙岗区布沙路57号荔景商务区C座102-103</p>
                <p className="mt-1 text-gray-500">+86 755 86915859</p>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-5">关注我们</h4>
            <div className="flex flex-wrap gap-3 mb-6">
              {socials.map((s) => (
                <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="text-xs text-gray-400 hover:text-[var(--color-primary)] transition-colors duration-200 px-2 py-1 rounded border border-gray-700 hover:border-[var(--color-primary)]">{s.name}</a>
              ))}
            </div>
            <p className="text-xs text-gray-500">邮箱：<a href="mailto:info@gusto.com.cn" className="hover:text-gray-300">info@gusto.com.cn</a></p>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-gray-600">
            <span>© 2005-2025 Gusto Components Limited. All rights reserved. 格时图赛车配件中心 版权所有</span>
          </div>
          <div className="flex gap-4 text-xs text-gray-600">
            <Link href="/privacy" className="hover:text-gray-400 transition-colors">隐私政策</Link>
            <Link href="/terms" className="hover:text-gray-400 transition-colors">使用条款</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
