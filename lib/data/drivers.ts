export interface Driver {
  id: string;
  name: string;
  nameZH: string;
  number: string;
  team: string;
  bio: string;
  bioEN: string;
  achievements: string[];
  achievementsEN: string[];
  image: string;
  role?: string;
  social?: { weibo?: string; instagram?: string };
}

export const drivers: Driver[] = [
  {
    id: 'mazhao',
    name: 'MA Qinghua',
    nameZH: '马青骅',
    number: '',
    team: 'Shell Teamwork Lynk & Co Racing',
    role: '明星车手',
    bio: '中国最杰出的赛车手之一，曾征战 WTCC、Formula E 等国际顶级赛事。2020 年代表领克捷凯车队斩获 TCR China 车手杯冠军，为中国赛车运动写下里程碑。',
    bioEN: 'One of China\'s most accomplished racing drivers. TCR China Drivers\' Champion (2020).',
    achievements: ['TCR China 车手杯冠军 (2020)', 'WTCC 参赛经验', 'Formula E 参赛经验'],
    achievementsEN: ['TCR China Drivers\' Champion 2020', 'WTCC experience', 'Formula E experience'],
    image: '/images/drivers/maqinghua.jpg',
  },
  {
    id: 'zhangzhiqiang',
    name: 'ZHANG Zhiqiang',
    nameZH: '张志强',
    number: '',
    team: 'Shell Teamwork Lynk & Co Racing',
    role: '主力车手',
    bio: '中国顶级职业赛车手，驾驶风格凌厉精准，在 TCR China 及亚洲赛事中屡次登上领奖台，是捷凯车队的中坚力量。',
    bioEN: 'Top-tier professional racing driver with multiple podiums across TCR China and Asia.',
    achievements: ['TCR China 多次领奖台', 'TCR Asia 领奖台获得者'],
    achievementsEN: ['Multiple TCR China podiums', 'TCR Asia podium finisher'],
    image: '/images/drivers/zhangzhiqiang.jpg',
  },
  {
    id: 'zhudaiwei',
    name: 'Carlos ZHU',
    nameZH: '朱戴维',
    number: '9',
    team: 'Shell Teamwork Lynk & Co Racing',
    role: '卫冕冠军车手',
    bio: '中国赛车界最具天赋的车手之一，2025 赛季斩获 TCR China 车手杯总冠军。速度、稳定性和比赛智慧兼备，在硬仗中总能展现出冠军级别的心理素质。',
    bioEN: '2025 TCR China Drivers\' Champion. One of China\'s most talented racing drivers with exceptional speed and race craft.',
    achievements: ['TCR China 车手杯冠军 (2025)', 'CTCC 分站冠军', 'FIA 认证国际赛车手'],
    achievementsEN: ['TCR China Drivers\' Champion 2025', 'CTCC race winner', 'FIA certified'],
    image: '/images/drivers/zhudaiwei.jpg',
  },
  {
    id: 'sunny',
    name: 'Sunny WONG',
    nameZH: '黄日燊',
    number: '12',
    team: 'Shell Teamwork Lynk & Co Racing',
    role: '主力车手',
    bio: '中国香港职业赛车手，以稳定的发挥和出色的比赛策略著称。在 TCR China 赛场屡次为车队拿下关键积分，澳门格兰披治大赛领奖台获得者。',
    bioEN: 'Hong Kong professional racing driver known for consistent performance and strategic race craft. Macau Grand Prix podium finisher.',
    achievements: ['TCR China 多次领奖台', '澳门格兰披治参赛经验', '亚洲GT赛事经验'],
    achievementsEN: ['Multiple TCR China podiums', 'Macau GP experience', 'Asian GT experience'],
    image: '/images/drivers/sunny.jpg',
  },
  {
    id: 'pandejun',
    name: 'Paul POON',
    nameZH: '潘德俊',
    number: '',
    team: 'Teamwork Motorsport',
    role: '资深车手',
    bio: '中国香港资深赛车手，澳门格兰披治大赛冠军。在澳门东望洋赛道拥有丰富的实战经验，多次为捷凯车队斩获澳门赛事冠军。',
    bioEN: 'Hong Kong veteran racing driver and Macau Grand Prix champion with extensive Guia Circuit experience.',
    achievements: ['澳门格兰披治冠军', 'CTM 杯冠军 (2015/2016)'],
    achievementsEN: ['Macau Grand Prix winner', 'CTM Cup Champion 2015/2016'],
    image: '/images/drivers/pandejun.jpg',
  },
  {
    id: 'yanchuang',
    name: 'YAN Chuang',
    nameZH: '阎闯',
    number: '',
    team: 'Teamwork Motorsport',
    role: '车手',
    bio: '捷凯车队车手，活跃于 TCR China 赛事。',
    bioEN: 'Teamwork Motorsport driver competing in TCR China.',
    achievements: ['TCR China 参赛经验'],
    achievementsEN: ['TCR China experience'],
    image: '/images/drivers/yanchuang.jpg',
  },
  {
    id: 'liguanghua',
    name: 'LI Guanghua',
    nameZH: '李光华',
    number: '',
    team: 'Teamwork Motorsport',
    role: '车手',
    bio: '捷凯车队车手，活跃于 TCR China 赛事。',
    bioEN: 'Teamwork Motorsport driver competing in TCR China.',
    achievements: ['TCR China 参赛经验'],
    achievementsEN: ['TCR China experience'],
    image: '/images/drivers/liguanghua.jpg',
  },
  {
    id: 'guofucheng',
    name: 'Aaron KWOK',
    nameZH: '郭富城',
    number: '',
    team: 'Shell Teamwork Lynk & Co Racing',
    role: '特邀明星车手',
    bio: '华语乐坛天王、金像奖影帝。2023赛季以"特邀嘉宾车手"身份加入捷凯车队，将赛车运动带入主流大众视野，极大提升了TCR赛事的跨界影响力。',
    bioEN: 'Multi-award-winning movie icon and pop star. Joined Teamwork as "Special Guest Driver" in 2023, bringing motorsport to mainstream audiences.',
    achievements: ['特邀嘉宾车手 (2023至今)', '金像奖影帝', '华语乐坛天王'],
    achievementsEN: ['Special Guest Driver since 2023', 'Hong Kong Film Award winner', 'Mandopop icon'],
    image: '/images/drivers/guofucheng.jpg',
  },
];

export const teamInfo = {
  name: '捷凯车队',
  nameEN: 'Teamwork Motorsport',
  founded: 2013,
  location: '中国香港',
  headquarters: '广东肇庆 · 广东国际赛车场',
  headquartersArea: '4,000m²',
  teamPrincipal: '许家泰 (Alex Hui)',
  description: '捷凯车队作为格时图集团旗下的亚洲顶级赛车运营组织，依托中国香港、深圳、肇庆三大运营中心、百余名行业精英集结一心的专业团队，自2013年在中国香港正式成立以来，迅速成长为国内极少数具备全链条赛事服务能力的车队。',
  descriptionEN: 'Teamwork Motorsport is Asia\'s premier racing operation under Gusto Group. Founded in 2013 in Hong Kong, the team has grown into one of the few organizations in China capable of providing professional end-to-end motorsport operational services.',
  championships: '6年13冠',
  championshipsEN: '13 titles in 6 years',
  raceWins: 25,
  podiums: 100,
  tcrSold: 58,
};
