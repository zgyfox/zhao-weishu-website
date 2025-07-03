import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const newsSchema = z.object({
  title: z.string().min(1, '标题不能为空'),
  content: z.string().min(1, '内容不能为空'),
  excerpt: z.string().optional(),
  source: z.string().min(1, '来源不能为空'),
  url: z.string().url().optional(),
  published_at: z.string().datetime(),
  keywords: z.array(z.string()).default([]),
  relevance_score: z.number().min(0).max(100).default(50),
  status: z.enum(['pending', 'approved', 'rejected', 'published']).default('pending'),
});

// GET - 获取所有新闻
export async function GET(request: NextRequest) {
  try {
    // 暂时使用测试数据
    const testDataResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/test-data?type=news`);
    let news = await testDataResponse.json();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const source = searchParams.get('source');
    const limit = searchParams.get('limit');

    // 应用过滤器
    if (status && status !== 'all') {
      news = news.filter((item: any) => item.status === status);
    }

    if (source) {
      news = news.filter((item: any) => item.source.toLowerCase().includes(source.toLowerCase()));
    }

    // 限制数量
    if (limit) {
      news = news.slice(0, parseInt(limit));
    }

    return NextResponse.json(news);
  } catch (error) {
    console.error('Error fetching news:', error);
    return NextResponse.json(
      { error: '获取新闻列表失败' },
      { status: 500 }
    );
  }
}

// POST - 创建新闻
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 验证数据
    const validatedData = newsSchema.parse(body);

    // 模拟创建新闻
    const newsItem = {
      id: Date.now().toString(),
      ...validatedData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    console.log('Created news item:', newsItem);

    return NextResponse.json(newsItem, { status: 201 });
  } catch (error) {
    console.error('Error creating news:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: '数据验证失败', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: '创建新闻失败' },
      { status: 500 }
    );
  }
}
