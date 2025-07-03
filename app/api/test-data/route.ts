import { NextRequest, NextResponse } from 'next/server';

// 模拟数据
const mockPublications = [
  {
    id: '1',
    title: '深渊沉积物微生物群落系统性研究',
    journal: 'Cell',
    year: 2025,
    authors: '肖湘, 赵维殳*, 齐琪, 等',
    status: 'published',
    created_at: '2025-01-15T00:00:00Z',
    updated_at: '2025-01-15T00:00:00Z'
  },
  {
    id: '2',
    title: '深渊钩虾对深渊带压力的适应机制',
    journal: 'Cell',
    year: 2025,
    authors: '张维佳, 赵维殳, 徐讯, 等',
    status: 'published',
    created_at: '2025-01-10T00:00:00Z',
    updated_at: '2025-01-10T00:00:00Z'
  },
  {
    id: '3',
    title: '深渊原核生物群落多样性与代谢特征',
    journal: 'Cell',
    year: 2025,
    authors: '韩默, 赵维殳, 刘姗姗, 等',
    status: 'draft',
    created_at: '2025-01-05T00:00:00Z',
    updated_at: '2025-01-05T00:00:00Z'
  }
];

const mockNews = [
  {
    id: '1',
    title: '深海生命科学研究取得重大突破',
    content: '赵维殳博士团队在Cell期刊发表重要研究成果，揭示了深渊微生物的适应机制...',
    source: '科技日报',
    date: '2025-07-01T00:00:00Z',
    status: 'published',
    created_at: '2025-07-01T00:00:00Z',
    updated_at: '2025-07-01T00:00:00Z'
  },
  {
    id: '2',
    title: '马里亚纳海沟科考任务圆满完成',
    content: 'MEER计划科考队成功完成马里亚纳海沟深海科考任务，采集了大量珍贵样本...',
    source: '新华社',
    date: '2025-06-29T00:00:00Z',
    status: 'published',
    created_at: '2025-06-29T00:00:00Z',
    updated_at: '2025-06-29T00:00:00Z'
  },
  {
    id: '3',
    title: '深渊生物研究获国际关注',
    content: '赵维殳博士的深渊生物研究成果受到国际学术界广泛关注...',
    source: 'Nature News',
    date: '2025-06-25T00:00:00Z',
    status: 'pending',
    created_at: '2025-06-25T00:00:00Z',
    updated_at: '2025-06-25T00:00:00Z'
  },
  {
    id: '4',
    title: '新发现的深海微生物种类',
    content: '科研团队在最新的深海科考中发现了多种新的微生物种类...',
    source: '科学网',
    date: '2025-06-20T00:00:00Z',
    status: 'approved',
    created_at: '2025-06-20T00:00:00Z',
    updated_at: '2025-06-20T00:00:00Z'
  }
];

// GET - 获取测试数据
export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type');

  try {
    switch (type) {
      case 'publications':
        return NextResponse.json(mockPublications);
      case 'news':
        return NextResponse.json(mockNews);
      case 'all':
        return NextResponse.json({
          publications: mockPublications,
          news: mockNews,
        });
      default:
        return NextResponse.json({
          message: '请指定数据类型: publications, news, 或 all',
          availableTypes: ['publications', 'news', 'all']
        });
    }
  } catch (error) {
    console.error('Error fetching test data:', error);
    return NextResponse.json(
      { error: '获取测试数据失败' },
      { status: 500 }
    );
  }
}
