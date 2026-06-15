'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const serviceList = [
  { title: '赛事工程支持', icon: '🏁', desc: '为 TCR Asia/China 及国内各级赛事提供专业的赛车工程与后勤支持。', items: ['赛车调校与设定','数据采集与分析','赛中紧急维修','轮胎管理与策略'] },
  { title: '赛车租赁服务', icon: '🔑', desc: '提供 TCR 规格赛车的短期与赛季租赁服务。', items: ['TCR 赛车租赁','赛季套餐','单站租赁','含工程支持选项'] },
  { title: '车手培训', icon: '🎓', desc: '为从新手到职业车手提供系统的驾驶技能培训。', items: ['基础驾驶培训','赛道进阶课程','赛车执照辅导','数据驾驶分析'] },
  { title: '活动支持', icon: '🎪', desc: '为品牌活动、赛道日、新车发布等提供专业组织服务。', items: ['赛道日组织','品牌体验活动','试乘试驾','静态展示'] },
  { title: '门店安装服务', icon: '🔧', desc: '深圳、肇庆门店提供专业的改装部件安装与调试服务。', items: ['刹车系统安装','避震器调校','排气系统安装','ECU 程序刷写'] },
  { title: '技术咨询', icon: '💬', desc: '为经销商和终端客户提供专业的产品选型建议和技术方案设计。', items: ['产品选型建议','改装方案设计','技术故障诊断','定制化方案'] },
];

export default function ServicesPage() {
  return (
    <div>
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,0,0,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            服务<span className="text-[var(--color-primary)]">中心</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-gray-400 max-w-2xl">
            格时图提供从赛事支持到日常维护的全方位专业服务体系。
          </motion.p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceList.map((svc, i) => (
              <motion.div key={svc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] transition-all duration-400">
                <span className="text-3xl">{svc.icon}</span>
                <h3 className="mt-4 text-lg font-bold text-white">{svc.title}</h3>
                <p className="mt-2 text-sm text-gray-400 leading-relaxed">{svc.desc}</p>
                <ul className="mt-4 space-y-1.5">
                  {svc.items.map((item) => (
                    <li key={item} className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="w-1 h-1 bg-[var(--color-primary)] rounded-full shrink-0" />{item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-[#050508]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-8 sm:p-12 bg-gradient-to-br from-[var(--color-card)] to-[#0a0a0f] rounded-2xl border border-[var(--color-border)]">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">需要专业<span className="text-[var(--color-primary)]">服务</span>？</h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">无论您是职业车队还是赛道日爱好者，格时图都能为您提供专业的服务支持。</p>
            <Button href="mailto:info@gusto.com.cn" variant="primary" size="lg">联系我们</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
