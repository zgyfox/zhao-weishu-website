// 图片资源管理
export const images = {
  // 个人照片 (使用占位符，实际部署时替换为真实照片)
  profile: {
    main: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    academic: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&h=400&fit=crop&crop=face',
    expedition: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=400&fit=crop&crop=face',
  },

  // 科考照片 (使用深海相关的真实图片)
  expeditions: {
    mariana: [
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop', // 深海潜水器
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop', // 海洋研究
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop', // 深海探索
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop', // 科考船
    ],
    yap: [
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop', // 深海科考
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop', // 潜水作业
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop', // 海洋探索
    ],
    philippines: [
      'https://images.unsplash.com/photo-1583212292454-1fe6229603b7?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=600&fit=crop',
    ],
  },

  // 研究相关
  research: {
    lab: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop', // 实验室
    samples: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&h=400&fit=crop', // 样本研究
    equipment: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop', // 研究设备
    team: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&h=400&fit=crop', // 研究团队
  },

  // 学术活动
  academic: {
    conference: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=500&fit=crop', // 会议演讲
    award: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=500&fit=crop', // 颁奖典礼
    collaboration: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=500&fit=crop', // 国际合作
  },

  // 媒体相关
  media: {
    interview: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=500&fit=crop',
    news: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&h=500&fit=crop',
  }
};

// 图片占位符配置
export const placeholderConfig = {
  profile: {
    width: 400,
    height: 400,
    alt: '赵维殳博士个人照片'
  },
  expedition: {
    width: 800,
    height: 600,
    alt: '深海科考照片'
  },
  research: {
    width: 600,
    height: 400,
    alt: '研究工作照片'
  },
  academic: {
    width: 700,
    height: 500,
    alt: '学术活动照片'
  }
};
