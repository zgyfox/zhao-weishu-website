import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const updateNewsSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  excerpt: z.string().optional(),
  source: z.string().optional(),
  url: z.string().url().optional(),
  published_at: z.string().datetime().optional(),
  keywords: z.array(z.string()).optional(),
  relevance_score: z.number().min(0).max(100).optional(),
  status: z.enum(['pending', 'approved', 'rejected', 'published']).optional(),
});

// GET - 获取单个新闻
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    // 暂时使用测试数据
    const testDataResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/test-data?type=news`);
    const news = await testDataResponse.json();

    const newsItem = news.find((item: any) => item.id === params.id);

    if (!newsItem) {
      return NextResponse.json(
        { error: '新闻不存在' },
        { status: 404 }
      );
    }

    return NextResponse.json(newsItem);
  } catch (error) {
    console.error('Error fetching news item:', error);
    return NextResponse.json(
      { error: '获取新闻失败' },
      { status: 500 }
    );
  }
}

// PATCH - 更新新闻
export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    const body = await request.json();

    // 验证数据
    const validatedData = updateNewsSchema.parse(body);

    // 模拟更新操作
    console.log(`Updating news ${params.id} with:`, validatedData);

    // 返回模拟的更新结果
    return NextResponse.json({
      id: params.id,
      ...validatedData,
      updated_at: new Date().toISOString(),
    });
  } catch (error) {
    console.error('Error updating news:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: '数据验证失败', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: '更新新闻失败' },
      { status: 500 }
    );
  }
}

// DELETE - 删除新闻
export async function DELETE(
  request: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const params = await context.params;
    // 模拟删除操作
    console.log(`Deleting news ${params.id}`);

    return NextResponse.json({ message: '删除成功' });
  } catch (error) {
    console.error('Error deleting news:', error);
    return NextResponse.json(
      { error: '删除新闻失败' },
      { status: 500 }
    );
  }
}
