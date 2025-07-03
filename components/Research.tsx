'use client';

import { motion } from 'framer-motion';
import { Waves, Microscope, Dna, FlaskConical, Globe, Zap } from 'lucide-react';

const researchAreas = [
  {
    icon: Waves,
    title: '深海生命科学',
    description: '研究深海极端环境中的生命形式，探索生命在高压、低温、无光条件下的适应机制',
    highlights: [
      '马里亚纳海沟生态系统研究',
      '深渊生物多样性调查',
      '极端环境生物适应性分析'
    ],
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Microscope,
    title: '深渊微生物学',
    description: '专注于深渊环境中微生物群落的结构、功能和代谢机制研究',
    highlights: [
      '深渊微生物群落结构分析',
      '微生物代谢途径研究',
      '环境微生物基因组学'
    ],
    color: 'from-teal-500 to-teal-600'
  },
  {
    icon: Dna,
    title: '极端环境生物适应机制',
    description: '揭示生物在极端环境下的分子适应机制和进化策略',
    highlights: [
      '高压适应分子机制',
      '蛋白质结构与功能关系',
      '基因表达调控机制'
    ],
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: FlaskConical,
    title: '蛋白质结构组学',
    description: '运用高通量蛋白质结构分析技术研究早期生命代谢和蛋白质进化',
    highlights: [
      '蛋白质三维结构解析',
      '结构-功能关系研究',
      '蛋白质进化分析'
    ],
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Globe,
    title: '海洋生态系统',
    description: '系统研究深海生态系统的结构、功能和生态过程',
    highlights: [
      '深海食物网结构',
      '生态系统功能评估',
      '环境变化影响研究'
    ],
    color: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Zap,
    title: '高压生命科学',
    description: '突破深海高压生命研究的技术瓶颈，开创新的研究方法和理论',
    highlights: [
      '高压培养技术开发',
      '压力适应机制研究',
      '高压生物学理论构建'
    ],
    color: 'from-orange-500 to-orange-600'
  }
];

export default function Research() {
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
            <h2 className="text-4xl font-bold text-navy mb-4">研究领域</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              专注于深海极端环境中的生命科学研究，在多个前沿领域取得重要进展
            </p>
          </motion.div>

          {/* Research Areas Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.title}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className={`h-2 bg-gradient-to-r ${area.color}`}></div>
                
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${area.color}`}>
                      <area.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-navy">{area.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {area.description}
                  </p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-navy text-sm">研究重点：</h4>
                    <ul className="space-y-1">
                      {area.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-ocean-blue rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Research Impact */}
          <motion.div
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-bold text-navy mb-6 text-center">研究影响与贡献</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-ocean-blue">40+</span>
                </div>
                <h4 className="font-semibold text-navy mb-2">突破年限</h4>
                <p className="text-sm text-gray-600">突破国际深海高压生命研究40年瓶颈</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-ocean-blue">4</span>
                </div>
                <h4 className="font-semibold text-navy mb-2">Cell论文</h4>
                <p className="text-sm text-gray-600">在顶级期刊Cell发表4篇重要研究论文</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-ocean-blue">11km</span>
                </div>
                <h4 className="font-semibold text-navy mb-2">探索深度</h4>
                <p className="text-sm text-gray-600">深入马里亚纳海沟最深处进行科学研究</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-ocean-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-ocean-blue">1st</span>
                </div>
                <h4 className="font-semibold text-navy mb-2">首次研究</h4>
                <p className="text-sm text-gray-600">首次系统性研究深渊生命适应策略</p>
              </div>
            </div>
          </motion.div>

          {/* Current Focus */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-ocean-blue to-ocean-blue-dark rounded-xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">当前研究重点</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold mb-3">MEER计划</h4>
                <p className="text-blue-100 leading-relaxed">
                  马里亚纳海沟环境与生态研究计划，系统研究深渊生态系统，
                  绘制首个海洋最深生态系统图谱。
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">国家重大项目</h4>
                <p className="text-blue-100 leading-relaxed">
                  国家自然科学基金委员会重大研究计划（92451301），
                  深海及其他典型水圈生境生命研究。
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
