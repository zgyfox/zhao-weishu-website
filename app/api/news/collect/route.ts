import { NextRequest, NextResponse } from 'next/server';
import { runNewsCollection } from '@/lib/newsCollector';
import { verifyToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    // 验证用户权限
    const token = request.cookies.get('auth-token')?.value;
    if (!token) {
      return NextResponse.json(
        { error: '未授权访问' },
        { status: 401 }
      );
    }

    const user = verifyToken(token);
    if (!user || user.role !== 'admin') {
      return NextResponse.json(
        { error: '权限不足' },
        { status: 403 }
      );
    }

    // 执行新闻采集
    const result = await runNewsCollection();

    return NextResponse.json({
      success: true,
      message: `采集完成，处理了 ${result.total} 条新闻，保存了 ${result.saved} 条新闻`,
      data: result
    });
  } catch (error) {
    console.error('News collection API error:', error);
    return NextResponse.json(
      { error: '新闻采集失败' },
      { status: 500 }
    );
  }
}

// 获取新闻列表
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'published';
    const limit = parseInt(searchParams.get('limit') || '20');
    const offset = parseInt(searchParams.get('offset') || '0');

    // 这里应该从数据库获取新闻列表
    // 暂时返回模拟数据
    const mockNews = {
      items: [],
      total: 0,
      limit,
      offset
    };

    return NextResponse.json({
      success: true,
      data: mockNews
    });
  } catch (error) {
    console.error('Get news API error:', error);
    return NextResponse.json(
      { error: '获取新闻失败' },
      { status: 500 }
    );
  }
} 