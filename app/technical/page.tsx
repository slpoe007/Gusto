'use client';

import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const faqs = [
  { q: '如何选择合适的刹车套件？', a: '刹车系统的选择需要根据您的车型、使用场景（街道/赛道日/竞技）和预算来确定。我们的技术团队会根据您的需求提供专业选型建议。' },
  { q: 'Öhlins 避震器需要多久保养一次？', a: '一般建议每 2-3 万公里或 2 年进行一次常规保养。竞技用途的避震器建议每赛季结束后进行检查和保养。' },
  { q: 'REVO ECU 调校是否会影响车辆质保？', a: 'REVO 程序为 OBD 直刷，可随时恢复原厂设置。但建议在刷写前了解您车辆品牌的质保政策。' },
  { q: 'Millers 机油适用于哪些车型？', a: 'Millers 提供全系列润滑油产品，覆盖汽油/柴油/赛车引擎。具体适用型号请参考产品说明书或咨询我们的技术团队。' },
  { q: '如何成为格时图的经销商？', a: '请通过官网联系方式或邮件 info@gusto.com.cn 发送您的公司信息，我们的商务团队会与您联系洽谈合作事宜。' },
];

export default function TechnicalPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(204,0,0,0.08),transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            技术<span className="text-[var(--color-primary)]">支持</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-gray-400 max-w-2xl">
            产品资料下载、常见问题解答与技术文档。
          </motion.p>
        </div>
      </section>

      {/* Downloads */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            下载<span className="text-[var(--color-primary)]">中心</span>
          </motion.h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: 'ALCON 产品目录', desc: 'ALCON 刹车系统完整产品目录及技术规格', format: 'PDF' },
              { title: 'Öhlins 技术手册', desc: 'Öhlins 避震器安装调试指南', format: 'PDF' },
              { title: 'Millers 油品选择指南', desc: '根据车型和用途选择合适机油', format: 'PDF' },
              { title: 'REVO 调校方案', desc: 'REVO ECU 调校适用车型及参数', format: 'PDF' },
              { title: 'Stand21 尺码指南', desc: '赛车服及装备尺寸测量指南', format: 'PDF' },
              { title: 'TCR 赛车技术参数', desc: 'Audi/VW/SEAT TCR 赛车技术规格', format: 'PDF' },
            ].map((doc, i) => (
              <motion.div key={doc.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] transition-all duration-400 flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs px-2 py-0.5 bg-red-900/30 text-[var(--color-primary)] border border-red-800/30 rounded font-semibold">{doc.format}</span>
                  <h3 className="mt-3 text-base font-bold text-white">{doc.title}</h3>
                  <p className="mt-1 text-sm text-gray-400">{doc.desc}</p>
                </div>
                <Button href="#" variant="ghost" size="sm" className="mt-4 self-start">下载文件</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 px-4 bg-[#050508]">
        <div className="max-w-4xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-2xl font-bold text-white mb-8"
          >
            常见<span className="text-[var(--color-primary)]">问题</span>
          </motion.h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.details key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="group bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-400"
              >
                <summary className="p-5 cursor-pointer text-sm font-semibold text-white list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-gray-500 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-sm text-gray-400 leading-relaxed border-t border-[var(--color-border)] pt-4">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="p-8 sm:p-12 bg-gradient-to-br from-[var(--color-card)] to-[#0a0a0f] rounded-2xl border border-[var(--color-border)]"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display">
              还有<span className="text-[var(--color-primary)]">问题</span>？
            </h2>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">我们的技术工程师随时准备为您提供专业的技术解答。</p>
            <Button href="mailto:customersupport@gusto.com.cn" variant="primary" size="lg">联系技术支持</Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
