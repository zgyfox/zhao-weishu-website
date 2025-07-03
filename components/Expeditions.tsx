'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Target, Award, Waves, Anchor } from 'lucide-react';

const expeditions = [
  {
    title: '马里亚纳海沟深海科考',
    location: '马里亚纳海沟',
    date: '2019-2024',
    duration: '多次科考任务',
    depth: '10,909米',
    vessel: '深海勇士号、奋斗者号',
    role: '科考队员',
    description: '参与马里亚纳海沟环境与生态研究计划（MEER计划），多次深入世界最深海沟进行科学研究。',
    objectives: [
      '深渊生物样本采集',
      '环境参数测量',
      '生态系统调查',
      '地质样本收集'
    ],
    achievements: [
      '成功采集深渊沉积物样本',
      '发现新的深海微生物种类',
      '获得珍贵的深渊生物数据',
      '完成深渊生态系统调查'
    ],
    challenges: [
      '极端高压环境（1100倍大气压）',
      '完全黑暗的深海环境',
      '复杂的海底地形',
      '设备技术限制'
    ],
    significance: '首次系统性研究深渊生命，为深海生命科学研究奠定基础',
    type: 'major'
  },
  {
    title: '雅浦海沟科考探索',
    location: '雅浦海沟',
    date: '2021年12月',
    duration: '13小时+深潜',
    depth: '8,000+米',
    vessel: '深海载人潜水器',
    role: '科考队员',
    description: '参与雅浦海沟深海科考任务，进行超过13小时的深海潜水作业，创造了科考记录。',
    objectives: [
      '深海生物多样性调查',
      '海底地质结构研究',
      '深海环境监测',
      '科考技术验证'
    ],
    achievements: [
      '完成长时间深海作业',
      '收集重要科学数据',
      '验证深海科考技术',
      '获得珍贵影像资料'
    ],
    challenges: [
      '长时间密闭空间作业',
      '复杂的深海操作',
      '设备故障风险',
      '人员安全保障'
    ],
    significance: '推动了深海科考技术发展，为后续深海研究积累经验',
    type: 'expedition'
  },
  {
    title: '菲律宾海盆科学调查',
    location: '菲律宾海盆',
    date: '2020-2022',
    duration: '多次调查',
    depth: '6,000-8,000米',
    vessel: '科考船队',
    role: '研究人员',
    description: '参与菲律宾海盆深海环境和生物群落的综合科学调查，研究深海生态系统特征。',
    objectives: [
      '深海生态系统研究',
      '生物群落结构分析',
      '环境因子监测',
      '样本系统采集'
    ],
    achievements: [
      '建立深海生物样本库',
      '完成生态系统评估',
      '发表重要研究成果',
      '推进国际合作'
    ],
    challenges: [
      '恶劣海况条件',
      '复杂的采样作业',
      '数据处理挑战',
      '国际协调工作'
    ],
    significance: '丰富了对西太平洋深海生态系统的认知',
    type: 'research'
  }
];

const getExpeditionTypeColor = (type: string) => {
  switch (type) {
    case 'major':
      return 'from-blue-600 to-blue-700';
    case 'expedition':
      return 'from-teal-600 to-teal-700';
    case 'research':
      return 'from-indigo-600 to-indigo-700';
    default:
      return 'from-gray-600 to-gray-700';
  }
};

const getExpeditionTypeLabel = (type: string) => {
  switch (type) {
    case 'major':
      return '重大科考';
    case 'expedition':
      return '深海探索';
    case 'research':
      return '科学调查';
    default:
      return '科考任务';
  }
};

export default function Expeditions() {
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
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
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
            <h2 className="text-4xl font-bold text-navy mb-4">科考经历</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              深入地球最深处，探索生命的极限，每一次科考都是对未知世界的勇敢探索
            </p>
          </motion.div>

          {/* Expedition Stats */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12"
          >
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-ocean-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Anchor className="w-6 h-6 text-ocean-blue" />
              </div>
              <div className="text-2xl font-bold text-navy mb-1">10,909m</div>
              <div className="text-sm text-gray-600">最大深潜深度</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-ocean-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-ocean-blue" />
              </div>
              <div className="text-2xl font-bold text-navy mb-1">13+</div>
              <div className="text-sm text-gray-600">小时深海作业</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-ocean-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Waves className="w-6 h-6 text-ocean-blue" />
              </div>
              <div className="text-2xl font-bold text-navy mb-1">3</div>
              <div className="text-sm text-gray-600">主要海沟科考</div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-6 text-center">
              <div className="w-12 h-12 bg-ocean-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Award className="w-6 h-6 text-ocean-blue" />
              </div>
              <div className="text-2xl font-bold text-navy mb-1">100%</div>
              <div className="text-sm text-gray-600">任务成功率</div>
            </div>
          </motion.div>

          {/* Expeditions Timeline */}
          <motion.div variants={staggerContainer} className="space-y-8">
            {expeditions.map((expedition, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${getExpeditionTypeColor(expedition.type)}`}></div>
                
                <div className="p-8">
                  {/* Expedition Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getExpeditionTypeColor(expedition.type)}`}>
                          {getExpeditionTypeLabel(expedition.type)}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-navy mb-4">{expedition.title}</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{expedition.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{expedition.date}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4" />
                          <span>{expedition.duration}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Anchor className="w-4 h-4" />
                          <span>深度：{expedition.depth}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Waves className="w-4 h-4" />
                          <span>载具：{expedition.vessel}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>角色：{expedition.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {expedition.description}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-6">
                    {/* Objectives */}
                    <div>
                      <h4 className="font-semibold text-navy mb-3 flex items-center">
                        <Target className="w-4 h-4 mr-2" />
                        科考目标
                      </h4>
                      <ul className="space-y-2">
                        {expedition.objectives.map((objective, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-ocean-blue rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-navy mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        主要成果
                      </h4>
                      <ul className="space-y-2">
                        {expedition.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Challenges */}
                    <div>
                      <h4 className="font-semibold text-navy mb-3">面临挑战</h4>
                      <ul className="space-y-2">
                        {expedition.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{challenge}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Significance */}
                  <div className="bg-gradient-to-r from-ocean-blue/5 to-blue-50 rounded-lg p-4">
                    <h4 className="font-semibold text-navy mb-2">科学意义</h4>
                    <p className="text-sm text-gray-700">{expedition.significance}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Expedition Philosophy */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-ocean-blue to-ocean-blue-dark rounded-xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">科考精神</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              "每一次深海科考都是对人类极限的挑战，也是对科学精神的践行。
              在地球最深处，我们不仅要面对极端的自然环境，更要保持严谨的科学态度。
              正是这种勇于探索、敢于挑战的精神，推动着人类对深海生命的认知不断深入。"
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
