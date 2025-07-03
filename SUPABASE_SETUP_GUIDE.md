# Supabase 配置指南

## 第一步：创建Supabase项目

1. **访问Supabase**
   - 打开 https://supabase.com
   - 点击 "Start your project"
   - 使用GitHub账号登录

2. **创建新项目**
   - 点击 "New Project"
   - 项目名称：`zhao-weishu-website`
   - 数据库密码：设置强密码并记住
   - 地区：选择 `Southeast Asia (Singapore)`
   - 定价：选择 "Free" (测试) 或 "Pro" (生产)

## 第二步：初始化数据库

1. **运行SQL脚本**
   - 在Supabase Dashboard中，点击左侧 "SQL Editor"
   - 点击 "New query"
   - 复制 `supabase-setup.sql` 文件的全部内容
   - 粘贴到编辑器中
   - 点击 "Run" 执行脚本

2. **验证表创建**
   - 点击左侧 "Table Editor"
   - 确认以下表已创建：
     - user_profiles
     - publications
     - projects
     - news
     - media_files
     - expeditions
     - contact_submissions
     - site_settings

## 第三步：配置存储桶

1. **创建存储桶**
   - 点击左侧 "Storage"
   - 点击 "Create bucket"
   - 创建以下存储桶：

   ```
   avatars (用户头像)
   - Public: true
   - File size limit: 2MB
   - Allowed MIME types: image/*

   publications (论文文件)
   - Public: true
   - File size limit: 50MB
   - Allowed MIME types: application/pdf, image/*

   projects (项目文件)
   - Public: true
   - File size limit: 50MB
   - Allowed MIME types: image/*, video/*, application/pdf

   expeditions (科考媒体)
   - Public: true
   - File size limit: 100MB
   - Allowed MIME types: image/*, video/*

   news (新闻图片)
   - Public: true
   - File size limit: 10MB
   - Allowed MIME types: image/*

   general (通用文件)
   - Public: true
   - File size limit: 50MB
   - Allowed MIME types: *
   ```

2. **配置存储策略**
   - 对于每个存储桶，点击 "Settings"
   - 在 "Policies" 标签中添加策略：

   ```sql
   -- 允许所有人查看文件
   CREATE POLICY "Public Access" ON storage.objects
   FOR SELECT USING (bucket_id = 'bucket_name');

   -- 允许认证用户上传文件
   CREATE POLICY "Authenticated Upload" ON storage.objects
   FOR INSERT WITH CHECK (
     bucket_id = 'bucket_name' AND 
     auth.role() = 'authenticated'
   );

   -- 允许管理员删除文件
   CREATE POLICY "Admin Delete" ON storage.objects
   FOR DELETE USING (
     bucket_id = 'bucket_name' AND
     EXISTS (
       SELECT 1 FROM public.user_profiles 
       WHERE id = auth.uid() AND role IN ('admin', 'editor')
     )
   );
   ```

## 第四步：配置认证

1. **启用认证提供商**
   - 点击左侧 "Authentication"
   - 点击 "Providers"
   - 启用以下提供商：
     - Email (默认启用)
     - Google OAuth (可选)
     - GitHub OAuth (可选)

2. **配置邮箱模板**
   - 点击 "Email Templates"
   - 自定义确认邮件、重置密码邮件模板

3. **设置重定向URL**
   - 在 "URL Configuration" 中添加：
     - Site URL: `https://www.zhaoweishu.com`
     - Redirect URLs: 
       - `https://www.zhaoweishu.com/auth/callback`
       - `http://localhost:3000/auth/callback` (开发环境)

## 第五步：获取API密钥

1. **获取项目配置**
   - 点击左侧 "Settings"
   - 点击 "API"
   - 复制以下信息：
     - Project URL
     - anon public key
     - service_role secret key

2. **更新环境变量**
   - 复制 `.env.local.example` 为 `.env.local`
   - 填入获取的配置信息：

   ```env
   # Supabase配置
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
   SUPABASE_SERVICE_ROLE_KEY=your_service_role_key

   # NextAuth配置
   NEXTAUTH_SECRET=your_random_secret_key
   NEXTAUTH_URL=http://localhost:3000

   # 其他配置
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

## 第六步：创建管理员账户

1. **注册管理员账户**
   - 启动本地开发服务器：`npm run dev`
   - 访问 `http://localhost:3000/auth/signup`
   - 使用邮箱 `zwsh88@sjtu.edu.cn` 注册
   - 确认邮箱

2. **验证管理员权限**
   - 登录后访问 `http://localhost:3000/admin`
   - 确认可以访问管理面板

## 第七步：测试功能

1. **测试数据库连接**
   - 在管理面板中尝试添加一篇论文
   - 检查数据是否正确保存

2. **测试文件上传**
   - 尝试上传头像或文件
   - 确认文件正确保存到存储桶

3. **测试认证功能**
   - 测试登录/登出
   - 测试权限控制

## 故障排除

### 常见问题

1. **RLS策略错误**
   - 检查用户是否正确创建了user_profiles记录
   - 确认RLS策略正确配置

2. **存储上传失败**
   - 检查存储桶策略
   - 确认文件大小和类型限制

3. **认证重定向错误**
   - 检查Site URL和Redirect URLs配置
   - 确认NEXTAUTH_URL正确设置

### 有用的SQL查询

```sql
-- 检查用户配置文件
SELECT * FROM public.user_profiles;

-- 检查管理员权限
SELECT id, email, role FROM public.user_profiles WHERE role = 'admin';

-- 重置用户角色为管理员
UPDATE public.user_profiles 
SET role = 'admin' 
WHERE email = 'zwsh88@sjtu.edu.cn';
```

## 下一步

配置完成后，继续进行：
1. GitHub仓库设置
2. Vercel部署配置
3. 域名和SSL配置
