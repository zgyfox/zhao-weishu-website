-- 赵维殳个人网站数据库初始化脚本
-- 在Supabase SQL编辑器中运行此脚本

-- 1. 创建用户表 (扩展默认auth.users)
CREATE TABLE IF NOT EXISTS public.user_profiles (
  id UUID REFERENCES auth.users(id) PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT,
  avatar_url TEXT,
  role TEXT DEFAULT 'viewer' CHECK (role IN ('admin', 'editor', 'viewer')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. 创建论文表
CREATE TABLE IF NOT EXISTS public.publications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  authors TEXT[] NOT NULL,
  journal TEXT NOT NULL,
  year INTEGER NOT NULL,
  doi TEXT,
  abstract TEXT,
  pdf_url TEXT,
  tags TEXT[],
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. 创建项目表
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  start_date DATE,
  end_date DATE,
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'completed', 'paused')),
  funding_source TEXT,
  collaborators TEXT[],
  tags TEXT[],
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. 创建新闻表
CREATE TABLE IF NOT EXISTS public.news (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  excerpt TEXT,
  source TEXT,
  source_url TEXT,
  published_date TIMESTAMP WITH TIME ZONE,
  tags TEXT[],
  featured BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. 创建媒体文件表
CREATE TABLE IF NOT EXISTS public.media_files (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  filename TEXT NOT NULL,
  original_name TEXT NOT NULL,
  file_path TEXT NOT NULL,
  file_size INTEGER,
  mime_type TEXT,
  alt_text TEXT,
  caption TEXT,
  tags TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. 创建科考经历表
CREATE TABLE IF NOT EXISTS public.expeditions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  location TEXT NOT NULL,
  start_date DATE,
  end_date DATE,
  vessel_name TEXT,
  expedition_type TEXT,
  achievements TEXT[],
  media_files UUID[] DEFAULT '{}',
  featured BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. 创建联系表单表
CREATE TABLE IF NOT EXISTS public.contact_submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status TEXT DEFAULT 'new' CHECK (status IN ('new', 'read', 'replied', 'archived')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 8. 创建网站设置表
CREATE TABLE IF NOT EXISTS public.site_settings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  key TEXT UNIQUE NOT NULL,
  value JSONB,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 9. 插入默认网站设置
INSERT INTO public.site_settings (key, value, description) VALUES
('site_title', '"赵维殳个人网站"', '网站标题'),
('site_description', '"上海交通大学生命科学技术学院副研究员，深海生命科学研究专家"', '网站描述'),
('contact_email', '"zwsh88@sjtu.edu.cn"', '联系邮箱'),
('social_links', '{"github": "", "twitter": "", "linkedin": ""}', '社交媒体链接')
ON CONFLICT (key) DO NOTHING;

-- 10. 启用行级安全策略 (RLS)
ALTER TABLE public.user_profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.publications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.media_files ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.expeditions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- 11. 创建RLS策略

-- 用户配置文件策略
CREATE POLICY "用户可以查看所有配置文件" ON public.user_profiles
  FOR SELECT USING (true);

CREATE POLICY "用户只能更新自己的配置文件" ON public.user_profiles
  FOR UPDATE USING (auth.uid() = id);

-- 公开内容策略 (论文、项目、新闻、科考经历)
CREATE POLICY "所有人可以查看已发布的论文" ON public.publications
  FOR SELECT USING (true);

CREATE POLICY "管理员可以管理论文" ON public.publications
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "所有人可以查看项目" ON public.projects
  FOR SELECT USING (true);

CREATE POLICY "管理员可以管理项目" ON public.projects
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "所有人可以查看已发布的新闻" ON public.news
  FOR SELECT USING (status = 'published');

CREATE POLICY "管理员可以管理新闻" ON public.news
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

CREATE POLICY "所有人可以查看科考经历" ON public.expeditions
  FOR SELECT USING (true);

CREATE POLICY "管理员可以管理科考经历" ON public.expeditions
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

-- 媒体文件策略
CREATE POLICY "所有人可以查看媒体文件" ON public.media_files
  FOR SELECT USING (true);

CREATE POLICY "管理员可以管理媒体文件" ON public.media_files
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'editor')
    )
  );

-- 联系表单策略
CREATE POLICY "任何人可以提交联系表单" ON public.contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "管理员可以查看联系表单" ON public.contact_submissions
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- 网站设置策略
CREATE POLICY "所有人可以查看网站设置" ON public.site_settings
  FOR SELECT USING (true);

CREATE POLICY "管理员可以管理网站设置" ON public.site_settings
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM public.user_profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- 12. 创建触发器函数用于更新时间戳
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- 13. 为需要的表添加更新时间戳触发器
CREATE TRIGGER handle_user_profiles_updated_at
  BEFORE UPDATE ON public.user_profiles
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_publications_updated_at
  BEFORE UPDATE ON public.publications
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_projects_updated_at
  BEFORE UPDATE ON public.projects
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_news_updated_at
  BEFORE UPDATE ON public.news
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_media_files_updated_at
  BEFORE UPDATE ON public.media_files
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_expeditions_updated_at
  BEFORE UPDATE ON public.expeditions
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

CREATE TRIGGER handle_site_settings_updated_at
  BEFORE UPDATE ON public.site_settings
  FOR EACH ROW EXECUTE FUNCTION public.handle_updated_at();

-- 14. 创建用户注册后自动创建配置文件的函数
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.user_profiles (id, email, full_name, role)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    CASE 
      WHEN NEW.email = 'zwsh88@sjtu.edu.cn' THEN 'admin'
      ELSE 'viewer'
    END
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 15. 创建触发器
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- 16. 创建存储桶 (需要在Supabase Dashboard中手动创建)
-- 存储桶名称：
-- - avatars (用户头像)
-- - publications (论文相关文件)
-- - projects (项目相关文件)
-- - expeditions (科考照片和视频)
-- - news (新闻图片)
-- - general (通用文件)

-- 完成！数据库初始化完成。
-- 接下来需要：
-- 1. 在Supabase Dashboard中创建存储桶
-- 2. 配置存储桶的访问策略
-- 3. 获取项目URL和API密钥
-- 4. 更新.env.local文件
