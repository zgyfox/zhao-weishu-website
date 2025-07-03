import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-anon-key';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder-service-key';

// 客户端使用
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// 服务端使用（具有更高权限）
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

// 数据库表结构定义
export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  doi?: string;
  abstract: string;
  tags: string[];
  type: 'journal' | 'conference' | 'preprint';
  status: 'published' | 'draft' | 'archived';
  created_at: string;
  updated_at: string;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  source: string;
  category: string;
  date: string;
  url?: string;
  image_url?: string;
  status: 'published' | 'draft' | 'archived';
  type: 'manual' | 'auto';
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  status: 'ongoing' | 'completed' | 'planned';
  start_date: string;
  end_date?: string;
  funding: string;
  collaborators: string[];
  images: string[];
  tags: string[];
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor';
  avatar_url?: string;
  last_sign_in: string;
  created_at: string;
  updated_at: string;
}

export interface MediaFile {
  id: string;
  filename: string;
  original_name: string;
  file_path: string;
  file_size: number;
  mime_type: string;
  category: 'profile' | 'expedition' | 'research' | 'academic' | 'media';
  alt_text?: string;
  caption?: string;
  created_at: string;
}

// 数据库操作函数
export const db = {
  // 用户操作
  users: {
    async getAll() {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as User[];
    },

    async getById(id: string) {
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;
      return data as User;
    },

    async create(user: Omit<User, 'id' | 'created_at' | 'updated_at'>) {
      const { data, error } = await supabase
        .from('users')
        .insert(user)
        .select()
        .single();

      if (error) throw error;
      return data as User;
    },

    async update(id: string, updates: Partial<User>) {
      const { data, error } = await supabase
        .from('users')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data as User;
    }
  },

  // 论文操作
  publications: {
    async getAll() {
      const { data, error } = await supabase
        .from('publications')
        .select('*')
        .order('year', { ascending: false });

      if (error) throw error;
      return data as Publication[];
    },

    async create(publication: Omit<Publication, 'id' | 'created_at' | 'updated_at'>) {
      const { data, error } = await supabase
        .from('publications')
        .insert(publication)
        .select()
        .single();

      if (error) throw error;
      return data as Publication;
    },

    async update(id: string, updates: Partial<Publication>) {
      const { data, error } = await supabase
        .from('publications')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data as Publication;
    },

    async delete(id: string) {
      const { error } = await supabase
        .from('publications')
        .delete()
        .eq('id', id);

      if (error) throw error;
    }
  },

  // 新闻操作
  news: {
    async getAll() {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .order('date', { ascending: false });

      if (error) throw error;
      return data as NewsItem[];
    },

    async getPublished() {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('status', 'published')
        .order('date', { ascending: false });

      if (error) throw error;
      return data as NewsItem[];
    },

    async create(article: Omit<NewsItem, 'id' | 'created_at' | 'updated_at'>) {
      const { data, error } = await supabase
        .from('news')
        .insert(article)
        .select()
        .single();

      if (error) throw error;
      return data as NewsItem;
    },

    async update(id: string, updates: Partial<NewsItem>) {
      const { data, error } = await supabase
        .from('news')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data as NewsItem;
    },

    async delete(id: string) {
      const { error } = await supabase
        .from('news')
        .delete()
        .eq('id', id);

      if (error) throw error;
    }
  },

  // 项目操作
  projects: {
    async getAll() {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data as Project[];
    },

    async create(project: Omit<Project, 'id' | 'created_at' | 'updated_at'>) {
      const { data, error } = await supabase
        .from('projects')
        .insert(project)
        .select()
        .single();

      if (error) throw error;
      return data as Project;
    },

    async update(id: string, updates: Partial<Project>) {
      const { data, error } = await supabase
        .from('projects')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data as Project;
    },

    async delete(id: string) {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;
    }
  }
};