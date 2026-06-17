# Hero 视频背景实现方案

> **目标：** 将首页 Hero 从静态图片轮播升级为全屏视频背景，对标 McLaren / Öhlins 官网
> **技术路线：** ffmpeg 将多张照片合成为 Ken Burns 风格视频 + Next.js video 组件
> **执行者：** Claude Code

---

## 一、视频制作方案

### 素材来源
从 `捷凯PPT素材包/车队/` 33张专业赛事照片中精选 8-10 张：
- 优先选择横向构图、有动感的（过弯、飞驰、Pit房、领奖台）
- 排除重复 / 模糊 / 竖构图

### ffmpeg Ken Burns 效果
每张照片 5 秒，zoom + pan 制造运镜感，crossfade 过渡：

```bash
# 核心命令（8张图 → 40秒视频）
ffmpeg \
  -i img1.jpg -i img2.jpg ... -i img8.jpg \
  -filter_complex "
    [0:v]zoompan=z='min(zoom+0.0015,1.15)':x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)':d=125:s=1920x1080,fade=t=out:st=4:d=1[v0];
    [1:v]zoompan=z='min(zoom+0.0012,1.12)':x='iw/2-(iw/zoom/2)+20':y='ih/2-(ih/zoom/2)-10':d=125:s=1920x1080,fade=t=in:d=1,fade=t=out:st=4:d=1[v1];
    ... (每张图不同zoom方向和速度)
    [v0][v1][v2]...[v7]concat=n=8:v=1:a=0,format=yuv420p[v]
  " -map "[v]" -c:v libx264 -preset slow -crf 23 -movflags +faststart hero.mp4

# 同时生成 WebM（体积更小，浏览器兼容）
ffmpeg -i hero.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 hero.webm
```

### Ken Burns 参数变化（避免8张图全一样方向）
| 图序 | zoom方向 | pan方向 | 速度 |
|------|---------|---------|------|
| 1 | zoom in | 居中→右下 | 慢 |
| 2 | zoom out | 左上→居中 | 中 |
| 3 | zoom in | 居中→左上 | 慢 |
| 4 | zoom in | 右下→居中 | 快 |
| 5 | zoom out | 居中 | 中 |
| 6 | zoom in | 左下→右上 | 慢 |
| 7 | zoom out | 右上→居中 | 中 |
| 8 | zoom in | 居中 | 快 |

### 叠加效果（让视频更有质感）
- **Letterbox 黑边**：上下各裁 10%，制造宽银幕感（crop=1920:880:0:100, pad=1920:1080:0:100）
- **轻微胶片颗粒**：`noise=alls=8:allf=t`（非常 subtle）
- **速度线**：用 CSS overlay 实现（不用 ffmpeg，更灵活）

### 目标规格
| 参数 | 值 |
|------|-----|
| 分辨率 | 1920×1080 |
| 帧率 | 25fps |
| 时长 | 40-50秒（循环） |
| MP4 目标大小 | < 8MB |
| WebM 目标大小 | < 5MB |
| 编码 | H.264 (MP4) + VP9 (WebM) |

---

## 二、前端实现方案

### 文件位置
```
public/video/
  hero.webm     ← WebM（浏览器优先加载）
  hero.mp4      ← MP4（Safari fallback）
  hero-poster.jpg ← 视频加载前的静态封面
```

### Hero 组件改造（app/page.tsx）

```tsx
{/* 替换现有图片轮播 */}
<section className="relative h-screen min-h-[700px] overflow-hidden">
  {/* 视频背景 */}
  <video
    autoPlay
    muted
    loop
    playsInline
    poster="/video/hero-poster.jpg"
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/video/hero.webm" type="video/webm" />
    <source src="/video/hero.mp4" type="video/mp4" />
  </video>
  
  {/* 暗色渐变遮罩（保持文字可读性） */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/35 to-[var(--color-background)] z-10" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(5,5,16,0.7)_100%)] z-10" />
  
  {/* CSS 速度线叠加层 */}
  <SpeedLines />
  
  {/* 保留现有文字内容 */}
  ...
</section>
```

### 速度线组件（CSS only，不依赖视频）
```tsx
function SpeedLines() {
  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden opacity-[0.04]">
      {[...Array(6)].map((_, i) => (
        <motion.div key={i} className="absolute h-px w-full"
          style={{ 
            top: (10 + i * 16) + '%', 
            background: 'linear-gradient(90deg, transparent 0%, #00E5FF 50%, transparent 100%)' 
          }}
          animate={{ x: ['-100%', '200%'] }}
          transition={{ duration: 3 + i * 0.8, repeat: Infinity, ease: 'linear', delay: i * 1.5 }}
        />
      ))}
    </div>
  );
}
```

### 渐进加载策略
- 首帧显示 poster 图片（`hero-poster.jpg`）
- 视频 `preload="metadata"` 先加载头信息
- `onCanPlay` 后淡入视频，避免白屏闪烁
- 移动端默认用 poster（省流量），用户点击后播放

---

## 三、执行步骤

### Step 1: 选图
从 `捷凯PPT素材包/车队/` 33张中挑8-10张最佳：
- 横向、高清、有动感
- 覆盖不同场景：赛车特写、赛道全景、Pit房、领奖台

### Step 2: 生成视频
用 ffmpeg 执行上述 Ken Burns + crossfade 命令，输出 `hero.mp4` + `hero.webm`

### Step 3: 替换 Hero 组件
- 删除现有 3 张图片轮播代码
- 改为 `<video>` 标签
- 保留文字叠加层和渐变遮罩
- 添加 CSS 速度线

### Step 4: 验证
- `npm run build` 通过
- 检查视频大小（MP4 < 8MB, WebM < 5MB）
- 移动端自动降级为 poster 静态图

---

## 四、备选方案（如果 ffmpeg 不可用）

**纯 Framer Motion 方案（不需要 ffmpeg）：**
- 用 5-8 张高清图做 Ken Burns zoom/pan 动画
- `AnimatePresence` 做 crossfade 过渡
- CSS `filter: blur()` + `scale()` 做景深效果
- 优点：零依赖、体积小、可控性强
- 缺点：不如真视频流畅

优先级：ffmpeg 视频 > Framer Motion 模拟

---

## 五、给 Claude 的提示

1. 先检查 Windows 环境是否有 ffmpeg（`where ffmpeg`）
2. 如果没有，用 winget 或 chocolatey 安装
3. 图片素材在 `C:\Users\LI-HAO\Desktop\捷凯PPT素材包\车队\`
4. 输出到 `gustotechnik\public\video\`
5. 改完后跑 `npx next build` 验证
