'use client';

import { motion } from 'framer-motion';
import { Camera, Waves, Microscope, Ship, Users, Award, Anchor, Globe } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import { images } from '@/lib/images';
import { expeditionsData } from '@/lib/expeditions';

const galleryItems = [
  {
    title: '马里亚纳海沟深海科考',
    description: '深入世界最深海沟进行科学研究，探索地球最深处的生命奥秘',
    icon: Waves,
    category: '深海科考',
    image: images.expeditions.mariana[0],
    expedition: 'mariana-2024',
    depth: '10,909米',
    date: '2024年8月'
  },
  {
    title: '雅浦海沟科考探索',
    description: '13小时深海潜水作业，创造科考记录',
    icon: Anchor,
    category: '深海探索',
    image: images.expeditions.yap[0],
    expedition: 'yap-2021',
    depth: '8,178米',
    date: '2021年12月'
  },
  {
    title: '深海样本采集',
    description: '在极端环境下采集珍贵的深渊生物样本',
    icon: Microscope,
    category: '样本采集',
    image: images.research.samples,
    expedition: 'mariana-2024',
    depth: '10,000+米',
    date: '2024年'
  },
  {
    title: '科考船实验室',
    description: '在科考船上进行样本处理和数据分析',
    icon: Ship,
    category: '船上作业',
    image: images.research.lab,
    expedition: 'meer-program',
    depth: '海面作业',
    date: '2019-2024年'
  },
  {
    title: '国际团队合作',
    description: '与国际科研团队密切合作，推进深海研究',
    icon: Users,
    category: '团队协作',
    image: images.research.team,
    expedition: 'meer-program',
    depth: '多层次合作',
    date: '2019-至今'
  },
  {
    title: '深海载人潜水器',
    description: '乘坐奋斗者号载人潜水器探索深渊',
    icon: Globe,
    category: '深海探索',
    image: images.expeditions.mariana[1],
    expedition: 'mariana-2024',
    depth: '10,909米',
    date: '2024年8月'
  },
  {
    title: '科研成果展示',
    description: '在国际学术会议上展示重要研究成果',
    icon: Award,
    category: '学术交流',
    image: images.academic.conference,
    expedition: 'academic',
    depth: '学术影响',
    date: '2022-2025年'
  },
  {
    title: '菲律宾海盆调查',
    description: '系统研究西太平洋深海生态系统',
    icon: Waves,
    category: '科学调查',
    image: images.expeditions.philippines[0],
    expedition: 'philippines-2020-2022',
    depth: '6,000-8,000米',
    date: '2020-2022年'
  }
];

export default function Gallery() {
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
            <h2 className="text-4xl font-bold text-navy mb-4">科考影像</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              记录深海科考的珍贵瞬间，展现科学探索的精彩历程
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="relative">
                  <OptimizedImage
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={250}
                    className="w-full h-64 object-cover"
                    placeholder="expedition"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-ocean-blue text-white px-3 py-1 rounded-full text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {item.depth}
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-navy">{item.title}</h3>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.description}</p>

                  {/* 相关科考信息 */}
                  {item.expedition !== 'academic' && (
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Anchor className="w-3 h-3" />
                        <span>深度: {item.depth}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Camera className="w-3 h-3" />
                        <span>科考项目</span>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={fadeInUp}
            className="text-center"
          >
            <p className="text-gray-600 mb-6">
              更多科考照片和视频资料正在整理中，敬请期待...
            </p>
            <button className="bg-ocean-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-ocean-blue-dark transition-colors duration-200 flex items-center space-x-2 mx-auto">
              <Camera className="w-5 h-5" />
              <span>查看更多</span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
