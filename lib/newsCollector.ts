import Parser from 'rss-parser';
import { supabaseAdmin, NewsItem } from './supabase';

interface NewsApiResponse {
  status: string;
  totalResults: number;
  articles: Array<{
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    source: { name: string };
  }>;
}

// RSS解析器
const parser = new Parser();

// 新闻关键词配置
const KEYWORDS = [
  '赵维殳',
  '深海生命科学',
  '马里亚纳海沟',
  '深渊微生物',
  '上海交通大学生命科学',
  'MEER计划',
  '深海科考'
];

// RSS订阅源配置
const RSS_SOURCES = [
  'https://www.sjtu.edu.cn/rss.xml',
  'https://news.sjtu.edu.cn/rss.xml',
  'https://www.sciencenet.cn/rss.xml'
];

// NewsAPI采集
export async function collectFromNewsAPI(): Promise<NewsItem[]> {
  const NEWS_API_KEY = process.env.NEWS_API_KEY;
  if (!NEWS_API_KEY) {
    console.error('NEWS_API_KEY not configured');
    return [];
  }

  const collectedNews: NewsItem[] = [];

  try {
    for (const keyword of KEYWORDS) {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${encodeURIComponent(keyword)}&language=zh&sortBy=publishedAt&apiKey=${NEWS_API_KEY}`
      );
      
      if (!response.ok) continue;
      
      const data: NewsApiResponse = await response.json();
      
      for (const article of data.articles.slice(0, 5)) { // 限制每个关键词最多5条
        const newsItem: NewsItem = {
          id: generateId(),
          title: article.title,
          content: article.description || '',
          source: article.source.name,
          category: '自动采集',
          date: article.publishedAt,
          url: article.url,
          image_url: article.urlToImage,
          status: 'draft', // 自动采集的新闻默认为草稿状态
          type: 'auto',
          created_at: new Date().toISOString(),
          updated_at: new Date().toISOString()
        };
        
        collectedNews.push(newsItem);
      }
      
      // 避免API限制，添加延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  } catch (error) {
    console.error('NewsAPI collection error:', error);
  }

  return collectedNews;
}

// RSS订阅采集
export async function collectFromRSS(): Promise<NewsItem[]> {
  const collectedNews: NewsItem[] = [];

  try {
    for (const rssUrl of RSS_SOURCES) {
      try {
        const feed = await parser.parseURL(rssUrl);
        
        for (const item of feed.items) {
          // 检查标题是否包含相关关键词
          const isRelevant = KEYWORDS.some(keyword => 
            item.title?.toLowerCase().includes(keyword.toLowerCase()) ||
            item.contentSnippet?.toLowerCase().includes(keyword.toLowerCase())
          );
          
          if (isRelevant) {
            const newsItem: NewsItem = {
              id: generateId(),
              title: item.title || '',
              content: item.contentSnippet || '',
              source: feed.title || '未知来源',
              category: 'RSS采集',
              date: item.pubDate || new Date().toISOString(),
              url: item.link,
              image_url: undefined,
              status: 'draft',
              type: 'auto',
              created_at: new Date().toISOString(),
              updated_at: new Date().toISOString()
            };
            
            collectedNews.push(newsItem);
          }
        }
      } catch (error) {
        console.error(`RSS collection error for ${rssUrl}:`, error);
      }
    }
  } catch (error) {
    console.error('RSS collection error:', error);
  }

  return collectedNews;
}

// 保存新闻到数据库
export async function saveNewsItems(newsItems: NewsItem[]): Promise<void> {
  try {
    // 检查重复
    const { data: existingNews } = await supabaseAdmin
      .from('news')
      .select('title, url')
      .in('title', newsItems.map(item => item.title));

    const existingTitles = new Set(existingNews?.map(item => item.title) || []);
    const existingUrls = new Set(existingNews?.map(item => item.url).filter(Boolean) || []);

    const newItems = newsItems.filter(item => 
      !existingTitles.has(item.title) && 
      (!item.url || !existingUrls.has(item.url))
    );

    if (newItems.length > 0) {
      const { error } = await supabaseAdmin
        .from('news')
        .insert(newItems);

      if (error) {
        console.error('Save news error:', error);
      } else {
        console.log(`Successfully saved ${newItems.length} new items`);
      }
    }
  } catch (error) {
    console.error('Save news items error:', error);
  }
}

// 执行完整的新闻采集任务
export async function runNewsCollection(): Promise<{ total: number; saved: number }> {
  console.log('Starting news collection...');
  
  const [newsApiItems, rssItems] = await Promise.all([
    collectFromNewsAPI(),
    collectFromRSS()
  ]);

  const allItems = [...newsApiItems, ...rssItems];
  const total = allItems.length;

  if (total > 0) {
    await saveNewsItems(allItems);
  }

  console.log(`News collection completed: ${total} items processed`);
  
  return { total, saved: total };
}

// 获取相关性评分
export function calculateRelevanceScore(title: string, content: string): number {
  let score = 0;
  const text = `${title} ${content}`.toLowerCase();
  
  // 核心关键词权重更高
  const coreKeywords = ['赵维殳', 'MEER', 'Cell'];
  const relatedKeywords = ['深海', '马里亚纳', '微生物', '上海交通大学'];
  
  coreKeywords.forEach(keyword => {
    if (text.includes(keyword.toLowerCase())) {
      score += 10;
    }
  });
  
  relatedKeywords.forEach(keyword => {
    if (text.includes(keyword.toLowerCase())) {
      score += 5;
    }
  });
  
  return score;
}

// 生成唯一ID
function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
}
