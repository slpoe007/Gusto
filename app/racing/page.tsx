import Link from 'next/link';
import { drivers } from '@/lib/data/drivers';
import { news } from '@/lib/data/news';

const calendar = [
  { round: 'R1', venue: '上海国际赛车场', date: '2025-05', status: 'completed' },
  { round: 'R2', venue: '宁波国际赛道', date: '2025-06', status: 'completed' },
  { round: 'R3', venue: '绍兴浙江国际赛车场', date: '2025-07', status: 'completed' },
  { round: 'R4', venue: '鄂尔多斯国际赛车场', date: '2025-08', status: 'completed' },
  { round: 'R5', venue: '上海国际赛车场', date: '2025-09', status: 'completed' },
  { round: 'R6', venue: '株洲国际赛车场', date: '2025-10', status: 'completed' },
];

export default function RacingPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[var(--color-background)] z-10" />
        <div className="absolute inset-0 bg-[url('/images/racing/grid.jpg')] bg-cover bg-center brightness-50" />
        <div className="relative z-20 text-center px-4">
          <h1 className="font-display text-4xl sm:text-6xl font-bold text-white mb-4">
            赛事<span className="text-[var(--color-primary)]">运动</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">Shell Teamwork Lynk & Co Racing — TCR China 冠军车队</p>
        </div>
      </section>

      {/* Team Intro */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6">
              Shell Teamwork <span className="text-[var(--color-primary)]">Lynk & Co Racing</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Shell Teamwork Lynk & Co Racing 是 TCR China 的冠军车队，由格时图集团旗下 Teamwork 团队运营。车队使用领克 03 TCR 赛车参赛，以专业的工程技术能力和出色的团队协作在赛场上屡获佳绩。
            </p>
            <p className="text-gray-400 leading-relaxed">
              2025 赛季，车队携 Jason (#36)、Sunny (#12)、David (#9) 三位车手征战 TCR China 全年六站比赛，继续为冠军而战。
            </p>
          </div>
          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-8xl">
            🏎️
          </div>
        </div>
      </section>

      {/* Drivers */}
      <section id="drivers" className="py-20 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-white mb-12">
            车手<span className="text-[var(--color-primary)]">阵容</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {drivers.map((driver) => (
              <div key={driver.id} className="group bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-all duration-300">
                <div className="aspect-[3/4] bg-gradient-to-b from-gray-800 to-gray-900 flex items-center justify-center relative">
                  <span className="text-7xl font-display font-bold text-gray-700">#{driver.number}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl font-display font-bold text-[var(--color-primary)]">#{driver.number}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{driver.name}</h3>
                      <p className="text-sm text-gray-400">{driver.nameZH}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-400 line-clamp-3 mb-4">{driver.bio}</p>
                  <div className="space-y-1">
                    {driver.achievements.slice(0, 3).map((a, i) => (
                      <p key={i} className="text-xs text-gray-500 flex items-center gap-2">
                        <span className="w-1 h-1 bg-[var(--color-primary)] rounded-full" />
                        {a}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendar */}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-center font-display text-3xl sm:text-4xl font-bold text-white mb-12">
          2025 <span className="text-[var(--color-primary)]">赛历</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {calendar.map((race) => (
            <div key={race.round} className="flex items-center gap-4 p-4 bg-[var(--color-card)] rounded-lg border border-[var(--color-border)]">
              <span className="font-display text-xl font-bold text-[var(--color-primary)] w-12">{race.round}</span>
              <div className="flex-1">
                <p className="text-sm font-semibold text-white">{race.venue}</p>
                <p className="text-xs text-gray-500">{race.date}</p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-green-900/50 text-green-400 border border-green-800">
                已完成
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* News */}
      <section className="py-20 px-4 bg-[#050508]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              赛事<span className="text-[var(--color-primary)]">新闻</span>
            </h2>
            <Link href="/news" className="text-sm text-[var(--color-primary)] hover:underline">查看全部 →</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.filter(n => n.category === 'racing').slice(0, 3).map((item) => (
              <Link key={item.id} href={`/news/${item.id}`}
                className="group bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] overflow-hidden hover:border-[var(--color-primary)] transition-all">
                <div className="aspect-[16/9] bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-5xl">🏁</div>
                <div className="p-5">
                  <span className="text-xs text-gray-500">{item.date}</span>
                  <h3 className="mt-2 text-sm font-semibold text-white group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">{item.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
