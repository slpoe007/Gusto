'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { drivers } from '@/lib/data/drivers';
import { news } from '@/lib/data/news';
import DriverCard from '@/components/racing/DriverCard';
import NewsCard from '@/components/racing/NewsCard';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

const calendar = [
  { round: 'R1', venue: '上海国际赛车场', date: '2025年5月', status: 'completed' },
  { round: 'R2', venue: '宁波国际赛道', date: '2025年6月', status: 'completed' },
  { round: 'R3', venue: '绍兴浙江国际赛车场', date: '2025年7月', status: 'completed' },
  { round: 'R4', venue: '鄂尔多斯国际赛车场', date: '2025年8月', status: 'completed' },
  { round: 'R5', venue: '上海国际赛车场', date: '2025年9月', status: 'completed' },
  { round: 'R6', venue: '株洲国际赛车场', date: '2025年10月', status: 'completed' },
];

export default function RacingPage() {
  return (
    <div>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/hero/hero-1.png')] bg-cover bg-center brightness-[0.35]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[var(--color-background)] z-10" />
        <div className="relative z-20 text-center px-4">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-display text-4xl sm:text-6xl font-bold text-white mb-4">
            赛事<span className="text-[var(--color-primary)]">运动</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-gray-300 text-lg max-w-xl mx-auto">
            Shell Teamwork Lynk & Co Racing — TCR China 冠军车队
          </motion.p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Badge className="mb-4">TCR China 冠军车队</Badge>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
                Shell Teamwork <span className="text-[var(--color-primary)]">Lynk & Co Racing</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                Shell Teamwork Lynk & Co Racing 是 TCR China 的冠军车队，由格时图集团旗下 Teamwork 团队运营。车队使用领克 03 TCR 赛车参赛，以专业的工程技术能力和出色的团队协作在赛场上屡获佳绩。
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                2025 赛季，车队携 Jason (#36)、Sunny (#12)、David (#9) 三位车手征战 TCR China 全年六站比赛，继续为冠军而战。
              </p>
              <Button href="#drivers" variant="outline" size="sm">了解车手阵容</Button>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(204,0,0,0.1),transparent_70%)]" />
              <div className="text-center"><span className="text-8xl block">🏎️</span><span className="text-sm text-gray-500 mt-2 block">Lynk & Co 03 TCR</span></div>
            </motion.div>
          </div>
        </div>
      </section>

      <section id="drivers" className="py-20 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center font-display text-3xl sm:text-4xl font-bold text-white mb-12">车手<span className="text-[var(--color-primary)]">阵容</span></motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {drivers.map((d, i) => (<DriverCard key={d.id} driver={d} detailed index={i} />))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center font-display text-3xl sm:text-4xl font-bold text-white mb-12">2025 <span className="text-[var(--color-primary)]">赛历</span></motion.h2>
          <div className="max-w-3xl mx-auto relative">
            <div className="absolute left-6 top-0 bottom-0 w-px bg-[var(--color-border)] hidden sm:block" />
            <div className="space-y-3">
              {calendar.map((race, i) => (
                <motion.div key={race.round} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                  className="flex items-center gap-6 p-5 bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all">
                  <span className="font-display text-2xl font-bold text-[var(--color-primary)] w-14 text-center shrink-0">{race.round}</span>
                  <div className="flex-1"><p className="text-sm font-semibold text-white">{race.venue}</p><p className="text-xs text-gray-500">{race.date}</p></div>
                  <Badge variant={race.status === 'completed' ? 'success' : 'primary'}>{race.status === 'completed' ? '已完成' : '即将开始'}</Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">赛事<span className="text-[var(--color-primary)]">新闻</span></h2>
            <Link href="/news" className="text-sm text-[var(--color-primary)] hover:text-white transition-colors font-semibold">查看全部 →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.filter(n => n.category === 'racing').slice(0, 3).map((item, i) => (
              <NewsCard key={item.id} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
