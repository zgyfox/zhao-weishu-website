import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Expeditions from '@/components/Expeditions';

export const metadata = {
  title: '科考经历 - 赵维殳',
  description: '赵维殳博士的深海科考经历，包括马里亚纳海沟、雅浦海沟等重要科考任务',
};

export default function ExpeditionsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Expeditions />
      </main>
      <Footer />
    </div>
  );
}
