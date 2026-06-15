export interface Driver {
  id: string;
  name: string;
  nameZH: string;
  number: string;
  team: string;
  bio: string;
  achievements: string[];
  image: string;
  social?: { weibo?: string; instagram?: string };
}

export const drivers: Driver[] = [
  {
    id: 'jason',
    name: 'Jason ZHANG',
    nameZH: '张臻东',
    number: '36',
    team: 'Shell Teamwork Lynk & Co Racing',
    bio: '中国顶级职业赛车手，TCR China 冠军车手。驾驶风格凌厉精准，擅长在极限条件下保持稳定圈速。多次在 TCR China 及亚洲赛事中登上领奖台。',
    achievements: [
      'TCR China 年度冠军',
      'CTCC 超级杯分站冠军',
      'TCR Asia 领奖台获得者',
    ],
    image: '/images/drivers/jason.jpg',
  },
  {
    id: 'sunny',
    name: 'Sunny WONG',
    nameZH: '黄日燊',
    number: '12',
    team: 'Shell Teamwork Lynk & Co Racing',
    bio: '中国香港职业赛车手，以稳定的发挥和出色的比赛策略著称。在 TCR China 赛场屡次为车队拿下关键积分，是团队的中坚力量。',
    achievements: [
      'TCR China 多次领奖台',
      '澳门格兰披治参赛经验',
      '亚洲GT赛事经验',
    ],
    image: '/images/drivers/sunny.jpg',
  },
  {
    id: 'david',
    name: 'David ZHU',
    nameZH: '朱戴维',
    number: '9',
    team: 'Shell Teamwork Lynk & Co Racing',
    bio: '中国赛车界最具天赋的车手之一，卫冕冠军。速度、稳定性和比赛智慧兼备，在硬仗中总能展现出冠军级别的心理素质。',
    achievements: [
      'TCR China 卫冕冠军',
      'CTCC 分站冠军',
      'FIA 认证国际赛车手',
    ],
    image: '/images/drivers/david.jpg',
  },
];
