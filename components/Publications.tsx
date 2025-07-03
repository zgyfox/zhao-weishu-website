'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Calendar, Users, Award, TrendingUp, Quote, X } from 'lucide-react';
import { publications, researchMetrics } from '@/lib/publications';

const displayMetrics = [
  { label: 'Cell论文', value: `${researchMetrics.cellPapers}篇`, description: '顶级期刊发表' },
  { label: '总引用数', value: `${researchMetrics.totalCitations}+`, description: '学术影响力' },
  { label: 'H指数', value: `${researchMetrics.hIndex}`, description: '学术声誉指标' },
  { label: '合作机构', value: `${researchMetrics.collaborations}+`, description: '国际合作网络' }
];

export default function Publications() {
  const [selectedPublication, setSelectedPublication] = useState<any>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'flagship':
        return 'from-red-500 to-red-600';
      case 'research':
        return 'from-blue-500 to-blue-600';
      case 'methodology':
        return 'from-green-500 to-green-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'flagship':
        return '旗舰研究';
      case 'research':
        return '研究论文';
      case 'methodology':
        return '方法创新';
      default:
        return '学术论文';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center">
            <h2 className="text-4xl font-bold text-navy mb-4">学术成果</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              在深海生命科学领域发表多篇高影响因子论文，推动了学科发展和理论创新
            </p>
          </motion.div>

          {/* Research Metrics */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {displayMetrics.map((metric, index) => (
              <div key={metric.label} className="text-center">
                <div className="bg-gradient-to-br from-ocean-blue/10 to-blue-50 rounded-xl p-6">
                  <div className="text-3xl font-bold text-ocean-blue mb-2">
                    {metric.value}
                  </div>
                  <div className="font-semibold text-navy mb-1">
                    {metric.label}
                  </div>
                  <div className="text-sm text-gray-600">
                    {metric.description}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Publications List */}
          <motion.div variants={staggerContainer} className="space-y-8">
            <h3 className="text-2xl font-bold text-navy text-center mb-8">重要论文</h3>
            
            {publications.map((paper, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-1 bg-gradient-to-r ${getTypeColor(paper.type)}`}></div>
                
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getTypeColor(paper.type)}`}>
                          {getTypeLabel(paper.type)}
                        </span>
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>{paper.year}</span>
                        </div>
                      </div>
                      
                      <h4 className="text-xl font-bold text-navy mb-2 leading-tight">
                        {paper.title}
                      </h4>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <BookOpen className="w-4 h-4" />
                          <span className="font-medium">{paper.journal}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{paper.authors}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => setSelectedPublication(pub)}
                        className="flex items-center space-x-2 px-4 py-2 bg-ocean-blue text-white rounded-lg hover:bg-ocean-blue-dark transition-colors duration-200"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>查看详情</span>
                      </button>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {paper.description}
                  </p>

                  {/* 新增：论文摘要 */}
                  {paper.abstract && (
                    <div className="bg-gray-50 rounded-lg p-4 mb-4">
                      <h5 className="font-semibold text-navy mb-2 flex items-center">
                        <Quote className="w-4 h-4 mr-2" />
                        摘要
                      </h5>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {paper.abstract}
                      </p>
                    </div>
                  )}

                  {/* 新增：关键词 */}
                  {paper.keywords && (
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-2">
                        {paper.keywords.map((keyword, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs"
                          >
                            {keyword}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        <Award className="w-4 h-4 text-orange-500" />
                        <span className="text-sm font-medium text-orange-600">
                          {paper.impact}
                        </span>
                      </div>

                      {/* 新增：引用数和Altmetric */}
                      {paper.citations && (
                        <div className="flex items-center space-x-2">
                          <TrendingUp className="w-4 h-4 text-green-500" />
                          <span className="text-sm text-green-600">
                            引用: {paper.citations}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="text-xs text-gray-500">
                      DOI: {paper.doi}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Research Impact Statement */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-ocean-blue to-ocean-blue-dark rounded-xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">学术影响</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              通过在Cell等顶级期刊发表重要研究成果，赵维殳博士的工作不仅推动了深海生命科学的发展，
              也为全球科学界理解极端环境中的生命适应机制提供了重要的理论基础和实验证据。
              她的研究成果被国际同行广泛引用，为深海生物学领域的发展做出了重要贡献。
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* 论文详情模态框 */}
      {selectedPublication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6">
              {/* 模态框头部 */}
              <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-navy mb-2">
                    {selectedPublication.title}
                  </h2>
                  {selectedPublication.titleEn && (
                    <h3 className="text-lg text-gray-600 mb-4">
                      {selectedPublication.titleEn}
                    </h3>
                  )}
                </div>
                <button
                  onClick={() => setSelectedPublication(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* 论文信息 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">期刊信息</h4>
                  <p className="text-gray-600">{selectedPublication.journal}</p>
                  <p className="text-gray-600">发表年份: {selectedPublication.year}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">作者</h4>
                  <p className="text-gray-600">{selectedPublication.authors}</p>
                </div>
              </div>

              {/* 摘要 */}
              {selectedPublication.abstract && (
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">摘要</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {selectedPublication.abstract}
                  </p>
                </div>
              )}

              {/* 关键词 */}
              {selectedPublication.keywords && selectedPublication.keywords.length > 0 && (
                <div className="mb-6">
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                {selectedPublication.citations && (
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-navy">{selectedPublication.citations}</div>
                    <div className="text-sm text-gray-600">引用次数</div>
                  </div>
                )}
                {selectedPublication.altmetric && (
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-navy">{selectedPublication.altmetric}</div>
                    <div className="text-sm text-gray-600">Altmetric评分</div>
                  </div>
                )}
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-navy">{selectedPublication.impactFactor || 'N/A'}</div>
                  <div className="text-sm text-gray-600">影响因子</div>
                </div>
              </div>

              {/* 操作按钮 */}
              <div className="flex justify-end space-x-4">
                {selectedPublication.doi && (
                  <a
                    href={`https://doi.org/${selectedPublication.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-ocean-blue text-white rounded-lg hover:bg-ocean-blue-dark transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>查看原文</span>
                  </a>
                )}
                <button
                  onClick={() => setSelectedPublication(null)}
                  className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  关闭
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
