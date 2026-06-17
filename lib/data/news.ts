export interface NewsItem {
  id: string;
  title: string;
  titleEN: string;
  date: string;
  category: 'racing' | 'product' | 'company';
  summary: string;
  summaryEN: string;
  image?: string;
  content?: string;
}

export const news: NewsItem[] = [
  {
    id: '2025-tcr-triple-crown',
    title: '捷凯车队2025赛季三冠王大满贯！车队+车型+车手冠军',
    titleEN: 'Teamwork Motorsport 2025 Triple Crown — Team, Model & Driver Championships',
    date: '2025-11',
    category: 'racing',
    summary: '捷凯车队在2025 TCR China/CTCC 赛季完成历史性大满贯：包揽车队杯、车型杯及车手杯三项总冠军。朱戴维以451分夺得车手总冠军，车队全年斩获25个分站冠军、100次领奖台完赛。',
    summaryEN: 'Teamwork Motorsport achieved a historic triple crown in the 2025 TCR China/CTCC season, sweeping Team, Model, and Driver championships. Carlos Zhu claimed the drivers\' title with 451 points.',
    image: '/images/racing/2025-champions.jpg'
  },
  {
    id: 'cupra-kiro-first-win',
    title: '历史性突破！CUPRA KIRO 斩获 Formula E 首胜',
    titleEN: 'Historic Breakthrough: CUPRA KIRO Scores First Formula E Victory',
    date: '2025',
    category: 'racing',
    summary: 'CUPRA KIRO 车队在 Formula E 纽博格林站夺得队史首胜及首个杆位。车队领队许家泰（Alex Hui）成为首位登上 Formula E 领奖台最高处的中国人。',
    summaryEN: 'CUPRA KIRO secured its first Formula E victory and pole position at the Nürburgring. Team Principal Alex Hui became the first Chinese to stand on the top step of a Formula E podium.',
    image: '/images/racing/cupra-kiro-win.jpg'
  },
  {
    id: 'dongfeng-etcr',
    title: '东风 eπ ETCR 纯电赛车发布：全球首款中国自主研发电动赛车',
    titleEN: 'Dongfeng eπ ETCR Unveiled: World\'s First Chinese-Developed Electric Race Car',
    date: '2024',
    category: 'product',
    summary: '格时图受委托开发东风 eπ ETCR 纯电赛车，全面负责底盘、空气动力学、电子系统及电驱总成的工程设计。800V高压平台、350kW单电机，株洲赛道刷出1:42.586最快圈速。',
    summaryEN: 'Gusto developed the Dongfeng eπ ETCR — an 800V pure-electric race car with 350kW motor. Set a record lap of 1:42.586 at Zhuzhou Circuit.',
    image: '/images/racing/dongfeng-etcr.jpg'
  },
  {
    id: 'macau-gp-2024',
    title: '捷凯车队澳门格兰披治 TCR 挑战赛双冠',
    titleEN: 'Teamwork Motorsport Macau GP TCR Challenge Double Victory',
    date: '2024',
    category: 'racing',
    summary: '捷凯车队在2024澳门格兰披治大赛车 TCR 挑战赛中斩获车手及车队双冠。自2013年首秀以来，捷凯已在澳门东望洋赛道多次站上最高领奖台。',
    summaryEN: 'Teamwork Motorsport claimed driver and team double victory at the 2024 Macau Grand Prix TCR Challenge.',
  },
  {
    id: '100th-podium',
    title: '里程碑！捷凯车队达成第100次领奖台',
    titleEN: 'Milestone: Teamwork Motorsport Reaches 100th Podium',
    date: '2025',
    category: 'racing',
    summary: '自2020年与领克合作以来，捷凯车队累计达成100次领奖台完赛，标志着车队在TCR赛事中的统治地位。',
    summaryEN: 'Since partnering with Lynk & Co in 2020, Teamwork Motorsport has achieved 100 podium finishes.',
  },
  {
    id: 'ctcc-engine-supplier',
    title: '格时图 CTCC 官方引擎供应商：4赛季69座奖杯',
    titleEN: 'Gusto as CTCC Official Engine Supplier: 69 Trophies in 4 Seasons',
    date: '2016-2020',
    category: 'company',
    summary: '2016-2020年，格时图作为CTCC官方引擎供应商，为北汽、广汽丰田、海马等顶级车队提供EA888 Gen2动力单元，4个赛季累计获得69座奖杯。',
    summaryEN: 'As CTCC official engine supplier (2016-2020), Gusto provided EA888 Gen2 power units to top teams, amassing 69 trophies.',
  },
  {
    id: 'tcr-58-cars',
    title: '格时图 TCR 赛车分销突破58台',
    titleEN: 'Gusto TCR Race Car Distribution Surpasses 58 Units',
    date: '2016-至今',
    category: 'company',
    summary: '自2016年起成为大众集团TCR亚洲独家分销商，累计售出58台TCR赛车，服务亚太地区专业车队。Audi RS 3 LMS两代合计30台领跑销量。',
    summaryEN: 'Official Volkswagen Group TCR Asian distributor since 2016. 58 units sold, with Audi RS 3 LMS leading at 30 units.',
  },
  {
    id: 'aron-kwok-2023',
    title: '郭富城加盟捷凯车队，担任特邀嘉宾车手',
    titleEN: 'Aaron Kwok Joins Teamwork Motorsport as Special Guest Driver',
    date: '2023',
    category: 'racing',
    summary: '金像奖影帝、华语乐坛天王郭富城以"特邀嘉宾车手"身份加入捷凯车队，将赛车运动带入主流大众视野，极大提升了TCR赛事的跨界影响力。',
    summaryEN: 'Movie icon Aaron Kwok joined Teamwork Motorsport as Special Guest Driver, bringing motorsport to mainstream audiences.',
  },
  {
    id: 'geely-super-cup',
    title: '格时图开发吉利缤瑞Cool 超级杯PRO赛车',
    titleEN: 'Gusto Develops Geely Binray Cool for Super Cup PRO',
    date: '2023',
    category: 'product',
    summary: '格时图为吉利超级杯PRO赛事开发并制造吉利缤瑞Cool赛车，展现自主赛车制造能力。',
    summaryEN: 'Gusto developed and manufactured the Geely Binray Cool race car for the Super Cup PRO series.',
  },
];
