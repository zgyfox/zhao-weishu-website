import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { supabaseAdmin } from './supabase';

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor';
}

// 密码加密
export async function hashPassword(password: string): Promise<string> {
  return bcrypt.hash(password, 12);
}

// 密码验证
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// 生成JWT令牌
export function generateToken(user: AuthUser): string {
  return jwt.sign(
    { userId: user.id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}

// 验证JWT令牌
export function verifyToken(token: string): AuthUser | null {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as any;
    return {
      id: decoded.userId,
      email: decoded.email,
      name: decoded.name,
      role: decoded.role
    };
  } catch (error) {
    return null;
  }
}

// 用户登录
export async function loginUser(email: string, password: string): Promise<{ user: AuthUser; token: string } | null> {
  try {
    const { data: user, error } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('email', email)
      .single();

    if (error || !user) {
      return null;
    }

    const isValidPassword = await verifyPassword(password, user.password_hash);
    if (!isValidPassword) {
      return null;
    }

    const authUser: AuthUser = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    };

    const token = generateToken(authUser);

    // 更新最后登录时间
    await supabaseAdmin
      .from('users')
      .update({ last_sign_in: new Date().toISOString() })
      .eq('id', user.id);

    return { user: authUser, token };
  } catch (error) {
    console.error('Login error:', error);
    return null;
  }
}

// 创建用户
export async function createUser(email: string, password: string, name: string, role: 'admin' | 'editor' = 'editor'): Promise<AuthUser | null> {
  try {
    const hashedPassword = await hashPassword(password);
    
    const { data: user, error } = await supabaseAdmin
      .from('users')
      .insert({
        email,
        password_hash: hashedPassword,
        name,
        role,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select()
      .single();

    if (error || !user) {
      console.error('Create user error:', error);
      return null;
    }

    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role
    };
  } catch (error) {
    console.error('Create user error:', error);
    return null;
  }
}

// 权限检查中间件
export function requireAuth(minRole: 'admin' | 'editor' = 'editor') {
  return (user: AuthUser | null): boolean => {
    if (!user) return false;
    
    if (minRole === 'admin') {
      return user.role === 'admin';
    }
    
    return user.role === 'admin' || user.role === 'editor';
  };
} 