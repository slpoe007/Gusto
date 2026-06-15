'use client';

import { motion } from 'framer-motion';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const capabilities = [
  { title: '赛车工程', desc: '底盘调校、动力系统优化、空气动力学分析，基于赛场数据的工程解决方案。', icon: '🏎️' },
  { title: '定制开发', desc: '根据客户需求定制高性能零部件，从设计到制造的全流程服务。', icon: '⚙️' },
  { title: '测试验证', desc: '赛道实测与实验室测试结合，确保产品在极限条件下的可靠性能。', icon: '📊' },
  { title: '逆向工程', desc: '利用先进扫描与测量技术，快速复制或改良零部件。', icon: '🔍' },
  { title: '材料研究', desc: '高性能合金、复合材料、陶瓷基材料的应用研究与测试。', icon: '🧪' },
  { title: '技术支持', desc: '为车队和经销商提供专业的产品选型、安装指导与故障诊断。', icon: '🛠️' },
];

const cases = [
  { title: 'GV Exhaust System', desc: '自主研发排气系统品牌，已为多款 TCR 赛车及高性能街车提供排气解决方案。' },
  { title: 'TCR 赛车定制部件', desc: '为 Lynk & Co 03 TCR 赛车开发多款定制零部件，提升可靠性与竞争力。' },
  { title: '底盘强化套件', desc: '针对国内路况优化的底盘强化组件，已应用于多款德系高性能车型。' },
  { title: '刹车系统优化', desc: '与 ALCON 合作开发的本地化刹车方案，兼顾性能与耐久性。' },
];

export default function EngineeringPage() {
  return (
    <div>
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,0,0,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            研发<span className="text-[var(--color-primary)]">能力</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-gray-400 max-w-2xl">
            格时图集团自主研发品牌与技术能力，将赛道经验转化为产品创新。
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Badge>自主品牌</Badge>
              <h2 className="text-3xl font-bold text-white mt-3 mb-6">GETuned</h2>
              <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
                <p>GETuned = Gusto Engineering + Tuned。我们将赛车领域积累的前沿技术转化为可量产的民用产品，让每一位性能爱好者都能享受到来自赛道的技术红利。</p>
                <p>首款产品为高性能排气系统，采用 T304 不锈钢材质、优化管径设计和独特声浪调校。更多产品正在研发中，包括悬挂升级套件、进气系统、ECU 调校方案等。</p>
              </div>
              <div className="mt-6"><Button href="mailto:matt@gusto.com.cn" variant="outline" size="sm">咨询技术方案</Button></div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,0,0,0.1),transparent_60%)]" />
              <div className="text-center"><span className="text-8xl block">🔬</span><span className="text-sm text-gray-500 mt-2 block">R&D Center</span></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold text-white mb-8">
            技术<span className="text-[var(--color-primary)]">能力</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div key={cap.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] transition-all duration-400">
                <span className="text-3xl">{cap.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-white">{cap.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-bold text-white mb-8">
            成功<span className="text-[var(--color-primary)]">案例</span>
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {cases.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] transition-all duration-400">
                <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
