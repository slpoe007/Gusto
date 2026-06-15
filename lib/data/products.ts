export interface Product {
  id: string;
  name: string;
  brandId: string;
  categoryId: string;
  description: string;
  specs: Record<string, string>;
  vehicleFitment: string[];
  images: string[];
  priceRange: string;
  featured: boolean;
}

export const products: Product[] = [
  // ALCON
  { id: 'alcon-advantage-extreme', name: 'ADVANTAGE EXTREME 前刹车套件', brandId: 'alcon', categoryId: 'brakes', description: 'ALCON 旗舰级竞技刹车套件，采用 6 活塞卡钳与 380mm 分体浮动碟，为赛道日及竞技比赛提供极限制动力。', specs: { '卡钳': '6活塞', '碟盘尺寸': '380mm', '碟盘类型': '分体浮动碟', '适用': '赛道/竞技' }, vehicleFitment: ['Audi RS3 LMS', 'VW Golf GTI TCR', 'BMW M2 CS Racing'], images: ['/images/products/alcon-extreme.jpg'], priceRange: '¥28,000 - 38,000', featured: true },
  { id: 'alcon-car97', name: 'CAR97 街道性能刹车套件', brandId: 'alcon', categoryId: 'brakes', description: 'ALCON CAR97 系列专为高性能街车设计，兼顾日常驾驶舒适性与激烈驾驶时的强大制动力。', specs: { '卡钳': '4活塞', '碟盘尺寸': '355mm', '碟盘类型': '一体碟', '适用': '街道/赛道日' }, vehicleFitment: ['Audi S4/S5 (B9)', 'BMW M3/M4 (F80/F82)'], images: ['/images/products/alcon-car97.jpg'], priceRange: '¥18,000 - 24,000', featured: true },

  // OHLINS
  { id: 'ohlins-dfv', name: 'Öhlins Road & Track DFV 避震器', brandId: 'ohlins', categoryId: 'suspension', description: 'Öhlins 双流量阀技术（DFV）避震器，在同一阻尼设定下兼顾舒适与操控，是街道/赛道双用途的终极选择。', specs: { '技术': 'DFV 双流量阀', '调节': '20段回弹阻尼', '高度': '可调', '适用': '街道/赛道日' }, vehicleFitment: ['BMW M3/M4 (F80/F82)', 'Audi RS4/RS5 (B9)'], images: ["/images/products/ohlins-dfv.jpg"], priceRange: '¥22,000 - 28,000', featured: true },
  { id: 'ohlins-ttx', name: 'Öhlins TTX 竞技避震器', brandId: 'ohlins', categoryId: 'suspension', description: 'Öhlins TTX 系列专为专业竞技设计，四路可调，提供极致的底盘控制能力。', specs: { '技术': 'TTX 双筒', '调节': '4路独立可调', '适用': '专业竞技' }, vehicleFitment: ['Audi RS3 LMS TCR', '定制赛车'], images: ["/images/products/ohlins-ttx.jpg"], priceRange: '¥60,000 - 120,000', featured: false },

  // Millers Oils
  { id: 'millers-cfs-nt', name: 'Millers CFS NT+ 竞技机油', brandId: 'millers', categoryId: 'oils', description: 'Millers 旗舰级全合成竞技机油，采用 NANODRIVE 纳米技术，降低摩擦、提升马力输出。', specs: { '粘度': '5W-40 / 10W-60', '技术': 'NANODRIVE 纳米', '认证': 'API SN/CF' }, vehicleFitment: ['通用赛车/高性能引擎'], images: ["/images/products/millers-cfs.jpg"], priceRange: '¥800 - 1,200 / 4L', featured: true },
  { id: 'millers-crx', name: 'Millers CRX 75W-90 NT 竞技变速箱油', brandId: 'millers', categoryId: 'oils', description: '专为赛车序列式变速箱设计的全合成齿轮油，NANODRIVE 技术确保极端工况下的可靠润滑。', specs: { '粘度': '75W-90', '技术': 'NANODRIVE 纳米' }, vehicleFitment: ['序列式变速箱', 'LSD差速器'], images: ["/images/products/millers-crx.jpg"], priceRange: '¥400 - 600 / 1L', featured: false },

  // GETuned
  { id: 'getuned-exhaust', name: 'GETuned 高性能排气系统', brandId: 'getuned', categoryId: 'exhaust', description: '格时图自主研发品牌排气系统，采用 T304 不锈钢材质，优化排气效率，提升马力并赋予独特声浪。', specs: { '材质': 'T304 不锈钢', '管径': '76mm', '尾嘴': '碳纤维' }, vehicleFitment: ['VW Golf GTI TCR', 'Audi RS3 LMS'], images: ["/images/products/getuned-exhaust.jpg"], priceRange: '¥8,000 - 15,000', featured: true },

  // REVO
  { id: 'revo-stage1', name: 'REVO Stage 1 ECU 程序', brandId: 'revo', categoryId: 'electronics', description: 'REVO 一阶 ECU 调校程序，安全稳定地提升引擎输出，不改硬件的性能升级首选。', specs: { '阶段': 'Stage 1', '提升': '+15-25% 马力', '安装': 'OBD 直刷' }, vehicleFitment: ['Audi S4/S5 (B9)', 'BMW M2/M3/M4', 'VW Golf R'], images: ["/images/products/revo-ecu.jpg"], priceRange: '¥5,000 - 8,000', featured: false },

  // Stand21
  { id: 'stand21-suit', name: 'Stand21 FIA 认证赛车服', brandId: 'stand21', categoryId: 'racing-gear', description: 'FIA 8856-2018 认证专业赛车服，采用 Nomex 防火材料，为车手提供最高级别的安全保护。', specs: { '认证': 'FIA 8856-2018', '材质': 'Nomex 防火', '颜色': '可定制' }, vehicleFitment: ['通用'], images: ["/images/products/stand21-suit.jpg"], priceRange: '¥8,000 - 25,000', featured: true },
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
