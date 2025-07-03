'use client';

import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award, Users, BookOpen } from 'lucide-react';
import { profileData } from '@/lib/profile';
import OptimizedImage from './OptimizedImage';
import { images } from '@/lib/images';

export default function About() {
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
    <section id="about" className="py-20 bg-white">
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
            <h2 className="text-4xl font-bold text-navy mb-4">关于我</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              一位致力于探索深海生命奥秘的青年科学家，在极端环境生物学研究领域取得了重要突破
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Personal Info */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* 学术照片 */}
              <div className="flex justify-center lg:justify-start">
                <OptimizedImage
                  src={images.profile.academic}
                  alt="赵维殳博士学术照片"
                  width={300}
                  height={400}
                  className="rounded-lg shadow-lg"
                  placeholder="profile"
                />
              </div>

              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  赵维殳博士是深海生命科学领域的杰出青年科学家，现任上海交通大学生命科学技术学院副研究员，"永新"青年学者。她于2007年进入上海交通大学生命科学技术学院攻读生物工程专业，2011年获得工学学士学位。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  作为一名"85后"科学家，赵维殳博士始终怀着对深海生命奥秘的强烈好奇心和探索精神。她的研究工作主要集中在深海生命科学、深渊微生物学、极端环境生物适应机制等前沿领域。她是马里亚纳海沟环境与生态研究计划（MEER计划）的核心成员，多次参与深海科考任务，深入地球最深处探索生命的极限。
                </p>
                <p className="text-gray-700 leading-relaxed">
                  在学术研究方面，赵维殳博士取得了令人瞩目的成就。她在Cell等国际顶级期刊发表了多篇重要论文，其中作为共同第一作者和通讯作者的研究成果突破了国际深海高压生命研究40年的技术瓶颈，实现了人类对深渊生命的首次系统性认知。
                </p>
              </div>

              {/* Key Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-ocean-blue" />
                    <div>
                      <p className="font-medium text-navy">工作地点</p>
                      <p className="text-sm text-gray-600">{profileData.basic.institution}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-ocean-blue" />
                    <div>
                      <p className="font-medium text-navy">学术称号</p>
                      <p className="text-sm text-gray-600">{profileData.basic.honoraryTitle}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-ocean-blue" />
                    <div>
                      <p className="font-medium text-navy">出生年份</p>
                      <p className="text-sm text-gray-600">{profileData.basic.birthYear}年</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-ocean-blue" />
                    <div>
                      <p className="font-medium text-navy">研究团队</p>
                      <p className="text-sm text-gray-600">MEER计划核心成员</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Education & Career */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="bg-gradient-to-br from-ocean-blue/5 to-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-navy mb-6 flex items-center">
                  <GraduationCap className="w-6 h-6 mr-3 text-ocean-blue" />
                  教育背景
                </h3>
                
                <div className="space-y-6">
                  {profileData.education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-ocean-blue pl-6">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold text-navy">{edu.degree}</h4>
                        <span className="text-sm text-gray-500">{edu.period}</span>
                      </div>
                      <p className="text-gray-600">{edu.institution}</p>
                      <p className="text-sm text-gray-500">{edu.major}</p>
                      {edu.achievements && (
                        <ul className="mt-2 space-y-1">
                          {edu.achievements.map((achievement, idx) => (
                            <li key={idx} className="text-xs text-gray-500 flex items-center">
                              <div className="w-1 h-1 bg-ocean-blue rounded-full mr-2"></div>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-ocean-blue/5 to-blue-50 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-navy mb-6 flex items-center">
                  <BookOpen className="w-6 h-6 mr-3 text-ocean-blue" />
                  研究专长
                </h3>
                
                <div className="grid grid-cols-1 gap-4">
                  {profileData.expertise.map((expertise, index) => (
                    <motion.div
                      key={expertise.area}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                        <span className="text-gray-700">{expertise.area}</span>
                      </div>
                      <div className="text-xs text-gray-500">
                        {expertise.years}年经验
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Research Philosophy */}
          <motion.div
            variants={fadeInUp}
            className="bg-gradient-to-r from-ocean-blue to-ocean-blue-dark rounded-xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4">研究理念</h3>
            <p className="text-lg leading-relaxed max-w-4xl mx-auto">
              {profileData.biography.philosophy}
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
