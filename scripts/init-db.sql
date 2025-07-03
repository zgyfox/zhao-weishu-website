-- 创建用户表
CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR UNIQUE NOT NULL,
  name VARCHAR NOT NULL,
  role VARCHAR DEFAULT 'editor' CHECK (role IN ('admin', 'editor')),
  avatar_url VARCHAR,
  last_sign_in TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 创建论文表
CREATE TABLE IF NOT EXISTS publications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR NOT NULL,
  title_en VARCHAR,
  journal VARCHAR NOT NULL,
  year INTEGER NOT NULL,
  authors VARCHAR NOT NULL,
  abstract TEXT,
  keywords TEXT[],
  doi VARCHAR NOT NULL,
  citations INTEGER DEFAULT 0,
  altmetric INTEGER DEFAULT 0,
  type VARCHAR DEFAULT 'research' CHECK (type IN ('flagship', 'research', 'methodology')),
  status VARCHAR DEFAULT 'draft' CHECK (status IN ('published', 'draft')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 创建新闻表
CREATE TABLE IF NOT EXISTS news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  source VARCHAR NOT NULL,
  url VARCHAR,
  published_at TIMESTAMP NOT NULL,
  keywords TEXT[],
  relevance_score INTEGER DEFAULT 50 CHECK (relevance_score >= 0 AND relevance_score <= 100),
  status VARCHAR DEFAULT 'pending' CHECK (status IN ('pending', 'approved', 'rejected', 'published')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 创建项目表
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR NOT NULL,
  title_en VARCHAR,
  description TEXT NOT NULL,
  period VARCHAR NOT NULL,
  status VARCHAR DEFAULT 'ongoing' CHECK (status IN ('ongoing', 'completed', 'planned')),
  role VARCHAR NOT NULL,
  funding VARCHAR NOT NULL,
  funding_number VARCHAR,
  objectives TEXT[],
  achievements TEXT[],
  collaborators TEXT[],
  type VARCHAR DEFAULT 'research' CHECK (type IN ('major', 'research', 'methodology', 'expedition')),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 创建媒体文件表
CREATE TABLE IF NOT EXISTS media_files (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  filename VARCHAR NOT NULL,
  original_name VARCHAR NOT NULL,
  file_path VARCHAR NOT NULL,
  file_size INTEGER NOT NULL,
  mime_type VARCHAR NOT NULL,
  category VARCHAR NOT NULL CHECK (category IN ('profile', 'expedition', 'research', 'academic', 'media')),
  alt_text VARCHAR,
  caption TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

-- 插入示例数据

-- 插入管理员用户
INSERT INTO users (email, name, role) VALUES 
('admin@example.com', '管理员', 'admin'),
('editor@example.com', '编辑员', 'editor')
ON CONFLICT (email) DO NOTHING;

-- 插入示例论文
INSERT INTO publications (title, journal, year, authors, doi, type, status) VALUES 
('深渊沉积物微生物群落系统性研究', 'Cell', 2025, '肖湘, 赵维殳*, 齐琪, 等', '10.1016/j.cell.2025.02.015', 'flagship', 'published'),
('深渊钩虾对深渊带压力的适应机制', 'Cell', 2025, '张维佳, 赵维殳, 徐讯, 等', '10.1016/j.cell.2025.02.016', 'research', 'published'),
('深渊原核生物群落多样性与代谢特征', 'Cell', 2025, '韩默, 赵维殳, 刘姗姗, 等', '10.1016/j.cell.2025.02.017', 'research', 'published')
ON CONFLICT DO NOTHING;

-- 插入示例新闻
INSERT INTO news (title, content, source, published_at, status) VALUES 
('深海生命科学研究取得重大突破', '赵维殳博士团队在Cell期刊发表重要研究成果，揭示了深渊微生物的适应机制...', '科技日报', NOW() - INTERVAL '1 day', 'published'),
('马里亚纳海沟科考任务圆满完成', 'MEER计划科考队成功完成马里亚纳海沟深海科考任务，采集了大量珍贵样本...', '新华社', NOW() - INTERVAL '3 days', 'published'),
('深渊生物研究获国际关注', '赵维殳博士的深渊生物研究成果受到国际学术界广泛关注...', 'Nature News', NOW() - INTERVAL '1 week', 'published')
ON CONFLICT DO NOTHING;

-- 插入示例项目
INSERT INTO projects (title, description, period, status, role, funding, type) VALUES 
('马里亚纳海沟环境与生态研究计划(MEER)', '系统性研究马里亚纳海沟深渊环境和生态系统，探索极端环境中的生命适应机制', '2019-2024', 'completed', '核心成员', '国家自然科学基金委员会', 'major'),
('深海微生物极端环境适应机制研究', '研究深海微生物在高压、低温、寡营养环境下的分子适应机制', '2020-2023', 'completed', '项目负责人', '国家重点研发计划', 'research'),
('深渊生态系统功能与服务评估', '评估深渊生态系统的生态功能和生态服务价值', '2023-2026', 'ongoing', '主要参与者', '中科院战略性先导科技专项', 'research')
ON CONFLICT DO NOTHING;

-- 创建索引
CREATE INDEX IF NOT EXISTS idx_publications_year ON publications(year);
CREATE INDEX IF NOT EXISTS idx_publications_status ON publications(status);
CREATE INDEX IF NOT EXISTS idx_news_status ON news(status);
CREATE INDEX IF NOT EXISTS idx_news_published_at ON news(published_at);
CREATE INDEX IF NOT EXISTS idx_projects_status ON projects(status);

-- 创建更新时间触发器
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_publications_updated_at BEFORE UPDATE ON publications FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_news_updated_at BEFORE UPDATE ON news FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_projects_updated_at BEFORE UPDATE ON projects FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
