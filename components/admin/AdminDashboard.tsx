'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  FileText, 
  Newspaper, 
  FolderOpen, 
  Users, 
  Settings,
  LogOut,
  Menu,
  X
} from 'lucide-react';

const sidebarItems = [
  { icon: LayoutDashboard, label: '仪表板', id: 'dashboard' },
  { icon: FileText, label: '论文管理', id: 'publications' },
  { icon: Newspaper, label: '新闻管理', id: 'news' },
  { icon: FolderOpen, label: '项目管理', id: 'projects' },
  { icon: Users, label: '用户管理', id: 'users' },
  { icon: Settings, label: '系统设置', id: 'settings' },
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardOverview />;
      case 'publications':
        return <PublicationsManager />;
      case 'news':
        return <NewsManager />;
      case 'projects':
        return <ProjectsManager />;
      case 'users':
        return <UsersManager />;
      case 'settings':
        return <SystemSettings />;
      default:
        return <DashboardOverview />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: sidebarOpen ? 0 : -300 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg lg:relative lg:translate-x-0"
      >
        <div className="flex items-center justify-between h-16 px-6 border-b">
          <h1 className="text-xl font-bold text-navy">管理后台</h1>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="mt-6">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center px-6 py-3 text-left hover:bg-gray-50 transition-colors ${
                activeTab === item.id ? 'bg-ocean-blue/10 text-ocean-blue border-r-2 border-ocean-blue' : 'text-gray-700'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </button>
          ))}
        </nav>
        
        <div className="absolute bottom-0 w-full p-6 border-t">
          <button className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg">
            <LogOut className="w-5 h-5 mr-3" />
            退出登录
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden"
          >
            <Menu className="w-6 h-6" />
          </button>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">欢迎回来，管理员</span>
            <div className="w-8 h-8 bg-ocean-blue rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">A</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

// Dashboard Overview Component
function DashboardOverview() {
  const stats = [
    { label: '总论文数', value: '6', change: '+2 本月' },
    { label: '新闻文章', value: '24', change: '+8 本周' },
    { label: '科研项目', value: '4', change: '进行中' },
    { label: '网站访问', value: '1.2k', change: '+15% 本月' },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-navy">仪表板概览</h2>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm border"
          >
            <h3 className="text-sm font-medium text-gray-600">{stat.label}</h3>
            <p className="text-3xl font-bold text-navy mt-2">{stat.value}</p>
            <p className="text-sm text-green-600 mt-1">{stat.change}</p>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="p-6 border-b">
          <h3 className="text-lg font-semibold text-navy">最近活动</h3>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {[
              { action: '发布新论文', item: 'Cell期刊论文', time: '2小时前' },
              { action: '更新项目状态', item: 'MEER计划', time: '1天前' },
              { action: '添加新闻', item: '深海科考报道', time: '2天前' },
            ].map((activity, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div>
                  <p className="font-medium text-gray-900">{activity.action}</p>
                  <p className="text-sm text-gray-600">{activity.item}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Publications Manager Component
function PublicationsManager() {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);

  useEffect(() => {
    fetchPublications();
  }, []);

  const fetchPublications = async () => {
    try {
      const response = await fetch('/api/test-data?type=publications');
      const data = await response.json();
      setPublications(data);
    } catch (error) {
      console.error('Error fetching publications:', error);
      // 使用本地模拟数据作为后备
      setPublications([
        {
          id: '1',
          title: '深渊沉积物微生物群落系统性研究',
          journal: 'Cell',
          year: 2025,
          status: 'published'
        },
        {
          id: '2',
          title: '深渊钩虾对深渊带压力的适应机制',
          journal: 'Cell',
          year: 2025,
          status: 'published'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-navy">论文管理</h2>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-ocean-blue text-white px-4 py-2 rounded-lg hover:bg-ocean-blue-dark transition-colors"
        >
          添加论文
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  标题
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  期刊
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  年份
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  状态
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  操作
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {publications.map((pub: any) => (
                <tr key={pub.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{pub.title}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{pub.journal}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{pub.year}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      pub.status === 'published'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {pub.status === 'published' ? '已发布' : '草稿'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <button className="text-ocean-blue hover:text-ocean-blue-dark mr-3">
                      编辑
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      删除
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function NewsManager() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await fetch('/api/test-data?type=news');
      const data = await response.json();
      setNews(data);
    } catch (error) {
      console.error('Error fetching news:', error);
      // 使用本地模拟数据作为后备
      setNews([
        {
          id: '1',
          title: '深海生命科学研究取得重大突破',
          source: '科技日报',
          date: '2025-07-01T00:00:00Z',
          status: 'published'
        },
        {
          id: '2',
          title: '马里亚纳海沟科考任务圆满完成',
          source: '新华社',
          date: '2025-06-29T00:00:00Z',
          status: 'pending'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      await fetch(`/api/news/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status }),
      });
      fetchNews(); // 重新获取数据
    } catch (error) {
      console.error('Error updating news status:', error);
    }
  };

  const triggerNewsCollection = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/news/collect', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('auth_token')}`,
        },
      });

      const result = await response.json();

      if (response.ok) {
        alert(`采集完成！${result.message}`);
        fetchNews(); // 刷新新闻列表
      } else {
        alert(`采集失败：${result.error}`);
      }
    } catch (error) {
      console.error('Error triggering news collection:', error);
      alert('采集失败，请稍后重试');
    } finally {
      setLoading(false);
    }
  };

  const filteredNews = news.filter((item: any) =>
    filter === 'all' || item.status === filter
  );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-navy">新闻管理</h2>
        <div className="flex space-x-4">
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2"
          >
            <option value="all">全部</option>
            <option value="pending">待审核</option>
            <option value="approved">已批准</option>
            <option value="published">已发布</option>
            <option value="rejected">已拒绝</option>
          </select>
          <button
            onClick={() => triggerNewsCollection()}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 mr-2"
          >
            采集新闻
          </button>
          <button className="bg-ocean-blue text-white px-4 py-2 rounded-lg hover:bg-ocean-blue-dark">
            手动添加
          </button>
        </div>
      </div>

      {loading ? (
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="animate-pulse space-y-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="flex space-x-4">
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/6"></div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm border">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    标题
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    来源
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    发布时间
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    状态
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    操作
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredNews.map((item: any) => (
                  <tr key={item.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900 line-clamp-2">
                        {item.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{item.source}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">
                        {new Date(item.date).toLocaleDateString()}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={item.status}
                        onChange={(e) => handleStatusChange(item.id, e.target.value)}
                        className={`text-xs font-semibold rounded-full px-2 py-1 border-0 ${
                          item.status === 'published' ? 'bg-green-100 text-green-800' :
                          item.status === 'approved' ? 'bg-blue-100 text-blue-800' :
                          item.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}
                      >
                        <option value="pending">待审核</option>
                        <option value="approved">已批准</option>
                        <option value="published">已发布</option>
                        <option value="rejected">已拒绝</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-ocean-blue hover:text-ocean-blue-dark mr-3">
                        查看
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        删除
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectsManager() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-2xl font-bold text-navy mb-4">项目管理</h2>
      <p className="text-gray-600">项目管理功能开发中...</p>
    </div>
  );
}

function UsersManager() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-2xl font-bold text-navy mb-4">用户管理</h2>
      <p className="text-gray-600">用户管理功能开发中...</p>
    </div>
  );
}

function SystemSettings() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-6">
      <h2 className="text-2xl font-bold text-navy mb-4">系统设置</h2>
      <p className="text-gray-600">系统设置功能开发中...</p>
    </div>
  );
}
