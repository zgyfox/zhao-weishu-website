import Header from '@/components/Header';
import Footer from '@/components/Footer';
import News from '@/components/News';

export const metadata = {
  title: '媒体报道 - 赵维殳',
  description: '赵维殳博士的研究成果和科学贡献受到国内外媒体的广泛关注和报道',
};

export default function MediaPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <News />
      </main>
      <Footer />
    </div>
  );
}
