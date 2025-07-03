import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Projects from '@/components/Projects';

export const metadata = {
  title: '科研项目 - 赵维殳',
  description: '赵维殳博士参与和主持的重要科研项目，包括MEER计划等重大研究项目',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
