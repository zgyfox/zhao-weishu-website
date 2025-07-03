import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contact from '@/components/Contact';

export const metadata = {
  title: '联系方式 - 赵维殳',
  description: '联系赵维殳博士，讨论学术合作、研究项目或其他相关事宜',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
