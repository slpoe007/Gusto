'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { drivers } from '@/lib/data/drivers';
import { news } from '@/lib/data/news';
import Badge from '@/components/ui/Badge';

const calendar = [
  { round: 'R1', venue: '上海国际赛车场', date: '2025年5月' },
  { round: 'R2', venue: '宁波国际赛道', date: '2025年6月' },
  { round: 'R3', venue: '绍兴浙江国际赛车场', date: '2025年7月' },
  { round: 'R4', venue: '鄂尔多斯国际赛车场', date: '2025年8月' },
  { round: 'R5', venue: '上海国际赛车场', date: '2025年9月' },
  { round: 'R6', venue: '株洲国际赛车场', date: '2025年10月' },
];

export default function RacingPage() {
  const [activeDriver, setActiveDriver] = useState(drivers[0].id);
  return (
    <div>
      <section className="relative h-[70vh] min-h-[500px] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/racing/grid.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[var(--color-background)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] tracking-[0.5em] text-red-400 uppercase font-bold">TCR China Championship</span>
            <h1 className="font-display text-4xl sm:text-6xl font-black text-white mt-3 mb-4">赛事<span className="text-gradient-fire">运动</span></h1>
            <p className="text-gray-400 text-base max-w-lg">Shell Teamwork Lynk and Co Racing — TCR China 冠军车队。</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <Badge className="mb-4">TCR China 冠军车队</Badge>
              <h2 className="text-2xl sm:text-3xl font-black text-white mb-4">Shell Teamwork <span className="text-red-500">Lynk and Co Racing</span></h2>
              <p className="text-gray-400 leading-relaxed text-sm">车队由格时图集团旗下Teamwork团队运营，使用领克03 TCR赛车参赛。</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="aspect-video rounded-xl overflow-hidden bg-gray-900">
              <img src="/images/business/race-cars.jpg" alt="车队" className="w-full h-full object-cover opacity-60" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase font-bold">Driver Lineup</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-3">车手<span className="text-gradient-fire">阵容</span></h2>
          </div>
          <div className="flex justify-center gap-3 mb-10">
            {drivers.map((d) => (<button key={d.id} onClick={() => setActiveDriver(d.id)} className={'px-5 py-2.5 rounded-full text-sm font-bold tracking-[0.1em] transition-all duration-300 ' + (activeDriver === d.id ? 'bg-red-500 text-white' : 'bg-white/[0.03] text-gray-400 hover:text-white border border-white/[0.05]')}>#{d.number} {d.name}</button>))}
          </div>
          {drivers.filter(d => d.id === activeDriver).map((driver) => (
            <motion.div key={driver.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[var(--color-card)] rounded-2xl border border-white/[0.04] overflow-hidden">
              <div className="aspect-[4/5] bg-gray-900 flex items-center justify-center relative overflow-hidden">
                <span className="text-[12rem] font-display font-black text-white/[0.03]">#{driver.number}</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-red-900/40 to-red-800/10 border-2 border-red-500/30 flex items-center justify-center text-5xl font-display font-black text-red-500">#{driver.number}</div>
                </div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-4xl font-display font-black text-red-500">#{driver.number}</span>
                  <div><h3 className="text-2xl font-black text-white">{driver.name}</h3><p className="text-gray-400">{driver.nameZH}</p></div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{driver.bio}</p>
                <div className="space-y-2">
                  <h4 className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.2em]">赛事成就</h4>
                  {driver.achievements.map((a) => (<p key={a} className="text-xs text-gray-500 flex items-center gap-2"><span className="w-1.5 h-1.5 bg-red-500 rounded-full shrink-0" />{a}</p>))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase font-bold">Season Calendar</span>
            <h2 className="font-display text-3xl sm:text-5xl font-black text-white mt-3">2025 <span className="text-gradient-fire">赛历</span></h2>
          </div>
          <div className="space-y-2">
            {calendar.map((race, i) => (
              <motion.div key={race.round} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-5 p-5 bg-[var(--color-card)] rounded-xl border border-white/[0.03]">
                <span className="font-display text-xl font-black text-red-500 w-14">{race.round}</span>
                <div className="flex-1"><p className="text-sm font-bold text-white">{race.venue}</p><p className="text-xs text-gray-500">{race.date}</p></div>
                <Badge variant="success">已完成</Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-10">
            <h2 className="font-display text-3xl sm:text-4xl font-black text-white">赛事<span className="text-gradient-fire">新闻</span></h2>
            <Link href="/news" className="text-sm text-gray-500 hover:text-white font-medium">查看全部 →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {news.filter(n => n.category === 'racing').slice(0, 3).map((item, i) => (
              <Link key={item.id} href={'/news/' + item.id} className="group block h-full bg-[var(--color-card)] rounded-xl border border-white/[0.04] overflow-hidden hover:border-red-500/20 transition-all duration-400">
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center text-4xl"><div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,17,0,0.05),transparent_60%)]" /><span className="relative z-10">🏁</span></div>
                <div className="p-5"><Badge variant="primary">赛事</Badge><h3 className="mt-2 text-sm font-bold text-white line-clamp-2">{item.title}</h3></div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
