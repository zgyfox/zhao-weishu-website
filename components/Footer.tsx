import Link from 'next/link';
import { Mail, MapPin, Waves } from 'lucide-react';

const navigation = {
  main: [
    { name: '关于我', href: '/about' },
    { name: '研究领域', href: '/research' },
    { name: '学术成果', href: '/publications' },
    { name: '科研项目', href: '/projects' },
    { name: '科考经历', href: '/expeditions' },
    { name: '媒体报道', href: '/media' },
  ],
  contact: [
    {
      name: '邮箱',
      href: 'mailto:zwsh88@sjtu.edu.cn',
      icon: Mail,
    },
    {
      name: '地址',
      href: '#',
      icon: MapPin,
      text: '上海交通大学木兰船建大楼B410',
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <Waves className="h-8 w-8 text-ocean-blue-light" />
              <span className="text-xl font-bold">赵维殳</span>
            </div>
            <p className="text-gray-300 text-sm leading-6">
              上海交通大学生命科学技术学院副研究员，"永新"青年学者。
              专注于深海生命科学、深渊微生物和极端环境生物学研究，
              致力于探索地球最深处的生命奥秘。
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold leading-6 mb-4">快速导航</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-ocean-blue-light transition-colors duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold leading-6 mb-4">联系方式</h3>
            <ul className="space-y-3">
              {navigation.contact.map((item) => (
                <li key={item.name} className="flex items-start space-x-3">
                  <item.icon className="h-5 w-5 text-ocean-blue-light mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium">{item.name}</p>
                    {item.href.startsWith('mailto:') ? (
                      <a
                        href={item.href}
                        className="text-sm text-gray-300 hover:text-ocean-blue-light transition-colors duration-200"
                      >
                        zwsh88@sjtu.edu.cn
                      </a>
                    ) : (
                      <p className="text-sm text-gray-300">{item.text}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2025 赵维殳. 保留所有权利。
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">
              探索深海，发现生命的无限可能
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
