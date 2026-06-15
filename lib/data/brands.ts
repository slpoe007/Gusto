export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: 'brakes' | 'suspension' | 'oils' | 'racing-gear' | 'exhaust' | 'electronics';
  url: string;
}

export const brands: Brand[] = [
  { id: 'alcon', name: 'ALCON', logo: '/images/brands/alcon.png', description: '英国顶级刹车品牌，世界级制动系统制造商，为赛车及高性能街车提供制动解决方案。', category: 'brakes', url: 'https://www.alcon.co.uk' },
  { id: 'ohlins', name: 'Öhlins', logo: '/images/brands/ohlins.png', description: '瑞典殿堂级避震器品牌，Öhlins 产品广泛应用于 MotoGP、F1、WRC 等顶级赛事。', category: 'suspension', url: 'https://www.ohlins.com' },
  { id: 'getuned', name: 'GETuned', logo: '/images/brands/getuned.png', description: '格时图自主研发品牌，将赛车领域的前沿技术反馈至民用市场，满足性能升级的极致需求。', category: 'exhaust', url: '' },
  { id: 'millers', name: 'Millers Oils', logo: '/images/brands/millers.png', description: '英国高端润滑油品牌，专注赛车及高性能润滑油研发，为引擎提供极致保护。', category: 'oils', url: 'https://www.millersoils.co.uk' },
  { id: 'revo', name: 'REVO', logo: '/images/brands/revo.png', description: '全球领先的汽车性能升级品牌，专注 ECU 调校及动力系统升级。', category: 'electronics', url: 'https://www.revotechnik.com' },
  { id: 'stand21', name: 'Stand21', logo: '/images/brands/stand21.png', description: '法国顶级赛车安全装备品牌，为 F1、WEC 等赛事提供专业赛车服、头盔及安全装备。', category: 'racing-gear', url: 'https://www.stand21.com' },
  { id: 'racetech', name: 'Racetech', logo: '/images/brands/racetech.png', description: '专业赛车零部件供应商，提供高性能赛车配件及工程解决方案。', category: 'racing-gear', url: '' },
  { id: '3mo', name: '3MO', logo: '/images/brands/3mo.png', description: '专业赛车离合器及传动系统品牌，为赛车提供可靠的动力传输解决方案。', category: 'racing-gear', url: '' },
  { id: 'idi', name: 'IDI', logo: '/images/brands/idi.png', description: '高性能赛车配件品牌，专注赛车专用零部件研发与制造。', category: 'racing-gear', url: '' },
];

export const categories = [
  { id: 'brakes', name: '刹车系统', icon: '🛑', brands: ['alcon'] },
  { id: 'suspension', name: '悬挂系统', icon: '🔧', brands: ['ohlins'] },
  { id: 'oils', name: '油品油液', icon: '🛢️', brands: ['millers'] },
  { id: 'racing-gear', name: '赛车装备', icon: '🏎️', brands: ['stand21', 'racetech', '3mo', 'idi'] },
  { id: 'exhaust', name: '排气系统', icon: '💨', brands: ['getuned'] },
  { id: 'electronics', name: '电子系统', icon: '⚡', brands: ['revo'] },
];
