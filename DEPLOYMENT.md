# 部署指南

本文档详细说明如何将赵维殳个人网站部署到生产环境。

## 部署选项

### 1. Vercel 部署 (推荐)

Vercel是Next.js的创建者提供的平台，提供最佳的Next.js支持。

#### 步骤：

1. **准备代码仓库**
   ```bash
   # 初始化Git仓库（如果还没有）
   git init
   git add .
   git commit -m "Initial commit"
   
   # 推送到GitHub
   git remote add origin https://github.com/your-username/zhao-weishu-website.git
   git push -u origin main
   ```

2. **连接Vercel**
   - 访问 [vercel.com](https://vercel.com)
   - 使用GitHub账号登录
   - 点击 "New Project"
   - 选择GitHub仓库 `zhao-weishu-website`
   - 点击 "Import"

3. **配置项目**
   - Framework Preset: Next.js (自动检测)
   - Build Command: `npm run build` (默认)
   - Output Directory: `.next` (默认)
   - Install Command: `npm install` (默认)

4. **环境变量** (如果需要)
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

5. **部署**
   - 点击 "Deploy"
   - 等待构建完成
   - 获得临时域名 (如: zhao-weishu-website.vercel.app)

#### 自定义域名配置：

1. 在Vercel项目设置中点击 "Domains"
2. 添加自定义域名 (如: zhaoweishu.com)
3. 按照提示配置DNS记录：
   ```
   Type: A
   Name: @
   Value: 76.76.19.61
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```

### 2. Netlify 部署

#### 步骤：

1. **连接Netlify**
   - 访问 [netlify.com](https://netlify.com)
   - 登录并点击 "New site from Git"
   - 选择GitHub仓库

2. **构建设置**
   ```
   Build command: npm run build
   Publish directory: .next
   ```

3. **环境变量**
   ```
   NEXT_PUBLIC_SITE_URL=https://your-domain.netlify.app
   ```

### 3. GitHub Pages 部署

由于GitHub Pages不直接支持Next.js的服务器端功能，需要静态导出。

#### 配置静态导出：

1. **修改 next.config.ts**
   ```typescript
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   
   module.exports = nextConfig
   ```

2. **添加GitHub Actions工作流**
   创建 `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [ main ]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         
         - name: Setup Node.js
           uses: actions/setup-node@v2
           with:
             node-version: '18'
             
         - name: Install dependencies
           run: npm install
           
         - name: Build
           run: npm run build
           
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

## 部署前检查清单

### 1. 代码质量检查
```bash
# 运行linting
npm run lint

# 运行类型检查
npx tsc --noEmit

# 运行构建测试
npm run build
```

### 2. 性能优化
- [ ] 图片优化 (使用Next.js Image组件)
- [ ] 代码分割 (自动处理)
- [ ] 压缩资源 (自动处理)
- [ ] 缓存策略配置

### 3. SEO优化
- [ ] 元数据配置完整
- [ ] sitemap.xml生成
- [ ] robots.txt配置
- [ ] 结构化数据标记

### 4. 安全检查
- [ ] 依赖包安全扫描
- [ ] 环境变量保护
- [ ] HTTPS配置
- [ ] 安全头配置

## 域名配置

### 推荐域名选项：
1. `zhaoweishu.com` (主域名)
2. `zhao-weishu.com` (备选)
3. `weishu-zhao.com` (备选)

### DNS配置示例：
```
# A记录 (指向Vercel)
@ A 76.76.19.61

# CNAME记录 (www子域名)
www CNAME cname.vercel-dns.com

# MX记录 (邮箱，可选)
@ MX 10 mail.your-provider.com
```

## 监控和维护

### 1. 性能监控
- 使用Vercel Analytics
- Google PageSpeed Insights
- GTmetrix性能测试

### 2. 错误监控
- Vercel自带错误日志
- 可选：Sentry错误追踪

### 3. 定期维护
- 依赖包更新
- 安全补丁应用
- 内容更新
- 备份策略

## 环境变量配置

### 生产环境变量：
```bash
NEXT_PUBLIC_SITE_URL=https://zhaoweishu.com
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=G-XXXXXXXXXX (可选)
CONTACT_EMAIL=zwsh88@sjtu.edu.cn
```

## 故障排除

### 常见问题：

1. **构建失败**
   - 检查依赖版本兼容性
   - 查看构建日志错误信息
   - 确认环境变量配置

2. **页面404错误**
   - 检查路由配置
   - 确认文件路径正确
   - 验证导出配置

3. **样式问题**
   - 检查Tailwind CSS配置
   - 确认CSS导入顺序
   - 验证响应式设计

4. **性能问题**
   - 优化图片大小
   - 检查JavaScript包大小
   - 启用缓存策略

## 联系支持

如果在部署过程中遇到问题，可以：
1. 查看平台官方文档
2. 搜索相关错误信息
3. 联系技术支持

---

**最后更新**: 2025年7月2日  
**版本**: v1.0.0
