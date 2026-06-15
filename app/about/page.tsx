'use client';

import { motion } from 'framer-motion';
import { locations } from '@/lib/data/navigation';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div>
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,0,0,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            关于<span className="text-[var(--color-primary)]">我们</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-gray-400 max-w-2xl">
            格时图集团 — 成立于2005年，中国领先的赛车配件供应商与赛事技术服务商。
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-2xl font-bold text-white mb-6">集团简介</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
                <p>格时图集团成立于2005年，以肇庆广东国际赛车场为运营中心，在香港、深圳、北京等地设有分支机构。</p>
                <p>在商贸方面，格时图是国内最早从事改装零部件进口的服务商，将众多海外一线改装品牌引入国内市场。</p>
                <p>此外，格时图集团自主研发了 GETuned 和 GV Exhaust System 两大自主品牌。</p>
              </div>
            </motion.div>
            <div className="grid grid-cols-2 gap-4">
              {[{ value: '2005', label: '成立年份' },{ value: '6', label: '旗下公司' },{ value: '4', label: '运营地点' },{ value: '10+', label: '代理品牌' }].map((stat, i) => (
                <motion.div key={stat.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6 text-center hover:border-[var(--color-primary)] transition-colors">
                  <span className="text-3xl font-display font-bold text-[var(--color-primary)]">{stat.value}</span>
                  <p className="mt-2 text-xs text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold text-white mb-8">
            联系<span className="text-[var(--color-primary)]">我们</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locations.map((loc, i) => (
              <motion.div key={loc.city} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] transition-all duration-400">
                <h3 className="text-sm font-bold text-white mb-3"><span className="text-[var(--color-primary)]">{loc.cityZH}</span> {loc.city}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-3">{loc.addressZH}</p>
                <p className="text-xs text-gray-500 mb-1">{loc.tel}</p>
                <p className="text-xs text-gray-500">{loc.email}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] transition-colors">
              <span className="text-3xl mb-4 block">🛒</span>
              <h3 className="text-lg font-bold text-white mb-2">线上商城</h3>
              <p className="text-sm text-gray-400 mb-4">访问格时图官方线上商城，在线选购赛车配件。</p>
              <a href="#" className="text-sm text-[var(--color-primary)] hover:underline font-semibold">即将上线 →</a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] transition-colors">
              <span className="text-3xl mb-4 block">🎯</span>
              <h3 className="text-lg font-bold text-white mb-2">加入我们</h3>
              <p className="text-sm text-gray-400 mb-4">如果你热爱赛车运动，欢迎加入格时图团队一起成长。</p>
              <a href="mailto:hr@gusto.com.cn" className="text-sm text-[var(--color-primary)] hover:underline font-semibold">发送简历 →</a>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] transition-colors">
              <span className="text-3xl mb-4 block">🌐</span>
              <h3 className="text-lg font-bold text-white mb-2">社交媒体</h3>
              <p className="text-sm text-gray-400 mb-4">关注我们获取最新赛事动态和产品资讯。</p>
              <div className="flex gap-3 text-xs text-gray-500">
                <a href="https://weibo.com/u/1884127993" target="_blank" className="hover:text-[var(--color-primary)] transition-colors">微博</a>
                <a href="https://www.douyin.com/user/MS4wLjABAAAArW8C-uF89AkuTUjp1H9ipWztbjDWvoF8mK1a3Rv3_oA" target="_blank" className="hover:text-[var(--color-primary)] transition-colors">抖音</a>
                <a href="https://space.bilibili.com/519797158" target="_blank" className="hover:text-[var(--color-primary)] transition-colors">B站</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
