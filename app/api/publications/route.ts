import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const publicationSchema = z.object({
  title: z.string().min(1, '标题不能为空'),
  title_en: z.string().optional(),
  journal: z.string().min(1, '期刊名称不能为空'),
  year: z.number().min(1900).max(new Date().getFullYear() + 10),
  authors: z.string().min(1, '作者不能为空'),
  abstract: z.string().optional(),
  keywords: z.array(z.string()).default([]),
  doi: z.string().min(1, 'DOI不能为空'),
  citations: z.number().optional(),
  altmetric: z.number().optional(),
  type: z.enum(['flagship', 'research', 'methodology']).default('research'),
  status: z.enum(['published', 'draft']).default('draft'),
});

// GET - 获取所有论文
export async function GET(request: NextRequest) {
  try {
    // 暂时使用测试数据
    const testDataResponse = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/api/test-data?type=publications`);
    const publications = await testDataResponse.json();

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    const type = searchParams.get('type');
    const year = searchParams.get('year');

    // 应用过滤器
    let filteredPublications = publications;

    if (status) {
      filteredPublications = filteredPublications.filter((pub: any) => pub.status === status);
    }

    if (year) {
      filteredPublications = filteredPublications.filter((pub: any) => pub.year.toString() === year);
    }

    return NextResponse.json(filteredPublications);
  } catch (error) {
    console.error('Error fetching publications:', error);
    return NextResponse.json(
      { error: '获取论文列表失败' },
      { status: 500 }
    );
  }
}

// POST - 创建新论文
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 验证数据
    const validatedData = publicationSchema.parse(body);

    // 模拟创建论文
    const publication = {
      id: Date.now().toString(),
      ...validatedData,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    console.log('Created publication:', publication);

    return NextResponse.json(publication, { status: 201 });
  } catch (error) {
    console.error('Error creating publication:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: '数据验证失败', details: error.errors },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { error: '创建论文失败' },
      { status: 500 }
    );
  }
}
