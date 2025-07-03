'use client';

import { motion } from 'framer-motion';
import { Calendar, ExternalLink, Newspaper, Award, Users, Globe } from 'lucide-react';

const newsItems = [
  {
    date: '2025年3月',
    title: '4篇Cell论文齐发！中国科学家绘制首个海洋最深生态系统图',
    source: '生物谷',
    category: '重大突破',
    description: '赵维殳博士作为共同第一作者和通讯作者，参与发表的研究成果在国际上引起巨大反响，标志着中国在深海生命研究领域实现国际领跑。',
    link: '#',
    type: 'breakthrough'
  },
  {
    date: '2025年3月',
    title: '上海交大肖湘团队Cell发文：实现人类首次对深渊沉积物微生物研究',
    source: '上海交通大学新闻网',
    category: '学术成果',
    description: '赵维殳博士作为共同第一作者兼通讯作者，在深渊微生物研究方面取得重要突破，为深海生命科学研究开辟了新的方向。',
    link: '#',
    type: 'academic'
  },
  {
    date: '2025年3月',
    title: '破译马里亚纳"黑暗绿洲"的生命密码',
    source: '科学网',
    category: '科普报道',
    description: '详细报道了赵维殳博士参与的马里亚纳海沟科考项目，揭示了深海生命的神秘面纱，展现了中国科学家的探索精神。',
    link: '#',
    type: 'media'
  },
  {
    date: '2025年3月',
    title: '上海交通大学深海生命科研成果新闻发布会在三亚召开',
    source: '交大要闻',
    category: '新闻发布',
    description: '赵维殳博士参加了在三亚召开的深海生命科研成果新闻发布会，向媒体和公众介绍了最新的研究进展。',
    link: '#',
    type: 'event'
  },
  {
    date: '2022年12月',
    title: '深部生命国际研究中心应用高通量蛋白结构研究早期生命代谢',
    source: '上海交通大学',
    category: '方法创新',
    description: '赵维殳博士作为第一作者，首次应用高通量蛋白结构组研究早期生命代谢，建立了蛋白结构组学新方法。',
    link: '#',
    type: 'innovation'
  },
  {
    date: '2021年12月',
    title: '探底雅浦海沟，人类首次抵达！四人组深潜超13小时',
    source: '解放日报',
    category: '科考探索',
    description: '赵维殳博士作为科考团队核心成员，参与了雅浦海沟的深海科考任务，为深海生命研究收集了珍贵的样本和数据。',
    link: '#',
    type: 'expedition'
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'breakthrough':
      return Award;
    case 'academic':
      return Newspaper;
    case 'media':
      return Globe;
    case 'event':
      return Users;
    case 'innovation':
      return ExternalLink;
    case 'expedition':
      return Globe;
    default:
      return Newspaper;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'breakthrough':
      return 'from-red-500 to-red-600';
    case 'academic':
      return 'from-blue-500 to-blue-600';
    case 'media':
      return 'from-green-500 to-green-600';
    case 'event':
      return 'from-purple-500 to-purple-600';
    case 'innovation':
      return 'from-orange-500 to-orange-600';
    case 'expedition':
      return 'from-teal-500 to-teal-600';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

export default function News() {
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

  return (
    <section className="py-20 bg-gray-50">
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
            <h2 className="text-4xl font-bold text-navy mb-4">媒体报道</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              赵维殳博士的研究成果和科学贡献受到国内外媒体的广泛关注和报道
            </p>
          </motion.div>

          {/* Featured News */}
          <motion.div variants={fadeInUp} className="mb-12">
            <div className="bg-gradient-to-r from-ocean-blue to-ocean-blue-dark rounded-xl p-8 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Award className="w-8 h-8" />
                <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                  重大突破
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">
                4篇Cell论文齐发，中国深海生命研究实现国际领跑
              </h3>
              <p className="text-blue-100 leading-relaxed mb-6">
                2025年3月，赵维殳博士作为核心作者参与的马里亚纳海沟环境与生态研究计划（MEER计划）
                在Cell期刊同时发表4篇重要论文，这是首次系统性研究深渊生命，标志着中国在深海生命科学
                研究领域实现了从跟跑到领跑的历史性跨越。
              </p>
              <button className="bg-white text-ocean-blue px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200">
                了解详情
              </button>
            </div>
          </motion.div>

          {/* News Timeline */}
          <motion.div variants={staggerContainer} className="space-y-8">
            <h3 className="text-2xl font-bold text-navy text-center mb-8">最新动态</h3>
            
            <div className="space-y-6">
              {newsItems.map((item, index) => {
                const IconComponent = getTypeIcon(item.type);
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <div className={`h-1 bg-gradient-to-r ${getTypeColor(item.type)}`}></div>
                    
                    <div className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <div className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(item.type)}`}>
                              <IconComponent className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm font-medium text-gray-600">
                              {item.category}
                            </span>
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <Calendar className="w-4 h-4" />
                              <span>{item.date}</span>
                            </div>
                          </div>
                          
                          <h4 className="text-xl font-bold text-navy mb-3 leading-tight">
                            {item.title}
                          </h4>
                          
                          <p className="text-gray-700 leading-relaxed mb-4">
                            {item.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">
                              来源：{item.source}
                            </span>
                            <button className="flex items-center space-x-2 text-ocean-blue hover:text-ocean-blue-dark transition-colors duration-200">
                              <span className="text-sm font-medium">阅读全文</span>
                              <ExternalLink className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Media Impact */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-navy mb-6 text-center">媒体影响力</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Newspaper className="w-8 h-8 text-ocean-blue" />
                </div>
                <h4 className="font-semibold text-navy mb-2">权威媒体</h4>
                <p className="text-sm text-gray-600">
                  人民日报、科学网、解放日报等权威媒体深度报道
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-ocean-blue" />
                </div>
                <h4 className="font-semibold text-navy mb-2">国际关注</h4>
                <p className="text-sm text-gray-600">
                  研究成果获得国际科学界广泛关注和认可
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-ocean-blue" />
                </div>
                <h4 className="font-semibold text-navy mb-2">社会影响</h4>
                <p className="text-sm text-gray-600">
                  提升公众对深海科学研究的认知和兴趣
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
