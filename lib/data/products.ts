export interface Product {
  id: string;
  name: string;
  nameEN: string;
  brandId: string;
  categoryId: string;
  description: string;
  descriptionEN: string;
  specs: Record<string, string>;
  vehicleFitment: string[];
  images: string[];
  priceRange: string;
  featured: boolean;
}

export const products: Product[] = [
  // ─── TCR 赛车 ───
  {
    id: 'audi-rs3-lms-tcr',
    name: 'Audi RS 3 LMS TCR 赛车',
    nameEN: 'Audi RS 3 LMS TCR',
    brandId: 'audi-motorsport', categoryId: 'tcr-cars',
    description: 'Audi Sport 官方 TCR 赛车，搭载 2.0T 涡轮增压引擎，序列式变速箱。格时图是 Audi Motorsport 亚洲官方经销商，已售出30台，是 TCR China 赛场主力车型。',
    descriptionEN: 'Official Audi Sport TCR race car with 2.0T turbo engine and sequential gearbox. Gusto is the official Asian distributor with 30 units sold.',
    specs: { '引擎': '2.0T 涡轮增压', '变速箱': '序列式', '驱动': '前驱', '认证': 'TCR  homologation' },
    vehicleFitment: ['TCR China', 'TCR Asia', 'TCR World Tour'],
    images: ['/images/products/audi-rs3-lms.jpg'], priceRange: '¥800,000+', featured: true
  },
  {
    id: 'vw-golf-gti-tcr',
    name: 'VW Golf GTI TCR 赛车',
    nameEN: 'VW Golf GTI TCR',
    brandId: 'vw-motorsport', categoryId: 'tcr-cars',
    description: 'Volkswagen Motorsport 官方 TCR 赛车，基于 Golf GTI 打造。格时图是 Volkswagen Motorsport 亚洲官方经销商。',
    descriptionEN: 'Official Volkswagen Motorsport TCR race car. Gusto is the official Asian distributor.',
    specs: { '引擎': '2.0T 涡轮增压', '变速箱': '序列式', '驱动': '前驱', '认证': 'TCR homologation' },
    vehicleFitment: ['TCR China', 'TCR Asia'],
    images: ['/images/products/vw-golf-tcr.jpg'], priceRange: '¥700,000+', featured: true
  },
  {
    id: 'cupra-leon-tcr',
    name: 'CUPRA Leon Competición TCR 赛车',
    nameEN: 'CUPRA Leon Competición TCR',
    brandId: 'cupra-racing', categoryId: 'tcr-cars',
    description: 'CUPRA Racing 官方 TCR 赛车。格时图是 CUPRA Racing 亚洲官方经销商。',
    descriptionEN: 'Official CUPRA Racing TCR race car. Gusto is the official Asian distributor.',
    specs: { '引擎': '2.0T 涡轮增压', '变速箱': '序列式', '驱动': '前驱', '认证': 'TCR homologation' },
    vehicleFitment: ['TCR China', 'TCR Asia'],
    images: ['/images/products/cupra-leon-tcr.jpg'], priceRange: '¥750,000+', featured: false
  },

  // ─── ALCON 刹车 ───
  {
    id: 'alcon-advantage-extreme',
    name: 'ADVANTAGE EXTREME 前刹车套件',
    nameEN: 'ADVANTAGE EXTREME Front Brake Kit',
    brandId: 'alcon', categoryId: 'brakes',
    description: 'ALCON 旗舰级竞技刹车套件。6活塞卡钳 + 380mm 分体浮动碟，为赛道日及竞技比赛提供极限制动力。ALCON 创立于1983年，是全球顶级赛车队的制动系统首选。',
    descriptionEN: 'Flagship ALCON competition brake kit. 6-piston calipers with 380mm floating discs for ultimate stopping power. Trusted by elite racing teams worldwide since 1983.',
    specs: { '卡钳': '6活塞 Monoblock', '碟盘': '380mm 分体浮动', '材质': '高性能合金', '适用': '赛道/竞技' },
    vehicleFitment: ['Audi RS3 LMS TCR', 'VW Golf GTI TCR', 'BMW M2 CS Racing'],
    images: ['/images/products/alcon-extreme.jpg'], priceRange: '¥28,000 - 38,000', featured: true
  },
  {
    id: 'alcon-car97',
    name: 'CAR97 街道性能刹车套件',
    nameEN: 'CAR97 Street Performance Brake Kit',
    brandId: 'alcon', categoryId: 'brakes',
    description: 'ALCON CAR97 系列专为高性能街车设计，兼顾日常驾驶舒适性与激烈驾驶时的强大制动力。',
    descriptionEN: 'ALCON CAR97 series designed for high-performance street cars, balancing daily comfort with powerful braking.',
    specs: { '卡钳': '4活塞', '碟盘': '355mm', '类型': '一体碟' },
    vehicleFitment: ['Audi S4/S5 (B9)', 'BMW M3/M4 (F80/F82)'],
    images: ['/images/products/alcon-car97.jpg'], priceRange: '¥18,000 - 24,000', featured: true
  },

  // ─── Öhlins 避震 ───
  {
    id: 'ohlins-dfv',
    name: 'Öhlins Road & Track DFV 避震器',
    nameEN: 'Öhlins Road & Track DFV',
    brandId: 'ohlins', categoryId: 'suspension',
    description: 'Öhlins DFV（双流量阀）技术避震器，在同一阻尼设定下兼顾舒适与操控。年产13万+支，97%出口全球，MotoGP/F1/WRC 同源技术。',
    descriptionEN: 'Öhlins Dual Flow Valve technology. 130,000+ units produced annually. Same technology used in MotoGP, F1, and WRC.',
    specs: { '技术': 'DFV 双流量阀', '调节': '20段回弹阻尼', '高度': '可调' },
    vehicleFitment: ['BMW M3/M4 (F80/F82)', 'Audi RS4/RS5 (B9)'],
    images: ['/images/products/ohlins-dfv.jpg'], priceRange: '¥22,000 - 28,000', featured: true
  },
  {
    id: 'ohlins-ttx',
    name: 'Öhlins TTX 竞技避震器',
    nameEN: 'Öhlins TTX Competition',
    brandId: 'ohlins', categoryId: 'suspension',
    description: 'Öhlins TTX 系列专为专业竞技设计，四路可调，提供极致的底盘控制能力。',
    descriptionEN: 'Öhlins TTX series for professional competition. 4-way adjustable for ultimate chassis control.',
    specs: { '技术': 'TTX 双筒', '调节': '4路独立可调', '适用': '专业竞技' },
    vehicleFitment: ['Audi RS3 LMS TCR', '定制赛车'],
    images: ['/images/products/ohlins-ttx.jpg'], priceRange: '¥60,000 - 120,000', featured: false
  },

  // ─── Millers Oils ───
  {
    id: 'millers-cfs-nt',
    name: 'Millers CFS NT+ 竞技机油',
    nameEN: 'Millers CFS NT+ Racing Oil',
    brandId: 'millers', categoryId: 'oils',
    description: 'Millers 旗舰级全合成竞技机油，NANODRIVE 纳米技术降低摩擦、提升马力输出。英国原装进口。',
    descriptionEN: 'Millers flagship fully-synthetic racing oil with NANODRIVE nanotechnology for reduced friction and increased power.',
    specs: { '粘度': '5W-40 / 10W-60', '技术': 'NANODRIVE 纳米', '认证': 'API SN/CF' },
    vehicleFitment: ['通用赛车/高性能引擎'],
    images: ['/images/products/millers-cfs.jpg'], priceRange: '¥800 - 1,200 / 4L', featured: true
  },
  {
    id: 'millers-crx',
    name: 'Millers CRX 75W-90 NT 竞技变速箱油',
    nameEN: 'Millers CRX 75W-90 NT Gear Oil',
    brandId: 'millers', categoryId: 'oils',
    description: '专为赛车序列式变速箱设计的全合成齿轮油，NANODRIVE 技术确保极端工况下的可靠润滑。',
    descriptionEN: 'Full-synthetic gear oil for sequential racing transmissions. NANODRIVE technology for extreme conditions.',
    specs: { '粘度': '75W-90', '技术': 'NANODRIVE 纳米' },
    vehicleFitment: ['序列式变速箱', 'LSD差速器'],
    images: ['/images/products/millers-crx.jpg'], priceRange: '¥400 - 600 / 1L', featured: false
  },

  // ─── GETuned ───
  {
    id: 'getuned-exhaust',
    name: 'GETuned 高性能排气系统',
    nameEN: 'GETuned Performance Exhaust System',
    brandId: 'getuned', categoryId: 'exhaust',
    description: '格时图自主研发品牌排气系统。T304 不锈钢材质，优化排气效率，提升马力并赋予独特声浪。赛道技术民用化。',
    descriptionEN: 'In-house developed exhaust system. T304 stainless steel. Race-proven technology for the road.',
    specs: { '材质': 'T304 不锈钢', '管径': '76mm', '尾嘴': '碳纤维' },
    vehicleFitment: ['VW Golf GTI TCR', 'Audi RS3 LMS'],
    images: ['/images/products/getuned-exhaust.jpg'], priceRange: '¥8,000 - 15,000', featured: true
  },

  // ─── REVO ───
  {
    id: 'revo-stage1',
    name: 'REVO Stage 1 ECU 程序',
    nameEN: 'REVO Stage 1 ECU Software',
    brandId: 'revo', categoryId: 'electronics',
    description: 'REVO 一阶 ECU 调校程序，安全稳定提升引擎输出。OBD 直刷，不改硬件的性能升级首选。',
    descriptionEN: 'REVO Stage 1 ECU calibration. Safe, stable power increase via OBD port. No hardware changes required.',
    specs: { '阶段': 'Stage 1', '提升': '+15-25% 马力', '安装': 'OBD 直刷' },
    vehicleFitment: ['Audi S4/S5 (B9)', 'BMW M2/M3/M4', 'VW Golf R'],
    images: ['/images/products/revo-ecu.jpg'], priceRange: '¥5,000 - 8,000', featured: false
  },

  // ─── Stand21 ───
  {
    id: 'stand21-suit',
    name: 'Stand21 FIA 认证赛车服',
    nameEN: 'Stand21 FIA-Certified Racing Suit',
    brandId: 'stand21', categoryId: 'racing-gear',
    description: 'FIA 8856-2018 认证专业赛车服，Nomex 防火材料。法国顶级品牌，为 F1、WEC 等赛事提供最高级别安全保护。',
    descriptionEN: 'FIA 8856-2018 certified professional racing suit. Nomex fire-resistant material. Used in F1 and WEC.',
    specs: { '认证': 'FIA 8856-2018', '材质': 'Nomex 防火', '颜色': '可定制' },
    vehicleFitment: ['通用'],
    images: ['/images/products/stand21-suit.jpg'], priceRange: '¥8,000 - 25,000', featured: true
  },
];

// ─── 品牌合作主机厂产品（OEM 合作项目） ───
export const oemProjects = [
  { name: '极氪 009 / 001 / X', type: '悬挂与制动开发', brands: ['Öhlins', 'ALCON'] },
  { name: '智己汽车', type: 'Öhlins 原厂悬挂项目', brands: ['Öhlins'] },
  { name: 'Hyundai N', type: 'ALCON 原厂制动套件', brands: ['ALCON'] },
  { name: 'Korea Super Race', type: '官方制动供应商', brands: ['ALCON'] },
  { name: 'Hyundai N Cup', type: '官方制动供应商', brands: ['ALCON'] },
  { name: '东风风神奕炫', type: '展车开发', brands: ['GETuned'] },
  { name: '吉利缤瑞', type: '展车开发', brands: ['GETuned'] },
];

export function getProductsByBrand(brandId: string): Product[] {
  return products.filter(p => p.brandId === brandId);
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}
