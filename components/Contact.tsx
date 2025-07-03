'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Building, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    console.log('Form submitted:', formData);
    alert('感谢您的留言！我会尽快回复您。');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
    <section className="py-20 bg-gray-50">
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
            <h2 className="text-4xl font-bold text-navy mb-4">联系方式</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              欢迎与我联系，讨论学术合作、研究项目或其他相关事宜
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-navy mb-6">联系信息</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-ocean-blue/10 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-ocean-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">邮箱地址</h4>
                      <p className="text-gray-600">zwsh88@sjtu.edu.cn</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-ocean-blue/10 p-3 rounded-lg">
                      <Building className="w-6 h-6 text-ocean-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">工作单位</h4>
                      <p className="text-gray-600">上海交通大学生命科学技术学院</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-ocean-blue/10 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-ocean-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">办公地址</h4>
                      <p className="text-gray-600">上海交通大学木兰船建大楼B410</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-ocean-blue/10 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-ocean-blue" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy mb-1">办公时间</h4>
                      <p className="text-gray-600">周一至周五 9:00-17:00</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Research Interests */}
              <div className="bg-gradient-to-br from-ocean-blue/5 to-blue-50 rounded-xl p-8">
                <h3 className="text-xl font-bold text-navy mb-4">合作领域</h3>
                <div className="grid grid-cols-1 gap-3">
                  {[
                    '深海生命科学研究',
                    '深渊微生物学',
                    '极端环境生物学',
                    '蛋白质结构组学',
                    '海洋生态系统研究',
                    '高压生命科学'
                  ].map((area, index) => (
                    <div key={area} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-ocean-blue rounded-full"></div>
                      <span className="text-gray-700">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={fadeInUp}>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-navy mb-6">发送消息</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        姓名 *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-colors duration-200"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        邮箱 *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-colors duration-200"
                        placeholder="请输入您的邮箱"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      主题 *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-colors duration-200"
                      placeholder="请输入消息主题"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      消息内容 *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-ocean-blue focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="请详细描述您想要讨论的内容..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-ocean-blue text-white px-6 py-3 rounded-lg font-medium hover:bg-ocean-blue-dark transition-colors duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>发送消息</span>
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
