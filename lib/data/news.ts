export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: 'racing' | 'product' | 'company';
  excerpt: string;
  content: string;
  image: string;
  featured: boolean;
}

export const news: NewsItem[] = [
  {
    id: 'zhuzhou-2025-r6',
    title: 'Shell Teamwork Lynk & Co Racing 株洲站艰难周末拿下关键积分',
    date: '2025-10-20',
    category: 'racing',
    excerpt: 'Shell Teamwork Lynk & Co Racing 在 TCR China 株洲站经历了一个充满挑战的周末。车手 Sunny WONG 和张志强在艰难条件下为车队拿下关键积分，卫冕冠军朱戴维则遭遇了零分的噩梦周末。',
    content: `# Shell Teamwork Lynk & Co Racing 株洲站艰难周末拿下关键积分

株洲国际赛车场再次成为 TCR China 赛季的转折点。Shell Teamwork Lynk & Co Racing 车队在这个充满挑战的周末展现了坚韧的竞技精神。

## Sunny WONG — 稳定输出

12 号车手黄日燊在两回合比赛中展现了出色的稳定性和比赛策略。尽管赛道条件复杂，他始终保持冷静，为车队贡献了宝贵的积分。

## 张志强 — 逆境中的亮点

面对激烈的竞争，张志强在第二回合中完成了几次精彩的超车，展示了 Lynk & Co 03 TCR 赛车的强大竞争力。

## 朱戴维 — 冠军的考验

对于卫冕冠军朱戴维来说，这是一个需要尽快忘记的周末。两回合零分的结果让他和车队的积分榜领先优势受到了威胁。但冠军从不因一次失利而动摇——期待下一站的强势反弹。

## 车队积分

尽管遭遇困难，Shell Teamwork Lynk & Co Racing 在车队积分榜上仍然保持着竞争力。赛季还剩最后两站，一切都还有可能。`,
    image: '/images/news/zhuzhou-2025.jpg',
    featured: true,
  },
  {
    id: 'stand21-authorization',
    title: '格时图正式成为 Stand21 中国区授权经销商',
    date: '2025-09-15',
    category: 'company',
    excerpt: '格时图集团宣布与法国顶级赛车安全装备品牌 Stand21 达成战略合作，正式成为其中国区授权经销商，为中国赛车手提供 FIA 认证的专业赛车安全装备。',
    content: `# 格时图正式成为 Stand21 中国区授权经销商

格时图集团荣幸宣布，我们已与法国顶级赛车安全装备品牌 Stand21 达成战略合作，正式成为其中国区授权经销商。

## 关于 Stand21

Stand21 是 F1、WEC、MotoGP 等世界顶级赛事的官方供应商，以其创新的安全技术和卓越的舒适性闻名于世。品牌产品涵盖：
- FIA 8856-2018 认证赛车服
- 赛车手套
- 赛车鞋
- 防火内衣
- HANS 系统

## 为中国赛车手服务

通过这次合作，格时图将为中国赛车手提供：
- Stand21 全系产品订购服务
- 个性化定制方案
- 专业技术咨询和售后支持

欢迎各车队和车手联系我们了解更多产品信息。`,
    image: '/images/news/stand21-deal.jpg',
    featured: false,
  },
  {
    id: 'getuned-launch',
    title: 'GETuned 自主品牌正式发布 — 从赛道到街道',
    date: '2025-06-01',
    category: 'product',
    excerpt: '格时图自主研发品牌 GETuned 正式亮相，首款产品为高性能排气系统。GETuned 将赛道技术反哺民用市场，为性能爱好者提供专业级升级方案。',
    content: `# GETuned 自主品牌正式发布

格时图集团经过多年技术积累，正式推出自主研发品牌 — GETuned。

## 品牌理念

GETuned = Gusto Engineering + Tuned。我们将赛车领域的前沿技术转化为可量产的民用产品，让每一位性能爱好者都能享受到来自赛道的技术红利。

## 首款产品：高性能排气系统

GETuned 首款产品为高性能排气系统：
- T304 不锈钢材质
- 优化的管径和消音设计
- 碳纤维尾嘴
- 独特声浪调校

首批适配车型：VW Golf GTI TCR、Audi RS3 LMS

## 更多产品即将到来

GETuned 的研发管线包括：悬挂升级套件、进气系统、ECU 调校方案等，敬请期待。`,
    image: '/images/news/getuned-launch.jpg',
    featured: true,
  },
];

export function getNewsByCategory(category: string): NewsItem[] {
  if (category === 'all') return news;
  return news.filter(n => n.category === category);
}

export function getLatestNews(count: number = 3): NewsItem[] {
  return news.slice(0, count);
}

export function getNewsById(id: string): NewsItem | undefined {
  return news.find(n => n.id === id);
}
