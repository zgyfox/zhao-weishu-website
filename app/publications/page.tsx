import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Publications from '@/components/Publications';

export const metadata = {
  title: '学术成果 - 赵维殳',
  description: '赵维殳博士在Cell等顶级期刊发表的重要学术论文和研究成果',
};

export default function PublicationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Publications />
      </main>
      <Footer />
    </div>
  );
}
