export interface Brand {
  id: string;
  name: string;
  logo: string;
  description: string;
  descriptionEN: string;
  category: 'brakes' | 'suspension' | 'oils' | 'racing-gear' | 'exhaust' | 'electronics' | 'tcr-cars';
  url: string;
  founded?: string;
  tagline?: string;
}

export const brands: Brand[] = [
  {
    id: 'alcon', name: 'ALCON', logo: '/images/brands/alcon.png',
    description: '创立于1983年，世界级制动系统与离合器制造商。ALCON 制动系统遍布全球顶级赛事，与格时图长期合作开发高性能制动套件。',
    descriptionEN: 'Founded in 1983, ALCON specializes in braking systems and clutches. Trusted by elite racing teams worldwide.',
    category: 'brakes', url: 'https://www.alcon.co.uk', founded: '1983',
    tagline: 'World-Class Braking Systems'
  },
  {
    id: 'ohlins', name: 'Öhlins', logo: '/images/brands/ohlins.png',
    description: '创立于1976年，年产13万+支悬挂系统，97%产品出口全球。Öhlins 产品广泛应用于 MotoGP、F1、WRC 等顶级赛事。格时图是 Öhlins 中国官方经销商。',
    descriptionEN: 'Founded in 1976, manufacturing 130,000+ suspension systems annually. Deep motorsport heritage spanning MotoGP, F1, and WRC.',
    category: 'suspension', url: 'https://www.ohlins.com', founded: '1976',
    tagline: 'Advanced Suspension Technology'
  },
  {
    id: 'getuned', name: 'GETuned', logo: '/images/brands/getuned.png',
    description: '格时图自主研发品牌，将赛道前沿技术反馈至民用市场。产品涵盖高性能排气系统、底盘件等，满足性能升级的极致需求。',
    descriptionEN: 'Gusto\'s in-house performance brand, transferring race-proven technology to road applications.',
    category: 'exhaust', url: '', founded: '2018',
    tagline: 'Race to Road Technology'
  },
  {
    id: 'millers', name: 'Millers Oils', logo: '/images/brands/millers.png',
    description: '英国高端润滑油品牌，专注赛车及高性能润滑油研发。NANODRIVE 纳米技术降低摩擦、提升马力，为引擎提供极致保护。',
    descriptionEN: 'British high-performance lubricant brand with NANODRIVE nanotechnology for maximum engine protection.',
    category: 'oils', url: 'https://www.millersoils.co.uk',
    tagline: 'NANODRIVE Technology'
  },
  {
    id: 'revo', name: 'REVO', logo: '/images/brands/revo.png',
    description: '全球领先的汽车性能升级品牌，专注 ECU 调校及动力系统升级，为大众集团等主流品牌提供安全稳定的性能提升方案。',
    descriptionEN: 'Global leader in automotive performance upgrades specializing in ECU tuning and powertrain enhancement.',
    category: 'electronics', url: 'https://www.revotechnik.com',
    tagline: 'Performance ECU Tuning'
  },
  {
    id: 'stand21', name: 'Stand21', logo: '/images/brands/stand21.png',
    description: '法国顶级赛车安全装备品牌，FIA 认证专业赛车服、头盔及安全装备制造商，为 F1、WEC 等赛事提供最高级别安全保护。',
    descriptionEN: 'French premier racing safety equipment brand. FIA-certified suits, helmets, and gear for F1 and WEC.',
    category: 'racing-gear', url: 'https://www.stand21.com',
    tagline: 'FIA-Certified Safety'
  },
  {
    id: 'racetech', name: 'Racetech', logo: '/images/brands/racetech.png',
    description: '专业赛车零部件供应商，提供高性能赛车配件及工程解决方案。',
    descriptionEN: 'Professional racing components supplier with engineering solutions.',
    category: 'racing-gear', url: '',
  },
  {
    id: '3mo', name: '3MO', logo: '/images/brands/3mo.png',
    description: '专业赛车离合器及传动系统品牌，为赛事提供可靠的动力传输解决方案。',
    descriptionEN: 'Professional racing clutch and drivetrain systems for motorsport applications.',
    category: 'racing-gear', url: '',
  },
  {
    id: 'idi', name: 'IDI', logo: '/images/brands/idi.png',
    description: '高性能赛车配件品牌，专注赛车专用零部件研发与制造。',
    descriptionEN: 'High-performance racing components specialist.',
    category: 'racing-gear', url: '',
  },
  // TCR赛车品牌
  {
    id: 'audi-motorsport', name: 'Audi Motorsport', logo: '/images/brands/audi-motorsport.png',
    description: 'Audi RS 3 LMS TCR 制造商。格时图是 Audi Motorsport 亚洲官方经销商，已售出30台 Audi RS 3 LMS TCR 赛车。',
    descriptionEN: 'Official Asian distributor for Audi Motorsport. 30 units of Audi RS 3 LMS TCR sold.',
    category: 'tcr-cars', url: 'https://www.audi.com',
    tagline: 'Official Asian Distributor'
  },
  {
    id: 'vw-motorsport', name: 'Volkswagen Motorsport', logo: '/images/brands/vw-motorsport.png',
    description: 'VW Golf GTI TCR 制造商。格时图是 Volkswagen Motorsport 亚洲官方经销商。',
    descriptionEN: 'Official Asian distributor for Volkswagen Motorsport.',
    category: 'tcr-cars', url: 'https://www.volkswagen.com',
    tagline: 'Official Asian Distributor'
  },
  {
    id: 'cupra-racing', name: 'CUPRA Racing', logo: '/images/brands/cupra.png',
    description: 'CUPRA Leon Competición TCR 制造商。格时图是 CUPRA Racing 亚洲官方经销商。',
    descriptionEN: 'Official Asian distributor for CUPRA Racing.',
    category: 'tcr-cars', url: 'https://www.cupraofficial.com',
    tagline: 'Official Asian Distributor'
  },
];

export const categories = [
  { id: 'brakes', name: '刹车系统', nameEN: 'Brake Systems', icon: '🛑', brands: ['alcon'] },
  { id: 'suspension', name: '悬挂系统', nameEN: 'Suspension', icon: '🔧', brands: ['ohlins'] },
  { id: 'oils', name: '油品油液', nameEN: 'Oils & Fluids', icon: '🛢️', brands: ['millers'] },
  { id: 'racing-gear', name: '赛车装备', nameEN: 'Racing Gear', icon: '🏎️', brands: ['stand21', 'racetech', '3mo', 'idi'] },
  { id: 'exhaust', name: '排气系统', nameEN: 'Exhaust', icon: '💨', brands: ['getuned'] },
  { id: 'electronics', name: '电子系统', nameEN: 'Electronics', icon: '⚡', brands: ['revo'] },
  { id: 'tcr-cars', name: 'TCR赛车', nameEN: 'TCR Race Cars', icon: '🏁', brands: ['audi-motorsport', 'vw-motorsport', 'cupra-racing'] },
];
