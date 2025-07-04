# 赵维殳个人网站

这是为上海交通大学生命科学技术学院副研究员赵维殳博士创建的个人学术网站，展示她在深海生命科学研究领域的杰出成就和学术贡献。

> 🚀 最后更新: 2025年7月4日 - 修复所有TypeScript和SSR错误，网站已可正常部署

## 项目概述

赵维殳博士是一位专注于深海生命科学研究的青年科学家，她参与了马里亚纳海沟环境与生态研究计划（MEER计划），在Cell等顶级期刊发表重要研究成果，为深海生命科学领域做出了重要贡献。

## 网站特色

- **现代化设计**: 采用响应式设计，支持多设备访问
- **动态交互**: 使用Framer Motion实现流畅的动画效果
- **内容丰富**: 全面展示学术成果、研究领域、科考经历等
- **SEO优化**: 针对搜索引擎进行优化，提高可发现性
- **性能优化**: 基于Next.js构建，确保快速加载

## 技术栈

- **前端框架**: Next.js 15.3.4 (App Router)
- **样式框架**: Tailwind CSS v4
- **动画库**: Framer Motion
- **图标库**: Lucide React
- **UI组件**: Headless UI
- **语言**: TypeScript
- **部署**: Vercel (推荐)

## 网站结构

### 主要页面
- **首页** (`/`): 综合展示个人信息和主要成就
- **关于我** (`/about`): 详细的个人介绍和教育背景
- **研究领域** (`/research`): 深海生命科学研究的各个方向
- **学术成果** (`/publications`): 发表的重要论文和研究成果
- **科研项目** (`/projects`): 参与和主持的重要科研项目
- **科考经历** (`/expeditions`): 深海科考的珍贵经历
- **媒体报道** (`/media`): 相关的新闻报道和媒体关注
- **联系方式** (`/contact`): 联系信息和合作咨询

### 核心组件
- `Header`: 导航栏组件
- `Footer`: 页脚组件
- `Hero`: 首页英雄区域
- `About`: 个人介绍组件
- `Research`: 研究领域展示
- `Publications`: 学术成果列表
- `Projects`: 科研项目展示
- `Expeditions`: 科考经历时间线
- `News`: 媒体报道列表
- `Gallery`: 科考影像画廊
- `Contact`: 联系表单

## 开发指南

### 环境要求
- Node.js 18.0 或更高版本
- npm, yarn, pnpm 或 bun

### 安装依赖
```bash
npm install
```

### 启动开发服务器
```bash
npm run dev
```

在浏览器中打开 [http://localhost:3000](http://localhost:3000) 查看网站。

### 构建生产版本
```bash
npm run build
```

### 启动生产服务器
```bash
npm start
```

## 内容管理

### 更新个人信息
编辑相应的组件文件来更新个人信息：
- 基本信息: `components/Hero.tsx`, `components/About.tsx`
- 研究领域: `components/Research.tsx`
- 学术成果: `components/Publications.tsx`
- 科研项目: `components/Projects.tsx`
- 科考经历: `components/Expeditions.tsx`
- 媒体报道: `components/News.tsx`

### 添加新内容
1. 在相应的组件中添加新的数据项
2. 确保数据格式与现有结构一致
3. 测试页面显示效果

## 部署

### Vercel部署 (推荐)
1. 将代码推送到GitHub仓库
2. 在Vercel中导入项目
3. 配置自定义域名 (可选)
4. 自动部署完成

### 其他平台
网站也可以部署到Netlify、GitHub Pages等其他静态托管平台。

## 自定义配置

### 颜色主题
在 `app/globals.css` 中定义了海洋蓝色主题：
- `--ocean-blue`: #0369a1
- `--ocean-blue-dark`: #0c4a6e
- `--ocean-blue-light`: #0ea5e9
- `--deep-blue`: #1e3a8a
- `--navy`: #1e293b

### 字体
使用Inter字体作为主要字体，在 `app/layout.tsx` 中配置。

## 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 许可证

本项目仅用于学术展示目的，所有内容版权归赵维殳博士所有。

## 联系信息

如有任何问题或建议，请联系：
- 邮箱: zwsh88@sjtu.edu.cn
- 地址: 上海交通大学木兰船建大楼B410

---

**项目创建时间**: 2025年7月2日
**最后更新**: 2025年7月2日
**版本**: v1.0.0
