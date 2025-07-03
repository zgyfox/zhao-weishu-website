'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronDown, 
  Mail, 
  MapPin, 
  Award, 
  Microscope, 
  Waves, 
  ArrowRight, 
  Download, 
  ExternalLink, 
  Play,
  Star,
  Users,
  BookOpen,
  Globe
} from 'lucide-react';
import { profileData } from '@/lib/profile';
import OptimizedImage from './OptimizedImage';
import { images } from '@/lib/images';
import Button from './ui/Button';
import Card from './ui/Card';
import { cn, scrollToElement } from '@/lib/utils';

export default function PremiumHero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { icon: BookOpen, label: '发表论文', value: '15+', color: 'text-blue-600' },
    { icon: Award, label: '学术奖项', value: '8+', color: 'text-emerald-600' },
    { icon: Microscope, label: '研究项目', value: '12+', color: 'text-purple-600' },
    { icon: Globe, label: '国际合作', value: '20+', color: 'text-orange-600' }
  ];

  const achievements = [
    'Cell期刊第一作者',
    'MEER计划核心成员',
    '深海科考13小时记录',
    '40年技术瓶颈突破'
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* 动态背景 */}
      <div className="absolute inset-0">
        {/* 渐变背景 */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-slate-900/80 to-emerald-900/50" />
        
        {/* 动态粒子效果 */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          ))}
        </div>

        {/* 波浪效果 */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-32 opacity-30"
          style={{ y }}
        >
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path
              d="M0,60 C300,120 900,0 1200,60 L1200,120 L0,120 Z"
              fill="url(#wave-gradient)"
            />
            <defs>
              <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#14b8a6" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>

      {/* 主要内容 */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20"
        style={{ opacity }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* 左侧内容 */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* 标签 */}
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-blue-500/20 backdrop-blur-sm rounded-full border border-blue-400/30"
              whileHover={{ scale: 1.05 }}
            >
              <Star className="w-4 h-4 text-yellow-400 mr-2" />
              <span className="text-blue-100 text-sm font-medium">深海生命科学领域专家</span>
            </motion.div>

            {/* 主标题 */}
            <div className="space-y-4">
              <motion.h1
                className="text-5xl lg:text-7xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  赵维殳
                </span>
                <br />
                <span className="text-3xl lg:text-4xl text-gray-300 font-normal">
                  Dr. Weishu Zhao
                </span>
              </motion.h1>

              <motion.div
                className="space-y-2"
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <p className="text-xl text-blue-200 font-medium">
                  {profileData.basic.title} · {profileData.basic.honoraryTitle}
                </p>
                <p className="text-lg text-gray-300">
                  {profileData.basic.institution}
                </p>
              </motion.div>
            </div>

            {/* 描述 */}
            <motion.p
              className="text-lg text-gray-300 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              探索地球最深处的生命奥秘，突破深海高压生命研究40年技术瓶颈，
              在Cell等顶级期刊发表重要研究成果，推动人类对深渊生命的系统性认知。
            </motion.p>

            {/* 成就标签 */}
            <motion.div
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              {achievements.map((achievement, index) => (
                <motion.span
                  key={achievement}
                  className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm border border-emerald-400/30"
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(16, 185, 129, 0.3)' }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  {achievement}
                </motion.span>
              ))}
            </motion.div>

            {/* 操作按钮 */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <Button
                variant="primary"
                size="lg"
                glow
                icon={<ArrowRight className="w-5 h-5" />}
                iconPosition="right"
                onClick={() => scrollToElement('about')}
                className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
              >
                了解更多
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                icon={<Download className="w-5 h-5" />}
                onClick={() => window.open('/cv.pdf', '_blank')}
                className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
              >
                下载简历
              </Button>
              
              <Button
                variant="ghost"
                size="lg"
                icon={<Mail className="w-5 h-5" />}
                onClick={() => window.location.href = `mailto:${profileData.basic.email}`}
                className="text-white hover:bg-white/10"
              >
                联系我
              </Button>
            </motion.div>
          </motion.div>

          {/* 右侧内容 */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* 主要图片 */}
            <Card variant="glass" className="p-6 bg-white/5 backdrop-blur-md border-white/10">
              <div className="relative">
                <motion.div
                  className="relative overflow-hidden rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <OptimizedImage
                    src={images.profile.main}
                    alt="赵维殳博士"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                    placeholder="profile"
                  />
                  
                  {/* 悬浮播放按钮 */}
                  <motion.button
                    className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </motion.button>
                </motion.div>

                {/* 浮动信息卡片 */}
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isLoaded ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 1.6 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-700">正在进行深海研究</span>
                  </div>
                </motion.div>
              </div>
            </Card>

            {/* 统计数据 */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.8 }}
            >
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  variant="glass"
                  className="p-4 bg-white/5 backdrop-blur-md border-white/10 text-center"
                  hover
                  glow
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isLoaded ? { scale: 1 } : {}}
                    transition={{ delay: 2.0 + index * 0.1, type: "spring" }}
                  >
                    <stat.icon className={cn("w-8 h-8 mx-auto mb-2", stat.color)} />
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </motion.div>
                </Card>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* 滚动指示器 */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 2.5 }}
      >
        <motion.button
          onClick={() => scrollToElement('about')}
          className="flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors"
          whileHover={{ y: -5 }}
        >
          <span className="text-sm">向下滚动</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
