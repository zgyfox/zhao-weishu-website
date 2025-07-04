'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ChevronDown, Waves, Microscope, Award, Zap, Globe } from 'lucide-react';
import Lottie from 'lottie-react';
import { gsap } from 'gsap';
import OptimizedImage from './OptimizedImage';
import { profileData } from '@/lib/profile';
import { images } from '@/lib/images';

// 粒子动画组件
function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || typeof window === 'undefined') return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // 创建粒子
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 3 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.2
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        if (particle.x < 0 || particle.x > canvas.width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.speedY *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${particle.opacity})`;
        ctx.fill();

        // 连接附近的粒子
        particles.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.1 * (100 - distance) / 100})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-30"
    />
  );
}

// 浮动元素组件
function FloatingElements() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full opacity-20"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2
          }}
          style={{
            left: `${10 + i * 15}%`,
            top: `${20 + i * 10}%`,
          }}
        />
      ))}
    </div>
  );
}

export default function EnhancedHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // GSAP 动画
    const tl = gsap.timeline();
    
    tl.from('.hero-title', {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    })
    .from('.hero-subtitle', {
      y: 50,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    }, '-=0.5')
    .from('.hero-description', {
      y: 30,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.3')
    .from('.hero-buttons button', {
      y: 20,
      opacity: 0,
      duration: 0.4,
      stagger: 0.1,
      ease: 'power3.out'
    }, '-=0.2');

  }, []);

  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
    >
      {/* 背景效果 */}
      <ParticleBackground />
      <FloatingElements />
      
      {/* 渐变遮罩 */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-purple-600/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center text-white">
        {/* 头像区域 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 180 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* 发光效果 */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl opacity-30 animate-pulse" />
            
            {/* 旋转光圈 */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/50"
            />
            
            <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <OptimizedImage
                  src={images.profile.main}
                  alt={profileData.basic.name + "博士个人照片"}
                  width={176}
                  height={176}
                  className="w-44 h-44 rounded-full"
                  placeholder="profile"
                  priority
                />
              </div>
            </div>
            
            {/* 浮动图标 */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white p-3 rounded-full shadow-lg"
            >
              <Waves className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>

        {/* 主标题 */}
        <div className="space-y-6">
          <h1 className="hero-title text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-200 via-white to-cyan-200 bg-clip-text text-transparent">
            {profileData.basic.name}
          </h1>
          
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-1 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 mx-auto max-w-md rounded-full"
          />
          
          <p className="hero-subtitle text-2xl md:text-3xl text-blue-200 font-medium">
            深海生命科学研究者
          </p>
          
          <p className="hero-description text-lg text-blue-100/80 max-w-3xl mx-auto leading-relaxed">
            {profileData.basic.institution} {profileData.basic.title} · {profileData.basic.honoraryTitle}
          </p>
        </div>

        {/* 成就卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-16"
        >
          {[
            { icon: Waves, title: "深渊探索", desc: "马里亚纳海沟科考", color: "from-blue-500 to-cyan-500" },
            { icon: Zap, title: "科研突破", desc: "Cell期刊重要成果", color: "from-purple-500 to-pink-500" },
            { icon: Globe, title: "国际影响", desc: "深海生命研究领跑", color: "from-green-500 to-emerald-500" }
          ].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${item.color} mb-4`}>
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-blue-200/80">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* 按钮组 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToNext}
            className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            探索研究成果
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
          >
            查看科考历程
          </motion.button>
        </motion.div>

        {/* 滚动指示器 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            className="flex flex-col items-center space-y-2 text-white/70 hover:text-white transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-sm font-medium">继续探索</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
} 