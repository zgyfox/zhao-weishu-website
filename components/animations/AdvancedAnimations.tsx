'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
// import Lottie from 'lottie-react';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// 深海下潜动画组件
export function DeepSeaDiveAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900">
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <div className="text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-32 h-32 mx-auto mb-8 bg-white/20 rounded-full flex items-center justify-center"
          >
            <div className="w-24 h-24 bg-white/30 rounded-full flex items-center justify-center">
              <span className="text-2xl">🌊</span>
            </div>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            深海探索之旅
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl"
          >
            跟随赵维殳博士探索地球最深处的奥秘
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

// 科研时间线动画
export function ResearchTimeline() {
  const timelineData = [
    { year: '2019', title: 'MEER计划启动', description: '马里亚纳海沟环境与生态研究计划开始' },
    { year: '2021', title: '雅浦海沟科考', description: '13小时深海潜水作业创造记录' },
    { year: '2024', title: '马里亚纳深潜', description: '深入10,909米深渊进行科学研究' },
    { year: '2025', title: 'Cell论文发表', description: '4篇重要论文同时发表，突破40年瓶颈' },
  ];

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-16 text-navy"
        >
          科研历程
        </motion.h2>
        
        <div className="relative">
          {/* 时间线主线 */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-ocean-blue origin-top"
            style={{ height: '100%' }}
          />
          
          {timelineData.map((item, index) => (
            <TimelineItem
              key={item.year}
              item={item}
              index={index}
              isLeft={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// 时间线项目组件
function TimelineItem({ item, index, isLeft }: { 
  item: any; 
  index: number; 
  isLeft: boolean; 
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.2, duration: 0.6 }}
      className={`relative flex items-center mb-16 ${isLeft ? 'justify-start' : 'justify-end'}`}
    >
      <div className={`w-5/12 ${isLeft ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-ocean-blue"
        >
          <div className="text-2xl font-bold text-ocean-blue mb-2">{item.year}</div>
          <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </motion.div>
      </div>
      
      {/* 时间点 */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
        className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-ocean-blue rounded-full border-4 border-white shadow-lg z-10"
      />
    </motion.div>
  );
}

// 数据可视化动画
export function ResearchStatsAnimation() {
  const stats = [
    { label: 'Cell论文', value: 4, max: 10, color: 'bg-red-500' },
    { label: '科考深度', value: 10909, max: 11000, color: 'bg-blue-500', unit: 'm' },
    { label: '研究年限', value: 8, max: 10, color: 'bg-green-500', unit: '年' },
    { label: '合作机构', value: 25, max: 30, color: 'bg-purple-500' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold text-center mb-16 text-navy"
        >
          研究成果统计
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

// 统计卡片组件
function StatCard({ stat, index }: { stat: any; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="bg-white p-6 rounded-xl shadow-lg border"
    >
      <h3 className="text-lg font-semibold text-gray-700 mb-4">{stat.label}</h3>
      
      {/* 进度条动画 */}
      <div className="relative mb-4">
        <div className="w-full bg-gray-200 rounded-full h-3">
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: `${(stat.value / stat.max) * 100}%` } : {}}
            transition={{ delay: index * 0.1 + 0.5, duration: 1.5, ease: "easeOut" }}
            className={`h-3 rounded-full ${stat.color}`}
          />
        </div>
      </div>
      
      {/* 数值动画 */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
        className="text-3xl font-bold text-navy"
      >
        <CountUpAnimation target={stat.value} />
        {stat.unit && <span className="text-lg text-gray-500 ml-1">{stat.unit}</span>}
      </motion.div>
    </motion.div>
  );
}

// 数字递增动画
function CountUpAnimation({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || !ref.current) return;

    let start = 0;
    const duration = 2000; // 2秒
    const increment = target / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(timer);
      }
      if (ref.current) {
        ref.current.textContent = Math.floor(start).toLocaleString();
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return <span ref={ref}>0</span>;
}

// 悬浮粒子背景动画
export function ParticleBackground() {
  const particles = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-1 h-1 bg-ocean-blue/20 rounded-full"
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
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}

// Lottie动画组件 (需要安装lottie-react)
export function LottieAnimation({ animationData, className }: { 
  animationData: any; 
  className?: string; 
}) {
  // return (
  //   <Lottie
  //     animationData={animationData}
  //     className={className}
  //     loop={true}
  //   />
  // );
  
  // 临时占位符
  return (
    <div className={`bg-gray-200 rounded-lg flex items-center justify-center ${className}`}>
      <span className="text-gray-500">Lottie动画占位符</span>
    </div>
  );
}
