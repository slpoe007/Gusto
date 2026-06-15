export interface Location {
  city: string;
  cityZH: string;
  address: string;
  addressZH: string;
  tel: string;
  email: string;
}

export const locations: Location[] = [
  {
    city: 'Hong Kong',
    cityZH: '香港',
    address: 'Room 1102, 11/F, Kimberland Centre, 55 Wing Hong Street, Cheung Sha Wan, Kowloon',
    addressZH: '香港九龙长沙湾永康街55号金百盛中心11楼1102室',
    tel: '+852 23318221 / 29760830',
    email: 'info@gusto.com.hk',
  },
  {
    city: 'Shenzhen',
    cityZH: '深圳',
    address: '102-103, Block C, Lijing Business Park, No.57 Busha Road, Longgang District',
    addressZH: '深圳市龙岗区南湾街道布沙路57号荔景商务区C座102-103',
    tel: '+86 755 28905455',
    email: 'matt@gusto.com.cn',
  },
  {
    city: 'Beijing',
    cityZH: '北京',
    address: 'Room 1403/1415, ChangBao Building, Anhua North Lane 1st, GuangQuMen Street, DongCheng District',
    addressZH: '北京市东城区广渠门内大街安化北里1号长宝大厦1403/1415室',
    tel: '+86 10 84334531',
    email: 'info@gusto.com.cn',
  },
  {
    city: 'Zhaoqing',
    cityZH: '肇庆',
    address: 'No.11 Building, Longhu Avenue, High Tech Zone, Zhaoqing City, Guangdong Province',
    addressZH: '广东省肇庆市高新区龙湖大道11号',
    tel: '+86 758 3999132',
    email: 'customersupport@gusto.com.cn',
  },
];

export const navigation = [
  { label: '首页', href: '/' },
  { label: '关于我们', href: '/about' },
  {
    label: '产品中心',
    href: '/products',
    children: [
      { label: '代理品牌', href: '/products#brands' },
      { label: '赛车车型', href: '/products#race-cars' },
      { label: '按品类浏览', href: '/products#categories' },
    ],
  },
  { label: '赛事运动', href: '/racing' },
  { label: '研发能力', href: '/engineering' },
  { label: '服务中心', href: '/services' },
  { label: '新闻动态', href: '/news' },
];
