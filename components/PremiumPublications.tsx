'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  ExternalLink, 
  Calendar, 
  Users, 
  Award, 
  TrendingUp, 
  Quote, 
  X,
  Filter,
  Search,
  Download,
  Share2,
  Eye,
  Heart,
  Star
} from 'lucide-react';
import { publicationsData } from '@/lib/publications';
import Button from './ui/Button';
import Card, { CardHeader, CardContent, CardTitle, CardDescription } from './ui/Card';
import Modal from './ui/Modal';
import { cn, formatNumber } from '@/lib/utils';

export default function PremiumPublications() {
  const [selectedPublication, setSelectedPublication] = useState<any>(null);
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const filteredPublications = publicationsData.filter(pub => {
    const matchesFilter = filter === 'all' || pub.type === filter;
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.journal.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const stats = [
    { icon: BookOpen, label: '总发表论文', value: publicationsData.length, color: 'text-blue-600' },
    { icon: Award, label: '顶级期刊', value: publicationsData.filter(p => p.type === 'flagship').length, color: 'text-emerald-600' },
    { icon: TrendingUp, label: '总引用数', value: publicationsData.reduce((sum, p) => sum + (p.citations || 0), 0), color: 'text-purple-600' },
    { icon: Star, label: '平均影响因子', value: '15.2', color: 'text-orange-600' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 头部 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6"
            whileHover={{ scale: 1.05 }}
          >
            <BookOpen className="w-4 h-4 mr-2" />
            学术成果展示
          </motion.div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-emerald-600 bg-clip-text text-transparent">
              研究论文
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            在深海生命科学领域发表的重要研究成果，推动人类对深渊生命的系统性认知
          </p>
        </motion.div>

        {/* 统计数据 */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <Card
              key={stat.label}
              variant="elevated"
              className="text-center p-6"
              hover
              glow
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isLoaded ? { scale: 1 } : {}}
                transition={{ delay: 0.4 + index * 0.1, type: "spring" }}
              >
                <stat.icon className={cn("w-8 h-8 mx-auto mb-3", stat.color)} />
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {typeof stat.value === 'number' ? formatNumber(stat.value) : stat.value}
                </div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            </Card>
          ))}
        </motion.div>

        {/* 搜索和过滤 */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="搜索论文标题或期刊..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>
          
          <div className="flex gap-2">
            {[
              { key: 'all', label: '全部' },
              { key: 'flagship', label: '顶级期刊' },
              { key: 'research', label: '研究论文' },
              { key: 'methodology', label: '方法论文' }
            ].map((filterOption) => (
              <Button
                key={filterOption.key}
                variant={filter === filterOption.key ? 'primary' : 'secondary'}
                size="md"
                onClick={() => setFilter(filterOption.key)}
                className="whitespace-nowrap"
              >
                {filterOption.label}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* 论文列表 */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={isLoaded ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <AnimatePresence>
            {filteredPublications.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                layout
              >
                <Card
                  variant="elevated"
                  className="h-full cursor-pointer group"
                  hover
                  glow
                  interactive
                  onClick={() => setSelectedPublication(pub)}
                >
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <span className={cn(
                        "px-3 py-1 rounded-full text-xs font-medium",
                        pub.type === 'flagship' ? 'bg-red-100 text-red-800' :
                        pub.type === 'research' ? 'bg-blue-100 text-blue-800' :
                        'bg-green-100 text-green-800'
                      )}>
                        {pub.type === 'flagship' ? '顶级期刊' :
                         pub.type === 'research' ? '研究论文' : '方法论文'}
                      </span>
                      
                      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={<Eye className="w-4 h-4" />}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPublication(pub);
                          }}
                        />
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={<Share2 className="w-4 h-4" />}
                          onClick={(e) => {
                            e.stopPropagation();
                            navigator.share?.({ title: pub.title, url: window.location.href });
                          }}
                        />
                      </div>
                    </div>
                    
                    <CardTitle className="text-lg group-hover:text-blue-600 transition-colors line-clamp-2">
                      {pub.title}
                    </CardTitle>
                    
                    {pub.titleEn && (
                      <p className="text-sm text-gray-500 italic line-clamp-2">
                        {pub.titleEn}
                      </p>
                    )}
                  </CardHeader>

                  <CardContent className="pt-0">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-blue-600">{pub.journal}</span>
                        <span className="text-gray-500">{pub.year}</span>
                      </div>
                      
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {pub.authors}
                      </p>
                      
                      {pub.abstract && (
                        <p className="text-gray-600 text-sm line-clamp-3">
                          {pub.abstract}
                        </p>
                      )}
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          {pub.citations && (
                            <div className="flex items-center space-x-1">
                              <Quote className="w-4 h-4" />
                              <span>{pub.citations}</span>
                            </div>
                          )}
                          {pub.altmetric && (
                            <div className="flex items-center space-x-1">
                              <TrendingUp className="w-4 h-4" />
                              <span>{pub.altmetric}</span>
                            </div>
                          )}
                        </div>
                        
                        <Button
                          variant="primary"
                          size="sm"
                          icon={<ExternalLink className="w-4 h-4" />}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedPublication(pub);
                          }}
                        >
                          查看详情
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* 空状态 */}
        {filteredPublications.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">未找到相关论文</h3>
            <p className="text-gray-500">请尝试调整搜索条件或过滤器</p>
          </motion.div>
        )}
      </div>

      {/* 论文详情模态框 */}
      <Modal
        isOpen={!!selectedPublication}
        onClose={() => setSelectedPublication(null)}
        title={selectedPublication?.title}
        size="xl"
        variant="glass"
      >
        {selectedPublication && (
          <div className="space-y-6">
            {/* 基本信息 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">期刊信息</h4>
                <p className="text-gray-600">{selectedPublication.journal}</p>
                <p className="text-gray-600">发表年份: {selectedPublication.year}</p>
                {selectedPublication.impactFactor && (
                  <p className="text-gray-600">影响因子: {selectedPublication.impactFactor}</p>
                )}
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">作者</h4>
                <p className="text-gray-600">{selectedPublication.authors}</p>
              </div>
            </div>

            {/* 摘要 */}
            {selectedPublication.abstract && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">摘要</h4>
                <p className="text-gray-600 leading-relaxed">
                  {selectedPublication.abstract}
                </p>
              </div>
            )}

            {/* 关键词 */}
            {selectedPublication.keywords && selectedPublication.keywords.length > 0 && (
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">关键词</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedPublication.keywords.map((keyword: string, index: number) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* 指标 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {selectedPublication.citations && (
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{selectedPublication.citations}</div>
                  <div className="text-sm text-gray-600">引用次数</div>
                </div>
              )}
              {selectedPublication.altmetric && (
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{selectedPublication.altmetric}</div>
                  <div className="text-sm text-gray-600">Altmetric评分</div>
                </div>
              )}
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-gray-900">{selectedPublication.impactFactor || 'N/A'}</div>
                <div className="text-sm text-gray-600">影响因子</div>
              </div>
            </div>
          </div>
        )}
        
        <div className="flex justify-end space-x-4 mt-6">
          {selectedPublication?.doi && (
            <Button
              variant="primary"
              icon={<ExternalLink className="w-4 h-4" />}
              onClick={() => window.open(`https://doi.org/${selectedPublication.doi}`, '_blank')}
            >
              查看原文
            </Button>
          )}
          <Button
            variant="secondary"
            icon={<Download className="w-4 h-4" />}
            onClick={() => {
              // 下载PDF逻辑
            }}
          >
            下载PDF
          </Button>
        </div>
      </Modal>
    </section>
  );
}
