import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Research from '@/components/Research';

export const metadata = {
  title: '研究领域 - 赵维殳',
  description: '深海生命科学、深渊微生物学、极端环境生物适应机制等研究领域',
};

export default function ResearchPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Research />
      </main>
      <Footer />
    </div>
  );
}
