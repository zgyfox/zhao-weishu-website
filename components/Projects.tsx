'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Award, ExternalLink, MapPin, Target } from 'lucide-react';

const projects = [
  {
    title: '马里亚纳海沟环境与生态研究计划 (MEER)',
    period: '2019-2025',
    status: '进行中',
    role: '核心成员',
    funding: '国家自然科学基金委员会重大研究计划',
    fundingNumber: '92451301',
    description: '系统研究马里亚纳海沟深渊生态系统，绘制首个海洋最深生态系统图谱，揭示深渊生命适应机制。',
    objectives: [
      '深渊生物多样性调查',
      '极端环境适应机制研究',
      '深渊生态系统功能评估',
      '生命起源与演化研究'
    ],
    achievements: [
      '在Cell期刊发表4篇重要论文',
      '突破深海高压生命研究40年瓶颈',
      '首次系统性研究深渊生命',
      '建立深渊生物样本库'
    ],
    collaborators: [
      '上海交通大学',
      '中国科学院深海科学与工程研究所',
      '华大集团',
      '青岛华大基因研究院'
    ],
    type: 'major'
  },
  {
    title: '深海及其他典型水圈生境生命研究',
    period: '2020-2024',
    status: '进行中',
    role: '项目负责人',
    funding: '国家自然科学基金委员会',
    fundingNumber: '92451301',
    description: '研究深海等典型水圈生境中的生命形式，探索极端环境下的生命适应策略和演化机制。',
    objectives: [
      '深海生命形式调查',
      '环境适应机制研究',
      '生命演化路径分析',
      '生态系统功能研究'
    ],
    achievements: [
      '发现新的深海微生物种类',
      '揭示高压适应分子机制',
      '建立深海生命数据库',
      '发表多篇高影响因子论文'
    ],
    collaborators: [
      '上海交通大学生命科学技术学院',
      '深部生命国际研究中心',
      '自然科学研究院'
    ],
    type: 'research'
  },
  {
    title: '高通量蛋白结构组学方法开发',
    period: '2021-2023',
    status: '已完成',
    role: '第一作者',
    funding: '上海交通大学',
    description: '开发高通量蛋白质结构分析技术，用于研究早期生命代谢和蛋白质进化机制。',
    objectives: [
      '蛋白质结构预测方法优化',
      '高通量分析流程建立',
      '早期生命代谢研究',
      '蛋白质进化分析'
    ],
    achievements: [
      '建立蛋白结构组学新方法',
      '发表方法学创新论文',
      '为深海蛋白研究提供工具',
      '推动结构生物学发展'
    ],
    collaborators: [
      '上海交通大学生命科学技术学院',
      '自然科学研究院'
    ],
    type: 'methodology'
  },
  {
    title: '雅浦海沟深海科考项目',
    period: '2021',
    status: '已完成',
    role: '科考队员',
    funding: '国家深海科考计划',
    description: '参与雅浦海沟深海科考任务，深潜超过13小时，收集珍贵的深海生物样本和数据。',
    objectives: [
      '深海生物样本采集',
      '环境数据收集',
      '深海设备测试',
      '科考技术验证'
    ],
    achievements: [
      '成功完成深海科考任务',
      '收集大量珍贵样本',
      '获得重要科考数据',
      '验证深海科考技术'
    ],
    collaborators: [
      '中国科学院深海科学与工程研究所',
      '上海交通大学',
      '国家深海基地管理中心'
    ],
    type: 'expedition'
  }
];

const getProjectTypeColor = (type: string) => {
  switch (type) {
    case 'major':
      return 'from-red-500 to-red-600';
    case 'research':
      return 'from-blue-500 to-blue-600';
    case 'methodology':
      return 'from-green-500 to-green-600';
    case 'expedition':
      return 'from-purple-500 to-purple-600';
    default:
      return 'from-gray-500 to-gray-600';
  }
};

const getProjectTypeLabel = (type: string) => {
  switch (type) {
    case 'major':
      return '重大项目';
    case 'research':
      return '研究项目';
    case 'methodology':
      return '方法开发';
    case 'expedition':
      return '科考项目';
    default:
      return '科研项目';
  }
};

const getStatusColor = (status: string) => {
  switch (status) {
    case '进行中':
      return 'bg-green-100 text-green-800';
    case '已完成':
      return 'bg-blue-100 text-blue-800';
    case '计划中':
      return 'bg-yellow-100 text-yellow-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function Projects() {
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
            <h2 className="text-4xl font-bold text-navy mb-4">科研项目</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              参与和主持的重要科研项目，涵盖深海生命科学研究的各个方面
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div variants={staggerContainer} className="space-y-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className={`h-2 bg-gradient-to-r ${getProjectTypeColor(project.type)}`}></div>
                
                <div className="p-8">
                  {/* Project Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${getProjectTypeColor(project.type)}`}>
                          {getProjectTypeLabel(project.type)}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                      </div>
                      
                      <h3 className="text-2xl font-bold text-navy mb-3">{project.title}</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>项目周期：{project.period}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>担任角色：{project.role}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4" />
                          <span>资助机构：{project.funding}</span>
                        </div>
                        {project.fundingNumber && (
                          <div className="flex items-center space-x-2">
                            <Target className="w-4 h-4" />
                            <span>项目编号：{project.fundingNumber}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Project Details Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Objectives */}
                    <div>
                      <h4 className="font-semibold text-navy mb-3">研究目标</h4>
                      <ul className="space-y-2">
                        {project.objectives.map((objective, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-ocean-blue rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{objective}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="font-semibold text-navy mb-3">主要成果</h4>
                      <ul className="space-y-2">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-gray-600">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Collaborators */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h4 className="font-semibold text-navy mb-3">合作单位</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.collaborators.map((collaborator, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                        >
                          {collaborator}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Statistics */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-ocean-blue to-ocean-blue-dark rounded-xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">项目统计</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">4+</div>
                <div className="text-blue-100">主要项目</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">6年</div>
                <div className="text-blue-100">研究经验</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">10+</div>
                <div className="text-blue-100">合作机构</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-blue-100">项目成功率</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
