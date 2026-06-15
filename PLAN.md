# GustoTechnik 官网重做项目计划

> **目标：** 现代响应式官网，定位"配件销售 + 赛事介绍"，中英双语，支持后续电商扩展。
>
> **技术栈：** Next.js 14 (App Router) + TypeScript + Tailwind CSS + MDX
>
> **设计方向：** 深色主题赛车工业风，红色(ALCON红 #CC0000) + 暗灰(#1a1a2e) + 白(#f5f5f5)，大图冲击力，英文为主+中文切换
>
> **部署：** Vercel（免费层即可）

---

## 网站结构

```
Home          - 首页
├─ Hero大屏赛车视频/图
├─ 品牌展示区（ALCON/OHLINS/GETuned/Millers/REVO/Stand21等）
├─ 产品分类入口（刹车/避震/油品/赛车装备/排气）
├─ 赛事动态（最新3条News）
└─ 数据亮点（20年历史/4地运营/10+代理品牌）

Products      - 配件销售
├─ 按品牌浏览（ALCON/OHLINS/GETuned/Millers/REVO/Stand21/3MO/IDI/Racetech）
├─ 按车型浏览（Audi/BMW/VW/Porsche等）
├─ 按品类浏览（刹车系统/悬挂系统/油液/赛车装备/排气系统）
├─ 产品详情页（图片/规格/适用车型/价格区间/咨询按钮）
└─ 询价/咨询表单（替代购物车 - 先不做在线支付）

Racing        - 赛事介绍
├─ 车队概览（TCR China/Shell Teamwork Lynk & Co Racing）
├─ 车手介绍（Jason #36 / Sunny #12 / David #9）
├─ 赛历（2025/2026赛季日历）
├─ 赛报（News文章列表，按赛季筛选）
└─ 赛事照片画廊

Engineering   - 研发能力
├─ GETuned自主品牌
├─ 定制开发能力
├─ 技术支持
└─ 成功案例

About         - 关于我们
├─ 集团简介（2005年至今）
├─ 四个地点（香港/深圳/北京/肇庆）+ Google Maps
├─ 代理品牌一览
└─ 联系方式

News          - 新闻中心
├─ 赛事新闻 / 产品新闻 / 公司新闻
└─ 单篇文章（MDX渲染）
```

---

## 页面清单与优先级

### Phase 1：核心框架（本次完成）

| 序号 | 页面 | 路由 | 优先级 |
|------|------|------|--------|
| 1 | Layout + Navigation | `/app/layout.tsx` | P0 |
| 2 | 首页 Home | `/` | P0 |
| 3 | 产品列表 Products | `/products` | P0 |
| 4 | 产品分类 Brand | `/products/[brand]` | P0 |
| 5 | 产品详情 Product | `/products/[brand]/[slug]` | P0 |
| 6 | 赛事首页 Racing | `/racing` | P0 |
| 7 | 车手页面 Drivers | `/racing/drivers` | P0 |
| 8 | 赛报列表/详情 News | `/racing/news` | P0 |
| 9 | 关于我们 About | `/about` | P1 |
| 10 | 联系我们 Contact | `/about#contact` | P1 |
| 11 | 研发能力 Engineering | `/engineering` | P1 |
| 12 | 404页面 | 自定义 | P2 |

### Phase 2：后续扩展

| 功能 | 说明 |
|------|------|
| 中英双语 | next-intl i18n |
| CMS集成 | Contentful/Sanity管理产品+新闻 |
| 询价系统 | 表单 → Email/飞书通知 |
| 电商 | Shopify/Shopline接入 |
| 经销商登录 | 经销商专区（库存/价格/下单） |

---

## 文件结构

```
gustotechnik/
├── app/
│   ├── layout.tsx          # 全局Layout（Nav + Footer）
│   ├── page.tsx            # 首页
│   ├── globals.css         # Tailwind + 全局样式
│   ├── products/
│   │   ├── page.tsx        # 产品总览
│   │   └── [brand]/
│   │       ├── page.tsx    # 品牌产品列表
│   │       └── [slug]/
│   │           └── page.tsx # 产品详情
│   ├── racing/
│   │   ├── page.tsx        # 赛事首页
│   │   ├── drivers/
│   │   │   └── page.tsx    # 车手介绍
│   │   └── news/
│   │       ├── page.tsx    # 赛报列表
│   │       └── [slug]/
│   │           └── page.tsx # 赛报详情
│   ├── about/
│   │   └── page.tsx        # 关于我们
│   ├── engineering/
│   │   └── page.tsx        # 研发能力
│   └── contact/
│       └── page.tsx        # 联系页面
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx       # 导航栏
│   │   ├── Footer.tsx       # 页脚
│   │   └── MobileMenu.tsx   # 移动菜单
│   ├── home/
│   │   ├── HeroSection.tsx  # 首页大屏
│   │   ├── BrandShowcase.tsx # 品牌展示
│   │   ├── CategoryGrid.tsx # 品类入口
│   │   └── NewsPreview.tsx  # 赛事动态预览
│   ├── products/
│   │   ├── ProductCard.tsx  # 产品卡片
│   │   ├── ProductGrid.tsx  # 产品网格
│   │   ├── BrandFilter.tsx  # 品牌筛选
│   │   └── InquiryForm.tsx  # 询价表单
│   ├── racing/
│   │   ├── DriverCard.tsx   # 车手卡片
│   │   ├── RaceCalendar.tsx # 赛历
│   │   └── NewsCard.tsx     # 新闻卡片
│   └── ui/
│       ├── Button.tsx       # 按钮
│       ├── Section.tsx      # 区块容器
│       ├── Badge.tsx        # 标签
│       └── ImageCarousel.tsx # 图片轮播
├── lib/
│   ├── data/
│   │   ├── brands.ts        # 品牌数据
│   │   ├── products.ts      # 产品数据
│   │   ├── drivers.ts       # 车手数据
│   │   ├── news.ts          # 新闻数据
│   │   └── categories.ts    # 品类数据
│   └── utils.ts             # 工具函数
├── public/
│   └── images/
│       ├── hero/             # 首页大图
│       ├── brands/           # 品牌Logo
│       ├── products/         # 产品图
│       ├── racing/           # 赛事图
│       └── about/            # 公司图
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 执行计划（11个任务）

### Task 1: 项目初始化
- `npx create-next-app@latest gustotechnik --typescript --tailwind --app --src-dir=false`
- 配置 tailwind.config.ts（自定义颜色/字体）
- 安装依赖：`@heroicons/react` `framer-motion` `next-intl`

### Task 2: Layout + Navigation
- Navbar（Logo + 菜单 + 语言切换 + 搜索）
- Footer（地址/链接/版权）
- MobileMenu（汉堡菜单+滑出）
- 全局深色主题

### Task 3: 首页 HeroSection + BrandShowcase
- Hero大屏（赛车图+渐变遮罩+标题"GustoTechnik"）
- 品牌Logo墙（9个品牌滚动展示）

### Task 4: 首页 CategoryGrid + NewsPreview
- 5大品类卡片（刹车/避震/油品/装备/排气）
- 最新3条赛事新闻

### Task 5: 产品列表页 Products + Brand
- 产品网格布局
- 品牌筛选栏
- 产品卡片（图片/名称/品牌/适用车型）

### Task 6: 产品详情页
- 产品大图 + 缩略图
- 规格参数表
- 适用车型标签
- 询价按钮 → 表单

### Task 7: 赛事首页 Racing
- 车队大图 + 简介
- 车手卡片（3位）
- 赛历时间线
- 最新赛报

### Task 8: 车手页面 Drivers
- 3位车手详细卡片（照片/号码/战绩/简介）

### Task 9: 赛报列表 + 详情 News
- 文章列表（标题/日期/摘要/封面图）
- 文章详情（MDX渲染）

### Task 10: About + Engineering + Contact
- 关于我们（历史+四地信息+品牌）
- 研发能力（GETuned+技术）
- 联系我们（地图+表单）

### Task 11: 数据填充
- 品牌/产品/车手/赛报真实数据
- 图片占位符 → 后续替换真实图片
