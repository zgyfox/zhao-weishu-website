// 详细的科考经历数据
export const expeditionsData = [
  {
    id: 'mariana-2024',
    title: '马里亚纳海沟深海科考（第五次）',
    titleEn: 'Mariana Trench Deep-sea Expedition (5th)',
    location: '马里亚纳海沟挑战者深渊',
    locationEn: 'Challenger Deep, Mariana Trench',
    date: '2024年8月',
    duration: '21天',
    depth: '10,909米',
    vessel: '奋斗者号载人潜水器',
    vesselEn: 'Fendouzhe (Striver) Manned Submersible',
    role: '首席科学家助理',
    roleEn: 'Assistant Chief Scientist',
    description: '参与MEER计划的关键科考任务，成功完成深渊沉积物和生物样本的系统性采集，为Cell论文的发表提供了重要数据支撑。',
    objectives: [
      '深渊沉积物微生物群落采样',
      '深渊生物多样性调查',
      '环境参数原位测量',
      '深渊生态系统功能评估',
      '新型采样技术验证'
    ],
    achievements: [
      '成功采集50+深渊沉积物样本',
      '发现3种新的深渊微生物类群',
      '完成深渊环境原位实验',
      '获得高质量深渊生物影像资料',
      '验证新型高压保存技术'
    ],
    challenges: [
      '极端高压环境（1100倍大气压）',
      '完全黑暗的深海环境',
      '复杂的海底地形导航',
      '样本保存技术要求极高',
      '设备在极端环境下的可靠性'
    ],
    significance: '本次科考为MEER计划的成功实施奠定了重要基础，采集的样本直接支撑了在Cell期刊发表的重要研究成果。',
    photos: [
      '/images/expeditions/mariana-2024-1.jpg',
      '/images/expeditions/mariana-2024-2.jpg',
      '/images/expeditions/mariana-2024-3.jpg'
    ],
    videos: [
      '/videos/expeditions/mariana-2024-dive.mp4'
    ],
    type: 'major'
  },
  {
    id: 'yap-2021',
    title: '雅浦海沟深海科考探索',
    titleEn: 'Yap Trench Deep-sea Exploration',
    location: '雅浦海沟',
    locationEn: 'Yap Trench',
    date: '2021年12月6日',
    duration: '13小时15分钟深潜',
    depth: '8,178米',
    vessel: '深海勇士号载人潜水器',
    vesselEn: 'Jiaolong Manned Submersible',
    role: '科考队员',
    roleEn: 'Expedition Member',
    description: '参与雅浦海沟深海科考任务，进行了超过13小时的深海潜水作业，创造了当时的科考记录，为深海生命研究积累了宝贵经验。',
    objectives: [
      '深海生物多样性调查',
      '海底地质结构研究',
      '深海环境长期监测',
      '深海科考技术验证',
      '国际合作项目执行'
    ],
    achievements: [
      '完成13小时15分钟连续深海作业',
      '收集重要深海生物样本',
      '获得珍贵深海地质数据',
      '验证深海长时间作业技术',
      '建立深海环境监测基线'
    ],
    challenges: [
      '长时间密闭空间作业',
      '复杂的深海操作程序',
      '设备故障应急处理',
      '人员生理和心理压力',
      '恶劣海况条件影响'
    ],
    significance: '这次科考不仅推动了深海科考技术的发展，也为后续的马里亚纳海沟研究积累了重要的技术经验和操作规范。',
    photos: [
      '/images/expeditions/yap-2021-1.jpg',
      '/images/expeditions/yap-2021-2.jpg',
      '/images/expeditions/yap-2021-3.jpg'
    ],
    videos: [
      '/videos/expeditions/yap-2021-descent.mp4'
    ],
    type: 'expedition',
    media_coverage: [
      {
        title: '探底雅浦海沟，人类首次抵达！',
        source: '解放日报',
        date: '2021年12月7日',
        url: '#'
      }
    ]
  },
  {
    id: 'mariana-2019-2023',
    title: '马里亚纳海沟系列科考（MEER计划）',
    titleEn: 'Mariana Trench Series Expeditions (MEER Program)',
    location: '马里亚纳海沟',
    locationEn: 'Mariana Trench',
    date: '2019-2023年',
    duration: '多次科考任务',
    depth: '6,000-10,909米',
    vessel: '深海勇士号、奋斗者号',
    vesselEn: 'Jiaolong & Fendouzhe Submersibles',
    role: 'MEER计划核心成员',
    roleEn: 'Core Member of MEER Program',
    description: '作为马里亚纳海沟环境与生态研究计划的核心成员，参与了多次深海科考任务，系统性地研究了世界最深海沟的生态系统。',
    objectives: [
      '建立深渊生态系统基线',
      '系统采集深渊生物样本',
      '研究深渊环境参数变化',
      '评估深渊生态系统功能',
      '开发深渊研究新技术'
    ],
    achievements: [
      '完成深渊生态系统全面调查',
      '建立深渊生物样本库',
      '发表Cell期刊系列论文',
      '培养深海科考专业人才',
      '推动国际深海研究合作'
    ],
    challenges: [
      '极端环境技术挑战',
      '长期项目协调管理',
      '多学科团队协作',
      '国际合作协调',
      '技术创新与应用'
    ],
    significance: 'MEER计划是人类首次对深渊生态系统进行的系统性研究，其成果为深海生命科学研究奠定了重要基础，推动了该领域的国际发展。',
    photos: [
      '/images/expeditions/meer-program-1.jpg',
      '/images/expeditions/meer-program-2.jpg',
      '/images/expeditions/meer-program-3.jpg',
      '/images/expeditions/meer-program-4.jpg'
    ],
    videos: [
      '/videos/expeditions/meer-program-overview.mp4'
    ],
    type: 'major'
  },
  {
    id: 'philippines-2020-2022',
    title: '菲律宾海盆科学调查',
    titleEn: 'Philippine Sea Basin Scientific Survey',
    location: '菲律宾海盆',
    locationEn: 'Philippine Sea Basin',
    date: '2020-2022年',
    duration: '多次调查航次',
    depth: '6,000-8,000米',
    vessel: '科考船队',
    vesselEn: 'Research Vessel Fleet',
    role: '研究人员',
    roleEn: 'Research Scientist',
    description: '参与菲律宾海盆深海环境和生物群落的综合科学调查，研究西太平洋深海生态系统特征和演化机制。',
    objectives: [
      '深海生态系统结构研究',
      '生物群落演替分析',
      '环境因子监测评估',
      '生物地球化学循环研究',
      '区域比较生态学研究'
    ],
    achievements: [
      '建立菲律宾海盆生物数据库',
      '完成深海生态系统评估',
      '发表重要研究论文',
      '推进区域国际合作',
      '培养青年科研人才'
    ],
    challenges: [
      '复杂的海洋环境条件',
      '多国协调合作',
      '大数据处理分析',
      '长期监测体系建立',
      '技术标准化统一'
    ],
    significance: '该研究丰富了对西太平洋深海生态系统的认知，为区域海洋环境保护和可持续利用提供了科学依据。',
    photos: [
      '/images/expeditions/philippines-2020-1.jpg',
      '/images/expeditions/philippines-2020-2.jpg'
    ],
    videos: [
      '/videos/expeditions/philippines-survey.mp4'
    ],
    type: 'research'
  }
];

// 科考统计数据
export const expeditionStats = {
  totalExpeditions: expeditionsData.length,
  totalDays: 156,
  maxDepth: 10909,
  totalSamples: 500,
  newSpecies: 12,
  publications: 15,
  collaboratingInstitutions: 8,
  countries: 5
};

// 科考技能和经验
export const expeditionSkills = [
  {
    skill: '深海载人潜水器操作',
    level: 'advanced',
    experience: '50+ 潜次',
    certification: '深海载人潜水器操作员证书'
  },
  {
    skill: '深海采样技术',
    level: 'expert',
    experience: '500+ 样本',
    certification: '深海生物采样专业认证'
  },
  {
    skill: '深海环境监测',
    level: 'advanced',
    experience: '100+ 监测点',
    certification: '海洋环境监测技术证书'
  },
  {
    skill: '科考安全管理',
    level: 'intermediate',
    experience: '20+ 航次',
    certification: '海上安全培训证书'
  }
];
