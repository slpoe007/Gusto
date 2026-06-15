import { locations } from '@/lib/data/navigation';

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
        关于<span className="text-[var(--color-primary)]">我们</span>
      </h1>
      <p className="text-gray-400 mb-16 max-w-2xl">格时图集团 — 成立于2005年，中国领先的赛车配件供应商与赛事技术服务商。</p>

      {/* Company Intro */}
      <section className="mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">集团简介</h2>
            <div className="space-y-4 text-gray-400 leading-relaxed text-sm">
              <p>格时图集团成立于2005年，以肇庆广东国际赛车场为运营中心，在香港、深圳、北京等地设有分支机构。集团旗下包括：格时图工程有限公司（香港）、深圳格时图汽车工程有限公司、北京格斯通汽车配件有限公司、肇庆高新区格时图汽车技术研发有限公司、Teamwork Team Co., Ltd.（香港）、肇庆Teamwork赛车运动推广有限公司等6家公司。</p>
              <p>在商贸方面，格时图是国内最早从事改装零部件进口的服务商，将众多海外一线改装品牌引入国内市场，如英国顶级刹车品牌 ALCON、瑞典殿堂级避震器 Öhlins、英国高端机油 Millers，以及 REVO、IDI、Racetech、COSWORTH、XTRAC、3MO、Stand21 等品牌。</p>
              <p>此外，格时图集团自主研发了 GETuned 和 GV Exhaust System 两大自主品牌，将赛车运动领域的前沿技术反哺民用市场，满足用户对性能升级的极致需求。</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[2005, 6, 4, 10].map((n, i) => (
              <div key={i} className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6 text-center">
                <span className="text-3xl font-display font-bold text-[var(--color-primary)]">{n}</span>
                <p className="mt-2 text-xs text-gray-400">{['成立年份', '旗下公司', '运营地点', '代理品牌'][i]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section id="contact" className="mb-20">
        <h2 className="text-2xl font-bold text-white mb-8">联系我们</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((loc) => (
            <div key={loc.city} className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6 hover:border-[var(--color-primary)] transition-colors">
              <h3 className="text-sm font-bold text-white mb-3">
                {loc.cityZH} <span className="text-[var(--color-primary)]">{loc.city}</span>
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-3">{loc.addressZH}</p>
              <p className="text-xs text-gray-500">{loc.tel}</p>
              <p className="text-xs text-gray-500">{loc.email}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Social & Info */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6">
          <h3 className="text-lg font-bold text-white mb-4">线上商城</h3>
          <p className="text-sm text-gray-400">扫描二维码访问格时图官方商城，在线选购赛车配件。</p>
        </div>
        <div className="bg-[var(--color-card)] rounded-xl border border-[var(--color-border)] p-6">
          <h3 className="text-lg font-bold text-white mb-4">加入我们</h3>
          <p className="text-sm text-gray-400 mb-4">如果你热爱赛车运动，欢迎加入格时图团队。</p>
          <a href="mailto:hr@gusto.com.cn" className="text-sm text-[var(--color-primary)] hover:underline">发送简历 →</a>
        </div>
      </section>
    </div>
  );
}
