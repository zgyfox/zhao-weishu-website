import Header from '@/components/Header';
import Footer from '@/components/Footer';
import About from '@/components/About';

export const metadata = {
  title: '关于我 - 赵维殳',
  description: '了解赵维殳博士的教育背景、研究经历和学术成就',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <About />
      </main>
      <Footer />
    </div>
  );
}
