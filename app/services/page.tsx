export default function ServicesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
        服务<span className="text-[var(--color-primary)]">中心</span>
      </h1>
      <p className="text-gray-400 mb-16 max-w-2xl">格时图提供从赛事支持到日常维护的全方位专业服务体系。</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: '赛事工程支持', icon: '🏁',
            desc: '为 TCR Asia/China 及国内各级赛事提供专业的赛车工程与后勤支持。包括赛前准备、赛道调校、数据分析及赛中维护。',
            items: ['赛车调校与设定', '数据采集与分析', '赛中紧急维修', '轮胎管理与策略'],
          },
          {
            title: '赛车租赁服务', icon: '🔑',
            desc: '提供 TCR 规格赛车的短期与赛季租赁服务，让车队和车手以更低门槛参与高水平赛事。',
            items: ['TCR 赛车租赁', '赛季套餐', '单站租赁', '含工程支持选项'],
          },
          {
            title: '车手培训', icon: '🎓',
            desc: '联合专业教练团队，为从新手到职业车手提供系统的驾驶技能培训与赛车执照考取辅导。',
            items: ['基础驾驶培训', '赛道进阶课程', '赛车执照辅导', '数据驾驶分析'],
          },
          {
            title: '活动支持', icon: '🎪',
            desc: '为品牌活动、赛道日、新车发布等活动提供赛车展示、试乘试驾及专业组织服务。',
            items: ['赛道日组织', '品牌体验活动', '试乘试驾', '静态展示'],
          },
          {
            title: '门店安装服务', icon: '🔧',
            desc: '深圳、肇庆门店提供专业的改装部件安装与调试服务，由经验丰富的技师团队操作。',
            items: ['刹车系统安装', '避震器调校', '排气系统安装', 'ECU 程序刷写'],
          },
          {
            title: '技术咨询', icon: '💬',
            desc: '为经销商和终端客户提供专业的产品选型建议、技术方案设计和故障诊断支持。',
            items: ['产品选型建议', '改装方案设计', '技术故障诊断', '定制化方案'],
          },
        ].map((svc) => (
          <div key={svc.title} className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] transition-colors">
            <span className="text-3xl">{svc.icon}</span>
            <h3 className="mt-4 text-lg font-bold text-white">{svc.title}</h3>
            <p className="mt-2 text-sm text-gray-400 leading-relaxed">{svc.desc}</p>
            <ul className="mt-4 space-y-1">
              {svc.items.map((item) => (
                <li key={item} className="text-xs text-gray-500 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[var(--color-primary)] rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
