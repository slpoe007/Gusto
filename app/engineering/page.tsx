export default function EngineeringPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
        研发<span className="text-[var(--color-primary)]">能力</span>
      </h1>
      <p className="text-gray-400 mb-16 max-w-2xl">格时图集团自主研发品牌与技术能力，将赛道经验转化为产品创新。</p>

      {/* GETuned */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-xs text-[var(--color-primary)] font-semibold uppercase tracking-wider">自主品牌</span>
            <h2 className="text-3xl font-bold text-white mt-2 mb-6">GETuned</h2>
            <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
              <p>GETuned = Gusto Engineering + Tuned。我们将赛车领域积累的前沿技术转化为可量产的民用产品，让每一位性能爱好者都能享受到来自赛道的技术红利。</p>
              <p>首款产品为高性能排气系统，采用 T304 不锈钢材质、优化管径设计和独特声浪调校。更多产品正在研发中，包括悬挂升级套件、进气系统、ECU 调校方案等。</p>
            </div>
          </div>
          <div className="aspect-square bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl flex items-center justify-center text-8xl">🔬</div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-8">技术能力</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: '赛车工程', desc: '底盘调校、动力系统优化、空气动力学分析，基于赛场数据的工程解决方案。', icon: '🏎️' },
            { title: '定制开发', desc: '根据客户需求定制高性能零部件，从设计到制造的全流程服务。', icon: '⚙️' },
            { title: '测试验证', desc: '赛道实测与实验室测试结合，确保产品在极限条件下的可靠性能。', icon: '📊' },
            { title: '逆向工程', desc: '利用先进扫描与测量技术，快速复制或改良零部件。', icon: '🔍' },
            { title: '材料研究', desc: '高性能合金、复合材料、陶瓷基材料的应用研究与测试。', icon: '🧪' },
            { title: '技术支持', desc: '为车队和经销商提供专业的产品选型、安装指导与故障诊断。', icon: '🛠️' },
          ].map((cap) => (
            <div key={cap.title} className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] transition-colors">
              <span className="text-3xl">{cap.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-white">{cap.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cases */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-8">成功案例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: 'GV Exhaust System', desc: '自主研发排气系统品牌，已为多款 TCR 赛车及高性能街车提供排气解决方案。' },
            { title: 'TCR 赛车定制部件', desc: '为 Lynk & Co 03 TCR 赛车开发多款定制零部件，提升可靠性与竞争力。' },
            { title: '底盘强化套件', desc: '针对国内路况优化的底盘强化组件，已应用于多款德系高性能车型。' },
            { title: '刹车系统优化', desc: '与 ALCON 合作开发的本地化刹车方案，兼顾性能与耐久性。' },
          ].map((c) => (
            <div key={c.title} className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6">
              <h3 className="text-lg font-bold text-white mb-2">{c.title}</h3>
              <p className="text-sm text-gray-400">{c.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
