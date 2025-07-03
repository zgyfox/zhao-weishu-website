'use client';

import { motion } from 'framer-motion';
import { ChevronDown, Waves, Microscope, Award } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { profileData } from '@/lib/profile';
import { images } from '@/lib/images';

export default function Hero() {
  const scrollToNext = () => {
    const nextSection = document.getElementById('about');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-gray-100"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-ocean-blue to-ocean-blue-dark p-1">
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
              <div className="absolute -bottom-2 -right-2 bg-ocean-blue text-white p-3 rounded-full">
                <Waves className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-navy">
              {profileData.basic.name}
            </h1>
            <p className="text-xl md:text-2xl text-ocean-blue font-medium">
              深海生命科学研究者
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {profileData.basic.institution} {profileData.basic.title} · {profileData.basic.honoraryTitle}
            </p>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 bg-ocean-blue/10 rounded-lg mx-auto mb-4">
                <Waves className="w-6 h-6 text-ocean-blue" />
              </div>
              <h3 className="font-semibold text-navy mb-2">深渊探索</h3>
              <p className="text-sm text-gray-600">参与马里亚纳海沟、雅浦海沟深海科考，探索地球最深处的生命奥秘</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 bg-ocean-blue/10 rounded-lg mx-auto mb-4">
                <Microscope className="w-6 h-6 text-ocean-blue" />
              </div>
              <h3 className="font-semibold text-navy mb-2">科研突破</h3>
              <p className="text-sm text-gray-600">在Cell期刊发表重要研究成果，突破深海高压生命研究40年瓶颈</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center w-12 h-12 bg-ocean-blue/10 rounded-lg mx-auto mb-4">
                <Award className="w-6 h-6 text-ocean-blue" />
              </div>
              <h3 className="font-semibold text-navy mb-2">学术荣誉</h3>
              <p className="text-sm text-gray-600">国家自然科学基金重大研究计划项目负责人，深海生命研究领军人才</p>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-6"
          >
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {profileData.biography.short}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToNext}
                className="bg-ocean-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-ocean-blue-dark transition-colors duration-200 shadow-lg"
              >
                了解更多
              </button>
              <a
                href="/publications"
                className="border border-ocean-blue text-ocean-blue px-8 py-3 rounded-lg font-medium hover:bg-ocean-blue hover:text-white transition-colors duration-200"
              >
                查看研究成果
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <button
            onClick={scrollToNext}
            className="flex flex-col items-center space-y-2 text-gray-500 hover:text-ocean-blue transition-colors duration-200"
          >
            <span className="text-sm">向下滚动</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="w-6 h-6" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
